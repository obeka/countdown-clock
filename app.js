const form = document.querySelector('form');
const spanH = document.querySelector('#spanH');
const spanM = document.querySelector('#spanM');
const spanS = document.querySelector('#spanS');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (!form.classList.contains('prevent')) {
        form.classList.add('prevent');
        let hourVal = form.hour.value;
        let minVal = form.minute.value;
        let secVal = form.second.value;
        let hourStamp = hourVal * 60 * 60 * 1000;
        let minStamp = minVal * 60 * 1000;
        let secStamp = secVal * 1000;
        sum = hourStamp + minStamp + secStamp;

        spanH.classList.add('shadow');
        spanM.classList.add('shadow');
        spanS.classList.add('shadow');

        const x = setInterval(() => {
            sum -= 1000;
            let sumStr = (new Date(sum));
            spanS.textContent = sumStr.getSeconds();
            spanM.textContent = sumStr.getMinutes();
            spanH.textContent = (sumStr.getHours() - 1);
            if (sum <= 0) {
                clearInterval(x);
                new Audio("sounds/snare.mp3").play()
                form.classList.remove('prevent');
                spanH.classList.remove('shadow');
                spanM.classList.remove('shadow');
                spanS.classList.remove('shadow');

            }
        }, 1000);
    }

    form.reset();
});