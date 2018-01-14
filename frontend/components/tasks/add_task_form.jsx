import React from 'react';
import * as MaterialDesign from 'react-icons/lib/md';
import { Link, Router, withRouter } from 'react-router-dom';

class AddTaskForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: ""
        };
    }

    componentWillMount() {
        switch (this.props.groupType) {
            case "currentUser":
                this.setState({ assignee_id: this.props.currentTargetId });
                break;
            case "user":
                this.setState({ assignee_id: this.props.currentTargetId });
                break;
            default:
                break;
        }
    }

    handleKeyDown(e) {
        if (e.keyCode === 13 && this.state.title.length > 0) {
            this.props.createNewTask(this.state);
        }
    }

    handleInput(type) {
        return (e) => {
            this.setState({ [type]: e.target.value });
        };
    }

    render() {
        return (
            <div className="task-index-item" id="add-task-form">
                <div className="task-index-item-left-alignment-container">
                    <MaterialDesign.MdCheckCircle className="complete-task-button" />
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

export default AddTaskForm;
