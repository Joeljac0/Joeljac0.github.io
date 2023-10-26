function balls() {
    setTimeout(function () {
        document.getElementById("head").style.backgroundColor = "white";
        setTimeout(function () {
            document.getElementById("head").style.backgroundColor = "black";
            balls(); // Repeat the function
        }, 150);
    }, 150);
}

// Call the function to start the infinite repetition
balls();