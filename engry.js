//Злопамятный скрипт
const fs = require("fs");

	
let fileContent = fs.readFileSync("time.txt", "utf8");

if(fileContent === ''){
    fs.writeFileSync("time.txt", Date());
    console.log('Меня еще не запускали ))))');
} else {
    let now = new Date();
    let last = new Date(fileContent);
    let seconds = now - last;
    console.log(`Ты уже запускал меня: ${Math.floor(seconds / 1000)} сек назад!!!`);
    fs.writeFileSync("time.txt", '');
}