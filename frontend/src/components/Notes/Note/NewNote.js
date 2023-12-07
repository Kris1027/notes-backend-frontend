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
    <div className='flex flex-wrap justify-center gap-2 px-10'>
      <label className='font-semibold text-pink-200'>Title:</label>
      <input
        className='basis-full bg-pink-900 text-pink-200'
        type='text'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <label className='font-semibold text-pink-200'>Description:</label>
      <textarea
        className='basis-full bg-pink-900 text-pink-200'
        type='text'
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
      />

      <button className='text-6xl text-pink-500' onClick={addNote}>
        <IoIosAddCircle />
      </button>

      <button
        className='text-6xl text-pink-500'
        onClick={() => setShowForm(!showForm)}
      >
        <IoIosExit />
      </button>
    </div>
  ) : (
    <div className='flex justify-center'>
      <button
        className='text-6xl text-pink-500'
        onClick={() => setShowForm(!showForm)}
      >
        <IoIosAddCircle />
      </button>
    </div>
  );
}
