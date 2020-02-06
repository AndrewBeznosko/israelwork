"use strict";
! function (e) {
    for (var t, n = 0, a = ["ms", "moz", "webkit", "o"], r = 0; r < a.length && !e.requestAnimationFrame; ++r) e.requestAnimationFrame = e[a[r] + "RequestAnimationFrame"], e.cancelAnimationFrame = e[a[r] + "CancelAnimationFrame"] || e[a[r] + "CancelRequestAnimationFrame"];
    if (e.requestAnimationFrame || (e.requestAnimationFrame = function (t, a) {
            var r = (new Date).getTime(),
                i = Math.max(0, 16 - (r - n)),
                o = e.setTimeout((function () {
                    t(r + i)
                }), i);
            return n = r + i, o
        }), e.cancelAnimationFrame || (e.cancelAnimationFrame = function (e) {
            clearTimeout(e)
        }), (t = Element.prototype).matches = t.matches || t.mozMatchesSelector || t.msMatchesSelector || t.oMatchesSelector || t.webkitMatchesSelector, t.closest = t.closest || function (e) {
            return this ? this.matches(e) ? this : this.parentElement ? this.parentElement.closest(e) : null : null
        }, Array.prototype.includes || (Array.prototype.includes = function (e) {
            var t = Object(this),
                n = parseInt(t.length, 10) || 0;
            if (0 === n) return !1;
            var a, r = parseInt(arguments[1], 10) || 0;
            for (r >= 0 ? a = r : (a = n + r) < 0 && (a = 0); a < n;) {
                var i = t[a];
                if (e === i || e != e && i != i) return !0;
                a++
            }
            return !1
        }), Object.values || Object.defineProperty(Object, "values", {
            enumerable: !1,
            configurable: !0,
            writable: !0,
            value: function (e) {
                return "string" == typeof e ? e.split("") : Array.isArray(e) ? e : "object" != typeof e ? [] : Object.keys(e).map((function (t) {
                    return e[t]
                }))
            }
        }), "function" != typeof e.CustomEvent) {
        var i = function (e, t) {
            t = t || {
                bubbles: !1,
                cancelable: !1,
                detail: void 0
            };
            var n = document.createEvent("CustomEvent");
            return n.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), n
        };
        i.prototype = e.Event.prototype, e.CustomEvent = i
    }
    /*! svg4everybody v2.0.3 | github.com/jonathantneal/svg4everybody */
    e.svg4everybody = function () {
        function t(e, t) {
            if (t) {
                var n = document.createDocumentFragment(),
                    a = t.getAttribute("viewBox");
                e.setAttribute("viewBox", a);
                for (var r = t.cloneNode(!0); r.childNodes.length;) n.appendChild(r.firstChild);
                e.appendChild(n)
            }
        }

        function n(e) {
            e.onreadystatechange = function () {
                if (4 === e.readyState) {
                    var n = e._cachedDocument;
                    n || ((n = e._cachedDocument = document.implementation.createHTMLDocument("")).body.innerHTML = e.responseText, e._cachedTarget = {}), e._embeds.splice(0).map((function (a) {
                        var r = e._cachedTarget[a.id];
                        r || (r = e._cachedTarget[a.id] = n.getElementById(a.id)), t(a.svg, r)
                    }))
                }
            }, e.onreadystatechange()
        }
        return function (a) {
            var r, i = Object(a);
            r = "polyfill" in i ? i.polyfill : /\bTrident\/[5-7]\b|\bMSIE (?:9|10)\.0\b/.test(navigator.userAgent) || /\bEdge\/(\d+)\.(\d+)\b/.test(navigator.userAgent) || (navigator.userAgent.match(/\bAp{2}leWebKit\/(\d+)\b/) || [])[1] < 537;
            var o = {},
                c = e.requestAnimationFrame || setTimeout,
                s = document.getElementsByTagName("use");
            r && function e() {
                for (var a = 0; a < s.length;) {
                    var u = s[a],
                        l = u.parentNode;
                    if (l && /svg/i.test(l.nodeName)) {
                        var m = u.getAttribute("xlink:href");
                        if (r && (!i.validate || i.validate(m, l, u))) {
                            l.removeChild(u);
                            var d = m.split("#"),
                                v = d.shift(),
                                f = d.join("#");
                            if (v.length) {
                                var b = o[v];
                                b || ((b = o[v] = new XMLHttpRequest).open("GET", v), b.send(), b._embeds = []), b._embeds.push({
                                    svg: l,
                                    id: f
                                }), n(b)
                            } else t(l, document.getElementById(f))
                        }
                    } else ++a
                }
                c(e, 67)
            }()
        }
    }()
}(window);
"use strict";
! function (e) {
    function n(e) {
        e.preventDefault()
    }
    var o, t, r;
    e.videoImgFallback = function (e) {
        console.warn("video load error, gif fallback used");
        var n = e.querySelector("img");
        n && e.parentNode.replaceChild(n, e)
    }, e.getCookie = function (e) {
        var n = document.cookie.match(new RegExp("(?:^|; )" + e.replace(/([$()*+./?[\\\]^{|}])/g, "\\$1") + "=([^;]*)"));
        return n ? decodeURIComponent(n[1]) : void 0
    }, e.setCookie = function (e, n, o) {
        void 0 === o && (o = {});
        var t = o.expires;
        if ("number" == typeof t && t) {
            var r = new Date;
            r.setTime(r.getTime() + 1e3 * t), t = o.expires = r
        }
        t && t.toUTCString && (o.expires = t.toUTCString());
        var i = e + "=" + (n = encodeURIComponent(n));
        for (var c in o) {
            i += "; " + c;
            var u = o[c];
            !0 !== u && (i += "=" + u)
        }
        document.cookie = i
    }, e.deleteCookie = function (e) {
        setCookie(e, "", {
            expires: -1
        })
    }, e.getJsonFromUrl = function (e) {
        var n;
        if (e) {
            var o = location.href.indexOf("?");
            if (-1 === o) return [];
            n = location.href.substr(o + 1)
        } else n = location.search.substr(1);
        var t = {};
        return n.split("&").forEach((function (e) {
            if (e) {
                var n = (e = e.split("+").join(" ")).indexOf("="),
                    o = n > -1 ? e.substr(0, n) : e,
                    r = n > -1 ? decodeURIComponent(e.substr(n + 1)) : "",
                    i = o.indexOf("[");
                if (-1 === i) t[decodeURIComponent(o)] = r;
                else {
                    var c = o.indexOf("]", i),
                        u = decodeURIComponent(o.substring(i + 1, c));
                    o = decodeURIComponent(o.substring(0, i)), t[o] || (t[o] = []), u ? t[o][u] = r : t[o].push(r)
                }
            }
        })), t
    }, e.chunkSplit = function (e, n, o) {
        return void 0 === n && (n = 3), void 0 === o && (o = " "), (e += "").split("").reverse().join("").match(new RegExp(".{0," + n + "}", "g")).join(o).split("").reverse().join("").trim()
    }, e.preventBodyScrolling = function (e) {
        void 0 === e && (e = !1), document.body[!0 === e ? "addEventListener" : "removeEventListener"]("touchmove", n, !1)
    }, e.scrollParent = (o = /(auto|scroll)/, t = function (e, n) {
        return getComputedStyle(e, null).getPropertyValue(n)
    }, r = function (e) {
        return o.test(function (e) {
            return t(e, "overflow") + t(e, "overflow-y") + t(e, "overflow-x")
        }(e))
    }, function (e) {
        if (e instanceof HTMLElement || e instanceof SVGElement) {
            for (var n = function e(n, o) {
                    return null === n.parentNode ? o : e(n.parentNode, o.concat([n]))
                }(e.parentNode, []), o = 0; o < n.length; o += 1)
                if (r(n[o])) return n[o];
            return document.scrollingElement || document.documentElement
        }
    })
}(window);
"use strict";
void 0 === window.flexbe_cli && (window.flexbe_cli = {}), window.spaced_cli = window.flexbe_cli, flexbe_cli._init = function () {
    function e() {
        if (!flexbe_cli.isInited)
            if ("undefined" != typeof jQuery) {
                flexbe_cli.init(), flexbe_cli.isInited = !0;
                var i = ["ready"];
                i.push(flexbe_cli.run.is_touch ? "is-touch" : "is-pointer"), flexbe_cli.run.is_OSX && flexbe_cli.run.is_desktop && i.push("is-osx"), flexbe_cli.run.is_EDGE && flexbe_cli.run.is_desktop && i.push("is-edge"), flexbe_cli.run.is_firefox && flexbe_cli.run.is_desktop && i.push("is-firefox"), flexbe_cli.run.is_chrome && flexbe_cli.run.is_desktop && i.push("is-chrome"), flexbe_cli.run.is_ios && i.push("is-ios"), flexbe_cli.run.is_safari && i.push("is-safari");
                try {
                    var l;
                    (l = document.body.classList).add.apply(l, i)
                } catch (e) {
                    document.body.className += " " + i.join(" ")
                }
                flexbe_cli.run.is_screenshoter || (window.onpopstate = function () {
                    flexbe_cli.modal.popstate()
                }), svg4everybody({
                    polyfill: !flexbe_cli.is_admin && (flexbe_cli.run.is_ie || flexbe_cli.run.is_EDGE)
                })
            } else setTimeout(e, 10)
    } ["complete", "loaded"].includes(document.readyState) ? e() : document.addEventListener("DOMContentLoaded", (function () {
        e()
    })), window.addEventListener("load", (function () {
        e(), flexbe_cli.isLoaded = !0
    }))
};
"use strict";
$.observable = function (t) {
    var i = {
        _JQInit: function () {
            this._JQ = $(this)
        },
        emit: function (t, i) {
            return !this._JQ && this._JQInit(), this._JQ.trigger(t, i), this
        },
        one: function (t, i) {
            return !this._JQ && this._JQInit(), this._JQ.one(t, i), this
        },
        on: function (t, i) {
            return !this._JQ && this._JQInit(), this._JQ.bind(t, i), this
        },
        off: function (t, i) {
            return !this._JQ && this._JQInit(), this._JQ.unbind(t, i), this
        }
    };
    return "object" != typeof t && (t = this), Object.keys(i).forEach((function (n) {
        t[n] = i[n].bind(t)
    })), i
}, flexbe_cli.events = $.observable({});
"use strict";
flexbe_cli.run = {
    init: function () {
        var i = this;
        this.deviceInfo(), $(window).on("resized", (function () {
            i.deviceInfo()
        }))
    },
    deviceInfo: function () {
        var i = navigator.userAgent.toLowerCase();
        this.is_screen_tablet = window.innerWidth >= 768 && window.innerWidth <= 1024, this.is_screen_tablet_s = window.innerWidth >= 570 && window.innerWidth < 768, this.is_screen_mobile = window.innerWidth < 570, this.is_screen_mobile_s = window.innerWidth < 350, this.is_screen_all_mobile = this.is_screen_tablet_s || this.is_screen_mobile, this.is_screen_small_pc = window.innerWidth > 1024 && window.innerWidth < 1200, this.is_screen_pc = window.innerWidth >= 1200, this.is_touch = "ontouchstart" in window, this.is_pointer = !this.is_touch, this.is_bot = /bot|aolbuild|bingpreview|msnbot|baidu|duckduckgo|mediapartners-google|teoma|slurp/gi.test(i), this.is_mobile = -1 !== i.indexOf("mobile") || this.is_screen_mobile || this.is_screen_tablet_s, this.is_desktop = !this.is_mobile, this.is_webkit = -1 !== i.indexOf("webkit"), this.is_chrome = i.match(/(chromium|chrome)\/(\d+)/), this.is_safari = -1 !== i.indexOf("safari") && i.match(/version\/(\d+)/), this.is_firefox = -1 !== i.indexOf("firefox"), this.is_mobile_ie = -1 !== i.indexOf("iemobile"), this.is_ie = -1 !== i.indexOf("trident") || -1 !== i.indexOf("msie"), this.is_EDGE = -1 !== i.indexOf("edge"), this.is_OSX = /iPad|iPhone|iPod|Macintosh/gi.test(i), this.is_android = -1 !== i.indexOf("android"), this.is_ios = this.is_touch && this.is_mobile && this.is_OSX, this.is_screenshoter = i.indexOf("slimerjs") > -1 || i.indexOf("phantomjs") > -1, this.is_screen_mobile ? this.device_type = "mobile" : this.is_screen_tablet_s || this.is_screen_tablet ? this.device_type = "tablet" : this.device_type = "desktop"
    }
};
"use strict";

