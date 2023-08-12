import Container from './cp-container'

function createCard(element,title,paragraph,urlImg)
{
    console.log(title)
    /*Card Img*/
    const imgContainer = Container('card-img',element);
    
    const cardImg= document.createElement('img');
        cardImg.src= urlImg;
        cardImg.alt= 'pizza-1';

    imgContainer.appendChild(cardImg)
    /**/
    /* Card container for Title and description*/
        const textContainer= Container('card-text',element);
    /*Card title*/
        const cardTitle =document.createElement('h2');
        cardTitle.textContent = title;
        textContainer.appendChild(cardTitle)
    /**/
    /*Card text */
        const cardParagraph = document.createElement('p');
        cardParagraph.textContent= paragraph;
        textContainer.appendChild(cardParagraph)
    /* */
    
}

export default createCard;