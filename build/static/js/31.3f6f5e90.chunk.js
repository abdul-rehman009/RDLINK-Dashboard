(this["webpackJsonprdlink-admin-dashboard"]=this["webpackJsonprdlink-admin-dashboard"]||[]).push([[31],{1850:function(e,t,a){"use strict";a.r(t);var s=a(13),c=a(1),r=a(571),n=(a(996),a(61)),i=a.n(n),l=(a(587),a(456)),o=a(457),d=a(458),u=a(462),p=a(460),b=a(459),j=a(1141),m=a(451),O=(a(811),a(6)),g=function(e){var t=e.sidebarOpen,a=Object(r.a)(),c=Object(s.a)(a,2);c[0],c[1];return Object(O.jsx)("div",{className:"sidebar-detached sidebar-left",children:Object(O.jsx)("div",{className:"sidebar",children:Object(O.jsxs)("div",{className:i()("sidebar-shop",{show:t}),children:[Object(O.jsx)(l.a,{children:Object(O.jsx)(o.a,{sm:"12",children:Object(O.jsx)("h4",{className:"filter-heading d-none d-lg-block",children:"All Brands"})})}),Object(O.jsxs)(d.a,{children:[Object(O.jsx)(u.a,{children:Object(O.jsx)(p.a,{children:"Brand Filters"})}),Object(O.jsxs)(b.a,{children:[Object(O.jsx)("div",{className:"brands",children:Object(O.jsx)("ul",{className:"list-unstyled brand-list",children:[{title:"All",checked:!0},{title:"Sustainably Sourced or Produced"},{title:"Social Mission Driven"},{title:"Certified BCorp"},{title:"Women Owned/Female Founded"},{title:"BIPOC Owned"},{title:"Organic"},{title:"Special Diet - vegan"},{title:"Low Carb"},{title:"Low Sugar"},{title:"Allergen friendly"},{title:"Gluten free"},{title:"Dairy free"},{title:"Nut free"},{title:"Kosher"},{title:"Category - hydration"},{title:"Snack"},{title:"Breakfast"},{title:"Single ingredient food"}].map((function(e){return Object(O.jsxs)("li",{children:[Object(O.jsx)(j.a,{type:"checkbox",id:e.title,label:e.title,defaultChecked:e.checked}),Object(O.jsx)("span",{children:e.total})]},e.title)}))})}),Object(O.jsx)("div",{id:"clear-filters",children:Object(O.jsx)(m.a.Ripple,{color:"primary",block:!0,children:"Clear All Filters"})})]})]})]})})})},h=a(0),f=a(453),v=a(1245),N=a(1172),x=a(461),y=function(e){e.store;var t=e.products,a=e.activeView;e.addToCart,e.dispatch,e.getProducts,e.getCartItems,e.addToWishlist,e.deleteWishlistItem;return Object(O.jsx)("div",{className:i()({"grid-view":"grid"===a,"list-view":"list"===a}),children:function(){if(t.length)return t.map((function(e){e.isInCart&&f.b;return Object(O.jsxs)(d.a,{className:"ecommerce-card",children:[Object(O.jsx)("div",{className:"item-img text-center mx-auto",children:Object(O.jsx)(f.b,{to:"#",children:Object(O.jsx)("img",{className:"img-fluid card-img-top",src:e.image,alt:e.name})})}),Object(O.jsxs)(b.a,{children:[Object(O.jsx)("h6",{className:"item-name",children:Object(O.jsx)(f.b,{className:"text-body",to:"#",children:e.name})}),Object(O.jsx)(x.a,{className:"item-description",children:e.description})]}),Object(O.jsxs)("div",{className:"item-options text-center",children:[Object(O.jsxs)(m.a,{className:"btn-wishlist",color:"light",children:[Object(O.jsx)(v.a,{className:i()("mr-50",{"text-danger":e.isInWishlist}),size:14}),Object(O.jsx)("span",{children:"Wishlist"})]}),Object(O.jsxs)(m.a,{tag:f.b,to:"#",color:"primary",className:"btn-cart move-cart",children:[Object(O.jsx)(N.a,{className:"mr-50",size:14}),Object(O.jsx)("span",{children:"View Profile"})]})]})]},e.name)}))}()})},T=a(543),C=a(1440),P=a(1158),M=a(1168),w=function(e){e.activeView,e.setActiveView;var t=e.dispatch,a=e.getProducts,s=e.store;e.setSidebarOpen;return Object(O.jsx)("div",{className:"ecommerce-header",children:Object(O.jsx)(l.a,{children:Object(O.jsx)(o.a,{sm:"12",children:Object(O.jsx)("div",{className:"ecommerce-header-items",children:Object(O.jsx)("div",{className:"view-options d-flex ml-auto",children:Object(O.jsxs)(T.a,{className:"dropdown-sort",children:[Object(O.jsx)(C.a,{className:"text-capitalize",color:"primary",outline:!0,caret:!0,children:{"price-desc":"Highest","price-asc":"Lowest",featured:"New"}[s.params.sortBy]}),Object(O.jsxs)(P.a,{children:[Object(O.jsx)(M.a,{className:"w-100",onClick:function(){return t(a(Object(h.a)(Object(h.a)({},s.params),{},{sortBy:"featured"})))},children:"New"}),Object(O.jsx)(M.a,{className:"w-100",onClick:function(){return t(a(Object(h.a)(Object(h.a)({},s.params),{},{sortBy:"price-asc"})))},children:"Lowest"}),Object(O.jsx)(M.a,{className:"w-100",onClick:function(){return t(a(Object(h.a)(Object(h.a)({},s.params),{},{sortBy:"price-desc"})))},children:"Highest"})]})]})})})})})})},E=a(1182),k=a(481),I=a(471),S=a(482),D=a(467),A=function(e){var t=e.dispatch,a=e.getProducts,s=e.store;return Object(O.jsx)("div",{id:"ecommerce-searchbar",className:"ecommerce-searchbar",children:Object(O.jsx)(l.a,{className:"mt-2",children:Object(O.jsx)(o.a,{sm:"12",children:Object(O.jsxs)(k.a,{className:"input-group-merge",children:[Object(O.jsx)(I.a,{className:"search-product",placeholder:"Search Product",onChange:function(e){return t(a(Object(h.a)(Object(h.a)({},s.params),{},{q:e.target.value})))}}),Object(O.jsx)(S.a,{addonType:"append",children:Object(O.jsx)(D.a,{children:Object(O.jsx)(E.a,{className:"text-muted",size:14})})})]})})})})},R=a(720),W=a(721),_=a(722),V=function(e){var t=e.activeView,a=e.setActiveView,s=e.store,r=e.sidebarOpen,n=e.getProducts,l=e.dispatch,o=e.addToCart,d=e.addToWishlist,u=e.getCartItems,p=e.deleteWishlistItem,b=e.deleteCartItem,j=e.setSidebarOpen,m=function(e){l(n("next"===e?Object(h.a)(Object(h.a)({},s.params),{},{page:s.params.page+1}):"prev"===e?Object(h.a)(Object(h.a)({},s.params),{},{page:s.params.page-1}):Object(h.a)(Object(h.a)({},s.params),{},{page:e})))};return Object(O.jsx)("div",{className:"content-detached content-right",children:Object(O.jsxs)("div",{className:"content-body",children:[Object(O.jsx)(w,{store:s,dispatch:l,activeView:t,getProducts:n,setActiveView:a,setSidebarOpen:j}),Object(O.jsx)("div",{className:i()("body-content-overlay",{show:r}),onClick:function(){return j(!1)}}),Object(O.jsx)(A,{dispatch:l,getProducts:n,store:s}),s.products.length?Object(O.jsxs)(c.Fragment,{children:[Object(O.jsx)(y,{store:s,dispatch:l,addToCart:o,activeView:t,products:s.products,getProducts:n,getCartItems:u,addToWishlist:d,deleteCartItem:b,deleteWishlistItem:p}),Object(O.jsxs)(_.a,{className:"d-flex justify-content-center",children:[Object(O.jsx)(R.a,{disabled:1===s.params.page,className:"prev-item",onClick:function(){return 1!==s.params.page?m("prev"):null},children:Object(O.jsx)(W.a,{href:"/",onClick:function(e){return e.preventDefault()}})}),function(){var e=0!==s.totalProducts&&0!==s.products.length?Number(s.totalProducts)/s.products.length:3;return new Array(Math.trunc(e)).fill().map((function(e,t){return Object(O.jsx)(R.a,{active:s.params.page===t+1,onClick:function(){return m(t+1)},children:Object(O.jsx)(W.a,{href:"/",onClick:function(e){return e.preventDefault()},children:t+1})},t)}))}(),Object(O.jsx)(R.a,{className:"next-item",onClick:function(){s.params.page!==Number(s.totalProducts)/s.products.length&&m("next")},disabled:s.params.page===Number(s.totalProducts)/s.products.length,children:Object(O.jsx)(W.a,{href:"/",onClick:function(e){return e.preventDefault()}})})]})]}):Object(O.jsx)("div",{className:"d-flex justify-content-center mt-2",children:Object(O.jsx)("p",{children:"No Results"})})]})})},z=(a(454),a(123)),B=a(724);a(588),t.default=function(){var e=Object(c.useState)("grid"),t=Object(s.a)(e,2),a=t[0],r=t[1],n=Object(c.useState)(!1),i=Object(s.a)(n,2),l=i[0],o=i[1],d=Object(z.b)(),u=Object(z.c)((function(e){return e.ecommerce}));return Object(c.useEffect)((function(){d(Object(B.g)({q:"",sortBy:"featured",perPage:9,page:1}))}),[d]),Object(O.jsxs)(c.Fragment,{children:[Object(O.jsx)(V,{store:u,dispatch:d,addToCart:B.a,activeView:a,getProducts:B.g,sidebarOpen:l,getCartItems:B.e,setActiveView:r,addToWishlist:B.b,setSidebarOpen:o,deleteCartItem:B.c,deleteWishlistItem:B.d}),Object(O.jsx)(g,{sidebarOpen:l})]})}},454:function(e,t,a){"use strict";var s=a(453),c=a(464),r=a(465),n=a(6);t.a=function(e){var t=e.breadCrumbTitle,a=e.breadCrumbParent,i=e.breadCrumbParent2,l=e.breadCrumbParent3,o=e.breadCrumbActive;return Object(n.jsx)("div",{className:"content-header row",children:Object(n.jsx)("div",{className:"content-header-left col-md-9 col-12 mb-2",children:Object(n.jsx)("div",{className:"row breadcrumbs-top",children:Object(n.jsxs)("div",{className:"col-12",children:[t?Object(n.jsx)("h2",{className:"content-header-title float-left mb-0",children:t}):"",Object(n.jsx)("div",{className:"breadcrumb-wrapper vs-breadcrumbs d-sm-block d-none col-12",children:Object(n.jsxs)(c.a,{children:[Object(n.jsx)(r.a,{tag:"li",children:Object(n.jsx)(s.b,{to:"/",children:"Home"})}),Object(n.jsx)(r.a,{tag:"li",className:"text-primary",children:a}),i?Object(n.jsx)(r.a,{tag:"li",className:"text-primary",children:i}):"",l?Object(n.jsx)(r.a,{tag:"li",className:"text-primary",children:l}):"",Object(n.jsx)(r.a,{tag:"li",active:!0,children:o})]})})]})})})})}},460:function(e,t,a){"use strict";var s=a(19),c=a(23),r=a(1),n=a.n(r),i=a(5),l=a.n(i),o=a(61),d=a.n(o),u=a(84),p={tag:u.tagPropType,className:l.a.string,cssModule:l.a.object},b=function(e){var t=e.className,a=e.cssModule,r=e.tag,i=Object(c.a)(e,["className","cssModule","tag"]),l=Object(u.mapToCssModules)(d()(t,"card-title"),a);return n.a.createElement(r,Object(s.a)({},i,{className:l}))};b.propTypes=p,b.defaultProps={tag:"div"},t.a=b},461:function(e,t,a){"use strict";var s=a(19),c=a(23),r=a(1),n=a.n(r),i=a(5),l=a.n(i),o=a(61),d=a.n(o),u=a(84),p={tag:u.tagPropType,className:l.a.string,cssModule:l.a.object},b=function(e){var t=e.className,a=e.cssModule,r=e.tag,i=Object(c.a)(e,["className","cssModule","tag"]),l=Object(u.mapToCssModules)(d()(t,"card-text"),a);return n.a.createElement(r,Object(s.a)({},i,{className:l}))};b.propTypes=p,b.defaultProps={tag:"p"},t.a=b},462:function(e,t,a){"use strict";var s=a(19),c=a(23),r=a(1),n=a.n(r),i=a(5),l=a.n(i),o=a(61),d=a.n(o),u=a(84),p={tag:u.tagPropType,className:l.a.string,cssModule:l.a.object},b=function(e){var t=e.className,a=e.cssModule,r=e.tag,i=Object(c.a)(e,["className","cssModule","tag"]),l=Object(u.mapToCssModules)(d()(t,"card-header"),a);return n.a.createElement(r,Object(s.a)({},i,{className:l}))};b.propTypes=p,b.defaultProps={tag:"div"},t.a=b},464:function(e,t,a){"use strict";var s=a(19),c=a(23),r=a(1),n=a.n(r),i=a(5),l=a.n(i),o=a(61),d=a.n(o),u=a(84),p={tag:u.tagPropType,listTag:u.tagPropType,className:l.a.string,listClassName:l.a.string,cssModule:l.a.object,children:l.a.node,"aria-label":l.a.string},b=function(e){var t=e.className,a=e.listClassName,r=e.cssModule,i=e.children,l=e.tag,o=e.listTag,p=e["aria-label"],b=Object(c.a)(e,["className","listClassName","cssModule","children","tag","listTag","aria-label"]),j=Object(u.mapToCssModules)(d()(t),r),m=Object(u.mapToCssModules)(d()("breadcrumb",a),r);return n.a.createElement(l,Object(s.a)({},b,{className:j,"aria-label":p}),n.a.createElement(o,{className:m},i))};b.propTypes=p,b.defaultProps={tag:"nav",listTag:"ol","aria-label":"breadcrumb"},t.a=b},465:function(e,t,a){"use strict";var s=a(19),c=a(23),r=a(1),n=a.n(r),i=a(5),l=a.n(i),o=a(61),d=a.n(o),u=a(84),p={tag:u.tagPropType,active:l.a.bool,className:l.a.string,cssModule:l.a.object},b=function(e){var t=e.className,a=e.cssModule,r=e.active,i=e.tag,l=Object(c.a)(e,["className","cssModule","active","tag"]),o=Object(u.mapToCssModules)(d()(t,!!r&&"active","breadcrumb-item"),a);return n.a.createElement(i,Object(s.a)({},l,{className:o,"aria-current":r?"page":void 0}))};b.propTypes=p,b.defaultProps={tag:"li"},t.a=b},467:function(e,t,a){"use strict";var s=a(19),c=a(23),r=a(1),n=a.n(r),i=a(5),l=a.n(i),o=a(61),d=a.n(o),u=a(84),p={tag:u.tagPropType,className:l.a.string,cssModule:l.a.object},b=function(e){var t=e.className,a=e.cssModule,r=e.tag,i=Object(c.a)(e,["className","cssModule","tag"]),l=Object(u.mapToCssModules)(d()(t,"input-group-text"),a);return n.a.createElement(r,Object(s.a)({},i,{className:l}))};b.propTypes=p,b.defaultProps={tag:"span"},t.a=b},481:function(e,t,a){"use strict";var s=a(19),c=a(23),r=a(1),n=a.n(r),i=a(5),l=a.n(i),o=a(61),d=a.n(o),u=a(84),p={tag:u.tagPropType,size:l.a.string,className:l.a.string,cssModule:l.a.object},b=function(e){var t=e.className,a=e.cssModule,r=e.tag,i=e.size,l=Object(c.a)(e,["className","cssModule","tag","size"]),o=Object(u.mapToCssModules)(d()(t,"input-group",i?"input-group-"+i:null),a);return n.a.createElement(r,Object(s.a)({},l,{className:o}))};b.propTypes=p,b.defaultProps={tag:"div"},t.a=b},482:function(e,t,a){"use strict";var s=a(19),c=a(23),r=a(1),n=a.n(r),i=a(5),l=a.n(i),o=a(61),d=a.n(o),u=a(84),p=a(467),b={tag:u.tagPropType,addonType:l.a.oneOf(["prepend","append"]).isRequired,children:l.a.node,className:l.a.string,cssModule:l.a.object},j=function(e){var t=e.className,a=e.cssModule,r=e.tag,i=e.addonType,l=e.children,o=Object(c.a)(e,["className","cssModule","tag","addonType","children"]),b=Object(u.mapToCssModules)(d()(t,"input-group-"+i),a);return"string"===typeof l?n.a.createElement(r,Object(s.a)({},o,{className:b}),n.a.createElement(p.a,{children:l})):n.a.createElement(r,Object(s.a)({},o,{className:b,children:l}))};j.propTypes=b,j.defaultProps={tag:"div"},t.a=j},494:function(e,t,a){"use strict";var s=a(19),c=a(1),r=a.n(c),n=a(5),i=a.n(n),l=a(524),o={children:i.a.node},d=function(e){return r.a.createElement(l.a,Object(s.a)({group:!0},e))};d.propTypes=o,t.a=d},543:function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));var s=a(469),c=a(19),r=a(122),n=a(121),i=a(1),l=a.n(i),o=a(5),d=a.n(o),u=a(494),p=a(84);function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,s)}return a}var j=["defaultOpen"],m=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={isOpen:t.defaultOpen||!1},a.toggle=a.toggle.bind(Object(r.a)(a)),a}Object(n.a)(t,e);var a=t.prototype;return a.toggle=function(){this.setState({isOpen:!this.state.isOpen})},a.render=function(){return l.a.createElement(u.a,Object(c.a)({isOpen:this.state.isOpen,toggle:this.toggle},Object(p.omit)(this.props,j)))},t}(i.Component);m.propTypes=function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){Object(s.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({defaultOpen:d.a.bool},u.a.propTypes)},588:function(e,t,a){},720:function(e,t,a){"use strict";var s=a(19),c=a(23),r=a(1),n=a.n(r),i=a(5),l=a.n(i),o=a(61),d=a.n(o),u=a(84),p={active:l.a.bool,children:l.a.node,className:l.a.string,cssModule:l.a.object,disabled:l.a.bool,tag:u.tagPropType},b=function(e){var t=e.active,a=e.className,r=e.cssModule,i=e.disabled,l=e.tag,o=Object(c.a)(e,["active","className","cssModule","disabled","tag"]),p=Object(u.mapToCssModules)(d()(a,"page-item",{active:t,disabled:i}),r);return n.a.createElement(l,Object(s.a)({},o,{className:p}))};b.propTypes=p,b.defaultProps={tag:"li"},t.a=b},721:function(e,t,a){"use strict";var s=a(19),c=a(23),r=a(1),n=a.n(r),i=a(5),l=a.n(i),o=a(61),d=a.n(o),u=a(84),p={"aria-label":l.a.string,children:l.a.node,className:l.a.string,cssModule:l.a.object,next:l.a.bool,previous:l.a.bool,first:l.a.bool,last:l.a.bool,tag:u.tagPropType},b=function(e){var t,a=e.className,r=e.cssModule,i=e.next,l=e.previous,o=e.first,p=e.last,b=e.tag,j=Object(c.a)(e,["className","cssModule","next","previous","first","last","tag"]),m=Object(u.mapToCssModules)(d()(a,"page-link"),r);l?t="Previous":i?t="Next":o?t="First":p&&(t="Last");var O,g=e["aria-label"]||t;l?O="\u2039":i?O="\u203a":o?O="\xab":p&&(O="\xbb");var h=e.children;return h&&Array.isArray(h)&&0===h.length&&(h=null),j.href||"a"!==b||(b="button"),(l||i||o||p)&&(h=[n.a.createElement("span",{"aria-hidden":"true",key:"caret"},h||O),n.a.createElement("span",{className:"sr-only",key:"sr"},g)]),n.a.createElement(b,Object(s.a)({},j,{className:m,"aria-label":g}),h)};b.propTypes=p,b.defaultProps={tag:"a"},t.a=b},722:function(e,t,a){"use strict";var s=a(19),c=a(23),r=a(1),n=a.n(r),i=a(5),l=a.n(i),o=a(61),d=a.n(o),u=a(84),p={children:l.a.node,className:l.a.string,listClassName:l.a.string,cssModule:l.a.object,size:l.a.string,tag:u.tagPropType,listTag:u.tagPropType,"aria-label":l.a.string},b=function(e){var t,a=e.className,r=e.listClassName,i=e.cssModule,l=e.size,o=e.tag,p=e.listTag,b=e["aria-label"],j=Object(c.a)(e,["className","listClassName","cssModule","size","tag","listTag","aria-label"]),m=Object(u.mapToCssModules)(d()(a),i),O=Object(u.mapToCssModules)(d()(r,"pagination",((t={})["pagination-"+l]=!!l,t)),i);return n.a.createElement(o,{className:m,"aria-label":b},n.a.createElement(p,Object(s.a)({},j,{className:O})))};b.propTypes=p,b.defaultProps={tag:"nav",listTag:"ul","aria-label":"pagination"},t.a=b},724:function(e,t,a){"use strict";a.d(t,"g",(function(){return r})),a.d(t,"a",(function(){return n})),a.d(t,"h",(function(){return i})),a.d(t,"d",(function(){return l})),a.d(t,"e",(function(){return o})),a.d(t,"f",(function(){return d})),a.d(t,"b",(function(){return u})),a.d(t,"c",(function(){return p}));var s=a(85),c=a.n(s),r=function(e){return function(t){return c.a.get("/apps/brandsRd/products",{params:e}).then((function(a){t({type:"GET_PRODUCTS",data:a.data,params:e})}))}},n=function(e){return function(t,a){return c.a.post("/apps/brandsRd/cart",{productId:e}).then((function(e){t({type:"ADD_TO_CART",data:e.data}),t(r(a().ecommerce.params))}))}},i=function(){return function(e){return c.a.get("/apps/brandsRd/wishlist").then((function(t){e({type:"GET_WISHLIST",data:t.data})}))}},l=function(e){return function(t){return c.a.delete("/apps/brandsRd/wishlist/".concat(e)).then((function(e){t({type:"DELETE_WISHLIST_ITEM",data:e.data}),t(i())}))}},o=function(){return function(e){return c.a.get("/apps/brandsRd/cart").then((function(t){e({type:"GET_CART",data:t.data})}))}},d=function(e){return function(t){return c.a.get("/apps/brandsRd/products/".concat(e)).then((function(e){t({type:"GET_PRODUCT",data:e.data})}))}},u=function(e){return function(t){return c.a.post("/apps/brandsRd/wishlist",{productId:e}).then((function(){t({type:"ADD_TO_WISHLIST"})}))}},p=function(e){return function(t){return c.a.delete("/apps/brandsRd/cart/".concat(e)).then((function(e){t({type:"DELETE_CART_ITEM",data:e.data}),t(o())}))}}},811:function(e,t,a){}}]);
//# sourceMappingURL=31.3f6f5e90.chunk.js.map