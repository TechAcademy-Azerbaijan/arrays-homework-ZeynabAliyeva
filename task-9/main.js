const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
  
    let n = result.input.split(" ")
    let arr = [];
    for(let i=0; i<n.length; i++){
        let element = n[i]
        arr.unshift(element)
    }
    console.log(arr.join(" "));
});
