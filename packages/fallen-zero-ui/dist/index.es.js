import { defineComponent as k, ref as s, computed as B, watch as S, onMounted as T, onBeforeUnmount as I, openBlock as L, createElementBlock as q, toDisplayString as M } from "vue";
const Y = (n, r) => {
  if (n.install = (l) => {
    for (const e of [n, ...Object.values(r ?? {})])
      l.component(e.name, e);
  }, r)
    for (const [l, e] of Object.entries(r))
      n[l] = e;
  return n;
}, j = k({
  name: "FzCountTo"
}), z = /* @__PURE__ */ k({
  ...j,
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
    easingFn: { type: Function, default: (n, r, l, e) => l * (-Math.pow(2, -10 * n / e) + 1) * 1024 / 1023 + r }
  },
  emits: ["callback", "mountedCallback"],
  setup(n, { expose: r, emit: l }) {
    const e = n, E = (i) => !isNaN(parseFloat(i)), d = (i) => {
      let o = i.toFixed(Math.abs(e.decimals));
      o += "";
      const g = o.split(".");
      let f = g[0];
      const N = g.length > 1 ? e.decimal + g[1] : "", _ = /(\d+)(\d{3})/;
      if (e.separator && !E(e.separator))
        for (; _.test(f); )
          f = f.replace(_, "$1" + e.separator + "$2");
      return e.prefix + f + N + e.suffix;
    }, u = s(e.startVal), p = s(d(e.startVal)), t = s(null), m = s(!1), c = s(e.duration), v = s(null), w = s(null), b = s(null), a = s(null), V = B(() => e.startVal > e.endVal), F = (i) => {
      v.value || (v.value = i), w.value = i;
      const o = i - v.value;
      b.value = c.value - o, e.useEasing ? V.value ? t.value = u.value - e.easingFn(
        o,
        0,
        u.value - e.endVal,
        c.value
      ) : t.value = e.easingFn(
        o,
        u.value,
        e.endVal - u.value,
        c.value
      ) : V.value ? t.value = u.value - (u.value - e.endVal) * (o / c.value) : t.value = u.value + (e.endVal - u.value) * (o / c.value), V.value ? t.value = t.value < e.endVal ? e.endVal : t.value : t.value = t.value > e.endVal ? e.endVal : t.value, p.value = d(t.value), o < c.value ? (a.value !== null && cancelAnimationFrame(a.value), a.value = requestAnimationFrame(F)) : (a.value !== null && cancelAnimationFrame(a.value), l("callback"));
    }, A = () => {
      u.value = e.startVal, v.value = null, c.value = e.duration, m.value = !1, a.value !== null && cancelAnimationFrame(a.value), a.value = requestAnimationFrame(F);
    }, x = () => {
      v.value = null, c.value = +(b.value || 0), u.value = +(t.value || 0), a.value !== null && cancelAnimationFrame(a.value), a.value = requestAnimationFrame(F), m.value = !1;
    }, y = () => {
      a.value !== null && cancelAnimationFrame(a.value), m.value = !0;
    }, C = () => {
      m.value ? x() : y();
    }, D = () => {
      v.value = null, a.value !== null && cancelAnimationFrame(a.value), p.value = d(e.startVal);
    };
    return S(
      () => [e.startVal, e.endVal],
      () => {
        e.autoplay && A();
      }
    ), T(() => {
      e.autoplay && A(), l("mountedCallback");
    }), I(() => {
      a.value !== null && cancelAnimationFrame(a.value);
    }), r({ pauseResume: C, pause: y, reset: D, resume: x, start: A }), (i, o) => (L(), q(
      "span",
      null,
      M(p.value),
      1
      /* TEXT */
    ));
  }
}), K = Y(z), O = [K], h = Symbol("INSTALLED_KEY"), $ = (n = []) => ({
  install: (l) => {
    l[h] || (l[h] = !0, n.forEach((e) => {
      l.use(e);
    }));
  }
}), R = $([...O]), G = R.install;
export {
  K as FzCountTo,
  R as default,
  G as install
};
