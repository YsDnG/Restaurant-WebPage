
/*Create a new div with the class of className if element have child had them to it */
const createContainer=(className,parent,text)=>{
    const element = document.createElement('div');
    element.classList.add(className);
    if(text)
        element.textContent= text;
    
    if(parent)
    {
         parent.appendChild(element);
         return element
        
    }
    else
    {
         document.getElementById('content').appendChild(element);
         return element
    }
    
}

export default createContainer;