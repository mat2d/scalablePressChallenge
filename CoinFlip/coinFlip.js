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
        number_length = n.toString().length;
        unix_date = Date.now().toString().split("").reverse().toString().replace(/,/g, '');
        pointer = 0;
        while(omega == false){ 
            random_number = unix_date.substring(pointer, pointer + number_length);
            if(parseInt(random_number) < n && flip() == true ){
                omega = true;
            }
            pointer ++;
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


























clear();
function flip(n){
    if (n <= 0 || n > 1000000){
    throw "ERROR - n value not allowed";
    }
    if (n== 1){
        random_number = 0;
    }else{
        omega = false;
        number_length = n.toString().length;
        unix_date = Date.now();
        //theta = unix_date.toString().length;
        pointer = 0;
        while(omega == false){ 
            random_number = unix_date.toString().split("").reverse().toString().replace(/,/g, '').substring(pointer, pointer+ number_length);
            if(parseInt(random_number) < n){
                omega = true;
            }
            pointer ++;
        }
    }
return parseInt(random_number);
}
flip(-150);