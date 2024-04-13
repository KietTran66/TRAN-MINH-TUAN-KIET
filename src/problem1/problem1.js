//1
function factorial(n) {
    if (n === 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

console.log(factorial(5)); 

//2
function fibonacci(n) {
    if (n <= 1) {
        return n;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}


console.log(fibonacci(7)); 

//3
function sumArray(arr, n) {
    if (n <= 0) {
        return 0;
    } else {
        return sumArray(arr, n - 1) + arr[n - 1];
    }
}

// Sử dụng hàm
console.log(sumArray([1, 2, 3, 4, 5], 5)); // Output: 15