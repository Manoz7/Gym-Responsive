const navSlide = () => {

    let navlinks = document.querySelector('.nav-links');
    let burger = document.querySelector('.burger');
    let links = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () =>{

        navlinks.classList.toggle('nav-active');     
        
        links.forEach((link, index) => {
            if (link.style.animation){
                link.style.animation = '';
            }
            else{

                link.style.animation = `navlinkFade 0.5s ease forwards ${index / 7}s`;
            }
        });

        burger.classList.toggle('toggle');        


    });


};

navSlide();


