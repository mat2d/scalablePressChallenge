function flip() {
  return Math.random() >= 0.5;
}

function randomNumber(n){
    if (n <= 0 || n > 1000000){
    throw "ERROR - n value not allowed";
    }
    if (n== 1){
        random_number = 0;
    }else{
        omega = false;
        random_number = n;
        while(omega == false){
            if(random_number <= 1) {
              random_number = n;
            }
            random_number = random_number-1;
            if(flip()){
                omega = true;
            }
        }
    }
return parseInt(random_number);
}
randomNumber(-150);
randomNumber(-1);
randomNumber(0);
randomNumber(500);
randomNumber(98786543);
randomNumber(1000001);
