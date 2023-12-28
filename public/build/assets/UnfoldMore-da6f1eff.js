import {
  r as h,
  bJ as Je,
  bm as gt,
  $ as J,
  bn as Pt,
  j as a,
  c as P,
  A as ye,
  bS as cn,
  l as ue,
  g as H,
  bq as un,
  f as q,
  bo as Xe,
  bQ as dn,
  bP as Et,
  m as D,
  bT as Ie,
  bU as fn,
  bV as pt,
  bW as vt,
  R as he,
  h as hn,
  a2 as Re,
  a7 as ze,
  aW as Tt,
  aX as Nt,
  a5 as re,
  bX as mn,
  bY as gn,
  bZ as et,
  b_ as Z,
  b$ as Ve,
  c0 as He,
  c1 as pe,
  c2 as ve,
  c3 as De,
  c4 as Se,
  c5 as Rt,
  d as we,
  c6 as Me,
  i as Oe,
  c7 as ce,
  c8 as pn,
  c9 as vn,
  ca as xn,
  cb as bn,
  cc as yn,
  cd as wn,
  ce as jn,
  u as zt,
  aS as kn,
  bH as Mt,
  cf as Cn,
  ai as In,
  aj as Dn,
  T as $,
  n as tt,
  U as nt,
  B as ee,
  D as $e,
  p as st,
  t as rt,
  a9 as je,
  cg as Pe,
  X as Sn,
  ch as Pn,
  a1 as Ot,
  bG as En,
  az as Tn,
  b9 as Nn,
  aR as $t,
  ci as Rn,
  a3 as Ft,
  a8 as oe,
  cj as zn,
  z as ie,
  s as At,
  v as W,
  ck as Mn,
  an as Lt,
  I as Fe,
  a as Vt,
  k as On,
  b as Ae,
  S as $n,
  y as at,
  W as Fn,
  _ as An,
  cl as Ln,
  aQ as Vn,
  cm as Hn,
  cn as Bn,
  ay as ot,
  K as lt,
  co as Un,
  q as Kn,
  o as _n,
  F as qn,
  e as Wn,
  Z as Ht,
  cp as Yn,
  bw as Bt,
  cq as Xn,
  cr as Gn,
  b0 as Qn,
} from './main-c5aef231.js';
import {E as Zn, C as Jn} from './Edit-e18ef068.js';
const it = h.createContext(null);
function es(e = !1) {
  h.useEffect(
    () => (
      e
        ? document.documentElement.classList.remove('no-page-overflow')
        : document.documentElement.classList.add('no-page-overflow'),
      () => {
        document.documentElement.classList.remove('no-page-overflow');
      }
    ),
    [e],
  );
}
function ga({
  children: e,
  leftSidenavStatus: n,
  onLeftSidenavChange: t,
  rightSidenavStatus: s,
  initialRightSidenavStatus: r,
  onRightSidenavChange: o,
  name: l,
  leftSidenavCanBeCompact: i,
  height: u = 'h-screen',
  className: d,
  gridClassName: c = 'dashboard-grid',
  blockBodyOverflow: g = !0,
  ...f
}) {
  es(!g);
  const m = Je('(max-width: 1024px)'),
    x = h.useMemo(() => (l ? gt(`${l}.sidenav.compact`) : !1), [l])
      ? 'compact'
      : 'open',
    [y, v] = J(n, m ? 'closed' : x, t),
    w = h.useMemo(() => {
      if (m) return 'closed';
      if (r != null) return r;
      const b = gt(`${l}.sidenav.right.position`, 'open');
      return b ?? (r || 'closed');
    }, [m, l, r]),
    [k, C] = J(s, w, o),
    N = h.useCallback(
      b => {
        C(b), Pt(`${l}.sidenav.right.position`, b);
      },
      [C, l],
    ),
    z = m && (y === 'open' || k === 'open');
  return a.jsx(it.Provider, {
    value: {
      leftSidenavStatus: y,
      setLeftSidenavStatus: v,
      rightSidenavStatus: k,
      setRightSidenavStatus: N,
      leftSidenavCanBeCompact: i,
      name: l,
      isMobileMode: m,
    },
    children: a.jsxs('div', {
      ...f,
      className: P('relative isolate', c, d, u),
      children: [
        e,
        a.jsx(ye, {
          children:
            z &&
            a.jsx(
              cn,
              {
                position: 'fixed',
                onClick: () => {
                  v('closed'), N('closed');
                },
              },
              'dashboard-underlay',
            ),
        }),
      ],
    }),
  });
}
function pa({children: e, isScrollable: n = !0}) {
  return h.cloneElement(e, {
    className: P(
      e.props.className,
      n && 'overflow-y-auto stable-scrollbar',
      'dashboard-grid-content',
    ),
  });
}
function va({
  className: e,
  position: n,
  children: t,
  size: s = 'md',
  mode: r,
  overlayPosition: o = 'fixed',
  display: l = 'flex',
  overflow: i = 'overflow-hidden',
  forceClosed: u = !1,
}) {
  const {
      isMobileMode: d,
      leftSidenavStatus: c,
      setLeftSidenavStatus: g,
      rightSidenavStatus: f,
      setRightSidenavStatus: m,
    } = h.useContext(it),
    p = n === 'left' ? c : f,
    x = d || r === 'overlay',
    y = {
      open: {display: l, width: null},
      compact: {display: l, width: null},
      closed: {width: 0, transitionEnd: {display: 'none'}},
    },
    v = ts(p === 'compact' ? 'compact' : s);
  return a.jsx(ue.div, {
    variants: y,
    initial: !1,
    animate: u ? 'closed' : p,
    transition: {type: 'tween', duration: 0.15},
    onClick: w => {
      const k = w.target;
      d &&
        (k.closest('button') || k.closest('a')) &&
        (g('closed'), m('closed'));
    },
    className: P(
      e,
      n === 'left'
        ? 'dashboard-grid-sidenav-left'
        : 'dashboard-grid-sidenav-right',
      'will-change-[width]',
      i,
      v,
      x && `${o} bottom-0 top-0 z-20 shadow-2xl`,
      x && n === 'left' && 'left-0',
      x && n === 'right' && 'right-0',
    ),
    children: h.cloneElement(t, {
      className: P(
        t.props.className,
        'w-full h-full',
        p === 'compact' && 'compact-scrollbar',
      ),
      isCompactMode: p === 'compact',
    }),
  });
}
function ts(e) {
  switch (e) {
    case 'compact':
      return 'w-80';
    case 'sm':
      return 'w-224';
    case 'md':
      return 'w-240';
    case 'lg':
      return 'w-288';
    default:
      return e || '';
  }
}
const ns = H(
  a.jsx('path', {
    d: 'M3 18h13v-2H3v2zm0-5h10v-2H3v2zm0-7v2h13V6H3zm18 9.59L17.42 12 21 8.41 19.59 7l-5 5 5 5L21 15.59z',
  }),
  'MenuOpenOutlined',
);
function xa({children: e, className: n, hideToggleButton: t, ...s}) {
  const {
      isMobileMode: r,
      leftSidenavStatus: o,
      setLeftSidenavStatus: l,
      name: i,
      leftSidenavCanBeCompact: u,
    } = h.useContext(it),
    d = u && !r,
    c = !t && (r || u),
    g = () => {
      l(o === 'open' ? 'closed' : 'open');
    },
    f = () => {
      const m = o === 'compact' ? 'open' : 'compact';
      Pt(`${i}.sidenav.compact`, m === 'compact'), l(m);
    };
  return a.jsx(un, {
    className: P('dashboard-grid-navbar', n),
    border: 'border-b',
    size: 'sm',
    color: 'primary',
    darkModeColor: 'bg-alt',
    toggleButton: c
      ? a.jsx(q, {
          size: 'md',
          onClick: () => {
            d ? f() : g();
          },
          children: a.jsx(ns, {}),
        })
      : void 0,
    ...s,
    children: e,
  });
}
var B = (e => (
    (e.Select = 'select'),
    (e.DateRangePicker = 'dateRangePicker'),
    (e.SelectModel = 'selectModel'),
    (e.Input = 'input'),
    (e.BooleanToggle = 'booleanToggle'),
    (e.ChipField = 'chipField'),
    (e.Custom = 'custom'),
    e
  ))(B || {}),
  xe = (e => (
    (e.eq = '='),
    (e.ne = '!='),
    (e.gt = '>'),
    (e.gte = '>='),
    (e.lt = '<'),
    (e.lte = '<='),
    (e.has = 'has'),
    (e.hasAll = 'hasAll'),
    (e.doesntHave = 'doesntHave'),
    (e.between = 'between'),
    e
  ))(xe || {});
function Ut(e) {
  return e.set({hour: 0, minute: 0, second: 0, millisecond: 0});
}
function K(e) {
  return e.set({
    hour: 24 - 1,
    minute: 60 - 1,
    second: 60 - 1,
    millisecond: 1e3 - 1,
  });
}
function ss() {
  var t, s, r;
  const e = (t = Xe()) == null ? void 0 : t.settings.dates.default_timezone,
    n =
      ((r = (s = Xe()) == null ? void 0 : s.user) == null
        ? void 0
        : r.timezone) ||
      e ||
      'auto';
  return !n || n === 'auto' ? dn() : n;
}
const A = Ut(Et(ss()));
var Dt, St;
const Be =
    ((St = (Dt = Xe()) == null ? void 0 : Dt.i18n) == null
      ? void 0
      : St.language) || 'en',
  ct = [
    {
      key: 0,
      label: D('Today'),
      getRangeValue: () => ({preset: 0, start: A, end: K(A)}),
    },
    {
      key: 1,
      label: D('Yesterday'),
      getRangeValue: () => ({
        preset: 1,
        start: A.subtract({days: 1}),
        end: K(A).subtract({days: 1}),
      }),
    },
    {
      key: 2,
      label: D('This week'),
      getRangeValue: () => ({preset: 2, start: Ie(A, Be), end: fn(K(A), Be)}),
    },
    {
      key: 3,
      label: D('Last week'),
      getRangeValue: () => {
        const e = Ie(A, Be).subtract({days: 7});
        return {preset: 3, start: e, end: e.add({days: 6})};
      },
    },
    {
      key: 4,
      label: D('Last 7 days'),
      getRangeValue: () => ({
        preset: 4,
        start: A.subtract({days: 7}),
        end: K(A),
      }),
    },
    {
      key: 5,
      label: D('Last 14 days'),
      getRangeValue: () => ({
        preset: 5,
        start: A.subtract({days: 14}),
        end: K(A),
      }),
    },
    {
      key: 6,
      label: D('Last 30 days'),
      getRangeValue: () => ({
        preset: 6,
        start: A.subtract({days: 30}),
        end: K(A),
      }),
    },
    {
      key: 7,
      label: D('Last 3 months'),
      getRangeValue: () => ({
        preset: 7,
        start: A.subtract({months: 3}),
        end: K(A),
      }),
    },
    {
      key: 8,
      label: D('Last 12 months'),
      getRangeValue: () => ({
        preset: 8,
        start: A.subtract({months: 12}),
        end: K(A),
      }),
    },
    {
      key: 9,
      label: D('This year'),
      getRangeValue: () => ({preset: 9, start: pt(A), end: vt(K(A))}),
    },
    {
      key: 10,
      label: D('Last year'),
      getRangeValue: () => ({
        preset: 10,
        start: pt(A).subtract({years: 1}),
        end: vt(K(A)).subtract({years: 1}),
      }),
    },
  ],
  Kt = H(
    a.jsx('path', {
      d: 'M7 11h2v2H7v-2zm14-5v14c0 1.1-.9 2-2 2H5c-1.11 0-2-.9-2-2l.01-14c0-1.1.88-2 1.99-2h1V2h2v2h8V2h2v2h1c1.1 0 2 .9 2 2zM5 8h14V6H5v2zm14 12V10H5v10h14zm-4-7h2v-2h-2v2zm-4 0h2v-2h-2v2z',
    }),
    'DateRangeOutlined',
  ),
  _t = he.forwardRef((e, n) => {
    const {
      children: t,
      inputProps: s,
      wrapperProps: r,
      className: o,
      autoFocus: l,
      style: i,
      onClick: u,
    } = e;
    return a.jsx('div', {
      ...r,
      onClick: u,
      children: a.jsx('div', {
        ...s,
        role: 'group',
        className: P(
          o,
          'flex items-center focus-within:ring focus-within:ring-primary/focus focus-within:border-primary/60',
        ),
        ref: n,
        style: i,
        children: a.jsx(hn, {autoFocus: l, children: t}),
      }),
    });
  }),
  ut = he.forwardRef(
    ({inputRef: e, wrapperProps: n, children: t, onBlur: s, ...r}, o) => {
      const l = Re(r),
        i = ze(o),
        {fieldProps: u, inputProps: d} = Tt({
          ...r,
          focusRef: i,
          labelElementType: 'span',
        });
      return (
        (l.wrapper = P(l.wrapper, r.disabled && 'pointer-events-none')),
        a.jsx(Nt, {
          wrapperProps: re(n, {
            onBlur: c => {
              i.current.contains(c.relatedTarget) || s == null || s(c);
            },
            onClick: () => {
              const c = mn(i);
              c == null || c.focusFirst();
            },
          }),
          fieldClassNames: l,
          ref: i,
          ...u,
          children: a.jsx(_t, {
            inputProps: d,
            className: P(l.input, 'gap-10'),
            ref: e,
            children: t,
          }),
        })
      );
    },
  );
