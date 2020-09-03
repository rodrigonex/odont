function menu () {
    const seletMenu = document.querySelector('.icon-menu');
    const ativo = document.querySelector('.menu-mobile-list ul');
    seletMenu.addEventListener('click', (event) =>{
    ativo.classList.toggle('ativo');
    });
}
menu();

function carrosel () {
    slide(1);
    let bgNumber = 1;
    function slide(n) {
        const bgMax = 12;
        document.getElementById("banner").style.backgroundImage = "url('./img/"+n+".jpg')";
    }

    const proximo = document.querySelector(".proximo");
    proximo.addEventListener('click', () => {
        if(bgNumber < 12) {
            bgNumber++;
            slide(bgNumber);
        }
    });

    const anterior = document.querySelector(".anterior");
    anterior.addEventListener('click', () => {
        if(bgNumber > 1) {
            bgNumber--;
            slide(bgNumber);
        }
    })  
} 
carrosel ()















 /*
    const intervalo = 3000;

    function slide1() {
        document.getElementById("banner").src = "./img/1.jpg";
        setTimeout("slide2()", intervalo);
    }

    function slide2() {
        document.getElementById("banner").src = "./img/2.jpg";
        setTimeout("slide3()", intervalo)
    }

    function slide3() {
        document.getElementById("banner").src = "./img/3.jpg";
        setTimeout("slide4()", intervalo)
    }

    function slide4() {
        document.getElementById("banner").src = "./img/4.jpg";
        setTimeout("slide1()", intervalo)
    }
    
    slide1()

*/