

function primeAt(num) {
    
    const limit = 20*num ;
    let sz = limit - 1;
    let cmpsts = new Uint8Array(sz); // index 0 represents 2; sz-1 is limit


    // no need to zero above composites array; zeroed on creation...
    for (let p = 2; ; ++p) {
        let sqr = p * p;
        if (sqr > limit) break; // while p is the square root of limit -> cull...
        if (cmpsts[p - 2] == 0 >>> 0) // 0/1 is false/true; false means prime...
            for (let c = sqr - 2; c < sz; c += p) { // set true for composites...
                cmpsts[c] = 1 >>> 0; // use asm.js for some extra efficiency...
            }

    }


    let bi = 0
    let output = [];

    for (let i =0; i<num;i++) {
        while (bi < sz && cmpsts[bi] != 0 >>> 0) ++bi;;
        if (bi >= sz) return null;       
        if(i === num-1 ){
            output.push(bi++ + 2);
        }
         bi++ +2;
    };
    return console.log(output[0]);
}


let elpsd = -new Date();
primeAt(1234);
elpsd += +new Date();
console.log( elpsd + " milliseconds.")

elpsd = -new Date();
primeAt(12345);
elpsd += +new Date();
console.log( elpsd + " milliseconds.")


elpsd = -new Date();
primeAt(1000000);
elpsd += +new Date();
console.log( elpsd + " milliseconds.")


elpsd = -new Date();
primeAt(20000000);
elpsd += +new Date();
console.log( elpsd + " milliseconds.")


