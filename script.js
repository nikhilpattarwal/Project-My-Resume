var navMenuAnchorTags = document.querySelectorAll('.horizontal-list a');

for( var i=0; i<navMenuAnchorTags.length; i++){
    navMenuAnchorTags[i].addEventListener('click', function(event){
        event.preventDefault();
        var targetSectionId = this.textContent.trim().toLowerCase();

        var targetSection = document.getElementById(targetSectionId);

        var interval = setInterval(function(){
            var targetSectionCoordinates = targetSection.getBoundingClientRect();

            if(targetSectionCoordinates.top <=0){
                clearInterval(interval);
                return;
            }

            window.scrollBy(0,50);

        },20);

    });
}



var progressBar = document.querySelectorAll('.collection-of-skills > div');

var skillContainer = document.getElementById('skill-content');

window.addEventListener('scroll', checkScroll);
var animationDone = false;

function initializeBars(){
   for( let bar of progressBar){
    bar.style.width = '0%';
   }
}

initializeBars();

function fillBars() {
    var targetWidths = [80, 60, 75, 70, 70, 50, 85, 65, 55, 45, 70]; // Specify the target widths in percentage for each progress bar
  
    progressBar.forEach(function(bar, index) {
      let currentWidth = 0;
      let targetWidth = targetWidths[index];
      let interval = setInterval(function() {
        if (currentWidth >= targetWidth) {
          clearInterval(interval);
          return;
        }
        currentWidth++;
        bar.style.width = currentWidth + '%';
      }, 5);
    });
  }





function checkScroll(){
    var coordinates = skillContainer.getBoundingClientRect();

    if(!animationDone && coordinates.top<=window.innerHeight){
       
        animationDone=true;
        fillBars();
    }else if(coordinates.top>window.innerHeight){
        animationDone=false;
        initializeBars();
    }
}


