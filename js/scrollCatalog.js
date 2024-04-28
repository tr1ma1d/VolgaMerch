document.addEventListener('DOMContentLoaded', function(){
    const scrolling = document.getElementById('slider');
    const catalog = document.getElementById('catalog');
    scrolling.addEventListener('click', function(){
        if(catalog){
            catalog.scrollIntoView({behavior:'smooth'});
        }
        else{
            alert('Ошибка');
        }
 
    });
});