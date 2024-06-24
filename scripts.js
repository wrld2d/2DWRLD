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


/* Фото */
document.getElementById("btn1").addEventListener("click", function() {
    document.getElementById("сontent-the-photos").style.display = "block";
    document.getElementById("сontent-the-photos2").style.display = "none";
    document.getElementById("сontent-the-photos3").style.display = "none";
    document.getElementById("сontent-the-photos4").style.display = "none";
});

document.getElementById("btn2").addEventListener("click", function() {
    document.getElementById("сontent-the-photos").style.display = "none";
    document.getElementById("сontent-the-photos2").style.display = "block";
    document.getElementById("сontent-the-photos3").style.display = "none";
    document.getElementById("сontent-the-photos4").style.display = "none";
});

document.getElementById("btn3").addEventListener("click", function() {
    document.getElementById("сontent-the-photos").style.display = "none";
    document.getElementById("сontent-the-photos2").style.display = "none";
    document.getElementById("сontent-the-photos3").style.display = "block";
    document.getElementById("сontent-the-photos4").style.display = "none";
});

document.getElementById("btn4").addEventListener("click", function() {
    document.getElementById("сontent-the-photos").style.display = "none";
    document.getElementById("сontent-the-photos2").style.display = "none";
    document.getElementById("сontent-the-photos3").style.display = "none";
    document.getElementById("сontent-the-photos4").style.display = "block";
});

/* Видео */

document.getElementById("button-videos").addEventListener("click", function() {
    document.getElementById("сontent-the-videos").style.display = "block";
    document.getElementById("сontent-the-videos2").style.display = "none";
});

document.getElementById("button-videos2").addEventListener("click", function() {
    document.getElementById("сontent-the-videos").style.display = "none";
    document.getElementById("сontent-the-videos2").style.display = "block";
});

/* Игры */

document.getElementById("ero-btn").addEventListener("click", function() {
    document.getElementById("сontent-the-ero").style.display = "block";
    document.getElementById("сontent-the-ero2").style.display = "none";
    document.getElementById("сontent-the-ero3").style.display = "none";
    document.getElementById("сontent-the-ero4").style.display = "none";
});

document.getElementById("ero-btn2").addEventListener("click", function() {
    document.getElementById("сontent-the-ero").style.display = "none";
    document.getElementById("сontent-the-ero2").style.display = "block";
    document.getElementById("сontent-the-ero3").style.display = "none";
    document.getElementById("сontent-the-ero4").style.display = "none";
});

document.getElementById("ero-btn3").addEventListener("click", function() {
    document.getElementById("сontent-the-ero").style.display = "none";
    document.getElementById("сontent-the-ero2").style.display = "none";
    document.getElementById("сontent-the-ero3").style.display = "block";
    document.getElementById("сontent-the-ero4").style.display = "none";
});

document.getElementById("ero-btn4").addEventListener("click", function() {
    document.getElementById("сontent-the-ero").style.display = "none";
    document.getElementById("сontent-the-ero2").style.display = "none";
    document.getElementById("сontent-the-ero3").style.display = "none";
    document.getElementById("сontent-the-ero4").style.display = "block";
});
