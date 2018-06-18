import {connect} from 'react-redux';
import {setHeightInCM} from "../../shared/store/appActions";

import UserHeight from './UserHeight';

const mapStateToProps = state => {
    return {
        heightInCM: state.heightInCM,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        setHeightInCM: (heightInCM) => {
            dispatch(setHeightInCM(heightInCM));
        }
    };
};

const UserHeightContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(UserHeight);

export default UserHeightContainer;
