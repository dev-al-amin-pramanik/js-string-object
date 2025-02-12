const address = 'andokilla';
const part = address.slice(2, 5);
console.log(part);

const sentence = 'I am a good hardworking person.';
// console.log(sentence.split(' '));
// console.log(sentence.split('a'));

const friendsStr = 'Rahim, Kahim, dahim, lahim, fahim, sahim';
const friends = friendsStr.split(',');
console.log(friends);
const realFriend = ['Rahim', ' Kahim', ' dahim', ' lahim', ' fahim', ' sahim'];
console.log(realFriend);
console.log(realFriend.join());
console.log(realFriend.join('|'));
console.log(realFriend.join('-'));