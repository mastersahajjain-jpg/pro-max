let temp = 0
let light2 = 0
input.onButtonPressed(Button.A, function () {
    temp = input.temperature()
    light2 = input.lightLevel()
    basic.showNumber(light2)
    basic.pause(100)
    basic.showNumber(temp)
    if (temp > 40 || light2 > 150) {
        basic.showIcon(IconNames.Yes)
    } else if (temp > 40 || light2 > 150) {
        basic.showString("F")
    } else if (temp > 40 || light2 > 150) {
        basic.showString("L")
    } else {
        basic.showIcon(IconNames.No)
    }
})
