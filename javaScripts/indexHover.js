var docsScrolling = document.getElementById('hoverDocs');

function showDocsScrolling(){
    docsScrolling.style.opacity='0.8';
    docsScrolling.style.visibility='visible';
    docsScrolling.style.transform= 'translateY(-1vh)';
}
function hideDocsScrolling(){
    docsScrolling.style.opacity='0';
    docsScrolling.style.visibility='hidden';
    docsScrolling.style.transform= 'translateY(0vh)';
}

document
    .getElementById('cardDocs')
    .addEventListener('mouseover',showDocsScrolling);
document
    .getElementById('cardDocs')
    .addEventListener('mouseout',hideDocsScrolling);




    

var pptScrolling = document.getElementById('hoverPpt');

function showPptScrolling(){
    pptScrolling.style.opacity='0.25';
    pptScrolling.style.visibility='visible';
    pptScrolling.style.transform= 'translateY(-5vh)';
}
function hidePptScrolling(){
    pptScrolling.style.opacity='0';
    pptScrolling.style.visibility='hidden';
    pptScrolling.style.transform= 'translateY(0vh)';
}
    
document
    .getElementById('cardPpt')
    .addEventListener('mouseover',showPptScrolling);
document
    .getElementById('cardPpt')
    .addEventListener('mouseout', hidePptScrolling);






var psdScrolling = document.getElementById('hoverPsd');

function showPsdScrolling(){
    psdScrolling.style.opacity='0.25';
    psdScrolling.style.visibility='visible';
    psdScrolling.style.transform= 'translateY(-5vh)';
}
function hidePsdScrolling(){
    psdScrolling.style.opacity='0';
    psdScrolling.style.visibility='hidden';
    psdScrolling.style.transform= 'translateY(0vh)';
}
        
document
    .getElementById('cardPsd')
    .addEventListener('mouseover',showPsdScrolling);
document
    .getElementById('cardPsd')
    .addEventListener('mouseout', hidePsdScrolling);
