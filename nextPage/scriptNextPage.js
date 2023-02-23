var hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", function () {
    var elm = document.getElementsByClassName("sidebar")[0];
    var currentVal = window.getComputedStyle(elm, null).getPropertyValue('left');
    if (currentVal == '0px' || currentVal == '') {
        elm.style.left = "-225px"
    } else {
        elm.style.left = "0px"
    }
});
var siteURL = '//timesprayer.com';
var language = 'en';
var city_offset = "3";
var reminingtime = 2396000;
var soundfile = "reqiular";
var douration_sound = "243";
var clean_url = 'timesprayer.com';
var base_url = 'timesprayer.com/en';
var city_url = 'qatif';

function appJs(jsFile) {
    var element = document.createElement("script");
    element.src = jsFile;
    document.body.appendChild(element)
};

function afterLoad() {
    document.getElementById("sharebuttons").style.display = "block";
    appJs("//timesprayer.com/js/ptimer.js");
    setTimeout(function downloadJs() {
        appJs(
            "https://maps.googleapis.com/maps/api/js?key=AIzaSyC9IneXdwfkqK4UbkZ_OZ_S0gDtfj9Ux0w&language=en");
        appJs("//timesprayer.com/js/search.1.2.3.js");
        var element = document.createElement("script");
        element.async = true;
        element.src = "//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
        document.body.appendChild(element);
        (adsbygoogle = window.adsbygoogle || []).push({
            google_ad_client: "ca-pub-9184638470810001",
            enable_page_level_ads: true
        })
    }, 2000)
}
if (window.addEventListener) window.addEventListener("load", afterLoad, false);
else if (window.attachEvent) window.attachEvent("onload", afterLoad);
else window.onload = afterLoad;
(function (i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r;
    i[r] = i[r] || function () {
        (i[r].q = i[r].q || []).push(arguments)
    }, i[r].l = 1 * new Date();
    a = s.createElement(o), m = s.getElementsByTagName(o)[0];
    a.async = 1;
    a.src = g;
    m.parentNode.insertBefore(a, m)
})(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');
ga('create', 'UA-51636779-1', 'timesprayer.com');
ga('send', 'pageview');