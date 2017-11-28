const ModalReducer = props => {
  switch (props.currentModal) {
    case 'NEW_PROJECT':
      return <NewProjectModal {...props}/>;
    default:
      return null;
  }
};

export default ModalReducer;
