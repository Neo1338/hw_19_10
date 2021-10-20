//вычислить средний цвет картинки
const { getAverageColor } = require('fast-average-color-node');

if(process.env.PIC){
    getAverageColor(process.env.PIC).then(color => {
        console.log(color.hex);
    });
} else {
    console.log('Путь не задан или картинка удалена!');
}