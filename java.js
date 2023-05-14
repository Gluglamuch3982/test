// // // let z = prompt("введите число 1")

// // // function square(side){
// // //     return side * z
// // // }

// // // let y = prompt("введите число 2")

// // // let x = square(y)

// // // alert(x)

// // // function square(side){
// // //     return side * 4
// // // }
// // // let y = prompt("введите число")

// // // let x = square(y)

// // // alert(`Периметр квадрата равна ${x}`)

// // // function squareP(side){
// // //     return side * side
// // // }

// // // let b = prompt("введите число")

// // // let a = squareP(b)

// // // alert(`Площадь квадрата равна ${a}`)

// // // let pon = 2

// // // function power(){
// // //     let da = -1
// // //     da = 2
// // //     return da
// // // }

// // // da = 1

// // // alert(da)

// // // alert(power())

// // // function cube(x){
// // //     function square(){
// // //         return x * x
// // //     }
// // //     return square() * x
// // // }

// // // let s = cube()
// // // alert(s)

// // // let fact = prompt("курс доллара")

// // // function factorial(number){
// // //     let result = number;
// // //     if(number === 0 || number === 1)
// // //     return 1;

// // //     while(number > 1){
// // //         number --;
// // //         result **= number
// // //     }
// // //     return result;
// // // }

// // // let res = factorial(fact)
// // // alert(`${fact}$= ${res}р`)

// // let fact = prompt("курс доллара")

// // function factorialRecursion(x){

// //     if (x <= 0){
// //         return 1;
// //     }

// //     else{
// //         return x * factorialRecursion(x - 1)
// //     }
// // }
// // alert(`factorial ${fact} is ${factorialRecursion(fact)}`)

// function mnogo(n){
//     let sum = 0
//     for(let i = 0; i <= n; i++){
//         sum+=i
//     }
//     return sum
// }
// alert(mnogo())




// let fibonacci = function fib(n){
//     if(n <= 1){
//         return 1;   
//     }
//     return fib(n - 1) + fib(n - 2)
// }

// alert(`${fibonacci(prompt("chislo:\n"))}`)


// function memfib(n,value = []){
//     console.log(n)
//     if(value[n] != null){
//         return value[n];
//     }

//     let result

//     if(n < 2){
//         result = 1;
//     }
//     else{
//         result = memfib(n - 1, value) + memfib(n - 2, value);
//     }

//     value[n] = result;
//     console.log(`result = ${result}`)
//     return result;
// }

// alert(memfib(prompt("chislo: \n")))

function print() {
    let name =
    document.getElementById('name').value;
    document.getElementById('message').innerHTML = `Ваше имя: ${name}`;
    return false;
}