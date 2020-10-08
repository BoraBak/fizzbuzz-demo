module.exports.calcFizzBuzz = function () {
    const fizzBuzz = n => {
        let result = ''
        for (let i = 1; i <= n; i++) {
            const multipleOfThree = i % 3 === 0
            const multipleOfFive = i % 5 === 0

            if (multipleOfThree && multipleOfFive) {
                result += 'Fizzbuzz'
            } else if (multipleOfThree) {
                result += 'Fizz'
            } else if (multipleOfFive) {
                result += 'Buzz'
            } else {
                result += i
            }
        }
        return result
    }
    return fizzBuzz;
}