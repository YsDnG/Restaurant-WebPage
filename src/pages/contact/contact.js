/***CSS IMPORT ***/
import '../../style/common.css';
import './contact.css'; // Import index.css
/******/
/***COMPONENTS IMPORT ***/
import Header from '../../components/cp-header.js'; 
import Container from '../../components/cp-container.js';
import Card from '../../components/cp-cardSummary'
/******/
export function createContactContent()
{
  
const pageContent = document.querySelector('.page-content');
const contactContent= Container('contact-content',pageContent);

const divMap= Container('map-content',contactContent)
const infoContact=Container('info-contact',contactContent)

/*add the map to the contact-map panel */
const iframe = document.querySelector('iframe');
iframe.classList.remove('is-notActive');

divMap.appendChild(iframe);


const imagesContext = require.context('../../img', false, /\.(png|jpe?g|gif|svg)$/);
    const imagePaths = imagesContext.keys();
    const imagesByName = {};
    imagePaths.forEach(path => {
        const imageName = path.split('/').pop(); // Obtient le nom de l'image depuis le chemin
        imagesByName[imageName] = imagesContext(path);
      });

Card(infoContact,"contact","LITTLE ITALY","Adresse: 26 rue de l'Oradou, 63000 Clermont-Fd <br> TEL: 04-73-56-56-56 <br> EMAIL:LittleItaly@gmail.com",imagesByName['restaurant.png'])

}



