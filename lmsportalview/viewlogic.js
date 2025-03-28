

function calculateval(){
let inputcont = document.querySelector(".inp_load");
let resultcont = document.querySelector(".showresult");
let cal_value =  Number(inputcont.value);
  
if(cal_value < 40 && cal_value > 0){
    resultcont.innerHTML = `$${cal_value+10}`;
} else if(cal_value > 40){
    resultcont.innerHTML = `$${cal_value}`;
} else {
    resultcont.innerHTML = `Invalied Systex ${cal_value}`;
}

}
