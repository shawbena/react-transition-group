import * as React from 'react';
import Transition from '../../react-transition-group/Transition';
import bootstrap from '../../bootstrap';

const duration = 300;
const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 0
};

const transitionStyles: { [props: string]: any } = {
    entering: { opacity: 0 },
    entered: { opacity: 1 }
}

const Fade = ({ in: inProp }: { in: boolean }) => {
    // exited -> entering -> entered
    // entered -> exiting -> exited
    // try to remove `appear`
    return (
        <Transition mountOnEnter unmountOnExit appear in={inProp} timeout={duration}>
            {(state: string) => {
                let s = transitionStyles[state];
                let d = defaultStyle;
                return (
                    <div style={{
                        ...defaultStyle,
                        ...transitionStyles[state]
                    }}>
                        I'm A fade Transition!
                    </div>
                );
            }}
        </Transition>
    );
};

interface FadeTestProps {

}

interface FadeTestStates {
    in: boolean;
}
class FadeTest extends React.Component<FadeTestProps, FadeTestStates>{
    constructor(props: FadeTestProps) {
        super(props);
        this.state = {
            in: true
        };
        this.toggleEnterState = this.toggleEnterState.bind(this);
    }

    toggleEnterState() {
        this.setState({ in: !this.state.in });
    }

    render() {
        return (
            <div>
                <button onClick={this.toggleEnterState}>Click to Enter</button>
                <Fade in={this.state.in} />
            </div>
        );
    }
}

bootstrap(FadeTest);