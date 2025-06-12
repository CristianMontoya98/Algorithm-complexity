const performance = require('perf_hooks')
function contar(n) {
    for (let index = 0; index < n; index++) {
        console.log(index);
        
    }
}
let startTime = performance.performance.now();
contar(5);
let finalTime = performance.performance.now();
let totalTime = finalTime - startTime;

console.log('El algoritmo ha durado: ', totalTime)