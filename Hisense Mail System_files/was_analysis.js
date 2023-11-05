var _paq = window._paq || [];

_paq.push([ "trackPageView" ]), _paq.push([ "enableLinkTracking" ]), window._handleTackPageView = function(e) {
e = e || "", window.CM && !e && (e = window.CM.config.user.uid.split("@")[0]), _paq.push([ "setCustomUrl", location.href ]), 
_paq.push([ "setDocumentTitle", document.title ]), e && _paq.push([ "setUserId", e ]), _paq.push([ "trackPageView" ]);
}, window.onload = function() {
var e = "https:" === document.location.protocol ? "https://was-gtw.hisense.com/" :"http://was-gtw.hisense.com/";
_paq.push([ "setTrackerUrl", e + "data/api/collectData/1.gif" ]), _paq.push([ "setSiteId", "77" ]);
var t = document, a = t.createElement("script"), s = t.getElementsByTagName("script")[0];
a.type = "text/javascript", a.async = !0, a.defer = !0, a.src = e + "file/was-js-file.js", s.parentNode.insertBefore(a, s);
};
//# sourceMappingURL=was_analysis.js.map