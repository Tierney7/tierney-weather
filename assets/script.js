var APIKey = "88a0c91c09104aee7dc546338ab658a0"
var button = document.querySelector('.button')
var inputValue = document.querySelector('.inputValue')
var name = document.querySelector('.name');
var desc = document.querySelector('.desc');
var temp = document.querySelector('.temp');
var far = document.querySelector('far');

far = temp + 273.15;


button.addEventListener('click',function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=88a0c91c09104aee7dc546338ab658a0')
    .then(response => response.json())
    .then(data => {
        console.log(data)
        var nameValue = data['name'];
        var tempValue = data['main']['temp'];
        var descValue = data['weather'][0]['description'];

        name.innerHTML = nameValue;
        temp.innerHTML = tempValue;
        desc.innerHTML = descValue;
    })

    .catch(err => alert("Wrong city name!"))
})