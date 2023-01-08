var modeControll;


function toggleMode(){
    let mode = document.querySelector('body');
    
    modeControll = mode.getAttribute('class');
    
    if(modeControll == null){
        mode.setAttribute('class',"light");
        localStorage.setItem('colorProfile', 'light');
        
        
    }
    if(modeControll == "light"){
        localStorage.removeItem('colorProfile');
        mode.removeAttribute('class','light');
        
    }
   
   

    //mode.classList.toggle('light');
}

function setColorProfile(){
    let mode = document.querySelector('body');
    let colorProfile = localStorage.getItem('colorProfile');
    if(colorProfile == null){
        mode.removeAttribute('class','light');

    }
    if(colorProfile == "light"){
        mode.setAttribute('class',"light");
    }
}

setColorProfile();