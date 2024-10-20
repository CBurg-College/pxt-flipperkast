//% color="#00CC00" icon="\u2B88"
//% block="Pinball"
//% block.loc.nl="Flipperkast"
namespace CBurgPinball {

    export enum Gate {
        //% block="gate 1"
        //% block.loc.nl="poortje 1"
        Gate1,
        //% block="gate 2"
        //% block.loc.nl="poortje 2"
        Gate2
    }

    export enum LedId {
        //% block="led 1"
        //% block.loc.nl="led 1"
        Led1,
        //% block="led 2"
        //% block.loc.nl="led 2"
        Led2,
        //% block="led 3"
        //% block.loc.nl="led 3"
        Led3
    }

    export enum ColorId {
        //% block="dark"
        //% block.loc.nl="donker"
        Off,
        //% block="red"
        //% block.loc.nl="rood"
        Red,
        //% block="yellow"
        //% block.loc.nl="geel"
        Yellow,
        //% block="green"
        //% block.loc.nl="groen"
        Green,
        //% block="light blue"
        //% block.loc.nl="lichtblauw"
        Cyan,
        //% block="blue"
        //% block.loc.nl="blauw"
        Blue,
        //% block="purple"
        //% block.loc.nl="paars"
        Magenta,
        //% block="white"
        //% block.loc.nl="wit"
        White
    }
    export enum MediaId {
        //% block="background"
        //% block.loc.nl="achtergrond"
        Background,
        //% block="video 1"
        //% block.loc.nl="video 1"
        Video1,
        //% block="video 2"
        //% block.loc.nl="video 2"
        Video2
    }

    //% block="color %ledid %state"
    //% block.loc.nl="kleur %ledid %state"
    export function switchled(ledid: LedId, colorid: ColorId) {
        // do not change media
        pins.digitalWritePin(DigitalPin.P19, 0)
        pins.digitalWritePin(DigitalPin.P20, 0)
        // choose the led
        if (ledid == LedId.Led1) {
            pins.digitalWritePin(DigitalPin.P12, 0);
            pins.digitalWritePin(DigitalPin.P13, 1);
        }
        else
        if (ledid == LedId.Led2) {
            pins.digitalWritePin(DigitalPin.P12, 1);
            pins.digitalWritePin(DigitalPin.P13, 0);
        }
        else
        if (ledid == LedId.Led3) {
            pins.digitalWritePin(DigitalPin.P12, 1);
            pins.digitalWritePin(DigitalPin.P13, 1);
        }
        // set the color
        if (colorid == ColorId.Off) {
            pins.digitalWritePin(DigitalPin.P14, 0);
            pins.digitalWritePin(DigitalPin.P15, 0);
            pins.digitalWritePin(DigitalPin.P16, 0);
        }
        if (colorid == ColorId.Red) {
            pins.digitalWritePin(DigitalPin.P14, 1);
            pins.digitalWritePin(DigitalPin.P15, 0);
            pins.digitalWritePin(DigitalPin.P16, 0);
        }
        if (colorid == ColorId.Yellow) {
            pins.digitalWritePin(DigitalPin.P14, 1);
            pins.digitalWritePin(DigitalPin.P15, 1);
            pins.digitalWritePin(DigitalPin.P16, 0);
        }
        if (colorid == ColorId.Green) {
            pins.digitalWritePin(DigitalPin.P14, 0);
            pins.digitalWritePin(DigitalPin.P15, 1);
            pins.digitalWritePin(DigitalPin.P16, 0);
        }
        if (colorid == ColorId.Cyan) {
            pins.digitalWritePin(DigitalPin.P14, 0);
            pins.digitalWritePin(DigitalPin.P15, 1);
            pins.digitalWritePin(DigitalPin.P16, 1);
        }
        if (colorid == ColorId.Blue) {
            pins.digitalWritePin(DigitalPin.P14, 0);
            pins.digitalWritePin(DigitalPin.P15, 0);
            pins.digitalWritePin(DigitalPin.P16, 1);
        }
        if (colorid == ColorId.Magenta) {
            pins.digitalWritePin(DigitalPin.P14, 1);
            pins.digitalWritePin(DigitalPin.P15, 0);
            pins.digitalWritePin(DigitalPin.P16, 1);
        }
        if (colorid == ColorId.White) {
            pins.digitalWritePin(DigitalPin.P14, 1);
            pins.digitalWritePin(DigitalPin.P15, 1);
            pins.digitalWritePin(DigitalPin.P16, 1);
        }
        // communicate to raspberry
        pins.digitalWritePin(DigitalPin.P0, 1);
        while (!pins.digitalReadPin(DigitalPin.P3));
        pins.digitalWritePin(DigitalPin.P0, 1);
    }

    //% block="show %mediaid"
    //% block.loc.nl="toon %mediaid"
    export function show( mediaid: MediaId) {
        // do not change rgb-leds
        pins.digitalWritePin(DigitalPin.P12, 0)
        pins.digitalWritePin(DigitalPin.P13, 0)
        // choose the medium
        if (mediaid == MediaId.Background) {
            pins.digitalWritePin(DigitalPin.P19, 1);
            pins.digitalWritePin(DigitalPin.P20, 1);
        }
        else
        if (mediaid == MediaId.Video1) {
            pins.digitalWritePin(DigitalPin.P19, 0);
            pins.digitalWritePin(DigitalPin.P20, 1);
        }
        else
        if (mediaid == MediaId.Video2) {
            pins.digitalWritePin(DigitalPin.P19, 1);
            pins.digitalWritePin(DigitalPin.P20, 0);
        }
        // communicate to raspberry
        pins.digitalWritePin(DigitalPin.P0, 1);
        while (!pins.digitalReadPin(DigitalPin.P3));
        pins.digitalWritePin(DigitalPin.P0, 1);
    }

    //% block="background"
    //% block.loc.nl="achtergrond"
    export function background(): MediaId {
        return MediaId.Background;
    }

    //% block="video 1"
    //% block.loc.nl="video 1"
    export function video1(): MediaId {
        return MediaId.Video1;
    }

    //% block="video 2"
    //% block="video 2"
    export function video2(): MediaId {
        return MediaId.Video2;
    }

    //% block="gate 1"
    //% block.loc.nl="poortje 1"
    export function gate1(): Gate {
        return Gate.Gate1;
    }

    //% block="gate 2"
    //% block.loc.nl="poortje 2"
    export function gate2(): Gate {
        return Gate.Gate2;
    }

    //% block="not thru a gate"
    //% block.loc.nl="niet door een poortje"
    export function notThruGate(): boolean {
        if ( pins.digitalReadPin( DigitalPin.P1) ||
             pins.digitalReadPin( DigitalPin.P2) )
            return false;
        return true;
    }

    //% block="thru gate 1"
    //% block.loc.nl="door poortje 1"
    export function thruGate1(): boolean {
        return (pins.digitalReadPin( DigitalPin.P1) == 1);
    }

    //% block="thru gate 2"
    //% block.loc.nl="door poortje 2"
    export function thruGate2(): boolean {
        return (pins.digitalReadPin( DigitalPin.P2) == 1);
    }

    //% block="on thru %gate"
    //% block.loc.nl="wanneer door %gate"
    export function onEvent( gate: Gate, handler: () => void) {
    }
}
