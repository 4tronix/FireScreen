/* Makecode Helper Functions for 4tronix OLED Addons */

/**
 * Custom blocks
 */
//% weight=50 color=#e7660b icon="\uf1da"
namespace firescreen
{
    /* create the character generator */
    let chGen: number[] = [];
    chGen[0] = 0x0022d422;
    chGen[1] = 0x0022d422;
    chGen[2] = 0x0022d422;
    chGen[3] = 0x0022d422;
    chGen[4] = 0x0022d422;
    chGen[5] = 0x0022d422;
    chGen[6] = 0x0022d422;
    chGen[7] = 0x0022d422;
    chGen[8] = 0x0022d422;
    chGen[9] = 0x0022d422;
    chGen[10] = 0x0022d422;
    chGen[11] = 0x0022d422;
    chGen[12] = 0x0022d422;
    chGen[13] = 0x0022d422;
    chGen[14] = 0x0022d422;
    chGen[15] = 0x0022d422;
    chGen[16] = 0x0022d422;
    chGen[17] = 0x0022d422;
    chGen[18] = 0x0022d422;
    chGen[19] = 0x0022d422;
    chGen[20] = 0x0022d422;
    chGen[21] = 0x0022d422;
    chGen[22] = 0x0022d422;
    chGen[23] = 0x0022d422;
    chGen[24] = 0x0022d422;
    chGen[25] = 0x0022d422;
    chGen[26] = 0x0022d422;
    chGen[27] = 0x0022d422;
    chGen[28] = 0x0022d422;
    chGen[29] = 0x0022d422;
    chGen[30] = 0x0022d422;
    chGen[31] = 0x0022d422;
    chGen[32] = 0x00000000;
    chGen[33] = 0x000002e0;
    chGen[34] = 0x00018060;
    chGen[35] = 0x00afabea;
    chGen[36] = 0x00aed6ea;
    chGen[37] = 0x01991133;
    chGen[38] = 0x010556aa;
    chGen[39] = 0x00000060;
    chGen[40] = 0x000045c0;
    chGen[41] = 0x00003a20;
    chGen[42] = 0x00051140;
    chGen[43] = 0x00023880;
    chGen[44] = 0x00002200;
    chGen[45] = 0x00021080;
    chGen[46] = 0x00000100;
    chGen[47] = 0x00111110;
    chGen[48] = 0x0007462e;
    chGen[49] = 0x00087e40;
    chGen[50] = 0x000956b9;
    chGen[51] = 0x0005d629;
    chGen[52] = 0x008fa54c;
    chGen[53] = 0x009ad6b7;
    chGen[54] = 0x008ada88;
    chGen[55] = 0x00119531;
    chGen[56] = 0x00aad6aa;
    chGen[57] = 0x0022b6a2;
    chGen[58] = 0x00000140;
    chGen[59] = 0x00002a00;
    chGen[60] = 0x0008a880;
    chGen[61] = 0x00052940;
    chGen[62] = 0x00022a20;
    chGen[63] = 0x0022d422;
    chGen[64] = 0x00e4d62e;
    chGen[65] = 0x000f14be;
    chGen[66] = 0x000556bf;
    chGen[67] = 0x0008c62e;
    chGen[68] = 0x0007463f;
    chGen[69] = 0x0008d6bf;
    chGen[70] = 0x000094bf;
    chGen[71] = 0x00cac62e;
    chGen[72] = 0x000f909f;
    chGen[73] = 0x000047f1;
    chGen[74] = 0x0017c629;
    chGen[75] = 0x0008a89f;
    chGen[76] = 0x0008421f;
    chGen[77] = 0x01f1105f;
    chGen[78] = 0x01f4105f;
    chGen[79] = 0x0007462e;
    chGen[80] = 0x000114bf;
    chGen[81] = 0x000b6526;
    chGen[82] = 0x010514bf;
    chGen[83] = 0x0004d6b2;
    chGen[84] = 0x0010fc21;
    chGen[85] = 0x0007c20f;
    chGen[86] = 0x00744107;
    chGen[87] = 0x01f4111f;
    chGen[88] = 0x000d909b;
    chGen[89] = 0x00117041;
    chGen[90] = 0x0008ceb9;
    chGen[91] = 0x0008c7e0;
    chGen[92] = 0x01041041;
    chGen[93] = 0x000fc620;
    chGen[94] = 0x00010440;
    chGen[95] = 0x01084210;
    chGen[96] = 0x00000820;
    chGen[97] = 0x010f4a4c;
    chGen[98] = 0x0004529f;
    chGen[99] = 0x00094a4c;
    chGen[100] = 0x000fd288;
    chGen[101] = 0x000956ae;
    chGen[102] = 0x000097c4;
    chGen[103] = 0x0007d6a2;
    chGen[104] = 0x000c109f;
    chGen[105] = 0x000003a0;
    chGen[106] = 0x0006c200;
    chGen[107] = 0x0008289f;
    chGen[108] = 0x000841e0;
    chGen[109] = 0x01e1105e;
    chGen[110] = 0x000e085e;
    chGen[111] = 0x00064a4c;
    chGen[112] = 0x0002295e;
    chGen[113] = 0x000f2944;
    chGen[114] = 0x0001085c;
    chGen[115] = 0x00012a90;
    chGen[116] = 0x010a51e0;
    chGen[117] = 0x010f420e;
    chGen[118] = 0x00644106;
    chGen[119] = 0x01e8221e;
    chGen[120] = 0x00093192;
    chGen[121] = 0x00222292;
    chGen[122] = 0x00095b52;
    chGen[123] = 0x0008fc80;
    chGen[124] = 0x000003e0;
    chGen[125] = 0x000013f1;
    chGen[126] = 0x00841080;
    chGen[127] = 0x0022d422;



