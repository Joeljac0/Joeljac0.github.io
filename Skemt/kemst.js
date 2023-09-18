//Definierar klass


class JokeHandlerRequest {
    //skapar constructor som startas när man skapar ett objekt av klassen

    constructor(adress) {
        this.adress = adress;
    }
    
    //Skapar en method som de heter när man gör klasser, annars heter det function
    async getJoke(){

        let jokestring = "No jokeign"

        await fetch(
            //alert("Skemtare där!")
        
            this.adress, 
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
            .catch(error => console.log(error));
        
            return jokestring

    }//end of getjoke()

}//end of jokehandlerrequest

//kör programmet

//https://v2.jokeapi.dev/joke/Dark,Spooky?type=single

const jokebutton = document.getElementById("jokebutton")
jokebutton.addEventListener("click", getJoke)

function getJoke(e){
    //console.log(e.target.id)

    const t_adress = "https://v2.jokeapi.dev/joke/Dark,Spooky?type=single"

    let joke_objekt = new JokeHandlerRequest(t_adress)
    p_skemt.innerHTML = joke_objekt.getJoke()
}
