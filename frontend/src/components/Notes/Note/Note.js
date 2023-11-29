export default function Note({ id, title, body }) {
  return (
    <div>
      <p>{title}</p>
      <div>{body}</div>
      <button>Edytuj</button>
      <button>usuń</button>
    </div>
  );
}
