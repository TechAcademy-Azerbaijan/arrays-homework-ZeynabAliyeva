const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
  
    let n = result.input.split(" ")
    let max = parseInt(n[0])
    let index = 0;

    for(let i=0; i<n.length; i++){
         if(n[i]>max){
         max=parseInt(n[i])
         index=i;
         }
    }
       console.log(`${max}\n${index+1}`);
});
