function solve() {
  let input = document.getElementById('text').value;
  let command = document.getElementById('naming-convention').value;

  if (command.includes('Camel Case')) {
    document.getElementById('result').textContent = input = toCamelCase(input);
    input = toCamelCase(input);
    function toCamelCase(str) {
      return str.split(' ').map(function (word, index) {
        if (index == 0) {
          return word.toLowerCase();
        }
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      }).join('');
    }
  } else if (command.includes('Pascal Case')) {
    document.getElementById('result').textContent = input = toPascalCase(input);
    input = toPascalCase(input);
    function toPascalCase(str) {
      return str.split(' ').map(function (word) {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      }).join('');
    }
  } else {
    document.getElementById('result').textContent = 'Error!';
  }
}