function _extends() {
    return (_extends = Object.assign || function (t) {
        for (var e = 1; e < arguments.length; e++) {
            var i = arguments[e];
            for (var l in i) Object.prototype.hasOwnProperty.call(i, l) && (t[l] = i[l])
        }
        return t
    }).apply(this, arguments)
}
flexbe_cli.lib = {
    init: function () {
        this.lg.init()
    },
    lg: {
        init: function () {
            var t = this,
                e = ".lg-container, .b_block, .m_modal, .w_widget";
            flexbe_cli.is_admin || 99 == flexbe_cli.theme_id || (this.isOpen = !1, $(window).one("load.lightbox", (function () {
                t.loaded || t.require()
            })), $(document).on("click.lightbox", "[data-lg]", (function (i) {
                i.preventDefault();
                var l = $(i.currentTarget),
                    n = l.closest(e),
                    o = l.attr("href"),
                    a = "0" !== n.attr("data-loop"),
                    r = !n.attr("data-lg-single"),
                    s = n.find("[data-lg]").filter((function (t, i) {
                        var l = $(i).closest(e),
                            o = l.is(n),
                            a = l.closest(".swiper-slide-duplicate").length;
                        return o && !a
                    })).toArray().map((function (t) {
                        var e, i = $(t),
                            l = i.attr("href"),
                            n = i.attr("data-sub-html");
                        return e = n ? i.find(n).html() : i.attr("alt") || i.find("img").attr("alt") || "", {
                            src: l,
                            subHtml: e
                        }
                    })),
                    c = s.findIndex((function (t) {
                        return t.src === o
                    })) || 0;
                t.openGallery({
                    index: c,
                    dynamicEl: s,
                    enableSlide: r,
                    loop: a
                })
            })), $(window).on("popstate.lightbox", (function () {
                var e = history.state || {};
                e.lg ? t.openGallery(e.lg) : t.closeGallery()
            })), history.state && history.state.lg && this.openGallery(history.state.lg))
        },
        openGallery: function (t) {
            var e = this;
            if (void 0 === t && (t = {}), 0 !== t.dynamicEl.length) {
                this.$lg = $("<div/>");
                var i = this.$lg,
                    l = _extends({
                        index: 0,
                        dynamicEl: [],
                        dynamic: !0,
                        subHtmlSelectorRelative: !0,
                        getCaptionFromTitleOrAlt: !0,
                        slideEndAnimation: !1,
                        swipeThreshold: 30,
                        counter: !0,
                        closable: !0,
                        download: !1,
                        easing: "ease-out",
                        hideBarsDelay: 1e3,
                        zoomIcons: !1,
                        actualSize: !1,
                        enableSlide: !0,
                        loop: !0
                    }, t);
                l.index <= 0 && (l.index = 0), this.require((function () {
                    i.lightGallery(l)
                })), i.on("onBeforeOpen.lg", (function () {
                    e.isOpen = !0, n()
                })), i.on("onBeforeClose.lg", (function () {
                    history.state && history.state.lg && history.back(), e.isOpen = !1
                })), i.on("onBeforeSlide.lg", (function (t, e, i) {
                    l.index = i, n()
                }))
            }

            function n() {
                var t = history.state,
                    e = l;
                t && t.lg ? history.replaceState({
                    lg: e
                }, null, "#image-" + (e.index + 1)) : history.pushState({
                    lg: e
                }, null, "#image-" + (e.index + 1))
            }
        },
        closeGallery: function () {
            var t = this.$lg && this.$lg.data("lightGallery");
            t && t.destroy()
        },
        require: function (t) {
            var e = this;
            $("[data-lg]").length && flexbe_cli.require(["./index_files/lg-spaced-bundle.min.js"], (function () {
                e.loaded || (e.loaded = !0, $(document).off("click.beforeLoadedLg")), "function" == typeof t && t()
            }))
        }
    }
};
"use strict";
flexbe_cli.helpers = {
    gotoLink: function (e) {
        if (e) {
            var l = window.parent || window;
            if (!/#{1,2}.+/.test(e)) return l.location.host === window.location.host ? l.location.href = e : location.href = e, !0;
            flexbe_cli.scroll.scrollLock.unlock(), flexbe_cli.events.emit("mobilemenu_command", {
                command: "close"
            }), 4 != flexbe_cli.theme_id && $(".mobile-menu").removeClass("active").trigger("close");
            var o = (e = e.replace(/^(?:\.\/)#{2}/, "#").trim()).trim().split("#"),
                i = o[o.length - 1];
            if ("" !== o[0] && "./" !== o[0] && o[0] !== location.pathname) return location.href = e, !0;
            var t = flexbe_cli.block.$list.find(".b_" + i + ', ._anchor[name="' + i + '"]').eq(0),
                n = flexbe_cli.modal.$list.find(".m_" + i + ', ._anchor[name="' + i + '"]').eq(0);
            if (t.length) {
                var c = t.closest(".b_block");
                flexbe_cli.events.emit("modal_command", {
                    command: "close"
                }), setTimeout((function () {
                    flexbe_cli.scroll.scrollTo(c)
                }), 30), history.replaceState(null, null, "#" + i)
            } else if (n.length) {
                if (flexbe_cli.is_admin) return !0;
                var a = n.closest(".m_modal").data("id");
                flexbe_cli.events.emit("modal_command", {
                    command: "open",
                    id: a,
                    data: {}
                })
            } else history.replaceState(null, null, "#" + i)
        }
    }
};
"use strict";
! function () {
    var e = [];
    flexbe_cli.require = function (i, t, n, r) {
        if (void 0 === i && (i = ""), void 0 === t && (t = function () {}), void 0 === n && (n = 15e3), void 0 === r && (r = !1), i && 0 !== i.length || t(!1), !r) {
            "string" == typeof i && (i = [i]);
            var o = 0,
                c = function (n) {
                    var r = i.every((function (i) {
                        return "boolean" == typeof e[i]
                    }));
                    o += 1, r && o === i.length && t(n)
                };
            return Array.isArray(i) && i.forEach((function (e) {
                flexbe_cli.require(e, c, n, !0)
            })), !1
        }
        if (!0 === e[i]) t(!0);
        else if (Array.isArray(e[i])) e[i].push(t);
        else {
            var s, u = !1,
                d = function (t) {
                    if (void 0 === t && (t = !0), !u) {
                        u = !0, clearTimeout(s);
                        var n = e[i];
                        e[i] = t, n.forEach((function (e) {
                            "function" == typeof e && e(t)
                        }))
                    }
                };
            if (e[i] = [t], /\.css(\?.*)?$/.test(i)) {
                var a = document.createElement("link");
                a.onerror = d.bind(this, !1), a.onload = d.bind(this, !0), s = setTimeout(d.bind(this, "timeout"), n), a.rel = "stylesheet", a.href = i, document.body.appendChild(a)
            } else {
                var f = document.createElement("script");
                f.onload = d.bind(this, !0), f.onerror = d.bind(this, !1), s = setTimeout(d.bind(this, "timeout"), n), f.async = !0, f.src = i, document.body.appendChild(f)
            }
        }
    }
}();
"use strict";

function ownKeys(e, t) {
    var i = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        t && (o = o.filter((function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        }))), i.push.apply(i, o)
    }
    return i
}

function _objectSpread(e) {
    for (var t = 1; t < arguments.length; t++) {
        var i = null != arguments[t] ? arguments[t] : {};
        t % 2 ? ownKeys(Object(i), !0).forEach((function (t) {
            _defineProperty(e, t, i[t])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : ownKeys(Object(i)).forEach((function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t))
        }))
    }
    return e
}

function _defineProperty(e, t, i) {
    return t in e ? Object.defineProperty(e, t, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = i, e
}! function () {
    var e;
    flexbe_cli.stat = {
        u_id: 0,
        time: 0,
        goals: {
            quiz: "quiz_start",
            modal: "modal_open",
            modal_form: "form_open",
            modal_product: "product_show",
            modal_done: "order_done",
            order_done: "order_done",
            pay_done: "pay_done",
            cart: "add_to_cart",
            link: "link_open",
            file: "file_load",
            close: "modal_close"
        },
        init: function () {
            this.reach_goal = this.reachGoal;
            var e, t, i = window.getCookie("user_id"),
                o = window.getCookie("f_uid");
            if (flexbe_cli.is_admin || flexbe_cli.run.is_bot || flexbe_cli.run.is_screenshoter || !flexbe_cli.p_id || i) return !1;
            o ? (this.u_id = o, $.ajax({
                url: "/mod/stat/visit/",
                type: "POST",
                dataType: "json",
                data: {
                    s_id: flexbe_cli.s_id,
                    group_id: flexbe_cli.group_id,
                    p_id: flexbe_cli.p_id,
                    u_id: flexbe_cli.stat.u_id
                }
            }).done((function (e) {
                e.v_id || console.warn("Cookie visit not created", e)
            }))) : $.ajax({
                url: "/mod/stat/",
                type: "POST",
                dataType: "json",
                data: {
                    s_id: flexbe_cli.s_id,
                    group_id: flexbe_cli.group_id,
                    p_id: flexbe_cli.p_id,
                    utm_data: (e = function (e) {
                        if ("" === e) return {};
                        for (var t = {}, i = 0; i < e.length; ++i) {
                            var o = e[i].split("=");
                            2 === o.length && (t[o[0]] = decodeURIComponent(o[1].replace(/\+/g, " ")))
                        }
                        return t
                    }(window.location.search.substr(1).split("&")), t = {}, $.each(e, (function (e, i) {
                        "utm_" === e.substring(0, 4) && (t[e] = i)
                    })), document.referrer && (t.url = document.referrer), t),
                    device: {
                        type: flexbe_cli.run.device_type,
                        width: window.innerWidth,
                        browser: navigator.userAgent
                    }
                }
            }).done((function (e) {
                "object" == typeof e && null !== e && e.u_id ? (window.setCookie("f_uid", e.u_id, {
                    Path: "/"
                }), flexbe_cli.stat.u_id = e.u_id, flexbe_cli.events.emit("user_created")) : console.warn("Cookie visit not setted", e)
            })), this.AB.init(), this.ecommerce.init(), this.QUIZ.init()
        },
        getGoal: function (e, t) {
            return "modal" === e && (/form/.test(t) && (e = "modal_form"), /done/.test(t) ? e = "modal_done" : /product/.test(t) ? e = "modal_product" : /quiz/.test(t) && (e = "quiz")), this.goals[e] || !1
        },
        reachGoal: function (e, t) {
            if (void 0 === t && (t = {}), !flexbe_cli.is_admin) {
                t = _objectSpread({
                    goalAction: "send",
                    goalValue: ""
                }, t), flexbe_cli.events.emit("reach_goal", e, t);
                try {
                    "object" == typeof Ya && "object" == typeof Ya._metrika.counter && Ya._metrika.counter.reachGoal(e, t), "function" == typeof ga && ga("send", {
                        hitType: "event",
                        eventCategory: e,
                        eventAction: t.goalAction,
                        eventLabel: t.goalValue
                    })
                } catch (e) {
                    console.warn("stat.js", e)
                }
            }
        },
        reachGoals: function (t, i) {
            void 0 === t && (t = {}), void 0 === i && (i = {});
            var o = ("" + (t.goal || "")).trim(),
                a = ("" + (t.mainGoal || "")).trim(),
                n = ("" + (t.htmlGoal || "")).trim();
            if (a && this.reachGoal(a, i), o) try {
                this.reachGoal(o, i)
            } catch (e) {
                console.warn("reachGoals [goal]: ", e.message)
            }
            if (n) try {
                var r = $(n)[0].outerHTML;
                if (r) {
                    r = (r = (r = r.replace(/\{\{\s*goalAction\s*\}\}/g, i.goalAction || "")).replace(/\{\{\s*goalValue\s*\}\}/g, i.goalValue || "")).replace(/(['"]?)\{\{\s*goalParams\s*\}\}\1/g, JSON.stringify(i.goalParams || {}));
                    var c = document.write;
                    document.write = function (e) {
                        $("body").eq(0).append(e)
                    };
                    var s = $('<div style="display:none">' + r + "</div>");
                    $("body").eq(0).append(s), setTimeout((function () {
                        s.remove()
                    }), 2e3), clearTimeout(e), e = setTimeout((function () {
                        document.write = c
                    }), 1e4)
                }
            } catch (e) {
                console.warn("reachGoals [htmlGoal]: ", e.message)
            }
        },
        ecommerce: {
            inited: !1,
            init: function () {
                this.inited = !0, window.dataLayer || (window.dataLayer = [])
            },
            add: function (e, t, i, o) {
                this.inited && window.dataLayer.push({
                    ecommerce: {
                        currencyCode: flexbe_cli.locale.currency.code,
                        add: {
                            products: [{
                                id: e,
                                name: t,
                                price: o,
                                quantity: i
                            }]
                        }
                    }
                })
            },
            remove: function (e, t) {
                this.inited && window.dataLayer.push({
                    ecommerce: {
                        currencyCode: flexbe_cli.locale.currency.code,
                        remove: {
                            products: [{
                                id: e,
                                name: t
                            }]
                        }
                    }
                })
            },
            purchase: function (e, t) {
                if (void 0 === t && (t = !1), this.inited && (e || 0 != e.length)) {
                    t || (t = Math.ceil(1e4 * Math.random()));
                    try {
                        window.dataLayer.push({
                            ecommerce: {
                                currencyCode: flexbe_cli.locale.currency.code,
                                purchase: {
                                    actionField: {
                                        id: t
                                    },
                                    products: e.map((function (e) {
                                        return {
                                            id: e.id,
                                            name: e.title,
                                            price: e.price,
                                            quantity: e.count
                                        }
                                    }))
                                }
                            }
                        })
                    } catch (e) {}
                }
            }
        },
        AB: {
            proccess: {},
            init: function () {
                var e = this;
                flexbe_cli.events.off("entity_event.abstat").on("entity_event.abstat", (function (t, i) {
                    var o = i.type,
                        a = i.core,
                        n = i.params;
                    if (a && "onView" === o && n.state && n.first) {
                        var r = a.abtestId,
                            c = a.abtestVariant;
                        c && e.fixView(r, c)
                    }
                }))
            },
            setCookie: function (e) {
                window.setCookie("f_ab", JSON.stringify(e), {
                    expires: 604800,
                    path: "/",
                    domain: document.location.hostname
                })
            },
            getCookie: function () {
                var e = window.getCookie("f_ab");
                if (e) try {
                    e = JSON.parse(decodeURIComponent(e))
                } catch (e) {
                    console.warn("Can`t parse abtest cookie", e)
                }
                return e || (e = {
                    view: {},
                    lead: []
                }), e
            },
            fixView: function (e, t) {
                var i = this;
                if (null == e || null == t || "a" !== t && "b" !== t) return !1;
                null != this.getCookie().view[e] || this.proccess[e] || (this.proccess[e] = !0, $.ajax({
                    url: "/mod/stat/abtest",
                    type: "POST",
                    dataType: "json",
                    data: {
                        testId: e,
                        variant: t,
                        s_id: flexbe_cli.s_id,
                        p_id: flexbe_cli.p_id
                    }
                }).done((function (o) {
                    if (i.proccess[e] = !1, 1 == o.status) {
                        var a = i.getCookie();
                        a.view[e] = t, i.setCookie(a)
                    }
                })))
            }
        },
        QUIZ: {
            inited: !1,
            init: function () {
                var e = this;
                this.inited || (this.inited = !0, flexbe_cli.events.on("quiz_event.stat", (function (t, i) {
                    void 0 === i && (i = {});
                    var o = i.payload || {};
                    if (["step", "submit"].includes(i.event) && ("step" !== i.event || o.toNext)) {
                        var a = i.quiz,
                            n = i.answerGoals,
                            r = i.resultGoals,
                            c = a.core.id,
                            s = o.fromAnswers || [],
                            l = o.toId,
                            d = o.sessionId,
                            u = o.fromId,
                            f = s.reduce((function (e, t) {
                                return e.concat((t.variants || []).map((function (e) {
                                    return e.id
                                })))
                            }), []);
                        if (e.fixAnswer({
                                sessionId: d,
                                sectionId: c,
                                answerStep: u,
                                answerVariants: f,
                                viewStep: l
                            }), n) {
                            s.forEach((function (e) {
                                if (e.variants && e.variants.length) e.variants.forEach((function (e) {
                                    var t = e.value;
                                    flexbe_cli.stat.reachGoals(n, {
                                        goalAction: "answer",
                                        goalValue: t
                                    })
                                }));
                                else {
                                    var t = e.value || "";
                                    ["email", "phone", "name"].includes(e.type) && (t = ""), flexbe_cli.stat.reachGoals(n, {
                                        goalAction: "answer",
                                        goalValue: t
                                    })
                                }
                            }))
                        }
                        r && flexbe_cli.stat.reachGoals(r)
                    }
                })))
            },
            fixAnswer: function (e) {
                var t, i = e.sectionId,
                    o = e.sessionId,
                    a = e.answerStep,
                    n = e.viewStep,
                    r = e.answerVariants;

                function c() {
                    $.ajax({
                        url: t,
                        type: "POST",
                        dataType: "json",
                        data: {
                            s_id: flexbe_cli.s_id,
                            group_id: flexbe_cli.group_id,
                            f_uid: flexbe_cli.stat.u_id,
                            page_id: flexbe_cli.p_id,
                            session_id: o,
                            section_id: i,
                            answer_step: a,
                            answer_variants: r,
                            view_step: n
                        }
                    })
                }
                n && a ? t = "/mod/quiz/stat/save/composite/" : a ? t = "/mod/quiz/stat/save/answer/" : n && (t = "/mod/quiz/stat/save/view/"), t && (flexbe_cli.stat.u_id ? c() : flexbe_cli.events.one("user_created", (function () {
                    c()
                })))
            }
        }
    }
}();
"use strict";

function _extends() {
    return (_extends = Object.assign || function (e) {
        for (var r = 1; r < arguments.length; r++) {
            var t = arguments[r];
            for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a])
        }
        return e
    }).apply(this, arguments)
}! function () {
    var e = function (e, r, t, a) {
        var n, c;
        return void 0 === r && (r = 2), void 0 === t && (t = ","), void 0 === a && (a = "."), isNaN(r = Math.abs(r)) && (r = 2), (c = (n = parseInt(e = (+e || 0).toFixed(r), 10) + "").length) > 3 ? c %= 3 : c = 0, (c ? n.substr(0, c) + a : "") + n.substr(c).replace(/(\d{3})(?=\d)/g, "$1" + a) + (r ? t + Math.abs(e - n).toFixed(r).replace(/-/, 0).slice(2) : "")
    };
    flexbe_cli.locale = _extends({
        language: "en",
        country: "US",
        currency: {
            code: "USD",
            symbol: "$"
        },
        translation: {},
        currency_format: {},
        init: function (e) {
            var r = this;
            void 0 === e && (e = "body"), $("[data-lang]", e).each((function (e, t) {
                var a = $(t).attr("data-lang"),
                    n = $(t).attr("data-lang-content"),
                    c = String(r.tr(a));
                $(t).html(c.replace(/%s/, n))
            }))
        },
        tr: function (e, r) {
            if (e) {
                var t = /^currency/.test(e) ? this.currency : this.translation,
                    a = String(e).replace(/^currency\./, "").split(".").reduce((function (e, r) {
                        return e && e[r]
                    }), t) || "";
                return this.interpolate(a, r)
            }
        },
        interpolate: function (e, r) {
            for (var t in void 0 === r && (r = {}), r) "_" !== t && r.hasOwnProperty(t) && (e = e.replace(new RegExp("%" + t + "%", "g"), r[t]));
            return e
        },
        parseMoney: function (e, r) {
            void 0 === r && (r = 2);
            var t = (e = String(e).replace(/,/g, ".").replace(/ /g, "").replace(/(?!^)\-/g, "").replace(/^\./g, "0.")).replace(/[^\d\.]/g, ""),
                a = ((t.match(new RegExp("\\.\\d{1," + r + "}$")) || [])[0] || "").replace(/\D/g, ""),
                n = t.replace(new RegExp("\\." + a + "$"), "");
            n = parseInt(n.replace(/[^\d-]/g, ""), 10) || 0, parseInt(a, 10) || (a = "");
            var c = parseFloat(a ? n + "." + a : n);
            return /^-/.test(e) ? -c : c
        },
        formatMoney: function (r, t, a) {
            void 0 === t && (t = this.currency_format), void 0 === a && (a = this.currency), r = parseFloat(r);
            var n = t.str,
                c = t.d,
                i = Math.abs(r) >= 1e4 ? t.t : "",
                o = t.d_force || parseInt(r, 10) !== r ? a.decimals : 0,
                s = e(Math.abs(r), o, c, i),
                l = s;
            return n && (l = n.replace(":value", s).replace(":symbol", a.symbol)), r < 0 && (l = "-" + l), l.trim()
        },
        formatNumber: function (r, t, a) {
            void 0 === a && (a = this.currency_format);
            var n = a.d,
                c = Math.abs(r) >= 1e4 ? a.t : "";
            return t = null != t ? t : a.d_force || parseInt(r, 10) !== r ? this.currency.decimals : 0, e(Math.abs(r), t, n, c)
        }
    }, flexbe_cli.locale)
}();
"use strict";
flexbe_cli.resize = {
    width: window.innerWidth,
    height: window.innerHeight,
    oldWidth: window.innerWidth,
    oldHeight: window.innerHeight,
    init: function () {
        this.simulateWindowResized(), this.simulateDocumentResize()
    },
    simulateWindowResized: function () {
        var i, e = this,
            t = this.oldWidth,
            n = this.oldHeight;
        $(window).on("resize orientationchange", (function () {
            e.width = window.innerWidth, e.height = window.innerHeight, clearTimeout(i), i = setTimeout((function () {
                e.oldWidth = t, e.oldHeight = n, t = e.width, n = e.height, $(window).trigger("resized")
            }), 80)
        }))
    },
    simulateDocumentResize: function () {
        var i = this;
        this.documentHeight = document.body.scrollHeight;
        var e = flexbe_cli.is_admin ? 500 : 150;
        setInterval((function () {
            ! function () {
                if (!flexbe_cli.scroll.inScroll) {
                    var e = document.body.scrollHeight;
                    Math.abs(e - i.documentHeight) > 3 && (i.documentHeight = e, $(window).trigger("documentresize"))
                }
            }()
        }), e)
    }
};
"use strict";
flexbe_cli.scroll = {
    inScroll: !1,
    skip: !1,
    latest: window.pageYOffset,
    init: function () {
        var e = this;
        this.latest = window.pageYOffset, document.addEventListener("scroll", (function () {
            e.latest = window.pageYOffset, e.inScroll = !0
        }), {
            passive: !0
        }), document.addEventListener("scrollend", (function () {
            e.inScroll = !1
        }), {
            passive: !0
        }), this.scrollLock.init(), this.scrollImprovement.init()
    },
    scrollImprovement: {
        scrollTimer: 0,
        pointerState: !1,
        init: function () {
            this.createStopScrollEvent(), this.pointerEvents()
        },
        createStopScrollEvent: function () {
            var e = this,
                l = flexbe_cli.scroll.latest;
            document.addEventListener("scroll", (function () {
                var t = l > flexbe_cli.scroll.latest ? "up" : "down",
                    o = Math.max(flexbe_cli.scroll.latest - l, l - flexbe_cli.scroll.latest);
                clearTimeout(e.scrollTimer), e.scrollTimer = setTimeout((function () {
                    l = flexbe_cli.scroll.latest, document.dispatchEvent(new CustomEvent("scrollend", {
                        detail: {
                            direction: t,
                            distance: o
                        }
                    }))
                }), 200)
            }), {
                passive: !0
            })
        },
        pointerEvents: function () {
            var e = this;
            flexbe_cli.is_admin || (document.addEventListener("scroll", (function () {
                e.pointerState || (e.pointerState = !0)
            }), {
                passive: !0
            }), document.addEventListener("scrollend", (function () {
                e.pointerState && (e.pointerState = !1)
            })))
        }
    },
    scrollLock: {
        loaded: !1,
        locked: !1,
        init: function () {
            var e = this;
            this.loaded || flexbe_cli.require(["./index_files/scroll-lock.min.js"], (function () {
                e.loaded = !0, scrollLock.addScrollableSelector([".scroller", ".scrollable"]), e.locked && scrollLock.disablePageScroll()
            }))
        },
        lock: function () {
            this.locked = !0, $("body").addClass("overflow"), "undefined" != typeof scrollLock && scrollLock.disablePageScroll()
        },
        unlock: function () {
            this.locked = !1, $("body").removeClass("overflow"), "undefined" != typeof scrollLock && (scrollLock.clearQueueScrollLocks(), scrollLock.enablePageScroll())
        }
    },
    scrollTo: function (e, l) {
        void 0 === l && (l = {});
        var t = $(e);
        if (!(e = t[0])) return !1;
        null == l.centered && (l.centered = !0), null == l.force && (l.force = !0);
        var o = 0,
            n = 0,
            c = window.scrollParent(e) || document.scrollingElement,
            i = c === document.body || c === document.documentElement,
            r = i ? window.innerHeight : c.offsetHeight,
            s = l.padding || 0,
            a = t.offset().top,
            d = e.offsetHeight,
            f = i ? $("html, body") : $(c),
            u = flexbe_cli.run.is_mobile ? f.find(".menu-fixed > .nav-header") : f.find('.floating-header > .header-content, .floating[data-floating="true"]');
        u.length && (n = u[0].offsetHeight - 2, flexbe_cli.run.is_screen_pc && 4 == flexbe_cli.theme_id && (n += 20));
        var m = Math.max(0, r - n - d);
        if (d >= r && (l.centered = !1), o = l.centered ? a - Math.max(0, m / 2) - n : a - s - n, l.offset && (o += l.offset), !l.force) {
            var v = c.offsetTop,
                p = t[0].getBoundingClientRect();
            if (p.top >= v && p.bottom <= v + r) return !1
        }
        f.animate({
            scrollTop: o
        }, l.complete)
    }
};
"use strict";
! function () {
    var e, t, a, i = !1,
        r = !1;
    flexbe_cli.header = {
        $floating: !1,
        offset: 0,
        init: function () {
            var e = this;
            flexbe_cli.is_admin || (this.floatingHeader(), $(window).off("resized.floatingHeader").on("resized.floatingHeader", (function () {
                e.floatingHeader(!0)
            })))
        },
        floatingHeader: function (n) {
            var s = this,
                f = flexbe_cli.responsive && flexbe_cli.run.is_screen_all_mobile;
            if (flexbe_cli.is_admin || f) return !1;
            var o = $(".header-wrapper.floating-header");
            if (!o.length) return !1;
            n || (o.removeClass("fixed-header"), o.find("[data-contrast]").removeAttr("data-contrast"), o.parent().css("min-height", ""));
            var d = o.eq(0),
                l = d.parent(),
                c = d.closest(".b_block"),
                h = d.find(".content-zone"),
                m = d.attr("data-fixed-contrast") || "inherit";
            cancelAnimationFrame(a),
                function n() {
                    a = requestAnimationFrame(n);
                    var o = c[0]._core;
                    if (!flexbe_cli.scroll.skip && o) {
                        var u = o.tween.start + Math.min(o.tween.height, 150) + 150,
                            g = flexbe_cli.scroll.latest > u,
                            _ = i && flexbe_cli.scroll.latest <= Math.min(u, o.tween.end);
                        if (r !== g) {
                            if (r = g, clearTimeout(e), clearTimeout(t), _) return i = !1, s.offset = 0, h.removeAttr("data-contrast"), d.removeClass("fixed-header fade-in fade-out"), void l.css("min-height", "");
                            if (g) t = setTimeout((function () {
                                i = !0, s.offset = d[0].offsetHeight, l.css("min-height", s.offset + "px"), d.addClass("fade-in"), d.addClass("fixed-header"), h.attr("data-contrast", m), o && o._tween({
                                    fixed: !0
                                }), d.trigger("transform-header"), e = setTimeout((function () {
                                    d.removeClass("fade-in fade-out"), i = !1
                                }), 300)
                            }), f ? 0 : 300);
                            else i = !0, s.offset = 0, d.addClass("fade-out"), o && o._tween({
                                fixed: !1
                            }), e = setTimeout((function () {
                                d.removeClass("fixed-header fade-in fade-out"), d.trigger("transform-header"), h.removeAttr("data-contrast"), l.css("min-height", ""), i = !1
                            }), 200)
                        }
                    }
                }()
        }
    }
}();
"use strict";
! function () {
    var e = {};
    flexbe_cli.block = {
        hasOverlay: [],
        $list: !1,
        get $blocks() {
            return this._$blocks && !flexbe_cli.is_admin || (this._$blocks = this.$list && this.$list.find(".b_block")), this._$blocks
        },
        init: function () {
            var e = this;
            this.$list = $(" header, .container-list, footer"), this.$blocks.toArray().forEach((function (i) {
                var t = e.bind(i);
                t && !t.inited && t.init({})
            })), this.dispathEvents()
        },
        dispathEvents: function () {
            var e = this;
            $(window).on("documentresize.flexbe_block", (function () {
                e.checkSizes()
            })), $(window).on("resized.flexbe_block orientationchange.flexbe_block", (function () {
                e.checkSizes();
                var i = flexbe_cli.run.is_mobile ? 140 : 10;
                Math.abs(flexbe_cli.resize.height - flexbe_cli.resize.oldHeight) > i && e.fixCoverHeight()
            })), $(window).on("load.flexbe_block", (function () {
                if (/^#/.test(location.hash)) {
                    var i = String(decodeURIComponent(location.hash)).replace(/^#{1,2}/, ""),
                        t = e.$list.find(".b_" + i + ', .b_block ._anchor[name="' + i + '"]').eq(0);
                    t && flexbe_cli.scroll.scrollTo(t.closest(".b_block"))
                }
            })), flexbe_cli.is_admin && (flexbe_cli.events.on("block_render.flexbe_block block_change.flexbe_block", (function (i, t) {
                if (t && t.id && (/render/.test(i.type) || t.name && !t.templateRendered && !t.styleRendered)) {
                    var n = $('[data-id="' + t.id + '"]', e.$list)[0],
                        l = e.bind(n);
                    l && l.init(t)
                }
            })), flexbe_cli.events.on("block_resize", (function (i, t) {
                if (t && t.id) {
                    var n = document.querySelector('[data-id="' + t.id + '"]'),
                        l = e.bind(n);
                    l && l._onResize(t)
                }
            })), flexbe_cli.events.on("client_msg.flexbe_block", (function (i, t) {
                if (t && t.id && "block" === t.is) {
                    var n = $('[data-id="' + t.id + '"]', e.$list)[0],
                        l = e.bind(n);
                    l && l._onMsg(t.msg, t.data)
                }
            })), flexbe_cli.events.off("layout_change.flexbe_block").on("layout_change.flexbe_block", $.debounce((function (i, t) {
                t && "block" !== !t.is && (e.$blocks.each((function (e, i) {
                    i._core && i._core.updateTweens()
                })), e.fixCoverHeight())
            }), 100)))
        },
        pushOverlay: function (e, i) {
            return i && this.hasOverlay.includes(e) && this.hasOverlay.splice(this.hasOverlay.indexOf(e)), this.hasOverlay.push(e), !0
        },
        removeOverlay: function (e) {
            return this.hasOverlay.includes(e) && this.hasOverlay.splice(this.hasOverlay.indexOf(e)), !0
        },
        checkSizes: function () {
            var e = this;
            this.$blocks.toArray().forEach((function (i) {
                var t = e.bind(i);
                t && t._onResize({})
            }))
        },
        fixCoverHeight: function (e) {
            void 0 === e && (e = this.$list.find(".b_block")), e.length && e.each((function (e, i) {
                var t = $(i),
                    n = t.find(".cover");
                if (n.length) {
                    var l = flexbe_cli.resize.height,
                        o = 0,
                        c = l;
                    if ([2, 3].includes(flexbe_cli.theme_id)) {
                        var s, r = t.prevAll(".b_block");
                        s = (s = flexbe_cli.is_admin && t.is('[data-abtest-variant="b"]') ? r.eq(1) : r.eq(0)).filter('[data-b-type*="header"]').not('[data-b-type*="overflow"]'), (o = Math.max(0, s.outerHeight() || 0)) < 250 && o < l / 2.5 && (c -= o)
                    }
                    n.css("min-height", c + "px"), flexbe_cli.run.is_ie && c >= n.outerHeight() && n.css("height", "1px")
                }
            }))
        },
        bind: function (i) {
            if (!i) return !1;
            var t = i.getAttribute("data-b-id"),
                n = i._core;
            if (t && !n) {
                var l = e[t] || {};
                n = new BlockCore(i, l), i._core = n
            }
            return n
        },
        register: function (i, t) {
            void 0 === t && (t = {}), i || console.warn("Element register error: Element must have templateId"), e[i] = t
        }
    }
}();
"use strict";
! function () {
    var e = {};
    flexbe_cli.modal = {
        opened: {},
        get $modals() {
            return this._$modals && !flexbe_cli.is_admin || (this._$modals = this.$list && this.$list.find(".m_modal")), this._$modals
        },
        init: function () {
            var e = this;
            this.list = document.querySelector(".modal-list"), this.$list = $(this.list), this.$modals.toArray().forEach((function (t) {
                var i = e.bind(t, {}, "init");
                i && !i.inited && i.init({})
            }));
            var t = getJsonFromUrl();
            if (t.service && t.m_id) return this.$list.addClass("noanimate"), this.open(t.m_id), !1;
            this.popstate(), this.dispathEvents()
        },
        dispathEvents: function () {
            var e = this;
            flexbe_cli.events.on("modal_render.flexbe_modal modal_change.flexbe_modal", (function (t, i) {
                if (i && i.id && (/render/.test(t.type) || i.name && !i.templateRendered && !i.styleRendered)) {
                    var o = (e.find(i.id) || {}).modal,
                        a = e.bind(o);
                    a && a.init(i)
                }
            })), flexbe_cli.events.on("client_msg.flexbe_modal", (function (t, i) {
                if (i && i.id && "modal" === i.is) {
                    var o = (e.find(i.id) || {}).modal,
                        a = e.bind(o);
                    a && a._onMsg(i.msg, i.data)
                }
            })), flexbe_cli.events.on("modal_command.flexbe_modal", (function (t, i) {
                if (i) switch (i.command) {
                    case "open":
                        e.open(i.id, i.data);
                        break;
                    case "close":
                        e.close(i.id)
                }
            })), $("body").on("click.modal-close", ".m_modal .close", (function (t) {
                t.preventDefault(), t.stopPropagation();
                var i = $(t.currentTarget).closest(".m_modal").data("id");
                e.close(i)
            })), flexbe_cli.is_admin || $("body").off("click.modal-close-overlay").on("click.modal-close-overlay", ".modal-data", (function (t) {
                if (!(flexbe_cli.responsive && flexbe_cli.run.is_screen_all_mobile || !Object.keys(e.opened).length) && ($(t.target).is(".modal-data") || $(t.target).is('[data-overlay="true"]'))) {
                    var i = $(".m_modal.show").eq(0).attr("data-id");
                    e.close(i)
                }
            })), flexbe_cli.is_admin || $(window).off("keyup.modal-close-esc").on("keyup.modal-close-esc", (function (t) {
                if (27 !== t.keyCode) return !0;
                var i = $(".m_modal.show").eq(0).attr("data-id");
                e.close(i)
            }))
        },
        popstate: function () {
            var e = this;
            if (flexbe_cli.is_admin || flexbe_cli.lockPopstate) return !1;
            setTimeout((function () {
                if (/^#{1,2}/.test(location.hash) && location.hash.replace(/^#{1,2}/, "")) {
                    var t = location.hash.replace(/^#{1,2}/, ""),
                        i = e.$list.find('._anchor[name="' + t + '"], .m_modal[data-id="' + t + '"]').closest(".m_modal").attr("data-id");
                    e.opened[i] || e.open(i)
                } else e.close()
            }), 50)
        },
        find: function (e) {
            var t = this.$list.find('[data-id="' + e + '"]').toArray(),
                i = t[0] || !1;
            return !!i && {
                modals: t,
                modal: i
            }
        },
        open: function (e, t, i) {
            if (void 0 === t && (t = {}), void 0 === i && (i = {}), !e) return !1;
            var o = this.find(e) || {},
                a = o.modals,
                n = o.modal,
                l = $(a);
            if (!n) return !1;
            if (l.length > 1) {
                var d = i.multivar;
                if (!d) {
                    var s = String(e).split("_")[0];
                    d = $('[data-id="' + s + '"]').attr("data-multivar")
                }
                var r = [];
                d && "default" !== d && (r = l.filter('[data-multivar="' + d + '"]').eq(0)), n = (l = r.length ? r.eq(0) : l.eq(0))[0]
            }
            var c = this.bind(n);
            return n && !c ? (console.warn("Try to open modal without core object,", "id: " + e + ",", "modal: ", n), !1) : (this.close(null, e), c.open(t, i), this.opened[e] = c, !0)
        },
        close: function (e, t) {
            var i = this;
            if (!e) return Object.keys(this.opened).map((function (e) {
                if (i.opened[e] && e != t) return i.close(e, t)
            }));
            if (!this.opened[e]) return !1;
            delete this.opened[e];
            var o = (this.find(e) || {}).modal,
                a = this.bind(o);
            return o ? a ? (a.close({
                from: t
            }), !0) : (console.warn("Try to close modal without core object"), !1) : void 0
        },
        bind: function (t) {
            if (!t) return !1;
            var i = t.getAttribute("data-m-id"),
                o = t._core;
            if (i && !o) {
                var a = e[i] || {};
                o = new ModalCore(t, a), t._core = o
            }
            return o
        },
        register: function (t, i) {
            void 0 === i && (i = {}), t || console.warn("Element register error: Element must have templateId"), e[t] = i
        }
    }
}();
"use strict";
! function () {
    var e = {};
    flexbe_cli.widget = {
        init: function () {
            var e = this;
            this.$list = $(".widget-list"), this.list = this.$list.get(0), this.$list.find(".w_widget").toArray().forEach((function (t) {
                var i = e.bind(t, {}, "init");
                i && !i.inited && i.init({})
            })), this.dispathEvents()
        },
        dispathEvents: function () {
            var e = this;
            flexbe_cli.events.on("widget_render.flexbe_widget widget_change.flexbe_widget", (function (t, i) {
                if (i && i.id && (/render/.test(t.type) || i.name && !i.templateRendered && !i.styleRendered)) {
                    var n = $('[data-id="' + i.id + '"]', e.$list)[0],
                        d = e.bind(n);
                    d && d.init(i)
                }
            })), flexbe_cli.events.on("client_msg.flexbe_widget", (function (t, i) {
                if (i && i.id && "widget" === i.is) {
                    var n = e.list.querySelector('[data-id="' + i.id + '"]'),
                        d = e.bind(n);
                    d && d._onMsg(i.msg, i.data)
                }
            }))
        },
        bind: function (t) {
            if (!t) return !1;
            var i = t.getAttribute("data-w-id"),
                n = t._core;
            if (!n) {
                var d = e[i] || {};
                n = new WidgetCore(t, d), t._core = n
            }
            return n
        },
        register: function (t, i) {
            void 0 === i && (i = {}), t || console.warn("Element register error: Element must have templateId"), e[t] = i
        }
    }
}();
"use strict";
! function () {
    var e = {};
    flexbe_cli.element = {
        get $zones() {
            return $('[data-is="zone"]')
        },
        get $elements() {
            return $(".element-item")
        },
        init: function (e) {
            var t = this;
            if (4 !== flexbe_cli.theme_id) return !1;
            var n, i, r = function (e) {
                var n = t.bind(e);
                n && !n.inited && n.init({})
            };
            if (e) {
                var d = $(e);
                n = d.find('[data-is="zone"]').addBack('[data-is="zone"]'), i = d.find(".element-item").addBack(".element-item")
            } else n = this.$zones, i = this.$elements;
            n.toArray().forEach(r), i.toArray().forEach(r), this.dispathEvents()
        },
        dispathEvents: function () {
            var e = this;
            flexbe_cli.is_admin && (flexbe_cli.events.on("element_render.flexbe_element element_change.flexbe_element", (function (t, n) {
                if (n && n.id && (/render/.test(t.type) || n.name && !n.templateRendered && !n.styleRendered)) {
                    var i = document.querySelector('[data-id="' + n.id + '"]'),
                        r = e.bind(i);
                    r && r.init(n)
                }
            })), flexbe_cli.events.on("element_resize", (function (t, n) {
                if (n && n.id) {
                    var i = document.querySelector('[data-id="' + n.id + '"]'),
                        r = e.bind(i);
                    r && (n.force = !0, r._onResize(n))
                }
            })), flexbe_cli.events.on("client_msg.flexbe_element", (function (t, n) {
                if (n && n.id && "element" === n.is) {
                    var i = document.querySelector('[data-id="' + n.id + '"]'),
                        r = e.bind(i);
                    r && r._onMsg(n.msg, n.data)
                }
            })))
        },
        bind: function (t) {
            if (!t) return !1;
            var n = t.getAttribute("data-e-id"),
                i = t._core;
            if (!i) {
                var r = e[n] || {};
                i = new ElementCore(t, r), t._core = i
            }
            return i
        },
        register: function (t, n) {
            void 0 === n && (n = {}), t || console.warn("Element register error: Element must have templateId"), e[t] = n
        }
    }
}();
"use strict";

function _extends() {
    return (_extends = Object.assign || function (e) {
        for (var o = 1; o < arguments.length; o++) {
            var t = arguments[o];
            for (var c in t) Object.prototype.hasOwnProperty.call(t, c) && (e[c] = t[c])
        }
        return e
    }).apply(this, arguments)
}! function () {
    var e = function () {
        function e() {}
        return e.prototype.createNotify = function () {
            var e = this,
                o = $("body"),
                t = document.documentElement.clientHeight,
                c = 0;
            if (this.applyCookie = !1, +flexbe_cli.cookies.use_custom_text && flexbe_cli.cookies.custom_text) this.content = flexbe_cli.cookies.custom_text.replace(/(?:\r\n|\r|\n)/g, "<br />");
            else {
                var i = "center_compact" === flexbe_cli.cookies.style ? "cookies.compact_text" : "cookies.long_text";
                this.content = flexbe_cli.locale.tr(i)
            }
            var n = flexbe_cli.cookies.button_text && flexbe_cli.cookies.use_custom_text ? flexbe_cli.cookies.button_text.replace(/(?:\r\n|\r|\n)/g, "<br />") : flexbe_cli.locale.tr("cookies.button"),
                l = flexbe_cli.cookies.link_text ? flexbe_cli.cookies.link_text.replace(/(?:\r\n|\r|\n)/g, "<br />") : flexbe_cli.locale.tr("cookies.button_link"),
                s = flexbe_cli.cookies.uri_link ? flexbe_cli.cookies.uri_link.replace(/(?:\r\n|\r|\n)/g, "<br />") : "/legal/cookie-policy/",
                a = +flexbe_cli.cookies.use_policy ? "show" : "",
                r = '<div class="cookies-wrap style--' + flexbe_cli.cookies.style + '">\n                            <div class="cookies-container">\n                              <div class="cookies-content scrollable">\n                                  <span>\n                                    ' + this.content + '\n                                    <a href="' + s + '" target="_blank" class="cookies-button-more ' + a + '">\n                                       ' + l + '\n                                    </a> \n                                  </span>                       \n                              </div>   \n                              <div class="cookies-button-container">   \n                                  <a href="' + s + '" target="_blank" class="cookies-button-more scrollable ' + a + '">\n                                    ' + l + '\n                                  </a>                       \n                                  <div class="cookies-button scrollable">\n                                     ' + n + '\n                                  </div>\n                              </div>\n                              <div class="cookies-close">\n                                <svg width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">\n                                    <path d="M7 6L13 0L14 1L8 7L14 13L13 14L7 8L1 14L0 13L6 7L0 1L1 0L7 6Z"/>\n                                </svg>\n                              </div> \n                            </div>                                   \n                         </div>';
            o.append(r);
            var _ = o.find(".cookies-wrap"),
                k = function () {
                    flexbe_cli.cookies.apply_cookies && (e.applyCookie = !0, window.applyCookies(), $(document).off())
                };
            $(window).one("DOMContentLoaded", (function () {
                _.addClass("show"), _.on("click", ".cookies-button, .cookies-close", (function () {
                    _.removeClass("show"), localStorage.setItem("f_cookies_allowed", "allowed"), _.off(), e.applyCookie || k()
                })), $(document).on("click", "a, [data-component]", (function () {
                    k()
                })), $(document).on("scrollend", (function (e) {
                    (c += e.detail.distance) >= t && k()
                }))
            }))
        }, e
    }();
    flexbe_cli.cookies = _extends({
        show: 0,
        apply_cookies: 0,
        use_custom_text: 0,
        custom_text: "",
        uri_link: "",
        init: function () {
            flexbe_cli.is_admin || 99 == +flexbe_cli.theme_id || !this.show || localStorage.getItem("f_cookies_allowed") || (new e).createNotify()
        }
    }, flexbe_cli.cookies)
}();
"use strict";

function _defineProperties(e, t) {
    for (var i = 0; i < t.length; i++) {
        var n = t[i];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
    }
}

function _createClass(e, t, i) {
    return t && _defineProperties(e.prototype, t), i && _defineProperties(e, i), e
}
var EntityCore = function () {
    function e(e, t) {
        var i = this;
        void 0 === t && (t = {});
        var n = $(e),
            s = n.attr("data-is"),
            o = n.attr("data-id"),
            a = n.attr("data-mod-id") || 0,
            r = "zone" === s ? "e" : s[0],
            h = n.attr("data-" + r + "-id"),
            c = n.data(r + "Type") || [],
            d = n.data("components") || !0;
        this.require = [], this.$area = n, this.area = n[0], this.$container = this.$area, this.container = this.area, this.$root = n, this.root = n[0], this.inited = !1, this.is = s, this.id = o, this.template_id = h, this.mod_id = a, this.type = c, this.components = d, this.tween = {}, this.inScreen = !1, this.inBeside = !1, this.inView = !1, this.inFocus = !1, this.wasScreen = !1, this.wasBeside = !1, this.wasView = !1, this.wasFocus = !1, Object.keys(t).forEach((function (e) {
            var n = t[e];
            i[e] = "object" == typeof n ? $.extend(!0, Array.isArray(n) ? [] : {}, n) : n
        }))
    }
    var t = e.prototype;
    return t.onInit = function () {}, t.onUpdate = function () {}, t.onLoad = function () {}, t.onReady = function () {}, t.onBeside = function () {}, t.onFocus = function () {}, t.onScreen = function () {}, t.onView = function () {}, t.onMsg = function () {}, t.onResize = function () {}, t.onOpen = function () {}, t.onClose = function () {}, t.init = function (e) {
        var t = this,
            i = this.inited ? "update" : "init";
        "init" === i ? this._onInit(e) : "update" === i && this._onUpdate(e), ("init" === i || e.templateRendered) && flexbe_cli.require(this.require, (function () {
            t._onLoad(e)
        }))
    }, t._onInit = function (e) {
        this.inited = !0, this.onInit(e), flexbe_cli.events.emit("entity_event", {
            type: "onInit",
            core: this,
            params: e
        }), this._tween()
    }, t._onLoad = function (e) {
        this.loaded = !0, this.onLoad(e), this.onReady(e), this.require.length && this._tween({
            force: !0
        })
    }, t._onUpdate = function (e) {
        this.updated = !0, this.onUpdate(e), flexbe_cli.events.emit("entity_event", {
            type: "onUpdate",
            core: this,
            params: e
        }), (e.templateRendered || e.styleRendered) && this._tween({
            force: !0
        })
    }, t._onResize = function (e) {
        var t = this._tween();
        if (!this.isHidden) {
            (t || e.force) && (this.onResize(e), flexbe_cli.events.emit("entity_event", {
                type: "onResize",
                core: this,
                params: e
            })), this.$area.triggerHandler("onResize", {})
        }
    }, t._onMsg = function (e, t) {
        this.onMsg(e, t)
    }, t._onFocus = function (e) {
        var t = e.state;
        if (!(this.inFocus === t || t && this.isHidden)) {
            var i = t && !this.wasFocus;
            this.inFocus = t, this.onFocus(t, i), flexbe_cli.events.emit("entity_event", {
                type: "onFocus",
                core: this,
                params: {
                    state: t,
                    first: i
                }
            }), this.$area.triggerHandler("onFocus", {
                state: t,
                first: i
            }), t && (this.wasFocus = !0)
        }
    }, t._onScreen = function (e) {
        var t = e.state;
        if (!(this.inScreen === t || t && this.isHidden)) {
            var i = t && !this.wasScreen;
            this.inScreen = t, this.onScreen(t, i), flexbe_cli.events.emit("entity_event", {
                type: "onScreen",
                core: this,
                params: {
                    state: t,
                    first: i
                }
            }), this.$area.triggerHandler("onScreen", {
                state: t,
                first: i
            }), t && (this.wasScreen = !0)
        }
    }, t._onView = function (e) {
        var t = e.state;
        if (!(this.inView === t || t && this.isHidden)) {
            var i = t && !this.wasView;
            this.inView = t, i && "block" === this.is && this.$area.addClass("was-view"), this.onView(t, i), flexbe_cli.events.emit("entity_event", {
                type: "onView",
                core: this,
                params: {
                    state: t,
                    first: i
                }
            }), this.$area.triggerHandler("onView", {
                state: t,
                first: i
            }), t && (this.wasView = !0)
        }
    }, t._onBeside = function (e) {
        var t = e.state;
        if (!(this.inBeside === t || t && this.isHidden)) {
            var i = t && !this.wasBeside;
            this.inBeside = t, this.onBeside(t, i), flexbe_cli.events.emit("entity_event", {
                type: "onBeside",
                core: this,
                params: {
                    state: t,
                    first: i
                }
            }), this.$area.triggerHandler("onBeside", {
                state: t,
                first: i
            }), t && (this.wasBeside = !0)
        }
    }, t._tween = function () {}, t._onOpen = function (e) {
        this._tween({
            force: !0
        }), this.onOpen(e), flexbe_cli.events.emit("entity_event", {
            type: "onOpen",
            core: this,
            params: e
        }), this.$area.triggerHandler("onOpen", e)
    }, t._onClose = function (e) {
        this.onClose(), flexbe_cli.events.emit("entity_event", {
            type: "onClose",
            core: this,
            params: e
        }), this.$area.triggerHandler("onClose")
    }, t.updateTweens = function () {
        this._tween(), this.$area.find("[data-id]").each((function (e, t) {
            t._core && t._core._tween()
        }))
    }, _createClass(e, [{
        key: "isHidden",
        get: function () {
            return !this.tween.width && !this.tween.height
        }
    }]), e
}();
"use strict";

function _inheritsLoose(e, t) {
    e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e.__proto__ = t
}
var BlockCore = function (e) {
    function t(t, i) {
        var n;
        return (n = e.call(this, t, i) || this).is = "block", n.$block = n.$area, n.$container = n.$area.find(".container-fluid"), n.container = n.$container[0], n.abtestVariant = n.$area.attr("data-abtest-variant"), n.abtestId = n.abtestVariant && n.$area.attr("data-abtest-id"), n
    }
    _inheritsLoose(t, e);
    var i = t.prototype;
    return i._onInit = function (t) {
        flexbe_cli.block.fixCoverHeight(this.$area), e.prototype._onInit.call(this, t)
    }, i._onUpdate = function (t) {
        t.templateRendered && flexbe_cli.block.fixCoverHeight(this.$area), e.prototype._onUpdate.call(this, t)
    }, i._tween = function (e) {
        var t = void 0 === e ? {} : e,
            i = t.force,
            n = void 0 !== i && i,
            r = t.fixed,
            o = void 0 !== r && r,
            s = this,
            a = $(this.area).offset() || {
                top: this.area.offsetTop
            },
            h = this.area.offsetWidth,
            l = this.area.offsetHeight,
            c = Math.max(0, a.top),
            f = h !== this.tween.width || l !== this.tween.height;
        if (this.tween.fixed = o, this.tween.width = h, this.tween.height = l, this.tween.start = c, this.tween.end = c + l, this.tween.color = "#999", this.container) {
            var w = this.container.getAttribute("data-contrast");
            if (w) this.tween.color = "light" === w ? "#FFF" : "#1B1B1C";
            else {
                var d = this.$area.find(".container")[0];
                this.tween.color = d && getComputedStyle(d).color || "#FFF"
            }
        }
        return n && (this.inScreen = !1, this.inBeside = !1, this.inView = !1, this.inFocus = !1), u(), $(window).off("scroll.tween_" + this.id).on("scroll.tween_" + this.id, $.throttle(u, 50)), f;

        function u() {
            if (!s.inited) return !1;
            var e, t, i, n = Math.max(flexbe_cli.resize.height - l, 0),
                r = 1 / s.tween.height * (flexbe_cli.scroll.latest - s.tween.start),
                o = (e = flexbe_cli.scroll.latest + flexbe_cli.resize.height / 2, t = s.tween.start + s.tween.height / 2, (e - t + s.tween.height / 2) / s.tween.height),
                a = (i = s.tween.start - flexbe_cli.resize.height, 1 / (s.tween.end - i) * (flexbe_cli.scroll.latest - i));
            s.tween.fix = n, s.tween.position = r, s.tween.positionAbs = a, s.tween.positionCenter = o;
            var h = o > 0 && o < 1,
                c = function () {
                    if (s.tween.fixed) return !0;
                    if (!s.tween.width) return !1;
                    var e = Math.min(s.tween.height / 3, flexbe_cli.resize.height / 4);
                    return flexbe_cli.scroll.latest + flexbe_cli.resize.height > s.tween.start + e && flexbe_cli.scroll.latest < s.tween.end - e
                }(),
                f = function () {
                    if (s.tween.fixed) return !0;
                    if (!s.tween.width) return !1;
                    return s.tween.positionAbs >= 0 && s.tween.positionAbs <= 1
                }(),
                w = function () {
                    if (s.tween.fixed) return !0;
                    if (!s.tween.width) return !1;
                    return s.tween.positionAbs >= -.2 && s.tween.positionAbs <= 1.2
                }();
            s._onBeside({
                state: w
            }), s._onScreen({
                state: f
            }), s._onView({
                state: c
            }), s._onFocus({
                state: h
            })
        }
    }, t
}(EntityCore);
"use strict";

function _inheritsLoose(t, e) {
    t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e
}
var ModalCore = function (t) {
    function e(e, s) {
        var o;
        return (o = t.call(this, e, s) || this).is = "modal", o.isOpen = !1, o.$modal = o.$area, o.$list = flexbe_cli.modal.$list, o
    }
    _inheritsLoose(e, t);
    var s = e.prototype;
    return s.open = function (t, e) {
        var s = this;
        void 0 === e && (e = {}), this.isOpen = !0, flexbe_cli.block.pushOverlay("modal", !0), this.lastOptions = e, this.lastScroll = flexbe_cli.scroll.latest;
        var o = this.$area.find(".modal-data > ._anchor").attr("name") || this.id;
        flexbe_cli.lockPopstate = !0, history.pushState(null, null, "#" + o), flexbe_cli.lockPopstate = !1, this.$list.addClass("show"), this.$area.addClass("show"), $("body").addClass("is-modal-open"), setTimeout((function () {
            s.$list.addClass("overlay"), s._onOpen({
                data: t
            }), s._onBeside({
                state: !0
            }), s._onScreen({
                state: !0
            }), s._onView({
                state: !0
            }), s._onFocus({
                state: !0
            }), "function" == typeof e.onOpen && e.onOpen(s)
        }), 30), flexbe_cli.scroll.scrollLock.lock(), flexbe_cli.events.emit("modal_opened", this.id)
    }, s.close = function (t) {
        var e = (void 0 === t ? {} : t).from,
            s = this.lastOptions;
        this.lastOptions = {}, this.isOpen = !1, flexbe_cli.block.removeOverlay("modal"), /^#{1,2}/.test(location.hash) && (flexbe_cli.lockPopstate = !0, history.replaceState(null, null, "#"), flexbe_cli.lockPopstate = !1), this.$area.removeClass("show"), e || (this.$list.removeClass("show overlay"), flexbe_cli.scroll.scrollLock.unlock()), flexbe_cli.run.is_screen_all_mobile && $("body, html").scrollTop(this.lastScroll), $("body").removeClass("is-modal-open"), this._onClose(), this._onBeside({
            state: !1
        }), this._onScreen({
            state: !1
        }), this._onView({
            state: !1
        }), this._onFocus({
            state: !1
        }), "function" == typeof s.onClose && s.onClose(this), flexbe_cli.events.emit("modal_closed", this.id)
    }, s._tween = function (t) {
        var e = (void 0 === t ? {} : t).force;
        if (this.isOpen || e) {
            var s = this.area,
                o = s.offsetWidth,
                i = s.offsetHeight,
                l = o !== this.tween.width || i !== this.tween.height;
            return this.tween.width = o, this.tween.height = i, e && (this.inScreen = !1, this.inBeside = !1, this.inView = !1, this.inFocus = !1), this.inited && this.isOpen && (this._onBeside({
                state: !0
            }), this._onScreen({
                state: !0
            }), this._onView({
                state: !0
            }), this._onFocus({
                state: !0
            })), l
        }
    }, e
}(EntityCore);
"use strict";

function _defineProperties(e, t) {
    for (var r = 0; r < t.length; r++) {
        var i = t[r];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
    }
}

function _createClass(e, t, r) {
    return t && _defineProperties(e.prototype, t), r && _defineProperties(e, r), e
}

function _inheritsLoose(e, t) {
    e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e.__proto__ = t
}
var WidgetCore = function (e) {
    function t(t, r) {
        var i;
        return (i = e.call(this, t, r) || this).is = "widget", i.$widget = i.$area, i
    }
    return _inheritsLoose(t, e), _createClass(t, [{
        key: "isHidden",
        get: function () {
            return this.$area.is(":hidden")
        }
    }]), t
}(EntityCore);
"use strict";

function _inheritsLoose(t, e) {
    t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e
}
var ElementCore = function (t) {
    function e(e, i) {
        var n, o = (n = t.call(this, e, i) || this).$area.closest(".b_block, .m_modal, .w_widget"),
            s = n.$area.parent().closest("[data-is]");
        return n.is = "element", n.isClone = n.$area.closest(".swiper-slide-duplicate").length > 0, n.$root = o, n.root = o[0], n.$parent = s, n.parent = s[0], n
    }
    _inheritsLoose(e, t);
    var i = e.prototype;
    return i._onInit = function (e) {
        t.prototype._onInit.call(this, e), this._inheritEvents()
    }, i._onUpdate = function (e) {
        t.prototype._onUpdate.call(this, e), this._inheritEvents()
    }, i._inheritEvents = function () {
        var t = this,
            e = this.root._core;
        e && (this._onBeside({
            state: e.inBeside
        }), this._onScreen({
            state: e.inScreen
        }), this._onView({
            state: e.inView
        }), this._onFocus({
            state: e.inFocus
        })), ["onFocus", "onView", "onScreen", "onBeside", "onResize", "onOpen", "onClose"].forEach((function (e) {
            var i = e + ".element_" + t.id + (t.isClone ? "_clone" : "_original");
            t.$parent.off(i).on(i, (function (n) {
                if (flexbe_cli.is_admin && !t.root.contains(t.area)) return t.$parent.off(i), !1;
                for (var o = arguments.length, s = new Array(o > 1 ? o - 1 : 0), r = 1; r < o; r++) s[r - 1] = arguments[r];
                t["_" + e].apply(t, s)
            }))
        }))
    }, i._tween = function (t) {
        var e = (void 0 === t ? {} : t).force,
            i = this.container || this.area,
            n = this.root && this.root._core,
            o = i.offsetWidth,
            s = i.offsetHeight,
            r = o !== this.tween.width || s !== this.tween.height;
        return this.tween.width = o, this.tween.height = s, e && (this.inScreen = !1, this.inBeside = !1, this.inView = !1, this.inFocus = !1), this.inited && n && n.inited && (this._onBeside({
            state: n.inBeside
        }), this._onScreen({
            state: n.inScreen
        }), this._onView({
            state: n.inView
        }), this._onFocus({
            state: n.inFocus
        })), r
    }, e
}(EntityCore);
"use strict";
flexbe_cli.components = {
    instances: {},
    classes: {},
    helpers: {},
    init: function () {
        var n = this,
            e = this.instances;
        this.links(), flexbe_cli.locale.init(), flexbe_cli.events.on("entity_event.components_init", (function (t, o) {
            if (void 0 === o && (o = {}), !o.type || !o.core || !o.core.id) return !1;
            var i = o.core,
                a = i.isClone ? i.id + "_clone" : i.id,
                c = e[a] || [];
            "onInit" === o.type || "onUpdate" === o.type && o.params.templateRendered ? (n.initComponents({
                core: i,
                reason: o.type,
                params: o.params
            }), flexbe_cli.locale.init(i.area)) : ["onResize", "onOpen", "onClose", "onBeside", "onScreen", "onView", "onFocus"].includes(o.type) && c.forEach((function (n) {
                var e = n["_" + o.type] || n[o.type];
                "function" == typeof e && e.call(n, o.params)
            }))
        })), $(window).off("load.core_components").one("load.core_components", (function () {
            Object.values(e).forEach((function (n) {
                n.forEach((function (n) {
                    return n._onPageLoad()
                }))
            }))
        }))
    },
    initComponents: function (n) {
        var e = this,
            t = void 0 === n ? {} : n,
            o = t.core,
            i = t.reason,
            a = void 0 === i ? "onInit" : i,
            c = t.force,
            s = void 0 !== c && c,
            r = o.$area,
            l = o.isClone ? o.id + "_clone" : o.id,
            f = o.components,
            p = !1;
        if (!0 === f ? p = "[data-component]" : Array.isArray(f) && (p = f.map((function (n) {
                return '[data-component^="' + n + '"]'
            })).join(", ")), p) {
            var d = r.find(p).toArray(),
                u = {};
            this.instances[l] = d.map((function (n) {
                var t = [],
                    i = String(n.getAttribute("data-component")).trim().split(":"),
                    c = i[0],
                    r = i[1];
                r && (t = String(r).replace(/^\[|\]$/g, "").split(",")), void 0 === u[c] && (u[c] = 0);
                var l = u[c];
                if (u[c] += 1, s && n.componentInstance) "function" == typeof n.componentInstance.destroy && n.componentInstance.destroy(), delete n.componentInstance;
                else if (n.componentInstance) return n.componentInstance.index = l, n.componentInstance;
                var f = e.classes[c];
                if ("function" == typeof f) {
                    var p = new f({
                        args: t,
                        component: n,
                        index: l,
                        core: o,
                        reason: a
                    });
                    if (p instanceof BaseComponent) return n.componentInstance = p, p._onInit(), o.inBeside && p._onBeside({
                        state: !0,
                        first: !0
                    }), o.inScreen && p._onScreen({
                        state: !0,
                        first: !0
                    }), o.inView && p._onView({
                        state: !0,
                        first: !0
                    }), o.inFocus && p._onFocus({
                        state: !0,
                        first: !0
                    }), p
                }
                return !1
            })).filter((function (n) {
                return n
            }))
        }
        if (this.instances[l] && !this.instances[l].length) return delete this.instances[l], !1
    },
    links: function (n) {
        void 0 === n && (n = ".container-list, .modal-list, .widget-list, .component-menu-dropdown, header, footer"), $(n).on("click.component-links", "a[href], a[data-action]", (function (n) {
            var e = n.currentTarget,
                t = e.getAttribute("href"),
                o = e.getAttribute("data-action"),
                i = e.getAttribute("target"),
                a = e.hasAttribute("download"),
                c = "_blank" === i || n.metaKey || n.ctrlKey,
                s = flexbe_cli.is_admin;
            if ((t || o) && !a)
                if (c || a || n.preventDefault(), s) n.preventDefault();
                else if ("button" !== o) c || flexbe_cli.helpers.gotoLink(t);
            else {
                var r = $(e).closest(".content-zone, [data-item-id]").first().find(".component-button");
                r[0] && r[0].click()
            }
        }))
    }
};
"use strict";
var BaseComponent = function () {
    function n(n) {
        var o = n.component,
            i = n.index,
            t = n.core,
            e = n.reason;
        this.core = t, this.owner = t.area, this.root = t.root, this.index = i || 0, this.component = o, this.$component = $(o), this.require = [], this.isPageLoaded = flexbe_cli.isLoaded || !1, this.isUpdated = "onUpdate" === e, this.isInited = !1, this.isLoaded = !1
    }
    var o = n.prototype;
    return o.onInit = function () {}, o.onLoad = function () {}, o.onScreen = function () {}, o.onBeside = function () {}, o.onView = function () {}, o.onFocus = function () {}, o.onPageLoad = function () {}, o.onResize = function () {}, o.onOpen = function () {}, o.onClose = function () {}, o._onInit = function () {
        var n = this;
        this.isInited = !0, "function" == typeof this.onInit && this.onInit(), flexbe_cli.require(this.require, (function () {
            n._onLoad()
        }))
    }, o._onLoad = function () {
        this.isLoaded = !0, "function" == typeof this.onLoad && this.onLoad()
    }, o._onScreen = function (n) {
        this.onScreen(n)
    }, o._onView = function (n) {
        this.onView(n)
    }, o._onBeside = function (n) {
        this.onBeside(n)
    }, o._onFocus = function (n) {
        this.onFocus(n)
    }, o._onResize = function (n) {
        this.onResize(n)
    }, o._onOpen = function (n) {
        this.onOpen(n)
    }, o._onClose = function (n) {
        this.onClose(n)
    }, o._onPageLoad = function () {
        this.onPageLoad(), this.isPageLoaded = !0
    }, n
}();
"use strict";

function _assertThisInitialized(i) {
    if (void 0 === i) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return i
}

function _inheritsLoose(i, t) {
    i.prototype = Object.create(t.prototype), i.prototype.constructor = i, i.__proto__ = t
}! function () {
    var i = function () {
            function i(i, t, e) {
                var a = this;
                this.id = i, this.params = e, this.pending = !1, this.visible = !1, this.size = !1, this.imSize = {
                    w: 0,
                    h: 0
                }, this.$outer = $(".parallax-outer", t), this.overlay = $(".overlay", t).get(0), this.canvas = $("canvas", this.$outer).get(0), this.offScreen = document.createElement("canvas"), this.overlayOpacity = +this.overlay.getAttribute("data-opacity"), this.factor = 1 === e.parallax || 2 === e.parallax ? .3 : 0, this.zoomRatio = 3 === e.parallax || 4 === e.parallax ? .2 : 0, this.zoomType = 3 === e.parallax || 4 === e.parallax ? 2 : 0, this.zoomD = 3 === e.parallax ? .5 : 4 === e.parallax ? 1 : 0, this.fadeout = 1 === e.parallax ? 0 : 3 === e.parallax ? .5 : 1;
                var o = window.devicePixelRatio >= 1.5 ? 1960 / window.devicePixelRatio : 1960,
                    s = this.$outer.width(),
                    n = this.$outer.height(),
                    r = this.$outer.offset() || {};
                this.blSize = {
                    w: s <= o ? s : o
                }, this.blSize.r = this.blSize.w / s, this.blSize.h = this.blSize.r * n, this.blSize.x = this.blSize.r * r.top, this.winSize = {
                    w: $("window").width() * this.blSize.r,
                    h: $("window").height() * this.blSize.r
                }, this.blSizeOr = {
                    w: s,
                    h: n,
                    x: r.top
                }, this.offCtx = this.offScreen.getContext("2d", {
                    alpha: !1
                }), this.canvas.width = 0, this.canvas.height = 0, this.ctx = this.canvas.getContext("2d", {
                    alpha: !1
                }), this.img = document.createElement("img"), this.position = {
                    x: +this.$outer.data("bg-pos-x").replace("%", "") / 100,
                    y: +this.$outer.data("bg-pos-y").replace("%", "") / 100
                }, this.dispatchEvents(), this.img.onload = function () {
                    a.loaded = !0, a.imSize = {
                        w: a.img.width,
                        h: a.img.height
                    }, a.imSize.r = a.imSize.h / a.imSize.w, a.updateCanvasSource(), setTimeout((function () {
                        a.$outer.addClass("ready")
                    }), 30)
                }, this.img.src = this.$outer.attr("data-image")
            }
            var t = i.prototype;
            return t.dispatchEvents = function () {
                var i = this;
                $(window).off("resized." + this.id + " documentresize." + this.id).on("resized." + this.id + " documentresize." + this.id, (function () {
                    i.updateCanvasSource()
                })), $(window).off("scroll.component-bg-" + this.id).on("scroll.component-bg-" + this.id, (function () {
                    i.pending || (i.pending = !0, i.updateInst())
                })), flexbe_cli.events.off("editor_change.bg_" + this.id).on("editor_change.bg_" + this.id, (function (t, e) {
                    e.entity && e.entity.id == i.id && "editor_settings" === e.reason && (i.overlayOpacity = e.entity.data.background.opacity / 100, i.pending || (i.pending = !0, i.updateInst()))
                })), flexbe_cli.events.off("layout_change.bg_" + this.id).on("layout_change.bg_" + this.id, (function (t, e) {
                    e && e.test && e.test.current && e.test[e.test.current] === i.id && i.updateCanvasSource()
                }))
            }, t.toggleRendering = function (i) {
                if ("boolean" != typeof i) return !1;
                i !== this.visible && (this.visible = i)
            }, t.getCosPoint = function (i, t, e) {
                return void 0 === e && (e = 1), 1 - i > e && (i = e), (1 - Math.cos(Math.PI * i * t)) / 2
            }, t.getZoomCoords = function (i) {
                var t = 1 === this.zoomType ? i : -1 === this.zoomType ? 100 - i : 2 === this.zoomType ? 100 - 100 * this.getCosPoint(.01 * i, 2, this.zoomD) : 0,
                    e = {
                        ratio: this.zoomRatio / 100 * t
                    };
                return e.w = this.blSize.w * (1 + e.ratio), e.h = this.blSize.h * (1 + e.ratio), e.x = (e.w - this.canvas.width) / 2, e.y = (e.h - this.blSize.h) / 2, e
            }, t.draw = function (i, t) {
                var e, a = this;
                if (this.fadeout && (e = 1 - (1 - this.overlayOpacity) * this.getCosPoint(.01 * t, 2, this.fadeout)), this.zoomRatio) {
                    var o = this.getZoomCoords(t);
                    requestAnimationFrame((function () {
                        a.overlay.style.opacity = e, a.ctx.drawImage(a.offScreen, Math.ceil(-1 * o.x), Math.ceil(i * a.factor - a.winSize.h * a.factor - o.y), o.w, o.h), a.pending = !1
                    }))
                } else {
                    var s = Math.ceil(i * this.factor - this.winSize.h * this.factor);
                    requestAnimationFrame((function () {
                        a.overlay.style.opacity = e, a.ctx.drawImage(a.offScreen, 0, s), a.pending = !1
                    }))
                }
            }, t.updateInst = function () {
                if (this.winSize.x = (window.scrollY || window.pageYOffset) * this.blSize.r, this.winSize.x + this.winSize.h > this.blSize.x - 200 && this.winSize.x < this.blSize.x + this.blSize.h) {
                    this.toggleRendering(!0);
                    var i = this.winSize.x + this.winSize.h - this.blSize.x,
                        t = 100 - i / (this.blSize.h + this.winSize.h) * 100;
                    this.draw(i, t)
                } else this.toggleRendering(!1), this.pending = !1
            }, t.prerender = function () {
                this.loaded && (this.fitToOuter(), this.offScreen.width = this.blSize.w, this.offScreen.height = this.zoomRatio ? this.blSize.h : Math.ceil(this.size.offH), this.drawOffscreenImage(this.position.x, this.position.y))
            }, t.updateCanvasSource = function () {
                this.prerender(), this.updateInst()
            }, t.drawOffscreenImage = function (i, t) {
                (i = "number" == typeof i ? i : .5) < 0 && (i = 0), (t = "number" == typeof t ? t : .5) < 0 && (t = 0), i > 1 && (i = 1), t > 1 && (t = 1);
                var e, a, o, s, n = this.offCtx.canvas.width,
                    r = this.offCtx.canvas.height;
                r / n <= this.imSize.r ? (o = n, e = 0, a = ((s = n * this.imSize.r) - r) * t * -1) : (s = r, a = 0, e = ((o = r / this.imSize.r) - n) * i * -1), this.offCtx.drawImage(this.img, e, a, o, s)
            }, t.fitToOuter = function () {
                var i = window.devicePixelRatio >= 1.5 ? 1600 : 1960;
                this.blSize = {
                    w: this.$outer.width() <= i ? this.$outer.width() : i
                }, this.blSize.r = this.blSize.w / this.$outer.width(), this.blSize.h = this.blSize.r * this.$outer.height(), this.blSize.x = this.blSize.r * this.$outer.offset().top, this.winSize = {
                    w: $(window).width() * this.blSize.r,
                    h: $(window).height() * this.blSize.r
                }, this.canvas.width = this.blSize.w, this.canvas.height = this.blSize.h, this.canvas.style.transform = "scale(" + 1 / this.blSize.r + ")";
                var t, e = Math.max(this.winSize.h, this.blSize.h),
                    a = e - (e - Math.min(this.winSize.h, this.blSize.h)) * (this.blSize.h > this.winSize.h ? this.factor : 1 - this.factor),
                    o = a / this.blSize.w;
                (t = this.imSize.r >= o ? {
                    w: this.blSize.w,
                    h: this.blSize.w * this.imSize.r
                } : {
                    h: a,
                    w: a / this.imSize.r
                }).offH = a, t.x = (t.w - this.blSize.w) / 2, this.size = t
            }, t.destroy = function () {
                this.destroyed = !0, $(window).off("resize." + this.id + " documentresize." + this.id), $(window).off("scroll.component-bg-" + this.id), flexbe_cli.events.off("editor_change.bl.bg_" + this.id), this.$outer.removeClass("ready"), this.offScreen.remove(), this.img.remove()
            }, i
        }(),
        t = function (t) {
            function e() {
                for (var i, e = arguments.length, a = new Array(e), o = 0; o < e; o++) a[o] = arguments[o];
                var s = _assertThisInitialized(i = t.call.apply(t, [this].concat(a)) || this).$component;
                return i.data = {
                    type: s.data("type") || "color",
                    parallax: s.data("parallax") || 0,
                    video: s.data("video") || !1,
                    videoParallaxFactor: .6
                }, i.data.parallax && flexbe_cli.run.is_mobile && (flexbe_cli.run.is_screen_mobile_s || flexbe_cli.run.is_screen_all_mobile && "video" === i.data.type) && (i.data.parallax = 0), i
            }
            _inheritsLoose(e, t);
            var a = e.prototype;
            return a.onInit = function () {
                this.loadImage(), this.imageParallaxInit(), this.videoParallaxInit()
            }, a.onScreen = function (i) {
                if (!i.state || this.played) return !1;
                this.playVideo()
            }, a.onBeside = function (i) {
                if (!i.state || this.played) return !1;
                this.playVideo()
            }, a.loadImage = function () {
                if (!flexbe_cli.is_admin) {
                    var i, t = this.$component,
                        e = t.find(".image, .parallax-outer"),
                        a = e.find(".loader-image"),
                        o = a.attr("data-src");
                    if (o) {
                        var s = new Image;
                        s.onload = n, s.src = o, i = setTimeout(n, 1e3)
                    }
                }

                function n() {
                    clearTimeout(i), e.css("backgroundImage", ""), t.removeClass("loading"), setTimeout((function () {
                        a.remove()
                    }), 300)
                }
            }, a.imageParallaxInit = function () {
                if ("image" !== this.data.type || !this.data.parallax) return !1;
                var t = this.owner,
                    e = this.$component,
                    a = this.data,
                    o = t._core && t._core.id || t.getAttribute("data-id");
                "object" == typeof t._bgEffects && t._bgEffects.destroy(), t._bgEffects = new i(o, e, a)
            }, a.videoParallaxInit = function () {
                var i = this;
                if ("video" !== this.data.type || !this.data.parallax || !this.owner._core) return !1;
                var t = $(".image-holder, .video_bg_container", this.$component),
                    e = t.find(".image, .video_bg_player"),
                    a = this.owner._core;
                flexbe_cli.resize.height < a.tween.height && a.tween.width > 500 ? t.css("height", a.tween.height + "px") : t.css("height", "");
                var o = !1,
                    s = function () {
                        var t = a.tween.start,
                            o = 1 - (1 - i.data.videoParallaxFactor) * (a.tween.height / flexbe_cli.resize.height);
                        o < 0 && (o = i.data.videoParallaxFactor / 2), e.css("transform", "translate3d(0, " + -(window.pageYOffset - t) * o + "px, 0)")
                    };
                s(), $(window).off("scroll.component-bg-" + a.id).on("scroll.component-bg-" + a.id, (function () {
                    !o && a.inScreen && (o = !0, requestAnimationFrame((function () {
                        s(), o = !1
                    })))
                }))
            }, a.playVideo = function () {
                var i = this;
                this.played = !0;
                var t = this.$component,
                    e = this.data,
                    a = e.video;
                if ("video" !== e.type || !a || "youtube" !== a.type || !a.id) return !1;
                if (flexbe_cli.run.is_mobile || flexbe_cli.run.is_screen_all_mobile) return !1;
                if (t.data("video_bg_played")) {
                    if (a.id === t.data("video_bg_played")) return;
                    this.destroyVideo()
                }
                t.data("video_bg_played", a.id), flexbe_cli.require(["/_s/lib/jquery/youtubebackground/jquery.youtubebackground.js"], (function () {
                    t.YTPlayer({
                        videoId: a.id,
                        videoURL: a.url,
                        callback: function () {
                            i.videoParallaxInit(), setTimeout((function () {
                                i.videoParallaxInit()
                            }), 1e3)
                        }
                    })
                }))
            }, a.destroyVideo = function () {
                var i = this.$component;
                i.data("ytPlayer") && i.data("ytPlayer").destroy(), i.removeData("video_bg_played")
            }, e
        }(BaseComponent);
    flexbe_cli.components.classes.background = t
}();
"use strict";

function _inheritsLoose(t, e) {
    t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e
}! function () {
    var t = function (t) {
        function e() {
            for (var e, i = arguments.length, a = new Array(i), s = 0; s < i; s++) a[s] = arguments[s];
            return (e = t.call.apply(t, [this].concat(a)) || this).is = "timer", e
        }
        _inheritsLoose(e, t);
        var i = e.prototype;
        return i.onInit = function () {
            this.$timer = this.$component.find(".timer"), this.data = this.$timer.data("time"), this.initTimer()
        }, i.initTimer = function () {
            var t = this.$timer,
                e = this.data,
                i = new Date;
            if ("date" === e.type) {
                var a = e.my ? String(e.my).replace(".", "/").split("/") : [1, 2018];
                this.finalDate = new Date(a[1], parseInt(a[0], 10) - 1, e.d, e.h, e.m)
            } else if ("monthly" === e.type) this.finalDate = new Date(i.getFullYear(), i.getMonth(), e.d, e.h, e.m), i.getTime() > this.finalDate.getTime() && (this.finalDate = new Date(i.getFullYear(), i.getMonth() + 1, e.d, e.h, e.m)), parseInt(e.d, 10) != this.finalDate.getDate() && (this.finalDate.setDate(0), i.getTime() > this.finalDate.getTime() && (this.finalDate = new Date(this.finalDate.getFullYear(), this.finalDate.getMonth() + 2, 0, e.h, e.m)));
            else if ("weekly" === e.type) {
                var s = parseInt(i.getDate(), 10) - parseInt(i.getDay(), 10) + parseInt(e.dw, 10);
                this.finalDate = new Date(i.getFullYear(), i.getMonth(), s, e.h, e.m), i.getTime() > this.finalDate.getTime() && this.finalDate.setDate(this.finalDate.getDate() + 7)
            } else "daily" === e.type ? (this.finalDate = new Date(i.getFullYear(), i.getMonth(), i.getDate(), e.h, e.m), i.getTime() > this.finalDate.getTime() && this.finalDate.setDate(this.finalDate.getDate() + 1)) : (this.finalDate = new Date, this.finalDate.setMonth(this.finalDate.getMonth() + 1, 15));
            this.$itemDay1 = t.find(".d [data-value]").eq(0), this.$itemDay2 = t.find(".d [data-value]").eq(1), this.$itemDay3 = t.find(".d [data-value]").eq(2), this.$itemHour1 = t.find(".h [data-value]").eq(0), this.$itemHour2 = t.find(".h [data-value]").eq(1), this.$itemMinute1 = t.find(".m [data-value]").eq(0), this.$itemMinute2 = t.find(".m [data-value]").eq(1), this.$itemSecond1 = t.find(".s [data-value]").eq(0), this.$itemSecond2 = t.find(".s [data-value]").eq(1), this.lastOffset = {
                d: void 0,
                h: void 0,
                m: void 0,
                s: void 0
            }, !flexbe_cli.is_admin && "none" !== this.data.on_expired && this.finalDate.getTime() < i.getTime() ? "element" === this.data.on_expired ? $(this.owner).hide() : $(this.root).hide() : this.start()
        }, i.tick = function () {
            if (this.secondLeft = this.finalDate.getTime() - (new Date).getTime(), this.secondLeft = Math.ceil(this.secondLeft / 1e3), this.secondLeft = this.secondLeft < 0 ? 0 : this.secondLeft, this.offset = {
                    d: Math.floor(this.secondLeft / 60 / 60 / 24),
                    h: Math.floor(this.secondLeft / 60 / 60) % 24,
                    m: Math.floor(this.secondLeft / 60) % 60,
                    s: this.secondLeft % 60
                }, this.lastOffset.d !== this.offset.d) {
                var t = this.offset.d.toString().split("");
                t.length < 2 && t.unshift(0), t.length < 3 && t.unshift(0), this.$itemDay1.attr("data-value", t[0]).text(t[0]), this.$itemDay2.attr("data-value", t[1]).text(t[1]), this.$itemDay3.attr("data-value", t[2]).text(t[2])
            }
            if (this.lastOffset.h !== this.offset.h) {
                var e = this.offset.h.toString().split("");
                e.length < 2 && e.unshift(0), this.$itemHour1.attr("data-value", e[0]).text(e[0]), this.$itemHour2.attr("data-value", e[1]).text(e[1])
            }
            if (this.lastOffset.m !== this.offset.m) {
                var i = this.offset.m.toString().split("");
                i.length < 2 && i.unshift(0), this.$itemMinute1.attr("data-value", i[0]).text(i[0]), this.$itemMinute2.attr("data-value", i[1]).text(i[1])
            }
            if (this.lastOffset.s !== this.offset.s) {
                var a = this.offset.s.toString().split("");
                a.length < 2 && a.unshift(0), this.$itemSecond1.attr("data-value", a[0]).text(a[0]), this.$itemSecond2.attr("data-value", a[1]).text(a[1])
            }
            this.lastOffset = this.offset, this.secondLeft < 0 && this.stop()
        }, i.start = function () {
            var t = this;
            this.tick(), clearInterval(this.interval), this.interval = setInterval((function () {
                t.tick()
            }), 200)
        }, i.stop = function () {
            clearInterval(this.interval)
        }, e
    }(BaseComponent);
    flexbe_cli.components.classes.timer = t
}();
"use strict";

function _inheritsLoose(e, t) {
    e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e.__proto__ = t
}! function () {
    var e = function (e) {
        function t() {
            for (var t, o = arguments.length, n = new Array(o), i = 0; i < o; i++) n[i] = arguments[i];
            (t = e.call.apply(e, [this].concat(n)) || this).is = "video", t.type = t.$component.data("type"), t.autoplay = !!+t.$component.data("autoplay"), t.custom = !!+t.$component.data("custom"), t.$preview = t.$component.find(".video-preview"), t.$video = t.$component.find(".custom-video"), t.hasPreview = t.$preview.length, t.frameLoaded = !1, t.autoSet = !0;
            var a = t.$component.parent();
            a.hasClass("slider-item") && (a.closest(".component-slider").attr("data-current-index") === a.attr("data-real-index") || (t.autoSet = !1));
            return t.$preview.on("click", (function () {
                t.set(), t.custom ? t.$preview.off("click").addClass("preloading") : t.$preview.off("click").fadeOut(150, (function () {
                    t.$preview.remove()
                }))
            })), t.$component.off("sliderActivate").on("sliderActivate", (function () {
                t.set()
            })), t.$component.off("sliderDeactivate").on("sliderDeactivate", (function () {
                t.pause()
            })), t
        }
        _inheritsLoose(t, e);
        var o = t.prototype;
        return o.onScreen = function (e) {
            var t = this;
            e.state ? this.autoplay ? (this.autoSet && this.set(), this.onFrameLoaded((function () {
                t.play()
            }))) : !this.hasPreview && this.autoSet && this.set() : this.pause()
        }, o.set = function (e) {
            var t = this,
                o = (void 0 === e ? {} : e).autoplay;
            if (this.isSet) return !1;
            this.isSet = !0;
            var n = this.custom ? this.$video[0] : this.component.querySelector("iframe");
            if (!n) return !1;
            var i = n.getAttribute("data-src"),
                a = n.getAttribute("src"),
                s = function () {
                    if (t.$component.addClass("loaded"), t.frameLoaded = !0, t.hasPreview && !flexbe_cli.is_admin)
                        if (t.custom) t.hasPreview && (t.$video[0].play(), t.$preview.off("click").fadeOut(150, (function () {
                            t.$preview.remove()
                        })));
                        else if ("youtube" === t.type) {
                        var e = function (e) {
                            e.data !== window.YT.PlayerState.BUFFERING && e.data !== window.YT.PlayerState.PLAYING || t.$component.addClass("started")
                        };
                        flexbe_cli.require(["https://www.youtube.com/iframe_api?origin=" + window.location.host], (function () {
                            ! function (e, t) {
                                if ("function" != typeof t || "function" != typeof e) return !1;
                                if (e()) t();
                                else var o = window.setInterval((function () {
                                    e() && (window.clearInterval(o), t())
                                }), 10)
                            }((function () {
                                return window.YT && window.YT.Player
                            }), (function () {
                                var o = t.component.querySelector("iframe");
                                t.ytVideo = new window.YT.Player(o, {
                                    events: {
                                        onStateChange: e
                                    }
                                })
                            }))
                        }))
                    } else "vimeo" === t.type && flexbe_cli.require(["https://player.vimeo.com/api/player.js"], (function () {
                        var e = t.component.querySelector("iframe"),
                            o = new window.Vimeo.Player(e);
                        o.on("bufferstart", (function () {
                            o.off("bufferstart"), t.$component.addClass("started")
                        }))
                    }));
                    t.custom && t.autoplay && n.play().then(console.log).catch((function (e) {
                        return !1
                    }))
                };
            if (this.custom ? this.$video.on("play", (function () {
                    t.$component.addClass("started")
                })) : n.onload = s, i && !a)
                if (this.custom) {
                    var r = document.createElement("source");
                    n.addEventListener("canplaythrough", s), n.addEventListener("error", console.error), r.addEventListener("error", console.error), n.load(), r.setAttribute("type", "video/mp4"), r.setAttribute("src", i), n.appendChild(r)
                } else n.src = i + (o ? "&autoplay=1" : "");
            this.$component.addClass("loading")
        }, o.play = function () {
            var e = this.component.querySelector("iframe"),
                t = e && e.contentWindow;
            if (!(t || this.custom && this.$video)) return !1;
            this.isPaused = !1, this.custom ? this.$video[0].play() : "vimeo" === this.type ? t.postMessage({
                method: "play"
            }, "*") : t.postMessage('{"event":"command","func":"playVideo","args":""}', "*")
        }, o.pause = function () {
            var e = this.component.querySelector("iframe"),
                t = e && e.contentWindow;
            if (!(t || this.custom && this.$video)) return !1;
            this.isPaused = !0, this.custom ? this.$video[0].pause() : "vimeo" === this.type ? t.postMessage({
                method: "pause"
            }, "*") : t.postMessage('{"event":"command","func":"pauseVideo","args":""}', "*")
        }, o.onFrameLoaded = function (e) {
            var t = this;
            this.frameLoaded ? "function" == typeof e && e() : this.$component.find("iframe").on("load", (function () {
                t.frameLoaded = !0, "function" == typeof e && e()
            }))
        }, t
    }(BaseComponent);
    flexbe_cli.components.classes.video = e
}();
"use strict";

function _extends() {
    return (_extends = Object.assign || function (t) {
        for (var e = 1; e < arguments.length; e++) {
            var i = arguments[e];
            for (var a in i) Object.prototype.hasOwnProperty.call(i, a) && (t[a] = i[a])
        }
        return t
    }).apply(this, arguments)
}

function _inheritsLoose(t, e) {
    t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e
}! function () {
    var t = {},
        e = function (t, e) {
            void 0 === e && (e = function () {});
            var i = new Image;
            return i.onload = function () {
                "function" == typeof i.remove && i.remove(), e(i)
            }, i.src = t, i
        },
        i = function (t, e) {
            var i = t.ext,
                a = t.id,
                o = t.name,
                n = t.resizable,
                r = Math.max(1, window.devicePixelRatio || 1);
            return e = Math.round(Math.min(2560, e * r)), ["/img/" + a, n && e ? "_" + e : "", i ? "." + i : "/" + o].join("")
        },
        a = function (a) {
            function o() {
                for (var t, e = arguments.length, i = new Array(e), o = 0; o < e; o++) i[o] = arguments[o];
                return (t = a.call.apply(a, [this].concat(i)) || this).is = "image", t
            }
            _inheritsLoose(o, a);
            var n = o.prototype;
            return n.onInit = function () {
                this.isUpdated && (this.create(), this.set())
            }, n.onScreen = function (t) {
                if (!t.state) return !1;
                this.isCreated || this.create(), this.autoSet && !this.isSet && this.set()
            }, n.onBeside = function (t) {
                if (!t.state) return !1;
                this.isCreated || this.create(), this.autoSet && !this.isSet && this.set()
            }, n.onResize = function () {
                this.updateSize(), this.setOverlay()
            }, n.create = function () {
                var t = this;
                if (this.isCreated = !0, this.imageLoaded = !!this.$component.attr("data-img-loaded"), this.autoSet = !this.imageLoaded, this.params = {}, this.img = this.$component.find("img").get(0), this.layer = this.$component.find("[data-img-layer]").get(0) || this.component, this.overlay = this.$component.find(".overlay-container").get(0), this.updateParams(), this.updateSize(), this.img) {
                    var e = this.$component.parent();
                    if (e.hasClass("slider-item")) e.closest(".component-slider").attr("data-current-index") == e.attr("data-real-index") || (this.autoSet = !1);
                    this.$component.on("setImage sliderActivate", $.debounce((function () {
                        t.set()
                    }), 50))
                }
            }, n.set = function (t) {
                var a = this;
                void 0 === t && (t = !1), this.isCreated || this.create(), (t || !this.isSet && !this.imageLoaded) && (this.isSet = !0, this.setOverlay(), this.getOptimalSize((function (t) {
                    var o = t.width,
                        n = a.params,
                        r = i(n, o);
                    if (flexbe_cli.is_admin) a.setImage(r);
                    else {
                        var s = setTimeout((function () {
                            a.setImage(r)
                        }), 3e3);
                        e(r, (function () {
                            a.setImage(r), clearTimeout(s)
                        }))
                    }
                })))
            }, n.setImage = function (t) {
                var e = this,
                    a = this.params;
                if (t || (t = i(a)), this.imageLoaded || (this.imageLoaded = !0, requestAnimationFrame((function () {
                        e.$component.removeClass("loading")
                    }))), this.img && this.img.src === t) return !1;
                if (this.img && (this.img.src = t), "background" === a.type) {
                    var o = "url(" + t + ")",
                        n = a.x + " " + a.y;
                    this.layer.style.backgroundColor = "", this.layer.style.backgroundImage = o, this.layer.style.backgroundPosition = n
                }
            }, n.setOverlay = function () {
                var t = this.overlay,
                    e = this.componentWidth,
                    i = this.componentHeight;
                if (t) {
                    var a = "medium";
                    e <= 200 || i <= 150 ? a = "xsmall" : e <= 400 || i <= 250 ? a = "small" : e >= 650 && i >= 400 && (a = "large"), t.setAttribute("data-size", a), "hover" === t.getAttribute("data-type") && $(t).on("mouseenter mouseleave touchstart touchend", (function (e) {
                        var i = /enter|start/.test(e.type);
                        $(t).toggleClass("hover", i)
                    }))
                }
            }, n.updateParams = function () {
                var e = this.params,
                    i = this.component,
                    a = this.img;
                if (!e.id) {
                    var o = i.getAttribute("data-img-id");
                    if (t[o]) e = _extends({}, t[o]);
                    else {
                        e.id = o, e.ext = i.getAttribute("data-img-ext"), e.name = i.getAttribute("data-img-name"), e.proportion = +i.getAttribute("data-img-proportion") / 100;
                        var n = e.name.match(/\.(\D{2,4})$/i) || [];
                        n[1] && e.ext !== n[1] && (e.ext = n[1] || !1), e.resizable = !["svg", "gif"].includes(e.ext)
                    }
                    e.x = i.getAttribute("data-img-x"), e.y = i.getAttribute("data-img-y"), e.type = i.getAttribute("data-img-type"), e.action = i.getAttribute("data-action")
                }
                return !e.proportion && a && a.src && (e.proportion = a.naturalHeight / a.naturalWidth), t[e.id] || (t[e.id] = _extends({}, e)), this.params = e, e
            }, n.updateSize = function () {
                var t = this.component;
                this.componentWidth = Math.round(t.offsetWidth), this.componentHeight = Math.round(t.offsetHeight)
            }, n.getProportion = function (a) {
                void 0 === a && (a = function () {});
                var o = this.params;
                if (o.proportion) a(o.proportion);
                else {
                    var n = i(o, 50);
                    e(n, (function (e) {
                        o.proportion = e.naturalHeight / e.naturalWidth, t[o.id] && (t[o.id].proportion = o.proportion), a(o.proportion)
                    }))
                }
            }, n.getOptimalSize = function (t) {
                void 0 === t && (t = function () {});
                var e = this.componentWidth,
                    i = this.componentHeight,
                    a = i / e,
                    o = this.params.type,
                    n = this.$component.data("img-scale") || "cover";
                this.getProportion((function (r) {
                    var s, c;
                    "image" === o || a > r && "contain" === n || a < r && "cover" === n ? (s = Math.ceil(e), c = Math.ceil(s * r)) : (c = Math.ceil(i), s = Math.ceil(c / r)), t({
                        width: s,
                        height: c
                    })
                }))
            }, o
        }(BaseComponent);
    flexbe_cli.components.classes.image = a, flexbe_cli.components.helpers.replacePlaceholder = function (t) {
        var e = $(t);
        e && 0 !== e.length && e.each((function (t, e) {
            var i = $(e).data("src"),
                a = $(e).data("srcset"),
                o = new Image;
            o.onload = function () {
                i && (e.src = i), a && (e.srcset = a), $(e).addClass("loaded")
            }, i && (o.src = i), a && (o.srcset = a)
        }))
    }
}();
"use strict";
! function () {
    var e = function () {
        function e(e) {
            if (this.$legend = e.find(".range-legend"), this.$component = e.find(".range-outer"), this.$input = e.find("input"), this.startEdge = this.$component.data("start"), this.isDouble = !!this.$component.data("double"), this.endEdge = this.$component.data("end"), this.range = this.endEdge - this.startEdge, this.barWidth = this.$component.width(), this.step = this.$component.data("step") || 1, this.steps = Math.round(this.range / this.step), this.legendType = this.$legend.data("type"), this.legendText = 1 == +this.$legend.data("text"), this.animated = !0, this.duration = this.steps < 10 && 1 / this.steps * 300, this.fractExponent = Math.max(this.getFract(this.startEdge), this.getFract(this.endEdge), this.getFract(this.step)), this.fractDevider = Math.pow(10, this.fractExponent), this.$value = $(".range-value", this.$component), this.$endRunner = $(".range-runner-right", this.$component), this.$endRunnerTip = $(".runner-tip", this.$endRunner), this.$endRunnerValue = $(".value", this.$endRunner), this.endRunnerWidth = this.$endRunner.width(), this.$startRunner = $(".range-runner-left", this.$component), this.$startRunnerValue = $(".value", this.$startRunner), this.$startRunnerTip = $(".runner-tip", this.$startRunner), this.startRunnerWidth = this.$startRunner.width(), this.defaultShift = this.$endRunner.width() / 2, this.activeRunner = !1, this.isDouble) {
                var t = this.$input.data("value").split(" — ");
                this.startValue = +t[0], this.endValue = +t[1]
            } else this.endValue = +this.$input.data("value"), this.startValue = +this.startEdge;
            this.endParams = {}, this.drawLegend(), this.setEvents(), this.setRunnersValue()
        }
        var t = e.prototype;
        return t.formatN = function (e) {
            return (e < 0 ? "-" : "") + flexbe_cli.locale.formatNumber(e, this.fractExponent)
        }, t.getFract = function (e) {
            var t = ("" + e).split(".");
            return t[1] && t[1].length || 0
        }, t.drawLegend = function () {
            var e = this;
            if (this.legendText) return !1;
            var t = this.$legend.find(".from"),
                n = this.$legend.find(".to");
            if (t.text(this.formatN(this.startEdge)), n.text(this.formatN(this.endEdge)), "complex" !== this.legendType) return !1;
            this.$legend.find(".legend-point:not(.from, .to)").off("click").remove(), this.$legend.removeClass("complex").addClass("limits");
            for (var s, i = [("" + this.formatN(this.startEdge)).length, ("" + this.formatN(this.endEdge)).length, ("" + this.formatN(this.step)).length], a = (i[0] + i[1] + i[2]) / 3, r = Math.max(this.startEdge, this.endEdge), u = [5 * this.step * this.fractDevider / this.fractDevider], o = 1; o <= 12; o += 1) {
                var h = Math.pow(10, o) * this.step;
                h < r && D(u, h, this.fractDevider)
            }
            for (var d = Math.ceil(this.$legend.find(i[0] > i[1] ? ".from" : ".to").width() / Math.max(i[1], i[0])), l = Math.round(.83 * this.barWidth / (d * a)), c = this.range > 0 ? 1 : -1, f = Math.min(l, 10); f >= 3; f -= 1) {
                var p = C(this.step, Math.abs(this.steps), f, u);
                if (p && Number.isInteger(p / this.step) && Number.isInteger(this.range / p)) {
                    s = p;
                    break
                }
            }
            if (!s || !Number.isInteger(this.range / (s * c)) || this.range / (s * c) < 3)
                for (var v = Math.min(Math.round(this.range / this.step), l, 10); v >= 2; v -= 1) {
                    var m = this.roundFraction(this.range / v);
                    if (m % this.step == 0) {
                        s = m * c;
                        break
                    }
                }
            var g = this.roundFraction(this.range / (s * c));
            if (s && Number.isInteger(g)) {
                for (var R = [], b = 1; b < g; b += 1) {
                    var V = Math.round((this.startEdge + s * b * c) * this.fractDevider) / this.fractDevider;
                    R.push('<div class="legend-point" data-value="' + V + '">' + this.formatN(V) + "</div>")
                }
                g > 2 && (this.$legend.attr("data-count", g), this.$legend.removeClass("limits").addClass("complex"));
                var E = $(R.join(""));
                this.$legend.find(".from").after(E)
            } else this.$legend.removeClass("complex").addClass("limits");

            function C(e, t, n, s) {
                return s.includes(t / n * e) ? t / n * e : s.includes((t + 1) / n * e) ? (t + 1) / n * e : s.includes((t + 2) / n * e) ? (t + 2) / n * e : s.includes((t + 3) / n * e) ? (t + 3) / n * e : s.includes((t + 4) / n * e) ? (t + 4) / n * e : s.includes((t + 5) / n * e) ? (t + 5) / n * e : s.includes((t + 6) / n * e) ? (t + 6) / n * e : s.includes((t + 7) / n * e) ? (t + 7) / n * e : s.includes((t + 8) / n * e) ? (t + 8) / n * e : !!s.includes((t + 9) / n * e) && (t + 9) / n * e
            }

            function D(e, t, n) {
                for (var s = 1; s < 10; s += 1) e.push(Math.round(t * s * n) / n), e.push(Math.round(t * s * n + t / 2) / n)
            }
            this.$legend.find(".legend-point:not(.to), .legend-point:not(.from)").each((function (t, n) {
                $(n).on("click", (function () {
                    if (e.updateBarWidth(), e.isDouble) {
                        var t = (e.startValue + e.endValue) / 2,
                            s = +$(n).data("value"),
                            i = e.startEdge < e.endEdge ? 1 : -1;
                        s * i >= t * i ? e.endValue = s : e.startValue = s
                    } else e.endValue = $(n).data("value");
                    e.setRunnersValue()
                }))
            }))
        }, t.roundFraction = function (e) {
            return Math.round(1e10 * e) / 1e10
        }, t.setRunnersValue = function (e) {
            var t = this;
            if (void 0 === e && (e = !1), !Number.isFinite(this.endValue) || !Number.isFinite(this.range) || this.isDouble && !Number.isFinite(this.startValue)) return !1;
            var n = this.startEdge < this.endEdge ? 1 : -1;
            "start" === this.activeRunner ? this.startValue * n <= this.startEdge * n ? this.startValue = this.startEdge : this.startValue * n >= this.endValue * n && (this.startValue = this.endValue) : this.endValue * n >= this.endEdge * n ? this.endValue = this.endEdge : this.endValue * n <= this.startValue * n && (this.endValue = this.startValue);
            var s = this.isDouble ? this.startValue : this.startEdge,
                i = this.isDouble ? (this.startValue - this.startEdge) / (this.range / 100) : 0,
                a = (this.endValue - s) / (this.range / 100);
            if (this.endValue = Math.round(this.endValue * this.fractDevider) / this.fractDevider, this.startValue = Math.round(this.startValue * this.fractDevider) / this.fractDevider, requestAnimationFrame((function () {
                    t.$endRunnerValue.text(t.formatN(t.endValue)), t.$startRunnerValue.text(t.formatN(t.startValue))
                })), flexbe_cli.run.is_mobile) {
                var r = this.$endRunnerTip.width() / 2,
                    u = this.barWidth * (a / 100);
                if ("end" === this.activeRunner)
                    if (u > this.barWidth - r) {
                        var o = u + r - this.barWidth;
                        this.$endRunnerTip.css({
                            transform: "translateX(-" + o + "px)"
                        })
                    } else if (u < r) {
                    var h = r - u;
                    this.$endRunnerTip.css({
                        transform: "translateX(" + h + "px)"
                    })
                } else this.$endRunnerTip.css({
                    transform: "translateX(0)"
                });
                else {
                    var d = this.$startRunnerTip.width() / 2;
                    if (u > this.barWidth - d) {
                        var l = u + r - this.barWidth;
                        this.$startRunnerTip.css({
                            transform: "translateX(" + l + "px)"
                        })
                    } else if (u < d) {
                        var c = d - u;
                        this.$startRunnerTip.css({
                            transform: "translateX(-" + c + "px)"
                        })
                    } else this.$startRunnerTip.css({
                        transform: "translateX(0)"
                    })
                }
            }
            this.$value.css({
                width: a + "%",
                marginLeft: i + "%"
            }), e || (this.isDouble ? this.$input.val(this.startValue + " — " + this.endValue) : this.$input.val(this.endValue))
        }, t.getValueFromLength = function (e) {
            var t = this.range / (this.barWidth / e);
            return (Math.round(t / this.step) + this.startEdge / this.step) * this.step
        }, t.applyEndPosition = function (e) {
            return this["start" === this.activeRunner ? "startValue" : "endValue"] = this.getValueFromLength(e), this.setRunnersValue(), !0
        }, t.touchHendler = function (e) {
            if (!this.endParams.active || 1 !== e.touches.length) return $("body")[0].removeEventListener("touchmove", this.touchHendler), !1;
            this.toggleAnimation(!1), e.preventDefault(), e.stopPropagation();
            var t = e.touches[0].pageX - this.endParams.left - this.endParams.shift;
            this.applyEndPosition(t)
        }, t.startWatchingEvents = function (e) {
            void 0 === e && (e = this.defaultShift), this.endParams = {
                active: !0,
                left: this.$component.offset().left,
                shift: e
            }, clearTimeout(this.calmRunnersTimeout), "end" === this.activeRunner ? this.$endRunner.addClass("active") : this.$startRunner.addClass("active")
        }, t.toggleAnimation = function (e) {
            e ? Math.abs(this.barWidth / this.steps) < 15 ? this.$component.addClass("animated") : (this.$component.removeClass("active-animation"), this.duration && this.$component.removeClass("animation-speed-" + (12 - Math.abs(Math.round(this.steps))))) : Math.abs(this.barWidth / this.steps) < 15 ? this.$component.removeClass("animated") : (this.$component.addClass("active-animation"), this.duration && this.$component.addClass("animation-speed-" + (12 - Math.abs(Math.round(this.steps)))))
        }, t.afterRunnerReleased = function () {
            this.endParams.active && ("start" === this.activeRunner ? this.$startRunner.focus() : this.$endRunner.focus()), this.endParams.active = !1, this.debounceActive(), this.barWidth / this.steps < 15 ? this.$component.addClass("animated") : this.$component.removeClass("active-animation"), this.toggleAnimation(!0)
        }, t.updateBarWidth = function () {
            var e = this.$component.width();
            e !== this.barWidth && (this.barWidth = e, "complex" === this.legendType && this.drawLegend())
        }, t.setEvents = function () {
            var e = this,
                t = $(window),
                n = this;

            function s(e) {
                if (!n.endParams.active) return t.off("mousemove.dragRange"), !1;
                n.toggleAnimation(!1);
                var s = e.pageX - n.endParams.left - n.endParams.shift;
                return n.applyEndPosition(s), !0
            }
            this.$component.on("resize", (function () {
                e.updateBarWidth()
            })), this.$component.on("touchstart", (function (n) {
                if (1 !== n.touches.length) return !1;
                if (e.isDouble) {
                    var s = (e.$endRunner.offset().left + e.$startRunner.offset().left) / 2;
                    e.activeRunner = n.touches[0].pageX >= s ? "end" : "start", "start" === e.activeRunner ? (e.$startRunner.addClass("upper-runner"), e.$endRunner.removeClass("upper-runner")) : (e.$endRunner.addClass("upper-runner"), e.$startRunner.removeClass("upper-runner"))
                } else e.activeRunner = "end";
                n.stopPropagation(), e.updateBarWidth();
                var i = n.touches[0].pageX - e.$value.offset().left;
                e.startWatchingEvents(), e.applyEndPosition(i - e.defaultShift), t[0].addEventListener("touchmove", e.touchHendler.bind(e), {
                    passive: !1
                }), t.on("touchend.range", (function () {
                    e.afterRunnerReleased(), t[0].removeEventListener("touchmove", e.touchHendler), t.off("touchend.range")
                }))
            })), this.$component.on("mousedown", (function (n) {
                var i = n.pageX - e.$component.offset().left;
                if (e.isDouble) {
                    var a = (e.$endRunner.offset().left + e.$startRunner.offset().left) / 2;
                    e.activeRunner = n.pageX >= a ? "end" : "start", "start" === e.activeRunner ? (e.$startRunner.addClass("upper-runner"), e.$endRunner.removeClass("upper-runner")) : (e.$endRunner.addClass("upper-runner"), e.$startRunner.removeClass("upper-runner"))
                }
                e.updateBarWidth(), e.startWatchingEvents(), e.applyEndPosition(i - e.defaultShift), "start" === e.activeRunner ? e.$startRunner.focus() : e.$endRunner.focus(), t.on("mousemove.dragRange", s), t.on("mouseup.range", (function () {
                    e.afterRunnerReleased(), t.off("mousemove.dragRange"), t.off("mouseup.range")
                }))
            })), this.$endRunner.on("touchstart", (function (n) {
                if (1 !== n.touches.length) return !1;
                n.stopPropagation(), e.updateBarWidth(), e.activeRunner = "end", e.$startRunner.removeClass("upper-runner"), e.$endRunner.addClass("upper-runner"), n.stopPropagation(), e.startWatchingEvents(n.touches[0].pageX - e.$endRunner.offset().left), e.toggleAnimation(!1), t[0].addEventListener("touchmove", e.touchHendler.bind(e), {
                    passive: !1
                }), t.on("touchend.range", (function () {
                    e.afterRunnerReleased(), t[0].removeEventListener("touchmove", e.touchHendler), t.off("touchend.range")
                }))
            })), this.$startRunner.on("touchstart", (function (n) {
                if (1 !== n.touches.length) return !1;
                n.stopPropagation(), e.updateBarWidth(), e.activeRunner = "start", e.$startRunner.addClass("upper-runner"), e.$endRunner.removeClass("upper-runner"), n.stopPropagation(), e.startWatchingEvents(n.touches[0].pageX - e.$startRunner.offset().left), e.toggleAnimation(!1), t[0].addEventListener("touchmove", e.touchHendler.bind(e), {
                    passive: !1
                }), t.on("touchend.range", (function () {
                    e.afterRunnerReleased(), t[0].removeEventListener("touchmove", e.touchHendler), t.off("touchend.range")
                }))
            })), this.$endRunner.on("mousedown", (function (n) {
                n.stopPropagation(), e.activeRunner = "end", e.$startRunner.removeClass("upper-runner"), e.$endRunner.addClass("upper-runner"), e.updateBarWidth(), e.$endRunner.focus(), e.startWatchingEvents(n.pageX - e.$endRunner.offset().left), e.toggleAnimation(!1), t.on("mousemove.dragRange", s), t.on("mouseup.range", (function () {
                    e.afterRunnerReleased(), t.off("mousemove.dragRange"), t.off("mouseup.range")
                }))
            })), this.$startRunner.on("mousedown", (function (n) {
                n.stopPropagation(), e.activeRunner = "start", e.$startRunner.addClass("upper-runner"), e.$endRunner.removeClass("upper-runner"), e.updateBarWidth(), e.$startRunner.focus(), e.startWatchingEvents(n.pageX - e.$startRunner.offset().left), e.toggleAnimation(!1), t.on("mousemove.dragRange", s), t.on("mouseup.range", (function () {
                    e.afterRunnerReleased(), t.off("mousemove.dragRange"), t.off("mouseup.range")
                }))
            })), this.$legend.find(".legend-point.to, .legend-point.from").each((function (t, n) {
                $(n).on("click", (function () {
                    if (e.updateBarWidth(), e.isDouble) {
                        var t = e.startEdge < e.endEdge ? 1 : -1,
                            s = (e.startValue + e.endValue) / 2,
                            i = +$(n).data("value");
                        i * t >= s * t ? e.endValue = i : e.startValue = i
                    } else e.endValue = $(n).data("value");
                    e.setRunnersValue()
                }))
            })), this.$input.on("change", (function () {
                if (e.isDouble) {
                    var t = e.$input.val().split(" — ");
                    e.startValue = +t[0], e.endValue = +t[1]
                } else e.endValue = +e.$input.val();
                e.setRunnersValue(!0)
            })), this.$startRunner.on("keyup", (function (t) {
                t.preventDefault(), e.activeRunner = "start", e.handleKeydown(t, e.$startRunner)
            })), this.$endRunner.on("keyup", (function (t) {
                t.preventDefault(), e.activeRunner = "end", e.handleKeydown(t, e.$endRunner)
            })), this.$startRunner.on("keydown", (function (t) {
                e.activeRunner = "start", e.handleKeyup(t, e.$startRunner)
            })), this.$endRunner.on("keydown", (function (t) {
                e.activeRunner = "end", e.handleKeyup(t, e.$endRunner)
            })), this.$startRunner.on("blur", (function () {
                e.handleBlur()
            }))
        }, t.handleBlur = function () {
            this.movingInterval && (clearInterval(this.movingInterval), this.movingInterval = !1), this.movingDebounceTimeout && (clearTimeout(this.movingDebounceTimeout), this.movingDebounceTimeout = !1)
        }, t.handleKeydown = function (e, t) {
            if (this.movingInterval && (clearInterval(this.movingInterval), this.movingInterval = !1), this.movingDebounceTimeout && (clearTimeout(this.movingDebounceTimeout), this.movingDebounceTimeout = !1), [37, 38, 39, 40].includes(e.keyCode)) {
                var n = e.shiftKey ? 10 : 1,
                    s = "start" === this.activeRunner ? "startValue" : "endValue";
                38 === e.keyCode || 39 === e.keyCode ? this[s] = (this[s] / this.step + n) * this.step : 37 !== e.keyCode && 40 !== e.keyCode || (this[s] = (this[s] / this.step - n) * this.step), t.addClass("active"), this.debounceActive(), this.setRunnersValue()
            }
        }, t.handleKeyup = function (e, t) {
            9 !== e.keyCode && [37, 38, 39, 40].includes(e.keyCode) && (e.preventDefault(), t.addClass("active"), this.debounceActive(), this.startDebouncedMove(e))
        }, t.startDebouncedMove = function (e) {
            var t = this;
            this.movingDebounceTimeout && (clearTimeout(this.movingDebounceTimeout), this.movingDebounceTimeout = !1), this.movingDebounceTimeout = setTimeout((function () {
                t.movingInterval = setInterval((function () {
                    t.debounceActive();
                    var n = e.shiftKey ? 10 : 1,
                        s = "start" === t.activeRunner ? "startValue" : "endValue";
                    38 === e.keyCode || 39 === e.keyCode ? t[s] = (Math.round(t[s] / t.step) + n) * t.step : 37 !== e.keyCode && 40 !== e.keyCode || (t[s] = (Math.round(t[s] / t.step) - n) * t.step), t.setRunnersValue()
                }), 50)
            }), 300)
        }, t.debounceActive = function () {
            var e = this;
            this.calmRunnersTimeout && clearTimeout(this.calmRunnersTimeout), this.calmRunnersTimeout = setTimeout((function () {
                e.$endRunner.removeClass("active"), e.$startRunner.removeClass("active")
            }), 500)
        }, e
    }();
    flexbe_cli.components.classes.rangeInput = e
}();
"use strict";

function _assertThisInitialized(t) {
    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t
}

function _inheritsLoose(t, e) {
    t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e
}

function _extends() {
    return (_extends = Object.assign || function (t) {
        for (var e = 1; e < arguments.length; e++) {
            var i = arguments[e];
            for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (t[n] = i[n])
        }
        return t
    }).apply(this, arguments)
}! function () {
    function t(t, e, i, n) {
        var a = $(t),
            s = e ? '[data-component="' + e + '"]' : "[data-component]";
        a.is(s) ? a.trigger(i, n) : $(t).find(s).each((function (t, e) {
            $(e).trigger(i, n)
        }))
    }

    function e(t) {
        return ["normal", "active"].includes(t)
    }
    var i = function () {
            function t(t, e) {
                if (e = _extends({
                        init: !0,
                        targets: "span",
                        active: 0
                    }, e), "object" != typeof t || !t.querySelectorAll) return !1;
                Array.isArray(e.targets) || e.targets instanceof NodeList || e.targets instanceof HTMLCollection ? this.targets = Array.from(e.targets) : this.targets = Array.from(t.querySelectorAll(e.targets)), this.pagination = t, this.options = e, this.active = e.active, this.visible = e.visible || +t.getAttribute("data-bullets-visible"), this.visible || (this.visible = this.targets.length >= 8 ? 3 : this.targets.length), this.init()
            }
            var i = t.prototype;
            return i.init = function () {
                this.bindEvents(), this.options.init && this.setActive(this.active, !0)
            }, i.bindEvents = function () {
                var t = this.targets,
                    e = this.options,
                    i = $(t);
                "function" == typeof e.onClick && i.off(".bpc").on("click.bpc", (function (t) {
                    var n = $(t.currentTarget),
                        a = +i.filter('[data-state="active"]').attr("data-index"),
                        s = +n.attr("data-index");
                    e.onClick(s, a)
                }))
            }, i.setActive = function (t, i) {
                var n, a, s = this.targets,
                    o = this.active,
                    r = this.oldMap,
                    l = this.newMap;
                if (!s.length) return t;
                if (t = Math.max(Math.min(t, s.length - 1), 0), r = r && r.length ? r : s.map((function (t) {
                        var e = t.getAttribute("data-state") || "hidden";
                        return {
                            target: t,
                            state: e
                        }
                    })), (i ? 0 : r.reduce((function (t, i) {
                        return t + (e(i.state) ? 1 : 0)
                    }), 0)) !== this.visible) a = Math.min(t + this.visible - 1, s.length - 1), n = Math.max(a - this.visible + 1, 0), l = r.map((function (t, e) {
                    var i = t.target;
                    t.state;
                    return {
                        target: i,
                        state: e >= n && e <= a ? "normal" : "hidden"
                    }
                }));
                else {
                    var p = function t(i) {
                        var n = i.from,
                            a = i.to,
                            s = i.map,
                            o = i.move,
                            r = void 0 === o ? 0 : o,
                            l = s[a - r],
                            p = l && e(l.state);
                        return !l || p ? r : n < a ? t({
                            from: n,
                            to: a,
                            map: s,
                            move: r + 1
                        }) : a < n ? t({
                            from: n,
                            to: a,
                            map: s,
                            move: r - 1
                        }) : r
                    }({
                        from: o,
                        to: t,
                        map: r
                    });
                    l = r.map((function (t, i) {
                        var s = t.target,
                            o = t.state,
                            l = r[i - p];
                        return "normal" === (o = l && l.state && e(l.state) ? "normal" : "hidden") && (void 0 === n && (n = i), a = i), {
                            target: s,
                            state: o
                        }
                    }))
                }
                return l[t].state = "active", l[n - 1] && (l[n - 1].state = "next"), l[n - 2] && (l[n - 2].state = "more"), l[a + 1] && (l[a + 1].state = "next"), l[a + 2] && (l[a + 2].state = "more"), s.forEach((function (t, e) {
                    t.setAttribute("data-state", l[e].state)
                })), this.active = t, this.oldMap = l, t
            }, t
        }(),
        n = function () {
            function t(t, e) {
                this.options = _extends({
                    init: !0,
                    tag: "span"
                }, e), this.pagination = t, this.tag = this.options.tag, this.filled = !1, this.states = ["hidden", "more", "next", "active", "next", "more", "hidden"], this.init()
            }
            var e = t.prototype;
            return e.init = function () {
                this.bindEvents(), this.options.init && this.fillPagination({
                    states: this.states,
                    force: !0
                })
            }, e.bindEvents = function () {
                var t = this.tag,
                    e = this.pagination,
                    i = this.options,
                    n = $(e);
                "function" == typeof i.onClick && n.off(".bpc").on("click.bpc", t, (function (t) {
                    var e = $(t.currentTarget),
                        n = +e.siblings('[data-state="active"]').attr("data-index"),
                        a = +e.attr("data-index") - n;
                    i.onClick(a)
                }))
            }, e.setActive = function (t) {
                var e = this,
                    i = this.states,
                    n = this.filled && t;
                if (this.fillPagination({
                        states: i,
                        force: !0
                    }), n) {
                    this.pagination.offsetWidth;
                    var a = i.map((function (e, n) {
                        return i[n + ("prev" === t ? 1 : -1)] || "hidden"
                    }));
                    requestAnimationFrame((function () {
                        e.fillPagination({
                            states: a
                        })
                    }))
                }
            }, e.fillPagination = function (t) {
                var e = void 0 === t ? {} : t,
                    i = e.states,
                    n = e.force,
                    a = $(this.pagination),
                    s = this.tag;
                if (this.filled = !0, n) {
                    var o = i.reduce((function (t, e, i) {
                        return t + "<" + s + ' data-index="' + i + '" class="swiper-pagination-bullet" data-state="' + e + '"></' + s + ">"
                    }), "");
                    a.html(o)
                } else a.find(s).each((function (t, e) {
                    var n = $(e);
                    n.attr("data-state", i[t] || "hidden"), n.attr("data-index", t)
                }))
            }, t
        }(),
        a = function (e) {
            function a() {
                for (var t, i = arguments.length, n = new Array(i), a = 0; a < i; a++) n[a] = arguments[a];
                var s = _assertThisInitialized(t = e.call.apply(e, [this].concat(n)) || this).component;
                t.require = ["/_s/lib/swiper/swiper.v4.js?450"], t.is = "slider", t.swiper = null, t.wrapperEl = s.querySelector(".slider-wrapper"), t.paginationEl = s.querySelector(".slider-pagination"), t.prevEl = s.querySelector('.slider-prev, [data-direction="prev"]'), t.nextEl = s.querySelector('.slider-next, [data-direction="next"]');
                var o = t.paginationEl && t.paginationEl.getAttribute("data-type") || "bullets";
                return t.options = {
                    count: s.getAttribute("data-count"),
                    paginationType: o,
                    loop: Boolean(!flexbe_cli.is_admin && Math.floor(s.getAttribute("data-loop"))),
                    autoplay: !flexbe_cli.is_admin && Math.floor(s.getAttribute("data-autoplay")) || !1,
                    effect: !flexbe_cli.is_admin && s.getAttribute("data-effect") || "slide"
                }, t
            }
            _inheritsLoose(a, e);
            var s = a.prototype;
            return s.onInit = function () {
                this.isUpdated && this.isLoaded && this.initSwiper()
            }, s.onLoad = function () {
                if (!this.core.inScreen && !this.core.inBeside) return !1;
                this.initSwiper()
            }, s.onView = function (t) {
                var e = t.state;
                this.isLoaded && (e && !this.swiper && this.initSwiper(), this.swiper && this.toggleAutoplay({
                    state: e
                }))
            }, s.onScreen = function (t) {
                if (t.state) return !!this.isLoaded && void(this.swiper || this.initSwiper())
            }, s.onBeside = function (t) {
                t.state && this.isLoaded && !this.swiper && this.initSwiper()
            }, s.onResize = function () {
                this.setComponentSize()
            }, s.initSwiper = function () {
                var e = this;
                if (this.swiper || this.options.count <= 1 || "undefined" == typeof Swiper) return !1;
                this.setComponentSize();
                var a = this.options,
                    s = this.component,
                    o = this.core,
                    r = this.root,
                    l = this.index,
                    p = this.wrapperEl,
                    d = this.paginationEl,
                    c = this.prevEl,
                    h = this.nextEl,
                    u = (o && o.id || "-") + ":" + l,
                    f = a.count,
                    g = a.loop,
                    v = a.paginationType,
                    m = a.effect,
                    b = this.owner.closest(".swiper-inited"),
                    y = {
                        prevEl: c,
                        nextEl: h
                    },
                    x = {
                        el: d,
                        type: v,
                        clickable: 4 !== flexbe_cli.theme_id || !g,
                        modifierClass: "slider-pagination-"
                    },
                    w = !!a.autoplay && {
                        delay: 1e3 * a.autoplay,
                        stopOnLastSlide: !g
                    },
                    _ = {};
                "thumbs" === v && (x.type = !1, x.el = null, _.swiper = {
                    el: d,
                    wrapperClass: "thumbs",
                    slideClass: "thumb-item",
                    loop: !1,
                    slidesPerView: "auto",
                    freeMode: !0,
                    freeModeSticky: !0,
                    roundLengths: !1,
                    a11y: !1
                });
                var A = 0;
                if (flexbe_cli.is_admin) {
                    r._sliderState || (r._sliderState = {});
                    var C = r._sliderState;
                    C[u] && (A = Math.max(0, Math.min(f - 1, C[u]) || 0)), C[u] = A
                }
                var S = new Swiper(p, {
                    init: !1,
                    speed: 450,
                    nested: b,
                    wrapperClass: "slider",
                    slideClass: "slider-item",
                    slideActiveClass: "active",
                    noSwipingClass: "redactor-box",
                    initialSlide: A,
                    navigation: y,
                    pagination: x,
                    thumbs: _,
                    autoplay: w,
                    effect: m,
                    loop: g,
                    fadeEffect: {
                        crossFade: "fade" === m
                    },
                    observer: !0,
                    observeParents: !0,
                    simulateTouch: !flexbe_cli.is_admin,
                    a11y: !1,
                    touchReleaseOnEdges: !0,
                    roundLengths: !0,
                    touchMoveStopPropagation: !1,
                    preventClicksPropagation: !0,
                    preventClicks: !0,
                    runCallbacksOnInit: !1
                });
                this.swiper = S, S.on("init", (function () {
                    ($(p).addClass("swiper-inited"), $(c).add(h).removeClass("disabled"), "thumbs" === v && $(d).removeClass("disabled"), g) && ($(".swiper-slide-duplicate", s).find(".component-image").removeAttr("data-lg"), flexbe_cli.components.initComponents({
                        core: o
                    }))
                }));
                var E = !1,
                    I = !1;
                g && S.on("slideChangeTransitionEnd", (function () {
                    if (S.activeIndex !== S.realIndex + 1) {
                        var t = S.autoplay && S.autoplay.running;
                        E = !0, S.slideToLoop(S.realIndex, 0), t && e.toggleAutoplay({
                            state: !0
                        })
                    } else E = !1
                })), S.on("slideChange", (function () {
                    if (!E) {
                        var i = S.slides[S.previousIndex],
                            n = S.slides[S.activeIndex],
                            a = n && n.getAttribute("data-type") || "image";
                        s.setAttribute("data-current-index", S.realIndex), s.setAttribute("data-current-content", a), flexbe_cli.is_admin && (r._sliderState[u] = S.realIndex), setTimeout((function () {
                            t(i, !1, "sliderDeactivate"), t(n, !1, "sliderActivate"), S.initialized && !I && (I = !0, t(e.$component, "image", "setImage"))
                        }), 10)
                    }
                })), S.on("paginationRender", (function () {
                    4 === flexbe_cli.theme_id && "bullets" === x.type && (g ? e.loopPagination = new n(d, {
                        init: !1,
                        tag: "span",
                        onClick: function (t) {
                            t < 0 ? S.slidePrev() : t > 0 && S.slideNext()
                        }
                    }) : e.bulletsPagination = new i(d, {
                        init: !1,
                        targets: "span",
                        active: S.realIndex
                    })), $(d).removeClass("disabled")
                })), S.on("paginationUpdate", (function () {
                    if (!E)
                        if (e.bulletsPagination) e.bulletsPagination.setActive(S.realIndex);
                        else if (e.loopPagination) {
                        var t = S.previousIndex < S.activeIndex ? "next" : "prev";
                        e.loopPagination.setActive(t)
                    }
                })), S.init(), this.toggleAutoplay({
                    state: this.core.inView
                })
            }, s.toggleAutoplay = function (t) {
                var e = t.state;
                if (!this.swiper) return !1;
                var i = this.swiper;
                this.options.autoplay && i.autoplay && (e && !i.autoplay.running ? i.autoplay.start() : !e && i.autoplay.running && i.autoplay.stop())
            }, s.slideTo = function (t, e) {
                void 0 === e && (e = !0), this.swiper && void 0 !== this.swiper.realIndex && this.swiper.realIndex !== t && (e ? this.swiper.slideToLoop(t) : this.swiper.slideTo(t))
            }, s.setComponentSize = function () {
                this.component.style.width = "";
                var t = this.component.getBoundingClientRect().width;
                if (t % 1 > 0 && (this.component.style.width = Math.round(t) + "px"), "thumbs" === this.options.paginationType) {
                    var e = $(this.paginationEl).find(".thumb-item"),
                        i = e.length;
                    e.css({
                        marginRight: "",
                        width: ""
                    });
                    var n = getComputedStyle(e[0]),
                        a = parseInt(n.width, 10),
                        s = parseInt(n.marginRight, 10),
                        o = Math.max(4, Math.ceil(t / (a + s)));
                    i >= 4 && (i === o + 1 || i === o - 1) && (o = i);
                    var r = (t + s) / o - s;
                    e.css({
                        width: r + "px",
                        marginRight: s + "px"
                    })
                }
                this.swiper && this.swiper.update()
            }, a
        }(BaseComponent);
    flexbe_cli.components.classes.slider = a, flexbe_cli.components.classes.bulletsPagination = i, flexbe_cli.components.classes.bulletsLoopPagination = n
}();
"use strict";

function _extends() {
    return (_extends = Object.assign || function (t) {
        for (var e = 1; e < arguments.length; e++) {
            var i = arguments[e];
            for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (t[n] = i[n])
        }
        return t
    }).apply(this, arguments)
}

function _inheritsLoose(t, e) {
    t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e
}! function () {
    var t = function (t) {
        function e() {
            for (var e, i = arguments.length, n = new Array(i), o = 0; o < i; o++) n[o] = arguments[o];
            return (e = t.call.apply(t, [this].concat(n)) || this).is = "button", e
        }
        _inheritsLoose(e, t), e.getProductInfo = function (t, e) {
            void 0 === e && (e = !1);
            var i = flexbe_cli.theme_id < 4 ? t.closest("[data-item-id], .modal-data").eq(0) : t.parents("[data-item-id], .content-zone, .flexbe-card, .flexbe-column, .modal-content").last(),
                n = e ? {} : t._core && t._core.productData || t.data("product");
            if (!1 !== n) {
                if ((n = _extends({}, n)).count || (n.count = 1), !n.img) {
                    var o = i.find("[data-img-id]").filter((function (t, e) {
                            return !$(e).closest(".swiper-slide-duplicate").length
                        })).eq(0),
                        a = o.attr("data-img-id"),
                        c = o.attr("data-img-name");
                    n.img = !(!a || !c) && "/img/" + a + "_200/" + c
                }
                if (!n.title) {
                    var l = i.find(".name, .title, .item-title, .text_title, .element-text--title, .text-style-title, .text-style-subtitle").eq(0);
                    l.length || (l = i.find(".text-style-conntent").eq(0)), n.title = l.text().trim() || ""
                }
                if (!n.price && 0 !== n.price) {
                    var r = i.find(".price, .item-price, .main-price, .element-text--price").eq(0).clone();
                    r.length || (r = i.clone()), $("body").append(r), r.find("del, s, strike").remove();
                    var s = String(r[0] && r[0].innerText || "");
                    s = s.replace(/\n/g, "<br>").replace(/\.$/, "").replace(/\u00a0/g, " "), r.remove(), s = (s = (s = s.match(/(?:\D ?)?(?:[1-9][ ,.]?[0-9]{0,3}[ ,.]?[0-9]{0,3})(?:[\.,][0-9]{1,2})?(?: ?\D)?/g) || []).find((function (t) {
                        return t.includes(flexbe_cli.locale.currency.symbol)
                    })) || s[0] || "").replace(/-/g, ""), s = flexbe_cli.locale.parseMoney(s), n.price = s || 0
                }
            }
            return n
        };
        var i = e.prototype;
        return i.onInit = function () {
            this.buttonAction = this.$component.attr("data-action"), this.$component.off("click.core-component").on("click.core-component", this.onClick.bind(this))
        }, i.onView = function () {
            this.onScreen.apply(this, arguments)
        }, i.onScreen = function (t) {
            t.state && this.setProduct()
        }, i.onBeside = function (t) {
            t.state && this.setProduct()
        }, i.setProduct = function () {
            this.productData || ["link", "file", "close", "quiz"].includes(this.buttonAction) || (this.productData = this.constructor.getProductInfo(this.$component), this.$component.removeAttr("data-product"))
        }, i.onClick = function (t) {
            var e = this.$component,
                i = this.buttonAction,
                n = this.core.id;
            if (!i) return !0;
            if (flexbe_cli.is_admin && ("quiz" !== i || $(t.target).is(".editor-overlay"))) return t.preventDefault(), !0;
            var o = e.attr("data-modal-id");
            flexbe_cli.stat.reachGoals({
                mainGoal: flexbe_cli.stat.getGoal(i, o),
                goal: e.find('[name="goal"]').val(),
                htmlGoal: e.find('[name="goal_html"]').val()
            });
            var a = !1;
            if (!["link", "file", "close", "quiz"].includes(i) && !(a = this.productData || {}).id) {
                var c = flexbe_cli.p_id,
                    l = e.closest("[data-item-id]").attr("data-item-id") || 0,
                    r = this.root && this.root.getAttribute("data-multivar") || "";
                a.id = "" + c + n + l + r
            }
            if (a && (a.title && "-" !== a.title || a.price) || (a = !1), o && i.match(/^modal|^form/)) {
                if (!flexbe_cli.modal.find(o)) o = parseInt(String(n).split("_")[0], 10) + "_" + o;
                flexbe_cli.events.emit("mobilemenu_command", {
                    command: "close"
                }), flexbe_cli.events.emit("modal_command", {
                    command: "open",
                    id: o,
                    data: {
                        items: a ? [a] : []
                    }
                })
            } else if (a && i.match(/^cart$/)) {
                var s = e.closest(".m_modal").length;
                e.addClass("animate-add-to-cart"), setTimeout((function () {
                    e.removeClass("animate-add-to-cart"), s && (flexbe_cli.events.emit("modal_command", {
                        command: "close"
                    }), flexbe_cli.events.emit("cart_command", {
                        command: "add",
                        item: a
                    }))
                }), s ? 450 : 1600), s || flexbe_cli.events.emit("cart_command", {
                    command: "add",
                    item: a
                })
            } else "quiz" === i ? flexbe_cli.events.emit("quiz_command", {
                command: "start",
                id: n
            }) : "close" === i && flexbe_cli.events.emit("modal_command", {
                command: "close"
            })
        }, e
    }(BaseComponent);
    flexbe_cli.components.classes.button = t
}();
"use strict";

function _inheritsLoose(e, o) {
    e.prototype = Object.create(o.prototype), e.prototype.constructor = e, e.__proto__ = o
}! function () {
    var e = function (e) {
            function o() {
                for (var o, t = arguments.length, n = new Array(t), a = 0; a < t; a++) n[a] = arguments[a];
                return (o = e.call.apply(e, [this].concat(n)) || this).is = "map", o.$map = o.$component, o.data = o.$component.data("data"), o
            }
            _inheritsLoose(o, e);
            var t = o.prototype;
            return t.onInit = function () {
                this.isUpdated && this.isLoaded && this.createMap()
            }, t.onLoad = function () {
                (this.core.inScreen || this.core.inBeside) && this.createMap()
            }, t.onScreen = function (e) {
                if (!e.state || !this.isLoaded || this.isCreated) return !1;
                this.isCreated = !0, this.createMap()
            }, t.onBeside = function (e) {
                if (!e.state || !this.isLoaded || this.isCreated) return !1;
                this.isCreated = !0, this.createMap()
            }, t.createMap = function () {}, o
        }(BaseComponent),
        o = function (e) {
            function o() {
                for (var o, t = arguments.length, n = new Array(t), a = 0; a < t; a++) n[a] = arguments[a];
                o = e.call.apply(e, [this].concat(n)) || this;
                var s = flexbe_cli.components.classes.map.getLocaleCode({
                        provider: "yandex"
                    }) || "ru_RU",
                    i = flexbe_cli.yandex_maps_api_key ? "&apikey=" + flexbe_cli.yandex_maps_api_key : "";
                return o.require = ["//api-maps.yandex.ru/2.1/?lang=" + s + i], o
            }
            _inheritsLoose(o, e);
            var t = o.prototype;
            return t.onResize = function () {
                var e = this.map;
                e && e.container.fitToViewport()
            }, t.createMap = function () {
                var e = this;
                "undefined" != typeof ymaps && ymaps.ready((function () {
                    e.createVendor(), e.setPlaces(), e.dispatchEvents(), e.fixBehavior(), e.$component.trigger("mapInit"), e.$component.removeClass("loading")
                }))
            }, t.createVendor = function () {
                this.map && this.map.destroy(), this.map = new ymaps.Map(this.$component.find(".map")[0], {
                    center: this.data.center,
                    zoom: this.data.zoom,
                    controls: ["zoomControl"],
                    behaviors: ["default", "scrollZoom"],
                    type: "yandex#map"
                })
            }, t.setPlaces = function () {
                var e = this,
                    o = this.map,
                    t = this.data;
                if (o) {
                    o.geoObjects.removeAll();
                    var n = ymaps.templateLayoutFactory.createClass('<svg title="$[properties.balloonContent]" class="placemark" width="32" height="48" viewBox="0 0 24 32" xmlns="http://www.w3.org/2000/svg"><path d="M12 0C5.36 0 0 5.36 0 12c0 8 12 20 12 20s12-12 12-20c0-6.64-5.36-12-12-12zm0 8a4 4 0 0 1 4 4c0 2.22-1.78 4-4 4a4 4 0 0 1-4-4c0-2.2 1.8-4 4-4z" fill="$[properties.color]" fill-rule="evenodd"/></svg>');
                    ymaps.layout.storage.get("custom#placemark") || ymaps.layout.storage.add("custom#placemark", n), t.places.forEach((function (t, n) {
                        t.color = t.color || "#3D52B0";
                        var a = new ymaps.Placemark(t.coords, {
                            balloonContentHeader: t.name || !1,
                            balloonContent: t.address,
                            color: t.color
                        }, {
                            hideIconOnBalloonOpen: !1,
                            balloonOffset: [0, -48],
                            balloonCloseButton: !1,
                            iconLayout: "custom#placemark",
                            iconShape: {
                                type: "Rectangle",
                                coordinates: [
                                    [-16, -48],
                                    [16, 0]
                                ]
                            }
                        });
                        a.events.add("balloonopen", (function () {
                            e.$component.trigger("balloonOpen", n, t)
                        })), o.geoObjects.add(a), t._mark = a
                    }))
                }
            }, t.dispatchEvents = function () {
                var e = this.data,
                    o = this.map;
                o && (this.$component.on("selectMark", (function (t, n) {
                    if (e.places.length && e.places[n]) {
                        var a = e.places[n];
                        o.setCenter(a.coords, e.zoom, {
                            duration: 350,
                            checkZoomRange: !0
                        }).then((function () {
                            o.setCenter(a.coords)
                        })), a._mark && a._mark.balloon.open()
                    }
                })), this.$component.on("resizeMap", (function () {
                    o.container.fitToViewport()
                })))
            }, t.fixBehavior = function () {
                var e, o = this.map;
                o && (o.behaviors.disable("scrollZoom"), this.$component.off("mouseenter.preventzoom").on("mouseenter.preventzoom", (function () {
                    e = setTimeout((function () {
                        o.behaviors.enable("scrollZoom")
                    }), 500)
                })), this.$component.off("mouseleave.preventzoom").on("mouseleave.preventzoom", (function () {
                    e && (clearTimeout(e), o.behaviors.disable("scrollZoom"))
                })), flexbe_cli.run.is_mobile && o.behaviors.disable("drag"))
            }, o
        }(e),
        t = function (e) {
            function o() {
                for (var o, t = arguments.length, n = new Array(t), a = 0; a < t; a++) n[a] = arguments[a];
                o = e.call.apply(e, [this].concat(n)) || this;
                var s = flexbe_cli.google_maps_api_key,
                    i = flexbe_cli.components.classes.map.getLocaleCode({
                        provider: "google"
                    }) || "ru";
                return o.require = ["//maps.googleapis.com/maps/api/js?key=" + s + "&language=" + i], o
            }
            _inheritsLoose(o, e);
            var t = o.prototype;
            return t.createMap = function () {
                "undefined" != typeof google && (this.createVendor(), this.styleMap(), this.setPlaces(), this.dispatchEvents(), this.fixBehavior(), this.$component.trigger("mapInit"), this.$component.removeClass("loading"))
            }, t.createVendor = function () {
                var e = this.data;
                this.map = new google.maps.Map(this.$component.find(".map")[0], {
                    center: {
                        lat: e.center[0],
                        lng: e.center[1]
                    },
                    zoom: e.zoom,
                    disableDefaultUI: !0,
                    panControl: !0,
                    zoomControl: !0,
                    fullscreenControl: !0,
                    mapTypeControl: !1,
                    streetViewControl: !1,
                    mapTypeId: google.maps.MapTypeId.ROADMAP,
                    scrollwheel: !1
                })
            }, t.dispatchEvents = function () {
                var e = this,
                    o = this.$component,
                    t = this.map;
                t && (o.on("selectMark", (function (o, t) {
                    e.selectMark(t, !0)
                })), o.on("resizeMap", (function () {
                    google.maps.event.trigger(t, "resize")
                })))
            }, t.setPlaces = function () {
                var e = this,
                    o = this.data,
                    t = this.map;
                t && o.places.forEach((function (o, n) {
                    var a = '<svg width="32" height="48" viewBox="0 0 24 32" xmlns="http://www.w3.org/2000/svg"><path d="M12 0C5.36 0 0 5.36 0 12c0 8 12 20 12 20s12-12 12-20c0-6.64-5.36-12-12-12zm0 8a4 4 0 0 1 4 4c0 2.22-1.78 4-4 4a4 4 0 0 1-4-4c0-2.2 1.8-4 4-4z" fill="' + (o.color || "#222") + '" fill-rule="evenodd"/></svg>',
                        s = new google.maps.Marker({
                            position: {
                                lat: o.coords[0],
                                lng: o.coords[1]
                            },
                            map: t,
                            visible: !0,
                            animation: google.maps.Animation.DROP,
                            icon: {
                                url: "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(a)
                            }
                        });
                    o._mark = s, s.addListener("click", (function () {
                        e.selectMark(n)
                    }))
                }))
            }, t.styleMap = function () {
                var e = this.data,
                    o = this.map;
                if (o)
                    if ("default" !== e.style && e.style) {
                        var t = "/_s/lib/google/maps/styles/" + e.style + ".json";
                        $.getJSON(t, (function (e) {
                            e && Array.isArray(e) && o.setOptions({
                                styles: e
                            })
                        }))
                    } else o.setOptions({
                        styles: []
                    })
            }, t.selectMark = function (e, o) {
                void 0 === o && (o = !1);
                var t = this.data,
                    n = this.map,
                    a = t.places;
                if (n && a && a.length && a[e]) {
                    a.forEach((function (e) {
                        return e._info && e._info.close()
                    }));
                    var s = a[e],
                        i = "";
                    s.name && (i += '<div style="margin-bottom: 3px;"><strong>' + s.name + "</strong></div>"), s.address && (i += "<div>" + s.address + "</div>"), s._info = new google.maps.InfoWindow({
                        content: i
                    }), s._info.open(n, s._mark), o && n.panTo({
                        lat: s.coords[0],
                        lng: s.coords[1]
                    }), this.$component.trigger("balloonOpen", e, s)
                }
            }, t.fixBehavior = function () {
                var e, o = this.$component,
                    t = this.map;
                t && (o.off("mouseenter.preventzoom").on("mouseenter.preventzoom", (function () {
                    e = setTimeout((function () {
                        t.setOptions({
                            scrollwheel: !0
                        })
                    }), 500)
                })), o.off("mouseleave.preventzoom").on("mouseleave.preventzoom", (function () {
                    e && (clearTimeout(e), t.setOptions({
                        scrollwheel: !1
                    }))
                })))
            }, o
        }(e);
    flexbe_cli.components.classes.map = function (e) {
        return new("google" === (e.args[0] || "yandex") ? t : o)(e)
    }, flexbe_cli.components.classes.map.getLocaleCode = function (e) {
        var o = e.lang,
            t = e.provider,
            n = o || flexbe_cli.locale.language,
            a = {
                yandex: {
                    ru: "ru_RU",
                    by: "ru_RU",
                    ge: "ru_RU",
                    kz: "ru_RU",
                    ua: "uk_UA",
                    default: "en_US"
                },
                google: {
                    ru: "ru",
                    by: "be",
                    ge: "ru",
                    kz: "kk",
                    ua: "uk",
                    fr: "fr",
                    pl: "pl",
                    de: "de",
                    es: "es",
                    it: "it",
                    default: "en"
                }
            };
        return !!a[t] && (a[t][n] || a[t].default)
    }
}();
"use strict";

function ownKeys(e, t) {
    var i = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter((function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        }))), i.push.apply(i, n)
    }
    return i
}

