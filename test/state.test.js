import state, {
    addJerk,
    initialize,
    // import dispatch functions
} from '../state.js';

// make sure state is at known starting point
QUnit.module('state', { beforeEach: initialize });

const test = QUnit.test;

test('addJerk successfully adds jerk to array', (expect) => {
    // what is the initial expected state?
    state.jerks = [];
    // use the action
    const jerk = { name: 'bob', hp: 4 };
    addJerk(jerk);
    // what should the state be now?


    // remove this line when starting your test
    expect.deepEqual(state.jerks, [jerk]);
});
