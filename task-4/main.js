const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
  
    let n = result.input.split(" ")
    let arr = [];
    for(let i=0; i<n.length; i++){
        if(parseInt(n[i]) < parseInt(n[i+1])){
            arr.push(n[i+1])
        }  
    }
    console.log(arr.join(" "));
});
