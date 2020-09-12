$(window).ready(function(){
    console.log("sliderjs.js works: ")
})

function posicionSlide(nSlide){
    let slides = $("[data-myslider]")
    $.each(slides, (i,v) =>{ 
        v.classList.remove('d-flex')
        v.classList.remove('d-none')
        //console.log(typeof parseInt(v.attributes[1].value) , typeof nSlide,parseInt(v.attributes[1].value) === nSlide)
        if(parseInt(v.attributes[1].value) === nSlide){
            v.classList.add("d-flex")
        }else{
            v.classList.add("d-none")
        }
    })
    
}