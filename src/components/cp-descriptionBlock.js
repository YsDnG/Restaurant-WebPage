import Container from './cp-container.js';




function createRestaurantDescription (element){
    /*Create elements neeeded*/
        const title_h2=document.createElement('h2');
        const title_h3= document.createElement('h3');
        const paragraph_1 = document.createElement('p');
        const paragraph_2 = document.createElement('p');
        const menuBtn= document.createElement('button')
        
    /**/

    
    /*h2 text content*/
        title_h2.textContent='LITTLE ITALY'
    /*h3*/
        title_h3.textContent='The Happiness in the kitchen'
    /*Paragraph_1 text content*/
        paragraph_1.textContent ='Le meilleur endroit du centre ville pour déguster des pêtits plats avec le vrai goût de la cuisine irakiene'
    /*Paragraph_2 text content*/
        paragraph_2.textContent ='Tout nos produits sont fait maison'
    /*Button*/
        menuBtn.textContent="Voir nos menus";
        menuBtn.addEventListener('click',()=>
        {
            document.querySelector('.page-content').innerHTML='';
            import('../pages/menu/menu.js')
            .then(scriptMenu => 
            {

                const pageContent = document.querySelector('.page-content');
                const menuContent = Container('menu-content',pageContent);
                scriptMenu.createMenuContent(menuContent);
            })
            .catch(error => 
            {
                console.error("Erreur lors du chargement du script contact.js", error);
            });     
        });

    /*Add all the new elements created to element*/
        element.appendChild(title_h2);
        element.appendChild(title_h3);
        element.appendChild(paragraph_1);
        element.appendChild(paragraph_2);
        element.appendChild(menuBtn);

}

export default createRestaurantDescription;