const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];


//   function titleCased(str){
//     str.split(' ').map(w => w[0].toUpperCase()) + w.substr(1).toLowerCase().join(' ')
//  }
//  titleCased(tutorials);
//function titleCased(str){
//  return str.charAt(0).toUpperCase()+ str.slice(1);
//}
//titleCased(tutorials)

//const capTutorials = str.split(' ').map(titleCased).join(' ');
//capTutorials;

// function titleCased(str) {
//   let splitStr= str.toLowerCase().split(' ');
//   for (let i = 0; i < splitStr.length; i++) {
//      splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
//   }
//   return splitStr.join(' ');
// }

// const words = tutorials.split(" ");

// words.map((word) => { 
//     return word[0].toUpperCase() + word.substring(1); 
// }).join(" ");
const titleCased = function() {
  return tutorials.map((title) => {
    return title.split(' ').map((word) => {
      return (word.charAt(0).toUpperCase() + word.slice(1));
    }).join(' ');
  });
};
console.log(titleCased(tutorials))