import './components/edit-word/main';
import './components/button';
import { useState } from 'react';

function App(): JSX.Element {
  const [value, setValue] = useState();

  return (
    <div className="App">
      <header className="App-header">
        <edit-word>Morgan</edit-word>
        <hddn-button>test</hddn-button>
      </header>
    </div>
  );
}

export default App;
