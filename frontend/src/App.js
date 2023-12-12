import { ThemeProvider } from './components/contexts/themeContext';

import Notes from './components/Notes/Notes';

export default function App() {
  return (
    <ThemeProvider>
      <Notes />
    </ThemeProvider>
  );
}
