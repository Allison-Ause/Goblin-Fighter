export default function createMessage(root) {

    return ({ heroMessage, jerkMessage }) => {

        root.innerHTML = '';

        const heroMessageDisplay = document.createElement('div');
        heroMessageDisplay.textContent = heroMessage;

        const jerkMessageDisplay = document.createElement('div');
        jerkMessageDisplay.textContent = jerkMessage;

        root.append(heroMessage, jerkMessage);
    };
}