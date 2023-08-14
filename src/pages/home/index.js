/***CSS IMPORT ***/
import '../../style/common.css';
import './index.css'; // Import index.css
/******/
/***COMPONENTS IMPORT ***/
import Header from '../../components/cp-header.js'; 
import Container from '../../components/cp-container.js';
import DescriptionRestaurant from '../../components/cp-descriptionBlock'

/******/

export function createIndex(mainContent)
{
   
    const presentation = Container('description',mainContent);
    DescriptionRestaurant(presentation);
}

const main = (()=>{
    const header = Header();
    const mainContent = Container('page-content');
    createIndex(mainContent);
})();






