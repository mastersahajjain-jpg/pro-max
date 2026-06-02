let temp = 0
let light2 = 0
bluetooth.onBluetoothConnected(function () {
    temp = input.temperature()
    light2 = input.lightLevel()
    basic.showNumber(light2)
    screen().fillRect(0, 0, 79, 59, 1)
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
input.onButtonPressed(Button.A, function () {
	
})
