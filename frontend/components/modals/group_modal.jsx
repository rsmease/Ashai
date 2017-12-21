import React from 'react';
import { Link, Router, Redirect, withRouter } from 'react-router-dom';

class GroupModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            description: ''
        };
        this.validGroup = false;
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClickOff = this.handleClickOff.bind(this);
    }

    capitalize(string) {
        return string.split(" ").map(word => word.substring(0, 1).toUpperCase() + word.substring(1)).join(" ");
    }

    getTitle() {
        return this.capitalize(`${this.props.modalAction} ${this.props.group}`);
    }

    getSubmitAction() {
        switch (this.props.modalAction) {
            case "new":
                return "Create";
            case "edit":
                return "Update";
            case "delete":
                return "Delete";
            default:
                return "Submit";
        }
    }

    componentWillMount() {
        document.title = `Ashai – ${this.getTitle()}`;
        this.props.removeAllModalErrors();
        if (this.props.modalAction !== "new") {
            this.validGroup = true;
            this.setState({
                id: this.props.targetGroup.id,
                name: this.props.targetGroup.name,
                description: this.props.targetGroup.description
            });
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        this.modalAction();
    }

    modalAction() {
        switch (this.props.modalAction) {
            case "new":
                this.props.createNewGroup(this.state).then(this.props.closeModal);
                break;
            case "edit":
                this.props.requestUpdateToGroup(this.state).then(this.props.closeModal);
                break;
            case "delete":
                this.props.requestToDeleteGroup(this.state.id).then(this.props.closeModal);
                break;
            default:
                console.log("Modal Action not set properly");
                break;
        }
    }

    handleInput(type) {
        return (e) => {
            this.setState({ [type]: e.target.value });
        };
    }


    handleKeyUp(e) {
        if (this.state.name.length > 0) {
            this.validGroup = true;
        }
    }

    handleClickOff(e) {
        if (e.target.className === "root-modal-container" ||
            e.target.className === "modal-cancel") {
            e.preventDefault();
            this.props.closeModal();
        }
    }

    //TODO: RENDER ERRORS;

    filteredErrors(labelName) {
        return this.props.errors.modal.filter((error) => (
            error.toLowerCase().includes(labelName)
        ));
    }

    showErrors(labelName, displayClass) {
        if (this.props.errors.modal.length > 0) {
            return (
                this.filteredErrors(labelName).map((error, i) => (
                    <span key={i} className={displayClass}>{error}</span>
                ))
            );
        }
    }

    //TODO: adjust logo (no shake) for edit and delete functions

    render() {
        return (
            <div className="root-modal-container"
                onClick={this.handleClickOff}>
                <img className="new-modal-logo"
                    onClick={this.stopPropagation}
                    src="https://i.imgur.com/WcrVoLW.png" />
                <div className="modal-form-container">
                    <div className="modal-header-container">
                        <h2 className="modal-form-header">{this.getTitle()}</h2>
                    </div>

                    <form className="modal-form">

                        <label>NAME</label>
                        {this.showErrors("name", "session-error")}

                        <input
                            onKeyUp={(e) => this.handleKeyUp(e)}
                            type="text"
                            value={this.state.name}
                            onChange={this.handleInput('name')}
                        />

                        <label>DESCRIPTION</label>
                        {this.showErrors("description", "session-error")}
                        <textarea
                            onKeyUp={(e) => this.handleKeyUp(e)}
                            type="textarea"
                            value={this.state.description}
                            onChange={this.handleInput('description')}
                        />
                        <div className="submit-options">
                            <button className="modal-cancel"
                                onClick={this.handleClickOff}>
                                Cancel</button>
                            <button className={
                                this.validGroup === true ? "modal-form-submit-valid" :
                                    "modal-form-submit"}
                                onClick={this.handleSubmit}>{this.getSubmitAction()}</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default GroupModal;