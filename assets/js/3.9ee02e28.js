(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{328:function(t,e,i){},333:function(t,e,i){},357:function(t,e,i){"use strict";i(328)},362:function(t,e,i){"use strict";i(333)},374:function(t,e,i){"use strict";i(347);var a=i(349),n=i(373),s=i(376),o=i(341);function l(t,e){return t.ownerDocument.defaultView.getComputedStyle(t,null)[e]}var r={name:"Navbar",components:{SidebarButton:s.a,NavLinks:o.a,SearchBox:n.a,AlgoliaSearchBox:a.a},data:function(){return{linksWrapMaxWidth:null}},computed:{algolia:function(){return this.$themeLocaleConfig.algolia||this.$site.themeConfig.algolia||{}},isAlgoliaSearch:function(){return this.algolia&&this.algolia.apiKey&&this.algolia.indexName}},mounted:function(){var t=this,e=parseInt(l(this.$el,"paddingLeft"))+parseInt(l(this.$el,"paddingRight")),i=function(){document.documentElement.clientWidth<719?t.linksWrapMaxWidth=null:t.linksWrapMaxWidth=t.$el.offsetWidth-e-(t.$refs.siteName&&t.$refs.siteName.offsetWidth||0)};i(),window.addEventListener("resize",i,!1)}},c=(i(357),i(25)),h=Object(c.a)(r,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("header",{staticClass:"navbar"},[i("SidebarButton",{on:{"toggle-sidebar":function(e){return t.$emit("toggle-sidebar")}}}),t._v(" "),i("RouterLink",{staticClass:"home-link",attrs:{to:t.$localePath}},[t.$site.themeConfig.logo&&!1!==t.$page.frontmatter.logo?i("img",{staticClass:"logo",attrs:{src:t.$withBase(t.$site.themeConfig.logo),alt:t.$siteTitle}}):t._e(),t._v(" "),t.$siteTitle?i("span",{ref:"siteName",staticClass:"site-name",class:{"can-hide":t.$site.themeConfig.logo}},[t._v(t._s(t.$siteTitle))]):t._e()]),t._v(" "),i("div",{staticClass:"links",style:t.linksWrapMaxWidth?{"max-width":t.linksWrapMaxWidth+"px"}:{}},[t.isAlgoliaSearch?i("AlgoliaSearchBox",{attrs:{options:t.algolia}}):!1!==t.$site.themeConfig.search&&!1!==t.$page.frontmatter.search?i("SearchBox"):t._e(),t._v(" "),i("NavLinks",{staticClass:"can-hide"})],1)],1)}),[],!1,null,null,null);e.a=h.exports},375:function(t,e,i){"use strict";var a={components:{Page:i(372).a}},n=(i(362),i(25)),s=Object(n.a)(a,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("Page",this._b({},"Page",this.$attrs,!1)),this._v(" "),e("footer",{staticClass:"page-footer"},[this._v("\n    MIT Licensed | Copyright © 2018-present Sanic Community Organization\n  ")])],1)}),[],!1,null,null,null);e.a=s.exports}}]);