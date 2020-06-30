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
    animationSpeed: 50,
    animationEasing: 'swing',
    changeDelay: 20,
    control: 'wheel',
    dataUris: true,
    defaultValue: '#eee',
    hide: null,
    hideSpeed: 100,
    inline: false,
    letterCase: 'uppercase',
    opacity: false,
    position: 'center',
    show: null,
    showSpeed: 100,
    theme: 'bootstrap'
});
let c1 = $('#c1'), c2 =$('#c2');
c1.minicolors();
c2.minicolors();
c1.on('change', function () {
    let hex = $(this).val()
    $(`path[data-type="base"]`).css('fill', hex);
});
c2.on('change', function () {
    let hex = $(this).val()
    $(`path[data-type="trama"]`).css('fill', hex);
});

let camisetaFrentePrimaria = $("#camisetaFrentePrimaria svg");
let camisetaDorsoPrimaria = $("#camisetaDorsoPrimaria svg");
let tramaFrente, tramaDorso, elementoMontado = { name: "", active: false };
searchElements(); //* Busco los elementos svg y les coloco el id necesario y seteando data-description

const btnApplyC1 = document.querySelector("#apply-c1");
btnApplyC1.addEventListener('click', function() {
    let c1Value = $('#c1').val();
    changeColor('base', c1Value);
});

const btnApplyC2 = document.querySelector("#apply-c2");
btnApplyC2.addEventListener('click', function() {
    let c2Value = $('#c2').val();
    changeColor('trama', c2Value);
})

const remerasContainer = document.getElementById('remerasContainer');
remerasContainer.addEventListener('click', function(e) {
    let files, arr, { target } = e;
    if (target.nodeName === "IMG") {
        files = target.getAttribute("data-forms")
        let arr = files.split(",");
        getFile(target.alt, arr)
    } else if (target.nodeName === "DIV") {
        let imgTarget = target.childNodes[0];
        files = imgTarget.getAttribute("data-forms")
        arr = files.split(",");
        getFile(imgTarget.alt, arr)
    }
})

function changeColor(type, color) {
    let elements = $(`path[data-type=${type}]`)
    for (let el of elements) {
        el.setAttribute('fill', color)
    }
}

function getFile(nameFolder, ...nameFile) {
    switch (nameFolder) {
        case 'model01':
            alert("Modelo aun no disponible")
                //setModel(nameFolder, nameFile[0]);
            break;
        case 'model02':
            setModel(nameFolder, nameFile[0]);
            break;
        case 'model03':
            setModel(nameFolder, nameFile[0]);
            break;
        case 'model04':
            alert("Modelo aun no disponible")
                //setModel(nameFolder, nameFile[0]);
            break;
        case 'model05':
            setModel(nameFolder, nameFile[0]);
            break;
        case 'model06':
            setModel(nameFolder, nameFile[0]);
            break;
    }
}

function setModel(nameFolder, nameFile) {
    if (elementoMontado.name !== nameFolder) {
        elementoMontado.name = nameFolder;
        searchFiles(nameFile, elementoMontado.name);
    } else if (elementoMontado.name === nameFolder) {
        $(`#tramaDorso`).empty();
        $(`#tramaFrente`).empty();
        elementoMontado.name = "";
        elementoMontado.active = false;
    } //else {
    // console.error(`Elemento ${nameFolder} ya montado`)
    //}
}

function searchFiles(nameFile, nameFolder) {
    for (const [i, name] of nameFile.entries()) {
        $.get(`../img/assets/remeras/${nameFolder}/${name}.svg`, (data) => {
            if (i === 0) {
                tramaFrente = parseAppend(data.children[0], "tramaFrente")
                categorizeElements(tramaFrente)
                changeColor("base", c1.val())
            } else {
                tramaDorso = parseAppend(data.children[0], "tramaDorso");
                categorizeElements(tramaDorso)
                changeColor("trama", c2.val())
                elementoMontado.active = true;
            }
        });
    }
}

function parseAppend(svg, element) {
    if (elementoMontado.active) {
        $(`#tramaDorso`).empty();
        $(`#tramaFrente`).empty();
        elementoMontado.active = false;
    } else {
        return $(`#${element}`).append(svg);
    }
}

function searchElements() {
    camisetaFrentePrimaria.children()[0].setAttribute('data-type', 'base');
    camisetaFrentePrimaria.children()[1].setAttribute('data-type', 'trama');
    camisetaDorsoPrimaria.children()[0].setAttribute('data-type', 'base');
    camisetaDorsoPrimaria.children()[1].setAttribute('data-type', 'trama');
    changeColor("base",c1.val());
    changeColor("trama",c2.val());
}

function categorizeElements(parentContainer) {
    if (parentContainer != undefined) {
        for (let item of parentContainer.children()[0].childNodes) {
            if (item.nodeName === "path" && item.getAttribute("fill") != "none") {
                item.setAttribute("data-type", "trama")
            }
        }
    }
}

const btnReset = $("#reset");
btnReset.click(() =>{
    $(`#tramaDorso`).empty();
    $(`#tramaFrente`).empty();
    elementoMontado.name = "";
    elementoMontado.active = false;
    c1.minicolors('value','#eeeeee');
    c2.minicolors('value','#333333');
    changeColor('base', c1.val());
    changeColor('trama', c2.val());
})