//papugi i slonie

var text = 'Papugi kosza trawe, unoszac sie nad ziemia 15 centymetrow, na czerwonych dywanach.'
var animal = 'Zielone slonie'
var animalInUpperCase = animal.toUpperCase();

console.log(animalInUpperCase);

var textAfterReplace = text.replace('Papugi', animalInUpperCase);
console.log(textAfterReplace);

var textShortSentence = textAfterReplace.substr(0, textAfterReplace.length/2);
console.log(textShortSentence);