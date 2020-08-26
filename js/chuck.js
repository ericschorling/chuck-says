"use strict"

const url = `https://api.chucknorris.io/jokes/random?category=`
const valueUrl = `https://api.chucknorris.io/jokes/categories`
const clickMe = document.getElementById("refreshQuote")
const quoteOut = document.getElementById('chuckSays')
const chuckImg = document.getElementById('chuckImg')
const formButton = document.querySelector("#submitForm")
const formInput = document.querySelector("#categoryInput")
const animalOutput = document.querySelector('#animalquote')
const modalOverlay = document.querySelector('.modal-overlay')
const modalClose = document.getElementById('closeModal')
const userInput = document.getElementById('userInput')
//let category = 'dev'
let defaultCategory = 'dev';
userInput.addEventListener('change', ()=>{
    
    userInput.classList.toggle('filled')
})


const dataFromAPI=()=>{
    return fetch(url + "dev")
    .then (response => response.json())
    .then(data => data)
};
const getQuote = (category)=>{
    console.log(url+category)
    get(url + category)
    .then (response => {
        return response.value})

};
clickMe.addEventListener('click', () => {
    get(url + "dev").then(response => {
    quoteOut.innerHTML = response.value
    chuckImg.src = response.icon_url })
});

//userInput.addEventListener('')

modalOverlay.addEventListener('click', () => modalOverlay.classList.toggle('open'))

modalClose.addEventListener('click', () => modalOverlay.classList.toggle('open'))



// formButton.addEventListener('click',e=>{
//     e.preventDefault();
    
// });

const displayDropdown = () => {
    get(valueUrl).then (result=>{
        const filterFunc =(cate)=>{
            if (cate !== 'explicit' && cate !== 'animal'){
                return cate
            }
        }
        console.log(result)
        const filteredArr = result.filter(filterFunc)
        filteredArr.map(category=>{
            const optionItem = document.createElement('option')           
            formInput.appendChild(optionItem);
            optionItem.id = category;
            optionItem.innerHTML = category;
            
        })
    })
}
const getChuckQuotes = document.getElementById('getChuckQuotes')


getChuckQuotes.addEventListener('submit', e => {
    e.preventDefault()
    get(url + formInput.value).then(result =>{
        quoteOut.innerHTML = result.value
        modalOverlay.classList.toggle('open')
    })

});

displayDropdown();

(function(){
    get(url+defaultCategory).then(result =>{
        quoteOut.innerHTML = result.value
    })
})()


