document.addEventListener('click', function(event){
    var obj = event.target.value;
    if(obj != undefined)
        document.getElementById('display').innerHTML = obj;
    console.log(obj);
});