function create(words) {
  for (var i = 0; i < words.length; i++) {
     const div = document.createElement('div');
     const para = document.createElement('p');
     para.textContent = words[i];
     para.style.display = 'none'
     div.appendChild(para);
     div.addEventListener('click' , onClick);
     document.getElementById('content').appendChild(div);
  }

  function onClick(ev){
     ev.currentTarget.children[0].style.display = '';
  }
}