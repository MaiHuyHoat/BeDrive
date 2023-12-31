import {
  bh as jn,
  bi as At,
  bj as bn,
  bk as yn,
  bl as wn,
  H as C,
  ar as Zt,
  as as Xt,
  bm as $e,
  bn as st,
  aC as rt,
  bo as at,
  k as Jt,
  b as E,
  G as N,
  L as T,
  m as h,
  J as F,
  bp as K,
  j as t,
  aM as oe,
  f as M,
  K as es,
  aN as le,
  I as L,
  T as d,
  r as f,
  a1 as ie,
  B as D,
  d as ts,
  bq as Sn,
  b0 as Se,
  v as U,
  Q as ke,
  br as kn,
  w as Qe,
  R as In,
  c as P,
  bs as En,
  bt as Pn,
  a as ce,
  aU as xe,
  bu as Z,
  bv as W,
  u as He,
  bw as Lt,
  bx as Oe,
  aT as Dn,
  a0 as Ue,
  s as ss,
  az as Fn,
  at as ns,
  ay as pe,
  by as it,
  A as V,
  l as $,
  y as ot,
  t as de,
  ao as Rt,
  ax as rs,
  N as Ye,
  bg as as,
  bz as Nn,
  bA as q,
  V as Ie,
  q as Ee,
  n as Q,
  D as X,
  o as J,
  p as Y,
  F as Pe,
  W as De,
  U as ve,
  bB as lt,
  M as je,
  ag as is,
  bC as os,
  Z as be,
  bD as ct,
  bE as Cn,
  aa as ls,
  Y as Mn,
  b3 as Tt,
  i as An,
  a8 as Be,
  $ as _t,
  h as Ln,
  aD as ee,
  a5 as Ge,
  bF as Rn,
  C as Tn,
  X as cs,
  bG as Ze,
  bH as _n,
  x as Xe,
  bI as zn,
  bJ as $n,
  bK as ds,
  au as ze,
  bL as On,
  b8 as Un,
  bM as Bn,
  bN as Kn,
  aJ as qn,
  bO as Wn,
  bP as Vn,
  bQ as Qn,
  bR as Hn,
  ai as Yn,
  aj as Gn,
  E as Zn,
  be as Xn,
  bf as ne,
} from './main-c5aef231.js';
import {
  V as us,
  k as Ke,
  l as qe,
  W as dt,
  L as Jn,
  x as ut,
  X as mt,
  M as ht,
  T as ms,
  J as hs,
  D as fs,
  a as xs,
  c as ps,
  Y as er,
  Z as gs,
  y as ft,
  Q as tr,
  j as vs,
  t as Je,
  s as js,
  _ as sr,
  F as Re,
  d as Te,
  e as nr,
  u as rr,
  $ as te,
  i as ar,
  w as bs,
  p as ys,
  v as zt,
  a0 as ir,
  a1 as or,
  a2 as lr,
  E as cr,
  A as xt,
  G as dr,
  U as ur,
  q as pt,
  n as $t,
  m as mr,
  R as hr,
  a3 as Ot,
  b as Ut,
} from './UnfoldMore-da6f1eff.js';
import {
  I as fr,
  R as xr,
  P as ws,
  S as pr,
  a as gr,
  D as vr,
  b as jr,
  C as br,
  c as yr,
  d as gt,
  F as Ss,
  e as ks,
  f as wr,
  g as Sr,
  G as kr,
  h as Ir,
  i as Er,
  A as Pr,
  B as Dr,
  j as vt,
  U as Fr,
  k as Nr,
  V as Cr,
  l as Mr,
  m as Ar,
} from './Info-7119f720.js';
import {B as jt, a as We, E as Lr, C as Rr} from './Edit-e18ef068.js';
var Tr = class extends jn {
  constructor(e, s) {
    super(e, s);
  }
  bindMethods() {
    super.bindMethods(),
      (this.fetchNextPage = this.fetchNextPage.bind(this)),
      (this.fetchPreviousPage = this.fetchPreviousPage.bind(this));
  }
  setOptions(e, s) {
    super.setOptions({...e, behavior: At()}, s);
  }
  getOptimisticResult(e) {
    return (e.behavior = At()), super.getOptimisticResult(e);
  }
  fetchNextPage(e) {
    return this.fetch({...e, meta: {fetchMore: {direction: 'forward'}}});
  }
  fetchPreviousPage(e) {
    return this.fetch({...e, meta: {fetchMore: {direction: 'backward'}}});
  }
  createResult(e, s) {
    var c, u, x, m;
    const {state: n} = e,
      r = super.createResult(e, s),
      {isFetching: a, isRefetching: i} = r,
      o =
        a &&
        ((u = (c = n.fetchMeta) == null ? void 0 : c.fetchMore) == null
          ? void 0
          : u.direction) === 'forward',
      l =
        a &&
        ((m = (x = n.fetchMeta) == null ? void 0 : x.fetchMore) == null
          ? void 0
          : m.direction) === 'backward';
    return {
      ...r,
      fetchNextPage: this.fetchNextPage,
      fetchPreviousPage: this.fetchPreviousPage,
      hasNextPage: bn(s, n.data),
      hasPreviousPage: yn(s, n.data),
      isFetchingNextPage: o,
      isFetchingPreviousPage: l,
      isRefetching: i && !o && !l,
    };
  }
};
function Is(e, s) {
  return wn(e, Tr, s);
}
const R = {
  fetchEntries: e => {
    const s = ['drive-entries'];
    return e && s.push(e), s;
  },
  fetchUserFolders(e) {
    const s = ['user-folders'];
    return e && s.push(e), s;
  },
  fetchShareableLink: e => {
    const s = ['shareable-link'];
    return e && s.push(e), s;
  },
  fetchFolderPath(e, s) {
    const n = ['folder-path'];
    return e && n.push(e), s && n.push(s), n;
  },
  fetchEntryShareableLink: e => ['file-entries', e, 'shareable-link'],
  fetchFileEntry: e => {
    const s = ['drive/file-entries/model'];
    return e && s.push(e), s;
  },
  fetchStorageSummary: ['storage-summary'],
};
function O() {
  return Promise.all([
    C.invalidateQueries({queryKey: R.fetchEntries()}),
    C.invalidateQueries({queryKey: R.fetchFolderPath()}),
    C.invalidateQueries({queryKey: R.fetchUserFolders()}),
    C.invalidateQueries({queryKey: R.fetchFileEntry()}),
  ]);
}
const B = Zt()(
  Xt(e => ({
    password: null,
    viewMode: $e('drive.viewMode'),
    activeSort: {orderBy: 'updated_at', orderDir: 'desc'},
    setPassword: s => {
      e(n => {
        n.password = s;
      });
    },
    isPasswordProtected: !1,
    setIsPasswordProtected: s => {
      e(n => {
        n.isPasswordProtected = s;
      });
    },
    setViewMode: s => {
      e(n => {
        (n.viewMode = s), st('drive.viewMode', s);
      });
    },
    setActiveSort: s => {
      e(n => {
        n.activeSort = s;
      });
    },
  })),
);
function ae() {
  return B.getState();
}
function se() {
  var l, c;
  const {hash: e} = rt(),
    {orderBy: s, orderDir: n} = B(u => u.activeSort),
    r = `${s}:${n}`,
    a = B(u => u.isPasswordProtected),
    i = B(u => u.password),
    o = Is({
      queryKey: R.fetchShareableLink({hash: e, sort: r}),
      queryFn: async ({pageParam: u = 1}) => {
        const x = await _r({hash: e, page: u, order: r, password: i});
        return x.passwordInvalid && ae().setIsPasswordProtected(!0), x;
      },
      initialData: () => {
        var x, m;
        const u = (x = at().loaders) == null ? void 0 : x.shareableLinkPage;
        if (u && ((m = u.link) == null ? void 0 : m.hash) === e)
          return (
            u.passwordInvalid && ae().setIsPasswordProtected(!0),
            {pageParams: [void 0, 1], pages: [u]}
          );
      },
      initialPageParam: 1,
      getNextPageParam: u => {
        if (!u.folderChildren) return;
        const x = u.folderChildren.current_page,
          m = u.folderChildren.last_page;
        if (!(x >= m)) return x + 1;
      },
      enabled: (!!e && !a) || i != null,
      placeholderData: Jt,
    });
  return {
    ...o,
    link: (l = o.data) == null ? void 0 : l.pages[0].link,
    entries:
      (c = o.data) == null
        ? void 0
        : c.pages.flatMap(u => {
            var x;
            return (x = u.folderChildren) == null ? void 0 : x.data;
          }),
  };
}
function _r({hash: e, page: s = 1, order: n, password: r}) {
  return E.get(`shareable-links/${e}`, {
    params: {loader: 'shareableLinkPage', page: s, order: n, password: r},
  }).then(a => a.data);
}
function zr({password: e, linkHash: s}) {
  return E.post(`shareable-links/${s}/check-password`, {password: e}).then(
    n => n.data,
  );
}
function $r() {
  return N({
    mutationFn: e => zr(e),
    onSuccess: (e, s) => {
      e.matches && ae().setPassword(s.password);
    },
    onError: e => T(e, h('Could not create link')),
  });
}
function Or({linkId: e, password: s}) {
  return E.post(`shareable-links/${e}/import`, {password: s}).then(n => n.data);
}
function Ur() {
  const e = B(s => s.password);
  return N({
    mutationFn: s => Or({...s, password: e}),
    onSuccess: async () => {
      await C.invalidateQueries({queryKey: R.fetchShareableLink()}),
        F(h('Item imported into your drive'));
    },
    onError: s => T(s, h('Could not create link')),
  });
}
function Es() {
  var o;
  const {link: e} = se(),
    {user: s, isLoggedIn: n} = K(),
    {downloadUrl: r} = us(e == null ? void 0 : e.entry),
    a = Ur(),
    i =
      (o = e == null ? void 0 : e.entry) == null
        ? void 0
        : o.users.find(l => l.id === (s == null ? void 0 : s.id));
  return e != null && e.entry
    ? t.jsxs('div', {
        children: [
          e.allow_download && t.jsx(Br, {downloadUrl: r}),
          !i &&
            n &&
            e.allow_edit &&
            t.jsxs(oe, {
              onItemSelected: l => {
                l === 'import'
                  ? a.mutate({linkId: e.id})
                  : l === 'download' && r && Ke(r);
              },
              children: [
                t.jsx(M, {
                  className: 'ml-6',
                  disabled: a.isPending,
                  children: t.jsx(es, {}),
                }),
                t.jsxs(le, {
                  children: [
                    t.jsx(L, {
                      value: 'download',
                      startIcon: t.jsx(qe, {}),
                      children: t.jsx(d, {message: 'Download'}),
                    }),
                    t.jsx(L, {
                      value: 'import',
                      startIcon: t.jsx(fr, {}),
                      children: t.jsx(d, {
                        message: 'Save a copy to your own drive',
                      }),
                    }),
                  ],
                }),
              ],
            }),
        ],
      })
    : null;
}
function Br({downloadUrl: e}) {
  return t.jsxs(f.Fragment, {
    children: [
      t.jsx(ie, {
        label: t.jsx(d, {message: 'Download'}),
        children: t.jsx(M, {
          className: 'md:hidden',
          onClick: () => {
            e && Ke(e);
          },
          children: t.jsx(qe, {}),
        }),
      }),
      t.jsx(D, {
        className: 'max-md:hidden',
        size: 'sm',
        variant: 'flat',
        color: 'chip',
        startIcon: t.jsx(qe, {}),
        onClick: () => {
          e && Ke(e);
        },
        children: t.jsx(d, {message: 'Download'}),
      }),
    ],
  });
}
function Ps() {
  const {link: e} = se(),
    s = ts();
  return t.jsx(Sn, {
    size: 'md',
    color: 'bg',
    className: 'flex-shrink-0',
    rightChildren: (e == null ? void 0 : e.entry) && t.jsx(Es, {}),
    menuPosition: 'shareable-link-page',
    hideLogo: s,
    children:
      (e == null ? void 0 : e.entry) &&
      e.entry.type !== 'folder' &&
      t.jsxs('div', {
        className: 'flex items-center gap-10',
        children: [
          t.jsx(Se, {className: 'flex-shrink-0', type: e.entry.type}),
          t.jsx('div', {
            className:
              'font-medium whitespace-nowrap overflow-hidden overflow-ellipsis flex-auto',
            children: e.entry.name,
          }),
        ],
      }),
  });
}
function Kr() {
  const {trans: e} = U(),
    {hash: s} = rt(),
    n = e({message: 'Password'}),
    [r, a] = f.useState(''),
    i = $r(),
    o = s ? s.split(':')[0] : null,
    l = i.data && !i.data.matches;
  return t.jsxs('div', {
    className: 'flex h-screen flex-col bg-alt',
    children: [
      t.jsx(Ps, {}),
      t.jsx('div', {
        className: 'mx-auto my-80 px-10 md:px-20',
        children: t.jsxs('div', {
          className:
            'flex max-w-[560px] flex-col items-center gap-40 rounded border bg p-24 md:flex-row md:gap-14',
          children: [
            t.jsx('div', {
              className: 'h-132 w-[165px]',
              children: t.jsx(ke, {src: kn}),
            }),
            t.jsxs('form', {
              onSubmit: c => {
                c.preventDefault(), i.mutate({linkHash: o, password: r});
              },
              children: [
                t.jsx('span', {
                  className: 'text-sm',
                  children: t.jsx(d, {
                    message:
                      'The link you are trying to access is password protected.',
                  }),
                }),
                t.jsx(Qe, {
                  autoFocus: !0,
                  placeholder: n,
                  'aria-label': n,
                  className: 'mb-20 mt-10',
                  type: 'password',
                  value: r,
                  required: !0,
                  errorMessage:
                    l && t.jsx(d, {message: 'Password is not valid'}),
                  onChange: c => {
                    a(c.target.value);
                  },
                }),
                t.jsx('div', {
                  className: 'text-right',
                  children: t.jsx(D, {
                    variant: 'flat',
                    color: 'primary',
                    type: 'submit',
                    className: 'w-full md:w-auto',
                    disabled: i.isPending,
                    children: t.jsx(d, {message: 'Enter'}),
                  }),
                }),
              ],
            }),
          ],
        }),
      }),
    ],
  });
}
const Ds = In.forwardRef(
  (
    {
      entry: e,
      className: s,
      isSelected: n,
      isMobileMode: r,
      footerAdornment: a,
      ...i
    },
    o,
  ) =>
    t.jsxs('div', {
      ...i,
      ref: o,
      className: P(
        'shadow rounded border aspect-square flex flex-col grid-item transition-shadow-opacity select-none overflow-hidden outline-none dark:bg-alt',
        n && 'border-primary',
        s,
      ),
      children: [
        t.jsx('div', {
          className: 'flex-auto relative min-h-0',
          children: t.jsx(dt, {
            className: 'h-full w-full',
            iconClassName: 'block w-70 h-70 absolute m-auto inset-0',
            file: e,
          }),
        }),
        t.jsx(qr, {entry: e, isSelected: n, isMobile: r, adornment: a}),
      ],
    }),
);
function qr({entry: e, isSelected: s, isMobile: n, adornment: r}) {
  return t.jsxs('div', {
    className: P(
      'text-sm h-48 flex-shrink-0 flex items-center',
      n ? 'justify-between gap-10 pl-18 pr-2' : 'justify-center px-16',
      s && 'bg-primary-light/20',
    ),
    children: [
      t.jsx('div', {
        className:
          'min-w-0 whitespace-nowrap overflow-hidden overflow-ellipsis',
        children: e.name,
      }),
      r,
    ],
  });
}
function Wr({entries: e, onEntrySelected: s}) {
  return t.jsx('div', {
    className: 'file-grid',
    children: e.map((n, r) =>
      t.jsx(
        Ds,
        {
          tabIndex: -1,
          className: 'hover:shadow-md cursor-pointer bg',
          entry: n,
          onContextMenu: a => {
            a.preventDefault();
          },
          onKeyDown: a => {
            (a.key === 'Enter' || a.key === ' ') && s(n, r);
          },
          onClick: () => {
            s(n, r);
          },
        },
        n.id,
      ),
    ),
  });
}
const Vr = [];
En();
var Yt, Gt;
const Bt = {
    uploadQueueIsOpen: !1,
    contextMenuData: null,
    selectedEntries: new Set(),
    entriesBeingDragged: [],
    activeActionDialog: null,
    sidebarExpandedKeys: [],
    viewMode: $e(
      'drive.viewMode',
      ((Gt = (Yt = at().settings) == null ? void 0 : Yt.drive) == null
        ? void 0
        : Gt.default_view) || 'grid',
    ),
    sortDescriptor: {orderBy: 'updated_at', orderDir: 'desc'},
  },
  y = Zt()(
    Xt((e, s) => ({
      ...Bt,
      setUploadQueueIsOpen: n => {
        e(r => {
          r.uploadQueueIsOpen = n;
        });
      },
      setContextMenuData: n => {
        e(r => {
          r.contextMenuData = n;
        });
      },
      setSortDescriptor: n => {
        e(r => {
          var i;
          const a = (i = s().activePage) == null ? void 0 : i.id;
          a && st('selectedSorting', {...$e('selectedSorting'), [a]: n}),
            (r.sortDescriptor = n);
        });
      },
      setActivePage: n => {
        e(r => {
          var i;
          r.activePage = n;
          const a = (i = $e('selectedSorting')) == null ? void 0 : i[n.id];
          r.sortDescriptor = a || n.sortDescriptor;
        });
      },
      setEntriesBeingDragged: n => {
        e(r => {
          r.entriesBeingDragged = n;
        });
      },
      setActiveActionDialog: (n, r = Vr) => {
        e(a => {
          const i = s().activeActionDialog;
          ((i == null ? void 0 : i.name) !== n || i.entries !== r) &&
            (a.activeActionDialog = n ? {name: n, entries: r} : null);
        });
      },
      setViewMode: n => {
        e(r => {
          (r.viewMode = n), st('drive.viewMode', n);
        });
      },
      setSidebarExpandedKeys: n =>
        e(r => {
          r.sidebarExpandedKeys = n;
        }),
      expandSidebarItem: n =>
        e(r => {
          r.sidebarExpandedKeys.includes(n) || r.sidebarExpandedKeys.push(n);
        }),
      collapseSidebarItem: n =>
        e(r => {
          const a = r.sidebarExpandedKeys.indexOf(n);
          a > -1 && r.sidebarExpandedKeys.splice(a, 1);
        }),
      toggleSidebarItem: n =>
        e(r => {
          r.sidebarExpandedKeys.includes(n)
            ? r.expandSidebarItem(n)
            : r.collapseSidebarItem(n);
        }),
      selectEntries: (n, r) => {
        e(a => {
          r || a.selectedEntries.clear(),
            n.forEach(i => i && a.selectedEntries.add(i));
        });
      },
      deselectEntries: n => {
        e(r => {
          r.selectedEntries.size &&
            (n === 'all'
              ? (r.selectedEntries = new Set())
              : n.forEach(a => r.selectedEntries.delete(a)));
        });
      },
      reset: () => {
        e(Bt);
      },
    })),
  );
function p() {
  return y.getState();
}
function Qr() {
  const e = y(s => s.activeActionDialog);
  return e == null ? void 0 : e.entries[0];
}
function Hr(e) {
  return e
    ? E.post(`file-entries/${e}/shareable-link`).then(s => s.data)
    : Promise.reject(new Error('Invalid entry id'));
}
function Fs() {
  return N({
    mutationFn: ({entryId: e}) => Hr(e),
    onSuccess: (e, {entryId: s}) => {
      C.setQueryData(R.fetchEntryShareableLink(s), e);
    },
    onError: e => T(e, h('Could not create link')),
  });
}
function Yr({entryIds: e}) {
  return E.post('file-entries/star', {entryIds: e}).then(s => s.data);
}
function Gr() {
  return N({
    mutationFn: e => Yr(e),
    onSuccess: (e, {entryIds: s}) => {
      O(),
        F(
          h('Starred [one 1 item|other :count items]', {
            values: {count: s.length},
          }),
        );
    },
    onError: e => T(e, h('Could not star items')),
  });
}
function Zr({entryIds: e}) {
  return E.post('file-entries/unstar', {entryIds: e}).then(s => s.data);
}
function Xr() {
  return N({
    mutationFn: e => Zr(e),
    onSuccess: (e, {entryIds: s}) => {
      O(),
        F(
          h('Removed star from [one 1 item|other :count items]', {
            values: {count: s.length},
          }),
        );
    },
    onError: e => T(e, h('Could not remove star')),
  });
}
function Jr(e) {
  return E.post('file-entries/duplicate', e).then(s => s.data);
}
function ea() {
  return N({
    mutationFn: e => (
      F.loading(
        h('Duplicating [one 1 item|other :count items]...', {
          values: {count: e.entryIds.length},
        }),
        {disableExitAnimation: !0},
      ),
      Jr(e)
    ),
    onSuccess: (e, s) => {
      O(),
        C.invalidateQueries({queryKey: R.fetchStorageSummary}),
        F(
          h('Duplicated [one 1 item|other :count items]', {
            values: {count: s.entryIds.length},
          }),
          {disableEnterAnimation: !0},
        );
    },
    onError: e =>
      T(e, h('Could not duplicate items'), null, {disableEnterAnimation: !0}),
  });
}
const ta = '' + new URL('add-files-107c40dd.svg', import.meta.url).href,
  sa = '' + new URL('time-management-5219b76e.svg', import.meta.url).href,
  Kt = '' + new URL('file-searching-49556098.svg', import.meta.url).href,
  na = '' + new URL('throw-away-389510cc.svg', import.meta.url).href,
  ra = '' + new URL('loving-it-585c130e.svg', import.meta.url).href,
  Ns = '' + new URL('share-70babf29.svg', import.meta.url).href,
  Fe = {orderBy: 'updated_at', orderDir: 'desc'};
