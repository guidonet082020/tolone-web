const questionsSection = document.querySelector('#questions');
const btnBug = document.getElementById('btnBug');
const modalsBox = document.getElementsByClassName("modal");
const formContact = document.querySelector('#contact-form');
const iElement = document.createElement('i');
const aElement = document.createElement('a');
const divElement = document.createElement('div');

questionsSection != null ? questionSectionFunc() : null;
btnBug != null ? btnBugFunc() : null;
modalsBox.length > 1 ? modalContent() : null;

function modalContent() {
    let elements = Array.from(modalsBox);
    elements.forEach(element => {
        let data = element.childNodes[0].childNodes[0].childNodes[1].childNodes[0].data;
        let container = element.childNodes[0].childNodes[0].childNodes[1];
        container.innerHTML = data;
    })
}

function btnBugFunc() {
    btnBug.addEventListener('click', (e) => {
        let { target } = e;
        let icon, parent;
        switch (target.nodeName) {
            case iElement.nodeName:
                {
                    icon = target;
                    parent = target.parentNode.parentNode;
                    icon.classList.contains('fa-chevron-down') ? icon.classList.replace('fa-chevron-down', 'fa-times') : icon.classList.replace('fa-times', 'fa-chevron-down');
                    break;
                }
            case divElement.nodeName:
                {
                    icon = target.childNodes[0];
                    parent = target;
                    icon.classList.contains('fa-chevron-down') ? icon.classList.replace('fa-chevron-down', 'fa-times') : icon.classList.replace('fa-times', 'fa-chevron-down');
                    break;
                }
            default:
                {
                    icon = target.childNodes[1].childNodes[0];
                    parent = target;
                    console.log(icon);
                    icon.classList.contains('fa-chevron-down') ? icon.classList.replace('fa-chevron-down', 'fa-times') : icon.classList.replace('fa-times', 'fa-chevron-down');
                    break;
                }
        }
    });
}

function questionSectionFunc() {
    questionsSection.addEventListener("click", (e) => {
        //console.log(e)
        let { target } = e;
        let icon;
        let parent;
        // console.log(icon)
        //console.log(target.nodeName === iElement.nodeName, target.nodeName == aElement.nodeName)
        if (target.nodeName == iElement.nodeName) {
            icon = target;
            parent = icon.parentNode.parentNode;
            //console.log(parent)
            parent.classList.contains('white-circle') ? parent.classList.replace("white-circle", "white-circle-active") : parent.classList.replace("white-circle-active", "white-circle");
            icon.classList.contains('white-circle') ? icon.classList.replace("white-circle", "red") : icon.classList.replace("red", "white-circle");
            icon.classList.contains('fa-chevron-down') ? icon.classList.replace("fa-chevron-down", "fa-times") : icon.classList.replace("fa-times", "fa-chevron-down");
            parent.classList.toggle("z-depth-1");
            // console.log("is i Element")
        } else if (target.nodeName === aElement.nodeName) {
            parent = target;
            icon = parent.childNodes[1].childNodes[0];
            //console.log(icon)
            parent.classList.contains('white-circle') ? parent.classList.replace("white-circle", "white-circle-active") : parent.classList.replace("white-circle-active", "white-circle");
            icon.classList.contains('white-circle') ? icon.classList.replace("white-circle", "red") : icon.classList.replace("red", "white-circle");
            icon.classList.contains('fa-chevron-down') ? icon.classList.replace("fa-chevron-down", "fa-times") : icon.classList.replace("fa-times", "fa-chevron-down");
            //icon.classList.toggle("icon-move");
            parent.classList.toggle("z-depth-1");
            //console.log("is a Element")
        } else if (target.nodeName === divElement.nodeName) {
            icon = target.childNodes[0];
            parent = target.parentNode;
            //console.log(icon)
            parent.classList.contains('white-circle') ? parent.classList.replace("white-circle", "white-circle-active") : parent.classList.replace("white-circle-active", "white-circle");
            icon.classList.contains('white-circle') ? icon.classList.replace("white-circle", "red") : icon.classList.replace("red", "white-circle");
            icon.classList.contains('fa-chevron-down') ? icon.classList.replace("fa-chevron-down", "fa-times") : icon.classList.replace("fa-times", "fa-chevron-down");
            //icon.classList.toggle("icon-move");
            parent.classList.toggle("z-depth-1");
            //console.log("is a Element")
        }
    });
}

let templateSuccess = `<div class="alert alert-success" role="alert">
<h4 class="alert-heading font-weight-bold">¡Muchas Gracias!</h4>
<p>Tu mensaje se a enviado correctamente y a la brevedad nos pondremos en contacto contigo</p>
<hr>
<p class="mb-0 font-14">Cualquier consulta que necesites realizar de forma inmediata podes enviarnos un correo electronico a <span class="font-weight-bold">info@fumigacionesrm.com.ar</span> o enviarnos un <a class="btn btn-success font-weight-bold btn-sm m-0 rounded-lg" href="https://wa.me/5491131039463?text=Hola%2C%20que%20tal%3F%2C%20vengo%20desde%20tu%20web%20y%20necesito%20que%20me%20asesores.." target="_blank" class="font-weight-bold text-success">Whatsapp</a></p>
</div>`;

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