document.addEventListener("DOMContentLoaded", function() {
    const boxes = document.querySelectorAll('.box1, .box2, .box3, .box4');
    boxes.forEach(box => {
        const height = box.clientHeight;
        box.style.width = height + 'px';
    });
});
