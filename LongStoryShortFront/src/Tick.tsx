import {Component} from "react";
import Clock from "./Clock";
import Checkbox from "@mui/material/Checkbox"
// import styled from "styled-components"
import {baseTheme} from "./props/theme.ts";


interface TickProps {
    clock: Clock;
}

interface TickState {
    clock: Clock;
}

export default class Tick extends Component<TickProps, TickState> {
    constructor(props: TickProps) {
        super(props);
        this.state = {clock: props.clock}

        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleClick() {
        this.state.clock.swapToggledOn();
    }

    handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        this.state.clock.changeTime(event.target.value);
    }

    render() {
        return (
            <div>
                <div>
                    {this.state.clock.render()}
                </div>
                <div>
                    <input name={"new time:"} type="text"
                           onChange={this.handleChange}/>
                </div>
                <div>
                    <Checkbox name="show time?"
                              sx = {{
                                  color: baseTheme.colors.border,
                                  '&.Mui-checked': {
                                      color: baseTheme.colors.button,
                                  },
                                  "&:hover": { backgroundColor: "transparent" },
                              }}

                              checked={this.state.clock.getIsToggled()}
                              onChange={this.handleClick}/>
                </div>
            </div>
        )
    }
}