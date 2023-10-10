(function (e, n) {
  typeof exports == 'object' && typeof module < 'u'
    ? n(exports, require('vue'))
    : typeof define == 'function' && define.amd
    ? define(['exports', 'vue'], n)
    : ((e = typeof globalThis < 'u' ? globalThis : e || self),
      n((e.FallenZeroUI = {}), e.Vue));
})(this, function (e, n) {
  'use strict';
  const d = '',
    l = n.defineComponent({ name: 'FzButton' }),
    o = n.defineComponent({
      ...l,
      setup(t) {
        return (s, r) => (
          n.openBlock(),
          n.createElementBlock('button', null, [
            n.renderSlot(s.$slots, 'default'),
          ])
        );
      },
    });
  o.install = (t) => {
    t.component(o.name, o);
  };
  const c = [o],
    u = Symbol('INSTALLED_KEY'),
    i = (t) => {
      t[u] ||
        ((t[u] = !0),
        c.forEach((s) => {
          t.use(s);
        }));
    },
    f = { install: i };
  (e.Button = o),
    (e.default = f),
    (e.install = i),
    Object.defineProperties(e, {
      __esModule: { value: !0 },
      [Symbol.toStringTag]: { value: 'Module' },
    });
});
