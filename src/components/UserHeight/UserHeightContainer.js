import {connect} from 'react-redux';
import {setHeightInCM, setHeightInFT, setHeightInIN} from "../../shared/store/appActions";

import UserHeight from './UserHeight';

const mapStateToProps = state => {
    return {
        heightInCM: state.heightInCM,
        heightInFT: state.heightInFT,
        heightInIN: state.heightInIN,
        isHeightInCM: state.isHeightInCM,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        setHeightInCM: (heightInCM) => {
            dispatch(setHeightInCM(heightInCM));
        },
        setHeightInFT: (heightInFT) => {
            dispatch(setHeightInFT(heightInFT));
        },
        setHeightInIN: (heightInIN) => {
            dispatch(setHeightInIN(heightInIN));
        },
    };
};

const UserHeightContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(UserHeight);

export default UserHeightContainer;
