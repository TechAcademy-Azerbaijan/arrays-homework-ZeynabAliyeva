const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
  
    let n = result.input.split(" ")
    let count = n.length;
    for(let i=0; i<n.length; i++){
        const element = parseInt(n[i])

        for(let j=i+1; j<n.length; j++){
            const next_element = parseInt(n[j])
            if(element===next_element){
                count--;
            }
        }
    }
        console.log(count);
});
