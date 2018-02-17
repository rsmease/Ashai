export const CLOSE_SIDEBAR = 'CLOSE_SIDEBAR';
export const OPEN_SIDEBAR = 'OPEN_SIDEBAR';

const closeSidebar = () => ({
    type: CLOSE_SIDEBAR
});

const openSidebar = () => ({
    type: OPEN_SIDEBAR
});

export const requestOpenSidebar = () => (dispatch) => dispatch(openSidebar());
export const requestCloseSidebar = () => (dispatch) => dispatch(closeSidebar());