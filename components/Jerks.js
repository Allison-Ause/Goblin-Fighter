import createFight from './Fight.js'; //means the one thing
import { display } from '../app.js'; //curly brackets mean specific

export default function createJerks(root) {

    return ({ jerks }) => {
        root.innerHTML = '';

        for (const jerk of jerks) {
            const jerkButton = Jerks({ jerk });
            root.append(jerkButton);
            jerkButton.addEventListener('click', () => {
                console.log('click works');
                createFight(jerk);
                display();
            });
        }
    };
}

export function Jerks({ jerk }) {
    const button = document.createElement('button');
    button.classList.add('jerk');

    const p1 = document.createElement('p');
    p1.classList.value = 'jerk-name';
    p1.textContent = jerk.name;

    const img = document.createElement('img');
    img.classList.add('jerk-image');
    img.src = '../assets/jerk.png';

    const p2 = document.createElement('p');
    p2.classList.value = 'jerk-hp';
    p2.textContent = jerk.hp;
    
    button.append(p1, img, p2);    

    return button;
}

// create a button on each jerk, within the button is where I call the handleFight function
// 