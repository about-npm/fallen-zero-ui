import { defineComponent as B, ref as s, computed as C, watch as S, onMounted as I, onBeforeUnmount as L, openBlock as T, createElementBlock as q, toDisplayString as M } from "vue";
const Y = (n, r) => {
  if (n.install = (l) => {
    for (const e of [n, ...Object.values(r ?? {})])
      l.component(e.name, e);
  }, r)
    for (const [l, e] of Object.entries(r))
      n[l] = e;
  return n;
}, j = /* @__PURE__ */ B({
  __name: "index",
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
      const N = g.length > 1 ? e.decimal + g[1] : "", h = /(\d+)(\d{3})/;
      if (e.separator && !E(e.separator))
        for (; h.test(f); )
          f = f.replace(h, "$1" + e.separator + "$2");
      return e.prefix + f + N + e.suffix;
    }, u = s(e.startVal), p = s(d(e.startVal)), t = s(null), m = s(!1), c = s(e.duration), v = s(null), _ = s(null), x = s(null), a = s(null), V = C(() => e.startVal > e.endVal), F = (i) => {
      v.value || (v.value = i), _.value = i;
      const o = i - v.value;
      x.value = c.value - o, e.useEasing ? V.value ? t.value = u.value - e.easingFn(
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
    }, b = () => {
      v.value = null, c.value = +(x.value || 0), u.value = +(t.value || 0), a.value !== null && cancelAnimationFrame(a.value), a.value = requestAnimationFrame(F), m.value = !1;
    }, y = () => {
      a.value !== null && cancelAnimationFrame(a.value), m.value = !0;
    }, w = () => {
      m.value ? b() : y();
    }, D = () => {
      v.value = null, a.value !== null && cancelAnimationFrame(a.value), p.value = d(e.startVal);
    };
    return S(
      () => [e.startVal, e.endVal],
      () => {
        e.autoplay && A();
      }
    ), I(() => {
      e.autoplay && A(), l("mountedCallback");
    }), L(() => {
      a.value !== null && cancelAnimationFrame(a.value);
    }), r({ pauseResume: w, pause: y, reset: D, resume: b, start: A }), (i, o) => (T(), q(
      "span",
      null,
      M(p.value),
      1
      /* TEXT */
    ));
  }
}), K = Y(j), O = [K], k = Symbol("INSTALLED_KEY"), $ = (n = []) => ({
  install: (l) => {
    l[k] || (l[k] = !0, n.forEach((e) => l.use(e)));
  }
}), z = $([...O]), U = z.install;
export {
  z as default,
  U as install
};
