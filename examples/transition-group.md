# TransitionGroup

`<TransitionGroup>` 组件管理 `<Transition>` 集合列表。类似 `<Transition>` 组件，`<TransitionGroup>` 是一个管理组件随时间挂载和卸载的的状态机器。

考虑使用下面使用来自之前的 `Fade` CSS 过渡的示例。当 TodoList 中项移除或添加时，`<TransitionGroup>` 自动切换 `in` 属性。你可以在 `<TransitonGroup>` 中使用 `<Transition>` 而不仅仅是 `<CSSTransition>`.