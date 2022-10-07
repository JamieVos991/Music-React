import React from "react";
import "./Input.css";

class Input extends React.Component {

    constructor(props) {
        super(props);
        this.state = { inputValue: "" }
    }

    update = (event) => {
        this.setState({ inputValue: event.target.value });
    }

    enter = (event) => {
        if (event.keyCode === 13) {
            console.log("Enter");
            this.props.inputPressedEnter(this.state.inputValue);

        }

    }

    // Als we met document.getElement.... of doucment query... werken in React, dan is het component uncontrolled. 
    render() {
        return (
            <>
                <input onKeyUp={this.enter} onChange={this.update} value={this.state.inputValue} className="input" type="text" placeholder="Muziek ..." />
            </>
        );
    }
}

export default Input;