import {
  defineComponent as s,
  openBlock as c,
  createElementBlock as l,
  renderSlot as r,
} from 'vue';
const u = s({
    name: 'FzButton',
  }),
  n = /* @__PURE__ */ s({
    ...u,
    setup(t) {
      return (o, _) => (c(), l('button', null, [r(o.$slots, 'default')]));
    },
  });
n.install = (t) => {
  t.component(n.name, n);
};
const m = [n],
  e = Symbol('INSTALLED_KEY'),
  a = (t) => {
    t[e] ||
      ((t[e] = !0),
      m.forEach((o) => {
        t.use(o);
      }));
  },
  i = {
    install: a,
  };
export { n as Button, i as default, a as install };
