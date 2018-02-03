# CSS Transition Group

CSS 过渡及动画需要时间，配合属性切换来完成。而且大部分情形需要 DOM 对象存在才能应用动画。

要对一个组件应用动画，就要处理组件动画属性 (或类名) 的添加、移除，或者动画开始或完成后执行组件的挂载或卸载。而应用动画本身的组件是无法完成这些工作的。因此就需要一个父组件对动画流程进行管理。`Transition` 就是这样一个很好用的组件。

# Liscense

[react-transition-group](/react-transition-group) 拷贝自 [reactjs/react-transition-group](https://github.com/reactjs/react-transition-group), 许可证同源许可证。

其他内容采用 [MTI](/LICENSE) 许可证。
