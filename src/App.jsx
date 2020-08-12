import React from 'react';
import CCButton from './components/Button/ClassComponent';
import FCButton from './components/Button/FunctionalComponent';

function App() {
  return (
    <div className="mt container">
      <CCButton className="ml" />
      <FCButton className="ml" />
    </div>
  );
}

export default App;
