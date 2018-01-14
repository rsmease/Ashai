import React from 'react';
import * as MaterialDesign from 'react-icons/lib/md';
import { Link, Router, withRouter } from 'react-router-dom';


class TaskIndexItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: this.props.task.title,
            id: this.props.task.id
        };
    }

    //currently only updates the title
    handleKeyDown(e) {
        if (e.keyCode === 13 && this.state.title.length > 0) {
            this.props.requestUpdateToTask(this.state);
        }
    }

    handleInput(type) {
        return (e) => {
            this.setState({ [type]: e.target.value });
        };
    }

    handleDelete() {
        let currentIndexItem = document.getElementById(`task-${this.props.task.id}`);
        currentIndexItem.classList.add("deleted-task");

        let delayedDelete = () => (this.props.requestToDeleteTask(this.props.task.id));
        setTimeout(delayedDelete, 100);
    }

    render() {
        return (
            <div className="task-index-item" id={`task-${this.props.task.id}`}>
                <div className="task-index-item-left-alignment-container">
                    <MaterialDesign.MdCheckCircle className="complete-task-button"
                        onClick={() => this.handleDelete()} />
                    <form className="task-index-item-title">
                        <input
                            className="task-index-item-title-input"
                            onKeyDown={(e) => this.handleKeyDown(e)}
                            type="text"
                            value={this.state.title}
                            onChange={this.handleInput('title')}
                        />
                    </form>
                </div>

                <div className="task-index-item-right-alignment-container">
                    <MaterialDesign.MdDateRange className="due-date-selector" />
                </div>
            </div>
        );
    }
}

export default TaskIndexItem;