function _objectSpread(e) {
    for (var t = 1; t < arguments.length; t++) {
        var i = null != arguments[t] ? arguments[t] : {};
        t % 2 ? ownKeys(Object(i), !0).forEach((function (t) {
            _defineProperty(e, t, i[t])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : ownKeys(Object(i)).forEach((function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t))
        }))
    }
    return e
}

function _defineProperty(e, t, i) {
    return t in e ? Object.defineProperty(e, t, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = i, e
}

function _extends() {
    return (_extends = Object.assign || function (e) {
        for (var t = 1; t < arguments.length; t++) {
            var i = arguments[t];
            for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n])
        }
        return e
    }).apply(this, arguments)
}

function _inheritsLoose(e, t) {
    e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e.__proto__ = t
}! function () {
    var e = {
            phone: {
                RU: ["+7 (***) ***-**-**", "8 (***) ***-**-**"],
                KZ: ["+7 (***) ***-**-**", "8 (***) ***-**-**"],
                UA: ["+38 (***) ***-****"],
                BY: ["+375 ** *******"],
                US: ["+1 (***) ***-****"]
            }
        },
        t = function (t) {
            function i() {
                for (var e, i = arguments.length, n = new Array(i), a = 0; a < i; a++) n[a] = arguments[a];
                return (e = t.call.apply(t, [this].concat(n)) || this).is = "form", e.ownerId = e.owner.getAttribute("data-id"), e.eventId = "." + e.ownerId, e.$form = e.$component.find("form"), e.$fields = e.$form.find(".form-fields"), e.action = e.$form.find('input[name="action"]').val(), e.$form.find('input[name="p_id"]').val(flexbe_cli.p_id), e
            }
            _inheritsLoose(i, t), i.getDefaultMask = function (t) {
                var i = String(t).toLowerCase(),
                    n = flexbe_cli.locale.country,
                    a = e[i] && e[i][n];
                return a && "string" == typeof a && (a = [a]), _extends([], a)
            }, i.initMask = function (e) {
                if ("undefined" == typeof IMask) return !1;
                var t = {
                        signed: !0,
                        lazy: !0,
                        padFractionalZeros: !0,
                        definitions: {
                            "*": /[0-9]/
                        }
                    },
                    i = e.getAttribute("data-required"),
                    n = e.getAttribute("data-mask");
                n = n && !/[ ()*{}]/.test(n) ? flexbe_cli.components.classes.form.getDefaultMask(n) : [n];
                try {
                    if (0 === (n = (n = n.filter((function (e) {
                            return /[ ()*_{}]/.test(e)
                        }))).map((function (e) {
                            return e.replace(/0/g, "\\0")
                        }))).length) throw {
                        message: "Mask is empty"
                    };
                    n = 1 === n.length ? String(n[0]) : n.map((function (e) {
                        return _extends({}, t, {
                            mask: e
                        })
                    }));
                    var a = new IMask(e, _extends({}, t, {
                            mask: n,
                            dispatch: function (e, t) {
                                var i = t.compiledMasks;
                                if (1 == i.length) return i[0];
                                var n = (t.value + e).replace(/\W/g, "");
                                return i.find((function (e) {
                                    var t = e.mask.replace(/\W/g, "")[0];
                                    return n[0] == t
                                })) || i[0]
                            }
                        })),
                        r = function () {
                            a.masked.isComplete || !i && !a.value ? e.setAttribute("data-mask-complete", !0) : e.removeAttribute("data-mask-complete"), e.setAttribute("value", a.value)
                        };
                    e.value && r(), a.on("accept", r), e._mask = a
                } catch (t) {
                    return t instanceof Error && console.warn("MASK ERROR:", {
                        masks: n,
                        errorMessage: t.message
                    }), e.removeAttribute("data-mask"), !1
                }
            };
            var n = i.prototype;
            return n.onInit = function () {
                this.$masked = this.$form.find("[data-mask]"), !flexbe_cli.is_admin && this.$masked.length && (this.needInitMasks = !0, this.require = ["/_s/lib/imask/imask.min.js"]);
                var e = this.$form.find(".flexbe-calendar-element");
                !flexbe_cli.is_admin && e.length && (this.needInitCalendar = !0, this.require.push("/_s/lib/calendar/dist/calendar.js"), this.require.push("/_s/lib/scroll-lock/scroll-lock.min.js"))
            }, n.onLoad = function () {
                this.needInitMasks && (this.core.wasScreen || this.core.wasBeside) && this.inputMask(), this.needInitCalendar && this.calendarInput()
            }, n.onScreen = function (e) {
                if (!e.state) return !1;
                this.formInit()
            }, n.onBeside = function (e) {
                if (!e.state) return !1;
                this.formInit()
            }, n.onOpen = function (e) {
                void 0 === e && (e = {});
                var t = this.component.getBoundingClientRect().top;
                !flexbe_cli.is_admin && flexbe_cli.resize.height > t + 100 && this.$component.find(".form-field").find("input, textarea").eq(0).focus(), e.data && this.setData(e.data)
            }, n.onResize = function () {
                this.$component.find(".range-outer").trigger("resize")
            }, n.formInit = function () {
                if (this.formInited) return !1;
                this.formInited = !0, this.unbindEvents(), this.bindEvents(), this.customize()
            }, n.customize = function () {
                this.fileInput(), this.customSelect(), this.textResize(), this.inputRange(), this.needInitMasks && this.isLoaded && this.inputMask(), this.$component.find(".form-field-range").trigger("resize")
            }, n.unbindEvents = function () {
                this.$component.off(this.eventId), this.$form.off(this.eventId)
            }, n.bindEvents = function () {
                var e = this,
                    t = this.$fields.find(".form-field-text > input, .form-field-text > textarea, .form-field-checkbox > input");
                t.on("keydown" + this.eventId, (function (e) {
                    var t = e.currentTarget,
                        i = t.getAttribute("data-check"),
                        n = e.key || "",
                        a = e.ctrlKey || e.metaKey;
                    if ("phone" === i && !t._mask && !a && 1 === n.length && /[^\-+\d ()]/.test(n)) return !1
                })), t.on("input" + this.eventId + " change" + this.eventId, (function (e) {
                    var t = e.currentTarget,
                        i = $(t);
                    t.setAttribute("value", t.value), i.closest(".form-field").removeClass("is_error")
                })), this.$form.on("click" + this.eventId, ".form_field_submit, .form-field-submit", (function () {
                    e.$form.submit()
                })), this.$form.on("submit" + this.eventId, (function (t) {
                    if (e.busy || flexbe_cli.is_admin || !e.validateForm()) return t.stopPropagation(), t.stopImmediatePropagation(), !1;
                    if (e.busy = !0, flexbe_cli.stat.u_id && e.addFields([{
                            name: "f_uid",
                            type: "hidden",
                            value: flexbe_cli.stat.u_id
                        }], !1), "function" == typeof e.beforeSend && !1 === e.beforeSend()) return e.busy = !1, !1;
                    if (e.addFields([{
                            name: "jsform",
                            type: "hidden",
                            value: parseInt(448312, 10)
                        }], !1), "undefined" != typeof FormData) e.sendFormdata();
                    else {
                        if (!(e.$form.find('input[type="file"]').length < 1)) return !0;
                        e.sendAjax()
                    }
                    return t.preventDefault(), !1
                }))
            }, n.setData = function (e) {
                if (!e) return !1;
                e && e.fields && this.addFields(e.fields), e && e.items && this.addItems(e.items)
            }, n.defineBeforeSend = function (e) {
                "function" == typeof e && (this.beforeSend = e)
            }, n.defineAfterSent = function (e) {
                "function" == typeof e && (this.afterSent = e)
            }, n.addFields = function (e, t) {
                void 0 === t && (t = !0);
                var i = this.$form.find(".form_fields_advanced");
                e.length && i[0] && (t && i.empty(), e.forEach((function (e) {
                    i.find('input[name="' + e.name + '"]').remove();
                    var t = $("<input>").attr("type", e.type).attr("name", e.name).attr("value", e.value);
                    i.append(t)
                })))
            }, n.addItems = function (e) {
                if (void 0 === e && (e = []), e && e.length) {
                    var t = 0,
                        i = 0,
                        n = "",
                        a = [];
                    e = e.map((function (e) {
                        return "object" != typeof e ? {} : (e.count = parseInt(e.count, 10) || 1, e.price = parseFloat(e.price) || 0, e.title = "string" == typeof e.title && e.title.trim() || e.title || "", t += e.price * e.count || 0, i += e.count, e)
                    }));
                    try {
                        n = JSON.stringify(e)
                    } catch (e) {}
                    var r = {
                        "product[items]": n,
                        "product[price]": t,
                        "product[total]": i
                    };
                    t && (r = _objectSpread({}, r, {
                        "pay[price]": t,
                        "pay[desc]": ""
                    })), Object.entries(r).forEach((function (e) {
                        var t = e[0],
                            i = e[1];
                        a.push({
                            type: "hidden",
                            name: t,
                            value: i
                        })
                    })), this.addFields(a)
                }
            }, n.sendFormdata = function () {
                var e = this,
                    t = new FormData(this.$form.get(0));
                if (t.append("is_ajax", "true"), "undefined" != typeof flexbeAPI && void 0 !== flexbeAPI.customLeadData && t.append("customLeadData", JSON.stringify(flexbeAPI.customLeadData)), flexbe_cli.run.is_OSX && "function" == typeof t.entries) {
                    var i = t.entries(),
                        n = Array.isArray(i),
                        a = 0;
                    for (i = n ? i : i[Symbol.iterator]();;) {
                        var r;
                        if (n) {
                            if (a >= i.length) break;
                            r = i[a++]
                        } else {
                            if ((a = i.next()).done) break;
                            r = a.value
                        }
                        var o = r,
                            s = o[0],
                            l = o[1];
                        "object" == typeof l && l instanceof File && 0 === l.size && t.delete(s)
                    }
                }
                t.append("f_ab", JSON.stringify(flexbe_cli.stat.AB.getCookie())), this.$component.addClass("submitting");
                var c = $.ajax({
                    url: this.$form.attr("action"),
                    type: "POST",
                    dataType: "json",
                    processData: !1,
                    contentType: !1,
                    data: t,
                    xhr: function () {
                        return $.ajaxSettings.xhr()
                    }
                });
                c.done((function (t) {
                    e.$component.addClass("success submit-ok"), e.$component.removeClass("submitting"), t.send_formdata = !0, void 0 !== t.pay && (e.pay = t.pay), e.showDone(), setTimeout((function () {
                        e.$component.removeClass("success submit-ok")
                    }), 1e3)
                })), c.fail((function (t) {
                    console.error("sendFormdata error: ", t), e.busy = !1, e.$component.removeClass("submitting")
                }))
            }, n.sendAjax = function () {
                var e = this,
                    t = this.$form.serialize();
                $.ajax({
                    url: this.$form.attr("action"),
                    type: "POST",
                    dataType: "json",
                    data: t + "&is_ajax=true"
                }).done((function (t) {
                    e.$form.get(0).reset(), t.send_ajax = !0, void 0 !== t.pay && (e.pay = t.pay), e.showDone()
                })).fail((function (t) {
                    console.error("sendAjax: Ошибка при отправке формы", t), e.busy = !1, e.$component.removeClass("submitting")
                }))
            }, n.resetForm = function () {
                this.$form.get(0).reset(), this.$form.find(".file-input-outer").removeClass("active");
                var e = this.$fields.find('input:not(:hidden):not([type="radio"]):not(.form-field-range--input)'),
                    t = this.$fields.find(".form-field-range--input");
                e.each((function (e, t) {
                    t.value = "", t.checked = !1, t.removeAttribute("value"), t.removeAttribute("checked"), t.removeAttribute("data-mask-complete"), t._mask && t._mask.updateValue()
                })), t.each((function (e, t) {
                    t.value = t.getAttribute("data-value"), $(t).trigger("change")
                }))
            }, n.validateForm = function () {
                var e = this,
                    t = !0,
                    i = !0;
                return this.$form.find(".form-field[data-type]").each((function (n, a) {
                    var r = $(a),
                        o = r.find("input, textarea, select").not('[type="hidden"]')[0],
                        s = "checkbox" === o.type ? o.checked : o.value,
                        l = e.checkField(o);
                    if (r.removeClass("is_error"), l) {
                        var c = r.attr("data-type"),
                            f = r.find(".error");
                        r.outerWidth(), r.addClass("is_error"), f.length && (f.attr("title", l), f.find(".error-text").text(l)), "checkbox" === c && r.find(".form-field-checkbox--box").attr("title", l), t = !1
                    }
                    i && s && (i = !1)
                })), this.$fields.removeClass("all-fields-empty"), this.$fields.removeClass("has-error"), this.$fields.outerWidth(), t || this.$fields.addClass("has-error"), i && (this.$fields.toggleClass("all-fields-empty", i), 4 === flexbe_cli.theme_id && (t = !1)), t
            }, n.showDone = function () {
                if (this.resetForm(), "function" == typeof this.afterSent && this.afterSent(), this.busy = !1, flexbe_cli.stat.reachGoals({
                        mainGoal: flexbe_cli.stat.goals.order_done,
                        goal: this.$form.find('input[name="goal"]').val(),
                        htmlGoal: this.$form.find('textarea[name="goal_html"]').val()
                    }), "pay" === this.action && void 0 !== this.pay && null !== this.pay) {
                    if (this.pay.pay_link.length > 0) {
                        var e = window.location.origin + window.location.pathname + (window.location.search ? window.location.search + "&" : "?") + "pay_id=" + this.pay.pay_id + "&h=" + this.pay.pay_hash;
                        try {
                            history.pushState(null, null, e), setTimeout((function () {
                                flexbe_cli.events.emit("pay", {
                                    action: "init"
                                })
                            }), 200)
                        } catch (t) {
                            setTimeout((function () {
                                document.location = e
                            }), 500)
                        }
                    }
                } else if ("redirect" === this.action) {
                    var t = this.$form.find('input[name="action_redirect"]').val();
                    t && setTimeout((function () {
                        flexbe_cli.helpers.gotoLink(t)
                    }), 500)
                } else {
                    var i = this.$component.find("[data-modal-id]").attr("data-modal-id");
                    if (!flexbe_cli.modal.find(i)) {
                        var n = String(this.ownerId);
                        i = (n && n.split("_")[0]) + "_" + i
                    }
                    if (flexbe_cli.modal.find(i)) flexbe_cli.events.emit("modal_command", {
                        command: "open",
                        id: i
                    });
                    else {
                        var a = this.root._core;
                        a && "modal" === a.is && flexbe_cli.events.emit("modal_command", {
                            command: "close",
                            id: a.id
                        }), console.warn("Modal open error:", "There is no window attached to the form.", i)
                    }
                }
            }, n.fileInput = function () {
                this.$component.on("change" + this.eventId, ".file-input", (function (e) {
                    var t = $(e.currentTarget),
                        i = t.parents(".form_field_file_holder"),
                        n = t.val(),
                        a = e.currentTarget.files.length;
                    if (i.addClass("active"), t.parents(".form_field").removeClass("is_error"), 1 === a && i.find(".files_name_holder_text").text(n), a > 1) {
                        var r, o = a % 100,
                            s = a % 10,
                            l = Math.floor(o / 10);
                        r = 1 === s && 11 !== o ? "form.filesMult" : s > 1 && s < 5 && 1 !== l ? "form.filesMult1" : "form.filesMult2", i.find(".files_name_holder_text").text(a + " " + flexbe_cli.locale.tr(r))
                    }
                    0 === a && i.removeClass("active")
                })), this.$component.on("click" + this.eventId, ".clear_files", (function (e) {
                    var t = $(e.currentTarget).parents(".form_field_file_holder");
                    t.find(".file-input").val(""), t.removeClass("active")
                }))
            }, n.calendarInput = function () {
                var e = {
                        lowerLimit: new Date,
                        upperLimit: new Date(2025, 10, 25),
                        startWeekday: 1,
                        formatDate: "DD.MM.YYYY",
                        onSelectClose: !1,
                        locale: flexbe_cli.locale.translation.calendar,
                        context: "form"
                    },
                    t = this.$form.find(".flexbe-calendar-element");
                t.length && t.calendar(e)
            }, n.inputRange = function () {
                this.$form.find(".form-field-range").each((function (e, t) {
                    return new flexbe_cli.components.classes.rangeInput($(t))
                }))
            }, n.textResize = function () {
                this.$component.find(".autosize").each((function (e, t) {
                    var i = t.offsetHeight - t.clientHeight,
                        n = $(t);
                    n.removeAttr("data-autoresize"), n.off("keyup input").on("keyup input", (function (e) {
                        e.currentTarget.style.height = e.currentTarget.scrollHeight + i + "px"
                    }))
                }))
            }, n.customSelect = function () {
                this.$component.find(".dropdown-container").remove(), this.$component.find("select.custom-select").each((function (e, t) {
                    var i = $(t),
                        n = i.children("optgroup"),
                        a = i.closest('[data-type="select"]'),
                        r = "",
                        o = "";
                    n.length && n.each((function (e, t) {
                        var i = $(t),
                            n = i.attr("label");
                        o += '<li class="optgroup">' + n + "</li>", i.children("option").each((function (e, t) {
                            var i = $(t),
                                n = i.attr("value").replace(/"/g, "&quot;"),
                                a = i.text() || "—";
                            "selected" === i.attr("selected") ? (r = a, o += '<li class="selected" data-value="' + n + '">' + a + "</li>") : o += '<li data-value="' + n + '">' + a + "</li>"
                        }))
                    })), i.children("option").each((function (e, t) {
                        var i = $(t),
                            n = i.val().replace(/"/g, "&quot;"),
                            a = i.text() || "—";
                        "selected" === i.attr("selected") ? (r = a, o += '<li class="selected" data-value="' + n + '">' + a + "</li>") : o += '<li data-value="' + n + '">' + a + "</li>"
                    }));
                    var s = $('<div class="dropdown-container">\n                        <div class="dropdown-select">\n                            <span>' + r + '</span>\n                        </div>\n                        <ul class="dropdown-select-ul">' + o + "</ul>\n                    </div>");
                    i.after(s), s.off("click.selectdd").on("click.selectdd", ".dropdown-select", (function () {
                        var e = s.hasClass("active");
                        s.toggleClass("active", !e), a.toggleClass("active", !e), e || a.siblings('[data-type="select"]').removeClass("active").find(".dropdown-container").removeClass("active")
                    })), s.off("click.selectli").on("click.selectli", ".dropdown-select-ul li", (function (e) {
                        var t = $(e.currentTarget);
                        if (!t.hasClass("optgroup")) {
                            var n = t.closest("ul").siblings(".dropdown-select");
                            s.toggleClass("active"), s.closest('[data-type="select"]').toggleClass("active"), t.siblings("li").removeClass("selected"), t.addClass("selected"), i.val(t.attr("data-value")), n.children("span").html(t.text())
                        }
                    }))
                }))
            }, n.checkField = function (e) {
                var t = e.type,
                    i = "checkbox" === t ? e.checked : "file" === t ? e.files : e.value,
                    n = e.getAttribute("data-required") || !1,
                    a = e.getAttribute("data-check") || !1,
                    r = !(!n || i) && "form.required";
                if (e._mask && e.getAttribute("data-mask") || !1) !n && !i || e.getAttribute("data-mask-complete") || (r = "tel" === t && i ? "form.phone" : "form.required");
                else if (a) {
                    if ("date" === a) $(e).data("calendar").handler.checkError() && (r = "calendar.errors.invalid_date");
                    else if (i.length && "email" === t) {
                        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Zа-яёА-ЯЁ\-0-9]+\.)+[a-zA-Zа-яёА-ЯЁ]{2,}))$/.test(i) || (r = "form.email")
                    } else if (i.length && "tel" == t) {
                        if (/[^0-9+\(\)\-\s]/.test(i)) r = "form.digits";
                        else i.replace(/[^0-9]/g, "").length < 5 && (r = "form.minlength")
                    } else "file" == t && (r = !(!n || i.length) && "form.required")
                }
                return r = r && flexbe_cli.locale.tr(r) || !1
            }, n.inputMask = function () {
                return "undefined" != typeof IMask && (this.needInitMasks = !1, this.$masked.each((function (e, t) {
                    flexbe_cli.components.classes.form.initMask(t)
                })), !0)
            }, i
        }(BaseComponent);
    flexbe_cli.components.classes.form = t
}();
"use strict";

