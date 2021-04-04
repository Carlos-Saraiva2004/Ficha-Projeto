function validate(){
    const nome = document.getElementById('nome')
    const requiredFieldNome = document.getElementById('requiredFieldNome')
    const email = document.getElementById('email')
    const requiredFieldEmail = document.getElementById('requiredFieldEmail')
    const emailCheck = document.getElementById('emailCheck')

    const DefaultBorder = 'solid 2px #3F3250'
    const defaultDisplayRequiredField = 'none'

    if(!nome.checkValidity()){
        nome.style.border = 'solid 2px #E14658'
        requiredFieldNome.style.display = 'inline'
        document.formulario.onsubmit = e =>{
            e.preventDefault()
        }
    }
    else{
        nome.style.border = DefaultBorder
        requiredFieldNome.style.display = defaultDisplayRequiredField
    }
    
    if(!email.checkValidity()){
        email.style.border = 'solid 2px #E14658'
        requiredFieldEmail.style.display = 'inline'
        emailCheck.style.display = defaultDisplayRequiredField
        document.formulario.onsubmit = e =>{
            e.preventDefault()
        }
    }else{
        if(!validateEmail(email.value)){
            email.style.border = 'solid 2px #E14658'
            emailCheck.style.display = 'inline'
            requiredFieldEmail.style.display = defaultDisplayRequiredField
            document.formulario.onsubmit = e =>{
            e.preventDefault()
            }
        }else{
            email.style.border = DefaultBorder
            emailCheck.style.display = defaultDisplayRequiredField
            requiredFieldEmail.style.display = defaultDisplayRequiredField
        }
    }

    if(nome.checkValidity() && email.checkValidity() && validateEmail(email.value)){
        document.formulario.onsubmit = async e => {
            e.preventDefault()
            const form = e.target
            const data = new FormData(form)

            const options = {
                method: form.method,
                body: new URLSearchParams(data)
            }
            fetch(form.action, options)
            .then(resp => resp.text())
            .then(text => {
                alert(text)
                location.replace('../index.html')
            })
        }
    }
}

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}