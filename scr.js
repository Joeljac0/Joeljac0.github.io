document.getElementById("imgClickAndChange").src = "cat.jpg"

let x = 1

function changeImage() {    
    switch (x) {
        case 1:
            document.getElementById("imgClickAndChange").src = "image.png"
            x = 2
            break
        case 2:
            document.getElementById("imgClickAndChange").src = "joool.jpg"
            x = 3
            break
        case 3: 
            document.getElementById("imgClickAndChange").src = "win.jpg"
            x = 4
            break
        case 4:     
            document.getElementById("imgClickAndChange").src = "cat.jpg"
            x = 1
            break
    }  
}

/*function balls() {
    setTimeout(function () {
        document.getElementById("body").style.backgroundColor = "white"
        setTimeout(function () {
            document.getElementById("body").style.backgroundColor = "black"
            balls() // Repeat the function
        }, 1000)
    }, 1000)
}

// Call the function to start the infinite repetition
balls()*/

document.getElementById("yes").innerText = ""

let t = 1
let b = 1

function balls() {
    document.getElementById("body").style.backgroundColor = "white"
    document.getElementById("body").style.backgroundColor = "black"
}

function Normal() {
    if (t == 1){
        document.getElementById("yes").innerText = "CLICK PICTURE!!"
        //setInterval(balls(), 1000)
       
        t = 2
    }
    else if (t == 2){
        b = 2
        document.getElementById("yes").innerText = ""
        document.getElementById("body").style.backgroundColor = "purple"
        
        t = 1

    }
}