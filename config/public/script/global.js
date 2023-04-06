function VS(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const o in r)
        if (o !== "default" && !(o in e)) {
          const i = Object.getOwnPropertyDescriptor(r, o);
          i &&
            Object.defineProperty(
              e,
              o,
              i.get ? i : { enumerable: !0, get: () => r[o] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
  new MutationObserver((o) => {
    for (const i of o)
      if (i.type === "childList")
        for (const s of i.addedNodes)
          s.tagName === "LINK" && s.rel === "modulepreload" && r(s);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(o) {
    const i = {};
    return (
      o.integrity && (i.integrity = o.integrity),
      o.referrerPolicy && (i.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === "use-credentials"
        ? (i.credentials = "include")
        : o.crossOrigin === "anonymous"
        ? (i.credentials = "omit")
        : (i.credentials = "same-origin"),
      i
    );
  }
  function r(o) {
    if (o.ep) return;
    o.ep = !0;
    const i = n(o);
    fetch(o.href, i);
  }
})();
var Bi =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
    ? window
    : typeof global < "u"
    ? global
    : typeof self < "u"
    ? self
    : {};
function jS(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var A = {},
  BS = {
    get exports() {
      return A;
    },
    set exports(e) {
      A = e;
    },
  },
  ka = {},
  w = {},
  zS = {
    get exports() {
      return w;
    },
    set exports(e) {
      w = e;
    },
  },
  $ = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Si = Symbol.for("react.element"),
  $S = Symbol.for("react.portal"),
  US = Symbol.for("react.fragment"),
  WS = Symbol.for("react.strict_mode"),
  HS = Symbol.for("react.profiler"),
  GS = Symbol.for("react.provider"),
  ZS = Symbol.for("react.context"),
  KS = Symbol.for("react.forward_ref"),
  YS = Symbol.for("react.suspense"),
  XS = Symbol.for("react.memo"),
  QS = Symbol.for("react.lazy"),
  Ld = Symbol.iterator;
function qS(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Ld && e[Ld]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Fm = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Im = Object.assign,
  Dm = {};
function no(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Dm),
    (this.updater = n || Fm);
}
no.prototype.isReactComponent = {};
no.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
no.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Nm() {}
Nm.prototype = no.prototype;
function Ic(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Dm),
    (this.updater = n || Fm);
}
var Dc = (Ic.prototype = new Nm());
Dc.constructor = Ic;
Im(Dc, no.prototype);
Dc.isPureReactComponent = !0;
var Fd = Array.isArray,
  Vm = Object.prototype.hasOwnProperty,
  Nc = { current: null },
  jm = { key: !0, ref: !0, __self: !0, __source: !0 };
function Bm(e, t, n) {
  var r,
    o = {},
    i = null,
    s = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (s = t.ref),
    t.key !== void 0 && (i = "" + t.key),
    t))
      Vm.call(t, r) && !jm.hasOwnProperty(r) && (o[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) o.children = n;
  else if (1 < a) {
    for (var l = Array(a), u = 0; u < a; u++) l[u] = arguments[u + 2];
    o.children = l;
  }
  if (e && e.defaultProps)
    for (r in ((a = e.defaultProps), a)) o[r] === void 0 && (o[r] = a[r]);
  return {
    $$typeof: Si,
    type: e,
    key: i,
    ref: s,
    props: o,
    _owner: Nc.current,
  };
}
function JS(e, t) {
  return {
    $$typeof: Si,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Vc(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Si;
}
function ew(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Id = /\/+/g;
function ml(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? ew("" + e.key)
    : t.toString(36);
}
function hs(e, t, n, r, o) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var s = !1;
  if (e === null) s = !0;
  else
    switch (i) {
      case "string":
      case "number":
        s = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Si:
          case $S:
            s = !0;
        }
    }
  if (s)
    return (
      (s = e),
      (o = o(s)),
      (e = r === "" ? "." + ml(s, 0) : r),
      Fd(o)
        ? ((n = ""),
          e != null && (n = e.replace(Id, "$&/") + "/"),
          hs(o, t, n, "", function (u) {
            return u;
          }))
        : o != null &&
          (Vc(o) &&
            (o = JS(
              o,
              n +
                (!o.key || (s && s.key === o.key)
                  ? ""
                  : ("" + o.key).replace(Id, "$&/") + "/") +
                e
            )),
          t.push(o)),
      1
    );
  if (((s = 0), (r = r === "" ? "." : r + ":"), Fd(e)))
    for (var a = 0; a < e.length; a++) {
      i = e[a];
      var l = r + ml(i, a);
      s += hs(i, t, n, l, o);
    }
  else if (((l = qS(e)), typeof l == "function"))
    for (e = l.call(e), a = 0; !(i = e.next()).done; )
      (i = i.value), (l = r + ml(i, a++)), (s += hs(i, t, n, l, o));
  else if (i === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return s;
}
function zi(e, t, n) {
  if (e == null) return e;
  var r = [],
    o = 0;
  return (
    hs(e, r, "", "", function (i) {
      return t.call(n, i, o++);
    }),
    r
  );
}
function tw(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var He = { current: null },
  ms = { transition: null },
  nw = {
    ReactCurrentDispatcher: He,
    ReactCurrentBatchConfig: ms,
    ReactCurrentOwner: Nc,
  };
$.Children = {
  map: zi,
  forEach: function (e, t, n) {
    zi(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      zi(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      zi(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Vc(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
$.Component = no;
$.Fragment = US;
$.Profiler = HS;
$.PureComponent = Ic;
$.StrictMode = WS;
$.Suspense = YS;
$.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = nw;
$.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = Im({}, e.props),
    o = e.key,
    i = e.ref,
    s = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (s = Nc.current)),
      t.key !== void 0 && (o = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var a = e.type.defaultProps;
    for (l in t)
      Vm.call(t, l) &&
        !jm.hasOwnProperty(l) &&
        (r[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l]);
  }
  var l = arguments.length - 2;
  if (l === 1) r.children = n;
  else if (1 < l) {
    a = Array(l);
    for (var u = 0; u < l; u++) a[u] = arguments[u + 2];
    r.children = a;
  }
  return { $$typeof: Si, type: e.type, key: o, ref: i, props: r, _owner: s };
};
$.createContext = function (e) {
  return (
    (e = {
      $$typeof: ZS,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: GS, _context: e }),
    (e.Consumer = e)
  );
};
$.createElement = Bm;
$.createFactory = function (e) {
  var t = Bm.bind(null, e);
  return (t.type = e), t;
};
$.createRef = function () {
  return { current: null };
};
$.forwardRef = function (e) {
  return { $$typeof: KS, render: e };
};
$.isValidElement = Vc;
$.lazy = function (e) {
  return { $$typeof: QS, _payload: { _status: -1, _result: e }, _init: tw };
};
$.memo = function (e, t) {
  return { $$typeof: XS, type: e, compare: t === void 0 ? null : t };
};
$.startTransition = function (e) {
  var t = ms.transition;
  ms.transition = {};
  try {
    e();
  } finally {
    ms.transition = t;
  }
};
$.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
$.useCallback = function (e, t) {
  return He.current.useCallback(e, t);
};
$.useContext = function (e) {
  return He.current.useContext(e);
};
$.useDebugValue = function () {};
$.useDeferredValue = function (e) {
  return He.current.useDeferredValue(e);
};
$.useEffect = function (e, t) {
  return He.current.useEffect(e, t);
};
$.useId = function () {
  return He.current.useId();
};
$.useImperativeHandle = function (e, t, n) {
  return He.current.useImperativeHandle(e, t, n);
};
$.useInsertionEffect = function (e, t) {
  return He.current.useInsertionEffect(e, t);
};
$.useLayoutEffect = function (e, t) {
  return He.current.useLayoutEffect(e, t);
};
$.useMemo = function (e, t) {
  return He.current.useMemo(e, t);
};
$.useReducer = function (e, t, n) {
  return He.current.useReducer(e, t, n);
};
$.useRef = function (e) {
  return He.current.useRef(e);
};
$.useState = function (e) {
  return He.current.useState(e);
};
$.useSyncExternalStore = function (e, t, n) {
  return He.current.useSyncExternalStore(e, t, n);
};
$.useTransition = function () {
  return He.current.useTransition();
};
$.version = "18.2.0";
(function (e) {
  e.exports = $;
})(zS);
const L = jS(w),
  Dd = VS({ __proto__: null, default: L }, [w]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var rw = w,
  ow = Symbol.for("react.element"),
  iw = Symbol.for("react.fragment"),
  sw = Object.prototype.hasOwnProperty,
  aw = rw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  lw = { key: !0, ref: !0, __self: !0, __source: !0 };
function zm(e, t, n) {
  var r,
    o = {},
    i = null,
    s = null;
  n !== void 0 && (i = "" + n),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (s = t.ref);
  for (r in t) sw.call(t, r) && !lw.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r]);
  return {
    $$typeof: ow,
    type: e,
    key: i,
    ref: s,
    props: o,
    _owner: aw.current,
  };
}
ka.Fragment = iw;
ka.jsx = zm;
ka.jsxs = zm;
(function (e) {
  e.exports = ka;
})(BS);
var Fs = {},
  Wo = {},
  uw = {
    get exports() {
      return Wo;
    },
    set exports(e) {
      Wo = e;
    },
  },
  ut = {},
  cu = {},
  cw = {
    get exports() {
      return cu;
    },
    set exports(e) {
      cu = e;
    },
  },
  $m = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(O, j) {
    var z = O.length;
    O.push(j);
    e: for (; 0 < z; ) {
      var B = (z - 1) >>> 1,
        ee = O[B];
      if (0 < o(ee, j)) (O[B] = j), (O[z] = ee), (z = B);
      else break e;
    }
  }
  function n(O) {
    return O.length === 0 ? null : O[0];
  }
  function r(O) {
    if (O.length === 0) return null;
    var j = O[0],
      z = O.pop();
    if (z !== j) {
      O[0] = z;
      e: for (var B = 0, ee = O.length, U = ee >>> 1; B < U; ) {
        var Ie = 2 * (B + 1) - 1,
          Rt = O[Ie],
          ge = Ie + 1,
          Te = O[ge];
        if (0 > o(Rt, z))
          ge < ee && 0 > o(Te, Rt)
            ? ((O[B] = Te), (O[ge] = z), (B = ge))
            : ((O[B] = Rt), (O[Ie] = z), (B = Ie));
        else if (ge < ee && 0 > o(Te, z)) (O[B] = Te), (O[ge] = z), (B = ge);
        else break e;
      }
    }
    return j;
  }
  function o(O, j) {
    var z = O.sortIndex - j.sortIndex;
    return z !== 0 ? z : O.id - j.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var s = Date,
      a = s.now();
    e.unstable_now = function () {
      return s.now() - a;
    };
  }
  var l = [],
    u = [],
    c = 1,
    f = null,
    d = 3,
    p = !1,
    S = !1,
    v = !1,
    P = typeof setTimeout == "function" ? setTimeout : null,
    g = typeof clearTimeout == "function" ? clearTimeout : null,
    h = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function m(O) {
    for (var j = n(u); j !== null; ) {
      if (j.callback === null) r(u);
      else if (j.startTime <= O)
        r(u), (j.sortIndex = j.expirationTime), t(l, j);
      else break;
      j = n(u);
    }
  }
  function C(O) {
    if (((v = !1), m(O), !S))
      if (n(l) !== null) (S = !0), Fe(E);
      else {
        var j = n(u);
        j !== null && Ze(C, j.startTime - O);
      }
  }
  function E(O, j) {
    (S = !1), v && ((v = !1), g(_), (_ = -1)), (p = !0);
    var z = d;
    try {
      for (
        m(j), f = n(l);
        f !== null && (!(f.expirationTime > j) || (O && !q()));

      ) {
        var B = f.callback;
        if (typeof B == "function") {
          (f.callback = null), (d = f.priorityLevel);
          var ee = B(f.expirationTime <= j);
          (j = e.unstable_now()),
            typeof ee == "function" ? (f.callback = ee) : f === n(l) && r(l),
            m(j);
        } else r(l);
        f = n(l);
      }
      if (f !== null) var U = !0;
      else {
        var Ie = n(u);
        Ie !== null && Ze(C, Ie.startTime - j), (U = !1);
      }
      return U;
    } finally {
      (f = null), (d = z), (p = !1);
    }
  }
  var R = !1,
    b = null,
    _ = -1,
    D = 5,
    N = -1;
  function q() {
    return !(e.unstable_now() - N < D);
  }
  function Ce() {
    if (b !== null) {
      var O = e.unstable_now();
      N = O;
      var j = !0;
      try {
        j = b(!0, O);
      } finally {
        j ? Pe() : ((R = !1), (b = null));
      }
    } else R = !1;
  }
  var Pe;
  if (typeof h == "function")
    Pe = function () {
      h(Ce);
    };
  else if (typeof MessageChannel < "u") {
    var J = new MessageChannel(),
      re = J.port2;
    (J.port1.onmessage = Ce),
      (Pe = function () {
        re.postMessage(null);
      });
  } else
    Pe = function () {
      P(Ce, 0);
    };
  function Fe(O) {
    (b = O), R || ((R = !0), Pe());
  }
  function Ze(O, j) {
    _ = P(function () {
      O(e.unstable_now());
    }, j);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (O) {
      O.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      S || p || ((S = !0), Fe(E));
    }),
    (e.unstable_forceFrameRate = function (O) {
      0 > O || 125 < O
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (D = 0 < O ? Math.floor(1e3 / O) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return d;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(l);
    }),
    (e.unstable_next = function (O) {
      switch (d) {
        case 1:
        case 2:
        case 3:
          var j = 3;
          break;
        default:
          j = d;
      }
      var z = d;
      d = j;
      try {
        return O();
      } finally {
        d = z;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (O, j) {
      switch (O) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          O = 3;
      }
      var z = d;
      d = O;
      try {
        return j();
      } finally {
        d = z;
      }
    }),
    (e.unstable_scheduleCallback = function (O, j, z) {
      var B = e.unstable_now();
      switch (
        (typeof z == "object" && z !== null
          ? ((z = z.delay), (z = typeof z == "number" && 0 < z ? B + z : B))
          : (z = B),
        O)
      ) {
        case 1:
          var ee = -1;
          break;
        case 2:
          ee = 250;
          break;
        case 5:
          ee = 1073741823;
          break;
        case 4:
          ee = 1e4;
          break;
        default:
          ee = 5e3;
      }
      return (
        (ee = z + ee),
        (O = {
          id: c++,
          callback: j,
          priorityLevel: O,
          startTime: z,
          expirationTime: ee,
          sortIndex: -1,
        }),
        z > B
          ? ((O.sortIndex = z),
            t(u, O),
            n(l) === null &&
              O === n(u) &&
              (v ? (g(_), (_ = -1)) : (v = !0), Ze(C, z - B)))
          : ((O.sortIndex = ee), t(l, O), S || p || ((S = !0), Fe(E))),
        O
      );
    }),
    (e.unstable_shouldYield = q),
    (e.unstable_wrapCallback = function (O) {
      var j = d;
      return function () {
        var z = d;
        d = j;
        try {
          return O.apply(this, arguments);
        } finally {
          d = z;
        }
      };
    });
})($m);
(function (e) {
  e.exports = $m;
})(cw);
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Um = w,
  at = cu;
function M(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var Wm = new Set(),
  Ho = {};
function ar(e, t) {
  Hr(e, t), Hr(e + "Capture", t);
}
function Hr(e, t) {
  for (Ho[e] = t, e = 0; e < t.length; e++) Wm.add(t[e]);
}
var rn = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  fu = Object.prototype.hasOwnProperty,
  fw =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Nd = {},
  Vd = {};
function dw(e) {
  return fu.call(Vd, e)
    ? !0
    : fu.call(Nd, e)
    ? !1
    : fw.test(e)
    ? (Vd[e] = !0)
    : ((Nd[e] = !0), !1);
}
function pw(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function hw(e, t, n, r) {
  if (t === null || typeof t > "u" || pw(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function Ge(e, t, n, r, o, i, s) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = o),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = s);
}
var Le = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    Le[e] = new Ge(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  Le[t] = new Ge(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  Le[e] = new Ge(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  Le[e] = new Ge(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    Le[e] = new Ge(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  Le[e] = new Ge(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  Le[e] = new Ge(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  Le[e] = new Ge(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  Le[e] = new Ge(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var jc = /[\-:]([a-z])/g;
function Bc(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(jc, Bc);
    Le[t] = new Ge(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(jc, Bc);
    Le[t] = new Ge(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(jc, Bc);
  Le[t] = new Ge(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  Le[e] = new Ge(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Le.xlinkHref = new Ge(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  Le[e] = new Ge(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function zc(e, t, n, r) {
  var o = Le.hasOwnProperty(t) ? Le[t] : null;
  (o !== null
    ? o.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (hw(t, n, o, r) && (n = null),
    r || o === null
      ? dw(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : o.mustUseProperty
      ? (e[o.propertyName] = n === null ? (o.type === 3 ? !1 : "") : n)
      : ((t = o.attributeName),
        (r = o.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((o = o.type),
            (n = o === 3 || (o === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var ln = Um.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  $i = Symbol.for("react.element"),
  Sr = Symbol.for("react.portal"),
  wr = Symbol.for("react.fragment"),
  $c = Symbol.for("react.strict_mode"),
  du = Symbol.for("react.profiler"),
  Hm = Symbol.for("react.provider"),
  Gm = Symbol.for("react.context"),
  Uc = Symbol.for("react.forward_ref"),
  pu = Symbol.for("react.suspense"),
  hu = Symbol.for("react.suspense_list"),
  Wc = Symbol.for("react.memo"),
  dn = Symbol.for("react.lazy"),
  Zm = Symbol.for("react.offscreen"),
  jd = Symbol.iterator;
function co(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (jd && e[jd]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var he = Object.assign,
  gl;
function Co(e) {
  if (gl === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      gl = (t && t[1]) || "";
    }
  return (
    `
` +
    gl +
    e
  );
}
var vl = !1;
function yl(e, t) {
  if (!e || vl) return "";
  vl = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (
        var o = u.stack.split(`
`),
          i = r.stack.split(`
`),
          s = o.length - 1,
          a = i.length - 1;
        1 <= s && 0 <= a && o[s] !== i[a];

      )
        a--;
      for (; 1 <= s && 0 <= a; s--, a--)
        if (o[s] !== i[a]) {
          if (s !== 1 || a !== 1)
            do
              if ((s--, a--, 0 > a || o[s] !== i[a])) {
                var l =
                  `
` + o[s].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    l.includes("<anonymous>") &&
                    (l = l.replace("<anonymous>", e.displayName)),
                  l
                );
              }
            while (1 <= s && 0 <= a);
          break;
        }
    }
  } finally {
    (vl = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? Co(e) : "";
}
function mw(e) {
  switch (e.tag) {
    case 5:
      return Co(e.type);
    case 16:
      return Co("Lazy");
    case 13:
      return Co("Suspense");
    case 19:
      return Co("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = yl(e.type, !1)), e;
    case 11:
      return (e = yl(e.type.render, !1)), e;
    case 1:
      return (e = yl(e.type, !0)), e;
    default:
      return "";
  }
}
function mu(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case wr:
      return "Fragment";
    case Sr:
      return "Portal";
    case du:
      return "Profiler";
    case $c:
      return "StrictMode";
    case pu:
      return "Suspense";
    case hu:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Gm:
        return (e.displayName || "Context") + ".Consumer";
      case Hm:
        return (e._context.displayName || "Context") + ".Provider";
      case Uc:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Wc:
        return (
          (t = e.displayName || null), t !== null ? t : mu(e.type) || "Memo"
        );
      case dn:
        (t = e._payload), (e = e._init);
        try {
          return mu(e(t));
        } catch {}
    }
  return null;
}
function gw(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return mu(t);
    case 8:
      return t === $c ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function Rn(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Km(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function vw(e) {
  var t = Km(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var o = n.get,
      i = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return o.call(this);
        },
        set: function (s) {
          (r = "" + s), i.call(this, s);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (s) {
          r = "" + s;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function Ui(e) {
  e._valueTracker || (e._valueTracker = vw(e));
}
function Ym(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Km(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Is(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function gu(e, t) {
  var n = t.checked;
  return he({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Bd(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = Rn(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function Xm(e, t) {
  (t = t.checked), t != null && zc(e, "checked", t, !1);
}
function vu(e, t) {
  Xm(e, t);
  var n = Rn(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? yu(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && yu(e, t.type, Rn(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function zd(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function yu(e, t, n) {
  (t !== "number" || Is(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Po = Array.isArray;
function Ir(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      (o = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== o && (e[n].selected = o),
        o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Rn(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        (e[o].selected = !0), r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function Su(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(M(91));
  return he({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function $d(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(M(92));
      if (Po(n)) {
        if (1 < n.length) throw Error(M(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: Rn(n) };
}
function Qm(e, t) {
  var n = Rn(t.value),
    r = Rn(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function Ud(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function qm(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function wu(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? qm(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var Wi,
  Jm = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, o) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, o);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        Wi = Wi || document.createElement("div"),
          Wi.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Wi.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Go(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var _o = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  yw = ["Webkit", "ms", "Moz", "O"];
Object.keys(_o).forEach(function (e) {
  yw.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (_o[t] = _o[e]);
  });
});
function eg(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (_o.hasOwnProperty(e) && _o[e])
    ? ("" + t).trim()
    : t + "px";
}
function tg(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        o = eg(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : (e[n] = o);
    }
}
var Sw = he(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function xu(e, t) {
  if (t) {
    if (Sw[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(M(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(M(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(M(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(M(62));
  }
}
function ku(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var Cu = null;
function Hc(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Pu = null,
  Dr = null,
  Nr = null;
function Wd(e) {
  if ((e = ki(e))) {
    if (typeof Pu != "function") throw Error(M(280));
    var t = e.stateNode;
    t && ((t = ba(t)), Pu(e.stateNode, e.type, t));
  }
}
function ng(e) {
  Dr ? (Nr ? Nr.push(e) : (Nr = [e])) : (Dr = e);
}
function rg() {
  if (Dr) {
    var e = Dr,
      t = Nr;
    if (((Nr = Dr = null), Wd(e), t)) for (e = 0; e < t.length; e++) Wd(t[e]);
  }
}
function og(e, t) {
  return e(t);
}
function ig() {}
var Sl = !1;
function sg(e, t, n) {
  if (Sl) return e(t, n);
  Sl = !0;
  try {
    return og(e, t, n);
  } finally {
    (Sl = !1), (Dr !== null || Nr !== null) && (ig(), rg());
  }
}
function Zo(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = ba(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
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
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(M(231, t, typeof n));
  return n;
}
var Tu = !1;
if (rn)
  try {
    var fo = {};
    Object.defineProperty(fo, "passive", {
      get: function () {
        Tu = !0;
      },
    }),
      window.addEventListener("test", fo, fo),
      window.removeEventListener("test", fo, fo);
  } catch {
    Tu = !1;
  }
function ww(e, t, n, r, o, i, s, a, l) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var Ro = !1,
  Ds = null,
  Ns = !1,
  Eu = null,
  xw = {
    onError: function (e) {
      (Ro = !0), (Ds = e);
    },
  };
function kw(e, t, n, r, o, i, s, a, l) {
  (Ro = !1), (Ds = null), ww.apply(xw, arguments);
}
function Cw(e, t, n, r, o, i, s, a, l) {
  if ((kw.apply(this, arguments), Ro)) {
    if (Ro) {
      var u = Ds;
      (Ro = !1), (Ds = null);
    } else throw Error(M(198));
    Ns || ((Ns = !0), (Eu = u));
  }
}
function lr(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function ag(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Hd(e) {
  if (lr(e) !== e) throw Error(M(188));
}
function Pw(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = lr(e)), t === null)) throw Error(M(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var o = n.return;
    if (o === null) break;
    var i = o.alternate;
    if (i === null) {
      if (((r = o.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (o.child === i.child) {
      for (i = o.child; i; ) {
        if (i === n) return Hd(o), e;
        if (i === r) return Hd(o), t;
        i = i.sibling;
      }
      throw Error(M(188));
    }
    if (n.return !== r.return) (n = o), (r = i);
    else {
      for (var s = !1, a = o.child; a; ) {
        if (a === n) {
          (s = !0), (n = o), (r = i);
          break;
        }
        if (a === r) {
          (s = !0), (r = o), (n = i);
          break;
        }
        a = a.sibling;
      }
      if (!s) {
        for (a = i.child; a; ) {
          if (a === n) {
            (s = !0), (n = i), (r = o);
            break;
          }
          if (a === r) {
            (s = !0), (r = i), (n = o);
            break;
          }
          a = a.sibling;
        }
        if (!s) throw Error(M(189));
      }
    }
    if (n.alternate !== r) throw Error(M(190));
  }
  if (n.tag !== 3) throw Error(M(188));
  return n.stateNode.current === n ? e : t;
}
function lg(e) {
  return (e = Pw(e)), e !== null ? ug(e) : null;
}
function ug(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = ug(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var cg = at.unstable_scheduleCallback,
  Gd = at.unstable_cancelCallback,
  Tw = at.unstable_shouldYield,
  Ew = at.unstable_requestPaint,
  ve = at.unstable_now,
  bw = at.unstable_getCurrentPriorityLevel,
  Gc = at.unstable_ImmediatePriority,
  fg = at.unstable_UserBlockingPriority,
  Vs = at.unstable_NormalPriority,
  _w = at.unstable_LowPriority,
  dg = at.unstable_IdlePriority,
  Ca = null,
  Bt = null;
function Rw(e) {
  if (Bt && typeof Bt.onCommitFiberRoot == "function")
    try {
      Bt.onCommitFiberRoot(Ca, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Et = Math.clz32 ? Math.clz32 : Ow,
  Mw = Math.log,
  Aw = Math.LN2;
function Ow(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Mw(e) / Aw) | 0)) | 0;
}
var Hi = 64,
  Gi = 4194304;
function To(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
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
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function js(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    o = e.suspendedLanes,
    i = e.pingedLanes,
    s = n & 268435455;
  if (s !== 0) {
    var a = s & ~o;
    a !== 0 ? (r = To(a)) : ((i &= s), i !== 0 && (r = To(i)));
  } else (s = n & ~o), s !== 0 ? (r = To(s)) : i !== 0 && (r = To(i));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & o) &&
    ((o = r & -r), (i = t & -t), o >= i || (o === 16 && (i & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - Et(t)), (o = 1 << n), (r |= e[n]), (t &= ~o);
  return r;
}
function Lw(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
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
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function Fw(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      o = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;

  ) {
    var s = 31 - Et(i),
      a = 1 << s,
      l = o[s];
    l === -1
      ? (!(a & n) || a & r) && (o[s] = Lw(a, t))
      : l <= t && (e.expiredLanes |= a),
      (i &= ~a);
  }
}
function bu(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function pg() {
  var e = Hi;
  return (Hi <<= 1), !(Hi & 4194240) && (Hi = 64), e;
}
function wl(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function wi(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Et(t)),
    (e[t] = n);
}
function Iw(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - Et(n),
      i = 1 << o;
    (t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~i);
  }
}
function Zc(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Et(n),
      o = 1 << r;
    (o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o);
  }
}
var Q = 0;
function hg(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var mg,
  Kc,
  gg,
  vg,
  yg,
  _u = !1,
  Zi = [],
  Sn = null,
  wn = null,
  xn = null,
  Ko = new Map(),
  Yo = new Map(),
  mn = [],
  Dw =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Zd(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Sn = null;
      break;
    case "dragenter":
    case "dragleave":
      wn = null;
      break;
    case "mouseover":
    case "mouseout":
      xn = null;
      break;
    case "pointerover":
    case "pointerout":
      Ko.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Yo.delete(t.pointerId);
  }
}
function po(e, t, n, r, o, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [o],
      }),
      t !== null && ((t = ki(t)), t !== null && Kc(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      o !== null && t.indexOf(o) === -1 && t.push(o),
      e);
}
function Nw(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return (Sn = po(Sn, e, t, n, r, o)), !0;
    case "dragenter":
      return (wn = po(wn, e, t, n, r, o)), !0;
    case "mouseover":
      return (xn = po(xn, e, t, n, r, o)), !0;
    case "pointerover":
      var i = o.pointerId;
      return Ko.set(i, po(Ko.get(i) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return (
        (i = o.pointerId), Yo.set(i, po(Yo.get(i) || null, e, t, n, r, o)), !0
      );
  }
  return !1;
}
function Sg(e) {
  var t = Hn(e.target);
  if (t !== null) {
    var n = lr(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = ag(n)), t !== null)) {
          (e.blockedOn = t),
            yg(e.priority, function () {
              gg(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function gs(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Ru(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Cu = r), n.target.dispatchEvent(r), (Cu = null);
    } else return (t = ki(n)), t !== null && Kc(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Kd(e, t, n) {
  gs(e) && n.delete(t);
}
function Vw() {
  (_u = !1),
    Sn !== null && gs(Sn) && (Sn = null),
    wn !== null && gs(wn) && (wn = null),
    xn !== null && gs(xn) && (xn = null),
    Ko.forEach(Kd),
    Yo.forEach(Kd);
}
function ho(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    _u ||
      ((_u = !0),
      at.unstable_scheduleCallback(at.unstable_NormalPriority, Vw)));
}
function Xo(e) {
  function t(o) {
    return ho(o, e);
  }
  if (0 < Zi.length) {
    ho(Zi[0], e);
    for (var n = 1; n < Zi.length; n++) {
      var r = Zi[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Sn !== null && ho(Sn, e),
      wn !== null && ho(wn, e),
      xn !== null && ho(xn, e),
      Ko.forEach(t),
      Yo.forEach(t),
      n = 0;
    n < mn.length;
    n++
  )
    (r = mn[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < mn.length && ((n = mn[0]), n.blockedOn === null); )
    Sg(n), n.blockedOn === null && mn.shift();
}
var Vr = ln.ReactCurrentBatchConfig,
  Bs = !0;
function jw(e, t, n, r) {
  var o = Q,
    i = Vr.transition;
  Vr.transition = null;
  try {
    (Q = 1), Yc(e, t, n, r);
  } finally {
    (Q = o), (Vr.transition = i);
  }
}
function Bw(e, t, n, r) {
  var o = Q,
    i = Vr.transition;
  Vr.transition = null;
  try {
    (Q = 4), Yc(e, t, n, r);
  } finally {
    (Q = o), (Vr.transition = i);
  }
}
function Yc(e, t, n, r) {
  if (Bs) {
    var o = Ru(e, t, n, r);
    if (o === null) Ml(e, t, r, zs, n), Zd(e, r);
    else if (Nw(o, e, t, n, r)) r.stopPropagation();
    else if ((Zd(e, r), t & 4 && -1 < Dw.indexOf(e))) {
      for (; o !== null; ) {
        var i = ki(o);
        if (
          (i !== null && mg(i),
          (i = Ru(e, t, n, r)),
          i === null && Ml(e, t, r, zs, n),
          i === o)
        )
          break;
        o = i;
      }
      o !== null && r.stopPropagation();
    } else Ml(e, t, r, null, n);
  }
}
var zs = null;
function Ru(e, t, n, r) {
  if (((zs = null), (e = Hc(r)), (e = Hn(e)), e !== null))
    if (((t = lr(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = ag(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (zs = e), null;
}
function wg(e) {
  switch (e) {
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
    case "selectstart":
      return 1;
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
    case "pointerleave":
      return 4;
    case "message":
      switch (bw()) {
        case Gc:
          return 1;
        case fg:
          return 4;
        case Vs:
        case _w:
          return 16;
        case dg:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var vn = null,
  Xc = null,
  vs = null;
function xg() {
  if (vs) return vs;
  var e,
    t = Xc,
    n = t.length,
    r,
    o = "value" in vn ? vn.value : vn.textContent,
    i = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++);
  var s = n - e;
  for (r = 1; r <= s && t[n - r] === o[i - r]; r++);
  return (vs = o.slice(e, 1 < r ? 1 - r : void 0));
}
function ys(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Ki() {
  return !0;
}
function Yd() {
  return !1;
}
function ct(e) {
  function t(n, r, o, i, s) {
    (this._reactName = n),
      (this._targetInst = o),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = s),
      (this.currentTarget = null);
    for (var a in e)
      e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(i) : i[a]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? Ki
        : Yd),
      (this.isPropagationStopped = Yd),
      this
    );
  }
  return (
    he(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Ki));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Ki));
      },
      persist: function () {},
      isPersistent: Ki,
    }),
    t
  );
}
var ro = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Qc = ct(ro),
  xi = he({}, ro, { view: 0, detail: 0 }),
  zw = ct(xi),
  xl,
  kl,
  mo,
  Pa = he({}, xi, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: qc,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== mo &&
            (mo && e.type === "mousemove"
              ? ((xl = e.screenX - mo.screenX), (kl = e.screenY - mo.screenY))
              : (kl = xl = 0),
            (mo = e)),
          xl);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : kl;
    },
  }),
  Xd = ct(Pa),
  $w = he({}, Pa, { dataTransfer: 0 }),
  Uw = ct($w),
  Ww = he({}, xi, { relatedTarget: 0 }),
  Cl = ct(Ww),
  Hw = he({}, ro, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Gw = ct(Hw),
  Zw = he({}, ro, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Kw = ct(Zw),
  Yw = he({}, ro, { data: 0 }),
  Qd = ct(Yw),
  Xw = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  Qw = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  qw = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function Jw(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = qw[e]) ? !!t[e] : !1;
}
function qc() {
  return Jw;
}
var ex = he({}, xi, {
    key: function (e) {
      if (e.key) {
        var t = Xw[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = ys(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? Qw[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: qc,
    charCode: function (e) {
      return e.type === "keypress" ? ys(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? ys(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  tx = ct(ex),
  nx = he({}, Pa, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  qd = ct(nx),
  rx = he({}, xi, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: qc,
  }),
  ox = ct(rx),
  ix = he({}, ro, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  sx = ct(ix),
  ax = he({}, Pa, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  lx = ct(ax),
  ux = [9, 13, 27, 32],
  Jc = rn && "CompositionEvent" in window,
  Mo = null;
rn && "documentMode" in document && (Mo = document.documentMode);
var cx = rn && "TextEvent" in window && !Mo,
  kg = rn && (!Jc || (Mo && 8 < Mo && 11 >= Mo)),
  Jd = String.fromCharCode(32),
  ep = !1;
function Cg(e, t) {
  switch (e) {
    case "keyup":
      return ux.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Pg(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var xr = !1;
function fx(e, t) {
  switch (e) {
    case "compositionend":
      return Pg(t);
    case "keypress":
      return t.which !== 32 ? null : ((ep = !0), Jd);
    case "textInput":
      return (e = t.data), e === Jd && ep ? null : e;
    default:
      return null;
  }
}
function dx(e, t) {
  if (xr)
    return e === "compositionend" || (!Jc && Cg(e, t))
      ? ((e = xg()), (vs = Xc = vn = null), (xr = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return kg && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var px = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function tp(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!px[e.type] : t === "textarea";
}
function Tg(e, t, n, r) {
  ng(r),
    (t = $s(t, "onChange")),
    0 < t.length &&
      ((n = new Qc("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Ao = null,
  Qo = null;
function hx(e) {
  Dg(e, 0);
}
function Ta(e) {
  var t = Pr(e);
  if (Ym(t)) return e;
}
function mx(e, t) {
  if (e === "change") return t;
}
var Eg = !1;
if (rn) {
  var Pl;
  if (rn) {
    var Tl = "oninput" in document;
    if (!Tl) {
      var np = document.createElement("div");
      np.setAttribute("oninput", "return;"),
        (Tl = typeof np.oninput == "function");
    }
    Pl = Tl;
  } else Pl = !1;
  Eg = Pl && (!document.documentMode || 9 < document.documentMode);
}
function rp() {
  Ao && (Ao.detachEvent("onpropertychange", bg), (Qo = Ao = null));
}
function bg(e) {
  if (e.propertyName === "value" && Ta(Qo)) {
    var t = [];
    Tg(t, Qo, e, Hc(e)), sg(hx, t);
  }
}
function gx(e, t, n) {
  e === "focusin"
    ? (rp(), (Ao = t), (Qo = n), Ao.attachEvent("onpropertychange", bg))
    : e === "focusout" && rp();
}
function vx(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Ta(Qo);
}
function yx(e, t) {
  if (e === "click") return Ta(t);
}
function Sx(e, t) {
  if (e === "input" || e === "change") return Ta(t);
}
function wx(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var _t = typeof Object.is == "function" ? Object.is : wx;
function qo(e, t) {
  if (_t(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!fu.call(t, o) || !_t(e[o], t[o])) return !1;
  }
  return !0;
}
function op(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function ip(e, t) {
  var n = op(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = op(n);
  }
}
function _g(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? _g(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Rg() {
  for (var e = window, t = Is(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Is(e.document);
  }
  return t;
}
function ef(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function xx(e) {
  var t = Rg(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    _g(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && ef(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var o = n.textContent.length,
          i = Math.min(r.start, o);
        (r = r.end === void 0 ? i : Math.min(r.end, o)),
          !e.extend && i > r && ((o = r), (r = i), (i = o)),
          (o = ip(n, i));
        var s = ip(n, r);
        o &&
          s &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== o.node ||
            e.anchorOffset !== o.offset ||
            e.focusNode !== s.node ||
            e.focusOffset !== s.offset) &&
          ((t = t.createRange()),
          t.setStart(o.node, o.offset),
          e.removeAllRanges(),
          i > r
            ? (e.addRange(t), e.extend(s.node, s.offset))
            : (t.setEnd(s.node, s.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var kx = rn && "documentMode" in document && 11 >= document.documentMode,
  kr = null,
  Mu = null,
  Oo = null,
  Au = !1;
function sp(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Au ||
    kr == null ||
    kr !== Is(r) ||
    ((r = kr),
    "selectionStart" in r && ef(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Oo && qo(Oo, r)) ||
      ((Oo = r),
      (r = $s(Mu, "onSelect")),
      0 < r.length &&
        ((t = new Qc("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = kr))));
}
function Yi(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Cr = {
    animationend: Yi("Animation", "AnimationEnd"),
    animationiteration: Yi("Animation", "AnimationIteration"),
    animationstart: Yi("Animation", "AnimationStart"),
    transitionend: Yi("Transition", "TransitionEnd"),
  },
  El = {},
  Mg = {};
rn &&
  ((Mg = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Cr.animationend.animation,
    delete Cr.animationiteration.animation,
    delete Cr.animationstart.animation),
  "TransitionEvent" in window || delete Cr.transitionend.transition);
function Ea(e) {
  if (El[e]) return El[e];
  if (!Cr[e]) return e;
  var t = Cr[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Mg) return (El[e] = t[n]);
  return e;
}
var Ag = Ea("animationend"),
  Og = Ea("animationiteration"),
  Lg = Ea("animationstart"),
  Fg = Ea("transitionend"),
  Ig = new Map(),
  ap =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function Ln(e, t) {
  Ig.set(e, t), ar(t, [e]);
}
for (var bl = 0; bl < ap.length; bl++) {
  var _l = ap[bl],
    Cx = _l.toLowerCase(),
    Px = _l[0].toUpperCase() + _l.slice(1);
  Ln(Cx, "on" + Px);
}
Ln(Ag, "onAnimationEnd");
Ln(Og, "onAnimationIteration");
Ln(Lg, "onAnimationStart");
Ln("dblclick", "onDoubleClick");
Ln("focusin", "onFocus");
Ln("focusout", "onBlur");
Ln(Fg, "onTransitionEnd");
Hr("onMouseEnter", ["mouseout", "mouseover"]);
Hr("onMouseLeave", ["mouseout", "mouseover"]);
Hr("onPointerEnter", ["pointerout", "pointerover"]);
Hr("onPointerLeave", ["pointerout", "pointerover"]);
ar(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
ar(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
ar("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
ar(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
ar(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
ar(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Eo =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  Tx = new Set("cancel close invalid load scroll toggle".split(" ").concat(Eo));
function lp(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), Cw(r, t, void 0, e), (e.currentTarget = null);
}
function Dg(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      o = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var s = r.length - 1; 0 <= s; s--) {
          var a = r[s],
            l = a.instance,
            u = a.currentTarget;
          if (((a = a.listener), l !== i && o.isPropagationStopped())) break e;
          lp(o, a, u), (i = l);
        }
      else
        for (s = 0; s < r.length; s++) {
          if (
            ((a = r[s]),
            (l = a.instance),
            (u = a.currentTarget),
            (a = a.listener),
            l !== i && o.isPropagationStopped())
          )
            break e;
          lp(o, a, u), (i = l);
        }
    }
  }
  if (Ns) throw ((e = Eu), (Ns = !1), (Eu = null), e);
}
function oe(e, t) {
  var n = t[Du];
  n === void 0 && (n = t[Du] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Ng(t, e, 2, !1), n.add(r));
}
function Rl(e, t, n) {
  var r = 0;
  t && (r |= 4), Ng(n, e, r, t);
}
var Xi = "_reactListening" + Math.random().toString(36).slice(2);
function Jo(e) {
  if (!e[Xi]) {
    (e[Xi] = !0),
      Wm.forEach(function (n) {
        n !== "selectionchange" && (Tx.has(n) || Rl(n, !1, e), Rl(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Xi] || ((t[Xi] = !0), Rl("selectionchange", !1, t));
  }
}
function Ng(e, t, n, r) {
  switch (wg(t)) {
    case 1:
      var o = jw;
      break;
    case 4:
      o = Bw;
      break;
    default:
      o = Yc;
  }
  (n = o.bind(null, t, n, e)),
    (o = void 0),
    !Tu ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (o = !0),
    r
      ? o !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: o })
        : e.addEventListener(t, n, !0)
      : o !== void 0
      ? e.addEventListener(t, n, { passive: o })
      : e.addEventListener(t, n, !1);
}
function Ml(e, t, n, r, o) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var s = r.tag;
      if (s === 3 || s === 4) {
        var a = r.stateNode.containerInfo;
        if (a === o || (a.nodeType === 8 && a.parentNode === o)) break;
        if (s === 4)
          for (s = r.return; s !== null; ) {
            var l = s.tag;
            if (
              (l === 3 || l === 4) &&
              ((l = s.stateNode.containerInfo),
              l === o || (l.nodeType === 8 && l.parentNode === o))
            )
              return;
            s = s.return;
          }
        for (; a !== null; ) {
          if (((s = Hn(a)), s === null)) return;
          if (((l = s.tag), l === 5 || l === 6)) {
            r = i = s;
            continue e;
          }
          a = a.parentNode;
        }
      }
      r = r.return;
    }
  sg(function () {
    var u = i,
      c = Hc(n),
      f = [];
    e: {
      var d = Ig.get(e);
      if (d !== void 0) {
        var p = Qc,
          S = e;
        switch (e) {
          case "keypress":
            if (ys(n) === 0) break e;
          case "keydown":
          case "keyup":
            p = tx;
            break;
          case "focusin":
            (S = "focus"), (p = Cl);
            break;
          case "focusout":
            (S = "blur"), (p = Cl);
            break;
          case "beforeblur":
          case "afterblur":
            p = Cl;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            p = Xd;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            p = Uw;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            p = ox;
            break;
          case Ag:
          case Og:
          case Lg:
            p = Gw;
            break;
          case Fg:
            p = sx;
            break;
          case "scroll":
            p = zw;
            break;
          case "wheel":
            p = lx;
            break;
          case "copy":
          case "cut":
          case "paste":
            p = Kw;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            p = qd;
        }
        var v = (t & 4) !== 0,
          P = !v && e === "scroll",
          g = v ? (d !== null ? d + "Capture" : null) : d;
        v = [];
        for (var h = u, m; h !== null; ) {
          m = h;
          var C = m.stateNode;
          if (
            (m.tag === 5 &&
              C !== null &&
              ((m = C),
              g !== null && ((C = Zo(h, g)), C != null && v.push(ei(h, C, m)))),
            P)
          )
            break;
          h = h.return;
        }
        0 < v.length &&
          ((d = new p(d, S, null, n, c)), f.push({ event: d, listeners: v }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((d = e === "mouseover" || e === "pointerover"),
          (p = e === "mouseout" || e === "pointerout"),
          d &&
            n !== Cu &&
            (S = n.relatedTarget || n.fromElement) &&
            (Hn(S) || S[on]))
        )
          break e;
        if (
          (p || d) &&
          ((d =
            c.window === c
              ? c
              : (d = c.ownerDocument)
              ? d.defaultView || d.parentWindow
              : window),
          p
            ? ((S = n.relatedTarget || n.toElement),
              (p = u),
              (S = S ? Hn(S) : null),
              S !== null &&
                ((P = lr(S)), S !== P || (S.tag !== 5 && S.tag !== 6)) &&
                (S = null))
            : ((p = null), (S = u)),
          p !== S)
        ) {
          if (
            ((v = Xd),
            (C = "onMouseLeave"),
            (g = "onMouseEnter"),
            (h = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((v = qd),
              (C = "onPointerLeave"),
              (g = "onPointerEnter"),
              (h = "pointer")),
            (P = p == null ? d : Pr(p)),
            (m = S == null ? d : Pr(S)),
            (d = new v(C, h + "leave", p, n, c)),
            (d.target = P),
            (d.relatedTarget = m),
            (C = null),
            Hn(c) === u &&
              ((v = new v(g, h + "enter", S, n, c)),
              (v.target = m),
              (v.relatedTarget = P),
              (C = v)),
            (P = C),
            p && S)
          )
            t: {
              for (v = p, g = S, h = 0, m = v; m; m = hr(m)) h++;
              for (m = 0, C = g; C; C = hr(C)) m++;
              for (; 0 < h - m; ) (v = hr(v)), h--;
              for (; 0 < m - h; ) (g = hr(g)), m--;
              for (; h--; ) {
                if (v === g || (g !== null && v === g.alternate)) break t;
                (v = hr(v)), (g = hr(g));
              }
              v = null;
            }
          else v = null;
          p !== null && up(f, d, p, v, !1),
            S !== null && P !== null && up(f, P, S, v, !0);
        }
      }
      e: {
        if (
          ((d = u ? Pr(u) : window),
          (p = d.nodeName && d.nodeName.toLowerCase()),
          p === "select" || (p === "input" && d.type === "file"))
        )
          var E = mx;
        else if (tp(d))
          if (Eg) E = Sx;
          else {
            E = vx;
            var R = gx;
          }
        else
          (p = d.nodeName) &&
            p.toLowerCase() === "input" &&
            (d.type === "checkbox" || d.type === "radio") &&
            (E = yx);
        if (E && (E = E(e, u))) {
          Tg(f, E, n, c);
          break e;
        }
        R && R(e, d, u),
          e === "focusout" &&
            (R = d._wrapperState) &&
            R.controlled &&
            d.type === "number" &&
            yu(d, "number", d.value);
      }
      switch (((R = u ? Pr(u) : window), e)) {
        case "focusin":
          (tp(R) || R.contentEditable === "true") &&
            ((kr = R), (Mu = u), (Oo = null));
          break;
        case "focusout":
          Oo = Mu = kr = null;
          break;
        case "mousedown":
          Au = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Au = !1), sp(f, n, c);
          break;
        case "selectionchange":
          if (kx) break;
        case "keydown":
        case "keyup":
          sp(f, n, c);
      }
      var b;
      if (Jc)
        e: {
          switch (e) {
            case "compositionstart":
              var _ = "onCompositionStart";
              break e;
            case "compositionend":
              _ = "onCompositionEnd";
              break e;
            case "compositionupdate":
              _ = "onCompositionUpdate";
              break e;
          }
          _ = void 0;
        }
      else
        xr
          ? Cg(e, n) && (_ = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (_ = "onCompositionStart");
      _ &&
        (kg &&
          n.locale !== "ko" &&
          (xr || _ !== "onCompositionStart"
            ? _ === "onCompositionEnd" && xr && (b = xg())
            : ((vn = c),
              (Xc = "value" in vn ? vn.value : vn.textContent),
              (xr = !0))),
        (R = $s(u, _)),
        0 < R.length &&
          ((_ = new Qd(_, e, null, n, c)),
          f.push({ event: _, listeners: R }),
          b ? (_.data = b) : ((b = Pg(n)), b !== null && (_.data = b)))),
        (b = cx ? fx(e, n) : dx(e, n)) &&
          ((u = $s(u, "onBeforeInput")),
          0 < u.length &&
            ((c = new Qd("onBeforeInput", "beforeinput", null, n, c)),
            f.push({ event: c, listeners: u }),
            (c.data = b)));
    }
    Dg(f, t);
  });
}
function ei(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function $s(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e,
      i = o.stateNode;
    o.tag === 5 &&
      i !== null &&
      ((o = i),
      (i = Zo(e, n)),
      i != null && r.unshift(ei(e, i, o)),
      (i = Zo(e, t)),
      i != null && r.push(ei(e, i, o))),
      (e = e.return);
  }
  return r;
}
function hr(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function up(e, t, n, r, o) {
  for (var i = t._reactName, s = []; n !== null && n !== r; ) {
    var a = n,
      l = a.alternate,
      u = a.stateNode;
    if (l !== null && l === r) break;
    a.tag === 5 &&
      u !== null &&
      ((a = u),
      o
        ? ((l = Zo(n, i)), l != null && s.unshift(ei(n, l, a)))
        : o || ((l = Zo(n, i)), l != null && s.push(ei(n, l, a)))),
      (n = n.return);
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var Ex = /\r\n?/g,
  bx = /\u0000|\uFFFD/g;
function cp(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Ex,
      `
`
    )
    .replace(bx, "");
}
function Qi(e, t, n) {
  if (((t = cp(t)), cp(e) !== t && n)) throw Error(M(425));
}
function Us() {}
var Ou = null,
  Lu = null;
function Fu(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Iu = typeof setTimeout == "function" ? setTimeout : void 0,
  _x = typeof clearTimeout == "function" ? clearTimeout : void 0,
  fp = typeof Promise == "function" ? Promise : void 0,
  Rx =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof fp < "u"
      ? function (e) {
          return fp.resolve(null).then(e).catch(Mx);
        }
      : Iu;
function Mx(e) {
  setTimeout(function () {
    throw e;
  });
}
function Al(e, t) {
  var n = t,
    r = 0;
  do {
    var o = n.nextSibling;
    if ((e.removeChild(n), o && o.nodeType === 8))
      if (((n = o.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(o), Xo(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = o;
  } while (n);
  Xo(t);
}
function kn(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function dp(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var oo = Math.random().toString(36).slice(2),
  Vt = "__reactFiber$" + oo,
  ti = "__reactProps$" + oo,
  on = "__reactContainer$" + oo,
  Du = "__reactEvents$" + oo,
  Ax = "__reactListeners$" + oo,
  Ox = "__reactHandles$" + oo;
function Hn(e) {
  var t = e[Vt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[on] || n[Vt])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = dp(e); e !== null; ) {
          if ((n = e[Vt])) return n;
          e = dp(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function ki(e) {
  return (
    (e = e[Vt] || e[on]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Pr(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(M(33));
}
function ba(e) {
  return e[ti] || null;
}
var Nu = [],
  Tr = -1;
function Fn(e) {
  return { current: e };
}
function se(e) {
  0 > Tr || ((e.current = Nu[Tr]), (Nu[Tr] = null), Tr--);
}
function ne(e, t) {
  Tr++, (Nu[Tr] = e.current), (e.current = t);
}
var Mn = {},
  ze = Fn(Mn),
  Xe = Fn(!1),
  tr = Mn;
function Gr(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Mn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var o = {},
    i;
  for (i in n) o[i] = t[i];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    o
  );
}
function Qe(e) {
  return (e = e.childContextTypes), e != null;
}
function Ws() {
  se(Xe), se(ze);
}
function pp(e, t, n) {
  if (ze.current !== Mn) throw Error(M(168));
  ne(ze, t), ne(Xe, n);
}
function Vg(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(M(108, gw(e) || "Unknown", o));
  return he({}, n, r);
}
function Hs(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Mn),
    (tr = ze.current),
    ne(ze, e),
    ne(Xe, Xe.current),
    !0
  );
}
function hp(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(M(169));
  n
    ? ((e = Vg(e, t, tr)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      se(Xe),
      se(ze),
      ne(ze, e))
    : se(Xe),
    ne(Xe, n);
}
var Yt = null,
  _a = !1,
  Ol = !1;
function jg(e) {
  Yt === null ? (Yt = [e]) : Yt.push(e);
}
function Lx(e) {
  (_a = !0), jg(e);
}
function In() {
  if (!Ol && Yt !== null) {
    Ol = !0;
    var e = 0,
      t = Q;
    try {
      var n = Yt;
      for (Q = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Yt = null), (_a = !1);
    } catch (o) {
      throw (Yt !== null && (Yt = Yt.slice(e + 1)), cg(Gc, In), o);
    } finally {
      (Q = t), (Ol = !1);
    }
  }
  return null;
}
var Er = [],
  br = 0,
  Gs = null,
  Zs = 0,
  mt = [],
  gt = 0,
  nr = null,
  Xt = 1,
  Qt = "";
function zn(e, t) {
  (Er[br++] = Zs), (Er[br++] = Gs), (Gs = e), (Zs = t);
}
function Bg(e, t, n) {
  (mt[gt++] = Xt), (mt[gt++] = Qt), (mt[gt++] = nr), (nr = e);
  var r = Xt;
  e = Qt;
  var o = 32 - Et(r) - 1;
  (r &= ~(1 << o)), (n += 1);
  var i = 32 - Et(t) + o;
  if (30 < i) {
    var s = o - (o % 5);
    (i = (r & ((1 << s) - 1)).toString(32)),
      (r >>= s),
      (o -= s),
      (Xt = (1 << (32 - Et(t) + o)) | (n << o) | r),
      (Qt = i + e);
  } else (Xt = (1 << i) | (n << o) | r), (Qt = e);
}
function tf(e) {
  e.return !== null && (zn(e, 1), Bg(e, 1, 0));
}
function nf(e) {
  for (; e === Gs; )
    (Gs = Er[--br]), (Er[br] = null), (Zs = Er[--br]), (Er[br] = null);
  for (; e === nr; )
    (nr = mt[--gt]),
      (mt[gt] = null),
      (Qt = mt[--gt]),
      (mt[gt] = null),
      (Xt = mt[--gt]),
      (mt[gt] = null);
}
var it = null,
  ot = null,
  ue = !1,
  Tt = null;
function zg(e, t) {
  var n = vt(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function mp(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (it = e), (ot = kn(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (it = e), (ot = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = nr !== null ? { id: Xt, overflow: Qt } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = vt(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (it = e),
            (ot = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Vu(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function ju(e) {
  if (ue) {
    var t = ot;
    if (t) {
      var n = t;
      if (!mp(e, t)) {
        if (Vu(e)) throw Error(M(418));
        t = kn(n.nextSibling);
        var r = it;
        t && mp(e, t)
          ? zg(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (ue = !1), (it = e));
      }
    } else {
      if (Vu(e)) throw Error(M(418));
      (e.flags = (e.flags & -4097) | 2), (ue = !1), (it = e);
    }
  }
}
function gp(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  it = e;
}
function qi(e) {
  if (e !== it) return !1;
  if (!ue) return gp(e), (ue = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Fu(e.type, e.memoizedProps))),
    t && (t = ot))
  ) {
    if (Vu(e)) throw ($g(), Error(M(418)));
    for (; t; ) zg(e, t), (t = kn(t.nextSibling));
  }
  if ((gp(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(M(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              ot = kn(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      ot = null;
    }
  } else ot = it ? kn(e.stateNode.nextSibling) : null;
  return !0;
}
function $g() {
  for (var e = ot; e; ) e = kn(e.nextSibling);
}
function Zr() {
  (ot = it = null), (ue = !1);
}
function rf(e) {
  Tt === null ? (Tt = [e]) : Tt.push(e);
}
var Fx = ln.ReactCurrentBatchConfig;
function Ct(e, t) {
  if (e && e.defaultProps) {
    (t = he({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var Ks = Fn(null),
  Ys = null,
  _r = null,
  of = null;
function sf() {
  of = _r = Ys = null;
}
function af(e) {
  var t = Ks.current;
  se(Ks), (e._currentValue = t);
}
function Bu(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function jr(e, t) {
  (Ys = e),
    (of = _r = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Ye = !0), (e.firstContext = null));
}
function St(e) {
  var t = e._currentValue;
  if (of !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), _r === null)) {
      if (Ys === null) throw Error(M(308));
      (_r = e), (Ys.dependencies = { lanes: 0, firstContext: e });
    } else _r = _r.next = e;
  return t;
}
var Gn = null;
function lf(e) {
  Gn === null ? (Gn = [e]) : Gn.push(e);
}
function Ug(e, t, n, r) {
  var o = t.interleaved;
  return (
    o === null ? ((n.next = n), lf(t)) : ((n.next = o.next), (o.next = n)),
    (t.interleaved = n),
    sn(e, r)
  );
}
function sn(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var pn = !1;
function uf(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Wg(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function en(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Cn(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), G & 2)) {
    var o = r.pending;
    return (
      o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
      (r.pending = t),
      sn(e, n)
    );
  }
  return (
    (o = r.interleaved),
    o === null ? ((t.next = t), lf(r)) : ((t.next = o.next), (o.next = t)),
    (r.interleaved = t),
    sn(e, n)
  );
}
function Ss(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Zc(e, n);
  }
}
function vp(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var o = null,
      i = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var s = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        i === null ? (o = i = s) : (i = i.next = s), (n = n.next);
      } while (n !== null);
      i === null ? (o = i = t) : (i = i.next = t);
    } else o = i = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: o,
      lastBaseUpdate: i,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function Xs(e, t, n, r) {
  var o = e.updateQueue;
  pn = !1;
  var i = o.firstBaseUpdate,
    s = o.lastBaseUpdate,
    a = o.shared.pending;
  if (a !== null) {
    o.shared.pending = null;
    var l = a,
      u = l.next;
    (l.next = null), s === null ? (i = u) : (s.next = u), (s = l);
    var c = e.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (a = c.lastBaseUpdate),
      a !== s &&
        (a === null ? (c.firstBaseUpdate = u) : (a.next = u),
        (c.lastBaseUpdate = l)));
  }
  if (i !== null) {
    var f = o.baseState;
    (s = 0), (c = u = l = null), (a = i);
    do {
      var d = a.lane,
        p = a.eventTime;
      if ((r & d) === d) {
        c !== null &&
          (c = c.next =
            {
              eventTime: p,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            });
        e: {
          var S = e,
            v = a;
          switch (((d = t), (p = n), v.tag)) {
            case 1:
              if (((S = v.payload), typeof S == "function")) {
                f = S.call(p, f, d);
                break e;
              }
              f = S;
              break e;
            case 3:
              S.flags = (S.flags & -65537) | 128;
            case 0:
              if (
                ((S = v.payload),
                (d = typeof S == "function" ? S.call(p, f, d) : S),
                d == null)
              )
                break e;
              f = he({}, f, d);
              break e;
            case 2:
              pn = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((e.flags |= 64),
          (d = o.effects),
          d === null ? (o.effects = [a]) : d.push(a));
      } else
        (p = {
          eventTime: p,
          lane: d,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          c === null ? ((u = c = p), (l = f)) : (c = c.next = p),
          (s |= d);
      if (((a = a.next), a === null)) {
        if (((a = o.shared.pending), a === null)) break;
        (d = a),
          (a = d.next),
          (d.next = null),
          (o.lastBaseUpdate = d),
          (o.shared.pending = null);
      }
    } while (1);
    if (
      (c === null && (l = f),
      (o.baseState = l),
      (o.firstBaseUpdate = u),
      (o.lastBaseUpdate = c),
      (t = o.shared.interleaved),
      t !== null)
    ) {
      o = t;
      do (s |= o.lane), (o = o.next);
      while (o !== t);
    } else i === null && (o.shared.lanes = 0);
    (or |= s), (e.lanes = s), (e.memoizedState = f);
  }
}
function yp(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        o = r.callback;
      if (o !== null) {
        if (((r.callback = null), (r = n), typeof o != "function"))
          throw Error(M(191, o));
        o.call(r);
      }
    }
}
var Hg = new Um.Component().refs;
function zu(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : he({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Ra = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? lr(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = We(),
      o = Tn(e),
      i = en(r, o);
    (i.payload = t),
      n != null && (i.callback = n),
      (t = Cn(e, i, o)),
      t !== null && (bt(t, e, o, r), Ss(t, e, o));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = We(),
      o = Tn(e),
      i = en(r, o);
    (i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = Cn(e, i, o)),
      t !== null && (bt(t, e, o, r), Ss(t, e, o));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = We(),
      r = Tn(e),
      o = en(n, r);
    (o.tag = 2),
      t != null && (o.callback = t),
      (t = Cn(e, o, r)),
      t !== null && (bt(t, e, r, n), Ss(t, e, r));
  },
};
function Sp(e, t, n, r, o, i, s) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, i, s)
      : t.prototype && t.prototype.isPureReactComponent
      ? !qo(n, r) || !qo(o, i)
      : !0
  );
}
function Gg(e, t, n) {
  var r = !1,
    o = Mn,
    i = t.contextType;
  return (
    typeof i == "object" && i !== null
      ? (i = St(i))
      : ((o = Qe(t) ? tr : ze.current),
        (r = t.contextTypes),
        (i = (r = r != null) ? Gr(e, o) : Mn)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Ra),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function wp(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Ra.enqueueReplaceState(t, t.state, null);
}
function $u(e, t, n, r) {
  var o = e.stateNode;
  (o.props = n), (o.state = e.memoizedState), (o.refs = Hg), uf(e);
  var i = t.contextType;
  typeof i == "object" && i !== null
    ? (o.context = St(i))
    : ((i = Qe(t) ? tr : ze.current), (o.context = Gr(e, i))),
    (o.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == "function" && (zu(e, t, i, n), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function" ||
      (typeof o.UNSAFE_componentWillMount != "function" &&
        typeof o.componentWillMount != "function") ||
      ((t = o.state),
      typeof o.componentWillMount == "function" && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == "function" &&
        o.UNSAFE_componentWillMount(),
      t !== o.state && Ra.enqueueReplaceState(o, o.state, null),
      Xs(e, n, o, r),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function go(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(M(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(M(147, e));
      var o = r,
        i = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (s) {
            var a = o.refs;
            a === Hg && (a = o.refs = {}),
              s === null ? delete a[i] : (a[i] = s);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != "string") throw Error(M(284));
    if (!n._owner) throw Error(M(290, e));
  }
  return e;
}
function Ji(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      M(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function xp(e) {
  var t = e._init;
  return t(e._payload);
}
function Zg(e) {
  function t(g, h) {
    if (e) {
      var m = g.deletions;
      m === null ? ((g.deletions = [h]), (g.flags |= 16)) : m.push(h);
    }
  }
  function n(g, h) {
    if (!e) return null;
    for (; h !== null; ) t(g, h), (h = h.sibling);
    return null;
  }
  function r(g, h) {
    for (g = new Map(); h !== null; )
      h.key !== null ? g.set(h.key, h) : g.set(h.index, h), (h = h.sibling);
    return g;
  }
  function o(g, h) {
    return (g = En(g, h)), (g.index = 0), (g.sibling = null), g;
  }
  function i(g, h, m) {
    return (
      (g.index = m),
      e
        ? ((m = g.alternate),
          m !== null
            ? ((m = m.index), m < h ? ((g.flags |= 2), h) : m)
            : ((g.flags |= 2), h))
        : ((g.flags |= 1048576), h)
    );
  }
  function s(g) {
    return e && g.alternate === null && (g.flags |= 2), g;
  }
  function a(g, h, m, C) {
    return h === null || h.tag !== 6
      ? ((h = jl(m, g.mode, C)), (h.return = g), h)
      : ((h = o(h, m)), (h.return = g), h);
  }
  function l(g, h, m, C) {
    var E = m.type;
    return E === wr
      ? c(g, h, m.props.children, C, m.key)
      : h !== null &&
        (h.elementType === E ||
          (typeof E == "object" &&
            E !== null &&
            E.$$typeof === dn &&
            xp(E) === h.type))
      ? ((C = o(h, m.props)), (C.ref = go(g, h, m)), (C.return = g), C)
      : ((C = Ts(m.type, m.key, m.props, null, g.mode, C)),
        (C.ref = go(g, h, m)),
        (C.return = g),
        C);
  }
  function u(g, h, m, C) {
    return h === null ||
      h.tag !== 4 ||
      h.stateNode.containerInfo !== m.containerInfo ||
      h.stateNode.implementation !== m.implementation
      ? ((h = Bl(m, g.mode, C)), (h.return = g), h)
      : ((h = o(h, m.children || [])), (h.return = g), h);
  }
  function c(g, h, m, C, E) {
    return h === null || h.tag !== 7
      ? ((h = Qn(m, g.mode, C, E)), (h.return = g), h)
      : ((h = o(h, m)), (h.return = g), h);
  }
  function f(g, h, m) {
    if ((typeof h == "string" && h !== "") || typeof h == "number")
      return (h = jl("" + h, g.mode, m)), (h.return = g), h;
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case $i:
          return (
            (m = Ts(h.type, h.key, h.props, null, g.mode, m)),
            (m.ref = go(g, null, h)),
            (m.return = g),
            m
          );
        case Sr:
          return (h = Bl(h, g.mode, m)), (h.return = g), h;
        case dn:
          var C = h._init;
          return f(g, C(h._payload), m);
      }
      if (Po(h) || co(h))
        return (h = Qn(h, g.mode, m, null)), (h.return = g), h;
      Ji(g, h);
    }
    return null;
  }
  function d(g, h, m, C) {
    var E = h !== null ? h.key : null;
    if ((typeof m == "string" && m !== "") || typeof m == "number")
      return E !== null ? null : a(g, h, "" + m, C);
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case $i:
          return m.key === E ? l(g, h, m, C) : null;
        case Sr:
          return m.key === E ? u(g, h, m, C) : null;
        case dn:
          return (E = m._init), d(g, h, E(m._payload), C);
      }
      if (Po(m) || co(m)) return E !== null ? null : c(g, h, m, C, null);
      Ji(g, m);
    }
    return null;
  }
  function p(g, h, m, C, E) {
    if ((typeof C == "string" && C !== "") || typeof C == "number")
      return (g = g.get(m) || null), a(h, g, "" + C, E);
    if (typeof C == "object" && C !== null) {
      switch (C.$$typeof) {
        case $i:
          return (g = g.get(C.key === null ? m : C.key) || null), l(h, g, C, E);
        case Sr:
          return (g = g.get(C.key === null ? m : C.key) || null), u(h, g, C, E);
        case dn:
          var R = C._init;
          return p(g, h, m, R(C._payload), E);
      }
      if (Po(C) || co(C)) return (g = g.get(m) || null), c(h, g, C, E, null);
      Ji(h, C);
    }
    return null;
  }
  function S(g, h, m, C) {
    for (
      var E = null, R = null, b = h, _ = (h = 0), D = null;
      b !== null && _ < m.length;
      _++
    ) {
      b.index > _ ? ((D = b), (b = null)) : (D = b.sibling);
      var N = d(g, b, m[_], C);
      if (N === null) {
        b === null && (b = D);
        break;
      }
      e && b && N.alternate === null && t(g, b),
        (h = i(N, h, _)),
        R === null ? (E = N) : (R.sibling = N),
        (R = N),
        (b = D);
    }
    if (_ === m.length) return n(g, b), ue && zn(g, _), E;
    if (b === null) {
      for (; _ < m.length; _++)
        (b = f(g, m[_], C)),
          b !== null &&
            ((h = i(b, h, _)), R === null ? (E = b) : (R.sibling = b), (R = b));
      return ue && zn(g, _), E;
    }
    for (b = r(g, b); _ < m.length; _++)
      (D = p(b, g, _, m[_], C)),
        D !== null &&
          (e && D.alternate !== null && b.delete(D.key === null ? _ : D.key),
          (h = i(D, h, _)),
          R === null ? (E = D) : (R.sibling = D),
          (R = D));
    return (
      e &&
        b.forEach(function (q) {
          return t(g, q);
        }),
      ue && zn(g, _),
      E
    );
  }
  function v(g, h, m, C) {
    var E = co(m);
    if (typeof E != "function") throw Error(M(150));
    if (((m = E.call(m)), m == null)) throw Error(M(151));
    for (
      var R = (E = null), b = h, _ = (h = 0), D = null, N = m.next();
      b !== null && !N.done;
      _++, N = m.next()
    ) {
      b.index > _ ? ((D = b), (b = null)) : (D = b.sibling);
      var q = d(g, b, N.value, C);
      if (q === null) {
        b === null && (b = D);
        break;
      }
      e && b && q.alternate === null && t(g, b),
        (h = i(q, h, _)),
        R === null ? (E = q) : (R.sibling = q),
        (R = q),
        (b = D);
    }
    if (N.done) return n(g, b), ue && zn(g, _), E;
    if (b === null) {
      for (; !N.done; _++, N = m.next())
        (N = f(g, N.value, C)),
          N !== null &&
            ((h = i(N, h, _)), R === null ? (E = N) : (R.sibling = N), (R = N));
      return ue && zn(g, _), E;
    }
    for (b = r(g, b); !N.done; _++, N = m.next())
      (N = p(b, g, _, N.value, C)),
        N !== null &&
          (e && N.alternate !== null && b.delete(N.key === null ? _ : N.key),
          (h = i(N, h, _)),
          R === null ? (E = N) : (R.sibling = N),
          (R = N));
    return (
      e &&
        b.forEach(function (Ce) {
          return t(g, Ce);
        }),
      ue && zn(g, _),
      E
    );
  }
  function P(g, h, m, C) {
    if (
      (typeof m == "object" &&
        m !== null &&
        m.type === wr &&
        m.key === null &&
        (m = m.props.children),
      typeof m == "object" && m !== null)
    ) {
      switch (m.$$typeof) {
        case $i:
          e: {
            for (var E = m.key, R = h; R !== null; ) {
              if (R.key === E) {
                if (((E = m.type), E === wr)) {
                  if (R.tag === 7) {
                    n(g, R.sibling),
                      (h = o(R, m.props.children)),
                      (h.return = g),
                      (g = h);
                    break e;
                  }
                } else if (
                  R.elementType === E ||
                  (typeof E == "object" &&
                    E !== null &&
                    E.$$typeof === dn &&
                    xp(E) === R.type)
                ) {
                  n(g, R.sibling),
                    (h = o(R, m.props)),
                    (h.ref = go(g, R, m)),
                    (h.return = g),
                    (g = h);
                  break e;
                }
                n(g, R);
                break;
              } else t(g, R);
              R = R.sibling;
            }
            m.type === wr
              ? ((h = Qn(m.props.children, g.mode, C, m.key)),
                (h.return = g),
                (g = h))
              : ((C = Ts(m.type, m.key, m.props, null, g.mode, C)),
                (C.ref = go(g, h, m)),
                (C.return = g),
                (g = C));
          }
          return s(g);
        case Sr:
          e: {
            for (R = m.key; h !== null; ) {
              if (h.key === R)
                if (
                  h.tag === 4 &&
                  h.stateNode.containerInfo === m.containerInfo &&
                  h.stateNode.implementation === m.implementation
                ) {
                  n(g, h.sibling),
                    (h = o(h, m.children || [])),
                    (h.return = g),
                    (g = h);
                  break e;
                } else {
                  n(g, h);
                  break;
                }
              else t(g, h);
              h = h.sibling;
            }
            (h = Bl(m, g.mode, C)), (h.return = g), (g = h);
          }
          return s(g);
        case dn:
          return (R = m._init), P(g, h, R(m._payload), C);
      }
      if (Po(m)) return S(g, h, m, C);
      if (co(m)) return v(g, h, m, C);
      Ji(g, m);
    }
    return (typeof m == "string" && m !== "") || typeof m == "number"
      ? ((m = "" + m),
        h !== null && h.tag === 6
          ? (n(g, h.sibling), (h = o(h, m)), (h.return = g), (g = h))
          : (n(g, h), (h = jl(m, g.mode, C)), (h.return = g), (g = h)),
        s(g))
      : n(g, h);
  }
  return P;
}
var Kr = Zg(!0),
  Kg = Zg(!1),
  Ci = {},
  zt = Fn(Ci),
  ni = Fn(Ci),
  ri = Fn(Ci);
function Zn(e) {
  if (e === Ci) throw Error(M(174));
  return e;
}
function cf(e, t) {
  switch ((ne(ri, t), ne(ni, e), ne(zt, Ci), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : wu(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = wu(t, e));
  }
  se(zt), ne(zt, t);
}
function Yr() {
  se(zt), se(ni), se(ri);
}
function Yg(e) {
  Zn(ri.current);
  var t = Zn(zt.current),
    n = wu(t, e.type);
  t !== n && (ne(ni, e), ne(zt, n));
}
function ff(e) {
  ni.current === e && (se(zt), se(ni));
}
var fe = Fn(0);
function Qs(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var Ll = [];
function df() {
  for (var e = 0; e < Ll.length; e++)
    Ll[e]._workInProgressVersionPrimary = null;
  Ll.length = 0;
}
var ws = ln.ReactCurrentDispatcher,
  Fl = ln.ReactCurrentBatchConfig,
  rr = 0,
  pe = null,
  xe = null,
  Ee = null,
  qs = !1,
  Lo = !1,
  oi = 0,
  Ix = 0;
function De() {
  throw Error(M(321));
}
function pf(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!_t(e[n], t[n])) return !1;
  return !0;
}
function hf(e, t, n, r, o, i) {
  if (
    ((rr = i),
    (pe = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (ws.current = e === null || e.memoizedState === null ? jx : Bx),
    (e = n(r, o)),
    Lo)
  ) {
    i = 0;
    do {
      if (((Lo = !1), (oi = 0), 25 <= i)) throw Error(M(301));
      (i += 1),
        (Ee = xe = null),
        (t.updateQueue = null),
        (ws.current = zx),
        (e = n(r, o));
    } while (Lo);
  }
  if (
    ((ws.current = Js),
    (t = xe !== null && xe.next !== null),
    (rr = 0),
    (Ee = xe = pe = null),
    (qs = !1),
    t)
  )
    throw Error(M(300));
  return e;
}
function mf() {
  var e = oi !== 0;
  return (oi = 0), e;
}
function Ft() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return Ee === null ? (pe.memoizedState = Ee = e) : (Ee = Ee.next = e), Ee;
}
function wt() {
  if (xe === null) {
    var e = pe.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = xe.next;
  var t = Ee === null ? pe.memoizedState : Ee.next;
  if (t !== null) (Ee = t), (xe = e);
  else {
    if (e === null) throw Error(M(310));
    (xe = e),
      (e = {
        memoizedState: xe.memoizedState,
        baseState: xe.baseState,
        baseQueue: xe.baseQueue,
        queue: xe.queue,
        next: null,
      }),
      Ee === null ? (pe.memoizedState = Ee = e) : (Ee = Ee.next = e);
  }
  return Ee;
}
function ii(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Il(e) {
  var t = wt(),
    n = t.queue;
  if (n === null) throw Error(M(311));
  n.lastRenderedReducer = e;
  var r = xe,
    o = r.baseQueue,
    i = n.pending;
  if (i !== null) {
    if (o !== null) {
      var s = o.next;
      (o.next = i.next), (i.next = s);
    }
    (r.baseQueue = o = i), (n.pending = null);
  }
  if (o !== null) {
    (i = o.next), (r = r.baseState);
    var a = (s = null),
      l = null,
      u = i;
    do {
      var c = u.lane;
      if ((rr & c) === c)
        l !== null &&
          (l = l.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action));
      else {
        var f = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        l === null ? ((a = l = f), (s = r)) : (l = l.next = f),
          (pe.lanes |= c),
          (or |= c);
      }
      u = u.next;
    } while (u !== null && u !== i);
    l === null ? (s = r) : (l.next = a),
      _t(r, t.memoizedState) || (Ye = !0),
      (t.memoizedState = r),
      (t.baseState = s),
      (t.baseQueue = l),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    o = e;
    do (i = o.lane), (pe.lanes |= i), (or |= i), (o = o.next);
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Dl(e) {
  var t = wt(),
    n = t.queue;
  if (n === null) throw Error(M(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    o = n.pending,
    i = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var s = (o = o.next);
    do (i = e(i, s.action)), (s = s.next);
    while (s !== o);
    _t(i, t.memoizedState) || (Ye = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i);
  }
  return [i, r];
}
function Xg() {}
function Qg(e, t) {
  var n = pe,
    r = wt(),
    o = t(),
    i = !_t(r.memoizedState, o);
  if (
    (i && ((r.memoizedState = o), (Ye = !0)),
    (r = r.queue),
    gf(ev.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (Ee !== null && Ee.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      si(9, Jg.bind(null, n, r, o, t), void 0, null),
      _e === null)
    )
      throw Error(M(349));
    rr & 30 || qg(n, t, o);
  }
  return o;
}
function qg(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = pe.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (pe.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Jg(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), tv(t) && nv(e);
}
function ev(e, t, n) {
  return n(function () {
    tv(t) && nv(e);
  });
}
function tv(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !_t(e, n);
  } catch {
    return !0;
  }
}
function nv(e) {
  var t = sn(e, 1);
  t !== null && bt(t, e, 1, -1);
}
function kp(e) {
  var t = Ft();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: ii,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = Vx.bind(null, pe, e)),
    [t.memoizedState, e]
  );
}
function si(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = pe.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (pe.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function rv() {
  return wt().memoizedState;
}
function xs(e, t, n, r) {
  var o = Ft();
  (pe.flags |= e),
    (o.memoizedState = si(1 | t, n, void 0, r === void 0 ? null : r));
}
function Ma(e, t, n, r) {
  var o = wt();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (xe !== null) {
    var s = xe.memoizedState;
    if (((i = s.destroy), r !== null && pf(r, s.deps))) {
      o.memoizedState = si(t, n, i, r);
      return;
    }
  }
  (pe.flags |= e), (o.memoizedState = si(1 | t, n, i, r));
}
function Cp(e, t) {
  return xs(8390656, 8, e, t);
}
function gf(e, t) {
  return Ma(2048, 8, e, t);
}
function ov(e, t) {
  return Ma(4, 2, e, t);
}
function iv(e, t) {
  return Ma(4, 4, e, t);
}
function sv(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function av(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Ma(4, 4, sv.bind(null, t, e), n)
  );
}
function vf() {}
function lv(e, t) {
  var n = wt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && pf(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function uv(e, t) {
  var n = wt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && pf(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function cv(e, t, n) {
  return rr & 21
    ? (_t(n, t) || ((n = pg()), (pe.lanes |= n), (or |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Ye = !0)), (e.memoizedState = n));
}
function Dx(e, t) {
  var n = Q;
  (Q = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Fl.transition;
  Fl.transition = {};
  try {
    e(!1), t();
  } finally {
    (Q = n), (Fl.transition = r);
  }
}
function fv() {
  return wt().memoizedState;
}
function Nx(e, t, n) {
  var r = Tn(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    dv(e))
  )
    pv(t, n);
  else if (((n = Ug(e, t, n, r)), n !== null)) {
    var o = We();
    bt(n, e, r, o), hv(n, t, r);
  }
}
function Vx(e, t, n) {
  var r = Tn(e),
    o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (dv(e)) pv(t, o);
  else {
    var i = e.alternate;
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var s = t.lastRenderedState,
          a = i(s, n);
        if (((o.hasEagerState = !0), (o.eagerState = a), _t(a, s))) {
          var l = t.interleaved;
          l === null
            ? ((o.next = o), lf(t))
            : ((o.next = l.next), (l.next = o)),
            (t.interleaved = o);
          return;
        }
      } catch {
      } finally {
      }
    (n = Ug(e, t, o, r)),
      n !== null && ((o = We()), bt(n, e, r, o), hv(n, t, r));
  }
}
function dv(e) {
  var t = e.alternate;
  return e === pe || (t !== null && t === pe);
}
function pv(e, t) {
  Lo = qs = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function hv(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Zc(e, n);
  }
}
var Js = {
    readContext: St,
    useCallback: De,
    useContext: De,
    useEffect: De,
    useImperativeHandle: De,
    useInsertionEffect: De,
    useLayoutEffect: De,
    useMemo: De,
    useReducer: De,
    useRef: De,
    useState: De,
    useDebugValue: De,
    useDeferredValue: De,
    useTransition: De,
    useMutableSource: De,
    useSyncExternalStore: De,
    useId: De,
    unstable_isNewReconciler: !1,
  },
  jx = {
    readContext: St,
    useCallback: function (e, t) {
      return (Ft().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: St,
    useEffect: Cp,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        xs(4194308, 4, sv.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return xs(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return xs(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Ft();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = Ft();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = Nx.bind(null, pe, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Ft();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: kp,
    useDebugValue: vf,
    useDeferredValue: function (e) {
      return (Ft().memoizedState = e);
    },
    useTransition: function () {
      var e = kp(!1),
        t = e[0];
      return (e = Dx.bind(null, e[1])), (Ft().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = pe,
        o = Ft();
      if (ue) {
        if (n === void 0) throw Error(M(407));
        n = n();
      } else {
        if (((n = t()), _e === null)) throw Error(M(349));
        rr & 30 || qg(r, t, n);
      }
      o.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (o.queue = i),
        Cp(ev.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        si(9, Jg.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Ft(),
        t = _e.identifierPrefix;
      if (ue) {
        var n = Qt,
          r = Xt;
        (n = (r & ~(1 << (32 - Et(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = oi++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = Ix++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Bx = {
    readContext: St,
    useCallback: lv,
    useContext: St,
    useEffect: gf,
    useImperativeHandle: av,
    useInsertionEffect: ov,
    useLayoutEffect: iv,
    useMemo: uv,
    useReducer: Il,
    useRef: rv,
    useState: function () {
      return Il(ii);
    },
    useDebugValue: vf,
    useDeferredValue: function (e) {
      var t = wt();
      return cv(t, xe.memoizedState, e);
    },
    useTransition: function () {
      var e = Il(ii)[0],
        t = wt().memoizedState;
      return [e, t];
    },
    useMutableSource: Xg,
    useSyncExternalStore: Qg,
    useId: fv,
    unstable_isNewReconciler: !1,
  },
  zx = {
    readContext: St,
    useCallback: lv,
    useContext: St,
    useEffect: gf,
    useImperativeHandle: av,
    useInsertionEffect: ov,
    useLayoutEffect: iv,
    useMemo: uv,
    useReducer: Dl,
    useRef: rv,
    useState: function () {
      return Dl(ii);
    },
    useDebugValue: vf,
    useDeferredValue: function (e) {
      var t = wt();
      return xe === null ? (t.memoizedState = e) : cv(t, xe.memoizedState, e);
    },
    useTransition: function () {
      var e = Dl(ii)[0],
        t = wt().memoizedState;
      return [e, t];
    },
    useMutableSource: Xg,
    useSyncExternalStore: Qg,
    useId: fv,
    unstable_isNewReconciler: !1,
  };
function Xr(e, t) {
  try {
    var n = "",
      r = t;
    do (n += mw(r)), (r = r.return);
    while (r);
    var o = n;
  } catch (i) {
    o =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function Nl(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Uu(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var $x = typeof WeakMap == "function" ? WeakMap : Map;
function mv(e, t, n) {
  (n = en(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      ta || ((ta = !0), (Ju = r)), Uu(e, t);
    }),
    n
  );
}
function gv(e, t, n) {
  (n = en(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    (n.payload = function () {
      return r(o);
    }),
      (n.callback = function () {
        Uu(e, t);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (n.callback = function () {
        Uu(e, t),
          typeof r != "function" &&
            (Pn === null ? (Pn = new Set([this])) : Pn.add(this));
        var s = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: s !== null ? s : "",
        });
      }),
    n
  );
}
function Pp(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new $x();
    var o = new Set();
    r.set(t, o);
  } else (o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o));
  o.has(n) || (o.add(n), (e = nk.bind(null, e, t, n)), t.then(e, e));
}
function Tp(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Ep(e, t, n, r, o) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = o), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = en(-1, 1)), (t.tag = 2), Cn(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var Ux = ln.ReactCurrentOwner,
  Ye = !1;
function Ue(e, t, n, r) {
  t.child = e === null ? Kg(t, null, n, r) : Kr(t, e.child, n, r);
}
function bp(e, t, n, r, o) {
  n = n.render;
  var i = t.ref;
  return (
    jr(t, o),
    (r = hf(e, t, n, r, i, o)),
    (n = mf()),
    e !== null && !Ye
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        an(e, t, o))
      : (ue && n && tf(t), (t.flags |= 1), Ue(e, t, r, o), t.child)
  );
}
function _p(e, t, n, r, o) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" &&
      !Tf(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), vv(e, t, i, r, o))
      : ((e = Ts(n.type, null, r, t, t.mode, o)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((i = e.child), !(e.lanes & o))) {
    var s = i.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : qo), n(s, r) && e.ref === t.ref)
    )
      return an(e, t, o);
  }
  return (
    (t.flags |= 1),
    (e = En(i, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function vv(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (qo(i, r) && e.ref === t.ref)
      if (((Ye = !1), (t.pendingProps = r = i), (e.lanes & o) !== 0))
        e.flags & 131072 && (Ye = !0);
      else return (t.lanes = e.lanes), an(e, t, o);
  }
  return Wu(e, t, n, r, o);
}
function yv(e, t, n) {
  var r = t.pendingProps,
    o = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        ne(Mr, rt),
        (rt |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          ne(Mr, rt),
          (rt |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        ne(Mr, rt),
        (rt |= r);
    }
  else
    i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      ne(Mr, rt),
      (rt |= r);
  return Ue(e, t, o, n), t.child;
}
function Sv(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Wu(e, t, n, r, o) {
  var i = Qe(n) ? tr : ze.current;
  return (
    (i = Gr(t, i)),
    jr(t, o),
    (n = hf(e, t, n, r, i, o)),
    (r = mf()),
    e !== null && !Ye
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        an(e, t, o))
      : (ue && r && tf(t), (t.flags |= 1), Ue(e, t, n, o), t.child)
  );
}
function Rp(e, t, n, r, o) {
  if (Qe(n)) {
    var i = !0;
    Hs(t);
  } else i = !1;
  if ((jr(t, o), t.stateNode === null))
    ks(e, t), Gg(t, n, r), $u(t, n, r, o), (r = !0);
  else if (e === null) {
    var s = t.stateNode,
      a = t.memoizedProps;
    s.props = a;
    var l = s.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = St(u))
      : ((u = Qe(n) ? tr : ze.current), (u = Gr(t, u)));
    var c = n.getDerivedStateFromProps,
      f =
        typeof c == "function" ||
        typeof s.getSnapshotBeforeUpdate == "function";
    f ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((a !== r || l !== u) && wp(t, s, r, u)),
      (pn = !1);
    var d = t.memoizedState;
    (s.state = d),
      Xs(t, r, s, o),
      (l = t.memoizedState),
      a !== r || d !== l || Xe.current || pn
        ? (typeof c == "function" && (zu(t, n, c, r), (l = t.memoizedState)),
          (a = pn || Sp(t, n, a, r, d, l, u))
            ? (f ||
                (typeof s.UNSAFE_componentWillMount != "function" &&
                  typeof s.componentWillMount != "function") ||
                (typeof s.componentWillMount == "function" &&
                  s.componentWillMount(),
                typeof s.UNSAFE_componentWillMount == "function" &&
                  s.UNSAFE_componentWillMount()),
              typeof s.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = l)),
          (s.props = r),
          (s.state = l),
          (s.context = u),
          (r = a))
        : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (s = t.stateNode),
      Wg(e, t),
      (a = t.memoizedProps),
      (u = t.type === t.elementType ? a : Ct(t.type, a)),
      (s.props = u),
      (f = t.pendingProps),
      (d = s.context),
      (l = n.contextType),
      typeof l == "object" && l !== null
        ? (l = St(l))
        : ((l = Qe(n) ? tr : ze.current), (l = Gr(t, l)));
    var p = n.getDerivedStateFromProps;
    (c =
      typeof p == "function" ||
      typeof s.getSnapshotBeforeUpdate == "function") ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((a !== f || d !== l) && wp(t, s, r, l)),
      (pn = !1),
      (d = t.memoizedState),
      (s.state = d),
      Xs(t, r, s, o);
    var S = t.memoizedState;
    a !== f || d !== S || Xe.current || pn
      ? (typeof p == "function" && (zu(t, n, p, r), (S = t.memoizedState)),
        (u = pn || Sp(t, n, u, r, d, S, l) || !1)
          ? (c ||
              (typeof s.UNSAFE_componentWillUpdate != "function" &&
                typeof s.componentWillUpdate != "function") ||
              (typeof s.componentWillUpdate == "function" &&
                s.componentWillUpdate(r, S, l),
              typeof s.UNSAFE_componentWillUpdate == "function" &&
                s.UNSAFE_componentWillUpdate(r, S, l)),
            typeof s.componentDidUpdate == "function" && (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof s.componentDidUpdate != "function" ||
              (a === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate != "function" ||
              (a === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = S)),
        (s.props = r),
        (s.state = S),
        (s.context = l),
        (r = u))
      : (typeof s.componentDidUpdate != "function" ||
          (a === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != "function" ||
          (a === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Hu(e, t, n, r, i, o);
}
function Hu(e, t, n, r, o, i) {
  Sv(e, t);
  var s = (t.flags & 128) !== 0;
  if (!r && !s) return o && hp(t, n, !1), an(e, t, i);
  (r = t.stateNode), (Ux.current = t);
  var a =
    s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && s
      ? ((t.child = Kr(t, e.child, null, i)), (t.child = Kr(t, null, a, i)))
      : Ue(e, t, a, i),
    (t.memoizedState = r.state),
    o && hp(t, n, !0),
    t.child
  );
}
function wv(e) {
  var t = e.stateNode;
  t.pendingContext
    ? pp(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && pp(e, t.context, !1),
    cf(e, t.containerInfo);
}
function Mp(e, t, n, r, o) {
  return Zr(), rf(o), (t.flags |= 256), Ue(e, t, n, r), t.child;
}
var Gu = { dehydrated: null, treeContext: null, retryLane: 0 };
function Zu(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function xv(e, t, n) {
  var r = t.pendingProps,
    o = fe.current,
    i = !1,
    s = (t.flags & 128) !== 0,
    a;
  if (
    ((a = s) ||
      (a = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    a
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (o |= 1),
    ne(fe, o & 1),
    e === null)
  )
    return (
      ju(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((s = r.children),
          (e = r.fallback),
          i
            ? ((r = t.mode),
              (i = t.child),
              (s = { mode: "hidden", children: s }),
              !(r & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = s))
                : (i = La(s, r, 0, null)),
              (e = Qn(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = Zu(n)),
              (t.memoizedState = Gu),
              e)
            : yf(t, s))
    );
  if (((o = e.memoizedState), o !== null && ((a = o.dehydrated), a !== null)))
    return Wx(e, t, s, r, a, o, n);
  if (i) {
    (i = r.fallback), (s = t.mode), (o = e.child), (a = o.sibling);
    var l = { mode: "hidden", children: r.children };
    return (
      !(s & 1) && t.child !== o
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = l),
          (t.deletions = null))
        : ((r = En(o, l)), (r.subtreeFlags = o.subtreeFlags & 14680064)),
      a !== null ? (i = En(a, i)) : ((i = Qn(i, s, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (s = e.child.memoizedState),
      (s =
        s === null
          ? Zu(n)
          : {
              baseLanes: s.baseLanes | n,
              cachePool: null,
              transitions: s.transitions,
            }),
      (i.memoizedState = s),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = Gu),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = En(i, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function yf(e, t) {
  return (
    (t = La({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function es(e, t, n, r) {
  return (
    r !== null && rf(r),
    Kr(t, e.child, null, n),
    (e = yf(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function Wx(e, t, n, r, o, i, s) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Nl(Error(M(422)))), es(e, t, s, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((i = r.fallback),
        (o = t.mode),
        (r = La({ mode: "visible", children: r.children }, o, 0, null)),
        (i = Qn(i, o, s, null)),
        (i.flags |= 2),
        (r.return = t),
        (i.return = t),
        (r.sibling = i),
        (t.child = r),
        t.mode & 1 && Kr(t, e.child, null, s),
        (t.child.memoizedState = Zu(s)),
        (t.memoizedState = Gu),
        i);
  if (!(t.mode & 1)) return es(e, t, s, null);
  if (o.data === "$!") {
    if (((r = o.nextSibling && o.nextSibling.dataset), r)) var a = r.dgst;
    return (r = a), (i = Error(M(419))), (r = Nl(i, r, void 0)), es(e, t, s, r);
  }
  if (((a = (s & e.childLanes) !== 0), Ye || a)) {
    if (((r = _e), r !== null)) {
      switch (s & -s) {
        case 4:
          o = 2;
          break;
        case 16:
          o = 8;
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
          o = 32;
          break;
        case 536870912:
          o = 268435456;
          break;
        default:
          o = 0;
      }
      (o = o & (r.suspendedLanes | s) ? 0 : o),
        o !== 0 &&
          o !== i.retryLane &&
          ((i.retryLane = o), sn(e, o), bt(r, e, o, -1));
    }
    return Pf(), (r = Nl(Error(M(421)))), es(e, t, s, r);
  }
  return o.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = rk.bind(null, e)),
      (o._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (ot = kn(o.nextSibling)),
      (it = t),
      (ue = !0),
      (Tt = null),
      e !== null &&
        ((mt[gt++] = Xt),
        (mt[gt++] = Qt),
        (mt[gt++] = nr),
        (Xt = e.id),
        (Qt = e.overflow),
        (nr = t)),
      (t = yf(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Ap(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Bu(e.return, t, n);
}
function Vl(e, t, n, r, o) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = n),
      (i.tailMode = o));
}
function kv(e, t, n) {
  var r = t.pendingProps,
    o = r.revealOrder,
    i = r.tail;
  if ((Ue(e, t, r.children, n), (r = fe.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Ap(e, n, t);
        else if (e.tag === 19) Ap(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((ne(fe, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (o) {
      case "forwards":
        for (n = t.child, o = null; n !== null; )
          (e = n.alternate),
            e !== null && Qs(e) === null && (o = n),
            (n = n.sibling);
        (n = o),
          n === null
            ? ((o = t.child), (t.child = null))
            : ((o = n.sibling), (n.sibling = null)),
          Vl(t, !1, o, n, i);
        break;
      case "backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && Qs(e) === null)) {
            t.child = o;
            break;
          }
          (e = o.sibling), (o.sibling = n), (n = o), (o = e);
        }
        Vl(t, !0, n, null, i);
        break;
      case "together":
        Vl(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function ks(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function an(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (or |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(M(153));
  if (t.child !== null) {
    for (
      e = t.child, n = En(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = En(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function Hx(e, t, n) {
  switch (t.tag) {
    case 3:
      wv(t), Zr();
      break;
    case 5:
      Yg(t);
      break;
    case 1:
      Qe(t.type) && Hs(t);
      break;
    case 4:
      cf(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        o = t.memoizedProps.value;
      ne(Ks, r._currentValue), (r._currentValue = o);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (ne(fe, fe.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? xv(e, t, n)
          : (ne(fe, fe.current & 1),
            (e = an(e, t, n)),
            e !== null ? e.sibling : null);
      ne(fe, fe.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return kv(e, t, n);
        t.flags |= 128;
      }
      if (
        ((o = t.memoizedState),
        o !== null &&
          ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
        ne(fe, fe.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), yv(e, t, n);
  }
  return an(e, t, n);
}
var Cv, Ku, Pv, Tv;
Cv = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
Ku = function () {};
Pv = function (e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    (e = t.stateNode), Zn(zt.current);
    var i = null;
    switch (n) {
      case "input":
        (o = gu(e, o)), (r = gu(e, r)), (i = []);
        break;
      case "select":
        (o = he({}, o, { value: void 0 })),
          (r = he({}, r, { value: void 0 })),
          (i = []);
        break;
      case "textarea":
        (o = Su(e, o)), (r = Su(e, r)), (i = []);
        break;
      default:
        typeof o.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = Us);
    }
    xu(n, r);
    var s;
    n = null;
    for (u in o)
      if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
        if (u === "style") {
          var a = o[u];
          for (s in a) a.hasOwnProperty(s) && (n || (n = {}), (n[s] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (Ho.hasOwnProperty(u)
              ? i || (i = [])
              : (i = i || []).push(u, null));
    for (u in r) {
      var l = r[u];
      if (
        ((a = o != null ? o[u] : void 0),
        r.hasOwnProperty(u) && l !== a && (l != null || a != null))
      )
        if (u === "style")
          if (a) {
            for (s in a)
              !a.hasOwnProperty(s) ||
                (l && l.hasOwnProperty(s)) ||
                (n || (n = {}), (n[s] = ""));
            for (s in l)
              l.hasOwnProperty(s) &&
                a[s] !== l[s] &&
                (n || (n = {}), (n[s] = l[s]));
          } else n || (i || (i = []), i.push(u, n)), (n = l);
        else
          u === "dangerouslySetInnerHTML"
            ? ((l = l ? l.__html : void 0),
              (a = a ? a.__html : void 0),
              l != null && a !== l && (i = i || []).push(u, l))
            : u === "children"
            ? (typeof l != "string" && typeof l != "number") ||
              (i = i || []).push(u, "" + l)
            : u !== "suppressContentEditableWarning" &&
              u !== "suppressHydrationWarning" &&
              (Ho.hasOwnProperty(u)
                ? (l != null && u === "onScroll" && oe("scroll", e),
                  i || a === l || (i = []))
                : (i = i || []).push(u, l));
    }
    n && (i = i || []).push("style", n);
    var u = i;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
Tv = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function vo(e, t) {
  if (!ue)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function Ne(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags & 14680064),
        (r |= o.flags & 14680064),
        (o.return = e),
        (o = o.sibling);
  else
    for (o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags),
        (r |= o.flags),
        (o.return = e),
        (o = o.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function Gx(e, t, n) {
  var r = t.pendingProps;
  switch ((nf(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return Ne(t), null;
    case 1:
      return Qe(t.type) && Ws(), Ne(t), null;
    case 3:
      return (
        (r = t.stateNode),
        Yr(),
        se(Xe),
        se(ze),
        df(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (qi(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Tt !== null && (nc(Tt), (Tt = null)))),
        Ku(e, t),
        Ne(t),
        null
      );
    case 5:
      ff(t);
      var o = Zn(ri.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Pv(e, t, n, r, o),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(M(166));
          return Ne(t), null;
        }
        if (((e = Zn(zt.current)), qi(t))) {
          (r = t.stateNode), (n = t.type);
          var i = t.memoizedProps;
          switch (((r[Vt] = t), (r[ti] = i), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              oe("cancel", r), oe("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              oe("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < Eo.length; o++) oe(Eo[o], r);
              break;
            case "source":
              oe("error", r);
              break;
            case "img":
            case "image":
            case "link":
              oe("error", r), oe("load", r);
              break;
            case "details":
              oe("toggle", r);
              break;
            case "input":
              Bd(r, i), oe("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!i.multiple }),
                oe("invalid", r);
              break;
            case "textarea":
              $d(r, i), oe("invalid", r);
          }
          xu(n, i), (o = null);
          for (var s in i)
            if (i.hasOwnProperty(s)) {
              var a = i[s];
              s === "children"
                ? typeof a == "string"
                  ? r.textContent !== a &&
                    (i.suppressHydrationWarning !== !0 &&
                      Qi(r.textContent, a, e),
                    (o = ["children", a]))
                  : typeof a == "number" &&
                    r.textContent !== "" + a &&
                    (i.suppressHydrationWarning !== !0 &&
                      Qi(r.textContent, a, e),
                    (o = ["children", "" + a]))
                : Ho.hasOwnProperty(s) &&
                  a != null &&
                  s === "onScroll" &&
                  oe("scroll", r);
            }
          switch (n) {
            case "input":
              Ui(r), zd(r, i, !0);
              break;
            case "textarea":
              Ui(r), Ud(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = Us);
          }
          (r = o), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (s = o.nodeType === 9 ? o : o.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = qm(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = s.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = s.createElement(n, { is: r.is }))
                : ((e = s.createElement(n)),
                  n === "select" &&
                    ((s = e),
                    r.multiple
                      ? (s.multiple = !0)
                      : r.size && (s.size = r.size)))
              : (e = s.createElementNS(e, n)),
            (e[Vt] = t),
            (e[ti] = r),
            Cv(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((s = ku(n, r)), n)) {
              case "dialog":
                oe("cancel", e), oe("close", e), (o = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                oe("load", e), (o = r);
                break;
              case "video":
              case "audio":
                for (o = 0; o < Eo.length; o++) oe(Eo[o], e);
                o = r;
                break;
              case "source":
                oe("error", e), (o = r);
                break;
              case "img":
              case "image":
              case "link":
                oe("error", e), oe("load", e), (o = r);
                break;
              case "details":
                oe("toggle", e), (o = r);
                break;
              case "input":
                Bd(e, r), (o = gu(e, r)), oe("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (o = he({}, r, { value: void 0 })),
                  oe("invalid", e);
                break;
              case "textarea":
                $d(e, r), (o = Su(e, r)), oe("invalid", e);
                break;
              default:
                o = r;
            }
            xu(n, o), (a = o);
            for (i in a)
              if (a.hasOwnProperty(i)) {
                var l = a[i];
                i === "style"
                  ? tg(e, l)
                  : i === "dangerouslySetInnerHTML"
                  ? ((l = l ? l.__html : void 0), l != null && Jm(e, l))
                  : i === "children"
                  ? typeof l == "string"
                    ? (n !== "textarea" || l !== "") && Go(e, l)
                    : typeof l == "number" && Go(e, "" + l)
                  : i !== "suppressContentEditableWarning" &&
                    i !== "suppressHydrationWarning" &&
                    i !== "autoFocus" &&
                    (Ho.hasOwnProperty(i)
                      ? l != null && i === "onScroll" && oe("scroll", e)
                      : l != null && zc(e, i, l, s));
              }
            switch (n) {
              case "input":
                Ui(e), zd(e, r, !1);
                break;
              case "textarea":
                Ui(e), Ud(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Rn(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? Ir(e, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      Ir(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = Us);
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
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return Ne(t), null;
    case 6:
      if (e && t.stateNode != null) Tv(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(M(166));
        if (((n = Zn(ri.current)), Zn(zt.current), qi(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Vt] = t),
            (i = r.nodeValue !== n) && ((e = it), e !== null))
          )
            switch (e.tag) {
              case 3:
                Qi(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Qi(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Vt] = t),
            (t.stateNode = r);
      }
      return Ne(t), null;
    case 13:
      if (
        (se(fe),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (ue && ot !== null && t.mode & 1 && !(t.flags & 128))
          $g(), Zr(), (t.flags |= 98560), (i = !1);
        else if (((i = qi(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(M(318));
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(M(317));
            i[Vt] = t;
          } else
            Zr(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          Ne(t), (i = !1);
        } else Tt !== null && (nc(Tt), (Tt = null)), (i = !0);
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || fe.current & 1 ? ke === 0 && (ke = 3) : Pf())),
          t.updateQueue !== null && (t.flags |= 4),
          Ne(t),
          null);
    case 4:
      return (
        Yr(), Ku(e, t), e === null && Jo(t.stateNode.containerInfo), Ne(t), null
      );
    case 10:
      return af(t.type._context), Ne(t), null;
    case 17:
      return Qe(t.type) && Ws(), Ne(t), null;
    case 19:
      if ((se(fe), (i = t.memoizedState), i === null)) return Ne(t), null;
      if (((r = (t.flags & 128) !== 0), (s = i.rendering), s === null))
        if (r) vo(i, !1);
        else {
          if (ke !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((s = Qs(e)), s !== null)) {
                for (
                  t.flags |= 128,
                    vo(i, !1),
                    r = s.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (i = n),
                    (e = r),
                    (i.flags &= 14680066),
                    (s = i.alternate),
                    s === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = s.childLanes),
                        (i.lanes = s.lanes),
                        (i.child = s.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = s.memoizedProps),
                        (i.memoizedState = s.memoizedState),
                        (i.updateQueue = s.updateQueue),
                        (i.type = s.type),
                        (e = s.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return ne(fe, (fe.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null &&
            ve() > Qr &&
            ((t.flags |= 128), (r = !0), vo(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Qs(s)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              vo(i, !0),
              i.tail === null && i.tailMode === "hidden" && !s.alternate && !ue)
            )
              return Ne(t), null;
          } else
            2 * ve() - i.renderingStartTime > Qr &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), vo(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((s.sibling = t.child), (t.child = s))
          : ((n = i.last),
            n !== null ? (n.sibling = s) : (t.child = s),
            (i.last = s));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = ve()),
          (t.sibling = null),
          (n = fe.current),
          ne(fe, r ? (n & 1) | 2 : n & 1),
          t)
        : (Ne(t), null);
    case 22:
    case 23:
      return (
        Cf(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? rt & 1073741824 && (Ne(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : Ne(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(M(156, t.tag));
}
function Zx(e, t) {
  switch ((nf(t), t.tag)) {
    case 1:
      return (
        Qe(t.type) && Ws(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Yr(),
        se(Xe),
        se(ze),
        df(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return ff(t), null;
    case 13:
      if (
        (se(fe), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(M(340));
        Zr();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return se(fe), null;
    case 4:
      return Yr(), null;
    case 10:
      return af(t.type._context), null;
    case 22:
    case 23:
      return Cf(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var ts = !1,
  je = !1,
  Kx = typeof WeakSet == "function" ? WeakSet : Set,
  I = null;
function Rr(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        me(e, t, r);
      }
    else n.current = null;
}
function Yu(e, t, n) {
  try {
    n();
  } catch (r) {
    me(e, t, r);
  }
}
var Op = !1;
function Yx(e, t) {
  if (((Ou = Bs), (e = Rg()), ef(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var o = r.anchorOffset,
            i = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, i.nodeType;
          } catch {
            n = null;
            break e;
          }
          var s = 0,
            a = -1,
            l = -1,
            u = 0,
            c = 0,
            f = e,
            d = null;
          t: for (;;) {
            for (
              var p;
              f !== n || (o !== 0 && f.nodeType !== 3) || (a = s + o),
                f !== i || (r !== 0 && f.nodeType !== 3) || (l = s + r),
                f.nodeType === 3 && (s += f.nodeValue.length),
                (p = f.firstChild) !== null;

            )
              (d = f), (f = p);
            for (;;) {
              if (f === e) break t;
              if (
                (d === n && ++u === o && (a = s),
                d === i && ++c === r && (l = s),
                (p = f.nextSibling) !== null)
              )
                break;
              (f = d), (d = f.parentNode);
            }
            f = p;
          }
          n = a === -1 || l === -1 ? null : { start: a, end: l };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Lu = { focusedElem: e, selectionRange: n }, Bs = !1, I = t; I !== null; )
    if (((t = I), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (I = e);
    else
      for (; I !== null; ) {
        t = I;
        try {
          var S = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (S !== null) {
                  var v = S.memoizedProps,
                    P = S.memoizedState,
                    g = t.stateNode,
                    h = g.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? v : Ct(t.type, v),
                      P
                    );
                  g.__reactInternalSnapshotBeforeUpdate = h;
                }
                break;
              case 3:
                var m = t.stateNode.containerInfo;
                m.nodeType === 1
                  ? (m.textContent = "")
                  : m.nodeType === 9 &&
                    m.documentElement &&
                    m.removeChild(m.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(M(163));
            }
        } catch (C) {
          me(t, t.return, C);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (I = e);
          break;
        }
        I = t.return;
      }
  return (S = Op), (Op = !1), S;
}
function Fo(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var o = (r = r.next);
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy;
        (o.destroy = void 0), i !== void 0 && Yu(t, n, i);
      }
      o = o.next;
    } while (o !== r);
  }
}
function Aa(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Xu(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function Ev(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Ev(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Vt], delete t[ti], delete t[Du], delete t[Ax], delete t[Ox])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function bv(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Lp(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || bv(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Qu(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Us));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Qu(e, t, n), e = e.sibling; e !== null; ) Qu(e, t, n), (e = e.sibling);
}
function qu(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (qu(e, t, n), e = e.sibling; e !== null; ) qu(e, t, n), (e = e.sibling);
}
var Me = null,
  Pt = !1;
function un(e, t, n) {
  for (n = n.child; n !== null; ) _v(e, t, n), (n = n.sibling);
}
function _v(e, t, n) {
  if (Bt && typeof Bt.onCommitFiberUnmount == "function")
    try {
      Bt.onCommitFiberUnmount(Ca, n);
    } catch {}
  switch (n.tag) {
    case 5:
      je || Rr(n, t);
    case 6:
      var r = Me,
        o = Pt;
      (Me = null),
        un(e, t, n),
        (Me = r),
        (Pt = o),
        Me !== null &&
          (Pt
            ? ((e = Me),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : Me.removeChild(n.stateNode));
      break;
    case 18:
      Me !== null &&
        (Pt
          ? ((e = Me),
            (n = n.stateNode),
            e.nodeType === 8
              ? Al(e.parentNode, n)
              : e.nodeType === 1 && Al(e, n),
            Xo(e))
          : Al(Me, n.stateNode));
      break;
    case 4:
      (r = Me),
        (o = Pt),
        (Me = n.stateNode.containerInfo),
        (Pt = !0),
        un(e, t, n),
        (Me = r),
        (Pt = o);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !je &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        o = r = r.next;
        do {
          var i = o,
            s = i.destroy;
          (i = i.tag),
            s !== void 0 && (i & 2 || i & 4) && Yu(n, t, s),
            (o = o.next);
        } while (o !== r);
      }
      un(e, t, n);
      break;
    case 1:
      if (
        !je &&
        (Rr(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (a) {
          me(n, t, a);
        }
      un(e, t, n);
      break;
    case 21:
      un(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((je = (r = je) || n.memoizedState !== null), un(e, t, n), (je = r))
        : un(e, t, n);
      break;
    default:
      un(e, t, n);
  }
}
function Fp(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Kx()),
      t.forEach(function (r) {
        var o = ok.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(o, o));
      });
  }
}
function kt(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var o = n[r];
      try {
        var i = e,
          s = t,
          a = s;
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              (Me = a.stateNode), (Pt = !1);
              break e;
            case 3:
              (Me = a.stateNode.containerInfo), (Pt = !0);
              break e;
            case 4:
              (Me = a.stateNode.containerInfo), (Pt = !0);
              break e;
          }
          a = a.return;
        }
        if (Me === null) throw Error(M(160));
        _v(i, s, o), (Me = null), (Pt = !1);
        var l = o.alternate;
        l !== null && (l.return = null), (o.return = null);
      } catch (u) {
        me(o, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Rv(t, e), (t = t.sibling);
}
function Rv(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((kt(t, e), Ot(e), r & 4)) {
        try {
          Fo(3, e, e.return), Aa(3, e);
        } catch (v) {
          me(e, e.return, v);
        }
        try {
          Fo(5, e, e.return);
        } catch (v) {
          me(e, e.return, v);
        }
      }
      break;
    case 1:
      kt(t, e), Ot(e), r & 512 && n !== null && Rr(n, n.return);
      break;
    case 5:
      if (
        (kt(t, e),
        Ot(e),
        r & 512 && n !== null && Rr(n, n.return),
        e.flags & 32)
      ) {
        var o = e.stateNode;
        try {
          Go(o, "");
        } catch (v) {
          me(e, e.return, v);
        }
      }
      if (r & 4 && ((o = e.stateNode), o != null)) {
        var i = e.memoizedProps,
          s = n !== null ? n.memoizedProps : i,
          a = e.type,
          l = e.updateQueue;
        if (((e.updateQueue = null), l !== null))
          try {
            a === "input" && i.type === "radio" && i.name != null && Xm(o, i),
              ku(a, s);
            var u = ku(a, i);
            for (s = 0; s < l.length; s += 2) {
              var c = l[s],
                f = l[s + 1];
              c === "style"
                ? tg(o, f)
                : c === "dangerouslySetInnerHTML"
                ? Jm(o, f)
                : c === "children"
                ? Go(o, f)
                : zc(o, c, f, u);
            }
            switch (a) {
              case "input":
                vu(o, i);
                break;
              case "textarea":
                Qm(o, i);
                break;
              case "select":
                var d = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!i.multiple;
                var p = i.value;
                p != null
                  ? Ir(o, !!i.multiple, p, !1)
                  : d !== !!i.multiple &&
                    (i.defaultValue != null
                      ? Ir(o, !!i.multiple, i.defaultValue, !0)
                      : Ir(o, !!i.multiple, i.multiple ? [] : "", !1));
            }
            o[ti] = i;
          } catch (v) {
            me(e, e.return, v);
          }
      }
      break;
    case 6:
      if ((kt(t, e), Ot(e), r & 4)) {
        if (e.stateNode === null) throw Error(M(162));
        (o = e.stateNode), (i = e.memoizedProps);
        try {
          o.nodeValue = i;
        } catch (v) {
          me(e, e.return, v);
        }
      }
      break;
    case 3:
      if (
        (kt(t, e), Ot(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Xo(t.containerInfo);
        } catch (v) {
          me(e, e.return, v);
        }
      break;
    case 4:
      kt(t, e), Ot(e);
      break;
    case 13:
      kt(t, e),
        Ot(e),
        (o = e.child),
        o.flags & 8192 &&
          ((i = o.memoizedState !== null),
          (o.stateNode.isHidden = i),
          !i ||
            (o.alternate !== null && o.alternate.memoizedState !== null) ||
            (xf = ve())),
        r & 4 && Fp(e);
      break;
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((je = (u = je) || c), kt(t, e), (je = u)) : kt(t, e),
        Ot(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !c && e.mode & 1)
        )
          for (I = e, c = e.child; c !== null; ) {
            for (f = I = c; I !== null; ) {
              switch (((d = I), (p = d.child), d.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Fo(4, d, d.return);
                  break;
                case 1:
                  Rr(d, d.return);
                  var S = d.stateNode;
                  if (typeof S.componentWillUnmount == "function") {
                    (r = d), (n = d.return);
                    try {
                      (t = r),
                        (S.props = t.memoizedProps),
                        (S.state = t.memoizedState),
                        S.componentWillUnmount();
                    } catch (v) {
                      me(r, n, v);
                    }
                  }
                  break;
                case 5:
                  Rr(d, d.return);
                  break;
                case 22:
                  if (d.memoizedState !== null) {
                    Dp(f);
                    continue;
                  }
              }
              p !== null ? ((p.return = d), (I = p)) : Dp(f);
            }
            c = c.sibling;
          }
        e: for (c = null, f = e; ; ) {
          if (f.tag === 5) {
            if (c === null) {
              c = f;
              try {
                (o = f.stateNode),
                  u
                    ? ((i = o.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"))
                    : ((a = f.stateNode),
                      (l = f.memoizedProps.style),
                      (s =
                        l != null && l.hasOwnProperty("display")
                          ? l.display
                          : null),
                      (a.style.display = eg("display", s)));
              } catch (v) {
                me(e, e.return, v);
              }
            }
          } else if (f.tag === 6) {
            if (c === null)
              try {
                f.stateNode.nodeValue = u ? "" : f.memoizedProps;
              } catch (v) {
                me(e, e.return, v);
              }
          } else if (
            ((f.tag !== 22 && f.tag !== 23) ||
              f.memoizedState === null ||
              f === e) &&
            f.child !== null
          ) {
            (f.child.return = f), (f = f.child);
            continue;
          }
          if (f === e) break e;
          for (; f.sibling === null; ) {
            if (f.return === null || f.return === e) break e;
            c === f && (c = null), (f = f.return);
          }
          c === f && (c = null), (f.sibling.return = f.return), (f = f.sibling);
        }
      }
      break;
    case 19:
      kt(t, e), Ot(e), r & 4 && Fp(e);
      break;
    case 21:
      break;
    default:
      kt(t, e), Ot(e);
  }
}
function Ot(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (bv(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(M(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (Go(o, ""), (r.flags &= -33));
          var i = Lp(e);
          qu(e, i, o);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo,
            a = Lp(e);
          Qu(e, a, s);
          break;
        default:
          throw Error(M(161));
      }
    } catch (l) {
      me(e, e.return, l);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Xx(e, t, n) {
  (I = e), Mv(e);
}
function Mv(e, t, n) {
  for (var r = (e.mode & 1) !== 0; I !== null; ) {
    var o = I,
      i = o.child;
    if (o.tag === 22 && r) {
      var s = o.memoizedState !== null || ts;
      if (!s) {
        var a = o.alternate,
          l = (a !== null && a.memoizedState !== null) || je;
        a = ts;
        var u = je;
        if (((ts = s), (je = l) && !u))
          for (I = o; I !== null; )
            (s = I),
              (l = s.child),
              s.tag === 22 && s.memoizedState !== null
                ? Np(o)
                : l !== null
                ? ((l.return = s), (I = l))
                : Np(o);
        for (; i !== null; ) (I = i), Mv(i), (i = i.sibling);
        (I = o), (ts = a), (je = u);
      }
      Ip(e);
    } else
      o.subtreeFlags & 8772 && i !== null ? ((i.return = o), (I = i)) : Ip(e);
  }
}
function Ip(e) {
  for (; I !== null; ) {
    var t = I;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              je || Aa(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !je)
                if (n === null) r.componentDidMount();
                else {
                  var o =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Ct(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    o,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var i = t.updateQueue;
              i !== null && yp(t, i, r);
              break;
            case 3:
              var s = t.updateQueue;
              if (s !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                yp(t, s, n);
              }
              break;
            case 5:
              var a = t.stateNode;
              if (n === null && t.flags & 4) {
                n = a;
                var l = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    l.autoFocus && n.focus();
                    break;
                  case "img":
                    l.src && (n.src = l.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var u = t.alternate;
                if (u !== null) {
                  var c = u.memoizedState;
                  if (c !== null) {
                    var f = c.dehydrated;
                    f !== null && Xo(f);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(M(163));
          }
        je || (t.flags & 512 && Xu(t));
      } catch (d) {
        me(t, t.return, d);
      }
    }
    if (t === e) {
      I = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (I = n);
      break;
    }
    I = t.return;
  }
}
function Dp(e) {
  for (; I !== null; ) {
    var t = I;
    if (t === e) {
      I = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (I = n);
      break;
    }
    I = t.return;
  }
}
function Np(e) {
  for (; I !== null; ) {
    var t = I;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Aa(4, t);
          } catch (l) {
            me(t, n, l);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (l) {
              me(t, o, l);
            }
          }
          var i = t.return;
          try {
            Xu(t);
          } catch (l) {
            me(t, i, l);
          }
          break;
        case 5:
          var s = t.return;
          try {
            Xu(t);
          } catch (l) {
            me(t, s, l);
          }
      }
    } catch (l) {
      me(t, t.return, l);
    }
    if (t === e) {
      I = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      (a.return = t.return), (I = a);
      break;
    }
    I = t.return;
  }
}
var Qx = Math.ceil,
  ea = ln.ReactCurrentDispatcher,
  Sf = ln.ReactCurrentOwner,
  yt = ln.ReactCurrentBatchConfig,
  G = 0,
  _e = null,
  we = null,
  Oe = 0,
  rt = 0,
  Mr = Fn(0),
  ke = 0,
  ai = null,
  or = 0,
  Oa = 0,
  wf = 0,
  Io = null,
  Ke = null,
  xf = 0,
  Qr = 1 / 0,
  Kt = null,
  ta = !1,
  Ju = null,
  Pn = null,
  ns = !1,
  yn = null,
  na = 0,
  Do = 0,
  ec = null,
  Cs = -1,
  Ps = 0;
function We() {
  return G & 6 ? ve() : Cs !== -1 ? Cs : (Cs = ve());
}
function Tn(e) {
  return e.mode & 1
    ? G & 2 && Oe !== 0
      ? Oe & -Oe
      : Fx.transition !== null
      ? (Ps === 0 && (Ps = pg()), Ps)
      : ((e = Q),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : wg(e.type))),
        e)
    : 1;
}
function bt(e, t, n, r) {
  if (50 < Do) throw ((Do = 0), (ec = null), Error(M(185)));
  wi(e, n, r),
    (!(G & 2) || e !== _e) &&
      (e === _e && (!(G & 2) && (Oa |= n), ke === 4 && gn(e, Oe)),
      qe(e, r),
      n === 1 && G === 0 && !(t.mode & 1) && ((Qr = ve() + 500), _a && In()));
}
function qe(e, t) {
  var n = e.callbackNode;
  Fw(e, t);
  var r = js(e, e === _e ? Oe : 0);
  if (r === 0)
    n !== null && Gd(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Gd(n), t === 1))
      e.tag === 0 ? Lx(Vp.bind(null, e)) : jg(Vp.bind(null, e)),
        Rx(function () {
          !(G & 6) && In();
        }),
        (n = null);
    else {
      switch (hg(r)) {
        case 1:
          n = Gc;
          break;
        case 4:
          n = fg;
          break;
        case 16:
          n = Vs;
          break;
        case 536870912:
          n = dg;
          break;
        default:
          n = Vs;
      }
      n = Vv(n, Av.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Av(e, t) {
  if (((Cs = -1), (Ps = 0), G & 6)) throw Error(M(327));
  var n = e.callbackNode;
  if (Br() && e.callbackNode !== n) return null;
  var r = js(e, e === _e ? Oe : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = ra(e, r);
  else {
    t = r;
    var o = G;
    G |= 2;
    var i = Lv();
    (_e !== e || Oe !== t) && ((Kt = null), (Qr = ve() + 500), Xn(e, t));
    do
      try {
        ek();
        break;
      } catch (a) {
        Ov(e, a);
      }
    while (1);
    sf(),
      (ea.current = i),
      (G = o),
      we !== null ? (t = 0) : ((_e = null), (Oe = 0), (t = ke));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((o = bu(e)), o !== 0 && ((r = o), (t = tc(e, o)))), t === 1)
    )
      throw ((n = ai), Xn(e, 0), gn(e, r), qe(e, ve()), n);
    if (t === 6) gn(e, r);
    else {
      if (
        ((o = e.current.alternate),
        !(r & 30) &&
          !qx(o) &&
          ((t = ra(e, r)),
          t === 2 && ((i = bu(e)), i !== 0 && ((r = i), (t = tc(e, i)))),
          t === 1))
      )
        throw ((n = ai), Xn(e, 0), gn(e, r), qe(e, ve()), n);
      switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(M(345));
        case 2:
          $n(e, Ke, Kt);
          break;
        case 3:
          if (
            (gn(e, r), (r & 130023424) === r && ((t = xf + 500 - ve()), 10 < t))
          ) {
            if (js(e, 0) !== 0) break;
            if (((o = e.suspendedLanes), (o & r) !== r)) {
              We(), (e.pingedLanes |= e.suspendedLanes & o);
              break;
            }
            e.timeoutHandle = Iu($n.bind(null, e, Ke, Kt), t);
            break;
          }
          $n(e, Ke, Kt);
          break;
        case 4:
          if ((gn(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var s = 31 - Et(r);
            (i = 1 << s), (s = t[s]), s > o && (o = s), (r &= ~i);
          }
          if (
            ((r = o),
            (r = ve() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * Qx(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Iu($n.bind(null, e, Ke, Kt), r);
            break;
          }
          $n(e, Ke, Kt);
          break;
        case 5:
          $n(e, Ke, Kt);
          break;
        default:
          throw Error(M(329));
      }
    }
  }
  return qe(e, ve()), e.callbackNode === n ? Av.bind(null, e) : null;
}
function tc(e, t) {
  var n = Io;
  return (
    e.current.memoizedState.isDehydrated && (Xn(e, t).flags |= 256),
    (e = ra(e, t)),
    e !== 2 && ((t = Ke), (Ke = n), t !== null && nc(t)),
    e
  );
}
function nc(e) {
  Ke === null ? (Ke = e) : Ke.push.apply(Ke, e);
}
function qx(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var o = n[r],
            i = o.getSnapshot;
          o = o.value;
          try {
            if (!_t(i(), o)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function gn(e, t) {
  for (
    t &= ~wf,
      t &= ~Oa,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Et(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Vp(e) {
  if (G & 6) throw Error(M(327));
  Br();
  var t = js(e, 0);
  if (!(t & 1)) return qe(e, ve()), null;
  var n = ra(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = bu(e);
    r !== 0 && ((t = r), (n = tc(e, r)));
  }
  if (n === 1) throw ((n = ai), Xn(e, 0), gn(e, t), qe(e, ve()), n);
  if (n === 6) throw Error(M(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    $n(e, Ke, Kt),
    qe(e, ve()),
    null
  );
}
function kf(e, t) {
  var n = G;
  G |= 1;
  try {
    return e(t);
  } finally {
    (G = n), G === 0 && ((Qr = ve() + 500), _a && In());
  }
}
function ir(e) {
  yn !== null && yn.tag === 0 && !(G & 6) && Br();
  var t = G;
  G |= 1;
  var n = yt.transition,
    r = Q;
  try {
    if (((yt.transition = null), (Q = 1), e)) return e();
  } finally {
    (Q = r), (yt.transition = n), (G = t), !(G & 6) && In();
  }
}
function Cf() {
  (rt = Mr.current), se(Mr);
}
function Xn(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), _x(n)), we !== null))
    for (n = we.return; n !== null; ) {
      var r = n;
      switch ((nf(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Ws();
          break;
        case 3:
          Yr(), se(Xe), se(ze), df();
          break;
        case 5:
          ff(r);
          break;
        case 4:
          Yr();
          break;
        case 13:
          se(fe);
          break;
        case 19:
          se(fe);
          break;
        case 10:
          af(r.type._context);
          break;
        case 22:
        case 23:
          Cf();
      }
      n = n.return;
    }
  if (
    ((_e = e),
    (we = e = En(e.current, null)),
    (Oe = rt = t),
    (ke = 0),
    (ai = null),
    (wf = Oa = or = 0),
    (Ke = Io = null),
    Gn !== null)
  ) {
    for (t = 0; t < Gn.length; t++)
      if (((n = Gn[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var o = r.next,
          i = n.pending;
        if (i !== null) {
          var s = i.next;
          (i.next = o), (r.next = s);
        }
        n.pending = r;
      }
    Gn = null;
  }
  return e;
}
function Ov(e, t) {
  do {
    var n = we;
    try {
      if ((sf(), (ws.current = Js), qs)) {
        for (var r = pe.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), (r = r.next);
        }
        qs = !1;
      }
      if (
        ((rr = 0),
        (Ee = xe = pe = null),
        (Lo = !1),
        (oi = 0),
        (Sf.current = null),
        n === null || n.return === null)
      ) {
        (ke = 1), (ai = t), (we = null);
        break;
      }
      e: {
        var i = e,
          s = n.return,
          a = n,
          l = t;
        if (
          ((t = Oe),
          (a.flags |= 32768),
          l !== null && typeof l == "object" && typeof l.then == "function")
        ) {
          var u = l,
            c = a,
            f = c.tag;
          if (!(c.mode & 1) && (f === 0 || f === 11 || f === 15)) {
            var d = c.alternate;
            d
              ? ((c.updateQueue = d.updateQueue),
                (c.memoizedState = d.memoizedState),
                (c.lanes = d.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var p = Tp(s);
          if (p !== null) {
            (p.flags &= -257),
              Ep(p, s, a, i, t),
              p.mode & 1 && Pp(i, u, t),
              (t = p),
              (l = u);
            var S = t.updateQueue;
            if (S === null) {
              var v = new Set();
              v.add(l), (t.updateQueue = v);
            } else S.add(l);
            break e;
          } else {
            if (!(t & 1)) {
              Pp(i, u, t), Pf();
              break e;
            }
            l = Error(M(426));
          }
        } else if (ue && a.mode & 1) {
          var P = Tp(s);
          if (P !== null) {
            !(P.flags & 65536) && (P.flags |= 256),
              Ep(P, s, a, i, t),
              rf(Xr(l, a));
            break e;
          }
        }
        (i = l = Xr(l, a)),
          ke !== 4 && (ke = 2),
          Io === null ? (Io = [i]) : Io.push(i),
          (i = s);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t);
              var g = mv(i, l, t);
              vp(i, g);
              break e;
            case 1:
              a = l;
              var h = i.type,
                m = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof h.getDerivedStateFromError == "function" ||
                  (m !== null &&
                    typeof m.componentDidCatch == "function" &&
                    (Pn === null || !Pn.has(m))))
              ) {
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var C = gv(i, a, t);
                vp(i, C);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      Iv(n);
    } catch (E) {
      (t = E), we === n && n !== null && (we = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function Lv() {
  var e = ea.current;
  return (ea.current = Js), e === null ? Js : e;
}
function Pf() {
  (ke === 0 || ke === 3 || ke === 2) && (ke = 4),
    _e === null || (!(or & 268435455) && !(Oa & 268435455)) || gn(_e, Oe);
}
function ra(e, t) {
  var n = G;
  G |= 2;
  var r = Lv();
  (_e !== e || Oe !== t) && ((Kt = null), Xn(e, t));
  do
    try {
      Jx();
      break;
    } catch (o) {
      Ov(e, o);
    }
  while (1);
  if ((sf(), (G = n), (ea.current = r), we !== null)) throw Error(M(261));
  return (_e = null), (Oe = 0), ke;
}
function Jx() {
  for (; we !== null; ) Fv(we);
}
function ek() {
  for (; we !== null && !Tw(); ) Fv(we);
}
function Fv(e) {
  var t = Nv(e.alternate, e, rt);
  (e.memoizedProps = e.pendingProps),
    t === null ? Iv(e) : (we = t),
    (Sf.current = null);
}
function Iv(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = Zx(n, t)), n !== null)) {
        (n.flags &= 32767), (we = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (ke = 6), (we = null);
        return;
      }
    } else if (((n = Gx(n, t, rt)), n !== null)) {
      we = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      we = t;
      return;
    }
    we = t = e;
  } while (t !== null);
  ke === 0 && (ke = 5);
}
function $n(e, t, n) {
  var r = Q,
    o = yt.transition;
  try {
    (yt.transition = null), (Q = 1), tk(e, t, n, r);
  } finally {
    (yt.transition = o), (Q = r);
  }
  return null;
}
function tk(e, t, n, r) {
  do Br();
  while (yn !== null);
  if (G & 6) throw Error(M(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(M(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = n.lanes | n.childLanes;
  if (
    (Iw(e, i),
    e === _e && ((we = _e = null), (Oe = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      ns ||
      ((ns = !0),
      Vv(Vs, function () {
        return Br(), null;
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    (i = yt.transition), (yt.transition = null);
    var s = Q;
    Q = 1;
    var a = G;
    (G |= 4),
      (Sf.current = null),
      Yx(e, n),
      Rv(n, e),
      xx(Lu),
      (Bs = !!Ou),
      (Lu = Ou = null),
      (e.current = n),
      Xx(n),
      Ew(),
      (G = a),
      (Q = s),
      (yt.transition = i);
  } else e.current = n;
  if (
    (ns && ((ns = !1), (yn = e), (na = o)),
    (i = e.pendingLanes),
    i === 0 && (Pn = null),
    Rw(n.stateNode),
    qe(e, ve()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest });
  if (ta) throw ((ta = !1), (e = Ju), (Ju = null), e);
  return (
    na & 1 && e.tag !== 0 && Br(),
    (i = e.pendingLanes),
    i & 1 ? (e === ec ? Do++ : ((Do = 0), (ec = e))) : (Do = 0),
    In(),
    null
  );
}
function Br() {
  if (yn !== null) {
    var e = hg(na),
      t = yt.transition,
      n = Q;
    try {
      if (((yt.transition = null), (Q = 16 > e ? 16 : e), yn === null))
        var r = !1;
      else {
        if (((e = yn), (yn = null), (na = 0), G & 6)) throw Error(M(331));
        var o = G;
        for (G |= 4, I = e.current; I !== null; ) {
          var i = I,
            s = i.child;
          if (I.flags & 16) {
            var a = i.deletions;
            if (a !== null) {
              for (var l = 0; l < a.length; l++) {
                var u = a[l];
                for (I = u; I !== null; ) {
                  var c = I;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Fo(8, c, i);
                  }
                  var f = c.child;
                  if (f !== null) (f.return = c), (I = f);
                  else
                    for (; I !== null; ) {
                      c = I;
                      var d = c.sibling,
                        p = c.return;
                      if ((Ev(c), c === u)) {
                        I = null;
                        break;
                      }
                      if (d !== null) {
                        (d.return = p), (I = d);
                        break;
                      }
                      I = p;
                    }
                }
              }
              var S = i.alternate;
              if (S !== null) {
                var v = S.child;
                if (v !== null) {
                  S.child = null;
                  do {
                    var P = v.sibling;
                    (v.sibling = null), (v = P);
                  } while (v !== null);
                }
              }
              I = i;
            }
          }
          if (i.subtreeFlags & 2064 && s !== null) (s.return = i), (I = s);
          else
            e: for (; I !== null; ) {
              if (((i = I), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Fo(9, i, i.return);
                }
              var g = i.sibling;
              if (g !== null) {
                (g.return = i.return), (I = g);
                break e;
              }
              I = i.return;
            }
        }
        var h = e.current;
        for (I = h; I !== null; ) {
          s = I;
          var m = s.child;
          if (s.subtreeFlags & 2064 && m !== null) (m.return = s), (I = m);
          else
            e: for (s = h; I !== null; ) {
              if (((a = I), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Aa(9, a);
                  }
                } catch (E) {
                  me(a, a.return, E);
                }
              if (a === s) {
                I = null;
                break e;
              }
              var C = a.sibling;
              if (C !== null) {
                (C.return = a.return), (I = C);
                break e;
              }
              I = a.return;
            }
        }
        if (
          ((G = o), In(), Bt && typeof Bt.onPostCommitFiberRoot == "function")
        )
          try {
            Bt.onPostCommitFiberRoot(Ca, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (Q = n), (yt.transition = t);
    }
  }
  return !1;
}
function jp(e, t, n) {
  (t = Xr(n, t)),
    (t = mv(e, t, 1)),
    (e = Cn(e, t, 1)),
    (t = We()),
    e !== null && (wi(e, 1, t), qe(e, t));
}
function me(e, t, n) {
  if (e.tag === 3) jp(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        jp(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (Pn === null || !Pn.has(r)))
        ) {
          (e = Xr(n, e)),
            (e = gv(t, e, 1)),
            (t = Cn(t, e, 1)),
            (e = We()),
            t !== null && (wi(t, 1, e), qe(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function nk(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = We()),
    (e.pingedLanes |= e.suspendedLanes & n),
    _e === e &&
      (Oe & n) === n &&
      (ke === 4 || (ke === 3 && (Oe & 130023424) === Oe && 500 > ve() - xf)
        ? Xn(e, 0)
        : (wf |= n)),
    qe(e, t);
}
function Dv(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Gi), (Gi <<= 1), !(Gi & 130023424) && (Gi = 4194304))
      : (t = 1));
  var n = We();
  (e = sn(e, t)), e !== null && (wi(e, t, n), qe(e, n));
}
function rk(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Dv(e, n);
}
function ok(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        o = e.memoizedState;
      o !== null && (n = o.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(M(314));
  }
  r !== null && r.delete(t), Dv(e, n);
}
var Nv;
Nv = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Xe.current) Ye = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Ye = !1), Hx(e, t, n);
      Ye = !!(e.flags & 131072);
    }
  else (Ye = !1), ue && t.flags & 1048576 && Bg(t, Zs, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      ks(e, t), (e = t.pendingProps);
      var o = Gr(t, ze.current);
      jr(t, n), (o = hf(null, t, r, e, o, n));
      var i = mf();
      return (
        (t.flags |= 1),
        typeof o == "object" &&
        o !== null &&
        typeof o.render == "function" &&
        o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Qe(r) ? ((i = !0), Hs(t)) : (i = !1),
            (t.memoizedState =
              o.state !== null && o.state !== void 0 ? o.state : null),
            uf(t),
            (o.updater = Ra),
            (t.stateNode = o),
            (o._reactInternals = t),
            $u(t, r, e, n),
            (t = Hu(null, t, r, !0, i, n)))
          : ((t.tag = 0), ue && i && tf(t), Ue(null, t, o, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (ks(e, t),
          (e = t.pendingProps),
          (o = r._init),
          (r = o(r._payload)),
          (t.type = r),
          (o = t.tag = sk(r)),
          (e = Ct(r, e)),
          o)
        ) {
          case 0:
            t = Wu(null, t, r, e, n);
            break e;
          case 1:
            t = Rp(null, t, r, e, n);
            break e;
          case 11:
            t = bp(null, t, r, e, n);
            break e;
          case 14:
            t = _p(null, t, r, Ct(r.type, e), n);
            break e;
        }
        throw Error(M(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Ct(r, o)),
        Wu(e, t, r, o, n)
      );
    case 1:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Ct(r, o)),
        Rp(e, t, r, o, n)
      );
    case 3:
      e: {
        if ((wv(t), e === null)) throw Error(M(387));
        (r = t.pendingProps),
          (i = t.memoizedState),
          (o = i.element),
          Wg(e, t),
          Xs(t, r, null, n);
        var s = t.memoizedState;
        if (((r = s.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: s.cache,
              pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
              transitions: s.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            (o = Xr(Error(M(423)), t)), (t = Mp(e, t, r, n, o));
            break e;
          } else if (r !== o) {
            (o = Xr(Error(M(424)), t)), (t = Mp(e, t, r, n, o));
            break e;
          } else
            for (
              ot = kn(t.stateNode.containerInfo.firstChild),
                it = t,
                ue = !0,
                Tt = null,
                n = Kg(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Zr(), r === o)) {
            t = an(e, t, n);
            break e;
          }
          Ue(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Yg(t),
        e === null && ju(t),
        (r = t.type),
        (o = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (s = o.children),
        Fu(r, o) ? (s = null) : i !== null && Fu(r, i) && (t.flags |= 32),
        Sv(e, t),
        Ue(e, t, s, n),
        t.child
      );
    case 6:
      return e === null && ju(t), null;
    case 13:
      return xv(e, t, n);
    case 4:
      return (
        cf(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Kr(t, null, r, n)) : Ue(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Ct(r, o)),
        bp(e, t, r, o, n)
      );
    case 7:
      return Ue(e, t, t.pendingProps, n), t.child;
    case 8:
      return Ue(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Ue(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (o = t.pendingProps),
          (i = t.memoizedProps),
          (s = o.value),
          ne(Ks, r._currentValue),
          (r._currentValue = s),
          i !== null)
        )
          if (_t(i.value, s)) {
            if (i.children === o.children && !Xe.current) {
              t = an(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var a = i.dependencies;
              if (a !== null) {
                s = i.child;
                for (var l = a.firstContext; l !== null; ) {
                  if (l.context === r) {
                    if (i.tag === 1) {
                      (l = en(-1, n & -n)), (l.tag = 2);
                      var u = i.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var c = u.pending;
                        c === null
                          ? (l.next = l)
                          : ((l.next = c.next), (c.next = l)),
                          (u.pending = l);
                      }
                    }
                    (i.lanes |= n),
                      (l = i.alternate),
                      l !== null && (l.lanes |= n),
                      Bu(i.return, n, t),
                      (a.lanes |= n);
                    break;
                  }
                  l = l.next;
                }
              } else if (i.tag === 10) s = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((s = i.return), s === null)) throw Error(M(341));
                (s.lanes |= n),
                  (a = s.alternate),
                  a !== null && (a.lanes |= n),
                  Bu(s, n, t),
                  (s = i.sibling);
              } else s = i.child;
              if (s !== null) s.return = i;
              else
                for (s = i; s !== null; ) {
                  if (s === t) {
                    s = null;
                    break;
                  }
                  if (((i = s.sibling), i !== null)) {
                    (i.return = s.return), (s = i);
                    break;
                  }
                  s = s.return;
                }
              i = s;
            }
        Ue(e, t, o.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (o = t.type),
        (r = t.pendingProps.children),
        jr(t, n),
        (o = St(o)),
        (r = r(o)),
        (t.flags |= 1),
        Ue(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (o = Ct(r, t.pendingProps)),
        (o = Ct(r.type, o)),
        _p(e, t, r, o, n)
      );
    case 15:
      return vv(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Ct(r, o)),
        ks(e, t),
        (t.tag = 1),
        Qe(r) ? ((e = !0), Hs(t)) : (e = !1),
        jr(t, n),
        Gg(t, r, o),
        $u(t, r, o, n),
        Hu(null, t, r, !0, e, n)
      );
    case 19:
      return kv(e, t, n);
    case 22:
      return yv(e, t, n);
  }
  throw Error(M(156, t.tag));
};
function Vv(e, t) {
  return cg(e, t);
}
function ik(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function vt(e, t, n, r) {
  return new ik(e, t, n, r);
}
function Tf(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function sk(e) {
  if (typeof e == "function") return Tf(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Uc)) return 11;
    if (e === Wc) return 14;
  }
  return 2;
}
function En(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = vt(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Ts(e, t, n, r, o, i) {
  var s = 2;
  if (((r = e), typeof e == "function")) Tf(e) && (s = 1);
  else if (typeof e == "string") s = 5;
  else
    e: switch (e) {
      case wr:
        return Qn(n.children, o, i, t);
      case $c:
        (s = 8), (o |= 8);
        break;
      case du:
        return (
          (e = vt(12, n, t, o | 2)), (e.elementType = du), (e.lanes = i), e
        );
      case pu:
        return (e = vt(13, n, t, o)), (e.elementType = pu), (e.lanes = i), e;
      case hu:
        return (e = vt(19, n, t, o)), (e.elementType = hu), (e.lanes = i), e;
      case Zm:
        return La(n, o, i, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Hm:
              s = 10;
              break e;
            case Gm:
              s = 9;
              break e;
            case Uc:
              s = 11;
              break e;
            case Wc:
              s = 14;
              break e;
            case dn:
              (s = 16), (r = null);
              break e;
          }
        throw Error(M(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = vt(s, n, t, o)), (t.elementType = e), (t.type = r), (t.lanes = i), t
  );
}
function Qn(e, t, n, r) {
  return (e = vt(7, e, r, t)), (e.lanes = n), e;
}
function La(e, t, n, r) {
  return (
    (e = vt(22, e, r, t)),
    (e.elementType = Zm),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function jl(e, t, n) {
  return (e = vt(6, e, null, t)), (e.lanes = n), e;
}
function Bl(e, t, n) {
  return (
    (t = vt(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function ak(e, t, n, r, o) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = wl(0)),
    (this.expirationTimes = wl(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = wl(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null);
}
function Ef(e, t, n, r, o, i, s, a, l) {
  return (
    (e = new ak(e, t, n, a, l)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = vt(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    uf(i),
    e
  );
}
function lk(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Sr,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function jv(e) {
  if (!e) return Mn;
  e = e._reactInternals;
  e: {
    if (lr(e) !== e || e.tag !== 1) throw Error(M(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Qe(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(M(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Qe(n)) return Vg(e, n, t);
  }
  return t;
}
function Bv(e, t, n, r, o, i, s, a, l) {
  return (
    (e = Ef(n, r, !0, e, o, i, s, a, l)),
    (e.context = jv(null)),
    (n = e.current),
    (r = We()),
    (o = Tn(n)),
    (i = en(r, o)),
    (i.callback = t ?? null),
    Cn(n, i, o),
    (e.current.lanes = o),
    wi(e, o, r),
    qe(e, r),
    e
  );
}
function Fa(e, t, n, r) {
  var o = t.current,
    i = We(),
    s = Tn(o);
  return (
    (n = jv(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = en(i, s)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Cn(o, t, s)),
    e !== null && (bt(e, o, s, i), Ss(e, o, s)),
    s
  );
}
function oa(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Bp(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function bf(e, t) {
  Bp(e, t), (e = e.alternate) && Bp(e, t);
}
function uk() {
  return null;
}
var zv =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function _f(e) {
  this._internalRoot = e;
}
Ia.prototype.render = _f.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(M(409));
  Fa(e, t, null, null);
};
Ia.prototype.unmount = _f.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    ir(function () {
      Fa(null, e, null, null);
    }),
      (t[on] = null);
  }
};
function Ia(e) {
  this._internalRoot = e;
}
Ia.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = vg();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < mn.length && t !== 0 && t < mn[n].priority; n++);
    mn.splice(n, 0, e), n === 0 && Sg(e);
  }
};
function Rf(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Da(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function zp() {}
function ck(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var i = r;
      r = function () {
        var u = oa(s);
        i.call(u);
      };
    }
    var s = Bv(t, r, e, 0, null, !1, !1, "", zp);
    return (
      (e._reactRootContainer = s),
      (e[on] = s.current),
      Jo(e.nodeType === 8 ? e.parentNode : e),
      ir(),
      s
    );
  }
  for (; (o = e.lastChild); ) e.removeChild(o);
  if (typeof r == "function") {
    var a = r;
    r = function () {
      var u = oa(l);
      a.call(u);
    };
  }
  var l = Ef(e, 0, !1, null, null, !1, !1, "", zp);
  return (
    (e._reactRootContainer = l),
    (e[on] = l.current),
    Jo(e.nodeType === 8 ? e.parentNode : e),
    ir(function () {
      Fa(t, l, n, r);
    }),
    l
  );
}
function Na(e, t, n, r, o) {
  var i = n._reactRootContainer;
  if (i) {
    var s = i;
    if (typeof o == "function") {
      var a = o;
      o = function () {
        var l = oa(s);
        a.call(l);
      };
    }
    Fa(t, s, e, o);
  } else s = ck(n, t, e, o, r);
  return oa(s);
}
mg = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = To(t.pendingLanes);
        n !== 0 &&
          (Zc(t, n | 1), qe(t, ve()), !(G & 6) && ((Qr = ve() + 500), In()));
      }
      break;
    case 13:
      ir(function () {
        var r = sn(e, 1);
        if (r !== null) {
          var o = We();
          bt(r, e, 1, o);
        }
      }),
        bf(e, 1);
  }
};
Kc = function (e) {
  if (e.tag === 13) {
    var t = sn(e, 134217728);
    if (t !== null) {
      var n = We();
      bt(t, e, 134217728, n);
    }
    bf(e, 134217728);
  }
};
gg = function (e) {
  if (e.tag === 13) {
    var t = Tn(e),
      n = sn(e, t);
    if (n !== null) {
      var r = We();
      bt(n, e, t, r);
    }
    bf(e, t);
  }
};
vg = function () {
  return Q;
};
yg = function (e, t) {
  var n = Q;
  try {
    return (Q = e), t();
  } finally {
    Q = n;
  }
};
Pu = function (e, t, n) {
  switch (t) {
    case "input":
      if ((vu(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = ba(r);
            if (!o) throw Error(M(90));
            Ym(r), vu(r, o);
          }
        }
      }
      break;
    case "textarea":
      Qm(e, n);
      break;
    case "select":
      (t = n.value), t != null && Ir(e, !!n.multiple, t, !1);
  }
};
og = kf;
ig = ir;
var fk = { usingClientEntryPoint: !1, Events: [ki, Pr, ba, ng, rg, kf] },
  yo = {
    findFiberByHostInstance: Hn,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  dk = {
    bundleType: yo.bundleType,
    version: yo.version,
    rendererPackageName: yo.rendererPackageName,
    rendererConfig: yo.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: ln.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = lg(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: yo.findFiberByHostInstance || uk,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var rs = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!rs.isDisabled && rs.supportsFiber)
    try {
      (Ca = rs.inject(dk)), (Bt = rs);
    } catch {}
}
ut.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = fk;
ut.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Rf(t)) throw Error(M(200));
  return lk(e, t, null, n);
};
ut.createRoot = function (e, t) {
  if (!Rf(e)) throw Error(M(299));
  var n = !1,
    r = "",
    o = zv;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = Ef(e, 1, !1, null, null, n, !1, r, o)),
    (e[on] = t.current),
    Jo(e.nodeType === 8 ? e.parentNode : e),
    new _f(t)
  );
};
ut.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(M(188))
      : ((e = Object.keys(e).join(",")), Error(M(268, e)));
  return (e = lg(t)), (e = e === null ? null : e.stateNode), e;
};
ut.flushSync = function (e) {
  return ir(e);
};
ut.hydrate = function (e, t, n) {
  if (!Da(t)) throw Error(M(200));
  return Na(null, e, t, !0, n);
};
ut.hydrateRoot = function (e, t, n) {
  if (!Rf(e)) throw Error(M(405));
  var r = (n != null && n.hydratedSources) || null,
    o = !1,
    i = "",
    s = zv;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (o = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
    (t = Bv(t, null, e, 1, n ?? null, o, !1, i, s)),
    (e[on] = t.current),
    Jo(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (o = n._getVersion),
        (o = o(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, o])
          : t.mutableSourceEagerHydrationData.push(n, o);
  return new Ia(t);
};
ut.render = function (e, t, n) {
  if (!Da(t)) throw Error(M(200));
  return Na(null, e, t, !1, n);
};
ut.unmountComponentAtNode = function (e) {
  if (!Da(e)) throw Error(M(40));
  return e._reactRootContainer
    ? (ir(function () {
        Na(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[on] = null);
        });
      }),
      !0)
    : !1;
};
ut.unstable_batchedUpdates = kf;
ut.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Da(n)) throw Error(M(200));
  if (e == null || e._reactInternals === void 0) throw Error(M(38));
  return Na(e, t, n, !1, r);
};
ut.version = "18.2.0-next-9e3b772b8-20220608";
(function (e) {
  function t() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t);
      } catch (n) {
        console.error(n);
      }
  }
  t(), (e.exports = ut);
})(uw);
var $p = Wo;
(Fs.createRoot = $p.createRoot), (Fs.hydrateRoot = $p.hydrateRoot);
function rc() {
  return A.jsx("div", { className: "_divisor" });
}
const pk = {
  IMEALVORADARS: {
    local: "https://emanuelalvorada.com.br/",
    alt: "IME - Alvorada/RS",
    title: "IME - Alvorada/RS",
  },
  GCS: {
    local: "https://gc.iemanuel.com.br/",
    alt: "Grupos Caseiros",
    title: "GC'S",
  },
};
function hk() {
  return A.jsxs("section", {
    className: "_sob",
    children: [
      A.jsx("nav", {
        children: Object.entries(pk).map(([e, t]) =>
          A.jsx(A.Fragment, {
            children: A.jsx(
              "a",
              {
                href: t.local,
                title: t.alt,
                target: "_blank",
                rel: "noopener noreferrer",
                children: t.title,
              },
              e
            ),
          })
        ),
      }),
      A.jsx("a", {
        href: "https://iemanuel.com.br/deus_conosco",
        target: "_blank",
        rel: "noopener noreferrer",
        children: "Deus Conosco!",
      }),
    ],
  });
}
function mk(e) {
  if (e.sheet) return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t];
}
function gk(e) {
  var t = document.createElement("style");
  return (
    t.setAttribute("data-emotion", e.key),
    e.nonce !== void 0 && t.setAttribute("nonce", e.nonce),
    t.appendChild(document.createTextNode("")),
    t.setAttribute("data-s", ""),
    t
  );
}
var vk = (function () {
    function e(n) {
      var r = this;
      (this._insertTag = function (o) {
        var i;
        r.tags.length === 0
          ? r.insertionPoint
            ? (i = r.insertionPoint.nextSibling)
            : r.prepend
            ? (i = r.container.firstChild)
            : (i = r.before)
          : (i = r.tags[r.tags.length - 1].nextSibling),
          r.container.insertBefore(o, i),
          r.tags.push(o);
      }),
        (this.isSpeedy = n.speedy === void 0 ? !0 : n.speedy),
        (this.tags = []),
        (this.ctr = 0),
        (this.nonce = n.nonce),
        (this.key = n.key),
        (this.container = n.container),
        (this.prepend = n.prepend),
        (this.insertionPoint = n.insertionPoint),
        (this.before = null);
    }
    var t = e.prototype;
    return (
      (t.hydrate = function (r) {
        r.forEach(this._insertTag);
      }),
      (t.insert = function (r) {
        this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 &&
          this._insertTag(gk(this));
        var o = this.tags[this.tags.length - 1];
        if (this.isSpeedy) {
          var i = mk(o);
          try {
            i.insertRule(r, i.cssRules.length);
          } catch {}
        } else o.appendChild(document.createTextNode(r));
        this.ctr++;
      }),
      (t.flush = function () {
        this.tags.forEach(function (r) {
          return r.parentNode && r.parentNode.removeChild(r);
        }),
          (this.tags = []),
          (this.ctr = 0);
      }),
      e
    );
  })(),
  Ve = "-ms-",
  ia = "-moz-",
  Y = "-webkit-",
  $v = "comm",
  Mf = "rule",
  Af = "decl",
  yk = "@import",
  Uv = "@keyframes",
  Sk = Math.abs,
  Va = String.fromCharCode,
  wk = Object.assign;
function xk(e, t) {
  return Ae(e, 0) ^ 45
    ? (((((((t << 2) ^ Ae(e, 0)) << 2) ^ Ae(e, 1)) << 2) ^ Ae(e, 2)) << 2) ^
        Ae(e, 3)
    : 0;
}
function Wv(e) {
  return e.trim();
}
function kk(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function X(e, t, n) {
  return e.replace(t, n);
}
function oc(e, t) {
  return e.indexOf(t);
}
function Ae(e, t) {
  return e.charCodeAt(t) | 0;
}
function li(e, t, n) {
  return e.slice(t, n);
}
function Dt(e) {
  return e.length;
}
function Of(e) {
  return e.length;
}
function os(e, t) {
  return t.push(e), e;
}
function Ck(e, t) {
  return e.map(t).join("");
}
var ja = 1,
  qr = 1,
  Hv = 0,
  Je = 0,
  Se = 0,
  io = "";
function Ba(e, t, n, r, o, i, s) {
  return {
    value: e,
    root: t,
    parent: n,
    type: r,
    props: o,
    children: i,
    line: ja,
    column: qr,
    length: s,
    return: "",
  };
}
function So(e, t) {
  return wk(Ba("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function Pk() {
  return Se;
}
function Tk() {
  return (
    (Se = Je > 0 ? Ae(io, --Je) : 0), qr--, Se === 10 && ((qr = 1), ja--), Se
  );
}
function st() {
  return (
    (Se = Je < Hv ? Ae(io, Je++) : 0), qr++, Se === 10 && ((qr = 1), ja++), Se
  );
}
function $t() {
  return Ae(io, Je);
}
function Es() {
  return Je;
}
function Pi(e, t) {
  return li(io, e, t);
}
function ui(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function Gv(e) {
  return (ja = qr = 1), (Hv = Dt((io = e))), (Je = 0), [];
}
function Zv(e) {
  return (io = ""), e;
}
function bs(e) {
  return Wv(Pi(Je - 1, ic(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Ek(e) {
  for (; (Se = $t()) && Se < 33; ) st();
  return ui(e) > 2 || ui(Se) > 3 ? "" : " ";
}
function bk(e, t) {
  for (
    ;
    --t &&
    st() &&
    !(Se < 48 || Se > 102 || (Se > 57 && Se < 65) || (Se > 70 && Se < 97));

  );
  return Pi(e, Es() + (t < 6 && $t() == 32 && st() == 32));
}
function ic(e) {
  for (; st(); )
    switch (Se) {
      case e:
        return Je;
      case 34:
      case 39:
        e !== 34 && e !== 39 && ic(Se);
        break;
      case 40:
        e === 41 && ic(e);
        break;
      case 92:
        st();
        break;
    }
  return Je;
}
function _k(e, t) {
  for (; st() && e + Se !== 47 + 10; )
    if (e + Se === 42 + 42 && $t() === 47) break;
  return "/*" + Pi(t, Je - 1) + "*" + Va(e === 47 ? e : st());
}
function Rk(e) {
  for (; !ui($t()); ) st();
  return Pi(e, Je);
}
function Mk(e) {
  return Zv(_s("", null, null, null, [""], (e = Gv(e)), 0, [0], e));
}
function _s(e, t, n, r, o, i, s, a, l) {
  for (
    var u = 0,
      c = 0,
      f = s,
      d = 0,
      p = 0,
      S = 0,
      v = 1,
      P = 1,
      g = 1,
      h = 0,
      m = "",
      C = o,
      E = i,
      R = r,
      b = m;
    P;

  )
    switch (((S = h), (h = st()))) {
      case 40:
        if (S != 108 && Ae(b, f - 1) == 58) {
          oc((b += X(bs(h), "&", "&\f")), "&\f") != -1 && (g = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        b += bs(h);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        b += Ek(S);
        break;
      case 92:
        b += bk(Es() - 1, 7);
        continue;
      case 47:
        switch ($t()) {
          case 42:
          case 47:
            os(Ak(_k(st(), Es()), t, n), l);
            break;
          default:
            b += "/";
        }
        break;
      case 123 * v:
        a[u++] = Dt(b) * g;
      case 125 * v:
      case 59:
      case 0:
        switch (h) {
          case 0:
          case 125:
            P = 0;
          case 59 + c:
            p > 0 &&
              Dt(b) - f &&
              os(
                p > 32
                  ? Wp(b + ";", r, n, f - 1)
                  : Wp(X(b, " ", "") + ";", r, n, f - 2),
                l
              );
            break;
          case 59:
            b += ";";
          default:
            if (
              (os((R = Up(b, t, n, u, c, o, a, m, (C = []), (E = []), f)), i),
              h === 123)
            )
              if (c === 0) _s(b, t, R, R, C, i, f, a, E);
              else
                switch (d === 99 && Ae(b, 3) === 110 ? 100 : d) {
                  case 100:
                  case 109:
                  case 115:
                    _s(
                      e,
                      R,
                      R,
                      r && os(Up(e, R, R, 0, 0, o, a, m, o, (C = []), f), E),
                      o,
                      E,
                      f,
                      a,
                      r ? C : E
                    );
                    break;
                  default:
                    _s(b, R, R, R, [""], E, 0, a, E);
                }
        }
        (u = c = p = 0), (v = g = 1), (m = b = ""), (f = s);
        break;
      case 58:
        (f = 1 + Dt(b)), (p = S);
      default:
        if (v < 1) {
          if (h == 123) --v;
          else if (h == 125 && v++ == 0 && Tk() == 125) continue;
        }
        switch (((b += Va(h)), h * v)) {
          case 38:
            g = c > 0 ? 1 : ((b += "\f"), -1);
            break;
          case 44:
            (a[u++] = (Dt(b) - 1) * g), (g = 1);
            break;
          case 64:
            $t() === 45 && (b += bs(st())),
              (d = $t()),
              (c = f = Dt((m = b += Rk(Es())))),
              h++;
            break;
          case 45:
            S === 45 && Dt(b) == 2 && (v = 0);
        }
    }
  return i;
}
function Up(e, t, n, r, o, i, s, a, l, u, c) {
  for (
    var f = o - 1, d = o === 0 ? i : [""], p = Of(d), S = 0, v = 0, P = 0;
    S < r;
    ++S
  )
    for (var g = 0, h = li(e, f + 1, (f = Sk((v = s[S])))), m = e; g < p; ++g)
      (m = Wv(v > 0 ? d[g] + " " + h : X(h, /&\f/g, d[g]))) && (l[P++] = m);
  return Ba(e, t, n, o === 0 ? Mf : a, l, u, c);
}
function Ak(e, t, n) {
  return Ba(e, t, n, $v, Va(Pk()), li(e, 2, -2), 0);
}
function Wp(e, t, n, r) {
  return Ba(e, t, n, Af, li(e, 0, r), li(e, r + 1, -1), r);
}
function zr(e, t) {
  for (var n = "", r = Of(e), o = 0; o < r; o++) n += t(e[o], o, e, t) || "";
  return n;
}
function Ok(e, t, n, r) {
  switch (e.type) {
    case yk:
    case Af:
      return (e.return = e.return || e.value);
    case $v:
      return "";
    case Uv:
      return (e.return = e.value + "{" + zr(e.children, r) + "}");
    case Mf:
      e.value = e.props.join(",");
  }
  return Dt((n = zr(e.children, r)))
    ? (e.return = e.value + "{" + n + "}")
    : "";
}
function Lk(e) {
  var t = Of(e);
  return function (n, r, o, i) {
    for (var s = "", a = 0; a < t; a++) s += e[a](n, r, o, i) || "";
    return s;
  };
}
function Fk(e) {
  return function (t) {
    t.root || ((t = t.return) && e(t));
  };
}
function Kv(e) {
  var t = Object.create(null);
  return function (n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var Ik = function (t, n, r) {
    for (
      var o = 0, i = 0;
      (o = i), (i = $t()), o === 38 && i === 12 && (n[r] = 1), !ui(i);

    )
      st();
    return Pi(t, Je);
  },
  Dk = function (t, n) {
    var r = -1,
      o = 44;
    do
      switch (ui(o)) {
        case 0:
          o === 38 && $t() === 12 && (n[r] = 1), (t[r] += Ik(Je - 1, n, r));
          break;
        case 2:
          t[r] += bs(o);
          break;
        case 4:
          if (o === 44) {
            (t[++r] = $t() === 58 ? "&\f" : ""), (n[r] = t[r].length);
            break;
          }
        default:
          t[r] += Va(o);
      }
    while ((o = st()));
    return t;
  },
  Nk = function (t, n) {
    return Zv(Dk(Gv(t), n));
  },
  Hp = new WeakMap(),
  Vk = function (t) {
    if (!(t.type !== "rule" || !t.parent || t.length < 1)) {
      for (
        var n = t.value,
          r = t.parent,
          o = t.column === r.column && t.line === r.line;
        r.type !== "rule";

      )
        if (((r = r.parent), !r)) return;
      if (
        !(t.props.length === 1 && n.charCodeAt(0) !== 58 && !Hp.get(r)) &&
        !o
      ) {
        Hp.set(t, !0);
        for (
          var i = [], s = Nk(n, i), a = r.props, l = 0, u = 0;
          l < s.length;
          l++
        )
          for (var c = 0; c < a.length; c++, u++)
            t.props[u] = i[l] ? s[l].replace(/&\f/g, a[c]) : a[c] + " " + s[l];
      }
    }
  },
  jk = function (t) {
    if (t.type === "decl") {
      var n = t.value;
      n.charCodeAt(0) === 108 &&
        n.charCodeAt(2) === 98 &&
        ((t.return = ""), (t.value = ""));
    }
  };
function Yv(e, t) {
  switch (xk(e, t)) {
    case 5103:
      return Y + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return Y + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return Y + e + ia + e + Ve + e + e;
    case 6828:
    case 4268:
      return Y + e + Ve + e + e;
    case 6165:
      return Y + e + Ve + "flex-" + e + e;
    case 5187:
      return (
        Y + e + X(e, /(\w+).+(:[^]+)/, Y + "box-$1$2" + Ve + "flex-$1$2") + e
      );
    case 5443:
      return Y + e + Ve + "flex-item-" + X(e, /flex-|-self/, "") + e;
    case 4675:
      return (
        Y +
        e +
        Ve +
        "flex-line-pack" +
        X(e, /align-content|flex-|-self/, "") +
        e
      );
    case 5548:
      return Y + e + Ve + X(e, "shrink", "negative") + e;
    case 5292:
      return Y + e + Ve + X(e, "basis", "preferred-size") + e;
    case 6060:
      return (
        Y +
        "box-" +
        X(e, "-grow", "") +
        Y +
        e +
        Ve +
        X(e, "grow", "positive") +
        e
      );
    case 4554:
      return Y + X(e, /([^-])(transform)/g, "$1" + Y + "$2") + e;
    case 6187:
      return (
        X(X(X(e, /(zoom-|grab)/, Y + "$1"), /(image-set)/, Y + "$1"), e, "") + e
      );
    case 5495:
    case 3959:
      return X(e, /(image-set\([^]*)/, Y + "$1$`$1");
    case 4968:
      return (
        X(
          X(e, /(.+:)(flex-)?(.*)/, Y + "box-pack:$3" + Ve + "flex-pack:$3"),
          /s.+-b[^;]+/,
          "justify"
        ) +
        Y +
        e +
        e
      );
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return X(e, /(.+)-inline(.+)/, Y + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (Dt(e) - 1 - t > 6)
        switch (Ae(e, t + 1)) {
          case 109:
            if (Ae(e, t + 4) !== 45) break;
          case 102:
            return (
              X(
                e,
                /(.+:)(.+)-([^]+)/,
                "$1" +
                  Y +
                  "$2-$3$1" +
                  ia +
                  (Ae(e, t + 3) == 108 ? "$3" : "$2-$3")
              ) + e
            );
          case 115:
            return ~oc(e, "stretch")
              ? Yv(X(e, "stretch", "fill-available"), t) + e
              : e;
        }
      break;
    case 4949:
      if (Ae(e, t + 1) !== 115) break;
    case 6444:
      switch (Ae(e, Dt(e) - 3 - (~oc(e, "!important") && 10))) {
        case 107:
          return X(e, ":", ":" + Y) + e;
        case 101:
          return (
            X(
              e,
              /(.+:)([^;!]+)(;|!.+)?/,
              "$1" +
                Y +
                (Ae(e, 14) === 45 ? "inline-" : "") +
                "box$3$1" +
                Y +
                "$2$3$1" +
                Ve +
                "$2box$3"
            ) + e
          );
      }
      break;
    case 5936:
      switch (Ae(e, t + 11)) {
        case 114:
          return Y + e + Ve + X(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return Y + e + Ve + X(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return Y + e + Ve + X(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return Y + e + Ve + e + e;
  }
  return e;
}
var Bk = function (t, n, r, o) {
    if (t.length > -1 && !t.return)
      switch (t.type) {
        case Af:
          t.return = Yv(t.value, t.length);
          break;
        case Uv:
          return zr([So(t, { value: X(t.value, "@", "@" + Y) })], o);
        case Mf:
          if (t.length)
            return Ck(t.props, function (i) {
              switch (kk(i, /(::plac\w+|:read-\w+)/)) {
                case ":read-only":
                case ":read-write":
                  return zr(
                    [So(t, { props: [X(i, /:(read-\w+)/, ":" + ia + "$1")] })],
                    o
                  );
                case "::placeholder":
                  return zr(
                    [
                      So(t, {
                        props: [X(i, /:(plac\w+)/, ":" + Y + "input-$1")],
                      }),
                      So(t, { props: [X(i, /:(plac\w+)/, ":" + ia + "$1")] }),
                      So(t, { props: [X(i, /:(plac\w+)/, Ve + "input-$1")] }),
                    ],
                    o
                  );
              }
              return "";
            });
      }
  },
  zk = [Bk],
  $k = function (t) {
    var n = t.key;
    if (n === "css") {
      var r = document.querySelectorAll("style[data-emotion]:not([data-s])");
      Array.prototype.forEach.call(r, function (v) {
        var P = v.getAttribute("data-emotion");
        P.indexOf(" ") !== -1 &&
          (document.head.appendChild(v), v.setAttribute("data-s", ""));
      });
    }
    var o = t.stylisPlugins || zk,
      i = {},
      s,
      a = [];
    (s = t.container || document.head),
      Array.prototype.forEach.call(
        document.querySelectorAll('style[data-emotion^="' + n + ' "]'),
        function (v) {
          for (
            var P = v.getAttribute("data-emotion").split(" "), g = 1;
            g < P.length;
            g++
          )
            i[P[g]] = !0;
          a.push(v);
        }
      );
    var l,
      u = [Vk, jk];
    {
      var c,
        f = [
          Ok,
          Fk(function (v) {
            c.insert(v);
          }),
        ],
        d = Lk(u.concat(o, f)),
        p = function (P) {
          return zr(Mk(P), d);
        };
      l = function (P, g, h, m) {
        (c = h),
          p(P ? P + "{" + g.styles + "}" : g.styles),
          m && (S.inserted[g.name] = !0);
      };
    }
    var S = {
      key: n,
      sheet: new vk({
        key: n,
        container: s,
        nonce: t.nonce,
        speedy: t.speedy,
        prepend: t.prepend,
        insertionPoint: t.insertionPoint,
      }),
      nonce: t.nonce,
      inserted: i,
      registered: {},
      insert: l,
    };
    return S.sheet.hydrate(a), S;
  };
function Jr() {
  return (
    (Jr = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Jr.apply(this, arguments)
  );
}
var Uk = !0;
function Wk(e, t, n) {
  var r = "";
  return (
    n.split(" ").forEach(function (o) {
      e[o] !== void 0 ? t.push(e[o] + ";") : (r += o + " ");
    }),
    r
  );
}
var Xv = function (t, n, r) {
    var o = t.key + "-" + n.name;
    (r === !1 || Uk === !1) &&
      t.registered[o] === void 0 &&
      (t.registered[o] = n.styles);
  },
  Hk = function (t, n, r) {
    Xv(t, n, r);
    var o = t.key + "-" + n.name;
    if (t.inserted[n.name] === void 0) {
      var i = n;
      do t.insert(n === i ? "." + o : "", i, t.sheet, !0), (i = i.next);
      while (i !== void 0);
    }
  };
function Gk(e) {
  for (var t = 0, n, r = 0, o = e.length; o >= 4; ++r, o -= 4)
    (n =
      (e.charCodeAt(r) & 255) |
      ((e.charCodeAt(++r) & 255) << 8) |
      ((e.charCodeAt(++r) & 255) << 16) |
      ((e.charCodeAt(++r) & 255) << 24)),
      (n = (n & 65535) * 1540483477 + (((n >>> 16) * 59797) << 16)),
      (n ^= n >>> 24),
      (t =
        ((n & 65535) * 1540483477 + (((n >>> 16) * 59797) << 16)) ^
        ((t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)));
  switch (o) {
    case 3:
      t ^= (e.charCodeAt(r + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(r + 1) & 255) << 8;
    case 1:
      (t ^= e.charCodeAt(r) & 255),
        (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16));
  }
  return (
    (t ^= t >>> 13),
    (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)),
    ((t ^ (t >>> 15)) >>> 0).toString(36)
  );
}
var Zk = {
    animationIterationCount: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1,
  },
  Kk = /[A-Z]|^ms/g,
  Yk = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
  Qv = function (t) {
    return t.charCodeAt(1) === 45;
  },
  Gp = function (t) {
    return t != null && typeof t != "boolean";
  },
  zl = Kv(function (e) {
    return Qv(e) ? e : e.replace(Kk, "-$&").toLowerCase();
  }),
  Zp = function (t, n) {
    switch (t) {
      case "animation":
      case "animationName":
        if (typeof n == "string")
          return n.replace(Yk, function (r, o, i) {
            return (Nt = { name: o, styles: i, next: Nt }), o;
          });
    }
    return Zk[t] !== 1 && !Qv(t) && typeof n == "number" && n !== 0
      ? n + "px"
      : n;
  };
function ci(e, t, n) {
  if (n == null) return "";
  if (n.__emotion_styles !== void 0) return n;
  switch (typeof n) {
    case "boolean":
      return "";
    case "object": {
      if (n.anim === 1)
        return (Nt = { name: n.name, styles: n.styles, next: Nt }), n.name;
      if (n.styles !== void 0) {
        var r = n.next;
        if (r !== void 0)
          for (; r !== void 0; )
            (Nt = { name: r.name, styles: r.styles, next: Nt }), (r = r.next);
        var o = n.styles + ";";
        return o;
      }
      return Xk(e, t, n);
    }
    case "function": {
      if (e !== void 0) {
        var i = Nt,
          s = n(e);
        return (Nt = i), ci(e, t, s);
      }
      break;
    }
  }
  if (t == null) return n;
  var a = t[n];
  return a !== void 0 ? a : n;
}
function Xk(e, t, n) {
  var r = "";
  if (Array.isArray(n))
    for (var o = 0; o < n.length; o++) r += ci(e, t, n[o]) + ";";
  else
    for (var i in n) {
      var s = n[i];
      if (typeof s != "object")
        t != null && t[s] !== void 0
          ? (r += i + "{" + t[s] + "}")
          : Gp(s) && (r += zl(i) + ":" + Zp(i, s) + ";");
      else if (
        Array.isArray(s) &&
        typeof s[0] == "string" &&
        (t == null || t[s[0]] === void 0)
      )
        for (var a = 0; a < s.length; a++)
          Gp(s[a]) && (r += zl(i) + ":" + Zp(i, s[a]) + ";");
      else {
        var l = ci(e, t, s);
        switch (i) {
          case "animation":
          case "animationName": {
            r += zl(i) + ":" + l + ";";
            break;
          }
          default:
            r += i + "{" + l + "}";
        }
      }
    }
  return r;
}
var Kp = /label:\s*([^\s;\n{]+)\s*(;|$)/g,
  Nt,
  Qk = function (t, n, r) {
    if (
      t.length === 1 &&
      typeof t[0] == "object" &&
      t[0] !== null &&
      t[0].styles !== void 0
    )
      return t[0];
    var o = !0,
      i = "";
    Nt = void 0;
    var s = t[0];
    s == null || s.raw === void 0
      ? ((o = !1), (i += ci(r, n, s)))
      : (i += s[0]);
    for (var a = 1; a < t.length; a++) (i += ci(r, n, t[a])), o && (i += s[a]);
    Kp.lastIndex = 0;
    for (var l = "", u; (u = Kp.exec(i)) !== null; ) l += "-" + u[1];
    var c = Gk(i) + l;
    return { name: c, styles: i, next: Nt };
  },
  qk = function (t) {
    return t();
  },
  Jk = Dd["useInsertionEffect"] ? Dd["useInsertionEffect"] : !1,
  eC = Jk || qk,
  qv = w.createContext(typeof HTMLElement < "u" ? $k({ key: "css" }) : null);
qv.Provider;
var tC = function (t) {
    return w.forwardRef(function (n, r) {
      var o = w.useContext(qv);
      return t(n, o, r);
    });
  },
  Jv = w.createContext({});
function nC(e, t) {
  return `${e} returned \`undefined\`. Seems you forgot to wrap component within ${t}`;
}
function za(e = {}) {
  const {
      name: t,
      strict: n = !0,
      hookName: r = "useContext",
      providerName: o = "Provider",
      errorMessage: i,
      defaultValue: s,
    } = e,
    a = w.createContext(s);
  a.displayName = t;
  function l() {
    var u;
    const c = w.useContext(a);
    if (!c && n) {
      const f = new Error(i ?? nC(r, o));
      throw (
        ((f.name = "ContextError"),
        (u = Error.captureStackTrace) == null || u.call(Error, f, l),
        f)
      );
    }
    return c;
  }
  return [a.Provider, l, a];
}
var [YM, rC] = za({ strict: !1, name: "PortalManagerContext" }),
  sc =
    globalThis != null && globalThis.document ? w.useLayoutEffect : w.useEffect,
  [e0, oC] = za({ strict: !1, name: "PortalContext" }),
  Lf = "chakra-portal",
  iC = ".chakra-portal",
  sC = (e) =>
    A.jsx("div", {
      className: "chakra-portal-zIndex",
      style: {
        position: "absolute",
        zIndex: e.zIndex,
        top: 0,
        left: 0,
        right: 0,
      },
      children: e.children,
    }),
  aC = (e) => {
    const { appendToParentPortal: t, children: n } = e,
      [r, o] = w.useState(null),
      i = w.useRef(null),
      [, s] = w.useState({});
    w.useEffect(() => s({}), []);
    const a = oC(),
      l = rC();
    sc(() => {
      if (!r) return;
      const c = r.ownerDocument,
        f = t ? a ?? c.body : c.body;
      if (!f) return;
      (i.current = c.createElement("div")),
        (i.current.className = Lf),
        f.appendChild(i.current),
        s({});
      const d = i.current;
      return () => {
        f.contains(d) && f.removeChild(d);
      };
    }, [r]);
    const u =
      l != null && l.zIndex
        ? A.jsx(sC, { zIndex: l == null ? void 0 : l.zIndex, children: n })
        : n;
    return i.current
      ? Wo.createPortal(A.jsx(e0, { value: i.current, children: u }), i.current)
      : A.jsx("span", {
          ref: (c) => {
            c && o(c);
          },
        });
  },
  lC = (e) => {
    const { children: t, containerRef: n, appendToParentPortal: r } = e,
      o = n.current,
      i = o ?? (typeof window < "u" ? document.body : void 0),
      s = w.useMemo(() => {
        const l = o == null ? void 0 : o.ownerDocument.createElement("div");
        return l && (l.className = Lf), l;
      }, [o]),
      [, a] = w.useState({});
    return (
      sc(() => a({}), []),
      sc(() => {
        if (!(!s || !i))
          return (
            i.appendChild(s),
            () => {
              i.removeChild(s);
            }
          );
      }, [s, i]),
      i && s
        ? Wo.createPortal(A.jsx(e0, { value: r ? s : null, children: t }), s)
        : null
    );
  };
function $a(e) {
  const t = { appendToParentPortal: !0, ...e },
    { containerRef: n, ...r } = t;
  return n ? A.jsx(lC, { containerRef: n, ...r }) : A.jsx(aC, { ...r });
}
$a.className = Lf;
$a.selector = iC;
$a.displayName = "Portal";
function uC() {
  const e = w.useContext(Jv);
  if (!e)
    throw Error(
      "useTheme: `theme` is undefined. Seems you forgot to wrap your app in `<ChakraProvider />` or `<ThemeProvider />`"
    );
  return e;
}
var t0 = w.createContext({});
t0.displayName = "ColorModeContext";
function n0() {
  const e = w.useContext(t0);
  if (e === void 0)
    throw new Error("useColorMode must be used within a ColorModeProvider");
  return e;
}
function cC() {
  const e = n0(),
    t = uC();
  return { ...e, theme: t };
}
var ur = (...e) => e.filter(Boolean).join(" ");
function qn(e) {
  const t = typeof e;
  return e != null && (t === "object" || t === "function") && !Array.isArray(e);
}
function Kn(e, ...t) {
  return fC(e) ? e(...t) : e;
}
var fC = (e) => typeof e == "function";
function is(...e) {
  return function (n) {
    e.some((r) => (r == null || r(n), n == null ? void 0 : n.defaultPrevented));
  };
}
var sa = {},
  dC = {
    get exports() {
      return sa;
    },
    set exports(e) {
      sa = e;
    },
  };
(function (e, t) {
  var n = 200,
    r = "__lodash_hash_undefined__",
    o = 800,
    i = 16,
    s = 9007199254740991,
    a = "[object Arguments]",
    l = "[object Array]",
    u = "[object AsyncFunction]",
    c = "[object Boolean]",
    f = "[object Date]",
    d = "[object Error]",
    p = "[object Function]",
    S = "[object GeneratorFunction]",
    v = "[object Map]",
    P = "[object Number]",
    g = "[object Null]",
    h = "[object Object]",
    m = "[object Proxy]",
    C = "[object RegExp]",
    E = "[object Set]",
    R = "[object String]",
    b = "[object Undefined]",
    _ = "[object WeakMap]",
    D = "[object ArrayBuffer]",
    N = "[object DataView]",
    q = "[object Float32Array]",
    Ce = "[object Float64Array]",
    Pe = "[object Int8Array]",
    J = "[object Int16Array]",
    re = "[object Int32Array]",
    Fe = "[object Uint8Array]",
    Ze = "[object Uint8ClampedArray]",
    O = "[object Uint16Array]",
    j = "[object Uint32Array]",
    z = /[\\^$.*+?()[\]{}|]/g,
    B = /^\[object .+?Constructor\]$/,
    ee = /^(?:0|[1-9]\d*)$/,
    U = {};
  (U[q] = U[Ce] = U[Pe] = U[J] = U[re] = U[Fe] = U[Ze] = U[O] = U[j] = !0),
    (U[a] =
      U[l] =
      U[D] =
      U[c] =
      U[N] =
      U[f] =
      U[d] =
      U[p] =
      U[v] =
      U[P] =
      U[h] =
      U[C] =
      U[E] =
      U[R] =
      U[_] =
        !1);
  var Ie = typeof Bi == "object" && Bi && Bi.Object === Object && Bi,
    Rt = typeof self == "object" && self && self.Object === Object && self,
    ge = Ie || Rt || Function("return this")(),
    Te = t && !t.nodeType && t,
    tt = Te && !0 && e && !e.nodeType && e,
    Mt = tt && tt.exports === Te,
    xt = Mt && Ie.process,
    At = (function () {
      try {
        var y = tt && tt.require && tt.require("util").types;
        return y || (xt && xt.binding && xt.binding("util"));
      } catch {}
    })(),
    so = At && At.isTypedArray;
  function Ai(y, x, T) {
    switch (T.length) {
      case 0:
        return y.call(x);
      case 1:
        return y.call(x, T[0]);
      case 2:
        return y.call(x, T[0], T[1]);
      case 3:
        return y.call(x, T[0], T[1], T[2]);
    }
    return y.apply(x, T);
  }
  function E1(y, x) {
    for (var T = -1, F = Array(y); ++T < y; ) F[T] = x(T);
    return F;
  }
  function b1(y) {
    return function (x) {
      return y(x);
    };
  }
  function _1(y, x) {
    return y == null ? void 0 : y[x];
  }
  function R1(y, x) {
    return function (T) {
      return y(x(T));
    };
  }
  var M1 = Array.prototype,
    A1 = Function.prototype,
    Oi = Object.prototype,
    ol = ge["__core-js_shared__"],
    Li = A1.toString,
    Ht = Oi.hasOwnProperty,
    hd = (function () {
      var y = /[^.]+$/.exec((ol && ol.keys && ol.keys.IE_PROTO) || "");
      return y ? "Symbol(src)_1." + y : "";
    })(),
    md = Oi.toString,
    O1 = Li.call(Object),
    L1 = RegExp(
      "^" +
        Li.call(Ht)
          .replace(z, "\\$&")
          .replace(
            /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
            "$1.*?"
          ) +
        "$"
    ),
    Fi = Mt ? ge.Buffer : void 0,
    gd = ge.Symbol,
    vd = ge.Uint8Array,
    yd = Fi ? Fi.allocUnsafe : void 0,
    Sd = R1(Object.getPrototypeOf, Object),
    wd = Object.create,
    F1 = Oi.propertyIsEnumerable,
    I1 = M1.splice,
    Nn = gd ? gd.toStringTag : void 0,
    Ii = (function () {
      try {
        var y = al(Object, "defineProperty");
        return y({}, "", {}), y;
      } catch {}
    })(),
    D1 = Fi ? Fi.isBuffer : void 0,
    xd = Math.max,
    N1 = Date.now,
    kd = al(ge, "Map"),
    ao = al(Object, "create"),
    V1 = (function () {
      function y() {}
      return function (x) {
        if (!jn(x)) return {};
        if (wd) return wd(x);
        y.prototype = x;
        var T = new y();
        return (y.prototype = void 0), T;
      };
    })();
  function Vn(y) {
    var x = -1,
      T = y == null ? 0 : y.length;
    for (this.clear(); ++x < T; ) {
      var F = y[x];
      this.set(F[0], F[1]);
    }
  }
  function j1() {
    (this.__data__ = ao ? ao(null) : {}), (this.size = 0);
  }
  function B1(y) {
    var x = this.has(y) && delete this.__data__[y];
    return (this.size -= x ? 1 : 0), x;
  }
  function z1(y) {
    var x = this.__data__;
    if (ao) {
      var T = x[y];
      return T === r ? void 0 : T;
    }
    return Ht.call(x, y) ? x[y] : void 0;
  }
  function $1(y) {
    var x = this.__data__;
    return ao ? x[y] !== void 0 : Ht.call(x, y);
  }
  function U1(y, x) {
    var T = this.__data__;
    return (
      (this.size += this.has(y) ? 0 : 1),
      (T[y] = ao && x === void 0 ? r : x),
      this
    );
  }
  (Vn.prototype.clear = j1),
    (Vn.prototype.delete = B1),
    (Vn.prototype.get = z1),
    (Vn.prototype.has = $1),
    (Vn.prototype.set = U1);
  function Gt(y) {
    var x = -1,
      T = y == null ? 0 : y.length;
    for (this.clear(); ++x < T; ) {
      var F = y[x];
      this.set(F[0], F[1]);
    }
  }
  function W1() {
    (this.__data__ = []), (this.size = 0);
  }
  function H1(y) {
    var x = this.__data__,
      T = Di(x, y);
    if (T < 0) return !1;
    var F = x.length - 1;
    return T == F ? x.pop() : I1.call(x, T, 1), --this.size, !0;
  }
  function G1(y) {
    var x = this.__data__,
      T = Di(x, y);
    return T < 0 ? void 0 : x[T][1];
  }
  function Z1(y) {
    return Di(this.__data__, y) > -1;
  }
  function K1(y, x) {
    var T = this.__data__,
      F = Di(T, y);
    return F < 0 ? (++this.size, T.push([y, x])) : (T[F][1] = x), this;
  }
  (Gt.prototype.clear = W1),
    (Gt.prototype.delete = H1),
    (Gt.prototype.get = G1),
    (Gt.prototype.has = Z1),
    (Gt.prototype.set = K1);
  function dr(y) {
    var x = -1,
      T = y == null ? 0 : y.length;
    for (this.clear(); ++x < T; ) {
      var F = y[x];
      this.set(F[0], F[1]);
    }
  }
  function Y1() {
    (this.size = 0),
      (this.__data__ = {
        hash: new Vn(),
        map: new (kd || Gt)(),
        string: new Vn(),
      });
  }
  function X1(y) {
    var x = Vi(this, y).delete(y);
    return (this.size -= x ? 1 : 0), x;
  }
  function Q1(y) {
    return Vi(this, y).get(y);
  }
  function q1(y) {
    return Vi(this, y).has(y);
  }
  function J1(y, x) {
    var T = Vi(this, y),
      F = T.size;
    return T.set(y, x), (this.size += T.size == F ? 0 : 1), this;
  }
  (dr.prototype.clear = Y1),
    (dr.prototype.delete = X1),
    (dr.prototype.get = Q1),
    (dr.prototype.has = q1),
    (dr.prototype.set = J1);
  function pr(y) {
    var x = (this.__data__ = new Gt(y));
    this.size = x.size;
  }
  function eS() {
    (this.__data__ = new Gt()), (this.size = 0);
  }
  function tS(y) {
    var x = this.__data__,
      T = x.delete(y);
    return (this.size = x.size), T;
  }
  function nS(y) {
    return this.__data__.get(y);
  }
  function rS(y) {
    return this.__data__.has(y);
  }
  function oS(y, x) {
    var T = this.__data__;
    if (T instanceof Gt) {
      var F = T.__data__;
      if (!kd || F.length < n - 1)
        return F.push([y, x]), (this.size = ++T.size), this;
      T = this.__data__ = new dr(F);
    }
    return T.set(y, x), (this.size = T.size), this;
  }
  (pr.prototype.clear = eS),
    (pr.prototype.delete = tS),
    (pr.prototype.get = nS),
    (pr.prototype.has = rS),
    (pr.prototype.set = oS);
  function iS(y, x) {
    var T = cl(y),
      F = !T && ul(y),
      H = !T && !F && bd(y),
      te = !T && !F && !H && Rd(y),
      ae = T || F || H || te,
      W = ae ? E1(y.length, String) : [],
      le = W.length;
    for (var ft in y)
      (x || Ht.call(y, ft)) &&
        !(
          ae &&
          (ft == "length" ||
            (H && (ft == "offset" || ft == "parent")) ||
            (te &&
              (ft == "buffer" || ft == "byteLength" || ft == "byteOffset")) ||
            Td(ft, le))
        ) &&
        W.push(ft);
    return W;
  }
  function il(y, x, T) {
    ((T !== void 0 && !ji(y[x], T)) || (T === void 0 && !(x in y))) &&
      sl(y, x, T);
  }
  function sS(y, x, T) {
    var F = y[x];
    (!(Ht.call(y, x) && ji(F, T)) || (T === void 0 && !(x in y))) &&
      sl(y, x, T);
  }
  function Di(y, x) {
    for (var T = y.length; T--; ) if (ji(y[T][0], x)) return T;
    return -1;
  }
  function sl(y, x, T) {
    x == "__proto__" && Ii
      ? Ii(y, x, { configurable: !0, enumerable: !0, value: T, writable: !0 })
      : (y[x] = T);
  }
  var aS = wS();
  function Ni(y) {
    return y == null
      ? y === void 0
        ? b
        : g
      : Nn && Nn in Object(y)
      ? xS(y)
      : bS(y);
  }
  function Cd(y) {
    return lo(y) && Ni(y) == a;
  }
  function lS(y) {
    if (!jn(y) || TS(y)) return !1;
    var x = dl(y) ? L1 : B;
    return x.test(AS(y));
  }
  function uS(y) {
    return lo(y) && _d(y.length) && !!U[Ni(y)];
  }
  function cS(y) {
    if (!jn(y)) return ES(y);
    var x = Ed(y),
      T = [];
    for (var F in y) (F == "constructor" && (x || !Ht.call(y, F))) || T.push(F);
    return T;
  }
  function Pd(y, x, T, F, H) {
    y !== x &&
      aS(
        x,
        function (te, ae) {
          if ((H || (H = new pr()), jn(te))) fS(y, x, ae, T, Pd, F, H);
          else {
            var W = F ? F(ll(y, ae), te, ae + "", y, x, H) : void 0;
            W === void 0 && (W = te), il(y, ae, W);
          }
        },
        Md
      );
  }
  function fS(y, x, T, F, H, te, ae) {
    var W = ll(y, T),
      le = ll(x, T),
      ft = ae.get(le);
    if (ft) {
      il(y, T, ft);
      return;
    }
    var nt = te ? te(W, le, T + "", y, x, ae) : void 0,
      uo = nt === void 0;
    if (uo) {
      var pl = cl(le),
        hl = !pl && bd(le),
        Od = !pl && !hl && Rd(le);
      (nt = le),
        pl || hl || Od
          ? cl(W)
            ? (nt = W)
            : OS(W)
            ? (nt = vS(W))
            : hl
            ? ((uo = !1), (nt = hS(le, !0)))
            : Od
            ? ((uo = !1), (nt = gS(le, !0)))
            : (nt = [])
          : LS(le) || ul(le)
          ? ((nt = W),
            ul(W) ? (nt = FS(W)) : (!jn(W) || dl(W)) && (nt = kS(le)))
          : (uo = !1);
    }
    uo && (ae.set(le, nt), H(nt, le, F, te, ae), ae.delete(le)), il(y, T, nt);
  }
  function dS(y, x) {
    return RS(_S(y, x, Ad), y + "");
  }
  var pS = Ii
    ? function (y, x) {
        return Ii(y, "toString", {
          configurable: !0,
          enumerable: !1,
          value: DS(x),
          writable: !0,
        });
      }
    : Ad;
  function hS(y, x) {
    if (x) return y.slice();
    var T = y.length,
      F = yd ? yd(T) : new y.constructor(T);
    return y.copy(F), F;
  }
  function mS(y) {
    var x = new y.constructor(y.byteLength);
    return new vd(x).set(new vd(y)), x;
  }
  function gS(y, x) {
    var T = x ? mS(y.buffer) : y.buffer;
    return new y.constructor(T, y.byteOffset, y.length);
  }
  function vS(y, x) {
    var T = -1,
      F = y.length;
    for (x || (x = Array(F)); ++T < F; ) x[T] = y[T];
    return x;
  }
  function yS(y, x, T, F) {
    var H = !T;
    T || (T = {});
    for (var te = -1, ae = x.length; ++te < ae; ) {
      var W = x[te],
        le = F ? F(T[W], y[W], W, T, y) : void 0;
      le === void 0 && (le = y[W]), H ? sl(T, W, le) : sS(T, W, le);
    }
    return T;
  }
  function SS(y) {
    return dS(function (x, T) {
      var F = -1,
        H = T.length,
        te = H > 1 ? T[H - 1] : void 0,
        ae = H > 2 ? T[2] : void 0;
      for (
        te = y.length > 3 && typeof te == "function" ? (H--, te) : void 0,
          ae && CS(T[0], T[1], ae) && ((te = H < 3 ? void 0 : te), (H = 1)),
          x = Object(x);
        ++F < H;

      ) {
        var W = T[F];
        W && y(x, W, F, te);
      }
      return x;
    });
  }
  function wS(y) {
    return function (x, T, F) {
      for (var H = -1, te = Object(x), ae = F(x), W = ae.length; W--; ) {
        var le = ae[y ? W : ++H];
        if (T(te[le], le, te) === !1) break;
      }
      return x;
    };
  }
  function Vi(y, x) {
    var T = y.__data__;
    return PS(x) ? T[typeof x == "string" ? "string" : "hash"] : T.map;
  }
  function al(y, x) {
    var T = _1(y, x);
    return lS(T) ? T : void 0;
  }
  function xS(y) {
    var x = Ht.call(y, Nn),
      T = y[Nn];
    try {
      y[Nn] = void 0;
      var F = !0;
    } catch {}
    var H = md.call(y);
    return F && (x ? (y[Nn] = T) : delete y[Nn]), H;
  }
  function kS(y) {
    return typeof y.constructor == "function" && !Ed(y) ? V1(Sd(y)) : {};
  }
  function Td(y, x) {
    var T = typeof y;
    return (
      (x = x ?? s),
      !!x &&
        (T == "number" || (T != "symbol" && ee.test(y))) &&
        y > -1 &&
        y % 1 == 0 &&
        y < x
    );
  }
  function CS(y, x, T) {
    if (!jn(T)) return !1;
    var F = typeof x;
    return (F == "number" ? fl(T) && Td(x, T.length) : F == "string" && x in T)
      ? ji(T[x], y)
      : !1;
  }
  function PS(y) {
    var x = typeof y;
    return x == "string" || x == "number" || x == "symbol" || x == "boolean"
      ? y !== "__proto__"
      : y === null;
  }
  function TS(y) {
    return !!hd && hd in y;
  }
  function Ed(y) {
    var x = y && y.constructor,
      T = (typeof x == "function" && x.prototype) || Oi;
    return y === T;
  }
  function ES(y) {
    var x = [];
    if (y != null) for (var T in Object(y)) x.push(T);
    return x;
  }
  function bS(y) {
    return md.call(y);
  }
  function _S(y, x, T) {
    return (
      (x = xd(x === void 0 ? y.length - 1 : x, 0)),
      function () {
        for (
          var F = arguments, H = -1, te = xd(F.length - x, 0), ae = Array(te);
          ++H < te;

        )
          ae[H] = F[x + H];
        H = -1;
        for (var W = Array(x + 1); ++H < x; ) W[H] = F[H];
        return (W[x] = T(ae)), Ai(y, this, W);
      }
    );
  }
  function ll(y, x) {
    if (!(x === "constructor" && typeof y[x] == "function") && x != "__proto__")
      return y[x];
  }
  var RS = MS(pS);
  function MS(y) {
    var x = 0,
      T = 0;
    return function () {
      var F = N1(),
        H = i - (F - T);
      if (((T = F), H > 0)) {
        if (++x >= o) return arguments[0];
      } else x = 0;
      return y.apply(void 0, arguments);
    };
  }
  function AS(y) {
    if (y != null) {
      try {
        return Li.call(y);
      } catch {}
      try {
        return y + "";
      } catch {}
    }
    return "";
  }
  function ji(y, x) {
    return y === x || (y !== y && x !== x);
  }
  var ul = Cd(
      (function () {
        return arguments;
      })()
    )
      ? Cd
      : function (y) {
          return lo(y) && Ht.call(y, "callee") && !F1.call(y, "callee");
        },
    cl = Array.isArray;
  function fl(y) {
    return y != null && _d(y.length) && !dl(y);
  }
  function OS(y) {
    return lo(y) && fl(y);
  }
  var bd = D1 || NS;
  function dl(y) {
    if (!jn(y)) return !1;
    var x = Ni(y);
    return x == p || x == S || x == u || x == m;
  }
  function _d(y) {
    return typeof y == "number" && y > -1 && y % 1 == 0 && y <= s;
  }
  function jn(y) {
    var x = typeof y;
    return y != null && (x == "object" || x == "function");
  }
  function lo(y) {
    return y != null && typeof y == "object";
  }
  function LS(y) {
    if (!lo(y) || Ni(y) != h) return !1;
    var x = Sd(y);
    if (x === null) return !0;
    var T = Ht.call(x, "constructor") && x.constructor;
    return typeof T == "function" && T instanceof T && Li.call(T) == O1;
  }
  var Rd = so ? b1(so) : uS;
  function FS(y) {
    return yS(y, Md(y));
  }
  function Md(y) {
    return fl(y) ? iS(y, !0) : cS(y);
  }
  var IS = SS(function (y, x, T, F) {
    Pd(y, x, T, F);
  });
  function DS(y) {
    return function () {
      return y;
    };
  }
  function Ad(y) {
    return y;
  }
  function NS() {
    return !1;
  }
  e.exports = IS;
})(dC, sa);
const qt = sa;
var pC = (e) => /!(important)?$/.test(e),
  Yp = (e) =>
    typeof e == "string" ? e.replace(/!(important)?$/, "").trim() : e,
  hC = (e, t) => (n) => {
    const r = String(t),
      o = pC(r),
      i = Yp(r),
      s = e ? `${e}.${i}` : i;
    let a = qn(n.__cssMap) && s in n.__cssMap ? n.__cssMap[s].varRef : t;
    return (a = Yp(a)), o ? `${a} !important` : a;
  };
function Ff(e) {
  const { scale: t, transform: n, compose: r } = e;
  return (i, s) => {
    var a;
    const l = hC(t, i)(s);
    let u = (a = n == null ? void 0 : n(l, s)) != null ? a : l;
    return r && (u = r(u, s)), u;
  };
}
var ss =
  (...e) =>
  (t) =>
    e.reduce((n, r) => r(n), t);
function dt(e, t) {
  return (n) => {
    const r = { property: n, scale: e };
    return (r.transform = Ff({ scale: e, transform: t })), r;
  };
}
var mC =
  ({ rtl: e, ltr: t }) =>
  (n) =>
    n.direction === "rtl" ? e : t;
function gC(e) {
  const { property: t, scale: n, transform: r } = e;
  return {
    scale: n,
    property: mC(t),
    transform: n ? Ff({ scale: n, compose: r }) : r,
  };
}
var r0 = [
  "rotate(var(--chakra-rotate, 0))",
  "scaleX(var(--chakra-scale-x, 1))",
  "scaleY(var(--chakra-scale-y, 1))",
  "skewX(var(--chakra-skew-x, 0))",
  "skewY(var(--chakra-skew-y, 0))",
];
function vC() {
  return [
    "translateX(var(--chakra-translate-x, 0))",
    "translateY(var(--chakra-translate-y, 0))",
    ...r0,
  ].join(" ");
}
function yC() {
  return [
    "translate3d(var(--chakra-translate-x, 0), var(--chakra-translate-y, 0), 0)",
    ...r0,
  ].join(" ");
}
var SC = {
    "--chakra-blur": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-brightness": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-contrast": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-grayscale": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-hue-rotate": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-invert": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-saturate": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-sepia": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-drop-shadow": "var(--chakra-empty,/*!*/ /*!*/)",
    filter: [
      "var(--chakra-blur)",
      "var(--chakra-brightness)",
      "var(--chakra-contrast)",
      "var(--chakra-grayscale)",
      "var(--chakra-hue-rotate)",
      "var(--chakra-invert)",
      "var(--chakra-saturate)",
      "var(--chakra-sepia)",
      "var(--chakra-drop-shadow)",
    ].join(" "),
  },
  wC = {
    backdropFilter: [
      "var(--chakra-backdrop-blur)",
      "var(--chakra-backdrop-brightness)",
      "var(--chakra-backdrop-contrast)",
      "var(--chakra-backdrop-grayscale)",
      "var(--chakra-backdrop-hue-rotate)",
      "var(--chakra-backdrop-invert)",
      "var(--chakra-backdrop-opacity)",
      "var(--chakra-backdrop-saturate)",
      "var(--chakra-backdrop-sepia)",
    ].join(" "),
    "--chakra-backdrop-blur": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-backdrop-brightness": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-backdrop-contrast": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-backdrop-grayscale": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-backdrop-hue-rotate": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-backdrop-invert": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-backdrop-opacity": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-backdrop-saturate": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-backdrop-sepia": "var(--chakra-empty,/*!*/ /*!*/)",
  };
function xC(e) {
  return {
    "--chakra-ring-offset-shadow":
      "var(--chakra-ring-inset) 0 0 0 var(--chakra-ring-offset-width) var(--chakra-ring-offset-color)",
    "--chakra-ring-shadow":
      "var(--chakra-ring-inset) 0 0 0 calc(var(--chakra-ring-width) + var(--chakra-ring-offset-width)) var(--chakra-ring-color)",
    "--chakra-ring-width": e,
    boxShadow: [
      "var(--chakra-ring-offset-shadow)",
      "var(--chakra-ring-shadow)",
      "var(--chakra-shadow, 0 0 #0000)",
    ].join(", "),
  };
}
var kC = {
    "row-reverse": {
      space: "--chakra-space-x-reverse",
      divide: "--chakra-divide-x-reverse",
    },
    "column-reverse": {
      space: "--chakra-space-y-reverse",
      divide: "--chakra-divide-y-reverse",
    },
  },
  ac = {
    "to-t": "to top",
    "to-tr": "to top right",
    "to-r": "to right",
    "to-br": "to bottom right",
    "to-b": "to bottom",
    "to-bl": "to bottom left",
    "to-l": "to left",
    "to-tl": "to top left",
  },
  CC = new Set(Object.values(ac)),
  lc = new Set([
    "none",
    "-moz-initial",
    "inherit",
    "initial",
    "revert",
    "unset",
  ]),
  PC = (e) => e.trim();
function TC(e, t) {
  if (e == null || lc.has(e)) return e;
  if (!(uc(e) || lc.has(e))) return `url('${e}')`;
  const o = /(^[a-z-A-Z]+)\((.*)\)/g.exec(e),
    i = o == null ? void 0 : o[1],
    s = o == null ? void 0 : o[2];
  if (!i || !s) return e;
  const a = i.includes("-gradient") ? i : `${i}-gradient`,
    [l, ...u] = s.split(",").map(PC).filter(Boolean);
  if ((u == null ? void 0 : u.length) === 0) return e;
  const c = l in ac ? ac[l] : l;
  u.unshift(c);
  const f = u.map((d) => {
    if (CC.has(d)) return d;
    const p = d.indexOf(" "),
      [S, v] = p !== -1 ? [d.substr(0, p), d.substr(p + 1)] : [d],
      P = uc(v) ? v : v && v.split(" "),
      g = `colors.${S}`,
      h = g in t.__cssMap ? t.__cssMap[g].varRef : S;
    return P ? [h, ...(Array.isArray(P) ? P : [P])].join(" ") : h;
  });
  return `${a}(${f.join(", ")})`;
}
var uc = (e) => typeof e == "string" && e.includes("(") && e.includes(")"),
  EC = (e, t) => TC(e, t ?? {});
function bC(e) {
  return /^var\(--.+\)$/.test(e);
}
var _C = (e) => {
    const t = parseFloat(e.toString()),
      n = e.toString().replace(String(t), "");
    return { unitless: !n, value: t, unit: n };
  },
  Lt = (e) => (t) => `${e}(${t})`,
  Z = {
    filter(e) {
      return e !== "auto" ? e : SC;
    },
    backdropFilter(e) {
      return e !== "auto" ? e : wC;
    },
    ring(e) {
      return xC(Z.px(e));
    },
    bgClip(e) {
      return e === "text"
        ? { color: "transparent", backgroundClip: "text" }
        : { backgroundClip: e };
    },
    transform(e) {
      return e === "auto" ? vC() : e === "auto-gpu" ? yC() : e;
    },
    vh(e) {
      return e === "$100vh" ? "var(--chakra-vh)" : e;
    },
    px(e) {
      if (e == null) return e;
      const { unitless: t } = _C(e);
      return t || typeof e == "number" ? `${e}px` : e;
    },
    fraction(e) {
      return typeof e != "number" || e > 1 ? e : `${e * 100}%`;
    },
    float(e, t) {
      const n = { left: "right", right: "left" };
      return t.direction === "rtl" ? n[e] : e;
    },
    degree(e) {
      if (bC(e) || e == null) return e;
      const t = typeof e == "string" && !e.endsWith("deg");
      return typeof e == "number" || t ? `${e}deg` : e;
    },
    gradient: EC,
    blur: Lt("blur"),
    opacity: Lt("opacity"),
    brightness: Lt("brightness"),
    contrast: Lt("contrast"),
    dropShadow: Lt("drop-shadow"),
    grayscale: Lt("grayscale"),
    hueRotate: Lt("hue-rotate"),
    invert: Lt("invert"),
    saturate: Lt("saturate"),
    sepia: Lt("sepia"),
    bgImage(e) {
      return e == null || uc(e) || lc.has(e) ? e : `url(${e})`;
    },
    outline(e) {
      const t = String(e) === "0" || String(e) === "none";
      return e !== null && t
        ? { outline: "2px solid transparent", outlineOffset: "2px" }
        : { outline: e };
    },
    flexDirection(e) {
      var t;
      const { space: n, divide: r } = (t = kC[e]) != null ? t : {},
        o = { flexDirection: e };
      return n && (o[n] = 1), r && (o[r] = 1), o;
    },
  },
  k = {
    borderWidths: dt("borderWidths"),
    borderStyles: dt("borderStyles"),
    colors: dt("colors"),
    borders: dt("borders"),
    gradients: dt("gradients", Z.gradient),
    radii: dt("radii", Z.px),
    space: dt("space", ss(Z.vh, Z.px)),
    spaceT: dt("space", ss(Z.vh, Z.px)),
    degreeT(e) {
      return { property: e, transform: Z.degree };
    },
    prop(e, t, n) {
      return {
        property: e,
        scale: t,
        ...(t && { transform: Ff({ scale: t, transform: n }) }),
      };
    },
    propT(e, t) {
      return { property: e, transform: t };
    },
    sizes: dt("sizes", ss(Z.vh, Z.px)),
    sizesT: dt("sizes", ss(Z.vh, Z.fraction)),
    shadows: dt("shadows"),
    logical: gC,
    blur: dt("blur", Z.blur),
  },
  Rs = {
    background: k.colors("background"),
    backgroundColor: k.colors("backgroundColor"),
    backgroundImage: k.gradients("backgroundImage"),
    backgroundSize: !0,
    backgroundPosition: !0,
    backgroundRepeat: !0,
    backgroundAttachment: !0,
    backgroundClip: { transform: Z.bgClip },
    bgSize: k.prop("backgroundSize"),
    bgPosition: k.prop("backgroundPosition"),
    bg: k.colors("background"),
    bgColor: k.colors("backgroundColor"),
    bgPos: k.prop("backgroundPosition"),
    bgRepeat: k.prop("backgroundRepeat"),
    bgAttachment: k.prop("backgroundAttachment"),
    bgGradient: k.gradients("backgroundImage"),
    bgClip: { transform: Z.bgClip },
  };
Object.assign(Rs, { bgImage: Rs.backgroundImage, bgImg: Rs.backgroundImage });
var K = {
  border: k.borders("border"),
  borderWidth: k.borderWidths("borderWidth"),
  borderStyle: k.borderStyles("borderStyle"),
  borderColor: k.colors("borderColor"),
  borderRadius: k.radii("borderRadius"),
  borderTop: k.borders("borderTop"),
  borderBlockStart: k.borders("borderBlockStart"),
  borderTopLeftRadius: k.radii("borderTopLeftRadius"),
  borderStartStartRadius: k.logical({
    scale: "radii",
    property: { ltr: "borderTopLeftRadius", rtl: "borderTopRightRadius" },
  }),
  borderEndStartRadius: k.logical({
    scale: "radii",
    property: { ltr: "borderBottomLeftRadius", rtl: "borderBottomRightRadius" },
  }),
  borderTopRightRadius: k.radii("borderTopRightRadius"),
  borderStartEndRadius: k.logical({
    scale: "radii",
    property: { ltr: "borderTopRightRadius", rtl: "borderTopLeftRadius" },
  }),
  borderEndEndRadius: k.logical({
    scale: "radii",
    property: { ltr: "borderBottomRightRadius", rtl: "borderBottomLeftRadius" },
  }),
  borderRight: k.borders("borderRight"),
  borderInlineEnd: k.borders("borderInlineEnd"),
  borderBottom: k.borders("borderBottom"),
  borderBlockEnd: k.borders("borderBlockEnd"),
  borderBottomLeftRadius: k.radii("borderBottomLeftRadius"),
  borderBottomRightRadius: k.radii("borderBottomRightRadius"),
  borderLeft: k.borders("borderLeft"),
  borderInlineStart: { property: "borderInlineStart", scale: "borders" },
  borderInlineStartRadius: k.logical({
    scale: "radii",
    property: {
      ltr: ["borderTopLeftRadius", "borderBottomLeftRadius"],
      rtl: ["borderTopRightRadius", "borderBottomRightRadius"],
    },
  }),
  borderInlineEndRadius: k.logical({
    scale: "radii",
    property: {
      ltr: ["borderTopRightRadius", "borderBottomRightRadius"],
      rtl: ["borderTopLeftRadius", "borderBottomLeftRadius"],
    },
  }),
  borderX: k.borders(["borderLeft", "borderRight"]),
  borderInline: k.borders("borderInline"),
  borderY: k.borders(["borderTop", "borderBottom"]),
  borderBlock: k.borders("borderBlock"),
  borderTopWidth: k.borderWidths("borderTopWidth"),
  borderBlockStartWidth: k.borderWidths("borderBlockStartWidth"),
  borderTopColor: k.colors("borderTopColor"),
  borderBlockStartColor: k.colors("borderBlockStartColor"),
  borderTopStyle: k.borderStyles("borderTopStyle"),
  borderBlockStartStyle: k.borderStyles("borderBlockStartStyle"),
  borderBottomWidth: k.borderWidths("borderBottomWidth"),
  borderBlockEndWidth: k.borderWidths("borderBlockEndWidth"),
  borderBottomColor: k.colors("borderBottomColor"),
  borderBlockEndColor: k.colors("borderBlockEndColor"),
  borderBottomStyle: k.borderStyles("borderBottomStyle"),
  borderBlockEndStyle: k.borderStyles("borderBlockEndStyle"),
  borderLeftWidth: k.borderWidths("borderLeftWidth"),
  borderInlineStartWidth: k.borderWidths("borderInlineStartWidth"),
  borderLeftColor: k.colors("borderLeftColor"),
  borderInlineStartColor: k.colors("borderInlineStartColor"),
  borderLeftStyle: k.borderStyles("borderLeftStyle"),
  borderInlineStartStyle: k.borderStyles("borderInlineStartStyle"),
  borderRightWidth: k.borderWidths("borderRightWidth"),
  borderInlineEndWidth: k.borderWidths("borderInlineEndWidth"),
  borderRightColor: k.colors("borderRightColor"),
  borderInlineEndColor: k.colors("borderInlineEndColor"),
  borderRightStyle: k.borderStyles("borderRightStyle"),
  borderInlineEndStyle: k.borderStyles("borderInlineEndStyle"),
  borderTopRadius: k.radii(["borderTopLeftRadius", "borderTopRightRadius"]),
  borderBottomRadius: k.radii([
    "borderBottomLeftRadius",
    "borderBottomRightRadius",
  ]),
  borderLeftRadius: k.radii(["borderTopLeftRadius", "borderBottomLeftRadius"]),
  borderRightRadius: k.radii([
    "borderTopRightRadius",
    "borderBottomRightRadius",
  ]),
};
Object.assign(K, {
  rounded: K.borderRadius,
  roundedTop: K.borderTopRadius,
  roundedTopLeft: K.borderTopLeftRadius,
  roundedTopRight: K.borderTopRightRadius,
  roundedTopStart: K.borderStartStartRadius,
  roundedTopEnd: K.borderStartEndRadius,
  roundedBottom: K.borderBottomRadius,
  roundedBottomLeft: K.borderBottomLeftRadius,
  roundedBottomRight: K.borderBottomRightRadius,
  roundedBottomStart: K.borderEndStartRadius,
  roundedBottomEnd: K.borderEndEndRadius,
  roundedLeft: K.borderLeftRadius,
  roundedRight: K.borderRightRadius,
  roundedStart: K.borderInlineStartRadius,
  roundedEnd: K.borderInlineEndRadius,
  borderStart: K.borderInlineStart,
  borderEnd: K.borderInlineEnd,
  borderTopStartRadius: K.borderStartStartRadius,
  borderTopEndRadius: K.borderStartEndRadius,
  borderBottomStartRadius: K.borderEndStartRadius,
  borderBottomEndRadius: K.borderEndEndRadius,
  borderStartRadius: K.borderInlineStartRadius,
  borderEndRadius: K.borderInlineEndRadius,
  borderStartWidth: K.borderInlineStartWidth,
  borderEndWidth: K.borderInlineEndWidth,
  borderStartColor: K.borderInlineStartColor,
  borderEndColor: K.borderInlineEndColor,
  borderStartStyle: K.borderInlineStartStyle,
  borderEndStyle: K.borderInlineEndStyle,
});
var RC = {
    color: k.colors("color"),
    textColor: k.colors("color"),
    fill: k.colors("fill"),
    stroke: k.colors("stroke"),
  },
  cc = {
    boxShadow: k.shadows("boxShadow"),
    mixBlendMode: !0,
    blendMode: k.prop("mixBlendMode"),
    backgroundBlendMode: !0,
    bgBlendMode: k.prop("backgroundBlendMode"),
    opacity: !0,
  };
Object.assign(cc, { shadow: cc.boxShadow });
var MC = {
    filter: { transform: Z.filter },
    blur: k.blur("--chakra-blur"),
    brightness: k.propT("--chakra-brightness", Z.brightness),
    contrast: k.propT("--chakra-contrast", Z.contrast),
    hueRotate: k.degreeT("--chakra-hue-rotate"),
    invert: k.propT("--chakra-invert", Z.invert),
    saturate: k.propT("--chakra-saturate", Z.saturate),
    dropShadow: k.propT("--chakra-drop-shadow", Z.dropShadow),
    backdropFilter: { transform: Z.backdropFilter },
    backdropBlur: k.blur("--chakra-backdrop-blur"),
    backdropBrightness: k.propT("--chakra-backdrop-brightness", Z.brightness),
    backdropContrast: k.propT("--chakra-backdrop-contrast", Z.contrast),
    backdropHueRotate: k.degreeT("--chakra-backdrop-hue-rotate"),
    backdropInvert: k.propT("--chakra-backdrop-invert", Z.invert),
    backdropSaturate: k.propT("--chakra-backdrop-saturate", Z.saturate),
  },
  aa = {
    alignItems: !0,
    alignContent: !0,
    justifyItems: !0,
    justifyContent: !0,
    flexWrap: !0,
    flexDirection: { transform: Z.flexDirection },
    flex: !0,
    flexFlow: !0,
    flexGrow: !0,
    flexShrink: !0,
    flexBasis: k.sizes("flexBasis"),
    justifySelf: !0,
    alignSelf: !0,
    order: !0,
    placeItems: !0,
    placeContent: !0,
    placeSelf: !0,
    gap: k.space("gap"),
    rowGap: k.space("rowGap"),
    columnGap: k.space("columnGap"),
  };
Object.assign(aa, { flexDir: aa.flexDirection });
var o0 = {
    gridGap: k.space("gridGap"),
    gridColumnGap: k.space("gridColumnGap"),
    gridRowGap: k.space("gridRowGap"),
    gridColumn: !0,
    gridRow: !0,
    gridAutoFlow: !0,
    gridAutoColumns: !0,
    gridColumnStart: !0,
    gridColumnEnd: !0,
    gridRowStart: !0,
    gridRowEnd: !0,
    gridAutoRows: !0,
    gridTemplate: !0,
    gridTemplateColumns: !0,
    gridTemplateRows: !0,
    gridTemplateAreas: !0,
    gridArea: !0,
  },
  AC = {
    appearance: !0,
    cursor: !0,
    resize: !0,
    userSelect: !0,
    pointerEvents: !0,
    outline: { transform: Z.outline },
    outlineOffset: !0,
    outlineColor: k.colors("outlineColor"),
  },
  ht = {
    width: k.sizesT("width"),
    inlineSize: k.sizesT("inlineSize"),
    height: k.sizes("height"),
    blockSize: k.sizes("blockSize"),
    boxSize: k.sizes(["width", "height"]),
    minWidth: k.sizes("minWidth"),
    minInlineSize: k.sizes("minInlineSize"),
    minHeight: k.sizes("minHeight"),
    minBlockSize: k.sizes("minBlockSize"),
    maxWidth: k.sizes("maxWidth"),
    maxInlineSize: k.sizes("maxInlineSize"),
    maxHeight: k.sizes("maxHeight"),
    maxBlockSize: k.sizes("maxBlockSize"),
    overflow: !0,
    overflowX: !0,
    overflowY: !0,
    overscrollBehavior: !0,
    overscrollBehaviorX: !0,
    overscrollBehaviorY: !0,
    display: !0,
    hideFrom: {
      scale: "breakpoints",
      transform: (e, t) => {
        var n, r, o;
        return {
          [`@media screen and (min-width: ${
            (o =
              (r = (n = t.__breakpoints) == null ? void 0 : n.get(e)) == null
                ? void 0
                : r.minW) != null
              ? o
              : e
          })`]: { display: "none" },
        };
      },
    },
    hideBelow: {
      scale: "breakpoints",
      transform: (e, t) => {
        var n, r, o;
        return {
          [`@media screen and (max-width: ${
            (o =
              (r = (n = t.__breakpoints) == null ? void 0 : n.get(e)) == null
                ? void 0
                : r._minW) != null
              ? o
              : e
          })`]: { display: "none" },
        };
      },
    },
    verticalAlign: !0,
    boxSizing: !0,
    boxDecorationBreak: !0,
    float: k.propT("float", Z.float),
    objectFit: !0,
    objectPosition: !0,
    visibility: !0,
    isolation: !0,
  };
Object.assign(ht, {
  w: ht.width,
  h: ht.height,
  minW: ht.minWidth,
  maxW: ht.maxWidth,
  minH: ht.minHeight,
  maxH: ht.maxHeight,
  overscroll: ht.overscrollBehavior,
  overscrollX: ht.overscrollBehaviorX,
  overscrollY: ht.overscrollBehaviorY,
});
var OC = {
  listStyleType: !0,
  listStylePosition: !0,
  listStylePos: k.prop("listStylePosition"),
  listStyleImage: !0,
  listStyleImg: k.prop("listStyleImage"),
};
function LC(e, t, n, r) {
  const o = typeof t == "string" ? t.split(".") : [t];
  for (r = 0; r < o.length && e; r += 1) e = e[o[r]];
  return e === void 0 ? n : e;
}
var FC = (e) => {
    const t = new WeakMap();
    return (r, o, i, s) => {
      if (typeof r > "u") return e(r, o, i);
      t.has(r) || t.set(r, new Map());
      const a = t.get(r);
      if (a.has(o)) return a.get(o);
      const l = e(r, o, i, s);
      return a.set(o, l), l;
    };
  },
  IC = FC(LC),
  DC = {
    border: "0px",
    clip: "rect(0, 0, 0, 0)",
    width: "1px",
    height: "1px",
    margin: "-1px",
    padding: "0px",
    overflow: "hidden",
    whiteSpace: "nowrap",
    position: "absolute",
  },
  NC = {
    position: "static",
    width: "auto",
    height: "auto",
    clip: "auto",
    padding: "0",
    margin: "0",
    overflow: "visible",
    whiteSpace: "normal",
  },
  $l = (e, t, n) => {
    const r = {},
      o = IC(e, t, {});
    for (const i in o) (i in n && n[i] != null) || (r[i] = o[i]);
    return r;
  },
  VC = {
    srOnly: {
      transform(e) {
        return e === !0 ? DC : e === "focusable" ? NC : {};
      },
    },
    layerStyle: {
      processResult: !0,
      transform: (e, t, n) => $l(t, `layerStyles.${e}`, n),
    },
    textStyle: {
      processResult: !0,
      transform: (e, t, n) => $l(t, `textStyles.${e}`, n),
    },
    apply: { processResult: !0, transform: (e, t, n) => $l(t, e, n) },
  },
  No = {
    position: !0,
    pos: k.prop("position"),
    zIndex: k.prop("zIndex", "zIndices"),
    inset: k.spaceT("inset"),
    insetX: k.spaceT(["left", "right"]),
    insetInline: k.spaceT("insetInline"),
    insetY: k.spaceT(["top", "bottom"]),
    insetBlock: k.spaceT("insetBlock"),
    top: k.spaceT("top"),
    insetBlockStart: k.spaceT("insetBlockStart"),
    bottom: k.spaceT("bottom"),
    insetBlockEnd: k.spaceT("insetBlockEnd"),
    left: k.spaceT("left"),
    insetInlineStart: k.logical({
      scale: "space",
      property: { ltr: "left", rtl: "right" },
    }),
    right: k.spaceT("right"),
    insetInlineEnd: k.logical({
      scale: "space",
      property: { ltr: "right", rtl: "left" },
    }),
  };
Object.assign(No, {
  insetStart: No.insetInlineStart,
  insetEnd: No.insetInlineEnd,
});
var jC = {
    ring: { transform: Z.ring },
    ringColor: k.colors("--chakra-ring-color"),
    ringOffset: k.prop("--chakra-ring-offset-width"),
    ringOffsetColor: k.colors("--chakra-ring-offset-color"),
    ringInset: k.prop("--chakra-ring-inset"),
  },
  ie = {
    margin: k.spaceT("margin"),
    marginTop: k.spaceT("marginTop"),
    marginBlockStart: k.spaceT("marginBlockStart"),
    marginRight: k.spaceT("marginRight"),
    marginInlineEnd: k.spaceT("marginInlineEnd"),
    marginBottom: k.spaceT("marginBottom"),
    marginBlockEnd: k.spaceT("marginBlockEnd"),
    marginLeft: k.spaceT("marginLeft"),
    marginInlineStart: k.spaceT("marginInlineStart"),
    marginX: k.spaceT(["marginInlineStart", "marginInlineEnd"]),
    marginInline: k.spaceT("marginInline"),
    marginY: k.spaceT(["marginTop", "marginBottom"]),
    marginBlock: k.spaceT("marginBlock"),
    padding: k.space("padding"),
    paddingTop: k.space("paddingTop"),
    paddingBlockStart: k.space("paddingBlockStart"),
    paddingRight: k.space("paddingRight"),
    paddingBottom: k.space("paddingBottom"),
    paddingBlockEnd: k.space("paddingBlockEnd"),
    paddingLeft: k.space("paddingLeft"),
    paddingInlineStart: k.space("paddingInlineStart"),
    paddingInlineEnd: k.space("paddingInlineEnd"),
    paddingX: k.space(["paddingInlineStart", "paddingInlineEnd"]),
    paddingInline: k.space("paddingInline"),
    paddingY: k.space(["paddingTop", "paddingBottom"]),
    paddingBlock: k.space("paddingBlock"),
  };
Object.assign(ie, {
  m: ie.margin,
  mt: ie.marginTop,
  mr: ie.marginRight,
  me: ie.marginInlineEnd,
  marginEnd: ie.marginInlineEnd,
  mb: ie.marginBottom,
  ml: ie.marginLeft,
  ms: ie.marginInlineStart,
  marginStart: ie.marginInlineStart,
  mx: ie.marginX,
  my: ie.marginY,
  p: ie.padding,
  pt: ie.paddingTop,
  py: ie.paddingY,
  px: ie.paddingX,
  pb: ie.paddingBottom,
  pl: ie.paddingLeft,
  ps: ie.paddingInlineStart,
  paddingStart: ie.paddingInlineStart,
  pr: ie.paddingRight,
  pe: ie.paddingInlineEnd,
  paddingEnd: ie.paddingInlineEnd,
});
var BC = {
    textDecorationColor: k.colors("textDecorationColor"),
    textDecoration: !0,
    textDecor: { property: "textDecoration" },
    textDecorationLine: !0,
    textDecorationStyle: !0,
    textDecorationThickness: !0,
    textUnderlineOffset: !0,
    textShadow: k.shadows("textShadow"),
  },
  zC = {
    clipPath: !0,
    transform: k.propT("transform", Z.transform),
    transformOrigin: !0,
    translateX: k.spaceT("--chakra-translate-x"),
    translateY: k.spaceT("--chakra-translate-y"),
    skewX: k.degreeT("--chakra-skew-x"),
    skewY: k.degreeT("--chakra-skew-y"),
    scaleX: k.prop("--chakra-scale-x"),
    scaleY: k.prop("--chakra-scale-y"),
    scale: k.prop(["--chakra-scale-x", "--chakra-scale-y"]),
    rotate: k.degreeT("--chakra-rotate"),
  },
  $C = {
    transition: !0,
    transitionDelay: !0,
    animation: !0,
    willChange: !0,
    transitionDuration: k.prop("transitionDuration", "transition.duration"),
    transitionProperty: k.prop("transitionProperty", "transition.property"),
    transitionTimingFunction: k.prop(
      "transitionTimingFunction",
      "transition.easing"
    ),
  },
  UC = {
    fontFamily: k.prop("fontFamily", "fonts"),
    fontSize: k.prop("fontSize", "fontSizes", Z.px),
    fontWeight: k.prop("fontWeight", "fontWeights"),
    lineHeight: k.prop("lineHeight", "lineHeights"),
    letterSpacing: k.prop("letterSpacing", "letterSpacings"),
    textAlign: !0,
    fontStyle: !0,
    textIndent: !0,
    wordBreak: !0,
    overflowWrap: !0,
    textOverflow: !0,
    textTransform: !0,
    whiteSpace: !0,
    isTruncated: {
      transform(e) {
        if (e === !0)
          return {
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          };
      },
    },
    noOfLines: {
      static: {
        overflow: "hidden",
        textOverflow: "ellipsis",
        display: "-webkit-box",
        WebkitBoxOrient: "vertical",
        WebkitLineClamp: "var(--chakra-line-clamp)",
      },
      property: "--chakra-line-clamp",
    },
  },
  WC = {
    scrollBehavior: !0,
    scrollSnapAlign: !0,
    scrollSnapStop: !0,
    scrollSnapType: !0,
    scrollMargin: k.spaceT("scrollMargin"),
    scrollMarginTop: k.spaceT("scrollMarginTop"),
    scrollMarginBottom: k.spaceT("scrollMarginBottom"),
    scrollMarginLeft: k.spaceT("scrollMarginLeft"),
    scrollMarginRight: k.spaceT("scrollMarginRight"),
    scrollMarginX: k.spaceT(["scrollMarginLeft", "scrollMarginRight"]),
    scrollMarginY: k.spaceT(["scrollMarginTop", "scrollMarginBottom"]),
    scrollPadding: k.spaceT("scrollPadding"),
    scrollPaddingTop: k.spaceT("scrollPaddingTop"),
    scrollPaddingBottom: k.spaceT("scrollPaddingBottom"),
    scrollPaddingLeft: k.spaceT("scrollPaddingLeft"),
    scrollPaddingRight: k.spaceT("scrollPaddingRight"),
    scrollPaddingX: k.spaceT(["scrollPaddingLeft", "scrollPaddingRight"]),
    scrollPaddingY: k.spaceT(["scrollPaddingTop", "scrollPaddingBottom"]),
  };
function i0(e) {
  return qn(e) && e.reference ? e.reference : String(e);
}
var Ua = (e, ...t) => t.map(i0).join(` ${e} `).replace(/calc/g, ""),
  Xp = (...e) => `calc(${Ua("+", ...e)})`,
  Qp = (...e) => `calc(${Ua("-", ...e)})`,
  fc = (...e) => `calc(${Ua("*", ...e)})`,
  qp = (...e) => `calc(${Ua("/", ...e)})`,
  Jp = (e) => {
    const t = i0(e);
    return t != null && !Number.isNaN(parseFloat(t))
      ? String(t).startsWith("-")
        ? String(t).slice(1)
        : `-${t}`
      : fc(t, -1);
  },
  wo = Object.assign(
    (e) => ({
      add: (...t) => wo(Xp(e, ...t)),
      subtract: (...t) => wo(Qp(e, ...t)),
      multiply: (...t) => wo(fc(e, ...t)),
      divide: (...t) => wo(qp(e, ...t)),
      negate: () => wo(Jp(e)),
      toString: () => e.toString(),
    }),
    { add: Xp, subtract: Qp, multiply: fc, divide: qp, negate: Jp }
  );
function HC(e) {
  const t = parseFloat(e.toString()),
    n = e.toString().replace(String(t), "");
  return { unitless: !n, value: t, unit: n };
}
function eh(e) {
  if (e == null) return e;
  const { unitless: t } = HC(e);
  return t || typeof e == "number" ? `${e}px` : e;
}
function GC(e, t) {
  const n = ["@media screen"];
  return (
    e && n.push("and", `(min-width: ${eh(e)})`),
    t && n.push("and", `(max-width: ${eh(t)})`),
    n.join(" ")
  );
}
var Re = {
    hover: (e, t) => `${e}:hover ${t}, ${e}[data-hover] ${t}`,
    focus: (e, t) => `${e}:focus ${t}, ${e}[data-focus] ${t}`,
    focusVisible: (e, t) => `${e}:focus-visible ${t}`,
    focusWithin: (e, t) => `${e}:focus-within ${t}`,
    active: (e, t) => `${e}:active ${t}, ${e}[data-active] ${t}`,
    disabled: (e, t) => `${e}:disabled ${t}, ${e}[data-disabled] ${t}`,
    invalid: (e, t) => `${e}:invalid ${t}, ${e}[data-invalid] ${t}`,
    checked: (e, t) => `${e}:checked ${t}, ${e}[data-checked] ${t}`,
    indeterminate: (e, t) =>
      `${e}:indeterminate ${t}, ${e}[aria-checked=mixed] ${t}, ${e}[data-indeterminate] ${t}`,
    readOnly: (e, t) =>
      `${e}:read-only ${t}, ${e}[readonly] ${t}, ${e}[data-read-only] ${t}`,
    expanded: (e, t) =>
      `${e}:read-only ${t}, ${e}[aria-expanded=true] ${t}, ${e}[data-expanded] ${t}`,
    placeholderShown: (e, t) => `${e}:placeholder-shown ${t}`,
  },
  cn = (e) => s0((t) => e(t, "&"), "[role=group]", "[data-group]", ".group"),
  Zt = (e) => s0((t) => e(t, "~ &"), "[data-peer]", ".peer"),
  s0 = (e, ...t) => t.map(e).join(", "),
  If = {
    _hover: "&:hover, &[data-hover]",
    _active: "&:active, &[data-active]",
    _focus: "&:focus, &[data-focus]",
    _highlighted: "&[data-highlighted]",
    _focusWithin: "&:focus-within",
    _focusVisible: "&:focus-visible, &[data-focus-visible]",
    _disabled:
      "&:disabled, &[disabled], &[aria-disabled=true], &[data-disabled]",
    _readOnly: "&[aria-readonly=true], &[readonly], &[data-readonly]",
    _before: "&::before",
    _after: "&::after",
    _empty: "&:empty",
    _expanded: "&[aria-expanded=true], &[data-expanded]",
    _checked: "&[aria-checked=true], &[data-checked]",
    _grabbed: "&[aria-grabbed=true], &[data-grabbed]",
    _pressed: "&[aria-pressed=true], &[data-pressed]",
    _invalid: "&[aria-invalid=true], &[data-invalid]",
    _valid: "&[data-valid], &[data-state=valid]",
    _loading: "&[data-loading], &[aria-busy=true]",
    _selected: "&[aria-selected=true], &[data-selected]",
    _hidden: "&[hidden], &[data-hidden]",
    _autofill: "&:-webkit-autofill",
    _even: "&:nth-of-type(even)",
    _odd: "&:nth-of-type(odd)",
    _first: "&:first-of-type",
    _firstLetter: "&::first-letter",
    _last: "&:last-of-type",
    _notFirst: "&:not(:first-of-type)",
    _notLast: "&:not(:last-of-type)",
    _visited: "&:visited",
    _activeLink: "&[aria-current=page]",
    _activeStep: "&[aria-current=step]",
    _indeterminate:
      "&:indeterminate, &[aria-checked=mixed], &[data-indeterminate]",
    _groupHover: cn(Re.hover),
    _peerHover: Zt(Re.hover),
    _groupFocus: cn(Re.focus),
    _peerFocus: Zt(Re.focus),
    _groupFocusVisible: cn(Re.focusVisible),
    _peerFocusVisible: Zt(Re.focusVisible),
    _groupActive: cn(Re.active),
    _peerActive: Zt(Re.active),
    _groupDisabled: cn(Re.disabled),
    _peerDisabled: Zt(Re.disabled),
    _groupInvalid: cn(Re.invalid),
    _peerInvalid: Zt(Re.invalid),
    _groupChecked: cn(Re.checked),
    _peerChecked: Zt(Re.checked),
    _groupFocusWithin: cn(Re.focusWithin),
    _peerFocusWithin: Zt(Re.focusWithin),
    _peerPlaceholderShown: Zt(Re.placeholderShown),
    _placeholder: "&::placeholder",
    _placeholderShown: "&:placeholder-shown",
    _fullScreen: "&:fullscreen",
    _selection: "&::selection",
    _rtl: "[dir=rtl] &, &[dir=rtl]",
    _ltr: "[dir=ltr] &, &[dir=ltr]",
    _mediaDark: "@media (prefers-color-scheme: dark)",
    _mediaReduceMotion: "@media (prefers-reduced-motion: reduce)",
    _dark:
      ".chakra-ui-dark &:not([data-theme]),[data-theme=dark] &:not([data-theme]),&[data-theme=dark]",
    _light:
      ".chakra-ui-light &:not([data-theme]),[data-theme=light] &:not([data-theme]),&[data-theme=light]",
  },
  ZC = Object.keys(If),
  Df = qt(
    {},
    Rs,
    K,
    RC,
    aa,
    ht,
    MC,
    jC,
    AC,
    o0,
    VC,
    No,
    cc,
    ie,
    WC,
    UC,
    BC,
    zC,
    OC,
    $C
  );
Object.assign({}, ie, ht, aa, o0, No);
var KC = [...Object.keys(Df), ...ZC],
  YC = { ...Df, ...If },
  XC = (e) => e in YC,
  QC = (e) => (t) => {
    if (!t.__breakpoints) return e;
    const { isResponsive: n, toArrayValue: r, media: o } = t.__breakpoints,
      i = {};
    for (const s in e) {
      let a = Kn(e[s], t);
      if (a == null) continue;
      if (((a = qn(a) && n(a) ? r(a) : a), !Array.isArray(a))) {
        i[s] = a;
        continue;
      }
      const l = a.slice(0, o.length).length;
      for (let u = 0; u < l; u += 1) {
        const c = o == null ? void 0 : o[u];
        if (!c) {
          i[s] = a[u];
          continue;
        }
        (i[c] = i[c] || {}), a[u] != null && (i[c][s] = a[u]);
      }
    }
    return i;
  };
function qC(e) {
  const t = [];
  let n = "",
    r = !1;
  for (let o = 0; o < e.length; o++) {
    const i = e[o];
    i === "("
      ? ((r = !0), (n += i))
      : i === ")"
      ? ((r = !1), (n += i))
      : i === "," && !r
      ? (t.push(n), (n = ""))
      : (n += i);
  }
  return (n = n.trim()), n && t.push(n), t;
}
function JC(e) {
  return /^var\(--.+\)$/.test(e);
}
var e2 = (e, t) => e.startsWith("--") && typeof t == "string" && !JC(t),
  t2 = (e, t) => {
    var n, r;
    if (t == null) return t;
    const o = (l) => {
        var u, c;
        return (c = (u = e.__cssMap) == null ? void 0 : u[l]) == null
          ? void 0
          : c.varRef;
      },
      i = (l) => {
        var u;
        return (u = o(l)) != null ? u : l;
      },
      [s, a] = qC(t);
    return (t = (r = (n = o(s)) != null ? n : i(a)) != null ? r : i(t)), t;
  };
function n2(e) {
  const { configs: t = {}, pseudos: n = {}, theme: r } = e,
    o = (i, s = !1) => {
      var a, l, u;
      const c = Kn(i, r),
        f = QC(c)(r);
      let d = {};
      for (let p in f) {
        const S = f[p];
        let v = Kn(S, r);
        p in n && (p = n[p]), e2(p, v) && (v = t2(r, v));
        let P = t[p];
        if ((P === !0 && (P = { property: p }), qn(v))) {
          (d[p] = (a = d[p]) != null ? a : {}), (d[p] = qt({}, d[p], o(v, !0)));
          continue;
        }
        let g =
          (u =
            (l = P == null ? void 0 : P.transform) == null
              ? void 0
              : l.call(P, v, r, c)) != null
            ? u
            : v;
        g = P != null && P.processResult ? o(g, !0) : g;
        const h = Kn(P == null ? void 0 : P.property, r);
        if (!s && P != null && P.static) {
          const m = Kn(P.static, r);
          d = qt({}, d, m);
        }
        if (h && Array.isArray(h)) {
          for (const m of h) d[m] = g;
          continue;
        }
        if (h) {
          h === "&" && qn(g) ? (d = qt({}, d, g)) : (d[h] = g);
          continue;
        }
        if (qn(g)) {
          d = qt({}, d, g);
          continue;
        }
        d[p] = g;
      }
      return d;
    };
  return o;
}
var r2 = (e) => (t) => n2({ theme: t, pseudos: If, configs: Df })(e);
function o2(e, t) {
  if (Array.isArray(e)) return e;
  if (qn(e)) return t(e);
  if (e != null) return [e];
}
function i2(e, t) {
  for (let n = t + 1; n < e.length; n++) if (e[n] != null) return n;
  return -1;
}
function s2(e) {
  const t = e.__breakpoints;
  return function (r, o, i, s) {
    var a, l;
    if (!t) return;
    const u = {},
      c = o2(i, t.toArrayValue);
    if (!c) return u;
    const f = c.length,
      d = f === 1,
      p = !!r.parts;
    for (let S = 0; S < f; S++) {
      const v = t.details[S],
        P = t.details[i2(c, S)],
        g = GC(v.minW, P == null ? void 0 : P._minW),
        h = Kn((a = r[o]) == null ? void 0 : a[c[S]], s);
      if (h) {
        if (p) {
          (l = r.parts) == null ||
            l.forEach((m) => {
              qt(u, { [m]: d ? h[m] : { [g]: h[m] } });
            });
          continue;
        }
        if (!p) {
          d ? qt(u, h) : (u[g] = h);
          continue;
        }
        u[g] = h;
      }
    }
    return u;
  };
}
function a2(e) {
  return (t) => {
    var n;
    const { variant: r, size: o, theme: i } = t,
      s = s2(i);
    return qt(
      {},
      Kn((n = e.baseStyle) != null ? n : {}, t),
      s(e, "sizes", o, t),
      s(e, "variants", r, t)
    );
  };
}
function l2() {
  return !!(
    typeof window < "u" &&
    window.document &&
    window.document.createElement
  );
}
var u2 = l2();
function c2(e, t) {
  const n = {};
  return (
    Object.keys(e).forEach((r) => {
      t.includes(r) || (n[r] = e[r]);
    }),
    n
  );
}
function f2(e, t, n, r) {
  const o = typeof t == "string" ? t.split(".") : [t];
  for (r = 0; r < o.length && e; r += 1) e = e[o[r]];
  return e === void 0 ? n : e;
}
var d2 = (e) => {
    const t = new WeakMap();
    return (r, o, i, s) => {
      if (typeof r > "u") return e(r, o, i);
      t.has(r) || t.set(r, new Map());
      const a = t.get(r);
      if (a.has(o)) return a.get(o);
      const l = e(r, o, i, s);
      return a.set(o, l), l;
    };
  },
  p2 = d2(f2);
function a0(e, t) {
  const n = {};
  return (
    Object.keys(e).forEach((r) => {
      const o = e[r];
      t(o, r, e) && (n[r] = o);
    }),
    n
  );
}
var l0 = (e) => a0(e, (t) => t != null);
function h2(e) {
  return typeof e == "function";
}
function m2(e, ...t) {
  return h2(e) ? e(...t) : e;
}
function g2(...e) {
  return function (n) {
    e.some((r) => (r == null || r(n), n == null ? void 0 : n.defaultPrevented));
  };
}
var v2 = typeof Element < "u",
  y2 = typeof Map == "function",
  S2 = typeof Set == "function",
  w2 = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;
function Ms(e, t) {
  if (e === t) return !0;
  if (e && t && typeof e == "object" && typeof t == "object") {
    if (e.constructor !== t.constructor) return !1;
    var n, r, o;
    if (Array.isArray(e)) {
      if (((n = e.length), n != t.length)) return !1;
      for (r = n; r-- !== 0; ) if (!Ms(e[r], t[r])) return !1;
      return !0;
    }
    var i;
    if (y2 && e instanceof Map && t instanceof Map) {
      if (e.size !== t.size) return !1;
      for (i = e.entries(); !(r = i.next()).done; )
        if (!t.has(r.value[0])) return !1;
      for (i = e.entries(); !(r = i.next()).done; )
        if (!Ms(r.value[1], t.get(r.value[0]))) return !1;
      return !0;
    }
    if (S2 && e instanceof Set && t instanceof Set) {
      if (e.size !== t.size) return !1;
      for (i = e.entries(); !(r = i.next()).done; )
        if (!t.has(r.value[0])) return !1;
      return !0;
    }
    if (w2 && ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) {
      if (((n = e.length), n != t.length)) return !1;
      for (r = n; r-- !== 0; ) if (e[r] !== t[r]) return !1;
      return !0;
    }
    if (e.constructor === RegExp)
      return e.source === t.source && e.flags === t.flags;
    if (
      e.valueOf !== Object.prototype.valueOf &&
      typeof e.valueOf == "function" &&
      typeof t.valueOf == "function"
    )
      return e.valueOf() === t.valueOf();
    if (
      e.toString !== Object.prototype.toString &&
      typeof e.toString == "function" &&
      typeof t.toString == "function"
    )
      return e.toString() === t.toString();
    if (((o = Object.keys(e)), (n = o.length), n !== Object.keys(t).length))
      return !1;
    for (r = n; r-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(t, o[r])) return !1;
    if (v2 && e instanceof Element) return !1;
    for (r = n; r-- !== 0; )
      if (
        !(
          (o[r] === "_owner" || o[r] === "__v" || o[r] === "__o") &&
          e.$$typeof
        ) &&
        !Ms(e[o[r]], t[o[r]])
      )
        return !1;
    return !0;
  }
  return e !== e && t !== t;
}
var x2 = function (t, n) {
  try {
    return Ms(t, n);
  } catch (r) {
    if ((r.message || "").match(/stack|recursion/i))
      return console.warn("react-fast-compare cannot handle circular refs"), !1;
    throw r;
  }
};
function k2(e, t = {}) {
  var n;
  const { styleConfig: r, ...o } = t,
    { theme: i, colorMode: s } = cC(),
    a = e ? p2(i, `components.${e}`) : void 0,
    l = r || a,
    u = qt(
      { theme: i, colorMode: s },
      (n = l == null ? void 0 : l.defaultProps) != null ? n : {},
      l0(c2(o, ["children"]))
    ),
    c = w.useRef({});
  if (l) {
    const d = a2(l)(u);
    x2(c.current, d) || (c.current = d);
  }
  return c.current;
}
function C2(e, t = {}) {
  return k2(e, t);
}
var P2 = new Set([
    ...KC,
    "textStyle",
    "layerStyle",
    "apply",
    "noOfLines",
    "focusBorderColor",
    "errorBorderColor",
    "as",
    "__css",
    "css",
    "sx",
  ]),
  T2 = new Set(["htmlWidth", "htmlHeight", "htmlSize", "htmlTranslate"]);
function E2(e) {
  return T2.has(e) || !P2.has(e);
}
function b2(e, ...t) {
  if (e == null)
    throw new TypeError("Cannot convert undefined or null to object");
  const n = { ...e };
  for (const r of t)
    if (r != null)
      for (const o in r)
        Object.prototype.hasOwnProperty.call(r, o) &&
          (o in n && delete n[o], (n[o] = r[o]));
  return n;
}
var _2 =
    /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
  R2 = Kv(function (e) {
    return (
      _2.test(e) ||
      (e.charCodeAt(0) === 111 &&
        e.charCodeAt(1) === 110 &&
        e.charCodeAt(2) < 91)
    );
  }),
  M2 = R2,
  A2 = function (t) {
    return t !== "theme";
  },
  th = function (t) {
    return typeof t == "string" && t.charCodeAt(0) > 96 ? M2 : A2;
  },
  nh = function (t, n, r) {
    var o;
    if (n) {
      var i = n.shouldForwardProp;
      o =
        t.__emotion_forwardProp && i
          ? function (s) {
              return t.__emotion_forwardProp(s) && i(s);
            }
          : i;
    }
    return typeof o != "function" && r && (o = t.__emotion_forwardProp), o;
  },
  O2 = function (t) {
    var n = t.cache,
      r = t.serialized,
      o = t.isStringTag;
    return (
      Xv(n, r, o),
      eC(function () {
        return Hk(n, r, o);
      }),
      null
    );
  },
  L2 = function e(t, n) {
    var r = t.__emotion_real === t,
      o = (r && t.__emotion_base) || t,
      i,
      s;
    n !== void 0 && ((i = n.label), (s = n.target));
    var a = nh(t, n, r),
      l = a || th(o),
      u = !l("as");
    return function () {
      var c = arguments,
        f =
          r && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
      if (
        (i !== void 0 && f.push("label:" + i + ";"),
        c[0] == null || c[0].raw === void 0)
      )
        f.push.apply(f, c);
      else {
        f.push(c[0][0]);
        for (var d = c.length, p = 1; p < d; p++) f.push(c[p], c[0][p]);
      }
      var S = tC(function (v, P, g) {
        var h = (u && v.as) || o,
          m = "",
          C = [],
          E = v;
        if (v.theme == null) {
          E = {};
          for (var R in v) E[R] = v[R];
          E.theme = w.useContext(Jv);
        }
        typeof v.className == "string"
          ? (m = Wk(P.registered, C, v.className))
          : v.className != null && (m = v.className + " ");
        var b = Qk(f.concat(C), P.registered, E);
        (m += P.key + "-" + b.name), s !== void 0 && (m += " " + s);
        var _ = u && a === void 0 ? th(h) : l,
          D = {};
        for (var N in v) (u && N === "as") || (_(N) && (D[N] = v[N]));
        return (
          (D.className = m),
          (D.ref = g),
          w.createElement(
            w.Fragment,
            null,
            w.createElement(O2, {
              cache: P,
              serialized: b,
              isStringTag: typeof h == "string",
            }),
            w.createElement(h, D)
          )
        );
      });
      return (
        (S.displayName =
          i !== void 0
            ? i
            : "Styled(" +
              (typeof o == "string"
                ? o
                : o.displayName || o.name || "Component") +
              ")"),
        (S.defaultProps = t.defaultProps),
        (S.__emotion_real = S),
        (S.__emotion_base = o),
        (S.__emotion_styles = f),
        (S.__emotion_forwardProp = a),
        Object.defineProperty(S, "toString", {
          value: function () {
            return "." + s;
          },
        }),
        (S.withComponent = function (v, P) {
          return e(v, Jr({}, n, P, { shouldForwardProp: nh(S, P, !0) })).apply(
            void 0,
            f
          );
        }),
        S
      );
    };
  },
  F2 = [
    "a",
    "abbr",
    "address",
    "area",
    "article",
    "aside",
    "audio",
    "b",
    "base",
    "bdi",
    "bdo",
    "big",
    "blockquote",
    "body",
    "br",
    "button",
    "canvas",
    "caption",
    "cite",
    "code",
    "col",
    "colgroup",
    "data",
    "datalist",
    "dd",
    "del",
    "details",
    "dfn",
    "dialog",
    "div",
    "dl",
    "dt",
    "em",
    "embed",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "head",
    "header",
    "hgroup",
    "hr",
    "html",
    "i",
    "iframe",
    "img",
    "input",
    "ins",
    "kbd",
    "keygen",
    "label",
    "legend",
    "li",
    "link",
    "main",
    "map",
    "mark",
    "marquee",
    "menu",
    "menuitem",
    "meta",
    "meter",
    "nav",
    "noscript",
    "object",
    "ol",
    "optgroup",
    "option",
    "output",
    "p",
    "param",
    "picture",
    "pre",
    "progress",
    "q",
    "rp",
    "rt",
    "ruby",
    "s",
    "samp",
    "script",
    "section",
    "select",
    "small",
    "source",
    "span",
    "strong",
    "style",
    "sub",
    "summary",
    "sup",
    "table",
    "tbody",
    "td",
    "textarea",
    "tfoot",
    "th",
    "thead",
    "time",
    "title",
    "tr",
    "track",
    "u",
    "ul",
    "var",
    "video",
    "wbr",
    "circle",
    "clipPath",
    "defs",
    "ellipse",
    "foreignObject",
    "g",
    "image",
    "line",
    "linearGradient",
    "mask",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "radialGradient",
    "rect",
    "stop",
    "svg",
    "text",
    "tspan",
  ],
  la = L2.bind();
F2.forEach(function (e) {
  la[e] = la(e);
});
var rh,
  I2 = (rh = la.default) != null ? rh : la,
  D2 =
    ({ baseStyle: e }) =>
    (t) => {
      const { theme: n, css: r, __css: o, sx: i, ...s } = t,
        a = a0(s, (f, d) => XC(d)),
        l = m2(e, t),
        u = b2({}, o, l, l0(a), i),
        c = r2(u)(t.theme);
      return r ? [c, r] : c;
    };
function Ul(e, t) {
  const { baseStyle: n, ...r } = t ?? {};
  r.shouldForwardProp || (r.shouldForwardProp = E2);
  const o = D2({ baseStyle: n }),
    i = I2(e, r)(o);
  return L.forwardRef(function (l, u) {
    const { colorMode: c, forced: f } = n0();
    return L.createElement(i, { ref: u, "data-theme": f ? c : void 0, ...l });
  });
}
function N2() {
  const e = new Map();
  return new Proxy(Ul, {
    apply(t, n, r) {
      return Ul(...r);
    },
    get(t, n) {
      return e.has(n) || e.set(n, Ul(n)), e.get(n);
    },
  });
}
var Ti = N2();
function Wa(e) {
  return w.forwardRef(e);
}
const u0 = w.createContext({
    transformPagePoint: (e) => e,
    isStatic: !1,
    reducedMotion: "never",
  }),
  Ha = w.createContext({}),
  Ga = w.createContext(null),
  Za = typeof document < "u",
  ua = Za ? w.useLayoutEffect : w.useEffect,
  c0 = w.createContext({ strict: !1 });
function V2(e, t, n, r) {
  const { visualElement: o } = w.useContext(Ha),
    i = w.useContext(c0),
    s = w.useContext(Ga),
    a = w.useContext(u0).reducedMotion,
    l = w.useRef();
  (r = r || i.renderer),
    !l.current &&
      r &&
      (l.current = r(e, {
        visualState: t,
        parent: o,
        props: n,
        presenceContext: s,
        blockInitialAnimation: s ? s.initial === !1 : !1,
        reducedMotionConfig: a,
      }));
  const u = l.current;
  return (
    w.useInsertionEffect(() => {
      u && u.update(n, s);
    }),
    ua(() => {
      u && u.render();
    }),
    w.useEffect(() => {
      u && u.updateFeatures();
    }),
    (window.HandoffAppearAnimations ? ua : w.useEffect)(() => {
      u && u.animationState && u.animationState.animateChanges();
    }),
    u
  );
}
function Ar(e) {
  return (
    typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current")
  );
}
function j2(e, t, n) {
  return w.useCallback(
    (r) => {
      r && e.mount && e.mount(r),
        t && (r ? t.mount(r) : t.unmount()),
        n && (typeof n == "function" ? n(r) : Ar(n) && (n.current = r));
    },
    [t]
  );
}
function fi(e) {
  return typeof e == "string" || Array.isArray(e);
}
function Ka(e) {
  return typeof e == "object" && typeof e.start == "function";
}
const Nf = [
    "animate",
    "whileInView",
    "whileFocus",
    "whileHover",
    "whileTap",
    "whileDrag",
    "exit",
  ],
  Vf = ["initial", ...Nf];
function Ya(e) {
  return Ka(e.animate) || Vf.some((t) => fi(e[t]));
}
function f0(e) {
  return !!(Ya(e) || e.variants);
}
function B2(e, t) {
  if (Ya(e)) {
    const { initial: n, animate: r } = e;
    return {
      initial: n === !1 || fi(n) ? n : void 0,
      animate: fi(r) ? r : void 0,
    };
  }
  return e.inherit !== !1 ? t : {};
}
function z2(e) {
  const { initial: t, animate: n } = B2(e, w.useContext(Ha));
  return w.useMemo(() => ({ initial: t, animate: n }), [oh(t), oh(n)]);
}
function oh(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const ih = {
    animation: [
      "animate",
      "variants",
      "whileHover",
      "whileTap",
      "exit",
      "whileInView",
      "whileFocus",
      "whileDrag",
    ],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"],
  },
  di = {};
for (const e in ih) di[e] = { isEnabled: (t) => ih[e].some((n) => !!t[n]) };
function $2(e) {
  for (const t in e) di[t] = { ...di[t], ...e[t] };
}
function jf(e) {
  const t = w.useRef(null);
  return t.current === null && (t.current = e()), t.current;
}
const Vo = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
let U2 = 1;
function W2() {
  return jf(() => {
    if (Vo.hasEverUpdated) return U2++;
  });
}
const Bf = w.createContext({}),
  d0 = w.createContext({}),
  H2 = Symbol.for("motionComponentSymbol");
function G2({
  preloadedFeatures: e,
  createVisualElement: t,
  useRender: n,
  useVisualState: r,
  Component: o,
}) {
  e && $2(e);
  function i(a, l) {
    let u;
    const c = { ...w.useContext(u0), ...a, layoutId: Z2(a) },
      { isStatic: f } = c,
      d = z2(a),
      p = f ? void 0 : W2(),
      S = r(a, f);
    if (!f && Za) {
      d.visualElement = V2(o, S, c, t);
      const v = w.useContext(d0),
        P = w.useContext(c0).strict;
      d.visualElement && (u = d.visualElement.loadFeatures(c, P, e, p, v));
    }
    return w.createElement(
      Ha.Provider,
      { value: d },
      u && d.visualElement
        ? w.createElement(u, { visualElement: d.visualElement, ...c })
        : null,
      n(o, a, p, j2(S, d.visualElement, l), S, f, d.visualElement)
    );
  }
  const s = w.forwardRef(i);
  return (s[H2] = o), s;
}
function Z2({ layoutId: e }) {
  const t = w.useContext(Bf).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function K2(e) {
  function t(r, o = {}) {
    return G2(e(r, o));
  }
  if (typeof Proxy > "u") return t;
  const n = new Map();
  return new Proxy(t, {
    get: (r, o) => (n.has(o) || n.set(o, t(o)), n.get(o)),
  });
}
const Y2 = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view",
];
function zf(e) {
  return typeof e != "string" || e.includes("-")
    ? !1
    : !!(Y2.indexOf(e) > -1 || /[A-Z]/.test(e));
}
const ca = {};
function X2(e) {
  Object.assign(ca, e);
}
const Xa = [
    "transformPerspective",
    "x",
    "y",
    "z",
    "translateX",
    "translateY",
    "translateZ",
    "scale",
    "scaleX",
    "scaleY",
    "rotate",
    "rotateX",
    "rotateY",
    "rotateZ",
    "skew",
    "skewX",
    "skewY",
  ],
  cr = new Set(Xa);
function p0(e, { layout: t, layoutId: n }) {
  return (
    cr.has(e) ||
    e.startsWith("origin") ||
    ((t || n !== void 0) && (!!ca[e] || e === "opacity"))
  );
}
const et = (e) => !!(e && e.getVelocity),
  Q2 = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective",
  },
  q2 = Xa.length;
function J2(
  e,
  { enableHardwareAcceleration: t = !0, allowTransformNone: n = !0 },
  r,
  o
) {
  let i = "";
  for (let s = 0; s < q2; s++) {
    const a = Xa[s];
    if (e[a] !== void 0) {
      const l = Q2[a] || a;
      i += `${l}(${e[a]}) `;
    }
  }
  return (
    t && !e.z && (i += "translateZ(0)"),
    (i = i.trim()),
    o ? (i = o(e, r ? "" : i)) : n && r && (i = "none"),
    i
  );
}
const h0 = (e) => (t) => typeof t == "string" && t.startsWith(e),
  m0 = h0("--"),
  dc = h0("var(--"),
  eP = (e, t) => (t && typeof e == "number" ? t.transform(e) : e),
  sr = (e, t, n) => Math.min(Math.max(n, e), t),
  fr = {
    test: (e) => typeof e == "number",
    parse: parseFloat,
    transform: (e) => e,
  },
  jo = { ...fr, transform: (e) => sr(0, 1, e) },
  as = { ...fr, default: 1 },
  Bo = (e) => Math.round(e * 1e5) / 1e5,
  pi = /(-)?([\d]*\.?[\d])+/g,
  pc =
    /(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,
  tP =
    /^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
function Ei(e) {
  return typeof e == "string";
}
const bi = (e) => ({
    test: (t) => Ei(t) && t.endsWith(e) && t.split(" ").length === 1,
    parse: parseFloat,
    transform: (t) => `${t}${e}`,
  }),
  fn = bi("deg"),
  Ut = bi("%"),
  V = bi("px"),
  nP = bi("vh"),
  rP = bi("vw"),
  sh = {
    ...Ut,
    parse: (e) => Ut.parse(e) / 100,
    transform: (e) => Ut.transform(e * 100),
  },
  ah = { ...fr, transform: Math.round },
  g0 = {
    borderWidth: V,
    borderTopWidth: V,
    borderRightWidth: V,
    borderBottomWidth: V,
    borderLeftWidth: V,
    borderRadius: V,
    radius: V,
    borderTopLeftRadius: V,
    borderTopRightRadius: V,
    borderBottomRightRadius: V,
    borderBottomLeftRadius: V,
    width: V,
    maxWidth: V,
    height: V,
    maxHeight: V,
    size: V,
    top: V,
    right: V,
    bottom: V,
    left: V,
    padding: V,
    paddingTop: V,
    paddingRight: V,
    paddingBottom: V,
    paddingLeft: V,
    margin: V,
    marginTop: V,
    marginRight: V,
    marginBottom: V,
    marginLeft: V,
    rotate: fn,
    rotateX: fn,
    rotateY: fn,
    rotateZ: fn,
    scale: as,
    scaleX: as,
    scaleY: as,
    scaleZ: as,
    skew: fn,
    skewX: fn,
    skewY: fn,
    distance: V,
    translateX: V,
    translateY: V,
    translateZ: V,
    x: V,
    y: V,
    z: V,
    perspective: V,
    transformPerspective: V,
    opacity: jo,
    originX: sh,
    originY: sh,
    originZ: V,
    zIndex: ah,
    fillOpacity: jo,
    strokeOpacity: jo,
    numOctaves: ah,
  };
function $f(e, t, n, r) {
  const { style: o, vars: i, transform: s, transformOrigin: a } = e;
  let l = !1,
    u = !1,
    c = !0;
  for (const f in t) {
    const d = t[f];
    if (m0(f)) {
      i[f] = d;
      continue;
    }
    const p = g0[f],
      S = eP(d, p);
    if (cr.has(f)) {
      if (((l = !0), (s[f] = S), !c)) continue;
      d !== (p.default || 0) && (c = !1);
    } else f.startsWith("origin") ? ((u = !0), (a[f] = S)) : (o[f] = S);
  }
  if (
    (t.transform ||
      (l || r
        ? (o.transform = J2(e.transform, n, c, r))
        : o.transform && (o.transform = "none")),
    u)
  ) {
    const { originX: f = "50%", originY: d = "50%", originZ: p = 0 } = a;
    o.transformOrigin = `${f} ${d} ${p}`;
  }
}
const Uf = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} });
function v0(e, t, n) {
  for (const r in t) !et(t[r]) && !p0(r, n) && (e[r] = t[r]);
}
function oP({ transformTemplate: e }, t, n) {
  return w.useMemo(() => {
    const r = Uf();
    return (
      $f(r, t, { enableHardwareAcceleration: !n }, e),
      Object.assign({}, r.vars, r.style)
    );
  }, [t]);
}
function iP(e, t, n) {
  const r = e.style || {},
    o = {};
  return (
    v0(o, r, e),
    Object.assign(o, oP(e, t, n)),
    e.transformValues ? e.transformValues(o) : o
  );
}
function sP(e, t, n) {
  const r = {},
    o = iP(e, t, n);
  return (
    e.drag &&
      e.dragListener !== !1 &&
      ((r.draggable = !1),
      (o.userSelect = o.WebkitUserSelect = o.WebkitTouchCallout = "none"),
      (o.touchAction =
        e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`)),
    e.tabIndex === void 0 &&
      (e.onTap || e.onTapStart || e.whileTap) &&
      (r.tabIndex = 0),
    (r.style = o),
    r
  );
}
const aP = new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "transformValues",
  "custom",
  "inherit",
  "onLayoutAnimationStart",
  "onLayoutAnimationComplete",
  "onLayoutMeasure",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "ignoreStrict",
  "viewport",
]);
function fa(e) {
  return (
    e.startsWith("while") ||
    (e.startsWith("drag") && e !== "draggable") ||
    e.startsWith("layout") ||
    e.startsWith("onTap") ||
    e.startsWith("onPan") ||
    aP.has(e)
  );
}
let y0 = (e) => !fa(e);
function lP(e) {
  e && (y0 = (t) => (t.startsWith("on") ? !fa(t) : e(t)));
}
try {
  lP(require("@emotion/is-prop-valid").default);
} catch {}
function uP(e, t, n) {
  const r = {};
  for (const o in e)
    (o === "values" && typeof e.values == "object") ||
      ((y0(o) ||
        (n === !0 && fa(o)) ||
        (!t && !fa(o)) ||
        (e.draggable && o.startsWith("onDrag"))) &&
        (r[o] = e[o]));
  return r;
}
function lh(e, t, n) {
  return typeof e == "string" ? e : V.transform(t + n * e);
}
function cP(e, t, n) {
  const r = lh(t, e.x, e.width),
    o = lh(n, e.y, e.height);
  return `${r} ${o}`;
}
const fP = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
  dP = { offset: "strokeDashoffset", array: "strokeDasharray" };
function pP(e, t, n = 1, r = 0, o = !0) {
  e.pathLength = 1;
  const i = o ? fP : dP;
  e[i.offset] = V.transform(-r);
  const s = V.transform(t),
    a = V.transform(n);
  e[i.array] = `${s} ${a}`;
}
function Wf(
  e,
  {
    attrX: t,
    attrY: n,
    originX: r,
    originY: o,
    pathLength: i,
    pathSpacing: s = 1,
    pathOffset: a = 0,
    ...l
  },
  u,
  c,
  f
) {
  if (($f(e, l, u, f), c)) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  (e.attrs = e.style), (e.style = {});
  const { attrs: d, style: p, dimensions: S } = e;
  d.transform && (S && (p.transform = d.transform), delete d.transform),
    S &&
      (r !== void 0 || o !== void 0 || p.transform) &&
      (p.transformOrigin = cP(
        S,
        r !== void 0 ? r : 0.5,
        o !== void 0 ? o : 0.5
      )),
    t !== void 0 && (d.x = t),
    n !== void 0 && (d.y = n),
    i !== void 0 && pP(d, i, s, a, !1);
}
const S0 = () => ({ ...Uf(), attrs: {} }),
  Hf = (e) => typeof e == "string" && e.toLowerCase() === "svg";
function hP(e, t, n, r) {
  const o = w.useMemo(() => {
    const i = S0();
    return (
      Wf(i, t, { enableHardwareAcceleration: !1 }, Hf(r), e.transformTemplate),
      { ...i.attrs, style: { ...i.style } }
    );
  }, [t]);
  if (e.style) {
    const i = {};
    v0(i, e.style, e), (o.style = { ...i, ...o.style });
  }
  return o;
}
function mP(e = !1) {
  return (n, r, o, i, { latestValues: s }, a) => {
    const u = (zf(n) ? hP : sP)(r, s, a, n),
      f = { ...uP(r, typeof n == "string", e), ...u, ref: i },
      { children: d } = r,
      p = w.useMemo(() => (et(d) ? d.get() : d), [d]);
    return (
      o && (f["data-projection-id"] = o),
      w.createElement(n, { ...f, children: p })
    );
  };
}
const Gf = (e) => e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
function w0(e, { style: t, vars: n }, r, o) {
  Object.assign(e.style, t, o && o.getProjectionStyles(r));
  for (const i in n) e.style.setProperty(i, n[i]);
}
const x0 = new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust",
]);
function k0(e, t, n, r) {
  w0(e, t, void 0, r);
  for (const o in t.attrs) e.setAttribute(x0.has(o) ? o : Gf(o), t.attrs[o]);
}
function Zf(e, t) {
  const { style: n } = e,
    r = {};
  for (const o in n)
    (et(n[o]) || (t.style && et(t.style[o])) || p0(o, e)) && (r[o] = n[o]);
  return r;
}
function C0(e, t) {
  const n = Zf(e, t);
  for (const r in e)
    if (et(e[r]) || et(t[r])) {
      const o = r === "x" || r === "y" ? "attr" + r.toUpperCase() : r;
      n[o] = e[r];
    }
  return n;
}
function Kf(e, t, n, r = {}, o = {}) {
  return (
    typeof t == "function" && (t = t(n !== void 0 ? n : e.custom, r, o)),
    typeof t == "string" && (t = e.variants && e.variants[t]),
    typeof t == "function" && (t = t(n !== void 0 ? n : e.custom, r, o)),
    t
  );
}
const da = (e) => Array.isArray(e),
  gP = (e) => !!(e && typeof e == "object" && e.mix && e.toValue),
  vP = (e) => (da(e) ? e[e.length - 1] || 0 : e);
function As(e) {
  const t = et(e) ? e.get() : e;
  return gP(t) ? t.toValue() : t;
}
function yP(
  { scrapeMotionValuesFromProps: e, createRenderState: t, onMount: n },
  r,
  o,
  i
) {
  const s = { latestValues: SP(r, o, i, e), renderState: t() };
  return n && (s.mount = (a) => n(r, a, s)), s;
}
const P0 = (e) => (t, n) => {
  const r = w.useContext(Ha),
    o = w.useContext(Ga),
    i = () => yP(e, t, r, o);
  return n ? i() : jf(i);
};
function SP(e, t, n, r) {
  const o = {},
    i = r(e, {});
  for (const d in i) o[d] = As(i[d]);
  let { initial: s, animate: a } = e;
  const l = Ya(e),
    u = f0(e);
  t &&
    u &&
    !l &&
    e.inherit !== !1 &&
    (s === void 0 && (s = t.initial), a === void 0 && (a = t.animate));
  let c = n ? n.initial === !1 : !1;
  c = c || s === !1;
  const f = c ? a : s;
  return (
    f &&
      typeof f != "boolean" &&
      !Ka(f) &&
      (Array.isArray(f) ? f : [f]).forEach((p) => {
        const S = Kf(e, p);
        if (!S) return;
        const { transitionEnd: v, transition: P, ...g } = S;
        for (const h in g) {
          let m = g[h];
          if (Array.isArray(m)) {
            const C = c ? m.length - 1 : 0;
            m = m[C];
          }
          m !== null && (o[h] = m);
        }
        for (const h in v) o[h] = v[h];
      }),
    o
  );
}
const wP = {
    useVisualState: P0({
      scrapeMotionValuesFromProps: C0,
      createRenderState: S0,
      onMount: (e, t, { renderState: n, latestValues: r }) => {
        try {
          n.dimensions =
            typeof t.getBBox == "function"
              ? t.getBBox()
              : t.getBoundingClientRect();
        } catch {
          n.dimensions = { x: 0, y: 0, width: 0, height: 0 };
        }
        Wf(
          n,
          r,
          { enableHardwareAcceleration: !1 },
          Hf(t.tagName),
          e.transformTemplate
        ),
          k0(t, n);
      },
    }),
  },
  xP = {
    useVisualState: P0({
      scrapeMotionValuesFromProps: Zf,
      createRenderState: Uf,
    }),
  };
function kP(e, { forwardMotionProps: t = !1 }, n, r) {
  return {
    ...(zf(e) ? wP : xP),
    preloadedFeatures: n,
    useRender: mP(t),
    createVisualElement: r,
    Component: e,
  };
}
function Jt(e, t, n, r = { passive: !0 }) {
  return e.addEventListener(t, n, r), () => e.removeEventListener(t, n);
}
const T0 = (e) =>
  e.pointerType === "mouse"
    ? typeof e.button != "number" || e.button <= 0
    : e.isPrimary !== !1;
function Qa(e, t = "page") {
  return { point: { x: e[t + "X"], y: e[t + "Y"] } };
}
const CP = (e) => (t) => T0(t) && e(t, Qa(t));
function tn(e, t, n, r) {
  return Jt(e, t, CP(n), r);
}
const PP = (e, t) => (n) => t(e(n)),
  bn = (...e) => e.reduce(PP);
function E0(e) {
  let t = null;
  return () => {
    const n = () => {
      t = null;
    };
    return t === null ? ((t = e), n) : !1;
  };
}
const uh = E0("dragHorizontal"),
  ch = E0("dragVertical");
function b0(e) {
  let t = !1;
  if (e === "y") t = ch();
  else if (e === "x") t = uh();
  else {
    const n = uh(),
      r = ch();
    n && r
      ? (t = () => {
          n(), r();
        })
      : (n && n(), r && r());
  }
  return t;
}
function _0() {
  const e = b0(!0);
  return e ? (e(), !1) : !0;
}
class Dn {
  constructor(t) {
    (this.isMounted = !1), (this.node = t);
  }
  update() {}
}
function TP(e) {
  let t = [],
    n = [],
    r = 0,
    o = !1,
    i = !1;
  const s = new WeakSet(),
    a = {
      schedule: (l, u = !1, c = !1) => {
        const f = c && o,
          d = f ? t : n;
        return (
          u && s.add(l),
          d.indexOf(l) === -1 && (d.push(l), f && o && (r = t.length)),
          l
        );
      },
      cancel: (l) => {
        const u = n.indexOf(l);
        u !== -1 && n.splice(u, 1), s.delete(l);
      },
      process: (l) => {
        if (o) {
          i = !0;
          return;
        }
        if (((o = !0), ([t, n] = [n, t]), (n.length = 0), (r = t.length), r))
          for (let u = 0; u < r; u++) {
            const c = t[u];
            c(l), s.has(c) && (a.schedule(c), e());
          }
        (o = !1), i && ((i = !1), a.process(l));
      },
    };
  return a;
}
const Be = { delta: 0, timestamp: 0, isProcessing: !1 },
  EP = 40;
let hc = !0,
  hi = !1;
const _i = ["read", "update", "preRender", "render", "postRender"],
  qa = _i.reduce((e, t) => ((e[t] = TP(() => (hi = !0))), e), {}),
  ce = _i.reduce((e, t) => {
    const n = qa[t];
    return (e[t] = (r, o = !1, i = !1) => (hi || _P(), n.schedule(r, o, i))), e;
  }, {}),
  An = _i.reduce((e, t) => ((e[t] = qa[t].cancel), e), {}),
  Wl = _i.reduce((e, t) => ((e[t] = () => qa[t].process(Be)), e), {}),
  bP = (e) => qa[e].process(Be),
  R0 = (e) => {
    (hi = !1),
      (Be.delta = hc ? 1e3 / 60 : Math.max(Math.min(e - Be.timestamp, EP), 1)),
      (Be.timestamp = e),
      (Be.isProcessing = !0),
      _i.forEach(bP),
      (Be.isProcessing = !1),
      hi && ((hc = !1), requestAnimationFrame(R0));
  },
  _P = () => {
    (hi = !0), (hc = !0), Be.isProcessing || requestAnimationFrame(R0);
  };
function fh(e, t) {
  const n = "pointer" + (t ? "enter" : "leave"),
    r = "onHover" + (t ? "Start" : "End"),
    o = (i, s) => {
      if (i.type === "touch" || _0()) return;
      const a = e.getProps();
      e.animationState &&
        a.whileHover &&
        e.animationState.setActive("whileHover", t),
        a[r] && ce.update(() => a[r](i, s));
    };
  return tn(e.current, n, o, { passive: !e.getProps()[r] });
}
class RP extends Dn {
  mount() {
    this.unmount = bn(fh(this.node, !0), fh(this.node, !1));
  }
  unmount() {}
}
class MP extends Dn {
  constructor() {
    super(...arguments), (this.isActive = !1);
  }
  onFocus() {
    let t = !1;
    try {
      t = this.node.current.matches(":focus-visible");
    } catch {
      t = !0;
    }
    !t ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !0),
      (this.isActive = !0));
  }
  onBlur() {
    !this.isActive ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !1),
      (this.isActive = !1));
  }
  mount() {
    this.unmount = bn(
      Jt(this.node.current, "focus", () => this.onFocus()),
      Jt(this.node.current, "blur", () => this.onBlur())
    );
  }
  unmount() {}
}
const M0 = (e, t) => (t ? (e === t ? !0 : M0(e, t.parentElement)) : !1),
  be = (e) => e;
function Hl(e, t) {
  if (!t) return;
  const n = new PointerEvent("pointer" + e);
  t(n, Qa(n));
}
class AP extends Dn {
  constructor() {
    super(...arguments),
      (this.removeStartListeners = be),
      (this.removeEndListeners = be),
      (this.removeAccessibleListeners = be),
      (this.startPointerPress = (t, n) => {
        if ((this.removeEndListeners(), this.isPressing)) return;
        const r = this.node.getProps(),
          i = tn(
            window,
            "pointerup",
            (a, l) => {
              if (!this.checkPressEnd()) return;
              const { onTap: u, onTapCancel: c } = this.node.getProps();
              ce.update(() => {
                M0(this.node.current, a.target) ? u && u(a, l) : c && c(a, l);
              });
            },
            { passive: !(r.onTap || r.onPointerUp) }
          ),
          s = tn(window, "pointercancel", (a, l) => this.cancelPress(a, l), {
            passive: !(r.onTapCancel || r.onPointerCancel),
          });
        (this.removeEndListeners = bn(i, s)), this.startPress(t, n);
      }),
      (this.startAccessiblePress = () => {
        const t = (i) => {
            if (i.key !== "Enter" || this.isPressing) return;
            const s = (a) => {
              a.key !== "Enter" ||
                !this.checkPressEnd() ||
                Hl("up", (l, u) => {
                  const { onTap: c } = this.node.getProps();
                  c && ce.update(() => c(l, u));
                });
            };
            this.removeEndListeners(),
              (this.removeEndListeners = Jt(this.node.current, "keyup", s)),
              Hl("down", (a, l) => {
                this.startPress(a, l);
              });
          },
          n = Jt(this.node.current, "keydown", t),
          r = () => {
            this.isPressing && Hl("cancel", (i, s) => this.cancelPress(i, s));
          },
          o = Jt(this.node.current, "blur", r);
        this.removeAccessibleListeners = bn(n, o);
      });
  }
  startPress(t, n) {
    this.isPressing = !0;
    const { onTapStart: r, whileTap: o } = this.node.getProps();
    o &&
      this.node.animationState &&
      this.node.animationState.setActive("whileTap", !0),
      r && ce.update(() => r(t, n));
  }
  checkPressEnd() {
    return (
      this.removeEndListeners(),
      (this.isPressing = !1),
      this.node.getProps().whileTap &&
        this.node.animationState &&
        this.node.animationState.setActive("whileTap", !1),
      !_0()
    );
  }
  cancelPress(t, n) {
    if (!this.checkPressEnd()) return;
    const { onTapCancel: r } = this.node.getProps();
    r && ce.update(() => r(t, n));
  }
  mount() {
    const t = this.node.getProps(),
      n = tn(this.node.current, "pointerdown", this.startPointerPress, {
        passive: !(t.onTapStart || t.onPointerStart),
      }),
      r = Jt(this.node.current, "focus", this.startAccessiblePress);
    this.removeStartListeners = bn(n, r);
  }
  unmount() {
    this.removeStartListeners(),
      this.removeEndListeners(),
      this.removeAccessibleListeners();
  }
}
const mc = new WeakMap(),
  Gl = new WeakMap(),
  OP = (e) => {
    const t = mc.get(e.target);
    t && t(e);
  },
  LP = (e) => {
    e.forEach(OP);
  };
function FP({ root: e, ...t }) {
  const n = e || document;
  Gl.has(n) || Gl.set(n, {});
  const r = Gl.get(n),
    o = JSON.stringify(t);
  return r[o] || (r[o] = new IntersectionObserver(LP, { root: e, ...t })), r[o];
}
function IP(e, t, n) {
  const r = FP(t);
  return (
    mc.set(e, n),
    r.observe(e),
    () => {
      mc.delete(e), r.unobserve(e);
    }
  );
}
const DP = { some: 0, all: 1 };
class NP extends Dn {
  constructor() {
    super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
  }
  startObserver() {
    this.unmount();
    const { viewport: t = {} } = this.node.getProps(),
      { root: n, margin: r, amount: o = "some", once: i } = t,
      s = {
        root: n ? n.current : void 0,
        rootMargin: r,
        threshold: typeof o == "number" ? o : DP[o],
      },
      a = (l) => {
        const { isIntersecting: u } = l;
        if (
          this.isInView === u ||
          ((this.isInView = u), i && !u && this.hasEnteredView)
        )
          return;
        u && (this.hasEnteredView = !0),
          this.node.animationState &&
            this.node.animationState.setActive("whileInView", u);
        const { onViewportEnter: c, onViewportLeave: f } = this.node.getProps(),
          d = u ? c : f;
        d && d(l);
      };
    return IP(this.node.current, s, a);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u") return;
    const { props: t, prevProps: n } = this.node;
    ["amount", "margin", "root"].some(VP(t, n)) && this.startObserver();
  }
  unmount() {}
}
function VP({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (n) => e[n] !== t[n];
}
const jP = {
  inView: { Feature: NP },
  tap: { Feature: AP },
  focus: { Feature: MP },
  hover: { Feature: RP },
};
function A0(e, t) {
  if (!Array.isArray(t)) return !1;
  const n = t.length;
  if (n !== e.length) return !1;
  for (let r = 0; r < n; r++) if (t[r] !== e[r]) return !1;
  return !0;
}
function BP(e) {
  const t = {};
  return e.values.forEach((n, r) => (t[r] = n.get())), t;
}
function zP(e) {
  const t = {};
  return e.values.forEach((n, r) => (t[r] = n.getVelocity())), t;
}
function Ja(e, t, n) {
  const r = e.getProps();
  return Kf(r, t, n !== void 0 ? n : r.custom, BP(e), zP(e));
}
const $P = "framerAppearId",
  UP = "data-" + Gf($P);
let WP = be,
  Yf = be;
const _n = (e) => e * 1e3,
  nn = (e) => e / 1e3,
  HP = { current: !1 },
  O0 = (e) => Array.isArray(e) && typeof e[0] == "number";
function L0(e) {
  return !!(
    !e ||
    (typeof e == "string" && F0[e]) ||
    O0(e) ||
    (Array.isArray(e) && e.every(L0))
  );
}
const bo = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`,
  F0 = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: bo([0, 0.65, 0.55, 1]),
    circOut: bo([0.55, 0, 1, 0.45]),
    backIn: bo([0.31, 0.01, 0.66, -0.59]),
    backOut: bo([0.33, 1.53, 0.69, 0.99]),
  };
function I0(e) {
  if (e) return O0(e) ? bo(e) : Array.isArray(e) ? e.map(I0) : F0[e];
}
function GP(
  e,
  t,
  n,
  {
    delay: r = 0,
    duration: o,
    repeat: i = 0,
    repeatType: s = "loop",
    ease: a,
    times: l,
  } = {}
) {
  const u = { [t]: n };
  l && (u.offset = l);
  const c = I0(a);
  return (
    Array.isArray(c) && (u.easing = c),
    e.animate(u, {
      delay: r,
      duration: o,
      easing: Array.isArray(c) ? "linear" : c,
      fill: "both",
      iterations: i + 1,
      direction: s === "reverse" ? "alternate" : "normal",
    })
  );
}
const dh = {
    waapi: () => Object.hasOwnProperty.call(Element.prototype, "animate"),
  },
  Zl = {},
  D0 = {};
for (const e in dh)
  D0[e] = () => (Zl[e] === void 0 && (Zl[e] = dh[e]()), Zl[e]);
function ZP(e, { repeat: t, repeatType: n = "loop" }) {
  const r = t && n !== "loop" && t % 2 === 1 ? 0 : e.length - 1;
  return e[r];
}
const N0 = (e, t, n) =>
    (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e,
  KP = 1e-7,
  YP = 12;
function XP(e, t, n, r, o) {
  let i,
    s,
    a = 0;
  do (s = t + (n - t) / 2), (i = N0(s, r, o) - e), i > 0 ? (n = s) : (t = s);
  while (Math.abs(i) > KP && ++a < YP);
  return s;
}
function Ri(e, t, n, r) {
  if (e === t && n === r) return be;
  const o = (i) => XP(i, 0, 1, e, n);
  return (i) => (i === 0 || i === 1 ? i : N0(o(i), t, r));
}
const QP = Ri(0.42, 0, 1, 1),
  qP = Ri(0, 0, 0.58, 1),
  V0 = Ri(0.42, 0, 0.58, 1),
  JP = (e) => Array.isArray(e) && typeof e[0] != "number",
  j0 = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2,
  B0 = (e) => (t) => 1 - e(1 - t),
  z0 = (e) => 1 - Math.sin(Math.acos(e)),
  Xf = B0(z0),
  eT = j0(Xf),
  $0 = Ri(0.33, 1.53, 0.69, 0.99),
  Qf = B0($0),
  tT = j0(Qf),
  nT = (e) =>
    (e *= 2) < 1 ? 0.5 * Qf(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))),
  rT = {
    linear: be,
    easeIn: QP,
    easeInOut: V0,
    easeOut: qP,
    circIn: z0,
    circInOut: eT,
    circOut: Xf,
    backIn: Qf,
    backInOut: tT,
    backOut: $0,
    anticipate: nT,
  },
  ph = (e) => {
    if (Array.isArray(e)) {
      Yf(e.length === 4);
      const [t, n, r, o] = e;
      return Ri(t, n, r, o);
    } else if (typeof e == "string") return rT[e];
    return e;
  },
  qf = (e, t) => (n) =>
    !!(
      (Ei(n) && tP.test(n) && n.startsWith(e)) ||
      (t && Object.prototype.hasOwnProperty.call(n, t))
    ),
  U0 = (e, t, n) => (r) => {
    if (!Ei(r)) return r;
    const [o, i, s, a] = r.match(pi);
    return {
      [e]: parseFloat(o),
      [t]: parseFloat(i),
      [n]: parseFloat(s),
      alpha: a !== void 0 ? parseFloat(a) : 1,
    };
  },
  oT = (e) => sr(0, 255, e),
  Kl = { ...fr, transform: (e) => Math.round(oT(e)) },
  Yn = {
    test: qf("rgb", "red"),
    parse: U0("red", "green", "blue"),
    transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) =>
      "rgba(" +
      Kl.transform(e) +
      ", " +
      Kl.transform(t) +
      ", " +
      Kl.transform(n) +
      ", " +
      Bo(jo.transform(r)) +
      ")",
  };
function iT(e) {
  let t = "",
    n = "",
    r = "",
    o = "";
  return (
    e.length > 5
      ? ((t = e.substring(1, 3)),
        (n = e.substring(3, 5)),
        (r = e.substring(5, 7)),
        (o = e.substring(7, 9)))
      : ((t = e.substring(1, 2)),
        (n = e.substring(2, 3)),
        (r = e.substring(3, 4)),
        (o = e.substring(4, 5)),
        (t += t),
        (n += n),
        (r += r),
        (o += o)),
    {
      red: parseInt(t, 16),
      green: parseInt(n, 16),
      blue: parseInt(r, 16),
      alpha: o ? parseInt(o, 16) / 255 : 1,
    }
  );
}
const gc = { test: qf("#"), parse: iT, transform: Yn.transform },
  Or = {
    test: qf("hsl", "hue"),
    parse: U0("hue", "saturation", "lightness"),
    transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) =>
      "hsla(" +
      Math.round(e) +
      ", " +
      Ut.transform(Bo(t)) +
      ", " +
      Ut.transform(Bo(n)) +
      ", " +
      Bo(jo.transform(r)) +
      ")",
  },
  $e = {
    test: (e) => Yn.test(e) || gc.test(e) || Or.test(e),
    parse: (e) =>
      Yn.test(e) ? Yn.parse(e) : Or.test(e) ? Or.parse(e) : gc.parse(e),
    transform: (e) =>
      Ei(e) ? e : e.hasOwnProperty("red") ? Yn.transform(e) : Or.transform(e),
  },
  de = (e, t, n) => -n * e + n * t + e;
function Yl(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6
      ? e + (t - e) * 6 * n
      : n < 1 / 2
      ? t
      : n < 2 / 3
      ? e + (t - e) * (2 / 3 - n) * 6
      : e
  );
}
function sT({ hue: e, saturation: t, lightness: n, alpha: r }) {
  (e /= 360), (t /= 100), (n /= 100);
  let o = 0,
    i = 0,
    s = 0;
  if (!t) o = i = s = n;
  else {
    const a = n < 0.5 ? n * (1 + t) : n + t - n * t,
      l = 2 * n - a;
    (o = Yl(l, a, e + 1 / 3)), (i = Yl(l, a, e)), (s = Yl(l, a, e - 1 / 3));
  }
  return {
    red: Math.round(o * 255),
    green: Math.round(i * 255),
    blue: Math.round(s * 255),
    alpha: r,
  };
}
const Xl = (e, t, n) => {
    const r = e * e;
    return Math.sqrt(Math.max(0, n * (t * t - r) + r));
  },
  aT = [gc, Yn, Or],
  lT = (e) => aT.find((t) => t.test(e));
function hh(e) {
  const t = lT(e);
  let n = t.parse(e);
  return t === Or && (n = sT(n)), n;
}
const W0 = (e, t) => {
    const n = hh(e),
      r = hh(t),
      o = { ...n };
    return (i) => (
      (o.red = Xl(n.red, r.red, i)),
      (o.green = Xl(n.green, r.green, i)),
      (o.blue = Xl(n.blue, r.blue, i)),
      (o.alpha = de(n.alpha, r.alpha, i)),
      Yn.transform(o)
    );
  },
  H0 = "${c}",
  G0 = "${n}";
function uT(e) {
  var t, n;
  return (
    isNaN(e) &&
    Ei(e) &&
    (((t = e.match(pi)) === null || t === void 0 ? void 0 : t.length) || 0) +
      (((n = e.match(pc)) === null || n === void 0 ? void 0 : n.length) || 0) >
      0
  );
}
function pa(e) {
  typeof e == "number" && (e = `${e}`);
  const t = [];
  let n = 0,
    r = 0;
  const o = e.match(pc);
  o && ((n = o.length), (e = e.replace(pc, H0)), t.push(...o.map($e.parse)));
  const i = e.match(pi);
  return (
    i && ((r = i.length), (e = e.replace(pi, G0)), t.push(...i.map(fr.parse))),
    { values: t, numColors: n, numNumbers: r, tokenised: e }
  );
}
function Z0(e) {
  return pa(e).values;
}
function K0(e) {
  const { values: t, numColors: n, tokenised: r } = pa(e),
    o = t.length;
  return (i) => {
    let s = r;
    for (let a = 0; a < o; a++)
      s = s.replace(a < n ? H0 : G0, a < n ? $e.transform(i[a]) : Bo(i[a]));
    return s;
  };
}
const cT = (e) => (typeof e == "number" ? 0 : e);
function fT(e) {
  const t = Z0(e);
  return K0(e)(t.map(cT));
}
const On = {
  test: uT,
  parse: Z0,
  createTransformer: K0,
  getAnimatableNone: fT,
};
function Y0(e, t) {
  return typeof e == "number"
    ? (n) => de(e, t, n)
    : $e.test(e)
    ? W0(e, t)
    : Q0(e, t);
}
const X0 = (e, t) => {
    const n = [...e],
      r = n.length,
      o = e.map((i, s) => Y0(i, t[s]));
    return (i) => {
      for (let s = 0; s < r; s++) n[s] = o[s](i);
      return n;
    };
  },
  dT = (e, t) => {
    const n = { ...e, ...t },
      r = {};
    for (const o in n)
      e[o] !== void 0 && t[o] !== void 0 && (r[o] = Y0(e[o], t[o]));
    return (o) => {
      for (const i in r) n[i] = r[i](o);
      return n;
    };
  },
  Q0 = (e, t) => {
    const n = On.createTransformer(t),
      r = pa(e),
      o = pa(t);
    return r.numColors === o.numColors && r.numNumbers >= o.numNumbers
      ? bn(X0(r.values, o.values), n)
      : (s) => `${s > 0 ? t : e}`;
  },
  mi = (e, t, n) => {
    const r = t - e;
    return r === 0 ? 1 : (n - e) / r;
  },
  mh = (e, t) => (n) => de(e, t, n);
function pT(e) {
  return typeof e == "number"
    ? mh
    : typeof e == "string"
    ? $e.test(e)
      ? W0
      : Q0
    : Array.isArray(e)
    ? X0
    : typeof e == "object"
    ? dT
    : mh;
}
function hT(e, t, n) {
  const r = [],
    o = n || pT(e[0]),
    i = e.length - 1;
  for (let s = 0; s < i; s++) {
    let a = o(e[s], e[s + 1]);
    if (t) {
      const l = Array.isArray(t) ? t[s] || be : t;
      a = bn(l, a);
    }
    r.push(a);
  }
  return r;
}
function q0(e, t, { clamp: n = !0, ease: r, mixer: o } = {}) {
  const i = e.length;
  if ((Yf(i === t.length), i === 1)) return () => t[0];
  e[0] > e[i - 1] && ((e = [...e].reverse()), (t = [...t].reverse()));
  const s = hT(t, r, o),
    a = s.length,
    l = (u) => {
      let c = 0;
      if (a > 1) for (; c < e.length - 2 && !(u < e[c + 1]); c++);
      const f = mi(e[c], e[c + 1], u);
      return s[c](f);
    };
  return n ? (u) => l(sr(e[0], e[i - 1], u)) : l;
}
function mT(e, t) {
  const n = e[e.length - 1];
  for (let r = 1; r <= t; r++) {
    const o = mi(0, t, r);
    e.push(de(n, 1, o));
  }
}
function gT(e) {
  const t = [0];
  return mT(t, e.length - 1), t;
}
function vT(e, t) {
  return e.map((n) => n * t);
}
function yT(e, t) {
  return e.map(() => t || V0).splice(0, e.length - 1);
}
function ha({
  duration: e = 300,
  keyframes: t,
  times: n,
  ease: r = "easeInOut",
}) {
  const o = JP(r) ? r.map(ph) : ph(r),
    i = { done: !1, value: t[0] },
    s = vT(n && n.length === t.length ? n : gT(t), e),
    a = q0(s, t, { ease: Array.isArray(o) ? o : yT(t, o) });
  return {
    calculatedDuration: e,
    next: (l) => ((i.value = a(l)), (i.done = l >= e), i),
  };
}
function J0(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const ST = 5;
function ey(e, t, n) {
  const r = Math.max(t - ST, 0);
  return J0(n - e(r), t - r);
}
const Ql = 0.001,
  wT = 0.01,
  gh = 10,
  xT = 0.05,
  kT = 1;
function CT({
  duration: e = 800,
  bounce: t = 0.25,
  velocity: n = 0,
  mass: r = 1,
}) {
  let o, i;
  WP(e <= _n(gh));
  let s = 1 - t;
  (s = sr(xT, kT, s)),
    (e = sr(wT, gh, nn(e))),
    s < 1
      ? ((o = (u) => {
          const c = u * s,
            f = c * e,
            d = c - n,
            p = vc(u, s),
            S = Math.exp(-f);
          return Ql - (d / p) * S;
        }),
        (i = (u) => {
          const f = u * s * e,
            d = f * n + n,
            p = Math.pow(s, 2) * Math.pow(u, 2) * e,
            S = Math.exp(-f),
            v = vc(Math.pow(u, 2), s);
          return ((-o(u) + Ql > 0 ? -1 : 1) * ((d - p) * S)) / v;
        }))
      : ((o = (u) => {
          const c = Math.exp(-u * e),
            f = (u - n) * e + 1;
          return -Ql + c * f;
        }),
        (i = (u) => {
          const c = Math.exp(-u * e),
            f = (n - u) * (e * e);
          return c * f;
        }));
  const a = 5 / e,
    l = TT(o, i, a);
  if (((e = _n(e)), isNaN(l)))
    return { stiffness: 100, damping: 10, duration: e };
  {
    const u = Math.pow(l, 2) * r;
    return { stiffness: u, damping: s * 2 * Math.sqrt(r * u), duration: e };
  }
}
const PT = 12;
function TT(e, t, n) {
  let r = n;
  for (let o = 1; o < PT; o++) r = r - e(r) / t(r);
  return r;
}
function vc(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const ET = ["duration", "bounce"],
  bT = ["stiffness", "damping", "mass"];
function vh(e, t) {
  return t.some((n) => e[n] !== void 0);
}
function _T(e) {
  let t = {
    velocity: 0,
    stiffness: 100,
    damping: 10,
    mass: 1,
    isResolvedFromDuration: !1,
    ...e,
  };
  if (!vh(e, bT) && vh(e, ET)) {
    const n = CT(e);
    (t = { ...t, ...n, velocity: 0, mass: 1 }), (t.isResolvedFromDuration = !0);
  }
  return t;
}
function ty({ keyframes: e, restDelta: t, restSpeed: n, ...r }) {
  const o = e[0],
    i = e[e.length - 1],
    s = { done: !1, value: o },
    {
      stiffness: a,
      damping: l,
      mass: u,
      velocity: c,
      duration: f,
      isResolvedFromDuration: d,
    } = _T(r),
    p = c ? -nn(c) : 0,
    S = l / (2 * Math.sqrt(a * u)),
    v = i - o,
    P = nn(Math.sqrt(a / u)),
    g = Math.abs(v) < 5;
  n || (n = g ? 0.01 : 2), t || (t = g ? 0.005 : 0.5);
  let h;
  if (S < 1) {
    const m = vc(P, S);
    h = (C) => {
      const E = Math.exp(-S * P * C);
      return (
        i - E * (((p + S * P * v) / m) * Math.sin(m * C) + v * Math.cos(m * C))
      );
    };
  } else if (S === 1) h = (m) => i - Math.exp(-P * m) * (v + (p + P * v) * m);
  else {
    const m = P * Math.sqrt(S * S - 1);
    h = (C) => {
      const E = Math.exp(-S * P * C),
        R = Math.min(m * C, 300);
      return (
        i - (E * ((p + S * P * v) * Math.sinh(R) + m * v * Math.cosh(R))) / m
      );
    };
  }
  return {
    calculatedDuration: (d && f) || null,
    next: (m) => {
      const C = h(m);
      if (d) s.done = m >= f;
      else {
        let E = p;
        m !== 0 && (S < 1 ? (E = ey(h, m, C)) : (E = 0));
        const R = Math.abs(E) <= n,
          b = Math.abs(i - C) <= t;
        s.done = R && b;
      }
      return (s.value = s.done ? i : C), s;
    },
  };
}
function yh({
  keyframes: e,
  velocity: t = 0,
  power: n = 0.8,
  timeConstant: r = 325,
  bounceDamping: o = 10,
  bounceStiffness: i = 500,
  modifyTarget: s,
  min: a,
  max: l,
  restDelta: u = 0.5,
  restSpeed: c,
}) {
  const f = e[0],
    d = { done: !1, value: f },
    p = (_) => (a !== void 0 && _ < a) || (l !== void 0 && _ > l),
    S = (_) =>
      a === void 0
        ? l
        : l === void 0 || Math.abs(a - _) < Math.abs(l - _)
        ? a
        : l;
  let v = n * t;
  const P = f + v,
    g = s === void 0 ? P : s(P);
  g !== P && (v = g - f);
  const h = (_) => -v * Math.exp(-_ / r),
    m = (_) => g + h(_),
    C = (_) => {
      const D = h(_),
        N = m(_);
      (d.done = Math.abs(D) <= u), (d.value = d.done ? g : N);
    };
  let E, R;
  const b = (_) => {
    p(d.value) &&
      ((E = _),
      (R = ty({
        keyframes: [d.value, S(d.value)],
        velocity: ey(m, _, d.value),
        damping: o,
        stiffness: i,
        restDelta: u,
        restSpeed: c,
      })));
  };
  return (
    b(0),
    {
      calculatedDuration: null,
      next: (_) => {
        let D = !1;
        return (
          !R && E === void 0 && ((D = !0), C(_), b(_)),
          E !== void 0 && _ > E ? R.next(_ - E) : (!D && C(_), d)
        );
      },
    }
  );
}
const RT = (e) => {
    const t = ({ timestamp: n }) => e(n);
    return {
      start: () => ce.update(t, !0),
      stop: () => An.update(t),
      now: () => (Be.isProcessing ? Be.timestamp : performance.now()),
    };
  },
  MT = { decay: yh, inertia: yh, tween: ha, keyframes: ha, spring: ty },
  Sh = 2e4;
function wh(e) {
  let t = 0;
  const n = 50;
  let r = e.next(t);
  for (; !r.done && t < Sh; ) (t += n), (r = e.next(t));
  return t >= Sh ? 1 / 0 : t;
}
function ma({
  autoplay: e = !0,
  delay: t = 0,
  driver: n = RT,
  keyframes: r,
  type: o = "keyframes",
  repeat: i = 0,
  repeatDelay: s = 0,
  repeatType: a = "loop",
  onPlay: l,
  onStop: u,
  onComplete: c,
  onUpdate: f,
  ...d
}) {
  let p = 1,
    S = !1,
    v,
    P;
  const g = () => {
    v && v(),
      (P = new Promise((B) => {
        v = B;
      }));
  };
  g();
  let h;
  const m = MT[o] || ha;
  let C;
  m !== ha &&
    typeof r[0] != "number" &&
    ((C = q0([0, 100], r, { clamp: !1 })), (r = [0, 100]));
  const E = m({ ...d, keyframes: r });
  let R;
  a === "mirror" &&
    (R = m({
      ...d,
      keyframes: [...r].reverse(),
      velocity: -(d.velocity || 0),
    }));
  let b = "idle",
    _ = null,
    D = null,
    N = null;
  E.calculatedDuration === null && i && (E.calculatedDuration = wh(E));
  const { calculatedDuration: q } = E;
  let Ce = 1 / 0,
    Pe = 1 / 0;
  q !== null && ((Ce = q + s), (Pe = Ce * (i + 1) - s));
  let J = 0;
  const re = (B) => {
      if (D === null) return;
      p > 0 && (D = Math.min(D, B)), _ !== null ? (J = _) : (J = (B - D) * p);
      const ee = J - t,
        U = ee < 0;
      (J = Math.max(ee, 0)), b === "finished" && _ === null && (J = Pe);
      let Ie = J,
        Rt = E;
      if (i) {
        const Mt = J / Ce;
        let xt = Math.floor(Mt),
          At = Mt % 1;
        !At && Mt >= 1 && (At = 1),
          At === 1 && xt--,
          (xt = Math.min(xt, i + 1));
        const so = !!(xt % 2);
        so &&
          (a === "reverse"
            ? ((At = 1 - At), s && (At -= s / Ce))
            : a === "mirror" && (Rt = R));
        let Ai = sr(0, 1, At);
        J > Pe && (Ai = a === "reverse" && so ? 1 : 0), (Ie = Ai * Ce);
      }
      const ge = U ? { done: !1, value: r[0] } : Rt.next(Ie);
      C && (ge.value = C(ge.value));
      let { done: Te } = ge;
      !U && q !== null && (Te = J >= Pe);
      const tt =
        _ === null &&
        (b === "finished" || (b === "running" && Te) || (p < 0 && J <= 0));
      return f && f(ge.value), tt && O(), ge;
    },
    Fe = () => {
      h && h.stop(), (h = void 0);
    },
    Ze = () => {
      (b = "idle"), Fe(), g(), (D = N = null);
    },
    O = () => {
      (b = "finished"), c && c(), Fe(), g();
    },
    j = () => {
      if (S) return;
      h || (h = n(re));
      const B = h.now();
      l && l(),
        (b = "running"),
        _ !== null ? (D = B - _) : D || (D = B),
        (N = D),
        (_ = null),
        h.start();
    };
  e && j();
  const z = {
    then(B, ee) {
      return P.then(B, ee);
    },
    get time() {
      return nn(J);
    },
    set time(B) {
      (B = _n(B)),
        (J = B),
        _ !== null || !h || p === 0 ? (_ = B) : (D = h.now() - B / p);
    },
    get duration() {
      const B = E.calculatedDuration === null ? wh(E) : E.calculatedDuration;
      return nn(B);
    },
    get speed() {
      return p;
    },
    set speed(B) {
      B === p || !h || ((p = B), (z.time = nn(J)));
    },
    get state() {
      return b;
    },
    play: j,
    pause: () => {
      (b = "paused"), (_ = J);
    },
    stop: () => {
      (S = !0), b !== "idle" && ((b = "idle"), u && u(), Ze());
    },
    cancel: () => {
      N !== null && re(N), Ze();
    },
    complete: () => {
      b = "finished";
    },
    sample: (B) => ((D = 0), re(B)),
  };
  return z;
}
const AT = new Set([
    "opacity",
    "clipPath",
    "filter",
    "transform",
    "backgroundColor",
  ]),
  ls = 10,
  OT = 2e4,
  LT = (e, t) => t.type === "spring" || e === "backgroundColor" || !L0(t.ease);
function FT(e, t, { onUpdate: n, onComplete: r, ...o }) {
  if (
    !(
      D0.waapi() &&
      AT.has(t) &&
      !o.repeatDelay &&
      o.repeatType !== "mirror" &&
      o.damping !== 0 &&
      o.type !== "inertia"
    )
  )
    return !1;
  let s = !1,
    a,
    l;
  const u = () => {
    l = new Promise((v) => {
      a = v;
    });
  };
  u();
  let { keyframes: c, duration: f = 300, ease: d } = o;
  if (LT(t, o)) {
    const v = ma({ ...o, repeat: 0, delay: 0 });
    let P = { done: !1, value: c[0] };
    const g = [];
    let h = 0;
    for (; !P.done && h < OT; ) (P = v.sample(h)), g.push(P.value), (h += ls);
    (c = g), (f = h - ls), (d = "linear");
  }
  const p = GP(e.owner.current, t, c, { ...o, duration: f, ease: d }),
    S = () => {
      ce.update(() => p.cancel()), a(), u();
    };
  return (
    (p.onfinish = () => {
      e.set(ZP(c, o)), r && r(), S();
    }),
    {
      then(v, P) {
        return l.then(v, P);
      },
      get time() {
        return nn(p.currentTime || 0);
      },
      set time(v) {
        p.currentTime = _n(v);
      },
      get speed() {
        return p.playbackRate;
      },
      set speed(v) {
        p.playbackRate = v;
      },
      get duration() {
        return nn(f);
      },
      play: () => {
        s || p.play();
      },
      pause: () => p.pause(),
      stop: () => {
        if (((s = !0), p.playState === "idle")) return;
        const { currentTime: v } = p;
        if (v) {
          const P = ma({ ...o, autoplay: !1 });
          e.setWithVelocity(P.sample(v - ls).value, P.sample(v).value, ls);
        }
        S();
      },
      complete: () => p.finish(),
      cancel: S,
    }
  );
}
function IT({ keyframes: e, delay: t, onUpdate: n, onComplete: r }) {
  const o = () => (
    n && n(e[e.length - 1]),
    r && r(),
    {
      time: 0,
      speed: 1,
      duration: 0,
      play: be,
      pause: be,
      stop: be,
      then: (i) => (i(), Promise.resolve()),
      cancel: be,
      complete: be,
    }
  );
  return t
    ? ma({ keyframes: [0, 1], duration: 0, delay: t, onComplete: o })
    : o();
}
const DT = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
  NT = (e) => ({
    type: "spring",
    stiffness: 550,
    damping: e === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  VT = { type: "keyframes", duration: 0.8 },
  jT = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  BT = (e, { keyframes: t }) =>
    t.length > 2
      ? VT
      : cr.has(e)
      ? e.startsWith("scale")
        ? NT(t[1])
        : DT
      : jT,
  yc = (e, t) =>
    e === "zIndex"
      ? !1
      : !!(
          typeof t == "number" ||
          Array.isArray(t) ||
          (typeof t == "string" && On.test(t) && !t.startsWith("url("))
        ),
  zT = new Set(["brightness", "contrast", "saturate", "opacity"]);
function $T(e) {
  const [t, n] = e.slice(0, -1).split("(");
  if (t === "drop-shadow") return e;
  const [r] = n.match(pi) || [];
  if (!r) return e;
  const o = n.replace(r, "");
  let i = zT.has(t) ? 1 : 0;
  return r !== n && (i *= 100), t + "(" + i + o + ")";
}
const UT = /([a-z-]*)\(.*?\)/g,
  Sc = {
    ...On,
    getAnimatableNone: (e) => {
      const t = e.match(UT);
      return t ? t.map($T).join(" ") : e;
    },
  },
  WT = {
    ...g0,
    color: $e,
    backgroundColor: $e,
    outlineColor: $e,
    fill: $e,
    stroke: $e,
    borderColor: $e,
    borderTopColor: $e,
    borderRightColor: $e,
    borderBottomColor: $e,
    borderLeftColor: $e,
    filter: Sc,
    WebkitFilter: Sc,
  },
  Jf = (e) => WT[e];
function ed(e, t) {
  let n = Jf(e);
  return (
    n !== Sc && (n = On), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
  );
}
function HT({
  when: e,
  delay: t,
  delayChildren: n,
  staggerChildren: r,
  staggerDirection: o,
  repeat: i,
  repeatType: s,
  repeatDelay: a,
  from: l,
  elapsed: u,
  ...c
}) {
  return !!Object.keys(c).length;
}
function xh(e) {
  return (
    e === 0 ||
    (typeof e == "string" && parseFloat(e) === 0 && e.indexOf(" ") === -1)
  );
}
function kh(e) {
  return typeof e == "number" ? 0 : ed("", e);
}
function ny(e, t) {
  return e[t] || e.default || e;
}
function GT(e, t, n, r) {
  const o = yc(t, n);
  let i = r.from !== void 0 ? r.from : e.get();
  if (
    (i === "none" && o && typeof n == "string"
      ? (i = ed(t, n))
      : xh(i) && typeof n == "string"
      ? (i = kh(n))
      : !Array.isArray(n) && xh(n) && typeof i == "string" && (n = kh(i)),
    Array.isArray(n))
  ) {
    for (let s = 0; s < n.length; s++)
      n[s] === null && (n[s] = s === 0 ? i : n[s - 1]);
    return n;
  } else return [i, n];
}
const td =
  (e, t, n, r = {}) =>
  (o) => {
    const i = ny(r, e) || {},
      s = i.delay || r.delay || 0;
    let { elapsed: a = 0 } = r;
    a = a - _n(s);
    const l = GT(t, e, n, i),
      u = l[0],
      c = l[l.length - 1],
      f = yc(e, u),
      d = yc(e, c);
    let p = {
      keyframes: l,
      velocity: t.getVelocity(),
      ease: "easeOut",
      ...i,
      delay: -a,
      onUpdate: (S) => {
        t.set(S), i.onUpdate && i.onUpdate(S);
      },
      onComplete: () => {
        o(), i.onComplete && i.onComplete();
      },
    };
    if (
      (HT(i) || (p = { ...p, ...BT(e, p) }),
      p.duration && (p.duration = _n(p.duration)),
      p.repeatDelay && (p.repeatDelay = _n(p.repeatDelay)),
      !f || !d || HP.current || i.type === !1)
    )
      return IT(p);
    if (
      t.owner &&
      t.owner.current instanceof HTMLElement &&
      !t.owner.getProps().onUpdate
    ) {
      const S = FT(t, e, p);
      if (S) return S;
    }
    return ma(p);
  };
function ga(e) {
  return !!(et(e) && e.add);
}
const ZT = (e) => /^\-?\d*\.?\d+$/.test(e),
  KT = (e) => /^0[^.\s]+$/.test(e);
function nd(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function rd(e, t) {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
class od {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return nd(this.subscriptions, t), () => rd(this.subscriptions, t);
  }
  notify(t, n, r) {
    const o = this.subscriptions.length;
    if (o)
      if (o === 1) this.subscriptions[0](t, n, r);
      else
        for (let i = 0; i < o; i++) {
          const s = this.subscriptions[i];
          s && s(t, n, r);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const YT = (e) => !isNaN(parseFloat(e));
class XT {
  constructor(t, n = {}) {
    (this.version = "10.10.0"),
      (this.timeDelta = 0),
      (this.lastUpdated = 0),
      (this.canTrackVelocity = !1),
      (this.events = {}),
      (this.updateAndNotify = (r, o = !0) => {
        (this.prev = this.current), (this.current = r);
        const { delta: i, timestamp: s } = Be;
        this.lastUpdated !== s &&
          ((this.timeDelta = i),
          (this.lastUpdated = s),
          ce.postRender(this.scheduleVelocityCheck)),
          this.prev !== this.current &&
            this.events.change &&
            this.events.change.notify(this.current),
          this.events.velocityChange &&
            this.events.velocityChange.notify(this.getVelocity()),
          o &&
            this.events.renderRequest &&
            this.events.renderRequest.notify(this.current);
      }),
      (this.scheduleVelocityCheck = () => ce.postRender(this.velocityCheck)),
      (this.velocityCheck = ({ timestamp: r }) => {
        r !== this.lastUpdated &&
          ((this.prev = this.current),
          this.events.velocityChange &&
            this.events.velocityChange.notify(this.getVelocity()));
      }),
      (this.hasAnimated = !1),
      (this.prev = this.current = t),
      (this.canTrackVelocity = YT(this.current)),
      (this.owner = n.owner);
  }
  onChange(t) {
    return this.on("change", t);
  }
  on(t, n) {
    this.events[t] || (this.events[t] = new od());
    const r = this.events[t].add(n);
    return t === "change"
      ? () => {
          r(),
            ce.read(() => {
              this.events.change.getSize() || this.stop();
            });
        }
      : r;
  }
  clearListeners() {
    for (const t in this.events) this.events[t].clear();
  }
  attach(t, n) {
    (this.passiveEffect = t), (this.stopPassiveEffect = n);
  }
  set(t, n = !0) {
    !n || !this.passiveEffect
      ? this.updateAndNotify(t, n)
      : this.passiveEffect(t, this.updateAndNotify);
  }
  setWithVelocity(t, n, r) {
    this.set(n), (this.prev = t), (this.timeDelta = r);
  }
  jump(t) {
    this.updateAndNotify(t),
      (this.prev = t),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
  get() {
    return this.current;
  }
  getPrevious() {
    return this.prev;
  }
  getVelocity() {
    return this.canTrackVelocity
      ? J0(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta)
      : 0;
  }
  start(t) {
    return (
      this.stop(),
      new Promise((n) => {
        (this.hasAnimated = !0),
          (this.animation = t(n)),
          this.events.animationStart && this.events.animationStart.notify();
      }).then(() => {
        this.events.animationComplete && this.events.animationComplete.notify(),
          this.clearAnimation();
      })
    );
  }
  stop() {
    this.animation &&
      (this.animation.stop(),
      this.events.animationCancel && this.events.animationCancel.notify()),
      this.clearAnimation();
  }
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  destroy() {
    this.clearListeners(),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
}
function eo(e, t) {
  return new XT(e, t);
}
const ry = (e) => (t) => t.test(e),
  QT = { test: (e) => e === "auto", parse: (e) => e },
  oy = [fr, V, Ut, fn, rP, nP, QT],
  xo = (e) => oy.find(ry(e)),
  qT = [...oy, $e, On],
  JT = (e) => qT.find(ry(e));
function eE(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, eo(n));
}
function tE(e, t) {
  const n = Ja(e, t);
  let {
    transitionEnd: r = {},
    transition: o = {},
    ...i
  } = n ? e.makeTargetAnimatable(n, !1) : {};
  i = { ...i, ...r };
  for (const s in i) {
    const a = vP(i[s]);
    eE(e, s, a);
  }
}
function nE(e, t, n) {
  var r, o;
  const i = Object.keys(t).filter((a) => !e.hasValue(a)),
    s = i.length;
  if (s)
    for (let a = 0; a < s; a++) {
      const l = i[a],
        u = t[l];
      let c = null;
      Array.isArray(u) && (c = u[0]),
        c === null &&
          (c =
            (o = (r = n[l]) !== null && r !== void 0 ? r : e.readValue(l)) !==
              null && o !== void 0
              ? o
              : t[l]),
        c != null &&
          (typeof c == "string" && (ZT(c) || KT(c))
            ? (c = parseFloat(c))
            : !JT(c) && On.test(u) && (c = ed(l, u)),
          e.addValue(l, eo(c, { owner: e })),
          n[l] === void 0 && (n[l] = c),
          c !== null && e.setBaseTarget(l, c));
    }
}
function rE(e, t) {
  return t ? (t[e] || t.default || t).from : void 0;
}
function oE(e, t, n) {
  const r = {};
  for (const o in e) {
    const i = rE(o, t);
    if (i !== void 0) r[o] = i;
    else {
      const s = n.getValue(o);
      s && (r[o] = s.get());
    }
  }
  return r;
}
function iE({ protectedKeys: e, needsAnimating: t }, n) {
  const r = e.hasOwnProperty(n) && t[n] !== !0;
  return (t[n] = !1), r;
}
function iy(e, t, { delay: n = 0, transitionOverride: r, type: o } = {}) {
  let {
    transition: i = e.getDefaultTransition(),
    transitionEnd: s,
    ...a
  } = e.makeTargetAnimatable(t);
  const l = e.getValue("willChange");
  r && (i = r);
  const u = [],
    c = o && e.animationState && e.animationState.getState()[o];
  for (const f in a) {
    const d = e.getValue(f),
      p = a[f];
    if (!d || p === void 0 || (c && iE(c, f))) continue;
    const S = { delay: n, elapsed: 0, ...i };
    if (window.HandoffAppearAnimations && !d.hasAnimated) {
      const P = e.getProps()[UP];
      P && (S.elapsed = window.HandoffAppearAnimations(P, f, d, ce));
    }
    d.start(td(f, d, p, e.shouldReduceMotion && cr.has(f) ? { type: !1 } : S));
    const v = d.animation;
    ga(l) && (l.add(f), v.then(() => l.remove(f))), u.push(v);
  }
  return (
    s &&
      Promise.all(u).then(() => {
        s && tE(e, s);
      }),
    u
  );
}
function wc(e, t, n = {}) {
  const r = Ja(e, t, n.custom);
  let { transition: o = e.getDefaultTransition() || {} } = r || {};
  n.transitionOverride && (o = n.transitionOverride);
  const i = r ? () => Promise.all(iy(e, r, n)) : () => Promise.resolve(),
    s =
      e.variantChildren && e.variantChildren.size
        ? (l = 0) => {
            const {
              delayChildren: u = 0,
              staggerChildren: c,
              staggerDirection: f,
            } = o;
            return sE(e, t, u + l, c, f, n);
          }
        : () => Promise.resolve(),
    { when: a } = o;
  if (a) {
    const [l, u] = a === "beforeChildren" ? [i, s] : [s, i];
    return l().then(() => u());
  } else return Promise.all([i(), s(n.delay)]);
}
function sE(e, t, n = 0, r = 0, o = 1, i) {
  const s = [],
    a = (e.variantChildren.size - 1) * r,
    l = o === 1 ? (u = 0) => u * r : (u = 0) => a - u * r;
  return (
    Array.from(e.variantChildren)
      .sort(aE)
      .forEach((u, c) => {
        u.notify("AnimationStart", t),
          s.push(
            wc(u, t, { ...i, delay: n + l(c) }).then(() =>
              u.notify("AnimationComplete", t)
            )
          );
      }),
    Promise.all(s)
  );
}
function aE(e, t) {
  return e.sortNodePosition(t);
}
function lE(e, t, n = {}) {
  e.notify("AnimationStart", t);
  let r;
  if (Array.isArray(t)) {
    const o = t.map((i) => wc(e, i, n));
    r = Promise.all(o);
  } else if (typeof t == "string") r = wc(e, t, n);
  else {
    const o = typeof t == "function" ? Ja(e, t, n.custom) : t;
    r = Promise.all(iy(e, o, n));
  }
  return r.then(() => e.notify("AnimationComplete", t));
}
const uE = [...Nf].reverse(),
  cE = Nf.length;
function fE(e) {
  return (t) =>
    Promise.all(t.map(({ animation: n, options: r }) => lE(e, n, r)));
}
function dE(e) {
  let t = fE(e);
  const n = hE();
  let r = !0;
  const o = (l, u) => {
    const c = Ja(e, u);
    if (c) {
      const { transition: f, transitionEnd: d, ...p } = c;
      l = { ...l, ...p, ...d };
    }
    return l;
  };
  function i(l) {
    t = l(e);
  }
  function s(l, u) {
    const c = e.getProps(),
      f = e.getVariantContext(!0) || {},
      d = [],
      p = new Set();
    let S = {},
      v = 1 / 0;
    for (let g = 0; g < cE; g++) {
      const h = uE[g],
        m = n[h],
        C = c[h] !== void 0 ? c[h] : f[h],
        E = fi(C),
        R = h === u ? m.isActive : null;
      R === !1 && (v = g);
      let b = C === f[h] && C !== c[h] && E;
      if (
        (b && r && e.manuallyAnimateOnMount && (b = !1),
        (m.protectedKeys = { ...S }),
        (!m.isActive && R === null) ||
          (!C && !m.prevProp) ||
          Ka(C) ||
          typeof C == "boolean")
      )
        continue;
      const _ = pE(m.prevProp, C);
      let D = _ || (h === u && m.isActive && !b && E) || (g > v && E);
      const N = Array.isArray(C) ? C : [C];
      let q = N.reduce(o, {});
      R === !1 && (q = {});
      const { prevResolvedValues: Ce = {} } = m,
        Pe = { ...Ce, ...q },
        J = (re) => {
          (D = !0), p.delete(re), (m.needsAnimating[re] = !0);
        };
      for (const re in Pe) {
        const Fe = q[re],
          Ze = Ce[re];
        S.hasOwnProperty(re) ||
          (Fe !== Ze
            ? da(Fe) && da(Ze)
              ? !A0(Fe, Ze) || _
                ? J(re)
                : (m.protectedKeys[re] = !0)
              : Fe !== void 0
              ? J(re)
              : p.add(re)
            : Fe !== void 0 && p.has(re)
            ? J(re)
            : (m.protectedKeys[re] = !0));
      }
      (m.prevProp = C),
        (m.prevResolvedValues = q),
        m.isActive && (S = { ...S, ...q }),
        r && e.blockInitialAnimation && (D = !1),
        D &&
          !b &&
          d.push(
            ...N.map((re) => ({ animation: re, options: { type: h, ...l } }))
          );
    }
    if (p.size) {
      const g = {};
      p.forEach((h) => {
        const m = e.getBaseTarget(h);
        m !== void 0 && (g[h] = m);
      }),
        d.push({ animation: g });
    }
    let P = !!d.length;
    return (
      r && c.initial === !1 && !e.manuallyAnimateOnMount && (P = !1),
      (r = !1),
      P ? t(d) : Promise.resolve()
    );
  }
  function a(l, u, c) {
    var f;
    if (n[l].isActive === u) return Promise.resolve();
    (f = e.variantChildren) === null ||
      f === void 0 ||
      f.forEach((p) => {
        var S;
        return (S = p.animationState) === null || S === void 0
          ? void 0
          : S.setActive(l, u);
      }),
      (n[l].isActive = u);
    const d = s(c, l);
    for (const p in n) n[p].protectedKeys = {};
    return d;
  }
  return {
    animateChanges: s,
    setActive: a,
    setAnimateFunction: i,
    getState: () => n,
  };
}
function pE(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !A0(t, e) : !1;
}
function Bn(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {},
  };
}
function hE() {
  return {
    animate: Bn(!0),
    whileInView: Bn(),
    whileHover: Bn(),
    whileTap: Bn(),
    whileDrag: Bn(),
    whileFocus: Bn(),
    exit: Bn(),
  };
}
class mE extends Dn {
  constructor(t) {
    super(t), t.animationState || (t.animationState = dE(t));
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    this.unmount(), Ka(t) && (this.unmount = t.subscribe(this.node));
  }
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: t } = this.node.getProps(),
      { animate: n } = this.node.prevProps || {};
    t !== n && this.updateAnimationControlsSubscription();
  }
  unmount() {}
}
let gE = 0;
class vE extends Dn {
  constructor() {
    super(...arguments), (this.id = gE++);
  }
  update() {
    if (!this.node.presenceContext) return;
    const {
        isPresent: t,
        onExitComplete: n,
        custom: r,
      } = this.node.presenceContext,
      { isPresent: o } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || t === o) return;
    const i = this.node.animationState.setActive("exit", !t, {
      custom: r ?? this.node.getProps().custom,
    });
    n && !t && i.then(() => n(this.id));
  }
  mount() {
    const { register: t } = this.node.presenceContext || {};
    t && (this.unmount = t(this.id));
  }
  unmount() {}
}
const yE = { animation: { Feature: mE }, exit: { Feature: vE } },
  Ch = (e, t) => Math.abs(e - t);
function SE(e, t) {
  const n = Ch(e.x, t.x),
    r = Ch(e.y, t.y);
  return Math.sqrt(n ** 2 + r ** 2);
}
class sy {
  constructor(t, n, { transformPagePoint: r } = {}) {
    if (
      ((this.startEvent = null),
      (this.lastMoveEvent = null),
      (this.lastMoveEventInfo = null),
      (this.handlers = {}),
      (this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        const u = Jl(this.lastMoveEventInfo, this.history),
          c = this.startEvent !== null,
          f = SE(u.offset, { x: 0, y: 0 }) >= 3;
        if (!c && !f) return;
        const { point: d } = u,
          { timestamp: p } = Be;
        this.history.push({ ...d, timestamp: p });
        const { onStart: S, onMove: v } = this.handlers;
        c ||
          (S && S(this.lastMoveEvent, u),
          (this.startEvent = this.lastMoveEvent)),
          v && v(this.lastMoveEvent, u);
      }),
      (this.handlePointerMove = (u, c) => {
        (this.lastMoveEvent = u),
          (this.lastMoveEventInfo = ql(c, this.transformPagePoint)),
          ce.update(this.updatePoint, !0);
      }),
      (this.handlePointerUp = (u, c) => {
        if ((this.end(), !(this.lastMoveEvent && this.lastMoveEventInfo)))
          return;
        const { onEnd: f, onSessionEnd: d } = this.handlers,
          p = Jl(
            u.type === "pointercancel"
              ? this.lastMoveEventInfo
              : ql(c, this.transformPagePoint),
            this.history
          );
        this.startEvent && f && f(u, p), d && d(u, p);
      }),
      !T0(t))
    )
      return;
    (this.handlers = n), (this.transformPagePoint = r);
    const o = Qa(t),
      i = ql(o, this.transformPagePoint),
      { point: s } = i,
      { timestamp: a } = Be;
    this.history = [{ ...s, timestamp: a }];
    const { onSessionStart: l } = n;
    l && l(t, Jl(i, this.history)),
      (this.removeListeners = bn(
        tn(window, "pointermove", this.handlePointerMove),
        tn(window, "pointerup", this.handlePointerUp),
        tn(window, "pointercancel", this.handlePointerUp)
      ));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    this.removeListeners && this.removeListeners(), An.update(this.updatePoint);
  }
}
function ql(e, t) {
  return t ? { point: t(e.point) } : e;
}
function Ph(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function Jl({ point: e }, t) {
  return {
    point: e,
    delta: Ph(e, ay(t)),
    offset: Ph(e, wE(t)),
    velocity: xE(t, 0.1),
  };
}
function wE(e) {
  return e[0];
}
function ay(e) {
  return e[e.length - 1];
}
function xE(e, t) {
  if (e.length < 2) return { x: 0, y: 0 };
  let n = e.length - 1,
    r = null;
  const o = ay(e);
  for (; n >= 0 && ((r = e[n]), !(o.timestamp - r.timestamp > _n(t))); ) n--;
  if (!r) return { x: 0, y: 0 };
  const i = nn(o.timestamp - r.timestamp);
  if (i === 0) return { x: 0, y: 0 };
  const s = { x: (o.x - r.x) / i, y: (o.y - r.y) / i };
  return s.x === 1 / 0 && (s.x = 0), s.y === 1 / 0 && (s.y = 0), s;
}
function lt(e) {
  return e.max - e.min;
}
function xc(e, t = 0, n = 0.01) {
  return Math.abs(e - t) <= n;
}
function Th(e, t, n, r = 0.5) {
  (e.origin = r),
    (e.originPoint = de(t.min, t.max, e.origin)),
    (e.scale = lt(n) / lt(t)),
    (xc(e.scale, 1, 1e-4) || isNaN(e.scale)) && (e.scale = 1),
    (e.translate = de(n.min, n.max, e.origin) - e.originPoint),
    (xc(e.translate) || isNaN(e.translate)) && (e.translate = 0);
}
function zo(e, t, n, r) {
  Th(e.x, t.x, n.x, r ? r.originX : void 0),
    Th(e.y, t.y, n.y, r ? r.originY : void 0);
}
function Eh(e, t, n) {
  (e.min = n.min + t.min), (e.max = e.min + lt(t));
}
function kE(e, t, n) {
  Eh(e.x, t.x, n.x), Eh(e.y, t.y, n.y);
}
function bh(e, t, n) {
  (e.min = t.min - n.min), (e.max = e.min + lt(t));
}
function $o(e, t, n) {
  bh(e.x, t.x, n.x), bh(e.y, t.y, n.y);
}
function CE(e, { min: t, max: n }, r) {
  return (
    t !== void 0 && e < t
      ? (e = r ? de(t, e, r.min) : Math.max(e, t))
      : n !== void 0 && e > n && (e = r ? de(n, e, r.max) : Math.min(e, n)),
    e
  );
}
function _h(e, t, n) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0,
  };
}
function PE(e, { top: t, left: n, bottom: r, right: o }) {
  return { x: _h(e.x, n, o), y: _h(e.y, t, r) };
}
function Rh(e, t) {
  let n = t.min - e.min,
    r = t.max - e.max;
  return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), { min: n, max: r };
}
function TE(e, t) {
  return { x: Rh(e.x, t.x), y: Rh(e.y, t.y) };
}
function EE(e, t) {
  let n = 0.5;
  const r = lt(e),
    o = lt(t);
  return (
    o > r
      ? (n = mi(t.min, t.max - r, e.min))
      : r > o && (n = mi(e.min, e.max - o, t.min)),
    sr(0, 1, n)
  );
}
function bE(e, t) {
  const n = {};
  return (
    t.min !== void 0 && (n.min = t.min - e.min),
    t.max !== void 0 && (n.max = t.max - e.min),
    n
  );
}
const kc = 0.35;
function _E(e = kc) {
  return (
    e === !1 ? (e = 0) : e === !0 && (e = kc),
    { x: Mh(e, "left", "right"), y: Mh(e, "top", "bottom") }
  );
}
function Mh(e, t, n) {
  return { min: Ah(e, t), max: Ah(e, n) };
}
function Ah(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
const Oh = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  Uo = () => ({ x: Oh(), y: Oh() }),
  Lh = () => ({ min: 0, max: 0 }),
  ye = () => ({ x: Lh(), y: Lh() });
function It(e) {
  return [e("x"), e("y")];
}
function ly({ top: e, left: t, right: n, bottom: r }) {
  return { x: { min: t, max: n }, y: { min: e, max: r } };
}
function RE({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function ME(e, t) {
  if (!t) return e;
  const n = t({ x: e.left, y: e.top }),
    r = t({ x: e.right, y: e.bottom });
  return { top: n.y, left: n.x, bottom: r.y, right: r.x };
}
function eu(e) {
  return e === void 0 || e === 1;
}
function Cc({ scale: e, scaleX: t, scaleY: n }) {
  return !eu(e) || !eu(t) || !eu(n);
}
function Un(e) {
  return Cc(e) || uy(e) || e.z || e.rotate || e.rotateX || e.rotateY;
}
function uy(e) {
  return Fh(e.x) || Fh(e.y);
}
function Fh(e) {
  return e && e !== "0%";
}
function va(e, t, n) {
  const r = e - n,
    o = t * r;
  return n + o;
}
function Ih(e, t, n, r, o) {
  return o !== void 0 && (e = va(e, o, r)), va(e, n, r) + t;
}
function Pc(e, t = 0, n = 1, r, o) {
  (e.min = Ih(e.min, t, n, r, o)), (e.max = Ih(e.max, t, n, r, o));
}
function cy(e, { x: t, y: n }) {
  Pc(e.x, t.translate, t.scale, t.originPoint),
    Pc(e.y, n.translate, n.scale, n.originPoint);
}
function AE(e, t, n, r = !1) {
  const o = n.length;
  if (!o) return;
  t.x = t.y = 1;
  let i, s;
  for (let a = 0; a < o; a++) {
    (i = n[a]), (s = i.projectionDelta);
    const l = i.instance;
    (l && l.style && l.style.display === "contents") ||
      (r &&
        i.options.layoutScroll &&
        i.scroll &&
        i !== i.root &&
        Lr(e, { x: -i.scroll.offset.x, y: -i.scroll.offset.y }),
      s && ((t.x *= s.x.scale), (t.y *= s.y.scale), cy(e, s)),
      r && Un(i.latestValues) && Lr(e, i.latestValues));
  }
  (t.x = Dh(t.x)), (t.y = Dh(t.y));
}
function Dh(e) {
  return Number.isInteger(e) || e > 1.0000000000001 || e < 0.999999999999
    ? e
    : 1;
}
function hn(e, t) {
  (e.min = e.min + t), (e.max = e.max + t);
}
function Nh(e, t, [n, r, o]) {
  const i = t[o] !== void 0 ? t[o] : 0.5,
    s = de(e.min, e.max, i);
  Pc(e, t[n], t[r], s, t.scale);
}
const OE = ["x", "scaleX", "originX"],
  LE = ["y", "scaleY", "originY"];
function Lr(e, t) {
  Nh(e.x, t, OE), Nh(e.y, t, LE);
}
function fy(e, t) {
  return ly(ME(e.getBoundingClientRect(), t));
}
function FE(e, t, n) {
  const r = fy(e, n),
    { scroll: o } = t;
  return o && (hn(r.x, o.offset.x), hn(r.y, o.offset.y)), r;
}
const IE = new WeakMap();
class DE {
  constructor(t) {
    (this.openGlobalLock = null),
      (this.isDragging = !1),
      (this.currentDirection = null),
      (this.originPoint = { x: 0, y: 0 }),
      (this.constraints = !1),
      (this.hasMutatedConstraints = !1),
      (this.elastic = ye()),
      (this.visualElement = t);
  }
  start(t, { snapToCursor: n = !1 } = {}) {
    const { presenceContext: r } = this.visualElement;
    if (r && r.isPresent === !1) return;
    const o = (l) => {
        this.stopAnimation(), n && this.snapToCursor(Qa(l, "page").point);
      },
      i = (l, u) => {
        const { drag: c, dragPropagation: f, onDragStart: d } = this.getProps();
        if (
          c &&
          !f &&
          (this.openGlobalLock && this.openGlobalLock(),
          (this.openGlobalLock = b0(c)),
          !this.openGlobalLock)
        )
          return;
        (this.isDragging = !0),
          (this.currentDirection = null),
          this.resolveConstraints(),
          this.visualElement.projection &&
            ((this.visualElement.projection.isAnimationBlocked = !0),
            (this.visualElement.projection.target = void 0)),
          It((S) => {
            let v = this.getAxisMotionValue(S).get() || 0;
            if (Ut.test(v)) {
              const { projection: P } = this.visualElement;
              if (P && P.layout) {
                const g = P.layout.layoutBox[S];
                g && (v = lt(g) * (parseFloat(v) / 100));
              }
            }
            this.originPoint[S] = v;
          }),
          d && ce.update(() => d(l, u));
        const { animationState: p } = this.visualElement;
        p && p.setActive("whileDrag", !0);
      },
      s = (l, u) => {
        const {
          dragPropagation: c,
          dragDirectionLock: f,
          onDirectionLock: d,
          onDrag: p,
        } = this.getProps();
        if (!c && !this.openGlobalLock) return;
        const { offset: S } = u;
        if (f && this.currentDirection === null) {
          (this.currentDirection = NE(S)),
            this.currentDirection !== null && d && d(this.currentDirection);
          return;
        }
        this.updateAxis("x", u.point, S),
          this.updateAxis("y", u.point, S),
          this.visualElement.render(),
          p && p(l, u);
      },
      a = (l, u) => this.stop(l, u);
    this.panSession = new sy(
      t,
      { onSessionStart: o, onStart: i, onMove: s, onSessionEnd: a },
      { transformPagePoint: this.visualElement.getTransformPagePoint() }
    );
  }
  stop(t, n) {
    const r = this.isDragging;
    if ((this.cancel(), !r)) return;
    const { velocity: o } = n;
    this.startAnimation(o);
    const { onDragEnd: i } = this.getProps();
    i && ce.update(() => i(t, n));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: t, animationState: n } = this.visualElement;
    t && (t.isAnimationBlocked = !1),
      this.panSession && this.panSession.end(),
      (this.panSession = void 0);
    const { dragPropagation: r } = this.getProps();
    !r &&
      this.openGlobalLock &&
      (this.openGlobalLock(), (this.openGlobalLock = null)),
      n && n.setActive("whileDrag", !1);
  }
  updateAxis(t, n, r) {
    const { drag: o } = this.getProps();
    if (!r || !us(t, o, this.currentDirection)) return;
    const i = this.getAxisMotionValue(t);
    let s = this.originPoint[t] + r[t];
    this.constraints &&
      this.constraints[t] &&
      (s = CE(s, this.constraints[t], this.elastic[t])),
      i.set(s);
  }
  resolveConstraints() {
    const { dragConstraints: t, dragElastic: n } = this.getProps(),
      { layout: r } = this.visualElement.projection || {},
      o = this.constraints;
    t && Ar(t)
      ? this.constraints || (this.constraints = this.resolveRefConstraints())
      : t && r
      ? (this.constraints = PE(r.layoutBox, t))
      : (this.constraints = !1),
      (this.elastic = _E(n)),
      o !== this.constraints &&
        r &&
        this.constraints &&
        !this.hasMutatedConstraints &&
        It((i) => {
          this.getAxisMotionValue(i) &&
            (this.constraints[i] = bE(r.layoutBox[i], this.constraints[i]));
        });
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: n } = this.getProps();
    if (!t || !Ar(t)) return !1;
    const r = t.current,
      { projection: o } = this.visualElement;
    if (!o || !o.layout) return !1;
    const i = FE(r, o.root, this.visualElement.getTransformPagePoint());
    let s = TE(o.layout.layoutBox, i);
    if (n) {
      const a = n(RE(s));
      (this.hasMutatedConstraints = !!a), a && (s = ly(a));
    }
    return s;
  }
  startAnimation(t) {
    const {
        drag: n,
        dragMomentum: r,
        dragElastic: o,
        dragTransition: i,
        dragSnapToOrigin: s,
        onDragTransitionEnd: a,
      } = this.getProps(),
      l = this.constraints || {},
      u = It((c) => {
        if (!us(c, n, this.currentDirection)) return;
        let f = (l && l[c]) || {};
        s && (f = { min: 0, max: 0 });
        const d = o ? 200 : 1e6,
          p = o ? 40 : 1e7,
          S = {
            type: "inertia",
            velocity: r ? t[c] : 0,
            bounceStiffness: d,
            bounceDamping: p,
            timeConstant: 750,
            restDelta: 1,
            restSpeed: 10,
            ...i,
            ...f,
          };
        return this.startAxisValueAnimation(c, S);
      });
    return Promise.all(u).then(a);
  }
  startAxisValueAnimation(t, n) {
    const r = this.getAxisMotionValue(t);
    return r.start(td(t, r, 0, n));
  }
  stopAnimation() {
    It((t) => this.getAxisMotionValue(t).stop());
  }
  getAxisMotionValue(t) {
    const n = "_drag" + t.toUpperCase(),
      r = this.visualElement.getProps(),
      o = r[n];
    return (
      o ||
      this.visualElement.getValue(t, (r.initial ? r.initial[t] : void 0) || 0)
    );
  }
  snapToCursor(t) {
    It((n) => {
      const { drag: r } = this.getProps();
      if (!us(n, r, this.currentDirection)) return;
      const { projection: o } = this.visualElement,
        i = this.getAxisMotionValue(n);
      if (o && o.layout) {
        const { min: s, max: a } = o.layout.layoutBox[n];
        i.set(t[n] - de(s, a, 0.5));
      }
    });
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return;
    const { drag: t, dragConstraints: n } = this.getProps(),
      { projection: r } = this.visualElement;
    if (!Ar(n) || !r || !this.constraints) return;
    this.stopAnimation();
    const o = { x: 0, y: 0 };
    It((s) => {
      const a = this.getAxisMotionValue(s);
      if (a) {
        const l = a.get();
        o[s] = EE({ min: l, max: l }, this.constraints[s]);
      }
    });
    const { transformTemplate: i } = this.visualElement.getProps();
    (this.visualElement.current.style.transform = i ? i({}, "") : "none"),
      r.root && r.root.updateScroll(),
      r.updateLayout(),
      this.resolveConstraints(),
      It((s) => {
        if (!us(s, t, null)) return;
        const a = this.getAxisMotionValue(s),
          { min: l, max: u } = this.constraints[s];
        a.set(de(l, u, o[s]));
      });
  }
  addListeners() {
    if (!this.visualElement.current) return;
    IE.set(this.visualElement, this);
    const t = this.visualElement.current,
      n = tn(t, "pointerdown", (l) => {
        const { drag: u, dragListener: c = !0 } = this.getProps();
        u && c && this.start(l);
      }),
      r = () => {
        const { dragConstraints: l } = this.getProps();
        Ar(l) && (this.constraints = this.resolveRefConstraints());
      },
      { projection: o } = this.visualElement,
      i = o.addEventListener("measure", r);
    o && !o.layout && (o.root && o.root.updateScroll(), o.updateLayout()), r();
    const s = Jt(window, "resize", () => this.scalePositionWithinConstraints()),
      a = o.addEventListener(
        "didUpdate",
        ({ delta: l, hasLayoutChanged: u }) => {
          this.isDragging &&
            u &&
            (It((c) => {
              const f = this.getAxisMotionValue(c);
              f &&
                ((this.originPoint[c] += l[c].translate),
                f.set(f.get() + l[c].translate));
            }),
            this.visualElement.render());
        }
      );
    return () => {
      s(), n(), i(), a && a();
    };
  }
  getProps() {
    const t = this.visualElement.getProps(),
      {
        drag: n = !1,
        dragDirectionLock: r = !1,
        dragPropagation: o = !1,
        dragConstraints: i = !1,
        dragElastic: s = kc,
        dragMomentum: a = !0,
      } = t;
    return {
      ...t,
      drag: n,
      dragDirectionLock: r,
      dragPropagation: o,
      dragConstraints: i,
      dragElastic: s,
      dragMomentum: a,
    };
  }
}
function us(e, t, n) {
  return (t === !0 || t === e) && (n === null || n === e);
}
function NE(e, t = 10) {
  let n = null;
  return Math.abs(e.y) > t ? (n = "y") : Math.abs(e.x) > t && (n = "x"), n;
}
class VE extends Dn {
  constructor(t) {
    super(t),
      (this.removeGroupControls = be),
      (this.removeListeners = be),
      (this.controls = new DE(t));
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    t && (this.removeGroupControls = t.subscribe(this.controls)),
      (this.removeListeners = this.controls.addListeners() || be);
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const Vh = (e) => (t, n) => {
  e && ce.update(() => e(t, n));
};
class jE extends Dn {
  constructor() {
    super(...arguments), (this.removePointerDownListener = be);
  }
  onPointerDown(t) {
    this.session = new sy(t, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
    });
  }
  createPanHandlers() {
    const {
      onPanSessionStart: t,
      onPanStart: n,
      onPan: r,
      onPanEnd: o,
    } = this.node.getProps();
    return {
      onSessionStart: Vh(t),
      onStart: Vh(n),
      onMove: r,
      onEnd: (i, s) => {
        delete this.session, o && ce.update(() => o(i, s));
      },
    };
  }
  mount() {
    this.removePointerDownListener = tn(this.node.current, "pointerdown", (t) =>
      this.onPointerDown(t)
    );
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
function dy() {
  const e = w.useContext(Ga);
  if (e === null) return [!0, null];
  const { isPresent: t, onExitComplete: n, register: r } = e,
    o = w.useId();
  return w.useEffect(() => r(o), []), !t && n ? [!1, () => n && n(o)] : [!0];
}
function jh(e, t) {
  return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
}
const ko = {
    correct: (e, t) => {
      if (!t.target) return e;
      if (typeof e == "string")
        if (V.test(e)) e = parseFloat(e);
        else return e;
      const n = jh(e, t.target.x),
        r = jh(e, t.target.y);
      return `${n}% ${r}%`;
    },
  },
  py = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
function BE(e) {
  const t = py.exec(e);
  if (!t) return [,];
  const [, n, r] = t;
  return [n, r];
}
function Tc(e, t, n = 1) {
  const [r, o] = BE(e);
  if (!r) return;
  const i = window.getComputedStyle(t).getPropertyValue(r);
  return i ? i.trim() : dc(o) ? Tc(o, t, n + 1) : o;
}
function zE(e, { ...t }, n) {
  const r = e.current;
  if (!(r instanceof Element)) return { target: t, transitionEnd: n };
  n && (n = { ...n }),
    e.values.forEach((o) => {
      const i = o.get();
      if (!dc(i)) return;
      const s = Tc(i, r);
      s && o.set(s);
    });
  for (const o in t) {
    const i = t[o];
    if (!dc(i)) continue;
    const s = Tc(i, r);
    s && ((t[o] = s), n || (n = {}), n[o] === void 0 && (n[o] = i));
  }
  return { target: t, transitionEnd: n };
}
const Bh = "_$css",
  $E = {
    correct: (e, { treeScale: t, projectionDelta: n }) => {
      const r = e,
        o = e.includes("var("),
        i = [];
      o && (e = e.replace(py, (p) => (i.push(p), Bh)));
      const s = On.parse(e);
      if (s.length > 5) return r;
      const a = On.createTransformer(e),
        l = typeof s[0] != "number" ? 1 : 0,
        u = n.x.scale * t.x,
        c = n.y.scale * t.y;
      (s[0 + l] /= u), (s[1 + l] /= c);
      const f = de(u, c, 0.5);
      typeof s[2 + l] == "number" && (s[2 + l] /= f),
        typeof s[3 + l] == "number" && (s[3 + l] /= f);
      let d = a(s);
      if (o) {
        let p = 0;
        d = d.replace(Bh, () => {
          const S = i[p];
          return p++, S;
        });
      }
      return d;
    },
  };
class UE extends L.Component {
  componentDidMount() {
    const {
        visualElement: t,
        layoutGroup: n,
        switchLayoutGroup: r,
        layoutId: o,
      } = this.props,
      { projection: i } = t;
    X2(WE),
      i &&
        (n.group && n.group.add(i),
        r && r.register && o && r.register(i),
        i.root.didUpdate(),
        i.addEventListener("animationComplete", () => {
          this.safeToRemove();
        }),
        i.setOptions({
          ...i.options,
          onExitComplete: () => this.safeToRemove(),
        })),
      (Vo.hasEverUpdated = !0);
  }
  getSnapshotBeforeUpdate(t) {
    const {
        layoutDependency: n,
        visualElement: r,
        drag: o,
        isPresent: i,
      } = this.props,
      s = r.projection;
    return (
      s &&
        ((s.isPresent = i),
        o || t.layoutDependency !== n || n === void 0
          ? s.willUpdate()
          : this.safeToRemove(),
        t.isPresent !== i &&
          (i
            ? s.promote()
            : s.relegate() ||
              ce.postRender(() => {
                const a = s.getStack();
                (!a || !a.members.length) && this.safeToRemove();
              }))),
      null
    );
  }
  componentDidUpdate() {
    const { projection: t } = this.props.visualElement;
    t &&
      (t.root.didUpdate(),
      !t.currentAnimation && t.isLead() && this.safeToRemove());
  }
  componentWillUnmount() {
    const {
        visualElement: t,
        layoutGroup: n,
        switchLayoutGroup: r,
      } = this.props,
      { projection: o } = t;
    o &&
      (o.scheduleCheckAfterUnmount(),
      n && n.group && n.group.remove(o),
      r && r.deregister && r.deregister(o));
  }
  safeToRemove() {
    const { safeToRemove: t } = this.props;
    t && t();
  }
  render() {
    return null;
  }
}
function hy(e) {
  const [t, n] = dy(),
    r = w.useContext(Bf);
  return L.createElement(UE, {
    ...e,
    layoutGroup: r,
    switchLayoutGroup: w.useContext(d0),
    isPresent: t,
    safeToRemove: n,
  });
}
const WE = {
    borderRadius: {
      ...ko,
      applyTo: [
        "borderTopLeftRadius",
        "borderTopRightRadius",
        "borderBottomLeftRadius",
        "borderBottomRightRadius",
      ],
    },
    borderTopLeftRadius: ko,
    borderTopRightRadius: ko,
    borderBottomLeftRadius: ko,
    borderBottomRightRadius: ko,
    boxShadow: $E,
  },
  my = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
  HE = my.length,
  zh = (e) => (typeof e == "string" ? parseFloat(e) : e),
  $h = (e) => typeof e == "number" || V.test(e);
function GE(e, t, n, r, o, i) {
  o
    ? ((e.opacity = de(0, n.opacity !== void 0 ? n.opacity : 1, ZE(r))),
      (e.opacityExit = de(t.opacity !== void 0 ? t.opacity : 1, 0, KE(r))))
    : i &&
      (e.opacity = de(
        t.opacity !== void 0 ? t.opacity : 1,
        n.opacity !== void 0 ? n.opacity : 1,
        r
      ));
  for (let s = 0; s < HE; s++) {
    const a = `border${my[s]}Radius`;
    let l = Uh(t, a),
      u = Uh(n, a);
    if (l === void 0 && u === void 0) continue;
    l || (l = 0),
      u || (u = 0),
      l === 0 || u === 0 || $h(l) === $h(u)
        ? ((e[a] = Math.max(de(zh(l), zh(u), r), 0)),
          (Ut.test(u) || Ut.test(l)) && (e[a] += "%"))
        : (e[a] = u);
  }
  (t.rotate || n.rotate) && (e.rotate = de(t.rotate || 0, n.rotate || 0, r));
}
function Uh(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const ZE = gy(0, 0.5, Xf),
  KE = gy(0.5, 0.95, be);
function gy(e, t, n) {
  return (r) => (r < e ? 0 : r > t ? 1 : n(mi(e, t, r)));
}
function Wh(e, t) {
  (e.min = t.min), (e.max = t.max);
}
function pt(e, t) {
  Wh(e.x, t.x), Wh(e.y, t.y);
}
function Hh(e, t, n, r, o) {
  return (
    (e -= t), (e = va(e, 1 / n, r)), o !== void 0 && (e = va(e, 1 / o, r)), e
  );
}
function YE(e, t = 0, n = 1, r = 0.5, o, i = e, s = e) {
  if (
    (Ut.test(t) &&
      ((t = parseFloat(t)), (t = de(s.min, s.max, t / 100) - s.min)),
    typeof t != "number")
  )
    return;
  let a = de(i.min, i.max, r);
  e === i && (a -= t),
    (e.min = Hh(e.min, t, n, a, o)),
    (e.max = Hh(e.max, t, n, a, o));
}
function Gh(e, t, [n, r, o], i, s) {
  YE(e, t[n], t[r], t[o], t.scale, i, s);
}
const XE = ["x", "scaleX", "originX"],
  QE = ["y", "scaleY", "originY"];
function Zh(e, t, n, r) {
  Gh(e.x, t, XE, n ? n.x : void 0, r ? r.x : void 0),
    Gh(e.y, t, QE, n ? n.y : void 0, r ? r.y : void 0);
}
function Kh(e) {
  return e.translate === 0 && e.scale === 1;
}
function vy(e) {
  return Kh(e.x) && Kh(e.y);
}
function Ec(e, t) {
  return (
    e.x.min === t.x.min &&
    e.x.max === t.x.max &&
    e.y.min === t.y.min &&
    e.y.max === t.y.max
  );
}
function Yh(e) {
  return lt(e.x) / lt(e.y);
}
class qE {
  constructor() {
    this.members = [];
  }
  add(t) {
    nd(this.members, t), t.scheduleRender();
  }
  remove(t) {
    if (
      (rd(this.members, t),
      t === this.prevLead && (this.prevLead = void 0),
      t === this.lead)
    ) {
      const n = this.members[this.members.length - 1];
      n && this.promote(n);
    }
  }
  relegate(t) {
    const n = this.members.findIndex((o) => t === o);
    if (n === 0) return !1;
    let r;
    for (let o = n; o >= 0; o--) {
      const i = this.members[o];
      if (i.isPresent !== !1) {
        r = i;
        break;
      }
    }
    return r ? (this.promote(r), !0) : !1;
  }
  promote(t, n) {
    const r = this.lead;
    if (t !== r && ((this.prevLead = r), (this.lead = t), t.show(), r)) {
      r.instance && r.scheduleRender(),
        t.scheduleRender(),
        (t.resumeFrom = r),
        n && (t.resumeFrom.preserveOpacity = !0),
        r.snapshot &&
          ((t.snapshot = r.snapshot),
          (t.snapshot.latestValues = r.animationValues || r.latestValues)),
        t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
      const { crossfade: o } = t.options;
      o === !1 && r.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((t) => {
      const { options: n, resumingFrom: r } = t;
      n.onExitComplete && n.onExitComplete(),
        r && r.options.onExitComplete && r.options.onExitComplete();
    });
  }
  scheduleRender() {
    this.members.forEach((t) => {
      t.instance && t.scheduleRender(!1);
    });
  }
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
function Xh(e, t, n) {
  let r = "";
  const o = e.x.translate / t.x,
    i = e.y.translate / t.y;
  if (
    ((o || i) && (r = `translate3d(${o}px, ${i}px, 0) `),
    (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `),
    n)
  ) {
    const { rotate: l, rotateX: u, rotateY: c } = n;
    l && (r += `rotate(${l}deg) `),
      u && (r += `rotateX(${u}deg) `),
      c && (r += `rotateY(${c}deg) `);
  }
  const s = e.x.scale * t.x,
    a = e.y.scale * t.y;
  return (s !== 1 || a !== 1) && (r += `scale(${s}, ${a})`), r || "none";
}
const JE = (e, t) => e.depth - t.depth;
class eb {
  constructor() {
    (this.children = []), (this.isDirty = !1);
  }
  add(t) {
    nd(this.children, t), (this.isDirty = !0);
  }
  remove(t) {
    rd(this.children, t), (this.isDirty = !0);
  }
  forEach(t) {
    this.isDirty && this.children.sort(JE),
      (this.isDirty = !1),
      this.children.forEach(t);
  }
}
function tb(e, t) {
  const n = performance.now(),
    r = ({ timestamp: o }) => {
      const i = o - n;
      i >= t && (An.read(r), e(i - t));
    };
  return ce.read(r, !0), () => An.read(r);
}
function nb(e) {
  window.MotionDebug && window.MotionDebug.record(e);
}
function rb(e) {
  return e instanceof SVGElement && e.tagName !== "svg";
}
function ob(e, t, n) {
  const r = et(e) ? e : eo(e);
  return r.start(td("", r, t, n)), r.animation;
}
const Qh = ["", "X", "Y", "Z"],
  qh = 1e3;
let ib = 0;
const Wn = {
  type: "projectionFrame",
  totalNodes: 0,
  resolvedTargetDeltas: 0,
  recalculatedProjection: 0,
};
function yy({
  attachResizeListener: e,
  defaultParent: t,
  measureScroll: n,
  checkIsScrollRoot: r,
  resetTransform: o,
}) {
  return class {
    constructor(s, a = {}, l = t == null ? void 0 : t()) {
      (this.id = ib++),
        (this.animationId = 0),
        (this.children = new Set()),
        (this.options = {}),
        (this.isTreeAnimating = !1),
        (this.isAnimationBlocked = !1),
        (this.isLayoutDirty = !1),
        (this.isProjectionDirty = !1),
        (this.isSharedProjectionDirty = !1),
        (this.isTransformDirty = !1),
        (this.updateManuallyBlocked = !1),
        (this.updateBlockedByResize = !1),
        (this.isUpdating = !1),
        (this.isSVG = !1),
        (this.needsReset = !1),
        (this.shouldResetTransform = !1),
        (this.treeScale = { x: 1, y: 1 }),
        (this.eventHandlers = new Map()),
        (this.potentialNodes = new Map()),
        (this.checkUpdateFailed = () => {
          this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
        }),
        (this.updateProjection = () => {
          (Wn.totalNodes =
            Wn.resolvedTargetDeltas =
            Wn.recalculatedProjection =
              0),
            this.nodes.forEach(lb),
            this.nodes.forEach(db),
            this.nodes.forEach(pb),
            this.nodes.forEach(ub),
            nb(Wn);
        }),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.elementId = s),
        (this.latestValues = a),
        (this.root = l ? l.root || l : this),
        (this.path = l ? [...l.path, l] : []),
        (this.parent = l),
        (this.depth = l ? l.depth + 1 : 0),
        s && this.root.registerPotentialNode(s, this);
      for (let u = 0; u < this.path.length; u++)
        this.path[u].shouldResetTransform = !0;
      this.root === this && (this.nodes = new eb());
    }
    addEventListener(s, a) {
      return (
        this.eventHandlers.has(s) || this.eventHandlers.set(s, new od()),
        this.eventHandlers.get(s).add(a)
      );
    }
    notifyListeners(s, ...a) {
      const l = this.eventHandlers.get(s);
      l && l.notify(...a);
    }
    hasListeners(s) {
      return this.eventHandlers.has(s);
    }
    registerPotentialNode(s, a) {
      this.potentialNodes.set(s, a);
    }
    mount(s, a = !1) {
      if (this.instance) return;
      (this.isSVG = rb(s)), (this.instance = s);
      const { layoutId: l, layout: u, visualElement: c } = this.options;
      if (
        (c && !c.current && c.mount(s),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        this.elementId && this.root.potentialNodes.delete(this.elementId),
        a && (u || l) && (this.isLayoutDirty = !0),
        e)
      ) {
        let f;
        const d = () => (this.root.updateBlockedByResize = !1);
        e(s, () => {
          (this.root.updateBlockedByResize = !0),
            f && f(),
            (f = tb(d, 250)),
            Vo.hasAnimatedSinceResize &&
              ((Vo.hasAnimatedSinceResize = !1), this.nodes.forEach(em));
        });
      }
      l && this.root.registerSharedNode(l, this),
        this.options.animate !== !1 &&
          c &&
          (l || u) &&
          this.addEventListener(
            "didUpdate",
            ({
              delta: f,
              hasLayoutChanged: d,
              hasRelativeTargetChanged: p,
              layout: S,
            }) => {
              if (this.isTreeAnimationBlocked()) {
                (this.target = void 0), (this.relativeTarget = void 0);
                return;
              }
              const v =
                  this.options.transition || c.getDefaultTransition() || yb,
                { onLayoutAnimationStart: P, onLayoutAnimationComplete: g } =
                  c.getProps(),
                h = !this.targetLayout || !Ec(this.targetLayout, S) || p,
                m = !d && p;
              if (
                this.options.layoutRoot ||
                (this.resumeFrom && this.resumeFrom.instance) ||
                m ||
                (d && (h || !this.currentAnimation))
              ) {
                this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0)),
                  this.setAnimationOrigin(f, m);
                const C = { ...ny(v, "layout"), onPlay: P, onComplete: g };
                (c.shouldReduceMotion || this.options.layoutRoot) &&
                  ((C.delay = 0), (C.type = !1)),
                  this.startAnimation(C);
              } else
                !d && this.animationProgress === 0 && em(this),
                  this.isLead() &&
                    this.options.onExitComplete &&
                    this.options.onExitComplete();
              this.targetLayout = S;
            }
          );
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const s = this.getStack();
      s && s.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        An.preRender(this.updateProjection);
    }
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return (
        this.isAnimationBlocked ||
        (this.parent && this.parent.isTreeAnimationBlocked()) ||
        !1
      );
    }
    startUpdate() {
      this.isUpdateBlocked() ||
        ((this.isUpdating = !0),
        this.nodes && this.nodes.forEach(hb),
        this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: s } = this.options;
      return s && s.getProps().transformTemplate;
    }
    willUpdate(s = !0) {
      if (this.root.isUpdateBlocked()) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (
        (!this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)
      )
        return;
      this.isLayoutDirty = !0;
      for (let c = 0; c < this.path.length; c++) {
        const f = this.path[c];
        (f.shouldResetTransform = !0),
          f.updateScroll("snapshot"),
          f.options.layoutRoot && f.willUpdate(!1);
      }
      const { layoutId: a, layout: l } = this.options;
      if (a === void 0 && !l) return;
      const u = this.getTransformTemplate();
      (this.prevTransformTemplateValue = u ? u(this.latestValues, "") : void 0),
        this.updateSnapshot(),
        s && this.notifyListeners("willUpdate");
    }
    didUpdate() {
      if (this.isUpdateBlocked()) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(Jh);
        return;
      }
      this.isUpdating &&
        ((this.isUpdating = !1),
        this.potentialNodes.size &&
          (this.potentialNodes.forEach(Sb), this.potentialNodes.clear()),
        this.nodes.forEach(fb),
        this.nodes.forEach(sb),
        this.nodes.forEach(ab),
        this.clearAllSnapshots(),
        Wl.update(),
        Wl.preRender(),
        Wl.render());
    }
    clearAllSnapshots() {
      this.nodes.forEach(cb), this.sharedNodes.forEach(mb);
    }
    scheduleUpdateProjection() {
      ce.preRender(this.updateProjection, !1, !0);
    }
    scheduleCheckAfterUnmount() {
      ce.postRender(() => {
        this.isLayoutDirty
          ? this.root.didUpdate()
          : this.root.checkUpdateFailed();
      });
    }
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure());
    }
    updateLayout() {
      if (
        !this.instance ||
        (this.updateScroll(),
        !(this.options.alwaysMeasureLayout && this.isLead()) &&
          !this.isLayoutDirty)
      )
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let l = 0; l < this.path.length; l++) this.path[l].updateScroll();
      const s = this.layout;
      (this.layout = this.measure(!1)),
        (this.layoutCorrected = ye()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: a } = this.options;
      a &&
        a.notify(
          "LayoutMeasure",
          this.layout.layoutBox,
          s ? s.layoutBox : void 0
        );
    }
    updateScroll(s = "measure") {
      let a = !!(this.options.layoutScroll && this.instance);
      this.scroll &&
        this.scroll.animationId === this.root.animationId &&
        this.scroll.phase === s &&
        (a = !1),
        a &&
          (this.scroll = {
            animationId: this.root.animationId,
            phase: s,
            isRoot: r(this.instance),
            offset: n(this.instance),
          });
    }
    resetTransform() {
      if (!o) return;
      const s = this.isLayoutDirty || this.shouldResetTransform,
        a = this.projectionDelta && !vy(this.projectionDelta),
        l = this.getTransformTemplate(),
        u = l ? l(this.latestValues, "") : void 0,
        c = u !== this.prevTransformTemplateValue;
      s &&
        (a || Un(this.latestValues) || c) &&
        (o(this.instance, u),
        (this.shouldResetTransform = !1),
        this.scheduleRender());
    }
    measure(s = !0) {
      const a = this.measurePageBox();
      let l = this.removeElementScroll(a);
      return (
        s && (l = this.removeTransform(l)),
        wb(l),
        {
          animationId: this.root.animationId,
          measuredBox: a,
          layoutBox: l,
          latestValues: {},
          source: this.id,
        }
      );
    }
    measurePageBox() {
      const { visualElement: s } = this.options;
      if (!s) return ye();
      const a = s.measureViewportBox(),
        { scroll: l } = this.root;
      return l && (hn(a.x, l.offset.x), hn(a.y, l.offset.y)), a;
    }
    removeElementScroll(s) {
      const a = ye();
      pt(a, s);
      for (let l = 0; l < this.path.length; l++) {
        const u = this.path[l],
          { scroll: c, options: f } = u;
        if (u !== this.root && c && f.layoutScroll) {
          if (c.isRoot) {
            pt(a, s);
            const { scroll: d } = this.root;
            d && (hn(a.x, -d.offset.x), hn(a.y, -d.offset.y));
          }
          hn(a.x, c.offset.x), hn(a.y, c.offset.y);
        }
      }
      return a;
    }
    applyTransform(s, a = !1) {
      const l = ye();
      pt(l, s);
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u];
        !a &&
          c.options.layoutScroll &&
          c.scroll &&
          c !== c.root &&
          Lr(l, { x: -c.scroll.offset.x, y: -c.scroll.offset.y }),
          Un(c.latestValues) && Lr(l, c.latestValues);
      }
      return Un(this.latestValues) && Lr(l, this.latestValues), l;
    }
    removeTransform(s) {
      const a = ye();
      pt(a, s);
      for (let l = 0; l < this.path.length; l++) {
        const u = this.path[l];
        if (!u.instance || !Un(u.latestValues)) continue;
        Cc(u.latestValues) && u.updateSnapshot();
        const c = ye(),
          f = u.measurePageBox();
        pt(c, f),
          Zh(a, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, c);
      }
      return Un(this.latestValues) && Zh(a, this.latestValues), a;
    }
    setTargetDelta(s) {
      (this.targetDelta = s),
        this.root.scheduleUpdateProjection(),
        (this.isProjectionDirty = !0);
    }
    setOptions(s) {
      this.options = {
        ...this.options,
        ...s,
        crossfade: s.crossfade !== void 0 ? s.crossfade : !0,
      };
    }
    clearMeasurements() {
      (this.scroll = void 0),
        (this.layout = void 0),
        (this.snapshot = void 0),
        (this.prevTransformTemplateValue = void 0),
        (this.targetDelta = void 0),
        (this.target = void 0),
        (this.isLayoutDirty = !1);
    }
    resolveTargetDelta(s = !1) {
      var a;
      const l = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = l.isProjectionDirty),
        this.isTransformDirty || (this.isTransformDirty = l.isTransformDirty),
        this.isSharedProjectionDirty ||
          (this.isSharedProjectionDirty = l.isSharedProjectionDirty);
      const u = !!this.resumingFrom || this !== l;
      if (
        !(
          s ||
          (u && this.isSharedProjectionDirty) ||
          this.isProjectionDirty ||
          (!((a = this.parent) === null || a === void 0) &&
            a.isProjectionDirty) ||
          this.attemptToResolveRelativeTarget
        )
      )
        return;
      const { layout: f, layoutId: d } = this.options;
      if (!(!this.layout || !(f || d))) {
        if (
          ((this.resolvedRelativeTargetAt = Be.timestamp),
          !this.targetDelta && !this.relativeTarget)
        ) {
          const p = this.getClosestProjectingParent();
          p && p.layout
            ? ((this.relativeParent = p),
              (this.relativeTarget = ye()),
              (this.relativeTargetOrigin = ye()),
              $o(
                this.relativeTargetOrigin,
                this.layout.layoutBox,
                p.layout.layoutBox
              ),
              pt(this.relativeTarget, this.relativeTargetOrigin))
            : (this.relativeParent = this.relativeTarget = void 0);
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (
            (this.target ||
              ((this.target = ye()), (this.targetWithTransforms = ye())),
            this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.relativeParent &&
            this.relativeParent.target
              ? (this.relativeParent.resolvedRelativeTargetAt !==
                  Be.timestamp && this.relativeParent.resolveTargetDelta(!0),
                kE(
                  this.target,
                  this.relativeTarget,
                  this.relativeParent.target
                ))
              : this.targetDelta
              ? (this.resumingFrom
                  ? (this.target = this.applyTransform(this.layout.layoutBox))
                  : pt(this.target, this.layout.layoutBox),
                cy(this.target, this.targetDelta))
              : pt(this.target, this.layout.layoutBox),
            this.attemptToResolveRelativeTarget)
          ) {
            this.attemptToResolveRelativeTarget = !1;
            const p = this.getClosestProjectingParent();
            p &&
            !!p.resumingFrom == !!this.resumingFrom &&
            !p.options.layoutScroll &&
            p.target
              ? ((this.relativeParent = p),
                (this.relativeTarget = ye()),
                (this.relativeTargetOrigin = ye()),
                $o(this.relativeTargetOrigin, this.target, p.target),
                pt(this.relativeTarget, this.relativeTargetOrigin))
              : (this.relativeParent = this.relativeTarget = void 0);
          }
          Wn.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (
        !(
          !this.parent ||
          Cc(this.parent.latestValues) ||
          uy(this.parent.latestValues)
        )
      )
        return this.parent.isProjecting()
          ? this.parent
          : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!(
        (this.relativeTarget || this.targetDelta || this.options.layoutRoot) &&
        this.layout
      );
    }
    calcProjection() {
      var s;
      const a = this.getLead(),
        l = !!this.resumingFrom || this !== a;
      let u = !0;
      if (
        ((this.isProjectionDirty ||
          (!((s = this.parent) === null || s === void 0) &&
            s.isProjectionDirty)) &&
          (u = !1),
        l &&
          (this.isSharedProjectionDirty || this.isTransformDirty) &&
          (u = !1),
        this.resolvedRelativeTargetAt === Be.timestamp && (u = !1),
        u)
      )
        return;
      const { layout: c, layoutId: f } = this.options;
      if (
        ((this.isTreeAnimating = !!(
          (this.parent && this.parent.isTreeAnimating) ||
          this.currentAnimation ||
          this.pendingAnimation
        )),
        this.isTreeAnimating ||
          (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(c || f))
      )
        return;
      pt(this.layoutCorrected, this.layout.layoutBox),
        AE(this.layoutCorrected, this.treeScale, this.path, l);
      const { target: d } = a;
      if (!d) return;
      this.projectionDelta ||
        ((this.projectionDelta = Uo()),
        (this.projectionDeltaWithTransform = Uo()));
      const p = this.treeScale.x,
        S = this.treeScale.y,
        v = this.projectionTransform;
      zo(this.projectionDelta, this.layoutCorrected, d, this.latestValues),
        (this.projectionTransform = Xh(this.projectionDelta, this.treeScale)),
        (this.projectionTransform !== v ||
          this.treeScale.x !== p ||
          this.treeScale.y !== S) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners("projectionUpdate", d)),
        Wn.recalculatedProjection++;
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(s = !0) {
      if ((this.options.scheduleRender && this.options.scheduleRender(), s)) {
        const a = this.getStack();
        a && a.scheduleRender();
      }
      this.resumingFrom &&
        !this.resumingFrom.instance &&
        (this.resumingFrom = void 0);
    }
    setAnimationOrigin(s, a = !1) {
      const l = this.snapshot,
        u = l ? l.latestValues : {},
        c = { ...this.latestValues },
        f = Uo();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !a);
      const d = ye(),
        p = l ? l.source : void 0,
        S = this.layout ? this.layout.source : void 0,
        v = p !== S,
        P = this.getStack(),
        g = !P || P.members.length <= 1,
        h = !!(v && !g && this.options.crossfade === !0 && !this.path.some(vb));
      this.animationProgress = 0;
      let m;
      (this.mixTargetDelta = (C) => {
        const E = C / 1e3;
        tm(f.x, s.x, E),
          tm(f.y, s.y, E),
          this.setTargetDelta(f),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            ($o(d, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
            gb(this.relativeTarget, this.relativeTargetOrigin, d, E),
            m && Ec(this.relativeTarget, m) && (this.isProjectionDirty = !1),
            m || (m = ye()),
            pt(m, this.relativeTarget)),
          v &&
            ((this.animationValues = c), GE(c, u, this.latestValues, E, h, g)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = E);
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(s) {
      this.notifyListeners("animationStart"),
        this.currentAnimation && this.currentAnimation.stop(),
        this.resumingFrom &&
          this.resumingFrom.currentAnimation &&
          this.resumingFrom.currentAnimation.stop(),
        this.pendingAnimation &&
          (An.update(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = ce.update(() => {
          (Vo.hasAnimatedSinceResize = !0),
            (this.currentAnimation = ob(0, qh, {
              ...s,
              onUpdate: (a) => {
                this.mixTargetDelta(a), s.onUpdate && s.onUpdate(a);
              },
              onComplete: () => {
                s.onComplete && s.onComplete(), this.completeAnimation();
              },
            })),
            this.resumingFrom &&
              (this.resumingFrom.currentAnimation = this.currentAnimation),
            (this.pendingAnimation = void 0);
        }));
    }
    completeAnimation() {
      this.resumingFrom &&
        ((this.resumingFrom.currentAnimation = void 0),
        (this.resumingFrom.preserveOpacity = void 0));
      const s = this.getStack();
      s && s.exitAnimationComplete(),
        (this.resumingFrom =
          this.currentAnimation =
          this.animationValues =
            void 0),
        this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation &&
        (this.mixTargetDelta && this.mixTargetDelta(qh),
        this.currentAnimation.stop()),
        this.completeAnimation();
    }
    applyTransformsToTarget() {
      const s = this.getLead();
      let {
        targetWithTransforms: a,
        target: l,
        layout: u,
        latestValues: c,
      } = s;
      if (!(!a || !l || !u)) {
        if (
          this !== s &&
          this.layout &&
          u &&
          Sy(this.options.animationType, this.layout.layoutBox, u.layoutBox)
        ) {
          l = this.target || ye();
          const f = lt(this.layout.layoutBox.x);
          (l.x.min = s.target.x.min), (l.x.max = l.x.min + f);
          const d = lt(this.layout.layoutBox.y);
          (l.y.min = s.target.y.min), (l.y.max = l.y.min + d);
        }
        pt(a, l),
          Lr(a, c),
          zo(this.projectionDeltaWithTransform, this.layoutCorrected, a, c);
      }
    }
    registerSharedNode(s, a) {
      this.sharedNodes.has(s) || this.sharedNodes.set(s, new qE()),
        this.sharedNodes.get(s).add(a);
      const u = a.options.initialPromotionConfig;
      a.promote({
        transition: u ? u.transition : void 0,
        preserveFollowOpacity:
          u && u.shouldPreserveFollowOpacity
            ? u.shouldPreserveFollowOpacity(a)
            : void 0,
      });
    }
    isLead() {
      const s = this.getStack();
      return s ? s.lead === this : !0;
    }
    getLead() {
      var s;
      const { layoutId: a } = this.options;
      return a
        ? ((s = this.getStack()) === null || s === void 0 ? void 0 : s.lead) ||
            this
        : this;
    }
    getPrevLead() {
      var s;
      const { layoutId: a } = this.options;
      return a
        ? (s = this.getStack()) === null || s === void 0
          ? void 0
          : s.prevLead
        : void 0;
    }
    getStack() {
      const { layoutId: s } = this.options;
      if (s) return this.root.sharedNodes.get(s);
    }
    promote({ needsReset: s, transition: a, preserveFollowOpacity: l } = {}) {
      const u = this.getStack();
      u && u.promote(this, l),
        s && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        a && this.setOptions({ transition: a });
    }
    relegate() {
      const s = this.getStack();
      return s ? s.relegate(this) : !1;
    }
    resetRotation() {
      const { visualElement: s } = this.options;
      if (!s) return;
      let a = !1;
      const { latestValues: l } = s;
      if (((l.rotate || l.rotateX || l.rotateY || l.rotateZ) && (a = !0), !a))
        return;
      const u = {};
      for (let c = 0; c < Qh.length; c++) {
        const f = "rotate" + Qh[c];
        l[f] && ((u[f] = l[f]), s.setStaticValue(f, 0));
      }
      s.render();
      for (const c in u) s.setStaticValue(c, u[c]);
      s.scheduleRender();
    }
    getProjectionStyles(s = {}) {
      var a, l;
      const u = {};
      if (!this.instance || this.isSVG) return u;
      if (this.isVisible) u.visibility = "";
      else return { visibility: "hidden" };
      const c = this.getTransformTemplate();
      if (this.needsReset)
        return (
          (this.needsReset = !1),
          (u.opacity = ""),
          (u.pointerEvents = As(s.pointerEvents) || ""),
          (u.transform = c ? c(this.latestValues, "") : "none"),
          u
        );
      const f = this.getLead();
      if (!this.projectionDelta || !this.layout || !f.target) {
        const v = {};
        return (
          this.options.layoutId &&
            ((v.opacity =
              this.latestValues.opacity !== void 0
                ? this.latestValues.opacity
                : 1),
            (v.pointerEvents = As(s.pointerEvents) || "")),
          this.hasProjected &&
            !Un(this.latestValues) &&
            ((v.transform = c ? c({}, "") : "none"), (this.hasProjected = !1)),
          v
        );
      }
      const d = f.animationValues || f.latestValues;
      this.applyTransformsToTarget(),
        (u.transform = Xh(
          this.projectionDeltaWithTransform,
          this.treeScale,
          d
        )),
        c && (u.transform = c(d, u.transform));
      const { x: p, y: S } = this.projectionDelta;
      (u.transformOrigin = `${p.origin * 100}% ${S.origin * 100}% 0`),
        f.animationValues
          ? (u.opacity =
              f === this
                ? (l =
                    (a = d.opacity) !== null && a !== void 0
                      ? a
                      : this.latestValues.opacity) !== null && l !== void 0
                  ? l
                  : 1
                : this.preserveOpacity
                ? this.latestValues.opacity
                : d.opacityExit)
          : (u.opacity =
              f === this
                ? d.opacity !== void 0
                  ? d.opacity
                  : ""
                : d.opacityExit !== void 0
                ? d.opacityExit
                : 0);
      for (const v in ca) {
        if (d[v] === void 0) continue;
        const { correct: P, applyTo: g } = ca[v],
          h = u.transform === "none" ? d[v] : P(d[v], f);
        if (g) {
          const m = g.length;
          for (let C = 0; C < m; C++) u[g[C]] = h;
        } else u[v] = h;
      }
      return (
        this.options.layoutId &&
          (u.pointerEvents = f === this ? As(s.pointerEvents) || "" : "none"),
        u
      );
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      this.root.nodes.forEach((s) => {
        var a;
        return (a = s.currentAnimation) === null || a === void 0
          ? void 0
          : a.stop();
      }),
        this.root.nodes.forEach(Jh),
        this.root.sharedNodes.clear();
    }
  };
}
function sb(e) {
  e.updateLayout();
}
function ab(e) {
  var t;
  const n =
    ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) ||
    e.snapshot;
  if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
    const { layoutBox: r, measuredBox: o } = e.layout,
      { animationType: i } = e.options,
      s = n.source !== e.layout.source;
    i === "size"
      ? It((f) => {
          const d = s ? n.measuredBox[f] : n.layoutBox[f],
            p = lt(d);
          (d.min = r[f].min), (d.max = d.min + p);
        })
      : Sy(i, n.layoutBox, r) &&
        It((f) => {
          const d = s ? n.measuredBox[f] : n.layoutBox[f],
            p = lt(r[f]);
          (d.max = d.min + p),
            e.relativeTarget &&
              !e.currentAnimation &&
              ((e.isProjectionDirty = !0),
              (e.relativeTarget[f].max = e.relativeTarget[f].min + p));
        });
    const a = Uo();
    zo(a, r, n.layoutBox);
    const l = Uo();
    s ? zo(l, e.applyTransform(o, !0), n.measuredBox) : zo(l, r, n.layoutBox);
    const u = !vy(a);
    let c = !1;
    if (!e.resumeFrom) {
      const f = e.getClosestProjectingParent();
      if (f && !f.resumeFrom) {
        const { snapshot: d, layout: p } = f;
        if (d && p) {
          const S = ye();
          $o(S, n.layoutBox, d.layoutBox);
          const v = ye();
          $o(v, r, p.layoutBox),
            Ec(S, v) || (c = !0),
            f.options.layoutRoot &&
              ((e.relativeTarget = v),
              (e.relativeTargetOrigin = S),
              (e.relativeParent = f));
        }
      }
    }
    e.notifyListeners("didUpdate", {
      layout: r,
      snapshot: n,
      delta: l,
      layoutDelta: a,
      hasLayoutChanged: u,
      hasRelativeTargetChanged: c,
    });
  } else if (e.isLead()) {
    const { onExitComplete: r } = e.options;
    r && r();
  }
  e.options.transition = void 0;
}
function lb(e) {
  Wn.totalNodes++,
    e.parent &&
      (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
      e.isSharedProjectionDirty ||
        (e.isSharedProjectionDirty = !!(
          e.isProjectionDirty ||
          e.parent.isProjectionDirty ||
          e.parent.isSharedProjectionDirty
        )),
      e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function ub(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function cb(e) {
  e.clearSnapshot();
}
function Jh(e) {
  e.clearMeasurements();
}
function fb(e) {
  const { visualElement: t } = e.options;
  t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"),
    e.resetTransform();
}
function em(e) {
  e.finishAnimation(), (e.targetDelta = e.relativeTarget = e.target = void 0);
}
function db(e) {
  e.resolveTargetDelta();
}
function pb(e) {
  e.calcProjection();
}
function hb(e) {
  e.resetRotation();
}
function mb(e) {
  e.removeLeadSnapshot();
}
function tm(e, t, n) {
  (e.translate = de(t.translate, 0, n)),
    (e.scale = de(t.scale, 1, n)),
    (e.origin = t.origin),
    (e.originPoint = t.originPoint);
}
function nm(e, t, n, r) {
  (e.min = de(t.min, n.min, r)), (e.max = de(t.max, n.max, r));
}
function gb(e, t, n, r) {
  nm(e.x, t.x, n.x, r), nm(e.y, t.y, n.y, r);
}
function vb(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const yb = { duration: 0.45, ease: [0.4, 0, 0.1, 1] };
function Sb(e, t) {
  let n = e.root;
  for (let i = e.path.length - 1; i >= 0; i--)
    if (e.path[i].instance) {
      n = e.path[i];
      break;
    }
  const o = (n && n !== e.root ? n.instance : document).querySelector(
    `[data-projection-id="${t}"]`
  );
  o && e.mount(o, !0);
}
function rm(e) {
  (e.min = Math.round(e.min)), (e.max = Math.round(e.max));
}
function wb(e) {
  rm(e.x), rm(e.y);
}
function Sy(e, t, n) {
  return (
    e === "position" || (e === "preserve-aspect" && !xc(Yh(t), Yh(n), 0.2))
  );
}
const xb = yy({
    attachResizeListener: (e, t) => Jt(e, "resize", t),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body.scrollLeft,
      y: document.documentElement.scrollTop || document.body.scrollTop,
    }),
    checkIsScrollRoot: () => !0,
  }),
  tu = { current: void 0 },
  wy = yy({
    measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
    defaultParent: () => {
      if (!tu.current) {
        const e = new xb(0, {});
        e.mount(window), e.setOptions({ layoutScroll: !0 }), (tu.current = e);
      }
      return tu.current;
    },
    resetTransform: (e, t) => {
      e.style.transform = t !== void 0 ? t : "none";
    },
    checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed",
  }),
  kb = {
    pan: { Feature: jE },
    drag: { Feature: VE, ProjectionNode: wy, MeasureLayout: hy },
  },
  Cb = new Set(["width", "height", "top", "left", "right", "bottom", "x", "y"]),
  xy = (e) => Cb.has(e),
  Pb = (e) => Object.keys(e).some(xy),
  om = (e) => e === fr || e === V,
  im = (e, t) => parseFloat(e.split(", ")[t]),
  sm =
    (e, t) =>
    (n, { transform: r }) => {
      if (r === "none" || !r) return 0;
      const o = r.match(/^matrix3d\((.+)\)$/);
      if (o) return im(o[1], t);
      {
        const i = r.match(/^matrix\((.+)\)$/);
        return i ? im(i[1], e) : 0;
      }
    },
  Tb = new Set(["x", "y", "z"]),
  Eb = Xa.filter((e) => !Tb.has(e));
function bb(e) {
  const t = [];
  return (
    Eb.forEach((n) => {
      const r = e.getValue(n);
      r !== void 0 &&
        (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0));
    }),
    t.length && e.render(),
    t
  );
}
const am = {
    width: ({ x: e }, { paddingLeft: t = "0", paddingRight: n = "0" }) =>
      e.max - e.min - parseFloat(t) - parseFloat(n),
    height: ({ y: e }, { paddingTop: t = "0", paddingBottom: n = "0" }) =>
      e.max - e.min - parseFloat(t) - parseFloat(n),
    top: (e, { top: t }) => parseFloat(t),
    left: (e, { left: t }) => parseFloat(t),
    bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
    right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
    x: sm(4, 13),
    y: sm(5, 14),
  },
  _b = (e, t, n) => {
    const r = t.measureViewportBox(),
      o = t.current,
      i = getComputedStyle(o),
      { display: s } = i,
      a = {};
    s === "none" && t.setStaticValue("display", e.display || "block"),
      n.forEach((u) => {
        a[u] = am[u](r, i);
      }),
      t.render();
    const l = t.measureViewportBox();
    return (
      n.forEach((u) => {
        const c = t.getValue(u);
        c && c.jump(a[u]), (e[u] = am[u](l, i));
      }),
      e
    );
  },
  Rb = (e, t, n = {}, r = {}) => {
    (t = { ...t }), (r = { ...r });
    const o = Object.keys(t).filter(xy);
    let i = [],
      s = !1;
    const a = [];
    if (
      (o.forEach((l) => {
        const u = e.getValue(l);
        if (!e.hasValue(l)) return;
        let c = n[l],
          f = xo(c);
        const d = t[l];
        let p;
        if (da(d)) {
          const S = d.length,
            v = d[0] === null ? 1 : 0;
          (c = d[v]), (f = xo(c));
          for (let P = v; P < S; P++) p ? Yf(xo(d[P]) === p) : (p = xo(d[P]));
        } else p = xo(d);
        if (f !== p)
          if (om(f) && om(p)) {
            const S = u.get();
            typeof S == "string" && u.set(parseFloat(S)),
              typeof d == "string"
                ? (t[l] = parseFloat(d))
                : Array.isArray(d) && p === V && (t[l] = d.map(parseFloat));
          } else
            f != null &&
            f.transform &&
            p != null &&
            p.transform &&
            (c === 0 || d === 0)
              ? c === 0
                ? u.set(p.transform(c))
                : (t[l] = f.transform(d))
              : (s || ((i = bb(e)), (s = !0)),
                a.push(l),
                (r[l] = r[l] !== void 0 ? r[l] : t[l]),
                u.jump(d));
      }),
      a.length)
    ) {
      const l = a.indexOf("height") >= 0 ? window.pageYOffset : null,
        u = _b(t, e, a);
      return (
        i.length &&
          i.forEach(([c, f]) => {
            e.getValue(c).set(f);
          }),
        e.render(),
        Za && l !== null && window.scrollTo({ top: l }),
        { target: u, transitionEnd: r }
      );
    } else return { target: t, transitionEnd: r };
  };
function Mb(e, t, n, r) {
  return Pb(t) ? Rb(e, t, n, r) : { target: t, transitionEnd: r };
}
const Ab = (e, t, n, r) => {
    const o = zE(e, t, r);
    return (t = o.target), (r = o.transitionEnd), Mb(e, t, n, r);
  },
  bc = { current: null },
  ky = { current: !1 };
function Ob() {
  if (((ky.current = !0), !!Za))
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"),
        t = () => (bc.current = e.matches);
      e.addListener(t), t();
    } else bc.current = !1;
}
function Lb(e, t, n) {
  const { willChange: r } = t;
  for (const o in t) {
    const i = t[o],
      s = n[o];
    if (et(i)) e.addValue(o, i), ga(r) && r.add(o);
    else if (et(s)) e.addValue(o, eo(i, { owner: e })), ga(r) && r.remove(o);
    else if (s !== i)
      if (e.hasValue(o)) {
        const a = e.getValue(o);
        !a.hasAnimated && a.set(i);
      } else {
        const a = e.getStaticValue(o);
        e.addValue(o, eo(a !== void 0 ? a : i, { owner: e }));
      }
  }
  for (const o in n) t[o] === void 0 && e.removeValue(o);
  return t;
}
const lm = new WeakMap(),
  Cy = Object.keys(di),
  Fb = Cy.length,
  um = [
    "AnimationStart",
    "AnimationComplete",
    "Update",
    "BeforeLayoutMeasure",
    "LayoutMeasure",
    "LayoutAnimationStart",
    "LayoutAnimationComplete",
  ],
  Ib = Vf.length;
class Db {
  constructor(
    {
      parent: t,
      props: n,
      presenceContext: r,
      reducedMotionConfig: o,
      visualState: i,
    },
    s = {}
  ) {
    (this.current = null),
      (this.children = new Set()),
      (this.isVariantNode = !1),
      (this.isControllingVariants = !1),
      (this.shouldReduceMotion = null),
      (this.values = new Map()),
      (this.features = {}),
      (this.valueSubscriptions = new Map()),
      (this.prevMotionValues = {}),
      (this.events = {}),
      (this.propEventSubscriptions = {}),
      (this.notifyUpdate = () => this.notify("Update", this.latestValues)),
      (this.render = () => {
        this.current &&
          (this.triggerBuild(),
          this.renderInstance(
            this.current,
            this.renderState,
            this.props.style,
            this.projection
          ));
      }),
      (this.scheduleRender = () => ce.render(this.render, !1, !0));
    const { latestValues: a, renderState: l } = i;
    (this.latestValues = a),
      (this.baseTarget = { ...a }),
      (this.initialValues = n.initial ? { ...a } : {}),
      (this.renderState = l),
      (this.parent = t),
      (this.props = n),
      (this.presenceContext = r),
      (this.depth = t ? t.depth + 1 : 0),
      (this.reducedMotionConfig = o),
      (this.options = s),
      (this.isControllingVariants = Ya(n)),
      (this.isVariantNode = f0(n)),
      this.isVariantNode && (this.variantChildren = new Set()),
      (this.manuallyAnimateOnMount = !!(t && t.current));
    const { willChange: u, ...c } = this.scrapeMotionValuesFromProps(n, {});
    for (const f in c) {
      const d = c[f];
      a[f] !== void 0 && et(d) && (d.set(a[f], !1), ga(u) && u.add(f));
    }
  }
  scrapeMotionValuesFromProps(t, n) {
    return {};
  }
  mount(t) {
    (this.current = t),
      lm.set(t, this),
      this.projection && this.projection.mount(t),
      this.parent &&
        this.isVariantNode &&
        !this.isControllingVariants &&
        (this.removeFromVariantTree = this.parent.addVariantChild(this)),
      this.values.forEach((n, r) => this.bindToMotionValue(r, n)),
      ky.current || Ob(),
      (this.shouldReduceMotion =
        this.reducedMotionConfig === "never"
          ? !1
          : this.reducedMotionConfig === "always"
          ? !0
          : bc.current),
      this.parent && this.parent.children.add(this),
      this.update(this.props, this.presenceContext);
  }
  unmount() {
    lm.delete(this.current),
      this.projection && this.projection.unmount(),
      An.update(this.notifyUpdate),
      An.render(this.render),
      this.valueSubscriptions.forEach((t) => t()),
      this.removeFromVariantTree && this.removeFromVariantTree(),
      this.parent && this.parent.children.delete(this);
    for (const t in this.events) this.events[t].clear();
    for (const t in this.features) this.features[t].unmount();
    this.current = null;
  }
  bindToMotionValue(t, n) {
    const r = cr.has(t),
      o = n.on("change", (s) => {
        (this.latestValues[t] = s),
          this.props.onUpdate && ce.update(this.notifyUpdate, !1, !0),
          r && this.projection && (this.projection.isTransformDirty = !0);
      }),
      i = n.on("renderRequest", this.scheduleRender);
    this.valueSubscriptions.set(t, () => {
      o(), i();
    });
  }
  sortNodePosition(t) {
    return !this.current ||
      !this.sortInstanceNodePosition ||
      this.type !== t.type
      ? 0
      : this.sortInstanceNodePosition(this.current, t.current);
  }
  loadFeatures({ children: t, ...n }, r, o, i, s) {
    let a, l;
    for (let u = 0; u < Fb; u++) {
      const c = Cy[u],
        {
          isEnabled: f,
          Feature: d,
          ProjectionNode: p,
          MeasureLayout: S,
        } = di[c];
      p && (a = p),
        f(n) &&
          (!this.features[c] && d && (this.features[c] = new d(this)),
          S && (l = S));
    }
    if (!this.projection && a) {
      this.projection = new a(
        i,
        this.latestValues,
        this.parent && this.parent.projection
      );
      const {
        layoutId: u,
        layout: c,
        drag: f,
        dragConstraints: d,
        layoutScroll: p,
        layoutRoot: S,
      } = n;
      this.projection.setOptions({
        layoutId: u,
        layout: c,
        alwaysMeasureLayout: !!f || (d && Ar(d)),
        visualElement: this,
        scheduleRender: () => this.scheduleRender(),
        animationType: typeof c == "string" ? c : "both",
        initialPromotionConfig: s,
        layoutScroll: p,
        layoutRoot: S,
      });
    }
    return l;
  }
  updateFeatures() {
    for (const t in this.features) {
      const n = this.features[t];
      n.isMounted
        ? n.update(this.props, this.prevProps)
        : (n.mount(), (n.isMounted = !0));
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.options, this.props);
  }
  measureViewportBox() {
    return this.current
      ? this.measureInstanceViewportBox(this.current, this.props)
      : ye();
  }
  getStaticValue(t) {
    return this.latestValues[t];
  }
  setStaticValue(t, n) {
    this.latestValues[t] = n;
  }
  makeTargetAnimatable(t, n = !0) {
    return this.makeTargetAnimatableFromInstance(t, this.props, n);
  }
  update(t, n) {
    (t.transformTemplate || this.props.transformTemplate) &&
      this.scheduleRender(),
      (this.prevProps = this.props),
      (this.props = t),
      (this.prevPresenceContext = this.presenceContext),
      (this.presenceContext = n);
    for (let r = 0; r < um.length; r++) {
      const o = um[r];
      this.propEventSubscriptions[o] &&
        (this.propEventSubscriptions[o](),
        delete this.propEventSubscriptions[o]);
      const i = t["on" + o];
      i && (this.propEventSubscriptions[o] = this.on(o, i));
    }
    (this.prevMotionValues = Lb(
      this,
      this.scrapeMotionValuesFromProps(t, this.prevProps),
      this.prevMotionValues
    )),
      this.handleChildMotionValue && this.handleChildMotionValue();
  }
  getProps() {
    return this.props;
  }
  getVariant(t) {
    return this.props.variants ? this.props.variants[t] : void 0;
  }
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode
      ? this
      : this.parent
      ? this.parent.getClosestVariantNode()
      : void 0;
  }
  getVariantContext(t = !1) {
    if (t) return this.parent ? this.parent.getVariantContext() : void 0;
    if (!this.isControllingVariants) {
      const r = this.parent ? this.parent.getVariantContext() || {} : {};
      return (
        this.props.initial !== void 0 && (r.initial = this.props.initial), r
      );
    }
    const n = {};
    for (let r = 0; r < Ib; r++) {
      const o = Vf[r],
        i = this.props[o];
      (fi(i) || i === !1) && (n[o] = i);
    }
    return n;
  }
  addVariantChild(t) {
    const n = this.getClosestVariantNode();
    if (n)
      return (
        n.variantChildren && n.variantChildren.add(t),
        () => n.variantChildren.delete(t)
      );
  }
  addValue(t, n) {
    n !== this.values.get(t) &&
      (this.removeValue(t), this.bindToMotionValue(t, n)),
      this.values.set(t, n),
      (this.latestValues[t] = n.get());
  }
  removeValue(t) {
    this.values.delete(t);
    const n = this.valueSubscriptions.get(t);
    n && (n(), this.valueSubscriptions.delete(t)),
      delete this.latestValues[t],
      this.removeValueFromRenderState(t, this.renderState);
  }
  hasValue(t) {
    return this.values.has(t);
  }
  getValue(t, n) {
    if (this.props.values && this.props.values[t]) return this.props.values[t];
    let r = this.values.get(t);
    return (
      r === void 0 &&
        n !== void 0 &&
        ((r = eo(n, { owner: this })), this.addValue(t, r)),
      r
    );
  }
  readValue(t) {
    return this.latestValues[t] !== void 0 || !this.current
      ? this.latestValues[t]
      : this.readValueFromInstance(this.current, t, this.options);
  }
  setBaseTarget(t, n) {
    this.baseTarget[t] = n;
  }
  getBaseTarget(t) {
    var n;
    const { initial: r } = this.props,
      o =
        typeof r == "string" || typeof r == "object"
          ? (n = Kf(this.props, r)) === null || n === void 0
            ? void 0
            : n[t]
          : void 0;
    if (r && o !== void 0) return o;
    const i = this.getBaseTargetFromProps(this.props, t);
    return i !== void 0 && !et(i)
      ? i
      : this.initialValues[t] !== void 0 && o === void 0
      ? void 0
      : this.baseTarget[t];
  }
  on(t, n) {
    return this.events[t] || (this.events[t] = new od()), this.events[t].add(n);
  }
  notify(t, ...n) {
    this.events[t] && this.events[t].notify(...n);
  }
}
class Py extends Db {
  sortInstanceNodePosition(t, n) {
    return t.compareDocumentPosition(n) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(t, n) {
    return t.style ? t.style[n] : void 0;
  }
  removeValueFromRenderState(t, { vars: n, style: r }) {
    delete n[t], delete r[t];
  }
  makeTargetAnimatableFromInstance(
    { transition: t, transitionEnd: n, ...r },
    { transformValues: o },
    i
  ) {
    let s = oE(r, t || {}, this);
    if ((o && (n && (n = o(n)), r && (r = o(r)), s && (s = o(s))), i)) {
      nE(this, r, s);
      const a = Ab(this, r, s, n);
      (n = a.transitionEnd), (r = a.target);
    }
    return { transition: t, transitionEnd: n, ...r };
  }
}
function Nb(e) {
  return window.getComputedStyle(e);
}
class Vb extends Py {
  readValueFromInstance(t, n) {
    if (cr.has(n)) {
      const r = Jf(n);
      return (r && r.default) || 0;
    } else {
      const r = Nb(t),
        o = (m0(n) ? r.getPropertyValue(n) : r[n]) || 0;
      return typeof o == "string" ? o.trim() : o;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: n }) {
    return fy(t, n);
  }
  build(t, n, r, o) {
    $f(t, n, r, o.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, n) {
    return Zf(t, n);
  }
  handleChildMotionValue() {
    this.childSubscription &&
      (this.childSubscription(), delete this.childSubscription);
    const { children: t } = this.props;
    et(t) &&
      (this.childSubscription = t.on("change", (n) => {
        this.current && (this.current.textContent = `${n}`);
      }));
  }
  renderInstance(t, n, r, o) {
    w0(t, n, r, o);
  }
}
class jb extends Py {
  constructor() {
    super(...arguments), (this.isSVGTag = !1);
  }
  getBaseTargetFromProps(t, n) {
    return t[n];
  }
  readValueFromInstance(t, n) {
    if (cr.has(n)) {
      const r = Jf(n);
      return (r && r.default) || 0;
    }
    return (n = x0.has(n) ? n : Gf(n)), t.getAttribute(n);
  }
  measureInstanceViewportBox() {
    return ye();
  }
  scrapeMotionValuesFromProps(t, n) {
    return C0(t, n);
  }
  build(t, n, r, o) {
    Wf(t, n, r, this.isSVGTag, o.transformTemplate);
  }
  renderInstance(t, n, r, o) {
    k0(t, n, r, o);
  }
  mount(t) {
    (this.isSVGTag = Hf(t.tagName)), super.mount(t);
  }
}
const Bb = (e, t) =>
    zf(e)
      ? new jb(t, { enableHardwareAcceleration: !1 })
      : new Vb(t, { enableHardwareAcceleration: !0 }),
  zb = { layout: { ProjectionNode: wy, MeasureLayout: hy } },
  $b = { ...yE, ...jP, ...kb, ...zb },
  Mi = K2((e, t) => kP(e, t, $b, Bb));
function Ty() {
  const e = w.useRef(!1);
  return (
    ua(
      () => (
        (e.current = !0),
        () => {
          e.current = !1;
        }
      ),
      []
    ),
    e
  );
}
function Ub() {
  const e = Ty(),
    [t, n] = w.useState(0),
    r = w.useCallback(() => {
      e.current && n(t + 1);
    }, [t]);
  return [w.useCallback(() => ce.postRender(r), [r]), t];
}
class Wb extends w.Component {
  getSnapshotBeforeUpdate(t) {
    const n = this.props.childRef.current;
    if (n && t.isPresent && !this.props.isPresent) {
      const r = this.props.sizeRef.current;
      (r.height = n.offsetHeight || 0),
        (r.width = n.offsetWidth || 0),
        (r.top = n.offsetTop),
        (r.left = n.offsetLeft);
    }
    return null;
  }
  componentDidUpdate() {}
  render() {
    return this.props.children;
  }
}
function Hb({ children: e, isPresent: t }) {
  const n = w.useId(),
    r = w.useRef(null),
    o = w.useRef({ width: 0, height: 0, top: 0, left: 0 });
  return (
    w.useInsertionEffect(() => {
      const { width: i, height: s, top: a, left: l } = o.current;
      if (t || !r.current || !i || !s) return;
      r.current.dataset.motionPopId = n;
      const u = document.createElement("style");
      return (
        document.head.appendChild(u),
        u.sheet &&
          u.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${i}px !important;
            height: ${s}px !important;
            top: ${a}px !important;
            left: ${l}px !important;
          }
        `),
        () => {
          document.head.removeChild(u);
        }
      );
    }, [t]),
    w.createElement(
      Wb,
      { isPresent: t, childRef: r, sizeRef: o },
      w.cloneElement(e, { ref: r })
    )
  );
}
const nu = ({
  children: e,
  initial: t,
  isPresent: n,
  onExitComplete: r,
  custom: o,
  presenceAffectsLayout: i,
  mode: s,
}) => {
  const a = jf(Gb),
    l = w.useId(),
    u = w.useMemo(
      () => ({
        id: l,
        initial: t,
        isPresent: n,
        custom: o,
        onExitComplete: (c) => {
          a.set(c, !0);
          for (const f of a.values()) if (!f) return;
          r && r();
        },
        register: (c) => (a.set(c, !1), () => a.delete(c)),
      }),
      i ? void 0 : [n]
    );
  return (
    w.useMemo(() => {
      a.forEach((c, f) => a.set(f, !1));
    }, [n]),
    w.useEffect(() => {
      !n && !a.size && r && r();
    }, [n]),
    s === "popLayout" && (e = w.createElement(Hb, { isPresent: n }, e)),
    w.createElement(Ga.Provider, { value: u }, e)
  );
};
function Gb() {
  return new Map();
}
function Zb(e) {
  return w.useEffect(() => () => e(), []);
}
const yr = (e) => e.key || "";
function Kb(e, t) {
  e.forEach((n) => {
    const r = yr(n);
    t.set(r, n);
  });
}
function Yb(e) {
  const t = [];
  return (
    w.Children.forEach(e, (n) => {
      w.isValidElement(n) && t.push(n);
    }),
    t
  );
}
const el = ({
  children: e,
  custom: t,
  initial: n = !0,
  onExitComplete: r,
  exitBeforeEnter: o,
  presenceAffectsLayout: i = !0,
  mode: s = "sync",
}) => {
  let [a] = Ub();
  const l = w.useContext(Bf).forceRender;
  l && (a = l);
  const u = Ty(),
    c = Yb(e);
  let f = c;
  const d = new Set(),
    p = w.useRef(f),
    S = w.useRef(new Map()).current,
    v = w.useRef(!0);
  if (
    (ua(() => {
      (v.current = !1), Kb(c, S), (p.current = f);
    }),
    Zb(() => {
      (v.current = !0), S.clear(), d.clear();
    }),
    v.current)
  )
    return w.createElement(
      w.Fragment,
      null,
      f.map((m) =>
        w.createElement(
          nu,
          {
            key: yr(m),
            isPresent: !0,
            initial: n ? void 0 : !1,
            presenceAffectsLayout: i,
            mode: s,
          },
          m
        )
      )
    );
  f = [...f];
  const P = p.current.map(yr),
    g = c.map(yr),
    h = P.length;
  for (let m = 0; m < h; m++) {
    const C = P[m];
    g.indexOf(C) === -1 && d.add(C);
  }
  return (
    s === "wait" && d.size && (f = []),
    d.forEach((m) => {
      if (g.indexOf(m) !== -1) return;
      const C = S.get(m);
      if (!C) return;
      const E = P.indexOf(m),
        R = () => {
          S.delete(m), d.delete(m);
          const b = p.current.findIndex((_) => _.key === m);
          if ((p.current.splice(b, 1), !d.size)) {
            if (((p.current = c), u.current === !1)) return;
            a(), r && r();
          }
        };
      f.splice(
        E,
        0,
        w.createElement(
          nu,
          {
            key: yr(C),
            isPresent: !1,
            onExitComplete: R,
            custom: t,
            presenceAffectsLayout: i,
            mode: s,
          },
          C
        )
      );
    }),
    (f = f.map((m) => {
      const C = m.key;
      return d.has(C)
        ? m
        : w.createElement(
            nu,
            { key: yr(m), isPresent: !0, presenceAffectsLayout: i, mode: s },
            m
          );
    })),
    w.createElement(
      w.Fragment,
      null,
      d.size ? f : f.map((m) => w.cloneElement(m))
    )
  );
};
function Xb(e, t) {
  if (e != null) {
    if (typeof e == "function") {
      e(t);
      return;
    }
    try {
      e.current = t;
    } catch {
      throw new Error(`Cannot assign value '${t}' to ref '${e}'`);
    }
  }
}
function cm(...e) {
  return (t) => {
    e.forEach((n) => {
      Xb(n, t);
    });
  };
}
var fm = {
    ease: [0.25, 0.1, 0.25, 1],
    easeIn: [0.4, 0, 1, 1],
    easeOut: [0, 0, 0.2, 1],
    easeInOut: [0.4, 0, 0.2, 1],
  },
  Jn = {
    enter: { duration: 0.2, ease: fm.easeOut },
    exit: { duration: 0.1, ease: fm.easeIn },
  },
  er = {
    enter: (e, t) => ({
      ...e,
      delay: typeof t == "number" ? t : t == null ? void 0 : t.enter,
    }),
    exit: (e, t) => ({
      ...e,
      delay: typeof t == "number" ? t : t == null ? void 0 : t.exit,
    }),
  },
  Qb = {
    enter: ({ transition: e, transitionEnd: t, delay: n } = {}) => {
      var r;
      return {
        opacity: 1,
        transition:
          (r = e == null ? void 0 : e.enter) != null
            ? r
            : er.enter(Jn.enter, n),
        transitionEnd: t == null ? void 0 : t.enter,
      };
    },
    exit: ({ transition: e, transitionEnd: t, delay: n } = {}) => {
      var r;
      return {
        opacity: 0,
        transition:
          (r = e == null ? void 0 : e.exit) != null ? r : er.exit(Jn.exit, n),
        transitionEnd: t == null ? void 0 : t.exit,
      };
    },
  },
  Ey = { initial: "exit", animate: "enter", exit: "exit", variants: Qb },
  qb = w.forwardRef(function (t, n) {
    const {
        unmountOnExit: r,
        in: o,
        className: i,
        transition: s,
        transitionEnd: a,
        delay: l,
        ...u
      } = t,
      c = o || r ? "enter" : "exit",
      f = r ? o && r : !0,
      d = { transition: s, transitionEnd: a, delay: l };
    return A.jsx(el, {
      custom: d,
      children:
        f &&
        A.jsx(Mi.div, {
          ref: n,
          className: ur("chakra-fade", i),
          custom: d,
          ...Ey,
          animate: c,
          ...u,
        }),
    });
  });
qb.displayName = "Fade";
var Jb = {
    exit: ({
      reverse: e,
      initialScale: t,
      transition: n,
      transitionEnd: r,
      delay: o,
    }) => {
      var i;
      return {
        opacity: 0,
        ...(e
          ? { scale: t, transitionEnd: r == null ? void 0 : r.exit }
          : { transitionEnd: { scale: t, ...(r == null ? void 0 : r.exit) } }),
        transition:
          (i = n == null ? void 0 : n.exit) != null ? i : er.exit(Jn.exit, o),
      };
    },
    enter: ({ transitionEnd: e, transition: t, delay: n }) => {
      var r;
      return {
        opacity: 1,
        scale: 1,
        transition:
          (r = t == null ? void 0 : t.enter) != null
            ? r
            : er.enter(Jn.enter, n),
        transitionEnd: e == null ? void 0 : e.enter,
      };
    },
  },
  by = { initial: "exit", animate: "enter", exit: "exit", variants: Jb },
  e_ = w.forwardRef(function (t, n) {
    const {
        unmountOnExit: r,
        in: o,
        reverse: i = !0,
        initialScale: s = 0.95,
        className: a,
        transition: l,
        transitionEnd: u,
        delay: c,
        ...f
      } = t,
      d = r ? o && r : !0,
      p = o || r ? "enter" : "exit",
      S = {
        initialScale: s,
        reverse: i,
        transition: l,
        transitionEnd: u,
        delay: c,
      };
    return A.jsx(el, {
      custom: S,
      children:
        d &&
        A.jsx(Mi.div, {
          ref: n,
          className: ur("chakra-offset-slide", a),
          ...by,
          animate: p,
          custom: S,
          ...f,
        }),
    });
  });
e_.displayName = "ScaleFade";
var t_ = {
    initial: ({
      offsetX: e,
      offsetY: t,
      transition: n,
      transitionEnd: r,
      delay: o,
    }) => {
      var i;
      return {
        opacity: 0,
        x: e,
        y: t,
        transition:
          (i = n == null ? void 0 : n.exit) != null ? i : er.exit(Jn.exit, o),
        transitionEnd: r == null ? void 0 : r.exit,
      };
    },
    enter: ({ transition: e, transitionEnd: t, delay: n }) => {
      var r;
      return {
        opacity: 1,
        x: 0,
        y: 0,
        transition:
          (r = e == null ? void 0 : e.enter) != null
            ? r
            : er.enter(Jn.enter, n),
        transitionEnd: t == null ? void 0 : t.enter,
      };
    },
    exit: ({
      offsetY: e,
      offsetX: t,
      transition: n,
      transitionEnd: r,
      reverse: o,
      delay: i,
    }) => {
      var s;
      const a = { x: t, y: e };
      return {
        opacity: 0,
        transition:
          (s = n == null ? void 0 : n.exit) != null ? s : er.exit(Jn.exit, i),
        ...(o
          ? { ...a, transitionEnd: r == null ? void 0 : r.exit }
          : { transitionEnd: { ...a, ...(r == null ? void 0 : r.exit) } }),
      };
    },
  },
  _c = { initial: "initial", animate: "enter", exit: "exit", variants: t_ },
  n_ = w.forwardRef(function (t, n) {
    const {
        unmountOnExit: r,
        in: o,
        reverse: i = !0,
        className: s,
        offsetX: a = 0,
        offsetY: l = 8,
        transition: u,
        transitionEnd: c,
        delay: f,
        ...d
      } = t,
      p = r ? o && r : !0,
      S = o || r ? "enter" : "exit",
      v = {
        offsetX: a,
        offsetY: l,
        reverse: i,
        transition: u,
        transitionEnd: c,
        delay: f,
      };
    return A.jsx(el, {
      custom: v,
      children:
        p &&
        A.jsx(Mi.div, {
          ref: n,
          className: ur("chakra-offset-slide", s),
          custom: v,
          ..._c,
          animate: S,
          ...d,
        }),
    });
  });
n_.displayName = "SlideFade";
function r_(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    o,
    i;
  for (i = 0; i < r.length; i++)
    (o = r[i]), !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
var Rc = "data-focus-lock",
  _y = "data-focus-lock-disabled",
  o_ = "data-no-focus-lock",
  i_ = "data-autofocus-inside",
  s_ = "data-no-autofocus";
function a_(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function l_(e, t) {
  var n = w.useState(function () {
    return {
      value: e,
      callback: t,
      facade: {
        get current() {
          return n.value;
        },
        set current(r) {
          var o = n.value;
          o !== r && ((n.value = r), n.callback(r, o));
        },
      },
    };
  })[0];
  return (n.callback = t), n.facade;
}
function Ry(e, t) {
  return l_(t || null, function (n) {
    return e.forEach(function (r) {
      return a_(r, n);
    });
  });
}
var ru = {
    width: "1px",
    height: "0px",
    padding: 0,
    overflow: "hidden",
    position: "fixed",
    top: "1px",
    left: "1px",
  },
  jt = function () {
    return (
      (jt =
        Object.assign ||
        function (t) {
          for (var n, r = 1, o = arguments.length; r < o; r++) {
            n = arguments[r];
            for (var i in n)
              Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
          }
          return t;
        }),
      jt.apply(this, arguments)
    );
  };
function My(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) &&
      t.indexOf(r) < 0 &&
      (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
        (n[r[o]] = e[r[o]]);
  return n;
}
function u_(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, o = t.length, i; r < o; r++)
      (i || !(r in t)) &&
        (i || (i = Array.prototype.slice.call(t, 0, r)), (i[r] = t[r]));
  return e.concat(i || Array.prototype.slice.call(t));
}
function Ay(e) {
  return e;
}
function Oy(e, t) {
  t === void 0 && (t = Ay);
  var n = [],
    r = !1,
    o = {
      read: function () {
        if (r)
          throw new Error(
            "Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`."
          );
        return n.length ? n[n.length - 1] : e;
      },
      useMedium: function (i) {
        var s = t(i, r);
        return (
          n.push(s),
          function () {
            n = n.filter(function (a) {
              return a !== s;
            });
          }
        );
      },
      assignSyncMedium: function (i) {
        for (r = !0; n.length; ) {
          var s = n;
          (n = []), s.forEach(i);
        }
        n = {
          push: function (a) {
            return i(a);
          },
          filter: function () {
            return n;
          },
        };
      },
      assignMedium: function (i) {
        r = !0;
        var s = [];
        if (n.length) {
          var a = n;
          (n = []), a.forEach(i), (s = n);
        }
        var l = function () {
            var c = s;
            (s = []), c.forEach(i);
          },
          u = function () {
            return Promise.resolve().then(l);
          };
        u(),
          (n = {
            push: function (c) {
              s.push(c), u();
            },
            filter: function (c) {
              return (s = s.filter(c)), n;
            },
          });
      },
    };
  return o;
}
function id(e, t) {
  return t === void 0 && (t = Ay), Oy(e, t);
}
function Ly(e) {
  e === void 0 && (e = {});
  var t = Oy(null);
  return (t.options = jt({ async: !0, ssr: !1 }, e)), t;
}
var Fy = function (e) {
  var t = e.sideCar,
    n = My(e, ["sideCar"]);
  if (!t)
    throw new Error(
      "Sidecar: please provide `sideCar` property to import the right car"
    );
  var r = t.read();
  if (!r) throw new Error("Sidecar medium not found");
  return w.createElement(r, jt({}, n));
};
Fy.isSideCarExport = !0;
function c_(e, t) {
  return e.useMedium(t), Fy;
}
var Iy = id({}, function (e) {
    var t = e.target,
      n = e.currentTarget;
    return { target: t, currentTarget: n };
  }),
  Dy = id(),
  f_ = id(),
  d_ = Ly({ async: !0 }),
  p_ = [],
  sd = w.forwardRef(function (t, n) {
    var r,
      o = w.useState(),
      i = o[0],
      s = o[1],
      a = w.useRef(),
      l = w.useRef(!1),
      u = w.useRef(null),
      c = t.children,
      f = t.disabled,
      d = t.noFocusGuards,
      p = t.persistentFocus,
      S = t.crossFrame,
      v = t.autoFocus;
    t.allowTextSelection;
    var P = t.group,
      g = t.className,
      h = t.whiteList,
      m = t.hasPositiveIndices,
      C = t.shards,
      E = C === void 0 ? p_ : C,
      R = t.as,
      b = R === void 0 ? "div" : R,
      _ = t.lockProps,
      D = _ === void 0 ? {} : _,
      N = t.sideCar,
      q = t.returnFocus,
      Ce = t.focusOptions,
      Pe = t.onActivation,
      J = t.onDeactivation,
      re = w.useState({}),
      Fe = re[0],
      Ze = w.useCallback(
        function () {
          (u.current = u.current || (document && document.activeElement)),
            a.current && Pe && Pe(a.current),
            (l.current = !0);
        },
        [Pe]
      ),
      O = w.useCallback(
        function () {
          (l.current = !1), J && J(a.current);
        },
        [J]
      );
    w.useEffect(function () {
      f || (u.current = null);
    }, []);
    var j = w.useCallback(
        function (Te) {
          var tt = u.current;
          if (tt && tt.focus) {
            var Mt = typeof q == "function" ? q(tt) : q;
            if (Mt) {
              var xt = typeof Mt == "object" ? Mt : void 0;
              (u.current = null),
                Te
                  ? Promise.resolve().then(function () {
                      return tt.focus(xt);
                    })
                  : tt.focus(xt);
            }
          }
        },
        [q]
      ),
      z = w.useCallback(function (Te) {
        l.current && Iy.useMedium(Te);
      }, []),
      B = Dy.useMedium,
      ee = w.useCallback(function (Te) {
        a.current !== Te && ((a.current = Te), s(Te));
      }, []),
      U = Jr(((r = {}), (r[_y] = f && "disabled"), (r[Rc] = P), r), D),
      Ie = d !== !0,
      Rt = Ie && d !== "tail",
      ge = Ry([n, ee]);
    return w.createElement(
      w.Fragment,
      null,
      Ie && [
        w.createElement("div", {
          key: "guard-first",
          "data-focus-guard": !0,
          tabIndex: f ? -1 : 0,
          style: ru,
        }),
        m
          ? w.createElement("div", {
              key: "guard-nearest",
              "data-focus-guard": !0,
              tabIndex: f ? -1 : 1,
              style: ru,
            })
          : null,
      ],
      !f &&
        w.createElement(N, {
          id: Fe,
          sideCar: d_,
          observed: i,
          disabled: f,
          persistentFocus: p,
          crossFrame: S,
          autoFocus: v,
          whiteList: h,
          shards: E,
          onActivation: Ze,
          onDeactivation: O,
          returnFocus: j,
          focusOptions: Ce,
        }),
      w.createElement(
        b,
        Jr({ ref: ge }, U, { className: g, onBlur: B, onFocus: z }),
        c
      ),
      Rt &&
        w.createElement("div", {
          "data-focus-guard": !0,
          tabIndex: f ? -1 : 0,
          style: ru,
        })
    );
  });
sd.propTypes = {};
sd.defaultProps = {
  children: void 0,
  disabled: !1,
  returnFocus: !1,
  focusOptions: void 0,
  noFocusGuards: !1,
  autoFocus: !0,
  persistentFocus: !1,
  crossFrame: !0,
  hasPositiveIndices: void 0,
  allowTextSelection: void 0,
  group: void 0,
  className: void 0,
  whiteList: void 0,
  shards: void 0,
  as: "div",
  lockProps: {},
  onActivation: void 0,
  onDeactivation: void 0,
};
const Ny = sd;
function Mc(e, t) {
  return (
    (Mc = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (r, o) {
          return (r.__proto__ = o), r;
        }),
    Mc(e, t)
  );
}
function h_(e, t) {
  (e.prototype = Object.create(t.prototype)),
    (e.prototype.constructor = e),
    Mc(e, t);
}
function gi(e) {
  return (
    (gi =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    gi(e)
  );
}
function m_(e, t) {
  if (gi(e) !== "object" || e === null) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (gi(r) !== "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function g_(e) {
  var t = m_(e, "string");
  return gi(t) === "symbol" ? t : String(t);
}
function v_(e, t, n) {
  return (
    (t = g_(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function y_(e, t) {
  function n(r) {
    return r.displayName || r.name || "Component";
  }
  return function (o) {
    var i = [],
      s;
    function a() {
      (s = e(
        i.map(function (u) {
          return u.props;
        })
      )),
        t(s);
    }
    var l = (function (u) {
      h_(c, u);
      function c() {
        return u.apply(this, arguments) || this;
      }
      c.peek = function () {
        return s;
      };
      var f = c.prototype;
      return (
        (f.componentDidMount = function () {
          i.push(this), a();
        }),
        (f.componentDidUpdate = function () {
          a();
        }),
        (f.componentWillUnmount = function () {
          var p = i.indexOf(this);
          i.splice(p, 1), a();
        }),
        (f.render = function () {
          return L.createElement(o, this.props);
        }),
        c
      );
    })(w.PureComponent);
    return v_(l, "displayName", "SideEffect(" + n(o) + ")"), l;
  };
}
var Wt = function (e) {
    for (var t = Array(e.length), n = 0; n < e.length; ++n) t[n] = e[n];
    return t;
  },
  ya = function (e) {
    return Array.isArray(e) ? e : [e];
  },
  Vy = function (e) {
    return Array.isArray(e) ? e[0] : e;
  },
  S_ = function (e) {
    if (e.nodeType !== Node.ELEMENT_NODE) return !1;
    var t = window.getComputedStyle(e, null);
    return !t || !t.getPropertyValue
      ? !1
      : t.getPropertyValue("display") === "none" ||
          t.getPropertyValue("visibility") === "hidden";
  },
  jy = function (e) {
    return e.parentNode && e.parentNode.nodeType === Node.DOCUMENT_FRAGMENT_NODE
      ? e.parentNode.host
      : e.parentNode;
  },
  By = function (e) {
    return e === document || (e && e.nodeType === Node.DOCUMENT_NODE);
  },
  w_ = function (e, t) {
    return !e || By(e) || (!S_(e) && t(jy(e)));
  },
  zy = function (e, t) {
    var n = e.get(t);
    if (n !== void 0) return n;
    var r = w_(t, zy.bind(void 0, e));
    return e.set(t, r), r;
  },
  x_ = function (e, t) {
    return e && !By(e) ? (P_(e) ? t(jy(e)) : !1) : !0;
  },
  $y = function (e, t) {
    var n = e.get(t);
    if (n !== void 0) return n;
    var r = x_(t, $y.bind(void 0, e));
    return e.set(t, r), r;
  },
  Uy = function (e) {
    return e.dataset;
  },
  k_ = function (e) {
    return e.tagName === "BUTTON";
  },
  Wy = function (e) {
    return e.tagName === "INPUT";
  },
  Hy = function (e) {
    return Wy(e) && e.type === "radio";
  },
  C_ = function (e) {
    return !((Wy(e) || k_(e)) && (e.type === "hidden" || e.disabled));
  },
  P_ = function (e) {
    var t = e.getAttribute(s_);
    return ![!0, "true", ""].includes(t);
  },
  ad = function (e) {
    var t;
    return !!(e && !((t = Uy(e)) === null || t === void 0) && t.focusGuard);
  },
  Sa = function (e) {
    return !ad(e);
  },
  T_ = function (e) {
    return !!e;
  },
  E_ = function (e, t) {
    var n = e.tabIndex - t.tabIndex,
      r = e.index - t.index;
    if (n) {
      if (!e.tabIndex) return 1;
      if (!t.tabIndex) return -1;
    }
    return n || r;
  },
  Gy = function (e, t, n) {
    return Wt(e)
      .map(function (r, o) {
        return {
          node: r,
          index: o,
          tabIndex:
            n && r.tabIndex === -1
              ? (r.dataset || {}).focusGuard
                ? 0
                : -1
              : r.tabIndex,
        };
      })
      .filter(function (r) {
        return !t || r.tabIndex >= 0;
      })
      .sort(E_);
  },
  b_ = [
    "button:enabled",
    "select:enabled",
    "textarea:enabled",
    "input:enabled",
    "a[href]",
    "area[href]",
    "summary",
    "iframe",
    "object",
    "embed",
    "audio[controls]",
    "video[controls]",
    "[tabindex]",
    "[contenteditable]",
    "[autofocus]",
  ],
  ld = b_.join(","),
  __ = "".concat(ld, ", [data-focus-guard]"),
  Zy = function (e, t) {
    return Wt((e.shadowRoot || e).children).reduce(function (n, r) {
      return n.concat(r.matches(t ? __ : ld) ? [r] : [], Zy(r));
    }, []);
  },
  R_ = function (e, t) {
    var n;
    return e instanceof HTMLIFrameElement &&
      !((n = e.contentDocument) === null || n === void 0) &&
      n.body
      ? tl([e.contentDocument.body], t)
      : [e];
  },
  tl = function (e, t) {
    return e.reduce(function (n, r) {
      var o,
        i = Zy(r, t),
        s = (o = []).concat.apply(
          o,
          i.map(function (a) {
            return R_(a, t);
          })
        );
      return n.concat(
        s,
        r.parentNode
          ? Wt(r.parentNode.querySelectorAll(ld)).filter(function (a) {
              return a === r;
            })
          : []
      );
    }, []);
  },
  M_ = function (e) {
    var t = e.querySelectorAll("[".concat(i_, "]"));
    return Wt(t)
      .map(function (n) {
        return tl([n]);
      })
      .reduce(function (n, r) {
        return n.concat(r);
      }, []);
  },
  ud = function (e, t) {
    return Wt(e)
      .filter(function (n) {
        return zy(t, n);
      })
      .filter(function (n) {
        return C_(n);
      });
  },
  dm = function (e, t) {
    return (
      t === void 0 && (t = new Map()),
      Wt(e).filter(function (n) {
        return $y(t, n);
      })
    );
  },
  Ac = function (e, t, n) {
    return Gy(ud(tl(e, n), t), !0, n);
  },
  pm = function (e, t) {
    return Gy(ud(tl(e), t), !1);
  },
  A_ = function (e, t) {
    return ud(M_(e), t);
  },
  $r = function (e, t) {
    return e.shadowRoot
      ? $r(e.shadowRoot, t)
      : Object.getPrototypeOf(e).contains !== void 0 &&
        Object.getPrototypeOf(e).contains.call(e, t)
      ? !0
      : Wt(e.children).some(function (n) {
          var r;
          if (n instanceof HTMLIFrameElement) {
            var o =
              (r = n.contentDocument) === null || r === void 0
                ? void 0
                : r.body;
            return o ? $r(o, t) : !1;
          }
          return $r(n, t);
        });
  },
  O_ = function (e) {
    for (var t = new Set(), n = e.length, r = 0; r < n; r += 1)
      for (var o = r + 1; o < n; o += 1) {
        var i = e[r].compareDocumentPosition(e[o]);
        (i & Node.DOCUMENT_POSITION_CONTAINED_BY) > 0 && t.add(o),
          (i & Node.DOCUMENT_POSITION_CONTAINS) > 0 && t.add(r);
      }
    return e.filter(function (s, a) {
      return !t.has(a);
    });
  },
  Ky = function (e) {
    return e.parentNode ? Ky(e.parentNode) : e;
  },
  cd = function (e) {
    var t = ya(e);
    return t.filter(Boolean).reduce(function (n, r) {
      var o = r.getAttribute(Rc);
      return (
        n.push.apply(
          n,
          o
            ? O_(
                Wt(
                  Ky(r).querySelectorAll(
                    "["
                      .concat(Rc, '="')
                      .concat(o, '"]:not([')
                      .concat(_y, '="disabled"])')
                  )
                )
              )
            : [r]
        ),
        n
      );
    }, []);
  },
  L_ = function (e) {
    try {
      return e();
    } catch {
      return;
    }
  },
  vi = function (e) {
    if ((e === void 0 && (e = document), !(!e || !e.activeElement))) {
      var t = e.activeElement;
      return t.shadowRoot
        ? vi(t.shadowRoot)
        : t instanceof HTMLIFrameElement &&
          L_(function () {
            return t.contentWindow.document;
          })
        ? vi(t.contentWindow.document)
        : t;
    }
  },
  F_ = function (e, t) {
    return e === t;
  },
  I_ = function (e, t) {
    return !!Wt(e.querySelectorAll("iframe")).some(function (n) {
      return F_(n, t);
    });
  },
  Yy = function (e, t) {
    return (
      t === void 0 && (t = vi(Vy(e).ownerDocument)),
      !t || (t.dataset && t.dataset.focusGuard)
        ? !1
        : cd(e).some(function (n) {
            return $r(n, t) || I_(n, t);
          })
    );
  },
  D_ = function (e) {
    e === void 0 && (e = document);
    var t = vi(e);
    return t
      ? Wt(e.querySelectorAll("[".concat(o_, "]"))).some(function (n) {
          return $r(n, t);
        })
      : !1;
  },
  N_ = function (e, t) {
    return (
      t
        .filter(Hy)
        .filter(function (n) {
          return n.name === e.name;
        })
        .filter(function (n) {
          return n.checked;
        })[0] || e
    );
  },
  fd = function (e, t) {
    return Hy(e) && e.name ? N_(e, t) : e;
  },
  V_ = function (e) {
    var t = new Set();
    return (
      e.forEach(function (n) {
        return t.add(fd(n, e));
      }),
      e.filter(function (n) {
        return t.has(n);
      })
    );
  },
  hm = function (e) {
    return e[0] && e.length > 1 ? fd(e[0], e) : e[0];
  },
  mm = function (e, t) {
    return e.length > 1 ? e.indexOf(fd(e[t], e)) : t;
  },
  Xy = "NEW_FOCUS",
  j_ = function (e, t, n, r) {
    var o = e.length,
      i = e[0],
      s = e[o - 1],
      a = ad(n);
    if (!(n && e.indexOf(n) >= 0)) {
      var l = n !== void 0 ? t.indexOf(n) : -1,
        u = r ? t.indexOf(r) : l,
        c = r ? e.indexOf(r) : -1,
        f = l - u,
        d = t.indexOf(i),
        p = t.indexOf(s),
        S = V_(t),
        v = n !== void 0 ? S.indexOf(n) : -1,
        P = v - (r ? S.indexOf(r) : l),
        g = mm(e, 0),
        h = mm(e, o - 1);
      if (l === -1 || c === -1) return Xy;
      if (!f && c >= 0) return c;
      if (l <= d && a && Math.abs(f) > 1) return h;
      if (l >= p && a && Math.abs(f) > 1) return g;
      if (f && Math.abs(P) > 1) return c;
      if (l <= d) return h;
      if (l > p) return g;
      if (f) return Math.abs(f) > 1 ? c : (o + c + f) % o;
    }
  },
  B_ = function (e) {
    return function (t) {
      var n,
        r = (n = Uy(t)) === null || n === void 0 ? void 0 : n.autofocus;
      return (
        t.autofocus || (r !== void 0 && r !== "false") || e.indexOf(t) >= 0
      );
    };
  },
  z_ = function (e, t, n) {
    var r = e.map(function (i) {
        var s = i.node;
        return s;
      }),
      o = dm(r.filter(B_(n)));
    return o && o.length ? hm(o) : hm(dm(t));
  },
  Oc = function (e, t) {
    return (
      t === void 0 && (t = []),
      t.push(e),
      e.parentNode && Oc(e.parentNode.host || e.parentNode, t),
      t
    );
  },
  ou = function (e, t) {
    for (var n = Oc(e), r = Oc(t), o = 0; o < n.length; o += 1) {
      var i = n[o];
      if (r.indexOf(i) >= 0) return i;
    }
    return !1;
  },
  Qy = function (e, t, n) {
    var r = ya(e),
      o = ya(t),
      i = r[0],
      s = !1;
    return (
      o.filter(Boolean).forEach(function (a) {
        (s = ou(s || a, a) || s),
          n.filter(Boolean).forEach(function (l) {
            var u = ou(i, l);
            u && (!s || $r(u, s) ? (s = u) : (s = ou(u, s)));
          });
      }),
      s
    );
  },
  $_ = function (e, t) {
    return e.reduce(function (n, r) {
      return n.concat(A_(r, t));
    }, []);
  },
  U_ = function (e, t) {
    var n = new Map();
    return (
      t.forEach(function (r) {
        return n.set(r.node, r);
      }),
      e
        .map(function (r) {
          return n.get(r);
        })
        .filter(T_)
    );
  },
  W_ = function (e, t) {
    var n = vi(ya(e).length > 0 ? document : Vy(e).ownerDocument),
      r = cd(e).filter(Sa),
      o = Qy(n || e, e, r),
      i = new Map(),
      s = pm(r, i),
      a = Ac(r, i).filter(function (p) {
        var S = p.node;
        return Sa(S);
      });
    if (!(!a[0] && ((a = s), !a[0]))) {
      var l = pm([o], i).map(function (p) {
          var S = p.node;
          return S;
        }),
        u = U_(l, a),
        c = u.map(function (p) {
          var S = p.node;
          return S;
        }),
        f = j_(c, l, n, t);
      if (f === Xy) {
        var d = z_(s, c, $_(r, i));
        if (d) return { node: d };
        console.warn("focus-lock: cannot find any node to move focus into");
        return;
      }
      return f === void 0 ? f : u[f];
    }
  },
  H_ = function (e) {
    var t = cd(e).filter(Sa),
      n = Qy(e, e, t),
      r = new Map(),
      o = Ac([n], r, !0),
      i = Ac(t, r)
        .filter(function (s) {
          var a = s.node;
          return Sa(a);
        })
        .map(function (s) {
          var a = s.node;
          return a;
        });
    return o.map(function (s) {
      var a = s.node,
        l = s.index;
      return { node: a, index: l, lockItem: i.indexOf(a) >= 0, guard: ad(a) };
    });
  },
  G_ = function (e, t) {
    "focus" in e && e.focus(t),
      "contentWindow" in e && e.contentWindow && e.contentWindow.focus();
  },
  iu = 0,
  su = !1,
  qy = function (e, t, n) {
    n === void 0 && (n = {});
    var r = W_(e, t);
    if (!su && r) {
      if (iu > 2) {
        console.error(
          "FocusLock: focus-fighting detected. Only one focus management system could be active. See https://github.com/theKashey/focus-lock/#focus-fighting"
        ),
          (su = !0),
          setTimeout(function () {
            su = !1;
          }, 1);
        return;
      }
      iu++, G_(r.node, n.focusOptions), iu--;
    }
  };
function Jy(e) {
  var t = window,
    n = t.setImmediate;
  typeof n < "u" ? n(e) : setTimeout(e, 1);
}
var Z_ = function () {
    return document && document.activeElement === document.body;
  },
  K_ = function () {
    return Z_() || D_();
  },
  Ur = null,
  Fr = null,
  Wr = null,
  yi = !1,
  Y_ = function () {
    return !0;
  },
  X_ = function (t) {
    return (Ur.whiteList || Y_)(t);
  },
  Q_ = function (t, n) {
    Wr = { observerNode: t, portaledElement: n };
  },
  q_ = function (t) {
    return Wr && Wr.portaledElement === t;
  };
function gm(e, t, n, r) {
  var o = null,
    i = e;
  do {
    var s = r[i];
    if (s.guard) s.node.dataset.focusAutoGuard && (o = s);
    else if (s.lockItem) {
      if (i !== e) return;
      o = null;
    } else break;
  } while ((i += n) !== t);
  o && (o.node.tabIndex = 0);
}
var J_ = function (t) {
    return t && "current" in t ? t.current : t;
  },
  eR = function (t) {
    return t ? !!yi : yi === "meanwhile";
  },
  tR = function e(t, n, r) {
    return (
      n &&
      ((n.host === t && (!n.activeElement || r.contains(n.activeElement))) ||
        (n.parentNode && e(t, n.parentNode, r)))
    );
  },
  nR = function (t, n) {
    return n.some(function (r) {
      return tR(t, r, r);
    });
  },
  wa = function () {
    var t = !1;
    if (Ur) {
      var n = Ur,
        r = n.observed,
        o = n.persistentFocus,
        i = n.autoFocus,
        s = n.shards,
        a = n.crossFrame,
        l = n.focusOptions,
        u = r || (Wr && Wr.portaledElement),
        c = document && document.activeElement;
      if (u) {
        var f = [u].concat(s.map(J_).filter(Boolean));
        if (
          ((!c || X_(c)) &&
            (o || eR(a) || !K_() || (!Fr && i)) &&
            (u &&
              !(Yy(f) || (c && nR(c, f)) || q_(c)) &&
              (document && !Fr && c && !i
                ? (c.blur && c.blur(), document.body.focus())
                : ((t = qy(f, Fr, { focusOptions: l })), (Wr = {}))),
            (yi = !1),
            (Fr = document && document.activeElement)),
          document)
        ) {
          var d = document && document.activeElement,
            p = H_(f),
            S = p
              .map(function (v) {
                var P = v.node;
                return P;
              })
              .indexOf(d);
          S > -1 &&
            (p
              .filter(function (v) {
                var P = v.guard,
                  g = v.node;
                return P && g.dataset.focusAutoGuard;
              })
              .forEach(function (v) {
                var P = v.node;
                return P.removeAttribute("tabIndex");
              }),
            gm(S, p.length, 1, p),
            gm(S, -1, -1, p));
        }
      }
    }
    return t;
  },
  e1 = function (t) {
    wa() && t && (t.stopPropagation(), t.preventDefault());
  },
  dd = function () {
    return Jy(wa);
  },
  rR = function (t) {
    var n = t.target,
      r = t.currentTarget;
    r.contains(n) || Q_(r, n);
  },
  oR = function () {
    return null;
  },
  t1 = function () {
    (yi = "just"),
      setTimeout(function () {
        yi = "meanwhile";
      }, 0);
  },
  iR = function () {
    document.addEventListener("focusin", e1),
      document.addEventListener("focusout", dd),
      window.addEventListener("blur", t1);
  },
  sR = function () {
    document.removeEventListener("focusin", e1),
      document.removeEventListener("focusout", dd),
      window.removeEventListener("blur", t1);
  };
function aR(e) {
  return e.filter(function (t) {
    var n = t.disabled;
    return !n;
  });
}
function lR(e) {
  var t = e.slice(-1)[0];
  t && !Ur && iR();
  var n = Ur,
    r = n && t && t.id === n.id;
  (Ur = t),
    n &&
      !r &&
      (n.onDeactivation(),
      e.filter(function (o) {
        var i = o.id;
        return i === n.id;
      }).length || n.returnFocus(!t)),
    t
      ? ((Fr = null),
        (!r || n.observed !== t.observed) && t.onActivation(),
        wa(),
        Jy(wa))
      : (sR(), (Fr = null));
}
Iy.assignSyncMedium(rR);
Dy.assignMedium(dd);
f_.assignMedium(function (e) {
  return e({ moveFocusInside: qy, focusInside: Yy });
});
const uR = y_(aR, lR)(oR);
var n1 = w.forwardRef(function (t, n) {
    return w.createElement(Ny, Jr({ sideCar: uR, ref: n }, t));
  }),
  r1 = Ny.propTypes || {};
r1.sideCar;
r_(r1, ["sideCar"]);
n1.propTypes = {};
const vm = n1;
function cR(e) {
  return (
    e != null &&
    typeof e == "object" &&
    "nodeType" in e &&
    e.nodeType === Node.ELEMENT_NODE
  );
}
function fR(e) {
  var t;
  if (!cR(e)) return !1;
  const n = (t = e.ownerDocument.defaultView) != null ? t : window;
  return e instanceof n.HTMLElement;
}
var dR = (e) => e.hasAttribute("tabindex");
function pR(e) {
  return !!e.getAttribute("disabled") || !!e.getAttribute("aria-disabled");
}
function o1(e) {
  return e.parentElement && o1(e.parentElement) ? !0 : e.hidden;
}
function hR(e) {
  const t = e.getAttribute("contenteditable");
  return t !== "false" && t != null;
}
function mR(e) {
  if (!fR(e) || o1(e) || pR(e)) return !1;
  const { localName: t } = e;
  if (["input", "select", "textarea", "button"].indexOf(t) >= 0) return !0;
  const r = {
    a: () => e.hasAttribute("href"),
    audio: () => e.hasAttribute("controls"),
    video: () => e.hasAttribute("controls"),
  };
  return t in r ? r[t]() : hR(e) ? !0 : dR(e);
}
var gR = [
    "input:not(:disabled):not([disabled])",
    "select:not(:disabled):not([disabled])",
    "textarea:not(:disabled):not([disabled])",
    "embed",
    "iframe",
    "object",
    "a[href]",
    "area[href]",
    "button:not(:disabled):not([disabled])",
    "[tabindex]",
    "audio[controls]",
    "video[controls]",
    "*[tabindex]:not([aria-disabled])",
    "*[contenteditable]",
  ],
  vR = gR.join(),
  yR = (e) => e.offsetWidth > 0 && e.offsetHeight > 0;
function SR(e) {
  const t = Array.from(e.querySelectorAll(vR));
  return t.unshift(e), t.filter((n) => mR(n) && yR(n));
}
var ym,
  wR = (ym = vm.default) != null ? ym : vm,
  i1 = (e) => {
    const {
        initialFocusRef: t,
        finalFocusRef: n,
        contentRef: r,
        restoreFocus: o,
        children: i,
        isDisabled: s,
        autoFocus: a,
        persistentFocus: l,
        lockFocusAcrossFrames: u,
      } = e,
      c = w.useCallback(() => {
        t != null && t.current
          ? t.current.focus()
          : r != null &&
            r.current &&
            SR(r.current).length === 0 &&
            requestAnimationFrame(() => {
              var S;
              (S = r.current) == null || S.focus();
            });
      }, [t, r]),
      f = w.useCallback(() => {
        var p;
        (p = n == null ? void 0 : n.current) == null || p.focus();
      }, [n]),
      d = o && !n;
    return A.jsx(wR, {
      crossFrame: u,
      persistentFocus: l,
      autoFocus: a,
      disabled: s,
      onActivation: c,
      onDeactivation: f,
      returnFocus: d,
      children: i,
    });
  };
i1.displayName = "FocusLock";
var xR = u2 ? w.useLayoutEffect : w.useEffect;
function Sm(e, t = []) {
  const n = w.useRef(e);
  return (
    xR(() => {
      n.current = e;
    }),
    w.useCallback((...r) => {
      var o;
      return (o = n.current) == null ? void 0 : o.call(n, ...r);
    }, t)
  );
}
function kR(e, t) {
  const n = w.useId();
  return w.useMemo(() => e || [t, n].filter(Boolean).join("-"), [e, t, n]);
}
function CR(e, t) {
  const n = e !== void 0;
  return [n, n && typeof e < "u" ? e : t];
}
function PR(e = {}) {
  const { onClose: t, onOpen: n, isOpen: r, id: o } = e,
    i = Sm(n),
    s = Sm(t),
    [a, l] = w.useState(e.defaultIsOpen || !1),
    [u, c] = CR(r, a),
    f = kR(o, "disclosure"),
    d = w.useCallback(() => {
      u || l(!1), s == null || s();
    }, [u, s]),
    p = w.useCallback(() => {
      u || l(!0), i == null || i();
    }, [u, i]),
    S = w.useCallback(() => {
      (c ? d : p)();
    }, [c, p, d]);
  return {
    isOpen: !!c,
    onOpen: p,
    onClose: d,
    onToggle: S,
    isControlled: u,
    getButtonProps: (v = {}) => ({
      ...v,
      "aria-expanded": c,
      "aria-controls": f,
      onClick: g2(v.onClick, S),
    }),
    getDisclosureProps: (v = {}) => ({ ...v, hidden: !c, id: f }),
  };
}
var TR = {
    slideInBottom: { ..._c, custom: { offsetY: 16, reverse: !0 } },
    slideInRight: { ..._c, custom: { offsetX: 16, reverse: !0 } },
    scale: { ...by, custom: { initialScale: 0.95, reverse: !0 } },
    none: {},
  },
  ER = Ti(Mi.section),
  bR = (e) => TR[e || "none"],
  s1 = w.forwardRef((e, t) => {
    const { preset: n, motionProps: r = bR(n), ...o } = e;
    return A.jsx(ER, { ref: t, ...r, ...o });
  });
s1.displayName = "ModalTransition";
var _R = Object.defineProperty,
  RR = (e, t, n) =>
    t in e
      ? _R(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  MR = (e, t, n) => (RR(e, typeof t != "symbol" ? t + "" : t, n), n),
  AR = class {
    constructor() {
      MR(this, "modals"), (this.modals = new Map());
    }
    add(e) {
      return this.modals.set(e, this.modals.size + 1), this.modals.size;
    }
    remove(e) {
      this.modals.delete(e);
    }
    isTopModal(e) {
      return e ? this.modals.get(e) === this.modals.size : !1;
    }
  },
  Lc = new AR();
function a1(e, t) {
  const [n, r] = w.useState(0);
  return (
    w.useEffect(() => {
      const o = e.current;
      if (o) {
        if (t) {
          const i = Lc.add(o);
          r(i);
        }
        return () => {
          Lc.remove(o), r(0);
        };
      }
    }, [t, e]),
    n
  );
}
var OR = function (e) {
    if (typeof document > "u") return null;
    var t = Array.isArray(e) ? e[0] : e;
    return t.ownerDocument.body;
  },
  mr = new WeakMap(),
  cs = new WeakMap(),
  fs = {},
  au = 0,
  l1 = function (e) {
    return e && (e.host || l1(e.parentNode));
  },
  LR = function (e, t) {
    return t
      .map(function (n) {
        if (e.contains(n)) return n;
        var r = l1(n);
        return r && e.contains(r)
          ? r
          : (console.error(
              "aria-hidden",
              n,
              "in not contained inside",
              e,
              ". Doing nothing"
            ),
            null);
      })
      .filter(function (n) {
        return !!n;
      });
  },
  FR = function (e, t, n, r) {
    var o = LR(t, Array.isArray(e) ? e : [e]);
    fs[n] || (fs[n] = new WeakMap());
    var i = fs[n],
      s = [],
      a = new Set(),
      l = new Set(o),
      u = function (f) {
        !f || a.has(f) || (a.add(f), u(f.parentNode));
      };
    o.forEach(u);
    var c = function (f) {
      !f ||
        l.has(f) ||
        Array.prototype.forEach.call(f.children, function (d) {
          if (a.has(d)) c(d);
          else {
            var p = d.getAttribute(r),
              S = p !== null && p !== "false",
              v = (mr.get(d) || 0) + 1,
              P = (i.get(d) || 0) + 1;
            mr.set(d, v),
              i.set(d, P),
              s.push(d),
              v === 1 && S && cs.set(d, !0),
              P === 1 && d.setAttribute(n, "true"),
              S || d.setAttribute(r, "true");
          }
        });
    };
    return (
      c(t),
      a.clear(),
      au++,
      function () {
        s.forEach(function (f) {
          var d = mr.get(f) - 1,
            p = i.get(f) - 1;
          mr.set(f, d),
            i.set(f, p),
            d || (cs.has(f) || f.removeAttribute(r), cs.delete(f)),
            p || f.removeAttribute(n);
        }),
          au--,
          au ||
            ((mr = new WeakMap()),
            (mr = new WeakMap()),
            (cs = new WeakMap()),
            (fs = {}));
      }
    );
  },
  IR = function (e, t, n) {
    n === void 0 && (n = "data-aria-hidden");
    var r = Array.from(Array.isArray(e) ? e : [e]),
      o = t || OR(e);
    return o
      ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live]"))),
        FR(r, o, n, "aria-hidden"))
      : function () {
          return null;
        };
  };
function DR(e) {
  const {
      isOpen: t,
      onClose: n,
      id: r,
      closeOnOverlayClick: o = !0,
      closeOnEsc: i = !0,
      useInert: s = !0,
      onOverlayClick: a,
      onEsc: l,
    } = e,
    u = w.useRef(null),
    c = w.useRef(null),
    [f, d, p] = VR(
      r,
      "chakra-modal",
      "chakra-modal--header",
      "chakra-modal--body"
    );
  NR(u, t && s), a1(u, t);
  const S = w.useRef(null),
    v = w.useCallback((_) => {
      S.current = _.target;
    }, []),
    P = w.useCallback(
      (_) => {
        _.key === "Escape" &&
          (_.stopPropagation(), i && (n == null || n()), l == null || l());
      },
      [i, n, l]
    ),
    [g, h] = w.useState(!1),
    [m, C] = w.useState(!1),
    E = w.useCallback(
      (_ = {}, D = null) => ({
        role: "dialog",
        ..._,
        ref: cm(D, u),
        id: f,
        tabIndex: -1,
        "aria-modal": !0,
        "aria-labelledby": g ? d : void 0,
        "aria-describedby": m ? p : void 0,
        onClick: is(_.onClick, (N) => N.stopPropagation()),
      }),
      [p, m, f, d, g]
    ),
    R = w.useCallback(
      (_) => {
        _.stopPropagation(),
          S.current === _.target &&
            Lc.isTopModal(u.current) &&
            (o && (n == null || n()), a == null || a());
      },
      [n, o, a]
    ),
    b = w.useCallback(
      (_ = {}, D = null) => ({
        ..._,
        ref: cm(D, c),
        onClick: is(_.onClick, R),
        onKeyDown: is(_.onKeyDown, P),
        onMouseDown: is(_.onMouseDown, v),
      }),
      [P, v, R]
    );
  return {
    isOpen: t,
    onClose: n,
    headerId: d,
    bodyId: p,
    setBodyMounted: C,
    setHeaderMounted: h,
    dialogRef: u,
    overlayRef: c,
    getDialogProps: E,
    getDialogContainerProps: b,
  };
}
function NR(e, t) {
  const n = e.current;
  w.useEffect(() => {
    if (!(!e.current || !t)) return IR(e.current);
  }, [t, e, n]);
}
function VR(e, ...t) {
  const n = w.useId(),
    r = e || n;
  return w.useMemo(() => t.map((o) => `${o}-${r}`), [r, t]);
}
var [jR, nl] = za({
    name: "ModalStylesContext",
    errorMessage: `useModalStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Modal />" `,
  }),
  [BR, to] = za({
    strict: !0,
    name: "ModalContext",
    errorMessage:
      "useModalContext: `context` is undefined. Seems you forgot to wrap modal components in `<Modal />`",
  }),
  u1 = (e) => {
    const t = {
        scrollBehavior: "outside",
        autoFocus: !0,
        trapFocus: !0,
        returnFocusOnClose: !0,
        blockScrollOnMount: !0,
        allowPinchZoom: !1,
        motionPreset: "scale",
        lockFocusAcrossFrames: !0,
        ...e,
      },
      {
        portalProps: n,
        children: r,
        autoFocus: o,
        trapFocus: i,
        initialFocusRef: s,
        finalFocusRef: a,
        returnFocusOnClose: l,
        blockScrollOnMount: u,
        allowPinchZoom: c,
        preserveScrollBarGap: f,
        motionPreset: d,
        lockFocusAcrossFrames: p,
        onCloseComplete: S,
      } = t,
      v = C2("Modal", t),
      g = {
        ...DR(t),
        autoFocus: o,
        trapFocus: i,
        initialFocusRef: s,
        finalFocusRef: a,
        returnFocusOnClose: l,
        blockScrollOnMount: u,
        allowPinchZoom: c,
        preserveScrollBarGap: f,
        motionPreset: d,
        lockFocusAcrossFrames: p,
      };
    return A.jsx(BR, {
      value: g,
      children: A.jsx(jR, {
        value: v,
        children: A.jsx(el, {
          onExitComplete: S,
          children: g.isOpen && A.jsx($a, { ...n, children: r }),
        }),
      }),
    });
  };
u1.displayName = "Modal";
var Os = "right-scroll-bar-position",
  Ls = "width-before-scroll-bar",
  zR = "with-scroll-bars-hidden",
  $R = "--removed-body-scroll-bar-size",
  c1 = Ly(),
  lu = function () {},
  rl = w.forwardRef(function (e, t) {
    var n = w.useRef(null),
      r = w.useState({
        onScrollCapture: lu,
        onWheelCapture: lu,
        onTouchMoveCapture: lu,
      }),
      o = r[0],
      i = r[1],
      s = e.forwardProps,
      a = e.children,
      l = e.className,
      u = e.removeScrollBar,
      c = e.enabled,
      f = e.shards,
      d = e.sideCar,
      p = e.noIsolation,
      S = e.inert,
      v = e.allowPinchZoom,
      P = e.as,
      g = P === void 0 ? "div" : P,
      h = My(e, [
        "forwardProps",
        "children",
        "className",
        "removeScrollBar",
        "enabled",
        "shards",
        "sideCar",
        "noIsolation",
        "inert",
        "allowPinchZoom",
        "as",
      ]),
      m = d,
      C = Ry([n, t]),
      E = jt(jt({}, h), o);
    return w.createElement(
      w.Fragment,
      null,
      c &&
        w.createElement(m, {
          sideCar: c1,
          removeScrollBar: u,
          shards: f,
          noIsolation: p,
          inert: S,
          setCallbacks: i,
          allowPinchZoom: !!v,
          lockRef: n,
        }),
      s
        ? w.cloneElement(w.Children.only(a), jt(jt({}, E), { ref: C }))
        : w.createElement(g, jt({}, E, { className: l, ref: C }), a)
    );
  });
rl.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 };
rl.classNames = { fullWidth: Ls, zeroRight: Os };
var wm,
  UR = function () {
    if (wm) return wm;
    if (typeof __webpack_nonce__ < "u") return __webpack_nonce__;
  };
function WR() {
  if (!document) return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = UR();
  return t && e.setAttribute("nonce", t), e;
}
function HR(e, t) {
  e.styleSheet
    ? (e.styleSheet.cssText = t)
    : e.appendChild(document.createTextNode(t));
}
function GR(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var ZR = function () {
    var e = 0,
      t = null;
    return {
      add: function (n) {
        e == 0 && (t = WR()) && (HR(t, n), GR(t)), e++;
      },
      remove: function () {
        e--,
          !e && t && (t.parentNode && t.parentNode.removeChild(t), (t = null));
      },
    };
  },
  KR = function () {
    var e = ZR();
    return function (t, n) {
      w.useEffect(
        function () {
          return (
            e.add(t),
            function () {
              e.remove();
            }
          );
        },
        [t && n]
      );
    };
  },
  f1 = function () {
    var e = KR(),
      t = function (n) {
        var r = n.styles,
          o = n.dynamic;
        return e(r, o), null;
      };
    return t;
  },
  YR = { left: 0, top: 0, right: 0, gap: 0 },
  uu = function (e) {
    return parseInt(e || "", 10) || 0;
  },
  XR = function (e) {
    var t = window.getComputedStyle(document.body),
      n = t[e === "padding" ? "paddingLeft" : "marginLeft"],
      r = t[e === "padding" ? "paddingTop" : "marginTop"],
      o = t[e === "padding" ? "paddingRight" : "marginRight"];
    return [uu(n), uu(r), uu(o)];
  },
  QR = function (e) {
    if ((e === void 0 && (e = "margin"), typeof window > "u")) return YR;
    var t = XR(e),
      n = document.documentElement.clientWidth,
      r = window.innerWidth;
    return {
      left: t[0],
      top: t[1],
      right: t[2],
      gap: Math.max(0, r - n + t[2] - t[0]),
    };
  },
  qR = f1(),
  JR = function (e, t, n, r) {
    var o = e.left,
      i = e.top,
      s = e.right,
      a = e.gap;
    return (
      n === void 0 && (n = "margin"),
      `
  .`
        .concat(
          zR,
          ` {
   overflow: hidden `
        )
        .concat(
          r,
          `;
   padding-right: `
        )
        .concat(a, "px ")
        .concat(
          r,
          `;
  }
  body {
    overflow: hidden `
        )
        .concat(
          r,
          `;
    overscroll-behavior: contain;
    `
        )
        .concat(
          [
            t && "position: relative ".concat(r, ";"),
            n === "margin" &&
              `
    padding-left: `
                .concat(
                  o,
                  `px;
    padding-top: `
                )
                .concat(
                  i,
                  `px;
    padding-right: `
                )
                .concat(
                  s,
                  `px;
    margin-left:0;
    margin-top:0;
    margin-right: `
                )
                .concat(a, "px ")
                .concat(
                  r,
                  `;
    `
                ),
            n === "padding" &&
              "padding-right: ".concat(a, "px ").concat(r, ";"),
          ]
            .filter(Boolean)
            .join(""),
          `
  }
  
  .`
        )
        .concat(
          Os,
          ` {
    right: `
        )
        .concat(a, "px ")
        .concat(
          r,
          `;
  }
  
  .`
        )
        .concat(
          Ls,
          ` {
    margin-right: `
        )
        .concat(a, "px ")
        .concat(
          r,
          `;
  }
  
  .`
        )
        .concat(Os, " .")
        .concat(
          Os,
          ` {
    right: 0 `
        )
        .concat(
          r,
          `;
  }
  
  .`
        )
        .concat(Ls, " .")
        .concat(
          Ls,
          ` {
    margin-right: 0 `
        )
        .concat(
          r,
          `;
  }
  
  body {
    `
        )
        .concat($R, ": ")
        .concat(
          a,
          `px;
  }
`
        )
    );
  },
  eM = function (e) {
    var t = e.noRelative,
      n = e.noImportant,
      r = e.gapMode,
      o = r === void 0 ? "margin" : r,
      i = w.useMemo(
        function () {
          return QR(o);
        },
        [o]
      );
    return w.createElement(qR, { styles: JR(i, !t, o, n ? "" : "!important") });
  },
  Fc = !1;
if (typeof window < "u")
  try {
    var ds = Object.defineProperty({}, "passive", {
      get: function () {
        return (Fc = !0), !0;
      },
    });
    window.addEventListener("test", ds, ds),
      window.removeEventListener("test", ds, ds);
  } catch {
    Fc = !1;
  }
var gr = Fc ? { passive: !1 } : !1,
  tM = function (e) {
    return e.tagName === "TEXTAREA";
  },
  d1 = function (e, t) {
    var n = window.getComputedStyle(e);
    return (
      n[t] !== "hidden" &&
      !(n.overflowY === n.overflowX && !tM(e) && n[t] === "visible")
    );
  },
  nM = function (e) {
    return d1(e, "overflowY");
  },
  rM = function (e) {
    return d1(e, "overflowX");
  },
  xm = function (e, t) {
    var n = t;
    do {
      typeof ShadowRoot < "u" && n instanceof ShadowRoot && (n = n.host);
      var r = p1(e, n);
      if (r) {
        var o = h1(e, n),
          i = o[1],
          s = o[2];
        if (i > s) return !0;
      }
      n = n.parentNode;
    } while (n && n !== document.body);
    return !1;
  },
  oM = function (e) {
    var t = e.scrollTop,
      n = e.scrollHeight,
      r = e.clientHeight;
    return [t, n, r];
  },
  iM = function (e) {
    var t = e.scrollLeft,
      n = e.scrollWidth,
      r = e.clientWidth;
    return [t, n, r];
  },
  p1 = function (e, t) {
    return e === "v" ? nM(t) : rM(t);
  },
  h1 = function (e, t) {
    return e === "v" ? oM(t) : iM(t);
  },
  sM = function (e, t) {
    return e === "h" && t === "rtl" ? -1 : 1;
  },
  aM = function (e, t, n, r, o) {
    var i = sM(e, window.getComputedStyle(t).direction),
      s = i * r,
      a = n.target,
      l = t.contains(a),
      u = !1,
      c = s > 0,
      f = 0,
      d = 0;
    do {
      var p = h1(e, a),
        S = p[0],
        v = p[1],
        P = p[2],
        g = v - P - i * S;
      (S || g) && p1(e, a) && ((f += g), (d += S)), (a = a.parentNode);
    } while ((!l && a !== document.body) || (l && (t.contains(a) || t === a)));
    return (
      ((c && ((o && f === 0) || (!o && s > f))) ||
        (!c && ((o && d === 0) || (!o && -s > d)))) &&
        (u = !0),
      u
    );
  },
  ps = function (e) {
    return "changedTouches" in e
      ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY]
      : [0, 0];
  },
  km = function (e) {
    return [e.deltaX, e.deltaY];
  },
  Cm = function (e) {
    return e && "current" in e ? e.current : e;
  },
  lM = function (e, t) {
    return e[0] === t[0] && e[1] === t[1];
  },
  uM = function (e) {
    return `
  .block-interactivity-`
      .concat(
        e,
        ` {pointer-events: none;}
  .allow-interactivity-`
      )
      .concat(
        e,
        ` {pointer-events: all;}
`
      );
  },
  cM = 0,
  vr = [];
function fM(e) {
  var t = w.useRef([]),
    n = w.useRef([0, 0]),
    r = w.useRef(),
    o = w.useState(cM++)[0],
    i = w.useState(function () {
      return f1();
    })[0],
    s = w.useRef(e);
  w.useEffect(
    function () {
      s.current = e;
    },
    [e]
  ),
    w.useEffect(
      function () {
        if (e.inert) {
          document.body.classList.add("block-interactivity-".concat(o));
          var v = u_([e.lockRef.current], (e.shards || []).map(Cm), !0).filter(
            Boolean
          );
          return (
            v.forEach(function (P) {
              return P.classList.add("allow-interactivity-".concat(o));
            }),
            function () {
              document.body.classList.remove("block-interactivity-".concat(o)),
                v.forEach(function (P) {
                  return P.classList.remove("allow-interactivity-".concat(o));
                });
            }
          );
        }
      },
      [e.inert, e.lockRef.current, e.shards]
    );
  var a = w.useCallback(function (v, P) {
      if ("touches" in v && v.touches.length === 2)
        return !s.current.allowPinchZoom;
      var g = ps(v),
        h = n.current,
        m = "deltaX" in v ? v.deltaX : h[0] - g[0],
        C = "deltaY" in v ? v.deltaY : h[1] - g[1],
        E,
        R = v.target,
        b = Math.abs(m) > Math.abs(C) ? "h" : "v";
      if ("touches" in v && b === "h" && R.type === "range") return !1;
      var _ = xm(b, R);
      if (!_) return !0;
      if ((_ ? (E = b) : ((E = b === "v" ? "h" : "v"), (_ = xm(b, R))), !_))
        return !1;
      if (
        (!r.current && "changedTouches" in v && (m || C) && (r.current = E), !E)
      )
        return !0;
      var D = r.current || E;
      return aM(D, P, v, D === "h" ? m : C, !0);
    }, []),
    l = w.useCallback(function (v) {
      var P = v;
      if (!(!vr.length || vr[vr.length - 1] !== i)) {
        var g = "deltaY" in P ? km(P) : ps(P),
          h = t.current.filter(function (E) {
            return E.name === P.type && E.target === P.target && lM(E.delta, g);
          })[0];
        if (h && h.should) {
          P.cancelable && P.preventDefault();
          return;
        }
        if (!h) {
          var m = (s.current.shards || [])
              .map(Cm)
              .filter(Boolean)
              .filter(function (E) {
                return E.contains(P.target);
              }),
            C = m.length > 0 ? a(P, m[0]) : !s.current.noIsolation;
          C && P.cancelable && P.preventDefault();
        }
      }
    }, []),
    u = w.useCallback(function (v, P, g, h) {
      var m = { name: v, delta: P, target: g, should: h };
      t.current.push(m),
        setTimeout(function () {
          t.current = t.current.filter(function (C) {
            return C !== m;
          });
        }, 1);
    }, []),
    c = w.useCallback(function (v) {
      (n.current = ps(v)), (r.current = void 0);
    }, []),
    f = w.useCallback(function (v) {
      u(v.type, km(v), v.target, a(v, e.lockRef.current));
    }, []),
    d = w.useCallback(function (v) {
      u(v.type, ps(v), v.target, a(v, e.lockRef.current));
    }, []);
  w.useEffect(function () {
    return (
      vr.push(i),
      e.setCallbacks({
        onScrollCapture: f,
        onWheelCapture: f,
        onTouchMoveCapture: d,
      }),
      document.addEventListener("wheel", l, gr),
      document.addEventListener("touchmove", l, gr),
      document.addEventListener("touchstart", c, gr),
      function () {
        (vr = vr.filter(function (v) {
          return v !== i;
        })),
          document.removeEventListener("wheel", l, gr),
          document.removeEventListener("touchmove", l, gr),
          document.removeEventListener("touchstart", c, gr);
      }
    );
  }, []);
  var p = e.removeScrollBar,
    S = e.inert;
  return w.createElement(
    w.Fragment,
    null,
    S ? w.createElement(i, { styles: uM(o) }) : null,
    p ? w.createElement(eM, { gapMode: "margin" }) : null
  );
}
const dM = c_(c1, fM);
var m1 = w.forwardRef(function (e, t) {
  return w.createElement(rl, jt({}, e, { ref: t, sideCar: dM }));
});
m1.classNames = rl.classNames;
const pM = m1;
function hM(e) {
  const {
      autoFocus: t,
      trapFocus: n,
      dialogRef: r,
      initialFocusRef: o,
      blockScrollOnMount: i,
      allowPinchZoom: s,
      finalFocusRef: a,
      returnFocusOnClose: l,
      preserveScrollBarGap: u,
      lockFocusAcrossFrames: c,
      isOpen: f,
    } = to(),
    [d, p] = dy();
  w.useEffect(() => {
    !d && p && setTimeout(p);
  }, [d, p]);
  const S = a1(r, f);
  return A.jsx(i1, {
    autoFocus: t,
    isDisabled: !n,
    initialFocusRef: o,
    finalFocusRef: a,
    restoreFocus: l,
    contentRef: r,
    lockFocusAcrossFrames: c,
    children: A.jsx(pM, {
      removeScrollBar: !u,
      allowPinchZoom: s,
      enabled: S === 1 && i,
      forwardProps: !0,
      children: e.children,
    }),
  });
}
var g1 = Wa((e, t) => {
  const {
      className: n,
      children: r,
      containerProps: o,
      motionProps: i,
      ...s
    } = e,
    { getDialogProps: a, getDialogContainerProps: l } = to(),
    u = a(s, t),
    c = l(o),
    f = ur("chakra-modal__content", n),
    d = nl(),
    p = {
      display: "flex",
      flexDirection: "column",
      position: "relative",
      width: "100%",
      outline: 0,
      ...d.dialog,
    },
    S = {
      display: "flex",
      width: "100vw",
      height: "$100vh",
      position: "fixed",
      left: 0,
      top: 0,
      ...d.dialogContainer,
    },
    { motionPreset: v } = to();
  return A.jsx(hM, {
    children: A.jsx(Ti.div, {
      ...c,
      className: "chakra-modal__content-container",
      tabIndex: -1,
      __css: S,
      children: A.jsx(s1, {
        preset: v,
        motionProps: i,
        className: f,
        ...u,
        __css: p,
        children: r,
      }),
    }),
  });
});
g1.displayName = "ModalContent";
var v1 = Wa((e, t) => {
  const { className: n, ...r } = e,
    { headerId: o, setHeaderMounted: i } = to();
  w.useEffect(() => (i(!0), () => i(!1)), [i]);
  const s = ur("chakra-modal__header", n),
    l = { flex: 0, ...nl().header };
  return A.jsx(Ti.header, { ref: t, className: s, id: o, ...r, __css: l });
});
v1.displayName = "ModalHeader";
var mM = Ti(Mi.div),
  y1 = Wa((e, t) => {
    const { className: n, transition: r, motionProps: o, ...i } = e,
      s = ur("chakra-modal__overlay", n),
      l = {
        pos: "fixed",
        left: "0",
        top: "0",
        w: "100vw",
        h: "100vh",
        ...nl().overlay,
      },
      { motionPreset: u } = to(),
      f = o || (u === "none" ? {} : Ey);
    return A.jsx(mM, { ...f, __css: l, ref: t, className: s, ...i });
  });
y1.displayName = "ModalOverlay";
var S1 = Wa((e, t) => {
  const { className: n, ...r } = e,
    { bodyId: o, setBodyMounted: i } = to();
  w.useEffect(() => (i(!0), () => i(!1)), [i]);
  const s = ur("chakra-modal__body", n),
    a = nl();
  return A.jsx(Ti.div, { ref: t, className: s, id: o, ...r, __css: a.body });
});
S1.displayName = "ModalBody";
const gM = w.createContext({
  color: "currentColor",
  size: "1em",
  weight: "regular",
  mirrored: !1,
});
var vM = Object.defineProperty,
  xa = Object.getOwnPropertySymbols,
  w1 = Object.prototype.hasOwnProperty,
  x1 = Object.prototype.propertyIsEnumerable,
  Pm = (e, t, n) =>
    t in e
      ? vM(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  Tm = (e, t) => {
    for (var n in t || (t = {})) w1.call(t, n) && Pm(e, n, t[n]);
    if (xa) for (var n of xa(t)) x1.call(t, n) && Pm(e, n, t[n]);
    return e;
  },
  Em = (e, t) => {
    var n = {};
    for (var r in e) w1.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
    if (e != null && xa)
      for (var r of xa(e)) t.indexOf(r) < 0 && x1.call(e, r) && (n[r] = e[r]);
    return n;
  };
const k1 = w.forwardRef((e, t) => {
  const n = e,
    {
      alt: r,
      color: o,
      size: i,
      weight: s,
      mirrored: a,
      children: l,
      weights: u,
    } = n,
    c = Em(n, [
      "alt",
      "color",
      "size",
      "weight",
      "mirrored",
      "children",
      "weights",
    ]),
    f = w.useContext(gM),
    {
      color: d = "currentColor",
      size: p,
      weight: S = "regular",
      mirrored: v = !1,
    } = f,
    P = Em(f, ["color", "size", "weight", "mirrored"]);
  return L.createElement(
    "svg",
    Tm(
      Tm(
        {
          ref: t,
          xmlns: "http://www.w3.org/2000/svg",
          width: i ?? p,
          height: i ?? p,
          fill: o ?? d,
          viewBox: "0 0 256 256",
          transform: a || v ? "scale(-1, 1)" : void 0,
        },
        P
      ),
      c
    ),
    !!r && L.createElement("title", null, r),
    l,
    u.get(s ?? S)
  );
});
k1.displayName = "IconBase";
const pd = k1;
var yM = Object.defineProperty,
  SM = Object.defineProperties,
  wM = Object.getOwnPropertyDescriptors,
  bm = Object.getOwnPropertySymbols,
  xM = Object.prototype.hasOwnProperty,
  kM = Object.prototype.propertyIsEnumerable,
  _m = (e, t, n) =>
    t in e
      ? yM(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  CM = (e, t) => {
    for (var n in t || (t = {})) xM.call(t, n) && _m(e, n, t[n]);
    if (bm) for (var n of bm(t)) kM.call(t, n) && _m(e, n, t[n]);
    return e;
  },
  PM = (e, t) => SM(e, wM(t));
const TM = new Map([
    [
      "bold",
      L.createElement(
        L.Fragment,
        null,
        L.createElement("path", {
          d: "M228,64a36,36,0,1,0-48,33.94V104a12,12,0,0,1-12,12H96a35.88,35.88,0,0,0-12,2.06V97.94a36,36,0,1,0-24,0v60.12a36,36,0,1,0,24,0V152a12,12,0,0,1,12-12h72a36,36,0,0,0,36-36V97.94A36.07,36.07,0,0,0,228,64ZM72,52A12,12,0,1,1,60,64,12,12,0,0,1,72,52Zm0,152a12,12,0,1,1,12-12A12,12,0,0,1,72,204ZM192,76a12,12,0,1,1,12-12A12,12,0,0,1,192,76Z",
        })
      ),
    ],
    [
      "duotone",
      L.createElement(
        L.Fragment,
        null,
        L.createElement("path", {
          d: "M216,64a24,24,0,1,1-24-24A24,24,0,0,1,216,64Z",
          opacity: "0.2",
        }),
        L.createElement("path", {
          d: "M224,64a32,32,0,1,0-40,31v9a16,16,0,0,1-16,16H96a31.71,31.71,0,0,0-16,4.31V95a32,32,0,1,0-16,0v66a32,32,0,1,0,16,0v-9a16,16,0,0,1,16-16h72a32,32,0,0,0,32-32V95A32.06,32.06,0,0,0,224,64ZM56,64A16,16,0,1,1,72,80,16,16,0,0,1,56,64ZM88,192a16,16,0,1,1-16-16A16,16,0,0,1,88,192ZM192,80a16,16,0,1,1,16-16A16,16,0,0,1,192,80Z",
        })
      ),
    ],
    [
      "fill",
      L.createElement(
        L.Fragment,
        null,
        L.createElement("path", {
          d: "M224,64a32,32,0,1,0-40,31v9a16,16,0,0,1-16,16H96a31.71,31.71,0,0,0-16,4.31V95a32,32,0,1,0-16,0v66a32,32,0,1,0,16,0v-9a16,16,0,0,1,16-16h72a32,32,0,0,0,32-32V95A32.06,32.06,0,0,0,224,64ZM56,64A16,16,0,1,1,72,80,16,16,0,0,1,56,64ZM88,192a16,16,0,1,1-16-16A16,16,0,0,1,88,192Z",
        })
      ),
    ],
    [
      "light",
      L.createElement(
        L.Fragment,
        null,
        L.createElement("path", {
          d: "M222,64a30,30,0,1,0-36,29.4V104a18,18,0,0,1-18,18H96a29.82,29.82,0,0,0-18,6V93.4a30,30,0,1,0-12,0v69.2a30,30,0,1,0,12,0V152a18,18,0,0,1,18-18h72a30,30,0,0,0,30-30V93.4A30.05,30.05,0,0,0,222,64ZM54,64A18,18,0,1,1,72,82,18,18,0,0,1,54,64ZM90,192a18,18,0,1,1-18-18A18,18,0,0,1,90,192ZM192,82a18,18,0,1,1,18-18A18,18,0,0,1,192,82Z",
        })
      ),
    ],
    [
      "regular",
      L.createElement(
        L.Fragment,
        null,
        L.createElement("path", {
          d: "M224,64a32,32,0,1,0-40,31v9a16,16,0,0,1-16,16H96a31.71,31.71,0,0,0-16,4.31V95a32,32,0,1,0-16,0v66a32,32,0,1,0,16,0v-9a16,16,0,0,1,16-16h72a32,32,0,0,0,32-32V95A32.06,32.06,0,0,0,224,64ZM56,64A16,16,0,1,1,72,80,16,16,0,0,1,56,64ZM88,192a16,16,0,1,1-16-16A16,16,0,0,1,88,192ZM192,80a16,16,0,1,1,16-16A16,16,0,0,1,192,80Z",
        })
      ),
    ],
    [
      "thin",
      L.createElement(
        L.Fragment,
        null,
        L.createElement("path", {
          d: "M220,64a28,28,0,1,0-32,27.71V104a20,20,0,0,1-20,20H96a27.9,27.9,0,0,0-20,8.43V91.71a28,28,0,1,0-8,0v72.58a28,28,0,1,0,8,0V152a20,20,0,0,1,20-20h72a28,28,0,0,0,28-28V91.71A28,28,0,0,0,220,64ZM52,64A20,20,0,1,1,72,84,20,20,0,0,1,52,64ZM92,192a20,20,0,1,1-20-20A20,20,0,0,1,92,192ZM192,84a20,20,0,1,1,20-20A20,20,0,0,1,192,84Z",
        })
      ),
    ],
  ]),
  C1 = w.forwardRef((e, t) =>
    L.createElement(pd, PM(CM({ ref: t }, e), { weights: TM }))
  );
C1.displayName = "GitBranch";
const EM = C1;
var bM = Object.defineProperty,
  _M = Object.defineProperties,
  RM = Object.getOwnPropertyDescriptors,
  Rm = Object.getOwnPropertySymbols,
  MM = Object.prototype.hasOwnProperty,
  AM = Object.prototype.propertyIsEnumerable,
  Mm = (e, t, n) =>
    t in e
      ? bM(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  OM = (e, t) => {
    for (var n in t || (t = {})) MM.call(t, n) && Mm(e, n, t[n]);
    if (Rm) for (var n of Rm(t)) AM.call(t, n) && Mm(e, n, t[n]);
    return e;
  },
  LM = (e, t) => _M(e, RM(t));
const FM = new Map([
    [
      "bold",
      L.createElement(
        L.Fragment,
        null,
        L.createElement("path", {
          d: "M228,128a12,12,0,0,1-12,12H40a12,12,0,0,1,0-24H216A12,12,0,0,1,228,128ZM40,76H216a12,12,0,0,0,0-24H40a12,12,0,0,0,0,24ZM216,180H40a12,12,0,0,0,0,24H216a12,12,0,0,0,0-24Z",
        })
      ),
    ],
    [
      "duotone",
      L.createElement(
        L.Fragment,
        null,
        L.createElement("path", { d: "M216,64V192H40V64Z", opacity: "0.2" }),
        L.createElement("path", {
          d: "M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z",
        })
      ),
    ],
    [
      "fill",
      L.createElement(
        L.Fragment,
        null,
        L.createElement("path", {
          d: "M224,120v16a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V120a8,8,0,0,1,8-8H216A8,8,0,0,1,224,120Zm-8,56H40a8,8,0,0,0-8,8v16a8,8,0,0,0,8,8H216a8,8,0,0,0,8-8V184A8,8,0,0,0,216,176Zm0-128H40a8,8,0,0,0-8,8V72a8,8,0,0,0,8,8H216a8,8,0,0,0,8-8V56A8,8,0,0,0,216,48Z",
        })
      ),
    ],
    [
      "light",
      L.createElement(
        L.Fragment,
        null,
        L.createElement("path", {
          d: "M222,128a6,6,0,0,1-6,6H40a6,6,0,0,1,0-12H216A6,6,0,0,1,222,128ZM40,70H216a6,6,0,0,0,0-12H40a6,6,0,0,0,0,12ZM216,186H40a6,6,0,0,0,0,12H216a6,6,0,0,0,0-12Z",
        })
      ),
    ],
    [
      "regular",
      L.createElement(
        L.Fragment,
        null,
        L.createElement("path", {
          d: "M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z",
        })
      ),
    ],
    [
      "thin",
      L.createElement(
        L.Fragment,
        null,
        L.createElement("path", {
          d: "M220,128a4,4,0,0,1-4,4H40a4,4,0,0,1,0-8H216A4,4,0,0,1,220,128ZM40,68H216a4,4,0,0,0,0-8H40a4,4,0,0,0,0,8ZM216,188H40a4,4,0,0,0,0,8H216a4,4,0,0,0,0-8Z",
        })
      ),
    ],
  ]),
  P1 = w.forwardRef((e, t) =>
    L.createElement(pd, LM(OM({ ref: t }, e), { weights: FM }))
  );
P1.displayName = "List";
const IM = P1;
var DM = Object.defineProperty,
  NM = Object.defineProperties,
  VM = Object.getOwnPropertyDescriptors,
  Am = Object.getOwnPropertySymbols,
  jM = Object.prototype.hasOwnProperty,
  BM = Object.prototype.propertyIsEnumerable,
  Om = (e, t, n) =>
    t in e
      ? DM(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  zM = (e, t) => {
    for (var n in t || (t = {})) jM.call(t, n) && Om(e, n, t[n]);
    if (Am) for (var n of Am(t)) BM.call(t, n) && Om(e, n, t[n]);
    return e;
  },
  $M = (e, t) => NM(e, VM(t));
const UM = new Map([
    [
      "bold",
      L.createElement(
        L.Fragment,
        null,
        L.createElement("path", {
          d: "M208.49,191.51a12,12,0,0,1-17,17L128,145,64.49,208.49a12,12,0,0,1-17-17L111,128,47.51,64.49a12,12,0,0,1,17-17L128,111l63.51-63.52a12,12,0,0,1,17,17L145,128Z",
        })
      ),
    ],
    [
      "duotone",
      L.createElement(
        L.Fragment,
        null,
        L.createElement("path", {
          d: "M216,48V208a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8H208A8,8,0,0,1,216,48Z",
          opacity: "0.2",
        }),
        L.createElement("path", {
          d: "M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z",
        })
      ),
    ],
    [
      "fill",
      L.createElement(
        L.Fragment,
        null,
        L.createElement("path", {
          d: "M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM181.66,170.34a8,8,0,0,1-11.32,11.32L128,139.31,85.66,181.66a8,8,0,0,1-11.32-11.32L116.69,128,74.34,85.66A8,8,0,0,1,85.66,74.34L128,116.69l42.34-42.35a8,8,0,0,1,11.32,11.32L139.31,128Z",
        })
      ),
    ],
    [
      "light",
      L.createElement(
        L.Fragment,
        null,
        L.createElement("path", {
          d: "M204.24,195.76a6,6,0,1,1-8.48,8.48L128,136.49,60.24,204.24a6,6,0,0,1-8.48-8.48L119.51,128,51.76,60.24a6,6,0,0,1,8.48-8.48L128,119.51l67.76-67.75a6,6,0,0,1,8.48,8.48L136.49,128Z",
        })
      ),
    ],
    [
      "regular",
      L.createElement(
        L.Fragment,
        null,
        L.createElement("path", {
          d: "M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z",
        })
      ),
    ],
    [
      "thin",
      L.createElement(
        L.Fragment,
        null,
        L.createElement("path", {
          d: "M202.83,197.17a4,4,0,0,1-5.66,5.66L128,133.66,58.83,202.83a4,4,0,0,1-5.66-5.66L122.34,128,53.17,58.83a4,4,0,0,1,5.66-5.66L128,122.34l69.17-69.17a4,4,0,1,1,5.66,5.66L133.66,128Z",
        })
      ),
    ],
  ]),
  T1 = w.forwardRef((e, t) =>
    L.createElement(pd, $M(zM({ ref: t }, e), { weights: UM }))
  );
T1.displayName = "X";
const WM = T1,
  Lm = {
    HOME: { local: "/", alt: "Inicio", title: "Inicio" },
    DISCOVERY: { local: "/discovery/", alt: "Descobrir", title: "Descobrir" },
    CONTACT: { local: "/contato", alt: "Entrar em contato", title: "Contato" },
  };
function HM() {
  const { isOpen: e, onOpen: t, onClose: n } = PR();
  return A.jsxs(A.Fragment, {
    children: [
      A.jsx(hk, {}),
      A.jsx(rc, {}),
      A.jsxs("section", {
        className: "_six",
        children: [
          A.jsxs("h1", {
            children: ["GC", A.jsx("b", { children: "'" }), "S"],
          }),
          A.jsx("nav", {
            children: Object.entries(Lm).map(([r, o]) =>
              A.jsx(A.Fragment, {
                children: A.jsx(
                  "a",
                  {
                    href: o.local,
                    title: o.alt,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    children: o.title,
                  },
                  r
                ),
              })
            ),
          }),
          A.jsx("button", {
            type: "button",
            title: "Menu",
            name: "Menu",
            onClick: t,
            children: A.jsx(IM, {}),
          }),
          A.jsxs(u1, {
            isOpen: e,
            onClose: n,
            children: [
              A.jsx(y1, {}),
              A.jsxs(g1, {
                className: "_menu",
                children: [
                  A.jsx(v1, {
                    children: A.jsx("button", {
                      type: "button",
                      title: "Fechar",
                      name: "Fechar",
                      onClick: n,
                      children: A.jsx(WM, {}),
                    }),
                  }),
                  A.jsx(S1, {
                    as: "nav",
                    className: "_burge",
                    children: Object.entries(Lm).map(([r, o]) =>
                      A.jsx(A.Fragment, {
                        children: A.jsx(
                          "a",
                          {
                            href: o.local,
                            title: o.alt,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            children: o.title,
                          },
                          r
                        ),
                      })
                    ),
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      A.jsx(rc, {}),
    ],
  });
}
Fs.createRoot(document.getElementById("header")).render(
  A.jsx(L.StrictMode, { children: A.jsx(HM, {}) })
);
function GM() {
  return A.jsxs("div", {
    className: "_sub",
    children: [
      A.jsx("p", { children: "© 2023 IME - Deus Conosco!" }),
      A.jsxs("span", { children: [A.jsx(EM, {}), "B1.0.1"] }),
    ],
  });
}
function ZM() {
  return A.jsx("div", {
    className: "_powered",
    children: A.jsxs("span", {
      children: [
        "Powered by",
        " ",
        A.jsxs("a", {
          className: "_poweredby",
          title: "Cats`s Flow",
          href: "https://catsflow.com/?poweredby",
          target: "_blank",
          rel: "noopener noreferrer",
          children: [
            A.jsx("img", {
              loading: "lazy",
              src: "/config/assets/catsflow/logo.svg",
              alt: "Logo da Cat's Flow",
            }),
            "Cat's Flow",
          ],
        }),
      ],
    }),
  });
}
function KM() {
  return A.jsxs(A.Fragment, {
    children: [A.jsx(rc, {}), A.jsx(GM, {}), A.jsx(ZM, {})],
  });
}
Fs.createRoot(document.getElementById("footer")).render(
  A.jsx(L.StrictMode, { children: A.jsx(KM, {}) })
);
