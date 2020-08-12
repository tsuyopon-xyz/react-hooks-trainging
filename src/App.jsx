import React from 'react';
import CCButton from './components/use-state-examples/Button/ClassComponent';
import FCButton from './components/use-state-examples/Button/FunctionalComponent';

function App() {
  return (
    <div className="mt container">
      <CCButton className="ml" />
      <FCButton className="ml" />
    </div>
  );
}

export default App;
