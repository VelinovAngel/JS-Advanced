function deleteByEmail() {
    let elements = Array.from(document.querySelector('tbody').children);
    let input = document.querySelector('input[name="email"]');

    for (const item of elements) {
        if (item.children[1].textContent == input.value) {
            item.remove(item);
            document.getElementById('result').textContent = 'Deleted.';
        }else{
            document.getElementById('result').textContent = 'Not found.';
        }
    }
}