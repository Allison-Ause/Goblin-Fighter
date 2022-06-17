import { display } from '../app.js';

export default function createMessage(root) {

    return ({ heroMessage, jerkMessage }) => {

        const heroMessageDisplay = document.createElement('div');
        heroMessageDisplay.textContent = heroMessage;

        const jerkMessageDisplay = document.createElement('div');
        jerkMessageDisplay.textContent = jerkMessage;

        root.append(heroMessage, jerkMessage);
        setTimeout(() => {
            heroMessageDisplay.innerHTML = '';
            jerkMessageDisplay.innerHTML = '';
            display();
        }, 2000);
    };
}