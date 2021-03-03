const courseReg = document.querySelector('.r-cont-1');
const coursePay = document.querySelector('.r-cont-2');
const coursePaySuccess = document.querySelector('.r-cont-3');
const proceedBtn = document.querySelector('.r-next');
const payBtn = document.querySelector('.r-pay');

proceedBtn.onclick = ()=>{
    courseReg.classList.add('d-none');
    coursePay.classList.remove('d-none');
};

payBtn.onclick = ()=>{
    courseReg.classList.add('d-none');
    coursePay.classList.add('d-none');
    coursePaySuccess.classList.remove('d-none')
};