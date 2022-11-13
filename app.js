// Variables
const addYourBusiness = document.querySelector('.add-btn');
const modal = document.querySelector('.modal');
const closeIcon = document.querySelector('.modal-header i');
const addBusiness = document.querySelector('.modal-bottom button');
const errorSpan = document.querySelectorAll('.error');
const smallModal = document.querySelector('.small-modal');
const smallModalBtn = document.querySelector('.small-modal button');
const searchInput = document.querySelector('.search-input');
const output = document.querySelector('.output');

let nameInput = document.querySelector('#name-input');
let addressInput = document.querySelector('#address-input');
let phoneInput = document.querySelector('#phone-input');
let workInput = document.querySelector('#work-input');

// Reg Exp Variables
const regName = /^([A-Z])[a-z]{1,10}\s?([a-zA-Z0-9]{1,10})$/;
const regAddress = /^([A-Z])[a-z]{1,10}\s?([a-zA-Z]{1,10})\s([0-9]{1,4})$/;
const regPhone = /(\+?\(?)([0-9]{3})\)?\s?([0-9]{1,2})?\s?([0-9]{7})$/;
const regWork = /^([a-zA-Z])(\s{1,})?/;

// Event Listeners
addYourBusiness.addEventListener('click', () => {
  ui.showModal();
});
closeIcon.addEventListener('click', () => {
  ui.hideModal();
})
smallModalBtn.addEventListener('click', () => {
  window.location.reload();
  ui.hideSmallModal();
})
searchInput.addEventListener('keyup', () => {
  ui.searchCompany();
})

addBusiness.addEventListener('click', addToList);
document.addEventListener('DOMContentLoaded', loadFromLS);

let arr = [];

if(localStorage.length > 0){
  arr = JSON.parse(localStorage.getItem('companies'))
}

function addToList(){
  let nameInput = document.querySelector('#name-input');
  let addressInput = document.querySelector('#address-input');
  let phoneInput = document.querySelector('#phone-input');
  let workInput = document.querySelector('#work-input');  

  const companyObj = {
    name: nameInput.value,
    address: addressInput.value,
    phone: phoneInput.value,
    work: workInput.value
  }

  if(nameInput.value.match(regName) && addressInput.value.match(regAddress) && phoneInput.value.match(regPhone) && workInput.value.match(regWork)){
  
   arr.push(companyObj);

   localStorage.setItem('companies',JSON.stringify(arr))

   ui.hideModal();
   ui.showSmallModal();

   nameInput.value = '';
   addressInput.value = '';
   phoneInput.value = '';
   workInput.value = '';
  } 

  ui.showError();
}

