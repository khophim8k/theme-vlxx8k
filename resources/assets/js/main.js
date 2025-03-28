/*!jQuery Migrate v3.3.2 | (c) OpenJS Foundation and other contributors | jquery.org/license*/ "undefined" ==
    typeof jQuery.migrateMute && (jQuery.migrateMute = !0),
    (function (t) {
        "use strict";
        "function" == typeof define && define.amd
            ? define(["jquery"], function (e) {
                  return t(e, window);
              })
            : "object" == typeof module && module.exports
            ? (module.exports = t(require("jquery"), window))
            : t(jQuery, window);
    })(function (s, n) {
        "use strict";
        function e(e) {
            return (
                0 <=
                (function (e, t) {
                    for (
                        var r = /^(\d+)\.(\d+)\.(\d+)/,
                            n = r.exec(e) || [],
                            o = r.exec(t) || [],
                            i = 1;
                        i <= 3;
                        i++
                    ) {
                        if (+o[i] < +n[i]) return 1;
                        if (+n[i] < +o[i]) return -1;
                    }
                    return 0;
                })(s.fn.jquery, e)
            );
        }
        (s.migrateVersion = "3.3.2"),
            n.console &&
                n.console.log &&
                ((s && e("3.0.0")) ||
                    n.console.log("JQMIGRATE: jQuery 3.0.0+ REQUIRED"),
                s.migrateWarnings &&
                    n.console.log(
                        "JQMIGRATE: Migrate plugin loaded multiple times"
                    ),
                n.console.log(
                    "JQMIGRATE: Migrate is installed" +
                        (s.migrateMute ? "" : " with logging active") +
                        ", version " +
                        s.migrateVersion
                ));
        var r = {};
        function u(e) {
            var t = n.console;
            (s.migrateDeduplicateWarnings && r[e]) ||
                ((r[e] = !0),
                s.migrateWarnings.push(e),
                t &&
                    t.warn &&
                    !s.migrateMute &&
                    (t.warn("JQMIGRATE: " + e),
                    s.migrateTrace && t.trace && t.trace()));
        }
        function t(e, t, r, n) {
            Object.defineProperty(e, t, {
                configurable: !0,
                enumerable: !0,
                get: function () {
                    return u(n), r;
                },
                set: function (e) {
                    u(n), (r = e);
                },
            });
        }
        function o(e, t, r, n) {
            e[t] = function () {
                return u(n), r.apply(this, arguments);
            };
        }
        (s.migrateDeduplicateWarnings = !0),
            (s.migrateWarnings = []),
            void 0 === s.migrateTrace && (s.migrateTrace = !0),
            (s.migrateReset = function () {
                (r = {}), (s.migrateWarnings.length = 0);
            }),
            "BackCompat" === n.document.compatMode &&
                u("jQuery is not compatible with Quirks Mode");
        var i,
            a,
            c,
            d = {},
            l = s.fn.init,
            p = s.find,
            f = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/,
            y = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g,
            m = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
        for (i in ((s.fn.init = function (e) {
            var t = Array.prototype.slice.call(arguments);
            return (
                "string" == typeof e &&
                    "#" === e &&
                    (u("jQuery( '#' ) is not a valid selector"), (t[0] = [])),
                l.apply(this, t)
            );
        }),
        (s.fn.init.prototype = s.fn),
        (s.find = function (t) {
            var r = Array.prototype.slice.call(arguments);
            if ("string" == typeof t && f.test(t))
                try {
                    n.document.querySelector(t);
                } catch (e) {
                    t = t.replace(y, function (e, t, r, n) {
                        return "[" + t + r + '"' + n + '"]';
                    });
                    try {
                        n.document.querySelector(t),
                            u(
                                "Attribute selector with '#' must be quoted: " +
                                    r[0]
                            ),
                            (r[0] = t);
                    } catch (e) {
                        u("Attribute selector with '#' was not fixed: " + r[0]);
                    }
                }
            return p.apply(this, r);
        }),
        p))
            Object.prototype.hasOwnProperty.call(p, i) && (s.find[i] = p[i]);
        o(
            s.fn,
            "size",
            function () {
                return this.length;
            },
            "jQuery.fn.size() is deprecated and removed; use the .length property"
        ),
            o(
                s,
                "parseJSON",
                function () {
                    return JSON.parse.apply(null, arguments);
                },
                "jQuery.parseJSON is deprecated; use JSON.parse"
            ),
            o(s, "holdReady", s.holdReady, "jQuery.holdReady is deprecated"),
            o(
                s,
                "unique",
                s.uniqueSort,
                "jQuery.unique is deprecated; use jQuery.uniqueSort"
            ),
            t(
                s.expr,
                "filters",
                s.expr.pseudos,
                "jQuery.expr.filters is deprecated; use jQuery.expr.pseudos"
            ),
            t(
                s.expr,
                ":",
                s.expr.pseudos,
                "jQuery.expr[':'] is deprecated; use jQuery.expr.pseudos"
            ),
            e("3.1.1") &&
                o(
                    s,
                    "trim",
                    function (e) {
                        return null == e ? "" : (e + "").replace(m, "");
                    },
                    "jQuery.trim is deprecated; use String.prototype.trim"
                ),
            e("3.2.0") &&
                (o(
                    s,
                    "nodeName",
                    function (e, t) {
                        return (
                            e.nodeName &&
                            e.nodeName.toLowerCase() === t.toLowerCase()
                        );
                    },
                    "jQuery.nodeName is deprecated"
                ),
                o(
                    s,
                    "isArray",
                    Array.isArray,
                    "jQuery.isArray is deprecated; use Array.isArray"
                )),
            e("3.3.0") &&
                (o(
                    s,
                    "isNumeric",
                    function (e) {
                        var t = typeof e;
                        return (
                            ("number" == t || "string" == t) &&
                            !isNaN(e - parseFloat(e))
                        );
                    },
                    "jQuery.isNumeric() is deprecated"
                ),
                s.each(
                    "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
                        " "
                    ),
                    function (e, t) {
                        d["[object " + t + "]"] = t.toLowerCase();
                    }
                ),
                o(
                    s,
                    "type",
                    function (e) {
                        return null == e
                            ? e + ""
                            : "object" == typeof e || "function" == typeof e
                            ? d[Object.prototype.toString.call(e)] || "object"
                            : typeof e;
                    },
                    "jQuery.type is deprecated"
                ),
                o(
                    s,
                    "isFunction",
                    function (e) {
                        return "function" == typeof e;
                    },
                    "jQuery.isFunction() is deprecated"
                ),
                o(
                    s,
                    "isWindow",
                    function (e) {
                        return null != e && e === e.window;
                    },
                    "jQuery.isWindow() is deprecated"
                )),
            s.ajax &&
                ((a = s.ajax),
                (c = /(=)\?(?=&|$)|\?\?/),
                (s.ajax = function () {
                    var e = a.apply(this, arguments);
                    return (
                        e.promise &&
                            (o(
                                e,
                                "success",
                                e.done,
                                "jQXHR.success is deprecated and removed"
                            ),
                            o(
                                e,
                                "error",
                                e.fail,
                                "jQXHR.error is deprecated and removed"
                            ),
                            o(
                                e,
                                "complete",
                                e.always,
                                "jQXHR.complete is deprecated and removed"
                            )),
                        e
                    );
                }),
                e("4.0.0") ||
                    s.ajaxPrefilter("+json", function (e) {
                        !1 !== e.jsonp &&
                            (c.test(e.url) ||
                                ("string" == typeof e.data &&
                                    0 ===
                                        (e.contentType || "").indexOf(
                                            "application/x-www-form-urlencoded"
                                        ) &&
                                    c.test(e.data))) &&
                            u("JSON-to-JSONP auto-promotion is deprecated");
                    }));
        var g = s.fn.removeAttr,
            h = s.fn.toggleClass,
            v = /\S+/g;
        function j(e) {
            return e.replace(/-([a-z])/g, function (e, t) {
                return t.toUpperCase();
            });
        }
        s.fn.removeAttr = function (e) {
            var r = this;
            return (
                s.each(e.match(v), function (e, t) {
                    s.expr.match.bool.test(t) &&
                        (u(
                            "jQuery.fn.removeAttr no longer sets boolean properties: " +
                                t
                        ),
                        r.prop(t, !1));
                }),
                g.apply(this, arguments)
            );
        };
        var Q,
            b = !(s.fn.toggleClass = function (t) {
                return void 0 !== t && "boolean" != typeof t
                    ? h.apply(this, arguments)
                    : (u("jQuery.fn.toggleClass( boolean ) is deprecated"),
                      this.each(function () {
                          var e =
                              (this.getAttribute &&
                                  this.getAttribute("class")) ||
                              "";
                          e && s.data(this, "__className__", e),
                              this.setAttribute &&
                                  this.setAttribute(
                                      "class",
                                      (!e &&
                                          !1 !== t &&
                                          s.data(this, "__className__")) ||
                                          ""
                                  );
                      }));
            }),
            w = /^[a-z]/,
            x =
                /^(?:Border(?:Top|Right|Bottom|Left)?(?:Width|)|(?:Margin|Padding)?(?:Top|Right|Bottom|Left)?|(?:Min|Max)?(?:Width|Height))$/;
        s.swap &&
            s.each(["height", "width", "reliableMarginRight"], function (e, t) {
                var r = s.cssHooks[t] && s.cssHooks[t].get;
                r &&
                    (s.cssHooks[t].get = function () {
                        var e;
                        return (
                            (b = !0),
                            (e = r.apply(this, arguments)),
                            (b = !1),
                            e
                        );
                    });
            }),
            (s.swap = function (e, t, r, n) {
                var o,
                    i,
                    a = {};
                for (i in (b ||
                    u("jQuery.swap() is undocumented and deprecated"),
                t))
                    (a[i] = e.style[i]), (e.style[i] = t[i]);
                for (i in ((o = r.apply(e, n || [])), t)) e.style[i] = a[i];
                return o;
            }),
            e("3.4.0") &&
                "undefined" != typeof Proxy &&
                (s.cssProps = new Proxy(s.cssProps || {}, {
                    set: function () {
                        return (
                            u("JQMIGRATE: jQuery.cssProps is deprecated"),
                            Reflect.set.apply(this, arguments)
                        );
                    },
                })),
            s.cssNumber || (s.cssNumber = {}),
            (Q = s.fn.css),
            (s.fn.css = function (e, t) {
                var r,
                    n,
                    o = this;
                return e && "object" == typeof e && !Array.isArray(e)
                    ? (s.each(e, function (e, t) {
                          s.fn.css.call(o, e, t);
                      }),
                      this)
                    : ("number" == typeof t &&
                          ((r = j(e)),
                          (n = r),
                          (w.test(n) &&
                              x.test(n[0].toUpperCase() + n.slice(1))) ||
                              s.cssNumber[r] ||
                              u(
                                  'Number-typed values are deprecated for jQuery.fn.css( "' +
                                      e +
                                      '", value )'
                              )),
                      Q.apply(this, arguments));
            });
        var A,
            k,
            S,
            M,
            N = s.data;
        (s.data = function (e, t, r) {
            var n, o, i;
            if (t && "object" == typeof t && 2 === arguments.length) {
                for (i in ((n = s.hasData(e) && N.call(this, e)), (o = {}), t))
                    i !== j(i)
                        ? (u(
                              "jQuery.data() always sets/gets camelCased names: " +
                                  i
                          ),
                          (n[i] = t[i]))
                        : (o[i] = t[i]);
                return N.call(this, e, o), t;
            }
            return t &&
                "string" == typeof t &&
                t !== j(t) &&
                (n = s.hasData(e) && N.call(this, e)) &&
                t in n
                ? (u("jQuery.data() always sets/gets camelCased names: " + t),
                  2 < arguments.length && (n[t] = r),
                  n[t])
                : N.apply(this, arguments);
        }),
            s.fx &&
                ((S = s.Tween.prototype.run),
                (M = function (e) {
                    return e;
                }),
                (s.Tween.prototype.run = function () {
                    1 < s.easing[this.easing].length &&
                        (u(
                            "'jQuery.easing." +
                                this.easing.toString() +
                                "' should use only one argument"
                        ),
                        (s.easing[this.easing] = M)),
                        S.apply(this, arguments);
                }),
                (A = s.fx.interval || 13),
                (k = "jQuery.fx.interval is deprecated"),
                n.requestAnimationFrame &&
                    Object.defineProperty(s.fx, "interval", {
                        configurable: !0,
                        enumerable: !0,
                        get: function () {
                            return n.document.hidden || u(k), A;
                        },
                        set: function (e) {
                            u(k), (A = e);
                        },
                    }));
        var R = s.fn.load,
            H = s.event.add,
            C = s.event.fix;
        (s.event.props = []),
            (s.event.fixHooks = {}),
            t(
                s.event.props,
                "concat",
                s.event.props.concat,
                "jQuery.event.props.concat() is deprecated and removed"
            ),
            (s.event.fix = function (e) {
                var t,
                    r = e.type,
                    n = this.fixHooks[r],
                    o = s.event.props;
                if (o.length) {
                    u(
                        "jQuery.event.props are deprecated and removed: " +
                            o.join()
                    );
                    while (o.length) s.event.addProp(o.pop());
                }
                if (
                    n &&
                    !n._migrated_ &&
                    ((n._migrated_ = !0),
                    u("jQuery.event.fixHooks are deprecated and removed: " + r),
                    (o = n.props) && o.length)
                )
                    while (o.length) s.event.addProp(o.pop());
                return (
                    (t = C.call(this, e)), n && n.filter ? n.filter(t, e) : t
                );
            }),
            (s.event.add = function (e, t) {
                return (
                    e === n &&
                        "load" === t &&
                        "complete" === n.document.readyState &&
                        u(
                            "jQuery(window).on('load'...) called after load event occurred"
                        ),
                    H.apply(this, arguments)
                );
            }),
            s.each(["load", "unload", "error"], function (e, t) {
                s.fn[t] = function () {
                    var e = Array.prototype.slice.call(arguments, 0);
                    return "load" === t && "string" == typeof e[0]
                        ? R.apply(this, e)
                        : (u("jQuery.fn." + t + "() is deprecated"),
                          e.splice(0, 0, t),
                          arguments.length
                              ? this.on.apply(this, e)
                              : (this.triggerHandler.apply(this, e), this));
                };
            }),
            s.each(
                "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
                    " "
                ),
                function (e, r) {
                    s.fn[r] = function (e, t) {
                        return (
                            u(
                                "jQuery.fn." +
                                    r +
                                    "() event shorthand is deprecated"
                            ),
                            0 < arguments.length
                                ? this.on(r, null, e, t)
                                : this.trigger(r)
                        );
                    };
                }
            ),
            s(function () {
                s(n.document).triggerHandler("ready");
            }),
            (s.event.special.ready = {
                setup: function () {
                    this === n.document && u("'ready' event is deprecated");
                },
            }),
            s.fn.extend({
                bind: function (e, t, r) {
                    return (
                        u("jQuery.fn.bind() is deprecated"),
                        this.on(e, null, t, r)
                    );
                },
                unbind: function (e, t) {
                    return (
                        u("jQuery.fn.unbind() is deprecated"),
                        this.off(e, null, t)
                    );
                },
                delegate: function (e, t, r, n) {
                    return (
                        u("jQuery.fn.delegate() is deprecated"),
                        this.on(t, e, r, n)
                    );
                },
                undelegate: function (e, t, r) {
                    return (
                        u("jQuery.fn.undelegate() is deprecated"),
                        1 === arguments.length
                            ? this.off(e, "**")
                            : this.off(t, e || "**", r)
                    );
                },
                hover: function (e, t) {
                    return (
                        u("jQuery.fn.hover() is deprecated"),
                        this.on("mouseenter", e).on("mouseleave", t || e)
                    );
                },
            });
        function T(e) {
            var t = n.document.implementation.createHTMLDocument("");
            return (t.body.innerHTML = e), t.body && t.body.innerHTML;
        }
        function P(e) {
            var t = e.replace(O, "<$1></$2>");
            t !== e &&
                T(e) !== T(t) &&
                u("HTML tags must be properly nested and closed: " + e);
        }
        var O =
                /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
            q = s.htmlPrefilter;
        (s.UNSAFE_restoreLegacyHtmlPrefilter = function () {
            s.htmlPrefilter = function (e) {
                return P(e), e.replace(O, "<$1></$2>");
            };
        }),
            (s.htmlPrefilter = function (e) {
                return P(e), q(e);
            });
        var D,
            _ = s.fn.offset;
        (s.fn.offset = function () {
            var e = this[0];
            return !e || (e.nodeType && e.getBoundingClientRect)
                ? _.apply(this, arguments)
                : (u("jQuery.fn.offset() requires a valid DOM element"),
                  arguments.length ? this : void 0);
        }),
            s.ajax &&
                ((D = s.param),
                (s.param = function (e, t) {
                    var r = s.ajaxSettings && s.ajaxSettings.traditional;
                    return (
                        void 0 === t &&
                            r &&
                            (u(
                                "jQuery.param() no longer uses jQuery.ajaxSettings.traditional"
                            ),
                            (t = r)),
                        D.call(this, e, t)
                    );
                }));
        var E,
            F,
            J = s.fn.andSelf || s.fn.addBack;
        return (
            (s.fn.andSelf = function () {
                return (
                    u(
                        "jQuery.fn.andSelf() is deprecated and removed, use jQuery.fn.addBack()"
                    ),
                    J.apply(this, arguments)
                );
            }),
            s.Deferred &&
                ((E = s.Deferred),
                (F = [
                    [
                        "resolve",
                        "done",
                        s.Callbacks("once memory"),
                        s.Callbacks("once memory"),
                        "resolved",
                    ],
                    [
                        "reject",
                        "fail",
                        s.Callbacks("once memory"),
                        s.Callbacks("once memory"),
                        "rejected",
                    ],
                    [
                        "notify",
                        "progress",
                        s.Callbacks("memory"),
                        s.Callbacks("memory"),
                    ],
                ]),
                (s.Deferred = function (e) {
                    var i = E(),
                        a = i.promise();
                    return (
                        (i.pipe = a.pipe =
                            function () {
                                var o = arguments;
                                return (
                                    u("deferred.pipe() is deprecated"),
                                    s
                                        .Deferred(function (n) {
                                            s.each(F, function (e, t) {
                                                var r =
                                                    "function" == typeof o[e] &&
                                                    o[e];
                                                i[t[1]](function () {
                                                    var e =
                                                        r &&
                                                        r.apply(
                                                            this,
                                                            arguments
                                                        );
                                                    e &&
                                                    "function" ==
                                                        typeof e.promise
                                                        ? e
                                                              .promise()
                                                              .done(n.resolve)
                                                              .fail(n.reject)
                                                              .progress(
                                                                  n.notify
                                                              )
                                                        : n[t[0] + "With"](
                                                              this === a
                                                                  ? n.promise()
                                                                  : this,
                                                              r
                                                                  ? [e]
                                                                  : arguments
                                                          );
                                                });
                                            }),
                                                (o = null);
                                        })
                                        .promise()
                                );
                            }),
                        e && e.call(i, i),
                        i
                    );
                }),
                (s.Deferred.exceptionHook = E.exceptionHook)),
            s
        );
    });
