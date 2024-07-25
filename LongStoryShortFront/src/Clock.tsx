import {Component} from "react";

interface Props {
}

interface State {
    isToggleOn: boolean
    time: string;
}

export default class Clock extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {isToggleOn: false, time: new Date().toLocaleTimeString()};
        this.swapToggledOn = this.swapToggledOn.bind(this);
        this.changeTime = this.changeTime.bind(this);
    }

    componentDidMount() {
        console.log("mounted")
        document.title = "Hello";
    }

    swapToggledOn(){
        console.log("swap: " + this.state.isToggleOn);
        this.state = ({isToggleOn: !this.state.isToggleOn, time: this.state.time});
    }

    getIsToggled(){
        return this.state.isToggleOn;
    }

    changeTime(value: string){
        this.state = ({time: value, isToggleOn: this.state.isToggleOn});
    }

    render() {
        console.log("render: " + this.state.isToggleOn)
        return (
            <div>
                {this.state.isToggleOn &&
                <h1>Time: {this.state.time}</h1>
                }
            </div>
        )
    }
}
