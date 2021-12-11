 let container = document.getElementById('container');
        
window.onmousemove = function(e){
    let x = -e.clientX/1, y = -e.clientY/1;
            
    container.style.backgroundPositionX = x + 'px';
    container.style.backgroundPositionY = y + 'px';
}