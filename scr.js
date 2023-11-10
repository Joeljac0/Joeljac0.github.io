document.getElementById("imgClickAndChange").src = "cat.jpg";

let x = 1

function changeImage() {
    if (x == 1){
        document.getElementById("imgClickAndChange").src = "image.png";
        x = 2
    } 
    else if (x == 2){
    document.getElementById("imgClickAndChange").src = "joool.jpg";
    x = 3
    }
    else if (x == 3){
    document.getElementById("imgClickAndChange").src = "win.jpg";
    x = 4
    }
    else if (x == 4){
    document.getElementById("imgClickAndChange").src = "cat.jpg";
    x = 1
    }
}

/*function balls() {
    setTimeout(function () {
        document.getElementById("head").style.backgroundColor = "white";
        setTimeout(function () {
            document.getElementById("head").style.backgroundColor = "black";
            balls(); // Repeat the function
        }, 1000);
    }, 1000);
}

// Call the function to start the infinite repetition
balls();*/

document.getElementById("yes").innerText = ""

let t = 1
let b = 1

function Normal() {
    if (t == 1){
        b = 1
        document.getElementById("yes").innerText = "CLICK PICTURE!!"
        function balls() {
            setTimeout(function () {
                document.getElementById("head").style.backgroundColor = "white"
                setTimeout(function () {
                    document.getElementById("head").style.backgroundColor = "black"
                    balls() // Repeat the function
                }, 1000)
            }, 1000)
        }
        
        // Call the function to start the infinite repetition
        balls()

        t = 2
    }
    else if (t == 2){
        b = 2
        document.getElementById("yes").innerText = ""
        document.getElementById("head").style.backgroundColor = "purple"

        t = 1
    }
}