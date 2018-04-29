
const keyboard = {
    layouts: {
        en: {
            topRow: ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]"],
            middleRow: ["a", "s", "d", "f", "g", "h", 'j', "k", "l", ";", "'"],
            bottomRow: ["z", "x", "c", "v", "b", "n", "m", ",", ".", ".", "/"]
        },
        ru: {
            topRow: ["й", "ц", "у", "к", "е", "н", "г", "ш", "щ", "з", "х", "ъ"],
            middleRow: ["ф", "ы", "в", "а", "п", "р", "о", "л", "д", "ж", "э"],
            bottomRow: ["я", "ч", "с", "м", "и", "т", "ь", "б", "ю", "."]
        },
        ua: {
            topRow: ["й", "ц", "у", "к", "е", "н", "г", "ш", "щ", "з", "х", "ї"],
            middleRow: ["ф", "і", "в", "а", "п", "р", "о", "л", "д", "ж", "є"],
            bottomRow: ["я", "ч", "с", "м", "и", "т", "ь", "б", "ю", "."]
        }
    },
    langs: ['en', 'ru', 'ua'],
    currentLang: ''
};
let selectLang;
while(selectLang !== '0' && selectLang !== '1' && selectLang !== '2' && selectLang !== null ){
 selectLang = prompt('Какой язык Вы желаете исользовать?', "0 - en, 1 - ru, 2 - ua");
 switch(selectLang){
    case "0":
    keyboard.currentLang = "en";
    alert('Вы выбрали английский язык')
    break;
case "1":
    keyboard.currentLang = "ru";
    alert('Вы выбрали русский язык')
    break;
case "2": 
    keyboard.currentLang = "ua";
    alert('Вы выбрали украинский язык')
    break;
case null:
    break;
default: 
    alert("Введите один из предложенных вариантов");
    }

}
function getRandCharInAlph(keyboard) {
    for (let key in keyboard.layouts) {
    if (key === keyboard.currentLang) {
        let currentLayout = keyboard.layouts[key];
        let rowIndex = Math.floor(Math.random() * Object.keys(currentLayout).length);
        let currentRow = Object.keys(currentLayout)[rowIndex];
        let elemIndex = Math.floor(Math.random() * currentLayout[currentRow].length);
        return currentLayout[currentRow][elemIndex];
    }
}
}

console.log(getRandCharInAlph(keyboard));