function rs(e) {
  return e instanceof gn ? 'day' : 'minute';
}
function Ge(e, n, t) {
  return (n != null && e.compare(n) < 0) || (t != null && e.compare(t) > 0);
}
function qt(e, n) {
  const t = et(),
    [s, r] = h.useState(!1),
    o = n.closeDialogOnSelection ?? !0,
    l = n.granularity || rs(e),
    i = n.min ? Z(n.min, t) : void 0,
    u = n.max ? Z(n.max, t) : void 0;
  return {
    timezone: t,
    granularity: l,
    min: i,
    max: u,
    calendarIsOpen: s,
    setCalendarIsOpen: r,
    closeDialogOnSelection: o,
  };
}
function dt() {
  const e = et();
  return h.useMemo(() => Et(e), [e]);
}
function as(e) {
  var se, G;
  const n = dt(),
    [t, s] = h.useState({
      start:
        (!e.value || !e.value.start) &&
        !((se = e.defaultValue) != null && se.start),
      end:
        (!e.value || !e.value.end) && !((G = e.defaultValue) != null && G.end),
    }),
    r = e.onChange,
    [o, l] = J(
      e.value ? Ke(e.value, n) : void 0,
      e.value ? void 0 : Ke(e.defaultValue, n),
      j => {
        s({start: !1, end: !1}), r == null || r(j);
      },
    ),
    {
      min: i,
      max: u,
      granularity: d,
      timezone: c,
      calendarIsOpen: g,
      setCalendarIsOpen: f,
      closeDialogOnSelection: m,
    } = qt(o.start, e),
    p = h.useCallback(() => {
      s({start: !0, end: !0}), l(Ke(null, n)), r == null || r(null), f(!1);
    }, [n, l, r, f]),
    [x, y] = h.useState(null),
    [v, w] = h.useState(!1),
    [k, C] = h.useState(o),
    [N, z] = h.useState(() => xt(o, u)),
    b = h.useCallback(
      j => {
        let E = j.start,
          F = j.end;
        i && (E = Ve(E, i));
        const V = u ? He(u, F) : F;
        E = He(E, V);
        const ae = i ? Ve(i, E) : E;
        return (
          (F = Ve(F, ae)), u && (F = He(F, u)), {start: Z(E, c), end: Z(F, c)}
        );
      },
      [i, u, c],
    ),
    S = h.useCallback(
      j => {
        const E = {...b(j), preset: j.preset};
        l(E), C(E), z(xt(E, u)), s({start: !1, end: !1});
      },
      [l, b, u],
    ),
    R = h.useCallback(
      j => (!t.start && pe(j, k.start)) || (!t.end && pe(j, k.end)),
      [k, t],
    ),
    O = h.useCallback(
      j =>
        (v || (!t.start && !t.end)) &&
        j.compare(k.start) >= 0 &&
        j.compare(k.end) <= 0,
      [k, t, v],
    ),
    I = h.useCallback(j => pe(j, k.start), [k]),
    T = h.useCallback(j => pe(j, k.end), [k]),
    L = h.useCallback(
      (j, E) => ({
        onPointerEnter: () => {
          v && E && C(Ue({start: x, end: j, timezone: c}));
        },
        onClick: () => {
          if (!v) w(!0), y(j), C(Ue({start: j, end: j, timezone: c}));
          else {
            const F = Ue({start: Ut(Z(x, c)), end: K(Z(j, c)), timezone: c});
            w(!1), y(null), S == null || S(F), m && (f == null || f(!1));
          }
        },
      }),
      [x, v, S, f, m, c],
    );
  return {
    selectedValue: o,
    setSelectedValue: S,
    calendarIsOpen: g,
    setCalendarIsOpen: f,
    dayIsActive: R,
    dayIsHighlighted: O,
    dayIsRangeStart: I,
    dayIsRangeEnd: T,
    getCellProps: L,
    calendarDates: N,
    setIsPlaceholder: s,
    isPlaceholder: t,
    clear: p,
    setCalendarDates: z,
    min: i,
    max: u,
    granularity: d,
    timezone: c,
    closeDialogOnSelection: m,
  };
}
function xt(e, n) {
  let t = ve(De(e.start)),
    s = ve(Se(e.end));
  return (
    Rt(t, s) && (s = Se(s.add({months: 1}))),
    n && s.compare(n) > 0 && ((s = t), (t = De(t.subtract({months: 1})))),
    [t, s]
  );
}
function Ue(e) {
  const n = Z(e.start, e.timezone),
    t = Z(e.end, e.timezone);
  return n.compare(t) > 0 ? {start: t, end: n} : {start: n, end: t};
}
function Ke(e, n) {
  return e != null && e.start && e != null && e.end
    ? e
    : !(e != null && e.start) && e != null && e.end
    ? ((e.start = e.end.subtract({months: 1})), e)
    : !(e != null && e.end) && e != null && e.start
    ? ((e.end = e.start.add({months: 1})), e)
    : {start: n, end: n.add({months: 1})};
}
const Wt = H(
  a.jsx('path', {d: 'M16.01 11H4v2h12.01v3L20 12l-3.99-4v3z'}),
  'ArrowRightAltOutlined',
);
function os(e, n, t, s) {
  switch (n) {
    case 'era':
    case 'year':
    case 'month':
    case 'day':
      return e.cycle(n, t, {round: n === 'year'});
  }
  if ('hour' in e)
    switch (n) {
      case 'dayPeriod': {
        const r = e.hour,
          o = r >= 12;
        return e.set({hour: o ? r - 12 : r + 12});
      }
      case 'hour':
      case 'minute':
      case 'second':
        return e.cycle(n, t, {
          round: n !== 'hour',
          hourCycle: s.hour12 ? 12 : 24,
        });
    }
  return e;
}
function ls(e, n, t, s) {
  switch (n) {
    case 'day':
    case 'month':
    case 'year':
      return e.set({[n]: t});
  }
  if ('hour' in e)
    switch (n) {
      case 'dayPeriod': {
        const r = e.hour,
          o = r >= 12;
        return t >= 12 === o ? e : e.set({hour: o ? r - 12 : r + 12});
      }
      case 'hour':
        if (s.hour12) {
          const o = e.hour >= 12;
          !o && t === 12 && (t = 0), o && t < 12 && (t += 12);
        }
      case 'minute':
      case 'second':
        return e.set({[n]: t});
    }
  return e;
}
const bt = {
  year: 5,
  month: 2,
  day: 7,
  hour: 2,
  minute: 15,
  second: 15,
  dayPeriod: 1,
};
function is({
  segment: e,
  domProps: n,
  value: t,
  onChange: s,
  isPlaceholder: r,
  state: {timezone: o, calendarIsOpen: l, setCalendarIsOpen: i},
}) {
  const u = we(),
    d = h.useRef(''),
    {localeCode: c} = Me(),
    g = Oe(),
    f = ce({timeZone: o}),
    m = h.useMemo(() => new pn(c, {maximumFractionDigits: 0}), [c]),
    p = b => {
      s(ls(t, e.type, b, f.resolvedOptions()));
    },
    x = b => {
      s(os(t, e.type, b, f.resolvedOptions()));
    },
    y = () => {
      if (m.isValidPartialNumber(e.text)) {
        const b = e.text.slice(0, -1),
          S = m.parse(b);
        if (b.length === 0 || S === 0) {
          const R = vn(o);
          e.type in R && p(R[e.type]);
        } else p(S);
        d.current = b;
      } else e.type === 'dayPeriod' && x(-1);
    },
    v = b => {
      var S;
      if (!(b.ctrlKey || b.metaKey || b.shiftKey || b.altKey)) {
        switch (b.key) {
          case 'ArrowLeft':
            b.preventDefault(),
              b.stopPropagation(),
              g == null || g.focusPrevious();
            break;
          case 'ArrowRight':
            b.preventDefault(), b.stopPropagation(), g == null || g.focusNext();
            break;
          case 'Enter':
            (S = b.target.closest('form')) == null || S.requestSubmit(), i(!l);
            break;
          case 'Tab':
            break;
          case 'Backspace':
          case 'Delete': {
            b.preventDefault(), b.stopPropagation(), y();
            break;
          }
          case 'ArrowUp':
            b.preventDefault(), (d.current = ''), x(1);
            break;
          case 'ArrowDown':
            b.preventDefault(), (d.current = ''), x(-1);
            break;
          case 'PageUp':
            b.preventDefault(), (d.current = ''), x(bt[e.type] || 1);
            break;
          case 'PageDown':
            b.preventDefault(), (d.current = ''), x(-(bt[e.type] || 1));
            break;
          case 'Home':
            b.preventDefault(), (d.current = ''), p(e.maxValue);
            break;
          case 'End':
            b.preventDefault(), (d.current = ''), p(e.minValue);
            break;
        }
        N(b.key);
      }
    },
    w = ce({hour: 'numeric', hour12: !0}),
    k = h.useMemo(() => {
      const b = new Date();
      return (
        b.setHours(0),
        w.formatToParts(b).find(S => S.type === 'dayPeriod').value
      );
    }, [w]),
    C = h.useMemo(() => {
      const b = new Date();
      return (
        b.setHours(12),
        w.formatToParts(b).find(S => S.type === 'dayPeriod').value
      );
    }, [w]),
    N = b => {
      const S = d.current + b;
      switch (e.type) {
        case 'dayPeriod':
          if (k.toLowerCase().startsWith(b)) p(0);
          else if (C.toLowerCase().startsWith(b)) p(12);
          else break;
          g == null || g.focusNext();
          break;
        case 'day':
        case 'hour':
        case 'minute':
        case 'second':
        case 'month':
        case 'year': {
          if (!m.isValidPartialNumber(S)) return;
          let R = m.parse(S),
            O = R,
            I = e.minValue === 0;
          if (e.type === 'hour' && f.resolvedOptions().hour12) {
            switch (f.resolvedOptions().hourCycle) {
              case 'h11':
                R > 11 && (O = m.parse(b));
                break;
              case 'h12':
                (I = !1), R > 12 && (O = m.parse(b));
                break;
            }
            e.value >= 12 && R > 1 && (R += 12);
          } else R > e.maxValue && (O = m.parse(b));
          if (Number.isNaN(R)) return;
          const T = O !== 0 || I;
          T && p(O),
            +`${R}0` > e.maxValue || S.length >= String(e.maxValue).length
              ? ((d.current = ''), T && (g == null || g.focusNext()))
              : (d.current = S);
          break;
        }
      }
    },
    z = u
      ? {}
      : {
          'aria-label': e.type,
          'aria-valuetext': r ? void 0 : `${e.value}`,
          'aria-valuemin': e.minValue,
          'aria-valuemax': e.maxValue,
          'aria-valuenow': r ? void 0 : e.value,
          tabIndex: 0,
          onKeyDown: v,
        };
  return a.jsx('div', {
    ...re(n, {
      ...z,
      onFocus: b => {
        (d.current = ''), b.target.scrollIntoView({block: 'nearest'});
      },
      onClick: b => {
        b.preventDefault(), b.stopPropagation();
      },
    }),
    className:
      'box-content cursor-default select-none whitespace-nowrap rounded p-2 text-center tabular-nums caret-transparent outline-none focus:bg-primary focus:text-on-primary',
    children: e.text.padStart(e.minLength, '0'),
  });
}
function cs({segment: e, domProps: n}) {
  const t = Oe();
  return a.jsx('div', {
    ...n,
    onPointerDown: s => {
      s.pointerType === 'mouse' &&
        (s.preventDefault(),
        (t != null && t.focusNext({from: s.target})) ||
          t == null ||
          t.focusPrevious({from: s.target}));
    },
    'aria-hidden': !0,
    className: 'min-w-4 cursor-default select-none',
    children: e.text,
  });
}
function us(e, n, t) {
  switch (n) {
    case 'year':
      return {
        value: e.year,
        placeholder: 'yyyy',
        minValue: 1,
        maxValue: e.calendar.getYearsInEra(e),
      };
    case 'month':
      return {
        value: e.month,
        placeholder: 'mm',
        minValue: bn(e),
        maxValue: e.calendar.getMonthsInYear(e),
      };
    case 'day':
      return {
        value: e.day,
        minValue: xn(e),
        maxValue: e.calendar.getDaysInMonth(e),
        placeholder: 'dd',
      };
  }
  if ('hour' in e)
    switch (n) {
      case 'dayPeriod':
        return {
          value: e.hour >= 12 ? 12 : 0,
          minValue: 0,
          maxValue: 12,
          placeholder: '--',
        };
      case 'hour':
        if (t.hour12) {
          const s = e.hour >= 12;
          return {
            value: e.hour,
            minValue: s ? 12 : 0,
            maxValue: s ? 23 : 11,
            placeholder: '--',
          };
        }
        return {value: e.hour, minValue: 0, maxValue: 23, placeholder: '--'};
      case 'minute':
        return {value: e.minute, minValue: 0, maxValue: 59, placeholder: '--'};
    }
  return {};
}
function be({
  segmentProps: e,
  state: n,
  value: t,
  onChange: s,
  isPlaceholder: r,
}) {
  const {granularity: o} = n,
    l = h.useMemo(() => {
      const c = {year: 'numeric', month: 'numeric', day: 'numeric'};
      return (
        o === 'minute' && ((c.hour = 'numeric'), (c.minute = 'numeric')), c
      );
    }, [o]),
    i = ce(l),
    u = h.useMemo(() => t.toDate(), [t]),
    d = h.useMemo(
      () =>
        i.formatToParts(u).map(c => {
          const g = us(t, c.type, i.resolvedOptions()),
            f = r && c.type !== 'literal' ? g.placeholder : c.value;
          return {
            type: c.type,
            text: c.value === ', ' ? ' ' : f,
            ...g,
            minLength: c.type !== 'literal' ? String(g.maxValue).length : 1,
          };
        }),
      [u, i, r, t],
    );
  return a.jsx('div', {
    className: 'flex items-center',
    children: d.map((c, g) =>
      c.type === 'literal'
        ? a.jsx(cs, {domProps: e, segment: c}, g)
        : a.jsx(
            is,
            {
              isPlaceholder: r,
              domProps: e,
              state: n,
              value: t,
              onChange: s,
              segment: c,
            },
            g,
          ),
    ),
  });
}
const Yt = H(
    a.jsx('path', {
      d: 'M15.41 16.59 10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z',
    }),
    'KeyboardArrowLeftOutlined',
  ),
  Xt = H(
    a.jsx('path', {
      d: 'M8.59 16.59 13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z',
    }),
    'KeyboardArrowRightOutlined',
  );
