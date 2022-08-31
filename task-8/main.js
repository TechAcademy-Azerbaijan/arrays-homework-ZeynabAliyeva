const { count } = require('console');
const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
  
    let n = result.input.split(" ")
    let max = n[0]
    let max_index = 0;

    for(let i=0; i<n.length; i++){
        const element = n[i];
        if(element>=max){
            max = element
            max_index = i
        }
    }
    [n[n.length - 1] , n[max_index]] = [max , n[n.length -1]]
    console.log(n.join(" "));
});
