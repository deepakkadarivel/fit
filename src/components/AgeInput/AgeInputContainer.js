import {connect} from 'react-redux';
import {setAge} from "../../shared/store/appActions";

import AgeInput from './AgeInput';

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

const AgeInputContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(AgeInput);

export default AgeInputContainer;
