!function (e) {
    var t = {};

    function i(n) {
        if (t[n]) return t[n].exports;
        var s = t[n] = {i: n, l: !1, exports: {}};
        return e[n].call(s.exports, s, s.exports, i), s.l = !0, s.exports
    }

    i.m = e, i.c = t, i.d = function (e, t, n) {
        i.o(e, t) || Object.defineProperty(e, t, {enumerable: !0, get: n})
    }, i.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
    }, i.t = function (e, t) {
        if (1 & t && (e = i(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (i.r(n), Object.defineProperty(n, "default", {
            enumerable: !0,
            value: e
        }), 2 & t && "string" != typeof e) for (var s in e) i.d(n, s, function (t) {
            return e[t]
        }.bind(null, s));
        return n
    }, i.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return i.d(t, "a", t), t
    }, i.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, i.p = "", i(i.s = 2)
}([function (e, t, i) {
    "use strict";
    (function (e, n) {
        i.d(t, "f", function () {
            return s
        }), i.d(t, "h", function () {
            return a
        }), i.d(t, "g", function () {
            return r
        }), i.d(t, "d", function () {
            return l
        }), i.d(t, "a", function () {
            return c
        }), i.d(t, "b", function () {
            return u
        }), i.d(t, "c", function () {
            return d
        }), i.d(t, "e", function () {
            return h
        });
        /*!
     * VERSION: 2.1.3
     * DATE: 2019-05-17
     * UPDATES AND DOCS AT: http://greensock.com
     *
     * @license Copyright (c) 2008-2019, GreenSock. All rights reserved.
     * This work is subject to the terms at http://greensock.com/standard-license or for
     * Club GreenSock members, the software agreement that was issued with your membership.
     *
     * @author: Jack Doyle, jack@greensock.com
     */
        var s = "undefined" != typeof window ? window : e.exports && void 0 !== n ? n : {}, r = function (e) {
                var t = {}, i = e.document, n = e.GreenSockGlobals = e.GreenSockGlobals || e;
                if (n.TweenLite) return n.TweenLite;
                var s, r, a, o, l, c, u, d = function (e) {
                    var t, i = e.split("."), s = n;
                    for (t = 0; t < i.length; t++) s[i[t]] = s = s[i[t]] || {};
                    return s
                }, h = d("com.greensock"), p = function (e) {
                    var t, i = [], n = e.length;
                    for (t = 0; t !== n; i.push(e[t++])) ;
                    return i
                }, f = function () {
                }, m = (c = Object.prototype.toString, u = c.call([]), function (e) {
                    return null != e && (e instanceof Array || "object" == typeof e && !!e.push && c.call(e) === u)
                }), g = {}, v = function (e, i, s, r) {
                    this.sc = g[e] ? g[e].sc : [], g[e] = this, this.gsClass = null, this.func = s;
                    var a = [];
                    this.check = function (o) {
                        for (var l, c, u, h, p = i.length, f = p; --p > -1;) (l = g[i[p]] || new v(i[p], [])).gsClass ? (a[p] = l.gsClass, f--) : o && l.sc.push(this);
                        if (0 === f && s) for (u = (c = ("com.greensock." + e).split(".")).pop(), h = d(c.join("."))[u] = this.gsClass = s.apply(s, a), r && (n[u] = t[u] = h), p = 0; p < this.sc.length; p++) this.sc[p].check()
                    }, this.check(!0)
                }, y = e._gsDefine = function (e, t, i, n) {
                    return new v(e, t, i, n)
                }, _ = h._class = function (e, t, i) {
                    return t = t || function () {
                    }, y(e, [], function () {
                        return t
                    }, i), t
                };
                y.globals = n;
                var b = [0, 0, 1, 1], x = _("easing.Ease", function (e, t, i, n) {
                    this._func = e, this._type = i || 0, this._power = n || 0, this._params = t ? b.concat(t) : b
                }, !0), w = x.map = {}, T = x.register = function (e, t, i, n) {
                    for (var s, r, a, o, l = t.split(","), c = l.length, u = (i || "easeIn,easeOut,easeInOut").split(","); --c > -1;) for (r = l[c], s = n ? _("easing." + r, null, !0) : h.easing[r] || {}, a = u.length; --a > -1;) o = u[a], w[r + "." + o] = w[o + r] = s[o] = e.getRatio ? e : e[o] || new e
                };
                for ((a = x.prototype)._calcEnd = !1, a.getRatio = function (e) {
                    if (this._func) return this._params[0] = e, this._func.apply(null, this._params);
                    var t = this._type, i = this._power, n = 1 === t ? 1 - e : 2 === t ? e : e < .5 ? 2 * e : 2 * (1 - e);
                    return 1 === i ? n *= n : 2 === i ? n *= n * n : 3 === i ? n *= n * n * n : 4 === i && (n *= n * n * n * n), 1 === t ? 1 - n : 2 === t ? n : e < .5 ? n / 2 : 1 - n / 2
                }, r = (s = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"]).length; --r > -1;) a = s[r] + ",Power" + r, T(new x(null, null, 1, r), a, "easeOut", !0), T(new x(null, null, 2, r), a, "easeIn" + (0 === r ? ",easeNone" : "")), T(new x(null, null, 3, r), a, "easeInOut");
                w.linear = h.easing.Linear.easeIn, w.swing = h.easing.Quad.easeInOut;
                var C = _("events.EventDispatcher", function (e) {
                    this._listeners = {}, this._eventTarget = e || this
                });
                (a = C.prototype).addEventListener = function (e, t, i, n, s) {
                    s = s || 0;
                    var r, a, c = this._listeners[e], u = 0;
                    for (this !== o || l || o.wake(), null == c && (this._listeners[e] = c = []), a = c.length; --a > -1;) (r = c[a]).c === t && r.s === i ? c.splice(a, 1) : 0 === u && r.pr < s && (u = a + 1);
                    c.splice(u, 0, {c: t, s: i, up: n, pr: s})
                }, a.removeEventListener = function (e, t) {
                    var i, n = this._listeners[e];
                    if (n) for (i = n.length; --i > -1;) if (n[i].c === t) return void n.splice(i, 1)
                }, a.dispatchEvent = function (e) {
                    var t, i, n, s = this._listeners[e];
                    if (s) for ((t = s.length) > 1 && (s = s.slice(0)), i = this._eventTarget; --t > -1;) (n = s[t]) && (n.up ? n.c.call(n.s || i, {
                        type: e,
                        target: i
                    }) : n.c.call(n.s || i))
                };
                var S = e.requestAnimationFrame, E = e.cancelAnimationFrame, P = Date.now || function () {
                    return (new Date).getTime()
                }, k = P();
                for (r = (s = ["ms", "moz", "webkit", "o"]).length; --r > -1 && !S;) S = e[s[r] + "RequestAnimationFrame"], E = e[s[r] + "CancelAnimationFrame"] || e[s[r] + "CancelRequestAnimationFrame"];
                _("Ticker", function (e, t) {
                    var n, s, r, a, c, u = this, d = P(), h = !(!1 === t || !S) && "auto", p = 500, m = 33,
                        g = function (e) {
                            var t, i, o = P() - k;
                            o > p && (d += o - m), k += o, u.time = (k - d) / 1e3, t = u.time - c, (!n || t > 0 || !0 === e) && (u.frame++, c += t + (t >= a ? .004 : a - t), i = !0), !0 !== e && (r = s(g)), i && u.dispatchEvent("tick")
                        };
                    C.call(u), u.time = u.frame = 0, u.tick = function () {
                        g(!0)
                    }, u.lagSmoothing = function (e, t) {
                        if (!arguments.length) return p < 1e8;
                        p = e || 1e8, m = Math.min(t, p, 0)
                    }, u.sleep = function () {
                        null != r && (h && E ? E(r) : clearTimeout(r), s = f, r = null, u === o && (l = !1))
                    }, u.wake = function (e) {
                        null !== r ? u.sleep() : e ? d += -k + (k = P()) : u.frame > 10 && (k = P() - p + 5), s = 0 === n ? f : h && S ? S : function (e) {
                            return setTimeout(e, 1e3 * (c - u.time) + 1 | 0)
                        }, u === o && (l = !0), g(2)
                    }, u.fps = function (e) {
                        if (!arguments.length) return n;
                        a = 1 / ((n = e) || 60), c = this.time + a, u.wake()
                    }, u.useRAF = function (e) {
                        if (!arguments.length) return h;
                        u.sleep(), h = e, u.fps(n)
                    }, u.fps(e), setTimeout(function () {
                        "auto" === h && u.frame < 5 && "hidden" !== (i || {}).visibilityState && u.useRAF(!1)
                    }, 1500)
                }), (a = h.Ticker.prototype = new h.events.EventDispatcher).constructor = h.Ticker;
                var M = _("core.Animation", function (e, t) {
                    if (this.vars = t = t || {}, this._duration = this._totalDuration = e || 0, this._delay = Number(t.delay) || 0, this._timeScale = 1, this._active = !!t.immediateRender, this.data = t.data, this._reversed = !!t.reversed, U) {
                        l || o.wake();
                        var i = this.vars.useFrames ? W : U;
                        i.add(this, i._time), this.vars.paused && this.paused(!0)
                    }
                });
                o = M.ticker = new h.Ticker, (a = M.prototype)._dirty = a._gc = a._initted = a._paused = !1, a._totalTime = a._time = 0, a._rawPrevTime = -1, a._next = a._last = a._onUpdate = a._timeline = a.timeline = null, a._paused = !1;
                var $ = function () {
                    l && P() - k > 2e3 && ("hidden" !== (i || {}).visibilityState || !o.lagSmoothing()) && o.wake();
                    var e = setTimeout($, 2e3);
                    e.unref && e.unref()
                };
                $(), a.play = function (e, t) {
                    return null != e && this.seek(e, t), this.reversed(!1).paused(!1)
                }, a.pause = function (e, t) {
                    return null != e && this.seek(e, t), this.paused(!0)
                }, a.resume = function (e, t) {
                    return null != e && this.seek(e, t), this.paused(!1)
                }, a.seek = function (e, t) {
                    return this.totalTime(Number(e), !1 !== t)
                }, a.restart = function (e, t) {
                    return this.reversed(!1).paused(!1).totalTime(e ? -this._delay : 0, !1 !== t, !0)
                }, a.reverse = function (e, t) {
                    return null != e && this.seek(e || this.totalDuration(), t), this.reversed(!0).paused(!1)
                }, a.render = function (e, t, i) {
                }, a.invalidate = function () {
                    return this._time = this._totalTime = 0, this._initted = this._gc = !1, this._rawPrevTime = -1, !this._gc && this.timeline || this._enabled(!0), this
                }, a.isActive = function () {
                    var e, t = this._timeline, i = this._startTime;
                    return !t || !this._gc && !this._paused && t.isActive() && (e = t.rawTime(!0)) >= i && e < i + this.totalDuration() / this._timeScale - 1e-8
                }, a._enabled = function (e, t) {
                    return l || o.wake(), this._gc = !e, this._active = this.isActive(), !0 !== t && (e && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !e && this.timeline && this._timeline._remove(this, !0)), !1
                }, a._kill = function (e, t) {
                    return this._enabled(!1, !1)
                }, a.kill = function (e, t) {
                    return this._kill(e, t), this
                }, a._uncache = function (e) {
                    for (var t = e ? this : this.timeline; t;) t._dirty = !0, t = t.timeline;
                    return this
                }, a._swapSelfInParams = function (e) {
                    for (var t = e.length, i = e.concat(); --t > -1;) "{self}" === e[t] && (i[t] = this);
                    return i
                }, a._callback = function (e) {
                    var t = this.vars, i = t[e], n = t[e + "Params"], s = t[e + "Scope"] || t.callbackScope || this;
                    switch (n ? n.length : 0) {
                        case 0:
                            i.call(s);
                            break;
                        case 1:
                            i.call(s, n[0]);
                            break;
                        case 2:
                            i.call(s, n[0], n[1]);
                            break;
                        default:
                            i.apply(s, n)
                    }
                }, a.eventCallback = function (e, t, i, n) {
                    if ("on" === (e || "").substr(0, 2)) {
                        var s = this.vars;
                        if (1 === arguments.length) return s[e];
                        null == t ? delete s[e] : (s[e] = t, s[e + "Params"] = m(i) && -1 !== i.join("").indexOf("{self}") ? this._swapSelfInParams(i) : i, s[e + "Scope"] = n), "onUpdate" === e && (this._onUpdate = t)
                    }
                    return this
                }, a.delay = function (e) {
                    return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + e - this._delay), this._delay = e, this) : this._delay
                }, a.duration = function (e) {
                    return arguments.length ? (this._duration = this._totalDuration = e, this._uncache(!0), this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== e && this.totalTime(this._totalTime * (e / this._duration), !0), this) : (this._dirty = !1, this._duration)
                }, a.totalDuration = function (e) {
                    return this._dirty = !1, arguments.length ? this.duration(e) : this._totalDuration
                }, a.time = function (e, t) {
                    return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(e > this._duration ? this._duration : e, t)) : this._time
                }, a.totalTime = function (e, t, i) {
                    if (l || o.wake(), !arguments.length) return this._totalTime;
                    if (this._timeline) {
                        if (e < 0 && !i && (e += this.totalDuration()), this._timeline.smoothChildTiming) {
                            this._dirty && this.totalDuration();
                            var n = this._totalDuration, s = this._timeline;
                            if (e > n && !i && (e = n), this._startTime = (this._paused ? this._pauseTime : s._time) - (this._reversed ? n - e : e) / this._timeScale, s._dirty || this._uncache(!1), s._timeline) for (; s._timeline;) s._timeline._time !== (s._startTime + s._totalTime) / s._timeScale && s.totalTime(s._totalTime, !0), s = s._timeline
                        }
                        this._gc && this._enabled(!0, !1), this._totalTime === e && 0 !== this._duration || (L.length && Z(), this.render(e, t, !1), L.length && Z())
                    }
                    return this
                }, a.progress = a.totalProgress = function (e, t) {
                    var i = this.duration();
                    return arguments.length ? this.totalTime(i * e, t) : i ? this._time / i : this.ratio
                }, a.startTime = function (e) {
                    return arguments.length ? (e !== this._startTime && (this._startTime = e, this.timeline && this.timeline._sortChildren && this.timeline.add(this, e - this._delay)), this) : this._startTime
                }, a.endTime = function (e) {
                    return this._startTime + (0 != e ? this.totalDuration() : this.duration()) / this._timeScale
                }, a.timeScale = function (e) {
                    if (!arguments.length) return this._timeScale;
                    var t, i;
                    for (e = e || 1e-8, this._timeline && this._timeline.smoothChildTiming && (i = (t = this._pauseTime) || 0 === t ? t : this._timeline.totalTime(), this._startTime = i - (i - this._startTime) * this._timeScale / e), this._timeScale = e, i = this.timeline; i && i.timeline;) i._dirty = !0, i.totalDuration(), i = i.timeline;
                    return this
                }, a.reversed = function (e) {
                    return arguments.length ? (e != this._reversed && (this._reversed = e, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this) : this._reversed
                }, a.paused = function (e) {
                    if (!arguments.length) return this._paused;
                    var t, i, n = this._timeline;
                    return e != this._paused && n && (l || e || o.wake(), i = (t = n.rawTime()) - this._pauseTime, !e && n.smoothChildTiming && (this._startTime += i, this._uncache(!1)), this._pauseTime = e ? t : null, this._paused = e, this._active = this.isActive(), !e && 0 !== i && this._initted && this.duration() && (t = n.smoothChildTiming ? this._totalTime : (t - this._startTime) / this._timeScale, this.render(t, t === this._totalTime, !0))), this._gc && !e && this._enabled(!0, !1), this
                };
                var O = _("core.SimpleTimeline", function (e) {
                    M.call(this, 0, e), this.autoRemoveChildren = this.smoothChildTiming = !0
                });
                (a = O.prototype = new M).constructor = O, a.kill()._gc = !1, a._first = a._last = a._recent = null, a._sortChildren = !1, a.add = a.insert = function (e, t, i, n) {
                    var s, r;
                    if (e._startTime = Number(t || 0) + e._delay, e._paused && this !== e._timeline && (e._pauseTime = this.rawTime() - (e._timeline.rawTime() - e._pauseTime)), e.timeline && e.timeline._remove(e, !0), e.timeline = e._timeline = this, e._gc && e._enabled(!0, !0), s = this._last, this._sortChildren) for (r = e._startTime; s && s._startTime > r;) s = s._prev;
                    return s ? (e._next = s._next, s._next = e) : (e._next = this._first, this._first = e), e._next ? e._next._prev = e : this._last = e, e._prev = s, this._recent = e, this._timeline && this._uncache(!0), this
                }, a._remove = function (e, t) {
                    return e.timeline === this && (t || e._enabled(!1, !0), e._prev ? e._prev._next = e._next : this._first === e && (this._first = e._next), e._next ? e._next._prev = e._prev : this._last === e && (this._last = e._prev), e._next = e._prev = e.timeline = null, e === this._recent && (this._recent = this._last), this._timeline && this._uncache(!0)), this
                }, a.render = function (e, t, i) {
                    var n, s = this._first;
                    for (this._totalTime = this._time = this._rawPrevTime = e; s;) n = s._next, (s._active || e >= s._startTime && !s._paused && !s._gc) && (s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (e - s._startTime) * s._timeScale, t, i) : s.render((e - s._startTime) * s._timeScale, t, i)), s = n
                }, a.rawTime = function () {
                    return l || o.wake(), this._totalTime
                };
                var A = _("TweenLite", function (t, i, n) {
                    if (M.call(this, i, n), this.render = A.prototype.render, null == t) throw"Cannot tween a null target.";
                    this.target = t = "string" != typeof t ? t : A.selector(t) || t;
                    var s, r, a,
                        o = t.jquery || t.length && t !== e && t[0] && (t[0] === e || t[0].nodeType && t[0].style && !t.nodeType),
                        l = this.vars.overwrite;
                    if (this._overwrite = l = null == l ? G[A.defaultOverwrite] : "number" == typeof l ? l >> 0 : G[l], (o || t instanceof Array || t.push && m(t)) && "number" != typeof t[0]) for (this._targets = a = p(t), this._propLookup = [], this._siblings = [], s = 0; s < a.length; s++) (r = a[s]) ? "string" != typeof r ? r.length && r !== e && r[0] && (r[0] === e || r[0].nodeType && r[0].style && !r.nodeType) ? (a.splice(s--, 1), this._targets = a = a.concat(p(r))) : (this._siblings[s] = Q(r, this, !1), 1 === l && this._siblings[s].length > 1 && ee(r, this, null, 1, this._siblings[s])) : "string" == typeof (r = a[s--] = A.selector(r)) && a.splice(s + 1, 1) : a.splice(s--, 1); else this._propLookup = {}, this._siblings = Q(t, this, !1), 1 === l && this._siblings.length > 1 && ee(t, this, null, 1, this._siblings);
                    (this.vars.immediateRender || 0 === i && 0 === this._delay && !1 !== this.vars.immediateRender) && (this._time = -1e-8, this.render(Math.min(0, -this._delay)))
                }, !0), D = function (t) {
                    return t && t.length && t !== e && t[0] && (t[0] === e || t[0].nodeType && t[0].style && !t.nodeType)
                };
                (a = A.prototype = new M).constructor = A, a.kill()._gc = !1, a.ratio = 0, a._firstPT = a._targets = a._overwrittenProps = a._startAt = null, a._notifyPluginsOfEnabled = a._lazy = !1, A.version = "2.1.3", A.defaultEase = a._ease = new x(null, null, 1, 1), A.defaultOverwrite = "auto", A.ticker = o, A.autoSleep = 120, A.lagSmoothing = function (e, t) {
                    o.lagSmoothing(e, t)
                }, A.selector = e.$ || e.jQuery || function (t) {
                    var n = e.$ || e.jQuery;
                    return n ? (A.selector = n, n(t)) : (i || (i = e.document), i ? i.querySelectorAll ? i.querySelectorAll(t) : i.getElementById("#" === t.charAt(0) ? t.substr(1) : t) : t)
                };
                var L = [], z = {}, I = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi, N = /[\+-]=-?[\.\d]/,
                    R = function (e) {
                        for (var t, i = this._firstPT; i;) t = i.blob ? 1 === e && null != this.end ? this.end : e ? this.join("") : this.start : i.c * e + i.s, i.m ? t = i.m.call(this._tween, t, this._target || i.t, this._tween) : t < 1e-6 && t > -1e-6 && !i.blob && (t = 0), i.f ? i.fp ? i.t[i.p](i.fp, t) : i.t[i.p](t) : i.t[i.p] = t, i = i._next
                    }, j = function (e) {
                        return (1e3 * e | 0) / 1e3 + ""
                    }, H = function (e, t, i, n) {
                        var s, r, a, o, l, c, u, d = [], h = 0, p = "", f = 0;
                        for (d.start = e, d.end = t, e = d[0] = e + "", t = d[1] = t + "", i && (i(d), e = d[0], t = d[1]), d.length = 0, s = e.match(I) || [], r = t.match(I) || [], n && (n._next = null, n.blob = 1, d._firstPT = d._applyPT = n), l = r.length, o = 0; o < l; o++) u = r[o], p += (c = t.substr(h, t.indexOf(u, h) - h)) || !o ? c : ",", h += c.length, f ? f = (f + 1) % 5 : "rgba(" === c.substr(-5) && (f = 1), u === s[o] || s.length <= o ? p += u : (p && (d.push(p), p = ""), a = parseFloat(s[o]), d.push(a), d._firstPT = {
                            _next: d._firstPT,
                            t: d,
                            p: d.length - 1,
                            s: a,
                            c: ("=" === u.charAt(1) ? parseInt(u.charAt(0) + "1", 10) * parseFloat(u.substr(2)) : parseFloat(u) - a) || 0,
                            f: 0,
                            m: f && f < 4 ? Math.round : j
                        }), h += u.length;
                        return (p += t.substr(h)) && d.push(p), d.setRatio = R, N.test(t) && (d.end = null), d
                    }, F = function (e, t, i, n, s, r, a, o, l) {
                        "function" == typeof n && (n = n(l || 0, e));
                        var c = typeof e[t],
                            u = "function" !== c ? "" : t.indexOf("set") || "function" != typeof e["get" + t.substr(3)] ? t : "get" + t.substr(3),
                            d = "get" !== i ? i : u ? a ? e[u](a) : e[u]() : e[t],
                            h = "string" == typeof n && "=" === n.charAt(1), p = {
                                t: e,
                                p: t,
                                s: d,
                                f: "function" === c,
                                pg: 0,
                                n: s || t,
                                m: r ? "function" == typeof r ? r : Math.round : 0,
                                pr: 0,
                                c: h ? parseInt(n.charAt(0) + "1", 10) * parseFloat(n.substr(2)) : parseFloat(n) - d || 0
                            };
                        if (("number" != typeof d || "number" != typeof n && !h) && (a || isNaN(d) || !h && isNaN(n) || "boolean" == typeof d || "boolean" == typeof n ? (p.fp = a, p = {
                            t: H(d, h ? parseFloat(p.s) + p.c + (p.s + "").replace(/[0-9\-\.]/g, "") : n, o || A.defaultStringFilter, p),
                            p: "setRatio",
                            s: 0,
                            c: 1,
                            f: 2,
                            pg: 0,
                            n: s || t,
                            pr: 0,
                            m: 0
                        }) : (p.s = parseFloat(d), h || (p.c = parseFloat(n) - p.s || 0))), p.c) return (p._next = this._firstPT) && (p._next._prev = p), this._firstPT = p, p
                    }, B = A._internals = {isArray: m, isSelector: D, lazyTweens: L, blobDif: H}, q = A._plugins = {},
                    X = B.tweenLookup = {}, Y = 0, V = B.reservedProps = {
                        ease: 1,
                        delay: 1,
                        overwrite: 1,
                        onComplete: 1,
                        onCompleteParams: 1,
                        onCompleteScope: 1,
                        useFrames: 1,
                        runBackwards: 1,
                        startAt: 1,
                        onUpdate: 1,
                        onUpdateParams: 1,
                        onUpdateScope: 1,
                        onStart: 1,
                        onStartParams: 1,
                        onStartScope: 1,
                        onReverseComplete: 1,
                        onReverseCompleteParams: 1,
                        onReverseCompleteScope: 1,
                        onRepeat: 1,
                        onRepeatParams: 1,
                        onRepeatScope: 1,
                        easeParams: 1,
                        yoyo: 1,
                        immediateRender: 1,
                        repeat: 1,
                        repeatDelay: 1,
                        data: 1,
                        paused: 1,
                        reversed: 1,
                        autoCSS: 1,
                        lazy: 1,
                        onOverwrite: 1,
                        callbackScope: 1,
                        stringFilter: 1,
                        id: 1,
                        yoyoEase: 1,
                        stagger: 1
                    }, G = {none: 0, all: 1, auto: 2, concurrent: 3, allOnStart: 4, preexisting: 5, true: 1, false: 0},
                    W = M._rootFramesTimeline = new O, U = M._rootTimeline = new O, K = 30, Z = B.lazyRender = function () {
                        var e, t, i = L.length;
                        for (z = {}, e = 0; e < i; e++) (t = L[e]) && !1 !== t._lazy && (t.render(t._lazy[0], t._lazy[1], !0), t._lazy = !1);
                        L.length = 0
                    };
                U._startTime = o.time, W._startTime = o.frame, U._active = W._active = !0, setTimeout(Z, 1), M._updateRoot = A.render = function () {
                    var e, t, i;
                    if (L.length && Z(), U.render((o.time - U._startTime) * U._timeScale, !1, !1), W.render((o.frame - W._startTime) * W._timeScale, !1, !1), L.length && Z(), o.frame >= K) {
                        for (i in K = o.frame + (parseInt(A.autoSleep, 10) || 120), X) {
                            for (e = (t = X[i].tweens).length; --e > -1;) t[e]._gc && t.splice(e, 1);
                            0 === t.length && delete X[i]
                        }
                        if ((!(i = U._first) || i._paused) && A.autoSleep && !W._first && 1 === o._listeners.tick.length) {
                            for (; i && i._paused;) i = i._next;
                            i || o.sleep()
                        }
                    }
                }, o.addEventListener("tick", M._updateRoot);
                var Q = function (e, t, i) {
                    var n, s, r = e._gsTweenID;
                    if (X[r || (e._gsTweenID = r = "t" + Y++)] || (X[r] = {
                        target: e,
                        tweens: []
                    }), t && ((n = X[r].tweens)[s = n.length] = t, i)) for (; --s > -1;) n[s] === t && n.splice(s, 1);
                    return X[r].tweens
                }, J = function (e, t, i, n) {
                    var s, r, a = e.vars.onOverwrite;
                    return a && (s = a(e, t, i, n)), (a = A.onOverwrite) && (r = a(e, t, i, n)), !1 !== s && !1 !== r
                }, ee = function (e, t, i, n, s) {
                    var r, a, o, l;
                    if (1 === n || n >= 4) {
                        for (l = s.length, r = 0; r < l; r++) if ((o = s[r]) !== t) o._gc || o._kill(null, e, t) && (a = !0); else if (5 === n) break;
                        return a
                    }
                    var c, u = t._startTime + 1e-8, d = [], h = 0, p = 0 === t._duration;
                    for (r = s.length; --r > -1;) (o = s[r]) === t || o._gc || o._paused || (o._timeline !== t._timeline ? (c = c || te(t, 0, p), 0 === te(o, c, p) && (d[h++] = o)) : o._startTime <= u && o._startTime + o.totalDuration() / o._timeScale > u && ((p || !o._initted) && u - o._startTime <= 2e-8 || (d[h++] = o)));
                    for (r = h; --r > -1;) if (l = (o = d[r])._firstPT, 2 === n && o._kill(i, e, t) && (a = !0), 2 !== n || !o._firstPT && o._initted && l) {
                        if (2 !== n && !J(o, t)) continue;
                        o._enabled(!1, !1) && (a = !0)
                    }
                    return a
                }, te = function (e, t, i) {
                    for (var n = e._timeline, s = n._timeScale, r = e._startTime; n._timeline;) {
                        if (r += n._startTime, s *= n._timeScale, n._paused) return -100;
                        n = n._timeline
                    }
                    return (r /= s) > t ? r - t : i && r === t || !e._initted && r - t < 2e-8 ? 1e-8 : (r += e.totalDuration() / e._timeScale / s) > t + 1e-8 ? 0 : r - t - 1e-8
                };
                a._init = function () {
                    var e, t, i, n, s, r, a = this.vars, o = this._overwrittenProps, l = this._duration,
                        c = !!a.immediateRender, u = a.ease, d = this._startAt;
                    if (a.startAt) {
                        for (n in d && (d.render(-1, !0), d.kill()), s = {}, a.startAt) s[n] = a.startAt[n];
                        if (s.data = "isStart", s.overwrite = !1, s.immediateRender = !0, s.lazy = c && !1 !== a.lazy, s.startAt = s.delay = null, s.onUpdate = a.onUpdate, s.onUpdateParams = a.onUpdateParams, s.onUpdateScope = a.onUpdateScope || a.callbackScope || this, this._startAt = A.to(this.target || {}, 0, s), c) if (this._time > 0) this._startAt = null; else if (0 !== l) return
                    } else if (a.runBackwards && 0 !== l) if (d) d.render(-1, !0), d.kill(), this._startAt = null; else {
                        for (n in 0 !== this._time && (c = !1), i = {}, a) V[n] && "autoCSS" !== n || (i[n] = a[n]);
                        if (i.overwrite = 0, i.data = "isFromStart", i.lazy = c && !1 !== a.lazy, i.immediateRender = c, this._startAt = A.to(this.target, 0, i), c) {
                            if (0 === this._time) return
                        } else this._startAt._init(), this._startAt._enabled(!1), this.vars.immediateRender && (this._startAt = null)
                    }
                    if (this._ease = u = u ? u instanceof x ? u : "function" == typeof u ? new x(u, a.easeParams) : w[u] || A.defaultEase : A.defaultEase, a.easeParams instanceof Array && u.config && (this._ease = u.config.apply(u, a.easeParams)), this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets) for (r = this._targets.length, e = 0; e < r; e++) this._initProps(this._targets[e], this._propLookup[e] = {}, this._siblings[e], o ? o[e] : null, e) && (t = !0); else t = this._initProps(this.target, this._propLookup, this._siblings, o, 0);
                    if (t && A._onPluginEvent("_onInitAllProps", this), o && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), a.runBackwards) for (i = this._firstPT; i;) i.s += i.c, i.c = -i.c, i = i._next;
                    this._onUpdate = a.onUpdate, this._initted = !0
                }, a._initProps = function (t, i, n, s, r) {
                    var a, o, l, c, u, d;
                    if (null == t) return !1;
                    for (a in z[t._gsTweenID] && Z(), this.vars.css || t.style && t !== e && t.nodeType && q.css && !1 !== this.vars.autoCSS && function (e, t) {
                        var i, n = {};
                        for (i in e) V[i] || i in t && "transform" !== i && "x" !== i && "y" !== i && "width" !== i && "height" !== i && "className" !== i && "border" !== i || !(!q[i] || q[i] && q[i]._autoCSS) || (n[i] = e[i], delete e[i]);
                        e.css = n
                    }(this.vars, t), this.vars) if (d = this.vars[a], V[a]) d && (d instanceof Array || d.push && m(d)) && -1 !== d.join("").indexOf("{self}") && (this.vars[a] = d = this._swapSelfInParams(d, this)); else if (q[a] && (c = new q[a])._onInitTween(t, this.vars[a], this, r)) {
                        for (this._firstPT = u = {
                            _next: this._firstPT,
                            t: c,
                            p: "setRatio",
                            s: 0,
                            c: 1,
                            f: 1,
                            n: a,
                            pg: 1,
                            pr: c._priority,
                            m: 0
                        }, o = c._overwriteProps.length; --o > -1;) i[c._overwriteProps[o]] = this._firstPT;
                        (c._priority || c._onInitAllProps) && (l = !0), (c._onDisable || c._onEnable) && (this._notifyPluginsOfEnabled = !0), u._next && (u._next._prev = u)
                    } else i[a] = F.call(this, t, a, "get", d, a, 0, null, this.vars.stringFilter, r);
                    return s && this._kill(s, t) ? this._initProps(t, i, n, s, r) : this._overwrite > 1 && this._firstPT && n.length > 1 && ee(t, this, i, this._overwrite, n) ? (this._kill(i, t), this._initProps(t, i, n, s, r)) : (this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration) && (z[t._gsTweenID] = !0), l)
                }, a.render = function (e, t, i) {
                    var n, s, r, a, o = this._time, l = this._duration, c = this._rawPrevTime;
                    if (e >= l - 1e-8 && e >= 0) this._totalTime = this._time = l, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (n = !0, s = "onComplete", i = i || this._timeline.autoRemoveChildren), 0 === l && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (e = 0), (c < 0 || e <= 0 && e >= -1e-8 || 1e-8 === c && "isPause" !== this.data) && c !== e && (i = !0, c > 1e-8 && (s = "onReverseComplete")), this._rawPrevTime = a = !t || e || c === e ? e : 1e-8); else if (e < 1e-8) this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== o || 0 === l && c > 0) && (s = "onReverseComplete", n = this._reversed), e > -1e-8 ? e = 0 : e < 0 && (this._active = !1, 0 === l && (this._initted || !this.vars.lazy || i) && (c >= 0 && (1e-8 !== c || "isPause" !== this.data) && (i = !0), this._rawPrevTime = a = !t || e || c === e ? e : 1e-8)), (!this._initted || this._startAt && this._startAt.progress()) && (i = !0); else if (this._totalTime = this._time = e, this._easeType) {
                        var u = e / l, d = this._easeType, h = this._easePower;
                        (1 === d || 3 === d && u >= .5) && (u = 1 - u), 3 === d && (u *= 2), 1 === h ? u *= u : 2 === h ? u *= u * u : 3 === h ? u *= u * u * u : 4 === h && (u *= u * u * u * u), this.ratio = 1 === d ? 1 - u : 2 === d ? u : e / l < .5 ? u / 2 : 1 - u / 2
                    } else this.ratio = this._ease.getRatio(e / l);
                    if (this._time !== o || i) {
                        if (!this._initted) {
                            if (this._init(), !this._initted || this._gc) return;
                            if (!i && this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration)) return this._time = this._totalTime = o, this._rawPrevTime = c, L.push(this), void (this._lazy = [e, t]);
                            this._time && !n ? this.ratio = this._ease.getRatio(this._time / l) : n && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                        }
                        for (!1 !== this._lazy && (this._lazy = !1), this._active || !this._paused && this._time !== o && e >= 0 && (this._active = !0), 0 === o && (this._startAt && (e >= 0 ? this._startAt.render(e, !0, i) : s || (s = "_dummyGS")), this.vars.onStart && (0 === this._time && 0 !== l || t || this._callback("onStart"))), r = this._firstPT; r;) r.f ? r.t[r.p](r.c * this.ratio + r.s) : r.t[r.p] = r.c * this.ratio + r.s, r = r._next;
                        this._onUpdate && (e < 0 && this._startAt && -1e-4 !== e && this._startAt.render(e, !0, i), t || (this._time !== o || n || i) && this._callback("onUpdate")), s && (this._gc && !i || (e < 0 && this._startAt && !this._onUpdate && -1e-4 !== e && this._startAt.render(e, !0, i), n && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !t && this.vars[s] && this._callback(s), 0 === l && 1e-8 === this._rawPrevTime && 1e-8 !== a && (this._rawPrevTime = 0)))
                    }
                }, a._kill = function (e, t, i) {
                    if ("all" === e && (e = null), null == e && (null == t || t === this.target)) return this._lazy = !1, this._enabled(!1, !1);
                    t = "string" != typeof t ? t || this._targets || this.target : A.selector(t) || t;
                    var n, s, r, a, o, l, c, u, d,
                        h = i && this._time && i._startTime === this._startTime && this._timeline === i._timeline,
                        p = this._firstPT;
                    if ((m(t) || D(t)) && "number" != typeof t[0]) for (n = t.length; --n > -1;) this._kill(e, t[n], i) && (l = !0); else {
                        if (this._targets) {
                            for (n = this._targets.length; --n > -1;) if (t === this._targets[n]) {
                                o = this._propLookup[n] || {}, this._overwrittenProps = this._overwrittenProps || [], s = this._overwrittenProps[n] = e ? this._overwrittenProps[n] || {} : "all";
                                break
                            }
                        } else {
                            if (t !== this.target) return !1;
                            o = this._propLookup, s = this._overwrittenProps = e ? this._overwrittenProps || {} : "all"
                        }
                        if (o) {
                            if (c = e || o, u = e !== s && "all" !== s && e !== o && ("object" != typeof e || !e._tempKill), i && (A.onOverwrite || this.vars.onOverwrite)) {
                                for (r in c) o[r] && (d || (d = []), d.push(r));
                                if ((d || !e) && !J(this, i, t, d)) return !1
                            }
                            for (r in c) (a = o[r]) && (h && (a.f ? a.t[a.p](a.s) : a.t[a.p] = a.s, l = !0), a.pg && a.t._kill(c) && (l = !0), a.pg && 0 !== a.t._overwriteProps.length || (a._prev ? a._prev._next = a._next : a === this._firstPT && (this._firstPT = a._next), a._next && (a._next._prev = a._prev), a._next = a._prev = null), delete o[r]), u && (s[r] = 1);
                            !this._firstPT && this._initted && p && this._enabled(!1, !1)
                        }
                    }
                    return l
                }, a.invalidate = function () {
                    this._notifyPluginsOfEnabled && A._onPluginEvent("_onDisable", this);
                    var e = this._time;
                    return this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null, this._notifyPluginsOfEnabled = this._active = this._lazy = !1, this._propLookup = this._targets ? {} : [], M.prototype.invalidate.call(this), this.vars.immediateRender && (this._time = -1e-8, this.render(e, !1, !1 !== this.vars.lazy)), this
                }, a._enabled = function (e, t) {
                    if (l || o.wake(), e && this._gc) {
                        var i, n = this._targets;
                        if (n) for (i = n.length; --i > -1;) this._siblings[i] = Q(n[i], this, !0); else this._siblings = Q(this.target, this, !0)
                    }
                    return M.prototype._enabled.call(this, e, t), !(!this._notifyPluginsOfEnabled || !this._firstPT) && A._onPluginEvent(e ? "_onEnable" : "_onDisable", this)
                }, A.to = function (e, t, i) {
                    return new A(e, t, i)
                }, A.from = function (e, t, i) {
                    return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new A(e, t, i)
                }, A.fromTo = function (e, t, i, n) {
                    return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, new A(e, t, n)
                }, A.delayedCall = function (e, t, i, n, s) {
                    return new A(t, 0, {
                        delay: e,
                        onComplete: t,
                        onCompleteParams: i,
                        callbackScope: n,
                        onReverseComplete: t,
                        onReverseCompleteParams: i,
                        immediateRender: !1,
                        lazy: !1,
                        useFrames: s,
                        overwrite: 0
                    })
                }, A.set = function (e, t) {
                    return new A(e, 0, t)
                }, A.getTweensOf = function (e, t) {
                    if (null == e) return [];
                    var i, n, s, r;
                    if (e = "string" != typeof e ? e : A.selector(e) || e, (m(e) || D(e)) && "number" != typeof e[0]) {
                        for (i = e.length, n = []; --i > -1;) n = n.concat(A.getTweensOf(e[i], t));
                        for (i = n.length; --i > -1;) for (r = n[i], s = i; --s > -1;) r === n[s] && n.splice(i, 1)
                    } else if (e._gsTweenID) for (i = (n = Q(e).concat()).length; --i > -1;) (n[i]._gc || t && !n[i].isActive()) && n.splice(i, 1);
                    return n || []
                }, A.killTweensOf = A.killDelayedCallsTo = function (e, t, i) {
                    "object" == typeof t && (i = t, t = !1);
                    for (var n = A.getTweensOf(e, t), s = n.length; --s > -1;) n[s]._kill(i, e)
                };
                var ie = _("plugins.TweenPlugin", function (e, t) {
                    this._overwriteProps = (e || "").split(","), this._propName = this._overwriteProps[0], this._priority = t || 0, this._super = ie.prototype
                }, !0);
                if (a = ie.prototype, ie.version = "1.19.0", ie.API = 2, a._firstPT = null, a._addTween = F, a.setRatio = R, a._kill = function (e) {
                    var t, i = this._overwriteProps, n = this._firstPT;
                    if (null != e[this._propName]) this._overwriteProps = []; else for (t = i.length; --t > -1;) null != e[i[t]] && i.splice(t, 1);
                    for (; n;) null != e[n.n] && (n._next && (n._next._prev = n._prev), n._prev ? (n._prev._next = n._next, n._prev = null) : this._firstPT === n && (this._firstPT = n._next)), n = n._next;
                    return !1
                }, a._mod = a._roundProps = function (e) {
                    for (var t, i = this._firstPT; i;) (t = e[this._propName] || null != i.n && e[i.n.split(this._propName + "_").join("")]) && "function" == typeof t && (2 === i.f ? i.t._applyPT.m = t : i.m = t), i = i._next
                }, A._onPluginEvent = function (e, t) {
                    var i, n, s, r, a, o = t._firstPT;
                    if ("_onInitAllProps" === e) {
                        for (; o;) {
                            for (a = o._next, n = s; n && n.pr > o.pr;) n = n._next;
                            (o._prev = n ? n._prev : r) ? o._prev._next = o : s = o, (o._next = n) ? n._prev = o : r = o, o = a
                        }
                        o = t._firstPT = s
                    }
                    for (; o;) o.pg && "function" == typeof o.t[e] && o.t[e]() && (i = !0), o = o._next;
                    return i
                }, ie.activate = function (e) {
                    for (var t = e.length; --t > -1;) e[t].API === ie.API && (q[(new e[t])._propName] = e[t]);
                    return !0
                }, y.plugin = function (e) {
                    if (!(e && e.propName && e.init && e.API)) throw"illegal plugin definition.";
                    var t, i = e.propName, n = e.priority || 0, s = e.overwriteProps, r = {
                        init: "_onInitTween",
                        set: "setRatio",
                        kill: "_kill",
                        round: "_mod",
                        mod: "_mod",
                        initAll: "_onInitAllProps"
                    }, a = _("plugins." + i.charAt(0).toUpperCase() + i.substr(1) + "Plugin", function () {
                        ie.call(this, i, n), this._overwriteProps = s || []
                    }, !0 === e.global), o = a.prototype = new ie(i);
                    for (t in o.constructor = a, a.API = e.API, r) "function" == typeof e[t] && (o[r[t]] = e[t]);
                    return a.version = e.version, ie.activate([a]), a
                }, s = e._gsQueue) {
                    for (r = 0; r < s.length; r++) s[r]();
                    for (a in g) g[a].func || e.console.log("GSAP encountered missing dependency: " + a)
                }
                return l = !1, A
            }(s), a = s.GreenSockGlobals, o = a.com.greensock, l = o.core.SimpleTimeline, c = o.core.Animation, u = a.Ease,
            d = (a.Linear, a.Power1), h = (a.Power2, a.Power3, a.Power4, a.TweenPlugin);
        o.events.EventDispatcher
    }).call(this, i(3)(e), i(4))
}, function (e, t, i) {
    var n;
    /*!
     * jQuery JavaScript Library v3.4.1
     * https://jquery.com/
     *
     * Includes Sizzle.js
     * https://sizzlejs.com/
     *
     * Copyright JS Foundation and other contributors
     * Released under the MIT license
     * https://jquery.org/license
     *
     * Date: 2019-05-01T21:04Z
     */
    /*!
     * jQuery JavaScript Library v3.4.1
     * https://jquery.com/
     *
     * Includes Sizzle.js
     * https://sizzlejs.com/
     *
     * Copyright JS Foundation and other contributors
     * Released under the MIT license
     * https://jquery.org/license
     *
     * Date: 2019-05-01T21:04Z
     */
    !function (t, i) {
        "use strict";
        "object" == typeof e.exports ? e.exports = t.document ? i(t, !0) : function (e) {
            if (!e.document) throw new Error("jQuery requires a window with a document");
            return i(e)
        } : i(t)
    }("undefined" != typeof window ? window : this, function (i, s) {
        "use strict";
        var r = [], a = i.document, o = Object.getPrototypeOf, l = r.slice, c = r.concat, u = r.push, d = r.indexOf,
            h = {}, p = h.toString, f = h.hasOwnProperty, m = f.toString, g = m.call(Object), v = {}, y = function (e) {
                return "function" == typeof e && "number" != typeof e.nodeType
            }, _ = function (e) {
                return null != e && e === e.window
            }, b = {type: !0, src: !0, nonce: !0, noModule: !0};

        function x(e, t, i) {
            var n, s, r = (i = i || a).createElement("script");
            if (r.text = e, t) for (n in b) (s = t[n] || t.getAttribute && t.getAttribute(n)) && r.setAttribute(n, s);
            i.head.appendChild(r).parentNode.removeChild(r)
        }

        function w(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? h[p.call(e)] || "object" : typeof e
        }

        var T = function (e, t) {
            return new T.fn.init(e, t)
        }, C = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

        function S(e) {
            var t = !!e && "length" in e && e.length, i = w(e);
            return !y(e) && !_(e) && ("array" === i || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
        }

        T.fn = T.prototype = {
            jquery: "3.4.1", constructor: T, length: 0, toArray: function () {
                return l.call(this)
            }, get: function (e) {
                return null == e ? l.call(this) : e < 0 ? this[e + this.length] : this[e]
            }, pushStack: function (e) {
                var t = T.merge(this.constructor(), e);
                return t.prevObject = this, t
            }, each: function (e) {
                return T.each(this, e)
            }, map: function (e) {
                return this.pushStack(T.map(this, function (t, i) {
                    return e.call(t, i, t)
                }))
            }, slice: function () {
                return this.pushStack(l.apply(this, arguments))
            }, first: function () {
                return this.eq(0)
            }, last: function () {
                return this.eq(-1)
            }, eq: function (e) {
                var t = this.length, i = +e + (e < 0 ? t : 0);
                return this.pushStack(i >= 0 && i < t ? [this[i]] : [])
            }, end: function () {
                return this.prevObject || this.constructor()
            }, push: u, sort: r.sort, splice: r.splice
        }, T.extend = T.fn.extend = function () {
            var e, t, i, n, s, r, a = arguments[0] || {}, o = 1, l = arguments.length, c = !1;
            for ("boolean" == typeof a && (c = a, a = arguments[o] || {}, o++), "object" == typeof a || y(a) || (a = {}), o === l && (a = this, o--); o < l; o++) if (null != (e = arguments[o])) for (t in e) n = e[t], "__proto__" !== t && a !== n && (c && n && (T.isPlainObject(n) || (s = Array.isArray(n))) ? (i = a[t], r = s && !Array.isArray(i) ? [] : s || T.isPlainObject(i) ? i : {}, s = !1, a[t] = T.extend(c, r, n)) : void 0 !== n && (a[t] = n));
            return a
        }, T.extend({
            expando: "jQuery" + ("3.4.1" + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (e) {
                throw new Error(e)
            }, noop: function () {
            }, isPlainObject: function (e) {
                var t, i;
                return !(!e || "[object Object]" !== p.call(e)) && (!(t = o(e)) || "function" == typeof (i = f.call(t, "constructor") && t.constructor) && m.call(i) === g)
            }, isEmptyObject: function (e) {
                var t;
                for (t in e) return !1;
                return !0
            }, globalEval: function (e, t) {
                x(e, {nonce: t && t.nonce})
            }, each: function (e, t) {
                var i, n = 0;
                if (S(e)) for (i = e.length; n < i && !1 !== t.call(e[n], n, e[n]); n++) ; else for (n in e) if (!1 === t.call(e[n], n, e[n])) break;
                return e
            }, trim: function (e) {
                return null == e ? "" : (e + "").replace(C, "")
            }, makeArray: function (e, t) {
                var i = t || [];
                return null != e && (S(Object(e)) ? T.merge(i, "string" == typeof e ? [e] : e) : u.call(i, e)), i
            }, inArray: function (e, t, i) {
                return null == t ? -1 : d.call(t, e, i)
            }, merge: function (e, t) {
                for (var i = +t.length, n = 0, s = e.length; n < i; n++) e[s++] = t[n];
                return e.length = s, e
            }, grep: function (e, t, i) {
                for (var n = [], s = 0, r = e.length, a = !i; s < r; s++) !t(e[s], s) !== a && n.push(e[s]);
                return n
            }, map: function (e, t, i) {
                var n, s, r = 0, a = [];
                if (S(e)) for (n = e.length; r < n; r++) null != (s = t(e[r], r, i)) && a.push(s); else for (r in e) null != (s = t(e[r], r, i)) && a.push(s);
                return c.apply([], a)
            }, guid: 1, support: v
        }), "function" == typeof Symbol && (T.fn[Symbol.iterator] = r[Symbol.iterator]), T.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
            h["[object " + t + "]"] = t.toLowerCase()
        });
        var E =
            /*!
         * Sizzle CSS Selector Engine v2.3.4
         * https://sizzlejs.com/
         *
         * Copyright JS Foundation and other contributors
         * Released under the MIT license
         * https://js.foundation/
         *
         * Date: 2019-04-08
         */
            function (e) {
                var t, i, n, s, r, a, o, l, c, u, d, h, p, f, m, g, v, y, _, b = "sizzle" + 1 * new Date,
                    x = e.document, w = 0, T = 0, C = le(), S = le(), E = le(), P = le(), k = function (e, t) {
                        return e === t && (d = !0), 0
                    }, M = {}.hasOwnProperty, $ = [], O = $.pop, A = $.push, D = $.push, L = $.slice, z = function (e, t) {
                        for (var i = 0, n = e.length; i < n; i++) if (e[i] === t) return i;
                        return -1
                    },
                    I = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                    N = "[\\x20\\t\\r\\n\\f]", R = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
                    j = "\\[" + N + "*(" + R + ")(?:" + N + "*([*^$|!~]?=)" + N + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + R + "))|)" + N + "*\\]",
                    H = ":(" + R + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + j + ")*)|.*)\\)|)",
                    F = new RegExp(N + "+", "g"),
                    B = new RegExp("^" + N + "+|((?:^|[^\\\\])(?:\\\\.)*)" + N + "+$", "g"),
                    q = new RegExp("^" + N + "*," + N + "*"), X = new RegExp("^" + N + "*([>+~]|" + N + ")" + N + "*"),
                    Y = new RegExp(N + "|>"), V = new RegExp(H), G = new RegExp("^" + R + "$"), W = {
                        ID: new RegExp("^#(" + R + ")"),
                        CLASS: new RegExp("^\\.(" + R + ")"),
                        TAG: new RegExp("^(" + R + "|[*])"),
                        ATTR: new RegExp("^" + j),
                        PSEUDO: new RegExp("^" + H),
                        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + N + "*(even|odd|(([+-]|)(\\d*)n|)" + N + "*(?:([+-]|)" + N + "*(\\d+)|))" + N + "*\\)|)", "i"),
                        bool: new RegExp("^(?:" + I + ")$", "i"),
                        needsContext: new RegExp("^" + N + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + N + "*((?:-\\d)?\\d*)" + N + "*\\)|)(?=[^-]|$)", "i")
                    }, U = /HTML$/i, K = /^(?:input|select|textarea|button)$/i, Z = /^h\d$/i, Q = /^[^{]+\{\s*\[native \w/,
                    J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ee = /[+~]/,
                    te = new RegExp("\\\\([\\da-f]{1,6}" + N + "?|(" + N + ")|.)", "ig"), ie = function (e, t, i) {
                        var n = "0x" + t - 65536;
                        return n != n || i ? t : n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320)
                    }, ne = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, se = function (e, t) {
                        return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
                    }, re = function () {
                        h()
                    }, ae = be(function (e) {
                        return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
                    }, {dir: "parentNode", next: "legend"});
                try {
                    D.apply($ = L.call(x.childNodes), x.childNodes), $[x.childNodes.length].nodeType
                } catch (e) {
                    D = {
                        apply: $.length ? function (e, t) {
                            A.apply(e, L.call(t))
                        } : function (e, t) {
                            for (var i = e.length, n = 0; e[i++] = t[n++];) ;
                            e.length = i - 1
                        }
                    }
                }

                function oe(e, t, n, s) {
                    var r, o, c, u, d, f, v, y = t && t.ownerDocument, w = t ? t.nodeType : 9;
                    if (n = n || [], "string" != typeof e || !e || 1 !== w && 9 !== w && 11 !== w) return n;
                    if (!s && ((t ? t.ownerDocument || t : x) !== p && h(t), t = t || p, m)) {
                        if (11 !== w && (d = J.exec(e))) if (r = d[1]) {
                            if (9 === w) {
                                if (!(c = t.getElementById(r))) return n;
                                if (c.id === r) return n.push(c), n
                            } else if (y && (c = y.getElementById(r)) && _(t, c) && c.id === r) return n.push(c), n
                        } else {
                            if (d[2]) return D.apply(n, t.getElementsByTagName(e)), n;
                            if ((r = d[3]) && i.getElementsByClassName && t.getElementsByClassName) return D.apply(n, t.getElementsByClassName(r)), n
                        }
                        if (i.qsa && !P[e + " "] && (!g || !g.test(e)) && (1 !== w || "object" !== t.nodeName.toLowerCase())) {
                            if (v = e, y = t, 1 === w && Y.test(e)) {
                                for ((u = t.getAttribute("id")) ? u = u.replace(ne, se) : t.setAttribute("id", u = b), o = (f = a(e)).length; o--;) f[o] = "#" + u + " " + _e(f[o]);
                                v = f.join(","), y = ee.test(e) && ve(t.parentNode) || t
                            }
                            try {
                                return D.apply(n, y.querySelectorAll(v)), n
                            } catch (t) {
                                P(e, !0)
                            } finally {
                                u === b && t.removeAttribute("id")
                            }
                        }
                    }
                    return l(e.replace(B, "$1"), t, n, s)
                }

                function le() {
                    var e = [];
                    return function t(i, s) {
                        return e.push(i + " ") > n.cacheLength && delete t[e.shift()], t[i + " "] = s
                    }
                }

                function ce(e) {
                    return e[b] = !0, e
                }

                function ue(e) {
                    var t = p.createElement("fieldset");
                    try {
                        return !!e(t)
                    } catch (e) {
                        return !1
                    } finally {
                        t.parentNode && t.parentNode.removeChild(t), t = null
                    }
                }

                function de(e, t) {
                    for (var i = e.split("|"), s = i.length; s--;) n.attrHandle[i[s]] = t
                }

                function he(e, t) {
                    var i = t && e, n = i && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
                    if (n) return n;
                    if (i) for (; i = i.nextSibling;) if (i === t) return -1;
                    return e ? 1 : -1
                }

                function pe(e) {
                    return function (t) {
                        return "input" === t.nodeName.toLowerCase() && t.type === e
                    }
                }

                function fe(e) {
                    return function (t) {
                        var i = t.nodeName.toLowerCase();
                        return ("input" === i || "button" === i) && t.type === e
                    }
                }

                function me(e) {
                    return function (t) {
                        return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && ae(t) === e : t.disabled === e : "label" in t && t.disabled === e
                    }
                }

                function ge(e) {
                    return ce(function (t) {
                        return t = +t, ce(function (i, n) {
                            for (var s, r = e([], i.length, t), a = r.length; a--;) i[s = r[a]] && (i[s] = !(n[s] = i[s]))
                        })
                    })
                }

                function ve(e) {
                    return e && void 0 !== e.getElementsByTagName && e
                }

                for (t in i = oe.support = {}, r = oe.isXML = function (e) {
                    var t = e.namespaceURI, i = (e.ownerDocument || e).documentElement;
                    return !U.test(t || i && i.nodeName || "HTML")
                }, h = oe.setDocument = function (e) {
                    var t, s, a = e ? e.ownerDocument || e : x;
                    return a !== p && 9 === a.nodeType && a.documentElement ? (f = (p = a).documentElement, m = !r(p), x !== p && (s = p.defaultView) && s.top !== s && (s.addEventListener ? s.addEventListener("unload", re, !1) : s.attachEvent && s.attachEvent("onunload", re)), i.attributes = ue(function (e) {
                        return e.className = "i", !e.getAttribute("className")
                    }), i.getElementsByTagName = ue(function (e) {
                        return e.appendChild(p.createComment("")), !e.getElementsByTagName("*").length
                    }), i.getElementsByClassName = Q.test(p.getElementsByClassName), i.getById = ue(function (e) {
                        return f.appendChild(e).id = b, !p.getElementsByName || !p.getElementsByName(b).length
                    }), i.getById ? (n.filter.ID = function (e) {
                        var t = e.replace(te, ie);
                        return function (e) {
                            return e.getAttribute("id") === t
                        }
                    }, n.find.ID = function (e, t) {
                        if (void 0 !== t.getElementById && m) {
                            var i = t.getElementById(e);
                            return i ? [i] : []
                        }
                    }) : (n.filter.ID = function (e) {
                        var t = e.replace(te, ie);
                        return function (e) {
                            var i = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                            return i && i.value === t
                        }
                    }, n.find.ID = function (e, t) {
                        if (void 0 !== t.getElementById && m) {
                            var i, n, s, r = t.getElementById(e);
                            if (r) {
                                if ((i = r.getAttributeNode("id")) && i.value === e) return [r];
                                for (s = t.getElementsByName(e), n = 0; r = s[n++];) if ((i = r.getAttributeNode("id")) && i.value === e) return [r]
                            }
                            return []
                        }
                    }), n.find.TAG = i.getElementsByTagName ? function (e, t) {
                        return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : i.qsa ? t.querySelectorAll(e) : void 0
                    } : function (e, t) {
                        var i, n = [], s = 0, r = t.getElementsByTagName(e);
                        if ("*" === e) {
                            for (; i = r[s++];) 1 === i.nodeType && n.push(i);
                            return n
                        }
                        return r
                    }, n.find.CLASS = i.getElementsByClassName && function (e, t) {
                        if (void 0 !== t.getElementsByClassName && m) return t.getElementsByClassName(e)
                    }, v = [], g = [], (i.qsa = Q.test(p.querySelectorAll)) && (ue(function (e) {
                        f.appendChild(e).innerHTML = "<a id='" + b + "'></a><select id='" + b + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && g.push("[*^$]=" + N + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || g.push("\\[" + N + "*(?:value|" + I + ")"), e.querySelectorAll("[id~=" + b + "-]").length || g.push("~="), e.querySelectorAll(":checked").length || g.push(":checked"), e.querySelectorAll("a#" + b + "+*").length || g.push(".#.+[+~]")
                    }), ue(function (e) {
                        e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                        var t = p.createElement("input");
                        t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && g.push("name" + N + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && g.push(":enabled", ":disabled"), f.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && g.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), g.push(",.*:")
                    })), (i.matchesSelector = Q.test(y = f.matches || f.webkitMatchesSelector || f.mozMatchesSelector || f.oMatchesSelector || f.msMatchesSelector)) && ue(function (e) {
                        i.disconnectedMatch = y.call(e, "*"), y.call(e, "[s!='']:x"), v.push("!=", H)
                    }), g = g.length && new RegExp(g.join("|")), v = v.length && new RegExp(v.join("|")), t = Q.test(f.compareDocumentPosition), _ = t || Q.test(f.contains) ? function (e, t) {
                        var i = 9 === e.nodeType ? e.documentElement : e, n = t && t.parentNode;
                        return e === n || !(!n || 1 !== n.nodeType || !(i.contains ? i.contains(n) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(n)))
                    } : function (e, t) {
                        if (t) for (; t = t.parentNode;) if (t === e) return !0;
                        return !1
                    }, k = t ? function (e, t) {
                        if (e === t) return d = !0, 0;
                        var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                        return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !i.sortDetached && t.compareDocumentPosition(e) === n ? e === p || e.ownerDocument === x && _(x, e) ? -1 : t === p || t.ownerDocument === x && _(x, t) ? 1 : u ? z(u, e) - z(u, t) : 0 : 4 & n ? -1 : 1)
                    } : function (e, t) {
                        if (e === t) return d = !0, 0;
                        var i, n = 0, s = e.parentNode, r = t.parentNode, a = [e], o = [t];
                        if (!s || !r) return e === p ? -1 : t === p ? 1 : s ? -1 : r ? 1 : u ? z(u, e) - z(u, t) : 0;
                        if (s === r) return he(e, t);
                        for (i = e; i = i.parentNode;) a.unshift(i);
                        for (i = t; i = i.parentNode;) o.unshift(i);
                        for (; a[n] === o[n];) n++;
                        return n ? he(a[n], o[n]) : a[n] === x ? -1 : o[n] === x ? 1 : 0
                    }, p) : p
                }, oe.matches = function (e, t) {
                    return oe(e, null, null, t)
                }, oe.matchesSelector = function (e, t) {
                    if ((e.ownerDocument || e) !== p && h(e), i.matchesSelector && m && !P[t + " "] && (!v || !v.test(t)) && (!g || !g.test(t))) try {
                        var n = y.call(e, t);
                        if (n || i.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
                    } catch (e) {
                        P(t, !0)
                    }
                    return oe(t, p, null, [e]).length > 0
                }, oe.contains = function (e, t) {
                    return (e.ownerDocument || e) !== p && h(e), _(e, t)
                }, oe.attr = function (e, t) {
                    (e.ownerDocument || e) !== p && h(e);
                    var s = n.attrHandle[t.toLowerCase()],
                        r = s && M.call(n.attrHandle, t.toLowerCase()) ? s(e, t, !m) : void 0;
                    return void 0 !== r ? r : i.attributes || !m ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
                }, oe.escape = function (e) {
                    return (e + "").replace(ne, se)
                }, oe.error = function (e) {
                    throw new Error("Syntax error, unrecognized expression: " + e)
                }, oe.uniqueSort = function (e) {
                    var t, n = [], s = 0, r = 0;
                    if (d = !i.detectDuplicates, u = !i.sortStable && e.slice(0), e.sort(k), d) {
                        for (; t = e[r++];) t === e[r] && (s = n.push(r));
                        for (; s--;) e.splice(n[s], 1)
                    }
                    return u = null, e
                }, s = oe.getText = function (e) {
                    var t, i = "", n = 0, r = e.nodeType;
                    if (r) {
                        if (1 === r || 9 === r || 11 === r) {
                            if ("string" == typeof e.textContent) return e.textContent;
                            for (e = e.firstChild; e; e = e.nextSibling) i += s(e)
                        } else if (3 === r || 4 === r) return e.nodeValue
                    } else for (; t = e[n++];) i += s(t);
                    return i
                }, (n = oe.selectors = {
                    cacheLength: 50,
                    createPseudo: ce,
                    match: W,
                    attrHandle: {},
                    find: {},
                    relative: {
                        ">": {dir: "parentNode", first: !0},
                        " ": {dir: "parentNode"},
                        "+": {dir: "previousSibling", first: !0},
                        "~": {dir: "previousSibling"}
                    },
                    preFilter: {
                        ATTR: function (e) {
                            return e[1] = e[1].replace(te, ie), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ie), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                        }, CHILD: function (e) {
                            return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || oe.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && oe.error(e[0]), e
                        }, PSEUDO: function (e) {
                            var t, i = !e[6] && e[2];
                            return W.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : i && V.test(i) && (t = a(i, !0)) && (t = i.indexOf(")", i.length - t) - i.length) && (e[0] = e[0].slice(0, t), e[2] = i.slice(0, t)), e.slice(0, 3))
                        }
                    },
                    filter: {
                        TAG: function (e) {
                            var t = e.replace(te, ie).toLowerCase();
                            return "*" === e ? function () {
                                return !0
                            } : function (e) {
                                return e.nodeName && e.nodeName.toLowerCase() === t
                            }
                        }, CLASS: function (e) {
                            var t = C[e + " "];
                            return t || (t = new RegExp("(^|" + N + ")" + e + "(" + N + "|$)")) && C(e, function (e) {
                                return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                            })
                        }, ATTR: function (e, t, i) {
                            return function (n) {
                                var s = oe.attr(n, e);
                                return null == s ? "!=" === t : !t || (s += "", "=" === t ? s === i : "!=" === t ? s !== i : "^=" === t ? i && 0 === s.indexOf(i) : "*=" === t ? i && s.indexOf(i) > -1 : "$=" === t ? i && s.slice(-i.length) === i : "~=" === t ? (" " + s.replace(F, " ") + " ").indexOf(i) > -1 : "|=" === t && (s === i || s.slice(0, i.length + 1) === i + "-"))
                            }
                        }, CHILD: function (e, t, i, n, s) {
                            var r = "nth" !== e.slice(0, 3), a = "last" !== e.slice(-4), o = "of-type" === t;
                            return 1 === n && 0 === s ? function (e) {
                                return !!e.parentNode
                            } : function (t, i, l) {
                                var c, u, d, h, p, f, m = r !== a ? "nextSibling" : "previousSibling", g = t.parentNode,
                                    v = o && t.nodeName.toLowerCase(), y = !l && !o, _ = !1;
                                if (g) {
                                    if (r) {
                                        for (; m;) {
                                            for (h = t; h = h[m];) if (o ? h.nodeName.toLowerCase() === v : 1 === h.nodeType) return !1;
                                            f = m = "only" === e && !f && "nextSibling"
                                        }
                                        return !0
                                    }
                                    if (f = [a ? g.firstChild : g.lastChild], a && y) {
                                        for (_ = (p = (c = (u = (d = (h = g)[b] || (h[b] = {}))[h.uniqueID] || (d[h.uniqueID] = {}))[e] || [])[0] === w && c[1]) && c[2], h = p && g.childNodes[p]; h = ++p && h && h[m] || (_ = p = 0) || f.pop();) if (1 === h.nodeType && ++_ && h === t) {
                                            u[e] = [w, p, _];
                                            break
                                        }
                                    } else if (y && (_ = p = (c = (u = (d = (h = t)[b] || (h[b] = {}))[h.uniqueID] || (d[h.uniqueID] = {}))[e] || [])[0] === w && c[1]), !1 === _) for (; (h = ++p && h && h[m] || (_ = p = 0) || f.pop()) && ((o ? h.nodeName.toLowerCase() !== v : 1 !== h.nodeType) || !++_ || (y && ((u = (d = h[b] || (h[b] = {}))[h.uniqueID] || (d[h.uniqueID] = {}))[e] = [w, _]), h !== t));) ;
                                    return (_ -= s) === n || _ % n == 0 && _ / n >= 0
                                }
                            }
                        }, PSEUDO: function (e, t) {
                            var i,
                                s = n.pseudos[e] || n.setFilters[e.toLowerCase()] || oe.error("unsupported pseudo: " + e);
                            return s[b] ? s(t) : s.length > 1 ? (i = [e, e, "", t], n.setFilters.hasOwnProperty(e.toLowerCase()) ? ce(function (e, i) {
                                for (var n, r = s(e, t), a = r.length; a--;) e[n = z(e, r[a])] = !(i[n] = r[a])
                            }) : function (e) {
                                return s(e, 0, i)
                            }) : s
                        }
                    },
                    pseudos: {
                        not: ce(function (e) {
                            var t = [], i = [], n = o(e.replace(B, "$1"));
                            return n[b] ? ce(function (e, t, i, s) {
                                for (var r, a = n(e, null, s, []), o = e.length; o--;) (r = a[o]) && (e[o] = !(t[o] = r))
                            }) : function (e, s, r) {
                                return t[0] = e, n(t, null, r, i), t[0] = null, !i.pop()
                            }
                        }), has: ce(function (e) {
                            return function (t) {
                                return oe(e, t).length > 0
                            }
                        }), contains: ce(function (e) {
                            return e = e.replace(te, ie), function (t) {
                                return (t.textContent || s(t)).indexOf(e) > -1
                            }
                        }), lang: ce(function (e) {
                            return G.test(e || "") || oe.error("unsupported lang: " + e), e = e.replace(te, ie).toLowerCase(), function (t) {
                                var i;
                                do {
                                    if (i = m ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (i = i.toLowerCase()) === e || 0 === i.indexOf(e + "-")
                                } while ((t = t.parentNode) && 1 === t.nodeType);
                                return !1
                            }
                        }), target: function (t) {
                            var i = e.location && e.location.hash;
                            return i && i.slice(1) === t.id
                        }, root: function (e) {
                            return e === f
                        }, focus: function (e) {
                            return e === p.activeElement && (!p.hasFocus || p.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                        }, enabled: me(!1), disabled: me(!0), checked: function (e) {
                            var t = e.nodeName.toLowerCase();
                            return "input" === t && !!e.checked || "option" === t && !!e.selected
                        }, selected: function (e) {
                            return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                        }, empty: function (e) {
                            for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
                            return !0
                        }, parent: function (e) {
                            return !n.pseudos.empty(e)
                        }, header: function (e) {
                            return Z.test(e.nodeName)
                        }, input: function (e) {
                            return K.test(e.nodeName)
                        }, button: function (e) {
                            var t = e.nodeName.toLowerCase();
                            return "input" === t && "button" === e.type || "button" === t
                        }, text: function (e) {
                            var t;
                            return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                        }, first: ge(function () {
                            return [0]
                        }), last: ge(function (e, t) {
                            return [t - 1]
                        }), eq: ge(function (e, t, i) {
                            return [i < 0 ? i + t : i]
                        }), even: ge(function (e, t) {
                            for (var i = 0; i < t; i += 2) e.push(i);
                            return e
                        }), odd: ge(function (e, t) {
                            for (var i = 1; i < t; i += 2) e.push(i);
                            return e
                        }), lt: ge(function (e, t, i) {
                            for (var n = i < 0 ? i + t : i > t ? t : i; --n >= 0;) e.push(n);
                            return e
                        }), gt: ge(function (e, t, i) {
                            for (var n = i < 0 ? i + t : i; ++n < t;) e.push(n);
                            return e
                        })
                    }
                }).pseudos.nth = n.pseudos.eq, {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }) n.pseudos[t] = pe(t);
                for (t in {submit: !0, reset: !0}) n.pseudos[t] = fe(t);

                function ye() {
                }

                function _e(e) {
                    for (var t = 0, i = e.length, n = ""; t < i; t++) n += e[t].value;
                    return n
                }

                function be(e, t, i) {
                    var n = t.dir, s = t.next, r = s || n, a = i && "parentNode" === r, o = T++;
                    return t.first ? function (t, i, s) {
                        for (; t = t[n];) if (1 === t.nodeType || a) return e(t, i, s);
                        return !1
                    } : function (t, i, l) {
                        var c, u, d, h = [w, o];
                        if (l) {
                            for (; t = t[n];) if ((1 === t.nodeType || a) && e(t, i, l)) return !0
                        } else for (; t = t[n];) if (1 === t.nodeType || a) if (u = (d = t[b] || (t[b] = {}))[t.uniqueID] || (d[t.uniqueID] = {}), s && s === t.nodeName.toLowerCase()) t = t[n] || t; else {
                            if ((c = u[r]) && c[0] === w && c[1] === o) return h[2] = c[2];
                            if (u[r] = h, h[2] = e(t, i, l)) return !0
                        }
                        return !1
                    }
                }

                function xe(e) {
                    return e.length > 1 ? function (t, i, n) {
                        for (var s = e.length; s--;) if (!e[s](t, i, n)) return !1;
                        return !0
                    } : e[0]
                }

                function we(e, t, i, n, s) {
                    for (var r, a = [], o = 0, l = e.length, c = null != t; o < l; o++) (r = e[o]) && (i && !i(r, n, s) || (a.push(r), c && t.push(o)));
                    return a
                }

                function Te(e, t, i, n, s, r) {
                    return n && !n[b] && (n = Te(n)), s && !s[b] && (s = Te(s, r)), ce(function (r, a, o, l) {
                        var c, u, d, h = [], p = [], f = a.length, m = r || function (e, t, i) {
                                for (var n = 0, s = t.length; n < s; n++) oe(e, t[n], i);
                                return i
                            }(t || "*", o.nodeType ? [o] : o, []), g = !e || !r && t ? m : we(m, h, e, o, l),
                            v = i ? s || (r ? e : f || n) ? [] : a : g;
                        if (i && i(g, v, o, l), n) for (c = we(v, p), n(c, [], o, l), u = c.length; u--;) (d = c[u]) && (v[p[u]] = !(g[p[u]] = d));
                        if (r) {
                            if (s || e) {
                                if (s) {
                                    for (c = [], u = v.length; u--;) (d = v[u]) && c.push(g[u] = d);
                                    s(null, v = [], c, l)
                                }
                                for (u = v.length; u--;) (d = v[u]) && (c = s ? z(r, d) : h[u]) > -1 && (r[c] = !(a[c] = d))
                            }
                        } else v = we(v === a ? v.splice(f, v.length) : v), s ? s(null, a, v, l) : D.apply(a, v)
                    })
                }

                function Ce(e) {
                    for (var t, i, s, r = e.length, a = n.relative[e[0].type], o = a || n.relative[" "], l = a ? 1 : 0, u = be(function (e) {
                        return e === t
                    }, o, !0), d = be(function (e) {
                        return z(t, e) > -1
                    }, o, !0), h = [function (e, i, n) {
                        var s = !a && (n || i !== c) || ((t = i).nodeType ? u(e, i, n) : d(e, i, n));
                        return t = null, s
                    }]; l < r; l++) if (i = n.relative[e[l].type]) h = [be(xe(h), i)]; else {
                        if ((i = n.filter[e[l].type].apply(null, e[l].matches))[b]) {
                            for (s = ++l; s < r && !n.relative[e[s].type]; s++) ;
                            return Te(l > 1 && xe(h), l > 1 && _e(e.slice(0, l - 1).concat({value: " " === e[l - 2].type ? "*" : ""})).replace(B, "$1"), i, l < s && Ce(e.slice(l, s)), s < r && Ce(e = e.slice(s)), s < r && _e(e))
                        }
                        h.push(i)
                    }
                    return xe(h)
                }

                return ye.prototype = n.filters = n.pseudos, n.setFilters = new ye, a = oe.tokenize = function (e, t) {
                    var i, s, r, a, o, l, c, u = S[e + " "];
                    if (u) return t ? 0 : u.slice(0);
                    for (o = e, l = [], c = n.preFilter; o;) {
                        for (a in i && !(s = q.exec(o)) || (s && (o = o.slice(s[0].length) || o), l.push(r = [])), i = !1, (s = X.exec(o)) && (i = s.shift(), r.push({
                            value: i,
                            type: s[0].replace(B, " ")
                        }), o = o.slice(i.length)), n.filter) !(s = W[a].exec(o)) || c[a] && !(s = c[a](s)) || (i = s.shift(), r.push({
                            value: i,
                            type: a,
                            matches: s
                        }), o = o.slice(i.length));
                        if (!i) break
                    }
                    return t ? o.length : o ? oe.error(e) : S(e, l).slice(0)
                }, o = oe.compile = function (e, t) {
                    var i, s = [], r = [], o = E[e + " "];
                    if (!o) {
                        for (t || (t = a(e)), i = t.length; i--;) (o = Ce(t[i]))[b] ? s.push(o) : r.push(o);
                        (o = E(e, function (e, t) {
                            var i = t.length > 0, s = e.length > 0, r = function (r, a, o, l, u) {
                                var d, f, g, v = 0, y = "0", _ = r && [], b = [], x = c,
                                    T = r || s && n.find.TAG("*", u), C = w += null == x ? 1 : Math.random() || .1,
                                    S = T.length;
                                for (u && (c = a === p || a || u); y !== S && null != (d = T[y]); y++) {
                                    if (s && d) {
                                        for (f = 0, a || d.ownerDocument === p || (h(d), o = !m); g = e[f++];) if (g(d, a || p, o)) {
                                            l.push(d);
                                            break
                                        }
                                        u && (w = C)
                                    }
                                    i && ((d = !g && d) && v--, r && _.push(d))
                                }
                                if (v += y, i && y !== v) {
                                    for (f = 0; g = t[f++];) g(_, b, a, o);
                                    if (r) {
                                        if (v > 0) for (; y--;) _[y] || b[y] || (b[y] = O.call(l));
                                        b = we(b)
                                    }
                                    D.apply(l, b), u && !r && b.length > 0 && v + t.length > 1 && oe.uniqueSort(l)
                                }
                                return u && (w = C, c = x), _
                            };
                            return i ? ce(r) : r
                        }(r, s))).selector = e
                    }
                    return o
                }, l = oe.select = function (e, t, i, s) {
                    var r, l, c, u, d, h = "function" == typeof e && e, p = !s && a(e = h.selector || e);
                    if (i = i || [], 1 === p.length) {
                        if ((l = p[0] = p[0].slice(0)).length > 2 && "ID" === (c = l[0]).type && 9 === t.nodeType && m && n.relative[l[1].type]) {
                            if (!(t = (n.find.ID(c.matches[0].replace(te, ie), t) || [])[0])) return i;
                            h && (t = t.parentNode), e = e.slice(l.shift().value.length)
                        }
                        for (r = W.needsContext.test(e) ? 0 : l.length; r-- && (c = l[r], !n.relative[u = c.type]);) if ((d = n.find[u]) && (s = d(c.matches[0].replace(te, ie), ee.test(l[0].type) && ve(t.parentNode) || t))) {
                            if (l.splice(r, 1), !(e = s.length && _e(l))) return D.apply(i, s), i;
                            break
                        }
                    }
                    return (h || o(e, p))(s, t, !m, i, !t || ee.test(e) && ve(t.parentNode) || t), i
                }, i.sortStable = b.split("").sort(k).join("") === b, i.detectDuplicates = !!d, h(), i.sortDetached = ue(function (e) {
                    return 1 & e.compareDocumentPosition(p.createElement("fieldset"))
                }), ue(function (e) {
                    return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
                }) || de("type|href|height|width", function (e, t, i) {
                    if (!i) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
                }), i.attributes && ue(function (e) {
                    return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
                }) || de("value", function (e, t, i) {
                    if (!i && "input" === e.nodeName.toLowerCase()) return e.defaultValue
                }), ue(function (e) {
                    return null == e.getAttribute("disabled")
                }) || de(I, function (e, t, i) {
                    var n;
                    if (!i) return !0 === e[t] ? t.toLowerCase() : (n = e.getAttributeNode(t)) && n.specified ? n.value : null
                }), oe
            }(i);
        T.find = E, T.expr = E.selectors, T.expr[":"] = T.expr.pseudos, T.uniqueSort = T.unique = E.uniqueSort, T.text = E.getText, T.isXMLDoc = E.isXML, T.contains = E.contains, T.escapeSelector = E.escape;
        var P = function (e, t, i) {
            for (var n = [], s = void 0 !== i; (e = e[t]) && 9 !== e.nodeType;) if (1 === e.nodeType) {
                if (s && T(e).is(i)) break;
                n.push(e)
            }
            return n
        }, k = function (e, t) {
            for (var i = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && i.push(e);
            return i
        }, M = T.expr.match.needsContext;

        function $(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        }

        var O = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

        function A(e, t, i) {
            return y(t) ? T.grep(e, function (e, n) {
                return !!t.call(e, n, e) !== i
            }) : t.nodeType ? T.grep(e, function (e) {
                return e === t !== i
            }) : "string" != typeof t ? T.grep(e, function (e) {
                return d.call(t, e) > -1 !== i
            }) : T.filter(t, e, i)
        }

        T.filter = function (e, t, i) {
            var n = t[0];
            return i && (e = ":not(" + e + ")"), 1 === t.length && 1 === n.nodeType ? T.find.matchesSelector(n, e) ? [n] : [] : T.find.matches(e, T.grep(t, function (e) {
                return 1 === e.nodeType
            }))
        }, T.fn.extend({
            find: function (e) {
                var t, i, n = this.length, s = this;
                if ("string" != typeof e) return this.pushStack(T(e).filter(function () {
                    for (t = 0; t < n; t++) if (T.contains(s[t], this)) return !0
                }));
                for (i = this.pushStack([]), t = 0; t < n; t++) T.find(e, s[t], i);
                return n > 1 ? T.uniqueSort(i) : i
            }, filter: function (e) {
                return this.pushStack(A(this, e || [], !1))
            }, not: function (e) {
                return this.pushStack(A(this, e || [], !0))
            }, is: function (e) {
                return !!A(this, "string" == typeof e && M.test(e) ? T(e) : e || [], !1).length
            }
        });
        var D, L = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
        (T.fn.init = function (e, t, i) {
            var n, s;
            if (!e) return this;
            if (i = i || D, "string" == typeof e) {
                if (!(n = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : L.exec(e)) || !n[1] && t) return !t || t.jquery ? (t || i).find(e) : this.constructor(t).find(e);
                if (n[1]) {
                    if (t = t instanceof T ? t[0] : t, T.merge(this, T.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : a, !0)), O.test(n[1]) && T.isPlainObject(t)) for (n in t) y(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
                    return this
                }
                return (s = a.getElementById(n[2])) && (this[0] = s, this.length = 1), this
            }
            return e.nodeType ? (this[0] = e, this.length = 1, this) : y(e) ? void 0 !== i.ready ? i.ready(e) : e(T) : T.makeArray(e, this)
        }).prototype = T.fn, D = T(a);
        var z = /^(?:parents|prev(?:Until|All))/, I = {children: !0, contents: !0, next: !0, prev: !0};

        function N(e, t) {
            for (; (e = e[t]) && 1 !== e.nodeType;) ;
            return e
        }

        T.fn.extend({
            has: function (e) {
                var t = T(e, this), i = t.length;
                return this.filter(function () {
                    for (var e = 0; e < i; e++) if (T.contains(this, t[e])) return !0
                })
            }, closest: function (e, t) {
                var i, n = 0, s = this.length, r = [], a = "string" != typeof e && T(e);
                if (!M.test(e)) for (; n < s; n++) for (i = this[n]; i && i !== t; i = i.parentNode) if (i.nodeType < 11 && (a ? a.index(i) > -1 : 1 === i.nodeType && T.find.matchesSelector(i, e))) {
                    r.push(i);
                    break
                }
                return this.pushStack(r.length > 1 ? T.uniqueSort(r) : r)
            }, index: function (e) {
                return e ? "string" == typeof e ? d.call(T(e), this[0]) : d.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            }, add: function (e, t) {
                return this.pushStack(T.uniqueSort(T.merge(this.get(), T(e, t))))
            }, addBack: function (e) {
                return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
            }
        }), T.each({
            parent: function (e) {
                var t = e.parentNode;
                return t && 11 !== t.nodeType ? t : null
            }, parents: function (e) {
                return P(e, "parentNode")
            }, parentsUntil: function (e, t, i) {
                return P(e, "parentNode", i)
            }, next: function (e) {
                return N(e, "nextSibling")
            }, prev: function (e) {
                return N(e, "previousSibling")
            }, nextAll: function (e) {
                return P(e, "nextSibling")
            }, prevAll: function (e) {
                return P(e, "previousSibling")
            }, nextUntil: function (e, t, i) {
                return P(e, "nextSibling", i)
            }, prevUntil: function (e, t, i) {
                return P(e, "previousSibling", i)
            }, siblings: function (e) {
                return k((e.parentNode || {}).firstChild, e)
            }, children: function (e) {
                return k(e.firstChild)
            }, contents: function (e) {
                return void 0 !== e.contentDocument ? e.contentDocument : ($(e, "template") && (e = e.content || e), T.merge([], e.childNodes))
            }
        }, function (e, t) {
            T.fn[e] = function (i, n) {
                var s = T.map(this, t, i);
                return "Until" !== e.slice(-5) && (n = i), n && "string" == typeof n && (s = T.filter(n, s)), this.length > 1 && (I[e] || T.uniqueSort(s), z.test(e) && s.reverse()), this.pushStack(s)
            }
        });
        var R = /[^\x20\t\r\n\f]+/g;

        function j(e) {
            return e
        }

        function H(e) {
            throw e
        }

        function F(e, t, i, n) {
            var s;
            try {
                e && y(s = e.promise) ? s.call(e).done(t).fail(i) : e && y(s = e.then) ? s.call(e, t, i) : t.apply(void 0, [e].slice(n))
            } catch (e) {
                i.apply(void 0, [e])
            }
        }

        T.Callbacks = function (e) {
            e = "string" == typeof e ? function (e) {
                var t = {};
                return T.each(e.match(R) || [], function (e, i) {
                    t[i] = !0
                }), t
            }(e) : T.extend({}, e);
            var t, i, n, s, r = [], a = [], o = -1, l = function () {
                for (s = s || e.once, n = t = !0; a.length; o = -1) for (i = a.shift(); ++o < r.length;) !1 === r[o].apply(i[0], i[1]) && e.stopOnFalse && (o = r.length, i = !1);
                e.memory || (i = !1), t = !1, s && (r = i ? [] : "")
            }, c = {
                add: function () {
                    return r && (i && !t && (o = r.length - 1, a.push(i)), function t(i) {
                        T.each(i, function (i, n) {
                            y(n) ? e.unique && c.has(n) || r.push(n) : n && n.length && "string" !== w(n) && t(n)
                        })
                    }(arguments), i && !t && l()), this
                }, remove: function () {
                    return T.each(arguments, function (e, t) {
                        for (var i; (i = T.inArray(t, r, i)) > -1;) r.splice(i, 1), i <= o && o--
                    }), this
                }, has: function (e) {
                    return e ? T.inArray(e, r) > -1 : r.length > 0
                }, empty: function () {
                    return r && (r = []), this
                }, disable: function () {
                    return s = a = [], r = i = "", this
                }, disabled: function () {
                    return !r
                }, lock: function () {
                    return s = a = [], i || t || (r = i = ""), this
                }, locked: function () {
                    return !!s
                }, fireWith: function (e, i) {
                    return s || (i = [e, (i = i || []).slice ? i.slice() : i], a.push(i), t || l()), this
                }, fire: function () {
                    return c.fireWith(this, arguments), this
                }, fired: function () {
                    return !!n
                }
            };
            return c
        }, T.extend({
            Deferred: function (e) {
                var t = [["notify", "progress", T.Callbacks("memory"), T.Callbacks("memory"), 2], ["resolve", "done", T.Callbacks("once memory"), T.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", T.Callbacks("once memory"), T.Callbacks("once memory"), 1, "rejected"]],
                    n = "pending", s = {
                        state: function () {
                            return n
                        }, always: function () {
                            return r.done(arguments).fail(arguments), this
                        }, catch: function (e) {
                            return s.then(null, e)
                        }, pipe: function () {
                            var e = arguments;
                            return T.Deferred(function (i) {
                                T.each(t, function (t, n) {
                                    var s = y(e[n[4]]) && e[n[4]];
                                    r[n[1]](function () {
                                        var e = s && s.apply(this, arguments);
                                        e && y(e.promise) ? e.promise().progress(i.notify).done(i.resolve).fail(i.reject) : i[n[0] + "With"](this, s ? [e] : arguments)
                                    })
                                }), e = null
                            }).promise()
                        }, then: function (e, n, s) {
                            var r = 0;

                            function a(e, t, n, s) {
                                return function () {
                                    var o = this, l = arguments, c = function () {
                                        var i, c;
                                        if (!(e < r)) {
                                            if ((i = n.apply(o, l)) === t.promise()) throw new TypeError("Thenable self-resolution");
                                            c = i && ("object" == typeof i || "function" == typeof i) && i.then, y(c) ? s ? c.call(i, a(r, t, j, s), a(r, t, H, s)) : (r++, c.call(i, a(r, t, j, s), a(r, t, H, s), a(r, t, j, t.notifyWith))) : (n !== j && (o = void 0, l = [i]), (s || t.resolveWith)(o, l))
                                        }
                                    }, u = s ? c : function () {
                                        try {
                                            c()
                                        } catch (i) {
                                            T.Deferred.exceptionHook && T.Deferred.exceptionHook(i, u.stackTrace), e + 1 >= r && (n !== H && (o = void 0, l = [i]), t.rejectWith(o, l))
                                        }
                                    };
                                    e ? u() : (T.Deferred.getStackHook && (u.stackTrace = T.Deferred.getStackHook()), i.setTimeout(u))
                                }
                            }

                            return T.Deferred(function (i) {
                                t[0][3].add(a(0, i, y(s) ? s : j, i.notifyWith)), t[1][3].add(a(0, i, y(e) ? e : j)), t[2][3].add(a(0, i, y(n) ? n : H))
                            }).promise()
                        }, promise: function (e) {
                            return null != e ? T.extend(e, s) : s
                        }
                    }, r = {};
                return T.each(t, function (e, i) {
                    var a = i[2], o = i[5];
                    s[i[1]] = a.add, o && a.add(function () {
                        n = o
                    }, t[3 - e][2].disable, t[3 - e][3].disable, t[0][2].lock, t[0][3].lock), a.add(i[3].fire), r[i[0]] = function () {
                        return r[i[0] + "With"](this === r ? void 0 : this, arguments), this
                    }, r[i[0] + "With"] = a.fireWith
                }), s.promise(r), e && e.call(r, r), r
            }, when: function (e) {
                var t = arguments.length, i = t, n = Array(i), s = l.call(arguments), r = T.Deferred(),
                    a = function (e) {
                        return function (i) {
                            n[e] = this, s[e] = arguments.length > 1 ? l.call(arguments) : i, --t || r.resolveWith(n, s)
                        }
                    };
                if (t <= 1 && (F(e, r.done(a(i)).resolve, r.reject, !t), "pending" === r.state() || y(s[i] && s[i].then))) return r.then();
                for (; i--;) F(s[i], a(i), r.reject);
                return r.promise()
            }
        });
        var B = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
        T.Deferred.exceptionHook = function (e, t) {
            i.console && i.console.warn && e && B.test(e.name) && i.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
        }, T.readyException = function (e) {
            i.setTimeout(function () {
                throw e
            })
        };
        var q = T.Deferred();

        function X() {
            a.removeEventListener("DOMContentLoaded", X), i.removeEventListener("load", X), T.ready()
        }

        T.fn.ready = function (e) {
            return q.then(e).catch(function (e) {
                T.readyException(e)
            }), this
        }, T.extend({
            isReady: !1, readyWait: 1, ready: function (e) {
                (!0 === e ? --T.readyWait : T.isReady) || (T.isReady = !0, !0 !== e && --T.readyWait > 0 || q.resolveWith(a, [T]))
            }
        }), T.ready.then = q.then, "complete" === a.readyState || "loading" !== a.readyState && !a.documentElement.doScroll ? i.setTimeout(T.ready) : (a.addEventListener("DOMContentLoaded", X), i.addEventListener("load", X));
        var Y = function (e, t, i, n, s, r, a) {
            var o = 0, l = e.length, c = null == i;
            if ("object" === w(i)) for (o in s = !0, i) Y(e, t, o, i[o], !0, r, a); else if (void 0 !== n && (s = !0, y(n) || (a = !0), c && (a ? (t.call(e, n), t = null) : (c = t, t = function (e, t, i) {
                return c.call(T(e), i)
            })), t)) for (; o < l; o++) t(e[o], i, a ? n : n.call(e[o], o, t(e[o], i)));
            return s ? e : c ? t.call(e) : l ? t(e[0], i) : r
        }, V = /^-ms-/, G = /-([a-z])/g;

        function W(e, t) {
            return t.toUpperCase()
        }

        function U(e) {
            return e.replace(V, "ms-").replace(G, W)
        }

        var K = function (e) {
            return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
        };

        function Z() {
            this.expando = T.expando + Z.uid++
        }

        Z.uid = 1, Z.prototype = {
            cache: function (e) {
                var t = e[this.expando];
                return t || (t = {}, K(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                    value: t,
                    configurable: !0
                }))), t
            }, set: function (e, t, i) {
                var n, s = this.cache(e);
                if ("string" == typeof t) s[U(t)] = i; else for (n in t) s[U(n)] = t[n];
                return s
            }, get: function (e, t) {
                return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][U(t)]
            }, access: function (e, t, i) {
                return void 0 === t || t && "string" == typeof t && void 0 === i ? this.get(e, t) : (this.set(e, t, i), void 0 !== i ? i : t)
            }, remove: function (e, t) {
                var i, n = e[this.expando];
                if (void 0 !== n) {
                    if (void 0 !== t) {
                        i = (t = Array.isArray(t) ? t.map(U) : (t = U(t)) in n ? [t] : t.match(R) || []).length;
                        for (; i--;) delete n[t[i]]
                    }
                    (void 0 === t || T.isEmptyObject(n)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
                }
            }, hasData: function (e) {
                var t = e[this.expando];
                return void 0 !== t && !T.isEmptyObject(t)
            }
        };
        var Q = new Z, J = new Z, ee = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, te = /[A-Z]/g;

        function ie(e, t, i) {
            var n;
            if (void 0 === i && 1 === e.nodeType) if (n = "data-" + t.replace(te, "-$&").toLowerCase(), "string" == typeof (i = e.getAttribute(n))) {
                try {
                    i = function (e) {
                        return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : ee.test(e) ? JSON.parse(e) : e)
                    }(i)
                } catch (e) {
                }
                J.set(e, t, i)
            } else i = void 0;
            return i
        }

        T.extend({
            hasData: function (e) {
                return J.hasData(e) || Q.hasData(e)
            }, data: function (e, t, i) {
                return J.access(e, t, i)
            }, removeData: function (e, t) {
                J.remove(e, t)
            }, _data: function (e, t, i) {
                return Q.access(e, t, i)
            }, _removeData: function (e, t) {
                Q.remove(e, t)
            }
        }), T.fn.extend({
            data: function (e, t) {
                var i, n, s, r = this[0], a = r && r.attributes;
                if (void 0 === e) {
                    if (this.length && (s = J.get(r), 1 === r.nodeType && !Q.get(r, "hasDataAttrs"))) {
                        for (i = a.length; i--;) a[i] && 0 === (n = a[i].name).indexOf("data-") && (n = U(n.slice(5)), ie(r, n, s[n]));
                        Q.set(r, "hasDataAttrs", !0)
                    }
                    return s
                }
                return "object" == typeof e ? this.each(function () {
                    J.set(this, e)
                }) : Y(this, function (t) {
                    var i;
                    if (r && void 0 === t) return void 0 !== (i = J.get(r, e)) ? i : void 0 !== (i = ie(r, e)) ? i : void 0;
                    this.each(function () {
                        J.set(this, e, t)
                    })
                }, null, t, arguments.length > 1, null, !0)
            }, removeData: function (e) {
                return this.each(function () {
                    J.remove(this, e)
                })
            }
        }), T.extend({
            queue: function (e, t, i) {
                var n;
                if (e) return t = (t || "fx") + "queue", n = Q.get(e, t), i && (!n || Array.isArray(i) ? n = Q.access(e, t, T.makeArray(i)) : n.push(i)), n || []
            }, dequeue: function (e, t) {
                t = t || "fx";
                var i = T.queue(e, t), n = i.length, s = i.shift(), r = T._queueHooks(e, t);
                "inprogress" === s && (s = i.shift(), n--), s && ("fx" === t && i.unshift("inprogress"), delete r.stop, s.call(e, function () {
                    T.dequeue(e, t)
                }, r)), !n && r && r.empty.fire()
            }, _queueHooks: function (e, t) {
                var i = t + "queueHooks";
                return Q.get(e, i) || Q.access(e, i, {
                    empty: T.Callbacks("once memory").add(function () {
                        Q.remove(e, [t + "queue", i])
                    })
                })
            }
        }), T.fn.extend({
            queue: function (e, t) {
                var i = 2;
                return "string" != typeof e && (t = e, e = "fx", i--), arguments.length < i ? T.queue(this[0], e) : void 0 === t ? this : this.each(function () {
                    var i = T.queue(this, e, t);
                    T._queueHooks(this, e), "fx" === e && "inprogress" !== i[0] && T.dequeue(this, e)
                })
            }, dequeue: function (e) {
                return this.each(function () {
                    T.dequeue(this, e)
                })
            }, clearQueue: function (e) {
                return this.queue(e || "fx", [])
            }, promise: function (e, t) {
                var i, n = 1, s = T.Deferred(), r = this, a = this.length, o = function () {
                    --n || s.resolveWith(r, [r])
                };
                for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;) (i = Q.get(r[a], e + "queueHooks")) && i.empty && (n++, i.empty.add(o));
                return o(), s.promise(t)
            }
        });
        var ne = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            se = new RegExp("^(?:([+-])=|)(" + ne + ")([a-z%]*)$", "i"), re = ["Top", "Right", "Bottom", "Left"],
            ae = a.documentElement, oe = function (e) {
                return T.contains(e.ownerDocument, e)
            }, le = {composed: !0};
        ae.getRootNode && (oe = function (e) {
            return T.contains(e.ownerDocument, e) || e.getRootNode(le) === e.ownerDocument
        });
        var ce = function (e, t) {
            return "none" === (e = t || e).style.display || "" === e.style.display && oe(e) && "none" === T.css(e, "display")
        }, ue = function (e, t, i, n) {
            var s, r, a = {};
            for (r in t) a[r] = e.style[r], e.style[r] = t[r];
            for (r in s = i.apply(e, n || []), t) e.style[r] = a[r];
            return s
        };

        function de(e, t, i, n) {
            var s, r, a = 20, o = n ? function () {
                    return n.cur()
                } : function () {
                    return T.css(e, t, "")
                }, l = o(), c = i && i[3] || (T.cssNumber[t] ? "" : "px"),
                u = e.nodeType && (T.cssNumber[t] || "px" !== c && +l) && se.exec(T.css(e, t));
            if (u && u[3] !== c) {
                for (l /= 2, c = c || u[3], u = +l || 1; a--;) T.style(e, t, u + c), (1 - r) * (1 - (r = o() / l || .5)) <= 0 && (a = 0), u /= r;
                u *= 2, T.style(e, t, u + c), i = i || []
            }
            return i && (u = +u || +l || 0, s = i[1] ? u + (i[1] + 1) * i[2] : +i[2], n && (n.unit = c, n.start = u, n.end = s)), s
        }

        var he = {};

        function pe(e) {
            var t, i = e.ownerDocument, n = e.nodeName, s = he[n];
            return s || (t = i.body.appendChild(i.createElement(n)), s = T.css(t, "display"), t.parentNode.removeChild(t), "none" === s && (s = "block"), he[n] = s, s)
        }

        function fe(e, t) {
            for (var i, n, s = [], r = 0, a = e.length; r < a; r++) (n = e[r]).style && (i = n.style.display, t ? ("none" === i && (s[r] = Q.get(n, "display") || null, s[r] || (n.style.display = "")), "" === n.style.display && ce(n) && (s[r] = pe(n))) : "none" !== i && (s[r] = "none", Q.set(n, "display", i)));
            for (r = 0; r < a; r++) null != s[r] && (e[r].style.display = s[r]);
            return e
        }

        T.fn.extend({
            show: function () {
                return fe(this, !0)
            }, hide: function () {
                return fe(this)
            }, toggle: function (e) {
                return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
                    ce(this) ? T(this).show() : T(this).hide()
                })
            }
        });
        var me = /^(?:checkbox|radio)$/i, ge = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
            ve = /^$|^module$|\/(?:java|ecma)script/i, ye = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                thead: [1, "<table>", "</table>"],
                col: [2, "<table><colgroup>", "</colgroup></table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: [0, "", ""]
            };

        function _e(e, t) {
            var i;
            return i = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && $(e, t) ? T.merge([e], i) : i
        }

        function be(e, t) {
            for (var i = 0, n = e.length; i < n; i++) Q.set(e[i], "globalEval", !t || Q.get(t[i], "globalEval"))
        }

        ye.optgroup = ye.option, ye.tbody = ye.tfoot = ye.colgroup = ye.caption = ye.thead, ye.th = ye.td;
        var xe, we, Te = /<|&#?\w+;/;

        function Ce(e, t, i, n, s) {
            for (var r, a, o, l, c, u, d = t.createDocumentFragment(), h = [], p = 0, f = e.length; p < f; p++) if ((r = e[p]) || 0 === r) if ("object" === w(r)) T.merge(h, r.nodeType ? [r] : r); else if (Te.test(r)) {
                for (a = a || d.appendChild(t.createElement("div")), o = (ge.exec(r) || ["", ""])[1].toLowerCase(), l = ye[o] || ye._default, a.innerHTML = l[1] + T.htmlPrefilter(r) + l[2], u = l[0]; u--;) a = a.lastChild;
                T.merge(h, a.childNodes), (a = d.firstChild).textContent = ""
            } else h.push(t.createTextNode(r));
            for (d.textContent = "", p = 0; r = h[p++];) if (n && T.inArray(r, n) > -1) s && s.push(r); else if (c = oe(r), a = _e(d.appendChild(r), "script"), c && be(a), i) for (u = 0; r = a[u++];) ve.test(r.type || "") && i.push(r);
            return d
        }

        xe = a.createDocumentFragment().appendChild(a.createElement("div")), (we = a.createElement("input")).setAttribute("type", "radio"), we.setAttribute("checked", "checked"), we.setAttribute("name", "t"), xe.appendChild(we), v.checkClone = xe.cloneNode(!0).cloneNode(!0).lastChild.checked, xe.innerHTML = "<textarea>x</textarea>", v.noCloneChecked = !!xe.cloneNode(!0).lastChild.defaultValue;
        var Se = /^key/, Ee = /^(?:mouse|pointer|contextmenu|drag|drop)|click/, Pe = /^([^.]*)(?:\.(.+)|)/;

        function ke() {
            return !0
        }

        function Me() {
            return !1
        }

        function $e(e, t) {
            return e === function () {
                try {
                    return a.activeElement
                } catch (e) {
                }
            }() == ("focus" === t)
        }

        function Oe(e, t, i, n, s, r) {
            var a, o;
            if ("object" == typeof t) {
                for (o in "string" != typeof i && (n = n || i, i = void 0), t) Oe(e, o, i, n, t[o], r);
                return e
            }
            if (null == n && null == s ? (s = i, n = i = void 0) : null == s && ("string" == typeof i ? (s = n, n = void 0) : (s = n, n = i, i = void 0)), !1 === s) s = Me; else if (!s) return e;
            return 1 === r && (a = s, (s = function (e) {
                return T().off(e), a.apply(this, arguments)
            }).guid = a.guid || (a.guid = T.guid++)), e.each(function () {
                T.event.add(this, t, s, n, i)
            })
        }

        function Ae(e, t, i) {
            i ? (Q.set(e, t, !1), T.event.add(e, t, {
                namespace: !1, handler: function (e) {
                    var n, s, r = Q.get(this, t);
                    if (1 & e.isTrigger && this[t]) {
                        if (r.length) (T.event.special[t] || {}).delegateType && e.stopPropagation(); else if (r = l.call(arguments), Q.set(this, t, r), n = i(this, t), this[t](), r !== (s = Q.get(this, t)) || n ? Q.set(this, t, !1) : s = {}, r !== s) return e.stopImmediatePropagation(), e.preventDefault(), s.value
                    } else r.length && (Q.set(this, t, {value: T.event.trigger(T.extend(r[0], T.Event.prototype), r.slice(1), this)}), e.stopImmediatePropagation())
                }
            })) : void 0 === Q.get(e, t) && T.event.add(e, t, ke)
        }

        T.event = {
            global: {}, add: function (e, t, i, n, s) {
                var r, a, o, l, c, u, d, h, p, f, m, g = Q.get(e);
                if (g) for (i.handler && (i = (r = i).handler, s = r.selector), s && T.find.matchesSelector(ae, s), i.guid || (i.guid = T.guid++), (l = g.events) || (l = g.events = {}), (a = g.handle) || (a = g.handle = function (t) {
                    return void 0 !== T && T.event.triggered !== t.type ? T.event.dispatch.apply(e, arguments) : void 0
                }), c = (t = (t || "").match(R) || [""]).length; c--;) p = m = (o = Pe.exec(t[c]) || [])[1], f = (o[2] || "").split(".").sort(), p && (d = T.event.special[p] || {}, p = (s ? d.delegateType : d.bindType) || p, d = T.event.special[p] || {}, u = T.extend({
                    type: p,
                    origType: m,
                    data: n,
                    handler: i,
                    guid: i.guid,
                    selector: s,
                    needsContext: s && T.expr.match.needsContext.test(s),
                    namespace: f.join(".")
                }, r), (h = l[p]) || ((h = l[p] = []).delegateCount = 0, d.setup && !1 !== d.setup.call(e, n, f, a) || e.addEventListener && e.addEventListener(p, a)), d.add && (d.add.call(e, u), u.handler.guid || (u.handler.guid = i.guid)), s ? h.splice(h.delegateCount++, 0, u) : h.push(u), T.event.global[p] = !0)
            }, remove: function (e, t, i, n, s) {
                var r, a, o, l, c, u, d, h, p, f, m, g = Q.hasData(e) && Q.get(e);
                if (g && (l = g.events)) {
                    for (c = (t = (t || "").match(R) || [""]).length; c--;) if (p = m = (o = Pe.exec(t[c]) || [])[1], f = (o[2] || "").split(".").sort(), p) {
                        for (d = T.event.special[p] || {}, h = l[p = (n ? d.delegateType : d.bindType) || p] || [], o = o[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = r = h.length; r--;) u = h[r], !s && m !== u.origType || i && i.guid !== u.guid || o && !o.test(u.namespace) || n && n !== u.selector && ("**" !== n || !u.selector) || (h.splice(r, 1), u.selector && h.delegateCount--, d.remove && d.remove.call(e, u));
                        a && !h.length && (d.teardown && !1 !== d.teardown.call(e, f, g.handle) || T.removeEvent(e, p, g.handle), delete l[p])
                    } else for (p in l) T.event.remove(e, p + t[c], i, n, !0);
                    T.isEmptyObject(l) && Q.remove(e, "handle events")
                }
            }, dispatch: function (e) {
                var t, i, n, s, r, a, o = T.event.fix(e), l = new Array(arguments.length),
                    c = (Q.get(this, "events") || {})[o.type] || [], u = T.event.special[o.type] || {};
                for (l[0] = o, t = 1; t < arguments.length; t++) l[t] = arguments[t];
                if (o.delegateTarget = this, !u.preDispatch || !1 !== u.preDispatch.call(this, o)) {
                    for (a = T.event.handlers.call(this, o, c), t = 0; (s = a[t++]) && !o.isPropagationStopped();) for (o.currentTarget = s.elem, i = 0; (r = s.handlers[i++]) && !o.isImmediatePropagationStopped();) o.rnamespace && !1 !== r.namespace && !o.rnamespace.test(r.namespace) || (o.handleObj = r, o.data = r.data, void 0 !== (n = ((T.event.special[r.origType] || {}).handle || r.handler).apply(s.elem, l)) && !1 === (o.result = n) && (o.preventDefault(), o.stopPropagation()));
                    return u.postDispatch && u.postDispatch.call(this, o), o.result
                }
            }, handlers: function (e, t) {
                var i, n, s, r, a, o = [], l = t.delegateCount, c = e.target;
                if (l && c.nodeType && !("click" === e.type && e.button >= 1)) for (; c !== this; c = c.parentNode || this) if (1 === c.nodeType && ("click" !== e.type || !0 !== c.disabled)) {
                    for (r = [], a = {}, i = 0; i < l; i++) void 0 === a[s = (n = t[i]).selector + " "] && (a[s] = n.needsContext ? T(s, this).index(c) > -1 : T.find(s, this, null, [c]).length), a[s] && r.push(n);
                    r.length && o.push({elem: c, handlers: r})
                }
                return c = this, l < t.length && o.push({elem: c, handlers: t.slice(l)}), o
            }, addProp: function (e, t) {
                Object.defineProperty(T.Event.prototype, e, {
                    enumerable: !0, configurable: !0, get: y(t) ? function () {
                        if (this.originalEvent) return t(this.originalEvent)
                    } : function () {
                        if (this.originalEvent) return this.originalEvent[e]
                    }, set: function (t) {
                        Object.defineProperty(this, e, {enumerable: !0, configurable: !0, writable: !0, value: t})
                    }
                })
            }, fix: function (e) {
                return e[T.expando] ? e : new T.Event(e)
            }, special: {
                load: {noBubble: !0}, click: {
                    setup: function (e) {
                        var t = this || e;
                        return me.test(t.type) && t.click && $(t, "input") && Ae(t, "click", ke), !1
                    }, trigger: function (e) {
                        var t = this || e;
                        return me.test(t.type) && t.click && $(t, "input") && Ae(t, "click"), !0
                    }, _default: function (e) {
                        var t = e.target;
                        return me.test(t.type) && t.click && $(t, "input") && Q.get(t, "click") || $(t, "a")
                    }
                }, beforeunload: {
                    postDispatch: function (e) {
                        void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                    }
                }
            }
        }, T.removeEvent = function (e, t, i) {
            e.removeEventListener && e.removeEventListener(t, i)
        }, T.Event = function (e, t) {
            if (!(this instanceof T.Event)) return new T.Event(e, t);
            e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? ke : Me, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && T.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[T.expando] = !0
        }, T.Event.prototype = {
            constructor: T.Event,
            isDefaultPrevented: Me,
            isPropagationStopped: Me,
            isImmediatePropagationStopped: Me,
            isSimulated: !1,
            preventDefault: function () {
                var e = this.originalEvent;
                this.isDefaultPrevented = ke, e && !this.isSimulated && e.preventDefault()
            },
            stopPropagation: function () {
                var e = this.originalEvent;
                this.isPropagationStopped = ke, e && !this.isSimulated && e.stopPropagation()
            },
            stopImmediatePropagation: function () {
                var e = this.originalEvent;
                this.isImmediatePropagationStopped = ke, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
            }
        }, T.each({
            altKey: !0,
            bubbles: !0,
            cancelable: !0,
            changedTouches: !0,
            ctrlKey: !0,
            detail: !0,
            eventPhase: !0,
            metaKey: !0,
            pageX: !0,
            pageY: !0,
            shiftKey: !0,
            view: !0,
            char: !0,
            code: !0,
            charCode: !0,
            key: !0,
            keyCode: !0,
            button: !0,
            buttons: !0,
            clientX: !0,
            clientY: !0,
            offsetX: !0,
            offsetY: !0,
            pointerId: !0,
            pointerType: !0,
            screenX: !0,
            screenY: !0,
            targetTouches: !0,
            toElement: !0,
            touches: !0,
            which: function (e) {
                var t = e.button;
                return null == e.which && Se.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Ee.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
            }
        }, T.event.addProp), T.each({focus: "focusin", blur: "focusout"}, function (e, t) {
            T.event.special[e] = {
                setup: function () {
                    return Ae(this, e, $e), !1
                }, trigger: function () {
                    return Ae(this, e), !0
                }, delegateType: t
            }
        }), T.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function (e, t) {
            T.event.special[e] = {
                delegateType: t, bindType: t, handle: function (e) {
                    var i, n = this, s = e.relatedTarget, r = e.handleObj;
                    return s && (s === n || T.contains(n, s)) || (e.type = r.origType, i = r.handler.apply(this, arguments), e.type = t), i
                }
            }
        }), T.fn.extend({
            on: function (e, t, i, n) {
                return Oe(this, e, t, i, n)
            }, one: function (e, t, i, n) {
                return Oe(this, e, t, i, n, 1)
            }, off: function (e, t, i) {
                var n, s;
                if (e && e.preventDefault && e.handleObj) return n = e.handleObj, T(e.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace : n.origType, n.selector, n.handler), this;
                if ("object" == typeof e) {
                    for (s in e) this.off(s, t, e[s]);
                    return this
                }
                return !1 !== t && "function" != typeof t || (i = t, t = void 0), !1 === i && (i = Me), this.each(function () {
                    T.event.remove(this, e, i, t)
                })
            }
        });
        var De = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
            Le = /<script|<style|<link/i, ze = /checked\s*(?:[^=]|=\s*.checked.)/i,
            Ie = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

        function Ne(e, t) {
            return $(e, "table") && $(11 !== t.nodeType ? t : t.firstChild, "tr") && T(e).children("tbody")[0] || e
        }

        function Re(e) {
            return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
        }

        function je(e) {
            return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
        }

        function He(e, t) {
            var i, n, s, r, a, o, l, c;
            if (1 === t.nodeType) {
                if (Q.hasData(e) && (r = Q.access(e), a = Q.set(t, r), c = r.events)) for (s in delete a.handle, a.events = {}, c) for (i = 0, n = c[s].length; i < n; i++) T.event.add(t, s, c[s][i]);
                J.hasData(e) && (o = J.access(e), l = T.extend({}, o), J.set(t, l))
            }
        }

        function Fe(e, t) {
            var i = t.nodeName.toLowerCase();
            "input" === i && me.test(e.type) ? t.checked = e.checked : "input" !== i && "textarea" !== i || (t.defaultValue = e.defaultValue)
        }

        function Be(e, t, i, n) {
            t = c.apply([], t);
            var s, r, a, o, l, u, d = 0, h = e.length, p = h - 1, f = t[0], m = y(f);
            if (m || h > 1 && "string" == typeof f && !v.checkClone && ze.test(f)) return e.each(function (s) {
                var r = e.eq(s);
                m && (t[0] = f.call(this, s, r.html())), Be(r, t, i, n)
            });
            if (h && (r = (s = Ce(t, e[0].ownerDocument, !1, e, n)).firstChild, 1 === s.childNodes.length && (s = r), r || n)) {
                for (o = (a = T.map(_e(s, "script"), Re)).length; d < h; d++) l = s, d !== p && (l = T.clone(l, !0, !0), o && T.merge(a, _e(l, "script"))), i.call(e[d], l, d);
                if (o) for (u = a[a.length - 1].ownerDocument, T.map(a, je), d = 0; d < o; d++) l = a[d], ve.test(l.type || "") && !Q.access(l, "globalEval") && T.contains(u, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? T._evalUrl && !l.noModule && T._evalUrl(l.src, {nonce: l.nonce || l.getAttribute("nonce")}) : x(l.textContent.replace(Ie, ""), l, u))
            }
            return e
        }

        function qe(e, t, i) {
            for (var n, s = t ? T.filter(t, e) : e, r = 0; null != (n = s[r]); r++) i || 1 !== n.nodeType || T.cleanData(_e(n)), n.parentNode && (i && oe(n) && be(_e(n, "script")), n.parentNode.removeChild(n));
            return e
        }

        T.extend({
            htmlPrefilter: function (e) {
                return e.replace(De, "<$1></$2>")
            }, clone: function (e, t, i) {
                var n, s, r, a, o = e.cloneNode(!0), l = oe(e);
                if (!(v.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || T.isXMLDoc(e))) for (a = _e(o), n = 0, s = (r = _e(e)).length; n < s; n++) Fe(r[n], a[n]);
                if (t) if (i) for (r = r || _e(e), a = a || _e(o), n = 0, s = r.length; n < s; n++) He(r[n], a[n]); else He(e, o);
                return (a = _e(o, "script")).length > 0 && be(a, !l && _e(e, "script")), o
            }, cleanData: function (e) {
                for (var t, i, n, s = T.event.special, r = 0; void 0 !== (i = e[r]); r++) if (K(i)) {
                    if (t = i[Q.expando]) {
                        if (t.events) for (n in t.events) s[n] ? T.event.remove(i, n) : T.removeEvent(i, n, t.handle);
                        i[Q.expando] = void 0
                    }
                    i[J.expando] && (i[J.expando] = void 0)
                }
            }
        }), T.fn.extend({
            detach: function (e) {
                return qe(this, e, !0)
            }, remove: function (e) {
                return qe(this, e)
            }, text: function (e) {
                return Y(this, function (e) {
                    return void 0 === e ? T.text(this) : this.empty().each(function () {
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                    })
                }, null, e, arguments.length)
            }, append: function () {
                return Be(this, arguments, function (e) {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Ne(this, e).appendChild(e)
                })
            }, prepend: function () {
                return Be(this, arguments, function (e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = Ne(this, e);
                        t.insertBefore(e, t.firstChild)
                    }
                })
            }, before: function () {
                return Be(this, arguments, function (e) {
                    this.parentNode && this.parentNode.insertBefore(e, this)
                })
            }, after: function () {
                return Be(this, arguments, function (e) {
                    this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                })
            }, empty: function () {
                for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (T.cleanData(_e(e, !1)), e.textContent = "");
                return this
            }, clone: function (e, t) {
                return e = null != e && e, t = null == t ? e : t, this.map(function () {
                    return T.clone(this, e, t)
                })
            }, html: function (e) {
                return Y(this, function (e) {
                    var t = this[0] || {}, i = 0, n = this.length;
                    if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                    if ("string" == typeof e && !Le.test(e) && !ye[(ge.exec(e) || ["", ""])[1].toLowerCase()]) {
                        e = T.htmlPrefilter(e);
                        try {
                            for (; i < n; i++) 1 === (t = this[i] || {}).nodeType && (T.cleanData(_e(t, !1)), t.innerHTML = e);
                            t = 0
                        } catch (e) {
                        }
                    }
                    t && this.empty().append(e)
                }, null, e, arguments.length)
            }, replaceWith: function () {
                var e = [];
                return Be(this, arguments, function (t) {
                    var i = this.parentNode;
                    T.inArray(this, e) < 0 && (T.cleanData(_e(this)), i && i.replaceChild(t, this))
                }, e)
            }
        }), T.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function (e, t) {
            T.fn[e] = function (e) {
                for (var i, n = [], s = T(e), r = s.length - 1, a = 0; a <= r; a++) i = a === r ? this : this.clone(!0), T(s[a])[t](i), u.apply(n, i.get());
                return this.pushStack(n)
            }
        });
        var Xe = new RegExp("^(" + ne + ")(?!px)[a-z%]+$", "i"), Ye = function (e) {
            var t = e.ownerDocument.defaultView;
            return t && t.opener || (t = i), t.getComputedStyle(e)
        }, Ve = new RegExp(re.join("|"), "i");

        function Ge(e, t, i) {
            var n, s, r, a, o = e.style;
            return (i = i || Ye(e)) && ("" !== (a = i.getPropertyValue(t) || i[t]) || oe(e) || (a = T.style(e, t)), !v.pixelBoxStyles() && Xe.test(a) && Ve.test(t) && (n = o.width, s = o.minWidth, r = o.maxWidth, o.minWidth = o.maxWidth = o.width = a, a = i.width, o.width = n, o.minWidth = s, o.maxWidth = r)), void 0 !== a ? a + "" : a
        }

        function We(e, t) {
            return {
                get: function () {
                    if (!e()) return (this.get = t).apply(this, arguments);
                    delete this.get
                }
            }
        }

        !function () {
            function e() {
                if (u) {
                    c.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", u.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", ae.appendChild(c).appendChild(u);
                    var e = i.getComputedStyle(u);
                    n = "1%" !== e.top, l = 12 === t(e.marginLeft), u.style.right = "60%", o = 36 === t(e.right), s = 36 === t(e.width), u.style.position = "absolute", r = 12 === t(u.offsetWidth / 3), ae.removeChild(c), u = null
                }
            }

            function t(e) {
                return Math.round(parseFloat(e))
            }

            var n, s, r, o, l, c = a.createElement("div"), u = a.createElement("div");
            u.style && (u.style.backgroundClip = "content-box", u.cloneNode(!0).style.backgroundClip = "", v.clearCloneStyle = "content-box" === u.style.backgroundClip, T.extend(v, {
                boxSizingReliable: function () {
                    return e(), s
                }, pixelBoxStyles: function () {
                    return e(), o
                }, pixelPosition: function () {
                    return e(), n
                }, reliableMarginLeft: function () {
                    return e(), l
                }, scrollboxSize: function () {
                    return e(), r
                }
            }))
        }();
        var Ue = ["Webkit", "Moz", "ms"], Ke = a.createElement("div").style, Ze = {};

        function Qe(e) {
            var t = T.cssProps[e] || Ze[e];
            return t || (e in Ke ? e : Ze[e] = function (e) {
                for (var t = e[0].toUpperCase() + e.slice(1), i = Ue.length; i--;) if ((e = Ue[i] + t) in Ke) return e
            }(e) || e)
        }

        var Je = /^(none|table(?!-c[ea]).+)/, et = /^--/,
            tt = {position: "absolute", visibility: "hidden", display: "block"},
            it = {letterSpacing: "0", fontWeight: "400"};

        function nt(e, t, i) {
            var n = se.exec(t);
            return n ? Math.max(0, n[2] - (i || 0)) + (n[3] || "px") : t
        }

        function st(e, t, i, n, s, r) {
            var a = "width" === t ? 1 : 0, o = 0, l = 0;
            if (i === (n ? "border" : "content")) return 0;
            for (; a < 4; a += 2) "margin" === i && (l += T.css(e, i + re[a], !0, s)), n ? ("content" === i && (l -= T.css(e, "padding" + re[a], !0, s)), "margin" !== i && (l -= T.css(e, "border" + re[a] + "Width", !0, s))) : (l += T.css(e, "padding" + re[a], !0, s), "padding" !== i ? l += T.css(e, "border" + re[a] + "Width", !0, s) : o += T.css(e, "border" + re[a] + "Width", !0, s));
            return !n && r >= 0 && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - r - l - o - .5)) || 0), l
        }

        function rt(e, t, i) {
            var n = Ye(e), s = (!v.boxSizingReliable() || i) && "border-box" === T.css(e, "boxSizing", !1, n), r = s,
                a = Ge(e, t, n), o = "offset" + t[0].toUpperCase() + t.slice(1);
            if (Xe.test(a)) {
                if (!i) return a;
                a = "auto"
            }
            return (!v.boxSizingReliable() && s || "auto" === a || !parseFloat(a) && "inline" === T.css(e, "display", !1, n)) && e.getClientRects().length && (s = "border-box" === T.css(e, "boxSizing", !1, n), (r = o in e) && (a = e[o])), (a = parseFloat(a) || 0) + st(e, t, i || (s ? "border" : "content"), r, n, a) + "px"
        }

        function at(e, t, i, n, s) {
            return new at.prototype.init(e, t, i, n, s)
        }

        T.extend({
            cssHooks: {
                opacity: {
                    get: function (e, t) {
                        if (t) {
                            var i = Ge(e, "opacity");
                            return "" === i ? "1" : i
                        }
                    }
                }
            },
            cssNumber: {
                animationIterationCount: !0,
                columnCount: !0,
                fillOpacity: !0,
                flexGrow: !0,
                flexShrink: !0,
                fontWeight: !0,
                gridArea: !0,
                gridColumn: !0,
                gridColumnEnd: !0,
                gridColumnStart: !0,
                gridRow: !0,
                gridRowEnd: !0,
                gridRowStart: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {},
            style: function (e, t, i, n) {
                if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                    var s, r, a, o = U(t), l = et.test(t), c = e.style;
                    if (l || (t = Qe(o)), a = T.cssHooks[t] || T.cssHooks[o], void 0 === i) return a && "get" in a && void 0 !== (s = a.get(e, !1, n)) ? s : c[t];
                    "string" === (r = typeof i) && (s = se.exec(i)) && s[1] && (i = de(e, t, s), r = "number"), null != i && i == i && ("number" !== r || l || (i += s && s[3] || (T.cssNumber[o] ? "" : "px")), v.clearCloneStyle || "" !== i || 0 !== t.indexOf("background") || (c[t] = "inherit"), a && "set" in a && void 0 === (i = a.set(e, i, n)) || (l ? c.setProperty(t, i) : c[t] = i))
                }
            },
            css: function (e, t, i, n) {
                var s, r, a, o = U(t);
                return et.test(t) || (t = Qe(o)), (a = T.cssHooks[t] || T.cssHooks[o]) && "get" in a && (s = a.get(e, !0, i)), void 0 === s && (s = Ge(e, t, n)), "normal" === s && t in it && (s = it[t]), "" === i || i ? (r = parseFloat(s), !0 === i || isFinite(r) ? r || 0 : s) : s
            }
        }), T.each(["height", "width"], function (e, t) {
            T.cssHooks[t] = {
                get: function (e, i, n) {
                    if (i) return !Je.test(T.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? rt(e, t, n) : ue(e, tt, function () {
                        return rt(e, t, n)
                    })
                }, set: function (e, i, n) {
                    var s, r = Ye(e), a = !v.scrollboxSize() && "absolute" === r.position,
                        o = (a || n) && "border-box" === T.css(e, "boxSizing", !1, r), l = n ? st(e, t, n, o, r) : 0;
                    return o && a && (l -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(r[t]) - st(e, t, "border", !1, r) - .5)), l && (s = se.exec(i)) && "px" !== (s[3] || "px") && (e.style[t] = i, i = T.css(e, t)), nt(0, i, l)
                }
            }
        }), T.cssHooks.marginLeft = We(v.reliableMarginLeft, function (e, t) {
            if (t) return (parseFloat(Ge(e, "marginLeft")) || e.getBoundingClientRect().left - ue(e, {marginLeft: 0}, function () {
                return e.getBoundingClientRect().left
            })) + "px"
        }), T.each({margin: "", padding: "", border: "Width"}, function (e, t) {
            T.cssHooks[e + t] = {
                expand: function (i) {
                    for (var n = 0, s = {}, r = "string" == typeof i ? i.split(" ") : [i]; n < 4; n++) s[e + re[n] + t] = r[n] || r[n - 2] || r[0];
                    return s
                }
            }, "margin" !== e && (T.cssHooks[e + t].set = nt)
        }), T.fn.extend({
            css: function (e, t) {
                return Y(this, function (e, t, i) {
                    var n, s, r = {}, a = 0;
                    if (Array.isArray(t)) {
                        for (n = Ye(e), s = t.length; a < s; a++) r[t[a]] = T.css(e, t[a], !1, n);
                        return r
                    }
                    return void 0 !== i ? T.style(e, t, i) : T.css(e, t)
                }, e, t, arguments.length > 1)
            }
        }), T.Tween = at, at.prototype = {
            constructor: at, init: function (e, t, i, n, s, r) {
                this.elem = e, this.prop = i, this.easing = s || T.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = n, this.unit = r || (T.cssNumber[i] ? "" : "px")
            }, cur: function () {
                var e = at.propHooks[this.prop];
                return e && e.get ? e.get(this) : at.propHooks._default.get(this)
            }, run: function (e) {
                var t, i = at.propHooks[this.prop];
                return this.options.duration ? this.pos = t = T.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), i && i.set ? i.set(this) : at.propHooks._default.set(this), this
            }
        }, at.prototype.init.prototype = at.prototype, at.propHooks = {
            _default: {
                get: function (e) {
                    var t;
                    return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = T.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
                }, set: function (e) {
                    T.fx.step[e.prop] ? T.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !T.cssHooks[e.prop] && null == e.elem.style[Qe(e.prop)] ? e.elem[e.prop] = e.now : T.style(e.elem, e.prop, e.now + e.unit)
                }
            }
        }, at.propHooks.scrollTop = at.propHooks.scrollLeft = {
            set: function (e) {
                e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
            }
        }, T.easing = {
            linear: function (e) {
                return e
            }, swing: function (e) {
                return .5 - Math.cos(e * Math.PI) / 2
            }, _default: "swing"
        }, T.fx = at.prototype.init, T.fx.step = {};
        var ot, lt, ct = /^(?:toggle|show|hide)$/, ut = /queueHooks$/;

        function dt() {
            lt && (!1 === a.hidden && i.requestAnimationFrame ? i.requestAnimationFrame(dt) : i.setTimeout(dt, T.fx.interval), T.fx.tick())
        }

        function ht() {
            return i.setTimeout(function () {
                ot = void 0
            }), ot = Date.now()
        }

        function pt(e, t) {
            var i, n = 0, s = {height: e};
            for (t = t ? 1 : 0; n < 4; n += 2 - t) s["margin" + (i = re[n])] = s["padding" + i] = e;
            return t && (s.opacity = s.width = e), s
        }

        function ft(e, t, i) {
            for (var n, s = (mt.tweeners[t] || []).concat(mt.tweeners["*"]), r = 0, a = s.length; r < a; r++) if (n = s[r].call(i, t, e)) return n
        }

        function mt(e, t, i) {
            var n, s, r = 0, a = mt.prefilters.length, o = T.Deferred().always(function () {
                delete l.elem
            }), l = function () {
                if (s) return !1;
                for (var t = ot || ht(), i = Math.max(0, c.startTime + c.duration - t), n = 1 - (i / c.duration || 0), r = 0, a = c.tweens.length; r < a; r++) c.tweens[r].run(n);
                return o.notifyWith(e, [c, n, i]), n < 1 && a ? i : (a || o.notifyWith(e, [c, 1, 0]), o.resolveWith(e, [c]), !1)
            }, c = o.promise({
                elem: e,
                props: T.extend({}, t),
                opts: T.extend(!0, {specialEasing: {}, easing: T.easing._default}, i),
                originalProperties: t,
                originalOptions: i,
                startTime: ot || ht(),
                duration: i.duration,
                tweens: [],
                createTween: function (t, i) {
                    var n = T.Tween(e, c.opts, t, i, c.opts.specialEasing[t] || c.opts.easing);
                    return c.tweens.push(n), n
                },
                stop: function (t) {
                    var i = 0, n = t ? c.tweens.length : 0;
                    if (s) return this;
                    for (s = !0; i < n; i++) c.tweens[i].run(1);
                    return t ? (o.notifyWith(e, [c, 1, 0]), o.resolveWith(e, [c, t])) : o.rejectWith(e, [c, t]), this
                }
            }), u = c.props;
            for (!function (e, t) {
                var i, n, s, r, a;
                for (i in e) if (s = t[n = U(i)], r = e[i], Array.isArray(r) && (s = r[1], r = e[i] = r[0]), i !== n && (e[n] = r, delete e[i]), (a = T.cssHooks[n]) && "expand" in a) for (i in r = a.expand(r), delete e[n], r) i in e || (e[i] = r[i], t[i] = s); else t[n] = s
            }(u, c.opts.specialEasing); r < a; r++) if (n = mt.prefilters[r].call(c, e, u, c.opts)) return y(n.stop) && (T._queueHooks(c.elem, c.opts.queue).stop = n.stop.bind(n)), n;
            return T.map(u, ft, c), y(c.opts.start) && c.opts.start.call(e, c), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always), T.fx.timer(T.extend(l, {
                elem: e,
                anim: c,
                queue: c.opts.queue
            })), c
        }

        T.Animation = T.extend(mt, {
            tweeners: {
                "*": [function (e, t) {
                    var i = this.createTween(e, t);
                    return de(i.elem, e, se.exec(t), i), i
                }]
            }, tweener: function (e, t) {
                y(e) ? (t = e, e = ["*"]) : e = e.match(R);
                for (var i, n = 0, s = e.length; n < s; n++) i = e[n], mt.tweeners[i] = mt.tweeners[i] || [], mt.tweeners[i].unshift(t)
            }, prefilters: [function (e, t, i) {
                var n, s, r, a, o, l, c, u, d = "width" in t || "height" in t, h = this, p = {}, f = e.style,
                    m = e.nodeType && ce(e), g = Q.get(e, "fxshow");
                for (n in i.queue || (null == (a = T._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, o = a.empty.fire, a.empty.fire = function () {
                    a.unqueued || o()
                }), a.unqueued++, h.always(function () {
                    h.always(function () {
                        a.unqueued--, T.queue(e, "fx").length || a.empty.fire()
                    })
                })), t) if (s = t[n], ct.test(s)) {
                    if (delete t[n], r = r || "toggle" === s, s === (m ? "hide" : "show")) {
                        if ("show" !== s || !g || void 0 === g[n]) continue;
                        m = !0
                    }
                    p[n] = g && g[n] || T.style(e, n)
                }
                if ((l = !T.isEmptyObject(t)) || !T.isEmptyObject(p)) for (n in d && 1 === e.nodeType && (i.overflow = [f.overflow, f.overflowX, f.overflowY], null == (c = g && g.display) && (c = Q.get(e, "display")), "none" === (u = T.css(e, "display")) && (c ? u = c : (fe([e], !0), c = e.style.display || c, u = T.css(e, "display"), fe([e]))), ("inline" === u || "inline-block" === u && null != c) && "none" === T.css(e, "float") && (l || (h.done(function () {
                    f.display = c
                }), null == c && (u = f.display, c = "none" === u ? "" : u)), f.display = "inline-block")), i.overflow && (f.overflow = "hidden", h.always(function () {
                    f.overflow = i.overflow[0], f.overflowX = i.overflow[1], f.overflowY = i.overflow[2]
                })), l = !1, p) l || (g ? "hidden" in g && (m = g.hidden) : g = Q.access(e, "fxshow", {display: c}), r && (g.hidden = !m), m && fe([e], !0), h.done(function () {
                    for (n in m || fe([e]), Q.remove(e, "fxshow"), p) T.style(e, n, p[n])
                })), l = ft(m ? g[n] : 0, n, h), n in g || (g[n] = l.start, m && (l.end = l.start, l.start = 0))
            }], prefilter: function (e, t) {
                t ? mt.prefilters.unshift(e) : mt.prefilters.push(e)
            }
        }), T.speed = function (e, t, i) {
            var n = e && "object" == typeof e ? T.extend({}, e) : {
                complete: i || !i && t || y(e) && e,
                duration: e,
                easing: i && t || t && !y(t) && t
            };
            return T.fx.off ? n.duration = 0 : "number" != typeof n.duration && (n.duration in T.fx.speeds ? n.duration = T.fx.speeds[n.duration] : n.duration = T.fx.speeds._default), null != n.queue && !0 !== n.queue || (n.queue = "fx"), n.old = n.complete, n.complete = function () {
                y(n.old) && n.old.call(this), n.queue && T.dequeue(this, n.queue)
            }, n
        }, T.fn.extend({
            fadeTo: function (e, t, i, n) {
                return this.filter(ce).css("opacity", 0).show().end().animate({opacity: t}, e, i, n)
            }, animate: function (e, t, i, n) {
                var s = T.isEmptyObject(e), r = T.speed(t, i, n), a = function () {
                    var t = mt(this, T.extend({}, e), r);
                    (s || Q.get(this, "finish")) && t.stop(!0)
                };
                return a.finish = a, s || !1 === r.queue ? this.each(a) : this.queue(r.queue, a)
            }, stop: function (e, t, i) {
                var n = function (e) {
                    var t = e.stop;
                    delete e.stop, t(i)
                };
                return "string" != typeof e && (i = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function () {
                    var t = !0, s = null != e && e + "queueHooks", r = T.timers, a = Q.get(this);
                    if (s) a[s] && a[s].stop && n(a[s]); else for (s in a) a[s] && a[s].stop && ut.test(s) && n(a[s]);
                    for (s = r.length; s--;) r[s].elem !== this || null != e && r[s].queue !== e || (r[s].anim.stop(i), t = !1, r.splice(s, 1));
                    !t && i || T.dequeue(this, e)
                })
            }, finish: function (e) {
                return !1 !== e && (e = e || "fx"), this.each(function () {
                    var t, i = Q.get(this), n = i[e + "queue"], s = i[e + "queueHooks"], r = T.timers,
                        a = n ? n.length : 0;
                    for (i.finish = !0, T.queue(this, e, []), s && s.stop && s.stop.call(this, !0), t = r.length; t--;) r[t].elem === this && r[t].queue === e && (r[t].anim.stop(!0), r.splice(t, 1));
                    for (t = 0; t < a; t++) n[t] && n[t].finish && n[t].finish.call(this);
                    delete i.finish
                })
            }
        }), T.each(["toggle", "show", "hide"], function (e, t) {
            var i = T.fn[t];
            T.fn[t] = function (e, n, s) {
                return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(pt(t, !0), e, n, s)
            }
        }), T.each({
            slideDown: pt("show"),
            slideUp: pt("hide"),
            slideToggle: pt("toggle"),
            fadeIn: {opacity: "show"},
            fadeOut: {opacity: "hide"},
            fadeToggle: {opacity: "toggle"}
        }, function (e, t) {
            T.fn[e] = function (e, i, n) {
                return this.animate(t, e, i, n)
            }
        }), T.timers = [], T.fx.tick = function () {
            var e, t = 0, i = T.timers;
            for (ot = Date.now(); t < i.length; t++) (e = i[t])() || i[t] !== e || i.splice(t--, 1);
            i.length || T.fx.stop(), ot = void 0
        }, T.fx.timer = function (e) {
            T.timers.push(e), T.fx.start()
        }, T.fx.interval = 13, T.fx.start = function () {
            lt || (lt = !0, dt())
        }, T.fx.stop = function () {
            lt = null
        }, T.fx.speeds = {slow: 600, fast: 200, _default: 400}, T.fn.delay = function (e, t) {
            return e = T.fx && T.fx.speeds[e] || e, t = t || "fx", this.queue(t, function (t, n) {
                var s = i.setTimeout(t, e);
                n.stop = function () {
                    i.clearTimeout(s)
                }
            })
        }, function () {
            var e = a.createElement("input"), t = a.createElement("select").appendChild(a.createElement("option"));
            e.type = "checkbox", v.checkOn = "" !== e.value, v.optSelected = t.selected, (e = a.createElement("input")).value = "t", e.type = "radio", v.radioValue = "t" === e.value
        }();
        var gt, vt = T.expr.attrHandle;
        T.fn.extend({
            attr: function (e, t) {
                return Y(this, T.attr, e, t, arguments.length > 1)
            }, removeAttr: function (e) {
                return this.each(function () {
                    T.removeAttr(this, e)
                })
            }
        }), T.extend({
            attr: function (e, t, i) {
                var n, s, r = e.nodeType;
                if (3 !== r && 8 !== r && 2 !== r) return void 0 === e.getAttribute ? T.prop(e, t, i) : (1 === r && T.isXMLDoc(e) || (s = T.attrHooks[t.toLowerCase()] || (T.expr.match.bool.test(t) ? gt : void 0)), void 0 !== i ? null === i ? void T.removeAttr(e, t) : s && "set" in s && void 0 !== (n = s.set(e, i, t)) ? n : (e.setAttribute(t, i + ""), i) : s && "get" in s && null !== (n = s.get(e, t)) ? n : null == (n = T.find.attr(e, t)) ? void 0 : n)
            }, attrHooks: {
                type: {
                    set: function (e, t) {
                        if (!v.radioValue && "radio" === t && $(e, "input")) {
                            var i = e.value;
                            return e.setAttribute("type", t), i && (e.value = i), t
                        }
                    }
                }
            }, removeAttr: function (e, t) {
                var i, n = 0, s = t && t.match(R);
                if (s && 1 === e.nodeType) for (; i = s[n++];) e.removeAttribute(i)
            }
        }), gt = {
            set: function (e, t, i) {
                return !1 === t ? T.removeAttr(e, i) : e.setAttribute(i, i), i
            }
        }, T.each(T.expr.match.bool.source.match(/\w+/g), function (e, t) {
            var i = vt[t] || T.find.attr;
            vt[t] = function (e, t, n) {
                var s, r, a = t.toLowerCase();
                return n || (r = vt[a], vt[a] = s, s = null != i(e, t, n) ? a : null, vt[a] = r), s
            }
        });
        var yt = /^(?:input|select|textarea|button)$/i, _t = /^(?:a|area)$/i;

        function bt(e) {
            return (e.match(R) || []).join(" ")
        }

        function xt(e) {
            return e.getAttribute && e.getAttribute("class") || ""
        }

        function wt(e) {
            return Array.isArray(e) ? e : "string" == typeof e && e.match(R) || []
        }

        T.fn.extend({
            prop: function (e, t) {
                return Y(this, T.prop, e, t, arguments.length > 1)
            }, removeProp: function (e) {
                return this.each(function () {
                    delete this[T.propFix[e] || e]
                })
            }
        }), T.extend({
            prop: function (e, t, i) {
                var n, s, r = e.nodeType;
                if (3 !== r && 8 !== r && 2 !== r) return 1 === r && T.isXMLDoc(e) || (t = T.propFix[t] || t, s = T.propHooks[t]), void 0 !== i ? s && "set" in s && void 0 !== (n = s.set(e, i, t)) ? n : e[t] = i : s && "get" in s && null !== (n = s.get(e, t)) ? n : e[t]
            }, propHooks: {
                tabIndex: {
                    get: function (e) {
                        var t = T.find.attr(e, "tabindex");
                        return t ? parseInt(t, 10) : yt.test(e.nodeName) || _t.test(e.nodeName) && e.href ? 0 : -1
                    }
                }
            }, propFix: {for: "htmlFor", class: "className"}
        }), v.optSelected || (T.propHooks.selected = {
            get: function (e) {
                var t = e.parentNode;
                return t && t.parentNode && t.parentNode.selectedIndex, null
            }, set: function (e) {
                var t = e.parentNode;
                t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
            }
        }), T.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
            T.propFix[this.toLowerCase()] = this
        }), T.fn.extend({
            addClass: function (e) {
                var t, i, n, s, r, a, o, l = 0;
                if (y(e)) return this.each(function (t) {
                    T(this).addClass(e.call(this, t, xt(this)))
                });
                if ((t = wt(e)).length) for (; i = this[l++];) if (s = xt(i), n = 1 === i.nodeType && " " + bt(s) + " ") {
                    for (a = 0; r = t[a++];) n.indexOf(" " + r + " ") < 0 && (n += r + " ");
                    s !== (o = bt(n)) && i.setAttribute("class", o)
                }
                return this
            }, removeClass: function (e) {
                var t, i, n, s, r, a, o, l = 0;
                if (y(e)) return this.each(function (t) {
                    T(this).removeClass(e.call(this, t, xt(this)))
                });
                if (!arguments.length) return this.attr("class", "");
                if ((t = wt(e)).length) for (; i = this[l++];) if (s = xt(i), n = 1 === i.nodeType && " " + bt(s) + " ") {
                    for (a = 0; r = t[a++];) for (; n.indexOf(" " + r + " ") > -1;) n = n.replace(" " + r + " ", " ");
                    s !== (o = bt(n)) && i.setAttribute("class", o)
                }
                return this
            }, toggleClass: function (e, t) {
                var i = typeof e, n = "string" === i || Array.isArray(e);
                return "boolean" == typeof t && n ? t ? this.addClass(e) : this.removeClass(e) : y(e) ? this.each(function (i) {
                    T(this).toggleClass(e.call(this, i, xt(this), t), t)
                }) : this.each(function () {
                    var t, s, r, a;
                    if (n) for (s = 0, r = T(this), a = wt(e); t = a[s++];) r.hasClass(t) ? r.removeClass(t) : r.addClass(t); else void 0 !== e && "boolean" !== i || ((t = xt(this)) && Q.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : Q.get(this, "__className__") || ""))
                })
            }, hasClass: function (e) {
                var t, i, n = 0;
                for (t = " " + e + " "; i = this[n++];) if (1 === i.nodeType && (" " + bt(xt(i)) + " ").indexOf(t) > -1) return !0;
                return !1
            }
        });
        var Tt = /\r/g;
        T.fn.extend({
            val: function (e) {
                var t, i, n, s = this[0];
                return arguments.length ? (n = y(e), this.each(function (i) {
                    var s;
                    1 === this.nodeType && (null == (s = n ? e.call(this, i, T(this).val()) : e) ? s = "" : "number" == typeof s ? s += "" : Array.isArray(s) && (s = T.map(s, function (e) {
                        return null == e ? "" : e + ""
                    })), (t = T.valHooks[this.type] || T.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, s, "value") || (this.value = s))
                })) : s ? (t = T.valHooks[s.type] || T.valHooks[s.nodeName.toLowerCase()]) && "get" in t && void 0 !== (i = t.get(s, "value")) ? i : "string" == typeof (i = s.value) ? i.replace(Tt, "") : null == i ? "" : i : void 0
            }
        }), T.extend({
            valHooks: {
                option: {
                    get: function (e) {
                        var t = T.find.attr(e, "value");
                        return null != t ? t : bt(T.text(e))
                    }
                }, select: {
                    get: function (e) {
                        var t, i, n, s = e.options, r = e.selectedIndex, a = "select-one" === e.type, o = a ? null : [],
                            l = a ? r + 1 : s.length;
                        for (n = r < 0 ? l : a ? r : 0; n < l; n++) if (((i = s[n]).selected || n === r) && !i.disabled && (!i.parentNode.disabled || !$(i.parentNode, "optgroup"))) {
                            if (t = T(i).val(), a) return t;
                            o.push(t)
                        }
                        return o
                    }, set: function (e, t) {
                        for (var i, n, s = e.options, r = T.makeArray(t), a = s.length; a--;) ((n = s[a]).selected = T.inArray(T.valHooks.option.get(n), r) > -1) && (i = !0);
                        return i || (e.selectedIndex = -1), r
                    }
                }
            }
        }), T.each(["radio", "checkbox"], function () {
            T.valHooks[this] = {
                set: function (e, t) {
                    if (Array.isArray(t)) return e.checked = T.inArray(T(e).val(), t) > -1
                }
            }, v.checkOn || (T.valHooks[this].get = function (e) {
                return null === e.getAttribute("value") ? "on" : e.value
            })
        }), v.focusin = "onfocusin" in i;
        var Ct = /^(?:focusinfocus|focusoutblur)$/, St = function (e) {
            e.stopPropagation()
        };
        T.extend(T.event, {
            trigger: function (e, t, n, s) {
                var r, o, l, c, u, d, h, p, m = [n || a], g = f.call(e, "type") ? e.type : e,
                    v = f.call(e, "namespace") ? e.namespace.split(".") : [];
                if (o = p = l = n = n || a, 3 !== n.nodeType && 8 !== n.nodeType && !Ct.test(g + T.event.triggered) && (g.indexOf(".") > -1 && (v = g.split("."), g = v.shift(), v.sort()), u = g.indexOf(":") < 0 && "on" + g, (e = e[T.expando] ? e : new T.Event(g, "object" == typeof e && e)).isTrigger = s ? 2 : 3, e.namespace = v.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + v.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : T.makeArray(t, [e]), h = T.event.special[g] || {}, s || !h.trigger || !1 !== h.trigger.apply(n, t))) {
                    if (!s && !h.noBubble && !_(n)) {
                        for (c = h.delegateType || g, Ct.test(c + g) || (o = o.parentNode); o; o = o.parentNode) m.push(o), l = o;
                        l === (n.ownerDocument || a) && m.push(l.defaultView || l.parentWindow || i)
                    }
                    for (r = 0; (o = m[r++]) && !e.isPropagationStopped();) p = o, e.type = r > 1 ? c : h.bindType || g, (d = (Q.get(o, "events") || {})[e.type] && Q.get(o, "handle")) && d.apply(o, t), (d = u && o[u]) && d.apply && K(o) && (e.result = d.apply(o, t), !1 === e.result && e.preventDefault());
                    return e.type = g, s || e.isDefaultPrevented() || h._default && !1 !== h._default.apply(m.pop(), t) || !K(n) || u && y(n[g]) && !_(n) && ((l = n[u]) && (n[u] = null), T.event.triggered = g, e.isPropagationStopped() && p.addEventListener(g, St), n[g](), e.isPropagationStopped() && p.removeEventListener(g, St), T.event.triggered = void 0, l && (n[u] = l)), e.result
                }
            }, simulate: function (e, t, i) {
                var n = T.extend(new T.Event, i, {type: e, isSimulated: !0});
                T.event.trigger(n, null, t)
            }
        }), T.fn.extend({
            trigger: function (e, t) {
                return this.each(function () {
                    T.event.trigger(e, t, this)
                })
            }, triggerHandler: function (e, t) {
                var i = this[0];
                if (i) return T.event.trigger(e, t, i, !0)
            }
        }), v.focusin || T.each({focus: "focusin", blur: "focusout"}, function (e, t) {
            var i = function (e) {
                T.event.simulate(t, e.target, T.event.fix(e))
            };
            T.event.special[t] = {
                setup: function () {
                    var n = this.ownerDocument || this, s = Q.access(n, t);
                    s || n.addEventListener(e, i, !0), Q.access(n, t, (s || 0) + 1)
                }, teardown: function () {
                    var n = this.ownerDocument || this, s = Q.access(n, t) - 1;
                    s ? Q.access(n, t, s) : (n.removeEventListener(e, i, !0), Q.remove(n, t))
                }
            }
        });
        var Et = i.location, Pt = Date.now(), kt = /\?/;
        T.parseXML = function (e) {
            var t;
            if (!e || "string" != typeof e) return null;
            try {
                t = (new i.DOMParser).parseFromString(e, "text/xml")
            } catch (e) {
                t = void 0
            }
            return t && !t.getElementsByTagName("parsererror").length || T.error("Invalid XML: " + e), t
        };
        var Mt = /\[\]$/, $t = /\r?\n/g, Ot = /^(?:submit|button|image|reset|file)$/i,
            At = /^(?:input|select|textarea|keygen)/i;

        function Dt(e, t, i, n) {
            var s;
            if (Array.isArray(t)) T.each(t, function (t, s) {
                i || Mt.test(e) ? n(e, s) : Dt(e + "[" + ("object" == typeof s && null != s ? t : "") + "]", s, i, n)
            }); else if (i || "object" !== w(t)) n(e, t); else for (s in t) Dt(e + "[" + s + "]", t[s], i, n)
        }

        T.param = function (e, t) {
            var i, n = [], s = function (e, t) {
                var i = y(t) ? t() : t;
                n[n.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == i ? "" : i)
            };
            if (null == e) return "";
            if (Array.isArray(e) || e.jquery && !T.isPlainObject(e)) T.each(e, function () {
                s(this.name, this.value)
            }); else for (i in e) Dt(i, e[i], t, s);
            return n.join("&")
        }, T.fn.extend({
            serialize: function () {
                return T.param(this.serializeArray())
            }, serializeArray: function () {
                return this.map(function () {
                    var e = T.prop(this, "elements");
                    return e ? T.makeArray(e) : this
                }).filter(function () {
                    var e = this.type;
                    return this.name && !T(this).is(":disabled") && At.test(this.nodeName) && !Ot.test(e) && (this.checked || !me.test(e))
                }).map(function (e, t) {
                    var i = T(this).val();
                    return null == i ? null : Array.isArray(i) ? T.map(i, function (e) {
                        return {name: t.name, value: e.replace($t, "\r\n")}
                    }) : {name: t.name, value: i.replace($t, "\r\n")}
                }).get()
            }
        });
        var Lt = /%20/g, zt = /#.*$/, It = /([?&])_=[^&]*/, Nt = /^(.*?):[ \t]*([^\r\n]*)$/gm, Rt = /^(?:GET|HEAD)$/,
            jt = /^\/\//, Ht = {}, Ft = {}, Bt = "*/".concat("*"), qt = a.createElement("a");

        function Xt(e) {
            return function (t, i) {
                "string" != typeof t && (i = t, t = "*");
                var n, s = 0, r = t.toLowerCase().match(R) || [];
                if (y(i)) for (; n = r[s++];) "+" === n[0] ? (n = n.slice(1) || "*", (e[n] = e[n] || []).unshift(i)) : (e[n] = e[n] || []).push(i)
            }
        }

        function Yt(e, t, i, n) {
            var s = {}, r = e === Ft;

            function a(o) {
                var l;
                return s[o] = !0, T.each(e[o] || [], function (e, o) {
                    var c = o(t, i, n);
                    return "string" != typeof c || r || s[c] ? r ? !(l = c) : void 0 : (t.dataTypes.unshift(c), a(c), !1)
                }), l
            }

            return a(t.dataTypes[0]) || !s["*"] && a("*")
        }

        function Vt(e, t) {
            var i, n, s = T.ajaxSettings.flatOptions || {};
            for (i in t) void 0 !== t[i] && ((s[i] ? e : n || (n = {}))[i] = t[i]);
            return n && T.extend(!0, e, n), e
        }

        qt.href = Et.href, T.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: Et.href,
                type: "GET",
                isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Et.protocol),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": Bt,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/},
                responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
                converters: {"* text": String, "text html": !0, "text json": JSON.parse, "text xml": T.parseXML},
                flatOptions: {url: !0, context: !0}
            },
            ajaxSetup: function (e, t) {
                return t ? Vt(Vt(e, T.ajaxSettings), t) : Vt(T.ajaxSettings, e)
            },
            ajaxPrefilter: Xt(Ht),
            ajaxTransport: Xt(Ft),
            ajax: function (e, t) {
                "object" == typeof e && (t = e, e = void 0), t = t || {};
                var n, s, r, o, l, c, u, d, h, p, f = T.ajaxSetup({}, t), m = f.context || f,
                    g = f.context && (m.nodeType || m.jquery) ? T(m) : T.event, v = T.Deferred(),
                    y = T.Callbacks("once memory"), _ = f.statusCode || {}, b = {}, x = {}, w = "canceled", C = {
                        readyState: 0, getResponseHeader: function (e) {
                            var t;
                            if (u) {
                                if (!o) for (o = {}; t = Nt.exec(r);) o[t[1].toLowerCase() + " "] = (o[t[1].toLowerCase() + " "] || []).concat(t[2]);
                                t = o[e.toLowerCase() + " "]
                            }
                            return null == t ? null : t.join(", ")
                        }, getAllResponseHeaders: function () {
                            return u ? r : null
                        }, setRequestHeader: function (e, t) {
                            return null == u && (e = x[e.toLowerCase()] = x[e.toLowerCase()] || e, b[e] = t), this
                        }, overrideMimeType: function (e) {
                            return null == u && (f.mimeType = e), this
                        }, statusCode: function (e) {
                            var t;
                            if (e) if (u) C.always(e[C.status]); else for (t in e) _[t] = [_[t], e[t]];
                            return this
                        }, abort: function (e) {
                            var t = e || w;
                            return n && n.abort(t), S(0, t), this
                        }
                    };
                if (v.promise(C), f.url = ((e || f.url || Et.href) + "").replace(jt, Et.protocol + "//"), f.type = t.method || t.type || f.method || f.type, f.dataTypes = (f.dataType || "*").toLowerCase().match(R) || [""], null == f.crossDomain) {
                    c = a.createElement("a");
                    try {
                        c.href = f.url, c.href = c.href, f.crossDomain = qt.protocol + "//" + qt.host != c.protocol + "//" + c.host
                    } catch (e) {
                        f.crossDomain = !0
                    }
                }
                if (f.data && f.processData && "string" != typeof f.data && (f.data = T.param(f.data, f.traditional)), Yt(Ht, f, t, C), u) return C;
                for (h in (d = T.event && f.global) && 0 == T.active++ && T.event.trigger("ajaxStart"), f.type = f.type.toUpperCase(), f.hasContent = !Rt.test(f.type), s = f.url.replace(zt, ""), f.hasContent ? f.data && f.processData && 0 === (f.contentType || "").indexOf("application/x-www-form-urlencoded") && (f.data = f.data.replace(Lt, "+")) : (p = f.url.slice(s.length), f.data && (f.processData || "string" == typeof f.data) && (s += (kt.test(s) ? "&" : "?") + f.data, delete f.data), !1 === f.cache && (s = s.replace(It, "$1"), p = (kt.test(s) ? "&" : "?") + "_=" + Pt++ + p), f.url = s + p), f.ifModified && (T.lastModified[s] && C.setRequestHeader("If-Modified-Since", T.lastModified[s]), T.etag[s] && C.setRequestHeader("If-None-Match", T.etag[s])), (f.data && f.hasContent && !1 !== f.contentType || t.contentType) && C.setRequestHeader("Content-Type", f.contentType), C.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + Bt + "; q=0.01" : "") : f.accepts["*"]), f.headers) C.setRequestHeader(h, f.headers[h]);
                if (f.beforeSend && (!1 === f.beforeSend.call(m, C, f) || u)) return C.abort();
                if (w = "abort", y.add(f.complete), C.done(f.success), C.fail(f.error), n = Yt(Ft, f, t, C)) {
                    if (C.readyState = 1, d && g.trigger("ajaxSend", [C, f]), u) return C;
                    f.async && f.timeout > 0 && (l = i.setTimeout(function () {
                        C.abort("timeout")
                    }, f.timeout));
                    try {
                        u = !1, n.send(b, S)
                    } catch (e) {
                        if (u) throw e;
                        S(-1, e)
                    }
                } else S(-1, "No Transport");

                function S(e, t, a, o) {
                    var c, h, p, b, x, w = t;
                    u || (u = !0, l && i.clearTimeout(l), n = void 0, r = o || "", C.readyState = e > 0 ? 4 : 0, c = e >= 200 && e < 300 || 304 === e, a && (b = function (e, t, i) {
                        for (var n, s, r, a, o = e.contents, l = e.dataTypes; "*" === l[0];) l.shift(), void 0 === n && (n = e.mimeType || t.getResponseHeader("Content-Type"));
                        if (n) for (s in o) if (o[s] && o[s].test(n)) {
                            l.unshift(s);
                            break
                        }
                        if (l[0] in i) r = l[0]; else {
                            for (s in i) {
                                if (!l[0] || e.converters[s + " " + l[0]]) {
                                    r = s;
                                    break
                                }
                                a || (a = s)
                            }
                            r = r || a
                        }
                        if (r) return r !== l[0] && l.unshift(r), i[r]
                    }(f, C, a)), b = function (e, t, i, n) {
                        var s, r, a, o, l, c = {}, u = e.dataTypes.slice();
                        if (u[1]) for (a in e.converters) c[a.toLowerCase()] = e.converters[a];
                        for (r = u.shift(); r;) if (e.responseFields[r] && (i[e.responseFields[r]] = t), !l && n && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = r, r = u.shift()) if ("*" === r) r = l; else if ("*" !== l && l !== r) {
                            if (!(a = c[l + " " + r] || c["* " + r])) for (s in c) if ((o = s.split(" "))[1] === r && (a = c[l + " " + o[0]] || c["* " + o[0]])) {
                                !0 === a ? a = c[s] : !0 !== c[s] && (r = o[0], u.unshift(o[1]));
                                break
                            }
                            if (!0 !== a) if (a && e.throws) t = a(t); else try {
                                t = a(t)
                            } catch (e) {
                                return {state: "parsererror", error: a ? e : "No conversion from " + l + " to " + r}
                            }
                        }
                        return {state: "success", data: t}
                    }(f, b, C, c), c ? (f.ifModified && ((x = C.getResponseHeader("Last-Modified")) && (T.lastModified[s] = x), (x = C.getResponseHeader("etag")) && (T.etag[s] = x)), 204 === e || "HEAD" === f.type ? w = "nocontent" : 304 === e ? w = "notmodified" : (w = b.state, h = b.data, c = !(p = b.error))) : (p = w, !e && w || (w = "error", e < 0 && (e = 0))), C.status = e, C.statusText = (t || w) + "", c ? v.resolveWith(m, [h, w, C]) : v.rejectWith(m, [C, w, p]), C.statusCode(_), _ = void 0, d && g.trigger(c ? "ajaxSuccess" : "ajaxError", [C, f, c ? h : p]), y.fireWith(m, [C, w]), d && (g.trigger("ajaxComplete", [C, f]), --T.active || T.event.trigger("ajaxStop")))
                }

                return C
            },
            getJSON: function (e, t, i) {
                return T.get(e, t, i, "json")
            },
            getScript: function (e, t) {
                return T.get(e, void 0, t, "script")
            }
        }), T.each(["get", "post"], function (e, t) {
            T[t] = function (e, i, n, s) {
                return y(i) && (s = s || n, n = i, i = void 0), T.ajax(T.extend({
                    url: e,
                    type: t,
                    dataType: s,
                    data: i,
                    success: n
                }, T.isPlainObject(e) && e))
            }
        }), T._evalUrl = function (e, t) {
            return T.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                cache: !0,
                async: !1,
                global: !1,
                converters: {
                    "text script": function () {
                    }
                },
                dataFilter: function (e) {
                    T.globalEval(e, t)
                }
            })
        }, T.fn.extend({
            wrapAll: function (e) {
                var t;
                return this[0] && (y(e) && (e = e.call(this[0])), t = T(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                    for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                    return e
                }).append(this)), this
            }, wrapInner: function (e) {
                return y(e) ? this.each(function (t) {
                    T(this).wrapInner(e.call(this, t))
                }) : this.each(function () {
                    var t = T(this), i = t.contents();
                    i.length ? i.wrapAll(e) : t.append(e)
                })
            }, wrap: function (e) {
                var t = y(e);
                return this.each(function (i) {
                    T(this).wrapAll(t ? e.call(this, i) : e)
                })
            }, unwrap: function (e) {
                return this.parent(e).not("body").each(function () {
                    T(this).replaceWith(this.childNodes)
                }), this
            }
        }), T.expr.pseudos.hidden = function (e) {
            return !T.expr.pseudos.visible(e)
        }, T.expr.pseudos.visible = function (e) {
            return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
        }, T.ajaxSettings.xhr = function () {
            try {
                return new i.XMLHttpRequest
            } catch (e) {
            }
        };
        var Gt = {0: 200, 1223: 204}, Wt = T.ajaxSettings.xhr();
        v.cors = !!Wt && "withCredentials" in Wt, v.ajax = Wt = !!Wt, T.ajaxTransport(function (e) {
            var t, n;
            if (v.cors || Wt && !e.crossDomain) return {
                send: function (s, r) {
                    var a, o = e.xhr();
                    if (o.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields) for (a in e.xhrFields) o[a] = e.xhrFields[a];
                    for (a in e.mimeType && o.overrideMimeType && o.overrideMimeType(e.mimeType), e.crossDomain || s["X-Requested-With"] || (s["X-Requested-With"] = "XMLHttpRequest"), s) o.setRequestHeader(a, s[a]);
                    t = function (e) {
                        return function () {
                            t && (t = n = o.onload = o.onerror = o.onabort = o.ontimeout = o.onreadystatechange = null, "abort" === e ? o.abort() : "error" === e ? "number" != typeof o.status ? r(0, "error") : r(o.status, o.statusText) : r(Gt[o.status] || o.status, o.statusText, "text" !== (o.responseType || "text") || "string" != typeof o.responseText ? {binary: o.response} : {text: o.responseText}, o.getAllResponseHeaders()))
                        }
                    }, o.onload = t(), n = o.onerror = o.ontimeout = t("error"), void 0 !== o.onabort ? o.onabort = n : o.onreadystatechange = function () {
                        4 === o.readyState && i.setTimeout(function () {
                            t && n()
                        })
                    }, t = t("abort");
                    try {
                        o.send(e.hasContent && e.data || null)
                    } catch (e) {
                        if (t) throw e
                    }
                }, abort: function () {
                    t && t()
                }
            }
        }), T.ajaxPrefilter(function (e) {
            e.crossDomain && (e.contents.script = !1)
        }), T.ajaxSetup({
            accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
            contents: {script: /\b(?:java|ecma)script\b/},
            converters: {
                "text script": function (e) {
                    return T.globalEval(e), e
                }
            }
        }), T.ajaxPrefilter("script", function (e) {
            void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
        }), T.ajaxTransport("script", function (e) {
            var t, i;
            if (e.crossDomain || e.scriptAttrs) return {
                send: function (n, s) {
                    t = T("<script>").attr(e.scriptAttrs || {}).prop({
                        charset: e.scriptCharset,
                        src: e.url
                    }).on("load error", i = function (e) {
                        t.remove(), i = null, e && s("error" === e.type ? 404 : 200, e.type)
                    }), a.head.appendChild(t[0])
                }, abort: function () {
                    i && i()
                }
            }
        });
        var Ut, Kt = [], Zt = /(=)\?(?=&|$)|\?\?/;
        T.ajaxSetup({
            jsonp: "callback", jsonpCallback: function () {
                var e = Kt.pop() || T.expando + "_" + Pt++;
                return this[e] = !0, e
            }
        }), T.ajaxPrefilter("json jsonp", function (e, t, n) {
            var s, r, a,
                o = !1 !== e.jsonp && (Zt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Zt.test(e.data) && "data");
            if (o || "jsonp" === e.dataTypes[0]) return s = e.jsonpCallback = y(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, o ? e[o] = e[o].replace(Zt, "$1" + s) : !1 !== e.jsonp && (e.url += (kt.test(e.url) ? "&" : "?") + e.jsonp + "=" + s), e.converters["script json"] = function () {
                return a || T.error(s + " was not called"), a[0]
            }, e.dataTypes[0] = "json", r = i[s], i[s] = function () {
                a = arguments
            }, n.always(function () {
                void 0 === r ? T(i).removeProp(s) : i[s] = r, e[s] && (e.jsonpCallback = t.jsonpCallback, Kt.push(s)), a && y(r) && r(a[0]), a = r = void 0
            }), "script"
        }), v.createHTMLDocument = ((Ut = a.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Ut.childNodes.length), T.parseHTML = function (e, t, i) {
            return "string" != typeof e ? [] : ("boolean" == typeof t && (i = t, t = !1), t || (v.createHTMLDocument ? ((n = (t = a.implementation.createHTMLDocument("")).createElement("base")).href = a.location.href, t.head.appendChild(n)) : t = a), r = !i && [], (s = O.exec(e)) ? [t.createElement(s[1])] : (s = Ce([e], t, r), r && r.length && T(r).remove(), T.merge([], s.childNodes)));
            var n, s, r
        }, T.fn.load = function (e, t, i) {
            var n, s, r, a = this, o = e.indexOf(" ");
            return o > -1 && (n = bt(e.slice(o)), e = e.slice(0, o)), y(t) ? (i = t, t = void 0) : t && "object" == typeof t && (s = "POST"), a.length > 0 && T.ajax({
                url: e,
                type: s || "GET",
                dataType: "html",
                data: t
            }).done(function (e) {
                r = arguments, a.html(n ? T("<div>").append(T.parseHTML(e)).find(n) : e)
            }).always(i && function (e, t) {
                a.each(function () {
                    i.apply(this, r || [e.responseText, t, e])
                })
            }), this
        }, T.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
            T.fn[t] = function (e) {
                return this.on(t, e)
            }
        }), T.expr.pseudos.animated = function (e) {
            return T.grep(T.timers, function (t) {
                return e === t.elem
            }).length
        }, T.offset = {
            setOffset: function (e, t, i) {
                var n, s, r, a, o, l, c = T.css(e, "position"), u = T(e), d = {};
                "static" === c && (e.style.position = "relative"), o = u.offset(), r = T.css(e, "top"), l = T.css(e, "left"), ("absolute" === c || "fixed" === c) && (r + l).indexOf("auto") > -1 ? (a = (n = u.position()).top, s = n.left) : (a = parseFloat(r) || 0, s = parseFloat(l) || 0), y(t) && (t = t.call(e, i, T.extend({}, o))), null != t.top && (d.top = t.top - o.top + a), null != t.left && (d.left = t.left - o.left + s), "using" in t ? t.using.call(e, d) : u.css(d)
            }
        }, T.fn.extend({
            offset: function (e) {
                if (arguments.length) return void 0 === e ? this : this.each(function (t) {
                    T.offset.setOffset(this, e, t)
                });
                var t, i, n = this[0];
                return n ? n.getClientRects().length ? (t = n.getBoundingClientRect(), i = n.ownerDocument.defaultView, {
                    top: t.top + i.pageYOffset,
                    left: t.left + i.pageXOffset
                }) : {top: 0, left: 0} : void 0
            }, position: function () {
                if (this[0]) {
                    var e, t, i, n = this[0], s = {top: 0, left: 0};
                    if ("fixed" === T.css(n, "position")) t = n.getBoundingClientRect(); else {
                        for (t = this.offset(), i = n.ownerDocument, e = n.offsetParent || i.documentElement; e && (e === i.body || e === i.documentElement) && "static" === T.css(e, "position");) e = e.parentNode;
                        e && e !== n && 1 === e.nodeType && ((s = T(e).offset()).top += T.css(e, "borderTopWidth", !0), s.left += T.css(e, "borderLeftWidth", !0))
                    }
                    return {
                        top: t.top - s.top - T.css(n, "marginTop", !0),
                        left: t.left - s.left - T.css(n, "marginLeft", !0)
                    }
                }
            }, offsetParent: function () {
                return this.map(function () {
                    for (var e = this.offsetParent; e && "static" === T.css(e, "position");) e = e.offsetParent;
                    return e || ae
                })
            }
        }), T.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (e, t) {
            var i = "pageYOffset" === t;
            T.fn[e] = function (n) {
                return Y(this, function (e, n, s) {
                    var r;
                    if (_(e) ? r = e : 9 === e.nodeType && (r = e.defaultView), void 0 === s) return r ? r[t] : e[n];
                    r ? r.scrollTo(i ? r.pageXOffset : s, i ? s : r.pageYOffset) : e[n] = s
                }, e, n, arguments.length)
            }
        }), T.each(["top", "left"], function (e, t) {
            T.cssHooks[t] = We(v.pixelPosition, function (e, i) {
                if (i) return i = Ge(e, t), Xe.test(i) ? T(e).position()[t] + "px" : i
            })
        }), T.each({Height: "height", Width: "width"}, function (e, t) {
            T.each({padding: "inner" + e, content: t, "": "outer" + e}, function (i, n) {
                T.fn[n] = function (s, r) {
                    var a = arguments.length && (i || "boolean" != typeof s),
                        o = i || (!0 === s || !0 === r ? "margin" : "border");
                    return Y(this, function (t, i, s) {
                        var r;
                        return _(t) ? 0 === n.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (r = t.documentElement, Math.max(t.body["scroll" + e], r["scroll" + e], t.body["offset" + e], r["offset" + e], r["client" + e])) : void 0 === s ? T.css(t, i, o) : T.style(t, i, s, o)
                    }, t, a ? s : void 0, a)
                }
            })
        }), T.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, t) {
            T.fn[t] = function (e, i) {
                return arguments.length > 0 ? this.on(t, null, e, i) : this.trigger(t)
            }
        }), T.fn.extend({
            hover: function (e, t) {
                return this.mouseenter(e).mouseleave(t || e)
            }
        }), T.fn.extend({
            bind: function (e, t, i) {
                return this.on(e, null, t, i)
            }, unbind: function (e, t) {
                return this.off(e, null, t)
            }, delegate: function (e, t, i, n) {
                return this.on(t, e, i, n)
            }, undelegate: function (e, t, i) {
                return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", i)
            }
        }), T.proxy = function (e, t) {
            var i, n, s;
            if ("string" == typeof t && (i = e[t], t = e, e = i), y(e)) return n = l.call(arguments, 2), (s = function () {
                return e.apply(t || this, n.concat(l.call(arguments)))
            }).guid = e.guid = e.guid || T.guid++, s
        }, T.holdReady = function (e) {
            e ? T.readyWait++ : T.ready(!0)
        }, T.isArray = Array.isArray, T.parseJSON = JSON.parse, T.nodeName = $, T.isFunction = y, T.isWindow = _, T.camelCase = U, T.type = w, T.now = Date.now, T.isNumeric = function (e) {
            var t = T.type(e);
            return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
        }, void 0 === (n = function () {
            return T
        }.apply(t, [])) || (e.exports = n);
        var Qt = i.jQuery, Jt = i.$;
        return T.noConflict = function (e) {
            return i.$ === T && (i.$ = Jt), e && i.jQuery === T && (i.jQuery = Qt), T
        }, s || (i.jQuery = i.$ = T), T
    })
}, function (e, t, i) {
    i(8), e.exports = i(7)
}, function (e, t) {
    e.exports = function (e) {
        if (!e.webpackPolyfill) {
            var t = Object.create(e);
            t.children || (t.children = []), Object.defineProperty(t, "loaded", {
                enumerable: !0, get: function () {
                    return t.l
                }
            }), Object.defineProperty(t, "id", {
                enumerable: !0, get: function () {
                    return t.i
                }
            }), Object.defineProperty(t, "exports", {enumerable: !0}), t.webpackPolyfill = 1
        }
        return t
    }
}, function (e, t) {
    var i;
    i = function () {
        return this
    }();
    try {
        i = i || new Function("return this")()
    } catch (e) {
        "object" == typeof window && (i = window)
    }
    e.exports = i
}, function (e, t, n) {
    (function (e) {
        var n, s, a, o;

        function l(e) {
            return (l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        /*!
     * Likely 2.3.1 by Ilya Birman (ilyabirman.net)
     * Rewritten sans jQuery by Evgeny Steblinsky (volter9.github.io)
     * Supported by Ivan Akulov (iamakulov.com), Viktor Karpov (vitkarpov.com), and contributors
     * Inspired by Social Likes by Artem Sapegin (sapegin.me)
     */
        o = function () {
            return function (e) {
                function t(n) {
                    if (i[n]) return i[n].exports;
                    var s = i[n] = {i: n, l: !1, exports: {}};
                    return e[n].call(s.exports, s, s.exports, t), s.l = !0, s.exports
                }

                var i = {};
                return t.m = e, t.c = i, t.i = function (e) {
                    return e
                }, t.d = function (e, i, n) {
                    t.o(e, i) || Object.defineProperty(e, i, {configurable: !1, enumerable: !0, get: n})
                }, t.n = function (e) {
                    var i = e && e.__esModule ? function () {
                        return e.default
                    } : function () {
                        return e
                    };
                    return t.d(i, "a", i), i
                }, t.o = function (e, t) {
                    return Object.prototype.hasOwnProperty.call(e, t)
                }, t.p = "", t(t.s = 22)
            }([function (e, t, i) {
                "use strict";
                Object.defineProperty(t, "__esModule", {value: !0}), i.d(t, "each", function () {
                    return r
                }), i.d(t, "toArray", function () {
                    return a
                }), i.d(t, "merge", function () {
                    return o
                }), i.d(t, "extend", function () {
                    return c
                }), i.d(t, "getDataset", function () {
                    return u
                }), i.d(t, "bools", function () {
                    return d
                }), i.d(t, "template", function () {
                    return h
                }), i.d(t, "makeUrl", function () {
                    return p
                }), i.d(t, "query", function () {
                    return f
                }), i.d(t, "set", function () {
                    return m
                }), i.d(t, "getDefaultUrl", function () {
                    return g
                }), i.d(t, "isBrowserEnv", function () {
                    return v
                });
                var n = "function" == typeof Symbol && "symbol" == l(Symbol.iterator) ? function (e) {
                    return l(e)
                } : function (e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : l(e)
                }, s = {yes: !0, no: !1}, r = function (e, t) {
                    for (var i in e) e.hasOwnProperty(i) && t(e[i], i)
                }, a = function (e) {
                    return Array.prototype.slice.call(e)
                }, o = function () {
                    for (var e = {}, t = Array.prototype.slice.call(arguments), i = 0; i < t.length; i++) {
                        var n = t[i];
                        if (n) for (var s in n) n.hasOwnProperty(s) && (e[s] = n[s])
                    }
                    return e
                }, c = function (e, t) {
                    for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
                    return e
                }, u = function (e) {
                    if ("object" === n(e.dataset)) return e.dataset;
                    var t = void 0, i = {}, s = e.attributes, r = void 0, a = function (e) {
                        return e.charAt(1).toUpperCase()
                    };
                    for (t = s.length - 1; t >= 0; t--) (r = s[t]) && r.name && /^data-\w[\w\-]*$/.test(r.name) && (i[r.name.substr(5).replace(/-./g, a)] = r.value);
                    return i
                }, d = function (e) {
                    var t = {}, i = u(e);
                    for (var n in i) if (i.hasOwnProperty(n)) {
                        var r = i[n];
                        t[n] = s[r] || r
                    }
                    return t
                }, h = function (e, t) {
                    return e ? e.replace(/\{([^\}]+)\}/g, function (e, i) {
                        return i in t ? t[i] : e
                    }) : ""
                }, p = function (e, t) {
                    for (var i in t) t.hasOwnProperty(i) && (t[i] = encodeURIComponent(t[i]));
                    return h(e, t)
                }, f = function (e) {
                    var t = encodeURIComponent, i = [];
                    for (var s in e) "object" !== n(e[s]) && i.push(t(s) + "=" + t(e[s]));
                    return i.join("&")
                }, m = function (e, t, i) {
                    var n = t.split("."), s = null;
                    n.forEach(function (t, i) {
                        void 0 === e[t] && (e[t] = {}), i !== n.length - 1 && (e = e[t]), s = t
                    }), e[s] = i
                }, g = function () {
                    var e = document.querySelector('link[rel="canonical"]');
                    return e ? e.href : window.location.href.replace(window.location.hash, "")
                }, v = "undefined" != typeof window && "undefined" != typeof document && document.createElement
            }, function (e, t, i) {
                "use strict";
                Object.defineProperty(t, "__esModule", {value: !0}), i.d(t, "global", function () {
                    return s
                }), i.d(t, "wrapSVG", function () {
                    return o
                }), i.d(t, "createNode", function () {
                    return l
                }), i.d(t, "getScript", function () {
                    return c
                }), i.d(t, "getJSON", function () {
                    return u
                }), i.d(t, "find", function () {
                    return d
                }), i.d(t, "findAll", function () {
                    return h
                }), i.d(t, "openPopup", function () {
                    return p
                }), i.d(t, "createTempLink", function () {
                    return f
                });
                var n = i(0), s = n.isBrowserEnv ? window : {}, r = n.isBrowserEnv ? document.createElement("div") : {},
                    a = 0;
                s.__likelyCallbacks = {};
                var o = function (e) {
                    return '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path d="M' + e + 'z"/></svg>'
                }, l = function (e) {
                    return r.innerHTML = e, r.children[0]
                }, c = function (e) {
                    var t = document.createElement("script"), i = document.head;
                    t.type = "text/javascript", t.src = e, i.appendChild(t), i.removeChild(t)
                }, u = function (e, t) {
                    var i = encodeURIComponent("random_fun_" + ++a),
                        n = e.replace(/callback=(\?)/, "callback=__likelyCallbacks." + i);
                    s.__likelyCallbacks[i] = t, c(n)
                }, d = function (e, t) {
                    return (t || document).querySelector(e)
                }, h = function (e, t) {
                    return Array.prototype.slice.call((t || document).querySelectorAll(e))
                }, p = function (e, t, i, n) {
                    var s = Math.round(screen.width / 2 - i / 2), r = 0;
                    screen.height > n && (r = Math.round(screen.height / 3 - n / 2));
                    var a = "left=" + s + ",top=" + r + ",width=" + i + ",height=" + n + ",personalbar=0,toolbar=0,scrollbars=1,resizable=1",
                        o = window.open(e, t, a);
                    return o ? (o.focus(), o) : (location.href = e, null)
                }, f = function (e) {
                    var t = document.createElement("a");
                    t.href = e, t.style = "display: none", document.body.appendChild(t), setTimeout(function () {
                        t.click(), document.body.removeChild(t)
                    })
                }
            }, function (e, t, i) {
                "use strict";
                Object.defineProperty(t, "__esModule", {value: !0}), t.default = {name: "likely", prefix: "likely__"}
            }, function (e, t, i) {
                "use strict";
                var n = i(9), s = i(0), r = i(10), a = i(11), o = i(12), l = i(13), c = i(14), u = i(15), d = i(16),
                    h = i(17), p = i(18), f = {
                        facebook: r.a,
                        gplus: a.a,
                        linkedin: o.a,
                        odnoklassniki: l.a,
                        pinterest: c.a,
                        telegram: u.a,
                        twitter: d.a,
                        vkontakte: h.a,
                        whatsapp: p.a
                    };
                i.i(s.each)(f, function (e, t) {
                    i.i(n.a)(e), e.name = t
                }), t.a = f
            }, function (e, t, i) {
                var n = function () {
                        function e(e, t) {
                            for (var i = 0; i < t.length; i++) {
                                var n = t[i];
                                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                            }
                        }

                        return function (t, i, n) {
                            return i && e(t.prototype, i), n && e(t, n), t
                        }
                    }(), s = i(0), r = s.bools, a = s.getDefaultUrl, o = s.merge, l = i(19).default, c = i(2).default,
                    u = i(1).findAll, d = i(8).default;
                i(20);
                var h = function (e, t) {
                    var i = t || {},
                        n = {counters: !0, timeout: 1e3, zeroes: !1, title: document.title, wait: 500, url: a()},
                        s = e[c.name], u = o({}, n, i, r(e));
                    return s ? s.update(u) : e[c.name] = new l(e, u), s
                }, p = function () {
                    function e() {
                        return function (e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, e), console.warn("likely function is DEPRECATED and will be removed in 3.0. Use likely.initiate instead."), e.initiate.apply(e, arguments)
                    }

                    return n(e, null, [{
                        key: "initate", value: function () {
                            return console.warn("likely.initate function is DEPRECATED and will be removed in 3.0. Use likely.initiate instead."), e.initiate.apply(e, arguments)
                        }
                    }, {
                        key: "initiate", value: function (e, t) {
                            function i() {
                                n.forEach(function (e) {
                                    h(e, s)
                                })
                            }

                            var n = void 0, s = void 0;
                            Array.isArray(e) ? (n = e, s = t) : e instanceof Node ? (n = [e], s = t) : (n = u("." + c.name), s = e), i(), d.onUrlChange(i)
                        }
                    }]), e
                }();
                e.exports = p
            }, function (e, t, i) {
                "use strict";
                var n = i(1), s = i(0), r = i(2), a = i(7), o = i(3), l = function () {
                    function e(e, t) {
                        for (var i = 0; i < t.length; i++) {
                            var n = t[i];
                            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                        }
                    }

                    return function (t, i, n) {
                        return i && e(t.prototype, i), n && e(t, n), t
                    }
                }(), c = '<span class="{className}">{content}</span>', u = function () {
                    function e(t, n, r) {
                        (function (e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        })(this, e), this.widget = t, this.likely = n, this.options = i.i(s.merge)(r), this.init()
                    }

                    return l(e, [{
                        key: "init", value: function () {
                            this.detectService(), this.detectParams(), this.service && (this.initHtml(), setTimeout(this.initCounter.bind(this), 0))
                        }
                    }, {
                        key: "update", value: function (e) {
                            var t = "." + r.default.prefix + "counter", a = i.i(n.findAll)(t, this.widget);
                            i.i(s.extend)(this.options, i.i(s.merge)({forceUpdate: !1}, e)), a.forEach(function (e) {
                                e.parentNode.removeChild(e)
                            }), this.initCounter()
                        }
                    }, {
                        key: "detectService", value: function () {
                            var e = this.widget, t = i.i(s.getDataset)(e).service;
                            t || (t = Object.keys(o.a).filter(function (t) {
                                return e.classList.contains(t)
                            })[0]), t && (this.service = t, i.i(s.extend)(this.options, o.a[t]))
                        }
                    }, {
                        key: "detectParams", value: function () {
                            var e = this.options, t = i.i(s.getDataset)(this.widget);
                            if (t.counter) {
                                var n = parseInt(t.counter, 10);
                                isNaN(n) ? e.counterUrl = t.counter : e.counterNumber = n
                            }
                            e.title = t.title || e.title, e.url = t.url || e.url
                        }
                    }, {
                        key: "initHtml", value: function () {
                            var e = this.options, t = this.widget, r = t.innerHTML;
                            t.addEventListener("click", this.click.bind(this)), t.classList.remove(this.service), t.className += " " + this.className("widget");
                            var a = i.i(s.template)(c, {className: this.className("button"), content: r}),
                                o = i.i(s.template)(c, {
                                    className: this.className("icon"),
                                    content: i.i(n.wrapSVG)(e.svgIconPath)
                                });
                            t.innerHTML = o + a
                        }
                    }, {
                        key: "initCounter", value: function () {
                            var e = this.options;
                            e.counters && e.counterNumber ? this.updateCounter(e.counterNumber) : e.counterUrl && i.i(a.a)(this.service, e.url, e)(this.updateCounter.bind(this))
                        }
                    }, {
                        key: "className", value: function (e) {
                            var t = r.default.prefix + e;
                            return t + " " + t + "_" + this.service
                        }
                    }, {
                        key: "updateCounter", value: function (e) {
                            var t = parseInt(e, 10) || 0,
                                a = i.i(n.find)("." + r.default.name + "__counter", this.widget);
                            a && a.parentNode.removeChild(a);
                            var o = {className: this.className("counter"), content: t};
                            t || this.options.zeroes || (o.className += " " + r.default.prefix + "counter_empty", o.content = ""), this.widget.appendChild(i.i(n.createNode)(i.i(s.template)(c, o))), this.likely.updateCounter(this.service, t)
                        }
                    }, {
                        key: "click", value: function () {
                            var e = this.options;
                            if (e.click.call(this)) {
                                var t = i.i(s.makeUrl)(e.popupUrl, {url: e.url, title: e.title});
                                if (!1 === e.openPopup) return i.i(n.createTempLink)(this.addAdditionalParamsToUrl(t)), !1;
                                i.i(n.openPopup)(this.addAdditionalParamsToUrl(t), r.default.prefix + this.service, e.popupWidth, e.popupHeight)
                            }
                            return !1
                        }
                    }, {
                        key: "addAdditionalParamsToUrl", value: function (e) {
                            var t = i.i(s.query)(i.i(s.merge)(this.widget.dataset, this.options.data)),
                                n = -1 === e.indexOf("?") ? "?" : "&";
                            return "" === t ? e : e + n + t
                        }
                    }]), e
                }();
                t.a = u
            }, function (e, t, i) {
                "use strict";
                var n = "function" == typeof Symbol && "symbol" == l(Symbol.iterator) ? function (e) {
                    return l(e)
                } : function (e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : l(e)
                };
                t.a = function (e) {
                    var t = [];
                    return function (i) {
                        var s = void 0 === i ? "undefined" : n(i);
                        if ("undefined" === s) return e;
                        "function" === s ? t.push(i) : (e = i, t.forEach(function (e) {
                            e(i)
                        }))
                    }
                }
            }, function (e, t, i) {
                "use strict";
                var n = i(6), s = i(0), r = i(3), a = {};
                t.a = function (e, t, o) {
                    a[e] || (a[e] = {});
                    var l = a[e], c = l[t];
                    if (!o.forceUpdate && c) return c;
                    c = i.i(n.a)();
                    var u = i.i(s.makeUrl)(o.counterUrl, {url: t});
                    return r.a[e].counter(u, c, t), l[t] = c, c
                }
            }, function (e, t, i) {
                "use strict";
                Object.defineProperty(t, "__esModule", {value: !0});
                var n = [], s = function () {
                    n.forEach(function (e) {
                        e()
                    })
                }, r = !1, a = {
                    onUrlChange: function (e) {
                        r || (function () {
                            var e = window.history.pushState;
                            window.history.pushState = function () {
                                return setTimeout(s, 0), e.apply(window.history, arguments)
                            };
                            var t = window.history.replaceState;
                            window.history.replaceState = function () {
                                return setTimeout(s, 0), t.apply(window.history, arguments)
                            }, window.addEventListener("popstate", s)
                        }(), r = !0), n.push(e)
                    }
                };
                t.default = a
            }, function (e, t, i) {
                "use strict";
                var n = i(1), s = function (e, t) {
                    var s = this;
                    i.i(n.getJSON)(e, function (e) {
                        try {
                            var i = "function" == typeof s.convertNumber ? s.convertNumber(e) : e;
                            t(i)
                        } catch (e) {
                        }
                    })
                };
                t.a = function (e) {
                    e.counter = n.global.__likelyCounterMock || e.counter || s, e.click = e.click || function () {
                        return !0
                    }
                }
            }, function (e, t, i) {
                "use strict";
                t.a = {
                    counterUrl: "https://graph.facebook.com/?id={url}&callback=?",
                    convertNumber: function (e) {
                        return e.share.share_count
                    },
                    popupUrl: "https://www.facebook.com/sharer/sharer.php?u={url}",
                    popupWidth: 600,
                    popupHeight: 500,
                    svgIconPath: "15.117 0H.883C.395 0 0 .395 0 .883v14.234c0 .488.395.883.883.883h7.663V9.804H6.46V7.39h2.086V5.607c0-2.066 1.262-3.19 3.106-3.19.883 0 1.642.064 1.863.094v2.16h-1.28c-1 0-1.195.48-1.195 1.18v1.54h2.39l-.31 2.42h-2.08V16h4.077c.488 0 .883-.395.883-.883V.883C16 .395 15.605 0 15.117 0"
                }
            }, function (e, t, i) {
                "use strict";
                t.a = {
                    counterUrl: "https://clients6.google.com/rpc",
                    counter: function (e, t, i) {
                        var n = new XMLHttpRequest;
                        n.open("POST", e), n.setRequestHeader("Content-Type", "application/json"), n.addEventListener("load", function () {
                            var e = JSON.parse(n.responseText)[0].result.metadata.globalCounts.count;
                            t(e)
                        }), n.send(JSON.stringify([{
                            method: "pos.plusones.get",
                            id: "p",
                            params: {nolog: !0, id: i, source: "widget", userId: "@viewer", groupId: "@self"},
                            jsonrpc: "2.0",
                            key: "p",
                            apiVersion: "v1"
                        }]))
                    },
                    popupUrl: "https://plus.google.com/share?url={url}",
                    popupWidth: 700,
                    popupHeight: 500,
                    svgIconPath: "8,6.5v3h4.291c-0.526,2.01-2.093,3.476-4.315,3.476C5.228,12.976,3,10.748,3,8c0-2.748,2.228-4.976,4.976-4.976c1.442,0,2.606,0.623,3.397,1.603L13.52,2.48C12.192,0.955,10.276,0,8,0C3.582,0,0,3.582,0,8s3.582,8,8,8s7.5-3.582,7.5-8V6.5H8"
                }
            }, function (e, t, i) {
                "use strict";
                t.a = {
                    counterUrl: "https://www.linkedin.com/countserv/count/share?url={url}&format=jsonp&callback=?",
                    convertNumber: function (e) {
                        return e.count
                    },
                    popupUrl: "https://www.linkedin.com/shareArticle?mini=true&url={url}&title={title}",
                    popupWidth: 600,
                    popupHeight: 500,
                    svgIconPath: "2.4,6h2.4v7.6H2.4V6z M3.6,2.2c0.8,0,1.4,0.6,1.4,1.4C4.9,4.3,4.3,5,3.6,5C2.8,5,2.2,4.3,2.2,3.6C2.2,2.8,2.8,2.2,3.6,2.2C3.6,2.2,3.6,2.2,3.6,2.2 M6.2,6h2.3v1h0C9,6.2,9.9,5.8,10.8,5.8c2.4,0,2.8,1.6,2.8,3.6v4.2h-2.4V9.9c0-0.9,0-2-1.2-2c-1.2,0-1.4,1-1.4,2v3.8H6.2V6z M13,0H3C1,0,0,1,0,3v10c0,2,1,3,3,3h10c2,0,3-1,3-3V3C16,1,15,0,13,0z"
                }
            }, function (e, t, i) {
                "use strict";
                var n = i(1), s = i(0), r = {
                    counterUrl: "https://connect.ok.ru/dk?st.cmd=extLike&ref={url}&uid={index}",
                    counter: function (e, t) {
                        this.promises.push(t), i.i(n.getScript)(i.i(s.makeUrl)(e, {index: this.promises.length - 1}))
                    },
                    promises: [],
                    popupUrl: "https://connect.ok.ru/dk?st.cmd=WidgetSharePreview&service=odnoklassniki&st.shareUrl={url}",
                    popupWidth: 640,
                    popupHeight: 400,
                    svgIconPath: "8 6.107c.888 0 1.607-.72 1.607-1.607 0-.888-.72-1.607-1.607-1.607s-1.607.72-1.607 1.607c0 .888.72 1.607 1.607 1.607zM13 0H3C1 0 0 1 0 3v10c0 2 1 3 3 3h10c2 0 3-1 3-3V3c0-2-1-3-3-3zM8 .75c2.07 0 3.75 1.68 3.75 3.75 0 2.07-1.68 3.75-3.75 3.75S4.25 6.57 4.25 4.5C4.25 2.43 5.93.75 8 .75zm3.826 12.634c.42.42.42 1.097 0 1.515-.21.208-.483.313-.758.313-.274 0-.548-.105-.758-.314L8 12.59 5.69 14.9c-.42.418-1.098.418-1.516 0s-.42-1.098 0-1.516L6.357 11.2c-1.303-.386-2.288-1.073-2.337-1.11-.473-.354-.57-1.025-.214-1.5.354-.47 1.022-.567 1.496-.216.03.022 1.4.946 2.698.946 1.31 0 2.682-.934 2.693-.943.474-.355 1.146-.258 1.5.213.355.474.26 1.146-.214 1.5-.05.036-1.035.723-2.338 1.11l2.184 2.184"
                };
                i.i(s.set)(n.global, "ODKL.updateCount", function (e, t) {
                    r.promises[e](t)
                }), t.a = r
            }, function (e, t, i) {
                "use strict";
                t.a = {
                    counterUrl: "https://api.pinterest.com/v1/urls/count.json?url={url}&callback=?",
                    convertNumber: function (e) {
                        return e.count
                    },
                    popupUrl: "https://pinterest.com/pin/create/button/?url={url}&description={title}",
                    popupWidth: 630,
                    popupHeight: 270,
                    svgIconPath: "7.99 0c-4.417 0-8 3.582-8 8 0 3.39 2.11 6.284 5.086 7.45-.07-.633-.133-1.604.028-2.295.145-.624.938-3.977.938-3.977s-.24-.48-.24-1.188c0-1.112.645-1.943 1.448-1.943.683 0 1.012.512 1.012 1.127 0 .686-.437 1.713-.663 2.664-.19.796.398 1.446 1.184 1.446 1.422 0 2.515-1.5 2.515-3.664 0-1.915-1.377-3.255-3.343-3.255-2.276 0-3.612 1.707-3.612 3.472 0 .688.265 1.425.595 1.826.065.08.075.15.055.23-.06.252-.195.796-.222.907-.035.146-.116.177-.268.107-1-.465-1.624-1.926-1.624-3.1 0-2.523 1.835-4.84 5.287-4.84 2.775 0 4.932 1.977 4.932 4.62 0 2.757-1.74 4.976-4.152 4.976-.81 0-1.573-.42-1.834-.92l-.498 1.903c-.18.695-.668 1.566-.994 2.097.75.232 1.544.357 2.37.357 4.417 0 8-3.582 8-8s-3.583-8-8-8"
                }
            }, function (e, t, n) {
                "use strict";
                t.a = {
                    counterUrl: "/counter/telegram?url={url}",
                    counter: function (e, t) {
                        console.log("telegram counter <<"), console.log(e), console.log(t), t(5), this.promises.push(t), n.i(r.getScript)(n.i(i.makeUrl)(e, {index: this.promises.length - 1}))
                    },
                    popupUrl: "https://telegram.me/share/url?url={url}",
                    popupWidth: 600,
                    popupHeight: 500,
                    svgIconPath: "6,11.960784l-1,-3l11,-8l-15.378,5.914c0,0 -0.672,0.23 -0.619,0.655c0.053,0.425 0.602,0.619 0.602,0.619l3.575,1.203l1.62,5.154l2.742,-2.411l-0.007,-0.005l3.607,2.766c0.973,0.425 1.327,-0.46 1.327,-0.46l2.531,-13.435l-10,11z"
                }
            }, function (e, t, i) {
                "use strict";
                t.a = {
                    popupUrl: "https://twitter.com/intent/tweet?url={url}&text={title}",
                    popupWidth: 600,
                    popupHeight: 450,
                    click: function () {
                        return /[\.\?:\-–—]\s*$/.test(this.options.title) || (this.options.title += ":"), !0
                    },
                    svgIconPath: "15.969,3.058c-0.586,0.26-1.217,0.436-1.878,0.515c0.675-0.405,1.194-1.045,1.438-1.809c-0.632,0.375-1.332,0.647-2.076,0.793c-0.596-0.636-1.446-1.033-2.387-1.033c-1.806,0-3.27,1.464-3.27,3.27 c0,0.256,0.029,0.506,0.085,0.745C5.163,5.404,2.753,4.102,1.14,2.124C0.859,2.607,0.698,3.168,0.698,3.767 c0,1.134,0.577,2.135,1.455,2.722C1.616,6.472,1.112,6.325,0.671,6.08c0,0.014,0,0.027,0,0.041c0,1.584,1.127,2.906,2.623,3.206 C3.02,9.402,2.731,9.442,2.433,9.442c-0.211,0-0.416-0.021-0.615-0.059c0.416,1.299,1.624,2.245,3.055,2.271 c-1.119,0.877-2.529,1.4-4.061,1.4c-0.264,0-0.524-0.015-0.78-0.046c1.447,0.928,3.166,1.469,5.013,1.469 c6.015,0,9.304-4.983,9.304-9.304c0-0.142-0.003-0.283-0.009-0.423C14.976,4.29,15.531,3.714,15.969,3.058"
                }
            }, function (e, t, i) {
                "use strict";
                var n = i(1), s = i(0), r = {
                    counterUrl: "https://vk.com/share.php?act=count&url={url}&index={index}",
                    counter: function (e, t) {
                        this.promises.push(t), i.i(n.getScript)(i.i(s.makeUrl)(e, {index: this.promises.length - 1}))
                    },
                    promises: [],
                    popupUrl: "https://vk.com/share.php?url={url}&title={title}",
                    popupWidth: 550,
                    popupHeight: 330,
                    svgIconPath: "7.828 12.526h.957s.288-.032.436-.19c.14-.147.14-.42.14-.42s-.02-1.284.58-1.473c.59-.187 1.34 1.24 2.14 1.788.61.42 1.07.33 1.07.33l2.14-.03s1.12-.07.59-.95c-.04-.07-.3-.65-1.58-1.84-1.34-1.24-1.16-1.04.45-3.19.98-1.31 1.38-2.11 1.25-2.45-.11-.32-.84-.24-.84-.24l-2.4.02s-.18-.02-.31.06-.21.26-.21.26-.38 1.02-.89 1.88C10.27 7.9 9.84 8 9.67 7.88c-.403-.26-.3-1.053-.3-1.62 0-1.76.27-2.5-.52-2.69-.26-.06-.454-.1-1.123-.11-.86-.01-1.585.006-1.996.207-.27.135-.48.434-.36.45.16.02.52.098.71.358.25.337.24 1.09.24 1.09s.14 2.077-.33 2.335c-.33.174-.77-.187-1.73-1.837-.49-.84-.86-1.78-.86-1.78s-.07-.17-.2-.27c-.15-.11-.37-.15-.37-.15l-2.29.02s-.34.01-.46.16c-.11.13-.01.41-.01.41s1.79 4.19 3.82 6.3c1.86 1.935 3.97 1.81 3.97 1.81"
                };
                i.i(s.set)(n.global, "VK.Share.count", function (e, t) {
                    r.promises[e](t)
                }), t.a = r
            }, function (e, t, i) {
                "use strict";
                t.a = {
                    popupUrl: "whatsapp://send?text={title}%0D%0A%0D%0A{url}",
                    openPopup: !1,
                    svgIconPath: "8.0292969 0 C 3.6412969 0 0.06940625 3.5557344 0.06640625 7.9277344 C 0.06640625 9.3247344 0.43385936 10.688578 1.1308594 11.892578 L 0 16 L 4.2226562 14.898438 C 5.3866562 15.528438 6.6962969 15.862281 8.0292969 15.863281 L 8.0332031 15.863281 C 12.423199 15.863281 15.998 12.306594 16 7.9335938 C 16 5.8165938 15.172922 3.8222186 13.669922 2.3242188 L 13.679688 2.3007812 C 12.159653 0.8307817 10.159297 -2.9605947e-016 8.0292969 0 z M 4.4589844 3.2382812 C 4.6263665 3.2382813 4.7936277 3.2373139 4.9394531 3.25 C 5.095423 3.25 5.306878 3.189055 5.5097656 3.6835938 C 5.7202615 4.1781321 6.2237071 5.418117 6.2871094 5.5449219 C 6.3505124 5.6717267 6.3922846 5.8107546 6.3085938 5.9882812 C 6.2223663 6.1531272 6.1809093 6.2560375 6.0566406 6.4082031 C 5.9298358 6.560369 5.7918587 6.7393913 5.6777344 6.8535156 C 5.5509298 6.9803204 5.4193132 7.1174841 5.5664062 7.3710938 C 5.7147679 7.6247032 6.220019 8.4490288 6.9707031 9.1210938 C 7.9344191 9.9833661 8.7483437 10.250149 9.0019531 10.376953 C 9.2530266 10.491078 9.3997816 10.477349 9.546875 10.3125 C 9.6939686 10.145117 10.178322 9.5818366 10.345703 9.3320312 C 10.514354 9.0784218 10.683278 9.1181658 10.914062 9.203125 C 11.146116 9.286816 12.383111 9.8946797 12.636719 10.021484 L 12.646484 9.9589844 C 12.900093 10.073108 13.06355 10.137829 13.126953 10.251953 C 13.190353 10.366078 13.192128 10.859096 12.976562 11.455078 C 12.766067 12.05106 11.759099 12.584074 11.273438 12.660156 C 10.838496 12.723556 10.287183 12.74881 9.6835938 12.558594 C 9.3158512 12.431788 8.8457781 12.280954 8.2421875 12.027344 C 5.7111649 10.936823 4.0584453 8.3992212 3.9316406 8.234375 C 3.8061039 8.0568483 2.9023438 6.8647716 2.9023438 5.6347656 C 2.9023438 4.4047596 3.5524185 3.7946251 3.7832031 3.5410156 C 4.0139878 3.3000865 4.2890659 3.2382812 4.4589844 3.2382812"
                }
            }, function (e, t, i) {
                "use strict";
                Object.defineProperty(t, "__esModule", {value: !0});
                var n = i(5), s = i(2), r = i(0), a = function () {
                    function e(e, t) {
                        for (var i = 0; i < t.length; i++) {
                            var n = t[i];
                            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                        }
                    }

                    return function (t, i, n) {
                        return i && e(t.prototype, i), n && e(t, n), t
                    }
                }(), o = function () {
                    function e(t, i) {
                        (function (e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        })(this, e), this.container = t, this.options = i, this.countersLeft = 0, this.buttons = [], this.number = 0, this.init()
                    }

                    return a(e, [{
                        key: "init", value: function () {
                            i.i(r.toArray)(this.container.children).forEach(this.addButton.bind(this)), this.options.counters ? (this.timer = setTimeout(this.appear.bind(this), this.options.wait), this.timeout = setTimeout(this.ready.bind(this), this.options.timeout)) : this.appear()
                        }
                    }, {
                        key: "addButton", value: function (e) {
                            var t = new n.a(e, this, this.options);
                            this.buttons.push(t), t.options.counterUrl && this.countersLeft++
                        }
                    }, {
                        key: "update", value: function (e) {
                            (e.forceUpdate || e.url && e.url !== this.options.url) && (this.countersLeft = this.buttons.length, this.number = 0, this.buttons.forEach(function (t) {
                                t.update(e)
                            }))
                        }
                    }, {
                        key: "updateCounter", value: function (e, t) {
                            t && (this.number += t), 0 == --this.countersLeft && (this.appear(), this.ready())
                        }
                    }, {
                        key: "appear", value: function () {
                            this.container.classList.add(s.default.name + "_visible")
                        }
                    }, {
                        key: "ready", value: function () {
                            this.timeout && (clearTimeout(this.timeout), this.container.classList.add(s.default.name + "_ready"))
                        }
                    }]), e
                }();
                t.default = o
            }, function (e, t) {
            }, , function (e, t, i) {
                e.exports = i(4)
            }])
        }, "object" == l(t) && "object" == l(e) ? e.exports = o() : (s = [], void 0 === (a = "function" == typeof (n = o) ? n.apply(t, s) : n) || (e.exports = a))
    }).call(this, n(6)(e))
}, function (e, t) {
    e.exports = function (e) {
        return e.webpackPolyfill || (e.deprecate = function () {
        }, e.paths = [], e.children || (e.children = []), Object.defineProperty(e, "loaded", {
            enumerable: !0,
            get: function () {
                return e.l
            }
        }), Object.defineProperty(e, "id", {
            enumerable: !0, get: function () {
                return e.i
            }
        }), e.webpackPolyfill = 1), e
    }
}, function (e, t, i) {
}, function (e, t, i) {
    "use strict";
    i.r(t);
    var n = i(1), s = i.n(n), r = i(0);
    /*!
     * VERSION: 2.1.3
     * DATE: 2019-05-17
     * UPDATES AND DOCS AT: http://greensock.com
     *
     * @license Copyright (c) 2008-2019, GreenSock. All rights reserved.
     * This work is subject to the terms at http://greensock.com/standard-license or for
     * Club GreenSock members, the software agreement that was issued with your membership.
     *
     * @author: Jack Doyle, jack@greensock.com
     **/
    r.f._gsDefine("TweenMax", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function () {
        var e = function (e) {
            var t, i = [], n = e.length;
            for (t = 0; t !== n; i.push(e[t++])) ;
            return i
        }, t = function (e, t, i) {
            var n, s, r = e.cycle;
            for (n in r) s = r[n], e[n] = "function" == typeof s ? s(i, t[i], t) : s[i % s.length];
            delete e.cycle
        }, i = function (e) {
            if ("function" == typeof e) return e;
            var t = "object" == typeof e ? e : {each: e}, i = t.ease, n = t.from || 0, s = t.base || 0, r = {},
                a = isNaN(n), o = t.axis, l = {center: .5, end: 1}[n] || 0;
            return function (e, c, u) {
                var d, h, p, f, m, g, v, y, _, b = (u || t).length, x = r[b];
                if (!x) {
                    if (!(_ = "auto" === t.grid ? 0 : (t.grid || [1 / 0])[0])) {
                        for (v = -1 / 0; v < (v = u[_++].getBoundingClientRect().left) && _ < b;) ;
                        _--
                    }
                    for (x = r[b] = [], d = a ? Math.min(_, b) * l - .5 : n % _, h = a ? b * l / _ - .5 : n / _ | 0, v = 0, y = 1 / 0, g = 0; g < b; g++) p = g % _ - d, f = h - (g / _ | 0), x[g] = m = o ? Math.abs("y" === o ? f : p) : Math.sqrt(p * p + f * f), m > v && (v = m), m < y && (y = m);
                    x.max = v - y, x.min = y, x.v = b = t.amount || t.each * (_ > b ? b - 1 : o ? "y" === o ? b / _ : _ : Math.max(_, b / _)) || 0, x.b = b < 0 ? s - b : s
                }
                return b = (x[e] - x.min) / x.max, x.b + (i ? i.getRatio(b) : b) * x.v
            }
        }, n = function (e, t, i) {
            r.g.call(this, e, t, i), this._cycle = 0, this._yoyo = !0 === this.vars.yoyo || !!this.vars.yoyoEase, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._repeat && this._uncache(!0), this.render = n.prototype.render
        }, s = r.g._internals, a = s.isSelector, o = s.isArray, l = n.prototype = r.g.to({}, .1, {}), c = [];
        n.version = "2.1.3", l.constructor = n, l.kill()._gc = !1, n.killTweensOf = n.killDelayedCallsTo = r.g.killTweensOf, n.getTweensOf = r.g.getTweensOf, n.lagSmoothing = r.g.lagSmoothing, n.ticker = r.g.ticker, n.render = r.g.render, n.distribute = i, l.invalidate = function () {
            return this._yoyo = !0 === this.vars.yoyo || !!this.vars.yoyoEase, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._yoyoEase = null, this._uncache(!0), r.g.prototype.invalidate.call(this)
        }, l.updateTo = function (e, t) {
            var i, n = this.ratio, s = this.vars.immediateRender || e.immediateRender;
            for (i in t && this._startTime < this._timeline._time && (this._startTime = this._timeline._time, this._uncache(!1), this._gc ? this._enabled(!0, !1) : this._timeline.insert(this, this._startTime - this._delay)), e) this.vars[i] = e[i];
            if (this._initted || s) if (t) this._initted = !1, s && this.render(0, !0, !0); else if (this._gc && this._enabled(!0, !1), this._notifyPluginsOfEnabled && this._firstPT && r.g._onPluginEvent("_onDisable", this), this._time / this._duration > .998) {
                var a = this._totalTime;
                this.render(0, !0, !1), this._initted = !1, this.render(a, !0, !1)
            } else if (this._initted = !1, this._init(), this._time > 0 || s) for (var o, l = 1 / (1 - n), c = this._firstPT; c;) o = c.s + c.c, c.c *= l, c.s = o - c.c, c = c._next;
            return this
        }, l.render = function (e, t, i) {
            this._initted || 0 === this._duration && this.vars.repeat && this.invalidate();
            var n, a, o, l, c, u, d, h, p, f = this._dirty ? this.totalDuration() : this._totalDuration, m = this._time,
                g = this._totalTime, v = this._cycle, y = this._duration, _ = this._rawPrevTime;
            if (e >= f - 1e-8 && e >= 0 ? (this._totalTime = f, this._cycle = this._repeat, this._yoyo && 0 != (1 & this._cycle) ? (this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0) : (this._time = y, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1), this._reversed || (n = !0, a = "onComplete", i = i || this._timeline.autoRemoveChildren), 0 === y && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (e = 0), (_ < 0 || e <= 0 && e >= -1e-8 || 1e-8 === _ && "isPause" !== this.data) && _ !== e && (i = !0, _ > 1e-8 && (a = "onReverseComplete")), this._rawPrevTime = h = !t || e || _ === e ? e : 1e-8)) : e < 1e-8 ? (this._totalTime = this._time = this._cycle = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== g || 0 === y && _ > 0) && (a = "onReverseComplete", n = this._reversed), e > -1e-8 ? e = 0 : e < 0 && (this._active = !1, 0 === y && (this._initted || !this.vars.lazy || i) && (_ >= 0 && (i = !0), this._rawPrevTime = h = !t || e || _ === e ? e : 1e-8)), this._initted || (i = !0)) : (this._totalTime = this._time = e, 0 !== this._repeat && (l = y + this._repeatDelay, this._cycle = this._totalTime / l >> 0, 0 !== this._cycle && this._cycle === this._totalTime / l && g <= e && this._cycle--, this._time = this._totalTime - this._cycle * l, this._yoyo && 0 != (1 & this._cycle) && (this._time = y - this._time, (p = this._yoyoEase || this.vars.yoyoEase) && (this._yoyoEase || (!0 !== p || this._initted ? this._yoyoEase = p = !0 === p ? this._ease : p instanceof r.b ? p : r.b.map[p] : (p = this.vars.ease, this._yoyoEase = p = p ? p instanceof r.b ? p : "function" == typeof p ? new r.b(p, this.vars.easeParams) : r.b.map[p] || r.g.defaultEase : r.g.defaultEase)), this.ratio = p ? 1 - p.getRatio((y - this._time) / y) : 0)), this._time > y ? this._time = y : this._time < 0 && (this._time = 0)), this._easeType && !p ? (c = this._time / y, (1 === (u = this._easeType) || 3 === u && c >= .5) && (c = 1 - c), 3 === u && (c *= 2), 1 === (d = this._easePower) ? c *= c : 2 === d ? c *= c * c : 3 === d ? c *= c * c * c : 4 === d && (c *= c * c * c * c), this.ratio = 1 === u ? 1 - c : 2 === u ? c : this._time / y < .5 ? c / 2 : 1 - c / 2) : p || (this.ratio = this._ease.getRatio(this._time / y))), m !== this._time || i || v !== this._cycle) {
                if (!this._initted) {
                    if (this._init(), !this._initted || this._gc) return;
                    if (!i && this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration)) return this._time = m, this._totalTime = g, this._rawPrevTime = _, this._cycle = v, s.lazyTweens.push(this), void (this._lazy = [e, t]);
                    !this._time || n || p ? n && this._ease._calcEnd && !p && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1)) : this.ratio = this._ease.getRatio(this._time / y)
                }
                for (!1 !== this._lazy && (this._lazy = !1), this._active || !this._paused && this._time !== m && e >= 0 && (this._active = !0), 0 === g && (2 === this._initted && e > 0 && this._init(), this._startAt && (e >= 0 ? this._startAt.render(e, !0, i) : a || (a = "_dummyGS")), this.vars.onStart && (0 === this._totalTime && 0 !== y || t || this._callback("onStart"))), o = this._firstPT; o;) o.f ? o.t[o.p](o.c * this.ratio + o.s) : o.t[o.p] = o.c * this.ratio + o.s, o = o._next;
                this._onUpdate && (e < 0 && this._startAt && this._startTime && this._startAt.render(e, !0, i), t || (this._totalTime !== g || a) && this._callback("onUpdate")), this._cycle !== v && (t || this._gc || this.vars.onRepeat && this._callback("onRepeat")), a && (this._gc && !i || (e < 0 && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(e, !0, i), n && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !t && this.vars[a] && this._callback(a), 0 === y && 1e-8 === this._rawPrevTime && 1e-8 !== h && (this._rawPrevTime = 0)))
            } else g !== this._totalTime && this._onUpdate && (t || this._callback("onUpdate"))
        }, n.to = function (e, t, i) {
            return new n(e, t, i)
        }, n.from = function (e, t, i) {
            return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new n(e, t, i)
        }, n.fromTo = function (e, t, i, s) {
            return s.startAt = i, s.immediateRender = 0 != s.immediateRender && 0 != i.immediateRender, new n(e, t, s)
        }, n.staggerTo = n.allTo = function (s, l, u, d, h, p, f) {
            var m, g, v, y, _ = [], b = i(u.stagger || d), x = u.cycle, w = (u.startAt || c).cycle;
            for (o(s) || ("string" == typeof s && (s = r.g.selector(s) || s), a(s) && (s = e(s))), m = (s = s || []).length - 1, v = 0; v <= m; v++) {
                for (y in g = {}, u) g[y] = u[y];
                if (x && (t(g, s, v), null != g.duration && (l = g.duration, delete g.duration)), w) {
                    for (y in w = g.startAt = {}, u.startAt) w[y] = u.startAt[y];
                    t(g.startAt, s, v)
                }
                g.delay = b(v, s[v], s) + (g.delay || 0), v === m && h && (g.onComplete = function () {
                    u.onComplete && u.onComplete.apply(u.onCompleteScope || this, arguments), h.apply(f || u.callbackScope || this, p || c)
                }), _[v] = new n(s[v], l, g)
            }
            return _
        }, n.staggerFrom = n.allFrom = function (e, t, i, s, r, a, o) {
            return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, n.staggerTo(e, t, i, s, r, a, o)
        }, n.staggerFromTo = n.allFromTo = function (e, t, i, s, r, a, o, l) {
            return s.startAt = i, s.immediateRender = 0 != s.immediateRender && 0 != i.immediateRender, n.staggerTo(e, t, s, r, a, o, l)
        }, n.delayedCall = function (e, t, i, s, r) {
            return new n(t, 0, {
                delay: e,
                onComplete: t,
                onCompleteParams: i,
                callbackScope: s,
                onReverseComplete: t,
                onReverseCompleteParams: i,
                immediateRender: !1,
                useFrames: r,
                overwrite: 0
            })
        }, n.set = function (e, t) {
            return new n(e, 0, t)
        }, n.isTweening = function (e) {
            return r.g.getTweensOf(e, !0).length > 0
        };
        var u = function (e, t) {
            for (var i = [], n = 0, s = e._first; s;) s instanceof r.g ? i[n++] = s : (t && (i[n++] = s), n = (i = i.concat(u(s, t))).length), s = s._next;
            return i
        }, d = n.getAllTweens = function (e) {
            return u(r.a._rootTimeline, e).concat(u(r.a._rootFramesTimeline, e))
        };
        n.killAll = function (e, t, i, n) {
            null == t && (t = !0), null == i && (i = !0);
            var s, a, o, l = d(0 != n), c = l.length, u = t && i && n;
            for (o = 0; o < c; o++) a = l[o], (u || a instanceof r.d || (s = a.target === a.vars.onComplete) && i || t && !s) && (e ? a.totalTime(a._reversed ? 0 : a.totalDuration()) : a._enabled(!1, !1))
        }, n.killChildTweensOf = function (t, i) {
            if (null != t) {
                var l, c, u, d, h, p = s.tweenLookup;
                if ("string" == typeof t && (t = r.g.selector(t) || t), a(t) && (t = e(t)), o(t)) for (d = t.length; --d > -1;) n.killChildTweensOf(t[d], i); else {
                    for (u in l = [], p) for (c = p[u].target.parentNode; c;) c === t && (l = l.concat(p[u].tweens)), c = c.parentNode;
                    for (h = l.length, d = 0; d < h; d++) i && l[d].totalTime(l[d].totalDuration()), l[d]._enabled(!1, !1)
                }
            }
        };
        var h = function (e, t, i, n) {
            t = !1 !== t, i = !1 !== i;
            for (var s, a, o = d(n = !1 !== n), l = t && i && n, c = o.length; --c > -1;) a = o[c], (l || a instanceof r.d || (s = a.target === a.vars.onComplete) && i || t && !s) && a.paused(e)
        };
        return n.pauseAll = function (e, t, i) {
            h(!0, e, t, i)
        }, n.resumeAll = function (e, t, i) {
            h(!1, e, t, i)
        }, n.globalTimeScale = function (e) {
            var t = r.a._rootTimeline, i = r.g.ticker.time;
            return arguments.length ? (e = e || 1e-8, t._startTime = i - (i - t._startTime) * t._timeScale / e, t = r.a._rootFramesTimeline, i = r.g.ticker.frame, t._startTime = i - (i - t._startTime) * t._timeScale / e, t._timeScale = r.a._rootTimeline._timeScale = e, e) : t._timeScale
        }, l.progress = function (e, t) {
            return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 != (1 & this._cycle) ? 1 - e : e) + this._cycle * (this._duration + this._repeatDelay), t) : this.duration() ? this._time / this._duration : this.ratio
        }, l.totalProgress = function (e, t) {
            return arguments.length ? this.totalTime(this.totalDuration() * e, t) : this._totalTime / this.totalDuration()
        }, l.time = function (e, t) {
            if (!arguments.length) return this._time;
            this._dirty && this.totalDuration();
            var i = this._duration, n = this._cycle, s = n * (i + this._repeatDelay);
            return e > i && (e = i), this.totalTime(this._yoyo && 1 & n ? i - e + s : this._repeat ? e + s : e, t)
        }, l.duration = function (e) {
            return arguments.length ? r.a.prototype.duration.call(this, e) : this._duration
        }, l.totalDuration = function (e) {
            return arguments.length ? -1 === this._repeat ? this : this.duration((e - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat, this._dirty = !1), this._totalDuration)
        }, l.repeat = function (e) {
            return arguments.length ? (this._repeat = e, this._uncache(!0)) : this._repeat
        }, l.repeatDelay = function (e) {
            return arguments.length ? (this._repeatDelay = e, this._uncache(!0)) : this._repeatDelay
        }, l.yoyo = function (e) {
            return arguments.length ? (this._yoyo = e, this) : this._yoyo
        }, n
    }, !0);
    var a = r.h.TweenMax;
    /*!
     * VERSION: 2.1.3
     * DATE: 2019-05-17
     * UPDATES AND DOCS AT: http://greensock.com
     *
     * @license Copyright (c) 2008-2019, GreenSock. All rights reserved.
     * This work is subject to the terms at http://greensock.com/standard-license or for
     * Club GreenSock members, the software agreement that was issued with your membership.
     *
     * @author: Jack Doyle, jack@greensock.com
     */
    r.f._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function () {
        var e, t, i, n, s = function () {
            r.e.call(this, "css"), this._overwriteProps.length = 0, this.setRatio = s.prototype.setRatio
        }, a = r.f._gsDefine.globals, o = {}, l = s.prototype = new r.e("css");
        l.constructor = s, s.version = "2.1.3", s.API = 2, s.defaultTransformPerspective = 0, s.defaultSkewType = "compensated", s.defaultSmoothOrigin = !0, l = "px", s.suffixMap = {
            top: l,
            right: l,
            bottom: l,
            left: l,
            width: l,
            height: l,
            fontSize: l,
            padding: l,
            margin: l,
            perspective: l,
            lineHeight: ""
        };
        var c, u, d, h, p, f, m, g, v = /(?:\-|\.|\b)(\d|\.|e\-)+/g,
            y = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
            _ = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
            b = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b),?/gi, x = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,
            w = /(?:\d|\-|\+|=|#|\.)*/g, T = /opacity *= *([^)]*)/i, C = /opacity:([^;]*)/i,
            S = /alpha\(opacity *=.+?\)/i, E = /^(rgb|hsl)/, P = /([A-Z])/g, k = /-([a-z])/gi,
            M = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi, $ = function (e, t) {
                return t.toUpperCase()
            }, O = /(?:Left|Right|Width)/i, A = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
            D = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i, L = /,(?=[^\)]*(?:\(|$))/gi, z = /[\s,\(]/i,
            I = Math.PI / 180, N = 180 / Math.PI, R = {}, j = {style: {}}, H = r.f.document || {
                createElement: function () {
                    return j
                }
            }, F = function (e, t) {
                var i = H.createElementNS ? H.createElementNS(t || "http://www.w3.org/1999/xhtml", e) : H.createElement(e);
                return i.style ? i : H.createElement(e)
            }, B = F("div"), q = F("img"), X = s._internals = {_specialProps: o}, Y = (r.f.navigator || {}).userAgent || "",
            V = function () {
                var e = Y.indexOf("Android"), t = F("a");
                return d = -1 !== Y.indexOf("Safari") && -1 === Y.indexOf("Chrome") && (-1 === e || parseFloat(Y.substr(e + 8, 2)) > 3), p = d && parseFloat(Y.substr(Y.indexOf("Version/") + 8, 2)) < 6, h = -1 !== Y.indexOf("Firefox"), (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(Y) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(Y)) && (f = parseFloat(RegExp.$1)), !!t && (t.style.cssText = "top:1px;opacity:.55;", /^0.55/.test(t.style.opacity))
            }(), G = function (e) {
                return T.test("string" == typeof e ? e : (e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1
            }, W = function (e) {
                r.f.console && console.log(e)
            }, U = "", K = "", Z = function (e, t) {
                var i, n, s = (t = t || B).style;
                if (void 0 !== s[e]) return e;
                for (e = e.charAt(0).toUpperCase() + e.substr(1), i = ["O", "Moz", "ms", "Ms", "Webkit"], n = 5; --n > -1 && void 0 === s[i[n] + e];) ;
                return n >= 0 ? (U = "-" + (K = 3 === n ? "ms" : i[n]).toLowerCase() + "-", K + e) : null
            }, Q = "undefined" != typeof window ? window : H.defaultView || {
                getComputedStyle: function () {
                }
            }, J = function (e) {
                return Q.getComputedStyle(e)
            }, ee = s.getStyle = function (e, t, i, n, s) {
                var r;
                return V || "opacity" !== t ? (!n && e.style[t] ? r = e.style[t] : (i = i || J(e)) ? r = i[t] || i.getPropertyValue(t) || i.getPropertyValue(t.replace(P, "-$1").toLowerCase()) : e.currentStyle && (r = e.currentStyle[t]), null == s || r && "none" !== r && "auto" !== r && "auto auto" !== r ? r : s) : G(e)
            }, te = X.convertToPixels = function (e, t, i, n, a) {
                if ("px" === n || !n && "lineHeight" !== t) return i;
                if ("auto" === n || !i) return 0;
                var o, l, c, u = O.test(t), d = e, h = B.style, p = i < 0, f = 1 === i;
                if (p && (i = -i), f && (i *= 100), "lineHeight" !== t || n) if ("%" === n && -1 !== t.indexOf("border")) o = i / 100 * (u ? e.clientWidth : e.clientHeight); else {
                    if (h.cssText = "border:0 solid red;position:" + ee(e, "position") + ";line-height:0;", "%" !== n && d.appendChild && "v" !== n.charAt(0) && "rem" !== n) h[u ? "borderLeftWidth" : "borderTopWidth"] = i + n; else {
                        if (d = e.parentNode || H.body, -1 !== ee(d, "display").indexOf("flex") && (h.position = "absolute"), l = d._gsCache, c = r.g.ticker.frame, l && u && l.time === c) return l.width * i / 100;
                        h[u ? "width" : "height"] = i + n
                    }
                    d.appendChild(B), o = parseFloat(B[u ? "offsetWidth" : "offsetHeight"]), d.removeChild(B), u && "%" === n && !1 !== s.cacheWidths && ((l = d._gsCache = d._gsCache || {}).time = c, l.width = o / i * 100), 0 !== o || a || (o = te(e, t, i, n, !0))
                } else l = J(e).lineHeight, e.style.lineHeight = i, o = parseFloat(J(e).lineHeight), e.style.lineHeight = l;
                return f && (o /= 100), p ? -o : o
            }, ie = X.calculateOffset = function (e, t, i) {
                if ("absolute" !== ee(e, "position", i)) return 0;
                var n = "left" === t ? "Left" : "Top", s = ee(e, "margin" + n, i);
                return e["offset" + n] - (te(e, t, parseFloat(s), s.replace(w, "")) || 0)
            }, ne = function (e, t) {
                var i, n, s, r = {};
                if (t = t || J(e)) if (i = t.length) for (; --i > -1;) -1 !== (s = t[i]).indexOf("-transform") && Le !== s || (r[s.replace(k, $)] = t.getPropertyValue(s)); else for (i in t) -1 !== i.indexOf("Transform") && De !== i || (r[i] = t[i]); else if (t = e.currentStyle || e.style) for (i in t) "string" == typeof i && void 0 === r[i] && (r[i.replace(k, $)] = t[i]);
                return V || (r.opacity = G(e)), n = Ge(e, t, !1), r.rotation = n.rotation, r.skewX = n.skewX, r.scaleX = n.scaleX, r.scaleY = n.scaleY, r.x = n.x, r.y = n.y, Ie && (r.z = n.z, r.rotationX = n.rotationX, r.rotationY = n.rotationY, r.scaleZ = n.scaleZ), r.filters && delete r.filters, r
            }, se = function (e, t, i, n, s) {
                var r, a, o, l = {}, c = e.style;
                for (a in i) "cssText" !== a && "length" !== a && isNaN(a) && (t[a] !== (r = i[a]) || s && s[a]) && -1 === a.indexOf("Origin") && ("number" != typeof r && "string" != typeof r || (l[a] = "auto" !== r || "left" !== a && "top" !== a ? "" !== r && "auto" !== r && "none" !== r || "string" != typeof t[a] || "" === t[a].replace(x, "") ? r : 0 : ie(e, a), void 0 !== c[a] && (o = new _e(c, a, c[a], o))));
                if (n) for (a in n) "className" !== a && (l[a] = n[a]);
                return {difs: l, firstMPT: o}
            }, re = {width: ["Left", "Right"], height: ["Top", "Bottom"]},
            ae = ["marginLeft", "marginRight", "marginTop", "marginBottom"], oe = function (e, t, i) {
                if ("svg" === (e.nodeName + "").toLowerCase()) return (i || J(e))[t] || 0;
                if (e.getCTM && Xe(e)) return e.getBBox()[t] || 0;
                var n = parseFloat("width" === t ? e.offsetWidth : e.offsetHeight), s = re[t], r = s.length;
                for (i = i || J(e); --r > -1;) n -= parseFloat(ee(e, "padding" + s[r], i, !0)) || 0, n -= parseFloat(ee(e, "border" + s[r] + "Width", i, !0)) || 0;
                return n
            }, le = function (e, t) {
                if ("contain" === e || "auto" === e || "auto auto" === e) return e + " ";
                null != e && "" !== e || (e = "0 0");
                var i, n = e.split(" "), s = -1 !== e.indexOf("left") ? "0%" : -1 !== e.indexOf("right") ? "100%" : n[0],
                    r = -1 !== e.indexOf("top") ? "0%" : -1 !== e.indexOf("bottom") ? "100%" : n[1];
                if (n.length > 3 && !t) {
                    for (n = e.split(", ").join(",").split(","), e = [], i = 0; i < n.length; i++) e.push(le(n[i]));
                    return e.join(",")
                }
                return null == r ? r = "center" === s ? "50%" : "0" : "center" === r && (r = "50%"), ("center" === s || isNaN(parseFloat(s)) && -1 === (s + "").indexOf("=")) && (s = "50%"), e = s + " " + r + (n.length > 2 ? " " + n[2] : ""), t && (t.oxp = -1 !== s.indexOf("%"), t.oyp = -1 !== r.indexOf("%"), t.oxr = "=" === s.charAt(1), t.oyr = "=" === r.charAt(1), t.ox = parseFloat(s.replace(x, "")), t.oy = parseFloat(r.replace(x, "")), t.v = e), t || e
            }, ce = function (e, t) {
                return "function" == typeof e && (e = e(g, m)), "string" == typeof e && "=" === e.charAt(1) ? parseInt(e.charAt(0) + "1", 10) * parseFloat(e.substr(2)) : parseFloat(e) - parseFloat(t) || 0
            }, ue = function (e, t) {
                "function" == typeof e && (e = e(g, m));
                var i = "string" == typeof e && "=" === e.charAt(1);
                return "string" == typeof e && "v" === e.charAt(e.length - 2) && (e = (i ? e.substr(0, 2) : 0) + window["inner" + ("vh" === e.substr(-2) ? "Height" : "Width")] * (parseFloat(i ? e.substr(2) : e) / 100)), null == e ? t : i ? parseInt(e.charAt(0) + "1", 10) * parseFloat(e.substr(2)) + t : parseFloat(e) || 0
            }, de = function (e, t, i, n) {
                var s, r, a, o;
                return "function" == typeof e && (e = e(g, m)), null == e ? a = t : "number" == typeof e ? a = e : (360, s = e.split("_"), r = ((o = "=" === e.charAt(1)) ? parseInt(e.charAt(0) + "1", 10) * parseFloat(s[0].substr(2)) : parseFloat(s[0])) * (-1 === e.indexOf("rad") ? 1 : N) - (o ? 0 : t), s.length && (n && (n[i] = t + r), -1 !== e.indexOf("short") && (r %= 360) !== r % 180 && (r = r < 0 ? r + 360 : r - 360), -1 !== e.indexOf("_cw") && r < 0 ? r = (r + 3599999999640) % 360 - 360 * (r / 360 | 0) : -1 !== e.indexOf("ccw") && r > 0 && (r = (r - 3599999999640) % 360 - 360 * (r / 360 | 0))), a = t + r), a < 1e-6 && a > -1e-6 && (a = 0), a
            }, he = {
                aqua: [0, 255, 255],
                lime: [0, 255, 0],
                silver: [192, 192, 192],
                black: [0, 0, 0],
                maroon: [128, 0, 0],
                teal: [0, 128, 128],
                blue: [0, 0, 255],
                navy: [0, 0, 128],
                white: [255, 255, 255],
                fuchsia: [255, 0, 255],
                olive: [128, 128, 0],
                yellow: [255, 255, 0],
                orange: [255, 165, 0],
                gray: [128, 128, 128],
                purple: [128, 0, 128],
                green: [0, 128, 0],
                red: [255, 0, 0],
                pink: [255, 192, 203],
                cyan: [0, 255, 255],
                transparent: [255, 255, 255, 0]
            }, pe = function (e, t, i) {
                return 255 * (6 * (e = e < 0 ? e + 1 : e > 1 ? e - 1 : e) < 1 ? t + (i - t) * e * 6 : e < .5 ? i : 3 * e < 2 ? t + (i - t) * (2 / 3 - e) * 6 : t) + .5 | 0
            }, fe = s.parseColor = function (e, t) {
                var i, n, s, r, a, o, l, c, u, d, h;
                if (e) if ("number" == typeof e) i = [e >> 16, e >> 8 & 255, 255 & e]; else {
                    if ("," === e.charAt(e.length - 1) && (e = e.substr(0, e.length - 1)), he[e]) i = he[e]; else if ("#" === e.charAt(0)) 4 === e.length && (n = e.charAt(1), s = e.charAt(2), r = e.charAt(3), e = "#" + n + n + s + s + r + r), i = [(e = parseInt(e.substr(1), 16)) >> 16, e >> 8 & 255, 255 & e]; else if ("hsl" === e.substr(0, 3)) if (i = h = e.match(v), t) {
                        if (-1 !== e.indexOf("=")) return e.match(y)
                    } else a = Number(i[0]) % 360 / 360, o = Number(i[1]) / 100, n = 2 * (l = Number(i[2]) / 100) - (s = l <= .5 ? l * (o + 1) : l + o - l * o), i.length > 3 && (i[3] = Number(i[3])), i[0] = pe(a + 1 / 3, n, s), i[1] = pe(a, n, s), i[2] = pe(a - 1 / 3, n, s); else i = e.match(v) || he.transparent;
                    i[0] = Number(i[0]), i[1] = Number(i[1]), i[2] = Number(i[2]), i.length > 3 && (i[3] = Number(i[3]))
                } else i = he.black;
                return t && !h && (n = i[0] / 255, s = i[1] / 255, r = i[2] / 255, l = ((c = Math.max(n, s, r)) + (u = Math.min(n, s, r))) / 2, c === u ? a = o = 0 : (d = c - u, o = l > .5 ? d / (2 - c - u) : d / (c + u), a = c === n ? (s - r) / d + (s < r ? 6 : 0) : c === s ? (r - n) / d + 2 : (n - s) / d + 4, a *= 60), i[0] = a + .5 | 0, i[1] = 100 * o + .5 | 0, i[2] = 100 * l + .5 | 0), i
            }, me = function (e, t) {
                var i, n, s, r = e.match(ge) || [], a = 0, o = "";
                if (!r.length) return e;
                for (i = 0; i < r.length; i++) n = r[i], a += (s = e.substr(a, e.indexOf(n, a) - a)).length + n.length, 3 === (n = fe(n, t)).length && n.push(1), o += s + (t ? "hsla(" + n[0] + "," + n[1] + "%," + n[2] + "%," + n[3] : "rgba(" + n.join(",")) + ")";
                return o + e.substr(a)
            }, ge = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";
        for (l in he) ge += "|" + l + "\\b";
        ge = new RegExp(ge + ")", "gi"), s.colorStringFilter = function (e) {
            var t, i = e[0] + " " + e[1];
            ge.test(i) && (t = -1 !== i.indexOf("hsl(") || -1 !== i.indexOf("hsla("), e[0] = me(e[0], t), e[1] = me(e[1], t)), ge.lastIndex = 0
        }, r.g.defaultStringFilter || (r.g.defaultStringFilter = s.colorStringFilter);
        var ve = function (e, t, i, n) {
            if (null == e) return function (e) {
                return e
            };
            var s, r = t ? (e.match(ge) || [""])[0] : "", a = e.split(r).join("").match(_) || [],
                o = e.substr(0, e.indexOf(a[0])), l = ")" === e.charAt(e.length - 1) ? ")" : "",
                c = -1 !== e.indexOf(" ") ? " " : ",", u = a.length, d = u > 0 ? a[0].replace(v, "") : "";
            return u ? s = t ? function (e) {
                var t, h, p, f;
                if ("number" == typeof e) e += d; else if (n && L.test(e)) {
                    for (f = e.replace(L, "|").split("|"), p = 0; p < f.length; p++) f[p] = s(f[p]);
                    return f.join(",")
                }
                if (t = (e.match(ge) || [r])[0], p = (h = e.split(t).join("").match(_) || []).length, u > p--) for (; ++p < u;) h[p] = i ? h[(p - 1) / 2 | 0] : a[p];
                return o + h.join(c) + c + t + l + (-1 !== e.indexOf("inset") ? " inset" : "")
            } : function (e) {
                var t, r, h;
                if ("number" == typeof e) e += d; else if (n && L.test(e)) {
                    for (r = e.replace(L, "|").split("|"), h = 0; h < r.length; h++) r[h] = s(r[h]);
                    return r.join(",")
                }
                if (h = (t = e.match("," === c ? _ : b) || []).length, u > h--) for (; ++h < u;) t[h] = i ? t[(h - 1) / 2 | 0] : a[h];
                return (o && "none" !== e && e.substr(0, e.indexOf(t[0])) || o) + t.join(c) + l
            } : function (e) {
                return e
            }
        }, ye = function (e) {
            return e = e.split(","), function (t, i, n, s, r, a, o) {
                var l, c = (i + "").split(" ");
                for (o = {}, l = 0; l < 4; l++) o[e[l]] = c[l] = c[l] || c[(l - 1) / 2 >> 0];
                return s.parse(t, o, r, a)
            }
        }, _e = (X._setPluginRatio = function (e) {
            this.plugin.setRatio(e);
            for (var t, i, n, s, r, a = this.data, o = a.proxy, l = a.firstMPT; l;) t = o[l.v], l.r ? t = l.r(t) : t < 1e-6 && t > -1e-6 && (t = 0), l.t[l.p] = t, l = l._next;
            if (a.autoRotate && (a.autoRotate.rotation = a.mod ? a.mod.call(this._tween, o.rotation, this.t, this._tween) : o.rotation), 1 === e || 0 === e) for (l = a.firstMPT, r = 1 === e ? "e" : "b"; l;) {
                if ((i = l.t).type) {
                    if (1 === i.type) {
                        for (s = i.xs0 + i.s + i.xs1, n = 1; n < i.l; n++) s += i["xn" + n] + i["xs" + (n + 1)];
                        i[r] = s
                    }
                } else i[r] = i.s + i.xs0;
                l = l._next
            }
        }, function (e, t, i, n, s) {
            this.t = e, this.p = t, this.v = i, this.r = s, n && (n._prev = this, this._next = n)
        }), be = (X._parseToProxy = function (e, t, i, n, s, r) {
            var a, o, l, c, u, d = n, h = {}, p = {}, f = i._transform, m = R;
            for (i._transform = null, R = t, n = u = i.parse(e, t, n, s), R = m, r && (i._transform = f, d && (d._prev = null, d._prev && (d._prev._next = null))); n && n !== d;) {
                if (n.type <= 1 && (p[o = n.p] = n.s + n.c, h[o] = n.s, r || (c = new _e(n, "s", o, c, n.r), n.c = 0), 1 === n.type)) for (a = n.l; --a > 0;) l = "xn" + a, p[o = n.p + "_" + l] = n.data[l], h[o] = n[l], r || (c = new _e(n, l, o, c, n.rxp[l]));
                n = n._next
            }
            return {proxy: h, end: p, firstMPT: c, pt: u}
        }, X.CSSPropTween = function (t, i, s, r, a, o, l, c, u, d, h) {
            this.t = t, this.p = i, this.s = s, this.c = r, this.n = l || i, t instanceof be || n.push(this.n), this.r = c ? "function" == typeof c ? c : Math.round : c, this.type = o || 0, u && (this.pr = u, e = !0), this.b = void 0 === d ? s : d, this.e = void 0 === h ? s + r : h, a && (this._next = a, a._prev = this)
        }), xe = function (e, t, i, n, s, r) {
            var a = new be(e, t, i, n - i, s, -1, r);
            return a.b = i, a.e = a.xs0 = n, a
        }, we = s.parseComplex = function (e, t, i, n, r, a, o, l, u, d) {
            i = i || a || "", "function" == typeof n && (n = n(g, m)), o = new be(e, t, 0, 0, o, d ? 2 : 1, null, !1, l, i, n), n += "", r && ge.test(n + i) && (n = [i, n], s.colorStringFilter(n), i = n[0], n = n[1]);
            var h, p, f, _, b, x, w, T, C, S, E, P, k, M = i.split(", ").join(",").split(" "),
                $ = n.split(", ").join(",").split(" "), O = M.length, A = !1 !== c;
            for (-1 === n.indexOf(",") && -1 === i.indexOf(",") || (-1 !== (n + i).indexOf("rgb") || -1 !== (n + i).indexOf("hsl") ? (M = M.join(" ").replace(L, ", ").split(" "), $ = $.join(" ").replace(L, ", ").split(" ")) : (M = M.join(" ").split(",").join(", ").split(" "), $ = $.join(" ").split(",").join(", ").split(" ")), O = M.length), O !== $.length && (O = (M = (a || "").split(" ")).length), o.plugin = u, o.setRatio = d, ge.lastIndex = 0, h = 0; h < O; h++) if (_ = M[h], b = $[h] + "", (T = parseFloat(_)) || 0 === T) o.appendXtra("", T, ce(b, T), b.replace(y, ""), !(!A || -1 === b.indexOf("px")) && Math.round, !0); else if (r && ge.test(_)) P = ")" + ((P = b.indexOf(")") + 1) ? b.substr(P) : ""), k = -1 !== b.indexOf("hsl") && V, S = b, _ = fe(_, k), b = fe(b, k), (C = _.length + b.length > 6) && !V && 0 === b[3] ? (o["xs" + o.l] += o.l ? " transparent" : "transparent", o.e = o.e.split($[h]).join("transparent")) : (V || (C = !1), k ? o.appendXtra(S.substr(0, S.indexOf("hsl")) + (C ? "hsla(" : "hsl("), _[0], ce(b[0], _[0]), ",", !1, !0).appendXtra("", _[1], ce(b[1], _[1]), "%,", !1).appendXtra("", _[2], ce(b[2], _[2]), C ? "%," : "%" + P, !1) : o.appendXtra(S.substr(0, S.indexOf("rgb")) + (C ? "rgba(" : "rgb("), _[0], b[0] - _[0], ",", Math.round, !0).appendXtra("", _[1], b[1] - _[1], ",", Math.round).appendXtra("", _[2], b[2] - _[2], C ? "," : P, Math.round), C && (_ = _.length < 4 ? 1 : _[3], o.appendXtra("", _, (b.length < 4 ? 1 : b[3]) - _, P, !1))), ge.lastIndex = 0; else if (x = _.match(v)) {
                if (!(w = b.match(y)) || w.length !== x.length) return o;
                for (f = 0, p = 0; p < x.length; p++) E = x[p], S = _.indexOf(E, f), o.appendXtra(_.substr(f, S - f), Number(E), ce(w[p], E), "", !(!A || "px" !== _.substr(S + E.length, 2)) && Math.round, 0 === p), f = S + E.length;
                o["xs" + o.l] += _.substr(f)
            } else o["xs" + o.l] += o.l || o["xs" + o.l] ? " " + b : b;
            if (-1 !== n.indexOf("=") && o.data) {
                for (P = o.xs0 + o.data.s, h = 1; h < o.l; h++) P += o["xs" + h] + o.data["xn" + h];
                o.e = P + o["xs" + h]
            }
            return o.l || (o.type = -1, o.xs0 = o.e), o.xfirst || o
        }, Te = 9;
        for ((l = be.prototype).l = l.pr = 0; --Te > 0;) l["xn" + Te] = 0, l["xs" + Te] = "";
        l.xs0 = "", l._next = l._prev = l.xfirst = l.data = l.plugin = l.setRatio = l.rxp = null, l.appendXtra = function (e, t, i, n, s, r) {
            var a = this, o = a.l;
            return a["xs" + o] += r && (o || a["xs" + o]) ? " " + e : e || "", i || 0 === o || a.plugin ? (a.l++, a.type = a.setRatio ? 2 : 1, a["xs" + a.l] = n || "", o > 0 ? (a.data["xn" + o] = t + i, a.rxp["xn" + o] = s, a["xn" + o] = t, a.plugin || (a.xfirst = new be(a, "xn" + o, t, i, a.xfirst || a, 0, a.n, s, a.pr), a.xfirst.xs0 = 0), a) : (a.data = {s: t + i}, a.rxp = {}, a.s = t, a.c = i, a.r = s, a)) : (a["xs" + o] += t + (n || ""), a)
        };
        var Ce = function (e, t) {
            t = t || {}, this.p = t.prefix && Z(e) || e, o[e] = o[this.p] = this, this.format = t.formatter || ve(t.defaultValue, t.color, t.collapsible, t.multi), t.parser && (this.parse = t.parser), this.clrs = t.color, this.multi = t.multi, this.keyword = t.keyword, this.dflt = t.defaultValue, this.allowFunc = t.allowFunc, this.pr = t.priority || 0
        }, Se = X._registerComplexSpecialProp = function (e, t, i) {
            "object" != typeof t && (t = {parser: i});
            var n, s = e.split(","), r = t.defaultValue;
            for (i = i || [r], n = 0; n < s.length; n++) t.prefix = 0 === n && t.prefix, t.defaultValue = i[n] || r, new Ce(s[n], t)
        }, Ee = X._registerPluginProp = function (e) {
            if (!o[e]) {
                var t = e.charAt(0).toUpperCase() + e.substr(1) + "Plugin";
                Se(e, {
                    parser: function (e, i, n, s, r, l, c) {
                        var u = a.com.greensock.plugins[t];
                        return u ? (u._cssRegister(), o[n].parse(e, i, n, s, r, l, c)) : (W("Error: " + t + " js file not loaded."), r)
                    }
                })
            }
        };
        (l = Ce.prototype).parseComplex = function (e, t, i, n, s, r) {
            var a, o, l, c, u, d, h = this.keyword;
            if (this.multi && (L.test(i) || L.test(t) ? (o = t.replace(L, "|").split("|"), l = i.replace(L, "|").split("|")) : h && (o = [t], l = [i])), l) {
                for (c = l.length > o.length ? l.length : o.length, a = 0; a < c; a++) t = o[a] = o[a] || this.dflt, i = l[a] = l[a] || this.dflt, h && (u = t.indexOf(h)) !== (d = i.indexOf(h)) && (-1 === d ? o[a] = o[a].split(h).join("") : -1 === u && (o[a] += " " + h));
                t = o.join(", "), i = l.join(", ")
            }
            return we(e, this.p, t, i, this.clrs, this.dflt, n, this.pr, s, r)
        }, l.parse = function (e, t, n, s, r, a, o) {
            return this.parseComplex(e.style, this.format(ee(e, this.p, i, !1, this.dflt)), this.format(t), r, a)
        }, s.registerSpecialProp = function (e, t, i) {
            Se(e, {
                parser: function (e, n, s, r, a, o, l) {
                    var c = new be(e, s, 0, 0, a, 2, s, !1, i);
                    return c.plugin = o, c.setRatio = t(e, n, r._tween, s), c
                }, priority: i
            })
        }, s.useSVGTransformAttr = !0;
        var Pe, ke, Me, $e, Oe,
            Ae = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),
            De = Z("transform"), Le = U + "transform", ze = Z("transformOrigin"), Ie = null !== Z("perspective"),
            Ne = X.Transform = function () {
                this.perspective = parseFloat(s.defaultTransformPerspective) || 0, this.force3D = !(!1 === s.defaultForce3D || !Ie) && (s.defaultForce3D || "auto")
            }, Re = r.f.SVGElement, je = function (e, t, i) {
                var n, s = H.createElementNS("http://www.w3.org/2000/svg", e), r = /([a-z])([A-Z])/g;
                for (n in i) s.setAttributeNS(null, n.replace(r, "$1-$2").toLowerCase(), i[n]);
                return t.appendChild(s), s
            }, He = H.documentElement || {},
            Fe = (Oe = f || /Android/i.test(Y) && !r.f.chrome, H.createElementNS && He.appendChild && !Oe && (ke = je("svg", He), $e = (Me = je("rect", ke, {
                width: 100,
                height: 50,
                x: 100
            })).getBoundingClientRect().width, Me.style[ze] = "50% 50%", Me.style[De] = "scaleX(0.5)", Oe = $e === Me.getBoundingClientRect().width && !(h && Ie), He.removeChild(ke)), Oe),
            Be = function (e, t, i, n, r, a) {
                var o, l, c, u, d, h, p, f, m, g, v, y, _, b, x = e._gsTransform, w = Ve(e, !0);
                x && (_ = x.xOrigin, b = x.yOrigin), (!n || (o = n.split(" ")).length < 2) && (0 === (p = e.getBBox()).x && 0 === p.y && p.width + p.height === 0 && (p = {
                    x: parseFloat(e.hasAttribute("x") ? e.getAttribute("x") : e.hasAttribute("cx") ? e.getAttribute("cx") : 0) || 0,
                    y: parseFloat(e.hasAttribute("y") ? e.getAttribute("y") : e.hasAttribute("cy") ? e.getAttribute("cy") : 0) || 0,
                    width: 0,
                    height: 0
                }), o = [(-1 !== (t = le(t).split(" "))[0].indexOf("%") ? parseFloat(t[0]) / 100 * p.width : parseFloat(t[0])) + p.x, (-1 !== t[1].indexOf("%") ? parseFloat(t[1]) / 100 * p.height : parseFloat(t[1])) + p.y]), i.xOrigin = u = parseFloat(o[0]), i.yOrigin = d = parseFloat(o[1]), n && w !== Ye && (h = w[0], p = w[1], f = w[2], m = w[3], g = w[4], v = w[5], (y = h * m - p * f) && (l = u * (m / y) + d * (-f / y) + (f * v - m * g) / y, c = u * (-p / y) + d * (h / y) - (h * v - p * g) / y, u = i.xOrigin = o[0] = l, d = i.yOrigin = o[1] = c)), x && (a && (i.xOffset = x.xOffset, i.yOffset = x.yOffset, x = i), r || !1 !== r && !1 !== s.defaultSmoothOrigin ? (l = u - _, c = d - b, x.xOffset += l * w[0] + c * w[2] - l, x.yOffset += l * w[1] + c * w[3] - c) : x.xOffset = x.yOffset = 0), a || e.setAttribute("data-svg-origin", o.join(" "))
            }, qe = function (e) {
                var t,
                    i = F("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
                    n = this.parentNode, s = this.nextSibling, r = this.style.cssText;
                if (He.appendChild(i), i.appendChild(this), this.style.display = "block", e) try {
                    t = this.getBBox(), this._originalGetBBox = this.getBBox, this.getBBox = qe
                } catch (e) {
                } else this._originalGetBBox && (t = this._originalGetBBox());
                return s ? n.insertBefore(this, s) : n.appendChild(this), He.removeChild(i), this.style.cssText = r, t
            }, Xe = function (e) {
                return !(!Re || !e.getCTM || e.parentNode && !e.ownerSVGElement || !function (e) {
                    try {
                        return e.getBBox()
                    } catch (t) {
                        return qe.call(e, !0)
                    }
                }(e))
            }, Ye = [1, 0, 0, 1, 0, 0], Ve = function (e, t) {
                var i, n, s, r, a, o, l, c = e._gsTransform || new Ne, u = e.style;
                if (De ? n = ee(e, Le, null, !0) : e.currentStyle && (n = (n = e.currentStyle.filter.match(A)) && 4 === n.length ? [n[0].substr(4), Number(n[2].substr(4)), Number(n[1].substr(4)), n[3].substr(4), c.x || 0, c.y || 0].join(",") : ""), i = !n || "none" === n || "matrix(1, 0, 0, 1, 0, 0)" === n, De && i && !e.offsetParent && e !== He && (r = u.display, u.display = "block", (l = e.parentNode) && e.offsetParent || (a = 1, o = e.nextSibling, He.appendChild(e)), i = !(n = ee(e, Le, null, !0)) || "none" === n || "matrix(1, 0, 0, 1, 0, 0)" === n, r ? u.display = r : Ze(u, "display"), a && (o ? l.insertBefore(e, o) : l ? l.appendChild(e) : He.removeChild(e))), (c.svg || e.getCTM && Xe(e)) && (i && -1 !== (u[De] + "").indexOf("matrix") && (n = u[De], i = 0), s = e.getAttribute("transform"), i && s && (n = "matrix(" + (s = e.transform.baseVal.consolidate().matrix).a + "," + s.b + "," + s.c + "," + s.d + "," + s.e + "," + s.f + ")", i = 0)), i) return Ye;
                for (s = (n || "").match(v) || [], Te = s.length; --Te > -1;) r = Number(s[Te]), s[Te] = (a = r - (r |= 0)) ? (1e5 * a + (a < 0 ? -.5 : .5) | 0) / 1e5 + r : r;
                return t && s.length > 6 ? [s[0], s[1], s[4], s[5], s[12], s[13]] : s
            }, Ge = X.getTransform = function (e, t, i, n) {
                if (e._gsTransform && i && !n) return e._gsTransform;
                var a, o, l, c, u, d, h = i && e._gsTransform || new Ne, p = h.scaleX < 0,
                    f = Ie && (parseFloat(ee(e, ze, t, !1, "0 0 0").split(" ")[2]) || h.zOrigin) || 0,
                    m = parseFloat(s.defaultTransformPerspective) || 0;
                if (h.svg = !(!e.getCTM || !Xe(e)), h.svg && (Be(e, ee(e, ze, t, !1, "50% 50%") + "", h, e.getAttribute("data-svg-origin")), Pe = s.useSVGTransformAttr || Fe), (a = Ve(e)) !== Ye) {
                    if (16 === a.length) {
                        var g, v, y, _, b, x = a[0], w = a[1], T = a[2], C = a[3], S = a[4], E = a[5], P = a[6], k = a[7],
                            M = a[8], $ = a[9], O = a[10], A = a[12], D = a[13], L = a[14], z = a[11], I = Math.atan2(P, O);
                        h.zOrigin && (A = M * (L = -h.zOrigin) - a[12], D = $ * L - a[13], L = O * L + h.zOrigin - a[14]), h.rotationX = I * N, I && (g = S * (_ = Math.cos(-I)) + M * (b = Math.sin(-I)), v = E * _ + $ * b, y = P * _ + O * b, M = S * -b + M * _, $ = E * -b + $ * _, O = P * -b + O * _, z = k * -b + z * _, S = g, E = v, P = y), I = Math.atan2(-T, O), h.rotationY = I * N, I && (v = w * (_ = Math.cos(-I)) - $ * (b = Math.sin(-I)), y = T * _ - O * b, $ = w * b + $ * _, O = T * b + O * _, z = C * b + z * _, x = g = x * _ - M * b, w = v, T = y), I = Math.atan2(w, x), h.rotation = I * N, I && (g = x * (_ = Math.cos(I)) + w * (b = Math.sin(I)), v = S * _ + E * b, y = M * _ + $ * b, w = w * _ - x * b, E = E * _ - S * b, $ = $ * _ - M * b, x = g, S = v, M = y), h.rotationX && Math.abs(h.rotationX) + Math.abs(h.rotation) > 359.9 && (h.rotationX = h.rotation = 0, h.rotationY = 180 - h.rotationY), I = Math.atan2(S, E), h.scaleX = (1e5 * Math.sqrt(x * x + w * w + T * T) + .5 | 0) / 1e5, h.scaleY = (1e5 * Math.sqrt(E * E + P * P) + .5 | 0) / 1e5, h.scaleZ = (1e5 * Math.sqrt(M * M + $ * $ + O * O) + .5 | 0) / 1e5, x /= h.scaleX, S /= h.scaleY, w /= h.scaleX, E /= h.scaleY, Math.abs(I) > 2e-5 ? (h.skewX = I * N, S = 0, "simple" !== h.skewType && (h.scaleY *= 1 / Math.cos(I))) : h.skewX = 0, h.perspective = z ? 1 / (z < 0 ? -z : z) : 0, h.x = A, h.y = D, h.z = L, h.svg && (h.x -= h.xOrigin - (h.xOrigin * x - h.yOrigin * S), h.y -= h.yOrigin - (h.yOrigin * w - h.xOrigin * E))
                    } else if (!Ie || n || !a.length || h.x !== a[4] || h.y !== a[5] || !h.rotationX && !h.rotationY) {
                        var R = a.length >= 6, j = R ? a[0] : 1, H = a[1] || 0, F = a[2] || 0, B = R ? a[3] : 1;
                        h.x = a[4] || 0, h.y = a[5] || 0, l = Math.sqrt(j * j + H * H), c = Math.sqrt(B * B + F * F), u = j || H ? Math.atan2(H, j) * N : h.rotation || 0, d = F || B ? Math.atan2(F, B) * N + u : h.skewX || 0, h.scaleX = l, h.scaleY = c, h.rotation = u, h.skewX = d, Ie && (h.rotationX = h.rotationY = h.z = 0, h.perspective = m, h.scaleZ = 1), h.svg && (h.x -= h.xOrigin - (h.xOrigin * j + h.yOrigin * F), h.y -= h.yOrigin - (h.xOrigin * H + h.yOrigin * B))
                    }
                    for (o in Math.abs(h.skewX) > 90 && Math.abs(h.skewX) < 270 && (p ? (h.scaleX *= -1, h.skewX += h.rotation <= 0 ? 180 : -180, h.rotation += h.rotation <= 0 ? 180 : -180) : (h.scaleY *= -1, h.skewX += h.skewX <= 0 ? 180 : -180)), h.zOrigin = f, h) h[o] < 2e-5 && h[o] > -2e-5 && (h[o] = 0)
                }
                return i && (e._gsTransform = h, h.svg && (Pe && e.style[De] ? r.g.delayedCall(.001, function () {
                    Ze(e.style, De)
                }) : !Pe && e.getAttribute("transform") && r.g.delayedCall(.001, function () {
                    e.removeAttribute("transform")
                }))), h
            }, We = function (e) {
                var t, i, n = this.data, s = -n.rotation * I, r = s + n.skewX * I,
                    a = (Math.cos(s) * n.scaleX * 1e5 | 0) / 1e5, o = (Math.sin(s) * n.scaleX * 1e5 | 0) / 1e5,
                    l = (Math.sin(r) * -n.scaleY * 1e5 | 0) / 1e5, c = (Math.cos(r) * n.scaleY * 1e5 | 0) / 1e5,
                    u = this.t.style, d = this.t.currentStyle;
                if (d) {
                    i = o, o = -l, l = -i, t = d.filter, u.filter = "";
                    var h, p, m = this.t.offsetWidth, g = this.t.offsetHeight, v = "absolute" !== d.position,
                        y = "progid:DXImageTransform.Microsoft.Matrix(M11=" + a + ", M12=" + o + ", M21=" + l + ", M22=" + c,
                        _ = n.x + m * n.xPercent / 100, b = n.y + g * n.yPercent / 100;
                    if (null != n.ox && (_ += (h = (n.oxp ? m * n.ox * .01 : n.ox) - m / 2) - (h * a + (p = (n.oyp ? g * n.oy * .01 : n.oy) - g / 2) * o), b += p - (h * l + p * c)), y += v ? ", Dx=" + ((h = m / 2) - (h * a + (p = g / 2) * o) + _) + ", Dy=" + (p - (h * l + p * c) + b) + ")" : ", sizingMethod='auto expand')", -1 !== t.indexOf("DXImageTransform.Microsoft.Matrix(") ? u.filter = t.replace(D, y) : u.filter = y + " " + t, 0 !== e && 1 !== e || 1 === a && 0 === o && 0 === l && 1 === c && (v && -1 === y.indexOf("Dx=0, Dy=0") || T.test(t) && 100 !== parseFloat(RegExp.$1) || -1 === t.indexOf(t.indexOf("Alpha")) && u.removeAttribute("filter")), !v) {
                        var x, C, S, E = f < 8 ? 1 : -1;
                        for (h = n.ieOffsetX || 0, p = n.ieOffsetY || 0, n.ieOffsetX = Math.round((m - ((a < 0 ? -a : a) * m + (o < 0 ? -o : o) * g)) / 2 + _), n.ieOffsetY = Math.round((g - ((c < 0 ? -c : c) * g + (l < 0 ? -l : l) * m)) / 2 + b), Te = 0; Te < 4; Te++) S = (i = -1 !== (x = d[C = ae[Te]]).indexOf("px") ? parseFloat(x) : te(this.t, C, parseFloat(x), x.replace(w, "")) || 0) !== n[C] ? Te < 2 ? -n.ieOffsetX : -n.ieOffsetY : Te < 2 ? h - n.ieOffsetX : p - n.ieOffsetY, u[C] = (n[C] = Math.round(i - S * (0 === Te || 2 === Te ? 1 : E))) + "px"
                    }
                }
            }, Ue = X.set3DTransformRatio = X.setTransformRatio = function (e) {
                var t, i, n, s, r, a, o, l, c, u, d, p, f, m, g, v, y, _, b, x, w = this.data, T = this.t.style,
                    C = w.rotation, S = w.rotationX, E = w.rotationY, P = w.scaleX, k = w.scaleY, M = w.scaleZ, $ = w.x,
                    O = w.y, A = w.z, D = w.svg, L = w.perspective, z = w.force3D, N = w.skewY, R = w.skewX;
                if (N && (R += N, C += N), !((1 !== e && 0 !== e || "auto" !== z || this.tween._totalTime !== this.tween._totalDuration && this.tween._totalTime) && z || A || L || E || S || 1 !== M) || Pe && D || !Ie) C || R || D ? (C *= I, x = R * I, 1e5, i = Math.cos(C) * P, r = Math.sin(C) * P, n = Math.sin(C - x) * -k, a = Math.cos(C - x) * k, x && "simple" === w.skewType && (t = Math.tan(x - N * I), n *= t = Math.sqrt(1 + t * t), a *= t, N && (t = Math.tan(N * I), i *= t = Math.sqrt(1 + t * t), r *= t)), D && ($ += w.xOrigin - (w.xOrigin * i + w.yOrigin * n) + w.xOffset, O += w.yOrigin - (w.xOrigin * r + w.yOrigin * a) + w.yOffset, Pe && (w.xPercent || w.yPercent) && (g = this.t.getBBox(), $ += .01 * w.xPercent * g.width, O += .01 * w.yPercent * g.height), $ < (g = 1e-6) && $ > -g && ($ = 0), O < g && O > -g && (O = 0)), b = (1e5 * i | 0) / 1e5 + "," + (1e5 * r | 0) / 1e5 + "," + (1e5 * n | 0) / 1e5 + "," + (1e5 * a | 0) / 1e5 + "," + $ + "," + O + ")", D && Pe ? this.t.setAttribute("transform", "matrix(" + b) : T[De] = (w.xPercent || w.yPercent ? "translate(" + w.xPercent + "%," + w.yPercent + "%) matrix(" : "matrix(") + b) : T[De] = (w.xPercent || w.yPercent ? "translate(" + w.xPercent + "%," + w.yPercent + "%) matrix(" : "matrix(") + P + ",0,0," + k + "," + $ + "," + O + ")"; else {
                    if (h && (P < (g = 1e-4) && P > -g && (P = M = 2e-5), k < g && k > -g && (k = M = 2e-5), !L || w.z || w.rotationX || w.rotationY || (L = 0)), C || R) C *= I, v = i = Math.cos(C), y = r = Math.sin(C), R && (C -= R * I, v = Math.cos(C), y = Math.sin(C), "simple" === w.skewType && (t = Math.tan((R - N) * I), v *= t = Math.sqrt(1 + t * t), y *= t, w.skewY && (t = Math.tan(N * I), i *= t = Math.sqrt(1 + t * t), r *= t))), n = -y, a = v; else {
                        if (!(E || S || 1 !== M || L || D)) return void (T[De] = (w.xPercent || w.yPercent ? "translate(" + w.xPercent + "%," + w.yPercent + "%) translate3d(" : "translate3d(") + $ + "px," + O + "px," + A + "px)" + (1 !== P || 1 !== k ? " scale(" + P + "," + k + ")" : ""));
                        i = a = 1, n = r = 0
                    }
                    u = 1, s = o = l = c = d = p = 0, f = L ? -1 / L : 0, m = w.zOrigin, g = 1e-6, ",", "0", (C = E * I) && (v = Math.cos(C), l = -(y = Math.sin(C)), d = f * -y, s = i * y, o = r * y, u = v, f *= v, i *= v, r *= v), (C = S * I) && (t = n * (v = Math.cos(C)) + s * (y = Math.sin(C)), _ = a * v + o * y, c = u * y, p = f * y, s = n * -y + s * v, o = a * -y + o * v, u *= v, f *= v, n = t, a = _), 1 !== M && (s *= M, o *= M, u *= M, f *= M), 1 !== k && (n *= k, a *= k, c *= k, p *= k), 1 !== P && (i *= P, r *= P, l *= P, d *= P), (m || D) && (m && ($ += s * -m, O += o * -m, A += u * -m + m), D && ($ += w.xOrigin - (w.xOrigin * i + w.yOrigin * n) + w.xOffset, O += w.yOrigin - (w.xOrigin * r + w.yOrigin * a) + w.yOffset), $ < g && $ > -g && ($ = "0"), O < g && O > -g && (O = "0"), A < g && A > -g && (A = 0)), b = w.xPercent || w.yPercent ? "translate(" + w.xPercent + "%," + w.yPercent + "%) matrix3d(" : "matrix3d(", b += (i < g && i > -g ? "0" : i) + "," + (r < g && r > -g ? "0" : r) + "," + (l < g && l > -g ? "0" : l), b += "," + (d < g && d > -g ? "0" : d) + "," + (n < g && n > -g ? "0" : n) + "," + (a < g && a > -g ? "0" : a), S || E || 1 !== M ? (b += "," + (c < g && c > -g ? "0" : c) + "," + (p < g && p > -g ? "0" : p) + "," + (s < g && s > -g ? "0" : s), b += "," + (o < g && o > -g ? "0" : o) + "," + (u < g && u > -g ? "0" : u) + "," + (f < g && f > -g ? "0" : f) + ",") : b += ",0,0,0,0,1,0,", b += $ + "," + O + "," + A + "," + (L ? 1 + -A / L : 1) + ")", T[De] = b
                }
            };
        (l = Ne.prototype).x = l.y = l.z = l.skewX = l.skewY = l.rotation = l.rotationX = l.rotationY = l.zOrigin = l.xPercent = l.yPercent = l.xOffset = l.yOffset = 0, l.scaleX = l.scaleY = l.scaleZ = 1, Se("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin", {
            parser: function (e, t, n, r, a, o, l) {
                if (r._lastParsedTransform === l) return a;
                r._lastParsedTransform = l;
                var c = l.scale && "function" == typeof l.scale ? l.scale : 0;
                c && (l.scale = c(g, e));
                var u, d, h, p, f, v, y, _, b, x = e._gsTransform, w = e.style, T = Ae.length, C = l, S = {},
                    E = Ge(e, i, !0, C.parseTransform),
                    P = C.transform && ("function" == typeof C.transform ? C.transform(g, m) : C.transform);
                if (E.skewType = C.skewType || E.skewType || s.defaultSkewType, r._transform = E, "rotationZ" in C && (C.rotation = C.rotationZ), P && "string" == typeof P && De) (d = B.style)[De] = P, d.display = "block", d.position = "absolute", -1 !== P.indexOf("%") && (d.width = ee(e, "width"), d.height = ee(e, "height")), H.body.appendChild(B), u = Ge(B, null, !1), "simple" === E.skewType && (u.scaleY *= Math.cos(u.skewX * I)), E.svg && (v = E.xOrigin, y = E.yOrigin, u.x -= E.xOffset, u.y -= E.yOffset, (C.transformOrigin || C.svgOrigin) && (P = {}, Be(e, le(C.transformOrigin), P, C.svgOrigin, C.smoothOrigin, !0), v = P.xOrigin, y = P.yOrigin, u.x -= P.xOffset - E.xOffset, u.y -= P.yOffset - E.yOffset), (v || y) && (_ = Ve(B, !0), u.x -= v - (v * _[0] + y * _[2]), u.y -= y - (v * _[1] + y * _[3]))), H.body.removeChild(B), u.perspective || (u.perspective = E.perspective), null != C.xPercent && (u.xPercent = ue(C.xPercent, E.xPercent)), null != C.yPercent && (u.yPercent = ue(C.yPercent, E.yPercent)); else if ("object" == typeof C) {
                    if (u = {
                        scaleX: ue(null != C.scaleX ? C.scaleX : C.scale, E.scaleX),
                        scaleY: ue(null != C.scaleY ? C.scaleY : C.scale, E.scaleY),
                        scaleZ: ue(C.scaleZ, E.scaleZ),
                        x: ue(C.x, E.x),
                        y: ue(C.y, E.y),
                        z: ue(C.z, E.z),
                        xPercent: ue(C.xPercent, E.xPercent),
                        yPercent: ue(C.yPercent, E.yPercent),
                        perspective: ue(C.transformPerspective, E.perspective)
                    }, null != (f = C.directionalRotation)) if ("object" == typeof f) for (d in f) C[d] = f[d]; else C.rotation = f;
                    "string" == typeof C.x && -1 !== C.x.indexOf("%") && (u.x = 0, u.xPercent = ue(C.x, E.xPercent)), "string" == typeof C.y && -1 !== C.y.indexOf("%") && (u.y = 0, u.yPercent = ue(C.y, E.yPercent)), u.rotation = de("rotation" in C ? C.rotation : "shortRotation" in C ? C.shortRotation + "_short" : E.rotation, E.rotation, "rotation", S), Ie && (u.rotationX = de("rotationX" in C ? C.rotationX : "shortRotationX" in C ? C.shortRotationX + "_short" : E.rotationX || 0, E.rotationX, "rotationX", S), u.rotationY = de("rotationY" in C ? C.rotationY : "shortRotationY" in C ? C.shortRotationY + "_short" : E.rotationY || 0, E.rotationY, "rotationY", S)), u.skewX = de(C.skewX, E.skewX), u.skewY = de(C.skewY, E.skewY)
                }
                for (Ie && null != C.force3D && (E.force3D = C.force3D, p = !0), (h = E.force3D || E.z || E.rotationX || E.rotationY || u.z || u.rotationX || u.rotationY || u.perspective) || null == C.scale || (u.scaleZ = 1); --T > -1;) ((P = u[b = Ae[T]] - E[b]) > 1e-6 || P < -1e-6 || null != C[b] || null != R[b]) && (p = !0, a = new be(E, b, E[b], P, a), b in S && (a.e = S[b]), a.xs0 = 0, a.plugin = o, r._overwriteProps.push(a.n));
                return P = "function" == typeof C.transformOrigin ? C.transformOrigin(g, m) : C.transformOrigin, E.svg && (P || C.svgOrigin) && (v = E.xOffset, y = E.yOffset, Be(e, le(P), u, C.svgOrigin, C.smoothOrigin), a = xe(E, "xOrigin", (x ? E : u).xOrigin, u.xOrigin, a, "transformOrigin"), a = xe(E, "yOrigin", (x ? E : u).yOrigin, u.yOrigin, a, "transformOrigin"), v === E.xOffset && y === E.yOffset || (a = xe(E, "xOffset", x ? v : E.xOffset, E.xOffset, a, "transformOrigin"), a = xe(E, "yOffset", x ? y : E.yOffset, E.yOffset, a, "transformOrigin")), P = "0px 0px"), (P || Ie && h && E.zOrigin) && (De ? (p = !0, b = ze, P || (P = (P = (ee(e, b, i, !1, "50% 50%") + "").split(" "))[0] + " " + P[1] + " " + E.zOrigin + "px"), P += "", (a = new be(w, b, 0, 0, a, -1, "transformOrigin")).b = w[b], a.plugin = o, Ie ? (d = E.zOrigin, P = P.split(" "), E.zOrigin = (P.length > 2 ? parseFloat(P[2]) : d) || 0, a.xs0 = a.e = P[0] + " " + (P[1] || "50%") + " 0px", (a = new be(E, "zOrigin", 0, 0, a, -1, a.n)).b = d, a.xs0 = a.e = E.zOrigin) : a.xs0 = a.e = P) : le(P + "", E)), p && (r._transformType = E.svg && Pe || !h && 3 !== this._transformType ? 2 : 3), c && (l.scale = c), a
            }, allowFunc: !0, prefix: !0
        }), Se("boxShadow", {
            defaultValue: "0px 0px 0px 0px #999",
            prefix: !0,
            color: !0,
            multi: !0,
            keyword: "inset"
        }), Se("clipPath", {
            defaultValue: "inset(0%)",
            prefix: !0,
            multi: !0,
            formatter: ve("inset(0% 0% 0% 0%)", !1, !0)
        }), Se("borderRadius", {
            defaultValue: "0px", parser: function (e, n, s, r, a, o) {
                n = this.format(n);
                var l, c, u, d, h, p, f, m, g, v, y, _, b, x, w, T,
                    C = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
                    S = e.style;
                for (g = parseFloat(e.offsetWidth), v = parseFloat(e.offsetHeight), l = n.split(" "), c = 0; c < C.length; c++) this.p.indexOf("border") && (C[c] = Z(C[c])), -1 !== (h = d = ee(e, C[c], i, !1, "0px")).indexOf(" ") && (d = h.split(" "), h = d[0], d = d[1]), p = u = l[c], f = parseFloat(h), _ = h.substr((f + "").length), (b = "=" === p.charAt(1)) ? (m = parseInt(p.charAt(0) + "1", 10), p = p.substr(2), m *= parseFloat(p), y = p.substr((m + "").length - (m < 0 ? 1 : 0)) || "") : (m = parseFloat(p), y = p.substr((m + "").length)), "" === y && (y = t[s] || _), y !== _ && (x = te(e, "borderLeft", f, _), w = te(e, "borderTop", f, _), "%" === y ? (h = x / g * 100 + "%", d = w / v * 100 + "%") : "em" === y ? (h = x / (T = te(e, "borderLeft", 1, "em")) + "em", d = w / T + "em") : (h = x + "px", d = w + "px"), b && (p = parseFloat(h) + m + y, u = parseFloat(d) + m + y)), a = we(S, C[c], h + " " + d, p + " " + u, !1, "0px", a);
                return a
            }, prefix: !0, formatter: ve("0px 0px 0px 0px", !1, !0)
        }), Se("borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius", {
            defaultValue: "0px",
            parser: function (e, t, n, s, r, a) {
                return we(e.style, n, this.format(ee(e, n, i, !1, "0px 0px")), this.format(t), !1, "0px", r)
            },
            prefix: !0,
            formatter: ve("0px 0px", !1, !0)
        }), Se("backgroundPosition", {
            defaultValue: "0 0", parser: function (e, t, n, s, r, a) {
                var o, l, c, u, d, h, p = "background-position", m = i || J(e),
                    g = this.format((m ? f ? m.getPropertyValue(p + "-x") + " " + m.getPropertyValue(p + "-y") : m.getPropertyValue(p) : e.currentStyle.backgroundPositionX + " " + e.currentStyle.backgroundPositionY) || "0 0"),
                    v = this.format(t);
                if (-1 !== g.indexOf("%") != (-1 !== v.indexOf("%")) && v.split(",").length < 2 && (h = ee(e, "backgroundImage").replace(M, "")) && "none" !== h) {
                    for (o = g.split(" "), l = v.split(" "), q.setAttribute("src", h), c = 2; --c > -1;) (u = -1 !== (g = o[c]).indexOf("%")) !== (-1 !== l[c].indexOf("%")) && (d = 0 === c ? e.offsetWidth - q.width : e.offsetHeight - q.height, o[c] = u ? parseFloat(g) / 100 * d + "px" : parseFloat(g) / d * 100 + "%");
                    g = o.join(" ")
                }
                return this.parseComplex(e.style, g, v, r, a)
            }, formatter: le
        }), Se("backgroundSize", {
            defaultValue: "0 0", formatter: function (e) {
                return "co" === (e += "").substr(0, 2) ? e : le(-1 === e.indexOf(" ") ? e + " " + e : e)
            }
        }), Se("perspective", {defaultValue: "0px", prefix: !0}), Se("perspectiveOrigin", {
            defaultValue: "50% 50%",
            prefix: !0
        }), Se("transformStyle", {prefix: !0}), Se("backfaceVisibility", {prefix: !0}), Se("userSelect", {prefix: !0}), Se("margin", {parser: ye("marginTop,marginRight,marginBottom,marginLeft")}), Se("padding", {parser: ye("paddingTop,paddingRight,paddingBottom,paddingLeft")}), Se("clip", {
            defaultValue: "rect(0px,0px,0px,0px)",
            parser: function (e, t, n, s, r, a) {
                var o, l, c;
                return f < 9 ? (l = e.currentStyle, c = f < 8 ? " " : ",", o = "rect(" + l.clipTop + c + l.clipRight + c + l.clipBottom + c + l.clipLeft + ")", t = this.format(t).split(",").join(c)) : (o = this.format(ee(e, this.p, i, !1, this.dflt)), t = this.format(t)), this.parseComplex(e.style, o, t, r, a)
            }
        }), Se("textShadow", {
            defaultValue: "0px 0px 0px #999",
            color: !0,
            multi: !0
        }), Se("autoRound,strictUnits", {
            parser: function (e, t, i, n, s) {
                return s
            }
        }), Se("border", {
            defaultValue: "0px solid #000", parser: function (e, t, n, s, r, a) {
                var o = ee(e, "borderTopWidth", i, !1, "0px"), l = this.format(t).split(" "), c = l[0].replace(w, "");
                return "px" !== c && (o = parseFloat(o) / te(e, "borderTopWidth", 1, c) + c), this.parseComplex(e.style, this.format(o + " " + ee(e, "borderTopStyle", i, !1, "solid") + " " + ee(e, "borderTopColor", i, !1, "#000")), l.join(" "), r, a)
            }, color: !0, formatter: function (e) {
                var t = e.split(" ");
                return t[0] + " " + (t[1] || "solid") + " " + (e.match(ge) || ["#000"])[0]
            }
        }), Se("borderWidth", {parser: ye("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")}), Se("float,cssFloat,styleFloat", {
            parser: function (e, t, i, n, s, r) {
                var a = e.style, o = "cssFloat" in a ? "cssFloat" : "styleFloat";
                return new be(a, o, 0, 0, s, -1, i, !1, 0, a[o], t)
            }
        });
        var Ke = function (e) {
            var t, i = this.t, n = i.filter || ee(this.data, "filter") || "", s = this.s + this.c * e | 0;
            100 === s && (-1 === n.indexOf("atrix(") && -1 === n.indexOf("radient(") && -1 === n.indexOf("oader(") ? (i.removeAttribute("filter"), t = !ee(this.data, "filter")) : (i.filter = n.replace(S, ""), t = !0)), t || (this.xn1 && (i.filter = n = n || "alpha(opacity=" + s + ")"), -1 === n.indexOf("pacity") ? 0 === s && this.xn1 || (i.filter = n + " alpha(opacity=" + s + ")") : i.filter = n.replace(T, "opacity=" + s))
        };
        Se("opacity,alpha,autoAlpha", {
            defaultValue: "1", parser: function (e, t, n, s, r, a) {
                var o = parseFloat(ee(e, "opacity", i, !1, "1")), l = e.style, c = "autoAlpha" === n;
                return "string" == typeof t && "=" === t.charAt(1) && (t = ("-" === t.charAt(0) ? -1 : 1) * parseFloat(t.substr(2)) + o), c && 1 === o && "hidden" === ee(e, "visibility", i) && 0 !== t && (o = 0), V ? r = new be(l, "opacity", o, t - o, r) : ((r = new be(l, "opacity", 100 * o, 100 * (t - o), r)).xn1 = c ? 1 : 0, l.zoom = 1, r.type = 2, r.b = "alpha(opacity=" + r.s + ")", r.e = "alpha(opacity=" + (r.s + r.c) + ")", r.data = e, r.plugin = a, r.setRatio = Ke), c && ((r = new be(l, "visibility", 0, 0, r, -1, null, !1, 0, 0 !== o ? "inherit" : "hidden", 0 === t ? "hidden" : "inherit")).xs0 = "inherit", s._overwriteProps.push(r.n), s._overwriteProps.push(n)), r
            }
        });
        var Ze = function (e, t) {
            t && (e.removeProperty ? ("ms" !== t.substr(0, 2) && "webkit" !== t.substr(0, 6) || (t = "-" + t), e.removeProperty(t.replace(P, "-$1").toLowerCase())) : e.removeAttribute(t))
        }, Qe = function (e) {
            if (this.t._gsClassPT = this, 1 === e || 0 === e) {
                this.t.setAttribute("class", 0 === e ? this.b : this.e);
                for (var t = this.data, i = this.t.style; t;) t.v ? i[t.p] = t.v : Ze(i, t.p), t = t._next;
                1 === e && this.t._gsClassPT === this && (this.t._gsClassPT = null)
            } else this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e)
        };
        Se("className", {
            parser: function (t, n, s, r, a, o, l) {
                var c, u, d, h, p, f = t.getAttribute("class") || "", m = t.style.cssText;
                if ((a = r._classNamePT = new be(t, s, 0, 0, a, 2)).setRatio = Qe, a.pr = -11, e = !0, a.b = f, u = ne(t, i), d = t._gsClassPT) {
                    for (h = {}, p = d.data; p;) h[p.p] = 1, p = p._next;
                    d.setRatio(1)
                }
                return t._gsClassPT = a, a.e = "=" !== n.charAt(1) ? n : f.replace(new RegExp("(?:\\s|^)" + n.substr(2) + "(?![\\w-])"), "") + ("+" === n.charAt(0) ? " " + n.substr(2) : ""), t.setAttribute("class", a.e), c = se(t, u, ne(t), l, h), t.setAttribute("class", f), a.data = c.firstMPT, t.style.cssText !== m && (t.style.cssText = m), a = a.xfirst = r.parse(t, c.difs, a, o)
            }
        });
        var Je = function (e) {
            if ((1 === e || 0 === e) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
                var t, i, n, s, r, a = this.t.style, l = o.transform.parse;
                if ("all" === this.e) a.cssText = "", s = !0; else for (n = (t = this.e.split(" ").join("").split(",")).length; --n > -1;) i = t[n], o[i] && (o[i].parse === l ? s = !0 : i = "transformOrigin" === i ? ze : o[i].p), Ze(a, i);
                s && (Ze(a, De), (r = this.t._gsTransform) && (r.svg && (this.t.removeAttribute("data-svg-origin"), this.t.removeAttribute("transform")), delete this.t._gsTransform))
            }
        };
        for (Se("clearProps", {
            parser: function (t, i, n, s, r) {
                return (r = new be(t, n, 0, 0, r, 2)).setRatio = Je, r.e = i, r.pr = -10, r.data = s._tween, e = !0, r
            }
        }), l = "bezier,throwProps,physicsProps,physics2D".split(","), Te = l.length; Te--;) Ee(l[Te]);
        (l = s.prototype)._firstPT = l._lastParsedTransform = l._transform = null, l._onInitTween = function (r, a, l, h) {
            if (!r.nodeType) return !1;
            this._target = m = r, this._tween = l, this._vars = a, g = h, c = a.autoRound, e = !1, t = a.suffixMap || s.suffixMap, i = J(r), n = this._overwriteProps;
            var f, v, y, _, b, x, w, T, S, E = r.style;
            if (u && "" === E.zIndex && ("auto" !== (f = ee(r, "zIndex", i)) && "" !== f || this._addLazySet(E, "zIndex", 0)), "string" == typeof a && (_ = E.cssText, f = ne(r, i), E.cssText = _ + ";" + a, f = se(r, f, ne(r)).difs, !V && C.test(a) && (f.opacity = parseFloat(RegExp.$1)), a = f, E.cssText = _), a.className ? this._firstPT = v = o.className.parse(r, a.className, "className", this, null, null, a) : this._firstPT = v = this.parse(r, a, null), this._transformType) {
                for (S = 3 === this._transformType, De ? d && (u = !0, "" === E.zIndex && ("auto" !== (w = ee(r, "zIndex", i)) && "" !== w || this._addLazySet(E, "zIndex", 0)), p && this._addLazySet(E, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (S ? "visible" : "hidden"))) : E.zoom = 1, y = v; y && y._next;) y = y._next;
                T = new be(r, "transform", 0, 0, null, 2), this._linkCSSP(T, null, y), T.setRatio = De ? Ue : We, T.data = this._transform || Ge(r, i, !0), T.tween = l, T.pr = -1, n.pop()
            }
            if (e) {
                for (; v;) {
                    for (x = v._next, y = _; y && y.pr > v.pr;) y = y._next;
                    (v._prev = y ? y._prev : b) ? v._prev._next = v : _ = v, (v._next = y) ? y._prev = v : b = v, v = x
                }
                this._firstPT = _
            }
            return !0
        }, l.parse = function (e, n, s, r) {
            var a, l, u, d, h, p, f, v, y, _, b = e.style;
            for (a in n) {
                if (p = n[a], l = o[a], "function" != typeof p || l && l.allowFunc || (p = p(g, m)), l) s = l.parse(e, p, a, this, s, r, n); else {
                    if ("--" === a.substr(0, 2)) {
                        this._tween._propLookup[a] = this._addTween.call(this._tween, e.style, "setProperty", J(e).getPropertyValue(a) + "", p + "", a, !1, a);
                        continue
                    }
                    h = ee(e, a, i) + "", y = "string" == typeof p, "color" === a || "fill" === a || "stroke" === a || -1 !== a.indexOf("Color") || y && E.test(p) ? (y || (p = ((p = fe(p)).length > 3 ? "rgba(" : "rgb(") + p.join(",") + ")"), s = we(b, a, h, p, !0, "transparent", s, 0, r)) : y && z.test(p) ? s = we(b, a, h, p, !0, null, s, 0, r) : (f = (u = parseFloat(h)) || 0 === u ? h.substr((u + "").length) : "", "" !== h && "auto" !== h || ("width" === a || "height" === a ? (u = oe(e, a, i), f = "px") : "left" === a || "top" === a ? (u = ie(e, a, i), f = "px") : (u = "opacity" !== a ? 0 : 1, f = "")), (_ = y && "=" === p.charAt(1)) ? (d = parseInt(p.charAt(0) + "1", 10), p = p.substr(2), d *= parseFloat(p), v = p.replace(w, "")) : (d = parseFloat(p), v = y ? p.replace(w, "") : ""), "" === v && (v = a in t ? t[a] : f), p = d || 0 === d ? (_ ? d + u : d) + v : n[a], f !== v && ("" === v && "lineHeight" !== a || (d || 0 === d) && u && (u = te(e, a, u, f), "%" === v ? (u /= te(e, a, 100, "%") / 100, !0 !== n.strictUnits && (h = u + "%")) : "em" === v || "rem" === v || "vw" === v || "vh" === v ? u /= te(e, a, 1, v) : "px" !== v && (d = te(e, a, d, v), v = "px"), _ && (d || 0 === d) && (p = d + u + v))), _ && (d += u), !u && 0 !== u || !d && 0 !== d ? void 0 !== b[a] && (p || p + "" != "NaN" && null != p) ? (s = new be(b, a, d || u || 0, 0, s, -1, a, !1, 0, h, p)).xs0 = "none" !== p || "display" !== a && -1 === a.indexOf("Style") ? p : h : W("invalid " + a + " tween value: " + n[a]) : (s = new be(b, a, u, d - u, s, 0, a, !1 !== c && ("px" === v || "zIndex" === a), 0, h, p)).xs0 = v)
                }
                r && s && !s.plugin && (s.plugin = r)
            }
            return s
        }, l.setRatio = function (e) {
            var t, i, n, s = this._firstPT;
            if (1 !== e || this._tween._time !== this._tween._duration && 0 !== this._tween._time) if (e || this._tween._time !== this._tween._duration && 0 !== this._tween._time || -1e-6 === this._tween._rawPrevTime) for (; s;) {
                if (t = s.c * e + s.s, s.r ? t = s.r(t) : t < 1e-6 && t > -1e-6 && (t = 0), s.type) if (1 === s.type) if (2 === (n = s.l)) s.t[s.p] = s.xs0 + t + s.xs1 + s.xn1 + s.xs2; else if (3 === n) s.t[s.p] = s.xs0 + t + s.xs1 + s.xn1 + s.xs2 + s.xn2 + s.xs3; else if (4 === n) s.t[s.p] = s.xs0 + t + s.xs1 + s.xn1 + s.xs2 + s.xn2 + s.xs3 + s.xn3 + s.xs4; else if (5 === n) s.t[s.p] = s.xs0 + t + s.xs1 + s.xn1 + s.xs2 + s.xn2 + s.xs3 + s.xn3 + s.xs4 + s.xn4 + s.xs5; else {
                    for (i = s.xs0 + t + s.xs1, n = 1; n < s.l; n++) i += s["xn" + n] + s["xs" + (n + 1)];
                    s.t[s.p] = i
                } else -1 === s.type ? s.t[s.p] = s.xs0 : s.setRatio && s.setRatio(e); else s.t[s.p] = t + s.xs0;
                s = s._next
            } else for (; s;) 2 !== s.type ? s.t[s.p] = s.b : s.setRatio(e), s = s._next; else for (; s;) {
                if (2 !== s.type) if (s.r && -1 !== s.type) if (t = s.r(s.s + s.c), s.type) {
                    if (1 === s.type) {
                        for (n = s.l, i = s.xs0 + t + s.xs1, n = 1; n < s.l; n++) i += s["xn" + n] + s["xs" + (n + 1)];
                        s.t[s.p] = i
                    }
                } else s.t[s.p] = t + s.xs0; else s.t[s.p] = s.e; else s.setRatio(e);
                s = s._next
            }
        }, l._enableTransforms = function (e) {
            this._transform = this._transform || Ge(this._target, i, !0), this._transformType = this._transform.svg && Pe || !e && 3 !== this._transformType ? 2 : 3
        };
        var et = function (e) {
            this.t[this.p] = this.e, this.data._linkCSSP(this, this._next, null, !0)
        };
        l._addLazySet = function (e, t, i) {
            var n = this._firstPT = new be(e, t, 0, 0, this._firstPT, 2);
            n.e = i, n.setRatio = et, n.data = this
        }, l._linkCSSP = function (e, t, i, n) {
            return e && (t && (t._prev = e), e._next && (e._next._prev = e._prev), e._prev ? e._prev._next = e._next : this._firstPT === e && (this._firstPT = e._next, n = !0), i ? i._next = e : n || null !== this._firstPT || (this._firstPT = e), e._next = t, e._prev = i), e
        }, l._mod = function (e) {
            for (var t = this._firstPT; t;) "function" == typeof e[t.p] && (t.r = e[t.p]), t = t._next
        }, l._kill = function (e) {
            var t, i, n, s = e;
            if (e.autoAlpha || e.alpha) {
                for (i in s = {}, e) s[i] = e[i];
                s.opacity = 1, s.autoAlpha && (s.visibility = 1)
            }
            for (e.className && (t = this._classNamePT) && ((n = t.xfirst) && n._prev ? this._linkCSSP(n._prev, t._next, n._prev._prev) : n === this._firstPT && (this._firstPT = t._next), t._next && this._linkCSSP(t._next, t._next._next, n._prev), this._classNamePT = null), t = this._firstPT; t;) t.plugin && t.plugin !== i && t.plugin._kill && (t.plugin._kill(e), i = t.plugin), t = t._next;
            return r.e.prototype._kill.call(this, s)
        };
        var tt = function (e, t, i) {
            var n, s, r, a;
            if (e.slice) for (s = e.length; --s > -1;) tt(e[s], t, i); else for (s = (n = e.childNodes).length; --s > -1;) a = (r = n[s]).type, r.style && (t.push(ne(r)), i && i.push(r)), 1 !== a && 9 !== a && 11 !== a || !r.childNodes.length || tt(r, t, i)
        };
        return s.cascadeTo = function (e, t, i) {
            var n, s, a, o, l = r.g.to(e, t, i), c = [l], u = [], d = [], h = [], p = r.g._internals.reservedProps;
            for (e = l._targets || l.target, tt(e, u, h), l.render(t, !0, !0), tt(e, d), l.render(0, !0, !0), l._enabled(!0), n = h.length; --n > -1;) if ((s = se(h[n], u[n], d[n])).firstMPT) {
                for (a in s = s.difs, i) p[a] && (s[a] = i[a]);
                for (a in o = {}, s) o[a] = u[n][a];
                c.push(r.g.fromTo(h[n], t, o, s))
            }
            return c
        }, r.e.activate([s]), s
    }, !0);
    var o = r.h.CSSPlugin, l = r.f._gsDefine.plugin({
        propName: "attr", API: 2, version: "0.6.1", init: function (e, t, i, n) {
            var s, r;
            if ("function" != typeof e.setAttribute) return !1;
            for (s in t) "function" == typeof (r = t[s]) && (r = r(n, e)), this._addTween(e, "setAttribute", e.getAttribute(s) + "", r + "", s, !1, s), this._overwriteProps.push(s);
            return !0
        }
    }), c = r.f._gsDefine.plugin({
        propName: "roundProps",
        version: "1.7.0",
        priority: -1,
        API: 2,
        init: function (e, t, i) {
            return this._tween = i, !0
        }
    }), u = function (e) {
        var t = e < 1 ? Math.pow(10, (e + "").length - 2) : 1;
        return function (i) {
            return (Math.round(i / e) * e * t | 0) / t
        }
    }, d = function (e, t) {
        for (; e;) e.f || e.blob || (e.m = t || Math.round), e = e._next
    }, h = c.prototype;
    /*!
     * VERSION: 0.6.1
     * DATE: 2018-08-27
     * UPDATES AND DOCS AT: http://greensock.com
     *
     * @license Copyright (c) 2008-2019, GreenSock. All rights reserved.
     * This work is subject to the terms at http://greensock.com/standard-license or for
     * Club GreenSock members, the software agreement that was issued with your membership.
     *
     * @author: Jack Doyle, jack@greensock.com
     */
    h._onInitAllProps = function () {
        var e, t, i, n, s = this._tween, r = s.vars.roundProps, a = {}, o = s._propLookup.roundProps;
        if ("object" != typeof r || r.push) for ("string" == typeof r && (r = r.split(",")), i = r.length; --i > -1;) a[r[i]] = Math.round; else for (n in r) a[n] = u(r[n]);
        for (n in a) for (e = s._firstPT; e;) t = e._next, e.pg ? e.t._mod(a) : e.n === n && (2 === e.f && e.t ? d(e.t._firstPT, a[n]) : (this._add(e.t, n, e.s, e.c, a[n]), t && (t._prev = e._prev), e._prev ? e._prev._next = t : s._firstPT === e && (s._firstPT = t), e._next = e._prev = null, s._propLookup[n] = o)), e = t;
        return !1
    }, h._add = function (e, t, i, n, s) {
        this._addTween(e, t, i, i + n, t, s || Math.round), this._overwriteProps.push(t)
    };
    /*!
     * VERSION: 0.3.1
     * DATE: 2018-08-27
     * UPDATES AND DOCS AT: http://greensock.com
     *
     * @license Copyright (c) 2008-2019, GreenSock. All rights reserved.
     * This work is subject to the terms at http://greensock.com/standard-license or for
     * Club GreenSock members, the software agreement that was issued with your membership.
     *
     * @author: Jack Doyle, jack@greensock.com
     **/
    var p = r.f._gsDefine.plugin({
        propName: "directionalRotation",
        version: "0.3.1",
        API: 2,
        init: function (e, t, i, n) {
            "object" != typeof t && (t = {rotation: t}), this.finals = {};
            var s, r, a, o, l, c, u = !0 === t.useRadians ? 2 * Math.PI : 360;
            for (s in t) "useRadians" !== s && ("function" == typeof (o = t[s]) && (o = o(n, e)), r = (c = (o + "").split("_"))[0], a = parseFloat("function" != typeof e[s] ? e[s] : e[s.indexOf("set") || "function" != typeof e["get" + s.substr(3)] ? s : "get" + s.substr(3)]()), l = (o = this.finals[s] = "string" == typeof r && "=" === r.charAt(1) ? a + parseInt(r.charAt(0) + "1", 10) * Number(r.substr(2)) : Number(r) || 0) - a, c.length && (-1 !== (r = c.join("_")).indexOf("short") && (l %= u) !== l % (u / 2) && (l = l < 0 ? l + u : l - u), -1 !== r.indexOf("_cw") && l < 0 ? l = (l + 9999999999 * u) % u - (l / u | 0) * u : -1 !== r.indexOf("ccw") && l > 0 && (l = (l - 9999999999 * u) % u - (l / u | 0) * u)), (l > 1e-6 || l < -1e-6) && (this._addTween(e, s, a, a + l, s), this._overwriteProps.push(s)));
            return !0
        },
        set: function (e) {
            var t;
            if (1 !== e) this._super.setRatio.call(this, e); else for (t = this._firstPT; t;) t.f ? t.t[t.p](this.finals[t.p]) : t.t[t.p] = this.finals[t.p], t = t._next
        }
    });
    p._autoCSS = !0,
        /*!
         * VERSION: 2.1.3
         * DATE: 2019-05-17
         * UPDATES AND DOCS AT: http://greensock.com
         *
         * @license Copyright (c) 2008-2019, GreenSock. All rights reserved.
         * This work is subject to the terms at http://greensock.com/standard-license or for
         * Club GreenSock members, the software agreement that was issued with your membership.
         *
         * @author: Jack Doyle, jack@greensock.com
         */
        r.f._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function () {
            var e = function (e) {
                    r.d.call(this, e);
                    var t, i, n = this.vars;
                    for (i in this._labels = {}, this.autoRemoveChildren = !!n.autoRemoveChildren, this.smoothChildTiming = !!n.smoothChildTiming, this._sortChildren = !0, this._onUpdate = n.onUpdate, n) t = n[i], s(t) && -1 !== t.join("").indexOf("{self}") && (n[i] = this._swapSelfInParams(t));
                    s(n.tweens) && this.add(n.tweens, 0, n.align, n.stagger)
                }, t = r.g._internals, i = e._internals = {}, n = t.isSelector, s = t.isArray, a = t.lazyTweens,
                o = t.lazyRender, l = r.f._gsDefine.globals, c = function (e) {
                    var t, i = {};
                    for (t in e) i[t] = e[t];
                    return i
                }, u = function (e, t, i) {
                    var n, s, r = e.cycle;
                    for (n in r) s = r[n], e[n] = "function" == typeof s ? s(i, t[i], t) : s[i % s.length];
                    delete e.cycle
                }, d = i.pauseCallback = function () {
                }, h = function (e, t, i, n) {
                    var s = "immediateRender";
                    return s in t || (t[s] = !(i && !1 === i[s] || n)), t
                }, p = function (e) {
                    if ("function" == typeof e) return e;
                    var t = "object" == typeof e ? e : {each: e}, i = t.ease, n = t.from || 0, s = t.base || 0, r = {},
                        a = isNaN(n), o = t.axis, l = {center: .5, end: 1}[n] || 0;
                    return function (e, c, u) {
                        var d, h, p, f, m, g, v, y, _, b = (u || t).length, x = r[b];
                        if (!x) {
                            if (!(_ = "auto" === t.grid ? 0 : (t.grid || [1 / 0])[0])) {
                                for (v = -1 / 0; v < (v = u[_++].getBoundingClientRect().left) && _ < b;) ;
                                _--
                            }
                            for (x = r[b] = [], d = a ? Math.min(_, b) * l - .5 : n % _, h = a ? b * l / _ - .5 : n / _ | 0, v = 0, y = 1 / 0, g = 0; g < b; g++) p = g % _ - d, f = h - (g / _ | 0), x[g] = m = o ? Math.abs("y" === o ? f : p) : Math.sqrt(p * p + f * f), m > v && (v = m), m < y && (y = m);
                            x.max = v - y, x.min = y, x.v = b = t.amount || t.each * (_ > b ? b - 1 : o ? "y" === o ? b / _ : _ : Math.max(_, b / _)) || 0, x.b = b < 0 ? s - b : s
                        }
                        return b = (x[e] - x.min) / x.max, x.b + (i ? i.getRatio(b) : b) * x.v
                    }
                }, f = e.prototype = new r.d;
            return e.version = "2.1.3", e.distribute = p, f.constructor = e, f.kill()._gc = f._forcingPlayhead = f._hasPause = !1, f.to = function (e, t, i, n) {
                var s = i.repeat && l.TweenMax || r.g;
                return t ? this.add(new s(e, t, i), n) : this.set(e, i, n)
            }, f.from = function (e, t, i, n) {
                return this.add((i.repeat && l.TweenMax || r.g).from(e, t, h(0, i)), n)
            }, f.fromTo = function (e, t, i, n, s) {
                var a = n.repeat && l.TweenMax || r.g;
                return n = h(0, n, i), t ? this.add(a.fromTo(e, t, i, n), s) : this.set(e, n, s)
            }, f.staggerTo = function (t, i, s, a, o, l, d, h) {
                var f, m, g = new e({
                    onComplete: l,
                    onCompleteParams: d,
                    callbackScope: h,
                    smoothChildTiming: this.smoothChildTiming
                }), v = p(s.stagger || a), y = s.startAt, _ = s.cycle;
                for ("string" == typeof t && (t = r.g.selector(t) || t), n(t = t || []) && (t = function (e) {
                    var t, i = [], n = e.length;
                    for (t = 0; t !== n; i.push(e[t++])) ;
                    return i
                }(t)), m = 0; m < t.length; m++) f = c(s), y && (f.startAt = c(y), y.cycle && u(f.startAt, t, m)), _ && (u(f, t, m), null != f.duration && (i = f.duration, delete f.duration)), g.to(t[m], i, f, v(m, t[m], t));
                return this.add(g, o)
            }, f.staggerFrom = function (e, t, i, n, s, r, a, o) {
                return i.runBackwards = !0, this.staggerTo(e, t, h(0, i), n, s, r, a, o)
            }, f.staggerFromTo = function (e, t, i, n, s, r, a, o, l) {
                return n.startAt = i, this.staggerTo(e, t, h(0, n, i), s, r, a, o, l)
            }, f.call = function (e, t, i, n) {
                return this.add(r.g.delayedCall(0, e, t, i), n)
            }, f.set = function (e, t, i) {
                return this.add(new r.g(e, 0, h(0, t, null, !0)), i)
            }, e.exportRoot = function (t, i) {
                null == (t = t || {}).smoothChildTiming && (t.smoothChildTiming = !0);
                var n, s, a, o, l = new e(t), c = l._timeline;
                for (null == i && (i = !0), c._remove(l, !0), l._startTime = 0, l._rawPrevTime = l._time = l._totalTime = c._time, a = c._first; a;) o = a._next, i && a instanceof r.g && a.target === a.vars.onComplete || ((s = a._startTime - a._delay) < 0 && (n = 1), l.add(a, s)), a = o;
                return c.add(l, 0), n && l.totalDuration(), l
            }, f.add = function (t, i, n, a) {
                var o, l, c, u, d, h;
                if ("number" != typeof i && (i = this._parseTimeOrLabel(i, 0, !0, t)), !(t instanceof r.a)) {
                    if (t instanceof Array || t && t.push && s(t)) {
                        for (n = n || "normal", a = a || 0, o = i, l = t.length, c = 0; c < l; c++) s(u = t[c]) && (u = new e({tweens: u})), this.add(u, o), "string" != typeof u && "function" != typeof u && ("sequence" === n ? o = u._startTime + u.totalDuration() / u._timeScale : "start" === n && (u._startTime -= u.delay())), o += a;
                        return this._uncache(!0)
                    }
                    if ("string" == typeof t) return this.addLabel(t, i);
                    if ("function" != typeof t) throw"Cannot add " + t + " into the timeline; it is not a tween, timeline, function, or string.";
                    t = r.g.delayedCall(0, t)
                }
                if (r.d.prototype.add.call(this, t, i), (t._time || !t._duration && t._initted) && (o = (this.rawTime() - t._startTime) * t._timeScale, (!t._duration || Math.abs(Math.max(0, Math.min(t.totalDuration(), o))) - t._totalTime > 1e-5) && t.render(o, !1, !1)), (this._gc || this._time === this._duration) && !this._paused && this._duration < this.duration()) for (h = (d = this).rawTime() > t._startTime; d._timeline;) h && d._timeline.smoothChildTiming ? d.totalTime(d._totalTime, !0) : d._gc && d._enabled(!0, !1), d = d._timeline;
                return this
            }, f.remove = function (e) {
                if (e instanceof r.a) {
                    this._remove(e, !1);
                    var t = e._timeline = e.vars.useFrames ? r.a._rootFramesTimeline : r.a._rootTimeline;
                    return e._startTime = (e._paused ? e._pauseTime : t._time) - (e._reversed ? e.totalDuration() - e._totalTime : e._totalTime) / e._timeScale, this
                }
                if (e instanceof Array || e && e.push && s(e)) {
                    for (var i = e.length; --i > -1;) this.remove(e[i]);
                    return this
                }
                return "string" == typeof e ? this.removeLabel(e) : this.kill(null, e)
            }, f._remove = function (e, t) {
                return r.d.prototype._remove.call(this, e, t), this._last ? this._time > this.duration() && (this._time = this._duration, this._totalTime = this._totalDuration) : this._time = this._totalTime = this._duration = this._totalDuration = 0, this
            }, f.append = function (e, t) {
                return this.add(e, this._parseTimeOrLabel(null, t, !0, e))
            }, f.insert = f.insertMultiple = function (e, t, i, n) {
                return this.add(e, t || 0, i, n)
            }, f.appendMultiple = function (e, t, i, n) {
                return this.add(e, this._parseTimeOrLabel(null, t, !0, e), i, n)
            }, f.addLabel = function (e, t) {
                return this._labels[e] = this._parseTimeOrLabel(t), this
            }, f.addPause = function (e, t, i, n) {
                var s = r.g.delayedCall(0, d, i, n || this);
                return s.vars.onComplete = s.vars.onReverseComplete = t, s.data = "isPause", this._hasPause = !0, this.add(s, e)
            }, f.removeLabel = function (e) {
                return delete this._labels[e], this
            }, f.getLabelTime = function (e) {
                return null != this._labels[e] ? this._labels[e] : -1
            }, f._parseTimeOrLabel = function (e, t, i, n) {
                var a, o;
                if (n instanceof r.a && n.timeline === this) this.remove(n); else if (n && (n instanceof Array || n.push && s(n))) for (o = n.length; --o > -1;) n[o] instanceof r.a && n[o].timeline === this && this.remove(n[o]);
                if (a = "number" != typeof e || t ? this.duration() > 99999999999 ? this.recent().endTime(!1) : this._duration : 0, "string" == typeof t) return this._parseTimeOrLabel(t, i && "number" == typeof e && null == this._labels[t] ? e - a : 0, i);
                if (t = t || 0, "string" != typeof e || !isNaN(e) && null == this._labels[e]) null == e && (e = a); else {
                    if (-1 === (o = e.indexOf("="))) return null == this._labels[e] ? i ? this._labels[e] = a + t : t : this._labels[e] + t;
                    t = parseInt(e.charAt(o - 1) + "1", 10) * Number(e.substr(o + 1)), e = o > 1 ? this._parseTimeOrLabel(e.substr(0, o - 1), 0, i) : a
                }
                return Number(e) + t
            }, f.seek = function (e, t) {
                return this.totalTime("number" == typeof e ? e : this._parseTimeOrLabel(e), !1 !== t)
            }, f.stop = function () {
                return this.paused(!0)
            }, f.gotoAndPlay = function (e, t) {
                return this.play(e, t)
            }, f.gotoAndStop = function (e, t) {
                return this.pause(e, t)
            }, f.render = function (e, t, i) {
                this._gc && this._enabled(!0, !1);
                var n, s, r, l, c, u, d, h, p = this._time,
                    f = this._dirty ? this.totalDuration() : this._totalDuration, m = this._startTime,
                    g = this._timeScale, v = this._paused;
                if (p !== this._time && (e += this._time - p), this._hasPause && !this._forcingPlayhead && !t) {
                    if (e > p) for (n = this._first; n && n._startTime <= e && !u;) n._duration || "isPause" !== n.data || n.ratio || 0 === n._startTime && 0 === this._rawPrevTime || (u = n), n = n._next; else for (n = this._last; n && n._startTime >= e && !u;) n._duration || "isPause" === n.data && n._rawPrevTime > 0 && (u = n), n = n._prev;
                    u && (this._time = this._totalTime = e = u._startTime, h = this._startTime + (this._reversed ? this._duration - e : e) / this._timeScale)
                }
                if (e >= f - 1e-8 && e >= 0) this._totalTime = this._time = f, this._reversed || this._hasPausedChild() || (s = !0, l = "onComplete", c = !!this._timeline.autoRemoveChildren, 0 === this._duration && (e <= 0 && e >= -1e-8 || this._rawPrevTime < 0 || 1e-8 === this._rawPrevTime) && this._rawPrevTime !== e && this._first && (c = !0, this._rawPrevTime > 1e-8 && (l = "onReverseComplete"))), this._rawPrevTime = this._duration || !t || e || this._rawPrevTime === e ? e : 1e-8, e = f + 1e-4; else if (e < 1e-8) if (this._totalTime = this._time = 0, e > -1e-8 && (e = 0), (0 !== p || 0 === this._duration && 1e-8 !== this._rawPrevTime && (this._rawPrevTime > 0 || e < 0 && this._rawPrevTime >= 0)) && (l = "onReverseComplete", s = this._reversed), e < 0) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (c = s = !0, l = "onReverseComplete") : this._rawPrevTime >= 0 && this._first && (c = !0), this._rawPrevTime = e; else {
                    if (this._rawPrevTime = this._duration || !t || e || this._rawPrevTime === e ? e : 1e-8, 0 === e && s) for (n = this._first; n && 0 === n._startTime;) n._duration || (s = !1), n = n._next;
                    e = 0, this._initted || (c = !0)
                } else this._totalTime = this._time = this._rawPrevTime = e;
                if (this._time !== p && this._first || i || c || u) {
                    if (this._initted || (this._initted = !0), this._active || !this._paused && this._time !== p && e > 0 && (this._active = !0), 0 === p && this.vars.onStart && (0 === this._time && this._duration || t || this._callback("onStart")), (d = this._time) >= p) for (n = this._first; n && (r = n._next, d === this._time && (!this._paused || v));) (n._active || n._startTime <= d && !n._paused && !n._gc) && (u === n && (this.pause(), this._pauseTime = h), n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (e - n._startTime) * n._timeScale, t, i) : n.render((e - n._startTime) * n._timeScale, t, i)), n = r; else for (n = this._last; n && (r = n._prev, d === this._time && (!this._paused || v));) {
                        if (n._active || n._startTime <= p && !n._paused && !n._gc) {
                            if (u === n) {
                                for (u = n._prev; u && u.endTime() > this._time;) u.render(u._reversed ? u.totalDuration() - (e - u._startTime) * u._timeScale : (e - u._startTime) * u._timeScale, t, i), u = u._prev;
                                u = null, this.pause(), this._pauseTime = h
                            }
                            n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (e - n._startTime) * n._timeScale, t, i) : n.render((e - n._startTime) * n._timeScale, t, i)
                        }
                        n = r
                    }
                    this._onUpdate && (t || (a.length && o(), this._callback("onUpdate"))), l && (this._gc || m !== this._startTime && g === this._timeScale || (0 === this._time || f >= this.totalDuration()) && (s && (a.length && o(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !t && this.vars[l] && this._callback(l)))
                }
            }, f._hasPausedChild = function () {
                for (var t = this._first; t;) {
                    if (t._paused || t instanceof e && t._hasPausedChild()) return !0;
                    t = t._next
                }
                return !1
            }, f.getChildren = function (e, t, i, n) {
                n = n || -9999999999;
                for (var s = [], a = this._first, o = 0; a;) a._startTime < n || (a instanceof r.g ? !1 !== t && (s[o++] = a) : (!1 !== i && (s[o++] = a), !1 !== e && (o = (s = s.concat(a.getChildren(!0, t, i))).length))), a = a._next;
                return s
            }, f.getTweensOf = function (e, t) {
                var i, n, s = this._gc, a = [], o = 0;
                for (s && this._enabled(!0, !0), n = (i = r.g.getTweensOf(e)).length; --n > -1;) (i[n].timeline === this || t && this._contains(i[n])) && (a[o++] = i[n]);
                return s && this._enabled(!1, !0), a
            }, f.recent = function () {
                return this._recent
            }, f._contains = function (e) {
                for (var t = e.timeline; t;) {
                    if (t === this) return !0;
                    t = t.timeline
                }
                return !1
            }, f.shiftChildren = function (e, t, i) {
                i = i || 0;
                for (var n, s = this._first, r = this._labels; s;) s._startTime >= i && (s._startTime += e), s = s._next;
                if (t) for (n in r) r[n] >= i && (r[n] += e);
                return this._uncache(!0)
            }, f._kill = function (e, t) {
                if (!e && !t) return this._enabled(!1, !1);
                for (var i = t ? this.getTweensOf(t) : this.getChildren(!0, !0, !1), n = i.length, s = !1; --n > -1;) i[n]._kill(e, t) && (s = !0);
                return s
            }, f.clear = function (e) {
                var t = this.getChildren(!1, !0, !0), i = t.length;
                for (this._time = this._totalTime = 0; --i > -1;) t[i]._enabled(!1, !1);
                return !1 !== e && (this._labels = {}), this._uncache(!0)
            }, f.invalidate = function () {
                for (var e = this._first; e;) e.invalidate(), e = e._next;
                return r.a.prototype.invalidate.call(this)
            }, f._enabled = function (e, t) {
                if (e === this._gc) for (var i = this._first; i;) i._enabled(e, !0), i = i._next;
                return r.d.prototype._enabled.call(this, e, t)
            }, f.totalTime = function (e, t, i) {
                this._forcingPlayhead = !0;
                var n = r.a.prototype.totalTime.apply(this, arguments);
                return this._forcingPlayhead = !1, n
            }, f.duration = function (e) {
                return arguments.length ? (0 !== this.duration() && 0 !== e && this.timeScale(this._duration / e), this) : (this._dirty && this.totalDuration(), this._duration)
            }, f.totalDuration = function (e) {
                if (!arguments.length) {
                    if (this._dirty) {
                        for (var t, i, n = 0, s = this, r = s._last, a = 999999999999; r;) t = r._prev, r._dirty && r.totalDuration(), r._startTime > a && s._sortChildren && !r._paused && !s._calculatingDuration ? (s._calculatingDuration = 1, s.add(r, r._startTime - r._delay), s._calculatingDuration = 0) : a = r._startTime, r._startTime < 0 && !r._paused && (n -= r._startTime, s._timeline.smoothChildTiming && (s._startTime += r._startTime / s._timeScale, s._time -= r._startTime, s._totalTime -= r._startTime, s._rawPrevTime -= r._startTime), s.shiftChildren(-r._startTime, !1, -9999999999), a = 0), (i = r._startTime + r._totalDuration / r._timeScale) > n && (n = i), r = t;
                        s._duration = s._totalDuration = n, s._dirty = !1
                    }
                    return this._totalDuration
                }
                return e && this.totalDuration() ? this.timeScale(this._totalDuration / e) : this
            }, f.paused = function (e) {
                if (!1 === e && this._paused) for (var t = this._first; t;) t._startTime === this._time && "isPause" === t.data && (t._rawPrevTime = 0), t = t._next;
                return r.a.prototype.paused.apply(this, arguments)
            }, f.usesFrames = function () {
                for (var e = this._timeline; e._timeline;) e = e._timeline;
                return e === r.a._rootFramesTimeline
            }, f.rawTime = function (e) {
                return e && (this._paused || this._repeat && this.time() > 0 && this.totalProgress() < 1) ? this._totalTime % (this._duration + this._repeatDelay) : this._paused ? this._totalTime : (this._timeline.rawTime(e) - this._startTime) * this._timeScale
            }, e
        }, !0);
    var f = r.h.TimelineLite;
    /*!
     * VERSION: 2.1.3
     * DATE: 2019-05-17
     * UPDATES AND DOCS AT: http://greensock.com
     *
     * @license Copyright (c) 2008-2019, GreenSock. All rights reserved.
     * This work is subject to the terms at http://greensock.com/standard-license or for
     * Club GreenSock members, the software agreement that was issued with your membership.
     *
     * @author: Jack Doyle, jack@greensock.com
     */
    r.f._gsDefine("TimelineMax", ["TimelineLite", "TweenLite", "easing.Ease"], function () {
        var e = function (e) {
                f.call(this, e), this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._cycle = 0, this._yoyo = !!this.vars.yoyo, this._dirty = !0
            }, t = r.g._internals, i = t.lazyTweens, n = t.lazyRender, s = r.f._gsDefine.globals,
            a = new r.b(null, null, 1, 0), o = e.prototype = new f;
        return o.constructor = e, o.kill()._gc = !1, e.version = "2.1.3", o.invalidate = function () {
            return this._yoyo = !!this.vars.yoyo, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), f.prototype.invalidate.call(this)
        }, o.addCallback = function (e, t, i, n) {
            return this.add(r.g.delayedCall(0, e, i, n), t)
        }, o.removeCallback = function (e, t) {
            if (e) if (null == t) this._kill(null, e); else for (var i = this.getTweensOf(e, !1), n = i.length, s = this._parseTimeOrLabel(t); --n > -1;) i[n]._startTime === s && i[n]._enabled(!1, !1);
            return this
        }, o.removePause = function (e) {
            return this.removeCallback(f._internals.pauseCallback, e)
        }, o.tweenTo = function (e, t) {
            t = t || {};
            var i, n, o, l = {ease: a, useFrames: this.usesFrames(), immediateRender: !1, lazy: !1},
                c = t.repeat && s.TweenMax || r.g;
            for (n in t) l[n] = t[n];
            return l.time = this._parseTimeOrLabel(e), i = Math.abs(Number(l.time) - this._time) / this._timeScale || .001, o = new c(this, i, l), l.onStart = function () {
                o.target.paused(!0), o.vars.time === o.target.time() || i !== o.duration() || o.isFromTo || o.duration(Math.abs(o.vars.time - o.target.time()) / o.target._timeScale).render(o.time(), !0, !0), t.onStart && t.onStart.apply(t.onStartScope || t.callbackScope || o, t.onStartParams || [])
            }, o
        }, o.tweenFromTo = function (e, t, i) {
            i = i || {}, e = this._parseTimeOrLabel(e), i.startAt = {
                onComplete: this.seek,
                onCompleteParams: [e],
                callbackScope: this
            }, i.immediateRender = !1 !== i.immediateRender;
            var n = this.tweenTo(t, i);
            return n.isFromTo = 1, n.duration(Math.abs(n.vars.time - e) / this._timeScale || .001)
        }, o.render = function (e, t, s) {
            this._gc && this._enabled(!0, !1);
            var r, a, o, l, c, u, d, h, p, f = this._time, m = this._dirty ? this.totalDuration() : this._totalDuration,
                g = this._duration, v = this._totalTime, y = this._startTime, _ = this._timeScale,
                b = this._rawPrevTime, x = this._paused, w = this._cycle;
            if (f !== this._time && (e += this._time - f), e >= m - 1e-8 && e >= 0) this._locked || (this._totalTime = m, this._cycle = this._repeat), this._reversed || this._hasPausedChild() || (a = !0, l = "onComplete", c = !!this._timeline.autoRemoveChildren, 0 === this._duration && (e <= 0 && e >= -1e-8 || b < 0 || 1e-8 === b) && b !== e && this._first && (c = !0, b > 1e-8 && (l = "onReverseComplete"))), this._rawPrevTime = this._duration || !t || e || this._rawPrevTime === e ? e : 1e-8, this._yoyo && 1 & this._cycle ? this._time = e = 0 : (this._time = g, e = g + 1e-4); else if (e < 1e-8) if (this._locked || (this._totalTime = this._cycle = 0), this._time = 0, e > -1e-8 && (e = 0), (0 !== f || 0 === g && 1e-8 !== b && (b > 0 || e < 0 && b >= 0) && !this._locked) && (l = "onReverseComplete", a = this._reversed), e < 0) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (c = a = !0, l = "onReverseComplete") : b >= 0 && this._first && (c = !0), this._rawPrevTime = e; else {
                if (this._rawPrevTime = g || !t || e || this._rawPrevTime === e ? e : 1e-8, 0 === e && a) for (r = this._first; r && 0 === r._startTime;) r._duration || (a = !1), r = r._next;
                e = 0, this._initted || (c = !0)
            } else 0 === g && b < 0 && (c = !0), this._time = this._rawPrevTime = e, this._locked || (this._totalTime = e, 0 !== this._repeat && (u = g + this._repeatDelay, this._cycle = this._totalTime / u >> 0, this._cycle && this._cycle === this._totalTime / u && v <= e && this._cycle--, this._time = this._totalTime - this._cycle * u, this._yoyo && 1 & this._cycle && (this._time = g - this._time), this._time > g ? (this._time = g, e = g + 1e-4) : this._time < 0 ? this._time = e = 0 : e = this._time));
            if (this._hasPause && !this._forcingPlayhead && !t) {
                if ((e = this._time) > f || this._repeat && w !== this._cycle) for (r = this._first; r && r._startTime <= e && !d;) r._duration || "isPause" !== r.data || r.ratio || 0 === r._startTime && 0 === this._rawPrevTime || (d = r), r = r._next; else for (r = this._last; r && r._startTime >= e && !d;) r._duration || "isPause" === r.data && r._rawPrevTime > 0 && (d = r), r = r._prev;
                d && (p = this._startTime + (this._reversed ? this._duration - d._startTime : d._startTime) / this._timeScale, d._startTime < g && (this._time = this._rawPrevTime = e = d._startTime, this._totalTime = e + this._cycle * (this._totalDuration + this._repeatDelay)))
            }
            if (this._cycle !== w && !this._locked) {
                var T = this._yoyo && 0 != (1 & w), C = T === (this._yoyo && 0 != (1 & this._cycle)),
                    S = this._totalTime, E = this._cycle, P = this._rawPrevTime, k = this._time;
                if (this._totalTime = w * g, this._cycle < w ? T = !T : this._totalTime += g, this._time = f, this._rawPrevTime = 0 === g ? b - 1e-4 : b, this._cycle = w, this._locked = !0, f = T ? 0 : g, this.render(f, t, 0 === g), t || this._gc || this.vars.onRepeat && (this._cycle = E, this._locked = !1, this._callback("onRepeat")), f !== this._time) return;
                if (C && (this._cycle = w, this._locked = !0, f = T ? g + 1e-4 : -1e-4, this.render(f, !0, !1)), this._locked = !1, this._paused && !x) return;
                this._time = k, this._totalTime = S, this._cycle = E, this._rawPrevTime = P
            }
            if (this._time !== f && this._first || s || c || d) {
                if (this._initted || (this._initted = !0), this._active || !this._paused && this._totalTime !== v && e > 0 && (this._active = !0), 0 === v && this.vars.onStart && (0 === this._totalTime && this._totalDuration || t || this._callback("onStart")), (h = this._time) >= f) for (r = this._first; r && (o = r._next, h === this._time && (!this._paused || x));) (r._active || r._startTime <= this._time && !r._paused && !r._gc) && (d === r && (this.pause(), this._pauseTime = p), r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (e - r._startTime) * r._timeScale, t, s) : r.render((e - r._startTime) * r._timeScale, t, s)), r = o; else for (r = this._last; r && (o = r._prev, h === this._time && (!this._paused || x));) {
                    if (r._active || r._startTime <= f && !r._paused && !r._gc) {
                        if (d === r) {
                            for (d = r._prev; d && d.endTime() > this._time;) d.render(d._reversed ? d.totalDuration() - (e - d._startTime) * d._timeScale : (e - d._startTime) * d._timeScale, t, s), d = d._prev;
                            d = null, this.pause(), this._pauseTime = p
                        }
                        r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (e - r._startTime) * r._timeScale, t, s) : r.render((e - r._startTime) * r._timeScale, t, s)
                    }
                    r = o
                }
                this._onUpdate && (t || (i.length && n(), this._callback("onUpdate"))), l && (this._locked || this._gc || y !== this._startTime && _ === this._timeScale || (0 === this._time || m >= this.totalDuration()) && (a && (i.length && n(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !t && this.vars[l] && this._callback(l)))
            } else v !== this._totalTime && this._onUpdate && (t || this._callback("onUpdate"))
        }, o.getActive = function (e, t, i) {
            var n, s, r = [], a = this.getChildren(e || null == e, t || null == e, !!i), o = 0, l = a.length;
            for (n = 0; n < l; n++) (s = a[n]).isActive() && (r[o++] = s);
            return r
        }, o.getLabelAfter = function (e) {
            e || 0 !== e && (e = this._time);
            var t, i = this.getLabelsArray(), n = i.length;
            for (t = 0; t < n; t++) if (i[t].time > e) return i[t].name;
            return null
        }, o.getLabelBefore = function (e) {
            null == e && (e = this._time);
            for (var t = this.getLabelsArray(), i = t.length; --i > -1;) if (t[i].time < e) return t[i].name;
            return null
        }, o.getLabelsArray = function () {
            var e, t = [], i = 0;
            for (e in this._labels) t[i++] = {time: this._labels[e], name: e};
            return t.sort(function (e, t) {
                return e.time - t.time
            }), t
        }, o.invalidate = function () {
            return this._locked = !1, f.prototype.invalidate.call(this)
        }, o.progress = function (e, t) {
            return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 != (1 & this._cycle) ? 1 - e : e) + this._cycle * (this._duration + this._repeatDelay), t) : this._time / this.duration() || 0
        }, o.totalProgress = function (e, t) {
            return arguments.length ? this.totalTime(this.totalDuration() * e, t) : this._totalTime / this.totalDuration() || 0
        }, o.totalDuration = function (e) {
            return arguments.length ? -1 !== this._repeat && e ? this.timeScale(this.totalDuration() / e) : this : (this._dirty && (f.prototype.totalDuration.call(this), this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat), this._totalDuration)
        }, o.time = function (e, t) {
            if (!arguments.length) return this._time;
            this._dirty && this.totalDuration();
            var i = this._duration, n = this._cycle, s = n * (i + this._repeatDelay);
            return e > i && (e = i), this.totalTime(this._yoyo && 1 & n ? i - e + s : this._repeat ? e + s : e, t)
        }, o.repeat = function (e) {
            return arguments.length ? (this._repeat = e, this._uncache(!0)) : this._repeat
        }, o.repeatDelay = function (e) {
            return arguments.length ? (this._repeatDelay = e, this._uncache(!0)) : this._repeatDelay
        }, o.yoyo = function (e) {
            return arguments.length ? (this._yoyo = e, this) : this._yoyo
        }, o.currentLabel = function (e) {
            return arguments.length ? this.seek(e, !0) : this.getLabelBefore(this._time + 1e-8)
        }, e
    }, !0);
    var m = r.h.TimelineMax, g = 180 / Math.PI, v = [], y = [], _ = [], b = {}, x = r.f._gsDefine.globals,
        w = function (e, t, i, n) {
            i === n && (i = n - (n - t) / 1e6), e === t && (t = e + (i - e) / 1e6), this.a = e, this.b = t, this.c = i, this.d = n, this.da = n - e, this.ca = i - e, this.ba = t - e
        }, T = function (e, t, i, n) {
            var s = {a: e}, r = {}, a = {}, o = {c: n}, l = (e + t) / 2, c = (t + i) / 2, u = (i + n) / 2, d = (l + c) / 2,
                h = (c + u) / 2, p = (h - d) / 8;
            return s.b = l + (e - l) / 4, r.b = d + p, s.c = r.a = (s.b + r.b) / 2, r.c = a.a = (d + h) / 2, a.b = h - p, o.b = u + (n - u) / 4, a.c = o.a = (a.b + o.b) / 2, [s, r, a, o]
        }, C = function (e, t, i, n, s) {
            var r, a, o, l, c, u, d, h, p, f, m, g, b, x = e.length - 1, w = 0, C = e[0].a;
            for (r = 0; r < x; r++) a = (c = e[w]).a, o = c.d, l = e[w + 1].d, s ? (m = v[r], b = ((g = y[r]) + m) * t * .25 / (n ? .5 : _[r] || .5), h = o - ((u = o - (o - a) * (n ? .5 * t : 0 !== m ? b / m : 0)) + (((d = o + (l - o) * (n ? .5 * t : 0 !== g ? b / g : 0)) - u) * (3 * m / (m + g) + .5) / 4 || 0))) : h = o - ((u = o - (o - a) * t * .5) + (d = o + (l - o) * t * .5)) / 2, u += h, d += h, c.c = p = u, c.b = 0 !== r ? C : C = c.a + .6 * (c.c - c.a), c.da = o - a, c.ca = p - a, c.ba = C - a, i ? (f = T(a, C, p, o), e.splice(w, 1, f[0], f[1], f[2], f[3]), w += 4) : w++, C = d;
            (c = e[w]).b = C, c.c = C + .4 * (c.d - C), c.da = c.d - c.a, c.ca = c.c - c.a, c.ba = C - c.a, i && (f = T(c.a, C, c.c, c.d), e.splice(w, 1, f[0], f[1], f[2], f[3]))
        }, S = function (e, t, i, n) {
            var s, r, a, o, l, c, u = [];
            if (n) for (r = (e = [n].concat(e)).length; --r > -1;) "string" == typeof (c = e[r][t]) && "=" === c.charAt(1) && (e[r][t] = n[t] + Number(c.charAt(0) + c.substr(2)));
            if ((s = e.length - 2) < 0) return u[0] = new w(e[0][t], 0, 0, e[0][t]), u;
            for (r = 0; r < s; r++) a = e[r][t], o = e[r + 1][t], u[r] = new w(a, 0, 0, o), i && (l = e[r + 2][t], v[r] = (v[r] || 0) + (o - a) * (o - a), y[r] = (y[r] || 0) + (l - o) * (l - o));
            return u[r] = new w(e[r][t], 0, 0, e[r + 1][t]), u
        }, E = function (e, t, i, n, s, r) {
            var a, o, l, c, u, d, h, p, f = {}, m = [], g = r || e[0];
            for (o in s = "string" == typeof s ? "," + s + "," : ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,", null == t && (t = 1), e[0]) m.push(o);
            if (e.length > 1) {
                for (p = e[e.length - 1], h = !0, a = m.length; --a > -1;) if (o = m[a], Math.abs(g[o] - p[o]) > .05) {
                    h = !1;
                    break
                }
                h && (e = e.concat(), r && e.unshift(r), e.push(e[1]), r = e[e.length - 3])
            }
            for (v.length = y.length = _.length = 0, a = m.length; --a > -1;) o = m[a], b[o] = -1 !== s.indexOf("," + o + ","), f[o] = S(e, o, b[o], r);
            for (a = v.length; --a > -1;) v[a] = Math.sqrt(v[a]), y[a] = Math.sqrt(y[a]);
            if (!n) {
                for (a = m.length; --a > -1;) if (b[o]) for (d = (l = f[m[a]]).length - 1, c = 0; c < d; c++) u = l[c + 1].da / y[c] + l[c].da / v[c] || 0, _[c] = (_[c] || 0) + u * u;
                for (a = _.length; --a > -1;) _[a] = Math.sqrt(_[a])
            }
            for (a = m.length, c = i ? 4 : 1; --a > -1;) l = f[o = m[a]], C(l, t, i, n, b[o]), h && (l.splice(0, c), l.splice(l.length - c, c));
            return f
        }, P = function (e, t, i) {
            for (var n, s, r, a, o, l, c, u, d, h, p, f = 1 / i, m = e.length; --m > -1;) for (r = (h = e[m]).a, a = h.d - r, o = h.c - r, l = h.b - r, n = s = 0, u = 1; u <= i; u++) n = s - (s = ((c = f * u) * c * a + 3 * (d = 1 - c) * (c * o + d * l)) * c), t[p = m * i + u - 1] = (t[p] || 0) + n * n
        }, k = r.f._gsDefine.plugin({
            propName: "bezier", priority: -1, version: "1.3.9", API: 2, global: !0, init: function (e, t, i) {
                this._target = e, t instanceof Array && (t = {values: t}), this._func = {}, this._mod = {}, this._props = [], this._timeRes = null == t.timeResolution ? 6 : parseInt(t.timeResolution, 10);
                var n, s, r, a, o, l = t.values || [], c = {}, u = l[0], d = t.autoRotate || i.vars.orientToBezier;
                for (n in this._autoRotate = d ? d instanceof Array ? d : [["x", "y", "rotation", !0 === d ? 0 : Number(d) || 0]] : null, u) this._props.push(n);
                for (r = this._props.length; --r > -1;) n = this._props[r], this._overwriteProps.push(n), s = this._func[n] = "function" == typeof e[n], c[n] = s ? e[n.indexOf("set") || "function" != typeof e["get" + n.substr(3)] ? n : "get" + n.substr(3)]() : parseFloat(e[n]), o || c[n] !== l[0][n] && (o = c);
                if (this._beziers = "cubic" !== t.type && "quadratic" !== t.type && "soft" !== t.type ? E(l, isNaN(t.curviness) ? 1 : t.curviness, !1, "thruBasic" === t.type, t.correlate, o) : function (e, t, i) {
                    var n, s, r, a, o, l, c, u, d, h, p, f = {}, m = "cubic" === (t = t || "soft") ? 3 : 2,
                        g = "soft" === t, v = [];
                    if (g && i && (e = [i].concat(e)), null == e || e.length < m + 1) throw"invalid Bezier data";
                    for (d in e[0]) v.push(d);
                    for (l = v.length; --l > -1;) {
                        for (f[d = v[l]] = o = [], h = 0, u = e.length, c = 0; c < u; c++) n = null == i ? e[c][d] : "string" == typeof (p = e[c][d]) && "=" === p.charAt(1) ? i[d] + Number(p.charAt(0) + p.substr(2)) : Number(p), g && c > 1 && c < u - 1 && (o[h++] = (n + o[h - 2]) / 2), o[h++] = n;
                        for (u = h - m + 1, h = 0, c = 0; c < u; c += m) n = o[c], s = o[c + 1], r = o[c + 2], a = 2 === m ? 0 : o[c + 3], o[h++] = p = 3 === m ? new w(n, s, r, a) : new w(n, (2 * s + n) / 3, (2 * s + r) / 3, r);
                        o.length = h
                    }
                    return f
                }(l, t.type, c), this._segCount = this._beziers[n].length, this._timeRes) {
                    var h = function (e, t) {
                        var i, n, s, r, a = [], o = [], l = 0, c = 0, u = (t = t >> 0 || 6) - 1, d = [], h = [];
                        for (i in e) P(e[i], a, t);
                        for (s = a.length, n = 0; n < s; n++) l += Math.sqrt(a[n]), h[r = n % t] = l, r === u && (c += l, d[r = n / t >> 0] = h, o[r] = c, l = 0, h = []);
                        return {length: c, lengths: o, segments: d}
                    }(this._beziers, this._timeRes);
                    this._length = h.length, this._lengths = h.lengths, this._segments = h.segments, this._l1 = this._li = this._s1 = this._si = 0, this._l2 = this._lengths[0], this._curSeg = this._segments[0], this._s2 = this._curSeg[0], this._prec = 1 / this._curSeg.length
                }
                if (d = this._autoRotate) for (this._initialRotations = [], d[0] instanceof Array || (this._autoRotate = d = [d]), r = d.length; --r > -1;) {
                    for (a = 0; a < 3; a++) n = d[r][a], this._func[n] = "function" == typeof e[n] && e[n.indexOf("set") || "function" != typeof e["get" + n.substr(3)] ? n : "get" + n.substr(3)];
                    n = d[r][2], this._initialRotations[r] = (this._func[n] ? this._func[n].call(this._target) : this._target[n]) || 0, this._overwriteProps.push(n)
                }
                return this._startRatio = i.vars.runBackwards ? 1 : 0, !0
            }, set: function (e) {
                var t, i, n, s, r, a, o, l, c, u, d, h = this._segCount, p = this._func, f = this._target,
                    m = e !== this._startRatio;
                if (this._timeRes) {
                    if (c = this._lengths, u = this._curSeg, d = e * this._length, n = this._li, d > this._l2 && n < h - 1) {
                        for (l = h - 1; n < l && (this._l2 = c[++n]) <= d;) ;
                        this._l1 = c[n - 1], this._li = n, this._curSeg = u = this._segments[n], this._s2 = u[this._s1 = this._si = 0]
                    } else if (d < this._l1 && n > 0) {
                        for (; n > 0 && (this._l1 = c[--n]) >= d;) ;
                        0 === n && d < this._l1 ? this._l1 = 0 : n++, this._l2 = c[n], this._li = n, this._curSeg = u = this._segments[n], this._s1 = u[(this._si = u.length - 1) - 1] || 0, this._s2 = u[this._si]
                    }
                    if (t = n, d -= this._l1, n = this._si, d > this._s2 && n < u.length - 1) {
                        for (l = u.length - 1; n < l && (this._s2 = u[++n]) <= d;) ;
                        this._s1 = u[n - 1], this._si = n
                    } else if (d < this._s1 && n > 0) {
                        for (; n > 0 && (this._s1 = u[--n]) >= d;) ;
                        0 === n && d < this._s1 ? this._s1 = 0 : n++, this._s2 = u[n], this._si = n
                    }
                    a = 1 === e ? 1 : (n + (d - this._s1) / (this._s2 - this._s1)) * this._prec || 0
                } else a = (e - (t = e < 0 ? 0 : e >= 1 ? h - 1 : h * e >> 0) * (1 / h)) * h;
                for (i = 1 - a, n = this._props.length; --n > -1;) s = this._props[n], o = (a * a * (r = this._beziers[s][t]).da + 3 * i * (a * r.ca + i * r.ba)) * a + r.a, this._mod[s] && (o = this._mod[s](o, f)), p[s] ? f[s](o) : f[s] = o;
                if (this._autoRotate) {
                    var v, y, _, b, x, w, T, C = this._autoRotate;
                    for (n = C.length; --n > -1;) s = C[n][2], w = C[n][3] || 0, T = !0 === C[n][4] ? 1 : g, r = this._beziers[C[n][0]], v = this._beziers[C[n][1]], r && v && (r = r[t], v = v[t], y = r.a + (r.b - r.a) * a, y += ((b = r.b + (r.c - r.b) * a) - y) * a, b += (r.c + (r.d - r.c) * a - b) * a, _ = v.a + (v.b - v.a) * a, _ += ((x = v.b + (v.c - v.b) * a) - _) * a, x += (v.c + (v.d - v.c) * a - x) * a, o = m ? Math.atan2(x - _, b - y) * T + w : this._initialRotations[n], this._mod[s] && (o = this._mod[s](o, f)), p[s] ? f[s](o) : f[s] = o)
                }
            }
        }), M = k.prototype;
    /*!
     * VERSION: 1.3.9
     * DATE: 2019-05-17
     * UPDATES AND DOCS AT: http://greensock.com
     *
     * @license Copyright (c) 2008-2019, GreenSock. All rights reserved.
     * This work is subject to the terms at http://greensock.com/standard-license or for
     * Club GreenSock members, the software agreement that was issued with your membership.
     *
     * @author: Jack Doyle, jack@greensock.com
     **/
    k.bezierThrough = E, k.cubicToQuadratic = T, k._autoCSS = !0, k.quadraticToCubic = function (e, t, i) {
        return new w(e, (2 * t + e) / 3, (2 * t + i) / 3, i)
    }, k._cssRegister = function () {
        var e = x.CSSPlugin;
        if (e) {
            var t = e._internals, i = t._parseToProxy, n = t._setPluginRatio, s = t.CSSPropTween;
            t._registerComplexSpecialProp("bezier", {
                parser: function (e, t, r, a, o, l) {
                    t instanceof Array && (t = {values: t}), l = new k;
                    var c, u, d, h = t.values, p = h.length - 1, f = [], m = {};
                    if (p < 0) return o;
                    for (c = 0; c <= p; c++) d = i(e, h[c], a, o, l, p !== c), f[c] = d.end;
                    for (u in t) m[u] = t[u];
                    return m.values = f, (o = new s(e, "bezier", 0, 0, d.pt, 2)).data = d, o.plugin = l, o.setRatio = n, 0 === m.autoRotate && (m.autoRotate = !0), !m.autoRotate || m.autoRotate instanceof Array || (c = !0 === m.autoRotate ? 0 : Number(m.autoRotate), m.autoRotate = null != d.end.left ? [["left", "top", "rotation", c, !1]] : null != d.end.x && [["x", "y", "rotation", c, !1]]), m.autoRotate && (a._transform || a._enableTransforms(!1), d.autoRotate = a._target._gsTransform, d.proxy.rotation = d.autoRotate.rotation || 0, a._overwriteProps.push("rotation")), l._onInitTween(d.proxy, m, a._tween), o
                }
            })
        }
    }, M._mod = function (e) {
        for (var t, i = this._overwriteProps, n = i.length; --n > -1;) (t = e[i[n]]) && "function" == typeof t && (this._mod[i[n]] = t)
    }, M._kill = function (e) {
        var t, i, n = this._props;
        for (t in this._beziers) if (t in e) for (delete this._beziers[t], delete this._func[t], i = n.length; --i > -1;) n[i] === t && n.splice(i, 1);
        if (n = this._autoRotate) for (i = n.length; --i > -1;) e[n[i][2]] && n.splice(i, 1);
        return this._super._kill.call(this, e)
    },
        /*!
         * VERSION: 1.16.1
         * DATE: 2018-08-27
         * UPDATES AND DOCS AT: http://greensock.com
         *
         * @license Copyright (c) 2008-2019, GreenSock. All rights reserved.
         * This work is subject to the terms at http://greensock.com/standard-license or for
         * Club GreenSock members, the software agreement that was issued with your membership.
         *
         * @author: Jack Doyle, jack@greensock.com
         **/
        r.f._gsDefine("easing.Back", ["easing.Ease"], function () {
            var e, t, i, n, s = r.f.GreenSockGlobals || r.f, a = s.com.greensock, o = 2 * Math.PI, l = Math.PI / 2,
                c = a._class, u = function (e, t) {
                    var i = c("easing." + e, function () {
                    }, !0), n = i.prototype = new r.b;
                    return n.constructor = i, n.getRatio = t, i
                }, d = r.b.register || function () {
                }, h = function (e, t, i, n, s) {
                    var r = c("easing." + e, {easeOut: new t, easeIn: new i, easeInOut: new n}, !0);
                    return d(r, e), r
                }, p = function (e, t, i) {
                    this.t = e, this.v = t, i && (this.next = i, i.prev = this, this.c = i.v - t, this.gap = i.t - e)
                }, f = function (e, t) {
                    var i = c("easing." + e, function (e) {
                        this._p1 = e || 0 === e ? e : 1.70158, this._p2 = 1.525 * this._p1
                    }, !0), n = i.prototype = new r.b;
                    return n.constructor = i, n.getRatio = t, n.config = function (e) {
                        return new i(e)
                    }, i
                }, m = h("Back", f("BackOut", function (e) {
                    return (e -= 1) * e * ((this._p1 + 1) * e + this._p1) + 1
                }), f("BackIn", function (e) {
                    return e * e * ((this._p1 + 1) * e - this._p1)
                }), f("BackInOut", function (e) {
                    return (e *= 2) < 1 ? .5 * e * e * ((this._p2 + 1) * e - this._p2) : .5 * ((e -= 2) * e * ((this._p2 + 1) * e + this._p2) + 2)
                })), g = c("easing.SlowMo", function (e, t, i) {
                    t = t || 0 === t ? t : .7, null == e ? e = .7 : e > 1 && (e = 1), this._p = 1 !== e ? t : 0, this._p1 = (1 - e) / 2, this._p2 = e, this._p3 = this._p1 + this._p2, this._calcEnd = !0 === i
                }, !0), v = g.prototype = new r.b;
            return v.constructor = g, v.getRatio = function (e) {
                var t = e + (.5 - e) * this._p;
                return e < this._p1 ? this._calcEnd ? 1 - (e = 1 - e / this._p1) * e : t - (e = 1 - e / this._p1) * e * e * e * t : e > this._p3 ? this._calcEnd ? 1 === e ? 0 : 1 - (e = (e - this._p3) / this._p1) * e : t + (e - t) * (e = (e - this._p3) / this._p1) * e * e * e : this._calcEnd ? 1 : t
            }, g.ease = new g(.7, .7), v.config = g.config = function (e, t, i) {
                return new g(e, t, i)
            }, (v = (e = c("easing.SteppedEase", function (e, t) {
                e = e || 1, this._p1 = 1 / e, this._p2 = e + (t ? 0 : 1), this._p3 = t ? 1 : 0
            }, !0)).prototype = new r.b).constructor = e, v.getRatio = function (e) {
                return e < 0 ? e = 0 : e >= 1 && (e = .999999999), ((this._p2 * e | 0) + this._p3) * this._p1
            }, v.config = e.config = function (t, i) {
                return new e(t, i)
            }, (v = (t = c("easing.ExpoScaleEase", function (e, t, i) {
                this._p1 = Math.log(t / e), this._p2 = t - e, this._p3 = e, this._ease = i
            }, !0)).prototype = new r.b).constructor = t, v.getRatio = function (e) {
                return this._ease && (e = this._ease.getRatio(e)), (this._p3 * Math.exp(this._p1 * e) - this._p3) / this._p2
            }, v.config = t.config = function (e, i, n) {
                return new t(e, i, n)
            }, (v = (i = c("easing.RoughEase", function (e) {
                for (var t, i, n, s, a, o, l = (e = e || {}).taper || "none", c = [], u = 0, d = 0 | (e.points || 20), h = d, f = !1 !== e.randomize, m = !0 === e.clamp, g = e.template instanceof r.b ? e.template : null, v = "number" == typeof e.strength ? .4 * e.strength : .4; --h > -1;) t = f ? Math.random() : 1 / d * h, i = g ? g.getRatio(t) : t, n = "none" === l ? v : "out" === l ? (s = 1 - t) * s * v : "in" === l ? t * t * v : t < .5 ? (s = 2 * t) * s * .5 * v : (s = 2 * (1 - t)) * s * .5 * v, f ? i += Math.random() * n - .5 * n : h % 2 ? i += .5 * n : i -= .5 * n, m && (i > 1 ? i = 1 : i < 0 && (i = 0)), c[u++] = {
                    x: t,
                    y: i
                };
                for (c.sort(function (e, t) {
                    return e.x - t.x
                }), o = new p(1, 1, null), h = d; --h > -1;) a = c[h], o = new p(a.x, a.y, o);
                this._prev = new p(0, 0, 0 !== o.t ? o : o.next)
            }, !0)).prototype = new r.b).constructor = i, v.getRatio = function (e) {
                var t = this._prev;
                if (e > t.t) {
                    for (; t.next && e >= t.t;) t = t.next;
                    t = t.prev
                } else for (; t.prev && e <= t.t;) t = t.prev;
                return this._prev = t, t.v + (e - t.t) / t.gap * t.c
            }, v.config = function (e) {
                return new i(e)
            }, i.ease = new i, h("Bounce", u("BounceOut", function (e) {
                return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
            }), u("BounceIn", function (e) {
                return (e = 1 - e) < 1 / 2.75 ? 1 - 7.5625 * e * e : e < 2 / 2.75 ? 1 - (7.5625 * (e -= 1.5 / 2.75) * e + .75) : e < 2.5 / 2.75 ? 1 - (7.5625 * (e -= 2.25 / 2.75) * e + .9375) : 1 - (7.5625 * (e -= 2.625 / 2.75) * e + .984375)
            }), u("BounceInOut", function (e) {
                var t = e < .5;
                return (e = t ? 1 - 2 * e : 2 * e - 1) < 1 / 2.75 ? e *= 7.5625 * e : e = e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375, t ? .5 * (1 - e) : .5 * e + .5
            })), h("Circ", u("CircOut", function (e) {
                return Math.sqrt(1 - (e -= 1) * e)
            }), u("CircIn", function (e) {
                return -(Math.sqrt(1 - e * e) - 1)
            }), u("CircInOut", function (e) {
                return (e *= 2) < 1 ? -.5 * (Math.sqrt(1 - e * e) - 1) : .5 * (Math.sqrt(1 - (e -= 2) * e) + 1)
            })), h("Elastic", (n = function (e, t, i) {
                var n = c("easing." + e, function (e, t) {
                    this._p1 = e >= 1 ? e : 1, this._p2 = (t || i) / (e < 1 ? e : 1), this._p3 = this._p2 / o * (Math.asin(1 / this._p1) || 0), this._p2 = o / this._p2
                }, !0), s = n.prototype = new r.b;
                return s.constructor = n, s.getRatio = t, s.config = function (e, t) {
                    return new n(e, t)
                }, n
            })("ElasticOut", function (e) {
                return this._p1 * Math.pow(2, -10 * e) * Math.sin((e - this._p3) * this._p2) + 1
            }, .3), n("ElasticIn", function (e) {
                return -this._p1 * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - this._p3) * this._p2)
            }, .3), n("ElasticInOut", function (e) {
                return (e *= 2) < 1 ? this._p1 * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - this._p3) * this._p2) * -.5 : this._p1 * Math.pow(2, -10 * (e -= 1)) * Math.sin((e - this._p3) * this._p2) * .5 + 1
            }, .45)), h("Expo", u("ExpoOut", function (e) {
                return 1 - Math.pow(2, -10 * e)
            }), u("ExpoIn", function (e) {
                return Math.pow(2, 10 * (e - 1)) - .001
            }), u("ExpoInOut", function (e) {
                return (e *= 2) < 1 ? .5 * Math.pow(2, 10 * (e - 1)) : .5 * (2 - Math.pow(2, -10 * (e - 1)))
            })), h("Sine", u("SineOut", function (e) {
                return Math.sin(e * l)
            }), u("SineIn", function (e) {
                return 1 - Math.cos(e * l)
            }), u("SineInOut", function (e) {
                return -.5 * (Math.cos(Math.PI * e) - 1)
            })), c("easing.EaseLookup", {
                find: function (e) {
                    return r.b.map[e]
                }
            }, !0), d(s.SlowMo, "SlowMo", "ease,"), d(i, "RoughEase", "ease,"), d(e, "SteppedEase", "ease,"), m
        }, !0);
    var O = r.h.Back, A = r.h.Elastic, D = r.h.Bounce, L = r.h.RoughEase, z = r.h.SlowMo, I = r.h.SteppedEase,
        N = r.h.Circ, R = r.h.Expo, j = r.h.Sine, H = r.h.ExpoScaleEase;
    a._autoActivated = [f, m, o, l, k, c, p, O, A, D, L, z, I, N, R, j, H];
    var F = "", B = function () {
        $(window).on("load", function () {
            var e = 2e3 - (Date.now() - window.__openTime);
            e < 50 && (e = 50), setTimeout(function () {
                $("body").addClass("loaded"), q($(window).scrollTop(), $(window).height())
            }, e)
        })
    }, q = function (e, t) {
        $("[data-anim]").each(function (i, n) {
            var s = $(n).offset().top, r = $(n).innerHeight();
            e + t > s && s + r > e ? $(n).attr("data-anim", "true") : $(n).attr("data-anim", "false")
        })
    }, X = function () {
        $(window).on("scroll", function () {
            var e = $(window).scrollTop(), t = $(window).height();
            q(e, t)
        })
    }, Y = function () {
        var e = F;
        $(document).on("click", ".selector-head", function (e) {
            return $(this).closest(".selector").find("input").focus(), !1
        }), $(document).on("blur", ".selector input", function (t) {
            var i = $(this), n = i.closest(".selector");
            i.val(e), n.find("[data-val]").removeClass("active"), n.find('[data-val="' + e + '"]').addClass("active"), n.find(".head-title").text(e), n.parent().find('select option[value="' + e + '"]').prop("selected", !0), e !== F && n.parent().removeClass("err")
        }), $(document).on("mouseenter", ".selector [data-val]", function () {
            e = $(this).data("val")
        })
    }, V = function () {
        $(document).on("click", "[data-toggle-modal]", function (e) {
            var t = $("#app");
            return t.hasClass("modal-open") ? t.removeClass("modal-open") : t.addClass("modal-open"), e.preventDefault(), !1
        }), $(document).on("input, blur", "form[ajax-send] input, form[ajax-send] textarea", function (e) {
            var t = $(this);
            return "" === t.val() ? t.removeClass("not-empty") : (t.addClass("not-empty"), t.closest(".input-wrap").removeClass("err")), !1
        }), $(document).on("keyup", 'form[ajax-send] [name="phone"]', function (e) {
            var t = $(this), i = t.val(), n = i.match(/\d/g) || "";
            n && (n = n.join("")), i !== (n = "+" + n) && t.val(n)
        }), $(document).on("submit", "form[ajax-send]", function (e) {
            var t = $(this), i = t.find('[name="name"]'), n = t.find('[name="phone"]'), s = t.find('[name="email"]'),
                r = t.find('[name="company"]'), a = t.find('[name="service"]'), o = t.find('[name="message"]'),
                l = t.find('[type="submit"]'), c = t.find(".submit-info"), u = !1;
            if ("" !== a.val() && a.val() !== F || (a.closest(".input-wrap").addClass("err"), a.is(":visible") ? a.focus() : a.closest(".input-wrap").find(".selector input").focus(), u = !0), "" === s.val() && (s.closest(".input-wrap").addClass("err"), s.focus(), u = !0), ("" === n.val() || "+" === n.val() || n.val().length < 11) && (n.closest(".input-wrap").addClass("err"), n.focus(), u = !0), ("" === i.val() || i.val().length < 2) && (i.closest(".input-wrap").addClass("err"), i.focus(), u = !0), !u) {
                l.attr("disabled", "disabled");
                var d = t.attr("action") || "/send.php";
                $.post(d, {
                    name: i.val(),
                    phone: n.val(),
                    email: s.val(),
                    company: r.val(),
                    service: a.val(),
                    message: o.val()
                }).done(function (e) {
                    c.text("Заявка успешно отправлена!"), setTimeout(function () {
                        c.addClass("success"), setTimeout(function () {
                            t.find("input,textarea").removeClass("not-empty").val(""), t.find(".input-wrap").removeClass("err"), c.removeClass("failure success"), setTimeout(function () {
                                c.text(""), $("#modal [data-toggle-modal]").click()
                            }, 800)
                        }, 3500)
                    }, 50)
                }).fail(function () {
                    c.text("Ошибка! Заявка не отправлена…"), setTimeout(function () {
                        c.addClass("failure"), setTimeout(function () {
                            c.removeClass("failure success"), setTimeout(function () {
                                c.text("")
                            }, 400)
                        }, 3500)
                    }, 50)
                }).always(function () {
                    l.removeAttr("disabled")
                })
            }
            return !1
        })
    }, G = function () {
        $(window).on("mousewheel", function (e) {
            var t = e.originalEvent.deltaY / 10;
            $(".section-dots-background .before").each(function (e, i) {
                var n = 25 * (e + 1) / 1e3;
                r.g.to(i, .25, {
                    transform: "translate3d(0, ".concat(t, "px, 0)"),
                    delay: n
                }), r.g.to(i, .25, {transform: "translate3d(0, 0, 0)", delay: .25 + n})
            })
        }), $("section").on("mousemove", function (e) {
            var t = $(e.currentTarget), i = (e.clientX - $(window).width() / 2) / 75,
                n = (e.clientY - $(window).height() / 2) / 125;
            t.find(".section-dots-background").each(function (e, t) {
                var s = $(t).find("img");
                s.length && r.g.to(s[0], 0, {x: "".concat(i, "px"), y: "".concat(n, "px"), ease: r.c.easeOut})
            }), t.find(".marketing-section-back").each(function (e, t) {
                var s = $(t).find("img");
                $(t).css({overflow: "hidden"}), s.length && (s.css({
                    width: "104%",
                    "margin-left": "-2%"
                }), r.g.to(s[0], 0, {x: "".concat(i / 2, "px"), y: "".concat(-n, "px"), ease: r.c.easeOut}))
            })
        })
    }, W = function () {
        $(document).on("mousedown", function (e) {
            var t = $("#cursor .cir .clc")[0];
            $("#cursor .cir .hvr")[0];
            r.g.to(t, 0, {opacity: 1}), r.g.to(t, .5, {
                transform: "scale(.5)",
                opacity: 0,
                ease: N.easeOut
            }), r.g.to(t, 0, {transform: "scale(.1)", delay: .5})
        }), $(document).on({
            mouseenter: function () {
                var e = $("#cursor .cir .hvr")[0];
                r.g.to(e, .4, {transform: "scale(.4)", opacity: 0}), r.g.to(e, 0, {transform: "scale(.1)", delay: .4})
            }, mouseleave: function () {
                var e = $("#cursor .cir .hvr")[0];
                r.g.to(e, .35, {opacity: 1})
            }
        }, "a, button"), $(document).on("mousemove", function (e) {
            var t = e.clientX, i = e.clientY;
            $("#cursor [data-num]").each(function (e, n) {
                var s = $(n).data("num");
                r.g.to(n, .12 * s, {x: "".concat(t, "px"), y: "".concat(i, "px"), ease: r.c.easeOut})
            })
        })
    }, U = function () {
        $("[data-animate-title],[data-animate-link]").each(function (e, t) {
            var i = $(t), n = i.html().split(" "), s = "";
            n.map(function (e) {
                s += '<span class="w">', e.indexOf("&nbsp;") && (e = e.replace("&nbsp;", " ")), e.split("").map(function (e) {
                    s += " " === e ? '<span class="l">&nbsp;</span>' : '<span class="l">'.concat(e, "</span>")
                }), s += "</span> "
            }), i.html(s)
        }), $(document).on("mouseenter", "[data-animate-title] span.l", function () {
            r.g.to(this, .2, {transform: "scale(1.02) translate3d(0, -15px, 0)"}), r.g.to(this, .25, {
                transform: "scale(1) translate3d(0, 0, 0)",
                delay: .2
            })
        }), $(document).on("mouseenter", "[data-animate-link]", function () {
            $(this).find("span.l").each(function (e, t) {
                var i = Math.round(1.5 * (e + 2));
                r.g.to(t, .1, {
                    transform: "scale(1.05) translate3d(0, -".concat(i, "px, 0)"),
                    color: "#d62cfd",
                    delay: .035 * e
                }), r.g.to(t, .12, {transform: "scale(1) translate3d(0, 0, 0)", color: "#ff7121", delay: .035 * e + .1})
            })
        })
    }, K = function (e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            i = "light" === $("#app").data("theme") ? "#020202" : "#ffffff", n = .05, s = .1,
            a = ["#965bfb", "#ff7121", "#d62cfd"], o = t * n * 12;
        e.find(".white-path").each(function (e, t) {
            for (var l = 0, c = a.length; l < c; l++) r.g.to(t, n, {
                fill: a[l],
                transform: "scaleY(1.2)",
                delay: e * n + l * n + o
            });
            r.g.to(t, s, {fill: i, transform: "scaleY(1)", delay: e * n + n * a.length + o})
        }), e.find(".orange-path").each(function (e, t) {
            for (var i = 0, l = a.length; i < l; i++) r.g.to(t, n, {
                fill: a[i],
                transform: "scaleY(1.2)",
                delay: 2.5 * n + i * n + o
            });
            r.g.to(t, s, {fill: "#ff7121", transform: "scaleY(1)", delay: 2.5 * n + n * a.length + o})
        })
    }, Z = function () {
        $(document).on("mouseenter", "#melonLogo, #popupLogo", function () {
            for (var e = $(this), t = 0; t < 2; t++) K(e, t)
        })
    }, Q = "undefined" == typeof document ? {
        body: {}, addEventListener: function () {
        }, removeEventListener: function () {
        }, activeElement: {
            blur: function () {
            }, nodeName: ""
        }, querySelector: function () {
            return null
        }, querySelectorAll: function () {
            return []
        }, getElementById: function () {
            return null
        }, createEvent: function () {
            return {
                initEvent: function () {
                }
            }
        }, createElement: function () {
            return {
                children: [], childNodes: [], style: {}, setAttribute: function () {
                }, getElementsByTagName: function () {
                    return []
                }
            }
        }, location: {hash: ""}
    } : document, J = "undefined" == typeof window ? {
        document: Q,
        navigator: {userAgent: ""},
        location: {},
        history: {},
        CustomEvent: function () {
            return this
        },
        addEventListener: function () {
        },
        removeEventListener: function () {
        },
        getComputedStyle: function () {
            return {
                getPropertyValue: function () {
                    return ""
                }
            }
        },
        Image: function () {
        },
        Date: function () {
        },
        screen: {},
        setTimeout: function () {
        },
        clearTimeout: function () {
        }
    } : window;

    class ee {
        constructor(e) {
            const t = this;
            for (let i = 0; i < e.length; i += 1) t[i] = e[i];
            return t.length = e.length, this
        }
    }

    function te(e, t) {
        const i = [];
        let n = 0;
        if (e && !t && e instanceof ee) return e;
        if (e) if ("string" == typeof e) {
            let s, r;
            const a = e.trim();
            if (a.indexOf("<") >= 0 && a.indexOf(">") >= 0) {
                let e = "div";
                for (0 === a.indexOf("<li") && (e = "ul"), 0 === a.indexOf("<tr") && (e = "tbody"), 0 !== a.indexOf("<td") && 0 !== a.indexOf("<th") || (e = "tr"), 0 === a.indexOf("<tbody") && (e = "table"), 0 === a.indexOf("<option") && (e = "select"), (r = Q.createElement(e)).innerHTML = a, n = 0; n < r.childNodes.length; n += 1) i.push(r.childNodes[n])
            } else for (s = t || "#" !== e[0] || e.match(/[ .<>:~]/) ? (t || Q).querySelectorAll(e.trim()) : [Q.getElementById(e.trim().split("#")[1])], n = 0; n < s.length; n += 1) s[n] && i.push(s[n])
        } else if (e.nodeType || e === J || e === Q) i.push(e); else if (e.length > 0 && e[0].nodeType) for (n = 0; n < e.length; n += 1) i.push(e[n]);
        return new ee(i)
    }

    function ie(e) {
        const t = [];
        for (let i = 0; i < e.length; i += 1) -1 === t.indexOf(e[i]) && t.push(e[i]);
        return t
    }

    te.fn = ee.prototype, te.Class = ee, te.Dom7 = ee;
    "resize scroll".split(" ");
    const ne = {
        addClass: function (e) {
            if (void 0 === e) return this;
            const t = e.split(" ");
            for (let e = 0; e < t.length; e += 1) for (let i = 0; i < this.length; i += 1) void 0 !== this[i] && void 0 !== this[i].classList && this[i].classList.add(t[e]);
            return this
        }, removeClass: function (e) {
            const t = e.split(" ");
            for (let e = 0; e < t.length; e += 1) for (let i = 0; i < this.length; i += 1) void 0 !== this[i] && void 0 !== this[i].classList && this[i].classList.remove(t[e]);
            return this
        }, hasClass: function (e) {
            return !!this[0] && this[0].classList.contains(e)
        }, toggleClass: function (e) {
            const t = e.split(" ");
            for (let e = 0; e < t.length; e += 1) for (let i = 0; i < this.length; i += 1) void 0 !== this[i] && void 0 !== this[i].classList && this[i].classList.toggle(t[e]);
            return this
        }, attr: function (e, t) {
            if (1 === arguments.length && "string" == typeof e) return this[0] ? this[0].getAttribute(e) : void 0;
            for (let i = 0; i < this.length; i += 1) if (2 === arguments.length) this[i].setAttribute(e, t); else for (const t in e) this[i][t] = e[t], this[i].setAttribute(t, e[t]);
            return this
        }, removeAttr: function (e) {
            for (let t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
            return this
        }, data: function (e, t) {
            let i;
            if (void 0 !== t) {
                for (let n = 0; n < this.length; n += 1) (i = this[n]).dom7ElementDataStorage || (i.dom7ElementDataStorage = {}), i.dom7ElementDataStorage[e] = t;
                return this
            }
            if (i = this[0]) {
                if (i.dom7ElementDataStorage && e in i.dom7ElementDataStorage) return i.dom7ElementDataStorage[e];
                const t = i.getAttribute(`data-${e}`);
                return t || void 0
            }
        }, transform: function (e) {
            for (let t = 0; t < this.length; t += 1) {
                const i = this[t].style;
                i.webkitTransform = e, i.transform = e
            }
            return this
        }, transition: function (e) {
            "string" != typeof e && (e = `${e}ms`);
            for (let t = 0; t < this.length; t += 1) {
                const i = this[t].style;
                i.webkitTransitionDuration = e, i.transitionDuration = e
            }
            return this
        }, on: function (...e) {
            let [t, i, n, s] = e;

            function r(e) {
                const t = e.target;
                if (!t) return;
                const s = e.target.dom7EventData || [];
                if (s.indexOf(e) < 0 && s.unshift(e), te(t).is(i)) n.apply(t, s); else {
                    const e = te(t).parents();
                    for (let t = 0; t < e.length; t += 1) te(e[t]).is(i) && n.apply(e[t], s)
                }
            }

            function a(e) {
                const t = e && e.target && e.target.dom7EventData || [];
                t.indexOf(e) < 0 && t.unshift(e), n.apply(this, t)
            }

            "function" == typeof e[1] && ([t, n, s] = e, i = void 0), s || (s = !1);
            const o = t.split(" ");
            let l;
            for (let e = 0; e < this.length; e += 1) {
                const t = this[e];
                if (i) for (l = 0; l < o.length; l += 1) {
                    const e = o[l];
                    t.dom7LiveListeners || (t.dom7LiveListeners = {}), t.dom7LiveListeners[e] || (t.dom7LiveListeners[e] = []), t.dom7LiveListeners[e].push({
                        listener: n,
                        proxyListener: r
                    }), t.addEventListener(e, r, s)
                } else for (l = 0; l < o.length; l += 1) {
                    const e = o[l];
                    t.dom7Listeners || (t.dom7Listeners = {}), t.dom7Listeners[e] || (t.dom7Listeners[e] = []), t.dom7Listeners[e].push({
                        listener: n,
                        proxyListener: a
                    }), t.addEventListener(e, a, s)
                }
            }
            return this
        }, off: function (...e) {
            let [t, i, n, s] = e;
            "function" == typeof e[1] && ([t, n, s] = e, i = void 0), s || (s = !1);
            const r = t.split(" ");
            for (let e = 0; e < r.length; e += 1) {
                const t = r[e];
                for (let e = 0; e < this.length; e += 1) {
                    const r = this[e];
                    let a;
                    if (!i && r.dom7Listeners ? a = r.dom7Listeners[t] : i && r.dom7LiveListeners && (a = r.dom7LiveListeners[t]), a && a.length) for (let e = a.length - 1; e >= 0; e -= 1) {
                        const i = a[e];
                        n && i.listener === n ? (r.removeEventListener(t, i.proxyListener, s), a.splice(e, 1)) : n && i.listener && i.listener.dom7proxy && i.listener.dom7proxy === n ? (r.removeEventListener(t, i.proxyListener, s), a.splice(e, 1)) : n || (r.removeEventListener(t, i.proxyListener, s), a.splice(e, 1))
                    }
                }
            }
            return this
        }, trigger: function (...e) {
            const t = e[0].split(" "), i = e[1];
            for (let n = 0; n < t.length; n += 1) {
                const s = t[n];
                for (let t = 0; t < this.length; t += 1) {
                    const n = this[t];
                    let r;
                    try {
                        r = new J.CustomEvent(s, {detail: i, bubbles: !0, cancelable: !0})
                    } catch (e) {
                        (r = Q.createEvent("Event")).initEvent(s, !0, !0), r.detail = i
                    }
                    n.dom7EventData = e.filter((e, t) => t > 0), n.dispatchEvent(r), n.dom7EventData = [], delete n.dom7EventData
                }
            }
            return this
        }, transitionEnd: function (e) {
            const t = ["webkitTransitionEnd", "transitionend"], i = this;
            let n;

            function s(r) {
                if (r.target === this) for (e.call(this, r), n = 0; n < t.length; n += 1) i.off(t[n], s)
            }

            if (e) for (n = 0; n < t.length; n += 1) i.on(t[n], s);
            return this
        }, outerWidth: function (e) {
            if (this.length > 0) {
                if (e) {
                    const e = this.styles();
                    return this[0].offsetWidth + parseFloat(e.getPropertyValue("margin-right")) + parseFloat(e.getPropertyValue("margin-left"))
                }
                return this[0].offsetWidth
            }
            return null
        }, outerHeight: function (e) {
            if (this.length > 0) {
                if (e) {
                    const e = this.styles();
                    return this[0].offsetHeight + parseFloat(e.getPropertyValue("margin-top")) + parseFloat(e.getPropertyValue("margin-bottom"))
                }
                return this[0].offsetHeight
            }
            return null
        }, offset: function () {
            if (this.length > 0) {
                const e = this[0], t = e.getBoundingClientRect(), i = Q.body, n = e.clientTop || i.clientTop || 0,
                    s = e.clientLeft || i.clientLeft || 0, r = e === J ? J.scrollY : e.scrollTop,
                    a = e === J ? J.scrollX : e.scrollLeft;
                return {top: t.top + r - n, left: t.left + a - s}
            }
            return null
        }, css: function (e, t) {
            let i;
            if (1 === arguments.length) {
                if ("string" != typeof e) {
                    for (i = 0; i < this.length; i += 1) for (let t in e) this[i].style[t] = e[t];
                    return this
                }
                if (this[0]) return J.getComputedStyle(this[0], null).getPropertyValue(e)
            }
            if (2 === arguments.length && "string" == typeof e) {
                for (i = 0; i < this.length; i += 1) this[i].style[e] = t;
                return this
            }
            return this
        }, each: function (e) {
            if (!e) return this;
            for (let t = 0; t < this.length; t += 1) if (!1 === e.call(this[t], t, this[t])) return this;
            return this
        }, html: function (e) {
            if (void 0 === e) return this[0] ? this[0].innerHTML : void 0;
            for (let t = 0; t < this.length; t += 1) this[t].innerHTML = e;
            return this
        }, text: function (e) {
            if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
            for (let t = 0; t < this.length; t += 1) this[t].textContent = e;
            return this
        }, is: function (e) {
            const t = this[0];
            let i, n;
            if (!t || void 0 === e) return !1;
            if ("string" == typeof e) {
                if (t.matches) return t.matches(e);
                if (t.webkitMatchesSelector) return t.webkitMatchesSelector(e);
                if (t.msMatchesSelector) return t.msMatchesSelector(e);
                for (i = te(e), n = 0; n < i.length; n += 1) if (i[n] === t) return !0;
                return !1
            }
            if (e === Q) return t === Q;
            if (e === J) return t === J;
            if (e.nodeType || e instanceof ee) {
                for (i = e.nodeType ? [e] : e, n = 0; n < i.length; n += 1) if (i[n] === t) return !0;
                return !1
            }
            return !1
        }, index: function () {
            let e, t = this[0];
            if (t) {
                for (e = 0; null !== (t = t.previousSibling);) 1 === t.nodeType && (e += 1);
                return e
            }
        }, eq: function (e) {
            if (void 0 === e) return this;
            const t = this.length;
            let i;
            return new ee(e > t - 1 ? [] : e < 0 ? (i = t + e) < 0 ? [] : [this[i]] : [this[e]])
        }, append: function (...e) {
            let t;
            for (let i = 0; i < e.length; i += 1) {
                t = e[i];
                for (let e = 0; e < this.length; e += 1) if ("string" == typeof t) {
                    const i = Q.createElement("div");
                    for (i.innerHTML = t; i.firstChild;) this[e].appendChild(i.firstChild)
                } else if (t instanceof ee) for (let i = 0; i < t.length; i += 1) this[e].appendChild(t[i]); else this[e].appendChild(t)
            }
            return this
        }, prepend: function (e) {
            let t, i;
            for (t = 0; t < this.length; t += 1) if ("string" == typeof e) {
                const n = Q.createElement("div");
                for (n.innerHTML = e, i = n.childNodes.length - 1; i >= 0; i -= 1) this[t].insertBefore(n.childNodes[i], this[t].childNodes[0])
            } else if (e instanceof ee) for (i = 0; i < e.length; i += 1) this[t].insertBefore(e[i], this[t].childNodes[0]); else this[t].insertBefore(e, this[t].childNodes[0]);
            return this
        }, next: function (e) {
            return this.length > 0 ? e ? this[0].nextElementSibling && te(this[0].nextElementSibling).is(e) ? new ee([this[0].nextElementSibling]) : new ee([]) : this[0].nextElementSibling ? new ee([this[0].nextElementSibling]) : new ee([]) : new ee([])
        }, nextAll: function (e) {
            const t = [];
            let i = this[0];
            if (!i) return new ee([]);
            for (; i.nextElementSibling;) {
                const n = i.nextElementSibling;
                e ? te(n).is(e) && t.push(n) : t.push(n), i = n
            }
            return new ee(t)
        }, prev: function (e) {
            if (this.length > 0) {
                const t = this[0];
                return e ? t.previousElementSibling && te(t.previousElementSibling).is(e) ? new ee([t.previousElementSibling]) : new ee([]) : t.previousElementSibling ? new ee([t.previousElementSibling]) : new ee([])
            }
            return new ee([])
        }, prevAll: function (e) {
            const t = [];
            let i = this[0];
            if (!i) return new ee([]);
            for (; i.previousElementSibling;) {
                const n = i.previousElementSibling;
                e ? te(n).is(e) && t.push(n) : t.push(n), i = n
            }
            return new ee(t)
        }, parent: function (e) {
            const t = [];
            for (let i = 0; i < this.length; i += 1) null !== this[i].parentNode && (e ? te(this[i].parentNode).is(e) && t.push(this[i].parentNode) : t.push(this[i].parentNode));
            return te(ie(t))
        }, parents: function (e) {
            const t = [];
            for (let i = 0; i < this.length; i += 1) {
                let n = this[i].parentNode;
                for (; n;) e ? te(n).is(e) && t.push(n) : t.push(n), n = n.parentNode
            }
            return te(ie(t))
        }, closest: function (e) {
            let t = this;
            return void 0 === e ? new ee([]) : (t.is(e) || (t = t.parents(e).eq(0)), t)
        }, find: function (e) {
            const t = [];
            for (let i = 0; i < this.length; i += 1) {
                const n = this[i].querySelectorAll(e);
                for (let e = 0; e < n.length; e += 1) t.push(n[e])
            }
            return new ee(t)
        }, children: function (e) {
            const t = [];
            for (let i = 0; i < this.length; i += 1) {
                const n = this[i].childNodes;
                for (let i = 0; i < n.length; i += 1) e ? 1 === n[i].nodeType && te(n[i]).is(e) && t.push(n[i]) : 1 === n[i].nodeType && t.push(n[i])
            }
            return new ee(ie(t))
        }, remove: function () {
            for (let e = 0; e < this.length; e += 1) this[e].parentNode && this[e].parentNode.removeChild(this[e]);
            return this
        }, add: function (...e) {
            const t = this;
            let i, n;
            for (i = 0; i < e.length; i += 1) {
                const s = te(e[i]);
                for (n = 0; n < s.length; n += 1) t[t.length] = s[n], t.length += 1
            }
            return t
        }, styles: function () {
            return this[0] ? J.getComputedStyle(this[0], null) : {}
        }
    };
    Object.keys(ne).forEach(e => {
        te.fn[e] = te.fn[e] || ne[e]
    });
    const se = {
        deleteProps(e) {
            const t = e;
            Object.keys(t).forEach(e => {
                try {
                    t[e] = null
                } catch (e) {
                }
                try {
                    delete t[e]
                } catch (e) {
                }
            })
        },
        nextTick: (e, t = 0) => setTimeout(e, t),
        now: () => Date.now(),
        getTranslate(e, t = "x") {
            let i, n, s;
            const r = J.getComputedStyle(e, null);
            return J.WebKitCSSMatrix ? ((n = r.transform || r.webkitTransform).split(",").length > 6 && (n = n.split(", ").map(e => e.replace(",", ".")).join(", ")), s = new J.WebKitCSSMatrix("none" === n ? "" : n)) : i = (s = r.MozTransform || r.OTransform || r.MsTransform || r.msTransform || r.transform || r.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(","), "x" === t && (n = J.WebKitCSSMatrix ? s.m41 : 16 === i.length ? parseFloat(i[12]) : parseFloat(i[4])), "y" === t && (n = J.WebKitCSSMatrix ? s.m42 : 16 === i.length ? parseFloat(i[13]) : parseFloat(i[5])), n || 0
        },
        parseUrlQuery(e) {
            const t = {};
            let i, n, s, r, a = e || J.location.href;
            if ("string" == typeof a && a.length) for (r = (n = (a = a.indexOf("?") > -1 ? a.replace(/\S*\?/, "") : "").split("&").filter(e => "" !== e)).length, i = 0; i < r; i += 1) s = n[i].replace(/#\S+/g, "").split("="), t[decodeURIComponent(s[0])] = void 0 === s[1] ? void 0 : decodeURIComponent(s[1]) || "";
            return t
        },
        isObject: e => "object" == typeof e && null !== e && e.constructor && e.constructor === Object,
        extend(...e) {
            const t = Object(e[0]);
            for (let i = 1; i < e.length; i += 1) {
                const n = e[i];
                if (null != n) {
                    const e = Object.keys(Object(n));
                    for (let i = 0, s = e.length; i < s; i += 1) {
                        const s = e[i], r = Object.getOwnPropertyDescriptor(n, s);
                        void 0 !== r && r.enumerable && (se.isObject(t[s]) && se.isObject(n[s]) ? se.extend(t[s], n[s]) : !se.isObject(t[s]) && se.isObject(n[s]) ? (t[s] = {}, se.extend(t[s], n[s])) : t[s] = n[s])
                    }
                }
            }
            return t
        }
    }, re = function () {
        const e = Q.createElement("div");
        return {
            touch: J.Modernizr && !0 === J.Modernizr.touch || !!(J.navigator.maxTouchPoints > 0 || "ontouchstart" in J || J.DocumentTouch && Q instanceof J.DocumentTouch),
            pointerEvents: !!(J.navigator.pointerEnabled || J.PointerEvent || "maxTouchPoints" in J.navigator && J.navigator.maxTouchPoints > 0),
            prefixedPointerEvents: !!J.navigator.msPointerEnabled,
            transition: function () {
                const t = e.style;
                return "transition" in t || "webkitTransition" in t || "MozTransition" in t
            }(),
            transforms3d: J.Modernizr && !0 === J.Modernizr.csstransforms3d || function () {
                const t = e.style;
                return "webkitPerspective" in t || "MozPerspective" in t || "OPerspective" in t || "MsPerspective" in t || "perspective" in t
            }(),
            flexbox: function () {
                const t = e.style,
                    i = "alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" ");
                for (let e = 0; e < i.length; e += 1) if (i[e] in t) return !0;
                return !1
            }(),
            observer: "MutationObserver" in J || "WebkitMutationObserver" in J,
            passiveListener: function () {
                let e = !1;
                try {
                    const t = Object.defineProperty({}, "passive", {
                        get() {
                            e = !0
                        }
                    });
                    J.addEventListener("testPassiveListener", null, t)
                } catch (e) {
                }
                return e
            }(),
            gestures: "ongesturestart" in J
        }
    }(), ae = {
        isIE: !!J.navigator.userAgent.match(/Trident/g) || !!J.navigator.userAgent.match(/MSIE/g),
        isEdge: !!J.navigator.userAgent.match(/Edge/g),
        isSafari: function () {
            const e = J.navigator.userAgent.toLowerCase();
            return e.indexOf("safari") >= 0 && e.indexOf("chrome") < 0 && e.indexOf("android") < 0
        }(),
        isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(J.navigator.userAgent)
    };

    class oe {
        constructor(e = {}) {
            const t = this;
            t.params = e, t.eventsListeners = {}, t.params && t.params.on && Object.keys(t.params.on).forEach(e => {
                t.on(e, t.params.on[e])
            })
        }

        on(e, t, i) {
            const n = this;
            if ("function" != typeof t) return n;
            const s = i ? "unshift" : "push";
            return e.split(" ").forEach(e => {
                n.eventsListeners[e] || (n.eventsListeners[e] = []), n.eventsListeners[e][s](t)
            }), n
        }

        once(e, t, i) {
            const n = this;
            if ("function" != typeof t) return n;

            function s(...i) {
                t.apply(n, i), n.off(e, s), s.f7proxy && delete s.f7proxy
            }

            return s.f7proxy = t, n.on(e, s, i)
        }

        off(e, t) {
            const i = this;
            return i.eventsListeners ? (e.split(" ").forEach(e => {
                void 0 === t ? i.eventsListeners[e] = [] : i.eventsListeners[e] && i.eventsListeners[e].length && i.eventsListeners[e].forEach((n, s) => {
                    (n === t || n.f7proxy && n.f7proxy === t) && i.eventsListeners[e].splice(s, 1)
                })
            }), i) : i
        }

        emit(...e) {
            const t = this;
            if (!t.eventsListeners) return t;
            let i, n, s;
            return "string" == typeof e[0] || Array.isArray(e[0]) ? (i = e[0], n = e.slice(1, e.length), s = t) : (i = e[0].events, n = e[0].data, s = e[0].context || t), (Array.isArray(i) ? i : i.split(" ")).forEach(e => {
                if (t.eventsListeners && t.eventsListeners[e]) {
                    const i = [];
                    t.eventsListeners[e].forEach(e => {
                        i.push(e)
                    }), i.forEach(e => {
                        e.apply(s, n)
                    })
                }
            }), t
        }

        useModulesParams(e) {
            const t = this;
            t.modules && Object.keys(t.modules).forEach(i => {
                const n = t.modules[i];
                n.params && se.extend(e, n.params)
            })
        }

        useModules(e = {}) {
            const t = this;
            t.modules && Object.keys(t.modules).forEach(i => {
                const n = t.modules[i], s = e[i] || {};
                n.instance && Object.keys(n.instance).forEach(e => {
                    const i = n.instance[e];
                    t[e] = "function" == typeof i ? i.bind(t) : i
                }), n.on && t.on && Object.keys(n.on).forEach(e => {
                    t.on(e, n.on[e])
                }), n.create && n.create.bind(t)(s)
            })
        }

        static set components(e) {
            this.use && this.use(e)
        }

        static installModule(e, ...t) {
            const i = this;
            i.prototype.modules || (i.prototype.modules = {});
            const n = e.name || `${Object.keys(i.prototype.modules).length}_${se.now()}`;
            return i.prototype.modules[n] = e, e.proto && Object.keys(e.proto).forEach(t => {
                i.prototype[t] = e.proto[t]
            }), e.static && Object.keys(e.static).forEach(t => {
                i[t] = e.static[t]
            }), e.install && e.install.apply(i, t), i
        }

        static use(e, ...t) {
            const i = this;
            return Array.isArray(e) ? (e.forEach(e => i.installModule(e)), i) : i.installModule(e, ...t)
        }
    }

    var le = {
        updateSize: function () {
            const e = this;
            let t, i;
            const n = e.$el;
            t = void 0 !== e.params.width ? e.params.width : n[0].clientWidth, i = void 0 !== e.params.height ? e.params.height : n[0].clientHeight, 0 === t && e.isHorizontal() || 0 === i && e.isVertical() || (t = t - parseInt(n.css("padding-left"), 10) - parseInt(n.css("padding-right"), 10), i = i - parseInt(n.css("padding-top"), 10) - parseInt(n.css("padding-bottom"), 10), se.extend(e, {
                width: t,
                height: i,
                size: e.isHorizontal() ? t : i
            }))
        }, updateSlides: function () {
            const e = this, t = e.params, {$wrapperEl: i, size: n, rtlTranslate: s, wrongRTL: r} = e,
                a = e.virtual && t.virtual.enabled, o = a ? e.virtual.slides.length : e.slides.length,
                l = i.children(`.${e.params.slideClass}`), c = a ? e.virtual.slides.length : l.length;
            let u = [];
            const d = [], h = [];
            let p = t.slidesOffsetBefore;
            "function" == typeof p && (p = t.slidesOffsetBefore.call(e));
            let f = t.slidesOffsetAfter;
            "function" == typeof f && (f = t.slidesOffsetAfter.call(e));
            const m = e.snapGrid.length, g = e.snapGrid.length;
            let v, y, _ = t.spaceBetween, b = -p, x = 0, w = 0;
            if (void 0 === n) return;
            "string" == typeof _ && _.indexOf("%") >= 0 && (_ = parseFloat(_.replace("%", "")) / 100 * n), e.virtualSize = -_, s ? l.css({
                marginLeft: "",
                marginTop: ""
            }) : l.css({
                marginRight: "",
                marginBottom: ""
            }), t.slidesPerColumn > 1 && (v = Math.floor(c / t.slidesPerColumn) === c / e.params.slidesPerColumn ? c : Math.ceil(c / t.slidesPerColumn) * t.slidesPerColumn, "auto" !== t.slidesPerView && "row" === t.slidesPerColumnFill && (v = Math.max(v, t.slidesPerView * t.slidesPerColumn)));
            const T = t.slidesPerColumn, C = v / T, S = Math.floor(c / t.slidesPerColumn);
            for (let i = 0; i < c; i += 1) {
                y = 0;
                const s = l.eq(i);
                if (t.slidesPerColumn > 1) {
                    let n, r, a;
                    if ("column" === t.slidesPerColumnFill || "row" === t.slidesPerColumnFill && t.slidesPerGroup > 1) {
                        if ("column" === t.slidesPerColumnFill) a = i - (r = Math.floor(i / T)) * T, (r > S || r === S && a === T - 1) && (a += 1) >= T && (a = 0, r += 1); else {
                            const e = Math.floor(i / t.slidesPerGroup);
                            r = i - (a = Math.floor(i / t.slidesPerView) - e * t.slidesPerColumn) * t.slidesPerView - e * t.slidesPerView
                        }
                        n = r + a * v / T, s.css({
                            "-webkit-box-ordinal-group": n,
                            "-moz-box-ordinal-group": n,
                            "-ms-flex-order": n,
                            "-webkit-order": n,
                            order: n
                        })
                    } else r = i - (a = Math.floor(i / C)) * C;
                    s.css(`margin-${e.isHorizontal() ? "top" : "left"}`, 0 !== a && t.spaceBetween && `${t.spaceBetween}px`).attr("data-swiper-column", r).attr("data-swiper-row", a)
                }
                if ("none" !== s.css("display")) {
                    if ("auto" === t.slidesPerView) {
                        const i = J.getComputedStyle(s[0], null), n = s[0].style.transform,
                            r = s[0].style.webkitTransform;
                        if (n && (s[0].style.transform = "none"), r && (s[0].style.webkitTransform = "none"), t.roundLengths) y = e.isHorizontal() ? s.outerWidth(!0) : s.outerHeight(!0); else if (e.isHorizontal()) {
                            const e = parseFloat(i.getPropertyValue("width")),
                                t = parseFloat(i.getPropertyValue("padding-left")),
                                n = parseFloat(i.getPropertyValue("padding-right")),
                                s = parseFloat(i.getPropertyValue("margin-left")),
                                r = parseFloat(i.getPropertyValue("margin-right")),
                                a = i.getPropertyValue("box-sizing");
                            y = a && "border-box" === a && !ae.isIE ? e + s + r : e + t + n + s + r
                        } else {
                            const e = parseFloat(i.getPropertyValue("height")),
                                t = parseFloat(i.getPropertyValue("padding-top")),
                                n = parseFloat(i.getPropertyValue("padding-bottom")),
                                s = parseFloat(i.getPropertyValue("margin-top")),
                                r = parseFloat(i.getPropertyValue("margin-bottom")),
                                a = i.getPropertyValue("box-sizing");
                            y = a && "border-box" === a && !ae.isIE ? e + s + r : e + t + n + s + r
                        }
                        n && (s[0].style.transform = n), r && (s[0].style.webkitTransform = r), t.roundLengths && (y = Math.floor(y))
                    } else y = (n - (t.slidesPerView - 1) * _) / t.slidesPerView, t.roundLengths && (y = Math.floor(y)), l[i] && (e.isHorizontal() ? l[i].style.width = `${y}px` : l[i].style.height = `${y}px`);
                    l[i] && (l[i].swiperSlideSize = y), h.push(y), t.centeredSlides ? (b = b + y / 2 + x / 2 + _, 0 === x && 0 !== i && (b = b - n / 2 - _), 0 === i && (b = b - n / 2 - _), Math.abs(b) < .001 && (b = 0), t.roundLengths && (b = Math.floor(b)), w % t.slidesPerGroup == 0 && u.push(b), d.push(b)) : (t.roundLengths && (b = Math.floor(b)), w % t.slidesPerGroup == 0 && u.push(b), d.push(b), b = b + y + _), e.virtualSize += y + _, x = y, w += 1
                }
            }
            let E;
            if (e.virtualSize = Math.max(e.virtualSize, n) + f, s && r && ("slide" === t.effect || "coverflow" === t.effect) && i.css({width: `${e.virtualSize + t.spaceBetween}px`}), re.flexbox && !t.setWrapperSize || (e.isHorizontal() ? i.css({width: `${e.virtualSize + t.spaceBetween}px`}) : i.css({height: `${e.virtualSize + t.spaceBetween}px`})), t.slidesPerColumn > 1 && (e.virtualSize = (y + t.spaceBetween) * v, e.virtualSize = Math.ceil(e.virtualSize / t.slidesPerColumn) - t.spaceBetween, e.isHorizontal() ? i.css({width: `${e.virtualSize + t.spaceBetween}px`}) : i.css({height: `${e.virtualSize + t.spaceBetween}px`}), t.centeredSlides)) {
                E = [];
                for (let i = 0; i < u.length; i += 1) {
                    let n = u[i];
                    t.roundLengths && (n = Math.floor(n)), u[i] < e.virtualSize + u[0] && E.push(n)
                }
                u = E
            }
            if (!t.centeredSlides) {
                E = [];
                for (let i = 0; i < u.length; i += 1) {
                    let s = u[i];
                    t.roundLengths && (s = Math.floor(s)), u[i] <= e.virtualSize - n && E.push(s)
                }
                u = E, Math.floor(e.virtualSize - n) - Math.floor(u[u.length - 1]) > 1 && u.push(e.virtualSize - n)
            }
            if (0 === u.length && (u = [0]), 0 !== t.spaceBetween && (e.isHorizontal() ? s ? l.css({marginLeft: `${_}px`}) : l.css({marginRight: `${_}px`}) : l.css({marginBottom: `${_}px`})), t.centerInsufficientSlides) {
                let e = 0;
                if (h.forEach(i => {
                    e += i + (t.spaceBetween ? t.spaceBetween : 0)
                }), (e -= t.spaceBetween) < n) {
                    const t = (n - e) / 2;
                    u.forEach((e, i) => {
                        u[i] = e - t
                    }), d.forEach((e, i) => {
                        d[i] = e + t
                    })
                }
            }
            se.extend(e, {
                slides: l,
                snapGrid: u,
                slidesGrid: d,
                slidesSizesGrid: h
            }), c !== o && e.emit("slidesLengthChange"), u.length !== m && (e.params.watchOverflow && e.checkOverflow(), e.emit("snapGridLengthChange")), d.length !== g && e.emit("slidesGridLengthChange"), (t.watchSlidesProgress || t.watchSlidesVisibility) && e.updateSlidesOffset()
        }, updateAutoHeight: function (e) {
            const t = this, i = [];
            let n, s = 0;
            if ("number" == typeof e ? t.setTransition(e) : !0 === e && t.setTransition(t.params.speed), "auto" !== t.params.slidesPerView && t.params.slidesPerView > 1) for (n = 0; n < Math.ceil(t.params.slidesPerView); n += 1) {
                const e = t.activeIndex + n;
                if (e > t.slides.length) break;
                i.push(t.slides.eq(e)[0])
            } else i.push(t.slides.eq(t.activeIndex)[0]);
            for (n = 0; n < i.length; n += 1) if (void 0 !== i[n]) {
                const e = i[n].offsetHeight;
                s = e > s ? e : s
            }
            s && t.$wrapperEl.css("height", `${s}px`)
        }, updateSlidesOffset: function () {
            const e = this, t = e.slides;
            for (let i = 0; i < t.length; i += 1) t[i].swiperSlideOffset = e.isHorizontal() ? t[i].offsetLeft : t[i].offsetTop
        }, updateSlidesProgress: function (e = this && this.translate || 0) {
            const t = this, i = t.params, {slides: n, rtlTranslate: s} = t;
            if (0 === n.length) return;
            void 0 === n[0].swiperSlideOffset && t.updateSlidesOffset();
            let r = -e;
            s && (r = e), n.removeClass(i.slideVisibleClass), t.visibleSlidesIndexes = [], t.visibleSlides = [];
            for (let e = 0; e < n.length; e += 1) {
                const a = n[e],
                    o = (r + (i.centeredSlides ? t.minTranslate() : 0) - a.swiperSlideOffset) / (a.swiperSlideSize + i.spaceBetween);
                if (i.watchSlidesVisibility) {
                    const s = -(r - a.swiperSlideOffset), o = s + t.slidesSizesGrid[e];
                    (s >= 0 && s < t.size - 1 || o > 1 && o <= t.size || s <= 0 && o >= t.size) && (t.visibleSlides.push(a), t.visibleSlidesIndexes.push(e), n.eq(e).addClass(i.slideVisibleClass))
                }
                a.progress = s ? -o : o
            }
            t.visibleSlides = te(t.visibleSlides)
        }, updateProgress: function (e = this && this.translate || 0) {
            const t = this, i = t.params, n = t.maxTranslate() - t.minTranslate();
            let {progress: s, isBeginning: r, isEnd: a} = t;
            const o = r, l = a;
            0 === n ? (s = 0, r = !0, a = !0) : (r = (s = (e - t.minTranslate()) / n) <= 0, a = s >= 1), se.extend(t, {
                progress: s,
                isBeginning: r,
                isEnd: a
            }), (i.watchSlidesProgress || i.watchSlidesVisibility) && t.updateSlidesProgress(e), r && !o && t.emit("reachBeginning toEdge"), a && !l && t.emit("reachEnd toEdge"), (o && !r || l && !a) && t.emit("fromEdge"), t.emit("progress", s)
        }, updateSlidesClasses: function () {
            const e = this, {slides: t, params: i, $wrapperEl: n, activeIndex: s, realIndex: r} = e,
                a = e.virtual && i.virtual.enabled;
            let o;
            t.removeClass(`${i.slideActiveClass} ${i.slideNextClass} ${i.slidePrevClass} ${i.slideDuplicateActiveClass} ${i.slideDuplicateNextClass} ${i.slideDuplicatePrevClass}`), (o = a ? e.$wrapperEl.find(`.${i.slideClass}[data-swiper-slide-index="${s}"]`) : t.eq(s)).addClass(i.slideActiveClass), i.loop && (o.hasClass(i.slideDuplicateClass) ? n.children(`.${i.slideClass}:not(.${i.slideDuplicateClass})[data-swiper-slide-index="${r}"]`).addClass(i.slideDuplicateActiveClass) : n.children(`.${i.slideClass}.${i.slideDuplicateClass}[data-swiper-slide-index="${r}"]`).addClass(i.slideDuplicateActiveClass));
            let l = o.nextAll(`.${i.slideClass}`).eq(0).addClass(i.slideNextClass);
            i.loop && 0 === l.length && (l = t.eq(0)).addClass(i.slideNextClass);
            let c = o.prevAll(`.${i.slideClass}`).eq(0).addClass(i.slidePrevClass);
            i.loop && 0 === c.length && (c = t.eq(-1)).addClass(i.slidePrevClass), i.loop && (l.hasClass(i.slideDuplicateClass) ? n.children(`.${i.slideClass}:not(.${i.slideDuplicateClass})[data-swiper-slide-index="${l.attr("data-swiper-slide-index")}"]`).addClass(i.slideDuplicateNextClass) : n.children(`.${i.slideClass}.${i.slideDuplicateClass}[data-swiper-slide-index="${l.attr("data-swiper-slide-index")}"]`).addClass(i.slideDuplicateNextClass), c.hasClass(i.slideDuplicateClass) ? n.children(`.${i.slideClass}:not(.${i.slideDuplicateClass})[data-swiper-slide-index="${c.attr("data-swiper-slide-index")}"]`).addClass(i.slideDuplicatePrevClass) : n.children(`.${i.slideClass}.${i.slideDuplicateClass}[data-swiper-slide-index="${c.attr("data-swiper-slide-index")}"]`).addClass(i.slideDuplicatePrevClass))
        }, updateActiveIndex: function (e) {
            const t = this, i = t.rtlTranslate ? t.translate : -t.translate, {
                slidesGrid: n,
                snapGrid: s,
                params: r,
                activeIndex: a,
                realIndex: o,
                snapIndex: l
            } = t;
            let c, u = e;
            if (void 0 === u) {
                for (let e = 0; e < n.length; e += 1) void 0 !== n[e + 1] ? i >= n[e] && i < n[e + 1] - (n[e + 1] - n[e]) / 2 ? u = e : i >= n[e] && i < n[e + 1] && (u = e + 1) : i >= n[e] && (u = e);
                r.normalizeSlideIndex && (u < 0 || void 0 === u) && (u = 0)
            }
            if ((c = s.indexOf(i) >= 0 ? s.indexOf(i) : Math.floor(u / r.slidesPerGroup)) >= s.length && (c = s.length - 1), u === a) return void (c !== l && (t.snapIndex = c, t.emit("snapIndexChange")));
            const d = parseInt(t.slides.eq(u).attr("data-swiper-slide-index") || u, 10);
            se.extend(t, {
                snapIndex: c,
                realIndex: d,
                previousIndex: a,
                activeIndex: u
            }), t.emit("activeIndexChange"), t.emit("snapIndexChange"), o !== d && t.emit("realIndexChange"), (t.initialized || t.runCallbacksOnInit) && t.emit("slideChange")
        }, updateClickedSlide: function (e) {
            const t = this, i = t.params, n = te(e.target).closest(`.${i.slideClass}`)[0];
            let s = !1;
            if (n) for (let e = 0; e < t.slides.length; e += 1) t.slides[e] === n && (s = !0);
            if (!n || !s) return t.clickedSlide = void 0, void (t.clickedIndex = void 0);
            t.clickedSlide = n, t.virtual && t.params.virtual.enabled ? t.clickedIndex = parseInt(te(n).attr("data-swiper-slide-index"), 10) : t.clickedIndex = te(n).index(), i.slideToClickedSlide && void 0 !== t.clickedIndex && t.clickedIndex !== t.activeIndex && t.slideToClickedSlide()
        }
    };
    var ce = {
        getTranslate: function (e = (this.isHorizontal() ? "x" : "y")) {
            const {params: t, rtlTranslate: i, translate: n, $wrapperEl: s} = this;
            if (t.virtualTranslate) return i ? -n : n;
            let r = se.getTranslate(s[0], e);
            return i && (r = -r), r || 0
        }, setTranslate: function (e, t) {
            const i = this, {rtlTranslate: n, params: s, $wrapperEl: r, progress: a} = i;
            let o, l = 0, c = 0;
            i.isHorizontal() ? l = n ? -e : e : c = e, s.roundLengths && (l = Math.floor(l), c = Math.floor(c)), s.virtualTranslate || (re.transforms3d ? r.transform(`translate3d(${l}px, ${c}px, 0px)`) : r.transform(`translate(${l}px, ${c}px)`)), i.previousTranslate = i.translate, i.translate = i.isHorizontal() ? l : c;
            const u = i.maxTranslate() - i.minTranslate();
            (o = 0 === u ? 0 : (e - i.minTranslate()) / u) !== a && i.updateProgress(e), i.emit("setTranslate", i.translate, t)
        }, minTranslate: function () {
            return -this.snapGrid[0]
        }, maxTranslate: function () {
            return -this.snapGrid[this.snapGrid.length - 1]
        }
    };
    var ue = {
        setTransition: function (e, t) {
            this.$wrapperEl.transition(e), this.emit("setTransition", e, t)
        }, transitionStart: function (e = !0, t) {
            const i = this, {activeIndex: n, params: s, previousIndex: r} = i;
            s.autoHeight && i.updateAutoHeight();
            let a = t;
            if (a || (a = n > r ? "next" : n < r ? "prev" : "reset"), i.emit("transitionStart"), e && n !== r) {
                if ("reset" === a) return void i.emit("slideResetTransitionStart");
                i.emit("slideChangeTransitionStart"), "next" === a ? i.emit("slideNextTransitionStart") : i.emit("slidePrevTransitionStart")
            }
        }, transitionEnd: function (e = !0, t) {
            const i = this, {activeIndex: n, previousIndex: s} = i;
            i.animating = !1, i.setTransition(0);
            let r = t;
            if (r || (r = n > s ? "next" : n < s ? "prev" : "reset"), i.emit("transitionEnd"), e && n !== s) {
                if ("reset" === r) return void i.emit("slideResetTransitionEnd");
                i.emit("slideChangeTransitionEnd"), "next" === r ? i.emit("slideNextTransitionEnd") : i.emit("slidePrevTransitionEnd")
            }
        }
    };
    var de = {
        slideTo: function (e = 0, t = this.params.speed, i = !0, n) {
            const s = this;
            let r = e;
            r < 0 && (r = 0);
            const {params: a, snapGrid: o, slidesGrid: l, previousIndex: c, activeIndex: u, rtlTranslate: d} = s;
            if (s.animating && a.preventInteractionOnTransition) return !1;
            let h = Math.floor(r / a.slidesPerGroup);
            h >= o.length && (h = o.length - 1), (u || a.initialSlide || 0) === (c || 0) && i && s.emit("beforeSlideChangeStart");
            const p = -o[h];
            if (s.updateProgress(p), a.normalizeSlideIndex) for (let e = 0; e < l.length; e += 1) -Math.floor(100 * p) >= Math.floor(100 * l[e]) && (r = e);
            if (s.initialized && r !== u) {
                if (!s.allowSlideNext && p < s.translate && p < s.minTranslate()) return !1;
                if (!s.allowSlidePrev && p > s.translate && p > s.maxTranslate() && (u || 0) !== r) return !1
            }
            let f;
            return f = r > u ? "next" : r < u ? "prev" : "reset", d && -p === s.translate || !d && p === s.translate ? (s.updateActiveIndex(r), a.autoHeight && s.updateAutoHeight(), s.updateSlidesClasses(), "slide" !== a.effect && s.setTranslate(p), "reset" !== f && (s.transitionStart(i, f), s.transitionEnd(i, f)), !1) : (0 !== t && re.transition ? (s.setTransition(t), s.setTranslate(p), s.updateActiveIndex(r), s.updateSlidesClasses(), s.emit("beforeTransitionStart", t, n), s.transitionStart(i, f), s.animating || (s.animating = !0, s.onSlideToWrapperTransitionEnd || (s.onSlideToWrapperTransitionEnd = function (e) {
                s && !s.destroyed && e.target === this && (s.$wrapperEl[0].removeEventListener("transitionend", s.onSlideToWrapperTransitionEnd), s.$wrapperEl[0].removeEventListener("webkitTransitionEnd", s.onSlideToWrapperTransitionEnd), s.onSlideToWrapperTransitionEnd = null, delete s.onSlideToWrapperTransitionEnd, s.transitionEnd(i, f))
            }), s.$wrapperEl[0].addEventListener("transitionend", s.onSlideToWrapperTransitionEnd), s.$wrapperEl[0].addEventListener("webkitTransitionEnd", s.onSlideToWrapperTransitionEnd))) : (s.setTransition(0), s.setTranslate(p), s.updateActiveIndex(r), s.updateSlidesClasses(), s.emit("beforeTransitionStart", t, n), s.transitionStart(i, f), s.transitionEnd(i, f)), !0)
        }, slideToLoop: function (e = 0, t = this.params.speed, i = !0, n) {
            const s = this;
            let r = e;
            return s.params.loop && (r += s.loopedSlides), s.slideTo(r, t, i, n)
        }, slideNext: function (e = this.params.speed, t = !0, i) {
            const n = this, {params: s, animating: r} = n;
            return s.loop ? !r && (n.loopFix(), n._clientLeft = n.$wrapperEl[0].clientLeft, n.slideTo(n.activeIndex + s.slidesPerGroup, e, t, i)) : n.slideTo(n.activeIndex + s.slidesPerGroup, e, t, i)
        }, slidePrev: function (e = this.params.speed, t = !0, i) {
            const n = this, {params: s, animating: r, snapGrid: a, slidesGrid: o, rtlTranslate: l} = n;
            if (s.loop) {
                if (r) return !1;
                n.loopFix(), n._clientLeft = n.$wrapperEl[0].clientLeft
            }

            function c(e) {
                return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e)
            }

            const u = c(l ? n.translate : -n.translate), d = a.map(e => c(e)),
                h = (o.map(e => c(e)), a[d.indexOf(u)], a[d.indexOf(u) - 1]);
            let p;
            return void 0 !== h && (p = o.indexOf(h)) < 0 && (p = n.activeIndex - 1), n.slideTo(p, e, t, i)
        }, slideReset: function (e = this.params.speed, t = !0, i) {
            return this.slideTo(this.activeIndex, e, t, i)
        }, slideToClosest: function (e = this.params.speed, t = !0, i) {
            const n = this;
            let s = n.activeIndex;
            const r = Math.floor(s / n.params.slidesPerGroup);
            if (r < n.snapGrid.length - 1) {
                const e = n.rtlTranslate ? n.translate : -n.translate, t = n.snapGrid[r];
                e - t > (n.snapGrid[r + 1] - t) / 2 && (s = n.params.slidesPerGroup)
            }
            return n.slideTo(s, e, t, i)
        }, slideToClickedSlide: function () {
            const e = this, {params: t, $wrapperEl: i} = e,
                n = "auto" === t.slidesPerView ? e.slidesPerViewDynamic() : t.slidesPerView;
            let s, r = e.clickedIndex;
            if (t.loop) {
                if (e.animating) return;
                s = parseInt(te(e.clickedSlide).attr("data-swiper-slide-index"), 10), t.centeredSlides ? r < e.loopedSlides - n / 2 || r > e.slides.length - e.loopedSlides + n / 2 ? (e.loopFix(), r = i.children(`.${t.slideClass}[data-swiper-slide-index="${s}"]:not(.${t.slideDuplicateClass})`).eq(0).index(), se.nextTick(() => {
                    e.slideTo(r)
                })) : e.slideTo(r) : r > e.slides.length - n ? (e.loopFix(), r = i.children(`.${t.slideClass}[data-swiper-slide-index="${s}"]:not(.${t.slideDuplicateClass})`).eq(0).index(), se.nextTick(() => {
                    e.slideTo(r)
                })) : e.slideTo(r)
            } else e.slideTo(r)
        }
    };
    var he = {
        loopCreate: function () {
            const e = this, {params: t, $wrapperEl: i} = e;
            i.children(`.${t.slideClass}.${t.slideDuplicateClass}`).remove();
            let n = i.children(`.${t.slideClass}`);
            if (t.loopFillGroupWithBlank) {
                const e = t.slidesPerGroup - n.length % t.slidesPerGroup;
                if (e !== t.slidesPerGroup) {
                    for (let n = 0; n < e; n += 1) {
                        const e = te(Q.createElement("div")).addClass(`${t.slideClass} ${t.slideBlankClass}`);
                        i.append(e)
                    }
                    n = i.children(`.${t.slideClass}`)
                }
            }
            "auto" !== t.slidesPerView || t.loopedSlides || (t.loopedSlides = n.length), e.loopedSlides = parseInt(t.loopedSlides || t.slidesPerView, 10), e.loopedSlides += t.loopAdditionalSlides, e.loopedSlides > n.length && (e.loopedSlides = n.length);
            const s = [], r = [];
            n.each((t, i) => {
                const a = te(i);
                t < e.loopedSlides && r.push(i), t < n.length && t >= n.length - e.loopedSlides && s.push(i), a.attr("data-swiper-slide-index", t)
            });
            for (let e = 0; e < r.length; e += 1) i.append(te(r[e].cloneNode(!0)).addClass(t.slideDuplicateClass));
            for (let e = s.length - 1; e >= 0; e -= 1) i.prepend(te(s[e].cloneNode(!0)).addClass(t.slideDuplicateClass))
        }, loopFix: function () {
            const e = this, {
                params: t,
                activeIndex: i,
                slides: n,
                loopedSlides: s,
                allowSlidePrev: r,
                allowSlideNext: a,
                snapGrid: o,
                rtlTranslate: l
            } = e;
            let c;
            e.allowSlidePrev = !0, e.allowSlideNext = !0;
            const u = -o[i] - e.getTranslate();
            if (i < s) {
                c = n.length - 3 * s + i, c += s, e.slideTo(c, 0, !1, !0) && 0 !== u && e.setTranslate((l ? -e.translate : e.translate) - u)
            } else if ("auto" === t.slidesPerView && i >= 2 * s || i >= n.length - s) {
                c = -n.length + i + s, c += s, e.slideTo(c, 0, !1, !0) && 0 !== u && e.setTranslate((l ? -e.translate : e.translate) - u)
            }
            e.allowSlidePrev = r, e.allowSlideNext = a
        }, loopDestroy: function () {
            const {$wrapperEl: e, params: t, slides: i} = this;
            e.children(`.${t.slideClass}.${t.slideDuplicateClass},.${t.slideClass}.${t.slideBlankClass}`).remove(), i.removeAttr("data-swiper-slide-index")
        }
    };
    var pe = {
        setGrabCursor: function (e) {
            if (re.touch || !this.params.simulateTouch || this.params.watchOverflow && this.isLocked) return;
            const t = this.el;
            t.style.cursor = "move", t.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab", t.style.cursor = e ? "-moz-grabbin" : "-moz-grab", t.style.cursor = e ? "grabbing" : "grab"
        }, unsetGrabCursor: function () {
            re.touch || this.params.watchOverflow && this.isLocked || (this.el.style.cursor = "")
        }
    };
    var fe = {
        appendSlide: function (e) {
            const t = this, {$wrapperEl: i, params: n} = t;
            if (n.loop && t.loopDestroy(), "object" == typeof e && "length" in e) for (let t = 0; t < e.length; t += 1) e[t] && i.append(e[t]); else i.append(e);
            n.loop && t.loopCreate(), n.observer && re.observer || t.update()
        }, prependSlide: function (e) {
            const t = this, {params: i, $wrapperEl: n, activeIndex: s} = t;
            i.loop && t.loopDestroy();
            let r = s + 1;
            if ("object" == typeof e && "length" in e) {
                for (let t = 0; t < e.length; t += 1) e[t] && n.prepend(e[t]);
                r = s + e.length
            } else n.prepend(e);
            i.loop && t.loopCreate(), i.observer && re.observer || t.update(), t.slideTo(r, 0, !1)
        }, addSlide: function (e, t) {
            const i = this, {$wrapperEl: n, params: s, activeIndex: r} = i;
            let a = r;
            s.loop && (a -= i.loopedSlides, i.loopDestroy(), i.slides = n.children(`.${s.slideClass}`));
            const o = i.slides.length;
            if (e <= 0) return void i.prependSlide(t);
            if (e >= o) return void i.appendSlide(t);
            let l = a > e ? a + 1 : a;
            const c = [];
            for (let t = o - 1; t >= e; t -= 1) {
                const e = i.slides.eq(t);
                e.remove(), c.unshift(e)
            }
            if ("object" == typeof t && "length" in t) {
                for (let e = 0; e < t.length; e += 1) t[e] && n.append(t[e]);
                l = a > e ? a + t.length : a
            } else n.append(t);
            for (let e = 0; e < c.length; e += 1) n.append(c[e]);
            s.loop && i.loopCreate(), s.observer && re.observer || i.update(), s.loop ? i.slideTo(l + i.loopedSlides, 0, !1) : i.slideTo(l, 0, !1)
        }, removeSlide: function (e) {
            const t = this, {params: i, $wrapperEl: n, activeIndex: s} = t;
            let r = s;
            i.loop && (r -= t.loopedSlides, t.loopDestroy(), t.slides = n.children(`.${i.slideClass}`));
            let a, o = r;
            if ("object" == typeof e && "length" in e) {
                for (let i = 0; i < e.length; i += 1) a = e[i], t.slides[a] && t.slides.eq(a).remove(), a < o && (o -= 1);
                o = Math.max(o, 0)
            } else a = e, t.slides[a] && t.slides.eq(a).remove(), a < o && (o -= 1), o = Math.max(o, 0);
            i.loop && t.loopCreate(), i.observer && re.observer || t.update(), i.loop ? t.slideTo(o + t.loopedSlides, 0, !1) : t.slideTo(o, 0, !1)
        }, removeAllSlides: function () {
            const e = this, t = [];
            for (let i = 0; i < e.slides.length; i += 1) t.push(i);
            e.removeSlide(t)
        }
    };
    const me = function () {
        const e = J.navigator.userAgent, t = {
                ios: !1,
                android: !1,
                androidChrome: !1,
                desktop: !1,
                windows: !1,
                iphone: !1,
                ipod: !1,
                ipad: !1,
                cordova: J.cordova || J.phonegap,
                phonegap: J.cordova || J.phonegap
            }, i = e.match(/(Windows Phone);?[\s\/]+([\d.]+)?/), n = e.match(/(Android);?[\s\/]+([\d.]+)?/),
            s = e.match(/(iPad).*OS\s([\d_]+)/), r = e.match(/(iPod)(.*OS\s([\d_]+))?/),
            a = !s && e.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
        if (i && (t.os = "windows", t.osVersion = i[2], t.windows = !0), n && !i && (t.os = "android", t.osVersion = n[2], t.android = !0, t.androidChrome = e.toLowerCase().indexOf("chrome") >= 0), (s || a || r) && (t.os = "ios", t.ios = !0), a && !r && (t.osVersion = a[2].replace(/_/g, "."), t.iphone = !0), s && (t.osVersion = s[2].replace(/_/g, "."), t.ipad = !0), r && (t.osVersion = r[3] ? r[3].replace(/_/g, ".") : null, t.iphone = !0), t.ios && t.osVersion && e.indexOf("Version/") >= 0 && "10" === t.osVersion.split(".")[0] && (t.osVersion = e.toLowerCase().split("version/")[1].split(" ")[0]), t.desktop = !(t.os || t.android || t.webView), t.webView = (a || s || r) && e.match(/.*AppleWebKit(?!.*Safari)/i), t.os && "ios" === t.os) {
            const e = t.osVersion.split("."), i = Q.querySelector('meta[name="viewport"]');
            t.minimalUi = !t.webView && (r || a) && (1 * e[0] == 7 ? 1 * e[1] >= 1 : 1 * e[0] > 7) && i && i.getAttribute("content").indexOf("minimal-ui") >= 0
        }
        return t.pixelRatio = J.devicePixelRatio || 1, t
    }();

    function ge() {
        const e = this, {params: t, el: i} = e;
        if (i && 0 === i.offsetWidth) return;
        t.breakpoints && e.setBreakpoint();
        const {allowSlideNext: n, allowSlidePrev: s, snapGrid: r} = e;
        if (e.allowSlideNext = !0, e.allowSlidePrev = !0, e.updateSize(), e.updateSlides(), t.freeMode) {
            const i = Math.min(Math.max(e.translate, e.maxTranslate()), e.minTranslate());
            e.setTranslate(i), e.updateActiveIndex(), e.updateSlidesClasses(), t.autoHeight && e.updateAutoHeight()
        } else e.updateSlidesClasses(), ("auto" === t.slidesPerView || t.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0);
        e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.run(), e.allowSlidePrev = s, e.allowSlideNext = n, e.params.watchOverflow && r !== e.snapGrid && e.checkOverflow()
    }

    var ve = {
        init: !0,
        direction: "horizontal",
        touchEventsTarget: "container",
        initialSlide: 0,
        speed: 300,
        preventInteractionOnTransition: !1,
        edgeSwipeDetection: !1,
        edgeSwipeThreshold: 20,
        freeMode: !1,
        freeModeMomentum: !0,
        freeModeMomentumRatio: 1,
        freeModeMomentumBounce: !0,
        freeModeMomentumBounceRatio: 1,
        freeModeMomentumVelocityRatio: 1,
        freeModeSticky: !1,
        freeModeMinimumVelocity: .02,
        autoHeight: !1,
        setWrapperSize: !1,
        virtualTranslate: !1,
        effect: "slide",
        breakpoints: void 0,
        breakpointsInverse: !1,
        spaceBetween: 0,
        slidesPerView: 1,
        slidesPerColumn: 1,
        slidesPerColumnFill: "column",
        slidesPerGroup: 1,
        centeredSlides: !1,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
        normalizeSlideIndex: !0,
        centerInsufficientSlides: !1,
        watchOverflow: !1,
        roundLengths: !1,
        touchRatio: 1,
        touchAngle: 45,
        simulateTouch: !0,
        shortSwipes: !0,
        longSwipes: !0,
        longSwipesRatio: .5,
        longSwipesMs: 300,
        followFinger: !0,
        allowTouchMove: !0,
        threshold: 0,
        touchMoveStopPropagation: !0,
        touchStartPreventDefault: !0,
        touchStartForcePreventDefault: !1,
        touchReleaseOnEdges: !1,
        uniqueNavElements: !0,
        resistance: !0,
        resistanceRatio: .85,
        watchSlidesProgress: !1,
        watchSlidesVisibility: !1,
        grabCursor: !1,
        preventClicks: !0,
        preventClicksPropagation: !0,
        slideToClickedSlide: !1,
        preloadImages: !0,
        updateOnImagesReady: !0,
        loop: !1,
        loopAdditionalSlides: 0,
        loopedSlides: null,
        loopFillGroupWithBlank: !1,
        allowSlidePrev: !0,
        allowSlideNext: !0,
        swipeHandler: null,
        noSwiping: !0,
        noSwipingClass: "swiper-no-swiping",
        noSwipingSelector: null,
        passiveListeners: !0,
        containerModifierClass: "swiper-container-",
        slideClass: "swiper-slide",
        slideBlankClass: "swiper-slide-invisible-blank",
        slideActiveClass: "swiper-slide-active",
        slideDuplicateActiveClass: "swiper-slide-duplicate-active",
        slideVisibleClass: "swiper-slide-visible",
        slideDuplicateClass: "swiper-slide-duplicate",
        slideNextClass: "swiper-slide-next",
        slideDuplicateNextClass: "swiper-slide-duplicate-next",
        slidePrevClass: "swiper-slide-prev",
        slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
        wrapperClass: "swiper-wrapper",
        runCallbacksOnInit: !0
    };
    const ye = {
        update: le, translate: ce, transition: ue, slide: de, loop: he, grabCursor: pe, manipulation: fe, events: {
            attachEvents: function () {
                const e = this, {params: t, touchEvents: i, el: n, wrapperEl: s} = e;
                e.onTouchStart = function (e) {
                    const t = this, i = t.touchEventsData, {params: n, touches: s} = t;
                    if (t.animating && n.preventInteractionOnTransition) return;
                    let r = e;
                    if (r.originalEvent && (r = r.originalEvent), i.isTouchEvent = "touchstart" === r.type, !i.isTouchEvent && "which" in r && 3 === r.which) return;
                    if (!i.isTouchEvent && "button" in r && r.button > 0) return;
                    if (i.isTouched && i.isMoved) return;
                    if (n.noSwiping && te(r.target).closest(n.noSwipingSelector ? n.noSwipingSelector : `.${n.noSwipingClass}`)[0]) return void (t.allowClick = !0);
                    if (n.swipeHandler && !te(r).closest(n.swipeHandler)[0]) return;
                    s.currentX = "touchstart" === r.type ? r.targetTouches[0].pageX : r.pageX, s.currentY = "touchstart" === r.type ? r.targetTouches[0].pageY : r.pageY;
                    const a = s.currentX, o = s.currentY, l = n.edgeSwipeDetection || n.iOSEdgeSwipeDetection,
                        c = n.edgeSwipeThreshold || n.iOSEdgeSwipeThreshold;
                    if (!l || !(a <= c || a >= J.screen.width - c)) {
                        if (se.extend(i, {
                            isTouched: !0,
                            isMoved: !1,
                            allowTouchCallbacks: !0,
                            isScrolling: void 0,
                            startMoving: void 0
                        }), s.startX = a, s.startY = o, i.touchStartTime = se.now(), t.allowClick = !0, t.updateSize(), t.swipeDirection = void 0, n.threshold > 0 && (i.allowThresholdMove = !1), "touchstart" !== r.type) {
                            let e = !0;
                            te(r.target).is(i.formElements) && (e = !1), Q.activeElement && te(Q.activeElement).is(i.formElements) && Q.activeElement !== r.target && Q.activeElement.blur();
                            const s = e && t.allowTouchMove && n.touchStartPreventDefault;
                            (n.touchStartForcePreventDefault || s) && r.preventDefault()
                        }
                        t.emit("touchStart", r)
                    }
                }.bind(e), e.onTouchMove = function (e) {
                    const t = this, i = t.touchEventsData, {params: n, touches: s, rtlTranslate: r} = t;
                    let a = e;
                    if (a.originalEvent && (a = a.originalEvent), !i.isTouched) return void (i.startMoving && i.isScrolling && t.emit("touchMoveOpposite", a));
                    if (i.isTouchEvent && "mousemove" === a.type) return;
                    const o = "touchmove" === a.type ? a.targetTouches[0].pageX : a.pageX,
                        l = "touchmove" === a.type ? a.targetTouches[0].pageY : a.pageY;
                    if (a.preventedByNestedSwiper) return s.startX = o, void (s.startY = l);
                    if (!t.allowTouchMove) return t.allowClick = !1, void (i.isTouched && (se.extend(s, {
                        startX: o,
                        startY: l,
                        currentX: o,
                        currentY: l
                    }), i.touchStartTime = se.now()));
                    if (i.isTouchEvent && n.touchReleaseOnEdges && !n.loop) if (t.isVertical()) {
                        if (l < s.startY && t.translate <= t.maxTranslate() || l > s.startY && t.translate >= t.minTranslate()) return i.isTouched = !1, void (i.isMoved = !1)
                    } else if (o < s.startX && t.translate <= t.maxTranslate() || o > s.startX && t.translate >= t.minTranslate()) return;
                    if (i.isTouchEvent && Q.activeElement && a.target === Q.activeElement && te(a.target).is(i.formElements)) return i.isMoved = !0, void (t.allowClick = !1);
                    if (i.allowTouchCallbacks && t.emit("touchMove", a), a.targetTouches && a.targetTouches.length > 1) return;
                    s.currentX = o, s.currentY = l;
                    const c = s.currentX - s.startX, u = s.currentY - s.startY;
                    if (t.params.threshold && Math.sqrt(c ** 2 + u ** 2) < t.params.threshold) return;
                    if (void 0 === i.isScrolling) {
                        let e;
                        t.isHorizontal() && s.currentY === s.startY || t.isVertical() && s.currentX === s.startX ? i.isScrolling = !1 : c * c + u * u >= 25 && (e = 180 * Math.atan2(Math.abs(u), Math.abs(c)) / Math.PI, i.isScrolling = t.isHorizontal() ? e > n.touchAngle : 90 - e > n.touchAngle)
                    }
                    if (i.isScrolling && t.emit("touchMoveOpposite", a), void 0 === i.startMoving && (s.currentX === s.startX && s.currentY === s.startY || (i.startMoving = !0)), i.isScrolling) return void (i.isTouched = !1);
                    if (!i.startMoving) return;
                    t.allowClick = !1, a.preventDefault(), n.touchMoveStopPropagation && !n.nested && a.stopPropagation(), i.isMoved || (n.loop && t.loopFix(), i.startTranslate = t.getTranslate(), t.setTransition(0), t.animating && t.$wrapperEl.trigger("webkitTransitionEnd transitionend"), i.allowMomentumBounce = !1, !n.grabCursor || !0 !== t.allowSlideNext && !0 !== t.allowSlidePrev || t.setGrabCursor(!0), t.emit("sliderFirstMove", a)), t.emit("sliderMove", a), i.isMoved = !0;
                    let d = t.isHorizontal() ? c : u;
                    s.diff = d, d *= n.touchRatio, r && (d = -d), t.swipeDirection = d > 0 ? "prev" : "next", i.currentTranslate = d + i.startTranslate;
                    let h = !0, p = n.resistanceRatio;
                    if (n.touchReleaseOnEdges && (p = 0), d > 0 && i.currentTranslate > t.minTranslate() ? (h = !1, n.resistance && (i.currentTranslate = t.minTranslate() - 1 + (-t.minTranslate() + i.startTranslate + d) ** p)) : d < 0 && i.currentTranslate < t.maxTranslate() && (h = !1, n.resistance && (i.currentTranslate = t.maxTranslate() + 1 - (t.maxTranslate() - i.startTranslate - d) ** p)), h && (a.preventedByNestedSwiper = !0), !t.allowSlideNext && "next" === t.swipeDirection && i.currentTranslate < i.startTranslate && (i.currentTranslate = i.startTranslate), !t.allowSlidePrev && "prev" === t.swipeDirection && i.currentTranslate > i.startTranslate && (i.currentTranslate = i.startTranslate), n.threshold > 0) {
                        if (!(Math.abs(d) > n.threshold || i.allowThresholdMove)) return void (i.currentTranslate = i.startTranslate);
                        if (!i.allowThresholdMove) return i.allowThresholdMove = !0, s.startX = s.currentX, s.startY = s.currentY, i.currentTranslate = i.startTranslate, void (s.diff = t.isHorizontal() ? s.currentX - s.startX : s.currentY - s.startY)
                    }
                    n.followFinger && ((n.freeMode || n.watchSlidesProgress || n.watchSlidesVisibility) && (t.updateActiveIndex(), t.updateSlidesClasses()), n.freeMode && (0 === i.velocities.length && i.velocities.push({
                        position: s[t.isHorizontal() ? "startX" : "startY"],
                        time: i.touchStartTime
                    }), i.velocities.push({
                        position: s[t.isHorizontal() ? "currentX" : "currentY"],
                        time: se.now()
                    })), t.updateProgress(i.currentTranslate), t.setTranslate(i.currentTranslate))
                }.bind(e), e.onTouchEnd = function (e) {
                    const t = this, i = t.touchEventsData, {
                        params: n,
                        touches: s,
                        rtlTranslate: r,
                        $wrapperEl: a,
                        slidesGrid: o,
                        snapGrid: l
                    } = t;
                    let c = e;
                    if (c.originalEvent && (c = c.originalEvent), i.allowTouchCallbacks && t.emit("touchEnd", c), i.allowTouchCallbacks = !1, !i.isTouched) return i.isMoved && n.grabCursor && t.setGrabCursor(!1), i.isMoved = !1, void (i.startMoving = !1);
                    n.grabCursor && i.isMoved && i.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
                    const u = se.now(), d = u - i.touchStartTime;
                    if (t.allowClick && (t.updateClickedSlide(c), t.emit("tap", c), d < 300 && u - i.lastClickTime > 300 && (i.clickTimeout && clearTimeout(i.clickTimeout), i.clickTimeout = se.nextTick(() => {
                        t && !t.destroyed && t.emit("click", c)
                    }, 300)), d < 300 && u - i.lastClickTime < 300 && (i.clickTimeout && clearTimeout(i.clickTimeout), t.emit("doubleTap", c))), i.lastClickTime = se.now(), se.nextTick(() => {
                        t.destroyed || (t.allowClick = !0)
                    }), !i.isTouched || !i.isMoved || !t.swipeDirection || 0 === s.diff || i.currentTranslate === i.startTranslate) return i.isTouched = !1, i.isMoved = !1, void (i.startMoving = !1);
                    let h;
                    if (i.isTouched = !1, i.isMoved = !1, i.startMoving = !1, h = n.followFinger ? r ? t.translate : -t.translate : -i.currentTranslate, n.freeMode) {
                        if (h < -t.minTranslate()) return void t.slideTo(t.activeIndex);
                        if (h > -t.maxTranslate()) return void (t.slides.length < l.length ? t.slideTo(l.length - 1) : t.slideTo(t.slides.length - 1));
                        if (n.freeModeMomentum) {
                            if (i.velocities.length > 1) {
                                const e = i.velocities.pop(), s = i.velocities.pop(), r = e.position - s.position,
                                    a = e.time - s.time;
                                t.velocity = r / a, t.velocity /= 2, Math.abs(t.velocity) < n.freeModeMinimumVelocity && (t.velocity = 0), (a > 150 || se.now() - e.time > 300) && (t.velocity = 0)
                            } else t.velocity = 0;
                            t.velocity *= n.freeModeMomentumVelocityRatio, i.velocities.length = 0;
                            let e = 1e3 * n.freeModeMomentumRatio;
                            const s = t.velocity * e;
                            let o = t.translate + s;
                            r && (o = -o);
                            let c, u = !1;
                            const d = 20 * Math.abs(t.velocity) * n.freeModeMomentumBounceRatio;
                            let h;
                            if (o < t.maxTranslate()) n.freeModeMomentumBounce ? (o + t.maxTranslate() < -d && (o = t.maxTranslate() - d), c = t.maxTranslate(), u = !0, i.allowMomentumBounce = !0) : o = t.maxTranslate(), n.loop && n.centeredSlides && (h = !0); else if (o > t.minTranslate()) n.freeModeMomentumBounce ? (o - t.minTranslate() > d && (o = t.minTranslate() + d), c = t.minTranslate(), u = !0, i.allowMomentumBounce = !0) : o = t.minTranslate(), n.loop && n.centeredSlides && (h = !0); else if (n.freeModeSticky) {
                                let e;
                                for (let t = 0; t < l.length; t += 1) if (l[t] > -o) {
                                    e = t;
                                    break
                                }
                                o = -(o = Math.abs(l[e] - o) < Math.abs(l[e - 1] - o) || "next" === t.swipeDirection ? l[e] : l[e - 1])
                            }
                            if (h && t.once("transitionEnd", () => {
                                t.loopFix()
                            }), 0 !== t.velocity) e = r ? Math.abs((-o - t.translate) / t.velocity) : Math.abs((o - t.translate) / t.velocity); else if (n.freeModeSticky) return void t.slideToClosest();
                            n.freeModeMomentumBounce && u ? (t.updateProgress(c), t.setTransition(e), t.setTranslate(o), t.transitionStart(!0, t.swipeDirection), t.animating = !0, a.transitionEnd(() => {
                                t && !t.destroyed && i.allowMomentumBounce && (t.emit("momentumBounce"), t.setTransition(n.speed), t.setTranslate(c), a.transitionEnd(() => {
                                    t && !t.destroyed && t.transitionEnd()
                                }))
                            })) : t.velocity ? (t.updateProgress(o), t.setTransition(e), t.setTranslate(o), t.transitionStart(!0, t.swipeDirection), t.animating || (t.animating = !0, a.transitionEnd(() => {
                                t && !t.destroyed && t.transitionEnd()
                            }))) : t.updateProgress(o), t.updateActiveIndex(), t.updateSlidesClasses()
                        } else if (n.freeModeSticky) return void t.slideToClosest();
                        return void ((!n.freeModeMomentum || d >= n.longSwipesMs) && (t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses()))
                    }
                    let p = 0, f = t.slidesSizesGrid[0];
                    for (let e = 0; e < o.length; e += n.slidesPerGroup) void 0 !== o[e + n.slidesPerGroup] ? h >= o[e] && h < o[e + n.slidesPerGroup] && (p = e, f = o[e + n.slidesPerGroup] - o[e]) : h >= o[e] && (p = e, f = o[o.length - 1] - o[o.length - 2]);
                    const m = (h - o[p]) / f;
                    if (d > n.longSwipesMs) {
                        if (!n.longSwipes) return void t.slideTo(t.activeIndex);
                        "next" === t.swipeDirection && (m >= n.longSwipesRatio ? t.slideTo(p + n.slidesPerGroup) : t.slideTo(p)), "prev" === t.swipeDirection && (m > 1 - n.longSwipesRatio ? t.slideTo(p + n.slidesPerGroup) : t.slideTo(p))
                    } else {
                        if (!n.shortSwipes) return void t.slideTo(t.activeIndex);
                        "next" === t.swipeDirection && t.slideTo(p + n.slidesPerGroup), "prev" === t.swipeDirection && t.slideTo(p)
                    }
                }.bind(e), e.onClick = function (e) {
                    const t = this;
                    t.allowClick || (t.params.preventClicks && e.preventDefault(), t.params.preventClicksPropagation && t.animating && (e.stopPropagation(), e.stopImmediatePropagation()))
                }.bind(e);
                const r = "container" === t.touchEventsTarget ? n : s, a = !!t.nested;
                if (re.touch || !re.pointerEvents && !re.prefixedPointerEvents) {
                    if (re.touch) {
                        const n = !("touchstart" !== i.start || !re.passiveListener || !t.passiveListeners) && {
                            passive: !0,
                            capture: !1
                        };
                        r.addEventListener(i.start, e.onTouchStart, n), r.addEventListener(i.move, e.onTouchMove, re.passiveListener ? {
                            passive: !1,
                            capture: a
                        } : a), r.addEventListener(i.end, e.onTouchEnd, n)
                    }
                    (t.simulateTouch && !me.ios && !me.android || t.simulateTouch && !re.touch && me.ios) && (r.addEventListener("mousedown", e.onTouchStart, !1), Q.addEventListener("mousemove", e.onTouchMove, a), Q.addEventListener("mouseup", e.onTouchEnd, !1))
                } else r.addEventListener(i.start, e.onTouchStart, !1), Q.addEventListener(i.move, e.onTouchMove, a), Q.addEventListener(i.end, e.onTouchEnd, !1);
                (t.preventClicks || t.preventClicksPropagation) && r.addEventListener("click", e.onClick, !0), e.on(me.ios || me.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", ge, !0)
            }, detachEvents: function () {
                const e = this, {params: t, touchEvents: i, el: n, wrapperEl: s} = e,
                    r = "container" === t.touchEventsTarget ? n : s, a = !!t.nested;
                if (re.touch || !re.pointerEvents && !re.prefixedPointerEvents) {
                    if (re.touch) {
                        const n = !("onTouchStart" !== i.start || !re.passiveListener || !t.passiveListeners) && {
                            passive: !0,
                            capture: !1
                        };
                        r.removeEventListener(i.start, e.onTouchStart, n), r.removeEventListener(i.move, e.onTouchMove, a), r.removeEventListener(i.end, e.onTouchEnd, n)
                    }
                    (t.simulateTouch && !me.ios && !me.android || t.simulateTouch && !re.touch && me.ios) && (r.removeEventListener("mousedown", e.onTouchStart, !1), Q.removeEventListener("mousemove", e.onTouchMove, a), Q.removeEventListener("mouseup", e.onTouchEnd, !1))
                } else r.removeEventListener(i.start, e.onTouchStart, !1), Q.removeEventListener(i.move, e.onTouchMove, a), Q.removeEventListener(i.end, e.onTouchEnd, !1);
                (t.preventClicks || t.preventClicksPropagation) && r.removeEventListener("click", e.onClick, !0), e.off(me.ios || me.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", ge)
            }
        }, breakpoints: {
            setBreakpoint: function () {
                const e = this, {activeIndex: t, initialized: i, loopedSlides: n = 0, params: s} = e, r = s.breakpoints;
                if (!r || r && 0 === Object.keys(r).length) return;
                const a = e.getBreakpoint(r);
                if (a && e.currentBreakpoint !== a) {
                    const o = a in r ? r[a] : void 0;
                    o && ["slidesPerView", "spaceBetween", "slidesPerGroup"].forEach(e => {
                        const t = o[e];
                        void 0 !== t && (o[e] = "slidesPerView" !== e || "AUTO" !== t && "auto" !== t ? "slidesPerView" === e ? parseFloat(t) : parseInt(t, 10) : "auto")
                    });
                    const l = o || e.originalParams, c = l.direction && l.direction !== s.direction,
                        u = s.loop && (l.slidesPerView !== s.slidesPerView || c);
                    c && i && e.changeDirection(), se.extend(e.params, l), se.extend(e, {
                        allowTouchMove: e.params.allowTouchMove,
                        allowSlideNext: e.params.allowSlideNext,
                        allowSlidePrev: e.params.allowSlidePrev
                    }), e.currentBreakpoint = a, u && i && (e.loopDestroy(), e.loopCreate(), e.updateSlides(), e.slideTo(t - n + e.loopedSlides, 0, !1)), e.emit("breakpoint", l)
                }
            }, getBreakpoint: function (e) {
                const t = this;
                if (!e) return;
                let i = !1;
                const n = [];
                Object.keys(e).forEach(e => {
                    n.push(e)
                }), n.sort((e, t) => parseInt(e, 10) - parseInt(t, 10));
                for (let e = 0; e < n.length; e += 1) {
                    const s = n[e];
                    t.params.breakpointsInverse ? s <= J.innerWidth && (i = s) : s >= J.innerWidth && !i && (i = s)
                }
                return i || "max"
            }
        }, checkOverflow: {
            checkOverflow: function () {
                const e = this, t = e.isLocked;
                e.isLocked = 1 === e.snapGrid.length, e.allowSlideNext = !e.isLocked, e.allowSlidePrev = !e.isLocked, t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock"), t && t !== e.isLocked && (e.isEnd = !1, e.navigation.update())
            }
        }, classes: {
            addClasses: function () {
                const {classNames: e, params: t, rtl: i, $el: n} = this, s = [];
                s.push("initialized"), s.push(t.direction), t.freeMode && s.push("free-mode"), re.flexbox || s.push("no-flexbox"), t.autoHeight && s.push("autoheight"), i && s.push("rtl"), t.slidesPerColumn > 1 && s.push("multirow"), me.android && s.push("android"), me.ios && s.push("ios"), (ae.isIE || ae.isEdge) && (re.pointerEvents || re.prefixedPointerEvents) && s.push(`wp8-${t.direction}`), s.forEach(i => {
                    e.push(t.containerModifierClass + i)
                }), n.addClass(e.join(" "))
            }, removeClasses: function () {
                const {$el: e, classNames: t} = this;
                e.removeClass(t.join(" "))
            }
        }, images: {
            loadImage: function (e, t, i, n, s, r) {
                let a;

                function o() {
                    r && r()
                }

                e.complete && s ? o() : t ? ((a = new J.Image).onload = o, a.onerror = o, n && (a.sizes = n), i && (a.srcset = i), t && (a.src = t)) : o()
            }, preloadImages: function () {
                const e = this;

                function t() {
                    null != e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1), e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(), e.emit("imagesReady")))
                }

                e.imagesToLoad = e.$el.find("img");
                for (let i = 0; i < e.imagesToLoad.length; i += 1) {
                    const n = e.imagesToLoad[i];
                    e.loadImage(n, n.currentSrc || n.getAttribute("src"), n.srcset || n.getAttribute("srcset"), n.sizes || n.getAttribute("sizes"), !0, t)
                }
            }
        }
    }, _e = {};

    class be extends oe {
        constructor(...e) {
            let t, i;
            1 === e.length && e[0].constructor && e[0].constructor === Object ? i = e[0] : [t, i] = e, i || (i = {}), i = se.extend({}, i), t && !i.el && (i.el = t), super(i), Object.keys(ye).forEach(e => {
                Object.keys(ye[e]).forEach(t => {
                    be.prototype[t] || (be.prototype[t] = ye[e][t])
                })
            });
            const n = this;
            void 0 === n.modules && (n.modules = {}), Object.keys(n.modules).forEach(e => {
                const t = n.modules[e];
                if (t.params) {
                    const e = Object.keys(t.params)[0], n = t.params[e];
                    if ("object" != typeof n || null === n) return;
                    if (!(e in i && "enabled" in n)) return;
                    !0 === i[e] && (i[e] = {enabled: !0}), "object" != typeof i[e] || "enabled" in i[e] || (i[e].enabled = !0), i[e] || (i[e] = {enabled: !1})
                }
            });
            const s = se.extend({}, ve);
            n.useModulesParams(s), n.params = se.extend({}, s, _e, i), n.originalParams = se.extend({}, n.params), n.passedParams = se.extend({}, i), n.$ = te;
            const r = te(n.params.el);
            if (!(t = r[0])) return;
            if (r.length > 1) {
                const e = [];
                return r.each((t, n) => {
                    const s = se.extend({}, i, {el: n});
                    e.push(new be(s))
                }), e
            }
            t.swiper = n, r.data("swiper", n);
            const a = r.children(`.${n.params.wrapperClass}`);
            return se.extend(n, {
                $el: r,
                el: t,
                $wrapperEl: a,
                wrapperEl: a[0],
                classNames: [],
                slides: te(),
                slidesGrid: [],
                snapGrid: [],
                slidesSizesGrid: [],
                isHorizontal: () => "horizontal" === n.params.direction,
                isVertical: () => "vertical" === n.params.direction,
                rtl: "rtl" === t.dir.toLowerCase() || "rtl" === r.css("direction"),
                rtlTranslate: "horizontal" === n.params.direction && ("rtl" === t.dir.toLowerCase() || "rtl" === r.css("direction")),
                wrongRTL: "-webkit-box" === a.css("display"),
                activeIndex: 0,
                realIndex: 0,
                isBeginning: !0,
                isEnd: !1,
                translate: 0,
                previousTranslate: 0,
                progress: 0,
                velocity: 0,
                animating: !1,
                allowSlideNext: n.params.allowSlideNext,
                allowSlidePrev: n.params.allowSlidePrev,
                touchEvents: function () {
                    const e = ["touchstart", "touchmove", "touchend"];
                    let t = ["mousedown", "mousemove", "mouseup"];
                    return re.pointerEvents ? t = ["pointerdown", "pointermove", "pointerup"] : re.prefixedPointerEvents && (t = ["MSPointerDown", "MSPointerMove", "MSPointerUp"]), n.touchEventsTouch = {
                        start: e[0],
                        move: e[1],
                        end: e[2]
                    }, n.touchEventsDesktop = {
                        start: t[0],
                        move: t[1],
                        end: t[2]
                    }, re.touch || !n.params.simulateTouch ? n.touchEventsTouch : n.touchEventsDesktop
                }(),
                touchEventsData: {
                    isTouched: void 0,
                    isMoved: void 0,
                    allowTouchCallbacks: void 0,
                    touchStartTime: void 0,
                    isScrolling: void 0,
                    currentTranslate: void 0,
                    startTranslate: void 0,
                    allowThresholdMove: void 0,
                    formElements: "input, select, option, textarea, button, video",
                    lastClickTime: se.now(),
                    clickTimeout: void 0,
                    velocities: [],
                    allowMomentumBounce: void 0,
                    isTouchEvent: void 0,
                    startMoving: void 0
                },
                allowClick: !0,
                allowTouchMove: n.params.allowTouchMove,
                touches: {startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0},
                imagesToLoad: [],
                imagesLoaded: 0
            }), n.useModules(), n.params.init && n.init(), n
        }

        slidesPerViewDynamic() {
            const {params: e, slides: t, slidesGrid: i, size: n, activeIndex: s} = this;
            let r = 1;
            if (e.centeredSlides) {
                let e, i = t[s].swiperSlideSize;
                for (let a = s + 1; a < t.length; a += 1) t[a] && !e && (r += 1, (i += t[a].swiperSlideSize) > n && (e = !0));
                for (let a = s - 1; a >= 0; a -= 1) t[a] && !e && (r += 1, (i += t[a].swiperSlideSize) > n && (e = !0))
            } else for (let e = s + 1; e < t.length; e += 1) i[e] - i[s] < n && (r += 1);
            return r
        }

        update() {
            const e = this;
            if (!e || e.destroyed) return;
            const {snapGrid: t, params: i} = e;

            function n() {
                const t = e.rtlTranslate ? -1 * e.translate : e.translate,
                    i = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
                e.setTranslate(i), e.updateActiveIndex(), e.updateSlidesClasses()
            }

            let s;
            i.breakpoints && e.setBreakpoint(), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.params.freeMode ? (n(), e.params.autoHeight && e.updateAutoHeight()) : (s = ("auto" === e.params.slidesPerView || e.params.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0)) || n(), i.watchOverflow && t !== e.snapGrid && e.checkOverflow(), e.emit("update")
        }

        changeDirection(e, t = !0) {
            const i = this, n = i.params.direction;
            return e || (e = "horizontal" === n ? "vertical" : "horizontal"), e === n || "horizontal" !== e && "vertical" !== e ? i : (i.$el.removeClass(`${i.params.containerModifierClass}${n} wp8-${n}`).addClass(`${i.params.containerModifierClass}${e}`), (ae.isIE || ae.isEdge) && (re.pointerEvents || re.prefixedPointerEvents) && i.$el.addClass(`${i.params.containerModifierClass}wp8-${e}`), i.params.direction = e, i.slides.each((t, i) => {
                "vertical" === e ? i.style.width = "" : i.style.height = ""
            }), i.emit("changeDirection"), t && i.update(), i)
        }

        init() {
            const e = this;
            e.initialized || (e.emit("beforeInit"), e.params.breakpoints && e.setBreakpoint(), e.addClasses(), e.params.loop && e.loopCreate(), e.updateSize(), e.updateSlides(), e.params.watchOverflow && e.checkOverflow(), e.params.grabCursor && e.setGrabCursor(), e.params.preloadImages && e.preloadImages(), e.params.loop ? e.slideTo(e.params.initialSlide + e.loopedSlides, 0, e.params.runCallbacksOnInit) : e.slideTo(e.params.initialSlide, 0, e.params.runCallbacksOnInit), e.attachEvents(), e.initialized = !0, e.emit("init"))
        }

        destroy(e = !0, t = !0) {
            const i = this, {params: n, $el: s, $wrapperEl: r, slides: a} = i;
            return void 0 === i.params || i.destroyed ? null : (i.emit("beforeDestroy"), i.initialized = !1, i.detachEvents(), n.loop && i.loopDestroy(), t && (i.removeClasses(), s.removeAttr("style"), r.removeAttr("style"), a && a.length && a.removeClass([n.slideVisibleClass, n.slideActiveClass, n.slideNextClass, n.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index").removeAttr("data-swiper-column").removeAttr("data-swiper-row")), i.emit("destroy"), Object.keys(i.eventsListeners).forEach(e => {
                i.off(e)
            }), !1 !== e && (i.$el[0].swiper = null, i.$el.data("swiper", null), se.deleteProps(i)), i.destroyed = !0, null)
        }

        static extendDefaults(e) {
            se.extend(_e, e)
        }

        static get extendedDefaults() {
            return _e
        }

        static get defaults() {
            return ve
        }

        static get Class() {
            return oe
        }

        static get $() {
            return te
        }
    }

    var xe = {name: "device", proto: {device: me}, static: {device: me}},
        we = {name: "support", proto: {support: re}, static: {support: re}},
        Te = {name: "browser", proto: {browser: ae}, static: {browser: ae}}, Ce = {
            name: "resize", create() {
                const e = this;
                se.extend(e, {
                    resize: {
                        resizeHandler() {
                            e && !e.destroyed && e.initialized && (e.emit("beforeResize"), e.emit("resize"))
                        }, orientationChangeHandler() {
                            e && !e.destroyed && e.initialized && e.emit("orientationchange")
                        }
                    }
                })
            }, on: {
                init() {
                    J.addEventListener("resize", this.resize.resizeHandler), J.addEventListener("orientationchange", this.resize.orientationChangeHandler)
                }, destroy() {
                    J.removeEventListener("resize", this.resize.resizeHandler), J.removeEventListener("orientationchange", this.resize.orientationChangeHandler)
                }
            }
        };
    const Se = {
        func: J.MutationObserver || J.WebkitMutationObserver, attach(e, t = {}) {
            const i = this, n = new (0, Se.func)(e => {
                if (1 === e.length) return void i.emit("observerUpdate", e[0]);
                const t = function () {
                    i.emit("observerUpdate", e[0])
                };
                J.requestAnimationFrame ? J.requestAnimationFrame(t) : J.setTimeout(t, 0)
            });
            n.observe(e, {
                attributes: void 0 === t.attributes || t.attributes,
                childList: void 0 === t.childList || t.childList,
                characterData: void 0 === t.characterData || t.characterData
            }), i.observer.observers.push(n)
        }, init() {
            const e = this;
            if (re.observer && e.params.observer) {
                if (e.params.observeParents) {
                    const t = e.$el.parents();
                    for (let i = 0; i < t.length; i += 1) e.observer.attach(t[i])
                }
                e.observer.attach(e.$el[0], {childList: e.params.observeSlideChildren}), e.observer.attach(e.$wrapperEl[0], {attributes: !1})
            }
        }, destroy() {
            this.observer.observers.forEach(e => {
                e.disconnect()
            }), this.observer.observers = []
        }
    };
    var Ee = {
        name: "observer", params: {observer: !1, observeParents: !1, observeSlideChildren: !1}, create() {
            se.extend(this, {
                observer: {
                    init: Se.init.bind(this),
                    attach: Se.attach.bind(this),
                    destroy: Se.destroy.bind(this),
                    observers: []
                }
            })
        }, on: {
            init() {
                this.observer.init()
            }, destroy() {
                this.observer.destroy()
            }
        }
    };
    const Pe = {
        update(e) {
            const t = this, {slidesPerView: i, slidesPerGroup: n, centeredSlides: s} = t.params, {
                addSlidesBefore: r,
                addSlidesAfter: a
            } = t.params.virtual, {from: o, to: l, slides: c, slidesGrid: u, renderSlide: d, offset: h} = t.virtual;
            t.updateActiveIndex();
            const p = t.activeIndex || 0;
            let f, m, g;
            f = t.rtlTranslate ? "right" : t.isHorizontal() ? "left" : "top", s ? (m = Math.floor(i / 2) + n + r, g = Math.floor(i / 2) + n + a) : (m = i + (n - 1) + r, g = n + a);
            const v = Math.max((p || 0) - g, 0), y = Math.min((p || 0) + m, c.length - 1),
                _ = (t.slidesGrid[v] || 0) - (t.slidesGrid[0] || 0);

            function b() {
                t.updateSlides(), t.updateProgress(), t.updateSlidesClasses(), t.lazy && t.params.lazy.enabled && t.lazy.load()
            }

            if (se.extend(t.virtual, {
                from: v,
                to: y,
                offset: _,
                slidesGrid: t.slidesGrid
            }), o === v && l === y && !e) return t.slidesGrid !== u && _ !== h && t.slides.css(f, `${_}px`), void t.updateProgress();
            if (t.params.virtual.renderExternal) return t.params.virtual.renderExternal.call(t, {
                offset: _,
                from: v,
                to: y,
                slides: function () {
                    const e = [];
                    for (let t = v; t <= y; t += 1) e.push(c[t]);
                    return e
                }()
            }), void b();
            const x = [], w = [];
            if (e) t.$wrapperEl.find(`.${t.params.slideClass}`).remove(); else for (let e = o; e <= l; e += 1) (e < v || e > y) && t.$wrapperEl.find(`.${t.params.slideClass}[data-swiper-slide-index="${e}"]`).remove();
            for (let t = 0; t < c.length; t += 1) t >= v && t <= y && (void 0 === l || e ? w.push(t) : (t > l && w.push(t), t < o && x.push(t)));
            w.forEach(e => {
                t.$wrapperEl.append(d(c[e], e))
            }), x.sort((e, t) => t - e).forEach(e => {
                t.$wrapperEl.prepend(d(c[e], e))
            }), t.$wrapperEl.children(".swiper-slide").css(f, `${_}px`), b()
        }, renderSlide(e, t) {
            const i = this, n = i.params.virtual;
            if (n.cache && i.virtual.cache[t]) return i.virtual.cache[t];
            const s = n.renderSlide ? te(n.renderSlide.call(i, e, t)) : te(`<div class="${i.params.slideClass}" data-swiper-slide-index="${t}">${e}</div>`);
            return s.attr("data-swiper-slide-index") || s.attr("data-swiper-slide-index", t), n.cache && (i.virtual.cache[t] = s), s
        }, appendSlide(e) {
            const t = this;
            if ("object" == typeof e && "length" in e) for (let i = 0; i < e.length; i += 1) e[i] && t.virtual.slides.push(e[i]); else t.virtual.slides.push(e);
            t.virtual.update(!0)
        }, prependSlide(e) {
            const t = this, i = t.activeIndex;
            let n = i + 1, s = 1;
            if (Array.isArray(e)) {
                for (let i = 0; i < e.length; i += 1) e[i] && t.virtual.slides.unshift(e[i]);
                n = i + e.length, s = e.length
            } else t.virtual.slides.unshift(e);
            if (t.params.virtual.cache) {
                const e = t.virtual.cache, i = {};
                Object.keys(e).forEach(t => {
                    i[parseInt(t, 10) + s] = e[t]
                }), t.virtual.cache = i
            }
            t.virtual.update(!0), t.slideTo(n, 0)
        }, removeSlide(e) {
            const t = this;
            if (null == e) return;
            let i = t.activeIndex;
            if (Array.isArray(e)) for (let n = e.length - 1; n >= 0; n -= 1) t.virtual.slides.splice(e[n], 1), t.params.virtual.cache && delete t.virtual.cache[e[n]], e[n] < i && (i -= 1), i = Math.max(i, 0); else t.virtual.slides.splice(e, 1), t.params.virtual.cache && delete t.virtual.cache[e], e < i && (i -= 1), i = Math.max(i, 0);
            t.virtual.update(!0), t.slideTo(i, 0)
        }, removeAllSlides() {
            const e = this;
            e.virtual.slides = [], e.params.virtual.cache && (e.virtual.cache = {}), e.virtual.update(!0), e.slideTo(0, 0)
        }
    };
    var ke = {
        name: "virtual",
        params: {
            virtual: {
                enabled: !1,
                slides: [],
                cache: !0,
                renderSlide: null,
                renderExternal: null,
                addSlidesBefore: 0,
                addSlidesAfter: 0
            }
        },
        create() {
            se.extend(this, {
                virtual: {
                    update: Pe.update.bind(this),
                    appendSlide: Pe.appendSlide.bind(this),
                    prependSlide: Pe.prependSlide.bind(this),
                    removeSlide: Pe.removeSlide.bind(this),
                    removeAllSlides: Pe.removeAllSlides.bind(this),
                    renderSlide: Pe.renderSlide.bind(this),
                    slides: this.params.virtual.slides,
                    cache: {}
                }
            })
        },
        on: {
            beforeInit() {
                const e = this;
                if (!e.params.virtual.enabled) return;
                e.classNames.push(`${e.params.containerModifierClass}virtual`);
                const t = {watchSlidesProgress: !0};
                se.extend(e.params, t), se.extend(e.originalParams, t), e.params.initialSlide || e.virtual.update()
            }, setTranslate() {
                this.params.virtual.enabled && this.virtual.update()
            }
        }
    };
    const Me = {
        handle(e) {
            const t = this, {rtlTranslate: i} = t;
            let n = e;
            n.originalEvent && (n = n.originalEvent);
            const s = n.keyCode || n.charCode;
            if (!t.allowSlideNext && (t.isHorizontal() && 39 === s || t.isVertical() && 40 === s || 34 === s)) return !1;
            if (!t.allowSlidePrev && (t.isHorizontal() && 37 === s || t.isVertical() && 38 === s || 33 === s)) return !1;
            if (!(n.shiftKey || n.altKey || n.ctrlKey || n.metaKey || Q.activeElement && Q.activeElement.nodeName && ("input" === Q.activeElement.nodeName.toLowerCase() || "textarea" === Q.activeElement.nodeName.toLowerCase()))) {
                if (t.params.keyboard.onlyInViewport && (33 === s || 34 === s || 37 === s || 39 === s || 38 === s || 40 === s)) {
                    let e = !1;
                    if (t.$el.parents(`.${t.params.slideClass}`).length > 0 && 0 === t.$el.parents(`.${t.params.slideActiveClass}`).length) return;
                    const n = J.innerWidth, s = J.innerHeight, r = t.$el.offset();
                    i && (r.left -= t.$el[0].scrollLeft);
                    const a = [[r.left, r.top], [r.left + t.width, r.top], [r.left, r.top + t.height], [r.left + t.width, r.top + t.height]];
                    for (let t = 0; t < a.length; t += 1) {
                        const i = a[t];
                        i[0] >= 0 && i[0] <= n && i[1] >= 0 && i[1] <= s && (e = !0)
                    }
                    if (!e) return
                }
                t.isHorizontal() ? (33 !== s && 34 !== s && 37 !== s && 39 !== s || (n.preventDefault ? n.preventDefault() : n.returnValue = !1), (34 !== s && 39 !== s || i) && (33 !== s && 37 !== s || !i) || t.slideNext(), (33 !== s && 37 !== s || i) && (34 !== s && 39 !== s || !i) || t.slidePrev()) : (33 !== s && 34 !== s && 38 !== s && 40 !== s || (n.preventDefault ? n.preventDefault() : n.returnValue = !1), 34 !== s && 40 !== s || t.slideNext(), 33 !== s && 38 !== s || t.slidePrev()), t.emit("keyPress", s)
            }
        }, enable() {
            this.keyboard.enabled || (te(Q).on("keydown", this.keyboard.handle), this.keyboard.enabled = !0)
        }, disable() {
            this.keyboard.enabled && (te(Q).off("keydown", this.keyboard.handle), this.keyboard.enabled = !1)
        }
    };
    var $e = {
        name: "keyboard", params: {keyboard: {enabled: !1, onlyInViewport: !0}}, create() {
            se.extend(this, {
                keyboard: {
                    enabled: !1,
                    enable: Me.enable.bind(this),
                    disable: Me.disable.bind(this),
                    handle: Me.handle.bind(this)
                }
            })
        }, on: {
            init() {
                const e = this;
                e.params.keyboard.enabled && e.keyboard.enable()
            }, destroy() {
                const e = this;
                e.keyboard.enabled && e.keyboard.disable()
            }
        }
    };
    const Oe = {
        lastScrollTime: se.now(),
        event: J.navigator.userAgent.indexOf("firefox") > -1 ? "DOMMouseScroll" : function () {
            let e = "onwheel" in Q;
            if (!e) {
                const t = Q.createElement("div");
                t.setAttribute("onwheel", "return;"), e = "function" == typeof t.onwheel
            }
            return !e && Q.implementation && Q.implementation.hasFeature && !0 !== Q.implementation.hasFeature("", "") && (e = Q.implementation.hasFeature("Events.wheel", "3.0")), e
        }() ? "wheel" : "mousewheel",
        normalize(e) {
            let t = 0, i = 0, n = 0, s = 0;
            return "detail" in e && (i = e.detail), "wheelDelta" in e && (i = -e.wheelDelta / 120), "wheelDeltaY" in e && (i = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (t = i, i = 0), n = 10 * t, s = 10 * i, "deltaY" in e && (s = e.deltaY), "deltaX" in e && (n = e.deltaX), (n || s) && e.deltaMode && (1 === e.deltaMode ? (n *= 40, s *= 40) : (n *= 800, s *= 800)), n && !t && (t = n < 1 ? -1 : 1), s && !i && (i = s < 1 ? -1 : 1), {
                spinX: t,
                spinY: i,
                pixelX: n,
                pixelY: s
            }
        },
        handleMouseEnter() {
            this.mouseEntered = !0
        },
        handleMouseLeave() {
            this.mouseEntered = !1
        },
        handle(e) {
            let t = e;
            const i = this, n = i.params.mousewheel;
            if (!i.mouseEntered && !n.releaseOnEdges) return !0;
            t.originalEvent && (t = t.originalEvent);
            let s = 0;
            const r = i.rtlTranslate ? -1 : 1, a = Oe.normalize(t);
            if (n.forceToAxis) if (i.isHorizontal()) {
                if (!(Math.abs(a.pixelX) > Math.abs(a.pixelY))) return !0;
                s = a.pixelX * r
            } else {
                if (!(Math.abs(a.pixelY) > Math.abs(a.pixelX))) return !0;
                s = a.pixelY
            } else s = Math.abs(a.pixelX) > Math.abs(a.pixelY) ? -a.pixelX * r : -a.pixelY;
            if (0 === s) return !0;
            if (n.invert && (s = -s), i.params.freeMode) {
                i.params.loop && i.loopFix();
                let e = i.getTranslate() + s * n.sensitivity;
                const r = i.isBeginning, a = i.isEnd;
                if (e >= i.minTranslate() && (e = i.minTranslate()), e <= i.maxTranslate() && (e = i.maxTranslate()), i.setTransition(0), i.setTranslate(e), i.updateProgress(), i.updateActiveIndex(), i.updateSlidesClasses(), (!r && i.isBeginning || !a && i.isEnd) && i.updateSlidesClasses(), i.params.freeModeSticky && (clearTimeout(i.mousewheel.timeout), i.mousewheel.timeout = se.nextTick(() => {
                    i.slideToClosest()
                }, 300)), i.emit("scroll", t), i.params.autoplay && i.params.autoplayDisableOnInteraction && i.autoplay.stop(), e === i.minTranslate() || e === i.maxTranslate()) return !0
            } else {
                if (se.now() - i.mousewheel.lastScrollTime > 60) if (s < 0) if (i.isEnd && !i.params.loop || i.animating) {
                    if (n.releaseOnEdges) return !0
                } else i.slideNext(), i.emit("scroll", t); else if (i.isBeginning && !i.params.loop || i.animating) {
                    if (n.releaseOnEdges) return !0
                } else i.slidePrev(), i.emit("scroll", t);
                i.mousewheel.lastScrollTime = (new J.Date).getTime()
            }
            return t.preventDefault ? t.preventDefault() : t.returnValue = !1, !1
        },
        enable() {
            const e = this;
            if (!Oe.event) return !1;
            if (e.mousewheel.enabled) return !1;
            let t = e.$el;
            return "container" !== e.params.mousewheel.eventsTarged && (t = te(e.params.mousewheel.eventsTarged)), t.on("mouseenter", e.mousewheel.handleMouseEnter), t.on("mouseleave", e.mousewheel.handleMouseLeave), t.on(Oe.event, e.mousewheel.handle), e.mousewheel.enabled = !0, !0
        },
        disable() {
            const e = this;
            if (!Oe.event) return !1;
            if (!e.mousewheel.enabled) return !1;
            let t = e.$el;
            return "container" !== e.params.mousewheel.eventsTarged && (t = te(e.params.mousewheel.eventsTarged)), t.off(Oe.event, e.mousewheel.handle), e.mousewheel.enabled = !1, !0
        }
    };
    const Ae = {
        update() {
            const e = this, t = e.params.navigation;
            if (e.params.loop) return;
            const {$nextEl: i, $prevEl: n} = e.navigation;
            n && n.length > 0 && (e.isBeginning ? n.addClass(t.disabledClass) : n.removeClass(t.disabledClass), n[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](t.lockClass)), i && i.length > 0 && (e.isEnd ? i.addClass(t.disabledClass) : i.removeClass(t.disabledClass), i[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](t.lockClass))
        }, onPrevClick(e) {
            e.preventDefault(), this.isBeginning && !this.params.loop || this.slidePrev()
        }, onNextClick(e) {
            e.preventDefault(), this.isEnd && !this.params.loop || this.slideNext()
        }, init() {
            const e = this, t = e.params.navigation;
            if (!t.nextEl && !t.prevEl) return;
            let i, n;
            t.nextEl && (i = te(t.nextEl), e.params.uniqueNavElements && "string" == typeof t.nextEl && i.length > 1 && 1 === e.$el.find(t.nextEl).length && (i = e.$el.find(t.nextEl))), t.prevEl && (n = te(t.prevEl), e.params.uniqueNavElements && "string" == typeof t.prevEl && n.length > 1 && 1 === e.$el.find(t.prevEl).length && (n = e.$el.find(t.prevEl))), i && i.length > 0 && i.on("click", e.navigation.onNextClick), n && n.length > 0 && n.on("click", e.navigation.onPrevClick), se.extend(e.navigation, {
                $nextEl: i,
                nextEl: i && i[0],
                $prevEl: n,
                prevEl: n && n[0]
            })
        }, destroy() {
            const e = this, {$nextEl: t, $prevEl: i} = e.navigation;
            t && t.length && (t.off("click", e.navigation.onNextClick), t.removeClass(e.params.navigation.disabledClass)), i && i.length && (i.off("click", e.navigation.onPrevClick), i.removeClass(e.params.navigation.disabledClass))
        }
    };
    const De = {
        update() {
            const e = this, t = e.rtl, i = e.params.pagination;
            if (!i.el || !e.pagination.el || !e.pagination.$el || 0 === e.pagination.$el.length) return;
            const n = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length,
                s = e.pagination.$el;
            let r;
            const a = e.params.loop ? Math.ceil((n - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length;
            if (e.params.loop ? ((r = Math.ceil((e.activeIndex - e.loopedSlides) / e.params.slidesPerGroup)) > n - 1 - 2 * e.loopedSlides && (r -= n - 2 * e.loopedSlides), r > a - 1 && (r -= a), r < 0 && "bullets" !== e.params.paginationType && (r = a + r)) : r = void 0 !== e.snapIndex ? e.snapIndex : e.activeIndex || 0, "bullets" === i.type && e.pagination.bullets && e.pagination.bullets.length > 0) {
                const n = e.pagination.bullets;
                let a, o, l;
                if (i.dynamicBullets && (e.pagination.bulletSize = n.eq(0)[e.isHorizontal() ? "outerWidth" : "outerHeight"](!0), s.css(e.isHorizontal() ? "width" : "height", `${e.pagination.bulletSize * (i.dynamicMainBullets + 4)}px`), i.dynamicMainBullets > 1 && void 0 !== e.previousIndex && (e.pagination.dynamicBulletIndex += r - e.previousIndex, e.pagination.dynamicBulletIndex > i.dynamicMainBullets - 1 ? e.pagination.dynamicBulletIndex = i.dynamicMainBullets - 1 : e.pagination.dynamicBulletIndex < 0 && (e.pagination.dynamicBulletIndex = 0)), a = r - e.pagination.dynamicBulletIndex, l = ((o = a + (Math.min(n.length, i.dynamicMainBullets) - 1)) + a) / 2), n.removeClass(`${i.bulletActiveClass} ${i.bulletActiveClass}-next ${i.bulletActiveClass}-next-next ${i.bulletActiveClass}-prev ${i.bulletActiveClass}-prev-prev ${i.bulletActiveClass}-main`), s.length > 1) n.each((e, t) => {
                    const n = te(t), s = n.index();
                    s === r && n.addClass(i.bulletActiveClass), i.dynamicBullets && (s >= a && s <= o && n.addClass(`${i.bulletActiveClass}-main`), s === a && n.prev().addClass(`${i.bulletActiveClass}-prev`).prev().addClass(`${i.bulletActiveClass}-prev-prev`), s === o && n.next().addClass(`${i.bulletActiveClass}-next`).next().addClass(`${i.bulletActiveClass}-next-next`))
                }); else {
                    if (n.eq(r).addClass(i.bulletActiveClass), i.dynamicBullets) {
                        const e = n.eq(a), t = n.eq(o);
                        for (let e = a; e <= o; e += 1) n.eq(e).addClass(`${i.bulletActiveClass}-main`);
                        e.prev().addClass(`${i.bulletActiveClass}-prev`).prev().addClass(`${i.bulletActiveClass}-prev-prev`), t.next().addClass(`${i.bulletActiveClass}-next`).next().addClass(`${i.bulletActiveClass}-next-next`)
                    }
                }
                if (i.dynamicBullets) {
                    const s = Math.min(n.length, i.dynamicMainBullets + 4),
                        r = (e.pagination.bulletSize * s - e.pagination.bulletSize) / 2 - l * e.pagination.bulletSize,
                        a = t ? "right" : "left";
                    n.css(e.isHorizontal() ? a : "top", `${r}px`)
                }
            }
            if ("fraction" === i.type && (s.find(`.${i.currentClass}`).text(i.formatFractionCurrent(r + 1)), s.find(`.${i.totalClass}`).text(i.formatFractionTotal(a))), "progressbar" === i.type) {
                let t;
                t = i.progressbarOpposite ? e.isHorizontal() ? "vertical" : "horizontal" : e.isHorizontal() ? "horizontal" : "vertical";
                const n = (r + 1) / a;
                let o = 1, l = 1;
                "horizontal" === t ? o = n : l = n, s.find(`.${i.progressbarFillClass}`).transform(`translate3d(0,0,0) scaleX(${o}) scaleY(${l})`).transition(e.params.speed)
            }
            "custom" === i.type && i.renderCustom ? (s.html(i.renderCustom(e, r + 1, a)), e.emit("paginationRender", e, s[0])) : e.emit("paginationUpdate", e, s[0]), s[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](i.lockClass)
        }, render() {
            const e = this, t = e.params.pagination;
            if (!t.el || !e.pagination.el || !e.pagination.$el || 0 === e.pagination.$el.length) return;
            const i = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length,
                n = e.pagination.$el;
            let s = "";
            if ("bullets" === t.type) {
                const r = e.params.loop ? Math.ceil((i - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length;
                for (let i = 0; i < r; i += 1) t.renderBullet ? s += t.renderBullet.call(e, i, t.bulletClass) : s += `<${t.bulletElement} class="${t.bulletClass}"></${t.bulletElement}>`;
                n.html(s), e.pagination.bullets = n.find(`.${t.bulletClass}`)
            }
            "fraction" === t.type && (s = t.renderFraction ? t.renderFraction.call(e, t.currentClass, t.totalClass) : `<span class="${t.currentClass}"></span>` + " / " + `<span class="${t.totalClass}"></span>`, n.html(s)), "progressbar" === t.type && (s = t.renderProgressbar ? t.renderProgressbar.call(e, t.progressbarFillClass) : `<span class="${t.progressbarFillClass}"></span>`, n.html(s)), "custom" !== t.type && e.emit("paginationRender", e.pagination.$el[0])
        }, init() {
            const e = this, t = e.params.pagination;
            if (!t.el) return;
            let i = te(t.el);
            0 !== i.length && (e.params.uniqueNavElements && "string" == typeof t.el && i.length > 1 && 1 === e.$el.find(t.el).length && (i = e.$el.find(t.el)), "bullets" === t.type && t.clickable && i.addClass(t.clickableClass), i.addClass(t.modifierClass + t.type), "bullets" === t.type && t.dynamicBullets && (i.addClass(`${t.modifierClass}${t.type}-dynamic`), e.pagination.dynamicBulletIndex = 0, t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)), "progressbar" === t.type && t.progressbarOpposite && i.addClass(t.progressbarOppositeClass), t.clickable && i.on("click", `.${t.bulletClass}`, function (t) {
                t.preventDefault();
                let i = te(this).index() * e.params.slidesPerGroup;
                e.params.loop && (i += e.loopedSlides), e.slideTo(i)
            }), se.extend(e.pagination, {$el: i, el: i[0]}))
        }, destroy() {
            const e = this.params.pagination;
            if (!e.el || !this.pagination.el || !this.pagination.$el || 0 === this.pagination.$el.length) return;
            const t = this.pagination.$el;
            t.removeClass(e.hiddenClass), t.removeClass(e.modifierClass + e.type), this.pagination.bullets && this.pagination.bullets.removeClass(e.bulletActiveClass), e.clickable && t.off("click", `.${e.bulletClass}`)
        }
    };
    const Le = {
        setTranslate() {
            const e = this;
            if (!e.params.scrollbar.el || !e.scrollbar.el) return;
            const {scrollbar: t, rtlTranslate: i, progress: n} = e, {dragSize: s, trackSize: r, $dragEl: a, $el: o} = t,
                l = e.params.scrollbar;
            let c = s, u = (r - s) * n;
            i ? (u = -u) > 0 ? (c = s - u, u = 0) : -u + s > r && (c = r + u) : u < 0 ? (c = s + u, u = 0) : u + s > r && (c = r - u), e.isHorizontal() ? (re.transforms3d ? a.transform(`translate3d(${u}px, 0, 0)`) : a.transform(`translateX(${u}px)`), a[0].style.width = `${c}px`) : (re.transforms3d ? a.transform(`translate3d(0px, ${u}px, 0)`) : a.transform(`translateY(${u}px)`), a[0].style.height = `${c}px`), l.hide && (clearTimeout(e.scrollbar.timeout), o[0].style.opacity = 1, e.scrollbar.timeout = setTimeout(() => {
                o[0].style.opacity = 0, o.transition(400)
            }, 1e3))
        }, setTransition(e) {
            this.params.scrollbar.el && this.scrollbar.el && this.scrollbar.$dragEl.transition(e)
        }, updateSize() {
            const e = this;
            if (!e.params.scrollbar.el || !e.scrollbar.el) return;
            const {scrollbar: t} = e, {$dragEl: i, $el: n} = t;
            i[0].style.width = "", i[0].style.height = "";
            const s = e.isHorizontal() ? n[0].offsetWidth : n[0].offsetHeight, r = e.size / e.virtualSize,
                a = r * (s / e.size);
            let o;
            o = "auto" === e.params.scrollbar.dragSize ? s * r : parseInt(e.params.scrollbar.dragSize, 10), e.isHorizontal() ? i[0].style.width = `${o}px` : i[0].style.height = `${o}px`, n[0].style.display = r >= 1 ? "none" : "", e.params.scrollbar.hide && (n[0].style.opacity = 0), se.extend(t, {
                trackSize: s,
                divider: r,
                moveDivider: a,
                dragSize: o
            }), t.$el[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](e.params.scrollbar.lockClass)
        }, getPointerPosition(e) {
            return this.isHorizontal() ? "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX || e.clientX : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY || e.clientY
        }, setDragPosition(e) {
            const {scrollbar: t, rtlTranslate: i} = this, {$el: n, dragSize: s, trackSize: r, dragStartPos: a} = t;
            let o;
            o = (t.getPointerPosition(e) - n.offset()[this.isHorizontal() ? "left" : "top"] - (null !== a ? a : s / 2)) / (r - s), o = Math.max(Math.min(o, 1), 0), i && (o = 1 - o);
            const l = this.minTranslate() + (this.maxTranslate() - this.minTranslate()) * o;
            this.updateProgress(l), this.setTranslate(l), this.updateActiveIndex(), this.updateSlidesClasses()
        }, onDragStart(e) {
            const t = this.params.scrollbar, {scrollbar: i, $wrapperEl: n} = this, {$el: s, $dragEl: r} = i;
            this.scrollbar.isTouched = !0, this.scrollbar.dragStartPos = e.target === r[0] || e.target === r ? i.getPointerPosition(e) - e.target.getBoundingClientRect()[this.isHorizontal() ? "left" : "top"] : null, e.preventDefault(), e.stopPropagation(), n.transition(100), r.transition(100), i.setDragPosition(e), clearTimeout(this.scrollbar.dragTimeout), s.transition(0), t.hide && s.css("opacity", 1), this.emit("scrollbarDragStart", e)
        }, onDragMove(e) {
            const {scrollbar: t, $wrapperEl: i} = this, {$el: n, $dragEl: s} = t;
            this.scrollbar.isTouched && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, t.setDragPosition(e), i.transition(0), n.transition(0), s.transition(0), this.emit("scrollbarDragMove", e))
        }, onDragEnd(e) {
            const t = this, i = t.params.scrollbar, {scrollbar: n} = t, {$el: s} = n;
            t.scrollbar.isTouched && (t.scrollbar.isTouched = !1, i.hide && (clearTimeout(t.scrollbar.dragTimeout), t.scrollbar.dragTimeout = se.nextTick(() => {
                s.css("opacity", 0), s.transition(400)
            }, 1e3)), t.emit("scrollbarDragEnd", e), i.snapOnRelease && t.slideToClosest())
        }, enableDraggable() {
            const e = this;
            if (!e.params.scrollbar.el) return;
            const {scrollbar: t, touchEventsTouch: i, touchEventsDesktop: n, params: s} = e, r = t.$el[0],
                a = !(!re.passiveListener || !s.passiveListeners) && {passive: !1, capture: !1},
                o = !(!re.passiveListener || !s.passiveListeners) && {passive: !0, capture: !1};
            re.touch ? (r.addEventListener(i.start, e.scrollbar.onDragStart, a), r.addEventListener(i.move, e.scrollbar.onDragMove, a), r.addEventListener(i.end, e.scrollbar.onDragEnd, o)) : (r.addEventListener(n.start, e.scrollbar.onDragStart, a), Q.addEventListener(n.move, e.scrollbar.onDragMove, a), Q.addEventListener(n.end, e.scrollbar.onDragEnd, o))
        }, disableDraggable() {
            const e = this;
            if (!e.params.scrollbar.el) return;
            const {scrollbar: t, touchEventsTouch: i, touchEventsDesktop: n, params: s} = e, r = t.$el[0],
                a = !(!re.passiveListener || !s.passiveListeners) && {passive: !1, capture: !1},
                o = !(!re.passiveListener || !s.passiveListeners) && {passive: !0, capture: !1};
            re.touch ? (r.removeEventListener(i.start, e.scrollbar.onDragStart, a), r.removeEventListener(i.move, e.scrollbar.onDragMove, a), r.removeEventListener(i.end, e.scrollbar.onDragEnd, o)) : (r.removeEventListener(n.start, e.scrollbar.onDragStart, a), Q.removeEventListener(n.move, e.scrollbar.onDragMove, a), Q.removeEventListener(n.end, e.scrollbar.onDragEnd, o))
        }, init() {
            const e = this;
            if (!e.params.scrollbar.el) return;
            const {scrollbar: t, $el: i} = e, n = e.params.scrollbar;
            let s = te(n.el);
            e.params.uniqueNavElements && "string" == typeof n.el && s.length > 1 && 1 === i.find(n.el).length && (s = i.find(n.el));
            let r = s.find(`.${e.params.scrollbar.dragClass}`);
            0 === r.length && (r = te(`<div class="${e.params.scrollbar.dragClass}"></div>`), s.append(r)), se.extend(t, {
                $el: s,
                el: s[0],
                $dragEl: r,
                dragEl: r[0]
            }), n.draggable && t.enableDraggable()
        }, destroy() {
            this.scrollbar.disableDraggable()
        }
    };
    const ze = {
        setTransform(e, t) {
            const {rtl: i} = this, n = te(e), s = i ? -1 : 1, r = n.attr("data-swiper-parallax") || "0";
            let a = n.attr("data-swiper-parallax-x"), o = n.attr("data-swiper-parallax-y");
            const l = n.attr("data-swiper-parallax-scale"), c = n.attr("data-swiper-parallax-opacity");
            if (a || o ? (a = a || "0", o = o || "0") : this.isHorizontal() ? (a = r, o = "0") : (o = r, a = "0"), a = a.indexOf("%") >= 0 ? `${parseInt(a, 10) * t * s}%` : `${a * t * s}px`, o = o.indexOf("%") >= 0 ? `${parseInt(o, 10) * t}%` : `${o * t}px`, null != c) {
                const e = c - (c - 1) * (1 - Math.abs(t));
                n[0].style.opacity = e
            }
            if (null == l) n.transform(`translate3d(${a}, ${o}, 0px)`); else {
                const e = l - (l - 1) * (1 - Math.abs(t));
                n.transform(`translate3d(${a}, ${o}, 0px) scale(${e})`)
            }
        }, setTranslate() {
            const e = this, {$el: t, slides: i, progress: n, snapGrid: s} = e;
            t.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((t, i) => {
                e.parallax.setTransform(i, n)
            }), i.each((t, i) => {
                let r = i.progress;
                e.params.slidesPerGroup > 1 && "auto" !== e.params.slidesPerView && (r += Math.ceil(t / 2) - n * (s.length - 1)), r = Math.min(Math.max(r, -1), 1), te(i).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((t, i) => {
                    e.parallax.setTransform(i, r)
                })
            })
        }, setTransition(e = this.params.speed) {
            const {$el: t} = this;
            t.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((t, i) => {
                const n = te(i);
                let s = parseInt(n.attr("data-swiper-parallax-duration"), 10) || e;
                0 === e && (s = 0), n.transition(s)
            })
        }
    };
    const Ie = {
        getDistanceBetweenTouches(e) {
            if (e.targetTouches.length < 2) return 1;
            const t = e.targetTouches[0].pageX, i = e.targetTouches[0].pageY, n = e.targetTouches[1].pageX,
                s = e.targetTouches[1].pageY;
            return Math.sqrt((n - t) ** 2 + (s - i) ** 2)
        }, onGestureStart(e) {
            const t = this, i = t.params.zoom, n = t.zoom, {gesture: s} = n;
            if (n.fakeGestureTouched = !1, n.fakeGestureMoved = !1, !re.gestures) {
                if ("touchstart" !== e.type || "touchstart" === e.type && e.targetTouches.length < 2) return;
                n.fakeGestureTouched = !0, s.scaleStart = Ie.getDistanceBetweenTouches(e)
            }
            s.$slideEl && s.$slideEl.length || (s.$slideEl = te(e.target).closest(".swiper-slide"), 0 === s.$slideEl.length && (s.$slideEl = t.slides.eq(t.activeIndex)), s.$imageEl = s.$slideEl.find("img, svg, canvas"), s.$imageWrapEl = s.$imageEl.parent(`.${i.containerClass}`), s.maxRatio = s.$imageWrapEl.attr("data-swiper-zoom") || i.maxRatio, 0 !== s.$imageWrapEl.length) ? (s.$imageEl.transition(0), t.zoom.isScaling = !0) : s.$imageEl = void 0
        }, onGestureChange(e) {
            const t = this.params.zoom, i = this.zoom, {gesture: n} = i;
            if (!re.gestures) {
                if ("touchmove" !== e.type || "touchmove" === e.type && e.targetTouches.length < 2) return;
                i.fakeGestureMoved = !0, n.scaleMove = Ie.getDistanceBetweenTouches(e)
            }
            n.$imageEl && 0 !== n.$imageEl.length && (re.gestures ? i.scale = e.scale * i.currentScale : i.scale = n.scaleMove / n.scaleStart * i.currentScale, i.scale > n.maxRatio && (i.scale = n.maxRatio - 1 + (i.scale - n.maxRatio + 1) ** .5), i.scale < t.minRatio && (i.scale = t.minRatio + 1 - (t.minRatio - i.scale + 1) ** .5), n.$imageEl.transform(`translate3d(0,0,0) scale(${i.scale})`))
        }, onGestureEnd(e) {
            const t = this.params.zoom, i = this.zoom, {gesture: n} = i;
            if (!re.gestures) {
                if (!i.fakeGestureTouched || !i.fakeGestureMoved) return;
                if ("touchend" !== e.type || "touchend" === e.type && e.changedTouches.length < 2 && !me.android) return;
                i.fakeGestureTouched = !1, i.fakeGestureMoved = !1
            }
            n.$imageEl && 0 !== n.$imageEl.length && (i.scale = Math.max(Math.min(i.scale, n.maxRatio), t.minRatio), n.$imageEl.transition(this.params.speed).transform(`translate3d(0,0,0) scale(${i.scale})`), i.currentScale = i.scale, i.isScaling = !1, 1 === i.scale && (n.$slideEl = void 0))
        }, onTouchStart(e) {
            const t = this.zoom, {gesture: i, image: n} = t;
            i.$imageEl && 0 !== i.$imageEl.length && (n.isTouched || (me.android && e.preventDefault(), n.isTouched = !0, n.touchesStart.x = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX, n.touchesStart.y = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY))
        }, onTouchMove(e) {
            const t = this, i = t.zoom, {gesture: n, image: s, velocity: r} = i;
            if (!n.$imageEl || 0 === n.$imageEl.length) return;
            if (t.allowClick = !1, !s.isTouched || !n.$slideEl) return;
            s.isMoved || (s.width = n.$imageEl[0].offsetWidth, s.height = n.$imageEl[0].offsetHeight, s.startX = se.getTranslate(n.$imageWrapEl[0], "x") || 0, s.startY = se.getTranslate(n.$imageWrapEl[0], "y") || 0, n.slideWidth = n.$slideEl[0].offsetWidth, n.slideHeight = n.$slideEl[0].offsetHeight, n.$imageWrapEl.transition(0), t.rtl && (s.startX = -s.startX, s.startY = -s.startY));
            const a = s.width * i.scale, o = s.height * i.scale;
            if (!(a < n.slideWidth && o < n.slideHeight)) {
                if (s.minX = Math.min(n.slideWidth / 2 - a / 2, 0), s.maxX = -s.minX, s.minY = Math.min(n.slideHeight / 2 - o / 2, 0), s.maxY = -s.minY, s.touchesCurrent.x = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, s.touchesCurrent.y = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, !s.isMoved && !i.isScaling) {
                    if (t.isHorizontal() && (Math.floor(s.minX) === Math.floor(s.startX) && s.touchesCurrent.x < s.touchesStart.x || Math.floor(s.maxX) === Math.floor(s.startX) && s.touchesCurrent.x > s.touchesStart.x)) return void (s.isTouched = !1);
                    if (!t.isHorizontal() && (Math.floor(s.minY) === Math.floor(s.startY) && s.touchesCurrent.y < s.touchesStart.y || Math.floor(s.maxY) === Math.floor(s.startY) && s.touchesCurrent.y > s.touchesStart.y)) return void (s.isTouched = !1)
                }
                e.preventDefault(), e.stopPropagation(), s.isMoved = !0, s.currentX = s.touchesCurrent.x - s.touchesStart.x + s.startX, s.currentY = s.touchesCurrent.y - s.touchesStart.y + s.startY, s.currentX < s.minX && (s.currentX = s.minX + 1 - (s.minX - s.currentX + 1) ** .8), s.currentX > s.maxX && (s.currentX = s.maxX - 1 + (s.currentX - s.maxX + 1) ** .8), s.currentY < s.minY && (s.currentY = s.minY + 1 - (s.minY - s.currentY + 1) ** .8), s.currentY > s.maxY && (s.currentY = s.maxY - 1 + (s.currentY - s.maxY + 1) ** .8), r.prevPositionX || (r.prevPositionX = s.touchesCurrent.x), r.prevPositionY || (r.prevPositionY = s.touchesCurrent.y), r.prevTime || (r.prevTime = Date.now()), r.x = (s.touchesCurrent.x - r.prevPositionX) / (Date.now() - r.prevTime) / 2, r.y = (s.touchesCurrent.y - r.prevPositionY) / (Date.now() - r.prevTime) / 2, Math.abs(s.touchesCurrent.x - r.prevPositionX) < 2 && (r.x = 0), Math.abs(s.touchesCurrent.y - r.prevPositionY) < 2 && (r.y = 0), r.prevPositionX = s.touchesCurrent.x, r.prevPositionY = s.touchesCurrent.y, r.prevTime = Date.now(), n.$imageWrapEl.transform(`translate3d(${s.currentX}px, ${s.currentY}px,0)`)
            }
        }, onTouchEnd() {
            const e = this.zoom, {gesture: t, image: i, velocity: n} = e;
            if (!t.$imageEl || 0 === t.$imageEl.length) return;
            if (!i.isTouched || !i.isMoved) return i.isTouched = !1, void (i.isMoved = !1);
            i.isTouched = !1, i.isMoved = !1;
            let s = 300, r = 300;
            const a = n.x * s, o = i.currentX + a, l = n.y * r, c = i.currentY + l;
            0 !== n.x && (s = Math.abs((o - i.currentX) / n.x)), 0 !== n.y && (r = Math.abs((c - i.currentY) / n.y));
            const u = Math.max(s, r);
            i.currentX = o, i.currentY = c;
            const d = i.width * e.scale, h = i.height * e.scale;
            i.minX = Math.min(t.slideWidth / 2 - d / 2, 0), i.maxX = -i.minX, i.minY = Math.min(t.slideHeight / 2 - h / 2, 0), i.maxY = -i.minY, i.currentX = Math.max(Math.min(i.currentX, i.maxX), i.minX), i.currentY = Math.max(Math.min(i.currentY, i.maxY), i.minY), t.$imageWrapEl.transition(u).transform(`translate3d(${i.currentX}px, ${i.currentY}px,0)`)
        }, onTransitionEnd() {
            const e = this.zoom, {gesture: t} = e;
            t.$slideEl && this.previousIndex !== this.activeIndex && (t.$imageEl.transform("translate3d(0,0,0) scale(1)"), t.$imageWrapEl.transform("translate3d(0,0,0)"), e.scale = 1, e.currentScale = 1, t.$slideEl = void 0, t.$imageEl = void 0, t.$imageWrapEl = void 0)
        }, toggle(e) {
            const t = this.zoom;
            t.scale && 1 !== t.scale ? t.out() : t.in(e)
        }, in(e) {
            const t = this, i = t.zoom, n = t.params.zoom, {gesture: s, image: r} = i;
            if (s.$slideEl || (s.$slideEl = t.clickedSlide ? te(t.clickedSlide) : t.slides.eq(t.activeIndex), s.$imageEl = s.$slideEl.find("img, svg, canvas"), s.$imageWrapEl = s.$imageEl.parent(`.${n.containerClass}`)), !s.$imageEl || 0 === s.$imageEl.length) return;
            let a, o, l, c, u, d, h, p, f, m, g, v, y, _, b, x, w, T;
            s.$slideEl.addClass(`${n.zoomedSlideClass}`), void 0 === r.touchesStart.x && e ? (a = "touchend" === e.type ? e.changedTouches[0].pageX : e.pageX, o = "touchend" === e.type ? e.changedTouches[0].pageY : e.pageY) : (a = r.touchesStart.x, o = r.touchesStart.y), i.scale = s.$imageWrapEl.attr("data-swiper-zoom") || n.maxRatio, i.currentScale = s.$imageWrapEl.attr("data-swiper-zoom") || n.maxRatio, e ? (w = s.$slideEl[0].offsetWidth, T = s.$slideEl[0].offsetHeight, u = (l = s.$slideEl.offset().left) + w / 2 - a, d = (c = s.$slideEl.offset().top) + T / 2 - o, f = s.$imageEl[0].offsetWidth, m = s.$imageEl[0].offsetHeight, g = f * i.scale, v = m * i.scale, b = -(y = Math.min(w / 2 - g / 2, 0)), x = -(_ = Math.min(T / 2 - v / 2, 0)), (h = u * i.scale) < y && (h = y), h > b && (h = b), (p = d * i.scale) < _ && (p = _), p > x && (p = x)) : (h = 0, p = 0), s.$imageWrapEl.transition(300).transform(`translate3d(${h}px, ${p}px,0)`), s.$imageEl.transition(300).transform(`translate3d(0,0,0) scale(${i.scale})`)
        }, out() {
            const e = this, t = e.zoom, i = e.params.zoom, {gesture: n} = t;
            n.$slideEl || (n.$slideEl = e.clickedSlide ? te(e.clickedSlide) : e.slides.eq(e.activeIndex), n.$imageEl = n.$slideEl.find("img, svg, canvas"), n.$imageWrapEl = n.$imageEl.parent(`.${i.containerClass}`)), n.$imageEl && 0 !== n.$imageEl.length && (t.scale = 1, t.currentScale = 1, n.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"), n.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"), n.$slideEl.removeClass(`${i.zoomedSlideClass}`), n.$slideEl = void 0)
        }, enable() {
            const e = this, t = e.zoom;
            if (t.enabled) return;
            t.enabled = !0;
            const i = !("touchstart" !== e.touchEvents.start || !re.passiveListener || !e.params.passiveListeners) && {
                passive: !0,
                capture: !1
            };
            re.gestures ? (e.$wrapperEl.on("gesturestart", ".swiper-slide", t.onGestureStart, i), e.$wrapperEl.on("gesturechange", ".swiper-slide", t.onGestureChange, i), e.$wrapperEl.on("gestureend", ".swiper-slide", t.onGestureEnd, i)) : "touchstart" === e.touchEvents.start && (e.$wrapperEl.on(e.touchEvents.start, ".swiper-slide", t.onGestureStart, i), e.$wrapperEl.on(e.touchEvents.move, ".swiper-slide", t.onGestureChange, i), e.$wrapperEl.on(e.touchEvents.end, ".swiper-slide", t.onGestureEnd, i)), e.$wrapperEl.on(e.touchEvents.move, `.${e.params.zoom.containerClass}`, t.onTouchMove)
        }, disable() {
            const e = this, t = e.zoom;
            if (!t.enabled) return;
            e.zoom.enabled = !1;
            const i = !("touchstart" !== e.touchEvents.start || !re.passiveListener || !e.params.passiveListeners) && {
                passive: !0,
                capture: !1
            };
            re.gestures ? (e.$wrapperEl.off("gesturestart", ".swiper-slide", t.onGestureStart, i), e.$wrapperEl.off("gesturechange", ".swiper-slide", t.onGestureChange, i), e.$wrapperEl.off("gestureend", ".swiper-slide", t.onGestureEnd, i)) : "touchstart" === e.touchEvents.start && (e.$wrapperEl.off(e.touchEvents.start, ".swiper-slide", t.onGestureStart, i), e.$wrapperEl.off(e.touchEvents.move, ".swiper-slide", t.onGestureChange, i), e.$wrapperEl.off(e.touchEvents.end, ".swiper-slide", t.onGestureEnd, i)), e.$wrapperEl.off(e.touchEvents.move, `.${e.params.zoom.containerClass}`, t.onTouchMove)
        }
    };
    const Ne = {
        loadInSlide(e, t = !0) {
            const i = this, n = i.params.lazy;
            if (void 0 === e) return;
            if (0 === i.slides.length) return;
            const s = i.virtual && i.params.virtual.enabled ? i.$wrapperEl.children(`.${i.params.slideClass}[data-swiper-slide-index="${e}"]`) : i.slides.eq(e);
            let r = s.find(`.${n.elementClass}:not(.${n.loadedClass}):not(.${n.loadingClass})`);
            !s.hasClass(n.elementClass) || s.hasClass(n.loadedClass) || s.hasClass(n.loadingClass) || (r = r.add(s[0])), 0 !== r.length && r.each((e, r) => {
                const a = te(r);
                a.addClass(n.loadingClass);
                const o = a.attr("data-background"), l = a.attr("data-src"), c = a.attr("data-srcset"),
                    u = a.attr("data-sizes");
                i.loadImage(a[0], l || o, c, u, !1, () => {
                    if (null != i && i && (!i || i.params) && !i.destroyed) {
                        if (o ? (a.css("background-image", `url("${o}")`), a.removeAttr("data-background")) : (c && (a.attr("srcset", c), a.removeAttr("data-srcset")), u && (a.attr("sizes", u), a.removeAttr("data-sizes")), l && (a.attr("src", l), a.removeAttr("data-src"))), a.addClass(n.loadedClass).removeClass(n.loadingClass), s.find(`.${n.preloaderClass}`).remove(), i.params.loop && t) {
                            const e = s.attr("data-swiper-slide-index");
                            if (s.hasClass(i.params.slideDuplicateClass)) {
                                const t = i.$wrapperEl.children(`[data-swiper-slide-index="${e}"]:not(.${i.params.slideDuplicateClass})`);
                                i.lazy.loadInSlide(t.index(), !1)
                            } else {
                                const t = i.$wrapperEl.children(`.${i.params.slideDuplicateClass}[data-swiper-slide-index="${e}"]`);
                                i.lazy.loadInSlide(t.index(), !1)
                            }
                        }
                        i.emit("lazyImageReady", s[0], a[0])
                    }
                }), i.emit("lazyImageLoad", s[0], a[0])
            })
        }, load() {
            const e = this, {$wrapperEl: t, params: i, slides: n, activeIndex: s} = e,
                r = e.virtual && i.virtual.enabled, a = i.lazy;
            let o = i.slidesPerView;

            function l(e) {
                if (r) {
                    if (t.children(`.${i.slideClass}[data-swiper-slide-index="${e}"]`).length) return !0
                } else if (n[e]) return !0;
                return !1
            }

            function c(e) {
                return r ? te(e).attr("data-swiper-slide-index") : te(e).index()
            }

            if ("auto" === o && (o = 0), e.lazy.initialImageLoaded || (e.lazy.initialImageLoaded = !0), e.params.watchSlidesVisibility) t.children(`.${i.slideVisibleClass}`).each((t, i) => {
                const n = r ? te(i).attr("data-swiper-slide-index") : te(i).index();
                e.lazy.loadInSlide(n)
            }); else if (o > 1) for (let t = s; t < s + o; t += 1) l(t) && e.lazy.loadInSlide(t); else e.lazy.loadInSlide(s);
            if (a.loadPrevNext) if (o > 1 || a.loadPrevNextAmount && a.loadPrevNextAmount > 1) {
                const t = a.loadPrevNextAmount, i = o, r = Math.min(s + i + Math.max(t, i), n.length),
                    c = Math.max(s - Math.max(i, t), 0);
                for (let t = s + o; t < r; t += 1) l(t) && e.lazy.loadInSlide(t);
                for (let t = c; t < s; t += 1) l(t) && e.lazy.loadInSlide(t)
            } else {
                const n = t.children(`.${i.slideNextClass}`);
                n.length > 0 && e.lazy.loadInSlide(c(n));
                const s = t.children(`.${i.slidePrevClass}`);
                s.length > 0 && e.lazy.loadInSlide(c(s))
            }
        }
    };
    const Re = {
        LinearSpline: function (e, t) {
            const i = function () {
                let e, t, i;
                return (n, s) => {
                    for (t = -1, e = n.length; e - t > 1;) n[i = e + t >> 1] <= s ? t = i : e = i;
                    return e
                }
            }();
            let n, s;
            return this.x = e, this.y = t, this.lastIndex = e.length - 1, this.interpolate = function (e) {
                return e ? (s = i(this.x, e), n = s - 1, (e - this.x[n]) * (this.y[s] - this.y[n]) / (this.x[s] - this.x[n]) + this.y[n]) : 0
            }, this
        }, getInterpolateFunction(e) {
            const t = this;
            t.controller.spline || (t.controller.spline = t.params.loop ? new Re.LinearSpline(t.slidesGrid, e.slidesGrid) : new Re.LinearSpline(t.snapGrid, e.snapGrid))
        }, setTranslate(e, t) {
            const i = this, n = i.controller.control;
            let s, r;

            function a(e) {
                const t = i.rtlTranslate ? -i.translate : i.translate;
                "slide" === i.params.controller.by && (i.controller.getInterpolateFunction(e), r = -i.controller.spline.interpolate(-t)), r && "container" !== i.params.controller.by || (s = (e.maxTranslate() - e.minTranslate()) / (i.maxTranslate() - i.minTranslate()), r = (t - i.minTranslate()) * s + e.minTranslate()), i.params.controller.inverse && (r = e.maxTranslate() - r), e.updateProgress(r), e.setTranslate(r, i), e.updateActiveIndex(), e.updateSlidesClasses()
            }

            if (Array.isArray(n)) for (let e = 0; e < n.length; e += 1) n[e] !== t && n[e] instanceof be && a(n[e]); else n instanceof be && t !== n && a(n)
        }, setTransition(e, t) {
            const i = this, n = i.controller.control;
            let s;

            function r(t) {
                t.setTransition(e, i), 0 !== e && (t.transitionStart(), t.params.autoHeight && se.nextTick(() => {
                    t.updateAutoHeight()
                }), t.$wrapperEl.transitionEnd(() => {
                    n && (t.params.loop && "slide" === i.params.controller.by && t.loopFix(), t.transitionEnd())
                }))
            }

            if (Array.isArray(n)) for (s = 0; s < n.length; s += 1) n[s] !== t && n[s] instanceof be && r(n[s]); else n instanceof be && t !== n && r(n)
        }
    };
    const je = {
        makeElFocusable: e => (e.attr("tabIndex", "0"), e),
        addElRole: (e, t) => (e.attr("role", t), e),
        addElLabel: (e, t) => (e.attr("aria-label", t), e),
        disableEl: e => (e.attr("aria-disabled", !0), e),
        enableEl: e => (e.attr("aria-disabled", !1), e),
        onEnterKey(e) {
            const t = this, i = t.params.a11y;
            if (13 !== e.keyCode) return;
            const n = te(e.target);
            t.navigation && t.navigation.$nextEl && n.is(t.navigation.$nextEl) && (t.isEnd && !t.params.loop || t.slideNext(), t.isEnd ? t.a11y.notify(i.lastSlideMessage) : t.a11y.notify(i.nextSlideMessage)), t.navigation && t.navigation.$prevEl && n.is(t.navigation.$prevEl) && (t.isBeginning && !t.params.loop || t.slidePrev(), t.isBeginning ? t.a11y.notify(i.firstSlideMessage) : t.a11y.notify(i.prevSlideMessage)), t.pagination && n.is(`.${t.params.pagination.bulletClass}`) && n[0].click()
        },
        notify(e) {
            const t = this.a11y.liveRegion;
            0 !== t.length && (t.html(""), t.html(e))
        },
        updateNavigation() {
            const e = this;
            if (e.params.loop) return;
            const {$nextEl: t, $prevEl: i} = e.navigation;
            i && i.length > 0 && (e.isBeginning ? e.a11y.disableEl(i) : e.a11y.enableEl(i)), t && t.length > 0 && (e.isEnd ? e.a11y.disableEl(t) : e.a11y.enableEl(t))
        },
        updatePagination() {
            const e = this, t = e.params.a11y;
            e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length && e.pagination.bullets.each((i, n) => {
                const s = te(n);
                e.a11y.makeElFocusable(s), e.a11y.addElRole(s, "button"), e.a11y.addElLabel(s, t.paginationBulletMessage.replace(/{{index}}/, s.index() + 1))
            })
        },
        init() {
            const e = this;
            e.$el.append(e.a11y.liveRegion);
            const t = e.params.a11y;
            let i, n;
            e.navigation && e.navigation.$nextEl && (i = e.navigation.$nextEl), e.navigation && e.navigation.$prevEl && (n = e.navigation.$prevEl), i && (e.a11y.makeElFocusable(i), e.a11y.addElRole(i, "button"), e.a11y.addElLabel(i, t.nextSlideMessage), i.on("keydown", e.a11y.onEnterKey)), n && (e.a11y.makeElFocusable(n), e.a11y.addElRole(n, "button"), e.a11y.addElLabel(n, t.prevSlideMessage), n.on("keydown", e.a11y.onEnterKey)), e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length && e.pagination.$el.on("keydown", `.${e.params.pagination.bulletClass}`, e.a11y.onEnterKey)
        },
        destroy() {
            const e = this;
            let t, i;
            e.a11y.liveRegion && e.a11y.liveRegion.length > 0 && e.a11y.liveRegion.remove(), e.navigation && e.navigation.$nextEl && (t = e.navigation.$nextEl), e.navigation && e.navigation.$prevEl && (i = e.navigation.$prevEl), t && t.off("keydown", e.a11y.onEnterKey), i && i.off("keydown", e.a11y.onEnterKey), e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length && e.pagination.$el.off("keydown", `.${e.params.pagination.bulletClass}`, e.a11y.onEnterKey)
        }
    };
    const He = {
        init() {
            const e = this;
            if (!e.params.history) return;
            if (!J.history || !J.history.pushState) return e.params.history.enabled = !1, void (e.params.hashNavigation.enabled = !0);
            const t = e.history;
            t.initialized = !0, t.paths = He.getPathValues(), (t.paths.key || t.paths.value) && (t.scrollToSlide(0, t.paths.value, e.params.runCallbacksOnInit), e.params.history.replaceState || J.addEventListener("popstate", e.history.setHistoryPopState))
        },
        destroy() {
            const e = this;
            e.params.history.replaceState || J.removeEventListener("popstate", e.history.setHistoryPopState)
        },
        setHistoryPopState() {
            this.history.paths = He.getPathValues(), this.history.scrollToSlide(this.params.speed, this.history.paths.value, !1)
        },
        getPathValues() {
            const e = J.location.pathname.slice(1).split("/").filter(e => "" !== e), t = e.length;
            return {key: e[t - 2], value: e[t - 1]}
        },
        setHistory(e, t) {
            if (!this.history.initialized || !this.params.history.enabled) return;
            const i = this.slides.eq(t);
            let n = He.slugify(i.attr("data-history"));
            J.location.pathname.includes(e) || (n = `${e}/${n}`);
            const s = J.history.state;
            s && s.value === n || (this.params.history.replaceState ? J.history.replaceState({value: n}, null, n) : J.history.pushState({value: n}, null, n))
        },
        slugify: e => e.toString().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, ""),
        scrollToSlide(e, t, i) {
            const n = this;
            if (t) for (let s = 0, r = n.slides.length; s < r; s += 1) {
                const r = n.slides.eq(s);
                if (He.slugify(r.attr("data-history")) === t && !r.hasClass(n.params.slideDuplicateClass)) {
                    const t = r.index();
                    n.slideTo(t, e, i)
                }
            } else n.slideTo(0, e, i)
        }
    };
    const Fe = {
        onHashCange() {
            const e = this, t = Q.location.hash.replace("#", "");
            if (t !== e.slides.eq(e.activeIndex).attr("data-hash")) {
                const i = e.$wrapperEl.children(`.${e.params.slideClass}[data-hash="${t}"]`).index();
                if (void 0 === i) return;
                e.slideTo(i)
            }
        }, setHash() {
            const e = this;
            if (e.hashNavigation.initialized && e.params.hashNavigation.enabled) if (e.params.hashNavigation.replaceState && J.history && J.history.replaceState) J.history.replaceState(null, null, `#${e.slides.eq(e.activeIndex).attr("data-hash")}` || ""); else {
                const t = e.slides.eq(e.activeIndex), i = t.attr("data-hash") || t.attr("data-history");
                Q.location.hash = i || ""
            }
        }, init() {
            const e = this;
            if (!e.params.hashNavigation.enabled || e.params.history && e.params.history.enabled) return;
            e.hashNavigation.initialized = !0;
            const t = Q.location.hash.replace("#", "");
            if (t) {
                const i = 0;
                for (let n = 0, s = e.slides.length; n < s; n += 1) {
                    const s = e.slides.eq(n);
                    if ((s.attr("data-hash") || s.attr("data-history")) === t && !s.hasClass(e.params.slideDuplicateClass)) {
                        const t = s.index();
                        e.slideTo(t, i, e.params.runCallbacksOnInit, !0)
                    }
                }
            }
            e.params.hashNavigation.watchState && te(J).on("hashchange", e.hashNavigation.onHashCange)
        }, destroy() {
            const e = this;
            e.params.hashNavigation.watchState && te(J).off("hashchange", e.hashNavigation.onHashCange)
        }
    };
    const Be = {
        run() {
            const e = this, t = e.slides.eq(e.activeIndex);
            let i = e.params.autoplay.delay;
            t.attr("data-swiper-autoplay") && (i = t.attr("data-swiper-autoplay") || e.params.autoplay.delay), clearTimeout(e.autoplay.timeout), e.autoplay.timeout = se.nextTick(() => {
                e.params.autoplay.reverseDirection ? e.params.loop ? (e.loopFix(), e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.isBeginning ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(e.slides.length - 1, e.params.speed, !0, !0), e.emit("autoplay")) : (e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.params.loop ? (e.loopFix(), e.slideNext(e.params.speed, !0, !0), e.emit("autoplay")) : e.isEnd ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(0, e.params.speed, !0, !0), e.emit("autoplay")) : (e.slideNext(e.params.speed, !0, !0), e.emit("autoplay"))
            }, i)
        }, start() {
            return void 0 === this.autoplay.timeout && (!this.autoplay.running && (this.autoplay.running = !0, this.emit("autoplayStart"), this.autoplay.run(), !0))
        }, stop() {
            const e = this;
            return !!e.autoplay.running && (void 0 !== e.autoplay.timeout && (e.autoplay.timeout && (clearTimeout(e.autoplay.timeout), e.autoplay.timeout = void 0), e.autoplay.running = !1, e.emit("autoplayStop"), !0))
        }, pause(e) {
            const t = this;
            t.autoplay.running && (t.autoplay.paused || (t.autoplay.timeout && clearTimeout(t.autoplay.timeout), t.autoplay.paused = !0, 0 !== e && t.params.autoplay.waitForTransition ? (t.$wrapperEl[0].addEventListener("transitionend", t.autoplay.onTransitionEnd), t.$wrapperEl[0].addEventListener("webkitTransitionEnd", t.autoplay.onTransitionEnd)) : (t.autoplay.paused = !1, t.autoplay.run())))
        }
    };
    const qe = {
        setTranslate() {
            const e = this, {slides: t} = e;
            for (let i = 0; i < t.length; i += 1) {
                const t = e.slides.eq(i);
                let n = -t[0].swiperSlideOffset;
                e.params.virtualTranslate || (n -= e.translate);
                let s = 0;
                e.isHorizontal() || (s = n, n = 0);
                const r = e.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(t[0].progress), 0) : 1 + Math.min(Math.max(t[0].progress, -1), 0);
                t.css({opacity: r}).transform(`translate3d(${n}px, ${s}px, 0px)`)
            }
        }, setTransition(e) {
            const t = this, {slides: i, $wrapperEl: n} = t;
            if (i.transition(e), t.params.virtualTranslate && 0 !== e) {
                let e = !1;
                i.transitionEnd(() => {
                    if (e) return;
                    if (!t || t.destroyed) return;
                    e = !0, t.animating = !1;
                    const i = ["webkitTransitionEnd", "transitionend"];
                    for (let e = 0; e < i.length; e += 1) n.trigger(i[e])
                })
            }
        }
    };
    const Xe = {
        setTranslate() {
            const {$el: e, $wrapperEl: t, slides: i, width: n, height: s, rtlTranslate: r, size: a} = this,
                o = this.params.cubeEffect, l = this.isHorizontal(), c = this.virtual && this.params.virtual.enabled;
            let u, d = 0;
            o.shadow && (l ? (0 === (u = t.find(".swiper-cube-shadow")).length && (u = te('<div class="swiper-cube-shadow"></div>'), t.append(u)), u.css({height: `${n}px`})) : 0 === (u = e.find(".swiper-cube-shadow")).length && (u = te('<div class="swiper-cube-shadow"></div>'), e.append(u)));
            for (let e = 0; e < i.length; e += 1) {
                const t = i.eq(e);
                let n = e;
                c && (n = parseInt(t.attr("data-swiper-slide-index"), 10));
                let s = 90 * n, u = Math.floor(s / 360);
                r && (s = -s, u = Math.floor(-s / 360));
                const h = Math.max(Math.min(t[0].progress, 1), -1);
                let p = 0, f = 0, m = 0;
                n % 4 == 0 ? (p = 4 * -u * a, m = 0) : (n - 1) % 4 == 0 ? (p = 0, m = 4 * -u * a) : (n - 2) % 4 == 0 ? (p = a + 4 * u * a, m = a) : (n - 3) % 4 == 0 && (p = -a, m = 3 * a + 4 * a * u), r && (p = -p), l || (f = p, p = 0);
                const g = `rotateX(${l ? 0 : -s}deg) rotateY(${l ? s : 0}deg) translate3d(${p}px, ${f}px, ${m}px)`;
                if (h <= 1 && h > -1 && (d = 90 * n + 90 * h, r && (d = 90 * -n - 90 * h)), t.transform(g), o.slideShadows) {
                    let e = l ? t.find(".swiper-slide-shadow-left") : t.find(".swiper-slide-shadow-top"),
                        i = l ? t.find(".swiper-slide-shadow-right") : t.find(".swiper-slide-shadow-bottom");
                    0 === e.length && (e = te(`<div class="swiper-slide-shadow-${l ? "left" : "top"}"></div>`), t.append(e)), 0 === i.length && (i = te(`<div class="swiper-slide-shadow-${l ? "right" : "bottom"}"></div>`), t.append(i)), e.length && (e[0].style.opacity = Math.max(-h, 0)), i.length && (i[0].style.opacity = Math.max(h, 0))
                }
            }
            if (t.css({
                "-webkit-transform-origin": `50% 50% -${a / 2}px`,
                "-moz-transform-origin": `50% 50% -${a / 2}px`,
                "-ms-transform-origin": `50% 50% -${a / 2}px`,
                "transform-origin": `50% 50% -${a / 2}px`
            }), o.shadow) if (l) u.transform(`translate3d(0px, ${n / 2 + o.shadowOffset}px, ${-n / 2}px) rotateX(90deg) rotateZ(0deg) scale(${o.shadowScale})`); else {
                const e = Math.abs(d) - 90 * Math.floor(Math.abs(d) / 90),
                    t = 1.5 - (Math.sin(2 * e * Math.PI / 360) / 2 + Math.cos(2 * e * Math.PI / 360) / 2),
                    i = o.shadowScale, n = o.shadowScale / t, r = o.shadowOffset;
                u.transform(`scale3d(${i}, 1, ${n}) translate3d(0px, ${s / 2 + r}px, ${-s / 2 / n}px) rotateX(-90deg)`)
            }
            const h = ae.isSafari || ae.isUiWebView ? -a / 2 : 0;
            t.transform(`translate3d(0px,0,${h}px) rotateX(${this.isHorizontal() ? 0 : d}deg) rotateY(${this.isHorizontal() ? -d : 0}deg)`)
        }, setTransition(e) {
            const {$el: t, slides: i} = this;
            i.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), this.params.cubeEffect.shadow && !this.isHorizontal() && t.find(".swiper-cube-shadow").transition(e)
        }
    };
    const Ye = {
        setTranslate() {
            const e = this, {slides: t, rtlTranslate: i} = e;
            for (let n = 0; n < t.length; n += 1) {
                const s = t.eq(n);
                let r = s[0].progress;
                e.params.flipEffect.limitRotation && (r = Math.max(Math.min(s[0].progress, 1), -1));
                let a = -180 * r, o = 0, l = -s[0].swiperSlideOffset, c = 0;
                if (e.isHorizontal() ? i && (a = -a) : (c = l, l = 0, o = -a, a = 0), s[0].style.zIndex = -Math.abs(Math.round(r)) + t.length, e.params.flipEffect.slideShadows) {
                    let t = e.isHorizontal() ? s.find(".swiper-slide-shadow-left") : s.find(".swiper-slide-shadow-top"),
                        i = e.isHorizontal() ? s.find(".swiper-slide-shadow-right") : s.find(".swiper-slide-shadow-bottom");
                    0 === t.length && (t = te(`<div class="swiper-slide-shadow-${e.isHorizontal() ? "left" : "top"}"></div>`), s.append(t)), 0 === i.length && (i = te(`<div class="swiper-slide-shadow-${e.isHorizontal() ? "right" : "bottom"}"></div>`), s.append(i)), t.length && (t[0].style.opacity = Math.max(-r, 0)), i.length && (i[0].style.opacity = Math.max(r, 0))
                }
                s.transform(`translate3d(${l}px, ${c}px, 0px) rotateX(${o}deg) rotateY(${a}deg)`)
            }
        }, setTransition(e) {
            const t = this, {slides: i, activeIndex: n, $wrapperEl: s} = t;
            if (i.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), t.params.virtualTranslate && 0 !== e) {
                let e = !1;
                i.eq(n).transitionEnd(function () {
                    if (e) return;
                    if (!t || t.destroyed) return;
                    e = !0, t.animating = !1;
                    const i = ["webkitTransitionEnd", "transitionend"];
                    for (let e = 0; e < i.length; e += 1) s.trigger(i[e])
                })
            }
        }
    };
    const Ve = {
        setTranslate() {
            const {width: e, height: t, slides: i, $wrapperEl: n, slidesSizesGrid: s} = this,
                r = this.params.coverflowEffect, a = this.isHorizontal(), o = this.translate,
                l = a ? e / 2 - o : t / 2 - o, c = a ? r.rotate : -r.rotate, u = r.depth;
            for (let e = 0, t = i.length; e < t; e += 1) {
                const t = i.eq(e), n = s[e], o = (l - t[0].swiperSlideOffset - n / 2) / n * r.modifier;
                let d = a ? c * o : 0, h = a ? 0 : c * o, p = -u * Math.abs(o), f = a ? 0 : r.stretch * o,
                    m = a ? r.stretch * o : 0;
                Math.abs(m) < .001 && (m = 0), Math.abs(f) < .001 && (f = 0), Math.abs(p) < .001 && (p = 0), Math.abs(d) < .001 && (d = 0), Math.abs(h) < .001 && (h = 0);
                const g = `translate3d(${m}px,${f}px,${p}px)  rotateX(${h}deg) rotateY(${d}deg)`;
                if (t.transform(g), t[0].style.zIndex = 1 - Math.abs(Math.round(o)), r.slideShadows) {
                    let e = a ? t.find(".swiper-slide-shadow-left") : t.find(".swiper-slide-shadow-top"),
                        i = a ? t.find(".swiper-slide-shadow-right") : t.find(".swiper-slide-shadow-bottom");
                    0 === e.length && (e = te(`<div class="swiper-slide-shadow-${a ? "left" : "top"}"></div>`), t.append(e)), 0 === i.length && (i = te(`<div class="swiper-slide-shadow-${a ? "right" : "bottom"}"></div>`), t.append(i)), e.length && (e[0].style.opacity = o > 0 ? o : 0), i.length && (i[0].style.opacity = -o > 0 ? -o : 0)
                }
            }
            if (re.pointerEvents || re.prefixedPointerEvents) {
                n[0].style.perspectiveOrigin = `${l}px 50%`
            }
        }, setTransition(e) {
            this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)
        }
    };
    const Ge = {
        init() {
            const e = this, {thumbs: t} = e.params, i = e.constructor;
            t.swiper instanceof i ? (e.thumbs.swiper = t.swiper, se.extend(e.thumbs.swiper.originalParams, {
                watchSlidesProgress: !0,
                slideToClickedSlide: !1
            }), se.extend(e.thumbs.swiper.params, {
                watchSlidesProgress: !0,
                slideToClickedSlide: !1
            })) : se.isObject(t.swiper) && (e.thumbs.swiper = new i(se.extend({}, t.swiper, {
                watchSlidesVisibility: !0,
                watchSlidesProgress: !0,
                slideToClickedSlide: !1
            })), e.thumbs.swiperCreated = !0), e.thumbs.swiper.$el.addClass(e.params.thumbs.thumbsContainerClass), e.thumbs.swiper.on("tap", e.thumbs.onThumbClick)
        }, onThumbClick() {
            const e = this, t = e.thumbs.swiper;
            if (!t) return;
            const i = t.clickedIndex, n = t.clickedSlide;
            if (n && te(n).hasClass(e.params.thumbs.slideThumbActiveClass)) return;
            if (null == i) return;
            let s;
            if (s = t.params.loop ? parseInt(te(t.clickedSlide).attr("data-swiper-slide-index"), 10) : i, e.params.loop) {
                let t = e.activeIndex;
                e.slides.eq(t).hasClass(e.params.slideDuplicateClass) && (e.loopFix(), e._clientLeft = e.$wrapperEl[0].clientLeft, t = e.activeIndex);
                const i = e.slides.eq(t).prevAll(`[data-swiper-slide-index="${s}"]`).eq(0).index(),
                    n = e.slides.eq(t).nextAll(`[data-swiper-slide-index="${s}"]`).eq(0).index();
                s = void 0 === i ? n : void 0 === n ? i : n - t < t - i ? n : i
            }
            e.slideTo(s)
        }, update(e) {
            const t = this, i = t.thumbs.swiper;
            if (!i) return;
            const n = "auto" === i.params.slidesPerView ? i.slidesPerViewDynamic() : i.params.slidesPerView;
            if (t.realIndex !== i.realIndex) {
                let s, r = i.activeIndex;
                if (i.params.loop) {
                    i.slides.eq(r).hasClass(i.params.slideDuplicateClass) && (i.loopFix(), i._clientLeft = i.$wrapperEl[0].clientLeft, r = i.activeIndex);
                    const e = i.slides.eq(r).prevAll(`[data-swiper-slide-index="${t.realIndex}"]`).eq(0).index(),
                        n = i.slides.eq(r).nextAll(`[data-swiper-slide-index="${t.realIndex}"]`).eq(0).index();
                    s = void 0 === e ? n : void 0 === n ? e : n - r == r - e ? r : n - r < r - e ? n : e
                } else s = t.realIndex;
                i.visibleSlidesIndexes && i.visibleSlidesIndexes.indexOf(s) < 0 && (i.params.centeredSlides ? s = s > r ? s - Math.floor(n / 2) + 1 : s + Math.floor(n / 2) - 1 : s > r && (s = s - n + 1), i.slideTo(s, e ? 0 : void 0))
            }
            let s = 1;
            const r = t.params.thumbs.slideThumbActiveClass;
            if (t.params.slidesPerView > 1 && !t.params.centeredSlides && (s = t.params.slidesPerView), i.slides.removeClass(r), i.params.loop || i.params.virtual) for (let e = 0; e < s; e += 1) i.$wrapperEl.children(`[data-swiper-slide-index="${t.realIndex + e}"]`).addClass(r); else for (let e = 0; e < s; e += 1) i.slides.eq(t.realIndex + e).addClass(r)
        }
    };
    const We = [xe, we, Te, Ce, Ee, ke, $e, {
        name: "mousewheel",
        params: {
            mousewheel: {
                enabled: !1,
                releaseOnEdges: !1,
                invert: !1,
                forceToAxis: !1,
                sensitivity: 1,
                eventsTarged: "container"
            }
        },
        create() {
            se.extend(this, {
                mousewheel: {
                    enabled: !1,
                    enable: Oe.enable.bind(this),
                    disable: Oe.disable.bind(this),
                    handle: Oe.handle.bind(this),
                    handleMouseEnter: Oe.handleMouseEnter.bind(this),
                    handleMouseLeave: Oe.handleMouseLeave.bind(this),
                    lastScrollTime: se.now()
                }
            })
        },
        on: {
            init() {
                this.params.mousewheel.enabled && this.mousewheel.enable()
            }, destroy() {
                this.mousewheel.enabled && this.mousewheel.disable()
            }
        }
    }, {
        name: "navigation",
        params: {
            navigation: {
                nextEl: null,
                prevEl: null,
                hideOnClick: !1,
                disabledClass: "swiper-button-disabled",
                hiddenClass: "swiper-button-hidden",
                lockClass: "swiper-button-lock"
            }
        },
        create() {
            se.extend(this, {
                navigation: {
                    init: Ae.init.bind(this),
                    update: Ae.update.bind(this),
                    destroy: Ae.destroy.bind(this),
                    onNextClick: Ae.onNextClick.bind(this),
                    onPrevClick: Ae.onPrevClick.bind(this)
                }
            })
        },
        on: {
            init() {
                this.navigation.init(), this.navigation.update()
            }, toEdge() {
                this.navigation.update()
            }, fromEdge() {
                this.navigation.update()
            }, destroy() {
                this.navigation.destroy()
            }, click(e) {
                const t = this, {$nextEl: i, $prevEl: n} = t.navigation;
                if (t.params.navigation.hideOnClick && !te(e.target).is(n) && !te(e.target).is(i)) {
                    let e;
                    i ? e = i.hasClass(t.params.navigation.hiddenClass) : n && (e = n.hasClass(t.params.navigation.hiddenClass)), !0 === e ? t.emit("navigationShow", t) : t.emit("navigationHide", t), i && i.toggleClass(t.params.navigation.hiddenClass), n && n.toggleClass(t.params.navigation.hiddenClass)
                }
            }
        }
    }, {
        name: "pagination",
        params: {
            pagination: {
                el: null,
                bulletElement: "span",
                clickable: !1,
                hideOnClick: !1,
                renderBullet: null,
                renderProgressbar: null,
                renderFraction: null,
                renderCustom: null,
                progressbarOpposite: !1,
                type: "bullets",
                dynamicBullets: !1,
                dynamicMainBullets: 1,
                formatFractionCurrent: e => e,
                formatFractionTotal: e => e,
                bulletClass: "swiper-pagination-bullet",
                bulletActiveClass: "swiper-pagination-bullet-active",
                modifierClass: "swiper-pagination-",
                currentClass: "swiper-pagination-current",
                totalClass: "swiper-pagination-total",
                hiddenClass: "swiper-pagination-hidden",
                progressbarFillClass: "swiper-pagination-progressbar-fill",
                progressbarOppositeClass: "swiper-pagination-progressbar-opposite",
                clickableClass: "swiper-pagination-clickable",
                lockClass: "swiper-pagination-lock"
            }
        },
        create() {
            se.extend(this, {
                pagination: {
                    init: De.init.bind(this),
                    render: De.render.bind(this),
                    update: De.update.bind(this),
                    destroy: De.destroy.bind(this),
                    dynamicBulletIndex: 0
                }
            })
        },
        on: {
            init() {
                this.pagination.init(), this.pagination.render(), this.pagination.update()
            }, activeIndexChange() {
                const e = this;
                e.params.loop ? e.pagination.update() : void 0 === e.snapIndex && e.pagination.update()
            }, snapIndexChange() {
                const e = this;
                e.params.loop || e.pagination.update()
            }, slidesLengthChange() {
                const e = this;
                e.params.loop && (e.pagination.render(), e.pagination.update())
            }, snapGridLengthChange() {
                const e = this;
                e.params.loop || (e.pagination.render(), e.pagination.update())
            }, destroy() {
                this.pagination.destroy()
            }, click(e) {
                const t = this;
                if (t.params.pagination.el && t.params.pagination.hideOnClick && t.pagination.$el.length > 0 && !te(e.target).hasClass(t.params.pagination.bulletClass)) {
                    !0 === t.pagination.$el.hasClass(t.params.pagination.hiddenClass) ? t.emit("paginationShow", t) : t.emit("paginationHide", t), t.pagination.$el.toggleClass(t.params.pagination.hiddenClass)
                }
            }
        }
    }, {
        name: "scrollbar",
        params: {
            scrollbar: {
                el: null,
                dragSize: "auto",
                hide: !1,
                draggable: !1,
                snapOnRelease: !0,
                lockClass: "swiper-scrollbar-lock",
                dragClass: "swiper-scrollbar-drag"
            }
        },
        create() {
            se.extend(this, {
                scrollbar: {
                    init: Le.init.bind(this),
                    destroy: Le.destroy.bind(this),
                    updateSize: Le.updateSize.bind(this),
                    setTranslate: Le.setTranslate.bind(this),
                    setTransition: Le.setTransition.bind(this),
                    enableDraggable: Le.enableDraggable.bind(this),
                    disableDraggable: Le.disableDraggable.bind(this),
                    setDragPosition: Le.setDragPosition.bind(this),
                    getPointerPosition: Le.getPointerPosition.bind(this),
                    onDragStart: Le.onDragStart.bind(this),
                    onDragMove: Le.onDragMove.bind(this),
                    onDragEnd: Le.onDragEnd.bind(this),
                    isTouched: !1,
                    timeout: null,
                    dragTimeout: null
                }
            })
        },
        on: {
            init() {
                this.scrollbar.init(), this.scrollbar.updateSize(), this.scrollbar.setTranslate()
            }, update() {
                this.scrollbar.updateSize()
            }, resize() {
                this.scrollbar.updateSize()
            }, observerUpdate() {
                this.scrollbar.updateSize()
            }, setTranslate() {
                this.scrollbar.setTranslate()
            }, setTransition(e) {
                this.scrollbar.setTransition(e)
            }, destroy() {
                this.scrollbar.destroy()
            }
        }
    }, {
        name: "parallax", params: {parallax: {enabled: !1}}, create() {
            se.extend(this, {
                parallax: {
                    setTransform: ze.setTransform.bind(this),
                    setTranslate: ze.setTranslate.bind(this),
                    setTransition: ze.setTransition.bind(this)
                }
            })
        }, on: {
            beforeInit() {
                this.params.parallax.enabled && (this.params.watchSlidesProgress = !0, this.originalParams.watchSlidesProgress = !0)
            }, init() {
                this.params.parallax.enabled && this.parallax.setTranslate()
            }, setTranslate() {
                this.params.parallax.enabled && this.parallax.setTranslate()
            }, setTransition(e) {
                this.params.parallax.enabled && this.parallax.setTransition(e)
            }
        }
    }, {
        name: "zoom",
        params: {
            zoom: {
                enabled: !1,
                maxRatio: 3,
                minRatio: 1,
                toggle: !0,
                containerClass: "swiper-zoom-container",
                zoomedSlideClass: "swiper-slide-zoomed"
            }
        },
        create() {
            const e = this, t = {
                enabled: !1,
                scale: 1,
                currentScale: 1,
                isScaling: !1,
                gesture: {
                    $slideEl: void 0,
                    slideWidth: void 0,
                    slideHeight: void 0,
                    $imageEl: void 0,
                    $imageWrapEl: void 0,
                    maxRatio: 3
                },
                image: {
                    isTouched: void 0,
                    isMoved: void 0,
                    currentX: void 0,
                    currentY: void 0,
                    minX: void 0,
                    minY: void 0,
                    maxX: void 0,
                    maxY: void 0,
                    width: void 0,
                    height: void 0,
                    startX: void 0,
                    startY: void 0,
                    touchesStart: {},
                    touchesCurrent: {}
                },
                velocity: {x: void 0, y: void 0, prevPositionX: void 0, prevPositionY: void 0, prevTime: void 0}
            };
            "onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out".split(" ").forEach(i => {
                t[i] = Ie[i].bind(e)
            }), se.extend(e, {zoom: t});
            let i = 1;
            Object.defineProperty(e.zoom, "scale", {
                get: () => i, set(t) {
                    if (i !== t) {
                        const i = e.zoom.gesture.$imageEl ? e.zoom.gesture.$imageEl[0] : void 0,
                            n = e.zoom.gesture.$slideEl ? e.zoom.gesture.$slideEl[0] : void 0;
                        e.emit("zoomChange", t, i, n)
                    }
                    i = t
                }
            })
        },
        on: {
            init() {
                const e = this;
                e.params.zoom.enabled && e.zoom.enable()
            }, destroy() {
                this.zoom.disable()
            }, touchStart(e) {
                this.zoom.enabled && this.zoom.onTouchStart(e)
            }, touchEnd(e) {
                this.zoom.enabled && this.zoom.onTouchEnd(e)
            }, doubleTap(e) {
                const t = this;
                t.params.zoom.enabled && t.zoom.enabled && t.params.zoom.toggle && t.zoom.toggle(e)
            }, transitionEnd() {
                const e = this;
                e.zoom.enabled && e.params.zoom.enabled && e.zoom.onTransitionEnd()
            }
        }
    }, {
        name: "lazy",
        params: {
            lazy: {
                enabled: !1,
                loadPrevNext: !1,
                loadPrevNextAmount: 1,
                loadOnTransitionStart: !1,
                elementClass: "swiper-lazy",
                loadingClass: "swiper-lazy-loading",
                loadedClass: "swiper-lazy-loaded",
                preloaderClass: "swiper-lazy-preloader"
            }
        },
        create() {
            se.extend(this, {
                lazy: {
                    initialImageLoaded: !1,
                    load: Ne.load.bind(this),
                    loadInSlide: Ne.loadInSlide.bind(this)
                }
            })
        },
        on: {
            beforeInit() {
                const e = this;
                e.params.lazy.enabled && e.params.preloadImages && (e.params.preloadImages = !1)
            }, init() {
                const e = this;
                e.params.lazy.enabled && !e.params.loop && 0 === e.params.initialSlide && e.lazy.load()
            }, scroll() {
                const e = this;
                e.params.freeMode && !e.params.freeModeSticky && e.lazy.load()
            }, resize() {
                const e = this;
                e.params.lazy.enabled && e.lazy.load()
            }, scrollbarDragMove() {
                const e = this;
                e.params.lazy.enabled && e.lazy.load()
            }, transitionStart() {
                const e = this;
                e.params.lazy.enabled && (e.params.lazy.loadOnTransitionStart || !e.params.lazy.loadOnTransitionStart && !e.lazy.initialImageLoaded) && e.lazy.load()
            }, transitionEnd() {
                const e = this;
                e.params.lazy.enabled && !e.params.lazy.loadOnTransitionStart && e.lazy.load()
            }
        }
    }, {
        name: "controller", params: {controller: {control: void 0, inverse: !1, by: "slide"}}, create() {
            se.extend(this, {
                controller: {
                    control: this.params.controller.control,
                    getInterpolateFunction: Re.getInterpolateFunction.bind(this),
                    setTranslate: Re.setTranslate.bind(this),
                    setTransition: Re.setTransition.bind(this)
                }
            })
        }, on: {
            update() {
                const e = this;
                e.controller.control && e.controller.spline && (e.controller.spline = void 0, delete e.controller.spline)
            }, resize() {
                const e = this;
                e.controller.control && e.controller.spline && (e.controller.spline = void 0, delete e.controller.spline)
            }, observerUpdate() {
                const e = this;
                e.controller.control && e.controller.spline && (e.controller.spline = void 0, delete e.controller.spline)
            }, setTranslate(e, t) {
                this.controller.control && this.controller.setTranslate(e, t)
            }, setTransition(e, t) {
                this.controller.control && this.controller.setTransition(e, t)
            }
        }
    }, {
        name: "a11y",
        params: {
            a11y: {
                enabled: !0,
                notificationClass: "swiper-notification",
                prevSlideMessage: "Previous slide",
                nextSlideMessage: "Next slide",
                firstSlideMessage: "This is the first slide",
                lastSlideMessage: "This is the last slide",
                paginationBulletMessage: "Go to slide {{index}}"
            }
        },
        create() {
            const e = this;
            se.extend(e, {a11y: {liveRegion: te(`<span class="${e.params.a11y.notificationClass}" aria-live="assertive" aria-atomic="true"></span>`)}}), Object.keys(je).forEach(t => {
                e.a11y[t] = je[t].bind(e)
            })
        },
        on: {
            init() {
                this.params.a11y.enabled && (this.a11y.init(), this.a11y.updateNavigation())
            }, toEdge() {
                this.params.a11y.enabled && this.a11y.updateNavigation()
            }, fromEdge() {
                this.params.a11y.enabled && this.a11y.updateNavigation()
            }, paginationUpdate() {
                this.params.a11y.enabled && this.a11y.updatePagination()
            }, destroy() {
                this.params.a11y.enabled && this.a11y.destroy()
            }
        }
    }, {
        name: "history", params: {history: {enabled: !1, replaceState: !1, key: "slides"}}, create() {
            se.extend(this, {
                history: {
                    init: He.init.bind(this),
                    setHistory: He.setHistory.bind(this),
                    setHistoryPopState: He.setHistoryPopState.bind(this),
                    scrollToSlide: He.scrollToSlide.bind(this),
                    destroy: He.destroy.bind(this)
                }
            })
        }, on: {
            init() {
                const e = this;
                e.params.history.enabled && e.history.init()
            }, destroy() {
                const e = this;
                e.params.history.enabled && e.history.destroy()
            }, transitionEnd() {
                const e = this;
                e.history.initialized && e.history.setHistory(e.params.history.key, e.activeIndex)
            }
        }
    }, {
        name: "hash-navigation", params: {hashNavigation: {enabled: !1, replaceState: !1, watchState: !1}}, create() {
            se.extend(this, {
                hashNavigation: {
                    initialized: !1,
                    init: Fe.init.bind(this),
                    destroy: Fe.destroy.bind(this),
                    setHash: Fe.setHash.bind(this),
                    onHashCange: Fe.onHashCange.bind(this)
                }
            })
        }, on: {
            init() {
                const e = this;
                e.params.hashNavigation.enabled && e.hashNavigation.init()
            }, destroy() {
                const e = this;
                e.params.hashNavigation.enabled && e.hashNavigation.destroy()
            }, transitionEnd() {
                const e = this;
                e.hashNavigation.initialized && e.hashNavigation.setHash()
            }
        }
    }, {
        name: "autoplay",
        params: {
            autoplay: {
                enabled: !1,
                delay: 3e3,
                waitForTransition: !0,
                disableOnInteraction: !0,
                stopOnLastSlide: !1,
                reverseDirection: !1
            }
        },
        create() {
            const e = this;
            se.extend(e, {
                autoplay: {
                    running: !1,
                    paused: !1,
                    run: Be.run.bind(e),
                    start: Be.start.bind(e),
                    stop: Be.stop.bind(e),
                    pause: Be.pause.bind(e),
                    onTransitionEnd(t) {
                        e && !e.destroyed && e.$wrapperEl && t.target === this && (e.$wrapperEl[0].removeEventListener("transitionend", e.autoplay.onTransitionEnd), e.$wrapperEl[0].removeEventListener("webkitTransitionEnd", e.autoplay.onTransitionEnd), e.autoplay.paused = !1, e.autoplay.running ? e.autoplay.run() : e.autoplay.stop())
                    }
                }
            })
        },
        on: {
            init() {
                const e = this;
                e.params.autoplay.enabled && e.autoplay.start()
            }, beforeTransitionStart(e, t) {
                const i = this;
                i.autoplay.running && (t || !i.params.autoplay.disableOnInteraction ? i.autoplay.pause(e) : i.autoplay.stop())
            }, sliderFirstMove() {
                const e = this;
                e.autoplay.running && (e.params.autoplay.disableOnInteraction ? e.autoplay.stop() : e.autoplay.pause())
            }, destroy() {
                const e = this;
                e.autoplay.running && e.autoplay.stop()
            }
        }
    }, {
        name: "effect-fade", params: {fadeEffect: {crossFade: !1}}, create() {
            se.extend(this, {
                fadeEffect: {
                    setTranslate: qe.setTranslate.bind(this),
                    setTransition: qe.setTransition.bind(this)
                }
            })
        }, on: {
            beforeInit() {
                if ("fade" !== this.params.effect) return;
                this.classNames.push(`${this.params.containerModifierClass}fade`);
                const e = {
                    slidesPerView: 1,
                    slidesPerColumn: 1,
                    slidesPerGroup: 1,
                    watchSlidesProgress: !0,
                    spaceBetween: 0,
                    virtualTranslate: !0
                };
                se.extend(this.params, e), se.extend(this.originalParams, e)
            }, setTranslate() {
                "fade" === this.params.effect && this.fadeEffect.setTranslate()
            }, setTransition(e) {
                "fade" === this.params.effect && this.fadeEffect.setTransition(e)
            }
        }
    }, {
        name: "effect-cube",
        params: {cubeEffect: {slideShadows: !0, shadow: !0, shadowOffset: 20, shadowScale: .94}},
        create() {
            se.extend(this, {
                cubeEffect: {
                    setTranslate: Xe.setTranslate.bind(this),
                    setTransition: Xe.setTransition.bind(this)
                }
            })
        },
        on: {
            beforeInit() {
                if ("cube" !== this.params.effect) return;
                this.classNames.push(`${this.params.containerModifierClass}cube`), this.classNames.push(`${this.params.containerModifierClass}3d`);
                const e = {
                    slidesPerView: 1,
                    slidesPerColumn: 1,
                    slidesPerGroup: 1,
                    watchSlidesProgress: !0,
                    resistanceRatio: 0,
                    spaceBetween: 0,
                    centeredSlides: !1,
                    virtualTranslate: !0
                };
                se.extend(this.params, e), se.extend(this.originalParams, e)
            }, setTranslate() {
                "cube" === this.params.effect && this.cubeEffect.setTranslate()
            }, setTransition(e) {
                "cube" === this.params.effect && this.cubeEffect.setTransition(e)
            }
        }
    }, {
        name: "effect-flip", params: {flipEffect: {slideShadows: !0, limitRotation: !0}}, create() {
            se.extend(this, {
                flipEffect: {
                    setTranslate: Ye.setTranslate.bind(this),
                    setTransition: Ye.setTransition.bind(this)
                }
            })
        }, on: {
            beforeInit() {
                if ("flip" !== this.params.effect) return;
                this.classNames.push(`${this.params.containerModifierClass}flip`), this.classNames.push(`${this.params.containerModifierClass}3d`);
                const e = {
                    slidesPerView: 1,
                    slidesPerColumn: 1,
                    slidesPerGroup: 1,
                    watchSlidesProgress: !0,
                    spaceBetween: 0,
                    virtualTranslate: !0
                };
                se.extend(this.params, e), se.extend(this.originalParams, e)
            }, setTranslate() {
                "flip" === this.params.effect && this.flipEffect.setTranslate()
            }, setTransition(e) {
                "flip" === this.params.effect && this.flipEffect.setTransition(e)
            }
        }
    }, {
        name: "effect-coverflow",
        params: {coverflowEffect: {rotate: 50, stretch: 0, depth: 100, modifier: 1, slideShadows: !0}},
        create() {
            se.extend(this, {
                coverflowEffect: {
                    setTranslate: Ve.setTranslate.bind(this),
                    setTransition: Ve.setTransition.bind(this)
                }
            })
        },
        on: {
            beforeInit() {
                "coverflow" === this.params.effect && (this.classNames.push(`${this.params.containerModifierClass}coverflow`), this.classNames.push(`${this.params.containerModifierClass}3d`), this.params.watchSlidesProgress = !0, this.originalParams.watchSlidesProgress = !0)
            }, setTranslate() {
                "coverflow" === this.params.effect && this.coverflowEffect.setTranslate()
            }, setTransition(e) {
                "coverflow" === this.params.effect && this.coverflowEffect.setTransition(e)
            }
        }
    }, {
        name: "thumbs",
        params: {
            thumbs: {
                swiper: null,
                slideThumbActiveClass: "swiper-slide-thumb-active",
                thumbsContainerClass: "swiper-container-thumbs"
            }
        },
        create() {
            se.extend(this, {
                thumbs: {
                    swiper: null,
                    init: Ge.init.bind(this),
                    update: Ge.update.bind(this),
                    onThumbClick: Ge.onThumbClick.bind(this)
                }
            })
        },
        on: {
            beforeInit() {
                const {thumbs: e} = this.params;
                e && e.swiper && (this.thumbs.init(), this.thumbs.update(!0))
            }, slideChange() {
                this.thumbs.swiper && this.thumbs.update()
            }, update() {
                this.thumbs.swiper && this.thumbs.update()
            }, resize() {
                this.thumbs.swiper && this.thumbs.update()
            }, observerUpdate() {
                this.thumbs.swiper && this.thumbs.update()
            }, setTransition(e) {
                const t = this.thumbs.swiper;
                t && t.setTransition(e)
            }, beforeDestroy() {
                const e = this.thumbs.swiper;
                e && this.thumbs.swiperCreated && e && e.destroy()
            }
        }
    }];
    void 0 === be.use && (be.use = be.Class.use, be.installModule = be.Class.installModule), be.use(We);
    var Ue = be, Ke = function () {
        if ($(".portfolio-section-slider .swiper-container").length) new Ue(".portfolio-section-slider .swiper-container", {
            grabCursor: !0,
            slidesPerView: "auto",
            spaceBetween: 50,
            breakpoints: {320: {spaceBetween: 15}, 430: {spaceBetween: 25}, 720: {spaceBetween: 35}}
        })
    }, Ze = i(5);
    window.jQuery = s.a, window.$ = s.a;
    document.addEventListener("DOMContentLoaded", function () {
        U(), G(), W(), Z(), F = $(".selector").closest(".input-wrap").find("select").val(), Y(), V(), X(), B(), Ke(), s()(".likely .share-one").length && Ze.initiate()
    })
}]);