    /* A single Oled */
    export class Screen
    {
        _address: number;
        _is128: boolean;
        _oBuffer: Buffer;
        _cBuf2: Buffer;
        _cBuf3: Buffer;
        _cBuf4: Buffer;

        /* Clears the OLED */
        //% blockId="clearScreen" block="%screen|clear OLED" 
        //% weight=90
        //% parts="firescreen"
        clearScreen()
        {
            this._oBuffer.fill(0);
            this._oBuffer[0] = 0x40;
            this.updateScreen();
        }

        /* Update the OLED from the buffer */
        //% blockId="updateScreen" block="%screen|update OLED" 
        //% weight=80
        //% parts="firescreen"
        updateScreen()
        {
            this.set_pos(0, 0, false);
            pins.i2cWriteBuffer(this._address, this._oBuffer);
        }

        cmd1(n1: number)
        {
            pins.i2cWriteNumber(this._address, n1 & 0xff, NumberFormat.UInt16BE);
        }

        cmd2(n1: number, n2: number)
        {
            this._cBuf3[0] = 0;
            this._cBuf3[1] = n1;
            this._cBuf3[2] = n2;
            pins.i2cWriteBuffer(this._address, this._cBuf3);
        }

        cmd3(n1: number, n2: number, n3: number)
        {
            this._cBuf4[0] = 0;
            this._cBuf4[1] = n1;
            this._cBuf4[2] = n2;
            this._cBuf4[3] = n3;
            pins.i2cWriteBuffer(this._address, this._cBuf4);
        }

        set_pos(col: number, page: number, zoom: boolean)
        {
            let scaler = zoom ? 2 : 1;
            this.cmd1(0xb0 | page)       // page number
            let c = col * scaler;
            this.cmd1(0x00 | (c % 16))   // lower start column address
            this.cmd1(0x10 | (c >> 4))   // upper start column address    
        }

       /**
         * show number on OLED
         * @param x x value: eg: 0
         * @param y y value: eg: 0
         * @param n number to print: eg: 100
         * @param inv inverse video: eg: false
         * @param zoom zoomed text: eg: false
         */
        //% blockId="showNumber" block="%screen|number %n| at x %x|y %y|inverse %inv|zoom %zoom"
        //% weight=70
        //% parts="firescreen"
        //% inlineInputMode=inline
        //% blockGap=8
        //% inv.shadow="toggleYesNo"
        //% zoom.shadow="toggleYesNo"
        showNumber(n: number, x: number, y: number, inv: boolean, zoom: boolean)
        {
            showText(convertToText(n), x, y, inv, zoom);
        }