function bt(e) {
  return {
    ...Cs(e.hash),
    canUpload: e.permissions['files.create'] || e.permissions['files.update'],
    label: e.name,
    folder: e,
  };
}
function Cs(e) {
  return {
    id: e,
    label: '',
    path: et(e),
    hasActions: !0,
    canUpload: !1,
    sortDescriptor: Fe,
    isFolderPage: !0,
    noContentMessage: () => ({
      title: h('Drop files or folders here'),
      description: h('Or use the "Upload" button'),
      image: ta,
    }),
  };
}
function et(e) {
  return e === '0' ? '/drive' : `/drive/folders/${e}`;
}
const aa = at().rootFolder,
  _ = bt(aa),
  ia = {
    id: 'recent',
    label: h('Recent'),
    path: '/drive/recent',
    disableSort: !0,
    sortDescriptor: {orderBy: 'created_at', orderDir: 'desc'},
    queryParams: {recentOnly: !0},
    noContentMessage: () => ({
      title: h('No recent entries'),
      description: h('You have not uploaded any files or folders yet'),
      image: sa,
    }),
  },
  H = {
    id: 'search',
    label: h('Search results'),
    path: '/drive/search',
    sortDescriptor: Fe,
    noContentMessage: e =>
      e
        ? {
            title: h('No matching results'),
            description: h('Try changing your search query or filters'),
            image: Kt,
          }
        : {
            title: h('Begin typing or select a filter to search'),
            description: h('Search for files, folders and other content'),
            image: Kt,
          },
  },
  ge = {
    id: 'shares',
    label: h('Shared'),
    path: '/drive/shares',
    sortDescriptor: Fe,
    queryParams: {sharedOnly: !0},
    noContentMessage: () => ({
      title: h('Shared with me'),
      description: h('Files and folders other people have shared with you'),
      image: Ns,
    }),
  },
  A = {
    id: 'trash',
    label: h('Trash'),
    path: '/drive/trash',
    sortDescriptor: Fe,
    hasActions: !0,
    queryParams: {deletedOnly: !0},
    noContentMessage: () => ({
      title: h('Trash is empty'),
      description: h('There are no files or folders in your trash currently'),
      image: na,
    }),
  },
  oa = {
    id: 'starred',
    label: h('Starred'),
    path: '/drive/starred',
    sortDescriptor: Fe,
    queryParams: {starredOnly: !0},
    noContentMessage: () => ({
      title: h('Nothing is starred'),
      description: h(
        'Add stars to files and folders that you want to easily find later',
      ),
      image: ra,
    }),
  },
  la = [_, ia, H, ge, A, oa];
function ca(e) {
  return E.post('file-entries/delete', e).then(s => s.data);
}
function Ne() {
  return N({
    mutationFn: e => (F.loading(da(e), {disableExitAnimation: !0}), ca(e)),
    onSuccess: (e, {entryIds: s, emptyTrash: n, deleteForever: r}) => {
      O(),
        C.invalidateQueries({queryKey: R.fetchStorageSummary}),
        n
          ? F(h('Emptied trash'), {disableEnterAnimation: !0})
          : r
          ? F(
              h('Permanently deleted [one 1 item|other :count items]', {
                values: {count: s.length},
              }),
              {disableEnterAnimation: !0},
            )
          : F(
              h('Moved [one 1 item|other :count items] to trash', {
                values: {count: s.length},
              }),
              {disableEnterAnimation: !0},
            );
    },
    onError: (e, {emptyTrash: s}) => {
      const n = Pn(e);
      n
        ? F.danger(n, {disableEnterAnimation: !0})
        : s
        ? F.danger('could not empty trash', {disableEnterAnimation: !0})
        : F.danger('Could not delete items', {disableEnterAnimation: !0});
    },
  });
}
function da(e) {
  return e.emptyTrash
    ? h('Emptying trash...')
    : e.deleteForever
    ? h('Deleting files...')
    : h('Moving to trash...');
}
function Ms() {
  return N({mutationFn: e => ua(e), onSuccess: () => O()});
}
function ua({entryIds: e, ...s}) {
  return E.post(`file-entries/${e.join(',')}/unshare`, s).then(n => n.data);
}
function As() {
  return N({
    mutationFn: e => ma(e),
    onSuccess: (e, s) => {
      O(),
        F(
          h('Restored [one 1 item|other :count items]', {
            values: {count: s.entryIds.length},
          }),
        );
    },
    onError: e => T(e, h('Could not restore items')),
  });
}
function ma(e) {
  return E.post('file-entries/restore', e).then(s => s.data);
}
function Ls(e) {
  const s = Rs(e),
    n = yt(e),
    r = ha(e),
    a = fa(e),
    i = xa(e),
    o = pa(e),
    l = ga(e),
    c = va(e),
    u = ja(e),
    x = Ts(e),
    m = _s(e),
    g = ba(e);
  return [s, n, r, a, i, o, l, c, u, x, m, g].filter(j => !!j);
}
function Rs(e) {
  if (e.some(s => s.type !== 'folder'))
    return {
      label: h('Preview'),
      icon: xr,
      key: 'preview',
      execute: () => {
        p().setActiveActionDialog('preview', e);
      },
    };
}
function yt(e) {
  const s = y(n => n.activePage);
  if (
    !(e.length > 1 || !e.every(n => n.permissions['files.update']) || s === A)
  )
    return {
      label: h('Share'),
      icon: ws,
      key: 'share',
      execute: () => {
        p().setActiveActionDialog('share', e);
      },
    };
}
function ha(e) {
  const s = y(r => r.activePage),
    n = Fs();
  if (
    !(e.length > 1 || !e.every(r => r.permissions['files.update']) || s === A)
  )
    return {
      label: h('Get link'),
      icon: Jn,
      key: 'getLink',
      execute: () => {
        n.mutate({entryId: e[0].id}), p().setActiveActionDialog('getLink', e);
      },
    };
}
function fa(e) {
  const s = y(r => r.activePage),
    n = Gr();
  if (
    !(
      e.every(r => {
        var a;
        return (a = r.tags) == null
          ? void 0
          : a.find(i => i.name === 'starred');
      }) ||
      !e.every(r => r.permissions['files.update']) ||
      s === A
    )
  )
    return {
      label: h('Add to starred'),
      icon: pr,
      key: 'addToStarred',
      execute: () => {
        n.mutate({entryIds: e.map(r => r.id)}), p().selectEntries([]);
      },
    };
}
function xa(e) {
  const s = y(r => r.activePage),
    n = Xr();
  if (
    !(
      !e.every(r => {
        var a;
        return (a = r.tags) == null
          ? void 0
          : a.find(i => i.name === 'starred');
      }) || s === A
    )
  )
    return {
      label: h('Remove from starred'),
      icon: gr,
      key: 'removeFromStarred',
      execute: () => {
        n.mutate({entryIds: e.map(r => r.id)}), p().selectEntries([]);
      },
    };
}
function pa(e) {
  const s = y(n => n.activePage);
  if (!(!e.every(n => n.permissions['files.update']) || s === ge || s === A))
    return {
      label: h('Move to'),
      icon: vr,
      key: 'moveTo',
      execute: () => {
        p().setActiveActionDialog('moveTo', e);
      },
    };
}
function ga(e) {
  const s = y(n => n.activePage);
  if (
    !(e.length > 1 || !e.every(n => n.permissions['files.update']) || s === A)
  )
    return {
      label: h('Rename'),
      icon: jr,
      key: 'rename',
      execute: () => {
        p().setActiveActionDialog('rename', e);
      },
    };
}
function va(e) {
  const s = y(r => r.activePage),
    n = ea();
  if (
    !(e.length > 1 || !e.every(r => r.permissions['files.update']) || s === A)
  )
    return {
      label: h('Make a copy'),
      icon: br,
      key: 'makeCopy',
      execute: () => {
        n.mutate({entryIds: e.map(r => r.id)}), p().selectEntries([]);
      },
    };
}
function ja(e) {
  const {downloadUrl: s} = us(e[0], {downloadHashes: e.map(n => n.hash)});
  if (e.every(n => n.permissions['files.download']))
    return {
      label: h('Download'),
      icon: qe,
      key: 'download',
      execute: () => {
        s && Ke(s), p().selectEntries([]);
      },
    };
}
function Ts(e) {
  const s = Ne(),
    n = y(r => r.activePage);
  if (!(n === ge || !e.every(r => r.permissions['files.delete'])))
    return {
      label: n === A ? h('Delete forever') : h('Remove'),
      icon: ut,
      key: 'delete',
      execute: () => {
        n === A
          ? p().setActiveActionDialog('confirmAndDeleteForever', e)
          : (s.mutate({entryIds: e.map(r => r.id), deleteForever: n === A}),
            p().selectEntries([]));
      },
    };
}
function ba(e) {
  const s = As();
  if (
    !(
      y(r => r.activePage) !== A || !e.every(r => r.permissions['files.delete'])
    )
  )
    return {
      label: h('Restore'),
      icon: yr,
      key: 'restore',
      execute: () => {
        s.mutate({entryIds: e.map(r => r.id)}), p().selectEntries([]);
      },
    };
}
function _s(e) {
  const s = Ms();
  if (y(r => r.activePage) === ge)
    return {
      label: h('Remove'),
      icon: ut,
      key: 'removeSharedEntry',
      execute: () => {
        s.mutate(
          {entryIds: e.map(r => r.id), userId: 'me'},
          {
            onSuccess: (r, a) => {
              F(
                h('Removed [one 1 item|other {count} items]', {
                  values: {count: a.entryIds.length},
                }),
              );
            },
            onError: r => T(r, h('Could not remove items')),
          },
        ),
          p().selectEntries([]);
      },
    };
}
function zs() {
  return ce({queryKey: R.fetchStorageSummary, queryFn: ya, select: wa});
}
function ya() {
  return E.get('user/space-usage').then(e => e.data);
}
function wa(e) {
  const s = e.available === null ? 0 : (e.used * 100) / e.available;
  return {
    usedFormatted: xe(e.used, 2),
    availableFormatted: xe(e.available, 0),
    percentage: s,
    used: e.used,
    available: e.available,
  };
}
const Sa = 8388608;
function Ce() {
  var x;
  const e = Z(m => m.uploadMultiple),
    s = y(m => m.activePage),
    {data: n} = zs(),
    {workspaceId: r} = W(),
    a = ((x = s == null ? void 0 : s.folder) == null ? void 0 : x.id) || null,
    {uploads: i} = He(),
    o = i.max_size || Sa,
    l = i.allowed_extensions,
    c = i.blocked_extensions;
  return {
    uploadFiles: f.useCallback(
      (m, g = {}) => {
        if (
          (g.metadata || (g.metadata = {}),
          (g.metadata.workspaceId = r),
          g.metadata.parentId || (g.metadata.parentId = a),
          (m = [...m].map(j => (j instanceof Lt ? j : new Lt(j)))),
          n)
        ) {
          const j = m.reduce((b, S) => b + S.size, 0),
            w = n.used,
            v = n.available;
          if (j + w > v) {
            F.danger(
              h(
                'You have exhausted your allowed space of :space. Delete some files or upgrade your plan.',
                {values: {space: n.availableFormatted}},
              ),
              {action: {action: '/pricing', label: h('Upgrade')}},
            );
            return;
          }
        }
        e(m, {
          ...g,
          restrictions: {
            maxFileSize: o,
            allowedFileTypes: l,
            blockedFileTypes: c,
          },
          onSuccess: (j, w) => {
            var v;
            (v = g == null ? void 0 : g.onSuccess) == null || v.call(g, j, w),
              O(),
              C.invalidateQueries({queryKey: R.fetchStorageSummary});
          },
        }),
          p().setUploadQueueIsOpen(!0);
      },
      [e, a, r, l, c, o, n],
    ),
  };
}
function $s(e) {
  const s = ka(e),
    n = Ia(e),
    r = Ea(e),
    a = Pa();
  return [s, n, r, a].filter(i => !!i);
}
function ka(e) {
  if (!(!e.folder || !e.folder.permissions['files.update']))
    return {
      label: h('New folder'),
      icon: gt,
      key: 'newFolder',
      execute: () => {
        e.folder && p().setActiveActionDialog('newFolder', [e.folder]);
      },
    };
}
function Ia(e) {
  const {uploadFiles: s} = Ce();
  if (!(!e.folder || !e.folder.permissions['files.update']))
    return {
      label: h('Upload files'),
      icon: Ss,
      key: 'uploadFiles',
      execute: async () => {
        s(await Oe({multiple: !0}));
      },
    };
}
function Ea(e) {
  const {uploadFiles: s} = Ce();
  if (!(!e.folder || !e.folder.permissions['files.update']))
    return {
      label: h('Upload folder'),
      icon: ks,
      key: 'uploadFolder',
      execute: async () => {
        s(await Oe({directory: !0}));
      },
    };
}
function Pa(e) {
  const s = Ne();
  if (y(r => r.activePage) === A)
    return {
      label: h('Empty trash'),
      icon: wr,
      key: 'emptyTrash',
      execute: () => {
        s.mutate({entryIds: [], emptyTrash: !0}), p().selectEntries([]);
      },
    };
}
function tt({children: e, entries: s, page: n}) {
  return (n == null ? void 0 : n.id) === _.id
    ? t.jsx(Wt, {page: _, children: e})
    : n === A
    ? t.jsx(Wt, {page: A, children: e})
    : n != null && n.folder
    ? t.jsx(qt, {entries: [n.folder], children: e})
    : s != null && s.length
    ? t.jsx(qt, {entries: s, children: e})
    : null;
}
function qt({entries: e, children: s}) {
  const n = Ls(e);
  return t.jsx(Os, {actions: n, children: s});
}
function Wt({page: e, children: s}) {
  const n = $s(e);
  return t.jsx(Os, {actions: n, children: s});
}
function Os({actions: e, children: s}) {
  return t.jsxs(oe, {
    children: [
      s,
      t.jsx(le, {
        children: e.map(n =>
          t.jsx(
            L,
            {
              onSelected: () => {
                n.execute();
              },
              value: n.key,
              startIcon: f.createElement(n.icon),
              children: t.jsx(d, {...n.label}),
            },
            n.key,
          ),
        ),
      }),
    ],
  });
}
const Us = Dn(e => xe(e)),
  wt = [
    {
      key: 'name',
      allowsSorting: !0,
      header: () => t.jsx(d, {message: 'Name'}),
      visibleInMode: 'all',
      width: 'flex-3 min-w-200',
      body: e => t.jsx(Da, {entry: e}),
    },
    {
      key: 'updated_at',
      allowsSorting: !0,
      maxWidth: 'max-w-184',
      header: () => t.jsx(d, {message: 'Last modified'}),
      body: e => t.jsx(Ue, {date: e.updated_at}),
    },
    {
      key: 'file_size',
      allowsSorting: !0,
      header: () => t.jsx(d, {message: 'Size'}),
      maxWidth: 'max-w-144',
      body: e => Us(e.file_size) ?? '-',
    },
    {
      key: 'actions',
      hideHeader: !0,
      header: () => t.jsx(d, {message: 'Actions'}),
      align: 'end',
      width: 'w-42 flex-shrink-0',
      visibleInMode: 'all',
      body: e => t.jsx(Fa, {entry: e}),
    },
  ];
