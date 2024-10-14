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

    //% block="show %mediaid"
    //% block.loc.nl="toon %mediaid"
    export function show( mediaid: MediaId) {
        if (mediaid == MediaId.Background) {
            pins.digitalWritePin( DigitalPin.P10, 1);
            control.waitMicros( 100);
            pins.digitalWritePin( DigitalPin.P10, 0);
        }
        if (mediaid == MediaId.Video1) {
            pins.digitalWritePin( DigitalPin.P11, 1);
            control.waitMicros( 100);
            pins.digitalWritePin( DigitalPin.P11, 0);
        }
        if (mediaid == MediaId.Video2) {
            pins.digitalWritePin( DigitalPin.P12, 1);
            control.waitMicros( 100);
            pins.digitalWritePin( DigitalPin.P12, 0);
        }
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
        if ( gate == Gate.Gate1 ) {
            pins.digitalWritePin( DigitalPin.P11, 1);
            control.waitMicros( 100);
            pins.digitalWritePin( DigitalPin.P11, 0);
        }
        if ( gate == Gate.Gate2 ) {
            pins.digitalWritePin( DigitalPin.P12, 1);
            control.waitMicros( 100);
            pins.digitalWritePin( DigitalPin.P12, 0);
        }
    }
}
