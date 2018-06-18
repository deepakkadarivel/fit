import { connect } from 'react-redux';

import CustomSegment from './CustomSegment';
import {toggleHeightInCM} from "../../shared/store/appActions";

const mapStateToProps = state => {
    return {
        isHeightInCM: state.isHeightInCM,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        toggleHeightInCM: () => {
            dispatch(toggleHeightInCM());
        }
    };
};

const CustomSegmentContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(CustomSegment);

export default CustomSegmentContainer;
