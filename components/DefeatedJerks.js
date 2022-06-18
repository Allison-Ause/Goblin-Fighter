export default function createDefeatedJerks(root) {

    return ({ defeatedJerks }) => {
        root.textContent = defeatedJerks;
    };
}

