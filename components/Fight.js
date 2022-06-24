import state, { 
    setHeroMessage, 
    setJerkMessage,
    updateJerkHP, 
    updateHeroHP, 
} from '../state.js';
import { display } from '../app.js';

export default function createFight(jerk) {

    if (jerk.hp <= 0) {
        return;
    }

    if (state.heroHP === 0) {
        return;
    }

    if (Math.random() < 0.75) {
        jerk.hp--;
        setHeroMessage(' You punched that jerk right in the kisser! ');
        updateJerkHP(jerk);
    } else {
        setHeroMessage(' That jerk dodged your blow!');
    }

    if (Math.random() < 0.33) {
        state.heroHP--;
        setJerkMessage(' That jerk wounded you with their callousness! ');
        updateHeroHP(state);
        display();
    } else {
        setJerkMessage(' That jerk swung and missed. ');
    }
}

