function lockedProfile() {
    Array.from(document.querySelectorAll('.profile button'))
        .forEach(b => b.addEventListener('click', onToggle));


    function onToggle(ev) {
        const profile = ev.target.parentElement;
        const isActive = profile
            .querySelector('input[type="radio"][value="unlock"]').checked;
        console.log(isActive);
        const info = Array.from(profile.querySelectorAll('div'))
            .find(el => el.id.includes('HiddenFields'));

        if (isActive) {
            if (ev.target.textContent == 'Show more') {
                info.style.display = 'block';
                ev.target.textContent = 'Hide it'
            } else {
                info.style.display = '';
                ev.target.textContent = 'Show more'
            }
        }
        console.log(info);
    }
}