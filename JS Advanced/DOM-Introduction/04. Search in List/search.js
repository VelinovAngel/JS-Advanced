function search() {
   let elements = document.getElementById('towns').children;
   let search = document.getElementById('searchText').value;
   let count = 0;
   for (const element of Array.from(elements)) {
      if(element.textContent.includes(search)){
         element.style.fontWeight = 'bold';
         element.style.textDecoration  = 'underline';
         count++;
      }
   }
   document.getElementById('result').innerHTML = `${count} matches found`;
}
