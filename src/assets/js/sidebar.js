!(function (s) {
    "use strict";
    s("#side-menu").metisMenu(),
        s("#vertical-menu-btn").on("click", function (e) {
            e.preventDefault(), s("body").toggleClass("sidebar-enable vertical-collpsed");
        }),
        s("#sidebar-menu a").each(function () {
            var e = window.location.href.split(/[?#]/)[0];
            this.href == e &&
                (s(this).addClass("active"),
                s(this).parent().addClass("mm-active"),
                s(this).parent().parent().addClass("mm-show"),
                s(this).parent().parent().prev().addClass("mm-active"),
                s(this).parent().parent().parent().addClass("mm-active"),
                s(this).parent().parent().parent().parent().addClass("mm-show"),
                s(this).parent().parent().parent().parent().parent().addClass("mm-active"));
        }),
        s(document).ready(function () {
            var e;
            0 < s("#sidebar-menu").length &&
                0 < s("#sidebar-menu .mm-active .active").length &&
                300 < (e = s("#sidebar-menu .mm-active .active").offset().top) &&
                ((e -= 300), s(".vertical-menu .simplebar-content-wrapper").animate({ scrollTop: e }, "slow"));
        }),
        s(".navbar-nav a").each(function () {
            var e = window.location.href.split(/[?#]/)[0];
            this.href == e &&
                (s(this).addClass("active"),
                s(this).parent().addClass("active"),
                s(this).parent().parent().addClass("active"),
                s(this).parent().parent().parent().addClass("active"),
                s(this).parent().parent().parent().parent().addClass("active"),
                s(this).parent().parent().parent().parent().parent().addClass("active"),
                s(this).parent().parent().parent().parent().parent().parent().addClass("active"));
        });
})(jQuery);
