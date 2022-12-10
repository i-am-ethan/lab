//位置情報取得

// const latitudeEl = document.getElementById('latitudeEl')
// const longitudeEl = document.getElementById('longitudeEl')
const getGeoBtn = document.getElementById('get-geo')
const ulEle = document.querySelector('.geolocationapi_inner_ul')


navigator.getGamepads ? console.log('This smartphone can acquire location information') : alert( "Your smartphone cannot get your current location." );
// success
function successFunc( position ){

  const date = new Date()

  const newLiEl = document.createElement('li')
  const newP = document.createElement('p')
  const timeEl = document.createElement('span')
  timeEl.textContent = `${date.getFullYear()}/${date.getMonth()+1}/${date.getDate()}_${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}__`

  const latitudeEl = document.createElement('span')
  latitudeEl.textContent = position.coords.latitude
  const longitudeEl = document.createElement('span')
  longitudeEl.textContent = position.coords.longitude

  newP.appendChild(timeEl)
  newP.appendChild(latitudeEl)
  newP.appendChild(longitudeEl)
  newLiEl.appendChild(newP)
  ulEle.appendChild(newLiEl)



  console.log( position.coords.latitude, position.coords.longitude);
}
// error
function errorFunc( error ){
  var errorMessage = {0: "An error of unknown cause occurred...." ,1: "Location acquisition was not allowed..." ,2: "Location information could not be obtained due to signal conditions, etc...." ,3: "It took too long to get location information and timed out...." ,} ;
  errorPosition.style.display = "block"
  console.log( errorMessage[error.code] ) ;
}
// option
var optionObj = {"enableHighAccuracy":false,"timeout":8000,"maximumAge":5000,};

// get position
getGeoBtn.addEventListener('click', ()=>{
  navigator.geolocation.getCurrentPosition(successFunc,errorFunc,optionObj);
})
