const loadCountry =(region)=>{
   const  URL=`https://restcountries.com/v3.1/region/${region}`
    fetch(URL)
    .then(res =>res.json())
    .then(data=>showCountry(data));
}

const showCountry = data=>{
    const  countryContainer = document.getElementById('country-container');
    countryContainer.innerHTML='';
    data.forEach(country=>{
        console.log(country);
        const div = document.createElement('div');
        div.classList.add('card-body');
        div.innerHTML=`
    <figure><img src="${country.flags.png}"/></figure>
        <h2 class="card-title">Name: ${country.name.common}</h2>
        <p>Subregion: ${country.subregion}</p>
        <div class="card-actions">
        <button class="btn btn-primary">Show Details</button>
      </div>
        `
        countryContainer.appendChild(div);
    })
}

const countrySelect =document.getElementById('country-select');
countrySelect.addEventListener('change',function(event){
// console.log(event.target.value);
loadCountry(event.target.value)
})

// -------------------by language-----------------------------------

const loadCountryByLanguage=(lan)=>{
    console.log(lan);
    const URL2=`https://restcountries.com/v3.1/lang/${lan}`
    fetch(URL2).then(res=>res.json()).then(data=>showCountry(data));

}

const languageSelect =document.getElementById('language');
languageSelect.addEventListener('change',function(e){
 
    loadCountryByLanguage(e.target.value);
})


