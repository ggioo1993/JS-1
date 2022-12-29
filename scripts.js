// // Task 1 

// let X = {
//     userName: 'Ann',
//     userAge: 28,
// }
// let Y = {
//     userName: 'Levan',
//     userAge: 21,
// }
// let C = 'ანა ლევანზე 7 წლით უფროსია';
// if(X.userAge - Y.userAge == 7){
//     console.log(C);
// }

// // Task 2 

// let studentsArray = ['John','Sam','Ann','Will','Andrew','Joseph','Lorelai','Amelie','Den'];
// console.log(studentsArray[4]);

// // Task 3

// let student ={
//     userFirstName: 'John',
//     userLastName: 'Wick',
//     userAge: 40,
//     userSubjects: ['guns', 'bows', 'knives', 'swords', 'shields'],
//     userRoommate: {
//         fullName: 'Deadly Pencil',
//         age: 45
//     }
// };

// for(i = 0; i < student.userSubjects.length; i++){
//     console.log(student.userSubjects[i]);
// }

// let studentFullName = `${student.userFirstName} ${student.userLastName}`
// console.log(studentFullName);
// let result = `${studentFullName} არის ${student.userAge} წლის და მისი რუმმეითი არის ${student.userRoommate.fullName}`
// console.log(result);


// // Task 4 

// let fruitArray = ["Banana", "Orange", "Apple", "Mango",2,12];

// for(let word of fruitArray){
//     if(typeof word == 'string'){
//         console.log(word)
//     }
// }

// // Task 5 

let numbersArray = [12,23,43,11,9,2,121,90];
for(let numb of numbersArray){
    if(numb > 31 && numb % 2 == 0){
        console.log('Element is greater than provided value and is EVEN');
    }
    else if(numb < 31 && numb % 2 !=0){
        console.log('Element is less than provided value and is ODD');
    }
}