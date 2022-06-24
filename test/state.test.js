import state, {
    addJerk,
    initialize,
} from '../state.js';


QUnit.module('state', { beforeEach: initialize });

const test = QUnit.test;

test('addJerk successfully adds jerk to array', (expect) => {

    state.jerks = [];

    const jerk = { name: 'bob', hp: 4 };
    addJerk(jerk);

    expect.deepEqual(state.jerks, [jerk]);
});


// test('update hero hp', (expect) => {
//     // what is the initial expected state?
//     expect.deepEqual(state.heroHP, 10); //this is where we start

//     const expected = 7;

//     changeHeroHP(7);

//     expect.deepEqual(state.heroHP, expected);
    
// });


