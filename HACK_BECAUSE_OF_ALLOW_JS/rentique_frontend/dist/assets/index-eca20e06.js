"use strict";
(function () { const t = document.createElement("link").relList; if (t && t.supports && t.supports("modulepreload"))
    return; for (const i of document.querySelectorAll('link[rel="modulepreload"]'))
    r(i); new MutationObserver(i => { for (const o of i)
    if (o.type === "childList")
        for (const s of o.addedNodes)
            s.tagName === "LINK" && s.rel === "modulepreload" && r(s); }).observe(document, { childList: !0, subtree: !0 }); function n(i) { const o = {}; return i.integrity && (o.integrity = i.integrity), i.referrerPolicy && (o.referrerPolicy = i.referrerPolicy), i.crossOrigin === "use-credentials" ? o.credentials = "include" : i.crossOrigin === "anonymous" ? o.credentials = "omit" : o.credentials = "same-origin", o; } function r(i) { if (i.ep)
    return; i.ep = !0; const o = n(i); fetch(i.href, o); } })();
var Gi = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Jd(e) { return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e; }
var eh = { exports: {} }, lu = {}, th = { exports: {} }, Ne = {}; /**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var as = Symbol.for("react.element"), Sm = Symbol.for("react.portal"), Tm = Symbol.for("react.fragment"), Bm = Symbol.for("react.strict_mode"), Am = Symbol.for("react.profiler"), Nm = Symbol.for("react.provider"), km = Symbol.for("react.context"), Im = Symbol.for("react.forward_ref"), Rm = Symbol.for("react.suspense"), Om = Symbol.for("react.memo"), Um = Symbol.for("react.lazy"), e0 = Symbol.iterator;
function Fm(e) { return e === null || typeof e != "object" ? null : (e = e0 && e[e0] || e["@@iterator"], typeof e == "function" ? e : null); }
var nh = { isMounted: function () { return !1; }, enqueueForceUpdate: function () { }, enqueueReplaceState: function () { }, enqueueSetState: function () { } }, rh = Object.assign, ih = {};
function no(e, t, n) { this.props = e, this.context = t, this.refs = ih, this.updater = n || nh; }
no.prototype.isReactComponent = {};
no.prototype.setState = function (e, t) { if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables."); this.updater.enqueueSetState(this, e, t, "setState"); };
no.prototype.forceUpdate = function (e) { this.updater.enqueueForceUpdate(this, e, "forceUpdate"); };
function oh() { }
oh.prototype = no.prototype;
function Hc(e, t, n) { this.props = e, this.context = t, this.refs = ih, this.updater = n || nh; }
var Gc = Hc.prototype = new oh;
Gc.constructor = Hc;
rh(Gc, no.prototype);
Gc.isPureReactComponent = !0;
var t0 = Array.isArray, sh = Object.prototype.hasOwnProperty, Wc = { current: null }, ah = { key: !0, ref: !0, __self: !0, __source: !0 };
function uh(e, t, n) { var r, i = {}, o = null, s = null; if (t != null)
    for (r in t.ref !== void 0 && (s = t.ref), t.key !== void 0 && (o = "" + t.key), t)
        sh.call(t, r) && !ah.hasOwnProperty(r) && (i[r] = t[r]); var a = arguments.length - 2; if (a === 1)
    i.children = n;
else if (1 < a) {
    for (var f = Array(a), h = 0; h < a; h++)
        f[h] = arguments[h + 2];
    i.children = f;
} if (e && e.defaultProps)
    for (r in a = e.defaultProps, a)
        i[r] === void 0 && (i[r] = a[r]); return { $$typeof: as, type: e, key: o, ref: s, props: i, _owner: Wc.current }; }
function Pm(e, t) { return { $$typeof: as, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner }; }
function Dc(e) { return typeof e == "object" && e !== null && e.$$typeof === as; }
function Cm(e) { var t = { "=": "=0", ":": "=2" }; return "$" + e.replace(/[=:]/g, function (n) { return t[n]; }); }
var n0 = /\/+/g;
function qu(e, t) { return typeof e == "object" && e !== null && e.key != null ? Cm("" + e.key) : t.toString(36); }
function Zs(e, t, n, r, i) { var o = typeof e; (o === "undefined" || o === "boolean") && (e = null); var s = !1; if (e === null)
    s = !0;
else
    switch (o) {
        case "string":
        case "number":
            s = !0;
            break;
        case "object": switch (e.$$typeof) {
            case as:
            case Sm: s = !0;
        }
    } if (s)
    return s = e, i = i(s), e = r === "" ? "." + qu(s, 0) : r, t0(i) ? (n = "", e != null && (n = e.replace(n0, "$&/") + "/"), Zs(i, t, n, "", function (h) { return h; })) : i != null && (Dc(i) && (i = Pm(i, n + (!i.key || s && s.key === i.key ? "" : ("" + i.key).replace(n0, "$&/") + "/") + e)), t.push(i)), 1; if (s = 0, r = r === "" ? "." : r + ":", t0(e))
    for (var a = 0; a < e.length; a++) {
        o = e[a];
        var f = r + qu(o, a);
        s += Zs(o, t, n, f, i);
    }
else if (f = Fm(e), typeof f == "function")
    for (e = f.call(e), a = 0; !(o = e.next()).done;)
        o = o.value, f = r + qu(o, a++), s += Zs(o, t, n, f, i);
else if (o === "object")
    throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead."); return s; }
function vs(e, t, n) { if (e == null)
    return e; var r = [], i = 0; return Zs(e, r, "", "", function (o) { return t.call(n, o, i++); }), r; }
function Mm(e) { if (e._status === -1) {
    var t = e._result;
    t = t(), t.then(function (n) { (e._status === 0 || e._status === -1) && (e._status = 1, e._result = n); }, function (n) { (e._status === 0 || e._status === -1) && (e._status = 2, e._result = n); }), e._status === -1 && (e._status = 0, e._result = t);
} if (e._status === 1)
    return e._result.default; throw e._result; }
var Ct = { current: null }, Qs = { transition: null }, $m = { ReactCurrentDispatcher: Ct, ReactCurrentBatchConfig: Qs, ReactCurrentOwner: Wc };
function lh() { throw Error("act(...) is not supported in production builds of React."); }
Ne.Children = { map: vs, forEach: function (e, t, n) { vs(e, function () { t.apply(this, arguments); }, n); }, count: function (e) { var t = 0; return vs(e, function () { t++; }), t; }, toArray: function (e) { return vs(e, function (t) { return t; }) || []; }, only: function (e) { if (!Dc(e))
        throw Error("React.Children.only expected to receive a single React element child."); return e; } };
Ne.Component = no;
Ne.Fragment = Tm;
Ne.Profiler = Am;
Ne.PureComponent = Hc;
Ne.StrictMode = Bm;
Ne.Suspense = Rm;
Ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = $m;
Ne.act = lh;
Ne.cloneElement = function (e, t, n) { if (e == null)
    throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + "."); var r = rh({}, e.props), i = e.key, o = e.ref, s = e._owner; if (t != null) {
    if (t.ref !== void 0 && (o = t.ref, s = Wc.current), t.key !== void 0 && (i = "" + t.key), e.type && e.type.defaultProps)
        var a = e.type.defaultProps;
    for (f in t)
        sh.call(t, f) && !ah.hasOwnProperty(f) && (r[f] = t[f] === void 0 && a !== void 0 ? a[f] : t[f]);
} var f = arguments.length - 2; if (f === 1)
    r.children = n;
else if (1 < f) {
    a = Array(f);
    for (var h = 0; h < f; h++)
        a[h] = arguments[h + 2];
    r.children = a;
} return { $$typeof: as, type: e.type, key: i, ref: o, props: r, _owner: s }; };
Ne.createContext = function (e) { return e = { $$typeof: km, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: Nm, _context: e }, e.Consumer = e; };
Ne.createElement = uh;
Ne.createFactory = function (e) { var t = uh.bind(null, e); return t.type = e, t; };
Ne.createRef = function () { return { current: null }; };
Ne.forwardRef = function (e) { return { $$typeof: Im, render: e }; };
Ne.isValidElement = Dc;
Ne.lazy = function (e) { return { $$typeof: Um, _payload: { _status: -1, _result: e }, _init: Mm }; };
Ne.memo = function (e, t) { return { $$typeof: Om, type: e, compare: t === void 0 ? null : t }; };
Ne.startTransition = function (e) { var t = Qs.transition; Qs.transition = {}; try {
    e();
}
finally {
    Qs.transition = t;
} };
Ne.unstable_act = lh;
Ne.useCallback = function (e, t) { return Ct.current.useCallback(e, t); };
Ne.useContext = function (e) { return Ct.current.useContext(e); };
Ne.useDebugValue = function () { };
Ne.useDeferredValue = function (e) { return Ct.current.useDeferredValue(e); };
Ne.useEffect = function (e, t) { return Ct.current.useEffect(e, t); };
Ne.useId = function () { return Ct.current.useId(); };
Ne.useImperativeHandle = function (e, t, n) { return Ct.current.useImperativeHandle(e, t, n); };
Ne.useInsertionEffect = function (e, t) { return Ct.current.useInsertionEffect(e, t); };
Ne.useLayoutEffect = function (e, t) { return Ct.current.useLayoutEffect(e, t); };
Ne.useMemo = function (e, t) { return Ct.current.useMemo(e, t); };
Ne.useReducer = function (e, t, n) { return Ct.current.useReducer(e, t, n); };
Ne.useRef = function (e) { return Ct.current.useRef(e); };
Ne.useState = function (e) { return Ct.current.useState(e); };
Ne.useSyncExternalStore = function (e, t, n) { return Ct.current.useSyncExternalStore(e, t, n); };
Ne.useTransition = function () { return Ct.current.useTransition(); };
Ne.version = "18.3.1";
th.exports = Ne;
var cu = th.exports;
const zm = Jd(cu); /**
* @license React
* react-jsx-runtime.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var Vm = cu, jm = Symbol.for("react.element"), Lm = Symbol.for("react.fragment"), qm = Object.prototype.hasOwnProperty, Hm = Vm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Gm = { key: !0, ref: !0, __self: !0, __source: !0 };
function ch(e, t, n) { var r, i = {}, o = null, s = null; n !== void 0 && (o = "" + n), t.key !== void 0 && (o = "" + t.key), t.ref !== void 0 && (s = t.ref); for (r in t)
    qm.call(t, r) && !Gm.hasOwnProperty(r) && (i[r] = t[r]); if (e && e.defaultProps)
    for (r in t = e.defaultProps, t)
        i[r] === void 0 && (i[r] = t[r]); return { $$typeof: jm, type: e, key: o, ref: s, props: i, _owner: Hm.current }; }
lu.Fragment = Lm;
lu.jsx = ch;
lu.jsxs = ch;
eh.exports = lu;
var pn = eh.exports, Ol = {}, fh = { exports: {} }, Kt = {}, dh = { exports: {} }, hh = {}; /**
* @license React
* scheduler.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
(function (e) { function t(H, ee) { var oe = H.length; H.push(ee); e: for (; 0 < oe;) {
    var re = oe - 1 >>> 1, ue = H[re];
    if (0 < i(ue, ee))
        H[re] = ee, H[oe] = ue, oe = re;
    else
        break e;
} } function n(H) { return H.length === 0 ? null : H[0]; } function r(H) { if (H.length === 0)
    return null; var ee = H[0], oe = H.pop(); if (oe !== ee) {
    H[0] = oe;
    e: for (var re = 0, ue = H.length, ne = ue >>> 1; re < ne;) {
        var _ = 2 * (re + 1) - 1, se = H[_], ce = _ + 1, ye = H[ce];
        if (0 > i(se, oe))
            ce < ue && 0 > i(ye, se) ? (H[re] = ye, H[ce] = oe, re = ce) : (H[re] = se, H[_] = oe, re = _);
        else if (ce < ue && 0 > i(ye, oe))
            H[re] = ye, H[ce] = oe, re = ce;
        else
            break e;
    }
} return ee; } function i(H, ee) { var oe = H.sortIndex - ee.sortIndex; return oe !== 0 ? oe : H.id - ee.id; } if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function () { return o.now(); };
}
else {
    var s = Date, a = s.now();
    e.unstable_now = function () { return s.now() - a; };
} var f = [], h = [], w = 1, b = null, x = 3, B = !1, y = !1, O = !1, M = typeof setTimeout == "function" ? setTimeout : null, A = typeof clearTimeout == "function" ? clearTimeout : null, v = typeof setImmediate < "u" ? setImmediate : null; typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling); function E(H) { for (var ee = n(h); ee !== null;) {
    if (ee.callback === null)
        r(h);
    else if (ee.startTime <= H)
        r(h), ee.sortIndex = ee.expirationTime, t(f, ee);
    else
        break;
    ee = n(h);
} } function z(H) { if (O = !1, E(H), !y)
    if (n(f) !== null)
        y = !0, Z(I);
    else {
        var ee = n(h);
        ee !== null && D(z, ee.startTime - H);
    } } function I(H, ee) { y = !1, O && (O = !1, A(W), W = -1), B = !0; var oe = x; try {
    for (E(ee), b = n(f); b !== null && (!(b.expirationTime > ee) || H && !de());) {
        var re = b.callback;
        if (typeof re == "function") {
            b.callback = null, x = b.priorityLevel;
            var ue = re(b.expirationTime <= ee);
            ee = e.unstable_now(), typeof ue == "function" ? b.callback = ue : b === n(f) && r(f), E(ee);
        }
        else
            r(f);
        b = n(f);
    }
    if (b !== null)
        var ne = !0;
    else {
        var _ = n(h);
        _ !== null && D(z, _.startTime - ee), ne = !1;
    }
    return ne;
}
finally {
    b = null, x = oe, B = !1;
} } var L = !1, V = null, W = -1, te = 5, K = -1; function de() { return !(e.unstable_now() - K < te); } function he() { if (V !== null) {
    var H = e.unstable_now();
    K = H;
    var ee = !0;
    try {
        ee = V(!0, H);
    }
    finally {
        ee ? U() : (L = !1, V = null);
    }
}
else
    L = !1; } var U; if (typeof v == "function")
    U = function () { v(he); };
else if (typeof MessageChannel < "u") {
    var $ = new MessageChannel, X = $.port2;
    $.port1.onmessage = he, U = function () { X.postMessage(null); };
}
else
    U = function () { M(he, 0); }; function Z(H) { V = H, L || (L = !0, U()); } function D(H, ee) { W = M(function () { H(e.unstable_now()); }, ee); } e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function (H) { H.callback = null; }, e.unstable_continueExecution = function () { y || B || (y = !0, Z(I)); }, e.unstable_forceFrameRate = function (H) { 0 > H || 125 < H ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : te = 0 < H ? Math.floor(1e3 / H) : 5; }, e.unstable_getCurrentPriorityLevel = function () { return x; }, e.unstable_getFirstCallbackNode = function () { return n(f); }, e.unstable_next = function (H) { switch (x) {
    case 1:
    case 2:
    case 3:
        var ee = 3;
        break;
    default: ee = x;
} var oe = x; x = ee; try {
    return H();
}
finally {
    x = oe;
} }, e.unstable_pauseExecution = function () { }, e.unstable_requestPaint = function () { }, e.unstable_runWithPriority = function (H, ee) { switch (H) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5: break;
    default: H = 3;
} var oe = x; x = H; try {
    return ee();
}
finally {
    x = oe;
} }, e.unstable_scheduleCallback = function (H, ee, oe) { var re = e.unstable_now(); switch (typeof oe == "object" && oe !== null ? (oe = oe.delay, oe = typeof oe == "number" && 0 < oe ? re + oe : re) : oe = re, H) {
    case 1:
        var ue = -1;
        break;
    case 2:
        ue = 250;
        break;
    case 5:
        ue = 1073741823;
        break;
    case 4:
        ue = 1e4;
        break;
    default: ue = 5e3;
} return ue = oe + ue, H = { id: w++, callback: ee, priorityLevel: H, startTime: oe, expirationTime: ue, sortIndex: -1 }, oe > re ? (H.sortIndex = oe, t(h, H), n(f) === null && H === n(h) && (O ? (A(W), W = -1) : O = !0, D(z, oe - re))) : (H.sortIndex = ue, t(f, H), y || B || (y = !0, Z(I))), H; }, e.unstable_shouldYield = de, e.unstable_wrapCallback = function (H) { var ee = x; return function () { var oe = x; x = ee; try {
    return H.apply(this, arguments);
}
finally {
    x = oe;
} }; }; })(hh);
dh.exports = hh;
var Wm = dh.exports; /**
* @license React
* react-dom.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var Dm = cu, Yt = Wm;
function le(e) { for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
    t += "&args[]=" + encodeURIComponent(arguments[n]); return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."; }
var ph = new Set, Vo = {};
function ci(e, t) { Wi(e, t), Wi(e + "Capture", t); }
function Wi(e, t) { for (Vo[e] = t, e = 0; e < t.length; e++)
    ph.add(t[e]); }
var Xn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Ul = Object.prototype.hasOwnProperty, Ym = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, r0 = {}, i0 = {};
function Km(e) { return Ul.call(i0, e) ? !0 : Ul.call(r0, e) ? !1 : Ym.test(e) ? i0[e] = !0 : (r0[e] = !0, !1); }
function Zm(e, t, n, r) { if (n !== null && n.type === 0)
    return !1; switch (typeof t) {
    case "function":
    case "symbol": return !0;
    case "boolean": return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
    default: return !1;
} }
function Qm(e, t, n, r) { if (t === null || typeof t > "u" || Zm(e, t, n, r))
    return !0; if (r)
    return !1; if (n !== null)
    switch (n.type) {
        case 3: return !t;
        case 4: return t === !1;
        case 5: return isNaN(t);
        case 6: return isNaN(t) || 1 > t;
    } return !1; }
function Mt(e, t, n, r, i, o, s) { this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = i, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = o, this.removeEmptyString = s; }
var xt = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function (e) { xt[e] = new Mt(e, 0, !1, e, null, !1, !1); });
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function (e) { var t = e[0]; xt[t] = new Mt(t, 1, !1, e[1], null, !1, !1); });
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) { xt[e] = new Mt(e, 2, !1, e.toLowerCase(), null, !1, !1); });
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function (e) { xt[e] = new Mt(e, 2, !1, e, null, !1, !1); });
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function (e) { xt[e] = new Mt(e, 3, !1, e.toLowerCase(), null, !1, !1); });
["checked", "multiple", "muted", "selected"].forEach(function (e) { xt[e] = new Mt(e, 3, !0, e, null, !1, !1); });
["capture", "download"].forEach(function (e) { xt[e] = new Mt(e, 4, !1, e, null, !1, !1); });
["cols", "rows", "size", "span"].forEach(function (e) { xt[e] = new Mt(e, 6, !1, e, null, !1, !1); });
["rowSpan", "start"].forEach(function (e) { xt[e] = new Mt(e, 5, !1, e.toLowerCase(), null, !1, !1); });
var Yc = /[\-:]([a-z])/g;
function Kc(e) { return e[1].toUpperCase(); }
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function (e) { var t = e.replace(Yc, Kc); xt[t] = new Mt(t, 1, !1, e, null, !1, !1); });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function (e) { var t = e.replace(Yc, Kc); xt[t] = new Mt(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1); });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) { var t = e.replace(Yc, Kc); xt[t] = new Mt(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1); });
["tabIndex", "crossOrigin"].forEach(function (e) { xt[e] = new Mt(e, 1, !1, e.toLowerCase(), null, !1, !1); });
xt.xlinkHref = new Mt("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function (e) { xt[e] = new Mt(e, 1, !1, e.toLowerCase(), null, !0, !0); });
function Zc(e, t, n, r) { var i = xt.hasOwnProperty(t) ? xt[t] : null; (i !== null ? i.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Qm(t, n, i, r) && (n = null), r || i === null ? Km(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : i.mustUseProperty ? e[i.propertyName] = n === null ? i.type === 3 ? !1 : "" : n : (t = i.attributeName, r = i.attributeNamespace, n === null ? e.removeAttribute(t) : (i = i.type, n = i === 3 || i === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n)))); }
var rr = Dm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, xs = Symbol.for("react.element"), Ei = Symbol.for("react.portal"), bi = Symbol.for("react.fragment"), Qc = Symbol.for("react.strict_mode"), Fl = Symbol.for("react.profiler"), yh = Symbol.for("react.provider"), mh = Symbol.for("react.context"), Xc = Symbol.for("react.forward_ref"), Pl = Symbol.for("react.suspense"), Cl = Symbol.for("react.suspense_list"), Jc = Symbol.for("react.memo"), dr = Symbol.for("react.lazy"), gh = Symbol.for("react.offscreen"), o0 = Symbol.iterator;
function uo(e) { return e === null || typeof e != "object" ? null : (e = o0 && e[o0] || e["@@iterator"], typeof e == "function" ? e : null); }
var Ye = Object.assign, Hu;
function wo(e) {
    if (Hu === void 0)
        try {
            throw Error();
        }
        catch (n) {
            var t = n.stack.trim().match(/\n( *(at )?)/);
            Hu = t && t[1] || "";
        }
    return `
` + Hu + e;
}
var Gu = !1;
function Wu(e, t) {
    if (!e || Gu)
        return "";
    Gu = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t)
            if (t = function () { throw Error(); }, Object.defineProperty(t.prototype, "props", { set: function () { throw Error(); } }), typeof Reflect == "object" && Reflect.construct) {
                try {
                    Reflect.construct(t, []);
                }
                catch (h) {
                    var r = h;
                }
                Reflect.construct(e, [], t);
            }
            else {
                try {
                    t.call();
                }
                catch (h) {
                    r = h;
                }
                e.call(t.prototype);
            }
        else {
            try {
                throw Error();
            }
            catch (h) {
                r = h;
            }
            e();
        }
    }
    catch (h) {
        if (h && r && typeof h.stack == "string") {
            for (var i = h.stack.split(`
`), o = r.stack.split(`
`), s = i.length - 1, a = o.length - 1; 1 <= s && 0 <= a && i[s] !== o[a];)
                a--;
            for (; 1 <= s && 0 <= a; s--, a--)
                if (i[s] !== o[a]) {
                    if (s !== 1 || a !== 1)
                        do
                            if (s--, a--, 0 > a || i[s] !== o[a]) {
                                var f = `
` + i[s].replace(" at new ", " at ");
                                return e.displayName && f.includes("<anonymous>") && (f = f.replace("<anonymous>", e.displayName)), f;
                            }
                        while (1 <= s && 0 <= a);
                    break;
                }
        }
    }
    finally {
        Gu = !1, Error.prepareStackTrace = n;
    }
    return (e = e ? e.displayName || e.name : "") ? wo(e) : "";
}
function Xm(e) { switch (e.tag) {
    case 5: return wo(e.type);
    case 16: return wo("Lazy");
    case 13: return wo("Suspense");
    case 19: return wo("SuspenseList");
    case 0:
    case 2:
    case 15: return e = Wu(e.type, !1), e;
    case 11: return e = Wu(e.type.render, !1), e;
    case 1: return e = Wu(e.type, !0), e;
    default: return "";
} }
function Ml(e) { if (e == null)
    return null; if (typeof e == "function")
    return e.displayName || e.name || null; if (typeof e == "string")
    return e; switch (e) {
    case bi: return "Fragment";
    case Ei: return "Portal";
    case Fl: return "Profiler";
    case Qc: return "StrictMode";
    case Pl: return "Suspense";
    case Cl: return "SuspenseList";
} if (typeof e == "object")
    switch (e.$$typeof) {
        case mh: return (e.displayName || "Context") + ".Consumer";
        case yh: return (e._context.displayName || "Context") + ".Provider";
        case Xc:
            var t = e.render;
            return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case Jc: return t = e.displayName || null, t !== null ? t : Ml(e.type) || "Memo";
        case dr:
            t = e._payload, e = e._init;
            try {
                return Ml(e(t));
            }
            catch { }
    } return null; }
function Jm(e) { var t = e.type; switch (e.tag) {
    case 24: return "Cache";
    case 9: return (t.displayName || "Context") + ".Consumer";
    case 10: return (t._context.displayName || "Context") + ".Provider";
    case 18: return "DehydratedFragment";
    case 11: return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
    case 7: return "Fragment";
    case 5: return t;
    case 4: return "Portal";
    case 3: return "Root";
    case 6: return "Text";
    case 16: return Ml(t);
    case 8: return t === Qc ? "StrictMode" : "Mode";
    case 22: return "Offscreen";
    case 12: return "Profiler";
    case 21: return "Scope";
    case 13: return "Suspense";
    case 19: return "SuspenseList";
    case 25: return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
        if (typeof t == "function")
            return t.displayName || t.name || null;
        if (typeof t == "string")
            return t;
} return null; }
function Rr(e) { switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined": return e;
    case "object": return e;
    default: return "";
} }
function wh(e) { var t = e.type; return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio"); }
function eg(e) { var t = wh(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t]; if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
    var i = n.get, o = n.set;
    return Object.defineProperty(e, t, { configurable: !0, get: function () { return i.call(this); }, set: function (s) { r = "" + s, o.call(this, s); } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function () { return r; }, setValue: function (s) { r = "" + s; }, stopTracking: function () { e._valueTracker = null, delete e[t]; } };
} }
function Es(e) { e._valueTracker || (e._valueTracker = eg(e)); }
function _h(e) { if (!e)
    return !1; var t = e._valueTracker; if (!t)
    return !0; var n = t.getValue(), r = ""; return e && (r = wh(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1; }
function ka(e) { if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
    return null; try {
    return e.activeElement || e.body;
}
catch {
    return e.body;
} }
function $l(e, t) { var n = t.checked; return Ye({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked }); }
function s0(e, t) { var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked; n = Rr(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null }; }
function vh(e, t) { t = t.checked, t != null && Zc(e, "checked", t, !1); }
function zl(e, t) { vh(e, t); var n = Rr(t.value), r = t.type; if (n != null)
    r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
} t.hasOwnProperty("value") ? Vl(e, t.type, n) : t.hasOwnProperty("defaultValue") && Vl(e, t.type, Rr(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked); }
function a0(e, t, n) { if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null))
        return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
} n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n); }
function Vl(e, t, n) { (t !== "number" || ka(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n)); }
var _o = Array.isArray;
function $i(e, t, n, r) { if (e = e.options, t) {
    t = {};
    for (var i = 0; i < n.length; i++)
        t["$" + n[i]] = !0;
    for (n = 0; n < e.length; n++)
        i = t.hasOwnProperty("$" + e[n].value), e[n].selected !== i && (e[n].selected = i), i && r && (e[n].defaultSelected = !0);
}
else {
    for (n = "" + Rr(n), t = null, i = 0; i < e.length; i++) {
        if (e[i].value === n) {
            e[i].selected = !0, r && (e[i].defaultSelected = !0);
            return;
        }
        t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
} }
function jl(e, t) { if (t.dangerouslySetInnerHTML != null)
    throw Error(le(91)); return Ye({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue }); }
function u0(e, t) { var n = t.value; if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
        if (t != null)
            throw Error(le(92));
        if (_o(n)) {
            if (1 < n.length)
                throw Error(le(93));
            n = n[0];
        }
        t = n;
    }
    t == null && (t = ""), n = t;
} e._wrapperState = { initialValue: Rr(n) }; }
function xh(e, t) { var n = Rr(t.value), r = Rr(t.defaultValue); n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r); }
function l0(e) { var t = e.textContent; t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t); }
function Eh(e) { switch (e) {
    case "svg": return "http://www.w3.org/2000/svg";
    case "math": return "http://www.w3.org/1998/Math/MathML";
    default: return "http://www.w3.org/1999/xhtml";
} }
function Ll(e, t) { return e == null || e === "http://www.w3.org/1999/xhtml" ? Eh(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e; }
var bs, bh = function (e) { return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function (t, n, r, i) { MSApp.execUnsafeLocalFunction(function () { return e(t, n, r, i); }); } : e; }(function (e, t) { if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
    e.innerHTML = t;
else {
    for (bs = bs || document.createElement("div"), bs.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = bs.firstChild; e.firstChild;)
        e.removeChild(e.firstChild);
    for (; t.firstChild;)
        e.appendChild(t.firstChild);
} });
function jo(e, t) { if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
    }
} e.textContent = t; }
var Ao = { animationIterationCount: !0, aspectRatio: !0, borderImageOutset: !0, borderImageSlice: !0, borderImageWidth: !0, boxFlex: !0, boxFlexGroup: !0, boxOrdinalGroup: !0, columnCount: !0, columns: !0, flex: !0, flexGrow: !0, flexPositive: !0, flexShrink: !0, flexNegative: !0, flexOrder: !0, gridArea: !0, gridRow: !0, gridRowEnd: !0, gridRowSpan: !0, gridRowStart: !0, gridColumn: !0, gridColumnEnd: !0, gridColumnSpan: !0, gridColumnStart: !0, fontWeight: !0, lineClamp: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, tabSize: !0, widows: !0, zIndex: !0, zoom: !0, fillOpacity: !0, floodOpacity: !0, stopOpacity: !0, strokeDasharray: !0, strokeDashoffset: !0, strokeMiterlimit: !0, strokeOpacity: !0, strokeWidth: !0 }, tg = ["Webkit", "ms", "Moz", "O"];
Object.keys(Ao).forEach(function (e) { tg.forEach(function (t) { t = t + e.charAt(0).toUpperCase() + e.substring(1), Ao[t] = Ao[e]; }); });
function Sh(e, t, n) { return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Ao.hasOwnProperty(e) && Ao[e] ? ("" + t).trim() : t + "px"; }
function Th(e, t) { e = e.style; for (var n in t)
    if (t.hasOwnProperty(n)) {
        var r = n.indexOf("--") === 0, i = Sh(n, t[n], r);
        n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : e[n] = i;
    } }
var ng = Ye({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function ql(e, t) { if (t) {
    if (ng[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
        throw Error(le(137, e));
    if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null)
            throw Error(le(60));
        if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML))
            throw Error(le(61));
    }
    if (t.style != null && typeof t.style != "object")
        throw Error(le(62));
} }
function Hl(e, t) { if (e.indexOf("-") === -1)
    return typeof t.is == "string"; switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph": return !1;
    default: return !0;
} }
var Gl = null;
function ef(e) { return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e; }
var Wl = null, zi = null, Vi = null;
function c0(e) { if (e = cs(e)) {
    if (typeof Wl != "function")
        throw Error(le(280));
    var t = e.stateNode;
    t && (t = yu(t), Wl(e.stateNode, e.type, t));
} }
function Bh(e) { zi ? Vi ? Vi.push(e) : Vi = [e] : zi = e; }
function Ah() { if (zi) {
    var e = zi, t = Vi;
    if (Vi = zi = null, c0(e), t)
        for (e = 0; e < t.length; e++)
            c0(t[e]);
} }
function Nh(e, t) { return e(t); }
function kh() { }
var Du = !1;
function Ih(e, t, n) { if (Du)
    return e(t, n); Du = !0; try {
    return Nh(e, t, n);
}
finally {
    Du = !1, (zi !== null || Vi !== null) && (kh(), Ah());
} }
function Lo(e, t) { var n = e.stateNode; if (n === null)
    return null; var r = yu(n); if (r === null)
    return null; n = r[t]; e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
        (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
        break e;
    default: e = !1;
} if (e)
    return null; if (n && typeof n != "function")
    throw Error(le(231, t, typeof n)); return n; }
var Dl = !1;
if (Xn)
    try {
        var lo = {};
        Object.defineProperty(lo, "passive", { get: function () { Dl = !0; } }), window.addEventListener("test", lo, lo), window.removeEventListener("test", lo, lo);
    }
    catch {
        Dl = !1;
    }
function rg(e, t, n, r, i, o, s, a, f) { var h = Array.prototype.slice.call(arguments, 3); try {
    t.apply(n, h);
}
catch (w) {
    this.onError(w);
} }
var No = !1, Ia = null, Ra = !1, Yl = null, ig = { onError: function (e) { No = !0, Ia = e; } };
function og(e, t, n, r, i, o, s, a, f) { No = !1, Ia = null, rg.apply(ig, arguments); }
function sg(e, t, n, r, i, o, s, a, f) { if (og.apply(this, arguments), No) {
    if (No) {
        var h = Ia;
        No = !1, Ia = null;
    }
    else
        throw Error(le(198));
    Ra || (Ra = !0, Yl = h);
} }
function fi(e) { var t = e, n = e; if (e.alternate)
    for (; t.return;)
        t = t.return;
else {
    e = t;
    do
        t = e, t.flags & 4098 && (n = t.return), e = t.return;
    while (e);
} return t.tag === 3 ? n : null; }
function Rh(e) { if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null)
        return t.dehydrated;
} return null; }
function f0(e) { if (fi(e) !== e)
    throw Error(le(188)); }
function ag(e) { var t = e.alternate; if (!t) {
    if (t = fi(e), t === null)
        throw Error(le(188));
    return t !== e ? null : e;
} for (var n = e, r = t;;) {
    var i = n.return;
    if (i === null)
        break;
    var o = i.alternate;
    if (o === null) {
        if (r = i.return, r !== null) {
            n = r;
            continue;
        }
        break;
    }
    if (i.child === o.child) {
        for (o = i.child; o;) {
            if (o === n)
                return f0(i), e;
            if (o === r)
                return f0(i), t;
            o = o.sibling;
        }
        throw Error(le(188));
    }
    if (n.return !== r.return)
        n = i, r = o;
    else {
        for (var s = !1, a = i.child; a;) {
            if (a === n) {
                s = !0, n = i, r = o;
                break;
            }
            if (a === r) {
                s = !0, r = i, n = o;
                break;
            }
            a = a.sibling;
        }
        if (!s) {
            for (a = o.child; a;) {
                if (a === n) {
                    s = !0, n = o, r = i;
                    break;
                }
                if (a === r) {
                    s = !0, r = o, n = i;
                    break;
                }
                a = a.sibling;
            }
            if (!s)
                throw Error(le(189));
        }
    }
    if (n.alternate !== r)
        throw Error(le(190));
} if (n.tag !== 3)
    throw Error(le(188)); return n.stateNode.current === n ? e : t; }
function Oh(e) { return e = ag(e), e !== null ? Uh(e) : null; }
function Uh(e) { if (e.tag === 5 || e.tag === 6)
    return e; for (e = e.child; e !== null;) {
    var t = Uh(e);
    if (t !== null)
        return t;
    e = e.sibling;
} return null; }
var Fh = Yt.unstable_scheduleCallback, d0 = Yt.unstable_cancelCallback, ug = Yt.unstable_shouldYield, lg = Yt.unstable_requestPaint, et = Yt.unstable_now, cg = Yt.unstable_getCurrentPriorityLevel, tf = Yt.unstable_ImmediatePriority, Ph = Yt.unstable_UserBlockingPriority, Oa = Yt.unstable_NormalPriority, fg = Yt.unstable_LowPriority, Ch = Yt.unstable_IdlePriority, fu = null, Mn = null;
function dg(e) { if (Mn && typeof Mn.onCommitFiberRoot == "function")
    try {
        Mn.onCommitFiberRoot(fu, e, void 0, (e.current.flags & 128) === 128);
    }
    catch { } }
var xn = Math.clz32 ? Math.clz32 : yg, hg = Math.log, pg = Math.LN2;
function yg(e) { return e >>>= 0, e === 0 ? 32 : 31 - (hg(e) / pg | 0) | 0; }
var Ss = 64, Ts = 4194304;
function vo(e) { switch (e & -e) {
    case 1: return 1;
    case 2: return 2;
    case 4: return 4;
    case 8: return 8;
    case 16: return 16;
    case 32: return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152: return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864: return e & 130023424;
    case 134217728: return 134217728;
    case 268435456: return 268435456;
    case 536870912: return 536870912;
    case 1073741824: return 1073741824;
    default: return e;
} }
function Ua(e, t) { var n = e.pendingLanes; if (n === 0)
    return 0; var r = 0, i = e.suspendedLanes, o = e.pingedLanes, s = n & 268435455; if (s !== 0) {
    var a = s & ~i;
    a !== 0 ? r = vo(a) : (o &= s, o !== 0 && (r = vo(o)));
}
else
    s = n & ~i, s !== 0 ? r = vo(s) : o !== 0 && (r = vo(o)); if (r === 0)
    return 0; if (t !== 0 && t !== r && !(t & i) && (i = r & -r, o = t & -t, i >= o || i === 16 && (o & 4194240) !== 0))
    return t; if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0)
    for (e = e.entanglements, t &= r; 0 < t;)
        n = 31 - xn(t), i = 1 << n, r |= e[n], t &= ~i; return r; }
function mg(e, t) { switch (e) {
    case 1:
    case 2:
    case 4: return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152: return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864: return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824: return -1;
    default: return -1;
} }
function gg(e, t) { for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, o = e.pendingLanes; 0 < o;) {
    var s = 31 - xn(o), a = 1 << s, f = i[s];
    f === -1 ? (!(a & n) || a & r) && (i[s] = mg(a, t)) : f <= t && (e.expiredLanes |= a), o &= ~a;
} }
function Kl(e) { return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0; }
function Mh() { var e = Ss; return Ss <<= 1, !(Ss & 4194240) && (Ss = 64), e; }
function Yu(e) { for (var t = [], n = 0; 31 > n; n++)
    t.push(e); return t; }
function us(e, t, n) { e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - xn(t), e[t] = n; }
function wg(e, t) { var n = e.pendingLanes & ~t; e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements; var r = e.eventTimes; for (e = e.expirationTimes; 0 < n;) {
    var i = 31 - xn(n), o = 1 << i;
    t[i] = 0, r[i] = -1, e[i] = -1, n &= ~o;
} }
function nf(e, t) { var n = e.entangledLanes |= t; for (e = e.entanglements; n;) {
    var r = 31 - xn(n), i = 1 << r;
    i & t | e[r] & t && (e[r] |= t), n &= ~i;
} }
var Ce = 0;
function $h(e) { return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1; }
var zh, rf, Vh, jh, Lh, Zl = !1, Bs = [], Er = null, br = null, Sr = null, qo = new Map, Ho = new Map, mr = [], _g = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function h0(e, t) { switch (e) {
    case "focusin":
    case "focusout":
        Er = null;
        break;
    case "dragenter":
    case "dragleave":
        br = null;
        break;
    case "mouseover":
    case "mouseout":
        Sr = null;
        break;
    case "pointerover":
    case "pointerout":
        qo.delete(t.pointerId);
        break;
    case "gotpointercapture":
    case "lostpointercapture": Ho.delete(t.pointerId);
} }
function co(e, t, n, r, i, o) { return e === null || e.nativeEvent !== o ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: o, targetContainers: [i] }, t !== null && (t = cs(t), t !== null && rf(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, i !== null && t.indexOf(i) === -1 && t.push(i), e); }
function vg(e, t, n, r, i) { switch (t) {
    case "focusin": return Er = co(Er, e, t, n, r, i), !0;
    case "dragenter": return br = co(br, e, t, n, r, i), !0;
    case "mouseover": return Sr = co(Sr, e, t, n, r, i), !0;
    case "pointerover":
        var o = i.pointerId;
        return qo.set(o, co(qo.get(o) || null, e, t, n, r, i)), !0;
    case "gotpointercapture": return o = i.pointerId, Ho.set(o, co(Ho.get(o) || null, e, t, n, r, i)), !0;
} return !1; }
function qh(e) { var t = Yr(e.target); if (t !== null) {
    var n = fi(t);
    if (n !== null) {
        if (t = n.tag, t === 13) {
            if (t = Rh(n), t !== null) {
                e.blockedOn = t, Lh(e.priority, function () { Vh(n); });
                return;
            }
        }
        else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
            e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
            return;
        }
    }
} e.blockedOn = null; }
function Xs(e) { if (e.blockedOn !== null)
    return !1; for (var t = e.targetContainers; 0 < t.length;) {
    var n = Ql(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
        n = e.nativeEvent;
        var r = new n.constructor(n.type, n);
        Gl = r, n.target.dispatchEvent(r), Gl = null;
    }
    else
        return t = cs(n), t !== null && rf(t), e.blockedOn = n, !1;
    t.shift();
} return !0; }
function p0(e, t, n) { Xs(e) && n.delete(t); }
function xg() { Zl = !1, Er !== null && Xs(Er) && (Er = null), br !== null && Xs(br) && (br = null), Sr !== null && Xs(Sr) && (Sr = null), qo.forEach(p0), Ho.forEach(p0); }
function fo(e, t) { e.blockedOn === t && (e.blockedOn = null, Zl || (Zl = !0, Yt.unstable_scheduleCallback(Yt.unstable_NormalPriority, xg))); }
function Go(e) { function t(i) { return fo(i, e); } if (0 < Bs.length) {
    fo(Bs[0], e);
    for (var n = 1; n < Bs.length; n++) {
        var r = Bs[n];
        r.blockedOn === e && (r.blockedOn = null);
    }
} for (Er !== null && fo(Er, e), br !== null && fo(br, e), Sr !== null && fo(Sr, e), qo.forEach(t), Ho.forEach(t), n = 0; n < mr.length; n++)
    r = mr[n], r.blockedOn === e && (r.blockedOn = null); for (; 0 < mr.length && (n = mr[0], n.blockedOn === null);)
    qh(n), n.blockedOn === null && mr.shift(); }
var ji = rr.ReactCurrentBatchConfig, Fa = !0;
function Eg(e, t, n, r) { var i = Ce, o = ji.transition; ji.transition = null; try {
    Ce = 1, of(e, t, n, r);
}
finally {
    Ce = i, ji.transition = o;
} }
function bg(e, t, n, r) { var i = Ce, o = ji.transition; ji.transition = null; try {
    Ce = 4, of(e, t, n, r);
}
finally {
    Ce = i, ji.transition = o;
} }
function of(e, t, n, r) { if (Fa) {
    var i = Ql(e, t, n, r);
    if (i === null)
        il(e, t, r, Pa, n), h0(e, r);
    else if (vg(i, e, t, n, r))
        r.stopPropagation();
    else if (h0(e, r), t & 4 && -1 < _g.indexOf(e)) {
        for (; i !== null;) {
            var o = cs(i);
            if (o !== null && zh(o), o = Ql(e, t, n, r), o === null && il(e, t, r, Pa, n), o === i)
                break;
            i = o;
        }
        i !== null && r.stopPropagation();
    }
    else
        il(e, t, r, null, n);
} }
var Pa = null;
function Ql(e, t, n, r) { if (Pa = null, e = ef(r), e = Yr(e), e !== null)
    if (t = fi(e), t === null)
        e = null;
    else if (n = t.tag, n === 13) {
        if (e = Rh(t), e !== null)
            return e;
        e = null;
    }
    else if (n === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null;
    }
    else
        t !== e && (e = null); return Pa = e, null; }
function Hh(e) { switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart": return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave": return 4;
    case "message": switch (cg()) {
        case tf: return 1;
        case Ph: return 4;
        case Oa:
        case fg: return 16;
        case Ch: return 536870912;
        default: return 16;
    }
    default: return 16;
} }
var vr = null, sf = null, Js = null;
function Gh() { if (Js)
    return Js; var e, t = sf, n = t.length, r, i = "value" in vr ? vr.value : vr.textContent, o = i.length; for (e = 0; e < n && t[e] === i[e]; e++)
    ; var s = n - e; for (r = 1; r <= s && t[n - r] === i[o - r]; r++)
    ; return Js = i.slice(e, 1 < r ? 1 - r : void 0); }
function ea(e) { var t = e.keyCode; return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0; }
function As() { return !0; }
function y0() { return !1; }
function Zt(e) { function t(n, r, i, o, s) { this._reactName = n, this._targetInst = i, this.type = r, this.nativeEvent = o, this.target = s, this.currentTarget = null; for (var a in e)
    e.hasOwnProperty(a) && (n = e[a], this[a] = n ? n(o) : o[a]); return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? As : y0, this.isPropagationStopped = y0, this; } return Ye(t.prototype, { preventDefault: function () { this.defaultPrevented = !0; var n = this.nativeEvent; n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = As); }, stopPropagation: function () { var n = this.nativeEvent; n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = As); }, persist: function () { }, isPersistent: As }), t; }
var ro = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function (e) { return e.timeStamp || Date.now(); }, defaultPrevented: 0, isTrusted: 0 }, af = Zt(ro), ls = Ye({}, ro, { view: 0, detail: 0 }), Sg = Zt(ls), Ku, Zu, ho, du = Ye({}, ls, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: uf, button: 0, buttons: 0, relatedTarget: function (e) { return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget; }, movementX: function (e) { return "movementX" in e ? e.movementX : (e !== ho && (ho && e.type === "mousemove" ? (Ku = e.screenX - ho.screenX, Zu = e.screenY - ho.screenY) : Zu = Ku = 0, ho = e), Ku); }, movementY: function (e) { return "movementY" in e ? e.movementY : Zu; } }), m0 = Zt(du), Tg = Ye({}, du, { dataTransfer: 0 }), Bg = Zt(Tg), Ag = Ye({}, ls, { relatedTarget: 0 }), Qu = Zt(Ag), Ng = Ye({}, ro, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), kg = Zt(Ng), Ig = Ye({}, ro, { clipboardData: function (e) { return "clipboardData" in e ? e.clipboardData : window.clipboardData; } }), Rg = Zt(Ig), Og = Ye({}, ro, { data: 0 }), g0 = Zt(Og), Ug = { Esc: "Escape", Spacebar: " ", Left: "ArrowLeft", Up: "ArrowUp", Right: "ArrowRight", Down: "ArrowDown", Del: "Delete", Win: "OS", Menu: "ContextMenu", Apps: "ContextMenu", Scroll: "ScrollLock", MozPrintableKey: "Unidentified" }, Fg = { 8: "Backspace", 9: "Tab", 12: "Clear", 13: "Enter", 16: "Shift", 17: "Control", 18: "Alt", 19: "Pause", 20: "CapsLock", 27: "Escape", 32: " ", 33: "PageUp", 34: "PageDown", 35: "End", 36: "Home", 37: "ArrowLeft", 38: "ArrowUp", 39: "ArrowRight", 40: "ArrowDown", 45: "Insert", 46: "Delete", 112: "F1", 113: "F2", 114: "F3", 115: "F4", 116: "F5", 117: "F6", 118: "F7", 119: "F8", 120: "F9", 121: "F10", 122: "F11", 123: "F12", 144: "NumLock", 145: "ScrollLock", 224: "Meta" }, Pg = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function Cg(e) { var t = this.nativeEvent; return t.getModifierState ? t.getModifierState(e) : (e = Pg[e]) ? !!t[e] : !1; }
function uf() { return Cg; }
var Mg = Ye({}, ls, { key: function (e) { if (e.key) {
        var t = Ug[e.key] || e.key;
        if (t !== "Unidentified")
            return t;
    } return e.type === "keypress" ? (e = ea(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Fg[e.keyCode] || "Unidentified" : ""; }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: uf, charCode: function (e) { return e.type === "keypress" ? ea(e) : 0; }, keyCode: function (e) { return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0; }, which: function (e) { return e.type === "keypress" ? ea(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0; } }), $g = Zt(Mg), zg = Ye({}, du, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), w0 = Zt(zg), Vg = Ye({}, ls, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: uf }), jg = Zt(Vg), Lg = Ye({}, ro, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), qg = Zt(Lg), Hg = Ye({}, du, { deltaX: function (e) { return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0; }, deltaY: function (e) { return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0; }, deltaZ: 0, deltaMode: 0 }), Gg = Zt(Hg), Wg = [9, 13, 27, 32], lf = Xn && "CompositionEvent" in window, ko = null;
Xn && "documentMode" in document && (ko = document.documentMode);
var Dg = Xn && "TextEvent" in window && !ko, Wh = Xn && (!lf || ko && 8 < ko && 11 >= ko), _0 = String.fromCharCode(32), v0 = !1;
function Dh(e, t) { switch (e) {
    case "keyup": return Wg.indexOf(t.keyCode) !== -1;
    case "keydown": return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout": return !0;
    default: return !1;
} }
function Yh(e) { return e = e.detail, typeof e == "object" && "data" in e ? e.data : null; }
var Si = !1;
function Yg(e, t) { switch (e) {
    case "compositionend": return Yh(t);
    case "keypress": return t.which !== 32 ? null : (v0 = !0, _0);
    case "textInput": return e = t.data, e === _0 && v0 ? null : e;
    default: return null;
} }
function Kg(e, t) { if (Si)
    return e === "compositionend" || !lf && Dh(e, t) ? (e = Gh(), Js = sf = vr = null, Si = !1, e) : null; switch (e) {
    case "paste": return null;
    case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
            if (t.char && 1 < t.char.length)
                return t.char;
            if (t.which)
                return String.fromCharCode(t.which);
        }
        return null;
    case "compositionend": return Wh && t.locale !== "ko" ? null : t.data;
    default: return null;
} }
var Zg = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function x0(e) { var t = e && e.nodeName && e.nodeName.toLowerCase(); return t === "input" ? !!Zg[e.type] : t === "textarea"; }
function Kh(e, t, n, r) { Bh(r), t = Ca(t, "onChange"), 0 < t.length && (n = new af("onChange", "change", null, n, r), e.push({ event: n, listeners: t })); }
var Io = null, Wo = null;
function Qg(e) { sp(e, 0); }
function hu(e) { var t = Ai(e); if (_h(t))
    return e; }
function Xg(e, t) { if (e === "change")
    return t; }
var Zh = !1;
if (Xn) {
    var Xu;
    if (Xn) {
        var Ju = "oninput" in document;
        if (!Ju) {
            var E0 = document.createElement("div");
            E0.setAttribute("oninput", "return;"), Ju = typeof E0.oninput == "function";
        }
        Xu = Ju;
    }
    else
        Xu = !1;
    Zh = Xu && (!document.documentMode || 9 < document.documentMode);
}
function b0() { Io && (Io.detachEvent("onpropertychange", Qh), Wo = Io = null); }
function Qh(e) { if (e.propertyName === "value" && hu(Wo)) {
    var t = [];
    Kh(t, Wo, e, ef(e)), Ih(Qg, t);
} }
function Jg(e, t, n) { e === "focusin" ? (b0(), Io = t, Wo = n, Io.attachEvent("onpropertychange", Qh)) : e === "focusout" && b0(); }
function ew(e) { if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return hu(Wo); }
function tw(e, t) { if (e === "click")
    return hu(t); }
function nw(e, t) { if (e === "input" || e === "change")
    return hu(t); }
function rw(e, t) { return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t; }
var bn = typeof Object.is == "function" ? Object.is : rw;
function Do(e, t) { if (bn(e, t))
    return !0; if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1; var n = Object.keys(e), r = Object.keys(t); if (n.length !== r.length)
    return !1; for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!Ul.call(t, i) || !bn(e[i], t[i]))
        return !1;
} return !0; }
function S0(e) { for (; e && e.firstChild;)
    e = e.firstChild; return e; }
function T0(e, t) { var n = S0(e); e = 0; for (var r; n;) {
    if (n.nodeType === 3) {
        if (r = e + n.textContent.length, e <= t && r >= t)
            return { node: n, offset: t - e };
        e = r;
    }
    e: {
        for (; n;) {
            if (n.nextSibling) {
                n = n.nextSibling;
                break e;
            }
            n = n.parentNode;
        }
        n = void 0;
    }
    n = S0(n);
} }
function Xh(e, t) { return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Xh(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1; }
function Jh() { for (var e = window, t = ka(); t instanceof e.HTMLIFrameElement;) {
    try {
        var n = typeof t.contentWindow.location.href == "string";
    }
    catch {
        n = !1;
    }
    if (n)
        e = t.contentWindow;
    else
        break;
    t = ka(e.document);
} return t; }
function cf(e) { var t = e && e.nodeName && e.nodeName.toLowerCase(); return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true"); }
function iw(e) { var t = Jh(), n = e.focusedElem, r = e.selectionRange; if (t !== n && n && n.ownerDocument && Xh(n.ownerDocument.documentElement, n)) {
    if (r !== null && cf(n)) {
        if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n)
            n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
        else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
            e = e.getSelection();
            var i = n.textContent.length, o = Math.min(r.start, i);
            r = r.end === void 0 ? o : Math.min(r.end, i), !e.extend && o > r && (i = r, r = o, o = i), i = T0(n, o);
            var s = T0(n, r);
            i && s && (e.rangeCount !== 1 || e.anchorNode !== i.node || e.anchorOffset !== i.offset || e.focusNode !== s.node || e.focusOffset !== s.offset) && (t = t.createRange(), t.setStart(i.node, i.offset), e.removeAllRanges(), o > r ? (e.addRange(t), e.extend(s.node, s.offset)) : (t.setEnd(s.node, s.offset), e.addRange(t)));
        }
    }
    for (t = [], e = n; e = e.parentNode;)
        e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
        e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
} }
var ow = Xn && "documentMode" in document && 11 >= document.documentMode, Ti = null, Xl = null, Ro = null, Jl = !1;
function B0(e, t, n) { var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument; Jl || Ti == null || Ti !== ka(r) || (r = Ti, "selectionStart" in r && cf(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), Ro && Do(Ro, r) || (Ro = r, r = Ca(Xl, "onSelect"), 0 < r.length && (t = new af("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = Ti))); }
function Ns(e, t) { var n = {}; return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n; }
var Bi = { animationend: Ns("Animation", "AnimationEnd"), animationiteration: Ns("Animation", "AnimationIteration"), animationstart: Ns("Animation", "AnimationStart"), transitionend: Ns("Transition", "TransitionEnd") }, el = {}, ep = {};
Xn && (ep = document.createElement("div").style, "AnimationEvent" in window || (delete Bi.animationend.animation, delete Bi.animationiteration.animation, delete Bi.animationstart.animation), "TransitionEvent" in window || delete Bi.transitionend.transition);
function pu(e) { if (el[e])
    return el[e]; if (!Bi[e])
    return e; var t = Bi[e], n; for (n in t)
    if (t.hasOwnProperty(n) && n in ep)
        return el[e] = t[n]; return e; }
var tp = pu("animationend"), np = pu("animationiteration"), rp = pu("animationstart"), ip = pu("transitionend"), op = new Map, A0 = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function Fr(e, t) { op.set(e, t), ci(t, [e]); }
for (var tl = 0; tl < A0.length; tl++) {
    var nl = A0[tl], sw = nl.toLowerCase(), aw = nl[0].toUpperCase() + nl.slice(1);
    Fr(sw, "on" + aw);
}
Fr(tp, "onAnimationEnd");
Fr(np, "onAnimationIteration");
Fr(rp, "onAnimationStart");
Fr("dblclick", "onDoubleClick");
Fr("focusin", "onFocus");
Fr("focusout", "onBlur");
Fr(ip, "onTransitionEnd");
Wi("onMouseEnter", ["mouseout", "mouseover"]);
Wi("onMouseLeave", ["mouseout", "mouseover"]);
Wi("onPointerEnter", ["pointerout", "pointerover"]);
Wi("onPointerLeave", ["pointerout", "pointerover"]);
ci("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
ci("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
ci("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
ci("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
ci("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
ci("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var xo = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), uw = new Set("cancel close invalid load scroll toggle".split(" ").concat(xo));
function N0(e, t, n) { var r = e.type || "unknown-event"; e.currentTarget = n, sg(r, t, void 0, e), e.currentTarget = null; }
function sp(e, t) { t = (t & 4) !== 0; for (var n = 0; n < e.length; n++) {
    var r = e[n], i = r.event;
    r = r.listeners;
    e: {
        var o = void 0;
        if (t)
            for (var s = r.length - 1; 0 <= s; s--) {
                var a = r[s], f = a.instance, h = a.currentTarget;
                if (a = a.listener, f !== o && i.isPropagationStopped())
                    break e;
                N0(i, a, h), o = f;
            }
        else
            for (s = 0; s < r.length; s++) {
                if (a = r[s], f = a.instance, h = a.currentTarget, a = a.listener, f !== o && i.isPropagationStopped())
                    break e;
                N0(i, a, h), o = f;
            }
    }
} if (Ra)
    throw e = Yl, Ra = !1, Yl = null, e; }
function Le(e, t) { var n = t[ic]; n === void 0 && (n = t[ic] = new Set); var r = e + "__bubble"; n.has(r) || (ap(t, e, 2, !1), n.add(r)); }
function rl(e, t, n) { var r = 0; t && (r |= 4), ap(n, e, r, t); }
var ks = "_reactListening" + Math.random().toString(36).slice(2);
function Yo(e) { if (!e[ks]) {
    e[ks] = !0, ph.forEach(function (n) { n !== "selectionchange" && (uw.has(n) || rl(n, !1, e), rl(n, !0, e)); });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[ks] || (t[ks] = !0, rl("selectionchange", !1, t));
} }
function ap(e, t, n, r) { switch (Hh(t)) {
    case 1:
        var i = Eg;
        break;
    case 4:
        i = bg;
        break;
    default: i = of;
} n = i.bind(null, t, n, e), i = void 0, !Dl || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (i = !0), r ? i !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: i }) : e.addEventListener(t, n, !0) : i !== void 0 ? e.addEventListener(t, n, { passive: i }) : e.addEventListener(t, n, !1); }
function il(e, t, n, r, i) { var o = r; if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
        if (r === null)
            return;
        var s = r.tag;
        if (s === 3 || s === 4) {
            var a = r.stateNode.containerInfo;
            if (a === i || a.nodeType === 8 && a.parentNode === i)
                break;
            if (s === 4)
                for (s = r.return; s !== null;) {
                    var f = s.tag;
                    if ((f === 3 || f === 4) && (f = s.stateNode.containerInfo, f === i || f.nodeType === 8 && f.parentNode === i))
                        return;
                    s = s.return;
                }
            for (; a !== null;) {
                if (s = Yr(a), s === null)
                    return;
                if (f = s.tag, f === 5 || f === 6) {
                    r = o = s;
                    continue e;
                }
                a = a.parentNode;
            }
        }
        r = r.return;
    } Ih(function () { var h = o, w = ef(n), b = []; e: {
    var x = op.get(e);
    if (x !== void 0) {
        var B = af, y = e;
        switch (e) {
            case "keypress": if (ea(n) === 0)
                break e;
            case "keydown":
            case "keyup":
                B = $g;
                break;
            case "focusin":
                y = "focus", B = Qu;
                break;
            case "focusout":
                y = "blur", B = Qu;
                break;
            case "beforeblur":
            case "afterblur":
                B = Qu;
                break;
            case "click": if (n.button === 2)
                break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
                B = m0;
                break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
                B = Bg;
                break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
                B = jg;
                break;
            case tp:
            case np:
            case rp:
                B = kg;
                break;
            case ip:
                B = qg;
                break;
            case "scroll":
                B = Sg;
                break;
            case "wheel":
                B = Gg;
                break;
            case "copy":
            case "cut":
            case "paste":
                B = Rg;
                break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup": B = w0;
        }
        var O = (t & 4) !== 0, M = !O && e === "scroll", A = O ? x !== null ? x + "Capture" : null : x;
        O = [];
        for (var v = h, E; v !== null;) {
            E = v;
            var z = E.stateNode;
            if (E.tag === 5 && z !== null && (E = z, A !== null && (z = Lo(v, A), z != null && O.push(Ko(v, z, E)))), M)
                break;
            v = v.return;
        }
        0 < O.length && (x = new B(x, y, null, n, w), b.push({ event: x, listeners: O }));
    }
} if (!(t & 7)) {
    e: {
        if (x = e === "mouseover" || e === "pointerover", B = e === "mouseout" || e === "pointerout", x && n !== Gl && (y = n.relatedTarget || n.fromElement) && (Yr(y) || y[Jn]))
            break e;
        if ((B || x) && (x = w.window === w ? w : (x = w.ownerDocument) ? x.defaultView || x.parentWindow : window, B ? (y = n.relatedTarget || n.toElement, B = h, y = y ? Yr(y) : null, y !== null && (M = fi(y), y !== M || y.tag !== 5 && y.tag !== 6) && (y = null)) : (B = null, y = h), B !== y)) {
            if (O = m0, z = "onMouseLeave", A = "onMouseEnter", v = "mouse", (e === "pointerout" || e === "pointerover") && (O = w0, z = "onPointerLeave", A = "onPointerEnter", v = "pointer"), M = B == null ? x : Ai(B), E = y == null ? x : Ai(y), x = new O(z, v + "leave", B, n, w), x.target = M, x.relatedTarget = E, z = null, Yr(w) === h && (O = new O(A, v + "enter", y, n, w), O.target = E, O.relatedTarget = M, z = O), M = z, B && y)
                t: {
                    for (O = B, A = y, v = 0, E = O; E; E = di(E))
                        v++;
                    for (E = 0, z = A; z; z = di(z))
                        E++;
                    for (; 0 < v - E;)
                        O = di(O), v--;
                    for (; 0 < E - v;)
                        A = di(A), E--;
                    for (; v--;) {
                        if (O === A || A !== null && O === A.alternate)
                            break t;
                        O = di(O), A = di(A);
                    }
                    O = null;
                }
            else
                O = null;
            B !== null && k0(b, x, B, O, !1), y !== null && M !== null && k0(b, M, y, O, !0);
        }
    }
    e: {
        if (x = h ? Ai(h) : window, B = x.nodeName && x.nodeName.toLowerCase(), B === "select" || B === "input" && x.type === "file")
            var I = Xg;
        else if (x0(x))
            if (Zh)
                I = nw;
            else {
                I = ew;
                var L = Jg;
            }
        else
            (B = x.nodeName) && B.toLowerCase() === "input" && (x.type === "checkbox" || x.type === "radio") && (I = tw);
        if (I && (I = I(e, h))) {
            Kh(b, I, n, w);
            break e;
        }
        L && L(e, x, h), e === "focusout" && (L = x._wrapperState) && L.controlled && x.type === "number" && Vl(x, "number", x.value);
    }
    switch (L = h ? Ai(h) : window, e) {
        case "focusin":
            (x0(L) || L.contentEditable === "true") && (Ti = L, Xl = h, Ro = null);
            break;
        case "focusout":
            Ro = Xl = Ti = null;
            break;
        case "mousedown":
            Jl = !0;
            break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
            Jl = !1, B0(b, n, w);
            break;
        case "selectionchange": if (ow)
            break;
        case "keydown":
        case "keyup": B0(b, n, w);
    }
    var V;
    if (lf)
        e: {
            switch (e) {
                case "compositionstart":
                    var W = "onCompositionStart";
                    break e;
                case "compositionend":
                    W = "onCompositionEnd";
                    break e;
                case "compositionupdate":
                    W = "onCompositionUpdate";
                    break e;
            }
            W = void 0;
        }
    else
        Si ? Dh(e, n) && (W = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (W = "onCompositionStart");
    W && (Wh && n.locale !== "ko" && (Si || W !== "onCompositionStart" ? W === "onCompositionEnd" && Si && (V = Gh()) : (vr = w, sf = "value" in vr ? vr.value : vr.textContent, Si = !0)), L = Ca(h, W), 0 < L.length && (W = new g0(W, e, null, n, w), b.push({ event: W, listeners: L }), V ? W.data = V : (V = Yh(n), V !== null && (W.data = V)))), (V = Dg ? Yg(e, n) : Kg(e, n)) && (h = Ca(h, "onBeforeInput"), 0 < h.length && (w = new g0("onBeforeInput", "beforeinput", null, n, w), b.push({ event: w, listeners: h }), w.data = V));
} sp(b, t); }); }
function Ko(e, t, n) { return { instance: e, listener: t, currentTarget: n }; }
function Ca(e, t) { for (var n = t + "Capture", r = []; e !== null;) {
    var i = e, o = i.stateNode;
    i.tag === 5 && o !== null && (i = o, o = Lo(e, n), o != null && r.unshift(Ko(e, o, i)), o = Lo(e, t), o != null && r.push(Ko(e, o, i))), e = e.return;
} return r; }
function di(e) { if (e === null)
    return null; do
    e = e.return;
while (e && e.tag !== 5); return e || null; }
function k0(e, t, n, r, i) { for (var o = t._reactName, s = []; n !== null && n !== r;) {
    var a = n, f = a.alternate, h = a.stateNode;
    if (f !== null && f === r)
        break;
    a.tag === 5 && h !== null && (a = h, i ? (f = Lo(n, o), f != null && s.unshift(Ko(n, f, a))) : i || (f = Lo(n, o), f != null && s.push(Ko(n, f, a)))), n = n.return;
} s.length !== 0 && e.push({ event: t, listeners: s }); }
var lw = /\r\n?/g, cw = /\u0000|\uFFFD/g;
function I0(e) {
    return (typeof e == "string" ? e : "" + e).replace(lw, `
`).replace(cw, "");
}
function Is(e, t, n) { if (t = I0(t), I0(e) !== t && n)
    throw Error(le(425)); }
function Ma() { }
var ec = null, tc = null;
function nc(e, t) { return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null; }
var rc = typeof setTimeout == "function" ? setTimeout : void 0, fw = typeof clearTimeout == "function" ? clearTimeout : void 0, R0 = typeof Promise == "function" ? Promise : void 0, dw = typeof queueMicrotask == "function" ? queueMicrotask : typeof R0 < "u" ? function (e) { return R0.resolve(null).then(e).catch(hw); } : rc;
function hw(e) { setTimeout(function () { throw e; }); }
function ol(e, t) { var n = t, r = 0; do {
    var i = n.nextSibling;
    if (e.removeChild(n), i && i.nodeType === 8)
        if (n = i.data, n === "/$") {
            if (r === 0) {
                e.removeChild(i), Go(t);
                return;
            }
            r--;
        }
        else
            n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = i;
} while (n); Go(t); }
function Tr(e) { for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3)
        break;
    if (t === 8) {
        if (t = e.data, t === "$" || t === "$!" || t === "$?")
            break;
        if (t === "/$")
            return null;
    }
} return e; }
function O0(e) { e = e.previousSibling; for (var t = 0; e;) {
    if (e.nodeType === 8) {
        var n = e.data;
        if (n === "$" || n === "$!" || n === "$?") {
            if (t === 0)
                return e;
            t--;
        }
        else
            n === "/$" && t++;
    }
    e = e.previousSibling;
} return null; }
var io = Math.random().toString(36).slice(2), Fn = "__reactFiber$" + io, Zo = "__reactProps$" + io, Jn = "__reactContainer$" + io, ic = "__reactEvents$" + io, pw = "__reactListeners$" + io, yw = "__reactHandles$" + io;
function Yr(e) { var t = e[Fn]; if (t)
    return t; for (var n = e.parentNode; n;) {
    if (t = n[Jn] || n[Fn]) {
        if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
            for (e = O0(e); e !== null;) {
                if (n = e[Fn])
                    return n;
                e = O0(e);
            }
        return t;
    }
    e = n, n = e.parentNode;
} return null; }
function cs(e) { return e = e[Fn] || e[Jn], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e; }
function Ai(e) { if (e.tag === 5 || e.tag === 6)
    return e.stateNode; throw Error(le(33)); }
function yu(e) { return e[Zo] || null; }
var oc = [], Ni = -1;
function Pr(e) { return { current: e }; }
function qe(e) { 0 > Ni || (e.current = oc[Ni], oc[Ni] = null, Ni--); }
function je(e, t) { Ni++, oc[Ni] = e.current, e.current = t; }
var Or = {}, Nt = Pr(Or), jt = Pr(!1), ti = Or;
function Di(e, t) { var n = e.type.contextTypes; if (!n)
    return Or; var r = e.stateNode; if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext; var i = {}, o; for (o in n)
    i[o] = t[o]; return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = i), i; }
function Lt(e) { return e = e.childContextTypes, e != null; }
function $a() { qe(jt), qe(Nt); }
function U0(e, t, n) { if (Nt.current !== Or)
    throw Error(le(168)); je(Nt, t), je(jt, n); }
function up(e, t, n) { var r = e.stateNode; if (t = t.childContextTypes, typeof r.getChildContext != "function")
    return n; r = r.getChildContext(); for (var i in r)
    if (!(i in t))
        throw Error(le(108, Jm(e) || "Unknown", i)); return Ye({}, n, r); }
function za(e) { return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Or, ti = Nt.current, je(Nt, e), je(jt, jt.current), !0; }
function F0(e, t, n) { var r = e.stateNode; if (!r)
    throw Error(le(169)); n ? (e = up(e, t, ti), r.__reactInternalMemoizedMergedChildContext = e, qe(jt), qe(Nt), je(Nt, e)) : qe(jt), je(jt, n); }
var Hn = null, mu = !1, sl = !1;
function lp(e) { Hn === null ? Hn = [e] : Hn.push(e); }
function mw(e) { mu = !0, lp(e); }
function Cr() { if (!sl && Hn !== null) {
    sl = !0;
    var e = 0, t = Ce;
    try {
        var n = Hn;
        for (Ce = 1; e < n.length; e++) {
            var r = n[e];
            do
                r = r(!0);
            while (r !== null);
        }
        Hn = null, mu = !1;
    }
    catch (i) {
        throw Hn !== null && (Hn = Hn.slice(e + 1)), Fh(tf, Cr), i;
    }
    finally {
        Ce = t, sl = !1;
    }
} return null; }
var ki = [], Ii = 0, Va = null, ja = 0, en = [], tn = 0, ni = null, Dn = 1, Yn = "";
function zr(e, t) { ki[Ii++] = ja, ki[Ii++] = Va, Va = e, ja = t; }
function cp(e, t, n) { en[tn++] = Dn, en[tn++] = Yn, en[tn++] = ni, ni = e; var r = Dn; e = Yn; var i = 32 - xn(r) - 1; r &= ~(1 << i), n += 1; var o = 32 - xn(t) + i; if (30 < o) {
    var s = i - i % 5;
    o = (r & (1 << s) - 1).toString(32), r >>= s, i -= s, Dn = 1 << 32 - xn(t) + i | n << i | r, Yn = o + e;
}
else
    Dn = 1 << o | n << i | r, Yn = e; }
function ff(e) { e.return !== null && (zr(e, 1), cp(e, 1, 0)); }
function df(e) { for (; e === Va;)
    Va = ki[--Ii], ki[Ii] = null, ja = ki[--Ii], ki[Ii] = null; for (; e === ni;)
    ni = en[--tn], en[tn] = null, Yn = en[--tn], en[tn] = null, Dn = en[--tn], en[tn] = null; }
var Dt = null, Wt = null, He = !1, _n = null;
function fp(e, t) { var n = rn(5, null, null, 0); n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n); }
function P0(e, t) { switch (e.tag) {
    case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Dt = e, Wt = Tr(t.firstChild), !0) : !1;
    case 6: return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Dt = e, Wt = null, !0) : !1;
    case 13: return t = t.nodeType !== 8 ? null : t, t !== null ? (n = ni !== null ? { id: Dn, overflow: Yn } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = rn(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Dt = e, Wt = null, !0) : !1;
    default: return !1;
} }
function sc(e) { return (e.mode & 1) !== 0 && (e.flags & 128) === 0; }
function ac(e) { if (He) {
    var t = Wt;
    if (t) {
        var n = t;
        if (!P0(e, t)) {
            if (sc(e))
                throw Error(le(418));
            t = Tr(n.nextSibling);
            var r = Dt;
            t && P0(e, t) ? fp(r, n) : (e.flags = e.flags & -4097 | 2, He = !1, Dt = e);
        }
    }
    else {
        if (sc(e))
            throw Error(le(418));
        e.flags = e.flags & -4097 | 2, He = !1, Dt = e;
    }
} }
function C0(e) { for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;)
    e = e.return; Dt = e; }
function Rs(e) { if (e !== Dt)
    return !1; if (!He)
    return C0(e), He = !0, !1; var t; if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !nc(e.type, e.memoizedProps)), t && (t = Wt)) {
    if (sc(e))
        throw dp(), Error(le(418));
    for (; t;)
        fp(e, t), t = Tr(t.nextSibling);
} if (C0(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e)
        throw Error(le(317));
    e: {
        for (e = e.nextSibling, t = 0; e;) {
            if (e.nodeType === 8) {
                var n = e.data;
                if (n === "/$") {
                    if (t === 0) {
                        Wt = Tr(e.nextSibling);
                        break e;
                    }
                    t--;
                }
                else
                    n !== "$" && n !== "$!" && n !== "$?" || t++;
            }
            e = e.nextSibling;
        }
        Wt = null;
    }
}
else
    Wt = Dt ? Tr(e.stateNode.nextSibling) : null; return !0; }
function dp() { for (var e = Wt; e;)
    e = Tr(e.nextSibling); }
function Yi() { Wt = Dt = null, He = !1; }
function hf(e) { _n === null ? _n = [e] : _n.push(e); }
var gw = rr.ReactCurrentBatchConfig;
function po(e, t, n) { if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
        if (n = n._owner, n) {
            if (n.tag !== 1)
                throw Error(le(309));
            var r = n.stateNode;
        }
        if (!r)
            throw Error(le(147, e));
        var i = r, o = "" + e;
        return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === o ? t.ref : (t = function (s) { var a = i.refs; s === null ? delete a[o] : a[o] = s; }, t._stringRef = o, t);
    }
    if (typeof e != "string")
        throw Error(le(284));
    if (!n._owner)
        throw Error(le(290, e));
} return e; }
function Os(e, t) { throw e = Object.prototype.toString.call(t), Error(le(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e)); }
function M0(e) { var t = e._init; return t(e._payload); }
function hp(e) { function t(A, v) { if (e) {
    var E = A.deletions;
    E === null ? (A.deletions = [v], A.flags |= 16) : E.push(v);
} } function n(A, v) { if (!e)
    return null; for (; v !== null;)
    t(A, v), v = v.sibling; return null; } function r(A, v) { for (A = new Map; v !== null;)
    v.key !== null ? A.set(v.key, v) : A.set(v.index, v), v = v.sibling; return A; } function i(A, v) { return A = kr(A, v), A.index = 0, A.sibling = null, A; } function o(A, v, E) { return A.index = E, e ? (E = A.alternate, E !== null ? (E = E.index, E < v ? (A.flags |= 2, v) : E) : (A.flags |= 2, v)) : (A.flags |= 1048576, v); } function s(A) { return e && A.alternate === null && (A.flags |= 2), A; } function a(A, v, E, z) { return v === null || v.tag !== 6 ? (v = hl(E, A.mode, z), v.return = A, v) : (v = i(v, E), v.return = A, v); } function f(A, v, E, z) { var I = E.type; return I === bi ? w(A, v, E.props.children, z, E.key) : v !== null && (v.elementType === I || typeof I == "object" && I !== null && I.$$typeof === dr && M0(I) === v.type) ? (z = i(v, E.props), z.ref = po(A, v, E), z.return = A, z) : (z = aa(E.type, E.key, E.props, null, A.mode, z), z.ref = po(A, v, E), z.return = A, z); } function h(A, v, E, z) { return v === null || v.tag !== 4 || v.stateNode.containerInfo !== E.containerInfo || v.stateNode.implementation !== E.implementation ? (v = pl(E, A.mode, z), v.return = A, v) : (v = i(v, E.children || []), v.return = A, v); } function w(A, v, E, z, I) { return v === null || v.tag !== 7 ? (v = Jr(E, A.mode, z, I), v.return = A, v) : (v = i(v, E), v.return = A, v); } function b(A, v, E) { if (typeof v == "string" && v !== "" || typeof v == "number")
    return v = hl("" + v, A.mode, E), v.return = A, v; if (typeof v == "object" && v !== null) {
    switch (v.$$typeof) {
        case xs: return E = aa(v.type, v.key, v.props, null, A.mode, E), E.ref = po(A, null, v), E.return = A, E;
        case Ei: return v = pl(v, A.mode, E), v.return = A, v;
        case dr:
            var z = v._init;
            return b(A, z(v._payload), E);
    }
    if (_o(v) || uo(v))
        return v = Jr(v, A.mode, E, null), v.return = A, v;
    Os(A, v);
} return null; } function x(A, v, E, z) { var I = v !== null ? v.key : null; if (typeof E == "string" && E !== "" || typeof E == "number")
    return I !== null ? null : a(A, v, "" + E, z); if (typeof E == "object" && E !== null) {
    switch (E.$$typeof) {
        case xs: return E.key === I ? f(A, v, E, z) : null;
        case Ei: return E.key === I ? h(A, v, E, z) : null;
        case dr: return I = E._init, x(A, v, I(E._payload), z);
    }
    if (_o(E) || uo(E))
        return I !== null ? null : w(A, v, E, z, null);
    Os(A, E);
} return null; } function B(A, v, E, z, I) { if (typeof z == "string" && z !== "" || typeof z == "number")
    return A = A.get(E) || null, a(v, A, "" + z, I); if (typeof z == "object" && z !== null) {
    switch (z.$$typeof) {
        case xs: return A = A.get(z.key === null ? E : z.key) || null, f(v, A, z, I);
        case Ei: return A = A.get(z.key === null ? E : z.key) || null, h(v, A, z, I);
        case dr:
            var L = z._init;
            return B(A, v, E, L(z._payload), I);
    }
    if (_o(z) || uo(z))
        return A = A.get(E) || null, w(v, A, z, I, null);
    Os(v, z);
} return null; } function y(A, v, E, z) { for (var I = null, L = null, V = v, W = v = 0, te = null; V !== null && W < E.length; W++) {
    V.index > W ? (te = V, V = null) : te = V.sibling;
    var K = x(A, V, E[W], z);
    if (K === null) {
        V === null && (V = te);
        break;
    }
    e && V && K.alternate === null && t(A, V), v = o(K, v, W), L === null ? I = K : L.sibling = K, L = K, V = te;
} if (W === E.length)
    return n(A, V), He && zr(A, W), I; if (V === null) {
    for (; W < E.length; W++)
        V = b(A, E[W], z), V !== null && (v = o(V, v, W), L === null ? I = V : L.sibling = V, L = V);
    return He && zr(A, W), I;
} for (V = r(A, V); W < E.length; W++)
    te = B(V, A, W, E[W], z), te !== null && (e && te.alternate !== null && V.delete(te.key === null ? W : te.key), v = o(te, v, W), L === null ? I = te : L.sibling = te, L = te); return e && V.forEach(function (de) { return t(A, de); }), He && zr(A, W), I; } function O(A, v, E, z) { var I = uo(E); if (typeof I != "function")
    throw Error(le(150)); if (E = I.call(E), E == null)
    throw Error(le(151)); for (var L = I = null, V = v, W = v = 0, te = null, K = E.next(); V !== null && !K.done; W++, K = E.next()) {
    V.index > W ? (te = V, V = null) : te = V.sibling;
    var de = x(A, V, K.value, z);
    if (de === null) {
        V === null && (V = te);
        break;
    }
    e && V && de.alternate === null && t(A, V), v = o(de, v, W), L === null ? I = de : L.sibling = de, L = de, V = te;
} if (K.done)
    return n(A, V), He && zr(A, W), I; if (V === null) {
    for (; !K.done; W++, K = E.next())
        K = b(A, K.value, z), K !== null && (v = o(K, v, W), L === null ? I = K : L.sibling = K, L = K);
    return He && zr(A, W), I;
} for (V = r(A, V); !K.done; W++, K = E.next())
    K = B(V, A, W, K.value, z), K !== null && (e && K.alternate !== null && V.delete(K.key === null ? W : K.key), v = o(K, v, W), L === null ? I = K : L.sibling = K, L = K); return e && V.forEach(function (he) { return t(A, he); }), He && zr(A, W), I; } function M(A, v, E, z) { if (typeof E == "object" && E !== null && E.type === bi && E.key === null && (E = E.props.children), typeof E == "object" && E !== null) {
    switch (E.$$typeof) {
        case xs:
            e: {
                for (var I = E.key, L = v; L !== null;) {
                    if (L.key === I) {
                        if (I = E.type, I === bi) {
                            if (L.tag === 7) {
                                n(A, L.sibling), v = i(L, E.props.children), v.return = A, A = v;
                                break e;
                            }
                        }
                        else if (L.elementType === I || typeof I == "object" && I !== null && I.$$typeof === dr && M0(I) === L.type) {
                            n(A, L.sibling), v = i(L, E.props), v.ref = po(A, L, E), v.return = A, A = v;
                            break e;
                        }
                        n(A, L);
                        break;
                    }
                    else
                        t(A, L);
                    L = L.sibling;
                }
                E.type === bi ? (v = Jr(E.props.children, A.mode, z, E.key), v.return = A, A = v) : (z = aa(E.type, E.key, E.props, null, A.mode, z), z.ref = po(A, v, E), z.return = A, A = z);
            }
            return s(A);
        case Ei:
            e: {
                for (L = E.key; v !== null;) {
                    if (v.key === L)
                        if (v.tag === 4 && v.stateNode.containerInfo === E.containerInfo && v.stateNode.implementation === E.implementation) {
                            n(A, v.sibling), v = i(v, E.children || []), v.return = A, A = v;
                            break e;
                        }
                        else {
                            n(A, v);
                            break;
                        }
                    else
                        t(A, v);
                    v = v.sibling;
                }
                v = pl(E, A.mode, z), v.return = A, A = v;
            }
            return s(A);
        case dr: return L = E._init, M(A, v, L(E._payload), z);
    }
    if (_o(E))
        return y(A, v, E, z);
    if (uo(E))
        return O(A, v, E, z);
    Os(A, E);
} return typeof E == "string" && E !== "" || typeof E == "number" ? (E = "" + E, v !== null && v.tag === 6 ? (n(A, v.sibling), v = i(v, E), v.return = A, A = v) : (n(A, v), v = hl(E, A.mode, z), v.return = A, A = v), s(A)) : n(A, v); } return M; }
var Ki = hp(!0), pp = hp(!1), La = Pr(null), qa = null, Ri = null, pf = null;
function yf() { pf = Ri = qa = null; }
function mf(e) { var t = La.current; qe(La), e._currentValue = t; }
function uc(e, t, n) { for (; e !== null;) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n)
        break;
    e = e.return;
} }
function Li(e, t) { qa = e, pf = Ri = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (Vt = !0), e.firstContext = null); }
function sn(e) { var t = e._currentValue; if (pf !== e)
    if (e = { context: e, memoizedValue: t, next: null }, Ri === null) {
        if (qa === null)
            throw Error(le(308));
        Ri = e, qa.dependencies = { lanes: 0, firstContext: e };
    }
    else
        Ri = Ri.next = e; return t; }
var Kr = null;
function gf(e) { Kr === null ? Kr = [e] : Kr.push(e); }
function yp(e, t, n, r) { var i = t.interleaved; return i === null ? (n.next = n, gf(t)) : (n.next = i.next, i.next = n), t.interleaved = n, er(e, r); }
function er(e, t) { e.lanes |= t; var n = e.alternate; for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null;)
    e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return; return n.tag === 3 ? n.stateNode : null; }
var hr = !1;
function wf(e) { e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null }; }
function mp(e, t) { e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects }); }
function Qn(e, t) { return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null }; }
function Br(e, t, n) { var r = e.updateQueue; if (r === null)
    return null; if (r = r.shared, Ue & 2) {
    var i = r.pending;
    return i === null ? t.next = t : (t.next = i.next, i.next = t), r.pending = t, er(e, n);
} return i = r.interleaved, i === null ? (t.next = t, gf(r)) : (t.next = i.next, i.next = t), r.interleaved = t, er(e, n); }
function ta(e, t, n) { if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, nf(e, n);
} }
function $0(e, t) { var n = e.updateQueue, r = e.alternate; if (r !== null && (r = r.updateQueue, n === r)) {
    var i = null, o = null;
    if (n = n.firstBaseUpdate, n !== null) {
        do {
            var s = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
            o === null ? i = o = s : o = o.next = s, n = n.next;
        } while (n !== null);
        o === null ? i = o = t : o = o.next = t;
    }
    else
        i = o = t;
    n = { baseState: r.baseState, firstBaseUpdate: i, lastBaseUpdate: o, shared: r.shared, effects: r.effects }, e.updateQueue = n;
    return;
} e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t; }
function Ha(e, t, n, r) { var i = e.updateQueue; hr = !1; var o = i.firstBaseUpdate, s = i.lastBaseUpdate, a = i.shared.pending; if (a !== null) {
    i.shared.pending = null;
    var f = a, h = f.next;
    f.next = null, s === null ? o = h : s.next = h, s = f;
    var w = e.alternate;
    w !== null && (w = w.updateQueue, a = w.lastBaseUpdate, a !== s && (a === null ? w.firstBaseUpdate = h : a.next = h, w.lastBaseUpdate = f));
} if (o !== null) {
    var b = i.baseState;
    s = 0, w = h = f = null, a = o;
    do {
        var x = a.lane, B = a.eventTime;
        if ((r & x) === x) {
            w !== null && (w = w.next = { eventTime: B, lane: 0, tag: a.tag, payload: a.payload, callback: a.callback, next: null });
            e: {
                var y = e, O = a;
                switch (x = t, B = n, O.tag) {
                    case 1:
                        if (y = O.payload, typeof y == "function") {
                            b = y.call(B, b, x);
                            break e;
                        }
                        b = y;
                        break e;
                    case 3: y.flags = y.flags & -65537 | 128;
                    case 0:
                        if (y = O.payload, x = typeof y == "function" ? y.call(B, b, x) : y, x == null)
                            break e;
                        b = Ye({}, b, x);
                        break e;
                    case 2: hr = !0;
                }
            }
            a.callback !== null && a.lane !== 0 && (e.flags |= 64, x = i.effects, x === null ? i.effects = [a] : x.push(a));
        }
        else
            B = { eventTime: B, lane: x, tag: a.tag, payload: a.payload, callback: a.callback, next: null }, w === null ? (h = w = B, f = b) : w = w.next = B, s |= x;
        if (a = a.next, a === null) {
            if (a = i.shared.pending, a === null)
                break;
            x = a, a = x.next, x.next = null, i.lastBaseUpdate = x, i.shared.pending = null;
        }
    } while (1);
    if (w === null && (f = b), i.baseState = f, i.firstBaseUpdate = h, i.lastBaseUpdate = w, t = i.shared.interleaved, t !== null) {
        i = t;
        do
            s |= i.lane, i = i.next;
        while (i !== t);
    }
    else
        o === null && (i.shared.lanes = 0);
    ii |= s, e.lanes = s, e.memoizedState = b;
} }
function z0(e, t, n) { if (e = t.effects, t.effects = null, e !== null)
    for (t = 0; t < e.length; t++) {
        var r = e[t], i = r.callback;
        if (i !== null) {
            if (r.callback = null, r = n, typeof i != "function")
                throw Error(le(191, i));
            i.call(r);
        }
    } }
var fs = {}, $n = Pr(fs), Qo = Pr(fs), Xo = Pr(fs);
function Zr(e) { if (e === fs)
    throw Error(le(174)); return e; }
function _f(e, t) { switch (je(Xo, t), je(Qo, e), je($n, fs), e = t.nodeType, e) {
    case 9:
    case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Ll(null, "");
        break;
    default: e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Ll(t, e);
} qe($n), je($n, t); }
function Zi() { qe($n), qe(Qo), qe(Xo); }
function gp(e) { Zr(Xo.current); var t = Zr($n.current), n = Ll(t, e.type); t !== n && (je(Qo, e), je($n, n)); }
function vf(e) { Qo.current === e && (qe($n), qe(Qo)); }
var We = Pr(0);
function Ga(e) { for (var t = e; t !== null;) {
    if (t.tag === 13) {
        var n = t.memoizedState;
        if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!"))
            return t;
    }
    else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if (t.flags & 128)
            return t;
    }
    else if (t.child !== null) {
        t.child.return = t, t = t.child;
        continue;
    }
    if (t === e)
        break;
    for (; t.sibling === null;) {
        if (t.return === null || t.return === e)
            return null;
        t = t.return;
    }
    t.sibling.return = t.return, t = t.sibling;
} return null; }
var al = [];
function xf() { for (var e = 0; e < al.length; e++)
    al[e]._workInProgressVersionPrimary = null; al.length = 0; }
var na = rr.ReactCurrentDispatcher, ul = rr.ReactCurrentBatchConfig, ri = 0, De = null, ot = null, ht = null, Wa = !1, Oo = !1, Jo = 0, ww = 0;
function Et() { throw Error(le(321)); }
function Ef(e, t) { if (t === null)
    return !1; for (var n = 0; n < t.length && n < e.length; n++)
    if (!bn(e[n], t[n]))
        return !1; return !0; }
function bf(e, t, n, r, i, o) { if (ri = o, De = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, na.current = e === null || e.memoizedState === null ? Ew : bw, e = n(r, i), Oo) {
    o = 0;
    do {
        if (Oo = !1, Jo = 0, 25 <= o)
            throw Error(le(301));
        o += 1, ht = ot = null, t.updateQueue = null, na.current = Sw, e = n(r, i);
    } while (Oo);
} if (na.current = Da, t = ot !== null && ot.next !== null, ri = 0, ht = ot = De = null, Wa = !1, t)
    throw Error(le(300)); return e; }
function Sf() { var e = Jo !== 0; return Jo = 0, e; }
function Rn() { var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null }; return ht === null ? De.memoizedState = ht = e : ht = ht.next = e, ht; }
function an() { if (ot === null) {
    var e = De.alternate;
    e = e !== null ? e.memoizedState : null;
}
else
    e = ot.next; var t = ht === null ? De.memoizedState : ht.next; if (t !== null)
    ht = t, ot = e;
else {
    if (e === null)
        throw Error(le(310));
    ot = e, e = { memoizedState: ot.memoizedState, baseState: ot.baseState, baseQueue: ot.baseQueue, queue: ot.queue, next: null }, ht === null ? De.memoizedState = ht = e : ht = ht.next = e;
} return ht; }
function es(e, t) { return typeof t == "function" ? t(e) : t; }
function ll(e) { var t = an(), n = t.queue; if (n === null)
    throw Error(le(311)); n.lastRenderedReducer = e; var r = ot, i = r.baseQueue, o = n.pending; if (o !== null) {
    if (i !== null) {
        var s = i.next;
        i.next = o.next, o.next = s;
    }
    r.baseQueue = i = o, n.pending = null;
} if (i !== null) {
    o = i.next, r = r.baseState;
    var a = s = null, f = null, h = o;
    do {
        var w = h.lane;
        if ((ri & w) === w)
            f !== null && (f = f.next = { lane: 0, action: h.action, hasEagerState: h.hasEagerState, eagerState: h.eagerState, next: null }), r = h.hasEagerState ? h.eagerState : e(r, h.action);
        else {
            var b = { lane: w, action: h.action, hasEagerState: h.hasEagerState, eagerState: h.eagerState, next: null };
            f === null ? (a = f = b, s = r) : f = f.next = b, De.lanes |= w, ii |= w;
        }
        h = h.next;
    } while (h !== null && h !== o);
    f === null ? s = r : f.next = a, bn(r, t.memoizedState) || (Vt = !0), t.memoizedState = r, t.baseState = s, t.baseQueue = f, n.lastRenderedState = r;
} if (e = n.interleaved, e !== null) {
    i = e;
    do
        o = i.lane, De.lanes |= o, ii |= o, i = i.next;
    while (i !== e);
}
else
    i === null && (n.lanes = 0); return [t.memoizedState, n.dispatch]; }
function cl(e) { var t = an(), n = t.queue; if (n === null)
    throw Error(le(311)); n.lastRenderedReducer = e; var r = n.dispatch, i = n.pending, o = t.memoizedState; if (i !== null) {
    n.pending = null;
    var s = i = i.next;
    do
        o = e(o, s.action), s = s.next;
    while (s !== i);
    bn(o, t.memoizedState) || (Vt = !0), t.memoizedState = o, t.baseQueue === null && (t.baseState = o), n.lastRenderedState = o;
} return [o, r]; }
function wp() { }
function _p(e, t) { var n = De, r = an(), i = t(), o = !bn(r.memoizedState, i); if (o && (r.memoizedState = i, Vt = !0), r = r.queue, Tf(Ep.bind(null, n, r, e), [e]), r.getSnapshot !== t || o || ht !== null && ht.memoizedState.tag & 1) {
    if (n.flags |= 2048, ts(9, xp.bind(null, n, r, i, t), void 0, null), mt === null)
        throw Error(le(349));
    ri & 30 || vp(n, t, i);
} return i; }
function vp(e, t, n) { e.flags |= 16384, e = { getSnapshot: t, value: n }, t = De.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, De.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e)); }
function xp(e, t, n, r) { t.value = n, t.getSnapshot = r, bp(t) && Sp(e); }
function Ep(e, t, n) { return n(function () { bp(t) && Sp(e); }); }
function bp(e) { var t = e.getSnapshot; e = e.value; try {
    var n = t();
    return !bn(e, n);
}
catch {
    return !0;
} }
function Sp(e) { var t = er(e, 1); t !== null && En(t, e, 1, -1); }
function V0(e) { var t = Rn(); return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: es, lastRenderedState: e }, t.queue = e, e = e.dispatch = xw.bind(null, De, e), [t.memoizedState, e]; }
function ts(e, t, n, r) { return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = De.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, De.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e; }
function Tp() { return an().memoizedState; }
function ra(e, t, n, r) { var i = Rn(); De.flags |= e, i.memoizedState = ts(1 | t, n, void 0, r === void 0 ? null : r); }
function gu(e, t, n, r) { var i = an(); r = r === void 0 ? null : r; var o = void 0; if (ot !== null) {
    var s = ot.memoizedState;
    if (o = s.destroy, r !== null && Ef(r, s.deps)) {
        i.memoizedState = ts(t, n, o, r);
        return;
    }
} De.flags |= e, i.memoizedState = ts(1 | t, n, o, r); }
function j0(e, t) { return ra(8390656, 8, e, t); }
function Tf(e, t) { return gu(2048, 8, e, t); }
function Bp(e, t) { return gu(4, 2, e, t); }
function Ap(e, t) { return gu(4, 4, e, t); }
function Np(e, t) { if (typeof t == "function")
    return e = e(), t(e), function () { t(null); }; if (t != null)
    return e = e(), t.current = e, function () { t.current = null; }; }
function kp(e, t, n) { return n = n != null ? n.concat([e]) : null, gu(4, 4, Np.bind(null, t, e), n); }
function Bf() { }
function Ip(e, t) { var n = an(); t = t === void 0 ? null : t; var r = n.memoizedState; return r !== null && t !== null && Ef(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e); }
function Rp(e, t) { var n = an(); t = t === void 0 ? null : t; var r = n.memoizedState; return r !== null && t !== null && Ef(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e); }
function Op(e, t, n) { return ri & 21 ? (bn(n, t) || (n = Mh(), De.lanes |= n, ii |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, Vt = !0), e.memoizedState = n); }
function _w(e, t) { var n = Ce; Ce = n !== 0 && 4 > n ? n : 4, e(!0); var r = ul.transition; ul.transition = {}; try {
    e(!1), t();
}
finally {
    Ce = n, ul.transition = r;
} }
function Up() { return an().memoizedState; }
function vw(e, t, n) { var r = Nr(e); if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, Fp(e))
    Pp(t, n);
else if (n = yp(e, t, n, r), n !== null) {
    var i = Pt();
    En(n, e, r, i), Cp(n, t, r);
} }
function xw(e, t, n) { var r = Nr(e), i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }; if (Fp(e))
    Pp(t, i);
else {
    var o = e.alternate;
    if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = t.lastRenderedReducer, o !== null))
        try {
            var s = t.lastRenderedState, a = o(s, n);
            if (i.hasEagerState = !0, i.eagerState = a, bn(a, s)) {
                var f = t.interleaved;
                f === null ? (i.next = i, gf(t)) : (i.next = f.next, f.next = i), t.interleaved = i;
                return;
            }
        }
        catch { }
        finally { }
    n = yp(e, t, i, r), n !== null && (i = Pt(), En(n, e, r, i), Cp(n, t, r));
} }
function Fp(e) { var t = e.alternate; return e === De || t !== null && t === De; }
function Pp(e, t) { Oo = Wa = !0; var n = e.pending; n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t; }
function Cp(e, t, n) { if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, nf(e, n);
} }
var Da = { readContext: sn, useCallback: Et, useContext: Et, useEffect: Et, useImperativeHandle: Et, useInsertionEffect: Et, useLayoutEffect: Et, useMemo: Et, useReducer: Et, useRef: Et, useState: Et, useDebugValue: Et, useDeferredValue: Et, useTransition: Et, useMutableSource: Et, useSyncExternalStore: Et, useId: Et, unstable_isNewReconciler: !1 }, Ew = { readContext: sn, useCallback: function (e, t) { return Rn().memoizedState = [e, t === void 0 ? null : t], e; }, useContext: sn, useEffect: j0, useImperativeHandle: function (e, t, n) { return n = n != null ? n.concat([e]) : null, ra(4194308, 4, Np.bind(null, t, e), n); }, useLayoutEffect: function (e, t) { return ra(4194308, 4, e, t); }, useInsertionEffect: function (e, t) { return ra(4, 2, e, t); }, useMemo: function (e, t) { var n = Rn(); return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e; }, useReducer: function (e, t, n) { var r = Rn(); return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = vw.bind(null, De, e), [r.memoizedState, e]; }, useRef: function (e) { var t = Rn(); return e = { current: e }, t.memoizedState = e; }, useState: V0, useDebugValue: Bf, useDeferredValue: function (e) { return Rn().memoizedState = e; }, useTransition: function () { var e = V0(!1), t = e[0]; return e = _w.bind(null, e[1]), Rn().memoizedState = e, [t, e]; }, useMutableSource: function () { }, useSyncExternalStore: function (e, t, n) { var r = De, i = Rn(); if (He) {
        if (n === void 0)
            throw Error(le(407));
        n = n();
    }
    else {
        if (n = t(), mt === null)
            throw Error(le(349));
        ri & 30 || vp(r, t, n);
    } i.memoizedState = n; var o = { value: n, getSnapshot: t }; return i.queue = o, j0(Ep.bind(null, r, o, e), [e]), r.flags |= 2048, ts(9, xp.bind(null, r, o, n, t), void 0, null), n; }, useId: function () { var e = Rn(), t = mt.identifierPrefix; if (He) {
        var n = Yn, r = Dn;
        n = (r & ~(1 << 32 - xn(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Jo++, 0 < n && (t += "H" + n.toString(32)), t += ":";
    }
    else
        n = ww++, t = ":" + t + "r" + n.toString(32) + ":"; return e.memoizedState = t; }, unstable_isNewReconciler: !1 }, bw = { readContext: sn, useCallback: Ip, useContext: sn, useEffect: Tf, useImperativeHandle: kp, useInsertionEffect: Bp, useLayoutEffect: Ap, useMemo: Rp, useReducer: ll, useRef: Tp, useState: function () { return ll(es); }, useDebugValue: Bf, useDeferredValue: function (e) { var t = an(); return Op(t, ot.memoizedState, e); }, useTransition: function () { var e = ll(es)[0], t = an().memoizedState; return [e, t]; }, useMutableSource: wp, useSyncExternalStore: _p, useId: Up, unstable_isNewReconciler: !1 }, Sw = { readContext: sn, useCallback: Ip, useContext: sn, useEffect: Tf, useImperativeHandle: kp, useInsertionEffect: Bp, useLayoutEffect: Ap, useMemo: Rp, useReducer: cl, useRef: Tp, useState: function () { return cl(es); }, useDebugValue: Bf, useDeferredValue: function (e) { var t = an(); return ot === null ? t.memoizedState = e : Op(t, ot.memoizedState, e); }, useTransition: function () { var e = cl(es)[0], t = an().memoizedState; return [e, t]; }, useMutableSource: wp, useSyncExternalStore: _p, useId: Up, unstable_isNewReconciler: !1 };
function yn(e, t) { if (e && e.defaultProps) {
    t = Ye({}, t), e = e.defaultProps;
    for (var n in e)
        t[n] === void 0 && (t[n] = e[n]);
    return t;
} return t; }
function lc(e, t, n, r) { t = e.memoizedState, n = n(r, t), n = n == null ? t : Ye({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n); }
var wu = { isMounted: function (e) { return (e = e._reactInternals) ? fi(e) === e : !1; }, enqueueSetState: function (e, t, n) { e = e._reactInternals; var r = Pt(), i = Nr(e), o = Qn(r, i); o.payload = t, n != null && (o.callback = n), t = Br(e, o, i), t !== null && (En(t, e, i, r), ta(t, e, i)); }, enqueueReplaceState: function (e, t, n) { e = e._reactInternals; var r = Pt(), i = Nr(e), o = Qn(r, i); o.tag = 1, o.payload = t, n != null && (o.callback = n), t = Br(e, o, i), t !== null && (En(t, e, i, r), ta(t, e, i)); }, enqueueForceUpdate: function (e, t) { e = e._reactInternals; var n = Pt(), r = Nr(e), i = Qn(n, r); i.tag = 2, t != null && (i.callback = t), t = Br(e, i, r), t !== null && (En(t, e, r, n), ta(t, e, r)); } };
function L0(e, t, n, r, i, o, s) { return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, s) : t.prototype && t.prototype.isPureReactComponent ? !Do(n, r) || !Do(i, o) : !0; }
function Mp(e, t, n) { var r = !1, i = Or, o = t.contextType; return typeof o == "object" && o !== null ? o = sn(o) : (i = Lt(t) ? ti : Nt.current, r = t.contextTypes, o = (r = r != null) ? Di(e, i) : Or), t = new t(n, o), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = wu, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = i, e.__reactInternalMemoizedMaskedChildContext = o), t; }
function q0(e, t, n, r) { e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && wu.enqueueReplaceState(t, t.state, null); }
function cc(e, t, n, r) { var i = e.stateNode; i.props = n, i.state = e.memoizedState, i.refs = {}, wf(e); var o = t.contextType; typeof o == "object" && o !== null ? i.context = sn(o) : (o = Lt(t) ? ti : Nt.current, i.context = Di(e, o)), i.state = e.memoizedState, o = t.getDerivedStateFromProps, typeof o == "function" && (lc(e, t, o, n), i.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (t = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), t !== i.state && wu.enqueueReplaceState(i, i.state, null), Ha(e, n, i, r), i.state = e.memoizedState), typeof i.componentDidMount == "function" && (e.flags |= 4194308); }
function Qi(e, t) {
    try {
        var n = "", r = t;
        do
            n += Xm(r), r = r.return;
        while (r);
        var i = n;
    }
    catch (o) {
        i = `
Error generating stack: ` + o.message + `
` + o.stack;
    }
    return { value: e, source: t, stack: i, digest: null };
}
function fl(e, t, n) { return { value: e, source: null, stack: n ?? null, digest: t ?? null }; }
function fc(e, t) { try {
    console.error(t.value);
}
catch (n) {
    setTimeout(function () { throw n; });
} }
var Tw = typeof WeakMap == "function" ? WeakMap : Map;
function $p(e, t, n) { n = Qn(-1, n), n.tag = 3, n.payload = { element: null }; var r = t.value; return n.callback = function () { Ka || (Ka = !0, xc = r), fc(e, t); }, n; }
function zp(e, t, n) { n = Qn(-1, n), n.tag = 3; var r = e.type.getDerivedStateFromError; if (typeof r == "function") {
    var i = t.value;
    n.payload = function () { return r(i); }, n.callback = function () { fc(e, t); };
} var o = e.stateNode; return o !== null && typeof o.componentDidCatch == "function" && (n.callback = function () { fc(e, t), typeof r != "function" && (Ar === null ? Ar = new Set([this]) : Ar.add(this)); var s = t.stack; this.componentDidCatch(t.value, { componentStack: s !== null ? s : "" }); }), n; }
function H0(e, t, n) { var r = e.pingCache; if (r === null) {
    r = e.pingCache = new Tw;
    var i = new Set;
    r.set(t, i);
}
else
    i = r.get(t), i === void 0 && (i = new Set, r.set(t, i)); i.has(n) || (i.add(n), e = zw.bind(null, e, t, n), t.then(e, e)); }
function G0(e) { do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t)
        return e;
    e = e.return;
} while (e !== null); return null; }
function W0(e, t, n, r, i) { return e.mode & 1 ? (e.flags |= 65536, e.lanes = i, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Qn(-1, 1), t.tag = 2, Br(n, t, 1))), n.lanes |= 1), e); }
var Bw = rr.ReactCurrentOwner, Vt = !1;
function Ut(e, t, n, r) { t.child = e === null ? pp(t, null, n, r) : Ki(t, e.child, n, r); }
function D0(e, t, n, r, i) { n = n.render; var o = t.ref; return Li(t, i), r = bf(e, t, n, r, o, i), n = Sf(), e !== null && !Vt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, tr(e, t, i)) : (He && n && ff(t), t.flags |= 1, Ut(e, t, r, i), t.child); }
function Y0(e, t, n, r, i) { if (e === null) {
    var o = n.type;
    return typeof o == "function" && !Ff(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = o, Vp(e, t, o, r, i)) : (e = aa(n.type, null, r, t, t.mode, i), e.ref = t.ref, e.return = t, t.child = e);
} if (o = e.child, !(e.lanes & i)) {
    var s = o.memoizedProps;
    if (n = n.compare, n = n !== null ? n : Do, n(s, r) && e.ref === t.ref)
        return tr(e, t, i);
} return t.flags |= 1, e = kr(o, r), e.ref = t.ref, e.return = t, t.child = e; }
function Vp(e, t, n, r, i) { if (e !== null) {
    var o = e.memoizedProps;
    if (Do(o, r) && e.ref === t.ref)
        if (Vt = !1, t.pendingProps = r = o, (e.lanes & i) !== 0)
            e.flags & 131072 && (Vt = !0);
        else
            return t.lanes = e.lanes, tr(e, t, i);
} return dc(e, t, n, r, i); }
function jp(e, t, n) { var r = t.pendingProps, i = r.children, o = e !== null ? e.memoizedState : null; if (r.mode === "hidden")
    if (!(t.mode & 1))
        t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, je(Ui, Ht), Ht |= n;
    else {
        if (!(n & 1073741824))
            return e = o !== null ? o.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, je(Ui, Ht), Ht |= e, null;
        t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = o !== null ? o.baseLanes : n, je(Ui, Ht), Ht |= r;
    }
else
    o !== null ? (r = o.baseLanes | n, t.memoizedState = null) : r = n, je(Ui, Ht), Ht |= r; return Ut(e, t, i, n), t.child; }
function Lp(e, t) { var n = t.ref; (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152); }
function dc(e, t, n, r, i) { var o = Lt(n) ? ti : Nt.current; return o = Di(t, o), Li(t, i), n = bf(e, t, n, r, o, i), r = Sf(), e !== null && !Vt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, tr(e, t, i)) : (He && r && ff(t), t.flags |= 1, Ut(e, t, n, i), t.child); }
function K0(e, t, n, r, i) { if (Lt(n)) {
    var o = !0;
    za(t);
}
else
    o = !1; if (Li(t, i), t.stateNode === null)
    ia(e, t), Mp(t, n, r), cc(t, n, r, i), r = !0;
else if (e === null) {
    var s = t.stateNode, a = t.memoizedProps;
    s.props = a;
    var f = s.context, h = n.contextType;
    typeof h == "object" && h !== null ? h = sn(h) : (h = Lt(n) ? ti : Nt.current, h = Di(t, h));
    var w = n.getDerivedStateFromProps, b = typeof w == "function" || typeof s.getSnapshotBeforeUpdate == "function";
    b || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (a !== r || f !== h) && q0(t, s, r, h), hr = !1;
    var x = t.memoizedState;
    s.state = x, Ha(t, r, s, i), f = t.memoizedState, a !== r || x !== f || jt.current || hr ? (typeof w == "function" && (lc(t, n, w, r), f = t.memoizedState), (a = hr || L0(t, n, a, r, x, f, h)) ? (b || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()), typeof s.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = f), s.props = r, s.state = f, s.context = h, r = a) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
}
else {
    s = t.stateNode, mp(e, t), a = t.memoizedProps, h = t.type === t.elementType ? a : yn(t.type, a), s.props = h, b = t.pendingProps, x = s.context, f = n.contextType, typeof f == "object" && f !== null ? f = sn(f) : (f = Lt(n) ? ti : Nt.current, f = Di(t, f));
    var B = n.getDerivedStateFromProps;
    (w = typeof B == "function" || typeof s.getSnapshotBeforeUpdate == "function") || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (a !== b || x !== f) && q0(t, s, r, f), hr = !1, x = t.memoizedState, s.state = x, Ha(t, r, s, i);
    var y = t.memoizedState;
    a !== b || x !== y || jt.current || hr ? (typeof B == "function" && (lc(t, n, B, r), y = t.memoizedState), (h = hr || L0(t, n, h, r, x, y, f) || !1) ? (w || typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function" || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(r, y, f), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(r, y, f)), typeof s.componentDidUpdate == "function" && (t.flags |= 4), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof s.componentDidUpdate != "function" || a === e.memoizedProps && x === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && x === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = y), s.props = r, s.state = y, s.context = f, r = h) : (typeof s.componentDidUpdate != "function" || a === e.memoizedProps && x === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && x === e.memoizedState || (t.flags |= 1024), r = !1);
} return hc(e, t, n, r, o, i); }
function hc(e, t, n, r, i, o) { Lp(e, t); var s = (t.flags & 128) !== 0; if (!r && !s)
    return i && F0(t, n, !1), tr(e, t, o); r = t.stateNode, Bw.current = t; var a = s && typeof n.getDerivedStateFromError != "function" ? null : r.render(); return t.flags |= 1, e !== null && s ? (t.child = Ki(t, e.child, null, o), t.child = Ki(t, null, a, o)) : Ut(e, t, a, o), t.memoizedState = r.state, i && F0(t, n, !0), t.child; }
function qp(e) { var t = e.stateNode; t.pendingContext ? U0(e, t.pendingContext, t.pendingContext !== t.context) : t.context && U0(e, t.context, !1), _f(e, t.containerInfo); }
function Z0(e, t, n, r, i) { return Yi(), hf(i), t.flags |= 256, Ut(e, t, n, r), t.child; }
var pc = { dehydrated: null, treeContext: null, retryLane: 0 };
function yc(e) { return { baseLanes: e, cachePool: null, transitions: null }; }
function Hp(e, t, n) { var r = t.pendingProps, i = We.current, o = !1, s = (t.flags & 128) !== 0, a; if ((a = s) || (a = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0), a ? (o = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (i |= 1), je(We, i & 1), e === null)
    return ac(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (s = r.children, e = r.fallback, o ? (r = t.mode, o = t.child, s = { mode: "hidden", children: s }, !(r & 1) && o !== null ? (o.childLanes = 0, o.pendingProps = s) : o = xu(s, r, 0, null), e = Jr(e, r, n, null), o.return = t, e.return = t, o.sibling = e, t.child = o, t.child.memoizedState = yc(n), t.memoizedState = pc, e) : Af(t, s)); if (i = e.memoizedState, i !== null && (a = i.dehydrated, a !== null))
    return Aw(e, t, s, r, a, i, n); if (o) {
    o = r.fallback, s = t.mode, i = e.child, a = i.sibling;
    var f = { mode: "hidden", children: r.children };
    return !(s & 1) && t.child !== i ? (r = t.child, r.childLanes = 0, r.pendingProps = f, t.deletions = null) : (r = kr(i, f), r.subtreeFlags = i.subtreeFlags & 14680064), a !== null ? o = kr(a, o) : (o = Jr(o, s, n, null), o.flags |= 2), o.return = t, r.return = t, r.sibling = o, t.child = r, r = o, o = t.child, s = e.child.memoizedState, s = s === null ? yc(n) : { baseLanes: s.baseLanes | n, cachePool: null, transitions: s.transitions }, o.memoizedState = s, o.childLanes = e.childLanes & ~n, t.memoizedState = pc, r;
} return o = e.child, e = o.sibling, r = kr(o, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r; }
function Af(e, t) { return t = xu({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t; }
function Us(e, t, n, r) { return r !== null && hf(r), Ki(t, e.child, null, n), e = Af(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e; }
function Aw(e, t, n, r, i, o, s) { if (n)
    return t.flags & 256 ? (t.flags &= -257, r = fl(Error(le(422))), Us(e, t, s, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (o = r.fallback, i = t.mode, r = xu({ mode: "visible", children: r.children }, i, 0, null), o = Jr(o, i, s, null), o.flags |= 2, r.return = t, o.return = t, r.sibling = o, t.child = r, t.mode & 1 && Ki(t, e.child, null, s), t.child.memoizedState = yc(s), t.memoizedState = pc, o); if (!(t.mode & 1))
    return Us(e, t, s, null); if (i.data === "$!") {
    if (r = i.nextSibling && i.nextSibling.dataset, r)
        var a = r.dgst;
    return r = a, o = Error(le(419)), r = fl(o, r, void 0), Us(e, t, s, r);
} if (a = (s & e.childLanes) !== 0, Vt || a) {
    if (r = mt, r !== null) {
        switch (s & -s) {
            case 4:
                i = 2;
                break;
            case 16:
                i = 8;
                break;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
                i = 32;
                break;
            case 536870912:
                i = 268435456;
                break;
            default: i = 0;
        }
        i = i & (r.suspendedLanes | s) ? 0 : i, i !== 0 && i !== o.retryLane && (o.retryLane = i, er(e, i), En(r, e, i, -1));
    }
    return Uf(), r = fl(Error(le(421))), Us(e, t, s, r);
} return i.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Vw.bind(null, e), i._reactRetry = t, null) : (e = o.treeContext, Wt = Tr(i.nextSibling), Dt = t, He = !0, _n = null, e !== null && (en[tn++] = Dn, en[tn++] = Yn, en[tn++] = ni, Dn = e.id, Yn = e.overflow, ni = t), t = Af(t, r.children), t.flags |= 4096, t); }
function Q0(e, t, n) { e.lanes |= t; var r = e.alternate; r !== null && (r.lanes |= t), uc(e.return, t, n); }
function dl(e, t, n, r, i) { var o = e.memoizedState; o === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: i } : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = n, o.tailMode = i); }
function Gp(e, t, n) { var r = t.pendingProps, i = r.revealOrder, o = r.tail; if (Ut(e, t, r.children, n), r = We.current, r & 2)
    r = r & 1 | 2, t.flags |= 128;
else {
    if (e !== null && e.flags & 128)
        e: for (e = t.child; e !== null;) {
            if (e.tag === 13)
                e.memoizedState !== null && Q0(e, n, t);
            else if (e.tag === 19)
                Q0(e, n, t);
            else if (e.child !== null) {
                e.child.return = e, e = e.child;
                continue;
            }
            if (e === t)
                break e;
            for (; e.sibling === null;) {
                if (e.return === null || e.return === t)
                    break e;
                e = e.return;
            }
            e.sibling.return = e.return, e = e.sibling;
        }
    r &= 1;
} if (je(We, r), !(t.mode & 1))
    t.memoizedState = null;
else
    switch (i) {
        case "forwards":
            for (n = t.child, i = null; n !== null;)
                e = n.alternate, e !== null && Ga(e) === null && (i = n), n = n.sibling;
            n = i, n === null ? (i = t.child, t.child = null) : (i = n.sibling, n.sibling = null), dl(t, !1, i, n, o);
            break;
        case "backwards":
            for (n = null, i = t.child, t.child = null; i !== null;) {
                if (e = i.alternate, e !== null && Ga(e) === null) {
                    t.child = i;
                    break;
                }
                e = i.sibling, i.sibling = n, n = i, i = e;
            }
            dl(t, !0, n, null, o);
            break;
        case "together":
            dl(t, !1, null, null, void 0);
            break;
        default: t.memoizedState = null;
    } return t.child; }
function ia(e, t) { !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2); }
function tr(e, t, n) { if (e !== null && (t.dependencies = e.dependencies), ii |= t.lanes, !(n & t.childLanes))
    return null; if (e !== null && t.child !== e.child)
    throw Error(le(153)); if (t.child !== null) {
    for (e = t.child, n = kr(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null;)
        e = e.sibling, n = n.sibling = kr(e, e.pendingProps), n.return = t;
    n.sibling = null;
} return t.child; }
function Nw(e, t, n) { switch (t.tag) {
    case 3:
        qp(t), Yi();
        break;
    case 5:
        gp(t);
        break;
    case 1:
        Lt(t.type) && za(t);
        break;
    case 4:
        _f(t, t.stateNode.containerInfo);
        break;
    case 10:
        var r = t.type._context, i = t.memoizedProps.value;
        je(La, r._currentValue), r._currentValue = i;
        break;
    case 13:
        if (r = t.memoizedState, r !== null)
            return r.dehydrated !== null ? (je(We, We.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Hp(e, t, n) : (je(We, We.current & 1), e = tr(e, t, n), e !== null ? e.sibling : null);
        je(We, We.current & 1);
        break;
    case 19:
        if (r = (n & t.childLanes) !== 0, e.flags & 128) {
            if (r)
                return Gp(e, t, n);
            t.flags |= 128;
        }
        if (i = t.memoizedState, i !== null && (i.rendering = null, i.tail = null, i.lastEffect = null), je(We, We.current), r)
            break;
        return null;
    case 22:
    case 23: return t.lanes = 0, jp(e, t, n);
} return tr(e, t, n); }
var Wp, mc, Dp, Yp;
Wp = function (e, t) { for (var n = t.child; n !== null;) {
    if (n.tag === 5 || n.tag === 6)
        e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
        n.child.return = n, n = n.child;
        continue;
    }
    if (n === t)
        break;
    for (; n.sibling === null;) {
        if (n.return === null || n.return === t)
            return;
        n = n.return;
    }
    n.sibling.return = n.return, n = n.sibling;
} };
mc = function () { };
Dp = function (e, t, n, r) { var i = e.memoizedProps; if (i !== r) {
    e = t.stateNode, Zr($n.current);
    var o = null;
    switch (n) {
        case "input":
            i = $l(e, i), r = $l(e, r), o = [];
            break;
        case "select":
            i = Ye({}, i, { value: void 0 }), r = Ye({}, r, { value: void 0 }), o = [];
            break;
        case "textarea":
            i = jl(e, i), r = jl(e, r), o = [];
            break;
        default: typeof i.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Ma);
    }
    ql(n, r);
    var s;
    n = null;
    for (h in i)
        if (!r.hasOwnProperty(h) && i.hasOwnProperty(h) && i[h] != null)
            if (h === "style") {
                var a = i[h];
                for (s in a)
                    a.hasOwnProperty(s) && (n || (n = {}), n[s] = "");
            }
            else
                h !== "dangerouslySetInnerHTML" && h !== "children" && h !== "suppressContentEditableWarning" && h !== "suppressHydrationWarning" && h !== "autoFocus" && (Vo.hasOwnProperty(h) ? o || (o = []) : (o = o || []).push(h, null));
    for (h in r) {
        var f = r[h];
        if (a = i != null ? i[h] : void 0, r.hasOwnProperty(h) && f !== a && (f != null || a != null))
            if (h === "style")
                if (a) {
                    for (s in a)
                        !a.hasOwnProperty(s) || f && f.hasOwnProperty(s) || (n || (n = {}), n[s] = "");
                    for (s in f)
                        f.hasOwnProperty(s) && a[s] !== f[s] && (n || (n = {}), n[s] = f[s]);
                }
                else
                    n || (o || (o = []), o.push(h, n)), n = f;
            else
                h === "dangerouslySetInnerHTML" ? (f = f ? f.__html : void 0, a = a ? a.__html : void 0, f != null && a !== f && (o = o || []).push(h, f)) : h === "children" ? typeof f != "string" && typeof f != "number" || (o = o || []).push(h, "" + f) : h !== "suppressContentEditableWarning" && h !== "suppressHydrationWarning" && (Vo.hasOwnProperty(h) ? (f != null && h === "onScroll" && Le("scroll", e), o || a === f || (o = [])) : (o = o || []).push(h, f));
    }
    n && (o = o || []).push("style", n);
    var h = o;
    (t.updateQueue = h) && (t.flags |= 4);
} };
Yp = function (e, t, n, r) { n !== r && (t.flags |= 4); };
function yo(e, t) { if (!He)
    switch (e.tailMode) {
        case "hidden":
            t = e.tail;
            for (var n = null; t !== null;)
                t.alternate !== null && (n = t), t = t.sibling;
            n === null ? e.tail = null : n.sibling = null;
            break;
        case "collapsed":
            n = e.tail;
            for (var r = null; n !== null;)
                n.alternate !== null && (r = n), n = n.sibling;
            r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null;
    } }
function bt(e) { var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0; if (t)
    for (var i = e.child; i !== null;)
        n |= i.lanes | i.childLanes, r |= i.subtreeFlags & 14680064, r |= i.flags & 14680064, i.return = e, i = i.sibling;
else
    for (i = e.child; i !== null;)
        n |= i.lanes | i.childLanes, r |= i.subtreeFlags, r |= i.flags, i.return = e, i = i.sibling; return e.subtreeFlags |= r, e.childLanes = n, t; }
function kw(e, t, n) { var r = t.pendingProps; switch (df(t), t.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14: return bt(t), null;
    case 1: return Lt(t.type) && $a(), bt(t), null;
    case 3: return r = t.stateNode, Zi(), qe(jt), qe(Nt), xf(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Rs(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, _n !== null && (Sc(_n), _n = null))), mc(e, t), bt(t), null;
    case 5:
        vf(t);
        var i = Zr(Xo.current);
        if (n = t.type, e !== null && t.stateNode != null)
            Dp(e, t, n, r, i), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
        else {
            if (!r) {
                if (t.stateNode === null)
                    throw Error(le(166));
                return bt(t), null;
            }
            if (e = Zr($n.current), Rs(t)) {
                r = t.stateNode, n = t.type;
                var o = t.memoizedProps;
                switch (r[Fn] = t, r[Zo] = o, e = (t.mode & 1) !== 0, n) {
                    case "dialog":
                        Le("cancel", r), Le("close", r);
                        break;
                    case "iframe":
                    case "object":
                    case "embed":
                        Le("load", r);
                        break;
                    case "video":
                    case "audio":
                        for (i = 0; i < xo.length; i++)
                            Le(xo[i], r);
                        break;
                    case "source":
                        Le("error", r);
                        break;
                    case "img":
                    case "image":
                    case "link":
                        Le("error", r), Le("load", r);
                        break;
                    case "details":
                        Le("toggle", r);
                        break;
                    case "input":
                        s0(r, o), Le("invalid", r);
                        break;
                    case "select":
                        r._wrapperState = { wasMultiple: !!o.multiple }, Le("invalid", r);
                        break;
                    case "textarea": u0(r, o), Le("invalid", r);
                }
                ql(n, o), i = null;
                for (var s in o)
                    if (o.hasOwnProperty(s)) {
                        var a = o[s];
                        s === "children" ? typeof a == "string" ? r.textContent !== a && (o.suppressHydrationWarning !== !0 && Is(r.textContent, a, e), i = ["children", a]) : typeof a == "number" && r.textContent !== "" + a && (o.suppressHydrationWarning !== !0 && Is(r.textContent, a, e), i = ["children", "" + a]) : Vo.hasOwnProperty(s) && a != null && s === "onScroll" && Le("scroll", r);
                    }
                switch (n) {
                    case "input":
                        Es(r), a0(r, o, !0);
                        break;
                    case "textarea":
                        Es(r), l0(r);
                        break;
                    case "select":
                    case "option": break;
                    default: typeof o.onClick == "function" && (r.onclick = Ma);
                }
                r = i, t.updateQueue = r, r !== null && (t.flags |= 4);
            }
            else {
                s = i.nodeType === 9 ? i : i.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Eh(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = s.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = s.createElement(n, { is: r.is }) : (e = s.createElement(n), n === "select" && (s = e, r.multiple ? s.multiple = !0 : r.size && (s.size = r.size))) : e = s.createElementNS(e, n), e[Fn] = t, e[Zo] = r, Wp(e, t, !1, !1), t.stateNode = e;
                e: {
                    switch (s = Hl(n, r), n) {
                        case "dialog":
                            Le("cancel", e), Le("close", e), i = r;
                            break;
                        case "iframe":
                        case "object":
                        case "embed":
                            Le("load", e), i = r;
                            break;
                        case "video":
                        case "audio":
                            for (i = 0; i < xo.length; i++)
                                Le(xo[i], e);
                            i = r;
                            break;
                        case "source":
                            Le("error", e), i = r;
                            break;
                        case "img":
                        case "image":
                        case "link":
                            Le("error", e), Le("load", e), i = r;
                            break;
                        case "details":
                            Le("toggle", e), i = r;
                            break;
                        case "input":
                            s0(e, r), i = $l(e, r), Le("invalid", e);
                            break;
                        case "option":
                            i = r;
                            break;
                        case "select":
                            e._wrapperState = { wasMultiple: !!r.multiple }, i = Ye({}, r, { value: void 0 }), Le("invalid", e);
                            break;
                        case "textarea":
                            u0(e, r), i = jl(e, r), Le("invalid", e);
                            break;
                        default: i = r;
                    }
                    ql(n, i), a = i;
                    for (o in a)
                        if (a.hasOwnProperty(o)) {
                            var f = a[o];
                            o === "style" ? Th(e, f) : o === "dangerouslySetInnerHTML" ? (f = f ? f.__html : void 0, f != null && bh(e, f)) : o === "children" ? typeof f == "string" ? (n !== "textarea" || f !== "") && jo(e, f) : typeof f == "number" && jo(e, "" + f) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (Vo.hasOwnProperty(o) ? f != null && o === "onScroll" && Le("scroll", e) : f != null && Zc(e, o, f, s));
                        }
                    switch (n) {
                        case "input":
                            Es(e), a0(e, r, !1);
                            break;
                        case "textarea":
                            Es(e), l0(e);
                            break;
                        case "option":
                            r.value != null && e.setAttribute("value", "" + Rr(r.value));
                            break;
                        case "select":
                            e.multiple = !!r.multiple, o = r.value, o != null ? $i(e, !!r.multiple, o, !1) : r.defaultValue != null && $i(e, !!r.multiple, r.defaultValue, !0);
                            break;
                        default: typeof i.onClick == "function" && (e.onclick = Ma);
                    }
                    switch (n) {
                        case "button":
                        case "input":
                        case "select":
                        case "textarea":
                            r = !!r.autoFocus;
                            break e;
                        case "img":
                            r = !0;
                            break e;
                        default: r = !1;
                    }
                }
                r && (t.flags |= 4);
            }
            t.ref !== null && (t.flags |= 512, t.flags |= 2097152);
        }
        return bt(t), null;
    case 6:
        if (e && t.stateNode != null)
            Yp(e, t, e.memoizedProps, r);
        else {
            if (typeof r != "string" && t.stateNode === null)
                throw Error(le(166));
            if (n = Zr(Xo.current), Zr($n.current), Rs(t)) {
                if (r = t.stateNode, n = t.memoizedProps, r[Fn] = t, (o = r.nodeValue !== n) && (e = Dt, e !== null))
                    switch (e.tag) {
                        case 3:
                            Is(r.nodeValue, n, (e.mode & 1) !== 0);
                            break;
                        case 5: e.memoizedProps.suppressHydrationWarning !== !0 && Is(r.nodeValue, n, (e.mode & 1) !== 0);
                    }
                o && (t.flags |= 4);
            }
            else
                r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[Fn] = t, t.stateNode = r;
        }
        return bt(t), null;
    case 13:
        if (qe(We), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            if (He && Wt !== null && t.mode & 1 && !(t.flags & 128))
                dp(), Yi(), t.flags |= 98560, o = !1;
            else if (o = Rs(t), r !== null && r.dehydrated !== null) {
                if (e === null) {
                    if (!o)
                        throw Error(le(318));
                    if (o = t.memoizedState, o = o !== null ? o.dehydrated : null, !o)
                        throw Error(le(317));
                    o[Fn] = t;
                }
                else
                    Yi(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
                bt(t), o = !1;
            }
            else
                _n !== null && (Sc(_n), _n = null), o = !0;
            if (!o)
                return t.flags & 65536 ? t : null;
        }
        return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || We.current & 1 ? at === 0 && (at = 3) : Uf())), t.updateQueue !== null && (t.flags |= 4), bt(t), null);
    case 4: return Zi(), mc(e, t), e === null && Yo(t.stateNode.containerInfo), bt(t), null;
    case 10: return mf(t.type._context), bt(t), null;
    case 17: return Lt(t.type) && $a(), bt(t), null;
    case 19:
        if (qe(We), o = t.memoizedState, o === null)
            return bt(t), null;
        if (r = (t.flags & 128) !== 0, s = o.rendering, s === null)
            if (r)
                yo(o, !1);
            else {
                if (at !== 0 || e !== null && e.flags & 128)
                    for (e = t.child; e !== null;) {
                        if (s = Ga(e), s !== null) {
                            for (t.flags |= 128, yo(o, !1), r = s.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null;)
                                o = n, e = r, o.flags &= 14680066, s = o.alternate, s === null ? (o.childLanes = 0, o.lanes = e, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = s.childLanes, o.lanes = s.lanes, o.child = s.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = s.memoizedProps, o.memoizedState = s.memoizedState, o.updateQueue = s.updateQueue, o.type = s.type, e = s.dependencies, o.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
                            return je(We, We.current & 1 | 2), t.child;
                        }
                        e = e.sibling;
                    }
                o.tail !== null && et() > Xi && (t.flags |= 128, r = !0, yo(o, !1), t.lanes = 4194304);
            }
        else {
            if (!r)
                if (e = Ga(s), e !== null) {
                    if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), yo(o, !0), o.tail === null && o.tailMode === "hidden" && !s.alternate && !He)
                        return bt(t), null;
                }
                else
                    2 * et() - o.renderingStartTime > Xi && n !== 1073741824 && (t.flags |= 128, r = !0, yo(o, !1), t.lanes = 4194304);
            o.isBackwards ? (s.sibling = t.child, t.child = s) : (n = o.last, n !== null ? n.sibling = s : t.child = s, o.last = s);
        }
        return o.tail !== null ? (t = o.tail, o.rendering = t, o.tail = t.sibling, o.renderingStartTime = et(), t.sibling = null, n = We.current, je(We, r ? n & 1 | 2 : n & 1), t) : (bt(t), null);
    case 22:
    case 23: return Of(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? Ht & 1073741824 && (bt(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : bt(t), null;
    case 24: return null;
    case 25: return null;
} throw Error(le(156, t.tag)); }
function Iw(e, t) { switch (df(t), t.tag) {
    case 1: return Lt(t.type) && $a(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3: return Zi(), qe(jt), qe(Nt), xf(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5: return vf(t), null;
    case 13:
        if (qe(We), e = t.memoizedState, e !== null && e.dehydrated !== null) {
            if (t.alternate === null)
                throw Error(le(340));
            Yi();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19: return qe(We), null;
    case 4: return Zi(), null;
    case 10: return mf(t.type._context), null;
    case 22:
    case 23: return Of(), null;
    case 24: return null;
    default: return null;
} }
var Fs = !1, At = !1, Rw = typeof WeakSet == "function" ? WeakSet : Set, ge = null;
function Oi(e, t) { var n = e.ref; if (n !== null)
    if (typeof n == "function")
        try {
            n(null);
        }
        catch (r) {
            Ke(e, t, r);
        }
    else
        n.current = null; }
function gc(e, t, n) { try {
    n();
}
catch (r) {
    Ke(e, t, r);
} }
var X0 = !1;
function Ow(e, t) { if (ec = Fa, e = Jh(), cf(e)) {
    if ("selectionStart" in e)
        var n = { start: e.selectionStart, end: e.selectionEnd };
    else
        e: {
            n = (n = e.ownerDocument) && n.defaultView || window;
            var r = n.getSelection && n.getSelection();
            if (r && r.rangeCount !== 0) {
                n = r.anchorNode;
                var i = r.anchorOffset, o = r.focusNode;
                r = r.focusOffset;
                try {
                    n.nodeType, o.nodeType;
                }
                catch {
                    n = null;
                    break e;
                }
                var s = 0, a = -1, f = -1, h = 0, w = 0, b = e, x = null;
                t: for (;;) {
                    for (var B; b !== n || i !== 0 && b.nodeType !== 3 || (a = s + i), b !== o || r !== 0 && b.nodeType !== 3 || (f = s + r), b.nodeType === 3 && (s += b.nodeValue.length), (B = b.firstChild) !== null;)
                        x = b, b = B;
                    for (;;) {
                        if (b === e)
                            break t;
                        if (x === n && ++h === i && (a = s), x === o && ++w === r && (f = s), (B = b.nextSibling) !== null)
                            break;
                        b = x, x = b.parentNode;
                    }
                    b = B;
                }
                n = a === -1 || f === -1 ? null : { start: a, end: f };
            }
            else
                n = null;
        }
    n = n || { start: 0, end: 0 };
}
else
    n = null; for (tc = { focusedElem: e, selectionRange: n }, Fa = !1, ge = t; ge !== null;)
    if (t = ge, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null)
        e.return = t, ge = e;
    else
        for (; ge !== null;) {
            t = ge;
            try {
                var y = t.alternate;
                if (t.flags & 1024)
                    switch (t.tag) {
                        case 0:
                        case 11:
                        case 15: break;
                        case 1:
                            if (y !== null) {
                                var O = y.memoizedProps, M = y.memoizedState, A = t.stateNode, v = A.getSnapshotBeforeUpdate(t.elementType === t.type ? O : yn(t.type, O), M);
                                A.__reactInternalSnapshotBeforeUpdate = v;
                            }
                            break;
                        case 3:
                            var E = t.stateNode.containerInfo;
                            E.nodeType === 1 ? E.textContent = "" : E.nodeType === 9 && E.documentElement && E.removeChild(E.documentElement);
                            break;
                        case 5:
                        case 6:
                        case 4:
                        case 17: break;
                        default: throw Error(le(163));
                    }
            }
            catch (z) {
                Ke(t, t.return, z);
            }
            if (e = t.sibling, e !== null) {
                e.return = t.return, ge = e;
                break;
            }
            ge = t.return;
        } return y = X0, X0 = !1, y; }
function Uo(e, t, n) { var r = t.updateQueue; if (r = r !== null ? r.lastEffect : null, r !== null) {
    var i = r = r.next;
    do {
        if ((i.tag & e) === e) {
            var o = i.destroy;
            i.destroy = void 0, o !== void 0 && gc(t, n, o);
        }
        i = i.next;
    } while (i !== r);
} }
function _u(e, t) { if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
    var n = t = t.next;
    do {
        if ((n.tag & e) === e) {
            var r = n.create;
            n.destroy = r();
        }
        n = n.next;
    } while (n !== t);
} }
function wc(e) { var t = e.ref; if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
        case 5:
            e = n;
            break;
        default: e = n;
    }
    typeof t == "function" ? t(e) : t.current = e;
} }
function Kp(e) { var t = e.alternate; t !== null && (e.alternate = null, Kp(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Fn], delete t[Zo], delete t[ic], delete t[pw], delete t[yw])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null; }
function Zp(e) { return e.tag === 5 || e.tag === 3 || e.tag === 4; }
function J0(e) { e: for (;;) {
    for (; e.sibling === null;) {
        if (e.return === null || Zp(e.return))
            return null;
        e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;) {
        if (e.flags & 2 || e.child === null || e.tag === 4)
            continue e;
        e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2))
        return e.stateNode;
} }
function _c(e, t, n) { var r = e.tag; if (r === 5 || r === 6)
    e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Ma));
else if (r !== 4 && (e = e.child, e !== null))
    for (_c(e, t, n), e = e.sibling; e !== null;)
        _c(e, t, n), e = e.sibling; }
function vc(e, t, n) { var r = e.tag; if (r === 5 || r === 6)
    e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
else if (r !== 4 && (e = e.child, e !== null))
    for (vc(e, t, n), e = e.sibling; e !== null;)
        vc(e, t, n), e = e.sibling; }
var wt = null, gn = !1;
function or(e, t, n) { for (n = n.child; n !== null;)
    Qp(e, t, n), n = n.sibling; }
function Qp(e, t, n) { if (Mn && typeof Mn.onCommitFiberUnmount == "function")
    try {
        Mn.onCommitFiberUnmount(fu, n);
    }
    catch { } switch (n.tag) {
    case 5: At || Oi(n, t);
    case 6:
        var r = wt, i = gn;
        wt = null, or(e, t, n), wt = r, gn = i, wt !== null && (gn ? (e = wt, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : wt.removeChild(n.stateNode));
        break;
    case 18:
        wt !== null && (gn ? (e = wt, n = n.stateNode, e.nodeType === 8 ? ol(e.parentNode, n) : e.nodeType === 1 && ol(e, n), Go(e)) : ol(wt, n.stateNode));
        break;
    case 4:
        r = wt, i = gn, wt = n.stateNode.containerInfo, gn = !0, or(e, t, n), wt = r, gn = i;
        break;
    case 0:
    case 11:
    case 14:
    case 15:
        if (!At && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
            i = r = r.next;
            do {
                var o = i, s = o.destroy;
                o = o.tag, s !== void 0 && (o & 2 || o & 4) && gc(n, t, s), i = i.next;
            } while (i !== r);
        }
        or(e, t, n);
        break;
    case 1:
        if (!At && (Oi(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function"))
            try {
                r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
            }
            catch (a) {
                Ke(n, t, a);
            }
        or(e, t, n);
        break;
    case 21:
        or(e, t, n);
        break;
    case 22:
        n.mode & 1 ? (At = (r = At) || n.memoizedState !== null, or(e, t, n), At = r) : or(e, t, n);
        break;
    default: or(e, t, n);
} }
function ed(e) { var t = e.updateQueue; if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Rw), t.forEach(function (r) { var i = jw.bind(null, e, r); n.has(r) || (n.add(r), r.then(i, i)); });
} }
function ln(e, t) { var n = t.deletions; if (n !== null)
    for (var r = 0; r < n.length; r++) {
        var i = n[r];
        try {
            var o = e, s = t, a = s;
            e: for (; a !== null;) {
                switch (a.tag) {
                    case 5:
                        wt = a.stateNode, gn = !1;
                        break e;
                    case 3:
                        wt = a.stateNode.containerInfo, gn = !0;
                        break e;
                    case 4:
                        wt = a.stateNode.containerInfo, gn = !0;
                        break e;
                }
                a = a.return;
            }
            if (wt === null)
                throw Error(le(160));
            Qp(o, s, i), wt = null, gn = !1;
            var f = i.alternate;
            f !== null && (f.return = null), i.return = null;
        }
        catch (h) {
            Ke(i, t, h);
        }
    } if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null;)
        Xp(t, e), t = t.sibling; }
function Xp(e, t) { var n = e.alternate, r = e.flags; switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
        if (ln(t, e), Tn(e), r & 4) {
            try {
                Uo(3, e, e.return), _u(3, e);
            }
            catch (O) {
                Ke(e, e.return, O);
            }
            try {
                Uo(5, e, e.return);
            }
            catch (O) {
                Ke(e, e.return, O);
            }
        }
        break;
    case 1:
        ln(t, e), Tn(e), r & 512 && n !== null && Oi(n, n.return);
        break;
    case 5:
        if (ln(t, e), Tn(e), r & 512 && n !== null && Oi(n, n.return), e.flags & 32) {
            var i = e.stateNode;
            try {
                jo(i, "");
            }
            catch (O) {
                Ke(e, e.return, O);
            }
        }
        if (r & 4 && (i = e.stateNode, i != null)) {
            var o = e.memoizedProps, s = n !== null ? n.memoizedProps : o, a = e.type, f = e.updateQueue;
            if (e.updateQueue = null, f !== null)
                try {
                    a === "input" && o.type === "radio" && o.name != null && vh(i, o), Hl(a, s);
                    var h = Hl(a, o);
                    for (s = 0; s < f.length; s += 2) {
                        var w = f[s], b = f[s + 1];
                        w === "style" ? Th(i, b) : w === "dangerouslySetInnerHTML" ? bh(i, b) : w === "children" ? jo(i, b) : Zc(i, w, b, h);
                    }
                    switch (a) {
                        case "input":
                            zl(i, o);
                            break;
                        case "textarea":
                            xh(i, o);
                            break;
                        case "select":
                            var x = i._wrapperState.wasMultiple;
                            i._wrapperState.wasMultiple = !!o.multiple;
                            var B = o.value;
                            B != null ? $i(i, !!o.multiple, B, !1) : x !== !!o.multiple && (o.defaultValue != null ? $i(i, !!o.multiple, o.defaultValue, !0) : $i(i, !!o.multiple, o.multiple ? [] : "", !1));
                    }
                    i[Zo] = o;
                }
                catch (O) {
                    Ke(e, e.return, O);
                }
        }
        break;
    case 6:
        if (ln(t, e), Tn(e), r & 4) {
            if (e.stateNode === null)
                throw Error(le(162));
            i = e.stateNode, o = e.memoizedProps;
            try {
                i.nodeValue = o;
            }
            catch (O) {
                Ke(e, e.return, O);
            }
        }
        break;
    case 3:
        if (ln(t, e), Tn(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
            try {
                Go(t.containerInfo);
            }
            catch (O) {
                Ke(e, e.return, O);
            }
        break;
    case 4:
        ln(t, e), Tn(e);
        break;
    case 13:
        ln(t, e), Tn(e), i = e.child, i.flags & 8192 && (o = i.memoizedState !== null, i.stateNode.isHidden = o, !o || i.alternate !== null && i.alternate.memoizedState !== null || (If = et())), r & 4 && ed(e);
        break;
    case 22:
        if (w = n !== null && n.memoizedState !== null, e.mode & 1 ? (At = (h = At) || w, ln(t, e), At = h) : ln(t, e), Tn(e), r & 8192) {
            if (h = e.memoizedState !== null, (e.stateNode.isHidden = h) && !w && e.mode & 1)
                for (ge = e, w = e.child; w !== null;) {
                    for (b = ge = w; ge !== null;) {
                        switch (x = ge, B = x.child, x.tag) {
                            case 0:
                            case 11:
                            case 14:
                            case 15:
                                Uo(4, x, x.return);
                                break;
                            case 1:
                                Oi(x, x.return);
                                var y = x.stateNode;
                                if (typeof y.componentWillUnmount == "function") {
                                    r = x, n = x.return;
                                    try {
                                        t = r, y.props = t.memoizedProps, y.state = t.memoizedState, y.componentWillUnmount();
                                    }
                                    catch (O) {
                                        Ke(r, n, O);
                                    }
                                }
                                break;
                            case 5:
                                Oi(x, x.return);
                                break;
                            case 22: if (x.memoizedState !== null) {
                                nd(b);
                                continue;
                            }
                        }
                        B !== null ? (B.return = x, ge = B) : nd(b);
                    }
                    w = w.sibling;
                }
            e: for (w = null, b = e;;) {
                if (b.tag === 5) {
                    if (w === null) {
                        w = b;
                        try {
                            i = b.stateNode, h ? (o = i.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (a = b.stateNode, f = b.memoizedProps.style, s = f != null && f.hasOwnProperty("display") ? f.display : null, a.style.display = Sh("display", s));
                        }
                        catch (O) {
                            Ke(e, e.return, O);
                        }
                    }
                }
                else if (b.tag === 6) {
                    if (w === null)
                        try {
                            b.stateNode.nodeValue = h ? "" : b.memoizedProps;
                        }
                        catch (O) {
                            Ke(e, e.return, O);
                        }
                }
                else if ((b.tag !== 22 && b.tag !== 23 || b.memoizedState === null || b === e) && b.child !== null) {
                    b.child.return = b, b = b.child;
                    continue;
                }
                if (b === e)
                    break e;
                for (; b.sibling === null;) {
                    if (b.return === null || b.return === e)
                        break e;
                    w === b && (w = null), b = b.return;
                }
                w === b && (w = null), b.sibling.return = b.return, b = b.sibling;
            }
        }
        break;
    case 19:
        ln(t, e), Tn(e), r & 4 && ed(e);
        break;
    case 21: break;
    default: ln(t, e), Tn(e);
} }
function Tn(e) { var t = e.flags; if (t & 2) {
    try {
        e: {
            for (var n = e.return; n !== null;) {
                if (Zp(n)) {
                    var r = n;
                    break e;
                }
                n = n.return;
            }
            throw Error(le(160));
        }
        switch (r.tag) {
            case 5:
                var i = r.stateNode;
                r.flags & 32 && (jo(i, ""), r.flags &= -33);
                var o = J0(e);
                vc(e, o, i);
                break;
            case 3:
            case 4:
                var s = r.stateNode.containerInfo, a = J0(e);
                _c(e, a, s);
                break;
            default: throw Error(le(161));
        }
    }
    catch (f) {
        Ke(e, e.return, f);
    }
    e.flags &= -3;
} t & 4096 && (e.flags &= -4097); }
function Uw(e, t, n) { ge = e, Jp(e); }
function Jp(e, t, n) { for (var r = (e.mode & 1) !== 0; ge !== null;) {
    var i = ge, o = i.child;
    if (i.tag === 22 && r) {
        var s = i.memoizedState !== null || Fs;
        if (!s) {
            var a = i.alternate, f = a !== null && a.memoizedState !== null || At;
            a = Fs;
            var h = At;
            if (Fs = s, (At = f) && !h)
                for (ge = i; ge !== null;)
                    s = ge, f = s.child, s.tag === 22 && s.memoizedState !== null ? rd(i) : f !== null ? (f.return = s, ge = f) : rd(i);
            for (; o !== null;)
                ge = o, Jp(o), o = o.sibling;
            ge = i, Fs = a, At = h;
        }
        td(e);
    }
    else
        i.subtreeFlags & 8772 && o !== null ? (o.return = i, ge = o) : td(e);
} }
function td(e) { for (; ge !== null;) {
    var t = ge;
    if (t.flags & 8772) {
        var n = t.alternate;
        try {
            if (t.flags & 8772)
                switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        At || _u(5, t);
                        break;
                    case 1:
                        var r = t.stateNode;
                        if (t.flags & 4 && !At)
                            if (n === null)
                                r.componentDidMount();
                            else {
                                var i = t.elementType === t.type ? n.memoizedProps : yn(t.type, n.memoizedProps);
                                r.componentDidUpdate(i, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                            }
                        var o = t.updateQueue;
                        o !== null && z0(t, o, r);
                        break;
                    case 3:
                        var s = t.updateQueue;
                        if (s !== null) {
                            if (n = null, t.child !== null)
                                switch (t.child.tag) {
                                    case 5:
                                        n = t.child.stateNode;
                                        break;
                                    case 1: n = t.child.stateNode;
                                }
                            z0(t, s, n);
                        }
                        break;
                    case 5:
                        var a = t.stateNode;
                        if (n === null && t.flags & 4) {
                            n = a;
                            var f = t.memoizedProps;
                            switch (t.type) {
                                case "button":
                                case "input":
                                case "select":
                                case "textarea":
                                    f.autoFocus && n.focus();
                                    break;
                                case "img": f.src && (n.src = f.src);
                            }
                        }
                        break;
                    case 6: break;
                    case 4: break;
                    case 12: break;
                    case 13:
                        if (t.memoizedState === null) {
                            var h = t.alternate;
                            if (h !== null) {
                                var w = h.memoizedState;
                                if (w !== null) {
                                    var b = w.dehydrated;
                                    b !== null && Go(b);
                                }
                            }
                        }
                        break;
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25: break;
                    default: throw Error(le(163));
                }
            At || t.flags & 512 && wc(t);
        }
        catch (x) {
            Ke(t, t.return, x);
        }
    }
    if (t === e) {
        ge = null;
        break;
    }
    if (n = t.sibling, n !== null) {
        n.return = t.return, ge = n;
        break;
    }
    ge = t.return;
} }
function nd(e) { for (; ge !== null;) {
    var t = ge;
    if (t === e) {
        ge = null;
        break;
    }
    var n = t.sibling;
    if (n !== null) {
        n.return = t.return, ge = n;
        break;
    }
    ge = t.return;
} }
function rd(e) { for (; ge !== null;) {
    var t = ge;
    try {
        switch (t.tag) {
            case 0:
            case 11:
            case 15:
                var n = t.return;
                try {
                    _u(4, t);
                }
                catch (f) {
                    Ke(t, n, f);
                }
                break;
            case 1:
                var r = t.stateNode;
                if (typeof r.componentDidMount == "function") {
                    var i = t.return;
                    try {
                        r.componentDidMount();
                    }
                    catch (f) {
                        Ke(t, i, f);
                    }
                }
                var o = t.return;
                try {
                    wc(t);
                }
                catch (f) {
                    Ke(t, o, f);
                }
                break;
            case 5:
                var s = t.return;
                try {
                    wc(t);
                }
                catch (f) {
                    Ke(t, s, f);
                }
        }
    }
    catch (f) {
        Ke(t, t.return, f);
    }
    if (t === e) {
        ge = null;
        break;
    }
    var a = t.sibling;
    if (a !== null) {
        a.return = t.return, ge = a;
        break;
    }
    ge = t.return;
} }
var Fw = Math.ceil, Ya = rr.ReactCurrentDispatcher, Nf = rr.ReactCurrentOwner, on = rr.ReactCurrentBatchConfig, Ue = 0, mt = null, it = null, vt = 0, Ht = 0, Ui = Pr(0), at = 0, ns = null, ii = 0, vu = 0, kf = 0, Fo = null, zt = null, If = 0, Xi = 1 / 0, jn = null, Ka = !1, xc = null, Ar = null, Ps = !1, xr = null, Za = 0, Po = 0, Ec = null, oa = -1, sa = 0;
function Pt() { return Ue & 6 ? et() : oa !== -1 ? oa : oa = et(); }
function Nr(e) { return e.mode & 1 ? Ue & 2 && vt !== 0 ? vt & -vt : gw.transition !== null ? (sa === 0 && (sa = Mh()), sa) : (e = Ce, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Hh(e.type)), e) : 1; }
function En(e, t, n, r) { if (50 < Po)
    throw Po = 0, Ec = null, Error(le(185)); us(e, n, r), (!(Ue & 2) || e !== mt) && (e === mt && (!(Ue & 2) && (vu |= n), at === 4 && gr(e, vt)), qt(e, r), n === 1 && Ue === 0 && !(t.mode & 1) && (Xi = et() + 500, mu && Cr())); }
function qt(e, t) { var n = e.callbackNode; gg(e, t); var r = Ua(e, e === mt ? vt : 0); if (r === 0)
    n !== null && d0(n), e.callbackNode = null, e.callbackPriority = 0;
else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && d0(n), t === 1)
        e.tag === 0 ? mw(id.bind(null, e)) : lp(id.bind(null, e)), dw(function () { !(Ue & 6) && Cr(); }), n = null;
    else {
        switch ($h(r)) {
            case 1:
                n = tf;
                break;
            case 4:
                n = Ph;
                break;
            case 16:
                n = Oa;
                break;
            case 536870912:
                n = Ch;
                break;
            default: n = Oa;
        }
        n = a1(n, e1.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
} }
function e1(e, t) { if (oa = -1, sa = 0, Ue & 6)
    throw Error(le(327)); var n = e.callbackNode; if (qi() && e.callbackNode !== n)
    return null; var r = Ua(e, e === mt ? vt : 0); if (r === 0)
    return null; if (r & 30 || r & e.expiredLanes || t)
    t = Qa(e, r);
else {
    t = r;
    var i = Ue;
    Ue |= 2;
    var o = n1();
    (mt !== e || vt !== t) && (jn = null, Xi = et() + 500, Xr(e, t));
    do
        try {
            Mw();
            break;
        }
        catch (a) {
            t1(e, a);
        }
    while (1);
    yf(), Ya.current = o, Ue = i, it !== null ? t = 0 : (mt = null, vt = 0, t = at);
} if (t !== 0) {
    if (t === 2 && (i = Kl(e), i !== 0 && (r = i, t = bc(e, i))), t === 1)
        throw n = ns, Xr(e, 0), gr(e, r), qt(e, et()), n;
    if (t === 6)
        gr(e, r);
    else {
        if (i = e.current.alternate, !(r & 30) && !Pw(i) && (t = Qa(e, r), t === 2 && (o = Kl(e), o !== 0 && (r = o, t = bc(e, o))), t === 1))
            throw n = ns, Xr(e, 0), gr(e, r), qt(e, et()), n;
        switch (e.finishedWork = i, e.finishedLanes = r, t) {
            case 0:
            case 1: throw Error(le(345));
            case 2:
                Vr(e, zt, jn);
                break;
            case 3:
                if (gr(e, r), (r & 130023424) === r && (t = If + 500 - et(), 10 < t)) {
                    if (Ua(e, 0) !== 0)
                        break;
                    if (i = e.suspendedLanes, (i & r) !== r) {
                        Pt(), e.pingedLanes |= e.suspendedLanes & i;
                        break;
                    }
                    e.timeoutHandle = rc(Vr.bind(null, e, zt, jn), t);
                    break;
                }
                Vr(e, zt, jn);
                break;
            case 4:
                if (gr(e, r), (r & 4194240) === r)
                    break;
                for (t = e.eventTimes, i = -1; 0 < r;) {
                    var s = 31 - xn(r);
                    o = 1 << s, s = t[s], s > i && (i = s), r &= ~o;
                }
                if (r = i, r = et() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Fw(r / 1960)) - r, 10 < r) {
                    e.timeoutHandle = rc(Vr.bind(null, e, zt, jn), r);
                    break;
                }
                Vr(e, zt, jn);
                break;
            case 5:
                Vr(e, zt, jn);
                break;
            default: throw Error(le(329));
        }
    }
} return qt(e, et()), e.callbackNode === n ? e1.bind(null, e) : null; }
function bc(e, t) { var n = Fo; return e.current.memoizedState.isDehydrated && (Xr(e, t).flags |= 256), e = Qa(e, t), e !== 2 && (t = zt, zt = n, t !== null && Sc(t)), e; }
function Sc(e) { zt === null ? zt = e : zt.push.apply(zt, e); }
function Pw(e) { for (var t = e;;) {
    if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && (n = n.stores, n !== null))
            for (var r = 0; r < n.length; r++) {
                var i = n[r], o = i.getSnapshot;
                i = i.value;
                try {
                    if (!bn(o(), i))
                        return !1;
                }
                catch {
                    return !1;
                }
            }
    }
    if (n = t.child, t.subtreeFlags & 16384 && n !== null)
        n.return = t, t = n;
    else {
        if (t === e)
            break;
        for (; t.sibling === null;) {
            if (t.return === null || t.return === e)
                return !0;
            t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
    }
} return !0; }
function gr(e, t) { for (t &= ~kf, t &= ~vu, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t;) {
    var n = 31 - xn(t), r = 1 << n;
    e[n] = -1, t &= ~r;
} }
function id(e) { if (Ue & 6)
    throw Error(le(327)); qi(); var t = Ua(e, 0); if (!(t & 1))
    return qt(e, et()), null; var n = Qa(e, t); if (e.tag !== 0 && n === 2) {
    var r = Kl(e);
    r !== 0 && (t = r, n = bc(e, r));
} if (n === 1)
    throw n = ns, Xr(e, 0), gr(e, t), qt(e, et()), n; if (n === 6)
    throw Error(le(345)); return e.finishedWork = e.current.alternate, e.finishedLanes = t, Vr(e, zt, jn), qt(e, et()), null; }
function Rf(e, t) { var n = Ue; Ue |= 1; try {
    return e(t);
}
finally {
    Ue = n, Ue === 0 && (Xi = et() + 500, mu && Cr());
} }
function oi(e) { xr !== null && xr.tag === 0 && !(Ue & 6) && qi(); var t = Ue; Ue |= 1; var n = on.transition, r = Ce; try {
    if (on.transition = null, Ce = 1, e)
        return e();
}
finally {
    Ce = r, on.transition = n, Ue = t, !(Ue & 6) && Cr();
} }
function Of() { Ht = Ui.current, qe(Ui); }
function Xr(e, t) { e.finishedWork = null, e.finishedLanes = 0; var n = e.timeoutHandle; if (n !== -1 && (e.timeoutHandle = -1, fw(n)), it !== null)
    for (n = it.return; n !== null;) {
        var r = n;
        switch (df(r), r.tag) {
            case 1:
                r = r.type.childContextTypes, r != null && $a();
                break;
            case 3:
                Zi(), qe(jt), qe(Nt), xf();
                break;
            case 5:
                vf(r);
                break;
            case 4:
                Zi();
                break;
            case 13:
                qe(We);
                break;
            case 19:
                qe(We);
                break;
            case 10:
                mf(r.type._context);
                break;
            case 22:
            case 23: Of();
        }
        n = n.return;
    } if (mt = e, it = e = kr(e.current, null), vt = Ht = t, at = 0, ns = null, kf = vu = ii = 0, zt = Fo = null, Kr !== null) {
    for (t = 0; t < Kr.length; t++)
        if (n = Kr[t], r = n.interleaved, r !== null) {
            n.interleaved = null;
            var i = r.next, o = n.pending;
            if (o !== null) {
                var s = o.next;
                o.next = i, r.next = s;
            }
            n.pending = r;
        }
    Kr = null;
} return e; }
function t1(e, t) { do {
    var n = it;
    try {
        if (yf(), na.current = Da, Wa) {
            for (var r = De.memoizedState; r !== null;) {
                var i = r.queue;
                i !== null && (i.pending = null), r = r.next;
            }
            Wa = !1;
        }
        if (ri = 0, ht = ot = De = null, Oo = !1, Jo = 0, Nf.current = null, n === null || n.return === null) {
            at = 1, ns = t, it = null;
            break;
        }
        e: {
            var o = e, s = n.return, a = n, f = t;
            if (t = vt, a.flags |= 32768, f !== null && typeof f == "object" && typeof f.then == "function") {
                var h = f, w = a, b = w.tag;
                if (!(w.mode & 1) && (b === 0 || b === 11 || b === 15)) {
                    var x = w.alternate;
                    x ? (w.updateQueue = x.updateQueue, w.memoizedState = x.memoizedState, w.lanes = x.lanes) : (w.updateQueue = null, w.memoizedState = null);
                }
                var B = G0(s);
                if (B !== null) {
                    B.flags &= -257, W0(B, s, a, o, t), B.mode & 1 && H0(o, h, t), t = B, f = h;
                    var y = t.updateQueue;
                    if (y === null) {
                        var O = new Set;
                        O.add(f), t.updateQueue = O;
                    }
                    else
                        y.add(f);
                    break e;
                }
                else {
                    if (!(t & 1)) {
                        H0(o, h, t), Uf();
                        break e;
                    }
                    f = Error(le(426));
                }
            }
            else if (He && a.mode & 1) {
                var M = G0(s);
                if (M !== null) {
                    !(M.flags & 65536) && (M.flags |= 256), W0(M, s, a, o, t), hf(Qi(f, a));
                    break e;
                }
            }
            o = f = Qi(f, a), at !== 4 && (at = 2), Fo === null ? Fo = [o] : Fo.push(o), o = s;
            do {
                switch (o.tag) {
                    case 3:
                        o.flags |= 65536, t &= -t, o.lanes |= t;
                        var A = $p(o, f, t);
                        $0(o, A);
                        break e;
                    case 1:
                        a = f;
                        var v = o.type, E = o.stateNode;
                        if (!(o.flags & 128) && (typeof v.getDerivedStateFromError == "function" || E !== null && typeof E.componentDidCatch == "function" && (Ar === null || !Ar.has(E)))) {
                            o.flags |= 65536, t &= -t, o.lanes |= t;
                            var z = zp(o, a, t);
                            $0(o, z);
                            break e;
                        }
                }
                o = o.return;
            } while (o !== null);
        }
        i1(n);
    }
    catch (I) {
        t = I, it === n && n !== null && (it = n = n.return);
        continue;
    }
    break;
} while (1); }
function n1() { var e = Ya.current; return Ya.current = Da, e === null ? Da : e; }
function Uf() { (at === 0 || at === 3 || at === 2) && (at = 4), mt === null || !(ii & 268435455) && !(vu & 268435455) || gr(mt, vt); }
function Qa(e, t) { var n = Ue; Ue |= 2; var r = n1(); (mt !== e || vt !== t) && (jn = null, Xr(e, t)); do
    try {
        Cw();
        break;
    }
    catch (i) {
        t1(e, i);
    }
while (1); if (yf(), Ue = n, Ya.current = r, it !== null)
    throw Error(le(261)); return mt = null, vt = 0, at; }
function Cw() { for (; it !== null;)
    r1(it); }
function Mw() { for (; it !== null && !ug();)
    r1(it); }
function r1(e) { var t = s1(e.alternate, e, Ht); e.memoizedProps = e.pendingProps, t === null ? i1(e) : it = t, Nf.current = null; }
function i1(e) { var t = e; do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
        if (n = Iw(n, t), n !== null) {
            n.flags &= 32767, it = n;
            return;
        }
        if (e !== null)
            e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
        else {
            at = 6, it = null;
            return;
        }
    }
    else if (n = kw(n, t, Ht), n !== null) {
        it = n;
        return;
    }
    if (t = t.sibling, t !== null) {
        it = t;
        return;
    }
    it = t = e;
} while (t !== null); at === 0 && (at = 5); }
function Vr(e, t, n) { var r = Ce, i = on.transition; try {
    on.transition = null, Ce = 1, $w(e, t, n, r);
}
finally {
    on.transition = i, Ce = r;
} return null; }
function $w(e, t, n, r) { do
    qi();
while (xr !== null); if (Ue & 6)
    throw Error(le(327)); n = e.finishedWork; var i = e.finishedLanes; if (n === null)
    return null; if (e.finishedWork = null, e.finishedLanes = 0, n === e.current)
    throw Error(le(177)); e.callbackNode = null, e.callbackPriority = 0; var o = n.lanes | n.childLanes; if (wg(e, o), e === mt && (it = mt = null, vt = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Ps || (Ps = !0, a1(Oa, function () { return qi(), null; })), o = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || o) {
    o = on.transition, on.transition = null;
    var s = Ce;
    Ce = 1;
    var a = Ue;
    Ue |= 4, Nf.current = null, Ow(e, n), Xp(n, e), iw(tc), Fa = !!ec, tc = ec = null, e.current = n, Uw(n), lg(), Ue = a, Ce = s, on.transition = o;
}
else
    e.current = n; if (Ps && (Ps = !1, xr = e, Za = i), o = e.pendingLanes, o === 0 && (Ar = null), dg(n.stateNode), qt(e, et()), t !== null)
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
        i = t[n], r(i.value, { componentStack: i.stack, digest: i.digest }); if (Ka)
    throw Ka = !1, e = xc, xc = null, e; return Za & 1 && e.tag !== 0 && qi(), o = e.pendingLanes, o & 1 ? e === Ec ? Po++ : (Po = 0, Ec = e) : Po = 0, Cr(), null; }
function qi() { if (xr !== null) {
    var e = $h(Za), t = on.transition, n = Ce;
    try {
        if (on.transition = null, Ce = 16 > e ? 16 : e, xr === null)
            var r = !1;
        else {
            if (e = xr, xr = null, Za = 0, Ue & 6)
                throw Error(le(331));
            var i = Ue;
            for (Ue |= 4, ge = e.current; ge !== null;) {
                var o = ge, s = o.child;
                if (ge.flags & 16) {
                    var a = o.deletions;
                    if (a !== null) {
                        for (var f = 0; f < a.length; f++) {
                            var h = a[f];
                            for (ge = h; ge !== null;) {
                                var w = ge;
                                switch (w.tag) {
                                    case 0:
                                    case 11:
                                    case 15: Uo(8, w, o);
                                }
                                var b = w.child;
                                if (b !== null)
                                    b.return = w, ge = b;
                                else
                                    for (; ge !== null;) {
                                        w = ge;
                                        var x = w.sibling, B = w.return;
                                        if (Kp(w), w === h) {
                                            ge = null;
                                            break;
                                        }
                                        if (x !== null) {
                                            x.return = B, ge = x;
                                            break;
                                        }
                                        ge = B;
                                    }
                            }
                        }
                        var y = o.alternate;
                        if (y !== null) {
                            var O = y.child;
                            if (O !== null) {
                                y.child = null;
                                do {
                                    var M = O.sibling;
                                    O.sibling = null, O = M;
                                } while (O !== null);
                            }
                        }
                        ge = o;
                    }
                }
                if (o.subtreeFlags & 2064 && s !== null)
                    s.return = o, ge = s;
                else
                    e: for (; ge !== null;) {
                        if (o = ge, o.flags & 2048)
                            switch (o.tag) {
                                case 0:
                                case 11:
                                case 15: Uo(9, o, o.return);
                            }
                        var A = o.sibling;
                        if (A !== null) {
                            A.return = o.return, ge = A;
                            break e;
                        }
                        ge = o.return;
                    }
            }
            var v = e.current;
            for (ge = v; ge !== null;) {
                s = ge;
                var E = s.child;
                if (s.subtreeFlags & 2064 && E !== null)
                    E.return = s, ge = E;
                else
                    e: for (s = v; ge !== null;) {
                        if (a = ge, a.flags & 2048)
                            try {
                                switch (a.tag) {
                                    case 0:
                                    case 11:
                                    case 15: _u(9, a);
                                }
                            }
                            catch (I) {
                                Ke(a, a.return, I);
                            }
                        if (a === s) {
                            ge = null;
                            break e;
                        }
                        var z = a.sibling;
                        if (z !== null) {
                            z.return = a.return, ge = z;
                            break e;
                        }
                        ge = a.return;
                    }
            }
            if (Ue = i, Cr(), Mn && typeof Mn.onPostCommitFiberRoot == "function")
                try {
                    Mn.onPostCommitFiberRoot(fu, e);
                }
                catch { }
            r = !0;
        }
        return r;
    }
    finally {
        Ce = n, on.transition = t;
    }
} return !1; }
function od(e, t, n) { t = Qi(n, t), t = $p(e, t, 1), e = Br(e, t, 1), t = Pt(), e !== null && (us(e, 1, t), qt(e, t)); }
function Ke(e, t, n) { if (e.tag === 3)
    od(e, e, n);
else
    for (; t !== null;) {
        if (t.tag === 3) {
            od(t, e, n);
            break;
        }
        else if (t.tag === 1) {
            var r = t.stateNode;
            if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Ar === null || !Ar.has(r))) {
                e = Qi(n, e), e = zp(t, e, 1), t = Br(t, e, 1), e = Pt(), t !== null && (us(t, 1, e), qt(t, e));
                break;
            }
        }
        t = t.return;
    } }
function zw(e, t, n) { var r = e.pingCache; r !== null && r.delete(t), t = Pt(), e.pingedLanes |= e.suspendedLanes & n, mt === e && (vt & n) === n && (at === 4 || at === 3 && (vt & 130023424) === vt && 500 > et() - If ? Xr(e, 0) : kf |= n), qt(e, t); }
function o1(e, t) { t === 0 && (e.mode & 1 ? (t = Ts, Ts <<= 1, !(Ts & 130023424) && (Ts = 4194304)) : t = 1); var n = Pt(); e = er(e, t), e !== null && (us(e, t, n), qt(e, n)); }
function Vw(e) { var t = e.memoizedState, n = 0; t !== null && (n = t.retryLane), o1(e, n); }
function jw(e, t) { var n = 0; switch (e.tag) {
    case 13:
        var r = e.stateNode, i = e.memoizedState;
        i !== null && (n = i.retryLane);
        break;
    case 19:
        r = e.stateNode;
        break;
    default: throw Error(le(314));
} r !== null && r.delete(t), o1(e, n); }
var s1;
s1 = function (e, t, n) { if (e !== null)
    if (e.memoizedProps !== t.pendingProps || jt.current)
        Vt = !0;
    else {
        if (!(e.lanes & n) && !(t.flags & 128))
            return Vt = !1, Nw(e, t, n);
        Vt = !!(e.flags & 131072);
    }
else
    Vt = !1, He && t.flags & 1048576 && cp(t, ja, t.index); switch (t.lanes = 0, t.tag) {
    case 2:
        var r = t.type;
        ia(e, t), e = t.pendingProps;
        var i = Di(t, Nt.current);
        Li(t, n), i = bf(null, t, r, e, i, n);
        var o = Sf();
        return t.flags |= 1, typeof i == "object" && i !== null && typeof i.render == "function" && i.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Lt(r) ? (o = !0, za(t)) : o = !1, t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, wf(t), i.updater = wu, t.stateNode = i, i._reactInternals = t, cc(t, r, e, n), t = hc(null, t, r, !0, o, n)) : (t.tag = 0, He && o && ff(t), Ut(null, t, i, n), t = t.child), t;
    case 16:
        r = t.elementType;
        e: {
            switch (ia(e, t), e = t.pendingProps, i = r._init, r = i(r._payload), t.type = r, i = t.tag = qw(r), e = yn(r, e), i) {
                case 0:
                    t = dc(null, t, r, e, n);
                    break e;
                case 1:
                    t = K0(null, t, r, e, n);
                    break e;
                case 11:
                    t = D0(null, t, r, e, n);
                    break e;
                case 14:
                    t = Y0(null, t, r, yn(r.type, e), n);
                    break e;
            }
            throw Error(le(306, r, ""));
        }
        return t;
    case 0: return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : yn(r, i), dc(e, t, r, i, n);
    case 1: return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : yn(r, i), K0(e, t, r, i, n);
    case 3:
        e: {
            if (qp(t), e === null)
                throw Error(le(387));
            r = t.pendingProps, o = t.memoizedState, i = o.element, mp(e, t), Ha(t, r, null, n);
            var s = t.memoizedState;
            if (r = s.element, o.isDehydrated)
                if (o = { element: r, isDehydrated: !1, cache: s.cache, pendingSuspenseBoundaries: s.pendingSuspenseBoundaries, transitions: s.transitions }, t.updateQueue.baseState = o, t.memoizedState = o, t.flags & 256) {
                    i = Qi(Error(le(423)), t), t = Z0(e, t, r, n, i);
                    break e;
                }
                else if (r !== i) {
                    i = Qi(Error(le(424)), t), t = Z0(e, t, r, n, i);
                    break e;
                }
                else
                    for (Wt = Tr(t.stateNode.containerInfo.firstChild), Dt = t, He = !0, _n = null, n = pp(t, null, r, n), t.child = n; n;)
                        n.flags = n.flags & -3 | 4096, n = n.sibling;
            else {
                if (Yi(), r === i) {
                    t = tr(e, t, n);
                    break e;
                }
                Ut(e, t, r, n);
            }
            t = t.child;
        }
        return t;
    case 5: return gp(t), e === null && ac(t), r = t.type, i = t.pendingProps, o = e !== null ? e.memoizedProps : null, s = i.children, nc(r, i) ? s = null : o !== null && nc(r, o) && (t.flags |= 32), Lp(e, t), Ut(e, t, s, n), t.child;
    case 6: return e === null && ac(t), null;
    case 13: return Hp(e, t, n);
    case 4: return _f(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = Ki(t, null, r, n) : Ut(e, t, r, n), t.child;
    case 11: return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : yn(r, i), D0(e, t, r, i, n);
    case 7: return Ut(e, t, t.pendingProps, n), t.child;
    case 8: return Ut(e, t, t.pendingProps.children, n), t.child;
    case 12: return Ut(e, t, t.pendingProps.children, n), t.child;
    case 10:
        e: {
            if (r = t.type._context, i = t.pendingProps, o = t.memoizedProps, s = i.value, je(La, r._currentValue), r._currentValue = s, o !== null)
                if (bn(o.value, s)) {
                    if (o.children === i.children && !jt.current) {
                        t = tr(e, t, n);
                        break e;
                    }
                }
                else
                    for (o = t.child, o !== null && (o.return = t); o !== null;) {
                        var a = o.dependencies;
                        if (a !== null) {
                            s = o.child;
                            for (var f = a.firstContext; f !== null;) {
                                if (f.context === r) {
                                    if (o.tag === 1) {
                                        f = Qn(-1, n & -n), f.tag = 2;
                                        var h = o.updateQueue;
                                        if (h !== null) {
                                            h = h.shared;
                                            var w = h.pending;
                                            w === null ? f.next = f : (f.next = w.next, w.next = f), h.pending = f;
                                        }
                                    }
                                    o.lanes |= n, f = o.alternate, f !== null && (f.lanes |= n), uc(o.return, n, t), a.lanes |= n;
                                    break;
                                }
                                f = f.next;
                            }
                        }
                        else if (o.tag === 10)
                            s = o.type === t.type ? null : o.child;
                        else if (o.tag === 18) {
                            if (s = o.return, s === null)
                                throw Error(le(341));
                            s.lanes |= n, a = s.alternate, a !== null && (a.lanes |= n), uc(s, n, t), s = o.sibling;
                        }
                        else
                            s = o.child;
                        if (s !== null)
                            s.return = o;
                        else
                            for (s = o; s !== null;) {
                                if (s === t) {
                                    s = null;
                                    break;
                                }
                                if (o = s.sibling, o !== null) {
                                    o.return = s.return, s = o;
                                    break;
                                }
                                s = s.return;
                            }
                        o = s;
                    }
            Ut(e, t, i.children, n), t = t.child;
        }
        return t;
    case 9: return i = t.type, r = t.pendingProps.children, Li(t, n), i = sn(i), r = r(i), t.flags |= 1, Ut(e, t, r, n), t.child;
    case 14: return r = t.type, i = yn(r, t.pendingProps), i = yn(r.type, i), Y0(e, t, r, i, n);
    case 15: return Vp(e, t, t.type, t.pendingProps, n);
    case 17: return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : yn(r, i), ia(e, t), t.tag = 1, Lt(r) ? (e = !0, za(t)) : e = !1, Li(t, n), Mp(t, r, i), cc(t, r, i, n), hc(null, t, r, !0, e, n);
    case 19: return Gp(e, t, n);
    case 22: return jp(e, t, n);
} throw Error(le(156, t.tag)); };
function a1(e, t) { return Fh(e, t); }
function Lw(e, t, n, r) { this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null; }
function rn(e, t, n, r) { return new Lw(e, t, n, r); }
function Ff(e) { return e = e.prototype, !(!e || !e.isReactComponent); }
function qw(e) { if (typeof e == "function")
    return Ff(e) ? 1 : 0; if (e != null) {
    if (e = e.$$typeof, e === Xc)
        return 11;
    if (e === Jc)
        return 14;
} return 2; }
function kr(e, t) { var n = e.alternate; return n === null ? (n = rn(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n; }
function aa(e, t, n, r, i, o) { var s = 2; if (r = e, typeof e == "function")
    Ff(e) && (s = 1);
else if (typeof e == "string")
    s = 5;
else
    e: switch (e) {
        case bi: return Jr(n.children, i, o, t);
        case Qc:
            s = 8, i |= 8;
            break;
        case Fl: return e = rn(12, n, t, i | 2), e.elementType = Fl, e.lanes = o, e;
        case Pl: return e = rn(13, n, t, i), e.elementType = Pl, e.lanes = o, e;
        case Cl: return e = rn(19, n, t, i), e.elementType = Cl, e.lanes = o, e;
        case gh: return xu(n, i, o, t);
        default:
            if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                    case yh:
                        s = 10;
                        break e;
                    case mh:
                        s = 9;
                        break e;
                    case Xc:
                        s = 11;
                        break e;
                    case Jc:
                        s = 14;
                        break e;
                    case dr:
                        s = 16, r = null;
                        break e;
                }
            throw Error(le(130, e == null ? e : typeof e, ""));
    } return t = rn(s, n, t, i), t.elementType = e, t.type = r, t.lanes = o, t; }
function Jr(e, t, n, r) { return e = rn(7, e, r, t), e.lanes = n, e; }
function xu(e, t, n, r) { return e = rn(22, e, r, t), e.elementType = gh, e.lanes = n, e.stateNode = { isHidden: !1 }, e; }
function hl(e, t, n) { return e = rn(6, e, null, t), e.lanes = n, e; }
function pl(e, t, n) { return t = rn(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t; }
function Hw(e, t, n, r, i) { this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Yu(0), this.expirationTimes = Yu(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Yu(0), this.identifierPrefix = r, this.onRecoverableError = i, this.mutableSourceEagerHydrationData = null; }
function Pf(e, t, n, r, i, o, s, a, f) { return e = new Hw(e, t, n, a, f), t === 1 ? (t = 1, o === !0 && (t |= 8)) : t = 0, o = rn(3, null, null, t), e.current = o, o.stateNode = e, o.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, wf(o), e; }
function Gw(e, t, n) { var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null; return { $$typeof: Ei, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n }; }
function u1(e) { if (!e)
    return Or; e = e._reactInternals; e: {
    if (fi(e) !== e || e.tag !== 1)
        throw Error(le(170));
    var t = e;
    do {
        switch (t.tag) {
            case 3:
                t = t.stateNode.context;
                break e;
            case 1: if (Lt(t.type)) {
                t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                break e;
            }
        }
        t = t.return;
    } while (t !== null);
    throw Error(le(171));
} if (e.tag === 1) {
    var n = e.type;
    if (Lt(n))
        return up(e, n, t);
} return t; }
function l1(e, t, n, r, i, o, s, a, f) { return e = Pf(n, r, !0, e, i, o, s, a, f), e.context = u1(null), n = e.current, r = Pt(), i = Nr(n), o = Qn(r, i), o.callback = t ?? null, Br(n, o, i), e.current.lanes = i, us(e, i, r), qt(e, r), e; }
function Eu(e, t, n, r) { var i = t.current, o = Pt(), s = Nr(i); return n = u1(n), t.context === null ? t.context = n : t.pendingContext = n, t = Qn(o, s), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = Br(i, t, s), e !== null && (En(e, i, s, o), ta(e, i, s)), s; }
function Xa(e) { if (e = e.current, !e.child)
    return null; switch (e.child.tag) {
    case 5: return e.child.stateNode;
    default: return e.child.stateNode;
} }
function sd(e, t) { if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
} }
function Cf(e, t) { sd(e, t), (e = e.alternate) && sd(e, t); }
function Ww() { return null; }
var c1 = typeof reportError == "function" ? reportError : function (e) { console.error(e); };
function Mf(e) { this._internalRoot = e; }
bu.prototype.render = Mf.prototype.render = function (e) { var t = this._internalRoot; if (t === null)
    throw Error(le(409)); Eu(e, t, null, null); };
bu.prototype.unmount = Mf.prototype.unmount = function () { var e = this._internalRoot; if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    oi(function () { Eu(null, e, null, null); }), t[Jn] = null;
} };
function bu(e) { this._internalRoot = e; }
bu.prototype.unstable_scheduleHydration = function (e) { if (e) {
    var t = jh();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < mr.length && t !== 0 && t < mr[n].priority; n++)
        ;
    mr.splice(n, 0, e), n === 0 && qh(e);
} };
function $f(e) { return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11); }
function Su(e) { return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable ")); }
function ad() { }
function Dw(e, t, n, r, i) { if (i) {
    if (typeof r == "function") {
        var o = r;
        r = function () { var h = Xa(s); o.call(h); };
    }
    var s = l1(t, r, e, 0, null, !1, !1, "", ad);
    return e._reactRootContainer = s, e[Jn] = s.current, Yo(e.nodeType === 8 ? e.parentNode : e), oi(), s;
} for (; i = e.lastChild;)
    e.removeChild(i); if (typeof r == "function") {
    var a = r;
    r = function () { var h = Xa(f); a.call(h); };
} var f = Pf(e, 0, !1, null, null, !1, !1, "", ad); return e._reactRootContainer = f, e[Jn] = f.current, Yo(e.nodeType === 8 ? e.parentNode : e), oi(function () { Eu(t, f, n, r); }), f; }
function Tu(e, t, n, r, i) { var o = n._reactRootContainer; if (o) {
    var s = o;
    if (typeof i == "function") {
        var a = i;
        i = function () { var f = Xa(s); a.call(f); };
    }
    Eu(t, s, e, i);
}
else
    s = Dw(n, t, e, i, r); return Xa(s); }
zh = function (e) { switch (e.tag) {
    case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
            var n = vo(t.pendingLanes);
            n !== 0 && (nf(t, n | 1), qt(t, et()), !(Ue & 6) && (Xi = et() + 500, Cr()));
        }
        break;
    case 13: oi(function () { var r = er(e, 1); if (r !== null) {
        var i = Pt();
        En(r, e, 1, i);
    } }), Cf(e, 1);
} };
rf = function (e) { if (e.tag === 13) {
    var t = er(e, 134217728);
    if (t !== null) {
        var n = Pt();
        En(t, e, 134217728, n);
    }
    Cf(e, 134217728);
} };
Vh = function (e) { if (e.tag === 13) {
    var t = Nr(e), n = er(e, t);
    if (n !== null) {
        var r = Pt();
        En(n, e, t, r);
    }
    Cf(e, t);
} };
jh = function () { return Ce; };
Lh = function (e, t) { var n = Ce; try {
    return Ce = e, t();
}
finally {
    Ce = n;
} };
Wl = function (e, t, n) { switch (t) {
    case "input":
        if (zl(e, n), t = n.name, n.type === "radio" && t != null) {
            for (n = e; n.parentNode;)
                n = n.parentNode;
            for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
                var r = n[t];
                if (r !== e && r.form === e.form) {
                    var i = yu(r);
                    if (!i)
                        throw Error(le(90));
                    _h(r), zl(r, i);
                }
            }
        }
        break;
    case "textarea":
        xh(e, n);
        break;
    case "select": t = n.value, t != null && $i(e, !!n.multiple, t, !1);
} };
Nh = Rf;
kh = oi;
var Yw = { usingClientEntryPoint: !1, Events: [cs, Ai, yu, Bh, Ah, Rf] }, mo = { findFiberByHostInstance: Yr, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Kw = { bundleType: mo.bundleType, version: mo.version, rendererPackageName: mo.rendererPackageName, rendererConfig: mo.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: rr.ReactCurrentDispatcher, findHostInstanceByFiber: function (e) { return e = Oh(e), e === null ? null : e.stateNode; }, findFiberByHostInstance: mo.findFiberByHostInstance || Ww, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Cs = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Cs.isDisabled && Cs.supportsFiber)
        try {
            fu = Cs.inject(Kw), Mn = Cs;
        }
        catch { }
}
Kt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Yw;
Kt.createPortal = function (e, t) { var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null; if (!$f(t))
    throw Error(le(200)); return Gw(e, t, null, n); };
Kt.createRoot = function (e, t) { if (!$f(e))
    throw Error(le(299)); var n = !1, r = "", i = c1; return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (i = t.onRecoverableError)), t = Pf(e, 1, !1, null, null, n, !1, r, i), e[Jn] = t.current, Yo(e.nodeType === 8 ? e.parentNode : e), new Mf(t); };
Kt.findDOMNode = function (e) { if (e == null)
    return null; if (e.nodeType === 1)
    return e; var t = e._reactInternals; if (t === void 0)
    throw typeof e.render == "function" ? Error(le(188)) : (e = Object.keys(e).join(","), Error(le(268, e))); return e = Oh(t), e = e === null ? null : e.stateNode, e; };
Kt.flushSync = function (e) { return oi(e); };
Kt.hydrate = function (e, t, n) { if (!Su(t))
    throw Error(le(200)); return Tu(null, e, t, !0, n); };
Kt.hydrateRoot = function (e, t, n) { if (!$f(e))
    throw Error(le(405)); var r = n != null && n.hydratedSources || null, i = !1, o = "", s = c1; if (n != null && (n.unstable_strictMode === !0 && (i = !0), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onRecoverableError !== void 0 && (s = n.onRecoverableError)), t = l1(t, null, e, 1, n ?? null, i, !1, o, s), e[Jn] = t.current, Yo(e), r)
    for (e = 0; e < r.length; e++)
        n = r[e], i = n._getVersion, i = i(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, i] : t.mutableSourceEagerHydrationData.push(n, i); return new bu(t); };
Kt.render = function (e, t, n) { if (!Su(t))
    throw Error(le(200)); return Tu(null, e, t, !1, n); };
Kt.unmountComponentAtNode = function (e) { if (!Su(e))
    throw Error(le(40)); return e._reactRootContainer ? (oi(function () { Tu(null, null, e, !1, function () { e._reactRootContainer = null, e[Jn] = null; }); }), !0) : !1; };
Kt.unstable_batchedUpdates = Rf;
Kt.unstable_renderSubtreeIntoContainer = function (e, t, n, r) { if (!Su(n))
    throw Error(le(200)); if (e == null || e._reactInternals === void 0)
    throw Error(le(38)); return Tu(e, t, n, !1, r); };
Kt.version = "18.3.1-next-f1338f8080-20240426";
function f1() { if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(f1);
    }
    catch (e) {
        console.error(e);
    } }
f1(), fh.exports = Kt;
var Zw = fh.exports, ud = Zw;
Ol.createRoot = ud.createRoot, Ol.hydrateRoot = ud.hydrateRoot;
var d1 = {}, ds = {};
ds.byteLength = Jw;
ds.toByteArray = t2;
ds.fromByteArray = i2;
var Pn = [], Qt = [], Qw = typeof Uint8Array < "u" ? Uint8Array : Array, yl = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
for (var hi = 0, Xw = yl.length; hi < Xw; ++hi)
    Pn[hi] = yl[hi], Qt[yl.charCodeAt(hi)] = hi;
Qt["-".charCodeAt(0)] = 62;
Qt["_".charCodeAt(0)] = 63;
function h1(e) { var t = e.length; if (t % 4 > 0)
    throw new Error("Invalid string. Length must be a multiple of 4"); var n = e.indexOf("="); n === -1 && (n = t); var r = n === t ? 0 : 4 - n % 4; return [n, r]; }
function Jw(e) { var t = h1(e), n = t[0], r = t[1]; return (n + r) * 3 / 4 - r; }
function e2(e, t, n) { return (t + n) * 3 / 4 - n; }
function t2(e) { var t, n = h1(e), r = n[0], i = n[1], o = new Qw(e2(e, r, i)), s = 0, a = i > 0 ? r - 4 : r, f; for (f = 0; f < a; f += 4)
    t = Qt[e.charCodeAt(f)] << 18 | Qt[e.charCodeAt(f + 1)] << 12 | Qt[e.charCodeAt(f + 2)] << 6 | Qt[e.charCodeAt(f + 3)], o[s++] = t >> 16 & 255, o[s++] = t >> 8 & 255, o[s++] = t & 255; return i === 2 && (t = Qt[e.charCodeAt(f)] << 2 | Qt[e.charCodeAt(f + 1)] >> 4, o[s++] = t & 255), i === 1 && (t = Qt[e.charCodeAt(f)] << 10 | Qt[e.charCodeAt(f + 1)] << 4 | Qt[e.charCodeAt(f + 2)] >> 2, o[s++] = t >> 8 & 255, o[s++] = t & 255), o; }
function n2(e) { return Pn[e >> 18 & 63] + Pn[e >> 12 & 63] + Pn[e >> 6 & 63] + Pn[e & 63]; }
function r2(e, t, n) { for (var r, i = [], o = t; o < n; o += 3)
    r = (e[o] << 16 & 16711680) + (e[o + 1] << 8 & 65280) + (e[o + 2] & 255), i.push(n2(r)); return i.join(""); }
function i2(e) { for (var t, n = e.length, r = n % 3, i = [], o = 16383, s = 0, a = n - r; s < a; s += o)
    i.push(r2(e, s, s + o > a ? a : s + o)); return r === 1 ? (t = e[n - 1], i.push(Pn[t >> 2] + Pn[t << 4 & 63] + "==")) : r === 2 && (t = (e[n - 2] << 8) + e[n - 1], i.push(Pn[t >> 10] + Pn[t >> 4 & 63] + Pn[t << 2 & 63] + "=")), i.join(""); }
var hs = {}; /*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
hs.read = function (e, t, n, r, i) { var o, s, a = i * 8 - r - 1, f = (1 << a) - 1, h = f >> 1, w = -7, b = n ? i - 1 : 0, x = n ? -1 : 1, B = e[t + b]; for (b += x, o = B & (1 << -w) - 1, B >>= -w, w += a; w > 0; o = o * 256 + e[t + b], b += x, w -= 8)
    ; for (s = o & (1 << -w) - 1, o >>= -w, w += r; w > 0; s = s * 256 + e[t + b], b += x, w -= 8)
    ; if (o === 0)
    o = 1 - h;
else {
    if (o === f)
        return s ? NaN : (B ? -1 : 1) * (1 / 0);
    s = s + Math.pow(2, r), o = o - h;
} return (B ? -1 : 1) * s * Math.pow(2, o - r); };
hs.write = function (e, t, n, r, i, o) { var s, a, f, h = o * 8 - i - 1, w = (1 << h) - 1, b = w >> 1, x = i === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, B = r ? 0 : o - 1, y = r ? 1 : -1, O = t < 0 || t === 0 && 1 / t < 0 ? 1 : 0; for (t = Math.abs(t), isNaN(t) || t === 1 / 0 ? (a = isNaN(t) ? 1 : 0, s = w) : (s = Math.floor(Math.log(t) / Math.LN2), t * (f = Math.pow(2, -s)) < 1 && (s--, f *= 2), s + b >= 1 ? t += x / f : t += x * Math.pow(2, 1 - b), t * f >= 2 && (s++, f /= 2), s + b >= w ? (a = 0, s = w) : s + b >= 1 ? (a = (t * f - 1) * Math.pow(2, i), s = s + b) : (a = t * Math.pow(2, b - 1) * Math.pow(2, i), s = 0)); i >= 8; e[n + B] = a & 255, B += y, a /= 256, i -= 8)
    ; for (s = s << i | a, h += i; h > 0; e[n + B] = s & 255, B += y, s /= 256, h -= 8)
    ; e[n + B - y] |= O * 128; }; /*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
(function (e) { const t = ds, n = hs, r = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null; e.Buffer = a, e.SlowBuffer = v, e.INSPECT_MAX_BYTES = 50; const i = 2147483647; e.kMaxLength = i, a.TYPED_ARRAY_SUPPORT = o(), !a.TYPED_ARRAY_SUPPORT && typeof console < "u" && typeof console.error == "function" && console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."); function o() { try {
    const m = new Uint8Array(1), c = { foo: function () { return 42; } };
    return Object.setPrototypeOf(c, Uint8Array.prototype), Object.setPrototypeOf(m, c), m.foo() === 42;
}
catch {
    return !1;
} } Object.defineProperty(a.prototype, "parent", { enumerable: !0, get: function () { if (a.isBuffer(this))
        return this.buffer; } }), Object.defineProperty(a.prototype, "offset", { enumerable: !0, get: function () { if (a.isBuffer(this))
        return this.byteOffset; } }); function s(m) { if (m > i)
    throw new RangeError('The value "' + m + '" is invalid for option "size"'); const c = new Uint8Array(m); return Object.setPrototypeOf(c, a.prototype), c; } function a(m, c, d) { if (typeof m == "number") {
    if (typeof c == "string")
        throw new TypeError('The "string" argument must be of type string. Received type number');
    return b(m);
} return f(m, c, d); } a.poolSize = 8192; function f(m, c, d) { if (typeof m == "string")
    return x(m, c); if (ArrayBuffer.isView(m))
    return y(m); if (m == null)
    throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof m); if (Y(m, ArrayBuffer) || m && Y(m.buffer, ArrayBuffer) || typeof SharedArrayBuffer < "u" && (Y(m, SharedArrayBuffer) || m && Y(m.buffer, SharedArrayBuffer)))
    return O(m, c, d); if (typeof m == "number")
    throw new TypeError('The "value" argument must not be of type number. Received type number'); const k = m.valueOf && m.valueOf(); if (k != null && k !== m)
    return a.from(k, c, d); const j = M(m); if (j)
    return j; if (typeof Symbol < "u" && Symbol.toPrimitive != null && typeof m[Symbol.toPrimitive] == "function")
    return a.from(m[Symbol.toPrimitive]("string"), c, d); throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof m); } a.from = function (m, c, d) { return f(m, c, d); }, Object.setPrototypeOf(a.prototype, Uint8Array.prototype), Object.setPrototypeOf(a, Uint8Array); function h(m) { if (typeof m != "number")
    throw new TypeError('"size" argument must be of type number'); if (m < 0)
    throw new RangeError('The value "' + m + '" is invalid for option "size"'); } function w(m, c, d) { return h(m), m <= 0 ? s(m) : c !== void 0 ? typeof d == "string" ? s(m).fill(c, d) : s(m).fill(c) : s(m); } a.alloc = function (m, c, d) { return w(m, c, d); }; function b(m) { return h(m), s(m < 0 ? 0 : A(m) | 0); } a.allocUnsafe = function (m) { return b(m); }, a.allocUnsafeSlow = function (m) { return b(m); }; function x(m, c) { if ((typeof c != "string" || c === "") && (c = "utf8"), !a.isEncoding(c))
    throw new TypeError("Unknown encoding: " + c); const d = E(m, c) | 0; let k = s(d); const j = k.write(m, c); return j !== d && (k = k.slice(0, j)), k; } function B(m) { const c = m.length < 0 ? 0 : A(m.length) | 0, d = s(c); for (let k = 0; k < c; k += 1)
    d[k] = m[k] & 255; return d; } function y(m) { if (Y(m, Uint8Array)) {
    const c = new Uint8Array(m);
    return O(c.buffer, c.byteOffset, c.byteLength);
} return B(m); } function O(m, c, d) { if (c < 0 || m.byteLength < c)
    throw new RangeError('"offset" is outside of buffer bounds'); if (m.byteLength < c + (d || 0))
    throw new RangeError('"length" is outside of buffer bounds'); let k; return c === void 0 && d === void 0 ? k = new Uint8Array(m) : d === void 0 ? k = new Uint8Array(m, c) : k = new Uint8Array(m, c, d), Object.setPrototypeOf(k, a.prototype), k; } function M(m) { if (a.isBuffer(m)) {
    const c = A(m.length) | 0, d = s(c);
    return d.length === 0 || m.copy(d, 0, 0, c), d;
} if (m.length !== void 0)
    return typeof m.length != "number" || ae(m.length) ? s(0) : B(m); if (m.type === "Buffer" && Array.isArray(m.data))
    return B(m.data); } function A(m) { if (m >= i)
    throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + i.toString(16) + " bytes"); return m | 0; } function v(m) { return +m != m && (m = 0), a.alloc(+m); } a.isBuffer = function (c) { return c != null && c._isBuffer === !0 && c !== a.prototype; }, a.compare = function (c, d) { if (Y(c, Uint8Array) && (c = a.from(c, c.offset, c.byteLength)), Y(d, Uint8Array) && (d = a.from(d, d.offset, d.byteLength)), !a.isBuffer(c) || !a.isBuffer(d))
    throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'); if (c === d)
    return 0; let k = c.length, j = d.length; for (let J = 0, Q = Math.min(k, j); J < Q; ++J)
    if (c[J] !== d[J]) {
        k = c[J], j = d[J];
        break;
    } return k < j ? -1 : j < k ? 1 : 0; }, a.isEncoding = function (c) { switch (String(c).toLowerCase()) {
    case "hex":
    case "utf8":
    case "utf-8":
    case "ascii":
    case "latin1":
    case "binary":
    case "base64":
    case "ucs2":
    case "ucs-2":
    case "utf16le":
    case "utf-16le": return !0;
    default: return !1;
} }, a.concat = function (c, d) { if (!Array.isArray(c))
    throw new TypeError('"list" argument must be an Array of Buffers'); if (c.length === 0)
    return a.alloc(0); let k; if (d === void 0)
    for (d = 0, k = 0; k < c.length; ++k)
        d += c[k].length; const j = a.allocUnsafe(d); let J = 0; for (k = 0; k < c.length; ++k) {
    let Q = c[k];
    if (Y(Q, Uint8Array))
        J + Q.length > j.length ? (a.isBuffer(Q) || (Q = a.from(Q)), Q.copy(j, J)) : Uint8Array.prototype.set.call(j, Q, J);
    else if (a.isBuffer(Q))
        Q.copy(j, J);
    else
        throw new TypeError('"list" argument must be an Array of Buffers');
    J += Q.length;
} return j; }; function E(m, c) { if (a.isBuffer(m))
    return m.length; if (ArrayBuffer.isView(m) || Y(m, ArrayBuffer))
    return m.byteLength; if (typeof m != "string")
    throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof m); const d = m.length, k = arguments.length > 2 && arguments[2] === !0; if (!k && d === 0)
    return 0; let j = !1; for (;;)
    switch (c) {
        case "ascii":
        case "latin1":
        case "binary": return d;
        case "utf8":
        case "utf-8": return u(m).length;
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le": return d * 2;
        case "hex": return d >>> 1;
        case "base64": return T(m).length;
        default:
            if (j)
                return k ? -1 : u(m).length;
            c = ("" + c).toLowerCase(), j = !0;
    } } a.byteLength = E; function z(m, c, d) { let k = !1; if ((c === void 0 || c < 0) && (c = 0), c > this.length || ((d === void 0 || d > this.length) && (d = this.length), d <= 0) || (d >>>= 0, c >>>= 0, d <= c))
    return ""; for (m || (m = "utf8");;)
    switch (m) {
        case "hex": return ee(this, c, d);
        case "utf8":
        case "utf-8": return $(this, c, d);
        case "ascii": return D(this, c, d);
        case "latin1":
        case "binary": return H(this, c, d);
        case "base64": return U(this, c, d);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le": return oe(this, c, d);
        default:
            if (k)
                throw new TypeError("Unknown encoding: " + m);
            m = (m + "").toLowerCase(), k = !0;
    } } a.prototype._isBuffer = !0; function I(m, c, d) { const k = m[c]; m[c] = m[d], m[d] = k; } a.prototype.swap16 = function () { const c = this.length; if (c % 2 !== 0)
    throw new RangeError("Buffer size must be a multiple of 16-bits"); for (let d = 0; d < c; d += 2)
    I(this, d, d + 1); return this; }, a.prototype.swap32 = function () { const c = this.length; if (c % 4 !== 0)
    throw new RangeError("Buffer size must be a multiple of 32-bits"); for (let d = 0; d < c; d += 4)
    I(this, d, d + 3), I(this, d + 1, d + 2); return this; }, a.prototype.swap64 = function () { const c = this.length; if (c % 8 !== 0)
    throw new RangeError("Buffer size must be a multiple of 64-bits"); for (let d = 0; d < c; d += 8)
    I(this, d, d + 7), I(this, d + 1, d + 6), I(this, d + 2, d + 5), I(this, d + 3, d + 4); return this; }, a.prototype.toString = function () { const c = this.length; return c === 0 ? "" : arguments.length === 0 ? $(this, 0, c) : z.apply(this, arguments); }, a.prototype.toLocaleString = a.prototype.toString, a.prototype.equals = function (c) { if (!a.isBuffer(c))
    throw new TypeError("Argument must be a Buffer"); return this === c ? !0 : a.compare(this, c) === 0; }, a.prototype.inspect = function () { let c = ""; const d = e.INSPECT_MAX_BYTES; return c = this.toString("hex", 0, d).replace(/(.{2})/g, "$1 ").trim(), this.length > d && (c += " ... "), "<Buffer " + c + ">"; }, r && (a.prototype[r] = a.prototype.inspect), a.prototype.compare = function (c, d, k, j, J) { if (Y(c, Uint8Array) && (c = a.from(c, c.offset, c.byteLength)), !a.isBuffer(c))
    throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof c); if (d === void 0 && (d = 0), k === void 0 && (k = c ? c.length : 0), j === void 0 && (j = 0), J === void 0 && (J = this.length), d < 0 || k > c.length || j < 0 || J > this.length)
    throw new RangeError("out of range index"); if (j >= J && d >= k)
    return 0; if (j >= J)
    return -1; if (d >= k)
    return 1; if (d >>>= 0, k >>>= 0, j >>>= 0, J >>>= 0, this === c)
    return 0; let Q = J - j, Ee = k - d; const Be = Math.min(Q, Ee), Se = this.slice(j, J), xe = c.slice(d, k); for (let Fe = 0; Fe < Be; ++Fe)
    if (Se[Fe] !== xe[Fe]) {
        Q = Se[Fe], Ee = xe[Fe];
        break;
    } return Q < Ee ? -1 : Ee < Q ? 1 : 0; }; function L(m, c, d, k, j) { if (m.length === 0)
    return -1; if (typeof d == "string" ? (k = d, d = 0) : d > 2147483647 ? d = 2147483647 : d < -2147483648 && (d = -2147483648), d = +d, ae(d) && (d = j ? 0 : m.length - 1), d < 0 && (d = m.length + d), d >= m.length) {
    if (j)
        return -1;
    d = m.length - 1;
}
else if (d < 0)
    if (j)
        d = 0;
    else
        return -1; if (typeof c == "string" && (c = a.from(c, k)), a.isBuffer(c))
    return c.length === 0 ? -1 : V(m, c, d, k, j); if (typeof c == "number")
    return c = c & 255, typeof Uint8Array.prototype.indexOf == "function" ? j ? Uint8Array.prototype.indexOf.call(m, c, d) : Uint8Array.prototype.lastIndexOf.call(m, c, d) : V(m, [c], d, k, j); throw new TypeError("val must be string, number or Buffer"); } function V(m, c, d, k, j) { let J = 1, Q = m.length, Ee = c.length; if (k !== void 0 && (k = String(k).toLowerCase(), k === "ucs2" || k === "ucs-2" || k === "utf16le" || k === "utf-16le")) {
    if (m.length < 2 || c.length < 2)
        return -1;
    J = 2, Q /= 2, Ee /= 2, d /= 2;
} function Be(xe, Fe) { return J === 1 ? xe[Fe] : xe.readUInt16BE(Fe * J); } let Se; if (j) {
    let xe = -1;
    for (Se = d; Se < Q; Se++)
        if (Be(m, Se) === Be(c, xe === -1 ? 0 : Se - xe)) {
            if (xe === -1 && (xe = Se), Se - xe + 1 === Ee)
                return xe * J;
        }
        else
            xe !== -1 && (Se -= Se - xe), xe = -1;
}
else
    for (d + Ee > Q && (d = Q - Ee), Se = d; Se >= 0; Se--) {
        let xe = !0;
        for (let Fe = 0; Fe < Ee; Fe++)
            if (Be(m, Se + Fe) !== Be(c, Fe)) {
                xe = !1;
                break;
            }
        if (xe)
            return Se;
    } return -1; } a.prototype.includes = function (c, d, k) { return this.indexOf(c, d, k) !== -1; }, a.prototype.indexOf = function (c, d, k) { return L(this, c, d, k, !0); }, a.prototype.lastIndexOf = function (c, d, k) { return L(this, c, d, k, !1); }; function W(m, c, d, k) { d = Number(d) || 0; const j = m.length - d; k ? (k = Number(k), k > j && (k = j)) : k = j; const J = c.length; k > J / 2 && (k = J / 2); let Q; for (Q = 0; Q < k; ++Q) {
    const Ee = parseInt(c.substr(Q * 2, 2), 16);
    if (ae(Ee))
        return Q;
    m[d + Q] = Ee;
} return Q; } function te(m, c, d, k) { return F(u(c, m.length - d), m, d, k); } function K(m, c, d, k) { return F(l(c), m, d, k); } function de(m, c, d, k) { return F(T(c), m, d, k); } function he(m, c, d, k) { return F(g(c, m.length - d), m, d, k); } a.prototype.write = function (c, d, k, j) { if (d === void 0)
    j = "utf8", k = this.length, d = 0;
else if (k === void 0 && typeof d == "string")
    j = d, k = this.length, d = 0;
else if (isFinite(d))
    d = d >>> 0, isFinite(k) ? (k = k >>> 0, j === void 0 && (j = "utf8")) : (j = k, k = void 0);
else
    throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported"); const J = this.length - d; if ((k === void 0 || k > J) && (k = J), c.length > 0 && (k < 0 || d < 0) || d > this.length)
    throw new RangeError("Attempt to write outside buffer bounds"); j || (j = "utf8"); let Q = !1; for (;;)
    switch (j) {
        case "hex": return W(this, c, d, k);
        case "utf8":
        case "utf-8": return te(this, c, d, k);
        case "ascii":
        case "latin1":
        case "binary": return K(this, c, d, k);
        case "base64": return de(this, c, d, k);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le": return he(this, c, d, k);
        default:
            if (Q)
                throw new TypeError("Unknown encoding: " + j);
            j = ("" + j).toLowerCase(), Q = !0;
    } }, a.prototype.toJSON = function () { return { type: "Buffer", data: Array.prototype.slice.call(this._arr || this, 0) }; }; function U(m, c, d) { return c === 0 && d === m.length ? t.fromByteArray(m) : t.fromByteArray(m.slice(c, d)); } function $(m, c, d) { d = Math.min(m.length, d); const k = []; let j = c; for (; j < d;) {
    const J = m[j];
    let Q = null, Ee = J > 239 ? 4 : J > 223 ? 3 : J > 191 ? 2 : 1;
    if (j + Ee <= d) {
        let Be, Se, xe, Fe;
        switch (Ee) {
            case 1:
                J < 128 && (Q = J);
                break;
            case 2:
                Be = m[j + 1], (Be & 192) === 128 && (Fe = (J & 31) << 6 | Be & 63, Fe > 127 && (Q = Fe));
                break;
            case 3:
                Be = m[j + 1], Se = m[j + 2], (Be & 192) === 128 && (Se & 192) === 128 && (Fe = (J & 15) << 12 | (Be & 63) << 6 | Se & 63, Fe > 2047 && (Fe < 55296 || Fe > 57343) && (Q = Fe));
                break;
            case 4: Be = m[j + 1], Se = m[j + 2], xe = m[j + 3], (Be & 192) === 128 && (Se & 192) === 128 && (xe & 192) === 128 && (Fe = (J & 15) << 18 | (Be & 63) << 12 | (Se & 63) << 6 | xe & 63, Fe > 65535 && Fe < 1114112 && (Q = Fe));
        }
    }
    Q === null ? (Q = 65533, Ee = 1) : Q > 65535 && (Q -= 65536, k.push(Q >>> 10 & 1023 | 55296), Q = 56320 | Q & 1023), k.push(Q), j += Ee;
} return Z(k); } const X = 4096; function Z(m) { const c = m.length; if (c <= X)
    return String.fromCharCode.apply(String, m); let d = "", k = 0; for (; k < c;)
    d += String.fromCharCode.apply(String, m.slice(k, k += X)); return d; } function D(m, c, d) { let k = ""; d = Math.min(m.length, d); for (let j = c; j < d; ++j)
    k += String.fromCharCode(m[j] & 127); return k; } function H(m, c, d) { let k = ""; d = Math.min(m.length, d); for (let j = c; j < d; ++j)
    k += String.fromCharCode(m[j]); return k; } function ee(m, c, d) { const k = m.length; (!c || c < 0) && (c = 0), (!d || d < 0 || d > k) && (d = k); let j = ""; for (let J = c; J < d; ++J)
    j += me[m[J]]; return j; } function oe(m, c, d) { const k = m.slice(c, d); let j = ""; for (let J = 0; J < k.length - 1; J += 2)
    j += String.fromCharCode(k[J] + k[J + 1] * 256); return j; } a.prototype.slice = function (c, d) { const k = this.length; c = ~~c, d = d === void 0 ? k : ~~d, c < 0 ? (c += k, c < 0 && (c = 0)) : c > k && (c = k), d < 0 ? (d += k, d < 0 && (d = 0)) : d > k && (d = k), d < c && (d = c); const j = this.subarray(c, d); return Object.setPrototypeOf(j, a.prototype), j; }; function re(m, c, d) { if (m % 1 !== 0 || m < 0)
    throw new RangeError("offset is not uint"); if (m + c > d)
    throw new RangeError("Trying to access beyond buffer length"); } a.prototype.readUintLE = a.prototype.readUIntLE = function (c, d, k) { c = c >>> 0, d = d >>> 0, k || re(c, d, this.length); let j = this[c], J = 1, Q = 0; for (; ++Q < d && (J *= 256);)
    j += this[c + Q] * J; return j; }, a.prototype.readUintBE = a.prototype.readUIntBE = function (c, d, k) { c = c >>> 0, d = d >>> 0, k || re(c, d, this.length); let j = this[c + --d], J = 1; for (; d > 0 && (J *= 256);)
    j += this[c + --d] * J; return j; }, a.prototype.readUint8 = a.prototype.readUInt8 = function (c, d) { return c = c >>> 0, d || re(c, 1, this.length), this[c]; }, a.prototype.readUint16LE = a.prototype.readUInt16LE = function (c, d) { return c = c >>> 0, d || re(c, 2, this.length), this[c] | this[c + 1] << 8; }, a.prototype.readUint16BE = a.prototype.readUInt16BE = function (c, d) { return c = c >>> 0, d || re(c, 2, this.length), this[c] << 8 | this[c + 1]; }, a.prototype.readUint32LE = a.prototype.readUInt32LE = function (c, d) { return c = c >>> 0, d || re(c, 4, this.length), (this[c] | this[c + 1] << 8 | this[c + 2] << 16) + this[c + 3] * 16777216; }, a.prototype.readUint32BE = a.prototype.readUInt32BE = function (c, d) { return c = c >>> 0, d || re(c, 4, this.length), this[c] * 16777216 + (this[c + 1] << 16 | this[c + 2] << 8 | this[c + 3]); }, a.prototype.readBigUInt64LE = we(function (c) { c = c >>> 0, q(c, "offset"); const d = this[c], k = this[c + 7]; (d === void 0 || k === void 0) && C(c, this.length - 8); const j = d + this[++c] * 2 ** 8 + this[++c] * 2 ** 16 + this[++c] * 2 ** 24, J = this[++c] + this[++c] * 2 ** 8 + this[++c] * 2 ** 16 + k * 2 ** 24; return BigInt(j) + (BigInt(J) << BigInt(32)); }), a.prototype.readBigUInt64BE = we(function (c) { c = c >>> 0, q(c, "offset"); const d = this[c], k = this[c + 7]; (d === void 0 || k === void 0) && C(c, this.length - 8); const j = d * 2 ** 24 + this[++c] * 2 ** 16 + this[++c] * 2 ** 8 + this[++c], J = this[++c] * 2 ** 24 + this[++c] * 2 ** 16 + this[++c] * 2 ** 8 + k; return (BigInt(j) << BigInt(32)) + BigInt(J); }), a.prototype.readIntLE = function (c, d, k) { c = c >>> 0, d = d >>> 0, k || re(c, d, this.length); let j = this[c], J = 1, Q = 0; for (; ++Q < d && (J *= 256);)
    j += this[c + Q] * J; return J *= 128, j >= J && (j -= Math.pow(2, 8 * d)), j; }, a.prototype.readIntBE = function (c, d, k) { c = c >>> 0, d = d >>> 0, k || re(c, d, this.length); let j = d, J = 1, Q = this[c + --j]; for (; j > 0 && (J *= 256);)
    Q += this[c + --j] * J; return J *= 128, Q >= J && (Q -= Math.pow(2, 8 * d)), Q; }, a.prototype.readInt8 = function (c, d) { return c = c >>> 0, d || re(c, 1, this.length), this[c] & 128 ? (255 - this[c] + 1) * -1 : this[c]; }, a.prototype.readInt16LE = function (c, d) { c = c >>> 0, d || re(c, 2, this.length); const k = this[c] | this[c + 1] << 8; return k & 32768 ? k | 4294901760 : k; }, a.prototype.readInt16BE = function (c, d) { c = c >>> 0, d || re(c, 2, this.length); const k = this[c + 1] | this[c] << 8; return k & 32768 ? k | 4294901760 : k; }, a.prototype.readInt32LE = function (c, d) { return c = c >>> 0, d || re(c, 4, this.length), this[c] | this[c + 1] << 8 | this[c + 2] << 16 | this[c + 3] << 24; }, a.prototype.readInt32BE = function (c, d) { return c = c >>> 0, d || re(c, 4, this.length), this[c] << 24 | this[c + 1] << 16 | this[c + 2] << 8 | this[c + 3]; }, a.prototype.readBigInt64LE = we(function (c) { c = c >>> 0, q(c, "offset"); const d = this[c], k = this[c + 7]; (d === void 0 || k === void 0) && C(c, this.length - 8); const j = this[c + 4] + this[c + 5] * 2 ** 8 + this[c + 6] * 2 ** 16 + (k << 24); return (BigInt(j) << BigInt(32)) + BigInt(d + this[++c] * 2 ** 8 + this[++c] * 2 ** 16 + this[++c] * 2 ** 24); }), a.prototype.readBigInt64BE = we(function (c) { c = c >>> 0, q(c, "offset"); const d = this[c], k = this[c + 7]; (d === void 0 || k === void 0) && C(c, this.length - 8); const j = (d << 24) + this[++c] * 2 ** 16 + this[++c] * 2 ** 8 + this[++c]; return (BigInt(j) << BigInt(32)) + BigInt(this[++c] * 2 ** 24 + this[++c] * 2 ** 16 + this[++c] * 2 ** 8 + k); }), a.prototype.readFloatLE = function (c, d) { return c = c >>> 0, d || re(c, 4, this.length), n.read(this, c, !0, 23, 4); }, a.prototype.readFloatBE = function (c, d) { return c = c >>> 0, d || re(c, 4, this.length), n.read(this, c, !1, 23, 4); }, a.prototype.readDoubleLE = function (c, d) { return c = c >>> 0, d || re(c, 8, this.length), n.read(this, c, !0, 52, 8); }, a.prototype.readDoubleBE = function (c, d) { return c = c >>> 0, d || re(c, 8, this.length), n.read(this, c, !1, 52, 8); }; function ue(m, c, d, k, j, J) { if (!a.isBuffer(m))
    throw new TypeError('"buffer" argument must be a Buffer instance'); if (c > j || c < J)
    throw new RangeError('"value" argument is out of bounds'); if (d + k > m.length)
    throw new RangeError("Index out of range"); } a.prototype.writeUintLE = a.prototype.writeUIntLE = function (c, d, k, j) { if (c = +c, d = d >>> 0, k = k >>> 0, !j) {
    const Ee = Math.pow(2, 8 * k) - 1;
    ue(this, c, d, k, Ee, 0);
} let J = 1, Q = 0; for (this[d] = c & 255; ++Q < k && (J *= 256);)
    this[d + Q] = c / J & 255; return d + k; }, a.prototype.writeUintBE = a.prototype.writeUIntBE = function (c, d, k, j) { if (c = +c, d = d >>> 0, k = k >>> 0, !j) {
    const Ee = Math.pow(2, 8 * k) - 1;
    ue(this, c, d, k, Ee, 0);
} let J = k - 1, Q = 1; for (this[d + J] = c & 255; --J >= 0 && (Q *= 256);)
    this[d + J] = c / Q & 255; return d + k; }, a.prototype.writeUint8 = a.prototype.writeUInt8 = function (c, d, k) { return c = +c, d = d >>> 0, k || ue(this, c, d, 1, 255, 0), this[d] = c & 255, d + 1; }, a.prototype.writeUint16LE = a.prototype.writeUInt16LE = function (c, d, k) { return c = +c, d = d >>> 0, k || ue(this, c, d, 2, 65535, 0), this[d] = c & 255, this[d + 1] = c >>> 8, d + 2; }, a.prototype.writeUint16BE = a.prototype.writeUInt16BE = function (c, d, k) { return c = +c, d = d >>> 0, k || ue(this, c, d, 2, 65535, 0), this[d] = c >>> 8, this[d + 1] = c & 255, d + 2; }, a.prototype.writeUint32LE = a.prototype.writeUInt32LE = function (c, d, k) { return c = +c, d = d >>> 0, k || ue(this, c, d, 4, 4294967295, 0), this[d + 3] = c >>> 24, this[d + 2] = c >>> 16, this[d + 1] = c >>> 8, this[d] = c & 255, d + 4; }, a.prototype.writeUint32BE = a.prototype.writeUInt32BE = function (c, d, k) { return c = +c, d = d >>> 0, k || ue(this, c, d, 4, 4294967295, 0), this[d] = c >>> 24, this[d + 1] = c >>> 16, this[d + 2] = c >>> 8, this[d + 3] = c & 255, d + 4; }; function ne(m, c, d, k, j) { R(c, k, j, m, d, 7); let J = Number(c & BigInt(4294967295)); m[d++] = J, J = J >> 8, m[d++] = J, J = J >> 8, m[d++] = J, J = J >> 8, m[d++] = J; let Q = Number(c >> BigInt(32) & BigInt(4294967295)); return m[d++] = Q, Q = Q >> 8, m[d++] = Q, Q = Q >> 8, m[d++] = Q, Q = Q >> 8, m[d++] = Q, d; } function _(m, c, d, k, j) { R(c, k, j, m, d, 7); let J = Number(c & BigInt(4294967295)); m[d + 7] = J, J = J >> 8, m[d + 6] = J, J = J >> 8, m[d + 5] = J, J = J >> 8, m[d + 4] = J; let Q = Number(c >> BigInt(32) & BigInt(4294967295)); return m[d + 3] = Q, Q = Q >> 8, m[d + 2] = Q, Q = Q >> 8, m[d + 1] = Q, Q = Q >> 8, m[d] = Q, d + 8; } a.prototype.writeBigUInt64LE = we(function (c, d = 0) { return ne(this, c, d, BigInt(0), BigInt("0xffffffffffffffff")); }), a.prototype.writeBigUInt64BE = we(function (c, d = 0) { return _(this, c, d, BigInt(0), BigInt("0xffffffffffffffff")); }), a.prototype.writeIntLE = function (c, d, k, j) { if (c = +c, d = d >>> 0, !j) {
    const Be = Math.pow(2, 8 * k - 1);
    ue(this, c, d, k, Be - 1, -Be);
} let J = 0, Q = 1, Ee = 0; for (this[d] = c & 255; ++J < k && (Q *= 256);)
    c < 0 && Ee === 0 && this[d + J - 1] !== 0 && (Ee = 1), this[d + J] = (c / Q >> 0) - Ee & 255; return d + k; }, a.prototype.writeIntBE = function (c, d, k, j) { if (c = +c, d = d >>> 0, !j) {
    const Be = Math.pow(2, 8 * k - 1);
    ue(this, c, d, k, Be - 1, -Be);
} let J = k - 1, Q = 1, Ee = 0; for (this[d + J] = c & 255; --J >= 0 && (Q *= 256);)
    c < 0 && Ee === 0 && this[d + J + 1] !== 0 && (Ee = 1), this[d + J] = (c / Q >> 0) - Ee & 255; return d + k; }, a.prototype.writeInt8 = function (c, d, k) { return c = +c, d = d >>> 0, k || ue(this, c, d, 1, 127, -128), c < 0 && (c = 255 + c + 1), this[d] = c & 255, d + 1; }, a.prototype.writeInt16LE = function (c, d, k) { return c = +c, d = d >>> 0, k || ue(this, c, d, 2, 32767, -32768), this[d] = c & 255, this[d + 1] = c >>> 8, d + 2; }, a.prototype.writeInt16BE = function (c, d, k) { return c = +c, d = d >>> 0, k || ue(this, c, d, 2, 32767, -32768), this[d] = c >>> 8, this[d + 1] = c & 255, d + 2; }, a.prototype.writeInt32LE = function (c, d, k) { return c = +c, d = d >>> 0, k || ue(this, c, d, 4, 2147483647, -2147483648), this[d] = c & 255, this[d + 1] = c >>> 8, this[d + 2] = c >>> 16, this[d + 3] = c >>> 24, d + 4; }, a.prototype.writeInt32BE = function (c, d, k) { return c = +c, d = d >>> 0, k || ue(this, c, d, 4, 2147483647, -2147483648), c < 0 && (c = 4294967295 + c + 1), this[d] = c >>> 24, this[d + 1] = c >>> 16, this[d + 2] = c >>> 8, this[d + 3] = c & 255, d + 4; }, a.prototype.writeBigInt64LE = we(function (c, d = 0) { return ne(this, c, d, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff")); }), a.prototype.writeBigInt64BE = we(function (c, d = 0) { return _(this, c, d, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff")); }); function se(m, c, d, k, j, J) { if (d + k > m.length)
    throw new RangeError("Index out of range"); if (d < 0)
    throw new RangeError("Index out of range"); } function ce(m, c, d, k, j) { return c = +c, d = d >>> 0, j || se(m, c, d, 4), n.write(m, c, d, k, 23, 4), d + 4; } a.prototype.writeFloatLE = function (c, d, k) { return ce(this, c, d, !0, k); }, a.prototype.writeFloatBE = function (c, d, k) { return ce(this, c, d, !1, k); }; function ye(m, c, d, k, j) { return c = +c, d = d >>> 0, j || se(m, c, d, 8), n.write(m, c, d, k, 52, 8), d + 8; } a.prototype.writeDoubleLE = function (c, d, k) { return ye(this, c, d, !0, k); }, a.prototype.writeDoubleBE = function (c, d, k) { return ye(this, c, d, !1, k); }, a.prototype.copy = function (c, d, k, j) { if (!a.isBuffer(c))
    throw new TypeError("argument should be a Buffer"); if (k || (k = 0), !j && j !== 0 && (j = this.length), d >= c.length && (d = c.length), d || (d = 0), j > 0 && j < k && (j = k), j === k || c.length === 0 || this.length === 0)
    return 0; if (d < 0)
    throw new RangeError("targetStart out of bounds"); if (k < 0 || k >= this.length)
    throw new RangeError("Index out of range"); if (j < 0)
    throw new RangeError("sourceEnd out of bounds"); j > this.length && (j = this.length), c.length - d < j - k && (j = c.length - d + k); const J = j - k; return this === c && typeof Uint8Array.prototype.copyWithin == "function" ? this.copyWithin(d, k, j) : Uint8Array.prototype.set.call(c, this.subarray(k, j), d), J; }, a.prototype.fill = function (c, d, k, j) { if (typeof c == "string") {
    if (typeof d == "string" ? (j = d, d = 0, k = this.length) : typeof k == "string" && (j = k, k = this.length), j !== void 0 && typeof j != "string")
        throw new TypeError("encoding must be a string");
    if (typeof j == "string" && !a.isEncoding(j))
        throw new TypeError("Unknown encoding: " + j);
    if (c.length === 1) {
        const Q = c.charCodeAt(0);
        (j === "utf8" && Q < 128 || j === "latin1") && (c = Q);
    }
}
else
    typeof c == "number" ? c = c & 255 : typeof c == "boolean" && (c = Number(c)); if (d < 0 || this.length < d || this.length < k)
    throw new RangeError("Out of range index"); if (k <= d)
    return this; d = d >>> 0, k = k === void 0 ? this.length : k >>> 0, c || (c = 0); let J; if (typeof c == "number")
    for (J = d; J < k; ++J)
        this[J] = c;
else {
    const Q = a.isBuffer(c) ? c : a.from(c, j), Ee = Q.length;
    if (Ee === 0)
        throw new TypeError('The value "' + c + '" is invalid for argument "value"');
    for (J = 0; J < k - d; ++J)
        this[J + d] = Q[J % Ee];
} return this; }; const ie = {}; function fe(m, c, d) { ie[m] = class extends d {
    constructor() { super(), Object.defineProperty(this, "message", { value: c.apply(this, arguments), writable: !0, configurable: !0 }), this.name = `${this.name} [${m}]`, this.stack, delete this.name; }
    get code() { return m; }
    set code(j) { Object.defineProperty(this, "code", { configurable: !0, enumerable: !0, value: j, writable: !0 }); }
    toString() { return `${this.name} [${m}]: ${this.message}`; }
}; } fe("ERR_BUFFER_OUT_OF_BOUNDS", function (m) { return m ? `${m} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds"; }, RangeError), fe("ERR_INVALID_ARG_TYPE", function (m, c) { return `The "${m}" argument must be of type number. Received type ${typeof c}`; }, TypeError), fe("ERR_OUT_OF_RANGE", function (m, c, d) { let k = `The value of "${m}" is out of range.`, j = d; return Number.isInteger(d) && Math.abs(d) > 2 ** 32 ? j = S(String(d)) : typeof d == "bigint" && (j = String(d), (d > BigInt(2) ** BigInt(32) || d < -(BigInt(2) ** BigInt(32))) && (j = S(j)), j += "n"), k += ` It must be ${c}. Received ${j}`, k; }, RangeError); function S(m) { let c = "", d = m.length; const k = m[0] === "-" ? 1 : 0; for (; d >= k + 4; d -= 3)
    c = `_${m.slice(d - 3, d)}${c}`; return `${m.slice(0, d)}${c}`; } function N(m, c, d) { q(c, "offset"), (m[c] === void 0 || m[c + d] === void 0) && C(c, m.length - (d + 1)); } function R(m, c, d, k, j, J) { if (m > d || m < c) {
    const Q = typeof c == "bigint" ? "n" : "";
    let Ee;
    throw J > 3 ? c === 0 || c === BigInt(0) ? Ee = `>= 0${Q} and < 2${Q} ** ${(J + 1) * 8}${Q}` : Ee = `>= -(2${Q} ** ${(J + 1) * 8 - 1}${Q}) and < 2 ** ${(J + 1) * 8 - 1}${Q}` : Ee = `>= ${c}${Q} and <= ${d}${Q}`, new ie.ERR_OUT_OF_RANGE("value", Ee, m);
} N(k, j, J); } function q(m, c) { if (typeof m != "number")
    throw new ie.ERR_INVALID_ARG_TYPE(c, "number", m); } function C(m, c, d) { throw Math.floor(m) !== m ? (q(m, d), new ie.ERR_OUT_OF_RANGE(d || "offset", "an integer", m)) : c < 0 ? new ie.ERR_BUFFER_OUT_OF_BOUNDS : new ie.ERR_OUT_OF_RANGE(d || "offset", `>= ${d ? 1 : 0} and <= ${c}`, m); } const G = /[^+/0-9A-Za-z-_]/g; function p(m) { if (m = m.split("=")[0], m = m.trim().replace(G, ""), m.length < 2)
    return ""; for (; m.length % 4 !== 0;)
    m = m + "="; return m; } function u(m, c) { c = c || 1 / 0; let d; const k = m.length; let j = null; const J = []; for (let Q = 0; Q < k; ++Q) {
    if (d = m.charCodeAt(Q), d > 55295 && d < 57344) {
        if (!j) {
            if (d > 56319) {
                (c -= 3) > -1 && J.push(239, 191, 189);
                continue;
            }
            else if (Q + 1 === k) {
                (c -= 3) > -1 && J.push(239, 191, 189);
                continue;
            }
            j = d;
            continue;
        }
        if (d < 56320) {
            (c -= 3) > -1 && J.push(239, 191, 189), j = d;
            continue;
        }
        d = (j - 55296 << 10 | d - 56320) + 65536;
    }
    else
        j && (c -= 3) > -1 && J.push(239, 191, 189);
    if (j = null, d < 128) {
        if ((c -= 1) < 0)
            break;
        J.push(d);
    }
    else if (d < 2048) {
        if ((c -= 2) < 0)
            break;
        J.push(d >> 6 | 192, d & 63 | 128);
    }
    else if (d < 65536) {
        if ((c -= 3) < 0)
            break;
        J.push(d >> 12 | 224, d >> 6 & 63 | 128, d & 63 | 128);
    }
    else if (d < 1114112) {
        if ((c -= 4) < 0)
            break;
        J.push(d >> 18 | 240, d >> 12 & 63 | 128, d >> 6 & 63 | 128, d & 63 | 128);
    }
    else
        throw new Error("Invalid code point");
} return J; } function l(m) { const c = []; for (let d = 0; d < m.length; ++d)
    c.push(m.charCodeAt(d) & 255); return c; } function g(m, c) { let d, k, j; const J = []; for (let Q = 0; Q < m.length && !((c -= 2) < 0); ++Q)
    d = m.charCodeAt(Q), k = d >> 8, j = d % 256, J.push(j), J.push(k); return J; } function T(m) { return t.toByteArray(p(m)); } function F(m, c, d, k) { let j; for (j = 0; j < k && !(j + d >= c.length || j >= m.length); ++j)
    c[j + d] = m[j]; return j; } function Y(m, c) { return m instanceof c || m != null && m.constructor != null && m.constructor.name != null && m.constructor.name === c.name; } function ae(m) { return m !== m; } const me = function () { const m = "0123456789abcdef", c = new Array(256); for (let d = 0; d < 16; ++d) {
    const k = d * 16;
    for (let j = 0; j < 16; ++j)
        c[k + j] = m[d] + m[j];
} return c; }(); function we(m) { return typeof BigInt > "u" ? be : m; } function be() { throw new Error("BigInt not supported"); } })(d1);
var Tc;
(function (e) { e[e.SysFatal = 1] = "SysFatal", e[e.SysTransient = 2] = "SysTransient", e[e.DestinationInvalid = 3] = "DestinationInvalid", e[e.CanisterReject = 4] = "CanisterReject", e[e.CanisterError = 5] = "CanisterError"; })(Tc || (Tc = {}));
const o2 = "modulepreload", s2 = function (e) { return "/" + e; }, ld = {}, a2 = function (t, n, r) { if (!n || n.length === 0)
    return t(); const i = document.getElementsByTagName("link"); return Promise.all(n.map(o => { if (o = s2(o), o in ld)
    return; ld[o] = !0; const s = o.endsWith(".css"), a = s ? '[rel="stylesheet"]' : ""; if (!!r)
    for (let w = i.length - 1; w >= 0; w--) {
        const b = i[w];
        if (b.href === o && (!s || b.rel === "stylesheet"))
            return;
    }
else if (document.querySelector(`link[href="${o}"]${a}`))
    return; const h = document.createElement("link"); if (h.rel = s ? "stylesheet" : o2, s || (h.as = "script", h.crossOrigin = ""), h.href = o, document.head.appendChild(h), s)
    return new Promise((w, b) => { h.addEventListener("load", w), h.addEventListener("error", () => b(new Error(`Unable to preload CSS for ${o}`))); }); })).then(() => t()).catch(o => { const s = new Event("vite:preloadError", { cancelable: !0 }); if (s.payload = o, window.dispatchEvent(s), !s.defaultPrevented)
    throw o; }); }, Ja = "abcdefghijklmnopqrstuvwxyz234567", Ji = Object.create(null);
for (let e = 0; e < Ja.length; e++)
    Ji[Ja[e]] = e;
Ji[0] = Ji.o;
Ji[1] = Ji.i;
function u2(e) { let t = 0, n = 0, r = ""; function i(o) { return t < 0 ? n |= o >> -t : n = o << t & 248, t > 3 ? (t -= 8, 1) : (t < 4 && (r += Ja[n >> 3], t += 5), 0); } for (let o = 0; o < e.length;)
    o += i(e[o]); return r + (t < 0 ? Ja[n >> 3] : ""); }
function l2(e) { let t = 0, n = 0; const r = new Uint8Array(e.length * 4 / 3 | 0); let i = 0; function o(s) { let a = Ji[s.toLowerCase()]; if (a === void 0)
    throw new Error(`Invalid character: ${JSON.stringify(s)}`); a <<= 3, n |= a >>> t, t += 5, t >= 8 && (r[i++] = n, t -= 8, t > 0 ? n = a << 5 - t & 255 : n = 0); } for (const s of e)
    o(s); return r.slice(0, i); }
const c2 = new Uint32Array([0, 1996959894, 3993919788, 2567524794, 124634137, 1886057615, 3915621685, 2657392035, 249268274, 2044508324, 3772115230, 2547177864, 162941995, 2125561021, 3887607047, 2428444049, 498536548, 1789927666, 4089016648, 2227061214, 450548861, 1843258603, 4107580753, 2211677639, 325883990, 1684777152, 4251122042, 2321926636, 335633487, 1661365465, 4195302755, 2366115317, 997073096, 1281953886, 3579855332, 2724688242, 1006888145, 1258607687, 3524101629, 2768942443, 901097722, 1119000684, 3686517206, 2898065728, 853044451, 1172266101, 3705015759, 2882616665, 651767980, 1373503546, 3369554304, 3218104598, 565507253, 1454621731, 3485111705, 3099436303, 671266974, 1594198024, 3322730930, 2970347812, 795835527, 1483230225, 3244367275, 3060149565, 1994146192, 31158534, 2563907772, 4023717930, 1907459465, 112637215, 2680153253, 3904427059, 2013776290, 251722036, 2517215374, 3775830040, 2137656763, 141376813, 2439277719, 3865271297, 1802195444, 476864866, 2238001368, 4066508878, 1812370925, 453092731, 2181625025, 4111451223, 1706088902, 314042704, 2344532202, 4240017532, 1658658271, 366619977, 2362670323, 4224994405, 1303535960, 984961486, 2747007092, 3569037538, 1256170817, 1037604311, 2765210733, 3554079995, 1131014506, 879679996, 2909243462, 3663771856, 1141124467, 855842277, 2852801631, 3708648649, 1342533948, 654459306, 3188396048, 3373015174, 1466479909, 544179635, 3110523913, 3462522015, 1591671054, 702138776, 2966460450, 3352799412, 1504918807, 783551873, 3082640443, 3233442989, 3988292384, 2596254646, 62317068, 1957810842, 3939845945, 2647816111, 81470997, 1943803523, 3814918930, 2489596804, 225274430, 2053790376, 3826175755, 2466906013, 167816743, 2097651377, 4027552580, 2265490386, 503444072, 1762050814, 4150417245, 2154129355, 426522225, 1852507879, 4275313526, 2312317920, 282753626, 1742555852, 4189708143, 2394877945, 397917763, 1622183637, 3604390888, 2714866558, 953729732, 1340076626, 3518719985, 2797360999, 1068828381, 1219638859, 3624741850, 2936675148, 906185462, 1090812512, 3747672003, 2825379669, 829329135, 1181335161, 3412177804, 3160834842, 628085408, 1382605366, 3423369109, 3138078467, 570562233, 1426400815, 3317316542, 2998733608, 733239954, 1555261956, 3268935591, 3050360625, 752459403, 1541320221, 2607071920, 3965973030, 1969922972, 40735498, 2617837225, 3943577151, 1913087877, 83908371, 2512341634, 3803740692, 2075208622, 213261112, 2463272603, 3855990285, 2094854071, 198958881, 2262029012, 4057260610, 1759359992, 534414190, 2176718541, 4139329115, 1873836001, 414664567, 2282248934, 4279200368, 1711684554, 285281116, 2405801727, 4167216745, 1634467795, 376229701, 2685067896, 3608007406, 1308918612, 956543938, 2808555105, 3495958263, 1231636301, 1047427035, 2932959818, 3654703836, 1088359270, 936918e3, 2847714899, 3736837829, 1202900863, 817233897, 3183342108, 3401237130, 1404277552, 615818150, 3134207493, 3453421203, 1423857449, 601450431, 3009837614, 3294710456, 1567103746, 711928724, 3020668471, 3272380065, 1510334235, 755167117]);
function f2(e) { const t = new Uint8Array(e); let n = -1; for (let r = 0; r < t.length; r++) {
    const o = (t[r] ^ n) & 255;
    n = c2[o] ^ n >>> 8;
} return (n ^ -1) >>> 0; }
function d2(e) { return e instanceof Uint8Array || ArrayBuffer.isView(e) && e.constructor.name === "Uint8Array"; }
function p1(e, ...t) { if (!d2(e))
    throw new Error("Uint8Array expected"); if (t.length > 0 && !t.includes(e.length))
    throw new Error("Uint8Array expected of length " + t + ", got length=" + e.length); }
function cd(e, t = !0) { if (e.destroyed)
    throw new Error("Hash instance has been destroyed"); if (t && e.finished)
    throw new Error("Hash#digest() has already been called"); }
function h2(e, t) { p1(e); const n = t.outputLen; if (e.length < n)
    throw new Error("digestInto() expects output buffer of length at least " + n); }
const pi = typeof globalThis == "object" && "crypto" in globalThis ? globalThis.crypto : void 0; /*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */
function ml(e) { return new DataView(e.buffer, e.byteOffset, e.byteLength); }
function Bn(e, t) { return e << 32 - t | e >>> t; }
function p2(e) { if (typeof e != "string")
    throw new Error("utf8ToBytes expected string, got " + typeof e); return new Uint8Array(new TextEncoder().encode(e)); }
function y1(e) { return typeof e == "string" && (e = p2(e)), p1(e), e; }
class y2 {
    clone() { return this._cloneInto(); }
}
function zf(e) { const t = r => e().update(y1(r)).digest(), n = e(); return t.outputLen = n.outputLen, t.blockLen = n.blockLen, t.create = () => e(), t; }
function m1(e = 32) { if (pi && typeof pi.getRandomValues == "function")
    return pi.getRandomValues(new Uint8Array(e)); if (pi && typeof pi.randomBytes == "function")
    return pi.randomBytes(e); throw new Error("crypto.getRandomValues must be defined"); }
function m2(e, t, n, r) { if (typeof e.setBigUint64 == "function")
    return e.setBigUint64(t, n, r); const i = BigInt(32), o = BigInt(4294967295), s = Number(n >> i & o), a = Number(n & o), f = r ? 4 : 0, h = r ? 0 : 4; e.setUint32(t + f, s, r), e.setUint32(t + h, a, r); }
function g2(e, t, n) { return e & t ^ ~e & n; }
function w2(e, t, n) { return e & t ^ e & n ^ t & n; }
class g1 extends y2 {
    constructor(t, n, r, i) { super(), this.blockLen = t, this.outputLen = n, this.padOffset = r, this.isLE = i, this.finished = !1, this.length = 0, this.pos = 0, this.destroyed = !1, this.buffer = new Uint8Array(t), this.view = ml(this.buffer); }
    update(t) { cd(this); const { view: n, buffer: r, blockLen: i } = this; t = y1(t); const o = t.length; for (let s = 0; s < o;) {
        const a = Math.min(i - this.pos, o - s);
        if (a === i) {
            const f = ml(t);
            for (; i <= o - s; s += i)
                this.process(f, s);
            continue;
        }
        r.set(t.subarray(s, s + a), this.pos), this.pos += a, s += a, this.pos === i && (this.process(n, 0), this.pos = 0);
    } return this.length += t.length, this.roundClean(), this; }
    digestInto(t) { cd(this), h2(t, this), this.finished = !0; const { buffer: n, view: r, blockLen: i, isLE: o } = this; let { pos: s } = this; n[s++] = 128, this.buffer.subarray(s).fill(0), this.padOffset > i - s && (this.process(r, 0), s = 0); for (let b = s; b < i; b++)
        n[b] = 0; m2(r, i - 8, BigInt(this.length * 8), o), this.process(r, 0); const a = ml(t), f = this.outputLen; if (f % 4)
        throw new Error("_sha2: outputLen should be aligned to 32bit"); const h = f / 4, w = this.get(); if (h > w.length)
        throw new Error("_sha2: outputLen bigger than state"); for (let b = 0; b < h; b++)
        a.setUint32(4 * b, w[b], o); }
    digest() { const { buffer: t, outputLen: n } = this; this.digestInto(t); const r = t.slice(0, n); return this.destroy(), r; }
    _cloneInto(t) { t || (t = new this.constructor), t.set(...this.get()); const { blockLen: n, buffer: r, length: i, finished: o, destroyed: s, pos: a } = this; return t.length = i, t.pos = a, t.finished = o, t.destroyed = s, i % n && t.buffer.set(r), t; }
}
const _2 = new Uint32Array([1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298]), sr = new Uint32Array([1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225]), ar = new Uint32Array(64);
class w1 extends g1 {
    constructor() { super(64, 32, 8, !1), this.A = sr[0] | 0, this.B = sr[1] | 0, this.C = sr[2] | 0, this.D = sr[3] | 0, this.E = sr[4] | 0, this.F = sr[5] | 0, this.G = sr[6] | 0, this.H = sr[7] | 0; }
    get() { const { A: t, B: n, C: r, D: i, E: o, F: s, G: a, H: f } = this; return [t, n, r, i, o, s, a, f]; }
    set(t, n, r, i, o, s, a, f) { this.A = t | 0, this.B = n | 0, this.C = r | 0, this.D = i | 0, this.E = o | 0, this.F = s | 0, this.G = a | 0, this.H = f | 0; }
    process(t, n) { for (let b = 0; b < 16; b++, n += 4)
        ar[b] = t.getUint32(n, !1); for (let b = 16; b < 64; b++) {
        const x = ar[b - 15], B = ar[b - 2], y = Bn(x, 7) ^ Bn(x, 18) ^ x >>> 3, O = Bn(B, 17) ^ Bn(B, 19) ^ B >>> 10;
        ar[b] = O + ar[b - 7] + y + ar[b - 16] | 0;
    } let { A: r, B: i, C: o, D: s, E: a, F: f, G: h, H: w } = this; for (let b = 0; b < 64; b++) {
        const x = Bn(a, 6) ^ Bn(a, 11) ^ Bn(a, 25), B = w + x + g2(a, f, h) + _2[b] + ar[b] | 0, O = (Bn(r, 2) ^ Bn(r, 13) ^ Bn(r, 22)) + w2(r, i, o) | 0;
        w = h, h = f, f = a, a = s + B | 0, s = o, o = i, i = r, r = B + O | 0;
    } r = r + this.A | 0, i = i + this.B | 0, o = o + this.C | 0, s = s + this.D | 0, a = a + this.E | 0, f = f + this.F | 0, h = h + this.G | 0, w = w + this.H | 0, this.set(r, i, o, s, a, f, h, w); }
    roundClean() { ar.fill(0); }
    destroy() { this.set(0, 0, 0, 0, 0, 0, 0, 0), this.buffer.fill(0); }
}
class v2 extends w1 {
    constructor() { super(), this.A = -1056596264, this.B = 914150663, this.C = 812702999, this.D = -150054599, this.E = -4191439, this.F = 1750603025, this.G = 1694076839, this.H = -1090891868, this.outputLen = 28; }
}
const Vf = zf(() => new w1), x2 = zf(() => new v2);
function E2(e) { return x2.create().update(new Uint8Array(e)).digest(); }
const Ms = "__principal__", b2 = 2, fd = 4, S2 = "aaaaa-aa", T2 = e => { var t; return new Uint8Array(((t = e.match(/.{1,2}/g)) !== null && t !== void 0 ? t : []).map(n => parseInt(n, 16))); }, B2 = e => e.reduce((t, n) => t + n.toString(16).padStart(2, "0"), "");
let Ae = class ua {
    constructor(t) { this._arr = t, this._isPrincipal = !0; }
    static anonymous() { return new this(new Uint8Array([fd])); }
    static managementCanister() { return this.fromHex(S2); }
    static selfAuthenticating(t) { const n = E2(t); return new this(new Uint8Array([...n, b2])); }
    static from(t) { if (typeof t == "string")
        return ua.fromText(t); if (Object.getPrototypeOf(t) === Uint8Array.prototype)
        return new ua(t); if (typeof t == "object" && t !== null && t._isPrincipal === !0)
        return new ua(t._arr); throw new Error(`Impossible to convert ${JSON.stringify(t)} to Principal.`); }
    static fromHex(t) { return new this(T2(t)); }
    static fromText(t) { let n = t; if (t.includes(Ms)) {
        const s = JSON.parse(t);
        Ms in s && (n = s[Ms]);
    } const r = n.toLowerCase().replace(/-/g, ""); let i = l2(r); i = i.slice(4, i.length); const o = new this(i); if (o.toText() !== n)
        throw new Error(`Principal "${o.toText()}" does not have a valid checksum (original value "${n}" may not be a valid Principal ID).`); return o; }
    static fromUint8Array(t) { return new this(t); }
    isAnonymous() { return this._arr.byteLength === 1 && this._arr[0] === fd; }
    toUint8Array() { return this._arr; }
    toHex() { return B2(this._arr).toUpperCase(); }
    toText() { const t = new ArrayBuffer(4); new DataView(t).setUint32(0, f2(this._arr)); const r = new Uint8Array(t), i = Uint8Array.from(this._arr), o = new Uint8Array([...r, ...i]), a = u2(o).match(/.{1,5}/g); if (!a)
        throw new Error; return a.join("-"); }
    toString() { return this.toText(); }
    toJSON() { return { [Ms]: this.toText() }; }
    compareTo(t) { for (let n = 0; n < Math.min(this._arr.length, t._arr.length); n++) {
        if (this._arr[n] < t._arr[n])
            return "lt";
        if (this._arr[n] > t._arr[n])
            return "gt";
    } return this._arr.length < t._arr.length ? "lt" : this._arr.length > t._arr.length ? "gt" : "eq"; }
    ltEq(t) { const n = this.compareTo(t); return n == "lt" || n == "eq"; }
    gtEq(t) { const n = this.compareTo(t); return n == "gt" || n == "eq"; }
};
function zn(...e) { const t = new Uint8Array(e.reduce((r, i) => r + i.byteLength, 0)); let n = 0; for (const r of e)
    t.set(new Uint8Array(r), n), n += r.byteLength; return t.buffer; }
function pt(e) { return [...new Uint8Array(e)].map(t => t.toString(16).padStart(2, "0")).join(""); }
const A2 = new RegExp(/^[0-9a-fA-F]+$/);
function eu(e) { if (!A2.test(e))
    throw new Error("Invalid hexadecimal string."); const t = [...e].reduce((n, r, i) => (n[i / 2 | 0] = (n[i / 2 | 0] || "") + r, n), []).map(n => Number.parseInt(n, 16)); return new Uint8Array(t).buffer; }
function _1(e, t) { if (e.byteLength !== t.byteLength)
    return e.byteLength - t.byteLength; const n = new Uint8Array(e), r = new Uint8Array(t); for (let i = 0; i < n.length; i++)
    if (n[i] !== r[i])
        return n[i] - r[i]; return 0; }
function Bu(e, t) { return _1(e, t) === 0; }
function la(e) { return new DataView(e.buffer, e.byteOffset, e.byteLength).buffer; }
function v1(e) { return e instanceof Uint8Array ? la(e) : e instanceof ArrayBuffer ? e : Array.isArray(e) ? la(new Uint8Array(e)) : "buffer" in e ? v1(e.buffer) : la(new Uint8Array(e)); }
class Qe extends Error {
    constructor(t) { super(t), this.message = t, this.name = "AgentError", this.__proto__ = Qe.prototype, Object.setPrototypeOf(this, Qe.prototype); }
}
function Pe(...e) { const t = new Uint8Array(e.reduce((r, i) => r + i.byteLength, 0)); let n = 0; for (const r of e)
    t.set(new Uint8Array(r), n), n += r.byteLength; return t; }
class oo {
    constructor(t, n = (t == null ? void 0 : t.byteLength) || 0) { this._buffer = tu(t || new ArrayBuffer(0)), this._view = new Uint8Array(this._buffer, 0, n); }
    get buffer() { return tu(this._view.slice()); }
    get byteLength() { return this._view.byteLength; }
    read(t) { const n = this._view.subarray(0, t); return this._view = this._view.subarray(t), n.slice().buffer; }
    readUint8() { const t = this._view[0]; return this._view = this._view.subarray(1), t; }
    write(t) { const n = new Uint8Array(t), r = this._view.byteLength; this._view.byteOffset + this._view.byteLength + n.byteLength >= this._buffer.byteLength ? this.alloc(n.byteLength) : this._view = new Uint8Array(this._buffer, this._view.byteOffset, this._view.byteLength + n.byteLength), this._view.set(n, r); }
    get end() { return this._view.byteLength === 0; }
    alloc(t) { const n = new ArrayBuffer((this._buffer.byteLength + t) * 1.2 | 0), r = new Uint8Array(n, 0, this._view.byteLength + t); r.set(this._view), this._buffer = n, this._view = r; }
}
function gl(e) { return new DataView(e.buffer, e.byteOffset, e.byteLength).buffer; }
function tu(e) { return e instanceof Uint8Array ? gl(e) : e instanceof ArrayBuffer ? e : Array.isArray(e) ? gl(new Uint8Array(e)) : "buffer" in e ? tu(e.buffer) : gl(new Uint8Array(e)); }
function N2(e) { const n = new TextEncoder().encode(e); let r = 0; for (const i of n)
    r = (r * 223 + i) % 2 ** 32; return r; }
function Cn(e) { if (/^_\d+_$/.test(e) || /^_0x[0-9a-fA-F]+_$/.test(e)) {
    const t = +e.slice(1, -1);
    if (Number.isSafeInteger(t) && t >= 0 && t < 2 ** 32)
        return t;
} return N2(e); }
function x1() { throw new Error("unexpected end of buffer"); }
function si(e, t) { return e.byteLength < t && x1(), e.read(t); }
function ai(e) { const t = e.readUint8(); return t === void 0 && x1(), t; }
function Xe(e) { if (typeof e == "number" && (e = BigInt(e)), e < BigInt(0))
    throw new Error("Cannot leb encode negative values."); const t = (e === BigInt(0) ? 0 : Math.ceil(Math.log2(Number(e)))) + 1, n = new oo(new ArrayBuffer(t), 0); for (;;) {
    const r = Number(e & BigInt(127));
    if (e /= BigInt(128), e === BigInt(0)) {
        n.write(new Uint8Array([r]));
        break;
    }
    else
        n.write(new Uint8Array([r | 128]));
} return n.buffer; }
function ft(e) { let t = BigInt(1), n = BigInt(0), r; do
    r = ai(e), n += BigInt(r & 127).valueOf() * t, t *= BigInt(128);
while (r >= 128); return n; }
function ut(e) { typeof e == "number" && (e = BigInt(e)); const t = e < BigInt(0); t && (e = -e - BigInt(1)); const n = (e === BigInt(0) ? 0 : Math.ceil(Math.log2(Number(e)))) + 1, r = new oo(new ArrayBuffer(n), 0); for (;;) {
    const o = i(e);
    if (e /= BigInt(128), t && e === BigInt(0) && o & 64 || !t && e === BigInt(0) && !(o & 64)) {
        r.write(new Uint8Array([o]));
        break;
    }
    else
        r.write(new Uint8Array([o | 128]));
} function i(o) { const s = o % BigInt(128); return Number(t ? BigInt(128) - s - BigInt(1) : s); } return r.buffer; }
function fr(e) { const t = new Uint8Array(e.buffer); let n = 0; for (; n < t.byteLength; n++)
    if (t[n] < 128) {
        if (!(t[n] & 64))
            return ft(e);
        break;
    } const r = new Uint8Array(si(e, n + 1)); let i = BigInt(0); for (let o = r.byteLength - 1; o >= 0; o--)
    i = i * BigInt(128) + BigInt(128 - (r[o] & 127) - 1); return -i - BigInt(1); }
function k2(e, t) { if (BigInt(e) < BigInt(0))
    throw new Error("Cannot write negative values."); return E1(e, t); }
function E1(e, t) { e = BigInt(e); const n = new oo(new ArrayBuffer(Math.min(1, t)), 0); let r = 0, i = BigInt(256), o = BigInt(0), s = Number(e % i); for (n.write(new Uint8Array([s])); ++r < t;)
    e < 0 && o === BigInt(0) && s !== 0 && (o = BigInt(1)), s = Number((e / i - o) % BigInt(256)), n.write(new Uint8Array([s])), i *= BigInt(256); return n.buffer; }
function b1(e, t) { let n = BigInt(ai(e)), r = BigInt(1), i = 0; for (; ++i < t;) {
    r *= BigInt(256);
    const o = BigInt(ai(e));
    n = n + r * o;
} return n; }
function I2(e, t) { let n = b1(e, t); const r = BigInt(2) ** (BigInt(8) * BigInt(t - 1) + BigInt(7)); return n >= r && (n -= r * BigInt(2)), n; }
function Bc(e) { const t = BigInt(e); if (e < 0)
    throw new RangeError("Input must be non-negative"); return BigInt(1) << t; }
const ca = "DIDL", dd = 400;
function rs(e, t, n) { return e.map((r, i) => n(r, t[i])); }
class R2 {
    constructor() { this._typs = [], this._idx = new Map; }
    has(t) { return this._idx.has(t.name); }
    add(t, n) { const r = this._typs.length; this._idx.set(t.name, r), this._typs.push(n); }
    merge(t, n) { const r = this._idx.get(t.name), i = this._idx.get(n); if (r === void 0)
        throw new Error("Missing type index for " + t); if (i === void 0)
        throw new Error("Missing type index for " + n); this._typs[r] = this._typs[i], this._typs.splice(i, 1), this._idx.delete(n); }
    encode() { const t = Xe(this._typs.length), n = Pe(...this._typs); return Pe(t, n); }
    indexOf(t) { if (!this._idx.has(t))
        throw new Error("Missing type index for " + t); return ut(this._idx.get(t) || 0); }
}
class O2 {
    visitType(t, n) { throw new Error("Not implemented"); }
    visitPrimitive(t, n) { return this.visitType(t, n); }
    visitEmpty(t, n) { return this.visitPrimitive(t, n); }
    visitBool(t, n) { return this.visitPrimitive(t, n); }
    visitNull(t, n) { return this.visitPrimitive(t, n); }
    visitReserved(t, n) { return this.visitPrimitive(t, n); }
    visitText(t, n) { return this.visitPrimitive(t, n); }
    visitNumber(t, n) { return this.visitPrimitive(t, n); }
    visitInt(t, n) { return this.visitNumber(t, n); }
    visitNat(t, n) { return this.visitNumber(t, n); }
    visitFloat(t, n) { return this.visitPrimitive(t, n); }
    visitFixedInt(t, n) { return this.visitNumber(t, n); }
    visitFixedNat(t, n) { return this.visitNumber(t, n); }
    visitPrincipal(t, n) { return this.visitPrimitive(t, n); }
    visitConstruct(t, n) { return this.visitType(t, n); }
    visitVec(t, n, r) { return this.visitConstruct(t, r); }
    visitOpt(t, n, r) { return this.visitConstruct(t, r); }
    visitRecord(t, n, r) { return this.visitConstruct(t, r); }
    visitTuple(t, n, r) { const i = n.map((o, s) => [`_${s}_`, o]); return this.visitRecord(t, i, r); }
    visitVariant(t, n, r) { return this.visitConstruct(t, r); }
    visitRec(t, n, r) { return this.visitConstruct(n, r); }
    visitFunc(t, n) { return this.visitConstruct(t, n); }
    visitService(t, n) { return this.visitConstruct(t, n); }
}
class Au {
    display() { return this.name; }
    valueToString(t) { return tt(t); }
    buildTypeTable(t) { t.has(this) || this._buildTypeTableImpl(t); }
}
class un extends Au {
    checkType(t) { if (this.name !== t.name)
        throw new Error(`type mismatch: type on the wire ${t.name}, expect type ${this.name}`); return t; }
    _buildTypeTableImpl(t) { }
}
class Mr extends Au {
    checkType(t) { if (t instanceof $r) {
        const n = t.getType();
        if (typeof n > "u")
            throw new Error("type mismatch with uninitialized type");
        return n;
    } throw new Error(`type mismatch: type on the wire ${t.name}, expect type ${this.name}`); }
    encodeType(t) { return t.indexOf(this.name); }
}
class S1 extends un {
    accept(t, n) { return t.visitEmpty(this, n); }
    covariant(t) { throw new Error(`Invalid ${this.display()} argument: ${tt(t)}`); }
    encodeValue() { throw new Error("Empty cannot appear as a function argument"); }
    valueToString() { throw new Error("Empty cannot appear as a value"); }
    encodeType() { return ut(-17); }
    decodeValue() { throw new Error("Empty cannot appear as an output"); }
    get name() { return "empty"; }
}
class T1 extends Au {
    checkType(t) { throw new Error("Method not implemented for unknown."); }
    accept(t, n) { throw t.visitType(this, n); }
    covariant(t) { throw new Error(`Invalid ${this.display()} argument: ${tt(t)}`); }
    encodeValue() { throw new Error("Unknown cannot appear as a function argument"); }
    valueToString() { throw new Error("Unknown cannot appear as a value"); }
    encodeType() { throw new Error("Unknown cannot be serialized"); }
    decodeValue(t, n) { let r = n.decodeValue(t, n); Object(r) !== r && (r = Object(r)); let i; return n instanceof $r ? i = () => n.getType() : i = () => n, Object.defineProperty(r, "type", { value: i, writable: !0, enumerable: !1, configurable: !0 }), r; }
    _buildTypeTableImpl() { throw new Error("Unknown cannot be serialized"); }
    get name() { return "Unknown"; }
}
class B1 extends un {
    accept(t, n) { return t.visitBool(this, n); }
    covariant(t) { if (typeof t == "boolean")
        return !0; throw new Error(`Invalid ${this.display()} argument: ${tt(t)}`); }
    encodeValue(t) { return new Uint8Array([t ? 1 : 0]); }
    encodeType() { return ut(-2); }
    decodeValue(t, n) { switch (this.checkType(n), ai(t)) {
        case 0: return !1;
        case 1: return !0;
        default: throw new Error("Boolean value out of range");
    } }
    get name() { return "bool"; }
}
class A1 extends un {
    accept(t, n) { return t.visitNull(this, n); }
    covariant(t) { if (t === null)
        return !0; throw new Error(`Invalid ${this.display()} argument: ${tt(t)}`); }
    encodeValue() { return new ArrayBuffer(0); }
    encodeType() { return ut(-1); }
    decodeValue(t, n) { return this.checkType(n), null; }
    get name() { return "null"; }
}
class nu extends un {
    accept(t, n) { return t.visitReserved(this, n); }
    covariant(t) { return !0; }
    encodeValue() { return new ArrayBuffer(0); }
    encodeType() { return ut(-16); }
    decodeValue(t, n) { return n.name !== this.name && n.decodeValue(t, n), null; }
    get name() { return "reserved"; }
}
class N1 extends un {
    accept(t, n) { return t.visitText(this, n); }
    covariant(t) { if (typeof t == "string")
        return !0; throw new Error(`Invalid ${this.display()} argument: ${tt(t)}`); }
    encodeValue(t) { const n = new TextEncoder().encode(t), r = Xe(n.byteLength); return Pe(r, n); }
    encodeType() { return ut(-15); }
    decodeValue(t, n) { this.checkType(n); const r = ft(t), i = si(t, Number(r)); return new TextDecoder("utf8", { fatal: !0 }).decode(i); }
    get name() { return "text"; }
    valueToString(t) { return '"' + t + '"'; }
}
class k1 extends un {
    accept(t, n) { return t.visitInt(this, n); }
    covariant(t) { if (typeof t == "bigint" || Number.isInteger(t))
        return !0; throw new Error(`Invalid ${this.display()} argument: ${tt(t)}`); }
    encodeValue(t) { return ut(t); }
    encodeType() { return ut(-4); }
    decodeValue(t, n) { return this.checkType(n), fr(t); }
    get name() { return "int"; }
    valueToString(t) { return t.toString(); }
}
class I1 extends un {
    accept(t, n) { return t.visitNat(this, n); }
    covariant(t) { if (typeof t == "bigint" && t >= BigInt(0) || Number.isInteger(t) && t >= 0)
        return !0; throw new Error(`Invalid ${this.display()} argument: ${tt(t)}`); }
    encodeValue(t) { return Xe(t); }
    encodeType() { return ut(-3); }
    decodeValue(t, n) { return this.checkType(n), ft(t); }
    get name() { return "nat"; }
    valueToString(t) { return t.toString(); }
}
class jf extends un {
    constructor(t) { if (super(), this._bits = t, t !== 32 && t !== 64)
        throw new Error("not a valid float type"); }
    accept(t, n) { return t.visitFloat(this, n); }
    covariant(t) { if (typeof t == "number" || t instanceof Number)
        return !0; throw new Error(`Invalid ${this.display()} argument: ${tt(t)}`); }
    encodeValue(t) { const n = new ArrayBuffer(this._bits / 8), r = new DataView(n); return this._bits === 32 ? r.setFloat32(0, t, !0) : r.setFloat64(0, t, !0), n; }
    encodeType() { const t = this._bits === 32 ? -13 : -14; return ut(t); }
    decodeValue(t, n) { this.checkType(n); const r = si(t, this._bits / 8), i = new DataView(r); return this._bits === 32 ? i.getFloat32(0, !0) : i.getFloat64(0, !0); }
    get name() { return "float" + this._bits; }
    valueToString(t) { return t.toString(); }
}
class ui extends un {
    constructor(t) { super(), this._bits = t; }
    accept(t, n) { return t.visitFixedInt(this, n); }
    covariant(t) { const n = Bc(this._bits - 1) * BigInt(-1), r = Bc(this._bits - 1) - BigInt(1); let i = !1; if (typeof t == "bigint")
        i = t >= n && t <= r;
    else if (Number.isInteger(t)) {
        const o = BigInt(t);
        i = o >= n && o <= r;
    }
    else
        i = !1; if (i)
        return !0; throw new Error(`Invalid ${this.display()} argument: ${tt(t)}`); }
    encodeValue(t) { return E1(t, this._bits / 8); }
    encodeType() { const t = Math.log2(this._bits) - 3; return ut(-9 - t); }
    decodeValue(t, n) { this.checkType(n); const r = I2(t, this._bits / 8); return this._bits <= 32 ? Number(r) : r; }
    get name() { return `int${this._bits}`; }
    valueToString(t) { return t.toString(); }
}
class Ir extends un {
    constructor(t) { super(), this._bits = t; }
    accept(t, n) { return t.visitFixedNat(this, n); }
    covariant(t) { const n = Bc(this._bits); let r = !1; if (typeof t == "bigint" && t >= BigInt(0) ? r = t < n : Number.isInteger(t) && t >= 0 ? r = BigInt(t) < n : r = !1, r)
        return !0; throw new Error(`Invalid ${this.display()} argument: ${tt(t)}`); }
    encodeValue(t) { return k2(t, this._bits / 8); }
    encodeType() { const t = Math.log2(this._bits) - 3; return ut(-5 - t); }
    decodeValue(t, n) { this.checkType(n); const r = b1(t, this._bits / 8); return this._bits <= 32 ? Number(r) : r; }
    get name() { return `nat${this._bits}`; }
    valueToString(t) { return t.toString(); }
}
class Nu extends Mr {
    constructor(t) { super(), this._type = t, this._blobOptimization = !1, t instanceof Ir && t._bits === 8 && (this._blobOptimization = !0); }
    accept(t, n) { return t.visitVec(this, this._type, n); }
    covariant(t) {
        const n = this._type instanceof Ir ? this._type._bits : this._type instanceof ui ? this._type._bits : 0;
        if (ArrayBuffer.isView(t) && n == t.BYTES_PER_ELEMENT * 8 || Array.isArray(t) && t.every((r, i) => {
            try {
                return this._type.covariant(r);
            }
            catch (o) {
                throw new Error(`Invalid ${this.display()} argument: 

index ${i} -> ${o.message}`);
            }
        }))
            return !0;
        throw new Error(`Invalid ${this.display()} argument: ${tt(t)}`);
    }
    encodeValue(t) { const n = Xe(t.length); if (this._blobOptimization)
        return Pe(n, new Uint8Array(t)); if (ArrayBuffer.isView(t))
        return Pe(n, new Uint8Array(t.buffer)); const r = new oo(new ArrayBuffer(n.byteLength + t.length), 0); r.write(n); for (const i of t) {
        const o = this._type.encodeValue(i);
        r.write(new Uint8Array(o));
    } return r.buffer; }
    _buildTypeTableImpl(t) { this._type.buildTypeTable(t); const n = ut(-19), r = this._type.encodeType(t); t.add(this, Pe(n, r)); }
    decodeValue(t, n) { const r = this.checkType(n); if (!(r instanceof Nu))
        throw new Error("Not a vector type"); const i = Number(ft(t)); if (this._type instanceof Ir) {
        if (this._type._bits == 8)
            return new Uint8Array(t.read(i));
        if (this._type._bits == 16)
            return new Uint16Array(t.read(i * 2));
        if (this._type._bits == 32)
            return new Uint32Array(t.read(i * 4));
        if (this._type._bits == 64)
            return new BigUint64Array(t.read(i * 8));
    } if (this._type instanceof ui) {
        if (this._type._bits == 8)
            return new Int8Array(t.read(i));
        if (this._type._bits == 16)
            return new Int16Array(t.read(i * 2));
        if (this._type._bits == 32)
            return new Int32Array(t.read(i * 4));
        if (this._type._bits == 64)
            return new BigInt64Array(t.read(i * 8));
    } const o = []; for (let s = 0; s < i; s++)
        o.push(this._type.decodeValue(t, r._type)); return o; }
    get name() { return `vec ${this._type.name}`; }
    display() { return `vec ${this._type.display()}`; }
    valueToString(t) { return "vec {" + t.map(r => this._type.valueToString(r)).join("; ") + "}"; }
}
class eo extends Mr {
    constructor(t) { super(), this._type = t; }
    accept(t, n) { return t.visitOpt(this, this._type, n); }
    covariant(t) {
        try {
            if (Array.isArray(t) && (t.length === 0 || t.length === 1 && this._type.covariant(t[0])))
                return !0;
        }
        catch (n) {
            throw new Error(`Invalid ${this.display()} argument: ${tt(t)} 

-> ${n.message}`);
        }
        throw new Error(`Invalid ${this.display()} argument: ${tt(t)}`);
    }
    encodeValue(t) { return t.length === 0 ? new Uint8Array([0]) : Pe(new Uint8Array([1]), this._type.encodeValue(t[0])); }
    _buildTypeTableImpl(t) { this._type.buildTypeTable(t); const n = ut(-18), r = this._type.encodeType(t); t.add(this, Pe(n, r)); }
    decodeValue(t, n) { const r = this.checkType(n); if (!(r instanceof eo))
        throw new Error("Not an option type"); switch (ai(t)) {
        case 0: return [];
        case 1: return [this._type.decodeValue(t, r._type)];
        default: throw new Error("Not an option value");
    } }
    get name() { return `opt ${this._type.name}`; }
    display() { return `opt ${this._type.display()}`; }
    valueToString(t) { return t.length === 0 ? "null" : `opt ${this._type.valueToString(t[0])}`; }
}
class ps extends Mr {
    constructor(t = {}) { super(), this._fields = Object.entries(t).sort((n, r) => Cn(n[0]) - Cn(r[0])); }
    accept(t, n) { return t.visitRecord(this, this._fields, n); }
    tryAsTuple() { const t = []; for (let n = 0; n < this._fields.length; n++) {
        const [r, i] = this._fields[n];
        if (r !== `_${n}_`)
            return null;
        t.push(i);
    } return t; }
    covariant(t) {
        if (typeof t == "object" && this._fields.every(([n, r]) => {
            if (!t.hasOwnProperty(n))
                throw new Error(`Record is missing key "${n}".`);
            try {
                return r.covariant(t[n]);
            }
            catch (i) {
                throw new Error(`Invalid ${this.display()} argument: 

field ${n} -> ${i.message}`);
            }
        }))
            return !0;
        throw new Error(`Invalid ${this.display()} argument: ${tt(t)}`);
    }
    encodeValue(t) { const n = this._fields.map(([i]) => t[i]), r = rs(this._fields, n, ([, i], o) => i.encodeValue(o)); return Pe(...r); }
    _buildTypeTableImpl(t) { this._fields.forEach(([o, s]) => s.buildTypeTable(t)); const n = ut(-20), r = Xe(this._fields.length), i = this._fields.map(([o, s]) => Pe(Xe(Cn(o)), s.encodeType(t))); t.add(this, Pe(n, r, Pe(...i))); }
    decodeValue(t, n) { const r = this.checkType(n); if (!(r instanceof ps))
        throw new Error("Not a record type"); const i = {}; let o = 0, s = 0; for (; s < r._fields.length;) {
        const [a, f] = r._fields[s];
        if (o >= this._fields.length) {
            f.decodeValue(t, f), s++;
            continue;
        }
        const [h, w] = this._fields[o], b = Cn(this._fields[o][0]), x = Cn(a);
        if (b === x)
            i[h] = w.decodeValue(t, f), o++, s++;
        else if (x > b)
            if (w instanceof eo || w instanceof nu)
                i[h] = [], o++;
            else
                throw new Error("Cannot find required field " + h);
        else
            f.decodeValue(t, f), s++;
    } for (const [a, f] of this._fields.slice(o))
        if (f instanceof eo || f instanceof nu)
            i[a] = [];
        else
            throw new Error("Cannot find required field " + a); return i; }
    get name() { return `record {${this._fields.map(([n, r]) => n + ":" + r.name).join("; ")}}`; }
    display() { return `record {${this._fields.map(([n, r]) => n + ":" + r.display()).join("; ")}}`; }
    valueToString(t) { const n = this._fields.map(([i]) => t[i]); return `record {${rs(this._fields, n, ([i, o], s) => i + "=" + o.valueToString(s)).join("; ")}}`; }
}
class ku extends ps {
    constructor(t) { const n = {}; t.forEach((r, i) => n["_" + i + "_"] = r), super(n), this._components = t; }
    accept(t, n) { return t.visitTuple(this, this._components, n); }
    covariant(t) {
        if (Array.isArray(t) && t.length >= this._fields.length && this._components.every((n, r) => {
            try {
                return n.covariant(t[r]);
            }
            catch (i) {
                throw new Error(`Invalid ${this.display()} argument: 

index ${r} -> ${i.message}`);
            }
        }))
            return !0;
        throw new Error(`Invalid ${this.display()} argument: ${tt(t)}`);
    }
    encodeValue(t) { const n = rs(this._components, t, (r, i) => r.encodeValue(i)); return Pe(...n); }
    decodeValue(t, n) { const r = this.checkType(n); if (!(r instanceof ku))
        throw new Error("not a tuple type"); if (r._components.length < this._components.length)
        throw new Error("tuple mismatch"); const i = []; for (const [o, s] of r._components.entries())
        o >= this._components.length ? s.decodeValue(t, s) : i.push(this._components[o].decodeValue(t, s)); return i; }
    display() { return `record {${this._components.map(n => n.display()).join("; ")}}`; }
    valueToString(t) { return `record {${rs(this._components, t, (r, i) => r.valueToString(i)).join("; ")}}`; }
}
class Iu extends Mr {
    constructor(t = {}) { super(), this._fields = Object.entries(t).sort((n, r) => Cn(n[0]) - Cn(r[0])); }
    accept(t, n) { return t.visitVariant(this, this._fields, n); }
    covariant(t) {
        if (typeof t == "object" && Object.entries(t).length === 1 && this._fields.every(([n, r]) => {
            try {
                return !t.hasOwnProperty(n) || r.covariant(t[n]);
            }
            catch (i) {
                throw new Error(`Invalid ${this.display()} argument: 

variant ${n} -> ${i.message}`);
            }
        }))
            return !0;
        throw new Error(`Invalid ${this.display()} argument: ${tt(t)}`);
    }
    encodeValue(t) { for (let n = 0; n < this._fields.length; n++) {
        const [r, i] = this._fields[n];
        if (t.hasOwnProperty(r)) {
            const o = Xe(n), s = i.encodeValue(t[r]);
            return Pe(o, s);
        }
    } throw Error("Variant has no data: " + t); }
    _buildTypeTableImpl(t) { this._fields.forEach(([, o]) => { o.buildTypeTable(t); }); const n = ut(-21), r = Xe(this._fields.length), i = this._fields.map(([o, s]) => Pe(Xe(Cn(o)), s.encodeType(t))); t.add(this, Pe(n, r, ...i)); }
    decodeValue(t, n) { const r = this.checkType(n); if (!(r instanceof Iu))
        throw new Error("Not a variant type"); const i = Number(ft(t)); if (i >= r._fields.length)
        throw Error("Invalid variant index: " + i); const [o, s] = r._fields[i]; for (const [a, f] of this._fields)
        if (Cn(o) === Cn(a)) {
            const h = f.decodeValue(t, s);
            return { [a]: h };
        } throw new Error("Cannot find field hash " + o); }
    get name() { return `variant {${this._fields.map(([n, r]) => n + ":" + r.name).join("; ")}}`; }
    display() { return `variant {${this._fields.map(([n, r]) => n + (r.name === "null" ? "" : `:${r.display()}`)).join("; ")}}`; }
    valueToString(t) { for (const [n, r] of this._fields)
        if (t.hasOwnProperty(n)) {
            const i = r.valueToString(t[n]);
            return i === "null" ? `variant {${n}}` : `variant {${n}=${i}}`;
        } throw new Error("Variant has no data: " + t); }
}
class $r extends Mr {
    constructor() { super(...arguments), this._id = $r._counter++, this._type = void 0; }
    accept(t, n) { if (!this._type)
        throw Error("Recursive type uninitialized."); return t.visitRec(this, this._type, n); }
    fill(t) { this._type = t; }
    getType() { return this._type; }
    covariant(t) { if (this._type && this._type.covariant(t))
        return !0; throw new Error(`Invalid ${this.display()} argument: ${tt(t)}`); }
    encodeValue(t) { if (!this._type)
        throw Error("Recursive type uninitialized."); return this._type.encodeValue(t); }
    _buildTypeTableImpl(t) { if (!this._type)
        throw Error("Recursive type uninitialized."); t.add(this, new Uint8Array([])), this._type.buildTypeTable(t), t.merge(this, this._type.name); }
    decodeValue(t, n) { if (!this._type)
        throw Error("Recursive type uninitialized."); return this._type.decodeValue(t, n); }
    get name() { return `rec_${this._id}`; }
    display() { if (!this._type)
        throw Error("Recursive type uninitialized."); return `μ${this.name}.${this._type.name}`; }
    valueToString(t) { if (!this._type)
        throw Error("Recursive type uninitialized."); return this._type.valueToString(t); }
}
$r._counter = 0;
function Lf(e) { if (ai(e) !== 1)
    throw new Error("Cannot decode principal"); const n = Number(ft(e)); return Ae.fromUint8Array(new Uint8Array(si(e, n))); }
class R1 extends un {
    accept(t, n) { return t.visitPrincipal(this, n); }
    covariant(t) { if (t && t._isPrincipal)
        return !0; throw new Error(`Invalid ${this.display()} argument: ${tt(t)}`); }
    encodeValue(t) { const n = t.toUint8Array(), r = Xe(n.byteLength); return Pe(new Uint8Array([1]), r, n); }
    encodeType() { return ut(-24); }
    decodeValue(t, n) { return this.checkType(n), Lf(t); }
    get name() { return "principal"; }
    valueToString(t) { return `${this.name} "${t.toText()}"`; }
}
class qf extends Mr {
    constructor(t, n, r = []) { super(), this.argTypes = t, this.retTypes = n, this.annotations = r; }
    static argsToString(t, n) { if (t.length !== n.length)
        throw new Error("arity mismatch"); return "(" + t.map((r, i) => r.valueToString(n[i])).join(", ") + ")"; }
    accept(t, n) { return t.visitFunc(this, n); }
    covariant(t) { if (Array.isArray(t) && t.length === 2 && t[0] && t[0]._isPrincipal && typeof t[1] == "string")
        return !0; throw new Error(`Invalid ${this.display()} argument: ${tt(t)}`); }
    encodeValue([t, n]) { const r = t.toUint8Array(), i = Xe(r.byteLength), o = Pe(new Uint8Array([1]), i, r), s = new TextEncoder().encode(n), a = Xe(s.byteLength); return Pe(new Uint8Array([1]), o, a, s); }
    _buildTypeTableImpl(t) { this.argTypes.forEach(h => h.buildTypeTable(t)), this.retTypes.forEach(h => h.buildTypeTable(t)); const n = ut(-22), r = Xe(this.argTypes.length), i = Pe(...this.argTypes.map(h => h.encodeType(t))), o = Xe(this.retTypes.length), s = Pe(...this.retTypes.map(h => h.encodeType(t))), a = Xe(this.annotations.length), f = Pe(...this.annotations.map(h => this.encodeAnnotation(h))); t.add(this, Pe(n, r, i, o, s, a, f)); }
    decodeValue(t) { if (ai(t) !== 1)
        throw new Error("Cannot decode function reference"); const r = Lf(t), i = Number(ft(t)), o = si(t, i), a = new TextDecoder("utf8", { fatal: !0 }).decode(o); return [r, a]; }
    get name() { const t = this.argTypes.map(i => i.name).join(", "), n = this.retTypes.map(i => i.name).join(", "), r = " " + this.annotations.join(" "); return `(${t}) -> (${n})${r}`; }
    valueToString([t, n]) { return `func "${t.toText()}".${n}`; }
    display() { const t = this.argTypes.map(i => i.display()).join(", "), n = this.retTypes.map(i => i.display()).join(", "), r = " " + this.annotations.join(" "); return `(${t}) → (${n})${r}`; }
    encodeAnnotation(t) { if (t === "query")
        return new Uint8Array([1]); if (t === "oneway")
        return new Uint8Array([2]); if (t === "composite_query")
        return new Uint8Array([3]); throw new Error("Illegal function annotation"); }
}
class O1 extends Mr {
    constructor(t) { super(), this._fields = Object.entries(t).sort((n, r) => n[0] < r[0] ? -1 : n[0] > r[0] ? 1 : 0); }
    accept(t, n) { return t.visitService(this, n); }
    covariant(t) { if (t && t._isPrincipal)
        return !0; throw new Error(`Invalid ${this.display()} argument: ${tt(t)}`); }
    encodeValue(t) { const n = t.toUint8Array(), r = Xe(n.length); return Pe(new Uint8Array([1]), r, n); }
    _buildTypeTableImpl(t) { this._fields.forEach(([o, s]) => s.buildTypeTable(t)); const n = ut(-23), r = Xe(this._fields.length), i = this._fields.map(([o, s]) => { const a = new TextEncoder().encode(o), f = Xe(a.length); return Pe(f, a, s.encodeType(t)); }); t.add(this, Pe(n, r, ...i)); }
    decodeValue(t) { return Lf(t); }
    get name() { return `service {${this._fields.map(([n, r]) => n + ":" + r.name).join("; ")}}`; }
    valueToString(t) { return `service "${t.toText()}"`; }
}
function tt(e) { const t = JSON.stringify(e, (n, r) => typeof r == "bigint" ? `BigInt(${r})` : r); return t && t.length > dd ? t.substring(0, dd - 3) + "..." : t; }
function Ac(e, t) {
    if (t.length < e.length)
        throw Error("Wrong number of message arguments");
    const n = new R2;
    e.forEach(f => f.buildTypeTable(n));
    const r = new TextEncoder().encode(ca), i = n.encode(), o = Xe(t.length), s = Pe(...e.map(f => f.encodeType(n))), a = Pe(...rs(e, t, (f, h) => {
        try {
            f.covariant(h);
        }
        catch (w) {
            throw new Error(w.message + `

`);
        }
        return f.encodeValue(h);
    }));
    return Pe(r, i, o, s, a);
}
function U1(e, t) { const n = new oo(t); if (t.byteLength < ca.length)
    throw new Error("Message length smaller than magic number"); const r = si(n, ca.length), i = new TextDecoder().decode(r); if (i !== ca)
    throw new Error("Wrong magic number: " + JSON.stringify(i)); function o(B) { const y = [], O = Number(ft(B)); for (let v = 0; v < O; v++) {
    const E = Number(fr(B));
    switch (E) {
        case -18:
        case -19: {
            const z = Number(fr(B));
            y.push([E, z]);
            break;
        }
        case -20:
        case -21: {
            const z = [];
            let I = Number(ft(B)), L;
            for (; I--;) {
                const V = Number(ft(B));
                if (V >= Math.pow(2, 32))
                    throw new Error("field id out of 32-bit range");
                if (typeof L == "number" && L >= V)
                    throw new Error("field id collision or not sorted");
                L = V;
                const W = Number(fr(B));
                z.push([V, W]);
            }
            y.push([E, z]);
            break;
        }
        case -22: {
            const z = [];
            let I = Number(ft(B));
            for (; I--;)
                z.push(Number(fr(B)));
            const L = [];
            let V = Number(ft(B));
            for (; V--;)
                L.push(Number(fr(B)));
            const W = [];
            let te = Number(ft(B));
            for (; te--;)
                switch (Number(ft(B))) {
                    case 1: {
                        W.push("query");
                        break;
                    }
                    case 2: {
                        W.push("oneway");
                        break;
                    }
                    case 3: {
                        W.push("composite_query");
                        break;
                    }
                    default: throw new Error("unknown annotation");
                }
            y.push([E, [z, L, W]]);
            break;
        }
        case -23: {
            let z = Number(ft(B));
            const I = [];
            for (; z--;) {
                const L = Number(ft(B)), V = new TextDecoder().decode(si(B, L)), W = fr(B);
                I.push([V, W]);
            }
            y.push([E, I]);
            break;
        }
        default: throw new Error("Illegal op_code: " + E);
    }
} const M = [], A = Number(ft(B)); for (let v = 0; v < A; v++)
    M.push(Number(fr(B))); return [y, M]; } const [s, a] = o(n); if (a.length < e.length)
    throw new Error("Wrong number of return values"); const f = s.map(B => ry()); function h(B) { if (B < -24)
    throw new Error("future value not supported"); if (B < 0)
    switch (B) {
        case -1: return M1;
        case -2: return C1;
        case -3: return V1;
        case -4: return z1;
        case -5: return D1;
        case -6: return Y1;
        case -7: return K1;
        case -8: return Z1;
        case -9: return q1;
        case -10: return H1;
        case -11: return G1;
        case -12: return W1;
        case -13: return j1;
        case -14: return L1;
        case -15: return $1;
        case -16: return P1;
        case -17: return F1;
        case -24: return Q1;
        default: throw new Error("Illegal op_code: " + B);
    } if (B >= s.length)
    throw new Error("type index out of range"); return f[B]; } function w(B) { switch (B[0]) {
    case -19: {
        const y = h(B[1]);
        return J1(y);
    }
    case -18: {
        const y = h(B[1]);
        return ey(y);
    }
    case -20: {
        const y = {};
        for (const [A, v] of B[1]) {
            const E = `_${A}_`;
            y[E] = h(v);
        }
        const O = ty(y), M = O.tryAsTuple();
        return Array.isArray(M) ? X1(...M) : O;
    }
    case -21: {
        const y = {};
        for (const [O, M] of B[1]) {
            const A = `_${O}_`;
            y[A] = h(M);
        }
        return ny(y);
    }
    case -22: {
        const [y, O, M] = B[1];
        return iy(y.map(A => h(A)), O.map(A => h(A)), M);
    }
    case -23: {
        const y = {}, O = B[1];
        for (const [M, A] of O) {
            let v = h(A);
            if (v instanceof $r && (v = v.getType()), !(v instanceof qf))
                throw new Error("Illegal service definition: services can only contain functions");
            y[M] = v;
        }
        return oy(y);
    }
    default: throw new Error("Illegal op_code: " + B[0]);
} } s.forEach((B, y) => { if (B[0] === -22) {
    const O = w(B);
    f[y].fill(O);
} }), s.forEach((B, y) => { if (B[0] !== -22) {
    const O = w(B);
    f[y].fill(O);
} }); const b = a.map(B => h(B)), x = e.map((B, y) => B.decodeValue(n, b[y])); for (let B = e.length; B < b.length; B++)
    b[B].decodeValue(n, b[B]); if (n.byteLength > 0)
    throw new Error("decode: Left-over bytes"); return x; }
const F1 = new S1, P1 = new nu, U2 = new T1, C1 = new B1, M1 = new A1, $1 = new N1, z1 = new k1, V1 = new I1, j1 = new jf(32), L1 = new jf(64), q1 = new ui(8), H1 = new ui(16), G1 = new ui(32), W1 = new ui(64), D1 = new Ir(8), Y1 = new Ir(16), K1 = new Ir(32), Z1 = new Ir(64), Q1 = new R1;
function X1(...e) { return new ku(e); }
function J1(e) { return new Nu(e); }
function ey(e) { return new eo(e); }
function ty(e) { return new ps(e); }
function ny(e) { return new Iu(e); }
function ry() { return new $r; }
function iy(e, t, n = []) { return new qf(e, t, n); }
function oy(e) { return new O1(e); }
const F2 = Object.freeze(Object.defineProperty({ __proto__: null, Bool: C1, BoolClass: B1, ConstructType: Mr, Empty: F1, EmptyClass: S1, FixedIntClass: ui, FixedNatClass: Ir, Float32: j1, Float64: L1, FloatClass: jf, Func: iy, FuncClass: qf, Int: z1, Int16: H1, Int32: G1, Int64: W1, Int8: q1, IntClass: k1, Nat: V1, Nat16: Y1, Nat32: K1, Nat64: Z1, Nat8: D1, NatClass: I1, Null: M1, NullClass: A1, Opt: ey, OptClass: eo, PrimitiveType: un, Principal: Q1, PrincipalClass: R1, Rec: ry, RecClass: $r, Record: ty, RecordClass: ps, Reserved: P1, ReservedClass: nu, Service: oy, ServiceClass: O1, Text: $1, TextClass: N1, Tuple: X1, TupleClass: ku, Type: Au, Unknown: U2, UnknownClass: T1, Variant: ny, VariantClass: Iu, Vec: J1, VecClass: Nu, Visitor: O2, decode: U1, encode: Ac }, Symbol.toStringTag, { value: "Module" }));
var sy = {}, ys = {}; /*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
(function (e) { var t = ds, n = hs, r = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null; e.Buffer = a, e.SlowBuffer = v, e.INSPECT_MAX_BYTES = 50; var i = 2147483647; e.kMaxLength = i, a.TYPED_ARRAY_SUPPORT = o(), !a.TYPED_ARRAY_SUPPORT && typeof console < "u" && typeof console.error == "function" && console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."); function o() { try {
    var p = new Uint8Array(1), u = { foo: function () { return 42; } };
    return Object.setPrototypeOf(u, Uint8Array.prototype), Object.setPrototypeOf(p, u), p.foo() === 42;
}
catch {
    return !1;
} } Object.defineProperty(a.prototype, "parent", { enumerable: !0, get: function () { if (a.isBuffer(this))
        return this.buffer; } }), Object.defineProperty(a.prototype, "offset", { enumerable: !0, get: function () { if (a.isBuffer(this))
        return this.byteOffset; } }); function s(p) { if (p > i)
    throw new RangeError('The value "' + p + '" is invalid for option "size"'); var u = new Uint8Array(p); return Object.setPrototypeOf(u, a.prototype), u; } function a(p, u, l) { if (typeof p == "number") {
    if (typeof u == "string")
        throw new TypeError('The "string" argument must be of type string. Received type number');
    return b(p);
} return f(p, u, l); } a.poolSize = 8192; function f(p, u, l) { if (typeof p == "string")
    return x(p, u); if (ArrayBuffer.isView(p))
    return y(p); if (p == null)
    throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof p); if (q(p, ArrayBuffer) || p && q(p.buffer, ArrayBuffer) || typeof SharedArrayBuffer < "u" && (q(p, SharedArrayBuffer) || p && q(p.buffer, SharedArrayBuffer)))
    return O(p, u, l); if (typeof p == "number")
    throw new TypeError('The "value" argument must not be of type number. Received type number'); var g = p.valueOf && p.valueOf(); if (g != null && g !== p)
    return a.from(g, u, l); var T = M(p); if (T)
    return T; if (typeof Symbol < "u" && Symbol.toPrimitive != null && typeof p[Symbol.toPrimitive] == "function")
    return a.from(p[Symbol.toPrimitive]("string"), u, l); throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof p); } a.from = function (p, u, l) { return f(p, u, l); }, Object.setPrototypeOf(a.prototype, Uint8Array.prototype), Object.setPrototypeOf(a, Uint8Array); function h(p) { if (typeof p != "number")
    throw new TypeError('"size" argument must be of type number'); if (p < 0)
    throw new RangeError('The value "' + p + '" is invalid for option "size"'); } function w(p, u, l) { return h(p), p <= 0 ? s(p) : u !== void 0 ? typeof l == "string" ? s(p).fill(u, l) : s(p).fill(u) : s(p); } a.alloc = function (p, u, l) { return w(p, u, l); }; function b(p) { return h(p), s(p < 0 ? 0 : A(p) | 0); } a.allocUnsafe = function (p) { return b(p); }, a.allocUnsafeSlow = function (p) { return b(p); }; function x(p, u) { if ((typeof u != "string" || u === "") && (u = "utf8"), !a.isEncoding(u))
    throw new TypeError("Unknown encoding: " + u); var l = E(p, u) | 0, g = s(l), T = g.write(p, u); return T !== l && (g = g.slice(0, T)), g; } function B(p) { for (var u = p.length < 0 ? 0 : A(p.length) | 0, l = s(u), g = 0; g < u; g += 1)
    l[g] = p[g] & 255; return l; } function y(p) { if (q(p, Uint8Array)) {
    var u = new Uint8Array(p);
    return O(u.buffer, u.byteOffset, u.byteLength);
} return B(p); } function O(p, u, l) { if (u < 0 || p.byteLength < u)
    throw new RangeError('"offset" is outside of buffer bounds'); if (p.byteLength < u + (l || 0))
    throw new RangeError('"length" is outside of buffer bounds'); var g; return u === void 0 && l === void 0 ? g = new Uint8Array(p) : l === void 0 ? g = new Uint8Array(p, u) : g = new Uint8Array(p, u, l), Object.setPrototypeOf(g, a.prototype), g; } function M(p) { if (a.isBuffer(p)) {
    var u = A(p.length) | 0, l = s(u);
    return l.length === 0 || p.copy(l, 0, 0, u), l;
} if (p.length !== void 0)
    return typeof p.length != "number" || C(p.length) ? s(0) : B(p); if (p.type === "Buffer" && Array.isArray(p.data))
    return B(p.data); } function A(p) { if (p >= i)
    throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + i.toString(16) + " bytes"); return p | 0; } function v(p) { return +p != p && (p = 0), a.alloc(+p); } a.isBuffer = function (u) { return u != null && u._isBuffer === !0 && u !== a.prototype; }, a.compare = function (u, l) { if (q(u, Uint8Array) && (u = a.from(u, u.offset, u.byteLength)), q(l, Uint8Array) && (l = a.from(l, l.offset, l.byteLength)), !a.isBuffer(u) || !a.isBuffer(l))
    throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'); if (u === l)
    return 0; for (var g = u.length, T = l.length, F = 0, Y = Math.min(g, T); F < Y; ++F)
    if (u[F] !== l[F]) {
        g = u[F], T = l[F];
        break;
    } return g < T ? -1 : T < g ? 1 : 0; }, a.isEncoding = function (u) { switch (String(u).toLowerCase()) {
    case "hex":
    case "utf8":
    case "utf-8":
    case "ascii":
    case "latin1":
    case "binary":
    case "base64":
    case "ucs2":
    case "ucs-2":
    case "utf16le":
    case "utf-16le": return !0;
    default: return !1;
} }, a.concat = function (u, l) { if (!Array.isArray(u))
    throw new TypeError('"list" argument must be an Array of Buffers'); if (u.length === 0)
    return a.alloc(0); var g; if (l === void 0)
    for (l = 0, g = 0; g < u.length; ++g)
        l += u[g].length; var T = a.allocUnsafe(l), F = 0; for (g = 0; g < u.length; ++g) {
    var Y = u[g];
    if (q(Y, Uint8Array))
        F + Y.length > T.length ? a.from(Y).copy(T, F) : Uint8Array.prototype.set.call(T, Y, F);
    else if (a.isBuffer(Y))
        Y.copy(T, F);
    else
        throw new TypeError('"list" argument must be an Array of Buffers');
    F += Y.length;
} return T; }; function E(p, u) { if (a.isBuffer(p))
    return p.length; if (ArrayBuffer.isView(p) || q(p, ArrayBuffer))
    return p.byteLength; if (typeof p != "string")
    throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof p); var l = p.length, g = arguments.length > 2 && arguments[2] === !0; if (!g && l === 0)
    return 0; for (var T = !1;;)
    switch (u) {
        case "ascii":
        case "latin1":
        case "binary": return l;
        case "utf8":
        case "utf-8": return ie(p).length;
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le": return l * 2;
        case "hex": return l >>> 1;
        case "base64": return N(p).length;
        default:
            if (T)
                return g ? -1 : ie(p).length;
            u = ("" + u).toLowerCase(), T = !0;
    } } a.byteLength = E; function z(p, u, l) { var g = !1; if ((u === void 0 || u < 0) && (u = 0), u > this.length || ((l === void 0 || l > this.length) && (l = this.length), l <= 0) || (l >>>= 0, u >>>= 0, l <= u))
    return ""; for (p || (p = "utf8");;)
    switch (p) {
        case "hex": return ee(this, u, l);
        case "utf8":
        case "utf-8": return $(this, u, l);
        case "ascii": return D(this, u, l);
        case "latin1":
        case "binary": return H(this, u, l);
        case "base64": return U(this, u, l);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le": return oe(this, u, l);
        default:
            if (g)
                throw new TypeError("Unknown encoding: " + p);
            p = (p + "").toLowerCase(), g = !0;
    } } a.prototype._isBuffer = !0; function I(p, u, l) { var g = p[u]; p[u] = p[l], p[l] = g; } a.prototype.swap16 = function () { var u = this.length; if (u % 2 !== 0)
    throw new RangeError("Buffer size must be a multiple of 16-bits"); for (var l = 0; l < u; l += 2)
    I(this, l, l + 1); return this; }, a.prototype.swap32 = function () { var u = this.length; if (u % 4 !== 0)
    throw new RangeError("Buffer size must be a multiple of 32-bits"); for (var l = 0; l < u; l += 4)
    I(this, l, l + 3), I(this, l + 1, l + 2); return this; }, a.prototype.swap64 = function () { var u = this.length; if (u % 8 !== 0)
    throw new RangeError("Buffer size must be a multiple of 64-bits"); for (var l = 0; l < u; l += 8)
    I(this, l, l + 7), I(this, l + 1, l + 6), I(this, l + 2, l + 5), I(this, l + 3, l + 4); return this; }, a.prototype.toString = function () { var u = this.length; return u === 0 ? "" : arguments.length === 0 ? $(this, 0, u) : z.apply(this, arguments); }, a.prototype.toLocaleString = a.prototype.toString, a.prototype.equals = function (u) { if (!a.isBuffer(u))
    throw new TypeError("Argument must be a Buffer"); return this === u ? !0 : a.compare(this, u) === 0; }, a.prototype.inspect = function () { var u = "", l = e.INSPECT_MAX_BYTES; return u = this.toString("hex", 0, l).replace(/(.{2})/g, "$1 ").trim(), this.length > l && (u += " ... "), "<Buffer " + u + ">"; }, r && (a.prototype[r] = a.prototype.inspect), a.prototype.compare = function (u, l, g, T, F) { if (q(u, Uint8Array) && (u = a.from(u, u.offset, u.byteLength)), !a.isBuffer(u))
    throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof u); if (l === void 0 && (l = 0), g === void 0 && (g = u ? u.length : 0), T === void 0 && (T = 0), F === void 0 && (F = this.length), l < 0 || g > u.length || T < 0 || F > this.length)
    throw new RangeError("out of range index"); if (T >= F && l >= g)
    return 0; if (T >= F)
    return -1; if (l >= g)
    return 1; if (l >>>= 0, g >>>= 0, T >>>= 0, F >>>= 0, this === u)
    return 0; for (var Y = F - T, ae = g - l, me = Math.min(Y, ae), we = this.slice(T, F), be = u.slice(l, g), m = 0; m < me; ++m)
    if (we[m] !== be[m]) {
        Y = we[m], ae = be[m];
        break;
    } return Y < ae ? -1 : ae < Y ? 1 : 0; }; function L(p, u, l, g, T) { if (p.length === 0)
    return -1; if (typeof l == "string" ? (g = l, l = 0) : l > 2147483647 ? l = 2147483647 : l < -2147483648 && (l = -2147483648), l = +l, C(l) && (l = T ? 0 : p.length - 1), l < 0 && (l = p.length + l), l >= p.length) {
    if (T)
        return -1;
    l = p.length - 1;
}
else if (l < 0)
    if (T)
        l = 0;
    else
        return -1; if (typeof u == "string" && (u = a.from(u, g)), a.isBuffer(u))
    return u.length === 0 ? -1 : V(p, u, l, g, T); if (typeof u == "number")
    return u = u & 255, typeof Uint8Array.prototype.indexOf == "function" ? T ? Uint8Array.prototype.indexOf.call(p, u, l) : Uint8Array.prototype.lastIndexOf.call(p, u, l) : V(p, [u], l, g, T); throw new TypeError("val must be string, number or Buffer"); } function V(p, u, l, g, T) { var F = 1, Y = p.length, ae = u.length; if (g !== void 0 && (g = String(g).toLowerCase(), g === "ucs2" || g === "ucs-2" || g === "utf16le" || g === "utf-16le")) {
    if (p.length < 2 || u.length < 2)
        return -1;
    F = 2, Y /= 2, ae /= 2, l /= 2;
} function me(d, k) { return F === 1 ? d[k] : d.readUInt16BE(k * F); } var we; if (T) {
    var be = -1;
    for (we = l; we < Y; we++)
        if (me(p, we) === me(u, be === -1 ? 0 : we - be)) {
            if (be === -1 && (be = we), we - be + 1 === ae)
                return be * F;
        }
        else
            be !== -1 && (we -= we - be), be = -1;
}
else
    for (l + ae > Y && (l = Y - ae), we = l; we >= 0; we--) {
        for (var m = !0, c = 0; c < ae; c++)
            if (me(p, we + c) !== me(u, c)) {
                m = !1;
                break;
            }
        if (m)
            return we;
    } return -1; } a.prototype.includes = function (u, l, g) { return this.indexOf(u, l, g) !== -1; }, a.prototype.indexOf = function (u, l, g) { return L(this, u, l, g, !0); }, a.prototype.lastIndexOf = function (u, l, g) { return L(this, u, l, g, !1); }; function W(p, u, l, g) { l = Number(l) || 0; var T = p.length - l; g ? (g = Number(g), g > T && (g = T)) : g = T; var F = u.length; g > F / 2 && (g = F / 2); for (var Y = 0; Y < g; ++Y) {
    var ae = parseInt(u.substr(Y * 2, 2), 16);
    if (C(ae))
        return Y;
    p[l + Y] = ae;
} return Y; } function te(p, u, l, g) { return R(ie(u, p.length - l), p, l, g); } function K(p, u, l, g) { return R(fe(u), p, l, g); } function de(p, u, l, g) { return R(N(u), p, l, g); } function he(p, u, l, g) { return R(S(u, p.length - l), p, l, g); } a.prototype.write = function (u, l, g, T) { if (l === void 0)
    T = "utf8", g = this.length, l = 0;
else if (g === void 0 && typeof l == "string")
    T = l, g = this.length, l = 0;
else if (isFinite(l))
    l = l >>> 0, isFinite(g) ? (g = g >>> 0, T === void 0 && (T = "utf8")) : (T = g, g = void 0);
else
    throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported"); var F = this.length - l; if ((g === void 0 || g > F) && (g = F), u.length > 0 && (g < 0 || l < 0) || l > this.length)
    throw new RangeError("Attempt to write outside buffer bounds"); T || (T = "utf8"); for (var Y = !1;;)
    switch (T) {
        case "hex": return W(this, u, l, g);
        case "utf8":
        case "utf-8": return te(this, u, l, g);
        case "ascii":
        case "latin1":
        case "binary": return K(this, u, l, g);
        case "base64": return de(this, u, l, g);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le": return he(this, u, l, g);
        default:
            if (Y)
                throw new TypeError("Unknown encoding: " + T);
            T = ("" + T).toLowerCase(), Y = !0;
    } }, a.prototype.toJSON = function () { return { type: "Buffer", data: Array.prototype.slice.call(this._arr || this, 0) }; }; function U(p, u, l) { return u === 0 && l === p.length ? t.fromByteArray(p) : t.fromByteArray(p.slice(u, l)); } function $(p, u, l) { l = Math.min(p.length, l); for (var g = [], T = u; T < l;) {
    var F = p[T], Y = null, ae = F > 239 ? 4 : F > 223 ? 3 : F > 191 ? 2 : 1;
    if (T + ae <= l) {
        var me, we, be, m;
        switch (ae) {
            case 1:
                F < 128 && (Y = F);
                break;
            case 2:
                me = p[T + 1], (me & 192) === 128 && (m = (F & 31) << 6 | me & 63, m > 127 && (Y = m));
                break;
            case 3:
                me = p[T + 1], we = p[T + 2], (me & 192) === 128 && (we & 192) === 128 && (m = (F & 15) << 12 | (me & 63) << 6 | we & 63, m > 2047 && (m < 55296 || m > 57343) && (Y = m));
                break;
            case 4: me = p[T + 1], we = p[T + 2], be = p[T + 3], (me & 192) === 128 && (we & 192) === 128 && (be & 192) === 128 && (m = (F & 15) << 18 | (me & 63) << 12 | (we & 63) << 6 | be & 63, m > 65535 && m < 1114112 && (Y = m));
        }
    }
    Y === null ? (Y = 65533, ae = 1) : Y > 65535 && (Y -= 65536, g.push(Y >>> 10 & 1023 | 55296), Y = 56320 | Y & 1023), g.push(Y), T += ae;
} return Z(g); } var X = 4096; function Z(p) { var u = p.length; if (u <= X)
    return String.fromCharCode.apply(String, p); for (var l = "", g = 0; g < u;)
    l += String.fromCharCode.apply(String, p.slice(g, g += X)); return l; } function D(p, u, l) { var g = ""; l = Math.min(p.length, l); for (var T = u; T < l; ++T)
    g += String.fromCharCode(p[T] & 127); return g; } function H(p, u, l) { var g = ""; l = Math.min(p.length, l); for (var T = u; T < l; ++T)
    g += String.fromCharCode(p[T]); return g; } function ee(p, u, l) { var g = p.length; (!u || u < 0) && (u = 0), (!l || l < 0 || l > g) && (l = g); for (var T = "", F = u; F < l; ++F)
    T += G[p[F]]; return T; } function oe(p, u, l) { for (var g = p.slice(u, l), T = "", F = 0; F < g.length - 1; F += 2)
    T += String.fromCharCode(g[F] + g[F + 1] * 256); return T; } a.prototype.slice = function (u, l) { var g = this.length; u = ~~u, l = l === void 0 ? g : ~~l, u < 0 ? (u += g, u < 0 && (u = 0)) : u > g && (u = g), l < 0 ? (l += g, l < 0 && (l = 0)) : l > g && (l = g), l < u && (l = u); var T = this.subarray(u, l); return Object.setPrototypeOf(T, a.prototype), T; }; function re(p, u, l) { if (p % 1 !== 0 || p < 0)
    throw new RangeError("offset is not uint"); if (p + u > l)
    throw new RangeError("Trying to access beyond buffer length"); } a.prototype.readUintLE = a.prototype.readUIntLE = function (u, l, g) { u = u >>> 0, l = l >>> 0, g || re(u, l, this.length); for (var T = this[u], F = 1, Y = 0; ++Y < l && (F *= 256);)
    T += this[u + Y] * F; return T; }, a.prototype.readUintBE = a.prototype.readUIntBE = function (u, l, g) { u = u >>> 0, l = l >>> 0, g || re(u, l, this.length); for (var T = this[u + --l], F = 1; l > 0 && (F *= 256);)
    T += this[u + --l] * F; return T; }, a.prototype.readUint8 = a.prototype.readUInt8 = function (u, l) { return u = u >>> 0, l || re(u, 1, this.length), this[u]; }, a.prototype.readUint16LE = a.prototype.readUInt16LE = function (u, l) { return u = u >>> 0, l || re(u, 2, this.length), this[u] | this[u + 1] << 8; }, a.prototype.readUint16BE = a.prototype.readUInt16BE = function (u, l) { return u = u >>> 0, l || re(u, 2, this.length), this[u] << 8 | this[u + 1]; }, a.prototype.readUint32LE = a.prototype.readUInt32LE = function (u, l) { return u = u >>> 0, l || re(u, 4, this.length), (this[u] | this[u + 1] << 8 | this[u + 2] << 16) + this[u + 3] * 16777216; }, a.prototype.readUint32BE = a.prototype.readUInt32BE = function (u, l) { return u = u >>> 0, l || re(u, 4, this.length), this[u] * 16777216 + (this[u + 1] << 16 | this[u + 2] << 8 | this[u + 3]); }, a.prototype.readIntLE = function (u, l, g) { u = u >>> 0, l = l >>> 0, g || re(u, l, this.length); for (var T = this[u], F = 1, Y = 0; ++Y < l && (F *= 256);)
    T += this[u + Y] * F; return F *= 128, T >= F && (T -= Math.pow(2, 8 * l)), T; }, a.prototype.readIntBE = function (u, l, g) { u = u >>> 0, l = l >>> 0, g || re(u, l, this.length); for (var T = l, F = 1, Y = this[u + --T]; T > 0 && (F *= 256);)
    Y += this[u + --T] * F; return F *= 128, Y >= F && (Y -= Math.pow(2, 8 * l)), Y; }, a.prototype.readInt8 = function (u, l) { return u = u >>> 0, l || re(u, 1, this.length), this[u] & 128 ? (255 - this[u] + 1) * -1 : this[u]; }, a.prototype.readInt16LE = function (u, l) { u = u >>> 0, l || re(u, 2, this.length); var g = this[u] | this[u + 1] << 8; return g & 32768 ? g | 4294901760 : g; }, a.prototype.readInt16BE = function (u, l) { u = u >>> 0, l || re(u, 2, this.length); var g = this[u + 1] | this[u] << 8; return g & 32768 ? g | 4294901760 : g; }, a.prototype.readInt32LE = function (u, l) { return u = u >>> 0, l || re(u, 4, this.length), this[u] | this[u + 1] << 8 | this[u + 2] << 16 | this[u + 3] << 24; }, a.prototype.readInt32BE = function (u, l) { return u = u >>> 0, l || re(u, 4, this.length), this[u] << 24 | this[u + 1] << 16 | this[u + 2] << 8 | this[u + 3]; }, a.prototype.readFloatLE = function (u, l) { return u = u >>> 0, l || re(u, 4, this.length), n.read(this, u, !0, 23, 4); }, a.prototype.readFloatBE = function (u, l) { return u = u >>> 0, l || re(u, 4, this.length), n.read(this, u, !1, 23, 4); }, a.prototype.readDoubleLE = function (u, l) { return u = u >>> 0, l || re(u, 8, this.length), n.read(this, u, !0, 52, 8); }, a.prototype.readDoubleBE = function (u, l) { return u = u >>> 0, l || re(u, 8, this.length), n.read(this, u, !1, 52, 8); }; function ue(p, u, l, g, T, F) { if (!a.isBuffer(p))
    throw new TypeError('"buffer" argument must be a Buffer instance'); if (u > T || u < F)
    throw new RangeError('"value" argument is out of bounds'); if (l + g > p.length)
    throw new RangeError("Index out of range"); } a.prototype.writeUintLE = a.prototype.writeUIntLE = function (u, l, g, T) { if (u = +u, l = l >>> 0, g = g >>> 0, !T) {
    var F = Math.pow(2, 8 * g) - 1;
    ue(this, u, l, g, F, 0);
} var Y = 1, ae = 0; for (this[l] = u & 255; ++ae < g && (Y *= 256);)
    this[l + ae] = u / Y & 255; return l + g; }, a.prototype.writeUintBE = a.prototype.writeUIntBE = function (u, l, g, T) { if (u = +u, l = l >>> 0, g = g >>> 0, !T) {
    var F = Math.pow(2, 8 * g) - 1;
    ue(this, u, l, g, F, 0);
} var Y = g - 1, ae = 1; for (this[l + Y] = u & 255; --Y >= 0 && (ae *= 256);)
    this[l + Y] = u / ae & 255; return l + g; }, a.prototype.writeUint8 = a.prototype.writeUInt8 = function (u, l, g) { return u = +u, l = l >>> 0, g || ue(this, u, l, 1, 255, 0), this[l] = u & 255, l + 1; }, a.prototype.writeUint16LE = a.prototype.writeUInt16LE = function (u, l, g) { return u = +u, l = l >>> 0, g || ue(this, u, l, 2, 65535, 0), this[l] = u & 255, this[l + 1] = u >>> 8, l + 2; }, a.prototype.writeUint16BE = a.prototype.writeUInt16BE = function (u, l, g) { return u = +u, l = l >>> 0, g || ue(this, u, l, 2, 65535, 0), this[l] = u >>> 8, this[l + 1] = u & 255, l + 2; }, a.prototype.writeUint32LE = a.prototype.writeUInt32LE = function (u, l, g) { return u = +u, l = l >>> 0, g || ue(this, u, l, 4, 4294967295, 0), this[l + 3] = u >>> 24, this[l + 2] = u >>> 16, this[l + 1] = u >>> 8, this[l] = u & 255, l + 4; }, a.prototype.writeUint32BE = a.prototype.writeUInt32BE = function (u, l, g) { return u = +u, l = l >>> 0, g || ue(this, u, l, 4, 4294967295, 0), this[l] = u >>> 24, this[l + 1] = u >>> 16, this[l + 2] = u >>> 8, this[l + 3] = u & 255, l + 4; }, a.prototype.writeIntLE = function (u, l, g, T) { if (u = +u, l = l >>> 0, !T) {
    var F = Math.pow(2, 8 * g - 1);
    ue(this, u, l, g, F - 1, -F);
} var Y = 0, ae = 1, me = 0; for (this[l] = u & 255; ++Y < g && (ae *= 256);)
    u < 0 && me === 0 && this[l + Y - 1] !== 0 && (me = 1), this[l + Y] = (u / ae >> 0) - me & 255; return l + g; }, a.prototype.writeIntBE = function (u, l, g, T) { if (u = +u, l = l >>> 0, !T) {
    var F = Math.pow(2, 8 * g - 1);
    ue(this, u, l, g, F - 1, -F);
} var Y = g - 1, ae = 1, me = 0; for (this[l + Y] = u & 255; --Y >= 0 && (ae *= 256);)
    u < 0 && me === 0 && this[l + Y + 1] !== 0 && (me = 1), this[l + Y] = (u / ae >> 0) - me & 255; return l + g; }, a.prototype.writeInt8 = function (u, l, g) { return u = +u, l = l >>> 0, g || ue(this, u, l, 1, 127, -128), u < 0 && (u = 255 + u + 1), this[l] = u & 255, l + 1; }, a.prototype.writeInt16LE = function (u, l, g) { return u = +u, l = l >>> 0, g || ue(this, u, l, 2, 32767, -32768), this[l] = u & 255, this[l + 1] = u >>> 8, l + 2; }, a.prototype.writeInt16BE = function (u, l, g) { return u = +u, l = l >>> 0, g || ue(this, u, l, 2, 32767, -32768), this[l] = u >>> 8, this[l + 1] = u & 255, l + 2; }, a.prototype.writeInt32LE = function (u, l, g) { return u = +u, l = l >>> 0, g || ue(this, u, l, 4, 2147483647, -2147483648), this[l] = u & 255, this[l + 1] = u >>> 8, this[l + 2] = u >>> 16, this[l + 3] = u >>> 24, l + 4; }, a.prototype.writeInt32BE = function (u, l, g) { return u = +u, l = l >>> 0, g || ue(this, u, l, 4, 2147483647, -2147483648), u < 0 && (u = 4294967295 + u + 1), this[l] = u >>> 24, this[l + 1] = u >>> 16, this[l + 2] = u >>> 8, this[l + 3] = u & 255, l + 4; }; function ne(p, u, l, g, T, F) { if (l + g > p.length)
    throw new RangeError("Index out of range"); if (l < 0)
    throw new RangeError("Index out of range"); } function _(p, u, l, g, T) { return u = +u, l = l >>> 0, T || ne(p, u, l, 4), n.write(p, u, l, g, 23, 4), l + 4; } a.prototype.writeFloatLE = function (u, l, g) { return _(this, u, l, !0, g); }, a.prototype.writeFloatBE = function (u, l, g) { return _(this, u, l, !1, g); }; function se(p, u, l, g, T) { return u = +u, l = l >>> 0, T || ne(p, u, l, 8), n.write(p, u, l, g, 52, 8), l + 8; } a.prototype.writeDoubleLE = function (u, l, g) { return se(this, u, l, !0, g); }, a.prototype.writeDoubleBE = function (u, l, g) { return se(this, u, l, !1, g); }, a.prototype.copy = function (u, l, g, T) { if (!a.isBuffer(u))
    throw new TypeError("argument should be a Buffer"); if (g || (g = 0), !T && T !== 0 && (T = this.length), l >= u.length && (l = u.length), l || (l = 0), T > 0 && T < g && (T = g), T === g || u.length === 0 || this.length === 0)
    return 0; if (l < 0)
    throw new RangeError("targetStart out of bounds"); if (g < 0 || g >= this.length)
    throw new RangeError("Index out of range"); if (T < 0)
    throw new RangeError("sourceEnd out of bounds"); T > this.length && (T = this.length), u.length - l < T - g && (T = u.length - l + g); var F = T - g; return this === u && typeof Uint8Array.prototype.copyWithin == "function" ? this.copyWithin(l, g, T) : Uint8Array.prototype.set.call(u, this.subarray(g, T), l), F; }, a.prototype.fill = function (u, l, g, T) { if (typeof u == "string") {
    if (typeof l == "string" ? (T = l, l = 0, g = this.length) : typeof g == "string" && (T = g, g = this.length), T !== void 0 && typeof T != "string")
        throw new TypeError("encoding must be a string");
    if (typeof T == "string" && !a.isEncoding(T))
        throw new TypeError("Unknown encoding: " + T);
    if (u.length === 1) {
        var F = u.charCodeAt(0);
        (T === "utf8" && F < 128 || T === "latin1") && (u = F);
    }
}
else
    typeof u == "number" ? u = u & 255 : typeof u == "boolean" && (u = Number(u)); if (l < 0 || this.length < l || this.length < g)
    throw new RangeError("Out of range index"); if (g <= l)
    return this; l = l >>> 0, g = g === void 0 ? this.length : g >>> 0, u || (u = 0); var Y; if (typeof u == "number")
    for (Y = l; Y < g; ++Y)
        this[Y] = u;
else {
    var ae = a.isBuffer(u) ? u : a.from(u, T), me = ae.length;
    if (me === 0)
        throw new TypeError('The value "' + u + '" is invalid for argument "value"');
    for (Y = 0; Y < g - l; ++Y)
        this[Y + l] = ae[Y % me];
} return this; }; var ce = /[^+/0-9A-Za-z-_]/g; function ye(p) { if (p = p.split("=")[0], p = p.trim().replace(ce, ""), p.length < 2)
    return ""; for (; p.length % 4 !== 0;)
    p = p + "="; return p; } function ie(p, u) { u = u || 1 / 0; for (var l, g = p.length, T = null, F = [], Y = 0; Y < g; ++Y) {
    if (l = p.charCodeAt(Y), l > 55295 && l < 57344) {
        if (!T) {
            if (l > 56319) {
                (u -= 3) > -1 && F.push(239, 191, 189);
                continue;
            }
            else if (Y + 1 === g) {
                (u -= 3) > -1 && F.push(239, 191, 189);
                continue;
            }
            T = l;
            continue;
        }
        if (l < 56320) {
            (u -= 3) > -1 && F.push(239, 191, 189), T = l;
            continue;
        }
        l = (T - 55296 << 10 | l - 56320) + 65536;
    }
    else
        T && (u -= 3) > -1 && F.push(239, 191, 189);
    if (T = null, l < 128) {
        if ((u -= 1) < 0)
            break;
        F.push(l);
    }
    else if (l < 2048) {
        if ((u -= 2) < 0)
            break;
        F.push(l >> 6 | 192, l & 63 | 128);
    }
    else if (l < 65536) {
        if ((u -= 3) < 0)
            break;
        F.push(l >> 12 | 224, l >> 6 & 63 | 128, l & 63 | 128);
    }
    else if (l < 1114112) {
        if ((u -= 4) < 0)
            break;
        F.push(l >> 18 | 240, l >> 12 & 63 | 128, l >> 6 & 63 | 128, l & 63 | 128);
    }
    else
        throw new Error("Invalid code point");
} return F; } function fe(p) { for (var u = [], l = 0; l < p.length; ++l)
    u.push(p.charCodeAt(l) & 255); return u; } function S(p, u) { for (var l, g, T, F = [], Y = 0; Y < p.length && !((u -= 2) < 0); ++Y)
    l = p.charCodeAt(Y), g = l >> 8, T = l % 256, F.push(T), F.push(g); return F; } function N(p) { return t.toByteArray(ye(p)); } function R(p, u, l, g) { for (var T = 0; T < g && !(T + l >= u.length || T >= p.length); ++T)
    u[T + l] = p[T]; return T; } function q(p, u) { return p instanceof u || p != null && p.constructor != null && p.constructor.name != null && p.constructor.name === u.name; } function C(p) { return p !== p; } var G = function () { for (var p = "0123456789abcdef", u = new Array(256), l = 0; l < 16; ++l)
    for (var g = l * 16, T = 0; T < 16; ++T)
        u[g + T] = p[l] + p[T]; return u; }(); })(ys);
var ay = { exports: {} };
(function (e) { (function (t) { var n, r = /^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i, i = Math.ceil, o = Math.floor, s = "[BigNumber Error] ", a = s + "Number primitive has more than 15 significant digits: ", f = 1e14, h = 14, w = 9007199254740991, b = [1, 10, 100, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8, 1e9, 1e10, 1e11, 1e12, 1e13], x = 1e7, B = 1e9; function y(L) { var V, W, te, K = _.prototype = { constructor: _, toString: null, valueOf: null }, de = new _(1), he = 20, U = 4, $ = -7, X = 21, Z = -1e7, D = 1e7, H = !1, ee = 1, oe = 0, re = { prefix: "", groupSize: 3, secondaryGroupSize: 0, groupSeparator: ",", decimalSeparator: ".", fractionGroupSize: 0, fractionGroupSeparator: " ", suffix: "" }, ue = "0123456789abcdefghijklmnopqrstuvwxyz", ne = !0; function _(S, N) { var R, q, C, G, p, u, l, g, T = this; if (!(T instanceof _))
    return new _(S, N); if (N == null) {
    if (S && S._isBigNumber === !0) {
        T.s = S.s, !S.c || S.e > D ? T.c = T.e = null : S.e < Z ? T.c = [T.e = 0] : (T.e = S.e, T.c = S.c.slice());
        return;
    }
    if ((u = typeof S == "number") && S * 0 == 0) {
        if (T.s = 1 / S < 0 ? (S = -S, -1) : 1, S === ~~S) {
            for (G = 0, p = S; p >= 10; p /= 10, G++)
                ;
            G > D ? T.c = T.e = null : (T.e = G, T.c = [S]);
            return;
        }
        g = String(S);
    }
    else {
        if (!r.test(g = String(S)))
            return te(T, g, u);
        T.s = g.charCodeAt(0) == 45 ? (g = g.slice(1), -1) : 1;
    }
    (G = g.indexOf(".")) > -1 && (g = g.replace(".", "")), (p = g.search(/e/i)) > 0 ? (G < 0 && (G = p), G += +g.slice(p + 1), g = g.substring(0, p)) : G < 0 && (G = g.length);
}
else {
    if (v(N, 2, ue.length, "Base"), N == 10 && ne)
        return T = new _(S), ie(T, he + T.e + 1, U);
    if (g = String(S), u = typeof S == "number") {
        if (S * 0 != 0)
            return te(T, g, u, N);
        if (T.s = 1 / S < 0 ? (g = g.slice(1), -1) : 1, _.DEBUG && g.replace(/^0\.0*|\./, "").length > 15)
            throw Error(a + S);
    }
    else
        T.s = g.charCodeAt(0) === 45 ? (g = g.slice(1), -1) : 1;
    for (R = ue.slice(0, N), G = p = 0, l = g.length; p < l; p++)
        if (R.indexOf(q = g.charAt(p)) < 0) {
            if (q == ".") {
                if (p > G) {
                    G = l;
                    continue;
                }
            }
            else if (!C && (g == g.toUpperCase() && (g = g.toLowerCase()) || g == g.toLowerCase() && (g = g.toUpperCase()))) {
                C = !0, p = -1, G = 0;
                continue;
            }
            return te(T, String(S), u, N);
        }
    u = !1, g = W(g, N, 10, T.s), (G = g.indexOf(".")) > -1 ? g = g.replace(".", "") : G = g.length;
} for (p = 0; g.charCodeAt(p) === 48; p++)
    ; for (l = g.length; g.charCodeAt(--l) === 48;)
    ; if (g = g.slice(p, ++l)) {
    if (l -= p, u && _.DEBUG && l > 15 && (S > w || S !== o(S)))
        throw Error(a + T.s * S);
    if ((G = G - p - 1) > D)
        T.c = T.e = null;
    else if (G < Z)
        T.c = [T.e = 0];
    else {
        if (T.e = G, T.c = [], p = (G + 1) % h, G < 0 && (p += h), p < l) {
            for (p && T.c.push(+g.slice(0, p)), l -= h; p < l;)
                T.c.push(+g.slice(p, p += h));
            p = h - (g = g.slice(p)).length;
        }
        else
            p -= l;
        for (; p--; g += "0")
            ;
        T.c.push(+g);
    }
}
else
    T.c = [T.e = 0]; } _.clone = y, _.ROUND_UP = 0, _.ROUND_DOWN = 1, _.ROUND_CEIL = 2, _.ROUND_FLOOR = 3, _.ROUND_HALF_UP = 4, _.ROUND_HALF_DOWN = 5, _.ROUND_HALF_EVEN = 6, _.ROUND_HALF_CEIL = 7, _.ROUND_HALF_FLOOR = 8, _.EUCLID = 9, _.config = _.set = function (S) { var N, R; if (S != null)
    if (typeof S == "object") {
        if (S.hasOwnProperty(N = "DECIMAL_PLACES") && (R = S[N], v(R, 0, B, N), he = R), S.hasOwnProperty(N = "ROUNDING_MODE") && (R = S[N], v(R, 0, 8, N), U = R), S.hasOwnProperty(N = "EXPONENTIAL_AT") && (R = S[N], R && R.pop ? (v(R[0], -B, 0, N), v(R[1], 0, B, N), $ = R[0], X = R[1]) : (v(R, -B, B, N), $ = -(X = R < 0 ? -R : R))), S.hasOwnProperty(N = "RANGE"))
            if (R = S[N], R && R.pop)
                v(R[0], -B, -1, N), v(R[1], 1, B, N), Z = R[0], D = R[1];
            else if (v(R, -B, B, N), R)
                Z = -(D = R < 0 ? -R : R);
            else
                throw Error(s + N + " cannot be zero: " + R);
        if (S.hasOwnProperty(N = "CRYPTO"))
            if (R = S[N], R === !!R)
                if (R)
                    if (typeof crypto < "u" && crypto && (crypto.getRandomValues || crypto.randomBytes))
                        H = R;
                    else
                        throw H = !R, Error(s + "crypto unavailable");
                else
                    H = R;
            else
                throw Error(s + N + " not true or false: " + R);
        if (S.hasOwnProperty(N = "MODULO_MODE") && (R = S[N], v(R, 0, 9, N), ee = R), S.hasOwnProperty(N = "POW_PRECISION") && (R = S[N], v(R, 0, B, N), oe = R), S.hasOwnProperty(N = "FORMAT"))
            if (R = S[N], typeof R == "object")
                re = R;
            else
                throw Error(s + N + " not an object: " + R);
        if (S.hasOwnProperty(N = "ALPHABET"))
            if (R = S[N], typeof R == "string" && !/^.?$|[+\-.\s]|(.).*\1/.test(R))
                ne = R.slice(0, 10) == "0123456789", ue = R;
            else
                throw Error(s + N + " invalid: " + R);
    }
    else
        throw Error(s + "Object expected: " + S); return { DECIMAL_PLACES: he, ROUNDING_MODE: U, EXPONENTIAL_AT: [$, X], RANGE: [Z, D], CRYPTO: H, MODULO_MODE: ee, POW_PRECISION: oe, FORMAT: re, ALPHABET: ue }; }, _.isBigNumber = function (S) { if (!S || S._isBigNumber !== !0)
    return !1; if (!_.DEBUG)
    return !0; var N, R, q = S.c, C = S.e, G = S.s; e: if ({}.toString.call(q) == "[object Array]") {
    if ((G === 1 || G === -1) && C >= -B && C <= B && C === o(C)) {
        if (q[0] === 0) {
            if (C === 0 && q.length === 1)
                return !0;
            break e;
        }
        if (N = (C + 1) % h, N < 1 && (N += h), String(q[0]).length == N) {
            for (N = 0; N < q.length; N++)
                if (R = q[N], R < 0 || R >= f || R !== o(R))
                    break e;
            if (R !== 0)
                return !0;
        }
    }
}
else if (q === null && C === null && (G === null || G === 1 || G === -1))
    return !0; throw Error(s + "Invalid BigNumber: " + S); }, _.maximum = _.max = function () { return ce(arguments, -1); }, _.minimum = _.min = function () { return ce(arguments, 1); }, _.random = function () { var S = 9007199254740992, N = Math.random() * S & 2097151 ? function () { return o(Math.random() * S); } : function () { return (Math.random() * 1073741824 | 0) * 8388608 + (Math.random() * 8388608 | 0); }; return function (R) { var q, C, G, p, u, l = 0, g = [], T = new _(de); if (R == null ? R = he : v(R, 0, B), p = i(R / h), H)
    if (crypto.getRandomValues) {
        for (q = crypto.getRandomValues(new Uint32Array(p *= 2)); l < p;)
            u = q[l] * 131072 + (q[l + 1] >>> 11), u >= 9e15 ? (C = crypto.getRandomValues(new Uint32Array(2)), q[l] = C[0], q[l + 1] = C[1]) : (g.push(u % 1e14), l += 2);
        l = p / 2;
    }
    else if (crypto.randomBytes) {
        for (q = crypto.randomBytes(p *= 7); l < p;)
            u = (q[l] & 31) * 281474976710656 + q[l + 1] * 1099511627776 + q[l + 2] * 4294967296 + q[l + 3] * 16777216 + (q[l + 4] << 16) + (q[l + 5] << 8) + q[l + 6], u >= 9e15 ? crypto.randomBytes(7).copy(q, l) : (g.push(u % 1e14), l += 7);
        l = p / 7;
    }
    else
        throw H = !1, Error(s + "crypto unavailable"); if (!H)
    for (; l < p;)
        u = N(), u < 9e15 && (g[l++] = u % 1e14); for (p = g[--l], R %= h, p && R && (u = b[h - R], g[l] = o(p / u) * u); g[l] === 0; g.pop(), l--)
    ; if (l < 0)
    g = [G = 0];
else {
    for (G = -1; g[0] === 0; g.splice(0, 1), G -= h)
        ;
    for (l = 1, u = g[0]; u >= 10; u /= 10, l++)
        ;
    l < h && (G -= h - l);
} return T.e = G, T.c = g, T; }; }(), _.sum = function () { for (var S = 1, N = arguments, R = new _(N[0]); S < N.length;)
    R = R.plus(N[S++]); return R; }, W = function () { var S = "0123456789"; function N(R, q, C, G) { for (var p, u = [0], l, g = 0, T = R.length; g < T;) {
    for (l = u.length; l--; u[l] *= q)
        ;
    for (u[0] += G.indexOf(R.charAt(g++)), p = 0; p < u.length; p++)
        u[p] > C - 1 && (u[p + 1] == null && (u[p + 1] = 0), u[p + 1] += u[p] / C | 0, u[p] %= C);
} return u.reverse(); } return function (R, q, C, G, p) { var u, l, g, T, F, Y, ae, me, we = R.indexOf("."), be = he, m = U; for (we >= 0 && (T = oe, oe = 0, R = R.replace(".", ""), me = new _(q), Y = me.pow(R.length - we), oe = T, me.c = N(I(M(Y.c), Y.e, "0"), 10, C, S), me.e = me.c.length), ae = N(R, q, C, p ? (u = ue, S) : (u = S, ue)), g = T = ae.length; ae[--T] == 0; ae.pop())
    ; if (!ae[0])
    return u.charAt(0); if (we < 0 ? --g : (Y.c = ae, Y.e = g, Y.s = G, Y = V(Y, me, be, m, C), ae = Y.c, F = Y.r, g = Y.e), l = g + be + 1, we = ae[l], T = C / 2, F = F || l < 0 || ae[l + 1] != null, F = m < 4 ? (we != null || F) && (m == 0 || m == (Y.s < 0 ? 3 : 2)) : we > T || we == T && (m == 4 || F || m == 6 && ae[l - 1] & 1 || m == (Y.s < 0 ? 8 : 7)), l < 1 || !ae[0])
    R = F ? I(u.charAt(1), -be, u.charAt(0)) : u.charAt(0);
else {
    if (ae.length = l, F)
        for (--C; ++ae[--l] > C;)
            ae[l] = 0, l || (++g, ae = [1].concat(ae));
    for (T = ae.length; !ae[--T];)
        ;
    for (we = 0, R = ""; we <= T; R += u.charAt(ae[we++]))
        ;
    R = I(R, g, u.charAt(0));
} return R; }; }(), V = function () { function S(q, C, G) { var p, u, l, g, T = 0, F = q.length, Y = C % x, ae = C / x | 0; for (q = q.slice(); F--;)
    l = q[F] % x, g = q[F] / x | 0, p = ae * l + g * Y, u = Y * l + p % x * x + T, T = (u / G | 0) + (p / x | 0) + ae * g, q[F] = u % G; return T && (q = [T].concat(q)), q; } function N(q, C, G, p) { var u, l; if (G != p)
    l = G > p ? 1 : -1;
else
    for (u = l = 0; u < G; u++)
        if (q[u] != C[u]) {
            l = q[u] > C[u] ? 1 : -1;
            break;
        } return l; } function R(q, C, G, p) { for (var u = 0; G--;)
    q[G] -= u, u = q[G] < C[G] ? 1 : 0, q[G] = u * p + q[G] - C[G]; for (; !q[0] && q.length > 1; q.splice(0, 1))
    ; } return function (q, C, G, p, u) { var l, g, T, F, Y, ae, me, we, be, m, c, d, k, j, J, Q, Ee, Be = q.s == C.s ? 1 : -1, Se = q.c, xe = C.c; if (!Se || !Se[0] || !xe || !xe[0])
    return new _(!q.s || !C.s || (Se ? xe && Se[0] == xe[0] : !xe) ? NaN : Se && Se[0] == 0 || !xe ? Be * 0 : Be / 0); for (we = new _(Be), be = we.c = [], g = q.e - C.e, Be = G + g + 1, u || (u = f, g = O(q.e / h) - O(C.e / h), Be = Be / h | 0), T = 0; xe[T] == (Se[T] || 0); T++)
    ; if (xe[T] > (Se[T] || 0) && g--, Be < 0)
    be.push(1), F = !0;
else {
    for (j = Se.length, Q = xe.length, T = 0, Be += 2, Y = o(u / (xe[0] + 1)), Y > 1 && (xe = S(xe, Y, u), Se = S(Se, Y, u), Q = xe.length, j = Se.length), k = Q, m = Se.slice(0, Q), c = m.length; c < Q; m[c++] = 0)
        ;
    Ee = xe.slice(), Ee = [0].concat(Ee), J = xe[0], xe[1] >= u / 2 && J++;
    do {
        if (Y = 0, l = N(xe, m, Q, c), l < 0) {
            if (d = m[0], Q != c && (d = d * u + (m[1] || 0)), Y = o(d / J), Y > 1)
                for (Y >= u && (Y = u - 1), ae = S(xe, Y, u), me = ae.length, c = m.length; N(ae, m, me, c) == 1;)
                    Y--, R(ae, Q < me ? Ee : xe, me, u), me = ae.length, l = 1;
            else
                Y == 0 && (l = Y = 1), ae = xe.slice(), me = ae.length;
            if (me < c && (ae = [0].concat(ae)), R(m, ae, c, u), c = m.length, l == -1)
                for (; N(xe, m, Q, c) < 1;)
                    Y++, R(m, Q < c ? Ee : xe, c, u), c = m.length;
        }
        else
            l === 0 && (Y++, m = [0]);
        be[T++] = Y, m[0] ? m[c++] = Se[k] || 0 : (m = [Se[k]], c = 1);
    } while ((k++ < j || m[0] != null) && Be--);
    F = m[0] != null, be[0] || be.splice(0, 1);
} if (u == f) {
    for (T = 1, Be = be[0]; Be >= 10; Be /= 10, T++)
        ;
    ie(we, G + (we.e = T + g * h - 1) + 1, p, F);
}
else
    we.e = g, we.r = +F; return we; }; }(); function se(S, N, R, q) { var C, G, p, u, l; if (R == null ? R = U : v(R, 0, 8), !S.c)
    return S.toString(); if (C = S.c[0], p = S.e, N == null)
    l = M(S.c), l = q == 1 || q == 2 && (p <= $ || p >= X) ? z(l, p) : I(l, p, "0");
else if (S = ie(new _(S), N, R), G = S.e, l = M(S.c), u = l.length, q == 1 || q == 2 && (N <= G || G <= $)) {
    for (; u < N; l += "0", u++)
        ;
    l = z(l, G);
}
else if (N -= p, l = I(l, G, "0"), G + 1 > u) {
    if (--N > 0)
        for (l += "."; N--; l += "0")
            ;
}
else if (N += G - u, N > 0)
    for (G + 1 == u && (l += "."); N--; l += "0")
        ; return S.s < 0 && C ? "-" + l : l; } function ce(S, N) { for (var R, q, C = 1, G = new _(S[0]); C < S.length; C++)
    q = new _(S[C]), (!q.s || (R = A(G, q)) === N || R === 0 && G.s === N) && (G = q); return G; } function ye(S, N, R) { for (var q = 1, C = N.length; !N[--C]; N.pop())
    ; for (C = N[0]; C >= 10; C /= 10, q++)
    ; return (R = q + R * h - 1) > D ? S.c = S.e = null : R < Z ? S.c = [S.e = 0] : (S.e = R, S.c = N), S; } te = function () { var S = /^(-?)0([xbo])(?=\w[\w.]*$)/i, N = /^([^.]+)\.$/, R = /^\.([^.]+)$/, q = /^-?(Infinity|NaN)$/, C = /^\s*\+(?=[\w.])|^\s+|\s+$/g; return function (G, p, u, l) { var g, T = u ? p : p.replace(C, ""); if (q.test(T))
    G.s = isNaN(T) ? null : T < 0 ? -1 : 1;
else {
    if (!u && (T = T.replace(S, function (F, Y, ae) { return g = (ae = ae.toLowerCase()) == "x" ? 16 : ae == "b" ? 2 : 8, !l || l == g ? Y : F; }), l && (g = l, T = T.replace(N, "$1").replace(R, "0.$1")), p != T))
        return new _(T, g);
    if (_.DEBUG)
        throw Error(s + "Not a" + (l ? " base " + l : "") + " number: " + p);
    G.s = null;
} G.c = G.e = null; }; }(); function ie(S, N, R, q) { var C, G, p, u, l, g, T, F = S.c, Y = b; if (F) {
    e: {
        for (C = 1, u = F[0]; u >= 10; u /= 10, C++)
            ;
        if (G = N - C, G < 0)
            G += h, p = N, l = F[g = 0], T = o(l / Y[C - p - 1] % 10);
        else if (g = i((G + 1) / h), g >= F.length)
            if (q) {
                for (; F.length <= g; F.push(0))
                    ;
                l = T = 0, C = 1, G %= h, p = G - h + 1;
            }
            else
                break e;
        else {
            for (l = u = F[g], C = 1; u >= 10; u /= 10, C++)
                ;
            G %= h, p = G - h + C, T = p < 0 ? 0 : o(l / Y[C - p - 1] % 10);
        }
        if (q = q || N < 0 || F[g + 1] != null || (p < 0 ? l : l % Y[C - p - 1]), q = R < 4 ? (T || q) && (R == 0 || R == (S.s < 0 ? 3 : 2)) : T > 5 || T == 5 && (R == 4 || q || R == 6 && (G > 0 ? p > 0 ? l / Y[C - p] : 0 : F[g - 1]) % 10 & 1 || R == (S.s < 0 ? 8 : 7)), N < 1 || !F[0])
            return F.length = 0, q ? (N -= S.e + 1, F[0] = Y[(h - N % h) % h], S.e = -N || 0) : F[0] = S.e = 0, S;
        if (G == 0 ? (F.length = g, u = 1, g--) : (F.length = g + 1, u = Y[h - G], F[g] = p > 0 ? o(l / Y[C - p] % Y[p]) * u : 0), q)
            for (;;)
                if (g == 0) {
                    for (G = 1, p = F[0]; p >= 10; p /= 10, G++)
                        ;
                    for (p = F[0] += u, u = 1; p >= 10; p /= 10, u++)
                        ;
                    G != u && (S.e++, F[0] == f && (F[0] = 1));
                    break;
                }
                else {
                    if (F[g] += u, F[g] != f)
                        break;
                    F[g--] = 0, u = 1;
                }
        for (G = F.length; F[--G] === 0; F.pop())
            ;
    }
    S.e > D ? S.c = S.e = null : S.e < Z && (S.c = [S.e = 0]);
} return S; } function fe(S) { var N, R = S.e; return R === null ? S.toString() : (N = M(S.c), N = R <= $ || R >= X ? z(N, R) : I(N, R, "0"), S.s < 0 ? "-" + N : N); } return K.absoluteValue = K.abs = function () { var S = new _(this); return S.s < 0 && (S.s = 1), S; }, K.comparedTo = function (S, N) { return A(this, new _(S, N)); }, K.decimalPlaces = K.dp = function (S, N) { var R, q, C, G = this; if (S != null)
    return v(S, 0, B), N == null ? N = U : v(N, 0, 8), ie(new _(G), S + G.e + 1, N); if (!(R = G.c))
    return null; if (q = ((C = R.length - 1) - O(this.e / h)) * h, C = R[C])
    for (; C % 10 == 0; C /= 10, q--)
        ; return q < 0 && (q = 0), q; }, K.dividedBy = K.div = function (S, N) { return V(this, new _(S, N), he, U); }, K.dividedToIntegerBy = K.idiv = function (S, N) { return V(this, new _(S, N), 0, 1); }, K.exponentiatedBy = K.pow = function (S, N) { var R, q, C, G, p, u, l, g, T, F = this; if (S = new _(S), S.c && !S.isInteger())
    throw Error(s + "Exponent not an integer: " + fe(S)); if (N != null && (N = new _(N)), u = S.e > 14, !F.c || !F.c[0] || F.c[0] == 1 && !F.e && F.c.length == 1 || !S.c || !S.c[0])
    return T = new _(Math.pow(+fe(F), u ? S.s * (2 - E(S)) : +fe(S))), N ? T.mod(N) : T; if (l = S.s < 0, N) {
    if (N.c ? !N.c[0] : !N.s)
        return new _(NaN);
    q = !l && F.isInteger() && N.isInteger(), q && (F = F.mod(N));
}
else {
    if (S.e > 9 && (F.e > 0 || F.e < -1 || (F.e == 0 ? F.c[0] > 1 || u && F.c[1] >= 24e7 : F.c[0] < 8e13 || u && F.c[0] <= 9999975e7)))
        return G = F.s < 0 && E(S) ? -0 : 0, F.e > -1 && (G = 1 / G), new _(l ? 1 / G : G);
    oe && (G = i(oe / h + 2));
} for (u ? (R = new _(.5), l && (S.s = 1), g = E(S)) : (C = Math.abs(+fe(S)), g = C % 2), T = new _(de);;) {
    if (g) {
        if (T = T.times(F), !T.c)
            break;
        G ? T.c.length > G && (T.c.length = G) : q && (T = T.mod(N));
    }
    if (C) {
        if (C = o(C / 2), C === 0)
            break;
        g = C % 2;
    }
    else if (S = S.times(R), ie(S, S.e + 1, 1), S.e > 14)
        g = E(S);
    else {
        if (C = +fe(S), C === 0)
            break;
        g = C % 2;
    }
    F = F.times(F), G ? F.c && F.c.length > G && (F.c.length = G) : q && (F = F.mod(N));
} return q ? T : (l && (T = de.div(T)), N ? T.mod(N) : G ? ie(T, oe, U, p) : T); }, K.integerValue = function (S) { var N = new _(this); return S == null ? S = U : v(S, 0, 8), ie(N, N.e + 1, S); }, K.isEqualTo = K.eq = function (S, N) { return A(this, new _(S, N)) === 0; }, K.isFinite = function () { return !!this.c; }, K.isGreaterThan = K.gt = function (S, N) { return A(this, new _(S, N)) > 0; }, K.isGreaterThanOrEqualTo = K.gte = function (S, N) { return (N = A(this, new _(S, N))) === 1 || N === 0; }, K.isInteger = function () { return !!this.c && O(this.e / h) > this.c.length - 2; }, K.isLessThan = K.lt = function (S, N) { return A(this, new _(S, N)) < 0; }, K.isLessThanOrEqualTo = K.lte = function (S, N) { return (N = A(this, new _(S, N))) === -1 || N === 0; }, K.isNaN = function () { return !this.s; }, K.isNegative = function () { return this.s < 0; }, K.isPositive = function () { return this.s > 0; }, K.isZero = function () { return !!this.c && this.c[0] == 0; }, K.minus = function (S, N) { var R, q, C, G, p = this, u = p.s; if (S = new _(S, N), N = S.s, !u || !N)
    return new _(NaN); if (u != N)
    return S.s = -N, p.plus(S); var l = p.e / h, g = S.e / h, T = p.c, F = S.c; if (!l || !g) {
    if (!T || !F)
        return T ? (S.s = -N, S) : new _(F ? p : NaN);
    if (!T[0] || !F[0])
        return F[0] ? (S.s = -N, S) : new _(T[0] ? p : U == 3 ? -0 : 0);
} if (l = O(l), g = O(g), T = T.slice(), u = l - g) {
    for ((G = u < 0) ? (u = -u, C = T) : (g = l, C = F), C.reverse(), N = u; N--; C.push(0))
        ;
    C.reverse();
}
else
    for (q = (G = (u = T.length) < (N = F.length)) ? u : N, u = N = 0; N < q; N++)
        if (T[N] != F[N]) {
            G = T[N] < F[N];
            break;
        } if (G && (C = T, T = F, F = C, S.s = -S.s), N = (q = F.length) - (R = T.length), N > 0)
    for (; N--; T[R++] = 0)
        ; for (N = f - 1; q > u;) {
    if (T[--q] < F[q]) {
        for (R = q; R && !T[--R]; T[R] = N)
            ;
        --T[R], T[q] += f;
    }
    T[q] -= F[q];
} for (; T[0] == 0; T.splice(0, 1), --g)
    ; return T[0] ? ye(S, T, g) : (S.s = U == 3 ? -1 : 1, S.c = [S.e = 0], S); }, K.modulo = K.mod = function (S, N) { var R, q, C = this; return S = new _(S, N), !C.c || !S.s || S.c && !S.c[0] ? new _(NaN) : !S.c || C.c && !C.c[0] ? new _(C) : (ee == 9 ? (q = S.s, S.s = 1, R = V(C, S, 0, 3), S.s = q, R.s *= q) : R = V(C, S, 0, ee), S = C.minus(R.times(S)), !S.c[0] && ee == 1 && (S.s = C.s), S); }, K.multipliedBy = K.times = function (S, N) { var R, q, C, G, p, u, l, g, T, F, Y, ae, me, we, be, m = this, c = m.c, d = (S = new _(S, N)).c; if (!c || !d || !c[0] || !d[0])
    return !m.s || !S.s || c && !c[0] && !d || d && !d[0] && !c ? S.c = S.e = S.s = null : (S.s *= m.s, !c || !d ? S.c = S.e = null : (S.c = [0], S.e = 0)), S; for (q = O(m.e / h) + O(S.e / h), S.s *= m.s, l = c.length, F = d.length, l < F && (me = c, c = d, d = me, C = l, l = F, F = C), C = l + F, me = []; C--; me.push(0))
    ; for (we = f, be = x, C = F; --C >= 0;) {
    for (R = 0, Y = d[C] % be, ae = d[C] / be | 0, p = l, G = C + p; G > C;)
        g = c[--p] % be, T = c[p] / be | 0, u = ae * g + T * Y, g = Y * g + u % be * be + me[G] + R, R = (g / we | 0) + (u / be | 0) + ae * T, me[G--] = g % we;
    me[G] = R;
} return R ? ++q : me.splice(0, 1), ye(S, me, q); }, K.negated = function () { var S = new _(this); return S.s = -S.s || null, S; }, K.plus = function (S, N) { var R, q = this, C = q.s; if (S = new _(S, N), N = S.s, !C || !N)
    return new _(NaN); if (C != N)
    return S.s = -N, q.minus(S); var G = q.e / h, p = S.e / h, u = q.c, l = S.c; if (!G || !p) {
    if (!u || !l)
        return new _(C / 0);
    if (!u[0] || !l[0])
        return l[0] ? S : new _(u[0] ? q : C * 0);
} if (G = O(G), p = O(p), u = u.slice(), C = G - p) {
    for (C > 0 ? (p = G, R = l) : (C = -C, R = u), R.reverse(); C--; R.push(0))
        ;
    R.reverse();
} for (C = u.length, N = l.length, C - N < 0 && (R = l, l = u, u = R, N = C), C = 0; N;)
    C = (u[--N] = u[N] + l[N] + C) / f | 0, u[N] = f === u[N] ? 0 : u[N] % f; return C && (u = [C].concat(u), ++p), ye(S, u, p); }, K.precision = K.sd = function (S, N) { var R, q, C, G = this; if (S != null && S !== !!S)
    return v(S, 1, B), N == null ? N = U : v(N, 0, 8), ie(new _(G), S, N); if (!(R = G.c))
    return null; if (C = R.length - 1, q = C * h + 1, C = R[C]) {
    for (; C % 10 == 0; C /= 10, q--)
        ;
    for (C = R[0]; C >= 10; C /= 10, q++)
        ;
} return S && G.e + 1 > q && (q = G.e + 1), q; }, K.shiftedBy = function (S) { return v(S, -w, w), this.times("1e" + S); }, K.squareRoot = K.sqrt = function () { var S, N, R, q, C, G = this, p = G.c, u = G.s, l = G.e, g = he + 4, T = new _("0.5"); if (u !== 1 || !p || !p[0])
    return new _(!u || u < 0 && (!p || p[0]) ? NaN : p ? G : 1 / 0); if (u = Math.sqrt(+fe(G)), u == 0 || u == 1 / 0 ? (N = M(p), (N.length + l) % 2 == 0 && (N += "0"), u = Math.sqrt(+N), l = O((l + 1) / 2) - (l < 0 || l % 2), u == 1 / 0 ? N = "5e" + l : (N = u.toExponential(), N = N.slice(0, N.indexOf("e") + 1) + l), R = new _(N)) : R = new _(u + ""), R.c[0]) {
    for (l = R.e, u = l + g, u < 3 && (u = 0);;)
        if (C = R, R = T.times(C.plus(V(G, C, g, 1))), M(C.c).slice(0, u) === (N = M(R.c)).slice(0, u))
            if (R.e < l && --u, N = N.slice(u - 3, u + 1), N == "9999" || !q && N == "4999") {
                if (!q && (ie(C, C.e + he + 2, 0), C.times(C).eq(G))) {
                    R = C;
                    break;
                }
                g += 4, u += 4, q = 1;
            }
            else {
                (!+N || !+N.slice(1) && N.charAt(0) == "5") && (ie(R, R.e + he + 2, 1), S = !R.times(R).eq(G));
                break;
            }
} return ie(R, R.e + he + 1, U, S); }, K.toExponential = function (S, N) { return S != null && (v(S, 0, B), S++), se(this, S, N, 1); }, K.toFixed = function (S, N) { return S != null && (v(S, 0, B), S = S + this.e + 1), se(this, S, N); }, K.toFormat = function (S, N, R) { var q, C = this; if (R == null)
    S != null && N && typeof N == "object" ? (R = N, N = null) : S && typeof S == "object" ? (R = S, S = N = null) : R = re;
else if (typeof R != "object")
    throw Error(s + "Argument not an object: " + R); if (q = C.toFixed(S, N), C.c) {
    var G, p = q.split("."), u = +R.groupSize, l = +R.secondaryGroupSize, g = R.groupSeparator || "", T = p[0], F = p[1], Y = C.s < 0, ae = Y ? T.slice(1) : T, me = ae.length;
    if (l && (G = u, u = l, l = G, me -= G), u > 0 && me > 0) {
        for (G = me % u || u, T = ae.substr(0, G); G < me; G += u)
            T += g + ae.substr(G, u);
        l > 0 && (T += g + ae.slice(G)), Y && (T = "-" + T);
    }
    q = F ? T + (R.decimalSeparator || "") + ((l = +R.fractionGroupSize) ? F.replace(new RegExp("\\d{" + l + "}\\B", "g"), "$&" + (R.fractionGroupSeparator || "")) : F) : T;
} return (R.prefix || "") + q + (R.suffix || ""); }, K.toFraction = function (S) { var N, R, q, C, G, p, u, l, g, T, F, Y, ae = this, me = ae.c; if (S != null && (u = new _(S), !u.isInteger() && (u.c || u.s !== 1) || u.lt(de)))
    throw Error(s + "Argument " + (u.isInteger() ? "out of range: " : "not an integer: ") + fe(u)); if (!me)
    return new _(ae); for (N = new _(de), g = R = new _(de), q = l = new _(de), Y = M(me), G = N.e = Y.length - ae.e - 1, N.c[0] = b[(p = G % h) < 0 ? h + p : p], S = !S || u.comparedTo(N) > 0 ? G > 0 ? N : g : u, p = D, D = 1 / 0, u = new _(Y), l.c[0] = 0; T = V(u, N, 0, 1), C = R.plus(T.times(q)), C.comparedTo(S) != 1;)
    R = q, q = C, g = l.plus(T.times(C = g)), l = C, N = u.minus(T.times(C = N)), u = C; return C = V(S.minus(R), q, 0, 1), l = l.plus(C.times(g)), R = R.plus(C.times(q)), l.s = g.s = ae.s, G = G * 2, F = V(g, q, G, U).minus(ae).abs().comparedTo(V(l, R, G, U).minus(ae).abs()) < 1 ? [g, q] : [l, R], D = p, F; }, K.toNumber = function () { return +fe(this); }, K.toPrecision = function (S, N) { return S != null && v(S, 1, B), se(this, S, N, 2); }, K.toString = function (S) { var N, R = this, q = R.s, C = R.e; return C === null ? q ? (N = "Infinity", q < 0 && (N = "-" + N)) : N = "NaN" : (S == null ? N = C <= $ || C >= X ? z(M(R.c), C) : I(M(R.c), C, "0") : S === 10 && ne ? (R = ie(new _(R), he + C + 1, U), N = I(M(R.c), R.e, "0")) : (v(S, 2, ue.length, "Base"), N = W(I(M(R.c), C, "0"), 10, S, q, !0)), q < 0 && R.c[0] && (N = "-" + N)), N; }, K.valueOf = K.toJSON = function () { return fe(this); }, K._isBigNumber = !0, L != null && _.set(L), _; } function O(L) { var V = L | 0; return L > 0 || L === V ? V : V - 1; } function M(L) { for (var V, W, te = 1, K = L.length, de = L[0] + ""; te < K;) {
    for (V = L[te++] + "", W = h - V.length; W--; V = "0" + V)
        ;
    de += V;
} for (K = de.length; de.charCodeAt(--K) === 48;)
    ; return de.slice(0, K + 1 || 1); } function A(L, V) { var W, te, K = L.c, de = V.c, he = L.s, U = V.s, $ = L.e, X = V.e; if (!he || !U)
    return null; if (W = K && !K[0], te = de && !de[0], W || te)
    return W ? te ? 0 : -U : he; if (he != U)
    return he; if (W = he < 0, te = $ == X, !K || !de)
    return te ? 0 : !K ^ W ? 1 : -1; if (!te)
    return $ > X ^ W ? 1 : -1; for (U = ($ = K.length) < (X = de.length) ? $ : X, he = 0; he < U; he++)
    if (K[he] != de[he])
        return K[he] > de[he] ^ W ? 1 : -1; return $ == X ? 0 : $ > X ^ W ? 1 : -1; } function v(L, V, W, te) { if (L < V || L > W || L !== o(L))
    throw Error(s + (te || "Argument") + (typeof L == "number" ? L < V || L > W ? " out of range: " : " not an integer: " : " not a primitive number: ") + String(L)); } function E(L) { var V = L.c.length - 1; return O(L.e / h) == V && L.c[V] % 2 != 0; } function z(L, V) { return (L.length > 1 ? L.charAt(0) + "." + L.slice(1) : L) + (V < 0 ? "e" : "e+") + V; } function I(L, V, W) { var te, K; if (V < 0) {
    for (K = W + "."; ++V; K += W)
        ;
    L = K + L;
}
else if (te = L.length, ++V > te) {
    for (K = W, V -= te; --V; K += W)
        ;
    L += K;
}
else
    V < te && (L = L.slice(0, V) + "." + L.slice(V)); return L; } n = y(), n.default = n.BigNumber = n, e.exports ? e.exports = n : (t || (t = typeof self < "u" && self ? self : window), t.BigNumber = n); })(Gi); })(ay);
var Ru = ay.exports, P2 = function (t, n, r) { var i = new t.Uint8Array(r), o = n.pushInt, s = n.pushInt32, a = n.pushInt32Neg, f = n.pushInt64, h = n.pushInt64Neg, w = n.pushFloat, b = n.pushFloatSingle, x = n.pushFloatDouble, B = n.pushTrue, y = n.pushFalse, O = n.pushUndefined, M = n.pushNull, A = n.pushInfinity, v = n.pushInfinityNeg, E = n.pushNaN, z = n.pushNaNNeg, I = n.pushArrayStart, L = n.pushArrayStartFixed, V = n.pushArrayStartFixed32, W = n.pushArrayStartFixed64, te = n.pushObjectStart, K = n.pushObjectStartFixed, de = n.pushObjectStartFixed32, he = n.pushObjectStartFixed64, U = n.pushByteString, $ = n.pushByteStringStart, X = n.pushUtf8String, Z = n.pushUtf8StringStart, D = n.pushSimpleUnassigned, H = n.pushTagStart, ee = n.pushTagStart4, oe = n.pushTagStart8, re = n.pushTagUnassigned, ue = n.pushBreak, ne = t.Math.pow, _ = 0, se = 0, ce = 0; function ye(P) { for (P = P | 0, _ = 0, se = P; (_ | 0) < (se | 0) && (ce = bm[i[_] & 255](i[_] | 0) | 0, !((ce | 0) > 0));)
    ; return ce | 0; } function ie(P) { return P = P | 0, ((_ | 0) + (P | 0) | 0) < (se | 0) ? 0 : 1; } function fe(P) { return P = P | 0, i[P | 0] << 8 | i[P + 1 | 0] | 0; } function S(P) { return P = P | 0, i[P | 0] << 24 | i[P + 1 | 0] << 16 | i[P + 2 | 0] << 8 | i[P + 3 | 0] | 0; } function N(P) { return P = P | 0, o(P | 0), _ = _ + 1 | 0, 0; } function R(P) { return P = P | 0, ie(1) | 0 ? 1 : (o(i[_ + 1 | 0] | 0), _ = _ + 2 | 0, 0); } function q(P) { return P = P | 0, ie(2) | 0 ? 1 : (o(fe(_ + 1 | 0) | 0), _ = _ + 3 | 0, 0); } function C(P) { return P = P | 0, ie(4) | 0 ? 1 : (s(fe(_ + 1 | 0) | 0, fe(_ + 3 | 0) | 0), _ = _ + 5 | 0, 0); } function G(P) { return P = P | 0, ie(8) | 0 ? 1 : (f(fe(_ + 1 | 0) | 0, fe(_ + 3 | 0) | 0, fe(_ + 5 | 0) | 0, fe(_ + 7 | 0) | 0), _ = _ + 9 | 0, 0); } function p(P) { return P = P | 0, o(-1 - (P - 32 | 0) | 0), _ = _ + 1 | 0, 0; } function u(P) { return P = P | 0, ie(1) | 0 ? 1 : (o(-1 - (i[_ + 1 | 0] | 0) | 0), _ = _ + 2 | 0, 0); } function l(P) { P = P | 0; var Re = 0; return ie(2) | 0 ? 1 : (Re = fe(_ + 1 | 0) | 0, o(-1 - (Re | 0) | 0), _ = _ + 3 | 0, 0); } function g(P) { return P = P | 0, ie(4) | 0 ? 1 : (a(fe(_ + 1 | 0) | 0, fe(_ + 3 | 0) | 0), _ = _ + 5 | 0, 0); } function T(P) { return P = P | 0, ie(8) | 0 ? 1 : (h(fe(_ + 1 | 0) | 0, fe(_ + 3 | 0) | 0, fe(_ + 5 | 0) | 0, fe(_ + 7 | 0) | 0), _ = _ + 9 | 0, 0); } function F(P) { P = P | 0; var Re = 0, Oe = 0, ke = 0; return ke = P - 64 | 0, ie(ke | 0) | 0 ? 1 : (Re = _ + 1 | 0, Oe = (_ + 1 | 0) + (ke | 0) | 0, U(Re | 0, Oe | 0), _ = Oe | 0, 0); } function Y(P) { P = P | 0; var Re = 0, Oe = 0, ke = 0; return ie(1) | 0 || (ke = i[_ + 1 | 0] | 0, Re = _ + 2 | 0, Oe = (_ + 2 | 0) + (ke | 0) | 0, ie(ke + 1 | 0) | 0) ? 1 : (U(Re | 0, Oe | 0), _ = Oe | 0, 0); } function ae(P) { P = P | 0; var Re = 0, Oe = 0, ke = 0; return ie(2) | 0 || (ke = fe(_ + 1 | 0) | 0, Re = _ + 3 | 0, Oe = (_ + 3 | 0) + (ke | 0) | 0, ie(ke + 2 | 0) | 0) ? 1 : (U(Re | 0, Oe | 0), _ = Oe | 0, 0); } function me(P) { P = P | 0; var Re = 0, Oe = 0, ke = 0; return ie(4) | 0 || (ke = S(_ + 1 | 0) | 0, Re = _ + 5 | 0, Oe = (_ + 5 | 0) + (ke | 0) | 0, ie(ke + 4 | 0) | 0) ? 1 : (U(Re | 0, Oe | 0), _ = Oe | 0, 0); } function we(P) { return P = P | 0, 1; } function be(P) { return P = P | 0, $(), _ = _ + 1 | 0, 0; } function m(P) { P = P | 0; var Re = 0, Oe = 0, ke = 0; return ke = P - 96 | 0, ie(ke | 0) | 0 ? 1 : (Re = _ + 1 | 0, Oe = (_ + 1 | 0) + (ke | 0) | 0, X(Re | 0, Oe | 0), _ = Oe | 0, 0); } function c(P) { P = P | 0; var Re = 0, Oe = 0, ke = 0; return ie(1) | 0 || (ke = i[_ + 1 | 0] | 0, Re = _ + 2 | 0, Oe = (_ + 2 | 0) + (ke | 0) | 0, ie(ke + 1 | 0) | 0) ? 1 : (X(Re | 0, Oe | 0), _ = Oe | 0, 0); } function d(P) { P = P | 0; var Re = 0, Oe = 0, ke = 0; return ie(2) | 0 || (ke = fe(_ + 1 | 0) | 0, Re = _ + 3 | 0, Oe = (_ + 3 | 0) + (ke | 0) | 0, ie(ke + 2 | 0) | 0) ? 1 : (X(Re | 0, Oe | 0), _ = Oe | 0, 0); } function k(P) { P = P | 0; var Re = 0, Oe = 0, ke = 0; return ie(4) | 0 || (ke = S(_ + 1 | 0) | 0, Re = _ + 5 | 0, Oe = (_ + 5 | 0) + (ke | 0) | 0, ie(ke + 4 | 0) | 0) ? 1 : (X(Re | 0, Oe | 0), _ = Oe | 0, 0); } function j(P) { return P = P | 0, 1; } function J(P) { return P = P | 0, Z(), _ = _ + 1 | 0, 0; } function Q(P) { return P = P | 0, L(P - 128 | 0), _ = _ + 1 | 0, 0; } function Ee(P) { return P = P | 0, ie(1) | 0 ? 1 : (L(i[_ + 1 | 0] | 0), _ = _ + 2 | 0, 0); } function Be(P) { return P = P | 0, ie(2) | 0 ? 1 : (L(fe(_ + 1 | 0) | 0), _ = _ + 3 | 0, 0); } function Se(P) { return P = P | 0, ie(4) | 0 ? 1 : (V(fe(_ + 1 | 0) | 0, fe(_ + 3 | 0) | 0), _ = _ + 5 | 0, 0); } function xe(P) { return P = P | 0, ie(8) | 0 ? 1 : (W(fe(_ + 1 | 0) | 0, fe(_ + 3 | 0) | 0, fe(_ + 5 | 0) | 0, fe(_ + 7 | 0) | 0), _ = _ + 9 | 0, 0); } function Fe(P) { return P = P | 0, I(), _ = _ + 1 | 0, 0; } function Ve(P) { P = P | 0; var Re = 0; return Re = P - 160 | 0, ie(Re | 0) | 0 ? 1 : (K(Re | 0), _ = _ + 1 | 0, 0); } function $u(P) { return P = P | 0, ie(1) | 0 ? 1 : (K(i[_ + 1 | 0] | 0), _ = _ + 2 | 0, 0); } function zu(P) { return P = P | 0, ie(2) | 0 ? 1 : (K(fe(_ + 1 | 0) | 0), _ = _ + 3 | 0, 0); } function Vu(P) { return P = P | 0, ie(4) | 0 ? 1 : (de(fe(_ + 1 | 0) | 0, fe(_ + 3 | 0) | 0), _ = _ + 5 | 0, 0); } function ju(P) { return P = P | 0, ie(8) | 0 ? 1 : (he(fe(_ + 1 | 0) | 0, fe(_ + 3 | 0) | 0, fe(_ + 5 | 0) | 0, fe(_ + 7 | 0) | 0), _ = _ + 9 | 0, 0); } function Lu(P) { return P = P | 0, te(), _ = _ + 1 | 0, 0; } function ir(P) { return P = P | 0, H(P - 192 | 0 | 0), _ = _ + 1 | 0, 0; } function jx(P) { return P = P | 0, H(P | 0), _ = _ + 1 | 0, 0; } function Lx(P) { return P = P | 0, H(P | 0), _ = _ + 1 | 0, 0; } function qx(P) { return P = P | 0, H(P | 0), _ = _ + 1 | 0, 0; } function Hx(P) { return P = P | 0, H(P | 0), _ = _ + 1 | 0, 0; } function ct(P) { return P = P | 0, H(P - 192 | 0 | 0), _ = _ + 1 | 0, 0; } function Gx(P) { return P = P | 0, H(P | 0), _ = _ + 1 | 0, 0; } function Wx(P) { return P = P | 0, H(P | 0), _ = _ + 1 | 0, 0; } function Dx(P) { return P = P | 0, H(P | 0), _ = _ + 1 | 0, 0; } function cm(P) { return P = P | 0, ie(1) | 0 ? 1 : (H(i[_ + 1 | 0] | 0), _ = _ + 2 | 0, 0); } function fm(P) { return P = P | 0, ie(2) | 0 ? 1 : (H(fe(_ + 1 | 0) | 0), _ = _ + 3 | 0, 0); } function dm(P) { return P = P | 0, ie(4) | 0 ? 1 : (ee(fe(_ + 1 | 0) | 0, fe(_ + 3 | 0) | 0), _ = _ + 5 | 0, 0); } function hm(P) { return P = P | 0, ie(8) | 0 ? 1 : (oe(fe(_ + 1 | 0) | 0, fe(_ + 3 | 0) | 0, fe(_ + 5 | 0) | 0, fe(_ + 7 | 0) | 0), _ = _ + 9 | 0, 0); } function nt(P) { return P = P | 0, D((P | 0) - 224 | 0), _ = _ + 1 | 0, 0; } function pm(P) { return P = P | 0, y(), _ = _ + 1 | 0, 0; } function ym(P) { return P = P | 0, B(), _ = _ + 1 | 0, 0; } function mm(P) { return P = P | 0, M(), _ = _ + 1 | 0, 0; } function gm(P) { return P = P | 0, O(), _ = _ + 1 | 0, 0; } function wm(P) { return P = P | 0, ie(1) | 0 ? 1 : (D(i[_ + 1 | 0] | 0), _ = _ + 2 | 0, 0); } function _m(P) { P = P | 0; var Re = 0, Oe = 0, ke = 1, _s = 0, ao = 0, Yx = 0; return ie(2) | 0 ? 1 : (Re = i[_ + 1 | 0] | 0, Oe = i[_ + 2 | 0] | 0, (Re | 0) & 128 && (ke = -1), _s = +(((Re | 0) & 124) >> 2), ao = +(((Re | 0) & 3) << 8 | Oe), +_s == 0 ? w(+(+ke * 5960464477539063e-23 * +ao)) : +_s == 31 ? +ke == 1 ? +ao > 0 ? E() : A() : +ao > 0 ? z() : v() : w(+(+ke * ne(2, +(+_s - 25)) * +(1024 + ao))), _ = _ + 3 | 0, 0); } function vm(P) { return P = P | 0, ie(4) | 0 ? 1 : (b(i[_ + 1 | 0] | 0, i[_ + 2 | 0] | 0, i[_ + 3 | 0] | 0, i[_ + 4 | 0] | 0), _ = _ + 5 | 0, 0); } function xm(P) { return P = P | 0, ie(8) | 0 ? 1 : (x(i[_ + 1 | 0] | 0, i[_ + 2 | 0] | 0, i[_ + 3 | 0] | 0, i[_ + 4 | 0] | 0, i[_ + 5 | 0] | 0, i[_ + 6 | 0] | 0, i[_ + 7 | 0] | 0, i[_ + 8 | 0] | 0), _ = _ + 9 | 0, 0); } function $e(P) { return P = P | 0, 1; } function Em(P) { return P = P | 0, ue(), _ = _ + 1 | 0, 0; } var bm = [N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, R, q, C, G, $e, $e, $e, $e, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, u, l, g, T, $e, $e, $e, $e, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, Y, ae, me, we, $e, $e, $e, be, m, m, m, m, m, m, m, m, m, m, m, m, m, m, m, m, m, m, m, m, m, m, m, m, c, d, k, j, $e, $e, $e, J, Q, Q, Q, Q, Q, Q, Q, Q, Q, Q, Q, Q, Q, Q, Q, Q, Q, Q, Q, Q, Q, Q, Q, Q, Ee, Be, Se, xe, $e, $e, $e, Fe, Ve, Ve, Ve, Ve, Ve, Ve, Ve, Ve, Ve, Ve, Ve, Ve, Ve, Ve, Ve, Ve, Ve, Ve, Ve, Ve, Ve, Ve, Ve, Ve, $u, zu, Vu, ju, $e, $e, $e, Lu, ir, ir, ir, ir, ir, ir, ct, ct, ct, ct, ct, ct, ct, ct, ct, ct, ct, ct, ct, ct, ct, ct, ct, ct, cm, fm, dm, hm, $e, $e, $e, $e, nt, nt, nt, nt, nt, nt, nt, nt, nt, nt, nt, nt, nt, nt, nt, nt, nt, nt, nt, nt, pm, ym, mm, gm, wm, _m, vm, xm, $e, $e, $e, Em]; return { parse: ye }; }, Ou = {}, kt = {};
const Hf = Ru.BigNumber;
kt.MT = { POS_INT: 0, NEG_INT: 1, BYTE_STRING: 2, UTF8_STRING: 3, ARRAY: 4, MAP: 5, TAG: 6, SIMPLE_FLOAT: 7 };
kt.TAG = { DATE_STRING: 0, DATE_EPOCH: 1, POS_BIGINT: 2, NEG_BIGINT: 3, DECIMAL_FRAC: 4, BIGFLOAT: 5, BASE64URL_EXPECTED: 21, BASE64_EXPECTED: 22, BASE16_EXPECTED: 23, CBOR: 24, URI: 32, BASE64URL: 33, BASE64: 34, REGEXP: 35, MIME: 36 };
kt.NUMBYTES = { ZERO: 0, ONE: 24, TWO: 25, FOUR: 26, EIGHT: 27, INDEFINITE: 31 };
kt.SIMPLE = { FALSE: 20, TRUE: 21, NULL: 22, UNDEFINED: 23 };
kt.SYMS = { NULL: Symbol("null"), UNDEFINED: Symbol("undef"), PARENT: Symbol("parent"), BREAK: Symbol("break"), STREAM: Symbol("stream") };
kt.SHIFT32 = Math.pow(2, 32);
kt.SHIFT16 = Math.pow(2, 16);
kt.MAX_SAFE_HIGH = 2097151;
kt.NEG_ONE = new Hf(-1);
kt.TEN = new Hf(10);
kt.TWO = new Hf(2);
kt.PARENT = { ARRAY: 0, OBJECT: 1, MAP: 2, TAG: 3, BYTE_STRING: 4, UTF8_STRING: 5 };
(function (e) { const { Buffer: t } = ys, n = Ru.BigNumber, r = kt, i = r.SHIFT32, o = r.SHIFT16, s = 2097151; e.parseHalf = function (h) { var w, b, x; return x = h[0] & 128 ? -1 : 1, w = (h[0] & 124) >> 2, b = (h[0] & 3) << 8 | h[1], w ? w === 31 ? x * (b ? 0 / 0 : 1 / 0) : x * Math.pow(2, w - 25) * (1024 + b) : x * 5960464477539063e-23 * b; }; function a(f) { return f < 16 ? "0" + f.toString(16) : f.toString(16); } e.arrayBufferToBignumber = function (f) { const h = f.byteLength; let w = ""; for (let b = 0; b < h; b++)
    w += a(f[b]); return new n(w, 16); }, e.buildMap = f => { const h = new Map, w = Object.keys(f), b = w.length; for (let x = 0; x < b; x++)
    h.set(w[x], f[w[x]]); return h; }, e.buildInt32 = (f, h) => f * o + h, e.buildInt64 = (f, h, w, b) => { const x = e.buildInt32(f, h), B = e.buildInt32(w, b); return x > s ? new n(x).times(i).plus(B) : x * i + B; }, e.writeHalf = function (h, w) { const b = t.allocUnsafe(4); b.writeFloatBE(w, 0); const x = b.readUInt32BE(0); if (x & 8191)
    return !1; var B = x >> 16 & 32768; const y = x >> 23 & 255, O = x & 8388607; if (y >= 113 && y <= 142)
    B += (y - 112 << 10) + (O >> 13);
else if (y >= 103 && y < 113) {
    if (O & (1 << 126 - y) - 1)
        return !1;
    B += O + 8388608 >> 126 - y;
}
else
    return !1; return h.writeUInt16BE(B, 0), !0; }, e.keySorter = function (f, h) { var w = f[0].byteLength, b = h[0].byteLength; return w > b ? 1 : b > w ? -1 : f[0].compare(h[0]); }, e.isNegativeZero = f => f === 0 && 1 / f < 0, e.nextPowerOf2 = f => { let h = 0; if (f && !(f & f - 1))
    return f; for (; f !== 0;)
    f >>= 1, h += 1; return 1 << h; }; })(Ou);
const Gf = kt, C2 = Gf.MT, $s = Gf.SIMPLE, wl = Gf.SYMS;
let M2 = class Nc {
    constructor(t) { if (typeof t != "number")
        throw new Error("Invalid Simple type: " + typeof t); if (t < 0 || t > 255 || (t | 0) !== t)
        throw new Error("value must be a small positive integer: " + t); this.value = t; }
    toString() { return "simple(" + this.value + ")"; }
    inspect() { return "simple(" + this.value + ")"; }
    encodeCBOR(t) { return t._pushInt(this.value, C2.SIMPLE_FLOAT); }
    static isSimple(t) { return t instanceof Nc; }
    static decode(t, n) { switch (n == null && (n = !0), t) {
        case $s.FALSE: return !1;
        case $s.TRUE: return !0;
        case $s.NULL: return n ? null : wl.NULL;
        case $s.UNDEFINED: return n ? void 0 : wl.UNDEFINED;
        case -1:
            if (!n)
                throw new Error("Invalid BREAK");
            return wl.BREAK;
        default: return new Nc(t);
    } }
};
var uy = M2;
let $2 = class kc {
    constructor(t, n, r) { if (this.tag = t, this.value = n, this.err = r, typeof this.tag != "number")
        throw new Error("Invalid tag type (" + typeof this.tag + ")"); if (this.tag < 0 || (this.tag | 0) !== this.tag)
        throw new Error("Tag must be a positive integer: " + this.tag); }
    toString() { return `${this.tag}(${JSON.stringify(this.value)})`; }
    encodeCBOR(t) { return t._pushTag(this.tag), t.pushAny(this.value); }
    convert(t) { var n, r; if (r = t != null ? t[this.tag] : void 0, typeof r != "function" && (r = kc["_tag" + this.tag], typeof r != "function"))
        return this; try {
        return r.call(kc, this.value);
    }
    catch (i) {
        return n = i, this.err = n, this;
    } }
};
var ly = $2;
const cy = self.location ? self.location.protocol + "//" + self.location.host : "", Ic = self.URL;
let z2 = class {
    constructor(t = "", n = cy) { this.super = new Ic(t, n), this.path = this.pathname + this.search, this.auth = this.username && this.password ? this.username + ":" + this.password : null, this.query = this.search && this.search.startsWith("?") ? this.search.slice(1) : null; }
    get hash() { return this.super.hash; }
    get host() { return this.super.host; }
    get hostname() { return this.super.hostname; }
    get href() { return this.super.href; }
    get origin() { return this.super.origin; }
    get password() { return this.super.password; }
    get pathname() { return this.super.pathname; }
    get port() { return this.super.port; }
    get protocol() { return this.super.protocol; }
    get search() { return this.super.search; }
    get searchParams() { return this.super.searchParams; }
    get username() { return this.super.username; }
    set hash(t) { this.super.hash = t; }
    set host(t) { this.super.host = t; }
    set hostname(t) { this.super.hostname = t; }
    set href(t) { this.super.href = t; }
    set origin(t) { this.super.origin = t; }
    set password(t) { this.super.password = t; }
    set pathname(t) { this.super.pathname = t; }
    set port(t) { this.super.port = t; }
    set protocol(t) { this.super.protocol = t; }
    set search(t) { this.super.search = t; }
    set searchParams(t) { this.super.searchParams = t; }
    set username(t) { this.super.username = t; }
    createObjectURL(t) { return this.super.createObjectURL(t); }
    revokeObjectURL(t) { this.super.revokeObjectURL(t); }
    toJSON() { return this.super.toJSON(); }
    toString() { return this.super.toString(); }
    format() { return this.toString(); }
};
function V2(e) { if (typeof e == "string")
    return new Ic(e).toString(); if (!(e instanceof Ic)) {
    const t = e.username && e.password ? `${e.username}:${e.password}@` : "", n = e.auth ? e.auth + "@" : "", r = e.port ? ":" + e.port : "", i = e.protocol ? e.protocol + "//" : "", o = e.host || "", s = e.hostname || "", a = e.search || (e.query ? "?" + e.query : ""), f = e.hash || "", h = e.pathname || "", w = e.path || h + a;
    return `${i}${t || n}${o || s + r}${w}${f}`;
} }
var fy = { URLWithLegacySupport: z2, URLSearchParams: self.URLSearchParams, defaultBase: cy, format: V2 };
const { URLWithLegacySupport: hd, format: j2 } = fy;
var L2 = (e, t = {}, n = {}, r) => { let i = t.protocol ? t.protocol.replace(":", "") : "http"; i = (n[i] || r || i) + ":"; let o; try {
    o = new hd(e);
}
catch {
    o = {};
} const s = Object.assign({}, t, { protocol: i || o.protocol, host: t.host || o.host }); return new hd(e, j2(s)).toString(); };
const { URLWithLegacySupport: q2, format: H2, URLSearchParams: G2, defaultBase: W2 } = fy, D2 = L2;
var dy = { URL: q2, URLSearchParams: G2, format: H2, relative: D2, defaultBase: W2 };
const { Buffer: yi } = ys, pd = hs, Y2 = Ru.BigNumber, K2 = P2, It = Ou, Me = kt, Z2 = uy, Q2 = ly, { URL: X2 } = dy;
let Rc = class Oc {
    constructor(t) { t = t || {}, !t.size || t.size < 65536 ? t.size = 65536 : t.size = It.nextPowerOf2(t.size), this._heap = new ArrayBuffer(t.size), this._heap8 = new Uint8Array(this._heap), this._buffer = yi.from(this._heap), this._reset(), this._knownTags = Object.assign({ 0: n => new Date(n), 1: n => new Date(n * 1e3), 2: n => It.arrayBufferToBignumber(n), 3: n => Me.NEG_ONE.minus(It.arrayBufferToBignumber(n)), 4: n => Me.TEN.pow(n[0]).times(n[1]), 5: n => Me.TWO.pow(n[0]).times(n[1]), 32: n => new X2(n), 35: n => new RegExp(n) }, t.tags), this.parser = K2(Gi, { log: console.log.bind(console), pushInt: this.pushInt.bind(this), pushInt32: this.pushInt32.bind(this), pushInt32Neg: this.pushInt32Neg.bind(this), pushInt64: this.pushInt64.bind(this), pushInt64Neg: this.pushInt64Neg.bind(this), pushFloat: this.pushFloat.bind(this), pushFloatSingle: this.pushFloatSingle.bind(this), pushFloatDouble: this.pushFloatDouble.bind(this), pushTrue: this.pushTrue.bind(this), pushFalse: this.pushFalse.bind(this), pushUndefined: this.pushUndefined.bind(this), pushNull: this.pushNull.bind(this), pushInfinity: this.pushInfinity.bind(this), pushInfinityNeg: this.pushInfinityNeg.bind(this), pushNaN: this.pushNaN.bind(this), pushNaNNeg: this.pushNaNNeg.bind(this), pushArrayStart: this.pushArrayStart.bind(this), pushArrayStartFixed: this.pushArrayStartFixed.bind(this), pushArrayStartFixed32: this.pushArrayStartFixed32.bind(this), pushArrayStartFixed64: this.pushArrayStartFixed64.bind(this), pushObjectStart: this.pushObjectStart.bind(this), pushObjectStartFixed: this.pushObjectStartFixed.bind(this), pushObjectStartFixed32: this.pushObjectStartFixed32.bind(this), pushObjectStartFixed64: this.pushObjectStartFixed64.bind(this), pushByteString: this.pushByteString.bind(this), pushByteStringStart: this.pushByteStringStart.bind(this), pushUtf8String: this.pushUtf8String.bind(this), pushUtf8StringStart: this.pushUtf8StringStart.bind(this), pushSimpleUnassigned: this.pushSimpleUnassigned.bind(this), pushTagUnassigned: this.pushTagUnassigned.bind(this), pushTagStart: this.pushTagStart.bind(this), pushTagStart4: this.pushTagStart4.bind(this), pushTagStart8: this.pushTagStart8.bind(this), pushBreak: this.pushBreak.bind(this) }, this._heap); }
    get _depth() { return this._parents.length; }
    get _currentParent() { return this._parents[this._depth - 1]; }
    get _ref() { return this._currentParent.ref; }
    _closeParent() { var t = this._parents.pop(); if (t.length > 0)
        throw new Error(`Missing ${t.length} elements`); switch (t.type) {
        case Me.PARENT.TAG:
            this._push(this.createTag(t.ref[0], t.ref[1]));
            break;
        case Me.PARENT.BYTE_STRING:
            this._push(this.createByteString(t.ref, t.length));
            break;
        case Me.PARENT.UTF8_STRING:
            this._push(this.createUtf8String(t.ref, t.length));
            break;
        case Me.PARENT.MAP:
            if (t.values % 2 > 0)
                throw new Error("Odd number of elements in the map");
            this._push(this.createMap(t.ref, t.length));
            break;
        case Me.PARENT.OBJECT:
            if (t.values % 2 > 0)
                throw new Error("Odd number of elements in the map");
            this._push(this.createObject(t.ref, t.length));
            break;
        case Me.PARENT.ARRAY:
            this._push(this.createArray(t.ref, t.length));
            break;
    } this._currentParent && this._currentParent.type === Me.PARENT.TAG && this._dec(); }
    _dec() { const t = this._currentParent; t.length < 0 || (t.length--, t.length === 0 && this._closeParent()); }
    _push(t, n) { const r = this._currentParent; switch (r.values++, r.type) {
        case Me.PARENT.ARRAY:
        case Me.PARENT.BYTE_STRING:
        case Me.PARENT.UTF8_STRING:
            r.length > -1 ? this._ref[this._ref.length - r.length] = t : this._ref.push(t), this._dec();
            break;
        case Me.PARENT.OBJECT:
            r.tmpKey != null ? (this._ref[r.tmpKey] = t, r.tmpKey = null, this._dec()) : (r.tmpKey = t, typeof r.tmpKey != "string" && (r.type = Me.PARENT.MAP, r.ref = It.buildMap(r.ref)));
            break;
        case Me.PARENT.MAP:
            r.tmpKey != null ? (this._ref.set(r.tmpKey, t), r.tmpKey = null, this._dec()) : r.tmpKey = t;
            break;
        case Me.PARENT.TAG:
            this._ref.push(t), n || this._dec();
            break;
        default: throw new Error("Unknown parent type");
    } }
    _createParent(t, n, r) { this._parents[this._depth] = { type: n, length: r, ref: t, values: 0, tmpKey: null }; }
    _reset() { this._res = [], this._parents = [{ type: Me.PARENT.ARRAY, length: -1, ref: this._res, values: 0, tmpKey: null }]; }
    createTag(t, n) { const r = this._knownTags[t]; return r ? r(n) : new Q2(t, n); }
    createMap(t, n) { return t; }
    createObject(t, n) { return t; }
    createArray(t, n) { return t; }
    createByteString(t, n) { return yi.concat(t); }
    createByteStringFromHeap(t, n) { return t === n ? yi.alloc(0) : yi.from(this._heap.slice(t, n)); }
    createInt(t) { return t; }
    createInt32(t, n) { return It.buildInt32(t, n); }
    createInt64(t, n, r, i) { return It.buildInt64(t, n, r, i); }
    createFloat(t) { return t; }
    createFloatSingle(t, n, r, i) { return pd.read([t, n, r, i], 0, !1, 23, 4); }
    createFloatDouble(t, n, r, i, o, s, a, f) { return pd.read([t, n, r, i, o, s, a, f], 0, !1, 52, 8); }
    createInt32Neg(t, n) { return -1 - It.buildInt32(t, n); }
    createInt64Neg(t, n, r, i) { const o = It.buildInt32(t, n), s = It.buildInt32(r, i); return o > Me.MAX_SAFE_HIGH ? Me.NEG_ONE.minus(new Y2(o).times(Me.SHIFT32).plus(s)) : -1 - (o * Me.SHIFT32 + s); }
    createTrue() { return !0; }
    createFalse() { return !1; }
    createNull() { return null; }
    createUndefined() { }
    createInfinity() { return 1 / 0; }
    createInfinityNeg() { return -1 / 0; }
    createNaN() { return NaN; }
    createNaNNeg() { return NaN; }
    createUtf8String(t, n) { return t.join(""); }
    createUtf8StringFromHeap(t, n) { return t === n ? "" : this._buffer.toString("utf8", t, n); }
    createSimpleUnassigned(t) { return new Z2(t); }
    pushInt(t) { this._push(this.createInt(t)); }
    pushInt32(t, n) { this._push(this.createInt32(t, n)); }
    pushInt64(t, n, r, i) { this._push(this.createInt64(t, n, r, i)); }
    pushFloat(t) { this._push(this.createFloat(t)); }
    pushFloatSingle(t, n, r, i) { this._push(this.createFloatSingle(t, n, r, i)); }
    pushFloatDouble(t, n, r, i, o, s, a, f) { this._push(this.createFloatDouble(t, n, r, i, o, s, a, f)); }
    pushInt32Neg(t, n) { this._push(this.createInt32Neg(t, n)); }
    pushInt64Neg(t, n, r, i) { this._push(this.createInt64Neg(t, n, r, i)); }
    pushTrue() { this._push(this.createTrue()); }
    pushFalse() { this._push(this.createFalse()); }
    pushNull() { this._push(this.createNull()); }
    pushUndefined() { this._push(this.createUndefined()); }
    pushInfinity() { this._push(this.createInfinity()); }
    pushInfinityNeg() { this._push(this.createInfinityNeg()); }
    pushNaN() { this._push(this.createNaN()); }
    pushNaNNeg() { this._push(this.createNaNNeg()); }
    pushArrayStart() { this._createParent([], Me.PARENT.ARRAY, -1); }
    pushArrayStartFixed(t) { this._createArrayStartFixed(t); }
    pushArrayStartFixed32(t, n) { const r = It.buildInt32(t, n); this._createArrayStartFixed(r); }
    pushArrayStartFixed64(t, n, r, i) { const o = It.buildInt64(t, n, r, i); this._createArrayStartFixed(o); }
    pushObjectStart() { this._createObjectStartFixed(-1); }
    pushObjectStartFixed(t) { this._createObjectStartFixed(t); }
    pushObjectStartFixed32(t, n) { const r = It.buildInt32(t, n); this._createObjectStartFixed(r); }
    pushObjectStartFixed64(t, n, r, i) { const o = It.buildInt64(t, n, r, i); this._createObjectStartFixed(o); }
    pushByteStringStart() { this._parents[this._depth] = { type: Me.PARENT.BYTE_STRING, length: -1, ref: [], values: 0, tmpKey: null }; }
    pushByteString(t, n) { this._push(this.createByteStringFromHeap(t, n)); }
    pushUtf8StringStart() { this._parents[this._depth] = { type: Me.PARENT.UTF8_STRING, length: -1, ref: [], values: 0, tmpKey: null }; }
    pushUtf8String(t, n) { this._push(this.createUtf8StringFromHeap(t, n)); }
    pushSimpleUnassigned(t) { this._push(this.createSimpleUnassigned(t)); }
    pushTagStart(t) { this._parents[this._depth] = { type: Me.PARENT.TAG, length: 1, ref: [t] }; }
    pushTagStart4(t, n) { this.pushTagStart(It.buildInt32(t, n)); }
    pushTagStart8(t, n, r, i) { this.pushTagStart(It.buildInt64(t, n, r, i)); }
    pushTagUnassigned(t) { this._push(this.createTag(t)); }
    pushBreak() { if (this._currentParent.length > -1)
        throw new Error("Unexpected break"); this._closeParent(); }
    _createObjectStartFixed(t) { if (t === 0) {
        this._push(this.createObject({}));
        return;
    } this._createParent({}, Me.PARENT.OBJECT, t); }
    _createArrayStartFixed(t) { if (t === 0) {
        this._push(this.createArray([]));
        return;
    } this._createParent(new Array(t), Me.PARENT.ARRAY, t); }
    _decode(t) { if (t.byteLength === 0)
        throw new Error("Input too short"); this._reset(), this._heap8.set(t); const n = this.parser.parse(t.byteLength); if (this._depth > 1) {
        for (; this._currentParent.length === 0;)
            this._closeParent();
        if (this._depth > 1)
            throw new Error("Undeterminated nesting");
    } if (n > 0)
        throw new Error("Failed to parse"); if (this._res.length === 0)
        throw new Error("No valid result"); }
    decodeFirst(t) { return this._decode(t), this._res[0]; }
    decodeAll(t) { return this._decode(t), this._res; }
    static decode(t, n) { return typeof t == "string" && (t = yi.from(t, n || "hex")), new Oc({ size: t.length }).decodeFirst(t); }
    static decodeAll(t, n) { return typeof t == "string" && (t = yi.from(t, n || "hex")), new Oc({ size: t.length }).decodeAll(t); }
};
Rc.decodeFirst = Rc.decode;
var hy = Rc;
const { Buffer: _l } = ys, J2 = hy, e_ = Ou;
class Wf extends J2 {
    createTag(t, n) { return `${t}(${n})`; }
    createInt(t) { return super.createInt(t).toString(); }
    createInt32(t, n) { return super.createInt32(t, n).toString(); }
    createInt64(t, n, r, i) { return super.createInt64(t, n, r, i).toString(); }
    createInt32Neg(t, n) { return super.createInt32Neg(t, n).toString(); }
    createInt64Neg(t, n, r, i) { return super.createInt64Neg(t, n, r, i).toString(); }
    createTrue() { return "true"; }
    createFalse() { return "false"; }
    createFloat(t) { const n = super.createFloat(t); return e_.isNegativeZero(t) ? "-0_1" : `${n}_1`; }
    createFloatSingle(t, n, r, i) { return `${super.createFloatSingle(t, n, r, i)}_2`; }
    createFloatDouble(t, n, r, i, o, s, a, f) { return `${super.createFloatDouble(t, n, r, i, o, s, a, f)}_3`; }
    createByteString(t, n) { const r = t.join(", "); return n === -1 ? `(_ ${r})` : `h'${r}`; }
    createByteStringFromHeap(t, n) { return `h'${_l.from(super.createByteStringFromHeap(t, n)).toString("hex")}'`; }
    createInfinity() { return "Infinity_1"; }
    createInfinityNeg() { return "-Infinity_1"; }
    createNaN() { return "NaN_1"; }
    createNaNNeg() { return "-NaN_1"; }
    createNull() { return "null"; }
    createUndefined() { return "undefined"; }
    createSimpleUnassigned(t) { return `simple(${t})`; }
    createArray(t, n) { const r = super.createArray(t, n); return n === -1 ? `[_ ${r.join(", ")}]` : `[${r.join(", ")}]`; }
    createMap(t, n) { const r = super.createMap(t), i = Array.from(r.keys()).reduce(yd(r), ""); return n === -1 ? `{_ ${i}}` : `{${i}}`; }
    createObject(t, n) { const r = super.createObject(t), i = Object.keys(r).reduce(yd(r), ""); return n === -1 ? `{_ ${i}}` : `{${i}}`; }
    createUtf8String(t, n) { const r = t.join(", "); return n === -1 ? `(_ ${r})` : `"${r}"`; }
    createUtf8StringFromHeap(t, n) { return `"${_l.from(super.createUtf8StringFromHeap(t, n)).toString("utf8")}"`; }
    static diagnose(t, n) { return typeof t == "string" && (t = _l.from(t, n || "hex")), new Wf().decodeFirst(t); }
}
var t_ = Wf;
function yd(e) { return (t, n) => t ? `${t}, ${n}: ${e[n]}` : `${n}: ${e[n]}`; }
const { Buffer: On } = ys, { URL: n_ } = dy, Uc = Ru.BigNumber, vl = Ou, lt = kt, cn = lt.MT, zs = lt.NUMBYTES, md = lt.SHIFT32, gd = lt.SYMS, mi = lt.TAG, r_ = lt.MT.SIMPLE_FLOAT << 5 | lt.NUMBYTES.TWO, i_ = lt.MT.SIMPLE_FLOAT << 5 | lt.NUMBYTES.FOUR, o_ = lt.MT.SIMPLE_FLOAT << 5 | lt.NUMBYTES.EIGHT, s_ = lt.MT.SIMPLE_FLOAT << 5 | lt.SIMPLE.TRUE, a_ = lt.MT.SIMPLE_FLOAT << 5 | lt.SIMPLE.FALSE, u_ = lt.MT.SIMPLE_FLOAT << 5 | lt.SIMPLE.UNDEFINED, wd = lt.MT.SIMPLE_FLOAT << 5 | lt.SIMPLE.NULL, l_ = new Uc("0x20000000000000"), c_ = On.from("f97e00", "hex"), f_ = On.from("f9fc00", "hex"), d_ = On.from("f97c00", "hex");
function h_(e) { return {}.toString.call(e).slice(8, -1); }
class ru {
    constructor(t) { t = t || {}, this.streaming = typeof t.stream == "function", this.onData = t.stream, this.semanticTypes = [[n_, this._pushUrl], [Uc, this._pushBigNumber]]; const n = t.genTypes || [], r = n.length; for (let i = 0; i < r; i++)
        this.addSemanticType(n[i][0], n[i][1]); this._reset(); }
    addSemanticType(t, n) { const r = this.semanticTypes.length; for (let i = 0; i < r; i++)
        if (this.semanticTypes[i][0] === t) {
            const s = this.semanticTypes[i][1];
            return this.semanticTypes[i][1] = n, s;
        } return this.semanticTypes.push([t, n]), null; }
    push(t) { return t && (this.result[this.offset] = t, this.resultMethod[this.offset] = 0, this.resultLength[this.offset] = t.length, this.offset++, this.streaming && this.onData(this.finalize())), !0; }
    pushWrite(t, n, r) { return this.result[this.offset] = t, this.resultMethod[this.offset] = n, this.resultLength[this.offset] = r, this.offset++, this.streaming && this.onData(this.finalize()), !0; }
    _pushUInt8(t) { return this.pushWrite(t, 1, 1); }
    _pushUInt16BE(t) { return this.pushWrite(t, 2, 2); }
    _pushUInt32BE(t) { return this.pushWrite(t, 3, 4); }
    _pushDoubleBE(t) { return this.pushWrite(t, 4, 8); }
    _pushNaN() { return this.push(c_); }
    _pushInfinity(t) { const n = t < 0 ? f_ : d_; return this.push(n); }
    _pushFloat(t) { const n = On.allocUnsafe(2); if (vl.writeHalf(n, t) && vl.parseHalf(n) === t)
        return this._pushUInt8(r_) && this.push(n); const r = On.allocUnsafe(4); return r.writeFloatBE(t, 0), r.readFloatBE(0) === t ? this._pushUInt8(i_) && this.push(r) : this._pushUInt8(o_) && this._pushDoubleBE(t); }
    _pushInt(t, n, r) { const i = n << 5; return t < 24 ? this._pushUInt8(i | t) : t <= 255 ? this._pushUInt8(i | zs.ONE) && this._pushUInt8(t) : t <= 65535 ? this._pushUInt8(i | zs.TWO) && this._pushUInt16BE(t) : t <= 4294967295 ? this._pushUInt8(i | zs.FOUR) && this._pushUInt32BE(t) : t <= Number.MAX_SAFE_INTEGER ? this._pushUInt8(i | zs.EIGHT) && this._pushUInt32BE(Math.floor(t / md)) && this._pushUInt32BE(t % md) : n === cn.NEG_INT ? this._pushFloat(r) : this._pushFloat(t); }
    _pushIntNum(t) { return t < 0 ? this._pushInt(-t - 1, cn.NEG_INT, t) : this._pushInt(t, cn.POS_INT); }
    _pushNumber(t) { switch (!1) {
        case t === t: return this._pushNaN(t);
        case isFinite(t): return this._pushInfinity(t);
        case t % 1 !== 0: return this._pushIntNum(t);
        default: return this._pushFloat(t);
    } }
    _pushString(t) { const n = On.byteLength(t, "utf8"); return this._pushInt(n, cn.UTF8_STRING) && this.pushWrite(t, 5, n); }
    _pushBoolean(t) { return this._pushUInt8(t ? s_ : a_); }
    _pushUndefined(t) { return this._pushUInt8(u_); }
    _pushArray(t, n) { const r = n.length; if (!t._pushInt(r, cn.ARRAY))
        return !1; for (let i = 0; i < r; i++)
        if (!t.pushAny(n[i]))
            return !1; return !0; }
    _pushTag(t) { return this._pushInt(t, cn.TAG); }
    _pushDate(t, n) { return t._pushTag(mi.DATE_EPOCH) && t.pushAny(Math.round(n / 1e3)); }
    _pushBuffer(t, n) { return t._pushInt(n.length, cn.BYTE_STRING) && t.push(n); }
    _pushNoFilter(t, n) { return t._pushBuffer(t, n.slice()); }
    _pushRegexp(t, n) { return t._pushTag(mi.REGEXP) && t.pushAny(n.source); }
    _pushSet(t, n) { if (!t._pushInt(n.size, cn.ARRAY))
        return !1; for (const r of n)
        if (!t.pushAny(r))
            return !1; return !0; }
    _pushUrl(t, n) { return t._pushTag(mi.URI) && t.pushAny(n.format()); }
    _pushBigint(t) { let n = mi.POS_BIGINT; t.isNegative() && (t = t.negated().minus(1), n = mi.NEG_BIGINT); let r = t.toString(16); r.length % 2 && (r = "0" + r); const i = On.from(r, "hex"); return this._pushTag(n) && this._pushBuffer(this, i); }
    _pushBigNumber(t, n) { if (n.isNaN())
        return t._pushNaN(); if (!n.isFinite())
        return t._pushInfinity(n.isNegative() ? -1 / 0 : 1 / 0); if (n.isInteger())
        return t._pushBigint(n); if (!(t._pushTag(mi.DECIMAL_FRAC) && t._pushInt(2, cn.ARRAY)))
        return !1; const r = n.decimalPlaces(), i = n.multipliedBy(new Uc(10).pow(r)); return t._pushIntNum(-r) ? i.abs().isLessThan(l_) ? t._pushIntNum(i.toNumber()) : t._pushBigint(i) : !1; }
    _pushMap(t, n) { return t._pushInt(n.size, cn.MAP) ? this._pushRawMap(n.size, Array.from(n)) : !1; }
    _pushObject(t) { if (!t)
        return this._pushUInt8(wd); for (var n = this.semanticTypes.length, r = 0; r < n; r++)
        if (t instanceof this.semanticTypes[r][0])
            return this.semanticTypes[r][1].call(t, this, t); var i = t.encodeCBOR; if (typeof i == "function")
        return i.call(t, this); var o = Object.keys(t), s = o.length; return this._pushInt(s, cn.MAP) ? this._pushRawMap(s, o.map(a => [a, t[a]])) : !1; }
    _pushRawMap(t, n) { n = n.map(function (i) { return i[0] = ru.encode(i[0]), i; }).sort(vl.keySorter); for (var r = 0; r < t; r++)
        if (!this.push(n[r][0]) || !this.pushAny(n[r][1]))
            return !1; return !0; }
    write(t) { return this.pushAny(t); }
    pushAny(t) { var n = h_(t); switch (n) {
        case "Number": return this._pushNumber(t);
        case "String": return this._pushString(t);
        case "Boolean": return this._pushBoolean(t);
        case "Object": return this._pushObject(t);
        case "Array": return this._pushArray(this, t);
        case "Uint8Array": return this._pushBuffer(this, On.isBuffer(t) ? t : On.from(t));
        case "Null": return this._pushUInt8(wd);
        case "Undefined": return this._pushUndefined(t);
        case "Map": return this._pushMap(this, t);
        case "Set": return this._pushSet(this, t);
        case "URL": return this._pushUrl(this, t);
        case "BigNumber": return this._pushBigNumber(this, t);
        case "Date": return this._pushDate(this, t);
        case "RegExp": return this._pushRegexp(this, t);
        case "Symbol": switch (t) {
            case gd.NULL: return this._pushObject(null);
            case gd.UNDEFINED: return this._pushUndefined(void 0);
            default: throw new Error("Unknown symbol: " + t.toString());
        }
        default: throw new Error("Unknown type: " + typeof t + ", " + (t ? t.toString() : ""));
    } }
    finalize() { if (this.offset === 0)
        return null; for (var t = this.result, n = this.resultLength, r = this.resultMethod, i = this.offset, o = 0, s = 0; s < i; s++)
        o += n[s]; var a = On.allocUnsafe(o), f = 0, h = 0; for (s = 0; s < i; s++) {
        switch (h = n[s], r[s]) {
            case 0:
                t[s].copy(a, f);
                break;
            case 1:
                a.writeUInt8(t[s], f, !0);
                break;
            case 2:
                a.writeUInt16BE(t[s], f, !0);
                break;
            case 3:
                a.writeUInt32BE(t[s], f, !0);
                break;
            case 4:
                a.writeDoubleBE(t[s], f, !0);
                break;
            case 5:
                a.write(t[s], f, h, "utf8");
                break;
            default: throw new Error("unkown method");
        }
        f += h;
    } var w = a; return this._reset(), w; }
    _reset() { this.result = [], this.resultMethod = [], this.resultLength = [], this.offset = 0; }
    static encode(t) { const n = new ru; if (!n.pushAny(t))
        throw new Error("Failed to encode input"); return n.finalize(); }
}
var p_ = ru;
(function (e) { e.Diagnose = t_, e.Decoder = hy, e.Encoder = p_, e.Simple = uy, e.Tagged = ly, e.decodeAll = e.Decoder.decodeAll, e.decodeFirst = e.Decoder.decodeFirst, e.diagnose = e.Diagnose.diagnose, e.encode = e.Encoder.encode, e.decode = e.Decoder.decode, e.leveldb = { decode: e.Decoder.decodeAll, encode: e.Encoder.encode, buffer: !0, name: "cbor" }; })(sy);
const py = Jd(sy);
function vn(e) { return la(Vf.create().update(new Uint8Array(e)).digest()); }
function fa(e) { if (e instanceof py.Tagged)
    return fa(e.value); if (typeof e == "string")
    return yy(e); if (typeof e == "number")
    return vn(Xe(e)); if (e instanceof ArrayBuffer || ArrayBuffer.isView(e))
    return vn(e); if (Array.isArray(e)) {
    const t = e.map(fa);
    return vn(zn(...t));
}
else {
    if (e && typeof e == "object" && e._isPrincipal)
        return vn(e.toUint8Array());
    if (typeof e == "object" && e !== null && typeof e.toHash == "function")
        return fa(e.toHash());
    if (typeof e == "object")
        return iu(e);
    if (typeof e == "bigint")
        return vn(Xe(e));
} throw Object.assign(new Error(`Attempt to hash a value of unsupported type: ${e}`), { value: e }); }
const yy = e => { const t = new TextEncoder().encode(e); return vn(t); };
function _d(e) { return iu(e); }
function iu(e) { const r = Object.entries(e).filter(([, s]) => s !== void 0).map(([s, a]) => { const f = yy(s), h = fa(a); return [f, h]; }).sort(([s], [a]) => _1(s, a)), i = zn(...r.map(s => zn(...s))); return vn(i); }
globalThis && globalThis.__rest;
new TextEncoder().encode(`
ic-request`);
class vd {
    getPrincipal() { return Ae.anonymous(); }
    async transformRequest(t) { return Object.assign(Object.assign({}, t), { body: { content: t.body } }); }
}
var Kn = {}, so = {}, ze = {};
Object.defineProperty(ze, "__esModule", { value: !0 });
const y_ = 9007199254740992;
function nr(e, ...t) { const n = new Uint8Array(e.byteLength + t.reduce((i, o) => i + o.byteLength, 0)); n.set(new Uint8Array(e), 0); let r = e.byteLength; for (const i of t)
    n.set(new Uint8Array(i), r), r += i.byteLength; return n.buffer; }
function Sn(e, t, n) { n = n.replace(/[^0-9a-fA-F]/g, ""); const r = 2 ** (t - 24); n = n.slice(-r * 2).padStart(r * 2, "0"); const i = [(e << 5) + t].concat(n.match(/../g).map(o => parseInt(o, 16))); return new Uint8Array(i).buffer; }
function Uu(e, t) { if (t < 24)
    return new Uint8Array([(e << 5) + t]).buffer; {
    const n = t <= 255 ? 24 : t <= 65535 ? 25 : t <= 4294967295 ? 26 : 27;
    return Sn(e, n, t.toString(16));
} }
function my(e) { const t = []; for (let n = 0; n < e.length; n++) {
    let r = e.charCodeAt(n);
    r < 128 ? t.push(r) : r < 2048 ? t.push(192 | r >> 6, 128 | r & 63) : r < 55296 || r >= 57344 ? t.push(224 | r >> 12, 128 | r >> 6 & 63, 128 | r & 63) : (n++, r = (r & 1023) << 10 | e.charCodeAt(n) & 1023, t.push(240 | r >> 18, 128 | r >> 12 & 63, 128 | r >> 6 & 63, 128 | r & 63));
} return nr(new Uint8Array(Uu(3, e.length)), new Uint8Array(t)); }
function m_(e, t) { if (e == 14277111)
    return nr(new Uint8Array([217, 217, 247]), t); if (e < 24)
    return nr(new Uint8Array([192 + e]), t); {
    const n = e <= 255 ? 24 : e <= 65535 ? 25 : e <= 4294967295 ? 26 : 27, r = 2 ** (n - 24), i = e.toString(16).slice(-r * 2).padStart(r * 2, "0"), o = [192 + n].concat(i.match(/../g).map(s => parseInt(s, 16)));
    return new Uint8Array(o).buffer;
} }
ze.tagged = m_;
function ms(e) { return new Uint8Array(e).buffer; }
ze.raw = ms;
function Df(e) { if (isNaN(e))
    throw new RangeError("Invalid number."); e = Math.min(Math.max(0, e), 23); const t = [0 + e]; return new Uint8Array(t).buffer; }
ze.uSmall = Df;
function gy(e, t) { if (e = parseInt("" + e, t), isNaN(e))
    throw new RangeError("Invalid number."); return e = Math.min(Math.max(0, e), 255), e = e.toString(16), Sn(0, 24, e); }
ze.u8 = gy;
function wy(e, t) { if (e = parseInt("" + e, t), isNaN(e))
    throw new RangeError("Invalid number."); return e = Math.min(Math.max(0, e), 65535), e = e.toString(16), Sn(0, 25, e); }
ze.u16 = wy;
function _y(e, t) { if (e = parseInt("" + e, t), isNaN(e))
    throw new RangeError("Invalid number."); return e = Math.min(Math.max(0, e), 4294967295), e = e.toString(16), Sn(0, 26, e); }
ze.u32 = _y;
function Yf(e, t) { if (typeof e == "string" && t == 16) {
    if (e.match(/[^0-9a-fA-F]/))
        throw new RangeError("Invalid number.");
    return Sn(0, 27, e);
} if (e = parseInt("" + e, t), isNaN(e))
    throw new RangeError("Invalid number."); return e = Math.min(Math.max(0, e), y_), e = e.toString(16), Sn(0, 27, e); }
ze.u64 = Yf;
function vy(e) { if (isNaN(e))
    throw new RangeError("Invalid number."); if (e === 0)
    return Df(0); e = Math.min(Math.max(0, -e), 24) - 1; const t = [32 + e]; return new Uint8Array(t).buffer; }
ze.iSmall = vy;
function xy(e, t) { if (e = parseInt("" + e, t), isNaN(e))
    throw new RangeError("Invalid number."); return e = Math.min(Math.max(0, -e - 1), 255), e = e.toString(16), Sn(1, 24, e); }
ze.i8 = xy;
function Ey(e, t) { if (e = parseInt("" + e, t), isNaN(e))
    throw new RangeError("Invalid number."); return e = Math.min(Math.max(0, -e - 1), 65535), e = e.toString(16), Sn(1, 25, e); }
ze.i16 = Ey;
function by(e, t) { if (e = parseInt("" + e, t), isNaN(e))
    throw new RangeError("Invalid number."); return e = Math.min(Math.max(0, -e - 1), 4294967295), e = e.toString(16), Sn(1, 26, e); }
ze.i32 = by;
function Sy(e, t) { if (typeof e == "string" && t == 16) {
    if (e.startsWith("-") ? e = e.slice(1) : e = "0", e.match(/[^0-9a-fA-F]/) || e.length > 16)
        throw new RangeError("Invalid number.");
    let n = !1, r = e.split("").reduceRight((i, o) => { if (n)
        return o + i; let s = parseInt(o, 16) - 1; return s >= 0 ? (n = !0, s.toString(16) + i) : "f" + i; }, "");
    return n ? Sn(1, 27, r) : Yf(0);
} if (e = parseInt("" + e, t), isNaN(e))
    throw new RangeError("Invalid number."); return e = Math.min(Math.max(0, -e - 1), 9007199254740992), e = e.toString(16), Sn(1, 27, e); }
ze.i64 = Sy;
function g_(e) { return e >= 0 ? e < 24 ? Df(e) : e <= 255 ? gy(e) : e <= 65535 ? wy(e) : e <= 4294967295 ? _y(e) : Yf(e) : e >= -24 ? vy(e) : e >= -255 ? xy(e) : e >= -65535 ? Ey(e) : e >= -4294967295 ? by(e) : Sy(e); }
ze.number = g_;
function w_(e) { return nr(Uu(2, e.byteLength), e); }
ze.bytes = w_;
function __(e) { return my(e); }
ze.string = __;
function v_(e) { return nr(Uu(4, e.length), ...e); }
ze.array = v_;
function x_(e, t = !1) { e instanceof Map || (e = new Map(Object.entries(e))); let n = Array.from(e.entries()); return t && (n = n.sort(([r], [i]) => r.localeCompare(i))), nr(Uu(5, e.size), ...n.map(([r, i]) => nr(my(r), i))); }
ze.map = x_;
function E_(e) { const t = new Float32Array([e]); return nr(new Uint8Array([224 + 26]), new Uint8Array(t.buffer)); }
ze.singleFloat = E_;
function b_(e) { const t = new Float64Array([e]); return nr(new Uint8Array([224 + 27]), new Uint8Array(t.buffer)); }
ze.doubleFloat = b_;
function S_(e) { return e ? Ty() : By(); }
ze.bool = S_;
function Ty() { return ms(new Uint8Array([224 + 21])); }
ze.true_ = Ty;
function By() { return ms(new Uint8Array([224 + 20])); }
ze.false_ = By;
function T_() { return ms(new Uint8Array([224 + 22])); }
ze.null_ = T_;
function B_() { return ms(new Uint8Array([224 + 23])); }
ze.undefined_ = B_;
var A_ = Gi && Gi.__importStar || function (e) { if (e && e.__esModule)
    return e; var t = {}; if (e != null)
    for (var n in e)
        Object.hasOwnProperty.call(e, n) && (t[n] = e[n]); return t.default = e, t; };
Object.defineProperty(so, "__esModule", { value: !0 });
const dn = A_(ze), N_ = [ArrayBuffer, Uint8Array, Uint16Array, Uint32Array, Int8Array, Int16Array, Int32Array, Float32Array, Float64Array];
class Ay {
    constructor(t, n = !1) { this._serializer = t, this._stable = n, this.name = "jsonDefault", this.priority = -100; }
    match(t) { return ["undefined", "boolean", "number", "string", "object"].indexOf(typeof t) != -1; }
    encode(t) { switch (typeof t) {
        case "undefined": return dn.undefined_();
        case "boolean": return dn.bool(t);
        case "number": return Math.floor(t) === t ? dn.number(t) : dn.doubleFloat(t);
        case "string": return dn.string(t);
        case "object":
            if (t === null)
                return dn.null_();
            if (Array.isArray(t))
                return dn.array(t.map(n => this._serializer.serializeValue(n)));
            if (N_.find(n => t instanceof n))
                return dn.bytes(t.buffer);
            if (Object.getOwnPropertyNames(t).indexOf("toJSON") !== -1)
                return this.encode(t.toJSON());
            if (t instanceof Map) {
                const n = new Map;
                for (const [r, i] of t.entries())
                    n.set(r, this._serializer.serializeValue(i));
                return dn.map(n, this._stable);
            }
            else {
                const n = new Map;
                for (const [r, i] of Object.entries(t))
                    n.set(r, this._serializer.serializeValue(i));
                return dn.map(n, this._stable);
            }
        default: throw new Error("Invalid value.");
    } }
}
so.JsonDefaultCborEncoder = Ay;
class Ny {
    constructor() { this.name = "cborEncoder", this.priority = -90; }
    match(t) { return typeof t == "object" && typeof t.toCBOR == "function"; }
    encode(t) { return t.toCBOR(); }
}
so.ToCborEncoder = Ny;
class ky {
    constructor() { this._encoders = new Set; }
    static withDefaultEncoders(t = !1) { const n = new this; return n.addEncoder(new Ay(n, t)), n.addEncoder(new Ny), n; }
    removeEncoder(t) { for (const n of this._encoders.values())
        n.name == t && this._encoders.delete(n); }
    addEncoder(t) { this._encoders.add(t); }
    getEncoderFor(t) { let n = null; for (const r of this._encoders)
        (!n || r.priority > n.priority) && r.match(t) && (n = r); if (n === null)
        throw new Error("Could not find an encoder for value."); return n; }
    serializeValue(t) { return this.getEncoderFor(t).encode(t); }
    serialize(t) { return this.serializeValue(t); }
}
so.CborSerializer = ky;
class k_ extends ky {
    serialize(t) { return dn.raw(new Uint8Array([...new Uint8Array([217, 217, 247]), ...new Uint8Array(super.serializeValue(t))])); }
}
so.SelfDescribeCborSerializer = k_;
(function (e) { function t(i) { for (var o in i)
    e.hasOwnProperty(o) || (e[o] = i[o]); } var n = Gi && Gi.__importStar || function (i) { if (i && i.__esModule)
    return i; var o = {}; if (i != null)
    for (var s in i)
        Object.hasOwnProperty.call(i, s) && (o[s] = i[s]); return o.default = i, o; }; Object.defineProperty(e, "__esModule", { value: !0 }), t(so); const r = n(ze); e.value = r; })(Kn);
class I_ {
    get name() { return "Principal"; }
    get priority() { return 0; }
    match(t) { return t && t._isPrincipal === !0; }
    encode(t) { return Kn.value.bytes(t.toUint8Array()); }
}
class R_ {
    get name() { return "Buffer"; }
    get priority() { return 1; }
    match(t) { return t instanceof ArrayBuffer || ArrayBuffer.isView(t); }
    encode(t) { return Kn.value.bytes(new Uint8Array(t)); }
}
class O_ {
    get name() { return "BigInt"; }
    get priority() { return 1; }
    match(t) { return typeof t == "bigint"; }
    encode(t) { return t > BigInt(0) ? Kn.value.tagged(2, Kn.value.bytes(eu(t.toString(16)))) : Kn.value.tagged(3, Kn.value.bytes(eu((BigInt("-1") * t).toString(16)))); }
}
const Fu = Kn.SelfDescribeCborSerializer.withDefaultEncoders(!0);
Fu.addEncoder(new I_);
Fu.addEncoder(new R_);
Fu.addEncoder(new O_);
var Fc;
(function (e) { e[e.Uint64LittleEndian = 71] = "Uint64LittleEndian", e[e.Semantic = 55799] = "Semantic"; })(Fc || (Fc = {}));
function xl(e) { return Fu.serialize(e); }
function xd(e) { const t = e.byteLength; let n = BigInt(0); for (let r = 0; r < t; r++)
    n = n * BigInt(256) + BigInt(e[r]); return n; }
class U_ extends py.Decoder {
    createByteString(t) { return zn(...t); }
    createByteStringFromHeap(t, n) { return t === n ? new ArrayBuffer(0) : new Uint8Array(this._heap.slice(t, n)); }
}
function Zn(e) { const t = new Uint8Array(e), n = new U_({ size: t.byteLength, tags: { 2: r => xd(r), 3: r => -xd(r), [Fc.Semantic]: r => r } }); try {
    return n.decodeFirst(t);
}
catch (r) {
    throw new Error(`Failed to decode CBOR: ${r}, input: ${pt(t)}`);
} }
const Vs = () => { if (typeof window < "u" && window.crypto && window.crypto.getRandomValues) {
    const e = new Uint32Array(1);
    return window.crypto.getRandomValues(e), e[0];
} if (typeof crypto < "u" && crypto.getRandomValues) {
    const e = new Uint32Array(1);
    return crypto.getRandomValues(e), e[0];
} return typeof crypto < "u" && crypto.randomInt ? crypto.randomInt(0, 4294967295) : Math.floor(Math.random() * 4294967295); };
var Pc;
(function (e) { e.Call = "call"; })(Pc || (Pc = {}));
function Cc() { const e = new ArrayBuffer(16), t = new DataView(e), n = Vs(), r = Vs(), i = Vs(), o = Vs(); return t.setUint32(0, n), t.setUint32(4, r), t.setUint32(8, i), t.setUint32(12, o), e; }
const Ed = BigInt(1e6), F_ = 60 * 1e3;
class js {
    constructor(t) { if (t < 90 * 1e3) {
        const a = BigInt(Date.now() + t) * Ed / BigInt(1e9);
        this._value = a * BigInt(1e9);
        return;
    } const o = BigInt(Math.floor(Date.now() + t - F_)) * Ed / BigInt(1e9) / BigInt(60) * BigInt(60) * BigInt(1e9); this._value = o; }
    toCBOR() { return Kn.value.u64(this._value.toString(16), 16); }
    toHash() { return Xe(this._value); }
}
function bd(e = Cc) { return async (t) => { const n = t.request.headers; t.request.headers = n, t.endpoint === "call" && (t.body.nonce = e()); }; }
function Eo(e) { const t = []; return e.forEach((n, r) => { t.push([r, n]); }), t; }
class El extends Qe {
    constructor(t, n) { super(t), this.response = n, this.name = this.constructor.name, Object.setPrototypeOf(this, new.target.prototype); }
}
class P_ extends Qe {
    constructor(t, n, r, i, o, s) { super(t), this.response = n, this.requestId = r, this.senderPubkey = i, this.senderSig = o, this.ingressExpiry = s, this.name = "AgentCallError", Object.setPrototypeOf(this, new.target.prototype); }
}
class C_ extends Qe {
    constructor(t, n, r, i, o, s) { super(t), this.response = n, this.requestId = r, this.senderPubkey = i, this.senderSig = o, this.ingressExpiry = s, this.name = "AgentQueryError", Object.setPrototypeOf(this, new.target.prototype); }
}
class M_ extends Qe {
    constructor(t, n, r, i, o, s) { super(t), this.response = n, this.requestId = r, this.senderPubkey = i, this.senderSig = o, this.ingressExpiry = s, this.name = "AgentReadStateError", Object.setPrototypeOf(this, new.target.prototype); }
} /*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const Kf = BigInt(0), Zf = BigInt(1), $_ = BigInt(2);
function Pu(e) { return e instanceof Uint8Array || ArrayBuffer.isView(e) && e.constructor.name === "Uint8Array"; }
function Ur(e) { if (!Pu(e))
    throw new Error("Uint8Array expected"); }
function Co(e, t) { if (typeof t != "boolean")
    throw new Error(e + " boolean expected, got " + t); }
const z_ = Array.from({ length: 256 }, (e, t) => t.toString(16).padStart(2, "0"));
function li(e) { Ur(e); let t = ""; for (let n = 0; n < e.length; n++)
    t += z_[e[n]]; return t; }
function Iy(e) { if (typeof e != "string")
    throw new Error("hex string expected, got " + typeof e); return e === "" ? Kf : BigInt("0x" + e); }
const Vn = { _0: 48, _9: 57, A: 65, F: 70, a: 97, f: 102 };
function Sd(e) { if (e >= Vn._0 && e <= Vn._9)
    return e - Vn._0; if (e >= Vn.A && e <= Vn.F)
    return e - (Vn.A - 10); if (e >= Vn.a && e <= Vn.f)
    return e - (Vn.a - 10); }
function Ry(e) { if (typeof e != "string")
    throw new Error("hex string expected, got " + typeof e); const t = e.length, n = t / 2; if (t % 2)
    throw new Error("hex string expected, got unpadded hex of length " + t); const r = new Uint8Array(n); for (let i = 0, o = 0; i < n; i++, o += 2) {
    const s = Sd(e.charCodeAt(o)), a = Sd(e.charCodeAt(o + 1));
    if (s === void 0 || a === void 0) {
        const f = e[o] + e[o + 1];
        throw new Error('hex string expected, got non-hex character "' + f + '" at index ' + o);
    }
    r[i] = s * 16 + a;
} return r; }
function wn(e) { return Iy(li(e)); }
function Mo(e) { return Ur(e), Iy(li(Uint8Array.from(e).reverse())); }
function _t(e, t) { return Ry(e.toString(16).padStart(t * 2, "0")); }
function ou(e, t) { return _t(e, t).reverse(); }
function Ft(e, t, n) { let r; if (typeof t == "string")
    try {
        r = Ry(t);
    }
    catch (o) {
        throw new Error(e + " must be hex string or Uint8Array, cause: " + o);
    }
else if (Pu(t))
    r = Uint8Array.from(t);
else
    throw new Error(e + " must be hex string or Uint8Array"); const i = r.length; if (typeof n == "number" && i !== n)
    throw new Error(e + " of length " + n + " expected, got " + i); return r; }
function rt(...e) { let t = 0; for (let r = 0; r < e.length; r++) {
    const i = e[r];
    Ur(i), t += i.length;
} const n = new Uint8Array(t); for (let r = 0, i = 0; r < e.length; r++) {
    const o = e[r];
    n.set(o, i), i += o.length;
} return n; }
function Qf(e) { if (typeof e != "string")
    throw new Error("string expected"); return new Uint8Array(new TextEncoder().encode(e)); }
const bl = e => typeof e == "bigint" && Kf <= e;
function Oy(e, t, n) { return bl(e) && bl(t) && bl(n) && t <= e && e < n; }
function wr(e, t, n, r) { if (!Oy(t, n, r))
    throw new Error("expected valid " + e + ": " + n + " <= n < " + r + ", got " + t); }
function $o(e) { let t; for (t = 0; e > Kf; e >>= Zf, t += 1)
    ; return t; }
function V_(e, t) { return e >> BigInt(t) & Zf; }
const da = e => ($_ << BigInt(e - 1)) - Zf, j_ = { bigint: e => typeof e == "bigint", function: e => typeof e == "function", boolean: e => typeof e == "boolean", string: e => typeof e == "string", stringOrUint8Array: e => typeof e == "string" || Pu(e), isSafeInteger: e => Number.isSafeInteger(e), array: e => Array.isArray(e), field: (e, t) => t.Fp.isValid(e), hash: e => typeof e == "function" && Number.isSafeInteger(e.outputLen) };
function gs(e, t, n = {}) { const r = (i, o, s) => { const a = j_[o]; if (typeof a != "function")
    throw new Error("invalid validator function"); const f = e[i]; if (!(s && f === void 0) && !a(f, e))
    throw new Error("param " + String(i) + " is invalid. Expected " + o + ", got " + f); }; for (const [i, o] of Object.entries(t))
    r(i, o, !1); for (const [i, o] of Object.entries(n))
    r(i, o, !0); return e; }
const Td = () => { throw new Error("not implemented"); };
function is(e) { const t = new WeakMap; return (n, ...r) => { const i = t.get(n); if (i !== void 0)
    return i; const o = e(n, ...r); return t.set(n, o), o; }; } /*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const yt = BigInt(0), Ge = BigInt(1), _r = BigInt(2), L_ = BigInt(3), Mc = BigInt(4), Bd = BigInt(5), Ad = BigInt(8);
function Ze(e, t) { const n = e % t; return n >= yt ? n : t + n; }
function q_(e, t, n) { if (t < yt)
    throw new Error("invalid exponent, negatives unsupported"); if (n <= yt)
    throw new Error("invalid modulus"); if (n === Ge)
    return yt; let r = Ge; for (; t > yt;)
    t & Ge && (r = r * e % n), e = e * e % n, t >>= Ge; return r; }
function An(e, t, n) { let r = e; for (; t-- > yt;)
    r *= r, r %= n; return r; }
function Nd(e, t) { if (e === yt)
    throw new Error("invert: expected non-zero number"); if (t <= yt)
    throw new Error("invert: expected positive modulus, got " + t); let n = Ze(e, t), r = t, i = yt, o = Ge; for (; n !== yt;) {
    const a = r / n, f = r % n, h = i - o * a;
    r = n, n = f, i = o, o = h;
} if (r !== Ge)
    throw new Error("invert: does not exist"); return Ze(i, t); }
function H_(e) { const t = (e - Ge) / _r; let n, r, i; for (n = e - Ge, r = 0; n % _r === yt; n /= _r, r++)
    ; for (i = _r; i < e && q_(i, t, e) !== e - Ge; i++)
    if (i > 1e3)
        throw new Error("Cannot find square root: likely non-prime P"); if (r === 1) {
    const s = (e + Ge) / Mc;
    return function (f, h) { const w = f.pow(h, s); if (!f.eql(f.sqr(w), h))
        throw new Error("Cannot find square root"); return w; };
} const o = (n + Ge) / _r; return function (a, f) { if (a.pow(f, t) === a.neg(a.ONE))
    throw new Error("Cannot find square root"); let h = r, w = a.pow(a.mul(a.ONE, i), n), b = a.pow(f, o), x = a.pow(f, n); for (; !a.eql(x, a.ONE);) {
    if (a.eql(x, a.ZERO))
        return a.ZERO;
    let B = 1;
    for (let O = a.sqr(x); B < h && !a.eql(O, a.ONE); B++)
        O = a.sqr(O);
    const y = a.pow(w, Ge << BigInt(h - B - 1));
    w = a.sqr(y), b = a.mul(b, y), x = a.mul(x, w), h = B;
} return b; }; }
function G_(e) { if (e % Mc === L_) {
    const t = (e + Ge) / Mc;
    return function (r, i) { const o = r.pow(i, t); if (!r.eql(r.sqr(o), i))
        throw new Error("Cannot find square root"); return o; };
} if (e % Ad === Bd) {
    const t = (e - Bd) / Ad;
    return function (r, i) { const o = r.mul(i, _r), s = r.pow(o, t), a = r.mul(i, s), f = r.mul(r.mul(a, _r), s), h = r.mul(a, r.sub(f, r.ONE)); if (!r.eql(r.sqr(h), i))
        throw new Error("Cannot find square root"); return h; };
} return H_(e); }
const W_ = (e, t) => (Ze(e, t) & Ge) === Ge, D_ = ["create", "isValid", "is0", "neg", "inv", "sqrt", "sqr", "eql", "add", "sub", "mul", "pow", "div", "addN", "subN", "mulN", "sqrN"];
function Uy(e) { const t = { ORDER: "bigint", MASK: "bigint", BYTES: "isSafeInteger", BITS: "isSafeInteger" }, n = D_.reduce((r, i) => (r[i] = "function", r), t); return gs(e, n); }
function ha(e, t, n) { if (n < yt)
    throw new Error("invalid exponent, negatives unsupported"); if (n === yt)
    return e.ONE; if (n === Ge)
    return t; let r = e.ONE, i = t; for (; n > yt;)
    n & Ge && (r = e.mul(r, i)), i = e.sqr(i), n >>= Ge; return r; }
function pa(e, t) { const n = new Array(t.length), r = t.reduce((o, s, a) => e.is0(s) ? o : (n[a] = o, e.mul(o, s)), e.ONE), i = e.inv(r); return t.reduceRight((o, s, a) => e.is0(s) ? o : (n[a] = e.mul(o, n[a]), e.mul(o, s)), i), n; }
function Y_(e) { const t = (e - Ge) / _r; return (n, r) => n.pow(r, t); }
function Fy(e, t) { const n = t !== void 0 ? t : e.toString(2).length, r = Math.ceil(n / 8); return { nBitLength: n, nByteLength: r }; }
function ws(e, t, n = !1, r = {}) { if (e <= yt)
    throw new Error("invalid field: expected ORDER > 0, got " + e); const { nBitLength: i, nByteLength: o } = Fy(e, t); if (o > 2048)
    throw new Error("invalid field: expected ORDER of <= 2048 bytes"); let s; const a = Object.freeze({ ORDER: e, isLE: n, BITS: i, BYTES: o, MASK: da(i), ZERO: yt, ONE: Ge, create: f => Ze(f, e), isValid: f => { if (typeof f != "bigint")
        throw new Error("invalid field element: expected bigint, got " + typeof f); return yt <= f && f < e; }, is0: f => f === yt, isOdd: f => (f & Ge) === Ge, neg: f => Ze(-f, e), eql: (f, h) => f === h, sqr: f => Ze(f * f, e), add: (f, h) => Ze(f + h, e), sub: (f, h) => Ze(f - h, e), mul: (f, h) => Ze(f * h, e), pow: (f, h) => ha(a, f, h), div: (f, h) => Ze(f * Nd(h, e), e), sqrN: f => f * f, addN: (f, h) => f + h, subN: (f, h) => f - h, mulN: (f, h) => f * h, inv: f => Nd(f, e), sqrt: r.sqrt || (f => (s || (s = G_(e)), s(a, f))), invertBatch: f => pa(a, f), cmov: (f, h, w) => w ? h : f, toBytes: f => n ? ou(f, o) : _t(f, o), fromBytes: f => { if (f.length !== o)
        throw new Error("Field.fromBytes: expected " + o + " bytes, got " + f.length); return n ? Mo(f) : wn(f); } }); return Object.freeze(a); }
function Py(e) { if (typeof e != "bigint")
    throw new Error("field order must be bigint"); const t = e.toString(2).length; return Math.ceil(t / 8); }
function Cy(e) { const t = Py(e); return t + Math.ceil(t / 2); }
function K_(e, t, n = !1) { const r = e.length, i = Py(t), o = Cy(t); if (r < 16 || r < o || r > 1024)
    throw new Error("expected " + o + "-1024 bytes of input, got " + r); const s = n ? Mo(e) : wn(e), a = Ze(s, t - Ge) + Ge; return n ? ou(a, i) : _t(a, i); }
const Z_ = wn;
function pr(e, t) { if (os(e), os(t), e < 0 || e >= 1 << 8 * t)
    throw new Error("invalid I2OSP input: " + e); const n = Array.from({ length: t }).fill(0); for (let r = t - 1; r >= 0; r--)
    n[r] = e & 255, e >>>= 8; return new Uint8Array(n); }
function Q_(e, t) { const n = new Uint8Array(e.length); for (let r = 0; r < e.length; r++)
    n[r] = e[r] ^ t[r]; return n; }
function os(e) { if (!Number.isSafeInteger(e))
    throw new Error("number expected"); }
function X_(e, t, n, r) { Ur(e), Ur(t), os(n), t.length > 255 && (t = r(rt(Qf("H2C-OVERSIZE-DST-"), t))); const { outputLen: i, blockLen: o } = r, s = Math.ceil(n / i); if (n > 65535 || s > 255)
    throw new Error("expand_message_xmd: invalid lenInBytes"); const a = rt(t, pr(t.length, 1)), f = pr(0, o), h = pr(n, 2), w = new Array(s), b = r(rt(f, e, h, pr(0, 1), a)); w[0] = r(rt(b, pr(1, 1), a)); for (let B = 1; B <= s; B++) {
    const y = [Q_(b, w[B - 1]), pr(B + 1, 1), a];
    w[B] = r(rt(...y));
} return rt(...w).slice(0, n); }
function J_(e, t, n, r, i) { if (Ur(e), Ur(t), os(n), t.length > 255) {
    const o = Math.ceil(2 * r / 8);
    t = i.create({ dkLen: o }).update(Qf("H2C-OVERSIZE-DST-")).update(t).digest();
} if (n > 65535 || t.length > 255)
    throw new Error("expand_message_xof: invalid lenInBytes"); return i.create({ dkLen: n }).update(e).update(pr(n, 2)).update(t).update(pr(t.length, 1)).digest(); }
function kd(e, t, n) { gs(n, { DST: "stringOrUint8Array", p: "bigint", m: "isSafeInteger", k: "isSafeInteger", hash: "hash" }); const { p: r, k: i, m: o, hash: s, expand: a, DST: f } = n; Ur(e), os(t); const h = typeof f == "string" ? Qf(f) : f, w = r.toString(2).length, b = Math.ceil((w + i) / 8), x = t * o * b; let B; if (a === "xmd")
    B = X_(e, h, x, s);
else if (a === "xof")
    B = J_(e, h, x, i, s);
else if (a === "_internal_pass")
    B = e;
else
    throw new Error('expand must be "xmd" or "xof"'); const y = new Array(t); for (let O = 0; O < t; O++) {
    const M = new Array(o);
    for (let A = 0; A < o; A++) {
        const v = b * (A + O * o), E = B.subarray(v, v + b);
        M[A] = Ze(Z_(E), r);
    }
    y[O] = M;
} return y; }
function My(e, t) { const n = t.map(r => Array.from(r).reverse()); return (r, i) => { const [o, s, a, f] = n.map(h => h.reduce((w, b) => e.add(e.mul(w, r), b))); return r = e.div(o, s), i = e.mul(i, e.div(a, f)), { x: r, y: i }; }; }
function Id(e, t, n) { if (typeof t != "function")
    throw new Error("mapToCurve() must be defined"); return { hashToCurve(r, i) { const o = kd(r, 2, { ...n, DST: n.DST, ...i }), s = e.fromAffine(t(o[0])), a = e.fromAffine(t(o[1])), f = s.add(a).clearCofactor(); return f.assertValidity(), f; }, encodeToCurve(r, i) { const o = kd(r, 1, { ...n, DST: n.encodeDST, ...i }), s = e.fromAffine(t(o[0])).clearCofactor(); return s.assertValidity(), s; }, mapToCurve(r) { if (!Array.isArray(r))
        throw new Error("mapToCurve: expected array of bigints"); for (const o of r)
        if (typeof o != "bigint")
            throw new Error("mapToCurve: expected array of bigints"); const i = e.fromAffine(t(r)).clearCofactor(); return i.assertValidity(), i; } }; } /*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const Rd = BigInt(0), Ls = BigInt(1);
function Sl(e, t) { const n = t.negate(); return e ? n : t; }
function $y(e, t) { if (!Number.isSafeInteger(e) || e <= 0 || e > t)
    throw new Error("invalid window size, expected [1.." + t + "], got W=" + e); }
function Tl(e, t) { $y(e, t); const n = Math.ceil(t / e) + 1, r = 2 ** (e - 1); return { windows: n, windowSize: r }; }
function ev(e, t) { if (!Array.isArray(e))
    throw new Error("array expected"); e.forEach((n, r) => { if (!(n instanceof t))
    throw new Error("invalid point at index " + r); }); }
function tv(e, t) { if (!Array.isArray(e))
    throw new Error("array of scalars expected"); e.forEach((n, r) => { if (!t.isValid(n))
    throw new Error("invalid scalar at index " + r); }); }
const Bl = new WeakMap, zy = new WeakMap;
function Al(e) { return zy.get(e) || 1; }
function Vy(e, t) { return { constTimeNegate: Sl, hasPrecomputes(n) { return Al(n) !== 1; }, unsafeLadder(n, r, i = e.ZERO) { let o = n; for (; r > Rd;)
        r & Ls && (i = i.add(o)), o = o.double(), r >>= Ls; return i; }, precomputeWindow(n, r) { const { windows: i, windowSize: o } = Tl(r, t), s = []; let a = n, f = a; for (let h = 0; h < i; h++) {
        f = a, s.push(f);
        for (let w = 1; w < o; w++)
            f = f.add(a), s.push(f);
        a = f.double();
    } return s; }, wNAF(n, r, i) { const { windows: o, windowSize: s } = Tl(n, t); let a = e.ZERO, f = e.BASE; const h = BigInt(2 ** n - 1), w = 2 ** n, b = BigInt(n); for (let x = 0; x < o; x++) {
        const B = x * s;
        let y = Number(i & h);
        i >>= b, y > s && (y -= w, i += Ls);
        const O = B, M = B + Math.abs(y) - 1, A = x % 2 !== 0, v = y < 0;
        y === 0 ? f = f.add(Sl(A, r[O])) : a = a.add(Sl(v, r[M]));
    } return { p: a, f }; }, wNAFUnsafe(n, r, i, o = e.ZERO) { const { windows: s, windowSize: a } = Tl(n, t), f = BigInt(2 ** n - 1), h = 2 ** n, w = BigInt(n); for (let b = 0; b < s; b++) {
        const x = b * a;
        if (i === Rd)
            break;
        let B = Number(i & f);
        if (i >>= w, B > a && (B -= h, i += Ls), B === 0)
            continue;
        let y = r[x + Math.abs(B) - 1];
        B < 0 && (y = y.negate()), o = o.add(y);
    } return o; }, getPrecomputes(n, r, i) { let o = Bl.get(r); return o || (o = this.precomputeWindow(r, n), n !== 1 && Bl.set(r, i(o))), o; }, wNAFCached(n, r, i) { const o = Al(n); return this.wNAF(o, this.getPrecomputes(o, n, i), r); }, wNAFCachedUnsafe(n, r, i, o) { const s = Al(n); return s === 1 ? this.unsafeLadder(n, r, o) : this.wNAFUnsafe(s, this.getPrecomputes(s, n, i), r, o); }, setWindowSize(n, r) { $y(r, t), zy.set(n, r), Bl.delete(n); } }; }
function jy(e, t, n, r) { if (ev(n, e), tv(r, t), n.length !== r.length)
    throw new Error("arrays of points and scalars must have equal length"); const i = e.ZERO, o = $o(BigInt(n.length)), s = o > 12 ? o - 3 : o > 4 ? o - 2 : o ? 2 : 1, a = (1 << s) - 1, f = new Array(a + 1).fill(i), h = Math.floor((t.BITS - 1) / s) * s; let w = i; for (let b = h; b >= 0; b -= s) {
    f.fill(i);
    for (let B = 0; B < r.length; B++) {
        const y = r[B], O = Number(y >> BigInt(b) & BigInt(a));
        f[O] = f[O].add(n[B]);
    }
    let x = i;
    for (let B = f.length - 1, y = i; B > 0; B--)
        y = y.add(f[B]), x = x.add(y);
    if (w = w.add(x), b !== 0)
        for (let B = 0; B < s; B++)
            w = w.double();
} return w; }
function Ly(e) { return Uy(e.Fp), gs(e, { n: "bigint", h: "bigint", Gx: "field", Gy: "field" }, { nBitLength: "isSafeInteger", nByteLength: "isSafeInteger" }), Object.freeze({ ...Fy(e.n, e.nBitLength), ...e, p: e.Fp.ORDER }); } /*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
function nv(e) { const t = Ly(e); gs(t, { a: "field", b: "field" }, { allowedPrivateKeyLengths: "array", wrapPrivateKey: "boolean", isTorsionFree: "function", clearCofactor: "function", allowInfinityPoint: "boolean", fromBytes: "function", toBytes: "function" }); const { endo: n, Fp: r, a: i } = t; if (n) {
    if (!r.eql(i, r.ZERO))
        throw new Error("invalid endomorphism, can only be defined for Koblitz curves that have a=0");
    if (typeof n != "object" || typeof n.beta != "bigint" || typeof n.splitScalar != "function")
        throw new Error("invalid endomorphism, expected beta: bigint and splitScalar: function");
} return Object.freeze({ ...t }); }
const Wr = BigInt(0), Je = BigInt(1), ur = BigInt(2), su = BigInt(3), Od = BigInt(4);
function Ud(e) { const t = nv(e), { Fp: n } = t, r = ws(t.n, t.nBitLength), i = t.toBytes || ((O, M, A) => { const v = M.toAffine(); return rt(Uint8Array.from([4]), n.toBytes(v.x), n.toBytes(v.y)); }), o = t.fromBytes || (O => { const M = O.subarray(1), A = n.fromBytes(M.subarray(0, n.BYTES)), v = n.fromBytes(M.subarray(n.BYTES, 2 * n.BYTES)); return { x: A, y: v }; }); function s(O) { const { a: M, b: A } = t, v = n.sqr(O), E = n.mul(v, O); return n.add(n.add(E, n.mul(O, M)), A); } if (!n.eql(n.sqr(t.Gy), s(t.Gx)))
    throw new Error("bad generator point: equation left != right"); function a(O) { return Oy(O, Je, t.n); } function f(O) { const { allowedPrivateKeyLengths: M, nByteLength: A, wrapPrivateKey: v, n: E } = t; if (M && typeof O != "bigint") {
    if (Pu(O) && (O = li(O)), typeof O != "string" || !M.includes(O.length))
        throw new Error("invalid private key");
    O = O.padStart(A * 2, "0");
} let z; try {
    z = typeof O == "bigint" ? O : wn(Ft("private key", O, A));
}
catch {
    throw new Error("invalid private key, expected hex or " + A + " bytes, got " + typeof O);
} return v && (z = Ze(z, E)), wr("private key", z, Je, E), z; } function h(O) { if (!(O instanceof x))
    throw new Error("ProjectivePoint expected"); } const w = is((O, M) => { const { px: A, py: v, pz: E } = O; if (n.eql(E, n.ONE))
    return { x: A, y: v }; const z = O.is0(); M == null && (M = z ? n.ONE : n.inv(E)); const I = n.mul(A, M), L = n.mul(v, M), V = n.mul(E, M); if (z)
    return { x: n.ZERO, y: n.ZERO }; if (!n.eql(V, n.ONE))
    throw new Error("invZ was invalid"); return { x: I, y: L }; }), b = is(O => { if (O.is0()) {
    if (t.allowInfinityPoint && !n.is0(O.py))
        return;
    throw new Error("bad point: ZERO");
} const { x: M, y: A } = O.toAffine(); if (!n.isValid(M) || !n.isValid(A))
    throw new Error("bad point: x or y not FE"); const v = n.sqr(A), E = s(M); if (!n.eql(v, E))
    throw new Error("bad point: equation left != right"); if (!O.isTorsionFree())
    throw new Error("bad point: not in prime-order subgroup"); return !0; }); class x {
    constructor(M, A, v) { if (this.px = M, this.py = A, this.pz = v, M == null || !n.isValid(M))
        throw new Error("x required"); if (A == null || !n.isValid(A))
        throw new Error("y required"); if (v == null || !n.isValid(v))
        throw new Error("z required"); Object.freeze(this); }
    static fromAffine(M) { const { x: A, y: v } = M || {}; if (!M || !n.isValid(A) || !n.isValid(v))
        throw new Error("invalid affine point"); if (M instanceof x)
        throw new Error("projective point not allowed"); const E = z => n.eql(z, n.ZERO); return E(A) && E(v) ? x.ZERO : new x(A, v, n.ONE); }
    get x() { return this.toAffine().x; }
    get y() { return this.toAffine().y; }
    static normalizeZ(M) { const A = n.invertBatch(M.map(v => v.pz)); return M.map((v, E) => v.toAffine(A[E])).map(x.fromAffine); }
    static fromHex(M) { const A = x.fromAffine(o(Ft("pointHex", M))); return A.assertValidity(), A; }
    static fromPrivateKey(M) { return x.BASE.multiply(f(M)); }
    static msm(M, A) { return jy(x, r, M, A); }
    _setWindowSize(M) { y.setWindowSize(this, M); }
    assertValidity() { b(this); }
    hasEvenY() { const { y: M } = this.toAffine(); if (n.isOdd)
        return !n.isOdd(M); throw new Error("Field doesn't support isOdd"); }
    equals(M) { h(M); const { px: A, py: v, pz: E } = this, { px: z, py: I, pz: L } = M, V = n.eql(n.mul(A, L), n.mul(z, E)), W = n.eql(n.mul(v, L), n.mul(I, E)); return V && W; }
    negate() { return new x(this.px, n.neg(this.py), this.pz); }
    double() { const { a: M, b: A } = t, v = n.mul(A, su), { px: E, py: z, pz: I } = this; let L = n.ZERO, V = n.ZERO, W = n.ZERO, te = n.mul(E, E), K = n.mul(z, z), de = n.mul(I, I), he = n.mul(E, z); return he = n.add(he, he), W = n.mul(E, I), W = n.add(W, W), L = n.mul(M, W), V = n.mul(v, de), V = n.add(L, V), L = n.sub(K, V), V = n.add(K, V), V = n.mul(L, V), L = n.mul(he, L), W = n.mul(v, W), de = n.mul(M, de), he = n.sub(te, de), he = n.mul(M, he), he = n.add(he, W), W = n.add(te, te), te = n.add(W, te), te = n.add(te, de), te = n.mul(te, he), V = n.add(V, te), de = n.mul(z, I), de = n.add(de, de), te = n.mul(de, he), L = n.sub(L, te), W = n.mul(de, K), W = n.add(W, W), W = n.add(W, W), new x(L, V, W); }
    add(M) { h(M); const { px: A, py: v, pz: E } = this, { px: z, py: I, pz: L } = M; let V = n.ZERO, W = n.ZERO, te = n.ZERO; const K = t.a, de = n.mul(t.b, su); let he = n.mul(A, z), U = n.mul(v, I), $ = n.mul(E, L), X = n.add(A, v), Z = n.add(z, I); X = n.mul(X, Z), Z = n.add(he, U), X = n.sub(X, Z), Z = n.add(A, E); let D = n.add(z, L); return Z = n.mul(Z, D), D = n.add(he, $), Z = n.sub(Z, D), D = n.add(v, E), V = n.add(I, L), D = n.mul(D, V), V = n.add(U, $), D = n.sub(D, V), te = n.mul(K, Z), V = n.mul(de, $), te = n.add(V, te), V = n.sub(U, te), te = n.add(U, te), W = n.mul(V, te), U = n.add(he, he), U = n.add(U, he), $ = n.mul(K, $), Z = n.mul(de, Z), U = n.add(U, $), $ = n.sub(he, $), $ = n.mul(K, $), Z = n.add(Z, $), he = n.mul(U, Z), W = n.add(W, he), he = n.mul(D, Z), V = n.mul(X, V), V = n.sub(V, he), he = n.mul(X, U), te = n.mul(D, te), te = n.add(te, he), new x(V, W, te); }
    subtract(M) { return this.add(M.negate()); }
    is0() { return this.equals(x.ZERO); }
    wNAF(M) { return y.wNAFCached(this, M, x.normalizeZ); }
    multiplyUnsafe(M) { const { endo: A, n: v } = t; wr("scalar", M, Wr, v); const E = x.ZERO; if (M === Wr)
        return E; if (this.is0() || M === Je)
        return this; if (!A || y.hasPrecomputes(this))
        return y.wNAFCachedUnsafe(this, M, x.normalizeZ); let { k1neg: z, k1: I, k2neg: L, k2: V } = A.splitScalar(M), W = E, te = E, K = this; for (; I > Wr || V > Wr;)
        I & Je && (W = W.add(K)), V & Je && (te = te.add(K)), K = K.double(), I >>= Je, V >>= Je; return z && (W = W.negate()), L && (te = te.negate()), te = new x(n.mul(te.px, A.beta), te.py, te.pz), W.add(te); }
    multiply(M) { const { endo: A, n: v } = t; wr("scalar", M, Je, v); let E, z; if (A) {
        const { k1neg: I, k1: L, k2neg: V, k2: W } = A.splitScalar(M);
        let { p: te, f: K } = this.wNAF(L), { p: de, f: he } = this.wNAF(W);
        te = y.constTimeNegate(I, te), de = y.constTimeNegate(V, de), de = new x(n.mul(de.px, A.beta), de.py, de.pz), E = te.add(de), z = K.add(he);
    }
    else {
        const { p: I, f: L } = this.wNAF(M);
        E = I, z = L;
    } return x.normalizeZ([E, z])[0]; }
    multiplyAndAddUnsafe(M, A, v) { const E = x.BASE, z = (L, V) => V === Wr || V === Je || !L.equals(E) ? L.multiplyUnsafe(V) : L.multiply(V), I = z(this, A).add(z(M, v)); return I.is0() ? void 0 : I; }
    toAffine(M) { return w(this, M); }
    isTorsionFree() { const { h: M, isTorsionFree: A } = t; if (M === Je)
        return !0; if (A)
        return A(x, this); throw new Error("isTorsionFree() has not been declared for the elliptic curve"); }
    clearCofactor() { const { h: M, clearCofactor: A } = t; return M === Je ? this : A ? A(x, this) : this.multiplyUnsafe(t.h); }
    toRawBytes(M = !0) { return Co("isCompressed", M), this.assertValidity(), i(x, this, M); }
    toHex(M = !0) { return Co("isCompressed", M), li(this.toRawBytes(M)); }
} x.BASE = new x(t.Gx, t.Gy, n.ONE), x.ZERO = new x(n.ZERO, n.ONE, n.ZERO); const B = t.nBitLength, y = Vy(x, t.endo ? Math.ceil(B / 2) : B); return { CURVE: t, ProjectivePoint: x, normPrivateKeyToScalar: f, weierstrassEquation: s, isWithinCurveOrder: a }; }
function rv(e, t) { const n = e.ORDER; let r = Wr; for (let y = n - Je; y % ur === Wr; y /= ur)
    r += Je; const i = r, o = ur << i - Je - Je, s = o * ur, a = (n - Je) / s, f = (a - Je) / ur, h = s - Je, w = o, b = e.pow(t, a), x = e.pow(t, (a + Je) / ur); let B = (y, O) => { let M = b, A = e.pow(O, h), v = e.sqr(A); v = e.mul(v, O); let E = e.mul(y, v); E = e.pow(E, f), E = e.mul(E, A), A = e.mul(E, O), v = e.mul(E, y); let z = e.mul(v, A); E = e.pow(z, w); let I = e.eql(E, e.ONE); A = e.mul(v, x), E = e.mul(z, M), v = e.cmov(A, v, I), z = e.cmov(E, z, I); for (let L = i; L > Je; L--) {
    let V = L - ur;
    V = ur << V - Je;
    let W = e.pow(z, V);
    const te = e.eql(W, e.ONE);
    A = e.mul(v, M), M = e.mul(M, M), W = e.mul(z, M), v = e.cmov(A, v, te), z = e.cmov(W, z, te);
} return { isValid: I, value: v }; }; if (e.ORDER % Od === su) {
    const y = (e.ORDER - su) / Od, O = e.sqrt(e.neg(t));
    B = (M, A) => { let v = e.sqr(A); const E = e.mul(M, A); v = e.mul(v, E); let z = e.pow(v, y); z = e.mul(z, E); const I = e.mul(z, O), L = e.mul(e.sqr(z), A), V = e.eql(L, M); let W = e.cmov(I, z, V); return { isValid: V, value: W }; };
} return B; }
function qy(e, t) { if (Uy(e), !e.isValid(t.A) || !e.isValid(t.B) || !e.isValid(t.Z))
    throw new Error("mapToCurveSimpleSWU: invalid opts"); const n = rv(e, t.Z); if (!e.isOdd)
    throw new Error("Fp.isOdd is not implemented!"); return r => { let i, o, s, a, f, h, w, b; i = e.sqr(r), i = e.mul(i, t.Z), o = e.sqr(i), o = e.add(o, i), s = e.add(o, e.ONE), s = e.mul(s, t.B), a = e.cmov(t.Z, e.neg(o), !e.eql(o, e.ZERO)), a = e.mul(a, t.A), o = e.sqr(s), h = e.sqr(a), f = e.mul(h, t.A), o = e.add(o, f), o = e.mul(o, s), h = e.mul(h, a), f = e.mul(h, t.B), o = e.add(o, f), w = e.mul(i, s); const { isValid: x, value: B } = n(o, h); b = e.mul(i, r), b = e.mul(b, B), w = e.cmov(w, s, x), b = e.cmov(b, B, x); const y = e.isOdd(r) === e.isOdd(b); return b = e.cmov(e.neg(b), b, y), w = e.div(w, a), { x: w, y: b }; }; } /*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const iv = BigInt(0), qs = BigInt(1), Fd = BigInt(2), Fi = BigInt(3);
function ov(e) { const t = []; for (; e > qs; e >>= qs)
    (e & qs) === iv ? t.unshift(0) : (e & Fi) === Fi ? (t.unshift(-1), e += qs) : t.unshift(1); return t; }
function sv(e) { const { Fp: t, Fr: n, Fp2: r, Fp6: i, Fp12: o } = e.fields, s = e.params.xNegative, a = e.params.twistType, f = Ud({ n: n.ORDER, ...e.G1 }), h = Object.assign(f, Id(f.ProjectivePoint, e.G1.mapToCurve, { ...e.htfDefaults, ...e.G1.htfDefaults })), w = Ud({ n: n.ORDER, ...e.G2 }), b = Object.assign(w, Id(w.ProjectivePoint, e.G2.mapToCurve, { ...e.htfDefaults, ...e.G2.htfDefaults })); let x; if (a === "multiplicative")
    x = (ne, _, se, ce, ye, ie) => o.mul014(ce, ne, r.mul(_, ye), r.mul(se, ie));
else if (a === "divisive")
    x = (ne, _, se, ce, ye, ie) => o.mul034(ce, r.mul(se, ie), r.mul(_, ye), ne);
else
    throw new Error("bls: unknown twist type"); const B = r.div(r.ONE, r.mul(r.ONE, Fd)); function y(ne, _, se, ce) { const ye = r.sqr(se), ie = r.sqr(ce), fe = r.mulByB(r.mul(ie, Fi)), S = r.mul(fe, Fi), N = r.sub(r.sub(r.sqr(r.add(se, ce)), ie), ye), R = r.sub(fe, ye), q = r.mul(r.sqr(_), Fi), C = r.neg(N); return ne.push([R, q, C]), _ = r.mul(r.mul(r.mul(r.sub(ye, S), _), se), B), se = r.sub(r.sqr(r.mul(r.add(ye, S), B)), r.mul(r.sqr(fe), Fi)), ce = r.mul(ye, N), { Rx: _, Ry: se, Rz: ce }; } function O(ne, _, se, ce, ye, ie) { const fe = r.sub(se, r.mul(ie, ce)), S = r.sub(_, r.mul(ye, ce)), N = r.sub(r.mul(fe, ye), r.mul(S, ie)), R = r.neg(fe), q = S; ne.push([N, R, q]); const C = r.sqr(S), G = r.mul(C, S), p = r.mul(C, _), u = r.add(r.sub(G, r.mul(p, Fd)), r.mul(r.sqr(fe), ce)); return _ = r.mul(S, u), se = r.sub(r.mul(r.sub(p, u), fe), r.mul(G, se)), ce = r.mul(ce, G), { Rx: _, Ry: se, Rz: ce }; } const M = ov(e.params.ateLoopSize), A = is(ne => { const _ = ne, { x: se, y: ce } = _.toAffine(), ye = se, ie = ce, fe = r.neg(ce); let S = ye, N = ie, R = r.ONE; const q = []; for (const C of M) {
    const G = [];
    ({ Rx: S, Ry: N, Rz: R } = y(G, S, N, R)), C && ({ Rx: S, Ry: N, Rz: R } = O(G, S, N, R, ye, C === -1 ? fe : ie)), q.push(G);
} if (e.postPrecompute) {
    const C = q[q.length - 1];
    e.postPrecompute(S, N, R, ye, ie, O.bind(null, C));
} return q; }); function v(ne, _ = !1) { let se = o.ONE; if (ne.length) {
    const ce = ne[0][0].length;
    for (let ye = 0; ye < ce; ye++) {
        se = o.sqr(se);
        for (const [ie, fe, S] of ne)
            for (const [N, R, q] of ie[ye])
                se = x(N, R, q, se, fe, S);
    }
} return s && (se = o.conjugate(se)), _ ? o.finalExponentiate(se) : se; } function E(ne, _ = !0) { const se = []; h.ProjectivePoint.normalizeZ(ne.map(({ g1: ce }) => ce)), b.ProjectivePoint.normalizeZ(ne.map(({ g2: ce }) => ce)); for (const { g1: ce, g2: ye } of ne) {
    if (ce.equals(h.ProjectivePoint.ZERO) || ye.equals(b.ProjectivePoint.ZERO))
        throw new Error("pairing is not available for ZERO point");
    ce.assertValidity(), ye.assertValidity();
    const ie = ce.toAffine();
    se.push([A(ye), ie.x, ie.y]);
} return v(se, _); } function z(ne, _, se = !0) { return E([{ g1: ne, g2: _ }], se); } const I = { randomPrivateKey: () => { const ne = Cy(n.ORDER); return K_(e.randomBytes(ne), n.ORDER); }, calcPairingPrecomputes: A }, { ShortSignature: L } = e.G1, { Signature: V } = e.G2; function W(ne) { return ne instanceof h.ProjectivePoint ? ne : h.ProjectivePoint.fromHex(ne); } function te(ne, _) { return ne instanceof h.ProjectivePoint ? ne : h.hashToCurve(Ft("point", ne), _); } function K(ne) { return ne instanceof b.ProjectivePoint ? ne : V.fromHex(ne); } function de(ne, _) { return ne instanceof b.ProjectivePoint ? ne : b.hashToCurve(Ft("point", ne), _); } function he(ne) { return h.ProjectivePoint.fromPrivateKey(ne).toRawBytes(!0); } function U(ne) { return b.ProjectivePoint.fromPrivateKey(ne).toRawBytes(!0); } function $(ne, _, se) { const ce = de(ne, se); ce.assertValidity(); const ye = ce.multiply(h.normPrivateKeyToScalar(_)); return ne instanceof b.ProjectivePoint ? ye : V.toRawBytes(ye); } function X(ne, _, se) { const ce = te(ne, se); ce.assertValidity(); const ye = ce.multiply(h.normPrivateKeyToScalar(_)); return ne instanceof h.ProjectivePoint ? ye : L.toRawBytes(ye); } function Z(ne, _, se, ce) { const ye = W(se), ie = de(_, ce), fe = h.ProjectivePoint.BASE, S = K(ne), N = E([{ g1: ye.negate(), g2: ie }, { g1: fe, g2: S }]); return o.eql(N, o.ONE); } function D(ne, _, se, ce) { const ye = K(se), ie = te(_, ce), fe = b.ProjectivePoint.BASE, S = W(ne), N = E([{ g1: ie, g2: ye }, { g1: S, g2: fe.negate() }]); return o.eql(N, o.ONE); } function H(ne) { if (!Array.isArray(ne) || ne.length === 0)
    throw new Error("expected non-empty array"); } function ee(ne) { H(ne); const se = ne.map(W).reduce((ce, ye) => ce.add(ye), h.ProjectivePoint.ZERO); return ne[0] instanceof h.ProjectivePoint ? (se.assertValidity(), se) : se.toRawBytes(!0); } function oe(ne) { H(ne); const se = ne.map(K).reduce((ce, ye) => ce.add(ye), b.ProjectivePoint.ZERO); return ne[0] instanceof b.ProjectivePoint ? (se.assertValidity(), se) : V.toRawBytes(se); } function re(ne) { H(ne); const se = ne.map(W).reduce((ce, ye) => ce.add(ye), h.ProjectivePoint.ZERO); return ne[0] instanceof h.ProjectivePoint ? (se.assertValidity(), se) : L.toRawBytes(se); } function ue(ne, _, se, ce) { if (H(_), se.length !== _.length)
    throw new Error("amount of public keys and messages should be equal"); const ye = K(ne), ie = _.map(R => de(R, ce)), fe = se.map(W), S = new Map; for (let R = 0; R < fe.length; R++) {
    const q = fe[R], C = ie[R];
    let G = S.get(C);
    G === void 0 && (G = [], S.set(C, G)), G.push(q);
} const N = []; try {
    for (const [R, q] of S) {
        const C = q.reduce((G, p) => G.add(p));
        N.push({ g1: C, g2: R });
    }
    return N.push({ g1: h.ProjectivePoint.BASE.negate(), g2: ye }), o.eql(E(N), o.ONE);
}
catch {
    return !1;
} } return h.ProjectivePoint.BASE._setWindowSize(4), { getPublicKey: he, getPublicKeyForShortSignatures: U, sign: $, signShortSignature: X, verify: Z, verifyBatch: ue, verifyShortSignature: D, aggregatePublicKeys: ee, aggregateSignatures: oe, aggregateShortSignatures: re, millerLoopBatch: v, pairing: z, pairingBatch: E, G1: h, G2: b, Signature: V, ShortSignature: L, fields: { Fr: n, Fp: t, Fp2: r, Fp6: i, Fp12: o }, params: { ateLoopSize: e.params.ateLoopSize, r: e.params.r, G1b: e.G1.b, G2b: e.G2.b }, utils: I }; } /*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const av = BigInt(0), Pi = BigInt(1), Gn = BigInt(2), Pd = BigInt(3);
function Nl(e, t, n, r, i = 1, o) { const s = BigInt(o === void 0 ? r : o), a = n ** BigInt(r), f = []; for (let h = 0; h < i; h++) {
    const w = BigInt(h + 1), b = [];
    for (let x = 0, B = Pi; x < r; x++) {
        const y = (w * B - w) / s % a;
        b.push(e.pow(t, y)), B *= n;
    }
    f.push(b);
} return f; }
function uv(e, t, n) { const r = t.pow(n, (e.ORDER - Pi) / Pd), i = t.pow(n, (e.ORDER - Pi) / Gn); function o(x, B) { const y = t.mul(t.frobeniusMap(x, 1), r), O = t.mul(t.frobeniusMap(B, 1), i); return [y, O]; } const s = t.pow(n, (e.ORDER ** Gn - Pi) / Pd), a = t.pow(n, (e.ORDER ** Gn - Pi) / Gn); if (!t.eql(a, t.neg(t.ONE)))
    throw new Error("psiFrobenius: PSI2_Y!==-1"); function f(x, B) { return [t.mul(x, s), t.neg(B)]; } const h = x => (B, y) => { const O = y.toAffine(), M = x(O.x, O.y); return B.fromAffine({ x: M[0], y: M[1] }); }, w = h(o), b = h(f); return { psi: o, psi2: f, G2psi: w, G2psi2: b, PSI_X: r, PSI_Y: i, PSI2_X: s, PSI2_Y: a }; }
function lv(e) { const { ORDER: t } = e, n = ws(t), r = n.create(e.NONRESIDUE || BigInt(-1)), i = Y_(t), o = n.div(n.ONE, Gn), s = Nl(n, r, n.ORDER, 2)[0], a = ({ c0: U, c1: $ }, { c0: X, c1: Z }) => ({ c0: n.add(U, X), c1: n.add($, Z) }), f = ({ c0: U, c1: $ }, { c0: X, c1: Z }) => ({ c0: n.sub(U, X), c1: n.sub($, Z) }), h = ({ c0: U, c1: $ }, X) => { if (typeof X == "bigint")
    return { c0: n.mul(U, X), c1: n.mul($, X) }; const { c0: Z, c1: D } = X; let H = n.mul(U, Z), ee = n.mul($, D); const oe = n.sub(H, ee), re = n.sub(n.mul(n.add(U, $), n.add(Z, D)), n.add(H, ee)); return { c0: oe, c1: re }; }, w = ({ c0: U, c1: $ }) => { const X = n.add(U, $), Z = n.sub(U, $), D = n.add(U, U); return { c0: n.mul(X, Z), c1: n.mul(D, $) }; }, b = U => { if (U.length !== 2)
    throw new Error("invalid tuple"); const $ = U.map(X => n.create(X)); return { c0: $[0], c1: $[1] }; }, x = t * t, B = b(e.FP2_NONRESIDUE), y = { ORDER: x, isLE: n.isLE, NONRESIDUE: B, BITS: $o(x), BYTES: Math.ceil($o(x) / 8), MASK: da($o(x)), ZERO: { c0: n.ZERO, c1: n.ZERO }, ONE: { c0: n.ONE, c1: n.ZERO }, create: U => U, isValid: ({ c0: U, c1: $ }) => typeof U == "bigint" && typeof $ == "bigint", is0: ({ c0: U, c1: $ }) => n.is0(U) && n.is0($), eql: ({ c0: U, c1: $ }, { c0: X, c1: Z }) => n.eql(U, X) && n.eql($, Z), neg: ({ c0: U, c1: $ }) => ({ c0: n.neg(U), c1: n.neg($) }), pow: (U, $) => ha(y, U, $), invertBatch: U => pa(y, U), add: a, sub: f, mul: h, sqr: w, addN: a, subN: f, mulN: h, sqrN: w, div: (U, $) => y.mul(U, typeof $ == "bigint" ? n.inv(n.create($)) : y.inv($)), inv: ({ c0: U, c1: $ }) => { const X = n.inv(n.create(U * U + $ * $)); return { c0: n.mul(X, n.create(U)), c1: n.mul(X, n.create(-$)) }; }, sqrt: U => { if (e.Fp2sqrt)
        return e.Fp2sqrt(U); const { c0: $, c1: X } = U; if (n.is0(X))
        return n.eql(i(n, $), n.ONE) ? y.create({ c0: n.sqrt($), c1: n.ZERO }) : y.create({ c0: n.ZERO, c1: n.sqrt(n.div($, r)) }); const Z = n.sqrt(n.sub(n.sqr($), n.mul(n.sqr(X), r))); let D = n.mul(n.add(Z, $), o); const H = i(n, D); !n.is0(H) && !n.eql(H, n.ONE) && (D = n.sub(D, Z)); const ee = n.sqrt(D), oe = y.create({ c0: ee, c1: n.div(n.mul(X, o), ee) }); if (!y.eql(y.sqr(oe), U))
        throw new Error("Cannot find square root"); const re = oe, ue = y.neg(re), { re: ne, im: _ } = y.reim(re), { re: se, im: ce } = y.reim(ue); return _ > ce || _ === ce && ne > se ? re : ue; }, isOdd: U => { const { re: $, im: X } = y.reim(U), Z = $ % Gn, D = $ === av, H = X % Gn; return BigInt(Z || D && H) == Pi; }, fromBytes(U) { if (U.length !== y.BYTES)
        throw new Error("fromBytes invalid length=" + U.length); return { c0: n.fromBytes(U.subarray(0, n.BYTES)), c1: n.fromBytes(U.subarray(n.BYTES)) }; }, toBytes: ({ c0: U, c1: $ }) => rt(n.toBytes(U), n.toBytes($)), cmov: ({ c0: U, c1: $ }, { c0: X, c1: Z }, D) => ({ c0: n.cmov(U, X, D), c1: n.cmov($, Z, D) }), reim: ({ c0: U, c1: $ }) => ({ re: U, im: $ }), mulByNonresidue: ({ c0: U, c1: $ }) => y.mul({ c0: U, c1: $ }, B), mulByB: e.Fp2mulByB, fromBigTuple: b, frobeniusMap: ({ c0: U, c1: $ }, X) => ({ c0: U, c1: n.mul($, s[X % 2]) }) }, O = ({ c0: U, c1: $, c2: X }, { c0: Z, c1: D, c2: H }) => ({ c0: y.add(U, Z), c1: y.add($, D), c2: y.add(X, H) }), M = ({ c0: U, c1: $, c2: X }, { c0: Z, c1: D, c2: H }) => ({ c0: y.sub(U, Z), c1: y.sub($, D), c2: y.sub(X, H) }), A = ({ c0: U, c1: $, c2: X }, Z) => { if (typeof Z == "bigint")
    return { c0: y.mul(U, Z), c1: y.mul($, Z), c2: y.mul(X, Z) }; const { c0: D, c1: H, c2: ee } = Z, oe = y.mul(U, D), re = y.mul($, H), ue = y.mul(X, ee); return { c0: y.add(oe, y.mulByNonresidue(y.sub(y.mul(y.add($, X), y.add(H, ee)), y.add(re, ue)))), c1: y.add(y.sub(y.mul(y.add(U, $), y.add(D, H)), y.add(oe, re)), y.mulByNonresidue(ue)), c2: y.sub(y.add(re, y.mul(y.add(U, X), y.add(D, ee))), y.add(oe, ue)) }; }, v = ({ c0: U, c1: $, c2: X }) => { let Z = y.sqr(U), D = y.mul(y.mul(U, $), Gn), H = y.mul(y.mul($, X), Gn), ee = y.sqr(X); return { c0: y.add(y.mulByNonresidue(H), Z), c1: y.add(y.mulByNonresidue(ee), D), c2: y.sub(y.sub(y.add(y.add(D, y.sqr(y.add(y.sub(U, $), X))), H), Z), ee) }; }, [E, z] = Nl(y, B, n.ORDER, 6, 2, 3), I = { ORDER: y.ORDER, isLE: y.isLE, BITS: 3 * y.BITS, BYTES: 3 * y.BYTES, MASK: da(3 * y.BITS), ZERO: { c0: y.ZERO, c1: y.ZERO, c2: y.ZERO }, ONE: { c0: y.ONE, c1: y.ZERO, c2: y.ZERO }, create: U => U, isValid: ({ c0: U, c1: $, c2: X }) => y.isValid(U) && y.isValid($) && y.isValid(X), is0: ({ c0: U, c1: $, c2: X }) => y.is0(U) && y.is0($) && y.is0(X), neg: ({ c0: U, c1: $, c2: X }) => ({ c0: y.neg(U), c1: y.neg($), c2: y.neg(X) }), eql: ({ c0: U, c1: $, c2: X }, { c0: Z, c1: D, c2: H }) => y.eql(U, Z) && y.eql($, D) && y.eql(X, H), sqrt: Td, div: (U, $) => I.mul(U, typeof $ == "bigint" ? n.inv(n.create($)) : I.inv($)), pow: (U, $) => ha(I, U, $), invertBatch: U => pa(I, U), add: O, sub: M, mul: A, sqr: v, addN: O, subN: M, mulN: A, sqrN: v, inv: ({ c0: U, c1: $, c2: X }) => { let Z = y.sub(y.sqr(U), y.mulByNonresidue(y.mul(X, $))), D = y.sub(y.mulByNonresidue(y.sqr(X)), y.mul(U, $)), H = y.sub(y.sqr($), y.mul(U, X)), ee = y.inv(y.add(y.mulByNonresidue(y.add(y.mul(X, D), y.mul($, H))), y.mul(U, Z))); return { c0: y.mul(ee, Z), c1: y.mul(ee, D), c2: y.mul(ee, H) }; }, fromBytes: U => { if (U.length !== I.BYTES)
        throw new Error("fromBytes invalid length=" + U.length); return { c0: y.fromBytes(U.subarray(0, y.BYTES)), c1: y.fromBytes(U.subarray(y.BYTES, 2 * y.BYTES)), c2: y.fromBytes(U.subarray(2 * y.BYTES)) }; }, toBytes: ({ c0: U, c1: $, c2: X }) => rt(y.toBytes(U), y.toBytes($), y.toBytes(X)), cmov: ({ c0: U, c1: $, c2: X }, { c0: Z, c1: D, c2: H }, ee) => ({ c0: y.cmov(U, Z, ee), c1: y.cmov($, D, ee), c2: y.cmov(X, H, ee) }), fromBigSix: U => { if (!Array.isArray(U) || U.length !== 6)
        throw new Error("invalid Fp6 usage"); return { c0: y.fromBigTuple(U.slice(0, 2)), c1: y.fromBigTuple(U.slice(2, 4)), c2: y.fromBigTuple(U.slice(4, 6)) }; }, frobeniusMap: ({ c0: U, c1: $, c2: X }, Z) => ({ c0: y.frobeniusMap(U, Z), c1: y.mul(y.frobeniusMap($, Z), E[Z % 6]), c2: y.mul(y.frobeniusMap(X, Z), z[Z % 6]) }), mulByFp2: ({ c0: U, c1: $, c2: X }, Z) => ({ c0: y.mul(U, Z), c1: y.mul($, Z), c2: y.mul(X, Z) }), mulByNonresidue: ({ c0: U, c1: $, c2: X }) => ({ c0: y.mulByNonresidue(X), c1: U, c2: $ }), mul1: ({ c0: U, c1: $, c2: X }, Z) => ({ c0: y.mulByNonresidue(y.mul(X, Z)), c1: y.mul(U, Z), c2: y.mul($, Z) }), mul01({ c0: U, c1: $, c2: X }, Z, D) { let H = y.mul(U, Z), ee = y.mul($, D); return { c0: y.add(y.mulByNonresidue(y.sub(y.mul(y.add($, X), D), ee)), H), c1: y.sub(y.sub(y.mul(y.add(Z, D), y.add(U, $)), H), ee), c2: y.add(y.sub(y.mul(y.add(U, X), Z), H), ee) }; } }, L = Nl(y, B, n.ORDER, 12, 1, 6)[0], V = ({ c0: U, c1: $ }, { c0: X, c1: Z }) => ({ c0: I.add(U, X), c1: I.add($, Z) }), W = ({ c0: U, c1: $ }, { c0: X, c1: Z }) => ({ c0: I.sub(U, X), c1: I.sub($, Z) }), te = ({ c0: U, c1: $ }, X) => { if (typeof X == "bigint")
    return { c0: I.mul(U, X), c1: I.mul($, X) }; let { c0: Z, c1: D } = X, H = I.mul(U, Z), ee = I.mul($, D); return { c0: I.add(H, I.mulByNonresidue(ee)), c1: I.sub(I.mul(I.add(U, $), I.add(Z, D)), I.add(H, ee)) }; }, K = ({ c0: U, c1: $ }) => { let X = I.mul(U, $); return { c0: I.sub(I.sub(I.mul(I.add(I.mulByNonresidue($), U), I.add(U, $)), X), I.mulByNonresidue(X)), c1: I.add(X, X) }; }; function de(U, $) { const X = y.sqr(U), Z = y.sqr($); return { first: y.add(y.mulByNonresidue(Z), X), second: y.sub(y.sub(y.sqr(y.add(U, $)), X), Z) }; } const he = { ORDER: y.ORDER, isLE: I.isLE, BITS: 2 * y.BITS, BYTES: 2 * y.BYTES, MASK: da(2 * y.BITS), ZERO: { c0: I.ZERO, c1: I.ZERO }, ONE: { c0: I.ONE, c1: I.ZERO }, create: U => U, isValid: ({ c0: U, c1: $ }) => I.isValid(U) && I.isValid($), is0: ({ c0: U, c1: $ }) => I.is0(U) && I.is0($), neg: ({ c0: U, c1: $ }) => ({ c0: I.neg(U), c1: I.neg($) }), eql: ({ c0: U, c1: $ }, { c0: X, c1: Z }) => I.eql(U, X) && I.eql($, Z), sqrt: Td, inv: ({ c0: U, c1: $ }) => { let X = I.inv(I.sub(I.sqr(U), I.mulByNonresidue(I.sqr($)))); return { c0: I.mul(U, X), c1: I.neg(I.mul($, X)) }; }, div: (U, $) => he.mul(U, typeof $ == "bigint" ? n.inv(n.create($)) : he.inv($)), pow: (U, $) => ha(he, U, $), invertBatch: U => pa(he, U), add: V, sub: W, mul: te, sqr: K, addN: V, subN: W, mulN: te, sqrN: K, fromBytes: U => { if (U.length !== he.BYTES)
        throw new Error("fromBytes invalid length=" + U.length); return { c0: I.fromBytes(U.subarray(0, I.BYTES)), c1: I.fromBytes(U.subarray(I.BYTES)) }; }, toBytes: ({ c0: U, c1: $ }) => rt(I.toBytes(U), I.toBytes($)), cmov: ({ c0: U, c1: $ }, { c0: X, c1: Z }, D) => ({ c0: I.cmov(U, X, D), c1: I.cmov($, Z, D) }), fromBigTwelve: U => ({ c0: I.fromBigSix(U.slice(0, 6)), c1: I.fromBigSix(U.slice(6, 12)) }), frobeniusMap(U, $) { const { c0: X, c1: Z, c2: D } = I.frobeniusMap(U.c1, $), H = L[$ % 12]; return { c0: I.frobeniusMap(U.c0, $), c1: I.create({ c0: y.mul(X, H), c1: y.mul(Z, H), c2: y.mul(D, H) }) }; }, mulByFp2: ({ c0: U, c1: $ }, X) => ({ c0: I.mulByFp2(U, X), c1: I.mulByFp2($, X) }), conjugate: ({ c0: U, c1: $ }) => ({ c0: U, c1: I.neg($) }), mul014: ({ c0: U, c1: $ }, X, Z, D) => { let H = I.mul01(U, X, Z), ee = I.mul1($, D); return { c0: I.add(I.mulByNonresidue(ee), H), c1: I.sub(I.sub(I.mul01(I.add($, U), X, y.add(Z, D)), H), ee) }; }, mul034: ({ c0: U, c1: $ }, X, Z, D) => { const H = I.create({ c0: y.mul(U.c0, X), c1: y.mul(U.c1, X), c2: y.mul(U.c2, X) }), ee = I.mul01($, Z, D), oe = I.mul01(I.add(U, $), y.add(X, Z), D); return { c0: I.add(I.mulByNonresidue(ee), H), c1: I.sub(oe, I.add(H, ee)) }; }, _cyclotomicSquare: e.Fp12cyclotomicSquare, _cyclotomicExp: e.Fp12cyclotomicExp, finalExponentiate: e.Fp12finalExponentiate }; return { Fp: n, Fp2: y, Fp6: I, Fp4Square: de, Fp12: he }; } /*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const Ot = BigInt(0), au = BigInt(1), dt = BigInt(2), Hs = BigInt(3), zo = BigInt(4), yr = BigInt("0xd201000000010000"), cv = $o(yr), { Fp: _e, Fp2: ve, Fp6: $c, Fp4Square: kl, Fp12: Ie } = lv({ ORDER: BigInt("0x1a0111ea397fe69a4b1ba7b6434bacd764774b84f38512bf6730d2a0f6b0f6241eabfffeb153ffffb9feffffffffaaab"), FP2_NONRESIDUE: [au, au], Fp2mulByB: ({ c0: e, c1: t }) => { const n = _e.mul(e, zo), r = _e.mul(t, zo); return { c0: _e.sub(n, r), c1: _e.add(n, r) }; }, Fp12cyclotomicSquare: ({ c0: e, c1: t }) => { const { c0: n, c1: r, c2: i } = e, { c0: o, c1: s, c2: a } = t, { first: f, second: h } = kl(n, s), { first: w, second: b } = kl(o, i), { first: x, second: B } = kl(r, a), y = ve.mulByNonresidue(B); return { c0: $c.create({ c0: ve.add(ve.mul(ve.sub(f, n), dt), f), c1: ve.add(ve.mul(ve.sub(w, r), dt), w), c2: ve.add(ve.mul(ve.sub(x, i), dt), x) }), c1: $c.create({ c0: ve.add(ve.mul(ve.add(y, o), dt), y), c1: ve.add(ve.mul(ve.add(h, s), dt), h), c2: ve.add(ve.mul(ve.add(b, a), dt), b) }) }; }, Fp12cyclotomicExp(e, t) { let n = Ie.ONE; for (let r = cv - 1; r >= 0; r--)
        n = Ie._cyclotomicSquare(n), V_(t, r) && (n = Ie.mul(n, e)); return n; }, Fp12finalExponentiate: e => { const t = yr, n = Ie.div(Ie.frobeniusMap(e, 6), e), r = Ie.mul(Ie.frobeniusMap(n, 2), n), i = Ie.conjugate(Ie._cyclotomicExp(r, t)), o = Ie.mul(Ie.conjugate(Ie._cyclotomicSquare(r)), i), s = Ie.conjugate(Ie._cyclotomicExp(o, t)), a = Ie.conjugate(Ie._cyclotomicExp(s, t)), f = Ie.mul(Ie.conjugate(Ie._cyclotomicExp(a, t)), Ie._cyclotomicSquare(i)), h = Ie.conjugate(Ie._cyclotomicExp(f, t)), w = Ie.frobeniusMap(Ie.mul(i, a), 2), b = Ie.frobeniusMap(Ie.mul(s, r), 3), x = Ie.frobeniusMap(Ie.mul(f, Ie.conjugate(r)), 1), B = Ie.mul(Ie.mul(h, Ie.conjugate(o)), r); return Ie.mul(Ie.mul(Ie.mul(w, b), x), B); } }), Cd = ws(BigInt("0x73eda753299d7d483339d80809a1d80553bda402fffe5bfeffffffff00000001")), fv = My(ve, [[["0x5c759507e8e333ebb5b7a9a47d7ed8532c52d39fd3a042a88b58423c50ae15d5c2638e343d9c71c6238aaaaaaaa97d6", "0x5c759507e8e333ebb5b7a9a47d7ed8532c52d39fd3a042a88b58423c50ae15d5c2638e343d9c71c6238aaaaaaaa97d6"], ["0x0", "0x11560bf17baa99bc32126fced787c88f984f87adf7ae0c7f9a208c6b4f20a4181472aaa9cb8d555526a9ffffffffc71a"], ["0x11560bf17baa99bc32126fced787c88f984f87adf7ae0c7f9a208c6b4f20a4181472aaa9cb8d555526a9ffffffffc71e", "0x8ab05f8bdd54cde190937e76bc3e447cc27c3d6fbd7063fcd104635a790520c0a395554e5c6aaaa9354ffffffffe38d"], ["0x171d6541fa38ccfaed6dea691f5fb614cb14b4e7f4e810aa22d6108f142b85757098e38d0f671c7188e2aaaaaaaa5ed1", "0x0"]], [["0x0", "0x1a0111ea397fe69a4b1ba7b6434bacd764774b84f38512bf6730d2a0f6b0f6241eabfffeb153ffffb9feffffffffaa63"], ["0xc", "0x1a0111ea397fe69a4b1ba7b6434bacd764774b84f38512bf6730d2a0f6b0f6241eabfffeb153ffffb9feffffffffaa9f"], ["0x1", "0x0"]], [["0x1530477c7ab4113b59a4c18b076d11930f7da5d4a07f649bf54439d87d27e500fc8c25ebf8c92f6812cfc71c71c6d706", "0x1530477c7ab4113b59a4c18b076d11930f7da5d4a07f649bf54439d87d27e500fc8c25ebf8c92f6812cfc71c71c6d706"], ["0x0", "0x5c759507e8e333ebb5b7a9a47d7ed8532c52d39fd3a042a88b58423c50ae15d5c2638e343d9c71c6238aaaaaaaa97be"], ["0x11560bf17baa99bc32126fced787c88f984f87adf7ae0c7f9a208c6b4f20a4181472aaa9cb8d555526a9ffffffffc71c", "0x8ab05f8bdd54cde190937e76bc3e447cc27c3d6fbd7063fcd104635a790520c0a395554e5c6aaaa9354ffffffffe38f"], ["0x124c9ad43b6cf79bfbf7043de3811ad0761b0f37a1e26286b0e977c69aa274524e79097a56dc4bd9e1b371c71c718b10", "0x0"]], [["0x1a0111ea397fe69a4b1ba7b6434bacd764774b84f38512bf6730d2a0f6b0f6241eabfffeb153ffffb9feffffffffa8fb", "0x1a0111ea397fe69a4b1ba7b6434bacd764774b84f38512bf6730d2a0f6b0f6241eabfffeb153ffffb9feffffffffa8fb"], ["0x0", "0x1a0111ea397fe69a4b1ba7b6434bacd764774b84f38512bf6730d2a0f6b0f6241eabfffeb153ffffb9feffffffffa9d3"], ["0x12", "0x1a0111ea397fe69a4b1ba7b6434bacd764774b84f38512bf6730d2a0f6b0f6241eabfffeb153ffffb9feffffffffaa99"], ["0x1", "0x0"]]].map(e => e.map(t => ve.fromBigTuple(t.map(BigInt))))), dv = My(_e, [["0x11a05f2b1e833340b809101dd99815856b303e88a2d7005ff2627b56cdb4e2c85610c2d5f2e62d6eaeac1662734649b7", "0x17294ed3e943ab2f0588bab22147a81c7c17e75b2f6a8417f565e33c70d1e86b4838f2a6f318c356e834eef1b3cb83bb", "0xd54005db97678ec1d1048c5d10a9a1bce032473295983e56878e501ec68e25c958c3e3d2a09729fe0179f9dac9edcb0", "0x1778e7166fcc6db74e0609d307e55412d7f5e4656a8dbf25f1b33289f1b330835336e25ce3107193c5b388641d9b6861", "0xe99726a3199f4436642b4b3e4118e5499db995a1257fb3f086eeb65982fac18985a286f301e77c451154ce9ac8895d9", "0x1630c3250d7313ff01d1201bf7a74ab5db3cb17dd952799b9ed3ab9097e68f90a0870d2dcae73d19cd13c1c66f652983", "0xd6ed6553fe44d296a3726c38ae652bfb11586264f0f8ce19008e218f9c86b2a8da25128c1052ecaddd7f225a139ed84", "0x17b81e7701abdbe2e8743884d1117e53356de5ab275b4db1a682c62ef0f2753339b7c8f8c8f475af9ccb5618e3f0c88e", "0x80d3cf1f9a78fc47b90b33563be990dc43b756ce79f5574a2c596c928c5d1de4fa295f296b74e956d71986a8497e317", "0x169b1f8e1bcfa7c42e0c37515d138f22dd2ecb803a0c5c99676314baf4bb1b7fa3190b2edc0327797f241067be390c9e", "0x10321da079ce07e272d8ec09d2565b0dfa7dccdde6787f96d50af36003b14866f69b771f8c285decca67df3f1605fb7b", "0x6e08c248e260e70bd1e962381edee3d31d79d7e22c837bc23c0bf1bc24c6b68c24b1b80b64d391fa9c8ba2e8ba2d229"], ["0x8ca8d548cff19ae18b2e62f4bd3fa6f01d5ef4ba35b48ba9c9588617fc8ac62b558d681be343df8993cf9fa40d21b1c", "0x12561a5deb559c4348b4711298e536367041e8ca0cf0800c0126c2588c48bf5713daa8846cb026e9e5c8276ec82b3bff", "0xb2962fe57a3225e8137e629bff2991f6f89416f5a718cd1fca64e00b11aceacd6a3d0967c94fedcfcc239ba5cb83e19", "0x3425581a58ae2fec83aafef7c40eb545b08243f16b1655154cca8abc28d6fd04976d5243eecf5c4130de8938dc62cd8", "0x13a8e162022914a80a6f1d5f43e7a07dffdfc759a12062bb8d6b44e833b306da9bd29ba81f35781d539d395b3532a21e", "0xe7355f8e4e667b955390f7f0506c6e9395735e9ce9cad4d0a43bcef24b8982f7400d24bc4228f11c02df9a29f6304a5", "0x772caacf16936190f3e0c63e0596721570f5799af53a1894e2e073062aede9cea73b3538f0de06cec2574496ee84a3a", "0x14a7ac2a9d64a8b230b3f5b074cf01996e7f63c21bca68a81996e1cdf9822c580fa5b9489d11e2d311f7d99bbdcc5a5e", "0xa10ecf6ada54f825e920b3dafc7a3cce07f8d1d7161366b74100da67f39883503826692abba43704776ec3a79a1d641", "0x95fc13ab9e92ad4476d6e3eb3a56680f682b4ee96f7d03776df533978f31c1593174e4b4b7865002d6384d168ecdd0a", "0x000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001"], ["0x90d97c81ba24ee0259d1f094980dcfa11ad138e48a869522b52af6c956543d3cd0c7aee9b3ba3c2be9845719707bb33", "0x134996a104ee5811d51036d776fb46831223e96c254f383d0f906343eb67ad34d6c56711962fa8bfe097e75a2e41c696", "0xcc786baa966e66f4a384c86a3b49942552e2d658a31ce2c344be4b91400da7d26d521628b00523b8dfe240c72de1f6", "0x1f86376e8981c217898751ad8746757d42aa7b90eeb791c09e4a3ec03251cf9de405aba9ec61deca6355c77b0e5f4cb", "0x8cc03fdefe0ff135caf4fe2a21529c4195536fbe3ce50b879833fd221351adc2ee7f8dc099040a841b6daecf2e8fedb", "0x16603fca40634b6a2211e11db8f0a6a074a7d0d4afadb7bd76505c3d3ad5544e203f6326c95a807299b23ab13633a5f0", "0x4ab0b9bcfac1bbcb2c977d027796b3ce75bb8ca2be184cb5231413c4d634f3747a87ac2460f415ec961f8855fe9d6f2", "0x987c8d5333ab86fde9926bd2ca6c674170a05bfe3bdd81ffd038da6c26c842642f64550fedfe935a15e4ca31870fb29", "0x9fc4018bd96684be88c9e221e4da1bb8f3abd16679dc26c1e8b6e6a1f20cabe69d65201c78607a360370e577bdba587", "0xe1bba7a1186bdb5223abde7ada14a23c42a0ca7915af6fe06985e7ed1e4d43b9b3f7055dd4eba6f2bafaaebca731c30", "0x19713e47937cd1be0dfd0b8f1d43fb93cd2fcbcb6caf493fd1183e416389e61031bf3a5cce3fbafce813711ad011c132", "0x18b46a908f36f6deb918c143fed2edcc523559b8aaf0c2462e6bfe7f911f643249d9cdf41b44d606ce07c8a4d0074d8e", "0xb182cac101b9399d155096004f53f447aa7b12a3426b08ec02710e807b4633f06c851c1919211f20d4c04f00b971ef8", "0x245a394ad1eca9b72fc00ae7be315dc757b3b080d4c158013e6632d3c40659cc6cf90ad1c232a6442d9d3f5db980133", "0x5c129645e44cf1102a159f748c4a3fc5e673d81d7e86568d9ab0f5d396a7ce46ba1049b6579afb7866b1e715475224b", "0x15e6be4e990f03ce4ea50b3b42df2eb5cb181d8f84965a3957add4fa95af01b2b665027efec01c7704b456be69c8b604"], ["0x16112c4c3a9c98b252181140fad0eae9601a6de578980be6eec3232b5be72e7a07f3688ef60c206d01479253b03663c1", "0x1962d75c2381201e1a0cbd6c43c348b885c84ff731c4d59ca4a10356f453e01f78a4260763529e3532f6102c2e49a03d", "0x58df3306640da276faaae7d6e8eb15778c4855551ae7f310c35a5dd279cd2eca6757cd636f96f891e2538b53dbf67f2", "0x16b7d288798e5395f20d23bf89edb4d1d115c5dbddbcd30e123da489e726af41727364f2c28297ada8d26d98445f5416", "0xbe0e079545f43e4b00cc912f8228ddcc6d19c9f0f69bbb0542eda0fc9dec916a20b15dc0fd2ededda39142311a5001d", "0x8d9e5297186db2d9fb266eaac783182b70152c65550d881c5ecd87b6f0f5a6449f38db9dfa9cce202c6477faaf9b7ac", "0x166007c08a99db2fc3ba8734ace9824b5eecfdfa8d0cf8ef5dd365bc400a0051d5fa9c01a58b1fb93d1a1399126a775c", "0x16a3ef08be3ea7ea03bcddfabba6ff6ee5a4375efa1f4fd7feb34fd206357132b920f5b00801dee460ee415a15812ed9", "0x1866c8ed336c61231a1be54fd1d74cc4f9fb0ce4c6af5920abc5750c4bf39b4852cfe2f7bb9248836b233d9d55535d4a", "0x167a55cda70a6e1cea820597d94a84903216f763e13d87bb5308592e7ea7d4fbc7385ea3d529b35e346ef48bb8913f55", "0x4d2f259eea405bd48f010a01ad2911d9c6dd039bb61a6290e591b36e636a5c871a5c29f4f83060400f8b49cba8f6aa8", "0xaccbb67481d033ff5852c1e48c50c477f94ff8aefce42d28c0f9a88cea7913516f968986f7ebbea9684b529e2561092", "0xad6b9514c767fe3c3613144b45f1496543346d98adf02267d5ceef9a00d9b8693000763e3b90ac11e99b138573345cc", "0x2660400eb2e4f3b628bdd0d53cd76f2bf565b94e72927c1cb748df27942480e420517bd8714cc80d1fadc1326ed06f7", "0xe0fa1d816ddc03e6b24255e0d7819c171c40f65e273b853324efcd6356caa205ca2f570f13497804415473a1d634b8f", "0x000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001"]].map(e => e.map(t => BigInt(t)))), hv = qy(ve, { A: ve.create({ c0: _e.create(Ot), c1: _e.create(BigInt(240)) }), B: ve.create({ c0: _e.create(BigInt(1012)), c1: _e.create(BigInt(1012)) }), Z: ve.create({ c0: _e.create(BigInt(-2)), c1: _e.create(BigInt(-1)) }) }), pv = qy(_e, { A: _e.create(BigInt("0x144698a3b8e9433d693a02c96d4982b0ea985383ee66a8d8e8981aefd881ac98936f8da0e0f97f5cf428082d584c1d")), B: _e.create(BigInt("0x12e2908d11688030018b12e8753eee3b2016c1f0f24f4070a0b9c14fcef35ef55a23215a316ceaa5d1cc48e98e172be0")), Z: _e.create(BigInt(11)) }), { G2psi: Md, G2psi2: yv } = uv(_e, ve, ve.div(ve.ONE, ve.NONRESIDUE)), Il = Object.freeze({ DST: "BLS_SIG_BLS12381G2_XMD:SHA-256_SSWU_RO_NUL_", encodeDST: "BLS_SIG_BLS12381G2_XMD:SHA-256_SSWU_RO_NUL_", p: _e.ORDER, m: 2, k: 128, expand: "xmd", hash: Vf }), uu = ss(_e.toBytes(Ot), { infinity: !0, compressed: !0 });
function Gs(e) { e = e.slice(); const t = e[0] & 224, n = !!(t >> 7 & 1), r = !!(t >> 6 & 1), i = !!(t >> 5 & 1); return e[0] &= 31, { compressed: n, infinity: r, sort: i, value: e }; }
function ss(e, t) { if (e[0] & 224)
    throw new Error("setMask: non-empty mask"); return t.compressed && (e[0] |= 128), t.infinity && (e[0] |= 64), t.sort && (e[0] |= 32), e; }
function $d(e) { e.assertValidity(); const t = e.equals(Xt.G1.ProjectivePoint.ZERO), { x: n, y: r } = e.toAffine(); if (t)
    return uu.slice(); const i = _e.ORDER, o = !!(r * dt / i); return ss(_t(n, _e.BYTES), { compressed: !0, sort: o }); }
function zd(e) { e.assertValidity(); const t = _e.BYTES; if (e.equals(Xt.G2.ProjectivePoint.ZERO))
    return rt(uu, _t(Ot, t)); const { x: n, y: r } = e.toAffine(), { re: i, im: o } = ve.reim(n), { re: s, im: a } = ve.reim(r), h = !!((a > Ot ? a * dt : s * dt) / _e.ORDER & au), w = i; return rt(ss(_t(o, t), { sort: h, compressed: !0 }), _t(w, t)); }
const Xt = sv({ fields: { Fp: _e, Fp2: ve, Fp6: $c, Fp12: Ie, Fr: Cd }, G1: { Fp: _e, h: BigInt("0x396c8c005555e1568c00aaab0000aaab"), Gx: BigInt("0x17f1d3a73197d7942695638c4fa9ac0fc3688c4f9774b905a14e3a3f171bac586c55e83ff97a1aeffb3af00adb22c6bb"), Gy: BigInt("0x08b3f481e3aaa0f1a09e30ed741d8ae4fcf5e095d5d00af600db18cb2c04b3edd03cc744a2888ae40caa232946c5e7e1"), a: _e.ZERO, b: zo, htfDefaults: { ...Il, m: 1, DST: "BLS_SIG_BLS12381G1_XMD:SHA-256_SSWU_RO_NUL_" }, wrapPrivateKey: !0, allowInfinityPoint: !0, isTorsionFree: (e, t) => { const n = BigInt("0x5f19672fdf76ce51ba69c6076a0f77eaddb3a93be6f89688de17d813620a00022e01fffffffefffe"), r = new e(_e.mul(t.px, n), t.py, t.pz); return t.multiplyUnsafe(yr).negate().multiplyUnsafe(yr).equals(r); }, clearCofactor: (e, t) => t.multiplyUnsafe(yr).add(t), mapToCurve: e => { const { x: t, y: n } = pv(_e.create(e[0])); return dv(t, n); }, fromBytes: e => { const { compressed: t, infinity: n, sort: r, value: i } = Gs(e); if (i.length === 48 && t) {
            const o = _e.ORDER, s = wn(i), a = _e.create(s & _e.MASK);
            if (n) {
                if (a !== Ot)
                    throw new Error("G1: non-empty compressed point at infinity");
                return { x: Ot, y: Ot };
            }
            const f = _e.add(_e.pow(a, Hs), _e.create(Xt.params.G1b));
            let h = _e.sqrt(f);
            if (!h)
                throw new Error("invalid compressed G1 point");
            return h * dt / o !== BigInt(r) && (h = _e.neg(h)), { x: _e.create(a), y: _e.create(h) };
        }
        else if (i.length === 96 && !t) {
            const o = wn(i.subarray(0, _e.BYTES)), s = wn(i.subarray(_e.BYTES));
            if (n) {
                if (o !== Ot || s !== Ot)
                    throw new Error("G1: non-empty point at infinity");
                return Xt.G1.ProjectivePoint.ZERO.toAffine();
            }
            return { x: _e.create(o), y: _e.create(s) };
        }
        else
            throw new Error("invalid point G1, expected 48/96 bytes"); }, toBytes: (e, t, n) => { const r = t.equals(e.ZERO), { x: i, y: o } = t.toAffine(); if (n) {
            if (r)
                return uu.slice();
            const s = _e.ORDER, a = !!(o * dt / s);
            return ss(_t(i, _e.BYTES), { compressed: !0, sort: a });
        }
        else
            return r ? rt(new Uint8Array([64]), new Uint8Array(2 * _e.BYTES - 1)) : rt(_t(i, _e.BYTES), _t(o, _e.BYTES)); }, ShortSignature: { fromHex(e) { const { infinity: t, sort: n, value: r } = Gs(Ft("signatureHex", e, 48)), i = _e.ORDER, o = wn(r); if (t)
                return Xt.G1.ProjectivePoint.ZERO; const s = _e.create(o & _e.MASK), a = _e.add(_e.pow(s, Hs), _e.create(Xt.params.G1b)); let f = _e.sqrt(a); if (!f)
                throw new Error("invalid compressed G1 point"); const h = BigInt(n); f * dt / i !== h && (f = _e.neg(f)); const w = Xt.G1.ProjectivePoint.fromAffine({ x: s, y: f }); return w.assertValidity(), w; }, toRawBytes(e) { return $d(e); }, toHex(e) { return li($d(e)); } } }, G2: { Fp: ve, h: BigInt("0x5d543a95414e7f1091d50792876a202cd91de4547085abaa68a205b2e5a7ddfa628f1cb4d9e82ef21537e293a6691ae1616ec6e786f0c70cf1c38e31c7238e5"), Gx: ve.fromBigTuple([BigInt("0x024aa2b2f08f0a91260805272dc51051c6e47ad4fa403b02b4510b647ae3d1770bac0326a805bbefd48056c8c121bdb8"), BigInt("0x13e02b6052719f607dacd3a088274f65596bd0d09920b61ab5da61bbdc7f5049334cf11213945d57e5ac7d055d042b7e")]), Gy: ve.fromBigTuple([BigInt("0x0ce5d527727d6e118cc9cdc6da2e351aadfd9baa8cbdd3a76d429a695160d12c923ac9cc3baca289e193548608b82801"), BigInt("0x0606c4a02ea734cc32acd2b02bc28b99cb3e287e85a763af267492ab572e99ab3f370d275cec1da1aaa9075ff05f79be")]), a: ve.ZERO, b: ve.fromBigTuple([zo, zo]), hEff: BigInt("0xbc69f08f2ee75b3584c6a0ea91b352888e2a8e9145ad7689986ff031508ffe1329c2f178731db956d82bf015d1212b02ec0ec69d7477c1ae954cbc06689f6a359894c0adebbf6b4e8020005aaa95551"), htfDefaults: { ...Il }, wrapPrivateKey: !0, allowInfinityPoint: !0, mapToCurve: e => { const { x: t, y: n } = hv(ve.fromBigTuple(e)); return fv(t, n); }, isTorsionFree: (e, t) => t.multiplyUnsafe(yr).negate().equals(Md(e, t)), clearCofactor: (e, t) => { const n = yr; let r = t.multiplyUnsafe(n).negate(), i = Md(e, t), o = t.double(); return o = yv(e, o), o = o.subtract(i), i = r.add(i), i = i.multiplyUnsafe(n).negate(), o = o.add(i), o = o.subtract(r), o.subtract(t); }, fromBytes: e => { const { compressed: t, infinity: n, sort: r, value: i } = Gs(e); if (!t && !n && r || !t && n && r || r && n && t)
            throw new Error("invalid encoding flag: " + (e[0] & 224)); const o = _e.BYTES, s = (a, f, h) => wn(a.slice(f, h)); if (i.length === 96 && t) {
            const a = Xt.params.G2b, f = _e.ORDER;
            if (n) {
                if (i.reduce((O, M) => O !== 0 ? M + 1 : M, 0) > 0)
                    throw new Error("invalid compressed G2 point");
                return { x: ve.ZERO, y: ve.ZERO };
            }
            const h = s(i, 0, o), w = s(i, o, 2 * o), b = ve.create({ c0: _e.create(w), c1: _e.create(h) }), x = ve.add(ve.pow(b, Hs), a);
            let B = ve.sqrt(x);
            const y = B.c1 === Ot ? B.c0 * dt / f : B.c1 * dt / f ? au : Ot;
            return B = r && y > 0 ? B : ve.neg(B), { x: b, y: B };
        }
        else if (i.length === 192 && !t) {
            if (n) {
                if (i.reduce((b, x) => b !== 0 ? x + 1 : x, 0) > 0)
                    throw new Error("invalid uncompressed G2 point");
                return { x: ve.ZERO, y: ve.ZERO };
            }
            const a = s(i, 0, o), f = s(i, o, 2 * o), h = s(i, 2 * o, 3 * o), w = s(i, 3 * o, 4 * o);
            return { x: ve.fromBigTuple([f, a]), y: ve.fromBigTuple([w, h]) };
        }
        else
            throw new Error("invalid point G2, expected 96/192 bytes"); }, toBytes: (e, t, n) => { const { BYTES: r, ORDER: i } = _e, o = t.equals(e.ZERO), { x: s, y: a } = t.toAffine(); if (n) {
            if (o)
                return rt(uu, _t(Ot, r));
            const f = !!(a.c1 === Ot ? a.c0 * dt / i : a.c1 * dt / i);
            return rt(ss(_t(s.c1, r), { compressed: !0, sort: f }), _t(s.c0, r));
        }
        else {
            if (o)
                return rt(new Uint8Array([64]), new Uint8Array(4 * r - 1));
            const { re: f, im: h } = ve.reim(s), { re: w, im: b } = ve.reim(a);
            return rt(_t(h, r), _t(f, r), _t(b, r), _t(w, r));
        } }, Signature: { fromHex(e) { const { infinity: t, sort: n, value: r } = Gs(Ft("signatureHex", e)), i = _e.ORDER, o = r.length / 2; if (o !== 48 && o !== 96)
                throw new Error("invalid compressed signature length, must be 96 or 192"); const s = wn(r.slice(0, o)), a = wn(r.slice(o)); if (t)
                return Xt.G2.ProjectivePoint.ZERO; const f = _e.create(s & _e.MASK), h = _e.create(a), w = ve.create({ c0: h, c1: f }), b = ve.add(ve.pow(w, Hs), Xt.params.G2b); let x = ve.sqrt(b); if (!x)
                throw new Error("Failed to find a square root"); const { re: B, im: y } = ve.reim(x), O = BigInt(n), M = y > Ot && y * dt / i !== O, A = y === Ot && B * dt / i !== O; (M || A) && (x = ve.neg(x)); const v = Xt.G2.ProjectivePoint.fromAffine({ x: w, y: x }); return v.assertValidity(), v; }, toRawBytes(e) { return zd(e); }, toHex(e) { return li(zd(e)); } } }, params: { ateLoopSize: yr, r: Cd.ORDER, xNegative: !0, twistType: "multiplicative" }, htfDefaults: Il, hash: Vf, randomBytes: m1 });
function mv(e, t, n) { const r = typeof e == "string" ? e : pt(e), i = typeof t == "string" ? t : pt(t), o = typeof n == "string" ? n : pt(n); return Xt.verifyShortSignature(i, o, r); }
const Hy = e => ft(new oo(e)), Xf = e => { const t = Hy(e); return new Date(Number(t) / 1e6); };
var gv = globalThis && globalThis.__classPrivateFieldSet || function (e, t, n, r, i) { if (r === "m")
    throw new TypeError("Private method is not writable"); if (r === "a" && !i)
    throw new TypeError("Private accessor was defined without a setter"); if (typeof t == "function" ? e !== t || !i : !t.has(e))
    throw new TypeError("Cannot write private member to an object whose class did not declare it"); return r === "a" ? i.call(e, n) : i ? i.value = n : t.set(e, n), n; }, wv = globalThis && globalThis.__classPrivateFieldGet || function (e, t, n, r) { if (n === "a" && !r)
    throw new TypeError("Private accessor was defined without a getter"); if (typeof t == "function" ? e !== t || !r : !t.has(e))
    throw new TypeError("Cannot read private member from an object whose class did not declare it"); return n === "m" ? r : n === "a" ? r.call(e) : r ? r.value : t.get(e); }, ya;
class Un extends Qe {
    constructor(t) { super(`Invalid certificate: ${t}`); }
}
var Gt;
(function (e) { e[e.Empty = 0] = "Empty", e[e.Fork = 1] = "Fork", e[e.Labeled = 2] = "Labeled", e[e.Leaf = 3] = "Leaf", e[e.Pruned = 4] = "Pruned"; })(Gt || (Gt = {}));
function _v(e, t) { const n = new Uint8Array(e), r = new Uint8Array(t); for (let i = 0; i < n.length; i++)
    if (n[i] > r[i])
        return !0; return !1; }
class ei {
    constructor(t, n, r, i, o = 5, s = !1) { this._rootKey = n, this._canisterId = r, this._blsVerify = i, this._maxAgeInMinutes = o, ya.set(this, !1), gv(this, ya, s, "f"), this.cert = Zn(new Uint8Array(t)); }
    static async create(t) { const n = ei.createUnverified(t); return await n.verify(), n; }
    static createUnverified(t) { let n = t.blsVerify; return n || (n = mv), new ei(t.certificate, t.rootKey, t.canisterId, n, t.maxAgeInMinutes, t.disableTimeVerification); }
    lookup(t) { return to(t, this.cert.tree); }
    lookup_label(t) { return this.lookup([t]); }
    async verify() { const t = await ma(this.cert.tree), n = await this._checkDelegationAndGetKey(this.cert.delegation), r = this.cert.signature, i = xv(n), o = zn(bo("ic-state-root"), t); let s = !1; const a = nn(this.lookup(["time"])); if (!a)
        throw new Un("Certificate does not contain a time"); if (!wv(this, ya, "f")) {
        const h = this._maxAgeInMinutes * 60 * 1e3, w = Date.now(), b = w - h, x = w + 3e5, B = Xf(a);
        if (B.getTime() < b)
            throw new Un(`Certificate is signed more than ${this._maxAgeInMinutes} minutes in the past. Certificate time: ` + B.toISOString() + " Current time: " + new Date(w).toISOString());
        if (B.getTime() > x)
            throw new Un("Certificate is signed more than 5 minutes in the future. Certificate time: " + B.toISOString() + " Current time: " + new Date(w).toISOString());
    } try {
        s = await this._blsVerify(new Uint8Array(i), new Uint8Array(r), new Uint8Array(o));
    }
    catch {
        s = !1;
    } if (!s)
        throw new Un("Signature verification failed"); }
    async _checkDelegationAndGetKey(t) { if (!t)
        return this._rootKey; const n = await ei.createUnverified({ certificate: t.certificate, rootKey: this._rootKey, canisterId: this._canisterId, blsVerify: this._blsVerify, maxAgeInMinutes: 1 / 0 }); if (n.cert.delegation)
        throw new Un("Delegation certificates cannot be nested"); if (await n.verify(), this._canisterId.toString() !== wx && !Gy({ canisterId: this._canisterId, subnetId: Ae.fromUint8Array(new Uint8Array(t.subnet_id)), tree: n.cert.tree }))
        throw new Un(`Canister ${this._canisterId} not in range of delegations for subnet 0x${pt(t.subnet_id)}`); const r = nn(n.lookup(["subnet", t.subnet_id, "public_key"])); if (!r)
        throw new Error(`Could not find subnet key for subnet 0x${pt(t.subnet_id)}`); return r; }
}
ya = new WeakMap;
const go = eu("308182301d060d2b0601040182dc7c0503010201060c2b0601040182dc7c05030201036100"), vv = 96;
function xv(e) { const t = go.byteLength + vv; if (e.byteLength !== t)
    throw new TypeError(`BLS DER-encoded public key must be ${t} bytes long`); const n = e.slice(0, go.byteLength); if (!Bu(n, go))
    throw new TypeError(`BLS DER-encoded public key is invalid. Expect the following prefix: ${go}, but get ${n}`); return e.slice(go.byteLength); }
function nn(e) { if (e.status === st.Found) {
    if (e.value instanceof ArrayBuffer)
        return e.value;
    if (e.value instanceof Uint8Array)
        return e.value.buffer;
} }
async function ma(e) { switch (e[0]) {
    case Gt.Empty: return vn(bo("ic-hashtree-empty"));
    case Gt.Pruned: return e[1];
    case Gt.Leaf: return vn(zn(bo("ic-hashtree-leaf"), e[1]));
    case Gt.Labeled: return vn(zn(bo("ic-hashtree-labeled"), e[1], await ma(e[2])));
    case Gt.Fork: return vn(zn(bo("ic-hashtree-fork"), await ma(e[1]), await ma(e[2])));
    default: throw new Error("unreachable");
} }
function bo(e) { const t = new Uint8Array([e.length]), n = new TextEncoder().encode(e); return zn(t, n); }
var st;
(function (e) { e.Unknown = "unknown", e.Absent = "absent", e.Found = "found"; })(st || (st = {}));
var Wn;
(function (e) { e.Less = "less", e.Greater = "greater"; })(Wn || (Wn = {}));
function to(e, t) { if (e.length === 0)
    switch (t[0]) {
        case Gt.Leaf: {
            if (!t[1])
                throw new Error("Invalid tree structure for leaf");
            return t[1] instanceof ArrayBuffer ? { status: st.Found, value: t[1] } : t[1] instanceof Uint8Array ? { status: st.Found, value: t[1].buffer } : { status: st.Found, value: t[1] };
        }
        default: return { status: st.Found, value: t };
    } const n = typeof e[0] == "string" ? new TextEncoder().encode(e[0]) : e[0], r = ga(n, t); switch (r.status) {
    case st.Found: return to(e.slice(1), r.value);
    case Wn.Greater:
    case Wn.Less: return { status: st.Absent };
    default: return r;
} }
function zc(e) { switch (e[0]) {
    case Gt.Empty: return [];
    case Gt.Fork: return zc(e[1]).concat(zc(e[2]));
    default: return [e];
} }
function ga(e, t) { switch (t[0]) {
    case Gt.Labeled: return _v(e, t[1]) ? { status: Wn.Greater } : Bu(e, t[1]) ? { status: st.Found, value: t[2] } : { status: Wn.Less };
    case Gt.Fork:
        const n = ga(e, t[1]);
        switch (n.status) {
            case Wn.Greater: {
                const r = ga(e, t[2]);
                return r.status === Wn.Less ? { status: st.Absent } : r;
            }
            case st.Unknown: {
                let r = ga(e, t[2]);
                return r.status === Wn.Less ? { status: st.Unknown } : r;
            }
            default: return n;
        }
    case Gt.Pruned: return { status: st.Unknown };
    default: return { status: st.Absent };
} }
function Gy(e) { const { canisterId: t, subnetId: n, tree: r } = e, i = to(["subnet", n.toUint8Array(), "canister_ranges"], r); if (i.status !== st.Found || !(i.value instanceof ArrayBuffer))
    throw new Error(`Could not find canister ranges for subnet ${n}`); return Zn(i.value).map(f => [Ae.fromUint8Array(f[0]), Ae.fromUint8Array(f[1])]).some(f => f[0].ltEq(t) && f[1].gtEq(t)); }
class Ev {
    constructor(t, n, r) { this.key = t, this.path = n, this.decodeStrategy = r; }
}
const Wy = async (e) => { const { agent: t, paths: n } = e, r = Ae.from(e.canisterId), i = [...new Set(n)], o = i.map(f => Vc(f, r)), s = new Map, a = i.map((f, h) => (async () => { var w; try {
    const b = await t.readState(r, { paths: [o[h]] });
    if (t.rootKey == null)
        throw new Error("Agent is missing root key");
    const x = await ei.create({ certificate: b.certificate, rootKey: t.rootKey, canisterId: r, disableTimeVerification: !0 }), B = (M, A) => { if (A === "subnet") {
        if (t.rootKey == null)
            throw new Error("Agent is missing root key");
        const v = Dy(b.certificate, r, t.rootKey);
        return { path: A, data: v };
    }
    else
        return { path: A, data: nn(M.lookup(Vc(A, r))) }; }, { path: y, data: O } = B(x, i[h]);
    if (!O)
        console.warn(`Expected to find result for path ${y}, but instead found nothing.`), typeof y == "string" ? s.set(y, null) : s.set(y.key, null);
    else
        switch (y) {
            case "time": {
                s.set(y, Xf(O));
                break;
            }
            case "controllers": {
                s.set(y, Sv(O));
                break;
            }
            case "module_hash": {
                s.set(y, Vd(O));
                break;
            }
            case "subnet": {
                s.set(y, O);
                break;
            }
            case "candid": {
                s.set(y, new TextDecoder().decode(O));
                break;
            }
            default: if (typeof y != "string" && "key" in y && "path" in y)
                switch (y.decodeStrategy) {
                    case "raw":
                        s.set(y.key, O);
                        break;
                    case "leb128": {
                        s.set(y.key, Hy(O));
                        break;
                    }
                    case "cbor": {
                        s.set(y.key, Yy(O));
                        break;
                    }
                    case "hex": {
                        s.set(y.key, Vd(O));
                        break;
                    }
                    case "utf-8": s.set(y.key, bv(O));
                }
        }
}
catch (b) {
    if (!((w = b == null ? void 0 : b.message) === null || w === void 0) && w.includes("Invalid certificate"))
        throw new Qe(b.message);
    typeof f != "string" && "key" in f && "path" in f ? s.set(f.key, null) : s.set(f, null), console.group(), console.warn(`Expected to find result for path ${f}, but instead found nothing.`), console.warn(b), console.groupEnd();
} })()); return await Promise.all(a), s; }, Dy = (e, t, n) => { if (!t._isPrincipal)
    throw new Error("Invalid canisterId"); const r = Zn(new Uint8Array(e)), i = r.tree; let o = r.delegation, s; if (o && o.subnet_id ? s = Ae.fromUint8Array(new Uint8Array(o.subnet_id)) : !o && typeof n < "u" ? (s = Ae.selfAuthenticating(new Uint8Array(n)), o = { subnet_id: s.toUint8Array(), certificate: new ArrayBuffer(0) }) : (s = Ae.selfAuthenticating(Ae.fromText("tdb26-jop6k-aogll-7ltgs-eruif-6kk7m-qpktf-gdiqx-mxtrf-vb5e6-eqe").toUint8Array()), o = { subnet_id: s.toUint8Array(), certificate: new ArrayBuffer(0) }), !Gy({ canisterId: t, subnetId: s, tree: i }))
    throw new Error("Canister not in range"); const f = to(["subnet", o.subnet_id, "node"], i); if (f.status !== st.Found)
    throw new Error("Node not found"); if (f.value instanceof ArrayBuffer)
    throw new Error("Invalid node tree"); const h = zc(f.value), w = new Map; return h.forEach(b => { const x = Ae.from(new Uint8Array(b[1])).toText(), B = to(["public_key"], b[2]); if (B.status !== st.Found)
    throw new Error("Public key not found"); const y = B.value; if (y.byteLength !== 44)
    throw new Error("Invalid public key length"); w.set(x, y); }), { subnetId: Ae.fromUint8Array(new Uint8Array(o.subnet_id)).toText(), nodeKeys: w }; }, Vc = (e, t) => { const n = new TextEncoder, r = o => new DataView(n.encode(o).buffer).buffer, i = new DataView(t.toUint8Array().buffer).buffer; switch (e) {
    case "time": return [r("time")];
    case "controllers": return [r("canister"), i, r("controllers")];
    case "module_hash": return [r("canister"), i, r("module_hash")];
    case "subnet": return [r("subnet")];
    case "candid": return [r("canister"), i, r("metadata"), r("candid:service")];
    default: if ("key" in e && "path" in e)
        if (typeof e.path == "string" || e.path instanceof ArrayBuffer) {
            const o = e.path, s = typeof o == "string" ? r(o) : o;
            return [r("canister"), i, r("metadata"), s];
        }
        else
            return e.path;
} throw new Error(`An unexpeected error was encountered while encoding your path for canister status. Please ensure that your path, ${e} was formatted correctly.`); }, Vd = e => pt(e), Yy = e => Zn(e), bv = e => new TextDecoder().decode(e), Sv = e => Yy(e).map(n => Ae.fromUint8Array(new Uint8Array(n))), Tv = Object.freeze(Object.defineProperty({ __proto__: null, CustomPath: Ev, encodePath: Vc, fetchNodeKeys: Dy, request: Wy }, Symbol.toStringTag, { value: "Module" })), Ws = BigInt(2 ** 32 - 1), jc = BigInt(32);
function Ky(e, t = !1) { return t ? { h: Number(e & Ws), l: Number(e >> jc & Ws) } : { h: Number(e >> jc & Ws) | 0, l: Number(e & Ws) | 0 }; }
function Bv(e, t = !1) { let n = new Uint32Array(e.length), r = new Uint32Array(e.length); for (let i = 0; i < e.length; i++) {
    const { h: o, l: s } = Ky(e[i], t);
    [n[i], r[i]] = [o, s];
} return [n, r]; }
const Av = (e, t) => BigInt(e >>> 0) << jc | BigInt(t >>> 0), Nv = (e, t, n) => e >>> n, kv = (e, t, n) => e << 32 - n | t >>> n, Iv = (e, t, n) => e >>> n | t << 32 - n, Rv = (e, t, n) => e << 32 - n | t >>> n, Ov = (e, t, n) => e << 64 - n | t >>> n - 32, Uv = (e, t, n) => e >>> n - 32 | t << 64 - n, Fv = (e, t) => t, Pv = (e, t) => e, Cv = (e, t, n) => e << n | t >>> 32 - n, Mv = (e, t, n) => t << n | e >>> 32 - n, $v = (e, t, n) => t << n - 32 | e >>> 64 - n, zv = (e, t, n) => e << n - 32 | t >>> 64 - n;
function Vv(e, t, n, r) { const i = (t >>> 0) + (r >>> 0); return { h: e + n + (i / 2 ** 32 | 0) | 0, l: i | 0 }; }
const jv = (e, t, n) => (e >>> 0) + (t >>> 0) + (n >>> 0), Lv = (e, t, n, r) => t + n + r + (e / 2 ** 32 | 0) | 0, qv = (e, t, n, r) => (e >>> 0) + (t >>> 0) + (n >>> 0) + (r >>> 0), Hv = (e, t, n, r, i) => t + n + r + i + (e / 2 ** 32 | 0) | 0, Gv = (e, t, n, r, i) => (e >>> 0) + (t >>> 0) + (n >>> 0) + (r >>> 0) + (i >>> 0), Wv = (e, t, n, r, i, o) => t + n + r + i + o + (e / 2 ** 32 | 0) | 0, Dv = { fromBig: Ky, split: Bv, toBig: Av, shrSH: Nv, shrSL: kv, rotrSH: Iv, rotrSL: Rv, rotrBH: Ov, rotrBL: Uv, rotr32H: Fv, rotr32L: Pv, rotlSH: Cv, rotlSL: Mv, rotlBH: $v, rotlBL: zv, add: Vv, add3L: jv, add3H: Lv, add4L: qv, add4H: Hv, add5H: Wv, add5L: Gv }, Te = Dv, [Yv, Kv] = (() => Te.split(["0x428a2f98d728ae22", "0x7137449123ef65cd", "0xb5c0fbcfec4d3b2f", "0xe9b5dba58189dbbc", "0x3956c25bf348b538", "0x59f111f1b605d019", "0x923f82a4af194f9b", "0xab1c5ed5da6d8118", "0xd807aa98a3030242", "0x12835b0145706fbe", "0x243185be4ee4b28c", "0x550c7dc3d5ffb4e2", "0x72be5d74f27b896f", "0x80deb1fe3b1696b1", "0x9bdc06a725c71235", "0xc19bf174cf692694", "0xe49b69c19ef14ad2", "0xefbe4786384f25e3", "0x0fc19dc68b8cd5b5", "0x240ca1cc77ac9c65", "0x2de92c6f592b0275", "0x4a7484aa6ea6e483", "0x5cb0a9dcbd41fbd4", "0x76f988da831153b5", "0x983e5152ee66dfab", "0xa831c66d2db43210", "0xb00327c898fb213f", "0xbf597fc7beef0ee4", "0xc6e00bf33da88fc2", "0xd5a79147930aa725", "0x06ca6351e003826f", "0x142929670a0e6e70", "0x27b70a8546d22ffc", "0x2e1b21385c26c926", "0x4d2c6dfc5ac42aed", "0x53380d139d95b3df", "0x650a73548baf63de", "0x766a0abb3c77b2a8", "0x81c2c92e47edaee6", "0x92722c851482353b", "0xa2bfe8a14cf10364", "0xa81a664bbc423001", "0xc24b8b70d0f89791", "0xc76c51a30654be30", "0xd192e819d6ef5218", "0xd69906245565a910", "0xf40e35855771202a", "0x106aa07032bbd1b8", "0x19a4c116b8d2d0c8", "0x1e376c085141ab53", "0x2748774cdf8eeb99", "0x34b0bcb5e19b48a8", "0x391c0cb3c5c95a63", "0x4ed8aa4ae3418acb", "0x5b9cca4f7763e373", "0x682e6ff3d6b2b8a3", "0x748f82ee5defb2fc", "0x78a5636f43172f60", "0x84c87814a1f0ab72", "0x8cc702081a6439ec", "0x90befffa23631e28", "0xa4506cebde82bde9", "0xbef9a3f7b2c67915", "0xc67178f2e372532b", "0xca273eceea26619c", "0xd186b8c721c0c207", "0xeada7dd6cde0eb1e", "0xf57d4f7fee6ed178", "0x06f067aa72176fba", "0x0a637dc5a2c898a6", "0x113f9804bef90dae", "0x1b710b35131c471b", "0x28db77f523047d84", "0x32caab7b40c72493", "0x3c9ebe0a15c9bebc", "0x431d67c49c100d4c", "0x4cc5d4becb3e42b6", "0x597f299cfc657e2a", "0x5fcb6fab3ad6faec", "0x6c44198c4a475817"].map(e => BigInt(e))))(), lr = new Uint32Array(80), cr = new Uint32Array(80);
class Zv extends g1 {
    constructor() { super(128, 64, 16, !1), this.Ah = 1779033703, this.Al = -205731576, this.Bh = -1150833019, this.Bl = -2067093701, this.Ch = 1013904242, this.Cl = -23791573, this.Dh = -1521486534, this.Dl = 1595750129, this.Eh = 1359893119, this.El = -1377402159, this.Fh = -1694144372, this.Fl = 725511199, this.Gh = 528734635, this.Gl = -79577749, this.Hh = 1541459225, this.Hl = 327033209; }
    get() { const { Ah: t, Al: n, Bh: r, Bl: i, Ch: o, Cl: s, Dh: a, Dl: f, Eh: h, El: w, Fh: b, Fl: x, Gh: B, Gl: y, Hh: O, Hl: M } = this; return [t, n, r, i, o, s, a, f, h, w, b, x, B, y, O, M]; }
    set(t, n, r, i, o, s, a, f, h, w, b, x, B, y, O, M) { this.Ah = t | 0, this.Al = n | 0, this.Bh = r | 0, this.Bl = i | 0, this.Ch = o | 0, this.Cl = s | 0, this.Dh = a | 0, this.Dl = f | 0, this.Eh = h | 0, this.El = w | 0, this.Fh = b | 0, this.Fl = x | 0, this.Gh = B | 0, this.Gl = y | 0, this.Hh = O | 0, this.Hl = M | 0; }
    process(t, n) { for (let E = 0; E < 16; E++, n += 4)
        lr[E] = t.getUint32(n), cr[E] = t.getUint32(n += 4); for (let E = 16; E < 80; E++) {
        const z = lr[E - 15] | 0, I = cr[E - 15] | 0, L = Te.rotrSH(z, I, 1) ^ Te.rotrSH(z, I, 8) ^ Te.shrSH(z, I, 7), V = Te.rotrSL(z, I, 1) ^ Te.rotrSL(z, I, 8) ^ Te.shrSL(z, I, 7), W = lr[E - 2] | 0, te = cr[E - 2] | 0, K = Te.rotrSH(W, te, 19) ^ Te.rotrBH(W, te, 61) ^ Te.shrSH(W, te, 6), de = Te.rotrSL(W, te, 19) ^ Te.rotrBL(W, te, 61) ^ Te.shrSL(W, te, 6), he = Te.add4L(V, de, cr[E - 7], cr[E - 16]), U = Te.add4H(he, L, K, lr[E - 7], lr[E - 16]);
        lr[E] = U | 0, cr[E] = he | 0;
    } let { Ah: r, Al: i, Bh: o, Bl: s, Ch: a, Cl: f, Dh: h, Dl: w, Eh: b, El: x, Fh: B, Fl: y, Gh: O, Gl: M, Hh: A, Hl: v } = this; for (let E = 0; E < 80; E++) {
        const z = Te.rotrSH(b, x, 14) ^ Te.rotrSH(b, x, 18) ^ Te.rotrBH(b, x, 41), I = Te.rotrSL(b, x, 14) ^ Te.rotrSL(b, x, 18) ^ Te.rotrBL(b, x, 41), L = b & B ^ ~b & O, V = x & y ^ ~x & M, W = Te.add5L(v, I, V, Kv[E], cr[E]), te = Te.add5H(W, A, z, L, Yv[E], lr[E]), K = W | 0, de = Te.rotrSH(r, i, 28) ^ Te.rotrBH(r, i, 34) ^ Te.rotrBH(r, i, 39), he = Te.rotrSL(r, i, 28) ^ Te.rotrBL(r, i, 34) ^ Te.rotrBL(r, i, 39), U = r & o ^ r & a ^ o & a, $ = i & s ^ i & f ^ s & f;
        A = O | 0, v = M | 0, O = B | 0, M = y | 0, B = b | 0, y = x | 0, { h: b, l: x } = Te.add(h | 0, w | 0, te | 0, K | 0), h = a | 0, w = f | 0, a = o | 0, f = s | 0, o = r | 0, s = i | 0;
        const X = Te.add3L(K, he, $);
        r = Te.add3H(X, te, de, U), i = X | 0;
    } ({ h: r, l: i } = Te.add(this.Ah | 0, this.Al | 0, r | 0, i | 0)), { h: o, l: s } = Te.add(this.Bh | 0, this.Bl | 0, o | 0, s | 0), { h: a, l: f } = Te.add(this.Ch | 0, this.Cl | 0, a | 0, f | 0), { h, l: w } = Te.add(this.Dh | 0, this.Dl | 0, h | 0, w | 0), { h: b, l: x } = Te.add(this.Eh | 0, this.El | 0, b | 0, x | 0), { h: B, l: y } = Te.add(this.Fh | 0, this.Fl | 0, B | 0, y | 0), { h: O, l: M } = Te.add(this.Gh | 0, this.Gl | 0, O | 0, M | 0), { h: A, l: v } = Te.add(this.Hh | 0, this.Hl | 0, A | 0, v | 0), this.set(r, i, o, s, a, f, h, w, b, x, B, y, O, M, A, v); }
    roundClean() { lr.fill(0), cr.fill(0); }
    destroy() { this.buffer.fill(0), this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0); }
}
const Qv = zf(() => new Zv); /*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const fn = BigInt(0), $t = BigInt(1), Ds = BigInt(2), Xv = BigInt(8), Jv = { zip215: !0 };
function ex(e) { const t = Ly(e); return gs(e, { hash: "function", a: "bigint", d: "bigint", randomBytes: "function" }, { adjustScalarBytes: "function", domain: "function", uvRatio: "function", mapToCurve: "function" }), Object.freeze({ ...t }); }
function tx(e) { const t = ex(e), { Fp: n, n: r, prehash: i, hash: o, randomBytes: s, nByteLength: a, h: f } = t, h = Ds << BigInt(a * 8) - $t, w = n.create, b = ws(t.n, t.nBitLength), x = t.uvRatio || ((Z, D) => { try {
    return { isValid: !0, value: n.sqrt(Z * n.inv(D)) };
}
catch {
    return { isValid: !1, value: fn };
} }), B = t.adjustScalarBytes || (Z => Z), y = t.domain || ((Z, D, H) => { if (Co("phflag", H), D.length || H)
    throw new Error("Contexts/pre-hash are not supported"); return Z; }); function O(Z, D) { wr("coordinate " + Z, D, fn, h); } function M(Z) { if (!(Z instanceof E))
    throw new Error("ExtendedPoint expected"); } const A = is((Z, D) => { const { ex: H, ey: ee, ez: oe } = Z, re = Z.is0(); D == null && (D = re ? Xv : n.inv(oe)); const ue = w(H * D), ne = w(ee * D), _ = w(oe * D); if (re)
    return { x: fn, y: $t }; if (_ !== $t)
    throw new Error("invZ was invalid"); return { x: ue, y: ne }; }), v = is(Z => { const { a: D, d: H } = t; if (Z.is0())
    throw new Error("bad point: ZERO"); const { ex: ee, ey: oe, ez: re, et: ue } = Z, ne = w(ee * ee), _ = w(oe * oe), se = w(re * re), ce = w(se * se), ye = w(ne * D), ie = w(se * w(ye + _)), fe = w(ce + w(H * w(ne * _))); if (ie !== fe)
    throw new Error("bad point: equation left != right (1)"); const S = w(ee * oe), N = w(re * ue); if (S !== N)
    throw new Error("bad point: equation left != right (2)"); return !0; }); class E {
    constructor(D, H, ee, oe) { this.ex = D, this.ey = H, this.ez = ee, this.et = oe, O("x", D), O("y", H), O("z", ee), O("t", oe), Object.freeze(this); }
    get x() { return this.toAffine().x; }
    get y() { return this.toAffine().y; }
    static fromAffine(D) { if (D instanceof E)
        throw new Error("extended point not allowed"); const { x: H, y: ee } = D || {}; return O("x", H), O("y", ee), new E(H, ee, $t, w(H * ee)); }
    static normalizeZ(D) { const H = n.invertBatch(D.map(ee => ee.ez)); return D.map((ee, oe) => ee.toAffine(H[oe])).map(E.fromAffine); }
    static msm(D, H) { return jy(E, b, D, H); }
    _setWindowSize(D) { L.setWindowSize(this, D); }
    assertValidity() { v(this); }
    equals(D) { M(D); const { ex: H, ey: ee, ez: oe } = this, { ex: re, ey: ue, ez: ne } = D, _ = w(H * ne), se = w(re * oe), ce = w(ee * ne), ye = w(ue * oe); return _ === se && ce === ye; }
    is0() { return this.equals(E.ZERO); }
    negate() { return new E(w(-this.ex), this.ey, this.ez, w(-this.et)); }
    double() { const { a: D } = t, { ex: H, ey: ee, ez: oe } = this, re = w(H * H), ue = w(ee * ee), ne = w(Ds * w(oe * oe)), _ = w(D * re), se = H + ee, ce = w(w(se * se) - re - ue), ye = _ + ue, ie = ye - ne, fe = _ - ue, S = w(ce * ie), N = w(ye * fe), R = w(ce * fe), q = w(ie * ye); return new E(S, N, q, R); }
    add(D) { M(D); const { a: H, d: ee } = t, { ex: oe, ey: re, ez: ue, et: ne } = this, { ex: _, ey: se, ez: ce, et: ye } = D; if (H === BigInt(-1)) {
        const T = w((re - oe) * (se + _)), F = w((re + oe) * (se - _)), Y = w(F - T);
        if (Y === fn)
            return this.double();
        const ae = w(ue * Ds * ye), me = w(ne * Ds * ce), we = me + ae, be = F + T, m = me - ae, c = w(we * Y), d = w(be * m), k = w(we * m), j = w(Y * be);
        return new E(c, d, j, k);
    } const ie = w(oe * _), fe = w(re * se), S = w(ne * ee * ye), N = w(ue * ce), R = w((oe + re) * (_ + se) - ie - fe), q = N - S, C = N + S, G = w(fe - H * ie), p = w(R * q), u = w(C * G), l = w(R * G), g = w(q * C); return new E(p, u, g, l); }
    subtract(D) { return this.add(D.negate()); }
    wNAF(D) { return L.wNAFCached(this, D, E.normalizeZ); }
    multiply(D) { const H = D; wr("scalar", H, $t, r); const { p: ee, f: oe } = this.wNAF(H); return E.normalizeZ([ee, oe])[0]; }
    multiplyUnsafe(D, H = E.ZERO) { const ee = D; return wr("scalar", ee, fn, r), ee === fn ? I : this.is0() || ee === $t ? this : L.wNAFCachedUnsafe(this, ee, E.normalizeZ, H); }
    isSmallOrder() { return this.multiplyUnsafe(f).is0(); }
    isTorsionFree() { return L.unsafeLadder(this, r).is0(); }
    toAffine(D) { return A(this, D); }
    clearCofactor() { const { h: D } = t; return D === $t ? this : this.multiplyUnsafe(D); }
    static fromHex(D, H = !1) { const { d: ee, a: oe } = t, re = n.BYTES; D = Ft("pointHex", D, re), Co("zip215", H); const ue = D.slice(), ne = D[re - 1]; ue[re - 1] = ne & -129; const _ = Mo(ue), se = H ? h : n.ORDER; wr("pointHex.y", _, fn, se); const ce = w(_ * _), ye = w(ce - $t), ie = w(ee * ce - oe); let { isValid: fe, value: S } = x(ye, ie); if (!fe)
        throw new Error("Point.fromHex: invalid y coordinate"); const N = (S & $t) === $t, R = (ne & 128) !== 0; if (!H && S === fn && R)
        throw new Error("Point.fromHex: x=0 and x_0=1"); return R !== N && (S = w(-S)), E.fromAffine({ x: S, y: _ }); }
    static fromPrivateKey(D) { return te(D).point; }
    toRawBytes() { const { x: D, y: H } = this.toAffine(), ee = ou(H, n.BYTES); return ee[ee.length - 1] |= D & $t ? 128 : 0, ee; }
    toHex() { return li(this.toRawBytes()); }
} E.BASE = new E(t.Gx, t.Gy, $t, w(t.Gx * t.Gy)), E.ZERO = new E(fn, $t, $t, fn); const { BASE: z, ZERO: I } = E, L = Vy(E, a * 8); function V(Z) { return Ze(Z, r); } function W(Z) { return V(Mo(Z)); } function te(Z) { const D = n.BYTES; Z = Ft("private key", Z, D); const H = Ft("hashed private key", o(Z), 2 * D), ee = B(H.slice(0, D)), oe = H.slice(D, 2 * D), re = W(ee), ue = z.multiply(re), ne = ue.toRawBytes(); return { head: ee, prefix: oe, scalar: re, point: ue, pointBytes: ne }; } function K(Z) { return te(Z).pointBytes; } function de(Z = new Uint8Array, ...D) { const H = rt(...D); return W(o(y(H, Ft("context", Z), !!i))); } function he(Z, D, H = {}) { Z = Ft("message", Z), i && (Z = i(Z)); const { prefix: ee, scalar: oe, pointBytes: re } = te(D), ue = de(H.context, ee, Z), ne = z.multiply(ue).toRawBytes(), _ = de(H.context, ne, re, Z), se = V(ue + _ * oe); wr("signature.s", se, fn, r); const ce = rt(ne, ou(se, n.BYTES)); return Ft("result", ce, n.BYTES * 2); } const U = Jv; function $(Z, D, H, ee = U) { const { context: oe, zip215: re } = ee, ue = n.BYTES; Z = Ft("signature", Z, 2 * ue), D = Ft("message", D), H = Ft("publicKey", H, ue), re !== void 0 && Co("zip215", re), i && (D = i(D)); const ne = Mo(Z.slice(ue, 2 * ue)); let _, se, ce; try {
    _ = E.fromHex(H, re), se = E.fromHex(Z.slice(0, ue), re), ce = z.multiplyUnsafe(ne);
}
catch {
    return !1;
} if (!re && _.isSmallOrder())
    return !1; const ye = de(oe, se.toRawBytes(), _.toRawBytes(), D); return se.add(_.multiplyUnsafe(ye)).subtract(ce).clearCofactor().equals(E.ZERO); } return z._setWindowSize(8), { CURVE: t, getPublicKey: K, sign: he, verify: $, ExtendedPoint: E, utils: { getExtendedPublicKey: te, randomPrivateKey: () => s(n.BYTES), precompute(Z = 8, D = E.BASE) { return D._setWindowSize(Z), D.multiply(BigInt(3)), D; } } }; } /*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const Jf = BigInt("57896044618658097711785492504343953926634992332820282019728792003956564819949"), jd = BigInt("19681161376707505956807079304988542015446066515923890162744021073123829784752");
BigInt(0);
const nx = BigInt(1), Ld = BigInt(2);
BigInt(3);
const rx = BigInt(5), ix = BigInt(8);
function ox(e) { const t = BigInt(10), n = BigInt(20), r = BigInt(40), i = BigInt(80), o = Jf, a = e * e % o * e % o, f = An(a, Ld, o) * a % o, h = An(f, nx, o) * e % o, w = An(h, rx, o) * h % o, b = An(w, t, o) * w % o, x = An(b, n, o) * b % o, B = An(x, r, o) * x % o, y = An(B, i, o) * B % o, O = An(y, i, o) * B % o, M = An(O, t, o) * w % o; return { pow_p_5_8: An(M, Ld, o) * e % o, b2: a }; }
function sx(e) { return e[0] &= 248, e[31] &= 127, e[31] |= 64, e; }
function ax(e, t) { const n = Jf, r = Ze(t * t * t, n), i = Ze(r * r * t, n), o = ox(e * i).pow_p_5_8; let s = Ze(e * r * o, n); const a = Ze(t * s * s, n), f = s, h = Ze(s * jd, n), w = a === e, b = a === Ze(-e, n), x = a === Ze(-e * jd, n); return w && (s = f), (b || x) && (s = h), W_(s, n) && (s = Ze(-s, n)), { isValid: w || b, value: s }; }
const ux = (() => ws(Jf, void 0, !0))(), lx = (() => ({ a: BigInt(-1), d: BigInt("37095705934669439343138083508754565189542113879843219016388785533085940283555"), Fp: ux, n: BigInt("7237005577332262213973186563042994240857116359379907606001950938285454250989"), h: ix, Gx: BigInt("15112221349535400772501151409588531511454012693041857206046113283949847762202"), Gy: BigInt("46316835694926478169428394003475163141307993866256225615783033603165251855960"), hash: Qv, randomBytes: m1, adjustScalarBytes: sx, uvRatio: ax }))(), cx = (() => tx(lx))();
var qd = globalThis && globalThis.__classPrivateFieldSet || function (e, t, n, r, i) { if (r === "m")
    throw new TypeError("Private method is not writable"); if (r === "a" && !i)
    throw new TypeError("Private accessor was defined without a setter"); if (typeof t == "function" ? e !== t || !i : !t.has(e))
    throw new TypeError("Cannot write private member to an object whose class did not declare it"); return r === "a" ? i.call(e, n) : i ? i.value = n : t.set(e, n), n; }, Rt = globalThis && globalThis.__classPrivateFieldGet || function (e, t, n, r) { if (n === "a" && !r)
    throw new TypeError("Private accessor was defined without a getter"); if (typeof t == "function" ? e !== t || !r : !t.has(e))
    throw new TypeError("Cannot read private member from an object whose class did not declare it"); return n === "m" ? r : n === "a" ? r.call(e) : r ? r.value : t.get(e); }, Tt, So, Zy, Qy;
class fx {
    constructor(t = {}) { Tt.set(this, void 0), So.set(this, void 0), this[Zy] = this.entries.bind(this), this[Qy] = "ExpirableMap"; const { source: n = [], expirationTime: r = 10 * 60 * 1e3 } = t, i = Date.now(); qd(this, Tt, new Map([...n].map(([o, s]) => [o, { value: s, timestamp: i }])), "f"), qd(this, So, r, "f"); }
    prune() { const t = Date.now(); for (const [n, r] of Rt(this, Tt, "f").entries())
        t - r.timestamp > Rt(this, So, "f") && Rt(this, Tt, "f").delete(n); return this; }
    set(t, n) { this.prune(); const r = { value: n, timestamp: Date.now() }; return Rt(this, Tt, "f").set(t, r), this; }
    get(t) { const n = Rt(this, Tt, "f").get(t); if (n !== void 0) {
        if (Date.now() - n.timestamp > Rt(this, So, "f")) {
            Rt(this, Tt, "f").delete(t);
            return;
        }
        return n.value;
    } }
    clear() { Rt(this, Tt, "f").clear(); }
    entries() { const t = Rt(this, Tt, "f").entries(); return function* () { for (const [r, i] of t)
        yield [r, i.value]; }(); }
    values() { const t = Rt(this, Tt, "f").values(); return function* () { for (const r of t)
        yield r.value; }(); }
    keys() { return Rt(this, Tt, "f").keys(); }
    forEach(t, n) { for (const [r, i] of Rt(this, Tt, "f").entries())
        t.call(n, i.value, r, this); }
    has(t) { return Rt(this, Tt, "f").has(t); }
    delete(t) { return Rt(this, Tt, "f").delete(t); }
    get size() { return Rt(this, Tt, "f").size; }
}
Tt = new WeakMap, So = new WeakMap, Zy = Symbol.iterator, Qy = Symbol.toStringTag;
const Hd = e => { if (e <= 127)
    return 1; if (e <= 255)
    return 2; if (e <= 65535)
    return 3; if (e <= 16777215)
    return 4; throw new Error("Length too long (> 4 bytes)"); }, Gd = (e, t, n) => { if (n <= 127)
    return e[t] = n, 1; if (n <= 255)
    return e[t] = 129, e[t + 1] = n, 2; if (n <= 65535)
    return e[t] = 130, e[t + 1] = n >> 8, e[t + 2] = n, 3; if (n <= 16777215)
    return e[t] = 131, e[t + 1] = n >> 16, e[t + 2] = n >> 8, e[t + 3] = n, 4; throw new Error("Length too long (> 4 bytes)"); }, Lc = (e, t) => { if (e[t] < 128)
    return 1; if (e[t] === 128)
    throw new Error("Invalid length 0"); if (e[t] === 129)
    return 2; if (e[t] === 130)
    return 3; if (e[t] === 131)
    return 4; throw new Error("Length too long (> 4 bytes)"); }, dx = (e, t) => { const n = Lc(e, t); if (n === 1)
    return e[t]; if (n === 2)
    return e[t + 1]; if (n === 3)
    return (e[t + 1] << 8) + e[t + 2]; if (n === 4)
    return (e[t + 1] << 16) + (e[t + 2] << 8) + e[t + 3]; throw new Error("Length too long (> 4 bytes)"); };
Uint8Array.from([48, 12, 6, 10, 43, 6, 1, 4, 1, 131, 184, 67, 1, 1]);
const Wd = Uint8Array.from([48, 5, 6, 3, 43, 101, 112]);
Uint8Array.from([48, 16, 6, 7, 42, 134, 72, 206, 61, 2, 1, 6, 5, 43, 129, 4, 0, 10]);
function hx(e, t) { const n = 2 + Hd(e.byteLength + 1), r = t.byteLength + n + e.byteLength; let i = 0; const o = new Uint8Array(1 + Hd(r) + r); return o[i++] = 48, i += Gd(o, i, r), o.set(t, i), i += t.byteLength, o[i++] = 3, i += Gd(o, i, e.byteLength + 1), o[i++] = 0, o.set(new Uint8Array(e), i), o; }
const px = (e, t) => { let n = 0; const r = (a, f) => { if (i[n++] !== a)
    throw new Error("Expected: " + f); }, i = new Uint8Array(e); if (r(48, "sequence"), n += Lc(i, n), !Bu(i.slice(n, n + t.byteLength), t))
    throw new Error("Not the expected OID."); n += t.byteLength, r(3, "bit string"); const o = dx(i, n) - 1; n += Lc(i, n), r(0, "0 padding"); const s = i.slice(n); if (o !== s.length)
    throw new Error(`DER payload mismatch: Expected length ${o} actual length ${s.length}`); return s; };
var Dd = globalThis && globalThis.__classPrivateFieldSet || function (e, t, n, r, i) { if (r === "m")
    throw new TypeError("Private method is not writable"); if (r === "a" && !i)
    throw new TypeError("Private accessor was defined without a setter"); if (typeof t == "function" ? e !== t || !i : !t.has(e))
    throw new TypeError("Cannot write private member to an object whose class did not declare it"); return r === "a" ? i.call(e, n) : i ? i.value = n : t.set(e, n), n; }, Yd = globalThis && globalThis.__classPrivateFieldGet || function (e, t, n, r) { if (n === "a" && !r)
    throw new TypeError("Private accessor was defined without a getter"); if (typeof t == "function" ? e !== t || !r : !t.has(e))
    throw new TypeError("Cannot read private member from an object whose class did not declare it"); return n === "m" ? r : n === "a" ? r.call(e) : r ? r.value : t.get(e); }, wa, _a;
class Qr {
    constructor(t) { if (wa.set(this, void 0), _a.set(this, void 0), t.byteLength !== Qr.RAW_KEY_LENGTH)
        throw new Error("An Ed25519 public key must be exactly 32bytes long"); Dd(this, wa, t, "f"), Dd(this, _a, Qr.derEncode(t), "f"); }
    static from(t) { return this.fromDer(t.toDer()); }
    static fromRaw(t) { return new Qr(t); }
    static fromDer(t) { return new Qr(this.derDecode(t)); }
    static derEncode(t) { return hx(t, Wd).buffer; }
    static derDecode(t) { const n = px(t, Wd); if (n.length !== this.RAW_KEY_LENGTH)
        throw new Error("An Ed25519 public key must be exactly 32bytes long"); return n; }
    get rawKey() { return Yd(this, wa, "f"); }
    get derKey() { return Yd(this, _a, "f"); }
    toDer() { return this.derKey; }
    toRaw() { return this.rawKey; }
}
wa = new WeakMap, _a = new WeakMap;
Qr.RAW_KEY_LENGTH = 32;
class yx {
    constructor() { this.observers = []; }
    subscribe(t) { this.observers.push(t); }
    unsubscribe(t) { this.observers = this.observers.filter(n => n !== t); }
    notify(t, ...n) { this.observers.forEach(r => r(t, ...n)); }
}
class mx extends yx {
    constructor() { super(); }
    print(t, ...n) { this.notify({ message: t, level: "info" }, ...n); }
    warn(t, ...n) { this.notify({ message: t, level: "warn" }, ...n); }
    error(t, n, ...r) { this.notify({ message: t, level: "error", error: n }, ...r); }
}
var Nn = globalThis && globalThis.__classPrivateFieldSet || function (e, t, n, r, i) { if (r === "m")
    throw new TypeError("Private method is not writable"); if (r === "a" && !i)
    throw new TypeError("Private accessor was defined without a setter"); if (typeof t == "function" ? e !== t || !i : !t.has(e))
    throw new TypeError("Cannot write private member to an object whose class did not declare it"); return r === "a" ? i.call(e, n) : i ? i.value = n : t.set(e, n), n; }, St = globalThis && globalThis.__classPrivateFieldGet || function (e, t, n, r) { if (n === "a" && !r)
    throw new TypeError("Private accessor was defined without a getter"); if (typeof t == "function" ? e !== t || !r : !t.has(e))
    throw new TypeError("Cannot read private member from an object whose class did not declare it"); return n === "m" ? r : n === "a" ? r.call(e) : r ? r.value : t.get(e); }, kn, va, xa, Ea, ba, Sa, Ta, Ba, wi;
const Xy = .5, Jy = 1.5, em = 500, tm = 6e4, nm = 9e5, rm = 10;
class Cu {
    constructor(t = Cu.default) { kn.set(this, void 0), va.set(this, void 0), xa.set(this, void 0), Ea.set(this, void 0), ba.set(this, void 0), Sa.set(this, void 0), Ta.set(this, void 0), Ba.set(this, void 0), wi.set(this, 0); const { initialInterval: n = em, randomizationFactor: r = Xy, multiplier: i = Jy, maxInterval: o = tm, maxElapsedTime: s = nm, maxIterations: a = rm, date: f = Date } = t; Nn(this, kn, n, "f"), Nn(this, va, r, "f"), Nn(this, xa, i, "f"), Nn(this, Ea, o, "f"), Nn(this, Ba, f, "f"), Nn(this, ba, f.now(), "f"), Nn(this, Sa, s, "f"), Nn(this, Ta, a, "f"); }
    get ellapsedTimeInMsec() { return St(this, Ba, "f").now() - St(this, ba, "f"); }
    get currentInterval() { return St(this, kn, "f"); }
    get count() { return St(this, wi, "f"); }
    get randomValueFromInterval() { const t = St(this, va, "f") * St(this, kn, "f"), n = St(this, kn, "f") - t, r = St(this, kn, "f") + t; return Math.random() * (r - n) + n; }
    incrementCurrentInterval() { var t; return Nn(this, kn, Math.min(St(this, kn, "f") * St(this, xa, "f"), St(this, Ea, "f")), "f"), Nn(this, wi, (t = St(this, wi, "f"), t++, t), "f"), St(this, kn, "f"); }
    next() { return this.ellapsedTimeInMsec >= St(this, Sa, "f") || St(this, wi, "f") >= St(this, Ta, "f") ? null : (this.incrementCurrentInterval(), this.randomValueFromInterval); }
}
kn = new WeakMap, va = new WeakMap, xa = new WeakMap, Ea = new WeakMap, ba = new WeakMap, Sa = new WeakMap, Ta = new WeakMap, Ba = new WeakMap, wi = new WeakMap;
Cu.default = { initialInterval: em, randomizationFactor: Xy, multiplier: Jy, maxInterval: tm, maxElapsedTime: nm, maxIterations: rm, date: Date };
var gt = globalThis && globalThis.__classPrivateFieldSet || function (e, t, n, r, i) { if (r === "m")
    throw new TypeError("Private method is not writable"); if (r === "a" && !i)
    throw new TypeError("Private accessor was defined without a setter"); if (typeof t == "function" ? e !== t || !i : !t.has(e))
    throw new TypeError("Cannot write private member to an object whose class did not declare it"); return r === "a" ? i.call(e, n) : i ? i.value = n : t.set(e, n), n; }, pe = globalThis && globalThis.__classPrivateFieldGet || function (e, t, n, r) { if (n === "a" && !r)
    throw new TypeError("Private accessor was defined without a getter"); if (typeof t == "function" ? e !== t || !r : !t.has(e))
    throw new TypeError("Cannot read private member from an object whose class did not declare it"); return n === "m" ? r : n === "a" ? r.call(e) : r ? r.value : t.get(e); }, Bt, jr, Hi, In, Ln, Ci, To, _i, hn, mn, Lr, qr, Bo, vi, xi, Hr, Dr, im, Aa, Na, Gr, qn;
(function (e) { e.Received = "received", e.Processing = "processing", e.Replied = "replied", e.Rejected = "rejected", e.Unknown = "unknown", e.Done = "done"; })(qn || (qn = {}));
const Ys = 60 * 1e3, gx = "308182301d060d2b0601040182dc7c0503010201060c2b0601040182dc7c05030201036100814c0e6ec71fab583b08bd81373c255c3c371b2e84863c98a4f1e08b74235d14fb5d9c0cd546d9685f913a0c0b2cc5341583bf4b4392e467db96d65b9bb4cb717112f8472e0d5a4d14505ffd7484b01291091c5f87b98883463f98091a0baaae", wx = "aaaaa-aa", _x = "ic0.app", vx = ".ic0.app", xx = "icp0.io", Ex = ".icp0.io", bx = "icp-api.io", Sx = ".icp-api.io";
class Rl extends Qe {
    constructor(t) { super(t), this.message = t; }
}
class Ks extends Qe {
    constructor(t) { super(t), this.message = t; }
}
function Tx() { let e; if (typeof window < "u")
    if (window.fetch)
        e = window.fetch.bind(window);
    else
        throw new Rl("Fetch implementation was not available. You appear to be in a browser context, but window.fetch was not present.");
else if (typeof global < "u")
    if (global.fetch)
        e = global.fetch.bind(global);
    else
        throw new Rl("Fetch implementation was not available. You appear to be in a Node.js context, but global.fetch was not available.");
else
    typeof self < "u" && self.fetch && (e = self.fetch.bind(self)); if (e)
    return e; throw new Rl("Fetch implementation was not available. Please provide fetch to the HttpAgent constructor, or ensure it is available in the window or global context."); }
function Bx(e) { let t; if (e !== void 0)
    !e.match(/^[a-z]+:/) && typeof window < "u" ? t = new URL(window.location.protocol + "//" + e) : t = new URL(e);
else {
    const n = ["ic0.app", "icp0.io", "127.0.0.1", "localhost"], r = [".github.dev", ".gitpod.io"], i = typeof window < "u" ? window.location : void 0, o = i == null ? void 0 : i.hostname;
    let s;
    o && typeof o == "string" && (r.some(a => o.endsWith(a)) ? s = o : s = n.find(a => o.endsWith(a))), i && s ? t = new URL(`${i.protocol}//${s}${i.port ? ":" + i.port : ""}`) : t = new URL("https://icp-api.io");
} return t.toString(); }
class Mi {
    constructor(t = {}) { var n, r; Bt.add(this), jr.set(this, null), Hi.set(this, !1), In.set(this, void 0), Ln.set(this, void 0), Ci.set(this, void 0), To.set(this, void 0), _i.set(this, 0), hn.set(this, void 0), mn.set(this, void 0), Lr.set(this, void 0), qr.set(this, void 0), this._isAgent = !0, this.config = {}, Bo.set(this, 0), this.log = new mx, vi.set(this, []), xi.set(this, []), Hr.set(this, new fx({ expirationTime: 5 * 60 * 1e3 })), Dr.set(this, !0), Na.set(this, (s, a) => { if (pe(this, Dr, "f") === !1)
        return s; if (!a)
        throw new Un("Invalid signature from replica signed query: no matching node key found."); const { status: f, signatures: h = [], requestId: w } = s, b = new TextEncoder().encode("\vic-response"); for (const x of h) {
        const { timestamp: B, identity: y } = x, O = Ae.fromUint8Array(y).toText();
        let M;
        if (f === "replied") {
            const { reply: I } = s;
            M = iu({ status: f, reply: I, timestamp: BigInt(B), request_id: w });
        }
        else if (f === "rejected") {
            const { reject_code: I, reject_message: L, error_code: V } = s;
            M = iu({ status: f, reject_code: I, reject_message: L, error_code: V, timestamp: BigInt(B), request_id: w });
        }
        else
            throw new Error(`Unknown status: ${f}`);
        const A = zn(b, new Uint8Array(M)), v = a == null ? void 0 : a.nodeKeys.get(O);
        if (!v)
            throw new Un("Invalid signature from replica signed query: no matching node key found.");
        const E = Qr.fromDer(v).rawKey;
        if (cx.verify(x.signature, new Uint8Array(A), new Uint8Array(E)))
            return s;
        throw new Un(`Invalid signature from replica ${O} signed query.`);
    } return s; }), this.config = t, gt(this, Ln, t.fetch || Tx() || fetch.bind(global), "f"), gt(this, Ci, t.fetchOptions, "f"), gt(this, To, t.callOptions, "f"), gt(this, Hi, (n = t.shouldFetchRootKey) !== null && n !== void 0 ? n : !1, "f"), t.rootKey ? this.rootKey = t.rootKey : pe(this, Hi, "f") ? this.rootKey = null : this.rootKey = eu(gx); const i = Bx(t.host); this.host = new URL(i), t.verifyQuerySignatures !== void 0 && gt(this, Dr, t.verifyQuerySignatures, "f"), gt(this, mn, (r = t.retryTimes) !== null && r !== void 0 ? r : 3, "f"); const o = () => new Cu({ maxIterations: pe(this, mn, "f") }); if (gt(this, Lr, t.backoffStrategy || o, "f"), this.host.hostname.endsWith(vx) ? this.host.hostname = _x : this.host.hostname.endsWith(Ex) ? this.host.hostname = xx : this.host.hostname.endsWith(Sx) && (this.host.hostname = bx), t.credentials) {
        const { name: s, password: a } = t.credentials;
        gt(this, hn, `${s}${a ? ":" + a : ""}`, "f");
    } if (gt(this, In, Promise.resolve(t.identity || new vd), "f"), t.ingressExpiryInMinutes && t.ingressExpiryInMinutes > 5)
        throw new Qe(`The maximum ingress expiry time is 5 minutes. Provided ingress expiry time is ${t.ingressExpiryInMinutes} minutes.`); if (t.ingressExpiryInMinutes && t.ingressExpiryInMinutes <= 0)
        throw new Qe(`Ingress expiry time must be greater than 0. Provided ingress expiry time is ${t.ingressExpiryInMinutes} minutes.`); gt(this, qr, t.ingressExpiryInMinutes || 5, "f"), this.addTransform("update", bd(Cc)), t.useQueryNonces && this.addTransform("query", bd(Cc)), t.logToConsole && this.log.subscribe(s => { s.level === "error" ? console.error(s.message) : s.level === "warn" ? console.warn(s.message) : console.log(s.message); }); }
    get waterMark() { return pe(this, Bo, "f"); }
    static createSync(t = {}) { return new this(Object.assign({}, t)); }
    static async create(t = { shouldFetchRootKey: !1 }) { const n = Mi.createSync(t), r = [n.syncTime()]; return n.host.toString() !== "https://icp-api.io" && t.shouldFetchRootKey && r.push(n.fetchRootKey()), await Promise.all(r), n; }
    static async from(t) { var n; try {
        return "config" in t ? await Mi.create(t.config) : await Mi.create({ fetch: t._fetch, fetchOptions: t._fetchOptions, callOptions: t._callOptions, host: t._host.toString(), identity: (n = t._identity) !== null && n !== void 0 ? n : void 0 });
    }
    catch {
        throw new Qe("Failed to create agent from provided agent");
    } }
    isLocal() { const t = this.host.hostname; return t === "127.0.0.1" || t.endsWith("127.0.0.1"); }
    addTransform(t, n, r = n.priority || 0) { if (t === "update") {
        const i = pe(this, xi, "f").findIndex(o => (o.priority || 0) < r);
        pe(this, xi, "f").splice(i >= 0 ? i : pe(this, xi, "f").length, 0, Object.assign(n, { priority: r }));
    }
    else if (t === "query") {
        const i = pe(this, vi, "f").findIndex(o => (o.priority || 0) < r);
        pe(this, vi, "f").splice(i >= 0 ? i : pe(this, vi, "f").length, 0, Object.assign(n, { priority: r }));
    } }
    async getPrincipal() { if (!pe(this, In, "f"))
        throw new Ks("This identity has expired due this application's security policy. Please refresh your authentication."); return (await pe(this, In, "f")).getPrincipal(); }
    async call(t, n, r) { var i, o; await pe(this, Bt, "m", Gr).call(this); const s = (i = n.callSync) !== null && i !== void 0 ? i : !0, a = await (r !== void 0 ? await r : await pe(this, In, "f")); if (!a)
        throw new Ks("This identity has expired due this application's security policy. Please refresh your authentication."); const f = Ae.from(t), h = n.effectiveCanisterId ? Ae.from(n.effectiveCanisterId) : f, w = a.getPrincipal() || Ae.anonymous(); let b = new js(pe(this, qr, "f") * Ys); Math.abs(pe(this, _i, "f")) > 1e3 * 30 && (b = new js(pe(this, qr, "f") * Ys + pe(this, _i, "f"))); const x = { request_type: Pc.Call, canister_id: f, method_name: n.methodName, arg: n.arg, sender: w, ingress_expiry: b }; let B = await this._transform({ request: { body: null, method: "POST", headers: Object.assign({ "Content-Type": "application/cbor" }, pe(this, hn, "f") ? { Authorization: "Basic " + btoa(pe(this, hn, "f")) } : {}) }, endpoint: "call", body: x }); const y = B.body.nonce ? O(B.body.nonce) : void 0; x.nonce = y; function O(E) { return new Uint8Array(E); } B = await a.transformRequest(B); const M = xl(B.body), A = pe(this, Lr, "f").call(this), v = _d(x); try {
        const E = () => (this.log.print(`fetching "/api/v3/canister/${h.toText()}/call" with request:`, B), pe(this, Ln, "f").call(this, "" + new URL(`/api/v3/canister/${h.toText()}/call`, this.host), Object.assign(Object.assign(Object.assign({}, pe(this, To, "f")), B.request), { body: M }))), z = () => (this.log.print(`fetching "/api/v2/canister/${h.toText()}/call" with request:`, B), pe(this, Ln, "f").call(this, "" + new URL(`/api/v2/canister/${h.toText()}/call`, this.host), Object.assign(Object.assign(Object.assign({}, pe(this, To, "f")), B.request), { body: M }))), L = await pe(this, Bt, "m", Aa).call(this, { request: s ? E : z, backoff: A, tries: 0 }), V = await L.arrayBuffer(), W = L.status === 200 && V.byteLength > 0 ? Zn(V) : null;
        if (W && "certificate" in W) {
            const te = await this.parseTimeFromResponse({ certificate: W.certificate });
            gt(this, Bo, te, "f");
        }
        return { requestId: v, response: { ok: L.ok, status: L.status, statusText: L.statusText, body: W, headers: Eo(L.headers) }, requestDetails: x };
    }
    catch (E) {
        if (E.message.includes("v3 api not supported."))
            return this.log.warn("v3 api not supported. Fall back to v2"), this.call(t, Object.assign(Object.assign({}, n), { callSync: !1 }), r);
        const z = `Error while making call: ${(o = E.message) !== null && o !== void 0 ? o : String(E)}`, I = new P_(z, E, pt(v), pt(B.body.sender_pubkey), pt(B.body.sender_sig), String(B.body.content.ingress_expiry._value));
        throw this.log.error(z, I), I;
    } }
    async query(t, n, r) { var i, o, s, a; await pe(this, Bt, "m", Gr).call(this); const f = pe(this, Lr, "f").call(this), h = n.effectiveCanisterId ? Ae.from(n.effectiveCanisterId) : Ae.from(t); this.log.print(`ecid ${h.toString()}`), this.log.print(`canisterId ${t.toString()}`); let w, b; const x = await (r !== void 0 ? r : pe(this, In, "f")); if (!x)
        throw new Ks("This identity has expired due this application's security policy. Please refresh your authentication."); const B = Ae.from(t), y = (x == null ? void 0 : x.getPrincipal()) || Ae.anonymous(), O = { request_type: "query", canister_id: B, method_name: n.methodName, arg: n.arg, sender: y, ingress_expiry: new js(pe(this, qr, "f") * Ys) }, M = _d(O); w = await this._transform({ request: { method: "POST", headers: Object.assign({ "Content-Type": "application/cbor" }, pe(this, hn, "f") ? { Authorization: "Basic " + btoa(pe(this, hn, "f")) } : {}) }, endpoint: "read", body: O }), w = await (x == null ? void 0 : x.transformRequest(w)); const A = xl(w.body), v = { canister: B.toText(), ecid: h, transformedRequest: w, body: A, requestId: M, backoff: f, tries: 0 }, E = async () => ({ requestDetails: O, query: await pe(this, Bt, "m", im).call(this, v) }), z = async () => { if (!pe(this, Dr, "f"))
        return; const I = pe(this, Hr, "f").get(h.toString()); return I || (await this.fetchSubnetKeys(h.toString()), pe(this, Hr, "f").get(h.toString())); }; try {
        const [I, L] = await Promise.all([E(), z()]);
        b = I;
        const { requestDetails: V, query: W } = b, te = Object.assign(Object.assign({}, W), { requestDetails: V });
        if (this.log.print("Query response:", te), !pe(this, Dr, "f"))
            return te;
        try {
            return pe(this, Na, "f").call(this, te, L);
        }
        catch {
            this.log.warn("Query response verification failed. Retrying with fresh subnet keys."), pe(this, Hr, "f").delete(t.toString()), await this.fetchSubnetKeys(h.toString());
            const de = pe(this, Hr, "f").get(t.toString());
            if (!de)
                throw new Un("Invalid signature from replica signed query: no matching node key found.");
            return pe(this, Na, "f").call(this, te, de);
        }
    }
    catch (I) {
        const L = `Error while making call: ${(i = I.message) !== null && i !== void 0 ? i : String(I)}`, V = new C_(L, I, String(M), pt((o = w == null ? void 0 : w.body) === null || o === void 0 ? void 0 : o.sender_pubkey), pt((s = w == null ? void 0 : w.body) === null || s === void 0 ? void 0 : s.sender_sig), String((a = w == null ? void 0 : w.body) === null || a === void 0 ? void 0 : a.content.ingress_expiry._value));
        throw this.log.error(L, V), V;
    } }
    async createReadStateRequest(t, n) { await pe(this, Bt, "m", Gr).call(this); const r = await (n !== void 0 ? await n : await pe(this, In, "f")); if (!r)
        throw new Ks("This identity has expired due this application's security policy. Please refresh your authentication."); const i = (r == null ? void 0 : r.getPrincipal()) || Ae.anonymous(), o = await this._transform({ request: { method: "POST", headers: Object.assign({ "Content-Type": "application/cbor" }, pe(this, hn, "f") ? { Authorization: "Basic " + btoa(pe(this, hn, "f")) } : {}) }, endpoint: "read_state", body: { request_type: "read_state", paths: t.paths, sender: i, ingress_expiry: new js(pe(this, qr, "f") * Ys) } }); return r == null ? void 0 : r.transformRequest(o); }
    async readState(t, n, r, i) {
        var o, s, a, f;
        function h(O) { for (const M of O.paths) {
            const [A, v] = M, E = new TextEncoder().encode("request_status");
            if (Bu(A, E))
                return v;
        } }
        const w = h(n);
        await pe(this, Bt, "m", Gr).call(this);
        const b = typeof t == "string" ? Ae.fromText(t) : t, x = i ?? await this.createReadStateRequest(n, r), B = xl(x.body);
        this.log.print(`fetching "/api/v2/canister/${b}/read_state" with request:`, x);
        const y = pe(this, Lr, "f").call(this);
        try {
            const O = await pe(this, Bt, "m", Aa).call(this, { request: () => pe(this, Ln, "f").call(this, "" + new URL(`/api/v2/canister/${b.toString()}/read_state`, this.host), Object.assign(Object.assign(Object.assign({}, pe(this, Ci, "f")), x.request), { body: B })), backoff: y, tries: 0 });
            if (!O.ok)
                throw new Error(`Server returned an error:
  Code: ${O.status} (${O.statusText})
  Body: ${await O.text()}
`);
            const M = Zn(await O.arrayBuffer());
            this.log.print("Read state response:", M);
            const A = await this.parseTimeFromResponse(M);
            return A > 0 && (this.log.print("Read state response time:", A), gt(this, Bo, A, "f")), M;
        }
        catch (O) {
            const M = `Caught exception while attempting to read state: ${(o = O.message) !== null && o !== void 0 ? o : String(O)}`, A = new M_(M, O, String(w), pt((s = x == null ? void 0 : x.body) === null || s === void 0 ? void 0 : s.sender_pubkey), pt((a = x == null ? void 0 : x.body) === null || a === void 0 ? void 0 : a.sender_sig), String((f = x == null ? void 0 : x.body) === null || f === void 0 ? void 0 : f.content.ingress_expiry._value));
            throw this.log.error(M, A), A;
        }
    }
    async parseTimeFromResponse(t) { let n; if (t.certificate) {
        const r = Zn(t.certificate);
        if (r && "tree" in r)
            n = r.tree;
        else
            throw new Error("Could not decode time from response");
        const i = to(["time"], n);
        if (i.status !== st.Found)
            throw new Error("Time was not found in the response or was not in its expected format.");
        if (!(i.value instanceof ArrayBuffer) && !ArrayBuffer.isView(i))
            throw new Error("Time was not found in the response or was not in its expected format.");
        const o = Xf(v1(i.value));
        return this.log.print("Time from response:", o), this.log.print("Time from response in milliseconds:", Number(o)), Number(o);
    }
    else
        this.log.warn("No certificate found in response"); return 0; }
    async syncTime(t) { await pe(this, Bt, "m", Gr).call(this); const n = await a2(() => Promise.resolve().then(() => Tv), void 0), r = Date.now(); try {
        t || this.log.print("Syncing time with the IC. No canisterId provided, so falling back to ryjl3-tyaaa-aaaaa-aaaba-cai");
        const i = Mi.createSync({ identity: new vd, host: this.host.toString(), fetch: pe(this, Ln, "f"), retryTimes: 0 }), s = (await n.request({ canisterId: t ?? Ae.from("ryjl3-tyaaa-aaaaa-aaaba-cai"), agent: i, paths: ["time"] })).get("time");
        s && (gt(this, _i, Number(s) - Number(r), "f"), this.log.notify({ message: `Syncing time: offset of ${pe(this, _i, "f")}`, level: "info" }));
    }
    catch (i) {
        this.log.error("Caught exception while attempting to sync time", i);
    } }
    async status() { const t = pe(this, hn, "f") ? { Authorization: "Basic " + btoa(pe(this, hn, "f")) } : {}; this.log.print('fetching "/api/v2/status"'); const n = pe(this, Lr, "f").call(this), r = await pe(this, Bt, "m", Aa).call(this, { backoff: n, request: () => pe(this, Ln, "f").call(this, "" + new URL("/api/v2/status", this.host), Object.assign({ headers: t }, pe(this, Ci, "f"))), tries: 0 }); return Zn(await r.arrayBuffer()); }
    async fetchRootKey() { let t; return pe(this, jr, "f") ? t = await pe(this, jr, "f") : (gt(this, jr, new Promise((n, r) => { this.status().then(i => { const o = i.root_key; this.rootKey = o, n(o); }).catch(r); }), "f"), t = await pe(this, jr, "f")), gt(this, jr, null, "f"), t; }
    invalidateIdentity() { gt(this, In, null, "f"); }
    replaceIdentity(t) { gt(this, In, Promise.resolve(t), "f"); }
    async fetchSubnetKeys(t) { await pe(this, Bt, "m", Gr).call(this); const n = Ae.from(t), i = (await Wy({ canisterId: n, paths: ["subnet"], agent: this })).get("subnet"); if (i && typeof i == "object" && "nodeKeys" in i)
        return pe(this, Hr, "f").set(n.toText(), i), i; }
    _transform(t) { let n = Promise.resolve(t); if (t.endpoint === "call")
        for (const r of pe(this, xi, "f"))
            n = n.then(i => r(i).then(o => o || i));
    else
        for (const r of pe(this, vi, "f"))
            n = n.then(i => r(i).then(o => o || i)); return n; }
}
jr = new WeakMap, Hi = new WeakMap, In = new WeakMap, Ln = new WeakMap, Ci = new WeakMap, To = new WeakMap, _i = new WeakMap, hn = new WeakMap, mn = new WeakMap, Lr = new WeakMap, qr = new WeakMap, Bo = new WeakMap, vi = new WeakMap, xi = new WeakMap, Hr = new WeakMap, Dr = new WeakMap, Na = new WeakMap, Bt = new WeakSet, im = async function e(t) {
    var n, r;
    const { ecid: i, transformedRequest: o, body: s, requestId: a, backoff: f, tries: h } = t, w = h === 0 ? 0 : f.next();
    if (this.log.print(`fetching "/api/v2/canister/${i.toString()}/query" with tries:`, { tries: h, backoff: f, delay: w }), w === null)
        throw new Qe(`Timestamp failed to pass the watermark after retrying the configured ${pe(this, mn, "f")} times. We cannot guarantee the integrity of the response since it could be a replay attack.`);
    w > 0 && await new Promise(y => setTimeout(y, w));
    let b;
    try {
        this.log.print(`fetching "/api/v2/canister/${i.toString()}/query" with request:`, o);
        const y = await pe(this, Ln, "f").call(this, "" + new URL(`/api/v2/canister/${i.toString()}/query`, this.host), Object.assign(Object.assign(Object.assign({}, pe(this, Ci, "f")), o.request), { body: s }));
        if (y.status === 200) {
            const O = Zn(await y.arrayBuffer());
            b = Object.assign(Object.assign({}, O), { httpDetails: { ok: y.ok, status: y.status, statusText: y.statusText, headers: Eo(y.headers) }, requestId: a });
        }
        else
            throw new El(`Gateway returned an error:
  Code: ${y.status} (${y.statusText})
  Body: ${await y.text()}
`, { ok: y.ok, status: y.status, statusText: y.statusText, headers: Eo(y.headers) });
    }
    catch (y) {
        if (h < pe(this, mn, "f"))
            return this.log.warn(`Caught exception while attempting to make query:
  ${y}
  Retrying query.`), await pe(this, Bt, "m", e).call(this, Object.assign(Object.assign({}, t), { tries: h + 1 }));
        throw y;
    }
    const x = (r = (n = b.signatures) === null || n === void 0 ? void 0 : n[0]) === null || r === void 0 ? void 0 : r.timestamp;
    if (!pe(this, Dr, "f"))
        return b;
    if (!x)
        throw new Error("Timestamp not found in query response. This suggests a malformed or malicious response.");
    const B = Number(BigInt(x) / BigInt(1e6));
    if (this.log.print("watermark and timestamp", { waterMark: this.waterMark, timestamp: B }), Number(this.waterMark) > B) {
        const y = new Qe("Timestamp is below the watermark. Retrying query.");
        if (this.log.error("Timestamp is below", y, { timestamp: x, waterMark: this.waterMark }), h < pe(this, mn, "f"))
            return await pe(this, Bt, "m", e).call(this, Object.assign(Object.assign({}, t), { tries: h + 1 }));
        throw new Qe(`Timestamp failed to pass the watermark after retrying the configured ${pe(this, mn, "f")} times. We cannot guarantee the integrity of the response since it could be a replay attack.`);
    }
    return b;
}, Aa = async function e(t) {
    const { request: n, backoff: r, tries: i } = t, o = i === 0 ? 0 : r.next();
    if (o === null)
        throw new Qe(`Timestamp failed to pass the watermark after retrying the configured ${pe(this, mn, "f")} times. We cannot guarantee the integrity of the response since it could be a replay attack.`);
    o > 0 && await new Promise(h => setTimeout(h, o));
    let s;
    try {
        s = await n();
    }
    catch (h) {
        if (pe(this, mn, "f") > i)
            return this.log.warn(`Caught exception while attempting to make request:
  ${h}
  Retrying request.`), await pe(this, Bt, "m", e).call(this, { request: n, backoff: r, tries: i + 1 });
        throw h;
    }
    if (s.ok)
        return s;
    const a = await s.clone().text(), f = `Server returned an error:
  Code: ${s.status} (${s.statusText})
  Body: ${a}
`;
    if (s.status === 404 && s.url.includes("api/v3"))
        throw new El("v3 api not supported. Fall back to v2", { ok: s.ok, status: s.status, statusText: s.statusText, headers: Eo(s.headers) });
    if (i < pe(this, mn, "f"))
        return await pe(this, Bt, "m", e).call(this, { request: n, backoff: r, tries: i + 1 });
    throw new El(f, { ok: s.ok, status: s.status, statusText: s.statusText, headers: Eo(s.headers) });
}, Gr = async function () { if (!this.rootKey)
    if (this.rootKey === null && pe(this, Hi, "f"))
        await this.fetchRootKey();
    else
        throw new Qe(`Invalid root key detected. The root key for this agent is ${this.rootKey} and the shouldFetchRootKey value is set to ${pe(this, Hi, "f")}. The root key should only be unknown if you are in local development. Otherwise you should avoid fetching and use the default IC Root Key or the known root key of your environment.`); };
var Kd;
(function (e) { e.Error = "err", e.GetPrincipal = "gp", e.GetPrincipalResponse = "gpr", e.Query = "q", e.QueryResponse = "qr", e.Call = "c", e.CallResponse = "cr", e.ReadState = "rs", e.ReadStateResponse = "rsr", e.Status = "s", e.StatusResponse = "sr"; })(Kd || (Kd = {}));
function Zd() { const e = typeof window > "u" ? typeof global > "u" ? typeof self > "u" ? void 0 : self.ic.agent : global.ic.agent : window.ic.agent; if (!e)
    throw new Error("No Agent could be found."); return e; }
const Ax = 5 * 60 * 1e3;
function om() { return Ox(kx(Nx(), 1e3), Rx(1e3, 1.2), Ix(Ax)); }
function Nx() { let e = !0; return async () => e ? (e = !1, !0) : !1; }
function kx(e, t) { return async (n, r, i) => { if (await e(n, r, i))
    return new Promise(o => setTimeout(o, t)); }; }
function Ix(e) {
    const t = Date.now() + e;
    return async (n, r, i) => {
        if (Date.now() > t)
            throw new Error(`Request timed out after ${e} msec:
  Request ID: ${pt(r)}
  Request status: ${i}
`);
    };
}
function Rx(e, t) { let n = e; return () => new Promise(r => setTimeout(() => { n *= t, r(); }, n)); }
function Ox(...e) { return async (t, n, r) => { for (const i of e)
    await i(t, n, r); }; }
async function sm(e, t, n, r = om(), i, o) {
    var s;
    const a = [new TextEncoder().encode("request_status"), n], f = i ?? await ((s = e.createReadStateRequest) === null || s === void 0 ? void 0 : s.call(e, { paths: [a] })), h = await e.readState(t, { paths: [a] }, void 0, f);
    if (e.rootKey == null)
        throw new Error("Agent root key not initialized before polling");
    const w = await ei.create({ certificate: h.certificate, rootKey: e.rootKey, canisterId: t, blsVerify: o }), b = nn(w.lookup([...a, new TextEncoder().encode("status")]));
    let x;
    switch (typeof b > "u" ? x = qn.Unknown : x = new TextDecoder().decode(b), x) {
        case qn.Replied: return { reply: nn(w.lookup([...a, "reply"])), certificate: w };
        case qn.Received:
        case qn.Unknown:
        case qn.Processing: return await r(t, n, x), sm(e, t, n, r, f, o);
        case qn.Rejected: {
            const B = new Uint8Array(nn(w.lookup([...a, "reject_code"])))[0], y = new TextDecoder().decode(nn(w.lookup([...a, "reject_message"])));
            throw new Error(`Call was rejected:
  Request ID: ${pt(n)}
  Reject code: ${B}
  Reject text: ${y}
`);
        }
        case qn.Done: throw new Error(`Call was marked as done but we never saw the reply:
  Request ID: ${pt(n)}
`);
    }
    throw new Error("unreachable");
}
const Ux = ({ IDL: e }) => { const t = e.Variant({ mainnet: e.Null, testnet: e.Null }), n = e.Text, r = e.Record({ network: t, address: n, min_confirmations: e.Opt(e.Nat32) }), i = e.Nat64, o = i, s = e.Nat32, a = e.Record({ start_height: s, end_height: e.Opt(s), network: t }), f = e.Vec(e.Nat8), h = e.Record({ tip_height: s, block_headers: e.Vec(f) }), w = e.Record({ network: t }), b = e.Nat64, x = e.Vec(b), B = e.Record({ network: t, filter: e.Opt(e.Variant({ page: e.Vec(e.Nat8), min_confirmations: e.Nat32 })), address: n }), y = e.Vec(e.Nat8), O = e.Record({ txid: e.Vec(e.Nat8), vout: e.Nat32 }), M = e.Record({ height: e.Nat32, value: i, outpoint: O }), A = e.Record({ next_page: e.Opt(e.Vec(e.Nat8)), tip_height: s, tip_block_hash: y, utxos: e.Vec(M) }), v = e.Record({ transaction: e.Vec(e.Nat8), network: t }), E = e.Principal, z = e.Record({ canister_id: E, num_requested_changes: e.Opt(e.Nat64) }), I = e.Variant({ from_user: e.Record({ user_id: e.Principal }), from_canister: e.Record({ canister_version: e.Opt(e.Nat64), canister_id: e.Principal }) }), L = e.Vec(e.Nat8), V = e.Variant({ creation: e.Record({ controllers: e.Vec(e.Principal) }), code_deployment: e.Record({ mode: e.Variant({ reinstall: e.Null, upgrade: e.Null, install: e.Null }), module_hash: e.Vec(e.Nat8) }), load_snapshot: e.Record({ canister_version: e.Nat64, taken_at_timestamp: e.Nat64, snapshot_id: L }), controllers_change: e.Record({ controllers: e.Vec(e.Principal) }), code_uninstall: e.Null }), W = e.Record({ timestamp_nanos: e.Nat64, canister_version: e.Nat64, origin: I, details: V }), te = e.Record({ controllers: e.Vec(e.Principal), module_hash: e.Opt(e.Vec(e.Nat8)), recent_changes: e.Vec(W), total_num_changes: e.Nat64 }), K = e.Record({ canister_id: E }), de = e.Variant({ controllers: e.Null, public: e.Null, allowed_viewers: e.Vec(e.Principal) }), he = e.Record({ freezing_threshold: e.Nat, controllers: e.Vec(e.Principal), reserved_cycles_limit: e.Nat, log_visibility: de, wasm_memory_limit: e.Nat, memory_allocation: e.Nat, compute_allocation: e.Nat }), U = e.Record({ status: e.Variant({ stopped: e.Null, stopping: e.Null, running: e.Null }), memory_size: e.Nat, cycles: e.Nat, settings: he, query_stats: e.Record({ response_payload_bytes_total: e.Nat, num_instructions_total: e.Nat, num_calls_total: e.Nat, request_payload_bytes_total: e.Nat }), idle_cycles_burned_per_day: e.Nat, module_hash: e.Opt(e.Vec(e.Nat8)), reserved_cycles: e.Nat }), $ = e.Record({ canister_id: E }), X = e.Record({ freezing_threshold: e.Opt(e.Nat), controllers: e.Opt(e.Vec(e.Principal)), reserved_cycles_limit: e.Opt(e.Nat), log_visibility: e.Opt(de), wasm_memory_limit: e.Opt(e.Nat), memory_allocation: e.Opt(e.Nat), compute_allocation: e.Opt(e.Nat) }), Z = e.Record({ settings: e.Opt(X), sender_canister_version: e.Opt(e.Nat64) }), D = e.Record({ canister_id: E }), H = e.Record({ canister_id: E }), ee = e.Record({ canister_id: E, snapshot_id: L }), oe = e.Record({ canister_id: E }), re = e.Variant({ secp256k1: e.Null }), ue = e.Record({ key_id: e.Record({ name: e.Text, curve: re }), canister_id: e.Opt(E), derivation_path: e.Vec(e.Vec(e.Nat8)) }), ne = e.Record({ public_key: e.Vec(e.Nat8), chain_code: e.Vec(e.Nat8) }), _ = e.Record({ canister_id: E }), se = e.Record({ idx: e.Nat64, timestamp_nanos: e.Nat64, content: e.Vec(e.Nat8) }), ce = e.Record({ canister_log_records: e.Vec(se) }), ye = e.Record({ value: e.Text, name: e.Text }), ie = e.Record({ status: e.Nat, body: e.Vec(e.Nat8), headers: e.Vec(ye) }), fe = e.Record({ url: e.Text, method: e.Variant({ get: e.Null, head: e.Null, post: e.Null }), max_response_bytes: e.Opt(e.Nat64), body: e.Opt(e.Vec(e.Nat8)), transform: e.Opt(e.Record({ function: e.Func([e.Record({ context: e.Vec(e.Nat8), response: ie })], [ie], ["query"]), context: e.Vec(e.Nat8) })), headers: e.Vec(ye) }), S = e.Variant({ reinstall: e.Null, upgrade: e.Opt(e.Record({ wasm_memory_persistence: e.Opt(e.Variant({ keep: e.Null, replace: e.Null })), skip_pre_upgrade: e.Opt(e.Bool) })), install: e.Null }), N = e.Record({ hash: e.Vec(e.Nat8) }), R = e.Record({ arg: e.Vec(e.Nat8), wasm_module_hash: e.Vec(e.Nat8), mode: S, chunk_hashes_list: e.Vec(N), target_canister: E, store_canister: e.Opt(E), sender_canister_version: e.Opt(e.Nat64) }), q = e.Vec(e.Nat8), C = e.Record({ arg: e.Vec(e.Nat8), wasm_module: q, mode: S, canister_id: E, sender_canister_version: e.Opt(e.Nat64) }), G = e.Record({ canister_id: E }), p = e.Record({ id: L, total_size: e.Nat64, taken_at_timestamp: e.Nat64 }), u = e.Vec(p), l = e.Record({ canister_id: E, sender_canister_version: e.Opt(e.Nat64), snapshot_id: L }), g = e.Record({ start_at_timestamp_nanos: e.Nat64, subnet_id: e.Principal }), T = e.Record({ num_block_failures_total: e.Nat64, node_id: e.Principal, num_blocks_proposed_total: e.Nat64 }), F = e.Vec(e.Record({ timestamp_nanos: e.Nat64, node_metrics: e.Vec(T) })), Y = e.Record({ settings: e.Opt(X), specified_id: e.Opt(E), amount: e.Opt(e.Nat), sender_canister_version: e.Opt(e.Nat64) }), ae = e.Record({ canister_id: E }), me = e.Record({ canister_id: E, amount: e.Nat }), we = e.Vec(e.Nat8), be = e.Variant({ ed25519: e.Null, bip340secp256k1: e.Null }), m = e.Record({ key_id: e.Record({ algorithm: be, name: e.Text }), canister_id: e.Opt(E), derivation_path: e.Vec(e.Vec(e.Nat8)) }), c = e.Record({ public_key: e.Vec(e.Nat8), chain_code: e.Vec(e.Nat8) }), d = e.Record({ key_id: e.Record({ name: e.Text, curve: re }), derivation_path: e.Vec(e.Vec(e.Nat8)), message_hash: e.Vec(e.Nat8) }), k = e.Record({ signature: e.Vec(e.Nat8) }), j = e.Variant({ bip341: e.Record({ merkle_root_hash: e.Vec(e.Nat8) }) }), J = e.Record({ aux: e.Opt(j), key_id: e.Record({ algorithm: be, name: e.Text }), derivation_path: e.Vec(e.Vec(e.Nat8)), message: e.Vec(e.Nat8) }), Q = e.Record({ signature: e.Vec(e.Nat8) }), Ee = e.Record({ canister_id: E }), Be = e.Record({ canister_id: E }), Se = e.Record({ canister_id: E }), xe = e.Vec(N), Fe = e.Record({ subnet_id: e.Principal }), Ve = e.Record({ replica_version: e.Text }), $u = e.Record({ replace_snapshot: e.Opt(L), canister_id: E }), zu = p, Vu = e.Record({ canister_id: E, sender_canister_version: e.Opt(e.Nat64) }), ju = e.Record({ canister_id: e.Principal, settings: X, sender_canister_version: e.Opt(e.Nat64) }), Lu = e.Record({ chunk: e.Vec(e.Nat8), canister_id: e.Principal }), ir = N; return e.Service({ bitcoin_get_balance: e.Func([r], [o], []), bitcoin_get_block_headers: e.Func([a], [h], []), bitcoin_get_current_fee_percentiles: e.Func([w], [x], []), bitcoin_get_utxos: e.Func([B], [A], []), bitcoin_send_transaction: e.Func([v], [], []), canister_info: e.Func([z], [te], []), canister_status: e.Func([K], [U], []), clear_chunk_store: e.Func([$], [], []), create_canister: e.Func([Z], [D], []), delete_canister: e.Func([H], [], []), delete_canister_snapshot: e.Func([ee], [], []), deposit_cycles: e.Func([oe], [], []), ecdsa_public_key: e.Func([ue], [ne], []), fetch_canister_logs: e.Func([_], [ce], ["query"]), http_request: e.Func([fe], [ie], []), install_chunked_code: e.Func([R], [], []), install_code: e.Func([C], [], []), list_canister_snapshots: e.Func([G], [u], []), load_canister_snapshot: e.Func([l], [], []), node_metrics_history: e.Func([g], [F], []), provisional_create_canister_with_cycles: e.Func([Y], [ae], []), provisional_top_up_canister: e.Func([me], [], []), raw_rand: e.Func([], [we], []), schnorr_public_key: e.Func([m], [c], []), sign_with_ecdsa: e.Func([d], [k], []), sign_with_schnorr: e.Func([J], [Q], []), start_canister: e.Func([Ee], [], []), stop_canister: e.Func([Be], [], []), stored_chunks: e.Func([Se], [xe], []), subnet_info: e.Func([Fe], [Ve], []), take_canister_snapshot: e.Func([$u], [zu], []), uninstall_code: e.Func([Vu], [], []), update_settings: e.Func([ju], [], []), upload_chunk: e.Func([Lu], [ir], []) }); };
class am extends Qe {
    constructor(t, n, r, i) {
        super(["Call failed:", `  Canister: ${t.toText()}`, `  Method: ${n} (${r})`, ...Object.getOwnPropertyNames(i).map(o => `  "${o}": ${JSON.stringify(i[o])}`)].join(`
`)), this.canisterId = t, this.methodName = n, this.type = r, this.props = i;
    }
}
class Fx extends am {
    constructor(t, n, r) { var i; super(t, n, "query", { Status: r.status, Code: (i = Tc[r.reject_code]) !== null && i !== void 0 ? i : `Unknown Code "${r.reject_code}"`, Message: r.reject_message }), this.result = r; }
}
class Qd extends am {
    constructor(t, n, r, i, o, s, a) { super(t, n, "update", Object.assign({ "Request ID": pt(r) }, i.body ? Object.assign(Object.assign({}, a ? { "Error code": a } : {}), { "Reject code": String(o), "Reject message": s }) : { "HTTP status code": i.status.toString(), "HTTP status text": i.statusText })), this.requestId = r, this.response = i, this.reject_code = o, this.reject_message = s, this.error_code = a; }
}
const Jt = Symbol.for("ic-agent-metadata");
class Mu {
    constructor(t) { this[Jt] = Object.freeze(t); }
    static agentOf(t) { return t[Jt].config.agent; }
    static interfaceOf(t) { return t[Jt].service; }
    static canisterIdOf(t) { return Ae.from(t[Jt].config.canisterId); }
    static async install(t, n) { const r = t.mode === void 0 ? { install: null } : t.mode, i = t.arg ? [...new Uint8Array(t.arg)] : [], o = [...new Uint8Array(t.module)], s = typeof n.canisterId == "string" ? Ae.fromText(n.canisterId) : n.canisterId; await Xd(n).install_code({ mode: r, arg: i, wasm_module: o, canister_id: s, sender_canister_version: [] }); }
    static async createCanister(t, n) { function r(o) { return [{ controllers: o.controllers ? [o.controllers] : [], compute_allocation: o.compute_allocation ? [o.compute_allocation] : [], freezing_threshold: o.freezing_threshold ? [o.freezing_threshold] : [], memory_allocation: o.memory_allocation ? [o.memory_allocation] : [], reserved_cycles_limit: [], log_visibility: [], wasm_memory_limit: [] }]; } const { canister_id: i } = await Xd(t || {}).provisional_create_canister_with_cycles({ amount: [], settings: r(n || {}), specified_id: [], sender_canister_version: [] }); return i; }
    static async createAndInstallCanister(t, n, r) { const i = await this.createCanister(r); return await this.install(Object.assign({}, n), Object.assign(Object.assign({}, r), { canisterId: i })), this.createActor(t, Object.assign(Object.assign({}, r), { canisterId: i })); }
    static createActorClass(t, n) { const r = t({ IDL: F2 }); class i extends Mu {
        constructor(s) { if (!s.canisterId)
            throw new Qe(`Canister ID is required, but received ${typeof s.canisterId} instead. If you are using automatically generated declarations, this may be because your application is not setting the canister ID in process.env correctly.`); const a = typeof s.canisterId == "string" ? Ae.fromText(s.canisterId) : s.canisterId; super({ config: Object.assign(Object.assign(Object.assign({}, um), s), { canisterId: a }), service: r }); for (const [f, h] of r._fields)
            n != null && n.httpDetails && h.annotations.push(qc), n != null && n.certificate && h.annotations.push(lm), this[f] = Px(this, f, h, s.blsVerify); }
    } return i; }
    static createActor(t, n) { if (!n.canisterId)
        throw new Qe(`Canister ID is required, but received ${typeof n.canisterId} instead. If you are using automatically generated declarations, this may be because your application is not setting the canister ID in process.env correctly.`); return new (this.createActorClass(t))(n); }
    static createActorWithHttpDetails(t, n) { return new (this.createActorClass(t, { httpDetails: !0 }))(n); }
    static createActorWithExtendedDetails(t, n, r = { httpDetails: !0, certificate: !0 }) { return new (this.createActorClass(t, r))(n); }
}
function gi(e, t) { const n = U1(e, d1.Buffer.from(t)); switch (n.length) {
    case 0: return;
    case 1: return n[0];
    default: return n;
} }
const um = { pollingStrategyFactory: om }, qc = "http-details", lm = "certificate";
function Px(e, t, n, r) { let i; n.annotations.includes("query") || n.annotations.includes("composite_query") ? i = async (s, ...a) => { var f, h; s = Object.assign(Object.assign({}, s), (h = (f = e[Jt].config).queryTransform) === null || h === void 0 ? void 0 : h.call(f, t, a, Object.assign(Object.assign({}, e[Jt].config), s))); const w = s.agent || e[Jt].config.agent || Zd(), b = Ae.from(s.canisterId || e[Jt].config.canisterId), x = Ac(n.argTypes, a), B = await w.query(b, { methodName: t, arg: x, effectiveCanisterId: s.effectiveCanisterId }), y = Object.assign(Object.assign({}, B.httpDetails), { requestDetails: B.requestDetails }); switch (B.status) {
    case "rejected": throw new Fx(b, t, B);
    case "replied": return n.annotations.includes(qc) ? { httpDetails: y, result: gi(n.retTypes, B.reply.arg) } : gi(n.retTypes, B.reply.arg);
} } : i = async (s, ...a) => { var f, h; s = Object.assign(Object.assign({}, s), (h = (f = e[Jt].config).callTransform) === null || h === void 0 ? void 0 : h.call(f, t, a, Object.assign(Object.assign({}, e[Jt].config), s))); const w = s.agent || e[Jt].config.agent || Zd(), { canisterId: b, effectiveCanisterId: x, pollingStrategyFactory: B } = Object.assign(Object.assign(Object.assign({}, um), e[Jt].config), s), y = Ae.from(b), O = x !== void 0 ? Ae.from(x) : y, M = Ac(n.argTypes, a), { requestId: A, response: v, requestDetails: E } = await w.call(y, { methodName: t, arg: M, effectiveCanisterId: O }); let z, I; if (v.body && v.body.certificate) {
    if (w.rootKey == null)
        throw new Error("Agent is missing root key");
    const te = v.body.certificate;
    I = await ei.create({ certificate: tu(te), rootKey: w.rootKey, canisterId: Ae.from(b), blsVerify: r });
    const K = [new TextEncoder().encode("request_status"), A];
    switch (new TextDecoder().decode(nn(I.lookup([...K, "status"])))) {
        case "replied":
            z = nn(I.lookup([...K, "reply"]));
            break;
        case "rejected": {
            const he = new Uint8Array(nn(I.lookup([...K, "reject_code"])))[0], U = new TextDecoder().decode(nn(I.lookup([...K, "reject_message"]))), $ = nn(I.lookup([...K, "error_code"])), X = $ ? new TextDecoder().decode($) : void 0;
            throw new Qd(y, t, A, v, he, U, X);
        }
    }
}
else if (v.body && "reject_message" in v.body) {
    const { reject_code: te, reject_message: K, error_code: de } = v.body;
    throw new Qd(y, t, A, v, te, K, de);
} if (v.status === 202) {
    const te = B(), K = await sm(w, O, A, te, r);
    I = K.certificate, z = K.reply;
} const L = n.annotations.includes(qc), V = n.annotations.includes(lm), W = Object.assign(Object.assign({}, v), { requestDetails: E }); if (z !== void 0)
    return L && V ? { httpDetails: W, certificate: I, result: gi(n.retTypes, z) } : V ? { certificate: I, result: gi(n.retTypes, z) } : L ? { httpDetails: W, result: gi(n.retTypes, z) } : gi(n.retTypes, z); if (n.retTypes.length === 0)
    return L ? { httpDetails: v, result: void 0 } : void 0; throw new Error(`Call was returned undefined, but type [${n.retTypes.join(",")}].`); }; const o = (...s) => i({}, ...s); return o.withOptions = s => (...a) => i(s, ...a), o; }
function Xd(e) { function t(n, r) { if (e.effectiveCanisterId)
    return { effectiveCanisterId: Ae.from(e.effectiveCanisterId) }; const i = r[0]; let o = Ae.fromHex(""); return i && typeof i == "object" && i.target_canister && n === "install_chunked_code" && (o = Ae.from(i.target_canister)), i && typeof i == "object" && i.canister_id && (o = Ae.from(i.canister_id)), { effectiveCanisterId: o }; } return Mu.createActor(Ux, Object.assign(Object.assign(Object.assign({}, e), { canisterId: Ae.fromHex("") }), { callTransform: t, queryTransform: t })); }
const Cx = ({ IDL: e }) => e.Service({ greet: e.Func([e.Text], [e.Text], ["query"]) }), Mx = "be2us-64aaa-aaaaa-qaabq-cai", $x = (e, t = {}) => { const n = t.agent || new Mi({ ...t.agentOptions }); return t.agent && t.agentOptions && console.warn("Detected both agent and agentOptions passed to createActor. Ignoring agentOptions and proceeding with the provided agent."), n.fetchRootKey().catch(r => { console.warn("Unable to fetch root key. Check to ensure that your local replica is running"), console.error(r); }), Mu.createActor(Cx, { agent: n, canisterId: e, ...t.actorOptions }); }, zx = $x(Mx);
function Vx() { const [e, t] = cu.useState(""); function n(r) { r.preventDefault(); const i = r.target.elements.name.value; return zx.greet(i).then(o => { t(o); }), !1; } return pn.jsxs("main", { children: [pn.jsx("img", { src: "/logo2.svg", alt: "DFINITY logo" }), pn.jsx("br", {}), pn.jsx("br", {}), pn.jsxs("form", { action: "#", onSubmit: n, children: [pn.jsx("label", { htmlFor: "name", children: "Enter your name:  " }), pn.jsx("input", { id: "name", alt: "Name", type: "text" }), pn.jsx("button", { type: "submit", children: "Click Me!" })] }), pn.jsx("section", { id: "greeting", children: e })] }); }
Ol.createRoot(document.getElementById("root")).render(pn.jsx(zm.StrictMode, { children: pn.jsx(Vx, {}) }));
