(this["webpackJsonprdlink-admin-dashboard"]=this["webpackJsonprdlink-admin-dashboard"]||[]).push([[44],{1022:function(e,a,t){"use strict";var s=t(1115),n=t(458),r=t(460),c=t(461),o=t(491),i=t(495),l=t(496),u=t(470),d=t(475),b=t(6);a.a=function(e){var a=e.searchTerm,p=e.setSearchTerm,m=e.handleFilter;return Object(b.jsx)("div",{id:"knowledge-base-search",children:Object(b.jsx)(n.a,{className:"knowledge-base-bg",style:{backgroundImage:"url(".concat(t(874).default,")")},children:Object(b.jsxs)(r.a,{className:"text-center",children:[Object(b.jsx)("h2",{className:"text-primary",children:"Dedicated Source Used on Website"}),Object(b.jsxs)(c.a,{className:"mb-2",children:["Popular searches: ",Object(b.jsx)("span",{className:"font-weight-bolder",children:"Sales automation, Email marketing"})]}),Object(b.jsx)(o.a,{className:"kb-search-input",onSubmit:function(e){return e.preventDefault()},children:Object(b.jsxs)(i.a,{className:"input-group-merge",children:[Object(b.jsx)(l.a,{addonType:"prepend",children:Object(b.jsx)(u.a,{children:Object(b.jsx)(s.a,{size:14})})}),Object(b.jsx)(d.a,{value:a,onChange:function(e){return function(e){m?m(e):p(e.target.value)}(e)},placeholder:"Ask a question..."})]})})]})})})}},1023:function(e,a,t){},1875:function(e,a,t){"use strict";t.r(a);var s=t(118),n=t(21),r=t(15),c=t(0),o=t(79),i=t.n(o),l=t(448),u=t(56),d=t.n(u),b=t(545),p=t(449),m=t(450),j=t(1022),g=t(457),f=t(458),O=t(460),h=t(637),v=t(638),N=t(456),y=(t(1023),t(6));a.default=function(){var e=Object(c.useState)(null),a=Object(r.a)(e,2),t=a[0],o=a[1],u=Object(c.useState)([]),x=Object(r.a)(u,2),T=x[0],M=x[1],P=Object(c.useState)(""),C=Object(r.a)(P,2),w=C[0],z=C[1];Object(c.useEffect)((function(){i.a.get("/faq/data/category").then((function(e){return o(e.data)}))}),[]);var E=Object(b.i)(),R=function(e){var a=e.item,t=l[a.icon];return Object(y.jsx)(g.a,{className:"kb-search-content",md:"4",sm:"6",children:Object(y.jsx)(f.a,{children:Object(y.jsxs)(O.a,{children:[Object(y.jsxs)("h6",{className:"kb-title",children:[Object(y.jsx)(t,{size:20,className:d()("mr-50",Object(n.a)({},a.iconColor,a.iconColor))}),Object(y.jsxs)("span",{children:[a.title," ","(".concat(a.questions.length,")")]})]}),Object(y.jsx)(h.a,{className:"list-group-circle mt-2",children:a.questions.map((function(e){return Object(y.jsx)(v.a,{tag:p.b,to:"/pages/knowledge-base/".concat(E.category,"/").concat(e.slug),className:"text-body",children:e.question},e.id)}))})]})})})};return Object(y.jsxs)(c.Fragment,{children:[Object(y.jsx)(m.a,{breadCrumbTitle:"Knowledge Base",breadCrumbParent:"Pages",breadCrumbParent2:"Knowledge Base",breadCrumbActive:"Category"}),Object(y.jsx)(j.a,{searchTerm:w,setSearchTerm:z,handleFilter:function(e){var a=e.target.value,n=e.target.value.toLowerCase();z(e.target.value);var r=[];a.length&&(r=t.filter((function(e){return e.title.toLowerCase().includes(n)||e.questions.filter((function(e){return e.question.toLowerCase().includes(n)})).length}))),M(Object(s.a)(r))}}),null!==t?Object(y.jsx)("div",{id:"knowledge-base-category",children:Object(y.jsx)(N.a,{className:"kb-search-content-info match-height",children:(w.length?T:t).map((function(e){return Object(y.jsx)(R,{item:e},e.id)}))})}):null]})}},450:function(e,a,t){"use strict";var s=t(449),n=t(1178),r=t(1136),c=t(1200),o=t(1195),i=t(1133),l=t(467),u=t(468),d=t(466),b=t(1370),p=t(1101),m=t(1111),j=t(6);a.a=function(e){var a=e.breadCrumbTitle,t=e.breadCrumbParent,g=e.breadCrumbParent2,f=e.breadCrumbParent3,O=e.breadCrumbActive;return Object(j.jsxs)("div",{className:"content-header row",children:[Object(j.jsx)("div",{className:"content-header-left col-md-9 col-12 mb-2",children:Object(j.jsx)("div",{className:"row breadcrumbs-top",children:Object(j.jsxs)("div",{className:"col-12",children:[a?Object(j.jsx)("h2",{className:"content-header-title float-left mb-0",children:a}):"",Object(j.jsx)("div",{className:"breadcrumb-wrapper vs-breadcrumbs d-sm-block d-none col-12",children:Object(j.jsxs)(l.a,{children:[Object(j.jsx)(u.a,{tag:"li",children:Object(j.jsx)(s.b,{to:"/",children:"Home"})}),Object(j.jsx)(u.a,{tag:"li",className:"text-primary",children:t}),g?Object(j.jsx)(u.a,{tag:"li",className:"text-primary",children:g}):"",f?Object(j.jsx)(u.a,{tag:"li",className:"text-primary",children:f}):"",Object(j.jsx)(u.a,{tag:"li",active:!0,children:O})]})})]})})}),Object(j.jsx)("div",{className:"content-header-right text-md-right col-md-3 col-12 d-md-block d-none",children:Object(j.jsx)("div",{className:"form-group breadcrum-right dropdown",children:Object(j.jsxs)(d.a,{children:[Object(j.jsx)(b.a,{color:"primary",size:"sm",className:"btn-icon btn-round dropdown-toggle",children:Object(j.jsx)(n.a,{size:14})}),Object(j.jsxs)(p.a,{tag:"ul",right:!0,children:[Object(j.jsxs)(m.a,{tag:s.b,to:"/apps/chat",children:[Object(j.jsx)(r.a,{className:"mr-1",size:14}),Object(j.jsx)("span",{className:"align-middle",children:"Todo"})]}),Object(j.jsxs)(m.a,{tag:s.b,to:"/apps/chat",children:[Object(j.jsx)(c.a,{className:"mr-1",size:14}),Object(j.jsx)("span",{className:"align-middle",children:"Chat"})]}),Object(j.jsxs)(m.a,{tag:s.b,to:"/apps/email",children:[Object(j.jsx)(o.a,{className:"mr-1",size:14}),Object(j.jsx)("span",{className:"align-middle",children:"Email"})]}),Object(j.jsxs)(m.a,{tag:s.b,to:"/apps/calendar",children:[Object(j.jsx)(i.a,{className:"mr-1",size:14}),Object(j.jsx)("span",{className:"align-middle",children:"Calendar"})]})]})]})})})]})}},451:function(e,a,t){"use strict";var s=t(14),n=t(0),r=t.n(n),c=t(5),o=t.n(c),i=t(464),l={children:o.a.node},u=function(e){return r.a.createElement(i.a,Object(s.a)({group:!0},e))};u.propTypes=l,a.a=u},456:function(e,a,t){"use strict";var s=t(14),n=t(20),r=t(0),c=t.n(r),o=t(5),i=t.n(o),l=t(56),u=t.n(l),d=t(78),b=i.a.oneOfType([i.a.number,i.a.string]),p={tag:d.tagPropType,noGutters:i.a.bool,className:i.a.string,cssModule:i.a.object,form:i.a.bool,xs:b,sm:b,md:b,lg:b,xl:b},m={tag:"div",widths:["xs","sm","md","lg","xl"]},j=function(e){var a=e.className,t=e.cssModule,r=e.noGutters,o=e.tag,i=e.form,l=e.widths,b=Object(n.a)(e,["className","cssModule","noGutters","tag","form","widths"]),p=[];l.forEach((function(a,t){var s=e[a];if(delete b[a],s){var n=!t;p.push(n?"row-cols-"+s:"row-cols-"+a+"-"+s)}}));var m=Object(d.mapToCssModules)(u()(a,r?"no-gutters":null,i?"form-row":"row",p),t);return c.a.createElement(o,Object(s.a)({},b,{className:m}))};j.propTypes=p,j.defaultProps=m,a.a=j},457:function(e,a,t){"use strict";var s=t(14),n=t(20),r=t(0),c=t.n(r),o=t(5),i=t.n(o),l=t(56),u=t.n(l),d=t(78),b=i.a.oneOfType([i.a.number,i.a.string]),p=i.a.oneOfType([i.a.bool,i.a.number,i.a.string,i.a.shape({size:i.a.oneOfType([i.a.bool,i.a.number,i.a.string]),order:b,offset:b})]),m={tag:d.tagPropType,xs:p,sm:p,md:p,lg:p,xl:p,className:i.a.string,cssModule:i.a.object,widths:i.a.array},j={tag:"div",widths:["xs","sm","md","lg","xl"]},g=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},f=function(e){var a=e.className,t=e.cssModule,r=e.widths,o=e.tag,i=Object(n.a)(e,["className","cssModule","widths","tag"]),l=[];r.forEach((function(a,s){var n=e[a];if(delete i[a],n||""===n){var r=!s;if(Object(d.isObject)(n)){var c,o=r?"-":"-"+a+"-",b=g(r,a,n.size);l.push(Object(d.mapToCssModules)(u()(((c={})[b]=n.size||""===n.size,c["order"+o+n.order]=n.order||0===n.order,c["offset"+o+n.offset]=n.offset||0===n.offset,c)),t))}else{var p=g(r,a,n);l.push(p)}}})),l.length||l.push("col");var b=Object(d.mapToCssModules)(u()(a,l),t);return c.a.createElement(o,Object(s.a)({},i,{className:b}))};f.propTypes=m,f.defaultProps=j,a.a=f},458:function(e,a,t){"use strict";var s=t(14),n=t(20),r=t(0),c=t.n(r),o=t(5),i=t.n(o),l=t(56),u=t.n(l),d=t(78),b={tag:d.tagPropType,inverse:i.a.bool,color:i.a.string,body:i.a.bool,outline:i.a.bool,className:i.a.string,cssModule:i.a.object,innerRef:i.a.oneOfType([i.a.object,i.a.string,i.a.func])},p=function(e){var a=e.className,t=e.cssModule,r=e.color,o=e.body,i=e.inverse,l=e.outline,b=e.tag,p=e.innerRef,m=Object(n.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),j=Object(d.mapToCssModules)(u()(a,"card",!!i&&"text-white",!!o&&"card-body",!!r&&(l?"border":"bg")+"-"+r),t);return c.a.createElement(b,Object(s.a)({},m,{className:j,ref:p}))};p.propTypes=b,p.defaultProps={tag:"div"},a.a=p},460:function(e,a,t){"use strict";var s=t(14),n=t(20),r=t(0),c=t.n(r),o=t(5),i=t.n(o),l=t(56),u=t.n(l),d=t(78),b={tag:d.tagPropType,className:i.a.string,cssModule:i.a.object,innerRef:i.a.oneOfType([i.a.object,i.a.string,i.a.func])},p=function(e){var a=e.className,t=e.cssModule,r=e.innerRef,o=e.tag,i=Object(n.a)(e,["className","cssModule","innerRef","tag"]),l=Object(d.mapToCssModules)(u()(a,"card-body"),t);return c.a.createElement(o,Object(s.a)({},i,{className:l,ref:r}))};p.propTypes=b,p.defaultProps={tag:"div"},a.a=p},461:function(e,a,t){"use strict";var s=t(14),n=t(20),r=t(0),c=t.n(r),o=t(5),i=t.n(o),l=t(56),u=t.n(l),d=t(78),b={tag:d.tagPropType,className:i.a.string,cssModule:i.a.object},p=function(e){var a=e.className,t=e.cssModule,r=e.tag,o=Object(n.a)(e,["className","cssModule","tag"]),i=Object(d.mapToCssModules)(u()(a,"card-text"),t);return c.a.createElement(r,Object(s.a)({},o,{className:i}))};p.propTypes=b,p.defaultProps={tag:"p"},a.a=p},466:function(e,a,t){"use strict";t.d(a,"a",(function(){return j}));var s=t(452),n=t(14),r=t(116),c=t(115),o=t(0),i=t.n(o),l=t(5),u=t.n(l),d=t(451),b=t(78);function p(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);a&&(s=s.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,s)}return t}var m=["defaultOpen"],j=function(e){function a(a){var t;return(t=e.call(this,a)||this).state={isOpen:a.defaultOpen||!1},t.toggle=t.toggle.bind(Object(r.a)(t)),t}Object(c.a)(a,e);var t=a.prototype;return t.toggle=function(){this.setState({isOpen:!this.state.isOpen})},t.render=function(){return i.a.createElement(d.a,Object(n.a)({isOpen:this.state.isOpen,toggle:this.toggle},Object(b.omit)(this.props,m)))},a}(o.Component);j.propTypes=function(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?p(Object(t),!0).forEach((function(a){Object(s.a)(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}({defaultOpen:u.a.bool},d.a.propTypes)},467:function(e,a,t){"use strict";var s=t(14),n=t(20),r=t(0),c=t.n(r),o=t(5),i=t.n(o),l=t(56),u=t.n(l),d=t(78),b={tag:d.tagPropType,listTag:d.tagPropType,className:i.a.string,listClassName:i.a.string,cssModule:i.a.object,children:i.a.node,"aria-label":i.a.string},p=function(e){var a=e.className,t=e.listClassName,r=e.cssModule,o=e.children,i=e.tag,l=e.listTag,b=e["aria-label"],p=Object(n.a)(e,["className","listClassName","cssModule","children","tag","listTag","aria-label"]),m=Object(d.mapToCssModules)(u()(a),r),j=Object(d.mapToCssModules)(u()("breadcrumb",t),r);return c.a.createElement(i,Object(s.a)({},p,{className:m,"aria-label":b}),c.a.createElement(l,{className:j},o))};p.propTypes=b,p.defaultProps={tag:"nav",listTag:"ol","aria-label":"breadcrumb"},a.a=p},468:function(e,a,t){"use strict";var s=t(14),n=t(20),r=t(0),c=t.n(r),o=t(5),i=t.n(o),l=t(56),u=t.n(l),d=t(78),b={tag:d.tagPropType,active:i.a.bool,className:i.a.string,cssModule:i.a.object},p=function(e){var a=e.className,t=e.cssModule,r=e.active,o=e.tag,i=Object(n.a)(e,["className","cssModule","active","tag"]),l=Object(d.mapToCssModules)(u()(a,!!r&&"active","breadcrumb-item"),t);return c.a.createElement(o,Object(s.a)({},i,{className:l,"aria-current":r?"page":void 0}))};p.propTypes=b,p.defaultProps={tag:"li"},a.a=p},470:function(e,a,t){"use strict";var s=t(14),n=t(20),r=t(0),c=t.n(r),o=t(5),i=t.n(o),l=t(56),u=t.n(l),d=t(78),b={tag:d.tagPropType,className:i.a.string,cssModule:i.a.object},p=function(e){var a=e.className,t=e.cssModule,r=e.tag,o=Object(n.a)(e,["className","cssModule","tag"]),i=Object(d.mapToCssModules)(u()(a,"input-group-text"),t);return c.a.createElement(r,Object(s.a)({},o,{className:i}))};p.propTypes=b,p.defaultProps={tag:"span"},a.a=p},475:function(e,a,t){"use strict";var s=t(14),n=t(20),r=t(116),c=t(115),o=t(0),i=t.n(o),l=t(5),u=t.n(l),d=t(56),b=t.n(d),p=t(78),m={children:u.a.node,type:u.a.string,size:u.a.oneOfType([u.a.number,u.a.string]),bsSize:u.a.string,valid:u.a.bool,invalid:u.a.bool,tag:p.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),plaintext:u.a.bool,addon:u.a.bool,className:u.a.string,cssModule:u.a.object},j=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(r.a)(t)),t.focus=t.focus.bind(Object(r.a)(t)),t}Object(c.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.focus=function(){this.ref&&this.ref.focus()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,r=e.type,c=e.bsSize,o=e.valid,l=e.invalid,u=e.tag,d=e.addon,m=e.plaintext,j=e.innerRef,g=Object(n.a)(e,["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"]),f=["radio","checkbox"].indexOf(r)>-1,O=new RegExp("\\D","g"),h=u||("select"===r||"textarea"===r?r:"input"),v="form-control";m?(v+="-plaintext",h=u||"input"):"file"===r?v+="-file":"range"===r?v+="-range":f&&(v=d?null:"form-check-input"),g.size&&O.test(g.size)&&(Object(p.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),c=g.size,delete g.size);var N=Object(p.mapToCssModules)(b()(a,l&&"is-invalid",o&&"is-valid",!!c&&"form-control-"+c,v),t);return("input"===h||u&&"function"===typeof u)&&(g.type=r),g.children&&!m&&"select"!==r&&"string"===typeof h&&"select"!==h&&(Object(p.warnOnce)('Input with a type of "'+r+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete g.children),i.a.createElement(h,Object(s.a)({},g,{ref:j,className:N,"aria-invalid":l}))},a}(i.a.Component);j.propTypes=m,j.defaultProps={type:"text"},a.a=j},491:function(e,a,t){"use strict";var s=t(14),n=t(20),r=t(116),c=t(115),o=t(0),i=t.n(o),l=t(5),u=t.n(l),d=t(56),b=t.n(d),p=t(78),m={children:u.a.node,inline:u.a.bool,tag:p.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),className:u.a.string,cssModule:u.a.object},j=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(r.a)(t)),t.submit=t.submit.bind(Object(r.a)(t)),t}Object(c.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.submit=function(){this.ref&&this.ref.submit()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,r=e.inline,c=e.tag,o=e.innerRef,l=Object(n.a)(e,["className","cssModule","inline","tag","innerRef"]),u=Object(p.mapToCssModules)(b()(a,!!r&&"form-inline"),t);return i.a.createElement(c,Object(s.a)({},l,{ref:o,className:u}))},a}(o.Component);j.propTypes=m,j.defaultProps={tag:"form"},a.a=j},495:function(e,a,t){"use strict";var s=t(14),n=t(20),r=t(0),c=t.n(r),o=t(5),i=t.n(o),l=t(56),u=t.n(l),d=t(78),b={tag:d.tagPropType,size:i.a.string,className:i.a.string,cssModule:i.a.object},p=function(e){var a=e.className,t=e.cssModule,r=e.tag,o=e.size,i=Object(n.a)(e,["className","cssModule","tag","size"]),l=Object(d.mapToCssModules)(u()(a,"input-group",o?"input-group-"+o:null),t);return c.a.createElement(r,Object(s.a)({},i,{className:l}))};p.propTypes=b,p.defaultProps={tag:"div"},a.a=p},496:function(e,a,t){"use strict";var s=t(14),n=t(20),r=t(0),c=t.n(r),o=t(5),i=t.n(o),l=t(56),u=t.n(l),d=t(78),b=t(470),p={tag:d.tagPropType,addonType:i.a.oneOf(["prepend","append"]).isRequired,children:i.a.node,className:i.a.string,cssModule:i.a.object},m=function(e){var a=e.className,t=e.cssModule,r=e.tag,o=e.addonType,i=e.children,l=Object(n.a)(e,["className","cssModule","tag","addonType","children"]),p=Object(d.mapToCssModules)(u()(a,"input-group-"+o),t);return"string"===typeof i?c.a.createElement(r,Object(s.a)({},l,{className:p}),c.a.createElement(b.a,{children:i})):c.a.createElement(r,Object(s.a)({},l,{className:p,children:i}))};m.propTypes=p,m.defaultProps={tag:"div"},a.a=m},637:function(e,a,t){"use strict";var s=t(14),n=t(20),r=t(0),c=t.n(r),o=t(5),i=t.n(o),l=t(56),u=t.n(l),d=t(78),b={tag:d.tagPropType,flush:i.a.bool,className:i.a.string,cssModule:i.a.object,horizontal:i.a.oneOfType([i.a.bool,i.a.string])},p=function(e){var a=e.className,t=e.cssModule,r=e.tag,o=e.flush,i=e.horizontal,l=Object(n.a)(e,["className","cssModule","tag","flush","horizontal"]),b=Object(d.mapToCssModules)(u()(a,"list-group",o?"list-group-flush":function(e){return!1!==e&&(!0===e||"xs"===e?"list-group-horizontal":"list-group-horizontal-"+e)}(i)),t);return c.a.createElement(r,Object(s.a)({},l,{className:b}))};p.propTypes=b,p.defaultProps={tag:"ul",horizontal:!1},a.a=p},638:function(e,a,t){"use strict";var s=t(14),n=t(20),r=t(0),c=t.n(r),o=t(5),i=t.n(o),l=t(56),u=t.n(l),d=t(78),b={tag:d.tagPropType,active:i.a.bool,disabled:i.a.bool,color:i.a.string,action:i.a.bool,className:i.a.any,cssModule:i.a.object},p=function(e){e.preventDefault()},m=function(e){var a=e.className,t=e.cssModule,r=e.tag,o=e.active,i=e.disabled,l=e.action,b=e.color,m=Object(n.a)(e,["className","cssModule","tag","active","disabled","action","color"]),j=Object(d.mapToCssModules)(u()(a,!!o&&"active",!!i&&"disabled",!!l&&"list-group-item-action",!!b&&"list-group-item-"+b,"list-group-item"),t);return i&&(m.onClick=p),c.a.createElement(r,Object(s.a)({},m,{className:j}))};m.propTypes=b,m.defaultProps={tag:"li"},a.a=m},874:function(e,a,t){"use strict";t.r(a),a.default=t.p+"static/media/banner.06ea9907.png"}}]);
//# sourceMappingURL=44.3a69bd07.chunk.js.map