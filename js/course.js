//course description
const courseOneToggle = document.querySelector('.lt-1');
const courseTwoToggle = document.querySelector('.lt-2');
const courseOne = document.querySelector('.ltc-1');
const courseTwo = document.querySelector('.ltc-2');

courseOneToggle.onclick = ()=> {
    console.log('works')
    courseOne.classList.remove('d-none');
    courseTwo.classList.add('d-none');
    courseOneToggle.classList.remove('bg-g-2');
    courseOneToggle.classList.add('bg-r-2');
    courseTwoToggle.classList.add('bg-g-2');
    courseTwoToggle.classList.remove('bg-r-2');
    courseOneToggle.querySelector('h3').classList.remove('text-black');
    courseOneToggle.querySelector('h3').classList.add('text-white');
    courseTwoToggle.querySelector('h3').classList.remove('text-white');
    courseTwoToggle.querySelector('h3').classList.add('text-black');
};

courseTwoToggle.onclick = ()=> {
    courseTwo.classList.remove('d-none');
    courseOne.classList.add('d-none');
    courseTwoToggle.classList.remove('bg-g-2');
    courseTwoToggle.classList.add('bg-r-2');
    courseOneToggle.classList.add('bg-g-2');
    courseOneToggle.classList.remove('bg-r-2');
    courseTwoToggle.querySelector('h3').classList.remove('text-black');
    courseTwoToggle.querySelector('h3').classList.add('text-white');
    courseOneToggle.querySelector('h3').classList.remove('text-white');
    courseOneToggle.querySelector('h3').classList.add('text-black');
};