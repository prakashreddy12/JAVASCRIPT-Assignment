var text=document.getElementById("value");
function geoLocation(){
    if(window.navigator.geolocation){
        window.navigator.geolocation.getCurrentPosition(showposition);
    }
    else{
        text.innerHTML='not proper location';
    }
}
function showposition(position){
    text.innerHTML=`latitude: ${position.coords.latitude}<br> 
                longitude: ${position.coords.longitude}`;

}