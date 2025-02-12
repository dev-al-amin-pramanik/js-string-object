const school = 'RAJ UK Uttara Model School';

console.log(school);
console.log(school.toLowerCase());
console.log(school.toLocaleUpperCase());

// uppercase: ABCD EFG
// lowercase: abcd efg

const subject = 'Chemistry';
const book = 'chemisTry';

if (subject.toLocaleLowerCase() == book.toLocaleLowerCase()) {
    console.log('I am reading book aibar porikkhai fatai felmu');
}
else {
    console.log('hudai hudai prista ultai ar vat khawar jonno wait kori');
}

const drink = ' water';
const liquid = '   water   ';

if (drink.trim() === liquid) {
    console.log('pani er opor nam Life');
}
else {
    console.log('somudre pani ase but khaite parina');
}