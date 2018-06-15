var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/baba1.png' || mySrc === 'images/baba3.png') {
      myImage.setAttribute ('src','images/baba2.png');
    } else {
      myImage.setAttribute ('src','images/baba3.png');
    }
}
