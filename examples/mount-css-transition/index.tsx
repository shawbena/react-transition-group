import * as React from 'react';
import { CSSTransition } from '../../react-transition-group';

import bootstrap from '../../bootstrap';

import '../style.css';

interface FadeProps {
    children: React.ReactNode;
    in: boolean;
    [prop: string]: any;
}
const Fade = ({ children, ...props}: FadeProps) => (
    // mount node
    // fade-enter
    // fade-enter-active
    // fade-enter-done
    // fade-exit
    // fade-exit-active
    // fade-exit-done
    // unmount node
    // 这个效果更好些
    <CSSTransition
        {...props}
        timeout={3000}
        classNames="fade"
        mountOnEnter
        unmountOnExit
    >
        {children}
    </CSSTransition>
);

interface FadeInAndOutProps{

}

interface FadeInAndOutState{
    show: boolean;
}

class FadeInAndOut extends React.Component<FadeInAndOutProps, FadeInAndOutState>{
    constructor(props: FadeInAndOutProps){
        super(props);
        this.state = { show: false };
        setInterval(() => {
            this.setState({ show: !this.state.show })
          }, 5000)
    }

    render(){
        return(
            <Fade in={this.state.show}>
                <div className="greeting">Hello world</div>
            </Fade>
        );
    }
}

bootstrap(FadeInAndOut);