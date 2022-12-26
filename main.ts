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
            TPBot.setTravelSpeed(TPBot.DriveDirection.Forward, 20)
        } else {
            TPBot.stopCar()
        }
    } else if (name == "button") {
        if (value == 0) {
        	
        } else if (value == 1) {
        	
        } else if (value == 2) {
        	
        } else if (value == 3) {
        	
        } else {
        	
        }
    } else {
    	
    }
})
PlanetX_Display.oledClear()
PlanetX_Display.showUserText(1, "Hello!")
basic.forever(function () {
    if (true) {
    	
    }
})
