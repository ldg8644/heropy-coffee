
const badgeEl = document.querySelector('.badges');
const toTopEl = document.querySelector('#top_btn');


window.addEventListener('scroll', function(){
    console.log(window.scrollY);//스크롤값확인하기
    if(760<window.scrollY){
        // badgeEl.style.display='none';
        gsap.to(badgeEl,0.3,{opacity:0, display:'none'});
        gsap.to(toTopEl, 0.6, {
            opacity:1
            
        });
    }else{
        // badgeEl.style.display='block';
        gsap.to(badgeEl,0.3,{opacity:1,display:'block'})
        gsap.to(toTopEl,0.6,{
            opacity:0
        });
    }
});

//gsap.to(요소, 시간, 속성)

const fadeEl=document.querySelectorAll('.fadein');

fadeEl.forEach(function (fadeEl, index) {
    gsap.to(fadeEl, 1, {
        delay: (index+1) * 0.7,
        opacity: 1,
    });
});


// //커피프로모션 토글아이콘 클릭시 박스 숨기고 나타내기

const promotionEl = document.querySelector('section.promotion');

const toggleBtnEl = document.querySelector('.toggle_btn');

//토글버튼을 클릭하면 프로모션에 크기가 변한다.

toggleBtnEl.addEventListener('click', function(){

    if(promotionEl.classList.contains('hide')) {//만약 promotion클래스에 hide서식이 있다면 
        //높이가 663이 되어야 한다
        promotionEl.classList.remove('hide');//
    }else{//그렇지 않으면
        //높이가 0이 되어야한다.
        promotionEl.classList.add('hide');
    }
});


//6,7,8,10콘텐츠가 화면의 80%지점에서 보일때 동작하는 스크립트

const spyEl = document.querySelectorAll
('section.scroll-spy');

spyEl.forEach(function(spyEl){
    new ScrollMagic
    .Scene({
        triggerElement:spyEl,
        triggerHook:0.8//화면의 80%지점에서 동작
    })
    .setClassToggle(spyEl,'show')
    .addTo(new ScrollMagic.Controller());
})

new Swiper('.awards .swiper', {
    autoplay: true,
    loop: true,
    spaceBetween: 30,
    slidesPerView: 5,
    navigation: {
        prevEl:'.awards .swiper-button-prev',
        nextEl:'.awards .swiper-button-next'
    }

});
const thisYear =document.querySelector('.this-year');
thisYear.textContent =new Date().getFullYear();

toTopEl.addEventListener('click', function(){
    gsap.to(window, .6, {
        scrollTo: 0
    });
});