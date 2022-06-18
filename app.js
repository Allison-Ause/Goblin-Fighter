
import getRandomItem from './utils.js';

import createAddJerk from './components/AddJerk.js';
import createJerks from './components/Jerks.js';
import createMessage from './components/Message.js';
import createDefeatedJerks from './components/DefeatedJerks.js';

import state, {
    addJerk, setJerkMessage,
} from './state.js';

const CreateDefeatedJerks = createDefeatedJerks(document.querySelector('#defeated-count'));

const CreateAddJerk = createAddJerk(document.querySelector('#add-jerk'), {
    handleAddJerk: (name) => {

        const jerk = {
            name,
            hp: getRandomItem(state.jerkHP)
        };
        addJerk(jerk);
        setJerkMessage(jerk.name + ' has arrived with ' + jerk.hp + ' hp and we hate it!');
        display();
    }
});

const CreateJerks = createJerks(document.querySelector('.jerks'));

const CreateMessage = createMessage(document.querySelector('#message'));


export function display() {

    CreateAddJerk({});
    CreateJerks({ jerks: state.jerks });
    CreateMessage({ jerkMessage: state.jerkMessage, heroMessage: state.heroMessage });
    CreateDefeatedJerks({ defeatedJerks: state.defeatedJerks });
}

// Call display on page load
display();
