/* Makecode Helper Functions for 4tronix OLED Addons */

/**
 * Custom blocks
 */
//% weight=50 color=#e7660b icon="\uf1da"
namespace firescreen
{
    /* create the character generator */
    let chGen: number[] = [];



    /* A single Oled */
    export class Screen
    {

        /* Clears the OLED */
        //% blockId="clear_Oled" block="%screen|clear OLED" 
        //% weight=90
        //% parts="firescreen"
        clearOled()
        {
        }

        /* Update the OLED from the buffer */
        //% blockId="update_Oled" block="%screen|update OLED" 
        //% weight=80
        //% parts="firescreen"
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
        //% blockId="showText_Oled" block="%screen|show text at x %x|y %y|text %s|color %color"
        //% weight=70
        //% parts="firescreen"
        showText(x: number, y: number, s: string, color: number = 1)
        {
        }



    }

    /**
     * Create a new OLED
     * @param addr is i2c address; eg: 60
     */
    //% blockId="oInit" block="init 09 OLED at addr %addr"
    //% weight=100
    //% blockSetVariable=screen
    //% parts="firescreen"
    export function newOled(addr: number): Screen
    {
        let screen = new Screen();
        return screen;
    }


}
