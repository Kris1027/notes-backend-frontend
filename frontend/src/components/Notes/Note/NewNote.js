import { useState } from 'react';

import { IoIosAddCircle } from 'react-icons/io';
import { IoIosExit } from 'react-icons/io';

export default function NewNote({ onAdd }) {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [showForm, setShowForm] = useState(false);

  const addNote = () => {
    const note = {
      title: title,
      body: desc,
    };

    onAdd(note);

    setTitle('');
    setDesc('');
    setShowForm(false);
  };

  return showForm ? (
    <div className='flex flex-col items-center'>
      <div className='flex flex-col w-full md:w-3/5 text-center'>
        <label className='font-bold bg-purple-200 dark:bg-purple-950 text-purple-950 dark:text-purple-200'>
          Title:
        </label>
        <input
          className='basis-full bg-purple-400 dark:bg-purple-800 text-purple-950 dark:text-purple-200 p-2 focus:outline-none rounded-lg'
          type='text'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label className='font-bold bg-purple-200 dark:bg-purple-950 text-purple-950 dark:text-purple-200'>
          Description:
        </label>
        <textarea
          className='basis-full bg-purple-400 dark:bg-purple-800 text-purple-950 dark:text-purple-200 p-2 focus:outline-none rounded-lg'
          type='text'
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
      </div>

      <div>
        <button
          className='text-6xl bg-purple-200 dark:bg-purple-950 text-purple-950 dark:text-purple-200'
          onClick={() => setShowForm(!showForm)}
        >
          <IoIosExit />
        </button>
        <button
          className='text-6xl bg-purple-200 dark:bg-purple-950 text-purple-950 dark:text-purple-200'
          onClick={addNote}
        >
          <IoIosAddCircle />
        </button>
      </div>
    </div>
  ) : (
    <div className='flex justify-center'>
      <button
        className='text-6xl bg-purple-200 dark:bg-purple-950 text-purple-950 dark:text-purple-200'
        onClick={() => setShowForm(!showForm)}
      >
        <IoIosAddCircle />
      </button>
    </div>
  );
}
