function encodeAndDecodeMessages() {
    const send = Array.from(document.getElementById('main').children)[0];
    const received = Array.from(document.getElementById('main').children)[1];

    send.children[2].addEventListener('click', sendMessages);
    received.children[2].addEventListener('click', readMessage);
    console.log(received);

    function sendMessages(ev) {
        const text = send.children[1];
        let newString = '';
        for (let i = 0; i < text.value.length; i++) {
            newString += String.fromCharCode(text.value.charCodeAt(i) + 1);
        }

        received.children[1].value = newString;
        text.value = '';
    }

    function readMessage(ev) {
        const output = received.children[1];
        let newString = '';
        for (let i = 0; i < output.value.length; i++) {
            newString += String.fromCharCode(output.value.charCodeAt(i) - 1);
        }
        received.children[1].value = newString;
    }
}