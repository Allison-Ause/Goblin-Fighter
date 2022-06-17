// import services and utilities
import getRandomItem from './utils.js';
// import component creators
import createAddJerk from './components/AddJerk.js';
import createJerks from './components/Jerks.js';
import createHero from './components/Hero.js';
import createMessage from './components/Message';
// import state and dispatch functions
import state, {
    addJerk,
    setMessage,
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

const CreateJerks = createJerks(document.querySelector('.jerks'));
const CreateHero = createHero(document.querySelector('.hero'));
const CreateMessage = createMessage(document.querySelector('message'));
// Roll-up display function that renders (calls with state) each component
function display() {
    // Call each component passing in props that are the pieces of state this component needs
    CreateAddJerk({});
    CreateJerks({ jerks: state.jerks });
    CreateHero({ heroHP: state.heroHP });
    CreateMessage({ message: state.message });
}

// Call display on page load
display();
