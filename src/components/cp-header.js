
function createHeader()  
{
    const content = document.getElementById('content');
    /*Create the new div header*/
    const header = document.createElement('div')
    header.classList.add('header');
    /**/

    /*Create title for the header*/
        const title = document.createElement('h1');
        title.textContent="LITTLE ITALY"
        header.appendChild(title)
    /**/
    
    /*Create the Nav-bar for the header*/
        const list = document.createElement('ul');
        list.classList.add('nav-bar')
        const listElement={
            1: 'Home',
            2: 'Menu',
            3: 'Contact',
        };
        for(const key in listElement)
        {
            let element = document.createElement('li');
            element.classList.add(`li-${listElement[key]}`);
            element.textContent=`${listElement[key]}`;
            list.appendChild(element);

        }
    /**/
    header.appendChild(list);
    content.appendChild(header);

    document.querySelector('.li-Menu').addEventListener('click',()=>{
         
            import('../pages/menu/menu.js')
            .then(scriptMenu => 
            {
                document.querySelector('body').prepend(document.querySelector('iframe'));
                document.querySelector('.page-content').innerHTML='';
                scriptMenu.createMenuContent();
            })
            .catch(error => 
            {
                console.error("Erreur lors du chargement du script menu.js", error);
            }); 
        

    })
    document.querySelector('.li-Contact').addEventListener('click',()=>{
            
            import('../pages/contact/contact.js')
            .then(scriptContact => 
            {
                document.querySelector('body').prepend(document.querySelector('iframe'));
                document.querySelector('.page-content').innerHTML='';
                scriptContact.createContactContent();
            })
            .catch(error => 
            {
                console.error("Erreur lors du chargement du script contact.js", error);
            });  
        
    });
    document.querySelector('.li-Home').addEventListener('click',()=>{
          
            import('../pages/home/index.js')
            .then(scriptHome => 
            {
                document.querySelector('body').prepend(document.querySelector('iframe'));
                
                document.querySelector('iframe').classList.add('is-notActive');
                document.querySelector('.page-content').innerHTML='';
                scriptHome.createIndex(document.querySelector('.page-content'));
            })
            .catch(error => 
            {
                console.error("Erreur lors du chargement du script index.js", error);
            });
        
    })
   
}

export default createHeader;