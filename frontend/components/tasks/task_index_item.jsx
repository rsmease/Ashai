import React from 'react';
import * as MaterialDesign from 'react-icons/lib/md';
import { Link, Router, withRouter } from 'react-router-dom';


class TaskIndexItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="task-index-item">
                <div className="task-index-item-left-alignment-container">
                    <MaterialDesign.MdCheckCircle className="complete-task-button" />
                    <p className="task-index-item-title">
                        {this.props.task.title}
                    </p>
                </div>

                <div className="task-index-item-right-alignment-container">
                    <MaterialDesign.MdDateRange className="due-date-selector" />
                </div>
            </div>
        );
    }
}

export default TaskIndexItem;
