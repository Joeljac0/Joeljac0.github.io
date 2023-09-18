
const jokebutt = document.getElementById("jokebutton");

jokebutt.addEventListener("click", getJoke);

const p_joke = document.getElementById("p_joke")

function getJoke(e){
    //alert("Skemtare där!")

    fetch('https://v2.jokeapi.dev/joke/Dark,Spooky?type=single' , 
    {
        method:"GET", 

        headers: new Headers({
            Accept: "application/json"}) 
    }
    )
    .then(res =>res.json())
    .then(response =>{
        let joke = response.joke
        p_joke.innerHTML = joke
    })
    .catch(error => console.log(error))
}