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

function balls() {
    setTimeout(function () {
        document.getElementById("head").style.backgroundColor = "white";
        setTimeout(function () {
            document.getElementById("head").style.backgroundColor = "black";
            balls(); // Repeat the function
        }, 100);
    }, 100);
}

// Call the function to start the infinite repetition
balls();