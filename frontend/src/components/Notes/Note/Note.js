import { useState } from 'react';
import { FaRegTrashAlt } from 'react-icons/fa';

export default function Note({ title, body, onDelete, onEdit }) {
  const [showDesc, setShowDesc] = useState(false);

  const handleShowDesc = () => {
    setShowDesc((prevState) => !prevState);
  };

  return (
    <div className='bg-pink-400 p-2 w-100 rounded-sm'>
      <div className='flex justify-between'>
        <h2
          className=' text-lg cursor-pointer text-pink-900 font-semibold uppercase'
          onClick={handleShowDesc}
        >
          {title}
        </h2>
        <button className='text-pink-900' onClick={onDelete}>
          <FaRegTrashAlt />
        </button>
      </div>
      {showDesc && <p className='text-pink-600'>{body}</p>}
    </div>
  );
}