function Da({entry: e}) {
  const {isCollapsedMode: s} = f.useContext(mt),
    n = s ? 'w-30 h-30' : 'w-24 h-24';
  return t.jsxs('div', {
    className: 'flex items-center gap-14',
    children: [
      t.jsx(dt, {className: P('rounded', n), iconClassName: n, file: e}),
      t.jsxs('div', {
        className: 'min-w-0',
        children: [
          t.jsx('div', {
            className: 'overflow-hidden overflow-ellipsis',
            children: e.name,
          }),
          s &&
            t.jsxs('div', {
              className: 'text-muted text-xs flex items-center mt-4',
              children: [
                t.jsx(Ue, {date: e.updated_at}),
                t.jsx('div', {children: '·'}),
                t.jsx('div', {children: Us(e.file_size)}),
              ],
            }),
        ],
      }),
    ],
  });
}
function Fa({entry: e}) {
  const {selectedRows: s} = f.useContext(mt);
  return s.length
    ? t.jsx(ss, {className: 'block mr-8', checked: s.includes(e.id)})
    : t.jsx(tt, {
        entries: [e],
        children: t.jsx(M, {className: 'text-muted', children: t.jsx(ht, {})}),
      });
}
const Na = wt.filter(e => e.key !== 'updated_at');
function Ca({entries: e, onEntrySelected: s}) {
  const n = B(a => a.activeSort),
    r = ts();
  return t.jsx(ms, {
    columns: r ? Na : wt,
    data: e,
    sortDescriptor: n,
    onSortChange: a => {
      ae().setActiveSort(a);
    },
    onAction: (a, i) => {
      s(a, i);
    },
    enableSelection: !1,
  });
}
function Ma(e, s) {
  var r;
  let n = e.hash;
  return (
    s && ((r = e.entry) == null ? void 0 : r.hash) !== s && (n = `${n}:${s}`), n
  );
}
function Bs() {
  const {link: e} = se(),
    s = Fn();
  return n => {
    e && s(`/drive/s/${Ma(e, n)}`);
  };
}
function Aa({className: e}) {
  const {pathname: s} = ns(),
    n = Bs(),
    [r, a] = f.useState(),
    i = B(v => v.viewMode),
    o = f.useRef(null),
    {
      link: l,
      entries: c,
      isFetchingNextPage: u,
      hasNextPage: x,
      fetchNextPage: m,
      isPlaceholderData: g,
    } = se();
  if (
    (f.useEffect(() => {
      a(void 0);
    }, [s]),
    f.useEffect(() => {
      const v = o.current;
      if (!v) return;
      const b = new IntersectionObserver(([S]) => {
        S.isIntersecting && x && m();
      });
      return (
        b.observe(v),
        () => {
          b.unobserve(v);
        }
      );
    }, [x, m]),
    !l || g)
  )
    return t.jsx('div', {
      className: P('flex justify-center', e),
      children: t.jsx(pe, {isIndeterminate: !0}),
    });
  const j = (v, b) => {
      v.type === 'folder' ? n(v.hash) : a(b);
    },
    w = c || [];
  return t.jsxs(f.Fragment, {
    children: [
      t.jsx(it, {slot: 'file-preview', className: 'mb-40'}),
      t.jsxs('div', {
        className: P(
          'file-grid-container flex-auto overflow-auto px-14 pb-14 md:px-24 md:pb-24',
          e,
        ),
        children: [
          i === 'grid'
            ? t.jsx(Wr, {entries: w, onEntrySelected: j})
            : t.jsx(Ca, {entries: w, onEntrySelected: j}),
          t.jsx('span', {ref: o, 'aria-hidden': !0}),
          t.jsx(V, {
            children:
              u &&
              t.jsx($.div, {
                className: 'mt-24 flex w-full justify-center',
                ...ot,
                children: t.jsx(pe, {
                  isIndeterminate: !0,
                  'aria-label': 'loading',
                }),
              }),
          }),
        ],
      }),
      t.jsx(de, {
        type: 'modal',
        isOpen: r != null,
        onClose: () => a(void 0),
        children: t.jsx(hs, {
          entries: w,
          defaultActiveIndex: r,
          allowDownload: l.allow_download,
        }),
      }),
    ],
  });
}
function Ks({children: e, className: s}) {
  return t.jsx('div', {className: P(s, 'dashboard-grid-header'), children: e});
}
function qs({hash: e, params: s, isEnabled: n = !0}) {
  return ce({
    queryKey: R.fetchFolderPath(e, s),
    queryFn: () => La(e, s),
    enabled: !!e && n,
  });
}
function La(e, s) {
  return E.get(`folders/${e}/path`, {params: s}).then(n => n.data);
}
function Ra({className: e, folder: s, link: n}) {
  const r = Bs(),
    a = B(l => l.password),
    i = qs({
      hash: s == null ? void 0 : s.hash,
      params: {shareable_link: n.id, password: a},
    });
  let o;
  if (i.isLoading) o = null;
  else {
    const l = [];
    i.data &&
      i.data.path.forEach(c => {
        l.push({folder: c, label: t.jsx(t.Fragment, {children: c.name})});
      }),
      (o = t.jsx(jt, {
        size: 'lg',
        isNavigation: !0,
        children: l.map(c =>
          t.jsx(
            We,
            {
              onSelected: () => {
                r(c.folder.hash);
              },
              children: c.label,
            },
            c.folder.hash,
          ),
        ),
      }));
  }
  return t.jsx('div', {className: P('h-36 flex-shrink-0', e), children: o});
}
const Vt = [
  {id: 'file_size', label: h('Size')},
  {id: 'name', label: h('Name')},
  {id: 'updated_at', label: h('Last modified')},
  {id: 'created_at', label: h('Upload date')},
  {id: 'type', label: h('Type')},
  {id: 'extension', label: h('Extension')},
];
function Ws({descriptor: e, onChange: s, isDisabled: n = !1}) {
  const r = e.orderBy,
    a = e.orderDir,
    i = Vt.find(o => o.id === r);
  return t.jsxs(oe, {
    showCheckmark: !0,
    selectionMode: 'multiple',
    selectedValue: [a || 'desc', r || ''],
    onItemSelected: o => {
      s(
        o === 'asc' || o === 'desc'
          ? {orderBy: r, orderDir: o}
          : {orderBy: o, orderDir: a},
      );
    },
    children: [
      t.jsx(D, {
        className: 'text-muted',
        variant: 'text',
        size: 'sm',
        startIcon: t.jsx(Sr, {}),
        disabled: n,
        children: i ? t.jsx(d, {...i.label}) : null,
      }),
      t.jsxs(le, {
        children: [
          t.jsxs(Rt, {
            label: t.jsx(d, {message: 'Direction'}),
            children: [
              t.jsx(L, {
                value: 'asc',
                children: t.jsx(d, {message: 'Ascending'}),
              }),
              t.jsx(L, {
                value: 'desc',
                children: t.jsx(d, {message: 'Descending'}),
              }),
            ],
          }),
          t.jsx(Rt, {
            label: t.jsx(d, {message: 'Sort By'}),
            children: Vt.map(o =>
              t.jsx(L, {value: o.id, children: t.jsx(d, {...o.label})}, o.id),
            ),
          }),
        ],
      }),
    ],
  });
}
function Ta() {
  const e = B(a => a.activeSort),
    {link: s, isFetching: n} = se(),
    r = s && s.entry;
  return t.jsxs('div', {
    className:
      'md:flex-row flex flex-col md:items-center gap-14 justify-between p-14 md:p-24 md:h-90',
    children: [
      r && t.jsx(Ra, {link: s, folder: s.entry, className: 'flex-auto'}),
      r &&
        t.jsxs('div', {
          className:
            'flex items-center justify-between md:justify-start text-muted',
          children: [
            t.jsx(Ws, {
              isDisabled: n,
              descriptor: e,
              onChange: a => {
                ae().setActiveSort(a);
              },
            }),
            t.jsx('div', {
              className: 'md:border-l md:pl-10 ml-10',
              children: t.jsx(M, {
                onClick: () => {
                  ae().setViewMode(ae().viewMode === 'grid' ? 'list' : 'grid');
                },
                children: t.jsx(kr, {}),
              }),
            }),
          ],
        }),
    ],
  });
}
function _a() {
  const {entries: e, isFetched: s} = se(),
    n = s && !(e != null && e.length);
  return t.jsxs(fs, {
    name: 'folder-preview',
    children: [
      t.jsx(xs, {
        hideToggleButton: !0,
        rightChildren: t.jsx(Es, {}),
        color: 'bg',
      }),
      t.jsx(Ks, {children: t.jsx(Ta, {})}),
      t.jsx(rs, {
        children: t.jsx(ps, {children: n ? t.jsx(za, {}) : t.jsx(Aa, {})}),
      }),
    ],
  });
}
function za({className: e}) {
  return t.jsx(Ye, {
    className: P(e, 'mt-80'),
    image: t.jsx(ke, {src: Ns}),
    title: t.jsx(d, {message: 'Folder is empty'}),
    description: t.jsx(d, {
      message: 'No files have been uploaded to this folder yet',
    }),
  });
}
function $a() {
  const {link: e} = se();
  return e != null && e.entry
    ? t.jsxs('div', {
        className: 'flex flex-col h-screen bg-alt',
        children: [
          t.jsx(Ps, {}),
          t.jsx(it, {slot: 'file-preview', className: 'mt-24'}),
          t.jsx(er, {
            entries: [e.entry],
            showHeader: !1,
            allowDownload: e.allow_download,
          }),
        ],
      })
    : null;
}
function Oa() {
  var o;
  const {status: e, link: s} = se(),
    {trans: n} = U(),
    r = B(l => l.isPasswordProtected),
    a = B(l => l.password);
  let i;
  if (e === 'pending')
    i = t.jsx('div', {
      className: 'flex h-screen flex-auto items-center justify-center',
      children: t.jsx(pe, {
        'aria-label': n({message: 'Loading link'}),
        isIndeterminate: !0,
      }),
    });
  else {
    if (!s && !r) return t.jsx(as, {});
    r && !a
      ? (i = t.jsx(Kr, {}))
      : ((o = s == null ? void 0 : s.entry) == null ? void 0 : o.type) ===
        'folder'
      ? (i = t.jsx(_a, {}))
      : (i = t.jsx($a, {}));
  }
  return t.jsx(gs.Provider, {
    value: {shareable_link: s == null ? void 0 : s.id, password: a},
    children: i,
  });
}
function Ua(e) {
  return t.jsx(Nn, {...e, role: 'meter progressbar'});
}
function Ba() {
  const {isLoading: e, data: s} = zs(),
    n = t.jsx('span', {
      className: P('whitespace-nowrap', e && 'invisible'),
      children: t.jsx(d, {
        message: ':used of :available used',
        values: {
          used: s == null ? void 0 : s.usedFormatted,
          available: s == null ? void 0 : s.availableFormatted,
        },
      }),
    });
  return t.jsxs('div', {
    className: 'pl-24 pt-24 mt-24 border-t flex items-start gap-16',
    children: [
      t.jsx(Ir, {className: 'icon-md -mt-4'}),
      t.jsx(Ua, {
        className: 'flex-auto max-w-144',
        size: 'xs',
        value: s == null ? void 0 : s.percentage,
        label: n,
        showValueLabel: !1,
        labelPosition: 'bottom',
      }),
    ],
  });
}
function Ka(e) {
  return N({
    mutationFn: s => qa(s),
    onSuccess: () => {
      F(h('Created workspace')),
        C.invalidateQueries({queryKey: q.fetchUserWorkspaces});
    },
    onError: s => Ie(s, e),
  });
}
function qa(e) {
  return E.post('workspace', e).then(s => s.data);
}
function Wa() {
  const e = Ee(),
    {formId: s, close: n} = Q(),
    r = Ka(e);
  return t.jsxs(X, {
    children: [
      t.jsx(J, {children: t.jsx(d, {message: 'Create workspace'})}),
      t.jsx(Y, {
        children: t.jsx(Pe, {
          form: e,
          id: s,
          onSubmit: () => {
            r.mutate(e.getValues(), {
              onSuccess: a => {
                n(a.workspace.id);
              },
            });
          },
          children: t.jsx(De, {
            name: 'name',
            autoFocus: !0,
            label: t.jsx(d, {message: 'Workspace name'}),
            minLength: 3,
            required: !0,
          }),
        }),
      }),
      t.jsxs(ve, {
        children: [
          t.jsx(D, {
            variant: 'text',
            onClick: n,
            children: t.jsx(d, {message: 'Cancel'}),
          }),
          t.jsx(D, {
            variant: 'flat',
            color: 'primary',
            type: 'submit',
            form: s,
            disabled: r.isPending,
            children: t.jsx(d, {message: 'Create'}),
          }),
        ],
      }),
    ],
  });
}
function Va(e) {
  return E.get(`workspace/${e}`).then(s => s.data);
}
function Qa(e) {
  return ce({queryKey: q.workspaceWithMembers(e), queryFn: () => Va(e)});
}
function Ha({workspaceId: e, ...s}) {
  return E.post(`workspace/${e}/invite`, s).then(n => n.data);
}
function Ya() {
  return N({
    mutationFn: e => Ha(e),
    onSuccess: (e, s) => {
      C.invalidateQueries({queryKey: q.workspaceWithMembers(s.workspaceId)});
    },
    onError: e => T(e),
  });
}
function Ga({workspaceId: e, inviteId: s, ...n}) {
  return E.post(`workspace/${e}/${s}/resend`, n).then(r => r.data);
}
function Za() {
  return N({
    mutationFn: e => Ga(e),
    onSuccess: () => {
      F('Invite sent');
    },
    onError: e => T(e),
  });
}
const Xa =
  /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
function Vs(e) {
  return !e || e.length > 320 ? !1 : Xa.test(e);
}
function Ja({workspaceId: e, member: s, ...n}) {
  const r = s.model_type,
    a = s.model_type === 'invite' ? s.id : s.member_id;
  return E.post(`workspace/${e}/${r}/${a}/change-role`, n).then(i => i.data);
}
function ei() {
  return N({
    mutationFn: e => Ja(e),
    onSuccess: (e, s) => {
      F(h('Role changed')),
        C.invalidateQueries({queryKey: q.workspaceWithMembers(s.workspaceId)});
    },
    onError: e => T(e),
  });
}
function ti({workspaceId: e, memberId: s, memberType: n}) {
  const r =
    n === 'invite' ? `workspace/invite/${s}` : `workspace/${e}/member/${s}`;
  return E.delete(r).then(a => a.data);
}
function Qs() {
  const {workspaceId: e, setWorkspaceId: s} = W(),
    {user: n} = K();
  return N({
    mutationFn: r => ti(r),
    onSuccess: (r, a) => {
      C.invalidateQueries({queryKey: q.fetchUserWorkspaces}),
        C.invalidateQueries({queryKey: q.workspaceWithMembers(a.workspaceId)}),
        a.memberId === (n == null ? void 0 : n.id) &&
          e === a.workspaceId &&
          s(lt.id);
    },
    onError: r => T(r),
  });
}
function Hs() {
  return t.jsx(je, {
    isDanger: !0,
    title: t.jsx(d, {message: 'Leave workspace'}),
    body: t.jsxs('div', {
      children: [
        t.jsx(d, {message: 'Are you sure you want to leave this workspace?'}),
        t.jsx('div', {
          className: 'font-semibold mt-8',
          children: t.jsx(d, {
            message:
              "All resources you've created in the workspace will be transferred to workspace owner.",
          }),
        }),
      ],
    }),
    confirm: t.jsx(d, {message: 'Leave'}),
  });
}
function si({workspace: e}) {
  const {data: s, isLoading: n} = Qa(e.id);
  return t.jsxs(X, {
    size: 'lg',
    children: [
      t.jsx(J, {children: t.jsx(d, {message: 'Manage workspace members'})}),
      t.jsx(Y, {
        children: n
          ? t.jsx('div', {
              className: 'flex items-center justify-center min-h-[238px]',
              children: t.jsx(pe, {
                isIndeterminate: !0,
                'aria-label': 'Loading workspace...',
              }),
            })
          : t.jsx(ni, {workspace: s.workspace}),
      }),
    ],
  });
}
function ni({workspace: e}) {
  const s = St(e),
    n = [...(e.members || []), ...(e.invites || [])];
  return t.jsxs('div', {
    children: [
      s.invite && t.jsx(ii, {workspace: e}),
      t.jsxs('div', {
        className: 'flex items-center gap-10 mb-14 text-base',
        children: [
          t.jsx(Er, {className: 'icon-sm'}),
          t.jsx(d, {
            message: 'Members of `:workspace`',
            values: {workspace: e.name},
          }),
        ],
      }),
      t.jsx(V, {
        initial: !1,
        children: n.map(r =>
          t.jsx(ri, {workspace: e, member: r}, `${r.model_type}.${r.id}`),
        ),
      }),
    ],
  });
}
function ri({workspace: e, member: s}) {
  return t.jsxs(
    $.div,
    {
      initial: {x: '-100%', opacity: 0},
      animate: {x: 0, opacity: 1},
      exit: {x: '100%', opacity: 0},
      transition: {type: 'tween', duration: 0.125},
      className: 'flex items-start text-sm gap-14 mb-20',
      children: [
        t.jsx('img', {
          className: 'w-36 h-36 rounded flex-shrink-0',
          src: s.avatar,
          alt: '',
        }),
        t.jsxs('div', {
          className:
            'md:flex flex-auto items-center justify-between gap-14 min-w-0',
          children: [
            t.jsxs('div', {
              className: 'overflow-hidden mb-10 md:mb-0 md:mr-10',
              children: [
                t.jsxs('div', {
                  className: 'flex items-center justify-start gap-6',
                  children: [
                    t.jsx('div', {
                      className:
                        'overflow-hidden text-ellipsis whitespace-nowrap',
                      children: s.display_name,
                    }),
                    t.jsx(ci, {workspace: e, member: s}),
                  ],
                }),
                t.jsx('div', {className: 'text-muted', children: s.email}),
              ],
            }),
            t.jsx(ai, {workspace: e, member: s}),
          ],
        }),
      ],
    },
    `${s.model_type}.${s.id}`,
  );
}
function St(e) {
  var i;
  const {user: s} = K(),
    n = {update: !1, invite: !1, delete: !1},
    r = ['update', 'invite', 'delete'],
    a =
      (i = e.members) == null
        ? void 0
        : i.find(o => o.id === (s == null ? void 0 : s.id));
  return (
    a &&
      r.forEach(o => {
        var l;
        n[o] =
          a.is_owner ||
          !!(
            (l = a.permissions) != null &&
            l.find(c => c.name === `workspace_members.${o}`)
          );
      }),
    n
  );
}
function ai({workspace: e, member: s}) {
  const [n, r] = f.useState(s.role_id),
    a = ei(),
    {user: i} = K(),
    o = St(e),
    l = s.model_type === 'member' && s.is_owner,
    c = s.model_type === 'member' && (i == null ? void 0 : i.id) === s.id,
    u =
      !o.update || l || c
        ? t.jsx('div', {
            className: 'text-muted ml-auto first:capitalize',
            children: t.jsx(d, {message: s.role_name}),
          })
        : t.jsx(Ys, {
            className: 'ml-auto flex-shrink-0',
            size: 'xs',
            value: n,
            isDisabled: a.isPending,
            onChange: x => {
              r(x), a.mutate({roleId: x, workspaceId: e.id, member: s});
            },
          });
  return t.jsxs(t.Fragment, {
    children: [
      u,
      !l &&
        (c || o.delete) &&
        t.jsx(oi, {type: c ? 'leave' : 'remove', member: s, workspace: e}),
    ],
  });
}
function ii({workspace: e}) {
  const {trans: s} = U(),
    [n, r] = f.useState([]),
    a = n.every(x => !x.invalid),
    i = x => x.description || x.name,
    [o, l] = f.useState(),
    c = Ya(),
    {data: u} = is(['workspaceRoles']);
  return (
    f.useEffect(() => {
      var x;
      !o &&
        (x = u == null ? void 0 : u.workspaceRoles) != null &&
        x.length &&
        l(u.workspaceRoles[0].id);
    }, [u, o]),
    t.jsxs('div', {
      className: 'mb-30',
      children: [
        t.jsx(ft, {
          value: n,
          onChange: r,
          displayWith: i,
          validateWith: x => {
            const m = !Vs(x.description);
            return {
              ...x,
              invalid: m,
              errorMessage: m ? s({message: 'Not a valid email'}) : void 0,
            };
          },
          placeholder: s({message: 'Enter email addresses'}),
          label: t.jsx(d, {message: 'Invite people'}),
        }),
        t.jsxs('div', {
          className: 'flex items-center gap-14 justify-between mt-14',
          children: [
            t.jsx(Ys, {onChange: l, value: o}),
            n.length && o
              ? t.jsx(D, {
                  variant: 'flat',
                  color: 'primary',
                  size: 'sm',
                  disabled: c.isPending || !a,
                  onClick: () => {
                    c.mutate(
                      {emails: n.map(x => i(x)), roleId: o, workspaceId: e.id},
                      {
                        onSuccess: () => {
                          r([]);
                        },
                      },
                    );
                  },
                  children: t.jsx(d, {message: 'Invite'}),
                })
              : null,
          ],
        }),
      ],
    })
  );
}
function oi({member: e, workspace: s, type: n}) {
  const r = Qs(),
    {close: a} = Q();
  return t.jsxs(de, {
    type: 'modal',
    onClose: i => {
      i &&
        (r.mutate({
          workspaceId: s.id,
          memberId: e.id,
          memberType: e.model_type,
        }),
        n === 'leave' && (a(), F(h('Left workspace'))));
    },
    children: [
      t.jsx(M, {
        size: 'md',
        className: 'text-muted flex-shrink-0',
        disabled: r.isPending,
        children: n === 'leave' ? t.jsx(os, {}) : t.jsx(be, {}),
      }),
      n === 'leave' ? t.jsx(Hs, {}) : t.jsx(li, {member: e}),
    ],
  });
}
function li({member: e}) {
  return t.jsx(je, {
    isDanger: !0,
    title: t.jsx(d, {message: 'Remove member'}),
    body: t.jsxs('div', {
      children: [
        t.jsx(d, {
          message: 'Are you sure you want to remove `:name`?',
          values: {name: e.display_name},
        }),
        t.jsx('div', {
          className: 'font-semibold mt-8',
          children: t.jsx(d, {
            message:
              'All workspace resources created by `:name` will be transferred to workspace owner.',
            values: {name: e.display_name},
          }),
        }),
      ],
    }),
    confirm: t.jsx(d, {message: 'Remove'}),
  });
}
function Ys({
  value: e,
  onChange: s,
  size: n = 'xs',
  className: r,
  isDisabled: a,
}) {
  var l;
  const {data: i} = is(['workspaceRoles']),
    o =
      (l = i == null ? void 0 : i.workspaceRoles) == null
        ? void 0
        : l.find(c => c.id === e);
  return !e || !o || !(i != null && i.workspaceRoles)
    ? null
    : t.jsxs(oe, {
        selectionMode: 'single',
        selectedValue: e,
        onSelectionChange: c => {
          s(c);
        },
        children: [
          t.jsx(D, {
            className: r,
            size: n,
            variant: 'flat',
            color: 'chip',
            disabled: a,
            endIcon: t.jsx(ct, {}),
            children: t.jsx(d, {message: o.name}),
          }),
          t.jsx(le, {
            children: i.workspaceRoles.map(c =>
              t.jsx(
                L,
                {
                  value: c.id,
                  description: c.description,
                  children: t.jsx(d, {message: c.name}),
                },
                c.id,
              ),
            ),
          }),
        ],
      });
}
function ci({member: e, workspace: s}) {
  const {user: n} = K(),
    r = St(s);
  return (n == null ? void 0 : n.id) === e.id
    ? t.jsxs('div', {
        className: 'font-medium',
        children: ['(', t.jsx(d, {message: 'You'}), ')'],
      })
    : e.model_type === 'invite'
    ? t.jsxs('div', {
        className: 'flex items-center gap-4',
        children: [
          t.jsx('div', {children: '·'}),
          t.jsx('div', {
            className: 'font-medium',
            children: t.jsx(d, {message: 'Invited'}),
          }),
          r.invite
            ? t.jsxs(t.Fragment, {
                children: [
                  t.jsx('div', {children: '·'}),
                  t.jsx(di, {member: e, workspace: s}),
                ],
              })
            : null,
        ],
      })
    : null;
}
function di({member: e, workspace: s}) {
  const n = Za();
  return t.jsxs(de, {
    type: 'modal',
    onClose: r => {
      r && n.mutate({workspaceId: s.id, inviteId: e.id});
    },
    children: [
      t.jsx(D, {
        variant: 'link',
        size: 'sm',
        color: 'primary',
        disabled: n.isPending,
        children: t.jsx(d, {message: 'Resend invite'}),
      }),
      t.jsx(je, {
        title: t.jsx(d, {message: 'Resend invite'}),
        body: t.jsx(d, {
          message: 'Are you sure you want to send this invite again?',
        }),
        confirm: t.jsx(d, {message: 'Send'}),
      }),
    ],
  });
}
function ui({id: e, ...s}) {
  return E.put(`workspace/${e}`, s).then(n => n.data);
}
function mi(e) {
  const {close: s} = Q();
  return N({
    mutationFn: n => ui(n),
    onSuccess: n => {
      s(),
        F(h('Updated workspace')),
        C.invalidateQueries({queryKey: q.fetchUserWorkspaces}),
        C.invalidateQueries({queryKey: q.workspaceWithMembers(n.workspace.id)});
    },
    onError: n => Ie(n, e),
  });
}
function hi({workspace: e}) {
  const s = Ee({defaultValues: {id: e.id, name: e.name}}),
    {formId: n, close: r} = Q(),
    a = mi(s);
  return t.jsxs(X, {
    children: [
      t.jsx(J, {children: t.jsx(d, {message: 'Rename workspace'})}),
      t.jsx(Y, {
        children: t.jsx(Pe, {
          form: s,
          id: n,
          onSubmit: () => {
            a.mutate(s.getValues());
          },
          children: t.jsx(De, {
            name: 'name',
            autoFocus: !0,
            label: t.jsx(d, {message: 'Name'}),
            minLength: 3,
            required: !0,
          }),
        }),
      }),
      t.jsxs(ve, {
        children: [
          t.jsx(D, {
            variant: 'text',
            onClick: r,
            children: t.jsx(d, {message: 'Cancel'}),
          }),
          t.jsx(D, {
            variant: 'flat',
            color: 'primary',
            type: 'submit',
            form: n,
            disabled: a.isPending,
            children: t.jsx(d, {message: 'Rename'}),
          }),
        ],
      }),
    ],
  });
}
function fi({id: e}) {
  return E.delete(`workspace/${e}`).then(s => s.data);
}
function xi() {
  const {workspaceId: e, setWorkspaceId: s} = W();
  return N({
    mutationFn: n => fi(n),
    onSuccess: (n, r) => {
      F(h('Deleted workspace')),
        C.invalidateQueries({queryKey: q.fetchUserWorkspaces}),
        C.invalidateQueries({queryKey: q.workspaceWithMembers(r.id)}),
        e === r.id && s(lt.id);
    },
    onError: n => T(n),
  });
}
function pi({onChange: e, className: s, trigger: n}) {
  const {data: r, isFetched: a, isFetching: i} = Cn(),
    {workspaceId: o, setWorkspaceId: l} = W(),
    c = r == null ? void 0 : r.find(b => b.id === o),
    [u, x] = f.useState(null),
    [m, g] = f.useState(!1),
    {hasPermission: j} = K();
  if (
    (f.useEffect(() => {
      a && !i && !c && l(lt.id);
    }, [c, r, l, a, i]),
    !c || (!j('workspaces.create') && (r == null ? void 0 : r.length) === 1))
  )
    return null;
  const w = t.jsxs(ls, {
      className: P(
        'flex items-center gap-10 rounded ring-inset hover:bg-hover focus-visible:ring-2',
        s,
      ),
      children: [
        t.jsxs('span', {
          className: 'mr-auto block flex-auto overflow-hidden text-left',
          children: [
            t.jsx('span', {
              className:
                'block overflow-hidden overflow-ellipsis text-sm font-medium text-main',
              children: c.default ? t.jsx(d, {message: c.name}) : c.name,
            }),
            t.jsx('span', {
              className: 'block text-xs text-muted',
              children: c.default
                ? t.jsx(d, {message: 'Personal workspace'})
                : t.jsx(d, {
                    message: ':count members',
                    values: {count: c.members_count},
                  }),
            }),
          ],
        }),
        t.jsx(tr, {className: 'shrink-0 icon-md'}),
      ],
    }),
    v = n || w;
  return t.jsxs(f.Fragment, {
    children: [
      t.jsxs(de, {
        type: 'popover',
        isOpen: m,
        onClose: () => {
          g(!1);
        },
        children: [
          f.cloneElement(v, {onClick: () => g(!m)}),
          t.jsx(X, {
            size: 'min-w-320',
            children: t.jsxs(Y, {
              padding: 'p-10',
              children: [
                t.jsx('div', {
                  className: 'mb-16 border-b pb-10',
                  children:
                    r == null
                      ? void 0
                      : r.map(b =>
                          t.jsx(
                            gi,
                            {
                              workspace: b,
                              setDialog: x,
                              setSelectorIsOpen: g,
                              onChange: e,
                            },
                            b.id,
                          ),
                        ),
                }),
                t.jsx('div', {
                  className: 'mb-4 px-4 text-center',
                  children: t.jsx(D, {
                    onClick: b => {
                      b.preventDefault(),
                        b.stopPropagation(),
                        x({name: 'newWorkspace'}),
                        g(!1);
                    },
                    variant: 'outline',
                    startIcon: t.jsx(vs, {}),
                    color: 'primary',
                    className: 'h-40 w-full',
                    children: t.jsx(d, {message: 'Create new workspace'}),
                  }),
                }),
              ],
            }),
          }),
        ],
      }),
      t.jsx(vi, {dialog: u, setDialog: x, onChange: e}),
    ],
  });
}
function gi({workspace: e, onChange: s, setSelectorIsOpen: n, setDialog: r}) {
  const {workspaceId: a, setWorkspaceId: i} = W(),
    o = a === e.id;
  return t.jsxs('div', {
    onClick: () => {
      i(e.id), s == null || s(e.id), n(!1);
    },
    className: P(
      'mb-4 flex cursor-pointer items-center gap-12 rounded-lg p-10 text-left',
      o && 'bg-primary/5',
      !o && 'hover:bg-hover',
    ),
    children: [
      t.jsx(Mn, {
        size: 'sm',
        className: P('flex-shrink-0 text-primary', !o && 'invisible'),
      }),
      t.jsxs('div', {
        className: 'flex-auto',
        children: [
          t.jsx('div', {
            className: P('text-sm', o && 'font-semibold'),
            children: e.name,
          }),
          t.jsx('div', {
            className: 'text-sm text-muted',
            children: e.default
              ? t.jsx(d, {message: 'Personal workspace'})
              : t.jsx(d, {
                  message: ':count members',
                  values: {count: e.members_count},
                }),
          }),
        ],
      }),
      e.id !== 0 &&
        t.jsx(bi, {setSelectorIsOpen: n, workspace: e, setDialog: r}),
    ],
  });
}
function vi({dialog: e, setDialog: s, onChange: n}) {
  const r = xi(),
    a = Qs(),
    {user: i} = K(),
    {setWorkspaceId: o} = W();
  return t.jsxs(de, {
    type: 'modal',
    isOpen: !!(e != null && e.name),
    onClose: l => {
      (e == null ? void 0 : e.name) === 'deleteWorkspace' &&
        l &&
        r.mutate({id: e.workspace.id}),
        (e == null ? void 0 : e.name) === 'leaveWorkspace' &&
          l &&
          i != null &&
          i.id &&
          a.mutate({
            workspaceId: e.workspace.id,
            memberId: i.id,
            memberType: 'member',
          }),
        (e == null ? void 0 : e.name) === 'newWorkspace' &&
          l &&
          (o(l), n == null || n(l)),
        s(null);
    },
    children: [
      (e == null ? void 0 : e.name) === 'newWorkspace' && t.jsx(Wa, {}),
      (e == null ? void 0 : e.name) === 'updateWorkspace' &&
        t.jsx(hi, {workspace: e.workspace}),
      (e == null ? void 0 : e.name) === 'workspaceMembers' &&
        t.jsx(si, {workspace: e.workspace}),
      (e == null ? void 0 : e.name) === 'deleteWorkspace' &&
        t.jsx(ji, {workspace: e.workspace}),
      (e == null ? void 0 : e.name) === 'leaveWorkspace' && t.jsx(Hs, {}),
    ],
  });
}
function ji({workspace: e}) {
  return t.jsx(je, {
    isDanger: !0,
    title: t.jsx(d, {message: 'Delete workspace'}),
    body: t.jsx(d, {
      message: 'Are you sure you want to delete “:name“?',
      values: {name: e.name},
    }),
    confirm: t.jsx(d, {message: 'Delete'}),
  });
}
function bi({setSelectorIsOpen: e, setDialog: s, workspace: n}) {
  const {user: r} = K();
  return t.jsxs(oe, {
    onItemSelected: a => {
      e(!1), s({name: a, workspace: n});
    },
    children: [
      t.jsx(D, {
        onClick: a => {
          a.preventDefault(), a.stopPropagation();
        },
        color: 'primary',
        size: 'xs',
        variant: 'outline',
        endIcon: t.jsx(es, {}),
        children: t.jsx(d, {message: 'Manage'}),
      }),
      t.jsxs(le, {
        children: [
          t.jsx(L, {
            onClick: a => a.stopPropagation(),
            value: 'workspaceMembers',
            startIcon: t.jsx(ws, {}),
            children: t.jsx(d, {message: 'Members'}),
          }),
          n.owner_id === (r == null ? void 0 : r.id) &&
            t.jsx(L, {
              onClick: a => a.stopPropagation(),
              value: 'updateWorkspace',
              startIcon: t.jsx(Lr, {}),
              children: t.jsx(d, {message: 'Rename'}),
            }),
          n.owner_id !== (r == null ? void 0 : r.id) &&
            t.jsx(L, {
              onClick: a => a.stopPropagation(),
              value: 'leaveWorkspace',
              startIcon: t.jsx(os, {}),
              children: t.jsx(d, {message: 'Leave'}),
            }),
          n.owner_id === (r == null ? void 0 : r.id) &&
            t.jsx(L, {
              onClick: a => a.stopPropagation(),
              value: 'deleteWorkspace',
              startIcon: t.jsx(ut, {}),
              children: t.jsx(d, {message: 'Delete'}),
            }),
        ],
      }),
    ],
  });
}
var Gs = (e => ((e.DriveSidebar = 'drive-sidebar'), e))(Gs || {}),
  Zs = {};
