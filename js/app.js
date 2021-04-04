function navegation(url, target){
    if(!url || !target) return

    const element = document.querySelector(target)
     fetch(url)
     .then(resp => resp.text())
     .then(html => {
        element.innerHTML = html
    })
}

document.querySelectorAll('[casn-link]').forEach(link => {
    const url = link.attributes['casn-link'].value
    const target = link.attributes['casn-destino'].value

    link.onclick = e => {
        e.preventDefault()
        navegation(url, target)
        checkMain(url)
    }
})

function addScript(src, url) {
    
    const aside = document.querySelector('aside[imagens]')
    const div1 = document.getElementById('img1');
    const div2 = document.getElementById('img2');
    
    if(url == 'sobre.html'){
        if(aside.childElementCount > 0){
            aside.removeChild(div1)
            aside.removeChild(div2)
        }
        return
    }

    const script = document.createElement('script');
    script.id = 'addScript'
    script.type = 'text/javascript';
    script.src = src;

    const imgIn1 = document.createElement("img")
    const imgIn2 = document.createElement("img")

    const divIn1 = document.createElement("div")
    const divIn2 = document.createElement("div")
    if(url == "modeloOSI.html"){    
        divIn1.id = "img1"
        imgIn1.src = "img/OSI.png"
        
        divIn2.id = "img2"
        imgIn2.src = "img/modeloOSIExplicacao.jpg"
    }
    if(url == "TCPIPeOSI.html"){
        divIn1.id = "img1"
        imgIn1.src = "img/TCPIP.png"
        
        divIn2.id = "img2"
        imgIn2.src = "img/OSIvsTCPIP.png"
    }
    
    divIn1.appendChild(imgIn1)
    divIn2.appendChild(imgIn2)

    const head = document.getElementsByTagName('head')[0];
    const scriptToRemove = document.getElementById('addScript');

    if(aside.childElementCount > 0){
        aside.removeChild(div1)
        aside.removeChild(div2)
    }
    if(scriptToRemove){
        head.removeChild(scriptToRemove);
    }
    head.appendChild(script);
    aside.appendChild(divIn1)
    aside.appendChild(divIn2)
}

const main = document.querySelector('main[conteudo]')

function checkMain(url){
    const inter = setInterval(() => {
        if(main.textContent.trim() != ''){
            addScript('js/info.js', url)   
            clearInterval(inter)     
        }
    }, 1)
} 

let today = new Date()
let month = 'x'
switch(today.getMonth()+1){
    case 1:
        month = "de janeiro de"
    break
    case 2:
        month = "de fevereiro de"
    break
    case 3:
        month = "de março de"
    break
    case 4:
        month = "de abril de"
    break
    case 5:
        month = "de maio de"
    break
    case 6:
        month = "de junho de"
    break
    case 7:
        month = "de julho de"
    break
    case 8:
        month = "de agosto de"
    break
    case 9:
        month = "de setembro de"
    break
    case 10:
        month = "de outubro de"
    break
    case 11:
        month = "de novembro de"
    break
    case 12:
        month = "de dezembro de"
    break
    default:
        month = "erro"
    break

}
let date = `${today.getDate()} ${month} ${today.getFullYear()} - <b><i>Carlos Saraiva</i></b>`

const  p = document.querySelector('[rodape] p')
p.innerHTML = date


