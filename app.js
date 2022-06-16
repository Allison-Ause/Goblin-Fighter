// import services and utilities
import getRandomItem from './utils.js';
// import component creators
import createAddJerk from './components/AddJerk.js';

// import state and dispatch functions
import state, {
    addJerk,
} from './state.js';

// Create each component: 
// - pass in the root element via querySelector
// - pass any needed handler functions as properties of an actions object 
const CreateAddJerk = createAddJerk(document.querySelector('#add-jerk'), {
    handleAddJerk: (name) => {
        console.log(name);
        const jerk = {
            name,
            hp: getRandomItem(state.jerkHP)
        };
        addJerk(jerk);
        display();
    }
});

// Roll-up display function that renders (calls with state) each component
function display() {
    // Call each component passing in props that are the pieces of state this component needs
    CreateAddJerk({});
    // CreateDisplayJerk - will pertain to for/of loop
}

// Call display on page load
display();