(function (e) {
  var s =
      (Tt && Tt.__assign) ||
      function () {
        return (s =
          Object.assign ||
          function (o) {
            for (var l, c = 1, u = arguments.length; c < u; c++)
              for (var x in (l = arguments[c]))
                Object.prototype.hasOwnProperty.call(l, x) && (o[x] = l[x]);
            return o;
          }).apply(this, arguments);
      },
    n =
      (Object.defineProperty(e, '__esModule', {value: !0}),
      {
        id: 'id',
        parentId: 'parentId',
        dataField: 'data',
        childrenField: 'children',
        throwIfOrphans: !1,
        rootParentIds: {'': !(e.countNodes = e.arrayToTree = void 0)},
        nestedIds: !0,
        assign: !1,
      });
  function r(o, l) {
    l === void 0 && (l = {});
    for (
      var c,
        u = s(s({}, n), l),
        x = [],
        m = {},
        g = u.throwIfOrphans ? new Set() : null,
        j = 0,
        w = o;
      j < w.length;
      j++
    ) {
      var v = w[j],
        b = u.nestedIds ? i(v, u.id) : v[u.id],
        S = u.nestedIds ? i(v, u.parentId) : v[u.parentId];
      if (u.rootParentIds[b])
        throw new Error(
          'The item array contains a node whose parentId both exists in another node and is in ' +
            '`rootParentIds` (`itemId`: "'
              .concat(b, '", `rootParentIds`: ')
              .concat(
                Object.keys(u.rootParentIds)
                  .map(function (z) {
                    return '"'.concat(z, '"');
                  })
                  .join(', '),
                ').',
              ),
        );
      Object.prototype.hasOwnProperty.call(m, b) ||
        (m[b] = (((c = {})[u.childrenField] = []), c)),
        g && g.delete(b),
        u.dataField
          ? (m[b][u.dataField] = v)
          : u.assign
          ? (m[b] = Object.assign(
              v,
              (((c = {})[u.childrenField] = m[b][u.childrenField]), c),
            ))
          : (m[b] = s(
              s({}, v),
              (((v = {})[u.childrenField] = m[b][u.childrenField]), v),
            )),
        (v = m[b]),
        S == null || u.rootParentIds[S]
          ? x.push(v)
          : (Object.prototype.hasOwnProperty.call(m, S) ||
              ((m[S] = (((b = {})[u.childrenField] = []), b)), g && g.add(S)),
            m[S][u.childrenField].push(v));
    }
    if (g != null && g.size)
      throw new Error(
        'The items array contains orphans that point to the following parentIds: ' +
          '['.concat(
            Array.from(g),
            ']. These parentIds do not exist in the items array. Hint: prevent orphans to result ',
          ) +
          'in an error by passing the following option: { throwIfOrphans: false }',
      );
    if (u.throwIfOrphans && a(x, u.childrenField) < Object.keys(m).length)
      throw new Error(
        'The items array contains nodes with a circular parent/child relationship.',
      );
    return x;
  }
  function a(o, l) {
    return o.reduce(function (c, u) {
      return c + 1 + (u[l] && a(u[l], l));
    }, 0);
  }
  function i(o, l) {
    return l.split('.').reduce(function (c, u) {
      return c && c[u];
    }, o);
  }
  (e.arrayToTree = r), (e.countNodes = a);
})(Zs);
function yi(e) {
  return E.get(`users/${e.userId}/folders`, {params: e}).then(s => s.data);
}
function kt() {
  const {user: e} = K(),
    {workspaceId: s} = W(),
    n = {userId: e.id, workspaceId: s};
  return ce({
    queryKey: R.fetchUserFolders(n),
    queryFn: () => yi(n),
    enabled: !!e,
  });
}
function Xs() {
  return N({
    mutationFn: e => (
      F.loading(
        h('Moving [one 1 item|other :count items]...', {
          values: {count: e.entryIds.length},
        }),
        {disableExitAnimation: !0},
      ),
      wi(e)
    ),
    onSuccess: (e, s) => {
      O(),
        F(
          h('Moved [one 1 item|other :count items] to ":destination"', {
            values: {
              count: s.entryIds.length,
              destination: (e.destination || _.folder).name,
            },
          }),
          {disableEnterAnimation: !0},
        );
    },
    onError: e =>
      T(e, h('Could not move items'), null, {disableEnterAnimation: !0}),
  });
}
function wi(e) {
  return (
    (e.destinationId = e.destinationId ? e.destinationId : null),
    E.post('file-entries/move', e).then(s => s.data)
  );
}
function It(e, s) {
  return s.type !== 'folder'
    ? !1
    : e.every(n =>
        !n || s.id === n.parent_id || (!n.parent_id && s.id === 0)
          ? !1
          : !Si(s, n),
      );
}
function Si(e, s) {
  const n = (e.path || '').split('/');
  return (s.path || '').split('/').every((a, i) => n[i] === a);
}
function Js(e) {
  const s = Xs(),
    {uploadFiles: n} = Ce();
  return {
    onDrop: async a => {
      if (e.type === 'folder') {
        if (a.type === 'nativeFile')
          n(await a.getData(), {metadata: {parentId: e.id}});
        else if (a.type === 'fileEntry') {
          const i = a.getData();
          i != null &&
            i.length &&
            It(i, e) &&
            (s.mutate({destinationId: e.id, entryIds: i.map(o => o.id)}),
            p().deselectEntries('all'));
        }
      }
    },
  };
}
function nt(e, s) {
  if (e.type === 'fileEntry') {
    const n = e.getData();
    return It(n, s);
  }
  return !0;
}
function Et(e) {
  return `${e.id}-tree`;
}
function ki(e) {
  return `${e}`.endsWith('-tree');
}
function Ii({folder: e, ref: s}) {
  const [n, r] = f.useState(!1),
    {onDrop: a} = Js(e);
  return {
    ...Je({
      id: Et(e),
      ref: s,
      types: ['fileEntry', 'nativeFile'],
      acceptsDrop: o => nt(o, e),
      onDragEnter: o => {
        nt(o, e) && r(!0);
      },
      onDragLeave: () => {
        r(!1);
      },
      onDropActivate: () => {
        p().sidebarExpandedKeys.includes(e.id) ||
          p().setSidebarExpandedKeys([...p().sidebarExpandedKeys, e.id]);
      },
      onDrop: a,
    }),
    isDragOver: n,
  };
}
const Pt = f.createContext(null);
function en({nodes: e, itemRenderer: s, parentNode: n, level: r}) {
  return e.map((a, i) =>
    f.cloneElement(s(a), {
      level: r == null ? 0 : r + 1,
      index: i,
      node: a,
      parentNode: n,
      key: a.id,
      itemRenderer: s,
    }),
  );
}
const tn = f.forwardRef(
  ({icon: e, label: s, level: n = 0, node: r, className: a, ...i}, o) => {
    const {
        expandedKeys: l,
        setExpandedKeys: c,
        selectedKeys: u,
        setSelectedKeys: x,
      } = f.useContext(Pt),
      m = l.includes(r.id),
      g = u.includes(r.id),
      j = w => {
        w.stopPropagation();
        const v = l.indexOf(r.id),
          b = [...l];
        v > -1 ? b.splice(v, 1) : b.push(r.id), c(b);
      };
    return t.jsxs('div', {
      ...i,
      ref: o,
      onClick: w => {
        w.stopPropagation(), x([r.id]);
      },
      className: P(
        'flex flex-nowrap whitespace-nowrap items-center gap-4 py-6 rounded header cursor-pointer overflow-hidden text-ellipsis tree-label',
        a,
        g && 'bg-primary/selected text-primary font-bold',
        !g && 'hover:bg-hover',
      ),
      children: [
        n > 0 &&
          t.jsx('div', {
            className: 'flex',
            children: Array.from({length: n}).map((w, v) =>
              t.jsx('div', {className: 'w-24 h-24'}, v),
            ),
          }),
        t.jsx('div', {
          onClick: j,
          children: t.jsx(Pr, {
            className: P(
              'icon-sm cursor-default transition-transform',
              m && 'rotate-90',
            ),
          }),
        }),
        e,
        t.jsx('div', {
          className: 'overflow-hidden text-ellipsis pr-6',
          children: s,
        }),
      ],
    });
  },
);
tn.displayName = 'TreeLabel';
function Ei({
  label: e,
  icon: s,
  node: n,
  level: r,
  index: a,
  itemRenderer: i,
  labelRef: o,
  labelClassName: l,
  className: c,
  parentNode: u,
  ...x
}) {
  const m = An(),
    {
      expandedKeys: g,
      selectedKeys: j,
      focusedNode: w,
      setFocusedNode: v,
      setExpandedKeys: b,
      setSelectedKeys: S,
    } = f.useContext(Pt);
  if (
    (f.useEffect(
      () => () => {
        w === (n == null ? void 0 : n.id) && v(void 0);
      },
      [w, n == null ? void 0 : n.id, v],
    ),
    !n || !i)
  )
    return null;
  const z = n.children.length,
    k = z && g.includes(n.id),
    ue = j.includes(n.id),
    Me = r === 0 && a === 0,
    Ae = w == null ? Me : w === n.id,
    Le = I => {
      var ye, Mt;
      if (w != null)
        switch (I.key) {
          case 'Enter':
          case ' ':
            I.stopPropagation(), I.preventDefault(), S([w]);
            break;
          case 'ArrowRight':
            if ((I.stopPropagation(), I.preventDefault(), !z)) return;
            k ? m == null || m.focusNext() : b([...g, w]);
            break;
          case 'ArrowLeft':
            if ((I.stopPropagation(), I.preventDefault(), k)) {
              const G = g.indexOf(w),
                me = [...g];
              me.splice(G, 1), b(me);
            } else if (u) {
              const G =
                (Mt =
                  (ye = document.activeElement) == null
                    ? void 0
                    : ye.parentElement) == null
                  ? void 0
                  : Mt.closest('[tabindex]');
              G && G.focus();
            }
            break;
          case 'ArrowDown':
            I.stopPropagation(), I.preventDefault(), m == null || m.focusNext();
            break;
          case 'ArrowUp':
            I.stopPropagation(),
              I.preventDefault(),
              m == null || m.focusPrevious();
            break;
          case 'Home':
            I.stopPropagation(),
              I.preventDefault(),
              m == null || m.focusFirst();
            break;
          case 'End':
            I.stopPropagation(), I.preventDefault(), m == null || m.focusLast();
            break;
          case '*':
            if (
              (I.stopPropagation(), I.preventDefault(), u != null && u.children)
            ) {
              const G = [...g];
              u.children.forEach(me => {
                me.children.length && !g.includes(me.id) && G.push(me.id);
              }),
                G.length !== g.length && b(G);
            }
            break;
        }
    };
  return t.jsxs('li', {
    role: 'treeitem',
    'aria-expanded': k ? 'true' : 'false',
    'aria-selected': ue,
    tabIndex: Ae ? 0 : -1,
    onKeyDown: Be(Le),
    onFocus: I => {
      I.stopPropagation(), v(n.id);
    },
    onBlur: I => {
      I.stopPropagation(),
        I.currentTarget.contains(I.relatedTarget) || v(void 0);
    },
    className: P(
      'outline-none',
      '[&>.tree-label]:focus-visible:ring [&>.tree-label]:focus-visible:ring-2 [&>.tree-label]:focus-visible:ring-inset',
      c,
    ),
    children: [
      t.jsx(tn, {
        ref: o,
        className: l,
        node: n,
        level: r,
        label: e,
        icon: s,
        ...x,
      }),
      t.jsx(V, {
        initial: !1,
        children: k
          ? t.jsx(
              $.ul,
              {
                role: 'group',
                initial: 'closed',
                animate: 'open',
                exit: 'closed',
                variants: {
                  open: {opacity: 1, height: 'auto'},
                  closed: {opacity: 0, height: 0, overflow: 'hidden'},
                },
                children: en({
                  nodes: n.children,
                  parentNode: n,
                  itemRenderer: i,
                  level: r,
                }),
              },
              `${n.id}-group`,
            )
          : null,
      }),
    ],
  });
}
function Pi({children: e, nodes: s, ...n}) {
  const [r, a] = _t(
      n.expandedKeys,
      n.defaultSelectedKeys,
      n.onExpandedKeysChange,
    ),
    [i, o] = _t(n.selectedKeys, n.defaultSelectedKeys, n.onSelectedKeysChange),
    [l, c] = f.useState(),
    u = {
      expandedKeys: r,
      setExpandedKeys: a,
      selectedKeys: i,
      setSelectedKeys: o,
      focusedNode: l,
      setFocusedNode: c,
    };
  return t.jsx(Pt.Provider, {
    value: u,
    children: t.jsx(Ln, {children: t.jsx(Di, {nodes: s, itemRenderer: e})}),
  });
}
function Di(e) {
  return t.jsx('ul', {
    className: 'overflow-hidden text-sm',
    role: 'tree',
    children: en(e),
  });
}
function Fi() {
  const e = ee(),
    {data: s} = kt(),
    n = y(o => o.sidebarExpandedKeys),
    r = y(o => o.activePage);
  let a = [];
  r != null && r.isFolderPage && (a = r.folder ? [r.folder.id] : []);
  const i = f.useMemo(() => {
    const o = Zs.arrayToTree((s == null ? void 0 : s.folders) || [], {
      parentId: 'parent_id',
      dataField: null,
    });
    return [{..._.folder, children: o}];
  }, [s == null ? void 0 : s.folders]);
  return t.jsx(Pi, {
    nodes: i,
    expandedKeys: n,
    onExpandedKeysChange: o => {
      p().setSidebarExpandedKeys(o);
    },
    selectedKeys: a,
    onSelectedKeysChange: ([o]) => {
      const l = sn(o, i);
      e(l ? et(l) : _.path);
    },
    children: () => t.jsx(Ni, {}),
  });
}
function Ni(e) {
  const {node: s} = e,
    n = f.useRef(null),
    r = s.id === 0,
    a = y(c => c.entriesBeingDragged.includes(s.id)),
    {draggableProps: i} = js({
      type: 'fileEntry',
      id: Et(s),
      ref: n,
      disabled: r,
      hidePreview: !0,
      onDragStart: (c, u) => {
        const x = u;
        p().setEntriesBeingDragged(x.getData().map(m => m.id)),
          p().selectEntries([]);
      },
      onDragEnd: () => {
        p().setEntriesBeingDragged([]);
      },
      getData: () => [s],
    }),
    {droppableProps: o, isDragOver: l} = Ii({folder: s, ref: n});
  return t.jsx(Ei, {
    ...Ge(i, o, e),
    onContextMenu: c => {
      c.preventDefault(),
        c.stopPropagation(),
        p().deselectEntries('all'),
        p().setContextMenuData({x: c.clientX, y: c.clientY, entry: s});
    },
    labelRef: n,
    className: r ? 'focus-visible:ring-2' : void 0,
    labelClassName: P(
      l && 'bg-primary/selected ring ring-2 ring-inset ring-primary',
      a && 'opacity-30',
      r && 'h-40',
    ),
    icon: r
      ? t.jsx(Dr, {size: 'md', className: 'mr-6'})
      : t.jsx(vt, {size: 'sm', className: 'mr-4'}),
    label: s.name,
  });
}
const sn = (e, s) => {
  for (const n of s) {
    if (n.id === e) return n.hash;
    if (n.children) {
      const r = sn(e, n.children);
      if (r) return r;
    }
  }
};
function Ci() {
  return (
    W(),
    t.jsxs('div', {
      className: 'text-muted mt-26 px-12',
      children: [
        t.jsx(Fi, {}),
        t.jsx(Tn, {
          menu: Gs.DriveSidebar,
          orientation: 'vertical',
          gap: 'gap-0',
          children: e =>
            e.action === '/drive/trash'
              ? t.jsx(Mi, {item: e}, e.id)
              : t.jsx(nn, {item: e}, e.id),
        }),
      ],
    })
  );
}
const nn = f.forwardRef(({item: e, className: s, ...n}, r) =>
  t.jsx(Rn, {
    className: ({isActive: a}) =>
      P(
        s,
        'h-40 w-full my-4 px-24 rounded',
        a
          ? 'text-primary font-bold bg-primary/selected cursor-default'
          : 'hover:bg-hover',
      ),
    item: e,
    ref: r,
    ...n,
  }),
);
function Mi({item: e}) {
  const s = Ne(),
    [n, r] = f.useState(!1),
    a = f.useRef(null),
    {droppableProps: i} = Je({
      id: 'trash',
      types: ['fileEntry'],
      ref: a,
      onDragEnter: () => {
        r(!0);
      },
      onDragLeave: () => {
        r(!1);
      },
      onDrop: o => {
        const l = o.getData().map(c => c.id);
        s.mutate({entryIds: l, deleteForever: !1});
      },
    });
  return t.jsx(nn, {
    className: P(n && 'bg-primary/selected'),
    ref: a,
    ...i,
    item: e,
  });
}
function rn({isCompact: e, className: s}) {
  const n = y(i => i.activePage),
    {uploadFiles: r} = Ce(),
    a = e
      ? t.jsx(M, {size: 'md', children: t.jsx(vs, {})})
      : t.jsx(D, {
          className: 'min-w-160',
          color: 'primary',
          variant: 'flat',
          size: 'sm',
          startIcon: t.jsx(Ss, {}),
          disabled: !(n != null && n.canUpload),
          children: t.jsx(d, {message: 'Upload'}),
        });
  return t.jsx('div', {
    className: s,
    children: t.jsxs(oe, {
      onItemSelected: async i => {
        var o;
        if (i === 'uploadFiles') r(await Oe({multiple: !0}));
        else if (i === 'uploadFolder') r(await Oe({directory: !0}));
        else if (i === 'newFolder') {
          const l = (o = p().activePage) == null ? void 0 : o.folder;
          p().setActiveActionDialog('newFolder', l ? [l] : []);
        }
      },
      children: [
        a,
        t.jsxs(le, {
          children: [
            t.jsx(L, {
              value: 'uploadFiles',
              startIcon: t.jsx(Fr, {}),
              children: t.jsx(d, {message: 'Upload files'}),
            }),
            t.jsx(L, {
              value: 'uploadFolder',
              startIcon: t.jsx(ks, {}),
              children: t.jsx(d, {message: 'Upload folder'}),
            }),
            t.jsx(L, {
              value: 'newFolder',
              startIcon: t.jsx(gt, {}),
              children: t.jsx(d, {message: 'Create folder'}),
            }),
          ],
        }),
      ],
    }),
  });
}
function Ai({className: e}) {
  const {isSubscribed: s} = K(),
    {billing: n} = He();
  return t.jsxs('div', {
    className: P(
      e,
      'flex flex-col gap-20 border-r bg-alt text-sm font-medium text-muted',
    ),
    children: [
      t.jsxs('div', {
        className: 'flex-auto',
        children: [
          t.jsx(rn, {className: 'px-12 pt-28 text-center'}),
          t.jsx(Ci, {}),
          t.jsx(Ba, {}),
          n.enable
            ? t.jsx('div', {
                className: 'mt-14 pl-60',
                children: t.jsx(D, {
                  elementType: cs,
                  to: s ? '/billing/change-plan' : '/pricing',
                  variant: 'outline',
                  color: 'primary',
                  size: 'xs',
                  children: t.jsx(d, {message: 'Upgrade'}),
                }),
              })
            : null,
        ],
      }),
      t.jsx(Li, {}),
    ],
  });
}
function Li() {
  const e = ee();
  return t.jsx(pi, {
    onChange: () => {
      e(_.path);
    },
    className: 'mt-auto w-full flex-shrink-0 border-t px-24 py-18',
  });
}
function Ri(e) {
  return E.get('drive/file-entries', {params: e}).then(s => s.data);
}
const Ti = e => {
  var a;
  const n = e.pages[0].folder,
    r = p().activePage;
  return (
    n &&
      r &&
      r.id === n.hash &&
      (!r.folder ||
        !_n(n.permissions, (a = r.folder) == null ? void 0 : a.permissions)) &&
      p().setActivePage(bt(n)),
    e
  );
};
function an() {
  const e = y(l => l.activePage),
    s = y(l => l.sortDescriptor),
    [n] = Ze(),
    {workspaceId: r} = W(),
    a = {
      pageId: e == null ? void 0 : e.id,
      ...(e == null ? void 0 : e.queryParams),
      ...Object.fromEntries(n),
      folderId: e != null && e.isFolderPage ? e.id : null,
      workspaceId: r,
      ...s,
    },
    i = e === H && !a.query && !a.filters,
    o = Is({
      queryKey: R.fetchEntries(a),
      queryFn: ({pageParam: l = 1}) => Ri({...a, page: l}),
      initialPageParam: 1,
      getNextPageParam: l => {
        const c = l.current_page,
          u = l.last_page;
        if (!(c >= u)) return c + 1;
      },
      enabled: e != null && !i,
    });
  return (
    f.useEffect(() => {
      var l;
      (l = o.data) != null && l.pages[0].folder && Ti(o.data);
    }, [o.data]),
    o
  );
}
function _i() {
  return C.getQueriesData({queryKey: R.fetchEntries()}).reduce((s, n) => {
    const r = n[1] ? n[1].pages.flatMap(a => a.data) : [];
    return [...s, ...r];
  }, []);
}
const on = [
    sr,
    {
      key: 'owner_id',
      label: h('Owner'),
      description: h('User file was uploaded by'),
      defaultOperator: Re.eq,
      control: {
        type: Te.Select,
        defaultValue: '02',
        options: [
          {key: '01', label: h('anyone'), value: {value: null, operator: '!='}},
          {key: '02', label: h('me'), value: '{authId}'},
          {
            key: '03',
            label: h('not me'),
            value: {value: '{authId}', operator: '!='},
          },
        ],
      },
    },
    nr({description: h('Date file was uploaded')}),
    rr({description: h('Date file was last changed')}),
    {
      key: 'deleted_at',
      label: h('In trash'),
      description: h('Only show files that are in the trash'),
      defaultOperator: Re.ne,
      control: {type: Te.BooleanToggle, defaultValue: null},
    },
    {
      key: 'shareableLink',
      label: h('Has shareable link'),
      description: h('Only show files that have a shareable link'),
      defaultOperator: Re.has,
      control: {type: Te.BooleanToggle, defaultValue: '*'},
    },
    {
      control: {type: Te.BooleanToggle, defaultValue: !0},
      key: 'sharedByMe',
      label: h('Shared by me'),
      description: h('Only show files that are shared with someone'),
      defaultOperator: Re.eq,
    },
  ],
  zi = on.map(e => e.key);
