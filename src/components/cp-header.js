
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
}

export default createHeader;