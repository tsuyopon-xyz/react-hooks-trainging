import React, { useState, useEffect, useContext } from 'react'
import { AuthContext } from '../../../contexts/AuthContext';
import './Timer.css';

function TimerFunctionalComponent(props) {
  const [timerCount, setTimerCount] = useState(0);
  const { user, isAuthenticated } = useContext(AuthContext);

  useEffect(() => {
    console.log('Mounted or Updated in FC!!!');
    const intervalId = window.setInterval(() => {
      // console.log('@@@');
      setTimerCount(prevTimerCount => {
        return prevTimerCount + 1;
      });
    }, 1000);

    return () => {
      console.log('Will unmount in FC!!!');
      window.clearInterval(intervalId);
    };
  }, []);

  // console.log(timerCount, '@@@@@@@');

  return (
    <div
      className={`Timer ${props.className}`}
    >
      <h3 className="Timer-title">FCタイマー</h3>
      <div className="Timer-count">{timerCount}</div>
      {isAuthenticated ? <p>{user.name}</p> : null}
    </div>
  )
}

export default TimerFunctionalComponent;


// 以下、補足説明用のコメント

/**
 * useEffectの第2引数に空配列を渡すと、
 * componentDidUpdateの動作はなくなるため、
 *
 * 実質的に、クラスコンポーネントの
 * componentDidMountと同じ動作になる。
 *
 *
 *
 * useEffectの第1引数のコールバック関数の戻り値として
 * 関数を返すようにすると、
 *
 * コンポーネントが取り除かれるときに、
 * その戻り値の関数が実行される。
 *
 * 実質的に、クラスコンポーネントの
 * componentWillUnmountと同じような動作になる。
 */