function $i() {
  const e = y(l => l.activePage),
    {isMobileMode: s} = f.useContext(te),
    {trans: n} = U(),
    r = ee(),
    [a] = Ze(),
    [i, o] = f.useState(a.get('query') || '');
  return e !== H
    ? null
    : t.jsxs('div', {
        className: 'mt-10 mb-30 px-10 md:px-26',
        children: [
          s &&
            t.jsx('form', {
              className: 'contents',
              onSubmit: l => {
                var c;
                l.preventDefault(),
                  ((c = document.activeElement) == null
                    ? void 0
                    : c.tagName) === 'INPUT' && document.activeElement.blur(),
                  r({pathname: H.path, search: `?query=${i}`}, {replace: !0});
              },
              children: t.jsx(Qe, {
                autoFocus: !0,
                className: 'mb-20',
                startAdornment: t.jsx(M, {
                  type: 'submit',
                  radius: 'rounded',
                  children: t.jsx(Xe, {}),
                }),
                placeholder: n(h('Type to search')),
                value: i,
                onChange: l => o(l.target.value),
              }),
            }),
          t.jsx(ar, {filters: on, pinnedFilters: zi}),
        ],
      });
}
function Oi(e, s) {
  const n = {...e};
  n.left = Math.max(0, n.left);
  const r = n.left - e.left;
  r > 0 && (n.width -= r), (n.top = Math.max(0, n.top));
  const a = n.top - e.top;
  return (
    a > 0 && (n.height -= a),
    (n.width = Math.min(n.width, s.width - n.left)),
    (n.height = Math.min(n.height, s.height - n.top)),
    n
  );
}
const we = new Map();
function Ui(e) {
  const {id: s, ref: n} = e,
    r = f.useRef(e);
  (r.current = e),
    f.useLayoutEffect(() => {
      if (n.current)
        return (
          we.set(s, {
            ...we.get(s),
            id: s,
            ref: n,
            onSelected: () => {
              var a, i;
              (i = (a = r.current).onSelected) == null || i.call(a);
            },
            onDeselected: () => {
              var a, i;
              return (i = (a = r.current).onDeselected) == null
                ? void 0
                : i.call(a);
            },
          }),
          () => {
            bs.delete(s);
          }
        );
    }, [s, r, n]);
}
function Bi(e, s) {
  return !e || !s
    ? !1
    : e.left <= s.left + s.width &&
        e.left + e.width >= s.left &&
        e.top <= s.top + s.height &&
        e.top + e.height >= s.top;
}
function Ki({onPointerDown: e, ...s} = {}) {
  const n = f.useRef(null),
    r = s.containerRef || n,
    a = f.useRef(null);
  let i = f.useRef({}).current;
  const o = () => {
    var S, z, k, ue, Me, Ae, Le;
    if (
      (i.rafId && cancelAnimationFrame(i.rafId),
      !i.startPoint || !i.endPoint || !i.boundaryRect)
    )
      return;
    const c = i.startPoint,
      u = i.endPoint,
      x = c.scrollTop || 0,
      m = ((S = r.current) == null ? void 0 : S.scrollTop) || 0,
      g = {
        left: Math.min(c.x, u.x),
        top: Math.min(c.y, u.y),
        width: Math.abs(c.x - u.x),
        height: Math.abs(c.y - u.y),
      };
    (g.left -= i.boundaryRect.left),
      (g.top -= i.boundaryRect.top),
      (g.top += x);
    const j = m - x,
      w = Math.abs(j);
    j < 0 && (g.top -= w), (g.height += w);
    const v = i.boundaryRect ? Oi(g, i.boundaryRect) : {...g};
    a.current &&
      (i.rafId = requestAnimationFrame(() => {
        a.current &&
          ((a.current.style.display = 'block'),
          (a.current.style.transform = `translate(${v.left}px, ${v.top}px)`),
          (a.current.style.width = `${v.width}px`),
          (a.current.style.height = `${v.height}px`)),
          (i.rafId = void 0);
      }));
    const b = {
      ...v,
      left: v.left + i.boundaryRect.left,
      top: v.top + i.boundaryRect.top - m,
    };
    for (const [, I] of we) {
      const ye = Bi(I.rect, b);
      ye && !((z = i.selectedIds) != null && z.has(I.id))
        ? ((k = i.selectedIds) == null || k.add(I.id),
          (ue = I.onSelected) == null || ue.call(I))
        : !ye &&
          (Me = i.selectedIds) != null &&
          Me.has(I.id) &&
          ((Ae = i.selectedIds) == null || Ae.delete(I.id),
          (Le = I.onDeselected) == null || Le.call(I));
    }
  };
  return {
    containerProps: {
      ...ys({
        minimumMovement: 4,
        onPointerDown: e,
        onMoveStart: c => {
          if (ir) return !1;
          zt(we), (i = {selectedIds: new Set()});
          const u = r.current;
          if (
            ((i.startPoint = {
              x: c.clientX,
              y: c.clientY,
              scrollTop: (u == null ? void 0 : u.scrollTop) || 0,
            }),
            (i.scrollListener = x => {
              var m;
              i.startPoint &&
                (zt(we),
                (m = i.boundaryRect) != null &&
                  m.height &&
                  (i.boundaryRect.height = x.target.scrollHeight),
                o());
            }),
            u)
          ) {
            const x = u.getBoundingClientRect();
            u.addEventListener('scroll', i.scrollListener),
              (i.boundaryRect = {
                top: x.top,
                left: x.left,
                height: u.scrollHeight,
                heightWithoutScroll: x.height,
                width: u.scrollWidth,
              });
          }
        },
        onMove: c => {
          if (
            ((i.endPoint = {x: c.clientX, y: c.clientY}),
            i.boundaryRect && r.current)
          ) {
            const u =
                c.clientY + 20 >
                i.boundaryRect.heightWithoutScroll + i.boundaryRect.top,
              x = c.clientY - 20 < i.boundaryRect.top;
            u
              ? r.current.scrollBy({top: 10})
              : x && r.current.scrollBy({top: -10});
          }
          o();
        },
        onMoveEnd: () => {
          i.rafId && cancelAnimationFrame(i.rafId),
            r.current &&
              i.scrollListener &&
              r.current.removeEventListener('scroll', i.scrollListener),
            a.current &&
              ((a.current.style.display = 'none'),
              (a.current.style.transform = ''),
              (a.current.style.width = ''),
              (a.current.style.height = '')),
            (i = {});
        },
      }).domProps,
      ref: r,
    },
    boxProps: {ref: a},
  };
}
function Dt() {
  const e = an();
  return e.data ? e.data.pages.flatMap(s => s.data) : [];
}
function Ft() {
  const e = y(n => n.selectedEntries),
    s = Dt();
  return Array.from(e)
    .map(n => s.find(r => r.id === n))
    .filter(n => !!n);
}
function ln() {
  return Ft()[0];
}
function qi() {
  const e = ln(),
    {data: s} = kt();
  if (!(!e || !s)) return s.folders.find(n => n.id === e.parent_id);
}
function Nt() {
  const e = Array.from(p().selectedEntries),
    s = _i();
  return e.map(n => s.find(r => r.id === n)).filter(n => !!n);
}
function cn({className: e}) {
  const s = Ft();
  return s.length
    ? t.jsx('div', {className: e, children: t.jsx(Wi, {entries: s})})
    : null;
}
function Wi({entries: e}) {
  const s = Rs(e),
    n = yt(e),
    r = Ts(e),
    a = _s(e),
    i = [s, n, r, a].filter(o => !!o);
  return t.jsxs('div', {
    className: 'entry-action-list',
    children: [
      i.map(o =>
        t.jsx(
          ie,
          {
            label: t.jsx(d, {...o.label}),
            children: t.jsx(M, {
              size: 'sm',
              onClick: () => {
                o.execute();
              },
              children: f.createElement(o.icon),
            }),
          },
          o.key,
        ),
      ),
      t.jsx(tt, {
        entries: e,
        children: t.jsx(ie, {
          label: t.jsx(d, {message: 'More actions'}),
          children: t.jsx(M, {children: t.jsx(ht, {})}),
        }),
      }),
    ],
  });
}
function Vi() {
  var a;
  const e = Ft(),
    s = y(i => i.activePage),
    n = y(i => i.contextMenuData),
    r = n != null && n.entry ? [n.entry] : e;
  return ((a = n == null ? void 0 : n.entry) == null ? void 0 : a.id) === 0
    ? t.jsx(Qt, {position: n, page: _})
    : n && r.length
    ? t.jsx(Qi, {entries: r, position: n})
    : n && s
    ? t.jsx(Qt, {position: n, page: s})
    : null;
}
function Qi({entries: e, position: s}) {
  const n = Ls(e);
  return t.jsx(dn, {position: s, actions: n});
}
function Qt({page: e, position: s}) {
  const n = $s(e);
  return t.jsx(dn, {position: s, actions: n});
}
function dn({position: e, actions: s}) {
  return t.jsx(zn, {
    position: e,
    onOpenChange: n => {
      n || p().setContextMenuData(null);
    },
    children: s.map(n =>
      t.jsx(
        L,
        {
          value: n.key,
          onSelected: n.execute,
          startIcon: f.createElement(n.icon),
          children: t.jsx(d, {...n.label}),
        },
        n.key,
      ),
    ),
  });
}
function Hi() {
  return $n('((pointer: coarse))');
}
function un(e) {
  const s = Hi(),
    n = f.useRef(null),
    {onDrop: r} = Js(e),
    [a, i] = f.useState(!1),
    o = y(m => m.entriesBeingDragged.includes(e.id)),
    l = y(m => m.activePage),
    {draggableProps: c} = js({
      disabled: !!s || l === A,
      id: e.id,
      type: 'fileEntry',
      ref: n,
      hidePreview: !0,
      onDragStart: (m, g) => {
        p().selectedEntries.has(e.id) || p().selectEntries([e.id]),
          p().setEntriesBeingDragged(g.getData().map(j => j.id));
      },
      onDragEnd: () => {
        p().setEntriesBeingDragged([]);
      },
      getData: () => Nt(),
    }),
    {droppableProps: u} = Je({
      id: e.id,
      disabled: s || e.type !== 'folder',
      ref: n,
      types: ['fileEntry', 'nativeFile'],
      acceptsDrop: m => nt(m, e),
      onDragEnter: () => i(!0),
      onDragLeave: () => i(!1),
      onDrop: r,
    });
  Ui({
    id: e.id,
    ref: n,
    onSelected: () => {
      p().selectEntries([e.id], !0);
    },
    onDeselected: () => {
      p().deselectEntries([e.id]);
    },
  });
  const x = P(
    o && 'opacity-20',
    a && 'ring ring-offset-4 ring-primary bg-primary-light/10 rounded',
  );
  return {
    draggableProps: c,
    droppableProps: u,
    isDragOver: a,
    isDragging: o,
    itemClassName: x,
    ref: n,
  };
}
function Yi({item: e, children: s, className: n, ...r}) {
  const {isCollapsedMode: a} = f.useContext(mt),
    {draggableProps: i, droppableProps: o, itemClassName: l, ref: c} = un(e);
  return t.jsx('div', {
    className: P(n, l),
    ref: c,
    ...Ge(i, o, r, {
      onContextMenu: u => {
        u.preventDefault(),
          u.stopPropagation(),
          a ||
            (p().selectedEntries.has(e.id) || p().selectEntries([e.id]),
            p().setContextMenuData({x: u.clientX, y: u.clientY}));
      },
    }),
    children: s,
  });
}
function mn() {
  const e = ee();
  return {
    performViewItemAction: f.useCallback(
      n => {
        if (n && n.type === 'folder')
          p().activePage === A
            ? p().setActiveActionDialog('trashFolderBlock', [n])
            : e(et(n.hash));
        else {
          const r = Nt();
          p().setActiveActionDialog('preview', r.length ? r : [n]);
        }
      },
      [e],
    ),
  };
}
function Gi({entries: e}) {
  const {performViewItemAction: s} = mn(),
    n = y(i => i.selectedEntries),
    r = y(i => i.sortDescriptor),
    a = f.useMemo(() => [...n], [n]);
  return t.jsx(ms, {
    columns: wt,
    data: e,
    sortDescriptor: r,
    onSortChange: i => {
      p().setSortDescriptor(i);
    },
    onAction: s,
    selectedRows: a,
    selectionStyle: 'highlight',
    renderRowAs: Yi,
    onSelectionChange: i => {
      p().selectEntries(i);
    },
  });
}
function Zi({entry: e}) {
  const s = y(j => j.selectedEntries.has(e.id)),
    {performViewItemAction: n} = mn(),
    {isMobileMode: r} = f.useContext(te),
    {draggableProps: a, droppableProps: i, itemClassName: o, ref: l} = un(e),
    c = () => {
      s ? p().deselectEntries([e.id]) : p().selectEntries([e.id], !0);
    },
    u = (j, w) => {
      r
        ? p().selectedEntries.size
          ? c()
          : n(e)
        : or(j)
        ? c()
        : p().selectEntries([e.id]);
    },
    {domProps: x} = ys({onLongPress: r ? () => c() : void 0, onPress: u}),
    m = j => {
      (j.key === 'Enter' || j.key === ' ') &&
        (j.preventDefault(), j.stopPropagation(), n(e));
    },
    g = j => {
      j.preventDefault(),
        j.stopPropagation(),
        r ||
          (p().selectedEntries.has(e.id) || p().selectEntries([e.id]),
          p().setContextMenuData({x: j.clientX, y: j.clientY}));
    };
  return t.jsx(Ds, {
    ...Ge(a, i, x, {onKeyDown: Be(m)}),
    ref: l,
    entry: e,
    isSelected: s,
    isMobileMode: !!r,
    tabIndex: -1,
    onDoubleClick: j => {
      j.preventDefault(), j.stopPropagation(), r || n(e);
    },
    footerAdornment: r && t.jsx(Xi, {entry: e, isSelected: s}),
    onContextMenu: Be(g),
    className: o,
  });
}
function Xi({entry: e, isSelected: s}) {
  return y(r => r.selectedEntries.size)
    ? t.jsx(ss, {className: 'block mr-8', checked: s})
    : t.jsx(tt, {
        entries: [e],
        children: t.jsx(M, {
          className: 'text-muted',
          onPointerDown: r => {
            r.stopPropagation();
          },
          children: t.jsx(ht, {}),
        }),
      });
}
function Ji({entries: e}) {
  return t.jsx('div', {
    className: 'file-grid-container',
    children: t.jsx('div', {
      className: 'file-grid',
      children: e.map(s => t.jsx(Zi, {entry: s}, s.id)),
    }),
  });
}
function hn({isDisabled: e}) {
  const s = y(n => n.sortDescriptor);
  return t.jsx(Ws, {
    isDisabled: e,
    descriptor: s,
    onChange: n => {
      p().setSortDescriptor(n);
    },
  });
}
function fn({className: e}) {
  const {isMobileMode: s} = f.useContext(te),
    n = ee(),
    r = y(x => x.activePage),
    a = r == null ? void 0 : r.folder,
    i = qs({
      hash: a == null ? void 0 : a.hash,
      isEnabled: (a == null ? void 0 : a.hash) !== _.folder.hash,
    }),
    o = ds(),
    l = eo(),
    c = !r || !o || (r.isFolderPage && !a) || i.fetchStatus !== 'idle';
  let u;
  if (c) u = null;
  else {
    const x = l ? [l] : [];
    i.data &&
      i.data.path.forEach(m => {
        x.push({page: bt(m), label: m.name});
      }),
      (u = t.jsx(jt, {
        className: e,
        size: s ? 'md' : 'lg',
        currentIsClickable: !0,
        children: x.map((m, g) =>
          g === x.length - 1
            ? t.jsx(
                We,
                {
                  children: ({isMenuItem: w}) =>
                    w || (!m.page.folder && m.page !== A)
                      ? t.jsx(ze, {value: m.label})
                      : t.jsx(tt, {
                          page: m.page,
                          children: t.jsxs(ls, {
                            className:
                              'flex items-center gap-2 rounded focus-visible:ring-offset-4',
                            children: [
                              t.jsx(ze, {value: m.label}),
                              t.jsx(ct, {className: 'icon-md text-muted'}),
                            ],
                          }),
                        }),
                },
                m.page.id,
              )
            : t.jsx(
                We,
                {
                  onSelected: () => {
                    n(m.page.path);
                  },
                  children: t.jsx(ze, {value: m.label}),
                },
                m.page.id,
              ),
        ),
      }));
  }
  return u;
}
function eo() {
  var r, a;
  const e = y(i => i.activePage),
    s = ds(),
    {user: n} = K();
  if (!e) return null;
  if (
    s &&
    !s.default &&
    e != null &&
    e.isFolderPage &&
    ((e == null ? void 0 : e.id) === _.id ||
      ((r = e.folder) == null ? void 0 : r.workspace_id) === s.id)
  )
    return {label: s.name, page: _};
  if (e != null && e.isFolderPage) {
    const i = (a = e.folder) == null ? void 0 : a.users.find(o => o.owns_entry);
    return (i == null ? void 0 : i.id) !== (n == null ? void 0 : n.id)
      ? {label: ge.label, page: ge}
      : {label: _.label, page: _};
  }
  return {label: e.label, page: e};
}
function to({
  query: {
    isInitialLoading: e,
    fetchNextPage: s,
    isFetchingNextPage: n,
    hasNextPage: r,
  },
  children: a,
  loaderMarginTop: i = 'mt-24',
  style: o,
  className: l,
  variant: c = 'infiniteScroll',
  loadMoreExtraContent: u,
  size: x = 'md',
}) {
  const m = f.useRef(null),
    g = n || e,
    [j, w] = f.useState(0),
    v = c === 'loadMore' && j < 3 ? 'loadMore' : 'infiniteScroll';
  f.useEffect(() => {
    const S = m.current;
    if (!S || v === 'loadMore') return;
    const z = new IntersectionObserver(([k]) => {
      k.isIntersecting && r && !g && s();
    });
    return (
      z.observe(S),
      () => {
        z.unobserve(S);
      }
    );
  }, [s, r, g, v]);
  let b;
  return (
    a
      ? (b = n ? a : null)
      : v === 'loadMore'
      ? (b =
          !e &&
          r &&
          t.jsxs('div', {
            className: P('flex items-center gap-8', i),
            children: [
              u,
              t.jsx(D, {
                size: x === 'md' ? 'sm' : 'xs',
                className: P(
                  x === 'sm' ? 'min-h-24 min-w-96' : 'min-h-36 min-w-112',
                ),
                variant: 'outline',
                color: 'primary',
                onClick: () => {
                  s(), w(j + 1);
                },
                disabled: g,
                children:
                  j >= 2 && !n
                    ? t.jsx(d, {message: 'Load all'})
                    : t.jsx(d, {message: 'Show more'}),
              }),
            ],
          }))
      : (b = t.jsx(V, {
          children:
            n &&
            t.jsx($.div, {
              className: P('flex justify-center w-full', i),
              ...ot,
              children: t.jsx(pe, {
                size: x,
                isIndeterminate: !0,
                'aria-label': 'loading',
              }),
            }),
        })),
    t.jsxs('div', {
      style: o,
      className: P('w-full', l, r && 'min-h-36'),
      role: 'presentation',
      children: [t.jsx('div', {ref: m, 'aria-hidden': !0}), b],
    })
  );
}
function so({isVisible: e}) {
  const s = t.jsx(
    $.div,
    {
      ...ot,
      transition: {duration: 0.3},
      className:
        'absolute inset-0 w-full min-h-full bg-primary-light/30 border-2 border-dashed border-primary pointer-events-none',
      children: t.jsx($.div, {
        initial: {y: '100%', opacity: 0},
        animate: {y: '-10px', opacity: 1},
        exit: {y: '100%', opacity: 0},
        className:
          'p-10 bg-primary text-on-primary fixed bottom-0 left-0 right-0 max-w-max mx-auto rounded',
        children: t.jsx(d, {
          message: 'Drop files to upload them to this folder.',
        }),
      }),
    },
    'dragTargetMask',
  );
  return t.jsx(V, {children: e ? s : null});
}
function no({className: e}) {
  const [s] = Ze(),
    n = !!s.get('query') || !!s.get('filters'),
    r = f.useRef(null),
    a = an(),
    i = Dt(),
    {uploadFiles: o} = Ce(),
    l = Ne(),
    c = y(k => k.activePage),
    [u, x] = f.useState(!1),
    m = y(k => k.viewMode),
    {isMobileMode: g} = f.useContext(te),
    {containerProps: j, boxProps: w} = Ki({
      containerRef: r,
      onPointerDown: k => {
        k.target.closest('.entry-action-list') || p().deselectEntries('all');
      },
    }),
    {droppableProps: v} = Je({
      id: 'driveRoot',
      ref: r,
      types: ['nativeFile'],
      disabled: !(c != null && c.canUpload),
      onDragEnter: () => {
        x(!0);
      },
      onDragLeave: () => {
        x(!1);
      },
      onDrop: async k => {
        k.type === 'nativeFile' && o(await k.getData());
      },
    });
  if (!c) return null;
  let b;
  if (!i.length && (!a.isLoading || a.fetchStatus === 'idle')) {
    const k = c.noContentMessage(n);
    b = t.jsx(Ye, {
      className: 'mt-40',
      image: t.jsx(ke, {src: k.image}),
      title: t.jsx(d, {...k.title}),
      description: t.jsx(d, {...k.description}),
    });
  } else
    a.isLoading ||
      (b = m === 'list' ? t.jsx(Gi, {entries: i}) : t.jsx(Ji, {entries: i}));
  const S = k => {
      k.preventDefault(),
        k.stopPropagation(),
        p().deselectEntries('all'),
        p().setContextMenuData({x: k.clientX, y: k.clientY});
    },
    z = k => {
      k.key === 'a' &&
        lr(k) &&
        (k.preventDefault(),
        k.stopPropagation(),
        p().selectEntries(i.map(ue => ue.id))),
        k.key === 'Delete' &&
          (k.preventDefault(),
          k.stopPropagation(),
          p().selectedEntries.size &&
            !l.isPending &&
            (c === A
              ? p().setActiveActionDialog('confirmAndDeleteForever', Nt())
              : (l.mutate({
                  entryIds: [...p().selectedEntries],
                  deleteForever: c === A,
                }),
                p().selectEntries([]))));
    };
  return t.jsx('div', {
    className: P('relative outline-none', e),
    tabIndex: -1,
    ...Ge(j, v, {onKeyDown: Be(z)}),
    onContextMenu: S,
    children: t.jsxs('div', {
      className: 'relative flex min-h-full flex-col pt-10',
      children: [
        g ? t.jsx(fn, {className: 'mb-10 px-14'}) : t.jsx(ro, {}),
        t.jsx($i, {}),
        t.jsxs('div', {
          className: 'relative flex-auto px-18 pb-18 md:px-24',
          children: [
            t.jsx(it, {slot: 'drive', className: 'mb-24'}),
            b,
            t.jsx(to, {query: a}),
          ],
        }),
        t.jsx('div', {
          ...w,
          className:
            'pointer-events-none absolute left-0 top-0 z-10 hidden border border-primary-light bg-primary-light/20 shadow-md',
        }),
        t.jsx(Vi, {}),
        t.jsx(so, {isVisible: u}),
      ],
    }),
  });
}
function ro() {
  const e = y(s => s.activePage);
  return t.jsxs('div', {
    className:
      'my-10 flex min-h-42 items-center justify-between gap-40 px-10 text-muted md:px-18',
    children: [
      t.jsx(hn, {isDisabled: e == null ? void 0 : e.disableSort}),
      t.jsx(cn, {className: 'text-muted'}),
    ],
  });
}
const ao = f.memo(({file: e, style: s}) =>
  t.jsxs('div', {
    className: 'p-10 flex items-center gap-14 w-full absolute top-0 left-0',
    style: s,
    children: [
      t.jsx('div', {
        className: 'shrink-0 border rounded p-8',
        children: t.jsx(Se, {className: 'w-22 h-22', mime: e.mime}),
      }),
      t.jsxs('div', {
        className: 'flex-auto min-w-0 pr-10',
        children: [
          t.jsx('div', {
            className: 'mb-2 flex items-center min-w-0 gap-10',
            children: t.jsx('div', {
              className:
                'flex-auto font-medium whitespace-nowrap min-w-0 overflow-hidden overflow-ellipsis',
              children: e.name,
            }),
          }),
          t.jsx(io, {file: e}),
        ],
      }),
      t.jsx('div', {className: 'mr-10', children: t.jsx(oo, {file: e})}),
    ],
  }),
);
function io({file: e}) {
  const s = Z(o => o.fileUploads.get(e.id)),
    n = (s == null ? void 0 : s.bytesUploaded) || 0,
    r = f.useMemo(() => xe(e.size), [e]),
    a = f.useMemo(() => xe(n), [n]);
  let i;
  return (
    (s == null ? void 0 : s.status) === 'completed'
      ? (i = t.jsx(d, {message: 'Upload complete'}))
      : (s == null ? void 0 : s.status) === 'aborted'
      ? (i = t.jsx(d, {message: 'Upload cancelled'}))
      : (s == null ? void 0 : s.status) === 'failed'
      ? (i = t.jsx(d, {message: 'Upload failed'}))
      : (i = t.jsx(d, {
          message: ':bytesUploaded of :totalBytes',
          values: {bytesUploaded: a, totalBytes: r},
        })),
    t.jsx('div', {className: 'text-muted text-xs', children: i})
  );
}
function oo({file: e}) {
  const s = Z(m => m.fileUploads.get(e.id)),
    n = Z(m => m.abortUpload),
    r = (s == null ? void 0 : s.percentage) || 0,
    a = s == null ? void 0 : s.status,
    i = s == null ? void 0 : s.errorMessage,
    [o, l] = f.useState(!1),
    c = t.jsx(M, {
      size: 'sm',
      onClick: () => {
        n(e.id);
      },
      children: t.jsx(be, {}),
    }),
    u = t.jsx(pe, {'aria-label': 'Upload progress', size: 'sm', value: r});
  let x;
  if (a === 'failed') {
    const m = i || h('This file could not be uploaded');
    x = t.jsx(_e, {
      children: t.jsx(ie, {
        variant: 'danger',
        label: t.jsx(ze, {value: m}),
        children: t.jsx(On, {className: 'text-danger', size: 'md'}),
      }),
    });
  } else
    a === 'aborted'
      ? (x = t.jsx(_e, {
          children: t.jsx(Un, {className: 'text-warning', size: 'md'}),
        }))
      : a === 'completed'
      ? (x = t.jsx(_e, {
          children: t.jsx(Bn, {size: 'md', className: 'text-positive'}),
        }))
      : (x = t.jsx(_e, {
          onPointerEnter: m => {
            m.pointerType === 'mouse' && l(!0);
          },
          onPointerLeave: m => {
            m.pointerType === 'mouse' && l(!1);
          },
          children: o ? c : u,
        }));
  return t.jsx(V, {children: x});
}
function _e({children: e, ...s}) {
  return t.jsx($.div, {
    ...s,
    initial: {scale: 0, opacity: 0},
    animate: {scale: 1, opacity: 1},
    exit: {scale: 0, opacity: 0},
    children: e,
  });
}
function lo() {
  const e = y(s => s.uploadQueueIsOpen);
  return t.jsx(V, {
    children:
      e &&
      t.jsxs(
        $.div,
        {
          className:
            'shadow-xl rounded fixed bottom-16 right-16 bg z-modal border w-375 text-sm',
          initial: {y: '100%', opacity: 0},
          animate: {y: 0, opacity: 1},
          exit: {y: '100%', opacity: 0},
          children: [t.jsx(co, {}), t.jsx(uo, {})],
        },
        'upload-queue',
      ),
  });
}
function co() {
  const e = Z(a => a.activeUploadsCount),
    s = Z(a => a.completedUploadsCount),
    n = Z(a => a.clearInactive);
  let r;
  return (
    e
      ? (r = t.jsx(d, {message: 'Uploading :count files', values: {count: e}}))
      : s
      ? (r = t.jsx(d, {message: 'Uploaded :count files', values: {count: s}}))
      : (r = t.jsx(d, {message: 'No active uploads'})),
    t.jsxs('div', {
      className:
        'px-10 py-4 bg-alt flex items-center gap-10 justify-between border-b min-h-[45px]',
      children: [
        r,
        e === 0
          ? t.jsx(M, {
              size: 'sm',
              onClick: () => {
                p().setUploadQueueIsOpen(!1),
                  setTimeout(() => {
                    n();
                  }, 200);
              },
              children: t.jsx(be, {}),
            })
          : void 0,
      ],
    })
  );
}
function uo() {
  const e = Z(a => a.fileUploads),
    s = [...e.values()],
    n = f.useRef(null),
    r = cr({
      count: e.size,
      getScrollElement: () => n.current,
      estimateSize: () => 60,
      overscan: 4,
    });
  return t.jsx('div', {
    className: 'max-h-320 overflow-y-auto',
    ref: n,
    children: t.jsx('div', {
      className: 'relative w-full',
      style: {height: `${r.getTotalSize()}px`},
      children: r.getVirtualItems().map(a => {
        const i = s[a.index];
        return t.jsx(
          ao,
          {
            style: {
              height: `${a.size}px`,
              transform: `translateY(${a.start}px)`,
            },
            file: i.file,
          },
          i.file.id,
        );
      }),
    }),
  });
}
const mo =
  '' + new URL('detailed-examination-33c85772.svg', import.meta.url).href;
