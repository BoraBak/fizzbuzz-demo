/**
 * Returns the numbers from 1 to n
 * and for multiples of ‘3’ print “Fizz” instead of the number
 * and for the multiples of ‘5’ print “Buzz”.
 * Reference https://en.wikipedia.org/wiki/Fizz_buzz
 * @returns {function(*): string} FizzBuzz output string
 */
module.exports.calcFizzBuzz = function () {
    return n => {
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
            if (i + 1 <= n) {
                result += ','
            }
        }
        return result
    };
}