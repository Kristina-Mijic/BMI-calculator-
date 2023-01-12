
let checkBoxFemale = document.getElementById('female');
let checkBoxMale = document.getElementById('male');
let calculateBtn = document.getElementById('btn-calculate');
let resetBtn = document.getElementById('btn-reset');

let resultWrapper = document.getElementById('result-text-wrap');
let resultInfo = document.getElementById('result-info');

let age = document.getElementById('age-input');
let height = document.getElementById('height-input');
let weight = document.getElementById('weight-input');


calculateBtn.addEventListener('click', () => {
  console.log("testtt")
  let inputInfo = [age.value, height.value, weight.value];
  if(male.checked){
    inputInfo.push("male");
  }else if(female.checked){
    inputInfo.push("female");
  }
  
  let bmi = Number(inputInfo[2])/(Number(inputInfo[1])/100*Number(inputInfo[1])/100);
  
  result = '';
  if(bmi < 18.5) {
    result = 'Nedovoljna tezina';
  } else if(18.5 <= bmi && bmi <= 24.9) {
    result = 'Zdrav';
  } else if(25 <= bmi && bmi <= 29.9) {
    result = 'Prekomerna tezina';
  } else if(30 <= bmi && bmi <= 34.9) {
    result = 'Gojazni';
  } else if(35 <= bmi) {
    result = 'Ekstremno gojazni';
  }

  resultWrapper.style.display = 'block';
  resultInfo.innerText = "BMI is: " + bmi.toFixed(2) + ", " + result;
  validateForm()
});


resetBtn.addEventListener('click', () => {
  age.value = '';
  height.value = '';
  weight.value = '';
  checkBoxFemale.checked = '';
  checkBoxMale.checked = '';

  resultWrapper.style.display = 'none';
});


let validateForm = () => {
  if(age.value === '' || height.value === '' || weight.value === '' || (checkBoxMale.checked == false && checkBoxFemale.checked == false)){
    alert("All fields are required!");
    resultWrapper.style.display = 'none';
  } 
}

