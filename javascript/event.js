/**
 * Checks a given mouseover or mouseout event whether it is
 * equivalent to a mouseenter or mouseleave event regarding the given DOM reference.
 */
const fnCheckMouseEnterOrLeave = function checkMouseEnterOrLeave(oEvent, oDomRef) {
    if (oEvent.type !== "mouseover" && oEvent.type !== "mouseout") {
        return false;
    }

    let isMouseEnterLeave = false;
    const element = oDomRef;
    let parent = oEvent.relatedTarget;

    try {
        while (parent && parent !== element) {
            parent = parent.parentNode;
        }

        if (parent !== element) {
            isMouseEnterLeave = true;
        }
    } catch (e) {
        //escape eslint check for empty block
    }

    return isMouseEnterLeave;
};

/**
 * @enum {int}
 */

const mKeyCodes = {

    /**
     * @type int
     */
    BACKSPACE: 8,

    /**
     * @type int
     */
    TAB: 9,

    /**
     * @type int
     */
    ENTER: 13,

    /**
     * @type int
     */
    SHIFT: 16,

    /**
     * @type int
     */
    CONTROL: 17,

    /**
     * @type int
     */
    ALT: 18,

    /**
     * @type int
     */
    BREAK: 19,

    /**
     * @type int
     */
    CAPS_LOCK: 20,

    /**
     * @type int
     */
    ESCAPE: 27,

    /**
     * @type int
     */
    SPACE: 32,

    /**
     * @type int
     */
    PAGE_UP: 33,

    /**
     * @type int
     */
    PAGE_DOWN: 34,

    /**
     * @type int
     */
    END: 35,

    /**
     * @type int
     */
    HOME: 36,

    /**
     * @type int
     */
    ARROW_LEFT: 37,

    /**
     * @type int
     */
    ARROW_UP: 38,

    /**
     * @type int
     */
    ARROW_RIGHT: 39,

    /**
     * @type int
     */
    ARROW_DOWN: 40,

    /**
     * @type int
     */
    PRINT: 44,

    /**
     * @type int
     */
    INSERT: 45,

    /**
     * @type int
     */
    DELETE: 46,

    /**
     * @type int
     */
    DIGIT_0: 48,

    /**
     * @type int
     */
    DIGIT_1: 49,

    /**
     * @type int
     */
    DIGIT_2: 50,

    /**
     * @type int
     */
    DIGIT_3: 51,

    /**
     * @type int
     */
    DIGIT_4: 52,

    /**
     * @type int
     */
    DIGIT_5: 53,

    /**
     * @type int
     */
    DIGIT_6: 54,

    /**
     * @type int
     */
    DIGIT_7: 55,

    /**
     * @type int
     */
    DIGIT_8: 56,

    /**
     * @type int
     */
    DIGIT_9: 57,

    /**
     * @type int
     */
    A: 65,

    /**
     * @type int
     */
    B: 66,

    /**
     * @type int
     */
    C: 67,

    /**
     * @type int
     */
    D: 68,

    /**
     * @type int
     */
    E: 69,

    /**
     * @type int
     */
    F: 70,

    /**
     * @type int
     */
    G: 71,

    /**
     * @type int
     */
    H: 72,

    /**
     * @type int
     */
    I: 73,

    /**
     * @type int
     */
    J: 74,

    /**
     * @type int
     */
    K: 75,

    /**
     * @type int
     */
    L: 76,

    /**
     * @type int
     */
    M: 77,

    /**
     * @type int
     */
    N: 78,

    /**
     * @type int
     */
    O: 79,

    /**
     * @type int
     */
    P: 80,

    /**
     * @type int
     */
    Q: 81,

    /**
     * @type int
     */
    R: 82,

    /**
     * @type int
     */
    S: 83,

    /**
     * @type int
     */
    T: 84,

    /**
     * @type int
     */
    U: 85,

    /**
     * @type int
     */
    V: 86,

    /**
     * @type int
     */
    W: 87,

    /**
     * @type int
     */
    X: 88,

    /**
     * @type int
     */
    Y: 89,

    /**
     * @type int
     */
    Z: 90,

    /**
     * @type int
     */
    WINDOWS: 91,

    /**
     * @type int
     */
    CONTEXT_MENU: 93,

    /**
     * @type int
     */
    TURN_OFF: 94,

    /**
     * @type int
     */
    SLEEP: 95,

    /**
     * @type int
     */
    NUMPAD_0: 96,

    /**
     * @type int
     */
    NUMPAD_1: 97,

    /**
     * @type int
     */
    NUMPAD_2: 98,

    /**
     * @type int
     */
    NUMPAD_3: 99,

    /**
     * @type int
     */
    NUMPAD_4: 100,

    /**
     * @type int
     */
    NUMPAD_5: 101,

    /**
     * @type int
     */
    NUMPAD_6: 102,

    /**
     * @type int
     */
    NUMPAD_7: 103,

    /**
     * @type int
     */
    NUMPAD_8: 104,

    /**
     * @type int
     */
    NUMPAD_9: 105,

    /**
     * @type int
     */
    NUMPAD_ASTERISK: 106,

    /**
     * @type int
     */
    NUMPAD_PLUS: 107,

    /**
     * @type int
     */
    NUMPAD_MINUS: 109,

    /**
     * @type int
     */
    NUMPAD_COMMA: 110,

    /**
     * @type int
     */
    NUMPAD_SLASH: 111,

    /**
     * @type int
     */
    F1: 112,

    /**
     * @type int
     */
    F2: 113,

    /**
     * @type int
     */
    F3: 114,

    /**
     * @type int
     */
    F4: 115,

    /**
     * @type int
     */
    F5: 116,

    /**
     * @type int
     */
    F6: 117,

    /**
     * @type int
     */
    F7: 118,

    /**
     * @type int
     */
    F8: 119,

    /**
     * @type int
     */
    F9: 120,

    /**
     * @type int
     */
    F10: 121,

    /**
     * @type int
     */
    F11: 122,

    /**
     * @type int
     */
    F12: 123,

    /**
     * @type int
     */
    NUM_LOCK: 144,

    /**
     * @type int
     */
    SCROLL_LOCK: 145,

    /**
     * @type int
     */
    OPEN_BRACKET: 186,

    /**
     * @type int
     */
    PLUS: 187,

    /**
     * @type int
     */
    COMMA: 188,

    /**
     * @type int
     */
    SLASH: 189,

    /**
     * @type int
     */
    DOT: 190,

    /**
     * @type int
     */
    PIPE: 191,

    /**
     * @type int
     */
    SEMICOLON: 192,

    /**
     * @type int
     */
    MINUS: 219,

    /**
     * @type int
     */
    GREAT_ACCENT: 220,

    /**
     * @type int
     */
    EQUALS: 221,

    /**
     * @type int
     */
    SINGLE_QUOTE: 222,

    /**
     * @type int
     */
    BACKSLASH: 226
};