// set state to an empty object
const state = {};

// initialize state, also used in test
export function initialize() {
    // What is the initial shape of state?
    // For example:
    // state.game = null;
    // state.pastGames = [];
    state.heroMessage = '';
    state.jerkMessage = '';
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

export function setHeroMessage(message) {
    console.log(message);
    state.heroMessage = message;
}

export function setJerkMessage(message) {
    console.log(message);
    state.jerkMessage = message;
}

export function updateHeroHP(state) {
    if (state.heroHP <= 0) {
        document.getElementById('hero-image').src = './assets/deadhero.png';
        setHeroMessage('Oh no! You were cut to ribbons by rudeness!');
    }
    else return;
}

export function updateJerkHP(jerk) {
    if (jerk.hp <= 0) {
        console.log(document);
        document.querySelector('.jerk-image').src = './assets/deadjerk.png';

        setJerkMessage('You have vanquished this total jerk with your righteous punches!');
        //update number of jerks defeated in "defeated-count" span.

    }
    else return;
}