function xn({entryType: e, entryName: s}) {
  const {setRightSidenavStatus: n} = f.useContext(te);
  return t.jsxs('div', {
    className: 'flex items-center gap-16 text-text-main mb-38',
    children: [
      t.jsx(Se, {className: 'w-24 h-24', type: e}),
      t.jsx('div', {
        className:
          'text-xl font-normal text-ellipsis flex-auto mr-auto min-w-0 break-words',
        children: s,
      }),
      t.jsx(M, {
        size: 'md',
        className: 'flex-shrink-0',
        onClick: () => {
          n('closed');
        },
        children: t.jsx(be, {}),
      }),
    ],
  });
}
function Ct({children: e, margin: s = 'mb-20'}) {
  return t.jsx('div', {className: P('text-base text-main', s), children: e});
}
function ho() {
  return N({
    mutationFn: e => fo(e),
    onSuccess: () => {
      O();
    },
    onError: e => T(e, h('Failed to save tags.')),
  });
}
function fo({entry: e, tags: s}) {
  return E.post(`file-entries/${e.id}/sync-tags`, {
    tags: s.map(n => n.name),
  }).then(n => n.data);
}
function xo(e) {
  return ce({
    queryKey: ['file-entry-tags', e],
    queryFn: () => po(e),
    placeholderData: Jt,
  });
}
async function po(e) {
  return E.get('file-entry-tags', {params: {query: e}}).then(s => s.data);
}
function go({entry: e}) {
  return t.jsxs('div', {
    className: 'mt-20 border-t pt-20',
    children: [
      t.jsx(Ct, {margin: 'mb-10', children: t.jsx(d, {message: 'Tags'})}),
      t.jsx(vo, {entry: e}, e.id),
    ],
  });
}
function vo({entry: e}) {
  const {trans: s} = U(),
    n = ee(),
    r = ho(),
    [a, i] = f.useState(''),
    [o, l] = f.useState(e.tags || []),
    {data: c, isLoading: u} = xo(a),
    x = m => {
      l(m), r.isPending || r.mutate({tags: m, entry: e});
    };
  return t.jsx(ft, {
    isAsync: !0,
    inputValue: a,
    onInputValueChange: i,
    suggestions: c == null ? void 0 : c.results,
    placeholder: s(h('+Add tag')),
    isLoading: u,
    chipSize: 'sm',
    value: o,
    onChange: x,
    onChipClick: m => {
      n(`/drive/search?query=${m.name}`);
    },
    children:
      c == null
        ? void 0
        : c.results.map(m => t.jsx(L, {value: m, children: m.name}, m.id)),
  });
}
function jo({entry: e}) {
  return t.jsxs('div', {
    children: [
      t.jsx(xn, {entryType: e.type, entryName: e.name}),
      e.type === 'image' && t.jsx(dt, {className: 'mb-20', file: e}),
      t.jsxs('div', {
        children: [
          t.jsx(Ct, {children: t.jsx(d, {message: 'Who has access'})}),
          t.jsxs('div', {
            className: 'flex items-center gap-14',
            children: [
              e.workspace_id
                ? t.jsx('div', {
                    className:
                      'rounded-full border w-32 h-32 flex items-center justify-center',
                    children: t.jsx(Nr, {className: 'icon-md'}),
                  })
                : null,
              e.users.map(s =>
                t.jsx(
                  ie,
                  {
                    label: s.display_name,
                    children: t.jsx(xt, {
                      src: s.avatar,
                      size: 'md',
                      circle: !0,
                    }),
                  },
                  s.id,
                ),
              ),
            ],
          }),
          e.permissions['files.update'] &&
            t.jsx(D, {
              className: 'block mt-20',
              variant: 'link',
              color: 'primary',
              onClick: () => {
                p().setActiveActionDialog('share', [e]);
              },
              children: t.jsx(d, {message: 'Manage Access'}),
            }),
        ],
      }),
      t.jsx(bo, {entry: e}),
      t.jsx(go, {entry: e}),
    ],
  });
}
function bo({entry: e}) {
  const s = qi(),
    n = ee(),
    r = e.users.find(i => i.owns_entry),
    a = f.useMemo(() => xe(e.file_size), [e.file_size]);
  return t.jsxs('div', {
    className: 'mt-20 border-t pt-20',
    children: [
      t.jsx(Ct, {children: t.jsx(d, {message: 'Properties'})}),
      t.jsx(he, {
        label: t.jsx(d, {message: 'Type'}),
        value: t.jsx('span', {
          className: 'capitalize',
          children: t.jsx(d, {message: e.type}),
        }),
      }),
      t.jsx(he, {
        label: t.jsx(d, {message: 'Size'}),
        value: e.file_size ? a : '-',
      }),
      t.jsx(he, {
        label: t.jsx(d, {message: 'Location'}),
        value: t.jsx(D, {
          variant: 'link',
          startIcon: t.jsx(vt, {}),
          onClick: () => {
            n(s ? et(s.hash) : _.path);
          },
          children: s ? s.name : t.jsx(d, {message: 'Root'}),
        }),
      }),
      r &&
        t.jsx(he, {label: t.jsx(d, {message: 'Owner'}), value: r.display_name}),
      t.jsx(he, {
        label: t.jsx(d, {message: 'Modified'}),
        value: t.jsx(Ue, {date: e.updated_at}),
      }),
      t.jsx(he, {
        label: t.jsx(d, {message: 'Created'}),
        value: t.jsx(Ue, {date: e.updated_at}),
      }),
    ],
  });
}
function he({label: e, value: s}) {
  return t.jsxs('div', {
    className: 'flex items-center mb-14',
    children: [
      t.jsx('div', {className: 'w-1/3 text-xs text-muted', children: e}),
      t.jsx('div', {className: 'w-2/3 text-sm text-main', children: s}),
    ],
  });
}
function yo({className: e}) {
  const s = ln();
  return t.jsx('div', {
    className: P(
      e,
      'bg p-18 text-sm text-muted border-l h-full overflow-y-auto',
    ),
    children: s ? t.jsx(jo, {entry: s}) : t.jsx(wo, {}),
  });
}
function wo() {
  return t.jsxs(f.Fragment, {
    children: [
      t.jsx(xn, {
        entryType: 'folder',
        entryName: t.jsx(d, {message: 'All files'}),
      }),
      t.jsx(Ye, {
        image: t.jsx(ke, {src: mo}),
        description: t.jsx(d, {
          message: 'Select file or folder to see details here',
        }),
      }),
    ],
  });
}
function So(e) {
  return N({
    mutationFn: s => ko(s),
    onSuccess: (s, n) => {
      O(),
        F(
          h(':oldName renamed to :newName', {
            values: {oldName: n.initialName, newName: s.fileEntry.name},
          }),
        );
    },
    onError: s => Ie(s, e),
  });
}
function ko({entryId: e, ...s}) {
  return E.put(`file-entries/${e}`, s).then(n => n.data);
}
function Io({entries: e}) {
  var l;
  const {close: s, formId: n} = Q(),
    r = (l = e[0]) == null ? void 0 : l.name,
    a = Ee({defaultValues: {name: r}}),
    i = So(a),
    o = c => {
      i.mutate(
        {entryId: e[0].id, name: c.name, initialName: r},
        {onSuccess: s},
      );
    };
  return t.jsxs(X, {
    children: [
      t.jsx(J, {children: t.jsx(d, {message: 'Rename'})}),
      t.jsx(Y, {
        children: t.jsx(Pe, {
          onSubmit: o,
          form: a,
          id: n,
          children: t.jsx(De, {
            placeholder: 'Enter a name...',
            'aria-label': 'Entry name',
            autoFocus: !0,
            name: 'name',
            required: !0,
            minLength: 3,
            maxLength: 200,
          }),
        }),
      }),
      t.jsxs(ve, {
        children: [
          t.jsx(D, {
            variant: 'flat',
            onClick: () => s(),
            children: t.jsx(d, {message: 'Cancel'}),
          }),
          t.jsx(D, {
            form: n,
            type: 'submit',
            variant: 'flat',
            color: 'primary',
            disabled: i.isPending || !a.formState.isDirty,
            children: t.jsx(d, {message: 'Save'}),
          }),
        ],
      }),
    ],
  });
}
function Eo({name: e, parentId: s}) {
  return E.post('folders', {name: e, parentId: s === 0 ? null : s}).then(
    n => n.data,
  );
}
function Po(e) {
  return N({
    mutationFn: ({name: s, parentId: n}) => Eo({name: s, parentId: n}),
    onSuccess: () => O(),
    onError: s => Ie(s, e),
  });
}
function pn({parentId: e}) {
  const {close: s, formId: n} = Q(),
    {trans: r} = U(),
    a = Ee({defaultValues: {name: r({message: 'Untitled Folder'})}}),
    i = Po(a),
    o = l => {
      i.mutate(
        {...l, parentId: e},
        {
          onSuccess: c => {
            s(c.folder), F(h('Folder created'));
          },
        },
      );
    };
  return t.jsxs(X, {
    children: [
      t.jsx(J, {children: t.jsx(d, {message: 'New Folder'})}),
      t.jsx(Y, {
        children: t.jsx(Pe, {
          onSubmit: o,
          form: a,
          id: n,
          children: t.jsx(De, {
            placeholder: r({message: 'Enter a name...'}),
            'aria-label': 'Entry name',
            autoFocus: !0,
            autoSelectText: !0,
            name: 'name',
            required: !0,
            minLength: 3,
            maxLength: 200,
          }),
        }),
      }),
      t.jsxs(ve, {
        children: [
          t.jsx(D, {
            variant: 'flat',
            onClick: () => s(),
            children: t.jsx(d, {message: 'Cancel'}),
          }),
          t.jsx(D, {
            form: n,
            type: 'submit',
            variant: 'flat',
            color: 'primary',
            disabled: i.isPending,
            children: t.jsx(d, {message: 'Create'}),
          }),
        ],
      }),
    ],
  });
}
function Do({selectedEntry: e}) {
  const s = Dt().filter(i => i.type !== 'folder'),
    n = s.findIndex(i => i.id === (e == null ? void 0 : e.id)),
    [r, a] = f.useState(n);
  return t.jsx(hs, {
    allowDownload: e.permissions['files.download'],
    headerActionsLeft: t.jsx(Fo, {activeIndex: r, entries: s}),
    activeIndex: r,
    onActiveIndexChange: a,
    entries: s,
  });
}
function Fo({activeIndex: e, entries: s}) {
  const n = s[e],
    r = yt([n]);
  return !n || !r
    ? null
    : t.jsxs(f.Fragment, {
        children: [
          t.jsx(M, {
            className: 'md:hidden',
            onClick: () => {
              r.execute();
            },
            children: f.createElement(r.icon),
          }),
          t.jsx(D, {
            className: 'max-md:hidden',
            variant: 'text',
            startIcon: f.createElement(r.icon),
            onClick: () => {
              r.execute();
            },
            children: t.jsx(d, {...r.label}),
          }),
        ],
      });
}
function No({entryId: e, ...s}) {
  return E.post(`file-entries/${e}/share`, s).then(n => n.data);
}
function Co() {
  return N({
    mutationFn: e => No(e),
    onSuccess: () => {
      O();
    },
    onError: e => {
      var s, n;
      if (Kn.isAxiosError(e) && e.response) {
        const r = e.response.data;
        (s = r.errors) != null && s.emails
          ? F.danger((n = r.errors) == null ? void 0 : n.emails[0])
          : T(e);
      }
    },
  });
}
const Mo = {edit: !0, view: !0, download: !0},
  fe = [
    {key: 'view', value: {view: !0}, label: h('Can view')},
    {
      key: 'download',
      value: {view: !0, download: !0},
      label: h('Can Download'),
    },
    {key: 'edit', value: Mo, label: h('Can edit')},
  ];
