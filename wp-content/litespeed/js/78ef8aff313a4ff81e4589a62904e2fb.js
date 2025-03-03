/*! This file is auto-generated */
( () => {
    "use strict";
    var t = {
        d: (e, n) => {
            for (var r in n)
                t.o(n, r) && !t.o(e, r) && Object.defineProperty(e, r, {
                    enumerable: !0,
                    get: n[r]
                })
        }
        ,
        o: (t, e) => Object.prototype.hasOwnProperty.call(t, e)
    }
      , e = {};
    function n(t) {
        return new RegExp("\\[(\\[?)(" + t + ")(?![\\w-])([^\\]\\/]*(?:\\/(?!\\])[^\\]\\/]*)*?)(?:(\\/)\\]|\\](?:([^\\[]*(?:\\[(?!\\/\\2\\])[^\\[]*)*)(\\[\\/\\2\\]))?)(\\]?)","g")
    }
    t.d(e, {
        default: () => c
    });
    const r = function(t, e) {
        var n, r, s = 0;
        function o() {
            var o, c, i = n, a = arguments.length;
            t: for (; i; ) {
                if (i.args.length === arguments.length) {
                    for (c = 0; c < a; c++)
                        if (i.args[c] !== arguments[c]) {
                            i = i.next;
                            continue t
                        }
                    return i !== n && (i === r && (r = i.prev),
                    i.prev.next = i.next,
                    i.next && (i.next.prev = i.prev),
                    i.next = n,
                    i.prev = null,
                    n.prev = i,
                    n = i),
                    i.val
                }
                i = i.next
            }
            for (o = new Array(a),
            c = 0; c < a; c++)
                o[c] = arguments[c];
            return i = {
                args: o,
                val: t.apply(null, o)
            },
            n ? (n.prev = i,
            i.next = n) : r = i,
            s === e.maxSize ? (r = r.prev).next = null : s++,
            n = i,
            i.val
        }
        return e = e || {},
        o.clear = function() {
            n = null,
            r = null,
            s = 0
        }
        ,
        o
    }((t => {
        const e = {}
          , n = []
          , r = /([\w-]+)\s*=\s*"([^"]*)"(?:\s|$)|([\w-]+)\s*=\s*'([^']*)'(?:\s|$)|([\w-]+)\s*=\s*([^\s'"]+)(?:\s|$)|"([^"]*)"(?:\s|$)|'([^']*)'(?:\s|$)|(\S+)(?:\s|$)/g;
        let s;
        for (t = t.replace(/[\u00a0\u200b]/g, " "); s = r.exec(t); )
            s[1] ? e[s[1].toLowerCase()] = s[2] : s[3] ? e[s[3].toLowerCase()] = s[4] : s[5] ? e[s[5].toLowerCase()] = s[6] : s[7] ? n.push(s[7]) : s[8] ? n.push(s[8]) : s[9] && n.push(s[9]);
        return {
            named: e,
            numeric: n
        }
    }
    ));
    function s(t) {
        let e;
        return e = t[4] ? "self-closing" : t[6] ? "closed" : "single",
        new o({
            tag: t[2],
            attrs: t[3],
            type: e,
            content: t[5]
        })
    }
    const o = Object.assign((function(t) {
        const {tag: e, attrs: n, type: s, content: o} = t || {};
        if (Object.assign(this, {
            tag: e,
            type: s,
            content: o
        }),
        this.attrs = {
            named: {},
            numeric: []
        },
        !n)
            return;
        const c = ["named", "numeric"];
        "string" == typeof n ? this.attrs = r(n) : n.length === c.length && c.every(( (t, e) => t === n[e])) ? this.attrs = n : Object.entries(n).forEach(( ([t,e]) => {
            this.set(t, e)
        }
        ))
    }
    ), {
        next: function t(e, r, o=0) {
            const c = n(e);
            c.lastIndex = o;
            const i = c.exec(r);
            if (!i)
                return;
            if ("[" === i[1] && "]" === i[7])
                return t(e, r, c.lastIndex);
            const a = {
                index: i.index,
                content: i[0],
                shortcode: s(i)
            };
            return i[1] && (a.content = a.content.slice(1),
            a.index++),
            i[7] && (a.content = a.content.slice(0, -1)),
            a
        },
        replace: function(t, e, r) {
            return e.replace(n(t), (function(t, e, n, o, c, i, a, u) {
                if ("[" === e && "]" === u)
                    return t;
                const l = r(s(arguments));
                return l || "" === l ? e + l + u : t
            }
            ))
        },
        string: function(t) {
            return new o(t).string()
        },
        regexp: n,
        attrs: r,
        fromMatch: s
    });
    Object.assign(o.prototype, {
        get(t) {
            return this.attrs["number" == typeof t ? "numeric" : "named"][t]
        },
        set(t, e) {
            return this.attrs["number" == typeof t ? "numeric" : "named"][t] = e,
            this
        },
        string() {
            let t = "[" + this.tag;
            return this.attrs.numeric.forEach((e => {
                /\s/.test(e) ? t += ' "' + e + '"' : t += " " + e
            }
            )),
            Object.entries(this.attrs.named).forEach(( ([e,n]) => {
                t += " " + e + '="' + n + '"'
            }
            )),
            "single" === this.type ? t + "]" : "self-closing" === this.type ? t + " /]" : (t += "]",
            this.content && (t += this.content),
            t + "[/" + this.tag + "]")
        }
    });
    const c = o;
    (window.wp = window.wp || {}).shortcode = e.default
}
)();
