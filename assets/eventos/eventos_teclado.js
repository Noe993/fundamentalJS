document.addEventListener('keydown',tablaKeyboard)

function callBack(evt){
    if(evt.keyCode===65){
        alert("you passed this key: 'a'");
        return;
    }else{
        console.log(evt.keyCode);
        console.log(String.fromCharCode(evt.which));
    }
}


function tablaKeyboard(evt){
    document.getElementById('eventKey').innerHTML= evt.key;
    document.getElementById('eventCode').innerHTML= evt.code;
    document.getElementById('eventKeycode').innerHTML= evt.keyCode;
    document.getElementById('eventWhich').innerHTML= evt.which;
    document.getElementById('eventCharcode').innerHTML= String.fromCharCode(evt.which);
// let evtCode = document.getElementById('eventCode');
// let evtKeycode = document.getElementById('eventKeycode');
// let evtWhich = document.getElementById('eventWhich');
// let evtChar= document.getElementById('eventCharcode');
//     console.log(evt.Key);
//     console.log(evt.Code);
//     console.log(evt.keyCode);
//     console.log(evt.Which);
//     console.log(String.fromCharCode(evt.which));
}
