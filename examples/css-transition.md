# CSSTransition

使用 CSS 过渡和动画的 `Transition` 组件。受优秀的 [ng-animate](http://www.nganimate.org/) 库激励。

`CSSTransition` 在 `appear`, `enter` 及 `exit` 阶段应用一对类名。应用第一个类然后应用第二个 "active" 类以激活 css 动画。

当 `in` 属性切换为 `true` 时，组件将获取 `example-enter` CSS 类名并且 `example-enter-active` CSS 类名在下一步会添加。这是基于 `classNames` 属性的约定。

示例：

- [css transition](/examples/css-transition/index.tsx)

- [mount transition](/examples/mount-css-transiton)

- [appear transition](/examples/appear-css-transition)

## Props

除非标注，接收所有 `<Transition>` 的属性。

### `classNames`

当组件进入或退出时应用到组件上的动画类名。可提供一个单个名称用于每个阶段的前缀：如

`classNames="fade"` 应用 `fade-enter`, `fade-enter-active`, `fade-exit`, `fade-exit-active`, `fade-appear`, 及`fade-appear-active`. 也可单独指定每个类名：

```jsx
classNames={{
    appear: 'my-appear',
    appearActive: 'my-active-appear',
    enter: 'my-enter',
    enterActive: 'my-active-enter',
    exit: 'my-exit',
    exitActive: 'my-active-exit'
}}
```

type: `string` | `{ appear?: string, appearActive?: string, enter?: string, enterActive?: string, exit?: string, exitActive?: string}`

### `onEnter`

`'enter'` 或 `'appear'` 类应用后立即触发的 `<Transition>` 回调。

type: `Function(node: HtmlElement, isAppearing: bool)`

### `onEntering`

`'enter-active'` 或 `'appear-active'` 类从 DOM 节点中移除后立即触发的 `<Transition>` 回调。

type: `Function(node: HtmlElement, isAppearing: bool)`

### `onEntered`

'enter' 或 'appear' 这些类名从 DOM 节点中移除后立即触发 `<Transition>` 的回调。

type: `Function(node: HtmlElement, isAppearing: bool)`

### `onExit`

`exit-active` 类应用后立即触发的 `<Transition>` 回调。

type: `Function(node: HtmlElement)`

### `onExiting`

`exit-active` 类应用后立即触发的 `<Transition>` 回调。

type: `Function(node: HtmlElement)`

### `onExited`

在 'exit' 这些类名从 DOM 节点中移除后立即触发的 `<Transiton>` 回调。

type: `Function(node: Element)`