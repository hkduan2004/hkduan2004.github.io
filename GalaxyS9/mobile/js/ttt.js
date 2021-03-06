/**
 * samsung.com - Javascript Namespace Defined
 * src : common/js/src/smg/namespace.js
 *
 * @version 1.0.0
 * @since 2015.09.22
 * @update
 */! function (s) {
    "use strict";
    "undefined" == typeof s.smg && (s.smg = {}), s.smg["static"] = s.smg["static"] || {}, s.smg.event = s.smg.event || {},
        s.smg.util = s.smg.util || {}, s.smg.common = s.smg.common || {}, s.smg.global = s.smg.global || {}, s.smg.api =
        s.smg.api || {}, s.smg.module = s.smg.module || {}, s.smg.page = s.smg.page || {}, s.smg.messages = s.smg.messages || {}
}(window);
/**
 * samsung.com - Utility Script Defined
 * src : common/js/src/smg/util/smg.util.js
 *
 * @version 1.0.0
 * @since 2015.09.22
 * @requires
 *  jQuery
 *  namespace.js
 * @update
 */! function (e, t) {
    "use strict";
    "undefined" == typeof e.smg && (e.smg = {}), "undefined" == typeof e.smg.util && (e.smg.util = {});
    var n = Object.prototype.hasOwnProperty,
        i = e.document;
    e.smg.util = {
        isArray: function (e) {
            return "array" === t.type(e)
        },
        def: function (e, i) {
            for (var o in i) n.call(i, o) && ("object" === t.type(e[o]) ? e[o] = this.isArray(e[o]) ? i[o].slice(0) :
                this.def(e[o], i[o]) : e[o] = i[o]);
            return e
        },
        winSize: function () {
            var t = {
                w: e.innerWidth || i.documentElement.clientWidth || i.body.clientWidth,
                h: e.innerHeight || i.documentElement.clientHeight || i.body.clientHeight
            };
            return t
        },
        getQueryStr: function (t) {
            t = t || e.location.href;
            var n = {};
            return t.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (e, t, i) {
                n[t] = i
            }), n
        },
        winOpener: function (t) {
            var n, i, o, r = {
                url: "http://www.samsung.com",
                name: "smg_opener_" + (new Date).getTime(),
                width: 400,
                height: 400,
                left: null,
                top: null,
                scrollbars: "no",
                toolbar: "no",
                location: "no",
                directories: "no",
                status: "no",
                menubar: "no",
                resizable: "no"
            };
            o = e.smg.util.def(r, t || {}), o.left = o.left || screen.width / 2 - o.width / 2, o.top = o.top || screen.height /
                2 - o.height / 2, i = "";
            for (var a in o) "url" != a && "name" != a && (i += "," + a + "=" + o[a]);
            return i = i.substr(1, i.length), n = window.open(o.url, o.name, i)
        },
        imgLoader: function (e, n) {
            e.each(function () {
                var i = n || function () {};
                this.complete || t(this).height() > 0 ? i.apply(e) : t(this).load(function () {
                    i.apply(e)
                })
            })
        },
        iPadVWRender: function () {
            var n = null != navigator.userAgent.match(/iPad/i);
            n && t(e).on("orientationchange", function () {
                var e = t(".prd-item, .prd-img, .appliance-info");
                e.css("display", "none").height(), e.css("display", "")
            })
        }
    }, e.smg.util.Cookie = function () {
        var t = {
            expires: "",
            path: "/",
            domain: "",
            secure: ""
        };
        return {
            setCookie: function (n, i, o) {
                var r = new Date;
                r.setTime(r.getTime() + 24 * (o || 0) * 60 * 60 * 1e3);
                var a = e.smg.util.def(t, {
                    expires: r
                });
                document.cookie = [n, "=", i, a.expires ? "; expires=" + a.expires.toUTCString() : "", a.path ?
                    "; path=" + a.path : "", a.domain ? "; domain=" + a.domain : "", a.secure ? "; secure" : ""].join(
                    "")
            },
            getCookie: function (e) {
                for (var t, n = e + "=", i = document.cookie.split(";"), o = 0, r = i.length; o < r; o++) {
                    for (t = i[o];
                         " " == t.charAt(0);) t = t.substring(1);
                    if (t.indexOf(n) != -1) return t.substring(n.length, t.length)
                }
                return ""
            }
        }
    }, e.smg.util.cookie = new e.smg.util.Cookie, e.smg.util.loadCSS = function (e, n, i) {
        e && "string" !== t.type(e) || (e = [e]);
        var o = t("head"),
            r = [];
        t.map(e, function (e) {
            var n = t.Deferred();
            r.push(n), t("<link>").attr({
                rel: "stylesheet",
                type: "text/css",
                href: e + (i ? "?_ts=" + (new Date).getTime() : "")
            }).appendTo(o).load(function () {
                n.resolve()
            })
        }), t.when.apply(t, r).done(function () {
            t.isFunction(n) && n()
        })
    }
}(window, jQuery);
/**
 * samsung.com - Static Values Defined
 * src : common/js/src/smg/static/smg.static.js
 *
 * @version 1.0.0
 * @since 2015.09.22
 * @requires
 *  namespace.js
 * @update
 */! function (e) {
    "use strict";
    "undefined" == typeof e.smg && (e.smg = {}), "undefined" == typeof e.smg["static"] && (e.smg["static"] = {}), e.smg[
        "static"] = {
        CSS: {
            VIDEO_OPEN: "video-open",
            SEARCH_POS: "search-pos",
            NAV_OPEN: "nav-open",
            NAV_CLOSE: "nav-close",
            HAS_ANIMATED: "has-animated",
            IS_SHOW: "is-show",
            IS_HIDE: "is-hide",
            IS_OPEN: "is-open",
            IS_SELECT: "is-select",
            JS_IMG_SRC: "js-img-src",
            JS_IMG_LAZY: "js-img-lazy",
            LAZY_LOADED: "lazy-loaded",
            LAYER_OPEN: "layer-open",
            LAYER_MODULE: "layer-module"
        },
        DATA_ATTR: {
            SRC_PC: "data-src-pc",
            SRC_MOBILE: "data-src-mobile",
            DATA_SRC: "data-src"
        },
        SUPPORT: {
            NO_SVG: "no-svg",
            NO_CSS3: "no-css3",
            IE_LT_8: "lt-ie8",
            COOKIE_WARNING: "cookie-warning",
            TOUCH_DEVICE: "touch-device"
        },
        RESPONSIVE: {
            DESKTOP: {
                NAME: "desktop"
            },
            TABLET: {
                NAME: "tablet",
                WIDTH: 1023
            },
            MOBILE: {
                NAME: "mobile",
                WIDTH: 767
            },
            GNB: {
                NAME: "gnb_reponsive",
                WIDTH: 1024
            }
        },
        MESSAGE: {
            OPEN_SUB_MENU: {
                description: "Navagation Open sub menu",
                message: "Open sub menu"
            },
            CLOSE_SUB_MENU: {
                description: "Navagation Close sub menu",
                message: "Close sub menu"
            }
        }
    }
}(window);
/**
 * samsung.com - Custom Events Defined
 * src : common/js/src/smg/event/smg.event.js
 *
 * @version 1.0.0
 * @since 2015.09.22
 * @requires
 *  namespace.js
 * @update
 */! function (E) {
    "use strict";
    "undefined" == typeof E.smg && (E.smg = {}), "undefined" == typeof E.smg.event && (E.smg.event = {}), E.smg.event = {
        VIDEO: {
            PLAY: "VIDEO_PLAY",
            CLOSE: "VIDEO_CLOSE"
        },
        RESPONSIVE: {
            GET_STATUS: "RESPONSIVE_GET_STATUS",
            CHANGE: "RESPONSIVE_CHANGE"
        },
        MENU: {
            MENU_AIM: {
                ATTACH: "MENU_AIM_ATTACH",
                DETATCH: "MENU_AIM_DETACH"
            }
        },
        LAYER: {
            BEFORESHOW: "LAYER_BEFORESHOW",
            SHOW: "LAYER_SHOW",
            BEFOREHIDE: "LAYER_BEFOREHIDE",
            HIDE: "LAYER_HIDE"
        }
    }
}(window);
/**
 * samsung.com - Common Script Defined
 * src : common/js/src/smg/common/smg.common.js
 *
 * @version 1.0.0
 * @since 2015.09.22
 * @requires
 *  jQuery
 *  namespace.js
 *  smg.static.js
 *  smg.util.js
 *  smg.event.js
 * @update
 */! function (e, s) {
    "use strict";
    "undefined" == typeof e.smg && (e.smg = {}), "undefined" == typeof e.smg.common && (e.smg.common = {});
    var i = e.smg["static"],
        t = e.smg.util,
        n = e.smg.event;
    e.smg.common = function () {
        return {
            init: function () {
                return this.detection(), this.responsiveName = "", this.responsiveNameEx = "", this.responsiveGNB = "",
                    this.responsiveGNBEx = "", s("body").on(n.RESPONSIVE.GET_STATUS, s.proxy(this.resizeListener, this)),
                    s(e).on("resize", s.proxy(this.resizeListener, this)), this.resizeListener(), this
            },
            detection: function () {
                document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image", "1.1") || s("body").addClass(
                    i.SUPPORT.NO_SVG), document.all && !document.addEventListener && s("body").addClass(i.SUPPORT.IE_LT_8);
                var e = document.body || document.documentElement,
                    t = e.style,
                    n = void 0 !== t.transition || void 0 !== t.WebkitTransition || void 0 !== t.MozTransition || void 0 !==
                        t.MsTransition || void 0 !== t.OTransition;
                n || s("body").addClass(i.SUPPORT.NO_CSS3);
                var o = "ontouchstart" in window || navigator.MaxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
                o && s("body").addClass(i.SUPPORT.TOUCH_DEVICE)
            },
            resizeListener: function (e) {
                var o = t.winSize().w;
                o <= i.RESPONSIVE.MOBILE.WIDTH ? this.responsiveName = i.RESPONSIVE.MOBILE.NAME : o <= i.RESPONSIVE.TABLET
                    .WIDTH ? this.responsiveName = i.RESPONSIVE.TABLET.NAME : this.responsiveName = i.RESPONSIVE.DESKTOP
                    .NAME, o <= i.RESPONSIVE.GNB.WIDTH ? this.responsiveGNB = i.RESPONSIVE.GNB.NAME : this.responsiveGNB =
                    "", this.responsiveName === this.responsiveNameEx && this.responsiveGNB === this.responsiveGNBEx ||
                (this.responsiveNameEx = this.responsiveName, this.responsiveGNBEx = this.responsiveGNB, s("body").trigger(
                    n.RESPONSIVE.CHANGE, {
                        RESPONSIVE_NAME: this.responsiveName,
                        RESPONSIVE_GNB_NAME: this.responsiveGNB,
                        isMobile: o <= i.RESPONSIVE.MOBILE.WIDTH
                    })), e && e.type === n.RESPONSIVE.GET_STATUS && s("body").trigger(n.RESPONSIVE.CHANGE, {
                    RESPONSIVE_NAME: this.responsiveName,
                    RESPONSIVE_GNB_NAME: this.responsiveGNB,
                    isMobile: o <= i.RESPONSIVE.MOBILE.WIDTH
                })
            }
        }
    }();
    var o;
    s(function () {
        o = e.smg.common.init()
    }), s(e).on("resize", function (e) {
        o && o.resizeListener && o.resizeListener.call(o, e)
    })
}(window, jQuery);
/**
 * samsung.com Global Tagging & Tracking Script
 * src : common/js/src/smg/global/smg.global.tracking.js
 *
 * @version 1.0.0
 * @since 2015.09.22
 * @requires
 *  jQuery
 *  Waypoints
 *  Waypoints Inview Shortcut
 *  namespace.js
 *  smg.util.js
 * @update
 */! function (t, n) {
    "use strict";
    "undefined" == typeof t.smg && (t.smg = {}), "undefined" == typeof t.smg.global && (t.smg.global = {});
    var i = t.smg.util;
    t.smg.global.tracking = function () {
        var e = {
            clickTarget: "[data-omni='click']",
            scrollTarget: "[data-omni='scroll']",
            sendType: "data-omni-type",
            sendData: "data-omni-data",
            sendOption: "data-omni-option"
        };
        return {
            init: function (t, n) {
                (this.container = t).size() && (this.opts = i.def(e, n || {}), this.clickTargets = this.container.find(
                    this.opts.clickTarget), this.scrollTarget = this.container.find(this.opts.scrollTarget), this.onBindEvent())
            },
            onBindEvent: function () {
                var i = this;
                this.clickTargets.on("click", n.proxy(this.onClickTarget, this)), n.each(this.scrollTarget, function () {
                    new t.Waypoint.Inview({
                        element: n(this).get(0),
                        enter: i.onScrollTarget
                    })
                })
            },
            onClickTarget: function (i) {
                var e = n(i.currentTarget),
                    o = e.attr(this.opts.sendType),
                    s = e.attr(this.opts.sendData),
                    a = e.attr(this.opts.sendOption);
                "wishlist" === o ? (t.sendClickCode("us_style", s.substr(0, s.lastIndexOf("_buynow")), a), t.sendClickCode(
                    "wishlist", s, a)) : "locator" === o ? (t.sendClickCode("gnb", "utility menu:store locator", a), t.sendClickCode(
                    "locator", "locator", a)) : t.sendClickCode(o, s, a)
            },
            onScrollTarget: function () {
                var i = t.smg.global.tracking,
                    e = n(this.element),
                    o = e.attr(i.opts.sendType),
                    s = e.attr(i.opts.sendData),
                    a = e.attr(i.opts.sendOption);
                t.sendClickCode(o, s, a)
            }
        }
    }(), n(function () {
        t.smg.global.tracking.init(n("body"))
    })
}(window, jQuery);
/*
 * jquery.menu-aim.js
 * Custom jquery.menu-aim.smg.js
 *  - event attach/detach
 *
 * src : common/js/src/vendor/jquery/jquery.menu-aim.smg.js
 *
 * @requires
 *  smg.event.js
 */! function (e, t) {
    "use strict";

    function n(e) {
        var n = t(this),
            i = null,
            u = [],
            r = null,
            c = null,
            f = t.extend({
                rowSelector: "> li",
                submenuSelector: "*",
                submenuDirection: "right",
                tolerance: 75,
                enter: t.noop,
                exit: t.noop,
                activate: t.noop,
                deactivate: t.noop,
                exitMenu: t.noop
            }, e),
            l = 3,
            s = 300,
            a = function (e) {
                u.push({
                    x: e.pageX,
                    y: e.pageY
                }), u.length > l && u.shift()
            }, m = function () {
                c && clearTimeout(c), f.exitMenu(this) && (i && f.deactivate(i), i = null)
            }, v = function () {
                c && clearTimeout(c), f.enter(this), d(this)
            }, h = function () {
                f.exit(this)
            }, x = function () {
                y(this)
            }, y = function (e) {
                e != i && (i && f.deactivate(i), f.activate(e), i = e)
            }, d = function (e) {
                var t = p();
                t ? c = setTimeout(function () {
                    d(e)
                }, t) : y(e)
            }, p = function () {
                function e(e, t) {
                    return (t.y - e.y) / (t.x - e.x)
                }
                if (!i || !t(i).is(f.submenuSelector)) return 0;
                var o = n.offset(),
                    c = {
                        x: o.left,
                        y: o.top - f.tolerance
                    }, l = {
                        x: o.left + n.outerWidth(),
                        y: c.y
                    }, a = {
                        x: o.left,
                        y: o.top + n.outerHeight() + f.tolerance
                    }, m = {
                        x: o.left + n.outerWidth(),
                        y: a.y
                    }, v = u[u.length - 1],
                    h = u[0];
                if (!v) return 0;
                if (h || (h = v), h.x < o.left || h.x > m.x || h.y < o.top || h.y > m.y) return 0;
                if (r && v.x == r.x && v.y == r.y) return 0;
                var x = l,
                    y = m;
                "left" == f.submenuDirection ? (x = a, y = c) : "below" == f.submenuDirection ? (x = m, y = a) :
                    "above" == f.submenuDirection && (x = c, y = l);
                var d = e(v, x),
                    p = e(v, y),
                    b = e(h, x),
                    M = e(h, y);
                return d < b && p > M ? (r = v, s) : (r = null, 0)
            }, b = function () {
                M(), n.on("mouseleave", m).find(f.rowSelector).on("mouseenter", v).on("mouseleave", h).on("click", x),
                    t(document).on("mousemove", a)
            }, M = function () {
                n.off("mouseleave", m).find(f.rowSelector).off("mouseenter", v).off("mouseleave", h).off("click", x), t(
                    document).off("mousemove", a)
            };
        b(), n.on(o.MENU.MENU_AIM.ATTACH, b), n.on(o.MENU.MENU_AIM.DETATCH, M)
    }
    var o = e.smg.event;
    t.fn.menuAim = function (e) {
        return this.each(function () {
            n.call(this, e)
        }), this
    }
}(window, jQuery);
/**
 * samsung.com Global Navigation Script
 * src : common/js/src/smg/global/smg.global.gnb.js
 *
 * @version 1.0.3
 * @since 2015.09.22
 * @requires
 *  jQuery
 *  jquery.menu-aim.smg.js
 *  namespace.js
 *  smg.static.js
 *  smg.util.js
 *  smg.event.js
 * @update
 */! function (e, i) {
    "use strict";
    "undefined" == typeof e.smg && (e.smg = {}), "undefined" == typeof e.smg.global && (e.smg.global = {});
    var s = e.smg["static"],
        t = e.smg.util,
        a = e.smg.event;
    e.smg.global.cookieNotice = function () {
        var a = {
            slider: ".cookie-notice",
            checkValue: "cookiesaccepted"
        };
        return {
            init: function (e, n) {
                (this.container = e).size() && (this.opts = t.def(a, n || {}), this.isNoticed() || (this.container.addClass(
                    s.SUPPORT.COOKIE_WARNING), this.slider = this.container.find(this.opts.slider), this.slider.find(
                    ".btn-close").click(i.proxy(this.close, this))))
            },
            isNoticed: function () {
                return !!t.cookie.getCookie(this.opts.checkValue)
            },
            close: function () {
                var a = this,
                    n = this.slider.outerHeight();
                t.cookie.setCookie(this.opts.checkValue, "true", 90), i.when(this.slider.animate({
                    "margin-top": "-=" + n
                })).done(function () {
                    a.container.removeClass(s.SUPPORT.COOKIE_WARNING), a.container.find(".bg-logo").focus(), e.smg.page
                        .home && Waypoint.refreshAll()
                })
            }
        }
    }(), e.smg.global.gnb = function () {
        var n = {
            skipNavi: ".skip-content",
            header: "#header",
            headerWrap: ".header-wrap",
            headerBtnSearch: ".header-btn-search",
            headerBtnNav: ".header-btn-nav",
            headerInfo: ".header-info",
            headerSearch: ".header-search",
            logo: ".header-logo",
            navi: ".header-nav",
            ooFeedBack: "#oo-feedback",
            naviMargin: 366
        };
        return {
            init: function (e, a) {
                (this.container = e).size() && (this.opts = t.def(n, a || {}), this.container.addClass(s.CSS.NAV_CLOSE),
                    this.skipNavi = this.container.find(this.opts.skipNavi), this.header = this.container.find(this.opts
                    .header), this.headerWrap = this.container.find(this.opts.headerWrap), this.headerBtnSearch = this.container
                    .find(this.opts.headerBtnSearch), this.headerBtnNav = this.container.find(this.opts.headerBtnNav),
                    this.headerInfo = this.container.find(this.opts.headerInfo), this.headerSearch = this.container.find(
                    this.opts.headerSearch), this.ooFeedBack = this.container.find(this.opts.ooFeedBack), this.logo =
                    this.container.find(this.opts.logo), this.navi = this.container.find(this.opts.navi), this.naviMargin =
                    this.logo.width() + this.opts.naviMargin, this.menuAim = null, this.addBindEvents(), this.onResizeListener(),
                    this.setSubMenuClass(), setTimeout(i.proxy(this.setDefaultMessage, this), 100))
            },
            setSubMenuClass: function () {
                i.each(this.navi.find(".depth2-menu"), function () {
                    i(this).find(".depth3").size() && i(this).addClass("sub-depth")
                })
            },
            setDefaultMessage: function () {
                this.container.trigger(a.RESPONSIVE.GET_STATUS), this.navi.find(".depth1 > li").find(".ico-more").text(
                    s.MESSAGE.OPEN_SUB_MENU.message)
            },
            addBindEvents: function () {
                var n = this;
                this.skipNavi.on("click", "a", i.proxy(this.onSkipNaviClick, this)), this.menuAim = this.navi.find(
                    "ul.depth2").menuAim({
                    activate: i.proxy(this.onMenuAimActivate, this),
                    deactivate: i.proxy(this.onMenuAimDeactivate, this),
                    enter: i.proxy(this.onMenuAimActivate, this),
                    exit: i.proxy(this.onMenuAimDeactivate, this)
                }), this.navi.on("click", ".depth1 > li > a", i.proxy(this.onNaviClick, this)), this.navi.on("click", i
                    .proxy(this.onNaviPrevent, this)), this.navi.on("focus", ".depth1 a", i.proxy(this.onNaviFocus,
                    this)), i(e).on("resize", i.proxy(this.onResizeListener, this)), i(document).on("focus", "#content",
                    i.proxy(this.onDocumentFocus, this)), this.container.on(a.RESPONSIVE.CHANGE, i.proxy(this.onResponsiveChange,
                    this)), this.container.trigger(a.RESPONSIVE.GET_STATUS), this.headerBtnNav.on("click", i.proxy(this
                    .onHeaderBtnNavClick, this)), this.headerBtnSearch.on("click", i.proxy(this.onHeaderBtnSearchClick,
                    this)), this.ooFeedBack.on("click", i.proxy(this.onFeedBackClick, this)), i(".js-m-menu").on(
                    "click", i.proxy(this.onHeaderBtnNavClick, this)), i(".js-m-search").on("click", i.proxy(this.onHeaderBtnSearchClick,
                    this)), this.headerSearch.find(".btn-search").on("focus", function (e) {
                    if (t.winSize().w <= s.RESPONSIVE.GNB.WIDTH && !i("body").hasClass(s.CSS.NAV_OPEN) && !i("body").hasClass(
                            s.SUPPORT.IE_LT_8)) {
                        if (i(this).closest("form.is-show").size()) return;
                        i(e.target).blur(), i(".js-m-menu a").focus(), setTimeout(function () {
                            i(".js-m-menu a").focus()
                        }, 10)
                    }
                }), this.navi.on("mouseleave", function (e) {
                    n.navi.find(".depth1-menu.is-show a").size() ? n.navi.find(".depth1-menu.is-show a").eq(0).focus() :
                        setTimeout(function () {
                            i(e.target).blur()
                        }, 10)
                }), i(document).on("click", function (e) {
                    i(e.target).closest("nav").size() ? i(e.target).closest(".header-utility").size() && n.navi.find(
                        ".depth1 > li." + s.CSS.IS_SHOW).size() && (n.navi.find(".depth1 > li").removeClass(s.CSS.IS_SHOW),
                        n.navi.find(".depth1 > li").find(".ico-more").text(s.MESSAGE.OPEN_SUB_MENU.message), n.navi.find(
                        ".depth2 > li").removeClass(s.CSS.IS_SHOW), n.navi.find(".depth2 > li").find(".ico-more").text(
                        s.MESSAGE.OPEN_SUB_MENU.message), e.stopPropagation()) : i("body").hasClass(s.CSS.NAV_OPEN) ||
                        (n.navi.find(".depth1 > li").removeClass(s.CSS.IS_SHOW), n.navi.find(".depth1 > li").find(
                            ".ico-more").text(s.MESSAGE.OPEN_SUB_MENU.message), n.navi.find(".depth2 > li").removeClass(s.CSS
                            .IS_SHOW), n.navi.find(".depth2 > li").find(".ico-more").text(s.MESSAGE.OPEN_SUB_MENU.message),
                            e.stopPropagation()), i(".cart-wrap").hasClass("on") && (i(e.target).closest(".cart-area").size() ||
                        i(e.target).closest(".cart-wrap").size() || (i(".cart-wrap").removeClass("on"), e.stopPropagation())),
                        t.winSize().w <= s.RESPONSIVE.GNB.WIDTH ? n.navi.find(".depth2 > li." + s.CSS.IS_SHOW + " > a")
                            .find(".ico-more").text(s.MESSAGE.CLOSE_SUB_MENU.message) : n.navi.find(".depth2 > li").find(
                            ".ico-more").html("")
                }), i(".btn-search").on("focusout", function () {
                    i("body").hasClass(s.CSS.NAV_OPEN) && (i("nav .depth1 li a").eq(0).focus(), setTimeout(function () {
                        i("nav .depth1 li a").eq(0).focus()
                    }, 10))
                }), i(".btn-cart, .utility-list a, .header-logo a, .js-m-cart").on("focusin", function (e) {
                    i(e.target).closest(".utility-list").size() && i("body").hasClass(s.CSS.NAV_OPEN) || (n.navi.find(
                        ".depth1 > li").removeClass(s.CSS.IS_SHOW), n.navi.find(".depth1 > li").find(".ico-more").text(
                        s.MESSAGE.OPEN_SUB_MENU.message), n.navi.find(".depth2 > li").removeClass(s.CSS.IS_SHOW), n.navi
                        .find(".depth2 > li").find(".ico-more").text(s.MESSAGE.OPEN_SUB_MENU.message), t.winSize().w <=
                    s.RESPONSIVE.GNB.WIDTH ? n.navi.find(".depth2 > li." + s.CSS.IS_SHOW + " > a").find(".ico-more")
                        .text(s.MESSAGE.CLOSE_SUB_MENU.message) : n.navi.find(".depth2 > li").find(".ico-more").html(""))
                }), i(".btn-cart, .js-m-cart button").on("focus", function (e) {
                    !i(e.target).closest("nav").size() && i("body").hasClass(s.CSS.NAV_OPEN) && i(".js-m-menu").trigger(
                        "click")
                }), i(".search-input").on("focusin", function () {
                    i("body").hasClass(s.CSS.NAV_OPEN) || (n.navi.find(".depth1 > li").removeClass(s.CSS.IS_SHOW), n.navi
                        .find(".depth1 > li").find(".ico-more").text(s.MESSAGE.OPEN_SUB_MENU.message), n.navi.find(
                        ".depth2 > li").removeClass(s.CSS.IS_SHOW), n.navi.find(".depth2 > li").find(".ico-more").text(
                        s.MESSAGE.OPEN_SUB_MENU.message), t.winSize().w <= s.RESPONSIVE.GNB.WIDTH ? n.navi.find(
                        ".depth2 > li." + s.CSS.IS_SHOW + " > a").find(".ico-more").text(s.MESSAGE.CLOSE_SUB_MENU.message) :
                        n.navi.find(".depth2 > li").find(".ico-more").html(""))
                })
            },
            onDocumentFocus: function () {
                i("body").hasClass(s.CSS.NAV_OPEN) && !i("body").hasClass(s.SUPPORT.IE_LT_8) && i(".js-m-menu").trigger(
                    "click")
            },
            onFeedBackClick: function (e) {
                e.preventDefault();
                var s = i("#oo_tab");
                s.size() && s.trigger("click")
            },
            lockWrap: function (t) {
                var a = e.smg.global.gnb;
                i("body").hasClass(s.CSS.NAV_OPEN) && (i(t.target).closest("nav").size() || i(t.target).closest(
                    ".header-inner").size() || (t.preventDefault(), t.stopPropagation(), a.navi.removeClass(s.CSS.IS_OPEN),
                    i("body").removeClass(s.CSS.NAV_OPEN), i("#wrap, .body_wrapper").off("click", a.lockWrap), a.navi.find(
                    "." + s.CSS.IS_OPEN).removeClass(s.CSS.IS_OPEN), a.navi.hasClass(s.CSS.NAV_OPEN) ? a.headerBtnNav.find(
                    ".ico-menu").text(s.MESSAGE.CLOSE_SUB_MENU.message) : a.headerBtnNav.find(".ico-menu").text(s.MESSAGE
                    .OPEN_SUB_MENU.message), a.setNaviCloseClass()))
            },
            onSkipNaviClick: function (e) {
                var s = i(e.target).attr("href"),
                    t = i(s);
                s && t.size() && (e.preventDefault(), t.attr("tabindex", "-1"), t.focus())
            },
            onMenuAimActivate: function (e) {
                i(e).addClass(s.CSS.IS_SHOW)
            },
            onMenuAimDeactivate: function (e) {
                i(e).removeClass(s.CSS.IS_SHOW)
            },
            onNaviPrevent: function (e) {
                var a = i(e.target),
                    n = a.attr("href");
                return n ? ("#" === n.substr(0, 1) && (i(n).size() || e.preventDefault()), a.find(".ico-more").size() &&
                t.winSize().w <= s.RESPONSIVE.TABLET.WIDTH ? void e.preventDefault() : void 0) : void e.preventDefault()
            },
            onNaviClick: function (e) {
                if (i("body").hasClass(s.CSS.NAV_OPEN) && "click" !== e.type) return void e.preventDefault();
                var t = i(e.target),
                    a = t.closest("li"),
                    n = (t.attr("href"), t.attr("target")),
                    o = t.closest("ul").hasClass("depth1");
                if (o) {
                    if (this.navi.find(".depth2 > li").removeClass(s.CSS.IS_SHOW), a.siblings("li").removeClass(s.CSS.IS_SHOW),
                            a.siblings("li").find(".ico-more").text(s.MESSAGE.OPEN_SUB_MENU.message), "_blank" === n) return void t
                        .blur();
                    a.toggleClass(s.CSS.IS_SHOW), a.find(".depth2").size(), a.hasClass(s.CSS.IS_SHOW) ? t.find(
                        ".ico-more").text(s.MESSAGE.CLOSE_SUB_MENU.message) : t.find(".ico-more").text(s.MESSAGE.OPEN_SUB_MENU
                        .message), !a.hasClass(s.CSS.IS_SHOW)
                } else a.siblings("li").removeClass(s.CSS.IS_SHOW), a.siblings("li").find(".ico-more").text(s.MESSAGE.OPEN_SUB_MENU
                    .message), a.find(".depth3").size() && a.toggleClass(s.CSS.IS_SHOW), a.hasClass(s.CSS.IS_SHOW) ?
                    t.find(".ico-more").text(s.MESSAGE.CLOSE_SUB_MENU.message) : t.find(".ico-more").text(s.MESSAGE
                        .OPEN_SUB_MENU.message)
            },
            onNaviFocus: function (e) {
                var a = i(e.target),
                    n = (i(".depth1-menu"), i(".depth2-menu")),
                    o = t.winSize().w <= s.RESPONSIVE.GNB.WIDTH,
                    S = o && !i("body").hasClass(s.CSS.NAV_OPEN) && !i("body").hasClass(s.SUPPORT.IE_LT_8);
                S && (0 !== a.closest(".depth1-menu").index() ? (a.blur(), i(".js-m-menu a").focus(), setTimeout(function () {
                    i(".js-m-menu a").focus()
                }, 10)) : i("#skipToContent").trigger("click")), o || (n.not(n.has(a)).removeClass(s.CSS.IS_SHOW), n.has(
                    a).addClass(s.CSS.IS_SHOW))
            },
            onHeaderBtnNavClick: function (e) {
                e.preventDefault();
                var a = this;
                this.navi.toggleClass(s.CSS.IS_OPEN), this.headerSearch.closest(".header-search-area").size() ? this.headerSearch
                    .closest(".header-search-area").removeClass(s.CSS.IS_SHOW) : this.headerSearch.removeClass(s.CSS.IS_SHOW),
                    setTimeout(function () {
                        i("body").toggleClass(s.CSS.NAV_OPEN), i("body").hasClass(s.CSS.NAV_OPEN) ? (a.headerBtnNav.find(
                            ".ico-menu").text(s.MESSAGE.CLOSE_SUB_MENU.message), i("body").removeClass(s.CSS.NAV_CLOSE)) :
                            (a.headerBtnNav.find(".ico-menu").text(s.MESSAGE.OPEN_SUB_MENU.message), a.setNaviCloseClass()),
                        i("body").hasClass(s.CSS.NAV_OPEN) && setTimeout(function () {
                            i("#wrap, .body_wrapper").on("click", a.lockWrap)
                        }, 600), t.winSize().w <= s.RESPONSIVE.GNB.WIDTH ? a.navi.find(".depth2 > li." + s.CSS.IS_SHOW +
                            " > a").find(".ico-more").text(s.MESSAGE.CLOSE_SUB_MENU.message) : (i("body").removeClass(s.CSS
                            .NAV_OPEN), a.navi.removeClass(s.CSS.IS_OPEN), a.navi.find(".depth2 > li").find(".ico-more").text(
                            ""))
                    }, 100)
            },
            setNaviCloseClass: function () {
                setTimeout(function () {
                    i("body").addClass(s.CSS.NAV_CLOSE)
                }, 500)
            },
            onHeaderBtnSearchClick: function (e) {
                var t = this;
                e.preventDefault(), i("body").hasClass(s.CSS.NAV_OPEN) ? i(".js-m-menu").trigger("click") : this.headerSearch
                    .closest(".header-search-area").size() ? (this.headerSearch.closest(".header-search-area").toggleClass(
                    s.CSS.IS_SHOW), this.headerSearch.closest(".header-search-area").hasClass(s.CSS.IS_SHOW) && (this.headerSearch
                    .find("input").focus(), setTimeout(function () {
                    t.headerSearch.find("input").focus()
                }, 10))) : (this.headerSearch.toggleClass(s.CSS.IS_SHOW), this.headerSearch.hasClass(s.CSS.IS_SHOW) &&
                (this.headerSearch.find("input").focus(), setTimeout(function () {
                    t.headerSearch.find("input").focus()
                }, 10)))
            },
            onResizeListener: function () {
                var e = this,
                    a = this.header.width(),
                    n = this.headerWrap.height(),
                    o = this.navi.width() + this.naviMargin;
                a <= o ? this.headerWrap.addClass(s.CSS.SEARCH_POS) : this.headerWrap.removeClass(s.CSS.SEARCH_POS), i.each(
                    this.navi.find(".depth1-menu > a > .ico-more"), function () {
                        if (i(this).position().top >= n / 2) return e.headerWrap.addClass(s.CSS.SEARCH_POS), !1
                    }), t.winSize().w <= s.RESPONSIVE.GNB.WIDTH && this.headerWrap.removeClass(s.CSS.SEARCH_POS), !this.headerWrap
                    .hasClass(s.CSS.SEARCH_POS) && t.winSize().w > s.RESPONSIVE.GNB.WIDTH && (this.headerSearch.closest(
                    ".header-search-area").size() ? this.headerSearch.closest(".header-search-area").removeClass(s.CSS.IS_SHOW) :
                    this.headerSearch.removeClass(s.CSS.IS_SHOW))
            },
            onResponsiveChange: function (e, t) {
                if (t.RESPONSIVE_GNB_NAME === s.RESPONSIVE.GNB.NAME) {
                    if (this.navi.find(".depth2 > li." + s.CSS.IS_SHOW + " > a").find(".ico-more").text(s.MESSAGE.CLOSE_SUB_MENU
                            .message), this.menuAim && this.menuAim.trigger(a.MENU.MENU_AIM.DETATCH), "1.8.3" === i.fn.jquery) {
                        var n = this;
                        setTimeout(function () {
                            n.headerSearch.find("input").blur()
                        }, 100)
                    } else this.headerSearch.find("input").blur();
                    this.navi.off("click mouseenter focusin", ".depth2 > li > a", i.proxy(this.onNaviClick, this)),
                        this.navi.on("click mouseenter focusin", ".depth2 > li > a", i.proxy(this.onNaviClick, this)),
                        this.headerWrap.removeClass(s.CSS.SEARCH_POS), this.onResizeListener()
                } else i("body").removeClass(s.CSS.NAV_OPEN), this.navi.removeClass(s.CSS.IS_OPEN), this.navi.find("li")
                    .removeClass(s.CSS.IS_SHOW), this.navi.find(".depth2 > li").find(".ico-more").text(""), this.headerSearch
                    .closest(".header-search-area").size() ? this.headerSearch.closest(".header-search-area").removeClass(
                    s.CSS.IS_SHOW) : this.headerSearch.removeClass(s.CSS.IS_SHOW), this.menuAim && this.menuAim.trigger(
                    a.MENU.MENU_AIM.ATTACH), this.navi.off("click mouseenter focusin", ".depth2 > li > a", i.proxy(
                    this.onNaviClick, this)), this.setNaviCloseClass(), this.onResizeListener()
            }
        }
    }();
    var n;
    i(function () {
        "undefined" != typeof SITE_CD && i("html").addClass("sitecd-" + SITE_CD);
        var s = i("body");
        e.smg.global.cookieNotice.init(s), i("nav.gb-gnb").length || (n = e.smg.global.gnb.init(s))
    }), i("nav.gb-gnb").length || i(e).on("resize", function (e) {
        n && n.onResizeListener && n.onResizeListener.call(n, e)
    })
}(window, jQuery);
/**
 * samsung.com Footer Navigation Script
 * src : common/js/src/smg/global/smg.global.footer.js
 *
 * @version 1.0.0
 * @since 2015.09.22
 * @requires
 *  jQuery
 *  namespace.js
 *  smg.static.js
 *  smg.util.js
 * @update
 */! function (t, e) {
    "use strict";
    "undefined" == typeof t.smg && (t.smg = {}), "undefined" == typeof t.smg.global && (t.smg.global = {});
    var i = t.smg["static"],
        o = t.smg.util,
        s = t.smg.event;
    t.smg.global.footer = function () {
        var t = {
            footerLeft: ".footer-left",
            footerRight: ".footer-right",
            backTop: ".back-top"
        };
        return {
            init: function (i, s) {
                (this.container = i).size() && (this.opts = o.def(t, s || {}), this.footerLeft = this.container.find(
                    this.opts.footerLeft), this.footerRight = this.container.find(this.opts.footerRight), this.backTop =
                    this.container.find(this.opts.backTop), this.onBindEvent(), setTimeout(e.proxy(this.setDefaultMessage,
                    this), 100))
            },
            setDefaultMessage: function () {
                this.footerLeft.find(".footer-nav-btn .blind").size() && this.footerLeft.find(".footer-nav-btn .blind")
                    .text(i.MESSAGE.OPEN_SUB_MENU.message), this.footerRight.find(".footer-nav-btn .blind").size() &&
                this.footerLeft.find(".footer-nav-btn .blind").text(i.MESSAGE.OPEN_SUB_MENU.message)
            },
            onBindEvent: function () {
                this.footerLeft.on("click", "> .footer-nav-btn", e.proxy(this.onLeftTitleClick, this)), this.footerLeft
                    .on("click", "> .footer-nav .footer-nav-btn", e.proxy(this.onLeftNavClickSub, this)), this.footerRight
                    .on("click", ".footer-nav-item .footer-nav-btn", e.proxy(this.onRightNavClick)), this.backTop.on(
                    "click", e.proxy(this.onBackTopClick, this)), this.container.on(s.RESPONSIVE.CHANGE, e.proxy(this.onResponsiveChange,
                    this))
            },
            onLeftTitleClick: function (t) {
                var s = e(t.target),
                    n = s.attr("href");
                return n ? ("#" === n.substr(0, 1) && (e(n).size() || t.preventDefault()), s.siblings(".footer-nav").children()
                    .size() && o.winSize().w <= i.RESPONSIVE.MOBILE.WIDTH && t.preventDefault(), s.siblings("h2").toggleClass(
                    i.CSS.IS_SHOW), s.siblings("h2").siblings(".footer-shoplist").toggleClass(i.CSS.IS_SHOW), this.footerLeft
                    .find(".footer-nav").toggle(), void(s.siblings("h2").hasClass(i.CSS.IS_SHOW) ? s.find(".blind").text(
                    i.MESSAGE.CLOSE_SUB_MENU.message) : s.find(".blind").text(i.MESSAGE.OPEN_SUB_MENU.message))) : void t
                    .preventDefault()
            },
            onLeftNavClickSub: function (t) {
                var s = e(t.target),
                    n = s.attr("href");
                return n ? ("#" === n.substr(0, 1) && (e(n).size() || t.preventDefault()), s.siblings(
                    ".footer-nav-list").children().size() && o.winSize().w <= i.RESPONSIVE.MOBILE.WIDTH && t.preventDefault(),
                    s.closest(".footer-nav-item").toggleClass(i.CSS.IS_SHOW), void(s.closest(".footer-nav-item").hasClass(
                    i.CSS.IS_SHOW) ? s.find(".blind").text(i.MESSAGE.CLOSE_SUB_MENU.message) : s.find(".blind").text(i.MESSAGE
                    .OPEN_SUB_MENU.message))) : void t.preventDefault()
            },
            onRightNavClick: function (t) {
                var s = e(t.target),
                    n = s.attr("href");
                return n ? ("#" === n.substr(0, 1) && (e(n).size() || t.preventDefault()), s.siblings(
                    ".footer-nav-list").children().size() && o.winSize().w <= i.RESPONSIVE.MOBILE.WIDTH && t.preventDefault(),
                    s.closest(".footer-nav-item").toggleClass(i.CSS.IS_SHOW), void(s.closest(".footer-nav-item").hasClass(
                    i.CSS.IS_SHOW) ? s.find(".blind").text(i.MESSAGE.CLOSE_SUB_MENU.message) : s.find(".blind").text(i.MESSAGE
                    .OPEN_SUB_MENU.message))) : void t.preventDefault()
            },
            onBackTopClick: function (t) {
                t.preventDefault(), e(t.target).blur(), e("html, body").animate({
                    scrollTop: 0
                }, function () {
                    var t = e("#header");
                    t.size() && (t.attr("tabindex", "-1"), t.focus())
                })
            },
            onResponsiveChange: function (t, e) {
                e.RESPONSIVE_NAME !== i.RESPONSIVE.MOBILE.NAME && (this.setDefaultMessage(), this.footerLeft.find("." +
                    i.CSS.IS_SHOW).removeClass(i.CSS.IS_SHOW), this.footerRight.find("." + i.CSS.IS_SHOW).removeClass(i
                    .CSS.IS_SHOW), this.footerLeft.find(".footer-nav").css("display", ""))
            }
        }
    }(), e(function () {
        t.smg.global.footer.init(e("body"))
    })
}(window, jQuery);
/**
 * samsung.com lazy loading font css
 * src : common/js/src/smg/global/smg.global.font.js
 *
 * @version 1.0.0
 * @since 2015.10.15
 * @requires
 *  namespace.js
 *  smg.util.js
 * @update
 *//*! function (o, e) {
    "use strict";
    "undefined" == typeof o.smg && (o.smg = {}), "undefined" == typeof o.smg.global && (o.smg.global = {});
    var n = o.smg.util,
        i = "loadFont";
    o.smg.global.font = {
        loadCSS: function (t) {
            return n.cookie.getCookie(i) ? n.loadCSS(t, null, !0) : void e(o).load(function () {
                n.cookie.getCookie(i) || n.loadCSS(t, function () {
                    n.cookie.setCookie(i, 1, 30)
                }, !0)
            })
        }
    }
}(window, jQuery);*/
/**
 * samsung.com layer manager
 * src : common/js/src/smg/global/smg.global.layermanager.js
 * @version 1.1.1
 * @requires
 *  namespace.js
 *  smg.util.js
 *  smg.static.js
 *  smg.event.js
 * @since 2016.09.13
 */
