//  write a bmi calculator

function bmi(weight, height) {
    return weight / (height * height)
}

console.log(bmi(69, 1.7));

// factorial

function factorial(n) {
    let result = 1;
    for (i = 1; i <= n; i++) {
        result *= i
    }
    return result
}

console.log(factorial(5));

// 