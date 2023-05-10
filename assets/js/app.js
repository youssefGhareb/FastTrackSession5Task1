window.onload = function () {
    var array = document.getElementsByClassName("feature-number")

    for (var i = 0; i < array.length; i++) {
        array[i].classList.add("text-green");
        if (i == 0) {
            array[i].innerText = "120m"
        } if (i == 1) {
            array[i].innerText = "10,000"
        } else {
            array[i].innerText = "240"
        }
    }
}