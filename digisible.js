function isDigisible(n) {
    let digits = n.toString().split('').map(Number);
    let result = true;
    digits.forEach(digit => {
        if (n % digit !== 0) {
            result = false;
        }
    }
    );
    return result;
}