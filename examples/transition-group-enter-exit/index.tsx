import * as React from 'react';
import { CSSTransition, TransitionGroup } from '../../react-transition-group'
import bootstrap from '../../bootstrap';
import './style.scss';

interface FadeProps {
    children: React.ReactNode;
    [prop: string]: any;
}
const Fade = ({ children, classNames, timeout, ...props }: FadeProps) => (
    <CSSTransition
        {...props}
        classNames={classNames}
        timeout={timeout}
    >
        {children}
    </CSSTransition>
);

interface TodoLisProps {

}

interface TodoListState {
    direction: string;
    flag: number;
    in: boolean;
}

class TodoList extends React.Component<TodoLisProps, TodoListState>{
    constructor(props: TodoLisProps) {
        super(props);
        this.state = {
            direction: 'right',
            flag: 0,
            in: false
        };
    }

    slideLeft(){
        let { flag, direction } = this.state;
        if(direction === 'left'){
            this.setState({ flag : flag ? 0 : 1 })
        }else{
            this.setState({ direction: 'left' }, () => {
                this.slideLeft();
            });
        }
    }

    slideRight(){
         let { flag, direction } = this.state;
        if(direction === 'right'){
            this.setState({ flag : flag ? 0 : 1})
        }else{
            this.setState({ direction: 'right' }, () => {
                this.slideRight();
            });
        }
    }

    render() {
        let classNames : string;
        let timeout = 300;
        if(this.state.direction === 'left'){
            classNames = 'slide-left';
        }else{
            classNames = 'slide-right';
        }
        let picture = (
            <Fade key={this.state.flag} classNames={classNames} timeout={timeout}>
                <div className="picture">{this.state.direction}</div>
            </Fade>
        );
        return (
            <div className="slide-right-left-example">
                <TransitionGroup className="picture-box">
                    {picture}
                </TransitionGroup>
                <button onClick={() => this.slideLeft()}>Slide Left</button>
                <button onClick={() => this.slideRight()}>Slide Right</button>
            </div>
        );
    }
}

bootstrap(TodoList);