let onePicture = document.querySelector('.project-one-picture');
let twoPicture = document.querySelector('.project-two-picture');
let oneTextContainer=document.querySelector('.one-text-container');
let twoTextContainer=document.querySelector('.two-text-container');
const main = document.querySelector('.container');
let height=window.innerHeight;
const scrollEvent = () => {
    console.log('height: ', height);
    console.log('scroll: ', main.scrollTop);
    if (main.scrollTop >= 100 && main.scrollTop <= height) {
        onePicture.style.opacity = `1`;
        oneTextContainer.style.cssText = 'width:66%; opacity:1; right:0;';
    }
    else if (main.scrollTop > height+100){
        twoPicture.style.opacity = `1`;
        twoTextContainer.style.cssText = 'width:66%; opacity:1; left:0;';
    }
    else {
        onePicture.style.opacity = `0.2`;
    }

}
main.addEventListener('scroll', scrollEvent);
