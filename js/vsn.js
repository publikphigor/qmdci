const openOv = document.querySelector('.ov-btn');
const openCv = document.querySelector('.cv-btn');
const openOm = document.querySelector('.om-btn');
const vsn1 = document.querySelector('.vsn-1');
const vsn2 = document.querySelector('.vsn-2');
const vsn3 = document.querySelector('.vsn-3');

const showVsn = (block1, block2, block3)=>{
    block1.classList.remove('d-none');
    block2.classList.add('d-none');
    block3.classList.add('d-none');
}

openCv.onclick = ()=>{
    showVsn(vsn1, vsn2, vsn3);
    openCv.classList.add('active');
    openOv.classList.remove('active');
    openOm.classList.remove('active');
};

openOv.onclick = ()=>{
    showVsn(vsn2, vsn1, vsn3);
    openOv.classList.add('active');
    openCv.classList.remove('active');
    openOm.classList.remove('active');
};

openOm.onclick = ()=>{
    showVsn(vsn3, vsn1, vsn2);
    openOm.classList.add('active');
    openCv.classList.remove('active');
    openOv.classList.remove('active');
};