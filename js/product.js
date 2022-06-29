var index = 1;
changeImage = function() {
    var imgs = ["./img/pro-big-1.jpg", "./img/pro-big-2.jpg", "./img/pro-big-3.jpg", "./img/pro-big-4.jpg"];
    document.getElementById('d-block').src = imgs[index];
    index++;
    if(index == 3) {
        index = 0;
    }
}
setInterval(changeImage,3000);