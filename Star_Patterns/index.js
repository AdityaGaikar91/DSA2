// Print Square Star Pattern

// let n = 6

// for(let i = 0; i<n; i++){
//     let row = " "
//     for(let  j = 0; j<n; j++){
//         row += " * "
//     }
//     console.log(row);
    
// }


// Right Angled Trinangle Pattern

// let n = 4;

// for(let i = 0; i<n; i++){
//     let row = "";
//     for(let j = 0; j<i+1; j++){
//         row += " *";
//     }
//     console.log(row);
    
// }


// Numbered Right Angled Trinangle Pattern

// let n = 5;

// for(let i = 0; i<n; i++){
//     let row = ""
//     for(let j = 0; j<=i; j++){
//      row = row + (j+1);  
//     }
//     console.log(row); 
// }

// Repeating number Right Angled Trinangle Pattern

let n = 5;

for(let i = 0; i<n; i++){
    let row = ""
    for(let j = 0; j<=i; j++){
     row = row + (i+1);  
    }
    console.log(row);
}