import { useState } from 'react';
import Notes from './components/Notes/Notes';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode && 'dark'}>
      <Notes toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
    </div>
  );
}
