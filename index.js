// FlatMap will combine arraies together
const arr = [[1,2], [3,4], [9,5]];
const newArr = arr.flatMap(
    (num) => num
);
console.log(newArr);

// checking two numbers and returning true or false 
// if the sum of two is equal 100
const number = (numOne, numTwo) => {
    return (numOne+numTwo == 100)
}
console.log(number(100,99))

//write a program to get the extension of a filename
const fileName = (file) => {
    return file.slice(file.lastIndexOf('.'))
}
console.log(fileName('hello.world'))

// write a program to replace every character in 
//a given string with the character following it
// in the alphabet
const moveCharUp = (str) => {
    return str.split('').map(
        char => String.fromCharCode(
            char.charCodeAt(0) + 1))
            .join('');
}
console.log(moveCharUp("abcd"))

//write a program to get the cuurent date
// expected output mm-dd-yyyy
const todayDate = (date = new Date()) => {
    const days = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();
    return `${days}-${month}-${year}`;
}
console.log(todayDate())

//write a program to create a new string adding "New!"
// in front of a given string, if the given string begins with
// with "New!" already then return the original string
const addingStr = (str) => {
    if(str.indexOf('New!') === 0 || str.indexOf('new!') === 0){
        return str;
    } else {
        return `New! ${str}`
    }
}
console.log(addingStr('new! adddd'))