function ds({
  date: e,
  currentMonth: n,
  state: {
    dayIsActive: t,
    dayIsHighlighted: s,
    dayIsRangeStart: r,
    dayIsRangeEnd: o,
    getCellProps: l,
    timezone: i,
    min: u,
    max: d,
  },
}) {
  const {localeCode: c} = Me(),
    g = yn(e, c),
    f = t(e),
    m = s(e),
    p = r(e),
    x = o(e),
    y = wn(e, i),
    v = Rt(e, n),
    w = Ge(e, u, d);
  return a.jsxs('div', {
    role: 'button',
    'aria-disabled': w,
    className: P(
      'w-40 h-40 text-sm relative isolate flex-shrink-0',
      w && 'text-disabled pointer-events-none',
      !v && 'invisible pointer-events-none',
    ),
    ...l(e, v),
    children: [
      a.jsx('span', {
        className: P(
          'absolute inset-0 flex items-center justify-center rounded-full w-full h-full select-none z-10 cursor-pointer',
          !f && !y && 'hover:bg-hover',
          f && 'bg-primary text-on-primary font-semibold',
          y && !f && 'bg-chip',
        ),
        children: e.day,
      }),
      m &&
        v &&
        a.jsx('span', {
          className: P(
            'absolute w-full h-full inset-0 bg-primary/focus',
            (p || g === 0 || e.day === 1) && 'rounded-l-full',
            (x || g === 6 || e.day === n.calendar.getDaysInMonth(n)) &&
              'rounded-r-full',
          ),
        }),
    ],
  });
}
function fs({startDate: e, state: n, isFirst: t, isLast: s}) {
  const {localeCode: r} = Me(),
    o = jn(e, r),
    l = Ie(e, r);
  return a.jsxs('div', {
    className: 'w-280 flex-shrink-0',
    children: [
      a.jsx(hs, {isFirst: t, isLast: s, state: n, currentMonth: e}),
      a.jsxs('div', {
        className: 'block',
        role: 'grid',
        children: [
          a.jsx(ms, {state: n, startDate: e}),
          [...new Array(o).keys()].map(i =>
            a.jsx(
              ue.div,
              {
                className: 'flex mb-6',
                children: [...new Array(7).keys()].map(u =>
                  a.jsx(
                    ds,
                    {
                      date: l.add({weeks: i, days: u}),
                      currentMonth: e,
                      state: n,
                    },
                    u,
                  ),
                ),
              },
              i,
            ),
          ),
        ],
      }),
    ],
  });
}
function hs({
  currentMonth: e,
  isFirst: n,
  isLast: t,
  state: {calendarDates: s, setCalendarDates: r, timezone: o, min: l, max: i},
}) {
  const u = f => {
      const m = s.length;
      let p;
      f === 'forward'
        ? (p = s.map(x => Se(x.add({months: m}))))
        : (p = s.map(x => Se(x.subtract({months: m})))),
        r(p);
    },
    d = ce({
      month: 'long',
      year: 'numeric',
      era: e.calendar.identifier !== 'gregory' ? 'long' : void 0,
      calendar: e.calendar.identifier,
    }),
    c = Ge(e.subtract({days: 1}), l, i),
    g = Ge(De(e.add({months: 1})), l, i);
  return a.jsxs('div', {
    className: 'flex items-center justify-between gap-10',
    children: [
      a.jsx(q, {
        size: 'md',
        className: P('text-muted', !n && 'invisible'),
        disabled: !n || c,
        'aria-hidden': !n,
        onClick: () => {
          u('backward');
        },
        children: a.jsx(Yt, {}),
      }),
      a.jsx('div', {
        className: 'text-sm font-semibold select-none',
        children: d.format(e.toDate(o)),
      }),
      a.jsx(q, {
        size: 'md',
        className: P('text-muted', !t && 'invisible'),
        disabled: !t || g,
        'aria-hidden': !t,
        onClick: () => {
          u('forward');
        },
        children: a.jsx(Xt, {}),
      }),
    ],
  });
}
function ms({state: {timezone: e}, startDate: n}) {
  const {localeCode: t} = Me(),
    s = ce({weekday: 'short'}),
    r = Ie(n, t);
  return a.jsx('div', {
    className: 'flex',
    children: [...new Array(7).keys()].map(o => {
      const i = r.add({days: o}).toDate(e),
        u = s.format(i);
      return a.jsx(
        'div',
        {
          className: 'w-40 h-40 text-sm font-semibold relative flex-shrink-0',
          children: a.jsx('div', {
            className:
              'absolute flex items-center justify-center w-full h-full select-none',
            children: u,
          }),
        },
        o,
      );
    }),
  });
}
function Gt({state: e, visibleMonths: n = 1}) {
  return (
    we() && (n = 1),
    a.jsx(h.Fragment, {
      children: [...new Array(n).keys()].map(s => {
        const r = ve(De(e.calendarDates[s])),
          o = s === 0,
          l = s === n - 1;
        return a.jsx(fs, {state: e, startDate: r, isFirst: o, isLast: l}, s);
      }),
    })
  );
}
const Qt = h.memo(({start: e, end: n, options: t, preset: s}) => {
  const {dates: r} = zt(),
    o = et(),
    l = ce(t || kn[s || (r == null ? void 0 : r.format)]);
  if (!e || !n) return null;
  let i;
  try {
    i = l.formatRange(yt(e, o), yt(n, o));
  } catch {
    i = '';
  }
  return a.jsx(h.Fragment, {children: i});
}, Mt);
function yt(e, n) {
  return typeof e == 'string'
    ? Cn(e, n).toDate()
    : 'toDate' in e
    ? e.toDate(n)
    : e;
}
function gs({onPresetSelected: e, selectedValue: n}) {
  return a.jsx(In, {
    className: 'min-w-192',
    padding: 'py-14',
    dataTestId: 'date-range-preset-list',
    children: ct.map(t =>
      a.jsx(
        Dn,
        {
          borderRadius: 'rounded-none',
          capitalizeFirst: !0,
          isSelected: (n == null ? void 0 : n.preset) === t.key,
          onSelected: () => {
            const s = t.getRangeValue();
            e(s);
          },
          children: a.jsx($, {...t.label}),
        },
        t.key,
      ),
    ),
  });
}
function ps(e) {
  return Je('(max-width: 1024px)', e);
}
function vs({state: e, showInlineDatePickerField: n = !1}) {
  const t = ps(),
    {close: s} = tt(),
    r = h.useRef(e),
    o = e.isPlaceholder.start || e.isPlaceholder.end,
    l = a.jsxs(nt, {
      dividerTop: !0,
      startAction:
        !o && !t
          ? a.jsx('div', {
              className: 'text-xs',
              children: a.jsx(Qt, {
                start: e.selectedValue.start.toDate(),
                end: e.selectedValue.end.toDate(),
                options: {dateStyle: 'medium'},
              }),
            })
          : void 0,
      children: [
        a.jsx(ee, {
          variant: 'text',
          size: 'xs',
          onClick: () => {
            e.setSelectedValue(r.current.selectedValue),
              e.setIsPlaceholder(r.current.isPlaceholder),
              s();
          },
          children: a.jsx($, {message: 'Cancel'}),
        }),
        a.jsx(ee, {
          variant: 'flat',
          color: 'primary',
          size: 'xs',
          onClick: () => {
            s(e.selectedValue);
          },
          children: a.jsx($, {message: 'Select'}),
        }),
      ],
    });
  return a.jsxs($e, {
    size: 'auto',
    children: [
      a.jsxs(st, {
        className: 'flex',
        padding: 'p-0',
        children: [
          !t &&
            a.jsx(gs, {
              selectedValue: e.selectedValue,
              onPresetSelected: i => {
                e.setSelectedValue(i), e.closeDialogOnSelection && s(i);
              },
            }),
          a.jsx(ye, {
            initial: !1,
            children: a.jsx(xs, {state: e, showInlineDatePickerField: n}),
          }),
        ],
      }),
      !e.closeDialogOnSelection && l,
    ],
  });
}
function xs({state: e, showInlineDatePickerField: n}) {
  return a.jsxs(ue.div, {
    initial: {width: 0, overflow: 'hidden'},
    animate: {width: 'auto'},
    exit: {width: 0, overflow: 'hidden'},
    transition: {type: 'tween', duration: 0.125},
    className: 'border-l px-20 pt-10 pb-20',
    children: [
      n && a.jsx(bs, {state: e}),
      a.jsx('div', {
        className: 'flex items-start gap-36',
        children: a.jsx(Gt, {state: e, visibleMonths: 2}),
      }),
    ],
  });
}
function bs({state: e}) {
  const {selectedValue: n, setSelectedValue: t} = e;
  return a.jsxs(ut, {
    className: 'mb-20 mt-10',
    children: [
      a.jsx(be, {
        state: e,
        value: n.start,
        onChange: s => {
          t({...n, start: s});
        },
      }),
      a.jsx(Wt, {className: 'block flex-shrink-0 text-muted', size: 'md'}),
      a.jsx(be, {
        state: e,
        value: n.end,
        onChange: s => {
          t({...n, end: s});
        },
      }),
    ],
  });
}
function ys(e) {
  var f, m;
  const {granularity: n, closeDialogOnSelection: t, ...s} = e,
    r = as(e),
    o = h.useRef(null),
    i = we() && n !== 'day',
    u = a.jsx(rt, {
      offset: 8,
      placement: 'bottom-start',
      isOpen: r.calendarIsOpen,
      onOpenChange: r.setCalendarIsOpen,
      type: 'popover',
      triggerRef: o,
      returnFocusToTrigger: !1,
      moveFocusToDialog: !1,
      children: a.jsx(vs, {state: r}),
    }),
    d = {
      onClick: p => {
        p.stopPropagation(),
          p.preventDefault(),
          ws(p) ? r.setCalendarIsOpen(!1) : r.setCalendarIsOpen(!0);
      },
    },
    c = r.selectedValue,
    g = r.setSelectedValue;
  return a.jsxs(h.Fragment, {
    children: [
      a.jsxs(ut, {
        ref: o,
        wrapperProps: d,
        endAdornment: i ? void 0 : a.jsx(Kt, {}),
        ...s,
        children: [
          a.jsx(be, {
            isPlaceholder: (f = r.isPlaceholder) == null ? void 0 : f.start,
            state: r,
            segmentProps: d,
            value: c.start,
            onChange: p => {
              g({start: p, end: c.end});
            },
          }),
          a.jsx(Wt, {className: 'block flex-shrink-0 text-muted', size: 'md'}),
          a.jsx(be, {
            isPlaceholder: (m = r.isPlaceholder) == null ? void 0 : m.end,
            state: r,
            segmentProps: d,
            value: c.end,
            onChange: p => {
              g({start: c.start, end: p});
            },
          }),
        ],
      }),
      u,
    ],
  });
}
function ws(e) {
  return ['hour', 'minute', 'dayPeriod'].includes(
    e.currentTarget.ariaLabel || '',
  );
}
function js(e) {
  const {
      field: {onChange: n, onBlur: t, value: s, ref: r},
      fieldState: {invalid: o, error: l},
    } = je({name: e.name}),
    i = {
      onChange: u => {
        n(u ? Zt(u) : null);
      },
      onBlur: t,
      value: ks(s),
      invalid: o,
      errorMessage: l == null ? void 0 : l.message,
      inputRef: r,
    };
  return a.jsx(ys, {...re(i, e)});
}
function ks(e) {
  const {start: n, end: t, preset: s} = e || {},
    r = {preset: s};
  try {
    n && (r.start = typeof n == 'string' ? Pe(n) : n),
      t && (r.end = typeof t == 'string' ? Pe(t) : t);
  } catch {}
  return r;
}
function Zt({start: e, end: n, preset: t} = {}) {
  const s = {preset: t};
  return (
    e && (s.start = e.toAbsoluteString()),
    n && (s.end = n.toAbsoluteString()),
    s
  );
}
function Jt(e) {
  var n;
  return {
    ...e,
    defaultOperator: xe.between,
    control: {
      type: B.DateRangePicker,
      defaultValue:
        ((n = e.control) == null ? void 0 : n.defaultValue) ||
        Zt(ct[3].getRangeValue()),
    },
  };
}
function Cs(e) {
  return Jt({key: 'created_at', label: D('Date created'), ...e});
}
function Is(e) {
  return Jt({key: 'updated_at', label: D('Last updated'), ...e});
}
const Le = h.forwardRef(
  (
    {
      className: e,
      circle: n,
      size: t = 'md',
      src: s,
      link: r,
      label: o,
      fallback: l = 'generic',
      lazy: i = !0,
      ...u
    },
    d,
  ) => {
    let c = s
      ? a.jsx('img', {
          ref: d,
          src: s,
          alt: o,
          loading: i ? 'lazy' : void 0,
          className: 'block h-full w-full object-cover',
        })
      : a.jsx('div', {
          className: 'h-full w-full bg-alt dark:bg-chip',
          children: a.jsx(Pn, {
            viewBox: '0 0 48 48',
            className: 'h-full w-full text-muted',
          }),
        });
    o && (c = a.jsx(Ot, {label: o, children: c}));
    const g = {
      ...u,
      className: P(
        e,
        'relative block overflow-hidden select-none flex-shrink-0',
        Ds(t),
        n ? 'rounded-full' : 'rounded',
      ),
    };
    return r
      ? a.jsx(Sn, {...g, to: r, children: c})
      : a.jsx('div', {...g, children: c});
  },
);
function Ds(e) {
  switch (e) {
    case 'xs':
      return 'w-18 h-18';
    case 'sm':
      return 'w-24 h-24';
    case 'md':
      return 'w-32 h-32';
    case 'lg':
      return 'w-40 h-40';
    case 'xl':
      return 'w-60 h-60';
    default:
      return e;
  }
}
const _e = 'filters';
function Ss(e) {
  if (!e) return [];
  let n = [];
  try {
    (n = JSON.parse(atob(decodeURIComponent(e)))),
      n.map(t => (t.valueKey != null && (t.value = t.valueKey), t));
  } catch {}
  return n;
}
function Ps(e, n) {
  return !e ||
    ((e = n ? e.filter(t => t.value !== '').map(t => Es(t, n)) : e),
    (e = e.filter(t => !t.isInactive)),
    !e.length)
    ? ''
    : encodeURIComponent(btoa(JSON.stringify(e)));
}
function Es(e, n) {
  var s;
  const t = n.find(r => r.key === e.key);
  if ((t == null ? void 0 : t.control.type) === 'select') {
    const r = (t.control.options || []).find(o => o.key === e.value);
    if (r) return {...e, value: r.value, valueKey: r.key};
  }
  return (
    (s = t == null ? void 0 : t.extraFilters) != null &&
      s.length &&
      (e.extraFilters = t.extraFilters),
    e
  );
}
function Ts(e, n) {
  const [t] = En(),
    s = Tn(),
    r = t.get(_e),
    o = h.useMemo(() => {
      if (!e) return [];
      const c = Ss(r);
      return (
        (n || []).forEach(g => {
          if (!c.find(f => f.key === g)) {
            const f = e.find(m => m.key === g);
            c.push({
              key: g,
              value: f.control.defaultValue,
              operator: f.defaultOperator,
              isInactive: !0,
            });
          }
        }),
        c.sort(
          (g, f) =>
            e.findIndex(m => m.key === g.key) -
            e.findIndex(m => m.key === f.key),
        ),
        c
      );
    }, [r, n, e]),
    l = h.useCallback(
      c => {
        const g = [...o];
        return (
          c.forEach(f => {
            const m = typeof f == 'object' ? f.key : f,
              p = g.findIndex(x => x.key === m);
            p > -1 && g.splice(p, 1);
          }),
          g
        );
      },
      [o],
    ),
    i = h.useCallback(
      c => {
        const g = Ps(c, e);
        g ? t.set(_e, g) : t.delete(_e), s({search: `?${t}`}, {replace: !0});
      },
      [e, s, t],
    ),
    u = h.useCallback(
      c => {
        const f = [...l(c), ...c];
        i(f);
      },
      [l, i],
    ),
    d = h.useCallback(c => i(l([c])), [l, i]);
  return {
    add: u,
    remove: d,
    replaceAll: i,
    decodedFilters: o,
    encodedFilters: r,
  };
}
function Ee(e) {
  return Nn() ? e.metaKey : e.ctrlKey;
}
function Ns(e) {
  const {cellCount: n, rowCount: t} = e;
  return {
    onKeyDown: r => {
      switch (r.key) {
        case 'ArrowLeft':
          Y(r, {cell: {op: 'decrement'}}, e);
          break;
        case 'ArrowRight':
          Y(r, {cell: {op: 'increment'}}, e);
          break;
        case 'ArrowUp':
          Y(r, {row: {op: 'decrement'}}, e);
          break;
        case 'ArrowDown':
          Y(r, {row: {op: 'increment'}}, e);
          break;
        case 'PageUp':
          Y(r, {row: {op: 'decrement', count: 5}}, e);
          break;
        case 'PageDown':
          Y(r, {row: {op: 'increment', count: 5}}, e);
          break;
        case 'Tab':
          Rs(r);
          break;
        case 'Home':
          Ee(r)
            ? Y(
                r,
                {
                  row: {op: 'decrement', count: t},
                  cell: {op: 'decrement', count: n},
                },
                e,
              )
            : Y(r, {cell: {op: 'decrement', count: n}}, e);
          break;
        case 'End':
          Ee(r)
            ? Y(
                r,
                {
                  row: {op: 'increment', count: t},
                  cell: {op: 'increment', count: n},
                },
                e,
              )
            : Y(r, {cell: {op: 'increment', count: n}}, e);
          break;
      }
    },
  };
}
function Y(e, n, {cellCount: t, rowCount: s}) {
  var p, x, y, v, w, k, C;
  if (((p = document.activeElement) == null ? void 0 : p.tagName) === 'input')
    return;
  e.preventDefault();
  const r = e.currentTarget,
    o = e.target.closest('[aria-colindex]');
  if (!o || !r) return;
  const l = o.closest('[aria-rowindex]');
  if (!l) return;
  let i = parseInt(l.getAttribute('aria-rowindex')),
    u = parseInt(o.getAttribute('aria-colindex'));
  if (Number.isNaN(i) || Number.isNaN(u)) return;
  const d = ((x = n.row) == null ? void 0 : x.count) ?? 1;
  ((y = n.row) == null ? void 0 : y.op) === 'increment'
    ? (i = Math.min(s, i + d))
    : ((v = n.row) == null ? void 0 : v.op) === 'decrement' &&
      (i = Math.max(1, i - d));
  const c = ((w = n.cell) == null ? void 0 : w.count) ?? 1;
  ((k = n.cell) == null ? void 0 : k.op) === 'increment'
    ? (u = Math.min(t, u + c))
    : ((C = n.cell) == null ? void 0 : C.op) === 'decrement' &&
      (u = Math.max(1, u - c));
  const g = r.querySelector(`[aria-rowindex="${i}"] [aria-colindex="${u}"]`);
  if (!g) return;
  const m = $t(g).nextNode() || g;
  o.setAttribute('tabindex', '-1'), m.setAttribute('tabindex', '0'), m.focus();
}
function Rs(e) {
  const n = e.currentTarget;
  if (e.shiftKey) n.focus();
  else {
    const t = $t(n, {tabbable: !0});
    let s, r;
    do (r = t.lastChild()), r && (s = r);
    while (r);
    s && !s.contains(document.activeElement) && Rn(s);
  }
}
const X = h.createContext(null);
function en({index: e, isHeader: n}) {
  const {
      columns: t,
      cellHeight: s = 'h-46',
      headerCellHeight: r = 'h-46',
    } = h.useContext(X),
    o = t[e],
    l = o == null ? void 0 : o.padding;
  let i = 'justify-start';
  return (
    (o == null ? void 0 : o.align) === 'center'
      ? (i = 'justify-center')
      : (o == null ? void 0 : o.align) === 'end' && (i = 'justify-end'),
    P(
      'flex items-center overflow-hidden whitespace-nowrap overflow-ellipsis outline-none focus-visible:outline focus-visible:outline-offset-2',
      n ? r : s,
      (o == null ? void 0 : o.width) ?? 'flex-1',
      o == null ? void 0 : o.maxWidth,
      o == null ? void 0 : o.minWidth,
      i,
      l,
      o == null ? void 0 : o.className,
    )
  );
}
function zs({rowIndex: e, rowIsHovered: n, index: t, item: s, id: r}) {
  const {columns: o} = h.useContext(X),
    l = o[t],
    i = h.useMemo(
      () => ({index: e, isHovered: n, isPlaceholder: s.isPlaceholder}),
      [e, n, s.isPlaceholder],
    ),
    u = en({index: t, isHeader: !1});
  return a.jsx('div', {
    tabIndex: -1,
    role: 'gridcell',
    'aria-colindex': t + 1,
    id: r,
    className: u,
    children: a.jsx('div', {
      className: 'overflow-x-hidden overflow-ellipsis min-w-0 w-full',
      children: l.body(s, i),
    }),
  });
}
function Ms({
  onMoveStart: e,
  onMove: n,
  onMoveEnd: t,
  minimumMovement: s = 0,
  preventDefault: r,
  stopPropagation: o = !0,
  onPress: l,
  onLongPress: i,
  ...u
}) {
  const c = h.useRef({
      lastPosition: {x: 0, y: 0},
      started: !1,
      longPressTriggered: !1,
    }).current,
    {addGlobalListener: g, removeGlobalListener: f} = Ft(),
    m = v => {
      !c.el ||
        (e == null ? void 0 : e(v, c.el)) === !1 ||
        ((c.originalTouchAction = c.el.style.touchAction),
        (c.el.style.touchAction = 'none'),
        (c.originalUserSelect = document.documentElement.style.userSelect),
        (document.documentElement.style.userSelect = 'none'),
        (c.started = !0));
    },
    p = v => {
      var w;
      if (v.button === 0 && c.id == null) {
        if (
          ((c.started = !1),
          ((w = u.onPointerDown) == null ? void 0 : w.call(u, v)) === !1)
        )
          return;
        o && v.stopPropagation(),
          r && v.preventDefault(),
          (c.id = v.pointerId),
          (c.el = v.currentTarget),
          (c.lastPosition = {x: v.clientX, y: v.clientY}),
          i &&
            (c.longPressTimer = setTimeout(() => {
              i(v, c.el), (c.longPressTriggered = !0);
            }, 400)),
          (e || n) && g(window, 'pointermove', x, !1),
          g(window, 'pointerup', y, !1),
          g(window, 'pointercancel', y, !1);
      }
    },
    x = v => {
      if (v.pointerId === c.id) {
        const w = v.clientX - c.lastPosition.x,
          k = v.clientY - c.lastPosition.y;
        (Math.abs(w) >= s || Math.abs(k) >= s) && !c.started && m(v),
          c.started &&
            (n == null || n(v, w, k),
            (c.lastPosition = {x: v.clientX, y: v.clientY}));
      }
    },
    y = v => {
      var w;
      if (v.pointerId === c.id) {
        c.longPressTimer && clearTimeout(c.longPressTimer);
        const k = c.longPressTriggered;
        (c.longPressTriggered = !1),
          c.started && (t == null || t(v)),
          c.el &&
            (v.type !== 'pointercancel' &&
              ((w = u.onPointerUp) == null || w.call(u, v, c.el),
              v.target &&
                c.el.contains(v.target) &&
                (k ? i == null || i(v, c.el) : l == null || l(v, c.el))),
            (document.documentElement.style.userSelect =
              c.originalUserSelect || ''),
            (c.el.style.touchAction = c.originalTouchAction || '')),
          (c.id = void 0),
          (c.started = !1),
          f(window, 'pointermove', x, !1),
          f(window, 'pointerup', y, !1),
          f(window, 'pointercancel', y, !1);
      }
    };
  return {domProps: {onPointerDown: oe(p)}};
}
function Os(e) {
  return e.shiftKey || Ee(e);
}
function $s({index: e, isSelected: n, isHeader: t}) {
  const s = zn(),
    r = we(),
    {
      hideBorder: o,
      enableSelection: l,
      collapseOnMobile: i,
      onAction: u,
    } = h.useContext(X);
  return P(
    'flex gap-x-16 break-inside-avoid outline-none border border-transparent',
    u && 'cursor-pointer',
    r && i && o ? 'mb-8 pl-8 pr-0 rounded' : 'px-16',
    !o && 'border-b-divider',
    !o && e === 0 && 'border-t-divider',
    n &&
      !s &&
      'bg-primary/selected hover:bg-primary/focus focus-visible:bg-primary/focus',
    n && s && 'bg-selected hover:bg-focus focus-visible:bg-focus',
    !n && !t && (l || u) && 'focus-visible:bg-focus hover:bg-hover',
  );
}
const Fs = ['button', 'a', 'input', 'select', 'textarea'];
function As({item: e, index: n, renderAs: t, className: s, style: r}) {
  const {
      selectedRows: o,
      columns: l,
      toggleRow: i,
      selectRow: u,
      onAction: d,
      selectRowOnContextMenu: c,
      enableSelection: g,
      selectionStyle: f,
      hideHeaderRow: m,
    } = h.useContext(X),
    p = h.useRef(!1),
    x = o.includes(e.id),
    [y, v] = h.useState(!1),
    w = I => I.target.closest(Fs.join(',')),
    k = I => {
      f === 'highlight' &&
        d &&
        !p.current &&
        !w(I) &&
        (I.preventDefault(), I.stopPropagation(), d(e, n));
    },
    C = !!o.length,
    N = I => {
      w(I) ||
        (f === 'checkbox'
          ? g && (C || !d)
            ? i(e)
            : d && d(e, n)
          : f === 'highlight' &&
            (p.current
              ? g && C
                ? i(e)
                : d == null || d(e, n)
              : g && u(e, Os(I))));
    },
    {domProps: z} = Ms({
      onPointerDown: I => {
        p.current = I.pointerType === 'touch';
      },
      onPress: N,
      onLongPress: g
        ? () => {
            p.current && i(e);
          }
        : void 0,
    }),
    b = I => {
      g && I.key === ' '
        ? (I.preventDefault(),
          I.stopPropagation(),
          f === 'checkbox' ? i(e) : u(e))
        : I.key === 'Enter' &&
          !o.length &&
          d &&
          (I.preventDefault(), I.stopPropagation(), d(e, n));
    },
    S = I => {
      c && g && (o.includes(e.id) || u(e)),
        p.current && (I.preventDefault(), I.stopPropagation());
    },
    R = $s({index: n, isSelected: x}),
    O = t || 'div';
  return a.jsx(O, {
    role: 'row',
    'aria-rowindex': n + 1 + (m ? 0 : 1),
    'aria-selected': x,
    tabIndex: -1,
    className: P(s, R),
    item: O === 'div' ? void 0 : e,
    onDoubleClick: oe(k),
    onKeyDown: oe(b),
    onContextMenu: oe(S),
    onPointerEnter: oe(() => v(!0)),
    onPointerLeave: oe(() => v(!1)),
    style: r,
    ...z,
    children: l.map((I, T) =>
      a.jsx(
        zs,
        {rowIndex: n, rowIsHovered: y, index: T, item: e},
        `${e.id}-${I.key}`,
      ),
    ),
  });
}
const Ls = {
  key: 'checkbox',
  header: () => a.jsx(Hs, {}),
  align: 'center',
  width: 'w-24 flex-shrink-0',
  body: (e, n) =>
    n.isPlaceholder
      ? a.jsx(ie, {size: 'w-24 h-24', variant: 'rect'})
      : a.jsx(Vs, {item: e}),
};
function Vs({item: e}) {
  const {selectedRows: n, toggleRow: t} = h.useContext(X);
  return a.jsx(At, {checked: n.includes(e.id), onChange: () => t(e)});
}
function Hs() {
  const {trans: e} = W(),
    {data: n, selectedRows: t, onSelectionChange: s} = h.useContext(X),
    r = !!n.length && n.length === t.length,
    o = !r && !!t.length;
  return a.jsx(At, {
    'aria-label': e({message: 'Select all'}),
    isIndeterminate: o,
    checked: r,
    onChange: () => {
      s(r ? [] : n.map(l => l.id));
    },
  });
}
const Bs = H(
  a.jsx('path', {
    d: 'm20 12-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z',
  }),
  'ArrowDownwardOutlined',
);
function Us({index: e}) {
  const {
      columns: n,
      sortDescriptor: t,
      onSortChange: s,
      enableSorting: r,
    } = h.useContext(X),
    o = n[e],
    l = en({index: e, isHeader: !0}),
    [i, u] = h.useState(!1),
    d = o.sortingKey || o.key,
    c = o.allowsSorting && r,
    {orderBy: g, orderDir: f} = t || {},
    m = c && g === d;
  let p;
  m && f === 'asc'
    ? (p = 'ascending')
    : m && f === 'desc'
    ? (p = 'descending')
    : c && (p = 'none');
  const x = () => {
      if (!c) return;
      let w;
      m && f === 'desc'
        ? (w = {orderDir: 'asc', orderBy: d})
        : m && f === 'asc'
        ? (w = {orderBy: void 0, orderDir: void 0})
        : (w = {orderDir: 'desc', orderBy: d}),
        s == null || s(w);
    },
    y = m || i,
    v = {visible: {opacity: 1, y: 0}, hidden: {opacity: 0, y: '-25%'}};
  return a.jsxs('div', {
    role: 'columnheader',
    tabIndex: -1,
    'aria-colindex': e + 1,
    'aria-sort': p,
    className: P(l, 'text-muted font-medium text-xs', c && 'cursor-pointer'),
    onMouseEnter: () => {
      u(!0);
    },
    onMouseLeave: () => {
      u(!1);
    },
    onKeyDown: w => {
      (w.key === ' ' || w.key === 'Enter') && (w.preventDefault(), x());
    },
    onClick: x,
    children: [
      o.hideHeader
        ? a.jsx('div', {className: 'sr-only', children: o.header()})
        : o.header(),
      a.jsx(ye, {
        children:
          c &&
          a.jsx(
            ue.span,
            {
              variants: v,
              animate: y ? 'visible' : 'hidden',
              initial: !1,
              transition: {type: 'tween'},
              className: 'inline-block ml-6 -mt-2',
              'data-testid': 'table-sort-button',
              'aria-hidden': !y,
              children: a.jsx(Bs, {
                size: 'xs',
                className: P(
                  'text-muted',
                  f === 'asc' && g === d && 'rotate-180 transition-transform',
                ),
              }),
            },
            'sort-icon',
          ),
      }),
    ],
  });
}
function Ks() {
  const {columns: e} = h.useContext(X);
  return a.jsx('div', {
    role: 'row',
    'aria-rowindex': 1,
    tabIndex: -1,
    className: 'flex gap-x-16 px-16',
    children: e.map((n, t) => a.jsx(Us, {index: t}, n.key)),
  });
}
function ba({
  className: e,
  columns: n,
  collapseOnMobile: t = !0,
  hideHeaderRow: s = !1,
  hideBorder: r = !1,
  data: o,
  selectedRows: l,
  defaultSelectedRows: i,
  onSelectionChange: u,
  sortDescriptor: d,
  onSortChange: c,
  enableSorting: g = !0,
  onDelete: f,
  enableSelection: m = !0,
  selectionStyle: p = 'checkbox',
  ariaLabelledBy: x,
  selectRowOnContextMenu: y,
  onAction: v,
  renderRowAs: w,
  tableBody: k,
  meta: C,
  tableRef: N,
  closeOnInteractOutside: z = !1,
  cellHeight: b,
  headerCellHeight: S,
  ...R
}) {
  const O = we(),
    I = !!O && t;
  I && ((s = !0), (r = !0));
  const [T, L] = J(l, i || [], u),
    [se, G] = J(d, void 0, c),
    j = h.useCallback(
      M => {
        const U = [...T];
        if (!U.includes(M.id)) U.push(M.id);
        else {
          const de = U.indexOf(M.id);
          U.splice(de, 1);
        }
        L(U);
      },
      [T, L],
    ),
    E = h.useCallback(
      (M, U) => {
        let de = [];
        M &&
          (de = U
            ? [...(T == null ? void 0 : T.filter(me => me !== M.id)), M.id]
            : [M.id]),
          L(de);
      },
      [T, L],
    ),
    F = h.useMemo(() => {
      const M = n.filter(de => {
        const me = de.visibleInMode || 'regular';
        if (me === 'all' || (me === 'compact' && I) || (me === 'regular' && !I))
          return !0;
      });
      return m && p !== 'highlight' && !O && M.unshift(Ls), M;
    }, [O, n, m, p, I]),
    V = {
      isCollapsedMode: I,
      cellHeight: b,
      headerCellHeight: S,
      hideBorder: r,
      hideHeaderRow: s,
      selectedRows: T,
      onSelectionChange: L,
      enableSorting: g,
      enableSelection: m,
      selectionStyle: p,
      data: o,
      columns: F,
      sortDescriptor: se,
      onSortChange: G,
      toggleRow: j,
      selectRow: E,
      onAction: v,
      selectRowOnContextMenu: y,
      meta: C,
      collapseOnMobile: t,
    },
    ae = Ns({cellCount: m ? F.length + 1 : F.length, rowCount: o.length + 1}),
    ht = {renderRowAs: w};
  k ? (k = h.cloneElement(k, ht)) : (k = a.jsx(_s, {...ht}));
  const mt = ze(N);
  return (
    Mn({
      ref: mt,
      onInteractOutside: M => {
        z &&
          m &&
          T != null &&
          T.length &&
          !M.target.closest('[role="dialog"]') &&
          L([]);
      },
    }),
    a.jsx(X.Provider, {
      value: V,
      children: a.jsxs('div', {
        ...re(R, ae, {
          onKeyDown: M => {
            M.key === 'Escape'
              ? (M.preventDefault(),
                M.stopPropagation(),
                T != null && T.length && L([]))
              : M.key === 'Delete'
              ? (M.preventDefault(),
                M.stopPropagation(),
                T != null &&
                  T.length &&
                  (f == null ||
                    f(o.filter(U => (T == null ? void 0 : T.includes(U.id))))))
              : Ee(M) &&
                M.key === 'a' &&
                (M.preventDefault(),
                M.stopPropagation(),
                m && L(o.map(U => U.id)));
          },
        }),
        role: 'grid',
        tabIndex: 0,
        'aria-rowcount': o.length + 1,
        'aria-colcount': F.length + 1,
        ref: mt,
        'aria-multiselectable': m ? !0 : void 0,
        'aria-labelledby': x,
        className: P(
          e,
          'isolate select-none text-sm outline-none focus-visible:ring-2',
        ),
        children: [!s && a.jsx(Ks, {}), k],
      }),
    })
  );
}
function _s({renderRowAs: e}) {
  const {data: n} = h.useContext(X);
  return a.jsx(h.Fragment, {
    children: n.map((t, s) =>
      a.jsx(As, {item: t, index: s, renderAs: e}, t.id),
    ),
  });
}
function qs({filter: e}) {
  const {trans: n} = W();
  return a.jsx(Lt, {
    size: 'sm',
    name: `${e.key}.value`,
    selectionMode: 'single',
    showSearchField: e.control.showSearchField,
    placeholder: e.control.placeholder ? n(e.control.placeholder) : void 0,
    searchPlaceholder: e.control.searchPlaceholder
      ? n(e.control.searchPlaceholder)
      : void 0,
    children: e.control.options.map(t =>
      a.jsx(Fe, {value: t.key, children: a.jsx($, {...t.label})}, t.key),
    ),
  });
}
function Ws({filter: e}) {
  return a.jsx(js, {
    min: e.control.min,
    max: e.control.max,
    size: 'sm',
    name: `${e.key}.value`,
    granularity: 'day',
    closeDialogOnSelection: !0,
  });
}
const Ys = (e, n = 'normalized-models') => {
  const t = [];
  return n && t.push(n), e && t.push(e), t.join('/');
};
function Xs(e, n, t, s) {
  const r = Ys(e, s);
  return Vt({
    queryKey: [r, n],
    queryFn: () => Gs(r, n),
    placeholderData: On,
    ...t,
  });
}
async function Gs(e, n) {
  return Ae.get(e, {params: n}).then(t => t.data);
}
const Qs = (e, n, t = 'normalized-models') => {
  const s = [];
  return t && s.push(t), e && s.push(e), n && s.push(n), s.join('/');
};
function tn(e, n, t, s) {
  const r = Qs(e, n, s);
  return Vt({
    queryKey: [r, t],
    queryFn: () => Zs(r, t),
    enabled: e != null && n != null,
  });
}
async function Zs(e, n) {
  return Ae.get(e, {params: n}).then(t => t.data);
}
function Js({
  modelType: e,
  label: n,
  className: t,
  background: s,
  value: r,
  defaultValue: o = '',
  placeholder: l = D('Select item...'),
  searchPlaceholder: i = D('Find an item...'),
  onChange: u,
  description: d,
  errorMessage: c,
  invalid: g,
  autoFocus: f,
  queryParams: m,
  customEndpoint: p,
  singleEndpoint: x = p,
  multipleEndpoint: y = p,
  disabled: v,
}) {
  var O;
  const w = h.useRef(null),
    [k, C] = h.useState(''),
    [N, z] = J(r, o, u),
    b = Xs(e, {query: k, ...m}, null, y),
    {trans: S} = W(),
    R = Re({size: 'md'});
  return N
    ? a.jsxs('div', {
        className: t,
        children: [
          a.jsx('div', {className: R.label, children: n}),
          a.jsx('div', {
            className: P('rounded border p-8', s, g && 'border-danger'),
            children: a.jsx(ye, {
              initial: !1,
              mode: 'wait',
              children: a.jsx(er, {
                disabled: v,
                endpoint: x,
                modelType: e,
                modelId: N,
                queryParams: m,
                onEditClick: () => {
                  z(''),
                    C(''),
                    requestAnimationFrame(() => {
                      var I, T;
                      (I = w.current) == null || I.focus(),
                        (T = w.current) == null || T.click();
                    });
                },
              }),
            }),
          }),
          d && !c && a.jsx('div', {className: R.description, children: d}),
          c && a.jsx('div', {className: R.error, children: c}),
        ],
      })
    : a.jsx($n, {
        className: t,
        showSearchField: !0,
        invalid: g,
        errorMessage: c,
        description: d,
        color: 'white',
        isAsync: !0,
        background: s,
        placeholder: S(l),
        searchPlaceholder: S(i),
        label: n,
        isLoading: b.isFetching,
        items: (O = b.data) == null ? void 0 : O.results,
        inputValue: k,
        onInputValueChange: C,
        selectionMode: 'single',
        selectedValue: N,
        onSelectionChange: z,
        ref: w,
        autoFocus: f,
        disabled: v,
        children: I =>
          a.jsx(
            Fe,
            {
              value: I.id,
              description: I.description,
              startIcon: a.jsx(Le, {src: I.image}),
              children: I.name,
            },
            I.id,
          ),
      });
}
function er({
  modelType: e,
  modelId: n,
  onEditClick: t,
  endpoint: s,
  disabled: r,
  queryParams: o,
}) {
  const {data: l, isLoading: i} = tn(e, n, o, s);
  return i || !(l != null && l.model)
    ? a.jsx(tr, {}, 'skeleton')
    : a.jsxs(
        ue.div,
        {
          className: P(
            'flex items-center gap-10',
            r && 'pointer-events-none cursor-not-allowed text-disabled',
          ),
          ...at,
          children: [
            l.model.image && a.jsx(Le, {src: l.model.image}),
            a.jsxs('div', {
              children: [
                a.jsx('div', {
                  className: 'text-sm leading-4',
                  children: l.model.name,
                }),
                a.jsx('div', {
                  className: 'text-xs text-muted',
                  children: l.model.description,
                }),
              ],
            }),
            a.jsx(Ot, {
              label: a.jsx($, {message: 'Change item'}),
              children: a.jsx(q, {
                className: 'ml-auto text-muted',
                size: 'sm',
                onClick: t,
                disabled: r,
                children: a.jsx(Zn, {}),
              }),
            }),
          ],
        },
        'preview',
      );
}
function tr() {
  return a.jsxs(ue.div, {
    className: 'flex items-center gap-10',
    ...at,
    children: [
      a.jsx(ie, {variant: 'rect', size: 'w-32 h-32'}),
      a.jsxs('div', {
        className: 'max-h-[36px] flex-auto',
        children: [
          a.jsx(ie, {className: 'text-xs'}),
          a.jsx(ie, {className: 'max-h-8 text-xs'}),
        ],
      }),
      a.jsx(ie, {variant: 'icon', size: 'w-24 h-24'}),
    ],
  });
}
function nr({name: e, ...n}) {
  const {
    field: {onChange: t, value: s = ''},
    fieldState: {invalid: r, error: o},
  } = je({name: e});
  return a.jsx(Js, {
    value: s,
    onChange: t,
    invalid: r,
    errorMessage: o == null ? void 0 : o.message,
    ...n,
  });
}
function sr({filter: e}) {
  return a.jsx(nr, {name: `${e.key}.value`, modelType: e.control.model});
}
const nn = {
  '=': D('is'),
  '!=': D('is not'),
  '>': D('is greater than'),
  '>=': D('is greater than or equal to'),
  '<': D('is less than'),
  '<=': D('is less than or equal to'),
  has: D('Include'),
  doesntHave: D('Do not include'),
  between: D('Is between'),
  hasAll: D('Include all'),
};
function rr({filter: e}) {
  var t;
  const n = e.control;
  return a.jsxs(h.Fragment, {
    children: [
      a.jsx(Lt, {
        selectionMode: 'single',
        name: `${e.key}.operator`,
        className: 'mb-14',
        size: 'sm',
        required: !0,
        children:
          (t = e.operators) == null
            ? void 0
            : t.map(s =>
                a.jsx(Fe, {value: s, children: a.jsx($, {...nn[s]})}, s),
              ),
      }),
      a.jsx(Fn, {
        size: 'sm',
        name: `${e.key}.value`,
        type: e.control.inputType,
        min: 'minValue' in n ? n.minValue : void 0,
        max: 'maxValue' in n ? n.maxValue : void 0,
        minLength: 'minLength' in n ? n.minLength : void 0,
        maxLength: 'maxLength' in n ? n.maxLength : void 0,
        required: !0,
      }),
    ],
  });
}
function ar({
  className: e,
  children: n,
  size: t,
  color: s,
  radius: r,
  selectable: o,
}) {
  return a.jsx('div', {
    className: P(e, 'flex flex-wrap items-center gap-8'),
    children: h.Children.map(n, l => {
      if (h.isValidElement(l))
        return h.cloneElement(l, {size: t, color: s, selectable: o, radius: r});
    }),
  });
}
function Qe(e) {
  return {id: e, name: `${e}`, description: `${e}`};
}
function or(e, n) {
  const t = h.useRef(null),
    s = ze(n),
    {
      displayWith: r = V => V.name,
      validateWith: o,
      children: l,
      suggestions: i,
      isLoading: u,
      inputValue: d,
      onInputValueChange: c,
      onItemSelected: g,
      placeholder: f,
      onOpenChange: m,
      chipSize: p = 'md',
      openMenuOnFocus: x = !0,
      showEmptyMessage: y,
      value: v,
      defaultValue: w,
      onChange: k,
      valueKey: C,
      isAsync: N,
      allowCustomValue: z = !0,
      showDropdownArrow: b,
      onChipClick: S,
      ...R
    } = e,
    O = Re({...e, flexibleHeight: !0}),
    [I, T] = cr(e),
    [L, se] = h.useState(!1),
    G = a.jsx(ot, {
      isIndeterminate: !0,
      size: 'sm',
      'aria-label': 'loading...',
    }),
    j = b ? a.jsx(lt, {}) : null,
    {fieldProps: E, inputProps: F} = Tt({
      ...R,
      focusRef: s,
      endAdornment: u && L ? G : j,
    });
  return a.jsx(Nt, {
    fieldClassNames: O,
    ...E,
    children: a.jsxs(_t, {
      ref: t,
      className: P('flex flex-wrap items-center', O.input),
      onClick: () => {
        var V;
        (V = s.current) == null || V.focus();
      },
      children: [
        a.jsx(lr, {
          displayChipUsing: r,
          onChipClick: S,
          items: I,
          setItems: T,
          chipSize: p,
        }),
        a.jsx(ir, {
          showEmptyMessage: y,
          inputProps: F,
          inputValue: d,
          onInputValueChange: c,
          fieldRef: t,
          inputRef: s,
          chips: I,
          setChips: T,
          validateWith: o,
          isLoading: u,
          suggestions: i,
          placeholder: f,
          openMenuOnFocus: x,
          listboxIsOpen: L,
          setListboxIsOpen: se,
          allowCustomValue: z,
          children: l,
        }),
      ],
    }),
  });
}
function lr({
  items: e,
  setItems: n,
  displayChipUsing: t,
  chipSize: s,
  onChipClick: r,
}) {
  const o = Oe(),
    l = h.useCallback(
      i => {
        const u = e.findIndex(c => c.id === i),
          d = [...e];
        return u > -1 && (d.splice(u, 1), n(d)), d;
      },
      [e, n],
    );
  return a.jsx(ar, {
    className: 'my-8 max-w-full flex-shrink-0 flex-wrap',
    size: s,
    selectable: !0,
    children: e.map(i =>
      a.jsx(
        An,
        {
          errorMessage: i.errorMessage,
          adornment: i.image ? a.jsx(Le, {circle: !0, src: i.image}) : null,
          onClick: () => (r == null ? void 0 : r(i)),
          onRemove: () => {
            l(i.id).length
              ? o == null || o.focusPrevious({tabbable: !0})
              : o == null || o.focusLast();
          },
          children: t(i),
        },
        i.id,
      ),
    ),
  });
}
function ir(e) {
  const {
      inputRef: n,
      fieldRef: t,
      validateWith: s,
      setChips: r,
      chips: o,
      suggestions: l,
      inputProps: i,
      placeholder: u,
      openMenuOnFocus: d,
      listboxIsOpen: c,
      setListboxIsOpen: g,
      allowCustomValue: f,
      isLoading: m,
    } = e,
    p = 'outline-none text-sm mx-8 my-4 h-30 flex-auto',
    x = Oe(),
    y = h.useCallback(
      j => {
        (j = (j || []).filter(E => {
          const F = !E || !E.id || !E.name;
          return (
            !(o.findIndex(ae => ae.id === (E == null ? void 0 : E.id)) > -1) &&
            !F
          );
        })),
          j.length && (s && (j = j.map(E => s(E))), r([...o, ...j]));
      },
      [o, r, s],
    ),
    v = Ln({
      ...e,
      clearInputOnItemSelection: !0,
      isOpen: c,
      onOpenChange: g,
      items: l,
      selectionMode: 'none',
      role: 'listbox',
      virtualFocus: !0,
      onItemSelected: j => {
        T(j);
      },
    }),
    {
      state: {
        activeIndex: w,
        setActiveIndex: k,
        isOpen: C,
        setIsOpen: N,
        inputValue: z,
        setInputValue: b,
      },
      refs: S,
      listboxId: R,
      collection: O,
      onInputChange: I,
    } = v,
    T = j => {
      const E = O.size && w != null ? [...O.values()][w] : null;
      E != null && E.item ? y([E.item]) : f && y([Qe(E ? E.value : j)]),
        b(''),
        k(null),
        N(!1);
    };
  Vn(() => {
    t.current && S.reference.current !== t.current && v.reference(t.current);
  }, [t, v, S]);
  const {handleTriggerKeyDown: L, handleListboxKeyboardNavigation: se} = Un(v),
    G = oe(() => {
      d && !C && N(!0);
    });
  return a.jsx(Hn, {
    listbox: v,
    mobileOverlay: Bn,
    isLoading: m,
    onPointerDown: j => {
      j.preventDefault();
    },
    children: a.jsx('input', {
      type: 'text',
      className: P(p, 'bg-transparent'),
      placeholder: u,
      ...re(i, {
        ref: n,
        value: z,
        onChange: I,
        onPaste: j => {
          const F = j.clipboardData
            .getData('text')
            .match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi);
          if (F) {
            j.preventDefault();
            const V = window.getSelection();
            V != null &&
              V.rangeCount &&
              (V.deleteFromDocument(), y(F.map(ae => Qe(ae))));
          }
        },
        'aria-autocomplete': 'list',
        'aria-controls': C ? R : void 0,
        autoComplete: 'off',
        autoCorrect: 'off',
        spellCheck: 'false',
        onKeyDown: j => {
          const E = j.target;
          if (j.key === 'Enter') {
            j.preventDefault(), T(E.value);
            return;
          }
          if (
            (j.key === 'Escape' && C && (N(!1), b('')),
            j.key === 'ArrowUp' && C && (w === 0 || w == null))
          ) {
            k(null);
            return;
          }
          if (w != null && (j.key === 'ArrowLeft' || j.key === 'ArrowRight')) {
            j.preventDefault();
            return;
          }
          if (
            (j.key === 'ArrowLeft' ||
              j.key === 'Backspace' ||
              j.key === 'Delete') &&
            E.selectionStart === 0 &&
            w == null &&
            o.length
          ) {
            x == null || x.focusPrevious({tabbable: !0});
            return;
          }
          L(j) || se(j);
        },
        onFocus: G,
        onClick: G,
      }),
    }),
  });
}
function cr({onChange: e, value: n, defaultValue: t, valueKey: s}) {
  const r = h.useMemo(() => wt(n), [n]),
    o = h.useMemo(() => wt(t), [t]),
    l = h.useCallback(
      i => {
        const u = s ? i.map(d => d[s]) : i;
        e == null || e(u);
      },
      [e, s],
    );
  return J(r || void 0, o || [], l);
}
function wt(e) {
  if (e != null) return e.map(n => (typeof n != 'object' ? Qe(n) : n));
}
const ur = he.forwardRef(or);
function dr({children: e, ...n}) {
  const {
      field: {onChange: t, onBlur: s, value: r = [], ref: o},
      fieldState: {invalid: l, error: i},
    } = je({name: n.name}),
    u = {
      onChange: t,
      onBlur: s,
      value: r,
      invalid: l,
      errorMessage: i == null ? void 0 : i.message,
    };
  return a.jsx(ur, {ref: o, ...re(u, n), children: e});
}
function fr({filter: e}) {
  const {trans: n} = W();
  return a.jsx(dr, {
    size: 'sm',
    name: `${e.key}.value`,
    valueKey: 'id',
    allowCustomValue: !1,
    showDropdownArrow: !0,
    placeholder: e.control.placeholder ? n(e.control.placeholder) : void 0,
    displayWith: t => {
      var s;
      return (s = e.control.options.find(r => r.key === t.id)) == null
        ? void 0
        : s.label.message;
    },
    suggestions: e.control.options.map(t => ({
      id: t.key,
      name: t.label.message,
    })),
    children: t =>
      a.jsx(Fe, {value: t.id, children: a.jsx($, {message: t.name})}, t.id),
  });
}
const sn = h.forwardRef((e, n) => {
    const {isInactive: t, filter: s, ...r} = e;
    return t
      ? a.jsx(hr, {filter: s, ...r, ref: n})
      : a.jsx(mr, {filter: s, ...r, ref: n});
  }),
  hr = h.forwardRef(({filter: e, ...n}, t) =>
    a.jsx(ee, {
      variant: 'outline',
      size: 'xs',
      color: 'paper',
      radius: 'rounded-md',
      border: 'border',
      ref: t,
      endIcon: a.jsx(lt, {}),
      ...n,
      children: a.jsx($, {...e.label}),
    }),
  ),
  mr = h.forwardRef(({filter: e, children: n, ...t}, s) => {
    const r = e.control.type === B.BooleanToggle;
    return a.jsxs(ee, {
      variant: 'outline',
      size: 'xs',
      color: 'primary',
      radius: 'rounded-r-md',
      border: 'border-y border-r',
      endIcon: !r && a.jsx(lt, {}),
      ref: s,
      ...t,
      children: [
        a.jsx('span', {
          className: P(!r && 'border-r border-r-primary-light mr-8 pr-8'),
          children: a.jsx($, {...e.label}),
        }),
        n,
      ],
    });
  });
