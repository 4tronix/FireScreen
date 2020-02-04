/* Makecode Helper Functions for 4tronix OLED Addons */

/**
 * Custom blocks
 */
//% weight=50 color=#e7660b icon="\uf1da"
namespace firescreen
{
    /* create the character generator */
    let font: Buffer
    font = hex`
    0000000000
    3E5B4F5B3E
    3E6B4F6B3E
    1C3E7C3E1C
    183C7E3C18
    1C577D571C
    1C5E7F5E1C
    00183C1800
    FFE7C3E7FF
    0018241800
    FFE7DBE7FF
    30483A060E
    2629792926
    407F050507
    407F05253F
    5A3CE73C5A
    7F3E1C1C08
    081C1C3E7F
    14227F2214
    5F5F005F5F
    06097F017F
    006689956A
    6060606060
    94A2FFA294
    08047E0408
    10207E2010
    08082A1C08
    081C2A0808
    1E10101010
    0C1E0C1E0C
    30383E3830
    060E3E0E06
    0000000000
    00005F0000
    0007000700
    147F147F14
    242A7F2A12
    2313086462
    3649562050
    0008070300
    001C224100
    0041221C00
    2A1C7F1C2A
    08083E0808
    0080703000
    0808080808
    0000606000
    2010080402
    3E5149453E
    00427F4000
    7249494946
    2141494D33
    1814127F10
    2745454539
    3C4A494931
    4121110907
    3649494936
    464949291E
    0000140000
    0040340000
    0008142241
    1414141414
    0041221408
    0201590906
    3E415D594E
    7C1211127C
    7F49494936
    3E41414122
    7F4141413E
    7F49494941
    7F09090901
    3E41415173
    7F0808087F
    00417F4100
    2040413F01
    7F08142241
    7F40404040
    7F021C027F
    7F0408107F
    3E4141413E
    7F09090906
    3E4151215E
    7F09192946
    2649494932
    03017F0103
    3F4040403F
    1F2040201F
    3F4038403F
    6314081463
    0304780403
    6159494D43
    007F414141
    0204081020
    004141417F
    0402010204
    4040404040
    0003070800
    2054547840
    7F28444438
    3844444428
    384444287F
    3854545418
    00087E0902
    18A4A49C78
    7F08040478
    00447D4000
    2040403D00
    7F10284400
    00417F4000
    7C04780478
    7C08040478
    3844444438
    FC18242418
    18242418FC
    7C08040408
    4854545424
    04043F4424
    3C4040207C
    1C2040201C
    3C4030403C
    4428102844
    4C9090907C
    4464544C44
    0008364100
    0000770000
    0041360800
    0201020402
    3C2623263C
    1EA1A16112
    3A4040207A
    3854545559
    2155557941
    2154547841
    2155547840
    2054557940
    0C1E527212
    3955555559
    3954545459
    3955545458
    0000457C41
    0002457D42
    0001457C40
    F0292429F0
    F0282528F0
    7C54554500
    2054547C54
    7C0A097F49
    3249494932
    3248484832
    324A484830
    3A4141217A
    3A42402078
    009DA0A07D
    3944444439
    3D4040403D
    3C24FF2424
    487E494366
    2B2FFC2F2B
    FF0929F620
    C0887E0903
    2054547941
    0000447D41
    3048484A32
    384040227A
    007A0A0A72
    7D0D19317D
    2629292F28
    2629292926
    30484D4020
    3808080808
    0808080838
    2F10C8ACBA
    2F102834FA
    00007B0000
    08142A1422
    22142A1408
    AA005500AA
    AA55AA55AA
    000000FF00
    101010FF00
    141414FF00
    1010FF00FF
    1010F010F0
    141414FC00
    1414F700FF
    0000FF00FF
    1414F404FC
    141417101F
    10101F101F
    1414141F00
    101010F000
    0000001F10
    1010101F10
    101010F010
    000000FF10
    1010101010
    101010FF10
    000000FF14
    0000FF00FF
    00001F1017
    0000FC04F4
    1414171017
    1414F404F4
    0000FF00F7
    1414141414
    1414F700F7
    1414141714
    10101F101F
    141414F414
    1010F010F0
    00001F101F
    0000001F14
    000000FC14
    0000F010F0
    1010FF10FF
    141414FF14
    1010101F00
    000000F010
    FFFFFFFFFF
    F0F0F0F0F0
    FFFFFF0000
    000000FFFF
    0F0F0F0F0F
    3844443844
    7C2A2A3E14
    7E02020606
    027E027E02
    6355494163
    3844443C04
    407E201E20
    06027E0202
    99A5E7A599
    1C2A492A1C
    4C7201724C
    304A4D4D30
    3048784830
    BC625A463D
    3E49494900
    7E0101017E
    2A2A2A2A2A
    44445F4444
    40514A4440
    40444A5140
    0000FF0103
    E080FF0000
    08086B6B08
    3612362436
    060F090F06
    0000181800
    0000101000
    3040FF0101
    001F01011E
    00191D1712
    003C3C3C3C
    0000000000`;

