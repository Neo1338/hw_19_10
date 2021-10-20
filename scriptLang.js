//## Злопамятный скрипт

let UK = 'Пацак должен делать ку два раза';
let RU = 'Пацан должен делать кувырок два раза )';
let EN = 'The kid must do ku twice';

switch(process.env.LANG.substr(3, 2)) {
    case 'RU':
        console.log(RU);
        break;
    case 'UK':
        console.log(UK);
        break;
    case 'EN':
        console.log(EN);
        break;

};