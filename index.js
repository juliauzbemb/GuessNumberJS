let counter = 0
let numberToGuess = Math.floor(Math.random() * 1000)
console.log('Загаданное число: ', numberToGuess)
while (counter < 7) {
    if (counter === 6) {
        alert("У вас осталась последняя попытка!")}
    let numberFromUser = prompt('Введите число от 0 до 999: ')
    console.log('Вы ввели: ', +numberFromUser)
    counter ++
    if (numberFromUser === 'quit') {
        break
    }
    if (isNaN(numberFromUser) || numberFromUser === '') {
        alert('Вы ввели не число')
    } else if (+numberFromUser > 999 || +numberFromUser < 0) {
        alert('Число не в диапазоне от 0 до 999')
    } else if (+numberFromUser === numberToGuess) {
        alert(`Вы угадали c попытки № ${counter}`)
        break
    } else if (+numberFromUser > numberToGuess) {
        alert('Вы не угадали. Слишком большое число')
    } else if (+numberFromUser < numberToGuess) {
        alert('Вы не угадали. Слишком маленькое число')
    } 
}