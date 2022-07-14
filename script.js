function slidesPlagin(activeSlide=0) {
    const slides=document.querySelectorAll('.slide')

slides[activeSlide].classList.add('active')

for (const slide of slides) {
    slide.addEventListener('click',()=>{
        clearActiveSlides()
        slide.classList.add('active')
    })
    slide.addEventListener('touch',()=>{
        clearActiveSlides()
        slide.classList.add('active')
    })
}

function  clearActiveSlides() {
    slides.forEach(slide=>slide.classList.remove('active'))
}}
slidesPlagin()