"use strict";

function _classCallCheck(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
}! function (t, e) {
    "undefined" == typeof t.smg && (t.smg = {}), "undefined" == typeof t.smg.global && (t.smg.global = {}), "undefined" ==
    typeof t.smg.util && (t.smg.util = {});
    var i = t.smg["static"],
        s = (t.smg.util, t.smg.event),
        o = s.LAYER;
    t.smg.global.LayerManager = function () {
        function s(t) {
            _classCallCheck(this, s), this.$layer = t.layer, this.$linked = t.linked, this.options = e.extend({}, this.defaults(),
                t.options), this.onBeforeShowCallback = t.onBeforeShow, this.onShowCallback = t.onShow, this.onBeforeHideCallback =
                t.onBeforeHide, this.onHideCallback = t.onHide, this.init()
        }
        return s.prototype.defaults = function () {
            return this.dimmedClass = "dimmed", this.keepdimmedClass = "keep-dimmed", this.dimmedElement =
                '<div class="' + this.dimmedClass + '"></div>', {
                enforceInitFocus: !0,
                bActivated: !0,
                keepDimmed: !1,
                closeButton: ".close-button"
            }
        }, s.prototype.activate = function () {
            this.show()
        }, s.prototype.deactivate = function () {
            this.hide(), this.reset()
        }, s.prototype.init = function () {
            this.assignedElements(), this.appendDimmed(), this.appendModuleClass(), this.bindEvents(), this.options.bActivated &&
            this.activate()
        }, s.prototype.assignedElements = function () {
            this.$wrap = this.$layer.children(), this.$closeButton = this.$layer.find(this.options.closeButton)
        }, s.prototype.appendModuleClass = function () {
            var t = i.CSS.LAYER_MODULE;
            this.$layer.hasClass(t) || this.$layer.addClass(t)
        }, s.prototype.appendDimmed = function () {
            this.$layer.prepend(this.dimmedElement), this.$dimmed = this.$layer.find("." + this.dimmedClass)
        }, s.prototype.unbindAllEvents = function () {
            e(t).off("resize", e.proxy(this.onResize, this)), this.$closeButton.off("click", e.proxy(this.onClickCloseButton,
                this)), this.$dimmed.off("click touchstart", e.proxy(this.onClickDimmed, this))
        }, s.prototype.bindEvents = function () {
            e(t).off("resize", e.proxy(this.onResize, this)), e(t).on("resize", e.proxy(this.onResize, this)), this.$closeButton
                .off("click", e.proxy(this.onClickCloseButton, this)), this.$closeButton.on("click", e.proxy(this.onClickCloseButton,
                this)), this.options.keepDimmed ? this.$dimmed.addClass(this.keepdimmedClass) : (this.$dimmed.off(
                "click touchstart", e.proxy(this.onClickCloseButton, this)), this.$dimmed.on("click touchstart", e.proxy(
                this.onClickCloseButton, this)))
        }, s.prototype.onResize = function () {
            this.reposition()
        }, s.prototype.onClickCloseButton = function (t) {
            t.preventDefault(), this.hide(), this.reset()
        }, s.prototype.reset = function () {
            this.unbindAllEvents(), this.$wrap.removeAttr("style"), this.$layer.removeClass(i.CSS.LAYER_MODULE), e(
                "html").removeClass(i.CSS.LAYER_OPEN), this.$dimmed.removeClass(this.keepdimmedClass)
        }, s.prototype.getLayer = function () {
            return this.$layer
        }, s.prototype.getLinked = function () {
            return this.$linked ? this.$linked : null
        }, s.prototype.isVisible = function () {
            return "block" === this.$layer.css("display")
        }, s.prototype.show = function () {
            "function" == typeof this.onBeforeShowCallback && this.onBeforeShowCallback.apply(this, [this.getData(o.BEFORESHOW)]),
                this.$layer.trigger(this.getData(o.BEFORESHOW)), this.$layer.show(), this.showDimmed(), this.reposition(),
            this.options.enforceInitFocus && this.enforceFocusLayer(), "function" == typeof this.onShowCallback &&
            this.onShowCallback.apply(this, [this.getData(o.SHOW)]), this.$layer.trigger(this.getData(o.SHOW))
        }, s.prototype.hide = function () {
            "function" == typeof this.onBeforeHideCallback && this.onBeforeHideCallback.apply(this, [this.getData(o.BEFOREHIDE)]),
                this.$layer.trigger(this.getData(o.BEFOREHIDE)), this.$layer.hide(), this.hideDimmed(), this.enforceFocusLinked(),
            "function" == typeof this.onHideCallback && this.onHideCallback.apply(this, [this.getData(o.HIDE)]),
                this.$layer.trigger(this.getData(o.HIDE))
        }, s.prototype.reposition = function () {
            var i = this.$wrap,
                s = e(t),
                o = parseInt(.5 * (s.width() - i.outerWidth())),
                n = parseInt(.5 * (s.height() - i.outerHeight()));
            n = n <= 0 ? 0 : n, i.css({
                top: n,
                left: o
            }), this.setHeightDimmed(s.height(), i.outerHeight())
        }, s.prototype.setHeightDimmed = function (t, e) {
            var i = t <= e ? e : t;
            this.$dimmed.css("height", i)
        }, s.prototype.showDimmed = function () {
            this.$dimmed.show(), e("html").addClass(i.CSS.LAYER_OPEN)
        }, s.prototype.hideDimmed = function () {
            this.$dimmed.remove(), e("html").removeClass(i.CSS.LAYER_OPEN)
        }, s.prototype.enforceFocusLayer = function () {
            var t = this.$wrap,
                e = setTimeout(function () {
                    t.attr("tabindex", -1).focus(), clearTimeout(e)
                }, 50)
        }, s.prototype.enforceFocusLinked = function () {
            var t = this;
            if (this.$linked) var e = setTimeout(function () {
                t.$linked.focus(), clearTimeout(e)
            }, 50)
        }, s.prototype.getData = function (t) {
            return {
                type: t,
                manager: this,
                layer: this.$layer,
                linked: this.getLinked()
            }
        }, s
    }(), e(document).on("click", '[data-module-id="layer"]', function (i) {
        var s = e(this),
            o = e(s.data("layer-target"));
        s.is("a") && i.preventDefault(), new t.smg.global.LayerManager({
            layer: o,
            linked: s
        })
    })
}(window, jQuery);
/**
 * samsung.com GEO Cannibalization
 * src : common/js/src/smg/global/smg.global.cookieGeo.js
 * @version 1.2.1
 * @since 2016.07.22
 * @last  2016.09.01
 */! function (n, o) {
    "use strict";
    "undefined" == typeof n.smg && (n.smg = {}), "undefined" == typeof n.smg.global && (n.smg.global = {});
    var a = n.smg["static"],
        e = n.smg.util;
    n.smg.event;
    n.smg.global.cookieGeo = function () {
        var c = {
            closeBtn: ".btn-close",
            countryNameWrap: ".js-country-name",
            visitBtnsWrap: ".js-visit-btns",
            geoSelectWrap: ".geo-select",
            selectBtnsWrap: ".btn-group",
            geoMsgCookie: ".geo-msg-cookie",
            cookies: {
                commonaccepted: "cookiesaccepted",
                accepted: "cookiesaccepted-geo",
                countryCodes: "country_codes",
                siteCode: "site_cd"
            }
        };
        return {
            init: function (n, o) {
                if ((this.$container = n).length) {
                    if (this.options = e.def(c, o || {}), this.assignedHTMLElements(), this.isAcceptedCommon() && this.$geoMsgCookie
                            .css("display", "none"), this.isAcceptedGeo()) return void this.$body.removeClass(a.SUPPORT.COOKIE_WARNING);
                    if (this.assignedHTMLElements(), this.initProperties(), this.bindEvents(), this.isLocalLanguageSite())
                        return this.$geoSelectWrap.remove(), void this.$body.addClass(a.SUPPORT.COOKIE_WARNING);
                    this.setVisitCountryInfo(), this.append(), this.$body.addClass(a.SUPPORT.COOKIE_WARNING)
                }
            },
            assignedHTMLElements: function () {
                var n = this.$container,
                    a = this.options;
                this.$body = o("body"), this.$contryNameWrap = n.find(a.countryNameWrap), this.$visitBtnsWrap = n.find(
                    a.visitBtnsWrap), this.$cookieGeoClose = n.find(a.closeBtn), this.$selectBtnWrap = n.find(a.selectBtnsWrap),
                    this.$geoSelectWrap = n.find(a.geoSelectWrap), this.$geoMsgCookie = n.find(a.geoMsgCookie)
            },
            initProperties: function () {
                var n = this.options.cookies;
                this.testSiteCd = this.getParam(n.siteCode), this.currentSiteCode = SITE_CD.toLowerCase(), this.testSiteCd ?
                    this.visitCountryCode = this.testSiteCd : this.visitCountryCode = e.cookie.getCookie(n.countryCodes)
                        .toLowerCase(), this.visitCountrySiteInfo = [], this.selectedSiteCode = ""
            },
            isLocalLanguageSite: function () {
                return this.currentSiteCode === this.visitCountryCode
            },
            setVisitCountryInfo: function () {
                o.each(t, o.proxy(function (n, a) {
                    var e = a.country_codes,
                        t = (a.site_code, a);
                    o.each(e, o.proxy(function (n, o) {
                        o === this.visitCountryCode && this.visitCountrySiteInfo.push(t)
                    }, this))
                }, this))
            },
            append: function () {
                var n = this.visitCountrySiteInfo;
                return n.length ? (this.$contryNameWrap.text(n[0].global.country_name), void o.each(n, o.proxy(function (
                    n, o) {
                    this.$visitBtnsWrap.append('<button type="button" site_cd="' + o.site_code.toLowerCase() +
                        '" data-omni="click" data-omni-type="content_click" data-omni-data="choose location:' + o.site_code
                            .toLowerCase() + '" title="Visit ' + o.local.country_name + "/" + o.local.lang +
                        ' site"><img src="/common/img/flag/flag_' + o.site_code.toLowerCase() + '.png" alt="Flag ' + o.local
                            .country_name + '" class="geo-flag"><span>' + o.local.country_name + ' / <span class="lang">' +
                        o.local.lang + "</span></span></button>")
                }, this))) : void this.$geoSelectWrap.remove()
            },
            bindEvents: function () {
                this.$cookieGeoClose.on("click", o.proxy(this.onCloseBtnClick, this)), this.$selectBtnWrap.on("click",
                    "button", o.proxy(this.onSelectBtnsClick, this)), this.$visitBtnsWrap.on("click", "button", o.proxy(
                    this.callTracking, this))
            },
            onCloseBtnClick: function () {
                var t = this.options.cookies,
                    c = this.$container.outerHeight(),
                    l = o(".gb-gnb");
                e.cookie.setCookie(t.accepted, "true", 90), e.cookie.setCookie(t.commonaccepted, "true", 90), l.length &&
                (o("body").hasClass("gb-gnb-fixed") || o("body").hasClass("gb-gnb-open")) && l.animate({
                    "margin-top": "-=" + c
                }), o.when(this.$container.animate({
                    "margin-top": "-=" + c
                })).done(o.proxy(function () {
                    this.$body.removeClass(a.SUPPORT.COOKIE_WARNING), this.$body.find(".bg-logo").focus(), n.smg.page.home &&
                    Waypoint.refreshAll()
                }, this))
            },
            onSelectBtnsClick: function (n) {
                var a = this.options.cookies;
                this.selectedSiteCode = o(n.currentTarget).attr(a.siteCode), e.cookie.setCookie(a.accepted, "true", 90),
                    e.cookie.setCookie(a.commonaccepted, "true", 90), this.setParamsCookie(a.siteCode, this.selectedSiteCode,
                    999)
            },
            callTracking: function (a) {
                var e = n.smg.global.tracking.opts,
                    t = o(a.currentTarget),
                    c = t.attr(e.sendType),
                    l = t.attr(e.sendData),
                    i = t.attr(e.sendOption);
                n.sendClickCode(c, l, i)
            },
            isAcceptedGeo: function () {
                return !!e.cookie.getCookie(this.options.cookies.accepted)
            },
            isAcceptedCommon: function () {
                return !!e.cookie.getCookie(this.options.cookies.commonaccepted)
            },
            setParamsCookie: function (n, o, a) {
                var e = new Date,
                    t = window.location.protocol + "//" + window.location.host + "/" + this.selectedSiteCode;
                e.setDate(e.getDate() + parseInt(a)), document.cookie = n + "=" + escape(o) + "; path=/; expires=" + e.toGMTString() +
                    ";", window.location.href = t
            },
            getParam: function (n) {
                var o = {};
                return document.location.search.replace(/\??(?:([^=]+)=([^&]*)&?)/g, function () {
                    function n(n) {
                        return decodeURIComponent(n.split("+").join(" "))
                    }
                    o[n(arguments[1])] = n(arguments[2])
                }), o[n]
            }
        }
    }(), o(function () {
        SITE_CD && n.smg.global.cookieGeo.init(o(".cookie-geo"))
    });
    var t = [{
        site_code: "CA_FR",
        global: {
            country_name: "Canada",
            lang: "French"
        },
        local: {
            country_name: "Canada",
            lang: "Français"
        },
        country_codes: ["ca"]
    }, {
        site_code: "CA",
        global: {
            country_name: "Canada",
            lang: "English"
        },
        local: {
            country_name: "Canada",
            lang: "English"
        },
        country_codes: ["ca"]
    }, {
        site_code: "MX",
        global: {
            country_name: "Mexico",
            lang: "Spanish"
        },
        local: {
            country_name: "México",
            lang: "Españo"
        },
        country_codes: ["mx"]
    }, {
        site_code: "BR",
        global: {
            country_name: "Brazil",
            lang: "Portuguese"
        },
        local: {
            country_name: "Brasil",
            lang: "Português"
        },
        country_codes: ["br"]
    }, {
        site_code: "LATIN",
        global: {
            country_name: "Latin America",
            lang: "Spanish"
        },
        local: {
            country_name: "Latin",
            lang: "Español"
        },
        country_codes: ["gt", "ni", "do", "bo", "ec", "sv", "cr", "pa", "hn"]
    }, {
        site_code: "LATIN_EN",
        global: {
            country_name: "Latin America",
            lang: "English"
        },
        local: {
            country_name: "Latin",
            lang: "English"
        },
        country_codes: ["gy", "gp", "mq", "bb", "bm", "bz", "lc", "sr", "aw", "ht", "ag", "jm", "ky", "tt"]
    }, {
        site_code: "CO",
        global: {
            country_name: "Colombia",
            lang: "Spanish"
        },
        local: {
            country_name: "Colombia",
            lang: "Español"
        },
        country_codes: ["co"]
    }, {
        site_code: "AR",
        global: {
            country_name: "Argentina",
            lang: "Spanish"
        },
        local: {
            country_name: "Argentina",
            lang: "Español"
        },
        country_codes: ["ar"]
    }, {
        site_code: "UY",
        global: {
            country_name: "Uruguay",
            lang: "Spanish"
        },
        local: {
            country_name: "Uruguay",
            lang: "Español"
        },
        country_codes: ["uy"]
    }, {
        site_code: "PY",
        global: {
            country_name: "Paraguay",
            lang: "Spanish"
        },
        local: {
            country_name: "Paraguay",
            lang: "Español"
        },
        country_codes: ["py"]
    }, {
        site_code: "CL",
        global: {
            country_name: "Chile",
            lang: "Spanish"
        },
        local: {
            country_name: "Chile",
            lang: "Español"
        },
        country_codes: ["cl"]
    }, {
        site_code: "PE",
        global: {
            country_name: "Peru",
            lang: "Spanish"
        },
        local: {
            country_name: "Perú ",
            lang: "Español"
        },
        country_codes: ["pe"]
    }, {
        site_code: "SG",
        global: {
            country_name: "Singapore",
            lang: "English"
        },
        local: {
            country_name: "Singapore",
            lang: "English"
        },
        country_codes: ["sg"]
    }, {
        site_code: "AU",
        global: {
            country_name: "Australia",
            lang: "English"
        },
        local: {
            country_name: "Australia",
            lang: "English"
        },
        country_codes: ["au"]
    }, {
        site_code: "NZ",
        global: {
            country_name: "New Zealand",
            lang: "English"
        },
        local: {
            country_name: "New Zealand",
            lang: "English"
        },
        country_codes: ["nz"]
    }, {
        site_code: "ID",
        global: {
            country_name: "Indonesia",
            lang: "Indonesian"
        },
        local: {
            country_name: "Indonesia",
            lang: "Bahasa Indonesia"
        },
        country_codes: ["id"]
    }, {
        site_code: "TH",
        global: {
            country_name: "Thailand",
            lang: "Thai"
        },
        local: {
            country_name: "ประเทศไท�?",
            lang: "ไท�?"
        },
        country_codes: ["th"]
    }, {
        site_code: "VN",
        global: {
            country_name: "Vietnam",
            lang: "Vietnamese"
        },
        local: {
            country_name: "Việt Nam",
            lang: "Tiếng Việt"
        },
        country_codes: ["vn"]
    }, {
        site_code: "MY",
        global: {
            country_name: "Malaysia",
            lang: "English"
        },
        local: {
            country_name: "Malaysia",
            lang: "English"
        },
        country_codes: ["my"]
    }, {
        site_code: "PH",
        global: {
            country_name: "Philippines",
            lang: "English"
        },
        local: {
            country_name: "Philippines",
            lang: "English"
        },
        country_codes: ["ph"]
    }, {
        site_code: "JP",
        global: {
            country_name: "Japan",
            lang: "Japanese"
        },
        local: {
            country_name: "日本",
            lang: "日本�?"
        },
        country_codes: ["jp"]
    }, {
        site_code: "IN",
        global: {
            country_name: "India",
            lang: "English"
        },
        local: {
            country_name: "India",
            lang: "English"
        },
        country_codes: ["in", "np", "bd", "lk"]
    }, {
        site_code: "UK",
        global: {
            country_name: "United Kingdom",
            lang: "English"
        },
        local: {
            country_name: "United Kingdom",
            lang: "English"
        },
        country_codes: ["gb", "uk"]
    }, {
        site_code: "IE",
        global: {
            country_name: "Ireland",
            lang: "English"
        },
        local: {
            country_name: "Ireland",
            lang: "English"
        },
        country_codes: ["ie"]
    }, {
        site_code: "IT",
        global: {
            country_name: "Italy",
            lang: "Italian"
        },
        local: {
            country_name: "Italia",
            lang: "taliano"
        },
        country_codes: ["it", "mt"]
    }, {
        site_code: "ES",
        global: {
            country_name: "Spain",
            lang: "Spanish"
        },
        local: {
            country_name: "Espana",
            lang: "Espanol"
        },
        country_codes: ["es"]
    }, {
        site_code: "HU",
        global: {
            country_name: "Hungary",
            lang: "Hungarian"
        },
        local: {
            country_name: "Magyarország",
            lang: "Magyar"
        },
        country_codes: ["hu"]
    }, {
        site_code: "DE",
        global: {
            country_name: "Germany",
            lang: "German"
        },
        local: {
            country_name: "Deutschland",
            lang: "Deutsch"
        },
        country_codes: ["de"]
    }, {
        site_code: "SE",
        global: {
            country_name: "Sweden",
            lang: "Swedish"
        },
        local: {
            country_name: "Sverige",
            lang: "Svenska"
        },
        country_codes: ["se"]
    }, {
        site_code: "DK",
        global: {
            country_name: "Denmark",
            lang: "Danish"
        },
        local: {
            country_name: "Danmark",
            lang: "Dansk"
        },
        country_codes: ["dk"]
    }, {
        site_code: "FI",
        global: {
            country_name: "Finland",
            lang: "Finnish"
        },
        local: {
            country_name: "Suomi",
            lang: "Suomi"
        },
        country_codes: ["fi"]
    }, {
        site_code: "NO",
        global: {
            country_name: "Norway",
            lang: "Norwegian"
        },
        local: {
            country_name: "Norge",
            lang: "Norsk"
        },
        country_codes: ["no"]
    }, {
        site_code: "FR",
        global: {
            country_name: "France",
            lang: "French"
        },
        local: {
            country_name: "France",
            lang: "Français"
        },
        country_codes: ["fr"]
    }, {
        site_code: "PT",
        global: {
            country_name: "Portugal",
            lang: "Portuguese"
        },
        local: {
            country_name: "Portugal",
            lang: "Português"
        },
        country_codes: ["pt"]
    }, {
        site_code: "PL",
        global: {
            country_name: "Poland",
            lang: "Polish"
        },
        local: {
            country_name: "Polska",
            lang: "Polski"
        },
        country_codes: ["pl"]
    }, {
        site_code: "GR",
        global: {
            country_name: "Greece",
            lang: "Greek"
        },
        local: {
            country_name: "Ελλάδα",
            lang: "Ελληνικά"
        },
        country_codes: ["gr"]
    }, {
        site_code: "CZ",
        global: {
            country_name: "Czech",
            lang: "Czech"
        },
        local: {
            country_name: "Česká republika",
            lang: "Čeština"
        },
        country_codes: ["cz"]
    }, {
        site_code: "SK",
        global: {
            country_name: "Slovakia",
            lang: "Slovakian"
        },
        local: {
            country_name: "Slovensko",
            lang: "Slovenčina"
        },
        country_codes: ["sk"]
    }, {
        site_code: "RO",
        global: {
            country_name: "Romania",
            lang: "Romanian"
        },
        local: {
            country_name: "Romania",
            lang: "Romanian"
        },
        country_codes: ["ro"]
    }, {
        site_code: "BG",
        global: {
            country_name: "Bulgaria",
            lang: "Bulgarian"
        },
        local: {
            country_name: "България",
            lang: "Български"
        },
        country_codes: ["bg"]
    }, {
        site_code: "AT",
        global: {
            country_name: "Austria",
            lang: "German"
        },
        local: {
            country_name: "Österreich",
            lang: "Deutsch"
        },
        country_codes: ["at"]
    }, {
        site_code: "CH",
        global: {
            country_name: "Switzerland",
            lang: "German"
        },
        local: {
            country_name: "Schweiz",
            lang: "Deutsch"
        },
        country_codes: ["ch"]
    }, {
        site_code: "CH_FR",
        global: {
            country_name: "Switzerland",
            lang: "French"
        },
        local: {
            country_name: "Suisse",
            lang: "Francaise"
        },
        country_codes: ["ch"]
    }, {
        site_code: "BE",
        global: {
            country_name: "Belgium",
            lang: "Dutch"
        },
        local: {
            country_name: "België",
            lang: "Nederlands"
        },
        country_codes: ["be"]
    }, {
        site_code: "BE_FR",
        global: {
            country_name: "Belgium",
            lang: "French"
        },
        local: {
            country_name: "Belgium",
            lang: "French"
        },
        country_codes: ["lu"]
    }, {
        site_code: "NL",
        global: {
            country_name: "Netherlands",
            lang: "Dutch"
        },
        local: {
            country_name: "Nederland",
            lang: "Nederlands"
        },
        country_codes: ["nl"]
    }, {
        site_code: "LV",
        global: {
            country_name: "Latvia",
            lang: "Latvian"
        },
        local: {
            country_name: "Latvija",
            lang: "Latviešu"
        },
        country_codes: ["lv"]
    }, {
        site_code: "LT",
        global: {
            country_name: "Lithuania",
            lang: "Lithuanian"
        },
        local: {
            country_name: "Lietuva",
            lang: "Lietuvių"
        },
        country_codes: ["lt"]
    }, {
        site_code: "EE",
        global: {
            country_name: "Estonia",
            lang: "Estonian"
        },
        local: {
            country_name: "Eesti",
            lang: "Eesti"
        },
        country_codes: ["ee"]
    }, {
        site_code: "RS",
        global: {
            country_name: "Serbia",
            lang: "Serbian"
        },
        local: {
            country_name: "Cрбија",
            lang: "Cрпски"
        },
        country_codes: ["rs"]
    }, {
        site_code: "HR",
        global: {
            country_name: "Croatia",
            lang: "Croatian"
        },
        local: {
            country_name: "Hrvatska",
            lang: "Hrvatski"
        },
        country_codes: ["hr"]
    }, {
        site_code: "SI",
        global: {
            country_name: "Slovenia",
            lang: "Slovenijan"
        },
        local: {
            country_name: "Slovenija",
            lang: "Slovenščina"
        },
        country_codes: ["sl"]
    }, {
        site_code: "RU",
        global: {
            country_name: "Russia",
            lang: "Russian"
        },
        local: {
            country_name: "Россия",
            lang: "Русский"
        },
        country_codes: ["ru"]
    }, {
        site_code: "UA",
        global: {
            country_name: "Ukraine",
            lang: "Ukrainian"
        },
        local: {
            country_name: "Україна",
            lang: "Українська"
        },
        country_codes: ["ua"]
    }, {
        site_code: "UA_RU",
        global: {
            country_name: "Ukraine",
            lang: "Russian"
        },
        local: {
            country_name: "Украина",
            lang: "Pусский"
        },
        country_codes: ["ua"]
    }, {
        site_code: "KZ_RU",
        global: {
            country_name: "Kazakhstan",
            lang: "Russian"
        },
        local: {
            country_name: "Kazakhstan",
            lang: "Pусский"
        },
        country_codes: ["kz"]
    }, {
        site_code: "AE",
        global: {
            country_name: "UAE",
            lang: "English"
        },
        local: {
            country_name: "UAE",
            lang: "English"
        },
        country_codes: ["bh", "ae", "ye", "om", "qa", "kw"]
    }, {
        site_code: "AE_AR",
        global: {
            country_name: "UAE",
            lang: "Arabic"
        },
        local: {
            country_name: "الإمارات ",
            lang: "العربية"
        },
        country_codes: ["ae"]
    }, {
        site_code: "IL",
        global: {
            country_name: "Israel",
            lang: "Hebrew"
        },
        local: {
            country_name: "ישראל",
            lang: "עברית"
        },
        country_codes: ["il"]
    }, {
        site_code: "SA",
        global: {
            country_name: "Saudi Arabia",
            lang: "Arabic"
        },
        local: {
            country_name: "المملكة العربية السعودية",
            lang: "عربي"
        },
        country_codes: ["sa", "ly"]
    }, {
        site_code: "SA_EN",
        global: {
            country_name: "Saudi Arabia",
            lang: "English"
        },
        local: {
            country_name: "Saudi Arabia",
            lang: "English"
        },
        country_codes: ["sa"]
    }, {
        site_code: "TR",
        global: {
            country_name: "Turkey",
            lang: "Turkish"
        },
        local: {
            country_name: "Türkiye",
            lang: "Türkçe"
        },
        country_codes: ["tr"]
    }, {
        site_code: "IRAN",
        global: {
            country_name: "Iran",
            lang: "Persian"
        },
        local: {
            country_name: "ایران",
            lang: "فارسي"
        },
        country_codes: ["lr"]
    }, {
        site_code: "LEVANT",
        global: {
            country_name: "Levant",
            lang: "English"
        },
        local: {
            country_name: "Levant",
            lang: "English"
        },
        country_codes: ["lb", "jo", "iq"]
    }, {
        site_code: "PK",
        global: {
            country_name: "Pakistan",
            lang: "English"
        },
        local: {
            country_name: "Pakistan",
            lang: "English"
        },
        country_codes: ["pk", "af"]
    }, {
        site_code: "EG",
        global: {
            country_name: "Egypt",
            lang: "Arabic"
        },
        local: {
            country_name: "البلد مصر",
            lang: "العربية"
        },
        country_codes: ["eg", "so", "er"]
    }, {
        site_code: "N_AFRICA",
        global: {
            country_name: "Africa",
            lang: "French"
        },
        local: {
            country_name: "Maroc",
            lang: "Français"
        },
        country_codes: ["ma", "dz", "tn"]
    }, {
        site_code: "AFRICA_EN",
        global: {
            country_name: "Africa Pan",
            lang: "English"
        },
        local: {
            country_name: "Africa",
            lang: "English"
        },
        country_codes: ["gh", "gm", "na", "ng", "lr", "mw", "bw", "sz", "sl", "et", "ug", "zm", "zw", "ke", "tz"]
    }, {
        site_code: "AFRICA_FR",
        global: {
            country_name: "Africa Pan",
            lang: "French"
        },
        local: {
            country_name: "Afrique",
            lang: "Français"
        },
        country_codes: ["ga", "gn", "ne", "rw", "re", "mg", "yt", "ml", "mu", "mr", "bj", "bi", "bf", "sn", "sc",
            "cf", "dj", "td", "cm", "km", "ci", "cg", "cd", "tg"]
    }, {
        site_code: "AFRICA_PT",
        global: {
            country_name: "Africa Pan",
            lang: "Portuguese"
        },
        local: {
            country_name: "África",
            lang: "Português"
        },
        country_codes: ["gw", "mz", "ao", "cv"]
    }, {
        site_code: "ZA",
        global: {
            country_name: "South Africa",
            lang: "English"
        },
        local: {
            country_name: "South Africa",
            lang: "English"
        },
        country_codes: ["za"]
    }, {
        site_code: "US",
        global: {
            country_name: "USA",
            lang: "English"
        },
        local: {
            country_name: "USA",
            lang: "English"
        },
        country_codes: ["us"]
    }, {
        site_code: "CN",
        global: {
            country_name: "China",
            lang: "Chinese"
        },
        local: {
            country_name: "中国",
            lang: "中文"
        },
        country_codes: ["cn"]
    }, {
        site_code: "HK",
        global: {
            country_name: "Hong Kong",
            lang: "Chinese"
        },
        local: {
            country_name: "香港",
            lang: "繁體中文"
        },
        country_codes: ["hk"]
    }, {
        site_code: "HK_EN",
        global: {
            country_name: "Hong Kong",
            lang: "English"
        },
        local: {
            country_name: "Hong Kong",
            lang: "English"
        },
        country_codes: ["hk"]
    }, {
        site_code: "TW",
        global: {
            country_name: "Taiwan",
            lang: "Chinese"
        },
        local: {
            country_name: "台灣",
            lang: "繁體中文"
        },
        country_codes: ["tw"]
    }, {
        site_code: "SEC",
        global: {
            country_name: "Korea",
            lang: "Korean"
        },
        local: {
            country_name: "대한민�?",
            lang: "한국�?"
        },
        country_codes: ["kr"]
    }]
}(window, jQuery);
/*!
 * samsung.com - Phase2 - Common GNB
 * src : common/js/src/smg/global/smg.global.promotionbar.js
 *
 * @version 2.0.0
 * @since 2016.09.19
 */! function (o, t) {
    "use strict";
    "undefined" == typeof o.smg && (o.smg = {}), "undefined" == typeof o.smg.global && (o.smg.global = {});
    var i = o.smg.util;
    o.smg.global.promotionbar = function () {
        var o = {
            cookiesPromotion: "cookies-promotion",
            sessionCountryCode: "cookie_country",
            cookiePromotionClass: "cookie-promotion"
        };
        return {
            init: function (t) {
                this.chkConfirmedLocation(), this.assignedHTMLElements(t), this.$container.addClass(o.cookiePromotionClass),
                    this.bindEvents()
            },
            assignedHTMLElements: function (o) {
                this.$container = o, this.$closeButton = this.$container.find(".s-ico-close"), this.$samsungLogo = t(
                    "a.gb-gnb__logo")
            },
            chkConfirmedLocation: function () {
                var o = !1;
                return this.disabledCountrys = this.getPromotionCookie(), this.sessionCode = this.getSessionCountryCode(),
                this.getTestParameter("site_cd") && (this.sessionCode = this.getTestParameter("site_cd")), o = this
                    .disabledCountrys.indexOf(this.sessionCode) !== -1
            },
            getSessionCountryCode: function () {
                var t = i.cookie.getCookie(o.sessionCountryCode).toLowerCase();
                return t
            },
            getPromotionCookie: function () {
                var t = i.cookie.getCookie(o.cookiesPromotion).toLowerCase();
                return t
            },
            setPromotionCookie: function () {
                var t = this.disabledCountrys,
                    e = this.sessionCode;
                t.indexOf(e) === -1 && (t = t.length < 1 ? e : t + "/" + e, i.cookie.setCookie(o.cookiesPromotion, t,
                    90))
            },
            bindEvents: function () {
                var o = this;
                this.$closeButton.on("click", function (t) {
                    return o.onCloseBtnClick(), !1
                })
            },
            onCloseBtnClick: function () {
                this.setPromotionCookie(), this.closePromotionWrap()
            },
            closePromotionWrap: function () {
                var t = this;
                this.$container.height(), this.$container.offset().top;
                t.$container.removeClass(o.cookiePromotionClass)
            },
            getTestParameter: function (o) {
                for (var t = "", i = unescape(location.href), e = i.slice(i.indexOf("?") + 1, i.length).split("&"), n =
                    0; n < e.length; n++) {
                    var s = e[n].split("=")[0];
                    if (s.toUpperCase() == o.toUpperCase()) {
                        t = e[n].split("=")[1];
                        break
                    }
                }
                return t
            }
        }
    }(), t(function () {
        o.smg.global.promotionbar.init(t("div.gb-gnb__promotion"))
    })
}(window, jQuery);
/* Placeholders.js v4.0.1 */
/*!
 * The MIT License
 *
 * Copyright (c) 2012 James Allardice
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */! function (t) {
    "use strict";

    function e() {}
    function r() {
        try {
            return document.activeElement
        } catch (t) {}
    }
    function a(t, e) {
        for (var r = 0, a = t.length; a > r; r++) if (t[r] === e) return !0;
        return !1
    }
    function n(t, e, r) {
        return t.addEventListener ? t.addEventListener(e, r, !1) : t.attachEvent ? t.attachEvent("on" + e, r) : void 0
    }
    function u(t, e) {
        var r;
        t.createTextRange ? (r = t.createTextRange(), r.move("character", e), r.select()) : t.selectionStart && (t.focus(),
            t.setSelectionRange(e, e))
    }
    function i(t, e) {
        try {
            return t.type = e, !0
        } catch (r) {
            return !1
        }
    }
    function l(t, e) {
        if (t && t.getAttribute(S)) e(t);
        else for (var r, a = t ? t.getElementsByTagName("input") : z, n = t ? t.getElementsByTagName("textarea") : F, u =
            a ? a.length : 0, i = n ? n.length : 0, l = u + i, o = 0; l > o; o++) r = u > o ? a[o] : n[o - u],
            e(r)
    }
    function o(t) {
        l(t, s)
    }
    function c(t) {
        l(t, d)
    }
    function s(t, e) {
        var r = !! e && t.value !== e,
            a = t.value === t.getAttribute(S);
        if ((r || a) && "true" === t.getAttribute(L)) {
            t.removeAttribute(L), t.value = t.value.replace(t.getAttribute(S), ""), t.className = t.className.replace(B,
                "");
            var n = t.getAttribute(P);
            parseInt(n, 10) >= 0 && (t.setAttribute("maxLength", n), t.removeAttribute(P));
            var u = t.getAttribute(k);
            return u && (t.type = u), !0
        }
        return !1
    }
    function d(t) {
        var e = t.getAttribute(S);
        if ("" === t.value && e) {
            t.setAttribute(L, "true"), t.value = e, t.className += " " + w;
            var r = t.getAttribute(P);
            r || (t.setAttribute(P, t.maxLength), t.removeAttribute("maxLength"));
            var a = t.getAttribute(k);
            return a ? t.type = "text" : "password" === t.type && i(t, "text") && t.setAttribute(k, "password"), !0
        }
        return !1
    }
    function v(t) {
        return function () {
            G && t.value === t.getAttribute(S) && "true" === t.getAttribute(L) ? u(t, 0) : s(t)
        }
    }
    function p(t) {
        return function () {
            d(t)
        }
    }
    function f(t) {
        return function () {
            o(t)
        }
    }
    function g(t) {
        return function (e) {
            return x = t.value, "true" === t.getAttribute(L) && x === t.getAttribute(S) && a(N, e.keyCode) ? (e.preventDefault &&
            e.preventDefault(), !1) : void 0
        }
    }
    function h(t) {
        return function () {
            s(t, x), "" === t.value && (t.blur(), u(t, 0))
        }
    }
    function b(t) {
        return function () {
            t === r() && t.value === t.getAttribute(S) && "true" === t.getAttribute(L) && u(t, 0)
        }
    }
    function m(t) {
        var e = t.form;
        e && "string" == typeof e && (e = document.getElementById(e), e.getAttribute(I) || (n(e, "submit", f(e)), e.setAttribute(
            I, "true"))), n(t, "focus", v(t)), n(t, "blur", p(t)), G && (n(t, "keydown", g(t)), n(t, "keyup", h(t)), n(
            t, "click", b(t))), t.setAttribute(R, "true"), t.setAttribute(S, M), (G || t !== r()) && d(t)
    }
    var A = document.createElement("input"),
        y = void 0 !== A.placeholder;
    if (t.Placeholders = {
            nativeSupport: y,
            disable: y ? e : o,
            enable: y ? e : c
        }, !y) {
        var x, E = ["text", "search", "url", "tel", "email", "password", "number", "textarea"],
            N = [27, 33, 34, 35, 36, 37, 38, 39, 40, 8, 46],
            T = "#ccc",
            w = "placeholdersjs",
            B = new RegExp("(?:^|\\s)" + w + "(?!\\S)"),
            S = "data-placeholder-value",
            L = "data-placeholder-active",
            k = "data-placeholder-type",
            I = "data-placeholder-submit",
            R = "data-placeholder-bound",
            q = "data-placeholder-focus",
            C = "data-placeholder-live",
            P = "data-placeholder-maxlength",
            V = 100,
            j = document.getElementsByTagName("head")[0],
            D = document.documentElement,
            Q = t.Placeholders,
            z = document.getElementsByTagName("input"),
            F = document.getElementsByTagName("textarea"),
            G = "false" === D.getAttribute(q),
            H = "false" !== D.getAttribute(C),
            J = document.createElement("style");
        J.type = "text/css";
        var K = document.createTextNode("." + w + " {color:" + T + ";}");
        J.styleSheet ? J.styleSheet.cssText = K.nodeValue : J.appendChild(K), j.insertBefore(J, j.firstChild);
        for (var M, O, U = 0, W = z.length + F.length; W > U; U++) O = U < z.length ? z[U] : F[U - z.length], M = O.attributes
            .placeholder, M && (M = M.nodeValue, M && a(E, O.type) && m(O));
        var X = setInterval(function () {
            for (var t = 0, e = z.length + F.length; e > t; t++) O = t < z.length ? z[t] : F[t - z.length], M = O.attributes
                .placeholder, M ? (M = M.nodeValue, M && a(E, O.type) && (O.getAttribute(R) || m(O), (M !== O.getAttribute(
                S) || "password" === O.type && !O.getAttribute(k)) && ("password" === O.type && !O.getAttribute(k) &&
            i(O, "text") && O.setAttribute(k, "password"), O.value === O.getAttribute(S) && (O.value = M), O.setAttribute(
                S, M)))) : O.getAttribute(L) && (s(O), O.removeAttribute(S));
            H || clearInterval(X)
        }, V);
        n(t, "beforeunload", function () {
            Q.disable()
        })
    }
}(this),
    function (t, e) {
        "use strict";
        var r = t.fn.val,
            a = t.fn.prop;
        e.Placeholders.nativeSupport || (t.fn.val = function (t) {
            var e = r.apply(this, arguments),
                a = this.eq(0).data("placeholder-value");
            return void 0 === t && this.eq(0).data("placeholder-active") && e === a ? "" : e
        }, t.fn.prop = function (t, e) {
            return void 0 === e && this.eq(0).data("placeholder-active") && "value" === t ? "" : a.apply(this, arguments)
        })
    }(jQuery, this);