/*!lazysizes - v5.2.0*/ !(function (a, b) {
    var c = b(a, a.document, Date);
    (a.lazySizes = c),
        "object" == typeof module && module.exports && (module.exports = c);
})("undefined" != typeof window ? window : {}, function (a, b, c) {
    "use strict";
    var d, e;
    if (
        ((function () {
            var b,
                c = {
                    lazyClass: "lazyload",
                    loadedClass: "lazyloaded",
                    loadingClass: "lazyloading",
                    preloadClass: "lazypreload",
                    errorClass: "lazyerror",
                    autosizesClass: "lazyautosizes",
                    srcAttr: "data-src",
                    srcsetAttr: "data-srcset",
                    sizesAttr: "data-sizes",
                    minSize: 40,
                    customMedia: {},
                    init: !0,
                    expFactor: 1.5,
                    hFac: 0.8,
                    loadMode: 2,
                    loadHidden: !0,
                    ricTimeout: 0,
                    throttleDelay: 125,
                };
            e = a.lazySizesConfig || a.lazysizesConfig || {};
            for (b in c) b in e || (e[b] = c[b]);
        })(),
        !b || !b.getElementsByClassName)
    )
        return { init: function () {}, cfg: e, noSupport: !0 };
    var f = b.documentElement,
        g = a.HTMLPictureElement,
        h = "addEventListener",
        i = "getAttribute",
        j = a[h].bind(a),
        k = a.setTimeout,
        l = a.requestAnimationFrame || k,
        m = a.requestIdleCallback,
        n = /^picture$/i,
        o = ["load", "error", "lazyincluded", "_lazyloaded"],
        p = {},
        q = Array.prototype.forEach,
        r = function (a, b) {
            return (
                p[b] || (p[b] = new RegExp("(\\s|^)" + b + "(\\s|$)")),
                p[b].test(a[i]("class") || "") && p[b]
            );
        },
        s = function (a, b) {
            r(a, b) ||
                a.setAttribute("class", (a[i]("class") || "").trim() + " " + b);
        },
        t = function (a, b) {
            var c;
            (c = r(a, b)) &&
                a.setAttribute("class", (a[i]("class") || "").replace(c, " "));
        },
        u = function (a, b, c) {
            var d = c ? h : "removeEventListener";
            c && u(a, b),
                o.forEach(function (c) {
                    a[d](c, b);
                });
        },
        v = function (a, c, e, f, g) {
            var h = b.createEvent("Event");
            return (
                e || (e = {}),
                (e.instance = d),
                h.initEvent(c, !f, !g),
                (h.detail = e),
                a.dispatchEvent(h),
                h
            );
        },
        w = function (b, c) {
            var d;
            !g && (d = a.picturefill || e.pf)
                ? (c &&
                      c.src &&
                      !b[i]("srcset") &&
                      b.setAttribute("srcset", c.src),
                  d({ reevaluate: !0, elements: [b] }))
                : c && c.src && (b.src = c.src);
        },
        x = function (a, b) {
            return (getComputedStyle(a, null) || {})[b];
        },
        y = function (a, b, c) {
            for (
                c = c || a.offsetWidth;
                c < e.minSize && b && !a._lazysizesWidth;

            )
                (c = b.offsetWidth), (b = b.parentNode);
            return c;
        },
        z = (function () {
            var a,
                c,
                d = [],
                e = [],
                f = d,
                g = function () {
                    var b = f;
                    for (f = d.length ? e : d, a = !0, c = !1; b.length; )
                        b.shift()();
                    a = !1;
                },
                h = function (d, e) {
                    a && !e
                        ? d.apply(this, arguments)
                        : (f.push(d), c || ((c = !0), (b.hidden ? k : l)(g)));
                };
            return (h._lsFlush = g), h;
        })(),
        A = function (a, b) {
            return b
                ? function () {
                      z(a);
                  }
                : function () {
                      var b = this,
                          c = arguments;
                      z(function () {
                          a.apply(b, c);
                      });
                  };
        },
        B = function (a) {
            var b,
                d = 0,
                f = e.throttleDelay,
                g = e.ricTimeout,
                h = function () {
                    (b = !1), (d = c.now()), a();
                },
                i =
                    m && g > 49
                        ? function () {
                              m(h, { timeout: g }),
                                  g !== e.ricTimeout && (g = e.ricTimeout);
                          }
                        : A(function () {
                              k(h);
                          }, !0);
            return function (a) {
                var e;
                (a = !0 === a) && (g = 33),
                    b ||
                        ((b = !0),
                        (e = f - (c.now() - d)),
                        e < 0 && (e = 0),
                        a || e < 9 ? i() : k(i, e));
            };
        },
        C = function (a) {
            var b,
                d,
                e = 99,
                f = function () {
                    (b = null), a();
                },
                g = function () {
                    var a = c.now() - d;
                    a < e ? k(g, e - a) : (m || f)(f);
                };
            return function () {
                (d = c.now()), b || (b = k(g, e));
            };
        },
        D = (function () {
            var g,
                m,
                o,
                p,
                y,
                D,
                F,
                G,
                H,
                I,
                J,
                K,
                L = /^img$/i,
                M = /^iframe$/i,
                N =
                    "onscroll" in a &&
                    !/(gle|ing)bot/.test(navigator.userAgent),
                O = 0,
                P = 0,
                Q = 0,
                R = -1,
                S = function (a) {
                    Q--, (!a || Q < 0 || !a.target) && (Q = 0);
                },
                T = function (a) {
                    return (
                        null == K && (K = "hidden" == x(b.body, "visibility")),
                        K ||
                            !(
                                "hidden" == x(a.parentNode, "visibility") &&
                                "hidden" == x(a, "visibility")
                            )
                    );
                },
                U = function (a, c) {
                    var d,
                        e = a,
                        g = T(a);
                    for (
                        G -= c, J += c, H -= c, I += c;
                        g && (e = e.offsetParent) && e != b.body && e != f;

                    )
                        (g = (x(e, "opacity") || 1) > 0) &&
                            "visible" != x(e, "overflow") &&
                            ((d = e.getBoundingClientRect()),
                            (g =
                                I > d.left &&
                                H < d.right &&
                                J > d.top - 1 &&
                                G < d.bottom + 1));
                    return g;
                },
                V = function () {
                    var a,
                        c,
                        h,
                        j,
                        k,
                        l,
                        n,
                        o,
                        q,
                        r,
                        s,
                        t,
                        u = d.elements;
                    if ((p = e.loadMode) && Q < 8 && (a = u.length)) {
                        for (c = 0, R++; c < a; c++)
                            if (u[c] && !u[c]._lazyRace)
                                if (
                                    !N ||
                                    (d.prematureUnveil &&
                                        d.prematureUnveil(u[c]))
                                )
                                    ba(u[c]);
                                else if (
                                    (((o = u[c][i]("data-expand")) &&
                                        (l = 1 * o)) ||
                                        (l = P),
                                    r ||
                                        ((r =
                                            !e.expand || e.expand < 1
                                                ? f.clientHeight > 500 &&
                                                  f.clientWidth > 500
                                                    ? 500
                                                    : 370
                                                : e.expand),
                                        (d._defEx = r),
                                        (s = r * e.expFactor),
                                        (t = e.hFac),
                                        (K = null),
                                        P < s &&
                                        Q < 1 &&
                                        R > 2 &&
                                        p > 2 &&
                                        !b.hidden
                                            ? ((P = s), (R = 0))
                                            : (P =
                                                  p > 1 && R > 1 && Q < 6
                                                      ? r
                                                      : O)),
                                    q !== l &&
                                        ((D = innerWidth + l * t),
                                        (F = innerHeight + l),
                                        (n = -1 * l),
                                        (q = l)),
                                    (h = u[c].getBoundingClientRect()),
                                    (J = h.bottom) >= n &&
                                        (G = h.top) <= F &&
                                        (I = h.right) >= n * t &&
                                        (H = h.left) <= D &&
                                        (J || I || H || G) &&
                                        (e.loadHidden || T(u[c])) &&
                                        ((m &&
                                            Q < 3 &&
                                            !o &&
                                            (p < 3 || R < 4)) ||
                                            U(u[c], l)))
                                ) {
                                    if ((ba(u[c]), (k = !0), Q > 9)) break;
                                } else
                                    !k &&
                                        m &&
                                        !j &&
                                        Q < 4 &&
                                        R < 4 &&
                                        p > 2 &&
                                        (g[0] || e.preloadAfterLoad) &&
                                        (g[0] ||
                                            (!o &&
                                                (J ||
                                                    I ||
                                                    H ||
                                                    G ||
                                                    "auto" !=
                                                        u[c][i](
                                                            e.sizesAttr
                                                        )))) &&
                                        (j = g[0] || u[c]);
                        j && !k && ba(j);
                    }
                },
                W = B(V),
                X = function (a) {
                    var b = a.target;
                    if (b._lazyCache) return void delete b._lazyCache;
                    S(a),
                        s(b, e.loadedClass),
                        t(b, e.loadingClass),
                        u(b, Z),
                        v(b, "lazyloaded");
                },
                Y = A(X),
                Z = function (a) {
                    Y({ target: a.target });
                },
                $ = function (a, b) {
                    try {
                        a.contentWindow.location.replace(b);
                    } catch (c) {
                        a.src = b;
                    }
                },
                _ = function (a) {
                    var b,
                        c = a[i](e.srcsetAttr);
                    (b = e.customMedia[a[i]("data-media") || a[i]("media")]) &&
                        a.setAttribute("media", b),
                        c && a.setAttribute("srcset", c);
                },
                aa = A(function (a, b, c, d, f) {
                    var g, h, j, l, m, p;
                    (m = v(a, "lazybeforeunveil", b)).defaultPrevented ||
                        (d &&
                            (c
                                ? s(a, e.autosizesClass)
                                : a.setAttribute("sizes", d)),
                        (h = a[i](e.srcsetAttr)),
                        (g = a[i](e.srcAttr)),
                        f &&
                            ((j = a.parentNode),
                            (l = j && n.test(j.nodeName || ""))),
                        (p = b.firesLoad || ("src" in a && (h || g || l))),
                        (m = { target: a }),
                        s(a, e.loadingClass),
                        p && (clearTimeout(o), (o = k(S, 2500)), u(a, Z, !0)),
                        l && q.call(j.getElementsByTagName("source"), _),
                        h
                            ? a.setAttribute("srcset", h)
                            : g &&
                              !l &&
                              (M.test(a.nodeName) ? $(a, g) : (a.src = g)),
                        f && (h || l) && w(a, { src: g })),
                        a._lazyRace && delete a._lazyRace,
                        t(a, e.lazyClass),
                        z(function () {
                            var b = a.complete && a.naturalWidth > 1;
                            (p && !b) ||
                                (b && s(a, "ls-is-cached"),
                                X(m),
                                (a._lazyCache = !0),
                                k(function () {
                                    "_lazyCache" in a && delete a._lazyCache;
                                }, 9)),
                                "lazy" == a.loading && Q--;
                        }, !0);
                }),
                ba = function (a) {
                    if (!a._lazyRace) {
                        var b,
                            c = L.test(a.nodeName),
                            d = c && (a[i](e.sizesAttr) || a[i]("sizes")),
                            f = "auto" == d;
                        ((!f && m) ||
                            !c ||
                            (!a[i]("src") && !a.srcset) ||
                            a.complete ||
                            r(a, e.errorClass) ||
                            !r(a, e.lazyClass)) &&
                            ((b = v(a, "lazyunveilread").detail),
                            f && E.updateElem(a, !0, a.offsetWidth),
                            (a._lazyRace = !0),
                            Q++,
                            aa(a, b, f, d, c));
                    }
                },
                ca = C(function () {
                    (e.loadMode = 3), W();
                }),
                da = function () {
                    3 == e.loadMode && (e.loadMode = 2), ca();
                },
                ea = function () {
                    if (!m) {
                        if (c.now() - y < 999) return void k(ea, 999);
                        (m = !0), (e.loadMode = 3), W(), j("scroll", da, !0);
                    }
                };
            return {
                _: function () {
                    (y = c.now()),
                        (d.elements = b.getElementsByClassName(e.lazyClass)),
                        (g = b.getElementsByClassName(
                            e.lazyClass + " " + e.preloadClass
                        )),
                        j("scroll", W, !0),
                        j("resize", W, !0),
                        j("pageshow", function (a) {
                            if (a.persisted) {
                                var c = b.querySelectorAll(
                                    "." + e.loadingClass
                                );
                                c.length &&
                                    c.forEach &&
                                    l(function () {
                                        c.forEach(function (a) {
                                            a.complete && ba(a);
                                        });
                                    });
                            }
                        }),
                        a.MutationObserver
                            ? new MutationObserver(W).observe(f, {
                                  childList: !0,
                                  subtree: !0,
                                  attributes: !0,
                              })
                            : (f[h]("DOMNodeInserted", W, !0),
                              f[h]("DOMAttrModified", W, !0),
                              setInterval(W, 999)),
                        j("hashchange", W, !0),
                        [
                            "focus",
                            "mouseover",
                            "click",
                            "load",
                            "transitionend",
                            "animationend",
                        ].forEach(function (a) {
                            b[h](a, W, !0);
                        }),
                        /d$|^c/.test(b.readyState)
                            ? ea()
                            : (j("load", ea),
                              b[h]("DOMContentLoaded", W),
                              k(ea, 2e4)),
                        d.elements.length ? (V(), z._lsFlush()) : W();
                },
                checkElems: W,
                unveil: ba,
                _aLSL: da,
            };
        })(),
        E = (function () {
            var a,
                c = A(function (a, b, c, d) {
                    var e, f, g;
                    if (
                        ((a._lazysizesWidth = d),
                        (d += "px"),
                        a.setAttribute("sizes", d),
                        n.test(b.nodeName || ""))
                    )
                        for (
                            e = b.getElementsByTagName("source"),
                                f = 0,
                                g = e.length;
                            f < g;
                            f++
                        )
                            e[f].setAttribute("sizes", d);
                    c.detail.dataAttr || w(a, c.detail);
                }),
                d = function (a, b, d) {
                    var e,
                        f = a.parentNode;
                    f &&
                        ((d = y(a, f, d)),
                        (e = v(a, "lazybeforesizes", {
                            width: d,
                            dataAttr: !!b,
                        })),
                        e.defaultPrevented ||
                            ((d = e.detail.width) &&
                                d !== a._lazysizesWidth &&
                                c(a, f, e, d)));
                },
                f = function () {
                    var b,
                        c = a.length;
                    if (c) for (b = 0; b < c; b++) d(a[b]);
                },
                g = C(f);
            return {
                _: function () {
                    (a = b.getElementsByClassName(e.autosizesClass)),
                        j("resize", g);
                },
                checkElems: g,
                updateElem: d,
            };
        })(),
        F = function () {
            !F.i && b.getElementsByClassName && ((F.i = !0), E._(), D._());
        };
    return (
        k(function () {
            e.init && F();
        }),
        (d = {
            cfg: e,
            autoSizer: E,
            loader: D,
            init: F,
            uP: w,
            aC: s,
            rC: t,
            hC: r,
            fire: v,
            gW: y,
            rAF: z,
        })
    );
});
!(function (e) {
    "function" == typeof define && define.amd
        ? define(["jquery"], e)
        : "object" == typeof exports
        ? (module.exports = e)
        : e(jQuery);
})(function (h) {
    function t(e) {
        var t,
            o,
            n = e || window.event,
            a = v.call(arguments, 1),
            i = 0,
            l = 0,
            r = 0,
            s = 0,
            c = 0,
            d = 0;
        if (
            (((e = h.event.fix(n)).type = "mousewheel"),
            "detail" in n && (r = -1 * n.detail),
            "wheelDelta" in n && (r = n.wheelDelta),
            "wheelDeltaY" in n && (r = n.wheelDeltaY),
            "wheelDeltaX" in n && (l = -1 * n.wheelDeltaX),
            "axis" in n &&
                n.axis === n.HORIZONTAL_AXIS &&
                ((l = -1 * r), (r = 0)),
            (i = 0 === r ? l : r),
            "deltaY" in n && (i = r = -1 * n.deltaY),
            "deltaX" in n && ((l = n.deltaX), 0 === r && (i = -1 * l)),
            0 !== r || 0 !== l)
        ) {
            1 === n.deltaMode
                ? ((i *= t = h.data(this, "mousewheel-line-height")),
                  (r *= t),
                  (l *= t))
                : 2 === n.deltaMode &&
                  ((i *= o = h.data(this, "mousewheel-page-height")),
                  (r *= o),
                  (l *= o));
            var u,
                s = Math.max(Math.abs(r), Math.abs(l));
            return (
                (g && !(s < g)) || (m(n, (g = s)) && (g /= 40)),
                m(n, s) && ((i /= 40), (l /= 40), (r /= 40)),
                (i = Math[1 <= i ? "floor" : "ceil"](i / g)),
                (l = Math[1 <= l ? "floor" : "ceil"](l / g)),
                (r = Math[1 <= r ? "floor" : "ceil"](r / g)),
                x.settings.normalizeOffset &&
                    this.getBoundingClientRect &&
                    ((u = this.getBoundingClientRect()),
                    (c = e.clientX - u.left),
                    (d = e.clientY - u.top)),
                (e.deltaX = l),
                (e.deltaY = r),
                (e.deltaFactor = g),
                (e.offsetX = c),
                (e.offsetY = d),
                (e.deltaMode = 0),
                a.unshift(e, i, l, r),
                p && clearTimeout(p),
                (p = setTimeout(f, 200)),
                (h.event.dispatch || h.event.handle).apply(this, a)
            );
        }
    }
    function f() {
        g = null;
    }
    function m(e, t) {
        return (
            x.settings.adjustOldDeltas &&
            "mousewheel" === e.type &&
            t % 120 == 0
        );
    }
    var p,
        g,
        e = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
        o =
            "onwheel" in document || 9 <= document.documentMode
                ? ["wheel"]
                : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
        v = Array.prototype.slice;
    if (h.event.fixHooks)
        for (var n = e.length; n; )
            h.event.fixHooks[e[--n]] = h.event.mouseHooks;
    var x = (h.event.special.mousewheel = {
        version: "3.1.12",
        setup: function () {
            if (this.addEventListener)
                for (var e = o.length; e; )
                    this.addEventListener(o[--e], t, !1);
            else this.onmousewheel = t;
            h.data(this, "mousewheel-line-height", x.getLineHeight(this)),
                h.data(this, "mousewheel-page-height", x.getPageHeight(this));
        },
        teardown: function () {
            if (this.removeEventListener)
                for (var e = o.length; e; )
                    this.removeEventListener(o[--e], t, !1);
            else this.onmousewheel = null;
            h.removeData(this, "mousewheel-line-height"),
                h.removeData(this, "mousewheel-page-height");
        },
        getLineHeight: function (e) {
            var t = h(e),
                o = t["offsetParent" in h.fn ? "offsetParent" : "parent"]();
            return (
                o.length || (o = h("body")),
                parseInt(o.css("fontSize"), 10) ||
                    parseInt(t.css("fontSize"), 10) ||
                    16
            );
        },
        getPageHeight: function (e) {
            return h(e).height();
        },
        settings: { adjustOldDeltas: !0, normalizeOffset: !0 },
    });
    h.fn.extend({
        mousewheel: function (e) {
            return e ? this.bind("mousewheel", e) : this.trigger("mousewheel");
        },
        unmousewheel: function (e) {
            return this.unbind("mousewheel", e);
        },
    });
}),
    (function (e) {
        "function" == typeof define && define.amd
            ? define(["jquery"], e)
            : "object" == typeof exports
            ? (module.exports = e)
            : e(jQuery);
    })(function (h) {
        function t(e) {
            var t,
                o,
                n = e || window.event,
                a = v.call(arguments, 1),
                i = 0,
                l = 0,
                r = 0,
                s = 0,
                c = 0,
                d = 0;
            if (
                (((e = h.event.fix(n)).type = "mousewheel"),
                "detail" in n && (r = -1 * n.detail),
                "wheelDelta" in n && (r = n.wheelDelta),
                "wheelDeltaY" in n && (r = n.wheelDeltaY),
                "wheelDeltaX" in n && (l = -1 * n.wheelDeltaX),
                "axis" in n &&
                    n.axis === n.HORIZONTAL_AXIS &&
                    ((l = -1 * r), (r = 0)),
                (i = 0 === r ? l : r),
                "deltaY" in n && (i = r = -1 * n.deltaY),
                "deltaX" in n && ((l = n.deltaX), 0 === r && (i = -1 * l)),
                0 !== r || 0 !== l)
            ) {
                1 === n.deltaMode
                    ? ((i *= t = h.data(this, "mousewheel-line-height")),
                      (r *= t),
                      (l *= t))
                    : 2 === n.deltaMode &&
                      ((i *= o = h.data(this, "mousewheel-page-height")),
                      (r *= o),
                      (l *= o));
                var u,
                    s = Math.max(Math.abs(r), Math.abs(l));
                return (
                    (g && !(s < g)) || (m(n, (g = s)) && (g /= 40)),
                    m(n, s) && ((i /= 40), (l /= 40), (r /= 40)),
                    (i = Math[1 <= i ? "floor" : "ceil"](i / g)),
                    (l = Math[1 <= l ? "floor" : "ceil"](l / g)),
                    (r = Math[1 <= r ? "floor" : "ceil"](r / g)),
                    x.settings.normalizeOffset &&
                        this.getBoundingClientRect &&
                        ((u = this.getBoundingClientRect()),
                        (c = e.clientX - u.left),
                        (d = e.clientY - u.top)),
                    (e.deltaX = l),
                    (e.deltaY = r),
                    (e.deltaFactor = g),
                    (e.offsetX = c),
                    (e.offsetY = d),
                    (e.deltaMode = 0),
                    a.unshift(e, i, l, r),
                    p && clearTimeout(p),
                    (p = setTimeout(f, 200)),
                    (h.event.dispatch || h.event.handle).apply(this, a)
                );
            }
        }
        function f() {
            g = null;
        }
        function m(e, t) {
            return (
                x.settings.adjustOldDeltas &&
                "mousewheel" === e.type &&
                t % 120 == 0
            );
        }
        var p,
            g,
            e = [
                "wheel",
                "mousewheel",
                "DOMMouseScroll",
                "MozMousePixelScroll",
            ],
            o =
                "onwheel" in document || 9 <= document.documentMode
                    ? ["wheel"]
                    : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
            v = Array.prototype.slice;
        if (h.event.fixHooks)
            for (var n = e.length; n; )
                h.event.fixHooks[e[--n]] = h.event.mouseHooks;
        var x = (h.event.special.mousewheel = {
            version: "3.1.12",
            setup: function () {
                if (this.addEventListener)
                    for (var e = o.length; e; )
                        this.addEventListener(o[--e], t, !1);
                else this.onmousewheel = t;
                h.data(this, "mousewheel-line-height", x.getLineHeight(this)),
                    h.data(
                        this,
                        "mousewheel-page-height",
                        x.getPageHeight(this)
                    );
            },
            teardown: function () {
                if (this.removeEventListener)
                    for (var e = o.length; e; )
                        this.removeEventListener(o[--e], t, !1);
                else this.onmousewheel = null;
                h.removeData(this, "mousewheel-line-height"),
                    h.removeData(this, "mousewheel-page-height");
            },
            getLineHeight: function (e) {
                var t = h(e),
                    o = t["offsetParent" in h.fn ? "offsetParent" : "parent"]();
                return (
                    o.length || (o = h("body")),
                    parseInt(o.css("fontSize"), 10) ||
                        parseInt(t.css("fontSize"), 10) ||
                        16
                );
            },
            getPageHeight: function (e) {
                return h(e).height();
            },
            settings: { adjustOldDeltas: !0, normalizeOffset: !0 },
        });
        h.fn.extend({
            mousewheel: function (e) {
                return e
                    ? this.bind("mousewheel", e)
                    : this.trigger("mousewheel");
            },
            unmousewheel: function (e) {
                return this.unbind("mousewheel", e);
            },
        });
    }),
    (function (e) {
        "function" == typeof define && define.amd
            ? define(["jquery"], e)
            : "undefined" != typeof module && module.exports
            ? (module.exports = e)
            : e(jQuery, window, document);
    })(function (z) {
        var H,
            f,
            P,
            n,
            a,
            r,
            i,
            g,
            X,
            S,
            m,
            c,
            s,
            d,
            u,
            h,
            p,
            v,
            x,
            w,
            _,
            b,
            M,
            C,
            y,
            B,
            T,
            k,
            Y,
            l,
            D,
            O,
            I,
            E,
            j,
            L,
            R,
            A,
            W,
            U,
            F,
            q,
            N,
            V,
            Q,
            Z,
            G,
            J,
            K,
            $,
            o,
            ee,
            te,
            oe,
            ne,
            ae,
            ie,
            e,
            t,
            le;
        (e = "function" == typeof define && define.amd),
            (t = "undefined" != typeof module && module.exports),
            (le = "https:" == document.location.protocol ? "https:" : "http:"),
            e ||
                (t
                    ? require("jquery-mousewheel")(z)
                    : z.event.special.mousewheel ||
                      z("head").append(
                          decodeURI(
                              "%3Cscript src=" +
                                  le +
                                  "//cdnjs.cloudflare.com/ajax/libs/jquery-mousewheel/3.1.13/jquery.mousewheel.min.js%3E%3C/script%3E"
                          )
                      )),
            (f = "mCustomScrollbar"),
            (P = "mCS"),
            (n = ".mCustomScrollbar"),
            (a = {
                setTop: 0,
                setLeft: 0,
                axis: "y",
                scrollbarPosition: "inside",
                scrollInertia: 950,
                autoDraggerLength: !0,
                alwaysShowScrollbar: 0,
                snapOffset: 0,
                mouseWheel: {
                    enable: !0,
                    scrollAmount: "auto",
                    axis: "y",
                    deltaFactor: "auto",
                    disableOver: [
                        "select",
                        "option",
                        "keygen",
                        "datalist",
                        "textarea",
                    ],
                },
                scrollButtons: { scrollType: "stepless", scrollAmount: "auto" },
                keyboard: {
                    enable: !0,
                    scrollType: "stepless",
                    scrollAmount: "auto",
                },
                contentTouchScroll: 25,
                documentTouchScroll: !0,
                advanced: {
                    autoScrollOnFocus:
                        "input,textarea,select,button,datalist,keygen,a[tabindex],area,object,[contenteditable='true']",
                    updateOnContentResize: !0,
                    updateOnImageLoad: "auto",
                    autoUpdateTimeout: 60,
                },
                theme: "light",
                callbacks: {
                    onTotalScrollOffset: 0,
                    onTotalScrollBackOffset: 0,
                    alwaysTriggerOffsets: !0,
                },
            }),
            (r = 0),
            (i = {}),
            (g = window.attachEvent && !window.addEventListener ? 1 : 0),
            (X = !1),
            (S = [
                "mCSB_dragger_onDrag",
                "mCSB_scrollTools_onDrag",
                "mCS_img_loaded",
                "mCS_disabled",
                "mCS_destroyed",
                "mCS_no_scrollbar",
                "mCS-autoHide",
                "mCS-dir-rtl",
                "mCS_no_scrollbar_y",
                "mCS_no_scrollbar_x",
                "mCS_y_hidden",
                "mCS_x_hidden",
                "mCSB_draggerContainer",
                "mCSB_buttonUp",
                "mCSB_buttonDown",
                "mCSB_buttonLeft",
                "mCSB_buttonRight",
            ]),
            (m = {
                init: function (l) {
                    var l = z.extend(!0, {}, a, l),
                        e = c.call(this);
                    if (l.live) {
                        var t = l.liveSelector || this.selector || n,
                            o = z(t);
                        if ("off" === l.live) return void d(t);
                        i[t] = setTimeout(function () {
                            o.mCustomScrollbar(l),
                                "once" === l.live && o.length && d(t);
                        }, 500);
                    } else d(t);
                    return (
                        (l.setWidth = l.set_width ? l.set_width : l.setWidth),
                        (l.setHeight = l.set_height
                            ? l.set_height
                            : l.setHeight),
                        (l.axis = l.horizontalScroll ? "x" : u(l.axis)),
                        (l.scrollInertia =
                            0 < l.scrollInertia && l.scrollInertia < 17
                                ? 17
                                : l.scrollInertia),
                        "object" != typeof l.mouseWheel &&
                            1 == l.mouseWheel &&
                            (l.mouseWheel = {
                                enable: !0,
                                scrollAmount: "auto",
                                axis: "y",
                                preventDefault: !1,
                                deltaFactor: "auto",
                                normalizeDelta: !1,
                                invert: !1,
                            }),
                        (l.mouseWheel.scrollAmount = l.mouseWheelPixels
                            ? l.mouseWheelPixels
                            : l.mouseWheel.scrollAmount),
                        (l.mouseWheel.normalizeDelta = l.advanced
                            .normalizeMouseWheelDelta
                            ? l.advanced.normalizeMouseWheelDelta
                            : l.mouseWheel.normalizeDelta),
                        (l.scrollButtons.scrollType = h(
                            l.scrollButtons.scrollType
                        )),
                        s(l),
                        z(e).each(function () {
                            var e,
                                t,
                                o,
                                n,
                                a,
                                i = z(this);
                            i.data(P) ||
                                (i.data(P, {
                                    idx: ++r,
                                    opt: l,
                                    scrollRatio: { y: null, x: null },
                                    overflowed: null,
                                    contentReset: { y: null, x: null },
                                    bindEvents: !1,
                                    tweenRunning: !1,
                                    sequential: {},
                                    langDir: i.css("direction"),
                                    cbOffsets: null,
                                    trigger: null,
                                    poll: {
                                        size: { o: 0, n: 0 },
                                        img: { o: 0, n: 0 },
                                        change: { o: 0, n: 0 },
                                    },
                                }),
                                (t = (e = i.data(P)).opt),
                                (o = i.data("mcs-axis")),
                                (n = i.data("mcs-scrollbar-position")),
                                (a = i.data("mcs-theme")),
                                o && (t.axis = o),
                                n && (t.scrollbarPosition = n),
                                a && ((t.theme = a), s(t)),
                                p.call(this),
                                e &&
                                    t.callbacks.onCreate &&
                                    "function" == typeof t.callbacks.onCreate &&
                                    t.callbacks.onCreate.call(this),
                                z(
                                    "#mCSB_" +
                                        e.idx +
                                        "_container img:not(." +
                                        S[2] +
                                        ")"
                                ).addClass(S[2]),
                                m.update.call(null, i));
                        })
                    );
                },
                update: function (e, r) {
                    var t = e || c.call(this);
                    return z(t).each(function () {
                        var e = z(this);
                        if (e.data(P)) {
                            var t = e.data(P),
                                o = t.opt,
                                n = z("#mCSB_" + t.idx + "_container"),
                                a = z("#mCSB_" + t.idx),
                                i = [
                                    z("#mCSB_" + t.idx + "_dragger_vertical"),
                                    z("#mCSB_" + t.idx + "_dragger_horizontal"),
                                ];
                            if (!n.length) return;
                            t.tweenRunning && G(e),
                                r &&
                                    t &&
                                    o.callbacks.onBeforeUpdate &&
                                    "function" ==
                                        typeof o.callbacks.onBeforeUpdate &&
                                    o.callbacks.onBeforeUpdate.call(this),
                                e.hasClass(S[3]) && e.removeClass(S[3]),
                                e.hasClass(S[4]) && e.removeClass(S[4]),
                                a.css("max-height", "none"),
                                a.height() !== e.height() &&
                                    a.css("max-height", e.height()),
                                x.call(this),
                                "y" === o.axis ||
                                    o.advanced.autoExpandHorizontalScroll ||
                                    n.css("width", v(n)),
                                (t.overflowed = C.call(this)),
                                k.call(this),
                                o.autoDraggerLength && _.call(this),
                                b.call(this),
                                B.call(this);
                            var l = [
                                Math.abs(n[0].offsetTop),
                                Math.abs(n[0].offsetLeft),
                            ];
                            "x" !== o.axis &&
                                (t.overflowed[0]
                                    ? i[0].height() > i[0].parent().height()
                                        ? y.call(this)
                                        : (J(e, l[0].toString(), {
                                              dir: "y",
                                              dur: 0,
                                              overwrite: "none",
                                          }),
                                          (t.contentReset.y = null))
                                    : (y.call(this),
                                      "y" === o.axis
                                          ? T.call(this)
                                          : "yx" === o.axis &&
                                            t.overflowed[1] &&
                                            J(e, l[1].toString(), {
                                                dir: "x",
                                                dur: 0,
                                                overwrite: "none",
                                            }))),
                                "y" !== o.axis &&
                                    (t.overflowed[1]
                                        ? i[1].width() > i[1].parent().width()
                                            ? y.call(this)
                                            : (J(e, l[1].toString(), {
                                                  dir: "x",
                                                  dur: 0,
                                                  overwrite: "none",
                                              }),
                                              (t.contentReset.x = null))
                                        : (y.call(this),
                                          "x" === o.axis
                                              ? T.call(this)
                                              : "yx" === o.axis &&
                                                t.overflowed[0] &&
                                                J(e, l[0].toString(), {
                                                    dir: "y",
                                                    dur: 0,
                                                    overwrite: "none",
                                                }))),
                                r &&
                                    t &&
                                    (2 === r &&
                                    o.callbacks.onImageLoad &&
                                    "function" == typeof o.callbacks.onImageLoad
                                        ? o.callbacks.onImageLoad.call(this)
                                        : 3 === r &&
                                          o.callbacks.onSelectorChange &&
                                          "function" ==
                                              typeof o.callbacks
                                                  .onSelectorChange
                                        ? o.callbacks.onSelectorChange.call(
                                              this
                                          )
                                        : o.callbacks.onUpdate &&
                                          "function" ==
                                              typeof o.callbacks.onUpdate &&
                                          o.callbacks.onUpdate.call(this)),
                                Z.call(this);
                        }
                    });
                },
                scrollTo: function (r, s) {
                    if (void 0 !== r && null != r) {
                        var e = c.call(this);
                        return z(e).each(function () {
                            var e,
                                t,
                                o,
                                n,
                                a,
                                i,
                                l = z(this);
                            l.data(P) &&
                                ((e = l.data(P)),
                                (o = {
                                    trigger: "external",
                                    scrollInertia: (t = e.opt).scrollInertia,
                                    scrollEasing: "mcsEaseInOut",
                                    moveDragger: !1,
                                    timeout: 60,
                                    callbacks: !0,
                                    onStart: !0,
                                    onUpdate: !0,
                                    onComplete: !0,
                                }),
                                (n = z.extend(!0, {}, o, s)),
                                (a = V.call(this, r)),
                                (i =
                                    0 < n.scrollInertia && n.scrollInertia < 17
                                        ? 17
                                        : n.scrollInertia),
                                (a[0] = Q.call(this, a[0], "y")),
                                (a[1] = Q.call(this, a[1], "x")),
                                n.moveDragger &&
                                    ((a[0] *= e.scrollRatio.y),
                                    (a[1] *= e.scrollRatio.x)),
                                (n.dur = ie() ? 0 : i),
                                setTimeout(function () {
                                    null !== a[0] &&
                                        void 0 !== a[0] &&
                                        "x" !== t.axis &&
                                        e.overflowed[0] &&
                                        ((n.dir = "y"),
                                        (n.overwrite = "all"),
                                        J(l, a[0].toString(), n)),
                                        null !== a[1] &&
                                            void 0 !== a[1] &&
                                            "y" !== t.axis &&
                                            e.overflowed[1] &&
                                            ((n.dir = "x"),
                                            (n.overwrite = "none"),
                                            J(l, a[1].toString(), n));
                                }, n.timeout));
                        });
                    }
                },
                stop: function () {
                    var e = c.call(this);
                    return z(e).each(function () {
                        var e = z(this);
                        e.data(P) && G(e);
                    });
                },
                disable: function (t) {
                    var e = c.call(this);
                    return z(e).each(function () {
                        var e = z(this);
                        e.data(P) &&
                            (e.data(P),
                            Z.call(this, "remove"),
                            T.call(this),
                            t && y.call(this),
                            k.call(this, !0),
                            e.addClass(S[3]));
                    });
                },
                destroy: function () {
                    var l = c.call(this);
                    return z(l).each(function () {
                        var e,
                            t,
                            o,
                            n,
                            a,
                            i = z(this);
                        i.data(P) &&
                            ((t = (e = i.data(P)).opt),
                            (o = z("#mCSB_" + e.idx)),
                            (n = z("#mCSB_" + e.idx + "_container")),
                            (a = z(".mCSB_" + e.idx + "_scrollbar")),
                            t.live && d(t.liveSelector || z(l).selector),
                            Z.call(this, "remove"),
                            T.call(this),
                            y.call(this),
                            i.removeData(P),
                            ee(this, "mcs"),
                            a.remove(),
                            n.find("img." + S[2]).removeClass(S[2]),
                            o.replaceWith(n.contents()),
                            i
                                .removeClass(
                                    f +
                                        " _" +
                                        P +
                                        "_" +
                                        e.idx +
                                        " " +
                                        S[6] +
                                        " " +
                                        S[7] +
                                        " " +
                                        S[5] +
                                        " " +
                                        S[3]
                                )
                                .addClass(S[4]));
                    });
                },
            }),
            (c = function () {
                return "object" != typeof z(this) || z(this).length < 1
                    ? n
                    : this;
            }),
            (s = function (e) {
                (e.autoDraggerLength =
                    !(
                        -1 <
                        z.inArray(e.theme, [
                            "rounded",
                            "rounded-dark",
                            "rounded-dots",
                            "rounded-dots-dark",
                        ])
                    ) && e.autoDraggerLength),
                    (e.autoExpandScrollbar =
                        !(
                            -1 <
                            z.inArray(e.theme, [
                                "rounded-dots",
                                "rounded-dots-dark",
                                "3d",
                                "3d-dark",
                                "3d-thick",
                                "3d-thick-dark",
                                "inset",
                                "inset-dark",
                                "inset-2",
                                "inset-2-dark",
                                "inset-3",
                                "inset-3-dark",
                            ])
                        ) && e.autoExpandScrollbar),
                    (e.scrollButtons.enable =
                        !(
                            -1 < z.inArray(e.theme, ["minimal", "minimal-dark"])
                        ) && e.scrollButtons.enable),
                    (e.autoHideScrollbar =
                        -1 < z.inArray(e.theme, ["minimal", "minimal-dark"]) ||
                        e.autoHideScrollbar),
                    (e.scrollbarPosition =
                        -1 < z.inArray(e.theme, ["minimal", "minimal-dark"])
                            ? "outside"
                            : e.scrollbarPosition);
            }),
            (d = function (e) {
                i[e] && (clearTimeout(i[e]), ee(i, e));
            }),
            (u = function (e) {
                return "yx" === e || "xy" === e || "auto" === e
                    ? "yx"
                    : "x" === e || "horizontal" === e
                    ? "x"
                    : "y";
            }),
            (h = function (e) {
                return "stepped" === e ||
                    "pixels" === e ||
                    "step" === e ||
                    "click" === e
                    ? "stepped"
                    : "stepless";
            }),
            (p = function () {
                var e = z(this),
                    t = e.data(P),
                    o = t.opt,
                    n = o.autoExpandScrollbar ? " " + S[1] + "_expand" : "",
                    a = [
                        "<div id='mCSB_" +
                            t.idx +
                            "_scrollbar_vertical' class='mCSB_scrollTools mCSB_" +
                            t.idx +
                            "_scrollbar mCS-" +
                            o.theme +
                            " mCSB_scrollTools_vertical" +
                            n +
                            "'><div class='" +
                            S[12] +
                            "'><div id='mCSB_" +
                            t.idx +
                            "_dragger_vertical' class='mCSB_dragger' style='position:absolute;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>",
                        "<div id='mCSB_" +
                            t.idx +
                            "_scrollbar_horizontal' class='mCSB_scrollTools mCSB_" +
                            t.idx +
                            "_scrollbar mCS-" +
                            o.theme +
                            " mCSB_scrollTools_horizontal" +
                            n +
                            "'><div class='" +
                            S[12] +
                            "'><div id='mCSB_" +
                            t.idx +
                            "_dragger_horizontal' class='mCSB_dragger' style='position:absolute;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>",
                    ],
                    i =
                        "yx" === o.axis
                            ? "mCSB_vertical_horizontal"
                            : "x" === o.axis
                            ? "mCSB_horizontal"
                            : "mCSB_vertical",
                    l =
                        "yx" === o.axis
                            ? a[0] + a[1]
                            : "x" === o.axis
                            ? a[1]
                            : a[0],
                    r =
                        "yx" === o.axis
                            ? "<div id='mCSB_" +
                              t.idx +
                              "_container_wrapper' class='mCSB_container_wrapper' />"
                            : "",
                    s = o.autoHideScrollbar ? " " + S[6] : "",
                    c = "x" !== o.axis && "rtl" === t.langDir ? " " + S[7] : "";
                o.setWidth && e.css("width", o.setWidth),
                    o.setHeight && e.css("height", o.setHeight),
                    (o.setLeft =
                        "y" !== o.axis && "rtl" === t.langDir
                            ? "989999px"
                            : o.setLeft),
                    e
                        .addClass(f + " _" + P + "_" + t.idx + s + c)
                        .wrapInner(
                            "<div id='mCSB_" +
                                t.idx +
                                "' class='mCustomScrollBox mCS-" +
                                o.theme +
                                " " +
                                i +
                                "'><div id='mCSB_" +
                                t.idx +
                                "_container' class='mCSB_container' style='position:relative; top:" +
                                o.setTop +
                                "; left:" +
                                o.setLeft +
                                ";' dir='" +
                                t.langDir +
                                "' /></div>"
                        );
                var d = z("#mCSB_" + t.idx),
                    u = z("#mCSB_" + t.idx + "_container");
                "y" === o.axis ||
                    o.advanced.autoExpandHorizontalScroll ||
                    u.css("width", v(u)),
                    "outside" === o.scrollbarPosition
                        ? ("static" === e.css("position") &&
                              e.css("position", "relative"),
                          e.css("overflow", "visible"),
                          d.addClass("mCSB_outside").after(l))
                        : (d.addClass("mCSB_inside").append(l), u.wrap(r)),
                    w.call(this);
                var h = [
                    z("#mCSB_" + t.idx + "_dragger_vertical"),
                    z("#mCSB_" + t.idx + "_dragger_horizontal"),
                ];
                h[0].css("min-height", h[0].height()),
                    h[1].css("min-width", h[1].width());
            }),
            (v = function (e) {
                var t = [
                        e[0].scrollWidth,
                        Math.max.apply(
                            Math,
                            e
                                .children()
                                .map(function () {
                                    return z(this).outerWidth(!0);
                                })
                                .get()
                        ),
                    ],
                    o = e.parent().width();
                return o < t[0] ? t[0] : o < t[1] ? t[1] : "100%";
            }),
            (x = function () {
                var e,
                    t = z(this).data(P),
                    o = t.opt,
                    n = z("#mCSB_" + t.idx + "_container");
                o.advanced.autoExpandHorizontalScroll &&
                    "y" !== o.axis &&
                    (n.css({
                        width: "auto",
                        "min-width": 0,
                        "overflow-x": "scroll",
                    }),
                    (e = Math.ceil(n[0].scrollWidth)),
                    3 === o.advanced.autoExpandHorizontalScroll ||
                    (2 !== o.advanced.autoExpandHorizontalScroll &&
                        e > n.parent().width())
                        ? n.css({
                              width: e,
                              "min-width": "100%",
                              "overflow-x": "inherit",
                          })
                        : n
                              .css({
                                  "overflow-x": "inherit",
                                  position: "absolute",
                              })
                              .wrap(
                                  "<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />"
                              )
                              .css({
                                  width:
                                      Math.ceil(
                                          n[0].getBoundingClientRect().right +
                                              0.4
                                      ) -
                                      Math.floor(
                                          n[0].getBoundingClientRect().left
                                      ),
                                  "min-width": "100%",
                                  position: "relative",
                              })
                              .unwrap());
            }),
            (w = function () {
                var e = z(this).data(P),
                    t = e.opt,
                    o = z(".mCSB_" + e.idx + "_scrollbar:first"),
                    n = ne(t.scrollButtons.tabindex)
                        ? "tabindex='" + t.scrollButtons.tabindex + "'"
                        : "",
                    a = [
                        "<a href='#' class='" + S[13] + "' " + n + " />",
                        "<a href='#' class='" + S[14] + "' " + n + " />",
                        "<a href='#' class='" + S[15] + "' " + n + " />",
                        "<a href='#' class='" + S[16] + "' " + n + " />",
                    ],
                    i = [
                        "x" === t.axis ? a[2] : a[0],
                        "x" === t.axis ? a[3] : a[1],
                        a[2],
                        a[3],
                    ];
                t.scrollButtons.enable &&
                    o
                        .prepend(i[0])
                        .append(i[1])
                        .next(".mCSB_scrollTools")
                        .prepend(i[2])
                        .append(i[3]);
            }),
            (_ = function () {
                var e = z(this).data(P),
                    t = z("#mCSB_" + e.idx),
                    o = z("#mCSB_" + e.idx + "_container"),
                    n = [
                        z("#mCSB_" + e.idx + "_dragger_vertical"),
                        z("#mCSB_" + e.idx + "_dragger_horizontal"),
                    ],
                    a = [
                        t.height() / o.outerHeight(!1),
                        t.width() / o.outerWidth(!1),
                    ],
                    i = [
                        parseInt(n[0].css("min-height")),
                        Math.round(a[0] * n[0].parent().height()),
                        parseInt(n[1].css("min-width")),
                        Math.round(a[1] * n[1].parent().width()),
                    ],
                    l = g && i[1] < i[0] ? i[0] : i[1],
                    r = g && i[3] < i[2] ? i[2] : i[3];
                n[0]
                    .css({
                        height: l,
                        "max-height": n[0].parent().height() - 10,
                    })
                    .find(".mCSB_dragger_bar")
                    .css({ "line-height": i[0] + "px" }),
                    n[1].css({
                        width: r,
                        "max-width": n[1].parent().width() - 10,
                    });
            }),
            (b = function () {
                var e = z(this).data(P),
                    t = z("#mCSB_" + e.idx),
                    o = z("#mCSB_" + e.idx + "_container"),
                    n = [
                        z("#mCSB_" + e.idx + "_dragger_vertical"),
                        z("#mCSB_" + e.idx + "_dragger_horizontal"),
                    ],
                    a = [
                        o.outerHeight(!1) - t.height(),
                        o.outerWidth(!1) - t.width(),
                    ],
                    i = [
                        a[0] / (n[0].parent().height() - n[0].height()),
                        a[1] / (n[1].parent().width() - n[1].width()),
                    ];
                e.scrollRatio = { y: i[0], x: i[1] };
            }),
            (M = function (e, t, o) {
                var n = o ? S[0] + "_expanded" : "",
                    a = e.closest(".mCSB_scrollTools");
                "active" === t
                    ? (e.toggleClass(S[0] + " " + n),
                      a.toggleClass(S[1]),
                      (e[0]._draggable = e[0]._draggable ? 0 : 1))
                    : e[0]._draggable ||
                      ("hide" === t
                          ? (e.removeClass(S[0]), a.removeClass(S[1]))
                          : (e.addClass(S[0]), a.addClass(S[1])));
            }),
            (C = function () {
                var e = z(this).data(P),
                    t = z("#mCSB_" + e.idx),
                    o = z("#mCSB_" + e.idx + "_container"),
                    n = null == e.overflowed ? o.height() : o.outerHeight(!1),
                    a = null == e.overflowed ? o.width() : o.outerWidth(!1),
                    i = o[0].scrollHeight,
                    l = o[0].scrollWidth;
                return (
                    n < i && (n = i),
                    a < l && (a = l),
                    [n > t.height(), a > t.width()]
                );
            }),
            (y = function () {
                var e,
                    t = z(this),
                    o = t.data(P),
                    n = o.opt,
                    a = z("#mCSB_" + o.idx),
                    i = z("#mCSB_" + o.idx + "_container"),
                    l = [
                        z("#mCSB_" + o.idx + "_dragger_vertical"),
                        z("#mCSB_" + o.idx + "_dragger_horizontal"),
                    ];
                G(t),
                    (("x" !== n.axis && !o.overflowed[0]) ||
                        ("y" === n.axis && o.overflowed[0])) &&
                        (l[0].add(i).css("top", 0), J(t, "_resetY")),
                    (("y" !== n.axis && !o.overflowed[1]) ||
                        ("x" === n.axis && o.overflowed[1])) &&
                        ((e = dx = 0),
                        "rtl" === o.langDir &&
                            ((e = a.width() - i.outerWidth(!1)),
                            (dx = Math.abs(e / o.scrollRatio.x))),
                        i.css("left", e),
                        l[1].css("left", dx),
                        J(t, "_resetX"));
            }),
            (B = function () {
                var t,
                    o = z(this),
                    e = o.data(P),
                    n = e.opt;
                e.bindEvents ||
                    (l.call(this),
                    n.contentTouchScroll && D.call(this),
                    O.call(this),
                    n.mouseWheel.enable &&
                        (function e() {
                            t = setTimeout(function () {
                                z.event.special.mousewheel
                                    ? (clearTimeout(t), I.call(o[0]))
                                    : e();
                            }, 100);
                        })(),
                    A.call(this),
                    U.call(this),
                    n.advanced.autoScrollOnFocus && W.call(this),
                    n.scrollButtons.enable && F.call(this),
                    n.keyboard.enable && q.call(this),
                    (e.bindEvents = !0));
            }),
            (T = function () {
                var e = z(this),
                    t = e.data(P),
                    o = t.opt,
                    n = "mCS_" + t.idx,
                    a = ".mCSB_" + t.idx + "_scrollbar",
                    i = z(
                        "#mCSB_" +
                            t.idx +
                            ",#mCSB_" +
                            t.idx +
                            "_container,#mCSB_" +
                            t.idx +
                            "_container_wrapper," +
                            a +
                            " ." +
                            S[12] +
                            ",#mCSB_" +
                            t.idx +
                            "_dragger_vertical,#mCSB_" +
                            t.idx +
                            "_dragger_horizontal," +
                            a +
                            ">a"
                    ),
                    l = z("#mCSB_" + t.idx + "_container");
                o.advanced.releaseDraggableSelectors &&
                    i.add(z(o.advanced.releaseDraggableSelectors)),
                    o.advanced.extraDraggableSelectors &&
                        i.add(z(o.advanced.extraDraggableSelectors)),
                    t.bindEvents &&
                        (z(document)
                            .add(z(!j() || top.document))
                            .unbind("." + n),
                        i.each(function () {
                            z(this).unbind("." + n);
                        }),
                        clearTimeout(e[0]._focusTimeout),
                        ee(e[0], "_focusTimeout"),
                        clearTimeout(t.sequential.step),
                        ee(t.sequential, "step"),
                        clearTimeout(l[0].onCompleteTimeout),
                        ee(l[0], "onCompleteTimeout"),
                        (t.bindEvents = !1));
            }),
            (k = function (e) {
                var t = z(this),
                    o = t.data(P),
                    n = o.opt,
                    a = z("#mCSB_" + o.idx + "_container_wrapper"),
                    i = a.length ? a : z("#mCSB_" + o.idx + "_container"),
                    l = [
                        z("#mCSB_" + o.idx + "_scrollbar_vertical"),
                        z("#mCSB_" + o.idx + "_scrollbar_horizontal"),
                    ],
                    r = [
                        l[0].find(".mCSB_dragger"),
                        l[1].find(".mCSB_dragger"),
                    ];
                "x" !== n.axis &&
                    (o.overflowed[0] && !e
                        ? (l[0]
                              .add(r[0])
                              .add(l[0].children("a"))
                              .css("display", "block"),
                          i.removeClass(S[8] + " " + S[10]))
                        : (n.alwaysShowScrollbar
                              ? (2 !== n.alwaysShowScrollbar &&
                                    r[0].css("display", "none"),
                                i.removeClass(S[10]))
                              : (l[0].css("display", "none"),
                                i.addClass(S[10])),
                          i.addClass(S[8]))),
                    "y" !== n.axis &&
                        (o.overflowed[1] && !e
                            ? (l[1]
                                  .add(r[1])
                                  .add(l[1].children("a"))
                                  .css("display", "block"),
                              i.removeClass(S[9] + " " + S[11]))
                            : (n.alwaysShowScrollbar
                                  ? (2 !== n.alwaysShowScrollbar &&
                                        r[1].css("display", "none"),
                                    i.removeClass(S[11]))
                                  : (l[1].css("display", "none"),
                                    i.addClass(S[11])),
                              i.addClass(S[9]))),
                    o.overflowed[0] || o.overflowed[1]
                        ? t.removeClass(S[5])
                        : t.addClass(S[5]);
            }),
            (Y = function (e) {
                var t = e.type,
                    o =
                        e.target.ownerDocument !== document &&
                        null !== frameElement
                            ? [
                                  z(frameElement).offset().top,
                                  z(frameElement).offset().left,
                              ]
                            : null,
                    n =
                        j() &&
                        e.target.ownerDocument !== top.document &&
                        null !== frameElement
                            ? [
                                  z(e.view.frameElement).offset().top,
                                  z(e.view.frameElement).offset().left,
                              ]
                            : [0, 0];
                switch (t) {
                    case "pointerdown":
                    case "MSPointerDown":
                    case "pointermove":
                    case "MSPointerMove":
                    case "pointerup":
                    case "MSPointerUp":
                        return o
                            ? [
                                  e.originalEvent.pageY - o[0] + n[0],
                                  e.originalEvent.pageX - o[1] + n[1],
                                  !1,
                              ]
                            : [
                                  e.originalEvent.pageY,
                                  e.originalEvent.pageX,
                                  !1,
                              ];
                    case "touchstart":
                    case "touchmove":
                    case "touchend":
                        var a =
                                e.originalEvent.touches[0] ||
                                e.originalEvent.changedTouches[0],
                            i =
                                e.originalEvent.touches.length ||
                                e.originalEvent.changedTouches.length;
                        return e.target.ownerDocument !== document
                            ? [a.screenY, a.screenX, 1 < i]
                            : [a.pageY, a.pageX, 1 < i];
                    default:
                        return o
                            ? [e.pageY - o[0] + n[0], e.pageX - o[1] + n[1], !1]
                            : [e.pageY, e.pageX, !1];
                }
            }),
            (l = function () {
                function a(e, t, o, n) {
                    var a, i;
                    (f[0].idleTimer = u.scrollInertia < 233 ? 250 : 0),
                        (i =
                            l.attr("id") === h[1]
                                ? ((a = "x"),
                                  (l[0].offsetLeft - t + n) * d.scrollRatio.x)
                                : ((a = "y"),
                                  (l[0].offsetTop - e + o) * d.scrollRatio.y)),
                        J(c, i.toString(), { dir: a, drag: !0 });
                }
                var l,
                    r,
                    s,
                    c = z(this),
                    d = c.data(P),
                    u = d.opt,
                    e = "mCS_" + d.idx,
                    h = [
                        "mCSB_" + d.idx + "_dragger_vertical",
                        "mCSB_" + d.idx + "_dragger_horizontal",
                    ],
                    f = z("#mCSB_" + d.idx + "_container"),
                    t = z("#" + h[0] + ",#" + h[1]),
                    o = u.advanced.releaseDraggableSelectors
                        ? t.add(z(u.advanced.releaseDraggableSelectors))
                        : t,
                    n = u.advanced.extraDraggableSelectors
                        ? z(!j() || top.document).add(
                              z(u.advanced.extraDraggableSelectors)
                          )
                        : z(!j() || top.document);
                t
                    .bind("contextmenu." + e, function (e) {
                        e.preventDefault();
                    })
                    .bind(
                        "mousedown." +
                            e +
                            " touchstart." +
                            e +
                            " pointerdown." +
                            e +
                            " MSPointerDown." +
                            e,
                        function (e) {
                            var t, o, n, a, i;
                            e.stopImmediatePropagation(),
                                e.preventDefault(),
                                te(e) &&
                                    ((X = !0),
                                    g &&
                                        (document.onselectstart = function () {
                                            return !1;
                                        }),
                                    L.call(f, !1),
                                    G(c),
                                    (t = (l = z(this)).offset()),
                                    (o = Y(e)[0] - t.top),
                                    (n = Y(e)[1] - t.left),
                                    (a = l.height() + t.top),
                                    (i = l.width() + t.left),
                                    o < a &&
                                        0 < o &&
                                        n < i &&
                                        0 < n &&
                                        ((r = o), (s = n)),
                                    M(l, "active", u.autoExpandScrollbar));
                        }
                    )
                    .bind("touchmove." + e, function (e) {
                        e.stopImmediatePropagation(), e.preventDefault();
                        var t = l.offset(),
                            o = Y(e)[0] - t.top,
                            n = Y(e)[1] - t.left;
                        a(r, s, o, n);
                    }),
                    z(document)
                        .add(n)
                        .bind(
                            "mousemove." +
                                e +
                                " pointermove." +
                                e +
                                " MSPointerMove." +
                                e,
                            function (e) {
                                if (l) {
                                    var t = l.offset(),
                                        o = Y(e)[0] - t.top,
                                        n = Y(e)[1] - t.left;
                                    if (r === o && s === n) return;
                                    a(r, s, o, n);
                                }
                            }
                        )
                        .add(o)
                        .bind(
                            "mouseup." +
                                e +
                                " touchend." +
                                e +
                                " pointerup." +
                                e +
                                " MSPointerUp." +
                                e,
                            function () {
                                l &&
                                    (M(l, "active", u.autoExpandScrollbar),
                                    (l = null)),
                                    (X = !1),
                                    g && (document.onselectstart = null),
                                    L.call(f, !0);
                            }
                        );
            }),
            (D = function () {
                function t(e) {
                    if (!oe(e) || X || Y(e)[2]) return (H = 0);
                    (y = C = 0), (h = H = 1), B.removeClass("mCS_touch_action");
                    var t = D.offset();
                    (c = Y(e)[0] - t.top),
                        (f = Y(e)[1] - t.left),
                        (A = [Y(e)[0], Y(e)[1]]);
                }
                function o(e) {
                    var t, o, n, a, i, l, r, s;
                    !oe(e) ||
                        X ||
                        Y(e)[2] ||
                        (M.documentTouchScroll || e.preventDefault(),
                        e.stopImmediatePropagation(),
                        (y && !C) || !h) ||
                        ((v = $()),
                        (t = k.offset()),
                        (o = Y(e)[0] - t.top),
                        (n = Y(e)[1] - t.left),
                        (a = "mcsLinearOut"),
                        I.push(o),
                        E.push(n),
                        (A[2] = Math.abs(Y(e)[0] - A[0])),
                        (A[3] = Math.abs(Y(e)[1] - A[1])),
                        T.overflowed[0] &&
                            ((i = O[0].parent().height() - O[0].height()),
                            (l =
                                0 < c - o &&
                                o - c > -(i * T.scrollRatio.y) &&
                                (2 * A[3] < A[2] || "yx" === M.axis))),
                        T.overflowed[1] &&
                            ((r = O[1].parent().width() - O[1].width()),
                            (s =
                                0 < f - n &&
                                n - f > -(r * T.scrollRatio.x) &&
                                (2 * A[2] < A[3] || "yx" === M.axis))),
                        l || s
                            ? (W || e.preventDefault(), (C = 1))
                            : ((y = 1), B.addClass("mCS_touch_action")),
                        W && e.preventDefault(),
                        (S =
                            "yx" === M.axis
                                ? [c - o, f - n]
                                : "x" === M.axis
                                ? [null, f - n]
                                : [c - o, null]),
                        (D[0].idleTimer = 250),
                        T.overflowed[0] && u(S[0], L, a, "y", "all", !0),
                        T.overflowed[1] && u(S[1], L, a, "x", R, !0));
                }
                function n(e) {
                    if (!oe(e) || X || Y(e)[2]) return (H = 0);
                    (H = 1), e.stopImmediatePropagation(), G(B), (g = $());
                    var t = k.offset();
                    (m = Y(e)[0] - t.top),
                        (p = Y(e)[1] - t.left),
                        (I = []),
                        (E = []);
                }
                function a(e) {
                    var t, o, n, a, i, l, r, s, c;
                    !oe(e) ||
                        X ||
                        Y(e)[2] ||
                        ((h = 0),
                        e.stopImmediatePropagation(),
                        (y = C = 0),
                        (x = $()),
                        (t = k.offset()),
                        (o = Y(e)[0] - t.top),
                        (n = Y(e)[1] - t.left),
                        30 < x - v ||
                            ((a = "mcsEaseOut"),
                            (l = (i = (_ = 1e3 / (x - g)) < 2.5)
                                ? [I[I.length - 2], E[E.length - 2]]
                                : [0, 0]),
                            (w = i ? [o - l[0], n - l[1]] : [o - m, n - p]),
                            (r = [Math.abs(w[0]), Math.abs(w[1])]),
                            (_ = i
                                ? [Math.abs(w[0] / 4), Math.abs(w[1] / 4)]
                                : [_, _]),
                            (s = [
                                Math.abs(D[0].offsetTop) -
                                    w[0] * d(r[0] / _[0], _[0]),
                                Math.abs(D[0].offsetLeft) -
                                    w[1] * d(r[1] / _[1], _[1]),
                            ]),
                            (S =
                                "yx" === M.axis
                                    ? [s[0], s[1]]
                                    : "x" === M.axis
                                    ? [null, s[1]]
                                    : [s[0], null]),
                            (b = [
                                4 * r[0] + M.scrollInertia,
                                4 * r[1] + M.scrollInertia,
                            ]),
                            (c = parseInt(M.contentTouchScroll) || 0),
                            (S[0] = c < r[0] ? S[0] : 0),
                            (S[1] = c < r[1] ? S[1] : 0),
                            T.overflowed[0] && u(S[0], b[0], a, "y", R, !1),
                            T.overflowed[1] && u(S[1], b[1], a, "x", R, !1)));
                }
                function d(e, t) {
                    var o = [1.5 * t, 2 * t, t / 1.5, t / 2];
                    return 90 < e
                        ? 4 < t
                            ? o[0]
                            : o[3]
                        : 60 < e
                        ? 3 < t
                            ? o[3]
                            : o[2]
                        : 30 < e
                        ? 8 < t
                            ? o[1]
                            : 6 < t
                            ? o[0]
                            : 4 < t
                            ? t
                            : o[2]
                        : 8 < t
                        ? t
                        : o[3];
                }
                function u(e, t, o, n, a, i) {
                    e &&
                        J(B, e.toString(), {
                            dur: t,
                            scrollEasing: o,
                            dir: n,
                            overwrite: a,
                            drag: i,
                        });
                }
                var h,
                    c,
                    f,
                    m,
                    p,
                    g,
                    v,
                    x,
                    w,
                    _,
                    S,
                    b,
                    C,
                    y,
                    B = z(this),
                    T = B.data(P),
                    M = T.opt,
                    e = "mCS_" + T.idx,
                    k = z("#mCSB_" + T.idx),
                    D = z("#mCSB_" + T.idx + "_container"),
                    O = [
                        z("#mCSB_" + T.idx + "_dragger_vertical"),
                        z("#mCSB_" + T.idx + "_dragger_horizontal"),
                    ],
                    I = [],
                    E = [],
                    L = 0,
                    R = "yx" === M.axis ? "none" : "all",
                    A = [],
                    i = D.find("iframe"),
                    l = [
                        "touchstart." +
                            e +
                            " pointerdown." +
                            e +
                            " MSPointerDown." +
                            e,
                        "touchmove." +
                            e +
                            " pointermove." +
                            e +
                            " MSPointerMove." +
                            e,
                        "touchend." +
                            e +
                            " pointerup." +
                            e +
                            " MSPointerUp." +
                            e,
                    ],
                    W =
                        void 0 !== document.body.style.touchAction &&
                        "" !== document.body.style.touchAction;
                D.bind(l[0], function (e) {
                    t(e);
                }).bind(l[1], function (e) {
                    o(e);
                }),
                    k
                        .bind(l[0], function (e) {
                            n(e);
                        })
                        .bind(l[2], function (e) {
                            a(e);
                        }),
                    i.length &&
                        i.each(function () {
                            z(this).bind("load", function () {
                                j(this) &&
                                    z(
                                        this.contentDocument ||
                                            this.contentWindow.document
                                    )
                                        .bind(l[0], function (e) {
                                            t(e), n(e);
                                        })
                                        .bind(l[1], function (e) {
                                            o(e);
                                        })
                                        .bind(l[2], function (e) {
                                            a(e);
                                        });
                            });
                        });
            }),
            (O = function () {
                function a(e, t, o) {
                    (s.type = o && i ? "stepped" : "stepless"),
                        (s.scrollAmount = 10),
                        N(n, e, t, "mcsLinearOut", o ? 60 : null);
                }
                var i,
                    n = z(this),
                    l = n.data(P),
                    r = l.opt,
                    s = l.sequential,
                    e = "mCS_" + l.idx,
                    c = z("#mCSB_" + l.idx + "_container"),
                    d = c.parent();
                c.bind("mousedown." + e, function () {
                    H || i || ((i = 1), (X = !0));
                })
                    .add(document)
                    .bind("mousemove." + e, function (e) {
                        var t, o, n;
                        !H &&
                            i &&
                            (window.getSelection
                                ? window.getSelection().toString()
                                : document.selection &&
                                  "Control" != document.selection.type &&
                                  document.selection.createRange().text) &&
                            ((t = c.offset()),
                            (o = Y(e)[0] - t.top + c[0].offsetTop),
                            (n = Y(e)[1] - t.left + c[0].offsetLeft),
                            0 < o && o < d.height() && 0 < n && n < d.width()
                                ? s.step && a("off", null, "stepped")
                                : ("x" !== r.axis &&
                                      l.overflowed[0] &&
                                      (o < 0
                                          ? a("on", 38)
                                          : o > d.height() && a("on", 40)),
                                  "y" !== r.axis &&
                                      l.overflowed[1] &&
                                      (n < 0
                                          ? a("on", 37)
                                          : n > d.width() && a("on", 39))));
                    })
                    .bind("mouseup." + e + " dragend." + e, function () {
                        H || (i && ((i = 0), a("off", null)), (X = !1));
                    });
            }),
            (I = function () {
                function o(e, t) {
                    var o, n, a, i, l, r, s, c, d;
                    G(u),
                        R(u, e.target) ||
                            ((o =
                                "auto" !== f.mouseWheel.deltaFactor
                                    ? parseInt(f.mouseWheel.deltaFactor)
                                    : (!(g && e.deltaFactor < 100) &&
                                          e.deltaFactor) ||
                                      100),
                            (n = f.scrollInertia),
                            (d =
                                "x" === f.axis || "x" === f.mouseWheel.axis
                                    ? ((a = "x"),
                                      (i = [
                                          Math.round(o * h.scrollRatio.x),
                                          parseInt(f.mouseWheel.scrollAmount),
                                      ]),
                                      (l =
                                          "auto" !== f.mouseWheel.scrollAmount
                                              ? i[1]
                                              : i[0] >= m.width()
                                              ? 0.9 * m.width()
                                              : i[0]),
                                      (r = Math.abs(
                                          z("#mCSB_" + h.idx + "_container")[0]
                                              .offsetLeft
                                      )),
                                      (s = p[1][0].offsetLeft),
                                      (c =
                                          p[1].parent().width() - p[1].width()),
                                      "y" === f.mouseWheel.axis
                                          ? e.deltaY || t
                                          : e.deltaX)
                                    : ((a = "y"),
                                      (i = [
                                          Math.round(o * h.scrollRatio.y),
                                          parseInt(f.mouseWheel.scrollAmount),
                                      ]),
                                      (l =
                                          "auto" !== f.mouseWheel.scrollAmount
                                              ? i[1]
                                              : i[0] >= m.height()
                                              ? 0.9 * m.height()
                                              : i[0]),
                                      (r = Math.abs(
                                          z("#mCSB_" + h.idx + "_container")[0]
                                              .offsetTop
                                      )),
                                      (s = p[0][0].offsetTop),
                                      (c =
                                          p[0].parent().height() -
                                          p[0].height()),
                                      e.deltaY || t)),
                            ("y" === a && !h.overflowed[0]) ||
                                ("x" === a && !h.overflowed[1]) ||
                                ((f.mouseWheel.invert ||
                                    e.webkitDirectionInvertedFromDevice) &&
                                    (d = -d),
                                f.mouseWheel.normalizeDelta &&
                                    (d = d < 0 ? -1 : 1),
                                ((0 < d && 0 !== s) ||
                                    (d < 0 && s !== c) ||
                                    f.mouseWheel.preventDefault) &&
                                    (e.stopImmediatePropagation(),
                                    e.preventDefault()),
                                e.deltaFactor < 5 &&
                                    !f.mouseWheel.normalizeDelta &&
                                    ((l = e.deltaFactor), (n = 17)),
                                J(u, (r - d * l).toString(), {
                                    dir: a,
                                    dur: n,
                                })));
                }
                var u, h, f, e, m, p, t;
                z(this).data(P) &&
                    ((u = z(this)),
                    (h = u.data(P)),
                    (f = h.opt),
                    (e = "mCS_" + h.idx),
                    (m = z("#mCSB_" + h.idx)),
                    (p = [
                        z("#mCSB_" + h.idx + "_dragger_vertical"),
                        z("#mCSB_" + h.idx + "_dragger_horizontal"),
                    ]),
                    (t = z("#mCSB_" + h.idx + "_container").find("iframe"))
                        .length &&
                        t.each(function () {
                            z(this).bind("load", function () {
                                j(this) &&
                                    z(
                                        this.contentDocument ||
                                            this.contentWindow.document
                                    ).bind("mousewheel." + e, function (e, t) {
                                        o(e, t);
                                    });
                            });
                        }),
                    m.bind("mousewheel." + e, function (e, t) {
                        o(e, t);
                    }));
            }),
            (E = new Object()),
            (j = function (e) {
                var t = !1,
                    o = !1,
                    n = null;
                if (
                    (void 0 === e
                        ? (o = "#empty")
                        : void 0 !== z(e).attr("id") && (o = z(e).attr("id")),
                    !1 !== o && void 0 !== E[o])
                )
                    return E[o];
                if (e) {
                    try {
                        n = (e.contentDocument || e.contentWindow.document).body
                            .innerHTML;
                    } catch (e) {}
                    t = null !== n;
                } else {
                    try {
                        n = top.document.body.innerHTML;
                    } catch (e) {}
                    t = null !== n;
                }
                return !1 !== o && (E[o] = t), t;
            }),
            (L = function (e) {
                var t,
                    o = this.find("iframe");
                o.length &&
                    ((t = e ? "auto" : "none"), o.css("pointer-events", t));
            }),
            (R = function (e, t) {
                var o = t.nodeName.toLowerCase(),
                    n = e.data(P).opt.mouseWheel.disableOver;
                return (
                    -1 < z.inArray(o, n) &&
                    !(
                        -1 < z.inArray(o, ["select", "textarea"]) &&
                        !z(t).is(":focus")
                    )
                );
            }),
            (A = function () {
                var l,
                    r = z(this),
                    s = r.data(P),
                    e = "mCS_" + s.idx,
                    c = z("#mCSB_" + s.idx + "_container"),
                    d = c.parent();
                z(".mCSB_" + s.idx + "_scrollbar ." + S[12])
                    .bind(
                        "mousedown." +
                            e +
                            " touchstart." +
                            e +
                            " pointerdown." +
                            e +
                            " MSPointerDown." +
                            e,
                        function (e) {
                            (X = !0),
                                z(e.target).hasClass("mCSB_dragger") || (l = 1);
                        }
                    )
                    .bind(
                        "touchend." +
                            e +
                            " pointerup." +
                            e +
                            " MSPointerUp." +
                            e,
                        function () {
                            X = !1;
                        }
                    )
                    .bind("click." + e, function (e) {
                        if (
                            l &&
                            ((l = 0),
                            z(e.target).hasClass(S[12]) ||
                                z(e.target).hasClass("mCSB_draggerRail"))
                        ) {
                            G(r);
                            var t = z(this),
                                o = t.find(".mCSB_dragger");
                            if (
                                0 <
                                t.parent(".mCSB_scrollTools_horizontal").length
                            ) {
                                if (!s.overflowed[1]) return;
                                var n = "x",
                                    a = e.pageX > o.offset().left ? -1 : 1,
                                    i =
                                        Math.abs(c[0].offsetLeft) -
                                        a * (0.9 * d.width());
                            } else {
                                if (!s.overflowed[0]) return;
                                (n = "y"),
                                    (a = e.pageY > o.offset().top ? -1 : 1),
                                    (i =
                                        Math.abs(c[0].offsetTop) -
                                        a * (0.9 * d.height()));
                            }
                            J(r, i.toString(), {
                                dir: n,
                                scrollEasing: "mcsEaseInOut",
                            });
                        }
                    });
            }),
            (W = function () {
                var i = z(this),
                    e = i.data(P),
                    l = e.opt,
                    t = "mCS_" + e.idx,
                    r = z("#mCSB_" + e.idx + "_container"),
                    s = r.parent();
                r.bind("focusin." + t, function () {
                    var a = z(document.activeElement),
                        e = r.find(".mCustomScrollBox").length;
                    a.is(l.advanced.autoScrollOnFocus) &&
                        (G(i),
                        clearTimeout(i[0]._focusTimeout),
                        (i[0]._focusTimer = e ? 17 * e : 0),
                        (i[0]._focusTimeout = setTimeout(function () {
                            var e = [ae(a)[0], ae(a)[1]],
                                t = [r[0].offsetTop, r[0].offsetLeft],
                                o = [
                                    0 <= t[0] + e[0] &&
                                        t[0] + e[0] <
                                            s.height() - a.outerHeight(!1),
                                    0 <= t[1] + e[1] &&
                                        t[0] + e[1] <
                                            s.width() - a.outerWidth(!1),
                                ],
                                n =
                                    "yx" !== l.axis || o[0] || o[1]
                                        ? "all"
                                        : "none";
                            "x" === l.axis ||
                                o[0] ||
                                J(i, e[0].toString(), {
                                    dir: "y",
                                    scrollEasing: "mcsEaseInOut",
                                    overwrite: n,
                                    dur: 0,
                                }),
                                "y" === l.axis ||
                                    o[1] ||
                                    J(i, e[1].toString(), {
                                        dir: "x",
                                        scrollEasing: "mcsEaseInOut",
                                        overwrite: n,
                                        dur: 0,
                                    });
                        }, i[0]._focusTimer)));
                });
            }),
            (U = function () {
                var e = z(this).data(P),
                    t = "mCS_" + e.idx,
                    o = z("#mCSB_" + e.idx + "_container").parent();
                o.bind("scroll." + t, function () {
                    (0 === o.scrollTop() && 0 === o.scrollLeft()) ||
                        z(".mCSB_" + e.idx + "_scrollbar").css(
                            "visibility",
                            "hidden"
                        );
                });
            }),
            (F = function () {
                var n = z(this),
                    a = n.data(P),
                    i = a.opt,
                    l = a.sequential,
                    e = "mCS_" + a.idx,
                    t = ".mCSB_" + a.idx + "_scrollbar";
                z(t + ">a")
                    .bind("contextmenu." + e, function (e) {
                        e.preventDefault();
                    })
                    .bind(
                        "mousedown." +
                            e +
                            " touchstart." +
                            e +
                            " pointerdown." +
                            e +
                            " MSPointerDown." +
                            e +
                            " mouseup." +
                            e +
                            " touchend." +
                            e +
                            " pointerup." +
                            e +
                            " MSPointerUp." +
                            e +
                            " mouseout." +
                            e +
                            " pointerout." +
                            e +
                            " MSPointerOut." +
                            e +
                            " click." +
                            e,
                        function (e) {
                            function t(e, t) {
                                (l.scrollAmount = i.scrollButtons.scrollAmount),
                                    N(n, e, t);
                            }
                            if ((e.preventDefault(), te(e))) {
                                var o = z(this).attr("class");
                                switch (
                                    ((l.type = i.scrollButtons.scrollType),
                                    e.type)
                                ) {
                                    case "mousedown":
                                    case "touchstart":
                                    case "pointerdown":
                                    case "MSPointerDown":
                                        if ("stepped" === l.type) return;
                                        (X = !0),
                                            (a.tweenRunning = !1),
                                            t("on", o);
                                        break;
                                    case "mouseup":
                                    case "touchend":
                                    case "pointerup":
                                    case "MSPointerUp":
                                    case "mouseout":
                                    case "pointerout":
                                    case "MSPointerOut":
                                        if ("stepped" === l.type) return;
                                        (X = !1), l.dir && t("off", o);
                                        break;
                                    case "click":
                                        if (
                                            "stepped" !== l.type ||
                                            a.tweenRunning
                                        )
                                            return;
                                        t("on", o);
                                }
                            }
                        }
                    );
            }),
            (q = function () {
                function t(e) {
                    function t(e, t) {
                        (d.type = c.keyboard.scrollType),
                            (d.scrollAmount = c.keyboard.scrollAmount),
                            ("stepped" === d.type && s.tweenRunning) ||
                                N(r, e, t);
                    }
                    switch (e.type) {
                        case "blur":
                            s.tweenRunning && d.dir && t("off", null);
                            break;
                        case "keydown":
                        case "keyup":
                            var o,
                                n,
                                a,
                                i = e.keyCode ? e.keyCode : e.which,
                                l = "on";
                            if (
                                ("x" !== c.axis && (38 === i || 40 === i)) ||
                                ("y" !== c.axis && (37 === i || 39 === i))
                            ) {
                                if (
                                    ((38 === i || 40 === i) &&
                                        !s.overflowed[0]) ||
                                    ((37 === i || 39 === i) && !s.overflowed[1])
                                )
                                    return;
                                "keyup" === e.type && (l = "off"),
                                    z(document.activeElement).is(f) ||
                                        (e.preventDefault(),
                                        e.stopImmediatePropagation(),
                                        t(l, i));
                            } else {
                                33 === i || 34 === i
                                    ? ((s.overflowed[0] || s.overflowed[1]) &&
                                          (e.preventDefault(),
                                          e.stopImmediatePropagation()),
                                      "keyup" === e.type &&
                                          (G(r),
                                          (o = 34 === i ? -1 : 1),
                                          (a =
                                              "x" === c.axis ||
                                              ("yx" === c.axis &&
                                                  s.overflowed[1] &&
                                                  !s.overflowed[0])
                                                  ? ((n = "x"),
                                                    Math.abs(u[0].offsetLeft) -
                                                        o * (0.9 * h.width()))
                                                  : ((n = "y"),
                                                    Math.abs(u[0].offsetTop) -
                                                        o *
                                                            (0.9 *
                                                                h.height()))),
                                          J(r, a.toString(), {
                                              dir: n,
                                              scrollEasing: "mcsEaseInOut",
                                          })))
                                    : (35 !== i && 36 !== i) ||
                                      z(document.activeElement).is(f) ||
                                      ((s.overflowed[0] || s.overflowed[1]) &&
                                          (e.preventDefault(),
                                          e.stopImmediatePropagation()),
                                      "keyup" !== e.type) ||
                                      ((a =
                                          "x" === c.axis ||
                                          ("yx" === c.axis &&
                                              s.overflowed[1] &&
                                              !s.overflowed[0])
                                              ? ((n = "x"),
                                                35 === i
                                                    ? Math.abs(
                                                          h.width() -
                                                              u.outerWidth(!1)
                                                      )
                                                    : 0)
                                              : ((n = "y"),
                                                35 === i
                                                    ? Math.abs(
                                                          h.height() -
                                                              u.outerHeight(!1)
                                                      )
                                                    : 0)),
                                      J(r, a.toString(), {
                                          dir: n,
                                          scrollEasing: "mcsEaseInOut",
                                      }));
                            }
                    }
                }
                var r = z(this),
                    s = r.data(P),
                    c = s.opt,
                    d = s.sequential,
                    e = "mCS_" + s.idx,
                    o = z("#mCSB_" + s.idx),
                    u = z("#mCSB_" + s.idx + "_container"),
                    h = u.parent(),
                    f =
                        "input,textarea,select,datalist,keygen,[contenteditable='true']",
                    n = u.find("iframe"),
                    a = ["blur." + e + " keydown." + e + " keyup." + e];
                n.length &&
                    n.each(function () {
                        z(this).bind("load", function () {
                            j(this) &&
                                z(
                                    this.contentDocument ||
                                        this.contentWindow.document
                                ).bind(a[0], function (e) {
                                    t(e);
                                });
                        });
                    }),
                    o.attr("tabindex", "0").bind(a[0], function (e) {
                        t(e);
                    });
            }),
            (N = function (u, e, t, h, f) {
                function m(e) {
                    g.snapAmount &&
                        (v.scrollAmount =
                            g.snapAmount instanceof Array
                                ? "x" === v.dir[0]
                                    ? g.snapAmount[1]
                                    : g.snapAmount[0]
                                : g.snapAmount);
                    var t = "stepped" !== v.type,
                        o = f || (e ? (t ? w / 1.5 : _) : 1e3 / 60),
                        n = e ? (t ? 7.5 : 40) : 2.5,
                        a = [
                            Math.abs(x[0].offsetTop),
                            Math.abs(x[0].offsetLeft),
                        ],
                        i = [
                            10 < p.scrollRatio.y ? 10 : p.scrollRatio.y,
                            10 < p.scrollRatio.x ? 10 : p.scrollRatio.x,
                        ],
                        l =
                            "x" === v.dir[0]
                                ? a[1] + v.dir[1] * (i[1] * n)
                                : a[0] + v.dir[1] * (i[0] * n),
                        r =
                            "x" === v.dir[0]
                                ? a[1] + v.dir[1] * parseInt(v.scrollAmount)
                                : a[0] + v.dir[1] * parseInt(v.scrollAmount),
                        s = "auto" !== v.scrollAmount ? r : l,
                        c =
                            h ||
                            (e
                                ? t
                                    ? "mcsLinearOut"
                                    : "mcsEaseInOut"
                                : "mcsLinear"),
                        d = !!e;
                    return (
                        e && o < 17 && (s = "x" === v.dir[0] ? a[1] : a[0]),
                        J(u, s.toString(), {
                            dir: v.dir[0],
                            scrollEasing: c,
                            dur: o,
                            onComplete: d,
                        }),
                        e
                            ? void (v.dir = !1)
                            : (clearTimeout(v.step),
                              void (v.step = setTimeout(function () {
                                  m();
                              }, o)))
                    );
                }
                var p = u.data(P),
                    g = p.opt,
                    v = p.sequential,
                    x = z("#mCSB_" + p.idx + "_container"),
                    o = "stepped" === v.type,
                    w = g.scrollInertia < 26 ? 26 : g.scrollInertia,
                    _ = g.scrollInertia < 1 ? 17 : g.scrollInertia;
                switch (e) {
                    case "on":
                        if (
                            ((v.dir = [
                                t === S[16] ||
                                t === S[15] ||
                                39 === t ||
                                37 === t
                                    ? "x"
                                    : "y",
                                t === S[13] ||
                                t === S[15] ||
                                38 === t ||
                                37 === t
                                    ? -1
                                    : 1,
                            ]),
                            G(u),
                            ne(t) && "stepped" === v.type)
                        )
                            return;
                        m(o);
                        break;
                    case "off":
                        clearTimeout(v.step),
                            ee(v, "step"),
                            G(u),
                            (o || (p.tweenRunning && v.dir)) && m(!0);
                }
            }),
            (V = function (e) {
                var t = z(this).data(P).opt,
                    o = [];
                return (
                    "function" == typeof e && (e = e()),
                    e instanceof Array
                        ? (o =
                              1 < e.length
                                  ? [e[0], e[1]]
                                  : "x" === t.axis
                                  ? [null, e[0]]
                                  : [e[0], null])
                        : ((o[0] = e.y
                              ? e.y
                              : e.x || "x" === t.axis
                              ? null
                              : e),
                          (o[1] = e.x
                              ? e.x
                              : e.y || "y" === t.axis
                              ? null
                              : e)),
                    "function" == typeof o[0] && (o[0] = o[0]()),
                    "function" == typeof o[1] && (o[1] = o[1]()),
                    o
                );
            }),
            (Q = function (e, t) {
                if (null != e && void 0 !== e) {
                    var o = z(this),
                        n = o.data(P),
                        a = n.opt,
                        i = z("#mCSB_" + n.idx + "_container"),
                        l = i.parent(),
                        r = typeof e,
                        s =
                            "x" === (t = t || ("x" === a.axis ? "x" : "y"))
                                ? i.outerWidth(!1) - l.width()
                                : i.outerHeight(!1) - l.height(),
                        c = "x" === t ? i[0].offsetLeft : i[0].offsetTop,
                        d = "x" === t ? "left" : "top";
                    switch (r) {
                        case "function":
                            return e();
                        case "object":
                            if (!(h = e.jquery ? e : z(e)).length) return;
                            return "x" === t ? ae(h)[1] : ae(h)[0];
                        case "string":
                        case "number":
                            if (ne(e)) return Math.abs(e);
                            if (-1 !== e.indexOf("%"))
                                return Math.abs((s * parseInt(e)) / 100);
                            if (-1 !== e.indexOf("-="))
                                return Math.abs(c - parseInt(e.split("-=")[1]));
                            if (-1 !== e.indexOf("+=")) {
                                var u = c + parseInt(e.split("+=")[1]);
                                return 0 <= u ? 0 : Math.abs(u);
                            }
                            if (-1 !== e.indexOf("px") && ne(e.split("px")[0]))
                                return Math.abs(e.split("px")[0]);
                            if ("top" === e || "left" === e) return 0;
                            if ("bottom" === e)
                                return Math.abs(l.height() - i.outerHeight(!1));
                            if ("right" === e)
                                return Math.abs(l.width() - i.outerWidth(!1));
                            if ("first" !== e && "last" !== e)
                                return z(e).length
                                    ? "x" === t
                                        ? ae(z(e))[1]
                                        : ae(z(e))[0]
                                    : (i.css(d, e),
                                      void m.update.call(null, o[0]));
                            var h = i.find(":" + e);
                            return "x" === t ? ae(h)[1] : ae(h)[0];
                    }
                }
            }),
            (Z = function (e) {
                function o(e) {
                    clearTimeout(i[0].autoUpdate), m.update.call(null, t[0], e);
                }
                var t = z(this),
                    n = t.data(P),
                    a = n.opt,
                    i = z("#mCSB_" + n.idx + "_container");
                return e
                    ? (clearTimeout(i[0].autoUpdate),
                      void ee(i[0], "autoUpdate"))
                    : void (function e() {
                          return (
                              clearTimeout(i[0].autoUpdate),
                              0 === t.parents("html").length
                                  ? void (t = null)
                                  : void (i[0].autoUpdate = setTimeout(
                                        function () {
                                            return a.advanced
                                                .updateOnSelectorChange &&
                                                ((n.poll.change.n =
                                                    (function () {
                                                        !0 ===
                                                            a.advanced
                                                                .updateOnSelectorChange &&
                                                            (a.advanced.updateOnSelectorChange =
                                                                "*");
                                                        var e = 0,
                                                            t = i.find(
                                                                a.advanced
                                                                    .updateOnSelectorChange
                                                            );
                                                        return (
                                                            a.advanced
                                                                .updateOnSelectorChange &&
                                                                0 < t.length &&
                                                                t.each(
                                                                    function () {
                                                                        e +=
                                                                            this
                                                                                .offsetHeight +
                                                                            this
                                                                                .offsetWidth;
                                                                    }
                                                                ),
                                                            e
                                                        );
                                                    })()),
                                                n.poll.change.n !==
                                                    n.poll.change.o)
                                                ? ((n.poll.change.o =
                                                      n.poll.change.n),
                                                  void o(3))
                                                : a.advanced
                                                      .updateOnContentResize &&
                                                  ((n.poll.size.n =
                                                      t[0].scrollHeight +
                                                      t[0].scrollWidth +
                                                      i[0].offsetHeight +
                                                      t[0].offsetHeight +
                                                      t[0].offsetWidth),
                                                  n.poll.size.n !==
                                                      n.poll.size.o)
                                                ? ((n.poll.size.o =
                                                      n.poll.size.n),
                                                  void o(1))
                                                : !a.advanced
                                                      .updateOnImageLoad ||
                                                  ("auto" ===
                                                      a.advanced
                                                          .updateOnImageLoad &&
                                                      "y" === a.axis) ||
                                                  ((n.poll.img.n =
                                                      i.find("img").length),
                                                  n.poll.img.n === n.poll.img.o)
                                                ? void (
                                                      (a.advanced
                                                          .updateOnSelectorChange ||
                                                          a.advanced
                                                              .updateOnContentResize ||
                                                          a.advanced
                                                              .updateOnImageLoad) &&
                                                      e()
                                                  )
                                                : ((n.poll.img.o =
                                                      n.poll.img.n),
                                                  void i
                                                      .find("img")
                                                      .each(function () {
                                                          !(function (e) {
                                                              if (
                                                                  z(e).hasClass(
                                                                      S[2]
                                                                  )
                                                              )
                                                                  return o();
                                                              var t =
                                                                  new Image();
                                                              (t.onload =
                                                                  (function (
                                                                      e,
                                                                      t
                                                                  ) {
                                                                      return function () {
                                                                          return t.apply(
                                                                              e,
                                                                              arguments
                                                                          );
                                                                      };
                                                                  })(
                                                                      t,
                                                                      function () {
                                                                          (this.onload =
                                                                              null),
                                                                              z(
                                                                                  e
                                                                              ).addClass(
                                                                                  S[2]
                                                                              ),
                                                                              o(
                                                                                  2
                                                                              );
                                                                      }
                                                                  )),
                                                                  (t.src =
                                                                      e.src);
                                                          })(this);
                                                      }));
                                        },
                                        a.advanced.autoUpdateTimeout
                                    ))
                          );
                      })();
            }),
            (G = function (e) {
                var t = e.data(P);
                z(
                    "#mCSB_" +
                        t.idx +
                        "_container,#mCSB_" +
                        t.idx +
                        "_container_wrapper,#mCSB_" +
                        t.idx +
                        "_dragger_vertical,#mCSB_" +
                        t.idx +
                        "_dragger_horizontal"
                ).each(function () {
                    o.call(this);
                });
            }),
            (J = function (a, e, i) {
                function t(e) {
                    return (
                        c &&
                        d.callbacks[e] &&
                        "function" == typeof d.callbacks[e]
                    );
                }
                function o() {
                    var e = [m[0].offsetTop, m[0].offsetLeft],
                        t = [x[0].offsetTop, x[0].offsetLeft],
                        o = [m.outerHeight(!1), m.outerWidth(!1)],
                        n = [f.height(), f.width()];
                    a[0].mcs = {
                        content: m,
                        top: e[0],
                        left: e[1],
                        draggerTop: t[0],
                        draggerLeft: t[1],
                        topPct: Math.round(
                            (100 * Math.abs(e[0])) / (Math.abs(o[0]) - n[0])
                        ),
                        leftPct: Math.round(
                            (100 * Math.abs(e[1])) / (Math.abs(o[1]) - n[1])
                        ),
                        direction: i.dir,
                    };
                }
                var n,
                    l,
                    r,
                    s,
                    c = a.data(P),
                    d = c.opt,
                    u = {
                        trigger: "internal",
                        dir: "y",
                        scrollEasing: "mcsEaseOut",
                        drag: !1,
                        dur: d.scrollInertia,
                        overwrite: "all",
                        callbacks: !0,
                        onStart: !0,
                        onUpdate: !0,
                        onComplete: !0,
                    },
                    h = [(i = z.extend(u, i)).dur, i.drag ? 0 : i.dur],
                    f = z("#mCSB_" + c.idx),
                    m = z("#mCSB_" + c.idx + "_container"),
                    p = m.parent(),
                    g = d.callbacks.onTotalScrollOffset
                        ? V.call(a, d.callbacks.onTotalScrollOffset)
                        : [0, 0],
                    v = d.callbacks.onTotalScrollBackOffset
                        ? V.call(a, d.callbacks.onTotalScrollBackOffset)
                        : [0, 0];
                if (
                    ((c.trigger = i.trigger),
                    (0 === p.scrollTop() && 0 === p.scrollLeft()) ||
                        (z(".mCSB_" + c.idx + "_scrollbar").css(
                            "visibility",
                            "visible"
                        ),
                        p.scrollTop(0).scrollLeft(0)),
                    "_resetY" !== e ||
                        c.contentReset.y ||
                        (t("onOverflowYNone") &&
                            d.callbacks.onOverflowYNone.call(a[0]),
                        (c.contentReset.y = 1)),
                    "_resetX" !== e ||
                        c.contentReset.x ||
                        (t("onOverflowXNone") &&
                            d.callbacks.onOverflowXNone.call(a[0]),
                        (c.contentReset.x = 1)),
                    "_resetY" !== e && "_resetX" !== e)
                ) {
                    switch (
                        ((!c.contentReset.y && a[0].mcs) ||
                            !c.overflowed[0] ||
                            (t("onOverflowY") &&
                                d.callbacks.onOverflowY.call(a[0]),
                            (c.contentReset.x = null)),
                        (!c.contentReset.x && a[0].mcs) ||
                            !c.overflowed[1] ||
                            (t("onOverflowX") &&
                                d.callbacks.onOverflowX.call(a[0]),
                            (c.contentReset.x = null)),
                        d.snapAmount &&
                            ((n =
                                d.snapAmount instanceof Array
                                    ? "x" === i.dir
                                        ? d.snapAmount[1]
                                        : d.snapAmount[0]
                                    : d.snapAmount),
                            (l = e),
                            (r = n),
                            (s = d.snapOffset),
                            (e = Math.round(l / r) * r - s)),
                        i.dir)
                    ) {
                        case "x":
                            var x = z("#mCSB_" + c.idx + "_dragger_horizontal"),
                                w = "left",
                                _ = m[0].offsetLeft,
                                S = [
                                    f.width() - m.outerWidth(!1),
                                    x.parent().width() - x.width(),
                                ],
                                b = [e, 0 === e ? 0 : e / c.scrollRatio.x],
                                C = g[1],
                                y = v[1],
                                B = 0 < C ? C / c.scrollRatio.x : 0,
                                T = 0 < y ? y / c.scrollRatio.x : 0;
                            break;
                        case "y":
                            (x = z("#mCSB_" + c.idx + "_dragger_vertical")),
                                (w = "top"),
                                (_ = m[0].offsetTop),
                                (S = [
                                    f.height() - m.outerHeight(!1),
                                    x.parent().height() - x.height(),
                                ]),
                                (b = [e, 0 === e ? 0 : e / c.scrollRatio.y]),
                                (C = g[0]),
                                (y = v[0]),
                                (B = 0 < C ? C / c.scrollRatio.y : 0),
                                (T = 0 < y ? y / c.scrollRatio.y : 0);
                    }
                    b[1] < 0 || (0 === b[0] && 0 === b[1])
                        ? (b = [0, 0])
                        : b[1] >= S[1]
                        ? (b = [S[0], S[1]])
                        : (b[0] = -b[0]),
                        a[0].mcs ||
                            (o(), t("onInit") && d.callbacks.onInit.call(a[0])),
                        clearTimeout(m[0].onCompleteTimeout),
                        K(x[0], w, Math.round(b[1]), h[1], i.scrollEasing),
                        (!c.tweenRunning &&
                            ((0 === _ && 0 <= b[0]) ||
                                (_ === S[0] && b[0] <= S[0]))) ||
                            K(
                                m[0],
                                w,
                                Math.round(b[0]),
                                h[0],
                                i.scrollEasing,
                                i.overwrite,
                                {
                                    onStart: function () {
                                        i.callbacks &&
                                            i.onStart &&
                                            !c.tweenRunning &&
                                            (t("onScrollStart") &&
                                                (o(),
                                                d.callbacks.onScrollStart.call(
                                                    a[0]
                                                )),
                                            (c.tweenRunning = !0),
                                            M(x),
                                            (c.cbOffsets = [
                                                d.callbacks
                                                    .alwaysTriggerOffsets ||
                                                    _ >= S[0] + C,
                                                d.callbacks
                                                    .alwaysTriggerOffsets ||
                                                    _ <= -y,
                                            ]));
                                    },
                                    onUpdate: function () {
                                        i.callbacks &&
                                            i.onUpdate &&
                                            t("whileScrolling") &&
                                            (o(),
                                            d.callbacks.whileScrolling.call(
                                                a[0]
                                            ));
                                    },
                                    onComplete: function () {
                                        var e;
                                        i.callbacks &&
                                            i.onComplete &&
                                            ("yx" === d.axis &&
                                                clearTimeout(
                                                    m[0].onCompleteTimeout
                                                ),
                                            (e = m[0].idleTimer || 0),
                                            (m[0].onCompleteTimeout =
                                                setTimeout(function () {
                                                    t("onScroll") &&
                                                        (o(),
                                                        d.callbacks.onScroll.call(
                                                            a[0]
                                                        )),
                                                        t("onTotalScroll") &&
                                                            b[1] >= S[1] - B &&
                                                            c.cbOffsets[0] &&
                                                            (o(),
                                                            d.callbacks.onTotalScroll.call(
                                                                a[0]
                                                            )),
                                                        t(
                                                            "onTotalScrollBack"
                                                        ) &&
                                                            b[1] <= T &&
                                                            c.cbOffsets[1] &&
                                                            (o(),
                                                            d.callbacks.onTotalScrollBack.call(
                                                                a[0]
                                                            )),
                                                        (c.tweenRunning = !1),
                                                        (m[0].idleTimer = 0),
                                                        M(x, "hide");
                                                }, e)));
                                    },
                                }
                            );
                }
            }),
            (K = function (e, t, o, n, a, i, l) {
                function r() {
                    x.stop ||
                        (p || u.call(),
                        (p = $() - m),
                        s(),
                        p >= x.time &&
                            ((x.time =
                                p > x.time ? p + c - (p - x.time) : p + c - 1),
                            x.time < p + 1 && (x.time = p + 1)),
                        x.time < n ? (x.id = d(r)) : f.call());
                }
                function s() {
                    0 < n
                        ? ((x.currVal = (function (e, t, o, n, a) {
                              switch (a) {
                                  case "linear":
                                  case "mcsLinear":
                                      return (o * e) / n + t;
                                  case "mcsLinearOut":
                                      return (
                                          (e /= n),
                                          e--,
                                          o * Math.sqrt(1 - e * e) + t
                                      );
                                  case "easeInOutSmooth":
                                      return (e /= n / 2) < 1
                                          ? (o / 2) * e * e + t
                                          : (-o / 2) * (--e * (e - 2) - 1) + t;
                                  case "easeInOutStrong":
                                      return (e /= n / 2) < 1
                                          ? (o / 2) *
                                                Math.pow(2, 10 * (e - 1)) +
                                                t
                                          : (e--,
                                            (o / 2) *
                                                (2 - Math.pow(2, -10 * e)) +
                                                t);
                                  case "easeInOut":
                                  case "mcsEaseInOut":
                                      return (e /= n / 2) < 1
                                          ? (o / 2) * e * e * e + t
                                          : (o / 2) * ((e -= 2) * e * e + 2) +
                                                t;
                                  case "easeOutSmooth":
                                      return (
                                          (e /= n),
                                          -o * (--e * e * e * e - 1) + t
                                      );
                                  case "easeOutStrong":
                                      return (
                                          o * (1 - Math.pow(2, (-10 * e) / n)) +
                                          t
                                      );
                                  case "easeOut":
                                  case "mcsEaseOut":
                                  default:
                                      var i = (e /= n) * e,
                                          l = i * e;
                                      return (
                                          t +
                                          o *
                                              (0.499999999999997 * l * i +
                                                  -2.5 * i * i +
                                                  5.5 * l +
                                                  -6.5 * i +
                                                  4 * e)
                                      );
                              }
                          })(x.time, g, w, n, a)),
                          (v[t] = Math.round(x.currVal) + "px"))
                        : (v[t] = o + "px"),
                        h.call();
                }
                e._mTween || (e._mTween = { top: {}, left: {} });
                var c,
                    d,
                    u = (l = l || {}).onStart || function () {},
                    h = l.onUpdate || function () {},
                    f = l.onComplete || function () {},
                    m = $(),
                    p = 0,
                    g = e.offsetTop,
                    v = e.style,
                    x = e._mTween[t];
                "left" === t && (g = e.offsetLeft);
                var w = o - g;
                (x.stop = 0),
                    "none" === i ||
                        (null != x.id &&
                            (window.requestAnimationFrame
                                ? window.cancelAnimationFrame(x.id)
                                : clearTimeout(x.id),
                            (x.id = null))),
                    (c = 1e3 / 60),
                    (x.time = p + c),
                    (d = window.requestAnimationFrame
                        ? window.requestAnimationFrame
                        : function (e) {
                              return s(), setTimeout(e, 0.01);
                          }),
                    (x.id = d(r));
            }),
            ($ = function () {
                return window.performance && window.performance.now
                    ? window.performance.now()
                    : window.performance && window.performance.webkitNow
                    ? window.performance.webkitNow()
                    : Date.now
                    ? Date.now()
                    : new Date().getTime();
            }),
            (o = function () {
                var e = this;
                e._mTween || (e._mTween = { top: {}, left: {} });
                for (var t = ["top", "left"], o = 0; o < t.length; o++) {
                    var n = t[o];
                    e._mTween[n].id &&
                        (window.requestAnimationFrame
                            ? window.cancelAnimationFrame(e._mTween[n].id)
                            : clearTimeout(e._mTween[n].id),
                        (e._mTween[n].id = null),
                        (e._mTween[n].stop = 1));
                }
            }),
            (ee = function (t, o) {
                try {
                    delete t[o];
                } catch (e) {
                    t[o] = null;
                }
            }),
            (te = function (e) {
                return !(e.which && 1 !== e.which);
            }),
            (oe = function (e) {
                var t = e.originalEvent.pointerType;
                return !(t && "touch" !== t && 2 !== t);
            }),
            (ne = function (e) {
                return !isNaN(parseFloat(e)) && isFinite(e);
            }),
            (ae = function (e) {
                var t = e.parents(".mCSB_container");
                return [
                    e.offset().top - t.offset().top,
                    e.offset().left - t.offset().left,
                ];
            }),
            (ie = function () {
                var e = (function () {
                    var e = ["webkit", "moz", "ms", "o"];
                    if ("hidden" in document) return "hidden";
                    for (var t = 0; t < e.length; t++)
                        if (e[t] + "Hidden" in document) return e[t] + "Hidden";
                    return null;
                })();
                return !!e && document[e];
            }),
            (z.fn[f] = function (e) {
                return m[e]
                    ? m[e].apply(this, Array.prototype.slice.call(arguments, 1))
                    : "object" != typeof e && e
                    ? void z.error("Method " + e + " does not exist")
                    : m.init.apply(this, arguments);
            }),
            (z[f] = function (e) {
                return m[e]
                    ? m[e].apply(this, Array.prototype.slice.call(arguments, 1))
                    : "object" != typeof e && e
                    ? void z.error("Method " + e + " does not exist")
                    : m.init.apply(this, arguments);
            }),
            (z[f].defaults = a),
            (window[f] = !0),
            z(window).bind("load", function () {
                z(n)[f](),
                    z.extend(z.expr[":"], {
                        mcsInView:
                            z.expr[":"].mcsInView ||
                            function (e) {
                                var t,
                                    o,
                                    n = z(e),
                                    a = n.parents(".mCSB_container");
                                if (a.length)
                                    return (
                                        (t = a.parent()),
                                        0 <=
                                            (o = [
                                                a[0].offsetTop,
                                                a[0].offsetLeft,
                                            ])[0] +
                                                ae(n)[0] &&
                                            o[0] + ae(n)[0] <
                                                t.height() -
                                                    n.outerHeight(!1) &&
                                            0 <= o[1] + ae(n)[1] &&
                                            o[1] + ae(n)[1] <
                                                t.width() - n.outerWidth(!1)
                                    );
                            },
                        mcsInSight:
                            z.expr[":"].mcsInSight ||
                            function (e, t, o) {
                                var n,
                                    a,
                                    i,
                                    l,
                                    r = z(e),
                                    s = r.parents(".mCSB_container"),
                                    c =
                                        "exact" === o[3]
                                            ? [
                                                  [1, 0],
                                                  [1, 0],
                                              ]
                                            : [
                                                  [0.9, 0.1],
                                                  [0.6, 0.4],
                                              ];
                                if (s.length)
                                    return (
                                        (n = [
                                            r.outerHeight(!1),
                                            r.outerWidth(!1),
                                        ]),
                                        (i = [
                                            s[0].offsetTop + ae(r)[0],
                                            s[0].offsetLeft + ae(r)[1],
                                        ]),
                                        (a = [
                                            s.parent()[0].offsetHeight,
                                            s.parent()[0].offsetWidth,
                                        ]),
                                        i[0] -
                                            a[0] *
                                                (l = [
                                                    n[0] < a[0] ? c[0] : c[1],
                                                    n[1] < a[1] ? c[0] : c[1],
                                                ])[0][0] <
                                            0 &&
                                            0 <= i[0] + n[0] - a[0] * l[0][1] &&
                                            i[1] - a[1] * l[1][0] < 0 &&
                                            0 <= i[1] + n[1] - a[1] * l[1][1]
                                    );
                            },
                        mcsOverflow:
                            z.expr[":"].mcsOverflow ||
                            function (e) {
                                var t = z(e).data(P);
                                if (t)
                                    return t.overflowed[0] || t.overflowed[1];
                            },
                    });
            });
    });
