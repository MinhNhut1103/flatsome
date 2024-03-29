/*!
 * fullPage 4.0.15
 * https://github.com/alvarotrigo/fullPage.js
 *
 * @license GPLv3 for open source use only
 * or Fullpage Commercial License for commercial use
 * http://alvarotrigo.com/fullPage/pricing/
 *
 * Copyright (C) 2018 http://alvarotrigo.com/fullPage - A project by Alvaro Trigo
 */
! function(n, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (n = "undefined" != typeof globalThis ? globalThis : n || self).fullpage = t()
}(this, (function() {
    "use strict";
    var n, t, e, i;
    Array.prototype.find || Object.defineProperty(Array.prototype, "find", {
        value: function(n) {
            if (null == this) throw new TypeError('"this" is null or not defined');
            var t = Object(this),
                e = t.length >>> 0;
            if ("function" != typeof n) throw new TypeError("predicate must be a function");
            for (var i = arguments[1], o = 0; o < e;) {
                var r = t[o];
                if (n.call(i, r, o, t)) return r;
                o++
            }
        }
    }), Array.from || (Array.from = (n = Object.prototype.toString, t = function(t) {
        return "function" == typeof t || "[object Function]" === n.call(t)
    }, e = Math.pow(2, 53) - 1, i = function(n) {
        var t = function(n) {
            var t = Number(n);
            return isNaN(t) ? 0 : 0 !== t && isFinite(t) ? (t > 0 ? 1 : -1) * Math.floor(Math.abs(t)) : t
        }(n);
        return Math.min(Math.max(t, 0), e)
    }, function(n) {
        var e = this,
            o = Object(n);
        if (null == n) throw new TypeError("Array.from requires an array-like object - not null or undefined");
        var r, a = arguments.length > 1 ? arguments[1] : void 0;
        if (void 0 !== a) {
            if (!t(a)) throw new TypeError("Array.from: when provided, the second argument must be a function");
            arguments.length > 2 && (r = arguments[2])
        }
        for (var u, c = i(o.length), l = t(e) ? Object(new e(c)) : new Array(c), f = 0; f < c;) u = o[f], l[f] = a ? void 0 === r ? a(u, f) : a.call(r, u, f) : u, f += 1;
        return l.length = c, l
    }));
    var o = window,
        r = document,
        a = navigator.userAgent.match(/(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/),
        u = /(Mac|iPhone|iPod|iPad)/i.test(o.navigator.userAgent),
        c = "ontouchstart" in o || navigator.msMaxTouchPoints > 0 || navigator.maxTouchPoints,
        l = !!window.MSInputMethodContext && !!document.documentMode,
        f = {
            test: {},
            shared: {}
        },
        s = ["parallax", "scrollOverflowReset", "dragAndMove", "offsetSections", "fadingEffect", "responsiveSlides", "continuousHorizontal", "interlockedSlides", "scrollHorizontally", "resetSliders", "cards", "dropEffect", "waterEffect"];

    function v(n, t) {
        o.console && o.console[n] && o.console[n]("fullPage: " + t)
    }

    function d(n) {
        return "none" !== o.getComputedStyle(n).display
    }

    function h(n) {
        return Array.from(n).filter((function(n) {
            return d(n)
        }))
    }

    function p(n, t) {
        return (t = arguments.length > 1 ? t : document) ? t.querySelectorAll(n) : null
    }

    function g(n) {
        n = n || {};
        for (var t = 1, e = arguments.length; t < e; ++t) {
            var i = arguments[t];
            if (i)
                for (var o in i) i.hasOwnProperty(o) && "__proto__" != o && "constructor" != o && ("[object Object]" !== Object.prototype.toString.call(i[o]) ? n[o] = i[o] : n[o] = g(n[o], i[o]))
        }
        return n
    }

    function m(n, t) {
        return null != n && n.classList.contains(t)
    }

    function w() {
        return "innerHeight" in o ? o.innerHeight : r.documentElement.offsetHeight
    }

    function b() {
        return o.innerWidth
    }

    function y(n, t) {
        var e;
        for (e in n = x(n), t)
            if (t.hasOwnProperty(e) && null !== e)
                for (var i = 0; i < n.length; i++) n[i].style[e] = t[e];
        return n
    }

    function S(n) {
        return n.previousElementSibling
    }

    function T(n) {
        return n.nextElementSibling
    }

    function M(n) {
        return n[n.length - 1]
    }

    function A(n, t) {
        n = k(n) ? n[0] : n;
        for (var e = null != t ? p(t, n.parentNode) : n.parentNode.childNodes, i = 0, o = 0; o < e.length; o++) {
            if (e[o] == n) return i;
            1 == e[o].nodeType && i++
        }
        return -1
    }

    function x(n) {
        return k(n) ? n : [n]
    }

    function O(n) {
        n = x(n);
        for (var t = 0; t < n.length; t++) n[t].style.display = "none";
        return n
    }

    function j(n) {
        n = x(n);
        for (var t = 0; t < n.length; t++) n[t].style.display = "block";
        return n
    }

    function k(n) {
        return "[object Array]" === Object.prototype.toString.call(n) || "[object NodeList]" === Object.prototype.toString.call(n)
    }

    function L(n, t) {
        n = x(n);
        for (var e = 0; e < n.length; e++) n[e].classList.add(t);
        return n
    }

    function D(n, t) {
        n = x(n);
        for (var e = t.split(" "), i = 0; i < e.length; i++) {
            t = e[i];
            for (var o = 0; o < n.length; o++) n[o].classList.remove(t)
        }
        return n
    }

    function E(n, t) {
        t.appendChild(n)
    }

    function R(n, t, e) {
        var i;
        t = t || r.createElement("div");
        for (var o = 0; o < n.length; o++) {
            var a = n[o];
            (e && !o || !e) && (i = t.cloneNode(!0), a.parentNode.insertBefore(i, a)), i.appendChild(a)
        }
        return n
    }

    function P(n, t) {
        R(n, t, !0)
    }

    function z(n, t) {
        for (n.appendChild(t); n.firstChild !== t;) t.appendChild(n.firstChild)
    }

    function C(n) {
        for (var t = r.createDocumentFragment(); n.firstChild;) t.appendChild(n.firstChild);
        n.parentNode.replaceChild(t, n)
    }

    function F(n, t) {
        return n && 1 === n.nodeType ? Q(n, t) ? n : F(n.parentNode, t) : null
    }

    function N(n, t) {
        I(n, n.nextSibling, t)
    }

    function B(n, t) {
        I(n, n, t)
    }

    function I(n, t, e) {
        k(e) || ("string" == typeof e && (e = J(e)), e = [e]);
        for (var i = 0; i < e.length; i++) n.parentNode.insertBefore(e[i], t)
    }

    function H() {
        var n = r.documentElement;
        return (o.pageYOffset || n.scrollTop) - (n.clientTop || 0)
    }

    function W(n) {
        return Array.prototype.filter.call(n.parentNode.children, (function(t) {
            return t !== n
        }))
    }

    function V(n) {
        n.preventDefault()
    }

    function U(n, t) {
        return n.getAttribute(t)
    }

    function _(n, t, e) {
        r.addEventListener(n, t, "undefined" === e ? null : e)
    }

    function q(n, t, e) {
        o.addEventListener(n, t, "undefined" === e ? null : e)
    }

    function G(n, t, e) {
        r.removeEventListener(n, t, "undefined" === e ? null : e)
    }

    function K(n, t, e) {
        o.removeEventListener(n, t, "undefined" === e ? null : e)
    }

    function Y(n) {
        if ("function" == typeof n) return !0;
        var t = Object.prototype.toString.call(n);
        return "[object Function]" === t || "[object GeneratorFunction]" === t
    }

    function $(n, t, e) {
        var i;
        e = void 0 === e ? {} : e, "function" == typeof o.CustomEvent ? i = new CustomEvent(t, {
            detail: e
        }) : (i = r.createEvent("CustomEvent")).initCustomEvent(t, !0, !0, e), n.dispatchEvent(i)
    }

    function Q(n, t) {
        return (n.matches || n.t || n.msMatchesSelector || n.mozMatchesSelector || n.webkitMatchesSelector || n.oMatchesSelector).call(n, t)
    }

    function X(n, t) {
        if ("boolean" == typeof t)
            for (var e = 0; e < n.length; e++) n[e].style.display = t ? "block" : "none";
        return n
    }

    function J(n) {
        var t = r.createElement("div");
        return t.innerHTML = n.trim(), t.firstChild
    }

    function Z(n) {
        n = x(n);
        for (var t = 0; t < n.length; t++) {
            var e = n[t];
            e && e.parentElement && e.parentNode.removeChild(e)
        }
    }

    function nn(n, t, e) {
        for (var i = n[e], o = []; i;)(Q(i, t) || null == t) && o.push(i), i = i[e];
        return o
    }

    function tn(n, t) {
        return nn(n, t, "nextElementSibling")
    }

    function en(n, t) {
        return nn(n, t, "previousElementSibling")
    }

    function on(n) {
        return Object.keys(n).map((function(t) {
            return n[t]
        }))
    }

    function rn(n) {
        return n[n.length - 1]
    }

    function an(n, t) {
        for (var e = 0, i = n.slice(Math.max(n.length - t, 1)), o = 0; o < i.length; o++) e += i[o];
        return Math.ceil(e / t)
    }

    function un(n, t) {
        n.setAttribute(t, U(n, "data-" + t)), n.removeAttribute("data-" + t)
    }

    function cn(n, t) {
        var e = [n];
        do {
            n = n.parentNode, e.push(n)
        } while (!Q(n, t));
        return e
    }
    o.NodeList && !NodeList.prototype.forEach && (NodeList.prototype.forEach = function(n, t) {
        t = t || window;
        for (var e = 0; e < this.length; e++) n.call(t, this[e], e, this)
    }), "function" != typeof Object.assign && Object.defineProperty(Object, "assign", {
        value: function(n, t) {
            if (null == n) throw new TypeError("Cannot convert undefined or null to object");
            for (var e = Object(n), i = 1; i < arguments.length; i++) {
                var o = arguments[i];
                if (null != o)
                    for (var r in o) Object.prototype.hasOwnProperty.call(o, r) && (e[r] = o[r])
            }
            return e
        },
        writable: !0,
        i: !0
    }), String.prototype.padStart || (String.prototype.padStart = function(n, t) {
        return n >>= 0, t = String(void 0 !== t ? t : " "), this.length > n ? String(this) : ((n -= this.length) > t.length && (t += Array.apply(null, Array(n)).map((function() {
            return t
        })).join("")), t.slice(0, n) + String(this))
    }), window.fp_utils = {
        $: p,
        deepExtend: g,
        hasClass: m,
        getWindowHeight: w,
        css: y,
        prev: S,
        next: T,
        last: M,
        index: A,
        getList: x,
        hide: O,
        show: j,
        isArrayOrList: k,
        addClass: L,
        removeClass: D,
        appendTo: E,
        wrap: R,
        wrapAll: P,
        unwrap: C,
        closest: F,
        after: N,
        before: B,
        insertBefore: I,
        getScrollTop: H,
        siblings: W,
        preventDefault: V,
        isFunction: Y,
        trigger: $,
        matches: Q,
        toggle: X,
        createElementFromHTML: J,
        remove: Z,
        untilAll: nn,
        nextAll: tn,
        prevAll: en,
        showError: v
    };
    var ln = Object.freeze({
        __proto__: null,
        showError: v,
        isVisible: d,
        o: h,
        $: p,
        deepExtend: g,
        hasClass: m,
        getWindowHeight: w,
        u: b,
        css: y,
        prev: S,
        next: T,
        last: M,
        index: A,
        getList: x,
        hide: O,
        show: j,
        isArrayOrList: k,
        addClass: L,
        removeClass: D,
        appendTo: E,
        wrap: R,
        wrapAll: P,
        l: z,
        unwrap: C,
        closest: F,
        after: N,
        before: B,
        insertBefore: I,
        getScrollTop: H,
        siblings: W,
        preventDefault: V,
        v: U,
        h: _,
        p: q,
        g: G,
        S: K,
        isFunction: Y,
        trigger: $,
        matches: Q,
        toggle: X,
        createElementFromHTML: J,
        remove: Z,
        untilAll: nn,
        nextAll: tn,
        prevAll: en,
        toArray: on,
        T: rn,
        M: an,
        A: un,
        O: cn
    });

    function fn(n) {
        return fn = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(n) {
            return typeof n
        } : function(n) {
            return n && "function" == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n
        }, fn(n)
    }
    var sn = {
            j: {},
            L: function(n, t) {
                var e = this;
                return "object" !== fn(this.j[n]) && (this.j[n] = []), this.j[n].push(t),
                    function() {
                        return e.removeListener(n, t)
                    }
            },
            removeListener: function(n, t) {
                if ("object" === fn(this.j[n])) {
                    var e = this.j[n].indexOf(t);
                    e > -1 && this.j[n].splice(e, 1)
                }
            },
            D: function(n) {
                for (var t = this, e = arguments.length, i = new Array(e > 1 ? e - 1 : 0), o = 1; o < e; o++) i[o - 1] = arguments[o];
                "object" === fn(this.j[n]) && this.j[n].forEach((function(n) {
                    return n.apply(t, i)
                }))
            },
            once: function(n, t) {
                var e = this,
                    i = this.L(n, (function() {
                        i();
                        for (var n = arguments.length, o = new Array(n), r = 0; r < n; r++) o[r] = arguments[r];
                        t.apply(e, o)
                    }))
            }
        },
        vn = {
            R: 0,
            P: 0,
            slides: [],
            C: [],
            F: null,
            N: null,
            B: !1,
            I: !1,
            H: !1,
            W: !1,
            V: !1,
            U: void 0,
            _: void 0,
            q: !1,
            G: !0,
            K: "none",
            Y: "none",
            X: !1,
            J: !1,
            Z: !0,
            nn: 0,
            tn: w(),
            en: !1,
            on: {},
            scrollY: 0,
            scrollX: 0
        };

    function dn(n) {
        Object.assign(vn, n)
    }

    function hn() {
        return vn
    }
    o.state = vn;
    var pn = "onAfterRenderNoAnchor",
        gn = "onClickOrTouch",
        mn = "moveSlideLeft",
        wn = "moveSlideRight",
        bn = "onInitialise",
        yn = "bindEvents",
        Sn = "onDestroy",
        Tn = "contentChanged",
        Mn = "onScrollOverflowScrolled",
        An = "onScrollPageAndSlide",
        xn = "onKeyDown",
        On = "onMenuClick",
        jn = "scrollPage",
        kn = "landscapeScroll",
        Ln = "scrollBeyondFullpage",
        Dn = "onPerformMovement",
        En = "afterSectionLoads",
        Rn = "afterSlideLoads";

    function Pn(n) {
        sn.D(gn, {
            e: n,
            target: n.target
        })
    }

    function zn() {
        ["click", "touchstart"].forEach((function(n) {
            G(n, Pn)
        }))
    }

    function Cn() {
        dn({
            Z: !0
        })
    }
    sn.L(yn, (function() {
        ["click", "touchstart"].forEach((function(n) {
            _(n, Pn)
        })), q("focus", Cn), sn.L(Sn, zn)
    }));
    var Fn = "fullpage-wrapper",
        Nn = "." + Fn,
        Bn = "fp-responsive",
        In = "fp-notransition",
        Hn = "fp-destroyed",
        Wn = "fp-enabled",
        Vn = "active",
        Un = ".active",
        _n = "fp-completely",
        qn = "fp-section",
        Gn = "." + qn,
        Kn = ".fp-tableCell",
        Yn = "#fp-nav",
        $n = "fp-slide",
        Qn = "." + $n,
        Xn = ".fp-slide.active",
        Jn = "fp-slides",
        Zn = ".fp-slides",
        nt = "fp-slidesContainer",
        tt = "." + nt,
        et = "fp-table",
        it = "fp-overflow",
        ot = "." + it,
        rt = "fp-is-overflow",
        at = ".fp-slidesNav",
        ut = ".fp-slidesNav a",
        ct = "fp-controlArrow",
        lt = "." + ct,
        ft = "fp-prev",
        st = ".fp-controlArrow.fp-prev",
        vt = ".fp-controlArrow.fp-next",
        dt = {
            menu: !1,
            anchors: [],
            lockAnchors: !1,
            navigation: !1,
            navigationPosition: "right",
            navigationTooltips: [],
            showActiveTooltip: !1,
            slidesNavigation: !1,
            slidesNavPosition: "bottom",
            scrollBar: !1,
            hybrid: !1,
            licenseKey: "",
            credits: {
                enabled: !0,
                label: "Made with fullPage.js",
                position: "right"
            },
            css3: !0,
            scrollingSpeed: 700,
            autoScrolling: !0,
            fitToSection: !0,
            rn: 600,
            easing: "easeInOutCubic",
            easingcss3: "ease",
            loopBottom: !1,
            loopTop: !1,
            loopHorizontal: !0,
            continuousVertical: !1,
            continuousHorizontal: !1,
            scrollHorizontally: !1,
            interlockedSlides: !1,
            dragAndMove: !1,
            offsetSections: !1,
            resetSliders: !1,
            fadingEffect: !1,
            normalScrollElements: null,
            scrollOverflow: !0,
            scrollOverflowReset: !1,
            touchSensitivity: 5,
            touchWrapper: null,
            bigSectionsDestination: null,
            keyboardScrolling: !0,
            animateAnchor: !0,
            recordHistory: !0,
            allowCorrectDirection: !1,
            scrollOverflowMacStyle: !0,
            controlArrows: !0,
            controlArrowsHTML: ['<div class="fp-arrow"></div>', '<div class="fp-arrow"></div>'],
            controlArrowColor: "#fff",
            verticalCentered: !0,
            sectionsColor: [],
            paddingTop: 0,
            paddingBottom: 0,
            fixedElements: null,
            responsive: 0,
            responsiveWidth: 0,
            responsiveHeight: 0,
            responsiveSlides: !1,
            parallax: !1,
            parallaxOptions: {
                type: "reveal",
                percentage: 62,
                property: "translate"
            },
            cards: !1,
            cardsOptions: {
                perspective: 100,
                fadeContent: !0,
                fadeBackground: !0
            },
            sectionSelector: ".section",
            slideSelector: ".slide",
            afterLoad: null,
            beforeLeave: null,
            onLeave: null,
            afterRender: null,
            afterResize: null,
            afterReBuild: null,
            afterSlideLoad: null,
            onSlideLeave: null,
            afterResponsive: null,
            onScrollOverflow: null,
            lazyLoading: !0,
            observer: !0
        },
        ht = null,
        pt = !1,
        gt = g({}, dt),
        mt = null;

    function wt(n) {
        return ht
    }

    function bt() {
        return mt || dt
    }

    function yt() {
        return gt
    }

    function St(n, t, e) {
        mt[n] = t, "internal" !== e && (gt[n] = t)
    }

    function Tt() {
        if (!bt().anchors.length) {
            var n = p(bt().sectionSelector.split(",").join("[data-anchor],") + "[data-anchor]", ht);
            n.length && n.length === p(bt().sectionSelector, ht).length && (pt = !0, n.forEach((function(n) {
                bt().anchors.push(U(n, "data-anchor").toString())
            })))
        }
        if (!bt().navigationTooltips.length) {
            var t = p(bt().sectionSelector.split(",").join("[data-tooltip],") + "[data-tooltip]", ht);
            t.length && t.forEach((function(n) {
                bt().navigationTooltips.push(U(n, "data-tooltip").toString())
            }))
        }
    }
    var Mt = function(n) {
            this.anchor = n.anchor, this.item = n.item, this.index = n.index(), this.isLast = this.index === n.item.parentElement.querySelectorAll(n.selector).length - 1, this.isFirst = !this.index, this.isActive = n.isActive
        },
        At = function(n, t) {
            this.parent = this.parent || null, this.selector = t, this.anchor = U(n, "data-anchor") || bt().anchors[A(n, bt().sectionSelector)], this.item = n, this.isVisible = d(n), this.isActive = m(n, Vn), this.an = m(n, it) || null != p(ot, n)[0], this.un = t === bt().sectionSelector, this.cn = F(n, tt) || F(n, Nn), this.index = function() {
                return this.siblings().indexOf(this)
            }
        };

    function xt(n) {
        return n.map((function(n) {
            return n.item
        }))
    }

    function Ot(n, t) {
        return n.find((function(n) {
            return n.item === t
        }))
    }
    At.prototype.siblings = function() {
        return this.un ? this.isVisible ? vn.C : vn.ln : this.parent ? this.parent.slides : 0
    }, At.prototype.prev = function() {
        var n = this.siblings(),
            t = (this.un ? n.indexOf(this) : this.parent.slides.indexOf(this)) - 1;
        return t >= 0 ? n[t] : null
    }, At.prototype.next = function() {
        var n = this.siblings(),
            t = (this.un ? n.indexOf(this) : this.parent.slides.indexOf(this)) + 1;
        return t < n.length ? n[t] : null
    }, At.prototype.prevPanel = function() {
        return this.prev() || (this.parent ? this.parent.prev() : null)
    }, At.prototype.nextPanel = function() {
        return this.next() || (this.parent ? this.parent.next() : null)
    }, At.prototype.sn = function() {
        return this.un ? vn.C : vn.vn
    };
    var jt, kt = function(n) {
            Mt.call(this, n)
        },
        Lt = function(n) {
            Mt.call(this, n)
        };

    function Dt(n) {
        var t = p(Xn, n);
        return t.length && (n = t[0]), n
    }

    function Et(n) {
        return n ? n.activeSlide ? n.activeSlide : n : null
    }

    function Rt(n) {
        var t, e, i = bt();
        return i.autoScrolling && !i.scrollBar ? (t = -n, e = p(Nn)[0]) : (t = n, e = window), {
            options: t,
            element: e
        }
    }

    function Pt(n, t) {
        !bt().autoScrolling || bt().scrollBar || n.self != window && m(n, Jn) ? n.self != window && m(n, Jn) ? n.scrollLeft = t : n.scrollTo(0, t) : n.style.top = t + "px"
    }

    function zt(n) {
        var t = "transform " + bt().scrollingSpeed + "ms " + bt().easingcss3;
        return D(n, In), y(n, {
            "-webkit-transition": t,
            transition: t
        })
    }

    function Ct(n, t) {
        var e = n.index(),
            i = A(t, Gn);
        return e == i ? "none" : e > i ? "up" : "down"
    }

    function Ft(n) {
        return L(n, In)
    }

    function Nt(n) {
        return {
            "-webkit-transform": n,
            "-moz-transform": n,
            "-ms-transform": n,
            transform: n
        }
    }

    function Bt(n, t) {
        t ? zt(wt()) : Ft(wt()), clearTimeout(jt), y(wt(), Nt(n)), f.test.dn = n, jt = setTimeout((function() {
            D(wt(), In)
        }), 10)
    }

    function It(n) {
        var t = Math.round(n);
        if (bt().css3 && bt().autoScrolling && !bt().scrollBar) Bt("translate3d(0px, -" + t + "px, 0px)", !1);
        else if (bt().autoScrolling && !bt().scrollBar) y(wt(), {
            top: -t + "px"
        }), f.test.top = -t + "px";
        else {
            var e = Rt(t);
            Pt(e.element, e.options)
        }
    }

    function Ht(n, t) {
        St("scrollingSpeed", n, t)
    }
    f.setScrollingSpeed = Ht;
    var Wt, Vt = null,
        Ut = null,
        _t = null;

    function qt(n, t, e, i) {
        var r, a = function(n) {
                return n.self != o && m(n, Jn) ? n.scrollLeft : !bt().autoScrolling || bt().scrollBar ? H() : n.offsetTop
            }(n),
            u = t - a,
            c = !1,
            l = vn.q;
        dn({
            q: !0
        }), Wt && window.cancelAnimationFrame(Wt), Wt = function(f) {
            r || (r = f);
            var s = Math.floor(f - r);
            if (vn.q) {
                var v = t;
                e && (v = o.fp_easings[bt().easing](s, a, u, e)), s <= e && Pt(n, v), s < e ? window.requestAnimationFrame(Wt) : void 0 === i || c || (i(), dn({
                    q: !1
                }), c = !0)
            } else c || l || (i(), dn({
                q: !1
            }), c = !0)
        }, window.requestAnimationFrame(Wt)
    }

    function Gt(n) {
        return n && !n.item ? new kt(new $e(n)) : n ? new kt(n) : null
    }

    function Kt(n) {
        return n ? new Lt(n) : null
    }

    function Yt(n, t) {
        var e = function(n, t) {
            var e = {
                afterRender: function() {
                    return {
                        section: Gt(hn().F),
                        hn: Kt(hn().F.activeSlide)
                    }
                },
                onLeave: function() {
                    return {
                        origin: Gt(t.items.origin),
                        destination: Gt(t.items.destination),
                        direction: t.direction,
                        trigger: hn().N
                    }
                },
                afterLoad: function() {
                    return e.onLeave()
                },
                afterSlideLoad: function() {
                    return {
                        section: Gt(t.items.section),
                        origin: Gt(t.items.origin),
                        destination: Gt(t.items.destination),
                        direction: t.direction,
                        trigger: hn().N
                    }
                },
                onSlideLeave: function() {
                    return e.afterSlideLoad()
                },
                beforeLeave: function() {
                    return e.onLeave()
                },
                onScrollOverflow: function() {
                    return {
                        section: Gt(hn().F),
                        hn: Kt(hn().F.activeSlide),
                        position: t.position,
                        direction: t.direction
                    }
                }
            };
            return e[n]()
        }(n, t);
        return $(wt(), n, e), !1 !== bt()[n].apply(e[Object.keys(e)[0]], on(e))
    }

    function $t(n) {
        var t = Dt(n);
        p("video, audio", t).forEach((function(n) {
            n.hasAttribute("data-autoplay") && "function" == typeof n.play && n.play()
        })), p('iframe[src*="youtube.com/embed/"]', t).forEach((function(n) {
            n.hasAttribute("data-autoplay") && Qt(n), n.onload = function() {
                n.hasAttribute("data-autoplay") && Qt(n)
            }
        }))
    }

    function Qt(n) {
        n.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', "*")
    }

    function Xt(n) {
        var t = Dt(n);
        p("video, audio", t).forEach((function(n) {
            n.hasAttribute("data-keepplaying") || "function" != typeof n.pause || n.pause()
        })), p('iframe[src*="youtube.com/embed/"]', t).forEach((function(n) {
            /youtube\.com\/embed\//.test(U(n, "src")) && !n.hasAttribute("data-keepplaying") && n.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', "*")
        }))
    }

    function Jt(n) {
        bt().lazyLoading && p("img[data-src], img[data-srcset], source[data-src], source[data-srcset], video[data-src], audio[data-src], iframe[data-src]", Dt(n)).forEach((function(n) {
            if (["src", "srcset"].forEach((function(t) {
                    var e = U(n, "data-" + t);
                    null != e && e && (un(n, t), n.addEventListener("load", (function() {})))
                })), Q(n, "source")) {
                var t = F(n, "video, audio");
                t && (t.load(), t.onloadeddata = function() {})
            }
        }))
    }

    function Zt() {
        var n = hn().F.item,
            t = hn().F.activeSlide,
            e = ne(n),
            i = String(e);
        t && (i = i + "-" + ne(t.item)), i = i.replace("/", "-").replace("#", "");
        var o = new RegExp("\\b\\s?fp-viewing-[^\\s]+\\b", "g");
        Vt.className = Vt.className.replace(o, ""), L(Vt, "fp-viewing-" + i)
    }

    function ne(n) {
        if (!n) return null;
        var t = U(n, "data-anchor"),
            e = A(n);
        return null == t && (t = e), t
    }

    function te(n, t, e) {
        var i = "";
        bt().anchors.length && !bt().lockAnchors && (n ? (null != e && (i = e), null == t && (t = n), dn({
            _: t
        }), ee(i + "/" + t)) : null != n ? (dn({
            _: t
        }), ee(e)) : ee(e)), Zt()
    }

    function ee(n) {
        if (bt().recordHistory) location.hash = n;
        else if (a || c) o.history.replaceState(void 0, void 0, "#" + n);
        else {
            var t = o.location.href.split("#")[0];
            o.location.replace(t + "#" + n)
        }
    }

    function ie(n, t, e) {
        var i = "Section" === t ? bt().anchors[n] : U(e, "data-anchor");
        return encodeURI(bt().navigationTooltips[n] || i || t + " " + (n + 1))
    }

    function oe(n) {
        V(n), dn({
            N: "horizontalNav"
        });
        var t = F(this, Gn),
            e = p(Zn, F(this, Gn))[0],
            i = Ot(hn().C, t).slides[A(F(this, "li"))];
        sn.D(kn, {
            slides: e,
            destination: i.item
        })
    }
    var re, ae = {};

    function ue(n, t, e) {
        "all" !== t ? ae[e][t] = n : Object.keys(ae[e]).forEach((function(t) {
            ae[e][t] = n
        }))
    }

    function ce() {
        return ae
    }

    function le() {
        var n = F(this, Gn);
        m(this, ft) ? ce().m.left && (dn({
            N: "slideArrow"
        }), sn.D(mn, {
            section: n
        })) : ce().m.right && (dn({
            N: "slideArrow"
        }), sn.D(wn, {
            section: n
        }))
    }

    function fe() {
        clearTimeout(re), dn({
            H: !1
        })
    }

    function se(n, t, e) {
        var i, o, r = F(n, Gn),
            a = hn().C.filter((function(n) {
                return n.item == r
            }))[0],
            u = a.slides.filter((function(n) {
                return n.item == t
            }))[0],
            c = {
                slides: n,
                destiny: t,
                direction: e,
                destinyPos: {
                    left: t.offsetLeft
                },
                slideIndex: u.index(),
                section: r,
                sectionIndex: a.index(),
                anchorLink: a.anchor,
                slidesNav: p(at, r)[0],
                slideAnchor: u.anchor,
                prevSlide: a.activeSlide.item,
                prevSlideIndex: a.activeSlide.index(),
                items: {
                    section: a,
                    origin: a.activeSlide,
                    destination: u
                },
                localIsResizing: vn.W
            };
        c.pn = (i = c.prevSlideIndex, o = c.slideIndex, i == o ? "none" : i > o ? "left" : "right"), c.direction = c.direction ? c.direction : c.pn, c.localIsResizing || dn({
            G: !1
        }), bt().onSlideLeave && !c.localIsResizing && "none" !== c.pn && Y(bt().onSlideLeave) && !1 === Yt("onSlideLeave", c) ? dn({
            H: !1
        }) : (L(t, Vn), D(W(t), Vn), qe(), c.localIsResizing || (Xt(c.prevSlide), Jt(t)), function(n) {
            !bt().loopHorizontal && bt().controlArrows && (X(p(st, n.section), 0 !== n.slideIndex), X(p(vt, n.section), null != T(n.destiny)))
        }(c), a.isActive && !c.localIsResizing && te(c.slideIndex, c.slideAnchor, c.anchorLink), function(n, t, e) {
            var i, o, r = t.destinyPos;
            if (i = t.slidesNav, o = t.slideIndex, bt().slidesNavigation && null != i && (D(p(Un, i), Vn), L(p("a", p("li", i)[o]), Vn)), dn({
                    scrollX: Math.round(r.left)
                }), bt().css3) {
                var a = "translate3d(-" + Math.round(r.left) + "px, 0px, 0px)";
                f.test.gn[t.sectionIndex] = a, y(zt(p(tt, n)), Nt(a)), clearTimeout(re), re = setTimeout((function() {
                    de(t)
                }), bt().scrollingSpeed)
            } else f.test.left[t.sectionIndex] = Math.round(r.left), qt(n, Math.round(r.left), bt().scrollingSpeed, (function() {
                de(t)
            }))
        }(n, c))
    }

    function ve() {
        clearTimeout(re)
    }

    function de(n) {
        n.localIsResizing || (Y(bt().afterSlideLoad) && Yt("afterSlideLoad", n), dn({
            G: !0
        }), $t(n.destiny), sn.D(Rn, n)), dn({
            H: !1
        })
    }

    function he(n, t) {
        Ht(0, "internal"), void 0 !== t && dn({
            W: !0
        }), se(F(n, Zn), n), void 0 !== t && dn({
            W: !1
        }), Ht(yt().scrollingSpeed, "internal")
    }

    function pe(n, t) {
        St("recordHistory", n, t)
    }

    function ge(n, t) {
        n || It(0), St("autoScrolling", n, t);
        var e = hn().F.item;
        if (bt().autoScrolling && !bt().scrollBar) y(_t, {
            overflow: "hidden",
            height: "100%"
        }), D(Vt, "fp-scrollable"), pe(yt().recordHistory, "internal"), y(wt(), {
            "-ms-touch-action": "none",
            "touch-action": "none"
        }), null != e && It(e.offsetTop);
        else if (y(_t, {
                overflow: "visible",
                height: "initial"
            }), L(Vt, "fp-scrollable"), pe(!!bt().autoScrolling && yt().recordHistory, "internal"), y(wt(), {
                "-ms-touch-action": "",
                "touch-action": ""
            }), null != e) {
            var i = Rt(e.offsetTop);
            i.element.scrollTo(0, i.options)
        }
    }

    function me() {
        var n = p(".fp-auto-height")[0] || Fe() && p(".fp-auto-height-responsive")[0];
        bt().lazyLoading && n && p(".fp-section:not(.active)").forEach((function(n) {
            var t, e, i, o, r;
            e = (t = n.getBoundingClientRect()).top, i = t.bottom, o = e + 2 < vn.tn && e > 0, r = i > 2 && i < vn.tn, (o || r) && Jt(n)
        }))
    }

    function we() {
        $(S(this), "click")
    }

    function be() {
        Z(p(Yn));
        var n = r.createElement("div");
        n.setAttribute("id", "fp-nav");
        var t = r.createElement("ul");
        n.appendChild(t), E(n, Vt);
        var e = p(Yn)[0];
        L(e, "fp-" + bt().navigationPosition), bt().showActiveTooltip && L(e, "fp-show-active");
        for (var i = "", o = 0; o < hn().C.length; o++) {
            var a = hn().C[o],
                u = "";
            bt().anchors.length && (u = a.anchor), i += '<li><a href="#' + encodeURI(u) + '"><span class="fp-sr-only">' + ie(a.index(), "Section") + "</span><span></span></a>";
            var c = bt().navigationTooltips[a.index()];
            void 0 !== c && "" !== c && (i += '<div class="fp-tooltip fp-' + bt().navigationPosition + '">' + c + "</div>"), i += "</li>"
        }
        p("ul", e)[0].innerHTML = i;
        var l = p("li", p(Yn)[0])[hn().F.index()];
        L(p("a", l), Vn)
    }

    function ye(n) {
        n.preventDefault && V(n), dn({
            N: "verticalNav"
        });
        var t = A(F(this, "#fp-nav li"));
        sn.D(jn, {
            destination: hn().C[t]
        })
    }

    function Se(n, t) {
        var e;
        e = n, bt().menu && bt().menu.length && p(bt().menu).forEach((function(n) {
                null != n && (D(p(Un, n), Vn), L(p('[data-menuanchor="' + e + '"]', n), Vn))
            })),
            function(n, t) {
                var e = p(Yn)[0];
                bt().navigation && null != e && "none" !== e.style.display && (D(p(Un, e), Vn), L(n ? p('a[href="#' + n + '"]', e) : p("a", p("li", e)[t]), Vn))
            }(n, t)
    }
    ae.m = {
        up: !0,
        down: !0,
        left: !0,
        right: !0
    }, ae.k = g({}, ae.m), sn.L(gn, (function(n) {
        var t = n.target;
        (Q(t, lt) || F(t, lt)) && le.call(t, n)
    })), f.landscapeScroll = se, sn.L(yn, (function() {
        sn.L(Dn, fe)
    })), f.setRecordHistory = pe, f.setAutoScrolling = ge, f.test.setAutoScrolling = ge, (new Date).getTime();
    var Te, Me, Ae, xe, Oe, je, ke = (Me = !0, Ae = (new Date).getTime(), xe = !o.fullpage_api, function(n, t) {
        var e = (new Date).getTime(),
            i = "wheel" === n ? bt().scrollingSpeed : 100;
        return Me = xe || e - Ae >= i, xe = !o.fullpage_api, Me && (Te = t(), Ae = e), void 0 === Te || Te
    });

    function Le(n, t) {
        if (Y(bt().beforeLeave)) return ke(hn().N, (function() {
            return Yt(n, t)
        }))
    }

    function De(n, t, e) {
        var i = n.item;
        if (null != i) {
            var o, r, a = function(n) {
                    var t = n.offsetHeight,
                        e = n.offsetTop,
                        i = e,
                        o = e > vn.nn,
                        r = i - w() + t,
                        a = bt().bigSectionsDestination;
                    return t > w() ? (o || a) && "bottom" !== a || (i = r) : (o || vn.W && null == T(n)) && (i = r), dn({
                        nn: i
                    }), i
                }(i),
                u = {
                    element: i,
                    callback: t,
                    isMovementUp: e,
                    dtop: a,
                    yMovement: Ct(hn().F, i),
                    anchorLink: n.anchor,
                    sectionIndex: n.index(),
                    activeSlide: n.activeSlide ? n.activeSlide.item : null,
                    leavingSection: hn().F.index() + 1,
                    localIsResizing: vn.W,
                    items: {
                        origin: hn().F,
                        destination: n
                    },
                    direction: null
                };
            if (!(hn().F.item == i && !vn.W || bt().scrollBar && H() === u.dtop && !m(i, "fp-auto-height"))) {
                if (null != u.activeSlide && (o = U(u.activeSlide, "data-anchor"), r = A(u.activeSlide, null)), !u.localIsResizing) {
                    var c = u.yMovement;
                    if (void 0 !== e && (c = e ? "up" : "down"), u.direction = c, Y(bt().beforeLeave) && !1 === Le("beforeLeave", u)) return;
                    if (Y(bt().onLeave) && !Yt("onLeave", u)) return
                }
                bt().autoScrolling && bt().continuousVertical && void 0 !== u.isMovementUp && (!u.isMovementUp && "up" == u.yMovement || u.isMovementUp && "down" == u.yMovement) && (u = function(n) {
                        dn({
                            en: !0
                        });
                        var t = hn().F.item;
                        return n.isMovementUp ? B(t, tn(t, Gn)) : N(t, en(t, Gn).reverse()), It(hn().F.item.offsetTop),
                            function() {
                                for (var n = p(Xn), t = 0; t < n.length; t++) he(n[t], "internal")
                            }(), n.mn = t, n.dtop = n.element.offsetTop, n.yMovement = Ct(hn().F, n.element), n
                    }(u)), u.localIsResizing || Xt(hn().F.item), L(i, Vn), D(W(i), Vn), qe(), Jt(i), dn({
                        G: f.test.wn
                    }), te(r, o, u.anchorLink),
                    function(n) {
                        var t = bt().scrollingSpeed < 700,
                            e = t ? 700 : bt().scrollingSpeed;
                        if (dn({
                                K: "none",
                                scrollY: Math.round(n.dtop)
                            }), sn.D(Dn), bt().css3 && bt().autoScrolling && !bt().scrollBar) Bt("translate3d(0px, -" + Math.round(n.dtop) + "px, 0px)", !0), bt().scrollingSpeed ? (clearTimeout(Oe), Oe = setTimeout((function() {
                            Ee(n), dn({
                                G: !t || f.test.wn
                            })
                        }), bt().scrollingSpeed)) : Ee(n);
                        else {
                            var i = Rt(n.dtop);
                            f.test.top = -n.dtop + "px", clearTimeout(Oe), qt(i.element, i.options, bt().scrollingSpeed, (function() {
                                bt().scrollBar ? Oe = setTimeout((function() {
                                    Ee(n)
                                }), 30) : (Ee(n), dn({
                                    G: !t || f.test.wn
                                }))
                            }))
                        }
                        t && (clearTimeout(je), je = setTimeout((function() {
                            dn({
                                G: !0
                            })
                        }), e))
                    }(u), dn({
                        U: u.anchorLink
                    }), Se(u.anchorLink, u.sectionIndex)
            }
        }
    }

    function Ee(n) {
        dn({
                B: !1
            }),
            function(n) {
                null != n.mn && (n.isMovementUp ? B(p(Gn)[0], n.mn) : N(p(Gn)[hn().C.length - 1], n.mn), It(hn().F.item.offsetTop), function() {
                    for (var n = p(Xn), t = 0; t < n.length; t++) he(n[t], "internal")
                }(), dn({
                    en: !1
                }))
            }(n), Y(bt().afterLoad) && !n.localIsResizing && Yt("afterLoad", n), qe(), n.localIsResizing || $t(n.element), L(n.element, _n), D(W(n.element), _n), me(), Ve.bn(), dn({
                G: !0
            }), sn.D(En, n), Y(n.callback) && n.callback()
    }

    function Re(n, t) {
        St("fitToSection", n, t)
    }

    function Pe() {
        vn.G && (dn({
            W: !0
        }), De(vn.F), dn({
            W: !1
        }))
    }

    function ze() {
        var n = bt().responsive || bt().responsiveWidth,
            t = bt().responsiveHeight,
            e = n && o.innerWidth < n,
            i = t && o.innerHeight < t;
        n && t ? Ce(e || i) : n ? Ce(e) : t && Ce(i)
    }

    function Ce(n) {
        var t = Fe();
        n ? t || (ge(!1, "internal"), Re(!1, "internal"), O(p(Yn)), L(Vt, Bn), Y(bt().afterResponsive) && bt().afterResponsive.call(wt(), n)) : t && (ge(yt().autoScrolling, "internal"), Re(yt().autoScrolling, "internal"), j(p(Yn)), D(Vt, Bn), Y(bt().afterResponsive) && bt().afterResponsive.call(wt(), n))
    }

    function Fe() {
        return m(Vt, Bn)
    }

    function Ne(n) {
        bt().verticalCentered && (!bt().scrollOverflow && Ve.yn(n.item) || Ve.Sn(n) || m(n.item, et) || L(n.item, et))
    }
    f.moveTo = moveTo, f.getScrollY = function() {
        return vn.scrollY
    }, sn.L(Sn, (function() {
        clearTimeout(Oe), clearTimeout(je)
    })), f.setFitToSection = Re, f.fitToSection = Pe, f.setResponsive = Ce;
    var Be = null;

    function Ie(n) {
        var t = n.item,
            e = n.Tn.length,
            i = n.index();
        !hn().F && n.isVisible && (L(t, Vn), qe()), Be = hn().F.item, bt().paddingTop && y(t, {
            "padding-top": bt().paddingTop
        }), bt().paddingBottom && y(t, {
            "padding-bottom": bt().paddingBottom
        }), void 0 !== bt().sectionsColor[i] && y(t, {
            "background-color": bt().sectionsColor[i]
        }), void 0 !== bt().anchors[i] && t.setAttribute("data-anchor", n.anchor), e || Ne(n)
    }

    function He() {
        bt().scrollOverflow && !bt().scrollBar && (Ve.Mn(), Ve.bn())
    }
    f.getActiveSection = function() {
        return hn().F
    }, sn.L(yn, (function() {
        sn.L(pn, He), sn.L(Rn, Ve.bn)
    }));
    var We, Ve = {
            An: null,
            xn: null,
            On: null,
            jn: function(n) {
                if (!vn.G) return V(n), !1
            },
            bn: function() {
                if (bt().scrollOverflow) {
                    r.activeElement === this.An && this.An.blur();
                    var n = Ve.kn(hn().F.item);
                    !n || a || c || (this.An = n, requestAnimationFrame((function() {
                        n.focus()
                    })))
                }
            },
            Mn: function() {
                bt().scrollOverflowMacStyle && !u && L(Vt, "fp-scroll-mac"), hn().vn.forEach((function(n) {
                    if (!(n.slides && n.slides.length || m(n.item, "fp-auto-height-responsive") && Fe())) {
                        var t, e = Dt(n.item),
                            i = Ve.yn(n.item),
                            o = (t = n).un ? t : t.parent;
                        if (l) {
                            var r = i ? "addClass" : "removeClass";
                            ln[r](o.item, rt), ln[r](n.item, rt)
                        } else L(o.item, rt), L(n.item, rt);
                        n.an || (Ve.Ln(e), Ve.Dn(e)), n.an = !0
                    }
                }))
            },
            Dn: function(n) {
                Ve.kn(n).addEventListener("scroll", Ve.En), n.addEventListener("wheel", Ve.jn, {
                    passive: !1
                }), n.addEventListener("keydown", Ve.jn, {
                    passive: !1
                })
            },
            Ln: function(n) {
                var t = document.createElement("div");
                t.className = it, z(n, t), t.setAttribute("tabindex", "-1")
            },
            Rn: function(n) {
                var t = p(ot, n)[0];
                t && (C(t), n.removeAttribute("tabindex"))
            },
            kn: function(n) {
                var t = Dt(n);
                return p(ot, t)[0] || t
            },
            an: function(n) {
                return m(n, it) || null != p(ot, n)[0]
            },
            Sn: function(n) {
                return n.un && n.activeSlide ? n.activeSlide.an : n.an
            },
            yn: function(n) {
                return Ve.kn(n).scrollHeight > o.innerHeight
            },
            Pn: function(n, t) {
                if (!vn.G) return !1;
                if (bt().scrollBar) return !0;
                var e = Ve.kn(t);
                if (!bt().scrollOverflow || !m(e, it) || m(Dt(t), "fp-noscroll")) return !0;
                var i = l ? 1 : 0,
                    o = e.scrollTop,
                    r = "up" === n && o <= 0,
                    a = "down" === n && e.scrollHeight <= Math.ceil(e.offsetHeight + o) + i,
                    u = r || a;
                return u || (this.xn = (new Date).getTime()), u
            },
            zn: function() {
                this.On = (new Date).getTime();
                var n = this.On - Ve.xn,
                    t = (a || c) && vn.X,
                    e = vn.J && n > 600;
                return t && n > 400 || e
            },
            En: (We = 0, function(n) {
                var t = n.target.scrollTop,
                    e = "none" !== vn.K ? vn.K : We < t ? "down" : "up";
                We = t, Y(bt().onScrollOverflow) && Yt("onScrollOverflow", {
                    position: t,
                    direction: e
                }), m(n.target, it) && vn.G && Ve.Pn(e, n.target) && Ve.zn() && Ve.yn(hn().F.item) && sn.D(Mn, {
                    direction: e
                })
            })
        },
        Ue = null,
        _e = null;

    function qe() {
        vn.F = null, vn.C.map((function(n) {
                var t = m(n.item, Vn);
                n.isActive = t, n.an = Ve.an(n.item), t && (vn.F = n), n.slides.length && (n.activeSlide = null, n.slides.map((function(t) {
                    var e = m(t.item, Vn);
                    t.an = Ve.an(n.item), t.isActive = e, e && (n.activeSlide = t)
                })))
            })),
            function() {
                var n = vn.F,
                    t = !!vn.F && vn.F.slides.length,
                    e = vn.F ? vn.F.activeSlide : null;
                if (!n && vn.C.length && !hn().B && Ue) {
                    var i = Ye(Ue, vn.C);
                    i && (vn.F = i, vn.F.isActive = !0, L(vn.F.item, Vn)), vn.F && It(vn.F.item.offsetTop)
                }
                if (t && !e && _e) {
                    var o = Ye(_e, vn.F.slides);
                    o && (vn.F.activeSlide = o, vn.F.activeSlide.isActive = !0, L(vn.F.activeSlide.item, Vn)), vn.F.activeSlide && he(vn.F.activeSlide.item, "internal")
                }
            }()
    }

    function Ge() {
        var n = p(bt().sectionSelector, wt()),
            t = h(n),
            e = Array.from(n).map((function(n) {
                return new $e(n)
            })),
            i = e.filter((function(n) {
                return n.isVisible
            })),
            o = i.reduce((function(n, t) {
                return n.concat(t.slides)
            }), []);
        Ue = Ke(vn.F), _e = Ke(vn.F ? vn.F.activeSlide : null), vn.R = t.length, vn.P = i.reduce((function(n, t) {
            return n + t.slides.length
        }), 0), vn.C = i, vn.ln = e, vn.slides = o, vn.vn = vn.C.concat(vn.slides)
    }

    function Ke(n) {
        if (!n) return null;
        var t = n ? n.item : null,
            e = n.un ? vn.ln : vn.F.Cn;
        if (t) {
            var i = Ot(e, t);
            return i ? i.index() : null
        }
        return null
    }

    function Ye(n, t) {
        var e, i = n - 1,
            o = n;
        do {
            if (e = t[i] || t[o]) break;
            i -= 1, o += 1
        } while (i >= 0 || o < t.length);
        return e
    }
    var $e = function(n) {
        var t = this;
        [].push.call(arguments, bt().sectionSelector), At.apply(this, arguments), this.Tn = p(bt().slideSelector, n), this.Cn = Array.from(this.Tn).map((function(n) {
            return new Xe(n, t)
        })), this.slides = this.Cn.filter((function(n) {
            return n.isVisible
        })), this.activeSlide = this.slides.length ? this.slides.filter((function(n) {
            return n.isActive
        }))[0] || this.slides[0] : null
    };
    $e.prototype = At.prototype, $e.prototype.constructor = $e;
    var Qe, Xe = function(n, t) {
        this.parent = t, At.call(this, n, bt().slideSelector)
    };

    function Je() {
        L(p(bt().sectionSelector, wt()), qn), L(p(bt().slideSelector, wt()), $n)
    }

    function Ze(n) {
        var t = n.slides.length,
            e = n.Tn,
            i = n.slides,
            o = 100 * t,
            a = 100 / t;
        if (!p(Zn, n.item)[0]) {
            var u = r.createElement("div");
            u.className = Jn, P(e, u);
            var c = r.createElement("div");
            c.className = nt, P(e, c)
        }
        y(p(tt, n.item), {
            width: o + "%"
        }), t > 1 && (bt().controlArrows && function(n) {
            var t = n.item,
                e = [J(bt().controlArrowsHTML[0]), J(bt().controlArrowsHTML[1])];
            N(p(Zn, t)[0], e), L(e, ct), L(e[0], ft), L(e[1], "fp-next"), "#fff" !== bt().controlArrowColor && (y(p(vt, t), {
                "border-color": "transparent transparent transparent " + bt().controlArrowColor
            }), y(p(st, t), {
                "border-color": "transparent " + bt().controlArrowColor + " transparent transparent"
            })), bt().loopHorizontal || O(p(st, t))
        }(n), bt().slidesNavigation && function(n) {
            var t = n.item,
                e = n.slides.length;
            E(J('<div class="fp-slidesNav"><ul></ul></div>'), t);
            var i = p(at, t)[0];
            L(i, "fp-" + bt().slidesNavPosition);
            for (var o = 0; o < e; o++) E(J('<li><a href="#"><span class="fp-sr-only">' + ie(o, "Slide", p(Qn, t)[o]) + "</span><span></span></a></li>"), p("ul", i)[0]);
            y(i, {
                "margin-left": "-" + i.innerWidth / 2 + "px"
            });
            var r = n.activeSlide ? n.activeSlide.index() : 0;
            L(p("a", p("li", i)[r]), Vn)
        }(n)), i.forEach((function(n) {
            y(n.item, {
                width: a + "%"
            }), bt().verticalCentered && Ne(n)
        }));
        var l = n.activeSlide || null;
        null != l && vn.F && (0 !== vn.F.index() || 0 === vn.F.index() && 0 !== l.index()) ? he(l.item, "internal") : L(e[0], Vn)
    }
    Xe.prototype = At.prototype, Xe.prototype.constructor = $e;
    var ni = {
        attributes: !1,
        subtree: !0,
        childList: !0,
        characterData: !0
    };

    function ti() {
        return h(p(bt().slideSelector, wt())).length !== hn().P
    }

    function ei(n) {
        var t = ti();
        (ti() || h(p(bt().sectionSelector, wt())).length !== hn().R) && !vn.en && (bt().observer && Qe && Qe.disconnect(), Ge(), qe(), bt().anchors = [], Z(p(Yn)), Je(), Tt(), bt().navigation && be(), t && (Z(p(at)), Z(p(lt))), hn().C.forEach((function(n) {
            n.slides.length ? t && Ze(n) : Ie(n)
        }))), bt().observer && Qe && p(Nn)[0] && Qe.observe(p(Nn)[0], ni)
    }
    sn.L(yn, (function() {
        var n, t, e;
        bt().observer && "MutationObserver" in window && p(Nn)[0] && (n = p(Nn)[0], t = ni, (e = new MutationObserver(ei)).observe(n, t), Qe = e), sn.L(Tn, ei)
    })), f.render = ei;
    var ii = function() {
        var n = !1;
        try {
            var t = Object.defineProperty({}, "passive", {
                get: function() {
                    n = !0
                }
            });
            q("testPassive", null, t), K("testPassive", null, t)
        } catch (n) {}
        return function() {
            return n
        }
    }();

    function oi() {
        return !!ii() && {
            passive: !1
        }
    }
    var ri, ai, ui, ci, li = (ui = (new Date).getTime(), ci = [], {
        Fn: function(n) {
            var t = (n = n || o.event).wheelDelta || -n.deltaY || -n.detail,
                e = Math.max(-1, Math.min(1, t)),
                i = void 0 !== n.wheelDeltaX || void 0 !== n.deltaX;
            ri = Math.abs(n.wheelDeltaX) < Math.abs(n.wheelDelta) || Math.abs(n.deltaX) < Math.abs(n.deltaY) || !i;
            var r = (new Date).getTime();
            ai = e < 0 ? "down" : "up", ci.length > 149 && ci.shift(), ci.push(Math.abs(t));
            var a = r - ui;
            ui = r, a > 200 && (ci = [])
        },
        Nn: function() {
            var n = an(ci, 10) >= an(ci, 70);
            return !!ci.length && n && ri
        },
        Bn: function() {
            return ai
        }
    });

    function fi() {
        var n = bt().css3 ? H() + w() : rn(hn().C).item.offsetTop + rn(hn().C).item.offsetHeight,
            t = Rt(n);
        f.test.top = -n + "px", dn({
            G: !1
        }), qt(t.element, t.options, bt().scrollingSpeed, (function() {
            setTimeout((function() {
                dn({
                    B: !0
                }), dn({
                    G: !0
                })
            }), 30)
        }))
    }

    function si() {
        wt().getBoundingClientRect().bottom >= 0 && vi()
    }

    function vi() {
        var n = Rt(rn(hn().C).item.offsetTop);
        dn({
            G: !1
        }), qt(n.element, n.options, bt().scrollingSpeed, (function() {
            dn({
                G: !0
            }), dn({
                B: !1
            }), dn({
                In: !1
            })
        }))
    }
    var di, hi, pi, gi = (di = !1, hi = {}, pi = {}, function(n, t, e) {
        switch (n) {
            case "set":
                hi[t] = (new Date).getTime(), pi[t] = e;
                break;
            case "isNewKeyframe":
                var i = (new Date).getTime();
                di = i - hi[t] > pi[t]
        }
        return di
    });

    function mi() {
        var n = hn().F.next();
        n || !bt().loopBottom && !bt().continuousVertical || (n = hn().C[0]), null != n ? De(n, null, !1) : wt().scrollHeight < Vt.scrollHeight && sn.D(Ln)
    }

    function wi() {
        var n = hn().F.prev();
        n || !bt().loopTop && !bt().continuousVertical || (n = rn(hn().C)), null != n && De(n, null, !0)
    }
    f.moveSectionDown = mi, f.moveSectionUp = wi;
    var bi = 0;

    function yi(n) {
        bt().autoScrolling && (vn.G && (n.pageY < bi && ce().m.up ? wi() : n.pageY > bi && ce().m.down && mi()), bi = n.pageY)
    }

    function Si(n) {
        if (ce().m[n]) {
            var t = "down" === n ? mi : wi;
            bt().scrollOverflow && Ve.Sn(hn().F) ? Ve.Pn(n, hn().F.item) && Ve.zn() && t() : t()
        }
    }
    var Ti, Mi, Ai, xi, Oi = 0,
        ji = 0,
        ki = 0,
        Li = 0,
        Di = (o.PointerEvent && (xi = {
            down: "pointerdown",
            move: "pointermove"
        }), xi),
        Ei = {
            Hn: "ontouchmove" in window ? "touchmove" : Di ? Di.move : null,
            Wn: "ontouchstart" in window ? "touchstart" : Di ? Di.down : null
        };

    function Ri(n) {
        var t = F(n.target, Gn) || hn().F.item,
            e = Ve.Sn(hn().F);
        if (Pi(n)) {
            dn({
                X: !0,
                J: !1
            }), bt().autoScrolling && (e && !vn.G || bt().scrollBar) && V(n);
            var i = Fi(n);
            ki = i.y, Li = i.x;
            var r = Math.abs(Oi - ki) > o.innerHeight / 100 * bt().touchSensitivity,
                a = Math.abs(ji - Li) > b() / 100 * bt().touchSensitivity,
                u = p(Zn, t).length && Math.abs(ji - Li) > Math.abs(Oi - ki),
                c = Oi > ki ? "down" : "up";
            dn({
                K: u ? ji > Li ? "right" : "left" : c
            }), u ? !vn.H && a && (ji > Li ? ce().m.right && sn.D(wn, {
                section: t
            }) : ce().m.left && sn.D(mn, {
                section: t
            })) : bt().autoScrolling && vn.G && r && Si(c)
        }
    }

    function Pi(n) {
        return void 0 === n.pointerType || "mouse" != n.pointerType
    }

    function zi(n) {
        if (bt().fitToSection && dn({
                q: !1
            }), Pi(n)) {
            var t = Fi(n);
            Oi = t.y, ji = t.x
        }
        q("touchend", Ci)
    }

    function Ci() {
        K("touchend", Ci), dn({
            X: !1
        })
    }

    function Fi(n) {
        var t = {};
        return t.y = void 0 !== n.pageY && (n.pageY || n.pageX) ? n.pageY : n.touches[0].pageY, t.x = void 0 !== n.pageX && (n.pageY || n.pageX) ? n.pageX : n.touches[0].pageX, c && Pi(n) && bt().scrollBar && void 0 !== n.touches && (t.y = n.touches[0].pageY, t.x = n.touches[0].pageX), t
    }

    function Ni(n) {
        bt().autoScrolling && Pi(n) && ce().m.up && (vn.G || V(n))
    }

    function Bi(n, t) {
        var e = null == t ? hn().F.item : t,
            i = Ot(vn.C, e),
            o = p(Zn, e)[0];
        if (!(null == o || vn.H || i.slides.length < 2)) {
            var r = i.activeSlide,
                a = "left" === n ? r.prev() : r.next();
            if (!a) {
                if (!bt().loopHorizontal) return;
                a = "left" === n ? rn(i.slides) : i.slides[0]
            }
            dn({
                H: !f.test.wn
            }), se(o, a.item, n)
        }
    }

    function Ii(n) {
        Bi("left", n)
    }

    function Hi(n) {
        Bi("right", n)
    }

    function Wi(n) {
        var t = hn().C.filter((function(t) {
            return t.anchor === n
        }))[0];
        if (!t) {
            var e = void 0 !== n ? n - 1 : 0;
            t = hn().C[e]
        }
        return t
    }

    function Vi(n) {
        null != n && se(F(n, Zn), n)
    }

    function Ui(n, t) {
        var e = Wi(n);
        if (null != e) {
            var i = function(n, t) {
                var e = t.slides.filter((function(t) {
                    return t.anchor === n
                }))[0];
                return null == e && (n = void 0 !== n ? n : 0, e = t.slides[n]), e ? e.item : null
            }(t, e);
            e.anchor === vn.U || m(e.item, Vn) ? Vi(i) : De(e, (function() {
                Vi(i)
            }))
        }
    }

    function _i(n, t) {
        var e = Wi(n);
        void 0 !== t ? Ui(n, t) : null != e && De(e)
    }

    function qi() {
        clearTimeout(Mi), G("keydown", Gi), G("keyup", Ki)
    }

    function Gi(n) {
        clearTimeout(Mi);
        var t, e = n.keyCode,
            i = [37, 39].indexOf(e) > -1,
            o = bt().autoScrolling || bt().fitToSection || i;
        9 === e ? function(n) {
            var t = n.shiftKey,
                e = r.activeElement,
                i = Ji(Dt(hn().F.item));

            function o(n) {
                return V(n), i[0] ? i[0].focus() : null
            }
            if (! function(n) {
                    var t = Ji(r),
                        e = t.indexOf(r.activeElement),
                        i = t[n.shiftKey ? e - 1 : e + 1],
                        o = F(i, Qn),
                        a = F(i, Gn);
                    return !o && !a
                }(n)) {
                e ? null == F(e, ".fp-section.active,.fp-section.active .fp-slide.active") && (e = o(n)) : o(n);
                var a = e == i[0],
                    u = e == i[i.length - 1],
                    c = t && a;
                if (c || !t && u) {
                    V(n);
                    var l = function(n) {
                            var t, e = n ? "prevPanel" : "nextPanel",
                                i = [],
                                o = Et((vn.F && vn.F.activeSlide ? vn.F.activeSlide : vn.F)[e]());
                            do {
                                (i = Ji(o.item)).length && (t = {
                                    Vn: o,
                                    Un: i[n ? i.length - 1 : 0]
                                }), o = Et(o[e]())
                            } while (o && 0 === i.length);
                            return t
                        }(c),
                        f = l ? l.Vn : null;
                    if (f) {
                        var s = f.un ? f : f.parent;
                        sn.D(An, {
                            _n: s.index() + 1,
                            slideAnchor: f.un ? 0 : f.index()
                        }), Ai = l.Un, V(n)
                    }
                }
            }
        }(n) : Q(t = r.activeElement, "textarea") || Q(t, "input") || Q(t, "select") || "true" == U(t, "contentEditable") || "" == U(t, "contentEditable") || !bt().keyboardScrolling || !o || (Ti = n.ctrlKey, Mi = setTimeout((function() {
            ! function(n) {
                var t = n.shiftKey,
                    e = r.activeElement,
                    i = Q(e, "video") || Q(e, "audio"),
                    o = Ve.Pn("up", hn().F.item),
                    a = Ve.Pn("down", hn().F.item),
                    u = [37, 39].indexOf(n.keyCode) > -1;
                if (function(n) {
                        (function(n) {
                            return [40, 38, 32, 33, 34].indexOf(n.keyCode) > -1 && !vn.B
                        })(n) && !F(n.target, ot) && n.preventDefault()
                    }(n), vn.G || u) switch (dn({
                        N: "keydown"
                    }), n.keyCode) {
                    case 38:
                    case 33:
                        ce().k.up && o && (vn.B ? sn.D(xn, {
                            e: n
                        }) : wi());
                        break;
                    case 32:
                        if (t && ce().k.up && !i && o) {
                            wi();
                            break
                        }
                    case 40:
                    case 34:
                        if (ce().k.down && a) {
                            if (vn.B) return;
                            32 === n.keyCode && i || mi()
                        }
                        break;
                    case 36:
                        ce().k.up && _i(1);
                        break;
                    case 35:
                        ce().k.down && _i(hn().C.length);
                        break;
                    case 37:
                        ce().k.left && Ii();
                        break;
                    case 39:
                        ce().k.right && Hi()
                }
            }(n)
        }), 0))
    }

    function Ki(n) {
        vn.Z && (Ti = n.ctrlKey)
    }

    function Yi() {
        dn({
            Z: !1
        }), Ti = !1
    }

    function $i(n) {
        Xi()
    }

    function Qi(n) {
        F(Ai, Qn) && !F(Ai, Xn) || Xi()
    }

    function Xi() {
        Ai && (Ai.focus(), Ai = null)
    }

    function Ji(n) {
        return [].slice.call(p('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]', n)).filter((function(n) {
            return "-1" !== U(n, "tabindex") && null !== n.offsetParent
        }))
    }
    f.moveSlideLeft = Ii, f.moveSlideRight = Hi, f.moveTo = _i, sn.L(yn, (function() {
        q("blur", Yi), _("keydown", Gi), _("keyup", Ki), sn.L(Sn, qi), sn.L(Rn, $i), sn.L(En, Qi)
    }));
    var Zi = (new Date).getTime(),
        no = [];

    function to(n) {
        n ? (function() {
            var n, t = "";
            o.addEventListener ? n = "addEventListener" : (n = "attachEvent", t = "on");
            var e = "onwheel" in r.createElement("div") ? "wheel" : void 0 !== r.onmousewheel ? "mousewheel" : "DOMMouseScroll",
                i = oi();
            "DOMMouseScroll" == e ? r[n](t + "MozMousePixelScroll", eo, i) : r[n](t + e, eo, i)
        }(), wt().addEventListener("mousedown", io), wt().addEventListener("mouseup", oo)) : (r.addEventListener ? (G("mousewheel", eo, !1), G("wheel", eo, !1), G("MozMousePixelScroll", eo, !1)) : r.detachEvent("onmousewheel", eo), wt().removeEventListener("mousedown", io), wt().removeEventListener("mouseup", oo))
    }

    function eo(n) {
        var t = (new Date).getTime(),
            e = m(p(".fp-completely")[0], "fp-normal-scroll"),
            i = function(n, t) {
                (new Date).getTime();
                var e = hn().B && n.getBoundingClientRect().bottom >= 0 && "up" === li.Bn(),
                    i = hn().In;
                if (i) return V(t), !1;
                if (hn().B) {
                    if (e) {
                        var o;
                        if (!(i || gi("isNewKeyframe", "beyondFullpage") && li.Nn())) return (o = Rt(rn(hn().C).item.offsetTop + rn(hn().C).item.offsetHeight)).element.scrollTo(0, o.options), dn({
                            In: !1
                        }), V(t), !1;
                        if (li.Nn()) return e = !1, dn({
                            In: !0
                        }), dn({
                            N: "wheel"
                        }), vi(), V(t), !1
                    } else gi("set", "beyondFullpage", 1e3);
                    if (!i && !e) return !0
                }
            }(wt(), n);
        if (vn.J || dn({
                X: !1,
                J: !0,
                K: "none"
            }), !ce().m.down && !ce().m.up) return V(n), !1;
        if (i) return !0;
        if (!1 === i) return V(n), !1;
        if (bt().autoScrolling && !Ti && !e) {
            var r = (n = n || o.event).wheelDelta || -n.deltaY || -n.detail,
                a = Math.max(-1, Math.min(1, r)),
                u = void 0 !== n.wheelDeltaX || void 0 !== n.deltaX,
                c = Math.abs(n.wheelDeltaX) < Math.abs(n.wheelDelta) || Math.abs(n.deltaX) < Math.abs(n.deltaY) || !u,
                l = a < 0 ? "down" : a > 0 ? "up" : "none";
            no.length > 149 && no.shift(), no.push(Math.abs(r)), bt().scrollBar && V(n);
            var f = t - Zi;
            return Zi = t, f > 200 && (no = []), dn({
                Y: l
            }), vn.G && an(no, 10) >= an(no, 70) && c && (dn({
                N: "wheel"
            }), Si(a < 0 ? "down" : "up")), !1
        }
        bt().fitToSection && dn({
            q: !1
        })
    }

    function io(n) {
        var t;
        2 == n.which && (t = n.pageY, bi = t, wt().addEventListener("mousemove", yi))
    }

    function oo(n) {
        2 == n.which && wt().removeEventListener("mousemove", yi)
    }

    function ro(n) {
        n ? (to(!0), function() {
            if (Ei.Hn && (a || c)) {
                bt().autoScrolling && (Vt.removeEventListener(Ei.Hn, Ni, {
                    passive: !1
                }), Vt.addEventListener(Ei.Hn, Ni, {
                    passive: !1
                }));
                var n = bt().touchWrapper;
                n.removeEventListener(Ei.Wn, zi), n.removeEventListener(Ei.Hn, Ri, {
                    passive: !1
                }), n.addEventListener(Ei.Wn, zi), n.addEventListener(Ei.Hn, Ri, {
                    passive: !1
                })
            }
        }()) : (to(!1), function() {
            if (Ei.Hn && (a || c)) {
                bt().autoScrolling && (Vt.removeEventListener(Ei.Hn, Ri, {
                    passive: !1
                }), Vt.removeEventListener(Ei.Hn, Ni, {
                    passive: !1
                }));
                var n = bt().touchWrapper;
                n.removeEventListener(Ei.Wn, zi), n.removeEventListener(Ei.Hn, Ri, {
                    passive: !1
                })
            }
        }())
    }
    f.setMouseWheelScrolling = to;
    var ao = !0;

    function uo() {
        ["mouseenter", "touchstart", "mouseleave", "touchend"].forEach((function(n) {
            G(n, lo, !0)
        }))
    }

    function co(n, t) {
        document["fp_" + n] = t, _(n, lo, !0)
    }

    function lo(n) {
        var t = n.type,
            e = !1,
            i = "mouseleave" === t ? n.toElement || n.relatedTarget : n.target;
        i != document && i ? ("touchend" === t && (ao = !1, setTimeout((function() {
            ao = !0
        }), 800)), ("mouseenter" !== t || ao) && (bt().normalScrollElements.split(",").forEach((function(n) {
            if (!e) {
                var t = Q(i, n),
                    o = F(i, n);
                (t || o) && (f.shared.qn || ro(!1), f.shared.qn = !0, e = !0)
            }
        })), !e && f.shared.qn && (ro(!0), f.shared.qn = !1))) : ro(!0)
    }

    function fo(n, t) {
        Ht(0, "internal"), _i(n, t), Ht(yt().scrollingSpeed, "internal")
    }
    sn.L(yn, (function() {
        bt().normalScrollElements && (["mouseenter", "touchstart"].forEach((function(n) {
            co(n, !1)
        })), ["mouseleave", "touchend"].forEach((function(n) {
            co(n, !0)
        }))), sn.L(Sn, uo)
    })), f.silentMoveTo = fo;
    var so, vo, ho = w(),
        po = b(),
        go = !1;

    function mo() {
        clearTimeout(so), clearTimeout(vo), K("resize", wo)
    }

    function wo() {
        go || (bt().autoScrolling && !bt().scrollBar || !bt().fitToSection) && yo(w()),
            function() {
                if (a)
                    for (var n = 0; n < 4; n++) vo = setTimeout((function() {
                        window.requestAnimationFrame((function() {
                            bt().autoScrolling && !bt().scrollBar && (dn({
                                W: !0
                            }), fo(vn.F.index() + 1), dn({
                                W: !1
                            }))
                        }))
                    }), 200 * n)
            }(), go = !0, clearTimeout(so), so = setTimeout((function() {
                ! function() {
                    if (dn({
                            W: !0
                        }), yo(""), bt().autoScrolling || vn.B || function() {
                            if (!bt().autoScrolling || bt().scrollBar) {
                                var n = .01 * o.innerHeight;
                                r.documentElement.style.setProperty("--vh", "".concat(n, "px"))
                            }
                        }(), sn.D(Tn), qe(), ze(), a) {
                        var n = r.activeElement;
                        if (!Q(n, "textarea") && !Q(n, "input") && !Q(n, "select")) {
                            var t = w();
                            Math.abs(t - ho) > 20 * Math.max(ho, t) / 100 && (bo(!0), ho = t)
                        }
                    } else e = w(), i = b(), vn.tn === e && po === i || (dn({
                        tn: e
                    }), po = i, bo(!0));
                    var e, i;
                    dn({
                        W: !1
                    })
                }(), go = !1
            }), 400)
    }

    function bo(n) {
        if (!m(wt(), Hn)) {
            dn({
                W: !0,
                tn: w(),
                Gn: b()
            });
            for (var t = hn().C, e = 0; e < t.length; ++e) {
                var i = t[e],
                    r = p(Zn, i.item)[0];
                i.slides.length > 1 && se(r, i.activeSlide.item)
            }
            bt().scrollOverflow && Ve.Mn();
            var a = hn().F.index();
            vn.B || a && fo(a + 1), dn({
                W: !1
            }), Y(bt().afterResize) && n && bt().afterResize.call(wt(), o.innerWidth, o.innerHeight), Y(bt().afterReBuild) && !n && bt().afterReBuild.call(wt()), $(wt(), "afterRebuild")
        }
    }

    function yo(n) {
        var t = "" === n ? "" : n + "px";
        hn().C.forEach((function(n) {
            y(n.item, {
                height: t
            })
        }))
    }

    function So() {
        var n, t, e = o.location.hash;
        if (e.length) {
            var i = e.replace("#", "").split("/"),
                r = e.indexOf("#/") > -1;
            n = r ? "/" + i[1] : decodeURIComponent(i[0]);
            var a = r ? i[2] : i[1];
            a && a.length && (t = decodeURIComponent(a))
        }
        return {
            section: n,
            hn: t
        }
    }

    function To() {
        K("hashchange", Mo)
    }

    function Mo() {
        if (!vn.V && !bt().lockAnchors) {
            var n = So(),
                t = n.section,
                e = n.hn,
                i = void 0 === vn.U,
                o = void 0 === vn.U && void 0 === e && !vn.H;
            t && t.length && (t && t !== vn.U && !i || o || !vn.H && vn._ != e) && sn.D(An, {
                _n: t,
                slideAnchor: e
            })
        }
    }

    function Ao(n) {
        var t = n.target;
        F(t, bt().menu + " [data-menuanchor]") && xo.call(t, n)
    }

    function xo(n) {
        dn({
            N: "menu"
        }), !p(bt().menu)[0] || !bt().lockAnchors && bt().anchors.length || (V(n), sn.D(On, {
            anchor: U(this, "data-menuanchor")
        }))
    }

    function Oo(n) {
        var t = n.target;
        t && F(t, "#fp-nav a") ? ye.call(t, n.e) : Q(t, ".fp-tooltip") ? we.call(t) : (Q(t, ut) || null != F(t, ut)) && oe.call(t, n.e)
    }
    f.reBuild = bo, sn.L(yn, (function() {
        wo(), q("resize", wo), sn.L(Sn, mo)
    })), f.setLockAnchors = function(n) {
        bt().lockAnchors = n
    }, sn.L(yn, (function() {
        q("hashchange", Mo), sn.L(Sn, To)
    })), sn.L(yn, (function() {
        _("wheel", li.Fn, oi()), sn.L(Ln, fi), sn.L(xn, si)
    })), sn.L(yn, (function() {
        sn.L(gn, Ao)
    })), sn.L(yn, (function() {
        sn.L(gn, Oo)
    }));
    var jo, ko, Lo = 0;

    function Do(n) {
        var t, e, i, o, r;
        if (!vn.W && hn().F && (rn(hn().C), !hn().B && !hn().In && (!bt().autoScrolling || bt().scrollBar))) {
            var a = H(),
                u = function(n) {
                    var t = n > Lo ? "down" : "up";
                    return Lo = n, dn({
                        nn: n
                    }), t
                }(a),
                c = 0,
                l = a + w() / 2,
                f = Vt.scrollHeight - w() === a,
                s = hn().C;
            if (dn({
                    scrollY: a
                }), f) c = s.length - 1;
            else if (a)
                for (var v = 0; v < s.length; ++v) s[v].item.offsetTop <= l && (c = v);
            else c = 0;
            if (i = u, o = hn().F.item.offsetTop, r = o + w(), ("up" == i ? r >= H() + w() : o <= H()) && (m(hn().F.item, _n) || (L(hn().F.item, _n), D(W(hn().F.item), _n))), e = (t = s[c]).item, !t.isActive) {
                dn({
                    V: !0
                });
                var d, h, p = hn().F.item,
                    g = hn().F.index() + 1,
                    b = Ct(hn().F, e),
                    y = t.anchor,
                    S = t.index() + 1,
                    T = t.activeSlide,
                    M = {
                        F: p,
                        sectionIndex: S - 1,
                        anchorLink: y,
                        element: e,
                        leavingSection: g,
                        direction: b,
                        items: {
                            origin: hn().F,
                            destination: t
                        }
                    };
                T && (h = T.anchor, d = T.index()), vn.G && (L(e, Vn), D(W(e), Vn), Y(bt().beforeLeave) && Le("beforeLeave", M), Y(bt().onLeave) && Yt("onLeave", M), Y(bt().afterLoad) && Yt("afterLoad", M), Xt(p), Jt(e), $t(e), Se(y, S - 1), bt().anchors.length && dn({
                    U: y
                }), te(d, h, y), qe()), clearTimeout(jo), jo = setTimeout((function() {
                    dn({
                        V: !1
                    })
                }), 100)
            }
            bt().fitToSection && vn.G && (clearTimeout(ko), ko = setTimeout((function() {
                vn.C.filter((function(n) {
                    var t = n.item.getBoundingClientRect();
                    return Math.round(t.bottom) === Math.round(w()) || 0 === Math.round(t.top)
                })).length || Pe()
            }), bt().rn))
        }
    }

    function Eo(n, t) {
        void 0 !== t ? (t = t.replace(/ /g, "").split(",")).forEach((function(t) {
            ue(n, t, "k")
        })) : (ue(n, "all", "k"), bt().keyboardScrolling = n)
    }

    function Ro(n) {
        var t = n.index();
        void 0 !== bt().anchors[t] && n.isActive && Se(bt().anchors[t], t), bt().menu && bt().css3 && null != F(p(bt().menu)[0], Nn) && p(bt().menu).forEach((function(n) {
            Vt.appendChild(n)
        }))
    }

    function Po() {
        var n, t, e = hn().F,
            i = hn().F.item;
        L(i, _n), Jt(i), me(), $t(i), t = Wi((n = So()).section), n.section && t && (void 0 === t || t.index() !== A(Be)) || !Y(bt().afterLoad) || Yt("afterLoad", {
            F: i,
            element: i,
            direction: null,
            anchorLink: e.anchor,
            sectionIndex: e.index(),
            items: {
                origin: hn().F,
                destination: hn().F
            }
        }), Y(bt().afterRender) && Yt("afterRender")
    }

    function zo(n, t) {
        void 0 !== t ? (t = t.replace(/ /g, "").split(",")).forEach((function(t) {
            ue(n, t, "m")
        })) : ue(n, "all", "m")
    }

    function Co() {
        var n = So(),
            t = n.section,
            e = n.hn;
        t ? bt().animateAnchor ? Ui(t, e) : fo(t, e) : sn.D(pn, null)
    }

    function Fo() {
        Ge(), qe(), bt().scrollBar = bt().scrollBar || bt().hybrid, Tt(),
            function() {
                y(cn(wt(), "body"), {
                    height: "100%",
                    position: "relative"
                }), L(wt(), Fn), L(Ut, Wn), dn({
                    tn: w()
                }), D(wt(), Hn), Je();
                for (var n = hn().ln, t = 0; t < n.length; t++) {
                    var e = n[t],
                        i = e.Tn;
                    e.item.setAttribute("data-fp-styles", U(e.item, "style")), Ie(e), Ro(e), i.length > 0 && Ze(e)
                }
                bt().fixedElements && bt().css3 && p(bt().fixedElements).forEach((function(n) {
                    Vt.appendChild(n)
                })), bt().navigation && be(), p('iframe[src*="youtube.com/embed/"]', wt()).forEach((function(n) {
                    var t, e;
                    e = U(t = n, "src"), t.setAttribute("src", e + (/\?/.test(e) ? "&" : "?") + "enablejsapi=1")
                })), bt().scrollOverflow && Ve.Mn()
            }(), zo(!0), ro(!0), ge(bt().autoScrolling, "internal"), ze(), Zt(), "complete" === r.readyState && Co(), q("load", Co), Po(), Ge(), qe()
    }

    function No() {
        var n = bt().licenseKey;
        "" === bt().licenseKey.trim() ? (v("error", "Fullpage.js requires a `licenseKey` option. Read about it on the following URL:"), v("error", "https://github.com/alvarotrigo/fullPage.js#options")) : bt() && vn.Kn || r.domain.indexOf("alvarotrigo.com") > -1 ? n && n.length : (v("error", "Incorrect `licenseKey`. Get one for fullPage.js version 4 here:"), v("error", "https://alvarotrigo.com/fullPage/pricing")), m(Ut, Wn) ? v("error", "Fullpage.js can only be initialized once and you are doing it multiple times!") : (bt().continuousVertical && (bt().loopTop || bt().loopBottom) && (bt().continuousVertical = !1, v("warn", "Option `loopTop/loopBottom` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled")), !bt().scrollOverflow || !bt().scrollBar && bt().autoScrolling || v("warn", "Options scrollBar:true and autoScrolling:false are mutually exclusive with scrollOverflow:true. Sections with scrollOverflow might not work well in Firefox"), !bt().continuousVertical || !bt().scrollBar && bt().autoScrolling || (bt().continuousVertical = !1, v("warn", "Scroll bars (`scrollBar:true` or `autoScrolling:false`) are mutually exclusive with `continuousVertical`; `continuousVertical` disabled")), s.forEach((function(n) {
            bt()[n] && v("warn", "fullpage.js extensions require fullpage.extensions.min.js file instead of the usual fullpage.js. Requested: " + n)
        })), bt().anchors.forEach((function(n) {
            var t = [].slice.call(p("[name]")).filter((function(t) {
                    return U(t, "name") && U(t, "name").toLowerCase() == n.toLowerCase()
                })),
                e = [].slice.call(p("[id]")).filter((function(t) {
                    return U(t, "id") && U(t, "id").toLowerCase() == n.toLowerCase()
                }));
            if (e.length || t.length) {
                v("error", "data-anchor tags can not have the same value as any `id` element on the site (or `name` element for IE).");
                var i = e.length ? "id" : "name";
                (e.length || t.length) && v("error", '"' + n + '" is is being used by another element `' + i + "` property")
            }
        })))
    }

    function Bo(n, t) {
        var e;
        if (Vt = p("body")[0], Ut = p("html")[0], _t = p("html, body"), !m(Ut, Wn)) return "touchWrapper", e = "string" == typeof n ? p(n)[0] : n, dt.touchWrapper = e,
            function(n) {
                mt = g({}, dt, n), gt = Object.assign({}, mt)
            }(t),
            function(n) {
                ht = n
            }("string" == typeof n ? p(n)[0] : n), sn.D(bn), No(), f.getFullpageData = function() {
                return {
                    options: bt()
                }
            }, f.version = "4.0.15", f.test = Object.assign(f.test, {
                top: "0px",
                dn: "translate3d(0px, 0px, 0px)",
                gn: function() {
                    for (var n = [], t = 0; t < p(bt().sectionSelector, wt()).length; t++) n.push("translate3d(0px, 0px, 0px)");
                    return n
                }(),
                left: function() {
                    for (var n = [], t = 0; t < p(bt().sectionSelector, wt()).length; t++) n.push(0);
                    return n
                }(),
                options: bt(),
                setAutoScrolling: null
            }), f.shared = Object.assign(f.shared, {
                Yn: null,
                qn: !1
            }), o.fullpage_api = f, wt() && (sn.D("beforeInit"), Fo(), sn.D(yn)), o.fullpage_api;
        No()
    }
    return sn.L(Sn, (function() {
            clearTimeout(jo), clearTimeout(ko)
        })), sn.L(yn, (function() {
            q("scroll", Do), r.body.addEventListener("scroll", Do), sn.L(An, (function(n) {
                Ui(n._n, n.slideAnchor)
            })), sn.L(On, (function(n) {
                _i(n.anchor, void 0)
            })), sn.L(Mn, (function(n) {
                ("down" === n.direction ? mi : wi)()
            })), sn.L(jn, (function(n) {
                De(n.destination)
            }))
        })), sn.L(Sn, (function() {
            K("scroll", Do)
        })), f.getActiveSlide = function() {
            return Kt(hn().F.activeSlide)
        }, f.getScrollX = function() {
            return vn.scrollX
        }, sn.L(yn, (function() {
            sn.L(Sn, ve), sn.L(kn, (function(n) {
                se(n.slides, n.destination)
            })), sn.L(wn, (function(n) {
                Hi(n.section)
            })), sn.L(mn, (function(n) {
                Ii(n.section)
            }))
        })), sn.L(yn, (function() {
            var n = bt().credits.position,
                t = ["left", "right"].indexOf(n) > -1 ? "".concat(n, ": 0;") : "",
                e = '\n        <div class="fp-watermark" style="'.concat(t, '">\n            <a href="https://alvarotrigo.com/fullPage/" \n                rel="nofollow noopener" \n                target="_blank" \n                style="text-decoration:none; color: #000;">\n                    ').concat(bt().credits.label, "\n            </a>\n        </div>\n    "),
                i = rn(vn.C),
                o = !vn.Kn || bt().credits.enabled;
            i && i.item && o && i.item.insertAdjacentHTML("beforeend", e)
        })),
        function() {
            sn.L(bn, (function() {
                var t, u, c;
                dn({
                    Kn: (bt().licenseKey, t = bt().licenseKey, u = function(t) {
                        var e = parseInt("514").toString(16);
                        if (!t || t.length < 29 || 4 === t.split(n[0]).length) return null;
                        var i = ["Each", "for"][o()]().join(""),
                            u = t[["split"]]("-"),
                            c = [];
                        u[i]((function(n, t) {
                            if (t < 4) {
                                var i = function(n) {
                                    var t = n[n.length - 1],
                                        e = ["NaN", "is"][o()]().join("");
                                    return window[e](t) ? r(t) : function(n) {
                                        return n - Vn.length
                                    }(t)
                                }(n);
                                c.push(i);
                                var a = r(n[i]);
                                if (1 === t) {
                                    var u = ["pa", "dS", "t", "art"].join("");
                                    a = a.toString()[u](2, "0")
                                }
                                e += a, 0 !== t && 1 !== t || (e += "-")
                            }
                        }));
                        var l = 0,
                            f = "";
                        return t.split("-").forEach((function(n, t) {
                            if (t < 4) {
                                for (var e = 0, i = 0; i < 4; i++) i !== c[t] && (e += Math.abs(r(n[i])), isNaN(n[i]) || l++);
                                var o = a(e);
                                f += o
                            }
                        })), f += a(l), {
                            $n: new Date(e + "T00:00"),
                            Qn: e.split("-")[2] === 8 * (Vn.length - 2) + "",
                            Xn: f
                        }
                    }(t), c = function(n) {
                        var t = i[o()]().join("");
                        return n && 0 === t.indexOf(n) && n.length === t.length
                    }(t), (u || c) && (bt().credits && u && e <= u.$n && u.Xn === t.split(n[0])[4] || c || u.Qn) || !1)
                })
            }));
            var n = ["-"],
                t = "2022-10-21".split("-"),
                e = new Date(t[0], t[1], t[2]),
                i = ["se", "licen", "-", "v3", "l", "gp"];

            function o() {
                return [
                    ["re", "verse"].join("")
                ]["".length]
            }

            function r(n) {
                return n ? isNaN(n) ? n.charCodeAt(0) - 72 : n : ""
            }

            function a(n) {
                var t = 72 + n;
                return t > 90 && t < 97 && (t += 15), String.fromCharCode(t).toUpperCase()
            }
        }(), f.setKeyboardScrolling = Eo, f.shared.Yn = Po, f.setAllowScrolling = zo, f.destroy = function(n) {
            ge(!1, "internal"), zo(!0), ro(!1), Eo(!1), L(wt(), Hn), sn.D(Sn), n && (It(0), p("img[data-src], source[data-src], audio[data-src], iframe[data-src]", wt()).forEach((function(n) {
                un(n, "src")
            })), p("img[data-srcset]").forEach((function(n) {
                un(n, "srcset")
            })), Z(p("#fp-nav, .fp-slidesNav, .fp-controlArrow")), y(xt(hn().C), {
                height: "",
                "background-color": "",
                padding: ""
            }), y(xt(hn().slides), {
                width: ""
            }), y(wt(), {
                height: "",
                position: "",
                "-ms-touch-action": "",
                "touch-action": ""
            }), y(_t, {
                overflow: "",
                height: ""
            }), D(Ut, Wn), D(Vt, Bn), Vt.className.split(/\s+/).forEach((function(n) {
                0 === n.indexOf("fp-viewing") && D(Vt, n)
            })), xt(hn().vn).forEach((function(n) {
                bt().scrollOverflow && Ve.Rn(n), D(n, "fp-table active " + _n), U(n, "data-fp-styles") && n.setAttribute("style", U(n, "data-fp-styles")), m(n, qn) && !pt && n.removeAttribute("data-anchor")
            })), Ft(wt()), [Kn, tt, Zn].forEach((function(n) {
                p(n, wt()).forEach((function(n) {
                    C(n)
                }))
            })), y(wt(), {
                "-webkit-transition": "none",
                transition: "none"
            }), o.scrollTo(0, 0), [qn, $n, nt].forEach((function(n) {
                D(p("." + n), n)
            })))
        }, o.fp_easings = g(o.fp_easings, {
            easeInOutCubic: function(n, t, e, i) {
                return (n /= i / 2) < 1 ? e / 2 * n * n * n + t : e / 2 * ((n -= 2) * n * n + 2) + t
            }
        }), o.jQuery && function(n, t) {
            n && t ? n.fn.fullpage = function(e) {
                e = n.extend({}, e, {
                    $: n
                }), new t(this[0], e), Object.keys(f).forEach((function(n) {
                    bt().$.fn.fullpage[n] = f[n]
                }))
            } : v("error", "jQuery is required to use the jQuery fullpage adapter!")
        }(o.jQuery, Bo), Bo
}));