function ke(e) {
  const {onValueChange: n, isInactive: t, filter: s, label: r} = e;
  return a.jsxs(rt, {
    offset: 10,
    type: 'popover',
    onClose: o => {
      o !== void 0 && n(o);
    },
    children: [
      a.jsx(sn, {isInactive: t, filter: s, children: r}),
      a.jsx(gr, {...e}),
    ],
  });
}
function gr({filter: e, panel: n, value: t, operator: s}) {
  const r = Kn({defaultValues: {[e.key]: {value: t, operator: s}}}),
    {close: o, formId: l} = tt();
  return a.jsxs($e, {
    size: 'xs',
    children: [
      a.jsx(_n, {children: a.jsx($, {...e.label})}),
      a.jsx(st, {
        padding: 'px-14 pt-14 pb-4 max-h-288',
        children: a.jsxs(qn, {
          form: r,
          id: l,
          onSubmit: i => {
            o(i[e.key]);
          },
          children: [
            e.description &&
              a.jsx('div', {
                className: 'text-muted text-xs mb-14',
                children: a.jsx($, {...e.description}),
              }),
            n,
          ],
        }),
      }),
      a.jsx(nt, {
        children: a.jsx(ee, {
          form: l,
          type: 'submit',
          variant: 'flat',
          color: 'primary',
          size: 'xs',
          children: a.jsx($, {message: 'Apply'}),
        }),
      }),
    ],
  });
}
const pr = h.memo(({value: e, ...n}) => {
  const t = Wn(n);
  return isNaN(e) && (e = 0), a.jsx(h.Fragment, {children: t.format(e)});
}, Mt);
function vr(e) {
  switch (e.filter.control.type) {
    case B.DateRangePicker:
      return a.jsx(xr, {...e});
    case B.BooleanToggle:
      return a.jsx(br, {...e});
    case B.Select:
      return a.jsx(yr, {...e});
    case B.ChipField:
      return a.jsx(wr, {...e});
    case B.Input:
      return a.jsx(kr, {...e});
    case B.SelectModel:
      return a.jsx(Cr, {...e});
    case B.Custom:
      const n = e.filter.control.listItem;
      return a.jsx(n, {...e});
    default:
      return null;
  }
}
function xr(e) {
  const {value: n, filter: t} = e;
  let s;
  return (
    n.preset !== void 0
      ? (s = a.jsx($, {...ct[n.preset].label}))
      : (s = a.jsx(Qt, {
          start: new Date(n.start),
          end: new Date(n.end),
          options: {dateStyle: 'medium'},
        })),
    a.jsx(ke, {...e, label: s, panel: a.jsx(Ws, {filter: t})})
  );
}
function br({filter: e, isInactive: n, onValueChange: t}) {
  return a.jsx(sn, {
    onClick: () => {
      t({value: e.control.defaultValue});
    },
    filter: e,
    isInactive: n,
  });
}
function yr(e) {
  const {filter: n, value: t} = e,
    s = n.control.options.find(r => r.key === t);
  return a.jsx(ke, {
    ...e,
    label: s ? a.jsx($, {...s.label}) : null,
    panel: a.jsx(qs, {filter: n}),
  });
}
function wr(e) {
  return a.jsx(ke, {
    ...e,
    label: a.jsx(jr, {...e}),
    panel: a.jsx(fr, {filter: e.filter}),
  });
}
function jr(e) {
  const {trans: n} = W(),
    {filter: t, value: s} = e,
    r = s.map(u => t.control.options.find(d => d.key === u)),
    o = 3,
    l = s.length - o,
    i = a.jsx(h.Fragment, {
      children: r
        .filter(Boolean)
        .slice(0, o)
        .map((u, d) => {
          let c = '';
          return d !== 0 && (c += ', '), (c += n(u.label)), c;
        }),
    });
  return l > 0
    ? a.jsx($, {message: ':names + :count more', values: {names: i, count: l}})
    : i;
}
function kr(e) {
  const {filter: n, value: t, operator: s} = e,
    r = s ? a.jsx($, {...nn[s]}) : null,
    o = n.control.inputType === 'number' ? a.jsx(pr, {value: t}) : t;
  return a.jsx(ke, {
    ...e,
    label: a.jsxs(h.Fragment, {children: [r, ' ', o]}),
    panel: a.jsx(rr, {filter: n}),
  });
}
function Cr(e) {
  const {value: n, filter: t} = e,
    {isLoading: s, data: r} = tn(t.control.model, n),
    o = a.jsxs(h.Fragment, {
      children: [
        a.jsx(ie, {variant: 'avatar', size: 'w-18 h-18 mr-6'}),
        a.jsx(ie, {variant: 'rect', size: 'w-50'}),
      ],
    }),
    l = a.jsxs(h.Fragment, {
      children: [
        a.jsx(Le, {
          size: 'xs',
          src: r == null ? void 0 : r.model.image,
          className: 'mr-6',
        }),
        r == null ? void 0 : r.model.name,
      ],
    }),
    i = s || !r ? o : l;
  return a.jsx(ke, {...e, label: i, panel: a.jsx(sr, {filter: t})});
}
function ya({filters: e, pinnedFilters: n, className: t}) {
  const {decodedFilters: s, remove: r, replaceAll: o} = Ts(e, n);
  return s.length
    ? a.jsx('div', {
        className: P('flex items-center gap-6 overflow-x-auto', t),
        children: s.map((l, i) => {
          const u = e.find(c => c.key === l.key);
          if (!u) return null;
          const d = c => {
            const g = [...s];
            g.splice(i, 1, {
              key: u.key,
              value: c.value,
              isInactive: !1,
              operator: c.operator || u.defaultOperator,
            }),
              o(g);
          };
          return a.jsxs(
            'div',
            {
              children: [
                !l.isInactive &&
                  a.jsx(q, {
                    variant: 'outline',
                    color: 'primary',
                    size: 'xs',
                    radius: 'rounded-l-md',
                    onClick: () => {
                      r(l.key);
                    },
                    children: a.jsx(Ht, {}),
                  }),
                a.jsx(vr, {
                  filter: u,
                  isInactive: l.isInactive,
                  value: l.valueKey != null ? l.valueKey : l.value,
                  operator: l.operator,
                  onValueChange: d,
                }),
              ],
            },
            l.key,
          );
        }),
      })
    : null;
}
const wa = H(
    a.jsx('path', {d: 'M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z'}),
    'AddOutlined',
  ),
  jt = H(
    a.jsx('path', {
      d: 'M18 15v3H6v-3H4v3c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-3h-2zm-1-4-1.41-1.41L13 12.17V4h-2v8.17L8.41 9.59 7 11l5 5 5-5z',
    }),
    'FileDownloadOutlined',
  );
