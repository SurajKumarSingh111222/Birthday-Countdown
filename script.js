setInterval(() => {

    const result = document.getElementById("result");

    const currentTime = Date.now();

    // Birthday: 12 September 2027
    const birthdayTime = new Date(2027, 8, 12).getTime();

    let timer = birthdayTime - currentTime;

    const day = Math.floor(timer / (1000 * 60 * 60 * 24));
    timer %= 1000 * 60 * 60 * 24;

    const hour = Math.floor(timer / (1000 * 60 * 60));
    timer %= 1000 * 60 * 60;

    const minute = Math.floor(timer / (1000 * 60));
    timer %= 1000 * 60;

    const second = Math.floor(timer / 1000);

    result.textContent =
        `${day} Days ${hour} Hours ${minute} Minutes ${second} Seconds`;

}, 1000);