/*!
 * jQuery outside events - v1.1 - 3/16/2010
 * http://benalman.com/projects/jquery-outside-events-plugin/
 *
 * Copyright (c) 2010 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */! function (t, e, n) {
    "$:nomunge";

    function u(u, o) {
        function i(e) {
            t(s).each(function () {
                var n = t(this);
                this === e.target || n.has(e.target).length || n.triggerHandler(o, [e.target])
            })
        }
        o = o || u + n;
        var s = t(),
            c = u + "." + o + "-special-event";
        t.event.special[o] = {
            setup: function () {
                s = s.add(this), 1 === s.length && t(e).bind(c, i)
            },
            teardown: function () {
                s = s.not(this), 0 === s.length && t(e).unbind(c)
            },
            add: function (t) {
                var e = t.handler;
                t.handler = function (t, n) {
                    t.target = n, e.apply(this, arguments)
                }
            }
        }
    }
    t.map(
        "click dblclick mousemove mousedown mouseup mouseover mouseout change select submit keydown keypress keyup touchstart touchend"
            .split(" "), function (t) {
            u(t)
        }), u("focusin", "focus" + n), u("focusout", "blur" + n), t.addOutsideEvent = u
}(jQuery, document, "outside");
/*!
 * A simple jQuery plugin for creating animated drilldown menus.
 *
 * @name jQuery Drilldown
 * @version 1.1.1
 * @requires jQuery v1.7+
 * @author Aleksandras Nelkinas
 * @license [MIT]{@link http://opensource.org/licenses/mit-license.php}
 *
 * Copyright (c) 2015 Aleksandras Nelkinas
 *
 * @modify
 *  option : rtl
 *
 * @add trigger event
 *  animate change : trigger 'DRILLDOWN_ANIMATE_CHANGE'
 *
 * @add focus event
 *  animate change : focus
 *
 * @add <div class="drilldown-auth"></div> separated
 * @last 160825 - smg
 */! function (s) {
    "function" == typeof define && define.amd ? define(["jquery"], s) : "object" == typeof exports ? module.exports = s(
        require("jquery")) : s(jQuery)
}(function (s, t) {
    "use strict";
    var i = "drilldown",
        n = "data-next-parent",
        e = {
            rtl: s("html").hasClass("rtl"),
            event: "click",
            selector: "a",
            speed: 100,
            cssClass: {
                container: i + "-container",
                root: i + "-root",
                sub: i + "-sub",
                back: i + "-back",
                auth: i + "-auth"
            }
        }, h = function () {
            function h(t, n) {
                var h = this;
                this._name = i, this._defaults = e, this.element = t, this.$element = s(t), this.options = s.extend({},
                    e, n), this._history = [], this._auth = [], this.options.rtl ? this._css = {
                    "float": "right",
                    width: null
                } : this._css = {
                    "float": "left",
                    width: null
                }, this.$container = this.$element.find("." + this.options.cssClass.container), this.$root = this.$container
                    .find("." + this.options.cssClass.root), this.$auth = this.$container.find("." + this.options.cssClass
                    .auth), this.$element.on(this.options.event + "." + i, this.options.selector, function (t) {
                    o.call(h, t, s(this))
                })
            }
            function o(s, t) {
                var i = t.nextAll("." + this.options.cssClass.sub),
                    n = !0;
                i.length ? a.call(this, i) : t.closest("." + this.options.cssClass.back).length ? r.call(this) : n = !1,
                n && "A" === t.prop("tagName") && s.preventDefault()
            }
            function a(i, e, h) {
                var o = e && e.speed !== t ? e.speed : this.options.speed;
                i.length && (this._css.width = this.$element.outerWidth(), this.$container.width(2 * this._css.width),
                    i.parent().attr(n, !0), i = i.removeClass(this.options.cssClass.sub).addClass(this.options.cssClass
                    .root), this.$container.append(i), this.$root.append(this.$auth), this.options.rtl ? c.call(this, {
                    marginRight: -1 * this._css.width,
                    speed: o
                }, function () {
                    var t = i.prev();
                    this._auth.push(this.$auth), this._history.push(t.detach()), l.call(this, i), s("body").trigger(
                        "DRILLDOWN_ANIMATE_CHANGE"), i.children().first().hasClass(this.options.cssClass.back) ? i.find(
                        "." + this.options.cssClass.back + " a").focus() : i.children().children().children().eq(0).focus()
                }.bind(this)) : c.call(this, {
                    marginLeft: -1 * this._css.width,
                    speed: o
                }, function () {
                    var t = i.prev();
                    this._auth.push(this.$auth), this._history.push(t.detach()), l.call(this, i), s("body").trigger(
                        "DRILLDOWN_ANIMATE_CHANGE"), i.children().first().hasClass(this.options.cssClass.back) ? i.find(
                        "." + this.options.cssClass.back + " a").focus() : i.children().children().children().eq(0).focus()
                }.bind(this)))
            }
            function r(i) {
                var e = i && i.speed !== t ? i.speed : this.options.speed,
                    h = this._history.pop(),
                    o = this._auth.pop();
                this._css.width = this.$element.outerWidth(), this.$container.width(2 * this._css.width), this.$container
                    .prepend(h), h.append(o), this.options.rtl ? c.call(this, {
                    marginRight: 0,
                    speed: e
                }, function () {
                    var t = h.next();
                    t.addClass(this.options.cssClass.sub).removeClass(this.options.cssClass.root), this.$container.find(
                        "[" + n + "]").last().removeAttr(n).append(t), l.call(this, h), s("body").trigger(
                        "DRILLDOWN_ANIMATE_CHANGE"), h.children().first().hasClass(this.options.cssClass.back) ? h.find(
                        "." + this.options.cssClass.back + " :first-child a").focus() : h.children().children().children()
                        .eq(0).focus()
                }.bind(this)) : c.call(this, {
                    marginLeft: 0,
                    speed: e
                }, function () {
                    var t = h.next();
                    t.addClass(this.options.cssClass.sub).removeClass(this.options.cssClass.root), this.$container.find(
                        "[" + n + "]").last().removeAttr(n).append(t), l.call(this, h), s("body").trigger(
                        "DRILLDOWN_ANIMATE_CHANGE"), h.children().first().hasClass(this.options.cssClass.back) ? h.find(
                        "." + this.options.cssClass.back + " a").focus() : h.children().children().children().eq(0).focus()
                }.bind(this))
            }
            function c(s, t) {
                var i = this.$container.children("." + this.options.cssClass.root);
                i.css(this._css), this.options.rtl ? i.first().animate({
                    marginRight: s.marginRight
                }, s.speed, t) : i.first().animate({
                    marginLeft: s.marginLeft
                }, s.speed, t)
            }
            function l(s) {
                this.options.rtl ? s.css({
                    "float": "",
                    width: "",
                    marginRight: ""
                }) : s.css({
                    "float": "",
                    width: "",
                    marginLeft: ""
                }), this.$container.css("width", "")
            }
            return h.prototype = {
                destroy: function () {
                    this.reset(), this.$element.off(this.options.event + "." + i, this.options.selector)
                },
                reset: function () {
                    var s;
                    for (s = this._history.length; s > 0; s--) r.call(this, {
                        speed: 0
                    });
                    this._history = [], this.options.rtl ? this._css = {
                        "float": "right",
                        width: null
                    } : this._css = {
                        "float": "left",
                        width: null
                    }
                }
            }, h
        }();
    s.fn[i] = function (t) {
        return this.each(function () {
            var n = s.data(this, i),
                e = t;
            n ? "string" == typeof e && ("destroy" === e && s.removeData(this, i), "function" == typeof n[e] && n[e]()) :
                s.data(this, i, new h(this, t))
        })
    }
});
/*!
 * samsung.com - Phase2 - Javascript Common
 * src : common/js/src/smg/gnb/smg.gnb.common.js
 *
 * @version 1.0.0
 * @since 2016.02.01
 * @liast 2016.08.18
 */
