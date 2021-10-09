function addItem() {
    const inputText = document.getElementById('newItemText');
    const inputValue = document.getElementById('newItemValue');
    const selectMenu = document.getElementById('menu');

    // console.log(inputText);
    // console.log(inputValue);
    const option = document.createElement('option');
    selectMenu.appendChild(option);
    option.textContent = inputText.value;
    option.value = inputValue.value;
    inputText.value = '';
    inputValue.value = '';
}