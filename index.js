const yesBtn = document.querySelector('#yesBtn');

yesBtn.addEventListener('click',function () {
    alert('Sabía que dirias que sí ;)')
    alert('Ahora que aceptaste el mensaje, tendrás que seguir leyendo hasta que logres leerlo')
    alert('JAJASJA uno pensando en cómo hacer esto')
    alert('Bueno mocha, en el siguiente mensaje estará el mensaje')
    alert('CAÍSTEEEE JAJSAJJAJ 😝')
    alert('Bueno ahora sí')
    alert('Ya estás ceeeeeercaaaaa')
    alert('A naaaaaadaaaaa')
    alert('Listo xd, coloca el siguiente enlace en el buscador')
    alerta('https://jcbravo18.github.io/Paralamocha/')
});

const noBtn = document.querySelector('#noBtn');

noBtn.addEventListener('mouseover', function () {
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);
    noBtn.style.setProperty('top',randomY+'%');
    noBtn.style.setProperty('left',randomX+'%');
    noBtn.style.setProperty('transform',`translate(-${randomX}%,-${randomY}%)`);
})
