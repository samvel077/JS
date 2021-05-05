function clock() {
    var hour = document.getElementById('hour');
    var mins = document.getElementById('min');
    var sec = document.getElementById('sec');

    var h = new Date().getHours();
    var m = new Date().getMinutes();
    var s = new Date().getSeconds();

    hour.innerHTML = h;
    mins.innerHTML = m;
    sec.innerHTML = s;
}

var interval = setInterval(clock,1000);