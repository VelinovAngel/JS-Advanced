function addItem() {
    const newElement = document.getElementById('newItemText');
    const items = document.getElementById('items');
    const liElement = document.createElement('li');
    liElement.textContent = newElement.value;
    items.appendChild(liElement);
    // newElement.value = '';
}