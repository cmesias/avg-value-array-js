// Write a function to find the average value in an array of numbers
// Author: Carl Mesias

// Array test
const studentGrades = [79, 82, 73, 85, 55];

// Get average value in an array
function avgValue (arr)
{
    let total = 0;

    // Add each value to total
    for (let value of arr) {
        total += value;
    }

    console.log(`Number of assignments: ${arr.length}`);
    console.log(`Total points: ${total}`);
    console.log(`Total points possible: ${arr.length * 100}`);

    // Divide by number of array elements
    return total /= arr.length;
}


// Console log output
console.log( `Student grades: ${avgValue(studentGrades)}`);