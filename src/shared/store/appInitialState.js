import seamlessImmutable from 'seamless-immutable';

const appInitialState = seamlessImmutable({
    goals: [
        {
            id: 'lose_weight',
            title: 'Lose weight',
            description: 'Burn fat & get lean',
        },
        {
            id: 'get_fitter',
            title: 'Tone up & feel healthy',
            description: 'Burn fat & get lean',
        },
        {
            id: 'gain_muscle',
            title: 'Gain muscle',
            description: 'Build mass & strength',
        }

    ],
    selectedGoal: {},
    age: '',
    isHeightInCM: true,
    heightInCM: '',
});

export default appInitialState;
