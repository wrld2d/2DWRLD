function openPopup(id) {
    closeAllPopups();
    document.getElementById(id).style.display = 'block';
}

function closePopup(id) {
    document.getElementById(id).style.display = 'none';
}

function openVideoPopup(id) {
    closeAllPopups();
    document.getElementById(id).style.display = 'block';
}

function closeAllPopups() {
    var popups = document.querySelectorAll('.popup');
    popups.forEach(function(popup) {
        popup.style.display = 'none';
    });
}

function backToMain() {
    closeAllPopups();
}

document.getElementById("btn1").addEventListener("click", function() {
    document.getElementById("сontent-the-photos").style.display = "block";
    document.getElementById("сontent-the-photos2").style.display = "none";
    document.getElementById("сontent-the-photos3").style.display = "none";
    document.getElementById("сontent-the-photos4").style.display = "none";
    document.getElementById("сontent-the-photos5").style.display = "none";
    document.getElementById("сontent-the-photos6").style.display = "none";
    document.getElementById("сontent-the-photos7").style.display = "none";
    document.getElementById("сontent-the-photos8").style.display = "none";
});

document.getElementById("btn2").addEventListener("click", function() {
    document.getElementById("сontent-the-photos").style.display = "none";
    document.getElementById("сontent-the-photos2").style.display = "block";
    document.getElementById("сontent-the-photos3").style.display = "none";
    document.getElementById("сontent-the-photos4").style.display = "none";
    document.getElementById("сontent-the-photos5").style.display = "none";
    document.getElementById("сontent-the-photos6").style.display = "none";
    document.getElementById("сontent-the-photos7").style.display = "none";
    document.getElementById("сontent-the-photos8").style.display = "none";
});

document.getElementById("btn3").addEventListener("click", function() {
    document.getElementById("сontent-the-photos").style.display = "none";
    document.getElementById("сontent-the-photos2").style.display = "none";
    document.getElementById("сontent-the-photos3").style.display = "block";
    document.getElementById("сontent-the-photos4").style.display = "none";
    document.getElementById("сontent-the-photos5").style.display = "none";
    document.getElementById("сontent-the-photos6").style.display = "none";
    document.getElementById("сontent-the-photos7").style.display = "none";
    document.getElementById("сontent-the-photos8").style.display = "none";
});

document.getElementById("btn4").addEventListener("click", function() {
    document.getElementById("сontent-the-photos").style.display = "none";
    document.getElementById("сontent-the-photos2").style.display = "none";
    document.getElementById("сontent-the-photos3").style.display = "none";
    document.getElementById("сontent-the-photos4").style.display = "block";
    document.getElementById("сontent-the-photos5").style.display = "none";
    document.getElementById("сontent-the-photos6").style.display = "none";
    document.getElementById("сontent-the-photos7").style.display = "none";
    document.getElementById("сontent-the-photos8").style.display = "none";
});

document.getElementById("btn5").addEventListener("click", function() {
    document.getElementById("сontent-the-photos").style.display = "none";
    document.getElementById("сontent-the-photos2").style.display = "none";
    document.getElementById("сontent-the-photos3").style.display = "none";
    document.getElementById("сontent-the-photos4").style.display = "none";
    document.getElementById("сontent-the-photos5").style.display = "block";
    document.getElementById("сontent-the-photos6").style.display = "none";
    document.getElementById("сontent-the-photos7").style.display = "none";
    document.getElementById("сontent-the-photos8").style.display = "none";
});

document.getElementById("btn6").addEventListener("click", function() {
    document.getElementById("сontent-the-photos").style.display = "none";
    document.getElementById("сontent-the-photos2").style.display = "none";
    document.getElementById("сontent-the-photos3").style.display = "none";
    document.getElementById("сontent-the-photos4").style.display = "none";
    document.getElementById("сontent-the-photos5").style.display = "none";
    document.getElementById("сontent-the-photos6").style.display = "block";
    document.getElementById("сontent-the-photos7").style.display = "none";
    document.getElementById("сontent-the-photos8").style.display = "none";
});

document.getElementById("btn7").addEventListener("click", function() {
    document.getElementById("сontent-the-photos").style.display = "none";
    document.getElementById("сontent-the-photos2").style.display = "none";
    document.getElementById("сontent-the-photos3").style.display = "none";
    document.getElementById("сontent-the-photos4").style.display = "none";
    document.getElementById("сontent-the-photos5").style.display = "none";
    document.getElementById("сontent-the-photos6").style.display = "none";
    document.getElementById("сontent-the-photos7").style.display = "block";
    document.getElementById("сontent-the-photos8").style.display = "none";
});

document.getElementById("btn8").addEventListener("click", function() {
    document.getElementById("сontent-the-photos").style.display = "none";
    document.getElementById("сontent-the-photos2").style.display = "none";
    document.getElementById("сontent-the-photos3").style.display = "none";
    document.getElementById("сontent-the-photos4").style.display = "none";
    document.getElementById("сontent-the-photos5").style.display = "none";
    document.getElementById("сontent-the-photos6").style.display = "none";
    document.getElementById("сontent-the-photos7").style.display = "none";
    document.getElementById("сontent-the-photos8").style.display = "block";
});