    /* A single Oled */
    export class Screen
    {
        _address: number;
        _is128: boolean;
        _zoom: boolean;
        _oBuffer: Buffer;
        _cBuf2: Buffer;
        _cBuf3: Buffer;
        _cBuf4: Buffer;

        /* Clears the OLED */
        //% blockId="setScreen" block="%screen|All OLED pixels%set" 
        //% weight=90
        //% set.shadow="toggleOnOff"
        //% parts="firescreen"
        setScreen(set: boolean)
        {
            this._oBuffer.fill(set ? 0xff : 0);
            this._oBuffer[0] = 0x40;
            this.updateScreen();
        }

        /* Update the OLED from the buffer */
        //% blockId="updateScreen" block="%screen|update OLED" 
        //% weight=80
        //% parts="firescreen"
        updateScreen()
        {
            this.set_pos(0, 0);
            pins.i2cWriteBuffer(this._address, this._oBuffer);
        }

        cmd1(n1: number)
        {
            pins.i2cWriteNumber(this._address, n1 & 0xff, NumberFormat.UInt16BE);
        }

        cmd1a(n1: number)
        {
            this._cBuf2[1] = n1;
            pins.i2cWriteBuffer(this._address, this._cBuf2);
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

        set_pos(col: number, page: number)
        {
            let scaler = this._zoom ? 2 : 1;
            this.cmd1(0xb0 | page)       // page number
            let c = col * scaler;
            this.cmd1(0x00 | (c % 16));  // lower start column address
            this.cmd1(0x10 | (c >> 4));  // upper start column address    
        }

       /**
         * show number on OLED
         * @param n number to print: eg: 100
         * @param x x value: eg: 0
         * @param y y value: eg: 0
         * @param inv inverse video: eg: false
         */
        //% blockId="doNumber" block="%screen|number %n| at x %x|y %y|inverse %inv"
        //% weight=60
        //% parts="firescreen"
        //% inlineInputMode=inline
        //% inv.shadow="toggleYesNo"
        doNumber(n: number, x: number, y: number, inv: boolean)
        {
            this.doText(n.toString(), x, y, inv);
        }

       /**
         * show text on OLED
         * @param s string to print: eg: 'ABCDE'
         * @param x x value: eg: 0
         * @param y y value: eg: 0
         * @param inv inverse video: eg: false
         */
        //% blockId="doText"
        //% block="%screen|text%s|at x%x|y%y|inverse%inv"
        //% weight=65
        //% inlineInputMode=inline
        //% inv.shadow="toggleYesNo"
        doText(s: string, x: number, y:number, inv: boolean)
        {
            for (let n = 0; n < s.length; n++)
            {
                if (x > 128 - 6)
                {
                    y++;
                    x=0;
                }
                this.doChar(s.charAt(n), x, y, inv)
                x += 6;
            }
        }

        doChar(s: string, x: number, y: number, inv: boolean)
        {
            let cNum = 0;
            let cIdx = 0;

            let scaler = this._zoom ? 2 : 1;
            let scPos = x * scaler + y * 128 + 1;

            this.set_pos(x, y);
            this._cBuf2[0] = 0x40;
            this._cBuf3[0] = 0x40;
            for (let i = 0; i < 6; i++)
            {
                if (i === 5)
                    cNum = inv ? 255 : 0;
                else
                {
                    cIdx = s.charCodeAt(0);
                    cNum = font.getNumber(NumberFormat.UInt8BE, 5 * cIdx + i);
                    if (inv)
                        cNum = 255 - cNum;
                }
                if (this._zoom)
                {
                    this._oBuffer[scPos + i*2] = this._oBuffer[scPos + 1 + i*2] = cNum;
                    this._cBuf3[1] = this._cBuf3[2] = cNum;
                    pins.i2cWriteBuffer(this._address, this._cBuf3);
                }
                else
                {
                    this._oBuffer[scPos + i] = cNum;
                    this._cBuf2[1] = cNum;
                    pins.i2cWriteBuffer(this._address, this._cBuf2);
                }
            }
        }

        // clear bit
        clearBit(d: number, b: number): number
        {
            if (d & (1 << b))
                d -= (1 << b);
            return d;
        }

       /**
         * set pixel in OLED
         * @param x x value: eg: 0
         * @param y y value: eg: 0
         * @param doSet on or off. eg: true
         */
        //% blockId="plotPixel"
        //% block="%screen|set Oled pixel at x%x|y%y|set%doSet|update%update"
        //% doSet.shadow="toggleOnOff"
        //% parts="firescreen"
        //% inlineInputMode=inline
        plotPixel(x: number, y: number, doSet: boolean, update: boolean)
        {
            let page = y >> 3;
            let scPage = y % 8;
            let scaler = this._zoom ? 2 : 1;
            let scPos = x * scaler + page * 128 + 1;
            let byteVal = doSet ? (this._oBuffer[scPos] | (1 << scPage)) : this.clearBit(this._oBuffer[scPos], scPage);
            this._oBuffer[scPos] = byteVal;
            if (this._zoom)
                this._oBuffer[scPos + 1] = byteVal;
            if (update)
            {
                this.set_pos(x, page);
                if (this._zoom)
                {
                    this._cBuf3[0] = 0x40;
                    this._cBuf3[1] = this._cBuf3[2] = byteVal;
                    pins.i2cWriteBuffer(this._address, this._cBuf3);
                }
                else
                {
                    this._cBuf2[0] = 0x40;
                    this._cBuf2[1] = byteVal;
                    pins.i2cWriteBuffer(this._address, this._cBuf2);
                }
            }
        }

        /**
          * Invert display
          * @param inv inverse video: eg: false
          */
        //% blockId="invertOled" block="%screen|inverse video%inv"
        //% weight=65
        //% inv.shadow="toggleYesNo"
        //% parts="firescreen"
        invertOled(inv: boolean)
        {
            let com = inv ? 0xA7 : 0xA6;
            this.cmd1(com);
        }

        /**
        * zoom display
        * @param zoom zoomed text: eg: true
        */
        //% blockId="zoomOled" block="%screen|zoom%zoom"
        //% weight=60
        //% parts="firescreen"
        //% zoom.shadow="toggleYesNo"
        zoomOled(zoom: boolean)
        {
            let com = zoom ? 1 : 0;
            this.cmd2(0xd6, com);
            this._zoom = zoom;
        }

       /**
         * draw a horizontal line
         * @param x x start
         * @param y y start
         * @param len length of line, eg: 10
         * @param doSet set or clear. eg: true
         */
        //% blockId="oledHLine" block="%screen|horizontal line at x%x|y%y|length%length|set%doSet|update%update"
        //% parts="firescreen"
        //% inlineInputMode=inline
        oledHLine(x: number, y: number, length: number, doSet: boolean, update: boolean)
        {
            for (let i = x; i < (x + length); i++)
                this.plotPixel(i, y, doSet, update);
        }

       /**
         * draw a vertical line
         * @param x x start
         * @param y y start
         * @param len length of line, eg: 10
         * @param doSet set or clear. eg: true
         */
        //% blockId="oledVLine" block="%screen|vertical line at x%x|y%y|length%length|set%doSet|update%update"
        //% parts="firescreen"
        //% inlineInputMode=inline
        oledVLine(x: number, y: number, length: number, doSet: boolean, update: boolean)
        {
            for (let i = y; i < (y + length); i++)
                this.plotPixel(x, i, doSet, update);
        }

       /**
         * draw a rectangle
         * @param x1 x start
         * @param y1 y start
         * @param x2 x finish
         * @param y2 y finish
         * @param doSet set or clear. eg: true
         */
        //% blockId="oledRect" block="%screen|rectangle at x1%x1|y1%y1|x2%x2|y2%y2|set%doSet|update%update"
        //% parts="firescreen"
        //% inlineInputMode=inline
        oledRect(x1: number, y1: number, x2: number, y2: number, doSet: boolean, update: boolean)
        {
            if (x1 > x2)
                x1 = [x2, x2 = x1][0];
            if (y1 > y2)
                y1 = [y2, y2 = y1][0];
            this.oledHLine(x1, y1, x2 - x1 + 1, doSet, update);
            this.oledHLine(x1, y2, x2 - x1 + 1, doSet, update);
            this.oledVLine(x1, y1, y2 - y1 + 1, doSet, update);
            this.oledVLine(x2, y1, y2 - y1 + 1, doSet, update);
        }

    }

    /**
     * Create a new OLED
     * @param addr is i2c address; eg: 60
     */
    //% blockId="newScreen" block="OLED 72 at address %addr"
    //% weight=100
    //% blockSetVariable=screen
    //% parts="firescreen"
    //% blockGap=20
    export function newScreen(addr: number): Screen
    {
        let screen = new Screen();
        screen._oBuffer = pins.createBuffer(1025);
        screen._cBuf2 = pins.createBuffer(2);
        screen._cBuf3 = pins.createBuffer(3);
        screen._cBuf4 = pins.createBuffer(4);
        screen._address = addr;
        screen._is128 = true;
        screen._zoom = false;
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
        screen.cmd2(0xD6, 0);       // NOZOOM
        screen.cmd1(0xAF) ;         // DISPLAYON
        screen.setScreen(false);
        return screen;
    }


}
