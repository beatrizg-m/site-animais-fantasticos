export default function initScrollSuave(){
    const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

    linksInternos.forEach((link) => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const href = event.currentTarget.getAttribute('href');
            const section = document.querySelector(href);
            const topo = section.offsetTop;

            //tentar fazer depois com o scrollIntoView
            window.scrollTo({
                top: topo,
                behavior: "smooth"
            });
        })
    }) 
}