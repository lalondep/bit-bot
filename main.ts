function rainbowLEDs () {
    slowerTime = input.runningTime() / 500
    TPBot.headlightRGB(Math.abs(Math.sin(slowerTime) * 256), Math.abs(Math.sin(slowerTime + 2) * 256), Math.abs(Math.sin(slowerTime + 4) * 256))
}
radio.onReceivedValue(function (name, value) {
    PlanetX_Display.showUserText(1, "" + name + ":" + value)
    if (name == "directio") {
        if (value == 0) {
            TPBot.stopCar()
        } else if (value == 1) {
            TPBot.setTravelSpeed(TPBot.DriveDirection.Right, 20)
        } else if (value == 2) {
            TPBot.setTravelSpeed(TPBot.DriveDirection.Left, 20)
        } else if (value == 3) {
            TPBot.setTravelSpeed(TPBot.DriveDirection.Backward, 50)
        } else if (value == 4) {
            TPBot.setTravelSpeed(TPBot.DriveDirection.Forward, 50)
        } else {
            TPBot.stopCar()
        }
    } else if (name == "button") {
        if (value == 0) {
        	
        } else if (value == 1) {
            music.playMelody("C5 C C5 C C5 C C5 C ", 141)
        } else if (value == 2) {
        	
        } else if (value == 3) {
        	
        } else {
        	
        }
    } else {
    	
    }
})
let slowerTime = 0
PlanetX_Display.oledClear()
PlanetX_Display.showUserText(1, "Hello!")
basic.forever(function () {
    if (TPBot.sonarJudge(TPBot.Sonarjudge.Less, 5)) {
        TPBot.stopCar()
        basic.showLeds(`
            . # . # .
            . # . # .
            . . . . .
            . # # # .
            # . . . #
            `)
        TPBot.headlightColor(0xff0000)
    } else {
        rainbowLEDs()
    }
})
basic.forever(function () {
    basic.showLeds(`
        . # . # .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `)
})
