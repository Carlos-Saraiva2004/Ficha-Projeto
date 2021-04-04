var topicos = document.querySelectorAll('[topico]').forEach(topico => {
    var ul = topico.nextElementSibling   
    topico.onclick = e => {
        if (ul.style.display == "block") {
            ul.style.display = "none";
        } else {
            ul.style.display = "block";
        }
    }
})

var div1 = document.querySelector('#img1')
var div2 = document.querySelector('#img2')

div1.onclick = e =>{
    e.preventDefault()
    var img = div1.firstElementChild
    window.open(img.src, '_blank')
}

div2.onclick = e =>{
    e.preventDefault()
    var img = div2.firstElementChild
    window.open(img.src, '_blank')
}
