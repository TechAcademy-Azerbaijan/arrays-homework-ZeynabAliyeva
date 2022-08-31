const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
  
    let n = result.input.split(" ")
    let max = parseInt(n[0]);
    let min = parseInt(n[0])
    for(let i=0; i<n.length; i++){
        if(max<n[i]){
            max=parseInt(n[i])
        }
        if(min>n[i]){
            min=parseInt(n[i])
        }
    }
    let sum = 0;
    for(let i=0; i<n.length; i++){
        const element = parseInt(n[i])
        if(element !== max && element !== min){
            sum+=element
        }
    }
    console.log(sum);
  
});
