import React from 'react';
import { Link, Router } from 'react-router-dom';
import HeaderAddDropdown from './header_add_dropdown';
import { connect } from 'react-redux';
import { createNewProject } from '../../actions/project_actions';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  createNewProject: (formProject) => dispatch(createNewProject(formProject)),
  closeAddDropdown: () => ownProps.closeAddDropdown()
});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderAddDropdown);