function Ze(e, n) {
  const t = document.createElement('a');
  (t.href = e),
    n && (t.download = n),
    document.body.appendChild(t),
    t.click(),
    document.body.removeChild(t);
}
function Ir(e) {
  const n = dt(),
    [t, s] = h.useState(!e.value && !e.defaultValue),
    r = e.onChange,
    [o, l] = J(e.value || n, e.defaultValue || n, C => {
      s(!1), r == null || r(C);
    }),
    {
      min: i,
      max: u,
      granularity: d,
      timezone: c,
      calendarIsOpen: g,
      setCalendarIsOpen: f,
      closeDialogOnSelection: m,
    } = qt(o, e),
    p = h.useCallback(() => {
      s(!0), l(n), r == null || r(null), f(!1);
    }, [n, l, r, f]),
    [x, y] = h.useState(() => [ve(o)]),
    v = h.useCallback(
      C => {
        i && C.compare(i) < 0 ? (C = i) : u && C.compare(u) > 0 && (C = u);
        const N = o ? o.set(C) : Z(C, c);
        l(N), y([ve(N)]), s(!1);
      },
      [l, i, u, o, c],
    ),
    w = h.useCallback(C => !t && pe(o, C), [o, t]),
    k = h.useCallback(
      C => ({
        onClick: () => {
          v == null || v(C), m && (f == null || f(!1));
        },
      }),
      [v, f, m],
    );
  return {
    selectedValue: o,
    setSelectedValue: l,
    calendarIsOpen: g,
    setCalendarIsOpen: f,
    dayIsActive: w,
    dayIsHighlighted: () => !1,
    dayIsRangeStart: () => !1,
    dayIsRangeEnd: () => !1,
    getCellProps: k,
    calendarDates: x,
    setCalendarDates: y,
    isPlaceholder: t,
    clear: p,
    setIsPlaceholder: s,
    min: i,
    max: u,
    granularity: d,
    timezone: c,
    closeDialogOnSelection: m,
  };
}
function Dr({showCalendarFooter: e, ...n}) {
  const t = Ir(n),
    s = h.useRef(null),
    r = dt(),
    o =
      e &&
      a.jsx(nt, {
        padding: 'px-14 pb-14',
        startAction: a.jsx(ee, {
          disabled: t.isPlaceholder,
          variant: 'text',
          color: 'primary',
          onClick: () => {
            t.clear();
          },
          children: a.jsx($, {message: 'Clear'}),
        }),
        children: a.jsx(ee, {
          variant: 'text',
          color: 'primary',
          onClick: () => {
            t.setSelectedValue(r), t.setCalendarIsOpen(!1);
          },
          children: a.jsx($, {message: 'Today'}),
        }),
      }),
    l = a.jsx(rt, {
      offset: 8,
      placement: 'bottom-start',
      isOpen: t.calendarIsOpen,
      onOpenChange: t.setCalendarIsOpen,
      type: 'popover',
      triggerRef: s,
      returnFocusToTrigger: !1,
      moveFocusToDialog: !1,
      children: a.jsxs($e, {
        size: 'auto',
        children: [
          a.jsx(st, {
            className: 'flex items-start gap-40',
            padding: e ? 'px-24 pt-20 pb-10' : null,
            children: a.jsx(Gt, {state: t, visibleMonths: 1}),
          }),
          o,
        ],
      }),
    }),
    i = {
      onClick: u => {
        u.stopPropagation(),
          u.preventDefault(),
          Sr(u) ? t.setCalendarIsOpen(!1) : t.setCalendarIsOpen(!0);
      },
    };
  return a.jsxs(h.Fragment, {
    children: [
      a.jsx(ut, {
        ref: s,
        wrapperProps: i,
        endAdornment: a.jsx(Kt, {className: P(n.disabled && 'text-disabled')}),
        ...n,
        children: a.jsx(be, {
          segmentProps: i,
          state: t,
          value: t.selectedValue,
          onChange: t.setSelectedValue,
          isPlaceholder: t.isPlaceholder,
        }),
      }),
      l,
    ],
  });
}
function ja(e) {
  const {min: n, max: t} = e,
    {trans: s} = W(),
    {format: r} = ce(),
    {
      field: {onChange: o, onBlur: l, value: i = null, ref: u},
      fieldState: {invalid: d, error: c},
    } = je({
      name: e.name,
      rules: {
        validate: m => {
          if (!m) return;
          const p = Pe(m);
          if (n && p.compare(n) < 0)
            return s({
              message: 'Enter a date after :date',
              values: {date: r(m)},
            });
          if (t && p.compare(t) > 0)
            return s({
              message: 'Enter a date before :date',
              values: {date: r(m)},
            });
        },
      },
    }),
    g = i ? Pe(i) : null,
    f = {
      onChange: m => {
        o(m && m.toAbsoluteString());
      },
      onBlur: l,
      value: g,
      invalid: d,
      errorMessage: c == null ? void 0 : c.message,
      inputRef: u,
    };
  return a.jsx(Dr, {...re(f, e)});
}
function Sr(e) {
  return ['hour', 'minute', 'dayPeriod'].includes(
    e.currentTarget.ariaLabel || '',
  );
}
const Pr = he.forwardRef((e, n) => {
  const {
      children: t,
      size: s = 'sm',
      description: r,
      className: o,
      invalid: l,
      autoFocus: i,
      errorMessage: u,
      ...d
    } = e,
    c = ze(n);
  Yn({autoFocus: i}, c);
  const g = Er(s),
    f = Re(e),
    m = h.useId();
  return a.jsxs('div', {
    className: P(o, 'isolate'),
    children: [
      a.jsxs('label', {
        className: 'flex items-center select-none',
        children: [
          a.jsx('input', {
            ...d,
            type: 'checkbox',
            role: 'switch',
            'aria-invalid': l || void 0,
            'aria-describedby': r ? m : void 0,
            ref: c,
            'aria-checked': d.checked,
            className: P(
              g,
              !l &&
                'checked:bg-primary dark:checked:bg-primary-dark checked:border-primary dark:checked:border-primary-dark',
              l && 'checked:bg-danger checked:border-danger',
              'outline-none cursor-pointer bg-chip border-chip border checked:bg-primary checked:border-primary p-0 overflow-hidden relative rounded-3xl appearance-none transition-colors flex-shrink-0 flex items-center outline-none',
              'before:z-10 before:border before:rounded-3xl before:block before:bg-white before:transition-transform before:translate-x-2',
              'checked:before:border-white',
              'focus-visible:ring',
              e.disabled && 'opacity-80 cursor-not-allowed',
            ),
          }),
          t &&
            a.jsx('span', {
              className: P(
                f.size.font,
                'ml-12',
                l && 'text-danger',
                e.disabled && 'text-disabled',
              ),
              children: t,
            }),
        ],
      }),
      r && !u && a.jsx('div', {id: m, className: f.description, children: r}),
      u && a.jsx('div', {id: m, className: f.error, children: u}),
    ],
  });
});
function ka(e) {
  const {
      field: {onChange: n, onBlur: t, value: s = !1, ref: r},
      fieldState: {invalid: o, error: l},
    } = je({name: e.name}),
    i = {
      onChange: u => {
        u.target.value && u.target.value !== 'on'
          ? n(u.target.checked ? u.target.value : !1)
          : n(u);
      },
      onBlur: t,
      checked: !!s,
      invalid: o,
      errorMessage: l == null ? void 0 : l.message,
      name: e.name,
    };
  return a.jsx(Pr, {ref: r, ...re(e, i)});
}
function Er(e) {
  switch (e) {
    case 'xl':
      return 'w-68 h-36 before:w-28 before:h-28 checked:before:translate-x-36';
    case 'lg':
      return 'w-56 h-30 before:w-22 before:h-22 checked:before:translate-x-30';
    case 'md':
      return 'w-46 h-24 before:w-18 before:h-18 checked:before:translate-x-24';
    case 'xs':
      return 'w-30 h-16 before:w-12 before:h-12 checked:before:translate-x-16';
    default:
      return 'w-38 h-20 before:w-14 before:h-14 checked:before:translate-x-20';
  }
}
const Ca = H(
    a.jsx('path', {
      d: 'M16 9v10H8V9h8m-1.5-6h-5l-1 1H5v2h14V4h-3.5l-1-1zM18 7H6v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7z',
    }),
    'DeleteOutlined',
  ),
  Q = new Map(),
  Ce = new Map(),
  Tr = new Map(),
  _ = {status: 'inactive'};
