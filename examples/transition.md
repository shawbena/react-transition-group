# Transition

Transition 组件使你可以以简单的声明式 API 描述一种组件状态至另随时间至一种组件状态的转换。大多常见用法是组件挂载或卸载动画，但也可用于描述状态 (states) 的就地转换。

默认，`Transition` 组件不修改他渲染的组件的行为，他仅追踪组件的 `"enter"` 及 `"exit"` 状态。这些状态有什么意义，有什么效果有你来决定。

示例：

- [transition](/examples/transition.tsx)

- [mount transition](/examples/mount-transition/index.tsx)

- [appear transition](/examples/appear-transition/index.tsx)

正如提到过的，`Transition` 组件本身不对子组件做什么。他做的是追踪随时间变化的转换状态，所以当组件改变状态时你可以更新 (如添加样式或类) 组件。

`Transition` 有4种状态：

- `ENTERING`

- `ENTERED`

- `EXITED`

转换状态由 `in` 属性切换。`true` 时组件开始 "Enter" 阶段。这个阶段，组件从当前状态转移到 `'entering'` 然后持续然后持续期间结束后至 `'entered'` 阶段。看下下面这个示例：

```jsx
state= { in: false };

toggleEnterState = () => {
  this.setState({ in: true });
}

render() {
  return (
    <div>
      <Transition in={this.state.in} timeout={500} />
      <button onClick={this.toggleEnterState}>Click to Enter</button>
    </div>
  );
}
```

当点击按钮时，组件将转移至 `'entering'` 状态然后在那里停留 500ms (`timeout` 的值) 最后切换到 `'entered'`.

当 `in` 为 `false` 也一样，只是状态是从 `'exiting'` 到 `'exited'` 罢了。

## Props

### `children`

可用一个函数子组悠扬而非一个 React 元素。以当前转换状态 ('entering', 'entered', 'exiting', 'exited', 'unmounted') 调用函数, 可用来应用特定语境的属性。 // 那 React 元素呢？

type: `Function` | `element`

required

### `in`

显示组件，触发 enter 或 exit 状态

type: `boolean`
default: `false`

### `mountOnEnter`

默认子组件在父组件 `Transition` 组件挂载后立即挂载。如果你想在第一次 `in={true}` 时 "lazy mount"，你可以设置 `mountOnEnter`. 组件第一次转换后将保持挂载，即使进入 `"exited"`, 除非指定 `unmountOnExit`.

type: `boolean`
default `false`

### `unmountOnExit`

默认在到达 `'exited'` 状态时，子组件将保持挂载。如果你相在其完成 `existing` 后卸载子组件设置 `unmountOnExit`.

type: `boolean`
default: `false`

### `appear`

正常情况下，当 `<Transition>` 组件挂载时，一个组件如果出现时是不过渡的 (transitioned). 如果你想组件第一次挂载时过渡, 设置 `appear` 为 `true`, 只要 `<Transition>` 一挂载，组件就将过渡。

注意：并没有特定的 `"appear"` 状态, `appear` 只是添加了一个额外的 `enter` 过渡。

type: `boolean`

default: `false`

### `enter`

启用或禁用进入过渡。

type: `boolean`

default: `true`

### `exit`

启用或禁用退出过渡。

type: `boolean`

default: `true`

### `timeout`

过渡持续时间，毫秒。必须的，除非提供了 `addEventListener`. 你可以指定一个 `timeout` 用于所有过渡，如 `timeout={500}`, 或像这亲单独指定：

```jsx
timeout={{
  enter: 300,
  exit: 500
}}
```

type: `number` | `{ enter?: number, exit?: number }`

### `addEndListener`

添加一个自定义的过渡结束触发器。以 DOM 节点及 `done` 回调调用。允许更精细的过渡结束逻辑控制。注意：如果提供了 `timeout`, `timeout` 作备用。

```jsx
addEndListener={(node, done) => {
  //
  node.addEventListener('transitionend', done, false);

}}
```

type: `Function`

### `onEnter`

在 `"entering"` 状态应用之前触发的回调。提供额外的参数 `isAppearing` 指出进入阶段是否发生在初始挂载。

type: `Function(node: HtmlElement, isAppearing: bool) -> void`

default: `function noop(){}`


### `onEntering`

在 `"entering"` 状态应用后触发的回调。提供额外的参数 `isAppearing` 指出进入阶段是否发生在初始挂载。

type: `Function(node: HtmlElement, isAppearing: bool)`

default: `function noop(){}`

### `onEntered`

在 `"entered"` 状态应用后触发的回调。提供额外的参数 `isAppearing` 指出进入阶段是否发生在初始挂载。

type: `Function(node: HtmlElement, isAppearing: bool) -> void`

default: `function noop(){}`

### `onExit`

`"exiting"` 状态应用前触发的回调。

type: `Function(node: HtmlElement) -> void`

default: `function noop(){}`

### `onExiting`

`"exiting"` 状态应用后触发的回调。

type: `Function(node: HtmlElement) -> void`

default: `function noop(){}`

### `onExited`

`"exited"` 状态应用后触发的回调。

## Understanding `Transition.js`

`in` 为 false 时组件的初状态是 `UNMOUNTED` (props.unmountOnExit || props.mountOnEnter) | `EXITED`

`in` 为 true 时初始状态是 `EXITED` (appear === true) | `ENTERED` (appear === false)

### `child` : `Function` | `element`

`Function`: (status: string, childProps: Object)

`element`: `React.Children.only(children)`, 组件不会接收 `status` 属性。

`CSSTransition` 组件使用的是 `element` 选项。传递元素可以能过 `Transition` 的属性获知其状态变化。

提供函数提收动画状态是有意义的，ReactNode 类型的 children 与类名一起使用合适。

### `unmountOnExit`

组件卸载是在 `exited` 状态设置后执行的。