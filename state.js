
const state = {};


export function initialize() {

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
    state.defeatedJerks = 0;
}

initialize();

export default state;


export function addJerk(jerk) {
    state.jerks.push(jerk);
}

export function setHeroMessage(message) {
    state.heroMessage = message;
}

export function setJerkMessage(message) {
    state.jerkMessage = message;
}

export function updateHeroHP(state) {

    if (state.heroHP <= 0) {
        setHeroMessage(' You died of rudeness :(   ');
        const heroImage = document.querySelector('#hero-image');
        heroImage.classList.add('dead');
    }
    else return;
}



export function updateJerkHP(jerk) {
    if (jerk.hp <= 0) {
        state.defeatedJerks++;
    }
    else return;
}
