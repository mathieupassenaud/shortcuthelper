

var processSocket = new WebSocket("ws:127.0.0.1/process");
processSocket.onmessage = function (evt)
{
	var receivedMessage = evt.data;
	loadPlugin(receivedMessage.split(".")[0]);
}

var inputSocket = new WebSocket("ws:127.0.0.1/input");


function loadPlugin(pluginName){
	$( "#mainPage" ).load( "plugins/"+pluginName+"/index.html", function() {
		});
}

function sendCodes(codes){
    inputSocket.send(JSON.stringify(codes));
}

    var VK_ENTER          = '\n';
    var VK_BACK_SPACE     = '\b';
    var VK_TAB            = '\t';
    var VK_CANCEL         = 0x03;
    var VK_CLEAR          = 0x0C;
    var VK_SHIFT          = 0x10;
    var VK_CONTROL        = 0x11;
    var VK_ALT            = 0x12;
    var VK_PAUSE          = 0x13;
    var VK_CAPS_LOCK      = 0x14;
    var VK_ESCAPE         = 0x1B;
    var VK_SPACE          = 0x20;
    var VK_PAGE_UP        = 0x21;
    var VK_PAGE_DOWN      = 0x22;
    var VK_END            = 0x23;
    var VK_HOME           = 0x24;

    /**
     * Constant for the non-numpad <b>left</b> arrow key.
     * @see #VK_KP_LEFT
     */
    var VK_LEFT           = 0x25;

    /**
     * Constant for the non-numpad <b>up</b> arrow key.
     * @see #VK_KP_UP
     */
    var VK_UP             = 0x26;

    /**
     * Constant for the non-numpad <b>right</b> arrow key.
     * @see #VK_KP_RIGHT
     */
    var VK_RIGHT          = 0x27;

    /**
     * Constant for the non-numpad <b>down</b> arrow key.
     * @see #VK_KP_DOWN
     */
    var VK_DOWN           = 0x28;

    /**
     * Constant for the comma key, ","
     */
    var VK_COMMA          = 0x2C;

    /**
     * Constant for the minus key, "-"
     * @since 1.2
     */
    var VK_MINUS          = 0x2D;

    /**
     * Constant for the period key, "."
     */
    var VK_PERIOD         = 0x2E;

    /**
     * Constant for the forward slash key, "/"
     */
    var VK_SLASH          = 0x2F;

    /** VK_0 thru VK_9 are the same as ASCII '0' thru '9' (0x30 - 0x39) */
    var VK_0              = 0x30;
    var VK_1              = 0x31;
    var VK_2              = 0x32;
    var VK_3              = 0x33;
    var VK_4              = 0x34;
    var VK_5              = 0x35;
    var VK_6              = 0x36;
    var VK_7              = 0x37;
    var VK_8              = 0x38;
    var VK_9              = 0x39;

    /**
     * Constant for the semicolon key, ";"
     */
    var VK_SEMICOLON      = 0x3B;

    /**
     * Constant for the equals key, "="
     */
    var VK_EQUALS         = 0x3D;

    /** VK_A thru VK_Z are the same as ASCII 'A' thru 'Z' (0x41 - 0x5A) */
    var VK_A              = 0x41;
    var VK_B              = 0x42;
    var VK_C              = 0x43;
    var VK_D              = 0x44;
    var VK_E              = 0x45;
    var VK_F              = 0x46;
    var VK_G              = 0x47;
    var VK_H              = 0x48;
    var VK_I              = 0x49;
    var VK_J              = 0x4A;
    var VK_K              = 0x4B;
    var VK_L              = 0x4C;
    var VK_M              = 0x4D;
    var VK_N              = 0x4E;
    var VK_O              = 0x4F;
    var VK_P              = 0x50;
    var VK_Q              = 0x51;
    var VK_R              = 0x52;
    var VK_S              = 0x53;
    var VK_T              = 0x54;
    var VK_U              = 0x55;
    var VK_V              = 0x56;
    var VK_W              = 0x57;
    var VK_X              = 0x58;
    var VK_Y              = 0x59;
    var VK_Z              = 0x5A;

    /**
     * Constant for the open bracket key, "["
     */
    var VK_OPEN_BRACKET   = 0x5B;

    /**
     * Constant for the back slash key, "\"
     */
    var VK_BACK_SLASH     = 0x5C;

    /**
     * Constant for the close bracket key, "]"
     */
    var VK_CLOSE_BRACKET  = 0x5D;

    var VK_NUMPAD0        = 0x60;
    var VK_NUMPAD1        = 0x61;
    var VK_NUMPAD2        = 0x62;
    var VK_NUMPAD3        = 0x63;
    var VK_NUMPAD4        = 0x64;
    var VK_NUMPAD5        = 0x65;
    var VK_NUMPAD6        = 0x66;
    var VK_NUMPAD7        = 0x67;
    var VK_NUMPAD8        = 0x68;
    var VK_NUMPAD9        = 0x69;
    var VK_MULTIPLY       = 0x6A;
    var VK_ADD            = 0x6B;

    /**
     * This constant is obsolete, and is included only for backwards
     * compatibility.
     * @see #VK_SEPARATOR
     */
    var VK_SEPARATER      = 0x6C;

    /**
     * Constant for the Numpad Separator key.
     * @since 1.4
     */
    var VK_SEPARATOR      = VK_SEPARATER;

    var VK_SUBTRACT       = 0x6D;
    var VK_DECIMAL        = 0x6E;
    var VK_DIVIDE         = 0x6F;
    var VK_DELETE         = 0x7F; /* ASCII DEL */
    var VK_NUM_LOCK       = 0x90;
    var VK_SCROLL_LOCK    = 0x91;

    /** Constant for the F1 function key. */
    var VK_F1             = 0x70;

    /** Constant for the F2 function key. */
    var VK_F2             = 0x71;

    /** Constant for the F3 function key. */
    var VK_F3             = 0x72;

    /** Constant for the F4 function key. */
    var VK_F4             = 0x73;

    /** Constant for the F5 function key. */
    var VK_F5             = 0x74;

    /** Constant for the F6 function key. */
    var VK_F6             = 0x75;

    /** Constant for the F7 function key. */
    var VK_F7             = 0x76;

    /** Constant for the F8 function key. */
    var VK_F8             = 0x77;

    /** Constant for the F9 function key. */
    var VK_F9             = 0x78;

    /** Constant for the F10 function key. */
    var VK_F10            = 0x79;

    /** Constant for the F11 function key. */
    var VK_F11            = 0x7A;

    /** Constant for the F12 function key. */
    var VK_F12            = 0x7B;

    /**
     * Constant for the F13 function key.
     * @since 1.2
     */
    /* F13 - F24 are used on IBM 3270 keyboard; use random range for constants. */
    var VK_F13            = 0xF000;

    /**
     * Constant for the F14 function key.
     * @since 1.2
     */
    var VK_F14            = 0xF001;

    /**
     * Constant for the F15 function key.
     * @since 1.2
     */
    var VK_F15            = 0xF002;

    /**
     * Constant for the F16 function key.
     * @since 1.2
     */
    var VK_F16            = 0xF003;

    /**
     * Constant for the F17 function key.
     * @since 1.2
     */
    var VK_F17            = 0xF004;

    /**
     * Constant for the F18 function key.
     * @since 1.2
     */
    var VK_F18            = 0xF005;

    /**
     * Constant for the F19 function key.
     * @since 1.2
     */
    var VK_F19            = 0xF006;

    /**
     * Constant for the F20 function key.
     * @since 1.2
     */
    var VK_F20            = 0xF007;

    /**
     * Constant for the F21 function key.
     * @since 1.2
     */
    var VK_F21            = 0xF008;

    /**
     * Constant for the F22 function key.
     * @since 1.2
     */
    var VK_F22            = 0xF009;

    /**
     * Constant for the F23 function key.
     * @since 1.2
     */
    var VK_F23            = 0xF00A;

    /**
     * Constant for the F24 function key.
     * @since 1.2
     */
    var VK_F24            = 0xF00B;

    var VK_PRINTSCREEN    = 0x9A;
    var VK_INSERT         = 0x9B;
    var VK_HELP           = 0x9C;
    var VK_META           = 0x9D;

    var VK_BACK_QUOTE     = 0xC0;
    var VK_QUOTE          = 0xDE;

    /**
     * Constant for the numeric keypad <b>up</b> arrow key.
     * @see #VK_UP
     * @since 1.2
     */
    var VK_KP_UP          = 0xE0;

    /**
     * Constant for the numeric keypad <b>down</b> arrow key.
     * @see #VK_DOWN
     * @since 1.2
     */
    var VK_KP_DOWN        = 0xE1;

    /**
     * Constant for the numeric keypad <b>left</b> arrow key.
     * @see #VK_LEFT
     * @since 1.2
     */
    var VK_KP_LEFT        = 0xE2;

    /**
     * Constant for the numeric keypad <b>right</b> arrow key.
     * @see #VK_RIGHT
     * @since 1.2
     */
    var VK_KP_RIGHT       = 0xE3;

    /* For European keyboards */
    /** @since 1.2 */
    var VK_DEAD_GRAVE               = 0x80;
    /** @since 1.2 */
    var VK_DEAD_ACUTE               = 0x81;
    /** @since 1.2 */
    var VK_DEAD_CIRCUMFLEX          = 0x82;
    /** @since 1.2 */
    var VK_DEAD_TILDE               = 0x83;
    /** @since 1.2 */
    var VK_DEAD_MACRON              = 0x84;
    /** @since 1.2 */
    var VK_DEAD_BREVE               = 0x85;
    /** @since 1.2 */
    var VK_DEAD_ABOVEDOT            = 0x86;
    /** @since 1.2 */
    var VK_DEAD_DIAERESIS           = 0x87;
    /** @since 1.2 */
    var VK_DEAD_ABOVERING           = 0x88;
    /** @since 1.2 */
    var VK_DEAD_DOUBLEACUTE         = 0x89;
    /** @since 1.2 */
    var VK_DEAD_CARON               = 0x8a;
    /** @since 1.2 */
    var VK_DEAD_CEDILLA             = 0x8b;
    /** @since 1.2 */
    var VK_DEAD_OGONEK              = 0x8c;
    /** @since 1.2 */
    var VK_DEAD_IOTA                = 0x8d;
    /** @since 1.2 */
    var VK_DEAD_VOICED_SOUND        = 0x8e;
    /** @since 1.2 */
    var VK_DEAD_SEMIVOICED_SOUND    = 0x8f;

    /** @since 1.2 */
    var VK_AMPERSAND                = 0x96;
    /** @since 1.2 */
    var VK_ASTERISK                 = 0x97;
    /** @since 1.2 */
    var VK_QUOTEDBL                 = 0x98;
    /** @since 1.2 */
    var VK_LESS                     = 0x99;

    /** @since 1.2 */
    var VK_GREATER                  = 0xa0;
    /** @since 1.2 */
    var VK_BRACELEFT                = 0xa1;
    /** @since 1.2 */
    var VK_BRACERIGHT               = 0xa2;

    /**
     * Constant for the "@" key.
     * @since 1.2
     */
    var VK_AT                       = 0x0200;

    /**
     * Constant for the ":" key.
     * @since 1.2
     */
    var VK_COLON                    = 0x0201;

    /**
     * Constant for the "^" key.
     * @since 1.2
     */
    var VK_CIRCUMFLEX               = 0x0202;

    /**
     * Constant for the "$" key.
     * @since 1.2
     */
    var VK_DOLLAR                   = 0x0203;

    /**
     * Constant for the Euro currency sign key.
     * @since 1.2
     */
    var VK_EURO_SIGN                = 0x0204;

    /**
     * Constant for the "!" key.
     * @since 1.2
     */
    var VK_EXCLAMATION_MARK         = 0x0205;

    /**
     * Constant for the inverted exclamation mark key.
     * @since 1.2
     */
    var VK_INVERTED_EXCLAMATION_MARK = 0x0206;

    /**
     * Constant for the "(" key.
     * @since 1.2
     */
    var VK_LEFT_PARENTHESIS         = 0x0207;

    /**
     * Constant for the "#" key.
     * @since 1.2
     */
    var VK_NUMBER_SIGN              = 0x0208;

    /**
     * Constant for the "+" key.
     * @since 1.2
     */
    var VK_PLUS                     = 0x0209;

    /**
     * Constant for the ")" key.
     * @since 1.2
     */
    var VK_RIGHT_PARENTHESIS        = 0x020A;

    /**
     * Constant for the "_" key.
     * @since 1.2
     */
    var VK_UNDERSCORE               = 0x020B;

    /**
     * Constant for the Microsoft Windows "Windows" key.
     * It is used for both the left and right version of the key.
     * @see #getKeyLocation()
     * @since 1.5
     */
    var VK_WINDOWS                  = 0x020C;

    /**
     * Constant for the Microsoft Windows Context Menu key.
     * @since 1.5
     */
    var VK_CONTEXT_MENU             = 0x020D;

    /* for input method support on Asian Keyboards */

    /* not clear what this means - listed in Microsoft Windows API */
    var VK_FINAL                    = 0x0018;

    /** Constant for the Convert function key. */
    /* Japanese PC 106 keyboard, Japanese Solaris keyboard: henkan */
    var VK_CONVERT                  = 0x001C;

    /** Constant for the Don't Convert function key. */
    /* Japanese PC 106 keyboard: muhenkan */
    var VK_NONCONVERT               = 0x001D;

    /** Constant for the Accept or Commit function key. */
    /* Japanese Solaris keyboard: kakutei */
    var VK_ACCEPT                   = 0x001E;

    /* not clear what this means - listed in Microsoft Windows API */
    var VK_MODECHANGE               = 0x001F;

    /* replaced by VK_KANA_LOCK for Microsoft Windows and Solaris;
       might still be used on other platforms */
    var VK_KANA                     = 0x0015;

    /* replaced by VK_INPUT_METHOD_ON_OFF for Microsoft Windows and Solaris;
       might still be used for other platforms */
    var VK_KANJI                    = 0x0019;

    /**
     * Constant for the Alphanumeric function key.
     * @since 1.2
     */
    /* Japanese PC 106 keyboard: eisuu */
    var VK_ALPHANUMERIC             = 0x00F0;

    /**
     * Constant for the Katakana function key.
     * @since 1.2
     */
    /* Japanese PC 106 keyboard: katakana */
    var VK_KATAKANA                 = 0x00F1;

    /**
     * Constant for the Hiragana function key.
     * @since 1.2
     */
    /* Japanese PC 106 keyboard: hiragana */
    var VK_HIRAGANA                 = 0x00F2;

    /**
     * Constant for the Full-Width Characters function key.
     * @since 1.2
     */
    /* Japanese PC 106 keyboard: zenkaku */
    var VK_FULL_WIDTH               = 0x00F3;

    /**
     * Constant for the Half-Width Characters function key.
     * @since 1.2
     */
    /* Japanese PC 106 keyboard: hankaku */
    var VK_HALF_WIDTH               = 0x00F4;

    /**
     * Constant for the Roman Characters function key.
     * @since 1.2
     */
    /* Japanese PC 106 keyboard: roumaji */
    var VK_ROMAN_CHARACTERS         = 0x00F5;

    /**
     * Constant for the All Candidates function key.
     * @since 1.2
     */
    /* Japanese PC 106 keyboard - VK_CONVERT + ALT: zenkouho */
    var VK_ALL_CANDIDATES           = 0x0100;

    /**
     * Constant for the Previous Candidate function key.
     * @since 1.2
     */
    /* Japanese PC 106 keyboard - VK_CONVERT + SHIFT: maekouho */
    var VK_PREVIOUS_CANDIDATE       = 0x0101;

    /**
     * Constant for the Code Input function key.
     * @since 1.2
     */
    /* Japanese PC 106 keyboard - VK_ALPHANUMERIC + ALT: kanji bangou */
    var VK_CODE_INPUT               = 0x0102;

    /**
     * Constant for the Japanese-Katakana function key.
     * This key switches to a Japanese input method and selects its Katakana input mode.
     * @since 1.2
     */
    /* Japanese Macintosh keyboard - VK_JAPANESE_HIRAGANA + SHIFT */
    var VK_JAPANESE_KATAKANA        = 0x0103;

    /**
     * Constant for the Japanese-Hiragana function key.
     * This key switches to a Japanese input method and selects its Hiragana input mode.
     * @since 1.2
     */
    /* Japanese Macintosh keyboard */
    var VK_JAPANESE_HIRAGANA        = 0x0104;

    /**
     * Constant for the Japanese-Roman function key.
     * This key switches to a Japanese input method and selects its Roman-Direct input mode.
     * @since 1.2
     */
    /* Japanese Macintosh keyboard */
    var VK_JAPANESE_ROMAN           = 0x0105;

    /**
     * Constant for the locking Kana function key.
     * This key locks the keyboard into a Kana layout.
     * @since 1.3
     */
    /* Japanese PC 106 keyboard with special Windows driver - eisuu + Control; Japanese Solaris keyboard: kana */
    var VK_KANA_LOCK                = 0x0106;

    /**
     * Constant for the input method on/off key.
     * @since 1.3
     */
    /* Japanese PC 106 keyboard: kanji. Japanese Solaris keyboard: nihongo */
    var VK_INPUT_METHOD_ON_OFF      = 0x0107;

    /* for Sun keyboards */
    /** @since 1.2 */
    var VK_CUT                      = 0xFFD1;
    /** @since 1.2 */
    var VK_COPY                     = 0xFFCD;
    /** @since 1.2 */
    var VK_PASTE                    = 0xFFCF;
    /** @since 1.2 */
    var VK_UNDO                     = 0xFFCB;
    /** @since 1.2 */
    var VK_AGAIN                    = 0xFFC9;
    /** @since 1.2 */
    var VK_FIND                     = 0xFFD0;
    /** @since 1.2 */
    var VK_PROPS                    = 0xFFCA;
    /** @since 1.2 */
    var VK_STOP                     = 0xFFC8;

    /**
     * Constant for the Compose function key.
     * @since 1.2
     */
    var VK_COMPOSE                  = 0xFF20;

    /**
     * Constant for the AltGraph function key.
     * @since 1.2
     */
    var VK_ALT_GRAPH                = 0xFF7E;

    /**
     * Constant for the Begin key.
     * @since 1.5
     */
    var VK_BEGIN                    = 0xFF58;

    /**
     * This value is used to indicate that the keyCode is unknown.
     * KEY_TYPED events do not have a keyCode value; this value
     * is used instead.
     */
    var VK_UNDEFINED      = 0x0;

    /**
     * KEY_PRESSED and KEY_RELEASED events which do not map to a
     * valid Unicode character use this for the keyChar value.
     */
    var CHAR_UNDEFINED   = 0xFFFF;

    /**
     * A constant indicating that the keyLocation is indeterminate
     * or not relevant.
     * <code>KEY_TYPED</code> events do not have a keyLocation; this value
     * is used instead.
     * @since 1.4
     */
    var KEY_LOCATION_UNKNOWN  = 0;

    /**
     * A constant indicating that the key pressed or released
     * is not distinguished as the left or right version of a key,
     * and did not originate on the numeric keypad (or did not
     * originate with a virtual key corresponding to the numeric
     * keypad).
     * @since 1.4
     */
    var KEY_LOCATION_STANDARD = 1;

    /**
     * A constant indicating that the key pressed or released is in
     * the left key location (there is more than one possible location
     * for this key).  Example: the left shift key.
     * @since 1.4
     */
    var KEY_LOCATION_LEFT     = 2;

    /**
     * A constant indicating that the key pressed or released is in
     * the right key location (there is more than one possible location
     * for this key).  Example: the right shift key.
     * @since 1.4
     */
    var KEY_LOCATION_RIGHT    = 3;

    /**
     * A constant indicating that the key event originated on the
     * numeric keypad or with a virtual key corresponding to the
     * numeric keypad.
     * @since 1.4
     */
    var KEY_LOCATION_NUMPAD   = 4;

    /// <summary>
    /// Windows 2000/XP: Browser Back key
    /// </summary>
    var BROWSER_BACK = 0xA6;

    /// <summary>
    /// Windows 2000/XP: Browser Forward key
    /// </summary>
    var BROWSER_FORWARD = 0xA7;

    /// <summary>
    /// Windows 2000/XP: Browser Refresh key
    /// </summary>
    var BROWSER_REFRESH = 0xA8;

    /// <summary>
    /// Windows 2000/XP: Browser Stop key
    /// </summary>
    var BROWSER_STOP = 0xA9;

    /// <summary>
    /// Windows 2000/XP: Browser Search key
    /// </summary>
    var BROWSER_SEARCH = 0xAA;

    /// <summary>
    /// Windows 2000/XP: Browser Favorites key
    /// </summary>
    var BROWSER_FAVORITES = 0xAB;

    /// <summary>
    /// Windows 2000/XP: Browser Start and Home key
    /// </summary>
    var BROWSER_HOME = 0xAC;

    /// <summary>
    /// Windows 2000/XP: Volume Mute key
    /// </summary>
    var VOLUME_MUTE = 0xAD;

    /// <summary>
    /// Windows 2000/XP: Volume Down key
    /// </summary>
    var VOLUME_DOWN = 0xAE;

    /// <summary>
    /// Windows 2000/XP: Volume Up key
    /// </summary>
    var VOLUME_UP = 0xAF;

    /// <summary>
    /// Windows 2000/XP: Next Track key
    /// </summary>
    var MEDIA_NEXT_TRACK = 0xB0;

    /// <summary>
    /// Windows 2000/XP: Previous Track key
    /// </summary>
    var MEDIA_PREV_TRACK = 0xB1;

    /// <summary>
    /// Windows 2000/XP: Stop Media key
    /// </summary>
    var MEDIA_STOP = 0xB2;

    /// <summary>
    /// Windows 2000/XP: Play/Pause Media key
    /// </summary>
    var MEDIA_PLAY_PAUSE = 0xB3;

    /// <summary>
    /// Windows 2000/XP: Start Mail key
    /// </summary>
    var LAUNCH_MAIL = 0xB4;

    /// <summary>
    /// Windows 2000/XP: Select Media key
    /// </summary>
    var LAUNCH_MEDIA_SELECT = 0xB5;