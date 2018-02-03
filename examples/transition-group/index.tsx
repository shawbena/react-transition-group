import * as React from 'react';
import { CSSTransition, TransitionGroup } from '../../react-transition-group'
import bootstrap from '../../bootstrap';
import '../style.css';

interface FadeProps {
    children: React.ReactNode;
    [prop: string]: any;
}
const Fade = ({ children, ...props}: FadeProps) => (
    <CSSTransition
        {...props}
        timeout={3000}
        classNames="fade"
    >
        {children}
    </CSSTransition>
);

interface TodoLisProps{

}

interface TodoListState{
    items: Array<string>;
}

class TodoList extends React.Component<TodoLisProps, TodoListState>{
    constructor(props: TodoLisProps){
        super(props);
        this.state = {
            items: ['hello', 'world', 'click', 'me']
        };
    }

    handleAdd(){
        this.setState({
            items: [
                ...this.state.items,
                String(prompt('Enter some text')) // udefined -> 'undefined'
            ]
        });
    }

    handleRemove(i: number){
        let newItems = this.state.items.slice();
        newItems.splice(i, 1);
        this.setState({ items: newItems});
    }

    render(){
        return(
            <div className="container">
                <TransitionGroup className="todo-list">
                    {this.state.items.map((item, i) => (
                        <Fade key={item}>
                            <div>
                                {`${item} `}
                                <button onClick={() => this.handleRemove(i)}>&times;</button>
                            </div>
                        </Fade>
                    ))}
                </TransitionGroup>
                <button onClick={() => this.handleAdd()}>Add items</button>
            </div>
        );
    }
}

bootstrap(TodoList);