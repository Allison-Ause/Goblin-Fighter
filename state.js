// set state to an empty object
const state = {};

// initialize state, also used in test
export function initialize() {
    // What is the initial shape of state?
    // For example:
    // state.game = null;
    // state.pastGames = [];
    state.message = '';
    state.jerks = [
        {
            name: 'Rudey Vandersteen',
            hp: 4,
        },
        {
            name: 'Mr. Inconsiderate',
            hp: 3,
        }
    ];
    state.jerkHP = [1, 2, 2, 3, 3, 4, 5];
    state.heroHP = 10;
}
// call initialize
initialize();
// export state as primary (default) export
export default state;

// export dispatch functions that modify state
export function addJerk(jerk) {
    state.jerks.push(jerk);
}