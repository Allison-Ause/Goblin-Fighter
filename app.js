// import services and utilities
import getRandomItem from './utils.js';
// import component creators
import createAddJerk from './components/AddJerk.js';
import createJerks from './components/Jerks.js';
import createMessage from './components/Message.js';
// import state and dispatch functions
import state, {
    addJerk,
} from './state.js';

// Create each component: 
// - pass in the root element via querySelector
// - pass any needed handler functions as properties of an actions object 
const CreateAddJerk = createAddJerk(document.querySelector('#add-jerk'), {
    handleAddJerk: (name) => {

        const jerk = {
            name,
            hp: getRandomItem(state.jerkHP)
        };
        addJerk(jerk);
        display();
    }
});
// create function here that says handleFight, 
const CreateJerks = createJerks(document.querySelector('.jerks'));
// const CreateHero = createHero(document.querySelector('#hero'));
const CreateMessage = createMessage(document.querySelector('#message'));


export function display() {

    CreateAddJerk({});
    CreateJerks({ jerks: state.jerks });
    // CreateHero({ heroHP: state.heroHP });
    CreateMessage({ jerkMessage: state.jerkMessage, heroMessage: state.heroMessage });
}

// Call display on page load
display();
