function initTab(){
    const tabMenu = document.querySelectorAll('.js-tabmenu li')
    const tabContent = document.querySelectorAll('.js-tabcontent section');
    

    if(tabMenu.length && tabContent.length){
        tabContent[0].classList.add('ativo');
        
        function activeTab(index) {
            tabContent.forEach((section) => {
            section.classList.remove('ativo');
        });
        tabContent[index].classList.add('ativo');
    }

        tabMenu.forEach((itemMenu, index) => {
            itemMenu.addEventListener('click', () => {  
                activeTab(index);
        });
    });  
    }  
}

initTab(); 

function initAccordion(){
    const accordionList = document.querySelectorAll('.js-accordion dt');
    if(accordionList.length){
        accordionList[0].classList.add('ativo');
        accordionList[0].nextElementSibling.classList.add('ativo');

        function activeAccordion(){
            this.classList.toggle('ativo')
            this.nextElementSibling.classList.toggle('ativo')
        }

        accordionList.forEach((item) => {
            item.addEventListener('click', activeAccordion); 
        }) 
    }  
}

initAccordion();

function initScrollSuave(){
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

initScrollSuave();

function initAnimaScroll(){
    const sections = document.querySelectorAll('.js-scroll');
    const windowMetade = window.innerHeight * 0.4;

    function animaScroll(){
        sections.forEach((section) => {
            const sectionTop = section.getBoundingClientRect().top - windowMetade;
            if(sectionTop < 0){
                section.classList.add('ativo');
            }
        })
    }
    animaScroll();
    window.addEventListener('scroll', animaScroll);   
}

initAnimaScroll(); 


