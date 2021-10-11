function notify(message) {
  const resultDiv = document.getElementById('notification');
  resultDiv.style.display = 'block';
  resultDiv.textContent = message;

  resultDiv.addEventListener('click', onClick);

  function onClick(ev){
    resultDiv.style.display = 'none';
  }
}