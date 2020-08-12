import React, {useState} from 'react';

// useState確認用
import CCButton from './components/use-state-examples/Button/ClassComponent';
import FCButton from './components/use-state-examples/Button/FunctionalComponent';

// useEffect確認用
import CCTimer from './components/use-effect-examples/Timer/ClassComponent';
import FCTimer from './components/use-effect-examples/Timer/FunctionalComponent';

// useContext動作確認用
import Profile from './components/use-context-examples/Profile/Profile';

function App() {
  const [isVisibleCCTimer, setVisibleCCTimer] = useState(true);
  const [isVisibleFCTimer, setVisibleFCTimer] = useState(true);

  const renderTimerIfVisible = (forCC = true) => {
    if(forCC) {
      return (
        <div className="ml">
          <CCTimer  />
          <button onClick={() => setVisibleCCTimer(false)}>CCタイマー削除</button>
        </div>
      );
    }

    return (
      <div className="ml">
        <FCTimer  />
        <button onClick={() => setVisibleFCTimer(false)}>FCタイマー削除</button>
      </div>
    );
  };

  return (
    <div className="mt container">
      <div>
        <h2>useStateの動作確認</h2>
        <CCButton className="ml" />
        <FCButton className="ml" />
      </div>

      <hr/>

      <div>
        <h2>useEffectの動作確認</h2>
        { isVisibleCCTimer ? renderTimerIfVisible(true) : null }
        { isVisibleFCTimer ? renderTimerIfVisible(false) : null }
      </div>

      <hr/>

      <div>
        <h2>useContextの動作確認</h2>
        <Profile />
      </div>

    </div>
  );
}

export default App;
