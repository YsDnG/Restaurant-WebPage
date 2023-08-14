import Container from './cp-container'

function createCard(element,scriptName,title,paragraph,urlImg)
{
   
    /*Card Img*/
    const imgContainer = Container(`${scriptName}-card-img`,element);
    
    const cardImg= document.createElement('img');
        cardImg.src= urlImg;
        cardImg.alt= 'pizza-1';

    imgContainer.appendChild(cardImg)
    /**/
    /* Card container for Title and description*/
        const textContainer= Container(`${scriptName}-card-text`,element);
    /*Card title*/
        const cardTitle =document.createElement('h2');
        cardTitle.textContent = title;
        textContainer.appendChild(cardTitle)
    /**/
    /*Card text */
        const cardParagraph = document.createElement('p');
        cardParagraph.innerHTML= paragraph;
        textContainer.appendChild(cardParagraph)
    /* */
    
}

export default createCard;