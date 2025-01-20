var w,h;
function setupparkingmanager(){
    w = document.getElementById('parkingspace').offsetWidth;
    h = document.getElementById('parkingspace').offsetHeight;

    //Creating animation -- important part

    var anim = document.createElement('style');
        var rule1 = document.createTextNode('@-webkit-keyframes car-park {'+
            'from { transform: rotate(270deg) }'+
            '80% { transform: rotate(270deg) translate(0px,-'+w+'px) }'+
            '90% { transform: rotate(270deg) translate(0px,-'+w+'px) rotate(90deg) }'+
            'to { transform: rotate(270deg) translate(0px,-'+w+'px) rotate(90deg) translate(0px,-'+h*.25+'px)}'+'}');
        anim.appendChild(rule1);

        var rule2 = document.createTextNode('@-webkit-keyframes car-bottom {'+
            'from { transform: rotate(270deg) }'+
            '80% { transform: rotate(270deg) translate(0px,-'+w+'px) }'+
            '90% { transform: rotate(270deg) translate(0px,-'+w+'px) rotate(90deg) }'+
            'to { transform: rotate(270deg) translate(0px,-'+w+'px) rotate(90deg) translate(0px,'+h*.25+'px)}'+'}');
        anim.appendChild(rule2);
        var rule3 = document.createTextNode('@-webkit-keyframes car-exit-top {'+
            'from { transform: rotate(270deg) translate(0px,-'+w+'px) rotate(90deg) translate(0px,-'+h*.25+'px) }'+
            '80% { transform: rotate(270deg) translate(0px,-'+w+'px) rotate(90deg) translate(0px,-'+h*.25+'px) translate(0px,'+h*.25+'px) }'+
            '90% { transform: rotate(270deg) translate(0px,-'+w+'px) rotate(90deg) translate(0px,-'+h*.25+'px) translate(0px,'+h*.25+'px) rotate(90deg) }'+
            'to { transform: rotate(270deg) translate(0px,-'+w+'px) rotate(90deg) translate(0px,-'+h*.25+'px) translate(0px,'+h*.25+'px) rotate(90deg) translate(0px,-'+w+'px) }'+'}');
        anim.appendChild(rule3);
        var rule4 = document.createTextNode('@-webkit-keyframes car-exit-bottom {'+
            'from { transform: rotate(270deg) translate(0px,-'+w+'px) rotate(90deg) translate(0px,'+h*.25+'px) }'+
            '80% { transform: rotate(270deg) translate(0px,-'+w+'px) rotate(90deg) translate(0px,'+h*.25+'px) translate(0px,-'+h*.25+'px) }'+
            '90% { transform: rotate(270deg) translate(0px,-'+w+'px) rotate(90deg) translate(0px,'+h*.25+'px) translate(0px,-'+h*.25+'px) rotate(90deg) }'+
            'to { transform: rotate(270deg) translate(0px,-'+w+'px) rotate(90deg) translate(0px,'+h*.25+'px) translate(0px,-'+h*.25+'px) rotate(90deg) translate(0px,-'+w+'px) }'+'}');
        anim.appendChild(rule4);
        document.getElementById('parkingspace').appendChild(anim);
}

function carexit(slot){
    document.getElementById('slot'+(slot+1).toString()).style.background = 'rgb(27,118,19)';
    if(slot <= 4)
    document.getElementById('car'+(slot).toString()).style.animation = ' car-exit-top 2s both';
    else
    document.getElementById('car'+(slot).toString()).style.animation = ' car-exit-bottom 2s both';
    setTimeout(function(){document.getElementById('car'+(slot).toString()).remove()},2000)

}

function generatenewcar(slot){
    var space = document.getElementById('parkingspace');
    let img = document.createElement('img');
    img.src = 'car.png';
    img.className = 'new-car-origin';
    img.style.width = (w*.8) * .1 + 'px';
    img.id = 'car'+slot.toString();
    space.appendChild(img)
}

function carenter(slot){
    if(!document.getElementById('car'+(slot).toString())){
    generatenewcar(slot);
    document.getElementById('slot'+(slot+1).toString()).style.background = 'rgb(146,18,18)';
    if(slot !=4 && slot != 9)
    document.getElementById('car'+(slot).toString()).style.right = (-w+(w*.1)+(((5 - (slot+1)%5))*((w*.8)*.2))+((w*.8)*.05))+'px'
    else
    document.getElementById('car'+(slot).toString()).style.right = (-w+(w*.1)+((w*.8)*.05))+'px';
    if(slot <= 4)
    document.getElementById('car'+(slot).toString()).style.animation = ' car-park 2s both';
    else
    document.getElementById('car'+(slot).toString()).style.animation = ' car-bottom 2s both';
    }
    else{
        carexit(slot);
    }
}