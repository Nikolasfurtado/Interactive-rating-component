function setnumber(id) {

    var ba = document.getElementById("user_rate");
    if (id == "1") {
        ba.innerHTML = "1";
    } else if (id == "2") {
        ba.innerHTML = "2";
    } else if (id == "3") {
        ba.innerHTML = "3";
    } else if (id == "4") {
        ba.innerHTML = "4";
    } else if (id == "5") {
        ba.innerHTML = "5";
    }
    return ba;
}

function showresult() {
    var fv = document.getElementById("firstscreen");
    var sv = document.getElementById("secondscreen");
    fv.style.display = 'none';
    sv.style.display = 'grid';

}