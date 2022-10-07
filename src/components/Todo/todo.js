import React from "react";
import Item from "../Item/Item";
import "./todo.css";
import Input from "../Input/Input";
import tasksObject from "../../Data/tasks";

class Todo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            tasks: [],
        }
    }

    // ComponentDidMount runt na het aanmaken en tekenen van een component
    componentDidMount() {
        this.setState({
            tasks: tasksObject.tasks,
        });
    }

    // ComponentDidUpdate runt na het updaten van de state
    componentDidUpdate() {

    }

    update = () => {
        let tempArray = this.state.tasks;
        let combinedArray = tempArray.concat([
            {
                name: "Todo afmaken",
                done: false,
                id: 10,
            }
        ])
        this.setState({
            tasks: combinedArray,
        });
    }

    inputPressedEnter = (inputFromInputComponent) => {
        let toBeAdded = [
            {
                name: inputFromInputComponent,
                done: false,
                id: 100,
            }
        ]
        let mergedArray = this.state.tasks.concat(toBeAdded);
        this.setState({
            tasks: mergedArray,
        })
    }



    render() {

        let items = this.state.tasks.map(task => {
            return <Item name={task.name} key={task.id}></Item>
        });

        return (
            <article className="todo">
                <header className="todo__header">
                    <h1 className="todo__heading">{this.props.title || "Default text"}</h1>
                    <i class="fa-solid fa-music"></i>
                </header>
                <ul className="todo__list">
                    {items}
                </ul>
                <header className="todo__footer">
                    <Input inputPressedEnter={this.inputPressedEnter} />
                </header>
            </article>
        );
    }
}

export default Todo;