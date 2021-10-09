function attachEventsListeners() {
    const ratio = {
        days: 1,
        hours: 24,
        minutes: 1440,
        seconds: 86400,
    }

    function convert(value, unit) {
        const inDays = value / ratio[unit];

        return {
            days: inDays,
            hours: inDays * ratio.hours,
            minutes: inDays * ratio.minutes,
            seconds: inDays * ratio.seconds,
        }
    }

    const daysInput = document.getElementById('days');
    const hoursInput = document.getElementById('hours');
    const minutesInput = document.getElementById('minutes');
    const secondsInput = document.getElementById('seconds');

    document.getElementById('daysBtn').addEventListener('click', onConvert);
    document.getElementById('hoursBtn').addEventListener('click', onConvert);
    document.getElementById('minutesBtn').addEventListener('click', onConvert);
    document.getElementById('secondsBtn').addEventListener('click', onConvert);

    function onConvert(ev) {
        const input = ev.target.parentElement
            .querySelector('input[type ="text"]');


        const result = convert(Number(input.value), input.id);
        daysInput.value = result.days;
        hoursInput.value = result.hours;
        minutesInput.value = result.minutes;
        secondsInput.value = result.seconds;
        console.log(result);
    }
}