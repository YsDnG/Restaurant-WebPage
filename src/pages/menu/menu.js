/***CSS IMPORT ***/
import '../../style/common.css';
import './menu.css';
/******/

/***IMG IMPORT ***/
import Img_plat_1 from '../img/pizza3.jpg' 
/******/

/***COMPONENTS IMPORT ***/
import Container from '../../components/cp-container.js';
import Card from '../../components/cp-cardSummary.js'
/******/

export function createMenuContent(element)
{
    const title = Container('menu-title',element)
        title.textContent='OUR MENU'
    
    const imagesContext = require.context('../img', false, /\.(png|jpe?g|gif|svg)$/);
    const imagePaths = imagesContext.keys();
    const imagesByName = {};
    imagePaths.forEach(path => {
        const imageName = path.split('/').pop(); // Obtient le nom de l'image depuis le chemin
        imagesByName[imageName] = imagesContext(path);
      });
    /* Create a Container for every plat */
    const plat_1= Container('plat',element);
    const plat_2= Container('plat',element);
    const plat_3= Container('plat',element);
    const plat_4= Container('plat',element);
    const plat_5= Container('plat',element);
    const plat_6= Container('plat',element);
    
   const allPlat=[ 
    {
        domElement: plat_1,
        title : "Good Pizza",
        ingredient:"Base tomate/ origan/ olives,poulet, chorizos, viandes hachées, mozzarella, basilic frais",
        urlImg:imagesByName['pizza1.jpg'],
    },
    {
        domElement: plat_2,
        title : "Good Pizza 2",
        ingredient:"Base tomate/ origan/ olives,poulet, chorizos, viandes hachées, mozzarella, basilic frais",
        urlImg:imagesByName['pizza2.jpg'],
    },
    {
        domElement: plat_3,
        title : "Good Pizza 3",
        ingredient:"Base tomate/ origan/ olives,poulet, chorizos, viandes hachées, mozzarella, basilic frais",
        urlImg:imagesByName['pizza3.jpg'],
        
    },
    {
        domElement: plat_4,
        title : "Good Pizza 3",
        ingredient:"Base tomate/ origan/ olives,poulet, chorizos, viandes hachées, mozzarella, basilic frais",
        urlImg:imagesByName['pizza4.jpg'],
        
    },
    {
        domElement: plat_5,
        title : "Good Pizza 3",
        ingredient:"Base tomate/ origan/ olives,poulet, chorizos, viandes hachées, mozzarella, basilic frais",
        urlImg:imagesByName['pizza5.jpg'],
       
    },
    {
        domElement: plat_6,
        title : "Good Pizza 3",
        ingredient:"Base tomate/ origan/ olives,poulet, chorizos, viandes hachées, mozzarella, basilic frais",
        urlImg:imagesByName['pizza6.jpg'],

    },
     ];

     allPlat.forEach(plat => {
        Card(plat.domElement,plat.title,plat.ingredient,plat.urlImg);
     })  
}