ReactのHooksの勉強会で使うコード資料

2020年8月11日現在

---

## このレポジトリの概要

Reactの公式ドキュメントの「[フック API リファレンス](https://ja.reactjs.org/docs/hooks-reference.html)」の最初の方に書かれている、3つの「基本のフック」を使ったサンプルコードを用意している。

```
3つの基本のフック

- useState
- useEffect
- useContext
```

`useState` と `useEffect` に関しては、同じ機能を「クラスコンポーネント」「関数コンポーネント」の両方で実装して、両者を比較しながら解説する。

---

## 各フックの実装で共通で利用しているファイル

- src/App.jsx


## useStateの解説用サンプルファイル

- 「src/components/use-state-examples/Button/」ディレクトリ配下のファイル郡

## useEffectの解説用サンプルファイル

- 「src/components/use-effect-examples/Timer/」ディレクトリ配下のファイル群


## useContextの解説用サンプルファイル

- src/index.js
- src/contexts/AuthContext.js
- src/components/use-context-examples/Profile/Profile.jsx


## 参考資料

- React公式ドキュメント
  - [フックの導入](https://ja.reactjs.org/docs/hooks-intro.html)
  - [ステートフックの利用法](https://ja.reactjs.org/docs/hooks-state.html)
  - [副作用フックの利用法](https://ja.reactjs.org/docs/hooks-effect.html)
  - [フック API リファレンス](https://ja.reactjs.org/docs/hooks-reference.html)
  - [コンテクスト](https://ja.reactjs.org/docs/context.html)