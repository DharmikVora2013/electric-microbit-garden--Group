let RH = 0
let temp = 0
OLED.init(128, 64)
basic.showIcon(IconNames.Rabbit)
basic.forever(function () {
    temp = Environment.dht11value(Environment.DHT11Type.DHT11_temperature_C, DigitalPin.P1)
    basic.pause(5000)
    RH = Environment.dht11value(Environment.DHT11Type.DHT11_humidity, DigitalPin.P1)
    basic.pause(5000)
    OLED.clear()
    OLED.writeStringNewLine("Temp:" + temp)
    OLED.writeStringNewLine("RH:" + RH)
})
