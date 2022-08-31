const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
  
    let n = result.input.split(" ")
    let min = parseInt(n[0]);
    let min_index = 0;

    for(let i=n.length - 1; i>=0; i--){
         const element = parseInt(n[i])
        if(element <= min){
            min = element
            min_index = i
        }
    }
    [n[0],n[min_index]] = [min,n[0]]
    console.log(n.join(" "));
    
});
