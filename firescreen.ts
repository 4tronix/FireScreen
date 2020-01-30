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
    chGen[65] = 0x7C1211127C; // 'A'
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

        set_pos(col: number, page: number, zoom: boolean)
        {
            let scaler = zoom ? 2 : 1;
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
         * @param zoom zoomed text: eg: false
         */
        //% blockId="showNumber" block="%screen|number %n| at x %x|y %y|inverse %inv|zoom %zoom"
        //% weight=60
        //% parts="firescreen"
        //% inlineInputMode=inline
        //% inv.shadow="toggleYesNo"
        //% zoom.shadow="toggleYesNo"
        showNumber(n: number, x: number, y: number, inv: boolean, zoom: boolean)
        {
            this.showOledText(n.toString(), x, y, inv, zoom);
        }

       /**
         * show text on OLED
         * @param s string to print: eg: 'ABCDE'
         * @param x x value: eg: 0
         * @param y y value: eg: 0
         */
        //% blockId="doText"
        //% block="%screen|text %s|at x%x|y%y"
        //% weight=65
        doText(s: string, x: number, y:number)
        {
            for (let n = 0; n < s.length; n++)
            {
                if (x > 128 - 6)
                {
                    y++;
                    x=0;
                }
                this.doChar(s.charAt(n), x, y)
                x += 6;
            }
        }

        doChar(s: string, x: number, y: number)
        {
/*            this.set_pos(x, y);
            this._cBuf2[0] = 0x40;
            for (let i = 0; i < 6; i++)
            {
                if (i === 5)
                    this._cBuf2[1] = 0;
                else
                {
                    let cIdx = s.charCodeAt(0);
                    let cNum = font.getNumber(NumberFormat.UInt8BE, 5 * cIdx + i);
                    cBuf2[1] = cNum;
                }
                pins.i2cWriteBuffer(this._address, this._cBuf2);
            }*/
        }

       /**
         * show text on OLED
         * @param s text to show: eg: '4tronix'
         * @param x x value: eg: 0
         * @param y y value: eg: 0
         * @param inv inverse video: eg: false
         * @param zoom zoomed text: eg: false
         */
        //% blockId="showOledText" block="%screen|text %s|at x %x|y %y|inverse %inv|zoom %zoom"
        //% weight=70
        //% parts="firescreen"
        //% inlineInputMode=inline
        //% inv.shadow="toggleYesNo"
        //% zoom.shadow="toggleYesNo"
        showOledText(s: string, x: number, y: number, inv: boolean, zoom: boolean)
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
         * @param inv inverse video: eg: false
         * @param zoom zoomed text: eg: false
         */
        //% blockId="setOledPixel"
        //% block="%screen|set Oled pixel at x%x|y%y|inverse%inv|zoom%zoom"
        //% parts="firescreen"
        //% inlineInputMode=inline
        //% inv.shadow="toggleYesNo"
        //% zoom.shadow="toggleYesNo"
        setOledPixel(x: number, y: number, inv: boolean, zoom: boolean)
        {
            let page = y >> 3;
            let shift_page = y % 8;
            let scaler = zoom ? 2 : 1;
            let ind = x * scaler + page * 128 + 1;
            let b = inv ? (this._oBuffer[ind] | (1 << shift_page)) : this.clearBit(this._oBuffer[ind], shift_page);
            this._oBuffer[ind] = b;
            this.set_pos(x, page);
            if (zoom)
            {
                this._oBuffer[ind + 1] = b;
                this._cBuf3[0] = 0x40;
                this._cBuf3[1] = this._cBuf3[2] = b;
                pins.i2cWriteBuffer(this._address, this._cBuf3);
            }
            else
            {
                this._cBuf2[0] = 0x40;
                this._cBuf2[1] = b;
                pins.i2cWriteBuffer(this._address, this._cBuf2);
            }
        }

   }

    /**
     * Create a new OLED
     * @param addr is i2c address; eg: 60
     */
    //% blockId="newScreen" block="OLED 45 at address %addr"
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