var IS_WMC_AEM_VER_GNB = !1;
! function () {
    IS_WMC_AEM_VER_GNB = !! $(".gb-gnb").length
}(),
    function (e) {
        "use strict";
        "undefined" == typeof e.smg && (e.smg = {}), e.smg.aem = e.smg.aem || {}, e.smg.aem.varStatic = e.smg.aem.varStatic || {},
            e.smg.aem.customEvent = e.smg.aem.customEvent || {}, e.smg.aem.util = e.smg.aem.util || {}, e.smg.aem.common =
            e.smg.aem.common || {}, e.smg.aem.components = e.smg.aem.components || {}, e.smg.aem.components.home = e.smg.aem
            .components.home || {}, e.smg.aem.components.aboutsamsung = e.smg.aem.components.aboutsamsung || {}, e.smg.aem.templates =
            e.smg.aem.templates || {}, e.smg.aem.templates.home = e.smg.aem.templates.home || {}
    }(window),
    function (e, t) {
        "use strict";
        "undefined" == typeof e.smg && (e.smg = {}), "undefined" == typeof e.smg.aem && (e.smg.aem = {}), "undefined" ==
        typeof e.smg.aem.util && (e.smg.aem.util = {});
        var s = Object.prototype.hasOwnProperty,
            n = e.document;
        e.smg.aem.util = function () {
            return {
                isArray: function (e) {
                    return "array" === t.type(e)
                },
                def: function (e, n) {
                    for (var i in n) s.call(n, i) && ("object" === t.type(e[i]) ? e[i] = this.isArray(e[i]) ? n[i].slice(0) :
                        this.def(e[i], n[i]) : e[i] = n[i]);
                    return e
                },
                winSize: function () {
                    var t = {
                        w: e.innerWidth || n.documentElement.clientWidth || n.body.clientWidth,
                        h: e.innerHeight || n.documentElement.clientHeight || n.body.clientHeight
                    };
                    return t
                },
                getQueryStr: function (t) {
                    t = t || e.location.href;
                    var s = {};
                    return t.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (e, t, n) {
                        s[t] = n
                    }), s
                },
                winOpener: function (t) {
                    var s, n, i, o = {
                        url: "http://www.samsung.com",
                        name: "smg_opener_" + (new Date).getTime(),
                        width: 400,
                        height: 400,
                        left: null,
                        top: null,
                        scrollbars: "no",
                        toolbar: "no",
                        location: "no",
                        directories: "no",
                        status: "no",
                        menubar: "no",
                        resizable: "no"
                    };
                    i = e.smg.util.def(o, t || {}), i.left = i.left || screen.width / 2 - i.width / 2, i.top = i.top ||
                        screen.height / 2 - i.height / 2, n = "";
                    for (var a in i) "url" != a && "name" != a && (n += "," + a + "=" + i[a]);
                    return n = n.substr(1, n.length), s = window.open(i.url, i.name, n)
                },
                imgLoader: function (e, s) {
                    e.each(function () {
                        var n = s || function () {};
                        this.complete || t(this).height() > 0 ? n.apply(e) : t(this).load(function () {
                            n.apply(e)
                        })
                    })
                },
                vwOrientationUpdate: function (s) {
                    t(e).on("orientationchange", function () {
                        var e = t(s || ".js-vw");
                        e.size() && (e.css("display", "none").height(), e.css("display", ""))
                    })
                },
                iPadVWRender: function () {
                    navigator.userAgent.match(/iPad/i) && this.vwOrientationUpdate(".js-vw")
                },
                Cookie: function () {
                    var t = {
                        expires: "",
                        path: "/",
                        domain: "",
                        secure: ""
                    };
                    return {
                        setCookie: function (s, n, i) {
                            var o = new Date;
                            o.setTime(o.getTime() + 24 * (i || 0) * 60 * 60 * 1e3);
                            var a = e.smg.aem.util.def(t, {
                                expires: o
                            });
                            document.cookie = [s, "=", n, a.expires ? "; expires=" + a.expires.toUTCString() : "", a.path ?
                                "; path=" + a.path : "", a.domain ? "; domain=" + a.domain : "", a.secure ? "; secure" :
                                ""].join("")
                        },
                        getCookie: function (e) {
                            for (var t, s = e + "=", n = document.cookie.split(";"), i = 0, o = n.length; i < o; i++) {
                                for (t = n[i];
                                     " " == t.charAt(0);) t = t.substring(1);
                                if (t.indexOf(s) != -1) return t.substring(s.length, t.length)
                            }
                            return ""
                        }
                    }
                },
                loadCSS: function (e, s, n) {
                    e && "string" !== t.type(e) || (e = [e]);
                    var i = t("head"),
                        o = [];
                    t.map(e, function (e) {
                        var s = t.Deferred();
                        o.push(s), t("<link>").attr({
                            rel: "stylesheet",
                            type: "text/css",
                            href: e + (n ? "?_ts=" + (new Date).getTime() : "")
                        }).appendTo(i).load(function () {
                            s.resolve()
                        })
                    }), t.when.apply(t, o).done(function () {
                        t.isFunction(s) && s()
                    })
                },
                getServerTime: function (e, s) {
                    s = s || window.location.href.toString(), e = e || function () {}, t.ajax({
                        url: s,
                        async: !1,
                        cashe: !1
                    }).done(function (t, s, n) {
                        e(new Date(n.getResponseHeader("Date")))
                    })
                },
                getRestrictBytes: function (e, t) {
                    var s = e.length,
                        n = 0,
                        i = 0,
                        o = "";
                    t = t || 100;
                    for (var a = 0; a < s; a++) o = e.charAt(a), escape(o).length > 4 ? n += 2 : n++, n <= t && (i = a + 1);
                    return {
                        bytes: n,
                        rectLeng: i
                    }
                },
                isAemEditMode: function () {
                    var s = !1;
                    return e.parent && e.frameElement && t(e.parent.document).find(".foundation-authoring-ui-mode").size() &&
                    (s = !0), s
                }
            }
        }(), e.smg.aem.util.cookie = new e.smg.aem.util.Cookie, t(function () {
            e.smg.aem.util.iPadVWRender()
        })
    }(window, jQuery),
    function (e) {
        "use strict";
        "undefined" == typeof e.smg && (e.smg = {}), "undefined" == typeof e.smg.aem && (e.smg.aem = {}), "undefined" ==
        typeof e.smg.aem.varStatic && (e.smg.aem.varStatic = {}), e.smg.aem.varStatic = {
            CSS: {
                VIDEO_OPEN: "video-open",
                SEARCH_POS: "search-pos",
                NAV_OPEN: "nav-open",
                NAV_CLOSE: "nav-close",
                HAS_ANIMATED: "has-animated",
                IS_SHOW: "is-show",
                IS_HIDE: "is-hide",
                IS_OPEN: "is-open",
                IS_SELECT: "is-select",
                JS_IMG_SRC: "js-img-src",
                JS_IMG_LAZY: "js-img-lazy",
                JS_IMG_LAZY_LOADED: "js-img-lazy-loaded",
                LAZY_LOADED: "lazy-loaded",
                SWITCH_MOBILE: "switch-mobile",
                SWITCH_TABLET: "switch-tablet"
            },
            DATA_ATTR: {
                SRC_PC: "data-src-pc",
                SRC_MOBILE: "data-src-mobile",
                DATA_SRC: "data-src"
            },
            SUPPORT: {
                NO_SVG: "no-svg",
                NO_CSS3: "no-css3",
                IE_LT_8: "lt-ie8",
                COOKIE_WARNING: "cookie-warning",
                TOUCH_DEVICE: "touch-device"
            },
            RESPONSIVE: {
                DESKTOP: {
                    NAME: "desktop"
                },
                TABLET: {
                    NAME: "tablet",
                    WIDTH: 1280
                },
                MOBILE: {
                    NAME: "mobile",
                    WIDTH: 768
                },
                MIN_MOBILE: {
                    NAME: "min_mobile",
                    WIDTH: 320
                },
                GNB: {
                    NAME: "gnb_reponsive",
                    WIDTH: 1024
                }
            }
        }
    }(window),
    function (e) {
        "use strict";
        "undefined" == typeof e.smg && (e.smg = {}), "undefined" == typeof e.smg.aem && (e.smg.aem = {}), "undefined" ==
        typeof e.smg.aem.customEvent && (e.smg.aem.customEvent = {}), e.smg.aem.customEvent = {
            VIDEO: {
                PLAY: "AEM_VIDEO_PLAY",
                CLOSE: "AEM_VIDEO_CLOSE"
            },
            RESPONSIVE: {
                GET_STATUS: "AEM_RESPONSIVE_GET_STATUS",
                CHANGE: "AEM_RESPONSIVE_CHANGE"
            }
        }
    }(window),
    function (e, t) {
        "use strict";
        "undefined" == typeof e.smg && (e.smg = {}), "undefined" == typeof e.smg.aem && (e.smg.aem = {}), "undefined" ==
        typeof e.smg.aem.common && (e.smg.aem.common = {});
        var s = e.smg.aem.varStatic,
            n = e.smg.aem.util,
            i = e.smg.aem.customEvent;
        e.smg.aem.common = function () {
            return {
                init: function () {
                    return this.detection(), this.responsiveName = "", this.responsiveNameEx = "", this.responsiveGNB = "",
                        this.responsiveGNBEx = "", t("body").on(i.RESPONSIVE.GET_STATUS, t.proxy(this.resizeListener, this)),
                        t(e).on("resize", t.proxy(this.resizeListener, this)), this.resizeListener(), this
                },
                detection: function () {
                    document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image", "1.1") || t("body").addClass(
                        s.SUPPORT.NO_SVG), document.all && !document.addEventListener && t("body").addClass(s.SUPPORT.IE_LT_8);
                    var e = document.body || document.documentElement,
                        n = e.style,
                        i = void 0 !== n.transition || void 0 !== n.WebkitTransition || void 0 !== n.MozTransition || void 0 !==
                            n.MsTransition || void 0 !== n.OTransition;
                    i || t("body").addClass(s.SUPPORT.NO_CSS3);
                    var o = "ontouchstart" in window || navigator.MaxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
                    o && t("body").addClass(s.SUPPORT.TOUCH_DEVICE)
                },
                resizeListener: function (e) {
                    var o = n.winSize().w;
                    o <= s.RESPONSIVE.MOBILE.WIDTH ? this.responsiveName = s.RESPONSIVE.MOBILE.NAME : o <= s.RESPONSIVE.TABLET
                        .WIDTH ? this.responsiveName = s.RESPONSIVE.TABLET.NAME : this.responsiveName = s.RESPONSIVE.DESKTOP
                        .NAME, o <= s.RESPONSIVE.GNB.WIDTH ? this.responsiveGNB = s.RESPONSIVE.GNB.NAME : this.responsiveGNB =
                        "", this.responsiveName === this.responsiveNameEx && this.responsiveGNB === this.responsiveGNBEx ||
                    (this.responsiveNameEx = this.responsiveName, this.responsiveGNBEx = this.responsiveGNB, t("body").trigger(
                        i.RESPONSIVE.CHANGE, {
                            RESPONSIVE_NAME: this.responsiveName,
                            RESPONSIVE_GNB_NAME: this.responsiveGNB,
                            isMobile: o <= s.RESPONSIVE.MOBILE.WIDTH
                        })), e && e.type === i.RESPONSIVE.GET_STATUS && t("body").trigger(i.RESPONSIVE.CHANGE, {
                        RESPONSIVE_NAME: this.responsiveName,
                        RESPONSIVE_GNB_NAME: this.responsiveGNB,
                        isMobile: o <= s.RESPONSIVE.MOBILE.WIDTH
                    })
                }
            }
        }();
        var o;
        t(function () {
            o = e.smg.aem.common.init()
        }), t(e).on("resize", function (e) {
            o && o.resizeListener && o.resizeListener.call(o, e)
        })
    }(window, jQuery),
    function (e, t) {
        "use strict";
        "undefined" == typeof e.smg && (e.smg = {}), "undefined" == typeof e.smg.aem && (e.smg.aem = {}), "undefined" ==
        typeof e.smg.aem.accessibility && (e.smg.aem.accessibility = {});
        var s = e.smg.aem.util,
            n = e.smg.aem.accessibility;
        n.checkbox = function () {
            var e = {
                targets: "[data-accessibility='checkbox']",
                targetsValue: "data-acc-checkbox-value",
                holder: "data-acc-checkbox",
                holderTarget: "data-acc-checkbox-target",
                onClass: "data-acc-onclass"
            };
            return {
                init: function (t, n) {
                    (this.container = t).size() && (this.opts = s.def(e, n || {}), this.setElements(), this.setBindEvents())
                },
                setElements: function () {
                    this.targets = this.container.find(this.opts.targets), this.holders = t("[" + this.opts.holder + "]"),
                        t.each(this.targets, t.proxy(function (e, s) {
                            t(s).attr(this.opts.targetsValue, t(s).attr("checked"))
                        }, this))
                },
                setBindEvents: function () {
                    this.holders.on("click", t.proxy(this.onHolderClick, this)), this.targets.on("change", t.proxy(this.onTargetChange,
                        this))
                },
                unElements: function () {
                    var e, s;
                    t.each(this.targets, t.proxy(function (n, i) {
                        e = t(i), s = this.getTargetInfo(e), e.removeAttr("checked", "checked"), e.prop("checked", !1), s.onClass &&
                        s.holder.removeClass(s.onClass)
                    }, this)), this.targets = [], this.holders = []
                },
                unBindEvents: function () {
                    this.holders.off("click", t.proxy(this.onHolderClick, this)), this.targets.off("change", t.proxy(this.onTargetChange,
                        this))
                },
                onHolderClick: function (e) {
                    var s = t(e.currentTarget);
                    s = t("[" + this.opts.holderTarget + "='" + s.attr(this.opts.holder) + "']"), s.size() && s.trigger(
                        "click").focus()
                },
                onTargetChange: function (e) {
                    var s = t(e.currentTarget),
                        n = this.getTargetInfo(s),
                        i = n.holder,
                        o = n.onClass,
                        a = s.attr("checked");
                    a ? (s.removeAttr("checked", "checked"), s.prop("checked", !1), o && i.removeClass(o)) : (s.attr(
                        "checked", "checked"), s.prop("checked", !0), o && i.addClass(o))
                },
                getTargetInfo: function (e) {
                    return e = t("[" + this.opts.holder + "='" + e.attr(this.opts.holderTarget) + "']"), e.size() ? {
                        holder: e,
                        onClass: e.attr(this.opts.onClass)
                    } : {
                        holder: "",
                        onClass: ""
                    }
                },
                destroy: function () {
                    this.unBindEvents(), this.unElements()
                },
                refresh: function (e, t) {
                    e = e || this.container, this.destroy(), this.init(e, t)
                }
            }
        }(), t(function () {
            n.checkbox.init(t("body"))
        })
    }(window, jQuery),
    function (e, t) {
        "use strict";
        "undefined" == typeof e.smg && (e.smg = {}), "undefined" == typeof e.smg.aem && (e.smg.aem = {}), "undefined" ==
        typeof e.smg.aem.accessibility && (e.smg.aem.accessibility = {});
        var s = e.smg.aem.util,
            n = e.smg.aem.accessibility;
        n.placeholder = function () {
            var e = {
                targets: "[data-accessibility='placeholder']",
                targetsValue: "data-acc-placeholder-value",
                holder: "data-acc-placeholder",
                holderTarget: "data-acc-placeholder-target",
                onClass: "data-acc-onclass"
            };
            return {
                init: function (t, n) {
                    (this.container = t).size() && (this.opts = s.def(e, n || {}), this.setElements(), this.setBindEvents())
                },
                setElements: function () {
                    this.targets = this.container.find(this.opts.targets), t.each(this.targets, t.proxy(function (e, s) {
                        t(s).attr(this.opts.targetsValue, t(s).val())
                    }, this))
                },
                setBindEvents: function () {
                    this.targets.on("focus", t.proxy(this.onTargetsFocus, this)).on("blur", t.proxy(this.onTargetsBlur,
                        this)).on("keydown keyup", t.proxy(this.onTargetsChange, this))
                },
                unElements: function () {
                    t.each(this.targets, t.proxy(function (e, s) {
                        t(s).val(t(s).attr(this.opts.targetsValue))
                    }, this));
                    var e, s;
                    t.each(t("[" + this.opts.holder + "]"), t.proxy(function (n, i) {
                        e = t(i), s = this.getTargetInfo(e), s.onClass ? e.removeClass(s.onClass) : e.show()
                    }, this)), this.targets = []
                },
                unBindEvents: function () {
                    this.targets.off("focus", t.proxy(this.onTargetsFocus, this)).off("blur", t.proxy(this.onTargetsBlur,
                        this))
                },
                onTargetsFocus: function (e) {
                    var s = t(e.currentTarget),
                        n = this.getTargetInfo(s),
                        i = n.holder,
                        o = n.onClass;
                    i && s.val() && (o ? i.addClass(o) : i.css({
                        visibility: "hidden"
                    }))
                },
                onTargetsBlur: function (e) {
                    var s = t(e.currentTarget),
                        n = this.getTargetInfo(s),
                        i = n.holder,
                        o = n.onClass;
                    i && (s.val() || (o ? i.removeClass(o) : i.css({
                        visibility: "visible"
                    })))
                },
                onTargetsChange: function (e) {
                    var s = t(e.currentTarget),
                        n = this.getTargetInfo(s),
                        i = n.holder,
                        o = n.onClass;
                    i && (s.val() ? o ? i.addClass(o) : i.css({
                        visibility: "hidden"
                    }) : o ? i.removeClass(o) : i.css({
                        visibility: "visible"
                    }))
                },
                getTargetInfo: function (e) {
                    return e = t("[" + this.opts.holder + "='" + e.attr(this.opts.holderTarget) + "']"), e.size() ? {
                        holder: e,
                        onClass: e.attr(this.opts.onClass)
                    } : {
                        holder: "",
                        onClass: ""
                    }
                },
                destroy: function () {
                    this.unBindEvents(), this.unElements()
                },
                refresh: function (e, t) {
                    e = e || this.container, this.destroy(), this.init(e, t)
                }
            }
        }(), t(function () {
            n.placeholder.init(t("body"))
        })
    }(window, jQuery);
