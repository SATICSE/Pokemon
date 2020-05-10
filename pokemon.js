document.body.style.border = "5px solid blue";
    var img = new Image();
    var div = document.getElementById('x');
    img.onload = function() {
      div.innerHTML += '<img src="'+img.src+'" />'; 
    };
    img.src = 'icons/pikachu.png';
