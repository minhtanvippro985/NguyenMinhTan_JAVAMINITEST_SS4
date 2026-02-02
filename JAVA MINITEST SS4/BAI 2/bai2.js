
let FizzCount = 0;
let BuzzCount = 0;
let maxRange;
do {
    maxRange = +prompt("Nhap range cua ban");
}while(isNaN(maxRange));

for(let i = 1 ; i <= maxRange ; i++){
    if(i % 3 == 0 && i % 5 != 0){
        console.log("Fizz");
        FizzCount++;
    }else if(i % 5 == 0 && i % 3 != 0){
        console.log("Buzz");
        BuzzCount++;
    } else if (i % 3 == 0 && i % 5 == 0){
        console.log("FizzBuzz");
    } else {
        console.log(`${i}`);
    }
}


console.log(`Tổng số chia hết cho 3 là ${FizzCount}`);

console.log(`Tổng số chia hết cho 5 là ${BuzzCount}`);