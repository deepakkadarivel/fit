import {connect} from 'react-redux';
import {setHeight} from "../../shared/store/appActions";

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
        setHeight: (heightInCM, heightInFT, heightInIN) => {
            dispatch(setHeight(heightInCM, heightInFT, heightInIN));
        },
    };
};

const UserHeightContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(UserHeight);

export default UserHeightContainer;
