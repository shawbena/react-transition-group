# TransitionGroup

`<TransitionGroup>` 组件管理 `<Transition>` 集合列表。类似 `<Transition>` 组件，`<TransitionGroup>` 是一个管理组件随时间挂载和卸载的的状态机器。

考虑使用下面使用来自之前的 `Fade` CSS 过渡的示例。当 TodoList 中项移除或添加时，`<TransitionGroup>` 自动切换 `in` 属性。你可以在 `<TransitonGroup>` 中使用 `<Transition>` 而不仅仅是 `<CSSTransition>`.

[TodoList](/examples/transition-group/index.tsx)

注意 `<TransitionGroup>` 不定义任何动画行为！一个组件到底怎样动画取决于单个 `<Transition>` 组件。这意味着你可以跨列表组件混合及匹配动画。

## Props

### `component`

`<TransitionGroup>` 默认渲染一个 `<div>`. 你可以提供属性改变这种行为。

type: `any`,

default: `div`

### `children`

进入及离开时切换的 `<Transition>` 组件集合。`<TransitionGroup>` 将注入特定的转换属性，所以如果你用类似示例 `<Fade>` 中那样包裹 `<Transition>` 的话，要把属性传递过去。

type: `any`

## `appear`

对所有 children 启用或禁用的便利的属性。注意指定这个属性将覆盖单个 `Transition` 子组件设置的默认值。

type: `boolean`

### `enter`

启用用禁用所有 children 进入动画的便利属性。注意指定这个属性将覆盖单个 `Transition` 子组件设置的默认值。

type: `boolean`

### `exit`

启用用禁用所有 children 退出动画的便利属性。注意指定这个属性将覆盖单个 `Transition` 子组件设置的默认值。

type: `boolean`

### `childFactory`

当子组件正在退出时你可能需要应用响应的更新。然而这通常由使用 `cloneElement` 来完成以防一个正在退出的子组件的元素已经被移除了而用户无法访问。

如果你要在子组件离开时更新他，你可以提供一个 `childFactory` 来包裹每个子组件，即使子组件已经离开也没关系。

type: `Function(child: ReactElement) -> ReactElement`
default: `child => child`