"function" !== typeof Object.create &&
    (Object.create = function (f) {
        function g() {}
        g.prototype = f;
        return new g();
    });
(function (f, g, k) {
    var l = {
        init: function (a, b) {
            this.$elem = f(b);
            this.options = f.extend(
                {},
                f.fn.owlCarousel.options,
                this.$elem.data(),
                a
            );
            this.userOptions = a;
            this.loadContent();
        },
        loadContent: function () {
            function a(a) {
                var d,
                    e = "";
                if ("function" === typeof b.options.jsonSuccess)
                    b.options.jsonSuccess.apply(this, [a]);
                else {
                    for (d in a.owl)
                        a.owl.hasOwnProperty(d) && (e += a.owl[d].item);
                    b.$elem.html(e);
                }
                b.logIn();
            }
            var b = this,
                e;
            "function" === typeof b.options.beforeInit &&
                b.options.beforeInit.apply(this, [b.$elem]);
            "string" === typeof b.options.jsonPath
                ? ((e = b.options.jsonPath), f.getJSON(e, a))
                : b.logIn();
        },
        logIn: function () {
            this.$elem.data("owl-originalStyles", this.$elem.attr("style"));
            this.$elem.data("owl-originalClasses", this.$elem.attr("class"));
            this.$elem.css({ opacity: 0 });
            this.orignalItems = this.options.items;
            this.checkBrowser();
            this.wrapperWidth = 0;
            this.checkVisible = null;
            this.setVars();
        },
        setVars: function () {
            if (0 === this.$elem.children().length) return !1;
            this.baseClass();
            this.eventTypes();
            this.$userItems = this.$elem.children();
            this.itemsAmount = this.$userItems.length;
            this.wrapItems();
            this.$owlItems = this.$elem.find(".owl-item");
            this.$owlWrapper = this.$elem.find(".owl-wrapper");
            this.playDirection = "next";
            this.prevItem = 0;
            this.prevArr = [0];
            this.currentItem = 0;
            this.customEvents();
            this.onStartup();
        },
        onStartup: function () {
            this.updateItems();
            this.calculateAll();
            this.buildControls();
            this.updateControls();
            this.response();
            this.moveEvents();
            this.stopOnHover();
            this.owlStatus();
            !1 !== this.options.transitionStyle &&
                this.transitionTypes(this.options.transitionStyle);
            !0 === this.options.autoPlay && (this.options.autoPlay = 5e3);
            this.play();
            this.$elem.find(".owl-wrapper").css("display", "block");
            this.$elem.is(":visible")
                ? this.$elem.css("opacity", 1)
                : this.watchVisibility();
            this.onstartup = !1;
            this.eachMoveUpdate();
            "function" === typeof this.options.afterInit &&
                this.options.afterInit.apply(this, [this.$elem]);
        },
        eachMoveUpdate: function () {
            !0 === this.options.lazyLoad && this.lazyLoad();
            !0 === this.options.autoHeight && this.autoHeight();
            this.onVisibleItems();
            "function" === typeof this.options.afterAction &&
                this.options.afterAction.apply(this, [this.$elem]);
        },
        updateVars: function () {
            "function" === typeof this.options.beforeUpdate &&
                this.options.beforeUpdate.apply(this, [this.$elem]);
            this.watchVisibility();
            this.updateItems();
            this.calculateAll();
            this.updatePosition();
            this.updateControls();
            this.eachMoveUpdate();
            "function" === typeof this.options.afterUpdate &&
                this.options.afterUpdate.apply(this, [this.$elem]);
        },
        reload: function () {
            var a = this;
            g.setTimeout(function () {
                a.updateVars();
            }, 0);
        },
        watchVisibility: function () {
            var a = this;
            if (!1 === a.$elem.is(":visible"))
                a.$elem.css({ opacity: 0 }),
                    g.clearInterval(a.autoPlayInterval),
                    g.clearInterval(a.checkVisible);
            else return !1;
            a.checkVisible = g.setInterval(function () {
                a.$elem.is(":visible") &&
                    (a.reload(),
                    a.$elem.animate({ opacity: 1 }, 200),
                    g.clearInterval(a.checkVisible));
            }, 500);
        },
        wrapItems: function () {
            this.$userItems
                .wrapAll('<div class="owl-wrapper">')
                .wrap('<div class="owl-item"></div>');
            this.$elem
                .find(".owl-wrapper")
                .wrap('<div class="owl-wrapper-outer">');
            this.wrapperOuter = this.$elem.find(".owl-wrapper-outer");
            this.$elem.css("display", "block");
        },
        baseClass: function () {
            var a = this.$elem.hasClass(this.options.baseClass),
                b = this.$elem.hasClass(this.options.theme);
            a || this.$elem.addClass(this.options.baseClass);
            b || this.$elem.addClass(this.options.theme);
        },
        updateItems: function () {
            var a, b;
            if (!1 === this.options.responsive) return !1;
            if (!0 === this.options.singleItem)
                return (
                    (this.options.items = this.orignalItems = 1),
                    (this.options.itemsCustom = !1),
                    (this.options.itemsDesktop = !1),
                    (this.options.itemsDesktopSmall = !1),
                    (this.options.itemsTablet = !1),
                    (this.options.itemsTabletSmall = !1),
                    (this.options.itemsMobile = !1)
                );
            a = f(this.options.responsiveBaseWidth).width();
            a > (this.options.itemsDesktop[0] || this.orignalItems) &&
                (this.options.items = this.orignalItems);
            if (!1 !== this.options.itemsCustom)
                for (
                    this.options.itemsCustom.sort(function (a, b) {
                        return a[0] - b[0];
                    }),
                        b = 0;
                    b < this.options.itemsCustom.length;
                    b += 1
                )
                    this.options.itemsCustom[b][0] <= a &&
                        (this.options.items = this.options.itemsCustom[b][1]);
            else
                a <= this.options.itemsDesktop[0] &&
                    !1 !== this.options.itemsDesktop &&
                    (this.options.items = this.options.itemsDesktop[1]),
                    a <= this.options.itemsDesktopSmall[0] &&
                        !1 !== this.options.itemsDesktopSmall &&
                        (this.options.items =
                            this.options.itemsDesktopSmall[1]),
                    a <= this.options.itemsTablet[0] &&
                        !1 !== this.options.itemsTablet &&
                        (this.options.items = this.options.itemsTablet[1]),
                    a <= this.options.itemsTabletSmall[0] &&
                        !1 !== this.options.itemsTabletSmall &&
                        (this.options.items = this.options.itemsTabletSmall[1]),
                    a <= this.options.itemsMobile[0] &&
                        !1 !== this.options.itemsMobile &&
                        (this.options.items = this.options.itemsMobile[1]);
            this.options.items > this.itemsAmount &&
                !0 === this.options.itemsScaleUp &&
                (this.options.items = this.itemsAmount);
        },
        response: function () {
            var a = this,
                b,
                e;
            if (!0 !== a.options.responsive) return !1;
            e = f(g).width();
            a.resizer = function () {
                f(g).width() !== e &&
                    (!1 !== a.options.autoPlay &&
                        g.clearInterval(a.autoPlayInterval),
                    g.clearTimeout(b),
                    (b = g.setTimeout(function () {
                        e = f(g).width();
                        a.updateVars();
                    }, a.options.responsiveRefreshRate)));
            };
            f(g).resize(a.resizer);
        },
        updatePosition: function () {
            this.jumpTo(this.currentItem);
            !1 !== this.options.autoPlay && this.checkAp();
        },
        appendItemsSizes: function () {
            var a = this,
                b = 0,
                e = a.itemsAmount - a.options.items;
            a.$owlItems.each(function (c) {
                var d = f(this);
                d.css({ width: a.itemWidth }).data("owl-item", Number(c));
                if (0 === c % a.options.items || c === e) c > e || (b += 1);
                d.data("owl-roundPages", b);
            });
        },
        appendWrapperSizes: function () {
            this.$owlWrapper.css({
                width: this.$owlItems.length * this.itemWidth * 2,
                left: 0,
            });
            this.appendItemsSizes();
        },
        calculateAll: function () {
            this.calculateWidth();
            this.appendWrapperSizes();
            this.loops();
            this.max();
        },
        calculateWidth: function () {
            this.itemWidth = Math.round(
                this.$elem.width() / this.options.items
            );
        },
        max: function () {
            var a =
                -1 *
                (this.itemsAmount * this.itemWidth -
                    this.options.items * this.itemWidth);
            this.options.items > this.itemsAmount
                ? (this.maximumPixels = a = this.maximumItem = 0)
                : ((this.maximumItem = this.itemsAmount - this.options.items),
                  (this.maximumPixels = a));
            return a;
        },
        min: function () {
            return 0;
        },
        loops: function () {
            var a = 0,
                b = 0,
                e,
                c;
            this.positionsInArray = [0];
            this.pagesInArray = [];
            for (e = 0; e < this.itemsAmount; e += 1)
                (b += this.itemWidth),
                    this.positionsInArray.push(-b),
                    !0 === this.options.scrollPerPage &&
                        ((c = f(this.$owlItems[e])),
                        (c = c.data("owl-roundPages")),
                        c !== a &&
                            ((this.pagesInArray[a] = this.positionsInArray[e]),
                            (a = c)));
        },
        buildControls: function () {
            if (
                !0 === this.options.navigation ||
                !0 === this.options.pagination
            )
                this.owlControls = f('<div class="owl-controls"/>')
                    .toggleClass("clickable", !this.browser.isTouch)
                    .appendTo(this.$elem);
            !0 === this.options.pagination && this.buildPagination();
            !0 === this.options.navigation && this.buildButtons();
        },
        buildButtons: function () {
            var a = this,
                b = f('<div class="owl-buttons"/>');
            a.owlControls.append(b);
            a.buttonPrev = f("<div/>", {
                class: "owl-prev",
                html: a.options.navigationText[0] || "",
            });
            a.buttonNext = f("<div/>", {
                class: "owl-next",
                html: a.options.navigationText[1] || "",
            });
            b.append(a.buttonPrev).append(a.buttonNext);
            b.on(
                "touchstart.owlControls mousedown.owlControls",
                'div[class^="owl"]',
                function (a) {
                    a.preventDefault();
                }
            );
            b.on(
                "touchend.owlControls mouseup.owlControls",
                'div[class^="owl"]',
                function (b) {
                    b.preventDefault();
                    f(this).hasClass("owl-next") ? a.next() : a.prev();
                }
            );
        },
        buildPagination: function () {
            var a = this;
            a.paginationWrapper = f('<div class="owl-pagination"/>');
            a.owlControls.append(a.paginationWrapper);
            a.paginationWrapper.on(
                "touchend.owlControls mouseup.owlControls",
                ".owl-page",
                function (b) {
                    b.preventDefault();
                    Number(f(this).data("owl-page")) !== a.currentItem &&
                        a.goTo(Number(f(this).data("owl-page")), !0);
                }
            );
        },
        updatePagination: function () {
            var a, b, e, c, d, g;
            if (!1 === this.options.pagination) return !1;
            this.paginationWrapper.html("");
            a = 0;
            b = this.itemsAmount - (this.itemsAmount % this.options.items);
            for (c = 0; c < this.itemsAmount; c += 1)
                0 === c % this.options.items &&
                    ((a += 1),
                    b === c && (e = this.itemsAmount - this.options.items),
                    (d = f("<div/>", { class: "owl-page" })),
                    (g = f("<span></span>", {
                        text: !0 === this.options.paginationNumbers ? a : "",
                        class:
                            !0 === this.options.paginationNumbers
                                ? "owl-numbers"
                                : "",
                    })),
                    d.append(g),
                    d.data("owl-page", b === c ? e : c),
                    d.data("owl-roundPages", a),
                    this.paginationWrapper.append(d));
            this.checkPagination();
        },
        checkPagination: function () {
            var a = this;
            if (!1 === a.options.pagination) return !1;
            a.paginationWrapper.find(".owl-page").each(function () {
                f(this).data("owl-roundPages") ===
                    f(a.$owlItems[a.currentItem]).data("owl-roundPages") &&
                    (a.paginationWrapper
                        .find(".owl-page")
                        .removeClass("active"),
                    f(this).addClass("active"));
            });
        },
        checkNavigation: function () {
            if (!1 === this.options.navigation) return !1;
            !1 === this.options.rewindNav &&
                (0 === this.currentItem && 0 === this.maximumItem
                    ? (this.buttonPrev.addClass("disabled"),
                      this.buttonNext.addClass("disabled"))
                    : 0 === this.currentItem && 0 !== this.maximumItem
                    ? (this.buttonPrev.addClass("disabled"),
                      this.buttonNext.removeClass("disabled"))
                    : this.currentItem === this.maximumItem
                    ? (this.buttonPrev.removeClass("disabled"),
                      this.buttonNext.addClass("disabled"))
                    : 0 !== this.currentItem &&
                      this.currentItem !== this.maximumItem &&
                      (this.buttonPrev.removeClass("disabled"),
                      this.buttonNext.removeClass("disabled")));
        },
        updateControls: function () {
            this.updatePagination();
            this.checkNavigation();
            this.owlControls &&
                (this.options.items >= this.itemsAmount
                    ? this.owlControls.hide()
                    : this.owlControls.show());
        },
        destroyControls: function () {
            this.owlControls && this.owlControls.remove();
        },
        next: function (a) {
            if (this.isTransition) return !1;
            this.currentItem +=
                !0 === this.options.scrollPerPage ? this.options.items : 1;
            if (
                this.currentItem >
                this.maximumItem +
                    (!0 === this.options.scrollPerPage
                        ? this.options.items - 1
                        : 0)
            )
                if (!0 === this.options.rewindNav)
                    (this.currentItem = 0), (a = "rewind");
                else return (this.currentItem = this.maximumItem), !1;
            this.goTo(this.currentItem, a);
        },
        prev: function (a) {
            if (this.isTransition) return !1;
            this.currentItem =
                !0 === this.options.scrollPerPage &&
                0 < this.currentItem &&
                this.currentItem < this.options.items
                    ? 0
                    : this.currentItem -
                      (!0 === this.options.scrollPerPage
                          ? this.options.items
                          : 1);
            if (0 > this.currentItem)
                if (!0 === this.options.rewindNav)
                    (this.currentItem = this.maximumItem), (a = "rewind");
                else return (this.currentItem = 0), !1;
            this.goTo(this.currentItem, a);
        },
        goTo: function (a, b, e) {
            var c = this;
            if (c.isTransition) return !1;
            "function" === typeof c.options.beforeMove &&
                c.options.beforeMove.apply(this, [c.$elem]);
            a >= c.maximumItem ? (a = c.maximumItem) : 0 >= a && (a = 0);
            c.currentItem = c.owl.currentItem = a;
            if (
                !1 !== c.options.transitionStyle &&
                "drag" !== e &&
                1 === c.options.items &&
                !0 === c.browser.support3d
            )
                return (
                    c.swapSpeed(0),
                    !0 === c.browser.support3d
                        ? c.transition3d(c.positionsInArray[a])
                        : c.css2slide(c.positionsInArray[a], 1),
                    c.afterGo(),
                    c.singleItemTransition(),
                    !1
                );
            a = c.positionsInArray[a];
            !0 === c.browser.support3d
                ? ((c.isCss3Finish = !1),
                  !0 === b
                      ? (c.swapSpeed("paginationSpeed"),
                        g.setTimeout(function () {
                            c.isCss3Finish = !0;
                        }, c.options.paginationSpeed))
                      : "rewind" === b
                      ? (c.swapSpeed(c.options.rewindSpeed),
                        g.setTimeout(function () {
                            c.isCss3Finish = !0;
                        }, c.options.rewindSpeed))
                      : (c.swapSpeed("slideSpeed"),
                        g.setTimeout(function () {
                            c.isCss3Finish = !0;
                        }, c.options.slideSpeed)),
                  c.transition3d(a))
                : !0 === b
                ? c.css2slide(a, c.options.paginationSpeed)
                : "rewind" === b
                ? c.css2slide(a, c.options.rewindSpeed)
                : c.css2slide(a, c.options.slideSpeed);
            c.afterGo();
        },
        jumpTo: function (a) {
            "function" === typeof this.options.beforeMove &&
                this.options.beforeMove.apply(this, [this.$elem]);
            a >= this.maximumItem || -1 === a
                ? (a = this.maximumItem)
                : 0 >= a && (a = 0);
            this.swapSpeed(0);
            !0 === this.browser.support3d
                ? this.transition3d(this.positionsInArray[a])
                : this.css2slide(this.positionsInArray[a], 1);
            this.currentItem = this.owl.currentItem = a;
            this.afterGo();
        },
        afterGo: function () {
            this.prevArr.push(this.currentItem);
            this.prevItem = this.owl.prevItem =
                this.prevArr[this.prevArr.length - 2];
            this.prevArr.shift(0);
            this.prevItem !== this.currentItem &&
                (this.checkPagination(),
                this.checkNavigation(),
                this.eachMoveUpdate(),
                !1 !== this.options.autoPlay && this.checkAp());
            "function" === typeof this.options.afterMove &&
                this.prevItem !== this.currentItem &&
                this.options.afterMove.apply(this, [this.$elem]);
        },
        stop: function () {
            this.apStatus = "stop";
            g.clearInterval(this.autoPlayInterval);
        },
        checkAp: function () {
            "stop" !== this.apStatus && this.play();
        },
        play: function () {
            var a = this;
            a.apStatus = "play";
            if (!1 === a.options.autoPlay) return !1;
            g.clearInterval(a.autoPlayInterval);
            a.autoPlayInterval = g.setInterval(function () {
                a.next(!0);
            }, a.options.autoPlay);
        },
        swapSpeed: function (a) {
            "slideSpeed" === a
                ? this.$owlWrapper.css(
                      this.addCssSpeed(this.options.slideSpeed)
                  )
                : "paginationSpeed" === a
                ? this.$owlWrapper.css(
                      this.addCssSpeed(this.options.paginationSpeed)
                  )
                : "string" !== typeof a &&
                  this.$owlWrapper.css(this.addCssSpeed(a));
        },
        addCssSpeed: function (a) {
            return {
                "-webkit-transition": "all " + a + "ms ease",
                "-moz-transition": "all " + a + "ms ease",
                "-o-transition": "all " + a + "ms ease",
                transition: "all " + a + "ms ease",
            };
        },
        removeTransition: function () {
            return {
                "-webkit-transition": "",
                "-moz-transition": "",
                "-o-transition": "",
                transition: "",
            };
        },
        doTranslate: function (a) {
            return {
                "-webkit-transform": "translate3d(" + a + "px, 0px, 0px)",
                "-moz-transform": "translate3d(" + a + "px, 0px, 0px)",
                "-o-transform": "translate3d(" + a + "px, 0px, 0px)",
                "-ms-transform": "translate3d(" + a + "px, 0px, 0px)",
                transform: "translate3d(" + a + "px, 0px,0px)",
            };
        },
        transition3d: function (a) {
            this.$owlWrapper.css(this.doTranslate(a));
        },
        css2move: function (a) {
            this.$owlWrapper.css({ left: a });
        },
        css2slide: function (a, b) {
            var e = this;
            e.isCssFinish = !1;
            e.$owlWrapper.stop(!0, !0).animate(
                { left: a },
                {
                    duration: b || e.options.slideSpeed,
                    complete: function () {
                        e.isCssFinish = !0;
                    },
                }
            );
        },
        checkBrowser: function () {
            var a = k.createElement("div");
            a.style.cssText =
                "  -moz-transform:translate3d(0px, 0px, 0px); -ms-transform:translate3d(0px, 0px, 0px); -o-transform:translate3d(0px, 0px, 0px); -webkit-transform:translate3d(0px, 0px, 0px); transform:translate3d(0px, 0px, 0px)";
            a = a.style.cssText.match(/translate3d\(0px, 0px, 0px\)/g);
            this.browser = {
                support3d: null !== a && 1 === a.length,
                isTouch: "ontouchstart" in g || g.navigator.msMaxTouchPoints,
            };
        },
        moveEvents: function () {
            if (!1 !== this.options.mouseDrag || !1 !== this.options.touchDrag)
                this.gestures(), this.disabledEvents();
        },
        eventTypes: function () {
            var a = ["s", "e", "x"];
            this.ev_types = {};
            !0 === this.options.mouseDrag && !0 === this.options.touchDrag
                ? (a = [
                      "touchstart.owl mousedown.owl",
                      "touchmove.owl mousemove.owl",
                      "touchend.owl touchcancel.owl mouseup.owl",
                  ])
                : !1 === this.options.mouseDrag && !0 === this.options.touchDrag
                ? (a = [
                      "touchstart.owl",
                      "touchmove.owl",
                      "touchend.owl touchcancel.owl",
                  ])
                : !0 === this.options.mouseDrag &&
                  !1 === this.options.touchDrag &&
                  (a = ["mousedown.owl", "mousemove.owl", "mouseup.owl"]);
            this.ev_types.start = a[0];
            this.ev_types.move = a[1];
            this.ev_types.end = a[2];
        },
        disabledEvents: function () {
            this.$elem.on("dragstart.owl", function (a) {
                a.preventDefault();
            });
            this.$elem.on("mousedown.disableTextSelect", function (a) {
                return f(a.target).is("input, textarea, select, option");
            });
        },
        gestures: function () {
            function a(a) {
                if (void 0 !== a.touches)
                    return { x: a.touches[0].pageX, y: a.touches[0].pageY };
                if (void 0 === a.touches) {
                    if (void 0 !== a.pageX) return { x: a.pageX, y: a.pageY };
                    if (void 0 === a.pageX)
                        return { x: a.clientX, y: a.clientY };
                }
            }
            function b(a) {
                "on" === a
                    ? (f(k).on(d.ev_types.move, e), f(k).on(d.ev_types.end, c))
                    : "off" === a &&
                      (f(k).off(d.ev_types.move), f(k).off(d.ev_types.end));
            }
            function e(b) {
                b = b.originalEvent || b || g.event;
                d.newPosX = a(b).x - h.offsetX;
                d.newPosY = a(b).y - h.offsetY;
                d.newRelativeX = d.newPosX - h.relativePos;
                "function" === typeof d.options.startDragging &&
                    !0 !== h.dragging &&
                    0 !== d.newRelativeX &&
                    ((h.dragging = !0),
                    d.options.startDragging.apply(d, [d.$elem]));
                (8 < d.newRelativeX || -8 > d.newRelativeX) &&
                    !0 === d.browser.isTouch &&
                    (void 0 !== b.preventDefault
                        ? b.preventDefault()
                        : (b.returnValue = !1),
                    (h.sliding = !0));
                (10 < d.newPosY || -10 > d.newPosY) &&
                    !1 === h.sliding &&
                    f(k).off("touchmove.owl");
                d.newPosX = Math.max(
                    Math.min(d.newPosX, d.newRelativeX / 5),
                    d.maximumPixels + d.newRelativeX / 5
                );
                !0 === d.browser.support3d
                    ? d.transition3d(d.newPosX)
                    : d.css2move(d.newPosX);
            }
            function c(a) {
                a = a.originalEvent || a || g.event;
                var c;
                a.target = a.target || a.srcElement;
                h.dragging = !1;
                !0 !== d.browser.isTouch &&
                    d.$owlWrapper.removeClass("grabbing");
                d.dragDirection =
                    0 > d.newRelativeX
                        ? (d.owl.dragDirection = "left")
                        : (d.owl.dragDirection = "right");
                0 !== d.newRelativeX &&
                    ((c = d.getNewPosition()),
                    d.goTo(c, !1, "drag"),
                    h.targetElement === a.target &&
                        !0 !== d.browser.isTouch &&
                        (f(a.target).on("click.disable", function (a) {
                            a.stopImmediatePropagation();
                            a.stopPropagation();
                            a.preventDefault();
                            f(a.target).off("click.disable");
                        }),
                        (a = f._data(a.target, "events").click),
                        (c = a.pop()),
                        a.splice(0, 0, c)));
                b("off");
            }
            var d = this,
                h = {
                    offsetX: 0,
                    offsetY: 0,
                    baseElWidth: 0,
                    relativePos: 0,
                    position: null,
                    minSwipe: null,
                    maxSwipe: null,
                    sliding: null,
                    dargging: null,
                    targetElement: null,
                };
            d.isCssFinish = !0;
            d.$elem.on(d.ev_types.start, ".owl-wrapper", function (c) {
                c = c.originalEvent || c || g.event;
                var e;
                if (3 === c.which) return !1;
                if (!(d.itemsAmount <= d.options.items)) {
                    if (
                        (!1 === d.isCssFinish &&
                            !d.options.dragBeforeAnimFinish) ||
                        (!1 === d.isCss3Finish &&
                            !d.options.dragBeforeAnimFinish)
                    )
                        return !1;
                    !1 !== d.options.autoPlay &&
                        g.clearInterval(d.autoPlayInterval);
                    !0 === d.browser.isTouch ||
                        d.$owlWrapper.hasClass("grabbing") ||
                        d.$owlWrapper.addClass("grabbing");
                    d.newPosX = 0;
                    d.newRelativeX = 0;
                    f(this).css(d.removeTransition());
                    e = f(this).position();
                    h.relativePos = e.left;
                    h.offsetX = a(c).x - e.left;
                    h.offsetY = a(c).y - e.top;
                    b("on");
                    h.sliding = !1;
                    h.targetElement = c.target || c.srcElement;
                }
            });
        },
        getNewPosition: function () {
            var a = this.closestItem();
            a > this.maximumItem
                ? (a = this.currentItem = this.maximumItem)
                : 0 <= this.newPosX && (this.currentItem = a = 0);
            return a;
        },
        closestItem: function () {
            var a = this,
                b =
                    !0 === a.options.scrollPerPage
                        ? a.pagesInArray
                        : a.positionsInArray,
                e = a.newPosX,
                c = null;
            f.each(b, function (d, g) {
                e - a.itemWidth / 20 > b[d + 1] &&
                e - a.itemWidth / 20 < g &&
                "left" === a.moveDirection()
                    ? ((c = g),
                      (a.currentItem =
                          !0 === a.options.scrollPerPage
                              ? f.inArray(c, a.positionsInArray)
                              : d))
                    : e + a.itemWidth / 20 < g &&
                      e + a.itemWidth / 20 > (b[d + 1] || b[d] - a.itemWidth) &&
                      "right" === a.moveDirection() &&
                      (!0 === a.options.scrollPerPage
                          ? ((c = b[d + 1] || b[b.length - 1]),
                            (a.currentItem = f.inArray(c, a.positionsInArray)))
                          : ((c = b[d + 1]), (a.currentItem = d + 1)));
            });
            return a.currentItem;
        },
        moveDirection: function () {
            var a;
            0 > this.newRelativeX
                ? ((a = "right"), (this.playDirection = "next"))
                : ((a = "left"), (this.playDirection = "prev"));
            return a;
        },
        customEvents: function () {
            var a = this;
            a.$elem.on("owl.next", function () {
                a.next();
            });
            a.$elem.on("owl.prev", function () {
                a.prev();
            });
            a.$elem.on("owl.play", function (b, e) {
                a.options.autoPlay = e;
                a.play();
                a.hoverStatus = "play";
            });
            a.$elem.on("owl.stop", function () {
                a.stop();
                a.hoverStatus = "stop";
            });
            a.$elem.on("owl.goTo", function (b, e) {
                a.goTo(e);
            });
            a.$elem.on("owl.jumpTo", function (b, e) {
                a.jumpTo(e);
            });
        },
        stopOnHover: function () {
            var a = this;
            !0 === a.options.stopOnHover &&
                !0 !== a.browser.isTouch &&
                !1 !== a.options.autoPlay &&
                (a.$elem.on("mouseover", function () {
                    a.stop();
                }),
                a.$elem.on("mouseout", function () {
                    "stop" !== a.hoverStatus && a.play();
                }));
        },
        lazyLoad: function () {
            var a, b, e, c, d;
            if (!1 === this.options.lazyLoad) return !1;
            for (a = 0; a < this.itemsAmount; a += 1)
                (b = f(this.$owlItems[a])),
                    "loaded" !== b.data("owl-loaded") &&
                        ((e = b.data("owl-item")),
                        (c = b.find(".lazyOwl")),
                        "string" !== typeof c.data("src")
                            ? b.data("owl-loaded", "loaded")
                            : (void 0 === b.data("owl-loaded") &&
                                  (c.hide(),
                                  b
                                      .addClass("loading")
                                      .data("owl-loaded", "checked")),
                              (d =
                                  !0 === this.options.lazyFollow
                                      ? e >= this.currentItem
                                      : !0) &&
                                  e < this.currentItem + this.options.items &&
                                  c.length &&
                                  this.lazyPreload(b, c)));
        },
        lazyPreload: function (a, b) {
            function e() {
                a.data("owl-loaded", "loaded").removeClass("loading");
                b.removeAttr("data-src");
                "fade" === d.options.lazyEffect ? b.fadeIn(400) : b.show();
                "function" === typeof d.options.afterLazyLoad &&
                    d.options.afterLazyLoad.apply(this, [d.$elem]);
            }
            function c() {
                f += 1;
                d.completeImg(b.get(0)) || !0 === k
                    ? e()
                    : 100 >= f
                    ? g.setTimeout(c, 100)
                    : e();
            }
            var d = this,
                f = 0,
                k;
            "DIV" === b.prop("tagName")
                ? (b.css("background-image", "url(" + b.data("src") + ")"),
                  (k = !0))
                : (b[0].src = b.data("src"));
            c();
        },
        autoHeight: function () {
            function a() {
                var a = f(e.$owlItems[e.currentItem]).height();
                e.wrapperOuter.css("height", a + "px");
                e.wrapperOuter.hasClass("autoHeight") ||
                    g.setTimeout(function () {
                        e.wrapperOuter.addClass("autoHeight");
                    }, 0);
            }
            function b() {
                d += 1;
                e.completeImg(c.get(0))
                    ? a()
                    : 100 >= d
                    ? g.setTimeout(b, 100)
                    : e.wrapperOuter.css("height", "");
            }
            var e = this,
                c = f(e.$owlItems[e.currentItem]).find("img"),
                d;
            void 0 !== c.get(0) ? ((d = 0), b()) : a();
        },
        completeImg: function (a) {
            return !a.complete ||
                ("undefined" !== typeof a.naturalWidth && 0 === a.naturalWidth)
                ? !1
                : !0;
        },
        onVisibleItems: function () {
            var a;
            !0 === this.options.addClassActive &&
                this.$owlItems.removeClass("active");
            this.visibleItems = [];
            for (
                a = this.currentItem;
                a < this.currentItem + this.options.items;
                a += 1
            )
                this.visibleItems.push(a),
                    !0 === this.options.addClassActive &&
                        f(this.$owlItems[a]).addClass("active");
            this.owl.visibleItems = this.visibleItems;
        },
        transitionTypes: function (a) {
            this.outClass = "owl-" + a + "-out";
            this.inClass = "owl-" + a + "-in";
        },
        singleItemTransition: function () {
            var a = this,
                b = a.outClass,
                e = a.inClass,
                c = a.$owlItems.eq(a.currentItem),
                d = a.$owlItems.eq(a.prevItem),
                f =
                    Math.abs(a.positionsInArray[a.currentItem]) +
                    a.positionsInArray[a.prevItem],
                g =
                    Math.abs(a.positionsInArray[a.currentItem]) +
                    a.itemWidth / 2;
            a.isTransition = !0;
            a.$owlWrapper.addClass("owl-origin").css({
                "-webkit-transform-origin": g + "px",
                "-moz-perspective-origin": g + "px",
                "perspective-origin": g + "px",
            });
            d.css({ position: "relative", left: f + "px" })
                .addClass(b)
                .on(
                    "webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend",
                    function () {
                        a.endPrev = !0;
                        d.off(
                            "webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend"
                        );
                        a.clearTransStyle(d, b);
                    }
                );
            c.addClass(e).on(
                "webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend",
                function () {
                    a.endCurrent = !0;
                    c.off(
                        "webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend"
                    );
                    a.clearTransStyle(c, e);
                }
            );
        },
        clearTransStyle: function (a, b) {
            a.css({ position: "", left: "" }).removeClass(b);
            this.endPrev &&
                this.endCurrent &&
                (this.$owlWrapper.removeClass("owl-origin"),
                (this.isTransition = this.endCurrent = this.endPrev = !1));
        },
        owlStatus: function () {
            this.owl = {
                userOptions: this.userOptions,
                baseElement: this.$elem,
                userItems: this.$userItems,
                owlItems: this.$owlItems,
                currentItem: this.currentItem,
                prevItem: this.prevItem,
                visibleItems: this.visibleItems,
                isTouch: this.browser.isTouch,
                browser: this.browser,
                dragDirection: this.dragDirection,
            };
        },
        clearEvents: function () {
            this.$elem.off(".owl owl mousedown.disableTextSelect");
            f(k).off(".owl owl");
            f(g).off("resize", this.resizer);
        },
        unWrap: function () {
            0 !== this.$elem.children().length &&
                (this.$owlWrapper.unwrap(),
                this.$userItems.unwrap().unwrap(),
                this.owlControls && this.owlControls.remove());
            this.clearEvents();
            this.$elem
                .attr("style", this.$elem.data("owl-originalStyles") || "")
                .attr("class", this.$elem.data("owl-originalClasses"));
        },
        destroy: function () {
            this.stop();
            g.clearInterval(this.checkVisible);
            this.unWrap();
            this.$elem.removeData();
        },
        reinit: function (a) {
            a = f.extend({}, this.userOptions, a);
            this.unWrap();
            this.init(a, this.$elem);
        },
        addItem: function (a, b) {
            var e;
            if (!a) return !1;
            if (0 === this.$elem.children().length)
                return this.$elem.append(a), this.setVars(), !1;
            this.unWrap();
            e = void 0 === b || -1 === b ? -1 : b;
            e >= this.$userItems.length || -1 === e
                ? this.$userItems.eq(-1).after(a)
                : this.$userItems.eq(e).before(a);
            this.setVars();
        },
        removeItem: function (a) {
            if (0 === this.$elem.children().length) return !1;
            a = void 0 === a || -1 === a ? -1 : a;
            this.unWrap();
            this.$userItems.eq(a).remove();
            this.setVars();
        },
    };
    f.fn.owlCarousel = function (a) {
        return this.each(function () {
            if (!0 === f(this).data("owl-init")) return !1;
            f(this).data("owl-init", !0);
            var b = Object.create(l);
            b.init(a, this);
            f.data(this, "owlCarousel", b);
        });
    };
    f.fn.owlCarousel.options = {
        items: 5,
        itemsCustom: !1,
        itemsDesktop: [1199, 4],
        itemsDesktopSmall: [979, 3],
        itemsTablet: [768, 2],
        itemsTabletSmall: !1,
        itemsMobile: [479, 1],
        singleItem: !1,
        itemsScaleUp: !1,
        slideSpeed: 200,
        paginationSpeed: 800,
        rewindSpeed: 1e3,
        autoPlay: !1,
        stopOnHover: !1,
        navigation: !1,
        navigationText: ["prev", "next"],
        rewindNav: !0,
        scrollPerPage: !1,
        pagination: !0,
        paginationNumbers: !1,
        responsive: !0,
        responsiveRefreshRate: 200,
        responsiveBaseWidth: g,
        baseClass: "owl-carousel",
        theme: "owl-theme",
        lazyLoad: !1,
        lazyFollow: !0,
        lazyEffect: "fade",
        autoHeight: !1,
        jsonPath: !1,
        jsonSuccess: !1,
        dragBeforeAnimFinish: !0,
        mouseDrag: !0,
        touchDrag: !0,
        addClassActive: !1,
        transitionStyle: !1,
        beforeUpdate: !1,
        afterUpdate: !1,
        beforeInit: !1,
        afterInit: !1,
        beforeMove: !1,
        afterMove: !1,
        afterAction: !1,
        startDragging: !1,
        afterLazyLoad: !1,
    };
})(jQuery, window, document);
!(function (h) {
    (h.fn.idTabs = function () {
        for (var e = {}, t = 0; t < arguments.length; ++t) {
            var s = arguments[t];
            switch (s.constructor) {
                case Object:
                    h.extend(e, s);
                    break;
                case Boolean:
                    e.change = s;
                    break;
                case Number:
                    e.start = s;
                    break;
                case Function:
                    e.click = s;
                    break;
                case String:
                    "." == s.charAt(0)
                        ? (e.selected = s)
                        : "!" == s.charAt(0)
                        ? (e.event = s)
                        : (e.start = s);
            }
        }
        return (
            "function" == typeof e.return && (e.change = e.return),
            this.each(function () {
                h.idTabs(this, e);
            })
        );
    }),
        (h.idTabs = function (n, e) {
            var t = h.metadata ? h(n).metadata() : {},
                r = h.extend({}, h.idTabs.settings, t, e);
            "." == r.selected.charAt(0) && (r.selected = r.selected.substr(1)),
                "!" == r.event.charAt(0) && (r.event = r.event.substr(1)),
                null == r.start && (r.start = -1);
            var s = function () {
                    if (h(this).is("." + r.selected)) return r.change;
                    var e = "#" + this.href.split("#")[1],
                        t = [],
                        s = [];
                    if (
                        (h("a", n).each(function () {
                            this.href.match(/#/) &&
                                (t.push(this),
                                s.push("#" + this.href.split("#")[1]));
                        }),
                        r.click && !r.click.apply(this, [e, s, n, r]))
                    )
                        return r.change;
                    for (i in t) h(t[i]).removeClass(r.selected);
                    for (i in s) h(s[i]).hide();
                    return h(this).addClass(r.selected), h(e).show(), r.change;
                },
                a = h("a[href*='#']", n).unbind(r.event, s).bind(r.event, s);
            a.each(function () {
                h("#" + this.href.split("#")[1]).hide();
            });
            var c = !1;
            return (
                (c = a.filter("." + r.selected)).length ||
                    ("number" == typeof r.start &&
                        (c = a.eq(r.start)).length) ||
                    ("string" == typeof r.start &&
                        (c = a.filter("[href*='#" + r.start + "']")).length),
                c && (c.removeClass(r.selected), c.trigger(r.event)),
                r
            );
        }),
        (h.idTabs.settings = {
            start: 0,
            change: !1,
            click: null,
            selected: ".selected",
            event: "!click",
        }),
        (h.idTabs.version = "2.2"),
        h(function () {
            h(".idTabs").idTabs();
        });
})(jQuery);
!(function (a) {
    "use strict";
    var b = function (a) {
            return a;
        },
        c = function (b) {
            return a.isArray(b);
        },
        d = function (a) {
            return !c(a) && a instanceof Object;
        },
        g = function (b, c) {
            return a.inArray(c, b);
        },
        h = function (a, b) {
            return g(a, b) !== -1;
        },
        i = function (a, b) {
            for (var c in a) a.hasOwnProperty(c) && b(a[c], c, a);
        },
        j = function (a) {
            return a[a.length - 1];
        },
        k = function (a) {
            return Array.prototype.slice.call(a);
        },
        l = function () {
            var a = {};
            return (
                i(k(arguments), function (b) {
                    i(b, function (b, c) {
                        a[c] = b;
                    });
                }),
                a
            );
        },
        m = function (a, b) {
            var c = [];
            return (
                i(a, function (a, d, e) {
                    c.push(b(a, d, e));
                }),
                c
            );
        },
        n = function (a, b, c) {
            var d = {};
            return (
                i(a, function (a, e, f) {
                    (e = c ? c(e, a) : e), (d[e] = b(a, e, f));
                }),
                d
            );
        },
        o = function (a, b, d) {
            return c(a) ? m(a, b) : n(a, b, d);
        },
        p = function (a, b) {
            return o(a, function (a) {
                return a[b];
            });
        },
        q = function (a, b) {
            var d;
            return (
                c(a)
                    ? ((d = []),
                      i(a, function (a, c, e) {
                          b(a, c, e) && d.push(a);
                      }))
                    : ((d = {}),
                      i(a, function (a, c, e) {
                          b(a, c, e) && (d[c] = a);
                      })),
                d
            );
        },
        r = function (a, b, c) {
            return o(a, function (a, d) {
                return a[b].apply(a, c || []);
            });
        },
        t = function (a) {
            a = a || {};
            var b = {};
            return (
                (a.publish = function (a, c) {
                    i(b[a], function (a) {
                        a(c);
                    });
                }),
                (a.subscribe = function (a, c) {
                    (b[a] = b[a] || []), b[a].push(c);
                }),
                (a.unsubscribe = function (a) {
                    i(b, function (b) {
                        var c = g(b, a);
                        c !== -1 && b.splice(c, 1);
                    });
                }),
                a
            );
        };
    !(function (a) {
        var b = function (a, b) {
                var c = t(),
                    d = a.$;
                return (
                    (c.getType = function () {
                        throw 'implement me (return type. "text", "radio", etc.)';
                    }),
                    (c.$ = function (a) {
                        return a ? d.find(a) : d;
                    }),
                    (c.disable = function () {
                        c.$().prop("disabled", !0), c.publish("isEnabled", !1);
                    }),
                    (c.enable = function () {
                        c.$().prop("disabled", !1), c.publish("isEnabled", !0);
                    }),
                    (b.equalTo = function (a, b) {
                        return a === b;
                    }),
                    (b.publishChange = (function () {
                        var a;
                        return function (d, e) {
                            var f = c.get();
                            b.equalTo(f, a) ||
                                c.publish("change", { e: d, domElement: e }),
                                (a = f);
                        };
                    })()),
                    c
                );
            },
            e = function (a, c) {
                var d = b(a, c);
                return (
                    (d.get = function () {
                        return d.$().val();
                    }),
                    (d.set = function (a) {
                        d.$().val(a);
                    }),
                    (d.clear = function () {
                        d.set("");
                    }),
                    (c.buildSetter = function (a) {
                        return function (b) {
                            a.call(d, b);
                        };
                    }),
                    d
                );
            },
            f = function (a, b) {
                (a = c(a) ? a : [a]), (b = c(b) ? b : [b]);
                var d = !0;
                return (
                    a.length !== b.length
                        ? (d = !1)
                        : i(a, function (a) {
                              h(b, a) || (d = !1);
                          }),
                    d
                );
            },
            k = function (a) {
                var b = {},
                    c = e(a, b);
                return (
                    (c.getType = function () {
                        return "button";
                    }),
                    c.$().on("change", function (a) {
                        b.publishChange(a, this);
                    }),
                    c
                );
            },
            l = function (b) {
                var d = {},
                    g = e(b, d);
                return (
                    (g.getType = function () {
                        return "checkbox";
                    }),
                    (g.get = function () {
                        var b = [];
                        return (
                            g
                                .$()
                                .filter(":checked")
                                .each(function () {
                                    b.push(a(this).val());
                                }),
                            b
                        );
                    }),
                    (g.set = function (b) {
                        (b = c(b) ? b : [b]),
                            g.$().each(function () {
                                a(this).prop("checked", !1);
                            }),
                            i(b, function (a) {
                                g.$()
                                    .filter('[value="' + a + '"]')
                                    .prop("checked", !0);
                            });
                    }),
                    (d.equalTo = f),
                    g.$().change(function (a) {
                        d.publishChange(a, this);
                    }),
                    g
                );
            },
            m = function (a) {
                var b = {},
                    c = x(a, b);
                return (
                    (c.getType = function () {
                        return "email";
                    }),
                    c
                );
            },
            n = function (c) {
                var d = {},
                    e = b(c, d);
                return (
                    (e.getType = function () {
                        return "file";
                    }),
                    (e.get = function () {
                        return j(e.$().val().split("\\"));
                    }),
                    (e.clear = function () {
                        this.$().each(function () {
                            a(this)
                                .wrap("<form>")
                                .closest("form")
                                .get(0)
                                .reset(),
                                a(this).unwrap();
                        });
                    }),
                    e.$().change(function (a) {
                        d.publishChange(a, this);
                    }),
                    e
                );
            },
            o = function (a) {
                var b = {},
                    c = e(a, b);
                return (
                    (c.getType = function () {
                        return "hidden";
                    }),
                    c.$().change(function (a) {
                        b.publishChange(a, this);
                    }),
                    c
                );
            },
            p = function (c) {
                var d = {},
                    e = b(c, d);
                return (
                    (e.getType = function () {
                        return "file[multiple]";
                    }),
                    (e.get = function () {
                        var c,
                            a = e.$().get(0).files || [],
                            b = [];
                        for (c = 0; c < (a.length || 0); c += 1)
                            b.push(a[c].name);
                        return b;
                    }),
                    (e.clear = function () {
                        this.$().each(function () {
                            a(this)
                                .wrap("<form>")
                                .closest("form")
                                .get(0)
                                .reset(),
                                a(this).unwrap();
                        });
                    }),
                    e.$().change(function (a) {
                        d.publishChange(a, this);
                    }),
                    e
                );
            },
            q = function (a) {
                var b = {},
                    d = e(a, b);
                return (
                    (d.getType = function () {
                        return "select[multiple]";
                    }),
                    (d.get = function () {
                        return d.$().val() || [];
                    }),
                    (d.set = function (a) {
                        d.$().val("" === a ? [] : c(a) ? a : [a]);
                    }),
                    (b.equalTo = f),
                    d.$().change(function (a) {
                        b.publishChange(a, this);
                    }),
                    d
                );
            },
            s = function (a) {
                var b = {},
                    c = x(a, b);
                return (
                    (c.getType = function () {
                        return "password";
                    }),
                    c
                );
            },
            u = function (b) {
                var c = {},
                    d = e(b, c);
                return (
                    (d.getType = function () {
                        return "radio";
                    }),
                    (d.get = function () {
                        return d.$().filter(":checked").val() || null;
                    }),
                    (d.set = function (b) {
                        b
                            ? d
                                  .$()
                                  .filter('[value="' + b + '"]')
                                  .prop("checked", !0)
                            : d.$().each(function () {
                                  a(this).prop("checked", !1);
                              });
                    }),
                    d.$().change(function (a) {
                        c.publishChange(a, this);
                    }),
                    d
                );
            },
            v = function (a) {
                var b = {},
                    c = e(a, b);
                return (
                    (c.getType = function () {
                        return "range";
                    }),
                    c.$().change(function (a) {
                        b.publishChange(a, this);
                    }),
                    c
                );
            },
            w = function (a) {
                var b = {},
                    c = e(a, b);
                return (
                    (c.getType = function () {
                        return "select";
                    }),
                    c.$().change(function (a) {
                        b.publishChange(a, this);
                    }),
                    c
                );
            },
            x = function (a) {
                var b = {},
                    c = e(a, b);
                return (
                    (c.getType = function () {
                        return "text";
                    }),
                    c.$().on("change keyup keydown", function (a) {
                        b.publishChange(a, this);
                    }),
                    c
                );
            },
            y = function (a) {
                var b = {},
                    c = e(a, b);
                return (
                    (c.getType = function () {
                        return "textarea";
                    }),
                    c.$().on("change keyup keydown", function (a) {
                        b.publishChange(a, this);
                    }),
                    c
                );
            },
            z = function (a) {
                var b = {},
                    c = x(a, b);
                return (
                    (c.getType = function () {
                        return "url";
                    }),
                    c
                );
            },
            A = function (b) {
                var c = {},
                    e = b.$,
                    f = b.constructorOverride || {
                        button: k,
                        text: x,
                        url: z,
                        email: m,
                        password: s,
                        range: v,
                        textarea: y,
                        select: w,
                        "select[multiple]": q,
                        radio: u,
                        checkbox: l,
                        file: n,
                        "file[multiple]": p,
                        hidden: o,
                    },
                    h = function (b, g) {
                        var h = d(g) ? g : e.find(g);
                        h.each(function () {
                            var d = a(this).attr("name");
                            c[d] = f[b]({ $: a(this) });
                        });
                    },
                    j = function (b, h) {
                        var j = [],
                            k = d(h) ? h : e.find(h);
                        d(h)
                            ? (c[k.attr("name")] = f[b]({ $: k }))
                            : (k.each(function () {
                                  g(j, a(this).attr("name")) === -1 &&
                                      j.push(a(this).attr("name"));
                              }),
                              i(j, function (a) {
                                  c[a] = f[b]({
                                      $: e.find('input[name="' + a + '"]'),
                                  });
                              }));
                    };
                return (
                    e.is("input, select, textarea")
                        ? e.is(
                              'input[type="button"], button, input[type="submit"]'
                          )
                            ? h("button", e)
                            : e.is("textarea")
                            ? h("textarea", e)
                            : e.is('input[type="text"]') ||
                              (e.is("input") && !e.attr("type"))
                            ? h("text", e)
                            : e.is('input[type="password"]')
                            ? h("password", e)
                            : e.is('input[type="email"]')
                            ? h("email", e)
                            : e.is('input[type="url"]')
                            ? h("url", e)
                            : e.is('input[type="range"]')
                            ? h("range", e)
                            : e.is("select")
                            ? e.is("[multiple]")
                                ? h("select[multiple]", e)
                                : h("select", e)
                            : e.is('input[type="file"]')
                            ? e.is("[multiple]")
                                ? h("file[multiple]", e)
                                : h("file", e)
                            : e.is('input[type="hidden"]')
                            ? h("hidden", e)
                            : e.is('input[type="radio"]')
                            ? j("radio", e)
                            : e.is('input[type="checkbox"]')
                            ? j("checkbox", e)
                            : h("text", e)
                        : (h(
                              "button",
                              'input[type="button"], button, input[type="submit"]'
                          ),
                          h("text", 'input[type="text"]'),
                          h("password", 'input[type="password"]'),
                          h("email", 'input[type="email"]'),
                          h("url", 'input[type="url"]'),
                          h("range", 'input[type="range"]'),
                          h("textarea", "textarea"),
                          h("select", "select:not([multiple])"),
                          h("select[multiple]", "select[multiple]"),
                          h("file", 'input[type="file"]:not([multiple])'),
                          h("file[multiple]", 'input[type="file"][multiple]'),
                          h("hidden", 'input[type="hidden"]'),
                          j("radio", 'input[type="radio"]'),
                          j("checkbox", 'input[type="checkbox"]')),
                    c
                );
            };
        (a.fn.inputVal = function (b) {
            var c = a(this),
                d = A({ $: c });
            return c.is("input, textarea, select")
                ? "undefined" == typeof b
                    ? d[c.attr("name")].get()
                    : (d[c.attr("name")].set(b), c)
                : "undefined" == typeof b
                ? r(d, "get")
                : (i(b, function (a, b) {
                      d[b].set(a);
                  }),
                  c);
        }),
            (a.fn.inputOnChange = function (b) {
                var c = a(this),
                    d = A({ $: c });
                return (
                    i(d, function (a) {
                        a.subscribe("change", function (a) {
                            b.call(a.domElement, a.e);
                        });
                    }),
                    c
                );
            }),
            (a.fn.inputDisable = function () {
                var b = a(this);
                return r(A({ $: b }), "disable"), b;
            }),
            (a.fn.inputEnable = function () {
                var b = a(this);
                return r(A({ $: b }), "enable"), b;
            }),
            (a.fn.inputClear = function () {
                var b = a(this);
                return r(A({ $: b }), "clear"), b;
            });
    })(jQuery),
        (a.fn.repeaterVal = function () {
            var b = function (a) {
                    var b = [];
                    return (
                        i(a, function (a, c) {
                            var d = [];
                            "undefined" !== c &&
                                (d.push(c.match(/^[^\[]*/)[0]),
                                (d = d.concat(
                                    o(c.match(/\[[^\]]*\]/g), function (a) {
                                        return a.replace(/[\[\]]/g, "");
                                    })
                                )),
                                b.push({ val: a, key: d }));
                        }),
                        b
                    );
                },
                c = function (a) {
                    if (
                        1 === a.length &&
                        (0 === a[0].key.length ||
                            (1 === a[0].key.length && !a[0].key[0]))
                    )
                        return a[0].val;
                    i(a, function (a) {
                        a.head = a.key.shift();
                    });
                    var d,
                        b = (function () {
                            var b = {};
                            return (
                                i(a, function (a) {
                                    b[a.head] || (b[a.head] = []),
                                        b[a.head].push(a);
                                }),
                                b
                            );
                        })();
                    return (
                        /^[0-9]+$/.test(a[0].head)
                            ? ((d = []),
                              i(b, function (a) {
                                  d.push(c(a));
                              }))
                            : ((d = {}),
                              i(b, function (a, b) {
                                  d[b] = c(a);
                              })),
                        d
                    );
                };
            return c(b(a(this).inputVal()));
        }),
        (a.fn.repeater = function (c) {
            c = c || {};
            var d;
            return (
                a(this).each(function () {
                    var e = a(this),
                        f =
                            c.show ||
                            function () {
                                a(this).show();
                            },
                        g =
                            c.hide ||
                            function (a) {
                                a();
                            },
                        h = e.find("[data-repeater-list]").first(),
                        k = function (b, c) {
                            return b.filter(function () {
                                return (
                                    !c ||
                                    0 ===
                                        a(this).closest(
                                            p(c, "selector").join(",")
                                        ).length
                                );
                            });
                        },
                        m = function () {
                            return k(
                                h.find("[data-repeater-item]"),
                                c.repeaters
                            );
                        },
                        n = h
                            .find("[data-repeater-item]")
                            .first()
                            .clone()
                            .hide(),
                        r = k(
                            k(a(this).find("[data-repeater-item]"), c.repeaters)
                                .first()
                                .find("[data-repeater-delete]"),
                            c.repeaters
                        );
                    c.isFirstItemUndeletable && r && r.remove();
                    var s = function () {
                            var a = h.data("repeater-list");
                            return c.$parent
                                ? c.$parent.data("item-name") + "[" + a + "]"
                                : a;
                        },
                        t = function (b) {
                            c.repeaters &&
                                b.each(function () {
                                    var b = a(this);
                                    i(c.repeaters, function (a) {
                                        b.find(a.selector).repeater(
                                            l(a, { $parent: b })
                                        );
                                    });
                                });
                        },
                        u = function (a, b, c) {
                            a &&
                                i(a, function (a) {
                                    c.call(b.find(a.selector)[0], a);
                                });
                        },
                        v = function (b, c, d) {
                            b.each(function (b) {
                                var e = a(this);
                                e.data("item-name", c + "[" + b + "]"),
                                    k(e.find("[name]"), d).each(function () {
                                        var f = a(this),
                                            g = f
                                                .attr("name")
                                                .match(/\[[^\]]+\]/g),
                                            h = g
                                                ? j(g).replace(/\[|\]/g, "")
                                                : f.attr("name"),
                                            i =
                                                c +
                                                "[" +
                                                b +
                                                "][" +
                                                h +
                                                "]" +
                                                (f.is(":checkbox") ||
                                                f.attr("multiple")
                                                    ? "[]"
                                                    : "");
                                        f.attr("name", i),
                                            u(d, e, function (d) {
                                                var e = a(this);
                                                v(
                                                    k(
                                                        e.find(
                                                            "[data-repeater-item]"
                                                        ),
                                                        d.repeaters || []
                                                    ),
                                                    c +
                                                        "[" +
                                                        b +
                                                        "][" +
                                                        e
                                                            .find(
                                                                "[data-repeater-list]"
                                                            )
                                                            .first()
                                                            .data(
                                                                "repeater-list"
                                                            ) +
                                                        "]",
                                                    d.repeaters
                                                );
                                            });
                                    });
                            }),
                                h
                                    .find("input[name][checked]")
                                    .removeAttr("checked")
                                    .prop("checked", !0);
                        };
                    v(m(), s(), c.repeaters),
                        t(m()),
                        c.initEmpty && m().remove(),
                        c.ready &&
                            c.ready(function () {
                                v(m(), s(), c.repeaters);
                            });
                    var w = (function () {
                            var d = function (e, f, g) {
                                if (f || c.defaultValues) {
                                    var h = {};
                                    k(e.find("[name]"), g).each(function () {
                                        var b = a(this)
                                            .attr("name")
                                            .match(/\[([^\]]*)(\]|\]\[\])$/)[1];
                                        h[b] = a(this).attr("name");
                                    }),
                                        e.inputVal(
                                            o(
                                                q(
                                                    f || c.defaultValues,
                                                    function (a, b) {
                                                        return h[b];
                                                    }
                                                ),
                                                b,
                                                function (a) {
                                                    return h[a];
                                                }
                                            )
                                        );
                                }
                                u(g, e, function (b) {
                                    var c = a(this);
                                    k(
                                        c.find("[data-repeater-item]"),
                                        b.repeaters
                                    ).each(function () {
                                        var e = c
                                            .find("[data-repeater-list]")
                                            .data("repeater-list");
                                        if (f && f[e]) {
                                            var g = a(this).clone();
                                            c
                                                .find("[data-repeater-item]")
                                                .remove(),
                                                i(f[e], function (a) {
                                                    var e = g.clone();
                                                    d(e, a, b.repeaters || []),
                                                        c
                                                            .find(
                                                                "[data-repeater-list]"
                                                            )
                                                            .append(e);
                                                });
                                        } else
                                            d(
                                                a(this),
                                                b.defaultValues,
                                                b.repeaters || []
                                            );
                                    });
                                });
                            };
                            return function (b, e) {
                                h.append(b),
                                    v(m(), s(), c.repeaters),
                                    b.find("[name]").each(function () {
                                        a(this).inputClear();
                                    }),
                                    d(b, e || c.defaultValues, c.repeaters);
                            };
                        })(),
                        x = function (a) {
                            var b = n.clone();
                            w(b, a), c.repeaters && t(b), f.call(b.get(0));
                        };
                    (d = function (a) {
                        m().remove(), i(a, x);
                    }),
                        k(e.find("[data-repeater-create]"), c.repeaters).click(
                            function () {
                                x();
                            }
                        ),
                        h.on("click", "[data-repeater-delete]", function () {
                            var b = a(this)
                                .closest("[data-repeater-item]")
                                .get(0);
                            g.call(b, function () {
                                a(b).remove(), v(m(), s(), c.repeaters);
                            });
                        });
                }),
                (this.setList = d),
                this
            );
        });
})(jQuery);
!(function (r) {
    var s = "#doopostlinks",
        i = "#dooplay-ajax-counter";
    r(function () {
        return (
            1 == r("#dooplay-report-form").length &&
                (r(".report-video-checkbox").change(function () {
                    1 <= r(".report-video-checkbox:checked").length
                        ? (r("#report-video-message-field").show(),
                          r("#report-video-email-field").show(),
                          r("#report-video-button-field").show())
                        : (r("#report-video-message-field").hide(),
                          r("#report-video-email-field").hide(),
                          r("#report-video-button-field").hide());
                }),
                r(document).on("submit", "#dooplay-report-form", function () {
                    return (
                        r("#report-response-message").html(""),
                        r("#report-submit-button").prop("disabled", !0),
                        r("#dooplay-report-form").hide(),
                        r(".dooplay-report-form").addClass("onloader"),
                        r.ajax({
                            url: dtAjax.url,
                            type: "POST",
                            dataType: "json",
                            data: r(this).serialize(),
                            success: function (t) {
                                r(".dooplay-report-form").removeClass(
                                    "onloader"
                                ),
                                    1 == t.success &&
                                        (r(".report-video-error").remove(),
                                        r("#dooplay-report-form").remove(),
                                        r("#report-response-message").html(
                                            '<p class="success">' +
                                                t.message +
                                                "</p>"
                                        ),
                                        setTimeout(function () {
                                            r(
                                                "#moda-report-video-error"
                                            ).removeClass("show"),
                                                r(
                                                    "#moda-report-video-error"
                                                ).addClass("hidde");
                                        }, 3e3)),
                                    0 == t.success &&
                                        (r("#report-response-message").html(
                                            '<p class="error jump">' +
                                                t.message +
                                                "</p>"
                                        ),
                                        r("#report-submit-button").prop(
                                            "disabled",
                                            !1
                                        ));
                            },
                        }),
                        !1
                    );
                })),
            1 == r("#dooplay-contact-form").length &&
                r(document).on("submit", "#dooplay-contact-form", function () {
                    return (
                        r("#contact-response-message").html(""),
                        r("#contact-submit-button").prop("disabled", !0),
                        r.ajax({
                            url: dtAjax.url,
                            type: "POST",
                            dataType: "json",
                            data: r(this).serialize(),
                            success: function (t) {
                                1 == t.success &&
                                    (r("#contact-response-message").html(
                                        '<div class="notice success animation-3"><p>' +
                                            t.message +
                                            "</p></div>"
                                    ),
                                    r("#contact-subject").val(""),
                                    r("#contact-message").val(""),
                                    r("#contact-link").val("")),
                                    0 == t.success &&
                                        r("#contact-response-message").html(
                                            '<div class="notice error animation-3"><p>' +
                                                t.message +
                                                "</p></div>"
                                        ),
                                    r("#contact-submit-button").prop(
                                        "disabled",
                                        !1
                                    ),
                                    e(),
                                    setTimeout(function () {
                                        r("#contact-response-message").html("");
                                    }, 1e4);
                            },
                        }),
                        !1
                    );
                }),
            r(document).on("click", ".report-video-error", function () {
                return (
                    r("#moda-report-video-error").removeClass("hidde"),
                    r("#moda-report-video-error").addClass("show"),
                    !1
                );
            }),
            r(document).on("click", ".close-modal-report", function () {
                return (
                    r("#moda-report-video-error").removeClass("show"),
                    r("#moda-report-video-error").addClass("hidde"),
                    !1
                );
            }),
            1 == r("#dooplay_player_big_content").length &&
                r("#playcontainer").appendTo("#dooplay_player_big_content"),
            1 == r("#dooplay-reCAPTCHA-response").length && dtAjax.googlercptc
                ? e()
                : (1 == r(i).length &&
                      ((a = r(i).data("postid")),
                      setTimeout(function () {
                          r.ajax({
                              url: dtAjax.url,
                              type: "POST",
                              dataType: "json",
                              data: {
                                  action: "dooplay_viewcounter",
                                  post_id: a,
                              },
                              success: function (t) {
                                  1 == t.success &&
                                      ((t = t.counting + " " + dtAjax.views),
                                      r("#playernotice").attr("data-text", t),
                                      r("#playernotice").html(t));
                              },
                          });
                      }, t(1500, 3e3))),
                  r(document).on("click", ".reco", function () {
                      r(".reco").addClass("recox"),
                          r(".recox").removeClass("reco"),
                          r.ajax({
                              url: dtAjax.url,
                              type: "get",
                              data: { action: "dtpcookie_save" },
                          });
                  }),
                  r(document).on("click", ".recox", function () {
                      r(".recox").addClass("reco"),
                          r(".reco").removeClass("recox"),
                          r.ajax({
                              url: dtAjax.url,
                              type: "get",
                              data: { action: "dtpcookie_update" },
                          });
                  }),
                  r(document).on("click", ".load_list_favorites", function () {
                      var e = r(this),
                          t = e.data("page"),
                          a = t + 1,
                          o = e.data("user"),
                          s = e.data("type"),
                          n = e.data("template"),
                          i = dtAjax.url;
                      r("#items_movies").addClass("loadingpage"),
                          r.ajax({
                              url: i,
                              type: "post",
                              data: {
                                  page: t,
                                  typepost: s,
                                  user: o,
                                  template: n,
                                  action: "next_page_list",
                              },
                              error: function (t) {
                                  console.log(t);
                              },
                              success: function (t) {
                                  e.data("page", a),
                                      r("#items_movies").append(t),
                                      r("#items_movies").removeClass(
                                          "loadingpage"
                                      );
                              },
                          });
                  }),
                  r(document).on("click", ".delete_notice", function () {
                      var t = r(this).data("id"),
                          e = dtAjax.url;
                      r.ajax({
                          url: e,
                          type: "post",
                          data: { id: t, action: "delete_notice_report" },
                          error: function (t) {
                              console.log("Error");
                          },
                          success: function (t) {
                              console.log("Deleted"),
                                  r(".reports_notice_admin").hide();
                          },
                      });
                  }),
                  r(document).on("click", "#update_imdb_rating", function () {
                      var t = r(this),
                          e = t.data("id"),
                          a = t.data("imdb"),
                          t = dtAjax.url;
                      r("#repimdb").html(
                          '<i class="fad fa-spinner-third fa-spin"></i>&nbsp;&nbsp;' +
                              dtAjax.updating
                      ),
                          r.ajax({
                              url: t,
                              type: "post",
                              data: {
                                  id: e,
                                  imdb: a,
                                  action: "dbmovies_updatedimdb",
                              },
                              error: function (t) {
                                  console.log(t);
                              },
                              success: function (t) {
                                  r("#repimdb").html(t);
                              },
                          });
                  }),
                  r(document).on("click", ".dt_social", function () {
                      var t = r(this).data("id"),
                          e = dtAjax.url;
                      r.ajax({
                          url: e,
                          type: "post",
                          data: { id: t, action: "dt_social_count" },
                          error: function (t) {
                              console.log(t);
                          },
                          success: function (t) {
                              r("#social_count").html(t);
                          },
                      });
                  }),
                  r(document).on("click", ".facebook", function () {
                      r(".facebook").removeClass("dt_social");
                  }),
                  r(document).on("click", ".twitter", function () {
                      r(".twitter").removeClass("dt_social");
                  }),
                  r(document).on("click", ".google", function () {
                      r(".google").removeClass("dt_social");
                  }),
                  r(document).on("click", ".pinterest", function () {
                      r(".pinterest").removeClass("dt_social");
                  }),
                  r(document).on("click", ".whatsapp", function () {
                      r(".whatsapp").removeClass("dt_social");
                  }),
                  r(document).on("click", ".load_list_views", function () {
                      var e = r(this),
                          t = e.data("page"),
                          a = t + 1,
                          o = e.data("user"),
                          s = e.data("type"),
                          n = e.data("template"),
                          i = dtAjax.url;
                      r("#items_views").addClass("loadingpage"),
                          r.ajax({
                              url: i,
                              type: "post",
                              data: {
                                  page: t,
                                  typepost: s,
                                  template: n,
                                  user: o,
                                  action: "next_page_list",
                              },
                              error: function (t) {
                                  console.log(t);
                              },
                              success: function (t) {
                                  e.data("page", a),
                                      r("#items_views").append(t),
                                      r("#items_views").removeClass(
                                          "loadingpage"
                                      );
                              },
                          });
                  }),
                  r(document).on("click", ".load_list_links", function () {
                      var e = r(this),
                          t = e.data("page"),
                          a = t + 1,
                          o = e.data("user"),
                          s = dtAjax.url;
                      r("#item_links").addClass("loadingpage"),
                          r.ajax({
                              url: s,
                              type: "post",
                              data: {
                                  page: t,
                                  user: o,
                                  action: "next_page_link",
                              },
                              error: function (t) {
                                  console.log(t);
                              },
                              success: function (t) {
                                  e.data("page", a),
                                      r("#item_links").append(t),
                                      r("#item_links").removeClass(
                                          "loadingpage"
                                      );
                              },
                          });
                  }),
                  r(document).on(
                      "click",
                      ".load_list_links_profile",
                      function () {
                          var e = r(this),
                              t = e.data("page"),
                              a = t + 1,
                              o = e.data("user"),
                              s = dtAjax.url;
                          r("#item_links").addClass("loadingpage"),
                              r.ajax({
                                  url: s,
                                  type: "post",
                                  data: {
                                      page: t,
                                      user: o,
                                      action: "next_page_link_profile",
                                  },
                                  error: function (t) {
                                      console.log(t);
                                  },
                                  success: function (t) {
                                      e.data("page", a),
                                          r("#item_links").append(t),
                                          r("#item_links").removeClass(
                                              "loadingpage"
                                          );
                                  },
                              });
                      }
                  ),
                  r(document).on(
                      "click",
                      ".load_admin_list_links",
                      function () {
                          var e = r(this),
                              t = e.data("page"),
                              a = t + 1,
                              o = dtAjax.url;
                          return (
                              r("#item_links_admin").addClass("loadingpage"),
                              r.ajax({
                                  url: o,
                                  type: "post",
                                  data: {
                                      page: t,
                                      action: "next_page_link_admin",
                                  },
                                  error: function (t) {
                                      console.log(t);
                                  },
                                  success: function (t) {
                                      e.data("page", a),
                                          r("#item_links_admin").append(t),
                                          r("#item_links_admin").removeClass(
                                              "loadingpage"
                                          );
                                  },
                              }),
                              !1
                          );
                      }
                  ),
                  r(document).on("click", ".control_link", function () {
                      var t = r(this);
                      return (
                          (a = t.data("id")),
                          (user_id = t.data("user")),
                          (status = t.data("status")),
                          r("#resultado_link").html(
                              '<div class="content">' +
                                  dtAjax.updating +
                                  "</div>"
                          ),
                          t.toggleClass("active"),
                          r.ajax({
                              url: dtAjax.url,
                              type: "post",
                              data: {
                                  post_id: a,
                                  user_id: user_id,
                                  status: status,
                                  action: "control_link_user",
                              },
                              error: function (t) {
                                  console.log(t);
                              },
                              success: function (t) {
                                  r("#resultado_link").html(
                                      '<div class="content">' + t + "</div>"
                                  ),
                                      r("#" + a + " > .metas").removeClass(
                                          "trash"
                                      ),
                                      r("#" + a + " > .metas").removeClass(
                                          "pending"
                                      ),
                                      r("#" + a + " > .metas").removeClass(
                                          "publish"
                                      ),
                                      r("#" + a + " > .metas").addClass(status);
                              },
                          }),
                          !1
                      );
                  }),
                  r(document).on("click", ".control_admin_link", function () {
                      r("#resultado_link").html(
                          '<div class="content">' + dtAjax.updating + "</div>"
                      );
                      var t = r(this);
                      t.toggleClass("active");
                      var e = t.data("id"),
                          a = t.data("user"),
                          o = t.data("status"),
                          t = dtAjax.url;
                      return (
                          r.ajax({
                              url: t,
                              type: "post",
                              data: {
                                  post_id: e,
                                  user_id: a,
                                  status: o,
                                  action: "control_link_user",
                              },
                              error: function (t) {
                                  console.log(t);
                              },
                              success: function (t) {
                                  r("#resultado_link").html(
                                      '<div class="content">' + t + "</div>"
                                  ),
                                      r("#adm-" + e + " > .metas").removeClass(
                                          "trash"
                                      ),
                                      r("#adm-" + e + " > .metas").removeClass(
                                          "pending"
                                      ),
                                      r("#adm-" + e + " > .metas").removeClass(
                                          "publish"
                                      ),
                                      r("#adm-" + e + " > .metas").addClass(o);
                              },
                          }),
                          !1
                      );
                  }),
                  r(document).on("click", ".edit_link", function () {
                      var t = r(this).data("id"),
                          e = dtAjax.url;
                      return (
                          r.ajax({
                              url: e,
                              type: "post",
                              data: {
                                  post_id: t,
                                  action: "dooformeditor_user",
                              },
                              error: function (t) {
                                  console.log(t);
                              },
                              success: function (t) {
                                  r("#edit_link").html(
                                      '<div id="result_edit_link" class="box animation-3">' +
                                          t +
                                          "</div>"
                                  );
                              },
                          }),
                          !1
                      );
                  }),
                  r(document).on("click", ".delt_link", function () {
                      var e = r(this).data("id"),
                          t = dtAjax.url;
                      return (
                          confirm(dtAjax.deletelin) &&
                              r.ajax({
                                  url: t,
                                  type: "post",
                                  data: { id: e, action: "doofrontdeletelink" },
                                  error: function (t) {
                                      console.log(t);
                                  },
                                  success: function (t) {
                                      r("#link-" + e).remove();
                                  },
                              }),
                          !1
                      );
                  }),
                  r(document).on("click", "#admin_pending_links", function () {
                      r(this);
                      r("#adminlinks").show(),
                          r("#admin_back_links").show(),
                          r("#mylinks").hide(),
                          r("#admin_pending_links").hide(),
                          r("#text_link").html(dtAjax.ladmin);
                  }),
                  r(document).on("click", "#admin_back_links", function () {
                      r(this);
                      r("#adminlinks").hide(),
                          r("#admin_back_links").hide(),
                          r("#mylinks").show(),
                          r("#admin_pending_links").show(),
                          r("#text_link").html(dtAjax.lshared);
                  }),
                  r(document).on(
                      "submit",
                      "#doo_link_front_editor",
                      function () {
                          var t = r(this);
                          return (
                              r.ajax({
                                  url: dtAjax.url,
                                  type: "POST",
                                  data: t.serialize(),
                                  error: function (t) {
                                      console.log(t);
                                  },
                                  success: function (t) {
                                      location.reload();
                                  },
                              }),
                              !1
                          );
                      }
                  ),
                  r(document).on(
                      "click",
                      "#cerrar_form_edit_link",
                      function () {
                          r("#result_edit_link").hide();
                      }
                  ),
                  r(document).on("click", ".process_list", function () {
                      var t = r(this);
                      return (
                          (a = t.attr("data-post-id")),
                          (security = t.attr("data-nonce")),
                          r(".ucico").removeClass("fas fa-plus-circle"),
                          r(".ucico").addClass("fad fa-spinner-third fa-spin"),
                          r.ajax({
                              type: "POST",
                              url: dtAjax.url,
                              data: {
                                  action: "dt_process_list",
                                  post_id: a,
                                  nonce: security,
                              },
                              error: function (t) {
                                  console.log(t);
                              },
                              success: function (t) {
                                  r(".ucico").addClass("fas fa-plus-circle"),
                                      r(".ucico").removeClass(
                                          "fad fa-spinner-third fa-spin"
                                      ),
                                      r(".process_list").toggleClass("in-list"),
                                      r(".list-count-" + a).html(t);
                              },
                          }),
                          !1
                      );
                  }),
                  r(document).on("click", ".process_views", function () {
                      var t = r(this);
                      return (
                          (a = t.attr("data-post-id")),
                          (security = t.attr("data-nonce")),
                          r(".uvcico").removeClass("fas fa-stream"),
                          r(".uvcico").addClass("fad fa-spinner-third fa-spin"),
                          r.ajax({
                              type: "POST",
                              url: dtAjax.url,
                              data: {
                                  action: "dt_process_views",
                                  post_id: a,
                                  nonce: security,
                              },
                              error: function (t) {
                                  console.log(t);
                              },
                              success: function (t) {
                                  r(".uvcico").addClass("fas fa-stream"),
                                      r(".uvcico").removeClass(
                                          "fad fa-spinner-third fa-spin"
                                      ),
                                      r(".process_views").toggleClass(
                                          "in-views"
                                      ),
                                      r(".views-count-" + a).html(t);
                              },
                          }),
                          !1
                      );
                  }),
                  r(document).on("click", ".user_list_control", function () {
                      var t = r(this);
                      return (
                          (a = t.attr("data-postid")),
                          (security = t.attr("data-nonce")),
                          r("#p" + a).hide(),
                          r.ajax({
                              type: "POST",
                              url: dtAjax.url,
                              data: {
                                  action: "dt_process_list",
                                  post_id: a,
                                  nonce: security,
                                  total: "on",
                              },
                              success: function (t) {
                                  r(".totalfavorites_user").html(t);
                              },
                          }),
                          !1
                      );
                  }),
                  r(document).on("click", ".user_views_control", function () {
                      var t = r(this);
                      return (
                          (a = t.attr("data-postid")),
                          (security = t.attr("data-nonce")),
                          r("#v" + a).hide(),
                          r.ajax({
                              type: "POST",
                              url: dtAjax.url,
                              data: {
                                  action: "dt_process_views",
                                  post_id: a,
                                  nonce: security,
                                  total: "on",
                              },
                              success: function (t) {
                                  r(".totalviews_user").html(t);
                              },
                          }),
                          !1
                      );
                  }),
                  r(document).on(
                      "click",
                      "ul.no_ajax > li.dooplay_player_option",
                      function () {
                          var t = r(this).data("nume");
                          return (
                              r("#fakeplayer").hide(),
                              r("#playcontainer").addClass("isnd"),
                              r(".pframe > iframe").attr(
                                  "src",
                                  function (t, e) {
                                      return e;
                                  }
                              ),
                              r(this).hasClass("on") ||
                                  (r(".dooplay_player_option").removeClass(
                                      "on"
                                  ),
                                  r(".source-box").removeClass("on"),
                                  r(this).addClass("on"),
                                  r("#source-player-" + t).addClass("on")),
                              !1
                          );
                      }
                  ),
                  r(document).on(
                      "click",
                      "ul.ajax_mode > li.dooplay_player_option",
                      function () {
                          var e = r(this).data("post");
                          return (
                              (nume = r(this).data("nume")),
                              (type = r(this).data("type")),
                              (tviw = r("#playernotice").data("text")),
                              (scds = dtGonza.playeradstime),
                              r("#fakeplayer").hide(),
                              r(this).hasClass("on") ||
                                  (r(".dooplay_player_option").removeClass(
                                      "on"
                                  ),
                                  r(
                                      "#player-option-" +
                                          nume +
                                          " > span.loader"
                                  ).show(),
                                  r("#played-" + e).removeClass("animation-35"),
                                  r("#playeroptions").addClass("onload"),
                                  0 < scds &&
                                      (r("#playernotice").addClass("flashit"),
                                      r("#playernotice").html(
                                          '<b id="countdown"></b> ' +
                                              dtGonza.loadingplayer
                                      ),
                                      r("#countdown").html(scds)),
                                  r(this).addClass("on"),
                                  "admin_ajax" == dtAjax.play_method &&
                                      r.ajax({
                                          type: "POST",
                                          url: dtAjax.url,
                                          data: {
                                              action: "doo_player_ajax",
                                              post: e,
                                              nume: nume,
                                              type: type,
                                          },
                                          success: function (t) {
                                              o(t, scds, nume, e, tviw);
                                          },
                                      }),
                                  "wp_json" == dtAjax.play_method &&
                                      r.getJSON(
                                          dtAjax.player_api +
                                              e +
                                              "/" +
                                              type +
                                              "/" +
                                              nume,
                                          function (t) {
                                              o(t, scds, nume, e, tviw);
                                          }
                                      )),
                              !1
                          );
                      }
                  ),
                  1 == r("#player-option-1").length &&
                      1 == dtGonza.autoplayer &&
                      setTimeout(function () {
                          r("#player-option-1").trigger("click");
                      }, t(100, 700)),
                  1 == r(s).length &&
                      (r(s).repeater({
                          defaultValues: { type: dtAjax.ltipe },
                          show: function () {
                              r(this).fadeIn("fast");
                          },
                          hide: function (t) {
                              r(this).fadeOut("fast", function () {
                                  r(this).slideUp(t);
                              });
                          },
                      }),
                      r(document).on("submit", s, function () {
                          return (
                              r("#resultado_link_form").html(
                                  '<div class="msg"><i class="fas fa-circle-notch fa-spin"></i>' +
                                      dtAjax.sending +
                                      "</div>"
                              ),
                              r(".form_post_lik").hide("fast"),
                              r.ajax({
                                  type: "POST",
                                  url: dtAjax.url,
                                  dataType: "json",
                                  data: r(this).serialize(),
                                  success: function (t) {
                                      1 == t.response
                                          ? location.reload()
                                          : alert(t.message);
                                  },
                              }),
                              !1
                          );
                      })),
                  r(document).on("submit", "#dooplay_login_user", function () {
                      var e = r("#dooplay_login_btn").data("btntext");
                      return (
                          r(".login_box").removeClass("shake"),
                          r("#dooplay_login_btn").prop("disabled", !0),
                          r("#dooplay_login_btn").val(dtAjax.loading),
                          r.ajax({
                              type: "POST",
                              url: dtAjax.url,
                              dataType: "json",
                              data: r(this).serialize(),
                              success: function (t) {
                                  1 == t.response
                                      ? t.redirect
                                          ? window.location.replace(t.redirect)
                                          : location.reload()
                                      : (r(".login_box").addClass("shake"),
                                        r("#dooplay_login_btn").val(e),
                                        r("#dooplay_login_btn").prop(
                                            "disabled",
                                            !1
                                        ));
                              },
                          }),
                          !1
                      );
                  }),
                  r(document).on("click", "#dooplay_signout", function () {
                      return (
                          r.ajax({
                              type: "POST",
                              url: dtAjax.url,
                              dataType: "json",
                              data: { action: "dooplay_logout" },
                              success: function (t) {
                                  1 == t.response && location.reload();
                              },
                          }),
                          !1
                      );
                  }),
                  void r(document).on("click", "#clickfakeplayer", function () {
                      (1 == r("#player-option-1").length
                          ? r("#player-option-1")
                          : r(".dooplay_player_option:first-child")
                      ).click();
                  }))
        );
        function e() {
            r.getScript(
                "../www.google.com/recaptcha/api3398.js?render=" +
                    dtAjax.googlercptc,
                function () {
                    grecaptcha.ready(function () {
                        grecaptcha
                            .execute(dtAjax.googlercptc, {
                                action: "dooplay_authorize",
                            })
                            .then(function (t) {
                                r("#dooplay-reCAPTCHA-response").html(
                                    '<input type="hidden" name="google-recaptcha-token" value="' +
                                        t +
                                        '">'
                                );
                            });
                    });
                }
            );
        }
        var a;
        function o(t, e, a, o, s) {
            0 < e && n(),
                r("html, body").animate({ scrollTop: 0 }, 200),
                r("#player-option-" + a + " > span.loader").hide(),
                r("#played-" + o).addClass("animation-35"),
                r("#playcontainer").addClass("isnd"),
                r(".asgdc").show(),
                r("#dooplay_player_response").html(
                    '<div class="preplayer"></div>'
                ),
                setTimeout(function () {
                    r(".asgdc").hide(),
                        "dtshcode" == t.type
                            ? r("#dooplay_player_response").html(
                                  '<div class="pframe">' +
                                      t.embed_url +
                                      "</div>"
                              )
                            : r("#dooplay_player_response").html(
                                  '<div class="pframe"><iframe class="metaframe rptss" src="/api/embed.html?link=' +
                                      t.embed_url +
                                      '" frameborder="0" scrolling="no" allow="autoplay; encrypted-media" allowfullscreen></iframe></div>'
                              ),
                        r("#playeroptions").removeClass("onload"),
                        0 < e &&
                            (r("#playernotice").html(s),
                            r("#playernotice").removeClass("flashit"));
                }, 1e3 * e);
        }
        function t(t, e) {
            return Math.floor(Math.random() * (e - t + 1) + t);
        }
        function n() {
            var t,
                e = "#countdown";
            1 == r(e).length &&
                ((t = r(e).text()),
                1 != (t = parseInt(t, 10))
                    ? (t--, r(e).html(t), setTimeout(n, 1e3))
                    : r(e).remove());
        }
    });
})(jQuery);
var js = {};
!(function (n) {
    n(document).on("click", ".se-q", function () {
        var e = n(this).parents(".se-c"),
            s = e.find(".se-a"),
            e = e.find(".se-t");
        s.slideToggle(200),
            e.hasClass("se-o") ? e.removeClass("se-o") : e.addClass("se-o");
    }),
        n(document).on("click", "#top-page", function () {
            return n("html, body").animate({ scrollTop: 0 }, "slow"), !1;
        }),
        n(document).on("click", "#discoverclic", function () {
            n(this).addClass("hidde"),
                n("#closediscoverclic").removeClass("hidde"),
                n("#discover").addClass("show"),
                n("#requests").addClass("hidde"),
                n(".requests_menu").addClass("hidde"),
                n(".requests_menu_filter").removeClass("hidde");
        }),
        n(document).on("click", "#closediscoverclic", function () {
            n(this).addClass("hidde"),
                n("#discoverclic").removeClass("hidde"),
                n("#discover").removeClass("show"),
                n("#requests").removeClass("hidde"),
                n(".requests_menu_filter").addClass("hidde"),
                n(".requests_menu").removeClass("hidde");
        }),
        n(document).on("click", ".filtermenu a", function () {
            var e = n(this).attr("data-type");
            return (
                n(".filtermenu a").removeClass("active"),
                n(this).addClass("active"),
                n("#type").val(e),
                !1
            );
        }),
        n(document).on("click", ".rmenu a", function () {
            var e = n(this).attr("data-tab");
            return (
                n(".rmenu a").removeClass("active"),
                n(".tabox").removeClass("current"),
                n(this).addClass("active"),
                n("#" + e).addClass("current"),
                !1
            );
        }),
        n(document).on("click", ".clicklogin", function () {
            n(".login_box ").show();
        }),
        n(document).on("click", "#c_loginbox", function () {
            n(".login_box ").hide();
        }),
        n(document).on("click", ".nav-resp", function () {
            n("#arch-menu").toggleClass("sidblock"),
                n(".nav-resp").toggleClass("active");
        }),
        n(document).on("click", ".nav-advc", function () {
            n("#advc-menu").toggleClass("advcblock"),
                n(".nav-advc").toggleClass("dactive");
        }),
        n(document).on("click", ".report-video", function () {
            n("#report-video").toggleClass("report-video-active"),
                n(".report-video").toggleClass("report-video-dactive");
        }),
        n(document).on("click", ".adduser", function () {
            n("#register_form").toggleClass("advcblock"),
                n(".form_fondo").toggleClass("advcblock"),
                n(".adduser").toggleClass("dellink");
        }),
        n(document).on("click", ".search-resp", function () {
            n("#form-search-resp").toggleClass("formblock"),
                n(".search-resp").toggleClass("active");
        }),
        n(document).on("click", ".wide", function () {
            n("#playex").toggleClass("fullplayer"),
                n(".sidebar").toggleClass("fullsidebar"),
                n(".icons-enlarge2").toggleClass("icons-shrink2");
        }),
        n(document).on("click", ".sources", function () {
            n(".sourceslist").toggleClass("sourcesfix"),
                n(".listsormenu").toggleClass("icon-close2");
        }),
        n(document).keyup(function (e) {
            27 == e.keyCode &&
                (n(".login_box").hide(100),
                n("#result_edit_link").hide(100),
                n("#report-video").removeClass("report-video-active"),
                n("#moda-report-video-error").removeClass("show"),
                n("#moda-report-video-error").addClass("hidde"));
        }),
        n.each(
            [
                "#tvload",
                "#movload",
                "#featload",
                "#epiload",
                "#seaload",
                "#slallload",
                "#sltvload",
                "#slmovload",
                ".genreload",
            ],
            function (e, s) {
                1 <= n(s).length &&
                    (n(".content").ready(function () {
                        n(s).css("display", "none");
                    }),
                    n(".content").load(function () {
                        n(s).css("display", "none");
                    }));
            }
        );
    for (var e = 0, s = n(".items .item"), o = 0; o <= s.length; o++)
        3 < e
            ? (n(".items .item:nth-child(" + o + ") .dtinfo").addClass("right"),
              dtAjax.classitem > e ? e++ : (e--, e--, e--, e--))
            : (n(".items .item:nth-child(" + o + ") .dtinfo").addClass("left"),
              e++);
    (n.fn.exists = function () {
        return 0 < e(this).length;
    }),
        (js.model = {
            events: {},
            extend: function (e) {
                var o = n.extend({}, this, e);
                return (
                    n.each(o.events, function (e, s) {
                        o._add_event(e, s);
                    }),
                    o
                );
            },
            _add_event: function (e, s) {
                var o = this,
                    t = e,
                    i = "",
                    a = document;
                0 < e.indexOf(" ") &&
                    ((t = e.substr(0, e.indexOf(" "))),
                    (i = e.substr(e.indexOf(" ") + 1))),
                    ("resize" != t && "scroll" != t) || (a = window),
                    n(a).on(t, i, function (e) {
                        (e.$el = n(this)),
                            "function" == typeof o.event && (e = o.event(e)),
                            o[s].apply(o, [e]);
                    });
            },
        });
})(jQuery);
!(function (n) {
    var e,
        s = function (s, a) {
            clearTimeout(e), (e = setTimeout(s, a));
        },
        a = !1;
    function t() {
        var s = n("#term").val(),
            a = n("#page").val(),
            e = n("#type").val(),
            t = n("#nonce").val(),
            i = n("#action").val();
        n("#get_requests")
            .find("span")
            .addClass("fa-spinner-third")
            .addClass("fa-spin"),
            n.ajax({
                url: dtAjax.url,
                type: "POST",
                data: { type: e, term: s, page: a, nonce: t, action: i },
                error: function (s) {
                    console.log(s);
                },
                success: function (s) {
                    n("#get_requests")
                        .find("span")
                        .removeClass("fa-spinner-third")
                        .removeClass("fa-spin"),
                        n("#discover_results").html(s),
                        n(".get_content_dbmovies").click(function () {
                            var a,
                                s = n(this).data("id"),
                                e = n(this).data("type"),
                                t = n(this).data("nonce");
                            (e = e),
                                (t = t),
                                n("#tmdb-" + (a = s)).html(
                                    '<div class="itm-exists">' +
                                        dtAjax.loading +
                                        "</div>"
                                ),
                                n.ajax({
                                    url: dtAjax.url,
                                    type: "POST",
                                    data: {
                                        id: a,
                                        type: e,
                                        nonce: t,
                                        action: "dbmovies_post_requests",
                                    },
                                    error: function (s) {
                                        console.log(s);
                                    },
                                    success: function (s) {
                                        console.log(s),
                                            n("#tmdb-" + a).html(
                                                '<div class="itm-exists">' +
                                                    dtAjax.ready +
                                                    "</div>"
                                            );
                                    },
                                });
                        });
                },
            });
    }
    (enterActive = !(e = 0)),
        n('input[name="s"]').on("input", function () {
            var i = this.value;
            s(function () {
                return i.length <= 2
                    ? (n(dtGonza.area).hide(),
                      void n(dtGonza.button)
                          .find("span")
                          .removeClass("fa-spinner-third")
                          .removeClass("fa-spin"))
                    : void (
                          a ||
                          ((a = !0),
                          1 == dtGonza.livesearchactive &&
                              (n(dtGonza.button)
                                  .find("span")
                                  .addClass("fa-spinner-third")
                                  .addClass("fa-spin"),
                              n(dtGonza.area)
                                  .find("ul")
                                  .addClass("process")
                                  .addClass("noselect"),
                              n.ajax({
                                  type: "GET",
                                  url: dtGonza.api,
                                  data:
                                      "keyword=" +
                                      i +
                                      "&nonce=" +
                                      dtGonza.nonce,
                                  dataType: "json",
                                  success: function (s) {
                                      var a, e, t;
                                      s.error
                                          ? n(dtGonza.area).hide()
                                          : (n(dtGonza.area).show(),
                                            (e =
                                                '<span class="icon-search-1">' +
                                                i +
                                                "</span>"),
                                            (e =
                                                '<li class="ctsx"><a class="more live_search_click" data-search="searchform">' +
                                                (a = dtGonza.more.replace(
                                                    "%s",
                                                    e
                                                )) +
                                                "</a></li>"),
                                            (moreText2 =
                                                '<li class="ctsv"><a class="more live_search_click" data-search="form-search-resp">' +
                                                a +
                                                "</a></li>"),
                                            (t = []),
                                            n.each(s, function (s, a) {
                                                (name = ""),
                                                    (date = ""),
                                                    (imdb = ""),
                                                    !1 !== a.extra.date &&
                                                        (date =
                                                            '<span class="release">(' +
                                                            a.extra.date +
                                                            ")</span>"),
                                                    !1 !== a.extra.imdb &&
                                                        (imdb =
                                                            '<div class="imdb"><span class="fas fa-star"></span> ' +
                                                            a.extra.imdb +
                                                            "</div>"),
                                                    t.push(
                                                        '<li id="' +
                                                            s +
                                                            '"><a href="' +
                                                            a.url +
                                                            '" class="clearfix"><div class="poster"><img src="' +
                                                            a.img +
                                                            '" /></div><div class="title">' +
                                                            a.title +
                                                            date +
                                                            "</div>" +
                                                            imdb +
                                                            "</a></li>"
                                                    );
                                            }),
                                            n(dtGonza.area).html(
                                                "<ul>" +
                                                    t.join("") +
                                                    e +
                                                    "</ul>"
                                            ));
                                  },
                                  complete: function () {
                                      (enterActive = a = !1),
                                          n(dtGonza.button)
                                              .find("span")
                                              .removeClass("fa-spinner-third")
                                              .removeClass("fa-spin"),
                                          n(dtGonza.area)
                                              .find("ul")
                                              .removeClass("process")
                                              .removeClass("noselect");
                                  },
                              })))
                      );
            }, 500);
        }),
        n(document).on("click", ".live_search_click", function () {
            var s = n(this).data("search");
            0 != s && n("#" + s).submit();
        }),
        n(document).on("keypress", "#search-form", function (s) {
            if (enterActive) return 13 != s.keyCode;
        }),
        n(document).click(function () {
            n(event.target);
            0 == n(event.target).closest('input[name="s"]').length
                ? n(dtGonza.area).hide()
                : n(dtGonza.area).show(),
                0 == n(event.target).closest(".lglossary").length
                    ? (n(".items_glossary").hide(),
                      n(".lglossary").removeClass("active"))
                    : n(".items_glossary").show();
        }),
        n(document).on("click", ".post-request", function () {
            n(".post_request").show(),
                n("#post_request_archive").html(
                    '<div class="load_event">' + dtAjax.loading + "</div>"
                );
            var s = n(this).data("id");
            n.ajax({
                url: dtAjax.url,
                type: "POST",
                data: { id: s, action: "dbmovies_post_archive" },
                error: function (s) {
                    console.log(s);
                },
                success: function (s) {
                    n("#post_request_archive").html(s),
                        n(".backdrop").click(function () {
                            n(".post_request").hide();
                        });
                },
            });
        }),
        n("#discover_requests").keyup(function () {
            return (
                s(function () {
                    t();
                }, 500),
                !1
            );
        }),
        n("#discover_requests").submit(function () {
            return t(), !1;
        }),
        n(document).on("click", ".lglossary", function () {
            var s = n(this).data("glossary"),
                a = n(this).data("type");
            n(".lglossary").removeClass("active"),
                n(this).addClass("active"),
                n(".items_glossary").show(),
                n(".items_glossary").html('<div class="onloader"></div>'),
                n.ajax({
                    type: "GET",
                    url: dtGonza.glossary,
                    data:
                        "term=" + s + "&nonce=" + dtGonza.nonce + "&type=" + a,
                    dataType: "json",
                    success: function (s) {
                        if (s.error)
                            return (
                                n(".items_glossary").hide(),
                                void n(".lglossary").removeClass("active")
                            );
                        n(".items_glossary").show();
                        var e = [];
                        n.each(s, function (s, a) {
                            (imdb = ""),
                                !1 !== a.imdb &&
                                    (imdb =
                                        '<div class="rating"><i class="fas fa-star"></i> ' +
                                        a.imdb +
                                        "</div>"),
                                e.push(
                                    '<div id="' +
                                        s +
                                        '" class="item"><a href="' +
                                        a.url +
                                        '"><div class="poster"><img src="' +
                                        a.img +
                                        '"/>' +
                                        imdb +
                                        '</div></a><div class="data"><h3>' +
                                        a.title +
                                        "</h3><span>" +
                                        a.year +
                                        "</span></div></div>"
                                );
                        }),
                            n(".items_glossary").html(
                                '<div class="items animation-2">' +
                                    e.join("") +
                                    "</div>"
                            );
                    },
                });
        }),
        n(document).keyup(function (s) {
            27 == s.keyCode &&
                (n(".post_request").hide(),
                n(".items_glossary").hide(),
                n(".items_glossary").html(" "),
                n(".lglossary").removeClass("active")),
                39 == s.keyCode && n("#nextpagination").trigger("click"),
                37 == s.keyCode && n("#prevpagination").trigger("click");
        });
})(jQuery);
