(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{IE1Z:function(e,n,t){},JTLP:function(e,n,t){"use strict";var i=t("IE1Z");t.n(i).a},LrTV:function(e,n,t){"use strict";t.r(n);var i={name:"Debounce",data:function(){return{n:1}},mounted:function(){this.$refs.debounce.addEventListener("mousemove",this.debounce(this.sum,1e3))},methods:{debounce:function(e,n){var t=void 0;return function(){var i=this;clearTimeout(t),t=setTimeout(function(){e.apply(i)},n)}},sum:function(){this.n+=1}}},u=(t("JTLP"),t("KHd+")),o=Object(u.a)(i,function(){var e=this.$createElement,n=this._self._c||e;return n("div",[n("div",{ref:"debounce",staticClass:"debounce"},[n("h2",[this._v(this._s(this.n))])])])},[],!1,null,"5c5ef55c",null);o.options.__file="Debounce.vue";n.default=o.exports}}]);