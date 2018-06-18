import {connect} from 'react-redux';
import {setAge} from "../../shared/store/appActions";

import UserAge from './UserAge';

const mapStateToProps = state => {
    return {
        age: state.age,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        setAge: (age) => {
            dispatch(setAge(age));
        }
    };
};

const UserAgeContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(UserAge);

export default UserAgeContainer;
