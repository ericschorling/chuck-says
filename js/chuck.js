"use strict"

const url = `https://api.chucknorris.io/jokes/random?category=`

const clickMe = document.getElementById("refreshQuote")
const quoteOut = document.getElementById('chuckSays')
const chuckImg = document.getElementById('chuckImg')
const formButton = document.querySelector("#submitForm")
const formInput = document.querySelector("#categoryInput")
const animalOutput = document.querySelector('#animalquote')
let defaultCategory = 'dev';

const dataFromAPI=()=>{
    return fetch(url + "dev")
    .then (response => response.json())
    .then(data => data)
};
const getQuote = (category)=>{
    //console.log(category)
    get(url + category)
    .then (response=> {
        console.log(url+category)
        return response.value
    })

};
clickMe.addEventListener('click', () => {
    get(url + "dev").then(response => {
    quoteOut.innerHTML = response.value
    chuckImg.src = response.icon_url })
});

formButton.addEventListener('click',e=>{
    e.preventDefault();
    animalOutput.innerHTML = getQuote(formInput.value)
    console.log(getQuote(formInput.value))
});