       /**
         * show text on OLED
         * @param x x value: eg: 0
         * @param y y value: eg: 0
         * @param s text to show: eg: '4tronix'
         * @param color text color: eg: 1
         */
        //% blockId="showText" block="%screen|text %s|at x %x|y %y|inverse %inv|zoom %zoom"
        //% weight=70
        //% parts="firescreen"
        //% inlineInputMode=inline
        //% blockGap=8
        //% inv.shadow="toggleYesNo"
        //% zoom.shadow="toggleYesNo"
        showText(s: string, x: number, y: number, inv: boolean, zoom: boolean)
        {
            let col = 0;
            let p = 0;
            let ind = 0;
            let scaler = zoom ? 2 : 1;
            for (let n = 0; n < s.length; n++)
            {
                p = chGen[s.charCodeAt(n)];
                for (let i = 0; i < 5; i++)
                {
                    col = 0;
                    for (let j = 0; j < 5; j++)
                    {
                        if (p & (1 << (5 * i + j)))
                            col |= (1 << (j + 1));
                    }
                    ind = ((x + n) * 5 * scaler) + (y * 128 + i * scaler) + 1;
                    if (inv)
                        col = 255 - col;
                    this._oBuffer[ind] = col;
                    if (zoom)
                        this._oBuffer[ind + 1] = col;
                }
            }
            this.set_pos(x * 5, y, zoom);
            let ind0 = x * 5 * scaler + y * 128;
            let buf = this._oBuffer.slice(ind0, ind + 1);
            buf[0] = 0x40;
            pins.i2cWriteBuffer(this._address, buf);
        }

   }

    /**
     * Create a new OLED
     * @param addr is i2c address; eg: 60
     */
    //% blockId="newScreen" block="OLED 32 at address %addr"
    //% weight=100
    //% blockSetVariable=screen
    //% parts="firescreen"
    //% blockGap=20
    export function newScreen(addr: number): Screen
    {
        let screen = new Screen();
        screen._oBuffer = pins.createBuffer(1024);
        screen._cBuf2 = pins.createBuffer(2);
        screen._cBuf3 = pins.createBuffer(3);
        screen._cBuf4 = pins.createBuffer(4);
        screen._address = addr;
        screen._is128 = true;
        screen.cmd1(0xAE);          // DISPLAYOFF
        screen.cmd1(0xA4);          // DISPLAYALLON_RESUME
        screen.cmd2(0xD5, 0xF0);    // SETDISPLAYCLOCKDIV
        screen.cmd2(0xA8, 0x3F);    // SETMULTIPLEX
        screen.cmd2(0xD3, 0x00);    // SETDISPLAYOFFSET
        screen.cmd1(0 | 0x0);       // SETSTARTLINE
        screen.cmd2(0x8D, 0x14);    // CHARGEPUMP
        screen.cmd2(0x20, 0x00);    // MEMORYMODE
        screen.cmd3(0x21, 0, 127);  // COLUMNADDR
        screen.cmd3(0x22, 0, 63);   // PAGEADDR
        screen.cmd1(0xa0 | 0x1);    // SEGREMAP
        screen.cmd1(0xc8);          // COMSCANDEC
        screen.cmd2(0xDA, 0x12);    // SETCOMPINS
        screen.cmd2(0x81, 0xCF);    // SETCONTRAST
        screen.cmd2(0xd9, 0xF1);    // SETPRECHARGE
        screen.cmd2(0xDB, 0x40);    // SETVCOMDETECT
        screen.cmd1(0xA6);          // NORMALDISPLAY
        screen.cmd2(0xD6, 1);       // ZOOM
        screen.cmd1(0xAF) ;         // DISPLAYON
        screen.clearScreen();
        return screen;
    }


}
