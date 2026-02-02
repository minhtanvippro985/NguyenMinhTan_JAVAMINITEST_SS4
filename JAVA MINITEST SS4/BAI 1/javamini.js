let n ;
 
do{
    n = +prompt("Nhap so"); 
  } while(isNaN(n));

if (n % 2 == 0){
    console.log(`${n} là số chẵn`);
} else {
    console.log(`${n} là số lẻ`);
}


if(n === 0){
    console.log(`${n} la so 0`);
} else if(n >0){
    for(let i = 0 ; i < n ; i++){
    console.log(`${i+1}`);
    }
} else if(n <= 0){
    console.log("Giá trị n không hợp lệ để tạo dãy số");
}