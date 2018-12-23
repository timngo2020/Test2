/*
Code Challenge: Candidate completes one of two problems (below) over a 24 hour period. 

Code challenge solutions should be submitted to us via GIT Hub.  No Googling of 
solutions is permitted for either challenge below. Referencing the Wikipedia page 
(linked for convenience) is permissible for Challenge 2.

Challenge 1
Create a function that takes an array of numbers and returns an array of only the odd numbers.  
The function must not use looping or libraries that use looping.

Challenge 2
Based on the description of Pascal's Triangle, create a function that takes number of 
rows as an argument, and then prints out Pascal's triangle up to the number of rows specified.
*/

//Challenge 1:
//const oddNum = array => array.filter( x => x % 2 );
const oddNum = array => {
    const a = []; //array to be returned
    const rcur = arr => {
        if (arr.length == 0) return;
        if (arr[0] % 2 == 1) {
            a.push(arr[0]);
        }
        rcur(arr.slice(1));
    }
    rcur(array);
    return a;
}
const ar = [1,2,3,4,5,6,7,8,9,0]; //sample array
console.log('Challenge 1: Odd numbers');
console.log('Odd numbers: ' + oddNum(ar));


//Challenge 2:
const pascalTriang = totalRows => {
    if (totalRows == 0) return;
    console.log('Row 1: 1');
    if (totalRows == 1) {
        return;
    }
    let arr1 = [1];
    for (let i=2; i<=totalRows; i++) {
        let arr2 = [1];
        for (let j=2; j<i; j++) {
            let n1 = arr1[j-2];
            let n2 = arr1[j-1];
            arr2.push(n1 + n2);
        }
        arr2.push(1);
        console.log('Row ' + i + ': ' + arr2)
        arr1 = arr2;
    }
}

console.log('\n\nChallenge 2: Pascal\'s Triangle');
pascalTriang(10);