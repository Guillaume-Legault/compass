let degrees = 0
basic.forever(function () {
    degrees = input.compassHeading()
    if (input.compassHeading() < 45) {
        basic.showString("N")
    } else if (input.compassHeading() < 135) {
        basic.showString("E")
    } else if (input.compassHeading() < 225) {
        basic.showString("S")
    } else if (input.compassHeading() < 315) {
        basic.showString("W")
    } else {
        basic.showString("N")
    }
})
