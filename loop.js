const readline = require('readline')
const ip = readline.createInterface({
   input: process.stdin,
   output:process.stdout
})
var userInput;
ip.on('line', (data) => {
    userInput = Number(data)
})

function MultiNine(n){
    lst = []
    for(i = 1;i <= n;i++){
       lst.push(9*i)
    }
    console.log(...lst)
}
ip.on('close',()=>{
    MultiNine(userInput)
})
