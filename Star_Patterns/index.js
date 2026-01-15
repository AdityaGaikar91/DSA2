//--------------------------------- Print Square Star Pattern -----------------------------------------------
//   *  *  *  *  *  * 
//   *  *  *  *  *  * 
//   *  *  *  *  *  * 
//   *  *  *  *  *  * 
//   *  *  *  *  *  * 
//   *  *  *  *  *  * 

// let n = 6

// for(let i = 0; i<n; i++){
//     let row = " "
//     for(let  j = 0; j<n; j++){
//         row += " * "
//     }
//     console.log(row);
    
// }


//-------------------------------- Right Angled Trinangle Pattern ------------------------------------------
//  *
//  * *
//  * * *
//  * * * *

// let n = 4;

// for(let i = 0; i<n; i++){
//     let row = "";
//     for(let j = 0; j<i+1; j++){
//         row += " *";
//     }
//     console.log(row);
    
// }


//--------------------------------- Numbered Right Angled Trinangle Pattern ------------------------------------------
// 1
// 12
// 123
// 1234
// 12345

// let n = 5;

// for(let i = 0; i<n; i++){
//     let row = ""
//     for(let j = 0; j<=i; j++){
//      row = row + (j+1);  
//     }
//     console.log(row); 
// }



//---------------------------------- Repeating number Right Angled Trinangle Pattern ----------------------------------------
// 1
// 22
// 333
// 4444
// 55555

// first way

// let n = 5;

// for(let i = 0; i<n; i++){
//     let row = ""
//     for(let j = 0; j<=i; j++){
//      row = row + (i+1);  
//     }
//     console.log(row);
// }


// second way
// let n = 5;

// for(let i = 1; i<=n; i++){
//     let row = "";
//     for(let j = 1; j<=i; j++){
//         row += i;
//     }
//     console.log(row);
// }



//------------------------- Reverse no Right Angled Trinangle Pattern -------------------------------
// 12345
// 1234
// 123
// 12
// 1

// let n = 5;
// for (let i = 0; i<n; i++){
//     let row = '';
//     for(let j = 0; j<n-i; j++){
//         row = row +(j + 1)
//     }
//     console.log(row);
    
// }


//----------------------- Reverse Right Angled Triangle Pattern------------------------------
// *****
// ****
// ***
// **
// *

// let n = 5;

// for(let i = 0; i<n; i++){
//     let row = "";
//     for(let j = 0; j<n-i; j++){
//         row += '*'
//     }
//     console.log(row);
    
// }


//----------------------- Right side Right Angled Triangle Pattern ---------------------------

//     *
//    **
//   ***
//  ****
// *****


// let n = 5

// for(let i = 0; i<n; i++){
//     let row = ''

//     // adds empty spaces
//     for(let j = 0; j<n-(i+1); j++){
//         row += ' '
//     }

//     // adds starts
//      for(let k = 0; k<i+1; k++){
//         row += "*" ;
//     }
// console.log(row);

// }




//------------------------------- Print 1010 pattern --------------------------------------

// 1
// 10
// 101
// 1010
// 10101
// 101010

// let n = 6

// for(let i = 0; i<n; i++){
//     let row='' 
//     let toggle = 1;
//     for(let j =0; j<i+1; j++){
//         row += toggle

//         if(toggle == 1) {toggle = 0}
//         else{toggle = 1}
//     }
//     console.log(row)
// }



// ---------------------------------------------------------------------------------------------


// let n = 6
// let toggle = 1;

// for(let i = 0; i<n; i++){
//     let row='' 
    
//     for(let j =0; j<i+1; j++){
        
//         row += toggle

//         if(toggle == 1) {toggle = 0}
//         else{toggle = 1}
//     }
//     console.log(row)
// }

//----------------------------------------------------------------------------------------------

// let arr = [10, 2, 4, 5, 7, 9, 8, 1]

// for(let i = 0; i< arr.length; i++){
//     if(arr[i]%2 == 0){
//         console.log(arr[i]);
//     }
// }


// Search an element in arr if doesn't exist return -1

// function searchElement(x) {
//     for(let i =0; i< arr.length; i++){
//         if(arr[i] == x){
//             return console.log(`Bhai ${x} element arr mai hai`);
            
//         }
//         else{
//             return console.log(`bhai arr madhe ha ${x} element nai`);
//         }
//     }
// }

// searchElement(6)



// ------------------------------------------------------------------------------------------
// count negative no. in arr

// let arr = [2, -9, 17, 0, -1, -10, 4, 8]

// function countNeg() {
//     let count = 0
//     for(let i = 0; i<arr.length; i++){
//         if(arr[i] < 0){
//             count += 1
//         }
//     }
//     return console.log(count);
    
// }

// countNeg()



//--------------------------------------------------------------------------------------------------
// Write a function that writtens largest no. in arr

// let arr = [2, 9, 17, 1, 10, 4, 8]

// function largestNumber() {
//     let m = arr[0];
//     for(let i = 0; i< arr.length; i++){
//         if(arr[i]<m){
//             m = arr[i]
//         }
//     }
//     return m
// }

// console.log(largestNumber());
 


//--------------------------------------------------------------------------------------------------
// Write a function that writtens second largest no. in arr

let arr = [2, 9, 17, 1, 10, 4, 8]

function secondLargest() {

    if(arr.length<2){   // checks for empty arr
        return null 
    }

    let firstLargest = arr[0];
    let secondLargest = arr[1];
    for(let i = 0; i<arr.length; i++){
        if(arr[i]>firstLargest){
            secondLargest = firstLargest
            firstLargest = arr[i]
        } else if(arr[i]>secondLargest && arr[i] !== firstLargest){ // checks for duplicate elements
            secondLargest = arr[i]
        }
    }

    return secondLargest;
}

console.log(secondLargest());
