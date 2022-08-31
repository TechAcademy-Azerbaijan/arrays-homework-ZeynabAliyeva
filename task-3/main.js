const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
  
   let n = result.input.split(" ")
   let arr = [];
   for(let i=0; i<n.length; i++){
    if(i % 2 == 0){
        arr.push(n[i])
    }
   }
   console.log(arr.join(" "))
});