function qe({e, rect: n, deltaX: t, deltaY: s}) {
  return {
    rect: n,
    x: e.clientX,
    y: e.clientY,
    deltaX: t ?? 0,
    deltaY: s ?? 0,
    nativeEvent: e,
  };
}
let rn = null;
function kt(e) {
  rn = e;
}
function Nr(e) {
  return {left: e.left, top: e.top, width: e.width, height: e.height};
}
function Rr(e) {
  const n = new IntersectionObserver(t => {
    t.forEach(s => {
      const {width: r, height: o, left: l, top: i} = s.boundingClientRect,
        [u, d] = [...e].find(([, g]) => g.ref.current === s.target) || [];
      if (u == null || d == null) return;
      const c = {width: r, height: o, left: l, top: i};
      e.set(u, {...d, rect: c});
    }),
      n.disconnect();
  });
  [...e.values()].forEach(t => {
    t.ref.current && n.observe(t.ref.current);
  });
}
function Ia({id: e, disabled: n, ref: t, preview: s, hidePreview: r, ...o}) {
  const l = h.useRef(null),
    {addGlobalListener: i, removeAllGlobalListeners: u} = Ft(),
    d = h.useRef({lastPosition: {x: 0, y: 0}}).current,
    c = h.useRef(o);
  (c.current = o),
    h.useLayoutEffect(
      () => (
        n
          ? Q.delete(e)
          : Q.set(e, {
              ...Q.get(e),
              id: e,
              ref: t,
              type: c.current.type,
              getData: c.current.getData,
            }),
        () => {
          Q.delete(e);
        }
      ),
      [e, n, c, t],
    );
  const g = y => {
      Tr.forEach(v => {
        var w;
        v.type === ((w = Q.get(e)) == null ? void 0 : w.type) && y(v);
      });
    },
    f = y => {
      var N, z;
      const v = Q.get(e),
        w = t.current,
        k = !l.current || !d.clickedEl || l.current.contains(d.clickedEl);
      if (rn || !w || !v || !k) {
        y.preventDefault(), y.stopPropagation();
        return;
      }
      Rr(Ce),
        kt('drag'),
        r && zr(y),
        (y.dataTransfer.effectAllowed = 'move'),
        (d.lastPosition = {x: y.clientX, y: y.clientY}),
        (d.currentRect = Nr(w.getBoundingClientRect()));
      const C = qe({rect: d.currentRect, e: y});
      s != null &&
        s.current &&
        s.current(v, b => {
          y.dataTransfer.setDragImage(b, 0, 0);
        }),
        (_.status = 'dragging'),
        (_.dragTargetId = e),
        t.current && (t.current.dataset.dragging = 'true'),
        (z = (N = c.current).onDragStart) == null || z.call(N, C, v),
        requestAnimationFrame(() => {
          g(b => {
            var S;
            return (S = b.onDragStart) == null ? void 0 : S.call(b, C, v);
          });
        }),
        i(window, 'dragover', m, !0);
    },
    m = y => {
      var z, b;
      if ((y.preventDefault(), !d.currentRect)) return;
      const v = y.clientX - d.lastPosition.x,
        w = y.clientY - d.lastPosition.y,
        k = {
          ...d.currentRect,
          left: d.currentRect.left + v,
          top: d.currentRect.top + w,
        },
        C = qe({rect: k, e: y, deltaX: v, deltaY: w}),
        N = Q.get(e);
      N &&
        ((b = (z = c.current).onDragMove) == null || b.call(z, C, N),
        g(S => {
          var R;
          return (R = S.onDragMove) == null ? void 0 : R.call(S, C, N);
        })),
        (d.lastPosition = {x: y.clientX, y: y.clientY}),
        (d.currentRect = k);
    };
  return {
    draggableProps: {
      draggable: !n,
      onDragStart: f,
      onDragEnd: y => {
        var k, C;
        if ((u(), !d.currentRect)) return;
        kt(null), le && le.remove();
        const v = qe({rect: d.currentRect, e: y}),
          w = Q.get(e);
        w &&
          ((C = (k = c.current).onDragEnd) == null || C.call(k, v, w),
          g(N => {
            var z;
            return (z = N.onDragEnd) == null
              ? void 0
              : z.call(N, v, w, _.status);
          })),
          requestAnimationFrame(() => {
            (_.dragTargetId = void 0),
              (_.status = 'inactive'),
              t.current && delete t.current.dataset.dragging;
          });
      },
      onPointerDown: y => {
        d.clickedEl = y.target;
      },
    },
    dragHandleRef: l,
  };
}
let le;
function zr(e) {
  le ||
    ((le = new Image()),
    document.body.append(le),
    (le.src =
      'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==')),
    e.dataTransfer.setDragImage(le, 0, 0);
}
async function* Mr(e) {
  const n = [];
  for (const t of e.items)
    if (t.kind === 'file') {
      const s = t.webkitGetAsEntry();
      s && n.push(s);
    }
  for (const t of n)
    if (t.isFile) {
      if (t.name === '.DS_Store') continue;
      const s = await on(t);
      yield new Bt(s, t.fullPath);
    } else t.isDirectory && (yield* an(t));
}
async function* an(e) {
  const n = e.createReader();
  let t;
  do {
    t = await new Promise((s, r) => {
      n.readEntries(s, r);
    });
    for (const s of t)
      if (s.isFile) {
        if (s.name === '.DS_Store') continue;
        const r = await on(s);
        yield new Bt(r, s.fullPath);
      } else s.isDirectory && (yield* an(s));
  } while (t.length > 0);
}
function on(e) {
  return new Promise((n, t) => e.file(n, t));
}
async function Or(e) {
  const n = [];
  for await (const t of e) n.push(t);
  return n;
}
const $r = 400;
function Da({id: e, disabled: n, ref: t, ...s}) {
  const r = h.useRef({
      dragOverElements: new Set(),
      dropActivateTimer: void 0,
    }).current,
    o = h.useRef(s);
  (o.current = s),
    h.useLayoutEffect(
      () => (
        Ce.set(e, {...Ce.get(e), disabled: n, id: e, ref: t}),
        () => {
          Ce.delete(e);
        }
      ),
      [e, o, n, t],
    );
  const l = f => {
      var x;
      const m = o.current,
        p =
          m.allowDragEventsFromItself ||
          t.current !== ((x = f.ref) == null ? void 0 : x.current);
      return !!(
        f != null &&
        f.type &&
        p &&
        m.types.includes(f.type) &&
        (!m.acceptsDrop || m.acceptsDrop(f))
      );
    },
    i = f => {
      var p, x;
      const m = ge(f);
      m && ((x = (p = o.current).onDragLeave) == null || x.call(p, m));
    };
  return {
    droppableProps: n
      ? {}
      : {
          onDragOver: f => {
            var p, x;
            f.preventDefault(), f.stopPropagation();
            const m = ge(f);
            m &&
              l(m) &&
              ((x = (p = o.current).onDragOver) == null || x.call(p, m, f));
          },
          onDragEnter: f => {
            var p, x;
            if (
              (f.stopPropagation(),
              r.dragOverElements.add(f.target),
              r.dragOverElements.size > 1)
            )
              return;
            const m = ge(f);
            m &&
              l(m) &&
              ((x = (p = o.current).onDragEnter) == null || x.call(p, m),
              clearTimeout(r.dropActivateTimer),
              typeof o.current.onDropActivate == 'function' &&
                (r.dropActivateTimer = setTimeout(() => {
                  var y, v;
                  m &&
                    ((v = (y = o.current).onDropActivate) == null ||
                      v.call(y, m));
                }, $r)));
          },
          onDragLeave: f => {
            f.stopPropagation(), r.dragOverElements.delete(f.target);
            for (const p of r.dragOverElements)
              f.currentTarget.contains(p) || r.dragOverElements.delete(p);
            if (r.dragOverElements.size > 0) return;
            const m = ge(f);
            m && l(m) && (i(f), clearTimeout(r.dropActivateTimer));
          },
          onDrop: async f => {
            var p, x, y, v;
            f.preventDefault(),
              f.stopPropagation(),
              r.dragOverElements.clear(),
              i(f),
              clearTimeout(r.dropActivateTimer);
            const m = ge(f);
            if (m)
              if (
                ((x = (p = o.current).onDragLeave) == null || x.call(p, m),
                !l(m))
              )
                _.status !== 'inactive' && (_.status = 'dropFail');
              else {
                const w =
                  (v = (y = o.current).onDrop) == null ? void 0 : v.call(y, m);
                _.status !== 'inactive' &&
                  (_.status = w === !1 ? 'dropFail' : 'dropSuccess');
              }
          },
        },
  };
}
function ge(e) {
  if (_.dragTargetId != null) return Q.get(_.dragTargetId);
  if (e.dataTransfer.types.includes('Files'))
    return {
      type: 'nativeFile',
      el: null,
      ref: null,
      getData: () => Or(Mr(e.dataTransfer)),
    };
}
const Fr = 'user',
  Sa = H(
    a.jsx('path', {
      d: 'M17 7h-4v2h4c1.65 0 3 1.35 3 3s-1.35 3-3 3h-4v2h4c2.76 0 5-2.24 5-5s-2.24-5-5-5zm-6 8H7c-1.65 0-3-1.35-3-3s1.35-3 3-3h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-2zm-3-4h8v2H8z',
    }),
    'LinkOutlined',
  ),
  Pa = H(
    a.jsx('path', {
      d: 'M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z',
    }),
    'MoreVertOutlined',
  );
