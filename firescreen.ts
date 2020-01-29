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
        //% blockId="clearScreen" block="%screen|clear OLED" 
        //% weight=90
        //% parts="firescreen"
        clearScreen()
        {
        }

        /* Update the OLED from the buffer */
        //% blockId="updateScreen" block="%screen|update OLED" 
        //% weight=80
        //% parts="firescreen"
        updateScreen()
        {
        }

       /**
         * show text on OLED
         * @param x x value: eg: 0
         * @param y y value: eg: 0
         * @param s text to show: eg: '4tronix'
         * @param color text color: eg: 1
         */
        //% blockId="showText" block="%screen|show text at x %x|y %y|text %s|color %color"
        //% weight=70
        //% parts="firescreen"
        //% inlineInputMode=inline
        showText(x: number, y: number, s: string, color: number)
        {
        }



    }

    /**
     * Create a new OLED
     * @param addr is i2c address; eg: 60
     */
    //% blockId="newScreen" block="create 10 OLED at address %addr"
    //% weight=100
    //% blockSetVariable=screen
    //% parts="firescreen"
    export function newScreen(addr: number): Screen
    {
        let screen = new Screen();
        return screen;
    }


}