function _inheritsLoose(e, t) {
    e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e.__proto__ = t
}! function () {
    var e = function (e) {
        function t() {
            return e.apply(this, arguments) || this
        }
        _inheritsLoose(t, e);
        var l = t.prototype;
        return l.customSelect = function () {
            var e = this;
            this.$form.find(".dropdown-container").remove(), this.$form.find("select.atom-custom-select").each((function (t, l) {
                var o = $(l),
                    n = o.children("optgroup"),
                    s = o.closest('[data-type="select"]'),
                    r = o.children("option").length,
                    c = e.$form.hasClass("style-underlined") ? "sharp" : "",
                    i = "",
                    a = "",
                    d = !1,
                    u = !1,
                    f = !1;
                n.length && n.each((function (e, t) {
                    var l = $(t),
                        o = l.attr("label");
                    a += '<li class="optgroup">' + o + "</li>", l.children("option").each((function (e, t) {
                        var l = $(t),
                            o = l.attr("value").replace(/"/g, "&quot;"),
                            n = l.text() || "—";
                        "selected" === l.attr("selected") ? (i = n, a += '<li class="selected" data-value="' + o + '">' + n + "</li>") : a += '<li data-value="' + o + '">' + n + "</li>"
                    }))
                })), o.children("option").each((function (e, t) {
                    var l = $(t),
                        o = l.val().replace(/"/g, "&quot;"),
                        n = l.text() || "—";
                    "selected" === l.attr("selected") ? (i = n, a += '<li class="option-e selected" data-value="' + o + '"><span class="option-inner">' + n + "</span></li>") : a += '<li class="option-e" data-value="' + o + '"><span class="option-inner">' + n + "</span></li>"
                }));
                var p = $('\n                    <div class="dropdown-container">\n                        <div tabindex="0" class="dropdown-select">\n                            <span class="selected">' + i + '</span>\n                            <span class="arrow">\n                                <svg viewBox="0 0 10 6" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n                                    <path fill="currentColor" d="M 1.4 6.99441e-15L 0 1.34043L 5 6L 10 1.34043L 8.6 0L 5 3.34998L 1.4 6.99441e-15Z"/>\n                                </svg>\n                            </span>\n                        </div>\n                    </div>\n                '),
                    v = $('\n                    <div class="atom-select size--medium">\n                        <div class="overlay"></div>\n                        <ul class="dropdown-select-ul ' + c + '">' + a + "</ul>\n                    </div>\n                "),
                    h = $(".dropdown-select-ul", v);

                function g(e, t) {
                    if (!e.hasClass("optgroup") && e[0]) {
                        e.closest("ul");
                        var l = p.find(".dropdown-select");
                        e.siblings("li").removeClass("selected"), e.addClass("selected"), o.val(e.attr("data-value")), l.children(".selected").html(e.text()), t && w()
                    }
                }

                function m() {
                    var e = h.children(".option-e"),
                        t = e.height(),
                        l = h.height(),
                        o = t * (e.index($(".selected", h)) + 1);
                    if (l > t * r) return !1;
                    h.scrollTop() < o - l ? h.animate({
                        scrollTop: o - l
                    }, 100) : h.scrollTop() > o - t && h.animate({
                        scrollTop: o - t
                    }, 100)
                }

                function w() {
                    f = !1, v.removeClass("active"), s.removeClass("active"), clearTimeout(d)
                }

                function y() {
                    var e = p.hasClass("active");
                    v.off("click.selectli").on("click.selectli", ".dropdown-select-ul li", (function (e) {
                        g($(e.currentTarget), !0)
                    })), v.off("mousewheel.selectUl").on("mousewheel.selectUl", ".dropdown-select-ul", (function (e) {
                        var t = e.currentTarget.scrollHeight,
                            l = e.currentTarget.clientHeight;
                        return !(e.currentTarget.scrollTop === t - l && event.deltaY > 0 || 0 === e.currentTarget.scrollTop && event.deltaY < 0)
                    })), $("body").append(v), f = !0, clearTimeout(d), h.css({
                        left: p.offset().left + "px",
                        top: p.offset().top + "px",
                        width: p.width() + "px"
                    }), v.toggleClass("active", !e), s.toggleClass("active", !e), e || s.siblings('[data-type="select"]').removeClass("active").find(".dropdown-container").removeClass("active"), m()
                }
                o.after(p), flexbe_cli.run.is_screen_tablet || flexbe_cli.run.is_screen_pc || !flexbe_cli.responsive ? (v.off("click.closeSelect").on("click.closeSelect", ".overlay", (function (e) {
                    w(), document.elementFromPoint(e.clientX, e.clientY).focus()
                })), p.off("click.selectdd").on("click.selectdd", ".dropdown-select", (function () {
                    y()
                })), p.off("focus.selectfocus").on("focus.selectfocus", ".dropdown-select", (function () {
                    u = !0
                })), p.off("blur.selectblur").on("blur.selectblur", ".dropdown-select", (function () {
                    u = !1, d = setTimeout((function () {
                        w()
                    }), 200)
                })), p.off("keydown.selectkeydown").on("keydown.selectkeydown", ".dropdown-select", (function (e) {
                    if (u && 38 === e.keyCode || 40 === e.keyCode || 13 === e.keyCode || 27 === e.keyCode || 32 === e.keyCode) {
                        e.preventDefault();
                        var t = h.find(".option-e.selected");
                        40 === e.keyCode ? (g(t.next(), !1), m()) : 38 === e.keyCode ? (g(t.prev(), !1), m()) : 13 !== e.keyCode && 32 !== e.keyCode && 27 !== e.keyCode || (f ? w() : 27 !== e.keyCode && y())
                    }
                }))) : o.off("change.selectdd").on("change.selectdd", (function (e) {
                    var t = e.target.value;
                    p.find(".dropdown-select").children(".selected").html(t)
                }))
            }))
        }, l.textResize = function () {
            this.$form.find(".autosize").each((function (e, t) {
                var l = t.offsetHeight - t.clientHeight,
                    o = $(t);
                o.removeAttr("data-autoresize"), o.off("keyup input").on("keyup input", (function (e) {
                    var o = t.clientHeight;
                    e.currentTarget.style.height = "auto";
                    var n = e.currentTarget.scrollHeight + l;
                    e.currentTarget.value ? (e.currentTarget.style.height = o + "px", $(e.currentTarget).css({
                        height: n + "px"
                    }), n > parseInt($(e.currentTarget).css("max-height"), 10) ? $(e.currentTarget).addClass("scrollable") : $(e.currentTarget).removeClass("scrollable")) : e.currentTarget.style.height = "auto"
                }))
            }))
        }, l.fileInput = function () {
            this.$form.on("change" + this.eventId, ".file-input--original", (function (e) {
                var t = $(e.currentTarget),
                    l = t.parents(".file-input-outer"),
                    o = t.val(),
                    n = e.currentTarget.files.length;
                if (l.addClass("active"), t.parents(".form-field").removeClass("is_error"), 1 === n && l.find(".file-item--title").text(o), n > 1) {
                    var s, r = n % 100,
                        c = n % 10,
                        i = Math.floor(r / 10);
                    s = 1 === c && 11 !== r ? "form.filesMult" : c > 1 && c < 5 && 1 !== i ? "form.filesMult1" : "form.filesMult2", l.find(".file-item--title").text(n + " " + flexbe_cli.locale.tr(s))
                }
                0 === n && l.removeClass("active")
            })), this.$form.on("click" + this.eventId, ".clear-files", (function (e) {
                var t = $(e.currentTarget).parents(".file-input-outer");
                t.find(".file-input--original").val(""), t.removeClass("active")
            }))
        }, t
    }(flexbe_cli.components.classes.form);
    flexbe_cli.components.classes.form = e
}();
"use strict";

function ownKeys(t, e) {
    var i = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(t);
        e && (n = n.filter((function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable
        }))), i.push.apply(i, n)
    }
    return i
}