function gn({value: e, onChange: s}) {
  return t.jsxs(oe, {
    selectedValue: e.key,
    selectionMode: 'single',
    onSelectionChange: n => {
      n !== e.key && s(fe.find(r => r.key === n));
    },
    children: [
      t.jsx(D, {
        variant: 'flat',
        color: 'chip',
        size: 'xs',
        endIcon: t.jsx(ct, {}),
        children: t.jsx(d, {...e.label}),
      }),
      t.jsx(le, {
        children: fe.map(n =>
          t.jsx(L, {value: n.key, children: t.jsx(d, {...n.label})}, n.key),
        ),
      }),
    ],
  });
}
function Ao(e) {
  const {download: s, edit: n} = e.entry_permissions;
  return n
    ? fe.find(r => r.key === 'edit')
    : s
    ? fe.find(r => r.key === 'download')
    : fe.find(r => r.key === 'view');
}
function Lo() {
  return N({
    mutationFn: e => Ro(e),
    onSuccess: () => {
      O(), F(h('Updated user permissions'));
    },
    onError: e => T(e, h('Could not update permissions')),
  });
}
function Ro({entryId: e, ...s}) {
  return E.put(`file-entries/${e}/change-permissions`, s).then(n => n.data);
}
function To({user: e, ...s}) {
  var r;
  const {auth: n} = f.useContext(qn);
  return t.jsx(xt, {
    ...s,
    label: e == null ? void 0 : e.display_name,
    src: e == null ? void 0 : e.avatar,
    link:
      (e == null ? void 0 : e.id) &&
      ((r = n.getUserProfileLink) == null ? void 0 : r.call(n, e)),
  });
}
function _o({className: e, entry: s}) {
  if (!s) return null;
  const n = s.users;
  return t.jsxs('div', {
    className: P(e, 'overflow-hidden'),
    children: [
      t.jsx('div', {
        className: 'mb-14 text-sm',
        children: t.jsx(d, {message: 'Who has access'}),
      }),
      t.jsx(V, {
        initial: !1,
        children: n.map(r => t.jsx(zo, {user: r, entry: s}, r.id)),
      }),
    ],
  });
}
function zo({user: e, entry: s}) {
  return t.jsxs(
    $.div,
    {
      initial: {x: '-100%', opacity: 0},
      animate: {x: 0, opacity: 1},
      exit: {x: '100%', opacity: 0},
      transition: {type: 'tween', duration: 0.125},
      className: 'flex items-center text-sm gap-14 mb-20',
      children: [
        t.jsx(To, {user: e, circle: !0, size: 'w-44 h-44'}),
        t.jsxs('div', {
          children: [
            t.jsx('div', {children: e.display_name}),
            t.jsx('div', {className: 'text-muted', children: e.email}),
          ],
        }),
        t.jsx('div', {
          className: 'ml-auto',
          children: e.owns_entry
            ? t.jsx('span', {
                className: 'text-muted',
                children: t.jsx(d, {message: 'Owner'}),
              })
            : t.jsx($o, {user: e, entry: s}),
        }),
      ],
    },
    e.id,
  );
}
function $o({user: e, entry: s}) {
  const n = Lo(),
    r = Ms(),
    [a, i] = f.useState(() => Ao(e));
  return t.jsxs('div', {
    className: 'flex items-center gap-10',
    children: [
      t.jsx(gn, {
        onChange: o => {
          n.mutate({userId: e.id, permissions: o.value, entryId: s.id}), i(o);
        },
        value: a,
      }),
      t.jsx(M, {
        onClick: () => {
          r.mutate(
            {userId: e.id, entryIds: [s.id]},
            {
              onSuccess: () => {
                F(h('Member removed'));
              },
              onError: o => T(o, h('Could not remove member')),
            },
          );
        },
        children: t.jsx(be, {}),
      }),
    ],
  });
}
function Oo({className: e, entry: s}) {
  var b;
  const {trans: n} = U(),
    {share: r} = He(),
    a = Co(),
    [i, o] = f.useState([]),
    [l, c] = f.useState(!1),
    [u, x] = f.useState(fe[0]),
    m = i.every(S => !S.invalid),
    [g, j] = f.useState(''),
    w = dr(ur, {perPage: 7, query: g}, {enabled: r.suggest_emails}),
    v = S => S.description || S.name;
  return t.jsxs('div', {
    className: e,
    children: [
      t.jsx(ft, {
        value: i,
        onChange: o,
        isAsync: !0,
        isLoading: w.fetchStatus === 'fetching',
        inputValue: g,
        onInputValueChange: j,
        suggestions: (b = w.data) == null ? void 0 : b.results,
        displayWith: v,
        validateWith: S => {
          const z = !Vs(S.description);
          return {
            ...S,
            invalid: z,
            errorMessage: z ? n({message: 'Not a valid email'}) : void 0,
          };
        },
        placeholder: n({message: 'Enter email addresses'}),
        label: t.jsx(d, {message: 'Invite people'}),
        children: S =>
          t.jsx(L, {
            value: S.id,
            startIcon: t.jsx(xt, {circle: !0, src: S.image, alt: ''}),
            description: S.description,
            children: S.name,
          }),
      }),
      t.jsxs('div', {
        className: 'flex items-center gap-14 justify-between mt-14',
        children: [
          t.jsx(gn, {onChange: x, value: u}),
          i.length
            ? t.jsx(D, {
                variant: 'flat',
                color: 'primary',
                size: 'sm',
                disabled: l || !m,
                onClick: () => {
                  c(!0),
                    a.mutate(
                      {
                        emails: i.map(S => v(S)),
                        permissions: u.value,
                        entryId: s.id,
                      },
                      {
                        onSuccess: () => {
                          o([]);
                        },
                        onSettled: () => {
                          c(!1);
                        },
                      },
                    );
                },
                children: t.jsx(d, {message: 'Share'}),
              })
            : null,
        ],
      }),
      t.jsx(_o, {className: 'mt-30', entry: s}),
    ],
  });
}
function vn(e) {
  return ce({
    queryKey: R.fetchEntryShareableLink(e),
    queryFn: () => Uo(e),
    enabled: !!e,
  });
}
function Uo(e) {
  return E.get(`file-entries/${e}/shareable-link`, {
    params: {loader: 'shareableLink'},
  }).then(s => s.data);
}
function Bo({entryId: e}) {
  return E.delete(`file-entries/${e}/shareable-link`).then(s => s.data);
}
function Ko() {
  return N({
    mutationFn: ({entryId: e}) => Bo({entryId: e}),
    onSuccess: (e, {entryId: s}) => {
      C.setQueryData(R.fetchEntryShareableLink(s), {...e, link: null});
    },
    onError: e => T(e, h('Could not delete link')),
  });
}
function qo(e = 36) {
  let s = '';
  const n = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (let r = 0; r < e; r += 1)
    s += n.charAt(Math.floor(Math.random() * n.length));
  return s;
}
function Wo({setActivePanel: e, entry: s, focusInput: n}) {
  var c, u;
  const r = vn(s.id),
    a = !!((c = r.data) != null && c.link),
    i = Fs(),
    o = Ko(),
    l = r.isLoading || i.isPending || o.isPending;
  return t.jsxs('div', {
    children: [
      t.jsx('div', {
        className: 'mb-10',
        children: t.jsx(d, {message: 'Share link'}),
      }),
      t.jsxs('div', {
        className: 'flex items-center justify-between gap-14 px-2 pb-4',
        children: [
          t.jsx(pt, {
            checked: a,
            disabled: l,
            onChange: () => {
              a ? o.mutate({entryId: s.id}) : i.mutate({entryId: s.id});
            },
            children: a
              ? t.jsx(d, {message: 'Shareable link is created'})
              : t.jsx(d, {message: 'Create shareable link'}),
          }),
          a &&
            t.jsx(D, {
              variant: 'link',
              color: 'primary',
              onClick: () => {
                e('linkSettings');
              },
              children: t.jsx(d, {message: 'Link settings'}),
            }),
        ],
      }),
      t.jsx(Vo, {autoFocus: n, link: (u = r.data) == null ? void 0 : u.link}),
    ],
  });
}
function Vo({link: e, autoFocus: s}) {
  const {base_url: n} = He(),
    {trans: r} = U(),
    a = Qr(),
    i = (e == null ? void 0 : e.hash) || (a == null ? void 0 : a.hash) || qo(),
    o = `${n}/drive/s/${i}`,
    [l, c] = Wn(o, {successDuration: 1e3});
  return t.jsx(Qe, {
    autoFocus: s,
    disabled: !e,
    className: 'mt-10',
    readOnly: !0,
    value: o,
    'aria-label': r({message: 'Shareable link'}),
    onFocus: u => {
      u.target.select();
    },
    endAppend: t.jsx(D, {
      className: 'min-w-100',
      variant: 'flat',
      color: 'primary',
      onClick: c,
      children: l
        ? t.jsx(d, {message: 'Copied!'})
        : t.jsx(d, {message: 'Copy'}),
    }),
  });
}
function Qo({entryId: e, ...s}) {
  return E.put(`file-entries/${e}/shareable-link`, s).then(n => n.data);
}
function Ho(e) {
  return N({
    mutationFn: s => Qo(s),
    onSuccess: (s, {entryId: n}) => {
      C.setQueryData(R.fetchEntryShareableLink(n), s);
    },
    onError: s => Ie(s, e),
  });
}
function Yo({className: e, setActivePanel: s, entry: n}) {
  const {formId: r} = Q(),
    {data: a} = vn(n.id),
    i = a == null ? void 0 : a.link,
    o = Ee({
      defaultValues: {
        allowDownload: i == null ? void 0 : i.allow_download,
        allowEdit: i == null ? void 0 : i.allow_edit,
        expiresAt: i == null ? void 0 : i.expires_at,
        entryId: n.id,
      },
    }),
    l = Ho(o);
  return t.jsxs(f.Fragment, {
    children: [
      t.jsx(J, {
        onDismiss: () => {
          s('main');
        },
        children: t.jsx(d, {message: 'Shareable Link Settings'}),
      }),
      t.jsx(Y, {
        children: t.jsx(
          $.div,
          {
            className: 'min-h-[335px]',
            animate: {opacity: 1, y: 0},
            initial: {opacity: 0, y: 20},
            exit: {opacity: 0, y: -20},
            transition: {duration: 0.1},
            children: t.jsxs(Pe, {
              id: r,
              className: e,
              form: o,
              onSubmit: c => {
                l.mutate(c, {
                  onSuccess: () => {
                    s('main'), F(h('Link settings saved'));
                  },
                });
              },
              children: [
                t.jsx(Zo, {showField: !!(i != null && i.expires_at)}),
                t.jsx(Xo, {showField: !!(i != null && i.password)}),
                t.jsxs(Ve, {
                  children: [
                    t.jsx(d, {message: 'Allow download'}),
                    t.jsx($t, {
                      name: 'allowDownload',
                      children: t.jsx(d, {
                        message: 'Users with link can download this item',
                      }),
                    }),
                  ],
                }),
                t.jsxs(Ve, {
                  showBorder: !1,
                  children: [
                    t.jsx(d, {message: 'Allow import'}),
                    t.jsx($t, {
                      name: 'allowEdit',
                      children: t.jsx(d, {
                        message:
                          'Users with link can import this item into their own drive',
                      }),
                    }),
                  ],
                }),
              ],
            }),
          },
          'link-settings-content',
        ),
      }),
      t.jsxs(ve, {
        children: [
          t.jsx(D, {
            type: 'button',
            onClick: () => {
              s('main');
            },
            children: t.jsx(d, {message: 'Cancel'}),
          }),
          t.jsx(D, {
            type: 'submit',
            form: r,
            variant: 'flat',
            color: 'primary',
            disabled: l.isPending,
            children: t.jsx(d, {message: 'Save'}),
          }),
        ],
      }),
    ],
  });
}
const Go = Vn(Qn());
function Zo({showField: e}) {
  const {trans: s} = U(),
    [n, r] = f.useState(e);
  return t.jsxs(Ve, {
    children: [
      t.jsx(d, {message: 'Link expiration'}),
      t.jsxs('div', {
        children: [
          t.jsx(pt, {
            checked: n,
            onChange: a => {
              r(a.target.checked);
            },
            children: t.jsx(d, {message: 'Link is valid until'}),
          }),
          n &&
            t.jsx(mr, {
              min: Go,
              name: 'expiresAt',
              granularity: 'minute',
              className: 'mt-20',
              'aria-label': s({message: 'Link expiration date and time'}),
            }),
        ],
      }),
    ],
  });
}
function Xo({showField: e}) {
  const {trans: s} = U(),
    [n, r] = f.useState(e);
  return t.jsxs(Ve, {
    children: [
      t.jsx(d, {message: 'Password protect'}),
      t.jsxs('div', {
        children: [
          t.jsx(pt, {
            checked: n,
            onChange: a => {
              r(a.target.checked);
            },
            children: t.jsx(d, {
              message:
                'Users will need to enter password in order to view this link',
            }),
          }),
          n &&
            t.jsx(De, {
              type: 'password',
              autoFocus: !0,
              name: 'password',
              className: 'mt-20',
              'aria-label': s({message: 'Link password'}),
              description: t.jsx(d, {
                message:
                  'Password will not be requested when viewing the link as file owner.',
              }),
              placeholder: s({message: 'Enter new password...'}),
            }),
        ],
      }),
    ],
  });
}
function Ve({children: e, showBorder: s = !0}) {
  const [n, r] = e;
  return t.jsxs('div', {
    className: P(s && 'mb-20 border-b pb-20'),
    children: [
      t.jsx('div', {className: 'mb-8 text-sm font-medium', children: n}),
      r,
    ],
  });
}
function Ht({entry: e, focusLinkInput: s}) {
  const {
      data: {fileEntry: n},
    } = ce({
      queryKey: R.fetchFileEntry(e.id),
      queryFn: () =>
        E.get(`drive/file-entries/${e.id}/model`).then(i => i.data),
      initialData: {fileEntry: e},
    }),
    [r, a] = f.useState('main');
  return t.jsx(X, {
    size: 'lg',
    children: t.jsx(V, {
      initial: !1,
      mode: 'wait',
      children:
        r === 'linkSettings'
          ? t.jsx(Yo, {setActivePanel: a, entry: n}, 'one')
          : t.jsx(Jo, {setActivePanel: a, entry: n, focusLinkInput: s}, 'two'),
    }),
  });
}
function Jo({setActivePanel: e, entry: s, focusLinkInput: n}) {
  return t.jsxs(f.Fragment, {
    children: [
      t.jsx(J, {
        children: t.jsx(d, {message: 'Share ‘:name’', values: {name: s.name}}),
      }),
      t.jsx(Y, {
        className: 'relative',
        children: t.jsxs(
          $.div,
          {
            animate: {opacity: 1, y: 0},
            initial: {opacity: 0, y: 20},
            exit: {opacity: 0, y: -20},
            transition: {duration: 0.1},
            children: [
              t.jsx(Oo, {className: 'mb-30 border-b pb-30', entry: s}),
              t.jsx(Wo, {setActivePanel: e, entry: s, focusInput: !!n}),
            ],
          },
          'share-content',
        ),
      }),
    ],
  });
}
function el({allFolders: e, onFolderSelected: s}) {
  const {trans: n} = U(),
    r = n({message: 'Search folders'});
  return t.jsx(Hn, {
    size: 'sm',
    maxItems: 10,
    placeholder: r,
    'aria-label': r,
    className: 'pt-20',
    endAdornmentIcon: t.jsx(Xe, {}),
    items: e,
    clearInputOnItemSelection: !0,
    onItemSelected: a => {
      const i = parseInt(a),
        o = e.find(l => l.id === i);
      o && s(o);
    },
    children: a => t.jsx(L, {value: a.id, children: a.name}, a.id),
  });
}
function tl({
  selectedFolder: e,
  allFolders: s,
  rootFolder: n,
  onFolderSelected: r,
}) {
  const a = e.path
      .split('/')
      .map(l => {
        const c = parseInt(l);
        return s.find(u => c === u.id);
      })
      .filter(l => !!l),
    i = [n, ...a],
    o = a[a.length - 2];
  return t.jsxs('div', {
    className: 'flex items-center border-b pb-10 gap-6',
    children: [
      t.jsx(M, {
        className: 'flex-shrink-0',
        variant: 'outline',
        size: 'xs',
        radius: 'rounded',
        disabled: !o && !e.id,
        onClick: () => {
          r(o || n);
        },
        children: t.jsx(hr, {}),
      }),
      t.jsx(jt, {
        size: 'sm',
        className: 'flex-auto',
        children: i.map(l =>
          t.jsxs(
            We,
            {
              onSelected: () => {
                r(l);
              },
              className: 'flex items-center gap-8',
              children: [!l.id && t.jsx(vt, {className: 'icon-sm'}), l.name],
            },
            l.id || 'root',
          ),
        ),
      }),
    ],
  });
}
const sl = '' + new URL('my-files-88476671.svg', import.meta.url).href;
function nl(e) {
  const {onFolderSelected: s, selectedFolder: n, allFolders: r} = e,
    a = f.useMemo(() => {
      const i = n.id || null;
      return r.filter(o => o.parent_id === i);
    }, [n.id, r]);
  return a.length
    ? t.jsx(Yn, {
        className: 'h-288 overflow-y-auto',
        children: a.map(i =>
          t.jsx(
            Gn,
            {
              className: 'border-b min-h-48',
              onSelected: () => {
                s(i);
              },
              startIcon: t.jsx(Se, {type: 'folder'}),
              endIcon: t.jsx(Rr, {size: 'md'}),
              children: i.name,
            },
            i.id,
          ),
        ),
      })
    : t.jsx(Ye, {
        size: 'xs',
        className: 'pt-64 pb-20 min-h-288',
        image: t.jsx(ke, {src: sl}),
        title: t.jsx(d, {
          message: 'There are no subfolders in ":folder"',
          values: {folder: n.name},
        }),
      });
}
function rl({entries: e}) {
  const {data: s} = kt(),
    n = (s == null ? void 0 : s.folders) || [],
    r = y(o => o.activePage),
    [a, i] = f.useState((r == null ? void 0 : r.folder) || _.folder);
  return t.jsxs(X, {
    size: 'lg',
    children: [
      t.jsx(J, {
        children: t.jsx(d, {
          message: 'Move [one ‘:name‘|other :count items]',
          values: {count: e.length, name: e[0].name},
        }),
      }),
      t.jsxs(Y, {
        children: [
          t.jsx('div', {
            className: 'text-sm',
            children: t.jsx(d, {message: 'Select a destination folder.'}),
          }),
          t.jsx(el, {allFolders: n, onFolderSelected: i}),
          t.jsxs('div', {
            className: 'mb-20 mt-40',
            children: [
              t.jsx(tl, {
                selectedFolder: a,
                allFolders: n,
                rootFolder: _.folder,
                onFolderSelected: i,
              }),
              t.jsx(nl, {
                selectedFolder: a,
                allFolders: n,
                onFolderSelected: i,
              }),
            ],
          }),
        ],
      }),
      t.jsx(al, {selectedFolder: a, setSelectedFolder: i, entries: e}),
    ],
  });
}
function al({selectedFolder: e, setSelectedFolder: s, entries: n}) {
  const {close: r} = Q(),
    a = Xs();
  return t.jsxs(ve, {
    className: 'border-t',
    startAction: t.jsxs(de, {
      type: 'modal',
      onClose: i => {
        i && s(i);
      },
      children: [
        t.jsx(D, {
          startIcon: t.jsx(gt, {}),
          variant: 'text',
          children: t.jsx(d, {message: 'New Folder'}),
        }),
        t.jsx(pn, {parentId: e.id}),
      ],
    }),
    children: [
      t.jsx(D, {
        className: 'max-md:hidden',
        variant: 'flat',
        onClick: () => r(),
        children: t.jsx(d, {message: 'Cancel'}),
      }),
      t.jsx(D, {
        type: 'submit',
        variant: 'flat',
        color: 'primary',
        disabled: !It(n, e) || a.isPending,
        onClick: () => {
          a.mutate(
            {destinationId: e.id, entryIds: n.map(i => i.id)},
            {onSuccess: r},
          );
        },
        children: t.jsx(d, {message: 'Move here'}),
      }),
    ],
  });
}
function il({entries: e}) {
  const s = Ne(),
    {close: n} = Q(),
    r =
      e.length === 1
        ? t.jsx(d, {
            message:
              "‘:name‘ will be deleted forever and you won't be able to restore it.",
            values: {name: e[0].name},
          })
        : t.jsx(d, {
            message:
              ":count items will be deleted forever and you won't be able to restore them.",
            values: {count: e.length},
          });
  return t.jsx(je, {
    isDanger: !0,
    title: t.jsx(d, {message: 'Delete forever?'}),
    body: r,
    confirm: t.jsx(d, {message: 'Delete forever'}),
    isLoading: s.isPending,
    onConfirm: () => {
      s.mutate(
        {entryIds: e.map(a => a.id), deleteForever: !0},
        {
          onSuccess: () => {
            n(), p().selectEntries([]);
          },
        },
      );
    },
  });
}
function ol({entries: e}) {
  const s = As(),
    {close: n} = Q();
  return t.jsx(je, {
    title: t.jsx(d, {message: 'This folder is in your trash'}),
    body: t.jsx(d, {
      message: 'To view this folder, restore it from the trash.',
    }),
    confirm: t.jsx(d, {message: 'Restore'}),
    isLoading: s.isPending,
    onConfirm: () => {
      s.mutate(
        {entryIds: e.map(r => r.id)},
        {
          onSuccess: () => {
            n(), p().selectEntries([]);
          },
        },
      );
    },
  });
}
function ll() {
  const e = y(n => n.activeActionDialog),
    s = cl(e);
  return t.jsx(de, {
    type: 'modal',
    isOpen: !!s,
    onClose: () => {
      p().setActiveActionDialog(null);
    },
    children: s,
  });
}
function cl(e) {
  var s;
  switch (e == null ? void 0 : e.name) {
    case 'rename':
      return t.jsx(Io, {entries: e.entries});
    case 'newFolder':
      return t.jsx(pn, {parentId: (s = e.entries[0]) == null ? void 0 : s.id});
    case 'preview':
      return t.jsx(Do, {selectedEntry: e.entries[0]});
    case 'share':
      return t.jsx(Ht, {entry: e.entries[0]});
    case 'getLink':
      return t.jsx(Ht, {entry: e.entries[0], focusLinkInput: !0});
    case 'moveTo':
      return t.jsx(rl, {entries: e.entries});
    case 'confirmAndDeleteForever':
      return t.jsx(il, {entries: e.entries});
    case 'trashFolderBlock':
      return t.jsx(ol, {entries: e.entries});
    default:
      return null;
  }
}
function dl() {
  const {trans: e} = U(),
    s = ee(),
    n = y(o => o.activePage),
    [r] = Ze(),
    [a, i] = f.useState(r.get('query') || '');
  return t.jsx('form', {
    className: 'flex-auto max-w-620',
    onSubmit: o => {
      o.preventDefault(),
        s({pathname: H.path, search: `?query=${a}`}, {replace: !0});
    },
    children: t.jsx(Qe, {
      size: 'sm',
      background: 'bg-paper',
      value: a,
      onChange: o => i(o.target.value),
      onFocus: () => {
        n !== H && s(H.path);
      },
      startAdornment: t.jsx(M, {
        type: 'submit',
        radius: 'rounded',
        children: t.jsx(Xe, {}),
      }),
      className: 'flex-auto max-w-620',
      placeholder: e({message: 'Search'}),
      'aria-label': e({message: 'Search files and folders'}),
    }),
  });
}
function ul(e) {
  const s = f.useRef(e),
    n = f.useId();
  f.useEffect(
    () => (
      Ot.set(n, s.current),
      () => {
        Ot.delete(n);
      }
    ),
    [n],
  );
}
function ml() {
  const e = f.useRef(null),
    [s, n] = f.useState(),
    [r, a] = f.useState({});
  ul({
    type: 'fileEntry',
    onDragStart: (o, l) => {
      const c = l;
      c &&
        (a({entries: c.getData(), e: o, draggingTreeItem: ki(c.id)}),
        n({start: o}));
    },
    onDragMove: o => {
      a(l => ({...l, e: o})), n(l => ({...l, end: o}));
    },
    onDragEnd: (o, l, c) => {
      a({status: c});
    },
  });
  let i = null;
  return (
    r.entries &&
      r.e &&
      (i = t.jsx('div', {
        ref: e,
        style: r.e
          ? {
              transform: `translate(${r.e.x}px, ${r.e.y}px)`,
              width: `${r.e.rect.width}px`,
            }
          : void 0,
        className: 'fixed isolate left-0 top-0 pointer-events-none',
        children: r.entries.map((o, l) =>
          t.jsx(hl, {index: l, entry: o, points: s, state: r}, o.id),
        ),
      })),
    t.jsx(V, {custom: r.status, children: i})
  );
}
const hl = f.memo(({entry: e, points: s, index: n, state: r}) => {
    var x, m, g, j;
    const a = y(w => w.viewMode),
      i = r.draggingTreeItem ? Et(e) : e.id,
      o = bs.get(i);
    if (!(o != null && o.rect) || !(s != null && s.start)) return null;
    const l = o.rect,
      c = ((x = r.entries) == null ? void 0 : x.length) || 0,
      u = w => {
        var v, b, S;
        return w === 'dropSuccess'
          ? {x: 0, y: 0, opacity: 0, transition: {duration: 0.1, delay: 0}}
          : {
              x: l.left - (((v = s.end) == null ? void 0 : v.x) || 0),
              y: l.top - (((b = s.end) == null ? void 0 : b.y) || 0),
              width: `${(S = r.e) == null ? void 0 : S.rect.width}px`,
            };
      };
    return t.jsxs(
      $.div,
      {
        transition: {delay: 0.01 * n, bounce: 0, duration: 0.2},
        initial: {
          x: l.left - s.start.x,
          y: l.top - s.start.y,
          width: `${(m = r.e) == null ? void 0 : m.rect.width}px`,
        },
        animate: {x: 0, y: 0, width: a === 'list' ? 288 : void 0},
        exit: u,
        style: {
          width:
            a === 'grid'
              ? `${(g = r.e) == null ? void 0 : g.rect.width}px`
              : void 0,
          height: `${(j = r.e) == null ? void 0 : j.rect.height}px`,
        },
        className: P(
          'absolute bg-paper whitespace-nowrap rounded border border-primary-light max-h-48',
          n < 2 && 'shadow',
          n === 0 && 'z-10 top-0 left-0',
          n > 0 && 'top-6 left-6',
        ),
        children: [
          c > 1 && n === 0 && t.jsx(fl, {count: c}),
          t.jsxs('div', {
            className:
              'text-sm h-full flex justify-center items-center px-16 gap-10 bg-primary-light/20 overflow-hidden',
            children: [
              t.jsx(Se, {type: e.type}),
              t.jsx('div', {
                className: 'flex-auto text-ellipsis overflow-hidden',
                children: e.name,
              }),
            ],
          }),
        ],
      },
      e.id,
    );
  }),
  fl = f.memo(({count: e}) =>
    t.jsx(
      $.div,
      {
        initial: {opacity: 0},
        animate: {opacity: 1, transition: {delay: 0.1}},
        exit: {opacity: 0},
        transition: {duration: 0.1},
        className:
          'absolute -top-6 shadow-lg -right-6 z-30 rounded-full bg-danger text-white w-20 h-20 flex items-center justify-center text-sm font-bold z-10',
        children: e,
      },
      'entryCount',
    ),
  );
