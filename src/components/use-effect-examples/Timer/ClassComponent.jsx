import React, { Component } from 'react'
import './Timer.css';

class TimerClassComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      timerCount: 0
    };
  }

  componentDidMount() {
    // console.log('Mounted in CC!');

    this.intervalId = window.setInterval(() => {
      // console.log('@@@');
      this.setState({ timerCount: this.state.timerCount + 1 });
    }, 1000);
    // console.log('intervalId : ', this.intervalId);
  }

  componentDidUpdate() {
    // console.log('Updated in CC!');
  }

  componentWillUnmount() {
    console.log('Will unmount in CC!');
    window.clearInterval( this.intervalId );
  }

  render() {
    return (
      <div
        className={`Timer ${this.props.className}`}
      >
        <h3 className="Timer-title">CCタイマー</h3>
        <div className="Timer-count">{this.state.timerCount}</div>
      </div>
    )
  }
}

export default TimerClassComponent;


// 以下、補足説明用のコメント

/**
 * clearIntervalをしないと、コンポーネントが削除された後も
 * setIntervalにセットしたコールバック関数が動き続けるため、
 * コンポーネントが削除されるタイミングで明示的に、
 * clearIntervalを呼び出す必要がある。
 * （メモリリークの原因）
 *
 * Componentが取り除かれるときに呼ばれる
 * ライフサイクルメソッド内で、
 * clearIntervalをする。
 *
 * ・クラスコンポーネントの場合: componentWillUnmount
 * ・関数コンポーネントの場合: useEffectにセットするコールバック関数の戻り値であるコールバック関数の中
 */