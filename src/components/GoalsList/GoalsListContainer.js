import { connect } from 'react-redux';

import GoalsList from './GoalsList';
import {setGoal} from "../../shared/store/appActions";

const mapStateToProps = state => {
    return {
        goals: state.goals,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        setGoal: (goal) => {
            dispatch(setGoal(goal));
        }
    };
};

const GoalsListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(GoalsList);

export default GoalsListContainer;
