const target = document.getElementById('target');
let yes = document.getElementById('yes');

yes.addEventListener('click', () => {
    alert("I Love You too, Monica :)");
});

function moveTarget() {
    const maxWidth = 400;
    const maxHeight = 400;

    const randomX = Math.floor(Math.random() * maxWidth);
    const randomY = Math.floor(Math.random() * maxHeight);
    
    target.style.left = randomX + 'px';
    target.style.top = randomY + 'px';
}

target.addEventListener('mouseenter', function() {
    moveTarget();
});

function moveTarget() {
    const maxWidth = 400;
    const maxHeight = 400;
    
    const elementWidth = target.offsetWidth;
    const elementHeight = target.offsetHeight;

    const randomX = Math.floor(Math.random() * (maxWidth - elementWidth));
    const randomY = Math.floor(Math.random() * (maxHeight - elementHeight));
    
    target.style.left = randomX + 'px';
    target.style.top = randomY + 'px';
}
