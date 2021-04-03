/*Show menu*/
const ShowMenu = (toggleID, navID) => {
    const toggle = document.getElementById(toggleID),
    nav = document.getElementById(navID);

    if(toggle && nav){
        toggle.addEventListener('click', ()=> {
            nav.classList.toggle('show');
        })
    }
}

ShowMenu('nav_toggle','nav_options');

/*ACTIVE AND REMOVE MENU*/
const navlink = document.querySelectorAll('.nav_link');

function LikkAction(){
    //remove active
    navlink.forEach( n => n.classList.remove('active'));
    this.classList.add('active');

    //Hide menu
    const navmenu = document.getElementById('nav_options');
    navmenu.classList.remove('show');
}

navlink.forEach(n => n.addEventListener('click',LikkAction))

/*
const buttons = document.querySelectorAll('#contact_button');

buttons.forEach(btn => {
    btn.addEventListener('click', function(e){
        
        let x = e.clientX - e.target.offsetLeft;
        let y = e.clientY - e.target.offsetBottom;
        
        let ripples = document.createElement('span');
        ripples.style.left = x + 'px';
        ripples.style.bottom = y + 'px';
        this.appendChild(ripples);

        setTimeout(() => {
            ripples.remove()
        }, 1000)
    })
})
*/

const SendMessage = () => {
    const Send_Button = document.getElementById('contact_button');

    Send_Button.addEventListener('click', (e) => {

        let x = e.clientX - e.target.offsetLeft;
        let y = e.clientY - e.target.offsetBottom;
        
        let ripples = document.createElement('span');
        ripples.style.left = x + 'px';
        ripples.style.bottom = y + 'px';
        Send_Button.appendChild(ripples);

        setTimeout(() => {            
            ripples.remove();
        }, 2000)

        
        const name = document.getElementById('contact_nombre').value;
        const email = document.getElementById('contact_correo').value;
        const message = document.getElementById('Contac_message').value;
        if(!name || !email || !message || name === '*Obligatorio'){
            showMessage();
            return;
        }
        Email.send({
                Username: "desarrollofullstack2021@gmail.com",
                Password: "LunisMonalisa21*",
                Host: "smtp.gmail.com",
                To: 'cesar.hades77@gmail.com',
                From: "desarrollofullstack2021@gmail.com",
                Subject: `Contacto de ${name}`,
                Body: `Enviado el correo ${email} Mensaje: ${message}.`
            }).then(
                message => {
                    const input_elemnts = document.querySelectorAll('.form_contact_text');
                    input_elemnts.forEach(e => {
                        e.value = "";
                    })
                    alert(message);
                }
            );
        
    })
}
SendMessage();

const showMessage = () => {
    const input_elemnts = document.querySelectorAll('.form_contact_text');

    input_elemnts.forEach(e => {
        e.value = "*Obligatorio";
    })

    setTimeout(() => {
             input_elemnts.forEach(e => {
                e.value = "";
            })
        }, 2000);
}

/*
const sr = ScrollReveal({
    origin : 'top',
    distance : '80px',
    duration: 2000,
    reset: 'true'
})

sr.reveal('.home_section',{})
*/