/*!
 * samsung.com - Phase2 - Common GNB
 * src : common/js/src/smg/gnb/smg.gnb.common-gnb.js
 *
 * @version 1.0.0
 * @since 2016.08.19
 * @last 2016.09.25
 */! function (i, e) {
    "use strict";
    if (IS_WMC_AEM_VER_GNB) {
        "undefined" == typeof i.smg && (i.smg = {}), "undefined" == typeof i.smg.aem && (i.smg.aem = {}), "undefined" ==
        typeof i.smg.aem.common && (i.smg.aem.common = {});
        var t = i.smg.aem.common,
            s = i.smg.aem.varStatic;
        i.smg.aem.customEvent;
        t.gnb = function () {
            var t = {
                    body: "body",
                    header: "#header",
                    evt: {
                        connect: {},
                        responsiveMgr: {
                            responsiveChange: "responsiveChange"
                        }
                    },
                    clickedTarget: null
                }, n = {
                    init: function () {
                        this.orientationchangeListener()
                    },
                    orientationchangeListener: function () {
                        e(i).on("orientationchange", function (t) {
                            e(i).trigger("resize")
                        })
                    }
                }, o = {
                    init: function () {
                        this.constants(), this.bindEvts(), this.defSetup()
                    },
                    constants: function () {
                        this.device = {
                            mobile: {
                                support: !0,
                                name: "mobile",
                                width: 768
                            },
                            tablet: {
                                support: !1,
                                name: "tablet",
                                width: 1280
                            },
                            gnb: {
                                support: !1,
                                name: "gnb",
                                width: 1024
                            },
                            desktop: {
                                support: !0,
                                name: "desktop"
                            }
                        }, this.evt = t.evt.responsiveMgr
                    },
                    bindEvts: function () {
                        this.resizeListener()
                    },
                    defSetup: function () {
                        this.responsiveChange()
                    },
                    resizeListener: function () {
                        var t = this;
                        e(i).on("resize", function () {
                            t.responsiveChange()
                        })
                    },
                    responsiveChange: function () {
                        var s, n = i.document,
                            o = i.innerWidth || n.documentElement.clientWidth || n.body.clientWidth;
                        if (this.device.mobile.support && o <= this.device.mobile.width) s = this.device.mobile.name;
                        else if (this.device.tablet.support && o <= this.device.tablet.width) s = this.device.tablet.name;
                        else if (this.device.gnb.support && o <= this.device.gnb.width) s = this.device.gnb.name;
                        else {
                            if (!this.device.desktop.support) return;
                            s = this.device.desktop.name
                        }
                        var r = {
                            responsiveName: ""
                        };
                        this.responsiveName ? this.responsiveName !== s && (this.responsiveName = s, r.responsiveName =
                            this.responsiveName, e(t.evt.connect).trigger(this.evt.responsiveChange, r)) : (this.responsiveName =
                            s, r.responsiveName = this.responsiveName, e(t.evt.connect).trigger(this.evt.responsiveChange,
                            r))
                    }
                }, r = e(t.header),
                a = {
                    init: function () {
                        this.constants(), this.setElmts(), this.bindEvts()
                    },
                    constants: function () {
                        this.delay = 100
                    },
                    setElmts: function () {
                        this.menus = r.find(".gb-gnb__drop-desktop").closest("li"), this.closeBtn = this.menus.find(
                            ".s-ico-close"), this.activeWrap = ""
                    },
                    bindEvts: function () {
                        this.responsiveListener(), this.menusActiveListener(), this.outsideAreaMouseleaveListener(),
                            this.closeBtnClickListener()
                    },
                    responsiveListener: function () {
                        e(t.evt.connect).on(t.evt.responsiveMgr.responsiveChange, e.proxy(this.destroy, this))
                    },
                    menusActiveListener: function () {
                        var i, s = this;
                        this.menus.on("mouseenter keydown", function (n) {
                            if (t.clickedTarget = null, "keydown" === n.type) {
                                var o = n.keyCode || n.which;
                                if (13 !== o) return
                            }
                            if (i = e(n.currentTarget), i.find(".gb-gnb__drop-desktop").is(":visible")) "keydown" === n
                                .type && (s.offLayer(void 0, this.delay), s.offAria(i));
                            else {
                                var r = s.menus.find(".gb-gnb__drop-desktop").is(":visible") ? 1 : s.delay;
                                s.offLayer(i, r), s.onLayer(i, r), s.onAria(i)
                            }
                        })
                    },
                    outsideAreaMouseleaveListener: function () {
                        var i = this;
                        this.menus.on("mouseleave", function (e) {
                            i.offLayer(), i.onAria()
                        })
                    },
                    closeBtnClickListener: function () {
                        var i = this;
                        this.closeBtn.on("click", function (t) {
                            i.offLayer(void 0, this.delay), i.offAria(), e(t.currentTarget).closest("li").find(
                                ".s-btn-toggler").focus()
                        })
                    },
                    onLayer: function (i, t) {
                        t = t || 1, i.find(".gb-gnb__drop-desktop").fadeIn({
                            duration: t,
                            complete: function () {
                                e(this).removeAttr("style").css("display", "block")
                            }
                        });
                        var s = this;
                        setTimeout(function () {
                            s.bindClickoutsideListener(i.closest("li"))
                        }, 50), this.activeWrap = this.getClassName(i)
                    },
                    offLayer: function (i, t) {
                        t = t || 1;
                        var s = i ? i.closest("li").siblings() : this.menus;
                        this.getClassName(s) !== this.activeWrap && e(this.activeWrap).find(".gb-gnb__drop-desktop").fadeOut(
                            t), s.find(".gb-gnb__drop-desktop").fadeOut({
                            duration: t,
                            complete: function () {
                                e(this).removeAttr("style").css("display", "none")
                            }
                        }), this.unbindClickoutsideListener()
                    },
                    onAria: function (i) {
                        this.menus.attr("aria-selected", !1), i && i.closest("li").attr("aria-selected", !0)
                    },
                    offAria: function () {
                        this.menus.attr("aria-selected", !1)
                    },
                    bindClickoutsideListener: function (i) {
                        i.on("clickoutside", e.proxy(this.clickoutside, this))
                    },
                    unbindClickoutsideListener: function () {
                        this.menus.off("clickoutside", e.proxy(this.clickoutside, this))
                    },
                    clickoutside: function (i) {
                        this.offLayer(), this.offAria()
                    },
                    destroy: function () {
                        this.offLayer(), this.offAria()
                    },
                    getClassName: function (i) {
                        return "." + i.parent().attr("class")
                    }
                }, c = {
                    init: function () {
                        this.setElmts(), this.bindEvts()
                    },
                    setElmts: function () {
                        this.menus = r.find(".gb-gnb__drop-desktop").closest("li").add(r.find(".gb-gnb__my-layer").closest(
                            "li")), this.search = r.find(
                            ".gb-gnb__search-aem .gb-gnb__search-bar, .gb-gnb__search .gb-gnb__search-bar"), this.cart =
                            r.find(".gb-gnb__cart .gb-gnb__cart-layer")
                    },
                    bindEvts: function () {
                        this.menusMouseenterListener()
                    },
                    menusMouseenterListener: function () {
                        var i = this;
                        this.menus.on("mouseenter", function (e) {
                            i.outersideTrigger()
                        })
                    },
                    outersideTrigger: function () {
                        (this.getSearchVisible() || this.getCartVisible()) && r.find(".gb-gnb__main").trigger("click")
                    },
                    getSearchVisible: function () {
                        return this.search.is(":visible")
                    },
                    getCartVisible: function () {
                        return this.cart.is(":visible")
                    }
                }, h = {
                    init: function () {
                        this.opts(), this.setElmt(), this.bindEvent()
                    },
                    opts: function () {
                        this.delay = 100
                    },
                    setElmt: function () {
                        this.toggler = r.find(".s-gnb-toggler"), this.layer = r.find(".gb-gnb__drop-mobile"), this.dimmed =
                            r.find(".gb-gnb__dimmed")
                    },
                    bindEvent: function () {
                        this.responsiveListener(), this.togglerClickListener()
                    },
                    responsiveListener: function () {
                        e(t.evt.connect).on(t.evt.responsiveMgr.responsiveChange, e.proxy(this.destroy, this))
                    },
                    togglerClickListener: function () {
                        var i = this;
                        this.toggler.on("click", function (e) {
                            i.layer.is(":visible") ? i.offDrilldown() : i.onDrilldown()
                        })
                    },
                    onDrilldown: function () {
                        g.reset(), this.onStatusAttr(), this.onDimmed(), this.onLayer()
                    },
                    offDrilldown: function (i) {
                        this.offLayer(i), this.offStatusAttr(), this.offDimmed()
                    },
                    onStatusAttr: function () {
                        e(t.body).addClass("gb-gnb-open")
                    },
                    offStatusAttr: function () {
                        e(t.body).removeClass("gb-gnb-open")
                    },
                    onLayer: function () {
                        var i = this;
                        this.layer.fadeIn({
                            duration: i.delay,
                            complete: function () {
                                i.fadeInComplete()
                            }
                        })
                    },
                    offLayer: function (i) {
                        var t = this,
                            s = i || this.delay;
                        1 === s ? this.layer.removeAttr("style").css("display", "none") : this.layer.fadeOut({
                            duration: s,
                            complete: function () {
                                var i = e(
                                    ".gb-gnb__search-aem .gb-gnb__search-bar, .gb-gnb__search .gb-gnb__search-bar").is(
                                    ":visible"),
                                    s = e(".gb-gnb__cart .gb-gnb__cart-layer").is(":visible");
                                i || s || t.toggler.focus()
                            }
                        })
                    },
                    onDimmed: function () {
                        this.dimmed.css("display", "block")
                    },
                    offDimmed: function () {
                        this.dimmed.css("display", "none")
                    },
                    fadeInComplete: function (i) {
                        this.layer.find(".s-depth1-link").eq(0).focus(), this.bindClickoutsideListener()
                    },
                    bindClickoutsideListener: function () {
                        this.layer.on("clickoutside", e.proxy(this.onClickOutside, this))
                    },
                    unbindClickoutsideListener: function () {
                        this.layer.off("clickoutside", e.proxy(this.onClickOutside, this))
                    },
                    onClickOutside: function (i) {
                        var t = e(i.target);
                        t.hasClass("gb-gnb__dimmed") || t.hasClass("lightbox-skrim") || (this.offDrilldown(1), this.unbindClickoutsideListener())
                    },
                    onCloseCallback: function () {
                        this.onClickOutside()
                    },
                    destroy: function () {
                        this.unbindClickoutsideListener(), this.offDrilldown(1)
                    }
                }, l = {
                    isMobile: function () {
                        return !!("ontouchstart" in i || i.DocumentTouch && doc instanceof i.DocumentTouch)
                    }(),
                    init: function () {
                        this.opts(), this.setElements(), this.bindEventHandlers()
                    },
                    opts: function () {
                        this.delay = 100
                    },
                    setElements: function () {
                        this.menuWrap = r.find(".gb-gnb__bar .gb-gnb__my-layer").closest("li"), this.menuLayer = r.find(
                            ".gb-gnb__my-layer"), this.loginBtns = r.find(".s-btn-login, a.s-login"), this.dimContainer =
                            e("#dimContainer"), this.name = "myMenu"
                    },
                    bindEventHandlers: function () {
                        this.menuWrap.on("mouseenter mouseleave", e.proxy(this.onMouseLayer, this)), this.menuWrap.on(
                            "click", ".s-btn-utility", e.proxy(this.onKeyboardLayer, this)), this.loginBtns.length &&
                        this.loginBtns.on("click.gnbCloseLayers", e.proxy(this.onLoginCloseLayers, this)), this.responsiveListener()
                    },
                    responsiveListener: function () {
                        e(t.evt.connect).on(t.evt.responsiveMgr.responsiveChange, e.proxy(this.onClickOutside, this))
                    },
                    onMouseLayer: function (i) {
                        if (!this.isMobile) {
                            var e = this;
                            t.clickedTarget = this.name, "mouseenter" == i.type ? (this.mouseEnterType = !0, this.menuLayer
                                .stop().fadeIn(e.delay)) : "mouseleave" == i.type && (this.mouseEnterType = !1, this.menuLayer
                                .stop().fadeOut(e.delay))
                        }
                    },
                    onKeyboardLayer: function (i) {
                        if (!this.mouseEnterType) {
                            var s = this;
                            t.clickedTarget = this.name, this.menuLayer.is(":visible") ? (this.offAria(), this.menuLayer
                                .stop().fadeOut(s.delay), this.menuWrap.off("clickoutside", e.proxy(this.onClickOutside,
                                this))) : (this.onAria(), this.menuLayer.stop().fadeIn(s.delay), this.menuWrap.on(
                                "clickoutside", e.proxy(this.onClickOutside, this)))
                        }
                    },
                    onLoginCloseLayers: function (i) {
                        this.dimContainer.on("click.gnbCloseLayersdim", e.proxy(this.onLoginCloseLayerDim, this)), u.offAria(),
                            u.offLayer(), d.offAria(), d.offLayer()
                    },
                    onLoginCloseLayerDim: function (i) {
                        this.dimContainer.off("click.gnbCloseLayersdim", e.proxy(this.onLoginCloseLayerDim, this)),
                            this.onLoginCloseLayers(), this.loginBtns.focus()
                    },
                    onClickOutside: function (i) {
                        var s = this,
                            n = e(i.currentTarget);
                        this.offAria(), this.menuLayer.stop().fadeOut(s.delay), n.off("clickoutside", e.proxy(this.onClickOutside,
                            this)), this.name == t.clickedTarget && this.loginBtns.focus()
                    },
                    onAria: function () {
                        this.menuWrap.find(".s-btn-utility").attr("aria-expanded", !0)
                    },
                    offAria: function () {
                        this.menuWrap.find(".s-btn-utility").attr("aria-expanded", !1)
                    }
                }, u = {
                    init: function () {
                        this.opts(), this.setElements(), this.bindEventHandlers()
                    },
                    opts: function () {
                        this.delay = 100
                    },
                    setElements: function () {
                        this.menuWrap = r.find(".gb-gnb__bar .s-ico-cart").closest("button").add(r.find(
                            ".gb-gnb__bar .s-ico-cart-empty").closest("button")), this.menuLayer = r.find(
                            ".gb-gnb__cart-layer"), this.ssCartLi = e("#ss_cart"), this.name = "myCart", this.menuWrap.addClass(
                            "js-check-ready"), this.p4CartClose = this.ssCartLi.find(".cart-close")
                    },
                    bindEventHandlers: function () {
                        this.responsiveListener(), this.menuWrapClickListener()
                    },
                    responsiveListener: function () {
                        e(t.evt.connect).on(t.evt.responsiveMgr.responsiveChange, e.proxy(this.destroy, this))
                    },
                    menuWrapClickListener: function () {
                        var i = this;
                        this.menuWrap.on("click", function (e) {
                            t.clickedTarget = i.name, i.menuLayer.is(":visible") ? i.offDisplay() : i.onDisplay()
                        })
                    },
                    onLayer: function () {
                        this.menuLayer.stop().fadeIn(this.delay)
                    },
                    offLayer: function (i) {
                        i = i || this.delay, this.menuLayer.stop().fadeOut(i), this.ssCartLi.removeClass("on")
                    },
                    onDisplay: function () {
                        this.onLayer(), this.onAria();
                        var i = this;
                        setTimeout(function () {
                            i.bindClickOutsideListener()
                        }, 50)
                    },
                    offDisplay: function (i) {
                        i = i || this.delay, this.offLayer(i), this.offAria(), this.unbindClickOutsideListener(), this.name ==
                        t.clickedTarget && (t.clickedTarget = ""), this.p4CartClose.length && this.p4CartClose.is(
                            ":focus") && this.menuWrap.focus()
                    },
                    onAria: function () {
                        this.menuWrap.attr("aria-expanded", !0)
                    },
                    offAria: function () {
                        this.menuWrap.attr("aria-expanded", !1)
                    },
                    onCloseCallback: function () {
                        this.offDisplay()
                    },
                    onClickOutside: function () {
                        this.offDisplay()
                    },
                    bindClickOutsideListener: function () {
                        this.menuLayer.closest("li").on("clickoutside", e.proxy(this.onClickOutside, this))
                    },
                    unbindClickOutsideListener: function () {
                        this.menuLayer.closest("li").off("clickoutside", e.proxy(this.onClickOutside, this))
                    },
                    destroy: function () {
                        this.offDisplay(1)
                    }
                }, d = {
                    init: function () {
                        this.opts(), this.setElements(), this.bindEventHandlers(), this.removeAutocompelteStyle()
                    },
                    opts: function () {
                        this.delay = 0
                    },
                    setElements: function () {
                        this.wrap = r.find(".gb-gnb__search-aem, .gb-gnb__search"), this.bar = this.wrap.find(
                            ".gb-gnb__search-bar"), this.suggest = this.wrap.find(".gb-gnb__search-suggest"), this.searchBtn =
                            r.find(".js-ico-search"), this.closeBtn = this.wrap.find(".s-ico-close"), this.inputArea =
                            this.wrap.find("#inp_srch"), this.name = "gnbSearch"
                    },
                    bindEventHandlers: function () {
                        this.responsiveListener(), this.searchBtnClickListener(), this.closeBtnClickListener()
                    },
                    responsiveListener: function () {
                        e(t.evt.connect).on(t.evt.responsiveMgr.responsiveChange, e.proxy(this.destroy, this))
                    },
                    searchBtnClickListener: function () {
                        var i = this;
                        this.searchBtn.on("click", function (e) {
                            t.clickedTarget = i.name, "block" == i.wrap.css("display") ? (i.offLayer(), i.offAria()) :
                                (i.onLayer(), i.onAria())
                        })
                    },
                    closeBtnClickListener: function () {
                        this.closeBtn.on("click", e.proxy(this.offLayer, this))
                    },
                    onLayer: function () {
                        var i = this;
                        this.wrap.stop().show({
                            duration: i.delay,
                            complete: function () {
                                setTimeout(function () {
                                    i.bindClickoutsideListener()
                                }, 50)
                            }
                        })
                    },
                    offLayer: function () {
                        var i = this;
                        i.closeBtn.is(":focus") && i.searchBtn.focus(), this.wrap.stop().hide({
                            duration: i.delay,
                            complete: function () {
                                i.inputArea.val(""), i.suggest.hide(), i.name == t.clickedTarget && (t.clickedTarget =
                                    ""), i.unbindClickoutsideListener()
                            }
                        })
                    },
                    onAria: function () {
                        this.searchBtn.attr("aria-expanded", !0)
                    },
                    offAria: function () {
                        this.searchBtn.attr("aria-expanded", !1)
                    },
                    bindClickoutsideListener: function () {
                        this.wrap.on("clickoutside", e.proxy(this.onClickOutside, this))
                    },
                    unbindClickoutsideListener: function () {
                        this.wrap.off("clickoutside", e.proxy(this.onClickOutside, this))
                    },
                    onClickOutside: function () {
                        this.offLayer(), this.offAria()
                    },
                    destroy: function () {
                        this.wrap.trigger("clickoutside")
                    },
                    removeAutocompelteStyle: function () {
                        this.wrap.find(".auto-complete").removeClass("auto-complete")
                    }
                }, f = {
                    init: function () {
                        this.opts(), this.setElements(), this.bindResizeHandlers()
                    },
                    opts: function () {
                        this.utils = i.smg.aem.util, this.responsiveType = this.utils.winSize().w <= s.RESPONSIVE.MOBILE
                            .WIDTH
                    },
                    setElements: function () {
                        this.header = e("#header"), this.ckBarWrap = this.header.find(".cookie-notice"), this.ckBarClose =
                            this.ckBarWrap.find(".cookie-notice__btn-close"), this.gnbWrap = this.header.find(".gb-gnb")
                    },
                    bindResizeHandlers: function () {
                        e(i).on("resize", e.proxy(this.onResizeBrowser, this)), this.ckBarClose.on("click", e.proxy(
                            this.onCkbarClose, this)), this.onResizeBrowser()
                    },
                    unBindResizeHandlers: function () {
                        e(i).off("resize", e.proxy(this.onResizeBrowser, this))
                    },
                    onResizeBrowser: function () {
                        this.ckBarHeight = this.ckBarWrap.outerHeight(!0), this.utils.winSize().w <= s.RESPONSIVE.MOBILE
                            .WIDTH ? this.responsiveType && (this.responsiveType = !1) : (this.gnbWrap.css("top", ""),
                        this.responsiveType || (this.responsiveType = !0))
                    },
                    onCkbarClose: function (i) {
                        i.preventDefault();
                        var t = this;
                        this.utils.winSize().w <= s.RESPONSIVE.MOBILE.WIDTH && "absolute" == this.gnbWrap.css(
                            "position") && this.ckBarWrap.is(":visible") && this.gnbWrap.css({
                            position: "relative",
                            top: "",
                            height: "100%"
                        }), e.when(this.ckBarWrap.animate({
                            marginTop: -t.ckBarHeight
                        })).done(function () {
                            t.ckBarWrap.hide(), t.utils.winSize().w <= s.RESPONSIVE.MOBILE.WIDTH && (t.gnbWrap.css({
                                position: "",
                                top: "",
                                height: ""
                            }), t.unBindResizeHandlers()), Waypoint.refreshAll()
                        })
                    }
                }, p = {
                    init: function () {
                        this.setElmts(), this.stateInstance(), this.bindEvts()
                    },
                    stateInstance: function () {
                        this.scrollTop = 0, this.defHeight = this.layer.outerHeight(), this.wrapHeight = this.defHeight
                    },
                    setStateValue: function (t) {
                        this.wrapHeight = e(i).height(), (t || "function" == typeof t) && t()
                    },
                    setElmts: function () {
                        this.header = r, this.layer = r.find(".gb-gnb__drop-mobile")
                    },
                    bindEvts: function () {
                        this.responsiveListener(), this.headerClickListener(), this.scrollListener(), o.responsiveName ===
                        o.device.mobile.name && this.resizeListener()
                    },
                    responsiveListener: function () {
                        e(t.evt.connect).on(t.evt.responsiveMgr.responsiveChange, e.proxy(this.responsiveBindEventHandlers,
                            this))
                    },
                    headerClickListener: function () {
                        this.header.on("click", e.proxy(this.resizeHeight, this))
                    },
                    responsiveBindEventHandlers: function (i, e) {
                        e.responsiveName === o.device.mobile.name ? this.resizeListener() : this.unbindResizeListener()
                    },
                    resizeListener: function () {
                        e(i).on("resize", e.proxy(this.resizeListenerImpl, this))
                    },
                    resizeListenerImpl: function (i) {
                        this.layer.is(":visible") && this.resizeHeight()
                    },
                    unbindResizeListener: function () {
                        e(i).off("resize", e.proxy(this.resizeListenerImpl, this))
                    },
                    scrollListener: function () {
                        var t = this;
                        e(i).on("scroll", function () {
                            t.scrollTop = e(this).scrollTop()
                        })
                    },
                    resizeHeight: function () {
                        this.resultHeight = e(i).height() - this.layer.offset().top, this.layer.css("min-height", this.resultHeight)
                    }
                }, g = function () {
                    var i = {
                        wrap: ".drilldown"
                    }, t = {
                        speed: 1
                    };
                    e(i.wrap).drilldown(t);
                    var s = function () {
                        e(i.wrap).drilldown(t)
                    }, n = function () {
                        e(i.wrap).drilldown("reset")
                    }, o = function () {
                        e(i.wrap).drilldown("destroy")
                    };
                    return {
                        init: s,
                        reset: n,
                        destroy: o
                    }
                }(),
                m = function (i) {
                    (this.container = i).size() && (n.init(), o.init(), a.init(), l.init(), h.init(), p.init(), f.init(),
                        c.init(), u.init(), d.init())
                }, b = function (i) {
                    if (u.ssCartLi.size()) {
                        var e = {
                            empty: "s-ico-cart-empty",
                            exist: "s-ico-cart"
                        }, t = u.menuWrap.find("> span:eq(0)");
                        i ? t.removeClass(e.exist).addClass(e.empty) : t.removeClass(e.empty).addClass(e.exist)
                    }
                };
            return {
                init: m,
                changeCartState: b
            }
        }(), e(function () {
            e(".gb-gnb").length && t.gnb.init(e("body"))
        })
    }
}(window, jQuery);