function loadFromLS(){
  const sorted = arr.sort((a,b) => a.name < b.name ? -1 : 1);

  sorted.forEach((item) => {
    const company = document.createElement('div');
    const companyName = document.createElement('div');
    const companyAddress = document.createElement('div');
    const companyPhone = document.createElement('div');
    const companyWork = document.createElement('div');

    company.className = 'company';
    companyName.className = 'company-name';
    companyAddress.className = 'company-address';
    companyPhone.className = 'company-phone';
    companyWork.className = 'company-work';

    companyName.innerHTML = `<span class="title">Company Name:</span> <span>${item.name}</span>`;

    companyAddress.innerHTML = `<span class="title">Address:</span> <span>${item.address}</span>`;

    companyPhone.innerHTML = `<span class="title">Phone Number:</span> <span>${item.phone}</span>`;

    companyWork.innerHTML = `<span class="title">Type of Work:</span> <span>${item.work}</span>`;

    company.appendChild(companyName);
    company.appendChild(companyAddress);
    company.appendChild(companyPhone);
    company.appendChild(companyWork);

    const splited = item.name.split('');

    if(splited[0] === 'A'){
      const letterA = document.querySelector('.letter-wrapper-a');
      letterA.classList.add('active');
      letterA.appendChild(company)
    }
    if(splited[0] === 'B'){
      const letterB = document.querySelector('.letter-wrapper-b');
      letterB.classList.add('active');
      letterB.appendChild(company);
    }
    if(splited[0] === 'C'){
      const letterC = document.querySelector('.letter-wrapper-c');
      letterC.classList.add('active');
      letterC.appendChild(company);
    }
    if(splited[0] === 'D'){
      const letterD = document.querySelector('.letter-wrapper-d');
      letterD.classList.add('active');
      letterD.appendChild(company);
    }
    if(splited[0] === 'E'){
      const letterE = document.querySelector('.letter-wrapper-e');
      letterE.classList.add('active');
      letterE.appendChild(company);
    }
    if(splited[0] === 'F'){
      const letterF = document.querySelector('.letter-wrapper-f');
      letterF.classList.add('active');
      letterF.appendChild(company);
    }
    if(splited[0] === 'G'){
      const letterG = document.querySelector('.letter-wrapper-g');
      letterG.classList.add('active');
      letterG.appendChild(company);
    }
    if(splited[0] === 'H'){
      const letterH = document.querySelector('.letter-wrapper-h');
      letterH.classList.add('active');
      letterH.appendChild(company);
    }
    if(splited[0] === 'I'){
      const letterI = document.querySelector('.letter-wrapper-i');
      letterI.classList.add('active');
      letterI.appendChild(company);
    }
    if(splited[0] === 'J'){
      const letterJ = document.querySelector('.letter-wrapper-j');
      letterJ.classList.add('active');
      letterJ.appendChild(company);
    }
    if(splited[0] === 'K'){
      const letterK = document.querySelector('.letter-wrapper-k');
      letterK.classList.add('active');
      letterK.appendChild(company);
    }
    if(splited[0] === 'L'){
      const letterL = document.querySelector('.letter-wrapper-l');
      letterL.classList.add('active');
      letterL.appendChild(company);
    }
    if(splited[0] === 'M'){
      const letterM = document.querySelector('.letter-wrapper-m');
      letterM.classList.add('active');
      letterM.appendChild(company);
    }
    if(splited[0] === 'N'){
      const letterN = document.querySelector('.letter-wrapper-n');
      letterN.classList.add('active');
      letterN.appendChild(company);
    }
    if(splited[0] === 'O'){
      const letterO = document.querySelector('.letter-wrapper-o');
      letterO.classList.add('active');
      letterO.appendChild(company);
    }
    if(splited[0] === 'P'){
      const letterP = document.querySelector('.letter-wrapper-p');
      letterP.classList.add('active');
      letterP.appendChild(company);
    }
    if(splited[0] === 'Q'){
      const letterQ = document.querySelector('.letter-wrapper-q');
      letterQ.classList.add('active');
      letterQ.appendChild(company);
    }
    if(splited[0] === 'R'){
      const letterR = document.querySelector('.letter-wrapper-r');
      letterR.classList.add('active');
      letterR.appendChild(company);
    }
    if(splited[0] === 'S'){
      const letterS = document.querySelector('.letter-wrapper-s');
      letterS.classList.add('active');
      letterS.appendChild(company);
    }
    if(splited[0] === 'T'){
      const letterT = document.querySelector('.letter-wrapper-t');
      letterT.classList.add('active');
      letterT.appendChild(company);
    }
    if(splited[0] === 'U'){
      const letterU = document.querySelector('.letter-wrapper-u');
      letterU.classList.add('active');
      letterU.appendChild(company);
    }
    if(splited[0] === 'V'){
      const letterV = document.querySelector('.letter-wrapper-v');
      letterV.classList.add('active');
      letterV.appendChild(company);
    }
    if(splited[0] === 'W'){
      const letterW = document.querySelector('.letter-wrapper-w');
      letterW.classList.add('active');
      letterW.appendChild(company);
    }
    if(splited[0] === 'X'){
      const letterX = document.querySelector('.letter-wrapper-x');
      letterX.classList.add('active');
      letterX.appendChild(company);
    }
    if(splited[0] === 'Y'){
      const letterY = document.querySelector('.letter-wrapper-y');
      letterY.classList.add('active');
      letterY.appendChild(company);
    }
    if(splited[0] === 'Z'){
      const letterZ = document.querySelector('.letter-wrapper-z');
      letterZ.classList.add('active');
      letterZ.appendChild(company);
    }

  })
}

// UI Class
class UI {
  showModal(){
    modal.classList.add('active');
 }

  hideModal(){
   modal.classList.remove('active');
   errorSpan[0].classList.remove('active');
   errorSpan[1].classList.remove('active');
   errorSpan[2].classList.remove('active');
   errorSpan[3].classList.remove('active');

   nameInput.value = '';
   addressInput.value = '';
   phoneInput.value = '';
   workInput.value = '';
 }

  showError(){
  if(!nameInput.value.match(regName)){
    errorSpan[0].classList.add('active');
  }  else {
    errorSpan[0].classList.remove('active');
  }

  if(!addressInput.value.match(regAddress)){
    errorSpan[1].classList.add('active');
  }  else {
    errorSpan[1].classList.remove('active');
  }

  if(!phoneInput.value.match(regPhone)){
    errorSpan[2].classList.add('active');
  }  else {
    errorSpan[2].classList.remove('active');
  }

  if(!workInput.value.match(regWork)){
    errorSpan[3].classList.add('active');
  }  else {
    errorSpan[3].classList.remove('active');
  }
 }

 showSmallModal(){
  smallModal.classList.add('active')
 }

 hideSmallModal(){
  smallModal.classList.remove('active')
 }

 searchCompany(){
  const searchQuery = searchInput.value.toLowerCase();
  const companies = document.querySelectorAll('.company');
  const screenWidth = document.body.clientWidth;

  companies.forEach((company) => {
    if(company.firstChild.firstChild.nextElementSibling.textContent.toLowerCase().includes(searchQuery)){
      company.style.display = 'flex';

      if(screenWidth <= 540){
        company.style.display = 'grid';
      }
    } else {
      company.style.display = 'none'
    }
  })
 }

}

const ui = new UI();



 
