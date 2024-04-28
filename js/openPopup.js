document.addEventListener('DOMContentLoaded', function(){
    const popupBtn = document.getElementById('good1');
    const imgSrcGood = document.getElementById('good1').src;
    const popup = document.getElementById('popup');
    const popupClose = document.getElementById('closePopup');
    const imgGood = document.getElementById('imageGood');


    popupBtn.addEventListener('click', function(){
        if(popup.style.display == 'none'){
            popup.style.display = 'flex';
            imgGood.src = imgSrcGood;
        }
        else{
            popup.style.display = 'none';
        }
    });

    popupClose.addEventListener('click', function(){
        popup.style.display = 'none';
    });
    
});