/**
 * react-virtual
 *
 * Copyright (c) TanStack
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Te() {
  return (
    (Te = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var n = 1; n < arguments.length; n++) {
            var t = arguments[n];
            for (var s in t)
              Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s]);
          }
          return e;
        }),
    Te.apply(this, arguments)
  );
}
/**
 * virtual-core
 *
 * Copyright (c) TanStack
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Ne() {
  return (
    (Ne = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var n = 1; n < arguments.length; n++) {
            var t = arguments[n];
            for (var s in t)
              Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s]);
          }
          return e;
        }),
    Ne.apply(this, arguments)
  );
}
/**
 * virtual-core
 *
 * Copyright (c) TanStack
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function fe(e, n, t) {
  var s,
    r = (s = t.initialDeps) != null ? s : [],
    o;
  return function () {
    var l;
    t.key && t.debug != null && t.debug() && (l = Date.now());
    var i = e(),
      u =
        i.length !== r.length ||
        i.some(function (p, x) {
          return r[x] !== p;
        });
    if (!u) return o;
    r = i;
    var d;
    if (
      (t.key && t.debug != null && t.debug() && (d = Date.now()),
      (o = n.apply(void 0, i)),
      t.key && t.debug != null && t.debug())
    ) {
      var c = Math.round((Date.now() - l) * 100) / 100,
        g = Math.round((Date.now() - d) * 100) / 100,
        f = g / 16,
        m = function (x, y) {
          for (x = String(x); x.length < y; ) x = ' ' + x;
          return x;
        };
      console.info(
        '%c⏱ ' + m(g, 5) + ' /' + m(c, 5) + ' ms',
        `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(` +
          Math.max(0, Math.min(120 - 120 * f, 120)) +
          'deg 100% 31%);',
        t == null ? void 0 : t.key,
      );
    }
    return t == null || t.onChange == null || t.onChange(o), o;
  };
}
function We(e, n) {
  if (e === void 0)
    throw new Error('Unexpected undefined' + (n ? ': ' + n : ''));
  return e;
}
var Ar = function (n, t) {
  return Math.abs(n - t) < 1;
};
/**
 * virtual-core
 *
 * Copyright (c) TanStack
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ var Lr = function (n) {
    return n;
  },
  Vr = function (n) {
    for (
      var t = Math.max(n.startIndex - n.overscan, 0),
        s = Math.min(n.endIndex + n.overscan, n.count - 1),
        r = [],
        o = t;
      o <= s;
      o++
    )
      r.push(o);
    return r;
  },
  Hr = function (n, t) {
    var s = n.scrollElement;
    if (s) {
      var r = function (i) {
        var u = i.width,
          d = i.height;
        t({width: Math.round(u), height: Math.round(d)});
      };
      r(s.getBoundingClientRect());
      var o = new ResizeObserver(function (l) {
        var i = l[0];
        if (i != null && i.borderBoxSize) {
          var u = i.borderBoxSize[0];
          if (u) {
            r({width: u.inlineSize, height: u.blockSize});
            return;
          }
        }
        r(s.getBoundingClientRect());
      });
      return (
        o.observe(s, {box: 'border-box'}),
        function () {
          o.unobserve(s);
        }
      );
    }
  },
  Br = function (n, t) {
    var s = n.scrollElement;
    if (s) {
      var r = function () {
        t(s[n.options.horizontal ? 'scrollLeft' : 'scrollTop']);
      };
      return (
        r(),
        s.addEventListener('scroll', r, {passive: !0}),
        function () {
          s.removeEventListener('scroll', r);
        }
      );
    }
  },
  Ur = function (n, t, s) {
    if (t != null && t.borderBoxSize) {
      var r = t.borderBoxSize[0];
      if (r) {
        var o = Math.round(
          r[s.options.horizontal ? 'inlineSize' : 'blockSize'],
        );
        return o;
      }
    }
    return Math.round(
      n.getBoundingClientRect()[s.options.horizontal ? 'width' : 'height'],
    );
  },
  Kr = function (n, t, s) {
    var r,
      o,
      l = t.adjustments,
      i = l === void 0 ? 0 : l,
      u = t.behavior,
      d = n + i;
    (r = s.scrollElement) == null ||
      r.scrollTo == null ||
      r.scrollTo(
        ((o = {}),
        (o[s.options.horizontal ? 'left' : 'top'] = d),
        (o.behavior = u),
        o),
      );
  },
  _r = function (n) {
    var t = this;
    (this.unsubs = []),
      (this.scrollElement = null),
      (this.isScrolling = !1),
      (this.isScrollingTimeoutId = null),
      (this.scrollToIndexTimeoutId = null),
      (this.measurementsCache = []),
      (this.itemSizeCache = new Map()),
      (this.pendingMeasuredCacheIndexes = []),
      (this.scrollDirection = null),
      (this.scrollAdjustments = 0),
      (this.measureElementCache = new Map()),
      (this.observer = (function () {
        var s = null,
          r = function () {
            return (
              s ||
              (typeof ResizeObserver < 'u'
                ? (s = new ResizeObserver(function (l) {
                    l.forEach(function (i) {
                      t._measureElement(i.target, i);
                    });
                  }))
                : null)
            );
          };
        return {
          disconnect: function () {
            var l;
            return (l = r()) == null ? void 0 : l.disconnect();
          },
          observe: function (l) {
            var i;
            return (i = r()) == null
              ? void 0
              : i.observe(l, {box: 'border-box'});
          },
          unobserve: function (l) {
            var i;
            return (i = r()) == null ? void 0 : i.unobserve(l);
          },
        };
      })()),
      (this.range = null),
      (this.setOptions = function (s) {
        Object.entries(s).forEach(function (r) {
          var o = r[0],
            l = r[1];
          typeof l > 'u' && delete s[o];
        }),
          (t.options = Ne(
            {
              debug: !1,
              initialOffset: 0,
              overscan: 1,
              paddingStart: 0,
              paddingEnd: 0,
              scrollPaddingStart: 0,
              scrollPaddingEnd: 0,
              horizontal: !1,
              getItemKey: Lr,
              rangeExtractor: Vr,
              onChange: function () {},
              measureElement: Ur,
              initialRect: {width: 0, height: 0},
              scrollMargin: 0,
              scrollingDelay: 150,
              indexAttribute: 'data-index',
              initialMeasurementsCache: [],
              lanes: 1,
            },
            s,
          ));
      }),
      (this.notify = function (s) {
        t.options.onChange == null || t.options.onChange(t, s);
      }),
      (this.maybeNotify = fe(
        function () {
          return (
            t.calculateRange(),
            [
              t.isScrolling,
              t.range ? t.range.startIndex : null,
              t.range ? t.range.endIndex : null,
            ]
          );
        },
        function (s) {
          t.notify(s);
        },
        {
          key: !1,
          debug: function () {
            return t.options.debug;
          },
          initialDeps: [
            this.isScrolling,
            this.range ? this.range.startIndex : null,
            this.range ? this.range.endIndex : null,
          ],
        },
      )),
      (this.cleanup = function () {
        t.unsubs.filter(Boolean).forEach(function (s) {
          return s();
        }),
          (t.unsubs = []),
          (t.scrollElement = null);
      }),
      (this._didMount = function () {
        return (
          t.measureElementCache.forEach(t.observer.observe),
          function () {
            t.observer.disconnect(), t.cleanup();
          }
        );
      }),
      (this._willUpdate = function () {
        var s = t.options.getScrollElement();
        t.scrollElement !== s &&
          (t.cleanup(),
          (t.scrollElement = s),
          t._scrollToOffset(t.scrollOffset, {
            adjustments: void 0,
            behavior: void 0,
          }),
          t.unsubs.push(
            t.options.observeElementRect(t, function (r) {
              (t.scrollRect = r), t.maybeNotify();
            }),
          ),
          t.unsubs.push(
            t.options.observeElementOffset(t, function (r) {
              (t.scrollAdjustments = 0),
                t.scrollOffset !== r &&
                  (t.isScrollingTimeoutId !== null &&
                    (clearTimeout(t.isScrollingTimeoutId),
                    (t.isScrollingTimeoutId = null)),
                  (t.isScrolling = !0),
                  (t.scrollDirection =
                    t.scrollOffset < r ? 'forward' : 'backward'),
                  (t.scrollOffset = r),
                  t.maybeNotify(),
                  (t.isScrollingTimeoutId = setTimeout(function () {
                    (t.isScrollingTimeoutId = null),
                      (t.isScrolling = !1),
                      (t.scrollDirection = null),
                      t.maybeNotify();
                  }, t.options.scrollingDelay)));
            }),
          ));
      }),
      (this.getSize = function () {
        return t.scrollRect[t.options.horizontal ? 'width' : 'height'];
      }),
      (this.memoOptions = fe(
        function () {
          return [
            t.options.count,
            t.options.paddingStart,
            t.options.scrollMargin,
            t.options.getItemKey,
          ];
        },
        function (s, r, o, l) {
          return (
            (t.pendingMeasuredCacheIndexes = []),
            {count: s, paddingStart: r, scrollMargin: o, getItemKey: l}
          );
        },
        {key: !1},
      )),
      (this.getFurthestMeasurement = function (s, r) {
        for (var o = new Map(), l = new Map(), i = r - 1; i >= 0; i--) {
          var u = s[i];
          if (!o.has(u.lane)) {
            var d = l.get(u.lane);
            if (
              (d == null || u.end > d.end
                ? l.set(u.lane, u)
                : u.end < d.end && o.set(u.lane, !0),
              o.size === t.options.lanes)
            )
              break;
          }
        }
        return l.size === t.options.lanes
          ? Array.from(l.values()).sort(function (c, g) {
              return c.end - g.end;
            })[0]
          : void 0;
      }),
      (this.getMeasurements = fe(
        function () {
          return [t.memoOptions(), t.itemSizeCache];
        },
        function (s, r) {
          var o = s.count,
            l = s.paddingStart,
            i = s.scrollMargin,
            u = s.getItemKey,
            d =
              t.pendingMeasuredCacheIndexes.length > 0
                ? Math.min.apply(Math, t.pendingMeasuredCacheIndexes)
                : 0;
          t.pendingMeasuredCacheIndexes = [];
          for (var c = t.measurementsCache.slice(0, d), g = d; g < o; g++) {
            var f = u(g),
              m =
                t.options.lanes === 1
                  ? c[g - 1]
                  : t.getFurthestMeasurement(c, g),
              p = m ? m.end : l + i,
              x = r.get(f),
              y = typeof x == 'number' ? x : t.options.estimateSize(g),
              v = p + y,
              w = m ? m.lane : g % t.options.lanes;
            c[g] = {index: g, start: p, size: y, end: v, key: f, lane: w};
          }
          return (t.measurementsCache = c), c;
        },
        {
          key: !1,
          debug: function () {
            return t.options.debug;
          },
        },
      )),
      (this.calculateRange = fe(
        function () {
          return [t.getMeasurements(), t.getSize(), t.scrollOffset];
        },
        function (s, r, o) {
          return (t.range =
            s.length > 0 && r > 0
              ? qr({measurements: s, outerSize: r, scrollOffset: o})
              : null);
        },
        {
          key: !1,
          debug: function () {
            return t.options.debug;
          },
        },
      )),
      (this.getIndexes = fe(
        function () {
          return [
            t.options.rangeExtractor,
            t.calculateRange(),
            t.options.overscan,
            t.options.count,
          ];
        },
        function (s, r, o, l) {
          return r === null ? [] : s(Ne({}, r, {overscan: o, count: l}));
        },
        {
          key: !1,
          debug: function () {
            return t.options.debug;
          },
        },
      )),
      (this.indexFromElement = function (s) {
        var r = t.options.indexAttribute,
          o = s.getAttribute(r);
        return o
          ? parseInt(o, 10)
          : (console.warn(
              "Missing attribute name '" + r + "={index}' on measured element.",
            ),
            -1);
      }),
      (this._measureElement = function (s, r) {
        var o = t.measurementsCache[t.indexFromElement(s)];
        if (!o || !s.isConnected) {
          t.measureElementCache.forEach(function (u, d) {
            u === s &&
              (t.observer.unobserve(s), t.measureElementCache.delete(d));
          });
          return;
        }
        var l = t.measureElementCache.get(o.key);
        l !== s &&
          (l && t.observer.unobserve(l),
          t.observer.observe(s),
          t.measureElementCache.set(o.key, s));
        var i = t.options.measureElement(s, r, t);
        t.resizeItem(o, i);
      }),
      (this.resizeItem = function (s, r) {
        var o,
          l = (o = t.itemSizeCache.get(s.key)) != null ? o : s.size,
          i = r - l;
        i !== 0 &&
          (s.start < t.scrollOffset &&
            t._scrollToOffset(t.scrollOffset, {
              adjustments: (t.scrollAdjustments += i),
              behavior: void 0,
            }),
          t.pendingMeasuredCacheIndexes.push(s.index),
          (t.itemSizeCache = new Map(t.itemSizeCache.set(s.key, r))),
          t.notify(!1));
      }),
      (this.measureElement = function (s) {
        s && t._measureElement(s, void 0);
      }),
      (this.getVirtualItems = fe(
        function () {
          return [t.getIndexes(), t.getMeasurements()];
        },
        function (s, r) {
          for (var o = [], l = 0, i = s.length; l < i; l++) {
            var u = s[l],
              d = r[u];
            o.push(d);
          }
          return o;
        },
        {
          key: !1,
          debug: function () {
            return t.options.debug;
          },
        },
      )),
      (this.getVirtualItemForOffset = function (s) {
        var r = t.getMeasurements();
        return We(
          r[
            ln(
              0,
              r.length - 1,
              function (o) {
                return We(r[o]).start;
              },
              s,
            )
          ],
        );
      }),
      (this.getOffsetForAlignment = function (s, r) {
        var o = t.getSize();
        r === 'auto' &&
          (s <= t.scrollOffset
            ? (r = 'start')
            : s >= t.scrollOffset + o
            ? (r = 'end')
            : (r = 'start')),
          r === 'start'
            ? (s = s)
            : r === 'end'
            ? (s = s - o)
            : r === 'center' && (s = s - o / 2);
        var l = t.options.horizontal ? 'scrollWidth' : 'scrollHeight',
          i = t.scrollElement
            ? 'document' in t.scrollElement
              ? t.scrollElement.document.documentElement[l]
              : t.scrollElement[l]
            : 0,
          u = i - t.getSize();
        return Math.max(Math.min(u, s), 0);
      }),
      (this.getOffsetForIndex = function (s, r) {
        r === void 0 && (r = 'auto'),
          (s = Math.max(0, Math.min(s, t.options.count - 1)));
        var o = We(t.getMeasurements()[s]);
        if (r === 'auto')
          if (
            o.end >=
            t.scrollOffset + t.getSize() - t.options.scrollPaddingEnd
          )
            r = 'end';
          else if (o.start <= t.scrollOffset + t.options.scrollPaddingStart)
            r = 'start';
          else return [t.scrollOffset, r];
        var l =
          r === 'end'
            ? o.end + t.options.scrollPaddingEnd
            : o.start - t.options.scrollPaddingStart;
        return [t.getOffsetForAlignment(l, r), r];
      }),
      (this.isDynamicMode = function () {
        return t.measureElementCache.size > 0;
      }),
      (this.cancelScrollToIndex = function () {
        t.scrollToIndexTimeoutId !== null &&
          (clearTimeout(t.scrollToIndexTimeoutId),
          (t.scrollToIndexTimeoutId = null));
      }),
      (this.scrollToOffset = function (s, r) {
        var o = r === void 0 ? {} : r,
          l = o.align,
          i = l === void 0 ? 'start' : l,
          u = o.behavior;
        t.cancelScrollToIndex(),
          u === 'smooth' &&
            t.isDynamicMode() &&
            console.warn(
              'The `smooth` scroll behavior is not fully supported with dynamic size.',
            ),
          t._scrollToOffset(t.getOffsetForAlignment(s, i), {
            adjustments: void 0,
            behavior: u,
          });
      }),
      (this.scrollToIndex = function (s, r) {
        var o = r === void 0 ? {} : r,
          l = o.align,
          i = l === void 0 ? 'auto' : l,
          u = o.behavior;
        (s = Math.max(0, Math.min(s, t.options.count - 1))),
          t.cancelScrollToIndex(),
          u === 'smooth' &&
            t.isDynamicMode() &&
            console.warn(
              'The `smooth` scroll behavior is not fully supported with dynamic size.',
            );
        var d = t.getOffsetForIndex(s, i),
          c = d[0],
          g = d[1];
        t._scrollToOffset(c, {adjustments: void 0, behavior: u}),
          u !== 'smooth' &&
            t.isDynamicMode() &&
            (t.scrollToIndexTimeoutId = setTimeout(function () {
              t.scrollToIndexTimeoutId = null;
              var f = t.measureElementCache.has(t.options.getItemKey(s));
              if (f) {
                var m = t.getOffsetForIndex(s, g),
                  p = m[0];
                Ar(p, t.scrollOffset) ||
                  t.scrollToIndex(s, {align: g, behavior: u});
              } else t.scrollToIndex(s, {align: g, behavior: u});
            }));
      }),
      (this.scrollBy = function (s, r) {
        var o = r === void 0 ? {} : r,
          l = o.behavior;
        t.cancelScrollToIndex(),
          l === 'smooth' &&
            t.isDynamicMode() &&
            console.warn(
              'The `smooth` scroll behavior is not fully supported with dynamic size.',
            ),
          t._scrollToOffset(t.scrollOffset + s, {
            adjustments: void 0,
            behavior: l,
          });
      }),
      (this.getTotalSize = function () {
        var s;
        return (
          (((s = t.getMeasurements()[t.options.count - 1]) == null
            ? void 0
            : s.end) || t.options.paddingStart) -
          t.options.scrollMargin +
          t.options.paddingEnd
        );
      }),
      (this._scrollToOffset = function (s, r) {
        var o = r.adjustments,
          l = r.behavior;
        t.options.scrollToFn(s, {behavior: l, adjustments: o}, t);
      }),
      (this.measure = function () {
        (t.itemSizeCache = new Map()), t.notify(!1);
      }),
      this.setOptions(n),
      (this.scrollRect = this.options.initialRect),
      (this.scrollOffset = this.options.initialOffset),
      (this.measurementsCache = this.options.initialMeasurementsCache),
      this.measurementsCache.forEach(function (s) {
        t.itemSizeCache.set(s.key, s.size);
      }),
      this.maybeNotify();
  },
  ln = function (n, t, s, r) {
    for (; n <= t; ) {
      var o = ((n + t) / 2) | 0,
        l = s(o);
      if (l < r) n = o + 1;
      else if (l > r) t = o - 1;
      else return o;
    }
    return n > 0 ? n - 1 : 0;
  };
function qr(e) {
  for (
    var n = e.measurements,
      t = e.outerSize,
      s = e.scrollOffset,
      r = n.length - 1,
      o = function (d) {
        return n[d].start;
      },
      l = ln(0, r, o, s),
      i = l;
    i < r && n[i].end < s + t;

  )
    i++;
  return {startIndex: l, endIndex: i};
}
/**
 * react-virtual
 *
 * Copyright (c) TanStack
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ var Wr = typeof document < 'u' ? h.useLayoutEffect : h.useEffect;
function Yr(e) {
  var n = h.useReducer(function () {
      return {};
    }, {})[1],
    t = Te({}, e, {
      onChange: function (l, i) {
        i ? Xn.flushSync(n) : n(), e.onChange == null || e.onChange(l, i);
      },
    }),
    s = h.useState(function () {
      return new _r(t);
    }),
    r = s[0];
  return (
    r.setOptions(t),
    h.useEffect(function () {
      return r._didMount();
    }, []),
    Wr(function () {
      return r._willUpdate();
    }),
    r
  );
}
function Ea(e) {
  return Yr(
    Te({observeElementRect: Hr, observeElementOffset: Br, scrollToFn: Kr}, e),
  );
}
const Xr = he.createContext(null);
function ne(e, n) {
  const {base_url: t} = zt(),
    s = h.useContext(Xr);
  return h.useMemo(() => {
    if (!e) return {};
    let r;
    e.url && (r = Gn(e.url) ? e.url : `${t}/${e.url}`);
    const o = {
      previewUrl: r,
      downloadUrl: `${t}/api/v1/file-entries/download/${
        (n == null ? void 0 : n.downloadHashes) || e.hash
      }`,
    };
    return (
      s &&
        (o.previewUrl &&
          (o.previewUrl = Ct(
            o.previewUrl,
            {...s, thumbnail: n != null && n.thumbnail ? 'true' : ''},
            t,
          )),
        (o.downloadUrl = Ct(o.downloadUrl, s, t))),
      o
    );
  }, [
    t,
    e,
    n == null ? void 0 : n.downloadHashes,
    n == null ? void 0 : n.thumbnail,
    s,
  ]);
}
function Ct(e, n, t) {
  const s = new URL(e, t);
  return (
    Object.entries(n).forEach(([r, o]) => {
      s.searchParams.append(r, o);
    }),
    s.toString()
  );
}
const ft = he.createContext(null);
function te({message: e, className: n, allowDownload: t}) {
  const {entries: s, activeIndex: r} = h.useContext(ft),
    o = s[r],
    l = e || a.jsx($, {message: 'No file preview available'}),
    {downloadUrl: i} = ne(o);
  return a.jsxs('div', {
    className: P(
      n,
      'shadow bg-paper max-w-400 w-[calc(100%-40px)] text-center p-40 rounded',
    ),
    children: [
      a.jsx('div', {className: 'text-lg', children: l}),
      t &&
        a.jsx('div', {
          className: 'block mt-20 text-center',
          children: a.jsx(ee, {
            variant: 'flat',
            color: 'primary',
            onClick: () => {
              i && Ze(i);
            },
            children: a.jsx($, {message: 'Download'}),
          }),
        }),
    ],
  });
}
function Gr(e) {
  const {entry: n, className: t} = e,
    {trans: s} = W(),
    {previewUrl: r} = ne(n);
  return r
    ? a.jsx('img', {
        className: P(t, 'shadow'),
        src: r,
        alt: s({message: 'Preview for :name', values: {name: n.name}}),
      })
    : a.jsx(te, {...e});
}
const Qr = 5242880;
function Zr(e) {
  const {entry: n, className: t} = e,
    {trans: s} = W(),
    [r, o] = h.useState(!1),
    [l, i] = h.useState(!0),
    [u, d] = h.useState(!1),
    [c, g] = h.useState(null),
    {previewUrl: f} = ne(n);
  return (
    h.useEffect(() => {
      n &&
        (f
          ? n.file_size >= Qr
            ? (o(!0), i(!1))
            : Jr(f)
                .then(m => {
                  g(m.data);
                })
                .catch(() => {
                  d(!0);
                })
                .finally(() => {
                  i(!1);
                })
          : d(!0));
    }, [n, f]),
    l
      ? a.jsx(ot, {
          isIndeterminate: !0,
          'aria-label': s({message: 'Loading file contents'}),
        })
      : r
      ? a.jsx(te, {
          ...e,
          message: a.jsx($, {message: 'This file is too large to preview.'}),
        })
      : u
      ? a.jsx(te, {
          ...e,
          message: a.jsx($, {
            message: 'There was an issue previewing this file',
          }),
        })
      : a.jsx('pre', {
          className: P(
            'rounded bg-paper p-20 text-sm whitespace-pre-wrap break-words h-full overflow-y-auto w-full',
            t,
          ),
          children: a.jsx('div', {
            className: 'container mx-auto',
            children: `${c}`,
          }),
        })
  );
}
function Jr(e) {
  return Ae.get(e, {
    responseType: 'text',
    withCredentials: !1,
    headers: {Accept: 'text/plain'},
  });
}
function ea(e) {
  const {entry: n, className: t} = e,
    {previewUrl: s} = ne(n),
    r = h.useRef(null),
    [o, l] = h.useState(!1);
  return (
    h.useEffect(() => {
      var i;
      l(!((i = r.current) != null && i.canPlayType(n.mime)));
    }, [n]),
    o || !s
      ? a.jsx(te, {...e})
      : a.jsx('video', {
          className: t,
          ref: r,
          controls: !0,
          controlsList: 'nodownload noremoteplayback',
          playsInline: !0,
          autoPlay: !0,
          children: a.jsx('source', {
            src: s,
            type: n.mime,
            onError: () => {
              l(!0);
            },
          }),
        })
  );
}
function ta(e) {
  const {entry: n, className: t} = e,
    {previewUrl: s} = ne(n),
    r = h.useRef(null),
    [o, l] = h.useState(!1);
  return (
    h.useEffect(() => {
      var i;
      l(!((i = r.current) != null && i.canPlayType(n.mime)));
    }, [n]),
    o || !s
      ? a.jsx(te, {...e})
      : a.jsx('audio', {
          className: t,
          ref: r,
          controls: !0,
          controlsList: 'nodownload noremoteplayback',
          autoPlay: !0,
          children: a.jsx('source', {
            src: s,
            type: n.mime,
            onError: () => {
              l(!0);
            },
          }),
        })
  );
}
function na(e) {
  const {entry: n, className: t} = e,
    {trans: s} = W(),
    {previewUrl: r} = ne(n);
  return r
    ? a.jsx('iframe', {
        title: s({message: 'Preview for :name', values: {name: n.name}}),
        className: P(t, 'w-full h-full'),
        src: `${r}#toolbar=0`,
      })
    : a.jsx(te, {...e});
}
function Ye(e) {
  const {entry: n, className: t} = e,
    {trans: s} = W(),
    r = h.useRef(null),
    [o, l] = h.useState(!1),
    i = h.useRef(),
    [u, d] = h.useState(!1),
    {previewUrl: c} = ne(n);
  return (
    h.useEffect(() => {
      c
        ? n.file_size && n.file_size > 25e6
          ? l(!0)
          : r.current &&
            ((r.current.onload = () => {
              clearTimeout(i.current), d(!1);
            }),
            sa(c, n).then(g => {
              r.current && (r.current.src = g);
            }),
            (i.current = setTimeout(() => {
              l(!0);
            }, 5e3)))
        : l(!0);
    }, [n, c]),
    o
      ? a.jsx(te, {...e})
      : a.jsxs('div', {
          className: P(t, 'w-full h-full'),
          children: [
            u && a.jsx(ot, {}),
            a.jsx('iframe', {
              ref: r,
              title: s({message: 'Preview for :name', values: {name: n.name}}),
              className: P('w-full h-full', u && 'hidden'),
            }),
          ],
        })
  );
}
async function sa(e, n) {
  const t = new URL(e);
  if (!t.searchParams.has('shareable_link')) {
    const {data: s} = await Ae.post(`file-entries/${n.id}/add-preview-token`);
    t.searchParams.append('preview_token', s.preview_token);
  }
  return ra(t);
}
function ra(e) {
  return `https://views.officeapps.live.com/op/embed.aspx?src=${encodeURIComponent(
    e.toString(),
  )}`;
}
const It = {
  text: Zr,
  video: ea,
  audio: ta,
  image: Gr,
  pdf: na,
  spreadsheet: Ye,
  powerPoint: Ye,
  word: Ye,
  'text/rtf': te,
};
function aa(e) {
  const n = e == null ? void 0 : e.mime,
    t = e == null ? void 0 : e.type;
  return It[n] || It[t] || te;
}
const oa = H(
    a.jsx('path', {
      d: 'M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12l4.58-4.59z',
    }),
    'ChevronLeftOutlined',
  ),
  la = 2 * 1024 * 1024;
function ia({file: e, className: n, iconClassName: t, showImage: s = !0}) {
  const {trans: r} = W(),
    {previewUrl: o} = ne(e, {thumbnail: !0});
  if (
    (e.file_size && e.file_size > la && !e.thumbnail && (s = !1),
    s && e.type === 'image' && o)
  ) {
    const l = r({message: ':fileName thumbnail', values: {fileName: e.name}});
    return a.jsx('img', {
      className: P(n, 'object-cover'),
      src: o,
      alt: l,
      draggable: !1,
    });
  }
  return a.jsx(Qn, {className: t, type: e.type});
}
function ca({
  entries: e,
  onClose: n,
  showHeader: t = !0,
  className: s,
  headerActionsLeft: r,
  allowDownload: o = !0,
  ...l
}) {
  const i = Je('(max-width: 1024px)'),
    [u, d] = J(l.activeIndex, l.defaultActiveIndex || 0, l.onActiveIndexChange),
    c = e[u],
    g = h.useMemo(() => ({entries: e, activeIndex: u}), [e, u]),
    f = aa(c);
  if (!c) return n == null || n(), null;
  const m = e.length - 1 > u,
    p = () => {
      d(u + 1);
    },
    x = u > 0,
    y = () => {
      d(u - 1);
    };
  return a.jsxs(ft.Provider, {
    value: g,
    children: [
      t &&
        a.jsx(ua, {
          actionsLeft: r,
          isMobile: i,
          onClose: n,
          onNext: m ? p : void 0,
          onPrevious: x ? y : void 0,
          allowDownload: o,
        }),
      a.jsxs('div', {
        className: P('overflow-hidden relative flex-auto', s),
        children: [
          i &&
            a.jsx(q, {
              size: 'lg',
              className:
                'text-muted absolute left-0 top-1/2 transform -translate-y-1/2 z-10',
              disabled: !x,
              onClick: y,
              children: a.jsx(Yt, {}),
            }),
          a.jsx(ye, {
            initial: !1,
            children: a.jsx(
              ue.div,
              {
                className: 'absolute inset-0 flex items-center justify-center',
                ...at,
                children: a.jsx(f, {
                  className: 'max-h-[calc(100%-30px)]',
                  entry: c,
                  allowDownload: o,
                }),
              },
              c.id,
            ),
          }),
          i &&
            a.jsx(q, {
              size: 'lg',
              className:
                'text-muted absolute right-0 top-1/2 transform -translate-y-1/2 z-10',
              disabled: !m,
              onClick: p,
              children: a.jsx(Xt, {}),
            }),
        ],
      }),
    ],
  });
}
function ua({
  onNext: e,
  onPrevious: n,
  onClose: t,
  isMobile: s,
  actionsLeft: r,
  allowDownload: o,
}) {
  const {entries: l, activeIndex: i} = h.useContext(ft),
    u = l[i],
    {downloadUrl: d} = ne(u),
    f = s
      ? a.jsx(q, {
          onClick: () => {
            d && Ze(d);
          },
          children: a.jsx(jt, {}),
        })
      : a.jsx(ee, {
          startIcon: a.jsx(jt, {}),
          variant: 'text',
          onClick: () => {
            d && Ze(d);
          },
          children: a.jsx($, {message: 'Download'}),
        });
  return a.jsxs('div', {
    className:
      'flex items-center justify-between gap-20 bg-paper border-b flex-shrink-0 text-sm min-h-50 px-10 text-muted',
    children: [
      a.jsxs('div', {
        className: 'flex items-center gap-4 w-1/3 justify-start',
        children: [r, o ? f : void 0],
      }),
      a.jsxs('div', {
        className:
          'flex items-center gap-10 w-1/3 justify-center flex-nowrap text-main',
        children: [
          a.jsx(ia, {file: u, iconClassName: 'w-16 h-16', showImage: !1}),
          a.jsx('div', {
            className: 'whitespace-nowrap overflow-hidden overflow-ellipsis',
            children: u.name,
          }),
        ],
      }),
      a.jsxs('div', {
        className:
          'w-1/3 flex items-center gap-10 justify-end whitespace-nowrap',
        children: [
          !s &&
            a.jsxs(h.Fragment, {
              children: [
                a.jsx(q, {disabled: !n, onClick: n, children: a.jsx(oa, {})}),
                a.jsx('div', {children: i + 1}),
                a.jsx('div', {children: '/'}),
                a.jsx('div', {children: l.length}),
                a.jsx(q, {disabled: !e, onClick: e, children: a.jsx(Jn, {})}),
                a.jsx('div', {className: 'bg-divider w-1 h-24 mx-20'}),
              ],
            }),
          a.jsx(q, {
            radius: 'rounded-none',
            onClick: t,
            children: a.jsx(Ht, {}),
          }),
        ],
      }),
    ],
  });
}
function Ta(e) {
  return a.jsx($e, {
    size: 'fullscreenTakeover',
    background: 'bg-alt',
    className: 'flex flex-col',
    children: a.jsx(da, {...e}),
  });
}
function da(e) {
  const {close: n} = tt();
  return a.jsx(ca, {onClose: n, ...e});
}
const fa = {
    key: 'type',
    label: D('Type'),
    description: D('Type of the file'),
    defaultOperator: xe.eq,
    control: {
      type: B.Select,
      defaultValue: '05',
      options: [
        {key: '02', label: D('Text'), value: 'text'},
        {key: '03', label: D('Audio'), value: 'audio'},
        {key: '04', label: D('Video'), value: 'video'},
        {key: '05', label: D('Image'), value: 'image'},
        {key: '06', label: D('PDF'), value: 'pdf'},
        {key: '07', label: D('Spreadsheet'), value: 'spreadsheet'},
        {key: '08', label: D('Word Document'), value: 'word'},
        {key: '09', label: D('Photoshop'), value: 'photoshop'},
        {key: '10', label: D('Archive'), value: 'archive'},
        {key: '11', label: D('Folder'), value: 'folder'},
      ],
    },
  },
  Na = [
    fa,
    {
      key: 'public',
      label: D('Visibility'),
      description: D('Whether file is publicly accessible'),
      defaultOperator: xe.eq,
      control: {
        type: B.Select,
        defaultValue: '01',
        options: [
          {key: '01', label: D('Private'), value: !1},
          {key: '02', label: D('Public'), value: !0},
        ],
      },
    },
    Cs({description: D('Date file was uploaded')}),
    Is({description: D('Date file was last changed')}),
    {
      key: 'owner_id',
      label: D('Uploader'),
      description: D('User that this file was uploaded by'),
      defaultOperator: xe.eq,
      control: {type: B.SelectModel, model: Fr},
    },
  ],
  Ra = H(
    a.jsx('path', {
      d: 'M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z',
    }),
    'ArrowBackOutlined',
  ),
  za = H(
    a.jsx('path', {
      d: 'M12 5.83 15.17 9l1.41-1.41L12 3 7.41 7.59 8.83 9 12 5.83zm0 12.34L8.83 15l-1.41 1.41L12 21l4.59-4.59L15.17 15 12 18.17z',
    }),
    'UnfoldMoreOutlined',
  );
export {
  it as $,
  Le as A,
  _e as B,
  fr as C,
  ga as D,
  Ea as E,
  xe as F,
  Xs as G,
  Na as H,
  rr as I,
  Ta as J,
  Yt as K,
  Sa as L,
  Pa as M,
  sr as N,
  Jt as O,
  nr as P,
  za as Q,
  Ra as R,
  qs as S,
  ba as T,
  Fr as U,
  ne as V,
  ia as W,
  X,
  ca as Y,
  Xr as Z,
  fa as _,
  xa as a,
  rn as a0,
  Os as a1,
  Ee as a2,
  Tr as a3,
  pr as a4,
  Qt as a5,
  Kt as a6,
  as as a7,
  vs as a8,
  ct as a9,
  Bs as aa,
  Wt as ab,
  oa as ac,
  ns as ad,
  va as b,
  pa as c,
  B as d,
  Cs as e,
  Xt as f,
  Ts as g,
  Ws as h,
  ya as i,
  wa as j,
  Ze as k,
  jt as l,
  ja as m,
  ka as n,
  ar as o,
  Ms as p,
  Pr as q,
  dr as r,
  Ia as s,
  Da as t,
  Is as u,
  Rr as v,
  Ce as w,
  Ca as x,
  ur as y,
  dt as z,
};
//# sourceMappingURL=UnfoldMore-da6f1eff.js.map
