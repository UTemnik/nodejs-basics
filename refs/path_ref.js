const path = require('path');

console.log(__filename);
console.log(path.basename(__filename));
console.log(path.dirname(__filename));
console.log(path.extname(__filename));

console.log(path.parse(__filename)); //формируем объект

console.log(path.join(__dirname, 'test', 'second.html')); //формируем путь
console.log(path.join(__dirname, './test', '/second.html')); //формируем путь, но по-другому хз как
