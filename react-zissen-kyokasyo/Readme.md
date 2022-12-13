React実践の教科書を購入したのでそのメモなど


大事だと思ったところ

props:
コンポーネントに渡す引数のようなもの
コンポーネントは受け取ったpropsに応じて表示するスタイルや内容を変化できる。
cssの属性とかをpropsとして渡せる便利なやつ

state(UseState):
コンポーネントの状態を表す値

現在主流となっている関数コンポーネントではReact Hooksと総称される機能群の中のuseStateという関数を用いてStateを扱っていく。


UseEffect:
useEffectはコンポーネントの副作用を制御する機能です。
useStateと同様にReactからimportします。
useEffectの役割は「ある値が変わった時に限り、ある処理を実行する」機能になります。


CSS:

(1)Inline Styles
(2)CSS Modules
```
npm install sass
```

