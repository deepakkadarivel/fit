import {connect} from 'react-redux';
import {setAge} from "../../shared/store/appActions";

import UserDetail from './UserDetail';

const mapStateToProps = state => {
    return {
        selectedGoal: state.selectedGoal,
        age: state.age,
        isHeightInCM: state.isHeightInCM,
        heightInCM: state.heightInCM,
        heightInFT: state.heightInFT,
        heightInIN: state.heightInIN,
    };
};

const mapDispatchToProps = dispatch => {
    return {};
};

const UserDetailContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(UserDetail);

export default UserDetailContainer;
