function wordsUppercase(text) {
    output = text.match(/\w+/gim)
         .map(x => x.toUpperCase());
   
   console.log(output.join(", "));
 }

 wordsUppercase('Hi, how are you?');