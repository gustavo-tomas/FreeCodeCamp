document.addEventListener('click', function(event){
    var obj = event.target.value;
    if(obj != undefined)
        document.getElementById('typedNumber').innerHTML = obj;
    console.log(obj);
});