function _objectSpread(t) {
    for (var e = 1; e < arguments.length; e++) {
        var i = null != arguments[e] ? arguments[e] : {};
        e % 2 ? ownKeys(Object(i), !0).forEach((function (e) {
            _defineProperty(t, e, i[e])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : ownKeys(Object(i)).forEach((function (e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
        }))
    }
    return t
}

function _defineProperty(t, e, i) {
    return e in t ? Object.defineProperty(t, e, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = i, t
}

function _inheritsLoose(t, e) {
    t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e
}! function () {
    var t = function (t) {
        function e() {
            for (var e, i = arguments.length, n = new Array(i), r = 0; r < i; r++) n[r] = arguments[r];
            return (e = t.call.apply(t, [this].concat(n)) || this).is = "quiz", e.id = e.core.id, e.eventId = ".quiz" + e.id, e.createQuiz(), e
        }
        _inheritsLoose(e, t);
        var i = e.prototype;
        return i.onInit = function () {
            this.$masked = this.$form.find("[data-mask]"), this.require = [], !flexbe_cli.is_admin && this.$masked.length && (this.needInitMasks = !0, this.require.push("/_s/lib/imask/imask.min.js")), this.$date_inputs = this.$form.find(".flexbe-calendar-element"), !flexbe_cli.is_admin && this.$date_inputs.length && (this.needInitCalendar = !0, this.require.push("/_s/lib/calendar/dist/calendar.js"), this.require.push("/_s/lib/scroll-lock/scroll-lock.min.js"))
        }, i.onLoad = function () {
            (this.core.wasScreen || this.core.wasBeside) && (this.needInitMasks && this.inputMask(), this.needInitCalendar && this.calendarInput()), this.isLoaded = !0
        }, i.calendarInput = function () {
            var t = {
                    lowerLimit: new Date,
                    upperLimit: new Date(2025, 10, 25),
                    startWeekday: 1,
                    formatDate: "DD/MM/YYYY",
                    onSelectClose: !1,
                    locale: flexbe_cli.locale.translation.calendar,
                    context: "quiz"
                },
                e = this.$form.find(".flexbe-calendar-element");
            e.length && e.calendar(t)
        }, i.onScreen = function (t) {
            if (!t.state) return !1;
            this.initQuiz()
        }, i.onBeside = function (t) {
            if (!t.state) return !1;
            this.initQuiz()
        }, i.onOpen = function (t) {
            void 0 === t && (t = {}), this.initQuiz(), this.started || this.startQuiz(), t.data && this.setData(t.data)
        }, i.onResize = function () {
            this.$component.find(".range-outer").trigger("resize")
        }, i.createQuiz = function () {
            this.timeouts = [], this.history = [], this.swiper = [], this.$area = this.core.$area, this.$form = this.$component.find("form"), this.$steps = this.$component.find(".quiz-steps"), this.$actions = this.$component.find(".quiz-actions"), this.$progress = this.$component.find(".quiz-progress"), this.$stepsWrapper = this.$steps.find(".steps-wrapper"), this.$outerWrapper = this.$area.find('[data-quiz-part="wrapper"]'), this.$welcomeScreen = this.$outerWrapper.find('[data-quiz-part="welcome"]'), this.$progress.length || (this.$progress = this.$area.find('[data-quiz-part="progress"]')), this.rootModal = "modal" === this.core.is && this.core, this.hasWelcome = !!this.rootModal || this.$welcomeScreen.length > 0, this.autoNextEnabled = +this.$steps.attr("data-autonext") || 0, this.currentId = null, this.currentIndex = -1, this.total = parseInt(this.$component.attr("data-total-steps"), 10)
        }, i.initQuiz = function () {
            if (!this.inited) {
                this.inited = !0, this.resetForm(), this.bindEvents(), this.initFields(), this.initControls();
                var t = flexbe_cli.is_admin && this.$area.data("initialQuizStepId"),
                    e = flexbe_cli.is_admin && this.$area.data("initialQuizStepIndex");
                t ? this.toStep({
                    id: t,
                    index: e,
                    animated: !1
                }) : this.hasWelcome || this.startQuiz({
                    animated: !1
                })
            }
        }, i.bindEvents = function () {
            var t = this;
            flexbe_cli.events.off("quiz_command").on("quiz_command", (function (t, e) {
                var i;
                flexbe_cli.components.instances[e.id] && flexbe_cli.components.instances[e.id].forEach((function (t) {
                    "quiz" === t.is && (i = t)
                })), i && ("welcome" === e.command ? i.toWelcome() : "start" === e.command ? i.startQuiz() : "step" === e.command && i.toStep({
                    id: e.stepId,
                    index: e.stepIndex,
                    force: e.force,
                    animated: e.animated,
                    scroll: e.scroll
                }))
            })), this.$form.off(this.eventId), this.$form.on("input" + this.eventId + " change" + this.eventId, "input, textarea", (function (t) {
                var e = t.currentTarget,
                    i = e.value,
                    n = $(e);
                n.attr("value", i), n.closest(".field").removeClass("is_error")
            })), this.$form.on("keydown" + this.eventId, "input, textarea", (function (t) {
                var e = t.currentTarget,
                    i = e.getAttribute("data-check"),
                    n = t.key || "",
                    r = t.ctrlKey || t.metaKey;
                if ("phone" === i && !e._mask && !r && 1 === n.length && /[^\-+\d ()]/.test(n)) return !1
            })), this.$form.on("submit" + this.eventId, (function () {
                return t.submitForm()
            }))
        }, i.initControls = function () {
            var t = this;
            $("body").off("keypress" + this.eventId).on("keypress" + this.eventId, (function (e) {
                var i = 9 === e.keyCode,
                    n = 13 === e.keyCode;
                if (n || i) {
                    var r = flexbe_cli.block.hasOverlay || [],
                        a = t.rootModal && "modal" === r[r.length - 1],
                        s = !t.rootModal && !r.length,
                        o = t.core.inFocus && (s || a),
                        l = e.metaKey || e.ctrlKey,
                        c = e.shiftKey;
                    if (o && ("TEXTAREA" !== e.target.tagName || !n || l)) {
                        if (c && i) t.toPrevStep();
                        else if (!c && !l) {
                            var d = t.$currentStep.find(":focus").closest(".field").next(".field");
                            t.focusField(d) || t.toNextStep()
                        }
                        return e.preventDefault(), e.stopPropagation(), e.stopImmediatePropagation(), !1
                    }
                }
            })), this.$component.off("click.control").on("click.control", "[data-quiz-action]", (function (e) {
                var i = e.currentTarget.getAttribute("data-quiz-action");
                "welcome" === i ? t.toWelcome() : "prev" === i ? t.toPrevStep() : "next" === i && t.toNextStep()
            }))
        }, i.setProgress = function () {
            var t = this.$progress.find(".progress-loader-bar .current"),
                e = this.total,
                i = t.data("unit"),
                n = this.realIndex + 1;
            flexbe_cli.is_admin && -1 === this.realIndex && "welcome" !== this.currentId && (n = (+this.$currentStep.prevAll('[data-linked="linked"]').first().attr("data-real-index") + 1 || 0) + 1);
            var r = parseInt(100 * n / e, 10) || 0;
            if (n = Math.max(0, Math.min(e, n)), r = Math.max(0, Math.min(100, r)), t.length && i) {
                var a = r + "%";
                "step" === i ? a = n + " / " + e : "none" === i && (a = ""), t.attr("data-value", a)
            }
            this.$progress.attr("data-current-progress", r), this.$progress.attr("data-current", n), this.$progress.attr("data-total", e), this.$progress.find(".progress-text .current").text(n), this.$progress.find(".progress-text .total").text(e), this.$progress.find(".progress-percent .current").text(r), this.$progress.find(".progress-loader-bar .current").css("width", r + "%"), this.$progress.find(".progress-loader-circle .current").attr("stroke-dashoffset", "" + Math.abs(100 - r))
        }, i.setActionButtons = function () {
            var t = this.hasWelcome || this.history.length > 1 || flexbe_cli.is_admin && 0 !== this.realIndex && this.currentIndex > 0;
            !flexbe_cli.is_admin || !this.rootModal || this.realIndex && this.currentIndex || (t = !1), this.$actions.toggleClass("show-prev", t)
        }, i.toWelcome = function (t) {
            var e = (void 0 === t ? {} : t).scroll,
                i = void 0 === e || e;
            if (!this.hasWelcome) return this.startQuiz({
                scroll: i
            }), !0;
            if (this.started = !1, this.currentIndex = -1, this.realIndex = -1, this.currentId = "welcome", this.$area.data("initialQuizStepId", this.currentId), this.$area.data("initialQuizStepIndex", this.currentIndex), this.$outerWrapper.attr("data-active-step", this.currentId), this.$outerWrapper.attr("data-active-index", this.currentIndex), this.$outerWrapper.toggleClass("quiz-state-welcome", !0), this.$outerWrapper.toggleClass("quiz-state-started", !1), this.rootModal) flexbe_cli.is_admin || flexbe_cli.modal.close(this.rootModal.id);
            else if (this.$outerWrapper.length) {
                var n = this.$welcomeScreen.outerHeight() || 0;
                this.$outerWrapper.css("minHeight", n), flexbe_cli.run.is_ie && flexbe_cli.block.fixCoverHeight(this.$area)
            }
            return this.setProgress(), this.setActionButtons(), i && "block" === this.core.is && !flexbe_cli.is_admin && flexbe_cli.scroll.scrollTo(this.$area), flexbe_cli.events.emit("quiz_event", {
                event: "welcome",
                sender: "core",
                quiz: this
            }), !0
        }, i.startQuiz = function (t) {
            var e = void 0 === t ? {} : t,
                i = e.animated,
                n = e.scroll;
            this.sessionId = parseInt(Date.now() / 1e3, 10);
            var r = this.$stepsWrapper.find('.step[data-type="root"][data-linked="linked"]').first();
            r.length && this.toStep({
                $step: r,
                force: !0,
                animated: i,
                scroll: n
            })
        }, i.autoNextStep = function () {
            var t = this;
            this.autoNextEnabled && "1" === this.$currentStep.find(".quiz-fields").attr("data-count") && setTimeout((function () {
                t.toNextStep()
            }), 150)
        }, i.toPrevStep = function () {
            var t = this.history[this.history.length - 2];
            if (!t) {
                var e = this.$currentStep.prevAll('.step[data-type="root"][data-linked="linked"]').first();
                return e.length ? this.toStep({
                    $step: e
                }) : this.hasWelcome && this.toWelcome(), !1
            }
            return this.toStep(t), !0
        }, i.toNextStep = function (t) {
            var e = this;
            if (!((void 0 === t ? {} : t).force || this.validateStep())) return !1;
            var i = this.$currentStep.attr("data-goto"),
                n = this.$currentStep.attr("data-goal"),
                r = this.$currentStep.attr("data-html-goal"),
                a = this.history.find((function (t) {
                    return t.id === e.currentId
                })) || {},
                s = this.$currentStep.find("[data-field-id]").map((function (t, e) {
                    var i = $(e),
                        n = i.attr("data-field-id"),
                        r = i.find("input, textarea").not('[type="hidden"]'),
                        a = i.find("[data-goto]"),
                        s = i.attr("data-type"),
                        o = i.find('[name="vars[' + n + ']"]').val(),
                        l = r.attr("type"),
                        c = a,
                        d = r.val();
                    ["checkbox", "radio", "image"].includes(s) ? c = a.filter(":checked") : "select" === s ? (c = c.filter((function (t, e) {
                        return e.selected
                    })), l = "select") : "file" === s && (d = Array.from(r[0].files));
                    var u = c.toArray(),
                        f = u.map((function (t) {
                            return t.getAttribute("data-goto")
                        })).filter((function (t) {
                            return t
                        }));
                    return {
                        id: n,
                        title: o,
                        type: s,
                        inputType: l,
                        value: d,
                        variants: u.map((function (t) {
                            return {
                                id: t.getAttribute("data-id"),
                                value: t.value
                            }
                        })).filter((function (t) {
                            return t.id
                        })),
                        goto: f
                    }
                })).toArray(),
                o = s.map((function (t) {
                    var e = {
                        id: t.id,
                        title: t.title,
                        type: t.type
                    };
                    return ["radio", "checkbox", "select", "image"].includes(t.inputType) ? e.variants = t.variants : e.value = t.value, e
                })),
                l = s.reduce((function (t, e) {
                    return t.concat(e.goto)
                }), []),
                c = this.getNextStep({
                    gotoId: l[0] || i || "next"
                });
            a && (a.fields = s, a.answers = o, a.toId = c, a.goal = n, a.htmlGoal = r), this.toStep({
                id: c,
                historyItem: a
            })
        }, i.getNextStep = function (t) {
            var e = void 0 === t ? {} : t,
                i = e.gotoId,
                n = e.$current,
                r = void 0 === n ? this.$currentStep : n;
            if ("result" === i) return i;
            var a = i,
                s = r.nextAll('.step[data-type="root"][data-linked="linked"]').first();
            return "next" !== a && this.$stepsWrapper.find('.step[data-id="' + a + '"]').length || (a = s.attr("data-id")) ? this.checkStepCondition({
                id: a
            }) ? a : this.getNextStep({
                gotoId: "next",
                $current: s
            }) : "result"
        }, i.toStep = function (t) {
            var e = this,
                i = t.id,
                n = t.index,
                r = t.$step,
                a = t.force,
                s = t.scroll,
                o = void 0 === s || s,
                l = t.animated,
                c = void 0 === l || l,
                d = t.historyItem;
            if (this.inStepAnimation) return !1;
            if (null == d && (d = this.history.find((function (t) {
                    return t.id === e.currentId
                }))), "result" !== i) {
                if (r && r.length || null == i || (r = this.$stepsWrapper.find('.step[data-id="' + i + '"]')), r && r.length || null == n || (r = this.$stepsWrapper.find('.step[data-index="' + n + '"]')), !r || !r.length) return !1;
                if (i = null != i ? i : r.attr("data-id"), n = parseInt(null != n ? n : r.attr("data-index"), 10), i === this.currentId) return this.enableStep(r), !1;
                var u = flexbe_cli.is_admin ? parseInt(r.attr("data-real-index"), 10) : n,
                    f = n > this.currentIndex;
                c || this.$area.addClass("noanimate");
                var h = r.outerHeight(),
                    p = {
                        $step: r,
                        id: i,
                        title: r.find(".step-title").text().trim(),
                        index: n,
                        realIndex: u,
                        fields: [],
                        answers: []
                    },
                    m = [];
                a ? (m = this.history, this.history = []) : (m = this.history.filter((function (t) {
                    return t.index >= p.index
                })), this.history = this.history.filter((function (t) {
                    return !m.includes(t)
                }))), m.forEach((function (t) {
                    e.disableStep(t.$step)
                })), this.enableStep(r), this.started = !0, this.history.push(p), this.$component.addClass("quiz-started"), c && this.$component.addClass("step-change-animation");
                var v = window.scrollParent(this.$component[0]) || document.scrollingElement,
                    g = v && v.scrollTop || 0,
                    x = this.$stepsWrapper.outerHeight();
                if (this.$area.data("initialQuizStepId", i), this.$area.data("initialQuizStepIndex", n), this.$outerWrapper.attr("data-active-step", i), this.$outerWrapper.attr("data-active-index", n), this.$outerWrapper.toggleClass("quiz-state-welcome", !1), this.$outerWrapper.toggleClass("quiz-state-started", !0), r.toggleClass("higher", h > x), c && this.$stepsWrapper.css("height", x + "px"), this.$outerWrapper.css("minHeight", x + "px"), r.prevAll().removeClass("active next").addClass("prev"), r.nextAll().removeClass("active prev").addClass("next"), r.removeClass("next prev").addClass("active"), this.currentId = i, this.currentIndex = n, this.realIndex = u, this.$currentStep = r, this.setProgress(), this.setActionButtons(), flexbe_cli.run.is_ie && this.$area.find(".cover").css("height", "auto"), 2 === flexbe_cli.theme_id) this.$area.find(".b_head").length && flexbe_cli.block.headers.setHeaders();
                this.timeouts = this.timeouts.filter((function (t) {
                    return clearTimeout(t)
                })), this.timeouts.push(setTimeout((function () {
                    c || e.$area.removeClass("noanimate")
                }), 20)), c ? (this.inStepAnimation = !0, this.timeouts.push(setTimeout((function () {
                    e.$stepsWrapper.css("height", ""), e.$component.removeClass("step-change-animation"), e.$component.find(".range-outer").trigger("resize"), e.inStepAnimation = !1
                }), 250)), o && (this.timeouts.push(setTimeout((function () {
                    var t = e.$area.get(0).getBoundingClientRect();
                    e.$stepsWrapper.css("height", h + "px");
                    var i = v.scrollTop,
                        n = e.$area.get(0).getBoundingClientRect().bottom - t.bottom - (g - i);
                    n && v.scrollTo(0, i + n)
                }), 150)), flexbe_cli.is_admin || this.timeouts.push(setTimeout((function () {
                    var t = e.$component;
                    e.$area.outerHeight() <= flexbe_cli.resize.height && (t = e.$area), flexbe_cli.scroll.scrollTo(t, {
                        centered: !0,
                        force: !1,
                        complete: function () {
                            flexbe_cli.is_admin || flexbe_cli.run.is_mobile || e.focusField(r)
                        }
                    })
                }), 450)))) : this.$component.find(".range-outer").trigger("resize");
                var $ = (d = d || {}).id,
                    y = d.title,
                    b = d.answers;
                return flexbe_cli.events.emit("quiz_event", {
                    event: "step",
                    sender: "core",
                    quiz: this,
                    payload: {
                        fromId: $,
                        fromTitle: y,
                        fromAnswers: b,
                        toNext: f,
                        toId: i,
                        sessionId: this.sessionId
                    },
                    answerGoals: {
                        goal: d.goal,
                        htmlGoal: d.htmlGoal
                    }
                }), !0
            }
            this.toSubmit({
                historyItem: d
            })
        }, i.toSubmit = function (t) {
            var e = void 0 === t ? {} : t,
                i = e.force,
                n = e.historyItem,
                r = i || this.validateStep();
            if (this.busy || flexbe_cli.is_admin || !r) return !1;
            if (this.result = this.getResult(), null == n && (n = this.history[this.history.length - 1]), n) {
                var a = n && n.answers,
                    s = n.id,
                    o = n.title,
                    l = this.result.goals || {};
                flexbe_cli.events.emit("quiz_event", {
                    event: "submit",
                    sender: "core",
                    quiz: this,
                    payload: {
                        fromAnswers: a,
                        fromId: s,
                        fromTitle: o,
                        sessionId: this.sessionId
                    },
                    answerGoals: {
                        goal: n.goal,
                        htmlGoal: n.htmlGoal
                    },
                    resultGoals: {
                        mainGoal: flexbe_cli.stat.goals.order_done,
                        goal: l.goal,
                        htmlGoal: l.goal_html
                    }
                })
            }
            return this.$form.submit(), !0
        }, i.validateStep = function () {
            var t = this,
                e = !0;
            return this.$currentStep && this.$currentStep.length && this.$currentStep.find(".field[data-type]").each((function (i, n) {
                var r = $(n);
                r.removeClass("is_error");
                var a = t.checkField(r);
                a && (r.outerWidth(), r.addClass("is_error"), r.find(".error").text(a), e && t.focusField(r, 500), e = !1)
            })), e
        }, i.getResult = function () {
            var t = this,
                e = this.$form.find("input[name=results]").data("value") || [],
                i = e.filter((function (t) {
                    return null != t.id && "default" !== t.id
                })).find((function (e) {
                    return t.checkResultCondition(e)
                }));
            return i || (i = e.find((function (t) {
                return null == t.id || "default" === t.id
            })) || e[0]), "object" != typeof i.action && (i.action = {
                pay: i.pay,
                name: i.action,
                modal_id: i.modal_id,
                action_redirect: i.action_redirect
            }), i
        }, i.checkStepCondition = function () {
            return !0
        }, i.checkResultCondition = function (t) {
            var e = t.conditions || {},
                i = e.union,
                n = e.list || [],
                r = this.history.reduce((function (t, e) {
                    return t.concat(e.fields)
                }), []),
                a = n.map((function (t) {
                    var e = r.find((function (e) {
                        return e.id == t.field
                    }));
                    return {
                        condition: t,
                        field: e
                    }
                }));
            return !!a.length && (a = a["and" === i ? "every" : "some"]((function (t) {
                var e = t.condition,
                    i = t.field,
                    n = !0;
                if (!i) return !1;
                if ("vars" === e.type) {
                    var r = e.variants || [],
                        a = i.variants || [];
                    if (!a.length) return !!e.emptyVariant;
                    if (e.unionExtra || (n = a.every((function (t) {
                            return r.includes(t.id)
                        }))), n) {
                        var o = e.union;
                        "radio" !== i.inputType && "select" !== i.inputType || (o = "or"), n = r["and" === o ? "every" : "some"]((function (t) {
                            return a.find((function (e) {
                                return e.id == t
                            }))
                        }))
                    }
                } else if ("range" === e.type) {
                    var l = ("" + i.value).replace(/\s+/g, "").split(/\s[—-]\s/).map((function (t) {
                            return +t
                        })).filter((function (t) {
                            return "number" == typeof t && !isNaN(t)
                        })),
                        c = Math.min.apply(null, l),
                        d = Math.max.apply(null, l),
                        u = c !== d,
                        f = +e.rangeLimitFrom,
                        h = +e.rangeLimitTo;
                    if ("equal" === e.operator) return u ? c <= f && f <= d : f === c;
                    s(f) && s(h) && (f = Math.min(e.rangeLimitFrom, e.rangeLimitTo), h = Math.max(e.rangeLimitTo, e.rangeLimitFrom)), n && s(f) && (n = f <= c), n && s(h) && (n = d <= h)
                } else if ("text" === e.type) {
                    var p = e.fill,
                        m = (i.value || "").trim().replace(/ +/g, " "),
                        v = e.answers.map((function (t) {
                            return ("" + t).toLowerCase()
                        })).filter((function (t) {
                            return t
                        }));
                    if ("fill" === p) return !!m;
                    if ("empty" === p) return !m;
                    if ("include" === p) return v.some((function (t) {
                        return new RegExp("^" + t + "|\\s" + t, "i").test(m)
                    }));
                    if ("exclude" === p) return v.every((function (t) {
                        return !new RegExp("^" + t + "|\\s" + t, "i").test(m)
                    }))
                } else if ("file" === e.type) {
                    var g = e.fill,
                        x = i.value;
                    if ("fill" === g) return !!x.length;
                    if ("empty" === g) return !x.length
                }
                return n
            })));

            function s(t) {
                return !isNaN(+t) && null != t && "" != t
            }
        }, i.checkField = function (t) {
            var e, i = t.find("input, textarea, select").not('[type="hidden"]'),
                n = i[0],
                r = t[0],
                a = r.getAttribute("data-type"),
                s = [!0, 1, "true", "1"].includes(r.getAttribute("data-is-required")),
                o = n.getAttribute("data-check") || !1,
                l = n._mask && n.getAttribute("data-mask") || !1;
            e = ["checkbox", "radio", "image"].includes(a) ? !!i.closest(":checked").length : "file" === a ? n.files : n.value;
            var c = !(!s || e) && "form.required";
            if (l) !s && !e || n.getAttribute("data-mask-complete") || (c = "phone" === a && e ? "form.phone" : "form.required");
            else if (o)
                if (e.length && "email" === a) {
                    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Zа-яёА-ЯЁ\-0-9]+\.)+[a-zA-Zа-яёА-ЯЁ]{2,}))$/.test(e) || (c = "form.email")
                } else if (e.length && "phone" == a) {
                if (/[^0-9+\(\)\-\s]/.test(e)) c = "form.digits";
                else e.replace(/[^0-9]/g, "").length < 5 && (c = "form.minlength")
            } else if ("file" === a) c = !(!s || e.length) && "form.required";
            else if ("date" === a) {
                $(n).data("calendar").handler.checkError() && (c = "calendar.errors.invalid_date")
            }
            return c = c && flexbe_cli.locale.tr(c) || !1
        }, i.disableStep = function (t) {
            t.find("input, textarea, select").prop("disabled", !0)
        }, i.enableStep = function (t) {
            t.find("input, textarea, select").prop("disabled", !1)
        }, i.focusField = function (t, e) {
            if (void 0 === e && (e = 200), !t || !t.length) return !1;
            if (flexbe_cli.run.is_ios) return !1;
            var i = t.find(".form-field-text input, .form-field-text textarea, .dropdown-select").first();
            return !!i.length && (e ? setTimeout((function () {
                return i.focus()
            }), e) : i.focus(), !0)
        }, i.initFields = function () {
            this.initFieldImage(), this.initFieldCheckbox(), this.initFieldRadio(), this.initFieldSelect(), this.initFieldTextarea(), this.initFieldFile(), this.initFieldRange(), this.needInitMasks && this.isLoaded && this.inputMask()
        }, i.initFieldImage = function () {
            var t = this;
            this.$component.off("click.fieldImages").on("click.fieldImages", ".form-field-image-item", (function (e) {
                var i = e.currentTarget.querySelector("input"),
                    n = !i.checked;
                i.checked = n, n && "radio" === i.type && t.autoNextStep()
            }))
        }, i.initFieldFile = function () {
            this.$component.off("change.uploadFile").on("change.uploadFile", ".file-input", (function (t) {
                var e = $(t.currentTarget),
                    i = e.parents(".form-field-file"),
                    n = i.find(".form-field-file-files"),
                    r = e.val(),
                    a = t.currentTarget.files.length;
                if (i.addClass("active"), e.parents(".field").removeClass("is_error"), 0 === a) i.removeClass("active");
                else if (1 === a) n.find(".text").text(r);
                else if (a > 1) {
                    var s, o = a % 10;
                    s = 1 === o && 11 !== a % 100 ? "form.filesMult" : o > 1 && o < 5 ? "form.filesMult1" : "form.filesMult2", n.find(".text").text(a + " " + flexbe_cli.locale.tr(s))
                }
            })), this.$component.off("click.clearFiles").on("click.clearFiles", ".clear-files", (function (t) {
                var e = $(t.currentTarget).parents(".form-field-file");
                e.find(".file-input").val(""), e.removeClass("active")
            }))
        }, i.initFieldCheckbox = function () {}, i.initFieldRadio = function () {
            var t = this;
            this.autoNextEnabled && this.$component.off("click.initRadio").on("click.initRadio", ".form-field-radio--input", (function () {
                t.autoNextStep()
            }))
        }, i.initFieldSelect = function () {
            var t = this;
            this.$component.find(".dropdown-container").remove(), this.$component.find("select").each((function (e, i) {
                var n = $(i),
                    r = n.children("optgroup"),
                    a = n.closest('[data-type="select"]'),
                    s = "",
                    o = "";
                r.length && r.each((function (t, e) {
                    var i = $(e),
                        n = i.attr("label");
                    o += '<li class="optgroup">' + n + "</li>", i.children("option").each((function (t, e) {
                        var i = $(e),
                            n = i.attr("value").replace(/"/g, "&quot;"),
                            r = i.text() || "—";
                        "selected" === i.attr("selected") ? (s = r, o += '<li class="selected" data-value="' + n + '">' + r + "</li>") : o += '<li data-value="' + n + '">' + r + "</li>"
                    }))
                })), n.children("option").each((function (t, e) {
                    var i = $(e),
                        n = i.val().replace(/"/g, "&quot;"),
                        r = i.text() || "—";
                    "selected" === i.attr("selected") ? (s = r, o += '<li class="selected" data-value="' + n + '">' + r + "</li>") : o += '<li data-value="' + n + '">' + r + "</li>"
                }));
                var l = $('<div class="dropdown-container">\n                    <div class="dropdown-select">\n                        <span>' + s + '</span>\n                        <i></i>\n                    </div>\n                    <ul class="dropdown-select-ul">' + o + "</ul>\n                </div>"),
                    c = l.find(".dropdown-select-ul");
                n.after(l), l.off("click.selectdd").on("click.selectdd", ".dropdown-select", (function () {
                    var e = t.$component.closest(".b_block"),
                        i = t.core,
                        n = e.outerHeight() - 60,
                        r = c.outerHeight(),
                        s = Math.min(n, r),
                        o = l.offset().top,
                        d = i.tween.end - 30;
                    o + s > d && c.css({
                        top: d - (o + s) + "px",
                        maxHeight: s + "px"
                    }), setTimeout((function () {
                        var t = !l.hasClass("active");
                        l.toggleClass("active", t), a.toggleClass("active", t), t && $("body").on("click.quiz-select-element", (function (t) {
                            $(t.target).is(l) || $(t.target).closest(l).length || (l.removeClass("active"), a.removeClass("active"), $("body").off("click.quiz-select-element"))
                        }))
                    }), 50)
                })), l.off("click.selectli").on("click.selectli", ".dropdown-select-ul li", (function (t) {
                    var e = $(t.currentTarget);
                    if (!e.hasClass("optgroup")) {
                        var i = e.closest("ul").siblings(".dropdown-select");
                        l.removeClass("active"), a.removeClass("active"), e.siblings("li").removeClass("selected"), e.addClass("selected"), n.val(e.attr("data-value")), i.children("span").html(e.text())
                    }
                })), n.off("change.changeSelect").on("change.changeSelect", (function (t) {
                    var e = c.find("li"),
                        i = t.currentTarget.value;
                    e.removeClass("selected"), e.filter('[data-value="' + i + '"]').addClass("selected"), l.find(".dropdown-select > span").html(i)
                }))
            }))
        }, i.initFieldTextarea = function () {
            this.$component.find("textarea.autosize").each((function (t, e) {
                var i = e.offsetHeight - e.clientHeight,
                    n = $(e);
                n.removeAttr("data-autoresize"), n.off("keyup input").on("keyup input", (function (t) {
                    t.currentTarget.style.height = "auto", t.currentTarget.style.height = t.currentTarget.scrollHeight + i + "px"
                }))
            }))
        }, i.initFieldRange = function (t) {
            this.$component.find(".form-field-range").each((function (t, e) {
                return new flexbe_cli.components.classes.rangeInput($(e))
            }))
        }, i.submitForm = function () {
            var t = this;
            if (this.busy || flexbe_cli.is_admin) return !1;
            this.busy = !0;
            var e = {
                p_id: flexbe_cli.p_id,
                id: this.core.id,
                name: this.result.name,
                action: this.result.action.name,
                jsform: parseInt(448312, 10)
            };
            if (flexbe_cli.stat.u_id && (e.f_uid = flexbe_cli.stat.u_id), "pay" === this.result.action.name && this.result.action.pay) {
                var i = this.result.action.pay;
                i.desc && (e["pay[desc]"] = i.desc), i.price && (e["pay[price]"] = i.price, i.title && (e["product[items]"] = JSON.stringify([{
                    title: i.title,
                    id: flexbe_cli.p_id + "_" + flexbe_cli.s_id,
                    img: i.img,
                    count: 1,
                    price: i.price
                }]), e["product[price]"] = i.price, e["product[total]"] = 1))
            }
            return Object.entries(e).forEach((function (e) {
                var i = e[0],
                    n = e[1];
                null != n && t.addFields([{
                    name: i,
                    value: n,
                    type: "hidden"
                }], !1)
            })), "undefined" != typeof FormData ? (this.sendFormdata(), !1) : !(this.$form.find('input[type="file"]').length < 1) || (this.sendAjax(), !1)
        }, i.sendFormdata = function () {
            var t = this,
                e = new FormData(this.$form.get(0));
            if (e.append("is_ajax", "true"), "undefined" != typeof flexbeAPI && void 0 !== flexbeAPI.customLeadData && e.append("customLeadData", JSON.stringify(flexbeAPI.customLeadData)), e.append("f_ab", JSON.stringify(flexbe_cli.stat.AB.getCookie())), flexbe_cli.run.is_OSX && "function" == typeof e.entries) {
                var i = e.entries(),
                    n = Array.isArray(i),
                    r = 0;
                for (i = n ? i : i[Symbol.iterator]();;) {
                    var a;
                    if (n) {
                        if (r >= i.length) break;
                        a = i[r++]
                    } else {
                        if ((r = i.next()).done) break;
                        a = r.value
                    }
                    var s = a,
                        o = s[0],
                        l = s[1];
                    "object" == typeof l && l instanceof File && 0 === l.size && e.delete(o)
                }
            }
            this.$component.addClass("submitting"), this.$form.addClass("submitting"), $.ajax({
                url: this.$form.attr("action"),
                type: "POST",
                dataType: "json",
                processData: !1,
                contentType: !1,
                data: e,
                xhr: function () {
                    var t = $.ajaxSettings.xhr();
                    return t.upload, t
                }
            }).done((function (e) {
                t.$component.addClass("success"), t.$component.removeClass("submitting"), t.$form.removeClass("submitting"), e.send_formdata = !0, void 0 !== e.pay && (t.pay = e.pay), t.afterSend(), setTimeout((function () {
                    t.$component.removeClass("success")
                }), 1e3)
            })).fail((function () {
                t.$component.removeClass("submitting success"), t.$form.removeClass("submitting"), t.busy = !1
            }))
        }, i.sendAjax = function () {
            var t = this;
            this.$form.addClass("submitting");
            var e = this.$form.serialize();
            $.ajax({
                url: this.$form.attr("action"),
                type: "POST",
                dataType: "json",
                data: e + "&is_ajax=true"
            }).done((function (e) {
                t.$form.removeClass("submitting"), e.send_ajax = !0, void 0 !== e.pay && (t.pay = e.pay), t.afterSend()
            })).fail((function () {
                t.$form.removeClass("submitting")
            }))
        }, i.afterSend = function () {
            var t = this,
                e = this.result.action.name;
            if ("pay" === e && void 0 !== this.pay && null !== this.pay && this.pay.pay_link.length > 0) {
                var i = window.location.origin + window.location.pathname + (window.location.search ? window.location.search + "&" : "?") + "pay_id=" + this.pay.pay_id + "&h=" + this.pay.pay_hash;
                try {
                    window.history.pushState(null, null, i), setTimeout((function () {
                        flexbe_cli.events.emit("pay", {
                            action: "init"
                        })
                    }), 200)
                } catch (t) {
                    setTimeout((function () {
                        document.location = i
                    }), 500)
                }
            } else if ("redirect" === e) {
                var n = this.result.action.action_redirect;
                n && setTimeout((function () {
                    flexbe_cli.helpers.gotoLink(n)
                }), 1e3)
            } else {
                var r = this.result.action.modal_id;
                if (!flexbe_cli.modal.find(r)) {
                    var a = String(this.ownerId);
                    r = (a && a.split("_")[0]) + "_" + r
                }
                flexbe_cli.modal.find(r) ? flexbe_cli.events.emit("modal_command", {
                    command: "open",
                    id: r
                }) : console.warn("Modal open error:", "There is no window attached to the form.", r)
            }
            setTimeout((function () {
                t.busy = !1, t.resetForm(), t.toWelcome({
                    scroll: !1
                })
            }), 500)
        }, i.resetForm = function () {
            this.$form.find(".form-field-file, .file-input-outer").removeClass("active");
            var t = this.$stepsWrapper.find("input, textarea, select"),
                e = t.not("select").not('[type="hidden"]').not(".form-field-range--input"),
                i = t.filter("select"),
                n = t.filter(".form-field-range--input");
            t.prop("disabled", !0), i.each((function (t, e) {
                var i = e.querySelector("option"),
                    n = i && i.value || "";
                e.value !== n && (e.value = n, $(e).trigger("change"))
            })), n.each((function (t, e) {
                e.value = e.getAttribute("data-value"), $(e).trigger("change")
            })), e.each((function (t, e) {
                var i = e.defaultChecked;
                ["radio", "checkbox"].includes(e.type) ? e.checked = i : (e.removeAttribute("value"), e.value = "", e.removeAttribute("data-mask-complete"), e._mask && e._mask.updateValue())
            })), this.$form[0].reset()
        }, i.setData = function (t) {
            if (!t) return !1;
            t && t.fields && this.addFields(t.fields), t && t.items && this.addItems(t.items)
        }, i.addFields = function (t, e) {
            void 0 === e && (e = !0);
            var i = this.$component.find(".form-fields-advanced");
            t.length && i[0] && (e && i.empty(), t.forEach((function (t) {
                i.find('input[name="' + t.name + '"]').remove();
                var e = $("<input>").attr("type", t.type).attr("name", t.name).attr("value", t.value);
                i.append(e)
            })))
        }, i.addItems = function (t) {
            if (void 0 === t && (t = []), t && t.length) {
                var e = 0,
                    i = 0,
                    n = "",
                    r = [];
                t = t.map((function (t) {
                    return "object" != typeof t ? {} : (t.count = parseInt(t.count, 10) || 1, t.price = parseFloat(t.price) || 0, t.title = "string" == typeof t.title && t.title.trim() || t.title || "", e += t.price * t.count || 0, i += t.count, t)
                }));
                try {
                    n = JSON.stringify(t)
                } catch (t) {}
                var a = {
                    "product[items]": n,
                    "product[price]": e,
                    "product[total]": i
                };
                e && (a = _objectSpread({}, a, {
                    "pay[price]": e,
                    "pay[desc]": ""
                })), Object.entries(a).forEach((function (t) {
                    var e = t[0],
                        i = t[1];
                    r.push({
                        type: "hidden",
                        name: e,
                        value: i
                    })
                })), this.addFields(r)
            }
        }, i.inputMask = function () {
            return "undefined" != typeof IMask && (this.needInitMasks = !1, this.$masked.each((function (t, e) {
                flexbe_cli.components.classes.form.initMask(e)
            })), !0)
        }, e
    }(BaseComponent);
    flexbe_cli.components.classes.quiz = t
}();
"use strict";

function _inheritsLoose(e, t) {
    e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e.__proto__ = t
}! function () {
    var e = function (e) {
        function t() {
            return e.apply(this, arguments) || this
        }
        _inheritsLoose(t, e);
        var l = t.prototype;
        return l.setProgress = function () {
            var e = this.$progress.find(".progress-loader-bar .current"),
                t = "step" === this.$progress.attr("data-text-style"),
                l = e.attr("data-unit"),
                s = this.total,
                n = this.realIndex;
            flexbe_cli.is_admin && -1 === this.realIndex && "welcome" !== this.currentId && (n = +this.$currentStep.prevAll('[data-linked="linked"]').first().attr("data-real-index") + 1 || 0);
            n = Math.max(0, Math.min(s - 1, n));
            var r = t ? n + 1 : n,
                o = parseInt(100 * r / s, 10);
            if (this.$progress.attr("data-current", r), this.$progress.attr("data-total", s), this.$progress.attr("data-current-progress", o > 0 ? o : 0), e && l) {
                var i = o + "%";
                "step" === l ? i = r + " / " + s : "none" === l && (i = ""), e.find(".progress-runner").attr("data-value", i)
            }
            this.$progress.find(".progress-text .current").text(r), this.$progress.find(".progress-text .total").text(s), this.$progress.find(".progress-percent .current").text(o), this.$progress.find(".progress-loader-bar .current").css("width", o + "%"), this.$progress.find(".progress-loader-circle .current").attr("stroke-dashoffset", "" + Math.abs(100 - o))
        }, l.initFieldSelect = function () {
            var e = this;
            this.$component.find(".dropdown-container").remove(), this.$steps.find("select.atom-custom-select").each((function (t, l) {
                var s = $(l),
                    n = s.children("optgroup"),
                    r = s.closest('[data-type="select"]'),
                    o = s.children("option").length,
                    i = e.$form.hasClass("style-underlined") ? "sharp" : "",
                    a = "",
                    c = "",
                    d = !1,
                    f = !1,
                    u = !1;
                n.length && n.each((function (e, t) {
                    var l = $(t),
                        s = l.attr("label");
                    c += '<li class="optgroup">' + s + "</li>", l.children("option").each((function (e, t) {
                        var l = $(t),
                            s = l.attr("value").replace(/"/g, "&quot;"),
                            n = l.text() || "—";
                        "selected" === l.attr("selected") ? (a = n, c += '<li class="selected" data-value="' + s + '">' + n + "</li>") : c += '<li data-value="' + s + '">' + n + "</li>"
                    }))
                })), s.children("option").each((function (e, t) {
                    var l = $(t),
                        s = l.val().replace(/"/g, "&quot;"),
                        n = l.text() || "—";
                    "selected" === l.attr("selected") ? (a = n, c += '<li class="option-e selected" data-value="' + s + '"><span class="option-inner">' + n + "</span></li>") : c += '<li class="option-e" data-value="' + s + '"><span class="option-inner">' + n + "</span></li>"
                }));
                var p = $('\n                    <div class="dropdown-container">\n                        <div tabindex="0" class="dropdown-select">\n                            <span class="selected">' + a + '</span>\n                            <span class="arrow">\n                                <svg viewBox="0 0 14 8">\n                                    <path d="M1.4 0L0 1.34043L7 8L14 1.34043L12.6 0L7 5.34998L1.4 0Z"/>\n                                </svg>\n                            </span>\n                        </div>\n                    </div>\n                '),
                    v = $('\n                    <div class="atom-select size--large">\n                        <div class="overlay"></div>\n                        <ul class="dropdown-select-ul ' + i + '">' + c + "</ul>\n                    </div>\n                "),
                    h = $(".dropdown-select-ul", v);

                function g(e, t) {
                    if (!e.hasClass("optgroup") && e[0]) {
                        var l = p.find(".dropdown-select");
                        e.siblings("li").removeClass("selected"), e.addClass("selected"), s.val(e.attr("data-value")), l.children(".selected").html(e.text()), t && x()
                    }
                }

                function m() {
                    var e = h.children(".option-e"),
                        t = e.height(),
                        l = h.height(),
                        s = t * (e.index($(".selected", h)) + 1);
                    if (l > t * o) return !1;
                    h.scrollTop() < s - l ? h.animate({
                        scrollTop: s - l
                    }, 100) : h.scrollTop() > s - t && h.animate({
                        scrollTop: s - t
                    }, 100)
                }

                function x() {
                    u = !1, flexbe_cli.block.removeOverlay("customSelect"), v.removeClass("active"), r.removeClass("active"), clearTimeout(d), v.remove()
                }

                function w() {
                    u = !0, flexbe_cli.block.pushOverlay("customSelect");
                    var e = p.hasClass("active");
                    v.off("click.selectli").on("click.selectli", ".dropdown-select-ul li", (function (e) {
                        g($(e.currentTarget), !0)
                    })), v.off("mousewheel.selectUl").on("mousewheel.selectUl", ".dropdown-select-ul", (function (e) {
                        var t = e.currentTarget.scrollHeight,
                            l = e.currentTarget.clientHeight;
                        return !(e.currentTarget.scrollTop === t - l && e.deltaY > 0 || 0 === e.currentTarget.scrollTop && e.deltaY < 0)
                    })), $("body").append(v), clearTimeout(d), h.css({
                        left: p.offset().left + "px",
                        top: p.offset().top + "px",
                        width: p.width() + "px"
                    }), v.toggleClass("active", !e), r.toggleClass("active", !e), e || r.siblings('[data-type="select"]').removeClass("active").find(".dropdown-container").removeClass("active"), m()
                }
                s.after(p), flexbe_cli.responsive && flexbe_cli.run.is_screen_all_mobile ? s.off("change.changeSelect").on("change.changeSelect", (function (e) {
                    var t = e.target.value;
                    p.find(".dropdown-select").children(".selected").html(t)
                })) : (v.off("click.closeSelect").on("click.closeSelect", ".overlay", (function (e) {
                    x(), document.elementFromPoint(e.clientX, e.clientY).focus()
                })), p.off("click.openSelect").on("click.openSelect", ".dropdown-select", (function () {
                    w()
                })), p.off("focus.focusSelect").on("focus.focusSelect", ".dropdown-select", (function () {
                    f = !0
                })), p.off("blur.blurSelect").on("blur.blurSelect", ".dropdown-select", (function () {
                    f = !1, d = setTimeout((function () {
                        x()
                    }), 200)
                })), s.off("change.changeSelect").on("change.changeSelect", (function (e) {
                    var t = v.find(".dropdown-select-ul li"),
                        l = e.currentTarget.value;
                    t.removeClass("selected"), t.filter('[data-value="' + l + '"]').addClass("selected"), p.find(".dropdown-select .selected").html(l)
                })), p.off("keydown.keydownSelect").on("keydown.keydownSelect", ".dropdown-select", (function (e) {
                    if (f && [13, 27, 32, 38, 40].includes(e.keyCode)) {
                        var t = h.find(".option-e.selected");
                        if (40 === e.keyCode) e.preventDefault(), g(t.next(), !1), m();
                        else if (38 === e.keyCode) e.preventDefault(), g(t.prev(), !1), m();
                        else if (u || 32 !== e.keyCode) {
                            if (u && [13, 27, 32].includes(e.keyCode)) return e.preventDefault(), x(), !1
                        } else e.preventDefault(), w()
                    }
                })))
            }))
        }, l.initFieldFile = function () {
            this.$form.on("change.file" + this.eventId, ".file-input--original", (function (e) {
                var t = $(e.currentTarget),
                    l = t.parents(".file-input-outer"),
                    s = t.val(),
                    n = e.currentTarget.files.length;
                if (l.addClass("active"), t.closest("[data-type]").removeClass("is_error"), 1 === n) l.find(".file-item--title").text(s);
                else if (n > 1) {
                    var r, o = n % 10;
                    r = 1 === o && 11 !== n % 100 ? "form.filesMult" : o > 1 && o < 5 ? "form.filesMult1" : "form.filesMult2", l.find(".file-item--title").text(n + " " + flexbe_cli.locale.tr(r))
                } else l.removeClass("active")
            })), this.$form.on("click" + this.eventId, ".clear-files", (function (e) {
                var t = $(e.currentTarget).parents(".file-input-outer");
                t.find(".file-input--original").val(""), t.removeClass("active")
            }))
        }, t
    }(flexbe_cli.components.classes.quiz);
    flexbe_cli.components.classes.quiz = e
}();
"use strict";

function _inheritsLoose(e, o) {
    e.prototype = Object.create(o.prototype), e.prototype.constructor = e, e.__proto__ = o
}! function () {
    var e = function (e) {
        function o() {
            for (var o, t = arguments.length, n = new Array(t), i = 0; i < t; i++) n[i] = arguments[i];
            return (o = e.call.apply(e, [this].concat(n)) || this).is = "menu", o.isOpen = !1, o.isOpenNested = !1, o.isRestored = !0, o.eventId = o.owner._core.id, o.isRowDirection = "row" === o.$component.attr("data-direction"), o.isShowDropdownClick = "click" === o.$component.attr("data-type"), o.isMenuShowMore = "true" === o.$component.attr("data-show_more"), o.$menuList = o.$component.find(".component-menu-list"), o.menuSize = Array.from(o.component.classList).filter((function (e) {
                return e.includes("size--")
            }))[0], o.menuWeight = Array.from(o.component.classList).filter((function (e) {
                return e.includes("weight--")
            }))[0], o.menuClasses = o.menuSize + " " + o.menuWeight, o.$componentCopy = o.$component.clone(), o.restoreMenuItems(), o
        }
        _inheritsLoose(o, e);
        var t = o.prototype;
        return t.onInit = function () {
            var e = this;
            this.bindEvents(), this.isMenuShowMore && this.createListShowMore(), this.$button = this.$component.find(".folder-item"), this.$header = this.$button.closest(".floating-header"), this.$header.length && this.$header.off("transform-header").on("transform-header", (function () {
                e.$dropdown && e.$dropdown.length && e.closeDropdown()
            })), flexbe_cli.run.is_screen_all_mobile && this.$menuList.find(".folder-item").length && this.$menuList.addClass("nested-menu")
        }, t.onResize = function (e) {
            if (!this.isMenuShowMore || !this.isRowDirection || ["bottom", "top"].includes(e.type)) return !1;
            this.createListShowMore(), this.isOpen && this.setDropdownPosition(this.folder)
        }, t.onOpen = function () {
            if (!this.isMenuShowMore || !this.isRowDirection) return !1;
            this.createListShowMore()
        }, t.bindEvents = function () {
            var e = this;
            flexbe_cli.is_admin ? this.$component.off("click.core").on("click.core", (function (e) {
                return e.preventDefault(), !1
            })) : (flexbe_cli.run.is_desktop && !flexbe_cli.is_admin && this.$component.off("mouseenter.core mouseleave.core").on("mouseenter.core mouseleave.core", ".menu-item", (function (o) {
                e.$component.toggleClass("in-hover"), $(o.currentTarget).toggleClass("hover")
            })), flexbe_cli.run.is_screen_all_mobile ? this.$component.off("click.core").on("click.core", "li.folder-item > .folder-item-text", (function (o) {
                return e.toggleMobileMenu(o.currentTarget), !1
            })) : (this.isShowDropdownClick || flexbe_cli.run.is_touch ? (this.$component.off("click.core").on("click.core", "li.folder-item", (function (o) {
                e.toggleDropdown(o.currentTarget)
            })), this.$component.on("mouseenter.core", "li.folder-item", (function () {
                clearTimeout(e.nestedTimer), clearTimeout(e.containerCloseTimer)
            }))) : (this.$component.on("mouseenter.core", "li.folder-item", (function (o) {
                clearTimeout(e.dropdownTimer), clearTimeout(e.nestedTimer), clearTimeout(e.containerCloseTimer), e.currentTarget !== o.currentTarget && (e.currentTarget = o.currentTarget, e.toggleDropdown(o.currentTarget)), e.$component.off("click.core"), setTimeout((function () {
                    e.$component.on("click.core", "li.folder-item", (function (o) {
                        e.toggleDropdown(o.currentTarget)
                    }))
                }), 500)
            })), this.$component.on("mouseleave.core", "li.folder-item", (function () {
                clearTimeout(e.dropdownTimer), e.dropdownTimer = setTimeout((function () {
                    e.currentTarget = null, e.closeDropdown()
                }), 100)
            }))), this.isRowDirection && this.isMenuShowMore && $(window).off("resized.dropdown." + this.eventId).on("resized.dropdown." + this.eventId, (function () {
                e.createListShowMore(), e.isOpen && e.setDropdownPosition(e.folder)
            }))))
        }, t.createListShowMore = function () {
            if (this.restoreMenuItems(), (this.isRowDirection || flexbe_cli.run.is_screen_all_mobile) && !flexbe_cli.run.is_screen_all_mobile) {
                var e = this.$menuList.parent().innerWidth();
                if (e >= this.initialMenuWidth) return !1;
                this.isRestored = !1;
                var o = this.$componentCopy.clone(),
                    t = o.find("li.root-item").toArray(),
                    n = 42,
                    i = 0;
                o.appendTo("body").css({
                    position: "absolute",
                    top: 0,
                    left: 0,
                    opacity: 0
                }), t.some((function (o, t) {
                    if (i = t, n += $(o).outerWidth(!0), e < n) return !0
                })), this.$menuList.empty(), this.$menuList.append(t.splice(0, i)), this.$menuList.append('\n                <li class=\'show-more menu-item folder-item\'>\n                <svg width="18" height="4" viewBox="0 0 18 4" xmlns="http://www.w3.org/2000/svg">\n                <path transform="rotate(-90 2 2)" fill="currentcolor" fill-rule="evenodd" d="M4 2a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm0 7a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm-2 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/>\n                </svg>\n                <ul class=\'component-menu-dropdown-list\'></ul>\n                </li>\n                '), this.$menuList.find(".show-more .component-menu-dropdown-list").append(t), o.remove()
            }
        }, t.restoreMenuItems = function () {
            if (this.isRowDirection) {
                if (!this.isRestored && this.$componentCopy) {
                    var e = this.$componentCopy.find(".component-menu-list").clone();
                    this.$menuList.html(e.html()), this.isRestored = !0
                }
                this.$menuList.css({
                    position: "fixed",
                    top: "-9999px",
                    left: "-9999px"
                }), this.initialMenuWidth = this.$menuList.innerWidth(), this.$menuList.css({
                    position: "",
                    top: "",
                    left: ""
                })
            }
        }, t.onClose = function () {
            this.closeDropdown()
        }, t.toggleDropdown = function (e) {
            !this.isOpen ? this.openDropdown(e) : this.closeDropdown(e)
        }, t.openDropdown = function (e) {
            var o = this;
            if (!flexbe_cli.is_admin) {
                this.isOpen && this.folder != e && this.closeDropdown(), $(this.root).closest(".m_modal").length && $(this.root).find(".scroller").off("scroll").on("scroll", (function () {
                    o.isOpen && o.closeDropdown()
                })), this.$component.addClass("in-open"), $(e).addClass("open");
                var t = $("body"),
                    n = $(e).find(".component-menu-dropdown-list").clone()[0];
                this.isOpen = !0, this.isOpenNested = !1, this.folder = e, this.$dropdown = $('<div class="component-menu-dropdown"></div>'), this.$dropdown.addClass(this.menuClasses), this.$dropdown.append(n).appendTo(t), this.setDropdownPosition(e), $("body").on("click.menu-dropdown-" + this.eventId + " keydown.menu-dropdown-" + this.eventId, (function (e) {
                    var t = "keydown" === e.type && 27 === e.keyCode,
                        n = "click" === e.type && $(e.target).closest(".element-item").data("id") !== +o.eventId && !$(e.target).closest(".component-menu-dropdown").length,
                        i = $(e.target).closest(".folder-item").length;
                    (t || n || !i && "click" === e.type) && o.closeDropdown()
                })), flexbe_cli.run.is_touch ? this.$dropdown.off("click.menu-dropdown-" + this.eventId).on("click.menu-dropdown-" + this.eventId, "li", (function (e) {
                    e.currentTarget.classList.contains("folder-item") ? (o.toggleNestedDropdown({
                        folderDropdown: e.currentTarget,
                        parentTarget: e.currentTarget.parentElement
                    }), e.stopPropagation()) : o.closeDropdown()
                })) : (this.$dropdown.off("mouseenter").on("mouseenter", (function () {
                    clearTimeout(o.dropdownTimer), clearTimeout(o.nestedTimer), clearTimeout(o.containerCloseTimer)
                })), this.$dropdown.off("mouseenter.menu-dropdown-" + this.eventId).on("mouseenter.menu-dropdown-" + this.eventId, "li", (function (e) {
                    clearTimeout(o.dropdownTimer), e.currentTarget !== o.folderDropdown && (o.folderDropdown = e.currentTarget, o.closeNestedDropdown({
                        folderDropdown: e.currentTarget,
                        parentTarget: e.currentTarget.parentElement
                    })), o.openNestedDropdown({
                        folderDropdown: e.currentTarget,
                        parentTarget: e.currentTarget.parentElement
                    })
                })), this.$dropdown.off("mouseleave.menu-dropdown-" + this.eventId).on("mouseleave.menu-dropdown-" + this.eventId, "li", (function (e) {
                    clearTimeout(o.nestedTimer), o.nestedTimer = setTimeout((function () {
                        o.currentTarget = null, o.closeNestedDropdown({
                            parentTarget: e.currentTarget.parentElement
                        }), o.isShowDropdownClick || o.closeDropdown()
                    }), 200)
                })), this.$dropdown.off("mouseover.menu-dropdown-" + this.eventId).on("mouseover.menu-dropdown-" + this.eventId, "li", (function () {
                    clearTimeout(o.nestedTimer), clearTimeout(o.containerCloseTimer)
                })), this.$dropdown.off("mouseleave").on("mouseleave", (function (e) {
                    clearTimeout(o.containerCloseTimer), o.closeNestedDropdown({
                        parentTarget: e.currentTarget
                    }), o.containerCloseTimer = setTimeout((function () {
                        o.isShowDropdownClick || (o.currentTarget = null, o.closeDropdown())
                    }), 200)
                }))), flexbe_cli.components.links()
            }
        }, t.closeDropdown = function (e) {
            if (!flexbe_cli.is_admin) {
                this.$component.removeClass("in-open"), this.$component.find("li.menu-item").toArray().map((function (e) {
                    return $(e).removeClass("open")
                })), $("body").off("click.menu-dropdown-" + this.eventId + " keydown.menu-dropdown-" + this.eventId), this.$dropdown && (this.$dropdown.off("click.menu-dropdown-" + this.eventId), this.$dropdown.remove()), this.isOpen = !1;
                var o = this.folder === e,
                    t = e && $(e)[0].classList.contains("folder-item");
                !o && t && this.openDropdown(e)
            }
        }, t.toggleNestedDropdown = function (e) {
            var o = e.folderDropdown,
                t = e.parentTarget;
            !this.isOpenNested ? this.openNestedDropdown({
                folderDropdown: o,
                parentTarget: t
            }) : this.closeNestedDropdown({
                folderDropdown: o,
                parentTarget: t
            })
        }, t.openNestedDropdown = function (e) {
            var o = e.folderDropdown,
                t = e.parentTarget,
                n = $(t),
                i = $(o),
                r = $(o.lastElementChild),
                s = n.offset(),
                d = n.innerHeight(),
                l = n.innerWidth(),
                c = i.offset(),
                p = r.innerHeight(),
                a = r.innerWidth(),
                h = this.root.ownerDocument.defaultView.innerWidth - (s.left + l + 25),
                m = this.bodyHeight < s.top + d + p,
                u = c.top > p,
                f = c.top + p > window.pageYOffset + window.innerHeight,
                w = flexbe_cli.block.hasOverlay || [],
                g = "modal" === w[w.length - 1],
                T = m && u || g && f;
            this.folderDropdown = o, this.isOpenNested = !0, flexbe_cli.run.is_touch && $(o).hasClass("folder-item") && $(o).addClass("hover"), h > a || h > s.left ? $(o.lastChild).addClass("show-dropdown in-right") : $(o.lastChild).addClass("show-dropdown in-left"), T && $(o.lastChild).addClass("in-bottom")
        }, t.closeNestedDropdown = function (e) {
            var o = e.folderDropdown,
                t = e.parentTarget,
                n = $(t).find(".component-menu-dropdown-list"),
                i = this.folderDropdown === o,
                r = o && $(o)[0].classList.contains("folder-item");
            (this.isOpenNested = !1, $(n).removeClass("show-dropdown in-left in-right in-bottom"), flexbe_cli.run.is_touch) && Array.from($(t).find(".folder-item")).map((function (e) {
                $(e).removeClass("hover")
            }));
            r && !i && this.openNestedDropdown({
                folderDropdown: o,
                parentTarget: t
            })
        }, t.setDropdownPosition = function (e) {
            if (void 0 === e && (e = this.folder), e) {
                this.bodyHeight = Math.max(document.body.offsetHeight, document.documentElement.offsetHeight, document.body.clientHeight, document.documentElement.clientHeight);
                var o, t = this.$dropdown,
                    n = t.find(".component-menu-dropdown-list"),
                    i = $(e).hasClass("show-more"),
                    r = i ? $(e) : $(e).children().first(),
                    s = r.innerWidth(),
                    d = r.innerHeight(),
                    l = r.offset(),
                    c = l.top,
                    p = l.left,
                    a = n.innerWidth(),
                    h = n.innerHeight(),
                    m = p + a > window.innerWidth,
                    u = p + p / 2 - (a / 2 + 20) < 0,
                    f = c + d + h + 20 > this.bodyHeight,
                    w = c + d + h > window.pageYOffset + window.innerHeight,
                    g = flexbe_cli.block.hasOverlay || [],
                    T = "modal" === g[g.length - 1];
                m ? o = p + s - a : i || !this.isRowDirection && !u ? (o = p + s / 2 - a / 2, a < s && (o = p)) : o = p - 8;
                var v = {
                    position: "absolute",
                    width: a,
                    height: h + 5,
                    "padding-top": "5px",
                    top: c + d,
                    left: o,
                    "z-index": 2
                };
                this.isRowDirection || (v["margin-top"] = "-5px"), (f || T && w) && (v.top = c - (h + 5), v["padding-top"] = "0", v["margin-top"] = "-5px", this.isRowDirection || (v["margin-top"] = "0")), a < s && (v.width = s + 20, n.css("min-width", s + 20)), this.$header.length && this.$header.hasClass("fixed-header") && (v.position = "fixed", v.top = r[0].offsetTop + r[0].clientHeight + 10 + "px", v["z-index"] = 9), $(this.root).hasClass("m_modal") && (v["z-index"] = 15), t.css(v)
            }
        }, t.toggleMobileMenu = function (e) {
            $(e.parentElement).toggleClass("show"), $(e.nextElementSibling).slideToggle(350)
        }, o
    }(BaseComponent);
    flexbe_cli.components.classes.menu = e
}();
"use strict";

function _extends() {
    return (_extends = Object.assign || function (i) {
        for (var e = 1; e < arguments.length; e++) {
            var t = arguments[e];
            for (var s in t) Object.prototype.hasOwnProperty.call(t, s) && (i[s] = t[s])
        }
        return i
    }).apply(this, arguments)
}

function _assertThisInitialized(i) {
    if (void 0 === i) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return i
}

function _inheritsLoose(i, e) {
    i.prototype = Object.create(e.prototype), i.prototype.constructor = i, i.__proto__ = e
}! function () {
    var i = function (i) {
        function e() {
            for (var e, t = arguments.length, s = new Array(t), a = 0; a < t; a++) s[a] = arguments[a];
            var n = _assertThisInitialized(e = i.call.apply(i, [this].concat(s)) || this),
                o = n.component,
                r = n.$component,
                l = o.getAttribute("data-mode");
            return e.is = "cards", e.mode = l, "slider" === l && (e.require = ["/_s/lib/swiper/swiper.v4.js?450"], e.$cardsRoot = r.closest(".flexbe-cards-root"), e.$slider = e.$cardsRoot.find(".flexbe-cards-slider"), e.$pagination = e.$cardsRoot.find(".slider-pagination--cards"), e.$navigation = e.$cardsRoot.find(".slider-button--cards")), e
        }
        _inheritsLoose(e, i);
        var t = e.prototype;
        return t.onLoad = function () {
            this.initSlider()
        }, t.onView = function (i) {
            var e = i.state;
            e && !this.wasView && this.swiper && (this.swiper.update(), this.checkSlidesVisibility(!0), this.checkNavigationState()), this.toggleSwiperAutoplay(e), this.toggleSwiperIteract(!e), e && (this.wasView = !0)
        }, t.initSlider = function () {
            if ("slider" === this.mode) try {
                this.createSwiperSettings(), this.createSwiperInstance(), this.createSwiperNavigation(), this.createSwiperPagination(), this.createSwiperEditorFixes(), this.swiper.init(), this.toggleSwiperAutoplay(this.core.inView)
            } catch (i) {
                console.log(i)
            }
        }, t.createSwiperSettings = function () {
            var i = this,
                e = flexbe_cli.run.is_screen_all_mobile,
                t = +this.$slider.attr("data-count"),
                s = +this.$slider.attr("data-cards"),
                a = +this.$slider.attr("data-cards-mobile") || 1,
                n = e ? t <= a : t <= s,
                o = 0;
            flexbe_cli.is_admin && (o = Math.floor($(this.root).data("slide-move")) || 0, o = Math.max(0, Math.min(t - 1, o)));
            var r = !flexbe_cli.is_admin && Math.floor(1e3 * +this.$slider.attr("data-autoplay")) || 0,
                l = !flexbe_cli.is_admin && this.$slider.attr("data-effect") || "slide",
                d = this.$pagination.attr("data-type") || !1,
                c = !flexbe_cli.is_admin && +this.$slider.attr("data-loop") || 0;
            n && c && (c = !1), this.totalSlides = t, this.settings = {
                speed: Math.min(800, 300 * s),
                threshold: 10,
                autoHeight: !1,
                preloadImages: !1,
                preventClicks: !1,
                touchStartPreventDefault: !1,
                touchMoveStopPropagation: !1,
                preventClicksPropagation: !1,
                preventInteractionOnTransition: !0,
                touchReleaseOnEdges: !0,
                a11y: !1,
                lazy: !1,
                slidesPerView: s,
                slidesPerGroup: 1,
                simulateTouch: !flexbe_cli.is_admin,
                centerInsufficientSlides: !0,
                initialSlide: o,
                loop: c,
                effect: l,
                autoplay: r && {
                    delay: r,
                    stopOnLastSlide: !!c,
                    disableOnInteraction: !0
                } || !1,
                navigation: {},
                pagination: {
                    clickable: !1,
                    type: d,
                    el: this.$pagination[0],
                    renderBullet: function () {
                        return ""
                    },
                    formatFractionCurrent: function () {
                        return i.getGroupIndex() + 1
                    },
                    formatFractionTotal: function () {
                        return Math.ceil(i.totalSlides / i.swiper.params.slidesPerView)
                    }
                },
                breakpoints: {
                    768: {
                        slidesPerView: a,
                        slidesPerGroup: 1,
                        speed: 400
                    }
                }
            }
        }, t.createSwiperInstance = function () {
            var i = this;
            void 0 !== this.swiper && this.swiper.destroy();
            var e, t = !1,
                s = new Swiper(this.$slider[0], _extends({
                    init: !1,
                    wrapperClass: "flexbe-cards",
                    slideClass: "flexbe-card",
                    noSwipingClass: "redactor-box"
                }, this.settings)),
                a = function () {
                    var a = i.totalSlides > s.params.slidesPerView;
                    t || (t = !0, i.$slider.addClass("swiper-inited")), e !== a && (e = a, i.$cardsRoot.toggleClass("slider-active", a), i.$slider.toggleClass("swiper-active", a), s.update())
                };
            s.once("init", (function () {
                a(),
                    function () {
                        if (s.loopedSlides) {
                            var e = $(s.slides).filter("." + s.params.slideDuplicateClass);
                            flexbe_cli.element.init(e), flexbe_cli.components.initComponents({
                                core: i.core
                            })
                        }
                    }()
            })), s.on("resize", $.debounce((function () {
                a()
            }), 50)), s.on("sliderMove", (function () {
                i.toggleSwiperIteract(!0), i.iteractTimeout = setTimeout((function () {
                    i.toggleSwiperIteract(!1)
                }), 3e3)
            })), this.swiper = s
        }, t.createSwiperNavigation = function () {
            var i = this,
                e = this.swiper;
            e.once("init", (function () {
                i.checkNavigationState()
            })), e.on("resize", $.debounce((function () {
                i.checkNavigationState()
            }), 50)), e.on("slideChange", (function () {
                i.skipSlide || i.checkNavigationState()
            })), this.$navigation.on("click", (function (e) {
                var t = e.currentTarget.getAttribute("data-direction");
                i["prev" === t ? "prevSlide" : "nextSlide"]()
            }))
        }, t.createSwiperPagination = function () {
            var i = this,
                e = this.swiper,
                t = e.params;
            e.on("paginationRender", (function () {
                if ("bullets" === t.pagination.type)
                    if (e.loopedSlides) i.loopPagination = new flexbe_cli.components.classes.bulletsLoopPagination(i.$pagination[0], {
                        init: !1,
                        tag: "span",
                        onClick: function (e) {
                            e < 0 ? i.prevSlide() : e > 0 && i.nextSlide()
                        }
                    });
                    else {
                        var s = t.pagination.bulletElement || "span",
                            a = t.pagination.bulletClass || "span",
                            n = t.slidesPerView || 1,
                            o = Math.ceil(i.totalSlides / n),
                            r = new Array(o).fill();
                        r = r.map((function (i, e) {
                            return "<" + s + ' class="' + a + '" data-index="' + e + '"></' + s + ">"
                        })).join(""), i.$pagination.html(r), i.bulletsPagination = new flexbe_cli.components.classes.bulletsPagination(i.$pagination[0], {
                            init: !1,
                            targets: "span",
                            active: e.realIndex,
                            onClick: function (e, t) {
                                t !== e && i.toSlide(e)
                            }
                        })
                    } i.$pagination.toggleClass("disabled", i.totalSlides <= e.params.slidesPerView)
            })), e.on("paginationUpdate", (function () {
                if (!i.skipSlide)
                    if (i.bulletsPagination) {
                        var t = i.getGroupIndex(e.realIndex);
                        i.bulletsPagination.setActive(t)
                    } else if (i.loopPagination) {
                    var s = e.previousIndex,
                        a = e.activeIndex,
                        n = i.totalSlides,
                        o = s < a ? "next" : "prev";
                    !(s === a || "next" === o && s === a - n || "prev" === o && s === a + n) && i.loopPagination.setActive(o)
                }
            }))
        }, t.createSwiperEditorFixes = function () {
            var i = this;
            if (flexbe_cli.is_admin) {
                var e = this.swiper;
                e.on("init", (function () {
                    i.checkSlidesVisibility()
                })), e.on("slideChange", (function () {
                    i.checkSlidesVisibility(), $(i.root).data("slide-move", e.realIndex)
                })), e.on("transitionStart touchStart", (function () {
                    i.$component.addClass("slider-in-animation")
                })), e.on("transitionEnd touchEnd", (function () {
                    i.$component.removeClass("slider-in-animation")
                })), e.on("resize", $.debounce((function () {
                    i.checkSlidesVisibility()
                }), 50))
            }
        }, t.checkSlidesVisibility = function () {
            if (flexbe_cli.is_admin) {
                var i = this.swiper,
                    e = $(i.slides),
                    t = e.slice(i.activeIndex, i.activeIndex + i.params.slidesPerView);
                e.not(t).removeClass("swiper-slide-visible").addClass("swiper-slide-hidden"), t.removeClass("swiper-slide-hidden").addClass("swiper-slide-visible")
            }
        }, t.checkNavigationState = function () {
            var i = this.swiper,
                e = i.params.navigation.disabledClass,
                t = this.$navigation,
                s = t.eq(0),
                a = t.eq(1),
                n = i.isBeginning,
                o = i.isEnd;
            i.loopedSlides && (n = !1, o = !1), t.toggleClass("disabled", this.totalSlides <= i.params.slidesPerView), s.toggleClass(e, n), a.toggleClass(e, o)
        }, t.getGroupIndex = function (i, e, t) {
            void 0 === t && (t = !0);
            var s = this.swiper;
            void 0 === i && (i = s.realIndex), e || (e = s.params.slidesPerView || 1), t && (s.loopedSlides || e <= 1) && (t = !1);
            var a = Math.ceil(this.totalSlides / e),
                n = Math.floor(i / e);
            if (t) {
                var o = n * e,
                    r = i - o > o + e - 1 - i,
                    l = i % e != 0 && i + e >= this.totalSlides;
                (r || l) && (n += 1)
            }
            return Math.max(0, Math.min(a, n))
        }, t.getSlideIndex = function (i, e) {
            return e || (e = this.swiper.params.slidesPerView || 1), i * e
        }, t.toSlide = function (i, e) {
            var t = this.swiper,
                s = this.getSlideIndex(i, e);
            return t.loopedSlides ? t.slideToLoop(s) : t.slideTo(s)
        }, t.prevSlide = function (i) {
            var e, t = this,
                s = this.swiper,
                a = s.params.slidesPerView;
            if (i || (i = a), i = Math.abs(i), s.loopedSlides) {
                if (s.activeIndex < i) {
                    var n = s.activeIndex + this.totalSlides;
                    this.skipSlide = !0, s.slideTo(n, 0)
                }
                e = s.activeIndex - i
            } else {
                var o = this.getGroupIndex() - Math.ceil(i / a);
                e = this.getSlideIndex(o)
            }
            setTimeout((function () {
                t.skipSlide = !1, s.slideTo(e)
            }), 1)
        }, t.nextSlide = function (i) {
            var e, t = this,
                s = this.swiper;
            i || (i = s.params.slidesPerView);
            var a = s.params.slidesPerView,
                n = s.activeIndex,
                o = n + a - 1;
            if (s.loopedSlides) {
                if (s.slides.length - 1 - o < i) {
                    var r = n - this.totalSlides;
                    this.skipSlide = !0, s.slideTo(r, 0)
                }
                e = s.activeIndex + i
            } else {
                var l = this.getGroupIndex() + Math.ceil(i / a);
                e = this.getSlideIndex(l)
            }
            setTimeout((function () {
                t.skipSlide = !1, s.slideTo(e)
            }), 1)
        }, t.toggleSwiperAutoplay = function (i) {
            if (this.swiper) {
                var e = this.swiper,
                    t = e.autoplay,
                    s = e.params.autoplay || {};
                t && s.enabled && (i && !t.running ? t.start() : i || t.stop())
            }
        }, t.toggleSwiperIteract = function (i) {
            this.swiper && this.$slider && (this.$slider.toggleClass("swiper-iteracted", i), clearTimeout(this.iteractTimeout))
        }, e
    }(BaseComponent);
    flexbe_cli.components.classes.cards = i
}();
"use strict";
flexbe_cli.init = function () {
    flexbe_cli.run.init(), flexbe_cli.header.init(), flexbe_cli.lib.init(), flexbe_cli.locale.init(), flexbe_cli.stat.init(), flexbe_cli.scroll.init(), flexbe_cli.resize.init(), flexbe_cli.components.init(), flexbe_cli.block.init(), flexbe_cli.modal.init(), flexbe_cli.widget.init(), flexbe_cli.element.init(), flexbe_cli.cookies.init()
}, flexbe_cli._init();