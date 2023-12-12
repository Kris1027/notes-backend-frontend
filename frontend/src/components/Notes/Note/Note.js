import { useState } from 'react';
import { FaRegTrashAlt } from 'react-icons/fa';

export default function Note({ title, body, onDelete, onEdit }) {
  const [showDesc, setShowDesc] = useState(false);

  const handleShowDesc = () => {
    setShowDesc((prevState) => !prevState);
  };

  return (
    <div className='bg-purple-200 dark:bg-purple-950 text-purple-950 dark:text-purple-200 p-2 w-100 rounded-sm md:w-3/5 md:m-auto'>
      <div className='flex justify-between'>
        <h2
          className=' text-lg cursor-pointer bg-purple-200 dark:bg-purple-950 text-purple-950 dark:text-purple-200 font-semibold uppercase'
          onClick={handleShowDesc}
        >
          {title}
        </h2>
        <button
          className='bg-purple-200 dark:bg-purple-950 text-purple-950 dark:text-purple-200'
          onClick={onDelete}
        >
          <FaRegTrashAlt />
        </button>
      </div>
      {showDesc && (
        <p className='bg-purple-200 dark:bg-purple-950 text-purple-950 dark:text-purple-200'>
          {body}
        </p>
      )}
    </div>
  );
}
