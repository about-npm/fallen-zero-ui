import { defineComponent as Qr, ref as Dt, computed as Io, watch as Ai, onMounted as Vf, onBeforeUnmount as Es, openBlock as ur, createElementBlock as lr, toDisplayString as zf, shallowRef as hc, nextTick as Mi, createElementVNode as Ao, Fragment as au, renderList as ou, renderSlot as vc } from "vue";
import { init as cc } from "echarts";
const Ms = (r, t) => {
  if (r.install = (e) => {
    for (const i of [r, ...Object.values(t ?? {})])
      e.component(i.name, i);
  }, t)
    for (const [e, i] of Object.entries(t))
      r[e] = i;
  return r;
};
function Oo(r, t) {
  let e;
  return (...i) => {
    e && clearTimeout(e), e = setTimeout(() => {
      r(...i);
    }, t);
  };
}
const dc = Qr({
  name: "FzCountTo"
}), pc = /* @__PURE__ */ Qr({
  ...dc,
  props: {
    startVal: { default: 0 },
    endVal: { default: (/* @__PURE__ */ new Date()).getFullYear() },
    duration: { default: 3e3 },
    autoplay: { type: Boolean, default: !0 },
    decimals: { default: 0 },
    decimal: { default: "." },
    separator: { default: "," },
    prefix: { default: "" },
    suffix: { default: "" },
    useEasing: { type: Boolean, default: !0 },
    easingFn: { type: Function, default: (r, t, e, i) => e * (-Math.pow(2, -10 * r / i) + 1) * 1024 / 1023 + t }
  },
  emits: ["callback", "mountedCallback"],
  setup(r, { expose: t, emit: e }) {
    const i = r, n = (S) => !isNaN(parseFloat(S)), a = (S) => {
      let D = S.toFixed(Math.abs(i.decimals));
      D += "";
      const C = D.split(".");
      let b = C[0];
      const M = C.length > 1 ? i.decimal + C[1] : "", E = /(\d+)(\d{3})/;
      if (i.separator && !n(i.separator))
        for (; E.test(b); )
          b = b.replace(E, "$1" + i.separator + "$2");
      return i.prefix + b + M + i.suffix;
    }, o = Dt(i.startVal), s = Dt(a(i.startVal)), u = Dt(null), l = Dt(!1), f = Dt(i.duration), h = Dt(null), c = Dt(null), v = Dt(null), d = Dt(null), _ = Io(() => i.startVal > i.endVal), p = (S) => {
      h.value || (h.value = S), c.value = S;
      const D = S - h.value;
      v.value = f.value - D, i.useEasing ? _.value ? u.value = o.value - i.easingFn(
        D,
        0,
        o.value - i.endVal,
        f.value
      ) : u.value = i.easingFn(
        D,
        o.value,
        i.endVal - o.value,
        f.value
      ) : _.value ? u.value = o.value - (o.value - i.endVal) * (D / f.value) : u.value = o.value + (i.endVal - o.value) * (D / f.value), _.value ? u.value = u.value < i.endVal ? i.endVal : u.value : u.value = u.value > i.endVal ? i.endVal : u.value, s.value = a(u.value), D < f.value ? (d.value !== null && cancelAnimationFrame(d.value), d.value = requestAnimationFrame(p)) : (d.value !== null && cancelAnimationFrame(d.value), e("callback"));
    }, g = () => {
      o.value = i.startVal, h.value = null, f.value = i.duration, l.value = !1, d.value !== null && cancelAnimationFrame(d.value), d.value = requestAnimationFrame(p);
    }, y = () => {
      h.value = null, f.value = +(v.value || 0), o.value = +(u.value || 0), d.value !== null && cancelAnimationFrame(d.value), d.value = requestAnimationFrame(p), l.value = !1;
    }, m = () => {
      d.value !== null && cancelAnimationFrame(d.value), l.value = !0;
    }, w = () => {
      l.value ? y() : m();
    }, T = () => {
      h.value = null, d.value !== null && cancelAnimationFrame(d.value), s.value = a(i.startVal);
    };
    return Ai(
      () => [i.startVal, i.endVal],
      () => {
        i.autoplay && g();
      }
    ), Vf(() => {
      i.autoplay && g(), e("mountedCallback");
    }), Es(() => {
      d.value !== null && cancelAnimationFrame(d.value);
    }), t({ pauseResume: w, pause: m, reset: T, resume: y, start: g }), (S, D) => (ur(), lr(
      "span",
      null,
      zf(s.value),
      1
      /* TEXT */
    ));
  }
}), gc = Ms(pc);
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var No = function(r, t) {
  return No = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, i) {
    e.__proto__ = i;
  } || function(e, i) {
    for (var n in i)
      Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n]);
  }, No(r, t);
};
function j(r, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
  No(r, t);
  function e() {
    this.constructor = r;
  }
  r.prototype = t === null ? Object.create(t) : (e.prototype = t.prototype, new e());
}
var _c = function() {
  function r() {
    this.firefox = !1, this.ie = !1, this.edge = !1, this.newEdge = !1, this.weChat = !1;
  }
  return r;
}(), yc = function() {
  function r() {
    this.browser = new _c(), this.node = !1, this.wxa = !1, this.worker = !1, this.svgSupported = !1, this.touchEventsSupported = !1, this.pointerEventsSupported = !1, this.domSupported = !1, this.transformSupported = !1, this.transform3dSupported = !1, this.hasGlobalWindow = typeof window < "u";
  }
  return r;
}(), sr = new yc();
typeof wx == "object" && typeof wx.getSystemInfoSync == "function" ? (sr.wxa = !0, sr.touchEventsSupported = !0) : typeof document > "u" && typeof self < "u" ? sr.worker = !0 : typeof navigator > "u" ? (sr.node = !0, sr.svgSupported = !0) : mc(navigator.userAgent, sr);
function mc(r, t) {
  var e = t.browser, i = r.match(/Firefox\/([\d.]+)/), n = r.match(/MSIE\s([\d.]+)/) || r.match(/Trident\/.+?rv:(([\d.]+))/), a = r.match(/Edge?\/([\d.]+)/), o = /micromessenger/i.test(r);
  i && (e.firefox = !0, e.version = i[1]), n && (e.ie = !0, e.version = n[1]), a && (e.edge = !0, e.version = a[1], e.newEdge = +a[1].split(".")[0] > 18), o && (e.weChat = !0), t.svgSupported = typeof SVGRect < "u", t.touchEventsSupported = "ontouchstart" in window && !e.ie && !e.edge, t.pointerEventsSupported = "onpointerdown" in window && (e.edge || e.ie && +e.version >= 11), t.domSupported = typeof document < "u";
  var s = document.documentElement.style;
  t.transform3dSupported = (e.ie && "transition" in s || e.edge || "WebKitCSSMatrix" in window && "m11" in new WebKitCSSMatrix() || "MozPerspective" in s) && !("OTransition" in s), t.transformSupported = t.transform3dSupported || e.ie && +e.version >= 9;
}
const rt = sr;
var Ls = 12, wc = "sans-serif", _r = Ls + "px " + wc, Sc = 20, Tc = 100, Dc = "007LLmW'55;N0500LLLLLLLLLL00NNNLzWW\\\\WQb\\0FWLg\\bWb\\WQ\\WrWWQ000CL5LLFLL0LL**F*gLLLL5F0LF\\FFF5.5N";
function Cc(r) {
  var t = {};
  if (typeof JSON > "u")
    return t;
  for (var e = 0; e < r.length; e++) {
    var i = String.fromCharCode(e + 32), n = (r.charCodeAt(e) - Sc) / Tc;
    t[i] = n;
  }
  return t;
}
var bc = Cc(Dc), Jr = {
  createCanvas: function() {
    return typeof document < "u" && document.createElement("canvas");
  },
  measureText: function() {
    var r, t;
    return function(e, i) {
      if (!r) {
        var n = Jr.createCanvas();
        r = n && n.getContext("2d");
      }
      if (r)
        return t !== i && (t = r.font = i || _r), r.measureText(e);
      e = e || "", i = i || _r;
      var a = /(\d+)px/.exec(i), o = a && +a[1] || Ls, s = 0;
      if (i.indexOf("mono") >= 0)
        s = o * e.length;
      else
        for (var u = 0; u < e.length; u++) {
          var l = bc[e[u]];
          s += l == null ? o : l * o;
        }
      return { width: s };
    };
  }(),
  loadImage: function(r, t, e) {
    var i = new Image();
    return i.onload = t, i.onerror = e, i.src = r, i;
  }
}, Hf = ti([
  "Function",
  "RegExp",
  "Date",
  "Error",
  "CanvasGradient",
  "CanvasPattern",
  "Image",
  "Canvas"
], function(r, t) {
  return r["[object " + t + "]"] = !0, r;
}, {}), Uf = ti([
  "Int8",
  "Uint8",
  "Uint8Clamped",
  "Int16",
  "Uint16",
  "Int32",
  "Uint32",
  "Float32",
  "Float64"
], function(r, t) {
  return r["[object " + t + "Array]"] = !0, r;
}, {}), jr = Object.prototype.toString, la = Array.prototype, Ec = la.forEach, Mc = la.filter, xs = la.slice, Lc = la.map, su = (function() {
}).constructor, Zi = su ? su.prototype : null, Ps = "__proto__", xc = 2311;
function Yf() {
  return xc++;
}
function cr() {
  for (var r = [], t = 0; t < arguments.length; t++)
    r[t] = arguments[t];
  typeof console < "u" && console.error.apply(console, r);
}
function K(r) {
  if (r == null || typeof r != "object")
    return r;
  var t = r, e = jr.call(r);
  if (e === "[object Array]") {
    if (!Oi(r)) {
      t = [];
      for (var i = 0, n = r.length; i < n; i++)
        t[i] = K(r[i]);
    }
  } else if (Uf[e]) {
    if (!Oi(r)) {
      var a = r.constructor;
      if (a.from)
        t = a.from(r);
      else {
        t = new a(r.length);
        for (var i = 0, n = r.length; i < n; i++)
          t[i] = r[i];
      }
    }
  } else if (!Hf[e] && !Oi(r) && !Bo(r)) {
    t = {};
    for (var o in r)
      r.hasOwnProperty(o) && o !== Ps && (t[o] = K(r[o]));
  }
  return t;
}
function ft(r, t, e) {
  if (!F(t) || !F(r))
    return e ? K(t) : r;
  for (var i in t)
    if (t.hasOwnProperty(i) && i !== Ps) {
      var n = r[i], a = t[i];
      F(a) && F(n) && !Y(a) && !Y(n) && !Bo(a) && !Bo(n) && !uu(a) && !uu(n) && !Oi(a) && !Oi(n) ? ft(n, a, e) : (e || !(i in r)) && (r[i] = K(t[i]));
    }
  return r;
}
function N(r, t) {
  if (Object.assign)
    Object.assign(r, t);
  else
    for (var e in t)
      t.hasOwnProperty(e) && e !== Ps && (r[e] = t[e]);
  return r;
}
function Lt(r, t, e) {
  for (var i = lt(t), n = 0; n < i.length; n++) {
    var a = i[n];
    (e ? t[a] != null : r[a] == null) && (r[a] = t[a]);
  }
  return r;
}
function nt(r, t) {
  if (r) {
    if (r.indexOf)
      return r.indexOf(t);
    for (var e = 0, i = r.length; e < i; e++)
      if (r[e] === t)
        return e;
  }
  return -1;
}
function Pc(r, t) {
  var e = r.prototype;
  function i() {
  }
  i.prototype = t.prototype, r.prototype = new i();
  for (var n in e)
    e.hasOwnProperty(n) && (r.prototype[n] = e[n]);
  r.prototype.constructor = r, r.superClass = t;
}
function Ee(r, t, e) {
  if (r = "prototype" in r ? r.prototype : r, t = "prototype" in t ? t.prototype : t, Object.getOwnPropertyNames)
    for (var i = Object.getOwnPropertyNames(t), n = 0; n < i.length; n++) {
      var a = i[n];
      a !== "constructor" && (e ? t[a] != null : r[a] == null) && (r[a] = t[a]);
    }
  else
    Lt(r, t, e);
}
function Wt(r) {
  return !r || typeof r == "string" ? !1 : typeof r.length == "number";
}
function L(r, t, e) {
  if (r && t)
    if (r.forEach && r.forEach === Ec)
      r.forEach(t, e);
    else if (r.length === +r.length)
      for (var i = 0, n = r.length; i < n; i++)
        t.call(e, r[i], i, r);
    else
      for (var a in r)
        r.hasOwnProperty(a) && t.call(e, r[a], a, r);
}
function it(r, t, e) {
  if (!r)
    return [];
  if (!t)
    return Is(r);
  if (r.map && r.map === Lc)
    return r.map(t, e);
  for (var i = [], n = 0, a = r.length; n < a; n++)
    i.push(t.call(e, r[n], n, r));
  return i;
}
function ti(r, t, e, i) {
  if (r && t) {
    for (var n = 0, a = r.length; n < a; n++)
      e = t.call(i, e, r[n], n, r);
    return e;
  }
}
function It(r, t, e) {
  if (!r)
    return [];
  if (!t)
    return Is(r);
  if (r.filter && r.filter === Mc)
    return r.filter(t, e);
  for (var i = [], n = 0, a = r.length; n < a; n++)
    t.call(e, r[n], n, r) && i.push(r[n]);
  return i;
}
function lt(r) {
  if (!r)
    return [];
  if (Object.keys)
    return Object.keys(r);
  var t = [];
  for (var e in r)
    r.hasOwnProperty(e) && t.push(e);
  return t;
}
function Rc(r, t) {
  for (var e = [], i = 2; i < arguments.length; i++)
    e[i - 2] = arguments[i];
  return function() {
    return r.apply(t, e.concat(xs.call(arguments)));
  };
}
var At = Zi && J(Zi.bind) ? Zi.call.bind(Zi.bind) : Rc;
function Rs(r) {
  for (var t = [], e = 1; e < arguments.length; e++)
    t[e - 1] = arguments[e];
  return function() {
    return r.apply(this, t.concat(xs.call(arguments)));
  };
}
function Y(r) {
  return Array.isArray ? Array.isArray(r) : jr.call(r) === "[object Array]";
}
function J(r) {
  return typeof r == "function";
}
function Z(r) {
  return typeof r == "string";
}
function Gf(r) {
  return jr.call(r) === "[object String]";
}
function Et(r) {
  return typeof r == "number";
}
function F(r) {
  var t = typeof r;
  return t === "function" || !!r && t === "object";
}
function uu(r) {
  return !!Hf[jr.call(r)];
}
function Nt(r) {
  return !!Uf[jr.call(r)];
}
function Bo(r) {
  return typeof r == "object" && typeof r.nodeType == "number" && typeof r.ownerDocument == "object";
}
function fa(r) {
  return r.colorStops != null;
}
function Ic(r) {
  return r.image != null;
}
function Ac(r) {
  return jr.call(r) === "[object RegExp]";
}
function Wf(r) {
  return r !== r;
}
function W(r, t) {
  return r ?? t;
}
function Mn(r, t, e) {
  return r ?? t ?? e;
}
function Is(r) {
  for (var t = [], e = 1; e < arguments.length; e++)
    t[e - 1] = arguments[e];
  return xs.apply(r, t);
}
function Oc(r) {
  if (typeof r == "number")
    return [r, r, r, r];
  var t = r.length;
  return t === 2 ? [r[0], r[1], r[0], r[1]] : t === 3 ? [r[0], r[1], r[2], r[1]] : r;
}
function U(r, t) {
  if (!r)
    throw new Error(t);
}
function Ne(r) {
  return r == null ? null : typeof r.trim == "function" ? r.trim() : r.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
}
var $f = "__ec_primitive__";
function Hn(r) {
  r[$f] = !0;
}
function Oi(r) {
  return r[$f];
}
var Nc = function() {
  function r() {
    this.data = {};
  }
  return r.prototype.delete = function(t) {
    var e = this.has(t);
    return e && delete this.data[t], e;
  }, r.prototype.has = function(t) {
    return this.data.hasOwnProperty(t);
  }, r.prototype.get = function(t) {
    return this.data[t];
  }, r.prototype.set = function(t, e) {
    return this.data[t] = e, this;
  }, r.prototype.keys = function() {
    return lt(this.data);
  }, r.prototype.forEach = function(t) {
    var e = this.data;
    for (var i in e)
      e.hasOwnProperty(i) && t(e[i], i);
  }, r;
}(), Xf = typeof Map == "function";
function Bc() {
  return Xf ? /* @__PURE__ */ new Map() : new Nc();
}
var kc = function() {
  function r(t) {
    var e = Y(t);
    this.data = Bc();
    var i = this;
    t instanceof r ? t.each(n) : t && L(t, n);
    function n(a, o) {
      e ? i.set(a, o) : i.set(o, a);
    }
  }
  return r.prototype.hasKey = function(t) {
    return this.data.has(t);
  }, r.prototype.get = function(t) {
    return this.data.get(t);
  }, r.prototype.set = function(t, e) {
    return this.data.set(t, e), e;
  }, r.prototype.each = function(t, e) {
    this.data.forEach(function(i, n) {
      t.call(e, i, n);
    });
  }, r.prototype.keys = function() {
    var t = this.data.keys();
    return Xf ? Array.from(t) : t;
  }, r.prototype.removeKey = function(t) {
    this.data.delete(t);
  }, r;
}();
function $(r) {
  return new kc(r);
}
function Fc(r, t) {
  for (var e = new r.constructor(r.length + t.length), i = 0; i < r.length; i++)
    e[i] = r[i];
  for (var n = r.length, i = 0; i < t.length; i++)
    e[i + n] = t[i];
  return e;
}
function ha(r, t) {
  var e;
  if (Object.create)
    e = Object.create(r);
  else {
    var i = function() {
    };
    i.prototype = r, e = new i();
  }
  return t && N(e, t), e;
}
function qf(r) {
  var t = r.style;
  t.webkitUserSelect = "none", t.userSelect = "none", t.webkitTapHighlightColor = "rgba(0,0,0,0)", t["-webkit-touch-callout"] = "none";
}
function Un(r, t) {
  return r.hasOwnProperty(t);
}
function te() {
}
var Vc = 180 / Math.PI;
function ei(r, t) {
  return r == null && (r = 0), t == null && (t = 0), [r, t];
}
function zc(r) {
  return [r[0], r[1]];
}
function lu(r, t, e) {
  return r[0] = t[0] + e[0], r[1] = t[1] + e[1], r;
}
function Hc(r, t, e) {
  return r[0] = t[0] - e[0], r[1] = t[1] - e[1], r;
}
function Ea(r, t, e) {
  return r[0] = t[0] * e, r[1] = t[1] * e, r;
}
function ko(r, t) {
  return Math.sqrt((r[0] - t[0]) * (r[0] - t[0]) + (r[1] - t[1]) * (r[1] - t[1]));
}
var Fo = ko;
function Uc(r, t) {
  return (r[0] - t[0]) * (r[0] - t[0]) + (r[1] - t[1]) * (r[1] - t[1]);
}
var Ur = Uc;
function Ma(r, t, e, i) {
  return r[0] = t[0] + i * (e[0] - t[0]), r[1] = t[1] + i * (e[1] - t[1]), r;
}
function Ni(r, t, e) {
  var i = t[0], n = t[1];
  return r[0] = e[0] * i + e[2] * n + e[4], r[1] = e[1] * i + e[3] * n + e[5], r;
}
function Nr(r, t, e) {
  return r[0] = Math.min(t[0], e[0]), r[1] = Math.min(t[1], e[1]), r;
}
function Br(r, t, e) {
  return r[0] = Math.max(t[0], e[0]), r[1] = Math.max(t[1], e[1]), r;
}
var Sr = function() {
  function r(t, e) {
    this.target = t, this.topTarget = e && e.topTarget;
  }
  return r;
}(), Yc = function() {
  function r(t) {
    this.handler = t, t.on("mousedown", this._dragStart, this), t.on("mousemove", this._drag, this), t.on("mouseup", this._dragEnd, this);
  }
  return r.prototype._dragStart = function(t) {
    for (var e = t.target; e && !e.draggable; )
      e = e.parent || e.__hostTarget;
    e && (this._draggingTarget = e, e.dragging = !0, this._x = t.offsetX, this._y = t.offsetY, this.handler.dispatchToElement(new Sr(e, t), "dragstart", t.event));
  }, r.prototype._drag = function(t) {
    var e = this._draggingTarget;
    if (e) {
      var i = t.offsetX, n = t.offsetY, a = i - this._x, o = n - this._y;
      this._x = i, this._y = n, e.drift(a, o, t), this.handler.dispatchToElement(new Sr(e, t), "drag", t.event);
      var s = this.handler.findHover(i, n, e).target, u = this._dropTarget;
      this._dropTarget = s, e !== s && (u && s !== u && this.handler.dispatchToElement(new Sr(u, t), "dragleave", t.event), s && s !== u && this.handler.dispatchToElement(new Sr(s, t), "dragenter", t.event));
    }
  }, r.prototype._dragEnd = function(t) {
    var e = this._draggingTarget;
    e && (e.dragging = !1), this.handler.dispatchToElement(new Sr(e, t), "dragend", t.event), this._dropTarget && this.handler.dispatchToElement(new Sr(this._dropTarget, t), "drop", t.event), this._draggingTarget = null, this._dropTarget = null;
  }, r;
}();
const Gc = Yc;
var Wc = function() {
  function r(t) {
    t && (this._$eventProcessor = t);
  }
  return r.prototype.on = function(t, e, i, n) {
    this._$handlers || (this._$handlers = {});
    var a = this._$handlers;
    if (typeof e == "function" && (n = i, i = e, e = null), !i || !t)
      return this;
    var o = this._$eventProcessor;
    e != null && o && o.normalizeQuery && (e = o.normalizeQuery(e)), a[t] || (a[t] = []);
    for (var s = 0; s < a[t].length; s++)
      if (a[t][s].h === i)
        return this;
    var u = {
      h: i,
      query: e,
      ctx: n || this,
      callAtLast: i.zrEventfulCallAtLast
    }, l = a[t].length - 1, f = a[t][l];
    return f && f.callAtLast ? a[t].splice(l, 0, u) : a[t].push(u), this;
  }, r.prototype.isSilent = function(t) {
    var e = this._$handlers;
    return !e || !e[t] || !e[t].length;
  }, r.prototype.off = function(t, e) {
    var i = this._$handlers;
    if (!i)
      return this;
    if (!t)
      return this._$handlers = {}, this;
    if (e) {
      if (i[t]) {
        for (var n = [], a = 0, o = i[t].length; a < o; a++)
          i[t][a].h !== e && n.push(i[t][a]);
        i[t] = n;
      }
      i[t] && i[t].length === 0 && delete i[t];
    } else
      delete i[t];
    return this;
  }, r.prototype.trigger = function(t) {
    for (var e = [], i = 1; i < arguments.length; i++)
      e[i - 1] = arguments[i];
    if (!this._$handlers)
      return this;
    var n = this._$handlers[t], a = this._$eventProcessor;
    if (n)
      for (var o = e.length, s = n.length, u = 0; u < s; u++) {
        var l = n[u];
        if (!(a && a.filter && l.query != null && !a.filter(t, l.query)))
          switch (o) {
            case 0:
              l.h.call(l.ctx);
              break;
            case 1:
              l.h.call(l.ctx, e[0]);
              break;
            case 2:
              l.h.call(l.ctx, e[0], e[1]);
              break;
            default:
              l.h.apply(l.ctx, e);
              break;
          }
      }
    return a && a.afterTrigger && a.afterTrigger(t), this;
  }, r.prototype.triggerWithContext = function(t) {
    for (var e = [], i = 1; i < arguments.length; i++)
      e[i - 1] = arguments[i];
    if (!this._$handlers)
      return this;
    var n = this._$handlers[t], a = this._$eventProcessor;
    if (n)
      for (var o = e.length, s = e[o - 1], u = n.length, l = 0; l < u; l++) {
        var f = n[l];
        if (!(a && a.filter && f.query != null && !a.filter(t, f.query)))
          switch (o) {
            case 0:
              f.h.call(s);
              break;
            case 1:
              f.h.call(s, e[0]);
              break;
            case 2:
              f.h.call(s, e[0], e[1]);
              break;
            default:
              f.h.apply(s, e.slice(1, o - 1));
              break;
          }
      }
    return a && a.afterTrigger && a.afterTrigger(t), this;
  }, r;
}();
const de = Wc;
var $c = Math.log(2);
function Vo(r, t, e, i, n, a) {
  var o = i + "-" + n, s = r.length;
  if (a.hasOwnProperty(o))
    return a[o];
  if (t === 1) {
    var u = Math.round(Math.log((1 << s) - 1 & ~n) / $c);
    return r[e][u];
  }
  for (var l = i | 1 << e, f = e + 1; i & 1 << f; )
    f++;
  for (var h = 0, c = 0, v = 0; c < s; c++) {
    var d = 1 << c;
    d & n || (h += (v % 2 ? -1 : 1) * r[e][c] * Vo(r, t - 1, f, l, n | d, a), v++);
  }
  return a[o] = h, h;
}
function fu(r, t) {
  var e = [
    [r[0], r[1], 1, 0, 0, 0, -t[0] * r[0], -t[0] * r[1]],
    [0, 0, 0, r[0], r[1], 1, -t[1] * r[0], -t[1] * r[1]],
    [r[2], r[3], 1, 0, 0, 0, -t[2] * r[2], -t[2] * r[3]],
    [0, 0, 0, r[2], r[3], 1, -t[3] * r[2], -t[3] * r[3]],
    [r[4], r[5], 1, 0, 0, 0, -t[4] * r[4], -t[4] * r[5]],
    [0, 0, 0, r[4], r[5], 1, -t[5] * r[4], -t[5] * r[5]],
    [r[6], r[7], 1, 0, 0, 0, -t[6] * r[6], -t[6] * r[7]],
    [0, 0, 0, r[6], r[7], 1, -t[7] * r[6], -t[7] * r[7]]
  ], i = {}, n = Vo(e, 8, 0, 0, 0, i);
  if (n !== 0) {
    for (var a = [], o = 0; o < 8; o++)
      for (var s = 0; s < 8; s++)
        a[s] == null && (a[s] = 0), a[s] += ((o + s) % 2 ? -1 : 1) * Vo(e, 7, o === 0 ? 1 : 0, 1 << o, 1 << s, i) / n * t[o];
    return function(u, l, f) {
      var h = l * a[6] + f * a[7] + 1;
      u[0] = (l * a[0] + f * a[1] + a[2]) / h, u[1] = (l * a[3] + f * a[4] + a[5]) / h;
    };
  }
}
var hu = "___zrEVENTSAVED";
function Xc(r, t, e, i, n) {
  if (t.getBoundingClientRect && rt.domSupported && !Zf(t)) {
    var a = t[hu] || (t[hu] = {}), o = qc(t, a), s = Zc(o, a, n);
    if (s)
      return s(r, e, i), !0;
  }
  return !1;
}
function qc(r, t) {
  var e = t.markers;
  if (e)
    return e;
  e = t.markers = [];
  for (var i = ["left", "right"], n = ["top", "bottom"], a = 0; a < 4; a++) {
    var o = document.createElement("div"), s = o.style, u = a % 2, l = (a >> 1) % 2;
    s.cssText = [
      "position: absolute",
      "visibility: hidden",
      "padding: 0",
      "margin: 0",
      "border-width: 0",
      "user-select: none",
      "width:0",
      "height:0",
      i[u] + ":0",
      n[l] + ":0",
      i[1 - u] + ":auto",
      n[1 - l] + ":auto",
      ""
    ].join("!important;"), r.appendChild(o), e.push(o);
  }
  return e;
}
function Zc(r, t, e) {
  for (var i = e ? "invTrans" : "trans", n = t[i], a = t.srcCoords, o = [], s = [], u = !0, l = 0; l < 4; l++) {
    var f = r[l].getBoundingClientRect(), h = 2 * l, c = f.left, v = f.top;
    o.push(c, v), u = u && a && c === a[h] && v === a[h + 1], s.push(r[l].offsetLeft, r[l].offsetTop);
  }
  return u && n ? n : (t.srcCoords = o, t[i] = e ? fu(s, o) : fu(o, s));
}
function Zf(r) {
  return r.nodeName.toUpperCase() === "CANVAS";
}
var Kc = /([&<>"'])/g, Qc = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
};
function Jc(r) {
  return r == null ? "" : (r + "").replace(Kc, function(t, e) {
    return Qc[e];
  });
}
var jc = /^(?:mouse|pointer|contextmenu|drag|drop)|click/, La = [], td = rt.browser.firefox && +rt.browser.version.split(".")[0] < 39;
function zo(r, t, e, i) {
  return e = e || {}, i ? vu(r, t, e) : td && t.layerX != null && t.layerX !== t.offsetX ? (e.zrX = t.layerX, e.zrY = t.layerY) : t.offsetX != null ? (e.zrX = t.offsetX, e.zrY = t.offsetY) : vu(r, t, e), e;
}
function vu(r, t, e) {
  if (rt.domSupported && r.getBoundingClientRect) {
    var i = t.clientX, n = t.clientY;
    if (Zf(r)) {
      var a = r.getBoundingClientRect();
      e.zrX = i - a.left, e.zrY = n - a.top;
      return;
    } else if (Xc(La, r, i, n)) {
      e.zrX = La[0], e.zrY = La[1];
      return;
    }
  }
  e.zrX = e.zrY = 0;
}
function As(r) {
  return r || window.event;
}
function ee(r, t, e) {
  if (t = As(t), t.zrX != null)
    return t;
  var i = t.type, n = i && i.indexOf("touch") >= 0;
  if (n) {
    var o = i !== "touchend" ? t.targetTouches[0] : t.changedTouches[0];
    o && zo(r, o, t, e);
  } else {
    zo(r, t, t, e);
    var a = ed(t);
    t.zrDelta = a ? a / 120 : -(t.detail || 0) / 3;
  }
  var s = t.button;
  return t.which == null && s !== void 0 && jc.test(t.type) && (t.which = s & 1 ? 1 : s & 2 ? 3 : s & 4 ? 2 : 0), t;
}
function ed(r) {
  var t = r.wheelDelta;
  if (t)
    return t;
  var e = r.deltaX, i = r.deltaY;
  if (e == null || i == null)
    return t;
  var n = Math.abs(i !== 0 ? i : e), a = i > 0 ? -1 : i < 0 ? 1 : e > 0 ? -1 : 1;
  return 3 * n * a;
}
function rd(r, t, e, i) {
  r.addEventListener(t, e, i);
}
function id(r, t, e, i) {
  r.removeEventListener(t, e, i);
}
var nd = function(r) {
  r.preventDefault(), r.stopPropagation(), r.cancelBubble = !0;
}, ad = function() {
  function r() {
    this._track = [];
  }
  return r.prototype.recognize = function(t, e, i) {
    return this._doTrack(t, e, i), this._recognize(t);
  }, r.prototype.clear = function() {
    return this._track.length = 0, this;
  }, r.prototype._doTrack = function(t, e, i) {
    var n = t.touches;
    if (n) {
      for (var a = {
        points: [],
        touches: [],
        target: e,
        event: t
      }, o = 0, s = n.length; o < s; o++) {
        var u = n[o], l = zo(i, u, {});
        a.points.push([l.zrX, l.zrY]), a.touches.push(u);
      }
      this._track.push(a);
    }
  }, r.prototype._recognize = function(t) {
    for (var e in xa)
      if (xa.hasOwnProperty(e)) {
        var i = xa[e](this._track, t);
        if (i)
          return i;
      }
  }, r;
}();
function cu(r) {
  var t = r[1][0] - r[0][0], e = r[1][1] - r[0][1];
  return Math.sqrt(t * t + e * e);
}
function od(r) {
  return [
    (r[0][0] + r[1][0]) / 2,
    (r[0][1] + r[1][1]) / 2
  ];
}
var xa = {
  pinch: function(r, t) {
    var e = r.length;
    if (e) {
      var i = (r[e - 1] || {}).points, n = (r[e - 2] || {}).points || i;
      if (n && n.length > 1 && i && i.length > 1) {
        var a = cu(i) / cu(n);
        !isFinite(a) && (a = 1), t.pinchScale = a;
        var o = od(i);
        return t.pinchX = o[0], t.pinchY = o[1], {
          type: "pinch",
          target: r[0].target,
          event: t
        };
      }
    }
  }
};
function Yn() {
  return [1, 0, 0, 1, 0, 0];
}
function sd(r) {
  return r[0] = 1, r[1] = 0, r[2] = 0, r[3] = 1, r[4] = 0, r[5] = 0, r;
}
function ud(r, t) {
  return r[0] = t[0], r[1] = t[1], r[2] = t[2], r[3] = t[3], r[4] = t[4], r[5] = t[5], r;
}
function Pa(r, t, e) {
  var i = t[0] * e[0] + t[2] * e[1], n = t[1] * e[0] + t[3] * e[1], a = t[0] * e[2] + t[2] * e[3], o = t[1] * e[2] + t[3] * e[3], s = t[0] * e[4] + t[2] * e[5] + t[4], u = t[1] * e[4] + t[3] * e[5] + t[5];
  return r[0] = i, r[1] = n, r[2] = a, r[3] = o, r[4] = s, r[5] = u, r;
}
function du(r, t, e) {
  return r[0] = t[0], r[1] = t[1], r[2] = t[2], r[3] = t[3], r[4] = t[4] + e[0], r[5] = t[5] + e[1], r;
}
function ld(r, t, e) {
  var i = t[0], n = t[2], a = t[4], o = t[1], s = t[3], u = t[5], l = Math.sin(e), f = Math.cos(e);
  return r[0] = i * f + o * l, r[1] = -i * l + o * f, r[2] = n * f + s * l, r[3] = -n * l + f * s, r[4] = f * a + l * u, r[5] = f * u - l * a, r;
}
function fd(r, t, e) {
  var i = e[0], n = e[1];
  return r[0] = t[0] * i, r[1] = t[1] * n, r[2] = t[2] * i, r[3] = t[3] * n, r[4] = t[4] * i, r[5] = t[5] * n, r;
}
function Kf(r, t) {
  var e = t[0], i = t[2], n = t[4], a = t[1], o = t[3], s = t[5], u = e * o - a * i;
  return u ? (u = 1 / u, r[0] = o * u, r[1] = -a * u, r[2] = -i * u, r[3] = e * u, r[4] = (i * s - o * n) * u, r[5] = (a * n - e * s) * u, r) : null;
}
var hd = function() {
  function r(t, e) {
    this.x = t || 0, this.y = e || 0;
  }
  return r.prototype.copy = function(t) {
    return this.x = t.x, this.y = t.y, this;
  }, r.prototype.clone = function() {
    return new r(this.x, this.y);
  }, r.prototype.set = function(t, e) {
    return this.x = t, this.y = e, this;
  }, r.prototype.equal = function(t) {
    return t.x === this.x && t.y === this.y;
  }, r.prototype.add = function(t) {
    return this.x += t.x, this.y += t.y, this;
  }, r.prototype.scale = function(t) {
    this.x *= t, this.y *= t;
  }, r.prototype.scaleAndAdd = function(t, e) {
    this.x += t.x * e, this.y += t.y * e;
  }, r.prototype.sub = function(t) {
    return this.x -= t.x, this.y -= t.y, this;
  }, r.prototype.dot = function(t) {
    return this.x * t.x + this.y * t.y;
  }, r.prototype.len = function() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }, r.prototype.lenSquare = function() {
    return this.x * this.x + this.y * this.y;
  }, r.prototype.normalize = function() {
    var t = this.len();
    return this.x /= t, this.y /= t, this;
  }, r.prototype.distance = function(t) {
    var e = this.x - t.x, i = this.y - t.y;
    return Math.sqrt(e * e + i * i);
  }, r.prototype.distanceSquare = function(t) {
    var e = this.x - t.x, i = this.y - t.y;
    return e * e + i * i;
  }, r.prototype.negate = function() {
    return this.x = -this.x, this.y = -this.y, this;
  }, r.prototype.transform = function(t) {
    if (t) {
      var e = this.x, i = this.y;
      return this.x = t[0] * e + t[2] * i + t[4], this.y = t[1] * e + t[3] * i + t[5], this;
    }
  }, r.prototype.toArray = function(t) {
    return t[0] = this.x, t[1] = this.y, t;
  }, r.prototype.fromArray = function(t) {
    this.x = t[0], this.y = t[1];
  }, r.set = function(t, e, i) {
    t.x = e, t.y = i;
  }, r.copy = function(t, e) {
    t.x = e.x, t.y = e.y;
  }, r.len = function(t) {
    return Math.sqrt(t.x * t.x + t.y * t.y);
  }, r.lenSquare = function(t) {
    return t.x * t.x + t.y * t.y;
  }, r.dot = function(t, e) {
    return t.x * e.x + t.y * e.y;
  }, r.add = function(t, e, i) {
    t.x = e.x + i.x, t.y = e.y + i.y;
  }, r.sub = function(t, e, i) {
    t.x = e.x - i.x, t.y = e.y - i.y;
  }, r.scale = function(t, e, i) {
    t.x = e.x * i, t.y = e.y * i;
  }, r.scaleAndAdd = function(t, e, i, n) {
    t.x = e.x + i.x * n, t.y = e.y + i.y * n;
  }, r.lerp = function(t, e, i, n) {
    var a = 1 - n;
    t.x = a * e.x + n * i.x, t.y = a * e.y + n * i.y;
  }, r;
}();
const V = hd;
var Ki = Math.min, Qi = Math.max, Ve = new V(), ze = new V(), He = new V(), Ue = new V(), si = new V(), ui = new V(), vd = function() {
  function r(t, e, i, n) {
    i < 0 && (t = t + i, i = -i), n < 0 && (e = e + n, n = -n), this.x = t, this.y = e, this.width = i, this.height = n;
  }
  return r.prototype.union = function(t) {
    var e = Ki(t.x, this.x), i = Ki(t.y, this.y);
    isFinite(this.x) && isFinite(this.width) ? this.width = Qi(t.x + t.width, this.x + this.width) - e : this.width = t.width, isFinite(this.y) && isFinite(this.height) ? this.height = Qi(t.y + t.height, this.y + this.height) - i : this.height = t.height, this.x = e, this.y = i;
  }, r.prototype.applyTransform = function(t) {
    r.applyTransform(this, this, t);
  }, r.prototype.calculateTransform = function(t) {
    var e = this, i = t.width / e.width, n = t.height / e.height, a = Yn();
    return du(a, a, [-e.x, -e.y]), fd(a, a, [i, n]), du(a, a, [t.x, t.y]), a;
  }, r.prototype.intersect = function(t, e) {
    if (!t)
      return !1;
    t instanceof r || (t = r.create(t));
    var i = this, n = i.x, a = i.x + i.width, o = i.y, s = i.y + i.height, u = t.x, l = t.x + t.width, f = t.y, h = t.y + t.height, c = !(a < u || l < n || s < f || h < o);
    if (e) {
      var v = 1 / 0, d = 0, _ = Math.abs(a - u), p = Math.abs(l - n), g = Math.abs(s - f), y = Math.abs(h - o), m = Math.min(_, p), w = Math.min(g, y);
      a < u || l < n ? m > d && (d = m, _ < p ? V.set(ui, -_, 0) : V.set(ui, p, 0)) : m < v && (v = m, _ < p ? V.set(si, _, 0) : V.set(si, -p, 0)), s < f || h < o ? w > d && (d = w, g < y ? V.set(ui, 0, -g) : V.set(ui, 0, y)) : m < v && (v = m, g < y ? V.set(si, 0, g) : V.set(si, 0, -y));
    }
    return e && V.copy(e, c ? si : ui), c;
  }, r.prototype.contain = function(t, e) {
    var i = this;
    return t >= i.x && t <= i.x + i.width && e >= i.y && e <= i.y + i.height;
  }, r.prototype.clone = function() {
    return new r(this.x, this.y, this.width, this.height);
  }, r.prototype.copy = function(t) {
    r.copy(this, t);
  }, r.prototype.plain = function() {
    return {
      x: this.x,
      y: this.y,
      width: this.width,
      height: this.height
    };
  }, r.prototype.isFinite = function() {
    return isFinite(this.x) && isFinite(this.y) && isFinite(this.width) && isFinite(this.height);
  }, r.prototype.isZero = function() {
    return this.width === 0 || this.height === 0;
  }, r.create = function(t) {
    return new r(t.x, t.y, t.width, t.height);
  }, r.copy = function(t, e) {
    t.x = e.x, t.y = e.y, t.width = e.width, t.height = e.height;
  }, r.applyTransform = function(t, e, i) {
    if (!i) {
      t !== e && r.copy(t, e);
      return;
    }
    if (i[1] < 1e-5 && i[1] > -1e-5 && i[2] < 1e-5 && i[2] > -1e-5) {
      var n = i[0], a = i[3], o = i[4], s = i[5];
      t.x = e.x * n + o, t.y = e.y * a + s, t.width = e.width * n, t.height = e.height * a, t.width < 0 && (t.x += t.width, t.width = -t.width), t.height < 0 && (t.y += t.height, t.height = -t.height);
      return;
    }
    Ve.x = He.x = e.x, Ve.y = Ue.y = e.y, ze.x = Ue.x = e.x + e.width, ze.y = He.y = e.y + e.height, Ve.transform(i), Ue.transform(i), ze.transform(i), He.transform(i), t.x = Ki(Ve.x, ze.x, He.x, Ue.x), t.y = Ki(Ve.y, ze.y, He.y, Ue.y);
    var u = Qi(Ve.x, ze.x, He.x, Ue.x), l = Qi(Ve.y, ze.y, He.y, Ue.y);
    t.width = u - t.x, t.height = l - t.y;
  }, r;
}();
const et = vd;
var Qf = "silent";
function cd(r, t, e) {
  return {
    type: r,
    event: e,
    target: t.target,
    topTarget: t.topTarget,
    cancelBubble: !1,
    offsetX: e.zrX,
    offsetY: e.zrY,
    gestureEvent: e.gestureEvent,
    pinchX: e.pinchX,
    pinchY: e.pinchY,
    pinchScale: e.pinchScale,
    wheelDelta: e.zrDelta,
    zrByTouch: e.zrByTouch,
    which: e.which,
    stop: dd
  };
}
function dd() {
  nd(this.event);
}
var pd = function(r) {
  j(t, r);
  function t() {
    var e = r !== null && r.apply(this, arguments) || this;
    return e.handler = null, e;
  }
  return t.prototype.dispose = function() {
  }, t.prototype.setCursor = function() {
  }, t;
}(de), li = function() {
  function r(t, e) {
    this.x = t, this.y = e;
  }
  return r;
}(), gd = [
  "click",
  "dblclick",
  "mousewheel",
  "mouseout",
  "mouseup",
  "mousedown",
  "mousemove",
  "contextmenu"
], Ra = new et(0, 0, 0, 0), Jf = function(r) {
  j(t, r);
  function t(e, i, n, a, o) {
    var s = r.call(this) || this;
    return s._hovered = new li(0, 0), s.storage = e, s.painter = i, s.painterRoot = a, s._pointerSize = o, n = n || new pd(), s.proxy = null, s.setHandlerProxy(n), s._draggingMgr = new Gc(s), s;
  }
  return t.prototype.setHandlerProxy = function(e) {
    this.proxy && this.proxy.dispose(), e && (L(gd, function(i) {
      e.on && e.on(i, this[i], this);
    }, this), e.handler = this), this.proxy = e;
  }, t.prototype.mousemove = function(e) {
    var i = e.zrX, n = e.zrY, a = jf(this, i, n), o = this._hovered, s = o.target;
    s && !s.__zr && (o = this.findHover(o.x, o.y), s = o.target);
    var u = this._hovered = a ? new li(i, n) : this.findHover(i, n), l = u.target, f = this.proxy;
    f.setCursor && f.setCursor(l ? l.cursor : "default"), s && l !== s && this.dispatchToElement(o, "mouseout", e), this.dispatchToElement(u, "mousemove", e), l && l !== s && this.dispatchToElement(u, "mouseover", e);
  }, t.prototype.mouseout = function(e) {
    var i = e.zrEventControl;
    i !== "only_globalout" && this.dispatchToElement(this._hovered, "mouseout", e), i !== "no_globalout" && this.trigger("globalout", { type: "globalout", event: e });
  }, t.prototype.resize = function() {
    this._hovered = new li(0, 0);
  }, t.prototype.dispatch = function(e, i) {
    var n = this[e];
    n && n.call(this, i);
  }, t.prototype.dispose = function() {
    this.proxy.dispose(), this.storage = null, this.proxy = null, this.painter = null;
  }, t.prototype.setCursorStyle = function(e) {
    var i = this.proxy;
    i.setCursor && i.setCursor(e);
  }, t.prototype.dispatchToElement = function(e, i, n) {
    e = e || {};
    var a = e.target;
    if (!(a && a.silent)) {
      for (var o = "on" + i, s = cd(i, e, n); a && (a[o] && (s.cancelBubble = !!a[o].call(a, s)), a.trigger(i, s), a = a.__hostTarget ? a.__hostTarget : a.parent, !s.cancelBubble); )
        ;
      s.cancelBubble || (this.trigger(i, s), this.painter && this.painter.eachOtherLayer && this.painter.eachOtherLayer(function(u) {
        typeof u[o] == "function" && u[o].call(u, s), u.trigger && u.trigger(i, s);
      }));
    }
  }, t.prototype.findHover = function(e, i, n) {
    var a = this.storage.getDisplayList(), o = new li(e, i);
    if (pu(a, o, e, i, n), this._pointerSize && !o.target) {
      for (var s = [], u = this._pointerSize, l = u / 2, f = new et(e - l, i - l, u, u), h = a.length - 1; h >= 0; h--) {
        var c = a[h];
        c !== n && !c.ignore && !c.ignoreCoarsePointer && (!c.parent || !c.parent.ignoreCoarsePointer) && (Ra.copy(c.getBoundingRect()), c.transform && Ra.applyTransform(c.transform), Ra.intersect(f) && s.push(c));
      }
      if (s.length)
        for (var v = 4, d = Math.PI / 12, _ = Math.PI * 2, p = 0; p < l; p += v)
          for (var g = 0; g < _; g += d) {
            var y = e + p * Math.cos(g), m = i + p * Math.sin(g);
            if (pu(s, o, y, m, n), o.target)
              return o;
          }
    }
    return o;
  }, t.prototype.processGesture = function(e, i) {
    this._gestureMgr || (this._gestureMgr = new ad());
    var n = this._gestureMgr;
    i === "start" && n.clear();
    var a = n.recognize(e, this.findHover(e.zrX, e.zrY, null).target, this.proxy.dom);
    if (i === "end" && n.clear(), a) {
      var o = a.type;
      e.gestureEvent = o;
      var s = new li();
      s.target = a.target, this.dispatchToElement(s, o, a.event);
    }
  }, t;
}(de);
L(["click", "mousedown", "mouseup", "mousewheel", "dblclick", "contextmenu"], function(r) {
  Jf.prototype[r] = function(t) {
    var e = t.zrX, i = t.zrY, n = jf(this, e, i), a, o;
    if ((r !== "mouseup" || !n) && (a = this.findHover(e, i), o = a.target), r === "mousedown")
      this._downEl = o, this._downPoint = [t.zrX, t.zrY], this._upEl = o;
    else if (r === "mouseup")
      this._upEl = o;
    else if (r === "click") {
      if (this._downEl !== this._upEl || !this._downPoint || Fo(this._downPoint, [t.zrX, t.zrY]) > 4)
        return;
      this._downPoint = null;
    }
    this.dispatchToElement(a, r, t);
  };
});
function _d(r, t, e) {
  if (r[r.rectHover ? "rectContain" : "contain"](t, e)) {
    for (var i = r, n = void 0, a = !1; i; ) {
      if (i.ignoreClip && (a = !0), !a) {
        var o = i.getClipPath();
        if (o && !o.contain(t, e))
          return !1;
        i.silent && (n = !0);
      }
      var s = i.__hostTarget;
      i = s || i.parent;
    }
    return n ? Qf : !0;
  }
  return !1;
}
function pu(r, t, e, i, n) {
  for (var a = r.length - 1; a >= 0; a--) {
    var o = r[a], s = void 0;
    if (o !== n && !o.ignore && (s = _d(o, e, i)) && (!t.topTarget && (t.topTarget = o), s !== Qf)) {
      t.target = o;
      break;
    }
  }
}
function jf(r, t, e) {
  var i = r.painter;
  return t < 0 || t > i.getWidth() || e < 0 || e > i.getHeight();
}
const yd = Jf;
var th = 32, fi = 7;
function md(r) {
  for (var t = 0; r >= th; )
    t |= r & 1, r >>= 1;
  return r + t;
}
function gu(r, t, e, i) {
  var n = t + 1;
  if (n === e)
    return 1;
  if (i(r[n++], r[t]) < 0) {
    for (; n < e && i(r[n], r[n - 1]) < 0; )
      n++;
    wd(r, t, n);
  } else
    for (; n < e && i(r[n], r[n - 1]) >= 0; )
      n++;
  return n - t;
}
function wd(r, t, e) {
  for (e--; t < e; ) {
    var i = r[t];
    r[t++] = r[e], r[e--] = i;
  }
}
function _u(r, t, e, i, n) {
  for (i === t && i++; i < e; i++) {
    for (var a = r[i], o = t, s = i, u; o < s; )
      u = o + s >>> 1, n(a, r[u]) < 0 ? s = u : o = u + 1;
    var l = i - o;
    switch (l) {
      case 3:
        r[o + 3] = r[o + 2];
      case 2:
        r[o + 2] = r[o + 1];
      case 1:
        r[o + 1] = r[o];
        break;
      default:
        for (; l > 0; )
          r[o + l] = r[o + l - 1], l--;
    }
    r[o] = a;
  }
}
function Ia(r, t, e, i, n, a) {
  var o = 0, s = 0, u = 1;
  if (a(r, t[e + n]) > 0) {
    for (s = i - n; u < s && a(r, t[e + n + u]) > 0; )
      o = u, u = (u << 1) + 1, u <= 0 && (u = s);
    u > s && (u = s), o += n, u += n;
  } else {
    for (s = n + 1; u < s && a(r, t[e + n - u]) <= 0; )
      o = u, u = (u << 1) + 1, u <= 0 && (u = s);
    u > s && (u = s);
    var l = o;
    o = n - u, u = n - l;
  }
  for (o++; o < u; ) {
    var f = o + (u - o >>> 1);
    a(r, t[e + f]) > 0 ? o = f + 1 : u = f;
  }
  return u;
}
function Aa(r, t, e, i, n, a) {
  var o = 0, s = 0, u = 1;
  if (a(r, t[e + n]) < 0) {
    for (s = n + 1; u < s && a(r, t[e + n - u]) < 0; )
      o = u, u = (u << 1) + 1, u <= 0 && (u = s);
    u > s && (u = s);
    var l = o;
    o = n - u, u = n - l;
  } else {
    for (s = i - n; u < s && a(r, t[e + n + u]) >= 0; )
      o = u, u = (u << 1) + 1, u <= 0 && (u = s);
    u > s && (u = s), o += n, u += n;
  }
  for (o++; o < u; ) {
    var f = o + (u - o >>> 1);
    a(r, t[e + f]) < 0 ? u = f : o = f + 1;
  }
  return u;
}
function Sd(r, t) {
  var e = fi, i, n, a = 0;
  r.length;
  var o = [];
  i = [], n = [];
  function s(v, d) {
    i[a] = v, n[a] = d, a += 1;
  }
  function u() {
    for (; a > 1; ) {
      var v = a - 2;
      if (v >= 1 && n[v - 1] <= n[v] + n[v + 1] || v >= 2 && n[v - 2] <= n[v] + n[v - 1])
        n[v - 1] < n[v + 1] && v--;
      else if (n[v] > n[v + 1])
        break;
      f(v);
    }
  }
  function l() {
    for (; a > 1; ) {
      var v = a - 2;
      v > 0 && n[v - 1] < n[v + 1] && v--, f(v);
    }
  }
  function f(v) {
    var d = i[v], _ = n[v], p = i[v + 1], g = n[v + 1];
    n[v] = _ + g, v === a - 3 && (i[v + 1] = i[v + 2], n[v + 1] = n[v + 2]), a--;
    var y = Aa(r[p], r, d, _, 0, t);
    d += y, _ -= y, _ !== 0 && (g = Ia(r[d + _ - 1], r, p, g, g - 1, t), g !== 0 && (_ <= g ? h(d, _, p, g) : c(d, _, p, g)));
  }
  function h(v, d, _, p) {
    var g = 0;
    for (g = 0; g < d; g++)
      o[g] = r[v + g];
    var y = 0, m = _, w = v;
    if (r[w++] = r[m++], --p === 0) {
      for (g = 0; g < d; g++)
        r[w + g] = o[y + g];
      return;
    }
    if (d === 1) {
      for (g = 0; g < p; g++)
        r[w + g] = r[m + g];
      r[w + p] = o[y];
      return;
    }
    for (var T = e, S, D, C; ; ) {
      S = 0, D = 0, C = !1;
      do
        if (t(r[m], o[y]) < 0) {
          if (r[w++] = r[m++], D++, S = 0, --p === 0) {
            C = !0;
            break;
          }
        } else if (r[w++] = o[y++], S++, D = 0, --d === 1) {
          C = !0;
          break;
        }
      while ((S | D) < T);
      if (C)
        break;
      do {
        if (S = Aa(r[m], o, y, d, 0, t), S !== 0) {
          for (g = 0; g < S; g++)
            r[w + g] = o[y + g];
          if (w += S, y += S, d -= S, d <= 1) {
            C = !0;
            break;
          }
        }
        if (r[w++] = r[m++], --p === 0) {
          C = !0;
          break;
        }
        if (D = Ia(o[y], r, m, p, 0, t), D !== 0) {
          for (g = 0; g < D; g++)
            r[w + g] = r[m + g];
          if (w += D, m += D, p -= D, p === 0) {
            C = !0;
            break;
          }
        }
        if (r[w++] = o[y++], --d === 1) {
          C = !0;
          break;
        }
        T--;
      } while (S >= fi || D >= fi);
      if (C)
        break;
      T < 0 && (T = 0), T += 2;
    }
    if (e = T, e < 1 && (e = 1), d === 1) {
      for (g = 0; g < p; g++)
        r[w + g] = r[m + g];
      r[w + p] = o[y];
    } else {
      if (d === 0)
        throw new Error();
      for (g = 0; g < d; g++)
        r[w + g] = o[y + g];
    }
  }
  function c(v, d, _, p) {
    var g = 0;
    for (g = 0; g < p; g++)
      o[g] = r[_ + g];
    var y = v + d - 1, m = p - 1, w = _ + p - 1, T = 0, S = 0;
    if (r[w--] = r[y--], --d === 0) {
      for (T = w - (p - 1), g = 0; g < p; g++)
        r[T + g] = o[g];
      return;
    }
    if (p === 1) {
      for (w -= d, y -= d, S = w + 1, T = y + 1, g = d - 1; g >= 0; g--)
        r[S + g] = r[T + g];
      r[w] = o[m];
      return;
    }
    for (var D = e; ; ) {
      var C = 0, b = 0, M = !1;
      do
        if (t(o[m], r[y]) < 0) {
          if (r[w--] = r[y--], C++, b = 0, --d === 0) {
            M = !0;
            break;
          }
        } else if (r[w--] = o[m--], b++, C = 0, --p === 1) {
          M = !0;
          break;
        }
      while ((C | b) < D);
      if (M)
        break;
      do {
        if (C = d - Aa(o[m], r, v, d, d - 1, t), C !== 0) {
          for (w -= C, y -= C, d -= C, S = w + 1, T = y + 1, g = C - 1; g >= 0; g--)
            r[S + g] = r[T + g];
          if (d === 0) {
            M = !0;
            break;
          }
        }
        if (r[w--] = o[m--], --p === 1) {
          M = !0;
          break;
        }
        if (b = p - Ia(r[y], o, 0, p, p - 1, t), b !== 0) {
          for (w -= b, m -= b, p -= b, S = w + 1, T = m + 1, g = 0; g < b; g++)
            r[S + g] = o[T + g];
          if (p <= 1) {
            M = !0;
            break;
          }
        }
        if (r[w--] = r[y--], --d === 0) {
          M = !0;
          break;
        }
        D--;
      } while (C >= fi || b >= fi);
      if (M)
        break;
      D < 0 && (D = 0), D += 2;
    }
    if (e = D, e < 1 && (e = 1), p === 1) {
      for (w -= d, y -= d, S = w + 1, T = y + 1, g = d - 1; g >= 0; g--)
        r[S + g] = r[T + g];
      r[w] = o[m];
    } else {
      if (p === 0)
        throw new Error();
      for (T = w - (p - 1), g = 0; g < p; g++)
        r[T + g] = o[g];
    }
  }
  return {
    mergeRuns: u,
    forceMergeRuns: l,
    pushRun: s
  };
}
function Ln(r, t, e, i) {
  e || (e = 0), i || (i = r.length);
  var n = i - e;
  if (!(n < 2)) {
    var a = 0;
    if (n < th) {
      a = gu(r, e, i, t), _u(r, e, i, e + a, t);
      return;
    }
    var o = Sd(r, t), s = md(n);
    do {
      if (a = gu(r, e, i, t), a < s) {
        var u = n;
        u > s && (u = s), _u(r, e, e + u, e + a, t), a = u;
      }
      o.pushRun(e, a), o.mergeRuns(), n -= a, e += a;
    } while (n !== 0);
    o.forceMergeRuns();
  }
}
var Ut = 1, Li = 2, Ar = 4, yu = !1;
function Oa() {
  yu || (yu = !0, console.warn("z / z2 / zlevel of displayable is invalid, which may cause unexpected errors"));
}
function mu(r, t) {
  return r.zlevel === t.zlevel ? r.z === t.z ? r.z2 - t.z2 : r.z - t.z : r.zlevel - t.zlevel;
}
var Td = function() {
  function r() {
    this._roots = [], this._displayList = [], this._displayListLen = 0, this.displayableSortFunc = mu;
  }
  return r.prototype.traverse = function(t, e) {
    for (var i = 0; i < this._roots.length; i++)
      this._roots[i].traverse(t, e);
  }, r.prototype.getDisplayList = function(t, e) {
    e = e || !1;
    var i = this._displayList;
    return (t || !i.length) && this.updateDisplayList(e), i;
  }, r.prototype.updateDisplayList = function(t) {
    this._displayListLen = 0;
    for (var e = this._roots, i = this._displayList, n = 0, a = e.length; n < a; n++)
      this._updateAndAddDisplayable(e[n], null, t);
    i.length = this._displayListLen, Ln(i, mu);
  }, r.prototype._updateAndAddDisplayable = function(t, e, i) {
    if (!(t.ignore && !i)) {
      t.beforeUpdate(), t.update(), t.afterUpdate();
      var n = t.getClipPath();
      if (t.ignoreClip)
        e = null;
      else if (n) {
        e ? e = e.slice() : e = [];
        for (var a = n, o = t; a; )
          a.parent = o, a.updateTransform(), e.push(a), o = a, a = a.getClipPath();
      }
      if (t.childrenRef) {
        for (var s = t.childrenRef(), u = 0; u < s.length; u++) {
          var l = s[u];
          t.__dirty && (l.__dirty |= Ut), this._updateAndAddDisplayable(l, e, i);
        }
        t.__dirty = 0;
      } else {
        var f = t;
        e && e.length ? f.__clipPaths = e : f.__clipPaths && f.__clipPaths.length > 0 && (f.__clipPaths = []), isNaN(f.z) && (Oa(), f.z = 0), isNaN(f.z2) && (Oa(), f.z2 = 0), isNaN(f.zlevel) && (Oa(), f.zlevel = 0), this._displayList[this._displayListLen++] = f;
      }
      var h = t.getDecalElement && t.getDecalElement();
      h && this._updateAndAddDisplayable(h, e, i);
      var c = t.getTextGuideLine();
      c && this._updateAndAddDisplayable(c, e, i);
      var v = t.getTextContent();
      v && this._updateAndAddDisplayable(v, e, i);
    }
  }, r.prototype.addRoot = function(t) {
    t.__zr && t.__zr.storage === this || this._roots.push(t);
  }, r.prototype.delRoot = function(t) {
    if (t instanceof Array) {
      for (var e = 0, i = t.length; e < i; e++)
        this.delRoot(t[e]);
      return;
    }
    var n = nt(this._roots, t);
    n >= 0 && this._roots.splice(n, 1);
  }, r.prototype.delAllRoots = function() {
    this._roots = [], this._displayList = [], this._displayListLen = 0;
  }, r.prototype.getRoots = function() {
    return this._roots;
  }, r.prototype.dispose = function() {
    this._displayList = null, this._roots = null;
  }, r;
}();
const Dd = Td;
var eh;
eh = rt.hasGlobalWindow && (window.requestAnimationFrame && window.requestAnimationFrame.bind(window) || window.msRequestAnimationFrame && window.msRequestAnimationFrame.bind(window) || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame) || function(r) {
  return setTimeout(r, 16);
};
const Ho = eh;
var xn = {
  linear: function(r) {
    return r;
  },
  quadraticIn: function(r) {
    return r * r;
  },
  quadraticOut: function(r) {
    return r * (2 - r);
  },
  quadraticInOut: function(r) {
    return (r *= 2) < 1 ? 0.5 * r * r : -0.5 * (--r * (r - 2) - 1);
  },
  cubicIn: function(r) {
    return r * r * r;
  },
  cubicOut: function(r) {
    return --r * r * r + 1;
  },
  cubicInOut: function(r) {
    return (r *= 2) < 1 ? 0.5 * r * r * r : 0.5 * ((r -= 2) * r * r + 2);
  },
  quarticIn: function(r) {
    return r * r * r * r;
  },
  quarticOut: function(r) {
    return 1 - --r * r * r * r;
  },
  quarticInOut: function(r) {
    return (r *= 2) < 1 ? 0.5 * r * r * r * r : -0.5 * ((r -= 2) * r * r * r - 2);
  },
  quinticIn: function(r) {
    return r * r * r * r * r;
  },
  quinticOut: function(r) {
    return --r * r * r * r * r + 1;
  },
  quinticInOut: function(r) {
    return (r *= 2) < 1 ? 0.5 * r * r * r * r * r : 0.5 * ((r -= 2) * r * r * r * r + 2);
  },
  sinusoidalIn: function(r) {
    return 1 - Math.cos(r * Math.PI / 2);
  },
  sinusoidalOut: function(r) {
    return Math.sin(r * Math.PI / 2);
  },
  sinusoidalInOut: function(r) {
    return 0.5 * (1 - Math.cos(Math.PI * r));
  },
  exponentialIn: function(r) {
    return r === 0 ? 0 : Math.pow(1024, r - 1);
  },
  exponentialOut: function(r) {
    return r === 1 ? 1 : 1 - Math.pow(2, -10 * r);
  },
  exponentialInOut: function(r) {
    return r === 0 ? 0 : r === 1 ? 1 : (r *= 2) < 1 ? 0.5 * Math.pow(1024, r - 1) : 0.5 * (-Math.pow(2, -10 * (r - 1)) + 2);
  },
  circularIn: function(r) {
    return 1 - Math.sqrt(1 - r * r);
  },
  circularOut: function(r) {
    return Math.sqrt(1 - --r * r);
  },
  circularInOut: function(r) {
    return (r *= 2) < 1 ? -0.5 * (Math.sqrt(1 - r * r) - 1) : 0.5 * (Math.sqrt(1 - (r -= 2) * r) + 1);
  },
  elasticIn: function(r) {
    var t, e = 0.1, i = 0.4;
    return r === 0 ? 0 : r === 1 ? 1 : (!e || e < 1 ? (e = 1, t = i / 4) : t = i * Math.asin(1 / e) / (2 * Math.PI), -(e * Math.pow(2, 10 * (r -= 1)) * Math.sin((r - t) * (2 * Math.PI) / i)));
  },
  elasticOut: function(r) {
    var t, e = 0.1, i = 0.4;
    return r === 0 ? 0 : r === 1 ? 1 : (!e || e < 1 ? (e = 1, t = i / 4) : t = i * Math.asin(1 / e) / (2 * Math.PI), e * Math.pow(2, -10 * r) * Math.sin((r - t) * (2 * Math.PI) / i) + 1);
  },
  elasticInOut: function(r) {
    var t, e = 0.1, i = 0.4;
    return r === 0 ? 0 : r === 1 ? 1 : (!e || e < 1 ? (e = 1, t = i / 4) : t = i * Math.asin(1 / e) / (2 * Math.PI), (r *= 2) < 1 ? -0.5 * (e * Math.pow(2, 10 * (r -= 1)) * Math.sin((r - t) * (2 * Math.PI) / i)) : e * Math.pow(2, -10 * (r -= 1)) * Math.sin((r - t) * (2 * Math.PI) / i) * 0.5 + 1);
  },
  backIn: function(r) {
    var t = 1.70158;
    return r * r * ((t + 1) * r - t);
  },
  backOut: function(r) {
    var t = 1.70158;
    return --r * r * ((t + 1) * r + t) + 1;
  },
  backInOut: function(r) {
    var t = 2.5949095;
    return (r *= 2) < 1 ? 0.5 * (r * r * ((t + 1) * r - t)) : 0.5 * ((r -= 2) * r * ((t + 1) * r + t) + 2);
  },
  bounceIn: function(r) {
    return 1 - xn.bounceOut(1 - r);
  },
  bounceOut: function(r) {
    return r < 1 / 2.75 ? 7.5625 * r * r : r < 2 / 2.75 ? 7.5625 * (r -= 1.5 / 2.75) * r + 0.75 : r < 2.5 / 2.75 ? 7.5625 * (r -= 2.25 / 2.75) * r + 0.9375 : 7.5625 * (r -= 2.625 / 2.75) * r + 0.984375;
  },
  bounceInOut: function(r) {
    return r < 0.5 ? xn.bounceIn(r * 2) * 0.5 : xn.bounceOut(r * 2 - 1) * 0.5 + 0.5;
  }
};
const rh = xn;
var Ji = Math.pow, ke = Math.sqrt, Gn = 1e-8, ih = 1e-4, wu = ke(3), ji = 1 / 3, le = ei(), Qt = ei(), Yr = ei();
function Be(r) {
  return r > -Gn && r < Gn;
}
function nh(r) {
  return r > Gn || r < -Gn;
}
function Ct(r, t, e, i, n) {
  var a = 1 - n;
  return a * a * (a * r + 3 * n * t) + n * n * (n * i + 3 * a * e);
}
function ah(r, t, e, i, n, a) {
  var o = i + 3 * (t - e) - r, s = 3 * (e - t * 2 + r), u = 3 * (t - r), l = r - n, f = s * s - 3 * o * u, h = s * u - 9 * o * l, c = u * u - 3 * s * l, v = 0;
  if (Be(f) && Be(h))
    if (Be(s))
      a[0] = 0;
    else {
      var d = -u / s;
      d >= 0 && d <= 1 && (a[v++] = d);
    }
  else {
    var _ = h * h - 4 * f * c;
    if (Be(_)) {
      var p = h / f, d = -s / o + p, g = -p / 2;
      d >= 0 && d <= 1 && (a[v++] = d), g >= 0 && g <= 1 && (a[v++] = g);
    } else if (_ > 0) {
      var y = ke(_), m = f * s + 1.5 * o * (-h + y), w = f * s + 1.5 * o * (-h - y);
      m < 0 ? m = -Ji(-m, ji) : m = Ji(m, ji), w < 0 ? w = -Ji(-w, ji) : w = Ji(w, ji);
      var d = (-s - (m + w)) / (3 * o);
      d >= 0 && d <= 1 && (a[v++] = d);
    } else {
      var T = (2 * f * s - 3 * o * h) / (2 * ke(f * f * f)), S = Math.acos(T) / 3, D = ke(f), C = Math.cos(S), d = (-s - 2 * D * C) / (3 * o), g = (-s + D * (C + wu * Math.sin(S))) / (3 * o), b = (-s + D * (C - wu * Math.sin(S))) / (3 * o);
      d >= 0 && d <= 1 && (a[v++] = d), g >= 0 && g <= 1 && (a[v++] = g), b >= 0 && b <= 1 && (a[v++] = b);
    }
  }
  return v;
}
function oh(r, t, e, i, n) {
  var a = 6 * e - 12 * t + 6 * r, o = 9 * t + 3 * i - 3 * r - 9 * e, s = 3 * t - 3 * r, u = 0;
  if (Be(o)) {
    if (nh(a)) {
      var l = -s / a;
      l >= 0 && l <= 1 && (n[u++] = l);
    }
  } else {
    var f = a * a - 4 * o * s;
    if (Be(f))
      n[0] = -a / (2 * o);
    else if (f > 0) {
      var h = ke(f), l = (-a + h) / (2 * o), c = (-a - h) / (2 * o);
      l >= 0 && l <= 1 && (n[u++] = l), c >= 0 && c <= 1 && (n[u++] = c);
    }
  }
  return u;
}
function Su(r, t, e, i, n, a) {
  var o = (t - r) * n + r, s = (e - t) * n + t, u = (i - e) * n + e, l = (s - o) * n + o, f = (u - s) * n + s, h = (f - l) * n + l;
  a[0] = r, a[1] = o, a[2] = l, a[3] = h, a[4] = h, a[5] = f, a[6] = u, a[7] = i;
}
function sh(r, t, e, i, n, a, o, s, u, l, f) {
  var h, c = 5e-3, v = 1 / 0, d, _, p, g;
  le[0] = u, le[1] = l;
  for (var y = 0; y < 1; y += 0.05)
    Qt[0] = Ct(r, e, n, o, y), Qt[1] = Ct(t, i, a, s, y), p = Ur(le, Qt), p < v && (h = y, v = p);
  v = 1 / 0;
  for (var m = 0; m < 32 && !(c < ih); m++)
    d = h - c, _ = h + c, Qt[0] = Ct(r, e, n, o, d), Qt[1] = Ct(t, i, a, s, d), p = Ur(Qt, le), d >= 0 && p < v ? (h = d, v = p) : (Yr[0] = Ct(r, e, n, o, _), Yr[1] = Ct(t, i, a, s, _), g = Ur(Yr, le), _ <= 1 && g < v ? (h = _, v = g) : c *= 0.5);
  return f && (f[0] = Ct(r, e, n, o, h), f[1] = Ct(t, i, a, s, h)), ke(v);
}
function Cd(r, t, e, i, n, a, o, s, u) {
  for (var l = r, f = t, h = 0, c = 1 / u, v = 1; v <= u; v++) {
    var d = v * c, _ = Ct(r, e, n, o, d), p = Ct(t, i, a, s, d), g = _ - l, y = p - f;
    h += Math.sqrt(g * g + y * y), l = _, f = p;
  }
  return h;
}
function Rt(r, t, e, i) {
  var n = 1 - i;
  return n * (n * r + 2 * i * t) + i * i * e;
}
function bd(r, t, e, i, n) {
  var a = r - 2 * t + e, o = 2 * (t - r), s = r - i, u = 0;
  if (Be(a)) {
    if (nh(o)) {
      var l = -s / o;
      l >= 0 && l <= 1 && (n[u++] = l);
    }
  } else {
    var f = o * o - 4 * a * s;
    if (Be(f)) {
      var l = -o / (2 * a);
      l >= 0 && l <= 1 && (n[u++] = l);
    } else if (f > 0) {
      var h = ke(f), l = (-o + h) / (2 * a), c = (-o - h) / (2 * a);
      l >= 0 && l <= 1 && (n[u++] = l), c >= 0 && c <= 1 && (n[u++] = c);
    }
  }
  return u;
}
function uh(r, t, e) {
  var i = r + e - 2 * t;
  return i === 0 ? 0.5 : (r - t) / i;
}
function Tu(r, t, e, i, n) {
  var a = (t - r) * i + r, o = (e - t) * i + t, s = (o - a) * i + a;
  n[0] = r, n[1] = a, n[2] = s, n[3] = s, n[4] = o, n[5] = e;
}
function lh(r, t, e, i, n, a, o, s, u) {
  var l, f = 5e-3, h = 1 / 0;
  le[0] = o, le[1] = s;
  for (var c = 0; c < 1; c += 0.05) {
    Qt[0] = Rt(r, e, n, c), Qt[1] = Rt(t, i, a, c);
    var v = Ur(le, Qt);
    v < h && (l = c, h = v);
  }
  h = 1 / 0;
  for (var d = 0; d < 32 && !(f < ih); d++) {
    var _ = l - f, p = l + f;
    Qt[0] = Rt(r, e, n, _), Qt[1] = Rt(t, i, a, _);
    var v = Ur(Qt, le);
    if (_ >= 0 && v < h)
      l = _, h = v;
    else {
      Yr[0] = Rt(r, e, n, p), Yr[1] = Rt(t, i, a, p);
      var g = Ur(Yr, le);
      p <= 1 && g < h ? (l = p, h = g) : f *= 0.5;
    }
  }
  return u && (u[0] = Rt(r, e, n, l), u[1] = Rt(t, i, a, l)), ke(h);
}
function Ed(r, t, e, i, n, a, o) {
  for (var s = r, u = t, l = 0, f = 1 / o, h = 1; h <= o; h++) {
    var c = h * f, v = Rt(r, e, n, c), d = Rt(t, i, a, c), _ = v - s, p = d - u;
    l += Math.sqrt(_ * _ + p * p), s = v, u = d;
  }
  return l;
}
var Md = /cubic-bezier\(([0-9,\.e ]+)\)/;
function fh(r) {
  var t = r && Md.exec(r);
  if (t) {
    var e = t[1].split(","), i = +Ne(e[0]), n = +Ne(e[1]), a = +Ne(e[2]), o = +Ne(e[3]);
    if (isNaN(i + n + a + o))
      return;
    var s = [];
    return function(u) {
      return u <= 0 ? 0 : u >= 1 ? 1 : ah(0, i, a, 1, u, s) && Ct(0, n, o, 1, s[0]);
    };
  }
}
var Ld = function() {
  function r(t) {
    this._inited = !1, this._startTime = 0, this._pausedTime = 0, this._paused = !1, this._life = t.life || 1e3, this._delay = t.delay || 0, this.loop = t.loop || !1, this.onframe = t.onframe || te, this.ondestroy = t.ondestroy || te, this.onrestart = t.onrestart || te, t.easing && this.setEasing(t.easing);
  }
  return r.prototype.step = function(t, e) {
    if (this._inited || (this._startTime = t + this._delay, this._inited = !0), this._paused) {
      this._pausedTime += e;
      return;
    }
    var i = this._life, n = t - this._startTime - this._pausedTime, a = n / i;
    a < 0 && (a = 0), a = Math.min(a, 1);
    var o = this.easingFunc, s = o ? o(a) : a;
    if (this.onframe(s), a === 1)
      if (this.loop) {
        var u = n % i;
        this._startTime = t - u, this._pausedTime = 0, this.onrestart();
      } else
        return !0;
    return !1;
  }, r.prototype.pause = function() {
    this._paused = !0;
  }, r.prototype.resume = function() {
    this._paused = !1;
  }, r.prototype.setEasing = function(t) {
    this.easing = t, this.easingFunc = J(t) ? t : rh[t] || fh(t);
  }, r;
}();
const xd = Ld;
var hh = function() {
  function r(t) {
    this.value = t;
  }
  return r;
}(), Pd = function() {
  function r() {
    this._len = 0;
  }
  return r.prototype.insert = function(t) {
    var e = new hh(t);
    return this.insertEntry(e), e;
  }, r.prototype.insertEntry = function(t) {
    this.head ? (this.tail.next = t, t.prev = this.tail, t.next = null, this.tail = t) : this.head = this.tail = t, this._len++;
  }, r.prototype.remove = function(t) {
    var e = t.prev, i = t.next;
    e ? e.next = i : this.head = i, i ? i.prev = e : this.tail = e, t.next = t.prev = null, this._len--;
  }, r.prototype.len = function() {
    return this._len;
  }, r.prototype.clear = function() {
    this.head = this.tail = null, this._len = 0;
  }, r;
}(), Rd = function() {
  function r(t) {
    this._list = new Pd(), this._maxSize = 10, this._map = {}, this._maxSize = t;
  }
  return r.prototype.put = function(t, e) {
    var i = this._list, n = this._map, a = null;
    if (n[t] == null) {
      var o = i.len(), s = this._lastRemovedEntry;
      if (o >= this._maxSize && o > 0) {
        var u = i.head;
        i.remove(u), delete n[u.key], a = u.value, this._lastRemovedEntry = u;
      }
      s ? s.value = e : s = new hh(e), s.key = t, i.insertEntry(s), n[t] = s;
    }
    return a;
  }, r.prototype.get = function(t) {
    var e = this._map[t], i = this._list;
    if (e != null)
      return e !== i.tail && (i.remove(e), i.insertEntry(e)), e.value;
  }, r.prototype.clear = function() {
    this._list.clear(), this._map = {};
  }, r.prototype.len = function() {
    return this._list.len();
  }, r;
}();
const qi = Rd;
var Du = {
  transparent: [0, 0, 0, 0],
  aliceblue: [240, 248, 255, 1],
  antiquewhite: [250, 235, 215, 1],
  aqua: [0, 255, 255, 1],
  aquamarine: [127, 255, 212, 1],
  azure: [240, 255, 255, 1],
  beige: [245, 245, 220, 1],
  bisque: [255, 228, 196, 1],
  black: [0, 0, 0, 1],
  blanchedalmond: [255, 235, 205, 1],
  blue: [0, 0, 255, 1],
  blueviolet: [138, 43, 226, 1],
  brown: [165, 42, 42, 1],
  burlywood: [222, 184, 135, 1],
  cadetblue: [95, 158, 160, 1],
  chartreuse: [127, 255, 0, 1],
  chocolate: [210, 105, 30, 1],
  coral: [255, 127, 80, 1],
  cornflowerblue: [100, 149, 237, 1],
  cornsilk: [255, 248, 220, 1],
  crimson: [220, 20, 60, 1],
  cyan: [0, 255, 255, 1],
  darkblue: [0, 0, 139, 1],
  darkcyan: [0, 139, 139, 1],
  darkgoldenrod: [184, 134, 11, 1],
  darkgray: [169, 169, 169, 1],
  darkgreen: [0, 100, 0, 1],
  darkgrey: [169, 169, 169, 1],
  darkkhaki: [189, 183, 107, 1],
  darkmagenta: [139, 0, 139, 1],
  darkolivegreen: [85, 107, 47, 1],
  darkorange: [255, 140, 0, 1],
  darkorchid: [153, 50, 204, 1],
  darkred: [139, 0, 0, 1],
  darksalmon: [233, 150, 122, 1],
  darkseagreen: [143, 188, 143, 1],
  darkslateblue: [72, 61, 139, 1],
  darkslategray: [47, 79, 79, 1],
  darkslategrey: [47, 79, 79, 1],
  darkturquoise: [0, 206, 209, 1],
  darkviolet: [148, 0, 211, 1],
  deeppink: [255, 20, 147, 1],
  deepskyblue: [0, 191, 255, 1],
  dimgray: [105, 105, 105, 1],
  dimgrey: [105, 105, 105, 1],
  dodgerblue: [30, 144, 255, 1],
  firebrick: [178, 34, 34, 1],
  floralwhite: [255, 250, 240, 1],
  forestgreen: [34, 139, 34, 1],
  fuchsia: [255, 0, 255, 1],
  gainsboro: [220, 220, 220, 1],
  ghostwhite: [248, 248, 255, 1],
  gold: [255, 215, 0, 1],
  goldenrod: [218, 165, 32, 1],
  gray: [128, 128, 128, 1],
  green: [0, 128, 0, 1],
  greenyellow: [173, 255, 47, 1],
  grey: [128, 128, 128, 1],
  honeydew: [240, 255, 240, 1],
  hotpink: [255, 105, 180, 1],
  indianred: [205, 92, 92, 1],
  indigo: [75, 0, 130, 1],
  ivory: [255, 255, 240, 1],
  khaki: [240, 230, 140, 1],
  lavender: [230, 230, 250, 1],
  lavenderblush: [255, 240, 245, 1],
  lawngreen: [124, 252, 0, 1],
  lemonchiffon: [255, 250, 205, 1],
  lightblue: [173, 216, 230, 1],
  lightcoral: [240, 128, 128, 1],
  lightcyan: [224, 255, 255, 1],
  lightgoldenrodyellow: [250, 250, 210, 1],
  lightgray: [211, 211, 211, 1],
  lightgreen: [144, 238, 144, 1],
  lightgrey: [211, 211, 211, 1],
  lightpink: [255, 182, 193, 1],
  lightsalmon: [255, 160, 122, 1],
  lightseagreen: [32, 178, 170, 1],
  lightskyblue: [135, 206, 250, 1],
  lightslategray: [119, 136, 153, 1],
  lightslategrey: [119, 136, 153, 1],
  lightsteelblue: [176, 196, 222, 1],
  lightyellow: [255, 255, 224, 1],
  lime: [0, 255, 0, 1],
  limegreen: [50, 205, 50, 1],
  linen: [250, 240, 230, 1],
  magenta: [255, 0, 255, 1],
  maroon: [128, 0, 0, 1],
  mediumaquamarine: [102, 205, 170, 1],
  mediumblue: [0, 0, 205, 1],
  mediumorchid: [186, 85, 211, 1],
  mediumpurple: [147, 112, 219, 1],
  mediumseagreen: [60, 179, 113, 1],
  mediumslateblue: [123, 104, 238, 1],
  mediumspringgreen: [0, 250, 154, 1],
  mediumturquoise: [72, 209, 204, 1],
  mediumvioletred: [199, 21, 133, 1],
  midnightblue: [25, 25, 112, 1],
  mintcream: [245, 255, 250, 1],
  mistyrose: [255, 228, 225, 1],
  moccasin: [255, 228, 181, 1],
  navajowhite: [255, 222, 173, 1],
  navy: [0, 0, 128, 1],
  oldlace: [253, 245, 230, 1],
  olive: [128, 128, 0, 1],
  olivedrab: [107, 142, 35, 1],
  orange: [255, 165, 0, 1],
  orangered: [255, 69, 0, 1],
  orchid: [218, 112, 214, 1],
  palegoldenrod: [238, 232, 170, 1],
  palegreen: [152, 251, 152, 1],
  paleturquoise: [175, 238, 238, 1],
  palevioletred: [219, 112, 147, 1],
  papayawhip: [255, 239, 213, 1],
  peachpuff: [255, 218, 185, 1],
  peru: [205, 133, 63, 1],
  pink: [255, 192, 203, 1],
  plum: [221, 160, 221, 1],
  powderblue: [176, 224, 230, 1],
  purple: [128, 0, 128, 1],
  red: [255, 0, 0, 1],
  rosybrown: [188, 143, 143, 1],
  royalblue: [65, 105, 225, 1],
  saddlebrown: [139, 69, 19, 1],
  salmon: [250, 128, 114, 1],
  sandybrown: [244, 164, 96, 1],
  seagreen: [46, 139, 87, 1],
  seashell: [255, 245, 238, 1],
  sienna: [160, 82, 45, 1],
  silver: [192, 192, 192, 1],
  skyblue: [135, 206, 235, 1],
  slateblue: [106, 90, 205, 1],
  slategray: [112, 128, 144, 1],
  slategrey: [112, 128, 144, 1],
  snow: [255, 250, 250, 1],
  springgreen: [0, 255, 127, 1],
  steelblue: [70, 130, 180, 1],
  tan: [210, 180, 140, 1],
  teal: [0, 128, 128, 1],
  thistle: [216, 191, 216, 1],
  tomato: [255, 99, 71, 1],
  turquoise: [64, 224, 208, 1],
  violet: [238, 130, 238, 1],
  wheat: [245, 222, 179, 1],
  white: [255, 255, 255, 1],
  whitesmoke: [245, 245, 245, 1],
  yellow: [255, 255, 0, 1],
  yellowgreen: [154, 205, 50, 1]
};
function Bi(r) {
  return r = Math.round(r), r < 0 ? 0 : r > 255 ? 255 : r;
}
function Cu(r) {
  return r < 0 ? 0 : r > 1 ? 1 : r;
}
function Na(r) {
  var t = r;
  return t.length && t.charAt(t.length - 1) === "%" ? Bi(parseFloat(t) / 100 * 255) : Bi(parseInt(t, 10));
}
function ki(r) {
  var t = r;
  return t.length && t.charAt(t.length - 1) === "%" ? Cu(parseFloat(t) / 100) : Cu(parseFloat(t));
}
function Ba(r, t, e) {
  return e < 0 ? e += 1 : e > 1 && (e -= 1), e * 6 < 1 ? r + (t - r) * e * 6 : e * 2 < 1 ? t : e * 3 < 2 ? r + (t - r) * (2 / 3 - e) * 6 : r;
}
function qt(r, t, e, i, n) {
  return r[0] = t, r[1] = e, r[2] = i, r[3] = n, r;
}
function Uo(r, t) {
  return r[0] = t[0], r[1] = t[1], r[2] = t[2], r[3] = t[3], r;
}
var vh = new qi(20), tn = null;
function Tr(r, t) {
  tn && Uo(tn, t), tn = vh.put(r, tn || t.slice());
}
function Gr(r, t) {
  if (r) {
    t = t || [];
    var e = vh.get(r);
    if (e)
      return Uo(t, e);
    r = r + "";
    var i = r.replace(/ /g, "").toLowerCase();
    if (i in Du)
      return Uo(t, Du[i]), Tr(r, t), t;
    var n = i.length;
    if (i.charAt(0) === "#") {
      if (n === 4 || n === 5) {
        var a = parseInt(i.slice(1, 4), 16);
        if (!(a >= 0 && a <= 4095)) {
          qt(t, 0, 0, 0, 1);
          return;
        }
        return qt(t, (a & 3840) >> 4 | (a & 3840) >> 8, a & 240 | (a & 240) >> 4, a & 15 | (a & 15) << 4, n === 5 ? parseInt(i.slice(4), 16) / 15 : 1), Tr(r, t), t;
      } else if (n === 7 || n === 9) {
        var a = parseInt(i.slice(1, 7), 16);
        if (!(a >= 0 && a <= 16777215)) {
          qt(t, 0, 0, 0, 1);
          return;
        }
        return qt(t, (a & 16711680) >> 16, (a & 65280) >> 8, a & 255, n === 9 ? parseInt(i.slice(7), 16) / 255 : 1), Tr(r, t), t;
      }
      return;
    }
    var o = i.indexOf("("), s = i.indexOf(")");
    if (o !== -1 && s + 1 === n) {
      var u = i.substr(0, o), l = i.substr(o + 1, s - (o + 1)).split(","), f = 1;
      switch (u) {
        case "rgba":
          if (l.length !== 4)
            return l.length === 3 ? qt(t, +l[0], +l[1], +l[2], 1) : qt(t, 0, 0, 0, 1);
          f = ki(l.pop());
        case "rgb":
          if (l.length >= 3)
            return qt(t, Na(l[0]), Na(l[1]), Na(l[2]), l.length === 3 ? f : ki(l[3])), Tr(r, t), t;
          qt(t, 0, 0, 0, 1);
          return;
        case "hsla":
          if (l.length !== 4) {
            qt(t, 0, 0, 0, 1);
            return;
          }
          return l[3] = ki(l[3]), bu(l, t), Tr(r, t), t;
        case "hsl":
          if (l.length !== 3) {
            qt(t, 0, 0, 0, 1);
            return;
          }
          return bu(l, t), Tr(r, t), t;
        default:
          return;
      }
    }
    qt(t, 0, 0, 0, 1);
  }
}
function bu(r, t) {
  var e = (parseFloat(r[0]) % 360 + 360) % 360 / 360, i = ki(r[1]), n = ki(r[2]), a = n <= 0.5 ? n * (i + 1) : n + i - n * i, o = n * 2 - a;
  return t = t || [], qt(t, Bi(Ba(o, a, e + 1 / 3) * 255), Bi(Ba(o, a, e) * 255), Bi(Ba(o, a, e - 1 / 3) * 255), 1), r.length === 4 && (t[3] = r[3]), t;
}
function Eu(r, t) {
  var e = Gr(r);
  if (e) {
    for (var i = 0; i < 3; i++)
      t < 0 ? e[i] = e[i] * (1 - t) | 0 : e[i] = (255 - e[i]) * t + e[i] | 0, e[i] > 255 ? e[i] = 255 : e[i] < 0 && (e[i] = 0);
    return ch(e, e.length === 4 ? "rgba" : "rgb");
  }
}
function ch(r, t) {
  if (!(!r || !r.length)) {
    var e = r[0] + "," + r[1] + "," + r[2];
    return (t === "rgba" || t === "hsva" || t === "hsla") && (e += "," + r[3]), t + "(" + e + ")";
  }
}
function Wn(r, t) {
  var e = Gr(r);
  return e ? (0.299 * e[0] + 0.587 * e[1] + 0.114 * e[2]) * e[3] / 255 + (1 - e[3]) * t : 0;
}
function Id(r) {
  return r.type === "linear";
}
function Ad(r) {
  return r.type === "radial";
}
(function() {
  return rt.hasGlobalWindow && J(window.btoa) ? function(r) {
    return window.btoa(unescape(encodeURIComponent(r)));
  } : typeof Buffer < "u" ? function(r) {
    return Buffer.from(r).toString("base64");
  } : function(r) {
    return process.env.NODE_ENV !== "production" && cr("Base64 isn't natively supported in the current environment."), null;
  };
})();
var Yo = Array.prototype.slice;
function Se(r, t, e) {
  return (t - r) * e + r;
}
function ka(r, t, e, i) {
  for (var n = t.length, a = 0; a < n; a++)
    r[a] = Se(t[a], e[a], i);
  return r;
}
function Od(r, t, e, i) {
  for (var n = t.length, a = n && t[0].length, o = 0; o < n; o++) {
    r[o] || (r[o] = []);
    for (var s = 0; s < a; s++)
      r[o][s] = Se(t[o][s], e[o][s], i);
  }
  return r;
}
function en(r, t, e, i) {
  for (var n = t.length, a = 0; a < n; a++)
    r[a] = t[a] + e[a] * i;
  return r;
}
function Mu(r, t, e, i) {
  for (var n = t.length, a = n && t[0].length, o = 0; o < n; o++) {
    r[o] || (r[o] = []);
    for (var s = 0; s < a; s++)
      r[o][s] = t[o][s] + e[o][s] * i;
  }
  return r;
}
function Nd(r, t) {
  for (var e = r.length, i = t.length, n = e > i ? t : r, a = Math.min(e, i), o = n[a - 1] || { color: [0, 0, 0, 0], offset: 0 }, s = a; s < Math.max(e, i); s++)
    n.push({
      offset: o.offset,
      color: o.color.slice()
    });
}
function Bd(r, t, e) {
  var i = r, n = t;
  if (!(!i.push || !n.push)) {
    var a = i.length, o = n.length;
    if (a !== o) {
      var s = a > o;
      if (s)
        i.length = o;
      else
        for (var u = a; u < o; u++)
          i.push(e === 1 ? n[u] : Yo.call(n[u]));
    }
    for (var l = i[0] && i[0].length, u = 0; u < i.length; u++)
      if (e === 1)
        isNaN(i[u]) && (i[u] = n[u]);
      else
        for (var f = 0; f < l; f++)
          isNaN(i[u][f]) && (i[u][f] = n[u][f]);
  }
}
function Pn(r) {
  if (Wt(r)) {
    var t = r.length;
    if (Wt(r[0])) {
      for (var e = [], i = 0; i < t; i++)
        e.push(Yo.call(r[i]));
      return e;
    }
    return Yo.call(r);
  }
  return r;
}
function Rn(r) {
  return r[0] = Math.floor(r[0]) || 0, r[1] = Math.floor(r[1]) || 0, r[2] = Math.floor(r[2]) || 0, r[3] = r[3] == null ? 1 : r[3], "rgba(" + r.join(",") + ")";
}
function kd(r) {
  return Wt(r && r[0]) ? 2 : 1;
}
var rn = 0, In = 1, dh = 2, xi = 3, Go = 4, Wo = 5, Lu = 6;
function xu(r) {
  return r === Go || r === Wo;
}
function nn(r) {
  return r === In || r === dh;
}
var hi = [0, 0, 0, 0], Fd = function() {
  function r(t) {
    this.keyframes = [], this.discrete = !1, this._invalid = !1, this._needsSort = !1, this._lastFr = 0, this._lastFrP = 0, this.propName = t;
  }
  return r.prototype.isFinished = function() {
    return this._finished;
  }, r.prototype.setFinished = function() {
    this._finished = !0, this._additiveTrack && this._additiveTrack.setFinished();
  }, r.prototype.needsAnimate = function() {
    return this.keyframes.length >= 1;
  }, r.prototype.getAdditiveTrack = function() {
    return this._additiveTrack;
  }, r.prototype.addKeyframe = function(t, e, i) {
    this._needsSort = !0;
    var n = this.keyframes, a = n.length, o = !1, s = Lu, u = e;
    if (Wt(e)) {
      var l = kd(e);
      s = l, (l === 1 && !Et(e[0]) || l === 2 && !Et(e[0][0])) && (o = !0);
    } else if (Et(e) && !Wf(e))
      s = rn;
    else if (Z(e))
      if (!isNaN(+e))
        s = rn;
      else {
        var f = Gr(e);
        f && (u = f, s = xi);
      }
    else if (fa(e)) {
      var h = N({}, u);
      h.colorStops = it(e.colorStops, function(v) {
        return {
          offset: v.offset,
          color: Gr(v.color)
        };
      }), Id(e) ? s = Go : Ad(e) && (s = Wo), u = h;
    }
    a === 0 ? this.valType = s : (s !== this.valType || s === Lu) && (o = !0), this.discrete = this.discrete || o;
    var c = {
      time: t,
      value: u,
      rawValue: e,
      percent: 0
    };
    return i && (c.easing = i, c.easingFunc = J(i) ? i : rh[i] || fh(i)), n.push(c), c;
  }, r.prototype.prepare = function(t, e) {
    var i = this.keyframes;
    this._needsSort && i.sort(function(_, p) {
      return _.time - p.time;
    });
    for (var n = this.valType, a = i.length, o = i[a - 1], s = this.discrete, u = nn(n), l = xu(n), f = 0; f < a; f++) {
      var h = i[f], c = h.value, v = o.value;
      h.percent = h.time / t, s || (u && f !== a - 1 ? Bd(c, v, n) : l && Nd(c.colorStops, v.colorStops));
    }
    if (!s && n !== Wo && e && this.needsAnimate() && e.needsAnimate() && n === e.valType && !e._finished) {
      this._additiveTrack = e;
      for (var d = i[0].value, f = 0; f < a; f++)
        n === rn ? i[f].additiveValue = i[f].value - d : n === xi ? i[f].additiveValue = en([], i[f].value, d, -1) : nn(n) && (i[f].additiveValue = n === In ? en([], i[f].value, d, -1) : Mu([], i[f].value, d, -1));
    }
  }, r.prototype.step = function(t, e) {
    if (!this._finished) {
      this._additiveTrack && this._additiveTrack._finished && (this._additiveTrack = null);
      var i = this._additiveTrack != null, n = i ? "additiveValue" : "value", a = this.valType, o = this.keyframes, s = o.length, u = this.propName, l = a === xi, f, h = this._lastFr, c = Math.min, v, d;
      if (s === 1)
        v = d = o[0];
      else {
        if (e < 0)
          f = 0;
        else if (e < this._lastFrP) {
          var _ = c(h + 1, s - 1);
          for (f = _; f >= 0 && !(o[f].percent <= e); f--)
            ;
          f = c(f, s - 2);
        } else {
          for (f = h; f < s && !(o[f].percent > e); f++)
            ;
          f = c(f - 1, s - 2);
        }
        d = o[f + 1], v = o[f];
      }
      if (v && d) {
        this._lastFr = f, this._lastFrP = e;
        var p = d.percent - v.percent, g = p === 0 ? 1 : c((e - v.percent) / p, 1);
        d.easingFunc && (g = d.easingFunc(g));
        var y = i ? this._additiveValue : l ? hi : t[u];
        if ((nn(a) || l) && !y && (y = this._additiveValue = []), this.discrete)
          t[u] = g < 1 ? v.rawValue : d.rawValue;
        else if (nn(a))
          a === In ? ka(y, v[n], d[n], g) : Od(y, v[n], d[n], g);
        else if (xu(a)) {
          var m = v[n], w = d[n], T = a === Go;
          t[u] = {
            type: T ? "linear" : "radial",
            x: Se(m.x, w.x, g),
            y: Se(m.y, w.y, g),
            colorStops: it(m.colorStops, function(D, C) {
              var b = w.colorStops[C];
              return {
                offset: Se(D.offset, b.offset, g),
                color: Rn(ka([], D.color, b.color, g))
              };
            }),
            global: w.global
          }, T ? (t[u].x2 = Se(m.x2, w.x2, g), t[u].y2 = Se(m.y2, w.y2, g)) : t[u].r = Se(m.r, w.r, g);
        } else if (l)
          ka(y, v[n], d[n], g), i || (t[u] = Rn(y));
        else {
          var S = Se(v[n], d[n], g);
          i ? this._additiveValue = S : t[u] = S;
        }
        i && this._addToTarget(t);
      }
    }
  }, r.prototype._addToTarget = function(t) {
    var e = this.valType, i = this.propName, n = this._additiveValue;
    e === rn ? t[i] = t[i] + n : e === xi ? (Gr(t[i], hi), en(hi, hi, n, 1), t[i] = Rn(hi)) : e === In ? en(t[i], t[i], n, 1) : e === dh && Mu(t[i], t[i], n, 1);
  }, r;
}(), Vd = function() {
  function r(t, e, i, n) {
    if (this._tracks = {}, this._trackKeys = [], this._maxTime = 0, this._started = 0, this._clip = null, this._target = t, this._loop = e, e && n) {
      cr("Can' use additive animation on looped animation.");
      return;
    }
    this._additiveAnimators = n, this._allowDiscrete = i;
  }
  return r.prototype.getMaxTime = function() {
    return this._maxTime;
  }, r.prototype.getDelay = function() {
    return this._delay;
  }, r.prototype.getLoop = function() {
    return this._loop;
  }, r.prototype.getTarget = function() {
    return this._target;
  }, r.prototype.changeTarget = function(t) {
    this._target = t;
  }, r.prototype.when = function(t, e, i) {
    return this.whenWithKeys(t, e, lt(e), i);
  }, r.prototype.whenWithKeys = function(t, e, i, n) {
    for (var a = this._tracks, o = 0; o < i.length; o++) {
      var s = i[o], u = a[s];
      if (!u) {
        u = a[s] = new Fd(s);
        var l = void 0, f = this._getAdditiveTrack(s);
        if (f) {
          var h = f.keyframes, c = h[h.length - 1];
          l = c && c.value, f.valType === xi && l && (l = Rn(l));
        } else
          l = this._target[s];
        if (l == null)
          continue;
        t > 0 && u.addKeyframe(0, Pn(l), n), this._trackKeys.push(s);
      }
      u.addKeyframe(t, Pn(e[s]), n);
    }
    return this._maxTime = Math.max(this._maxTime, t), this;
  }, r.prototype.pause = function() {
    this._clip.pause(), this._paused = !0;
  }, r.prototype.resume = function() {
    this._clip.resume(), this._paused = !1;
  }, r.prototype.isPaused = function() {
    return !!this._paused;
  }, r.prototype.duration = function(t) {
    return this._maxTime = t, this._force = !0, this;
  }, r.prototype._doneCallback = function() {
    this._setTracksFinished(), this._clip = null;
    var t = this._doneCbs;
    if (t)
      for (var e = t.length, i = 0; i < e; i++)
        t[i].call(this);
  }, r.prototype._abortedCallback = function() {
    this._setTracksFinished();
    var t = this.animation, e = this._abortedCbs;
    if (t && t.removeClip(this._clip), this._clip = null, e)
      for (var i = 0; i < e.length; i++)
        e[i].call(this);
  }, r.prototype._setTracksFinished = function() {
    for (var t = this._tracks, e = this._trackKeys, i = 0; i < e.length; i++)
      t[e[i]].setFinished();
  }, r.prototype._getAdditiveTrack = function(t) {
    var e, i = this._additiveAnimators;
    if (i)
      for (var n = 0; n < i.length; n++) {
        var a = i[n].getTrack(t);
        a && (e = a);
      }
    return e;
  }, r.prototype.start = function(t) {
    if (!(this._started > 0)) {
      this._started = 1;
      for (var e = this, i = [], n = this._maxTime || 0, a = 0; a < this._trackKeys.length; a++) {
        var o = this._trackKeys[a], s = this._tracks[o], u = this._getAdditiveTrack(o), l = s.keyframes, f = l.length;
        if (s.prepare(n, u), s.needsAnimate())
          if (!this._allowDiscrete && s.discrete) {
            var h = l[f - 1];
            h && (e._target[s.propName] = h.rawValue), s.setFinished();
          } else
            i.push(s);
      }
      if (i.length || this._force) {
        var c = new xd({
          life: n,
          loop: this._loop,
          delay: this._delay || 0,
          onframe: function(v) {
            e._started = 2;
            var d = e._additiveAnimators;
            if (d) {
              for (var _ = !1, p = 0; p < d.length; p++)
                if (d[p]._clip) {
                  _ = !0;
                  break;
                }
              _ || (e._additiveAnimators = null);
            }
            for (var p = 0; p < i.length; p++)
              i[p].step(e._target, v);
            var g = e._onframeCbs;
            if (g)
              for (var p = 0; p < g.length; p++)
                g[p](e._target, v);
          },
          ondestroy: function() {
            e._doneCallback();
          }
        });
        this._clip = c, this.animation && this.animation.addClip(c), t && c.setEasing(t);
      } else
        this._doneCallback();
      return this;
    }
  }, r.prototype.stop = function(t) {
    if (this._clip) {
      var e = this._clip;
      t && e.onframe(1), this._abortedCallback();
    }
  }, r.prototype.delay = function(t) {
    return this._delay = t, this;
  }, r.prototype.during = function(t) {
    return t && (this._onframeCbs || (this._onframeCbs = []), this._onframeCbs.push(t)), this;
  }, r.prototype.done = function(t) {
    return t && (this._doneCbs || (this._doneCbs = []), this._doneCbs.push(t)), this;
  }, r.prototype.aborted = function(t) {
    return t && (this._abortedCbs || (this._abortedCbs = []), this._abortedCbs.push(t)), this;
  }, r.prototype.getClip = function() {
    return this._clip;
  }, r.prototype.getTrack = function(t) {
    return this._tracks[t];
  }, r.prototype.getTracks = function() {
    var t = this;
    return it(this._trackKeys, function(e) {
      return t._tracks[e];
    });
  }, r.prototype.stopTracks = function(t, e) {
    if (!t.length || !this._clip)
      return !0;
    for (var i = this._tracks, n = this._trackKeys, a = 0; a < t.length; a++) {
      var o = i[t[a]];
      o && !o.isFinished() && (e ? o.step(this._target, 1) : this._started === 1 && o.step(this._target, 0), o.setFinished());
    }
    for (var s = !0, a = 0; a < n.length; a++)
      if (!i[n[a]].isFinished()) {
        s = !1;
        break;
      }
    return s && this._abortedCallback(), s;
  }, r.prototype.saveTo = function(t, e, i) {
    if (t) {
      e = e || this._trackKeys;
      for (var n = 0; n < e.length; n++) {
        var a = e[n], o = this._tracks[a];
        if (!(!o || o.isFinished())) {
          var s = o.keyframes, u = s[i ? 0 : s.length - 1];
          u && (t[a] = Pn(u.rawValue));
        }
      }
    }
  }, r.prototype.__changeFinalValue = function(t, e) {
    e = e || lt(t);
    for (var i = 0; i < e.length; i++) {
      var n = e[i], a = this._tracks[n];
      if (a) {
        var o = a.keyframes;
        if (o.length > 1) {
          var s = o.pop();
          a.addKeyframe(s.time, t[n]), a.prepare(this._maxTime, a.getAdditiveTrack());
        }
      }
    }
  }, r;
}();
const Os = Vd;
function kr() {
  return (/* @__PURE__ */ new Date()).getTime();
}
var zd = function(r) {
  j(t, r);
  function t(e) {
    var i = r.call(this) || this;
    return i._running = !1, i._time = 0, i._pausedTime = 0, i._pauseStart = 0, i._paused = !1, e = e || {}, i.stage = e.stage || {}, i;
  }
  return t.prototype.addClip = function(e) {
    e.animation && this.removeClip(e), this._head ? (this._tail.next = e, e.prev = this._tail, e.next = null, this._tail = e) : this._head = this._tail = e, e.animation = this;
  }, t.prototype.addAnimator = function(e) {
    e.animation = this;
    var i = e.getClip();
    i && this.addClip(i);
  }, t.prototype.removeClip = function(e) {
    if (e.animation) {
      var i = e.prev, n = e.next;
      i ? i.next = n : this._head = n, n ? n.prev = i : this._tail = i, e.next = e.prev = e.animation = null;
    }
  }, t.prototype.removeAnimator = function(e) {
    var i = e.getClip();
    i && this.removeClip(i), e.animation = null;
  }, t.prototype.update = function(e) {
    for (var i = kr() - this._pausedTime, n = i - this._time, a = this._head; a; ) {
      var o = a.next, s = a.step(i, n);
      s && (a.ondestroy(), this.removeClip(a)), a = o;
    }
    this._time = i, e || (this.trigger("frame", n), this.stage.update && this.stage.update());
  }, t.prototype._startLoop = function() {
    var e = this;
    this._running = !0;
    function i() {
      e._running && (Ho(i), !e._paused && e.update());
    }
    Ho(i);
  }, t.prototype.start = function() {
    this._running || (this._time = kr(), this._pausedTime = 0, this._startLoop());
  }, t.prototype.stop = function() {
    this._running = !1;
  }, t.prototype.pause = function() {
    this._paused || (this._pauseStart = kr(), this._paused = !0);
  }, t.prototype.resume = function() {
    this._paused && (this._pausedTime += kr() - this._pauseStart, this._paused = !1);
  }, t.prototype.clear = function() {
    for (var e = this._head; e; ) {
      var i = e.next;
      e.prev = e.next = e.animation = null, e = i;
    }
    this._head = this._tail = null;
  }, t.prototype.isFinished = function() {
    return this._head == null;
  }, t.prototype.animate = function(e, i) {
    i = i || {}, this.start();
    var n = new Os(e, i.loop);
    return this.addAnimator(n), n;
  }, t;
}(de);
const Hd = zd;
var Ud = 300, Fa = rt.domSupported, Va = function() {
  var r = [
    "click",
    "dblclick",
    "mousewheel",
    "wheel",
    "mouseout",
    "mouseup",
    "mousedown",
    "mousemove",
    "contextmenu"
  ], t = [
    "touchstart",
    "touchend",
    "touchmove"
  ], e = {
    pointerdown: 1,
    pointerup: 1,
    pointermove: 1,
    pointerout: 1
  }, i = it(r, function(n) {
    var a = n.replace("mouse", "pointer");
    return e.hasOwnProperty(a) ? a : n;
  });
  return {
    mouse: r,
    touch: t,
    pointer: i
  };
}(), Pu = {
  mouse: ["mousemove", "mouseup"],
  pointer: ["pointermove", "pointerup"]
}, Ru = !1;
function $o(r) {
  var t = r.pointerType;
  return t === "pen" || t === "touch";
}
function Yd(r) {
  r.touching = !0, r.touchTimer != null && (clearTimeout(r.touchTimer), r.touchTimer = null), r.touchTimer = setTimeout(function() {
    r.touching = !1, r.touchTimer = null;
  }, 700);
}
function za(r) {
  r && (r.zrByTouch = !0);
}
function Gd(r, t) {
  return ee(r.dom, new Wd(r, t), !0);
}
function ph(r, t) {
  for (var e = t, i = !1; e && e.nodeType !== 9 && !(i = e.domBelongToZr || e !== t && e === r.painterRoot); )
    e = e.parentNode;
  return i;
}
var Wd = function() {
  function r(t, e) {
    this.stopPropagation = te, this.stopImmediatePropagation = te, this.preventDefault = te, this.type = e.type, this.target = this.currentTarget = t.dom, this.pointerType = e.pointerType, this.clientX = e.clientX, this.clientY = e.clientY;
  }
  return r;
}(), re = {
  mousedown: function(r) {
    r = ee(this.dom, r), this.__mayPointerCapture = [r.zrX, r.zrY], this.trigger("mousedown", r);
  },
  mousemove: function(r) {
    r = ee(this.dom, r);
    var t = this.__mayPointerCapture;
    t && (r.zrX !== t[0] || r.zrY !== t[1]) && this.__togglePointerCapture(!0), this.trigger("mousemove", r);
  },
  mouseup: function(r) {
    r = ee(this.dom, r), this.__togglePointerCapture(!1), this.trigger("mouseup", r);
  },
  mouseout: function(r) {
    r = ee(this.dom, r);
    var t = r.toElement || r.relatedTarget;
    ph(this, t) || (this.__pointerCapturing && (r.zrEventControl = "no_globalout"), this.trigger("mouseout", r));
  },
  wheel: function(r) {
    Ru = !0, r = ee(this.dom, r), this.trigger("mousewheel", r);
  },
  mousewheel: function(r) {
    Ru || (r = ee(this.dom, r), this.trigger("mousewheel", r));
  },
  touchstart: function(r) {
    r = ee(this.dom, r), za(r), this.__lastTouchMoment = /* @__PURE__ */ new Date(), this.handler.processGesture(r, "start"), re.mousemove.call(this, r), re.mousedown.call(this, r);
  },
  touchmove: function(r) {
    r = ee(this.dom, r), za(r), this.handler.processGesture(r, "change"), re.mousemove.call(this, r);
  },
  touchend: function(r) {
    r = ee(this.dom, r), za(r), this.handler.processGesture(r, "end"), re.mouseup.call(this, r), +/* @__PURE__ */ new Date() - +this.__lastTouchMoment < Ud && re.click.call(this, r);
  },
  pointerdown: function(r) {
    re.mousedown.call(this, r);
  },
  pointermove: function(r) {
    $o(r) || re.mousemove.call(this, r);
  },
  pointerup: function(r) {
    re.mouseup.call(this, r);
  },
  pointerout: function(r) {
    $o(r) || re.mouseout.call(this, r);
  }
};
L(["click", "dblclick", "contextmenu"], function(r) {
  re[r] = function(t) {
    t = ee(this.dom, t), this.trigger(r, t);
  };
});
var Xo = {
  pointermove: function(r) {
    $o(r) || Xo.mousemove.call(this, r);
  },
  pointerup: function(r) {
    Xo.mouseup.call(this, r);
  },
  mousemove: function(r) {
    this.trigger("mousemove", r);
  },
  mouseup: function(r) {
    var t = this.__pointerCapturing;
    this.__togglePointerCapture(!1), this.trigger("mouseup", r), t && (r.zrEventControl = "only_globalout", this.trigger("mouseout", r));
  }
};
function $d(r, t) {
  var e = t.domHandlers;
  rt.pointerEventsSupported ? L(Va.pointer, function(i) {
    An(t, i, function(n) {
      e[i].call(r, n);
    });
  }) : (rt.touchEventsSupported && L(Va.touch, function(i) {
    An(t, i, function(n) {
      e[i].call(r, n), Yd(t);
    });
  }), L(Va.mouse, function(i) {
    An(t, i, function(n) {
      n = As(n), t.touching || e[i].call(r, n);
    });
  }));
}
function Xd(r, t) {
  rt.pointerEventsSupported ? L(Pu.pointer, e) : rt.touchEventsSupported || L(Pu.mouse, e);
  function e(i) {
    function n(a) {
      a = As(a), ph(r, a.target) || (a = Gd(r, a), t.domHandlers[i].call(r, a));
    }
    An(t, i, n, { capture: !0 });
  }
}
function An(r, t, e, i) {
  r.mounted[t] = e, r.listenerOpts[t] = i, rd(r.domTarget, t, e, i);
}
function Ha(r) {
  var t = r.mounted;
  for (var e in t)
    t.hasOwnProperty(e) && id(r.domTarget, e, t[e], r.listenerOpts[e]);
  r.mounted = {};
}
var Iu = function() {
  function r(t, e) {
    this.mounted = {}, this.listenerOpts = {}, this.touching = !1, this.domTarget = t, this.domHandlers = e;
  }
  return r;
}(), qd = function(r) {
  j(t, r);
  function t(e, i) {
    var n = r.call(this) || this;
    return n.__pointerCapturing = !1, n.dom = e, n.painterRoot = i, n._localHandlerScope = new Iu(e, re), Fa && (n._globalHandlerScope = new Iu(document, Xo)), $d(n, n._localHandlerScope), n;
  }
  return t.prototype.dispose = function() {
    Ha(this._localHandlerScope), Fa && Ha(this._globalHandlerScope);
  }, t.prototype.setCursor = function(e) {
    this.dom.style && (this.dom.style.cursor = e || "default");
  }, t.prototype.__togglePointerCapture = function(e) {
    if (this.__mayPointerCapture = null, Fa && +this.__pointerCapturing ^ +e) {
      this.__pointerCapturing = e;
      var i = this._globalHandlerScope;
      e ? Xd(this, i) : Ha(i);
    }
  }, t;
}(de);
const Zd = qd;
var gh = 1;
rt.hasGlobalWindow && (gh = Math.max(window.devicePixelRatio || window.screen && window.screen.deviceXDPI / window.screen.logicalXDPI || 1, 1));
var $n = gh, qo = 0.4, Zo = "#333", Ko = "#ccc", Kd = "#eee", Au = sd, Ou = 5e-5;
function Ye(r) {
  return r > Ou || r < -Ou;
}
var Ge = [], Dr = [], Ua = Yn(), Ya = Math.abs, Qd = function() {
  function r() {
  }
  return r.prototype.getLocalTransform = function(t) {
    return r.getLocalTransform(this, t);
  }, r.prototype.setPosition = function(t) {
    this.x = t[0], this.y = t[1];
  }, r.prototype.setScale = function(t) {
    this.scaleX = t[0], this.scaleY = t[1];
  }, r.prototype.setSkew = function(t) {
    this.skewX = t[0], this.skewY = t[1];
  }, r.prototype.setOrigin = function(t) {
    this.originX = t[0], this.originY = t[1];
  }, r.prototype.needLocalTransform = function() {
    return Ye(this.rotation) || Ye(this.x) || Ye(this.y) || Ye(this.scaleX - 1) || Ye(this.scaleY - 1) || Ye(this.skewX) || Ye(this.skewY);
  }, r.prototype.updateTransform = function() {
    var t = this.parent && this.parent.transform, e = this.needLocalTransform(), i = this.transform;
    if (!(e || t)) {
      i && (Au(i), this.invTransform = null);
      return;
    }
    i = i || Yn(), e ? this.getLocalTransform(i) : Au(i), t && (e ? Pa(i, t, i) : ud(i, t)), this.transform = i, this._resolveGlobalScaleRatio(i);
  }, r.prototype._resolveGlobalScaleRatio = function(t) {
    var e = this.globalScaleRatio;
    if (e != null && e !== 1) {
      this.getGlobalScale(Ge);
      var i = Ge[0] < 0 ? -1 : 1, n = Ge[1] < 0 ? -1 : 1, a = ((Ge[0] - i) * e + i) / Ge[0] || 0, o = ((Ge[1] - n) * e + n) / Ge[1] || 0;
      t[0] *= a, t[1] *= a, t[2] *= o, t[3] *= o;
    }
    this.invTransform = this.invTransform || Yn(), Kf(this.invTransform, t);
  }, r.prototype.getComputedTransform = function() {
    for (var t = this, e = []; t; )
      e.push(t), t = t.parent;
    for (; t = e.pop(); )
      t.updateTransform();
    return this.transform;
  }, r.prototype.setLocalTransform = function(t) {
    if (t) {
      var e = t[0] * t[0] + t[1] * t[1], i = t[2] * t[2] + t[3] * t[3], n = Math.atan2(t[1], t[0]), a = Math.PI / 2 + n - Math.atan2(t[3], t[2]);
      i = Math.sqrt(i) * Math.cos(a), e = Math.sqrt(e), this.skewX = a, this.skewY = 0, this.rotation = -n, this.x = +t[4], this.y = +t[5], this.scaleX = e, this.scaleY = i, this.originX = 0, this.originY = 0;
    }
  }, r.prototype.decomposeTransform = function() {
    if (this.transform) {
      var t = this.parent, e = this.transform;
      t && t.transform && (Pa(Dr, t.invTransform, e), e = Dr);
      var i = this.originX, n = this.originY;
      (i || n) && (Ua[4] = i, Ua[5] = n, Pa(Dr, e, Ua), Dr[4] -= i, Dr[5] -= n, e = Dr), this.setLocalTransform(e);
    }
  }, r.prototype.getGlobalScale = function(t) {
    var e = this.transform;
    return t = t || [], e ? (t[0] = Math.sqrt(e[0] * e[0] + e[1] * e[1]), t[1] = Math.sqrt(e[2] * e[2] + e[3] * e[3]), e[0] < 0 && (t[0] = -t[0]), e[3] < 0 && (t[1] = -t[1]), t) : (t[0] = 1, t[1] = 1, t);
  }, r.prototype.transformCoordToLocal = function(t, e) {
    var i = [t, e], n = this.invTransform;
    return n && Ni(i, i, n), i;
  }, r.prototype.transformCoordToGlobal = function(t, e) {
    var i = [t, e], n = this.transform;
    return n && Ni(i, i, n), i;
  }, r.prototype.getLineScale = function() {
    var t = this.transform;
    return t && Ya(t[0] - 1) > 1e-10 && Ya(t[3] - 1) > 1e-10 ? Math.sqrt(Ya(t[0] * t[3] - t[2] * t[1])) : 1;
  }, r.prototype.copyTransform = function(t) {
    Jd(this, t);
  }, r.getLocalTransform = function(t, e) {
    e = e || [];
    var i = t.originX || 0, n = t.originY || 0, a = t.scaleX, o = t.scaleY, s = t.anchorX, u = t.anchorY, l = t.rotation || 0, f = t.x, h = t.y, c = t.skewX ? Math.tan(t.skewX) : 0, v = t.skewY ? Math.tan(-t.skewY) : 0;
    if (i || n || s || u) {
      var d = i + s, _ = n + u;
      e[4] = -d * a - c * _ * o, e[5] = -_ * o - v * d * a;
    } else
      e[4] = e[5] = 0;
    return e[0] = a, e[3] = o, e[1] = v * a, e[2] = c * o, l && ld(e, e, l), e[4] += i + f, e[5] += n + h, e;
  }, r.initDefaultProps = function() {
    var t = r.prototype;
    t.scaleX = t.scaleY = t.globalScaleRatio = 1, t.x = t.y = t.originX = t.originY = t.skewX = t.skewY = t.rotation = t.anchorX = t.anchorY = 0;
  }(), r;
}(), Ui = [
  "x",
  "y",
  "originX",
  "originY",
  "anchorX",
  "anchorY",
  "rotation",
  "scaleX",
  "scaleY",
  "skewX",
  "skewY"
];
function Jd(r, t) {
  for (var e = 0; e < Ui.length; e++) {
    var i = Ui[e];
    r[i] = t[i];
  }
}
const Ns = Qd;
var Nu = {};
function Yt(r, t) {
  t = t || _r;
  var e = Nu[t];
  e || (e = Nu[t] = new qi(500));
  var i = e.get(r);
  return i == null && (i = Jr.measureText(r, t).width, e.put(r, i)), i;
}
function Bu(r, t, e, i) {
  var n = Yt(r, t), a = Bs(t), o = Pi(0, n, e), s = Or(0, a, i), u = new et(o, s, n, a);
  return u;
}
function jd(r, t, e, i) {
  var n = ((r || "") + "").split(`
`), a = n.length;
  if (a === 1)
    return Bu(n[0], t, e, i);
  for (var o = new et(0, 0, 0, 0), s = 0; s < n.length; s++) {
    var u = Bu(n[s], t, e, i);
    s === 0 ? o.copy(u) : o.union(u);
  }
  return o;
}
function Pi(r, t, e) {
  return e === "right" ? r -= t : e === "center" && (r -= t / 2), r;
}
function Or(r, t, e) {
  return e === "middle" ? r -= t / 2 : e === "bottom" && (r -= t), r;
}
function Bs(r) {
  return Yt("国", r);
}
function Yi(r, t) {
  return typeof r == "string" ? r.lastIndexOf("%") >= 0 ? parseFloat(r) / 100 * t : parseFloat(r) : r;
}
function _h(r, t, e) {
  var i = t.position || "inside", n = t.distance != null ? t.distance : 5, a = e.height, o = e.width, s = a / 2, u = e.x, l = e.y, f = "left", h = "top";
  if (i instanceof Array)
    u += Yi(i[0], e.width), l += Yi(i[1], e.height), f = null, h = null;
  else
    switch (i) {
      case "left":
        u -= n, l += s, f = "right", h = "middle";
        break;
      case "right":
        u += n + o, l += s, h = "middle";
        break;
      case "top":
        u += o / 2, l -= n, f = "center", h = "bottom";
        break;
      case "bottom":
        u += o / 2, l += a + n, f = "center";
        break;
      case "inside":
        u += o / 2, l += s, f = "center", h = "middle";
        break;
      case "insideLeft":
        u += n, l += s, h = "middle";
        break;
      case "insideRight":
        u += o - n, l += s, f = "right", h = "middle";
        break;
      case "insideTop":
        u += o / 2, l += n, f = "center";
        break;
      case "insideBottom":
        u += o / 2, l += a - n, f = "center", h = "bottom";
        break;
      case "insideTopLeft":
        u += n, l += n;
        break;
      case "insideTopRight":
        u += o - n, l += n, f = "right";
        break;
      case "insideBottomLeft":
        u += n, l += a - n, h = "bottom";
        break;
      case "insideBottomRight":
        u += o - n, l += a - n, f = "right", h = "bottom";
        break;
    }
  return r = r || {}, r.x = u, r.y = l, r.align = f, r.verticalAlign = h, r;
}
var Ga = "__zr_normal__", Wa = Ui.concat(["ignore"]), tp = ti(Ui, function(r, t) {
  return r[t] = !0, r;
}, { ignore: !1 }), Cr = {}, ep = new et(0, 0, 0, 0), ks = function() {
  function r(t) {
    this.id = Yf(), this.animators = [], this.currentStates = [], this.states = {}, this._init(t);
  }
  return r.prototype._init = function(t) {
    this.attr(t);
  }, r.prototype.drift = function(t, e, i) {
    switch (this.draggable) {
      case "horizontal":
        e = 0;
        break;
      case "vertical":
        t = 0;
        break;
    }
    var n = this.transform;
    n || (n = this.transform = [1, 0, 0, 1, 0, 0]), n[4] += t, n[5] += e, this.decomposeTransform(), this.markRedraw();
  }, r.prototype.beforeUpdate = function() {
  }, r.prototype.afterUpdate = function() {
  }, r.prototype.update = function() {
    this.updateTransform(), this.__dirty && this.updateInnerText();
  }, r.prototype.updateInnerText = function(t) {
    var e = this._textContent;
    if (e && (!e.ignore || t)) {
      this.textConfig || (this.textConfig = {});
      var i = this.textConfig, n = i.local, a = e.innerTransformable, o = void 0, s = void 0, u = !1;
      a.parent = n ? this : null;
      var l = !1;
      if (a.copyTransform(e), i.position != null) {
        var f = ep;
        i.layoutRect ? f.copy(i.layoutRect) : f.copy(this.getBoundingRect()), n || f.applyTransform(this.transform), this.calculateTextPosition ? this.calculateTextPosition(Cr, i, f) : _h(Cr, i, f), a.x = Cr.x, a.y = Cr.y, o = Cr.align, s = Cr.verticalAlign;
        var h = i.origin;
        if (h && i.rotation != null) {
          var c = void 0, v = void 0;
          h === "center" ? (c = f.width * 0.5, v = f.height * 0.5) : (c = Yi(h[0], f.width), v = Yi(h[1], f.height)), l = !0, a.originX = -a.x + c + (n ? 0 : f.x), a.originY = -a.y + v + (n ? 0 : f.y);
        }
      }
      i.rotation != null && (a.rotation = i.rotation);
      var d = i.offset;
      d && (a.x += d[0], a.y += d[1], l || (a.originX = -d[0], a.originY = -d[1]));
      var _ = i.inside == null ? typeof i.position == "string" && i.position.indexOf("inside") >= 0 : i.inside, p = this._innerTextDefaultStyle || (this._innerTextDefaultStyle = {}), g = void 0, y = void 0, m = void 0;
      _ && this.canBeInsideText() ? (g = i.insideFill, y = i.insideStroke, (g == null || g === "auto") && (g = this.getInsideTextFill()), (y == null || y === "auto") && (y = this.getInsideTextStroke(g), m = !0)) : (g = i.outsideFill, y = i.outsideStroke, (g == null || g === "auto") && (g = this.getOutsideFill()), (y == null || y === "auto") && (y = this.getOutsideStroke(g), m = !0)), g = g || "#000", (g !== p.fill || y !== p.stroke || m !== p.autoStroke || o !== p.align || s !== p.verticalAlign) && (u = !0, p.fill = g, p.stroke = y, p.autoStroke = m, p.align = o, p.verticalAlign = s, e.setDefaultTextStyle(p)), e.__dirty |= Ut, u && e.dirtyStyle(!0);
    }
  }, r.prototype.canBeInsideText = function() {
    return !0;
  }, r.prototype.getInsideTextFill = function() {
    return "#fff";
  }, r.prototype.getInsideTextStroke = function(t) {
    return "#000";
  }, r.prototype.getOutsideFill = function() {
    return this.__zr && this.__zr.isDarkMode() ? Ko : Zo;
  }, r.prototype.getOutsideStroke = function(t) {
    var e = this.__zr && this.__zr.getBackgroundColor(), i = typeof e == "string" && Gr(e);
    i || (i = [255, 255, 255, 1]);
    for (var n = i[3], a = this.__zr.isDarkMode(), o = 0; o < 3; o++)
      i[o] = i[o] * n + (a ? 0 : 255) * (1 - n);
    return i[3] = 1, ch(i, "rgba");
  }, r.prototype.traverse = function(t, e) {
  }, r.prototype.attrKV = function(t, e) {
    t === "textConfig" ? this.setTextConfig(e) : t === "textContent" ? this.setTextContent(e) : t === "clipPath" ? this.setClipPath(e) : t === "extra" ? (this.extra = this.extra || {}, N(this.extra, e)) : this[t] = e;
  }, r.prototype.hide = function() {
    this.ignore = !0, this.markRedraw();
  }, r.prototype.show = function() {
    this.ignore = !1, this.markRedraw();
  }, r.prototype.attr = function(t, e) {
    if (typeof t == "string")
      this.attrKV(t, e);
    else if (F(t))
      for (var i = t, n = lt(i), a = 0; a < n.length; a++) {
        var o = n[a];
        this.attrKV(o, t[o]);
      }
    return this.markRedraw(), this;
  }, r.prototype.saveCurrentToNormalState = function(t) {
    this._innerSaveToNormal(t);
    for (var e = this._normalState, i = 0; i < this.animators.length; i++) {
      var n = this.animators[i], a = n.__fromStateTransition;
      if (!(n.getLoop() || a && a !== Ga)) {
        var o = n.targetName, s = o ? e[o] : e;
        n.saveTo(s);
      }
    }
  }, r.prototype._innerSaveToNormal = function(t) {
    var e = this._normalState;
    e || (e = this._normalState = {}), t.textConfig && !e.textConfig && (e.textConfig = this.textConfig), this._savePrimaryToNormal(t, e, Wa);
  }, r.prototype._savePrimaryToNormal = function(t, e, i) {
    for (var n = 0; n < i.length; n++) {
      var a = i[n];
      t[a] != null && !(a in e) && (e[a] = this[a]);
    }
  }, r.prototype.hasState = function() {
    return this.currentStates.length > 0;
  }, r.prototype.getState = function(t) {
    return this.states[t];
  }, r.prototype.ensureState = function(t) {
    var e = this.states;
    return e[t] || (e[t] = {}), e[t];
  }, r.prototype.clearStates = function(t) {
    this.useState(Ga, !1, t);
  }, r.prototype.useState = function(t, e, i, n) {
    var a = t === Ga, o = this.hasState();
    if (!(!o && a)) {
      var s = this.currentStates, u = this.stateTransition;
      if (!(nt(s, t) >= 0 && (e || s.length === 1))) {
        var l;
        if (this.stateProxy && !a && (l = this.stateProxy(t)), l || (l = this.states && this.states[t]), !l && !a) {
          cr("State " + t + " not exists.");
          return;
        }
        a || this.saveCurrentToNormalState(l);
        var f = !!(l && l.hoverLayer || n);
        f && this._toggleHoverLayerFlag(!0), this._applyStateObj(t, l, this._normalState, e, !i && !this.__inHover && u && u.duration > 0, u);
        var h = this._textContent, c = this._textGuide;
        return h && h.useState(t, e, i, f), c && c.useState(t, e, i, f), a ? (this.currentStates = [], this._normalState = {}) : e ? this.currentStates.push(t) : this.currentStates = [t], this._updateAnimationTargets(), this.markRedraw(), !f && this.__inHover && (this._toggleHoverLayerFlag(!1), this.__dirty &= ~Ut), l;
      }
    }
  }, r.prototype.useStates = function(t, e, i) {
    if (!t.length)
      this.clearStates();
    else {
      var n = [], a = this.currentStates, o = t.length, s = o === a.length;
      if (s) {
        for (var u = 0; u < o; u++)
          if (t[u] !== a[u]) {
            s = !1;
            break;
          }
      }
      if (s)
        return;
      for (var u = 0; u < o; u++) {
        var l = t[u], f = void 0;
        this.stateProxy && (f = this.stateProxy(l, t)), f || (f = this.states[l]), f && n.push(f);
      }
      var h = n[o - 1], c = !!(h && h.hoverLayer || i);
      c && this._toggleHoverLayerFlag(!0);
      var v = this._mergeStates(n), d = this.stateTransition;
      this.saveCurrentToNormalState(v), this._applyStateObj(t.join(","), v, this._normalState, !1, !e && !this.__inHover && d && d.duration > 0, d);
      var _ = this._textContent, p = this._textGuide;
      _ && _.useStates(t, e, c), p && p.useStates(t, e, c), this._updateAnimationTargets(), this.currentStates = t.slice(), this.markRedraw(), !c && this.__inHover && (this._toggleHoverLayerFlag(!1), this.__dirty &= ~Ut);
    }
  }, r.prototype._updateAnimationTargets = function() {
    for (var t = 0; t < this.animators.length; t++) {
      var e = this.animators[t];
      e.targetName && e.changeTarget(this[e.targetName]);
    }
  }, r.prototype.removeState = function(t) {
    var e = nt(this.currentStates, t);
    if (e >= 0) {
      var i = this.currentStates.slice();
      i.splice(e, 1), this.useStates(i);
    }
  }, r.prototype.replaceState = function(t, e, i) {
    var n = this.currentStates.slice(), a = nt(n, t), o = nt(n, e) >= 0;
    a >= 0 ? o ? n.splice(a, 1) : n[a] = e : i && !o && n.push(e), this.useStates(n);
  }, r.prototype.toggleState = function(t, e) {
    e ? this.useState(t, !0) : this.removeState(t);
  }, r.prototype._mergeStates = function(t) {
    for (var e = {}, i, n = 0; n < t.length; n++) {
      var a = t[n];
      N(e, a), a.textConfig && (i = i || {}, N(i, a.textConfig));
    }
    return i && (e.textConfig = i), e;
  }, r.prototype._applyStateObj = function(t, e, i, n, a, o) {
    var s = !(e && n);
    e && e.textConfig ? (this.textConfig = N({}, n ? this.textConfig : i.textConfig), N(this.textConfig, e.textConfig)) : s && i.textConfig && (this.textConfig = i.textConfig);
    for (var u = {}, l = !1, f = 0; f < Wa.length; f++) {
      var h = Wa[f], c = a && tp[h];
      e && e[h] != null ? c ? (l = !0, u[h] = e[h]) : this[h] = e[h] : s && i[h] != null && (c ? (l = !0, u[h] = i[h]) : this[h] = i[h]);
    }
    if (!a)
      for (var f = 0; f < this.animators.length; f++) {
        var v = this.animators[f], d = v.targetName;
        v.getLoop() || v.__changeFinalValue(d ? (e || i)[d] : e || i);
      }
    l && this._transitionState(t, u, o);
  }, r.prototype._attachComponent = function(t) {
    if (t.__zr && !t.__hostTarget) {
      if (process.env.NODE_ENV !== "production")
        throw new Error("Text element has been added to zrender.");
      return;
    }
    if (t === this) {
      if (process.env.NODE_ENV !== "production")
        throw new Error("Recursive component attachment.");
      return;
    }
    var e = this.__zr;
    e && t.addSelfToZr(e), t.__zr = e, t.__hostTarget = this;
  }, r.prototype._detachComponent = function(t) {
    t.__zr && t.removeSelfFromZr(t.__zr), t.__zr = null, t.__hostTarget = null;
  }, r.prototype.getClipPath = function() {
    return this._clipPath;
  }, r.prototype.setClipPath = function(t) {
    this._clipPath && this._clipPath !== t && this.removeClipPath(), this._attachComponent(t), this._clipPath = t, this.markRedraw();
  }, r.prototype.removeClipPath = function() {
    var t = this._clipPath;
    t && (this._detachComponent(t), this._clipPath = null, this.markRedraw());
  }, r.prototype.getTextContent = function() {
    return this._textContent;
  }, r.prototype.setTextContent = function(t) {
    var e = this._textContent;
    if (e !== t) {
      if (e && e !== t && this.removeTextContent(), process.env.NODE_ENV !== "production" && t.__zr && !t.__hostTarget)
        throw new Error("Text element has been added to zrender.");
      t.innerTransformable = new Ns(), this._attachComponent(t), this._textContent = t, this.markRedraw();
    }
  }, r.prototype.setTextConfig = function(t) {
    this.textConfig || (this.textConfig = {}), N(this.textConfig, t), this.markRedraw();
  }, r.prototype.removeTextConfig = function() {
    this.textConfig = null, this.markRedraw();
  }, r.prototype.removeTextContent = function() {
    var t = this._textContent;
    t && (t.innerTransformable = null, this._detachComponent(t), this._textContent = null, this._innerTextDefaultStyle = null, this.markRedraw());
  }, r.prototype.getTextGuideLine = function() {
    return this._textGuide;
  }, r.prototype.setTextGuideLine = function(t) {
    this._textGuide && this._textGuide !== t && this.removeTextGuideLine(), this._attachComponent(t), this._textGuide = t, this.markRedraw();
  }, r.prototype.removeTextGuideLine = function() {
    var t = this._textGuide;
    t && (this._detachComponent(t), this._textGuide = null, this.markRedraw());
  }, r.prototype.markRedraw = function() {
    this.__dirty |= Ut;
    var t = this.__zr;
    t && (this.__inHover ? t.refreshHover() : t.refresh()), this.__hostTarget && this.__hostTarget.markRedraw();
  }, r.prototype.dirty = function() {
    this.markRedraw();
  }, r.prototype._toggleHoverLayerFlag = function(t) {
    this.__inHover = t;
    var e = this._textContent, i = this._textGuide;
    e && (e.__inHover = t), i && (i.__inHover = t);
  }, r.prototype.addSelfToZr = function(t) {
    if (this.__zr !== t) {
      this.__zr = t;
      var e = this.animators;
      if (e)
        for (var i = 0; i < e.length; i++)
          t.animation.addAnimator(e[i]);
      this._clipPath && this._clipPath.addSelfToZr(t), this._textContent && this._textContent.addSelfToZr(t), this._textGuide && this._textGuide.addSelfToZr(t);
    }
  }, r.prototype.removeSelfFromZr = function(t) {
    if (this.__zr) {
      this.__zr = null;
      var e = this.animators;
      if (e)
        for (var i = 0; i < e.length; i++)
          t.animation.removeAnimator(e[i]);
      this._clipPath && this._clipPath.removeSelfFromZr(t), this._textContent && this._textContent.removeSelfFromZr(t), this._textGuide && this._textGuide.removeSelfFromZr(t);
    }
  }, r.prototype.animate = function(t, e, i) {
    var n = t ? this[t] : this;
    if (process.env.NODE_ENV !== "production" && !n) {
      cr('Property "' + t + '" is not existed in element ' + this.id);
      return;
    }
    var a = new Os(n, e, i);
    return t && (a.targetName = t), this.addAnimator(a, t), a;
  }, r.prototype.addAnimator = function(t, e) {
    var i = this.__zr, n = this;
    t.during(function() {
      n.updateDuringAnimation(e);
    }).done(function() {
      var a = n.animators, o = nt(a, t);
      o >= 0 && a.splice(o, 1);
    }), this.animators.push(t), i && i.animation.addAnimator(t), i && i.wakeUp();
  }, r.prototype.updateDuringAnimation = function(t) {
    this.markRedraw();
  }, r.prototype.stopAnimation = function(t, e) {
    for (var i = this.animators, n = i.length, a = [], o = 0; o < n; o++) {
      var s = i[o];
      !t || t === s.scope ? s.stop(e) : a.push(s);
    }
    return this.animators = a, this;
  }, r.prototype.animateTo = function(t, e, i) {
    $a(this, t, e, i);
  }, r.prototype.animateFrom = function(t, e, i) {
    $a(this, t, e, i, !0);
  }, r.prototype._transitionState = function(t, e, i, n) {
    for (var a = $a(this, e, i, n), o = 0; o < a.length; o++)
      a[o].__fromStateTransition = t;
  }, r.prototype.getBoundingRect = function() {
    return null;
  }, r.prototype.getPaintRect = function() {
    return null;
  }, r.initDefaultProps = function() {
    var t = r.prototype;
    t.type = "element", t.name = "", t.ignore = t.silent = t.isGroup = t.draggable = t.dragging = t.ignoreClip = t.__inHover = !1, t.__dirty = Ut;
    var e = {};
    function i(a, o, s) {
      e[a + o + s] || (console.warn("DEPRECATED: '" + a + "' has been deprecated. use '" + o + "', '" + s + "' instead"), e[a + o + s] = !0);
    }
    function n(a, o, s, u) {
      Object.defineProperty(t, a, {
        get: function() {
          if (process.env.NODE_ENV !== "production" && i(a, s, u), !this[o]) {
            var f = this[o] = [];
            l(this, f);
          }
          return this[o];
        },
        set: function(f) {
          process.env.NODE_ENV !== "production" && i(a, s, u), this[s] = f[0], this[u] = f[1], this[o] = f, l(this, f);
        }
      });
      function l(f, h) {
        Object.defineProperty(h, 0, {
          get: function() {
            return f[s];
          },
          set: function(c) {
            f[s] = c;
          }
        }), Object.defineProperty(h, 1, {
          get: function() {
            return f[u];
          },
          set: function(c) {
            f[u] = c;
          }
        });
      }
    }
    Object.defineProperty && (n("position", "_legacyPos", "x", "y"), n("scale", "_legacyScale", "scaleX", "scaleY"), n("origin", "_legacyOrigin", "originX", "originY"));
  }(), r;
}();
Ee(ks, de);
Ee(ks, Ns);
function $a(r, t, e, i, n) {
  e = e || {};
  var a = [];
  yh(r, "", r, t, e, i, a, n);
  var o = a.length, s = !1, u = e.done, l = e.aborted, f = function() {
    s = !0, o--, o <= 0 && (s ? u && u() : l && l());
  }, h = function() {
    o--, o <= 0 && (s ? u && u() : l && l());
  };
  o || u && u(), a.length > 0 && e.during && a[0].during(function(d, _) {
    e.during(_);
  });
  for (var c = 0; c < a.length; c++) {
    var v = a[c];
    f && v.done(f), h && v.aborted(h), e.force && v.duration(e.duration), v.start(e.easing);
  }
  return a;
}
function Xa(r, t, e) {
  for (var i = 0; i < e; i++)
    r[i] = t[i];
}
function rp(r) {
  return Wt(r[0]);
}
function ip(r, t, e) {
  if (Wt(t[e]))
    if (Wt(r[e]) || (r[e] = []), Nt(t[e])) {
      var i = t[e].length;
      r[e].length !== i && (r[e] = new t[e].constructor(i), Xa(r[e], t[e], i));
    } else {
      var n = t[e], a = r[e], o = n.length;
      if (rp(n))
        for (var s = n[0].length, u = 0; u < o; u++)
          a[u] ? Xa(a[u], n[u], s) : a[u] = Array.prototype.slice.call(n[u]);
      else
        Xa(a, n, o);
      a.length = n.length;
    }
  else
    r[e] = t[e];
}
function np(r, t) {
  return r === t || Wt(r) && Wt(t) && ap(r, t);
}
function ap(r, t) {
  var e = r.length;
  if (e !== t.length)
    return !1;
  for (var i = 0; i < e; i++)
    if (r[i] !== t[i])
      return !1;
  return !0;
}
function yh(r, t, e, i, n, a, o, s) {
  for (var u = lt(i), l = n.duration, f = n.delay, h = n.additive, c = n.setToFinal, v = !F(a), d = r.animators, _ = [], p = 0; p < u.length; p++) {
    var g = u[p], y = i[g];
    if (y != null && e[g] != null && (v || a[g]))
      if (F(y) && !Wt(y) && !fa(y)) {
        if (t) {
          s || (e[g] = y, r.updateDuringAnimation(t));
          continue;
        }
        yh(r, g, e[g], y, n, a && a[g], o, s);
      } else
        _.push(g);
    else
      s || (e[g] = y, r.updateDuringAnimation(t), _.push(g));
  }
  var m = _.length;
  if (!h && m)
    for (var w = 0; w < d.length; w++) {
      var T = d[w];
      if (T.targetName === t) {
        var S = T.stopTracks(_);
        if (S) {
          var D = nt(d, T);
          d.splice(D, 1);
        }
      }
    }
  if (n.force || (_ = It(_, function(E) {
    return !np(i[E], e[E]);
  }), m = _.length), m > 0 || n.force && !o.length) {
    var C = void 0, b = void 0, M = void 0;
    if (s) {
      b = {}, c && (C = {});
      for (var w = 0; w < m; w++) {
        var g = _[w];
        b[g] = e[g], c ? C[g] = i[g] : e[g] = i[g];
      }
    } else if (c) {
      M = {};
      for (var w = 0; w < m; w++) {
        var g = _[w];
        M[g] = Pn(e[g]), ip(e, i, g);
      }
    }
    var T = new Os(e, !1, !1, h ? It(d, function(P) {
      return P.targetName === t;
    }) : null);
    T.targetName = t, n.scope && (T.scope = n.scope), c && C && T.whenWithKeys(0, C, _), M && T.whenWithKeys(0, M, _), T.whenWithKeys(l ?? 500, s ? b : i, _).delay(f || 0), r.addAnimator(T, t), o.push(T);
  }
}
const mh = ks;
var wh = function(r) {
  j(t, r);
  function t(e) {
    var i = r.call(this) || this;
    return i.isGroup = !0, i._children = [], i.attr(e), i;
  }
  return t.prototype.childrenRef = function() {
    return this._children;
  }, t.prototype.children = function() {
    return this._children.slice();
  }, t.prototype.childAt = function(e) {
    return this._children[e];
  }, t.prototype.childOfName = function(e) {
    for (var i = this._children, n = 0; n < i.length; n++)
      if (i[n].name === e)
        return i[n];
  }, t.prototype.childCount = function() {
    return this._children.length;
  }, t.prototype.add = function(e) {
    if (e && (e !== this && e.parent !== this && (this._children.push(e), this._doAdd(e)), process.env.NODE_ENV !== "production" && e.__hostTarget))
      throw "This elemenet has been used as an attachment";
    return this;
  }, t.prototype.addBefore = function(e, i) {
    if (e && e !== this && e.parent !== this && i && i.parent === this) {
      var n = this._children, a = n.indexOf(i);
      a >= 0 && (n.splice(a, 0, e), this._doAdd(e));
    }
    return this;
  }, t.prototype.replace = function(e, i) {
    var n = nt(this._children, e);
    return n >= 0 && this.replaceAt(i, n), this;
  }, t.prototype.replaceAt = function(e, i) {
    var n = this._children, a = n[i];
    if (e && e !== this && e.parent !== this && e !== a) {
      n[i] = e, a.parent = null;
      var o = this.__zr;
      o && a.removeSelfFromZr(o), this._doAdd(e);
    }
    return this;
  }, t.prototype._doAdd = function(e) {
    e.parent && e.parent.remove(e), e.parent = this;
    var i = this.__zr;
    i && i !== e.__zr && e.addSelfToZr(i), i && i.refresh();
  }, t.prototype.remove = function(e) {
    var i = this.__zr, n = this._children, a = nt(n, e);
    return a < 0 ? this : (n.splice(a, 1), e.parent = null, i && e.removeSelfFromZr(i), i && i.refresh(), this);
  }, t.prototype.removeAll = function() {
    for (var e = this._children, i = this.__zr, n = 0; n < e.length; n++) {
      var a = e[n];
      i && a.removeSelfFromZr(i), a.parent = null;
    }
    return e.length = 0, this;
  }, t.prototype.eachChild = function(e, i) {
    for (var n = this._children, a = 0; a < n.length; a++) {
      var o = n[a];
      e.call(i, o, a);
    }
    return this;
  }, t.prototype.traverse = function(e, i) {
    for (var n = 0; n < this._children.length; n++) {
      var a = this._children[n], o = e.call(i, a);
      a.isGroup && !o && a.traverse(e, i);
    }
    return this;
  }, t.prototype.addSelfToZr = function(e) {
    r.prototype.addSelfToZr.call(this, e);
    for (var i = 0; i < this._children.length; i++) {
      var n = this._children[i];
      n.addSelfToZr(e);
    }
  }, t.prototype.removeSelfFromZr = function(e) {
    r.prototype.removeSelfFromZr.call(this, e);
    for (var i = 0; i < this._children.length; i++) {
      var n = this._children[i];
      n.removeSelfFromZr(e);
    }
  }, t.prototype.getBoundingRect = function(e) {
    for (var i = new et(0, 0, 0, 0), n = e || this._children, a = [], o = null, s = 0; s < n.length; s++) {
      var u = n[s];
      if (!(u.ignore || u.invisible)) {
        var l = u.getBoundingRect(), f = u.getLocalTransform(a);
        f ? (et.applyTransform(i, l, f), o = o || i.clone(), o.union(i)) : (o = o || l.clone(), o.union(l));
      }
    }
    return o || i;
  }, t;
}(mh);
wh.prototype.type = "group";
const $r = wh;
/*!
* ZRender, a high performance 2d drawing library.
*
* Copyright (c) 2013, Baidu Inc.
* All rights reserved.
*
* LICENSE
* https://github.com/ecomfe/zrender/blob/master/LICENSE.txt
*/
var Ri = {}, Sh = {};
function op(r) {
  delete Sh[r];
}
function sp(r) {
  if (!r)
    return !1;
  if (typeof r == "string")
    return Wn(r, 1) < qo;
  if (r.colorStops) {
    for (var t = r.colorStops, e = 0, i = t.length, n = 0; n < i; n++)
      e += Wn(t[n].color, 1);
    return e /= i, e < qo;
  }
  return !1;
}
var up = function() {
  function r(t, e, i) {
    var n = this;
    this._sleepAfterStill = 10, this._stillFrameAccum = 0, this._needsRefresh = !0, this._needsRefreshHover = !0, this._darkMode = !1, i = i || {}, this.dom = e, this.id = t;
    var a = new Dd(), o = i.renderer || "canvas";
    if (Ri[o] || (o = lt(Ri)[0]), process.env.NODE_ENV !== "production" && !Ri[o])
      throw new Error("Renderer '" + o + "' is not imported. Please import it first.");
    i.useDirtyRect = i.useDirtyRect == null ? !1 : i.useDirtyRect;
    var s = new Ri[o](e, a, i, t), u = i.ssr || s.ssrOnly;
    this.storage = a, this.painter = s;
    var l = !rt.node && !rt.worker && !u ? new Zd(s.getViewportRoot(), s.root) : null, f = i.useCoarsePointer, h = f == null || f === "auto" ? rt.touchEventsSupported : !!f, c = 44, v;
    h && (v = W(i.pointerSize, c)), this.handler = new yd(a, s, l, s.root, v), this.animation = new Hd({
      stage: {
        update: u ? null : function() {
          return n._flush(!0);
        }
      }
    }), u || this.animation.start();
  }
  return r.prototype.add = function(t) {
    t && (this.storage.addRoot(t), t.addSelfToZr(this), this.refresh());
  }, r.prototype.remove = function(t) {
    t && (this.storage.delRoot(t), t.removeSelfFromZr(this), this.refresh());
  }, r.prototype.configLayer = function(t, e) {
    this.painter.configLayer && this.painter.configLayer(t, e), this.refresh();
  }, r.prototype.setBackgroundColor = function(t) {
    this.painter.setBackgroundColor && this.painter.setBackgroundColor(t), this.refresh(), this._backgroundColor = t, this._darkMode = sp(t);
  }, r.prototype.getBackgroundColor = function() {
    return this._backgroundColor;
  }, r.prototype.setDarkMode = function(t) {
    this._darkMode = t;
  }, r.prototype.isDarkMode = function() {
    return this._darkMode;
  }, r.prototype.refreshImmediately = function(t) {
    t || this.animation.update(!0), this._needsRefresh = !1, this.painter.refresh(), this._needsRefresh = !1;
  }, r.prototype.refresh = function() {
    this._needsRefresh = !0, this.animation.start();
  }, r.prototype.flush = function() {
    this._flush(!1);
  }, r.prototype._flush = function(t) {
    var e, i = kr();
    this._needsRefresh && (e = !0, this.refreshImmediately(t)), this._needsRefreshHover && (e = !0, this.refreshHoverImmediately());
    var n = kr();
    e ? (this._stillFrameAccum = 0, this.trigger("rendered", {
      elapsedTime: n - i
    })) : this._sleepAfterStill > 0 && (this._stillFrameAccum++, this._stillFrameAccum > this._sleepAfterStill && this.animation.stop());
  }, r.prototype.setSleepAfterStill = function(t) {
    this._sleepAfterStill = t;
  }, r.prototype.wakeUp = function() {
    this.animation.start(), this._stillFrameAccum = 0;
  }, r.prototype.refreshHover = function() {
    this._needsRefreshHover = !0;
  }, r.prototype.refreshHoverImmediately = function() {
    this._needsRefreshHover = !1, this.painter.refreshHover && this.painter.getType() === "canvas" && this.painter.refreshHover();
  }, r.prototype.resize = function(t) {
    t = t || {}, this.painter.resize(t.width, t.height), this.handler.resize();
  }, r.prototype.clearAnimation = function() {
    this.animation.clear();
  }, r.prototype.getWidth = function() {
    return this.painter.getWidth();
  }, r.prototype.getHeight = function() {
    return this.painter.getHeight();
  }, r.prototype.setCursorStyle = function(t) {
    this.handler.setCursorStyle(t);
  }, r.prototype.findHover = function(t, e) {
    return this.handler.findHover(t, e);
  }, r.prototype.on = function(t, e, i) {
    return this.handler.on(t, e, i), this;
  }, r.prototype.off = function(t, e) {
    this.handler.off(t, e);
  }, r.prototype.trigger = function(t, e) {
    this.handler.trigger(t, e);
  }, r.prototype.clear = function() {
    for (var t = this.storage.getRoots(), e = 0; e < t.length; e++)
      t[e] instanceof $r && t[e].removeSelfFromZr(this);
    this.storage.delAllRoots(), this.painter.clear();
  }, r.prototype.dispose = function() {
    this.animation.stop(), this.clear(), this.storage.dispose(), this.painter.dispose(), this.handler.dispose(), this.animation = this.storage = this.painter = this.handler = null, op(this.id);
  }, r;
}();
function ku(r, t) {
  var e = new up(Yf(), r, t);
  return Sh[e.id] = e, e;
}
function lp(r, t) {
  Ri[r] = t;
}
var Th = 20;
function fp(r) {
  return r.replace(/^\s+|\s+$/g, "");
}
function Qo(r, t) {
  switch (r) {
    case "center":
    case "middle":
      r = "50%";
      break;
    case "left":
    case "top":
      r = "0%";
      break;
    case "right":
    case "bottom":
      r = "100%";
      break;
  }
  return Z(r) ? fp(r).match(/%$/) ? parseFloat(r) / 100 * t : parseFloat(r) : r == null ? NaN : +r;
}
function Jo(r, t, e) {
  return t == null && (t = 10), t = Math.min(Math.max(0, t), Th), r = (+r).toFixed(t), e ? r : +r;
}
function Fr(r) {
  if (r = +r, isNaN(r))
    return 0;
  if (r > 1e-14) {
    for (var t = 1, e = 0; e < 15; e++, t *= 10)
      if (Math.round(r * t) / t === r)
        return e;
  }
  return hp(r);
}
function hp(r) {
  var t = r.toString().toLowerCase(), e = t.indexOf("e"), i = e > 0 ? +t.slice(e + 1) : 0, n = e > 0 ? e : t.length, a = t.indexOf("."), o = a < 0 ? 0 : n - 1 - a;
  return Math.max(0, o - i);
}
function vp(r, t) {
  var e = Math.max(Fr(r), Fr(t)), i = r + t;
  return e > Th ? i : Jo(i, e);
}
var cp = /^(?:(\d{4})(?:[-\/](\d{1,2})(?:[-\/](\d{1,2})(?:[T ](\d{1,2})(?::(\d{1,2})(?::(\d{1,2})(?:[.,](\d+))?)?)?(Z|[\+\-]\d\d:?\d\d)?)?)?)?)?$/;
function Dh(r) {
  if (r instanceof Date)
    return r;
  if (Z(r)) {
    var t = cp.exec(r);
    if (!t)
      return /* @__PURE__ */ new Date(NaN);
    if (t[8]) {
      var e = +t[4] || 0;
      return t[8].toUpperCase() !== "Z" && (e -= +t[8].slice(0, 3)), new Date(Date.UTC(+t[1], +(t[2] || 1) - 1, +t[3] || 1, e, +(t[5] || 0), +t[6] || 0, t[7] ? +t[7].substring(0, 3) : 0));
    } else
      return new Date(+t[1], +(t[2] || 1) - 1, +t[3] || 1, +t[4] || 0, +(t[5] || 0), +t[6] || 0, t[7] ? +t[7].substring(0, 3) : 0);
  } else if (r == null)
    return /* @__PURE__ */ new Date(NaN);
  return new Date(Math.round(r));
}
function dp(r) {
  var t = parseFloat(r);
  return t == r && (t !== 0 || !Z(r) || r.indexOf("x") <= 0) ? t : NaN;
}
function pp(r) {
  return !isNaN(dp(r));
}
function gp() {
  return Math.round(Math.random() * 9);
}
function Ch(r, t) {
  return t === 0 ? r : Ch(t, r % t);
}
function Fu(r, t) {
  return r == null ? t : t == null ? r : r * t / Ch(r, t);
}
var _p = "[ECharts] ", Vu = {}, yp = typeof console < "u" && console.warn && console.log;
function va(r, t, e) {
  if (yp) {
    if (e) {
      if (Vu[t])
        return;
      Vu[t] = !0;
    }
    console[r](_p + t);
  }
}
function mp(r, t) {
  va("log", r, t);
}
function Te(r, t) {
  va("warn", r, t);
}
function wt(r, t) {
  va("error", r, t);
}
function ce(r) {
  process.env.NODE_ENV !== "production" && va("warn", "DEPRECATED: " + r, !0);
}
function gt(r, t, e) {
  process.env.NODE_ENV !== "production" && ce((e ? "[" + e + "]" : "") + (r + " is deprecated, use " + t + " instead."));
}
function jo() {
  for (var r = [], t = 0; t < arguments.length; t++)
    r[t] = arguments[t];
  var e = "";
  if (process.env.NODE_ENV !== "production") {
    var i = function(n) {
      return n === void 0 ? "undefined" : n === 1 / 0 ? "Infinity" : n === -1 / 0 ? "-Infinity" : Wf(n) ? "NaN" : n instanceof Date ? "Date(" + n.toISOString() + ")" : J(n) ? "function () { ... }" : Ac(n) ? n + "" : null;
    };
    e = it(r, function(n) {
      if (Z(n))
        return n;
      var a = i(n);
      if (a != null)
        return a;
      if (typeof JSON < "u" && JSON.stringify)
        try {
          return JSON.stringify(n, function(o, s) {
            var u = i(s);
            return u ?? s;
          });
        } catch {
          return "?";
        }
      else
        return "?";
    }).join(" ");
  }
  return e;
}
function Ht(r) {
  throw new Error(r);
}
function zu(r, t, e) {
  return (t - r) * e + r;
}
var bh = "series\0", wp = "\0_ec_\0";
function Mt(r) {
  return r instanceof Array ? r : r == null ? [] : [r];
}
function Hu(r, t, e) {
  if (r) {
    r[t] = r[t] || {}, r.emphasis = r.emphasis || {}, r.emphasis[t] = r.emphasis[t] || {};
    for (var i = 0, n = e.length; i < n; i++) {
      var a = e[i];
      !r.emphasis[t].hasOwnProperty(a) && r[t].hasOwnProperty(a) && (r.emphasis[t][a] = r[t][a]);
    }
  }
}
var Uu = ["fontStyle", "fontWeight", "fontSize", "fontFamily", "rich", "tag", "color", "textBorderColor", "textBorderWidth", "width", "height", "lineHeight", "align", "verticalAlign", "baseline", "shadowColor", "shadowBlur", "shadowOffsetX", "shadowOffsetY", "textShadowColor", "textShadowBlur", "textShadowOffsetX", "textShadowOffsetY", "backgroundColor", "borderColor", "borderWidth", "borderRadius", "padding"];
function ca(r) {
  return F(r) && !Y(r) && !(r instanceof Date) ? r.value : r;
}
function Sp(r) {
  return F(r) && !(r instanceof Array);
}
function Tp(r, t, e) {
  var i = e === "normalMerge", n = e === "replaceMerge", a = e === "replaceAll";
  r = r || [], t = (t || []).slice();
  var o = $();
  L(t, function(u, l) {
    if (!F(u)) {
      t[l] = null;
      return;
    }
    process.env.NODE_ENV !== "production" && (u.id != null && !Gu(u.id) && Yu(u.id), u.name != null && !Gu(u.name) && Yu(u.name));
  });
  var s = Dp(r, o, e);
  return (i || n) && Cp(s, r, o, t), i && bp(s, t), i || n ? Ep(s, t, n) : a && Mp(s, t), Lp(s), s;
}
function Dp(r, t, e) {
  var i = [];
  if (e === "replaceAll")
    return i;
  for (var n = 0; n < r.length; n++) {
    var a = r[n];
    a && a.id != null && t.set(a.id, n), i.push({
      existing: e === "replaceMerge" || Xr(a) ? null : a,
      newOption: null,
      keyInfo: null,
      brandNew: null
    });
  }
  return i;
}
function Cp(r, t, e, i) {
  L(i, function(n, a) {
    if (!(!n || n.id == null)) {
      var o = Fi(n.id), s = e.get(o);
      if (s != null) {
        var u = r[s];
        U(!u.newOption, 'Duplicated option on id "' + o + '".'), u.newOption = n, u.existing = t[s], i[a] = null;
      }
    }
  });
}
function bp(r, t) {
  L(t, function(e, i) {
    if (!(!e || e.name == null))
      for (var n = 0; n < r.length; n++) {
        var a = r[n].existing;
        if (!r[n].newOption && a && (a.id == null || e.id == null) && !Xr(e) && !Xr(a) && Eh("name", a, e)) {
          r[n].newOption = e, t[i] = null;
          return;
        }
      }
  });
}
function Ep(r, t, e) {
  L(t, function(i) {
    if (i) {
      for (
        var n, a = 0;
        // Be `!resultItem` only when `nextIdx >= result.length`.
        (n = r[a]) && // (1) Existing models that already have id should be able to mapped to. Because
        // after mapping performed, model will always be assigned with an id if user not given.
        // After that all models have id.
        // (2) If new option has id, it can only set to a hole or append to the last. It should
        // not be merged to the existings with different id. Because id should not be overwritten.
        // (3) Name can be overwritten, because axis use name as 'show label text'.
        (n.newOption || Xr(n.existing) || // In mode "replaceMerge", here no not-mapped-non-internal-existing.
        n.existing && i.id != null && !Eh("id", i, n.existing));
      )
        a++;
      n ? (n.newOption = i, n.brandNew = e) : r.push({
        newOption: i,
        brandNew: e,
        existing: null,
        keyInfo: null
      }), a++;
    }
  });
}
function Mp(r, t) {
  L(t, function(e) {
    r.push({
      newOption: e,
      brandNew: !0,
      existing: null,
      keyInfo: null
    });
  });
}
function Lp(r) {
  var t = $();
  L(r, function(e) {
    var i = e.existing;
    i && t.set(i.id, e);
  }), L(r, function(e) {
    var i = e.newOption;
    U(!i || i.id == null || !t.get(i.id) || t.get(i.id) === e, "id duplicates: " + (i && i.id)), i && i.id != null && t.set(i.id, e), !e.keyInfo && (e.keyInfo = {});
  }), L(r, function(e, i) {
    var n = e.existing, a = e.newOption, o = e.keyInfo;
    if (F(a)) {
      if (o.name = a.name != null ? Fi(a.name) : n ? n.name : bh + i, n)
        o.id = Fi(n.id);
      else if (a.id != null)
        o.id = Fi(a.id);
      else {
        var s = 0;
        do
          o.id = "\0" + o.name + "\0" + s++;
        while (t.get(o.id));
      }
      t.set(o.id, e);
    }
  });
}
function Eh(r, t, e) {
  var i = he(t[r], null), n = he(e[r], null);
  return i != null && n != null && i === n;
}
function Fi(r) {
  if (process.env.NODE_ENV !== "production" && r == null)
    throw new Error();
  return he(r, "");
}
function he(r, t) {
  return r == null ? t : Z(r) ? r : Et(r) || Gf(r) ? r + "" : t;
}
function Yu(r) {
  process.env.NODE_ENV !== "production" && Te("`" + r + "` is invalid id or name. Must be a string or number.");
}
function Gu(r) {
  return Gf(r) || pp(r);
}
function Mh(r) {
  var t = r.name;
  return !!(t && t.indexOf(bh));
}
function Xr(r) {
  return r && r.id != null && Fi(r.id).indexOf(wp) === 0;
}
function xp(r, t, e) {
  L(r, function(i) {
    var n = i.newOption;
    F(n) && (i.keyInfo.mainType = t, i.keyInfo.subType = Pp(t, n, i.existing, e));
  });
}
function Pp(r, t, e, i) {
  var n = t.type ? t.type : e ? e.subType : i.determineSubType(r, t);
  return n;
}
function da(r, t) {
  if (t.dataIndexInside != null)
    return t.dataIndexInside;
  if (t.dataIndex != null)
    return Y(t.dataIndex) ? it(t.dataIndex, function(e) {
      return r.indexOfRawIndex(e);
    }) : r.indexOfRawIndex(t.dataIndex);
  if (t.name != null)
    return Y(t.name) ? it(t.name, function(e) {
      return r.indexOfName(e);
    }) : r.indexOfName(t.name);
}
function _t() {
  var r = "__ec_inner_" + Rp++;
  return function(t) {
    return t[r] || (t[r] = {});
  };
}
var Rp = gp();
function qa(r, t, e) {
  var i = Lh(t, e), n = i.mainTypeSpecified, a = i.queryOptionMap, o = i.others, s = o, u = e ? e.defaultMainType : null;
  return !n && u && a.set(u, {}), a.each(function(l, f) {
    var h = pa(r, f, l, {
      useDefault: u === f,
      enableAll: e && e.enableAll != null ? e.enableAll : !0,
      enableNone: e && e.enableNone != null ? e.enableNone : !0
    });
    s[f + "Models"] = h.models, s[f + "Model"] = h.models[0];
  }), s;
}
function Lh(r, t) {
  var e;
  if (Z(r)) {
    var i = {};
    i[r + "Index"] = 0, e = i;
  } else
    e = r;
  var n = $(), a = {}, o = !1;
  return L(e, function(s, u) {
    if (u === "dataIndex" || u === "dataIndexInside") {
      a[u] = s;
      return;
    }
    var l = u.match(/^(\w+)(Index|Id|Name)$/) || [], f = l[1], h = (l[2] || "").toLowerCase();
    if (!(!f || !h || t && t.includeMainTypes && nt(t.includeMainTypes, f) < 0)) {
      o = o || !!f;
      var c = n.get(f) || n.set(f, {});
      c[h] = s;
    }
  }), {
    mainTypeSpecified: o,
    queryOptionMap: n,
    others: a
  };
}
var Fs = {
  useDefault: !0,
  enableAll: !1,
  enableNone: !1
};
function pa(r, t, e, i) {
  i = i || Fs;
  var n = e.index, a = e.id, o = e.name, s = {
    models: null,
    specified: n != null || a != null || o != null
  };
  if (!s.specified) {
    var u = void 0;
    return s.models = i.useDefault && (u = r.getComponent(t)) ? [u] : [], s;
  }
  return n === "none" || n === !1 ? (U(i.enableNone, '`"none"` or `false` is not a valid value on index option.'), s.models = [], s) : (n === "all" && (U(i.enableAll, '`"all"` is not a valid value on index option.'), n = a = o = null), s.models = r.queryComponents({
    mainType: t,
    index: n,
    id: a,
    name: o
  }), s);
}
function Ip(r, t, e) {
  r.setAttribute ? r.setAttribute(t, e) : r[t] = e;
}
function Ap(r, t, e, i, n) {
  var a = t == null || t === "auto";
  if (i == null)
    return i;
  if (Et(i)) {
    var o = zu(e || 0, i, n);
    return Jo(o, a ? Math.max(Fr(e || 0), Fr(i)) : t);
  } else {
    if (Z(i))
      return n < 1 ? e : i;
    for (var s = [], u = e, l = i, f = Math.max(u ? u.length : 0, l.length), h = 0; h < f; ++h) {
      var c = r.getDimensionInfo(h);
      if (c && c.type === "ordinal")
        s[h] = (n < 1 && u ? u : l)[h];
      else {
        var v = u && u[h] ? u[h] : 0, d = l[h], o = zu(v, d, n);
        s[h] = Jo(o, a ? Math.max(Fr(v), Fr(d)) : t);
      }
    }
    return s;
  }
}
var Op = ".", We = "___EC__COMPONENT__CONTAINER___", xh = "___EC__EXTENDED_CLASS___";
function fe(r) {
  var t = {
    main: "",
    sub: ""
  };
  if (r) {
    var e = r.split(Op);
    t.main = e[0] || "", t.sub = e[1] || "";
  }
  return t;
}
function Np(r) {
  U(/^[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)?$/.test(r), 'componentType "' + r + '" illegal');
}
function Bp(r) {
  return !!(r && r[xh]);
}
function Vs(r, t) {
  r.$constructor = r, r.extend = function(e) {
    process.env.NODE_ENV !== "production" && L(t, function(a) {
      e[a] || console.warn("Method `" + a + "` should be implemented" + (e.type ? " in " + e.type : "") + ".");
    });
    var i = this, n;
    return kp(i) ? n = /** @class */
    function(a) {
      j(o, a);
      function o() {
        return a.apply(this, arguments) || this;
      }
      return o;
    }(i) : (n = function() {
      (e.$constructor || i).apply(this, arguments);
    }, Pc(n, this)), N(n.prototype, e), n[xh] = !0, n.extend = this.extend, n.superCall = zp, n.superApply = Hp, n.superClass = i, n;
  };
}
function kp(r) {
  return J(r) && /^class\s/.test(Function.prototype.toString.call(r));
}
function Ph(r, t) {
  r.extend = t.extend;
}
var Fp = Math.round(Math.random() * 10);
function Vp(r) {
  var t = ["__\0is_clz", Fp++].join("_");
  r.prototype[t] = !0, process.env.NODE_ENV !== "production" && U(!r.isInstance, 'The method "is" can not be defined.'), r.isInstance = function(e) {
    return !!(e && e[t]);
  };
}
function zp(r, t) {
  for (var e = [], i = 2; i < arguments.length; i++)
    e[i - 2] = arguments[i];
  return this.superClass.prototype[t].apply(r, e);
}
function Hp(r, t, e) {
  return this.superClass.prototype[t].apply(r, e);
}
function zs(r) {
  var t = {};
  r.registerClass = function(i) {
    var n = i.type || i.prototype.type;
    if (n) {
      Np(n), i.prototype.type = n;
      var a = fe(n);
      if (!a.sub)
        process.env.NODE_ENV !== "production" && t[a.main] && console.warn(a.main + " exists."), t[a.main] = i;
      else if (a.sub !== We) {
        var o = e(a);
        o[a.sub] = i;
      }
    }
    return i;
  }, r.getClass = function(i, n, a) {
    var o = t[i];
    if (o && o[We] && (o = n ? o[n] : null), a && !o)
      throw new Error(n ? "Component " + i + "." + (n || "") + " is used but not imported." : i + ".type should be specified.");
    return o;
  }, r.getClassesByMainType = function(i) {
    var n = fe(i), a = [], o = t[n.main];
    return o && o[We] ? L(o, function(s, u) {
      u !== We && a.push(s);
    }) : a.push(o), a;
  }, r.hasClass = function(i) {
    var n = fe(i);
    return !!t[n.main];
  }, r.getAllClassMainTypes = function() {
    var i = [];
    return L(t, function(n, a) {
      i.push(a);
    }), i;
  }, r.hasSubTypes = function(i) {
    var n = fe(i), a = t[n.main];
    return a && a[We];
  };
  function e(i) {
    var n = t[i.main];
    return (!n || !n[We]) && (n = t[i.main] = {}, n[We] = !0), n;
  }
}
function Gi(r, t) {
  for (var e = 0; e < r.length; e++)
    r[e][1] || (r[e][1] = r[e][0]);
  return t = t || !1, function(i, n, a) {
    for (var o = {}, s = 0; s < r.length; s++) {
      var u = r[s][1];
      if (!(n && nt(n, u) >= 0 || a && nt(a, u) < 0)) {
        var l = i.getShallow(u, t);
        l != null && (o[r[s][0]] = l);
      }
    }
    return o;
  };
}
var Up = [
  ["fill", "color"],
  ["shadowBlur"],
  ["shadowOffsetX"],
  ["shadowOffsetY"],
  ["opacity"],
  ["shadowColor"]
  // Option decal is in `DecalObject` but style.decal is in `PatternObject`.
  // So do not transfer decal directly.
], Yp = Gi(Up), Gp = (
  /** @class */
  function() {
    function r() {
    }
    return r.prototype.getAreaStyle = function(t, e) {
      return Yp(this, t, e);
    }, r;
  }()
), ts = new qi(50);
function Wp(r) {
  if (typeof r == "string") {
    var t = ts.get(r);
    return t && t.image;
  } else
    return r;
}
function Rh(r, t, e, i, n) {
  if (r)
    if (typeof r == "string") {
      if (t && t.__zrImageSrc === r || !e)
        return t;
      var a = ts.get(r), o = { hostEl: e, cb: i, cbPayload: n };
      return a ? (t = a.image, !ga(t) && a.pending.push(o)) : (t = Jr.loadImage(r, Wu, Wu), t.__zrImageSrc = r, ts.put(r, t.__cachedImgObj = {
        image: t,
        pending: [o]
      })), t;
    } else
      return r;
  else
    return t;
}
function Wu() {
  var r = this.__cachedImgObj;
  this.onload = this.onerror = this.__cachedImgObj = null;
  for (var t = 0; t < r.pending.length; t++) {
    var e = r.pending[t], i = e.cb;
    i && i(this, e.cbPayload), e.hostEl.dirty();
  }
  r.pending.length = 0;
}
function ga(r) {
  return r && r.width && r.height;
}
var Za = /\{([a-zA-Z0-9_]+)\|([^}]*)\}/g;
function $p(r, t, e, i, n) {
  if (!t)
    return "";
  var a = (r + "").split(`
`);
  n = Ih(t, e, i, n);
  for (var o = 0, s = a.length; o < s; o++)
    a[o] = Ah(a[o], n);
  return a.join(`
`);
}
function Ih(r, t, e, i) {
  i = i || {};
  var n = N({}, i);
  n.font = t, e = W(e, "..."), n.maxIterations = W(i.maxIterations, 2);
  var a = n.minChar = W(i.minChar, 0);
  n.cnCharWidth = Yt("国", t);
  var o = n.ascCharWidth = Yt("a", t);
  n.placeholder = W(i.placeholder, "");
  for (var s = r = Math.max(0, r - 1), u = 0; u < a && s >= o; u++)
    s -= o;
  var l = Yt(e, t);
  return l > s && (e = "", l = 0), s = r - l, n.ellipsis = e, n.ellipsisWidth = l, n.contentWidth = s, n.containerWidth = r, n;
}
function Ah(r, t) {
  var e = t.containerWidth, i = t.font, n = t.contentWidth;
  if (!e)
    return "";
  var a = Yt(r, i);
  if (a <= e)
    return r;
  for (var o = 0; ; o++) {
    if (a <= n || o >= t.maxIterations) {
      r += t.ellipsis;
      break;
    }
    var s = o === 0 ? Xp(r, n, t.ascCharWidth, t.cnCharWidth) : a > 0 ? Math.floor(r.length * n / a) : 0;
    r = r.substr(0, s), a = Yt(r, i);
  }
  return r === "" && (r = t.placeholder), r;
}
function Xp(r, t, e, i) {
  for (var n = 0, a = 0, o = r.length; a < o && n < t; a++) {
    var s = r.charCodeAt(a);
    n += 0 <= s && s <= 127 ? e : i;
  }
  return a;
}
function qp(r, t) {
  r != null && (r += "");
  var e = t.overflow, i = t.padding, n = t.font, a = e === "truncate", o = Bs(n), s = W(t.lineHeight, o), u = !!t.backgroundColor, l = t.lineOverflow === "truncate", f = t.width, h;
  f != null && (e === "break" || e === "breakAll") ? h = r ? Oh(r, t.font, f, e === "breakAll", 0).lines : [] : h = r ? r.split(`
`) : [];
  var c = h.length * s, v = W(t.height, c);
  if (c > v && l) {
    var d = Math.floor(v / s);
    h = h.slice(0, d);
  }
  if (r && a && f != null)
    for (var _ = Ih(f, n, t.ellipsis, {
      minChar: t.truncateMinChar,
      placeholder: t.placeholder
    }), p = 0; p < h.length; p++)
      h[p] = Ah(h[p], _);
  for (var g = v, y = 0, p = 0; p < h.length; p++)
    y = Math.max(Yt(h[p], n), y);
  f == null && (f = y);
  var m = y;
  return i && (g += i[0] + i[2], m += i[1] + i[3], f += i[1] + i[3]), u && (m = f), {
    lines: h,
    height: v,
    outerWidth: m,
    outerHeight: g,
    lineHeight: s,
    calculatedLineHeight: o,
    contentWidth: y,
    contentHeight: c,
    width: f
  };
}
var Zp = function() {
  function r() {
  }
  return r;
}(), $u = function() {
  function r(t) {
    this.tokens = [], t && (this.tokens = t);
  }
  return r;
}(), Kp = function() {
  function r() {
    this.width = 0, this.height = 0, this.contentWidth = 0, this.contentHeight = 0, this.outerWidth = 0, this.outerHeight = 0, this.lines = [];
  }
  return r;
}();
function Qp(r, t) {
  var e = new Kp();
  if (r != null && (r += ""), !r)
    return e;
  for (var i = t.width, n = t.height, a = t.overflow, o = (a === "break" || a === "breakAll") && i != null ? { width: i, accumWidth: 0, breakAll: a === "breakAll" } : null, s = Za.lastIndex = 0, u; (u = Za.exec(r)) != null; ) {
    var l = u.index;
    l > s && Ka(e, r.substring(s, l), t, o), Ka(e, u[2], t, o, u[1]), s = Za.lastIndex;
  }
  s < r.length && Ka(e, r.substring(s, r.length), t, o);
  var f = [], h = 0, c = 0, v = t.padding, d = a === "truncate", _ = t.lineOverflow === "truncate";
  function p(A, B, k) {
    A.width = B, A.lineHeight = k, h += k, c = Math.max(c, B);
  }
  t:
    for (var g = 0; g < e.lines.length; g++) {
      for (var y = e.lines[g], m = 0, w = 0, T = 0; T < y.tokens.length; T++) {
        var S = y.tokens[T], D = S.styleName && t.rich[S.styleName] || {}, C = S.textPadding = D.padding, b = C ? C[1] + C[3] : 0, M = S.font = D.font || t.font;
        S.contentHeight = Bs(M);
        var E = W(D.height, S.contentHeight);
        if (S.innerHeight = E, C && (E += C[0] + C[2]), S.height = E, S.lineHeight = Mn(D.lineHeight, t.lineHeight, E), S.align = D && D.align || t.align, S.verticalAlign = D && D.verticalAlign || "middle", _ && n != null && h + S.lineHeight > n) {
          T > 0 ? (y.tokens = y.tokens.slice(0, T), p(y, w, m), e.lines = e.lines.slice(0, g + 1)) : e.lines = e.lines.slice(0, g);
          break t;
        }
        var P = D.width, x = P == null || P === "auto";
        if (typeof P == "string" && P.charAt(P.length - 1) === "%")
          S.percentWidth = P, f.push(S), S.contentWidth = Yt(S.text, M);
        else {
          if (x) {
            var R = D.backgroundColor, O = R && R.image;
            O && (O = Wp(O), ga(O) && (S.width = Math.max(S.width, O.width * E / O.height)));
          }
          var I = d && i != null ? i - w : null;
          I != null && I < S.width ? !x || I < b ? (S.text = "", S.width = S.contentWidth = 0) : (S.text = $p(S.text, I - b, M, t.ellipsis, { minChar: t.truncateMinChar }), S.width = S.contentWidth = Yt(S.text, M)) : S.contentWidth = Yt(S.text, M);
        }
        S.width += b, w += S.width, D && (m = Math.max(m, S.lineHeight));
      }
      p(y, w, m);
    }
  e.outerWidth = e.width = W(i, c), e.outerHeight = e.height = W(n, h), e.contentHeight = h, e.contentWidth = c, v && (e.outerWidth += v[1] + v[3], e.outerHeight += v[0] + v[2]);
  for (var g = 0; g < f.length; g++) {
    var S = f[g], X = S.percentWidth;
    S.width = parseInt(X, 10) / 100 * e.width;
  }
  return e;
}
function Ka(r, t, e, i, n) {
  var a = t === "", o = n && e.rich[n] || {}, s = r.lines, u = o.font || e.font, l = !1, f, h;
  if (i) {
    var c = o.padding, v = c ? c[1] + c[3] : 0;
    if (o.width != null && o.width !== "auto") {
      var d = Yi(o.width, i.width) + v;
      s.length > 0 && d + i.accumWidth > i.width && (f = t.split(`
`), l = !0), i.accumWidth = d;
    } else {
      var _ = Oh(t, u, i.width, i.breakAll, i.accumWidth);
      i.accumWidth = _.accumWidth + v, h = _.linesWidths, f = _.lines;
    }
  } else
    f = t.split(`
`);
  for (var p = 0; p < f.length; p++) {
    var g = f[p], y = new Zp();
    if (y.styleName = n, y.text = g, y.isLineHolder = !g && !a, typeof o.width == "number" ? y.width = o.width : y.width = h ? h[p] : Yt(g, u), !p && !l) {
      var m = (s[s.length - 1] || (s[0] = new $u())).tokens, w = m.length;
      w === 1 && m[0].isLineHolder ? m[0] = y : (g || !w || a) && m.push(y);
    } else
      s.push(new $u([y]));
  }
}
function Jp(r) {
  var t = r.charCodeAt(0);
  return t >= 32 && t <= 591 || t >= 880 && t <= 4351 || t >= 4608 && t <= 5119 || t >= 7680 && t <= 8303;
}
var jp = ti(",&?/;] ".split(""), function(r, t) {
  return r[t] = !0, r;
}, {});
function tg(r) {
  return Jp(r) ? !!jp[r] : !0;
}
function Oh(r, t, e, i, n) {
  for (var a = [], o = [], s = "", u = "", l = 0, f = 0, h = 0; h < r.length; h++) {
    var c = r.charAt(h);
    if (c === `
`) {
      u && (s += u, f += l), a.push(s), o.push(f), s = "", u = "", l = 0, f = 0;
      continue;
    }
    var v = Yt(c, t), d = i ? !1 : !tg(c);
    if (a.length ? f + v > e : n + f + v > e) {
      f ? (s || u) && (d ? (s || (s = u, u = "", l = 0, f = l), a.push(s), o.push(f - l), u += c, l += v, s = "", f = l) : (u && (s += u, u = "", l = 0), a.push(s), o.push(f), s = c, f = v)) : d ? (a.push(u), o.push(l), u = c, l = v) : (a.push(c), o.push(v));
      continue;
    }
    f += v, d ? (u += c, l += v) : (u && (s += u, u = "", l = 0), s += c);
  }
  return !a.length && !s && (s = r, u = "", l = 0), u && (s += u), s && (a.push(s), o.push(f)), a.length === 1 && (f += n), {
    accumWidth: f,
    lines: a,
    linesWidths: o
  };
}
var es = "__zr_style_" + Math.round(Math.random() * 10), dr = {
  shadowBlur: 0,
  shadowOffsetX: 0,
  shadowOffsetY: 0,
  shadowColor: "#000",
  opacity: 1,
  blend: "source-over"
}, _a = {
  style: {
    shadowBlur: !0,
    shadowOffsetX: !0,
    shadowOffsetY: !0,
    shadowColor: !0,
    opacity: !0
  }
};
dr[es] = !0;
var Xu = ["z", "z2", "invisible"], eg = ["invisible"], rg = function(r) {
  j(t, r);
  function t(e) {
    return r.call(this, e) || this;
  }
  return t.prototype._init = function(e) {
    for (var i = lt(e), n = 0; n < i.length; n++) {
      var a = i[n];
      a === "style" ? this.useStyle(e[a]) : r.prototype.attrKV.call(this, a, e[a]);
    }
    this.style || this.useStyle({});
  }, t.prototype.beforeBrush = function() {
  }, t.prototype.afterBrush = function() {
  }, t.prototype.innerBeforeBrush = function() {
  }, t.prototype.innerAfterBrush = function() {
  }, t.prototype.shouldBePainted = function(e, i, n, a) {
    var o = this.transform;
    if (this.ignore || this.invisible || this.style.opacity === 0 || this.culling && ig(this, e, i) || o && !o[0] && !o[3])
      return !1;
    if (n && this.__clipPaths) {
      for (var s = 0; s < this.__clipPaths.length; ++s)
        if (this.__clipPaths[s].isZeroArea())
          return !1;
    }
    if (a && this.parent)
      for (var u = this.parent; u; ) {
        if (u.ignore)
          return !1;
        u = u.parent;
      }
    return !0;
  }, t.prototype.contain = function(e, i) {
    return this.rectContain(e, i);
  }, t.prototype.traverse = function(e, i) {
    e.call(i, this);
  }, t.prototype.rectContain = function(e, i) {
    var n = this.transformCoordToLocal(e, i), a = this.getBoundingRect();
    return a.contain(n[0], n[1]);
  }, t.prototype.getPaintRect = function() {
    var e = this._paintRect;
    if (!this._paintRect || this.__dirty) {
      var i = this.transform, n = this.getBoundingRect(), a = this.style, o = a.shadowBlur || 0, s = a.shadowOffsetX || 0, u = a.shadowOffsetY || 0;
      e = this._paintRect || (this._paintRect = new et(0, 0, 0, 0)), i ? et.applyTransform(e, n, i) : e.copy(n), (o || s || u) && (e.width += o * 2 + Math.abs(s), e.height += o * 2 + Math.abs(u), e.x = Math.min(e.x, e.x + s - o), e.y = Math.min(e.y, e.y + u - o));
      var l = this.dirtyRectTolerance;
      e.isZero() || (e.x = Math.floor(e.x - l), e.y = Math.floor(e.y - l), e.width = Math.ceil(e.width + 1 + l * 2), e.height = Math.ceil(e.height + 1 + l * 2));
    }
    return e;
  }, t.prototype.setPrevPaintRect = function(e) {
    e ? (this._prevPaintRect = this._prevPaintRect || new et(0, 0, 0, 0), this._prevPaintRect.copy(e)) : this._prevPaintRect = null;
  }, t.prototype.getPrevPaintRect = function() {
    return this._prevPaintRect;
  }, t.prototype.animateStyle = function(e) {
    return this.animate("style", e);
  }, t.prototype.updateDuringAnimation = function(e) {
    e === "style" ? this.dirtyStyle() : this.markRedraw();
  }, t.prototype.attrKV = function(e, i) {
    e !== "style" ? r.prototype.attrKV.call(this, e, i) : this.style ? this.setStyle(i) : this.useStyle(i);
  }, t.prototype.setStyle = function(e, i) {
    return typeof e == "string" ? this.style[e] = i : N(this.style, e), this.dirtyStyle(), this;
  }, t.prototype.dirtyStyle = function(e) {
    e || this.markRedraw(), this.__dirty |= Li, this._rect && (this._rect = null);
  }, t.prototype.dirty = function() {
    this.dirtyStyle();
  }, t.prototype.styleChanged = function() {
    return !!(this.__dirty & Li);
  }, t.prototype.styleUpdated = function() {
    this.__dirty &= ~Li;
  }, t.prototype.createStyle = function(e) {
    return ha(dr, e);
  }, t.prototype.useStyle = function(e) {
    e[es] || (e = this.createStyle(e)), this.__inHover ? this.__hoverStyle = e : this.style = e, this.dirtyStyle();
  }, t.prototype.isStyleObject = function(e) {
    return e[es];
  }, t.prototype._innerSaveToNormal = function(e) {
    r.prototype._innerSaveToNormal.call(this, e);
    var i = this._normalState;
    e.style && !i.style && (i.style = this._mergeStyle(this.createStyle(), this.style)), this._savePrimaryToNormal(e, i, Xu);
  }, t.prototype._applyStateObj = function(e, i, n, a, o, s) {
    r.prototype._applyStateObj.call(this, e, i, n, a, o, s);
    var u = !(i && a), l;
    if (i && i.style ? o ? a ? l = i.style : (l = this._mergeStyle(this.createStyle(), n.style), this._mergeStyle(l, i.style)) : (l = this._mergeStyle(this.createStyle(), a ? this.style : n.style), this._mergeStyle(l, i.style)) : u && (l = n.style), l)
      if (o) {
        var f = this.style;
        if (this.style = this.createStyle(u ? {} : f), u)
          for (var h = lt(f), c = 0; c < h.length; c++) {
            var v = h[c];
            v in l && (l[v] = l[v], this.style[v] = f[v]);
          }
        for (var d = lt(l), c = 0; c < d.length; c++) {
          var v = d[c];
          this.style[v] = this.style[v];
        }
        this._transitionState(e, {
          style: l
        }, s, this.getAnimationStyleProps());
      } else
        this.useStyle(l);
    for (var _ = this.__inHover ? eg : Xu, c = 0; c < _.length; c++) {
      var v = _[c];
      i && i[v] != null ? this[v] = i[v] : u && n[v] != null && (this[v] = n[v]);
    }
  }, t.prototype._mergeStates = function(e) {
    for (var i = r.prototype._mergeStates.call(this, e), n, a = 0; a < e.length; a++) {
      var o = e[a];
      o.style && (n = n || {}, this._mergeStyle(n, o.style));
    }
    return n && (i.style = n), i;
  }, t.prototype._mergeStyle = function(e, i) {
    return N(e, i), e;
  }, t.prototype.getAnimationStyleProps = function() {
    return _a;
  }, t.initDefaultProps = function() {
    var e = t.prototype;
    e.type = "displayable", e.invisible = !1, e.z = 0, e.z2 = 0, e.zlevel = 0, e.culling = !1, e.cursor = "pointer", e.rectHover = !1, e.incremental = !1, e._rect = null, e.dirtyRectTolerance = 0, e.__dirty = Ut | Li;
  }(), t;
}(mh), Qa = new et(0, 0, 0, 0), Ja = new et(0, 0, 0, 0);
function ig(r, t, e) {
  return Qa.copy(r.getBoundingRect()), r.transform && Qa.applyTransform(r.transform), Ja.width = t, Ja.height = e, !Qa.intersect(Ja);
}
const ya = rg;
var Jt = Math.min, jt = Math.max, ja = Math.sin, to = Math.cos, $e = Math.PI * 2, an = ei(), on = ei(), sn = ei();
function qu(r, t, e, i, n, a) {
  n[0] = Jt(r, e), n[1] = Jt(t, i), a[0] = jt(r, e), a[1] = jt(t, i);
}
var Zu = [], Ku = [];
function ng(r, t, e, i, n, a, o, s, u, l) {
  var f = oh, h = Ct, c = f(r, e, n, o, Zu);
  u[0] = 1 / 0, u[1] = 1 / 0, l[0] = -1 / 0, l[1] = -1 / 0;
  for (var v = 0; v < c; v++) {
    var d = h(r, e, n, o, Zu[v]);
    u[0] = Jt(d, u[0]), l[0] = jt(d, l[0]);
  }
  c = f(t, i, a, s, Ku);
  for (var v = 0; v < c; v++) {
    var _ = h(t, i, a, s, Ku[v]);
    u[1] = Jt(_, u[1]), l[1] = jt(_, l[1]);
  }
  u[0] = Jt(r, u[0]), l[0] = jt(r, l[0]), u[0] = Jt(o, u[0]), l[0] = jt(o, l[0]), u[1] = Jt(t, u[1]), l[1] = jt(t, l[1]), u[1] = Jt(s, u[1]), l[1] = jt(s, l[1]);
}
function ag(r, t, e, i, n, a, o, s) {
  var u = uh, l = Rt, f = jt(Jt(u(r, e, n), 1), 0), h = jt(Jt(u(t, i, a), 1), 0), c = l(r, e, n, f), v = l(t, i, a, h);
  o[0] = Jt(r, n, c), o[1] = Jt(t, a, v), s[0] = jt(r, n, c), s[1] = jt(t, a, v);
}
function og(r, t, e, i, n, a, o, s, u) {
  var l = Nr, f = Br, h = Math.abs(n - a);
  if (h % $e < 1e-4 && h > 1e-4) {
    s[0] = r - e, s[1] = t - i, u[0] = r + e, u[1] = t + i;
    return;
  }
  if (an[0] = to(n) * e + r, an[1] = ja(n) * i + t, on[0] = to(a) * e + r, on[1] = ja(a) * i + t, l(s, an, on), f(u, an, on), n = n % $e, n < 0 && (n = n + $e), a = a % $e, a < 0 && (a = a + $e), n > a && !o ? a += $e : n < a && o && (n += $e), o) {
    var c = a;
    a = n, n = c;
  }
  for (var v = 0; v < a; v += Math.PI / 2)
    v > n && (sn[0] = to(v) * e + r, sn[1] = ja(v) * i + t, l(s, sn, s), f(u, sn, u));
}
var q = {
  M: 1,
  L: 2,
  C: 3,
  Q: 4,
  A: 5,
  Z: 6,
  R: 7
}, Xe = [], qe = [], ae = [], xe = [], oe = [], se = [], eo = Math.min, ro = Math.max, Ze = Math.cos, Ke = Math.sin, ye = Math.abs, rs = Math.PI, Oe = rs * 2, io = typeof Float32Array < "u", vi = [];
function no(r) {
  var t = Math.round(r / rs * 1e8) / 1e8;
  return t % 2 * rs;
}
function sg(r, t) {
  var e = no(r[0]);
  e < 0 && (e += Oe);
  var i = e - r[0], n = r[1];
  n += i, !t && n - e >= Oe ? n = e + Oe : t && e - n >= Oe ? n = e - Oe : !t && e > n ? n = e + (Oe - no(e - n)) : t && e < n && (n = e - (Oe - no(n - e))), r[0] = e, r[1] = n;
}
var ug = function() {
  function r(t) {
    this.dpr = 1, this._xi = 0, this._yi = 0, this._x0 = 0, this._y0 = 0, this._len = 0, t && (this._saveData = !1), this._saveData && (this.data = []);
  }
  return r.prototype.increaseVersion = function() {
    this._version++;
  }, r.prototype.getVersion = function() {
    return this._version;
  }, r.prototype.setScale = function(t, e, i) {
    i = i || 0, i > 0 && (this._ux = ye(i / $n / t) || 0, this._uy = ye(i / $n / e) || 0);
  }, r.prototype.setDPR = function(t) {
    this.dpr = t;
  }, r.prototype.setContext = function(t) {
    this._ctx = t;
  }, r.prototype.getContext = function() {
    return this._ctx;
  }, r.prototype.beginPath = function() {
    return this._ctx && this._ctx.beginPath(), this.reset(), this;
  }, r.prototype.reset = function() {
    this._saveData && (this._len = 0), this._pathSegLen && (this._pathSegLen = null, this._pathLen = 0), this._version++;
  }, r.prototype.moveTo = function(t, e) {
    return this._drawPendingPt(), this.addData(q.M, t, e), this._ctx && this._ctx.moveTo(t, e), this._x0 = t, this._y0 = e, this._xi = t, this._yi = e, this;
  }, r.prototype.lineTo = function(t, e) {
    var i = ye(t - this._xi), n = ye(e - this._yi), a = i > this._ux || n > this._uy;
    if (this.addData(q.L, t, e), this._ctx && a && this._ctx.lineTo(t, e), a)
      this._xi = t, this._yi = e, this._pendingPtDist = 0;
    else {
      var o = i * i + n * n;
      o > this._pendingPtDist && (this._pendingPtX = t, this._pendingPtY = e, this._pendingPtDist = o);
    }
    return this;
  }, r.prototype.bezierCurveTo = function(t, e, i, n, a, o) {
    return this._drawPendingPt(), this.addData(q.C, t, e, i, n, a, o), this._ctx && this._ctx.bezierCurveTo(t, e, i, n, a, o), this._xi = a, this._yi = o, this;
  }, r.prototype.quadraticCurveTo = function(t, e, i, n) {
    return this._drawPendingPt(), this.addData(q.Q, t, e, i, n), this._ctx && this._ctx.quadraticCurveTo(t, e, i, n), this._xi = i, this._yi = n, this;
  }, r.prototype.arc = function(t, e, i, n, a, o) {
    this._drawPendingPt(), vi[0] = n, vi[1] = a, sg(vi, o), n = vi[0], a = vi[1];
    var s = a - n;
    return this.addData(q.A, t, e, i, i, n, s, 0, o ? 0 : 1), this._ctx && this._ctx.arc(t, e, i, n, a, o), this._xi = Ze(a) * i + t, this._yi = Ke(a) * i + e, this;
  }, r.prototype.arcTo = function(t, e, i, n, a) {
    return this._drawPendingPt(), this._ctx && this._ctx.arcTo(t, e, i, n, a), this;
  }, r.prototype.rect = function(t, e, i, n) {
    return this._drawPendingPt(), this._ctx && this._ctx.rect(t, e, i, n), this.addData(q.R, t, e, i, n), this;
  }, r.prototype.closePath = function() {
    this._drawPendingPt(), this.addData(q.Z);
    var t = this._ctx, e = this._x0, i = this._y0;
    return t && t.closePath(), this._xi = e, this._yi = i, this;
  }, r.prototype.fill = function(t) {
    t && t.fill(), this.toStatic();
  }, r.prototype.stroke = function(t) {
    t && t.stroke(), this.toStatic();
  }, r.prototype.len = function() {
    return this._len;
  }, r.prototype.setData = function(t) {
    var e = t.length;
    !(this.data && this.data.length === e) && io && (this.data = new Float32Array(e));
    for (var i = 0; i < e; i++)
      this.data[i] = t[i];
    this._len = e;
  }, r.prototype.appendPath = function(t) {
    t instanceof Array || (t = [t]);
    for (var e = t.length, i = 0, n = this._len, a = 0; a < e; a++)
      i += t[a].len();
    io && this.data instanceof Float32Array && (this.data = new Float32Array(n + i));
    for (var a = 0; a < e; a++)
      for (var o = t[a].data, s = 0; s < o.length; s++)
        this.data[n++] = o[s];
    this._len = n;
  }, r.prototype.addData = function(t, e, i, n, a, o, s, u, l) {
    if (this._saveData) {
      var f = this.data;
      this._len + arguments.length > f.length && (this._expandData(), f = this.data);
      for (var h = 0; h < arguments.length; h++)
        f[this._len++] = arguments[h];
    }
  }, r.prototype._drawPendingPt = function() {
    this._pendingPtDist > 0 && (this._ctx && this._ctx.lineTo(this._pendingPtX, this._pendingPtY), this._pendingPtDist = 0);
  }, r.prototype._expandData = function() {
    if (!(this.data instanceof Array)) {
      for (var t = [], e = 0; e < this._len; e++)
        t[e] = this.data[e];
      this.data = t;
    }
  }, r.prototype.toStatic = function() {
    if (this._saveData) {
      this._drawPendingPt();
      var t = this.data;
      t instanceof Array && (t.length = this._len, io && this._len > 11 && (this.data = new Float32Array(t)));
    }
  }, r.prototype.getBoundingRect = function() {
    ae[0] = ae[1] = oe[0] = oe[1] = Number.MAX_VALUE, xe[0] = xe[1] = se[0] = se[1] = -Number.MAX_VALUE;
    var t = this.data, e = 0, i = 0, n = 0, a = 0, o;
    for (o = 0; o < this._len; ) {
      var s = t[o++], u = o === 1;
      switch (u && (e = t[o], i = t[o + 1], n = e, a = i), s) {
        case q.M:
          e = n = t[o++], i = a = t[o++], oe[0] = n, oe[1] = a, se[0] = n, se[1] = a;
          break;
        case q.L:
          qu(e, i, t[o], t[o + 1], oe, se), e = t[o++], i = t[o++];
          break;
        case q.C:
          ng(e, i, t[o++], t[o++], t[o++], t[o++], t[o], t[o + 1], oe, se), e = t[o++], i = t[o++];
          break;
        case q.Q:
          ag(e, i, t[o++], t[o++], t[o], t[o + 1], oe, se), e = t[o++], i = t[o++];
          break;
        case q.A:
          var l = t[o++], f = t[o++], h = t[o++], c = t[o++], v = t[o++], d = t[o++] + v;
          o += 1;
          var _ = !t[o++];
          u && (n = Ze(v) * h + l, a = Ke(v) * c + f), og(l, f, h, c, v, d, _, oe, se), e = Ze(d) * h + l, i = Ke(d) * c + f;
          break;
        case q.R:
          n = e = t[o++], a = i = t[o++];
          var p = t[o++], g = t[o++];
          qu(n, a, n + p, a + g, oe, se);
          break;
        case q.Z:
          e = n, i = a;
          break;
      }
      Nr(ae, ae, oe), Br(xe, xe, se);
    }
    return o === 0 && (ae[0] = ae[1] = xe[0] = xe[1] = 0), new et(ae[0], ae[1], xe[0] - ae[0], xe[1] - ae[1]);
  }, r.prototype._calculateLength = function() {
    var t = this.data, e = this._len, i = this._ux, n = this._uy, a = 0, o = 0, s = 0, u = 0;
    this._pathSegLen || (this._pathSegLen = []);
    for (var l = this._pathSegLen, f = 0, h = 0, c = 0; c < e; ) {
      var v = t[c++], d = c === 1;
      d && (a = t[c], o = t[c + 1], s = a, u = o);
      var _ = -1;
      switch (v) {
        case q.M:
          a = s = t[c++], o = u = t[c++];
          break;
        case q.L: {
          var p = t[c++], g = t[c++], y = p - a, m = g - o;
          (ye(y) > i || ye(m) > n || c === e - 1) && (_ = Math.sqrt(y * y + m * m), a = p, o = g);
          break;
        }
        case q.C: {
          var w = t[c++], T = t[c++], p = t[c++], g = t[c++], S = t[c++], D = t[c++];
          _ = Cd(a, o, w, T, p, g, S, D, 10), a = S, o = D;
          break;
        }
        case q.Q: {
          var w = t[c++], T = t[c++], p = t[c++], g = t[c++];
          _ = Ed(a, o, w, T, p, g, 10), a = p, o = g;
          break;
        }
        case q.A:
          var C = t[c++], b = t[c++], M = t[c++], E = t[c++], P = t[c++], x = t[c++], R = x + P;
          c += 1, t[c++], d && (s = Ze(P) * M + C, u = Ke(P) * E + b), _ = ro(M, E) * eo(Oe, Math.abs(x)), a = Ze(R) * M + C, o = Ke(R) * E + b;
          break;
        case q.R: {
          s = a = t[c++], u = o = t[c++];
          var O = t[c++], I = t[c++];
          _ = O * 2 + I * 2;
          break;
        }
        case q.Z: {
          var y = s - a, m = u - o;
          _ = Math.sqrt(y * y + m * m), a = s, o = u;
          break;
        }
      }
      _ >= 0 && (l[h++] = _, f += _);
    }
    return this._pathLen = f, f;
  }, r.prototype.rebuildPath = function(t, e) {
    var i = this.data, n = this._ux, a = this._uy, o = this._len, s, u, l, f, h, c, v = e < 1, d, _, p = 0, g = 0, y, m = 0, w, T;
    if (!(v && (this._pathSegLen || this._calculateLength(), d = this._pathSegLen, _ = this._pathLen, y = e * _, !y)))
      t:
        for (var S = 0; S < o; ) {
          var D = i[S++], C = S === 1;
          switch (C && (l = i[S], f = i[S + 1], s = l, u = f), D !== q.L && m > 0 && (t.lineTo(w, T), m = 0), D) {
            case q.M:
              s = l = i[S++], u = f = i[S++], t.moveTo(l, f);
              break;
            case q.L: {
              h = i[S++], c = i[S++];
              var b = ye(h - l), M = ye(c - f);
              if (b > n || M > a) {
                if (v) {
                  var E = d[g++];
                  if (p + E > y) {
                    var P = (y - p) / E;
                    t.lineTo(l * (1 - P) + h * P, f * (1 - P) + c * P);
                    break t;
                  }
                  p += E;
                }
                t.lineTo(h, c), l = h, f = c, m = 0;
              } else {
                var x = b * b + M * M;
                x > m && (w = h, T = c, m = x);
              }
              break;
            }
            case q.C: {
              var R = i[S++], O = i[S++], I = i[S++], X = i[S++], A = i[S++], B = i[S++];
              if (v) {
                var E = d[g++];
                if (p + E > y) {
                  var P = (y - p) / E;
                  Su(l, R, I, A, P, Xe), Su(f, O, X, B, P, qe), t.bezierCurveTo(Xe[1], qe[1], Xe[2], qe[2], Xe[3], qe[3]);
                  break t;
                }
                p += E;
              }
              t.bezierCurveTo(R, O, I, X, A, B), l = A, f = B;
              break;
            }
            case q.Q: {
              var R = i[S++], O = i[S++], I = i[S++], X = i[S++];
              if (v) {
                var E = d[g++];
                if (p + E > y) {
                  var P = (y - p) / E;
                  Tu(l, R, I, P, Xe), Tu(f, O, X, P, qe), t.quadraticCurveTo(Xe[1], qe[1], Xe[2], qe[2]);
                  break t;
                }
                p += E;
              }
              t.quadraticCurveTo(R, O, I, X), l = I, f = X;
              break;
            }
            case q.A:
              var k = i[S++], G = i[S++], z = i[S++], H = i[S++], tt = i[S++], Q = i[S++], vt = i[S++], at = !i[S++], ct = z > H ? z : H, xt = ye(z - H) > 1e-3, dt = tt + Q, ne = !1;
              if (v) {
                var E = d[g++];
                p + E > y && (dt = tt + Q * (y - p) / E, ne = !0), p += E;
              }
              if (xt && t.ellipse ? t.ellipse(k, G, z, H, vt, tt, dt, at) : t.arc(k, G, ct, tt, dt, at), ne)
                break t;
              C && (s = Ze(tt) * z + k, u = Ke(tt) * H + G), l = Ze(dt) * z + k, f = Ke(dt) * H + G;
              break;
            case q.R:
              s = l = i[S], u = f = i[S + 1], h = i[S++], c = i[S++];
              var kt = i[S++], _e = i[S++];
              if (v) {
                var E = d[g++];
                if (p + E > y) {
                  var ot = y - p;
                  t.moveTo(h, c), t.lineTo(h + eo(ot, kt), c), ot -= kt, ot > 0 && t.lineTo(h + kt, c + eo(ot, _e)), ot -= _e, ot > 0 && t.lineTo(h + ro(kt - ot, 0), c + _e), ot -= kt, ot > 0 && t.lineTo(h, c + ro(_e - ot, 0));
                  break t;
                }
                p += E;
              }
              t.rect(h, c, kt, _e);
              break;
            case q.Z:
              if (v) {
                var E = d[g++];
                if (p + E > y) {
                  var P = (y - p) / E;
                  t.lineTo(l * (1 - P) + s * P, f * (1 - P) + u * P);
                  break t;
                }
                p += E;
              }
              t.closePath(), l = s, f = u;
          }
        }
  }, r.prototype.clone = function() {
    var t = new r(), e = this.data;
    return t.data = e.slice ? e.slice() : Array.prototype.slice.call(e), t._len = this._len, t;
  }, r.CMD = q, r.initDefaultProps = function() {
    var t = r.prototype;
    t._saveData = !0, t._ux = 0, t._uy = 0, t._pendingPtDist = 0, t._version = 0;
  }(), r;
}();
const yr = ug;
function br(r, t, e, i, n, a, o) {
  if (n === 0)
    return !1;
  var s = n, u = 0, l = r;
  if (o > t + s && o > i + s || o < t - s && o < i - s || a > r + s && a > e + s || a < r - s && a < e - s)
    return !1;
  if (r !== e)
    u = (t - i) / (r - e), l = (r * i - e * t) / (r - e);
  else
    return Math.abs(a - r) <= s / 2;
  var f = u * a - o + l, h = f * f / (u * u + 1);
  return h <= s / 2 * s / 2;
}
function lg(r, t, e, i, n, a, o, s, u, l, f) {
  if (u === 0)
    return !1;
  var h = u;
  if (f > t + h && f > i + h && f > a + h && f > s + h || f < t - h && f < i - h && f < a - h && f < s - h || l > r + h && l > e + h && l > n + h && l > o + h || l < r - h && l < e - h && l < n - h && l < o - h)
    return !1;
  var c = sh(r, t, e, i, n, a, o, s, l, f, null);
  return c <= h / 2;
}
function fg(r, t, e, i, n, a, o, s, u) {
  if (o === 0)
    return !1;
  var l = o;
  if (u > t + l && u > i + l && u > a + l || u < t - l && u < i - l && u < a - l || s > r + l && s > e + l && s > n + l || s < r - l && s < e - l && s < n - l)
    return !1;
  var f = lh(r, t, e, i, n, a, s, u, null);
  return f <= l / 2;
}
var Qu = Math.PI * 2;
function De(r) {
  return r %= Qu, r < 0 && (r += Qu), r;
}
var ci = Math.PI * 2;
function hg(r, t, e, i, n, a, o, s, u) {
  if (o === 0)
    return !1;
  var l = o;
  s -= r, u -= t;
  var f = Math.sqrt(s * s + u * u);
  if (f - l > e || f + l < e)
    return !1;
  if (Math.abs(i - n) % ci < 1e-4)
    return !0;
  if (a) {
    var h = i;
    i = De(n), n = De(h);
  } else
    i = De(i), n = De(n);
  i > n && (n += ci);
  var c = Math.atan2(u, s);
  return c < 0 && (c += ci), c >= i && c <= n || c + ci >= i && c + ci <= n;
}
function Qe(r, t, e, i, n, a) {
  if (a > t && a > i || a < t && a < i || i === t)
    return 0;
  var o = (a - t) / (i - t), s = i < t ? 1 : -1;
  (o === 1 || o === 0) && (s = i < t ? 0.5 : -0.5);
  var u = o * (e - r) + r;
  return u === n ? 1 / 0 : u > n ? s : 0;
}
var Pe = yr.CMD, Je = Math.PI * 2, vg = 1e-4;
function cg(r, t) {
  return Math.abs(r - t) < vg;
}
var bt = [-1, -1, -1], Kt = [-1, -1];
function dg() {
  var r = Kt[0];
  Kt[0] = Kt[1], Kt[1] = r;
}
function pg(r, t, e, i, n, a, o, s, u, l) {
  if (l > t && l > i && l > a && l > s || l < t && l < i && l < a && l < s)
    return 0;
  var f = ah(t, i, a, s, l, bt);
  if (f === 0)
    return 0;
  for (var h = 0, c = -1, v = void 0, d = void 0, _ = 0; _ < f; _++) {
    var p = bt[_], g = p === 0 || p === 1 ? 0.5 : 1, y = Ct(r, e, n, o, p);
    y < u || (c < 0 && (c = oh(t, i, a, s, Kt), Kt[1] < Kt[0] && c > 1 && dg(), v = Ct(t, i, a, s, Kt[0]), c > 1 && (d = Ct(t, i, a, s, Kt[1]))), c === 2 ? p < Kt[0] ? h += v < t ? g : -g : p < Kt[1] ? h += d < v ? g : -g : h += s < d ? g : -g : p < Kt[0] ? h += v < t ? g : -g : h += s < v ? g : -g);
  }
  return h;
}
function gg(r, t, e, i, n, a, o, s) {
  if (s > t && s > i && s > a || s < t && s < i && s < a)
    return 0;
  var u = bd(t, i, a, s, bt);
  if (u === 0)
    return 0;
  var l = uh(t, i, a);
  if (l >= 0 && l <= 1) {
    for (var f = 0, h = Rt(t, i, a, l), c = 0; c < u; c++) {
      var v = bt[c] === 0 || bt[c] === 1 ? 0.5 : 1, d = Rt(r, e, n, bt[c]);
      d < o || (bt[c] < l ? f += h < t ? v : -v : f += a < h ? v : -v);
    }
    return f;
  } else {
    var v = bt[0] === 0 || bt[0] === 1 ? 0.5 : 1, d = Rt(r, e, n, bt[0]);
    return d < o ? 0 : a < t ? v : -v;
  }
}
function _g(r, t, e, i, n, a, o, s) {
  if (s -= t, s > e || s < -e)
    return 0;
  var u = Math.sqrt(e * e - s * s);
  bt[0] = -u, bt[1] = u;
  var l = Math.abs(i - n);
  if (l < 1e-4)
    return 0;
  if (l >= Je - 1e-4) {
    i = 0, n = Je;
    var f = a ? 1 : -1;
    return o >= bt[0] + r && o <= bt[1] + r ? f : 0;
  }
  if (i > n) {
    var h = i;
    i = n, n = h;
  }
  i < 0 && (i += Je, n += Je);
  for (var c = 0, v = 0; v < 2; v++) {
    var d = bt[v];
    if (d + r > o) {
      var _ = Math.atan2(s, d), f = a ? 1 : -1;
      _ < 0 && (_ = Je + _), (_ >= i && _ <= n || _ + Je >= i && _ + Je <= n) && (_ > Math.PI / 2 && _ < Math.PI * 1.5 && (f = -f), c += f);
    }
  }
  return c;
}
function Nh(r, t, e, i, n) {
  for (var a = r.data, o = r.len(), s = 0, u = 0, l = 0, f = 0, h = 0, c, v, d = 0; d < o; ) {
    var _ = a[d++], p = d === 1;
    switch (_ === Pe.M && d > 1 && (e || (s += Qe(u, l, f, h, i, n))), p && (u = a[d], l = a[d + 1], f = u, h = l), _) {
      case Pe.M:
        f = a[d++], h = a[d++], u = f, l = h;
        break;
      case Pe.L:
        if (e) {
          if (br(u, l, a[d], a[d + 1], t, i, n))
            return !0;
        } else
          s += Qe(u, l, a[d], a[d + 1], i, n) || 0;
        u = a[d++], l = a[d++];
        break;
      case Pe.C:
        if (e) {
          if (lg(u, l, a[d++], a[d++], a[d++], a[d++], a[d], a[d + 1], t, i, n))
            return !0;
        } else
          s += pg(u, l, a[d++], a[d++], a[d++], a[d++], a[d], a[d + 1], i, n) || 0;
        u = a[d++], l = a[d++];
        break;
      case Pe.Q:
        if (e) {
          if (fg(u, l, a[d++], a[d++], a[d], a[d + 1], t, i, n))
            return !0;
        } else
          s += gg(u, l, a[d++], a[d++], a[d], a[d + 1], i, n) || 0;
        u = a[d++], l = a[d++];
        break;
      case Pe.A:
        var g = a[d++], y = a[d++], m = a[d++], w = a[d++], T = a[d++], S = a[d++];
        d += 1;
        var D = !!(1 - a[d++]);
        c = Math.cos(T) * m + g, v = Math.sin(T) * w + y, p ? (f = c, h = v) : s += Qe(u, l, c, v, i, n);
        var C = (i - g) * w / m + g;
        if (e) {
          if (hg(g, y, w, T, T + S, D, t, C, n))
            return !0;
        } else
          s += _g(g, y, w, T, T + S, D, C, n);
        u = Math.cos(T + S) * m + g, l = Math.sin(T + S) * w + y;
        break;
      case Pe.R:
        f = u = a[d++], h = l = a[d++];
        var b = a[d++], M = a[d++];
        if (c = f + b, v = h + M, e) {
          if (br(f, h, c, h, t, i, n) || br(c, h, c, v, t, i, n) || br(c, v, f, v, t, i, n) || br(f, v, f, h, t, i, n))
            return !0;
        } else
          s += Qe(c, h, c, v, i, n), s += Qe(f, v, f, h, i, n);
        break;
      case Pe.Z:
        if (e) {
          if (br(u, l, f, h, t, i, n))
            return !0;
        } else
          s += Qe(u, l, f, h, i, n);
        u = f, l = h;
        break;
    }
  }
  return !e && !cg(l, h) && (s += Qe(u, l, f, h, i, n) || 0), s !== 0;
}
function yg(r, t, e) {
  return Nh(r, 0, !1, t, e);
}
function mg(r, t, e, i) {
  return Nh(r, t, !0, e, i);
}
var Bh = Lt({
  fill: "#000",
  stroke: null,
  strokePercent: 1,
  fillOpacity: 1,
  strokeOpacity: 1,
  lineDashOffset: 0,
  lineWidth: 1,
  lineCap: "butt",
  miterLimit: 10,
  strokeNoScale: !1,
  strokeFirst: !1
}, dr), wg = {
  style: Lt({
    fill: !0,
    stroke: !0,
    strokePercent: !0,
    fillOpacity: !0,
    strokeOpacity: !0,
    lineDashOffset: !0,
    lineWidth: !0,
    miterLimit: !0
  }, _a.style)
}, ao = Ui.concat([
  "invisible",
  "culling",
  "z",
  "z2",
  "zlevel",
  "parent"
]), Sg = function(r) {
  j(t, r);
  function t(e) {
    return r.call(this, e) || this;
  }
  return t.prototype.update = function() {
    var e = this;
    r.prototype.update.call(this);
    var i = this.style;
    if (i.decal) {
      var n = this._decalEl = this._decalEl || new t();
      n.buildPath === t.prototype.buildPath && (n.buildPath = function(u) {
        e.buildPath(u, e.shape);
      }), n.silent = !0;
      var a = n.style;
      for (var o in i)
        a[o] !== i[o] && (a[o] = i[o]);
      a.fill = i.fill ? i.decal : null, a.decal = null, a.shadowColor = null, i.strokeFirst && (a.stroke = null);
      for (var s = 0; s < ao.length; ++s)
        n[ao[s]] = this[ao[s]];
      n.__dirty |= Ut;
    } else
      this._decalEl && (this._decalEl = null);
  }, t.prototype.getDecalElement = function() {
    return this._decalEl;
  }, t.prototype._init = function(e) {
    var i = lt(e);
    this.shape = this.getDefaultShape();
    var n = this.getDefaultStyle();
    n && this.useStyle(n);
    for (var a = 0; a < i.length; a++) {
      var o = i[a], s = e[o];
      o === "style" ? this.style ? N(this.style, s) : this.useStyle(s) : o === "shape" ? N(this.shape, s) : r.prototype.attrKV.call(this, o, s);
    }
    this.style || this.useStyle({});
  }, t.prototype.getDefaultStyle = function() {
    return null;
  }, t.prototype.getDefaultShape = function() {
    return {};
  }, t.prototype.canBeInsideText = function() {
    return this.hasFill();
  }, t.prototype.getInsideTextFill = function() {
    var e = this.style.fill;
    if (e !== "none") {
      if (Z(e)) {
        var i = Wn(e, 0);
        return i > 0.5 ? Zo : i > 0.2 ? Kd : Ko;
      } else if (e)
        return Ko;
    }
    return Zo;
  }, t.prototype.getInsideTextStroke = function(e) {
    var i = this.style.fill;
    if (Z(i)) {
      var n = this.__zr, a = !!(n && n.isDarkMode()), o = Wn(e, 0) < qo;
      if (a === o)
        return i;
    }
  }, t.prototype.buildPath = function(e, i, n) {
  }, t.prototype.pathUpdated = function() {
    this.__dirty &= ~Ar;
  }, t.prototype.getUpdatedPathProxy = function(e) {
    return !this.path && this.createPathProxy(), this.path.beginPath(), this.buildPath(this.path, this.shape, e), this.path;
  }, t.prototype.createPathProxy = function() {
    this.path = new yr(!1);
  }, t.prototype.hasStroke = function() {
    var e = this.style, i = e.stroke;
    return !(i == null || i === "none" || !(e.lineWidth > 0));
  }, t.prototype.hasFill = function() {
    var e = this.style, i = e.fill;
    return i != null && i !== "none";
  }, t.prototype.getBoundingRect = function() {
    var e = this._rect, i = this.style, n = !e;
    if (n) {
      var a = !1;
      this.path || (a = !0, this.createPathProxy());
      var o = this.path;
      (a || this.__dirty & Ar) && (o.beginPath(), this.buildPath(o, this.shape, !1), this.pathUpdated()), e = o.getBoundingRect();
    }
    if (this._rect = e, this.hasStroke() && this.path && this.path.len() > 0) {
      var s = this._rectStroke || (this._rectStroke = e.clone());
      if (this.__dirty || n) {
        s.copy(e);
        var u = i.strokeNoScale ? this.getLineScale() : 1, l = i.lineWidth;
        if (!this.hasFill()) {
          var f = this.strokeContainThreshold;
          l = Math.max(l, f ?? 4);
        }
        u > 1e-10 && (s.width += l / u, s.height += l / u, s.x -= l / u / 2, s.y -= l / u / 2);
      }
      return s;
    }
    return e;
  }, t.prototype.contain = function(e, i) {
    var n = this.transformCoordToLocal(e, i), a = this.getBoundingRect(), o = this.style;
    if (e = n[0], i = n[1], a.contain(e, i)) {
      var s = this.path;
      if (this.hasStroke()) {
        var u = o.lineWidth, l = o.strokeNoScale ? this.getLineScale() : 1;
        if (l > 1e-10 && (this.hasFill() || (u = Math.max(u, this.strokeContainThreshold)), mg(s, u / l, e, i)))
          return !0;
      }
      if (this.hasFill())
        return yg(s, e, i);
    }
    return !1;
  }, t.prototype.dirtyShape = function() {
    this.__dirty |= Ar, this._rect && (this._rect = null), this._decalEl && this._decalEl.dirtyShape(), this.markRedraw();
  }, t.prototype.dirty = function() {
    this.dirtyStyle(), this.dirtyShape();
  }, t.prototype.animateShape = function(e) {
    return this.animate("shape", e);
  }, t.prototype.updateDuringAnimation = function(e) {
    e === "style" ? this.dirtyStyle() : e === "shape" ? this.dirtyShape() : this.markRedraw();
  }, t.prototype.attrKV = function(e, i) {
    e === "shape" ? this.setShape(i) : r.prototype.attrKV.call(this, e, i);
  }, t.prototype.setShape = function(e, i) {
    var n = this.shape;
    return n || (n = this.shape = {}), typeof e == "string" ? n[e] = i : N(n, e), this.dirtyShape(), this;
  }, t.prototype.shapeChanged = function() {
    return !!(this.__dirty & Ar);
  }, t.prototype.createStyle = function(e) {
    return ha(Bh, e);
  }, t.prototype._innerSaveToNormal = function(e) {
    r.prototype._innerSaveToNormal.call(this, e);
    var i = this._normalState;
    e.shape && !i.shape && (i.shape = N({}, this.shape));
  }, t.prototype._applyStateObj = function(e, i, n, a, o, s) {
    r.prototype._applyStateObj.call(this, e, i, n, a, o, s);
    var u = !(i && a), l;
    if (i && i.shape ? o ? a ? l = i.shape : (l = N({}, n.shape), N(l, i.shape)) : (l = N({}, a ? this.shape : n.shape), N(l, i.shape)) : u && (l = n.shape), l)
      if (o) {
        this.shape = N({}, this.shape);
        for (var f = {}, h = lt(l), c = 0; c < h.length; c++) {
          var v = h[c];
          typeof l[v] == "object" ? this.shape[v] = l[v] : f[v] = l[v];
        }
        this._transitionState(e, {
          shape: f
        }, s);
      } else
        this.shape = l, this.dirtyShape();
  }, t.prototype._mergeStates = function(e) {
    for (var i = r.prototype._mergeStates.call(this, e), n, a = 0; a < e.length; a++) {
      var o = e[a];
      o.shape && (n = n || {}, this._mergeStyle(n, o.shape));
    }
    return n && (i.shape = n), i;
  }, t.prototype.getAnimationStyleProps = function() {
    return wg;
  }, t.prototype.isZeroArea = function() {
    return !1;
  }, t.extend = function(e) {
    var i = function(a) {
      j(o, a);
      function o(s) {
        var u = a.call(this, s) || this;
        return e.init && e.init.call(u, s), u;
      }
      return o.prototype.getDefaultStyle = function() {
        return K(e.style);
      }, o.prototype.getDefaultShape = function() {
        return K(e.shape);
      }, o;
    }(t);
    for (var n in e)
      typeof e[n] == "function" && (i.prototype[n] = e[n]);
    return i;
  }, t.initDefaultProps = function() {
    var e = t.prototype;
    e.type = "path", e.strokeContainThreshold = 5, e.segmentIgnoreThreshold = 0, e.subPixelOptimize = !1, e.autoBatch = !1, e.__dirty = Ut | Li | Ar;
  }(), t;
}(ya);
const ht = Sg;
var Tg = Lt({
  strokeFirst: !0,
  font: _r,
  x: 0,
  y: 0,
  textAlign: "left",
  textBaseline: "top",
  miterLimit: 2
}, Bh), kh = function(r) {
  j(t, r);
  function t() {
    return r !== null && r.apply(this, arguments) || this;
  }
  return t.prototype.hasStroke = function() {
    var e = this.style, i = e.stroke;
    return i != null && i !== "none" && e.lineWidth > 0;
  }, t.prototype.hasFill = function() {
    var e = this.style, i = e.fill;
    return i != null && i !== "none";
  }, t.prototype.createStyle = function(e) {
    return ha(Tg, e);
  }, t.prototype.setBoundingRect = function(e) {
    this._rect = e;
  }, t.prototype.getBoundingRect = function() {
    var e = this.style;
    if (!this._rect) {
      var i = e.text;
      i != null ? i += "" : i = "";
      var n = jd(i, e.font, e.textAlign, e.textBaseline);
      if (n.x += e.x || 0, n.y += e.y || 0, this.hasStroke()) {
        var a = e.lineWidth;
        n.x -= a / 2, n.y -= a / 2, n.width += a, n.height += a;
      }
      this._rect = n;
    }
    return this._rect;
  }, t.initDefaultProps = function() {
    var e = t.prototype;
    e.dirtyRectTolerance = 10;
  }(), t;
}(ya);
kh.prototype.type = "tspan";
const is = kh;
var Dg = Lt({
  x: 0,
  y: 0
}, dr), Cg = {
  style: Lt({
    x: !0,
    y: !0,
    width: !0,
    height: !0,
    sx: !0,
    sy: !0,
    sWidth: !0,
    sHeight: !0
  }, _a.style)
};
function bg(r) {
  return !!(r && typeof r != "string" && r.width && r.height);
}
var Fh = function(r) {
  j(t, r);
  function t() {
    return r !== null && r.apply(this, arguments) || this;
  }
  return t.prototype.createStyle = function(e) {
    return ha(Dg, e);
  }, t.prototype._getSize = function(e) {
    var i = this.style, n = i[e];
    if (n != null)
      return n;
    var a = bg(i.image) ? i.image : this.__image;
    if (!a)
      return 0;
    var o = e === "width" ? "height" : "width", s = i[o];
    return s == null ? a[e] : a[e] / a[o] * s;
  }, t.prototype.getWidth = function() {
    return this._getSize("width");
  }, t.prototype.getHeight = function() {
    return this._getSize("height");
  }, t.prototype.getAnimationStyleProps = function() {
    return Cg;
  }, t.prototype.getBoundingRect = function() {
    var e = this.style;
    return this._rect || (this._rect = new et(e.x || 0, e.y || 0, this.getWidth(), this.getHeight())), this._rect;
  }, t;
}(ya);
Fh.prototype.type = "image";
const ma = Fh;
function Eg(r, t) {
  var e = t.x, i = t.y, n = t.width, a = t.height, o = t.r, s, u, l, f;
  n < 0 && (e = e + n, n = -n), a < 0 && (i = i + a, a = -a), typeof o == "number" ? s = u = l = f = o : o instanceof Array ? o.length === 1 ? s = u = l = f = o[0] : o.length === 2 ? (s = l = o[0], u = f = o[1]) : o.length === 3 ? (s = o[0], u = f = o[1], l = o[2]) : (s = o[0], u = o[1], l = o[2], f = o[3]) : s = u = l = f = 0;
  var h;
  s + u > n && (h = s + u, s *= n / h, u *= n / h), l + f > n && (h = l + f, l *= n / h, f *= n / h), u + l > a && (h = u + l, u *= a / h, l *= a / h), s + f > a && (h = s + f, s *= a / h, f *= a / h), r.moveTo(e + s, i), r.lineTo(e + n - u, i), u !== 0 && r.arc(e + n - u, i + u, u, -Math.PI / 2, 0), r.lineTo(e + n, i + a - l), l !== 0 && r.arc(e + n - l, i + a - l, l, 0, Math.PI / 2), r.lineTo(e + f, i + a), f !== 0 && r.arc(e + f, i + a - f, f, Math.PI / 2, Math.PI), r.lineTo(e, i + s), s !== 0 && r.arc(e + s, i + s, s, Math.PI, Math.PI * 1.5);
}
var Vr = Math.round;
function Mg(r, t, e) {
  if (t) {
    var i = t.x1, n = t.x2, a = t.y1, o = t.y2;
    r.x1 = i, r.x2 = n, r.y1 = a, r.y2 = o;
    var s = e && e.lineWidth;
    return s && (Vr(i * 2) === Vr(n * 2) && (r.x1 = r.x2 = zr(i, s, !0)), Vr(a * 2) === Vr(o * 2) && (r.y1 = r.y2 = zr(a, s, !0))), r;
  }
}
function Lg(r, t, e) {
  if (t) {
    var i = t.x, n = t.y, a = t.width, o = t.height;
    r.x = i, r.y = n, r.width = a, r.height = o;
    var s = e && e.lineWidth;
    return s && (r.x = zr(i, s, !0), r.y = zr(n, s, !0), r.width = Math.max(zr(i + a, s, !1) - r.x, a === 0 ? 0 : 1), r.height = Math.max(zr(n + o, s, !1) - r.y, o === 0 ? 0 : 1)), r;
  }
}
function zr(r, t, e) {
  if (!t)
    return r;
  var i = Vr(r * 2);
  return (i + Vr(t)) % 2 === 0 ? i / 2 : (i + (e ? 1 : -1)) / 2;
}
var xg = function() {
  function r() {
    this.x = 0, this.y = 0, this.width = 0, this.height = 0;
  }
  return r;
}(), Pg = {}, Vh = function(r) {
  j(t, r);
  function t(e) {
    return r.call(this, e) || this;
  }
  return t.prototype.getDefaultShape = function() {
    return new xg();
  }, t.prototype.buildPath = function(e, i) {
    var n, a, o, s;
    if (this.subPixelOptimize) {
      var u = Lg(Pg, i, this.style);
      n = u.x, a = u.y, o = u.width, s = u.height, u.r = i.r, i = u;
    } else
      n = i.x, a = i.y, o = i.width, s = i.height;
    i.r ? Eg(e, i) : e.rect(n, a, o, s);
  }, t.prototype.isZeroArea = function() {
    return !this.shape.width || !this.shape.height;
  }, t;
}(ht);
Vh.prototype.type = "rect";
const Ce = Vh;
var Ju = {
  fill: "#000"
}, ju = 2, Rg = {
  style: Lt({
    fill: !0,
    stroke: !0,
    fillOpacity: !0,
    strokeOpacity: !0,
    lineWidth: !0,
    fontSize: !0,
    lineHeight: !0,
    width: !0,
    height: !0,
    textShadowColor: !0,
    textShadowBlur: !0,
    textShadowOffsetX: !0,
    textShadowOffsetY: !0,
    backgroundColor: !0,
    padding: !0,
    borderColor: !0,
    borderWidth: !0,
    borderRadius: !0
  }, _a.style)
}, zh = function(r) {
  j(t, r);
  function t(e) {
    var i = r.call(this) || this;
    return i.type = "text", i._children = [], i._defaultStyle = Ju, i.attr(e), i;
  }
  return t.prototype.childrenRef = function() {
    return this._children;
  }, t.prototype.update = function() {
    r.prototype.update.call(this), this.styleChanged() && this._updateSubTexts();
    for (var e = 0; e < this._children.length; e++) {
      var i = this._children[e];
      i.zlevel = this.zlevel, i.z = this.z, i.z2 = this.z2, i.culling = this.culling, i.cursor = this.cursor, i.invisible = this.invisible;
    }
  }, t.prototype.updateTransform = function() {
    var e = this.innerTransformable;
    e ? (e.updateTransform(), e.transform && (this.transform = e.transform)) : r.prototype.updateTransform.call(this);
  }, t.prototype.getLocalTransform = function(e) {
    var i = this.innerTransformable;
    return i ? i.getLocalTransform(e) : r.prototype.getLocalTransform.call(this, e);
  }, t.prototype.getComputedTransform = function() {
    return this.__hostTarget && (this.__hostTarget.getComputedTransform(), this.__hostTarget.updateInnerText(!0)), r.prototype.getComputedTransform.call(this);
  }, t.prototype._updateSubTexts = function() {
    this._childCursor = 0, Bg(this.style), this.style.rich ? this._updateRichTexts() : this._updatePlainTexts(), this._children.length = this._childCursor, this.styleUpdated();
  }, t.prototype.addSelfToZr = function(e) {
    r.prototype.addSelfToZr.call(this, e);
    for (var i = 0; i < this._children.length; i++)
      this._children[i].__zr = e;
  }, t.prototype.removeSelfFromZr = function(e) {
    r.prototype.removeSelfFromZr.call(this, e);
    for (var i = 0; i < this._children.length; i++)
      this._children[i].__zr = null;
  }, t.prototype.getBoundingRect = function() {
    if (this.styleChanged() && this._updateSubTexts(), !this._rect) {
      for (var e = new et(0, 0, 0, 0), i = this._children, n = [], a = null, o = 0; o < i.length; o++) {
        var s = i[o], u = s.getBoundingRect(), l = s.getLocalTransform(n);
        l ? (e.copy(u), e.applyTransform(l), a = a || e.clone(), a.union(e)) : (a = a || u.clone(), a.union(u));
      }
      this._rect = a || e;
    }
    return this._rect;
  }, t.prototype.setDefaultTextStyle = function(e) {
    this._defaultStyle = e || Ju;
  }, t.prototype.setTextContent = function(e) {
    if (process.env.NODE_ENV !== "production")
      throw new Error("Can't attach text on another text");
  }, t.prototype._mergeStyle = function(e, i) {
    if (!i)
      return e;
    var n = i.rich, a = e.rich || n && {};
    return N(e, i), n && a ? (this._mergeRich(a, n), e.rich = a) : a && (e.rich = a), e;
  }, t.prototype._mergeRich = function(e, i) {
    for (var n = lt(i), a = 0; a < n.length; a++) {
      var o = n[a];
      e[o] = e[o] || {}, N(e[o], i[o]);
    }
  }, t.prototype.getAnimationStyleProps = function() {
    return Rg;
  }, t.prototype._getOrCreateChild = function(e) {
    var i = this._children[this._childCursor];
    return (!i || !(i instanceof e)) && (i = new e()), this._children[this._childCursor++] = i, i.__zr = this.__zr, i.parent = this, i;
  }, t.prototype._updatePlainTexts = function() {
    var e = this.style, i = e.font || _r, n = e.padding, a = ol(e), o = qp(a, e), s = oo(e), u = !!e.backgroundColor, l = o.outerHeight, f = o.outerWidth, h = o.contentWidth, c = o.lines, v = o.lineHeight, d = this._defaultStyle, _ = e.x || 0, p = e.y || 0, g = e.align || d.align || "left", y = e.verticalAlign || d.verticalAlign || "top", m = _, w = Or(p, o.contentHeight, y);
    if (s || n) {
      var T = Pi(_, f, g), S = Or(p, l, y);
      s && this._renderBackground(e, e, T, S, f, l);
    }
    w += v / 2, n && (m = al(_, g, n), y === "top" ? w += n[0] : y === "bottom" && (w -= n[2]));
    for (var D = 0, C = !1, b = nl("fill" in e ? e.fill : (C = !0, d.fill)), M = il("stroke" in e ? e.stroke : !u && (!d.autoStroke || C) ? (D = ju, d.stroke) : null), E = e.textShadowBlur > 0, P = e.width != null && (e.overflow === "truncate" || e.overflow === "break" || e.overflow === "breakAll"), x = o.calculatedLineHeight, R = 0; R < c.length; R++) {
      var O = this._getOrCreateChild(is), I = O.createStyle();
      O.useStyle(I), I.text = c[R], I.x = m, I.y = w, g && (I.textAlign = g), I.textBaseline = "middle", I.opacity = e.opacity, I.strokeFirst = !0, E && (I.shadowBlur = e.textShadowBlur || 0, I.shadowColor = e.textShadowColor || "transparent", I.shadowOffsetX = e.textShadowOffsetX || 0, I.shadowOffsetY = e.textShadowOffsetY || 0), I.stroke = M, I.fill = b, M && (I.lineWidth = e.lineWidth || D, I.lineDash = e.lineDash, I.lineDashOffset = e.lineDashOffset || 0), I.font = i, el(I, e), w += v, P && O.setBoundingRect(new et(Pi(I.x, e.width, I.textAlign), Or(I.y, x, I.textBaseline), h, x));
    }
  }, t.prototype._updateRichTexts = function() {
    var e = this.style, i = ol(e), n = Qp(i, e), a = n.width, o = n.outerWidth, s = n.outerHeight, u = e.padding, l = e.x || 0, f = e.y || 0, h = this._defaultStyle, c = e.align || h.align, v = e.verticalAlign || h.verticalAlign, d = Pi(l, o, c), _ = Or(f, s, v), p = d, g = _;
    u && (p += u[3], g += u[0]);
    var y = p + a;
    oo(e) && this._renderBackground(e, e, d, _, o, s);
    for (var m = !!e.backgroundColor, w = 0; w < n.lines.length; w++) {
      for (var T = n.lines[w], S = T.tokens, D = S.length, C = T.lineHeight, b = T.width, M = 0, E = p, P = y, x = D - 1, R = void 0; M < D && (R = S[M], !R.align || R.align === "left"); )
        this._placeToken(R, e, C, g, E, "left", m), b -= R.width, E += R.width, M++;
      for (; x >= 0 && (R = S[x], R.align === "right"); )
        this._placeToken(R, e, C, g, P, "right", m), b -= R.width, P -= R.width, x--;
      for (E += (a - (E - p) - (y - P) - b) / 2; M <= x; )
        R = S[M], this._placeToken(R, e, C, g, E + R.width / 2, "center", m), E += R.width, M++;
      g += C;
    }
  }, t.prototype._placeToken = function(e, i, n, a, o, s, u) {
    var l = i.rich[e.styleName] || {};
    l.text = e.text;
    var f = e.verticalAlign, h = a + n / 2;
    f === "top" ? h = a + e.height / 2 : f === "bottom" && (h = a + n - e.height / 2);
    var c = !e.isLineHolder && oo(l);
    c && this._renderBackground(l, i, s === "right" ? o - e.width : s === "center" ? o - e.width / 2 : o, h - e.height / 2, e.width, e.height);
    var v = !!l.backgroundColor, d = e.textPadding;
    d && (o = al(o, s, d), h -= e.height / 2 - d[0] - e.innerHeight / 2);
    var _ = this._getOrCreateChild(is), p = _.createStyle();
    _.useStyle(p);
    var g = this._defaultStyle, y = !1, m = 0, w = nl("fill" in l ? l.fill : "fill" in i ? i.fill : (y = !0, g.fill)), T = il("stroke" in l ? l.stroke : "stroke" in i ? i.stroke : !v && !u && (!g.autoStroke || y) ? (m = ju, g.stroke) : null), S = l.textShadowBlur > 0 || i.textShadowBlur > 0;
    p.text = e.text, p.x = o, p.y = h, S && (p.shadowBlur = l.textShadowBlur || i.textShadowBlur || 0, p.shadowColor = l.textShadowColor || i.textShadowColor || "transparent", p.shadowOffsetX = l.textShadowOffsetX || i.textShadowOffsetX || 0, p.shadowOffsetY = l.textShadowOffsetY || i.textShadowOffsetY || 0), p.textAlign = s, p.textBaseline = "middle", p.font = e.font || _r, p.opacity = Mn(l.opacity, i.opacity, 1), el(p, l), T && (p.lineWidth = Mn(l.lineWidth, i.lineWidth, m), p.lineDash = W(l.lineDash, i.lineDash), p.lineDashOffset = i.lineDashOffset || 0, p.stroke = T), w && (p.fill = w);
    var D = e.contentWidth, C = e.contentHeight;
    _.setBoundingRect(new et(Pi(p.x, D, p.textAlign), Or(p.y, C, p.textBaseline), D, C));
  }, t.prototype._renderBackground = function(e, i, n, a, o, s) {
    var u = e.backgroundColor, l = e.borderWidth, f = e.borderColor, h = u && u.image, c = u && !h, v = e.borderRadius, d = this, _, p;
    if (c || e.lineHeight || l && f) {
      _ = this._getOrCreateChild(Ce), _.useStyle(_.createStyle()), _.style.fill = null;
      var g = _.shape;
      g.x = n, g.y = a, g.width = o, g.height = s, g.r = v, _.dirtyShape();
    }
    if (c) {
      var y = _.style;
      y.fill = u || null, y.fillOpacity = W(e.fillOpacity, 1);
    } else if (h) {
      p = this._getOrCreateChild(ma), p.onload = function() {
        d.dirtyStyle();
      };
      var m = p.style;
      m.image = u.image, m.x = n, m.y = a, m.width = o, m.height = s;
    }
    if (l && f) {
      var y = _.style;
      y.lineWidth = l, y.stroke = f, y.strokeOpacity = W(e.strokeOpacity, 1), y.lineDash = e.borderDash, y.lineDashOffset = e.borderDashOffset || 0, _.strokeContainThreshold = 0, _.hasFill() && _.hasStroke() && (y.strokeFirst = !0, y.lineWidth *= 2);
    }
    var w = (_ || p).style;
    w.shadowBlur = e.shadowBlur || 0, w.shadowColor = e.shadowColor || "transparent", w.shadowOffsetX = e.shadowOffsetX || 0, w.shadowOffsetY = e.shadowOffsetY || 0, w.opacity = Mn(e.opacity, i.opacity, 1);
  }, t.makeFont = function(e) {
    var i = "";
    return Ng(e) && (i = [
      e.fontStyle,
      e.fontWeight,
      Og(e.fontSize),
      e.fontFamily || "sans-serif"
    ].join(" ")), i && Ne(i) || e.textFont || e.font;
  }, t;
}(ya), Ig = { left: !0, right: 1, center: 1 }, Ag = { top: 1, bottom: 1, middle: 1 }, tl = ["fontStyle", "fontWeight", "fontSize", "fontFamily"];
function Og(r) {
  return typeof r == "string" && (r.indexOf("px") !== -1 || r.indexOf("rem") !== -1 || r.indexOf("em") !== -1) ? r : isNaN(+r) ? Ls + "px" : r + "px";
}
function el(r, t) {
  for (var e = 0; e < tl.length; e++) {
    var i = tl[e], n = t[i];
    n != null && (r[i] = n);
  }
}
function Ng(r) {
  return r.fontSize != null || r.fontFamily || r.fontWeight;
}
function Bg(r) {
  return rl(r), L(r.rich, rl), r;
}
function rl(r) {
  if (r) {
    r.font = zh.makeFont(r);
    var t = r.align;
    t === "middle" && (t = "center"), r.align = t == null || Ig[t] ? t : "left";
    var e = r.verticalAlign;
    e === "center" && (e = "middle"), r.verticalAlign = e == null || Ag[e] ? e : "top";
    var i = r.padding;
    i && (r.padding = Oc(r.padding));
  }
}
function il(r, t) {
  return r == null || t <= 0 || r === "transparent" || r === "none" ? null : r.image || r.colorStops ? "#000" : r;
}
function nl(r) {
  return r == null || r === "none" ? null : r.image || r.colorStops ? "#000" : r;
}
function al(r, t, e) {
  return t === "right" ? r - e[1] : t === "center" ? r + e[3] / 2 - e[1] / 2 : r + e[3];
}
function ol(r) {
  var t = r.text;
  return t != null && (t += ""), t;
}
function oo(r) {
  return !!(r.backgroundColor || r.lineHeight || r.borderWidth && r.borderColor);
}
const Xn = zh;
var Gt = _t(), kg = function(r, t, e, i) {
  if (i) {
    var n = Gt(i);
    n.dataIndex = e, n.dataType = t, n.seriesIndex = r, i.type === "group" && i.traverse(function(a) {
      var o = Gt(a);
      o.seriesIndex = r, o.dataIndex = e, o.dataType = t;
    });
  }
}, sl = 1, ul = {}, Hh = _t(), Hs = _t(), Uh = 0, Us = 1, Ys = 2, qr = ["emphasis", "blur", "select"], ll = ["normal", "emphasis", "blur", "select"], Fg = 10, Vg = 9, pr = "highlight", On = "downplay", Vi = "select", Nn = "unselect", zi = "toggleSelect";
function Er(r) {
  return r != null && r !== "none";
}
var fl = new qi(100);
function hl(r) {
  if (Z(r)) {
    var t = fl.get(r);
    return t || (t = Eu(r, -0.1), fl.put(r, t)), t;
  } else if (fa(r)) {
    var e = N({}, r);
    return e.colorStops = it(r.colorStops, function(i) {
      return {
        offset: i.offset,
        color: Eu(i.color, -0.1)
      };
    }), e;
  }
  return r;
}
function wa(r, t, e) {
  r.onHoverStateChange && (r.hoverState || 0) !== e && r.onHoverStateChange(t), r.hoverState = e;
}
function Yh(r) {
  wa(r, "emphasis", Ys);
}
function Gh(r) {
  r.hoverState === Ys && wa(r, "normal", Uh);
}
function Gs(r) {
  wa(r, "blur", Us);
}
function Wh(r) {
  r.hoverState === Us && wa(r, "normal", Uh);
}
function zg(r) {
  r.selected = !0;
}
function Hg(r) {
  r.selected = !1;
}
function vl(r, t, e) {
  t(r, e);
}
function Me(r, t, e) {
  vl(r, t, e), r.isGroup && r.traverse(function(i) {
    vl(i, t, e);
  });
}
function Ug(r, t, e, i) {
  for (var n = r.style, a = {}, o = 0; o < t.length; o++) {
    var s = t[o], u = n[s];
    a[s] = u ?? (i && i[s]);
  }
  for (var o = 0; o < r.animators.length; o++) {
    var l = r.animators[o];
    l.__fromStateTransition && l.__fromStateTransition.indexOf(e) < 0 && l.targetName === "style" && l.saveTo(a, t);
  }
  return a;
}
function Yg(r, t, e, i) {
  var n = e && nt(e, "select") >= 0, a = !1;
  if (r instanceof ht) {
    var o = Hh(r), s = n && o.selectFill || o.normalFill, u = n && o.selectStroke || o.normalStroke;
    if (Er(s) || Er(u)) {
      i = i || {};
      var l = i.style || {};
      l.fill === "inherit" ? (a = !0, i = N({}, i), l = N({}, l), l.fill = s) : !Er(l.fill) && Er(s) ? (a = !0, i = N({}, i), l = N({}, l), l.fill = hl(s)) : !Er(l.stroke) && Er(u) && (a || (i = N({}, i), l = N({}, l)), l.stroke = hl(u)), i.style = l;
    }
  }
  if (i && i.z2 == null) {
    a || (i = N({}, i));
    var f = r.z2EmphasisLift;
    i.z2 = r.z2 + (f ?? Fg);
  }
  return i;
}
function Gg(r, t, e) {
  if (e && e.z2 == null) {
    e = N({}, e);
    var i = r.z2SelectLift;
    e.z2 = r.z2 + (i ?? Vg);
  }
  return e;
}
function Wg(r, t, e) {
  var i = nt(r.currentStates, t) >= 0, n = r.style.opacity, a = i ? null : Ug(r, ["opacity"], t, {
    opacity: 1
  });
  e = e || {};
  var o = e.style || {};
  return o.opacity == null && (e = N({}, e), o = N({
    // Already being applied 'emphasis'. DON'T mul opacity multiple times.
    opacity: i ? n : a.opacity * 0.1
  }, o), e.style = o), e;
}
function so(r, t) {
  var e = this.states[r];
  if (this.style) {
    if (r === "emphasis")
      return Yg(this, r, t, e);
    if (r === "blur")
      return Wg(this, r, e);
    if (r === "select")
      return Gg(this, r, e);
  }
  return e;
}
function $g(r) {
  r.stateProxy = so;
  var t = r.getTextContent(), e = r.getTextGuideLine();
  t && (t.stateProxy = so), e && (e.stateProxy = so);
}
function cl(r, t) {
  !Zh(r, t) && !r.__highByOuter && Me(r, Yh);
}
function dl(r, t) {
  !Zh(r, t) && !r.__highByOuter && Me(r, Gh);
}
function ns(r, t) {
  r.__highByOuter |= 1 << (t || 0), Me(r, Yh);
}
function as(r, t) {
  !(r.__highByOuter &= ~(1 << (t || 0))) && Me(r, Gh);
}
function Xg(r) {
  Me(r, Gs);
}
function $h(r) {
  Me(r, Wh);
}
function Xh(r) {
  Me(r, zg);
}
function qh(r) {
  Me(r, Hg);
}
function Zh(r, t) {
  return r.__highDownSilentOnTouch && t.zrByTouch;
}
function Kh(r) {
  var t = r.getModel(), e = [], i = [];
  t.eachComponent(function(n, a) {
    var o = Hs(a), s = n === "series", u = s ? r.getViewOfSeriesModel(a) : r.getViewOfComponentModel(a);
    !s && i.push(u), o.isBlured && (u.group.traverse(function(l) {
      Wh(l);
    }), s && e.push(a)), o.isBlured = !1;
  }), L(i, function(n) {
    n && n.toggleBlurSeries && n.toggleBlurSeries(e, !1, t);
  });
}
function os(r, t, e, i) {
  var n = i.getModel();
  e = e || "coordinateSystem";
  function a(l, f) {
    for (var h = 0; h < f.length; h++) {
      var c = l.getItemGraphicEl(f[h]);
      c && $h(c);
    }
  }
  if (r != null && !(!t || t === "none")) {
    var o = n.getSeriesByIndex(r), s = o.coordinateSystem;
    s && s.master && (s = s.master);
    var u = [];
    n.eachSeries(function(l) {
      var f = o === l, h = l.coordinateSystem;
      h && h.master && (h = h.master);
      var c = h && s ? h === s : f;
      if (!// Not blur other series if blurScope series
      (e === "series" && !f || e === "coordinateSystem" && !c || t === "series" && f)) {
        var v = i.getViewOfSeriesModel(l);
        if (v.group.traverse(function(p) {
          p.__highByOuter && f && t === "self" || Gs(p);
        }), Wt(t))
          a(l.getData(), t);
        else if (F(t))
          for (var d = lt(t), _ = 0; _ < d.length; _++)
            a(l.getData(d[_]), t[d[_]]);
        u.push(l), Hs(l).isBlured = !0;
      }
    }), n.eachComponent(function(l, f) {
      if (l !== "series") {
        var h = i.getViewOfComponentModel(f);
        h && h.toggleBlurSeries && h.toggleBlurSeries(u, !0, n);
      }
    });
  }
}
function ss(r, t, e) {
  if (!(r == null || t == null)) {
    var i = e.getModel().getComponent(r, t);
    if (i) {
      Hs(i).isBlured = !0;
      var n = e.getViewOfComponentModel(i);
      !n || !n.focusBlurEnabled || n.group.traverse(function(a) {
        Gs(a);
      });
    }
  }
}
function qg(r, t, e) {
  var i = r.seriesIndex, n = r.getData(t.dataType);
  if (!n) {
    process.env.NODE_ENV !== "production" && wt("Unknown dataType " + t.dataType);
    return;
  }
  var a = da(n, t);
  a = (Y(a) ? a[0] : a) || 0;
  var o = n.getItemGraphicEl(a);
  if (!o)
    for (var s = n.count(), u = 0; !o && u < s; )
      o = n.getItemGraphicEl(u++);
  if (o) {
    var l = Gt(o);
    os(i, l.focus, l.blurScope, e);
  } else {
    var f = r.get(["emphasis", "focus"]), h = r.get(["emphasis", "blurScope"]);
    f != null && os(i, f, h, e);
  }
}
function Ws(r, t, e, i) {
  var n = {
    focusSelf: !1,
    dispatchers: null
  };
  if (r == null || r === "series" || t == null || e == null)
    return n;
  var a = i.getModel().getComponent(r, t);
  if (!a)
    return n;
  var o = i.getViewOfComponentModel(a);
  if (!o || !o.findHighDownDispatchers)
    return n;
  for (var s = o.findHighDownDispatchers(e), u, l = 0; l < s.length; l++)
    if (process.env.NODE_ENV !== "production" && !Zr(s[l]) && wt("param should be highDownDispatcher"), Gt(s[l]).focus === "self") {
      u = !0;
      break;
    }
  return {
    focusSelf: u,
    dispatchers: s
  };
}
function Zg(r, t, e) {
  process.env.NODE_ENV !== "production" && !Zr(r) && wt("param should be highDownDispatcher");
  var i = Gt(r), n = Ws(i.componentMainType, i.componentIndex, i.componentHighDownName, e), a = n.dispatchers, o = n.focusSelf;
  a ? (o && ss(i.componentMainType, i.componentIndex, e), L(a, function(s) {
    return cl(s, t);
  })) : (os(i.seriesIndex, i.focus, i.blurScope, e), i.focus === "self" && ss(i.componentMainType, i.componentIndex, e), cl(r, t));
}
function Kg(r, t, e) {
  process.env.NODE_ENV !== "production" && !Zr(r) && wt("param should be highDownDispatcher"), Kh(e);
  var i = Gt(r), n = Ws(i.componentMainType, i.componentIndex, i.componentHighDownName, e).dispatchers;
  n ? L(n, function(a) {
    return dl(a, t);
  }) : dl(r, t);
}
function Qg(r, t, e) {
  if (us(t)) {
    var i = t.dataType, n = r.getData(i), a = da(n, t);
    Y(a) || (a = [a]), r[t.type === zi ? "toggleSelect" : t.type === Vi ? "select" : "unselect"](a, i);
  }
}
function pl(r) {
  var t = r.getAllData();
  L(t, function(e) {
    var i = e.data, n = e.type;
    i.eachItemGraphicEl(function(a, o) {
      r.isSelected(o, n) ? Xh(a) : qh(a);
    });
  });
}
function Jg(r) {
  var t = [];
  return r.eachSeries(function(e) {
    var i = e.getAllData();
    L(i, function(n) {
      n.data;
      var a = n.type, o = e.getSelectedDataIndices();
      if (o.length > 0) {
        var s = {
          dataIndex: o,
          seriesIndex: e.seriesIndex
        };
        a != null && (s.dataType = a), t.push(s);
      }
    });
  }), t;
}
function jg(r, t, e) {
  e_(r, !0), Me(r, $g), t_(r, t, e);
}
function t_(r, t, e) {
  var i = Gt(r);
  t != null ? (i.focus = t, i.blurScope = e) : i.focus && (i.focus = null);
}
function e_(r, t) {
  var e = t === !1, i = r;
  r.highDownSilentOnTouch && (i.__highDownSilentOnTouch = r.highDownSilentOnTouch), (!e || i.__highDownDispatcher) && (i.__highByOuter = i.__highByOuter || 0, i.__highDownDispatcher = !e);
}
function Zr(r) {
  return !!(r && r.__highDownDispatcher);
}
function r_(r) {
  var t = ul[r];
  return t == null && sl <= 32 && (t = ul[r] = sl++), t;
}
function us(r) {
  var t = r.type;
  return t === Vi || t === Nn || t === zi;
}
function gl(r) {
  var t = r.type;
  return t === pr || t === On;
}
function i_(r) {
  var t = Hh(r);
  t.normalFill = r.style.fill, t.normalStroke = r.style.stroke;
  var e = r.states.select || {};
  t.selectFill = e.style && e.style.fill || null, t.selectStroke = e.style && e.style.stroke || null;
}
var Mr = yr.CMD, n_ = [[], [], []], _l = Math.sqrt, a_ = Math.atan2;
function o_(r, t) {
  if (t) {
    var e = r.data, i = r.len(), n, a, o, s, u, l, f = Mr.M, h = Mr.C, c = Mr.L, v = Mr.R, d = Mr.A, _ = Mr.Q;
    for (o = 0, s = 0; o < i; ) {
      switch (n = e[o++], s = o, a = 0, n) {
        case f:
          a = 1;
          break;
        case c:
          a = 1;
          break;
        case h:
          a = 3;
          break;
        case _:
          a = 2;
          break;
        case d:
          var p = t[4], g = t[5], y = _l(t[0] * t[0] + t[1] * t[1]), m = _l(t[2] * t[2] + t[3] * t[3]), w = a_(-t[1] / m, t[0] / y);
          e[o] *= y, e[o++] += p, e[o] *= m, e[o++] += g, e[o++] *= y, e[o++] *= m, e[o++] += w, e[o++] += w, o += 2, s = o;
          break;
        case v:
          l[0] = e[o++], l[1] = e[o++], Ni(l, l, t), e[s++] = l[0], e[s++] = l[1], l[0] += e[o++], l[1] += e[o++], Ni(l, l, t), e[s++] = l[0], e[s++] = l[1];
      }
      for (u = 0; u < a; u++) {
        var T = n_[u];
        T[0] = e[o++], T[1] = e[o++], Ni(T, T, t), e[s++] = T[0], e[s++] = T[1];
      }
    }
    r.increaseVersion();
  }
}
var uo = Math.sqrt, un = Math.sin, ln = Math.cos, di = Math.PI;
function yl(r) {
  return Math.sqrt(r[0] * r[0] + r[1] * r[1]);
}
function ls(r, t) {
  return (r[0] * t[0] + r[1] * t[1]) / (yl(r) * yl(t));
}
function ml(r, t) {
  return (r[0] * t[1] < r[1] * t[0] ? -1 : 1) * Math.acos(ls(r, t));
}
function wl(r, t, e, i, n, a, o, s, u, l, f) {
  var h = u * (di / 180), c = ln(h) * (r - e) / 2 + un(h) * (t - i) / 2, v = -1 * un(h) * (r - e) / 2 + ln(h) * (t - i) / 2, d = c * c / (o * o) + v * v / (s * s);
  d > 1 && (o *= uo(d), s *= uo(d));
  var _ = (n === a ? -1 : 1) * uo((o * o * (s * s) - o * o * (v * v) - s * s * (c * c)) / (o * o * (v * v) + s * s * (c * c))) || 0, p = _ * o * v / s, g = _ * -s * c / o, y = (r + e) / 2 + ln(h) * p - un(h) * g, m = (t + i) / 2 + un(h) * p + ln(h) * g, w = ml([1, 0], [(c - p) / o, (v - g) / s]), T = [(c - p) / o, (v - g) / s], S = [(-1 * c - p) / o, (-1 * v - g) / s], D = ml(T, S);
  if (ls(T, S) <= -1 && (D = di), ls(T, S) >= 1 && (D = 0), D < 0) {
    var C = Math.round(D / di * 1e6) / 1e6;
    D = di * 2 + C % 2 * di;
  }
  f.addData(l, y, m, o, s, w, D, h, a);
}
var s_ = /([mlvhzcqtsa])([^mlvhzcqtsa]*)/ig, u_ = /-?([0-9]*\.)?[0-9]+([eE]-?[0-9]+)?/g;
function l_(r) {
  var t = new yr();
  if (!r)
    return t;
  var e = 0, i = 0, n = e, a = i, o, s = yr.CMD, u = r.match(s_);
  if (!u)
    return t;
  for (var l = 0; l < u.length; l++) {
    for (var f = u[l], h = f.charAt(0), c = void 0, v = f.match(u_) || [], d = v.length, _ = 0; _ < d; _++)
      v[_] = parseFloat(v[_]);
    for (var p = 0; p < d; ) {
      var g = void 0, y = void 0, m = void 0, w = void 0, T = void 0, S = void 0, D = void 0, C = e, b = i, M = void 0, E = void 0;
      switch (h) {
        case "l":
          e += v[p++], i += v[p++], c = s.L, t.addData(c, e, i);
          break;
        case "L":
          e = v[p++], i = v[p++], c = s.L, t.addData(c, e, i);
          break;
        case "m":
          e += v[p++], i += v[p++], c = s.M, t.addData(c, e, i), n = e, a = i, h = "l";
          break;
        case "M":
          e = v[p++], i = v[p++], c = s.M, t.addData(c, e, i), n = e, a = i, h = "L";
          break;
        case "h":
          e += v[p++], c = s.L, t.addData(c, e, i);
          break;
        case "H":
          e = v[p++], c = s.L, t.addData(c, e, i);
          break;
        case "v":
          i += v[p++], c = s.L, t.addData(c, e, i);
          break;
        case "V":
          i = v[p++], c = s.L, t.addData(c, e, i);
          break;
        case "C":
          c = s.C, t.addData(c, v[p++], v[p++], v[p++], v[p++], v[p++], v[p++]), e = v[p - 2], i = v[p - 1];
          break;
        case "c":
          c = s.C, t.addData(c, v[p++] + e, v[p++] + i, v[p++] + e, v[p++] + i, v[p++] + e, v[p++] + i), e += v[p - 2], i += v[p - 1];
          break;
        case "S":
          g = e, y = i, M = t.len(), E = t.data, o === s.C && (g += e - E[M - 4], y += i - E[M - 3]), c = s.C, C = v[p++], b = v[p++], e = v[p++], i = v[p++], t.addData(c, g, y, C, b, e, i);
          break;
        case "s":
          g = e, y = i, M = t.len(), E = t.data, o === s.C && (g += e - E[M - 4], y += i - E[M - 3]), c = s.C, C = e + v[p++], b = i + v[p++], e += v[p++], i += v[p++], t.addData(c, g, y, C, b, e, i);
          break;
        case "Q":
          C = v[p++], b = v[p++], e = v[p++], i = v[p++], c = s.Q, t.addData(c, C, b, e, i);
          break;
        case "q":
          C = v[p++] + e, b = v[p++] + i, e += v[p++], i += v[p++], c = s.Q, t.addData(c, C, b, e, i);
          break;
        case "T":
          g = e, y = i, M = t.len(), E = t.data, o === s.Q && (g += e - E[M - 4], y += i - E[M - 3]), e = v[p++], i = v[p++], c = s.Q, t.addData(c, g, y, e, i);
          break;
        case "t":
          g = e, y = i, M = t.len(), E = t.data, o === s.Q && (g += e - E[M - 4], y += i - E[M - 3]), e += v[p++], i += v[p++], c = s.Q, t.addData(c, g, y, e, i);
          break;
        case "A":
          m = v[p++], w = v[p++], T = v[p++], S = v[p++], D = v[p++], C = e, b = i, e = v[p++], i = v[p++], c = s.A, wl(C, b, e, i, S, D, m, w, T, c, t);
          break;
        case "a":
          m = v[p++], w = v[p++], T = v[p++], S = v[p++], D = v[p++], C = e, b = i, e += v[p++], i += v[p++], c = s.A, wl(C, b, e, i, S, D, m, w, T, c, t);
          break;
      }
    }
    (h === "z" || h === "Z") && (c = s.Z, t.addData(c), e = n, i = a), o = c;
  }
  return t.toStatic(), t;
}
var f_ = function(r) {
  j(t, r);
  function t() {
    return r !== null && r.apply(this, arguments) || this;
  }
  return t.prototype.applyTransform = function(e) {
  }, t;
}(ht);
function h_(r) {
  return r.setData != null;
}
function v_(r, t) {
  var e = l_(r), i = N({}, t);
  return i.buildPath = function(n) {
    if (h_(n)) {
      n.setData(e.data);
      var a = n.getContext();
      a && n.rebuildPath(a, 1);
    } else {
      var a = n;
      e.rebuildPath(a, 1);
    }
  }, i.applyTransform = function(n) {
    o_(e, n), this.dirtyShape();
  }, i;
}
function c_(r, t) {
  return new f_(v_(r, t));
}
var d_ = function() {
  function r() {
    this.cx = 0, this.cy = 0, this.r = 0;
  }
  return r;
}(), Qh = function(r) {
  j(t, r);
  function t(e) {
    return r.call(this, e) || this;
  }
  return t.prototype.getDefaultShape = function() {
    return new d_();
  }, t.prototype.buildPath = function(e, i) {
    e.moveTo(i.cx + i.r, i.cy), e.arc(i.cx, i.cy, i.r, 0, Math.PI * 2);
  }, t;
}(ht);
Qh.prototype.type = "circle";
const Jh = Qh;
function p_(r, t, e, i) {
  var n = [], a = [], o = [], s = [], u, l, f, h;
  if (i) {
    f = [1 / 0, 1 / 0], h = [-1 / 0, -1 / 0];
    for (var c = 0, v = r.length; c < v; c++)
      Nr(f, f, r[c]), Br(h, h, r[c]);
    Nr(f, f, i[0]), Br(h, h, i[1]);
  }
  for (var c = 0, v = r.length; c < v; c++) {
    var d = r[c];
    if (e)
      u = r[c ? c - 1 : v - 1], l = r[(c + 1) % v];
    else if (c === 0 || c === v - 1) {
      n.push(zc(r[c]));
      continue;
    } else
      u = r[c - 1], l = r[c + 1];
    Hc(a, l, u), Ea(a, a, t);
    var _ = ko(d, u), p = ko(d, l), g = _ + p;
    g !== 0 && (_ /= g, p /= g), Ea(o, a, -_), Ea(s, a, p);
    var y = lu([], d, o), m = lu([], d, s);
    i && (Br(y, y, f), Nr(y, y, h), Br(m, m, f), Nr(m, m, h)), n.push(y), n.push(m);
  }
  return e && n.push(n.shift()), n;
}
function g_(r, t, e) {
  var i = t.smooth, n = t.points;
  if (n && n.length >= 2) {
    if (i) {
      var a = p_(n, i, e, t.smoothConstraint);
      r.moveTo(n[0][0], n[0][1]);
      for (var o = n.length, s = 0; s < (e ? o : o - 1); s++) {
        var u = a[s * 2], l = a[s * 2 + 1], f = n[(s + 1) % o];
        r.bezierCurveTo(u[0], u[1], l[0], l[1], f[0], f[1]);
      }
    } else {
      r.moveTo(n[0][0], n[0][1]);
      for (var s = 1, h = n.length; s < h; s++)
        r.lineTo(n[s][0], n[s][1]);
    }
    e && r.closePath();
  }
}
var __ = function() {
  function r() {
    this.points = null, this.percent = 1, this.smooth = 0, this.smoothConstraint = null;
  }
  return r;
}(), jh = function(r) {
  j(t, r);
  function t(e) {
    return r.call(this, e) || this;
  }
  return t.prototype.getDefaultStyle = function() {
    return {
      stroke: "#000",
      fill: null
    };
  }, t.prototype.getDefaultShape = function() {
    return new __();
  }, t.prototype.buildPath = function(e, i) {
    g_(e, i, !1);
  }, t;
}(ht);
jh.prototype.type = "polyline";
const y_ = jh;
var m_ = {}, w_ = function() {
  function r() {
    this.x1 = 0, this.y1 = 0, this.x2 = 0, this.y2 = 0, this.percent = 1;
  }
  return r;
}(), tv = function(r) {
  j(t, r);
  function t(e) {
    return r.call(this, e) || this;
  }
  return t.prototype.getDefaultStyle = function() {
    return {
      stroke: "#000",
      fill: null
    };
  }, t.prototype.getDefaultShape = function() {
    return new w_();
  }, t.prototype.buildPath = function(e, i) {
    var n, a, o, s;
    if (this.subPixelOptimize) {
      var u = Mg(m_, i, this.style);
      n = u.x1, a = u.y1, o = u.x2, s = u.y2;
    } else
      n = i.x1, a = i.y1, o = i.x2, s = i.y2;
    var l = i.percent;
    l !== 0 && (e.moveTo(n, a), l < 1 && (o = n * (1 - l) + o * l, s = a * (1 - l) + s * l), e.lineTo(o, s));
  }, t.prototype.pointAt = function(e) {
    var i = this.shape;
    return [
      i.x1 * (1 - e) + i.x2 * e,
      i.y1 * (1 - e) + i.y2 * e
    ];
  }, t;
}(ht);
tv.prototype.type = "line";
const S_ = tv;
var T_ = function() {
  function r() {
    this.cx = 0, this.cy = 0, this.r = 0, this.startAngle = 0, this.endAngle = Math.PI * 2, this.clockwise = !0;
  }
  return r;
}(), ev = function(r) {
  j(t, r);
  function t(e) {
    return r.call(this, e) || this;
  }
  return t.prototype.getDefaultStyle = function() {
    return {
      stroke: "#000",
      fill: null
    };
  }, t.prototype.getDefaultShape = function() {
    return new T_();
  }, t.prototype.buildPath = function(e, i) {
    var n = i.cx, a = i.cy, o = Math.max(i.r, 0), s = i.startAngle, u = i.endAngle, l = i.clockwise, f = Math.cos(s), h = Math.sin(s);
    e.moveTo(f * o + n, h * o + a), e.arc(n, a, o, s, u, !l);
  }, t;
}(ht);
ev.prototype.type = "arc";
const D_ = ev;
var C_ = function(r) {
  j(t, r);
  function t() {
    var e = r !== null && r.apply(this, arguments) || this;
    return e.type = "compound", e;
  }
  return t.prototype._updatePathDirty = function() {
    for (var e = this.shape.paths, i = this.shapeChanged(), n = 0; n < e.length; n++)
      i = i || e[n].shapeChanged();
    i && this.dirtyShape();
  }, t.prototype.beforeBrush = function() {
    this._updatePathDirty();
    for (var e = this.shape.paths || [], i = this.getGlobalScale(), n = 0; n < e.length; n++)
      e[n].path || e[n].createPathProxy(), e[n].path.setScale(i[0], i[1], e[n].segmentIgnoreThreshold);
  }, t.prototype.buildPath = function(e, i) {
    for (var n = i.paths || [], a = 0; a < n.length; a++)
      n[a].buildPath(e, n[a].shape, !0);
  }, t.prototype.afterBrush = function() {
    for (var e = this.shape.paths || [], i = 0; i < e.length; i++)
      e[i].pathUpdated();
  }, t.prototype.getBoundingRect = function() {
    return this._updatePathDirty.call(this), ht.prototype.getBoundingRect.call(this);
  }, t;
}(ht);
const b_ = C_;
var je = [0, 0], tr = [0, 0], fn = new V(), hn = new V(), E_ = function() {
  function r(t, e) {
    this._corners = [], this._axes = [], this._origin = [0, 0];
    for (var i = 0; i < 4; i++)
      this._corners[i] = new V();
    for (var i = 0; i < 2; i++)
      this._axes[i] = new V();
    t && this.fromBoundingRect(t, e);
  }
  return r.prototype.fromBoundingRect = function(t, e) {
    var i = this._corners, n = this._axes, a = t.x, o = t.y, s = a + t.width, u = o + t.height;
    if (i[0].set(a, o), i[1].set(s, o), i[2].set(s, u), i[3].set(a, u), e)
      for (var l = 0; l < 4; l++)
        i[l].transform(e);
    V.sub(n[0], i[1], i[0]), V.sub(n[1], i[3], i[0]), n[0].normalize(), n[1].normalize();
    for (var l = 0; l < 2; l++)
      this._origin[l] = n[l].dot(i[0]);
  }, r.prototype.intersect = function(t, e) {
    var i = !0, n = !e;
    return fn.set(1 / 0, 1 / 0), hn.set(0, 0), !this._intersectCheckOneSide(this, t, fn, hn, n, 1) && (i = !1, n) || !this._intersectCheckOneSide(t, this, fn, hn, n, -1) && (i = !1, n) || n || V.copy(e, i ? fn : hn), i;
  }, r.prototype._intersectCheckOneSide = function(t, e, i, n, a, o) {
    for (var s = !0, u = 0; u < 2; u++) {
      var l = this._axes[u];
      if (this._getProjMinMaxOnAxis(u, t._corners, je), this._getProjMinMaxOnAxis(u, e._corners, tr), je[1] < tr[0] || je[0] > tr[1]) {
        if (s = !1, a)
          return s;
        var f = Math.abs(tr[0] - je[1]), h = Math.abs(je[0] - tr[1]);
        Math.min(f, h) > n.len() && (f < h ? V.scale(n, l, -f * o) : V.scale(n, l, h * o));
      } else if (i) {
        var f = Math.abs(tr[0] - je[1]), h = Math.abs(je[0] - tr[1]);
        Math.min(f, h) < i.len() && (f < h ? V.scale(i, l, f * o) : V.scale(i, l, -h * o));
      }
    }
    return s;
  }, r.prototype._getProjMinMaxOnAxis = function(t, e, i) {
    for (var n = this._axes[t], a = this._origin, o = e[0].dot(n) + a[t], s = o, u = o, l = 1; l < e.length; l++) {
      var f = e[l].dot(n) + a[t];
      s = Math.min(f, s), u = Math.max(f, u);
    }
    i[0] = s, i[1] = u;
  }, r;
}();
const fs = E_;
_t();
function M_(r, t, e, i, n) {
  var a;
  if (t && t.ecModel) {
    var o = t.ecModel.getUpdatePayload();
    a = o && o.animation;
  }
  var s = t && t.isAnimationEnabled(), u = r === "update";
  if (s) {
    var l = void 0, f = void 0, h = void 0;
    i ? (l = W(i.duration, 200), f = W(i.easing, "cubicOut"), h = 0) : (l = t.getShallow(u ? "animationDurationUpdate" : "animationDuration"), f = t.getShallow(u ? "animationEasingUpdate" : "animationEasing"), h = t.getShallow(u ? "animationDelayUpdate" : "animationDelay")), a && (a.duration != null && (l = a.duration), a.easing != null && (f = a.easing), a.delay != null && (h = a.delay)), J(h) && (h = h(e, n)), J(l) && (l = l(e));
    var c = {
      duration: l || 0,
      delay: h,
      easing: f
    };
    return c;
  } else
    return null;
}
function rv(r, t, e, i, n, a, o) {
  var s = !1, u;
  J(n) ? (o = a, a = n, n = null) : F(n) && (a = n.cb, o = n.during, s = n.isFrom, u = n.removeOpt, n = n.dataIndex);
  var l = r === "leave";
  l || t.stopAnimation("leave");
  var f = M_(r, i, n, l ? u || {} : null, i && i.getAnimationDelayParams ? i.getAnimationDelayParams(t, n) : null);
  if (f && f.duration > 0) {
    var h = f.duration, c = f.delay, v = f.easing, d = {
      duration: h,
      delay: c || 0,
      easing: v,
      done: a,
      force: !!a || !!o,
      // Set to final state in update/init animation.
      // So the post processing based on the path shape can be done correctly.
      setToFinal: !l,
      scope: r,
      during: o
    };
    s ? t.animateFrom(e, d) : t.animateTo(e, d);
  } else
    t.stopAnimation(), !s && t.attr(e), o && o(1), a && a();
}
function Wr(r, t, e, i, n, a) {
  rv("update", r, t, e, i, n, a);
}
function qn(r, t, e, i, n, a) {
  rv("enter", r, t, e, i, n, a);
}
function Bn(r) {
  if (!r.__zr)
    return !0;
  for (var t = 0; t < r.animators.length; t++) {
    var e = r.animators[t];
    if (e.scope === "leave")
      return !0;
  }
  return !1;
}
function L_(r) {
  return ht.extend(r);
}
function hs(r, t, e, i) {
  var n = c_(r, t);
  return e && (i === "center" && (e = iv(e, n.getBoundingRect())), P_(n, e)), n;
}
function x_(r, t, e) {
  var i = new ma({
    style: {
      image: r,
      x: t.x,
      y: t.y,
      width: t.width,
      height: t.height
    },
    onload: function(n) {
      if (e === "center") {
        var a = {
          width: n.width,
          height: n.height
        };
        i.setStyle(iv(t, a));
      }
    }
  });
  return i;
}
function iv(r, t) {
  var e = t.width / t.height, i = r.height * e, n;
  i <= r.width ? n = r.height : (i = r.width, n = i / e);
  var a = r.x + r.width / 2, o = r.y + r.height / 2;
  return {
    x: a - i / 2,
    y: o - n / 2,
    width: i,
    height: n
  };
}
function P_(r, t) {
  if (r.applyTransform) {
    var e = r.getBoundingRect(), i = e.calculateTransform(t);
    r.applyTransform(i);
  }
}
function Sl(r, t) {
  var e;
  r.isGroup && (e = t(r)), e || r.traverse(t);
}
function R_(r, t) {
  if (r)
    if (Y(r))
      for (var e = 0; e < r.length; e++)
        Sl(r[e], t);
    else
      Sl(r, t);
}
var $s = {};
function I_(r, t) {
  for (var e = 0; e < qr.length; e++) {
    var i = qr[e], n = t[i], a = r.ensureState(i);
    a.style = a.style || {}, a.style.text = n;
  }
  var o = r.currentStates.slice();
  r.clearStates(!0), r.setStyle({
    text: t.normal
  }), r.useStates(o, !0);
}
function A_(r, t, e) {
  var i = r.labelFetcher, n = r.labelDataIndex, a = r.labelDimIndex, o = t.normal, s;
  i && (s = i.getFormattedLabel(n, "normal", null, a, o && o.get("formatter"), e != null ? {
    interpolatedValue: e
  } : null)), s == null && (s = J(r.defaultText) ? r.defaultText(n, r, e) : r.defaultText);
  for (var u = {
    normal: s
  }, l = 0; l < qr.length; l++) {
    var f = qr[l], h = t[f];
    u[f] = W(i ? i.getFormattedLabel(n, f, null, a, h && h.get("formatter")) : null, s);
  }
  return u;
}
function O_(r, t, e, i, n) {
  var a = {};
  return N_(a, r, e, i, n), t && N(a, t), a;
}
function N_(r, t, e, i, n) {
  e = e || $s;
  var a = t.ecModel, o = a && a.option.textStyle, s = B_(t), u;
  if (s) {
    u = {};
    for (var l in s)
      if (s.hasOwnProperty(l)) {
        var f = t.getModel(["rich", l]);
        bl(u[l] = {}, f, o, e, i, n, !1, !0);
      }
  }
  u && (r.rich = u);
  var h = t.get("overflow");
  h && (r.overflow = h);
  var c = t.get("minMargin");
  c != null && (r.margin = c), bl(r, t, o, e, i, n, !0, !1);
}
function B_(r) {
  for (var t; r && r !== r.ecModel; ) {
    var e = (r.option || $s).rich;
    if (e) {
      t = t || {};
      for (var i = lt(e), n = 0; n < i.length; n++) {
        var a = i[n];
        t[a] = 1;
      }
    }
    r = r.parentModel;
  }
  return t;
}
var Tl = ["fontStyle", "fontWeight", "fontSize", "fontFamily", "textShadowColor", "textShadowBlur", "textShadowOffsetX", "textShadowOffsetY"], Dl = ["align", "lineHeight", "width", "height", "tag", "verticalAlign", "ellipsis"], Cl = ["padding", "borderWidth", "borderRadius", "borderDashOffset", "backgroundColor", "borderColor", "shadowColor", "shadowBlur", "shadowOffsetX", "shadowOffsetY"];
function bl(r, t, e, i, n, a, o, s) {
  e = !n && e || $s;
  var u = i && i.inheritColor, l = t.getShallow("color"), f = t.getShallow("textBorderColor"), h = W(t.getShallow("opacity"), e.opacity);
  (l === "inherit" || l === "auto") && (process.env.NODE_ENV !== "production" && l === "auto" && gt("color: 'auto'", "color: 'inherit'"), u ? l = u : l = null), (f === "inherit" || f === "auto") && (process.env.NODE_ENV !== "production" && f === "auto" && gt("color: 'auto'", "color: 'inherit'"), u ? f = u : f = null), a || (l = l || e.color, f = f || e.textBorderColor), l != null && (r.fill = l), f != null && (r.stroke = f);
  var c = W(t.getShallow("textBorderWidth"), e.textBorderWidth);
  c != null && (r.lineWidth = c);
  var v = W(t.getShallow("textBorderType"), e.textBorderType);
  v != null && (r.lineDash = v);
  var d = W(t.getShallow("textBorderDashOffset"), e.textBorderDashOffset);
  d != null && (r.lineDashOffset = d), !n && h == null && !s && (h = i && i.defaultOpacity), h != null && (r.opacity = h), !n && !a && r.fill == null && i.inheritColor && (r.fill = i.inheritColor);
  for (var _ = 0; _ < Tl.length; _++) {
    var p = Tl[_], g = W(t.getShallow(p), e[p]);
    g != null && (r[p] = g);
  }
  for (var _ = 0; _ < Dl.length; _++) {
    var p = Dl[_], g = t.getShallow(p);
    g != null && (r[p] = g);
  }
  if (r.verticalAlign == null) {
    var y = t.getShallow("baseline");
    y != null && (r.verticalAlign = y);
  }
  if (!o || !i.disableBox) {
    for (var _ = 0; _ < Cl.length; _++) {
      var p = Cl[_], g = t.getShallow(p);
      g != null && (r[p] = g);
    }
    var m = t.getShallow("borderType");
    m != null && (r.borderDash = m), (r.backgroundColor === "auto" || r.backgroundColor === "inherit") && u && (process.env.NODE_ENV !== "production" && r.backgroundColor === "auto" && gt("backgroundColor: 'auto'", "backgroundColor: 'inherit'"), r.backgroundColor = u), (r.borderColor === "auto" || r.borderColor === "inherit") && u && (process.env.NODE_ENV !== "production" && r.borderColor === "auto" && gt("borderColor: 'auto'", "borderColor: 'inherit'"), r.borderColor = u);
  }
}
function k_(r, t) {
  var e = t && t.getModel("textStyle");
  return Ne([
    // FIXME in node-canvas fontWeight is before fontStyle
    r.fontStyle || e && e.getShallow("fontStyle") || "",
    r.fontWeight || e && e.getShallow("fontWeight") || "",
    (r.fontSize || e && e.getShallow("fontSize") || 12) + "px",
    r.fontFamily || e && e.getShallow("fontFamily") || "sans-serif"
  ].join(" "));
}
var nv = _t();
function F_(r, t, e, i, n) {
  var a = nv(r);
  if (!a.valueAnimation || a.prevValue === a.value)
    return;
  var o = a.defaultInterpolatedText, s = W(a.interpolatedValue, a.prevValue), u = a.value;
  function l(f) {
    var h = Ap(e, a.precision, s, u, f);
    a.interpolatedValue = f === 1 ? null : h;
    var c = A_({
      labelDataIndex: t,
      labelFetcher: n,
      defaultText: o ? o(h) : h + ""
    }, a.statesModels, h);
    I_(r, c);
  }
  r.percent = 0, (a.prevValue == null ? qn : Wr)(r, {
    // percent is used to prevent animation from being aborted #15916
    percent: 1
  }, i, t, null, l);
}
var V_ = ["textStyle", "color"], lo = ["fontStyle", "fontWeight", "fontSize", "fontFamily", "padding", "lineHeight", "rich", "width", "height", "overflow"], fo = new Xn(), z_ = (
  /** @class */
  function() {
    function r() {
    }
    return r.prototype.getTextColor = function(t) {
      var e = this.ecModel;
      return this.getShallow("color") || (!t && e ? e.get(V_) : null);
    }, r.prototype.getFont = function() {
      return k_({
        fontStyle: this.getShallow("fontStyle"),
        fontWeight: this.getShallow("fontWeight"),
        fontSize: this.getShallow("fontSize"),
        fontFamily: this.getShallow("fontFamily")
      }, this.ecModel);
    }, r.prototype.getTextRect = function(t) {
      for (var e = {
        text: t,
        verticalAlign: this.getShallow("verticalAlign") || this.getShallow("baseline")
      }, i = 0; i < lo.length; i++)
        e[lo[i]] = this.getShallow(lo[i]);
      return fo.useStyle(e), fo.update(), fo.getBoundingRect();
    }, r;
  }()
);
const H_ = z_;
var av = [
  ["lineWidth", "width"],
  ["stroke", "color"],
  ["opacity"],
  ["shadowBlur"],
  ["shadowOffsetX"],
  ["shadowOffsetY"],
  ["shadowColor"],
  ["lineDash", "type"],
  ["lineDashOffset", "dashOffset"],
  ["lineCap", "cap"],
  ["lineJoin", "join"],
  ["miterLimit"]
  // Option decal is in `DecalObject` but style.decal is in `PatternObject`.
  // So do not transfer decal directly.
], U_ = Gi(av), Y_ = (
  /** @class */
  function() {
    function r() {
    }
    return r.prototype.getLineStyle = function(t) {
      return U_(this, t);
    }, r;
  }()
), ov = [
  ["fill", "color"],
  ["stroke", "borderColor"],
  ["lineWidth", "borderWidth"],
  ["opacity"],
  ["shadowBlur"],
  ["shadowOffsetX"],
  ["shadowOffsetY"],
  ["shadowColor"],
  ["lineDash", "borderType"],
  ["lineDashOffset", "borderDashOffset"],
  ["lineCap", "borderCap"],
  ["lineJoin", "borderJoin"],
  ["miterLimit", "borderMiterLimit"]
  // Option decal is in `DecalObject` but style.decal is in `PatternObject`.
  // So do not transfer decal directly.
], G_ = Gi(ov), W_ = (
  /** @class */
  function() {
    function r() {
    }
    return r.prototype.getItemStyle = function(t, e) {
      return G_(this, t, e);
    }, r;
  }()
), mr = (
  /** @class */
  function() {
    function r(t, e, i) {
      this.parentModel = e, this.ecModel = i, this.option = t;
    }
    return r.prototype.init = function(t, e, i) {
    }, r.prototype.mergeOption = function(t, e) {
      ft(this.option, t, !0);
    }, r.prototype.get = function(t, e) {
      return t == null ? this.option : this._doGet(this.parsePath(t), !e && this.parentModel);
    }, r.prototype.getShallow = function(t, e) {
      var i = this.option, n = i == null ? i : i[t];
      if (n == null && !e) {
        var a = this.parentModel;
        a && (n = a.getShallow(t));
      }
      return n;
    }, r.prototype.getModel = function(t, e) {
      var i = t != null, n = i ? this.parsePath(t) : null, a = i ? this._doGet(n) : this.option;
      return e = e || this.parentModel && this.parentModel.getModel(this.resolveParentPath(n)), new r(a, e, this.ecModel);
    }, r.prototype.isEmpty = function() {
      return this.option == null;
    }, r.prototype.restoreData = function() {
    }, r.prototype.clone = function() {
      var t = this.constructor;
      return new t(K(this.option));
    }, r.prototype.parsePath = function(t) {
      return typeof t == "string" ? t.split(".") : t;
    }, r.prototype.resolveParentPath = function(t) {
      return t;
    }, r.prototype.isAnimationEnabled = function() {
      if (!rt.node && this.option) {
        if (this.option.animation != null)
          return !!this.option.animation;
        if (this.parentModel)
          return this.parentModel.isAnimationEnabled();
      }
    }, r.prototype._doGet = function(t, e) {
      var i = this.option;
      if (!t)
        return i;
      for (var n = 0; n < t.length && !(t[n] && (i = i && typeof i == "object" ? i[t[n]] : null, i == null)); n++)
        ;
      return i == null && e && (i = e._doGet(this.resolveParentPath(t), e.parentModel)), i;
    }, r;
  }()
);
Vs(mr);
Vp(mr);
Ee(mr, Y_);
Ee(mr, W_);
Ee(mr, Gp);
Ee(mr, H_);
const Fe = mr;
var $_ = Math.round(Math.random() * 10);
function Sa(r) {
  return [r || "", $_++].join("_");
}
function X_(r) {
  var t = {};
  r.registerSubTypeDefaulter = function(e, i) {
    var n = fe(e);
    t[n.main] = i;
  }, r.determineSubType = function(e, i) {
    var n = i.type;
    if (!n) {
      var a = fe(e).main;
      r.hasSubTypes(e) && t[a] && (n = t[a](i));
    }
    return n;
  };
}
function q_(r, t) {
  r.topologicalTravel = function(a, o, s, u) {
    if (!a.length)
      return;
    var l = e(o), f = l.graph, h = l.noEntryList, c = {};
    for (L(a, function(y) {
      c[y] = !0;
    }); h.length; ) {
      var v = h.pop(), d = f[v], _ = !!c[v];
      _ && (s.call(u, v, d.originalDeps.slice()), delete c[v]), L(d.successor, _ ? g : p);
    }
    L(c, function() {
      var y = "";
      throw process.env.NODE_ENV !== "production" && (y = jo("Circular dependency may exists: ", c, a, o)), new Error(y);
    });
    function p(y) {
      f[y].entryCount--, f[y].entryCount === 0 && h.push(y);
    }
    function g(y) {
      c[y] = !0, p(y);
    }
  };
  function e(a) {
    var o = {}, s = [];
    return L(a, function(u) {
      var l = i(o, u), f = l.originalDeps = t(u), h = n(f, a);
      l.entryCount = h.length, l.entryCount === 0 && s.push(u), L(h, function(c) {
        nt(l.predecessor, c) < 0 && l.predecessor.push(c);
        var v = i(o, c);
        nt(v.successor, c) < 0 && v.successor.push(u);
      });
    }), {
      graph: o,
      noEntryList: s
    };
  }
  function i(a, o) {
    return a[o] || (a[o] = {
      predecessor: [],
      successor: []
    }), a[o];
  }
  function n(a, o) {
    var s = [];
    return L(a, function(u) {
      nt(o, u) >= 0 && s.push(u);
    }), s;
  }
}
const Z_ = {
  time: {
    month: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    monthAbbr: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    dayOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    dayOfWeekAbbr: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
  },
  legend: {
    selector: {
      all: "All",
      inverse: "Inv"
    }
  },
  toolbox: {
    brush: {
      title: {
        rect: "Box Select",
        polygon: "Lasso Select",
        lineX: "Horizontally Select",
        lineY: "Vertically Select",
        keep: "Keep Selections",
        clear: "Clear Selections"
      }
    },
    dataView: {
      title: "Data View",
      lang: ["Data View", "Close", "Refresh"]
    },
    dataZoom: {
      title: {
        zoom: "Zoom",
        back: "Zoom Reset"
      }
    },
    magicType: {
      title: {
        line: "Switch to Line Chart",
        bar: "Switch to Bar Chart",
        stack: "Stack",
        tiled: "Tile"
      }
    },
    restore: {
      title: "Restore"
    },
    saveAsImage: {
      title: "Save as Image",
      lang: ["Right Click to Save Image"]
    }
  },
  series: {
    typeNames: {
      pie: "Pie chart",
      bar: "Bar chart",
      line: "Line chart",
      scatter: "Scatter plot",
      effectScatter: "Ripple scatter plot",
      radar: "Radar chart",
      tree: "Tree",
      treemap: "Treemap",
      boxplot: "Boxplot",
      candlestick: "Candlestick",
      k: "K line chart",
      heatmap: "Heat map",
      map: "Map",
      parallel: "Parallel coordinate map",
      lines: "Line graph",
      graph: "Relationship graph",
      sankey: "Sankey diagram",
      funnel: "Funnel chart",
      gauge: "Gauge",
      pictorialBar: "Pictorial bar",
      themeRiver: "Theme River Map",
      sunburst: "Sunburst"
    }
  },
  aria: {
    general: {
      withTitle: 'This is a chart about "{title}"',
      withoutTitle: "This is a chart"
    },
    series: {
      single: {
        prefix: "",
        withName: " with type {seriesType} named {seriesName}.",
        withoutName: " with type {seriesType}."
      },
      multiple: {
        prefix: ". It consists of {seriesCount} series count.",
        withName: " The {seriesId} series is a {seriesType} representing {seriesName}.",
        withoutName: " The {seriesId} series is a {seriesType}.",
        separator: {
          middle: "",
          end: ""
        }
      }
    },
    data: {
      allData: "The data is as follows: ",
      partialData: "The first {displayCnt} items are: ",
      withName: "the data for {name} is {value}",
      withoutName: "{value}",
      separator: {
        middle: ", ",
        end: ". "
      }
    }
  }
}, K_ = {
  time: {
    month: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
    monthAbbr: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
    dayOfWeek: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
    dayOfWeekAbbr: ["日", "一", "二", "三", "四", "五", "六"]
  },
  legend: {
    selector: {
      all: "全选",
      inverse: "反选"
    }
  },
  toolbox: {
    brush: {
      title: {
        rect: "矩形选择",
        polygon: "圈选",
        lineX: "横向选择",
        lineY: "纵向选择",
        keep: "保持选择",
        clear: "清除选择"
      }
    },
    dataView: {
      title: "数据视图",
      lang: ["数据视图", "关闭", "刷新"]
    },
    dataZoom: {
      title: {
        zoom: "区域缩放",
        back: "区域缩放还原"
      }
    },
    magicType: {
      title: {
        line: "切换为折线图",
        bar: "切换为柱状图",
        stack: "切换为堆叠",
        tiled: "切换为平铺"
      }
    },
    restore: {
      title: "还原"
    },
    saveAsImage: {
      title: "保存为图片",
      lang: ["右键另存为图片"]
    }
  },
  series: {
    typeNames: {
      pie: "饼图",
      bar: "柱状图",
      line: "折线图",
      scatter: "散点图",
      effectScatter: "涟漪散点图",
      radar: "雷达图",
      tree: "树图",
      treemap: "矩形树图",
      boxplot: "箱型图",
      candlestick: "K线图",
      k: "K线图",
      heatmap: "热力图",
      map: "地图",
      parallel: "平行坐标图",
      lines: "线图",
      graph: "关系图",
      sankey: "桑基图",
      funnel: "漏斗图",
      gauge: "仪表盘图",
      pictorialBar: "象形柱图",
      themeRiver: "主题河流图",
      sunburst: "旭日图"
    }
  },
  aria: {
    general: {
      withTitle: "这是一个关于“{title}”的图表。",
      withoutTitle: "这是一个图表，"
    },
    series: {
      single: {
        prefix: "",
        withName: "图表类型是{seriesType}，表示{seriesName}。",
        withoutName: "图表类型是{seriesType}。"
      },
      multiple: {
        prefix: "它由{seriesCount}个图表系列组成。",
        withName: "第{seriesId}个系列是一个表示{seriesName}的{seriesType}，",
        withoutName: "第{seriesId}个系列是一个{seriesType}，",
        separator: {
          middle: "；",
          end: "。"
        }
      }
    },
    data: {
      allData: "其数据是——",
      partialData: "其中，前{displayCnt}项是——",
      withName: "{name}的数据是{value}",
      withoutName: "{value}",
      separator: {
        middle: "，",
        end: ""
      }
    }
  }
};
var Zn = "ZH", Xs = "EN", Kn = Xs, kn = {}, Q_ = rt.domSupported ? function() {
  var r = (
    /* eslint-disable-next-line */
    (document.documentElement.lang || navigator.language || navigator.browserLanguage).toUpperCase()
  );
  return r.indexOf(Zn) > -1 ? Zn : Kn;
}() : Kn;
function sv(r, t) {
  r = r.toUpperCase(), new Fe(t), kn[r] = t;
}
function J_(r) {
  if (Z(r)) {
    var t = kn[r.toUpperCase()] || {};
    return r === Zn || r === Xs ? K(t) : ft(K(t), K(kn[Kn]), !1);
  } else
    return ft(K(r), K(kn[Kn]), !1);
}
sv(Xs, Z_);
sv(Zn, K_);
var El = ["a", "b", "c", "d", "e", "f", "g"], ho = function(r, t) {
  return "{" + r + (t ?? "") + "}";
};
function j_(r, t, e) {
  Y(t) || (t = [t]);
  var i = t.length;
  if (!i)
    return "";
  for (var n = t[0].$vars || [], a = 0; a < n.length; a++) {
    var o = El[a];
    r = r.replace(ho(o), ho(o, 0));
  }
  for (var s = 0; s < i; s++)
    for (var u = 0; u < n.length; u++) {
      var l = t[s][n[u]];
      r = r.replace(ho(El[u], s), e ? Jc(l) : l);
    }
  return r;
}
function t0(r, t) {
  return t = t || "transparent", Z(r) ? r : F(r) && r.colorStops && (r.colorStops[0] || {}).color || t;
}
var Fn = L, e0 = ["left", "right", "top", "bottom", "width", "height"], vn = [["width", "left", "right"], ["height", "top", "bottom"]];
function uv(r, t, e, i, n) {
  var a = 0, o = 0;
  i == null && (i = 1 / 0), n == null && (n = 1 / 0);
  var s = 0;
  t.eachChild(function(u, l) {
    var f = u.getBoundingRect(), h = t.childAt(l + 1), c = h && h.getBoundingRect(), v, d;
    if (r === "horizontal") {
      var _ = f.width + (c ? -c.x + f.x : 0);
      v = a + _, v > i || u.newline ? (a = 0, v = _, o += s + e, s = f.height) : s = Math.max(s, f.height);
    } else {
      var p = f.height + (c ? -c.y + f.y : 0);
      d = o + p, d > n || u.newline ? (a += s + e, o = 0, d = p, s = f.width) : s = Math.max(s, f.width);
    }
    u.newline || (u.x = a, u.y = o, u.markRedraw(), r === "horizontal" ? a = v + e : o = d + e);
  });
}
Rs(uv, "vertical");
Rs(uv, "horizontal");
function Qn(r) {
  var t = r.layoutMode || r.constructor.layoutMode;
  return F(t) ? t : t ? {
    type: t
  } : null;
}
function Jn(r, t, e) {
  var i = e && e.ignoreSize;
  !Y(i) && (i = [i, i]);
  var n = o(vn[0], 0), a = o(vn[1], 1);
  l(vn[0], r, n), l(vn[1], r, a);
  function o(f, h) {
    var c = {}, v = 0, d = {}, _ = 0, p = 2;
    if (Fn(f, function(m) {
      d[m] = r[m];
    }), Fn(f, function(m) {
      s(t, m) && (c[m] = d[m] = t[m]), u(c, m) && v++, u(d, m) && _++;
    }), i[h])
      return u(t, f[1]) ? d[f[2]] = null : u(t, f[2]) && (d[f[1]] = null), d;
    if (_ === p || !v)
      return d;
    if (v >= p)
      return c;
    for (var g = 0; g < f.length; g++) {
      var y = f[g];
      if (!s(c, y) && s(r, y)) {
        c[y] = r[y];
        break;
      }
    }
    return c;
  }
  function s(f, h) {
    return f.hasOwnProperty(h);
  }
  function u(f, h) {
    return f[h] != null && f[h] !== "auto";
  }
  function l(f, h, c) {
    Fn(f, function(v) {
      h[v] = c[v];
    });
  }
}
function lv(r) {
  return r0({}, r);
}
function r0(r, t) {
  return t && r && Fn(e0, function(e) {
    t.hasOwnProperty(e) && (r[e] = t[e]);
  }), r;
}
var i0 = _t(), ri = (
  /** @class */
  function(r) {
    j(t, r);
    function t(e, i, n) {
      var a = r.call(this, e, i, n) || this;
      return a.uid = Sa("ec_cpt_model"), a;
    }
    return t.prototype.init = function(e, i, n) {
      this.mergeDefaultAndTheme(e, n);
    }, t.prototype.mergeDefaultAndTheme = function(e, i) {
      var n = Qn(this), a = n ? lv(e) : {}, o = i.getTheme();
      ft(e, o.get(this.mainType)), ft(e, this.getDefaultOption()), n && Jn(e, a, n);
    }, t.prototype.mergeOption = function(e, i) {
      ft(this.option, e, !0);
      var n = Qn(this);
      n && Jn(this.option, e, n);
    }, t.prototype.optionUpdated = function(e, i) {
    }, t.prototype.getDefaultOption = function() {
      var e = this.constructor;
      if (!Bp(e))
        return e.defaultOption;
      var i = i0(this);
      if (!i.defaultOption) {
        for (var n = [], a = e; a; ) {
          var o = a.prototype.defaultOption;
          o && n.push(o), a = a.superClass;
        }
        for (var s = {}, u = n.length - 1; u >= 0; u--)
          s = ft(s, n[u], !0);
        i.defaultOption = s;
      }
      return i.defaultOption;
    }, t.prototype.getReferringComponents = function(e, i) {
      var n = e + "Index", a = e + "Id";
      return pa(this.ecModel, e, {
        index: this.get(n, !0),
        id: this.get(a, !0)
      }, i);
    }, t.prototype.getBoxLayoutParams = function() {
      var e = this;
      return {
        left: e.get("left"),
        top: e.get("top"),
        right: e.get("right"),
        bottom: e.get("bottom"),
        width: e.get("width"),
        height: e.get("height")
      };
    }, t.prototype.getZLevelKey = function() {
      return "";
    }, t.prototype.setZLevel = function(e) {
      this.option.zlevel = e;
    }, t.protoInitialize = function() {
      var e = t.prototype;
      e.type = "component", e.id = "", e.name = "", e.mainType = "", e.subType = "", e.componentIndex = 0;
    }(), t;
  }(Fe)
);
Ph(ri, Fe);
zs(ri);
X_(ri);
q_(ri, n0);
function n0(r) {
  var t = [];
  return L(ri.getClassesByMainType(r), function(e) {
    t = t.concat(e.dependencies || e.prototype.dependencies || []);
  }), t = it(t, function(e) {
    return fe(e).main;
  }), r !== "dataset" && nt(t, "dataset") <= 0 && t.unshift("dataset"), t;
}
const st = ri;
var fv = "";
typeof navigator < "u" && (fv = navigator.platform || "");
var Lr = "rgba(0, 0, 0, 0.2)";
const a0 = {
  darkMode: "auto",
  // backgroundColor: 'rgba(0,0,0,0)',
  colorBy: "series",
  color: ["#5470c6", "#91cc75", "#fac858", "#ee6666", "#73c0de", "#3ba272", "#fc8452", "#9a60b4", "#ea7ccc"],
  gradientColor: ["#f6efa6", "#d88273", "#bf444c"],
  aria: {
    decal: {
      decals: [{
        color: Lr,
        dashArrayX: [1, 0],
        dashArrayY: [2, 5],
        symbolSize: 1,
        rotation: Math.PI / 6
      }, {
        color: Lr,
        symbol: "circle",
        dashArrayX: [[8, 8], [0, 8, 8, 0]],
        dashArrayY: [6, 0],
        symbolSize: 0.8
      }, {
        color: Lr,
        dashArrayX: [1, 0],
        dashArrayY: [4, 3],
        rotation: -Math.PI / 4
      }, {
        color: Lr,
        dashArrayX: [[6, 6], [0, 6, 6, 0]],
        dashArrayY: [6, 0]
      }, {
        color: Lr,
        dashArrayX: [[1, 0], [1, 6]],
        dashArrayY: [1, 0, 6, 0],
        rotation: Math.PI / 4
      }, {
        color: Lr,
        symbol: "triangle",
        dashArrayX: [[9, 9], [0, 9, 9, 0]],
        dashArrayY: [7, 2],
        symbolSize: 0.75
      }]
    }
  },
  // If xAxis and yAxis declared, grid is created by default.
  // grid: {},
  textStyle: {
    // color: '#000',
    // decoration: 'none',
    // PENDING
    fontFamily: fv.match(/^Win/) ? "Microsoft YaHei" : "sans-serif",
    // fontFamily: 'Arial, Verdana, sans-serif',
    fontSize: 12,
    fontStyle: "normal",
    fontWeight: "normal"
  },
  // http://blogs.adobe.com/webplatform/2014/02/24/using-blend-modes-in-html-canvas/
  // https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/globalCompositeOperation
  // Default is source-over
  blendMode: null,
  stateAnimation: {
    duration: 300,
    easing: "cubicOut"
  },
  animation: "auto",
  animationDuration: 1e3,
  animationDurationUpdate: 500,
  animationEasing: "cubicInOut",
  animationEasingUpdate: "cubicInOut",
  animationThreshold: 2e3,
  // Configuration for progressive/incremental rendering
  progressiveThreshold: 3e3,
  progressive: 400,
  // Threshold of if use single hover layer to optimize.
  // It is recommended that `hoverLayerThreshold` is equivalent to or less than
  // `progressiveThreshold`, otherwise hover will cause restart of progressive,
  // which is unexpected.
  // see example <echarts/test/heatmap-large.html>.
  hoverLayerThreshold: 3e3,
  // See: module:echarts/scale/Time
  useUTC: !1
};
var vs = $(["tooltip", "label", "itemName", "itemId", "itemGroupId", "seriesName"]), pe = "original", Bt = "arrayRows", ge = "objectRows", Le = "keyedColumns", be = "typedArray", hv = "unknown", ve = "column", ii = "row", Vt = {
  Must: 1,
  Might: 2,
  Not: 3
  // Other cases
}, o0 = _t();
function s0(r) {
  o0(r).datasetMap = $();
}
function u0(r) {
  var t = r.get("data", !0);
  if (!t)
    return pa(r.ecModel, "dataset", {
      index: r.get("datasetIndex", !0),
      id: r.get("datasetId", !0)
    }, Fs).models[0];
}
function l0(r) {
  return !r.get("transform", !0) && !r.get("fromTransformResult", !0) ? [] : pa(r.ecModel, "dataset", {
    index: r.get("fromDatasetIndex", !0),
    id: r.get("fromDatasetId", !0)
  }, Fs).models;
}
function vv(r, t) {
  return f0(r.data, r.sourceFormat, r.seriesLayoutBy, r.dimensionsDefine, r.startIndex, t);
}
function f0(r, t, e, i, n, a) {
  var o, s = 5;
  if (Nt(r))
    return Vt.Not;
  var u, l;
  if (i) {
    var f = i[a];
    F(f) ? (u = f.name, l = f.type) : Z(f) && (u = f);
  }
  if (l != null)
    return l === "ordinal" ? Vt.Must : Vt.Not;
  if (t === Bt) {
    var h = r;
    if (e === ii) {
      for (var c = h[a], v = 0; v < (c || []).length && v < s; v++)
        if ((o = w(c[n + v])) != null)
          return o;
    } else
      for (var v = 0; v < h.length && v < s; v++) {
        var d = h[n + v];
        if (d && (o = w(d[a])) != null)
          return o;
      }
  } else if (t === ge) {
    var _ = r;
    if (!u)
      return Vt.Not;
    for (var v = 0; v < _.length && v < s; v++) {
      var p = _[v];
      if (p && (o = w(p[u])) != null)
        return o;
    }
  } else if (t === Le) {
    var g = r;
    if (!u)
      return Vt.Not;
    var c = g[u];
    if (!c || Nt(c))
      return Vt.Not;
    for (var v = 0; v < c.length && v < s; v++)
      if ((o = w(c[v])) != null)
        return o;
  } else if (t === pe)
    for (var y = r, v = 0; v < y.length && v < s; v++) {
      var p = y[v], m = ca(p);
      if (!Y(m))
        return Vt.Not;
      if ((o = w(m[a])) != null)
        return o;
    }
  function w(T) {
    var S = Z(T);
    if (T != null && isFinite(T) && T !== "")
      return S ? Vt.Might : Vt.Not;
    if (S && T !== "-")
      return Vt.Must;
  }
  return Vt.Not;
}
var h0 = $();
function v0(r, t, e) {
  var i = h0.get(t);
  if (!i)
    return e;
  var n = i(r);
  if (!n)
    return e;
  if (process.env.NODE_ENV !== "production")
    for (var a = 0; a < n.length; a++)
      U(Xr(n[a]));
  return e.concat(n);
}
var Ml = _t();
_t();
var qs = (
  /** @class */
  function() {
    function r() {
    }
    return r.prototype.getColorFromPalette = function(t, e, i) {
      var n = Mt(this.get("color", !0)), a = this.get("colorLayer", !0);
      return d0(this, Ml, n, a, t, e, i);
    }, r.prototype.clearColorPalette = function() {
      p0(this, Ml);
    }, r;
  }()
);
function c0(r, t) {
  for (var e = r.length, i = 0; i < e; i++)
    if (r[i].length > t)
      return r[i];
  return r[e - 1];
}
function d0(r, t, e, i, n, a, o) {
  a = a || r;
  var s = t(a), u = s.paletteIdx || 0, l = s.paletteNameMap = s.paletteNameMap || {};
  if (l.hasOwnProperty(n))
    return l[n];
  var f = o == null || !i ? e : c0(i, o);
  if (f = f || e, !(!f || !f.length)) {
    var h = f[u];
    return n && (l[n] = h), s.paletteIdx = (u + 1) % f.length, h;
  }
}
function p0(r, t) {
  t(r).paletteIdx = 0, t(r).paletteNameMap = {};
}
var cn, pi, Ll, vo = "\0_ec_inner", xl = 1, g0 = {
  grid: "GridComponent",
  polar: "PolarComponent",
  geo: "GeoComponent",
  singleAxis: "SingleAxisComponent",
  parallel: "ParallelComponent",
  calendar: "CalendarComponent",
  graphic: "GraphicComponent",
  toolbox: "ToolboxComponent",
  tooltip: "TooltipComponent",
  axisPointer: "AxisPointerComponent",
  brush: "BrushComponent",
  title: "TitleComponent",
  timeline: "TimelineComponent",
  markPoint: "MarkPointComponent",
  markLine: "MarkLineComponent",
  markArea: "MarkAreaComponent",
  legend: "LegendComponent",
  dataZoom: "DataZoomComponent",
  visualMap: "VisualMapComponent",
  // aria: 'AriaComponent',
  // dataset: 'DatasetComponent',
  // Dependencies
  xAxis: "GridComponent",
  yAxis: "GridComponent",
  angleAxis: "PolarComponent",
  radiusAxis: "PolarComponent"
}, _0 = {
  line: "LineChart",
  bar: "BarChart",
  pie: "PieChart",
  scatter: "ScatterChart",
  radar: "RadarChart",
  map: "MapChart",
  tree: "TreeChart",
  treemap: "TreemapChart",
  graph: "GraphChart",
  gauge: "GaugeChart",
  funnel: "FunnelChart",
  parallel: "ParallelChart",
  sankey: "SankeyChart",
  boxplot: "BoxplotChart",
  candlestick: "CandlestickChart",
  effectScatter: "EffectScatterChart",
  lines: "LinesChart",
  heatmap: "HeatmapChart",
  pictorialBar: "PictorialBarChart",
  themeRiver: "ThemeRiverChart",
  sunburst: "SunburstChart",
  custom: "CustomChart"
}, jn = {};
function y0(r) {
  L(r, function(t, e) {
    if (!st.hasClass(e)) {
      var i = g0[e];
      i && !jn[i] && (wt("Component " + e + ` is used but not imported.
import { ` + i + ` } from 'echarts/components';
echarts.use([` + i + "]);"), jn[i] = !0);
    }
  });
}
var cv = (
  /** @class */
  function(r) {
    j(t, r);
    function t() {
      return r !== null && r.apply(this, arguments) || this;
    }
    return t.prototype.init = function(e, i, n, a, o, s) {
      a = a || {}, this.option = null, this._theme = new Fe(a), this._locale = new Fe(o), this._optionManager = s;
    }, t.prototype.setOption = function(e, i, n) {
      process.env.NODE_ENV !== "production" && (U(e != null, "option is null/undefined"), U(e[vo] !== xl, "please use chart.getOption()"));
      var a = Il(i);
      this._optionManager.setOption(e, n, a), this._resetOption(null, a);
    }, t.prototype.resetOption = function(e, i) {
      return this._resetOption(e, Il(i));
    }, t.prototype._resetOption = function(e, i) {
      var n = !1, a = this._optionManager;
      if (!e || e === "recreate") {
        var o = a.mountOption(e === "recreate");
        process.env.NODE_ENV !== "production" && y0(o), !this.option || e === "recreate" ? Ll(this, o) : (this.restoreData(), this._mergeOption(o, i)), n = !0;
      }
      if ((e === "timeline" || e === "media") && this.restoreData(), !e || e === "recreate" || e === "timeline") {
        var s = a.getTimelineOption(this);
        s && (n = !0, this._mergeOption(s, i));
      }
      if (!e || e === "recreate" || e === "media") {
        var u = a.getMediaOption(this);
        u.length && L(u, function(l) {
          n = !0, this._mergeOption(l, i);
        }, this);
      }
      return n;
    }, t.prototype.mergeOption = function(e) {
      this._mergeOption(e, null);
    }, t.prototype._mergeOption = function(e, i) {
      var n = this.option, a = this._componentsMap, o = this._componentsCount, s = [], u = $(), l = i && i.replaceMergeMainTypeMap;
      s0(this), L(e, function(h, c) {
        h != null && (st.hasClass(c) ? c && (s.push(c), u.set(c, !0)) : n[c] = n[c] == null ? K(h) : ft(n[c], h, !0));
      }), l && l.each(function(h, c) {
        st.hasClass(c) && !u.get(c) && (s.push(c), u.set(c, !0));
      }), st.topologicalTravel(s, st.getAllClassMainTypes(), f, this);
      function f(h) {
        var c = v0(this, h, Mt(e[h])), v = a.get(h), d = (
          // `!oldCmptList` means init. See the comment in `mappingToExists`
          v ? l && l.get(h) ? "replaceMerge" : "normalMerge" : "replaceAll"
        ), _ = Tp(v, c, d);
        xp(_, h, st), n[h] = null, a.set(h, null), o.set(h, 0);
        var p = [], g = [], y = 0, m, w;
        L(_, function(T, S) {
          var D = T.existing, C = T.newOption;
          if (!C)
            D && (D.mergeOption({}, this), D.optionUpdated({}, !1));
          else {
            var b = h === "series", M = st.getClass(
              h,
              T.keyInfo.subType,
              !b
              // Give a more detailed warn later if series don't exists
            );
            if (!M) {
              if (process.env.NODE_ENV !== "production") {
                var E = T.keyInfo.subType, P = _0[E];
                jn[E] || (jn[E] = !0, wt(P ? "Series " + E + ` is used but not imported.
import { ` + P + ` } from 'echarts/charts';
echarts.use([` + P + "]);" : "Unknown series " + E));
              }
              return;
            }
            if (h === "tooltip") {
              if (m) {
                process.env.NODE_ENV !== "production" && (w || (Te("Currently only one tooltip component is allowed."), w = !0));
                return;
              }
              m = !0;
            }
            if (D && D.constructor === M)
              D.name = T.keyInfo.name, D.mergeOption(C, this), D.optionUpdated(C, !1);
            else {
              var x = N({
                componentIndex: S
              }, T.keyInfo);
              D = new M(C, this, this, x), N(D, x), T.brandNew && (D.__requireNewView = !0), D.init(C, this, this), D.optionUpdated(null, !0);
            }
          }
          D ? (p.push(D.option), g.push(D), y++) : (p.push(void 0), g.push(void 0));
        }, this), n[h] = p, a.set(h, g), o.set(h, y), h === "series" && cn(this);
      }
      this._seriesIndices || cn(this);
    }, t.prototype.getOption = function() {
      var e = K(this.option);
      return L(e, function(i, n) {
        if (st.hasClass(n)) {
          for (var a = Mt(i), o = a.length, s = !1, u = o - 1; u >= 0; u--)
            a[u] && !Xr(a[u]) ? s = !0 : (a[u] = null, !s && o--);
          a.length = o, e[n] = a;
        }
      }), delete e[vo], e;
    }, t.prototype.getTheme = function() {
      return this._theme;
    }, t.prototype.getLocaleModel = function() {
      return this._locale;
    }, t.prototype.setUpdatePayload = function(e) {
      this._payload = e;
    }, t.prototype.getUpdatePayload = function() {
      return this._payload;
    }, t.prototype.getComponent = function(e, i) {
      var n = this._componentsMap.get(e);
      if (n) {
        var a = n[i || 0];
        if (a)
          return a;
        if (i == null) {
          for (var o = 0; o < n.length; o++)
            if (n[o])
              return n[o];
        }
      }
    }, t.prototype.queryComponents = function(e) {
      var i = e.mainType;
      if (!i)
        return [];
      var n = e.index, a = e.id, o = e.name, s = this._componentsMap.get(i);
      if (!s || !s.length)
        return [];
      var u;
      return n != null ? (u = [], L(Mt(n), function(l) {
        s[l] && u.push(s[l]);
      })) : a != null ? u = Pl("id", a, s) : o != null ? u = Pl("name", o, s) : u = It(s, function(l) {
        return !!l;
      }), Rl(u, e);
    }, t.prototype.findComponents = function(e) {
      var i = e.query, n = e.mainType, a = s(i), o = a ? this.queryComponents(a) : It(this._componentsMap.get(n), function(l) {
        return !!l;
      });
      return u(Rl(o, e));
      function s(l) {
        var f = n + "Index", h = n + "Id", c = n + "Name";
        return l && (l[f] != null || l[h] != null || l[c] != null) ? {
          mainType: n,
          // subType will be filtered finally.
          index: l[f],
          id: l[h],
          name: l[c]
        } : null;
      }
      function u(l) {
        return e.filter ? It(l, e.filter) : l;
      }
    }, t.prototype.eachComponent = function(e, i, n) {
      var a = this._componentsMap;
      if (J(e)) {
        var o = i, s = e;
        a.each(function(h, c) {
          for (var v = 0; h && v < h.length; v++) {
            var d = h[v];
            d && s.call(o, c, d, d.componentIndex);
          }
        });
      } else
        for (var u = Z(e) ? a.get(e) : F(e) ? this.findComponents(e) : null, l = 0; u && l < u.length; l++) {
          var f = u[l];
          f && i.call(n, f, f.componentIndex);
        }
    }, t.prototype.getSeriesByName = function(e) {
      var i = he(e, null);
      return It(this._componentsMap.get("series"), function(n) {
        return !!n && i != null && n.name === i;
      });
    }, t.prototype.getSeriesByIndex = function(e) {
      return this._componentsMap.get("series")[e];
    }, t.prototype.getSeriesByType = function(e) {
      return It(this._componentsMap.get("series"), function(i) {
        return !!i && i.subType === e;
      });
    }, t.prototype.getSeries = function() {
      return It(this._componentsMap.get("series"), function(e) {
        return !!e;
      });
    }, t.prototype.getSeriesCount = function() {
      return this._componentsCount.get("series");
    }, t.prototype.eachSeries = function(e, i) {
      pi(this), L(this._seriesIndices, function(n) {
        var a = this._componentsMap.get("series")[n];
        e.call(i, a, n);
      }, this);
    }, t.prototype.eachRawSeries = function(e, i) {
      L(this._componentsMap.get("series"), function(n) {
        n && e.call(i, n, n.componentIndex);
      });
    }, t.prototype.eachSeriesByType = function(e, i, n) {
      pi(this), L(this._seriesIndices, function(a) {
        var o = this._componentsMap.get("series")[a];
        o.subType === e && i.call(n, o, a);
      }, this);
    }, t.prototype.eachRawSeriesByType = function(e, i, n) {
      return L(this.getSeriesByType(e), i, n);
    }, t.prototype.isSeriesFiltered = function(e) {
      return pi(this), this._seriesIndicesMap.get(e.componentIndex) == null;
    }, t.prototype.getCurrentSeriesIndices = function() {
      return (this._seriesIndices || []).slice();
    }, t.prototype.filterSeries = function(e, i) {
      pi(this);
      var n = [];
      L(this._seriesIndices, function(a) {
        var o = this._componentsMap.get("series")[a];
        e.call(i, o, a) && n.push(a);
      }, this), this._seriesIndices = n, this._seriesIndicesMap = $(n);
    }, t.prototype.restoreData = function(e) {
      cn(this);
      var i = this._componentsMap, n = [];
      i.each(function(a, o) {
        st.hasClass(o) && n.push(o);
      }), st.topologicalTravel(n, st.getAllClassMainTypes(), function(a) {
        L(i.get(a), function(o) {
          o && (a !== "series" || !m0(o, e)) && o.restoreData();
        });
      });
    }, t.internalField = function() {
      cn = function(e) {
        var i = e._seriesIndices = [];
        L(e._componentsMap.get("series"), function(n) {
          n && i.push(n.componentIndex);
        }), e._seriesIndicesMap = $(i);
      }, pi = function(e) {
        if (process.env.NODE_ENV !== "production" && !e._seriesIndices)
          throw new Error("Option should contains series.");
      }, Ll = function(e, i) {
        e.option = {}, e.option[vo] = xl, e._componentsMap = $({
          series: []
        }), e._componentsCount = $();
        var n = i.aria;
        F(n) && n.enabled == null && (n.enabled = !0), w0(i, e._theme.option), ft(i, a0, !1), e._mergeOption(i, null);
      };
    }(), t;
  }(Fe)
);
function m0(r, t) {
  if (t) {
    var e = t.seriesIndex, i = t.seriesId, n = t.seriesName;
    return e != null && r.componentIndex !== e || i != null && r.id !== i || n != null && r.name !== n;
  }
}
function w0(r, t) {
  var e = r.color && !r.colorLayer;
  L(t, function(i, n) {
    n === "colorLayer" && e || st.hasClass(n) || (typeof i == "object" ? r[n] = r[n] ? ft(r[n], i, !1) : K(i) : r[n] == null && (r[n] = i));
  });
}
function Pl(r, t, e) {
  if (Y(t)) {
    var i = $();
    return L(t, function(a) {
      if (a != null) {
        var o = he(a, null);
        o != null && i.set(a, !0);
      }
    }), It(e, function(a) {
      return a && i.get(a[r]);
    });
  } else {
    var n = he(t, null);
    return It(e, function(a) {
      return a && n != null && a[r] === n;
    });
  }
}
function Rl(r, t) {
  return t.hasOwnProperty("subType") ? It(r, function(e) {
    return e && e.subType === t.subType;
  }) : r;
}
function Il(r) {
  var t = $();
  return r && L(Mt(r.replaceMerge), function(e) {
    process.env.NODE_ENV !== "production" && U(st.hasClass(e), '"' + e + '" is not valid component main type in "replaceMerge"'), t.set(e, !0);
  }), {
    replaceMergeMainTypeMap: t
  };
}
Ee(cv, qs);
const dv = cv;
var S0 = [
  "getDom",
  "getZr",
  "getWidth",
  "getHeight",
  "getDevicePixelRatio",
  "dispatchAction",
  "isSSR",
  "isDisposed",
  "on",
  "off",
  "getDataURL",
  "getConnectedDataURL",
  // 'getModel',
  "getOption",
  // 'getViewOfComponentModel',
  // 'getViewOfSeriesModel',
  "getId",
  "updateLabelLayout"
], T0 = (
  /** @class */
  function() {
    function r(t) {
      L(S0, function(e) {
        this[e] = At(t[e], t);
      }, this);
    }
    return r;
  }()
);
const pv = T0;
var co = {}, D0 = (
  /** @class */
  function() {
    function r() {
      this._coordinateSystems = [];
    }
    return r.prototype.create = function(t, e) {
      var i = [];
      L(co, function(n, a) {
        var o = n.create(t, e);
        i = i.concat(o || []);
      }), this._coordinateSystems = i;
    }, r.prototype.update = function(t, e) {
      L(this._coordinateSystems, function(i) {
        i.update && i.update(t, e);
      });
    }, r.prototype.getCoordinateSystems = function() {
      return this._coordinateSystems.slice();
    }, r.register = function(t, e) {
      co[t] = e;
    }, r.get = function(t) {
      return co[t];
    }, r;
  }()
);
const gv = D0;
var C0 = /^(min|max)?(.+)$/, b0 = (
  /** @class */
  function() {
    function r(t) {
      this._timelineOptions = [], this._mediaList = [], this._currentMediaIndices = [], this._api = t;
    }
    return r.prototype.setOption = function(t, e, i) {
      t && (L(Mt(t.series), function(o) {
        o && o.data && Nt(o.data) && Hn(o.data);
      }), L(Mt(t.dataset), function(o) {
        o && o.source && Nt(o.source) && Hn(o.source);
      })), t = K(t);
      var n = this._optionBackup, a = E0(t, e, !n);
      this._newBaseOption = a.baseOption, n ? (a.timelineOptions.length && (n.timelineOptions = a.timelineOptions), a.mediaList.length && (n.mediaList = a.mediaList), a.mediaDefault && (n.mediaDefault = a.mediaDefault)) : this._optionBackup = a;
    }, r.prototype.mountOption = function(t) {
      var e = this._optionBackup;
      return this._timelineOptions = e.timelineOptions, this._mediaList = e.mediaList, this._mediaDefault = e.mediaDefault, this._currentMediaIndices = [], K(t ? e.baseOption : this._newBaseOption);
    }, r.prototype.getTimelineOption = function(t) {
      var e, i = this._timelineOptions;
      if (i.length) {
        var n = t.getComponent("timeline");
        n && (e = K(
          // FIXME:TS as TimelineModel or quivlant interface
          i[n.getCurrentIndex()]
        ));
      }
      return e;
    }, r.prototype.getMediaOption = function(t) {
      var e = this._api.getWidth(), i = this._api.getHeight(), n = this._mediaList, a = this._mediaDefault, o = [], s = [];
      if (!n.length && !a)
        return s;
      for (var u = 0, l = n.length; u < l; u++)
        M0(n[u].query, e, i) && o.push(u);
      return !o.length && a && (o = [-1]), o.length && !x0(o, this._currentMediaIndices) && (s = it(o, function(f) {
        return K(f === -1 ? a.option : n[f].option);
      })), this._currentMediaIndices = o, s;
    }, r;
  }()
);
function E0(r, t, e) {
  var i = [], n, a, o = r.baseOption, s = r.timeline, u = r.options, l = r.media, f = !!r.media, h = !!(u || s || o && o.timeline);
  o ? (a = o, a.timeline || (a.timeline = s)) : ((h || f) && (r.options = r.media = null), a = r), f && (Y(l) ? L(l, function(v) {
    process.env.NODE_ENV !== "production" && v && !v.option && F(v.query) && F(v.query.option) && wt("Illegal media option. Must be like { media: [ { query: {}, option: {} } ] }"), v && v.option && (v.query ? i.push(v) : n || (n = v));
  }) : process.env.NODE_ENV !== "production" && wt("Illegal media option. Must be an array. Like { media: [ {...}, {...} ] }")), c(a), L(u, function(v) {
    return c(v);
  }), L(i, function(v) {
    return c(v.option);
  });
  function c(v) {
    L(t, function(d) {
      d(v, e);
    });
  }
  return {
    baseOption: a,
    timelineOptions: u || [],
    mediaDefault: n,
    mediaList: i
  };
}
function M0(r, t, e) {
  var i = {
    width: t,
    height: e,
    aspectratio: t / e
    // lower case for convenience.
  }, n = !0;
  return L(r, function(a, o) {
    var s = o.match(C0);
    if (!(!s || !s[1] || !s[2])) {
      var u = s[1], l = s[2].toLowerCase();
      L0(i[l], a, u) || (n = !1);
    }
  }), n;
}
function L0(r, t, e) {
  return e === "min" ? r >= t : e === "max" ? r <= t : r === t;
}
function x0(r, t) {
  return r.join(",") === t.join(",");
}
const P0 = b0;
var $t = L, Wi = F, Al = ["areaStyle", "lineStyle", "nodeStyle", "linkStyle", "chordStyle", "label", "labelLine"];
function po(r) {
  var t = r && r.itemStyle;
  if (t)
    for (var e = 0, i = Al.length; e < i; e++) {
      var n = Al[e], a = t.normal, o = t.emphasis;
      a && a[n] && (process.env.NODE_ENV !== "production" && gt("itemStyle.normal." + n, n), r[n] = r[n] || {}, r[n].normal ? ft(r[n].normal, a[n]) : r[n].normal = a[n], a[n] = null), o && o[n] && (process.env.NODE_ENV !== "production" && gt("itemStyle.emphasis." + n, "emphasis." + n), r[n] = r[n] || {}, r[n].emphasis ? ft(r[n].emphasis, o[n]) : r[n].emphasis = o[n], o[n] = null);
    }
}
function mt(r, t, e) {
  if (r && r[t] && (r[t].normal || r[t].emphasis)) {
    var i = r[t].normal, n = r[t].emphasis;
    i && (process.env.NODE_ENV !== "production" && ce("'normal' hierarchy in " + t + " has been removed since 4.0. All style properties are configured in " + t + " directly now."), e ? (r[t].normal = r[t].emphasis = null, Lt(r[t], i)) : r[t] = i), n && (process.env.NODE_ENV !== "production" && ce(t + ".emphasis has been changed to emphasis." + t + " since 4.0"), r.emphasis = r.emphasis || {}, r.emphasis[t] = n, n.focus && (r.emphasis.focus = n.focus), n.blurScope && (r.emphasis.blurScope = n.blurScope));
  }
}
function Ii(r) {
  mt(r, "itemStyle"), mt(r, "lineStyle"), mt(r, "areaStyle"), mt(r, "label"), mt(r, "labelLine"), mt(r, "upperLabel"), mt(r, "edgeLabel");
}
function ut(r, t) {
  var e = Wi(r) && r[t], i = Wi(e) && e.textStyle;
  if (i) {
    process.env.NODE_ENV !== "production" && ce("textStyle hierarchy in " + t + " has been removed since 4.0. All textStyle properties are configured in " + t + " directly now.");
    for (var n = 0, a = Uu.length; n < a; n++) {
      var o = Uu[n];
      i.hasOwnProperty(o) && (e[o] = i[o]);
    }
  }
}
function Zt(r) {
  r && (Ii(r), ut(r, "label"), r.emphasis && ut(r.emphasis, "label"));
}
function R0(r) {
  if (Wi(r)) {
    po(r), Ii(r), ut(r, "label"), ut(r, "upperLabel"), ut(r, "edgeLabel"), r.emphasis && (ut(r.emphasis, "label"), ut(r.emphasis, "upperLabel"), ut(r.emphasis, "edgeLabel"));
    var t = r.markPoint;
    t && (po(t), Zt(t));
    var e = r.markLine;
    e && (po(e), Zt(e));
    var i = r.markArea;
    i && Zt(i);
    var n = r.data;
    if (r.type === "graph") {
      n = n || r.nodes;
      var a = r.links || r.edges;
      if (a && !Nt(a))
        for (var o = 0; o < a.length; o++)
          Zt(a[o]);
      L(r.categories, function(l) {
        Ii(l);
      });
    }
    if (n && !Nt(n))
      for (var o = 0; o < n.length; o++)
        Zt(n[o]);
    if (t = r.markPoint, t && t.data)
      for (var s = t.data, o = 0; o < s.length; o++)
        Zt(s[o]);
    if (e = r.markLine, e && e.data)
      for (var u = e.data, o = 0; o < u.length; o++)
        Y(u[o]) ? (Zt(u[o][0]), Zt(u[o][1])) : Zt(u[o]);
    r.type === "gauge" ? (ut(r, "axisLabel"), ut(r, "title"), ut(r, "detail")) : r.type === "treemap" ? (mt(r.breadcrumb, "itemStyle"), L(r.levels, function(l) {
      Ii(l);
    })) : r.type === "tree" && Ii(r.leaves);
  }
}
function me(r) {
  return Y(r) ? r : r ? [r] : [];
}
function Ol(r) {
  return (Y(r) ? r[0] : r) || {};
}
function I0(r, t) {
  $t(me(r.series), function(i) {
    Wi(i) && R0(i);
  });
  var e = ["xAxis", "yAxis", "radiusAxis", "angleAxis", "singleAxis", "parallelAxis", "radar"];
  t && e.push("valueAxis", "categoryAxis", "logAxis", "timeAxis"), $t(e, function(i) {
    $t(me(r[i]), function(n) {
      n && (ut(n, "axisLabel"), ut(n.axisPointer, "label"));
    });
  }), $t(me(r.parallel), function(i) {
    var n = i && i.parallelAxisDefault;
    ut(n, "axisLabel"), ut(n && n.axisPointer, "label");
  }), $t(me(r.calendar), function(i) {
    mt(i, "itemStyle"), ut(i, "dayLabel"), ut(i, "monthLabel"), ut(i, "yearLabel");
  }), $t(me(r.radar), function(i) {
    ut(i, "name"), i.name && i.axisName == null && (i.axisName = i.name, delete i.name, process.env.NODE_ENV !== "production" && ce("name property in radar component has been changed to axisName")), i.nameGap != null && i.axisNameGap == null && (i.axisNameGap = i.nameGap, delete i.nameGap, process.env.NODE_ENV !== "production" && ce("nameGap property in radar component has been changed to axisNameGap")), process.env.NODE_ENV !== "production" && $t(i.indicator, function(n) {
      n.text && gt("text", "name", "radar.indicator");
    });
  }), $t(me(r.geo), function(i) {
    Wi(i) && (Zt(i), $t(me(i.regions), function(n) {
      Zt(n);
    }));
  }), $t(me(r.timeline), function(i) {
    Zt(i), mt(i, "label"), mt(i, "itemStyle"), mt(i, "controlStyle", !0);
    var n = i.data;
    Y(n) && L(n, function(a) {
      F(a) && (mt(a, "label"), mt(a, "itemStyle"));
    });
  }), $t(me(r.toolbox), function(i) {
    mt(i, "iconStyle"), $t(i.feature, function(n) {
      mt(n, "iconStyle");
    });
  }), ut(Ol(r.axisPointer), "label"), ut(Ol(r.tooltip).axisPointer, "label");
}
function A0(r, t) {
  for (var e = t.split(","), i = r, n = 0; n < e.length && (i = i && i[e[n]], i != null); n++)
    ;
  return i;
}
function O0(r, t, e, i) {
  for (var n = t.split(","), a = r, o, s = 0; s < n.length - 1; s++)
    o = n[s], a[o] == null && (a[o] = {}), a = a[o];
  (i || a[n[s]] == null) && (a[n[s]] = e);
}
function Nl(r) {
  r && L(N0, function(t) {
    t[0] in r && !(t[1] in r) && (r[t[1]] = r[t[0]]);
  });
}
var N0 = [["x", "left"], ["y", "top"], ["x2", "right"], ["y2", "bottom"]], B0 = ["grid", "geo", "parallel", "legend", "toolbox", "title", "visualMap", "dataZoom", "timeline"], go = [["borderRadius", "barBorderRadius"], ["borderColor", "barBorderColor"], ["borderWidth", "barBorderWidth"]];
function gi(r) {
  var t = r && r.itemStyle;
  if (t)
    for (var e = 0; e < go.length; e++) {
      var i = go[e][1], n = go[e][0];
      t[i] != null && (t[n] = t[i], process.env.NODE_ENV !== "production" && gt(i, n));
    }
}
function Bl(r) {
  r && r.alignTo === "edge" && r.margin != null && r.edgeDistance == null && (process.env.NODE_ENV !== "production" && gt("label.margin", "label.edgeDistance", "pie"), r.edgeDistance = r.margin);
}
function kl(r) {
  r && r.downplay && !r.blur && (r.blur = r.downplay, process.env.NODE_ENV !== "production" && gt("downplay", "blur", "sunburst"));
}
function k0(r) {
  r && r.focusNodeAdjacency != null && (r.emphasis = r.emphasis || {}, r.emphasis.focus == null && (process.env.NODE_ENV !== "production" && gt("focusNodeAdjacency", "emphasis: { focus: 'adjacency'}", "graph/sankey"), r.emphasis.focus = "adjacency"));
}
function _v(r, t) {
  if (r)
    for (var e = 0; e < r.length; e++)
      t(r[e]), r[e] && _v(r[e].children, t);
}
function yv(r, t) {
  I0(r, t), r.series = Mt(r.series), L(r.series, function(e) {
    if (F(e)) {
      var i = e.type;
      if (i === "line")
        e.clipOverflow != null && (e.clip = e.clipOverflow, process.env.NODE_ENV !== "production" && gt("clipOverflow", "clip", "line"));
      else if (i === "pie" || i === "gauge") {
        e.clockWise != null && (e.clockwise = e.clockWise, process.env.NODE_ENV !== "production" && gt("clockWise", "clockwise")), Bl(e.label);
        var n = e.data;
        if (n && !Nt(n))
          for (var a = 0; a < n.length; a++)
            Bl(n[a]);
        e.hoverOffset != null && (e.emphasis = e.emphasis || {}, (e.emphasis.scaleSize = null) && (process.env.NODE_ENV !== "production" && gt("hoverOffset", "emphasis.scaleSize"), e.emphasis.scaleSize = e.hoverOffset));
      } else if (i === "gauge") {
        var o = A0(e, "pointer.color");
        o != null && O0(e, "itemStyle.color", o);
      } else if (i === "bar") {
        gi(e), gi(e.backgroundStyle), gi(e.emphasis);
        var n = e.data;
        if (n && !Nt(n))
          for (var a = 0; a < n.length; a++)
            typeof n[a] == "object" && (gi(n[a]), gi(n[a] && n[a].emphasis));
      } else if (i === "sunburst") {
        var s = e.highlightPolicy;
        s && (e.emphasis = e.emphasis || {}, e.emphasis.focus || (e.emphasis.focus = s, process.env.NODE_ENV !== "production" && gt("highlightPolicy", "emphasis.focus", "sunburst"))), kl(e), _v(e.data, kl);
      } else
        i === "graph" || i === "sankey" ? k0(e) : i === "map" && (e.mapType && !e.map && (process.env.NODE_ENV !== "production" && gt("mapType", "map", "map"), e.map = e.mapType), e.mapLocation && (process.env.NODE_ENV !== "production" && ce("`mapLocation` is not used anymore."), Lt(e, e.mapLocation)));
      e.hoverAnimation != null && (e.emphasis = e.emphasis || {}, e.emphasis && e.emphasis.scale == null && (process.env.NODE_ENV !== "production" && gt("hoverAnimation", "emphasis.scale"), e.emphasis.scale = e.hoverAnimation)), Nl(e);
    }
  }), r.dataRange && (r.visualMap = r.dataRange), L(B0, function(e) {
    var i = r[e];
    i && (Y(i) || (i = [i]), L(i, function(n) {
      Nl(n);
    }));
  });
}
function F0(r) {
  var t = $();
  r.eachSeries(function(e) {
    var i = e.get("stack");
    if (i) {
      var n = t.get(i) || t.set(i, []), a = e.getData(), o = {
        // Used for calculate axis extent automatically.
        // TODO: Type getCalculationInfo return more specific type?
        stackResultDimension: a.getCalculationInfo("stackResultDimension"),
        stackedOverDimension: a.getCalculationInfo("stackedOverDimension"),
        stackedDimension: a.getCalculationInfo("stackedDimension"),
        stackedByDimension: a.getCalculationInfo("stackedByDimension"),
        isStackedByIndex: a.getCalculationInfo("isStackedByIndex"),
        data: a,
        seriesModel: e
      };
      if (!o.stackedDimension || !(o.isStackedByIndex || o.stackedByDimension))
        return;
      n.length && a.setCalculationInfo("stackedOnSeries", n[n.length - 1].seriesModel), n.push(o);
    }
  }), t.each(V0);
}
function V0(r) {
  L(r, function(t, e) {
    var i = [], n = [NaN, NaN], a = [t.stackResultDimension, t.stackedOverDimension], o = t.data, s = t.isStackedByIndex, u = t.seriesModel.get("stackStrategy") || "samesign";
    o.modify(a, function(l, f, h) {
      var c = o.get(t.stackedDimension, h);
      if (isNaN(c))
        return n;
      var v, d;
      s ? d = o.getRawIndex(h) : v = o.get(t.stackedByDimension, h);
      for (var _ = NaN, p = e - 1; p >= 0; p--) {
        var g = r[p];
        if (s || (d = g.data.rawIndexOf(g.stackedByDimension, v)), d >= 0) {
          var y = g.data.getByRawIndex(g.stackResultDimension, d);
          if (u === "all" || u === "positive" && y > 0 || u === "negative" && y < 0 || u === "samesign" && c >= 0 && y > 0 || u === "samesign" && c <= 0 && y < 0) {
            c = vp(c, y), _ = y;
            break;
          }
        }
      }
      return i[0] = c, i[1] = _, i;
    });
  });
}
var Ta = (
  /** @class */
  function() {
    function r(t) {
      this.data = t.data || (t.sourceFormat === Le ? {} : []), this.sourceFormat = t.sourceFormat || hv, this.seriesLayoutBy = t.seriesLayoutBy || ve, this.startIndex = t.startIndex || 0, this.dimensionsDetectedCount = t.dimensionsDetectedCount, this.metaRawOption = t.metaRawOption;
      var e = this.dimensionsDefine = t.dimensionsDefine;
      if (e)
        for (var i = 0; i < e.length; i++) {
          var n = e[i];
          n.type == null && vv(this, i) === Vt.Must && (n.type = "ordinal");
        }
    }
    return r;
  }()
);
function Zs(r) {
  return r instanceof Ta;
}
function cs(r, t, e) {
  e = e || wv(r);
  var i = t.seriesLayoutBy, n = H0(r, e, i, t.sourceHeader, t.dimensions), a = new Ta({
    data: r,
    sourceFormat: e,
    seriesLayoutBy: i,
    dimensionsDefine: n.dimensionsDefine,
    startIndex: n.startIndex,
    dimensionsDetectedCount: n.dimensionsDetectedCount,
    metaRawOption: K(t)
  });
  return a;
}
function mv(r) {
  return new Ta({
    data: r,
    sourceFormat: Nt(r) ? be : pe
  });
}
function z0(r) {
  return new Ta({
    data: r.data,
    sourceFormat: r.sourceFormat,
    seriesLayoutBy: r.seriesLayoutBy,
    dimensionsDefine: K(r.dimensionsDefine),
    startIndex: r.startIndex,
    dimensionsDetectedCount: r.dimensionsDetectedCount
  });
}
function wv(r) {
  var t = hv;
  if (Nt(r))
    t = be;
  else if (Y(r)) {
    r.length === 0 && (t = Bt);
    for (var e = 0, i = r.length; e < i; e++) {
      var n = r[e];
      if (n != null) {
        if (Y(n)) {
          t = Bt;
          break;
        } else if (F(n)) {
          t = ge;
          break;
        }
      }
    }
  } else if (F(r)) {
    for (var a in r)
      if (Un(r, a) && Wt(r[a])) {
        t = Le;
        break;
      }
  }
  return t;
}
function H0(r, t, e, i, n) {
  var a, o;
  if (!r)
    return {
      dimensionsDefine: Fl(n),
      startIndex: o,
      dimensionsDetectedCount: a
    };
  if (t === Bt) {
    var s = r;
    i === "auto" || i == null ? Vl(function(l) {
      l != null && l !== "-" && (Z(l) ? o == null && (o = 1) : o = 0);
    }, e, s, 10) : o = Et(i) ? i : i ? 1 : 0, !n && o === 1 && (n = [], Vl(function(l, f) {
      n[f] = l != null ? l + "" : "";
    }, e, s, 1 / 0)), a = n ? n.length : e === ii ? s.length : s[0] ? s[0].length : null;
  } else if (t === ge)
    n || (n = U0(r));
  else if (t === Le)
    n || (n = [], L(r, function(l, f) {
      n.push(f);
    }));
  else if (t === pe) {
    var u = ca(r[0]);
    a = Y(u) && u.length || 1;
  } else
    t === be && process.env.NODE_ENV !== "production" && U(!!n, "dimensions must be given if data is TypedArray.");
  return {
    startIndex: o,
    dimensionsDefine: Fl(n),
    dimensionsDetectedCount: a
  };
}
function U0(r) {
  for (var t = 0, e; t < r.length && !(e = r[t++]); )
    ;
  if (e)
    return lt(e);
}
function Fl(r) {
  if (r) {
    var t = $();
    return it(r, function(e, i) {
      e = F(e) ? e : {
        name: e
      };
      var n = {
        name: e.name,
        displayName: e.displayName,
        type: e.type
      };
      if (n.name == null)
        return n;
      n.name += "", n.displayName == null && (n.displayName = n.name);
      var a = t.get(n.name);
      return a ? n.name += "-" + a.count++ : t.set(n.name, {
        count: 1
      }), n;
    });
  }
}
function Vl(r, t, e, i) {
  if (t === ii)
    for (var n = 0; n < e.length && n < i; n++)
      r(e[n] ? e[n][0] : null, n);
  else
    for (var a = e[0] || [], n = 0; n < a.length && n < i; n++)
      r(a[n], n);
}
function Sv(r) {
  var t = r.sourceFormat;
  return t === ge || t === Le;
}
var er, rr, ir, zl, Hl, Tv = (
  /** @class */
  function() {
    function r(t, e) {
      var i = Zs(t) ? t : mv(t);
      this._source = i;
      var n = this._data = i.data;
      if (i.sourceFormat === be) {
        if (process.env.NODE_ENV !== "production" && e == null)
          throw new Error("Typed array data must specify dimension size");
        this._offset = 0, this._dimSize = e, this._data = n;
      }
      Hl(this, n, i);
    }
    return r.prototype.getSource = function() {
      return this._source;
    }, r.prototype.count = function() {
      return 0;
    }, r.prototype.getItem = function(t, e) {
    }, r.prototype.appendData = function(t) {
    }, r.prototype.clean = function() {
    }, r.protoInitialize = function() {
      var t = r.prototype;
      t.pure = !1, t.persistent = !0;
    }(), r.internalField = function() {
      var t;
      Hl = function(o, s, u) {
        var l = u.sourceFormat, f = u.seriesLayoutBy, h = u.startIndex, c = u.dimensionsDefine, v = zl[Ks(l, f)];
        if (process.env.NODE_ENV !== "production" && U(v, "Invalide sourceFormat: " + l), N(o, v), l === be)
          o.getItem = e, o.count = n, o.fillStorage = i;
        else {
          var d = Dv(l, f);
          o.getItem = At(d, null, s, h, c);
          var _ = Cv(l, f);
          o.count = At(_, null, s, h, c);
        }
      };
      var e = function(o, s) {
        o = o - this._offset, s = s || [];
        for (var u = this._data, l = this._dimSize, f = l * o, h = 0; h < l; h++)
          s[h] = u[f + h];
        return s;
      }, i = function(o, s, u, l) {
        for (var f = this._data, h = this._dimSize, c = 0; c < h; c++) {
          for (var v = l[c], d = v[0] == null ? 1 / 0 : v[0], _ = v[1] == null ? -1 / 0 : v[1], p = s - o, g = u[c], y = 0; y < p; y++) {
            var m = f[y * h + c];
            g[o + y] = m, m < d && (d = m), m > _ && (_ = m);
          }
          v[0] = d, v[1] = _;
        }
      }, n = function() {
        return this._data ? this._data.length / this._dimSize : 0;
      };
      zl = (t = {}, t[Bt + "_" + ve] = {
        pure: !0,
        appendData: a
      }, t[Bt + "_" + ii] = {
        pure: !0,
        appendData: function() {
          throw new Error('Do not support appendData when set seriesLayoutBy: "row".');
        }
      }, t[ge] = {
        pure: !0,
        appendData: a
      }, t[Le] = {
        pure: !0,
        appendData: function(o) {
          var s = this._data;
          L(o, function(u, l) {
            for (var f = s[l] || (s[l] = []), h = 0; h < (u || []).length; h++)
              f.push(u[h]);
          });
        }
      }, t[pe] = {
        appendData: a
      }, t[be] = {
        persistent: !1,
        pure: !0,
        appendData: function(o) {
          process.env.NODE_ENV !== "production" && U(Nt(o), "Added data must be TypedArray if data in initialization is TypedArray"), this._data = o;
        },
        // Clean self if data is already used.
        clean: function() {
          this._offset += this.count(), this._data = null;
        }
      }, t);
      function a(o) {
        for (var s = 0; s < o.length; s++)
          this._data.push(o[s]);
      }
    }(), r;
  }()
), Ul = function(r, t, e, i) {
  return r[i];
}, Y0 = (er = {}, er[Bt + "_" + ve] = function(r, t, e, i) {
  return r[i + t];
}, er[Bt + "_" + ii] = function(r, t, e, i, n) {
  i += t;
  for (var a = n || [], o = r, s = 0; s < o.length; s++) {
    var u = o[s];
    a[s] = u ? u[i] : null;
  }
  return a;
}, er[ge] = Ul, er[Le] = function(r, t, e, i, n) {
  for (var a = n || [], o = 0; o < e.length; o++) {
    var s = e[o].name;
    if (process.env.NODE_ENV !== "production" && s == null)
      throw new Error();
    var u = r[s];
    a[o] = u ? u[i] : null;
  }
  return a;
}, er[pe] = Ul, er);
function Dv(r, t) {
  var e = Y0[Ks(r, t)];
  return process.env.NODE_ENV !== "production" && U(e, 'Do not support get item on "' + r + '", "' + t + '".'), e;
}
var Yl = function(r, t, e) {
  return r.length;
}, G0 = (rr = {}, rr[Bt + "_" + ve] = function(r, t, e) {
  return Math.max(0, r.length - t);
}, rr[Bt + "_" + ii] = function(r, t, e) {
  var i = r[0];
  return i ? Math.max(0, i.length - t) : 0;
}, rr[ge] = Yl, rr[Le] = function(r, t, e) {
  var i = e[0].name;
  if (process.env.NODE_ENV !== "production" && i == null)
    throw new Error();
  var n = r[i];
  return n ? n.length : 0;
}, rr[pe] = Yl, rr);
function Cv(r, t) {
  var e = G0[Ks(r, t)];
  return process.env.NODE_ENV !== "production" && U(e, 'Do not support count on "' + r + '", "' + t + '".'), e;
}
var _o = function(r, t, e) {
  return r[t];
}, W0 = (ir = {}, ir[Bt] = _o, ir[ge] = function(r, t, e) {
  return r[e];
}, ir[Le] = _o, ir[pe] = function(r, t, e) {
  var i = ca(r);
  return i instanceof Array ? i[t] : i;
}, ir[be] = _o, ir);
function bv(r) {
  var t = W0[r];
  return process.env.NODE_ENV !== "production" && U(t, 'Do not support get value on "' + r + '".'), t;
}
function Ks(r, t) {
  return r === Bt ? r + "_" + t : r;
}
function ta(r, t, e) {
  if (r) {
    var i = r.getRawDataItem(t);
    if (i != null) {
      var n = r.getStore(), a = n.getSource().sourceFormat;
      if (e != null) {
        var o = r.getDimensionIndex(e), s = n.getDimensionProperty(o);
        return bv(a)(i, o, s);
      } else {
        var u = i;
        return a === pe && (u = ca(i)), u;
      }
    }
  }
}
var $0 = /\{@(.+?)\}/g, X0 = (
  /** @class */
  function() {
    function r() {
    }
    return r.prototype.getDataParams = function(t, e) {
      var i = this.getData(e), n = this.getRawValue(t, e), a = i.getRawIndex(t), o = i.getName(t), s = i.getRawDataItem(t), u = i.getItemVisual(t, "style"), l = u && u[i.getItemVisual(t, "drawType") || "fill"], f = u && u.stroke, h = this.mainType, c = h === "series", v = i.userOutput && i.userOutput.get();
      return {
        componentType: h,
        componentSubType: this.subType,
        componentIndex: this.componentIndex,
        seriesType: c ? this.subType : null,
        seriesIndex: this.seriesIndex,
        seriesId: c ? this.id : null,
        seriesName: c ? this.name : null,
        name: o,
        dataIndex: a,
        data: s,
        dataType: e,
        value: n,
        color: l,
        borderColor: f,
        dimensionNames: v ? v.fullDimensions : null,
        encode: v ? v.encode : null,
        // Param name list for mapping `a`, `b`, `c`, `d`, `e`
        $vars: ["seriesName", "name", "value"]
      };
    }, r.prototype.getFormattedLabel = function(t, e, i, n, a, o) {
      e = e || "normal";
      var s = this.getData(i), u = this.getDataParams(t, i);
      if (o && (u.value = o.interpolatedValue), n != null && Y(u.value) && (u.value = u.value[n]), !a) {
        var l = s.getItemModel(t);
        a = l.get(e === "normal" ? ["label", "formatter"] : [e, "label", "formatter"]);
      }
      if (J(a))
        return u.status = e, u.dimensionIndex = n, a(u);
      if (Z(a)) {
        var f = j_(a, u);
        return f.replace($0, function(h, c) {
          var v = c.length, d = c;
          d.charAt(0) === "[" && d.charAt(v - 1) === "]" && (d = +d.slice(1, v - 1), process.env.NODE_ENV !== "production" && isNaN(d) && wt("Invalide label formatter: @" + c + ", only support @[0], @[1], @[2], ..."));
          var _ = ta(s, t, d);
          if (o && Y(o.interpolatedValue)) {
            var p = s.getDimensionIndex(d);
            p >= 0 && (_ = o.interpolatedValue[p]);
          }
          return _ != null ? _ + "" : "";
        });
      }
    }, r.prototype.getRawValue = function(t, e) {
      return ta(this.getData(e), t);
    }, r.prototype.formatTooltip = function(t, e, i) {
    }, r;
  }()
);
function Hi(r) {
  return new q0(r);
}
var q0 = (
  /** @class */
  function() {
    function r(t) {
      t = t || {}, this._reset = t.reset, this._plan = t.plan, this._count = t.count, this._onDirty = t.onDirty, this._dirty = !0;
    }
    return r.prototype.perform = function(t) {
      var e = this._upstream, i = t && t.skip;
      if (this._dirty && e) {
        var n = this.context;
        n.data = n.outputData = e.context.outputData;
      }
      this.__pipeline && (this.__pipeline.currentTask = this);
      var a;
      this._plan && !i && (a = this._plan(this.context));
      var o = f(this._modBy), s = this._modDataCount || 0, u = f(t && t.modBy), l = t && t.modDataCount || 0;
      (o !== u || s !== l) && (a = "reset");
      function f(y) {
        return !(y >= 1) && (y = 1), y;
      }
      var h;
      (this._dirty || a === "reset") && (this._dirty = !1, h = this._doReset(i)), this._modBy = u, this._modDataCount = l;
      var c = t && t.step;
      if (e ? (process.env.NODE_ENV !== "production" && U(e._outputDueEnd != null), this._dueEnd = e._outputDueEnd) : (process.env.NODE_ENV !== "production" && U(!this._progress || this._count), this._dueEnd = this._count ? this._count(this.context) : 1 / 0), this._progress) {
        var v = this._dueIndex, d = Math.min(c != null ? this._dueIndex + c : 1 / 0, this._dueEnd);
        if (!i && (h || v < d)) {
          var _ = this._progress;
          if (Y(_))
            for (var p = 0; p < _.length; p++)
              this._doProgress(_[p], v, d, u, l);
          else
            this._doProgress(_, v, d, u, l);
        }
        this._dueIndex = d;
        var g = this._settedOutputEnd != null ? this._settedOutputEnd : d;
        process.env.NODE_ENV !== "production" && U(g >= this._outputDueEnd), this._outputDueEnd = g;
      } else
        this._dueIndex = this._outputDueEnd = this._settedOutputEnd != null ? this._settedOutputEnd : this._dueEnd;
      return this.unfinished();
    }, r.prototype.dirty = function() {
      this._dirty = !0, this._onDirty && this._onDirty(this.context);
    }, r.prototype._doProgress = function(t, e, i, n, a) {
      Gl.reset(e, i, n, a), this._callingProgress = t, this._callingProgress({
        start: e,
        end: i,
        count: i - e,
        next: Gl.next
      }, this.context);
    }, r.prototype._doReset = function(t) {
      this._dueIndex = this._outputDueEnd = this._dueEnd = 0, this._settedOutputEnd = null;
      var e, i;
      !t && this._reset && (e = this._reset(this.context), e && e.progress && (i = e.forceFirstProgress, e = e.progress), Y(e) && !e.length && (e = null)), this._progress = e, this._modBy = this._modDataCount = null;
      var n = this._downstream;
      return n && n.dirty(), i;
    }, r.prototype.unfinished = function() {
      return this._progress && this._dueIndex < this._dueEnd;
    }, r.prototype.pipe = function(t) {
      process.env.NODE_ENV !== "production" && U(t && !t._disposed && t !== this), (this._downstream !== t || this._dirty) && (this._downstream = t, t._upstream = this, t.dirty());
    }, r.prototype.dispose = function() {
      this._disposed || (this._upstream && (this._upstream._downstream = null), this._downstream && (this._downstream._upstream = null), this._dirty = !1, this._disposed = !0);
    }, r.prototype.getUpstream = function() {
      return this._upstream;
    }, r.prototype.getDownstream = function() {
      return this._downstream;
    }, r.prototype.setOutputEnd = function(t) {
      this._outputDueEnd = this._settedOutputEnd = t;
    }, r;
  }()
), Gl = function() {
  var r, t, e, i, n, a = {
    reset: function(u, l, f, h) {
      t = u, r = l, e = f, i = h, n = Math.ceil(i / e), a.next = e > 1 && i > 0 ? s : o;
    }
  };
  return a;
  function o() {
    return t < r ? t++ : null;
  }
  function s() {
    var u = t % n * e + Math.ceil(t / n), l = t >= r ? null : u < i ? u : t;
    return t++, l;
  }
}();
function Vn(r, t) {
  var e = t && t.type;
  return e === "ordinal" ? r : (e === "time" && !Et(r) && r != null && r !== "-" && (r = +Dh(r)), r == null || r === "" ? NaN : +r);
}
$({
  number: function(r) {
    return parseFloat(r);
  },
  time: function(r) {
    return +Dh(r);
  },
  trim: function(r) {
    return Z(r) ? Ne(r) : r;
  }
});
var Z0 = (
  /** @class */
  function() {
    function r() {
    }
    return r.prototype.getRawData = function() {
      throw new Error("not supported");
    }, r.prototype.getRawDataItem = function(t) {
      throw new Error("not supported");
    }, r.prototype.cloneRawData = function() {
    }, r.prototype.getDimensionInfo = function(t) {
    }, r.prototype.cloneAllDimensionInfo = function() {
    }, r.prototype.count = function() {
    }, r.prototype.retrieveValue = function(t, e) {
    }, r.prototype.retrieveValueFromItem = function(t, e) {
    }, r.prototype.convertValue = function(t, e) {
      return Vn(t, e);
    }, r;
  }()
);
function K0(r, t) {
  var e = new Z0(), i = r.data, n = e.sourceFormat = r.sourceFormat, a = r.startIndex, o = "";
  r.seriesLayoutBy !== ve && (process.env.NODE_ENV !== "production" && (o = '`seriesLayoutBy` of upstream dataset can only be "column" in data transform.'), Ht(o));
  var s = [], u = {}, l = r.dimensionsDefine;
  if (l)
    L(l, function(_, p) {
      var g = _.name, y = {
        index: p,
        name: g,
        displayName: _.displayName
      };
      if (s.push(y), g != null) {
        var m = "";
        Un(u, g) && (process.env.NODE_ENV !== "production" && (m = 'dimension name "' + g + '" duplicated.'), Ht(m)), u[g] = y;
      }
    });
  else
    for (var f = 0; f < r.dimensionsDetectedCount; f++)
      s.push({
        index: f
      });
  var h = Dv(n, ve);
  t.__isBuiltIn && (e.getRawDataItem = function(_) {
    return h(i, a, s, _);
  }, e.getRawData = At(Q0, null, r)), e.cloneRawData = At(J0, null, r);
  var c = Cv(n, ve);
  e.count = At(c, null, i, a, s);
  var v = bv(n);
  e.retrieveValue = function(_, p) {
    var g = h(i, a, s, _);
    return d(g, p);
  };
  var d = e.retrieveValueFromItem = function(_, p) {
    if (_ != null) {
      var g = s[p];
      if (g)
        return v(_, p, g.name);
    }
  };
  return e.getDimensionInfo = At(j0, null, s, u), e.cloneAllDimensionInfo = At(ty, null, s), e;
}
function Q0(r) {
  var t = r.sourceFormat;
  if (!Qs(t)) {
    var e = "";
    process.env.NODE_ENV !== "production" && (e = "`getRawData` is not supported in source format " + t), Ht(e);
  }
  return r.data;
}
function J0(r) {
  var t = r.sourceFormat, e = r.data;
  if (!Qs(t)) {
    var i = "";
    process.env.NODE_ENV !== "production" && (i = "`cloneRawData` is not supported in source format " + t), Ht(i);
  }
  if (t === Bt) {
    for (var n = [], a = 0, o = e.length; a < o; a++)
      n.push(e[a].slice());
    return n;
  } else if (t === ge) {
    for (var n = [], a = 0, o = e.length; a < o; a++)
      n.push(N({}, e[a]));
    return n;
  }
}
function j0(r, t, e) {
  if (e != null) {
    if (Et(e) || !isNaN(e) && !Un(t, e))
      return r[e];
    if (Un(t, e))
      return t[e];
  }
}
function ty(r) {
  return K(r);
}
var Ev = $();
function ey(r) {
  r = K(r);
  var t = r.type, e = "";
  t || (process.env.NODE_ENV !== "production" && (e = "Must have a `type` when `registerTransform`."), Ht(e));
  var i = t.split(":");
  i.length !== 2 && (process.env.NODE_ENV !== "production" && (e = 'Name must include namespace like "ns:regression".'), Ht(e));
  var n = !1;
  i[0] === "echarts" && (t = i[1], n = !0), r.__isBuiltIn = n, Ev.set(t, r);
}
function ry(r, t, e) {
  var i = Mt(r), n = i.length, a = "";
  n || (process.env.NODE_ENV !== "production" && (a = "If `transform` declared, it should at least contain one transform."), Ht(a));
  for (var o = 0, s = n; o < s; o++) {
    var u = i[o];
    t = iy(u, t, e, n === 1 ? null : o), o !== s - 1 && (t.length = Math.max(t.length, 1));
  }
  return t;
}
function iy(r, t, e, i) {
  var n = "";
  t.length || (process.env.NODE_ENV !== "production" && (n = "Must have at least one upstream dataset."), Ht(n)), F(r) || (process.env.NODE_ENV !== "production" && (n = "transform declaration must be an object rather than " + typeof r + "."), Ht(n));
  var a = r.type, o = Ev.get(a);
  o || (process.env.NODE_ENV !== "production" && (n = 'Can not find transform on type "' + a + '".'), Ht(n));
  var s = it(t, function(f) {
    return K0(f, o);
  }), u = Mt(o.transform({
    upstream: s[0],
    upstreamList: s,
    config: K(r.config)
  }));
  if (process.env.NODE_ENV !== "production" && r.print) {
    var l = it(u, function(f) {
      var h = i != null ? " === pipe index: " + i : "";
      return ["=== dataset index: " + e.datasetIndex + h + " ===", "- transform result data:", jo(f.data), "- transform result dimensions:", jo(f.dimensions)].join(`
`);
    }).join(`
`);
    mp(l);
  }
  return it(u, function(f, h) {
    var c = "";
    F(f) || (process.env.NODE_ENV !== "production" && (c = "A transform should not return some empty results."), Ht(c)), f.data || (process.env.NODE_ENV !== "production" && (c = "Transform result data should be not be null or undefined"), Ht(c));
    var v = wv(f.data);
    Qs(v) || (process.env.NODE_ENV !== "production" && (c = "Transform result data should be array rows or object rows."), Ht(c));
    var d, _ = t[0];
    if (_ && h === 0 && !f.dimensions) {
      var p = _.startIndex;
      p && (f.data = _.data.slice(0, p).concat(f.data)), d = {
        seriesLayoutBy: ve,
        sourceHeader: p,
        dimensions: _.metaRawOption.dimensions
      };
    } else
      d = {
        seriesLayoutBy: ve,
        sourceHeader: 0,
        dimensions: f.dimensions
      };
    return cs(f.data, d, null);
  });
}
function Qs(r) {
  return r === Bt || r === ge;
}
var Da = "undefined", ny = typeof Uint32Array === Da ? Array : Uint32Array, ay = typeof Uint16Array === Da ? Array : Uint16Array, Mv = typeof Int32Array === Da ? Array : Int32Array, Wl = typeof Float64Array === Da ? Array : Float64Array, Lv = {
  float: Wl,
  int: Mv,
  // Ordinal data type can be string or int
  ordinal: Array,
  number: Array,
  time: Wl
}, yo;
function _i(r) {
  return r > 65535 ? ny : ay;
}
function xr() {
  return [1 / 0, -1 / 0];
}
function oy(r) {
  var t = r.constructor;
  return t === Array ? r.slice() : new t(r);
}
function $l(r, t, e, i, n) {
  var a = Lv[e || "float"];
  if (n) {
    var o = r[t], s = o && o.length;
    if (s !== i) {
      for (var u = new a(i), l = 0; l < s; l++)
        u[l] = o[l];
      r[t] = u;
    }
  } else
    r[t] = new a(i);
}
var ds = (
  /** @class */
  function() {
    function r() {
      this._chunks = [], this._rawExtent = [], this._extent = [], this._count = 0, this._rawCount = 0, this._calcDimNameToIdx = $();
    }
    return r.prototype.initData = function(t, e, i) {
      process.env.NODE_ENV !== "production" && U(J(t.getItem) && J(t.count), "Invalid data provider."), this._provider = t, this._chunks = [], this._indices = null, this.getRawIndex = this._getRawIdxIdentity;
      var n = t.getSource(), a = this.defaultDimValueGetter = yo[n.sourceFormat];
      this._dimValueGetter = i || a, this._rawExtent = [];
      var o = Sv(n);
      this._dimensions = it(e, function(s) {
        return process.env.NODE_ENV !== "production" && o && U(s.property != null), {
          // Only pick these two props. Not leak other properties like orderMeta.
          type: s.type,
          property: s.property
        };
      }), this._initDataFromProvider(0, t.count());
    }, r.prototype.getProvider = function() {
      return this._provider;
    }, r.prototype.getSource = function() {
      return this._provider.getSource();
    }, r.prototype.ensureCalculationDimension = function(t, e) {
      var i = this._calcDimNameToIdx, n = this._dimensions, a = i.get(t);
      if (a != null) {
        if (n[a].type === e)
          return a;
      } else
        a = n.length;
      return n[a] = {
        type: e
      }, i.set(t, a), this._chunks[a] = new Lv[e || "float"](this._rawCount), this._rawExtent[a] = xr(), a;
    }, r.prototype.collectOrdinalMeta = function(t, e) {
      var i = this._chunks[t], n = this._dimensions[t], a = this._rawExtent, o = n.ordinalOffset || 0, s = i.length;
      o === 0 && (a[t] = xr());
      for (var u = a[t], l = o; l < s; l++) {
        var f = i[l] = e.parseAndCollect(i[l]);
        isNaN(f) || (u[0] = Math.min(f, u[0]), u[1] = Math.max(f, u[1]));
      }
      n.ordinalMeta = e, n.ordinalOffset = s, n.type = "ordinal";
    }, r.prototype.getOrdinalMeta = function(t) {
      var e = this._dimensions[t], i = e.ordinalMeta;
      return i;
    }, r.prototype.getDimensionProperty = function(t) {
      var e = this._dimensions[t];
      return e && e.property;
    }, r.prototype.appendData = function(t) {
      process.env.NODE_ENV !== "production" && U(!this._indices, "appendData can only be called on raw data.");
      var e = this._provider, i = this.count();
      e.appendData(t);
      var n = e.count();
      return e.persistent || (n += i), i < n && this._initDataFromProvider(i, n, !0), [i, n];
    }, r.prototype.appendValues = function(t, e) {
      for (var i = this._chunks, n = this._dimensions, a = n.length, o = this._rawExtent, s = this.count(), u = s + Math.max(t.length, e || 0), l = 0; l < a; l++) {
        var f = n[l];
        $l(i, l, f.type, u, !0);
      }
      for (var h = [], c = s; c < u; c++)
        for (var v = c - s, d = 0; d < a; d++) {
          var f = n[d], _ = yo.arrayRows.call(this, t[v] || h, f.property, v, d);
          i[d][c] = _;
          var p = o[d];
          _ < p[0] && (p[0] = _), _ > p[1] && (p[1] = _);
        }
      return this._rawCount = this._count = u, {
        start: s,
        end: u
      };
    }, r.prototype._initDataFromProvider = function(t, e, i) {
      for (var n = this._provider, a = this._chunks, o = this._dimensions, s = o.length, u = this._rawExtent, l = it(o, function(y) {
        return y.property;
      }), f = 0; f < s; f++) {
        var h = o[f];
        u[f] || (u[f] = xr()), $l(a, f, h.type, e, i);
      }
      if (n.fillStorage)
        n.fillStorage(t, e, a, u);
      else
        for (var c = [], v = t; v < e; v++) {
          c = n.getItem(v, c);
          for (var d = 0; d < s; d++) {
            var _ = a[d], p = this._dimValueGetter(c, l[d], v, d);
            _[v] = p;
            var g = u[d];
            p < g[0] && (g[0] = p), p > g[1] && (g[1] = p);
          }
        }
      !n.persistent && n.clean && n.clean(), this._rawCount = this._count = e, this._extent = [];
    }, r.prototype.count = function() {
      return this._count;
    }, r.prototype.get = function(t, e) {
      if (!(e >= 0 && e < this._count))
        return NaN;
      var i = this._chunks[t];
      return i ? i[this.getRawIndex(e)] : NaN;
    }, r.prototype.getValues = function(t, e) {
      var i = [], n = [];
      if (e == null) {
        e = t, t = [];
        for (var a = 0; a < this._dimensions.length; a++)
          n.push(a);
      } else
        n = t;
      for (var a = 0, o = n.length; a < o; a++)
        i.push(this.get(n[a], e));
      return i;
    }, r.prototype.getByRawIndex = function(t, e) {
      if (!(e >= 0 && e < this._rawCount))
        return NaN;
      var i = this._chunks[t];
      return i ? i[e] : NaN;
    }, r.prototype.getSum = function(t) {
      var e = this._chunks[t], i = 0;
      if (e)
        for (var n = 0, a = this.count(); n < a; n++) {
          var o = this.get(t, n);
          isNaN(o) || (i += o);
        }
      return i;
    }, r.prototype.getMedian = function(t) {
      var e = [];
      this.each([t], function(a) {
        isNaN(a) || e.push(a);
      });
      var i = e.sort(function(a, o) {
        return a - o;
      }), n = this.count();
      return n === 0 ? 0 : n % 2 === 1 ? i[(n - 1) / 2] : (i[n / 2] + i[n / 2 - 1]) / 2;
    }, r.prototype.indexOfRawIndex = function(t) {
      if (t >= this._rawCount || t < 0)
        return -1;
      if (!this._indices)
        return t;
      var e = this._indices, i = e[t];
      if (i != null && i < this._count && i === t)
        return t;
      for (var n = 0, a = this._count - 1; n <= a; ) {
        var o = (n + a) / 2 | 0;
        if (e[o] < t)
          n = o + 1;
        else if (e[o] > t)
          a = o - 1;
        else
          return o;
      }
      return -1;
    }, r.prototype.indicesOfNearest = function(t, e, i) {
      var n = this._chunks, a = n[t], o = [];
      if (!a)
        return o;
      i == null && (i = 1 / 0);
      for (var s = 1 / 0, u = -1, l = 0, f = 0, h = this.count(); f < h; f++) {
        var c = this.getRawIndex(f), v = e - a[c], d = Math.abs(v);
        d <= i && ((d < s || d === s && v >= 0 && u < 0) && (s = d, u = v, l = 0), v === u && (o[l++] = f));
      }
      return o.length = l, o;
    }, r.prototype.getIndices = function() {
      var t, e = this._indices;
      if (e) {
        var i = e.constructor, n = this._count;
        if (i === Array) {
          t = new i(n);
          for (var a = 0; a < n; a++)
            t[a] = e[a];
        } else
          t = new i(e.buffer, 0, n);
      } else {
        var i = _i(this._rawCount);
        t = new i(this.count());
        for (var a = 0; a < t.length; a++)
          t[a] = a;
      }
      return t;
    }, r.prototype.filter = function(t, e) {
      if (!this._count)
        return this;
      for (var i = this.clone(), n = i.count(), a = _i(i._rawCount), o = new a(n), s = [], u = t.length, l = 0, f = t[0], h = i._chunks, c = 0; c < n; c++) {
        var v = void 0, d = i.getRawIndex(c);
        if (u === 0)
          v = e(c);
        else if (u === 1) {
          var _ = h[f][d];
          v = e(_, c);
        } else {
          for (var p = 0; p < u; p++)
            s[p] = h[t[p]][d];
          s[p] = c, v = e.apply(null, s);
        }
        v && (o[l++] = d);
      }
      return l < n && (i._indices = o), i._count = l, i._extent = [], i._updateGetRawIdx(), i;
    }, r.prototype.selectRange = function(t) {
      var e = this.clone(), i = e._count;
      if (!i)
        return this;
      var n = lt(t), a = n.length;
      if (!a)
        return this;
      var o = e.count(), s = _i(e._rawCount), u = new s(o), l = 0, f = n[0], h = t[f][0], c = t[f][1], v = e._chunks, d = !1;
      if (!e._indices) {
        var _ = 0;
        if (a === 1) {
          for (var p = v[n[0]], g = 0; g < i; g++) {
            var y = p[g];
            (y >= h && y <= c || isNaN(y)) && (u[l++] = _), _++;
          }
          d = !0;
        } else if (a === 2) {
          for (var p = v[n[0]], m = v[n[1]], w = t[n[1]][0], T = t[n[1]][1], g = 0; g < i; g++) {
            var y = p[g], S = m[g];
            (y >= h && y <= c || isNaN(y)) && (S >= w && S <= T || isNaN(S)) && (u[l++] = _), _++;
          }
          d = !0;
        }
      }
      if (!d)
        if (a === 1)
          for (var g = 0; g < o; g++) {
            var D = e.getRawIndex(g), y = v[n[0]][D];
            (y >= h && y <= c || isNaN(y)) && (u[l++] = D);
          }
        else
          for (var g = 0; g < o; g++) {
            for (var C = !0, D = e.getRawIndex(g), b = 0; b < a; b++) {
              var M = n[b], y = v[M][D];
              (y < t[M][0] || y > t[M][1]) && (C = !1);
            }
            C && (u[l++] = e.getRawIndex(g));
          }
      return l < o && (e._indices = u), e._count = l, e._extent = [], e._updateGetRawIdx(), e;
    }, r.prototype.map = function(t, e) {
      var i = this.clone(t);
      return this._updateDims(i, t, e), i;
    }, r.prototype.modify = function(t, e) {
      this._updateDims(this, t, e);
    }, r.prototype._updateDims = function(t, e, i) {
      for (var n = t._chunks, a = [], o = e.length, s = t.count(), u = [], l = t._rawExtent, f = 0; f < e.length; f++)
        l[e[f]] = xr();
      for (var h = 0; h < s; h++) {
        for (var c = t.getRawIndex(h), v = 0; v < o; v++)
          u[v] = n[e[v]][c];
        u[o] = h;
        var d = i && i.apply(null, u);
        if (d != null) {
          typeof d != "object" && (a[0] = d, d = a);
          for (var f = 0; f < d.length; f++) {
            var _ = e[f], p = d[f], g = l[_], y = n[_];
            y && (y[c] = p), p < g[0] && (g[0] = p), p > g[1] && (g[1] = p);
          }
        }
      }
    }, r.prototype.lttbDownSample = function(t, e) {
      var i = this.clone([t], !0), n = i._chunks, a = n[t], o = this.count(), s = 0, u = Math.floor(1 / e), l = this.getRawIndex(0), f, h, c, v = new (_i(this._rawCount))(Math.min((Math.ceil(o / u) + 2) * 2, o));
      v[s++] = l;
      for (var d = 1; d < o - 1; d += u) {
        for (var _ = Math.min(d + u, o - 1), p = Math.min(d + u * 2, o), g = (p + _) / 2, y = 0, m = _; m < p; m++) {
          var w = this.getRawIndex(m), T = a[w];
          isNaN(T) || (y += T);
        }
        y /= p - _;
        var S = d, D = Math.min(d + u, o), C = d - 1, b = a[l];
        f = -1, c = S;
        for (var M = -1, E = 0, m = S; m < D; m++) {
          var w = this.getRawIndex(m), T = a[w];
          if (isNaN(T)) {
            E++, M < 0 && (M = w);
            continue;
          }
          h = Math.abs((C - g) * (T - b) - (C - m) * (y - b)), h > f && (f = h, c = w);
        }
        E > 0 && E < D - S && (v[s++] = Math.min(M, c), c = Math.max(M, c)), v[s++] = c, l = c;
      }
      return v[s++] = this.getRawIndex(o - 1), i._count = s, i._indices = v, i.getRawIndex = this._getRawIdx, i;
    }, r.prototype.downSample = function(t, e, i, n) {
      for (var a = this.clone([t], !0), o = a._chunks, s = [], u = Math.floor(1 / e), l = o[t], f = this.count(), h = a._rawExtent[t] = xr(), c = new (_i(this._rawCount))(Math.ceil(f / u)), v = 0, d = 0; d < f; d += u) {
        u > f - d && (u = f - d, s.length = u);
        for (var _ = 0; _ < u; _++) {
          var p = this.getRawIndex(d + _);
          s[_] = l[p];
        }
        var g = i(s), y = this.getRawIndex(Math.min(d + n(s, g) || 0, f - 1));
        l[y] = g, g < h[0] && (h[0] = g), g > h[1] && (h[1] = g), c[v++] = y;
      }
      return a._count = v, a._indices = c, a._updateGetRawIdx(), a;
    }, r.prototype.each = function(t, e) {
      if (this._count)
        for (var i = t.length, n = this._chunks, a = 0, o = this.count(); a < o; a++) {
          var s = this.getRawIndex(a);
          switch (i) {
            case 0:
              e(a);
              break;
            case 1:
              e(n[t[0]][s], a);
              break;
            case 2:
              e(n[t[0]][s], n[t[1]][s], a);
              break;
            default:
              for (var u = 0, l = []; u < i; u++)
                l[u] = n[t[u]][s];
              l[u] = a, e.apply(null, l);
          }
        }
    }, r.prototype.getDataExtent = function(t) {
      var e = this._chunks[t], i = xr();
      if (!e)
        return i;
      var n = this.count(), a = !this._indices, o;
      if (a)
        return this._rawExtent[t].slice();
      if (o = this._extent[t], o)
        return o.slice();
      o = i;
      for (var s = o[0], u = o[1], l = 0; l < n; l++) {
        var f = this.getRawIndex(l), h = e[f];
        h < s && (s = h), h > u && (u = h);
      }
      return o = [s, u], this._extent[t] = o, o;
    }, r.prototype.getRawDataItem = function(t) {
      var e = this.getRawIndex(t);
      if (this._provider.persistent)
        return this._provider.getItem(e);
      for (var i = [], n = this._chunks, a = 0; a < n.length; a++)
        i.push(n[a][e]);
      return i;
    }, r.prototype.clone = function(t, e) {
      var i = new r(), n = this._chunks, a = t && ti(t, function(s, u) {
        return s[u] = !0, s;
      }, {});
      if (a)
        for (var o = 0; o < n.length; o++)
          i._chunks[o] = a[o] ? oy(n[o]) : n[o];
      else
        i._chunks = n;
      return this._copyCommonProps(i), e || (i._indices = this._cloneIndices()), i._updateGetRawIdx(), i;
    }, r.prototype._copyCommonProps = function(t) {
      t._count = this._count, t._rawCount = this._rawCount, t._provider = this._provider, t._dimensions = this._dimensions, t._extent = K(this._extent), t._rawExtent = K(this._rawExtent);
    }, r.prototype._cloneIndices = function() {
      if (this._indices) {
        var t = this._indices.constructor, e = void 0;
        if (t === Array) {
          var i = this._indices.length;
          e = new t(i);
          for (var n = 0; n < i; n++)
            e[n] = this._indices[n];
        } else
          e = new t(this._indices);
        return e;
      }
      return null;
    }, r.prototype._getRawIdxIdentity = function(t) {
      return t;
    }, r.prototype._getRawIdx = function(t) {
      return t < this._count && t >= 0 ? this._indices[t] : -1;
    }, r.prototype._updateGetRawIdx = function() {
      this.getRawIndex = this._indices ? this._getRawIdx : this._getRawIdxIdentity;
    }, r.internalField = function() {
      function t(e, i, n, a) {
        return Vn(e[a], this._dimensions[a]);
      }
      yo = {
        arrayRows: t,
        objectRows: function(e, i, n, a) {
          return Vn(e[i], this._dimensions[a]);
        },
        keyedColumns: t,
        original: function(e, i, n, a) {
          var o = e && (e.value == null ? e : e.value);
          return Vn(o instanceof Array ? o[a] : o, this._dimensions[a]);
        },
        typedArray: function(e, i, n, a) {
          return e[a];
        }
      };
    }(), r;
  }()
), xv = (
  /** @class */
  function() {
    function r(t) {
      this._sourceList = [], this._storeList = [], this._upstreamSignList = [], this._versionSignBase = 0, this._dirty = !0, this._sourceHost = t;
    }
    return r.prototype.dirty = function() {
      this._setLocalSource([], []), this._storeList = [], this._dirty = !0;
    }, r.prototype._setLocalSource = function(t, e) {
      this._sourceList = t, this._upstreamSignList = e, this._versionSignBase++, this._versionSignBase > 9e10 && (this._versionSignBase = 0);
    }, r.prototype._getVersionSign = function() {
      return this._sourceHost.uid + "_" + this._versionSignBase;
    }, r.prototype.prepareSource = function() {
      this._isDirty() && (this._createSource(), this._dirty = !1);
    }, r.prototype._createSource = function() {
      this._setLocalSource([], []);
      var t = this._sourceHost, e = this._getUpstreamSourceManagers(), i = !!e.length, n, a;
      if (yi(t)) {
        var o = t, s = void 0, u = void 0, l = void 0;
        if (i) {
          var f = e[0];
          f.prepareSource(), l = f.getSource(), s = l.data, u = l.sourceFormat, a = [f._getVersionSign()];
        } else
          s = o.get("data", !0), u = Nt(s) ? be : pe, a = [];
        var h = this._getSourceMetaRawOption() || {}, c = l && l.metaRawOption || {}, v = W(h.seriesLayoutBy, c.seriesLayoutBy) || null, d = W(h.sourceHeader, c.sourceHeader), _ = W(h.dimensions, c.dimensions), p = v !== c.seriesLayoutBy || !!d != !!c.sourceHeader || _;
        n = p ? [cs(s, {
          seriesLayoutBy: v,
          sourceHeader: d,
          dimensions: _
        }, u)] : [];
      } else {
        var g = t;
        if (i) {
          var y = this._applyTransform(e);
          n = y.sourceList, a = y.upstreamSignList;
        } else {
          var m = g.get("source", !0);
          n = [cs(m, this._getSourceMetaRawOption(), null)], a = [];
        }
      }
      process.env.NODE_ENV !== "production" && U(n && a), this._setLocalSource(n, a);
    }, r.prototype._applyTransform = function(t) {
      var e = this._sourceHost, i = e.get("transform", !0), n = e.get("fromTransformResult", !0);
      if (process.env.NODE_ENV !== "production" && U(n != null || i != null), n != null) {
        var a = "";
        t.length !== 1 && (process.env.NODE_ENV !== "production" && (a = "When using `fromTransformResult`, there should be only one upstream dataset"), ql(a));
      }
      var o, s = [], u = [];
      return L(t, function(l) {
        l.prepareSource();
        var f = l.getSource(n || 0), h = "";
        n != null && !f && (process.env.NODE_ENV !== "production" && (h = "Can not retrieve result by `fromTransformResult`: " + n), ql(h)), s.push(f), u.push(l._getVersionSign());
      }), i ? o = ry(i, s, {
        datasetIndex: e.componentIndex
      }) : n != null && (o = [z0(s[0])]), {
        sourceList: o,
        upstreamSignList: u
      };
    }, r.prototype._isDirty = function() {
      if (this._dirty)
        return !0;
      for (var t = this._getUpstreamSourceManagers(), e = 0; e < t.length; e++) {
        var i = t[e];
        if (
          // Consider the case that there is ancestor diry, call it recursively.
          // The performance is probably not an issue because usually the chain is not long.
          i._isDirty() || this._upstreamSignList[e] !== i._getVersionSign()
        )
          return !0;
      }
    }, r.prototype.getSource = function(t) {
      t = t || 0;
      var e = this._sourceList[t];
      if (!e) {
        var i = this._getUpstreamSourceManagers();
        return i[0] && i[0].getSource(t);
      }
      return e;
    }, r.prototype.getSharedDataStore = function(t) {
      process.env.NODE_ENV !== "production" && U(yi(this._sourceHost), "Can only call getDataStore on series source manager.");
      var e = t.makeStoreSchema();
      return this._innerGetDataStore(e.dimensions, t.source, e.hash);
    }, r.prototype._innerGetDataStore = function(t, e, i) {
      var n = 0, a = this._storeList, o = a[n];
      o || (o = a[n] = {});
      var s = o[i];
      if (!s) {
        var u = this._getUpstreamSourceManagers()[0];
        yi(this._sourceHost) && u ? s = u._innerGetDataStore(t, e, i) : (s = new ds(), s.initData(new Tv(e, t.length), t)), o[i] = s;
      }
      return s;
    }, r.prototype._getUpstreamSourceManagers = function() {
      var t = this._sourceHost;
      if (yi(t)) {
        var e = u0(t);
        return e ? [e.getSourceManager()] : [];
      } else
        return it(l0(t), function(i) {
          return i.getSourceManager();
        });
    }, r.prototype._getSourceMetaRawOption = function() {
      var t = this._sourceHost, e, i, n;
      if (yi(t))
        e = t.get("seriesLayoutBy", !0), i = t.get("sourceHeader", !0), n = t.get("dimensions", !0);
      else if (!this._getUpstreamSourceManagers().length) {
        var a = t;
        e = a.get("seriesLayoutBy", !0), i = a.get("sourceHeader", !0), n = a.get("dimensions", !0);
      }
      return {
        seriesLayoutBy: e,
        sourceHeader: i,
        dimensions: n
      };
    }, r;
  }()
);
function Xl(r) {
  var t = r.option.transform;
  t && Hn(r.option.transform);
}
function yi(r) {
  return r.mainType === "series";
}
function ql(r) {
  throw new Error(r);
}
function ps(r, t) {
  return t.type = r, t;
}
function sy(r, t) {
  var e = r.getData().getItemVisual(t, "style"), i = e[r.visualDrawType];
  return t0(i);
}
function uy(r) {
  var t = r.series, e = r.dataIndex, i = r.multipleSeries, n = t.getData(), a = n.mapDimensionsAll("defaultedTooltip"), o = a.length, s = t.getRawValue(e), u = Y(s), l = sy(t, e), f, h, c, v;
  if (o > 1 || u && !o) {
    var d = ly(s, t, e, a, l);
    f = d.inlineValues, h = d.inlineValueTypes, c = d.blocks, v = d.inlineValues[0];
  } else if (o) {
    var _ = n.getDimensionInfo(a[0]);
    v = f = ta(n, e, a[0]), h = _.type;
  } else
    v = f = u ? s[0] : s;
  var p = Mh(t), g = p && t.name || "", y = n.getName(e), m = i ? g : y;
  return ps("section", {
    header: g,
    // When series name is not specified, do not show a header line with only '-'.
    // This case always happens in tooltip.trigger: 'item'.
    noHeader: i || !p,
    sortParam: v,
    blocks: [ps("nameValue", {
      markerType: "item",
      markerColor: l,
      // Do not mix display seriesName and itemName in one tooltip,
      // which might confuses users.
      name: m,
      // name dimension might be auto assigned, where the name might
      // be not readable. So we check trim here.
      noName: !Ne(m),
      value: f,
      valueType: h
    })].concat(c || [])
  });
}
function ly(r, t, e, i, n) {
  var a = t.getData(), o = ti(r, function(h, c, v) {
    var d = a.getDimensionInfo(v);
    return h = h || d && d.tooltip !== !1 && d.displayName != null;
  }, !1), s = [], u = [], l = [];
  i.length ? L(i, function(h) {
    f(ta(a, e, h), h);
  }) : L(r, f);
  function f(h, c) {
    var v = a.getDimensionInfo(c);
    !v || v.otherDims.tooltip === !1 || (o ? l.push(ps("nameValue", {
      markerType: "subItem",
      markerColor: n,
      name: v.displayName,
      value: h,
      valueType: v.type
    })) : (s.push(h), u.push(v.type)));
  }
  return {
    inlineValues: s,
    inlineValueTypes: u,
    blocks: l
  };
}
var Re = _t();
function dn(r, t) {
  return r.getName(t) || r.getId(t);
}
var fy = "__universalTransitionEnabled", Ca = (
  /** @class */
  function(r) {
    j(t, r);
    function t() {
      var e = r !== null && r.apply(this, arguments) || this;
      return e._selectedDataIndicesMap = {}, e;
    }
    return t.prototype.init = function(e, i, n) {
      this.seriesIndex = this.componentIndex, this.dataTask = Hi({
        count: vy,
        reset: cy
      }), this.dataTask.context = {
        model: this
      }, this.mergeDefaultAndTheme(e, n);
      var a = Re(this).sourceManager = new xv(this);
      a.prepareSource();
      var o = this.getInitialData(e, n);
      Kl(o, this), this.dataTask.context.data = o, process.env.NODE_ENV !== "production" && U(o, "getInitialData returned invalid data."), Re(this).dataBeforeProcessed = o, Zl(this), this._initSelectedMapFromData(o);
    }, t.prototype.mergeDefaultAndTheme = function(e, i) {
      var n = Qn(this), a = n ? lv(e) : {}, o = this.subType;
      st.hasClass(o) && (o += "Series"), ft(e, i.getTheme().get(this.subType)), ft(e, this.getDefaultOption()), Hu(e, "label", ["show"]), this.fillDataTextStyle(e.data), n && Jn(e, a, n);
    }, t.prototype.mergeOption = function(e, i) {
      e = ft(this.option, e, !0), this.fillDataTextStyle(e.data);
      var n = Qn(this);
      n && Jn(this.option, e, n);
      var a = Re(this).sourceManager;
      a.dirty(), a.prepareSource();
      var o = this.getInitialData(e, i);
      Kl(o, this), this.dataTask.dirty(), this.dataTask.context.data = o, Re(this).dataBeforeProcessed = o, Zl(this), this._initSelectedMapFromData(o);
    }, t.prototype.fillDataTextStyle = function(e) {
      if (e && !Nt(e))
        for (var i = ["show"], n = 0; n < e.length; n++)
          e[n] && e[n].label && Hu(e[n], "label", i);
    }, t.prototype.getInitialData = function(e, i) {
    }, t.prototype.appendData = function(e) {
      var i = this.getRawData();
      i.appendData(e.data);
    }, t.prototype.getData = function(e) {
      var i = gs(this);
      if (i) {
        var n = i.context.data;
        return e == null ? n : n.getLinkedData(e);
      } else
        return Re(this).data;
    }, t.prototype.getAllData = function() {
      var e = this.getData();
      return e && e.getLinkedDataAll ? e.getLinkedDataAll() : [{
        data: e
      }];
    }, t.prototype.setData = function(e) {
      var i = gs(this);
      if (i) {
        var n = i.context;
        n.outputData = e, i !== this.dataTask && (n.data = e);
      }
      Re(this).data = e;
    }, t.prototype.getEncode = function() {
      var e = this.get("encode", !0);
      if (e)
        return $(e);
    }, t.prototype.getSourceManager = function() {
      return Re(this).sourceManager;
    }, t.prototype.getSource = function() {
      return this.getSourceManager().getSource();
    }, t.prototype.getRawData = function() {
      return Re(this).dataBeforeProcessed;
    }, t.prototype.getColorBy = function() {
      var e = this.get("colorBy");
      return e || "series";
    }, t.prototype.isColorBySeries = function() {
      return this.getColorBy() === "series";
    }, t.prototype.getBaseAxis = function() {
      var e = this.coordinateSystem;
      return e && e.getBaseAxis && e.getBaseAxis();
    }, t.prototype.formatTooltip = function(e, i, n) {
      return uy({
        series: this,
        dataIndex: e,
        multipleSeries: i
      });
    }, t.prototype.isAnimationEnabled = function() {
      var e = this.ecModel;
      if (rt.node && !(e && e.ssr))
        return !1;
      var i = this.getShallow("animation");
      return i && this.getData().count() > this.getShallow("animationThreshold") && (i = !1), !!i;
    }, t.prototype.restoreData = function() {
      this.dataTask.dirty();
    }, t.prototype.getColorFromPalette = function(e, i, n) {
      var a = this.ecModel, o = qs.prototype.getColorFromPalette.call(this, e, i, n);
      return o || (o = a.getColorFromPalette(e, i, n)), o;
    }, t.prototype.coordDimToDataDim = function(e) {
      return this.getRawData().mapDimensionsAll(e);
    }, t.prototype.getProgressive = function() {
      return this.get("progressive");
    }, t.prototype.getProgressiveThreshold = function() {
      return this.get("progressiveThreshold");
    }, t.prototype.select = function(e, i) {
      this._innerSelect(this.getData(i), e);
    }, t.prototype.unselect = function(e, i) {
      var n = this.option.selectedMap;
      if (n) {
        var a = this.option.selectedMode, o = this.getData(i);
        if (a === "series" || n === "all") {
          this.option.selectedMap = {}, this._selectedDataIndicesMap = {};
          return;
        }
        for (var s = 0; s < e.length; s++) {
          var u = e[s], l = dn(o, u);
          n[l] = !1, this._selectedDataIndicesMap[l] = -1;
        }
      }
    }, t.prototype.toggleSelect = function(e, i) {
      for (var n = [], a = 0; a < e.length; a++)
        n[0] = e[a], this.isSelected(e[a], i) ? this.unselect(n, i) : this.select(n, i);
    }, t.prototype.getSelectedDataIndices = function() {
      if (this.option.selectedMap === "all")
        return [].slice.call(this.getData().getIndices());
      for (var e = this._selectedDataIndicesMap, i = lt(e), n = [], a = 0; a < i.length; a++) {
        var o = e[i[a]];
        o >= 0 && n.push(o);
      }
      return n;
    }, t.prototype.isSelected = function(e, i) {
      var n = this.option.selectedMap;
      if (!n)
        return !1;
      var a = this.getData(i);
      return (n === "all" || n[dn(a, e)]) && !a.getItemModel(e).get(["select", "disabled"]);
    }, t.prototype.isUniversalTransitionEnabled = function() {
      if (this[fy])
        return !0;
      var e = this.option.universalTransition;
      return e ? e === !0 ? !0 : e && e.enabled : !1;
    }, t.prototype._innerSelect = function(e, i) {
      var n, a, o = this.option, s = o.selectedMode, u = i.length;
      if (!(!s || !u)) {
        if (s === "series")
          o.selectedMap = "all";
        else if (s === "multiple") {
          F(o.selectedMap) || (o.selectedMap = {});
          for (var l = o.selectedMap, f = 0; f < u; f++) {
            var h = i[f], c = dn(e, h);
            l[c] = !0, this._selectedDataIndicesMap[c] = e.getRawIndex(h);
          }
        } else if (s === "single" || s === !0) {
          var v = i[u - 1], c = dn(e, v);
          o.selectedMap = (n = {}, n[c] = !0, n), this._selectedDataIndicesMap = (a = {}, a[c] = e.getRawIndex(v), a);
        }
      }
    }, t.prototype._initSelectedMapFromData = function(e) {
      if (!this.option.selectedMap) {
        var i = [];
        e.hasItemOption && e.each(function(n) {
          var a = e.getRawDataItem(n);
          a && a.selected && i.push(n);
        }), i.length > 0 && this._innerSelect(e, i);
      }
    }, t.registerClass = function(e) {
      return st.registerClass(e);
    }, t.protoInitialize = function() {
      var e = t.prototype;
      e.type = "series.__base__", e.seriesIndex = 0, e.ignoreStyleOnData = !1, e.hasSymbolVisual = !1, e.defaultSymbol = "circle", e.visualStyleAccessPath = "itemStyle", e.visualDrawType = "fill";
    }(), t;
  }(st)
);
Ee(Ca, X0);
Ee(Ca, qs);
Ph(Ca, st);
function Zl(r) {
  var t = r.name;
  Mh(r) || (r.name = hy(r) || t);
}
function hy(r) {
  var t = r.getRawData(), e = t.mapDimensionsAll("seriesName"), i = [];
  return L(e, function(n) {
    var a = t.getDimensionInfo(n);
    a.displayName && i.push(a.displayName);
  }), i.join(" ");
}
function vy(r) {
  return r.model.getRawData().count();
}
function cy(r) {
  var t = r.model;
  return t.setData(t.getRawData().cloneShallow()), dy;
}
function dy(r, t) {
  t.outputData && r.end > t.outputData.count() && t.model.getRawData().cloneShallow(t.outputData);
}
function Kl(r, t) {
  L(Fc(r.CHANGABLE_METHODS, r.DOWNSAMPLE_METHODS), function(e) {
    r.wrapMethod(e, Rs(py, t));
  });
}
function py(r, t) {
  var e = gs(r);
  return e && e.setOutputEnd((t || this).count()), t;
}
function gs(r) {
  var t = (r.ecModel || {}).scheduler, e = t && t.getPipeline(r.uid);
  if (e) {
    var i = e.currentTask;
    if (i) {
      var n = i.agentStubMap;
      n && (i = n.get(r.uid));
    }
    return i;
  }
}
const Kr = Ca;
var Js = (
  /** @class */
  function() {
    function r() {
      this.group = new $r(), this.uid = Sa("viewComponent");
    }
    return r.prototype.init = function(t, e) {
    }, r.prototype.render = function(t, e, i, n) {
    }, r.prototype.dispose = function(t, e) {
    }, r.prototype.updateView = function(t, e, i, n) {
    }, r.prototype.updateLayout = function(t, e, i, n) {
    }, r.prototype.updateVisual = function(t, e, i, n) {
    }, r.prototype.toggleBlurSeries = function(t, e, i) {
    }, r.prototype.eachRendered = function(t) {
      var e = this.group;
      e && e.traverse(t);
    }, r;
  }()
);
Vs(Js);
zs(Js);
const ea = Js;
function gy() {
  var r = _t();
  return function(t) {
    var e = r(t), i = t.pipelineContext, n = !!e.large, a = !!e.progressiveRender, o = e.large = !!(i && i.large), s = e.progressiveRender = !!(i && i.progressiveRender);
    return (n !== o || a !== s) && "reset";
  };
}
var Pv = _t(), _y = gy(), js = (
  /** @class */
  function() {
    function r() {
      this.group = new $r(), this.uid = Sa("viewChart"), this.renderTask = Hi({
        plan: yy,
        reset: my
      }), this.renderTask.context = {
        view: this
      };
    }
    return r.prototype.init = function(t, e) {
    }, r.prototype.render = function(t, e, i, n) {
      if (process.env.NODE_ENV !== "production")
        throw new Error("render method must been implemented");
    }, r.prototype.highlight = function(t, e, i, n) {
      var a = t.getData(n && n.dataType);
      if (!a) {
        process.env.NODE_ENV !== "production" && wt("Unknown dataType " + n.dataType);
        return;
      }
      Jl(a, n, "emphasis");
    }, r.prototype.downplay = function(t, e, i, n) {
      var a = t.getData(n && n.dataType);
      if (!a) {
        process.env.NODE_ENV !== "production" && wt("Unknown dataType " + n.dataType);
        return;
      }
      Jl(a, n, "normal");
    }, r.prototype.remove = function(t, e) {
      this.group.removeAll();
    }, r.prototype.dispose = function(t, e) {
    }, r.prototype.updateView = function(t, e, i, n) {
      this.render(t, e, i, n);
    }, r.prototype.updateLayout = function(t, e, i, n) {
      this.render(t, e, i, n);
    }, r.prototype.updateVisual = function(t, e, i, n) {
      this.render(t, e, i, n);
    }, r.prototype.eachRendered = function(t) {
      R_(this.group, t);
    }, r.markUpdateMethod = function(t, e) {
      Pv(t).updateMethod = e;
    }, r.protoInitialize = function() {
      var t = r.prototype;
      t.type = "chart";
    }(), r;
  }()
);
function Ql(r, t, e) {
  r && Zr(r) && (t === "emphasis" ? ns : as)(r, e);
}
function Jl(r, t, e) {
  var i = da(r, t), n = t && t.highlightKey != null ? r_(t.highlightKey) : null;
  i != null ? L(Mt(i), function(a) {
    Ql(r.getItemGraphicEl(a), e, n);
  }) : r.eachItemGraphicEl(function(a) {
    Ql(a, e, n);
  });
}
Vs(js, ["dispose"]);
zs(js);
function yy(r) {
  return _y(r.model);
}
function my(r) {
  var t = r.model, e = r.ecModel, i = r.api, n = r.payload, a = t.pipelineContext.progressiveRender, o = r.view, s = n && Pv(n).updateMethod, u = a ? "incrementalPrepareRender" : s && o[s] ? s : "render";
  return u !== "render" && o[u](t, e, i, n), wy[u];
}
var wy = {
  incrementalPrepareRender: {
    progress: function(r, t) {
      t.view.incrementalRender(r, t.model, t.ecModel, t.api, t.payload);
    }
  },
  render: {
    // Put view.render in `progress` to support appendData. But in this case
    // view.render should not be called in reset, otherwise it will be called
    // twise. Use `forceFirstProgress` to make sure that view.render is called
    // in any cases.
    forceFirstProgress: !0,
    progress: function(r, t) {
      t.view.render(t.model, t.ecModel, t.api, t.payload);
    }
  }
};
const gr = js;
function Sy(r, t, e) {
  var i, n = 0, a = 0, o = null, s, u, l, f;
  t = t || 0;
  function h() {
    a = (/* @__PURE__ */ new Date()).getTime(), o = null, r.apply(u, l || []);
  }
  var c = function() {
    for (var v = [], d = 0; d < arguments.length; d++)
      v[d] = arguments[d];
    i = (/* @__PURE__ */ new Date()).getTime(), u = this, l = v;
    var _ = f || t, p = f || e;
    f = null, s = i - (p ? n : a) - _, clearTimeout(o), p ? o = setTimeout(h, _) : s >= 0 ? h() : o = setTimeout(h, -s), n = i;
  };
  return c.clear = function() {
    o && (clearTimeout(o), o = null);
  }, c.debounceNextCall = function(v) {
    f = v;
  }, c;
}
var jl = _t(), tf = {
  itemStyle: Gi(ov, !0),
  lineStyle: Gi(av, !0)
}, Ty = {
  lineStyle: "stroke",
  itemStyle: "fill"
};
function Rv(r, t) {
  var e = r.visualStyleMapper || tf[t];
  return e || (console.warn("Unknown style type '" + t + "'."), tf.itemStyle);
}
function Iv(r, t) {
  var e = r.visualDrawType || Ty[t];
  return e || (console.warn("Unknown style type '" + t + "'."), "fill");
}
var Dy = {
  createOnAllSeries: !0,
  performRawSeries: !0,
  reset: function(r, t) {
    var e = r.getData(), i = r.visualStyleAccessPath || "itemStyle", n = r.getModel(i), a = Rv(r, i), o = a(n), s = n.getShallow("decal");
    s && (e.setVisual("decal", s), s.dirty = !0);
    var u = Iv(r, i), l = o[u], f = J(l) ? l : null, h = o.fill === "auto" || o.stroke === "auto";
    if (!o[u] || f || h) {
      var c = r.getColorFromPalette(
        // TODO series count changed.
        r.name,
        null,
        t.getSeriesCount()
      );
      o[u] || (o[u] = c, e.setVisual("colorFromPalette", !0)), o.fill = o.fill === "auto" || J(o.fill) ? c : o.fill, o.stroke = o.stroke === "auto" || J(o.stroke) ? c : o.stroke;
    }
    if (e.setVisual("style", o), e.setVisual("drawType", u), !t.isSeriesFiltered(r) && f)
      return e.setVisual("colorFromPalette", !1), {
        dataEach: function(v, d) {
          var _ = r.getDataParams(d), p = N({}, o);
          p[u] = f(_), v.setItemVisual(d, "style", p);
        }
      };
  }
}, mi = new Fe(), Cy = {
  createOnAllSeries: !0,
  performRawSeries: !0,
  reset: function(r, t) {
    if (!(r.ignoreStyleOnData || t.isSeriesFiltered(r))) {
      var e = r.getData(), i = r.visualStyleAccessPath || "itemStyle", n = Rv(r, i), a = e.getVisual("drawType");
      return {
        dataEach: e.hasItemOption ? function(o, s) {
          var u = o.getRawDataItem(s);
          if (u && u[i]) {
            mi.option = u[i];
            var l = n(mi), f = o.ensureUniqueItemVisual(s, "style");
            N(f, l), mi.option.decal && (o.setItemVisual(s, "decal", mi.option.decal), mi.option.decal.dirty = !0), a in l && o.setItemVisual(s, "colorFromPalette", !1);
          }
        } : null
      };
    }
  }
}, by = {
  performRawSeries: !0,
  overallReset: function(r) {
    var t = $();
    r.eachSeries(function(e) {
      var i = e.getColorBy();
      if (!e.isColorBySeries()) {
        var n = e.type + "-" + i, a = t.get(n);
        a || (a = {}, t.set(n, a)), jl(e).scope = a;
      }
    }), r.eachSeries(function(e) {
      if (!(e.isColorBySeries() || r.isSeriesFiltered(e))) {
        var i = e.getRawData(), n = {}, a = e.getData(), o = jl(e).scope, s = e.visualStyleAccessPath || "itemStyle", u = Iv(e, s);
        a.each(function(l) {
          var f = a.getRawIndex(l);
          n[f] = l;
        }), i.each(function(l) {
          var f = n[l], h = a.getItemVisual(f, "colorFromPalette");
          if (h) {
            var c = a.ensureUniqueItemVisual(f, "style"), v = i.getName(l) || l + "", d = i.count();
            c[u] = e.getColorFromPalette(v, o, d);
          }
        });
      }
    });
  }
}, pn = Math.PI;
function Ey(r, t) {
  t = t || {}, Lt(t, {
    text: "loading",
    textColor: "#000",
    fontSize: 12,
    fontWeight: "normal",
    fontStyle: "normal",
    fontFamily: "sans-serif",
    maskColor: "rgba(255, 255, 255, 0.8)",
    showSpinner: !0,
    color: "#5470c6",
    spinnerRadius: 10,
    lineWidth: 5,
    zlevel: 0
  });
  var e = new $r(), i = new Ce({
    style: {
      fill: t.maskColor
    },
    zlevel: t.zlevel,
    z: 1e4
  });
  e.add(i);
  var n = new Xn({
    style: {
      text: t.text,
      fill: t.textColor,
      fontSize: t.fontSize,
      fontWeight: t.fontWeight,
      fontStyle: t.fontStyle,
      fontFamily: t.fontFamily
    },
    zlevel: t.zlevel,
    z: 10001
  }), a = new Ce({
    style: {
      fill: "none"
    },
    textContent: n,
    textConfig: {
      position: "right",
      distance: 10
    },
    zlevel: t.zlevel,
    z: 10001
  });
  e.add(a);
  var o;
  return t.showSpinner && (o = new D_({
    shape: {
      startAngle: -pn / 2,
      endAngle: -pn / 2 + 0.1,
      r: t.spinnerRadius
    },
    style: {
      stroke: t.color,
      lineCap: "round",
      lineWidth: t.lineWidth
    },
    zlevel: t.zlevel,
    z: 10001
  }), o.animateShape(!0).when(1e3, {
    endAngle: pn * 3 / 2
  }).start("circularInOut"), o.animateShape(!0).when(1e3, {
    startAngle: pn * 3 / 2
  }).delay(300).start("circularInOut"), e.add(o)), e.resize = function() {
    var s = n.getBoundingRect().width, u = t.showSpinner ? t.spinnerRadius : 0, l = (r.getWidth() - u * 2 - (t.showSpinner && s ? 10 : 0) - s) / 2 - (t.showSpinner && s ? 0 : 5 + s / 2) + (t.showSpinner ? 0 : s / 2) + (s ? 0 : u), f = r.getHeight() / 2;
    t.showSpinner && o.setShape({
      cx: l,
      cy: f
    }), a.setShape({
      x: l - u,
      y: f - u,
      width: u * 2,
      height: u * 2
    }), i.setShape({
      x: 0,
      y: 0,
      width: r.getWidth(),
      height: r.getHeight()
    });
  }, e.resize(), e;
}
var My = (
  /** @class */
  function() {
    function r(t, e, i, n) {
      this._stageTaskMap = $(), this.ecInstance = t, this.api = e, i = this._dataProcessorHandlers = i.slice(), n = this._visualHandlers = n.slice(), this._allHandlers = i.concat(n);
    }
    return r.prototype.restoreData = function(t, e) {
      t.restoreData(e), this._stageTaskMap.each(function(i) {
        var n = i.overallTask;
        n && n.dirty();
      });
    }, r.prototype.getPerformArgs = function(t, e) {
      if (t.__pipeline) {
        var i = this._pipelineMap.get(t.__pipeline.id), n = i.context, a = !e && i.progressiveEnabled && (!n || n.progressiveRender) && t.__idxInPipeline > i.blockIndex, o = a ? i.step : null, s = n && n.modDataCount, u = s != null ? Math.ceil(s / o) : null;
        return {
          step: o,
          modBy: u,
          modDataCount: s
        };
      }
    }, r.prototype.getPipeline = function(t) {
      return this._pipelineMap.get(t);
    }, r.prototype.updateStreamModes = function(t, e) {
      var i = this._pipelineMap.get(t.uid), n = t.getData(), a = n.count(), o = i.progressiveEnabled && e.incrementalPrepareRender && a >= i.threshold, s = t.get("large") && a >= t.get("largeThreshold"), u = t.get("progressiveChunkMode") === "mod" ? a : null;
      t.pipelineContext = i.context = {
        progressiveRender: o,
        modDataCount: u,
        large: s
      };
    }, r.prototype.restorePipelines = function(t) {
      var e = this, i = e._pipelineMap = $();
      t.eachSeries(function(n) {
        var a = n.getProgressive(), o = n.uid;
        i.set(o, {
          id: o,
          head: null,
          tail: null,
          threshold: n.getProgressiveThreshold(),
          progressiveEnabled: a && !(n.preventIncremental && n.preventIncremental()),
          blockIndex: -1,
          step: Math.round(a || 700),
          count: 0
        }), e._pipe(n, n.dataTask);
      });
    }, r.prototype.prepareStageTasks = function() {
      var t = this._stageTaskMap, e = this.api.getModel(), i = this.api;
      L(this._allHandlers, function(n) {
        var a = t.get(n.uid) || t.set(n.uid, {}), o = "";
        process.env.NODE_ENV !== "production" && (o = '"reset" and "overallReset" must not be both specified.'), U(!(n.reset && n.overallReset), o), n.reset && this._createSeriesStageTask(n, a, e, i), n.overallReset && this._createOverallStageTask(n, a, e, i);
      }, this);
    }, r.prototype.prepareView = function(t, e, i, n) {
      var a = t.renderTask, o = a.context;
      o.model = e, o.ecModel = i, o.api = n, a.__block = !t.incrementalPrepareRender, this._pipe(e, a);
    }, r.prototype.performDataProcessorTasks = function(t, e) {
      this._performStageTasks(this._dataProcessorHandlers, t, e, {
        block: !0
      });
    }, r.prototype.performVisualTasks = function(t, e, i) {
      this._performStageTasks(this._visualHandlers, t, e, i);
    }, r.prototype._performStageTasks = function(t, e, i, n) {
      n = n || {};
      var a = !1, o = this;
      L(t, function(u, l) {
        if (!(n.visualType && n.visualType !== u.visualType)) {
          var f = o._stageTaskMap.get(u.uid), h = f.seriesTaskMap, c = f.overallTask;
          if (c) {
            var v, d = c.agentStubMap;
            d.each(function(p) {
              s(n, p) && (p.dirty(), v = !0);
            }), v && c.dirty(), o.updatePayload(c, i);
            var _ = o.getPerformArgs(c, n.block);
            d.each(function(p) {
              p.perform(_);
            }), c.perform(_) && (a = !0);
          } else
            h && h.each(function(p, g) {
              s(n, p) && p.dirty();
              var y = o.getPerformArgs(p, n.block);
              y.skip = !u.performRawSeries && e.isSeriesFiltered(p.context.model), o.updatePayload(p, i), p.perform(y) && (a = !0);
            });
        }
      });
      function s(u, l) {
        return u.setDirty && (!u.dirtyMap || u.dirtyMap.get(l.__pipeline.id));
      }
      this.unfinished = a || this.unfinished;
    }, r.prototype.performSeriesTasks = function(t) {
      var e;
      t.eachSeries(function(i) {
        e = i.dataTask.perform() || e;
      }), this.unfinished = e || this.unfinished;
    }, r.prototype.plan = function() {
      this._pipelineMap.each(function(t) {
        var e = t.tail;
        do {
          if (e.__block) {
            t.blockIndex = e.__idxInPipeline;
            break;
          }
          e = e.getUpstream();
        } while (e);
      });
    }, r.prototype.updatePayload = function(t, e) {
      e !== "remain" && (t.context.payload = e);
    }, r.prototype._createSeriesStageTask = function(t, e, i, n) {
      var a = this, o = e.seriesTaskMap, s = e.seriesTaskMap = $(), u = t.seriesType, l = t.getTargetSeries;
      t.createOnAllSeries ? i.eachRawSeries(f) : u ? i.eachRawSeriesByType(u, f) : l && l(i, n).each(f);
      function f(h) {
        var c = h.uid, v = s.set(c, o && o.get(c) || Hi({
          plan: Iy,
          reset: Ay,
          count: Ny
        }));
        v.context = {
          model: h,
          ecModel: i,
          api: n,
          // PENDING: `useClearVisual` not used?
          useClearVisual: t.isVisual && !t.isLayout,
          plan: t.plan,
          reset: t.reset,
          scheduler: a
        }, a._pipe(h, v);
      }
    }, r.prototype._createOverallStageTask = function(t, e, i, n) {
      var a = this, o = e.overallTask = e.overallTask || Hi({
        reset: Ly
      });
      o.context = {
        ecModel: i,
        api: n,
        overallReset: t.overallReset,
        scheduler: a
      };
      var s = o.agentStubMap, u = o.agentStubMap = $(), l = t.seriesType, f = t.getTargetSeries, h = !0, c = !1, v = "";
      process.env.NODE_ENV !== "production" && (v = '"createOnAllSeries" is not supported for "overallReset", because it will block all streams.'), U(!t.createOnAllSeries, v), l ? i.eachRawSeriesByType(l, d) : f ? f(i, n).each(d) : (h = !1, L(i.getSeries(), d));
      function d(_) {
        var p = _.uid, g = u.set(p, s && s.get(p) || // When the result of `getTargetSeries` changed, the overallTask
        // should be set as dirty and re-performed.
        (c = !0, Hi({
          reset: xy,
          onDirty: Ry
        })));
        g.context = {
          model: _,
          overallProgress: h
          // FIXME:TS never used, so comment it
          // modifyOutputEnd: modifyOutputEnd
        }, g.agent = o, g.__block = h, a._pipe(_, g);
      }
      c && o.dirty();
    }, r.prototype._pipe = function(t, e) {
      var i = t.uid, n = this._pipelineMap.get(i);
      !n.head && (n.head = e), n.tail && n.tail.pipe(e), n.tail = e, e.__idxInPipeline = n.count++, e.__pipeline = n;
    }, r.wrapStageHandler = function(t, e) {
      return J(t) && (t = {
        overallReset: t,
        seriesType: By(t)
      }), t.uid = Sa("stageHandler"), e && (t.visualType = e), t;
    }, r;
  }()
);
function Ly(r) {
  r.overallReset(r.ecModel, r.api, r.payload);
}
function xy(r) {
  return r.overallProgress && Py;
}
function Py() {
  this.agent.dirty(), this.getDownstream().dirty();
}
function Ry() {
  this.agent && this.agent.dirty();
}
function Iy(r) {
  return r.plan ? r.plan(r.model, r.ecModel, r.api, r.payload) : null;
}
function Ay(r) {
  r.useClearVisual && r.data.clearAllVisual();
  var t = r.resetDefines = Mt(r.reset(r.model, r.ecModel, r.api, r.payload));
  return t.length > 1 ? it(t, function(e, i) {
    return Av(i);
  }) : Oy;
}
var Oy = Av(0);
function Av(r) {
  return function(t, e) {
    var i = e.data, n = e.resetDefines[r];
    if (n && n.dataEach)
      for (var a = t.start; a < t.end; a++)
        n.dataEach(i, a);
    else
      n && n.progress && n.progress(t, i);
  };
}
function Ny(r) {
  return r.data.count();
}
function By(r) {
  ra = null;
  try {
    r($i, Ov);
  } catch {
  }
  return ra;
}
var $i = {}, Ov = {}, ra;
Nv($i, dv);
Nv(Ov, pv);
$i.eachSeriesByType = $i.eachRawSeriesByType = function(r) {
  ra = r;
};
$i.eachComponent = function(r) {
  r.mainType === "series" && r.subType && (ra = r.subType);
};
function Nv(r, t) {
  for (var e in t.prototype)
    r[e] = te;
}
const Bv = My;
var ef = ["#37A2DA", "#32C5E9", "#67E0E3", "#9FE6B8", "#FFDB5C", "#ff9f7f", "#fb7293", "#E062AE", "#E690D1", "#e7bcf3", "#9d96f5", "#8378EA", "#96BFFF"];
const ky = {
  color: ef,
  colorLayer: [["#37A2DA", "#ffd85c", "#fd7b5f"], ["#37A2DA", "#67E0E3", "#FFDB5C", "#ff9f7f", "#E062AE", "#9d96f5"], ["#37A2DA", "#32C5E9", "#9FE6B8", "#FFDB5C", "#ff9f7f", "#fb7293", "#e7bcf3", "#8378EA", "#96BFFF"], ef]
};
var Tt = "#B9B8CE", rf = "#100C2A", gn = function() {
  return {
    axisLine: {
      lineStyle: {
        color: Tt
      }
    },
    splitLine: {
      lineStyle: {
        color: "#484753"
      }
    },
    splitArea: {
      areaStyle: {
        color: ["rgba(255,255,255,0.02)", "rgba(255,255,255,0.05)"]
      }
    },
    minorSplitLine: {
      lineStyle: {
        color: "#20203B"
      }
    }
  };
}, nf = ["#4992ff", "#7cffb2", "#fddd60", "#ff6e76", "#58d9f9", "#05c091", "#ff8a45", "#8d48e3", "#dd79ff"], kv = {
  darkMode: !0,
  color: nf,
  backgroundColor: rf,
  axisPointer: {
    lineStyle: {
      color: "#817f91"
    },
    crossStyle: {
      color: "#817f91"
    },
    label: {
      // TODO Contrast of label backgorundColor
      color: "#fff"
    }
  },
  legend: {
    textStyle: {
      color: Tt
    }
  },
  textStyle: {
    color: Tt
  },
  title: {
    textStyle: {
      color: "#EEF1FA"
    },
    subtextStyle: {
      color: "#B9B8CE"
    }
  },
  toolbox: {
    iconStyle: {
      borderColor: Tt
    }
  },
  dataZoom: {
    borderColor: "#71708A",
    textStyle: {
      color: Tt
    },
    brushStyle: {
      color: "rgba(135,163,206,0.3)"
    },
    handleStyle: {
      color: "#353450",
      borderColor: "#C5CBE3"
    },
    moveHandleStyle: {
      color: "#B0B6C3",
      opacity: 0.3
    },
    fillerColor: "rgba(135,163,206,0.2)",
    emphasis: {
      handleStyle: {
        borderColor: "#91B7F2",
        color: "#4D587D"
      },
      moveHandleStyle: {
        color: "#636D9A",
        opacity: 0.7
      }
    },
    dataBackground: {
      lineStyle: {
        color: "#71708A",
        width: 1
      },
      areaStyle: {
        color: "#71708A"
      }
    },
    selectedDataBackground: {
      lineStyle: {
        color: "#87A3CE"
      },
      areaStyle: {
        color: "#87A3CE"
      }
    }
  },
  visualMap: {
    textStyle: {
      color: Tt
    }
  },
  timeline: {
    lineStyle: {
      color: Tt
    },
    label: {
      color: Tt
    },
    controlStyle: {
      color: Tt,
      borderColor: Tt
    }
  },
  calendar: {
    itemStyle: {
      color: rf
    },
    dayLabel: {
      color: Tt
    },
    monthLabel: {
      color: Tt
    },
    yearLabel: {
      color: Tt
    }
  },
  timeAxis: gn(),
  logAxis: gn(),
  valueAxis: gn(),
  categoryAxis: gn(),
  line: {
    symbol: "circle"
  },
  graph: {
    color: nf
  },
  gauge: {
    title: {
      color: Tt
    },
    axisLine: {
      lineStyle: {
        color: [[1, "rgba(207,212,219,0.2)"]]
      }
    },
    axisLabel: {
      color: Tt
    },
    detail: {
      color: "#EEF1FA"
    }
  },
  candlestick: {
    itemStyle: {
      color: "#f64e56",
      color0: "#54ea92",
      borderColor: "#f64e56",
      borderColor0: "#54ea92"
      // borderColor: '#ca2824',
      // borderColor0: '#09a443'
    }
  }
};
kv.categoryAxis.splitLine.show = !1;
const Fy = kv;
var Vy = (
  /** @class */
  function() {
    function r() {
    }
    return r.prototype.normalizeQuery = function(t) {
      var e = {}, i = {}, n = {};
      if (Z(t)) {
        var a = fe(t);
        e.mainType = a.main || null, e.subType = a.sub || null;
      } else {
        var o = ["Index", "Name", "Id"], s = {
          name: 1,
          dataIndex: 1,
          dataType: 1
        };
        L(t, function(u, l) {
          for (var f = !1, h = 0; h < o.length; h++) {
            var c = o[h], v = l.lastIndexOf(c);
            if (v > 0 && v === l.length - c.length) {
              var d = l.slice(0, v);
              d !== "data" && (e.mainType = d, e[c.toLowerCase()] = u, f = !0);
            }
          }
          s.hasOwnProperty(l) && (i[l] = u, f = !0), f || (n[l] = u);
        });
      }
      return {
        cptQuery: e,
        dataQuery: i,
        otherQuery: n
      };
    }, r.prototype.filter = function(t, e) {
      var i = this.eventInfo;
      if (!i)
        return !0;
      var n = i.targetEl, a = i.packedEvent, o = i.model, s = i.view;
      if (!o || !s)
        return !0;
      var u = e.cptQuery, l = e.dataQuery;
      return f(u, o, "mainType") && f(u, o, "subType") && f(u, o, "index", "componentIndex") && f(u, o, "name") && f(u, o, "id") && f(l, a, "name") && f(l, a, "dataIndex") && f(l, a, "dataType") && (!s.filterForExposedEvent || s.filterForExposedEvent(t, e.otherQuery, n, a));
      function f(h, c, v, d) {
        return h[v] == null || c[d || v] === h[v];
      }
    }, r.prototype.afterTrigger = function() {
      this.eventInfo = null;
    }, r;
  }()
), _s = ["symbol", "symbolSize", "symbolRotate", "symbolOffset"], af = _s.concat(["symbolKeepAspect"]), zy = {
  createOnAllSeries: !0,
  // For legend.
  performRawSeries: !0,
  reset: function(r, t) {
    var e = r.getData();
    if (r.legendIcon && e.setVisual("legendIcon", r.legendIcon), !r.hasSymbolVisual)
      return;
    for (var i = {}, n = {}, a = !1, o = 0; o < _s.length; o++) {
      var s = _s[o], u = r.get(s);
      J(u) ? (a = !0, n[s] = u) : i[s] = u;
    }
    if (i.symbol = i.symbol || r.defaultSymbol, e.setVisual(N({
      legendIcon: r.legendIcon || i.symbol,
      symbolKeepAspect: r.get("symbolKeepAspect")
    }, i)), t.isSeriesFiltered(r))
      return;
    var l = lt(n);
    function f(h, c) {
      for (var v = r.getRawValue(c), d = r.getDataParams(c), _ = 0; _ < l.length; _++) {
        var p = l[_];
        h.setItemVisual(c, p, n[p](v, d));
      }
    }
    return {
      dataEach: a ? f : null
    };
  }
}, Hy = {
  createOnAllSeries: !0,
  // For legend.
  performRawSeries: !0,
  reset: function(r, t) {
    if (!r.hasSymbolVisual || t.isSeriesFiltered(r))
      return;
    var e = r.getData();
    function i(n, a) {
      for (var o = n.getItemModel(a), s = 0; s < af.length; s++) {
        var u = af[s], l = o.getShallow(u, !0);
        l != null && n.setItemVisual(a, u, l);
      }
    }
    return {
      dataEach: e.hasItemOption ? i : null
    };
  }
};
function Uy(r, t, e) {
  switch (e) {
    case "color":
      var i = r.getItemVisual(t, "style");
      return i[r.getVisual("drawType")];
    case "opacity":
      return r.getItemVisual(t, "style").opacity;
    case "symbol":
    case "symbolSize":
    case "liftZ":
      return r.getItemVisual(t, e);
    default:
      process.env.NODE_ENV !== "production" && console.warn("Unknown visual type " + e);
  }
}
function Yy(r, t) {
  switch (t) {
    case "color":
      var e = r.getVisual("style");
      return e[r.getVisual("drawType")];
    case "opacity":
      return r.getVisual("style").opacity;
    case "symbol":
    case "symbolSize":
    case "liftZ":
      return r.getVisual(t);
    default:
      process.env.NODE_ENV !== "production" && console.warn("Unknown visual type " + t);
  }
}
function Pr(r, t, e, i, n) {
  var a = r + t;
  e.isSilent(a) || (process.env.NODE_ENV !== "production" && ce("event " + a + " is deprecated."), i.eachComponent({
    mainType: "series",
    subType: "pie"
  }, function(o) {
    for (var s = o.seriesIndex, u = o.option.selectedMap, l = n.selected, f = 0; f < l.length; f++)
      if (l[f].seriesIndex === s) {
        var h = o.getData(), c = da(h, n.fromActionPayload);
        e.trigger(a, {
          type: a,
          seriesId: o.id,
          name: Y(c) ? h.getName(c[0]) : h.getName(c),
          selected: Z(u) ? u : N({}, u)
        });
      }
  }));
}
function Gy(r, t, e) {
  r.on("selectchanged", function(i) {
    var n = e.getModel();
    i.isFromClick ? (Pr("map", "selectchanged", t, n, i), Pr("pie", "selectchanged", t, n, i)) : i.fromAction === "select" ? (Pr("map", "selected", t, n, i), Pr("pie", "selected", t, n, i)) : i.fromAction === "unselect" && (Pr("map", "unselected", t, n, i), Pr("pie", "unselected", t, n, i));
  });
}
function _n(r, t, e) {
  for (var i; r && !(t(r) && (i = r, e)); )
    r = r.__hostTarget || r.parent;
  return i;
}
var Wy = Math.round(Math.random() * 9), $y = typeof Object.defineProperty == "function", Xy = function() {
  function r() {
    this._id = "__ec_inner_" + Wy++;
  }
  return r.prototype.get = function(t) {
    return this._guard(t)[this._id];
  }, r.prototype.set = function(t, e) {
    var i = this._guard(t);
    return $y ? Object.defineProperty(i, this._id, {
      value: e,
      enumerable: !1,
      configurable: !0
    }) : i[this._id] = e, this;
  }, r.prototype.delete = function(t) {
    return this.has(t) ? (delete this._guard(t)[this._id], !0) : !1;
  }, r.prototype.has = function(t) {
    return !!this._guard(t)[this._id];
  }, r.prototype._guard = function(t) {
    if (t !== Object(t))
      throw TypeError("Value of WeakMap is not a non-null object.");
    return t;
  }, r;
}();
const qy = Xy;
var Zy = ht.extend({
  type: "triangle",
  shape: {
    cx: 0,
    cy: 0,
    width: 0,
    height: 0
  },
  buildPath: function(r, t) {
    var e = t.cx, i = t.cy, n = t.width / 2, a = t.height / 2;
    r.moveTo(e, i - a), r.lineTo(e + n, i + a), r.lineTo(e - n, i + a), r.closePath();
  }
}), Ky = ht.extend({
  type: "diamond",
  shape: {
    cx: 0,
    cy: 0,
    width: 0,
    height: 0
  },
  buildPath: function(r, t) {
    var e = t.cx, i = t.cy, n = t.width / 2, a = t.height / 2;
    r.moveTo(e, i - a), r.lineTo(e + n, i), r.lineTo(e, i + a), r.lineTo(e - n, i), r.closePath();
  }
}), Qy = ht.extend({
  type: "pin",
  shape: {
    // x, y on the cusp
    x: 0,
    y: 0,
    width: 0,
    height: 0
  },
  buildPath: function(r, t) {
    var e = t.x, i = t.y, n = t.width / 5 * 3, a = Math.max(n, t.height), o = n / 2, s = o * o / (a - o), u = i - a + o + s, l = Math.asin(s / o), f = Math.cos(l) * o, h = Math.sin(l), c = Math.cos(l), v = o * 0.6, d = o * 0.7;
    r.moveTo(e - f, u + s), r.arc(e, u, o, Math.PI - l, Math.PI * 2 + l), r.bezierCurveTo(e + f - h * v, u + s + c * v, e, i - d, e, i), r.bezierCurveTo(e, i - d, e - f + h * v, u + s + c * v, e - f, u + s), r.closePath();
  }
}), Jy = ht.extend({
  type: "arrow",
  shape: {
    x: 0,
    y: 0,
    width: 0,
    height: 0
  },
  buildPath: function(r, t) {
    var e = t.height, i = t.width, n = t.x, a = t.y, o = i / 3 * 2;
    r.moveTo(n, a), r.lineTo(n + o, a + e), r.lineTo(n, a + e / 4 * 3), r.lineTo(n - o, a + e), r.lineTo(n, a), r.closePath();
  }
}), jy = {
  line: S_,
  rect: Ce,
  roundRect: Ce,
  square: Ce,
  circle: Jh,
  diamond: Ky,
  pin: Qy,
  arrow: Jy,
  triangle: Zy
}, tm = {
  line: function(r, t, e, i, n) {
    n.x1 = r, n.y1 = t + i / 2, n.x2 = r + e, n.y2 = t + i / 2;
  },
  rect: function(r, t, e, i, n) {
    n.x = r, n.y = t, n.width = e, n.height = i;
  },
  roundRect: function(r, t, e, i, n) {
    n.x = r, n.y = t, n.width = e, n.height = i, n.r = Math.min(e, i) / 4;
  },
  square: function(r, t, e, i, n) {
    var a = Math.min(e, i);
    n.x = r, n.y = t, n.width = a, n.height = a;
  },
  circle: function(r, t, e, i, n) {
    n.cx = r + e / 2, n.cy = t + i / 2, n.r = Math.min(e, i) / 2;
  },
  diamond: function(r, t, e, i, n) {
    n.cx = r + e / 2, n.cy = t + i / 2, n.width = e, n.height = i;
  },
  pin: function(r, t, e, i, n) {
    n.x = r + e / 2, n.y = t + i / 2, n.width = e, n.height = i;
  },
  arrow: function(r, t, e, i, n) {
    n.x = r + e / 2, n.y = t + i / 2, n.width = e, n.height = i;
  },
  triangle: function(r, t, e, i, n) {
    n.cx = r + e / 2, n.cy = t + i / 2, n.width = e, n.height = i;
  }
}, ys = {};
L(jy, function(r, t) {
  ys[t] = new r();
});
var em = ht.extend({
  type: "symbol",
  shape: {
    symbolType: "",
    x: 0,
    y: 0,
    width: 0,
    height: 0
  },
  calculateTextPosition: function(r, t, e) {
    var i = _h(r, t, e), n = this.shape;
    return n && n.symbolType === "pin" && t.position === "inside" && (i.y = e.y + e.height * 0.4), i;
  },
  buildPath: function(r, t, e) {
    var i = t.symbolType;
    if (i !== "none") {
      var n = ys[i];
      n || (i = "rect", n = ys[i]), tm[i](t.x, t.y, t.width, t.height, n.shape), n.buildPath(r, n.shape, e);
    }
  }
});
function rm(r, t) {
  if (this.type !== "image") {
    var e = this.style;
    this.__isEmptyBrush ? (e.stroke = r, e.fill = t || "#fff", e.lineWidth = 2) : this.shape.symbolType === "line" ? e.stroke = r : e.fill = r, this.markRedraw();
  }
}
function ms(r, t, e, i, n, a, o) {
  var s = r.indexOf("empty") === 0;
  s && (r = r.substr(5, 1).toLowerCase() + r.substr(6));
  var u;
  return r.indexOf("image://") === 0 ? u = x_(r.slice(8), new et(t, e, i, n), o ? "center" : "cover") : r.indexOf("path://") === 0 ? u = hs(r.slice(7), {}, new et(t, e, i, n), o ? "center" : "cover") : u = new em({
    shape: {
      symbolType: r,
      x: t,
      y: e,
      width: i,
      height: n
    }
  }), u.__isEmptyBrush = s, u.setColor = rm, a && u.setColor(a), u;
}
function fr(r) {
  return isFinite(r);
}
function im(r, t, e) {
  var i = t.x == null ? 0 : t.x, n = t.x2 == null ? 1 : t.x2, a = t.y == null ? 0 : t.y, o = t.y2 == null ? 0 : t.y2;
  t.global || (i = i * e.width + e.x, n = n * e.width + e.x, a = a * e.height + e.y, o = o * e.height + e.y), i = fr(i) ? i : 0, n = fr(n) ? n : 1, a = fr(a) ? a : 0, o = fr(o) ? o : 0;
  var s = r.createLinearGradient(i, a, n, o);
  return s;
}
function nm(r, t, e) {
  var i = e.width, n = e.height, a = Math.min(i, n), o = t.x == null ? 0.5 : t.x, s = t.y == null ? 0.5 : t.y, u = t.r == null ? 0.5 : t.r;
  t.global || (o = o * i + e.x, s = s * n + e.y, u = u * a), o = fr(o) ? o : 0.5, s = fr(s) ? s : 0.5, u = u >= 0 && fr(u) ? u : 0.5;
  var l = r.createRadialGradient(o, s, 0, o, s, u);
  return l;
}
function ws(r, t, e) {
  for (var i = t.type === "radial" ? nm(r, t, e) : im(r, t, e), n = t.colorStops, a = 0; a < n.length; a++)
    i.addColorStop(n[a].offset, n[a].color);
  return i;
}
function am(r, t) {
  if (r === t || !r && !t)
    return !1;
  if (!r || !t || r.length !== t.length)
    return !0;
  for (var e = 0; e < r.length; e++)
    if (r[e] !== t[e])
      return !0;
  return !1;
}
function yn(r) {
  return parseInt(r, 10);
}
function mn(r, t, e) {
  var i = ["width", "height"][t], n = ["clientWidth", "clientHeight"][t], a = ["paddingLeft", "paddingTop"][t], o = ["paddingRight", "paddingBottom"][t];
  if (e[i] != null && e[i] !== "auto")
    return parseFloat(e[i]);
  var s = document.defaultView.getComputedStyle(r);
  return (r[n] || yn(s[i]) || yn(r.style[i])) - (yn(s[a]) || 0) - (yn(s[o]) || 0) | 0;
}
function om(r, t) {
  return !r || r === "solid" || !(t > 0) ? null : r === "dashed" ? [4 * t, 2 * t] : r === "dotted" ? [t] : Et(r) ? [r] : Y(r) ? r : null;
}
function Fv(r) {
  var t = r.style, e = t.lineDash && t.lineWidth > 0 && om(t.lineDash, t.lineWidth), i = t.lineDashOffset;
  if (e) {
    var n = t.strokeNoScale && r.getLineScale ? r.getLineScale() : 1;
    n && n !== 1 && (e = it(e, function(a) {
      return a / n;
    }), i /= n);
  }
  return [e, i];
}
var sm = new yr(!0);
function ia(r) {
  var t = r.stroke;
  return !(t == null || t === "none" || !(r.lineWidth > 0));
}
function of(r) {
  return typeof r == "string" && r !== "none";
}
function na(r) {
  var t = r.fill;
  return t != null && t !== "none";
}
function sf(r, t) {
  if (t.fillOpacity != null && t.fillOpacity !== 1) {
    var e = r.globalAlpha;
    r.globalAlpha = t.fillOpacity * t.opacity, r.fill(), r.globalAlpha = e;
  } else
    r.fill();
}
function uf(r, t) {
  if (t.strokeOpacity != null && t.strokeOpacity !== 1) {
    var e = r.globalAlpha;
    r.globalAlpha = t.strokeOpacity * t.opacity, r.stroke(), r.globalAlpha = e;
  } else
    r.stroke();
}
function Ss(r, t, e) {
  var i = Rh(t.image, t.__image, e);
  if (ga(i)) {
    var n = r.createPattern(i, t.repeat || "repeat");
    if (typeof DOMMatrix == "function" && n && n.setTransform) {
      var a = new DOMMatrix();
      a.translateSelf(t.x || 0, t.y || 0), a.rotateSelf(0, 0, (t.rotation || 0) * Vc), a.scaleSelf(t.scaleX || 1, t.scaleY || 1), n.setTransform(a);
    }
    return n;
  }
}
function um(r, t, e, i) {
  var n, a = ia(e), o = na(e), s = e.strokePercent, u = s < 1, l = !t.path;
  (!t.silent || u) && l && t.createPathProxy();
  var f = t.path || sm, h = t.__dirty;
  if (!i) {
    var c = e.fill, v = e.stroke, d = o && !!c.colorStops, _ = a && !!v.colorStops, p = o && !!c.image, g = a && !!v.image, y = void 0, m = void 0, w = void 0, T = void 0, S = void 0;
    (d || _) && (S = t.getBoundingRect()), d && (y = h ? ws(r, c, S) : t.__canvasFillGradient, t.__canvasFillGradient = y), _ && (m = h ? ws(r, v, S) : t.__canvasStrokeGradient, t.__canvasStrokeGradient = m), p && (w = h || !t.__canvasFillPattern ? Ss(r, c, t) : t.__canvasFillPattern, t.__canvasFillPattern = w), g && (T = h || !t.__canvasStrokePattern ? Ss(r, v, t) : t.__canvasStrokePattern, t.__canvasStrokePattern = w), d ? r.fillStyle = y : p && (w ? r.fillStyle = w : o = !1), _ ? r.strokeStyle = m : g && (T ? r.strokeStyle = T : a = !1);
  }
  var D = t.getGlobalScale();
  f.setScale(D[0], D[1], t.segmentIgnoreThreshold);
  var C, b;
  r.setLineDash && e.lineDash && (n = Fv(t), C = n[0], b = n[1]);
  var M = !0;
  (l || h & Ar) && (f.setDPR(r.dpr), u ? f.setContext(null) : (f.setContext(r), M = !1), f.reset(), t.buildPath(f, t.shape, i), f.toStatic(), t.pathUpdated()), M && f.rebuildPath(r, u ? s : 1), C && (r.setLineDash(C), r.lineDashOffset = b), i || (e.strokeFirst ? (a && uf(r, e), o && sf(r, e)) : (o && sf(r, e), a && uf(r, e))), C && r.setLineDash([]);
}
function lm(r, t, e) {
  var i = t.__image = Rh(e.image, t.__image, t, t.onload);
  if (!(!i || !ga(i))) {
    var n = e.x || 0, a = e.y || 0, o = t.getWidth(), s = t.getHeight(), u = i.width / i.height;
    if (o == null && s != null ? o = s * u : s == null && o != null ? s = o / u : o == null && s == null && (o = i.width, s = i.height), e.sWidth && e.sHeight) {
      var l = e.sx || 0, f = e.sy || 0;
      r.drawImage(i, l, f, e.sWidth, e.sHeight, n, a, o, s);
    } else if (e.sx && e.sy) {
      var l = e.sx, f = e.sy, h = o - l, c = s - f;
      r.drawImage(i, l, f, h, c, n, a, o, s);
    } else
      r.drawImage(i, n, a, o, s);
  }
}
function fm(r, t, e) {
  var i, n = e.text;
  if (n != null && (n += ""), n) {
    r.font = e.font || _r, r.textAlign = e.textAlign, r.textBaseline = e.textBaseline;
    var a = void 0, o = void 0;
    r.setLineDash && e.lineDash && (i = Fv(t), a = i[0], o = i[1]), a && (r.setLineDash(a), r.lineDashOffset = o), e.strokeFirst ? (ia(e) && r.strokeText(n, e.x, e.y), na(e) && r.fillText(n, e.x, e.y)) : (na(e) && r.fillText(n, e.x, e.y), ia(e) && r.strokeText(n, e.x, e.y)), a && r.setLineDash([]);
  }
}
var lf = ["shadowBlur", "shadowOffsetX", "shadowOffsetY"], ff = [
  ["lineCap", "butt"],
  ["lineJoin", "miter"],
  ["miterLimit", 10]
];
function Vv(r, t, e, i, n) {
  var a = !1;
  if (!i && (e = e || {}, t === e))
    return !1;
  if (i || t.opacity !== e.opacity) {
    Ot(r, n), a = !0;
    var o = Math.max(Math.min(t.opacity, 1), 0);
    r.globalAlpha = isNaN(o) ? dr.opacity : o;
  }
  (i || t.blend !== e.blend) && (a || (Ot(r, n), a = !0), r.globalCompositeOperation = t.blend || dr.blend);
  for (var s = 0; s < lf.length; s++) {
    var u = lf[s];
    (i || t[u] !== e[u]) && (a || (Ot(r, n), a = !0), r[u] = r.dpr * (t[u] || 0));
  }
  return (i || t.shadowColor !== e.shadowColor) && (a || (Ot(r, n), a = !0), r.shadowColor = t.shadowColor || dr.shadowColor), a;
}
function hf(r, t, e, i, n) {
  var a = Xi(t, n.inHover), o = i ? null : e && Xi(e, n.inHover) || {};
  if (a === o)
    return !1;
  var s = Vv(r, a, o, i, n);
  if ((i || a.fill !== o.fill) && (s || (Ot(r, n), s = !0), of(a.fill) && (r.fillStyle = a.fill)), (i || a.stroke !== o.stroke) && (s || (Ot(r, n), s = !0), of(a.stroke) && (r.strokeStyle = a.stroke)), (i || a.opacity !== o.opacity) && (s || (Ot(r, n), s = !0), r.globalAlpha = a.opacity == null ? 1 : a.opacity), t.hasStroke()) {
    var u = a.lineWidth, l = u / (a.strokeNoScale && t.getLineScale ? t.getLineScale() : 1);
    r.lineWidth !== l && (s || (Ot(r, n), s = !0), r.lineWidth = l);
  }
  for (var f = 0; f < ff.length; f++) {
    var h = ff[f], c = h[0];
    (i || a[c] !== o[c]) && (s || (Ot(r, n), s = !0), r[c] = a[c] || h[1]);
  }
  return s;
}
function hm(r, t, e, i, n) {
  return Vv(r, Xi(t, n.inHover), e && Xi(e, n.inHover), i, n);
}
function zv(r, t) {
  var e = t.transform, i = r.dpr || 1;
  e ? r.setTransform(i * e[0], i * e[1], i * e[2], i * e[3], i * e[4], i * e[5]) : r.setTransform(i, 0, 0, i, 0, 0);
}
function vm(r, t, e) {
  for (var i = !1, n = 0; n < r.length; n++) {
    var a = r[n];
    i = i || a.isZeroArea(), zv(t, a), t.beginPath(), a.buildPath(t, a.shape), t.clip();
  }
  e.allClipped = i;
}
function cm(r, t) {
  return r && t ? r[0] !== t[0] || r[1] !== t[1] || r[2] !== t[2] || r[3] !== t[3] || r[4] !== t[4] || r[5] !== t[5] : !(!r && !t);
}
var vf = 1, cf = 2, df = 3, pf = 4;
function dm(r) {
  var t = na(r), e = ia(r);
  return !(r.lineDash || !(+t ^ +e) || t && typeof r.fill != "string" || e && typeof r.stroke != "string" || r.strokePercent < 1 || r.strokeOpacity < 1 || r.fillOpacity < 1);
}
function Ot(r, t) {
  t.batchFill && r.fill(), t.batchStroke && r.stroke(), t.batchFill = "", t.batchStroke = "";
}
function Xi(r, t) {
  return t && r.__hoverStyle || r.style;
}
function Hv(r, t) {
  hr(r, t, { inHover: !1, viewWidth: 0, viewHeight: 0 }, !0);
}
function hr(r, t, e, i) {
  var n = t.transform;
  if (!t.shouldBePainted(e.viewWidth, e.viewHeight, !1, !1)) {
    t.__dirty &= ~Ut, t.__isRendered = !1;
    return;
  }
  var a = t.__clipPaths, o = e.prevElClipPaths, s = !1, u = !1;
  if ((!o || am(a, o)) && (o && o.length && (Ot(r, e), r.restore(), u = s = !0, e.prevElClipPaths = null, e.allClipped = !1, e.prevEl = null), a && a.length && (Ot(r, e), r.save(), vm(a, r, e), s = !0), e.prevElClipPaths = a), e.allClipped) {
    t.__isRendered = !1;
    return;
  }
  t.beforeBrush && t.beforeBrush(), t.innerBeforeBrush();
  var l = e.prevEl;
  l || (u = s = !0);
  var f = t instanceof ht && t.autoBatch && dm(t.style);
  s || cm(n, l.transform) ? (Ot(r, e), zv(r, t)) : f || Ot(r, e);
  var h = Xi(t, e.inHover);
  t instanceof ht ? (e.lastDrawType !== vf && (u = !0, e.lastDrawType = vf), hf(r, t, l, u, e), (!f || !e.batchFill && !e.batchStroke) && r.beginPath(), um(r, t, h, f), f && (e.batchFill = h.fill || "", e.batchStroke = h.stroke || "")) : t instanceof is ? (e.lastDrawType !== df && (u = !0, e.lastDrawType = df), hf(r, t, l, u, e), fm(r, t, h)) : t instanceof ma ? (e.lastDrawType !== cf && (u = !0, e.lastDrawType = cf), hm(r, t, l, u, e), lm(r, t, h)) : t.getTemporalDisplayables && (e.lastDrawType !== pf && (u = !0, e.lastDrawType = pf), pm(r, t, e)), f && i && Ot(r, e), t.innerAfterBrush(), t.afterBrush && t.afterBrush(), e.prevEl = t, t.__dirty = 0, t.__isRendered = !0;
}
function pm(r, t, e) {
  var i = t.getDisplayables(), n = t.getTemporalDisplayables();
  r.save();
  var a = {
    prevElClipPaths: null,
    prevEl: null,
    allClipped: !1,
    viewWidth: e.viewWidth,
    viewHeight: e.viewHeight,
    inHover: e.inHover
  }, o, s;
  for (o = t.getCursor(), s = i.length; o < s; o++) {
    var u = i[o];
    u.beforeBrush && u.beforeBrush(), u.innerBeforeBrush(), hr(r, u, a, o === s - 1), u.innerAfterBrush(), u.afterBrush && u.afterBrush(), a.prevEl = u;
  }
  for (var l = 0, f = n.length; l < f; l++) {
    var u = n[l];
    u.beforeBrush && u.beforeBrush(), u.innerBeforeBrush(), hr(r, u, a, l === f - 1), u.innerAfterBrush(), u.afterBrush && u.afterBrush(), a.prevEl = u;
  }
  t.clearTemporalDisplayables(), t.notClear = !0, r.restore();
}
var mo = new qy(), gf = new qi(100), _f = ["symbol", "symbolSize", "symbolKeepAspect", "color", "backgroundColor", "dashArrayX", "dashArrayY", "maxTileWidth", "maxTileHeight"];
function yf(r, t) {
  if (r === "none")
    return null;
  var e = t.getDevicePixelRatio(), i = t.getZr(), n = i.painter.type === "svg";
  r.dirty && mo.delete(r);
  var a = mo.get(r);
  if (a)
    return a;
  var o = Lt(r, {
    symbol: "rect",
    symbolSize: 1,
    symbolKeepAspect: !0,
    color: "rgba(0, 0, 0, 0.2)",
    backgroundColor: null,
    dashArrayX: 5,
    dashArrayY: 5,
    rotation: 0,
    maxTileWidth: 512,
    maxTileHeight: 512
  });
  o.backgroundColor === "none" && (o.backgroundColor = null);
  var s = {
    repeat: "repeat"
  };
  return u(s), s.rotation = o.rotation, s.scaleX = s.scaleY = n ? 1 : 1 / e, mo.set(r, s), r.dirty = !1, s;
  function u(l) {
    for (var f = [e], h = !0, c = 0; c < _f.length; ++c) {
      var v = o[_f[c]];
      if (v != null && !Y(v) && !Z(v) && !Et(v) && typeof v != "boolean") {
        h = !1;
        break;
      }
      f.push(v);
    }
    var d;
    if (h) {
      d = f.join(",") + (n ? "-svg" : "");
      var _ = gf.get(d);
      _ && (n ? l.svgElement = _ : l.image = _);
    }
    var p = Yv(o.dashArrayX), g = gm(o.dashArrayY), y = Uv(o.symbol), m = _m(p), w = Gv(g), T = !n && Jr.createCanvas(), S = n && {
      tag: "g",
      attrs: {},
      key: "dcl",
      children: []
    }, D = b(), C;
    T && (T.width = D.width * e, T.height = D.height * e, C = T.getContext("2d")), M(), h && gf.put(d, T || S), l.image = T, l.svgElement = S, l.svgWidth = D.width, l.svgHeight = D.height;
    function b() {
      for (var E = 1, P = 0, x = m.length; P < x; ++P)
        E = Fu(E, m[P]);
      for (var R = 1, P = 0, x = y.length; P < x; ++P)
        R = Fu(R, y[P].length);
      E *= R;
      var O = w * m.length * y.length;
      if (process.env.NODE_ENV !== "production") {
        var I = function(X) {
          console.warn("Calculated decal size is greater than " + X + " due to decal option settings so " + X + " is used for the decal size. Please consider changing the decal option to make a smaller decal or set " + X + " to be larger to avoid incontinuity.");
        };
        E > o.maxTileWidth && I("maxTileWidth"), O > o.maxTileHeight && I("maxTileHeight");
      }
      return {
        width: Math.max(1, Math.min(E, o.maxTileWidth)),
        height: Math.max(1, Math.min(O, o.maxTileHeight))
      };
    }
    function M() {
      C && (C.clearRect(0, 0, T.width, T.height), o.backgroundColor && (C.fillStyle = o.backgroundColor, C.fillRect(0, 0, T.width, T.height)));
      for (var E = 0, P = 0; P < g.length; ++P)
        E += g[P];
      if (E <= 0)
        return;
      for (var x = -w, R = 0, O = 0, I = 0; x < D.height; ) {
        if (R % 2 === 0) {
          for (var X = O / 2 % y.length, A = 0, B = 0, k = 0; A < D.width * 2; ) {
            for (var G = 0, P = 0; P < p[I].length; ++P)
              G += p[I][P];
            if (G <= 0)
              break;
            if (B % 2 === 0) {
              var z = (1 - o.symbolSize) * 0.5, H = A + p[I][B] * z, tt = x + g[R] * z, Q = p[I][B] * o.symbolSize, vt = g[R] * o.symbolSize, at = k / 2 % y[X].length;
              ct(H, tt, Q, vt, y[X][at]);
            }
            A += p[I][B], ++k, ++B, B === p[I].length && (B = 0);
          }
          ++I, I === p.length && (I = 0);
        }
        x += g[R], ++O, ++R, R === g.length && (R = 0);
      }
      function ct(xt, dt, ne, kt, _e) {
        var ot = n ? 1 : e, ai = ms(_e, xt * ot, dt * ot, ne * ot, kt * ot, o.color, o.symbolKeepAspect);
        if (n) {
          var oi = i.painter.renderOneToVNode(ai);
          oi && S.children.push(oi);
        } else
          Hv(C, ai);
      }
    }
  }
}
function Uv(r) {
  if (!r || r.length === 0)
    return [["rect"]];
  if (Z(r))
    return [[r]];
  for (var t = !0, e = 0; e < r.length; ++e)
    if (!Z(r[e])) {
      t = !1;
      break;
    }
  if (t)
    return Uv([r]);
  for (var i = [], e = 0; e < r.length; ++e)
    Z(r[e]) ? i.push([r[e]]) : i.push(r[e]);
  return i;
}
function Yv(r) {
  if (!r || r.length === 0)
    return [[0, 0]];
  if (Et(r)) {
    var t = Math.ceil(r);
    return [[t, t]];
  }
  for (var e = !0, i = 0; i < r.length; ++i)
    if (!Et(r[i])) {
      e = !1;
      break;
    }
  if (e)
    return Yv([r]);
  for (var n = [], i = 0; i < r.length; ++i)
    if (Et(r[i])) {
      var t = Math.ceil(r[i]);
      n.push([t, t]);
    } else {
      var t = it(r[i], function(s) {
        return Math.ceil(s);
      });
      t.length % 2 === 1 ? n.push(t.concat(t)) : n.push(t);
    }
  return n;
}
function gm(r) {
  if (!r || typeof r == "object" && r.length === 0)
    return [0, 0];
  if (Et(r)) {
    var t = Math.ceil(r);
    return [t, t];
  }
  var e = it(r, function(i) {
    return Math.ceil(i);
  });
  return r.length % 2 ? e.concat(e) : e;
}
function _m(r) {
  return it(r, function(t) {
    return Gv(t);
  });
}
function Gv(r) {
  for (var t = 0, e = 0; e < r.length; ++e)
    t += r[e];
  return r.length % 2 === 1 ? t * 2 : t;
}
function ym(r, t) {
  r.eachRawSeries(function(e) {
    if (!r.isSeriesFiltered(e)) {
      var i = e.getData();
      i.hasItemVisual() && i.each(function(o) {
        var s = i.getItemVisual(o, "decal");
        if (s) {
          var u = i.ensureUniqueItemVisual(o, "style");
          u.decal = yf(s, t);
        }
      });
      var n = i.getVisual("decal");
      if (n) {
        var a = i.getVisual("style");
        a.decal = yf(n, t);
      }
    }
  });
}
var mm = new de();
const ue = mm;
var aa = {};
function wm(r, t) {
  process.env.NODE_ENV !== "production" && aa[r] && wt("Already has an implementation of " + r + "."), aa[r] = t;
}
function Sm(r) {
  return process.env.NODE_ENV !== "production" && (aa[r] || wt("Implementation of " + r + " doesn't exists.")), aa[r];
}
var Tm = 1, Dm = 800, Cm = 900, bm = 1e3, Em = 2e3, Mm = 5e3, Wv = 1e3, Lm = 1100, tu = 2e3, $v = 3e3, xm = 4e3, ba = 4500, Pm = 4600, Rm = 5e3, Im = 6e3, Xv = 7e3, Am = {
  PROCESSOR: {
    FILTER: bm,
    SERIES_FILTER: Dm,
    STATISTIC: Mm
  },
  VISUAL: {
    LAYOUT: Wv,
    PROGRESSIVE_LAYOUT: Lm,
    GLOBAL: tu,
    CHART: $v,
    POST_CHART_LAYOUT: Pm,
    COMPONENT: xm,
    BRUSH: Rm,
    CHART_ITEM: ba,
    ARIA: Im,
    DECAL: Xv
  }
}, yt = "__flagInMainProcess", Pt = "__pendingUpdate", wo = "__needsUpdateStatus", mf = /^[a-zA-Z0-9_]+$/;
function qv(r) {
  return function() {
    for (var t = [], e = 0; e < arguments.length; e++)
      t[e] = arguments[e];
    if (this.isDisposed()) {
      Ft(this.id);
      return;
    }
    return Kv(this, r, t);
  };
}
function Zv(r) {
  return function() {
    for (var t = [], e = 0; e < arguments.length; e++)
      t[e] = arguments[e];
    return Kv(this, r, t);
  };
}
function Kv(r, t, e) {
  return e[0] = e[0] && e[0].toLowerCase(), de.prototype[t].apply(r, e);
}
var Qv = (
  /** @class */
  function(r) {
    j(t, r);
    function t() {
      return r !== null && r.apply(this, arguments) || this;
    }
    return t;
  }(de)
), Jv = Qv.prototype;
Jv.on = Zv("on");
Jv.off = Zv("off");
var Rr, So, wn, Ie, To, Do, Co, wi, Si, wf, Sf, bo, Tf, Sn, Df, Xt, Cf, Om = (
  /** @class */
  function(r) {
    j(t, r);
    function t(e, i, n) {
      var a = r.call(this, new Vy()) || this;
      a._chartsViews = [], a._chartsMap = {}, a._componentsViews = [], a._componentsMap = {}, a._pendingActions = [], n = n || {}, Z(i) && (i = jv[i]), a._dom = e;
      var o = "canvas", s = "auto", u = !1;
      if (process.env.NODE_ENV !== "production") {
        var l = (
          /* eslint-disable-next-line */
          rt.hasGlobalWindow ? window : global
        );
        o = l.__ECHARTS__DEFAULT__RENDERER__ || o, s = W(l.__ECHARTS__DEFAULT__COARSE_POINTER, s);
        var f = l.__ECHARTS__DEFAULT__USE_DIRTY_RECT__;
        u = f ?? u;
      }
      var h = a._zr = ku(e, {
        renderer: n.renderer || o,
        devicePixelRatio: n.devicePixelRatio,
        width: n.width,
        height: n.height,
        ssr: n.ssr,
        useDirtyRect: W(n.useDirtyRect, u),
        useCoarsePointer: W(n.useCoarsePointer, s),
        pointerSize: n.pointerSize
      });
      a._ssr = n.ssr, a._throttledZrFlush = Sy(At(h.flush, h), 17), i = K(i), i && yv(i, !0), a._theme = i, a._locale = J_(n.locale || Q_), a._coordSysMgr = new gv();
      var c = a._api = Df(a);
      function v(d, _) {
        return d.__prio - _.__prio;
      }
      return Ln(ua, v), Ln(Ts, v), a._scheduler = new Bv(a, c, Ts, ua), a._messageCenter = new Qv(), a._initEvents(), a.resize = At(a.resize, a), h.animation.on("frame", a._onframe, a), wf(h, a), Sf(h, a), Hn(a), a;
    }
    return t.prototype._onframe = function() {
      if (!this._disposed) {
        Cf(this);
        var e = this._scheduler;
        if (this[Pt]) {
          var i = this[Pt].silent;
          this[yt] = !0;
          try {
            Rr(this), Ie.update.call(this, null, this[Pt].updateParams);
          } catch (u) {
            throw this[yt] = !1, this[Pt] = null, u;
          }
          this._zr.flush(), this[yt] = !1, this[Pt] = null, wi.call(this, i), Si.call(this, i);
        } else if (e.unfinished) {
          var n = Tm, a = this._model, o = this._api;
          e.unfinished = !1;
          do {
            var s = +/* @__PURE__ */ new Date();
            e.performSeriesTasks(a), e.performDataProcessorTasks(a), Do(this, a), e.performVisualTasks(a), Sn(this, this._model, o, "remain", {}), n -= +/* @__PURE__ */ new Date() - s;
          } while (n > 0 && e.unfinished);
          e.unfinished || this._zr.flush();
        }
      }
    }, t.prototype.getDom = function() {
      return this._dom;
    }, t.prototype.getId = function() {
      return this.id;
    }, t.prototype.getZr = function() {
      return this._zr;
    }, t.prototype.isSSR = function() {
      return this._ssr;
    }, t.prototype.setOption = function(e, i, n) {
      if (this[yt]) {
        process.env.NODE_ENV !== "production" && wt("`setOption` should not be called during main process.");
        return;
      }
      if (this._disposed) {
        Ft(this.id);
        return;
      }
      var a, o, s;
      if (F(i) && (n = i.lazyUpdate, a = i.silent, o = i.replaceMerge, s = i.transition, i = i.notMerge), this[yt] = !0, !this._model || i) {
        var u = new P0(this._api), l = this._theme, f = this._model = new dv();
        f.scheduler = this._scheduler, f.ssr = this._ssr, f.init(null, null, null, l, this._locale, u);
      }
      this._model.setOption(e, {
        replaceMerge: o
      }, Ds);
      var h = {
        seriesTransition: s,
        optionChanged: !0
      };
      if (n)
        this[Pt] = {
          silent: a,
          updateParams: h
        }, this[yt] = !1, this.getZr().wakeUp();
      else {
        try {
          Rr(this), Ie.update.call(this, null, h);
        } catch (c) {
          throw this[Pt] = null, this[yt] = !1, c;
        }
        this._ssr || this._zr.flush(), this[Pt] = null, this[yt] = !1, wi.call(this, a), Si.call(this, a);
      }
    }, t.prototype.setTheme = function() {
      ce("ECharts#setTheme() is DEPRECATED in ECharts 3.0");
    }, t.prototype.getModel = function() {
      return this._model;
    }, t.prototype.getOption = function() {
      return this._model && this._model.getOption();
    }, t.prototype.getWidth = function() {
      return this._zr.getWidth();
    }, t.prototype.getHeight = function() {
      return this._zr.getHeight();
    }, t.prototype.getDevicePixelRatio = function() {
      return this._zr.painter.dpr || rt.hasGlobalWindow && window.devicePixelRatio || 1;
    }, t.prototype.getRenderedCanvas = function(e) {
      return process.env.NODE_ENV !== "production" && gt("getRenderedCanvas", "renderToCanvas"), this.renderToCanvas(e);
    }, t.prototype.renderToCanvas = function(e) {
      e = e || {};
      var i = this._zr.painter;
      if (process.env.NODE_ENV !== "production" && i.type !== "canvas")
        throw new Error("renderToCanvas can only be used in the canvas renderer.");
      return i.getRenderedCanvas({
        backgroundColor: e.backgroundColor || this._model.get("backgroundColor"),
        pixelRatio: e.pixelRatio || this.getDevicePixelRatio()
      });
    }, t.prototype.renderToSVGString = function(e) {
      e = e || {};
      var i = this._zr.painter;
      if (process.env.NODE_ENV !== "production" && i.type !== "svg")
        throw new Error("renderToSVGString can only be used in the svg renderer.");
      return i.renderToString({
        useViewBox: e.useViewBox
      });
    }, t.prototype.getSvgDataURL = function() {
      if (rt.svgSupported) {
        var e = this._zr, i = e.storage.getDisplayList();
        return L(i, function(n) {
          n.stopAnimation(null, !0);
        }), e.painter.toDataURL();
      }
    }, t.prototype.getDataURL = function(e) {
      if (this._disposed) {
        Ft(this.id);
        return;
      }
      e = e || {};
      var i = e.excludeComponents, n = this._model, a = [], o = this;
      L(i, function(u) {
        n.eachComponent({
          mainType: u
        }, function(l) {
          var f = o._componentsMap[l.__viewId];
          f.group.ignore || (a.push(f), f.group.ignore = !0);
        });
      });
      var s = this._zr.painter.getType() === "svg" ? this.getSvgDataURL() : this.renderToCanvas(e).toDataURL("image/" + (e && e.type || "png"));
      return L(a, function(u) {
        u.group.ignore = !1;
      }), s;
    }, t.prototype.getConnectedDataURL = function(e) {
      if (this._disposed) {
        Ft(this.id);
        return;
      }
      var i = e.type === "svg", n = this.group, a = Math.min, o = Math.max, s = 1 / 0;
      if (Bm[n]) {
        var u = s, l = s, f = -s, h = -s, c = [], v = e && e.pixelRatio || this.getDevicePixelRatio();
        L(bf, function(m, w) {
          if (m.group === n) {
            var T = i ? m.getZr().painter.getSvgDom().innerHTML : m.renderToCanvas(K(e)), S = m.getDom().getBoundingClientRect();
            u = a(S.left, u), l = a(S.top, l), f = o(S.right, f), h = o(S.bottom, h), c.push({
              dom: T,
              left: S.left,
              top: S.top
            });
          }
        }), u *= v, l *= v, f *= v, h *= v;
        var d = f - u, _ = h - l, p = Jr.createCanvas(), g = ku(p, {
          renderer: i ? "svg" : "canvas"
        });
        if (g.resize({
          width: d,
          height: _
        }), i) {
          var y = "";
          return L(c, function(m) {
            var w = m.left - u, T = m.top - l;
            y += '<g transform="translate(' + w + "," + T + ')">' + m.dom + "</g>";
          }), g.painter.getSvgRoot().innerHTML = y, e.connectedBackgroundColor && g.painter.setBackgroundColor(e.connectedBackgroundColor), g.refreshImmediately(), g.painter.toDataURL();
        } else
          return e.connectedBackgroundColor && g.add(new Ce({
            shape: {
              x: 0,
              y: 0,
              width: d,
              height: _
            },
            style: {
              fill: e.connectedBackgroundColor
            }
          })), L(c, function(m) {
            var w = new ma({
              style: {
                x: m.left * v - u,
                y: m.top * v - l,
                image: m.dom
              }
            });
            g.add(w);
          }), g.refreshImmediately(), p.toDataURL("image/" + (e && e.type || "png"));
      } else
        return this.getDataURL(e);
    }, t.prototype.convertToPixel = function(e, i) {
      return To(this, "convertToPixel", e, i);
    }, t.prototype.convertFromPixel = function(e, i) {
      return To(this, "convertFromPixel", e, i);
    }, t.prototype.containPixel = function(e, i) {
      if (this._disposed) {
        Ft(this.id);
        return;
      }
      var n = this._model, a, o = qa(n, e);
      return L(o, function(s, u) {
        u.indexOf("Models") >= 0 && L(s, function(l) {
          var f = l.coordinateSystem;
          if (f && f.containPoint)
            a = a || !!f.containPoint(i);
          else if (u === "seriesModels") {
            var h = this._chartsMap[l.__viewId];
            h && h.containPoint ? a = a || h.containPoint(i, l) : process.env.NODE_ENV !== "production" && Te(u + ": " + (h ? "The found component do not support containPoint." : "No view mapping to the found component."));
          } else
            process.env.NODE_ENV !== "production" && Te(u + ": containPoint is not supported");
        }, this);
      }, this), !!a;
    }, t.prototype.getVisual = function(e, i) {
      var n = this._model, a = qa(n, e, {
        defaultMainType: "series"
      }), o = a.seriesModel;
      process.env.NODE_ENV !== "production" && (o || Te("There is no specified series model"));
      var s = o.getData(), u = a.hasOwnProperty("dataIndexInside") ? a.dataIndexInside : a.hasOwnProperty("dataIndex") ? s.indexOfRawIndex(a.dataIndex) : null;
      return u != null ? Uy(s, u, i) : Yy(s, i);
    }, t.prototype.getViewOfComponentModel = function(e) {
      return this._componentsMap[e.__viewId];
    }, t.prototype.getViewOfSeriesModel = function(e) {
      return this._chartsMap[e.__viewId];
    }, t.prototype._initEvents = function() {
      var e = this;
      L(Nm, function(i) {
        var n = function(a) {
          var o = e.getModel(), s = a.target, u, l = i === "globalout";
          if (l ? u = {} : s && _n(s, function(d) {
            var _ = Gt(d);
            if (_ && _.dataIndex != null) {
              var p = _.dataModel || o.getSeriesByIndex(_.seriesIndex);
              return u = p && p.getDataParams(_.dataIndex, _.dataType, s) || {}, !0;
            } else if (_.eventData)
              return u = N({}, _.eventData), !0;
          }, !0), u) {
            var f = u.componentType, h = u.componentIndex;
            (f === "markLine" || f === "markPoint" || f === "markArea") && (f = "series", h = u.seriesIndex);
            var c = f && h != null && o.getComponent(f, h), v = c && e[c.mainType === "series" ? "_chartsMap" : "_componentsMap"][c.__viewId];
            process.env.NODE_ENV !== "production" && !l && !(c && v) && Te("model or view can not be found by params"), u.event = a, u.type = i, e._$eventProcessor.eventInfo = {
              targetEl: s,
              packedEvent: u,
              model: c,
              view: v
            }, e.trigger(i, u);
          }
        };
        n.zrEventfulCallAtLast = !0, e._zr.on(i, n, e);
      }), L(sa, function(i, n) {
        e._messageCenter.on(n, function(a) {
          this.trigger(n, a);
        }, e);
      }), L(["selectchanged"], function(i) {
        e._messageCenter.on(i, function(n) {
          this.trigger(i, n);
        }, e);
      }), Gy(this._messageCenter, this, this._api);
    }, t.prototype.isDisposed = function() {
      return this._disposed;
    }, t.prototype.clear = function() {
      if (this._disposed) {
        Ft(this.id);
        return;
      }
      this.setOption({
        series: []
      }, !0);
    }, t.prototype.dispose = function() {
      if (this._disposed) {
        Ft(this.id);
        return;
      }
      this._disposed = !0;
      var e = this.getDom();
      e && Ip(this.getDom(), km, "");
      var i = this, n = i._api, a = i._model;
      L(i._componentsViews, function(o) {
        o.dispose(a, n);
      }), L(i._chartsViews, function(o) {
        o.dispose(a, n);
      }), i._zr.dispose(), i._dom = i._model = i._chartsMap = i._componentsMap = i._chartsViews = i._componentsViews = i._scheduler = i._api = i._zr = i._throttledZrFlush = i._theme = i._coordSysMgr = i._messageCenter = null, delete bf[i.id];
    }, t.prototype.resize = function(e) {
      if (this[yt]) {
        process.env.NODE_ENV !== "production" && wt("`resize` should not be called during main process.");
        return;
      }
      if (this._disposed) {
        Ft(this.id);
        return;
      }
      this._zr.resize(e);
      var i = this._model;
      if (this._loadingFX && this._loadingFX.resize(), !!i) {
        var n = i.resetOption("media"), a = e && e.silent;
        this[Pt] && (a == null && (a = this[Pt].silent), n = !0, this[Pt] = null), this[yt] = !0;
        try {
          n && Rr(this), Ie.update.call(this, {
            type: "resize",
            animation: N({
              // Disable animation
              duration: 0
            }, e && e.animation)
          });
        } catch (o) {
          throw this[yt] = !1, o;
        }
        this[yt] = !1, wi.call(this, a), Si.call(this, a);
      }
    }, t.prototype.showLoading = function(e, i) {
      if (this._disposed) {
        Ft(this.id);
        return;
      }
      if (F(e) && (i = e, e = ""), e = e || "default", this.hideLoading(), !Cs[e]) {
        process.env.NODE_ENV !== "production" && Te("Loading effects " + e + " not exists.");
        return;
      }
      var n = Cs[e](this._api, i), a = this._zr;
      this._loadingFX = n, a.add(n);
    }, t.prototype.hideLoading = function() {
      if (this._disposed) {
        Ft(this.id);
        return;
      }
      this._loadingFX && this._zr.remove(this._loadingFX), this._loadingFX = null;
    }, t.prototype.makeActionFromEvent = function(e) {
      var i = N({}, e);
      return i.type = sa[e.type], i;
    }, t.prototype.dispatchAction = function(e, i) {
      if (this._disposed) {
        Ft(this.id);
        return;
      }
      if (F(i) || (i = {
        silent: !!i
      }), !!oa[e.type] && this._model) {
        if (this[yt]) {
          this._pendingActions.push(e);
          return;
        }
        var n = i.silent;
        Co.call(this, e, n);
        var a = i.flush;
        a ? this._zr.flush() : a !== !1 && rt.browser.weChat && this._throttledZrFlush(), wi.call(this, n), Si.call(this, n);
      }
    }, t.prototype.updateLabelLayout = function() {
      ue.trigger("series:layoutlabels", this._model, this._api, {
        // Not adding series labels.
        // TODO
        updatedSeries: []
      });
    }, t.prototype.appendData = function(e) {
      if (this._disposed) {
        Ft(this.id);
        return;
      }
      var i = e.seriesIndex, n = this.getModel(), a = n.getSeriesByIndex(i);
      process.env.NODE_ENV !== "production" && U(e.data && a), a.appendData(e), this._scheduler.unfinished = !0, this.getZr().wakeUp();
    }, t.internalField = function() {
      Rr = function(h) {
        var c = h._scheduler;
        c.restorePipelines(h._model), c.prepareStageTasks(), So(h, !0), So(h, !1), c.plan();
      }, So = function(h, c) {
        for (var v = h._model, d = h._scheduler, _ = c ? h._componentsViews : h._chartsViews, p = c ? h._componentsMap : h._chartsMap, g = h._zr, y = h._api, m = 0; m < _.length; m++)
          _[m].__alive = !1;
        c ? v.eachComponent(function(S, D) {
          S !== "series" && w(D);
        }) : v.eachSeries(w);
        function w(S) {
          var D = S.__requireNewView;
          S.__requireNewView = !1;
          var C = "_ec_" + S.id + "_" + S.type, b = !D && p[C];
          if (!b) {
            var M = fe(S.type), E = c ? ea.getClass(M.main, M.sub) : (
              // FIXME:TS
              // (ChartView as ChartViewConstructor).getClass('series', classType.sub)
              // For backward compat, still support a chart type declared as only subType
              // like "liquidfill", but recommend "series.liquidfill"
              // But need a base class to make a type series.
              gr.getClass(M.sub)
            );
            process.env.NODE_ENV !== "production" && U(E, M.sub + " does not exist."), b = new E(), b.init(v, y), p[C] = b, _.push(b), g.add(b.group);
          }
          S.__viewId = b.__id = C, b.__alive = !0, b.__model = S, b.group.__ecComponentInfo = {
            mainType: S.mainType,
            index: S.componentIndex
          }, !c && d.prepareView(b, S, v, y);
        }
        for (var m = 0; m < _.length; ) {
          var T = _[m];
          T.__alive ? m++ : (!c && T.renderTask.dispose(), g.remove(T.group), T.dispose(v, y), _.splice(m, 1), p[T.__id] === T && delete p[T.__id], T.__id = T.group.__ecComponentInfo = null);
        }
      }, wn = function(h, c, v, d, _) {
        var p = h._model;
        if (p.setUpdatePayload(v), !d) {
          L([].concat(h._componentsViews).concat(h._chartsViews), T);
          return;
        }
        var g = {};
        g[d + "Id"] = v[d + "Id"], g[d + "Index"] = v[d + "Index"], g[d + "Name"] = v[d + "Name"];
        var y = {
          mainType: d,
          query: g
        };
        _ && (y.subType = _);
        var m = v.excludeSeriesId, w;
        m != null && (w = $(), L(Mt(m), function(S) {
          var D = he(S, null);
          D != null && w.set(D, !0);
        })), p && p.eachComponent(y, function(S) {
          var D = w && w.get(S.id) != null;
          if (!D)
            if (gl(v))
              if (S instanceof Kr)
                v.type === pr && !v.notBlur && !S.get(["emphasis", "disabled"]) && qg(S, v, h._api);
              else {
                var C = Ws(S.mainType, S.componentIndex, v.name, h._api), b = C.focusSelf, M = C.dispatchers;
                v.type === pr && b && !v.notBlur && ss(S.mainType, S.componentIndex, h._api), M && L(M, function(E) {
                  v.type === pr ? ns(E) : as(E);
                });
              }
            else
              us(v) && S instanceof Kr && (Qg(S, v, h._api), pl(S), Xt(h));
        }, h), p && p.eachComponent(y, function(S) {
          var D = w && w.get(S.id) != null;
          D || T(h[d === "series" ? "_chartsMap" : "_componentsMap"][S.__viewId]);
        }, h);
        function T(S) {
          S && S.__alive && S[c] && S[c](S.__model, p, h._api, v);
        }
      }, Ie = {
        prepareAndUpdate: function(h) {
          Rr(this), Ie.update.call(this, h, {
            // Needs to mark option changed if newOption is given.
            // It's from MagicType.
            // TODO If use a separate flag optionChanged in payload?
            optionChanged: h.newOption != null
          });
        },
        update: function(h, c) {
          var v = this._model, d = this._api, _ = this._zr, p = this._coordSysMgr, g = this._scheduler;
          if (v) {
            v.setUpdatePayload(h), g.restoreData(v, h), g.performSeriesTasks(v), p.create(v, d), g.performDataProcessorTasks(v, h), Do(this, v), p.update(v, d), e(v), g.performVisualTasks(v, h), bo(this, v, d, h, c);
            var y = v.get("backgroundColor") || "transparent", m = v.get("darkMode");
            _.setBackgroundColor(y), m != null && m !== "auto" && _.setDarkMode(m), ue.trigger("afterupdate", v, d);
          }
        },
        updateTransform: function(h) {
          var c = this, v = this._model, d = this._api;
          if (v) {
            v.setUpdatePayload(h);
            var _ = [];
            v.eachComponent(function(g, y) {
              if (g !== "series") {
                var m = c.getViewOfComponentModel(y);
                if (m && m.__alive)
                  if (m.updateTransform) {
                    var w = m.updateTransform(y, v, d, h);
                    w && w.update && _.push(m);
                  } else
                    _.push(m);
              }
            });
            var p = $();
            v.eachSeries(function(g) {
              var y = c._chartsMap[g.__viewId];
              if (y.updateTransform) {
                var m = y.updateTransform(g, v, d, h);
                m && m.update && p.set(g.uid, 1);
              } else
                p.set(g.uid, 1);
            }), e(v), this._scheduler.performVisualTasks(v, h, {
              setDirty: !0,
              dirtyMap: p
            }), Sn(this, v, d, h, {}, p), ue.trigger("afterupdate", v, d);
          }
        },
        updateView: function(h) {
          var c = this._model;
          c && (c.setUpdatePayload(h), gr.markUpdateMethod(h, "updateView"), e(c), this._scheduler.performVisualTasks(c, h, {
            setDirty: !0
          }), bo(this, c, this._api, h, {}), ue.trigger("afterupdate", c, this._api));
        },
        updateVisual: function(h) {
          var c = this, v = this._model;
          v && (v.setUpdatePayload(h), v.eachSeries(function(d) {
            d.getData().clearAllVisual();
          }), gr.markUpdateMethod(h, "updateVisual"), e(v), this._scheduler.performVisualTasks(v, h, {
            visualType: "visual",
            setDirty: !0
          }), v.eachComponent(function(d, _) {
            if (d !== "series") {
              var p = c.getViewOfComponentModel(_);
              p && p.__alive && p.updateVisual(_, v, c._api, h);
            }
          }), v.eachSeries(function(d) {
            var _ = c._chartsMap[d.__viewId];
            _.updateVisual(d, v, c._api, h);
          }), ue.trigger("afterupdate", v, this._api));
        },
        updateLayout: function(h) {
          Ie.update.call(this, h);
        }
      }, To = function(h, c, v, d) {
        if (h._disposed) {
          Ft(h.id);
          return;
        }
        for (var _ = h._model, p = h._coordSysMgr.getCoordinateSystems(), g, y = qa(_, v), m = 0; m < p.length; m++) {
          var w = p[m];
          if (w[c] && (g = w[c](_, y, d)) != null)
            return g;
        }
        process.env.NODE_ENV !== "production" && Te("No coordinate system that supports " + c + " found by the given finder.");
      }, Do = function(h, c) {
        var v = h._chartsMap, d = h._scheduler;
        c.eachSeries(function(_) {
          d.updateStreamModes(_, v[_.__viewId]);
        });
      }, Co = function(h, c) {
        var v = this, d = this.getModel(), _ = h.type, p = h.escapeConnect, g = oa[_], y = g.actionInfo, m = (y.update || "update").split(":"), w = m.pop(), T = m[0] != null && fe(m[0]);
        this[yt] = !0;
        var S = [h], D = !1;
        h.batch && (D = !0, S = it(h.batch, function(R) {
          return R = Lt(N({}, R), h), R.batch = null, R;
        }));
        var C = [], b, M = us(h), E = gl(h);
        if (E && Kh(this._api), L(S, function(R) {
          if (b = g.action(R, v._model, v._api), b = b || N({}, R), b.type = y.event || b.type, C.push(b), E) {
            var O = Lh(h), I = O.queryOptionMap, X = O.mainTypeSpecified, A = X ? I.keys()[0] : "series";
            wn(v, w, R, A), Xt(v);
          } else
            M ? (wn(v, w, R, "series"), Xt(v)) : T && wn(v, w, R, T.main, T.sub);
        }), w !== "none" && !E && !M && !T)
          try {
            this[Pt] ? (Rr(this), Ie.update.call(this, h), this[Pt] = null) : Ie[w].call(this, h);
          } catch (R) {
            throw this[yt] = !1, R;
          }
        if (D ? b = {
          type: y.event || _,
          escapeConnect: p,
          batch: C
        } : b = C[0], this[yt] = !1, !c) {
          var P = this._messageCenter;
          if (P.trigger(b.type, b), M) {
            var x = {
              type: "selectchanged",
              escapeConnect: p,
              selected: Jg(d),
              isFromClick: h.isFromClick || !1,
              fromAction: h.type,
              fromActionPayload: h
            };
            P.trigger(x.type, x);
          }
        }
      }, wi = function(h) {
        for (var c = this._pendingActions; c.length; ) {
          var v = c.shift();
          Co.call(this, v, h);
        }
      }, Si = function(h) {
        !h && this.trigger("updated");
      }, wf = function(h, c) {
        h.on("rendered", function(v) {
          c.trigger("rendered", v), // Although zr is dirty if initial animation is not finished
          // and this checking is called on frame, we also check
          // animation finished for robustness.
          h.animation.isFinished() && !c[Pt] && !c._scheduler.unfinished && !c._pendingActions.length && c.trigger("finished");
        });
      }, Sf = function(h, c) {
        h.on("mouseover", function(v) {
          var d = v.target, _ = _n(d, Zr);
          _ && (Zg(_, v, c._api), Xt(c));
        }).on("mouseout", function(v) {
          var d = v.target, _ = _n(d, Zr);
          _ && (Kg(_, v, c._api), Xt(c));
        }).on("click", function(v) {
          var d = v.target, _ = _n(d, function(y) {
            return Gt(y).dataIndex != null;
          }, !0);
          if (_) {
            var p = _.selected ? "unselect" : "select", g = Gt(_);
            c._api.dispatchAction({
              type: p,
              dataType: g.dataType,
              dataIndexInside: g.dataIndex,
              seriesIndex: g.seriesIndex,
              isFromClick: !0
            });
          }
        });
      };
      function e(h) {
        h.clearColorPalette(), h.eachSeries(function(c) {
          c.clearColorPalette();
        });
      }
      function i(h) {
        var c = [], v = [], d = !1;
        if (h.eachComponent(function(y, m) {
          var w = m.get("zlevel") || 0, T = m.get("z") || 0, S = m.getZLevelKey();
          d = d || !!S, (y === "series" ? v : c).push({
            zlevel: w,
            z: T,
            idx: m.componentIndex,
            type: y,
            key: S
          });
        }), d) {
          var _ = c.concat(v), p, g;
          Ln(_, function(y, m) {
            return y.zlevel === m.zlevel ? y.z - m.z : y.zlevel - m.zlevel;
          }), L(_, function(y) {
            var m = h.getComponent(y.type, y.idx), w = y.zlevel, T = y.key;
            p != null && (w = Math.max(p, w)), T ? (w === p && T !== g && w++, g = T) : g && (w === p && w++, g = ""), p = w, m.setZLevel(w);
          });
        }
      }
      bo = function(h, c, v, d, _) {
        i(c), Tf(h, c, v, d, _), L(h._chartsViews, function(p) {
          p.__alive = !1;
        }), Sn(h, c, v, d, _), L(h._chartsViews, function(p) {
          p.__alive || p.remove(c, v);
        });
      }, Tf = function(h, c, v, d, _, p) {
        L(p || h._componentsViews, function(g) {
          var y = g.__model;
          l(y, g), g.render(y, c, v, d), s(y, g), f(y, g);
        });
      }, Sn = function(h, c, v, d, _, p) {
        var g = h._scheduler;
        _ = N(_ || {}, {
          updatedSeries: c.getSeries()
        }), ue.trigger("series:beforeupdate", c, v, _);
        var y = !1;
        c.eachSeries(function(m) {
          var w = h._chartsMap[m.__viewId];
          w.__alive = !0;
          var T = w.renderTask;
          g.updatePayload(T, d), l(m, w), p && p.get(m.uid) && T.dirty(), T.perform(g.getPerformArgs(T)) && (y = !0), w.group.silent = !!m.get("silent"), o(m, w), pl(m);
        }), g.unfinished = y || g.unfinished, ue.trigger("series:layoutlabels", c, v, _), ue.trigger("series:transition", c, v, _), c.eachSeries(function(m) {
          var w = h._chartsMap[m.__viewId];
          s(m, w), f(m, w);
        }), a(h, c), ue.trigger("series:afterupdate", c, v, _);
      }, Xt = function(h) {
        h[wo] = !0, h.getZr().wakeUp();
      }, Cf = function(h) {
        h[wo] && (h.getZr().storage.traverse(function(c) {
          Bn(c) || n(c);
        }), h[wo] = !1);
      };
      function n(h) {
        for (var c = [], v = h.currentStates, d = 0; d < v.length; d++) {
          var _ = v[d];
          _ === "emphasis" || _ === "blur" || _ === "select" || c.push(_);
        }
        h.selected && h.states.select && c.push("select"), h.hoverState === Ys && h.states.emphasis ? c.push("emphasis") : h.hoverState === Us && h.states.blur && c.push("blur"), h.useStates(c);
      }
      function a(h, c) {
        var v = h._zr, d = v.storage, _ = 0;
        d.traverse(function(p) {
          p.isGroup || _++;
        }), _ > c.get("hoverLayerThreshold") && !rt.node && !rt.worker && c.eachSeries(function(p) {
          if (!p.preventUsingHoverLayer) {
            var g = h._chartsMap[p.__viewId];
            g.__alive && g.eachRendered(function(y) {
              y.states.emphasis && (y.states.emphasis.hoverLayer = !0);
            });
          }
        });
      }
      function o(h, c) {
        var v = h.get("blendMode") || null;
        c.eachRendered(function(d) {
          d.isGroup || (d.style.blend = v);
        });
      }
      function s(h, c) {
        if (!h.preventAutoZ) {
          var v = h.get("z") || 0, d = h.get("zlevel") || 0;
          c.eachRendered(function(_) {
            return u(_, v, d, -1 / 0), !0;
          });
        }
      }
      function u(h, c, v, d) {
        var _ = h.getTextContent(), p = h.getTextGuideLine(), g = h.isGroup;
        if (g)
          for (var y = h.childrenRef(), m = 0; m < y.length; m++)
            d = Math.max(u(y[m], c, v, d), d);
        else
          h.z = c, h.zlevel = v, d = Math.max(h.z2, d);
        if (_ && (_.z = c, _.zlevel = v, isFinite(d) && (_.z2 = d + 2)), p) {
          var w = h.textGuideLineConfig;
          p.z = c, p.zlevel = v, isFinite(d) && (p.z2 = d + (w && w.showAbove ? 1 : -1));
        }
        return d;
      }
      function l(h, c) {
        c.eachRendered(function(v) {
          if (!Bn(v)) {
            var d = v.getTextContent(), _ = v.getTextGuideLine();
            v.stateTransition && (v.stateTransition = null), d && d.stateTransition && (d.stateTransition = null), _ && _.stateTransition && (_.stateTransition = null), v.hasState() ? (v.prevStates = v.currentStates, v.clearStates()) : v.prevStates && (v.prevStates = null);
          }
        });
      }
      function f(h, c) {
        var v = h.getModel("stateAnimation"), d = h.isAnimationEnabled(), _ = v.get("duration"), p = _ > 0 ? {
          duration: _,
          delay: v.get("delay"),
          easing: v.get("easing")
          // additive: stateAnimationModel.get('additive')
        } : null;
        c.eachRendered(function(g) {
          if (g.states && g.states.emphasis) {
            if (Bn(g))
              return;
            if (g instanceof ht && i_(g), g.__dirty) {
              var y = g.prevStates;
              y && g.useStates(y);
            }
            if (d) {
              g.stateTransition = p;
              var m = g.getTextContent(), w = g.getTextGuideLine();
              m && (m.stateTransition = p), w && (w.stateTransition = p);
            }
            g.__dirty && n(g);
          }
        });
      }
      Df = function(h) {
        return new /** @class */
        (function(c) {
          j(v, c);
          function v() {
            return c !== null && c.apply(this, arguments) || this;
          }
          return v.prototype.getCoordinateSystems = function() {
            return h._coordSysMgr.getCoordinateSystems();
          }, v.prototype.getComponentByElement = function(d) {
            for (; d; ) {
              var _ = d.__ecComponentInfo;
              if (_ != null)
                return h._model.getComponent(_.mainType, _.index);
              d = d.parent;
            }
          }, v.prototype.enterEmphasis = function(d, _) {
            ns(d, _), Xt(h);
          }, v.prototype.leaveEmphasis = function(d, _) {
            as(d, _), Xt(h);
          }, v.prototype.enterBlur = function(d) {
            Xg(d), Xt(h);
          }, v.prototype.leaveBlur = function(d) {
            $h(d), Xt(h);
          }, v.prototype.enterSelect = function(d) {
            Xh(d), Xt(h);
          }, v.prototype.leaveSelect = function(d) {
            qh(d), Xt(h);
          }, v.prototype.getModel = function() {
            return h.getModel();
          }, v.prototype.getViewOfComponentModel = function(d) {
            return h.getViewOfComponentModel(d);
          }, v.prototype.getViewOfSeriesModel = function(d) {
            return h.getViewOfSeriesModel(d);
          }, v;
        }(pv))(h);
      };
    }(), t;
  }(de)
), eu = Om.prototype;
eu.on = qv("on");
eu.off = qv("off");
eu.one = function(r, t, e) {
  var i = this;
  ce("ECharts#one is deprecated.");
  function n() {
    for (var a = [], o = 0; o < arguments.length; o++)
      a[o] = arguments[o];
    t && t.apply && t.apply(this, a), i.off(r, n);
  }
  this.on.call(this, r, n, e);
};
var Nm = ["click", "dblclick", "mouseover", "mouseout", "mousemove", "mousedown", "mouseup", "globalout", "contextmenu"];
function Ft(r) {
  process.env.NODE_ENV !== "production" && Te("Instance " + r + " has been disposed");
}
var oa = {}, sa = {}, Ts = [], Ds = [], ua = [], jv = {}, Cs = {}, bf = {}, Bm = {}, km = "_echarts_instance_";
function tc(r, t) {
  jv[r] = t;
}
function ec(r) {
  nt(Ds, r) < 0 && Ds.push(r);
}
function rc(r, t) {
  iu(Ts, r, t, Em);
}
function Fm(r) {
  ru("afterinit", r);
}
function Vm(r) {
  ru("afterupdate", r);
}
function ru(r, t) {
  ue.on(r, t);
}
function ni(r, t, e) {
  J(t) && (e = t, t = "");
  var i = F(r) ? r.type : [r, r = {
    event: t
  }][0];
  r.event = (r.event || i).toLowerCase(), t = r.event, !sa[t] && (U(mf.test(i) && mf.test(t)), oa[i] || (oa[i] = {
    action: e,
    actionInfo: r
  }), sa[t] = i);
}
function zm(r, t) {
  gv.register(r, t);
}
function Hm(r, t) {
  iu(ua, r, t, Wv, "layout");
}
function wr(r, t) {
  iu(ua, r, t, $v, "visual");
}
var Ef = [];
function iu(r, t, e, i, n) {
  if ((J(t) || F(t)) && (e = t, t = i), process.env.NODE_ENV !== "production") {
    if (isNaN(t) || t == null)
      throw new Error("Illegal priority");
    L(r, function(o) {
      U(o.__raw !== e);
    });
  }
  if (!(nt(Ef, e) >= 0)) {
    Ef.push(e);
    var a = Bv.wrapStageHandler(e, n);
    a.__prio = t, a.__raw = e, r.push(a);
  }
}
function ic(r, t) {
  Cs[r] = t;
}
function Um(r, t, e) {
  var i = Sm("registerMap");
  i && i(r, t, e);
}
var Ym = ey;
wr(tu, Dy);
wr(ba, Cy);
wr(ba, by);
wr(tu, zy);
wr(ba, Hy);
wr(Xv, ym);
ec(yv);
rc(Cm, F0);
ic("default", Ey);
ni({
  type: pr,
  event: pr,
  update: pr
}, te);
ni({
  type: On,
  event: On,
  update: On
}, te);
ni({
  type: Vi,
  event: Vi,
  update: Vi
}, te);
ni({
  type: Nn,
  event: Nn,
  update: Nn
}, te);
ni({
  type: zi,
  event: zi,
  update: zi
}, te);
tc("light", ky);
tc("dark", Fy);
function Ti(r) {
  return r == null ? 0 : r.length || 1;
}
function Mf(r) {
  return r;
}
var Gm = (
  /** @class */
  function() {
    function r(t, e, i, n, a, o) {
      this._old = t, this._new = e, this._oldKeyGetter = i || Mf, this._newKeyGetter = n || Mf, this.context = a, this._diffModeMultiple = o === "multiple";
    }
    return r.prototype.add = function(t) {
      return this._add = t, this;
    }, r.prototype.update = function(t) {
      return this._update = t, this;
    }, r.prototype.updateManyToOne = function(t) {
      return this._updateManyToOne = t, this;
    }, r.prototype.updateOneToMany = function(t) {
      return this._updateOneToMany = t, this;
    }, r.prototype.updateManyToMany = function(t) {
      return this._updateManyToMany = t, this;
    }, r.prototype.remove = function(t) {
      return this._remove = t, this;
    }, r.prototype.execute = function() {
      this[this._diffModeMultiple ? "_executeMultiple" : "_executeOneToOne"]();
    }, r.prototype._executeOneToOne = function() {
      var t = this._old, e = this._new, i = {}, n = new Array(t.length), a = new Array(e.length);
      this._initIndexMap(t, null, n, "_oldKeyGetter"), this._initIndexMap(e, i, a, "_newKeyGetter");
      for (var o = 0; o < t.length; o++) {
        var s = n[o], u = i[s], l = Ti(u);
        if (l > 1) {
          var f = u.shift();
          u.length === 1 && (i[s] = u[0]), this._update && this._update(f, o);
        } else
          l === 1 ? (i[s] = null, this._update && this._update(u, o)) : this._remove && this._remove(o);
      }
      this._performRestAdd(a, i);
    }, r.prototype._executeMultiple = function() {
      var t = this._old, e = this._new, i = {}, n = {}, a = [], o = [];
      this._initIndexMap(t, i, a, "_oldKeyGetter"), this._initIndexMap(e, n, o, "_newKeyGetter");
      for (var s = 0; s < a.length; s++) {
        var u = a[s], l = i[u], f = n[u], h = Ti(l), c = Ti(f);
        if (h > 1 && c === 1)
          this._updateManyToOne && this._updateManyToOne(f, l), n[u] = null;
        else if (h === 1 && c > 1)
          this._updateOneToMany && this._updateOneToMany(f, l), n[u] = null;
        else if (h === 1 && c === 1)
          this._update && this._update(f, l), n[u] = null;
        else if (h > 1 && c > 1)
          this._updateManyToMany && this._updateManyToMany(f, l), n[u] = null;
        else if (h > 1)
          for (var v = 0; v < h; v++)
            this._remove && this._remove(l[v]);
        else
          this._remove && this._remove(l);
      }
      this._performRestAdd(o, n);
    }, r.prototype._performRestAdd = function(t, e) {
      for (var i = 0; i < t.length; i++) {
        var n = t[i], a = e[n], o = Ti(a);
        if (o > 1)
          for (var s = 0; s < o; s++)
            this._add && this._add(a[s]);
        else
          o === 1 && this._add && this._add(a);
        e[n] = null;
      }
    }, r.prototype._initIndexMap = function(t, e, i, n) {
      for (var a = this._diffModeMultiple, o = 0; o < t.length; o++) {
        var s = "_ec_" + this[n](t[o], o);
        if (a || (i[o] = s), !!e) {
          var u = e[s], l = Ti(u);
          l === 0 ? (e[s] = o, a && i.push(s)) : l === 1 ? e[s] = [u, o] : u.push(o);
        }
      }
    }, r;
  }()
);
const Wm = Gm;
var $m = (
  /** @class */
  function() {
    function r(t, e) {
      this._encode = t, this._schema = e;
    }
    return r.prototype.get = function() {
      return {
        // Do not generate full dimension name until fist used.
        fullDimensions: this._getFullDimensionNames(),
        encode: this._encode
      };
    }, r.prototype._getFullDimensionNames = function() {
      return this._cachedDimNames || (this._cachedDimNames = this._schema ? this._schema.makeOutputDimensionNames() : []), this._cachedDimNames;
    }, r;
  }()
);
function Xm(r, t) {
  var e = {}, i = e.encode = {}, n = $(), a = [], o = [], s = {};
  L(r.dimensions, function(c) {
    var v = r.getDimensionInfo(c), d = v.coordDim;
    if (d) {
      process.env.NODE_ENV !== "production" && U(vs.get(d) == null);
      var _ = v.coordDimIndex;
      Eo(i, d)[_] = c, v.isExtraCoord || (n.set(d, 1), qm(v.type) && (a[0] = c), Eo(s, d)[_] = r.getDimensionIndex(v.name)), v.defaultTooltip && o.push(c);
    }
    vs.each(function(p, g) {
      var y = Eo(i, g), m = v.otherDims[g];
      m != null && m !== !1 && (y[m] = v.name);
    });
  });
  var u = [], l = {};
  n.each(function(c, v) {
    var d = i[v];
    l[v] = d[0], u = u.concat(d);
  }), e.dataDimsOnCoord = u, e.dataDimIndicesOnCoord = it(u, function(c) {
    return r.getDimensionInfo(c).storeDimIndex;
  }), e.encodeFirstDimNotExtra = l;
  var f = i.label;
  f && f.length && (a = f.slice());
  var h = i.tooltip;
  return h && h.length ? o = h.slice() : o.length || (o = a.slice()), i.defaultedLabel = a, i.defaultedTooltip = o, e.userOutput = new $m(s, t), e;
}
function Eo(r, t) {
  return r.hasOwnProperty(t) || (r[t] = []), r[t];
}
function qm(r) {
  return !(r === "ordinal" || r === "time");
}
var Zm = (
  /** @class */
  function() {
    function r(t) {
      this.otherDims = {}, t != null && N(this, t);
    }
    return r;
  }()
);
const zn = Zm;
var Km = _t(), Qm = {
  float: "f",
  int: "i",
  ordinal: "o",
  number: "n",
  time: "t"
}, nc = (
  /** @class */
  function() {
    function r(t) {
      this.dimensions = t.dimensions, this._dimOmitted = t.dimensionOmitted, this.source = t.source, this._fullDimCount = t.fullDimensionCount, this._updateDimOmitted(t.dimensionOmitted);
    }
    return r.prototype.isDimensionOmitted = function() {
      return this._dimOmitted;
    }, r.prototype._updateDimOmitted = function(t) {
      this._dimOmitted = t, t && (this._dimNameMap || (this._dimNameMap = oc(this.source)));
    }, r.prototype.getSourceDimensionIndex = function(t) {
      return W(this._dimNameMap.get(t), -1);
    }, r.prototype.getSourceDimension = function(t) {
      var e = this.source.dimensionsDefine;
      if (e)
        return e[t];
    }, r.prototype.makeStoreSchema = function() {
      for (var t = this._fullDimCount, e = Sv(this.source), i = !sc(t), n = "", a = [], o = 0, s = 0; o < t; o++) {
        var u = void 0, l = void 0, f = void 0, h = this.dimensions[s];
        if (h && h.storeDimIndex === o)
          u = e ? h.name : null, l = h.type, f = h.ordinalMeta, s++;
        else {
          var c = this.getSourceDimension(o);
          c && (u = e ? c.name : null, l = c.type);
        }
        a.push({
          property: u,
          type: l,
          ordinalMeta: f
        }), e && u != null && (!h || !h.isCalculationCoord) && (n += i ? u.replace(/\`/g, "`1").replace(/\$/g, "`2") : u), n += "$", n += Qm[l] || "f", f && (n += f.uid), n += "$";
      }
      var v = this.source, d = [v.seriesLayoutBy, v.startIndex, n].join("$$");
      return {
        dimensions: a,
        hash: d
      };
    }, r.prototype.makeOutputDimensionNames = function() {
      for (var t = [], e = 0, i = 0; e < this._fullDimCount; e++) {
        var n = void 0, a = this.dimensions[i];
        if (a && a.storeDimIndex === e)
          a.isCalculationCoord || (n = a.name), i++;
        else {
          var o = this.getSourceDimension(e);
          o && (n = o.name);
        }
        t.push(n);
      }
      return t;
    }, r.prototype.appendCalculationDimension = function(t) {
      this.dimensions.push(t), t.isCalculationCoord = !0, this._fullDimCount++, this._updateDimOmitted(!0);
    }, r;
  }()
);
function Jm(r) {
  return r instanceof nc;
}
function ac(r) {
  for (var t = $(), e = 0; e < (r || []).length; e++) {
    var i = r[e], n = F(i) ? i.name : i;
    n != null && t.get(n) == null && t.set(n, e);
  }
  return t;
}
function oc(r) {
  var t = Km(r);
  return t.dimNameMap || (t.dimNameMap = ac(r.dimensionsDefine));
}
function sc(r) {
  return r > 30;
}
var Di = F, Ae = it, jm = typeof Int32Array > "u" ? Array : Int32Array, t1 = "e\0\0", Lf = -1, e1 = ["hasItemOption", "_nameList", "_idList", "_invertedIndicesMap", "_dimSummary", "userOutput", "_rawData", "_dimValueGetter", "_nameDimIdx", "_idDimIdx", "_nameRepeatCount"], r1 = ["_approximateExtent"], xf, Tn, Ci, Ir, Mo, Dn, Lo, i1 = (
  /** @class */
  function() {
    function r(t, e) {
      this.type = "list", this._dimOmitted = !1, this._nameList = [], this._idList = [], this._visual = {}, this._layout = {}, this._itemVisuals = [], this._itemLayouts = [], this._graphicEls = [], this._approximateExtent = {}, this._calculationInfo = {}, this.hasItemOption = !1, this.TRANSFERABLE_METHODS = ["cloneShallow", "downSample", "lttbDownSample", "map"], this.CHANGABLE_METHODS = ["filterSelf", "selectRange"], this.DOWNSAMPLE_METHODS = ["downSample", "lttbDownSample"];
      var i, n = !1;
      Jm(t) ? (i = t.dimensions, this._dimOmitted = t.isDimensionOmitted(), this._schema = t) : (n = !0, i = t), i = i || ["x", "y"];
      for (var a = {}, o = [], s = {}, u = !1, l = {}, f = 0; f < i.length; f++) {
        var h = i[f], c = Z(h) ? new zn({
          name: h
        }) : h instanceof zn ? h : new zn(h), v = c.name;
        c.type = c.type || "float", c.coordDim || (c.coordDim = v, c.coordDimIndex = 0);
        var d = c.otherDims = c.otherDims || {};
        o.push(v), a[v] = c, l[v] != null && (u = !0), c.createInvertedIndices && (s[v] = []), d.itemName === 0 && (this._nameDimIdx = f), d.itemId === 0 && (this._idDimIdx = f), process.env.NODE_ENV !== "production" && U(n || c.storeDimIndex >= 0), n && (c.storeDimIndex = f);
      }
      if (this.dimensions = o, this._dimInfos = a, this._initGetDimensionInfo(u), this.hostModel = e, this._invertedIndicesMap = s, this._dimOmitted) {
        var _ = this._dimIdxToName = $();
        L(o, function(p) {
          _.set(a[p].storeDimIndex, p);
        });
      }
    }
    return r.prototype.getDimension = function(t) {
      var e = this._recognizeDimIndex(t);
      if (e == null)
        return t;
      if (e = t, !this._dimOmitted)
        return this.dimensions[e];
      var i = this._dimIdxToName.get(e);
      if (i != null)
        return i;
      var n = this._schema.getSourceDimension(e);
      if (n)
        return n.name;
    }, r.prototype.getDimensionIndex = function(t) {
      var e = this._recognizeDimIndex(t);
      if (e != null)
        return e;
      if (t == null)
        return -1;
      var i = this._getDimInfo(t);
      return i ? i.storeDimIndex : this._dimOmitted ? this._schema.getSourceDimensionIndex(t) : -1;
    }, r.prototype._recognizeDimIndex = function(t) {
      if (Et(t) || t != null && !isNaN(t) && !this._getDimInfo(t) && (!this._dimOmitted || this._schema.getSourceDimensionIndex(t) < 0))
        return +t;
    }, r.prototype._getStoreDimIndex = function(t) {
      var e = this.getDimensionIndex(t);
      if (process.env.NODE_ENV !== "production" && e == null)
        throw new Error("Unknown dimension " + t);
      return e;
    }, r.prototype.getDimensionInfo = function(t) {
      return this._getDimInfo(this.getDimension(t));
    }, r.prototype._initGetDimensionInfo = function(t) {
      var e = this._dimInfos;
      this._getDimInfo = t ? function(i) {
        return e.hasOwnProperty(i) ? e[i] : void 0;
      } : function(i) {
        return e[i];
      };
    }, r.prototype.getDimensionsOnCoord = function() {
      return this._dimSummary.dataDimsOnCoord.slice();
    }, r.prototype.mapDimension = function(t, e) {
      var i = this._dimSummary;
      if (e == null)
        return i.encodeFirstDimNotExtra[t];
      var n = i.encode[t];
      return n ? n[e] : null;
    }, r.prototype.mapDimensionsAll = function(t) {
      var e = this._dimSummary, i = e.encode[t];
      return (i || []).slice();
    }, r.prototype.getStore = function() {
      return this._store;
    }, r.prototype.initData = function(t, e, i) {
      var n = this, a;
      if (t instanceof ds && (a = t), !a) {
        var o = this.dimensions, s = Zs(t) || Wt(t) ? new Tv(t, o.length) : t;
        a = new ds();
        var u = Ae(o, function(l) {
          return {
            type: n._dimInfos[l].type,
            property: l
          };
        });
        a.initData(s, u, i);
      }
      this._store = a, this._nameList = (e || []).slice(), this._idList = [], this._nameRepeatCount = {}, this._doInit(0, a.count()), this._dimSummary = Xm(this, this._schema), this.userOutput = this._dimSummary.userOutput;
    }, r.prototype.appendData = function(t) {
      var e = this._store.appendData(t);
      this._doInit(e[0], e[1]);
    }, r.prototype.appendValues = function(t, e) {
      var i = this._store.appendValues(t, e.length), n = i.start, a = i.end, o = this._shouldMakeIdFromName();
      if (this._updateOrdinalMeta(), e)
        for (var s = n; s < a; s++) {
          var u = s - n;
          this._nameList[s] = e[u], o && Lo(this, s);
        }
    }, r.prototype._updateOrdinalMeta = function() {
      for (var t = this._store, e = this.dimensions, i = 0; i < e.length; i++) {
        var n = this._dimInfos[e[i]];
        n.ordinalMeta && t.collectOrdinalMeta(n.storeDimIndex, n.ordinalMeta);
      }
    }, r.prototype._shouldMakeIdFromName = function() {
      var t = this._store.getProvider();
      return this._idDimIdx == null && t.getSource().sourceFormat !== be && !t.fillStorage;
    }, r.prototype._doInit = function(t, e) {
      if (!(t >= e)) {
        var i = this._store, n = i.getProvider();
        this._updateOrdinalMeta();
        var a = this._nameList, o = this._idList, s = n.getSource().sourceFormat, u = s === pe;
        if (u && !n.pure)
          for (var l = [], f = t; f < e; f++) {
            var h = n.getItem(f, l);
            if (!this.hasItemOption && Sp(h) && (this.hasItemOption = !0), h) {
              var c = h.name;
              a[f] == null && c != null && (a[f] = he(c, null));
              var v = h.id;
              o[f] == null && v != null && (o[f] = he(v, null));
            }
          }
        if (this._shouldMakeIdFromName())
          for (var f = t; f < e; f++)
            Lo(this, f);
        xf(this);
      }
    }, r.prototype.getApproximateExtent = function(t) {
      return this._approximateExtent[t] || this._store.getDataExtent(this._getStoreDimIndex(t));
    }, r.prototype.setApproximateExtent = function(t, e) {
      e = this.getDimension(e), this._approximateExtent[e] = t.slice();
    }, r.prototype.getCalculationInfo = function(t) {
      return this._calculationInfo[t];
    }, r.prototype.setCalculationInfo = function(t, e) {
      Di(t) ? N(this._calculationInfo, t) : this._calculationInfo[t] = e;
    }, r.prototype.getName = function(t) {
      var e = this.getRawIndex(t), i = this._nameList[e];
      return i == null && this._nameDimIdx != null && (i = Ci(this, this._nameDimIdx, e)), i == null && (i = ""), i;
    }, r.prototype._getCategory = function(t, e) {
      var i = this._store.get(t, e), n = this._store.getOrdinalMeta(t);
      return n ? n.categories[i] : i;
    }, r.prototype.getId = function(t) {
      return Tn(this, this.getRawIndex(t));
    }, r.prototype.count = function() {
      return this._store.count();
    }, r.prototype.get = function(t, e) {
      var i = this._store, n = this._dimInfos[t];
      if (n)
        return i.get(n.storeDimIndex, e);
    }, r.prototype.getByRawIndex = function(t, e) {
      var i = this._store, n = this._dimInfos[t];
      if (n)
        return i.getByRawIndex(n.storeDimIndex, e);
    }, r.prototype.getIndices = function() {
      return this._store.getIndices();
    }, r.prototype.getDataExtent = function(t) {
      return this._store.getDataExtent(this._getStoreDimIndex(t));
    }, r.prototype.getSum = function(t) {
      return this._store.getSum(this._getStoreDimIndex(t));
    }, r.prototype.getMedian = function(t) {
      return this._store.getMedian(this._getStoreDimIndex(t));
    }, r.prototype.getValues = function(t, e) {
      var i = this, n = this._store;
      return Y(t) ? n.getValues(Ae(t, function(a) {
        return i._getStoreDimIndex(a);
      }), e) : n.getValues(t);
    }, r.prototype.hasValue = function(t) {
      for (var e = this._dimSummary.dataDimIndicesOnCoord, i = 0, n = e.length; i < n; i++)
        if (isNaN(this._store.get(e[i], t)))
          return !1;
      return !0;
    }, r.prototype.indexOfName = function(t) {
      for (var e = 0, i = this._store.count(); e < i; e++)
        if (this.getName(e) === t)
          return e;
      return -1;
    }, r.prototype.getRawIndex = function(t) {
      return this._store.getRawIndex(t);
    }, r.prototype.indexOfRawIndex = function(t) {
      return this._store.indexOfRawIndex(t);
    }, r.prototype.rawIndexOf = function(t, e) {
      var i = t && this._invertedIndicesMap[t];
      if (process.env.NODE_ENV !== "production" && !i)
        throw new Error("Do not supported yet");
      var n = i[e];
      return n == null || isNaN(n) ? Lf : n;
    }, r.prototype.indicesOfNearest = function(t, e, i) {
      return this._store.indicesOfNearest(this._getStoreDimIndex(t), e, i);
    }, r.prototype.each = function(t, e, i) {
      J(t) && (i = e, e = t, t = []);
      var n = i || this, a = Ae(Ir(t), this._getStoreDimIndex, this);
      this._store.each(a, n ? At(e, n) : e);
    }, r.prototype.filterSelf = function(t, e, i) {
      J(t) && (i = e, e = t, t = []);
      var n = i || this, a = Ae(Ir(t), this._getStoreDimIndex, this);
      return this._store = this._store.filter(a, n ? At(e, n) : e), this;
    }, r.prototype.selectRange = function(t) {
      var e = this, i = {}, n = lt(t);
      return L(n, function(a) {
        var o = e._getStoreDimIndex(a);
        i[o] = t[a];
      }), this._store = this._store.selectRange(i), this;
    }, r.prototype.mapArray = function(t, e, i) {
      J(t) && (i = e, e = t, t = []), i = i || this;
      var n = [];
      return this.each(t, function() {
        n.push(e && e.apply(this, arguments));
      }, i), n;
    }, r.prototype.map = function(t, e, i, n) {
      var a = i || n || this, o = Ae(Ir(t), this._getStoreDimIndex, this), s = Dn(this);
      return s._store = this._store.map(o, a ? At(e, a) : e), s;
    }, r.prototype.modify = function(t, e, i, n) {
      var a = this, o = i || n || this;
      process.env.NODE_ENV !== "production" && L(Ir(t), function(u) {
        var l = a.getDimensionInfo(u);
        l.isCalculationCoord || console.error("Danger: only stack dimension can be modified");
      });
      var s = Ae(Ir(t), this._getStoreDimIndex, this);
      this._store.modify(s, o ? At(e, o) : e);
    }, r.prototype.downSample = function(t, e, i, n) {
      var a = Dn(this);
      return a._store = this._store.downSample(this._getStoreDimIndex(t), e, i, n), a;
    }, r.prototype.lttbDownSample = function(t, e) {
      var i = Dn(this);
      return i._store = this._store.lttbDownSample(this._getStoreDimIndex(t), e), i;
    }, r.prototype.getRawDataItem = function(t) {
      return this._store.getRawDataItem(t);
    }, r.prototype.getItemModel = function(t) {
      var e = this.hostModel, i = this.getRawDataItem(t);
      return new Fe(i, e, e && e.ecModel);
    }, r.prototype.diff = function(t) {
      var e = this;
      return new Wm(t ? t.getStore().getIndices() : [], this.getStore().getIndices(), function(i) {
        return Tn(t, i);
      }, function(i) {
        return Tn(e, i);
      });
    }, r.prototype.getVisual = function(t) {
      var e = this._visual;
      return e && e[t];
    }, r.prototype.setVisual = function(t, e) {
      this._visual = this._visual || {}, Di(t) ? N(this._visual, t) : this._visual[t] = e;
    }, r.prototype.getItemVisual = function(t, e) {
      var i = this._itemVisuals[t], n = i && i[e];
      return n ?? this.getVisual(e);
    }, r.prototype.hasItemVisual = function() {
      return this._itemVisuals.length > 0;
    }, r.prototype.ensureUniqueItemVisual = function(t, e) {
      var i = this._itemVisuals, n = i[t];
      n || (n = i[t] = {});
      var a = n[e];
      return a == null && (a = this.getVisual(e), Y(a) ? a = a.slice() : Di(a) && (a = N({}, a)), n[e] = a), a;
    }, r.prototype.setItemVisual = function(t, e, i) {
      var n = this._itemVisuals[t] || {};
      this._itemVisuals[t] = n, Di(e) ? N(n, e) : n[e] = i;
    }, r.prototype.clearAllVisual = function() {
      this._visual = {}, this._itemVisuals = [];
    }, r.prototype.setLayout = function(t, e) {
      Di(t) ? N(this._layout, t) : this._layout[t] = e;
    }, r.prototype.getLayout = function(t) {
      return this._layout[t];
    }, r.prototype.getItemLayout = function(t) {
      return this._itemLayouts[t];
    }, r.prototype.setItemLayout = function(t, e, i) {
      this._itemLayouts[t] = i ? N(this._itemLayouts[t] || {}, e) : e;
    }, r.prototype.clearItemLayouts = function() {
      this._itemLayouts.length = 0;
    }, r.prototype.setItemGraphicEl = function(t, e) {
      var i = this.hostModel && this.hostModel.seriesIndex;
      kg(i, this.dataType, t, e), this._graphicEls[t] = e;
    }, r.prototype.getItemGraphicEl = function(t) {
      return this._graphicEls[t];
    }, r.prototype.eachItemGraphicEl = function(t, e) {
      L(this._graphicEls, function(i, n) {
        i && t && t.call(e, i, n);
      });
    }, r.prototype.cloneShallow = function(t) {
      return t || (t = new r(this._schema ? this._schema : Ae(this.dimensions, this._getDimInfo, this), this.hostModel)), Mo(t, this), t._store = this._store, t;
    }, r.prototype.wrapMethod = function(t, e) {
      var i = this[t];
      J(i) && (this.__wrappedMethods = this.__wrappedMethods || [], this.__wrappedMethods.push(t), this[t] = function() {
        var n = i.apply(this, arguments);
        return e.apply(this, [n].concat(Is(arguments)));
      });
    }, r.internalField = function() {
      xf = function(t) {
        var e = t._invertedIndicesMap;
        L(e, function(i, n) {
          var a = t._dimInfos[n], o = a.ordinalMeta, s = t._store;
          if (o) {
            i = e[n] = new jm(o.categories.length);
            for (var u = 0; u < i.length; u++)
              i[u] = Lf;
            for (var u = 0; u < s.count(); u++)
              i[s.get(a.storeDimIndex, u)] = u;
          }
        });
      }, Ci = function(t, e, i) {
        return he(t._getCategory(e, i), null);
      }, Tn = function(t, e) {
        var i = t._idList[e];
        return i == null && t._idDimIdx != null && (i = Ci(t, t._idDimIdx, e)), i == null && (i = t1 + e), i;
      }, Ir = function(t) {
        return Y(t) || (t = t != null ? [t] : []), t;
      }, Dn = function(t) {
        var e = new r(t._schema ? t._schema : Ae(t.dimensions, t._getDimInfo, t), t.hostModel);
        return Mo(e, t), e;
      }, Mo = function(t, e) {
        L(e1.concat(e.__wrappedMethods || []), function(i) {
          e.hasOwnProperty(i) && (t[i] = e[i]);
        }), t.__wrappedMethods = e.__wrappedMethods, L(r1, function(i) {
          t[i] = K(e[i]);
        }), t._calculationInfo = N({}, e._calculationInfo);
      }, Lo = function(t, e) {
        var i = t._nameList, n = t._idList, a = t._nameDimIdx, o = t._idDimIdx, s = i[e], u = n[e];
        if (s == null && a != null && (i[e] = s = Ci(t, a, e)), u == null && o != null && (n[e] = u = Ci(t, o, e)), u == null && s != null) {
          var l = t._nameRepeatCount, f = l[s] = (l[s] || 0) + 1;
          u = s, f > 1 && (u += "__ec__" + f), n[e] = u;
        }
      };
    }(), r;
  }()
);
const n1 = i1;
function a1(r, t) {
  return o1(r, t).dimensions;
}
function o1(r, t) {
  Zs(r) || (r = mv(r)), t = t || {};
  var e = t.coordDimensions || [], i = t.dimensionsDefine || r.dimensionsDefine || [], n = $(), a = [], o = u1(r, e, i, t.dimensionsCount), s = t.canOmitUnusedDimensions && sc(o), u = i === r.dimensionsDefine, l = u ? oc(r) : ac(i), f = t.encodeDefine;
  !f && t.encodeDefaulter && (f = t.encodeDefaulter(r, o));
  for (var h = $(f), c = new Mv(o), v = 0; v < c.length; v++)
    c[v] = -1;
  function d(b) {
    var M = c[b];
    if (M < 0) {
      var E = i[b], P = F(E) ? E : {
        name: E
      }, x = new zn(), R = P.name;
      R != null && l.get(R) != null && (x.name = x.displayName = R), P.type != null && (x.type = P.type), P.displayName != null && (x.displayName = P.displayName);
      var O = a.length;
      return c[b] = O, x.storeDimIndex = b, a.push(x), x;
    }
    return a[M];
  }
  if (!s)
    for (var v = 0; v < o; v++)
      d(v);
  h.each(function(b, M) {
    var E = Mt(b).slice();
    if (E.length === 1 && !Z(E[0]) && E[0] < 0) {
      h.set(M, !1);
      return;
    }
    var P = h.set(M, []);
    L(E, function(x, R) {
      var O = Z(x) ? l.get(x) : x;
      O != null && O < o && (P[R] = O, p(d(O), M, R));
    });
  });
  var _ = 0;
  L(e, function(b) {
    var M, E, P, x;
    if (Z(b))
      M = b, x = {};
    else {
      x = b, M = x.name;
      var R = x.ordinalMeta;
      x.ordinalMeta = null, x = N({}, x), x.ordinalMeta = R, E = x.dimsDef, P = x.otherDims, x.name = x.coordDim = x.coordDimIndex = x.dimsDef = x.otherDims = null;
    }
    var O = h.get(M);
    if (O !== !1) {
      if (O = Mt(O), !O.length)
        for (var I = 0; I < (E && E.length || 1); I++) {
          for (; _ < o && d(_).coordDim != null; )
            _++;
          _ < o && O.push(_++);
        }
      L(O, function(X, A) {
        var B = d(X);
        if (u && x.type != null && (B.type = x.type), p(Lt(B, x), M, A), B.name == null && E) {
          var k = E[A];
          !F(k) && (k = {
            name: k
          }), B.name = B.displayName = k.name, B.defaultTooltip = k.defaultTooltip;
        }
        P && Lt(B.otherDims, P);
      });
    }
  });
  function p(b, M, E) {
    vs.get(M) != null ? b.otherDims[M] = E : (b.coordDim = M, b.coordDimIndex = E, n.set(M, !0));
  }
  var g = t.generateCoord, y = t.generateCoordCount, m = y != null;
  y = g ? y || 1 : 0;
  var w = g || "value";
  function T(b) {
    b.name == null && (b.name = b.coordDim);
  }
  if (s)
    L(a, function(b) {
      T(b);
    }), a.sort(function(b, M) {
      return b.storeDimIndex - M.storeDimIndex;
    });
  else
    for (var S = 0; S < o; S++) {
      var D = d(S), C = D.coordDim;
      C == null && (D.coordDim = l1(w, n, m), D.coordDimIndex = 0, (!g || y <= 0) && (D.isExtraCoord = !0), y--), T(D), D.type == null && (vv(r, S) === Vt.Must || D.isExtraCoord && (D.otherDims.itemName != null || D.otherDims.seriesName != null)) && (D.type = "ordinal");
    }
  return s1(a), new nc({
    source: r,
    dimensions: a,
    fullDimensionCount: o,
    dimensionOmitted: s
  });
}
function s1(r) {
  for (var t = $(), e = 0; e < r.length; e++) {
    var i = r[e], n = i.name, a = t.get(n) || 0;
    a > 0 && (i.name = n + (a - 1)), a++, t.set(n, a);
  }
}
function u1(r, t, e, i) {
  var n = Math.max(r.dimensionsDetectedCount || 1, t.length, e.length, i || 0);
  return L(t, function(a) {
    var o;
    F(a) && (o = a.dimsDef) && (n = Math.max(n, o.length));
  }), n;
}
function l1(r, t, e) {
  if (e || t.hasKey(r)) {
    for (var i = 0; t.hasKey(r + i); )
      i++;
    r += i;
  }
  return t.set(r, !0), r;
}
function f1(r, t) {
  return t = t || {}, O_(r, null, null, t.state !== "normal");
}
var Pf = [], h1 = {
  registerPreprocessor: ec,
  registerProcessor: rc,
  registerPostInit: Fm,
  registerPostUpdate: Vm,
  registerUpdateLifecycle: ru,
  registerAction: ni,
  registerCoordinateSystem: zm,
  registerLayout: Hm,
  registerVisual: wr,
  registerTransform: Ym,
  registerLoading: ic,
  registerMap: Um,
  registerImpl: wm,
  PRIORITY: Am,
  ComponentModel: st,
  ComponentView: ea,
  SeriesModel: Kr,
  ChartView: gr,
  // TODO Use ComponentModel and SeriesModel instead of Constructor
  registerComponentModel: function(r) {
    st.registerClass(r);
  },
  registerComponentView: function(r) {
    ea.registerClass(r);
  },
  registerSeriesModel: function(r) {
    Kr.registerClass(r);
  },
  registerChartView: function(r) {
    gr.registerClass(r);
  },
  registerSubTypeDefaulter: function(r, t) {
    st.registerSubTypeDefaulter(r, t);
  },
  registerPainter: function(r, t) {
    lp(r, t);
  }
};
function nu(r) {
  if (Y(r)) {
    L(r, function(t) {
      nu(t);
    });
    return;
  }
  nt(Pf, r) >= 0 || (Pf.push(r), J(r) && (r = {
    install: r
  }), r.install(h1));
}
function v1(r) {
  var t = Kr.extend(r);
  return Kr.registerClass(t), t;
}
function c1(r) {
  var t = gr.extend(r);
  return gr.registerClass(t), t;
}
var bi = Math.PI * 2, nr = yr.CMD, d1 = ["top", "right", "bottom", "left"];
function p1(r, t, e, i, n) {
  var a = e.width, o = e.height;
  switch (r) {
    case "top":
      i.set(e.x + a / 2, e.y - t), n.set(0, -1);
      break;
    case "bottom":
      i.set(e.x + a / 2, e.y + o + t), n.set(0, 1);
      break;
    case "left":
      i.set(e.x - t, e.y + o / 2), n.set(-1, 0);
      break;
    case "right":
      i.set(e.x + a + t, e.y + o / 2), n.set(1, 0);
      break;
  }
}
function g1(r, t, e, i, n, a, o, s, u) {
  o -= r, s -= t;
  var l = Math.sqrt(o * o + s * s);
  o /= l, s /= l;
  var f = o * e + r, h = s * e + t;
  if (Math.abs(i - n) % bi < 1e-4)
    return u[0] = f, u[1] = h, l - e;
  if (a) {
    var c = i;
    i = De(n), n = De(c);
  } else
    i = De(i), n = De(n);
  i > n && (n += bi);
  var v = Math.atan2(s, o);
  if (v < 0 && (v += bi), v >= i && v <= n || v + bi >= i && v + bi <= n)
    return u[0] = f, u[1] = h, l - e;
  var d = e * Math.cos(i) + r, _ = e * Math.sin(i) + t, p = e * Math.cos(n) + r, g = e * Math.sin(n) + t, y = (d - o) * (d - o) + (_ - s) * (_ - s), m = (p - o) * (p - o) + (g - s) * (g - s);
  return y < m ? (u[0] = d, u[1] = _, Math.sqrt(y)) : (u[0] = p, u[1] = g, Math.sqrt(m));
}
function bs(r, t, e, i, n, a, o, s) {
  var u = n - r, l = a - t, f = e - r, h = i - t, c = Math.sqrt(f * f + h * h);
  f /= c, h /= c;
  var v = u * f + l * h, d = v / c;
  s && (d = Math.min(Math.max(d, 0), 1)), d *= c;
  var _ = o[0] = r + d * f, p = o[1] = t + d * h;
  return Math.sqrt((_ - n) * (_ - n) + (p - a) * (p - a));
}
function uc(r, t, e, i, n, a, o) {
  e < 0 && (r = r + e, e = -e), i < 0 && (t = t + i, i = -i);
  var s = r + e, u = t + i, l = o[0] = Math.min(Math.max(n, r), s), f = o[1] = Math.min(Math.max(a, t), u);
  return Math.sqrt((l - n) * (l - n) + (f - a) * (f - a));
}
var ie = [];
function _1(r, t, e) {
  var i = uc(t.x, t.y, t.width, t.height, r.x, r.y, ie);
  return e.set(ie[0], ie[1]), i;
}
function y1(r, t, e) {
  for (var i = 0, n = 0, a = 0, o = 0, s, u, l = 1 / 0, f = t.data, h = r.x, c = r.y, v = 0; v < f.length; ) {
    var d = f[v++];
    v === 1 && (i = f[v], n = f[v + 1], a = i, o = n);
    var _ = l;
    switch (d) {
      case nr.M:
        a = f[v++], o = f[v++], i = a, n = o;
        break;
      case nr.L:
        _ = bs(i, n, f[v], f[v + 1], h, c, ie, !0), i = f[v++], n = f[v++];
        break;
      case nr.C:
        _ = sh(i, n, f[v++], f[v++], f[v++], f[v++], f[v], f[v + 1], h, c, ie), i = f[v++], n = f[v++];
        break;
      case nr.Q:
        _ = lh(i, n, f[v++], f[v++], f[v], f[v + 1], h, c, ie), i = f[v++], n = f[v++];
        break;
      case nr.A:
        var p = f[v++], g = f[v++], y = f[v++], m = f[v++], w = f[v++], T = f[v++];
        v += 1;
        var S = !!(1 - f[v++]);
        s = Math.cos(w) * y + p, u = Math.sin(w) * m + g, v <= 1 && (a = s, o = u);
        var D = (h - p) * m / y + p;
        _ = g1(p, g, m, w, w + T, S, D, c, ie), i = Math.cos(w + T) * y + p, n = Math.sin(w + T) * m + g;
        break;
      case nr.R:
        a = i = f[v++], o = n = f[v++];
        var C = f[v++], b = f[v++];
        _ = uc(a, o, C, b, h, c, ie);
        break;
      case nr.Z:
        _ = bs(i, n, a, o, h, c, ie, !0), i = a, n = o;
        break;
    }
    _ < l && (l = _, e.set(ie[0], ie[1]));
  }
  return l;
}
var vr = new V(), pt = new V(), zt = new V(), Hr = new V(), Ei = new V();
function Rf(r, t) {
  if (r) {
    var e = r.getTextGuideLine(), i = r.getTextContent();
    if (i && e) {
      var n = r.textGuideLineConfig || {}, a = [[0, 0], [0, 0], [0, 0]], o = n.candidates || d1, s = i.getBoundingRect().clone();
      s.applyTransform(i.getComputedTransform());
      var u = 1 / 0, l = n.anchor, f = r.getComputedTransform(), h = f && Kf([], f), c = t.get("length2") || 0;
      l && zt.copy(l);
      for (var v = 0; v < o.length; v++) {
        var d = o[v];
        p1(d, 0, s, vr, Hr), V.scaleAndAdd(pt, vr, Hr, c), pt.transform(h);
        var _ = r.getBoundingRect(), p = l ? l.distance(pt) : r instanceof ht ? y1(pt, r.path, zt) : _1(pt, _, zt);
        p < u && (u = p, pt.transform(f), zt.transform(f), zt.toArray(a[0]), pt.toArray(a[1]), vr.toArray(a[2]));
      }
      m1(a, t.get("minTurnAngle")), e.setShape({
        points: a
      });
    }
  }
}
var If = [], ar = new V();
function m1(r, t) {
  if (t <= 180 && t > 0) {
    t = t / 180 * Math.PI, vr.fromArray(r[0]), pt.fromArray(r[1]), zt.fromArray(r[2]), V.sub(Hr, vr, pt), V.sub(Ei, zt, pt);
    var e = Hr.len(), i = Ei.len();
    if (!(e < 1e-3 || i < 1e-3)) {
      Hr.scale(1 / e), Ei.scale(1 / i);
      var n = Hr.dot(Ei), a = Math.cos(t);
      if (a < n) {
        var o = bs(pt.x, pt.y, zt.x, zt.y, vr.x, vr.y, If, !1);
        ar.fromArray(If), ar.scaleAndAdd(Ei, o / Math.tan(Math.PI - t));
        var s = zt.x !== pt.x ? (ar.x - pt.x) / (zt.x - pt.x) : (ar.y - pt.y) / (zt.y - pt.y);
        if (isNaN(s))
          return;
        s < 0 ? V.copy(ar, pt) : s > 1 && V.copy(ar, zt), ar.toArray(r[1]);
      }
    }
  }
}
function Af(r, t, e, i) {
  var n = e === "normal", a = n ? r : r.ensureState(e);
  a.ignore = t;
  var o = i.get("smooth");
  o && o === !0 && (o = 0.3), a.shape = a.shape || {}, o > 0 && (a.shape.smooth = o);
  var s = i.getModel("lineStyle").getLineStyle();
  n ? r.useStyle(s) : a.style = s;
}
function w1(r, t) {
  var e = t.smooth, i = t.points;
  if (i)
    if (r.moveTo(i[0][0], i[0][1]), e > 0 && i.length >= 3) {
      var n = Fo(i[0], i[1]), a = Fo(i[1], i[2]);
      if (!n || !a) {
        r.lineTo(i[1][0], i[1][1]), r.lineTo(i[2][0], i[2][1]);
        return;
      }
      var o = Math.min(n, a) * e, s = Ma([], i[1], i[0], o / n), u = Ma([], i[1], i[2], o / a), l = Ma([], s, u, 0.5);
      r.bezierCurveTo(s[0], s[1], s[0], s[1], l[0], l[1]), r.bezierCurveTo(u[0], u[1], u[0], u[1], i[2][0], i[2][1]);
    } else
      for (var f = 1; f < i.length; f++)
        r.lineTo(i[f][0], i[f][1]);
}
function S1(r, t, e) {
  var i = r.getTextGuideLine(), n = r.getTextContent();
  if (!n) {
    i && r.removeTextGuideLine();
    return;
  }
  for (var a = t.normal, o = a.get("show"), s = n.ignore, u = 0; u < ll.length; u++) {
    var l = ll[u], f = t[l], h = l === "normal";
    if (f) {
      var c = f.get("show"), v = h ? s : W(n.states[l] && n.states[l].ignore, s);
      if (v || !W(c, o)) {
        var d = h ? i : i && i.states[l];
        d && (d.ignore = !0);
        continue;
      }
      i || (i = new y_(), r.setTextGuideLine(i), !h && (s || !o) && Af(i, !0, "normal", t.normal), r.stateProxy && (i.stateProxy = r.stateProxy)), Af(i, !1, l, f);
    }
  }
  if (i) {
    Lt(i.style, e), i.style.fill = null;
    var _ = a.get("showAbove"), p = r.textGuideLineConfig = r.textGuideLineConfig || {};
    p.showAbove = _ || !1, i.buildPath = w1;
  }
}
function T1(r, t) {
  t = t || "labelLine";
  for (var e = {
    normal: r.getModel(t)
  }, i = 0; i < qr.length; i++) {
    var n = qr[i];
    e[n] = r.getModel([n, t]);
  }
  return e;
}
function D1(r) {
  for (var t = [], e = 0; e < r.length; e++) {
    var i = r[e];
    if (!i.defaultAttr.ignore) {
      var n = i.label, a = n.getComputedTransform(), o = n.getBoundingRect(), s = !a || a[1] < 1e-5 && a[2] < 1e-5, u = n.style.margin || 0, l = o.clone();
      l.applyTransform(a), l.x -= u / 2, l.y -= u / 2, l.width += u, l.height += u;
      var f = s ? new fs(o, a) : null;
      t.push({
        label: n,
        labelLine: i.labelLine,
        rect: l,
        localRect: o,
        obb: f,
        priority: i.priority,
        defaultAttr: i.defaultAttr,
        layoutOption: i.computedLayoutOption,
        axisAligned: s,
        transform: a
      });
    }
  }
  return t;
}
function lc(r, t, e, i, n, a) {
  var o = r.length;
  if (o < 2)
    return;
  r.sort(function(C, b) {
    return C.rect[t] - b.rect[t];
  });
  for (var s = 0, u, l = !1, f = 0, h = 0; h < o; h++) {
    var c = r[h], v = c.rect;
    u = v[t] - s, u < 0 && (v[t] -= u, c.label[t] -= u, l = !0);
    var d = Math.max(-u, 0);
    f += d, s = v[t] + v[e];
  }
  f > 0 && a && T(-f / o, 0, o);
  var _ = r[0], p = r[o - 1], g, y;
  m(), g < 0 && S(-g, 0.8), y < 0 && S(y, 0.8), m(), w(g, y, 1), w(y, g, -1), m(), g < 0 && D(-g), y < 0 && D(y);
  function m() {
    g = _.rect[t] - i, y = n - p.rect[t] - p.rect[e];
  }
  function w(C, b, M) {
    if (C < 0) {
      var E = Math.min(b, -C);
      if (E > 0) {
        T(E * M, 0, o);
        var P = E + C;
        P < 0 && S(-P * M, 1);
      } else
        S(-C * M, 1);
    }
  }
  function T(C, b, M) {
    C !== 0 && (l = !0);
    for (var E = b; E < M; E++) {
      var P = r[E], x = P.rect;
      x[t] += C, P.label[t] += C;
    }
  }
  function S(C, b) {
    for (var M = [], E = 0, P = 1; P < o; P++) {
      var x = r[P - 1].rect, R = Math.max(r[P].rect[t] - x[t] - x[e], 0);
      M.push(R), E += R;
    }
    if (E) {
      var O = Math.min(Math.abs(C) / E, b);
      if (C > 0)
        for (var P = 0; P < o - 1; P++) {
          var I = M[P] * O;
          T(I, 0, P + 1);
        }
      else
        for (var P = o - 1; P > 0; P--) {
          var I = M[P - 1] * O;
          T(-I, P, o);
        }
    }
  }
  function D(C) {
    var b = C < 0 ? -1 : 1;
    C = Math.abs(C);
    for (var M = Math.ceil(C / (o - 1)), E = 0; E < o - 1; E++)
      if (b > 0 ? T(M, 0, E + 1) : T(-M, o - E - 1, o), C -= M, C <= 0)
        return;
  }
  return l;
}
function C1(r, t, e, i) {
  return lc(r, "x", "width", t, e, i);
}
function b1(r, t, e, i) {
  return lc(r, "y", "height", t, e, i);
}
function E1(r) {
  var t = [];
  r.sort(function(_, p) {
    return p.priority - _.priority;
  });
  var e = new et(0, 0, 0, 0);
  function i(_) {
    if (!_.ignore) {
      var p = _.ensureState("emphasis");
      p.ignore == null && (p.ignore = !1);
    }
    _.ignore = !0;
  }
  for (var n = 0; n < r.length; n++) {
    var a = r[n], o = a.axisAligned, s = a.localRect, u = a.transform, l = a.label, f = a.labelLine;
    e.copy(a.rect), e.width -= 0.1, e.height -= 0.1, e.x += 0.05, e.y += 0.05;
    for (var h = a.obb, c = !1, v = 0; v < t.length; v++) {
      var d = t[v];
      if (e.intersect(d.rect)) {
        if (o && d.axisAligned) {
          c = !0;
          break;
        }
        if (d.obb || (d.obb = new fs(d.localRect, d.transform)), h || (h = new fs(s, u)), h.intersect(d.obb)) {
          c = !0;
          break;
        }
      }
    }
    c ? (i(l), f && i(f)) : (l.attr("ignore", a.defaultAttr.ignore), f && f.attr("ignore", a.defaultAttr.labelGuideIgnore), t.push(a));
  }
}
function M1(r) {
  if (r) {
    for (var t = [], e = 0; e < r.length; e++)
      t.push(r[e].slice());
    return t;
  }
}
function L1(r, t) {
  var e = r.label, i = t && t.getTextGuideLine();
  return {
    dataIndex: r.dataIndex,
    dataType: r.dataType,
    seriesIndex: r.seriesModel.seriesIndex,
    text: r.label.style.text,
    rect: r.hostRect,
    labelRect: r.rect,
    // x: labelAttr.x,
    // y: labelAttr.y,
    align: e.style.align,
    verticalAlign: e.style.verticalAlign,
    labelLinePoints: M1(i && i.shape.points)
  };
}
var Of = ["align", "verticalAlign", "width", "height", "fontSize"], St = new Ns(), xo = _t(), x1 = _t();
function Cn(r, t, e) {
  for (var i = 0; i < e.length; i++) {
    var n = e[i];
    t[n] != null && (r[n] = t[n]);
  }
}
var bn = ["x", "y", "rotation"], P1 = (
  /** @class */
  function() {
    function r() {
      this._labelList = [], this._chartViewList = [];
    }
    return r.prototype.clearLabels = function() {
      this._labelList = [], this._chartViewList = [];
    }, r.prototype._addLabel = function(t, e, i, n, a) {
      var o = n.style, s = n.__hostTarget, u = s.textConfig || {}, l = n.getComputedTransform(), f = n.getBoundingRect().plain();
      et.applyTransform(f, f, l), l ? St.setLocalTransform(l) : (St.x = St.y = St.rotation = St.originX = St.originY = 0, St.scaleX = St.scaleY = 1), St.rotation = De(St.rotation);
      var h = n.__hostTarget, c;
      if (h) {
        c = h.getBoundingRect().plain();
        var v = h.getComputedTransform();
        et.applyTransform(c, c, v);
      }
      var d = c && h.getTextGuideLine();
      this._labelList.push({
        label: n,
        labelLine: d,
        seriesModel: i,
        dataIndex: t,
        dataType: e,
        layoutOption: a,
        computedLayoutOption: null,
        rect: f,
        hostRect: c,
        // Label with lower priority will be hidden when overlapped
        // Use rect size as default priority
        priority: c ? c.width * c.height : 0,
        // Save default label attributes.
        // For restore if developers want get back to default value in callback.
        defaultAttr: {
          ignore: n.ignore,
          labelGuideIgnore: d && d.ignore,
          x: St.x,
          y: St.y,
          scaleX: St.scaleX,
          scaleY: St.scaleY,
          rotation: St.rotation,
          style: {
            x: o.x,
            y: o.y,
            align: o.align,
            verticalAlign: o.verticalAlign,
            width: o.width,
            height: o.height,
            fontSize: o.fontSize
          },
          cursor: n.cursor,
          attachedPos: u.position,
          attachedRot: u.rotation
        }
      });
    }, r.prototype.addLabelsOfSeries = function(t) {
      var e = this;
      this._chartViewList.push(t);
      var i = t.__model, n = i.get("labelLayout");
      (J(n) || lt(n).length) && t.group.traverse(function(a) {
        if (a.ignore)
          return !0;
        var o = a.getTextContent(), s = Gt(a);
        o && !o.disableLabelLayout && e._addLabel(s.dataIndex, s.dataType, i, o, n);
      });
    }, r.prototype.updateLayoutConfig = function(t) {
      var e = t.getWidth(), i = t.getHeight();
      function n(m, w) {
        return function() {
          Rf(m, w);
        };
      }
      for (var a = 0; a < this._labelList.length; a++) {
        var o = this._labelList[a], s = o.label, u = s.__hostTarget, l = o.defaultAttr, f = void 0;
        J(o.layoutOption) ? f = o.layoutOption(L1(o, u)) : f = o.layoutOption, f = f || {}, o.computedLayoutOption = f;
        var h = Math.PI / 180;
        u && u.setTextConfig({
          // Force to set local false.
          local: !1,
          // Ignore position and rotation config on the host el if x or y is changed.
          position: f.x != null || f.y != null ? null : l.attachedPos,
          // Ignore rotation config on the host el if rotation is changed.
          rotation: f.rotate != null ? f.rotate * h : l.attachedRot,
          offset: [f.dx || 0, f.dy || 0]
        });
        var c = !1;
        if (f.x != null ? (s.x = Qo(f.x, e), s.setStyle("x", 0), c = !0) : (s.x = l.x, s.setStyle("x", l.style.x)), f.y != null ? (s.y = Qo(f.y, i), s.setStyle("y", 0), c = !0) : (s.y = l.y, s.setStyle("y", l.style.y)), f.labelLinePoints) {
          var v = u.getTextGuideLine();
          v && (v.setShape({
            points: f.labelLinePoints
          }), c = !1);
        }
        var d = xo(s);
        d.needsUpdateLabelLine = c, s.rotation = f.rotate != null ? f.rotate * h : l.rotation, s.scaleX = l.scaleX, s.scaleY = l.scaleY;
        for (var _ = 0; _ < Of.length; _++) {
          var p = Of[_];
          s.setStyle(p, f[p] != null ? f[p] : l.style[p]);
        }
        if (f.draggable) {
          if (s.draggable = !0, s.cursor = "move", u) {
            var g = o.seriesModel;
            if (o.dataIndex != null) {
              var y = o.seriesModel.getData(o.dataType);
              g = y.getItemModel(o.dataIndex);
            }
            s.on("drag", n(u, g.getModel("labelLine")));
          }
        } else
          s.off("drag"), s.cursor = l.cursor;
      }
    }, r.prototype.layout = function(t) {
      var e = t.getWidth(), i = t.getHeight(), n = D1(this._labelList), a = It(n, function(u) {
        return u.layoutOption.moveOverlap === "shiftX";
      }), o = It(n, function(u) {
        return u.layoutOption.moveOverlap === "shiftY";
      });
      C1(a, 0, e), b1(o, 0, i);
      var s = It(n, function(u) {
        return u.layoutOption.hideOverlap;
      });
      E1(s);
    }, r.prototype.processLabelsOverall = function() {
      var t = this;
      L(this._chartViewList, function(e) {
        var i = e.__model, n = e.ignoreLabelLineUpdate, a = i.isAnimationEnabled();
        e.group.traverse(function(o) {
          if (o.ignore && !o.forceLabelAnimation)
            return !0;
          var s = !n, u = o.getTextContent();
          !s && u && (s = xo(u).needsUpdateLabelLine), s && t._updateLabelLine(o, i), a && t._animateLabels(o, i);
        });
      });
    }, r.prototype._updateLabelLine = function(t, e) {
      var i = t.getTextContent(), n = Gt(t), a = n.dataIndex;
      if (i && a != null) {
        var o = e.getData(n.dataType), s = o.getItemModel(a), u = {}, l = o.getItemVisual(a, "style");
        if (l) {
          var f = o.getVisual("drawType");
          u.stroke = l[f];
        }
        var h = s.getModel("labelLine");
        S1(t, T1(s), u), Rf(t, h);
      }
    }, r.prototype._animateLabels = function(t, e) {
      var i = t.getTextContent(), n = t.getTextGuideLine();
      if (i && (t.forceLabelAnimation || !i.ignore && !i.invisible && !t.disableLabelAnimation && !Bn(t))) {
        var a = xo(i), o = a.oldLayout, s = Gt(t), u = s.dataIndex, l = {
          x: i.x,
          y: i.y,
          rotation: i.rotation
        }, f = e.getData(s.dataType);
        if (o) {
          i.attr(o);
          var c = t.prevStates;
          c && (nt(c, "select") >= 0 && i.attr(a.oldLayoutSelect), nt(c, "emphasis") >= 0 && i.attr(a.oldLayoutEmphasis)), Wr(i, l, e, u);
        } else if (i.attr(l), !nv(i).valueAnimation) {
          var h = W(i.style.opacity, 1);
          i.style.opacity = 0, qn(i, {
            style: {
              opacity: h
            }
          }, e, u);
        }
        if (a.oldLayout = l, i.states.select) {
          var v = a.oldLayoutSelect = {};
          Cn(v, l, bn), Cn(v, i.states.select, bn);
        }
        if (i.states.emphasis) {
          var d = a.oldLayoutEmphasis = {};
          Cn(d, l, bn), Cn(d, i.states.emphasis, bn);
        }
        F_(i, u, f, e, e);
      }
      if (n && !n.ignore && !n.invisible) {
        var a = x1(n), o = a.oldLayout, _ = {
          points: n.shape.points
        };
        o ? (n.attr({
          shape: o
        }), Wr(n, {
          shape: _
        }, e)) : (n.setShape(_), n.style.strokePercent = 0, qn(n, {
          style: {
            strokePercent: 1
          }
        }, e)), a.oldLayout = _;
      }
    }, r;
  }()
);
const R1 = P1;
var Po = _t();
function I1(r) {
  r.registerUpdateLifecycle("series:beforeupdate", function(t, e, i) {
    var n = Po(e).labelManager;
    n || (n = Po(e).labelManager = new R1()), n.clearLabels();
  }), r.registerUpdateLifecycle("series:layoutlabels", function(t, e, i) {
    var n = Po(e).labelManager;
    i.updatedSeries.forEach(function(a) {
      n.addLabelsOfSeries(e.getViewOfSeriesModel(a));
    }), n.updateLayoutConfig(e), n.layout(e), n.processLabelsOverall();
  });
}
function Nf(r, t, e) {
  var i = Jr.createCanvas(), n = t.getWidth(), a = t.getHeight(), o = i.style;
  return o && (o.position = "absolute", o.left = "0", o.top = "0", o.width = n + "px", o.height = a + "px", i.setAttribute("data-zr-dom-id", r)), i.width = n * e, i.height = a * e, i;
}
var A1 = function(r) {
  j(t, r);
  function t(e, i, n) {
    var a = r.call(this) || this;
    a.motionBlur = !1, a.lastFrameAlpha = 0.7, a.dpr = 1, a.virtual = !1, a.config = {}, a.incremental = !1, a.zlevel = 0, a.maxRepaintRectCount = 5, a.__dirty = !0, a.__firstTimePaint = !0, a.__used = !1, a.__drawIndex = 0, a.__startIndex = 0, a.__endIndex = 0, a.__prevStartIndex = null, a.__prevEndIndex = null;
    var o;
    n = n || $n, typeof e == "string" ? o = Nf(e, i, n) : F(e) && (o = e, e = o.id), a.id = e, a.dom = o;
    var s = o.style;
    return s && (qf(o), o.onselectstart = function() {
      return !1;
    }, s.padding = "0", s.margin = "0", s.borderWidth = "0"), a.painter = i, a.dpr = n, a;
  }
  return t.prototype.getElementCount = function() {
    return this.__endIndex - this.__startIndex;
  }, t.prototype.afterBrush = function() {
    this.__prevStartIndex = this.__startIndex, this.__prevEndIndex = this.__endIndex;
  }, t.prototype.initContext = function() {
    this.ctx = this.dom.getContext("2d"), this.ctx.dpr = this.dpr;
  }, t.prototype.setUnpainted = function() {
    this.__firstTimePaint = !0;
  }, t.prototype.createBackBuffer = function() {
    var e = this.dpr;
    this.domBack = Nf("back-" + this.id, this.painter, e), this.ctxBack = this.domBack.getContext("2d"), e !== 1 && this.ctxBack.scale(e, e);
  }, t.prototype.createRepaintRects = function(e, i, n, a) {
    if (this.__firstTimePaint)
      return this.__firstTimePaint = !1, null;
    var o = [], s = this.maxRepaintRectCount, u = !1, l = new et(0, 0, 0, 0);
    function f(y) {
      if (!(!y.isFinite() || y.isZero()))
        if (o.length === 0) {
          var m = new et(0, 0, 0, 0);
          m.copy(y), o.push(m);
        } else {
          for (var w = !1, T = 1 / 0, S = 0, D = 0; D < o.length; ++D) {
            var C = o[D];
            if (C.intersect(y)) {
              var b = new et(0, 0, 0, 0);
              b.copy(C), b.union(y), o[D] = b, w = !0;
              break;
            } else if (u) {
              l.copy(y), l.union(C);
              var M = y.width * y.height, E = C.width * C.height, P = l.width * l.height, x = P - M - E;
              x < T && (T = x, S = D);
            }
          }
          if (u && (o[S].union(y), w = !0), !w) {
            var m = new et(0, 0, 0, 0);
            m.copy(y), o.push(m);
          }
          u || (u = o.length >= s);
        }
    }
    for (var h = this.__startIndex; h < this.__endIndex; ++h) {
      var c = e[h];
      if (c) {
        var v = c.shouldBePainted(n, a, !0, !0), d = c.__isRendered && (c.__dirty & Ut || !v) ? c.getPrevPaintRect() : null;
        d && f(d);
        var _ = v && (c.__dirty & Ut || !c.__isRendered) ? c.getPaintRect() : null;
        _ && f(_);
      }
    }
    for (var h = this.__prevStartIndex; h < this.__prevEndIndex; ++h) {
      var c = i[h], v = c.shouldBePainted(n, a, !0, !0);
      if (c && (!v || !c.__zr) && c.__isRendered) {
        var d = c.getPrevPaintRect();
        d && f(d);
      }
    }
    var p;
    do {
      p = !1;
      for (var h = 0; h < o.length; ) {
        if (o[h].isZero()) {
          o.splice(h, 1);
          continue;
        }
        for (var g = h + 1; g < o.length; )
          o[h].intersect(o[g]) ? (p = !0, o[h].union(o[g]), o.splice(g, 1)) : g++;
        h++;
      }
    } while (p);
    return this._paintRects = o, o;
  }, t.prototype.debugGetPaintRects = function() {
    return (this._paintRects || []).slice();
  }, t.prototype.resize = function(e, i) {
    var n = this.dpr, a = this.dom, o = a.style, s = this.domBack;
    o && (o.width = e + "px", o.height = i + "px"), a.width = e * n, a.height = i * n, s && (s.width = e * n, s.height = i * n, n !== 1 && this.ctxBack.scale(n, n));
  }, t.prototype.clear = function(e, i, n) {
    var a = this.dom, o = this.ctx, s = a.width, u = a.height;
    i = i || this.clearColor;
    var l = this.motionBlur && !e, f = this.lastFrameAlpha, h = this.dpr, c = this;
    l && (this.domBack || this.createBackBuffer(), this.ctxBack.globalCompositeOperation = "copy", this.ctxBack.drawImage(a, 0, 0, s / h, u / h));
    var v = this.domBack;
    function d(_, p, g, y) {
      if (o.clearRect(_, p, g, y), i && i !== "transparent") {
        var m = void 0;
        if (fa(i)) {
          var w = i.global || i.__width === g && i.__height === y;
          m = w && i.__canvasGradient || ws(o, i, {
            x: 0,
            y: 0,
            width: g,
            height: y
          }), i.__canvasGradient = m, i.__width = g, i.__height = y;
        } else
          Ic(i) && (i.scaleX = i.scaleX || h, i.scaleY = i.scaleY || h, m = Ss(o, i, {
            dirty: function() {
              c.setUnpainted(), c.__painter.refresh();
            }
          }));
        o.save(), o.fillStyle = m || i, o.fillRect(_, p, g, y), o.restore();
      }
      l && (o.save(), o.globalAlpha = f, o.drawImage(v, _, p, g, y), o.restore());
    }
    !n || l ? d(0, 0, s, u) : n.length && L(n, function(_) {
      d(_.x * h, _.y * h, _.width * h, _.height * h);
    });
  }, t;
}(de);
const Ro = A1;
var Bf = 1e5, or = 314159, En = 0.01, O1 = 1e-3;
function N1(r) {
  return r ? r.__builtin__ ? !0 : !(typeof r.resize != "function" || typeof r.refresh != "function") : !1;
}
function B1(r, t) {
  var e = document.createElement("div");
  return e.style.cssText = [
    "position:relative",
    "width:" + r + "px",
    "height:" + t + "px",
    "padding:0",
    "margin:0",
    "border-width:0"
  ].join(";") + ";", e;
}
var k1 = function() {
  function r(t, e, i, n) {
    this.type = "canvas", this._zlevelList = [], this._prevDisplayList = [], this._layers = {}, this._layerConfig = {}, this._needsManuallyCompositing = !1, this.type = "canvas";
    var a = !t.nodeName || t.nodeName.toUpperCase() === "CANVAS";
    this._opts = i = N({}, i || {}), this.dpr = i.devicePixelRatio || $n, this._singleCanvas = a, this.root = t;
    var o = t.style;
    o && (qf(t), t.innerHTML = ""), this.storage = e;
    var s = this._zlevelList;
    this._prevDisplayList = [];
    var u = this._layers;
    if (a) {
      var f = t, h = f.width, c = f.height;
      i.width != null && (h = i.width), i.height != null && (c = i.height), this.dpr = i.devicePixelRatio || 1, f.width = h * this.dpr, f.height = c * this.dpr, this._width = h, this._height = c;
      var v = new Ro(f, this, this.dpr);
      v.__builtin__ = !0, v.initContext(), u[or] = v, v.zlevel = or, s.push(or), this._domRoot = t;
    } else {
      this._width = mn(t, 0, i), this._height = mn(t, 1, i);
      var l = this._domRoot = B1(this._width, this._height);
      t.appendChild(l);
    }
  }
  return r.prototype.getType = function() {
    return "canvas";
  }, r.prototype.isSingleCanvas = function() {
    return this._singleCanvas;
  }, r.prototype.getViewportRoot = function() {
    return this._domRoot;
  }, r.prototype.getViewportRootOffset = function() {
    var t = this.getViewportRoot();
    if (t)
      return {
        offsetLeft: t.offsetLeft || 0,
        offsetTop: t.offsetTop || 0
      };
  }, r.prototype.refresh = function(t) {
    var e = this.storage.getDisplayList(!0), i = this._prevDisplayList, n = this._zlevelList;
    this._redrawId = Math.random(), this._paintList(e, i, t, this._redrawId);
    for (var a = 0; a < n.length; a++) {
      var o = n[a], s = this._layers[o];
      if (!s.__builtin__ && s.refresh) {
        var u = a === 0 ? this._backgroundColor : null;
        s.refresh(u);
      }
    }
    return this._opts.useDirtyRect && (this._prevDisplayList = e.slice()), this;
  }, r.prototype.refreshHover = function() {
    this._paintHoverList(this.storage.getDisplayList(!1));
  }, r.prototype._paintHoverList = function(t) {
    var e = t.length, i = this._hoverlayer;
    if (i && i.clear(), !!e) {
      for (var n = {
        inHover: !0,
        viewWidth: this._width,
        viewHeight: this._height
      }, a, o = 0; o < e; o++) {
        var s = t[o];
        s.__inHover && (i || (i = this._hoverlayer = this.getLayer(Bf)), a || (a = i.ctx, a.save()), hr(a, s, n, o === e - 1));
      }
      a && a.restore();
    }
  }, r.prototype.getHoverLayer = function() {
    return this.getLayer(Bf);
  }, r.prototype.paintOne = function(t, e) {
    Hv(t, e);
  }, r.prototype._paintList = function(t, e, i, n) {
    if (this._redrawId === n) {
      i = i || !1, this._updateLayerStatus(t);
      var a = this._doPaintList(t, e, i), o = a.finished, s = a.needsRefreshHover;
      if (this._needsManuallyCompositing && this._compositeManually(), s && this._paintHoverList(t), o)
        this.eachLayer(function(l) {
          l.afterBrush && l.afterBrush();
        });
      else {
        var u = this;
        Ho(function() {
          u._paintList(t, e, i, n);
        });
      }
    }
  }, r.prototype._compositeManually = function() {
    var t = this.getLayer(or).ctx, e = this._domRoot.width, i = this._domRoot.height;
    t.clearRect(0, 0, e, i), this.eachBuiltinLayer(function(n) {
      n.virtual && t.drawImage(n.dom, 0, 0, e, i);
    });
  }, r.prototype._doPaintList = function(t, e, i) {
    for (var n = this, a = [], o = this._opts.useDirtyRect, s = 0; s < this._zlevelList.length; s++) {
      var u = this._zlevelList[s], l = this._layers[u];
      l.__builtin__ && l !== this._hoverlayer && (l.__dirty || i) && a.push(l);
    }
    for (var f = !0, h = !1, c = function(_) {
      var p = a[_], g = p.ctx, y = o && p.createRepaintRects(t, e, v._width, v._height), m = i ? p.__startIndex : p.__drawIndex, w = !i && p.incremental && Date.now, T = w && Date.now(), S = p.zlevel === v._zlevelList[0] ? v._backgroundColor : null;
      if (p.__startIndex === p.__endIndex)
        p.clear(!1, S, y);
      else if (m === p.__startIndex) {
        var D = t[m];
        (!D.incremental || !D.notClear || i) && p.clear(!1, S, y);
      }
      m === -1 && (console.error("For some unknown reason. drawIndex is -1"), m = p.__startIndex);
      var C, b = function(x) {
        var R = {
          inHover: !1,
          allClipped: !1,
          prevEl: null,
          viewWidth: n._width,
          viewHeight: n._height
        };
        for (C = m; C < p.__endIndex; C++) {
          var O = t[C];
          if (O.__inHover && (h = !0), n._doPaintEl(O, p, o, x, R, C === p.__endIndex - 1), w) {
            var I = Date.now() - T;
            if (I > 15)
              break;
          }
        }
        R.prevElClipPaths && g.restore();
      };
      if (y)
        if (y.length === 0)
          C = p.__endIndex;
        else
          for (var M = v.dpr, E = 0; E < y.length; ++E) {
            var P = y[E];
            g.save(), g.beginPath(), g.rect(P.x * M, P.y * M, P.width * M, P.height * M), g.clip(), b(P), g.restore();
          }
      else
        g.save(), b(), g.restore();
      p.__drawIndex = C, p.__drawIndex < p.__endIndex && (f = !1);
    }, v = this, d = 0; d < a.length; d++)
      c(d);
    return rt.wxa && L(this._layers, function(_) {
      _ && _.ctx && _.ctx.draw && _.ctx.draw();
    }), {
      finished: f,
      needsRefreshHover: h
    };
  }, r.prototype._doPaintEl = function(t, e, i, n, a, o) {
    var s = e.ctx;
    if (i) {
      var u = t.getPaintRect();
      (!n || u && u.intersect(n)) && (hr(s, t, a, o), t.setPrevPaintRect(u));
    } else
      hr(s, t, a, o);
  }, r.prototype.getLayer = function(t, e) {
    this._singleCanvas && !this._needsManuallyCompositing && (t = or);
    var i = this._layers[t];
    return i || (i = new Ro("zr_" + t, this, this.dpr), i.zlevel = t, i.__builtin__ = !0, this._layerConfig[t] ? ft(i, this._layerConfig[t], !0) : this._layerConfig[t - En] && ft(i, this._layerConfig[t - En], !0), e && (i.virtual = e), this.insertLayer(t, i), i.initContext()), i;
  }, r.prototype.insertLayer = function(t, e) {
    var i = this._layers, n = this._zlevelList, a = n.length, o = this._domRoot, s = null, u = -1;
    if (i[t]) {
      process.env.NODE_ENV !== "production" && cr("ZLevel " + t + " has been used already");
      return;
    }
    if (!N1(e)) {
      process.env.NODE_ENV !== "production" && cr("Layer of zlevel " + t + " is not valid");
      return;
    }
    if (a > 0 && t > n[0]) {
      for (u = 0; u < a - 1 && !(n[u] < t && n[u + 1] > t); u++)
        ;
      s = i[n[u]];
    }
    if (n.splice(u + 1, 0, t), i[t] = e, !e.virtual)
      if (s) {
        var l = s.dom;
        l.nextSibling ? o.insertBefore(e.dom, l.nextSibling) : o.appendChild(e.dom);
      } else
        o.firstChild ? o.insertBefore(e.dom, o.firstChild) : o.appendChild(e.dom);
    e.__painter = this;
  }, r.prototype.eachLayer = function(t, e) {
    for (var i = this._zlevelList, n = 0; n < i.length; n++) {
      var a = i[n];
      t.call(e, this._layers[a], a);
    }
  }, r.prototype.eachBuiltinLayer = function(t, e) {
    for (var i = this._zlevelList, n = 0; n < i.length; n++) {
      var a = i[n], o = this._layers[a];
      o.__builtin__ && t.call(e, o, a);
    }
  }, r.prototype.eachOtherLayer = function(t, e) {
    for (var i = this._zlevelList, n = 0; n < i.length; n++) {
      var a = i[n], o = this._layers[a];
      o.__builtin__ || t.call(e, o, a);
    }
  }, r.prototype.getLayers = function() {
    return this._layers;
  }, r.prototype._updateLayerStatus = function(t) {
    this.eachBuiltinLayer(function(h, c) {
      h.__dirty = h.__used = !1;
    });
    function e(h) {
      a && (a.__endIndex !== h && (a.__dirty = !0), a.__endIndex = h);
    }
    if (this._singleCanvas)
      for (var i = 1; i < t.length; i++) {
        var n = t[i];
        if (n.zlevel !== t[i - 1].zlevel || n.incremental) {
          this._needsManuallyCompositing = !0;
          break;
        }
      }
    var a = null, o = 0, s, u;
    for (u = 0; u < t.length; u++) {
      var n = t[u], l = n.zlevel, f = void 0;
      s !== l && (s = l, o = 0), n.incremental ? (f = this.getLayer(l + O1, this._needsManuallyCompositing), f.incremental = !0, o = 1) : f = this.getLayer(l + (o > 0 ? En : 0), this._needsManuallyCompositing), f.__builtin__ || cr("ZLevel " + l + " has been used by unkown layer " + f.id), f !== a && (f.__used = !0, f.__startIndex !== u && (f.__dirty = !0), f.__startIndex = u, f.incremental ? f.__drawIndex = -1 : f.__drawIndex = u, e(u), a = f), n.__dirty & Ut && !n.__inHover && (f.__dirty = !0, f.incremental && f.__drawIndex < 0 && (f.__drawIndex = u));
    }
    e(u), this.eachBuiltinLayer(function(h, c) {
      !h.__used && h.getElementCount() > 0 && (h.__dirty = !0, h.__startIndex = h.__endIndex = h.__drawIndex = 0), h.__dirty && h.__drawIndex < 0 && (h.__drawIndex = h.__startIndex);
    });
  }, r.prototype.clear = function() {
    return this.eachBuiltinLayer(this._clearLayer), this;
  }, r.prototype._clearLayer = function(t) {
    t.clear();
  }, r.prototype.setBackgroundColor = function(t) {
    this._backgroundColor = t, L(this._layers, function(e) {
      e.setUnpainted();
    });
  }, r.prototype.configLayer = function(t, e) {
    if (e) {
      var i = this._layerConfig;
      i[t] ? ft(i[t], e, !0) : i[t] = e;
      for (var n = 0; n < this._zlevelList.length; n++) {
        var a = this._zlevelList[n];
        if (a === t || a === t + En) {
          var o = this._layers[a];
          ft(o, i[t], !0);
        }
      }
    }
  }, r.prototype.delLayer = function(t) {
    var e = this._layers, i = this._zlevelList, n = e[t];
    n && (n.dom.parentNode.removeChild(n.dom), delete e[t], i.splice(nt(i, t), 1));
  }, r.prototype.resize = function(t, e) {
    if (this._domRoot.style) {
      var i = this._domRoot;
      i.style.display = "none";
      var n = this._opts, a = this.root;
      if (t != null && (n.width = t), e != null && (n.height = e), t = mn(a, 0, n), e = mn(a, 1, n), i.style.display = "", this._width !== t || e !== this._height) {
        i.style.width = t + "px", i.style.height = e + "px";
        for (var o in this._layers)
          this._layers.hasOwnProperty(o) && this._layers[o].resize(t, e);
        this.refresh(!0);
      }
      this._width = t, this._height = e;
    } else {
      if (t == null || e == null)
        return;
      this._width = t, this._height = e, this.getLayer(or).resize(t, e);
    }
    return this;
  }, r.prototype.clearLayer = function(t) {
    var e = this._layers[t];
    e && e.clear();
  }, r.prototype.dispose = function() {
    this.root.innerHTML = "", this.root = this.storage = this._domRoot = this._layers = null;
  }, r.prototype.getRenderedCanvas = function(t) {
    if (t = t || {}, this._singleCanvas && !this._compositeManually)
      return this._layers[or].dom;
    var e = new Ro("image", this, t.pixelRatio || this.dpr);
    e.initContext(), e.clear(!1, t.backgroundColor || this._backgroundColor);
    var i = e.ctx;
    if (t.pixelRatio <= this.dpr) {
      this.refresh();
      var n = e.dom.width, a = e.dom.height;
      this.eachLayer(function(h) {
        h.__builtin__ ? i.drawImage(h.dom, 0, 0, n, a) : h.renderToCanvas && (i.save(), h.renderToCanvas(i), i.restore());
      });
    } else
      for (var o = {
        inHover: !1,
        viewWidth: this._width,
        viewHeight: this._height
      }, s = this.storage.getDisplayList(!0), u = 0, l = s.length; u < l; u++) {
        var f = s[u];
        hr(i, f, o, u === l - 1);
      }
    return e.dom;
  }, r.prototype.getWidth = function() {
    return this._width;
  }, r.prototype.getHeight = function() {
    return this._height;
  }, r;
}();
const F1 = k1;
function V1(r) {
  r.registerPainter("canvas", F1);
}
var z1 = (
  /** @class */
  function(r) {
    j(t, r);
    function t() {
      var e = r !== null && r.apply(this, arguments) || this;
      return e.type = "dataset", e;
    }
    return t.prototype.init = function(e, i, n) {
      r.prototype.init.call(this, e, i, n), this._sourceManager = new xv(this), Xl(this);
    }, t.prototype.mergeOption = function(e, i) {
      r.prototype.mergeOption.call(this, e, i), Xl(this);
    }, t.prototype.optionUpdated = function() {
      this._sourceManager.dirty();
    }, t.prototype.getSourceManager = function() {
      return this._sourceManager;
    }, t.type = "dataset", t.defaultOption = {
      seriesLayoutBy: ve
    }, t;
  }(st)
), H1 = (
  /** @class */
  function(r) {
    j(t, r);
    function t() {
      var e = r !== null && r.apply(this, arguments) || this;
      return e.type = "dataset", e;
    }
    return t.type = "dataset", t;
  }(ea)
);
function U1(r) {
  r.registerComponentModel(z1), r.registerComponentView(H1);
}
nu([V1, U1]);
nu(I1);
v1({
  type: "series.liquidFill",
  optionUpdated: function() {
    var r = this.option;
    r.gridSize = Math.max(Math.floor(r.gridSize), 4);
  },
  getInitialData: function(r, t) {
    var e = a1(r.data, {
      coordDimensions: ["value"]
    }), i = new n1(e, this);
    return i.initData(r.data), i;
  },
  defaultOption: {
    color: ["#294D99", "#156ACF", "#1598ED", "#45BDFF"],
    center: ["50%", "50%"],
    radius: "50%",
    amplitude: "8%",
    waveLength: "80%",
    phase: "auto",
    period: "auto",
    direction: "right",
    shape: "circle",
    waveAnimation: !0,
    animationEasing: "linear",
    animationEasingUpdate: "linear",
    animationDuration: 2e3,
    animationDurationUpdate: 1e3,
    outline: {
      show: !0,
      borderDistance: 8,
      itemStyle: {
        color: "none",
        borderColor: "#294D99",
        borderWidth: 8,
        shadowBlur: 20,
        shadowColor: "rgba(0, 0, 0, 0.25)"
      }
    },
    backgroundStyle: {
      color: "#E3F7FF"
    },
    itemStyle: {
      opacity: 0.95,
      shadowBlur: 50,
      shadowColor: "rgba(0, 0, 0, 0.4)"
    },
    label: {
      show: !0,
      color: "#294D99",
      insideColor: "#fff",
      fontSize: 50,
      fontWeight: "bold",
      align: "center",
      baseline: "middle",
      position: "inside"
    },
    emphasis: {
      itemStyle: {
        opacity: 0.8
      }
    }
  }
});
const Y1 = L_({
  type: "ec-liquid-fill",
  shape: {
    waveLength: 0,
    radius: 0,
    radiusY: 0,
    cx: 0,
    cy: 0,
    waterLevel: 0,
    amplitude: 0,
    phase: 0,
    inverse: !1
  },
  buildPath: function(r, t) {
    t.radiusY == null && (t.radiusY = t.radius);
    for (var e = Math.max(
      Math.ceil(2 * t.radius / t.waveLength * 4) * 2,
      8
    ); t.phase < -Math.PI * 2; )
      t.phase += Math.PI * 2;
    for (; t.phase > 0; )
      t.phase -= Math.PI * 2;
    var i = t.phase / Math.PI / 2 * t.waveLength, n = t.cx - t.radius + i - t.radius * 2;
    r.moveTo(n, t.waterLevel);
    for (var a = 0, o = 0; o < e; ++o) {
      var s = o % 4, u = G1(
        o * t.waveLength / 4,
        s,
        t.waveLength,
        t.amplitude
      );
      r.bezierCurveTo(
        u[0][0] + n,
        -u[0][1] + t.waterLevel,
        u[1][0] + n,
        -u[1][1] + t.waterLevel,
        u[2][0] + n,
        -u[2][1] + t.waterLevel
      ), o === e - 1 && (a = u[2][0]);
    }
    t.inverse ? (r.lineTo(a + n, t.cy - t.radiusY), r.lineTo(n, t.cy - t.radiusY), r.lineTo(n, t.waterLevel)) : (r.lineTo(a + n, t.cy + t.radiusY), r.lineTo(n, t.cy + t.radiusY), r.lineTo(n, t.waterLevel)), r.closePath();
  }
});
function G1(r, t, e, i) {
  return t === 0 ? [
    [r + 1 / 2 * e / Math.PI / 2, i / 2],
    [r + 1 / 2 * e / Math.PI, i],
    [r + e / 4, i]
  ] : t === 1 ? [
    [
      r + 1 / 2 * e / Math.PI / 2 * (Math.PI - 2),
      i
    ],
    [
      r + 1 / 2 * e / Math.PI / 2 * (Math.PI - 1),
      i / 2
    ],
    [r + e / 4, 0]
  ] : t === 2 ? [
    [r + 1 / 2 * e / Math.PI / 2, -i / 2],
    [r + 1 / 2 * e / Math.PI, -i],
    [r + e / 4, -i]
  ] : [
    [
      r + 1 / 2 * e / Math.PI / 2 * (Math.PI - 2),
      -i
    ],
    [
      r + 1 / 2 * e / Math.PI / 2 * (Math.PI - 1),
      -i / 2
    ],
    [r + e / 4, 0]
  ];
}
var we = Qo;
function kf(r) {
  return r && r.indexOf("path://") === 0;
}
c1({
  type: "liquidFill",
  render: function(r, t, e) {
    var i = this, n = this.group;
    n.removeAll();
    var a = r.getData(), o = a.getItemModel(0), s = o.get("center"), u = o.get("radius"), l = e.getWidth(), f = e.getHeight(), h = Math.min(l, f), c = 0, v = 0, d = r.get("outline.show");
    d && (c = r.get("outline.borderDistance"), v = we(
      r.get("outline.itemStyle.borderWidth"),
      h
    ));
    var _ = we(s[0], l), p = we(s[1], f), g, y, m, w = !1, T = r.get("shape");
    if (T === "container" ? (w = !0, g = [
      l / 2,
      f / 2
    ], y = [
      g[0] - v / 2,
      g[1] - v / 2
    ], m = [
      we(c, l),
      we(c, f)
    ], u = [
      Math.max(y[0] - m[0], 0),
      Math.max(y[1] - m[1], 0)
    ]) : (g = we(u, h) / 2, y = g - v / 2, m = we(c, h), u = Math.max(y - m, 0)), d) {
      var S = x();
      S.style.lineWidth = v, n.add(x());
    }
    var D = w ? 0 : _ - u, C = w ? 0 : p - u, b = null;
    n.add(R());
    var M = this._data, E = [];
    a.diff(M).add(function(A) {
      var B = O(A, !1), k = B.shape.waterLevel;
      B.shape.waterLevel = w ? f / 2 : u, qn(B, {
        shape: {
          waterLevel: k
        }
      }, r), B.z2 = 2, I(A, B, null), n.add(B), a.setItemGraphicEl(A, B), E.push(B);
    }).update(function(A, B) {
      for (var k = M.getItemGraphicEl(B), G = O(A, !1, k), z = {}, H = ["amplitude", "cx", "cy", "phase", "radius", "radiusY", "waterLevel", "waveLength"], tt = 0; tt < H.length; ++tt) {
        var Q = H[tt];
        G.shape.hasOwnProperty(Q) && (z[Q] = G.shape[Q]);
      }
      for (var vt = {}, at = ["fill", "opacity", "shadowBlur", "shadowColor"], tt = 0; tt < at.length; ++tt) {
        var Q = at[tt];
        G.style.hasOwnProperty(Q) && (vt[Q] = G.style[Q]);
      }
      w && (z.radiusY = f / 2), Wr(k, {
        shape: z,
        x: G.x,
        y: G.y
      }, r), r.isUniversalTransitionEnabled && r.isUniversalTransitionEnabled() ? Wr(k, {
        style: vt
      }, r) : k.useStyle(vt);
      var ct = k.getClipPath(), xt = G.getClipPath();
      k.setClipPath(G.getClipPath()), k.shape.inverse = G.inverse, ct && xt && i._shape === T && !kf(T) && Wr(xt, {
        shape: ct.shape
      }, r, { isFrom: !0 }), I(A, k, k), n.add(k), a.setItemGraphicEl(A, k), E.push(k);
    }).remove(function(A) {
      var B = M.getItemGraphicEl(A);
      n.remove(B);
    }).execute(), o.get("label.show") && n.add(X(E)), this._shape = T, this._data = a;
    function P(A, B) {
      if (T)
        if (kf(T)) {
          var k = hs(T.slice(7), {}), G = k.getBoundingRect(), z = G.width, H = G.height;
          z > H ? (H = A * 2 / z * H, z = A * 2) : (z = A * 2 / H * z, H = A * 2);
          var tt = B ? 0 : _ - z / 2, Q = B ? 0 : p - H / 2;
          return k = hs(
            T.slice(7),
            {},
            new et(tt, Q, z, H)
          ), B && (k.x = -z / 2, k.y = -H / 2), k;
        } else if (w) {
          var vt = B ? -A[0] : _ - A[0], at = B ? -A[1] : p - A[1];
          return ms(
            "rect",
            vt,
            at,
            A[0] * 2,
            A[1] * 2
          );
        } else {
          var vt = B ? -A : _ - A, at = B ? -A : p - A;
          return T === "pin" ? at += A : T === "arrow" && (at -= A), ms(T, vt, at, A * 2, A * 2);
        }
      return new Jh({
        shape: {
          cx: B ? 0 : _,
          cy: B ? 0 : p,
          r: A
        }
      });
    }
    function x() {
      var A = P(g);
      return A.style.fill = null, A.setStyle(r.getModel("outline.itemStyle").getItemStyle()), A;
    }
    function R() {
      var A = P(u);
      A.setStyle(r.getModel("backgroundStyle").getItemStyle()), A.style.fill = null, A.z2 = 5;
      var B = P(u);
      B.setStyle(r.getModel("backgroundStyle").getItemStyle()), B.style.stroke = null;
      var k = new $r();
      return k.add(A), k.add(B), k;
    }
    function O(A, B, k) {
      var G = w ? u[0] : u, z = w ? f / 2 : u, H = a.getItemModel(A), tt = H.getModel("itemStyle"), Q = H.get("phase"), vt = we(
        H.get("amplitude"),
        z * 2
      ), at = we(
        H.get("waveLength"),
        G * 2
      ), ct = a.get("value", A), xt = z - ct * z * 2;
      Q = k ? k.shape.phase : Q === "auto" ? A * Math.PI / 4 : Q;
      var dt = tt.getItemStyle();
      if (!dt.fill) {
        var ne = r.get("color"), kt = A % ne.length;
        dt.fill = ne[kt];
      }
      var _e = G * 2, ot = new Y1({
        shape: {
          waveLength: at,
          radius: G,
          radiusY: z,
          cx: _e,
          cy: 0,
          waterLevel: xt,
          amplitude: vt,
          phase: Q,
          inverse: B
        },
        style: dt,
        x: _,
        y: p
      });
      ot.shape._waterLevel = xt;
      var ai = H.getModel("emphasis.itemStyle").getItemStyle();
      ai.lineWidth = 0, ot.ensureState("emphasis").style = ai, jg(ot);
      var oi = P(u, !0);
      return oi.setStyle({
        fill: "white"
      }), ot.setClipPath(oi), ot;
    }
    function I(A, B, k) {
      var G = a.getItemModel(A), z = G.get("period"), H = G.get("direction"), tt = a.get("value", A), Q = G.get("phase");
      Q = k ? k.shape.phase : Q === "auto" ? A * Math.PI / 4 : Q;
      var vt = function(xt) {
        var dt = a.count();
        return dt === 0 ? xt : xt * (0.2 + (dt - A) / dt * 0.8);
      }, at = 0;
      z === "auto" ? at = vt(5e3) : at = typeof z == "function" ? z(tt, A) : z;
      var ct = 0;
      H === "right" || H == null ? ct = Math.PI : H === "left" ? ct = -Math.PI : H === "none" ? ct = 0 : console.error("Illegal direction value for liquid fill."), H !== "none" && G.get("waveAnimation") && B.animate("shape", !0).when(0, {
        phase: Q
      }).when(at / 2, {
        phase: ct + Q
      }).when(at, {
        phase: ct * 2 + Q
      }).during(function() {
        b && b.dirty(!0);
      }).start();
    }
    function X(A) {
      var B = o.getModel("label");
      function k() {
        var dt = r.getFormattedLabel(0, "normal"), ne = a.get("value", 0) * 100, kt = a.getName(0) || r.name;
        return isNaN(ne) || (kt = ne.toFixed(0) + "%"), dt ?? kt;
      }
      var G = {
        z2: 10,
        shape: {
          x: D,
          y: C,
          width: (w ? u[0] : u) * 2,
          height: (w ? u[1] : u) * 2
        },
        style: {
          fill: "transparent"
        },
        textConfig: {
          position: B.get("position") || "inside"
        },
        silent: !0
      }, z = {
        style: {
          text: k(),
          textAlign: B.get("align"),
          textVerticalAlign: B.get("baseline")
        }
      };
      Object.assign(z.style, f1(B));
      var H = new Ce(G), tt = new Ce(G);
      tt.disableLabelAnimation = !0, H.disableLabelAnimation = !0;
      var Q = new Xn(z), vt = new Xn(z);
      H.setTextContent(Q), tt.setTextContent(vt);
      var at = B.get("insideColor");
      vt.style.fill = at;
      var ct = new $r();
      ct.add(H), ct.add(tt);
      var xt = P(u, !0);
      return b = new b_({
        shape: {
          paths: A
        },
        x: _,
        y: p
      }), b.setClipPath(xt), tt.setClipPath(b), ct;
    }
  },
  dispose: function() {
  }
});
const W1 = { class: "fz-echarts" }, $1 = Qr({
  name: "FzECharts"
}), X1 = /* @__PURE__ */ Qr({
  ...$1,
  props: {
    option: {}
  },
  emits: ["reload", "getEcharts"],
  setup(r, { emit: t }) {
    const e = r, i = hc(null);
    let n;
    const a = () => {
      n.clear(), e.option && (n.setOption(e.option), t("getEcharts", n));
    }, o = () => {
      !e.option || !i.value || (n && !n.isDisposed() && n.dispose(), n = cc(i.value), a());
    };
    return Ai(
      () => e.option,
      () => {
        Mi(() => {
          o();
        });
      },
      { immediate: !0 }
    ), window.addEventListener(
      "resize",
      Oo(() => {
        t("reload"), n.resize();
      }, 200)
    ), Es(() => {
      n.dispose(), window.removeEventListener(
        "resize",
        Oo(() => {
          t("reload"), n.resize();
        }, 200)
      );
    }), (s, u) => (ur(), lr("div", W1, [
      Ao(
        "div",
        {
          ref_key: "echartsRef",
          ref: i,
          class: "fz-echarts-main"
        },
        null,
        512
        /* NEED_PATCH */
      )
    ]));
  }
});
const fc = (r, t) => {
  const e = r.__vccOpts || r;
  for (const [i, n] of t)
    e[i] = n;
  return e;
}, q1 = /* @__PURE__ */ fc(X1, [["__scopeId", "data-v-5f561d80"]]), Z1 = Ms(q1), K1 = { class: "fz-scroll-box__list-item-info" }, Q1 = Qr({
  name: "FzScroll"
}), J1 = /* @__PURE__ */ Qr({
  ...Q1,
  props: {
    modelValue: { type: Boolean, default: !0 },
    list: {},
    wheel: { type: Boolean, default: !0 },
    hover: { type: Boolean, default: !0 },
    delay: { default: 0 },
    waitTime: { default: 0 },
    step: { default: 800 }
  },
  emits: ["update:modelValue"],
  setup(r) {
    const t = r, e = Dt(null), i = Dt(null), n = Dt([]), a = Dt([]), o = Io(() => t.list.length), s = Dt(!1);
    let u = null, l = null, f;
    ((x) => {
      x[x.UP = 1] = "UP", x[x.DOWN = -1] = "DOWN";
    })(f || (f = {}));
    const h = () => {
      l && (clearTimeout(l), l = null);
    }, c = () => {
      a.value.length >= 2 || (a.value.push(t.list), s.value = !0);
    }, v = () => {
      a.value.splice(1, a.value.length), s.value = !1;
    }, d = Oo(() => {
      i.value && (u == null || u.observe(i.value));
    }, 200);
    Vf(() => {
      c(), Mi(() => {
        var x;
        e.value && (u = new IntersectionObserver(
          (R, O) => {
            R.forEach(({ intersectionRatio: I, target: X }) => {
              if (X.dataset.type === "box") {
                I >= 0.5 && v(), O.unobserve(X);
                return;
              }
              if (I > 0 && I < 1 && a.value.length < 2) {
                c();
                return;
              }
              I === 1 && v();
            });
          },
          {
            threshold: 1,
            root: e.value
          }
        ), n.value[0] && u.observe(n.value[0]), window.addEventListener("resize", d), (x = i.value) == null || x.addEventListener("transitionend", T));
      });
    }), Es(() => {
      var x;
      n.value[0] && (u == null || u.unobserve(n.value[0])), window.removeEventListener("resize", d), h(), g(), (x = i.value) == null || x.removeEventListener("transitionend", T);
    });
    const _ = Io(() => i.value ? i.value.animate(
      [
        {
          transform: "translateY(0)"
        },
        {
          transform: "translateY(-50%)"
        }
      ],
      {
        iterations: 1 / 0,
        easing: "linear ",
        duration: o.value * t.step,
        delay: t.delay
      }
    ) : null);
    let p = null;
    const g = () => {
      p && (clearTimeout(p), p = null);
    }, y = () => {
      const x = [];
      if (!n.value[0])
        return x;
      const R = n.value[0].children.length;
      for (let O = 0; O < R; O++)
        x.push(
          n.value[0].children[O].offsetTop
        );
      return n.value[1] && x.push(n.value[1].offsetTop), x;
    }, m = Dt(-1), w = () => y()[m.value], T = () => {
      i.value && m.value >= y().length - 1 && (m.value = 0, i.value.style.transition = "none", i.value.style.transform = "translateY(0px)");
    }, S = (x = -1, R = !0) => {
      if (!i.value)
        return;
      m.value -= x;
      const I = w() * -1;
      if (i.value.style.transition = R ? `transform ${t.step}ms linear` : "none", i.value.style.transform = `translateY(${I}px)`, !R) {
        const X = y().length;
        m.value >= X - 1 && (m.value = 0, i.value.style.transform = "translateY(0px)"), m.value < 0 && (m.value = X - 1, S(x, R));
      }
    }, D = (x) => {
      x.deltaY && S(x.deltaY > 0 ? -1 : 1, !1);
    }, C = (x = -1) => {
      S(x), g(), p = setTimeout(() => {
        C(x);
      }, t.waitTime);
    }, b = () => {
      t.modelValue && Mi(() => {
        h(), l = setTimeout(() => {
          var x;
          if (t.waitTime <= 0) {
            (x = _.value) == null || x.play();
            return;
          }
          C();
        }, t.delay);
      });
    }, M = () => {
      i.value && (g(), h(), i.value.style.transition = "none", i.value.style.transform = "translateY(0px)", m.value = -1);
    }, E = () => {
      h(), Mi(() => {
        var x;
        g(), (x = _.value) == null || x.cancel();
      });
    }, P = () => {
      Mi(() => {
        var x;
        if (t.waitTime <= 0) {
          (x = _.value) == null || x.pause();
          return;
        }
        g();
      });
    };
    return Ai(
      a,
      (x) => {
        if (M(), x.length >= 2) {
          b();
          return;
        }
        E();
      },
      { deep: !0 }
    ), Ai(
      () => t.modelValue,
      (x) => {
        if (x) {
          b();
          return;
        }
        P();
      }
    ), Ai(
      () => t.list,
      () => {
        a.value = [], c();
      },
      { deep: !0 }
    ), (x, R) => (ur(), lr(
      "div",
      {
        ref_key: "scrollRef",
        ref: e,
        class: "fz-scroll",
        onWheel: R[0] || (R[0] = (O) => x.wheel && x.hover && s.value && D(O)),
        onMouseover: R[1] || (R[1] = (O) => x.hover && s.value && P()),
        onMouseleave: R[2] || (R[2] = (O) => x.hover && s.value && b())
      },
      [
        Ao(
          "div",
          {
            ref_key: "scrollBoxRef",
            ref: i,
            "data-type": "box",
            class: "fz-scroll-box"
          },
          [
            (ur(!0), lr(
              au,
              null,
              ou(a.value, (O, I) => (ur(), lr("div", {
                ref_for: !0,
                ref_key: "scrollListRefs",
                ref: n,
                key: I,
                "data-type": "list",
                class: "fz-scroll-box__list"
              }, [
                (ur(!0), lr(
                  au,
                  null,
                  ou(O, (X, A) => (ur(), lr("div", {
                    key: A,
                    class: "fz-scroll-box__list-item"
                  }, [
                    vc(x.$slots, "default", {
                      index: A,
                      data: X
                    }, () => [
                      Ao(
                        "div",
                        K1,
                        zf(X),
                        1
                        /* TEXT */
                      )
                    ], !0)
                  ]))),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ]))),
              128
              /* KEYED_FRAGMENT */
            ))
          ],
          512
          /* NEED_PATCH */
        )
      ],
      544
      /* HYDRATE_EVENTS, NEED_PATCH */
    ));
  }
});
const j1 = /* @__PURE__ */ fc(J1, [["__scopeId", "data-v-f4bfdcc8"]]), tw = Ms(j1), ew = [gc, Z1, tw], Ff = Symbol("INSTALLED_KEY"), rw = (r = []) => ({
  install: (e) => {
    e[Ff] || (e[Ff] = !0, r.forEach((i) => {
      e.use(i);
    }));
  }
}), iw = rw([...ew]), ow = iw.install;
export {
  gc as FzCountTo,
  Z1 as FzECharts,
  tw as FzScroll,
  iw as default,
  ow as install
};
