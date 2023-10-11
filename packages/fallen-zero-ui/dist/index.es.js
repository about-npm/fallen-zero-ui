import { defineComponent as na, ref as _e, computed as ic, watch as Pf, onMounted as nc, onBeforeUnmount as xf, openBlock as Rf, createElementBlock as If, toDisplayString as ac, shallowRef as oc, nextTick as sc, createElementVNode as uc } from "vue";
import { init as lc } from "echarts";
const Af = (r, t) => {
  if (r.install = (e) => {
    for (const i of [r, ...Object.values(t ?? {})])
      e.component(i.name, i);
  }, t)
    for (const [e, i] of Object.entries(t))
      r[e] = i;
  return r;
};
function Ks(r, t) {
  let e;
  return (...i) => {
    e && clearTimeout(e), e = setTimeout(() => {
      r(...i);
    }, t);
  };
}
const fc = na({
  name: "FzCountTo"
}), hc = /* @__PURE__ */ na({
  ...fc,
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
    }, o = _e(i.startVal), s = _e(a(i.startVal)), u = _e(null), l = _e(!1), f = _e(i.duration), h = _e(null), c = _e(null), v = _e(null), d = _e(null), _ = ic(() => i.startVal > i.endVal), p = (S) => {
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
    return Pf(
      () => [i.startVal, i.endVal],
      () => {
        i.autoplay && g();
      }
    ), nc(() => {
      i.autoplay && g(), e("mountedCallback");
    }), xf(() => {
      d.value !== null && cancelAnimationFrame(d.value);
    }), t({ pauseResume: w, pause: m, reset: T, resume: y, start: g }), (S, D) => (Rf(), If(
      "span",
      null,
      ac(s.value),
      1
      /* TEXT */
    ));
  }
}), vc = Af(hc);
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
var Lo = function(r, t) {
  return Lo = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, i) {
    e.__proto__ = i;
  } || function(e, i) {
    for (var n in i)
      Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n]);
  }, Lo(r, t);
};
function J(r, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
  Lo(r, t);
  function e() {
    this.constructor = r;
  }
  r.prototype = t === null ? Object.create(t) : (e.prototype = t.prototype, new e());
}
var cc = function() {
  function r() {
    this.firefox = !1, this.ie = !1, this.edge = !1, this.newEdge = !1, this.weChat = !1;
  }
  return r;
}(), dc = function() {
  function r() {
    this.browser = new cc(), this.node = !1, this.wxa = !1, this.worker = !1, this.svgSupported = !1, this.touchEventsSupported = !1, this.pointerEventsSupported = !1, this.domSupported = !1, this.transformSupported = !1, this.transform3dSupported = !1, this.hasGlobalWindow = typeof window < "u";
  }
  return r;
}(), sr = new dc();
typeof wx == "object" && typeof wx.getSystemInfoSync == "function" ? (sr.wxa = !0, sr.touchEventsSupported = !0) : typeof document > "u" && typeof self < "u" ? sr.worker = !0 : typeof navigator > "u" ? (sr.node = !0, sr.svgSupported = !0) : pc(navigator.userAgent, sr);
function pc(r, t) {
  var e = t.browser, i = r.match(/Firefox\/([\d.]+)/), n = r.match(/MSIE\s([\d.]+)/) || r.match(/Trident\/.+?rv:(([\d.]+))/), a = r.match(/Edge?\/([\d.]+)/), o = /micromessenger/i.test(r);
  i && (e.firefox = !0, e.version = i[1]), n && (e.ie = !0, e.version = n[1]), a && (e.edge = !0, e.version = a[1], e.newEdge = +a[1].split(".")[0] > 18), o && (e.weChat = !0), t.svgSupported = typeof SVGRect < "u", t.touchEventsSupported = "ontouchstart" in window && !e.ie && !e.edge, t.pointerEventsSupported = "onpointerdown" in window && (e.edge || e.ie && +e.version >= 11), t.domSupported = typeof document < "u";
  var s = document.documentElement.style;
  t.transform3dSupported = (e.ie && "transition" in s || e.edge || "WebKitCSSMatrix" in window && "m11" in new WebKitCSSMatrix() || "MozPerspective" in s) && !("OTransition" in s), t.transformSupported = t.transform3dSupported || e.ie && +e.version >= 9;
}
const et = sr;
var ms = 12, gc = "sans-serif", pr = ms + "px " + gc, _c = 20, yc = 100, mc = "007LLmW'55;N0500LLLLLLLLLL00NNNLzWW\\\\WQb\\0FWLg\\bWb\\WQ\\WrWWQ000CL5LLFLL0LL**F*gLLLL5F0LF\\FFF5.5N";
function wc(r) {
  var t = {};
  if (typeof JSON > "u")
    return t;
  for (var e = 0; e < r.length; e++) {
    var i = String.fromCharCode(e + 32), n = (r.charCodeAt(e) - _c) / yc;
    t[i] = n;
  }
  return t;
}
var Sc = wc(mc), Zr = {
  createCanvas: function() {
    return typeof document < "u" && document.createElement("canvas");
  },
  measureText: function() {
    var r, t;
    return function(e, i) {
      if (!r) {
        var n = Zr.createCanvas();
        r = n && n.getContext("2d");
      }
      if (r)
        return t !== i && (t = r.font = i || pr), r.measureText(e);
      e = e || "", i = i || pr;
      var a = /(\d+)px/.exec(i), o = a && +a[1] || ms, s = 0;
      if (i.indexOf("mono") >= 0)
        s = o * e.length;
      else
        for (var u = 0; u < e.length; u++) {
          var l = Sc[e[u]];
          s += l == null ? o : l * o;
        }
      return { width: s };
    };
  }(),
  loadImage: function(r, t, e) {
    var i = new Image();
    return i.onload = t, i.onerror = e, i.src = r, i;
  }
}, Of = Qr([
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
}, {}), Nf = Qr([
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
}, {}), Kr = Object.prototype.toString, aa = Array.prototype, Tc = aa.forEach, Dc = aa.filter, ws = aa.slice, Cc = aa.map, Qs = (function() {
}).constructor, Yi = Qs ? Qs.prototype : null, Ss = "__proto__", bc = 2311;
function Bf() {
  return bc++;
}
function hr() {
  for (var r = [], t = 0; t < arguments.length; t++)
    r[t] = arguments[t];
  typeof console < "u" && console.error.apply(console, r);
}
function Z(r) {
  if (r == null || typeof r != "object")
    return r;
  var t = r, e = Kr.call(r);
  if (e === "[object Array]") {
    if (!Pi(r)) {
      t = [];
      for (var i = 0, n = r.length; i < n; i++)
        t[i] = Z(r[i]);
    }
  } else if (Nf[e]) {
    if (!Pi(r)) {
      var a = r.constructor;
      if (a.from)
        t = a.from(r);
      else {
        t = new a(r.length);
        for (var i = 0, n = r.length; i < n; i++)
          t[i] = r[i];
      }
    }
  } else if (!Of[e] && !Pi(r) && !Po(r)) {
    t = {};
    for (var o in r)
      r.hasOwnProperty(o) && o !== Ss && (t[o] = Z(r[o]));
  }
  return t;
}
function ft(r, t, e) {
  if (!F(t) || !F(r))
    return e ? Z(t) : r;
  for (var i in t)
    if (t.hasOwnProperty(i) && i !== Ss) {
      var n = r[i], a = t[i];
      F(a) && F(n) && !G(a) && !G(n) && !Po(a) && !Po(n) && !Js(a) && !Js(n) && !Pi(a) && !Pi(n) ? ft(n, a, e) : (e || !(i in r)) && (r[i] = Z(t[i]));
    }
  return r;
}
function O(r, t) {
  if (Object.assign)
    Object.assign(r, t);
  else
    for (var e in t)
      t.hasOwnProperty(e) && e !== Ss && (r[e] = t[e]);
  return r;
}
function Mt(r, t, e) {
  for (var i = lt(t), n = 0; n < i.length; n++) {
    var a = i[n];
    (e ? t[a] != null : r[a] == null) && (r[a] = t[a]);
  }
  return r;
}
function it(r, t) {
  if (r) {
    if (r.indexOf)
      return r.indexOf(t);
    for (var e = 0, i = r.length; e < i; e++)
      if (r[e] === t)
        return e;
  }
  return -1;
}
function Ec(r, t) {
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
    Mt(r, t, e);
}
function Yt(r) {
  return !r || typeof r == "string" ? !1 : typeof r.length == "number";
}
function L(r, t, e) {
  if (r && t)
    if (r.forEach && r.forEach === Tc)
      r.forEach(t, e);
    else if (r.length === +r.length)
      for (var i = 0, n = r.length; i < n; i++)
        t.call(e, r[i], i, r);
    else
      for (var a in r)
        r.hasOwnProperty(a) && t.call(e, r[a], a, r);
}
function rt(r, t, e) {
  if (!r)
    return [];
  if (!t)
    return Ds(r);
  if (r.map && r.map === Cc)
    return r.map(t, e);
  for (var i = [], n = 0, a = r.length; n < a; n++)
    i.push(t.call(e, r[n], n, r));
  return i;
}
function Qr(r, t, e, i) {
  if (r && t) {
    for (var n = 0, a = r.length; n < a; n++)
      e = t.call(i, e, r[n], n, r);
    return e;
  }
}
function Rt(r, t, e) {
  if (!r)
    return [];
  if (!t)
    return Ds(r);
  if (r.filter && r.filter === Dc)
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
function Mc(r, t) {
  for (var e = [], i = 2; i < arguments.length; i++)
    e[i - 2] = arguments[i];
  return function() {
    return r.apply(t, e.concat(ws.call(arguments)));
  };
}
var It = Yi && Q(Yi.bind) ? Yi.call.bind(Yi.bind) : Mc;
function Ts(r) {
  for (var t = [], e = 1; e < arguments.length; e++)
    t[e - 1] = arguments[e];
  return function() {
    return r.apply(this, t.concat(ws.call(arguments)));
  };
}
function G(r) {
  return Array.isArray ? Array.isArray(r) : Kr.call(r) === "[object Array]";
}
function Q(r) {
  return typeof r == "function";
}
function q(r) {
  return typeof r == "string";
}
function kf(r) {
  return Kr.call(r) === "[object String]";
}
function bt(r) {
  return typeof r == "number";
}
function F(r) {
  var t = typeof r;
  return t === "function" || !!r && t === "object";
}
function Js(r) {
  return !!Of[Kr.call(r)];
}
function Ot(r) {
  return !!Nf[Kr.call(r)];
}
function Po(r) {
  return typeof r == "object" && typeof r.nodeType == "number" && typeof r.ownerDocument == "object";
}
function oa(r) {
  return r.colorStops != null;
}
function Lc(r) {
  return r.image != null;
}
function Pc(r) {
  return Kr.call(r) === "[object RegExp]";
}
function Ff(r) {
  return r !== r;
}
function W(r, t) {
  return r ?? t;
}
function Tn(r, t, e) {
  return r ?? t ?? e;
}
function Ds(r) {
  for (var t = [], e = 1; e < arguments.length; e++)
    t[e - 1] = arguments[e];
  return ws.apply(r, t);
}
function xc(r) {
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
var Vf = "__ec_primitive__";
function Bn(r) {
  r[Vf] = !0;
}
function Pi(r) {
  return r[Vf];
}
var Rc = function() {
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
}(), zf = typeof Map == "function";
function Ic() {
  return zf ? /* @__PURE__ */ new Map() : new Rc();
}
var Ac = function() {
  function r(t) {
    var e = G(t);
    this.data = Ic();
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
    return zf ? Array.from(t) : t;
  }, r.prototype.removeKey = function(t) {
    this.data.delete(t);
  }, r;
}();
function $(r) {
  return new Ac(r);
}
function Oc(r, t) {
  for (var e = new r.constructor(r.length + t.length), i = 0; i < r.length; i++)
    e[i] = r[i];
  for (var n = r.length, i = 0; i < t.length; i++)
    e[i + n] = t[i];
  return e;
}
function sa(r, t) {
  var e;
  if (Object.create)
    e = Object.create(r);
  else {
    var i = function() {
    };
    i.prototype = r, e = new i();
  }
  return t && O(e, t), e;
}
function Hf(r) {
  var t = r.style;
  t.webkitUserSelect = "none", t.userSelect = "none", t.webkitTapHighlightColor = "rgba(0,0,0,0)", t["-webkit-touch-callout"] = "none";
}
function kn(r, t) {
  return r.hasOwnProperty(t);
}
function jt() {
}
var Nc = 180 / Math.PI;
function Jr(r, t) {
  return r == null && (r = 0), t == null && (t = 0), [r, t];
}
function Bc(r) {
  return [r[0], r[1]];
}
function js(r, t, e) {
  return r[0] = t[0] + e[0], r[1] = t[1] + e[1], r;
}
function kc(r, t, e) {
  return r[0] = t[0] - e[0], r[1] = t[1] - e[1], r;
}
function Ta(r, t, e) {
  return r[0] = t[0] * e, r[1] = t[1] * e, r;
}
function xo(r, t) {
  return Math.sqrt((r[0] - t[0]) * (r[0] - t[0]) + (r[1] - t[1]) * (r[1] - t[1]));
}
var Ro = xo;
function Fc(r, t) {
  return (r[0] - t[0]) * (r[0] - t[0]) + (r[1] - t[1]) * (r[1] - t[1]);
}
var zr = Fc;
function Da(r, t, e, i) {
  return r[0] = t[0] + i * (e[0] - t[0]), r[1] = t[1] + i * (e[1] - t[1]), r;
}
function xi(r, t, e) {
  var i = t[0], n = t[1];
  return r[0] = e[0] * i + e[2] * n + e[4], r[1] = e[1] * i + e[3] * n + e[5], r;
}
function Ar(r, t, e) {
  return r[0] = Math.min(t[0], e[0]), r[1] = Math.min(t[1], e[1]), r;
}
function Or(r, t, e) {
  return r[0] = Math.max(t[0], e[0]), r[1] = Math.max(t[1], e[1]), r;
}
var mr = function() {
  function r(t, e) {
    this.target = t, this.topTarget = e && e.topTarget;
  }
  return r;
}(), Vc = function() {
  function r(t) {
    this.handler = t, t.on("mousedown", this._dragStart, this), t.on("mousemove", this._drag, this), t.on("mouseup", this._dragEnd, this);
  }
  return r.prototype._dragStart = function(t) {
    for (var e = t.target; e && !e.draggable; )
      e = e.parent || e.__hostTarget;
    e && (this._draggingTarget = e, e.dragging = !0, this._x = t.offsetX, this._y = t.offsetY, this.handler.dispatchToElement(new mr(e, t), "dragstart", t.event));
  }, r.prototype._drag = function(t) {
    var e = this._draggingTarget;
    if (e) {
      var i = t.offsetX, n = t.offsetY, a = i - this._x, o = n - this._y;
      this._x = i, this._y = n, e.drift(a, o, t), this.handler.dispatchToElement(new mr(e, t), "drag", t.event);
      var s = this.handler.findHover(i, n, e).target, u = this._dropTarget;
      this._dropTarget = s, e !== s && (u && s !== u && this.handler.dispatchToElement(new mr(u, t), "dragleave", t.event), s && s !== u && this.handler.dispatchToElement(new mr(s, t), "dragenter", t.event));
    }
  }, r.prototype._dragEnd = function(t) {
    var e = this._draggingTarget;
    e && (e.dragging = !1), this.handler.dispatchToElement(new mr(e, t), "dragend", t.event), this._dropTarget && this.handler.dispatchToElement(new mr(this._dropTarget, t), "drop", t.event), this._draggingTarget = null, this._dropTarget = null;
  }, r;
}();
const zc = Vc;
var Hc = function() {
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
const ce = Hc;
var Uc = Math.log(2);
function Io(r, t, e, i, n, a) {
  var o = i + "-" + n, s = r.length;
  if (a.hasOwnProperty(o))
    return a[o];
  if (t === 1) {
    var u = Math.round(Math.log((1 << s) - 1 & ~n) / Uc);
    return r[e][u];
  }
  for (var l = i | 1 << e, f = e + 1; i & 1 << f; )
    f++;
  for (var h = 0, c = 0, v = 0; c < s; c++) {
    var d = 1 << c;
    d & n || (h += (v % 2 ? -1 : 1) * r[e][c] * Io(r, t - 1, f, l, n | d, a), v++);
  }
  return a[o] = h, h;
}
function tu(r, t) {
  var e = [
    [r[0], r[1], 1, 0, 0, 0, -t[0] * r[0], -t[0] * r[1]],
    [0, 0, 0, r[0], r[1], 1, -t[1] * r[0], -t[1] * r[1]],
    [r[2], r[3], 1, 0, 0, 0, -t[2] * r[2], -t[2] * r[3]],
    [0, 0, 0, r[2], r[3], 1, -t[3] * r[2], -t[3] * r[3]],
    [r[4], r[5], 1, 0, 0, 0, -t[4] * r[4], -t[4] * r[5]],
    [0, 0, 0, r[4], r[5], 1, -t[5] * r[4], -t[5] * r[5]],
    [r[6], r[7], 1, 0, 0, 0, -t[6] * r[6], -t[6] * r[7]],
    [0, 0, 0, r[6], r[7], 1, -t[7] * r[6], -t[7] * r[7]]
  ], i = {}, n = Io(e, 8, 0, 0, 0, i);
  if (n !== 0) {
    for (var a = [], o = 0; o < 8; o++)
      for (var s = 0; s < 8; s++)
        a[s] == null && (a[s] = 0), a[s] += ((o + s) % 2 ? -1 : 1) * Io(e, 7, o === 0 ? 1 : 0, 1 << o, 1 << s, i) / n * t[o];
    return function(u, l, f) {
      var h = l * a[6] + f * a[7] + 1;
      u[0] = (l * a[0] + f * a[1] + a[2]) / h, u[1] = (l * a[3] + f * a[4] + a[5]) / h;
    };
  }
}
var eu = "___zrEVENTSAVED";
function Gc(r, t, e, i, n) {
  if (t.getBoundingClientRect && et.domSupported && !Uf(t)) {
    var a = t[eu] || (t[eu] = {}), o = Yc(t, a), s = Wc(o, a, n);
    if (s)
      return s(r, e, i), !0;
  }
  return !1;
}
function Yc(r, t) {
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
function Wc(r, t, e) {
  for (var i = e ? "invTrans" : "trans", n = t[i], a = t.srcCoords, o = [], s = [], u = !0, l = 0; l < 4; l++) {
    var f = r[l].getBoundingClientRect(), h = 2 * l, c = f.left, v = f.top;
    o.push(c, v), u = u && a && c === a[h] && v === a[h + 1], s.push(r[l].offsetLeft, r[l].offsetTop);
  }
  return u && n ? n : (t.srcCoords = o, t[i] = e ? tu(s, o) : tu(o, s));
}
function Uf(r) {
  return r.nodeName.toUpperCase() === "CANVAS";
}
var $c = /([&<>"'])/g, Xc = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
};
function qc(r) {
  return r == null ? "" : (r + "").replace($c, function(t, e) {
    return Xc[e];
  });
}
var Zc = /^(?:mouse|pointer|contextmenu|drag|drop)|click/, Ca = [], Kc = et.browser.firefox && +et.browser.version.split(".")[0] < 39;
function Ao(r, t, e, i) {
  return e = e || {}, i ? ru(r, t, e) : Kc && t.layerX != null && t.layerX !== t.offsetX ? (e.zrX = t.layerX, e.zrY = t.layerY) : t.offsetX != null ? (e.zrX = t.offsetX, e.zrY = t.offsetY) : ru(r, t, e), e;
}
function ru(r, t, e) {
  if (et.domSupported && r.getBoundingClientRect) {
    var i = t.clientX, n = t.clientY;
    if (Uf(r)) {
      var a = r.getBoundingClientRect();
      e.zrX = i - a.left, e.zrY = n - a.top;
      return;
    } else if (Gc(Ca, r, i, n)) {
      e.zrX = Ca[0], e.zrY = Ca[1];
      return;
    }
  }
  e.zrX = e.zrY = 0;
}
function Cs(r) {
  return r || window.event;
}
function te(r, t, e) {
  if (t = Cs(t), t.zrX != null)
    return t;
  var i = t.type, n = i && i.indexOf("touch") >= 0;
  if (n) {
    var o = i !== "touchend" ? t.targetTouches[0] : t.changedTouches[0];
    o && Ao(r, o, t, e);
  } else {
    Ao(r, t, t, e);
    var a = Qc(t);
    t.zrDelta = a ? a / 120 : -(t.detail || 0) / 3;
  }
  var s = t.button;
  return t.which == null && s !== void 0 && Zc.test(t.type) && (t.which = s & 1 ? 1 : s & 2 ? 3 : s & 4 ? 2 : 0), t;
}
function Qc(r) {
  var t = r.wheelDelta;
  if (t)
    return t;
  var e = r.deltaX, i = r.deltaY;
  if (e == null || i == null)
    return t;
  var n = Math.abs(i !== 0 ? i : e), a = i > 0 ? -1 : i < 0 ? 1 : e > 0 ? -1 : 1;
  return 3 * n * a;
}
function Jc(r, t, e, i) {
  r.addEventListener(t, e, i);
}
function jc(r, t, e, i) {
  r.removeEventListener(t, e, i);
}
var td = function(r) {
  r.preventDefault(), r.stopPropagation(), r.cancelBubble = !0;
}, ed = function() {
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
        var u = n[o], l = Ao(i, u, {});
        a.points.push([l.zrX, l.zrY]), a.touches.push(u);
      }
      this._track.push(a);
    }
  }, r.prototype._recognize = function(t) {
    for (var e in ba)
      if (ba.hasOwnProperty(e)) {
        var i = ba[e](this._track, t);
        if (i)
          return i;
      }
  }, r;
}();
function iu(r) {
  var t = r[1][0] - r[0][0], e = r[1][1] - r[0][1];
  return Math.sqrt(t * t + e * e);
}
function rd(r) {
  return [
    (r[0][0] + r[1][0]) / 2,
    (r[0][1] + r[1][1]) / 2
  ];
}
var ba = {
  pinch: function(r, t) {
    var e = r.length;
    if (e) {
      var i = (r[e - 1] || {}).points, n = (r[e - 2] || {}).points || i;
      if (n && n.length > 1 && i && i.length > 1) {
        var a = iu(i) / iu(n);
        !isFinite(a) && (a = 1), t.pinchScale = a;
        var o = rd(i);
        return t.pinchX = o[0], t.pinchY = o[1], {
          type: "pinch",
          target: r[0].target,
          event: t
        };
      }
    }
  }
};
function Fn() {
  return [1, 0, 0, 1, 0, 0];
}
function id(r) {
  return r[0] = 1, r[1] = 0, r[2] = 0, r[3] = 1, r[4] = 0, r[5] = 0, r;
}
function nd(r, t) {
  return r[0] = t[0], r[1] = t[1], r[2] = t[2], r[3] = t[3], r[4] = t[4], r[5] = t[5], r;
}
function Ea(r, t, e) {
  var i = t[0] * e[0] + t[2] * e[1], n = t[1] * e[0] + t[3] * e[1], a = t[0] * e[2] + t[2] * e[3], o = t[1] * e[2] + t[3] * e[3], s = t[0] * e[4] + t[2] * e[5] + t[4], u = t[1] * e[4] + t[3] * e[5] + t[5];
  return r[0] = i, r[1] = n, r[2] = a, r[3] = o, r[4] = s, r[5] = u, r;
}
function nu(r, t, e) {
  return r[0] = t[0], r[1] = t[1], r[2] = t[2], r[3] = t[3], r[4] = t[4] + e[0], r[5] = t[5] + e[1], r;
}
function ad(r, t, e) {
  var i = t[0], n = t[2], a = t[4], o = t[1], s = t[3], u = t[5], l = Math.sin(e), f = Math.cos(e);
  return r[0] = i * f + o * l, r[1] = -i * l + o * f, r[2] = n * f + s * l, r[3] = -n * l + f * s, r[4] = f * a + l * u, r[5] = f * u - l * a, r;
}
function od(r, t, e) {
  var i = e[0], n = e[1];
  return r[0] = t[0] * i, r[1] = t[1] * n, r[2] = t[2] * i, r[3] = t[3] * n, r[4] = t[4] * i, r[5] = t[5] * n, r;
}
function Gf(r, t) {
  var e = t[0], i = t[2], n = t[4], a = t[1], o = t[3], s = t[5], u = e * o - a * i;
  return u ? (u = 1 / u, r[0] = o * u, r[1] = -a * u, r[2] = -i * u, r[3] = e * u, r[4] = (i * s - o * n) * u, r[5] = (a * n - e * s) * u, r) : null;
}
var sd = function() {
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
const V = sd;
var Wi = Math.min, $i = Math.max, Ve = new V(), ze = new V(), He = new V(), Ue = new V(), ni = new V(), ai = new V(), ud = function() {
  function r(t, e, i, n) {
    i < 0 && (t = t + i, i = -i), n < 0 && (e = e + n, n = -n), this.x = t, this.y = e, this.width = i, this.height = n;
  }
  return r.prototype.union = function(t) {
    var e = Wi(t.x, this.x), i = Wi(t.y, this.y);
    isFinite(this.x) && isFinite(this.width) ? this.width = $i(t.x + t.width, this.x + this.width) - e : this.width = t.width, isFinite(this.y) && isFinite(this.height) ? this.height = $i(t.y + t.height, this.y + this.height) - i : this.height = t.height, this.x = e, this.y = i;
  }, r.prototype.applyTransform = function(t) {
    r.applyTransform(this, this, t);
  }, r.prototype.calculateTransform = function(t) {
    var e = this, i = t.width / e.width, n = t.height / e.height, a = Fn();
    return nu(a, a, [-e.x, -e.y]), od(a, a, [i, n]), nu(a, a, [t.x, t.y]), a;
  }, r.prototype.intersect = function(t, e) {
    if (!t)
      return !1;
    t instanceof r || (t = r.create(t));
    var i = this, n = i.x, a = i.x + i.width, o = i.y, s = i.y + i.height, u = t.x, l = t.x + t.width, f = t.y, h = t.y + t.height, c = !(a < u || l < n || s < f || h < o);
    if (e) {
      var v = 1 / 0, d = 0, _ = Math.abs(a - u), p = Math.abs(l - n), g = Math.abs(s - f), y = Math.abs(h - o), m = Math.min(_, p), w = Math.min(g, y);
      a < u || l < n ? m > d && (d = m, _ < p ? V.set(ai, -_, 0) : V.set(ai, p, 0)) : m < v && (v = m, _ < p ? V.set(ni, _, 0) : V.set(ni, -p, 0)), s < f || h < o ? w > d && (d = w, g < y ? V.set(ai, 0, -g) : V.set(ai, 0, y)) : m < v && (v = m, g < y ? V.set(ni, 0, g) : V.set(ni, 0, -y));
    }
    return e && V.copy(e, c ? ni : ai), c;
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
    Ve.x = He.x = e.x, Ve.y = Ue.y = e.y, ze.x = Ue.x = e.x + e.width, ze.y = He.y = e.y + e.height, Ve.transform(i), Ue.transform(i), ze.transform(i), He.transform(i), t.x = Wi(Ve.x, ze.x, He.x, Ue.x), t.y = Wi(Ve.y, ze.y, He.y, Ue.y);
    var u = $i(Ve.x, ze.x, He.x, Ue.x), l = $i(Ve.y, ze.y, He.y, Ue.y);
    t.width = u - t.x, t.height = l - t.y;
  }, r;
}();
const tt = ud;
var Yf = "silent";
function ld(r, t, e) {
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
    stop: fd
  };
}
function fd() {
  td(this.event);
}
var hd = function(r) {
  J(t, r);
  function t() {
    var e = r !== null && r.apply(this, arguments) || this;
    return e.handler = null, e;
  }
  return t.prototype.dispose = function() {
  }, t.prototype.setCursor = function() {
  }, t;
}(ce), oi = function() {
  function r(t, e) {
    this.x = t, this.y = e;
  }
  return r;
}(), vd = [
  "click",
  "dblclick",
  "mousewheel",
  "mouseout",
  "mouseup",
  "mousedown",
  "mousemove",
  "contextmenu"
], Ma = new tt(0, 0, 0, 0), Wf = function(r) {
  J(t, r);
  function t(e, i, n, a, o) {
    var s = r.call(this) || this;
    return s._hovered = new oi(0, 0), s.storage = e, s.painter = i, s.painterRoot = a, s._pointerSize = o, n = n || new hd(), s.proxy = null, s.setHandlerProxy(n), s._draggingMgr = new zc(s), s;
  }
  return t.prototype.setHandlerProxy = function(e) {
    this.proxy && this.proxy.dispose(), e && (L(vd, function(i) {
      e.on && e.on(i, this[i], this);
    }, this), e.handler = this), this.proxy = e;
  }, t.prototype.mousemove = function(e) {
    var i = e.zrX, n = e.zrY, a = $f(this, i, n), o = this._hovered, s = o.target;
    s && !s.__zr && (o = this.findHover(o.x, o.y), s = o.target);
    var u = this._hovered = a ? new oi(i, n) : this.findHover(i, n), l = u.target, f = this.proxy;
    f.setCursor && f.setCursor(l ? l.cursor : "default"), s && l !== s && this.dispatchToElement(o, "mouseout", e), this.dispatchToElement(u, "mousemove", e), l && l !== s && this.dispatchToElement(u, "mouseover", e);
  }, t.prototype.mouseout = function(e) {
    var i = e.zrEventControl;
    i !== "only_globalout" && this.dispatchToElement(this._hovered, "mouseout", e), i !== "no_globalout" && this.trigger("globalout", { type: "globalout", event: e });
  }, t.prototype.resize = function() {
    this._hovered = new oi(0, 0);
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
      for (var o = "on" + i, s = ld(i, e, n); a && (a[o] && (s.cancelBubble = !!a[o].call(a, s)), a.trigger(i, s), a = a.__hostTarget ? a.__hostTarget : a.parent, !s.cancelBubble); )
        ;
      s.cancelBubble || (this.trigger(i, s), this.painter && this.painter.eachOtherLayer && this.painter.eachOtherLayer(function(u) {
        typeof u[o] == "function" && u[o].call(u, s), u.trigger && u.trigger(i, s);
      }));
    }
  }, t.prototype.findHover = function(e, i, n) {
    var a = this.storage.getDisplayList(), o = new oi(e, i);
    if (au(a, o, e, i, n), this._pointerSize && !o.target) {
      for (var s = [], u = this._pointerSize, l = u / 2, f = new tt(e - l, i - l, u, u), h = a.length - 1; h >= 0; h--) {
        var c = a[h];
        c !== n && !c.ignore && !c.ignoreCoarsePointer && (!c.parent || !c.parent.ignoreCoarsePointer) && (Ma.copy(c.getBoundingRect()), c.transform && Ma.applyTransform(c.transform), Ma.intersect(f) && s.push(c));
      }
      if (s.length)
        for (var v = 4, d = Math.PI / 12, _ = Math.PI * 2, p = 0; p < l; p += v)
          for (var g = 0; g < _; g += d) {
            var y = e + p * Math.cos(g), m = i + p * Math.sin(g);
            if (au(s, o, y, m, n), o.target)
              return o;
          }
    }
    return o;
  }, t.prototype.processGesture = function(e, i) {
    this._gestureMgr || (this._gestureMgr = new ed());
    var n = this._gestureMgr;
    i === "start" && n.clear();
    var a = n.recognize(e, this.findHover(e.zrX, e.zrY, null).target, this.proxy.dom);
    if (i === "end" && n.clear(), a) {
      var o = a.type;
      e.gestureEvent = o;
      var s = new oi();
      s.target = a.target, this.dispatchToElement(s, o, a.event);
    }
  }, t;
}(ce);
L(["click", "mousedown", "mouseup", "mousewheel", "dblclick", "contextmenu"], function(r) {
  Wf.prototype[r] = function(t) {
    var e = t.zrX, i = t.zrY, n = $f(this, e, i), a, o;
    if ((r !== "mouseup" || !n) && (a = this.findHover(e, i), o = a.target), r === "mousedown")
      this._downEl = o, this._downPoint = [t.zrX, t.zrY], this._upEl = o;
    else if (r === "mouseup")
      this._upEl = o;
    else if (r === "click") {
      if (this._downEl !== this._upEl || !this._downPoint || Ro(this._downPoint, [t.zrX, t.zrY]) > 4)
        return;
      this._downPoint = null;
    }
    this.dispatchToElement(a, r, t);
  };
});
function cd(r, t, e) {
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
    return n ? Yf : !0;
  }
  return !1;
}
function au(r, t, e, i, n) {
  for (var a = r.length - 1; a >= 0; a--) {
    var o = r[a], s = void 0;
    if (o !== n && !o.ignore && (s = cd(o, e, i)) && (!t.topTarget && (t.topTarget = o), s !== Yf)) {
      t.target = o;
      break;
    }
  }
}
function $f(r, t, e) {
  var i = r.painter;
  return t < 0 || t > i.getWidth() || e < 0 || e > i.getHeight();
}
const dd = Wf;
var Xf = 32, si = 7;
function pd(r) {
  for (var t = 0; r >= Xf; )
    t |= r & 1, r >>= 1;
  return r + t;
}
function ou(r, t, e, i) {
  var n = t + 1;
  if (n === e)
    return 1;
  if (i(r[n++], r[t]) < 0) {
    for (; n < e && i(r[n], r[n - 1]) < 0; )
      n++;
    gd(r, t, n);
  } else
    for (; n < e && i(r[n], r[n - 1]) >= 0; )
      n++;
  return n - t;
}
function gd(r, t, e) {
  for (e--; t < e; ) {
    var i = r[t];
    r[t++] = r[e], r[e--] = i;
  }
}
function su(r, t, e, i, n) {
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
function La(r, t, e, i, n, a) {
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
function Pa(r, t, e, i, n, a) {
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
function _d(r, t) {
  var e = si, i, n, a = 0;
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
    var y = Pa(r[p], r, d, _, 0, t);
    d += y, _ -= y, _ !== 0 && (g = La(r[d + _ - 1], r, p, g, g - 1, t), g !== 0 && (_ <= g ? h(d, _, p, g) : c(d, _, p, g)));
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
        if (S = Pa(r[m], o, y, d, 0, t), S !== 0) {
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
        if (D = La(o[y], r, m, p, 0, t), D !== 0) {
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
      } while (S >= si || D >= si);
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
        if (C = d - Pa(o[m], r, v, d, d - 1, t), C !== 0) {
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
        if (b = p - La(r[y], o, 0, p, p - 1, t), b !== 0) {
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
      } while (C >= si || b >= si);
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
function Dn(r, t, e, i) {
  e || (e = 0), i || (i = r.length);
  var n = i - e;
  if (!(n < 2)) {
    var a = 0;
    if (n < Xf) {
      a = ou(r, e, i, t), su(r, e, i, e + a, t);
      return;
    }
    var o = _d(r, t), s = pd(n);
    do {
      if (a = ou(r, e, i, t), a < s) {
        var u = n;
        u > s && (u = s), su(r, e, e + u, e + a, t), a = u;
      }
      o.pushRun(e, a), o.mergeRuns(), n -= a, e += a;
    } while (n !== 0);
    o.forceMergeRuns();
  }
}
var Ht = 1, Ci = 2, Rr = 4, uu = !1;
function xa() {
  uu || (uu = !0, console.warn("z / z2 / zlevel of displayable is invalid, which may cause unexpected errors"));
}
function lu(r, t) {
  return r.zlevel === t.zlevel ? r.z === t.z ? r.z2 - t.z2 : r.z - t.z : r.zlevel - t.zlevel;
}
var yd = function() {
  function r() {
    this._roots = [], this._displayList = [], this._displayListLen = 0, this.displayableSortFunc = lu;
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
    i.length = this._displayListLen, Dn(i, lu);
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
          t.__dirty && (l.__dirty |= Ht), this._updateAndAddDisplayable(l, e, i);
        }
        t.__dirty = 0;
      } else {
        var f = t;
        e && e.length ? f.__clipPaths = e : f.__clipPaths && f.__clipPaths.length > 0 && (f.__clipPaths = []), isNaN(f.z) && (xa(), f.z = 0), isNaN(f.z2) && (xa(), f.z2 = 0), isNaN(f.zlevel) && (xa(), f.zlevel = 0), this._displayList[this._displayListLen++] = f;
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
    var n = it(this._roots, t);
    n >= 0 && this._roots.splice(n, 1);
  }, r.prototype.delAllRoots = function() {
    this._roots = [], this._displayList = [], this._displayListLen = 0;
  }, r.prototype.getRoots = function() {
    return this._roots;
  }, r.prototype.dispose = function() {
    this._displayList = null, this._roots = null;
  }, r;
}();
const md = yd;
var qf;
qf = et.hasGlobalWindow && (window.requestAnimationFrame && window.requestAnimationFrame.bind(window) || window.msRequestAnimationFrame && window.msRequestAnimationFrame.bind(window) || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame) || function(r) {
  return setTimeout(r, 16);
};
const Oo = qf;
var Cn = {
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
    return 1 - Cn.bounceOut(1 - r);
  },
  bounceOut: function(r) {
    return r < 1 / 2.75 ? 7.5625 * r * r : r < 2 / 2.75 ? 7.5625 * (r -= 1.5 / 2.75) * r + 0.75 : r < 2.5 / 2.75 ? 7.5625 * (r -= 2.25 / 2.75) * r + 0.9375 : 7.5625 * (r -= 2.625 / 2.75) * r + 0.984375;
  },
  bounceInOut: function(r) {
    return r < 0.5 ? Cn.bounceIn(r * 2) * 0.5 : Cn.bounceOut(r * 2 - 1) * 0.5 + 0.5;
  }
};
const Zf = Cn;
var Xi = Math.pow, ke = Math.sqrt, Vn = 1e-8, Kf = 1e-4, fu = ke(3), qi = 1 / 3, ue = Jr(), Kt = Jr(), Hr = Jr();
function Be(r) {
  return r > -Vn && r < Vn;
}
function Qf(r) {
  return r > Vn || r < -Vn;
}
function Dt(r, t, e, i, n) {
  var a = 1 - n;
  return a * a * (a * r + 3 * n * t) + n * n * (n * i + 3 * a * e);
}
function Jf(r, t, e, i, n, a) {
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
      m < 0 ? m = -Xi(-m, qi) : m = Xi(m, qi), w < 0 ? w = -Xi(-w, qi) : w = Xi(w, qi);
      var d = (-s - (m + w)) / (3 * o);
      d >= 0 && d <= 1 && (a[v++] = d);
    } else {
      var T = (2 * f * s - 3 * o * h) / (2 * ke(f * f * f)), S = Math.acos(T) / 3, D = ke(f), C = Math.cos(S), d = (-s - 2 * D * C) / (3 * o), g = (-s + D * (C + fu * Math.sin(S))) / (3 * o), b = (-s + D * (C - fu * Math.sin(S))) / (3 * o);
      d >= 0 && d <= 1 && (a[v++] = d), g >= 0 && g <= 1 && (a[v++] = g), b >= 0 && b <= 1 && (a[v++] = b);
    }
  }
  return v;
}
function jf(r, t, e, i, n) {
  var a = 6 * e - 12 * t + 6 * r, o = 9 * t + 3 * i - 3 * r - 9 * e, s = 3 * t - 3 * r, u = 0;
  if (Be(o)) {
    if (Qf(a)) {
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
function hu(r, t, e, i, n, a) {
  var o = (t - r) * n + r, s = (e - t) * n + t, u = (i - e) * n + e, l = (s - o) * n + o, f = (u - s) * n + s, h = (f - l) * n + l;
  a[0] = r, a[1] = o, a[2] = l, a[3] = h, a[4] = h, a[5] = f, a[6] = u, a[7] = i;
}
function th(r, t, e, i, n, a, o, s, u, l, f) {
  var h, c = 5e-3, v = 1 / 0, d, _, p, g;
  ue[0] = u, ue[1] = l;
  for (var y = 0; y < 1; y += 0.05)
    Kt[0] = Dt(r, e, n, o, y), Kt[1] = Dt(t, i, a, s, y), p = zr(ue, Kt), p < v && (h = y, v = p);
  v = 1 / 0;
  for (var m = 0; m < 32 && !(c < Kf); m++)
    d = h - c, _ = h + c, Kt[0] = Dt(r, e, n, o, d), Kt[1] = Dt(t, i, a, s, d), p = zr(Kt, ue), d >= 0 && p < v ? (h = d, v = p) : (Hr[0] = Dt(r, e, n, o, _), Hr[1] = Dt(t, i, a, s, _), g = zr(Hr, ue), _ <= 1 && g < v ? (h = _, v = g) : c *= 0.5);
  return f && (f[0] = Dt(r, e, n, o, h), f[1] = Dt(t, i, a, s, h)), ke(v);
}
function wd(r, t, e, i, n, a, o, s, u) {
  for (var l = r, f = t, h = 0, c = 1 / u, v = 1; v <= u; v++) {
    var d = v * c, _ = Dt(r, e, n, o, d), p = Dt(t, i, a, s, d), g = _ - l, y = p - f;
    h += Math.sqrt(g * g + y * y), l = _, f = p;
  }
  return h;
}
function xt(r, t, e, i) {
  var n = 1 - i;
  return n * (n * r + 2 * i * t) + i * i * e;
}
function Sd(r, t, e, i, n) {
  var a = r - 2 * t + e, o = 2 * (t - r), s = r - i, u = 0;
  if (Be(a)) {
    if (Qf(o)) {
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
function eh(r, t, e) {
  var i = r + e - 2 * t;
  return i === 0 ? 0.5 : (r - t) / i;
}
function vu(r, t, e, i, n) {
  var a = (t - r) * i + r, o = (e - t) * i + t, s = (o - a) * i + a;
  n[0] = r, n[1] = a, n[2] = s, n[3] = s, n[4] = o, n[5] = e;
}
function rh(r, t, e, i, n, a, o, s, u) {
  var l, f = 5e-3, h = 1 / 0;
  ue[0] = o, ue[1] = s;
  for (var c = 0; c < 1; c += 0.05) {
    Kt[0] = xt(r, e, n, c), Kt[1] = xt(t, i, a, c);
    var v = zr(ue, Kt);
    v < h && (l = c, h = v);
  }
  h = 1 / 0;
  for (var d = 0; d < 32 && !(f < Kf); d++) {
    var _ = l - f, p = l + f;
    Kt[0] = xt(r, e, n, _), Kt[1] = xt(t, i, a, _);
    var v = zr(Kt, ue);
    if (_ >= 0 && v < h)
      l = _, h = v;
    else {
      Hr[0] = xt(r, e, n, p), Hr[1] = xt(t, i, a, p);
      var g = zr(Hr, ue);
      p <= 1 && g < h ? (l = p, h = g) : f *= 0.5;
    }
  }
  return u && (u[0] = xt(r, e, n, l), u[1] = xt(t, i, a, l)), ke(h);
}
function Td(r, t, e, i, n, a, o) {
  for (var s = r, u = t, l = 0, f = 1 / o, h = 1; h <= o; h++) {
    var c = h * f, v = xt(r, e, n, c), d = xt(t, i, a, c), _ = v - s, p = d - u;
    l += Math.sqrt(_ * _ + p * p), s = v, u = d;
  }
  return l;
}
var Dd = /cubic-bezier\(([0-9,\.e ]+)\)/;
function ih(r) {
  var t = r && Dd.exec(r);
  if (t) {
    var e = t[1].split(","), i = +Ne(e[0]), n = +Ne(e[1]), a = +Ne(e[2]), o = +Ne(e[3]);
    if (isNaN(i + n + a + o))
      return;
    var s = [];
    return function(u) {
      return u <= 0 ? 0 : u >= 1 ? 1 : Jf(0, i, a, 1, u, s) && Dt(0, n, o, 1, s[0]);
    };
  }
}
var Cd = function() {
  function r(t) {
    this._inited = !1, this._startTime = 0, this._pausedTime = 0, this._paused = !1, this._life = t.life || 1e3, this._delay = t.delay || 0, this.loop = t.loop || !1, this.onframe = t.onframe || jt, this.ondestroy = t.ondestroy || jt, this.onrestart = t.onrestart || jt, t.easing && this.setEasing(t.easing);
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
    this.easing = t, this.easingFunc = Q(t) ? t : Zf[t] || ih(t);
  }, r;
}();
const bd = Cd;
var nh = function() {
  function r(t) {
    this.value = t;
  }
  return r;
}(), Ed = function() {
  function r() {
    this._len = 0;
  }
  return r.prototype.insert = function(t) {
    var e = new nh(t);
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
}(), Md = function() {
  function r(t) {
    this._list = new Ed(), this._maxSize = 10, this._map = {}, this._maxSize = t;
  }
  return r.prototype.put = function(t, e) {
    var i = this._list, n = this._map, a = null;
    if (n[t] == null) {
      var o = i.len(), s = this._lastRemovedEntry;
      if (o >= this._maxSize && o > 0) {
        var u = i.head;
        i.remove(u), delete n[u.key], a = u.value, this._lastRemovedEntry = u;
      }
      s ? s.value = e : s = new nh(e), s.key = t, i.insertEntry(s), n[t] = s;
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
const Gi = Md;
var cu = {
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
function Ri(r) {
  return r = Math.round(r), r < 0 ? 0 : r > 255 ? 255 : r;
}
function du(r) {
  return r < 0 ? 0 : r > 1 ? 1 : r;
}
function Ra(r) {
  var t = r;
  return t.length && t.charAt(t.length - 1) === "%" ? Ri(parseFloat(t) / 100 * 255) : Ri(parseInt(t, 10));
}
function Ii(r) {
  var t = r;
  return t.length && t.charAt(t.length - 1) === "%" ? du(parseFloat(t) / 100) : du(parseFloat(t));
}
function Ia(r, t, e) {
  return e < 0 ? e += 1 : e > 1 && (e -= 1), e * 6 < 1 ? r + (t - r) * e * 6 : e * 2 < 1 ? t : e * 3 < 2 ? r + (t - r) * (2 / 3 - e) * 6 : r;
}
function Xt(r, t, e, i, n) {
  return r[0] = t, r[1] = e, r[2] = i, r[3] = n, r;
}
function No(r, t) {
  return r[0] = t[0], r[1] = t[1], r[2] = t[2], r[3] = t[3], r;
}
var ah = new Gi(20), Zi = null;
function wr(r, t) {
  Zi && No(Zi, t), Zi = ah.put(r, Zi || t.slice());
}
function Ur(r, t) {
  if (r) {
    t = t || [];
    var e = ah.get(r);
    if (e)
      return No(t, e);
    r = r + "";
    var i = r.replace(/ /g, "").toLowerCase();
    if (i in cu)
      return No(t, cu[i]), wr(r, t), t;
    var n = i.length;
    if (i.charAt(0) === "#") {
      if (n === 4 || n === 5) {
        var a = parseInt(i.slice(1, 4), 16);
        if (!(a >= 0 && a <= 4095)) {
          Xt(t, 0, 0, 0, 1);
          return;
        }
        return Xt(t, (a & 3840) >> 4 | (a & 3840) >> 8, a & 240 | (a & 240) >> 4, a & 15 | (a & 15) << 4, n === 5 ? parseInt(i.slice(4), 16) / 15 : 1), wr(r, t), t;
      } else if (n === 7 || n === 9) {
        var a = parseInt(i.slice(1, 7), 16);
        if (!(a >= 0 && a <= 16777215)) {
          Xt(t, 0, 0, 0, 1);
          return;
        }
        return Xt(t, (a & 16711680) >> 16, (a & 65280) >> 8, a & 255, n === 9 ? parseInt(i.slice(7), 16) / 255 : 1), wr(r, t), t;
      }
      return;
    }
    var o = i.indexOf("("), s = i.indexOf(")");
    if (o !== -1 && s + 1 === n) {
      var u = i.substr(0, o), l = i.substr(o + 1, s - (o + 1)).split(","), f = 1;
      switch (u) {
        case "rgba":
          if (l.length !== 4)
            return l.length === 3 ? Xt(t, +l[0], +l[1], +l[2], 1) : Xt(t, 0, 0, 0, 1);
          f = Ii(l.pop());
        case "rgb":
          if (l.length >= 3)
            return Xt(t, Ra(l[0]), Ra(l[1]), Ra(l[2]), l.length === 3 ? f : Ii(l[3])), wr(r, t), t;
          Xt(t, 0, 0, 0, 1);
          return;
        case "hsla":
          if (l.length !== 4) {
            Xt(t, 0, 0, 0, 1);
            return;
          }
          return l[3] = Ii(l[3]), pu(l, t), wr(r, t), t;
        case "hsl":
          if (l.length !== 3) {
            Xt(t, 0, 0, 0, 1);
            return;
          }
          return pu(l, t), wr(r, t), t;
        default:
          return;
      }
    }
    Xt(t, 0, 0, 0, 1);
  }
}
function pu(r, t) {
  var e = (parseFloat(r[0]) % 360 + 360) % 360 / 360, i = Ii(r[1]), n = Ii(r[2]), a = n <= 0.5 ? n * (i + 1) : n + i - n * i, o = n * 2 - a;
  return t = t || [], Xt(t, Ri(Ia(o, a, e + 1 / 3) * 255), Ri(Ia(o, a, e) * 255), Ri(Ia(o, a, e - 1 / 3) * 255), 1), r.length === 4 && (t[3] = r[3]), t;
}
function gu(r, t) {
  var e = Ur(r);
  if (e) {
    for (var i = 0; i < 3; i++)
      t < 0 ? e[i] = e[i] * (1 - t) | 0 : e[i] = (255 - e[i]) * t + e[i] | 0, e[i] > 255 ? e[i] = 255 : e[i] < 0 && (e[i] = 0);
    return oh(e, e.length === 4 ? "rgba" : "rgb");
  }
}
function oh(r, t) {
  if (!(!r || !r.length)) {
    var e = r[0] + "," + r[1] + "," + r[2];
    return (t === "rgba" || t === "hsva" || t === "hsla") && (e += "," + r[3]), t + "(" + e + ")";
  }
}
function zn(r, t) {
  var e = Ur(r);
  return e ? (0.299 * e[0] + 0.587 * e[1] + 0.114 * e[2]) * e[3] / 255 + (1 - e[3]) * t : 0;
}
function Ld(r) {
  return r.type === "linear";
}
function Pd(r) {
  return r.type === "radial";
}
(function() {
  return et.hasGlobalWindow && Q(window.btoa) ? function(r) {
    return window.btoa(unescape(encodeURIComponent(r)));
  } : typeof Buffer < "u" ? function(r) {
    return Buffer.from(r).toString("base64");
  } : function(r) {
    return process.env.NODE_ENV !== "production" && hr("Base64 isn't natively supported in the current environment."), null;
  };
})();
var Bo = Array.prototype.slice;
function Se(r, t, e) {
  return (t - r) * e + r;
}
function Aa(r, t, e, i) {
  for (var n = t.length, a = 0; a < n; a++)
    r[a] = Se(t[a], e[a], i);
  return r;
}
function xd(r, t, e, i) {
  for (var n = t.length, a = n && t[0].length, o = 0; o < n; o++) {
    r[o] || (r[o] = []);
    for (var s = 0; s < a; s++)
      r[o][s] = Se(t[o][s], e[o][s], i);
  }
  return r;
}
function Ki(r, t, e, i) {
  for (var n = t.length, a = 0; a < n; a++)
    r[a] = t[a] + e[a] * i;
  return r;
}
function _u(r, t, e, i) {
  for (var n = t.length, a = n && t[0].length, o = 0; o < n; o++) {
    r[o] || (r[o] = []);
    for (var s = 0; s < a; s++)
      r[o][s] = t[o][s] + e[o][s] * i;
  }
  return r;
}
function Rd(r, t) {
  for (var e = r.length, i = t.length, n = e > i ? t : r, a = Math.min(e, i), o = n[a - 1] || { color: [0, 0, 0, 0], offset: 0 }, s = a; s < Math.max(e, i); s++)
    n.push({
      offset: o.offset,
      color: o.color.slice()
    });
}
function Id(r, t, e) {
  var i = r, n = t;
  if (!(!i.push || !n.push)) {
    var a = i.length, o = n.length;
    if (a !== o) {
      var s = a > o;
      if (s)
        i.length = o;
      else
        for (var u = a; u < o; u++)
          i.push(e === 1 ? n[u] : Bo.call(n[u]));
    }
    for (var l = i[0] && i[0].length, u = 0; u < i.length; u++)
      if (e === 1)
        isNaN(i[u]) && (i[u] = n[u]);
      else
        for (var f = 0; f < l; f++)
          isNaN(i[u][f]) && (i[u][f] = n[u][f]);
  }
}
function bn(r) {
  if (Yt(r)) {
    var t = r.length;
    if (Yt(r[0])) {
      for (var e = [], i = 0; i < t; i++)
        e.push(Bo.call(r[i]));
      return e;
    }
    return Bo.call(r);
  }
  return r;
}
function En(r) {
  return r[0] = Math.floor(r[0]) || 0, r[1] = Math.floor(r[1]) || 0, r[2] = Math.floor(r[2]) || 0, r[3] = r[3] == null ? 1 : r[3], "rgba(" + r.join(",") + ")";
}
function Ad(r) {
  return Yt(r && r[0]) ? 2 : 1;
}
var Qi = 0, Mn = 1, sh = 2, bi = 3, ko = 4, Fo = 5, yu = 6;
function mu(r) {
  return r === ko || r === Fo;
}
function Ji(r) {
  return r === Mn || r === sh;
}
var ui = [0, 0, 0, 0], Od = function() {
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
    var n = this.keyframes, a = n.length, o = !1, s = yu, u = e;
    if (Yt(e)) {
      var l = Ad(e);
      s = l, (l === 1 && !bt(e[0]) || l === 2 && !bt(e[0][0])) && (o = !0);
    } else if (bt(e) && !Ff(e))
      s = Qi;
    else if (q(e))
      if (!isNaN(+e))
        s = Qi;
      else {
        var f = Ur(e);
        f && (u = f, s = bi);
      }
    else if (oa(e)) {
      var h = O({}, u);
      h.colorStops = rt(e.colorStops, function(v) {
        return {
          offset: v.offset,
          color: Ur(v.color)
        };
      }), Ld(e) ? s = ko : Pd(e) && (s = Fo), u = h;
    }
    a === 0 ? this.valType = s : (s !== this.valType || s === yu) && (o = !0), this.discrete = this.discrete || o;
    var c = {
      time: t,
      value: u,
      rawValue: e,
      percent: 0
    };
    return i && (c.easing = i, c.easingFunc = Q(i) ? i : Zf[i] || ih(i)), n.push(c), c;
  }, r.prototype.prepare = function(t, e) {
    var i = this.keyframes;
    this._needsSort && i.sort(function(_, p) {
      return _.time - p.time;
    });
    for (var n = this.valType, a = i.length, o = i[a - 1], s = this.discrete, u = Ji(n), l = mu(n), f = 0; f < a; f++) {
      var h = i[f], c = h.value, v = o.value;
      h.percent = h.time / t, s || (u && f !== a - 1 ? Id(c, v, n) : l && Rd(c.colorStops, v.colorStops));
    }
    if (!s && n !== Fo && e && this.needsAnimate() && e.needsAnimate() && n === e.valType && !e._finished) {
      this._additiveTrack = e;
      for (var d = i[0].value, f = 0; f < a; f++)
        n === Qi ? i[f].additiveValue = i[f].value - d : n === bi ? i[f].additiveValue = Ki([], i[f].value, d, -1) : Ji(n) && (i[f].additiveValue = n === Mn ? Ki([], i[f].value, d, -1) : _u([], i[f].value, d, -1));
    }
  }, r.prototype.step = function(t, e) {
    if (!this._finished) {
      this._additiveTrack && this._additiveTrack._finished && (this._additiveTrack = null);
      var i = this._additiveTrack != null, n = i ? "additiveValue" : "value", a = this.valType, o = this.keyframes, s = o.length, u = this.propName, l = a === bi, f, h = this._lastFr, c = Math.min, v, d;
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
        var y = i ? this._additiveValue : l ? ui : t[u];
        if ((Ji(a) || l) && !y && (y = this._additiveValue = []), this.discrete)
          t[u] = g < 1 ? v.rawValue : d.rawValue;
        else if (Ji(a))
          a === Mn ? Aa(y, v[n], d[n], g) : xd(y, v[n], d[n], g);
        else if (mu(a)) {
          var m = v[n], w = d[n], T = a === ko;
          t[u] = {
            type: T ? "linear" : "radial",
            x: Se(m.x, w.x, g),
            y: Se(m.y, w.y, g),
            colorStops: rt(m.colorStops, function(D, C) {
              var b = w.colorStops[C];
              return {
                offset: Se(D.offset, b.offset, g),
                color: En(Aa([], D.color, b.color, g))
              };
            }),
            global: w.global
          }, T ? (t[u].x2 = Se(m.x2, w.x2, g), t[u].y2 = Se(m.y2, w.y2, g)) : t[u].r = Se(m.r, w.r, g);
        } else if (l)
          Aa(y, v[n], d[n], g), i || (t[u] = En(y));
        else {
          var S = Se(v[n], d[n], g);
          i ? this._additiveValue = S : t[u] = S;
        }
        i && this._addToTarget(t);
      }
    }
  }, r.prototype._addToTarget = function(t) {
    var e = this.valType, i = this.propName, n = this._additiveValue;
    e === Qi ? t[i] = t[i] + n : e === bi ? (Ur(t[i], ui), Ki(ui, ui, n, 1), t[i] = En(ui)) : e === Mn ? Ki(t[i], t[i], n, 1) : e === sh && _u(t[i], t[i], n, 1);
  }, r;
}(), Nd = function() {
  function r(t, e, i, n) {
    if (this._tracks = {}, this._trackKeys = [], this._maxTime = 0, this._started = 0, this._clip = null, this._target = t, this._loop = e, e && n) {
      hr("Can' use additive animation on looped animation.");
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
        u = a[s] = new Od(s);
        var l = void 0, f = this._getAdditiveTrack(s);
        if (f) {
          var h = f.keyframes, c = h[h.length - 1];
          l = c && c.value, f.valType === bi && l && (l = En(l));
        } else
          l = this._target[s];
        if (l == null)
          continue;
        t > 0 && u.addKeyframe(0, bn(l), n), this._trackKeys.push(s);
      }
      u.addKeyframe(t, bn(e[s]), n);
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
        var c = new bd({
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
    return rt(this._trackKeys, function(e) {
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
          u && (t[a] = bn(u.rawValue));
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
const bs = Nd;
function Nr() {
  return (/* @__PURE__ */ new Date()).getTime();
}
var Bd = function(r) {
  J(t, r);
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
    for (var i = Nr() - this._pausedTime, n = i - this._time, a = this._head; a; ) {
      var o = a.next, s = a.step(i, n);
      s && (a.ondestroy(), this.removeClip(a)), a = o;
    }
    this._time = i, e || (this.trigger("frame", n), this.stage.update && this.stage.update());
  }, t.prototype._startLoop = function() {
    var e = this;
    this._running = !0;
    function i() {
      e._running && (Oo(i), !e._paused && e.update());
    }
    Oo(i);
  }, t.prototype.start = function() {
    this._running || (this._time = Nr(), this._pausedTime = 0, this._startLoop());
  }, t.prototype.stop = function() {
    this._running = !1;
  }, t.prototype.pause = function() {
    this._paused || (this._pauseStart = Nr(), this._paused = !0);
  }, t.prototype.resume = function() {
    this._paused && (this._pausedTime += Nr() - this._pauseStart, this._paused = !1);
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
    var n = new bs(e, i.loop);
    return this.addAnimator(n), n;
  }, t;
}(ce);
const kd = Bd;
var Fd = 300, Oa = et.domSupported, Na = function() {
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
  }, i = rt(r, function(n) {
    var a = n.replace("mouse", "pointer");
    return e.hasOwnProperty(a) ? a : n;
  });
  return {
    mouse: r,
    touch: t,
    pointer: i
  };
}(), wu = {
  mouse: ["mousemove", "mouseup"],
  pointer: ["pointermove", "pointerup"]
}, Su = !1;
function Vo(r) {
  var t = r.pointerType;
  return t === "pen" || t === "touch";
}
function Vd(r) {
  r.touching = !0, r.touchTimer != null && (clearTimeout(r.touchTimer), r.touchTimer = null), r.touchTimer = setTimeout(function() {
    r.touching = !1, r.touchTimer = null;
  }, 700);
}
function Ba(r) {
  r && (r.zrByTouch = !0);
}
function zd(r, t) {
  return te(r.dom, new Hd(r, t), !0);
}
function uh(r, t) {
  for (var e = t, i = !1; e && e.nodeType !== 9 && !(i = e.domBelongToZr || e !== t && e === r.painterRoot); )
    e = e.parentNode;
  return i;
}
var Hd = function() {
  function r(t, e) {
    this.stopPropagation = jt, this.stopImmediatePropagation = jt, this.preventDefault = jt, this.type = e.type, this.target = this.currentTarget = t.dom, this.pointerType = e.pointerType, this.clientX = e.clientX, this.clientY = e.clientY;
  }
  return r;
}(), ee = {
  mousedown: function(r) {
    r = te(this.dom, r), this.__mayPointerCapture = [r.zrX, r.zrY], this.trigger("mousedown", r);
  },
  mousemove: function(r) {
    r = te(this.dom, r);
    var t = this.__mayPointerCapture;
    t && (r.zrX !== t[0] || r.zrY !== t[1]) && this.__togglePointerCapture(!0), this.trigger("mousemove", r);
  },
  mouseup: function(r) {
    r = te(this.dom, r), this.__togglePointerCapture(!1), this.trigger("mouseup", r);
  },
  mouseout: function(r) {
    r = te(this.dom, r);
    var t = r.toElement || r.relatedTarget;
    uh(this, t) || (this.__pointerCapturing && (r.zrEventControl = "no_globalout"), this.trigger("mouseout", r));
  },
  wheel: function(r) {
    Su = !0, r = te(this.dom, r), this.trigger("mousewheel", r);
  },
  mousewheel: function(r) {
    Su || (r = te(this.dom, r), this.trigger("mousewheel", r));
  },
  touchstart: function(r) {
    r = te(this.dom, r), Ba(r), this.__lastTouchMoment = /* @__PURE__ */ new Date(), this.handler.processGesture(r, "start"), ee.mousemove.call(this, r), ee.mousedown.call(this, r);
  },
  touchmove: function(r) {
    r = te(this.dom, r), Ba(r), this.handler.processGesture(r, "change"), ee.mousemove.call(this, r);
  },
  touchend: function(r) {
    r = te(this.dom, r), Ba(r), this.handler.processGesture(r, "end"), ee.mouseup.call(this, r), +/* @__PURE__ */ new Date() - +this.__lastTouchMoment < Fd && ee.click.call(this, r);
  },
  pointerdown: function(r) {
    ee.mousedown.call(this, r);
  },
  pointermove: function(r) {
    Vo(r) || ee.mousemove.call(this, r);
  },
  pointerup: function(r) {
    ee.mouseup.call(this, r);
  },
  pointerout: function(r) {
    Vo(r) || ee.mouseout.call(this, r);
  }
};
L(["click", "dblclick", "contextmenu"], function(r) {
  ee[r] = function(t) {
    t = te(this.dom, t), this.trigger(r, t);
  };
});
var zo = {
  pointermove: function(r) {
    Vo(r) || zo.mousemove.call(this, r);
  },
  pointerup: function(r) {
    zo.mouseup.call(this, r);
  },
  mousemove: function(r) {
    this.trigger("mousemove", r);
  },
  mouseup: function(r) {
    var t = this.__pointerCapturing;
    this.__togglePointerCapture(!1), this.trigger("mouseup", r), t && (r.zrEventControl = "only_globalout", this.trigger("mouseout", r));
  }
};
function Ud(r, t) {
  var e = t.domHandlers;
  et.pointerEventsSupported ? L(Na.pointer, function(i) {
    Ln(t, i, function(n) {
      e[i].call(r, n);
    });
  }) : (et.touchEventsSupported && L(Na.touch, function(i) {
    Ln(t, i, function(n) {
      e[i].call(r, n), Vd(t);
    });
  }), L(Na.mouse, function(i) {
    Ln(t, i, function(n) {
      n = Cs(n), t.touching || e[i].call(r, n);
    });
  }));
}
function Gd(r, t) {
  et.pointerEventsSupported ? L(wu.pointer, e) : et.touchEventsSupported || L(wu.mouse, e);
  function e(i) {
    function n(a) {
      a = Cs(a), uh(r, a.target) || (a = zd(r, a), t.domHandlers[i].call(r, a));
    }
    Ln(t, i, n, { capture: !0 });
  }
}
function Ln(r, t, e, i) {
  r.mounted[t] = e, r.listenerOpts[t] = i, Jc(r.domTarget, t, e, i);
}
function ka(r) {
  var t = r.mounted;
  for (var e in t)
    t.hasOwnProperty(e) && jc(r.domTarget, e, t[e], r.listenerOpts[e]);
  r.mounted = {};
}
var Tu = function() {
  function r(t, e) {
    this.mounted = {}, this.listenerOpts = {}, this.touching = !1, this.domTarget = t, this.domHandlers = e;
  }
  return r;
}(), Yd = function(r) {
  J(t, r);
  function t(e, i) {
    var n = r.call(this) || this;
    return n.__pointerCapturing = !1, n.dom = e, n.painterRoot = i, n._localHandlerScope = new Tu(e, ee), Oa && (n._globalHandlerScope = new Tu(document, zo)), Ud(n, n._localHandlerScope), n;
  }
  return t.prototype.dispose = function() {
    ka(this._localHandlerScope), Oa && ka(this._globalHandlerScope);
  }, t.prototype.setCursor = function(e) {
    this.dom.style && (this.dom.style.cursor = e || "default");
  }, t.prototype.__togglePointerCapture = function(e) {
    if (this.__mayPointerCapture = null, Oa && +this.__pointerCapturing ^ +e) {
      this.__pointerCapturing = e;
      var i = this._globalHandlerScope;
      e ? Gd(this, i) : ka(i);
    }
  }, t;
}(ce);
const Wd = Yd;
var lh = 1;
et.hasGlobalWindow && (lh = Math.max(window.devicePixelRatio || window.screen && window.screen.deviceXDPI / window.screen.logicalXDPI || 1, 1));
var Hn = lh, Ho = 0.4, Uo = "#333", Go = "#ccc", $d = "#eee", Du = id, Cu = 5e-5;
function Ge(r) {
  return r > Cu || r < -Cu;
}
var Ye = [], Sr = [], Fa = Fn(), Va = Math.abs, Xd = function() {
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
    return Ge(this.rotation) || Ge(this.x) || Ge(this.y) || Ge(this.scaleX - 1) || Ge(this.scaleY - 1) || Ge(this.skewX) || Ge(this.skewY);
  }, r.prototype.updateTransform = function() {
    var t = this.parent && this.parent.transform, e = this.needLocalTransform(), i = this.transform;
    if (!(e || t)) {
      i && (Du(i), this.invTransform = null);
      return;
    }
    i = i || Fn(), e ? this.getLocalTransform(i) : Du(i), t && (e ? Ea(i, t, i) : nd(i, t)), this.transform = i, this._resolveGlobalScaleRatio(i);
  }, r.prototype._resolveGlobalScaleRatio = function(t) {
    var e = this.globalScaleRatio;
    if (e != null && e !== 1) {
      this.getGlobalScale(Ye);
      var i = Ye[0] < 0 ? -1 : 1, n = Ye[1] < 0 ? -1 : 1, a = ((Ye[0] - i) * e + i) / Ye[0] || 0, o = ((Ye[1] - n) * e + n) / Ye[1] || 0;
      t[0] *= a, t[1] *= a, t[2] *= o, t[3] *= o;
    }
    this.invTransform = this.invTransform || Fn(), Gf(this.invTransform, t);
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
      t && t.transform && (Ea(Sr, t.invTransform, e), e = Sr);
      var i = this.originX, n = this.originY;
      (i || n) && (Fa[4] = i, Fa[5] = n, Ea(Sr, e, Fa), Sr[4] -= i, Sr[5] -= n, e = Sr), this.setLocalTransform(e);
    }
  }, r.prototype.getGlobalScale = function(t) {
    var e = this.transform;
    return t = t || [], e ? (t[0] = Math.sqrt(e[0] * e[0] + e[1] * e[1]), t[1] = Math.sqrt(e[2] * e[2] + e[3] * e[3]), e[0] < 0 && (t[0] = -t[0]), e[3] < 0 && (t[1] = -t[1]), t) : (t[0] = 1, t[1] = 1, t);
  }, r.prototype.transformCoordToLocal = function(t, e) {
    var i = [t, e], n = this.invTransform;
    return n && xi(i, i, n), i;
  }, r.prototype.transformCoordToGlobal = function(t, e) {
    var i = [t, e], n = this.transform;
    return n && xi(i, i, n), i;
  }, r.prototype.getLineScale = function() {
    var t = this.transform;
    return t && Va(t[0] - 1) > 1e-10 && Va(t[3] - 1) > 1e-10 ? Math.sqrt(Va(t[0] * t[3] - t[2] * t[1])) : 1;
  }, r.prototype.copyTransform = function(t) {
    qd(this, t);
  }, r.getLocalTransform = function(t, e) {
    e = e || [];
    var i = t.originX || 0, n = t.originY || 0, a = t.scaleX, o = t.scaleY, s = t.anchorX, u = t.anchorY, l = t.rotation || 0, f = t.x, h = t.y, c = t.skewX ? Math.tan(t.skewX) : 0, v = t.skewY ? Math.tan(-t.skewY) : 0;
    if (i || n || s || u) {
      var d = i + s, _ = n + u;
      e[4] = -d * a - c * _ * o, e[5] = -_ * o - v * d * a;
    } else
      e[4] = e[5] = 0;
    return e[0] = a, e[3] = o, e[1] = v * a, e[2] = c * o, l && ad(e, e, l), e[4] += i + f, e[5] += n + h, e;
  }, r.initDefaultProps = function() {
    var t = r.prototype;
    t.scaleX = t.scaleY = t.globalScaleRatio = 1, t.x = t.y = t.originX = t.originY = t.skewX = t.skewY = t.rotation = t.anchorX = t.anchorY = 0;
  }(), r;
}(), ki = [
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
function qd(r, t) {
  for (var e = 0; e < ki.length; e++) {
    var i = ki[e];
    r[i] = t[i];
  }
}
const Es = Xd;
var bu = {};
function Ut(r, t) {
  t = t || pr;
  var e = bu[t];
  e || (e = bu[t] = new Gi(500));
  var i = e.get(r);
  return i == null && (i = Zr.measureText(r, t).width, e.put(r, i)), i;
}
function Eu(r, t, e, i) {
  var n = Ut(r, t), a = Ms(t), o = Ei(0, n, e), s = Ir(0, a, i), u = new tt(o, s, n, a);
  return u;
}
function Zd(r, t, e, i) {
  var n = ((r || "") + "").split(`
`), a = n.length;
  if (a === 1)
    return Eu(n[0], t, e, i);
  for (var o = new tt(0, 0, 0, 0), s = 0; s < n.length; s++) {
    var u = Eu(n[s], t, e, i);
    s === 0 ? o.copy(u) : o.union(u);
  }
  return o;
}
function Ei(r, t, e) {
  return e === "right" ? r -= t : e === "center" && (r -= t / 2), r;
}
function Ir(r, t, e) {
  return e === "middle" ? r -= t / 2 : e === "bottom" && (r -= t), r;
}
function Ms(r) {
  return Ut("国", r);
}
function Fi(r, t) {
  return typeof r == "string" ? r.lastIndexOf("%") >= 0 ? parseFloat(r) / 100 * t : parseFloat(r) : r;
}
function fh(r, t, e) {
  var i = t.position || "inside", n = t.distance != null ? t.distance : 5, a = e.height, o = e.width, s = a / 2, u = e.x, l = e.y, f = "left", h = "top";
  if (i instanceof Array)
    u += Fi(i[0], e.width), l += Fi(i[1], e.height), f = null, h = null;
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
var za = "__zr_normal__", Ha = ki.concat(["ignore"]), Kd = Qr(ki, function(r, t) {
  return r[t] = !0, r;
}, { ignore: !1 }), Tr = {}, Qd = new tt(0, 0, 0, 0), Ls = function() {
  function r(t) {
    this.id = Bf(), this.animators = [], this.currentStates = [], this.states = {}, this._init(t);
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
        var f = Qd;
        i.layoutRect ? f.copy(i.layoutRect) : f.copy(this.getBoundingRect()), n || f.applyTransform(this.transform), this.calculateTextPosition ? this.calculateTextPosition(Tr, i, f) : fh(Tr, i, f), a.x = Tr.x, a.y = Tr.y, o = Tr.align, s = Tr.verticalAlign;
        var h = i.origin;
        if (h && i.rotation != null) {
          var c = void 0, v = void 0;
          h === "center" ? (c = f.width * 0.5, v = f.height * 0.5) : (c = Fi(h[0], f.width), v = Fi(h[1], f.height)), l = !0, a.originX = -a.x + c + (n ? 0 : f.x), a.originY = -a.y + v + (n ? 0 : f.y);
        }
      }
      i.rotation != null && (a.rotation = i.rotation);
      var d = i.offset;
      d && (a.x += d[0], a.y += d[1], l || (a.originX = -d[0], a.originY = -d[1]));
      var _ = i.inside == null ? typeof i.position == "string" && i.position.indexOf("inside") >= 0 : i.inside, p = this._innerTextDefaultStyle || (this._innerTextDefaultStyle = {}), g = void 0, y = void 0, m = void 0;
      _ && this.canBeInsideText() ? (g = i.insideFill, y = i.insideStroke, (g == null || g === "auto") && (g = this.getInsideTextFill()), (y == null || y === "auto") && (y = this.getInsideTextStroke(g), m = !0)) : (g = i.outsideFill, y = i.outsideStroke, (g == null || g === "auto") && (g = this.getOutsideFill()), (y == null || y === "auto") && (y = this.getOutsideStroke(g), m = !0)), g = g || "#000", (g !== p.fill || y !== p.stroke || m !== p.autoStroke || o !== p.align || s !== p.verticalAlign) && (u = !0, p.fill = g, p.stroke = y, p.autoStroke = m, p.align = o, p.verticalAlign = s, e.setDefaultTextStyle(p)), e.__dirty |= Ht, u && e.dirtyStyle(!0);
    }
  }, r.prototype.canBeInsideText = function() {
    return !0;
  }, r.prototype.getInsideTextFill = function() {
    return "#fff";
  }, r.prototype.getInsideTextStroke = function(t) {
    return "#000";
  }, r.prototype.getOutsideFill = function() {
    return this.__zr && this.__zr.isDarkMode() ? Go : Uo;
  }, r.prototype.getOutsideStroke = function(t) {
    var e = this.__zr && this.__zr.getBackgroundColor(), i = typeof e == "string" && Ur(e);
    i || (i = [255, 255, 255, 1]);
    for (var n = i[3], a = this.__zr.isDarkMode(), o = 0; o < 3; o++)
      i[o] = i[o] * n + (a ? 0 : 255) * (1 - n);
    return i[3] = 1, oh(i, "rgba");
  }, r.prototype.traverse = function(t, e) {
  }, r.prototype.attrKV = function(t, e) {
    t === "textConfig" ? this.setTextConfig(e) : t === "textContent" ? this.setTextContent(e) : t === "clipPath" ? this.setClipPath(e) : t === "extra" ? (this.extra = this.extra || {}, O(this.extra, e)) : this[t] = e;
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
      if (!(n.getLoop() || a && a !== za)) {
        var o = n.targetName, s = o ? e[o] : e;
        n.saveTo(s);
      }
    }
  }, r.prototype._innerSaveToNormal = function(t) {
    var e = this._normalState;
    e || (e = this._normalState = {}), t.textConfig && !e.textConfig && (e.textConfig = this.textConfig), this._savePrimaryToNormal(t, e, Ha);
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
    this.useState(za, !1, t);
  }, r.prototype.useState = function(t, e, i, n) {
    var a = t === za, o = this.hasState();
    if (!(!o && a)) {
      var s = this.currentStates, u = this.stateTransition;
      if (!(it(s, t) >= 0 && (e || s.length === 1))) {
        var l;
        if (this.stateProxy && !a && (l = this.stateProxy(t)), l || (l = this.states && this.states[t]), !l && !a) {
          hr("State " + t + " not exists.");
          return;
        }
        a || this.saveCurrentToNormalState(l);
        var f = !!(l && l.hoverLayer || n);
        f && this._toggleHoverLayerFlag(!0), this._applyStateObj(t, l, this._normalState, e, !i && !this.__inHover && u && u.duration > 0, u);
        var h = this._textContent, c = this._textGuide;
        return h && h.useState(t, e, i, f), c && c.useState(t, e, i, f), a ? (this.currentStates = [], this._normalState = {}) : e ? this.currentStates.push(t) : this.currentStates = [t], this._updateAnimationTargets(), this.markRedraw(), !f && this.__inHover && (this._toggleHoverLayerFlag(!1), this.__dirty &= ~Ht), l;
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
      _ && _.useStates(t, e, c), p && p.useStates(t, e, c), this._updateAnimationTargets(), this.currentStates = t.slice(), this.markRedraw(), !c && this.__inHover && (this._toggleHoverLayerFlag(!1), this.__dirty &= ~Ht);
    }
  }, r.prototype._updateAnimationTargets = function() {
    for (var t = 0; t < this.animators.length; t++) {
      var e = this.animators[t];
      e.targetName && e.changeTarget(this[e.targetName]);
    }
  }, r.prototype.removeState = function(t) {
    var e = it(this.currentStates, t);
    if (e >= 0) {
      var i = this.currentStates.slice();
      i.splice(e, 1), this.useStates(i);
    }
  }, r.prototype.replaceState = function(t, e, i) {
    var n = this.currentStates.slice(), a = it(n, t), o = it(n, e) >= 0;
    a >= 0 ? o ? n.splice(a, 1) : n[a] = e : i && !o && n.push(e), this.useStates(n);
  }, r.prototype.toggleState = function(t, e) {
    e ? this.useState(t, !0) : this.removeState(t);
  }, r.prototype._mergeStates = function(t) {
    for (var e = {}, i, n = 0; n < t.length; n++) {
      var a = t[n];
      O(e, a), a.textConfig && (i = i || {}, O(i, a.textConfig));
    }
    return i && (e.textConfig = i), e;
  }, r.prototype._applyStateObj = function(t, e, i, n, a, o) {
    var s = !(e && n);
    e && e.textConfig ? (this.textConfig = O({}, n ? this.textConfig : i.textConfig), O(this.textConfig, e.textConfig)) : s && i.textConfig && (this.textConfig = i.textConfig);
    for (var u = {}, l = !1, f = 0; f < Ha.length; f++) {
      var h = Ha[f], c = a && Kd[h];
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
      t.innerTransformable = new Es(), this._attachComponent(t), this._textContent = t, this.markRedraw();
    }
  }, r.prototype.setTextConfig = function(t) {
    this.textConfig || (this.textConfig = {}), O(this.textConfig, t), this.markRedraw();
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
    this.__dirty |= Ht;
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
      hr('Property "' + t + '" is not existed in element ' + this.id);
      return;
    }
    var a = new bs(n, e, i);
    return t && (a.targetName = t), this.addAnimator(a, t), a;
  }, r.prototype.addAnimator = function(t, e) {
    var i = this.__zr, n = this;
    t.during(function() {
      n.updateDuringAnimation(e);
    }).done(function() {
      var a = n.animators, o = it(a, t);
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
    Ua(this, t, e, i);
  }, r.prototype.animateFrom = function(t, e, i) {
    Ua(this, t, e, i, !0);
  }, r.prototype._transitionState = function(t, e, i, n) {
    for (var a = Ua(this, e, i, n), o = 0; o < a.length; o++)
      a[o].__fromStateTransition = t;
  }, r.prototype.getBoundingRect = function() {
    return null;
  }, r.prototype.getPaintRect = function() {
    return null;
  }, r.initDefaultProps = function() {
    var t = r.prototype;
    t.type = "element", t.name = "", t.ignore = t.silent = t.isGroup = t.draggable = t.dragging = t.ignoreClip = t.__inHover = !1, t.__dirty = Ht;
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
Ee(Ls, ce);
Ee(Ls, Es);
function Ua(r, t, e, i, n) {
  e = e || {};
  var a = [];
  hh(r, "", r, t, e, i, a, n);
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
function Ga(r, t, e) {
  for (var i = 0; i < e; i++)
    r[i] = t[i];
}
function Jd(r) {
  return Yt(r[0]);
}
function jd(r, t, e) {
  if (Yt(t[e]))
    if (Yt(r[e]) || (r[e] = []), Ot(t[e])) {
      var i = t[e].length;
      r[e].length !== i && (r[e] = new t[e].constructor(i), Ga(r[e], t[e], i));
    } else {
      var n = t[e], a = r[e], o = n.length;
      if (Jd(n))
        for (var s = n[0].length, u = 0; u < o; u++)
          a[u] ? Ga(a[u], n[u], s) : a[u] = Array.prototype.slice.call(n[u]);
      else
        Ga(a, n, o);
      a.length = n.length;
    }
  else
    r[e] = t[e];
}
function tp(r, t) {
  return r === t || Yt(r) && Yt(t) && ep(r, t);
}
function ep(r, t) {
  var e = r.length;
  if (e !== t.length)
    return !1;
  for (var i = 0; i < e; i++)
    if (r[i] !== t[i])
      return !1;
  return !0;
}
function hh(r, t, e, i, n, a, o, s) {
  for (var u = lt(i), l = n.duration, f = n.delay, h = n.additive, c = n.setToFinal, v = !F(a), d = r.animators, _ = [], p = 0; p < u.length; p++) {
    var g = u[p], y = i[g];
    if (y != null && e[g] != null && (v || a[g]))
      if (F(y) && !Yt(y) && !oa(y)) {
        if (t) {
          s || (e[g] = y, r.updateDuringAnimation(t));
          continue;
        }
        hh(r, g, e[g], y, n, a && a[g], o, s);
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
          var D = it(d, T);
          d.splice(D, 1);
        }
      }
    }
  if (n.force || (_ = Rt(_, function(E) {
    return !tp(i[E], e[E]);
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
        M[g] = bn(e[g]), jd(e, i, g);
      }
    }
    var T = new bs(e, !1, !1, h ? Rt(d, function(P) {
      return P.targetName === t;
    }) : null);
    T.targetName = t, n.scope && (T.scope = n.scope), c && C && T.whenWithKeys(0, C, _), M && T.whenWithKeys(0, M, _), T.whenWithKeys(l ?? 500, s ? b : i, _).delay(f || 0), r.addAnimator(T, t), o.push(T);
  }
}
const vh = Ls;
var ch = function(r) {
  J(t, r);
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
    var n = it(this._children, e);
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
    var i = this.__zr, n = this._children, a = it(n, e);
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
    for (var i = new tt(0, 0, 0, 0), n = e || this._children, a = [], o = null, s = 0; s < n.length; s++) {
      var u = n[s];
      if (!(u.ignore || u.invisible)) {
        var l = u.getBoundingRect(), f = u.getLocalTransform(a);
        f ? (tt.applyTransform(i, l, f), o = o || i.clone(), o.union(i)) : (o = o || l.clone(), o.union(l));
      }
    }
    return o || i;
  }, t;
}(vh);
ch.prototype.type = "group";
const Yr = ch;
/*!
* ZRender, a high performance 2d drawing library.
*
* Copyright (c) 2013, Baidu Inc.
* All rights reserved.
*
* LICENSE
* https://github.com/ecomfe/zrender/blob/master/LICENSE.txt
*/
var Mi = {}, dh = {};
function rp(r) {
  delete dh[r];
}
function ip(r) {
  if (!r)
    return !1;
  if (typeof r == "string")
    return zn(r, 1) < Ho;
  if (r.colorStops) {
    for (var t = r.colorStops, e = 0, i = t.length, n = 0; n < i; n++)
      e += zn(t[n].color, 1);
    return e /= i, e < Ho;
  }
  return !1;
}
var np = function() {
  function r(t, e, i) {
    var n = this;
    this._sleepAfterStill = 10, this._stillFrameAccum = 0, this._needsRefresh = !0, this._needsRefreshHover = !0, this._darkMode = !1, i = i || {}, this.dom = e, this.id = t;
    var a = new md(), o = i.renderer || "canvas";
    if (Mi[o] || (o = lt(Mi)[0]), process.env.NODE_ENV !== "production" && !Mi[o])
      throw new Error("Renderer '" + o + "' is not imported. Please import it first.");
    i.useDirtyRect = i.useDirtyRect == null ? !1 : i.useDirtyRect;
    var s = new Mi[o](e, a, i, t), u = i.ssr || s.ssrOnly;
    this.storage = a, this.painter = s;
    var l = !et.node && !et.worker && !u ? new Wd(s.getViewportRoot(), s.root) : null, f = i.useCoarsePointer, h = f == null || f === "auto" ? et.touchEventsSupported : !!f, c = 44, v;
    h && (v = W(i.pointerSize, c)), this.handler = new dd(a, s, l, s.root, v), this.animation = new kd({
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
    this.painter.setBackgroundColor && this.painter.setBackgroundColor(t), this.refresh(), this._backgroundColor = t, this._darkMode = ip(t);
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
    var e, i = Nr();
    this._needsRefresh && (e = !0, this.refreshImmediately(t)), this._needsRefreshHover && (e = !0, this.refreshHoverImmediately());
    var n = Nr();
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
      t[e] instanceof Yr && t[e].removeSelfFromZr(this);
    this.storage.delAllRoots(), this.painter.clear();
  }, r.prototype.dispose = function() {
    this.animation.stop(), this.clear(), this.storage.dispose(), this.painter.dispose(), this.handler.dispose(), this.animation = this.storage = this.painter = this.handler = null, rp(this.id);
  }, r;
}();
function Mu(r, t) {
  var e = new np(Bf(), r, t);
  return dh[e.id] = e, e;
}
function ap(r, t) {
  Mi[r] = t;
}
var ph = 20;
function op(r) {
  return r.replace(/^\s+|\s+$/g, "");
}
function Yo(r, t) {
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
  return q(r) ? op(r).match(/%$/) ? parseFloat(r) / 100 * t : parseFloat(r) : r == null ? NaN : +r;
}
function Wo(r, t, e) {
  return t == null && (t = 10), t = Math.min(Math.max(0, t), ph), r = (+r).toFixed(t), e ? r : +r;
}
function Br(r) {
  if (r = +r, isNaN(r))
    return 0;
  if (r > 1e-14) {
    for (var t = 1, e = 0; e < 15; e++, t *= 10)
      if (Math.round(r * t) / t === r)
        return e;
  }
  return sp(r);
}
function sp(r) {
  var t = r.toString().toLowerCase(), e = t.indexOf("e"), i = e > 0 ? +t.slice(e + 1) : 0, n = e > 0 ? e : t.length, a = t.indexOf("."), o = a < 0 ? 0 : n - 1 - a;
  return Math.max(0, o - i);
}
function up(r, t) {
  var e = Math.max(Br(r), Br(t)), i = r + t;
  return e > ph ? i : Wo(i, e);
}
var lp = /^(?:(\d{4})(?:[-\/](\d{1,2})(?:[-\/](\d{1,2})(?:[T ](\d{1,2})(?::(\d{1,2})(?::(\d{1,2})(?:[.,](\d+))?)?)?(Z|[\+\-]\d\d:?\d\d)?)?)?)?)?$/;
function gh(r) {
  if (r instanceof Date)
    return r;
  if (q(r)) {
    var t = lp.exec(r);
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
function fp(r) {
  var t = parseFloat(r);
  return t == r && (t !== 0 || !q(r) || r.indexOf("x") <= 0) ? t : NaN;
}
function hp(r) {
  return !isNaN(fp(r));
}
function vp() {
  return Math.round(Math.random() * 9);
}
function _h(r, t) {
  return t === 0 ? r : _h(t, r % t);
}
function Lu(r, t) {
  return r == null ? t : t == null ? r : r * t / _h(r, t);
}
var cp = "[ECharts] ", Pu = {}, dp = typeof console < "u" && console.warn && console.log;
function ua(r, t, e) {
  if (dp) {
    if (e) {
      if (Pu[t])
        return;
      Pu[t] = !0;
    }
    console[r](cp + t);
  }
}
function pp(r, t) {
  ua("log", r, t);
}
function Te(r, t) {
  ua("warn", r, t);
}
function wt(r, t) {
  ua("error", r, t);
}
function ve(r) {
  process.env.NODE_ENV !== "production" && ua("warn", "DEPRECATED: " + r, !0);
}
function gt(r, t, e) {
  process.env.NODE_ENV !== "production" && ve((e ? "[" + e + "]" : "") + (r + " is deprecated, use " + t + " instead."));
}
function $o() {
  for (var r = [], t = 0; t < arguments.length; t++)
    r[t] = arguments[t];
  var e = "";
  if (process.env.NODE_ENV !== "production") {
    var i = function(n) {
      return n === void 0 ? "undefined" : n === 1 / 0 ? "Infinity" : n === -1 / 0 ? "-Infinity" : Ff(n) ? "NaN" : n instanceof Date ? "Date(" + n.toISOString() + ")" : Q(n) ? "function () { ... }" : Pc(n) ? n + "" : null;
    };
    e = rt(r, function(n) {
      if (q(n))
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
function zt(r) {
  throw new Error(r);
}
function xu(r, t, e) {
  return (t - r) * e + r;
}
var yh = "series\0", gp = "\0_ec_\0";
function Et(r) {
  return r instanceof Array ? r : r == null ? [] : [r];
}
function Ru(r, t, e) {
  if (r) {
    r[t] = r[t] || {}, r.emphasis = r.emphasis || {}, r.emphasis[t] = r.emphasis[t] || {};
    for (var i = 0, n = e.length; i < n; i++) {
      var a = e[i];
      !r.emphasis[t].hasOwnProperty(a) && r[t].hasOwnProperty(a) && (r.emphasis[t][a] = r[t][a]);
    }
  }
}
var Iu = ["fontStyle", "fontWeight", "fontSize", "fontFamily", "rich", "tag", "color", "textBorderColor", "textBorderWidth", "width", "height", "lineHeight", "align", "verticalAlign", "baseline", "shadowColor", "shadowBlur", "shadowOffsetX", "shadowOffsetY", "textShadowColor", "textShadowBlur", "textShadowOffsetX", "textShadowOffsetY", "backgroundColor", "borderColor", "borderWidth", "borderRadius", "padding"];
function la(r) {
  return F(r) && !G(r) && !(r instanceof Date) ? r.value : r;
}
function _p(r) {
  return F(r) && !(r instanceof Array);
}
function yp(r, t, e) {
  var i = e === "normalMerge", n = e === "replaceMerge", a = e === "replaceAll";
  r = r || [], t = (t || []).slice();
  var o = $();
  L(t, function(u, l) {
    if (!F(u)) {
      t[l] = null;
      return;
    }
    process.env.NODE_ENV !== "production" && (u.id != null && !Ou(u.id) && Au(u.id), u.name != null && !Ou(u.name) && Au(u.name));
  });
  var s = mp(r, o, e);
  return (i || n) && wp(s, r, o, t), i && Sp(s, t), i || n ? Tp(s, t, n) : a && Dp(s, t), Cp(s), s;
}
function mp(r, t, e) {
  var i = [];
  if (e === "replaceAll")
    return i;
  for (var n = 0; n < r.length; n++) {
    var a = r[n];
    a && a.id != null && t.set(a.id, n), i.push({
      existing: e === "replaceMerge" || Wr(a) ? null : a,
      newOption: null,
      keyInfo: null,
      brandNew: null
    });
  }
  return i;
}
function wp(r, t, e, i) {
  L(i, function(n, a) {
    if (!(!n || n.id == null)) {
      var o = Ai(n.id), s = e.get(o);
      if (s != null) {
        var u = r[s];
        U(!u.newOption, 'Duplicated option on id "' + o + '".'), u.newOption = n, u.existing = t[s], i[a] = null;
      }
    }
  });
}
function Sp(r, t) {
  L(t, function(e, i) {
    if (!(!e || e.name == null))
      for (var n = 0; n < r.length; n++) {
        var a = r[n].existing;
        if (!r[n].newOption && a && (a.id == null || e.id == null) && !Wr(e) && !Wr(a) && mh("name", a, e)) {
          r[n].newOption = e, t[i] = null;
          return;
        }
      }
  });
}
function Tp(r, t, e) {
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
        (n.newOption || Wr(n.existing) || // In mode "replaceMerge", here no not-mapped-non-internal-existing.
        n.existing && i.id != null && !mh("id", i, n.existing));
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
function Dp(r, t) {
  L(t, function(e) {
    r.push({
      newOption: e,
      brandNew: !0,
      existing: null,
      keyInfo: null
    });
  });
}
function Cp(r) {
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
      if (o.name = a.name != null ? Ai(a.name) : n ? n.name : yh + i, n)
        o.id = Ai(n.id);
      else if (a.id != null)
        o.id = Ai(a.id);
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
function mh(r, t, e) {
  var i = fe(t[r], null), n = fe(e[r], null);
  return i != null && n != null && i === n;
}
function Ai(r) {
  if (process.env.NODE_ENV !== "production" && r == null)
    throw new Error();
  return fe(r, "");
}
function fe(r, t) {
  return r == null ? t : q(r) ? r : bt(r) || kf(r) ? r + "" : t;
}
function Au(r) {
  process.env.NODE_ENV !== "production" && Te("`" + r + "` is invalid id or name. Must be a string or number.");
}
function Ou(r) {
  return kf(r) || hp(r);
}
function wh(r) {
  var t = r.name;
  return !!(t && t.indexOf(yh));
}
function Wr(r) {
  return r && r.id != null && Ai(r.id).indexOf(gp) === 0;
}
function bp(r, t, e) {
  L(r, function(i) {
    var n = i.newOption;
    F(n) && (i.keyInfo.mainType = t, i.keyInfo.subType = Ep(t, n, i.existing, e));
  });
}
function Ep(r, t, e, i) {
  var n = t.type ? t.type : e ? e.subType : i.determineSubType(r, t);
  return n;
}
function fa(r, t) {
  if (t.dataIndexInside != null)
    return t.dataIndexInside;
  if (t.dataIndex != null)
    return G(t.dataIndex) ? rt(t.dataIndex, function(e) {
      return r.indexOfRawIndex(e);
    }) : r.indexOfRawIndex(t.dataIndex);
  if (t.name != null)
    return G(t.name) ? rt(t.name, function(e) {
      return r.indexOfName(e);
    }) : r.indexOfName(t.name);
}
function _t() {
  var r = "__ec_inner_" + Mp++;
  return function(t) {
    return t[r] || (t[r] = {});
  };
}
var Mp = vp();
function Ya(r, t, e) {
  var i = Sh(t, e), n = i.mainTypeSpecified, a = i.queryOptionMap, o = i.others, s = o, u = e ? e.defaultMainType : null;
  return !n && u && a.set(u, {}), a.each(function(l, f) {
    var h = ha(r, f, l, {
      useDefault: u === f,
      enableAll: e && e.enableAll != null ? e.enableAll : !0,
      enableNone: e && e.enableNone != null ? e.enableNone : !0
    });
    s[f + "Models"] = h.models, s[f + "Model"] = h.models[0];
  }), s;
}
function Sh(r, t) {
  var e;
  if (q(r)) {
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
    if (!(!f || !h || t && t.includeMainTypes && it(t.includeMainTypes, f) < 0)) {
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
var Ps = {
  useDefault: !0,
  enableAll: !1,
  enableNone: !1
};
function ha(r, t, e, i) {
  i = i || Ps;
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
function Lp(r, t, e) {
  r.setAttribute ? r.setAttribute(t, e) : r[t] = e;
}
function Pp(r, t, e, i, n) {
  var a = t == null || t === "auto";
  if (i == null)
    return i;
  if (bt(i)) {
    var o = xu(e || 0, i, n);
    return Wo(o, a ? Math.max(Br(e || 0), Br(i)) : t);
  } else {
    if (q(i))
      return n < 1 ? e : i;
    for (var s = [], u = e, l = i, f = Math.max(u ? u.length : 0, l.length), h = 0; h < f; ++h) {
      var c = r.getDimensionInfo(h);
      if (c && c.type === "ordinal")
        s[h] = (n < 1 && u ? u : l)[h];
      else {
        var v = u && u[h] ? u[h] : 0, d = l[h], o = xu(v, d, n);
        s[h] = Wo(o, a ? Math.max(Br(v), Br(d)) : t);
      }
    }
    return s;
  }
}
var xp = ".", We = "___EC__COMPONENT__CONTAINER___", Th = "___EC__EXTENDED_CLASS___";
function le(r) {
  var t = {
    main: "",
    sub: ""
  };
  if (r) {
    var e = r.split(xp);
    t.main = e[0] || "", t.sub = e[1] || "";
  }
  return t;
}
function Rp(r) {
  U(/^[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)?$/.test(r), 'componentType "' + r + '" illegal');
}
function Ip(r) {
  return !!(r && r[Th]);
}
function xs(r, t) {
  r.$constructor = r, r.extend = function(e) {
    process.env.NODE_ENV !== "production" && L(t, function(a) {
      e[a] || console.warn("Method `" + a + "` should be implemented" + (e.type ? " in " + e.type : "") + ".");
    });
    var i = this, n;
    return Ap(i) ? n = /** @class */
    function(a) {
      J(o, a);
      function o() {
        return a.apply(this, arguments) || this;
      }
      return o;
    }(i) : (n = function() {
      (e.$constructor || i).apply(this, arguments);
    }, Ec(n, this)), O(n.prototype, e), n[Th] = !0, n.extend = this.extend, n.superCall = Bp, n.superApply = kp, n.superClass = i, n;
  };
}
function Ap(r) {
  return Q(r) && /^class\s/.test(Function.prototype.toString.call(r));
}
function Dh(r, t) {
  r.extend = t.extend;
}
var Op = Math.round(Math.random() * 10);
function Np(r) {
  var t = ["__\0is_clz", Op++].join("_");
  r.prototype[t] = !0, process.env.NODE_ENV !== "production" && U(!r.isInstance, 'The method "is" can not be defined.'), r.isInstance = function(e) {
    return !!(e && e[t]);
  };
}
function Bp(r, t) {
  for (var e = [], i = 2; i < arguments.length; i++)
    e[i - 2] = arguments[i];
  return this.superClass.prototype[t].apply(r, e);
}
function kp(r, t, e) {
  return this.superClass.prototype[t].apply(r, e);
}
function Rs(r) {
  var t = {};
  r.registerClass = function(i) {
    var n = i.type || i.prototype.type;
    if (n) {
      Rp(n), i.prototype.type = n;
      var a = le(n);
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
    var n = le(i), a = [], o = t[n.main];
    return o && o[We] ? L(o, function(s, u) {
      u !== We && a.push(s);
    }) : a.push(o), a;
  }, r.hasClass = function(i) {
    var n = le(i);
    return !!t[n.main];
  }, r.getAllClassMainTypes = function() {
    var i = [];
    return L(t, function(n, a) {
      i.push(a);
    }), i;
  }, r.hasSubTypes = function(i) {
    var n = le(i), a = t[n.main];
    return a && a[We];
  };
  function e(i) {
    var n = t[i.main];
    return (!n || !n[We]) && (n = t[i.main] = {}, n[We] = !0), n;
  }
}
function Vi(r, t) {
  for (var e = 0; e < r.length; e++)
    r[e][1] || (r[e][1] = r[e][0]);
  return t = t || !1, function(i, n, a) {
    for (var o = {}, s = 0; s < r.length; s++) {
      var u = r[s][1];
      if (!(n && it(n, u) >= 0 || a && it(a, u) < 0)) {
        var l = i.getShallow(u, t);
        l != null && (o[r[s][0]] = l);
      }
    }
    return o;
  };
}
var Fp = [
  ["fill", "color"],
  ["shadowBlur"],
  ["shadowOffsetX"],
  ["shadowOffsetY"],
  ["opacity"],
  ["shadowColor"]
  // Option decal is in `DecalObject` but style.decal is in `PatternObject`.
  // So do not transfer decal directly.
], Vp = Vi(Fp), zp = (
  /** @class */
  function() {
    function r() {
    }
    return r.prototype.getAreaStyle = function(t, e) {
      return Vp(this, t, e);
    }, r;
  }()
), Xo = new Gi(50);
function Hp(r) {
  if (typeof r == "string") {
    var t = Xo.get(r);
    return t && t.image;
  } else
    return r;
}
function Ch(r, t, e, i, n) {
  if (r)
    if (typeof r == "string") {
      if (t && t.__zrImageSrc === r || !e)
        return t;
      var a = Xo.get(r), o = { hostEl: e, cb: i, cbPayload: n };
      return a ? (t = a.image, !va(t) && a.pending.push(o)) : (t = Zr.loadImage(r, Nu, Nu), t.__zrImageSrc = r, Xo.put(r, t.__cachedImgObj = {
        image: t,
        pending: [o]
      })), t;
    } else
      return r;
  else
    return t;
}
function Nu() {
  var r = this.__cachedImgObj;
  this.onload = this.onerror = this.__cachedImgObj = null;
  for (var t = 0; t < r.pending.length; t++) {
    var e = r.pending[t], i = e.cb;
    i && i(this, e.cbPayload), e.hostEl.dirty();
  }
  r.pending.length = 0;
}
function va(r) {
  return r && r.width && r.height;
}
var Wa = /\{([a-zA-Z0-9_]+)\|([^}]*)\}/g;
function Up(r, t, e, i, n) {
  if (!t)
    return "";
  var a = (r + "").split(`
`);
  n = bh(t, e, i, n);
  for (var o = 0, s = a.length; o < s; o++)
    a[o] = Eh(a[o], n);
  return a.join(`
`);
}
function bh(r, t, e, i) {
  i = i || {};
  var n = O({}, i);
  n.font = t, e = W(e, "..."), n.maxIterations = W(i.maxIterations, 2);
  var a = n.minChar = W(i.minChar, 0);
  n.cnCharWidth = Ut("国", t);
  var o = n.ascCharWidth = Ut("a", t);
  n.placeholder = W(i.placeholder, "");
  for (var s = r = Math.max(0, r - 1), u = 0; u < a && s >= o; u++)
    s -= o;
  var l = Ut(e, t);
  return l > s && (e = "", l = 0), s = r - l, n.ellipsis = e, n.ellipsisWidth = l, n.contentWidth = s, n.containerWidth = r, n;
}
function Eh(r, t) {
  var e = t.containerWidth, i = t.font, n = t.contentWidth;
  if (!e)
    return "";
  var a = Ut(r, i);
  if (a <= e)
    return r;
  for (var o = 0; ; o++) {
    if (a <= n || o >= t.maxIterations) {
      r += t.ellipsis;
      break;
    }
    var s = o === 0 ? Gp(r, n, t.ascCharWidth, t.cnCharWidth) : a > 0 ? Math.floor(r.length * n / a) : 0;
    r = r.substr(0, s), a = Ut(r, i);
  }
  return r === "" && (r = t.placeholder), r;
}
function Gp(r, t, e, i) {
  for (var n = 0, a = 0, o = r.length; a < o && n < t; a++) {
    var s = r.charCodeAt(a);
    n += 0 <= s && s <= 127 ? e : i;
  }
  return a;
}
function Yp(r, t) {
  r != null && (r += "");
  var e = t.overflow, i = t.padding, n = t.font, a = e === "truncate", o = Ms(n), s = W(t.lineHeight, o), u = !!t.backgroundColor, l = t.lineOverflow === "truncate", f = t.width, h;
  f != null && (e === "break" || e === "breakAll") ? h = r ? Mh(r, t.font, f, e === "breakAll", 0).lines : [] : h = r ? r.split(`
`) : [];
  var c = h.length * s, v = W(t.height, c);
  if (c > v && l) {
    var d = Math.floor(v / s);
    h = h.slice(0, d);
  }
  if (r && a && f != null)
    for (var _ = bh(f, n, t.ellipsis, {
      minChar: t.truncateMinChar,
      placeholder: t.placeholder
    }), p = 0; p < h.length; p++)
      h[p] = Eh(h[p], _);
  for (var g = v, y = 0, p = 0; p < h.length; p++)
    y = Math.max(Ut(h[p], n), y);
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
var Wp = function() {
  function r() {
  }
  return r;
}(), Bu = function() {
  function r(t) {
    this.tokens = [], t && (this.tokens = t);
  }
  return r;
}(), $p = function() {
  function r() {
    this.width = 0, this.height = 0, this.contentWidth = 0, this.contentHeight = 0, this.outerWidth = 0, this.outerHeight = 0, this.lines = [];
  }
  return r;
}();
function Xp(r, t) {
  var e = new $p();
  if (r != null && (r += ""), !r)
    return e;
  for (var i = t.width, n = t.height, a = t.overflow, o = (a === "break" || a === "breakAll") && i != null ? { width: i, accumWidth: 0, breakAll: a === "breakAll" } : null, s = Wa.lastIndex = 0, u; (u = Wa.exec(r)) != null; ) {
    var l = u.index;
    l > s && $a(e, r.substring(s, l), t, o), $a(e, u[2], t, o, u[1]), s = Wa.lastIndex;
  }
  s < r.length && $a(e, r.substring(s, r.length), t, o);
  var f = [], h = 0, c = 0, v = t.padding, d = a === "truncate", _ = t.lineOverflow === "truncate";
  function p(I, N, k) {
    I.width = N, I.lineHeight = k, h += k, c = Math.max(c, N);
  }
  t:
    for (var g = 0; g < e.lines.length; g++) {
      for (var y = e.lines[g], m = 0, w = 0, T = 0; T < y.tokens.length; T++) {
        var S = y.tokens[T], D = S.styleName && t.rich[S.styleName] || {}, C = S.textPadding = D.padding, b = C ? C[1] + C[3] : 0, M = S.font = D.font || t.font;
        S.contentHeight = Ms(M);
        var E = W(D.height, S.contentHeight);
        if (S.innerHeight = E, C && (E += C[0] + C[2]), S.height = E, S.lineHeight = Tn(D.lineHeight, t.lineHeight, E), S.align = D && D.align || t.align, S.verticalAlign = D && D.verticalAlign || "middle", _ && n != null && h + S.lineHeight > n) {
          T > 0 ? (y.tokens = y.tokens.slice(0, T), p(y, w, m), e.lines = e.lines.slice(0, g + 1)) : e.lines = e.lines.slice(0, g);
          break t;
        }
        var P = D.width, x = P == null || P === "auto";
        if (typeof P == "string" && P.charAt(P.length - 1) === "%")
          S.percentWidth = P, f.push(S), S.contentWidth = Ut(S.text, M);
        else {
          if (x) {
            var R = D.backgroundColor, B = R && R.image;
            B && (B = Hp(B), va(B) && (S.width = Math.max(S.width, B.width * E / B.height)));
          }
          var A = d && i != null ? i - w : null;
          A != null && A < S.width ? !x || A < b ? (S.text = "", S.width = S.contentWidth = 0) : (S.text = Up(S.text, A - b, M, t.ellipsis, { minChar: t.truncateMinChar }), S.width = S.contentWidth = Ut(S.text, M)) : S.contentWidth = Ut(S.text, M);
        }
        S.width += b, w += S.width, D && (m = Math.max(m, S.lineHeight));
      }
      p(y, w, m);
    }
  e.outerWidth = e.width = W(i, c), e.outerHeight = e.height = W(n, h), e.contentHeight = h, e.contentWidth = c, v && (e.outerWidth += v[1] + v[3], e.outerHeight += v[0] + v[2]);
  for (var g = 0; g < f.length; g++) {
    var S = f[g], at = S.percentWidth;
    S.width = parseInt(at, 10) / 100 * e.width;
  }
  return e;
}
function $a(r, t, e, i, n) {
  var a = t === "", o = n && e.rich[n] || {}, s = r.lines, u = o.font || e.font, l = !1, f, h;
  if (i) {
    var c = o.padding, v = c ? c[1] + c[3] : 0;
    if (o.width != null && o.width !== "auto") {
      var d = Fi(o.width, i.width) + v;
      s.length > 0 && d + i.accumWidth > i.width && (f = t.split(`
`), l = !0), i.accumWidth = d;
    } else {
      var _ = Mh(t, u, i.width, i.breakAll, i.accumWidth);
      i.accumWidth = _.accumWidth + v, h = _.linesWidths, f = _.lines;
    }
  } else
    f = t.split(`
`);
  for (var p = 0; p < f.length; p++) {
    var g = f[p], y = new Wp();
    if (y.styleName = n, y.text = g, y.isLineHolder = !g && !a, typeof o.width == "number" ? y.width = o.width : y.width = h ? h[p] : Ut(g, u), !p && !l) {
      var m = (s[s.length - 1] || (s[0] = new Bu())).tokens, w = m.length;
      w === 1 && m[0].isLineHolder ? m[0] = y : (g || !w || a) && m.push(y);
    } else
      s.push(new Bu([y]));
  }
}
function qp(r) {
  var t = r.charCodeAt(0);
  return t >= 32 && t <= 591 || t >= 880 && t <= 4351 || t >= 4608 && t <= 5119 || t >= 7680 && t <= 8303;
}
var Zp = Qr(",&?/;] ".split(""), function(r, t) {
  return r[t] = !0, r;
}, {});
function Kp(r) {
  return qp(r) ? !!Zp[r] : !0;
}
function Mh(r, t, e, i, n) {
  for (var a = [], o = [], s = "", u = "", l = 0, f = 0, h = 0; h < r.length; h++) {
    var c = r.charAt(h);
    if (c === `
`) {
      u && (s += u, f += l), a.push(s), o.push(f), s = "", u = "", l = 0, f = 0;
      continue;
    }
    var v = Ut(c, t), d = i ? !1 : !Kp(c);
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
var qo = "__zr_style_" + Math.round(Math.random() * 10), vr = {
  shadowBlur: 0,
  shadowOffsetX: 0,
  shadowOffsetY: 0,
  shadowColor: "#000",
  opacity: 1,
  blend: "source-over"
}, ca = {
  style: {
    shadowBlur: !0,
    shadowOffsetX: !0,
    shadowOffsetY: !0,
    shadowColor: !0,
    opacity: !0
  }
};
vr[qo] = !0;
var ku = ["z", "z2", "invisible"], Qp = ["invisible"], Jp = function(r) {
  J(t, r);
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
    if (this.ignore || this.invisible || this.style.opacity === 0 || this.culling && jp(this, e, i) || o && !o[0] && !o[3])
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
      e = this._paintRect || (this._paintRect = new tt(0, 0, 0, 0)), i ? tt.applyTransform(e, n, i) : e.copy(n), (o || s || u) && (e.width += o * 2 + Math.abs(s), e.height += o * 2 + Math.abs(u), e.x = Math.min(e.x, e.x + s - o), e.y = Math.min(e.y, e.y + u - o));
      var l = this.dirtyRectTolerance;
      e.isZero() || (e.x = Math.floor(e.x - l), e.y = Math.floor(e.y - l), e.width = Math.ceil(e.width + 1 + l * 2), e.height = Math.ceil(e.height + 1 + l * 2));
    }
    return e;
  }, t.prototype.setPrevPaintRect = function(e) {
    e ? (this._prevPaintRect = this._prevPaintRect || new tt(0, 0, 0, 0), this._prevPaintRect.copy(e)) : this._prevPaintRect = null;
  }, t.prototype.getPrevPaintRect = function() {
    return this._prevPaintRect;
  }, t.prototype.animateStyle = function(e) {
    return this.animate("style", e);
  }, t.prototype.updateDuringAnimation = function(e) {
    e === "style" ? this.dirtyStyle() : this.markRedraw();
  }, t.prototype.attrKV = function(e, i) {
    e !== "style" ? r.prototype.attrKV.call(this, e, i) : this.style ? this.setStyle(i) : this.useStyle(i);
  }, t.prototype.setStyle = function(e, i) {
    return typeof e == "string" ? this.style[e] = i : O(this.style, e), this.dirtyStyle(), this;
  }, t.prototype.dirtyStyle = function(e) {
    e || this.markRedraw(), this.__dirty |= Ci, this._rect && (this._rect = null);
  }, t.prototype.dirty = function() {
    this.dirtyStyle();
  }, t.prototype.styleChanged = function() {
    return !!(this.__dirty & Ci);
  }, t.prototype.styleUpdated = function() {
    this.__dirty &= ~Ci;
  }, t.prototype.createStyle = function(e) {
    return sa(vr, e);
  }, t.prototype.useStyle = function(e) {
    e[qo] || (e = this.createStyle(e)), this.__inHover ? this.__hoverStyle = e : this.style = e, this.dirtyStyle();
  }, t.prototype.isStyleObject = function(e) {
    return e[qo];
  }, t.prototype._innerSaveToNormal = function(e) {
    r.prototype._innerSaveToNormal.call(this, e);
    var i = this._normalState;
    e.style && !i.style && (i.style = this._mergeStyle(this.createStyle(), this.style)), this._savePrimaryToNormal(e, i, ku);
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
    for (var _ = this.__inHover ? Qp : ku, c = 0; c < _.length; c++) {
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
    return O(e, i), e;
  }, t.prototype.getAnimationStyleProps = function() {
    return ca;
  }, t.initDefaultProps = function() {
    var e = t.prototype;
    e.type = "displayable", e.invisible = !1, e.z = 0, e.z2 = 0, e.zlevel = 0, e.culling = !1, e.cursor = "pointer", e.rectHover = !1, e.incremental = !1, e._rect = null, e.dirtyRectTolerance = 0, e.__dirty = Ht | Ci;
  }(), t;
}(vh), Xa = new tt(0, 0, 0, 0), qa = new tt(0, 0, 0, 0);
function jp(r, t, e) {
  return Xa.copy(r.getBoundingRect()), r.transform && Xa.applyTransform(r.transform), qa.width = t, qa.height = e, !Xa.intersect(qa);
}
const da = Jp;
var Qt = Math.min, Jt = Math.max, Za = Math.sin, Ka = Math.cos, $e = Math.PI * 2, ji = Jr(), tn = Jr(), en = Jr();
function Fu(r, t, e, i, n, a) {
  n[0] = Qt(r, e), n[1] = Qt(t, i), a[0] = Jt(r, e), a[1] = Jt(t, i);
}
var Vu = [], zu = [];
function tg(r, t, e, i, n, a, o, s, u, l) {
  var f = jf, h = Dt, c = f(r, e, n, o, Vu);
  u[0] = 1 / 0, u[1] = 1 / 0, l[0] = -1 / 0, l[1] = -1 / 0;
  for (var v = 0; v < c; v++) {
    var d = h(r, e, n, o, Vu[v]);
    u[0] = Qt(d, u[0]), l[0] = Jt(d, l[0]);
  }
  c = f(t, i, a, s, zu);
  for (var v = 0; v < c; v++) {
    var _ = h(t, i, a, s, zu[v]);
    u[1] = Qt(_, u[1]), l[1] = Jt(_, l[1]);
  }
  u[0] = Qt(r, u[0]), l[0] = Jt(r, l[0]), u[0] = Qt(o, u[0]), l[0] = Jt(o, l[0]), u[1] = Qt(t, u[1]), l[1] = Jt(t, l[1]), u[1] = Qt(s, u[1]), l[1] = Jt(s, l[1]);
}
function eg(r, t, e, i, n, a, o, s) {
  var u = eh, l = xt, f = Jt(Qt(u(r, e, n), 1), 0), h = Jt(Qt(u(t, i, a), 1), 0), c = l(r, e, n, f), v = l(t, i, a, h);
  o[0] = Qt(r, n, c), o[1] = Qt(t, a, v), s[0] = Jt(r, n, c), s[1] = Jt(t, a, v);
}
function rg(r, t, e, i, n, a, o, s, u) {
  var l = Ar, f = Or, h = Math.abs(n - a);
  if (h % $e < 1e-4 && h > 1e-4) {
    s[0] = r - e, s[1] = t - i, u[0] = r + e, u[1] = t + i;
    return;
  }
  if (ji[0] = Ka(n) * e + r, ji[1] = Za(n) * i + t, tn[0] = Ka(a) * e + r, tn[1] = Za(a) * i + t, l(s, ji, tn), f(u, ji, tn), n = n % $e, n < 0 && (n = n + $e), a = a % $e, a < 0 && (a = a + $e), n > a && !o ? a += $e : n < a && o && (n += $e), o) {
    var c = a;
    a = n, n = c;
  }
  for (var v = 0; v < a; v += Math.PI / 2)
    v > n && (en[0] = Ka(v) * e + r, en[1] = Za(v) * i + t, l(s, en, s), f(u, en, u));
}
var X = {
  M: 1,
  L: 2,
  C: 3,
  Q: 4,
  A: 5,
  Z: 6,
  R: 7
}, Xe = [], qe = [], ne = [], Pe = [], ae = [], oe = [], Qa = Math.min, Ja = Math.max, Ze = Math.cos, Ke = Math.sin, ye = Math.abs, Zo = Math.PI, Oe = Zo * 2, ja = typeof Float32Array < "u", li = [];
function to(r) {
  var t = Math.round(r / Zo * 1e8) / 1e8;
  return t % 2 * Zo;
}
function ig(r, t) {
  var e = to(r[0]);
  e < 0 && (e += Oe);
  var i = e - r[0], n = r[1];
  n += i, !t && n - e >= Oe ? n = e + Oe : t && e - n >= Oe ? n = e - Oe : !t && e > n ? n = e + (Oe - to(e - n)) : t && e < n && (n = e - (Oe - to(n - e))), r[0] = e, r[1] = n;
}
var ng = function() {
  function r(t) {
    this.dpr = 1, this._xi = 0, this._yi = 0, this._x0 = 0, this._y0 = 0, this._len = 0, t && (this._saveData = !1), this._saveData && (this.data = []);
  }
  return r.prototype.increaseVersion = function() {
    this._version++;
  }, r.prototype.getVersion = function() {
    return this._version;
  }, r.prototype.setScale = function(t, e, i) {
    i = i || 0, i > 0 && (this._ux = ye(i / Hn / t) || 0, this._uy = ye(i / Hn / e) || 0);
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
    return this._drawPendingPt(), this.addData(X.M, t, e), this._ctx && this._ctx.moveTo(t, e), this._x0 = t, this._y0 = e, this._xi = t, this._yi = e, this;
  }, r.prototype.lineTo = function(t, e) {
    var i = ye(t - this._xi), n = ye(e - this._yi), a = i > this._ux || n > this._uy;
    if (this.addData(X.L, t, e), this._ctx && a && this._ctx.lineTo(t, e), a)
      this._xi = t, this._yi = e, this._pendingPtDist = 0;
    else {
      var o = i * i + n * n;
      o > this._pendingPtDist && (this._pendingPtX = t, this._pendingPtY = e, this._pendingPtDist = o);
    }
    return this;
  }, r.prototype.bezierCurveTo = function(t, e, i, n, a, o) {
    return this._drawPendingPt(), this.addData(X.C, t, e, i, n, a, o), this._ctx && this._ctx.bezierCurveTo(t, e, i, n, a, o), this._xi = a, this._yi = o, this;
  }, r.prototype.quadraticCurveTo = function(t, e, i, n) {
    return this._drawPendingPt(), this.addData(X.Q, t, e, i, n), this._ctx && this._ctx.quadraticCurveTo(t, e, i, n), this._xi = i, this._yi = n, this;
  }, r.prototype.arc = function(t, e, i, n, a, o) {
    this._drawPendingPt(), li[0] = n, li[1] = a, ig(li, o), n = li[0], a = li[1];
    var s = a - n;
    return this.addData(X.A, t, e, i, i, n, s, 0, o ? 0 : 1), this._ctx && this._ctx.arc(t, e, i, n, a, o), this._xi = Ze(a) * i + t, this._yi = Ke(a) * i + e, this;
  }, r.prototype.arcTo = function(t, e, i, n, a) {
    return this._drawPendingPt(), this._ctx && this._ctx.arcTo(t, e, i, n, a), this;
  }, r.prototype.rect = function(t, e, i, n) {
    return this._drawPendingPt(), this._ctx && this._ctx.rect(t, e, i, n), this.addData(X.R, t, e, i, n), this;
  }, r.prototype.closePath = function() {
    this._drawPendingPt(), this.addData(X.Z);
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
    !(this.data && this.data.length === e) && ja && (this.data = new Float32Array(e));
    for (var i = 0; i < e; i++)
      this.data[i] = t[i];
    this._len = e;
  }, r.prototype.appendPath = function(t) {
    t instanceof Array || (t = [t]);
    for (var e = t.length, i = 0, n = this._len, a = 0; a < e; a++)
      i += t[a].len();
    ja && this.data instanceof Float32Array && (this.data = new Float32Array(n + i));
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
      t instanceof Array && (t.length = this._len, ja && this._len > 11 && (this.data = new Float32Array(t)));
    }
  }, r.prototype.getBoundingRect = function() {
    ne[0] = ne[1] = ae[0] = ae[1] = Number.MAX_VALUE, Pe[0] = Pe[1] = oe[0] = oe[1] = -Number.MAX_VALUE;
    var t = this.data, e = 0, i = 0, n = 0, a = 0, o;
    for (o = 0; o < this._len; ) {
      var s = t[o++], u = o === 1;
      switch (u && (e = t[o], i = t[o + 1], n = e, a = i), s) {
        case X.M:
          e = n = t[o++], i = a = t[o++], ae[0] = n, ae[1] = a, oe[0] = n, oe[1] = a;
          break;
        case X.L:
          Fu(e, i, t[o], t[o + 1], ae, oe), e = t[o++], i = t[o++];
          break;
        case X.C:
          tg(e, i, t[o++], t[o++], t[o++], t[o++], t[o], t[o + 1], ae, oe), e = t[o++], i = t[o++];
          break;
        case X.Q:
          eg(e, i, t[o++], t[o++], t[o], t[o + 1], ae, oe), e = t[o++], i = t[o++];
          break;
        case X.A:
          var l = t[o++], f = t[o++], h = t[o++], c = t[o++], v = t[o++], d = t[o++] + v;
          o += 1;
          var _ = !t[o++];
          u && (n = Ze(v) * h + l, a = Ke(v) * c + f), rg(l, f, h, c, v, d, _, ae, oe), e = Ze(d) * h + l, i = Ke(d) * c + f;
          break;
        case X.R:
          n = e = t[o++], a = i = t[o++];
          var p = t[o++], g = t[o++];
          Fu(n, a, n + p, a + g, ae, oe);
          break;
        case X.Z:
          e = n, i = a;
          break;
      }
      Ar(ne, ne, ae), Or(Pe, Pe, oe);
    }
    return o === 0 && (ne[0] = ne[1] = Pe[0] = Pe[1] = 0), new tt(ne[0], ne[1], Pe[0] - ne[0], Pe[1] - ne[1]);
  }, r.prototype._calculateLength = function() {
    var t = this.data, e = this._len, i = this._ux, n = this._uy, a = 0, o = 0, s = 0, u = 0;
    this._pathSegLen || (this._pathSegLen = []);
    for (var l = this._pathSegLen, f = 0, h = 0, c = 0; c < e; ) {
      var v = t[c++], d = c === 1;
      d && (a = t[c], o = t[c + 1], s = a, u = o);
      var _ = -1;
      switch (v) {
        case X.M:
          a = s = t[c++], o = u = t[c++];
          break;
        case X.L: {
          var p = t[c++], g = t[c++], y = p - a, m = g - o;
          (ye(y) > i || ye(m) > n || c === e - 1) && (_ = Math.sqrt(y * y + m * m), a = p, o = g);
          break;
        }
        case X.C: {
          var w = t[c++], T = t[c++], p = t[c++], g = t[c++], S = t[c++], D = t[c++];
          _ = wd(a, o, w, T, p, g, S, D, 10), a = S, o = D;
          break;
        }
        case X.Q: {
          var w = t[c++], T = t[c++], p = t[c++], g = t[c++];
          _ = Td(a, o, w, T, p, g, 10), a = p, o = g;
          break;
        }
        case X.A:
          var C = t[c++], b = t[c++], M = t[c++], E = t[c++], P = t[c++], x = t[c++], R = x + P;
          c += 1, t[c++], d && (s = Ze(P) * M + C, u = Ke(P) * E + b), _ = Ja(M, E) * Qa(Oe, Math.abs(x)), a = Ze(R) * M + C, o = Ke(R) * E + b;
          break;
        case X.R: {
          s = a = t[c++], u = o = t[c++];
          var B = t[c++], A = t[c++];
          _ = B * 2 + A * 2;
          break;
        }
        case X.Z: {
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
          switch (C && (l = i[S], f = i[S + 1], s = l, u = f), D !== X.L && m > 0 && (t.lineTo(w, T), m = 0), D) {
            case X.M:
              s = l = i[S++], u = f = i[S++], t.moveTo(l, f);
              break;
            case X.L: {
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
            case X.C: {
              var R = i[S++], B = i[S++], A = i[S++], at = i[S++], I = i[S++], N = i[S++];
              if (v) {
                var E = d[g++];
                if (p + E > y) {
                  var P = (y - p) / E;
                  hu(l, R, A, I, P, Xe), hu(f, B, at, N, P, qe), t.bezierCurveTo(Xe[1], qe[1], Xe[2], qe[2], Xe[3], qe[3]);
                  break t;
                }
                p += E;
              }
              t.bezierCurveTo(R, B, A, at, I, N), l = I, f = N;
              break;
            }
            case X.Q: {
              var R = i[S++], B = i[S++], A = i[S++], at = i[S++];
              if (v) {
                var E = d[g++];
                if (p + E > y) {
                  var P = (y - p) / E;
                  vu(l, R, A, P, Xe), vu(f, B, at, P, qe), t.quadraticCurveTo(Xe[1], qe[1], Xe[2], qe[2]);
                  break t;
                }
                p += E;
              }
              t.quadraticCurveTo(R, B, A, at), l = A, f = at;
              break;
            }
            case X.A:
              var k = i[S++], Y = i[S++], z = i[S++], H = i[S++], j = i[S++], K = i[S++], vt = i[S++], nt = !i[S++], ct = z > H ? z : H, Lt = ye(z - H) > 1e-3, dt = j + K, ie = !1;
              if (v) {
                var E = d[g++];
                p + E > y && (dt = j + K * (y - p) / E, ie = !0), p += E;
              }
              if (Lt && t.ellipse ? t.ellipse(k, Y, z, H, vt, j, dt, nt) : t.arc(k, Y, ct, j, dt, nt), ie)
                break t;
              C && (s = Ze(j) * z + k, u = Ke(j) * H + Y), l = Ze(dt) * z + k, f = Ke(dt) * H + Y;
              break;
            case X.R:
              s = l = i[S], u = f = i[S + 1], h = i[S++], c = i[S++];
              var Bt = i[S++], ge = i[S++];
              if (v) {
                var E = d[g++];
                if (p + E > y) {
                  var ot = y - p;
                  t.moveTo(h, c), t.lineTo(h + Qa(ot, Bt), c), ot -= Bt, ot > 0 && t.lineTo(h + Bt, c + Qa(ot, ge)), ot -= ge, ot > 0 && t.lineTo(h + Ja(Bt - ot, 0), c + ge), ot -= Bt, ot > 0 && t.lineTo(h, c + Ja(ge - ot, 0));
                  break t;
                }
                p += E;
              }
              t.rect(h, c, Bt, ge);
              break;
            case X.Z:
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
  }, r.CMD = X, r.initDefaultProps = function() {
    var t = r.prototype;
    t._saveData = !0, t._ux = 0, t._uy = 0, t._pendingPtDist = 0, t._version = 0;
  }(), r;
}();
const gr = ng;
function Dr(r, t, e, i, n, a, o) {
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
function ag(r, t, e, i, n, a, o, s, u, l, f) {
  if (u === 0)
    return !1;
  var h = u;
  if (f > t + h && f > i + h && f > a + h && f > s + h || f < t - h && f < i - h && f < a - h && f < s - h || l > r + h && l > e + h && l > n + h && l > o + h || l < r - h && l < e - h && l < n - h && l < o - h)
    return !1;
  var c = th(r, t, e, i, n, a, o, s, l, f, null);
  return c <= h / 2;
}
function og(r, t, e, i, n, a, o, s, u) {
  if (o === 0)
    return !1;
  var l = o;
  if (u > t + l && u > i + l && u > a + l || u < t - l && u < i - l && u < a - l || s > r + l && s > e + l && s > n + l || s < r - l && s < e - l && s < n - l)
    return !1;
  var f = rh(r, t, e, i, n, a, s, u, null);
  return f <= l / 2;
}
var Hu = Math.PI * 2;
function De(r) {
  return r %= Hu, r < 0 && (r += Hu), r;
}
var fi = Math.PI * 2;
function sg(r, t, e, i, n, a, o, s, u) {
  if (o === 0)
    return !1;
  var l = o;
  s -= r, u -= t;
  var f = Math.sqrt(s * s + u * u);
  if (f - l > e || f + l < e)
    return !1;
  if (Math.abs(i - n) % fi < 1e-4)
    return !0;
  if (a) {
    var h = i;
    i = De(n), n = De(h);
  } else
    i = De(i), n = De(n);
  i > n && (n += fi);
  var c = Math.atan2(u, s);
  return c < 0 && (c += fi), c >= i && c <= n || c + fi >= i && c + fi <= n;
}
function Qe(r, t, e, i, n, a) {
  if (a > t && a > i || a < t && a < i || i === t)
    return 0;
  var o = (a - t) / (i - t), s = i < t ? 1 : -1;
  (o === 1 || o === 0) && (s = i < t ? 0.5 : -0.5);
  var u = o * (e - r) + r;
  return u === n ? 1 / 0 : u > n ? s : 0;
}
var xe = gr.CMD, Je = Math.PI * 2, ug = 1e-4;
function lg(r, t) {
  return Math.abs(r - t) < ug;
}
var Ct = [-1, -1, -1], Zt = [-1, -1];
function fg() {
  var r = Zt[0];
  Zt[0] = Zt[1], Zt[1] = r;
}
function hg(r, t, e, i, n, a, o, s, u, l) {
  if (l > t && l > i && l > a && l > s || l < t && l < i && l < a && l < s)
    return 0;
  var f = Jf(t, i, a, s, l, Ct);
  if (f === 0)
    return 0;
  for (var h = 0, c = -1, v = void 0, d = void 0, _ = 0; _ < f; _++) {
    var p = Ct[_], g = p === 0 || p === 1 ? 0.5 : 1, y = Dt(r, e, n, o, p);
    y < u || (c < 0 && (c = jf(t, i, a, s, Zt), Zt[1] < Zt[0] && c > 1 && fg(), v = Dt(t, i, a, s, Zt[0]), c > 1 && (d = Dt(t, i, a, s, Zt[1]))), c === 2 ? p < Zt[0] ? h += v < t ? g : -g : p < Zt[1] ? h += d < v ? g : -g : h += s < d ? g : -g : p < Zt[0] ? h += v < t ? g : -g : h += s < v ? g : -g);
  }
  return h;
}
function vg(r, t, e, i, n, a, o, s) {
  if (s > t && s > i && s > a || s < t && s < i && s < a)
    return 0;
  var u = Sd(t, i, a, s, Ct);
  if (u === 0)
    return 0;
  var l = eh(t, i, a);
  if (l >= 0 && l <= 1) {
    for (var f = 0, h = xt(t, i, a, l), c = 0; c < u; c++) {
      var v = Ct[c] === 0 || Ct[c] === 1 ? 0.5 : 1, d = xt(r, e, n, Ct[c]);
      d < o || (Ct[c] < l ? f += h < t ? v : -v : f += a < h ? v : -v);
    }
    return f;
  } else {
    var v = Ct[0] === 0 || Ct[0] === 1 ? 0.5 : 1, d = xt(r, e, n, Ct[0]);
    return d < o ? 0 : a < t ? v : -v;
  }
}
function cg(r, t, e, i, n, a, o, s) {
  if (s -= t, s > e || s < -e)
    return 0;
  var u = Math.sqrt(e * e - s * s);
  Ct[0] = -u, Ct[1] = u;
  var l = Math.abs(i - n);
  if (l < 1e-4)
    return 0;
  if (l >= Je - 1e-4) {
    i = 0, n = Je;
    var f = a ? 1 : -1;
    return o >= Ct[0] + r && o <= Ct[1] + r ? f : 0;
  }
  if (i > n) {
    var h = i;
    i = n, n = h;
  }
  i < 0 && (i += Je, n += Je);
  for (var c = 0, v = 0; v < 2; v++) {
    var d = Ct[v];
    if (d + r > o) {
      var _ = Math.atan2(s, d), f = a ? 1 : -1;
      _ < 0 && (_ = Je + _), (_ >= i && _ <= n || _ + Je >= i && _ + Je <= n) && (_ > Math.PI / 2 && _ < Math.PI * 1.5 && (f = -f), c += f);
    }
  }
  return c;
}
function Lh(r, t, e, i, n) {
  for (var a = r.data, o = r.len(), s = 0, u = 0, l = 0, f = 0, h = 0, c, v, d = 0; d < o; ) {
    var _ = a[d++], p = d === 1;
    switch (_ === xe.M && d > 1 && (e || (s += Qe(u, l, f, h, i, n))), p && (u = a[d], l = a[d + 1], f = u, h = l), _) {
      case xe.M:
        f = a[d++], h = a[d++], u = f, l = h;
        break;
      case xe.L:
        if (e) {
          if (Dr(u, l, a[d], a[d + 1], t, i, n))
            return !0;
        } else
          s += Qe(u, l, a[d], a[d + 1], i, n) || 0;
        u = a[d++], l = a[d++];
        break;
      case xe.C:
        if (e) {
          if (ag(u, l, a[d++], a[d++], a[d++], a[d++], a[d], a[d + 1], t, i, n))
            return !0;
        } else
          s += hg(u, l, a[d++], a[d++], a[d++], a[d++], a[d], a[d + 1], i, n) || 0;
        u = a[d++], l = a[d++];
        break;
      case xe.Q:
        if (e) {
          if (og(u, l, a[d++], a[d++], a[d], a[d + 1], t, i, n))
            return !0;
        } else
          s += vg(u, l, a[d++], a[d++], a[d], a[d + 1], i, n) || 0;
        u = a[d++], l = a[d++];
        break;
      case xe.A:
        var g = a[d++], y = a[d++], m = a[d++], w = a[d++], T = a[d++], S = a[d++];
        d += 1;
        var D = !!(1 - a[d++]);
        c = Math.cos(T) * m + g, v = Math.sin(T) * w + y, p ? (f = c, h = v) : s += Qe(u, l, c, v, i, n);
        var C = (i - g) * w / m + g;
        if (e) {
          if (sg(g, y, w, T, T + S, D, t, C, n))
            return !0;
        } else
          s += cg(g, y, w, T, T + S, D, C, n);
        u = Math.cos(T + S) * m + g, l = Math.sin(T + S) * w + y;
        break;
      case xe.R:
        f = u = a[d++], h = l = a[d++];
        var b = a[d++], M = a[d++];
        if (c = f + b, v = h + M, e) {
          if (Dr(f, h, c, h, t, i, n) || Dr(c, h, c, v, t, i, n) || Dr(c, v, f, v, t, i, n) || Dr(f, v, f, h, t, i, n))
            return !0;
        } else
          s += Qe(c, h, c, v, i, n), s += Qe(f, v, f, h, i, n);
        break;
      case xe.Z:
        if (e) {
          if (Dr(u, l, f, h, t, i, n))
            return !0;
        } else
          s += Qe(u, l, f, h, i, n);
        u = f, l = h;
        break;
    }
  }
  return !e && !lg(l, h) && (s += Qe(u, l, f, h, i, n) || 0), s !== 0;
}
function dg(r, t, e) {
  return Lh(r, 0, !1, t, e);
}
function pg(r, t, e, i) {
  return Lh(r, t, !0, e, i);
}
var Ph = Mt({
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
}, vr), gg = {
  style: Mt({
    fill: !0,
    stroke: !0,
    strokePercent: !0,
    fillOpacity: !0,
    strokeOpacity: !0,
    lineDashOffset: !0,
    lineWidth: !0,
    miterLimit: !0
  }, ca.style)
}, eo = ki.concat([
  "invisible",
  "culling",
  "z",
  "z2",
  "zlevel",
  "parent"
]), _g = function(r) {
  J(t, r);
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
      for (var s = 0; s < eo.length; ++s)
        n[eo[s]] = this[eo[s]];
      n.__dirty |= Ht;
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
      o === "style" ? this.style ? O(this.style, s) : this.useStyle(s) : o === "shape" ? O(this.shape, s) : r.prototype.attrKV.call(this, o, s);
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
      if (q(e)) {
        var i = zn(e, 0);
        return i > 0.5 ? Uo : i > 0.2 ? $d : Go;
      } else if (e)
        return Go;
    }
    return Uo;
  }, t.prototype.getInsideTextStroke = function(e) {
    var i = this.style.fill;
    if (q(i)) {
      var n = this.__zr, a = !!(n && n.isDarkMode()), o = zn(e, 0) < Ho;
      if (a === o)
        return i;
    }
  }, t.prototype.buildPath = function(e, i, n) {
  }, t.prototype.pathUpdated = function() {
    this.__dirty &= ~Rr;
  }, t.prototype.getUpdatedPathProxy = function(e) {
    return !this.path && this.createPathProxy(), this.path.beginPath(), this.buildPath(this.path, this.shape, e), this.path;
  }, t.prototype.createPathProxy = function() {
    this.path = new gr(!1);
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
      (a || this.__dirty & Rr) && (o.beginPath(), this.buildPath(o, this.shape, !1), this.pathUpdated()), e = o.getBoundingRect();
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
        if (l > 1e-10 && (this.hasFill() || (u = Math.max(u, this.strokeContainThreshold)), pg(s, u / l, e, i)))
          return !0;
      }
      if (this.hasFill())
        return dg(s, e, i);
    }
    return !1;
  }, t.prototype.dirtyShape = function() {
    this.__dirty |= Rr, this._rect && (this._rect = null), this._decalEl && this._decalEl.dirtyShape(), this.markRedraw();
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
    return n || (n = this.shape = {}), typeof e == "string" ? n[e] = i : O(n, e), this.dirtyShape(), this;
  }, t.prototype.shapeChanged = function() {
    return !!(this.__dirty & Rr);
  }, t.prototype.createStyle = function(e) {
    return sa(Ph, e);
  }, t.prototype._innerSaveToNormal = function(e) {
    r.prototype._innerSaveToNormal.call(this, e);
    var i = this._normalState;
    e.shape && !i.shape && (i.shape = O({}, this.shape));
  }, t.prototype._applyStateObj = function(e, i, n, a, o, s) {
    r.prototype._applyStateObj.call(this, e, i, n, a, o, s);
    var u = !(i && a), l;
    if (i && i.shape ? o ? a ? l = i.shape : (l = O({}, n.shape), O(l, i.shape)) : (l = O({}, a ? this.shape : n.shape), O(l, i.shape)) : u && (l = n.shape), l)
      if (o) {
        this.shape = O({}, this.shape);
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
    return gg;
  }, t.prototype.isZeroArea = function() {
    return !1;
  }, t.extend = function(e) {
    var i = function(a) {
      J(o, a);
      function o(s) {
        var u = a.call(this, s) || this;
        return e.init && e.init.call(u, s), u;
      }
      return o.prototype.getDefaultStyle = function() {
        return Z(e.style);
      }, o.prototype.getDefaultShape = function() {
        return Z(e.shape);
      }, o;
    }(t);
    for (var n in e)
      typeof e[n] == "function" && (i.prototype[n] = e[n]);
    return i;
  }, t.initDefaultProps = function() {
    var e = t.prototype;
    e.type = "path", e.strokeContainThreshold = 5, e.segmentIgnoreThreshold = 0, e.subPixelOptimize = !1, e.autoBatch = !1, e.__dirty = Ht | Ci | Rr;
  }(), t;
}(da);
const ht = _g;
var yg = Mt({
  strokeFirst: !0,
  font: pr,
  x: 0,
  y: 0,
  textAlign: "left",
  textBaseline: "top",
  miterLimit: 2
}, Ph), xh = function(r) {
  J(t, r);
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
    return sa(yg, e);
  }, t.prototype.setBoundingRect = function(e) {
    this._rect = e;
  }, t.prototype.getBoundingRect = function() {
    var e = this.style;
    if (!this._rect) {
      var i = e.text;
      i != null ? i += "" : i = "";
      var n = Zd(i, e.font, e.textAlign, e.textBaseline);
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
}(da);
xh.prototype.type = "tspan";
const Ko = xh;
var mg = Mt({
  x: 0,
  y: 0
}, vr), wg = {
  style: Mt({
    x: !0,
    y: !0,
    width: !0,
    height: !0,
    sx: !0,
    sy: !0,
    sWidth: !0,
    sHeight: !0
  }, ca.style)
};
function Sg(r) {
  return !!(r && typeof r != "string" && r.width && r.height);
}
var Rh = function(r) {
  J(t, r);
  function t() {
    return r !== null && r.apply(this, arguments) || this;
  }
  return t.prototype.createStyle = function(e) {
    return sa(mg, e);
  }, t.prototype._getSize = function(e) {
    var i = this.style, n = i[e];
    if (n != null)
      return n;
    var a = Sg(i.image) ? i.image : this.__image;
    if (!a)
      return 0;
    var o = e === "width" ? "height" : "width", s = i[o];
    return s == null ? a[e] : a[e] / a[o] * s;
  }, t.prototype.getWidth = function() {
    return this._getSize("width");
  }, t.prototype.getHeight = function() {
    return this._getSize("height");
  }, t.prototype.getAnimationStyleProps = function() {
    return wg;
  }, t.prototype.getBoundingRect = function() {
    var e = this.style;
    return this._rect || (this._rect = new tt(e.x || 0, e.y || 0, this.getWidth(), this.getHeight())), this._rect;
  }, t;
}(da);
Rh.prototype.type = "image";
const pa = Rh;
function Tg(r, t) {
  var e = t.x, i = t.y, n = t.width, a = t.height, o = t.r, s, u, l, f;
  n < 0 && (e = e + n, n = -n), a < 0 && (i = i + a, a = -a), typeof o == "number" ? s = u = l = f = o : o instanceof Array ? o.length === 1 ? s = u = l = f = o[0] : o.length === 2 ? (s = l = o[0], u = f = o[1]) : o.length === 3 ? (s = o[0], u = f = o[1], l = o[2]) : (s = o[0], u = o[1], l = o[2], f = o[3]) : s = u = l = f = 0;
  var h;
  s + u > n && (h = s + u, s *= n / h, u *= n / h), l + f > n && (h = l + f, l *= n / h, f *= n / h), u + l > a && (h = u + l, u *= a / h, l *= a / h), s + f > a && (h = s + f, s *= a / h, f *= a / h), r.moveTo(e + s, i), r.lineTo(e + n - u, i), u !== 0 && r.arc(e + n - u, i + u, u, -Math.PI / 2, 0), r.lineTo(e + n, i + a - l), l !== 0 && r.arc(e + n - l, i + a - l, l, 0, Math.PI / 2), r.lineTo(e + f, i + a), f !== 0 && r.arc(e + f, i + a - f, f, Math.PI / 2, Math.PI), r.lineTo(e, i + s), s !== 0 && r.arc(e + s, i + s, s, Math.PI, Math.PI * 1.5);
}
var kr = Math.round;
function Dg(r, t, e) {
  if (t) {
    var i = t.x1, n = t.x2, a = t.y1, o = t.y2;
    r.x1 = i, r.x2 = n, r.y1 = a, r.y2 = o;
    var s = e && e.lineWidth;
    return s && (kr(i * 2) === kr(n * 2) && (r.x1 = r.x2 = Fr(i, s, !0)), kr(a * 2) === kr(o * 2) && (r.y1 = r.y2 = Fr(a, s, !0))), r;
  }
}
function Cg(r, t, e) {
  if (t) {
    var i = t.x, n = t.y, a = t.width, o = t.height;
    r.x = i, r.y = n, r.width = a, r.height = o;
    var s = e && e.lineWidth;
    return s && (r.x = Fr(i, s, !0), r.y = Fr(n, s, !0), r.width = Math.max(Fr(i + a, s, !1) - r.x, a === 0 ? 0 : 1), r.height = Math.max(Fr(n + o, s, !1) - r.y, o === 0 ? 0 : 1)), r;
  }
}
function Fr(r, t, e) {
  if (!t)
    return r;
  var i = kr(r * 2);
  return (i + kr(t)) % 2 === 0 ? i / 2 : (i + (e ? 1 : -1)) / 2;
}
var bg = function() {
  function r() {
    this.x = 0, this.y = 0, this.width = 0, this.height = 0;
  }
  return r;
}(), Eg = {}, Ih = function(r) {
  J(t, r);
  function t(e) {
    return r.call(this, e) || this;
  }
  return t.prototype.getDefaultShape = function() {
    return new bg();
  }, t.prototype.buildPath = function(e, i) {
    var n, a, o, s;
    if (this.subPixelOptimize) {
      var u = Cg(Eg, i, this.style);
      n = u.x, a = u.y, o = u.width, s = u.height, u.r = i.r, i = u;
    } else
      n = i.x, a = i.y, o = i.width, s = i.height;
    i.r ? Tg(e, i) : e.rect(n, a, o, s);
  }, t.prototype.isZeroArea = function() {
    return !this.shape.width || !this.shape.height;
  }, t;
}(ht);
Ih.prototype.type = "rect";
const Ce = Ih;
var Uu = {
  fill: "#000"
}, Gu = 2, Mg = {
  style: Mt({
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
  }, ca.style)
}, Ah = function(r) {
  J(t, r);
  function t(e) {
    var i = r.call(this) || this;
    return i.type = "text", i._children = [], i._defaultStyle = Uu, i.attr(e), i;
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
    this._childCursor = 0, Ig(this.style), this.style.rich ? this._updateRichTexts() : this._updatePlainTexts(), this._children.length = this._childCursor, this.styleUpdated();
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
      for (var e = new tt(0, 0, 0, 0), i = this._children, n = [], a = null, o = 0; o < i.length; o++) {
        var s = i[o], u = s.getBoundingRect(), l = s.getLocalTransform(n);
        l ? (e.copy(u), e.applyTransform(l), a = a || e.clone(), a.union(e)) : (a = a || u.clone(), a.union(u));
      }
      this._rect = a || e;
    }
    return this._rect;
  }, t.prototype.setDefaultTextStyle = function(e) {
    this._defaultStyle = e || Uu;
  }, t.prototype.setTextContent = function(e) {
    if (process.env.NODE_ENV !== "production")
      throw new Error("Can't attach text on another text");
  }, t.prototype._mergeStyle = function(e, i) {
    if (!i)
      return e;
    var n = i.rich, a = e.rich || n && {};
    return O(e, i), n && a ? (this._mergeRich(a, n), e.rich = a) : a && (e.rich = a), e;
  }, t.prototype._mergeRich = function(e, i) {
    for (var n = lt(i), a = 0; a < n.length; a++) {
      var o = n[a];
      e[o] = e[o] || {}, O(e[o], i[o]);
    }
  }, t.prototype.getAnimationStyleProps = function() {
    return Mg;
  }, t.prototype._getOrCreateChild = function(e) {
    var i = this._children[this._childCursor];
    return (!i || !(i instanceof e)) && (i = new e()), this._children[this._childCursor++] = i, i.__zr = this.__zr, i.parent = this, i;
  }, t.prototype._updatePlainTexts = function() {
    var e = this.style, i = e.font || pr, n = e.padding, a = Ku(e), o = Yp(a, e), s = ro(e), u = !!e.backgroundColor, l = o.outerHeight, f = o.outerWidth, h = o.contentWidth, c = o.lines, v = o.lineHeight, d = this._defaultStyle, _ = e.x || 0, p = e.y || 0, g = e.align || d.align || "left", y = e.verticalAlign || d.verticalAlign || "top", m = _, w = Ir(p, o.contentHeight, y);
    if (s || n) {
      var T = Ei(_, f, g), S = Ir(p, l, y);
      s && this._renderBackground(e, e, T, S, f, l);
    }
    w += v / 2, n && (m = Zu(_, g, n), y === "top" ? w += n[0] : y === "bottom" && (w -= n[2]));
    for (var D = 0, C = !1, b = qu("fill" in e ? e.fill : (C = !0, d.fill)), M = Xu("stroke" in e ? e.stroke : !u && (!d.autoStroke || C) ? (D = Gu, d.stroke) : null), E = e.textShadowBlur > 0, P = e.width != null && (e.overflow === "truncate" || e.overflow === "break" || e.overflow === "breakAll"), x = o.calculatedLineHeight, R = 0; R < c.length; R++) {
      var B = this._getOrCreateChild(Ko), A = B.createStyle();
      B.useStyle(A), A.text = c[R], A.x = m, A.y = w, g && (A.textAlign = g), A.textBaseline = "middle", A.opacity = e.opacity, A.strokeFirst = !0, E && (A.shadowBlur = e.textShadowBlur || 0, A.shadowColor = e.textShadowColor || "transparent", A.shadowOffsetX = e.textShadowOffsetX || 0, A.shadowOffsetY = e.textShadowOffsetY || 0), A.stroke = M, A.fill = b, M && (A.lineWidth = e.lineWidth || D, A.lineDash = e.lineDash, A.lineDashOffset = e.lineDashOffset || 0), A.font = i, Wu(A, e), w += v, P && B.setBoundingRect(new tt(Ei(A.x, e.width, A.textAlign), Ir(A.y, x, A.textBaseline), h, x));
    }
  }, t.prototype._updateRichTexts = function() {
    var e = this.style, i = Ku(e), n = Xp(i, e), a = n.width, o = n.outerWidth, s = n.outerHeight, u = e.padding, l = e.x || 0, f = e.y || 0, h = this._defaultStyle, c = e.align || h.align, v = e.verticalAlign || h.verticalAlign, d = Ei(l, o, c), _ = Ir(f, s, v), p = d, g = _;
    u && (p += u[3], g += u[0]);
    var y = p + a;
    ro(e) && this._renderBackground(e, e, d, _, o, s);
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
    var c = !e.isLineHolder && ro(l);
    c && this._renderBackground(l, i, s === "right" ? o - e.width : s === "center" ? o - e.width / 2 : o, h - e.height / 2, e.width, e.height);
    var v = !!l.backgroundColor, d = e.textPadding;
    d && (o = Zu(o, s, d), h -= e.height / 2 - d[0] - e.innerHeight / 2);
    var _ = this._getOrCreateChild(Ko), p = _.createStyle();
    _.useStyle(p);
    var g = this._defaultStyle, y = !1, m = 0, w = qu("fill" in l ? l.fill : "fill" in i ? i.fill : (y = !0, g.fill)), T = Xu("stroke" in l ? l.stroke : "stroke" in i ? i.stroke : !v && !u && (!g.autoStroke || y) ? (m = Gu, g.stroke) : null), S = l.textShadowBlur > 0 || i.textShadowBlur > 0;
    p.text = e.text, p.x = o, p.y = h, S && (p.shadowBlur = l.textShadowBlur || i.textShadowBlur || 0, p.shadowColor = l.textShadowColor || i.textShadowColor || "transparent", p.shadowOffsetX = l.textShadowOffsetX || i.textShadowOffsetX || 0, p.shadowOffsetY = l.textShadowOffsetY || i.textShadowOffsetY || 0), p.textAlign = s, p.textBaseline = "middle", p.font = e.font || pr, p.opacity = Tn(l.opacity, i.opacity, 1), Wu(p, l), T && (p.lineWidth = Tn(l.lineWidth, i.lineWidth, m), p.lineDash = W(l.lineDash, i.lineDash), p.lineDashOffset = i.lineDashOffset || 0, p.stroke = T), w && (p.fill = w);
    var D = e.contentWidth, C = e.contentHeight;
    _.setBoundingRect(new tt(Ei(p.x, D, p.textAlign), Ir(p.y, C, p.textBaseline), D, C));
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
      p = this._getOrCreateChild(pa), p.onload = function() {
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
    w.shadowBlur = e.shadowBlur || 0, w.shadowColor = e.shadowColor || "transparent", w.shadowOffsetX = e.shadowOffsetX || 0, w.shadowOffsetY = e.shadowOffsetY || 0, w.opacity = Tn(e.opacity, i.opacity, 1);
  }, t.makeFont = function(e) {
    var i = "";
    return Rg(e) && (i = [
      e.fontStyle,
      e.fontWeight,
      xg(e.fontSize),
      e.fontFamily || "sans-serif"
    ].join(" ")), i && Ne(i) || e.textFont || e.font;
  }, t;
}(da), Lg = { left: !0, right: 1, center: 1 }, Pg = { top: 1, bottom: 1, middle: 1 }, Yu = ["fontStyle", "fontWeight", "fontSize", "fontFamily"];
function xg(r) {
  return typeof r == "string" && (r.indexOf("px") !== -1 || r.indexOf("rem") !== -1 || r.indexOf("em") !== -1) ? r : isNaN(+r) ? ms + "px" : r + "px";
}
function Wu(r, t) {
  for (var e = 0; e < Yu.length; e++) {
    var i = Yu[e], n = t[i];
    n != null && (r[i] = n);
  }
}
function Rg(r) {
  return r.fontSize != null || r.fontFamily || r.fontWeight;
}
function Ig(r) {
  return $u(r), L(r.rich, $u), r;
}
function $u(r) {
  if (r) {
    r.font = Ah.makeFont(r);
    var t = r.align;
    t === "middle" && (t = "center"), r.align = t == null || Lg[t] ? t : "left";
    var e = r.verticalAlign;
    e === "center" && (e = "middle"), r.verticalAlign = e == null || Pg[e] ? e : "top";
    var i = r.padding;
    i && (r.padding = xc(r.padding));
  }
}
function Xu(r, t) {
  return r == null || t <= 0 || r === "transparent" || r === "none" ? null : r.image || r.colorStops ? "#000" : r;
}
function qu(r) {
  return r == null || r === "none" ? null : r.image || r.colorStops ? "#000" : r;
}
function Zu(r, t, e) {
  return t === "right" ? r - e[1] : t === "center" ? r + e[3] / 2 - e[1] / 2 : r + e[3];
}
function Ku(r) {
  var t = r.text;
  return t != null && (t += ""), t;
}
function ro(r) {
  return !!(r.backgroundColor || r.lineHeight || r.borderWidth && r.borderColor);
}
const Un = Ah;
var Gt = _t(), Ag = function(r, t, e, i) {
  if (i) {
    var n = Gt(i);
    n.dataIndex = e, n.dataType = t, n.seriesIndex = r, i.type === "group" && i.traverse(function(a) {
      var o = Gt(a);
      o.seriesIndex = r, o.dataIndex = e, o.dataType = t;
    });
  }
}, Qu = 1, Ju = {}, Oh = _t(), Is = _t(), Nh = 0, As = 1, Os = 2, $r = ["emphasis", "blur", "select"], ju = ["normal", "emphasis", "blur", "select"], Og = 10, Ng = 9, cr = "highlight", Pn = "downplay", Oi = "select", xn = "unselect", Ni = "toggleSelect";
function Cr(r) {
  return r != null && r !== "none";
}
var tl = new Gi(100);
function el(r) {
  if (q(r)) {
    var t = tl.get(r);
    return t || (t = gu(r, -0.1), tl.put(r, t)), t;
  } else if (oa(r)) {
    var e = O({}, r);
    return e.colorStops = rt(r.colorStops, function(i) {
      return {
        offset: i.offset,
        color: gu(i.color, -0.1)
      };
    }), e;
  }
  return r;
}
function ga(r, t, e) {
  r.onHoverStateChange && (r.hoverState || 0) !== e && r.onHoverStateChange(t), r.hoverState = e;
}
function Bh(r) {
  ga(r, "emphasis", Os);
}
function kh(r) {
  r.hoverState === Os && ga(r, "normal", Nh);
}
function Ns(r) {
  ga(r, "blur", As);
}
function Fh(r) {
  r.hoverState === As && ga(r, "normal", Nh);
}
function Bg(r) {
  r.selected = !0;
}
function kg(r) {
  r.selected = !1;
}
function rl(r, t, e) {
  t(r, e);
}
function Me(r, t, e) {
  rl(r, t, e), r.isGroup && r.traverse(function(i) {
    rl(i, t, e);
  });
}
function Fg(r, t, e, i) {
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
function Vg(r, t, e, i) {
  var n = e && it(e, "select") >= 0, a = !1;
  if (r instanceof ht) {
    var o = Oh(r), s = n && o.selectFill || o.normalFill, u = n && o.selectStroke || o.normalStroke;
    if (Cr(s) || Cr(u)) {
      i = i || {};
      var l = i.style || {};
      l.fill === "inherit" ? (a = !0, i = O({}, i), l = O({}, l), l.fill = s) : !Cr(l.fill) && Cr(s) ? (a = !0, i = O({}, i), l = O({}, l), l.fill = el(s)) : !Cr(l.stroke) && Cr(u) && (a || (i = O({}, i), l = O({}, l)), l.stroke = el(u)), i.style = l;
    }
  }
  if (i && i.z2 == null) {
    a || (i = O({}, i));
    var f = r.z2EmphasisLift;
    i.z2 = r.z2 + (f ?? Og);
  }
  return i;
}
function zg(r, t, e) {
  if (e && e.z2 == null) {
    e = O({}, e);
    var i = r.z2SelectLift;
    e.z2 = r.z2 + (i ?? Ng);
  }
  return e;
}
function Hg(r, t, e) {
  var i = it(r.currentStates, t) >= 0, n = r.style.opacity, a = i ? null : Fg(r, ["opacity"], t, {
    opacity: 1
  });
  e = e || {};
  var o = e.style || {};
  return o.opacity == null && (e = O({}, e), o = O({
    // Already being applied 'emphasis'. DON'T mul opacity multiple times.
    opacity: i ? n : a.opacity * 0.1
  }, o), e.style = o), e;
}
function io(r, t) {
  var e = this.states[r];
  if (this.style) {
    if (r === "emphasis")
      return Vg(this, r, t, e);
    if (r === "blur")
      return Hg(this, r, e);
    if (r === "select")
      return zg(this, r, e);
  }
  return e;
}
function Ug(r) {
  r.stateProxy = io;
  var t = r.getTextContent(), e = r.getTextGuideLine();
  t && (t.stateProxy = io), e && (e.stateProxy = io);
}
function il(r, t) {
  !Uh(r, t) && !r.__highByOuter && Me(r, Bh);
}
function nl(r, t) {
  !Uh(r, t) && !r.__highByOuter && Me(r, kh);
}
function Qo(r, t) {
  r.__highByOuter |= 1 << (t || 0), Me(r, Bh);
}
function Jo(r, t) {
  !(r.__highByOuter &= ~(1 << (t || 0))) && Me(r, kh);
}
function Gg(r) {
  Me(r, Ns);
}
function Vh(r) {
  Me(r, Fh);
}
function zh(r) {
  Me(r, Bg);
}
function Hh(r) {
  Me(r, kg);
}
function Uh(r, t) {
  return r.__highDownSilentOnTouch && t.zrByTouch;
}
function Gh(r) {
  var t = r.getModel(), e = [], i = [];
  t.eachComponent(function(n, a) {
    var o = Is(a), s = n === "series", u = s ? r.getViewOfSeriesModel(a) : r.getViewOfComponentModel(a);
    !s && i.push(u), o.isBlured && (u.group.traverse(function(l) {
      Fh(l);
    }), s && e.push(a)), o.isBlured = !1;
  }), L(i, function(n) {
    n && n.toggleBlurSeries && n.toggleBlurSeries(e, !1, t);
  });
}
function jo(r, t, e, i) {
  var n = i.getModel();
  e = e || "coordinateSystem";
  function a(l, f) {
    for (var h = 0; h < f.length; h++) {
      var c = l.getItemGraphicEl(f[h]);
      c && Vh(c);
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
          p.__highByOuter && f && t === "self" || Ns(p);
        }), Yt(t))
          a(l.getData(), t);
        else if (F(t))
          for (var d = lt(t), _ = 0; _ < d.length; _++)
            a(l.getData(d[_]), t[d[_]]);
        u.push(l), Is(l).isBlured = !0;
      }
    }), n.eachComponent(function(l, f) {
      if (l !== "series") {
        var h = i.getViewOfComponentModel(f);
        h && h.toggleBlurSeries && h.toggleBlurSeries(u, !0, n);
      }
    });
  }
}
function ts(r, t, e) {
  if (!(r == null || t == null)) {
    var i = e.getModel().getComponent(r, t);
    if (i) {
      Is(i).isBlured = !0;
      var n = e.getViewOfComponentModel(i);
      !n || !n.focusBlurEnabled || n.group.traverse(function(a) {
        Ns(a);
      });
    }
  }
}
function Yg(r, t, e) {
  var i = r.seriesIndex, n = r.getData(t.dataType);
  if (!n) {
    process.env.NODE_ENV !== "production" && wt("Unknown dataType " + t.dataType);
    return;
  }
  var a = fa(n, t);
  a = (G(a) ? a[0] : a) || 0;
  var o = n.getItemGraphicEl(a);
  if (!o)
    for (var s = n.count(), u = 0; !o && u < s; )
      o = n.getItemGraphicEl(u++);
  if (o) {
    var l = Gt(o);
    jo(i, l.focus, l.blurScope, e);
  } else {
    var f = r.get(["emphasis", "focus"]), h = r.get(["emphasis", "blurScope"]);
    f != null && jo(i, f, h, e);
  }
}
function Bs(r, t, e, i) {
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
    if (process.env.NODE_ENV !== "production" && !Xr(s[l]) && wt("param should be highDownDispatcher"), Gt(s[l]).focus === "self") {
      u = !0;
      break;
    }
  return {
    focusSelf: u,
    dispatchers: s
  };
}
function Wg(r, t, e) {
  process.env.NODE_ENV !== "production" && !Xr(r) && wt("param should be highDownDispatcher");
  var i = Gt(r), n = Bs(i.componentMainType, i.componentIndex, i.componentHighDownName, e), a = n.dispatchers, o = n.focusSelf;
  a ? (o && ts(i.componentMainType, i.componentIndex, e), L(a, function(s) {
    return il(s, t);
  })) : (jo(i.seriesIndex, i.focus, i.blurScope, e), i.focus === "self" && ts(i.componentMainType, i.componentIndex, e), il(r, t));
}
function $g(r, t, e) {
  process.env.NODE_ENV !== "production" && !Xr(r) && wt("param should be highDownDispatcher"), Gh(e);
  var i = Gt(r), n = Bs(i.componentMainType, i.componentIndex, i.componentHighDownName, e).dispatchers;
  n ? L(n, function(a) {
    return nl(a, t);
  }) : nl(r, t);
}
function Xg(r, t, e) {
  if (es(t)) {
    var i = t.dataType, n = r.getData(i), a = fa(n, t);
    G(a) || (a = [a]), r[t.type === Ni ? "toggleSelect" : t.type === Oi ? "select" : "unselect"](a, i);
  }
}
function al(r) {
  var t = r.getAllData();
  L(t, function(e) {
    var i = e.data, n = e.type;
    i.eachItemGraphicEl(function(a, o) {
      r.isSelected(o, n) ? zh(a) : Hh(a);
    });
  });
}
function qg(r) {
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
function Zg(r, t, e) {
  Qg(r, !0), Me(r, Ug), Kg(r, t, e);
}
function Kg(r, t, e) {
  var i = Gt(r);
  t != null ? (i.focus = t, i.blurScope = e) : i.focus && (i.focus = null);
}
function Qg(r, t) {
  var e = t === !1, i = r;
  r.highDownSilentOnTouch && (i.__highDownSilentOnTouch = r.highDownSilentOnTouch), (!e || i.__highDownDispatcher) && (i.__highByOuter = i.__highByOuter || 0, i.__highDownDispatcher = !e);
}
function Xr(r) {
  return !!(r && r.__highDownDispatcher);
}
function Jg(r) {
  var t = Ju[r];
  return t == null && Qu <= 32 && (t = Ju[r] = Qu++), t;
}
function es(r) {
  var t = r.type;
  return t === Oi || t === xn || t === Ni;
}
function ol(r) {
  var t = r.type;
  return t === cr || t === Pn;
}
function jg(r) {
  var t = Oh(r);
  t.normalFill = r.style.fill, t.normalStroke = r.style.stroke;
  var e = r.states.select || {};
  t.selectFill = e.style && e.style.fill || null, t.selectStroke = e.style && e.style.stroke || null;
}
var br = gr.CMD, t_ = [[], [], []], sl = Math.sqrt, e_ = Math.atan2;
function r_(r, t) {
  if (t) {
    var e = r.data, i = r.len(), n, a, o, s, u, l, f = br.M, h = br.C, c = br.L, v = br.R, d = br.A, _ = br.Q;
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
          var p = t[4], g = t[5], y = sl(t[0] * t[0] + t[1] * t[1]), m = sl(t[2] * t[2] + t[3] * t[3]), w = e_(-t[1] / m, t[0] / y);
          e[o] *= y, e[o++] += p, e[o] *= m, e[o++] += g, e[o++] *= y, e[o++] *= m, e[o++] += w, e[o++] += w, o += 2, s = o;
          break;
        case v:
          l[0] = e[o++], l[1] = e[o++], xi(l, l, t), e[s++] = l[0], e[s++] = l[1], l[0] += e[o++], l[1] += e[o++], xi(l, l, t), e[s++] = l[0], e[s++] = l[1];
      }
      for (u = 0; u < a; u++) {
        var T = t_[u];
        T[0] = e[o++], T[1] = e[o++], xi(T, T, t), e[s++] = T[0], e[s++] = T[1];
      }
    }
    r.increaseVersion();
  }
}
var no = Math.sqrt, rn = Math.sin, nn = Math.cos, hi = Math.PI;
function ul(r) {
  return Math.sqrt(r[0] * r[0] + r[1] * r[1]);
}
function rs(r, t) {
  return (r[0] * t[0] + r[1] * t[1]) / (ul(r) * ul(t));
}
function ll(r, t) {
  return (r[0] * t[1] < r[1] * t[0] ? -1 : 1) * Math.acos(rs(r, t));
}
function fl(r, t, e, i, n, a, o, s, u, l, f) {
  var h = u * (hi / 180), c = nn(h) * (r - e) / 2 + rn(h) * (t - i) / 2, v = -1 * rn(h) * (r - e) / 2 + nn(h) * (t - i) / 2, d = c * c / (o * o) + v * v / (s * s);
  d > 1 && (o *= no(d), s *= no(d));
  var _ = (n === a ? -1 : 1) * no((o * o * (s * s) - o * o * (v * v) - s * s * (c * c)) / (o * o * (v * v) + s * s * (c * c))) || 0, p = _ * o * v / s, g = _ * -s * c / o, y = (r + e) / 2 + nn(h) * p - rn(h) * g, m = (t + i) / 2 + rn(h) * p + nn(h) * g, w = ll([1, 0], [(c - p) / o, (v - g) / s]), T = [(c - p) / o, (v - g) / s], S = [(-1 * c - p) / o, (-1 * v - g) / s], D = ll(T, S);
  if (rs(T, S) <= -1 && (D = hi), rs(T, S) >= 1 && (D = 0), D < 0) {
    var C = Math.round(D / hi * 1e6) / 1e6;
    D = hi * 2 + C % 2 * hi;
  }
  f.addData(l, y, m, o, s, w, D, h, a);
}
var i_ = /([mlvhzcqtsa])([^mlvhzcqtsa]*)/ig, n_ = /-?([0-9]*\.)?[0-9]+([eE]-?[0-9]+)?/g;
function a_(r) {
  var t = new gr();
  if (!r)
    return t;
  var e = 0, i = 0, n = e, a = i, o, s = gr.CMD, u = r.match(i_);
  if (!u)
    return t;
  for (var l = 0; l < u.length; l++) {
    for (var f = u[l], h = f.charAt(0), c = void 0, v = f.match(n_) || [], d = v.length, _ = 0; _ < d; _++)
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
          m = v[p++], w = v[p++], T = v[p++], S = v[p++], D = v[p++], C = e, b = i, e = v[p++], i = v[p++], c = s.A, fl(C, b, e, i, S, D, m, w, T, c, t);
          break;
        case "a":
          m = v[p++], w = v[p++], T = v[p++], S = v[p++], D = v[p++], C = e, b = i, e += v[p++], i += v[p++], c = s.A, fl(C, b, e, i, S, D, m, w, T, c, t);
          break;
      }
    }
    (h === "z" || h === "Z") && (c = s.Z, t.addData(c), e = n, i = a), o = c;
  }
  return t.toStatic(), t;
}
var o_ = function(r) {
  J(t, r);
  function t() {
    return r !== null && r.apply(this, arguments) || this;
  }
  return t.prototype.applyTransform = function(e) {
  }, t;
}(ht);
function s_(r) {
  return r.setData != null;
}
function u_(r, t) {
  var e = a_(r), i = O({}, t);
  return i.buildPath = function(n) {
    if (s_(n)) {
      n.setData(e.data);
      var a = n.getContext();
      a && n.rebuildPath(a, 1);
    } else {
      var a = n;
      e.rebuildPath(a, 1);
    }
  }, i.applyTransform = function(n) {
    r_(e, n), this.dirtyShape();
  }, i;
}
function l_(r, t) {
  return new o_(u_(r, t));
}
var f_ = function() {
  function r() {
    this.cx = 0, this.cy = 0, this.r = 0;
  }
  return r;
}(), Yh = function(r) {
  J(t, r);
  function t(e) {
    return r.call(this, e) || this;
  }
  return t.prototype.getDefaultShape = function() {
    return new f_();
  }, t.prototype.buildPath = function(e, i) {
    e.moveTo(i.cx + i.r, i.cy), e.arc(i.cx, i.cy, i.r, 0, Math.PI * 2);
  }, t;
}(ht);
Yh.prototype.type = "circle";
const Wh = Yh;
function h_(r, t, e, i) {
  var n = [], a = [], o = [], s = [], u, l, f, h;
  if (i) {
    f = [1 / 0, 1 / 0], h = [-1 / 0, -1 / 0];
    for (var c = 0, v = r.length; c < v; c++)
      Ar(f, f, r[c]), Or(h, h, r[c]);
    Ar(f, f, i[0]), Or(h, h, i[1]);
  }
  for (var c = 0, v = r.length; c < v; c++) {
    var d = r[c];
    if (e)
      u = r[c ? c - 1 : v - 1], l = r[(c + 1) % v];
    else if (c === 0 || c === v - 1) {
      n.push(Bc(r[c]));
      continue;
    } else
      u = r[c - 1], l = r[c + 1];
    kc(a, l, u), Ta(a, a, t);
    var _ = xo(d, u), p = xo(d, l), g = _ + p;
    g !== 0 && (_ /= g, p /= g), Ta(o, a, -_), Ta(s, a, p);
    var y = js([], d, o), m = js([], d, s);
    i && (Or(y, y, f), Ar(y, y, h), Or(m, m, f), Ar(m, m, h)), n.push(y), n.push(m);
  }
  return e && n.push(n.shift()), n;
}
function v_(r, t, e) {
  var i = t.smooth, n = t.points;
  if (n && n.length >= 2) {
    if (i) {
      var a = h_(n, i, e, t.smoothConstraint);
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
var c_ = function() {
  function r() {
    this.points = null, this.percent = 1, this.smooth = 0, this.smoothConstraint = null;
  }
  return r;
}(), $h = function(r) {
  J(t, r);
  function t(e) {
    return r.call(this, e) || this;
  }
  return t.prototype.getDefaultStyle = function() {
    return {
      stroke: "#000",
      fill: null
    };
  }, t.prototype.getDefaultShape = function() {
    return new c_();
  }, t.prototype.buildPath = function(e, i) {
    v_(e, i, !1);
  }, t;
}(ht);
$h.prototype.type = "polyline";
const d_ = $h;
var p_ = {}, g_ = function() {
  function r() {
    this.x1 = 0, this.y1 = 0, this.x2 = 0, this.y2 = 0, this.percent = 1;
  }
  return r;
}(), Xh = function(r) {
  J(t, r);
  function t(e) {
    return r.call(this, e) || this;
  }
  return t.prototype.getDefaultStyle = function() {
    return {
      stroke: "#000",
      fill: null
    };
  }, t.prototype.getDefaultShape = function() {
    return new g_();
  }, t.prototype.buildPath = function(e, i) {
    var n, a, o, s;
    if (this.subPixelOptimize) {
      var u = Dg(p_, i, this.style);
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
Xh.prototype.type = "line";
const __ = Xh;
var y_ = function() {
  function r() {
    this.cx = 0, this.cy = 0, this.r = 0, this.startAngle = 0, this.endAngle = Math.PI * 2, this.clockwise = !0;
  }
  return r;
}(), qh = function(r) {
  J(t, r);
  function t(e) {
    return r.call(this, e) || this;
  }
  return t.prototype.getDefaultStyle = function() {
    return {
      stroke: "#000",
      fill: null
    };
  }, t.prototype.getDefaultShape = function() {
    return new y_();
  }, t.prototype.buildPath = function(e, i) {
    var n = i.cx, a = i.cy, o = Math.max(i.r, 0), s = i.startAngle, u = i.endAngle, l = i.clockwise, f = Math.cos(s), h = Math.sin(s);
    e.moveTo(f * o + n, h * o + a), e.arc(n, a, o, s, u, !l);
  }, t;
}(ht);
qh.prototype.type = "arc";
const m_ = qh;
var w_ = function(r) {
  J(t, r);
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
const S_ = w_;
var je = [0, 0], tr = [0, 0], an = new V(), on = new V(), T_ = function() {
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
    return an.set(1 / 0, 1 / 0), on.set(0, 0), !this._intersectCheckOneSide(this, t, an, on, n, 1) && (i = !1, n) || !this._intersectCheckOneSide(t, this, an, on, n, -1) && (i = !1, n) || n || V.copy(e, i ? an : on), i;
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
const is = T_;
_t();
function D_(r, t, e, i, n) {
  var a;
  if (t && t.ecModel) {
    var o = t.ecModel.getUpdatePayload();
    a = o && o.animation;
  }
  var s = t && t.isAnimationEnabled(), u = r === "update";
  if (s) {
    var l = void 0, f = void 0, h = void 0;
    i ? (l = W(i.duration, 200), f = W(i.easing, "cubicOut"), h = 0) : (l = t.getShallow(u ? "animationDurationUpdate" : "animationDuration"), f = t.getShallow(u ? "animationEasingUpdate" : "animationEasing"), h = t.getShallow(u ? "animationDelayUpdate" : "animationDelay")), a && (a.duration != null && (l = a.duration), a.easing != null && (f = a.easing), a.delay != null && (h = a.delay)), Q(h) && (h = h(e, n)), Q(l) && (l = l(e));
    var c = {
      duration: l || 0,
      delay: h,
      easing: f
    };
    return c;
  } else
    return null;
}
function Zh(r, t, e, i, n, a, o) {
  var s = !1, u;
  Q(n) ? (o = a, a = n, n = null) : F(n) && (a = n.cb, o = n.during, s = n.isFrom, u = n.removeOpt, n = n.dataIndex);
  var l = r === "leave";
  l || t.stopAnimation("leave");
  var f = D_(r, i, n, l ? u || {} : null, i && i.getAnimationDelayParams ? i.getAnimationDelayParams(t, n) : null);
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
function Gr(r, t, e, i, n, a) {
  Zh("update", r, t, e, i, n, a);
}
function Gn(r, t, e, i, n, a) {
  Zh("enter", r, t, e, i, n, a);
}
function Rn(r) {
  if (!r.__zr)
    return !0;
  for (var t = 0; t < r.animators.length; t++) {
    var e = r.animators[t];
    if (e.scope === "leave")
      return !0;
  }
  return !1;
}
function C_(r) {
  return ht.extend(r);
}
function ns(r, t, e, i) {
  var n = l_(r, t);
  return e && (i === "center" && (e = Kh(e, n.getBoundingRect())), E_(n, e)), n;
}
function b_(r, t, e) {
  var i = new pa({
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
        i.setStyle(Kh(t, a));
      }
    }
  });
  return i;
}
function Kh(r, t) {
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
function E_(r, t) {
  if (r.applyTransform) {
    var e = r.getBoundingRect(), i = e.calculateTransform(t);
    r.applyTransform(i);
  }
}
function hl(r, t) {
  var e;
  r.isGroup && (e = t(r)), e || r.traverse(t);
}
function M_(r, t) {
  if (r)
    if (G(r))
      for (var e = 0; e < r.length; e++)
        hl(r[e], t);
    else
      hl(r, t);
}
var ks = {};
function L_(r, t) {
  for (var e = 0; e < $r.length; e++) {
    var i = $r[e], n = t[i], a = r.ensureState(i);
    a.style = a.style || {}, a.style.text = n;
  }
  var o = r.currentStates.slice();
  r.clearStates(!0), r.setStyle({
    text: t.normal
  }), r.useStates(o, !0);
}
function P_(r, t, e) {
  var i = r.labelFetcher, n = r.labelDataIndex, a = r.labelDimIndex, o = t.normal, s;
  i && (s = i.getFormattedLabel(n, "normal", null, a, o && o.get("formatter"), e != null ? {
    interpolatedValue: e
  } : null)), s == null && (s = Q(r.defaultText) ? r.defaultText(n, r, e) : r.defaultText);
  for (var u = {
    normal: s
  }, l = 0; l < $r.length; l++) {
    var f = $r[l], h = t[f];
    u[f] = W(i ? i.getFormattedLabel(n, f, null, a, h && h.get("formatter")) : null, s);
  }
  return u;
}
function x_(r, t, e, i, n) {
  var a = {};
  return R_(a, r, e, i, n), t && O(a, t), a;
}
function R_(r, t, e, i, n) {
  e = e || ks;
  var a = t.ecModel, o = a && a.option.textStyle, s = I_(t), u;
  if (s) {
    u = {};
    for (var l in s)
      if (s.hasOwnProperty(l)) {
        var f = t.getModel(["rich", l]);
        pl(u[l] = {}, f, o, e, i, n, !1, !0);
      }
  }
  u && (r.rich = u);
  var h = t.get("overflow");
  h && (r.overflow = h);
  var c = t.get("minMargin");
  c != null && (r.margin = c), pl(r, t, o, e, i, n, !0, !1);
}
function I_(r) {
  for (var t; r && r !== r.ecModel; ) {
    var e = (r.option || ks).rich;
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
var vl = ["fontStyle", "fontWeight", "fontSize", "fontFamily", "textShadowColor", "textShadowBlur", "textShadowOffsetX", "textShadowOffsetY"], cl = ["align", "lineHeight", "width", "height", "tag", "verticalAlign", "ellipsis"], dl = ["padding", "borderWidth", "borderRadius", "borderDashOffset", "backgroundColor", "borderColor", "shadowColor", "shadowBlur", "shadowOffsetX", "shadowOffsetY"];
function pl(r, t, e, i, n, a, o, s) {
  e = !n && e || ks;
  var u = i && i.inheritColor, l = t.getShallow("color"), f = t.getShallow("textBorderColor"), h = W(t.getShallow("opacity"), e.opacity);
  (l === "inherit" || l === "auto") && (process.env.NODE_ENV !== "production" && l === "auto" && gt("color: 'auto'", "color: 'inherit'"), u ? l = u : l = null), (f === "inherit" || f === "auto") && (process.env.NODE_ENV !== "production" && f === "auto" && gt("color: 'auto'", "color: 'inherit'"), u ? f = u : f = null), a || (l = l || e.color, f = f || e.textBorderColor), l != null && (r.fill = l), f != null && (r.stroke = f);
  var c = W(t.getShallow("textBorderWidth"), e.textBorderWidth);
  c != null && (r.lineWidth = c);
  var v = W(t.getShallow("textBorderType"), e.textBorderType);
  v != null && (r.lineDash = v);
  var d = W(t.getShallow("textBorderDashOffset"), e.textBorderDashOffset);
  d != null && (r.lineDashOffset = d), !n && h == null && !s && (h = i && i.defaultOpacity), h != null && (r.opacity = h), !n && !a && r.fill == null && i.inheritColor && (r.fill = i.inheritColor);
  for (var _ = 0; _ < vl.length; _++) {
    var p = vl[_], g = W(t.getShallow(p), e[p]);
    g != null && (r[p] = g);
  }
  for (var _ = 0; _ < cl.length; _++) {
    var p = cl[_], g = t.getShallow(p);
    g != null && (r[p] = g);
  }
  if (r.verticalAlign == null) {
    var y = t.getShallow("baseline");
    y != null && (r.verticalAlign = y);
  }
  if (!o || !i.disableBox) {
    for (var _ = 0; _ < dl.length; _++) {
      var p = dl[_], g = t.getShallow(p);
      g != null && (r[p] = g);
    }
    var m = t.getShallow("borderType");
    m != null && (r.borderDash = m), (r.backgroundColor === "auto" || r.backgroundColor === "inherit") && u && (process.env.NODE_ENV !== "production" && r.backgroundColor === "auto" && gt("backgroundColor: 'auto'", "backgroundColor: 'inherit'"), r.backgroundColor = u), (r.borderColor === "auto" || r.borderColor === "inherit") && u && (process.env.NODE_ENV !== "production" && r.borderColor === "auto" && gt("borderColor: 'auto'", "borderColor: 'inherit'"), r.borderColor = u);
  }
}
function A_(r, t) {
  var e = t && t.getModel("textStyle");
  return Ne([
    // FIXME in node-canvas fontWeight is before fontStyle
    r.fontStyle || e && e.getShallow("fontStyle") || "",
    r.fontWeight || e && e.getShallow("fontWeight") || "",
    (r.fontSize || e && e.getShallow("fontSize") || 12) + "px",
    r.fontFamily || e && e.getShallow("fontFamily") || "sans-serif"
  ].join(" "));
}
var Qh = _t();
function O_(r, t, e, i, n) {
  var a = Qh(r);
  if (!a.valueAnimation || a.prevValue === a.value)
    return;
  var o = a.defaultInterpolatedText, s = W(a.interpolatedValue, a.prevValue), u = a.value;
  function l(f) {
    var h = Pp(e, a.precision, s, u, f);
    a.interpolatedValue = f === 1 ? null : h;
    var c = P_({
      labelDataIndex: t,
      labelFetcher: n,
      defaultText: o ? o(h) : h + ""
    }, a.statesModels, h);
    L_(r, c);
  }
  r.percent = 0, (a.prevValue == null ? Gn : Gr)(r, {
    // percent is used to prevent animation from being aborted #15916
    percent: 1
  }, i, t, null, l);
}
var N_ = ["textStyle", "color"], ao = ["fontStyle", "fontWeight", "fontSize", "fontFamily", "padding", "lineHeight", "rich", "width", "height", "overflow"], oo = new Un(), B_ = (
  /** @class */
  function() {
    function r() {
    }
    return r.prototype.getTextColor = function(t) {
      var e = this.ecModel;
      return this.getShallow("color") || (!t && e ? e.get(N_) : null);
    }, r.prototype.getFont = function() {
      return A_({
        fontStyle: this.getShallow("fontStyle"),
        fontWeight: this.getShallow("fontWeight"),
        fontSize: this.getShallow("fontSize"),
        fontFamily: this.getShallow("fontFamily")
      }, this.ecModel);
    }, r.prototype.getTextRect = function(t) {
      for (var e = {
        text: t,
        verticalAlign: this.getShallow("verticalAlign") || this.getShallow("baseline")
      }, i = 0; i < ao.length; i++)
        e[ao[i]] = this.getShallow(ao[i]);
      return oo.useStyle(e), oo.update(), oo.getBoundingRect();
    }, r;
  }()
);
const k_ = B_;
var Jh = [
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
], F_ = Vi(Jh), V_ = (
  /** @class */
  function() {
    function r() {
    }
    return r.prototype.getLineStyle = function(t) {
      return F_(this, t);
    }, r;
  }()
), jh = [
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
], z_ = Vi(jh), H_ = (
  /** @class */
  function() {
    function r() {
    }
    return r.prototype.getItemStyle = function(t, e) {
      return z_(this, t, e);
    }, r;
  }()
), _r = (
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
      return new t(Z(this.option));
    }, r.prototype.parsePath = function(t) {
      return typeof t == "string" ? t.split(".") : t;
    }, r.prototype.resolveParentPath = function(t) {
      return t;
    }, r.prototype.isAnimationEnabled = function() {
      if (!et.node && this.option) {
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
xs(_r);
Np(_r);
Ee(_r, V_);
Ee(_r, H_);
Ee(_r, zp);
Ee(_r, k_);
const Fe = _r;
var U_ = Math.round(Math.random() * 10);
function _a(r) {
  return [r || "", U_++].join("_");
}
function G_(r) {
  var t = {};
  r.registerSubTypeDefaulter = function(e, i) {
    var n = le(e);
    t[n.main] = i;
  }, r.determineSubType = function(e, i) {
    var n = i.type;
    if (!n) {
      var a = le(e).main;
      r.hasSubTypes(e) && t[a] && (n = t[a](i));
    }
    return n;
  };
}
function Y_(r, t) {
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
      throw process.env.NODE_ENV !== "production" && (y = $o("Circular dependency may exists: ", c, a, o)), new Error(y);
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
        it(l.predecessor, c) < 0 && l.predecessor.push(c);
        var v = i(o, c);
        it(v.successor, c) < 0 && v.successor.push(u);
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
      it(o, u) >= 0 && s.push(u);
    }), s;
  }
}
const W_ = {
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
}, $_ = {
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
var Yn = "ZH", Fs = "EN", Wn = Fs, In = {}, X_ = et.domSupported ? function() {
  var r = (
    /* eslint-disable-next-line */
    (document.documentElement.lang || navigator.language || navigator.browserLanguage).toUpperCase()
  );
  return r.indexOf(Yn) > -1 ? Yn : Wn;
}() : Wn;
function tv(r, t) {
  r = r.toUpperCase(), new Fe(t), In[r] = t;
}
function q_(r) {
  if (q(r)) {
    var t = In[r.toUpperCase()] || {};
    return r === Yn || r === Fs ? Z(t) : ft(Z(t), Z(In[Wn]), !1);
  } else
    return ft(Z(r), Z(In[Wn]), !1);
}
tv(Fs, W_);
tv(Yn, $_);
var gl = ["a", "b", "c", "d", "e", "f", "g"], so = function(r, t) {
  return "{" + r + (t ?? "") + "}";
};
function Z_(r, t, e) {
  G(t) || (t = [t]);
  var i = t.length;
  if (!i)
    return "";
  for (var n = t[0].$vars || [], a = 0; a < n.length; a++) {
    var o = gl[a];
    r = r.replace(so(o), so(o, 0));
  }
  for (var s = 0; s < i; s++)
    for (var u = 0; u < n.length; u++) {
      var l = t[s][n[u]];
      r = r.replace(so(gl[u], s), e ? qc(l) : l);
    }
  return r;
}
function K_(r, t) {
  return t = t || "transparent", q(r) ? r : F(r) && r.colorStops && (r.colorStops[0] || {}).color || t;
}
var An = L, Q_ = ["left", "right", "top", "bottom", "width", "height"], sn = [["width", "left", "right"], ["height", "top", "bottom"]];
function ev(r, t, e, i, n) {
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
Ts(ev, "vertical");
Ts(ev, "horizontal");
function $n(r) {
  var t = r.layoutMode || r.constructor.layoutMode;
  return F(t) ? t : t ? {
    type: t
  } : null;
}
function Xn(r, t, e) {
  var i = e && e.ignoreSize;
  !G(i) && (i = [i, i]);
  var n = o(sn[0], 0), a = o(sn[1], 1);
  l(sn[0], r, n), l(sn[1], r, a);
  function o(f, h) {
    var c = {}, v = 0, d = {}, _ = 0, p = 2;
    if (An(f, function(m) {
      d[m] = r[m];
    }), An(f, function(m) {
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
    An(f, function(v) {
      h[v] = c[v];
    });
  }
}
function rv(r) {
  return J_({}, r);
}
function J_(r, t) {
  return t && r && An(Q_, function(e) {
    t.hasOwnProperty(e) && (r[e] = t[e]);
  }), r;
}
var j_ = _t(), jr = (
  /** @class */
  function(r) {
    J(t, r);
    function t(e, i, n) {
      var a = r.call(this, e, i, n) || this;
      return a.uid = _a("ec_cpt_model"), a;
    }
    return t.prototype.init = function(e, i, n) {
      this.mergeDefaultAndTheme(e, n);
    }, t.prototype.mergeDefaultAndTheme = function(e, i) {
      var n = $n(this), a = n ? rv(e) : {}, o = i.getTheme();
      ft(e, o.get(this.mainType)), ft(e, this.getDefaultOption()), n && Xn(e, a, n);
    }, t.prototype.mergeOption = function(e, i) {
      ft(this.option, e, !0);
      var n = $n(this);
      n && Xn(this.option, e, n);
    }, t.prototype.optionUpdated = function(e, i) {
    }, t.prototype.getDefaultOption = function() {
      var e = this.constructor;
      if (!Ip(e))
        return e.defaultOption;
      var i = j_(this);
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
      return ha(this.ecModel, e, {
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
Dh(jr, Fe);
Rs(jr);
G_(jr);
Y_(jr, t0);
function t0(r) {
  var t = [];
  return L(jr.getClassesByMainType(r), function(e) {
    t = t.concat(e.dependencies || e.prototype.dependencies || []);
  }), t = rt(t, function(e) {
    return le(e).main;
  }), r !== "dataset" && it(t, "dataset") <= 0 && t.unshift("dataset"), t;
}
const st = jr;
var iv = "";
typeof navigator < "u" && (iv = navigator.platform || "");
var Er = "rgba(0, 0, 0, 0.2)";
const e0 = {
  darkMode: "auto",
  // backgroundColor: 'rgba(0,0,0,0)',
  colorBy: "series",
  color: ["#5470c6", "#91cc75", "#fac858", "#ee6666", "#73c0de", "#3ba272", "#fc8452", "#9a60b4", "#ea7ccc"],
  gradientColor: ["#f6efa6", "#d88273", "#bf444c"],
  aria: {
    decal: {
      decals: [{
        color: Er,
        dashArrayX: [1, 0],
        dashArrayY: [2, 5],
        symbolSize: 1,
        rotation: Math.PI / 6
      }, {
        color: Er,
        symbol: "circle",
        dashArrayX: [[8, 8], [0, 8, 8, 0]],
        dashArrayY: [6, 0],
        symbolSize: 0.8
      }, {
        color: Er,
        dashArrayX: [1, 0],
        dashArrayY: [4, 3],
        rotation: -Math.PI / 4
      }, {
        color: Er,
        dashArrayX: [[6, 6], [0, 6, 6, 0]],
        dashArrayY: [6, 0]
      }, {
        color: Er,
        dashArrayX: [[1, 0], [1, 6]],
        dashArrayY: [1, 0, 6, 0],
        rotation: Math.PI / 4
      }, {
        color: Er,
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
    fontFamily: iv.match(/^Win/) ? "Microsoft YaHei" : "sans-serif",
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
var as = $(["tooltip", "label", "itemName", "itemId", "itemGroupId", "seriesName"]), de = "original", Nt = "arrayRows", pe = "objectRows", Le = "keyedColumns", be = "typedArray", nv = "unknown", he = "column", ti = "row", Ft = {
  Must: 1,
  Might: 2,
  Not: 3
  // Other cases
}, r0 = _t();
function i0(r) {
  r0(r).datasetMap = $();
}
function n0(r) {
  var t = r.get("data", !0);
  if (!t)
    return ha(r.ecModel, "dataset", {
      index: r.get("datasetIndex", !0),
      id: r.get("datasetId", !0)
    }, Ps).models[0];
}
function a0(r) {
  return !r.get("transform", !0) && !r.get("fromTransformResult", !0) ? [] : ha(r.ecModel, "dataset", {
    index: r.get("fromDatasetIndex", !0),
    id: r.get("fromDatasetId", !0)
  }, Ps).models;
}
function av(r, t) {
  return o0(r.data, r.sourceFormat, r.seriesLayoutBy, r.dimensionsDefine, r.startIndex, t);
}
function o0(r, t, e, i, n, a) {
  var o, s = 5;
  if (Ot(r))
    return Ft.Not;
  var u, l;
  if (i) {
    var f = i[a];
    F(f) ? (u = f.name, l = f.type) : q(f) && (u = f);
  }
  if (l != null)
    return l === "ordinal" ? Ft.Must : Ft.Not;
  if (t === Nt) {
    var h = r;
    if (e === ti) {
      for (var c = h[a], v = 0; v < (c || []).length && v < s; v++)
        if ((o = w(c[n + v])) != null)
          return o;
    } else
      for (var v = 0; v < h.length && v < s; v++) {
        var d = h[n + v];
        if (d && (o = w(d[a])) != null)
          return o;
      }
  } else if (t === pe) {
    var _ = r;
    if (!u)
      return Ft.Not;
    for (var v = 0; v < _.length && v < s; v++) {
      var p = _[v];
      if (p && (o = w(p[u])) != null)
        return o;
    }
  } else if (t === Le) {
    var g = r;
    if (!u)
      return Ft.Not;
    var c = g[u];
    if (!c || Ot(c))
      return Ft.Not;
    for (var v = 0; v < c.length && v < s; v++)
      if ((o = w(c[v])) != null)
        return o;
  } else if (t === de)
    for (var y = r, v = 0; v < y.length && v < s; v++) {
      var p = y[v], m = la(p);
      if (!G(m))
        return Ft.Not;
      if ((o = w(m[a])) != null)
        return o;
    }
  function w(T) {
    var S = q(T);
    if (T != null && isFinite(T) && T !== "")
      return S ? Ft.Might : Ft.Not;
    if (S && T !== "-")
      return Ft.Must;
  }
  return Ft.Not;
}
var s0 = $();
function u0(r, t, e) {
  var i = s0.get(t);
  if (!i)
    return e;
  var n = i(r);
  if (!n)
    return e;
  if (process.env.NODE_ENV !== "production")
    for (var a = 0; a < n.length; a++)
      U(Wr(n[a]));
  return e.concat(n);
}
var _l = _t();
_t();
var Vs = (
  /** @class */
  function() {
    function r() {
    }
    return r.prototype.getColorFromPalette = function(t, e, i) {
      var n = Et(this.get("color", !0)), a = this.get("colorLayer", !0);
      return f0(this, _l, n, a, t, e, i);
    }, r.prototype.clearColorPalette = function() {
      h0(this, _l);
    }, r;
  }()
);
function l0(r, t) {
  for (var e = r.length, i = 0; i < e; i++)
    if (r[i].length > t)
      return r[i];
  return r[e - 1];
}
function f0(r, t, e, i, n, a, o) {
  a = a || r;
  var s = t(a), u = s.paletteIdx || 0, l = s.paletteNameMap = s.paletteNameMap || {};
  if (l.hasOwnProperty(n))
    return l[n];
  var f = o == null || !i ? e : l0(i, o);
  if (f = f || e, !(!f || !f.length)) {
    var h = f[u];
    return n && (l[n] = h), s.paletteIdx = (u + 1) % f.length, h;
  }
}
function h0(r, t) {
  t(r).paletteIdx = 0, t(r).paletteNameMap = {};
}
var un, vi, yl, uo = "\0_ec_inner", ml = 1, v0 = {
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
}, c0 = {
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
}, qn = {};
function d0(r) {
  L(r, function(t, e) {
    if (!st.hasClass(e)) {
      var i = v0[e];
      i && !qn[i] && (wt("Component " + e + ` is used but not imported.
import { ` + i + ` } from 'echarts/components';
echarts.use([` + i + "]);"), qn[i] = !0);
    }
  });
}
var ov = (
  /** @class */
  function(r) {
    J(t, r);
    function t() {
      return r !== null && r.apply(this, arguments) || this;
    }
    return t.prototype.init = function(e, i, n, a, o, s) {
      a = a || {}, this.option = null, this._theme = new Fe(a), this._locale = new Fe(o), this._optionManager = s;
    }, t.prototype.setOption = function(e, i, n) {
      process.env.NODE_ENV !== "production" && (U(e != null, "option is null/undefined"), U(e[uo] !== ml, "please use chart.getOption()"));
      var a = Tl(i);
      this._optionManager.setOption(e, n, a), this._resetOption(null, a);
    }, t.prototype.resetOption = function(e, i) {
      return this._resetOption(e, Tl(i));
    }, t.prototype._resetOption = function(e, i) {
      var n = !1, a = this._optionManager;
      if (!e || e === "recreate") {
        var o = a.mountOption(e === "recreate");
        process.env.NODE_ENV !== "production" && d0(o), !this.option || e === "recreate" ? yl(this, o) : (this.restoreData(), this._mergeOption(o, i)), n = !0;
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
      i0(this), L(e, function(h, c) {
        h != null && (st.hasClass(c) ? c && (s.push(c), u.set(c, !0)) : n[c] = n[c] == null ? Z(h) : ft(n[c], h, !0));
      }), l && l.each(function(h, c) {
        st.hasClass(c) && !u.get(c) && (s.push(c), u.set(c, !0));
      }), st.topologicalTravel(s, st.getAllClassMainTypes(), f, this);
      function f(h) {
        var c = u0(this, h, Et(e[h])), v = a.get(h), d = (
          // `!oldCmptList` means init. See the comment in `mappingToExists`
          v ? l && l.get(h) ? "replaceMerge" : "normalMerge" : "replaceAll"
        ), _ = yp(v, c, d);
        bp(_, h, st), n[h] = null, a.set(h, null), o.set(h, 0);
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
                var E = T.keyInfo.subType, P = c0[E];
                qn[E] || (qn[E] = !0, wt(P ? "Series " + E + ` is used but not imported.
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
              var x = O({
                componentIndex: S
              }, T.keyInfo);
              D = new M(C, this, this, x), O(D, x), T.brandNew && (D.__requireNewView = !0), D.init(C, this, this), D.optionUpdated(null, !0);
            }
          }
          D ? (p.push(D.option), g.push(D), y++) : (p.push(void 0), g.push(void 0));
        }, this), n[h] = p, a.set(h, g), o.set(h, y), h === "series" && un(this);
      }
      this._seriesIndices || un(this);
    }, t.prototype.getOption = function() {
      var e = Z(this.option);
      return L(e, function(i, n) {
        if (st.hasClass(n)) {
          for (var a = Et(i), o = a.length, s = !1, u = o - 1; u >= 0; u--)
            a[u] && !Wr(a[u]) ? s = !0 : (a[u] = null, !s && o--);
          a.length = o, e[n] = a;
        }
      }), delete e[uo], e;
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
      return n != null ? (u = [], L(Et(n), function(l) {
        s[l] && u.push(s[l]);
      })) : a != null ? u = wl("id", a, s) : o != null ? u = wl("name", o, s) : u = Rt(s, function(l) {
        return !!l;
      }), Sl(u, e);
    }, t.prototype.findComponents = function(e) {
      var i = e.query, n = e.mainType, a = s(i), o = a ? this.queryComponents(a) : Rt(this._componentsMap.get(n), function(l) {
        return !!l;
      });
      return u(Sl(o, e));
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
        return e.filter ? Rt(l, e.filter) : l;
      }
    }, t.prototype.eachComponent = function(e, i, n) {
      var a = this._componentsMap;
      if (Q(e)) {
        var o = i, s = e;
        a.each(function(h, c) {
          for (var v = 0; h && v < h.length; v++) {
            var d = h[v];
            d && s.call(o, c, d, d.componentIndex);
          }
        });
      } else
        for (var u = q(e) ? a.get(e) : F(e) ? this.findComponents(e) : null, l = 0; u && l < u.length; l++) {
          var f = u[l];
          f && i.call(n, f, f.componentIndex);
        }
    }, t.prototype.getSeriesByName = function(e) {
      var i = fe(e, null);
      return Rt(this._componentsMap.get("series"), function(n) {
        return !!n && i != null && n.name === i;
      });
    }, t.prototype.getSeriesByIndex = function(e) {
      return this._componentsMap.get("series")[e];
    }, t.prototype.getSeriesByType = function(e) {
      return Rt(this._componentsMap.get("series"), function(i) {
        return !!i && i.subType === e;
      });
    }, t.prototype.getSeries = function() {
      return Rt(this._componentsMap.get("series"), function(e) {
        return !!e;
      });
    }, t.prototype.getSeriesCount = function() {
      return this._componentsCount.get("series");
    }, t.prototype.eachSeries = function(e, i) {
      vi(this), L(this._seriesIndices, function(n) {
        var a = this._componentsMap.get("series")[n];
        e.call(i, a, n);
      }, this);
    }, t.prototype.eachRawSeries = function(e, i) {
      L(this._componentsMap.get("series"), function(n) {
        n && e.call(i, n, n.componentIndex);
      });
    }, t.prototype.eachSeriesByType = function(e, i, n) {
      vi(this), L(this._seriesIndices, function(a) {
        var o = this._componentsMap.get("series")[a];
        o.subType === e && i.call(n, o, a);
      }, this);
    }, t.prototype.eachRawSeriesByType = function(e, i, n) {
      return L(this.getSeriesByType(e), i, n);
    }, t.prototype.isSeriesFiltered = function(e) {
      return vi(this), this._seriesIndicesMap.get(e.componentIndex) == null;
    }, t.prototype.getCurrentSeriesIndices = function() {
      return (this._seriesIndices || []).slice();
    }, t.prototype.filterSeries = function(e, i) {
      vi(this);
      var n = [];
      L(this._seriesIndices, function(a) {
        var o = this._componentsMap.get("series")[a];
        e.call(i, o, a) && n.push(a);
      }, this), this._seriesIndices = n, this._seriesIndicesMap = $(n);
    }, t.prototype.restoreData = function(e) {
      un(this);
      var i = this._componentsMap, n = [];
      i.each(function(a, o) {
        st.hasClass(o) && n.push(o);
      }), st.topologicalTravel(n, st.getAllClassMainTypes(), function(a) {
        L(i.get(a), function(o) {
          o && (a !== "series" || !p0(o, e)) && o.restoreData();
        });
      });
    }, t.internalField = function() {
      un = function(e) {
        var i = e._seriesIndices = [];
        L(e._componentsMap.get("series"), function(n) {
          n && i.push(n.componentIndex);
        }), e._seriesIndicesMap = $(i);
      }, vi = function(e) {
        if (process.env.NODE_ENV !== "production" && !e._seriesIndices)
          throw new Error("Option should contains series.");
      }, yl = function(e, i) {
        e.option = {}, e.option[uo] = ml, e._componentsMap = $({
          series: []
        }), e._componentsCount = $();
        var n = i.aria;
        F(n) && n.enabled == null && (n.enabled = !0), g0(i, e._theme.option), ft(i, e0, !1), e._mergeOption(i, null);
      };
    }(), t;
  }(Fe)
);
function p0(r, t) {
  if (t) {
    var e = t.seriesIndex, i = t.seriesId, n = t.seriesName;
    return e != null && r.componentIndex !== e || i != null && r.id !== i || n != null && r.name !== n;
  }
}
function g0(r, t) {
  var e = r.color && !r.colorLayer;
  L(t, function(i, n) {
    n === "colorLayer" && e || st.hasClass(n) || (typeof i == "object" ? r[n] = r[n] ? ft(r[n], i, !1) : Z(i) : r[n] == null && (r[n] = i));
  });
}
function wl(r, t, e) {
  if (G(t)) {
    var i = $();
    return L(t, function(a) {
      if (a != null) {
        var o = fe(a, null);
        o != null && i.set(a, !0);
      }
    }), Rt(e, function(a) {
      return a && i.get(a[r]);
    });
  } else {
    var n = fe(t, null);
    return Rt(e, function(a) {
      return a && n != null && a[r] === n;
    });
  }
}
function Sl(r, t) {
  return t.hasOwnProperty("subType") ? Rt(r, function(e) {
    return e && e.subType === t.subType;
  }) : r;
}
function Tl(r) {
  var t = $();
  return r && L(Et(r.replaceMerge), function(e) {
    process.env.NODE_ENV !== "production" && U(st.hasClass(e), '"' + e + '" is not valid component main type in "replaceMerge"'), t.set(e, !0);
  }), {
    replaceMergeMainTypeMap: t
  };
}
Ee(ov, Vs);
const sv = ov;
var _0 = [
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
], y0 = (
  /** @class */
  function() {
    function r(t) {
      L(_0, function(e) {
        this[e] = It(t[e], t);
      }, this);
    }
    return r;
  }()
);
const uv = y0;
var lo = {}, m0 = (
  /** @class */
  function() {
    function r() {
      this._coordinateSystems = [];
    }
    return r.prototype.create = function(t, e) {
      var i = [];
      L(lo, function(n, a) {
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
      lo[t] = e;
    }, r.get = function(t) {
      return lo[t];
    }, r;
  }()
);
const lv = m0;
var w0 = /^(min|max)?(.+)$/, S0 = (
  /** @class */
  function() {
    function r(t) {
      this._timelineOptions = [], this._mediaList = [], this._currentMediaIndices = [], this._api = t;
    }
    return r.prototype.setOption = function(t, e, i) {
      t && (L(Et(t.series), function(o) {
        o && o.data && Ot(o.data) && Bn(o.data);
      }), L(Et(t.dataset), function(o) {
        o && o.source && Ot(o.source) && Bn(o.source);
      })), t = Z(t);
      var n = this._optionBackup, a = T0(t, e, !n);
      this._newBaseOption = a.baseOption, n ? (a.timelineOptions.length && (n.timelineOptions = a.timelineOptions), a.mediaList.length && (n.mediaList = a.mediaList), a.mediaDefault && (n.mediaDefault = a.mediaDefault)) : this._optionBackup = a;
    }, r.prototype.mountOption = function(t) {
      var e = this._optionBackup;
      return this._timelineOptions = e.timelineOptions, this._mediaList = e.mediaList, this._mediaDefault = e.mediaDefault, this._currentMediaIndices = [], Z(t ? e.baseOption : this._newBaseOption);
    }, r.prototype.getTimelineOption = function(t) {
      var e, i = this._timelineOptions;
      if (i.length) {
        var n = t.getComponent("timeline");
        n && (e = Z(
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
        D0(n[u].query, e, i) && o.push(u);
      return !o.length && a && (o = [-1]), o.length && !b0(o, this._currentMediaIndices) && (s = rt(o, function(f) {
        return Z(f === -1 ? a.option : n[f].option);
      })), this._currentMediaIndices = o, s;
    }, r;
  }()
);
function T0(r, t, e) {
  var i = [], n, a, o = r.baseOption, s = r.timeline, u = r.options, l = r.media, f = !!r.media, h = !!(u || s || o && o.timeline);
  o ? (a = o, a.timeline || (a.timeline = s)) : ((h || f) && (r.options = r.media = null), a = r), f && (G(l) ? L(l, function(v) {
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
function D0(r, t, e) {
  var i = {
    width: t,
    height: e,
    aspectratio: t / e
    // lower case for convenience.
  }, n = !0;
  return L(r, function(a, o) {
    var s = o.match(w0);
    if (!(!s || !s[1] || !s[2])) {
      var u = s[1], l = s[2].toLowerCase();
      C0(i[l], a, u) || (n = !1);
    }
  }), n;
}
function C0(r, t, e) {
  return e === "min" ? r >= t : e === "max" ? r <= t : r === t;
}
function b0(r, t) {
  return r.join(",") === t.join(",");
}
const E0 = S0;
var Wt = L, zi = F, Dl = ["areaStyle", "lineStyle", "nodeStyle", "linkStyle", "chordStyle", "label", "labelLine"];
function fo(r) {
  var t = r && r.itemStyle;
  if (t)
    for (var e = 0, i = Dl.length; e < i; e++) {
      var n = Dl[e], a = t.normal, o = t.emphasis;
      a && a[n] && (process.env.NODE_ENV !== "production" && gt("itemStyle.normal." + n, n), r[n] = r[n] || {}, r[n].normal ? ft(r[n].normal, a[n]) : r[n].normal = a[n], a[n] = null), o && o[n] && (process.env.NODE_ENV !== "production" && gt("itemStyle.emphasis." + n, "emphasis." + n), r[n] = r[n] || {}, r[n].emphasis ? ft(r[n].emphasis, o[n]) : r[n].emphasis = o[n], o[n] = null);
    }
}
function mt(r, t, e) {
  if (r && r[t] && (r[t].normal || r[t].emphasis)) {
    var i = r[t].normal, n = r[t].emphasis;
    i && (process.env.NODE_ENV !== "production" && ve("'normal' hierarchy in " + t + " has been removed since 4.0. All style properties are configured in " + t + " directly now."), e ? (r[t].normal = r[t].emphasis = null, Mt(r[t], i)) : r[t] = i), n && (process.env.NODE_ENV !== "production" && ve(t + ".emphasis has been changed to emphasis." + t + " since 4.0"), r.emphasis = r.emphasis || {}, r.emphasis[t] = n, n.focus && (r.emphasis.focus = n.focus), n.blurScope && (r.emphasis.blurScope = n.blurScope));
  }
}
function Li(r) {
  mt(r, "itemStyle"), mt(r, "lineStyle"), mt(r, "areaStyle"), mt(r, "label"), mt(r, "labelLine"), mt(r, "upperLabel"), mt(r, "edgeLabel");
}
function ut(r, t) {
  var e = zi(r) && r[t], i = zi(e) && e.textStyle;
  if (i) {
    process.env.NODE_ENV !== "production" && ve("textStyle hierarchy in " + t + " has been removed since 4.0. All textStyle properties are configured in " + t + " directly now.");
    for (var n = 0, a = Iu.length; n < a; n++) {
      var o = Iu[n];
      i.hasOwnProperty(o) && (e[o] = i[o]);
    }
  }
}
function qt(r) {
  r && (Li(r), ut(r, "label"), r.emphasis && ut(r.emphasis, "label"));
}
function M0(r) {
  if (zi(r)) {
    fo(r), Li(r), ut(r, "label"), ut(r, "upperLabel"), ut(r, "edgeLabel"), r.emphasis && (ut(r.emphasis, "label"), ut(r.emphasis, "upperLabel"), ut(r.emphasis, "edgeLabel"));
    var t = r.markPoint;
    t && (fo(t), qt(t));
    var e = r.markLine;
    e && (fo(e), qt(e));
    var i = r.markArea;
    i && qt(i);
    var n = r.data;
    if (r.type === "graph") {
      n = n || r.nodes;
      var a = r.links || r.edges;
      if (a && !Ot(a))
        for (var o = 0; o < a.length; o++)
          qt(a[o]);
      L(r.categories, function(l) {
        Li(l);
      });
    }
    if (n && !Ot(n))
      for (var o = 0; o < n.length; o++)
        qt(n[o]);
    if (t = r.markPoint, t && t.data)
      for (var s = t.data, o = 0; o < s.length; o++)
        qt(s[o]);
    if (e = r.markLine, e && e.data)
      for (var u = e.data, o = 0; o < u.length; o++)
        G(u[o]) ? (qt(u[o][0]), qt(u[o][1])) : qt(u[o]);
    r.type === "gauge" ? (ut(r, "axisLabel"), ut(r, "title"), ut(r, "detail")) : r.type === "treemap" ? (mt(r.breadcrumb, "itemStyle"), L(r.levels, function(l) {
      Li(l);
    })) : r.type === "tree" && Li(r.leaves);
  }
}
function me(r) {
  return G(r) ? r : r ? [r] : [];
}
function Cl(r) {
  return (G(r) ? r[0] : r) || {};
}
function L0(r, t) {
  Wt(me(r.series), function(i) {
    zi(i) && M0(i);
  });
  var e = ["xAxis", "yAxis", "radiusAxis", "angleAxis", "singleAxis", "parallelAxis", "radar"];
  t && e.push("valueAxis", "categoryAxis", "logAxis", "timeAxis"), Wt(e, function(i) {
    Wt(me(r[i]), function(n) {
      n && (ut(n, "axisLabel"), ut(n.axisPointer, "label"));
    });
  }), Wt(me(r.parallel), function(i) {
    var n = i && i.parallelAxisDefault;
    ut(n, "axisLabel"), ut(n && n.axisPointer, "label");
  }), Wt(me(r.calendar), function(i) {
    mt(i, "itemStyle"), ut(i, "dayLabel"), ut(i, "monthLabel"), ut(i, "yearLabel");
  }), Wt(me(r.radar), function(i) {
    ut(i, "name"), i.name && i.axisName == null && (i.axisName = i.name, delete i.name, process.env.NODE_ENV !== "production" && ve("name property in radar component has been changed to axisName")), i.nameGap != null && i.axisNameGap == null && (i.axisNameGap = i.nameGap, delete i.nameGap, process.env.NODE_ENV !== "production" && ve("nameGap property in radar component has been changed to axisNameGap")), process.env.NODE_ENV !== "production" && Wt(i.indicator, function(n) {
      n.text && gt("text", "name", "radar.indicator");
    });
  }), Wt(me(r.geo), function(i) {
    zi(i) && (qt(i), Wt(me(i.regions), function(n) {
      qt(n);
    }));
  }), Wt(me(r.timeline), function(i) {
    qt(i), mt(i, "label"), mt(i, "itemStyle"), mt(i, "controlStyle", !0);
    var n = i.data;
    G(n) && L(n, function(a) {
      F(a) && (mt(a, "label"), mt(a, "itemStyle"));
    });
  }), Wt(me(r.toolbox), function(i) {
    mt(i, "iconStyle"), Wt(i.feature, function(n) {
      mt(n, "iconStyle");
    });
  }), ut(Cl(r.axisPointer), "label"), ut(Cl(r.tooltip).axisPointer, "label");
}
function P0(r, t) {
  for (var e = t.split(","), i = r, n = 0; n < e.length && (i = i && i[e[n]], i != null); n++)
    ;
  return i;
}
function x0(r, t, e, i) {
  for (var n = t.split(","), a = r, o, s = 0; s < n.length - 1; s++)
    o = n[s], a[o] == null && (a[o] = {}), a = a[o];
  (i || a[n[s]] == null) && (a[n[s]] = e);
}
function bl(r) {
  r && L(R0, function(t) {
    t[0] in r && !(t[1] in r) && (r[t[1]] = r[t[0]]);
  });
}
var R0 = [["x", "left"], ["y", "top"], ["x2", "right"], ["y2", "bottom"]], I0 = ["grid", "geo", "parallel", "legend", "toolbox", "title", "visualMap", "dataZoom", "timeline"], ho = [["borderRadius", "barBorderRadius"], ["borderColor", "barBorderColor"], ["borderWidth", "barBorderWidth"]];
function ci(r) {
  var t = r && r.itemStyle;
  if (t)
    for (var e = 0; e < ho.length; e++) {
      var i = ho[e][1], n = ho[e][0];
      t[i] != null && (t[n] = t[i], process.env.NODE_ENV !== "production" && gt(i, n));
    }
}
function El(r) {
  r && r.alignTo === "edge" && r.margin != null && r.edgeDistance == null && (process.env.NODE_ENV !== "production" && gt("label.margin", "label.edgeDistance", "pie"), r.edgeDistance = r.margin);
}
function Ml(r) {
  r && r.downplay && !r.blur && (r.blur = r.downplay, process.env.NODE_ENV !== "production" && gt("downplay", "blur", "sunburst"));
}
function A0(r) {
  r && r.focusNodeAdjacency != null && (r.emphasis = r.emphasis || {}, r.emphasis.focus == null && (process.env.NODE_ENV !== "production" && gt("focusNodeAdjacency", "emphasis: { focus: 'adjacency'}", "graph/sankey"), r.emphasis.focus = "adjacency"));
}
function fv(r, t) {
  if (r)
    for (var e = 0; e < r.length; e++)
      t(r[e]), r[e] && fv(r[e].children, t);
}
function hv(r, t) {
  L0(r, t), r.series = Et(r.series), L(r.series, function(e) {
    if (F(e)) {
      var i = e.type;
      if (i === "line")
        e.clipOverflow != null && (e.clip = e.clipOverflow, process.env.NODE_ENV !== "production" && gt("clipOverflow", "clip", "line"));
      else if (i === "pie" || i === "gauge") {
        e.clockWise != null && (e.clockwise = e.clockWise, process.env.NODE_ENV !== "production" && gt("clockWise", "clockwise")), El(e.label);
        var n = e.data;
        if (n && !Ot(n))
          for (var a = 0; a < n.length; a++)
            El(n[a]);
        e.hoverOffset != null && (e.emphasis = e.emphasis || {}, (e.emphasis.scaleSize = null) && (process.env.NODE_ENV !== "production" && gt("hoverOffset", "emphasis.scaleSize"), e.emphasis.scaleSize = e.hoverOffset));
      } else if (i === "gauge") {
        var o = P0(e, "pointer.color");
        o != null && x0(e, "itemStyle.color", o);
      } else if (i === "bar") {
        ci(e), ci(e.backgroundStyle), ci(e.emphasis);
        var n = e.data;
        if (n && !Ot(n))
          for (var a = 0; a < n.length; a++)
            typeof n[a] == "object" && (ci(n[a]), ci(n[a] && n[a].emphasis));
      } else if (i === "sunburst") {
        var s = e.highlightPolicy;
        s && (e.emphasis = e.emphasis || {}, e.emphasis.focus || (e.emphasis.focus = s, process.env.NODE_ENV !== "production" && gt("highlightPolicy", "emphasis.focus", "sunburst"))), Ml(e), fv(e.data, Ml);
      } else
        i === "graph" || i === "sankey" ? A0(e) : i === "map" && (e.mapType && !e.map && (process.env.NODE_ENV !== "production" && gt("mapType", "map", "map"), e.map = e.mapType), e.mapLocation && (process.env.NODE_ENV !== "production" && ve("`mapLocation` is not used anymore."), Mt(e, e.mapLocation)));
      e.hoverAnimation != null && (e.emphasis = e.emphasis || {}, e.emphasis && e.emphasis.scale == null && (process.env.NODE_ENV !== "production" && gt("hoverAnimation", "emphasis.scale"), e.emphasis.scale = e.hoverAnimation)), bl(e);
    }
  }), r.dataRange && (r.visualMap = r.dataRange), L(I0, function(e) {
    var i = r[e];
    i && (G(i) || (i = [i]), L(i, function(n) {
      bl(n);
    }));
  });
}
function O0(r) {
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
  }), t.each(N0);
}
function N0(r) {
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
            c = up(c, y), _ = y;
            break;
          }
        }
      }
      return i[0] = c, i[1] = _, i;
    });
  });
}
var ya = (
  /** @class */
  function() {
    function r(t) {
      this.data = t.data || (t.sourceFormat === Le ? {} : []), this.sourceFormat = t.sourceFormat || nv, this.seriesLayoutBy = t.seriesLayoutBy || he, this.startIndex = t.startIndex || 0, this.dimensionsDetectedCount = t.dimensionsDetectedCount, this.metaRawOption = t.metaRawOption;
      var e = this.dimensionsDefine = t.dimensionsDefine;
      if (e)
        for (var i = 0; i < e.length; i++) {
          var n = e[i];
          n.type == null && av(this, i) === Ft.Must && (n.type = "ordinal");
        }
    }
    return r;
  }()
);
function zs(r) {
  return r instanceof ya;
}
function os(r, t, e) {
  e = e || cv(r);
  var i = t.seriesLayoutBy, n = k0(r, e, i, t.sourceHeader, t.dimensions), a = new ya({
    data: r,
    sourceFormat: e,
    seriesLayoutBy: i,
    dimensionsDefine: n.dimensionsDefine,
    startIndex: n.startIndex,
    dimensionsDetectedCount: n.dimensionsDetectedCount,
    metaRawOption: Z(t)
  });
  return a;
}
function vv(r) {
  return new ya({
    data: r,
    sourceFormat: Ot(r) ? be : de
  });
}
function B0(r) {
  return new ya({
    data: r.data,
    sourceFormat: r.sourceFormat,
    seriesLayoutBy: r.seriesLayoutBy,
    dimensionsDefine: Z(r.dimensionsDefine),
    startIndex: r.startIndex,
    dimensionsDetectedCount: r.dimensionsDetectedCount
  });
}
function cv(r) {
  var t = nv;
  if (Ot(r))
    t = be;
  else if (G(r)) {
    r.length === 0 && (t = Nt);
    for (var e = 0, i = r.length; e < i; e++) {
      var n = r[e];
      if (n != null) {
        if (G(n)) {
          t = Nt;
          break;
        } else if (F(n)) {
          t = pe;
          break;
        }
      }
    }
  } else if (F(r)) {
    for (var a in r)
      if (kn(r, a) && Yt(r[a])) {
        t = Le;
        break;
      }
  }
  return t;
}
function k0(r, t, e, i, n) {
  var a, o;
  if (!r)
    return {
      dimensionsDefine: Ll(n),
      startIndex: o,
      dimensionsDetectedCount: a
    };
  if (t === Nt) {
    var s = r;
    i === "auto" || i == null ? Pl(function(l) {
      l != null && l !== "-" && (q(l) ? o == null && (o = 1) : o = 0);
    }, e, s, 10) : o = bt(i) ? i : i ? 1 : 0, !n && o === 1 && (n = [], Pl(function(l, f) {
      n[f] = l != null ? l + "" : "";
    }, e, s, 1 / 0)), a = n ? n.length : e === ti ? s.length : s[0] ? s[0].length : null;
  } else if (t === pe)
    n || (n = F0(r));
  else if (t === Le)
    n || (n = [], L(r, function(l, f) {
      n.push(f);
    }));
  else if (t === de) {
    var u = la(r[0]);
    a = G(u) && u.length || 1;
  } else
    t === be && process.env.NODE_ENV !== "production" && U(!!n, "dimensions must be given if data is TypedArray.");
  return {
    startIndex: o,
    dimensionsDefine: Ll(n),
    dimensionsDetectedCount: a
  };
}
function F0(r) {
  for (var t = 0, e; t < r.length && !(e = r[t++]); )
    ;
  if (e)
    return lt(e);
}
function Ll(r) {
  if (r) {
    var t = $();
    return rt(r, function(e, i) {
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
function Pl(r, t, e, i) {
  if (t === ti)
    for (var n = 0; n < e.length && n < i; n++)
      r(e[n] ? e[n][0] : null, n);
  else
    for (var a = e[0] || [], n = 0; n < a.length && n < i; n++)
      r(a[n], n);
}
function dv(r) {
  var t = r.sourceFormat;
  return t === pe || t === Le;
}
var er, rr, ir, xl, Rl, pv = (
  /** @class */
  function() {
    function r(t, e) {
      var i = zs(t) ? t : vv(t);
      this._source = i;
      var n = this._data = i.data;
      if (i.sourceFormat === be) {
        if (process.env.NODE_ENV !== "production" && e == null)
          throw new Error("Typed array data must specify dimension size");
        this._offset = 0, this._dimSize = e, this._data = n;
      }
      Rl(this, n, i);
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
      Rl = function(o, s, u) {
        var l = u.sourceFormat, f = u.seriesLayoutBy, h = u.startIndex, c = u.dimensionsDefine, v = xl[Hs(l, f)];
        if (process.env.NODE_ENV !== "production" && U(v, "Invalide sourceFormat: " + l), O(o, v), l === be)
          o.getItem = e, o.count = n, o.fillStorage = i;
        else {
          var d = gv(l, f);
          o.getItem = It(d, null, s, h, c);
          var _ = _v(l, f);
          o.count = It(_, null, s, h, c);
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
      xl = (t = {}, t[Nt + "_" + he] = {
        pure: !0,
        appendData: a
      }, t[Nt + "_" + ti] = {
        pure: !0,
        appendData: function() {
          throw new Error('Do not support appendData when set seriesLayoutBy: "row".');
        }
      }, t[pe] = {
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
      }, t[de] = {
        appendData: a
      }, t[be] = {
        persistent: !1,
        pure: !0,
        appendData: function(o) {
          process.env.NODE_ENV !== "production" && U(Ot(o), "Added data must be TypedArray if data in initialization is TypedArray"), this._data = o;
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
), Il = function(r, t, e, i) {
  return r[i];
}, V0 = (er = {}, er[Nt + "_" + he] = function(r, t, e, i) {
  return r[i + t];
}, er[Nt + "_" + ti] = function(r, t, e, i, n) {
  i += t;
  for (var a = n || [], o = r, s = 0; s < o.length; s++) {
    var u = o[s];
    a[s] = u ? u[i] : null;
  }
  return a;
}, er[pe] = Il, er[Le] = function(r, t, e, i, n) {
  for (var a = n || [], o = 0; o < e.length; o++) {
    var s = e[o].name;
    if (process.env.NODE_ENV !== "production" && s == null)
      throw new Error();
    var u = r[s];
    a[o] = u ? u[i] : null;
  }
  return a;
}, er[de] = Il, er);
function gv(r, t) {
  var e = V0[Hs(r, t)];
  return process.env.NODE_ENV !== "production" && U(e, 'Do not support get item on "' + r + '", "' + t + '".'), e;
}
var Al = function(r, t, e) {
  return r.length;
}, z0 = (rr = {}, rr[Nt + "_" + he] = function(r, t, e) {
  return Math.max(0, r.length - t);
}, rr[Nt + "_" + ti] = function(r, t, e) {
  var i = r[0];
  return i ? Math.max(0, i.length - t) : 0;
}, rr[pe] = Al, rr[Le] = function(r, t, e) {
  var i = e[0].name;
  if (process.env.NODE_ENV !== "production" && i == null)
    throw new Error();
  var n = r[i];
  return n ? n.length : 0;
}, rr[de] = Al, rr);
function _v(r, t) {
  var e = z0[Hs(r, t)];
  return process.env.NODE_ENV !== "production" && U(e, 'Do not support count on "' + r + '", "' + t + '".'), e;
}
var vo = function(r, t, e) {
  return r[t];
}, H0 = (ir = {}, ir[Nt] = vo, ir[pe] = function(r, t, e) {
  return r[e];
}, ir[Le] = vo, ir[de] = function(r, t, e) {
  var i = la(r);
  return i instanceof Array ? i[t] : i;
}, ir[be] = vo, ir);
function yv(r) {
  var t = H0[r];
  return process.env.NODE_ENV !== "production" && U(t, 'Do not support get value on "' + r + '".'), t;
}
function Hs(r, t) {
  return r === Nt ? r + "_" + t : r;
}
function Zn(r, t, e) {
  if (r) {
    var i = r.getRawDataItem(t);
    if (i != null) {
      var n = r.getStore(), a = n.getSource().sourceFormat;
      if (e != null) {
        var o = r.getDimensionIndex(e), s = n.getDimensionProperty(o);
        return yv(a)(i, o, s);
      } else {
        var u = i;
        return a === de && (u = la(i)), u;
      }
    }
  }
}
var U0 = /\{@(.+?)\}/g, G0 = (
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
      if (o && (u.value = o.interpolatedValue), n != null && G(u.value) && (u.value = u.value[n]), !a) {
        var l = s.getItemModel(t);
        a = l.get(e === "normal" ? ["label", "formatter"] : [e, "label", "formatter"]);
      }
      if (Q(a))
        return u.status = e, u.dimensionIndex = n, a(u);
      if (q(a)) {
        var f = Z_(a, u);
        return f.replace(U0, function(h, c) {
          var v = c.length, d = c;
          d.charAt(0) === "[" && d.charAt(v - 1) === "]" && (d = +d.slice(1, v - 1), process.env.NODE_ENV !== "production" && isNaN(d) && wt("Invalide label formatter: @" + c + ", only support @[0], @[1], @[2], ..."));
          var _ = Zn(s, t, d);
          if (o && G(o.interpolatedValue)) {
            var p = s.getDimensionIndex(d);
            p >= 0 && (_ = o.interpolatedValue[p]);
          }
          return _ != null ? _ + "" : "";
        });
      }
    }, r.prototype.getRawValue = function(t, e) {
      return Zn(this.getData(e), t);
    }, r.prototype.formatTooltip = function(t, e, i) {
    }, r;
  }()
);
function Bi(r) {
  return new Y0(r);
}
var Y0 = (
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
          if (G(_))
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
      Ol.reset(e, i, n, a), this._callingProgress = t, this._callingProgress({
        start: e,
        end: i,
        count: i - e,
        next: Ol.next
      }, this.context);
    }, r.prototype._doReset = function(t) {
      this._dueIndex = this._outputDueEnd = this._dueEnd = 0, this._settedOutputEnd = null;
      var e, i;
      !t && this._reset && (e = this._reset(this.context), e && e.progress && (i = e.forceFirstProgress, e = e.progress), G(e) && !e.length && (e = null)), this._progress = e, this._modBy = this._modDataCount = null;
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
), Ol = function() {
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
function On(r, t) {
  var e = t && t.type;
  return e === "ordinal" ? r : (e === "time" && !bt(r) && r != null && r !== "-" && (r = +gh(r)), r == null || r === "" ? NaN : +r);
}
$({
  number: function(r) {
    return parseFloat(r);
  },
  time: function(r) {
    return +gh(r);
  },
  trim: function(r) {
    return q(r) ? Ne(r) : r;
  }
});
var W0 = (
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
      return On(t, e);
    }, r;
  }()
);
function $0(r, t) {
  var e = new W0(), i = r.data, n = e.sourceFormat = r.sourceFormat, a = r.startIndex, o = "";
  r.seriesLayoutBy !== he && (process.env.NODE_ENV !== "production" && (o = '`seriesLayoutBy` of upstream dataset can only be "column" in data transform.'), zt(o));
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
        kn(u, g) && (process.env.NODE_ENV !== "production" && (m = 'dimension name "' + g + '" duplicated.'), zt(m)), u[g] = y;
      }
    });
  else
    for (var f = 0; f < r.dimensionsDetectedCount; f++)
      s.push({
        index: f
      });
  var h = gv(n, he);
  t.__isBuiltIn && (e.getRawDataItem = function(_) {
    return h(i, a, s, _);
  }, e.getRawData = It(X0, null, r)), e.cloneRawData = It(q0, null, r);
  var c = _v(n, he);
  e.count = It(c, null, i, a, s);
  var v = yv(n);
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
  return e.getDimensionInfo = It(Z0, null, s, u), e.cloneAllDimensionInfo = It(K0, null, s), e;
}
function X0(r) {
  var t = r.sourceFormat;
  if (!Us(t)) {
    var e = "";
    process.env.NODE_ENV !== "production" && (e = "`getRawData` is not supported in source format " + t), zt(e);
  }
  return r.data;
}
function q0(r) {
  var t = r.sourceFormat, e = r.data;
  if (!Us(t)) {
    var i = "";
    process.env.NODE_ENV !== "production" && (i = "`cloneRawData` is not supported in source format " + t), zt(i);
  }
  if (t === Nt) {
    for (var n = [], a = 0, o = e.length; a < o; a++)
      n.push(e[a].slice());
    return n;
  } else if (t === pe) {
    for (var n = [], a = 0, o = e.length; a < o; a++)
      n.push(O({}, e[a]));
    return n;
  }
}
function Z0(r, t, e) {
  if (e != null) {
    if (bt(e) || !isNaN(e) && !kn(t, e))
      return r[e];
    if (kn(t, e))
      return t[e];
  }
}
function K0(r) {
  return Z(r);
}
var mv = $();
function Q0(r) {
  r = Z(r);
  var t = r.type, e = "";
  t || (process.env.NODE_ENV !== "production" && (e = "Must have a `type` when `registerTransform`."), zt(e));
  var i = t.split(":");
  i.length !== 2 && (process.env.NODE_ENV !== "production" && (e = 'Name must include namespace like "ns:regression".'), zt(e));
  var n = !1;
  i[0] === "echarts" && (t = i[1], n = !0), r.__isBuiltIn = n, mv.set(t, r);
}
function J0(r, t, e) {
  var i = Et(r), n = i.length, a = "";
  n || (process.env.NODE_ENV !== "production" && (a = "If `transform` declared, it should at least contain one transform."), zt(a));
  for (var o = 0, s = n; o < s; o++) {
    var u = i[o];
    t = j0(u, t, e, n === 1 ? null : o), o !== s - 1 && (t.length = Math.max(t.length, 1));
  }
  return t;
}
function j0(r, t, e, i) {
  var n = "";
  t.length || (process.env.NODE_ENV !== "production" && (n = "Must have at least one upstream dataset."), zt(n)), F(r) || (process.env.NODE_ENV !== "production" && (n = "transform declaration must be an object rather than " + typeof r + "."), zt(n));
  var a = r.type, o = mv.get(a);
  o || (process.env.NODE_ENV !== "production" && (n = 'Can not find transform on type "' + a + '".'), zt(n));
  var s = rt(t, function(f) {
    return $0(f, o);
  }), u = Et(o.transform({
    upstream: s[0],
    upstreamList: s,
    config: Z(r.config)
  }));
  if (process.env.NODE_ENV !== "production" && r.print) {
    var l = rt(u, function(f) {
      var h = i != null ? " === pipe index: " + i : "";
      return ["=== dataset index: " + e.datasetIndex + h + " ===", "- transform result data:", $o(f.data), "- transform result dimensions:", $o(f.dimensions)].join(`
`);
    }).join(`
`);
    pp(l);
  }
  return rt(u, function(f, h) {
    var c = "";
    F(f) || (process.env.NODE_ENV !== "production" && (c = "A transform should not return some empty results."), zt(c)), f.data || (process.env.NODE_ENV !== "production" && (c = "Transform result data should be not be null or undefined"), zt(c));
    var v = cv(f.data);
    Us(v) || (process.env.NODE_ENV !== "production" && (c = "Transform result data should be array rows or object rows."), zt(c));
    var d, _ = t[0];
    if (_ && h === 0 && !f.dimensions) {
      var p = _.startIndex;
      p && (f.data = _.data.slice(0, p).concat(f.data)), d = {
        seriesLayoutBy: he,
        sourceHeader: p,
        dimensions: _.metaRawOption.dimensions
      };
    } else
      d = {
        seriesLayoutBy: he,
        sourceHeader: 0,
        dimensions: f.dimensions
      };
    return os(f.data, d, null);
  });
}
function Us(r) {
  return r === Nt || r === pe;
}
var ma = "undefined", ty = typeof Uint32Array === ma ? Array : Uint32Array, ey = typeof Uint16Array === ma ? Array : Uint16Array, wv = typeof Int32Array === ma ? Array : Int32Array, Nl = typeof Float64Array === ma ? Array : Float64Array, Sv = {
  float: Nl,
  int: wv,
  // Ordinal data type can be string or int
  ordinal: Array,
  number: Array,
  time: Nl
}, co;
function di(r) {
  return r > 65535 ? ty : ey;
}
function Mr() {
  return [1 / 0, -1 / 0];
}
function ry(r) {
  var t = r.constructor;
  return t === Array ? r.slice() : new t(r);
}
function Bl(r, t, e, i, n) {
  var a = Sv[e || "float"];
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
var ss = (
  /** @class */
  function() {
    function r() {
      this._chunks = [], this._rawExtent = [], this._extent = [], this._count = 0, this._rawCount = 0, this._calcDimNameToIdx = $();
    }
    return r.prototype.initData = function(t, e, i) {
      process.env.NODE_ENV !== "production" && U(Q(t.getItem) && Q(t.count), "Invalid data provider."), this._provider = t, this._chunks = [], this._indices = null, this.getRawIndex = this._getRawIdxIdentity;
      var n = t.getSource(), a = this.defaultDimValueGetter = co[n.sourceFormat];
      this._dimValueGetter = i || a, this._rawExtent = [];
      var o = dv(n);
      this._dimensions = rt(e, function(s) {
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
      }, i.set(t, a), this._chunks[a] = new Sv[e || "float"](this._rawCount), this._rawExtent[a] = Mr(), a;
    }, r.prototype.collectOrdinalMeta = function(t, e) {
      var i = this._chunks[t], n = this._dimensions[t], a = this._rawExtent, o = n.ordinalOffset || 0, s = i.length;
      o === 0 && (a[t] = Mr());
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
        Bl(i, l, f.type, u, !0);
      }
      for (var h = [], c = s; c < u; c++)
        for (var v = c - s, d = 0; d < a; d++) {
          var f = n[d], _ = co.arrayRows.call(this, t[v] || h, f.property, v, d);
          i[d][c] = _;
          var p = o[d];
          _ < p[0] && (p[0] = _), _ > p[1] && (p[1] = _);
        }
      return this._rawCount = this._count = u, {
        start: s,
        end: u
      };
    }, r.prototype._initDataFromProvider = function(t, e, i) {
      for (var n = this._provider, a = this._chunks, o = this._dimensions, s = o.length, u = this._rawExtent, l = rt(o, function(y) {
        return y.property;
      }), f = 0; f < s; f++) {
        var h = o[f];
        u[f] || (u[f] = Mr()), Bl(a, f, h.type, e, i);
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
        var i = di(this._rawCount);
        t = new i(this.count());
        for (var a = 0; a < t.length; a++)
          t[a] = a;
      }
      return t;
    }, r.prototype.filter = function(t, e) {
      if (!this._count)
        return this;
      for (var i = this.clone(), n = i.count(), a = di(i._rawCount), o = new a(n), s = [], u = t.length, l = 0, f = t[0], h = i._chunks, c = 0; c < n; c++) {
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
      var o = e.count(), s = di(e._rawCount), u = new s(o), l = 0, f = n[0], h = t[f][0], c = t[f][1], v = e._chunks, d = !1;
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
        l[e[f]] = Mr();
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
      var i = this.clone([t], !0), n = i._chunks, a = n[t], o = this.count(), s = 0, u = Math.floor(1 / e), l = this.getRawIndex(0), f, h, c, v = new (di(this._rawCount))(Math.min((Math.ceil(o / u) + 2) * 2, o));
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
      for (var a = this.clone([t], !0), o = a._chunks, s = [], u = Math.floor(1 / e), l = o[t], f = this.count(), h = a._rawExtent[t] = Mr(), c = new (di(this._rawCount))(Math.ceil(f / u)), v = 0, d = 0; d < f; d += u) {
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
      var e = this._chunks[t], i = Mr();
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
      var i = new r(), n = this._chunks, a = t && Qr(t, function(s, u) {
        return s[u] = !0, s;
      }, {});
      if (a)
        for (var o = 0; o < n.length; o++)
          i._chunks[o] = a[o] ? ry(n[o]) : n[o];
      else
        i._chunks = n;
      return this._copyCommonProps(i), e || (i._indices = this._cloneIndices()), i._updateGetRawIdx(), i;
    }, r.prototype._copyCommonProps = function(t) {
      t._count = this._count, t._rawCount = this._rawCount, t._provider = this._provider, t._dimensions = this._dimensions, t._extent = Z(this._extent), t._rawExtent = Z(this._rawExtent);
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
        return On(e[a], this._dimensions[a]);
      }
      co = {
        arrayRows: t,
        objectRows: function(e, i, n, a) {
          return On(e[i], this._dimensions[a]);
        },
        keyedColumns: t,
        original: function(e, i, n, a) {
          var o = e && (e.value == null ? e : e.value);
          return On(o instanceof Array ? o[a] : o, this._dimensions[a]);
        },
        typedArray: function(e, i, n, a) {
          return e[a];
        }
      };
    }(), r;
  }()
), Tv = (
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
      if (pi(t)) {
        var o = t, s = void 0, u = void 0, l = void 0;
        if (i) {
          var f = e[0];
          f.prepareSource(), l = f.getSource(), s = l.data, u = l.sourceFormat, a = [f._getVersionSign()];
        } else
          s = o.get("data", !0), u = Ot(s) ? be : de, a = [];
        var h = this._getSourceMetaRawOption() || {}, c = l && l.metaRawOption || {}, v = W(h.seriesLayoutBy, c.seriesLayoutBy) || null, d = W(h.sourceHeader, c.sourceHeader), _ = W(h.dimensions, c.dimensions), p = v !== c.seriesLayoutBy || !!d != !!c.sourceHeader || _;
        n = p ? [os(s, {
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
          n = [os(m, this._getSourceMetaRawOption(), null)], a = [];
        }
      }
      process.env.NODE_ENV !== "production" && U(n && a), this._setLocalSource(n, a);
    }, r.prototype._applyTransform = function(t) {
      var e = this._sourceHost, i = e.get("transform", !0), n = e.get("fromTransformResult", !0);
      if (process.env.NODE_ENV !== "production" && U(n != null || i != null), n != null) {
        var a = "";
        t.length !== 1 && (process.env.NODE_ENV !== "production" && (a = "When using `fromTransformResult`, there should be only one upstream dataset"), Fl(a));
      }
      var o, s = [], u = [];
      return L(t, function(l) {
        l.prepareSource();
        var f = l.getSource(n || 0), h = "";
        n != null && !f && (process.env.NODE_ENV !== "production" && (h = "Can not retrieve result by `fromTransformResult`: " + n), Fl(h)), s.push(f), u.push(l._getVersionSign());
      }), i ? o = J0(i, s, {
        datasetIndex: e.componentIndex
      }) : n != null && (o = [B0(s[0])]), {
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
      process.env.NODE_ENV !== "production" && U(pi(this._sourceHost), "Can only call getDataStore on series source manager.");
      var e = t.makeStoreSchema();
      return this._innerGetDataStore(e.dimensions, t.source, e.hash);
    }, r.prototype._innerGetDataStore = function(t, e, i) {
      var n = 0, a = this._storeList, o = a[n];
      o || (o = a[n] = {});
      var s = o[i];
      if (!s) {
        var u = this._getUpstreamSourceManagers()[0];
        pi(this._sourceHost) && u ? s = u._innerGetDataStore(t, e, i) : (s = new ss(), s.initData(new pv(e, t.length), t)), o[i] = s;
      }
      return s;
    }, r.prototype._getUpstreamSourceManagers = function() {
      var t = this._sourceHost;
      if (pi(t)) {
        var e = n0(t);
        return e ? [e.getSourceManager()] : [];
      } else
        return rt(a0(t), function(i) {
          return i.getSourceManager();
        });
    }, r.prototype._getSourceMetaRawOption = function() {
      var t = this._sourceHost, e, i, n;
      if (pi(t))
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
function kl(r) {
  var t = r.option.transform;
  t && Bn(r.option.transform);
}
function pi(r) {
  return r.mainType === "series";
}
function Fl(r) {
  throw new Error(r);
}
function us(r, t) {
  return t.type = r, t;
}
function iy(r, t) {
  var e = r.getData().getItemVisual(t, "style"), i = e[r.visualDrawType];
  return K_(i);
}
function ny(r) {
  var t = r.series, e = r.dataIndex, i = r.multipleSeries, n = t.getData(), a = n.mapDimensionsAll("defaultedTooltip"), o = a.length, s = t.getRawValue(e), u = G(s), l = iy(t, e), f, h, c, v;
  if (o > 1 || u && !o) {
    var d = ay(s, t, e, a, l);
    f = d.inlineValues, h = d.inlineValueTypes, c = d.blocks, v = d.inlineValues[0];
  } else if (o) {
    var _ = n.getDimensionInfo(a[0]);
    v = f = Zn(n, e, a[0]), h = _.type;
  } else
    v = f = u ? s[0] : s;
  var p = wh(t), g = p && t.name || "", y = n.getName(e), m = i ? g : y;
  return us("section", {
    header: g,
    // When series name is not specified, do not show a header line with only '-'.
    // This case always happens in tooltip.trigger: 'item'.
    noHeader: i || !p,
    sortParam: v,
    blocks: [us("nameValue", {
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
function ay(r, t, e, i, n) {
  var a = t.getData(), o = Qr(r, function(h, c, v) {
    var d = a.getDimensionInfo(v);
    return h = h || d && d.tooltip !== !1 && d.displayName != null;
  }, !1), s = [], u = [], l = [];
  i.length ? L(i, function(h) {
    f(Zn(a, e, h), h);
  }) : L(r, f);
  function f(h, c) {
    var v = a.getDimensionInfo(c);
    !v || v.otherDims.tooltip === !1 || (o ? l.push(us("nameValue", {
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
function ln(r, t) {
  return r.getName(t) || r.getId(t);
}
var oy = "__universalTransitionEnabled", wa = (
  /** @class */
  function(r) {
    J(t, r);
    function t() {
      var e = r !== null && r.apply(this, arguments) || this;
      return e._selectedDataIndicesMap = {}, e;
    }
    return t.prototype.init = function(e, i, n) {
      this.seriesIndex = this.componentIndex, this.dataTask = Bi({
        count: uy,
        reset: ly
      }), this.dataTask.context = {
        model: this
      }, this.mergeDefaultAndTheme(e, n);
      var a = Re(this).sourceManager = new Tv(this);
      a.prepareSource();
      var o = this.getInitialData(e, n);
      zl(o, this), this.dataTask.context.data = o, process.env.NODE_ENV !== "production" && U(o, "getInitialData returned invalid data."), Re(this).dataBeforeProcessed = o, Vl(this), this._initSelectedMapFromData(o);
    }, t.prototype.mergeDefaultAndTheme = function(e, i) {
      var n = $n(this), a = n ? rv(e) : {}, o = this.subType;
      st.hasClass(o) && (o += "Series"), ft(e, i.getTheme().get(this.subType)), ft(e, this.getDefaultOption()), Ru(e, "label", ["show"]), this.fillDataTextStyle(e.data), n && Xn(e, a, n);
    }, t.prototype.mergeOption = function(e, i) {
      e = ft(this.option, e, !0), this.fillDataTextStyle(e.data);
      var n = $n(this);
      n && Xn(this.option, e, n);
      var a = Re(this).sourceManager;
      a.dirty(), a.prepareSource();
      var o = this.getInitialData(e, i);
      zl(o, this), this.dataTask.dirty(), this.dataTask.context.data = o, Re(this).dataBeforeProcessed = o, Vl(this), this._initSelectedMapFromData(o);
    }, t.prototype.fillDataTextStyle = function(e) {
      if (e && !Ot(e))
        for (var i = ["show"], n = 0; n < e.length; n++)
          e[n] && e[n].label && Ru(e[n], "label", i);
    }, t.prototype.getInitialData = function(e, i) {
    }, t.prototype.appendData = function(e) {
      var i = this.getRawData();
      i.appendData(e.data);
    }, t.prototype.getData = function(e) {
      var i = ls(this);
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
      var i = ls(this);
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
      return ny({
        series: this,
        dataIndex: e,
        multipleSeries: i
      });
    }, t.prototype.isAnimationEnabled = function() {
      var e = this.ecModel;
      if (et.node && !(e && e.ssr))
        return !1;
      var i = this.getShallow("animation");
      return i && this.getData().count() > this.getShallow("animationThreshold") && (i = !1), !!i;
    }, t.prototype.restoreData = function() {
      this.dataTask.dirty();
    }, t.prototype.getColorFromPalette = function(e, i, n) {
      var a = this.ecModel, o = Vs.prototype.getColorFromPalette.call(this, e, i, n);
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
          var u = e[s], l = ln(o, u);
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
      return (n === "all" || n[ln(a, e)]) && !a.getItemModel(e).get(["select", "disabled"]);
    }, t.prototype.isUniversalTransitionEnabled = function() {
      if (this[oy])
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
            var h = i[f], c = ln(e, h);
            l[c] = !0, this._selectedDataIndicesMap[c] = e.getRawIndex(h);
          }
        } else if (s === "single" || s === !0) {
          var v = i[u - 1], c = ln(e, v);
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
Ee(wa, G0);
Ee(wa, Vs);
Dh(wa, st);
function Vl(r) {
  var t = r.name;
  wh(r) || (r.name = sy(r) || t);
}
function sy(r) {
  var t = r.getRawData(), e = t.mapDimensionsAll("seriesName"), i = [];
  return L(e, function(n) {
    var a = t.getDimensionInfo(n);
    a.displayName && i.push(a.displayName);
  }), i.join(" ");
}
function uy(r) {
  return r.model.getRawData().count();
}
function ly(r) {
  var t = r.model;
  return t.setData(t.getRawData().cloneShallow()), fy;
}
function fy(r, t) {
  t.outputData && r.end > t.outputData.count() && t.model.getRawData().cloneShallow(t.outputData);
}
function zl(r, t) {
  L(Oc(r.CHANGABLE_METHODS, r.DOWNSAMPLE_METHODS), function(e) {
    r.wrapMethod(e, Ts(hy, t));
  });
}
function hy(r, t) {
  var e = ls(r);
  return e && e.setOutputEnd((t || this).count()), t;
}
function ls(r) {
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
const qr = wa;
var Gs = (
  /** @class */
  function() {
    function r() {
      this.group = new Yr(), this.uid = _a("viewComponent");
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
xs(Gs);
Rs(Gs);
const Kn = Gs;
function vy() {
  var r = _t();
  return function(t) {
    var e = r(t), i = t.pipelineContext, n = !!e.large, a = !!e.progressiveRender, o = e.large = !!(i && i.large), s = e.progressiveRender = !!(i && i.progressiveRender);
    return (n !== o || a !== s) && "reset";
  };
}
var Dv = _t(), cy = vy(), Ys = (
  /** @class */
  function() {
    function r() {
      this.group = new Yr(), this.uid = _a("viewChart"), this.renderTask = Bi({
        plan: dy,
        reset: py
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
      Ul(a, n, "emphasis");
    }, r.prototype.downplay = function(t, e, i, n) {
      var a = t.getData(n && n.dataType);
      if (!a) {
        process.env.NODE_ENV !== "production" && wt("Unknown dataType " + n.dataType);
        return;
      }
      Ul(a, n, "normal");
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
      M_(this.group, t);
    }, r.markUpdateMethod = function(t, e) {
      Dv(t).updateMethod = e;
    }, r.protoInitialize = function() {
      var t = r.prototype;
      t.type = "chart";
    }(), r;
  }()
);
function Hl(r, t, e) {
  r && Xr(r) && (t === "emphasis" ? Qo : Jo)(r, e);
}
function Ul(r, t, e) {
  var i = fa(r, t), n = t && t.highlightKey != null ? Jg(t.highlightKey) : null;
  i != null ? L(Et(i), function(a) {
    Hl(r.getItemGraphicEl(a), e, n);
  }) : r.eachItemGraphicEl(function(a) {
    Hl(a, e, n);
  });
}
xs(Ys, ["dispose"]);
Rs(Ys);
function dy(r) {
  return cy(r.model);
}
function py(r) {
  var t = r.model, e = r.ecModel, i = r.api, n = r.payload, a = t.pipelineContext.progressiveRender, o = r.view, s = n && Dv(n).updateMethod, u = a ? "incrementalPrepareRender" : s && o[s] ? s : "render";
  return u !== "render" && o[u](t, e, i, n), gy[u];
}
var gy = {
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
const dr = Ys;
function _y(r, t, e) {
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
var Gl = _t(), Yl = {
  itemStyle: Vi(jh, !0),
  lineStyle: Vi(Jh, !0)
}, yy = {
  lineStyle: "stroke",
  itemStyle: "fill"
};
function Cv(r, t) {
  var e = r.visualStyleMapper || Yl[t];
  return e || (console.warn("Unknown style type '" + t + "'."), Yl.itemStyle);
}
function bv(r, t) {
  var e = r.visualDrawType || yy[t];
  return e || (console.warn("Unknown style type '" + t + "'."), "fill");
}
var my = {
  createOnAllSeries: !0,
  performRawSeries: !0,
  reset: function(r, t) {
    var e = r.getData(), i = r.visualStyleAccessPath || "itemStyle", n = r.getModel(i), a = Cv(r, i), o = a(n), s = n.getShallow("decal");
    s && (e.setVisual("decal", s), s.dirty = !0);
    var u = bv(r, i), l = o[u], f = Q(l) ? l : null, h = o.fill === "auto" || o.stroke === "auto";
    if (!o[u] || f || h) {
      var c = r.getColorFromPalette(
        // TODO series count changed.
        r.name,
        null,
        t.getSeriesCount()
      );
      o[u] || (o[u] = c, e.setVisual("colorFromPalette", !0)), o.fill = o.fill === "auto" || Q(o.fill) ? c : o.fill, o.stroke = o.stroke === "auto" || Q(o.stroke) ? c : o.stroke;
    }
    if (e.setVisual("style", o), e.setVisual("drawType", u), !t.isSeriesFiltered(r) && f)
      return e.setVisual("colorFromPalette", !1), {
        dataEach: function(v, d) {
          var _ = r.getDataParams(d), p = O({}, o);
          p[u] = f(_), v.setItemVisual(d, "style", p);
        }
      };
  }
}, gi = new Fe(), wy = {
  createOnAllSeries: !0,
  performRawSeries: !0,
  reset: function(r, t) {
    if (!(r.ignoreStyleOnData || t.isSeriesFiltered(r))) {
      var e = r.getData(), i = r.visualStyleAccessPath || "itemStyle", n = Cv(r, i), a = e.getVisual("drawType");
      return {
        dataEach: e.hasItemOption ? function(o, s) {
          var u = o.getRawDataItem(s);
          if (u && u[i]) {
            gi.option = u[i];
            var l = n(gi), f = o.ensureUniqueItemVisual(s, "style");
            O(f, l), gi.option.decal && (o.setItemVisual(s, "decal", gi.option.decal), gi.option.decal.dirty = !0), a in l && o.setItemVisual(s, "colorFromPalette", !1);
          }
        } : null
      };
    }
  }
}, Sy = {
  performRawSeries: !0,
  overallReset: function(r) {
    var t = $();
    r.eachSeries(function(e) {
      var i = e.getColorBy();
      if (!e.isColorBySeries()) {
        var n = e.type + "-" + i, a = t.get(n);
        a || (a = {}, t.set(n, a)), Gl(e).scope = a;
      }
    }), r.eachSeries(function(e) {
      if (!(e.isColorBySeries() || r.isSeriesFiltered(e))) {
        var i = e.getRawData(), n = {}, a = e.getData(), o = Gl(e).scope, s = e.visualStyleAccessPath || "itemStyle", u = bv(e, s);
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
}, fn = Math.PI;
function Ty(r, t) {
  t = t || {}, Mt(t, {
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
  var e = new Yr(), i = new Ce({
    style: {
      fill: t.maskColor
    },
    zlevel: t.zlevel,
    z: 1e4
  });
  e.add(i);
  var n = new Un({
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
  return t.showSpinner && (o = new m_({
    shape: {
      startAngle: -fn / 2,
      endAngle: -fn / 2 + 0.1,
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
    endAngle: fn * 3 / 2
  }).start("circularInOut"), o.animateShape(!0).when(1e3, {
    startAngle: fn * 3 / 2
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
var Dy = (
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
        var c = h.uid, v = s.set(c, o && o.get(c) || Bi({
          plan: Ly,
          reset: Py,
          count: Ry
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
      var a = this, o = e.overallTask = e.overallTask || Bi({
        reset: Cy
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
        (c = !0, Bi({
          reset: by,
          onDirty: My
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
      return Q(t) && (t = {
        overallReset: t,
        seriesType: Iy(t)
      }), t.uid = _a("stageHandler"), e && (t.visualType = e), t;
    }, r;
  }()
);
function Cy(r) {
  r.overallReset(r.ecModel, r.api, r.payload);
}
function by(r) {
  return r.overallProgress && Ey;
}
function Ey() {
  this.agent.dirty(), this.getDownstream().dirty();
}
function My() {
  this.agent && this.agent.dirty();
}
function Ly(r) {
  return r.plan ? r.plan(r.model, r.ecModel, r.api, r.payload) : null;
}
function Py(r) {
  r.useClearVisual && r.data.clearAllVisual();
  var t = r.resetDefines = Et(r.reset(r.model, r.ecModel, r.api, r.payload));
  return t.length > 1 ? rt(t, function(e, i) {
    return Ev(i);
  }) : xy;
}
var xy = Ev(0);
function Ev(r) {
  return function(t, e) {
    var i = e.data, n = e.resetDefines[r];
    if (n && n.dataEach)
      for (var a = t.start; a < t.end; a++)
        n.dataEach(i, a);
    else
      n && n.progress && n.progress(t, i);
  };
}
function Ry(r) {
  return r.data.count();
}
function Iy(r) {
  Qn = null;
  try {
    r(Hi, Mv);
  } catch {
  }
  return Qn;
}
var Hi = {}, Mv = {}, Qn;
Lv(Hi, sv);
Lv(Mv, uv);
Hi.eachSeriesByType = Hi.eachRawSeriesByType = function(r) {
  Qn = r;
};
Hi.eachComponent = function(r) {
  r.mainType === "series" && r.subType && (Qn = r.subType);
};
function Lv(r, t) {
  for (var e in t.prototype)
    r[e] = jt;
}
const Pv = Dy;
var Wl = ["#37A2DA", "#32C5E9", "#67E0E3", "#9FE6B8", "#FFDB5C", "#ff9f7f", "#fb7293", "#E062AE", "#E690D1", "#e7bcf3", "#9d96f5", "#8378EA", "#96BFFF"];
const Ay = {
  color: Wl,
  colorLayer: [["#37A2DA", "#ffd85c", "#fd7b5f"], ["#37A2DA", "#67E0E3", "#FFDB5C", "#ff9f7f", "#E062AE", "#9d96f5"], ["#37A2DA", "#32C5E9", "#9FE6B8", "#FFDB5C", "#ff9f7f", "#fb7293", "#e7bcf3", "#8378EA", "#96BFFF"], Wl]
};
var Tt = "#B9B8CE", $l = "#100C2A", hn = function() {
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
}, Xl = ["#4992ff", "#7cffb2", "#fddd60", "#ff6e76", "#58d9f9", "#05c091", "#ff8a45", "#8d48e3", "#dd79ff"], xv = {
  darkMode: !0,
  color: Xl,
  backgroundColor: $l,
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
      color: $l
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
  timeAxis: hn(),
  logAxis: hn(),
  valueAxis: hn(),
  categoryAxis: hn(),
  line: {
    symbol: "circle"
  },
  graph: {
    color: Xl
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
xv.categoryAxis.splitLine.show = !1;
const Oy = xv;
var Ny = (
  /** @class */
  function() {
    function r() {
    }
    return r.prototype.normalizeQuery = function(t) {
      var e = {}, i = {}, n = {};
      if (q(t)) {
        var a = le(t);
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
), fs = ["symbol", "symbolSize", "symbolRotate", "symbolOffset"], ql = fs.concat(["symbolKeepAspect"]), By = {
  createOnAllSeries: !0,
  // For legend.
  performRawSeries: !0,
  reset: function(r, t) {
    var e = r.getData();
    if (r.legendIcon && e.setVisual("legendIcon", r.legendIcon), !r.hasSymbolVisual)
      return;
    for (var i = {}, n = {}, a = !1, o = 0; o < fs.length; o++) {
      var s = fs[o], u = r.get(s);
      Q(u) ? (a = !0, n[s] = u) : i[s] = u;
    }
    if (i.symbol = i.symbol || r.defaultSymbol, e.setVisual(O({
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
}, ky = {
  createOnAllSeries: !0,
  // For legend.
  performRawSeries: !0,
  reset: function(r, t) {
    if (!r.hasSymbolVisual || t.isSeriesFiltered(r))
      return;
    var e = r.getData();
    function i(n, a) {
      for (var o = n.getItemModel(a), s = 0; s < ql.length; s++) {
        var u = ql[s], l = o.getShallow(u, !0);
        l != null && n.setItemVisual(a, u, l);
      }
    }
    return {
      dataEach: e.hasItemOption ? i : null
    };
  }
};
function Fy(r, t, e) {
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
function Vy(r, t) {
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
function Lr(r, t, e, i, n) {
  var a = r + t;
  e.isSilent(a) || (process.env.NODE_ENV !== "production" && ve("event " + a + " is deprecated."), i.eachComponent({
    mainType: "series",
    subType: "pie"
  }, function(o) {
    for (var s = o.seriesIndex, u = o.option.selectedMap, l = n.selected, f = 0; f < l.length; f++)
      if (l[f].seriesIndex === s) {
        var h = o.getData(), c = fa(h, n.fromActionPayload);
        e.trigger(a, {
          type: a,
          seriesId: o.id,
          name: G(c) ? h.getName(c[0]) : h.getName(c),
          selected: q(u) ? u : O({}, u)
        });
      }
  }));
}
function zy(r, t, e) {
  r.on("selectchanged", function(i) {
    var n = e.getModel();
    i.isFromClick ? (Lr("map", "selectchanged", t, n, i), Lr("pie", "selectchanged", t, n, i)) : i.fromAction === "select" ? (Lr("map", "selected", t, n, i), Lr("pie", "selected", t, n, i)) : i.fromAction === "unselect" && (Lr("map", "unselected", t, n, i), Lr("pie", "unselected", t, n, i));
  });
}
function vn(r, t, e) {
  for (var i; r && !(t(r) && (i = r, e)); )
    r = r.__hostTarget || r.parent;
  return i;
}
var Hy = Math.round(Math.random() * 9), Uy = typeof Object.defineProperty == "function", Gy = function() {
  function r() {
    this._id = "__ec_inner_" + Hy++;
  }
  return r.prototype.get = function(t) {
    return this._guard(t)[this._id];
  }, r.prototype.set = function(t, e) {
    var i = this._guard(t);
    return Uy ? Object.defineProperty(i, this._id, {
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
const Yy = Gy;
var Wy = ht.extend({
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
}), $y = ht.extend({
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
}), Xy = ht.extend({
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
}), qy = ht.extend({
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
}), Zy = {
  line: __,
  rect: Ce,
  roundRect: Ce,
  square: Ce,
  circle: Wh,
  diamond: $y,
  pin: Xy,
  arrow: qy,
  triangle: Wy
}, Ky = {
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
}, hs = {};
L(Zy, function(r, t) {
  hs[t] = new r();
});
var Qy = ht.extend({
  type: "symbol",
  shape: {
    symbolType: "",
    x: 0,
    y: 0,
    width: 0,
    height: 0
  },
  calculateTextPosition: function(r, t, e) {
    var i = fh(r, t, e), n = this.shape;
    return n && n.symbolType === "pin" && t.position === "inside" && (i.y = e.y + e.height * 0.4), i;
  },
  buildPath: function(r, t, e) {
    var i = t.symbolType;
    if (i !== "none") {
      var n = hs[i];
      n || (i = "rect", n = hs[i]), Ky[i](t.x, t.y, t.width, t.height, n.shape), n.buildPath(r, n.shape, e);
    }
  }
});
function Jy(r, t) {
  if (this.type !== "image") {
    var e = this.style;
    this.__isEmptyBrush ? (e.stroke = r, e.fill = t || "#fff", e.lineWidth = 2) : this.shape.symbolType === "line" ? e.stroke = r : e.fill = r, this.markRedraw();
  }
}
function vs(r, t, e, i, n, a, o) {
  var s = r.indexOf("empty") === 0;
  s && (r = r.substr(5, 1).toLowerCase() + r.substr(6));
  var u;
  return r.indexOf("image://") === 0 ? u = b_(r.slice(8), new tt(t, e, i, n), o ? "center" : "cover") : r.indexOf("path://") === 0 ? u = ns(r.slice(7), {}, new tt(t, e, i, n), o ? "center" : "cover") : u = new Qy({
    shape: {
      symbolType: r,
      x: t,
      y: e,
      width: i,
      height: n
    }
  }), u.__isEmptyBrush = s, u.setColor = Jy, a && u.setColor(a), u;
}
function ur(r) {
  return isFinite(r);
}
function jy(r, t, e) {
  var i = t.x == null ? 0 : t.x, n = t.x2 == null ? 1 : t.x2, a = t.y == null ? 0 : t.y, o = t.y2 == null ? 0 : t.y2;
  t.global || (i = i * e.width + e.x, n = n * e.width + e.x, a = a * e.height + e.y, o = o * e.height + e.y), i = ur(i) ? i : 0, n = ur(n) ? n : 1, a = ur(a) ? a : 0, o = ur(o) ? o : 0;
  var s = r.createLinearGradient(i, a, n, o);
  return s;
}
function tm(r, t, e) {
  var i = e.width, n = e.height, a = Math.min(i, n), o = t.x == null ? 0.5 : t.x, s = t.y == null ? 0.5 : t.y, u = t.r == null ? 0.5 : t.r;
  t.global || (o = o * i + e.x, s = s * n + e.y, u = u * a), o = ur(o) ? o : 0.5, s = ur(s) ? s : 0.5, u = u >= 0 && ur(u) ? u : 0.5;
  var l = r.createRadialGradient(o, s, 0, o, s, u);
  return l;
}
function cs(r, t, e) {
  for (var i = t.type === "radial" ? tm(r, t, e) : jy(r, t, e), n = t.colorStops, a = 0; a < n.length; a++)
    i.addColorStop(n[a].offset, n[a].color);
  return i;
}
function em(r, t) {
  if (r === t || !r && !t)
    return !1;
  if (!r || !t || r.length !== t.length)
    return !0;
  for (var e = 0; e < r.length; e++)
    if (r[e] !== t[e])
      return !0;
  return !1;
}
function cn(r) {
  return parseInt(r, 10);
}
function dn(r, t, e) {
  var i = ["width", "height"][t], n = ["clientWidth", "clientHeight"][t], a = ["paddingLeft", "paddingTop"][t], o = ["paddingRight", "paddingBottom"][t];
  if (e[i] != null && e[i] !== "auto")
    return parseFloat(e[i]);
  var s = document.defaultView.getComputedStyle(r);
  return (r[n] || cn(s[i]) || cn(r.style[i])) - (cn(s[a]) || 0) - (cn(s[o]) || 0) | 0;
}
function rm(r, t) {
  return !r || r === "solid" || !(t > 0) ? null : r === "dashed" ? [4 * t, 2 * t] : r === "dotted" ? [t] : bt(r) ? [r] : G(r) ? r : null;
}
function Rv(r) {
  var t = r.style, e = t.lineDash && t.lineWidth > 0 && rm(t.lineDash, t.lineWidth), i = t.lineDashOffset;
  if (e) {
    var n = t.strokeNoScale && r.getLineScale ? r.getLineScale() : 1;
    n && n !== 1 && (e = rt(e, function(a) {
      return a / n;
    }), i /= n);
  }
  return [e, i];
}
var im = new gr(!0);
function Jn(r) {
  var t = r.stroke;
  return !(t == null || t === "none" || !(r.lineWidth > 0));
}
function Zl(r) {
  return typeof r == "string" && r !== "none";
}
function jn(r) {
  var t = r.fill;
  return t != null && t !== "none";
}
function Kl(r, t) {
  if (t.fillOpacity != null && t.fillOpacity !== 1) {
    var e = r.globalAlpha;
    r.globalAlpha = t.fillOpacity * t.opacity, r.fill(), r.globalAlpha = e;
  } else
    r.fill();
}
function Ql(r, t) {
  if (t.strokeOpacity != null && t.strokeOpacity !== 1) {
    var e = r.globalAlpha;
    r.globalAlpha = t.strokeOpacity * t.opacity, r.stroke(), r.globalAlpha = e;
  } else
    r.stroke();
}
function ds(r, t, e) {
  var i = Ch(t.image, t.__image, e);
  if (va(i)) {
    var n = r.createPattern(i, t.repeat || "repeat");
    if (typeof DOMMatrix == "function" && n && n.setTransform) {
      var a = new DOMMatrix();
      a.translateSelf(t.x || 0, t.y || 0), a.rotateSelf(0, 0, (t.rotation || 0) * Nc), a.scaleSelf(t.scaleX || 1, t.scaleY || 1), n.setTransform(a);
    }
    return n;
  }
}
function nm(r, t, e, i) {
  var n, a = Jn(e), o = jn(e), s = e.strokePercent, u = s < 1, l = !t.path;
  (!t.silent || u) && l && t.createPathProxy();
  var f = t.path || im, h = t.__dirty;
  if (!i) {
    var c = e.fill, v = e.stroke, d = o && !!c.colorStops, _ = a && !!v.colorStops, p = o && !!c.image, g = a && !!v.image, y = void 0, m = void 0, w = void 0, T = void 0, S = void 0;
    (d || _) && (S = t.getBoundingRect()), d && (y = h ? cs(r, c, S) : t.__canvasFillGradient, t.__canvasFillGradient = y), _ && (m = h ? cs(r, v, S) : t.__canvasStrokeGradient, t.__canvasStrokeGradient = m), p && (w = h || !t.__canvasFillPattern ? ds(r, c, t) : t.__canvasFillPattern, t.__canvasFillPattern = w), g && (T = h || !t.__canvasStrokePattern ? ds(r, v, t) : t.__canvasStrokePattern, t.__canvasStrokePattern = w), d ? r.fillStyle = y : p && (w ? r.fillStyle = w : o = !1), _ ? r.strokeStyle = m : g && (T ? r.strokeStyle = T : a = !1);
  }
  var D = t.getGlobalScale();
  f.setScale(D[0], D[1], t.segmentIgnoreThreshold);
  var C, b;
  r.setLineDash && e.lineDash && (n = Rv(t), C = n[0], b = n[1]);
  var M = !0;
  (l || h & Rr) && (f.setDPR(r.dpr), u ? f.setContext(null) : (f.setContext(r), M = !1), f.reset(), t.buildPath(f, t.shape, i), f.toStatic(), t.pathUpdated()), M && f.rebuildPath(r, u ? s : 1), C && (r.setLineDash(C), r.lineDashOffset = b), i || (e.strokeFirst ? (a && Ql(r, e), o && Kl(r, e)) : (o && Kl(r, e), a && Ql(r, e))), C && r.setLineDash([]);
}
function am(r, t, e) {
  var i = t.__image = Ch(e.image, t.__image, t, t.onload);
  if (!(!i || !va(i))) {
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
function om(r, t, e) {
  var i, n = e.text;
  if (n != null && (n += ""), n) {
    r.font = e.font || pr, r.textAlign = e.textAlign, r.textBaseline = e.textBaseline;
    var a = void 0, o = void 0;
    r.setLineDash && e.lineDash && (i = Rv(t), a = i[0], o = i[1]), a && (r.setLineDash(a), r.lineDashOffset = o), e.strokeFirst ? (Jn(e) && r.strokeText(n, e.x, e.y), jn(e) && r.fillText(n, e.x, e.y)) : (jn(e) && r.fillText(n, e.x, e.y), Jn(e) && r.strokeText(n, e.x, e.y)), a && r.setLineDash([]);
  }
}
var Jl = ["shadowBlur", "shadowOffsetX", "shadowOffsetY"], jl = [
  ["lineCap", "butt"],
  ["lineJoin", "miter"],
  ["miterLimit", 10]
];
function Iv(r, t, e, i, n) {
  var a = !1;
  if (!i && (e = e || {}, t === e))
    return !1;
  if (i || t.opacity !== e.opacity) {
    At(r, n), a = !0;
    var o = Math.max(Math.min(t.opacity, 1), 0);
    r.globalAlpha = isNaN(o) ? vr.opacity : o;
  }
  (i || t.blend !== e.blend) && (a || (At(r, n), a = !0), r.globalCompositeOperation = t.blend || vr.blend);
  for (var s = 0; s < Jl.length; s++) {
    var u = Jl[s];
    (i || t[u] !== e[u]) && (a || (At(r, n), a = !0), r[u] = r.dpr * (t[u] || 0));
  }
  return (i || t.shadowColor !== e.shadowColor) && (a || (At(r, n), a = !0), r.shadowColor = t.shadowColor || vr.shadowColor), a;
}
function tf(r, t, e, i, n) {
  var a = Ui(t, n.inHover), o = i ? null : e && Ui(e, n.inHover) || {};
  if (a === o)
    return !1;
  var s = Iv(r, a, o, i, n);
  if ((i || a.fill !== o.fill) && (s || (At(r, n), s = !0), Zl(a.fill) && (r.fillStyle = a.fill)), (i || a.stroke !== o.stroke) && (s || (At(r, n), s = !0), Zl(a.stroke) && (r.strokeStyle = a.stroke)), (i || a.opacity !== o.opacity) && (s || (At(r, n), s = !0), r.globalAlpha = a.opacity == null ? 1 : a.opacity), t.hasStroke()) {
    var u = a.lineWidth, l = u / (a.strokeNoScale && t.getLineScale ? t.getLineScale() : 1);
    r.lineWidth !== l && (s || (At(r, n), s = !0), r.lineWidth = l);
  }
  for (var f = 0; f < jl.length; f++) {
    var h = jl[f], c = h[0];
    (i || a[c] !== o[c]) && (s || (At(r, n), s = !0), r[c] = a[c] || h[1]);
  }
  return s;
}
function sm(r, t, e, i, n) {
  return Iv(r, Ui(t, n.inHover), e && Ui(e, n.inHover), i, n);
}
function Av(r, t) {
  var e = t.transform, i = r.dpr || 1;
  e ? r.setTransform(i * e[0], i * e[1], i * e[2], i * e[3], i * e[4], i * e[5]) : r.setTransform(i, 0, 0, i, 0, 0);
}
function um(r, t, e) {
  for (var i = !1, n = 0; n < r.length; n++) {
    var a = r[n];
    i = i || a.isZeroArea(), Av(t, a), t.beginPath(), a.buildPath(t, a.shape), t.clip();
  }
  e.allClipped = i;
}
function lm(r, t) {
  return r && t ? r[0] !== t[0] || r[1] !== t[1] || r[2] !== t[2] || r[3] !== t[3] || r[4] !== t[4] || r[5] !== t[5] : !(!r && !t);
}
var ef = 1, rf = 2, nf = 3, af = 4;
function fm(r) {
  var t = jn(r), e = Jn(r);
  return !(r.lineDash || !(+t ^ +e) || t && typeof r.fill != "string" || e && typeof r.stroke != "string" || r.strokePercent < 1 || r.strokeOpacity < 1 || r.fillOpacity < 1);
}
function At(r, t) {
  t.batchFill && r.fill(), t.batchStroke && r.stroke(), t.batchFill = "", t.batchStroke = "";
}
function Ui(r, t) {
  return t && r.__hoverStyle || r.style;
}
function Ov(r, t) {
  lr(r, t, { inHover: !1, viewWidth: 0, viewHeight: 0 }, !0);
}
function lr(r, t, e, i) {
  var n = t.transform;
  if (!t.shouldBePainted(e.viewWidth, e.viewHeight, !1, !1)) {
    t.__dirty &= ~Ht, t.__isRendered = !1;
    return;
  }
  var a = t.__clipPaths, o = e.prevElClipPaths, s = !1, u = !1;
  if ((!o || em(a, o)) && (o && o.length && (At(r, e), r.restore(), u = s = !0, e.prevElClipPaths = null, e.allClipped = !1, e.prevEl = null), a && a.length && (At(r, e), r.save(), um(a, r, e), s = !0), e.prevElClipPaths = a), e.allClipped) {
    t.__isRendered = !1;
    return;
  }
  t.beforeBrush && t.beforeBrush(), t.innerBeforeBrush();
  var l = e.prevEl;
  l || (u = s = !0);
  var f = t instanceof ht && t.autoBatch && fm(t.style);
  s || lm(n, l.transform) ? (At(r, e), Av(r, t)) : f || At(r, e);
  var h = Ui(t, e.inHover);
  t instanceof ht ? (e.lastDrawType !== ef && (u = !0, e.lastDrawType = ef), tf(r, t, l, u, e), (!f || !e.batchFill && !e.batchStroke) && r.beginPath(), nm(r, t, h, f), f && (e.batchFill = h.fill || "", e.batchStroke = h.stroke || "")) : t instanceof Ko ? (e.lastDrawType !== nf && (u = !0, e.lastDrawType = nf), tf(r, t, l, u, e), om(r, t, h)) : t instanceof pa ? (e.lastDrawType !== rf && (u = !0, e.lastDrawType = rf), sm(r, t, l, u, e), am(r, t, h)) : t.getTemporalDisplayables && (e.lastDrawType !== af && (u = !0, e.lastDrawType = af), hm(r, t, e)), f && i && At(r, e), t.innerAfterBrush(), t.afterBrush && t.afterBrush(), e.prevEl = t, t.__dirty = 0, t.__isRendered = !0;
}
function hm(r, t, e) {
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
    u.beforeBrush && u.beforeBrush(), u.innerBeforeBrush(), lr(r, u, a, o === s - 1), u.innerAfterBrush(), u.afterBrush && u.afterBrush(), a.prevEl = u;
  }
  for (var l = 0, f = n.length; l < f; l++) {
    var u = n[l];
    u.beforeBrush && u.beforeBrush(), u.innerBeforeBrush(), lr(r, u, a, l === f - 1), u.innerAfterBrush(), u.afterBrush && u.afterBrush(), a.prevEl = u;
  }
  t.clearTemporalDisplayables(), t.notClear = !0, r.restore();
}
var po = new Yy(), of = new Gi(100), sf = ["symbol", "symbolSize", "symbolKeepAspect", "color", "backgroundColor", "dashArrayX", "dashArrayY", "maxTileWidth", "maxTileHeight"];
function uf(r, t) {
  if (r === "none")
    return null;
  var e = t.getDevicePixelRatio(), i = t.getZr(), n = i.painter.type === "svg";
  r.dirty && po.delete(r);
  var a = po.get(r);
  if (a)
    return a;
  var o = Mt(r, {
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
  return u(s), s.rotation = o.rotation, s.scaleX = s.scaleY = n ? 1 : 1 / e, po.set(r, s), r.dirty = !1, s;
  function u(l) {
    for (var f = [e], h = !0, c = 0; c < sf.length; ++c) {
      var v = o[sf[c]];
      if (v != null && !G(v) && !q(v) && !bt(v) && typeof v != "boolean") {
        h = !1;
        break;
      }
      f.push(v);
    }
    var d;
    if (h) {
      d = f.join(",") + (n ? "-svg" : "");
      var _ = of.get(d);
      _ && (n ? l.svgElement = _ : l.image = _);
    }
    var p = Bv(o.dashArrayX), g = vm(o.dashArrayY), y = Nv(o.symbol), m = cm(p), w = kv(g), T = !n && Zr.createCanvas(), S = n && {
      tag: "g",
      attrs: {},
      key: "dcl",
      children: []
    }, D = b(), C;
    T && (T.width = D.width * e, T.height = D.height * e, C = T.getContext("2d")), M(), h && of.put(d, T || S), l.image = T, l.svgElement = S, l.svgWidth = D.width, l.svgHeight = D.height;
    function b() {
      for (var E = 1, P = 0, x = m.length; P < x; ++P)
        E = Lu(E, m[P]);
      for (var R = 1, P = 0, x = y.length; P < x; ++P)
        R = Lu(R, y[P].length);
      E *= R;
      var B = w * m.length * y.length;
      if (process.env.NODE_ENV !== "production") {
        var A = function(at) {
          console.warn("Calculated decal size is greater than " + at + " due to decal option settings so " + at + " is used for the decal size. Please consider changing the decal option to make a smaller decal or set " + at + " to be larger to avoid incontinuity.");
        };
        E > o.maxTileWidth && A("maxTileWidth"), B > o.maxTileHeight && A("maxTileHeight");
      }
      return {
        width: Math.max(1, Math.min(E, o.maxTileWidth)),
        height: Math.max(1, Math.min(B, o.maxTileHeight))
      };
    }
    function M() {
      C && (C.clearRect(0, 0, T.width, T.height), o.backgroundColor && (C.fillStyle = o.backgroundColor, C.fillRect(0, 0, T.width, T.height)));
      for (var E = 0, P = 0; P < g.length; ++P)
        E += g[P];
      if (E <= 0)
        return;
      for (var x = -w, R = 0, B = 0, A = 0; x < D.height; ) {
        if (R % 2 === 0) {
          for (var at = B / 2 % y.length, I = 0, N = 0, k = 0; I < D.width * 2; ) {
            for (var Y = 0, P = 0; P < p[A].length; ++P)
              Y += p[A][P];
            if (Y <= 0)
              break;
            if (N % 2 === 0) {
              var z = (1 - o.symbolSize) * 0.5, H = I + p[A][N] * z, j = x + g[R] * z, K = p[A][N] * o.symbolSize, vt = g[R] * o.symbolSize, nt = k / 2 % y[at].length;
              ct(H, j, K, vt, y[at][nt]);
            }
            I += p[A][N], ++k, ++N, N === p[A].length && (N = 0);
          }
          ++A, A === p.length && (A = 0);
        }
        x += g[R], ++B, ++R, R === g.length && (R = 0);
      }
      function ct(Lt, dt, ie, Bt, ge) {
        var ot = n ? 1 : e, ri = vs(ge, Lt * ot, dt * ot, ie * ot, Bt * ot, o.color, o.symbolKeepAspect);
        if (n) {
          var ii = i.painter.renderOneToVNode(ri);
          ii && S.children.push(ii);
        } else
          Ov(C, ri);
      }
    }
  }
}
function Nv(r) {
  if (!r || r.length === 0)
    return [["rect"]];
  if (q(r))
    return [[r]];
  for (var t = !0, e = 0; e < r.length; ++e)
    if (!q(r[e])) {
      t = !1;
      break;
    }
  if (t)
    return Nv([r]);
  for (var i = [], e = 0; e < r.length; ++e)
    q(r[e]) ? i.push([r[e]]) : i.push(r[e]);
  return i;
}
function Bv(r) {
  if (!r || r.length === 0)
    return [[0, 0]];
  if (bt(r)) {
    var t = Math.ceil(r);
    return [[t, t]];
  }
  for (var e = !0, i = 0; i < r.length; ++i)
    if (!bt(r[i])) {
      e = !1;
      break;
    }
  if (e)
    return Bv([r]);
  for (var n = [], i = 0; i < r.length; ++i)
    if (bt(r[i])) {
      var t = Math.ceil(r[i]);
      n.push([t, t]);
    } else {
      var t = rt(r[i], function(s) {
        return Math.ceil(s);
      });
      t.length % 2 === 1 ? n.push(t.concat(t)) : n.push(t);
    }
  return n;
}
function vm(r) {
  if (!r || typeof r == "object" && r.length === 0)
    return [0, 0];
  if (bt(r)) {
    var t = Math.ceil(r);
    return [t, t];
  }
  var e = rt(r, function(i) {
    return Math.ceil(i);
  });
  return r.length % 2 ? e.concat(e) : e;
}
function cm(r) {
  return rt(r, function(t) {
    return kv(t);
  });
}
function kv(r) {
  for (var t = 0, e = 0; e < r.length; ++e)
    t += r[e];
  return r.length % 2 === 1 ? t * 2 : t;
}
function dm(r, t) {
  r.eachRawSeries(function(e) {
    if (!r.isSeriesFiltered(e)) {
      var i = e.getData();
      i.hasItemVisual() && i.each(function(o) {
        var s = i.getItemVisual(o, "decal");
        if (s) {
          var u = i.ensureUniqueItemVisual(o, "style");
          u.decal = uf(s, t);
        }
      });
      var n = i.getVisual("decal");
      if (n) {
        var a = i.getVisual("style");
        a.decal = uf(n, t);
      }
    }
  });
}
var pm = new ce();
const se = pm;
var ta = {};
function gm(r, t) {
  process.env.NODE_ENV !== "production" && ta[r] && wt("Already has an implementation of " + r + "."), ta[r] = t;
}
function _m(r) {
  return process.env.NODE_ENV !== "production" && (ta[r] || wt("Implementation of " + r + " doesn't exists.")), ta[r];
}
var ym = 1, mm = 800, wm = 900, Sm = 1e3, Tm = 2e3, Dm = 5e3, Fv = 1e3, Cm = 1100, Ws = 2e3, Vv = 3e3, bm = 4e3, Sa = 4500, Em = 4600, Mm = 5e3, Lm = 6e3, zv = 7e3, Pm = {
  PROCESSOR: {
    FILTER: Sm,
    SERIES_FILTER: mm,
    STATISTIC: Dm
  },
  VISUAL: {
    LAYOUT: Fv,
    PROGRESSIVE_LAYOUT: Cm,
    GLOBAL: Ws,
    CHART: Vv,
    POST_CHART_LAYOUT: Em,
    COMPONENT: bm,
    BRUSH: Mm,
    CHART_ITEM: Sa,
    ARIA: Lm,
    DECAL: zv
  }
}, yt = "__flagInMainProcess", Pt = "__pendingUpdate", go = "__needsUpdateStatus", lf = /^[a-zA-Z0-9_]+$/;
function Hv(r) {
  return function() {
    for (var t = [], e = 0; e < arguments.length; e++)
      t[e] = arguments[e];
    if (this.isDisposed()) {
      kt(this.id);
      return;
    }
    return Gv(this, r, t);
  };
}
function Uv(r) {
  return function() {
    for (var t = [], e = 0; e < arguments.length; e++)
      t[e] = arguments[e];
    return Gv(this, r, t);
  };
}
function Gv(r, t, e) {
  return e[0] = e[0] && e[0].toLowerCase(), ce.prototype[t].apply(r, e);
}
var Yv = (
  /** @class */
  function(r) {
    J(t, r);
    function t() {
      return r !== null && r.apply(this, arguments) || this;
    }
    return t;
  }(ce)
), Wv = Yv.prototype;
Wv.on = Uv("on");
Wv.off = Uv("off");
var Pr, _o, pn, Ie, yo, mo, wo, _i, yi, ff, hf, So, vf, gn, cf, $t, df, xm = (
  /** @class */
  function(r) {
    J(t, r);
    function t(e, i, n) {
      var a = r.call(this, new Ny()) || this;
      a._chartsViews = [], a._chartsMap = {}, a._componentsViews = [], a._componentsMap = {}, a._pendingActions = [], n = n || {}, q(i) && (i = $v[i]), a._dom = e;
      var o = "canvas", s = "auto", u = !1;
      if (process.env.NODE_ENV !== "production") {
        var l = (
          /* eslint-disable-next-line */
          et.hasGlobalWindow ? window : global
        );
        o = l.__ECHARTS__DEFAULT__RENDERER__ || o, s = W(l.__ECHARTS__DEFAULT__COARSE_POINTER, s);
        var f = l.__ECHARTS__DEFAULT__USE_DIRTY_RECT__;
        u = f ?? u;
      }
      var h = a._zr = Mu(e, {
        renderer: n.renderer || o,
        devicePixelRatio: n.devicePixelRatio,
        width: n.width,
        height: n.height,
        ssr: n.ssr,
        useDirtyRect: W(n.useDirtyRect, u),
        useCoarsePointer: W(n.useCoarsePointer, s),
        pointerSize: n.pointerSize
      });
      a._ssr = n.ssr, a._throttledZrFlush = _y(It(h.flush, h), 17), i = Z(i), i && hv(i, !0), a._theme = i, a._locale = q_(n.locale || X_), a._coordSysMgr = new lv();
      var c = a._api = cf(a);
      function v(d, _) {
        return d.__prio - _.__prio;
      }
      return Dn(ia, v), Dn(ps, v), a._scheduler = new Pv(a, c, ps, ia), a._messageCenter = new Yv(), a._initEvents(), a.resize = It(a.resize, a), h.animation.on("frame", a._onframe, a), ff(h, a), hf(h, a), Bn(a), a;
    }
    return t.prototype._onframe = function() {
      if (!this._disposed) {
        df(this);
        var e = this._scheduler;
        if (this[Pt]) {
          var i = this[Pt].silent;
          this[yt] = !0;
          try {
            Pr(this), Ie.update.call(this, null, this[Pt].updateParams);
          } catch (u) {
            throw this[yt] = !1, this[Pt] = null, u;
          }
          this._zr.flush(), this[yt] = !1, this[Pt] = null, _i.call(this, i), yi.call(this, i);
        } else if (e.unfinished) {
          var n = ym, a = this._model, o = this._api;
          e.unfinished = !1;
          do {
            var s = +/* @__PURE__ */ new Date();
            e.performSeriesTasks(a), e.performDataProcessorTasks(a), mo(this, a), e.performVisualTasks(a), gn(this, this._model, o, "remain", {}), n -= +/* @__PURE__ */ new Date() - s;
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
        kt(this.id);
        return;
      }
      var a, o, s;
      if (F(i) && (n = i.lazyUpdate, a = i.silent, o = i.replaceMerge, s = i.transition, i = i.notMerge), this[yt] = !0, !this._model || i) {
        var u = new E0(this._api), l = this._theme, f = this._model = new sv();
        f.scheduler = this._scheduler, f.ssr = this._ssr, f.init(null, null, null, l, this._locale, u);
      }
      this._model.setOption(e, {
        replaceMerge: o
      }, gs);
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
          Pr(this), Ie.update.call(this, null, h);
        } catch (c) {
          throw this[Pt] = null, this[yt] = !1, c;
        }
        this._ssr || this._zr.flush(), this[Pt] = null, this[yt] = !1, _i.call(this, a), yi.call(this, a);
      }
    }, t.prototype.setTheme = function() {
      ve("ECharts#setTheme() is DEPRECATED in ECharts 3.0");
    }, t.prototype.getModel = function() {
      return this._model;
    }, t.prototype.getOption = function() {
      return this._model && this._model.getOption();
    }, t.prototype.getWidth = function() {
      return this._zr.getWidth();
    }, t.prototype.getHeight = function() {
      return this._zr.getHeight();
    }, t.prototype.getDevicePixelRatio = function() {
      return this._zr.painter.dpr || et.hasGlobalWindow && window.devicePixelRatio || 1;
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
      if (et.svgSupported) {
        var e = this._zr, i = e.storage.getDisplayList();
        return L(i, function(n) {
          n.stopAnimation(null, !0);
        }), e.painter.toDataURL();
      }
    }, t.prototype.getDataURL = function(e) {
      if (this._disposed) {
        kt(this.id);
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
        kt(this.id);
        return;
      }
      var i = e.type === "svg", n = this.group, a = Math.min, o = Math.max, s = 1 / 0;
      if (Im[n]) {
        var u = s, l = s, f = -s, h = -s, c = [], v = e && e.pixelRatio || this.getDevicePixelRatio();
        L(pf, function(m, w) {
          if (m.group === n) {
            var T = i ? m.getZr().painter.getSvgDom().innerHTML : m.renderToCanvas(Z(e)), S = m.getDom().getBoundingClientRect();
            u = a(S.left, u), l = a(S.top, l), f = o(S.right, f), h = o(S.bottom, h), c.push({
              dom: T,
              left: S.left,
              top: S.top
            });
          }
        }), u *= v, l *= v, f *= v, h *= v;
        var d = f - u, _ = h - l, p = Zr.createCanvas(), g = Mu(p, {
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
            var w = new pa({
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
      return yo(this, "convertToPixel", e, i);
    }, t.prototype.convertFromPixel = function(e, i) {
      return yo(this, "convertFromPixel", e, i);
    }, t.prototype.containPixel = function(e, i) {
      if (this._disposed) {
        kt(this.id);
        return;
      }
      var n = this._model, a, o = Ya(n, e);
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
      var n = this._model, a = Ya(n, e, {
        defaultMainType: "series"
      }), o = a.seriesModel;
      process.env.NODE_ENV !== "production" && (o || Te("There is no specified series model"));
      var s = o.getData(), u = a.hasOwnProperty("dataIndexInside") ? a.dataIndexInside : a.hasOwnProperty("dataIndex") ? s.indexOfRawIndex(a.dataIndex) : null;
      return u != null ? Fy(s, u, i) : Vy(s, i);
    }, t.prototype.getViewOfComponentModel = function(e) {
      return this._componentsMap[e.__viewId];
    }, t.prototype.getViewOfSeriesModel = function(e) {
      return this._chartsMap[e.__viewId];
    }, t.prototype._initEvents = function() {
      var e = this;
      L(Rm, function(i) {
        var n = function(a) {
          var o = e.getModel(), s = a.target, u, l = i === "globalout";
          if (l ? u = {} : s && vn(s, function(d) {
            var _ = Gt(d);
            if (_ && _.dataIndex != null) {
              var p = _.dataModel || o.getSeriesByIndex(_.seriesIndex);
              return u = p && p.getDataParams(_.dataIndex, _.dataType, s) || {}, !0;
            } else if (_.eventData)
              return u = O({}, _.eventData), !0;
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
      }), L(ra, function(i, n) {
        e._messageCenter.on(n, function(a) {
          this.trigger(n, a);
        }, e);
      }), L(["selectchanged"], function(i) {
        e._messageCenter.on(i, function(n) {
          this.trigger(i, n);
        }, e);
      }), zy(this._messageCenter, this, this._api);
    }, t.prototype.isDisposed = function() {
      return this._disposed;
    }, t.prototype.clear = function() {
      if (this._disposed) {
        kt(this.id);
        return;
      }
      this.setOption({
        series: []
      }, !0);
    }, t.prototype.dispose = function() {
      if (this._disposed) {
        kt(this.id);
        return;
      }
      this._disposed = !0;
      var e = this.getDom();
      e && Lp(this.getDom(), Am, "");
      var i = this, n = i._api, a = i._model;
      L(i._componentsViews, function(o) {
        o.dispose(a, n);
      }), L(i._chartsViews, function(o) {
        o.dispose(a, n);
      }), i._zr.dispose(), i._dom = i._model = i._chartsMap = i._componentsMap = i._chartsViews = i._componentsViews = i._scheduler = i._api = i._zr = i._throttledZrFlush = i._theme = i._coordSysMgr = i._messageCenter = null, delete pf[i.id];
    }, t.prototype.resize = function(e) {
      if (this[yt]) {
        process.env.NODE_ENV !== "production" && wt("`resize` should not be called during main process.");
        return;
      }
      if (this._disposed) {
        kt(this.id);
        return;
      }
      this._zr.resize(e);
      var i = this._model;
      if (this._loadingFX && this._loadingFX.resize(), !!i) {
        var n = i.resetOption("media"), a = e && e.silent;
        this[Pt] && (a == null && (a = this[Pt].silent), n = !0, this[Pt] = null), this[yt] = !0;
        try {
          n && Pr(this), Ie.update.call(this, {
            type: "resize",
            animation: O({
              // Disable animation
              duration: 0
            }, e && e.animation)
          });
        } catch (o) {
          throw this[yt] = !1, o;
        }
        this[yt] = !1, _i.call(this, a), yi.call(this, a);
      }
    }, t.prototype.showLoading = function(e, i) {
      if (this._disposed) {
        kt(this.id);
        return;
      }
      if (F(e) && (i = e, e = ""), e = e || "default", this.hideLoading(), !_s[e]) {
        process.env.NODE_ENV !== "production" && Te("Loading effects " + e + " not exists.");
        return;
      }
      var n = _s[e](this._api, i), a = this._zr;
      this._loadingFX = n, a.add(n);
    }, t.prototype.hideLoading = function() {
      if (this._disposed) {
        kt(this.id);
        return;
      }
      this._loadingFX && this._zr.remove(this._loadingFX), this._loadingFX = null;
    }, t.prototype.makeActionFromEvent = function(e) {
      var i = O({}, e);
      return i.type = ra[e.type], i;
    }, t.prototype.dispatchAction = function(e, i) {
      if (this._disposed) {
        kt(this.id);
        return;
      }
      if (F(i) || (i = {
        silent: !!i
      }), !!ea[e.type] && this._model) {
        if (this[yt]) {
          this._pendingActions.push(e);
          return;
        }
        var n = i.silent;
        wo.call(this, e, n);
        var a = i.flush;
        a ? this._zr.flush() : a !== !1 && et.browser.weChat && this._throttledZrFlush(), _i.call(this, n), yi.call(this, n);
      }
    }, t.prototype.updateLabelLayout = function() {
      se.trigger("series:layoutlabels", this._model, this._api, {
        // Not adding series labels.
        // TODO
        updatedSeries: []
      });
    }, t.prototype.appendData = function(e) {
      if (this._disposed) {
        kt(this.id);
        return;
      }
      var i = e.seriesIndex, n = this.getModel(), a = n.getSeriesByIndex(i);
      process.env.NODE_ENV !== "production" && U(e.data && a), a.appendData(e), this._scheduler.unfinished = !0, this.getZr().wakeUp();
    }, t.internalField = function() {
      Pr = function(h) {
        var c = h._scheduler;
        c.restorePipelines(h._model), c.prepareStageTasks(), _o(h, !0), _o(h, !1), c.plan();
      }, _o = function(h, c) {
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
            var M = le(S.type), E = c ? Kn.getClass(M.main, M.sub) : (
              // FIXME:TS
              // (ChartView as ChartViewConstructor).getClass('series', classType.sub)
              // For backward compat, still support a chart type declared as only subType
              // like "liquidfill", but recommend "series.liquidfill"
              // But need a base class to make a type series.
              dr.getClass(M.sub)
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
      }, pn = function(h, c, v, d, _) {
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
        m != null && (w = $(), L(Et(m), function(S) {
          var D = fe(S, null);
          D != null && w.set(D, !0);
        })), p && p.eachComponent(y, function(S) {
          var D = w && w.get(S.id) != null;
          if (!D)
            if (ol(v))
              if (S instanceof qr)
                v.type === cr && !v.notBlur && !S.get(["emphasis", "disabled"]) && Yg(S, v, h._api);
              else {
                var C = Bs(S.mainType, S.componentIndex, v.name, h._api), b = C.focusSelf, M = C.dispatchers;
                v.type === cr && b && !v.notBlur && ts(S.mainType, S.componentIndex, h._api), M && L(M, function(E) {
                  v.type === cr ? Qo(E) : Jo(E);
                });
              }
            else
              es(v) && S instanceof qr && (Xg(S, v, h._api), al(S), $t(h));
        }, h), p && p.eachComponent(y, function(S) {
          var D = w && w.get(S.id) != null;
          D || T(h[d === "series" ? "_chartsMap" : "_componentsMap"][S.__viewId]);
        }, h);
        function T(S) {
          S && S.__alive && S[c] && S[c](S.__model, p, h._api, v);
        }
      }, Ie = {
        prepareAndUpdate: function(h) {
          Pr(this), Ie.update.call(this, h, {
            // Needs to mark option changed if newOption is given.
            // It's from MagicType.
            // TODO If use a separate flag optionChanged in payload?
            optionChanged: h.newOption != null
          });
        },
        update: function(h, c) {
          var v = this._model, d = this._api, _ = this._zr, p = this._coordSysMgr, g = this._scheduler;
          if (v) {
            v.setUpdatePayload(h), g.restoreData(v, h), g.performSeriesTasks(v), p.create(v, d), g.performDataProcessorTasks(v, h), mo(this, v), p.update(v, d), e(v), g.performVisualTasks(v, h), So(this, v, d, h, c);
            var y = v.get("backgroundColor") || "transparent", m = v.get("darkMode");
            _.setBackgroundColor(y), m != null && m !== "auto" && _.setDarkMode(m), se.trigger("afterupdate", v, d);
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
            }), gn(this, v, d, h, {}, p), se.trigger("afterupdate", v, d);
          }
        },
        updateView: function(h) {
          var c = this._model;
          c && (c.setUpdatePayload(h), dr.markUpdateMethod(h, "updateView"), e(c), this._scheduler.performVisualTasks(c, h, {
            setDirty: !0
          }), So(this, c, this._api, h, {}), se.trigger("afterupdate", c, this._api));
        },
        updateVisual: function(h) {
          var c = this, v = this._model;
          v && (v.setUpdatePayload(h), v.eachSeries(function(d) {
            d.getData().clearAllVisual();
          }), dr.markUpdateMethod(h, "updateVisual"), e(v), this._scheduler.performVisualTasks(v, h, {
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
          }), se.trigger("afterupdate", v, this._api));
        },
        updateLayout: function(h) {
          Ie.update.call(this, h);
        }
      }, yo = function(h, c, v, d) {
        if (h._disposed) {
          kt(h.id);
          return;
        }
        for (var _ = h._model, p = h._coordSysMgr.getCoordinateSystems(), g, y = Ya(_, v), m = 0; m < p.length; m++) {
          var w = p[m];
          if (w[c] && (g = w[c](_, y, d)) != null)
            return g;
        }
        process.env.NODE_ENV !== "production" && Te("No coordinate system that supports " + c + " found by the given finder.");
      }, mo = function(h, c) {
        var v = h._chartsMap, d = h._scheduler;
        c.eachSeries(function(_) {
          d.updateStreamModes(_, v[_.__viewId]);
        });
      }, wo = function(h, c) {
        var v = this, d = this.getModel(), _ = h.type, p = h.escapeConnect, g = ea[_], y = g.actionInfo, m = (y.update || "update").split(":"), w = m.pop(), T = m[0] != null && le(m[0]);
        this[yt] = !0;
        var S = [h], D = !1;
        h.batch && (D = !0, S = rt(h.batch, function(R) {
          return R = Mt(O({}, R), h), R.batch = null, R;
        }));
        var C = [], b, M = es(h), E = ol(h);
        if (E && Gh(this._api), L(S, function(R) {
          if (b = g.action(R, v._model, v._api), b = b || O({}, R), b.type = y.event || b.type, C.push(b), E) {
            var B = Sh(h), A = B.queryOptionMap, at = B.mainTypeSpecified, I = at ? A.keys()[0] : "series";
            pn(v, w, R, I), $t(v);
          } else
            M ? (pn(v, w, R, "series"), $t(v)) : T && pn(v, w, R, T.main, T.sub);
        }), w !== "none" && !E && !M && !T)
          try {
            this[Pt] ? (Pr(this), Ie.update.call(this, h), this[Pt] = null) : Ie[w].call(this, h);
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
              selected: qg(d),
              isFromClick: h.isFromClick || !1,
              fromAction: h.type,
              fromActionPayload: h
            };
            P.trigger(x.type, x);
          }
        }
      }, _i = function(h) {
        for (var c = this._pendingActions; c.length; ) {
          var v = c.shift();
          wo.call(this, v, h);
        }
      }, yi = function(h) {
        !h && this.trigger("updated");
      }, ff = function(h, c) {
        h.on("rendered", function(v) {
          c.trigger("rendered", v), // Although zr is dirty if initial animation is not finished
          // and this checking is called on frame, we also check
          // animation finished for robustness.
          h.animation.isFinished() && !c[Pt] && !c._scheduler.unfinished && !c._pendingActions.length && c.trigger("finished");
        });
      }, hf = function(h, c) {
        h.on("mouseover", function(v) {
          var d = v.target, _ = vn(d, Xr);
          _ && (Wg(_, v, c._api), $t(c));
        }).on("mouseout", function(v) {
          var d = v.target, _ = vn(d, Xr);
          _ && ($g(_, v, c._api), $t(c));
        }).on("click", function(v) {
          var d = v.target, _ = vn(d, function(y) {
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
          Dn(_, function(y, m) {
            return y.zlevel === m.zlevel ? y.z - m.z : y.zlevel - m.zlevel;
          }), L(_, function(y) {
            var m = h.getComponent(y.type, y.idx), w = y.zlevel, T = y.key;
            p != null && (w = Math.max(p, w)), T ? (w === p && T !== g && w++, g = T) : g && (w === p && w++, g = ""), p = w, m.setZLevel(w);
          });
        }
      }
      So = function(h, c, v, d, _) {
        i(c), vf(h, c, v, d, _), L(h._chartsViews, function(p) {
          p.__alive = !1;
        }), gn(h, c, v, d, _), L(h._chartsViews, function(p) {
          p.__alive || p.remove(c, v);
        });
      }, vf = function(h, c, v, d, _, p) {
        L(p || h._componentsViews, function(g) {
          var y = g.__model;
          l(y, g), g.render(y, c, v, d), s(y, g), f(y, g);
        });
      }, gn = function(h, c, v, d, _, p) {
        var g = h._scheduler;
        _ = O(_ || {}, {
          updatedSeries: c.getSeries()
        }), se.trigger("series:beforeupdate", c, v, _);
        var y = !1;
        c.eachSeries(function(m) {
          var w = h._chartsMap[m.__viewId];
          w.__alive = !0;
          var T = w.renderTask;
          g.updatePayload(T, d), l(m, w), p && p.get(m.uid) && T.dirty(), T.perform(g.getPerformArgs(T)) && (y = !0), w.group.silent = !!m.get("silent"), o(m, w), al(m);
        }), g.unfinished = y || g.unfinished, se.trigger("series:layoutlabels", c, v, _), se.trigger("series:transition", c, v, _), c.eachSeries(function(m) {
          var w = h._chartsMap[m.__viewId];
          s(m, w), f(m, w);
        }), a(h, c), se.trigger("series:afterupdate", c, v, _);
      }, $t = function(h) {
        h[go] = !0, h.getZr().wakeUp();
      }, df = function(h) {
        h[go] && (h.getZr().storage.traverse(function(c) {
          Rn(c) || n(c);
        }), h[go] = !1);
      };
      function n(h) {
        for (var c = [], v = h.currentStates, d = 0; d < v.length; d++) {
          var _ = v[d];
          _ === "emphasis" || _ === "blur" || _ === "select" || c.push(_);
        }
        h.selected && h.states.select && c.push("select"), h.hoverState === Os && h.states.emphasis ? c.push("emphasis") : h.hoverState === As && h.states.blur && c.push("blur"), h.useStates(c);
      }
      function a(h, c) {
        var v = h._zr, d = v.storage, _ = 0;
        d.traverse(function(p) {
          p.isGroup || _++;
        }), _ > c.get("hoverLayerThreshold") && !et.node && !et.worker && c.eachSeries(function(p) {
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
          if (!Rn(v)) {
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
            if (Rn(g))
              return;
            if (g instanceof ht && jg(g), g.__dirty) {
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
      cf = function(h) {
        return new /** @class */
        (function(c) {
          J(v, c);
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
            Qo(d, _), $t(h);
          }, v.prototype.leaveEmphasis = function(d, _) {
            Jo(d, _), $t(h);
          }, v.prototype.enterBlur = function(d) {
            Gg(d), $t(h);
          }, v.prototype.leaveBlur = function(d) {
            Vh(d), $t(h);
          }, v.prototype.enterSelect = function(d) {
            zh(d), $t(h);
          }, v.prototype.leaveSelect = function(d) {
            Hh(d), $t(h);
          }, v.prototype.getModel = function() {
            return h.getModel();
          }, v.prototype.getViewOfComponentModel = function(d) {
            return h.getViewOfComponentModel(d);
          }, v.prototype.getViewOfSeriesModel = function(d) {
            return h.getViewOfSeriesModel(d);
          }, v;
        }(uv))(h);
      };
    }(), t;
  }(ce)
), $s = xm.prototype;
$s.on = Hv("on");
$s.off = Hv("off");
$s.one = function(r, t, e) {
  var i = this;
  ve("ECharts#one is deprecated.");
  function n() {
    for (var a = [], o = 0; o < arguments.length; o++)
      a[o] = arguments[o];
    t && t.apply && t.apply(this, a), i.off(r, n);
  }
  this.on.call(this, r, n, e);
};
var Rm = ["click", "dblclick", "mouseover", "mouseout", "mousemove", "mousedown", "mouseup", "globalout", "contextmenu"];
function kt(r) {
  process.env.NODE_ENV !== "production" && Te("Instance " + r + " has been disposed");
}
var ea = {}, ra = {}, ps = [], gs = [], ia = [], $v = {}, _s = {}, pf = {}, Im = {}, Am = "_echarts_instance_";
function Xv(r, t) {
  $v[r] = t;
}
function qv(r) {
  it(gs, r) < 0 && gs.push(r);
}
function Zv(r, t) {
  qs(ps, r, t, Tm);
}
function Om(r) {
  Xs("afterinit", r);
}
function Nm(r) {
  Xs("afterupdate", r);
}
function Xs(r, t) {
  se.on(r, t);
}
function ei(r, t, e) {
  Q(t) && (e = t, t = "");
  var i = F(r) ? r.type : [r, r = {
    event: t
  }][0];
  r.event = (r.event || i).toLowerCase(), t = r.event, !ra[t] && (U(lf.test(i) && lf.test(t)), ea[i] || (ea[i] = {
    action: e,
    actionInfo: r
  }), ra[t] = i);
}
function Bm(r, t) {
  lv.register(r, t);
}
function km(r, t) {
  qs(ia, r, t, Fv, "layout");
}
function yr(r, t) {
  qs(ia, r, t, Vv, "visual");
}
var gf = [];
function qs(r, t, e, i, n) {
  if ((Q(t) || F(t)) && (e = t, t = i), process.env.NODE_ENV !== "production") {
    if (isNaN(t) || t == null)
      throw new Error("Illegal priority");
    L(r, function(o) {
      U(o.__raw !== e);
    });
  }
  if (!(it(gf, e) >= 0)) {
    gf.push(e);
    var a = Pv.wrapStageHandler(e, n);
    a.__prio = t, a.__raw = e, r.push(a);
  }
}
function Kv(r, t) {
  _s[r] = t;
}
function Fm(r, t, e) {
  var i = _m("registerMap");
  i && i(r, t, e);
}
var Vm = Q0;
yr(Ws, my);
yr(Sa, wy);
yr(Sa, Sy);
yr(Ws, By);
yr(Sa, ky);
yr(zv, dm);
qv(hv);
Zv(wm, O0);
Kv("default", Ty);
ei({
  type: cr,
  event: cr,
  update: cr
}, jt);
ei({
  type: Pn,
  event: Pn,
  update: Pn
}, jt);
ei({
  type: Oi,
  event: Oi,
  update: Oi
}, jt);
ei({
  type: xn,
  event: xn,
  update: xn
}, jt);
ei({
  type: Ni,
  event: Ni,
  update: Ni
}, jt);
Xv("light", Ay);
Xv("dark", Oy);
function mi(r) {
  return r == null ? 0 : r.length || 1;
}
function _f(r) {
  return r;
}
var zm = (
  /** @class */
  function() {
    function r(t, e, i, n, a, o) {
      this._old = t, this._new = e, this._oldKeyGetter = i || _f, this._newKeyGetter = n || _f, this.context = a, this._diffModeMultiple = o === "multiple";
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
        var s = n[o], u = i[s], l = mi(u);
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
        var u = a[s], l = i[u], f = n[u], h = mi(l), c = mi(f);
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
        var n = t[i], a = e[n], o = mi(a);
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
          var u = e[s], l = mi(u);
          l === 0 ? (e[s] = o, a && i.push(s)) : l === 1 ? e[s] = [u, o] : u.push(o);
        }
      }
    }, r;
  }()
);
const Hm = zm;
var Um = (
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
function Gm(r, t) {
  var e = {}, i = e.encode = {}, n = $(), a = [], o = [], s = {};
  L(r.dimensions, function(c) {
    var v = r.getDimensionInfo(c), d = v.coordDim;
    if (d) {
      process.env.NODE_ENV !== "production" && U(as.get(d) == null);
      var _ = v.coordDimIndex;
      To(i, d)[_] = c, v.isExtraCoord || (n.set(d, 1), Ym(v.type) && (a[0] = c), To(s, d)[_] = r.getDimensionIndex(v.name)), v.defaultTooltip && o.push(c);
    }
    as.each(function(p, g) {
      var y = To(i, g), m = v.otherDims[g];
      m != null && m !== !1 && (y[m] = v.name);
    });
  });
  var u = [], l = {};
  n.each(function(c, v) {
    var d = i[v];
    l[v] = d[0], u = u.concat(d);
  }), e.dataDimsOnCoord = u, e.dataDimIndicesOnCoord = rt(u, function(c) {
    return r.getDimensionInfo(c).storeDimIndex;
  }), e.encodeFirstDimNotExtra = l;
  var f = i.label;
  f && f.length && (a = f.slice());
  var h = i.tooltip;
  return h && h.length ? o = h.slice() : o.length || (o = a.slice()), i.defaultedLabel = a, i.defaultedTooltip = o, e.userOutput = new Um(s, t), e;
}
function To(r, t) {
  return r.hasOwnProperty(t) || (r[t] = []), r[t];
}
function Ym(r) {
  return !(r === "ordinal" || r === "time");
}
var Wm = (
  /** @class */
  function() {
    function r(t) {
      this.otherDims = {}, t != null && O(this, t);
    }
    return r;
  }()
);
const Nn = Wm;
var $m = _t(), Xm = {
  float: "f",
  int: "i",
  ordinal: "o",
  number: "n",
  time: "t"
}, Qv = (
  /** @class */
  function() {
    function r(t) {
      this.dimensions = t.dimensions, this._dimOmitted = t.dimensionOmitted, this.source = t.source, this._fullDimCount = t.fullDimensionCount, this._updateDimOmitted(t.dimensionOmitted);
    }
    return r.prototype.isDimensionOmitted = function() {
      return this._dimOmitted;
    }, r.prototype._updateDimOmitted = function(t) {
      this._dimOmitted = t, t && (this._dimNameMap || (this._dimNameMap = jv(this.source)));
    }, r.prototype.getSourceDimensionIndex = function(t) {
      return W(this._dimNameMap.get(t), -1);
    }, r.prototype.getSourceDimension = function(t) {
      var e = this.source.dimensionsDefine;
      if (e)
        return e[t];
    }, r.prototype.makeStoreSchema = function() {
      for (var t = this._fullDimCount, e = dv(this.source), i = !tc(t), n = "", a = [], o = 0, s = 0; o < t; o++) {
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
        }), e && u != null && (!h || !h.isCalculationCoord) && (n += i ? u.replace(/\`/g, "`1").replace(/\$/g, "`2") : u), n += "$", n += Xm[l] || "f", f && (n += f.uid), n += "$";
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
function qm(r) {
  return r instanceof Qv;
}
function Jv(r) {
  for (var t = $(), e = 0; e < (r || []).length; e++) {
    var i = r[e], n = F(i) ? i.name : i;
    n != null && t.get(n) == null && t.set(n, e);
  }
  return t;
}
function jv(r) {
  var t = $m(r);
  return t.dimNameMap || (t.dimNameMap = Jv(r.dimensionsDefine));
}
function tc(r) {
  return r > 30;
}
var wi = F, Ae = rt, Zm = typeof Int32Array > "u" ? Array : Int32Array, Km = "e\0\0", yf = -1, Qm = ["hasItemOption", "_nameList", "_idList", "_invertedIndicesMap", "_dimSummary", "userOutput", "_rawData", "_dimValueGetter", "_nameDimIdx", "_idDimIdx", "_nameRepeatCount"], Jm = ["_approximateExtent"], mf, _n, Si, xr, Do, yn, Co, jm = (
  /** @class */
  function() {
    function r(t, e) {
      this.type = "list", this._dimOmitted = !1, this._nameList = [], this._idList = [], this._visual = {}, this._layout = {}, this._itemVisuals = [], this._itemLayouts = [], this._graphicEls = [], this._approximateExtent = {}, this._calculationInfo = {}, this.hasItemOption = !1, this.TRANSFERABLE_METHODS = ["cloneShallow", "downSample", "lttbDownSample", "map"], this.CHANGABLE_METHODS = ["filterSelf", "selectRange"], this.DOWNSAMPLE_METHODS = ["downSample", "lttbDownSample"];
      var i, n = !1;
      qm(t) ? (i = t.dimensions, this._dimOmitted = t.isDimensionOmitted(), this._schema = t) : (n = !0, i = t), i = i || ["x", "y"];
      for (var a = {}, o = [], s = {}, u = !1, l = {}, f = 0; f < i.length; f++) {
        var h = i[f], c = q(h) ? new Nn({
          name: h
        }) : h instanceof Nn ? h : new Nn(h), v = c.name;
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
      if (bt(t) || t != null && !isNaN(t) && !this._getDimInfo(t) && (!this._dimOmitted || this._schema.getSourceDimensionIndex(t) < 0))
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
      if (t instanceof ss && (a = t), !a) {
        var o = this.dimensions, s = zs(t) || Yt(t) ? new pv(t, o.length) : t;
        a = new ss();
        var u = Ae(o, function(l) {
          return {
            type: n._dimInfos[l].type,
            property: l
          };
        });
        a.initData(s, u, i);
      }
      this._store = a, this._nameList = (e || []).slice(), this._idList = [], this._nameRepeatCount = {}, this._doInit(0, a.count()), this._dimSummary = Gm(this, this._schema), this.userOutput = this._dimSummary.userOutput;
    }, r.prototype.appendData = function(t) {
      var e = this._store.appendData(t);
      this._doInit(e[0], e[1]);
    }, r.prototype.appendValues = function(t, e) {
      var i = this._store.appendValues(t, e.length), n = i.start, a = i.end, o = this._shouldMakeIdFromName();
      if (this._updateOrdinalMeta(), e)
        for (var s = n; s < a; s++) {
          var u = s - n;
          this._nameList[s] = e[u], o && Co(this, s);
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
        var a = this._nameList, o = this._idList, s = n.getSource().sourceFormat, u = s === de;
        if (u && !n.pure)
          for (var l = [], f = t; f < e; f++) {
            var h = n.getItem(f, l);
            if (!this.hasItemOption && _p(h) && (this.hasItemOption = !0), h) {
              var c = h.name;
              a[f] == null && c != null && (a[f] = fe(c, null));
              var v = h.id;
              o[f] == null && v != null && (o[f] = fe(v, null));
            }
          }
        if (this._shouldMakeIdFromName())
          for (var f = t; f < e; f++)
            Co(this, f);
        mf(this);
      }
    }, r.prototype.getApproximateExtent = function(t) {
      return this._approximateExtent[t] || this._store.getDataExtent(this._getStoreDimIndex(t));
    }, r.prototype.setApproximateExtent = function(t, e) {
      e = this.getDimension(e), this._approximateExtent[e] = t.slice();
    }, r.prototype.getCalculationInfo = function(t) {
      return this._calculationInfo[t];
    }, r.prototype.setCalculationInfo = function(t, e) {
      wi(t) ? O(this._calculationInfo, t) : this._calculationInfo[t] = e;
    }, r.prototype.getName = function(t) {
      var e = this.getRawIndex(t), i = this._nameList[e];
      return i == null && this._nameDimIdx != null && (i = Si(this, this._nameDimIdx, e)), i == null && (i = ""), i;
    }, r.prototype._getCategory = function(t, e) {
      var i = this._store.get(t, e), n = this._store.getOrdinalMeta(t);
      return n ? n.categories[i] : i;
    }, r.prototype.getId = function(t) {
      return _n(this, this.getRawIndex(t));
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
      return G(t) ? n.getValues(Ae(t, function(a) {
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
      return n == null || isNaN(n) ? yf : n;
    }, r.prototype.indicesOfNearest = function(t, e, i) {
      return this._store.indicesOfNearest(this._getStoreDimIndex(t), e, i);
    }, r.prototype.each = function(t, e, i) {
      Q(t) && (i = e, e = t, t = []);
      var n = i || this, a = Ae(xr(t), this._getStoreDimIndex, this);
      this._store.each(a, n ? It(e, n) : e);
    }, r.prototype.filterSelf = function(t, e, i) {
      Q(t) && (i = e, e = t, t = []);
      var n = i || this, a = Ae(xr(t), this._getStoreDimIndex, this);
      return this._store = this._store.filter(a, n ? It(e, n) : e), this;
    }, r.prototype.selectRange = function(t) {
      var e = this, i = {}, n = lt(t);
      return L(n, function(a) {
        var o = e._getStoreDimIndex(a);
        i[o] = t[a];
      }), this._store = this._store.selectRange(i), this;
    }, r.prototype.mapArray = function(t, e, i) {
      Q(t) && (i = e, e = t, t = []), i = i || this;
      var n = [];
      return this.each(t, function() {
        n.push(e && e.apply(this, arguments));
      }, i), n;
    }, r.prototype.map = function(t, e, i, n) {
      var a = i || n || this, o = Ae(xr(t), this._getStoreDimIndex, this), s = yn(this);
      return s._store = this._store.map(o, a ? It(e, a) : e), s;
    }, r.prototype.modify = function(t, e, i, n) {
      var a = this, o = i || n || this;
      process.env.NODE_ENV !== "production" && L(xr(t), function(u) {
        var l = a.getDimensionInfo(u);
        l.isCalculationCoord || console.error("Danger: only stack dimension can be modified");
      });
      var s = Ae(xr(t), this._getStoreDimIndex, this);
      this._store.modify(s, o ? It(e, o) : e);
    }, r.prototype.downSample = function(t, e, i, n) {
      var a = yn(this);
      return a._store = this._store.downSample(this._getStoreDimIndex(t), e, i, n), a;
    }, r.prototype.lttbDownSample = function(t, e) {
      var i = yn(this);
      return i._store = this._store.lttbDownSample(this._getStoreDimIndex(t), e), i;
    }, r.prototype.getRawDataItem = function(t) {
      return this._store.getRawDataItem(t);
    }, r.prototype.getItemModel = function(t) {
      var e = this.hostModel, i = this.getRawDataItem(t);
      return new Fe(i, e, e && e.ecModel);
    }, r.prototype.diff = function(t) {
      var e = this;
      return new Hm(t ? t.getStore().getIndices() : [], this.getStore().getIndices(), function(i) {
        return _n(t, i);
      }, function(i) {
        return _n(e, i);
      });
    }, r.prototype.getVisual = function(t) {
      var e = this._visual;
      return e && e[t];
    }, r.prototype.setVisual = function(t, e) {
      this._visual = this._visual || {}, wi(t) ? O(this._visual, t) : this._visual[t] = e;
    }, r.prototype.getItemVisual = function(t, e) {
      var i = this._itemVisuals[t], n = i && i[e];
      return n ?? this.getVisual(e);
    }, r.prototype.hasItemVisual = function() {
      return this._itemVisuals.length > 0;
    }, r.prototype.ensureUniqueItemVisual = function(t, e) {
      var i = this._itemVisuals, n = i[t];
      n || (n = i[t] = {});
      var a = n[e];
      return a == null && (a = this.getVisual(e), G(a) ? a = a.slice() : wi(a) && (a = O({}, a)), n[e] = a), a;
    }, r.prototype.setItemVisual = function(t, e, i) {
      var n = this._itemVisuals[t] || {};
      this._itemVisuals[t] = n, wi(e) ? O(n, e) : n[e] = i;
    }, r.prototype.clearAllVisual = function() {
      this._visual = {}, this._itemVisuals = [];
    }, r.prototype.setLayout = function(t, e) {
      wi(t) ? O(this._layout, t) : this._layout[t] = e;
    }, r.prototype.getLayout = function(t) {
      return this._layout[t];
    }, r.prototype.getItemLayout = function(t) {
      return this._itemLayouts[t];
    }, r.prototype.setItemLayout = function(t, e, i) {
      this._itemLayouts[t] = i ? O(this._itemLayouts[t] || {}, e) : e;
    }, r.prototype.clearItemLayouts = function() {
      this._itemLayouts.length = 0;
    }, r.prototype.setItemGraphicEl = function(t, e) {
      var i = this.hostModel && this.hostModel.seriesIndex;
      Ag(i, this.dataType, t, e), this._graphicEls[t] = e;
    }, r.prototype.getItemGraphicEl = function(t) {
      return this._graphicEls[t];
    }, r.prototype.eachItemGraphicEl = function(t, e) {
      L(this._graphicEls, function(i, n) {
        i && t && t.call(e, i, n);
      });
    }, r.prototype.cloneShallow = function(t) {
      return t || (t = new r(this._schema ? this._schema : Ae(this.dimensions, this._getDimInfo, this), this.hostModel)), Do(t, this), t._store = this._store, t;
    }, r.prototype.wrapMethod = function(t, e) {
      var i = this[t];
      Q(i) && (this.__wrappedMethods = this.__wrappedMethods || [], this.__wrappedMethods.push(t), this[t] = function() {
        var n = i.apply(this, arguments);
        return e.apply(this, [n].concat(Ds(arguments)));
      });
    }, r.internalField = function() {
      mf = function(t) {
        var e = t._invertedIndicesMap;
        L(e, function(i, n) {
          var a = t._dimInfos[n], o = a.ordinalMeta, s = t._store;
          if (o) {
            i = e[n] = new Zm(o.categories.length);
            for (var u = 0; u < i.length; u++)
              i[u] = yf;
            for (var u = 0; u < s.count(); u++)
              i[s.get(a.storeDimIndex, u)] = u;
          }
        });
      }, Si = function(t, e, i) {
        return fe(t._getCategory(e, i), null);
      }, _n = function(t, e) {
        var i = t._idList[e];
        return i == null && t._idDimIdx != null && (i = Si(t, t._idDimIdx, e)), i == null && (i = Km + e), i;
      }, xr = function(t) {
        return G(t) || (t = t != null ? [t] : []), t;
      }, yn = function(t) {
        var e = new r(t._schema ? t._schema : Ae(t.dimensions, t._getDimInfo, t), t.hostModel);
        return Do(e, t), e;
      }, Do = function(t, e) {
        L(Qm.concat(e.__wrappedMethods || []), function(i) {
          e.hasOwnProperty(i) && (t[i] = e[i]);
        }), t.__wrappedMethods = e.__wrappedMethods, L(Jm, function(i) {
          t[i] = Z(e[i]);
        }), t._calculationInfo = O({}, e._calculationInfo);
      }, Co = function(t, e) {
        var i = t._nameList, n = t._idList, a = t._nameDimIdx, o = t._idDimIdx, s = i[e], u = n[e];
        if (s == null && a != null && (i[e] = s = Si(t, a, e)), u == null && o != null && (n[e] = u = Si(t, o, e)), u == null && s != null) {
          var l = t._nameRepeatCount, f = l[s] = (l[s] || 0) + 1;
          u = s, f > 1 && (u += "__ec__" + f), n[e] = u;
        }
      };
    }(), r;
  }()
);
const t1 = jm;
function e1(r, t) {
  return r1(r, t).dimensions;
}
function r1(r, t) {
  zs(r) || (r = vv(r)), t = t || {};
  var e = t.coordDimensions || [], i = t.dimensionsDefine || r.dimensionsDefine || [], n = $(), a = [], o = n1(r, e, i, t.dimensionsCount), s = t.canOmitUnusedDimensions && tc(o), u = i === r.dimensionsDefine, l = u ? jv(r) : Jv(i), f = t.encodeDefine;
  !f && t.encodeDefaulter && (f = t.encodeDefaulter(r, o));
  for (var h = $(f), c = new wv(o), v = 0; v < c.length; v++)
    c[v] = -1;
  function d(b) {
    var M = c[b];
    if (M < 0) {
      var E = i[b], P = F(E) ? E : {
        name: E
      }, x = new Nn(), R = P.name;
      R != null && l.get(R) != null && (x.name = x.displayName = R), P.type != null && (x.type = P.type), P.displayName != null && (x.displayName = P.displayName);
      var B = a.length;
      return c[b] = B, x.storeDimIndex = b, a.push(x), x;
    }
    return a[M];
  }
  if (!s)
    for (var v = 0; v < o; v++)
      d(v);
  h.each(function(b, M) {
    var E = Et(b).slice();
    if (E.length === 1 && !q(E[0]) && E[0] < 0) {
      h.set(M, !1);
      return;
    }
    var P = h.set(M, []);
    L(E, function(x, R) {
      var B = q(x) ? l.get(x) : x;
      B != null && B < o && (P[R] = B, p(d(B), M, R));
    });
  });
  var _ = 0;
  L(e, function(b) {
    var M, E, P, x;
    if (q(b))
      M = b, x = {};
    else {
      x = b, M = x.name;
      var R = x.ordinalMeta;
      x.ordinalMeta = null, x = O({}, x), x.ordinalMeta = R, E = x.dimsDef, P = x.otherDims, x.name = x.coordDim = x.coordDimIndex = x.dimsDef = x.otherDims = null;
    }
    var B = h.get(M);
    if (B !== !1) {
      if (B = Et(B), !B.length)
        for (var A = 0; A < (E && E.length || 1); A++) {
          for (; _ < o && d(_).coordDim != null; )
            _++;
          _ < o && B.push(_++);
        }
      L(B, function(at, I) {
        var N = d(at);
        if (u && x.type != null && (N.type = x.type), p(Mt(N, x), M, I), N.name == null && E) {
          var k = E[I];
          !F(k) && (k = {
            name: k
          }), N.name = N.displayName = k.name, N.defaultTooltip = k.defaultTooltip;
        }
        P && Mt(N.otherDims, P);
      });
    }
  });
  function p(b, M, E) {
    as.get(M) != null ? b.otherDims[M] = E : (b.coordDim = M, b.coordDimIndex = E, n.set(M, !0));
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
      C == null && (D.coordDim = a1(w, n, m), D.coordDimIndex = 0, (!g || y <= 0) && (D.isExtraCoord = !0), y--), T(D), D.type == null && (av(r, S) === Ft.Must || D.isExtraCoord && (D.otherDims.itemName != null || D.otherDims.seriesName != null)) && (D.type = "ordinal");
    }
  return i1(a), new Qv({
    source: r,
    dimensions: a,
    fullDimensionCount: o,
    dimensionOmitted: s
  });
}
function i1(r) {
  for (var t = $(), e = 0; e < r.length; e++) {
    var i = r[e], n = i.name, a = t.get(n) || 0;
    a > 0 && (i.name = n + (a - 1)), a++, t.set(n, a);
  }
}
function n1(r, t, e, i) {
  var n = Math.max(r.dimensionsDetectedCount || 1, t.length, e.length, i || 0);
  return L(t, function(a) {
    var o;
    F(a) && (o = a.dimsDef) && (n = Math.max(n, o.length));
  }), n;
}
function a1(r, t, e) {
  if (e || t.hasKey(r)) {
    for (var i = 0; t.hasKey(r + i); )
      i++;
    r += i;
  }
  return t.set(r, !0), r;
}
function o1(r, t) {
  return t = t || {}, x_(r, null, null, t.state !== "normal");
}
var wf = [], s1 = {
  registerPreprocessor: qv,
  registerProcessor: Zv,
  registerPostInit: Om,
  registerPostUpdate: Nm,
  registerUpdateLifecycle: Xs,
  registerAction: ei,
  registerCoordinateSystem: Bm,
  registerLayout: km,
  registerVisual: yr,
  registerTransform: Vm,
  registerLoading: Kv,
  registerMap: Fm,
  registerImpl: gm,
  PRIORITY: Pm,
  ComponentModel: st,
  ComponentView: Kn,
  SeriesModel: qr,
  ChartView: dr,
  // TODO Use ComponentModel and SeriesModel instead of Constructor
  registerComponentModel: function(r) {
    st.registerClass(r);
  },
  registerComponentView: function(r) {
    Kn.registerClass(r);
  },
  registerSeriesModel: function(r) {
    qr.registerClass(r);
  },
  registerChartView: function(r) {
    dr.registerClass(r);
  },
  registerSubTypeDefaulter: function(r, t) {
    st.registerSubTypeDefaulter(r, t);
  },
  registerPainter: function(r, t) {
    ap(r, t);
  }
};
function Zs(r) {
  if (G(r)) {
    L(r, function(t) {
      Zs(t);
    });
    return;
  }
  it(wf, r) >= 0 || (wf.push(r), Q(r) && (r = {
    install: r
  }), r.install(s1));
}
function u1(r) {
  var t = qr.extend(r);
  return qr.registerClass(t), t;
}
function l1(r) {
  var t = dr.extend(r);
  return dr.registerClass(t), t;
}
var Ti = Math.PI * 2, nr = gr.CMD, f1 = ["top", "right", "bottom", "left"];
function h1(r, t, e, i, n) {
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
function v1(r, t, e, i, n, a, o, s, u) {
  o -= r, s -= t;
  var l = Math.sqrt(o * o + s * s);
  o /= l, s /= l;
  var f = o * e + r, h = s * e + t;
  if (Math.abs(i - n) % Ti < 1e-4)
    return u[0] = f, u[1] = h, l - e;
  if (a) {
    var c = i;
    i = De(n), n = De(c);
  } else
    i = De(i), n = De(n);
  i > n && (n += Ti);
  var v = Math.atan2(s, o);
  if (v < 0 && (v += Ti), v >= i && v <= n || v + Ti >= i && v + Ti <= n)
    return u[0] = f, u[1] = h, l - e;
  var d = e * Math.cos(i) + r, _ = e * Math.sin(i) + t, p = e * Math.cos(n) + r, g = e * Math.sin(n) + t, y = (d - o) * (d - o) + (_ - s) * (_ - s), m = (p - o) * (p - o) + (g - s) * (g - s);
  return y < m ? (u[0] = d, u[1] = _, Math.sqrt(y)) : (u[0] = p, u[1] = g, Math.sqrt(m));
}
function ys(r, t, e, i, n, a, o, s) {
  var u = n - r, l = a - t, f = e - r, h = i - t, c = Math.sqrt(f * f + h * h);
  f /= c, h /= c;
  var v = u * f + l * h, d = v / c;
  s && (d = Math.min(Math.max(d, 0), 1)), d *= c;
  var _ = o[0] = r + d * f, p = o[1] = t + d * h;
  return Math.sqrt((_ - n) * (_ - n) + (p - a) * (p - a));
}
function ec(r, t, e, i, n, a, o) {
  e < 0 && (r = r + e, e = -e), i < 0 && (t = t + i, i = -i);
  var s = r + e, u = t + i, l = o[0] = Math.min(Math.max(n, r), s), f = o[1] = Math.min(Math.max(a, t), u);
  return Math.sqrt((l - n) * (l - n) + (f - a) * (f - a));
}
var re = [];
function c1(r, t, e) {
  var i = ec(t.x, t.y, t.width, t.height, r.x, r.y, re);
  return e.set(re[0], re[1]), i;
}
function d1(r, t, e) {
  for (var i = 0, n = 0, a = 0, o = 0, s, u, l = 1 / 0, f = t.data, h = r.x, c = r.y, v = 0; v < f.length; ) {
    var d = f[v++];
    v === 1 && (i = f[v], n = f[v + 1], a = i, o = n);
    var _ = l;
    switch (d) {
      case nr.M:
        a = f[v++], o = f[v++], i = a, n = o;
        break;
      case nr.L:
        _ = ys(i, n, f[v], f[v + 1], h, c, re, !0), i = f[v++], n = f[v++];
        break;
      case nr.C:
        _ = th(i, n, f[v++], f[v++], f[v++], f[v++], f[v], f[v + 1], h, c, re), i = f[v++], n = f[v++];
        break;
      case nr.Q:
        _ = rh(i, n, f[v++], f[v++], f[v], f[v + 1], h, c, re), i = f[v++], n = f[v++];
        break;
      case nr.A:
        var p = f[v++], g = f[v++], y = f[v++], m = f[v++], w = f[v++], T = f[v++];
        v += 1;
        var S = !!(1 - f[v++]);
        s = Math.cos(w) * y + p, u = Math.sin(w) * m + g, v <= 1 && (a = s, o = u);
        var D = (h - p) * m / y + p;
        _ = v1(p, g, m, w, w + T, S, D, c, re), i = Math.cos(w + T) * y + p, n = Math.sin(w + T) * m + g;
        break;
      case nr.R:
        a = i = f[v++], o = n = f[v++];
        var C = f[v++], b = f[v++];
        _ = ec(a, o, C, b, h, c, re);
        break;
      case nr.Z:
        _ = ys(i, n, a, o, h, c, re, !0), i = a, n = o;
        break;
    }
    _ < l && (l = _, e.set(re[0], re[1]));
  }
  return l;
}
var fr = new V(), pt = new V(), Vt = new V(), Vr = new V(), Di = new V();
function Sf(r, t) {
  if (r) {
    var e = r.getTextGuideLine(), i = r.getTextContent();
    if (i && e) {
      var n = r.textGuideLineConfig || {}, a = [[0, 0], [0, 0], [0, 0]], o = n.candidates || f1, s = i.getBoundingRect().clone();
      s.applyTransform(i.getComputedTransform());
      var u = 1 / 0, l = n.anchor, f = r.getComputedTransform(), h = f && Gf([], f), c = t.get("length2") || 0;
      l && Vt.copy(l);
      for (var v = 0; v < o.length; v++) {
        var d = o[v];
        h1(d, 0, s, fr, Vr), V.scaleAndAdd(pt, fr, Vr, c), pt.transform(h);
        var _ = r.getBoundingRect(), p = l ? l.distance(pt) : r instanceof ht ? d1(pt, r.path, Vt) : c1(pt, _, Vt);
        p < u && (u = p, pt.transform(f), Vt.transform(f), Vt.toArray(a[0]), pt.toArray(a[1]), fr.toArray(a[2]));
      }
      p1(a, t.get("minTurnAngle")), e.setShape({
        points: a
      });
    }
  }
}
var Tf = [], ar = new V();
function p1(r, t) {
  if (t <= 180 && t > 0) {
    t = t / 180 * Math.PI, fr.fromArray(r[0]), pt.fromArray(r[1]), Vt.fromArray(r[2]), V.sub(Vr, fr, pt), V.sub(Di, Vt, pt);
    var e = Vr.len(), i = Di.len();
    if (!(e < 1e-3 || i < 1e-3)) {
      Vr.scale(1 / e), Di.scale(1 / i);
      var n = Vr.dot(Di), a = Math.cos(t);
      if (a < n) {
        var o = ys(pt.x, pt.y, Vt.x, Vt.y, fr.x, fr.y, Tf, !1);
        ar.fromArray(Tf), ar.scaleAndAdd(Di, o / Math.tan(Math.PI - t));
        var s = Vt.x !== pt.x ? (ar.x - pt.x) / (Vt.x - pt.x) : (ar.y - pt.y) / (Vt.y - pt.y);
        if (isNaN(s))
          return;
        s < 0 ? V.copy(ar, pt) : s > 1 && V.copy(ar, Vt), ar.toArray(r[1]);
      }
    }
  }
}
function Df(r, t, e, i) {
  var n = e === "normal", a = n ? r : r.ensureState(e);
  a.ignore = t;
  var o = i.get("smooth");
  o && o === !0 && (o = 0.3), a.shape = a.shape || {}, o > 0 && (a.shape.smooth = o);
  var s = i.getModel("lineStyle").getLineStyle();
  n ? r.useStyle(s) : a.style = s;
}
function g1(r, t) {
  var e = t.smooth, i = t.points;
  if (i)
    if (r.moveTo(i[0][0], i[0][1]), e > 0 && i.length >= 3) {
      var n = Ro(i[0], i[1]), a = Ro(i[1], i[2]);
      if (!n || !a) {
        r.lineTo(i[1][0], i[1][1]), r.lineTo(i[2][0], i[2][1]);
        return;
      }
      var o = Math.min(n, a) * e, s = Da([], i[1], i[0], o / n), u = Da([], i[1], i[2], o / a), l = Da([], s, u, 0.5);
      r.bezierCurveTo(s[0], s[1], s[0], s[1], l[0], l[1]), r.bezierCurveTo(u[0], u[1], u[0], u[1], i[2][0], i[2][1]);
    } else
      for (var f = 1; f < i.length; f++)
        r.lineTo(i[f][0], i[f][1]);
}
function _1(r, t, e) {
  var i = r.getTextGuideLine(), n = r.getTextContent();
  if (!n) {
    i && r.removeTextGuideLine();
    return;
  }
  for (var a = t.normal, o = a.get("show"), s = n.ignore, u = 0; u < ju.length; u++) {
    var l = ju[u], f = t[l], h = l === "normal";
    if (f) {
      var c = f.get("show"), v = h ? s : W(n.states[l] && n.states[l].ignore, s);
      if (v || !W(c, o)) {
        var d = h ? i : i && i.states[l];
        d && (d.ignore = !0);
        continue;
      }
      i || (i = new d_(), r.setTextGuideLine(i), !h && (s || !o) && Df(i, !0, "normal", t.normal), r.stateProxy && (i.stateProxy = r.stateProxy)), Df(i, !1, l, f);
    }
  }
  if (i) {
    Mt(i.style, e), i.style.fill = null;
    var _ = a.get("showAbove"), p = r.textGuideLineConfig = r.textGuideLineConfig || {};
    p.showAbove = _ || !1, i.buildPath = g1;
  }
}
function y1(r, t) {
  t = t || "labelLine";
  for (var e = {
    normal: r.getModel(t)
  }, i = 0; i < $r.length; i++) {
    var n = $r[i];
    e[n] = r.getModel([n, t]);
  }
  return e;
}
function m1(r) {
  for (var t = [], e = 0; e < r.length; e++) {
    var i = r[e];
    if (!i.defaultAttr.ignore) {
      var n = i.label, a = n.getComputedTransform(), o = n.getBoundingRect(), s = !a || a[1] < 1e-5 && a[2] < 1e-5, u = n.style.margin || 0, l = o.clone();
      l.applyTransform(a), l.x -= u / 2, l.y -= u / 2, l.width += u, l.height += u;
      var f = s ? new is(o, a) : null;
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
function rc(r, t, e, i, n, a) {
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
      var B = Math.min(Math.abs(C) / E, b);
      if (C > 0)
        for (var P = 0; P < o - 1; P++) {
          var A = M[P] * B;
          T(A, 0, P + 1);
        }
      else
        for (var P = o - 1; P > 0; P--) {
          var A = M[P - 1] * B;
          T(-A, P, o);
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
function w1(r, t, e, i) {
  return rc(r, "x", "width", t, e, i);
}
function S1(r, t, e, i) {
  return rc(r, "y", "height", t, e, i);
}
function T1(r) {
  var t = [];
  r.sort(function(_, p) {
    return p.priority - _.priority;
  });
  var e = new tt(0, 0, 0, 0);
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
        if (d.obb || (d.obb = new is(d.localRect, d.transform)), h || (h = new is(s, u)), h.intersect(d.obb)) {
          c = !0;
          break;
        }
      }
    }
    c ? (i(l), f && i(f)) : (l.attr("ignore", a.defaultAttr.ignore), f && f.attr("ignore", a.defaultAttr.labelGuideIgnore), t.push(a));
  }
}
function D1(r) {
  if (r) {
    for (var t = [], e = 0; e < r.length; e++)
      t.push(r[e].slice());
    return t;
  }
}
function C1(r, t) {
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
    labelLinePoints: D1(i && i.shape.points)
  };
}
var Cf = ["align", "verticalAlign", "width", "height", "fontSize"], St = new Es(), bo = _t(), b1 = _t();
function mn(r, t, e) {
  for (var i = 0; i < e.length; i++) {
    var n = e[i];
    t[n] != null && (r[n] = t[n]);
  }
}
var wn = ["x", "y", "rotation"], E1 = (
  /** @class */
  function() {
    function r() {
      this._labelList = [], this._chartViewList = [];
    }
    return r.prototype.clearLabels = function() {
      this._labelList = [], this._chartViewList = [];
    }, r.prototype._addLabel = function(t, e, i, n, a) {
      var o = n.style, s = n.__hostTarget, u = s.textConfig || {}, l = n.getComputedTransform(), f = n.getBoundingRect().plain();
      tt.applyTransform(f, f, l), l ? St.setLocalTransform(l) : (St.x = St.y = St.rotation = St.originX = St.originY = 0, St.scaleX = St.scaleY = 1), St.rotation = De(St.rotation);
      var h = n.__hostTarget, c;
      if (h) {
        c = h.getBoundingRect().plain();
        var v = h.getComputedTransform();
        tt.applyTransform(c, c, v);
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
      (Q(n) || lt(n).length) && t.group.traverse(function(a) {
        if (a.ignore)
          return !0;
        var o = a.getTextContent(), s = Gt(a);
        o && !o.disableLabelLayout && e._addLabel(s.dataIndex, s.dataType, i, o, n);
      });
    }, r.prototype.updateLayoutConfig = function(t) {
      var e = t.getWidth(), i = t.getHeight();
      function n(m, w) {
        return function() {
          Sf(m, w);
        };
      }
      for (var a = 0; a < this._labelList.length; a++) {
        var o = this._labelList[a], s = o.label, u = s.__hostTarget, l = o.defaultAttr, f = void 0;
        Q(o.layoutOption) ? f = o.layoutOption(C1(o, u)) : f = o.layoutOption, f = f || {}, o.computedLayoutOption = f;
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
        if (f.x != null ? (s.x = Yo(f.x, e), s.setStyle("x", 0), c = !0) : (s.x = l.x, s.setStyle("x", l.style.x)), f.y != null ? (s.y = Yo(f.y, i), s.setStyle("y", 0), c = !0) : (s.y = l.y, s.setStyle("y", l.style.y)), f.labelLinePoints) {
          var v = u.getTextGuideLine();
          v && (v.setShape({
            points: f.labelLinePoints
          }), c = !1);
        }
        var d = bo(s);
        d.needsUpdateLabelLine = c, s.rotation = f.rotate != null ? f.rotate * h : l.rotation, s.scaleX = l.scaleX, s.scaleY = l.scaleY;
        for (var _ = 0; _ < Cf.length; _++) {
          var p = Cf[_];
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
      var e = t.getWidth(), i = t.getHeight(), n = m1(this._labelList), a = Rt(n, function(u) {
        return u.layoutOption.moveOverlap === "shiftX";
      }), o = Rt(n, function(u) {
        return u.layoutOption.moveOverlap === "shiftY";
      });
      w1(a, 0, e), S1(o, 0, i);
      var s = Rt(n, function(u) {
        return u.layoutOption.hideOverlap;
      });
      T1(s);
    }, r.prototype.processLabelsOverall = function() {
      var t = this;
      L(this._chartViewList, function(e) {
        var i = e.__model, n = e.ignoreLabelLineUpdate, a = i.isAnimationEnabled();
        e.group.traverse(function(o) {
          if (o.ignore && !o.forceLabelAnimation)
            return !0;
          var s = !n, u = o.getTextContent();
          !s && u && (s = bo(u).needsUpdateLabelLine), s && t._updateLabelLine(o, i), a && t._animateLabels(o, i);
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
        _1(t, y1(s), u), Sf(t, h);
      }
    }, r.prototype._animateLabels = function(t, e) {
      var i = t.getTextContent(), n = t.getTextGuideLine();
      if (i && (t.forceLabelAnimation || !i.ignore && !i.invisible && !t.disableLabelAnimation && !Rn(t))) {
        var a = bo(i), o = a.oldLayout, s = Gt(t), u = s.dataIndex, l = {
          x: i.x,
          y: i.y,
          rotation: i.rotation
        }, f = e.getData(s.dataType);
        if (o) {
          i.attr(o);
          var c = t.prevStates;
          c && (it(c, "select") >= 0 && i.attr(a.oldLayoutSelect), it(c, "emphasis") >= 0 && i.attr(a.oldLayoutEmphasis)), Gr(i, l, e, u);
        } else if (i.attr(l), !Qh(i).valueAnimation) {
          var h = W(i.style.opacity, 1);
          i.style.opacity = 0, Gn(i, {
            style: {
              opacity: h
            }
          }, e, u);
        }
        if (a.oldLayout = l, i.states.select) {
          var v = a.oldLayoutSelect = {};
          mn(v, l, wn), mn(v, i.states.select, wn);
        }
        if (i.states.emphasis) {
          var d = a.oldLayoutEmphasis = {};
          mn(d, l, wn), mn(d, i.states.emphasis, wn);
        }
        O_(i, u, f, e, e);
      }
      if (n && !n.ignore && !n.invisible) {
        var a = b1(n), o = a.oldLayout, _ = {
          points: n.shape.points
        };
        o ? (n.attr({
          shape: o
        }), Gr(n, {
          shape: _
        }, e)) : (n.setShape(_), n.style.strokePercent = 0, Gn(n, {
          style: {
            strokePercent: 1
          }
        }, e)), a.oldLayout = _;
      }
    }, r;
  }()
);
const M1 = E1;
var Eo = _t();
function L1(r) {
  r.registerUpdateLifecycle("series:beforeupdate", function(t, e, i) {
    var n = Eo(e).labelManager;
    n || (n = Eo(e).labelManager = new M1()), n.clearLabels();
  }), r.registerUpdateLifecycle("series:layoutlabels", function(t, e, i) {
    var n = Eo(e).labelManager;
    i.updatedSeries.forEach(function(a) {
      n.addLabelsOfSeries(e.getViewOfSeriesModel(a));
    }), n.updateLayoutConfig(e), n.layout(e), n.processLabelsOverall();
  });
}
function bf(r, t, e) {
  var i = Zr.createCanvas(), n = t.getWidth(), a = t.getHeight(), o = i.style;
  return o && (o.position = "absolute", o.left = "0", o.top = "0", o.width = n + "px", o.height = a + "px", i.setAttribute("data-zr-dom-id", r)), i.width = n * e, i.height = a * e, i;
}
var P1 = function(r) {
  J(t, r);
  function t(e, i, n) {
    var a = r.call(this) || this;
    a.motionBlur = !1, a.lastFrameAlpha = 0.7, a.dpr = 1, a.virtual = !1, a.config = {}, a.incremental = !1, a.zlevel = 0, a.maxRepaintRectCount = 5, a.__dirty = !0, a.__firstTimePaint = !0, a.__used = !1, a.__drawIndex = 0, a.__startIndex = 0, a.__endIndex = 0, a.__prevStartIndex = null, a.__prevEndIndex = null;
    var o;
    n = n || Hn, typeof e == "string" ? o = bf(e, i, n) : F(e) && (o = e, e = o.id), a.id = e, a.dom = o;
    var s = o.style;
    return s && (Hf(o), o.onselectstart = function() {
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
    this.domBack = bf("back-" + this.id, this.painter, e), this.ctxBack = this.domBack.getContext("2d"), e !== 1 && this.ctxBack.scale(e, e);
  }, t.prototype.createRepaintRects = function(e, i, n, a) {
    if (this.__firstTimePaint)
      return this.__firstTimePaint = !1, null;
    var o = [], s = this.maxRepaintRectCount, u = !1, l = new tt(0, 0, 0, 0);
    function f(y) {
      if (!(!y.isFinite() || y.isZero()))
        if (o.length === 0) {
          var m = new tt(0, 0, 0, 0);
          m.copy(y), o.push(m);
        } else {
          for (var w = !1, T = 1 / 0, S = 0, D = 0; D < o.length; ++D) {
            var C = o[D];
            if (C.intersect(y)) {
              var b = new tt(0, 0, 0, 0);
              b.copy(C), b.union(y), o[D] = b, w = !0;
              break;
            } else if (u) {
              l.copy(y), l.union(C);
              var M = y.width * y.height, E = C.width * C.height, P = l.width * l.height, x = P - M - E;
              x < T && (T = x, S = D);
            }
          }
          if (u && (o[S].union(y), w = !0), !w) {
            var m = new tt(0, 0, 0, 0);
            m.copy(y), o.push(m);
          }
          u || (u = o.length >= s);
        }
    }
    for (var h = this.__startIndex; h < this.__endIndex; ++h) {
      var c = e[h];
      if (c) {
        var v = c.shouldBePainted(n, a, !0, !0), d = c.__isRendered && (c.__dirty & Ht || !v) ? c.getPrevPaintRect() : null;
        d && f(d);
        var _ = v && (c.__dirty & Ht || !c.__isRendered) ? c.getPaintRect() : null;
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
        if (oa(i)) {
          var w = i.global || i.__width === g && i.__height === y;
          m = w && i.__canvasGradient || cs(o, i, {
            x: 0,
            y: 0,
            width: g,
            height: y
          }), i.__canvasGradient = m, i.__width = g, i.__height = y;
        } else
          Lc(i) && (i.scaleX = i.scaleX || h, i.scaleY = i.scaleY || h, m = ds(o, i, {
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
}(ce);
const Mo = P1;
var Ef = 1e5, or = 314159, Sn = 0.01, x1 = 1e-3;
function R1(r) {
  return r ? r.__builtin__ ? !0 : !(typeof r.resize != "function" || typeof r.refresh != "function") : !1;
}
function I1(r, t) {
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
var A1 = function() {
  function r(t, e, i, n) {
    this.type = "canvas", this._zlevelList = [], this._prevDisplayList = [], this._layers = {}, this._layerConfig = {}, this._needsManuallyCompositing = !1, this.type = "canvas";
    var a = !t.nodeName || t.nodeName.toUpperCase() === "CANVAS";
    this._opts = i = O({}, i || {}), this.dpr = i.devicePixelRatio || Hn, this._singleCanvas = a, this.root = t;
    var o = t.style;
    o && (Hf(t), t.innerHTML = ""), this.storage = e;
    var s = this._zlevelList;
    this._prevDisplayList = [];
    var u = this._layers;
    if (a) {
      var f = t, h = f.width, c = f.height;
      i.width != null && (h = i.width), i.height != null && (c = i.height), this.dpr = i.devicePixelRatio || 1, f.width = h * this.dpr, f.height = c * this.dpr, this._width = h, this._height = c;
      var v = new Mo(f, this, this.dpr);
      v.__builtin__ = !0, v.initContext(), u[or] = v, v.zlevel = or, s.push(or), this._domRoot = t;
    } else {
      this._width = dn(t, 0, i), this._height = dn(t, 1, i);
      var l = this._domRoot = I1(this._width, this._height);
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
        s.__inHover && (i || (i = this._hoverlayer = this.getLayer(Ef)), a || (a = i.ctx, a.save()), lr(a, s, n, o === e - 1));
      }
      a && a.restore();
    }
  }, r.prototype.getHoverLayer = function() {
    return this.getLayer(Ef);
  }, r.prototype.paintOne = function(t, e) {
    Ov(t, e);
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
        Oo(function() {
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
          var B = t[C];
          if (B.__inHover && (h = !0), n._doPaintEl(B, p, o, x, R, C === p.__endIndex - 1), w) {
            var A = Date.now() - T;
            if (A > 15)
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
    return et.wxa && L(this._layers, function(_) {
      _ && _.ctx && _.ctx.draw && _.ctx.draw();
    }), {
      finished: f,
      needsRefreshHover: h
    };
  }, r.prototype._doPaintEl = function(t, e, i, n, a, o) {
    var s = e.ctx;
    if (i) {
      var u = t.getPaintRect();
      (!n || u && u.intersect(n)) && (lr(s, t, a, o), t.setPrevPaintRect(u));
    } else
      lr(s, t, a, o);
  }, r.prototype.getLayer = function(t, e) {
    this._singleCanvas && !this._needsManuallyCompositing && (t = or);
    var i = this._layers[t];
    return i || (i = new Mo("zr_" + t, this, this.dpr), i.zlevel = t, i.__builtin__ = !0, this._layerConfig[t] ? ft(i, this._layerConfig[t], !0) : this._layerConfig[t - Sn] && ft(i, this._layerConfig[t - Sn], !0), e && (i.virtual = e), this.insertLayer(t, i), i.initContext()), i;
  }, r.prototype.insertLayer = function(t, e) {
    var i = this._layers, n = this._zlevelList, a = n.length, o = this._domRoot, s = null, u = -1;
    if (i[t]) {
      process.env.NODE_ENV !== "production" && hr("ZLevel " + t + " has been used already");
      return;
    }
    if (!R1(e)) {
      process.env.NODE_ENV !== "production" && hr("Layer of zlevel " + t + " is not valid");
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
      s !== l && (s = l, o = 0), n.incremental ? (f = this.getLayer(l + x1, this._needsManuallyCompositing), f.incremental = !0, o = 1) : f = this.getLayer(l + (o > 0 ? Sn : 0), this._needsManuallyCompositing), f.__builtin__ || hr("ZLevel " + l + " has been used by unkown layer " + f.id), f !== a && (f.__used = !0, f.__startIndex !== u && (f.__dirty = !0), f.__startIndex = u, f.incremental ? f.__drawIndex = -1 : f.__drawIndex = u, e(u), a = f), n.__dirty & Ht && !n.__inHover && (f.__dirty = !0, f.incremental && f.__drawIndex < 0 && (f.__drawIndex = u));
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
        if (a === t || a === t + Sn) {
          var o = this._layers[a];
          ft(o, i[t], !0);
        }
      }
    }
  }, r.prototype.delLayer = function(t) {
    var e = this._layers, i = this._zlevelList, n = e[t];
    n && (n.dom.parentNode.removeChild(n.dom), delete e[t], i.splice(it(i, t), 1));
  }, r.prototype.resize = function(t, e) {
    if (this._domRoot.style) {
      var i = this._domRoot;
      i.style.display = "none";
      var n = this._opts, a = this.root;
      if (t != null && (n.width = t), e != null && (n.height = e), t = dn(a, 0, n), e = dn(a, 1, n), i.style.display = "", this._width !== t || e !== this._height) {
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
    var e = new Mo("image", this, t.pixelRatio || this.dpr);
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
        lr(i, f, o, u === l - 1);
      }
    return e.dom;
  }, r.prototype.getWidth = function() {
    return this._width;
  }, r.prototype.getHeight = function() {
    return this._height;
  }, r;
}();
const O1 = A1;
function N1(r) {
  r.registerPainter("canvas", O1);
}
var B1 = (
  /** @class */
  function(r) {
    J(t, r);
    function t() {
      var e = r !== null && r.apply(this, arguments) || this;
      return e.type = "dataset", e;
    }
    return t.prototype.init = function(e, i, n) {
      r.prototype.init.call(this, e, i, n), this._sourceManager = new Tv(this), kl(this);
    }, t.prototype.mergeOption = function(e, i) {
      r.prototype.mergeOption.call(this, e, i), kl(this);
    }, t.prototype.optionUpdated = function() {
      this._sourceManager.dirty();
    }, t.prototype.getSourceManager = function() {
      return this._sourceManager;
    }, t.type = "dataset", t.defaultOption = {
      seriesLayoutBy: he
    }, t;
  }(st)
), k1 = (
  /** @class */
  function(r) {
    J(t, r);
    function t() {
      var e = r !== null && r.apply(this, arguments) || this;
      return e.type = "dataset", e;
    }
    return t.type = "dataset", t;
  }(Kn)
);
function F1(r) {
  r.registerComponentModel(B1), r.registerComponentView(k1);
}
Zs([N1, F1]);
Zs(L1);
u1({
  type: "series.liquidFill",
  optionUpdated: function() {
    var r = this.option;
    r.gridSize = Math.max(Math.floor(r.gridSize), 4);
  },
  getInitialData: function(r, t) {
    var e = e1(r.data, {
      coordDimensions: ["value"]
    }), i = new t1(e, this);
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
const V1 = C_({
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
      var s = o % 4, u = z1(
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
function z1(r, t, e, i) {
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
var we = Yo;
function Mf(r) {
  return r && r.indexOf("path://") === 0;
}
l1({
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
    a.diff(M).add(function(I) {
      var N = B(I, !1), k = N.shape.waterLevel;
      N.shape.waterLevel = w ? f / 2 : u, Gn(N, {
        shape: {
          waterLevel: k
        }
      }, r), N.z2 = 2, A(I, N, null), n.add(N), a.setItemGraphicEl(I, N), E.push(N);
    }).update(function(I, N) {
      for (var k = M.getItemGraphicEl(N), Y = B(I, !1, k), z = {}, H = ["amplitude", "cx", "cy", "phase", "radius", "radiusY", "waterLevel", "waveLength"], j = 0; j < H.length; ++j) {
        var K = H[j];
        Y.shape.hasOwnProperty(K) && (z[K] = Y.shape[K]);
      }
      for (var vt = {}, nt = ["fill", "opacity", "shadowBlur", "shadowColor"], j = 0; j < nt.length; ++j) {
        var K = nt[j];
        Y.style.hasOwnProperty(K) && (vt[K] = Y.style[K]);
      }
      w && (z.radiusY = f / 2), Gr(k, {
        shape: z,
        x: Y.x,
        y: Y.y
      }, r), r.isUniversalTransitionEnabled && r.isUniversalTransitionEnabled() ? Gr(k, {
        style: vt
      }, r) : k.useStyle(vt);
      var ct = k.getClipPath(), Lt = Y.getClipPath();
      k.setClipPath(Y.getClipPath()), k.shape.inverse = Y.inverse, ct && Lt && i._shape === T && !Mf(T) && Gr(Lt, {
        shape: ct.shape
      }, r, { isFrom: !0 }), A(I, k, k), n.add(k), a.setItemGraphicEl(I, k), E.push(k);
    }).remove(function(I) {
      var N = M.getItemGraphicEl(I);
      n.remove(N);
    }).execute(), o.get("label.show") && n.add(at(E)), this._shape = T, this._data = a;
    function P(I, N) {
      if (T)
        if (Mf(T)) {
          var k = ns(T.slice(7), {}), Y = k.getBoundingRect(), z = Y.width, H = Y.height;
          z > H ? (H = I * 2 / z * H, z = I * 2) : (z = I * 2 / H * z, H = I * 2);
          var j = N ? 0 : _ - z / 2, K = N ? 0 : p - H / 2;
          return k = ns(
            T.slice(7),
            {},
            new tt(j, K, z, H)
          ), N && (k.x = -z / 2, k.y = -H / 2), k;
        } else if (w) {
          var vt = N ? -I[0] : _ - I[0], nt = N ? -I[1] : p - I[1];
          return vs(
            "rect",
            vt,
            nt,
            I[0] * 2,
            I[1] * 2
          );
        } else {
          var vt = N ? -I : _ - I, nt = N ? -I : p - I;
          return T === "pin" ? nt += I : T === "arrow" && (nt -= I), vs(T, vt, nt, I * 2, I * 2);
        }
      return new Wh({
        shape: {
          cx: N ? 0 : _,
          cy: N ? 0 : p,
          r: I
        }
      });
    }
    function x() {
      var I = P(g);
      return I.style.fill = null, I.setStyle(r.getModel("outline.itemStyle").getItemStyle()), I;
    }
    function R() {
      var I = P(u);
      I.setStyle(r.getModel("backgroundStyle").getItemStyle()), I.style.fill = null, I.z2 = 5;
      var N = P(u);
      N.setStyle(r.getModel("backgroundStyle").getItemStyle()), N.style.stroke = null;
      var k = new Yr();
      return k.add(I), k.add(N), k;
    }
    function B(I, N, k) {
      var Y = w ? u[0] : u, z = w ? f / 2 : u, H = a.getItemModel(I), j = H.getModel("itemStyle"), K = H.get("phase"), vt = we(
        H.get("amplitude"),
        z * 2
      ), nt = we(
        H.get("waveLength"),
        Y * 2
      ), ct = a.get("value", I), Lt = z - ct * z * 2;
      K = k ? k.shape.phase : K === "auto" ? I * Math.PI / 4 : K;
      var dt = j.getItemStyle();
      if (!dt.fill) {
        var ie = r.get("color"), Bt = I % ie.length;
        dt.fill = ie[Bt];
      }
      var ge = Y * 2, ot = new V1({
        shape: {
          waveLength: nt,
          radius: Y,
          radiusY: z,
          cx: ge,
          cy: 0,
          waterLevel: Lt,
          amplitude: vt,
          phase: K,
          inverse: N
        },
        style: dt,
        x: _,
        y: p
      });
      ot.shape._waterLevel = Lt;
      var ri = H.getModel("emphasis.itemStyle").getItemStyle();
      ri.lineWidth = 0, ot.ensureState("emphasis").style = ri, Zg(ot);
      var ii = P(u, !0);
      return ii.setStyle({
        fill: "white"
      }), ot.setClipPath(ii), ot;
    }
    function A(I, N, k) {
      var Y = a.getItemModel(I), z = Y.get("period"), H = Y.get("direction"), j = a.get("value", I), K = Y.get("phase");
      K = k ? k.shape.phase : K === "auto" ? I * Math.PI / 4 : K;
      var vt = function(Lt) {
        var dt = a.count();
        return dt === 0 ? Lt : Lt * (0.2 + (dt - I) / dt * 0.8);
      }, nt = 0;
      z === "auto" ? nt = vt(5e3) : nt = typeof z == "function" ? z(j, I) : z;
      var ct = 0;
      H === "right" || H == null ? ct = Math.PI : H === "left" ? ct = -Math.PI : H === "none" ? ct = 0 : console.error("Illegal direction value for liquid fill."), H !== "none" && Y.get("waveAnimation") && N.animate("shape", !0).when(0, {
        phase: K
      }).when(nt / 2, {
        phase: ct + K
      }).when(nt, {
        phase: ct * 2 + K
      }).during(function() {
        b && b.dirty(!0);
      }).start();
    }
    function at(I) {
      var N = o.getModel("label");
      function k() {
        var dt = r.getFormattedLabel(0, "normal"), ie = a.get("value", 0) * 100, Bt = a.getName(0) || r.name;
        return isNaN(ie) || (Bt = ie.toFixed(0) + "%"), dt ?? Bt;
      }
      var Y = {
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
          position: N.get("position") || "inside"
        },
        silent: !0
      }, z = {
        style: {
          text: k(),
          textAlign: N.get("align"),
          textVerticalAlign: N.get("baseline")
        }
      };
      Object.assign(z.style, o1(N));
      var H = new Ce(Y), j = new Ce(Y);
      j.disableLabelAnimation = !0, H.disableLabelAnimation = !0;
      var K = new Un(z), vt = new Un(z);
      H.setTextContent(K), j.setTextContent(vt);
      var nt = N.get("insideColor");
      vt.style.fill = nt;
      var ct = new Yr();
      ct.add(H), ct.add(j);
      var Lt = P(u, !0);
      return b = new S_({
        shape: {
          paths: I
        },
        x: _,
        y: p
      }), b.setClipPath(Lt), j.setClipPath(b), ct;
    }
  },
  dispose: function() {
  }
});
const H1 = { class: "echarts" }, U1 = na({
  name: "FzECharts"
}), G1 = /* @__PURE__ */ na({
  ...U1,
  props: {
    option: {}
  },
  emits: ["reload", "getEcharts"],
  setup(r, { emit: t }) {
    const e = r, i = oc(null);
    let n;
    const a = () => {
      n.clear(), e.option && (n.setOption(e.option), t("getEcharts", n));
    }, o = () => {
      !e.option || !i.value || (n && !n.isDisposed() && n.dispose(), n = lc(i.value), a());
    };
    return Pf(
      () => e.option,
      () => {
        sc(() => {
          o();
        });
      },
      { immediate: !0 }
    ), window.addEventListener(
      "resize",
      Ks(() => {
        t("reload"), n.resize();
      }, 200)
    ), xf(() => {
      n.dispose(), window.removeEventListener(
        "resize",
        Ks(() => {
          t("reload"), n.resize();
        }, 200)
      );
    }), (s, u) => (Rf(), If("div", H1, [
      uc(
        "div",
        {
          ref_key: "echartsRef",
          ref: i,
          class: "echarts-main"
        },
        null,
        512
        /* NEED_PATCH */
      )
    ]));
  }
});
const Y1 = (r, t) => {
  const e = r.__vccOpts || r;
  for (const [i, n] of t)
    e[i] = n;
  return e;
}, W1 = /* @__PURE__ */ Y1(G1, [["__scopeId", "data-v-fc6a80f4"]]), $1 = Af(W1), X1 = [vc, $1], Lf = Symbol("INSTALLED_KEY"), q1 = (r = []) => ({
  install: (e) => {
    e[Lf] || (e[Lf] = !0, r.forEach((i) => {
      e.use(i);
    }));
  }
}), Z1 = q1([...X1]), J1 = Z1.install;
export {
  vc as FzCountTo,
  $1 as FzECharts,
  Z1 as default,
  J1 as install
};
