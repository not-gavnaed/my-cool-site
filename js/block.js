document.onkeypress = function(e) {
    if (123 == (e = e || window.event).keyCode) return !1
}, document.onmousedown = function(e) {
    if (123 == (e = e || window.event).keyCode) return !1
}, document.onkeydown = function(e) {
    if (123 == (e = e || window.event).keyCode) return !1
};
var message = "Sorry, right-click has been disabled";

function clickIE() {
    if (document.all) return !1
}

function clickNS(e) {
    if ((document.layers || document.getElementById && !document.all) && (2 == e.which || 3 == e.which)) return !1
}

function disableCtrlKeyCombination(e) {
    var n, o, t = new Array("a", "n", "c", "x", "v", "j", "u", "w", "i");
    if (window.event ? (n = window.event.keyCode, o = !!window.event.ctrlKey) : (n = e.which, o = !!e.ctrlKey), o)
        for (i = 0; i < t.length; i++)
            if (t[i].toLowerCase() == String.fromCharCode(n).toLowerCase()) return !0;
    return !0
}
document.layers ? (document.captureEvents(Event.MOUSEDOWN), document.onmousedown = clickNS) : (document.onmouseup = clickNS, document.oncontextmenu = clickIE), document.oncontextmenu = new Function("return false"), $(window).on("keydown", (function(e) {
    return 123 != e.keyCode && ((!e.ctrlKey || !e.shiftKey || 73 != e.keyCode) && ((!e.ctrlKey || 73 != e.keyCode) && void 0))
})), $(document).on("contextmenu", (function(e) {
    e.preventDefault()
})), $(window).on("keydown", (function(e) {
    return 123 != e.keyCode && ((!e.ctrlKey || !e.shiftKey || 74 != e.keyCode) && ((!e.ctrlKey || 74 != e.keyCode) && void 0))
})), $(document).on("contextmenu", (function(e) {
    e.preventDefault()
})), $(window).on("keydown", (function(e) {
    return 123 != e.keyCode && ((!e.ctrlKey || !e.shiftKey || 73 != e.keyCode) && ((!e.ctrlKey || 73 != e.keyCode) && void 0))
})), $(document).on("contextmenu", (function(e) {
    e.preventDefault()
})), $(window).on("keydown", (function(e) {
    return 123 != e.keyCode && ((!e.ctrlKey || 70 != e.keyCode) && ((!e.ctrlKey || 70 != e.keyCode) && void 0))
})), $(document).on("contextmenu", (function(e) {
    e.preventDefault()
})), $(window).on("keydown", (function(e) {
    return 123 != e.keyCode && (122 != e.keyCode && (122 != e.keyCode && void 0))
})), $(document).on("contextmenu", (function(e) {
    e.preventDefault()
}));