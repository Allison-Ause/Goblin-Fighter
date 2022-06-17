import { display } from '../app.js';
import state, { 
    setHeroMessage, 
    setJerkMessage,
    updateJerkHP, 
    updateHeroHP, 
} from '../state.js';



export default function createFight(jerk) {
    (console.log(jerk));
    if (jerk.hp <= 0) {
        return;
    }

    if (state.heroHP === 0) {
        return;
    }

    if (Math.random() < 0.75) {
        jerk.hp--;
        console.log(state);
        setHeroMessage('Nice! You punched that jerk right in the kisser!');
        updateJerkHP(jerk);
    } else {
        setHeroMessage('Drats, they dodged your blow!');
    }

    if (Math.random() < 0.25) {
        state.heroHP--;
        setJerkMessage('Arg! That jerk wounded you with their callousness!');
        updateHeroHP(state);
    } else {
        setJerkMessage('Ha! That jerk tried to swing on you but missed.');
    }


    // setTimeout(() => {
    //     setHeroMessage('');
    //     setJerkMessage('');
    //     display();
    // }, 2000);
    // delete this 

}

