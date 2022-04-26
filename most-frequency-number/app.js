const { performance } = require('perf_hooks');

function findFrequent(arr) {
    const startTime = performance.now()
    let mostFreq = -1; //default maximum frequency
    let maxFreq = 0; // counter
    
    for(let i =0; i<arr.length;i++){

        let count = 0; //  initial count of individual array element

        for(let j=0;j<arr.length;j++){
            if(arr[j]===arr[i]){
                count ++; // if array[i] = array[j] increase count
            }
        }
        
        if(maxFreq<count){  // if total count of  element > max frequency store new count
            maxFreq = count;
            mostFreq = arr[i]
        }

        else if(maxFreq == count){ // if max prev element frequency === count use min value
            mostFreq = Math.min(mostFreq,arr[i]);
        }  
       
       
    }

    console.log(`most count is ${mostFreq} and max frequency is ${maxFreq}`);
    const endTime = performance.now()
    console.log(`function took ${endTime - startTime} milliseconds`)
    return mostFreq;
}


function mostFrequent(arr)
{
 
    const startTime = performance.now()
    // declare n equal to length array
    const n = arr.length;
    // Insert all elements in hash.
    const hash = new Map();
    for (let i = 0; i < n; i++)
    {
        if(hash.has(arr[i])) { //if hashmap has array[i] increase number value of that key by 1  
            hash.set(arr[i], hash.get(arr[i])+1) 
        }
        else{ //if hashmap doesn't have array[i] set hash key to that array and set value to 1;
            hash.set(arr[i], 1)
            
        }  
    }
 
    // find the max frequency
    let count = 0, no = -1; 

    hash.forEach((value,key) => {
        if (count < value) {
            no = key;
            count = value;
        }
 
    });

    
    const endTime = performance.now()
    console.log(`function took ${endTime - startTime} milliseconds`)
    return console.log(`most Count = ${count} and number is = ${no}`);
}
 
let n = 100000;
const tRandom=  Array.from({length: n}, (v, k) => Math.floor(Math.random()*n)); 
let arr = [2, -1, 2, 3, 3, 2, 3, 1, 1,3];
mostFrequent(tRandom);

// let input = [2, -1, 2, 3, 3, 2, 3, 1, 1,3]
// let n = 100000;
// const tRandom=  Array.from({length: n}, (v, k) => Math.floor(Math.random()*n)); 
// findFrequent(input);
findFrequent(tRandom);

