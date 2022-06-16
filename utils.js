export function getRandomIndex(max) {
    return Math.floor(Math.random() * max);
}

export default function getRandomItem(array) {
    const random = getRandomIndex(array.length);
    const item = array[random];
    return item;
}