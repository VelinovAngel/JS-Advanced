function toggle() {
    const state = document.getElementsByClassName('button')[0];
    let element = document.getElementById('extra');
    if (state.innerHTML == 'More') {
        state.innerHTML = 'Less';
        element.style.display = 'block';
    } else {
        state.innerHTML = 'More';
        element.style.display = 'none';
    }

}