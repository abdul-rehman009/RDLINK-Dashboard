(this["webpackJsonprdlink-admin-dashboard"]=this["webpackJsonprdlink-admin-dashboard"]||[]).push([[143],{1904:function(e,t,a){"use strict";a.r(t);var s=a(0),r=a(450),c=a(520),n=a(6);t.default=function(){return Object(n.jsxs)(s.Fragment,{children:[Object(n.jsx)(r.a,{breadCrumbTitle:"Layout Empty",breadCrumbParent:"Layouts",breadCrumbActive:"Layout Empty"}),Object(n.jsx)(c.a,{color:"primary",children:Object(n.jsxs)("div",{className:"alert-body",children:[Object(n.jsx)("span",{className:"font-weight-bold",children:"Info: "}),Object(n.jsxs)("span",{children:["This layout can be useful for getting started with empty content section. Please check the"," ",Object(n.jsx)("a",{href:"https://pixinvent.com/demo/vuexy-react-admin-dashboard-template/documentation/development/page-layouts",target:"_blank",children:"Layout empty documentation"})," ","for more details."]})]})})]})}},450:function(e,t,a){"use strict";var s=a(449),r=a(1177),c=a(1135),n=a(1199),l=a(1194),i=a(1132),o=a(467),b=a(468),d=a(466),p=a(1370),m=a(1100),u=a(1110),j=a(6);t.a=function(e){var t=e.breadCrumbTitle,a=e.breadCrumbParent,O=e.breadCrumbParent2,g=e.breadCrumbParent3,h=e.breadCrumbActive;return Object(j.jsxs)("div",{className:"content-header row",children:[Object(j.jsx)("div",{className:"content-header-left col-md-9 col-12 mb-2",children:Object(j.jsx)("div",{className:"row breadcrumbs-top",children:Object(j.jsxs)("div",{className:"col-12",children:[t?Object(j.jsx)("h2",{className:"content-header-title float-left mb-0",children:t}):"",Object(j.jsx)("div",{className:"breadcrumb-wrapper vs-breadcrumbs d-sm-block d-none col-12",children:Object(j.jsxs)(o.a,{children:[Object(j.jsx)(b.a,{tag:"li",children:Object(j.jsx)(s.b,{to:"/",children:"Home"})}),Object(j.jsx)(b.a,{tag:"li",className:"text-primary",children:a}),O?Object(j.jsx)(b.a,{tag:"li",className:"text-primary",children:O}):"",g?Object(j.jsx)(b.a,{tag:"li",className:"text-primary",children:g}):"",Object(j.jsx)(b.a,{tag:"li",active:!0,children:h})]})})]})})}),Object(j.jsx)("div",{className:"content-header-right text-md-right col-md-3 col-12 d-md-block d-none",children:Object(j.jsx)("div",{className:"form-group breadcrum-right dropdown",children:Object(j.jsxs)(d.a,{children:[Object(j.jsx)(p.a,{color:"primary",size:"sm",className:"btn-icon btn-round dropdown-toggle",children:Object(j.jsx)(r.a,{size:14})}),Object(j.jsxs)(m.a,{tag:"ul",right:!0,children:[Object(j.jsxs)(u.a,{tag:s.b,to:"/apps/chat",children:[Object(j.jsx)(c.a,{className:"mr-1",size:14}),Object(j.jsx)("span",{className:"align-middle",children:"Todo"})]}),Object(j.jsxs)(u.a,{tag:s.b,to:"/apps/chat",children:[Object(j.jsx)(n.a,{className:"mr-1",size:14}),Object(j.jsx)("span",{className:"align-middle",children:"Chat"})]}),Object(j.jsxs)(u.a,{tag:s.b,to:"/apps/email",children:[Object(j.jsx)(l.a,{className:"mr-1",size:14}),Object(j.jsx)("span",{className:"align-middle",children:"Email"})]}),Object(j.jsxs)(u.a,{tag:s.b,to:"/apps/calendar",children:[Object(j.jsx)(i.a,{className:"mr-1",size:14}),Object(j.jsx)("span",{className:"align-middle",children:"Calendar"})]})]})]})})})]})}},451:function(e,t,a){"use strict";var s=a(14),r=a(0),c=a.n(r),n=a(5),l=a.n(n),i=a(464),o={children:l.a.node},b=function(e){return c.a.createElement(i.a,Object(s.a)({group:!0},e))};b.propTypes=o,t.a=b},466:function(e,t,a){"use strict";a.d(t,"a",(function(){return j}));var s=a(452),r=a(14),c=a(116),n=a(115),l=a(0),i=a.n(l),o=a(5),b=a.n(o),d=a(451),p=a(78);function m(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,s)}return a}var u=["defaultOpen"],j=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={isOpen:t.defaultOpen||!1},a.toggle=a.toggle.bind(Object(c.a)(a)),a}Object(n.a)(t,e);var a=t.prototype;return a.toggle=function(){this.setState({isOpen:!this.state.isOpen})},a.render=function(){return i.a.createElement(d.a,Object(r.a)({isOpen:this.state.isOpen,toggle:this.toggle},Object(p.omit)(this.props,u)))},t}(l.Component);j.propTypes=function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?m(Object(a),!0).forEach((function(t){Object(s.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):m(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({defaultOpen:b.a.bool},d.a.propTypes)},467:function(e,t,a){"use strict";var s=a(14),r=a(20),c=a(0),n=a.n(c),l=a(5),i=a.n(l),o=a(56),b=a.n(o),d=a(78),p={tag:d.tagPropType,listTag:d.tagPropType,className:i.a.string,listClassName:i.a.string,cssModule:i.a.object,children:i.a.node,"aria-label":i.a.string},m=function(e){var t=e.className,a=e.listClassName,c=e.cssModule,l=e.children,i=e.tag,o=e.listTag,p=e["aria-label"],m=Object(r.a)(e,["className","listClassName","cssModule","children","tag","listTag","aria-label"]),u=Object(d.mapToCssModules)(b()(t),c),j=Object(d.mapToCssModules)(b()("breadcrumb",a),c);return n.a.createElement(i,Object(s.a)({},m,{className:u,"aria-label":p}),n.a.createElement(o,{className:j},l))};m.propTypes=p,m.defaultProps={tag:"nav",listTag:"ol","aria-label":"breadcrumb"},t.a=m},468:function(e,t,a){"use strict";var s=a(14),r=a(20),c=a(0),n=a.n(c),l=a(5),i=a.n(l),o=a(56),b=a.n(o),d=a(78),p={tag:d.tagPropType,active:i.a.bool,className:i.a.string,cssModule:i.a.object},m=function(e){var t=e.className,a=e.cssModule,c=e.active,l=e.tag,i=Object(r.a)(e,["className","cssModule","active","tag"]),o=Object(d.mapToCssModules)(b()(t,!!c&&"active","breadcrumb-item"),a);return n.a.createElement(l,Object(s.a)({},i,{className:o,"aria-current":c?"page":void 0}))};m.propTypes=p,m.defaultProps={tag:"li"},t.a=m},520:function(e,t,a){"use strict";var s=a(14),r=a(20),c=a(452),n=a(0),l=a.n(n),i=a(5),o=a.n(i),b=a(56),d=a.n(b),p=a(78),m=a(498);function u(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,s)}return a}function j(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?u(Object(a),!0).forEach((function(t){Object(c.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):u(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var O={children:o.a.node,className:o.a.string,closeClassName:o.a.string,closeAriaLabel:o.a.string,cssModule:o.a.object,color:o.a.string,fade:o.a.bool,isOpen:o.a.bool,toggle:o.a.func,tag:p.tagPropType,transition:o.a.shape(m.a.propTypes),innerRef:o.a.oneOfType([o.a.object,o.a.string,o.a.func])},g={color:"success",isOpen:!0,tag:"div",closeAriaLabel:"Close",fade:!0,transition:j(j({},m.a.defaultProps),{},{unmountOnExit:!0})};function h(e){var t=e.className,a=e.closeClassName,c=e.closeAriaLabel,n=e.cssModule,i=e.tag,o=e.color,b=e.isOpen,u=e.toggle,O=e.children,g=e.transition,h=e.fade,f=e.innerRef,y=Object(r.a)(e,["className","closeClassName","closeAriaLabel","cssModule","tag","color","isOpen","toggle","children","transition","fade","innerRef"]),v=Object(p.mapToCssModules)(d()(t,"alert","alert-"+o,{"alert-dismissible":u}),n),x=Object(p.mapToCssModules)(d()("close",a),n),N=j(j(j({},m.a.defaultProps),g),{},{baseClass:h?g.baseClass:"",timeout:h?g.timeout:0});return l.a.createElement(m.a,Object(s.a)({},y,N,{tag:i,className:v,in:b,role:"alert",innerRef:f}),u?l.a.createElement("button",{type:"button",className:x,"aria-label":c,onClick:u},l.a.createElement("span",{"aria-hidden":"true"},"\xd7")):null,O)}h.propTypes=O,h.defaultProps=g,t.a=h}}]);
//# sourceMappingURL=143.aa476354.chunk.js.map