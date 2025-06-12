function contar(n) {
    for (let index = 0; index < n; index++) {
        console.log(index);
        
    }
}
let startTime = console.time('duracion-del-algoritmo');
contar(5);
let finalTime = console.timeEnd('duracion-del-algoritmo');
let totalTime = finalTime - startTime;
