const searchBar = document.getElementById("search");
const searchButton = document.getElementById("ext");
const temperNum = document.getElementById("temp-num");
const cityName = document.getElementById("city-name");
const details = document.getElementById("weather-details");
const desch = document.getElementById("description-h");
const descv = document.getElementById("description-v");
const text = document.getElementById("weather-text");
let img = document.getElementById("cloud");
let back = document.querySelector("body");
searchButton.addEventListener("click",function(){
    let city = searchBar.value.trim();
const apiKey =  "c848766edc4a004a75ca3a1914a8aa14"
const apiUrl =  `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

fetch(apiUrl)
.then(response => {
    if(!response){
        throw new Error("Response Not Good");
    }
    return response.json();
})
.then(data => {
    console.log(data);
    updateUi(data);

})
.catch(error =>{
    console.error("fetch error:", error);

});
});
function updateUi(data){
    let weather = data.weather[0].main;
    if(weather ===  "Clear"){
    img.src = "https://img.icons8.com/?size=100&id=cWfpk9mCJWJm&format=png&color=000000";
     
    }else if(weather === "Clouds"){
        img.src ="https://img.icons8.com/?size=100&id=zIVmoh4T8wh7&format=png&color=000000";
        text.innerHTML = "Cloudy";
        
        
        
    }else if(weather === "Rain"){
        img.src ="https://img.icons8.com/?size=100&id=kKxyuLXD4w0n&format=png&color=000000";
       text.innerHTML = "Rainy";
       back.style.background = "linear-gradient(to bottom, #515c63 0%, #2e5174 100%)";
        
    }else if(weather ==="Snow"){
        img.src = "https://img.icons8.com/?size=100&id=cyZConbteZk9&format=png&color=000000";
        text.innerHTML = "Snowy";
    }else if(weather === "Thunderstorm"){
        img.src = "https://img.icons8.com/?size=100&id=6AAyqKfBlzoB&format=png&color=000000";
        text.innerHTML = "Thunderstorm";
    }
    cityName.innerHTML = (data.name + ", " + data.sys.country);
    temperNum.innerHTML =(Math.round(data.main.temp * 1.8) + 32 + "°");
    desch.innerHTML = (data.main.humidity + "%");
    descv.innerHTML = (Math.round(data.main.feels_like * 1.8) + 32 + "°");

}


