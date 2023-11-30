import { useState } from 'react';

export default function Note({ title, body, onDelete, onEdit }) {
  const [showDesc, setShowDesc] = useState(false);

  const handleShowDesc = () => {
    setShowDesc((prevState) => !prevState);
  };

  return (
    <div>
      <p onClick={handleShowDesc}>{title}</p>
      {showDesc && <div>{body}</div>}
      <button onClick={onEdit}>Edytuj</button>
      <button onClick={onDelete}>usuń</button>
    </div>
  );
}
