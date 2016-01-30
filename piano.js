var hammer1 = new Howl({
    urls: ["[HammerPerx] 03.wav"]
})

var hammer2 = new Howl({
    urls: ["[HammerPerx] 07.wav"]
})

var goat = new Howl({
    urls: ["[man-goat]01.wav"]
})

$(document).ready( function () {
    $("button").click( function (e) {
        switch (e.target.id) {
            case 'button1':
                hammer1.play();
                break;
            case 'button2':
                hammer2.play();
                break;
            case 'button3':
                goat.play();
                break;
        }
    })
})