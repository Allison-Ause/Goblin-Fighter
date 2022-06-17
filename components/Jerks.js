
export default function createJerks(root) {

    return ({ jerks }) => {
        root.innerHTML = '';

        for (const jerk of jerks) {
            root.append(Jerks({ jerk }));
        }
    };
}

export function Jerks({ jerk }) {
    const div = document.createElement('div');
    div.classList.add('jerk');

    const p1 = document.createElement('p');
    p1.classList.value = 'jerk-name';
    p1.textContent = jerk.name;

    const img = document.createElement('img');
    img.src = '../assets/jerk.png';

    const p2 = document.createElement('p');
    p2.classList.value = 'jerk-hp';
    p2.textContent = jerk.hp;
    
    div.append(p1, img, p2);    

    return div;
}