function xl() {
  const {isMobileMode: e} = f.useContext(te),
    s = y(n => n.activePage);
  return t.jsxs(Ks, {
    className: 'px-8 md:px-26 py-4 flex items-center gap-20 border-b h-60',
    children: [
      e
        ? t.jsx(hn, {isDisabled: s == null ? void 0 : s.disableSort})
        : t.jsx(fn, {}),
      t.jsxs('div', {
        className: 'text-muted ml-auto flex-shrink-0',
        children: [t.jsx(pl, {}), t.jsx(gl, {})],
      }),
    ],
  });
}
function pl() {
  const e = y(n => n.viewMode),
    s =
      e === 'grid'
        ? t.jsx(d, {message: 'List view'})
        : t.jsx(d, {message: 'Grid view'});
  return t.jsx(ie, {
    label: s,
    children: t.jsx(M, {
      size: 'md',
      onClick: () => {
        p().setViewMode(p().viewMode === 'list' ? 'grid' : 'list');
      },
      children: e === 'list' ? t.jsx(Cr, {}) : t.jsx(Mr, {}),
    }),
  });
}
function gl() {
  const {rightSidenavStatus: e, setRightSidenavStatus: s} = f.useContext(te),
    n = e
      ? t.jsx(d, {message: 'Hide details'})
      : t.jsx(d, {message: 'Show details'});
  return t.jsx(ie, {
    label: n,
    children: t.jsx(M, {
      size: 'md',
      color: e === 'open' ? 'primary' : null,
      onClick: () => {
        s(e === 'open' ? 'closed' : 'open');
      },
      children: t.jsx(Ar, {}),
    }),
  });
}
function re() {
  const {pathname: e} = ns(),
    {hash: s} = rt(),
    {workspaceId: n} = W(),
    r = y(i => i.activePage);
  f.useEffect(() => {
    p().setActivePage(la.find(i => i.path === e) || Cs(s));
  }, [e, s]);
  const a = f.useMemo(() => ({workspaceId: n}), [n]);
  return (
    f.useEffect(
      () => () => {
        p().reset();
      },
      [],
    ),
    t.jsxs(f.Fragment, {
      children: [
        (r == null ? void 0 : r.label) &&
          t.jsx(Zn, {
            children: t.jsx(d, {
              message: typeof r.label == 'string' ? r.label : r.label.message,
            }),
          }),
        t.jsxs(rs, {
          children: [
            t.jsx(gs.Provider, {
              value: a,
              children: t.jsxs(fs, {
                name: 'drive',
                onDragOver: i => {
                  i.preventDefault(),
                    i.stopPropagation(),
                    (i.dataTransfer.dropEffect = 'none');
                },
                onDrop: i => {
                  i.preventDefault();
                },
                children: [
                  t.jsx(vl, {}),
                  t.jsx(Ut, {
                    position: 'left',
                    size: 'md',
                    children: t.jsx(Ai, {}),
                  }),
                  t.jsx(xl, {}),
                  t.jsx(ps, {children: t.jsx(no, {})}),
                  t.jsx(lo, {}),
                  t.jsx(ll, {}),
                  t.jsx(Ut, {
                    position: 'right',
                    size: 'lg',
                    children: t.jsx(yo, {}),
                  }),
                ],
              }),
            }),
            t.jsx(ml, {}),
          ],
        }),
      ],
    })
  );
}
function vl() {
  const {isMobileMode: e} = f.useContext(te),
    s = y(i => i.activePage),
    n = e ? null : t.jsx(dl, {}),
    r = t.jsx(M, {elementType: cs, to: H.path, children: t.jsx(Xe, {})}),
    a = t.jsxs(f.Fragment, {
      children: [s !== H && r, t.jsx(rn, {isCompact: !0})],
    });
  return t.jsxs(f.Fragment, {
    children: [
      t.jsx(xs, {
        rightChildren: e && a,
        menuPosition: 'drive-navbar',
        children: n,
      }),
      e && t.jsx(jl, {}),
    ],
  });
}
function jl() {
  const e = y(s => s.selectedEntries.size);
  return e
    ? t.jsxs('div', {
        className:
          'fixed right-0 top-0 z-10 flex h-54 w-full items-center justify-center gap-10 rounded bg-primary px-6 text-on-primary shadow-xl',
        children: [
          t.jsx(M, {
            onClick: () => {
              p().selectEntries([]);
            },
            children: t.jsx(be, {}),
          }),
          t.jsx(d, {message: ':count selected', values: {count: e}}),
          t.jsx(cn, {className: 'ml-auto'}),
        ],
      })
    : null;
}
const bl = [
  {path: '/', element: t.jsx(ne, {children: t.jsx(re, {})})},
  {path: '/folders/:hash', element: t.jsx(ne, {children: t.jsx(re, {})})},
  {path: '/shares', element: t.jsx(ne, {children: t.jsx(re, {})})},
  {path: '/recent', element: t.jsx(ne, {children: t.jsx(re, {})})},
  {path: '/starred', element: t.jsx(ne, {children: t.jsx(re, {})})},
  {path: '/trash', element: t.jsx(ne, {children: t.jsx(re, {})})},
  {path: '/search', element: t.jsx(ne, {children: t.jsx(re, {})})},
  {path: 's/:hash', element: t.jsx(Oa, {})},
  {path: '*', element: t.jsx(as, {})},
];
function Il() {
  return Xn(bl);
}
export {Il as default};
//# sourceMappingURL=drive-routes-88936d92.js.map
