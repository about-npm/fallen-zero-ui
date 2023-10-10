import { defineComponent as B, ref as s, computed as C, watch as S, onMounted as I, onBeforeUnmount as L, openBlock as T, createElementBlock as q, toDisplayString as M } from "vue";
const Y = (t, r) => {
  if (t.install = (l) => {
    for (const e of [t, ...Object.values(r ?? {})])
      l.component(e.name, e);
  }, r)
    for (const [l, e] of Object.entries(r))
      t[l] = e;
  return t;
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
    easingFn: { type: Function, default: (t, r, l, e) => l * (-Math.pow(2, -10 * t / e) + 1) * 1024 / 1023 + r }
  },
  emits: ["callback", "mountedCallback"],
  setup(t, { expose: r, emit: l }) {
    const e = t, E = (i) => !isNaN(parseFloat(i)), d = (i) => {
      let o = i.toFixed(Math.abs(e.decimals));
      o += "";
      const A = o.split(".");
      let f = A[0];
      const N = A.length > 1 ? e.decimal + A[1] : "", k = /(\d+)(\d{3})/;
      if (e.separator && !E(e.separator))
        for (; k.test(f); )
          f = f.replace(k, "$1" + e.separator + "$2");
      return e.prefix + f + N + e.suffix;
    }, u = s(e.startVal), p = s(d(e.startVal)), n = s(null), m = s(!1), c = s(e.duration), v = s(null), _ = s(null), b = s(null), a = s(null), V = C(() => e.startVal > e.endVal), F = (i) => {
      v.value || (v.value = i), _.value = i;
      const o = i - v.value;
      b.value = c.value - o, e.useEasing ? V.value ? n.value = u.value - e.easingFn(
        o,
        0,
        u.value - e.endVal,
        c.value
      ) : n.value = e.easingFn(
        o,
        u.value,
        e.endVal - u.value,
        c.value
      ) : V.value ? n.value = u.value - (u.value - e.endVal) * (o / c.value) : n.value = u.value + (e.endVal - u.value) * (o / c.value), V.value ? n.value = n.value < e.endVal ? e.endVal : n.value : n.value = n.value > e.endVal ? e.endVal : n.value, p.value = d(n.value), o < c.value ? (a.value !== null && cancelAnimationFrame(a.value), a.value = requestAnimationFrame(F)) : (a.value !== null && cancelAnimationFrame(a.value), l("callback"));
    }, g = () => {
      u.value = e.startVal, v.value = null, c.value = e.duration, m.value = !1, a.value !== null && cancelAnimationFrame(a.value), a.value = requestAnimationFrame(F);
    }, y = () => {
      v.value = null, c.value = +(b.value || 0), u.value = +(n.value || 0), a.value !== null && cancelAnimationFrame(a.value), a.value = requestAnimationFrame(F), m.value = !1;
    }, h = () => {
      a.value !== null && cancelAnimationFrame(a.value), m.value = !0;
    }, w = () => {
      m.value ? y() : h();
    }, D = () => {
      v.value = null, a.value !== null && cancelAnimationFrame(a.value), p.value = d(e.startVal);
    };
    return S(
      () => [e.startVal, e.endVal],
      () => {
        e.autoplay && g();
      }
    ), I(() => {
      e.autoplay && g(), l("mountedCallback");
    }), L(() => {
      a.value !== null && cancelAnimationFrame(a.value);
    }), r({ pauseResume: w, pause: h, reset: D, resume: y, start: g }), (i, o) => (T(), q(
      "span",
      null,
      M(p.value),
      1
      /* TEXT */
    ));
  }
}), K = Y(j), O = [K], x = Symbol("INSTALLED_KEY"), $ = (t = []) => ({
  install: (l) => {
    console.log(l[x]), !l[x] && (l[x] = !0, t.forEach((e) => {
      console.log(e), l.use(e);
    }));
  }
}), z = $([...O]), U = z.install;
export {
  K as FzCountTo,
  z as default,
  U as install
};
