var nextButton = document.getElementById('next');
var previousButton = document.getElementById('prev');
var $progress = document.getElementById('progress');
var circles = document.querySelectorAll('.circle');

var currentlyActive = 1;

nextButton.addEventListener('click', handleClick);

function handleClick(event) {
    currentlyActive++;

    if (currentlyActive > circles.length) {
        currentlyActive = circles.length;
    }
    
    update();
}

previousButton.addEventListener('click', () => {
    currentlyActive--;

    if(currentlyActive < 1) {
        currentlyActive = 1;
    }

    update();
});

function update() {
    circles.forEach( (element, idx) => {
        if(idx < currentlyActive) {
            element.classList.add('active');
        } else {
            element.classList.remove('active');
        }
    })

    const actives = document.querySelectorAll('.active');

   $progress.style.width = ((actives.length - 1) / (circles.length - 1)) * 100 + '%';

   if(currentlyActive === 1) {
        previousButton.disabled = true;
   } else if (currentlyActive === circles.length) {
        nextButton.disabled = true;
   } else {
    previousButton.disabled = false;
    nextButton.disabled = false;
   }
}