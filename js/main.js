const btnBug = document.getElementById('btnBug');
const modalsBox = document.getElementsByClassName("modal");
const formContact = document.querySelector('#contact-form');
const iElement = document.createElement('i');
const aElement = document.createElement('a');
const divElement = document.createElement('div');


modalsBox.length > 1 ? modalContent() : null;

function modalContent() {
    let elements = Array.from(modalsBox);
    elements.forEach(element => {
        let data = element.childNodes[0].childNodes[0].childNodes[1].childNodes[0].data;
        let container = element.childNodes[0].childNodes[0].childNodes[1];
        container.innerHTML = data;
    })
}

let templateSuccess = `<div class="alert alert-success" role="alert"><h4 class="alert-heading font-weight-bold">¡Muchas Gracias!</h4><p>Tu mensaje se a enviado correctamente y a la brevedad nos pondremos en contacto contigo</p><hr><p class="mb-0 font-14">Cualquier consulta que necesites realizar de forma inmediata podes enviarnos un correo electronico a <span class="font-weight-bold">info@fumigacionesrm.com.ar</span> o enviarnos un <a class="btn btn-success font-weight-bold btn-sm m-0 rounded-lg" href="https://wa.me/5491131039463?text=Hola%2C%20que%20tal%3F%2C%20vengo%20desde%20tu%20web%20y%20necesito%20que%20me%20asesores.." target="_blank" class="font-weight-bold text-success">Whatsapp</a></p></div>`;

//! JQUERY

$('#contact-form').submit(function(e) {
    e.preventDefault();
    const postValue = {
        name: $('#name').val(),
        email: $('#emailInput').val(),
        phone: $('#phone').val(),
        message: $('#message').val(),
        bugSelect: $('#bugSelect').val(),
        placeSelect: $('#placeSelect').val()
    };
    //console.log(postValue)
    $.post('php/addMessage.php', postValue, function(res) {
        //console.log(res)
        if (res === '200') {
            $('#response').html(templateSuccess)
            $('#form-container').addClass('d-none')
        }

        $("#contact-form").trigger('reset');
    });
});

$.minicolors.defaults = $.extend($.minicolors.defaults, {
    changeDelay: 200,
    letterCase: 'uppercase',
    theme: 'bootstrap'
});
$('#c1').minicolors();
$('#c2').minicolors();


const btnApplyC1 = document.querySelector("#apply-c1");

btnApplyC1.addEventListener('click', function(){
    
    const colorPrimario = document.querySelector('#svg-color-primario');
    let element = colorPrimario.childNodes[1].childNodes[0]
    console.log(element)
    let c1Value = $('#c1').val();
    element.setAttribute("fill", c1Value)
    
});

const btnApplyC2 = document.querySelector("#apply-c2");

btnApplyC2.addEventListener('click', function(){
    
    const colorSecundario = document.querySelector('#svg-color-secundario');
    let elements = Array.from(colorSecundario.childNodes[1].childNodes);
    let c2Value = $('#c2').val();
    
    elements.forEach( part => {

        if(part.id !== "prefix__path1675"){
            console.log(part.id)
            let aux = document.querySelector(`#${part.id}`)
            aux.setAttribute("fill", c2Value)
        }else{
            let aux = document.querySelector(`#${part.id}`)
            aux.setAttribute("fill", "#000")
        } 
    });
    
});

