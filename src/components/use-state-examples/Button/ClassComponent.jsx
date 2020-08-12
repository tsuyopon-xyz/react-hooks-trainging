import React, { Component } from 'react'
import './Button.css';

class ButtonClass extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({count: this.state.count + 1});
  }

  render() {
    return (
      <div
        className={`Button ${this.props.className}`}
        onClick={this.handleClick}
      >
        CCボタン : {this.state.count}
      </div>
    )
  }
}

export default ButtonClass;


// 以下、補足説明用のコメント

/**
 * クラスコンポーネントでは、
 * "onClick" のようなイベントハンドリングをする際に
 * thisを自分自身(クラスコンポーネント)を指すようにするためには、
 *
 * ・bindする
 * ・アロー関数を活用する
 *
 * など、一手間加える必要がある
 */

/**
 * 今回のサンプルで使うonClick処理は
 * 実際には1行と短いが、thisの挙動を説明するために
 * あえて別のメソッド(=handleClick)でクリック処理を
 * 行うようにしている。
 *
 * （クリック時に実行する処理が複数行に渡る場合は、
 * 別関数・メソッドで実装することでコードが読みやすくなるため）
 */