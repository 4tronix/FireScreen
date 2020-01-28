/* Makecode Helper Functions for 4tronix OLED Addons */

/**
 * Custom blocks
 */
//% weight=50 color=#e7660b icon="\uf1da"
namespace oled4
{
    /* create the character generator */
    let chGen: number[] = [];



    /* A single Oled */
    export class Oled
    {

        /* Clears the OLED */
        //% blockId="clear_Oled" block="%oled|clear OLED" 
        //% weight=90
        //% parts="oled4"
        clearOled()
        {
        }

        /* Update the OLED from the buffer */
        //% blockId="update_Oled" block="%oled|update OLED" 
        //% weight=80
        //% parts="oled4"
        updateOled()
        {
        }

       /**
         * show text in OLED
         * @param x x value: eg: 0
         * @param y y value: eg: 0
         * @param s text to show: eg: '4tronix'
         * @param color text color: eg: 1
         */
        //% blockId="showText_Oled" block="%oled|show text at x %x|y %y|text %s|color %color"
        //% weight=70
        //% parts="oled4"
        showText(x: number, y: number, s: string, color: number = 1)
        {
        }



    }

    /**
     * Create a new OLED
     * @param addr is i2c address; eg: 60
     */
    //% blockId="oInit" block="init 07 OLED at addr %addr"
    //% weight=100
    //% blockSetVariable=oled
    //% parts="oled4"
    export function newOled(addr: number): Oled
    {
        let oled = new Oled();
        return oled;
    }


}
