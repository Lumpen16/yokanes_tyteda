(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[264],{9340:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/adminPanel/AdminModal",function(){return t(8721)}])},8721:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return _}});var a=t(4051),r=t.n(a),o=t(5893),u=t(5336),i=t.n(u),c=t(7294),l=t(5617),s=t(8090),d=t(9669),f=t.n(d);function p(n,e,t,a,r,o,u){try{var i=n[o](u),c=i.value}catch(l){return void t(l)}i.done?e(c):Promise.resolve(c).then(a,r)}function m(n){return function(){var e=this,t=arguments;return new Promise((function(a,r){var o=n.apply(e,t);function u(n){p(o,a,r,u,i,"next",n)}function i(n){p(o,a,r,u,i,"throw",n)}u(void 0)}))}}function _(n){var e=n.show,t=function(n){var e=b.filter((function(e){return e.name===n}))[0];return console.log(e),b.filter((function(e){return e.name===n}))[0]._id},a=(0,c.useState)(""),u=a[0],d=a[1],p=(0,c.useState)(""),_=p[0],h=p[1],v=(0,c.useState)(""),g=v[0],w=v[1],x=(0,c.useState)(""),y=x[0],C=x[1],j=(0,l.I0)(),k=(0,c.useState)([]),b=k[0],E=k[1];function M(){return(M=m(r().mark((function n(){var e,a;return r().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="",a=t(y),a=b.filter((function(n){return n.name===y}))[0].id,console.log(a),n.next=6,f().post("/user/create",{headers:{Authorization:"Bearer "+localStorage.getItem("access_token")},username:u,password:_,email:"".concat(Math.random(),"@gmail.com"),role:"mAdmin",owner:a}).then((function(n){return e=n.data._id}));case 6:return j((0,s.CW)()),console.log(a),n.next=10,f().post("/company/addCreator",{creator:e,id:a}).then((function(n){return console.log(n.data)}));case 10:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function N(){return(N=m(r().mark((function n(){var e;return r().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,f().get("/company");case 2:e=n.sent,E(e.data.map((function(n){return Object.assign({},{name:n.name,id:n._id})})));case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}return(0,c.useEffect)((function(){!function(){N.apply(this,arguments)}()}),[]),(0,o.jsx)("div",{onClick:function(){return j((0,s.CW)())},className:i().modal,style:{display:e?"block":"none"},children:(0,o.jsxs)("div",{onClick:function(n){return n.stopPropagation()},className:i().modal_main,children:[(0,o.jsx)("input",{type:"text",value:u,onChange:function(n){return d(n.target.value)},placeholder:"\u0418\u043c\u044f \u0430\u0434\u043c\u0438\u043d\u0430"}),(0,o.jsxs)("select",{onChange:function(n){return C(n.target.value)},children:[(0,o.jsx)("option",{disabled:!0,children:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u044e"}),b.map((function(n){return(0,o.jsx)("option",{value:n.name,children:n.name},Math.random())}))]}),(0,o.jsx)("input",{value:_,onChange:function(n){return h(n.target.value)},type:"password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c \u0430\u0434\u043c\u0438\u043d\u0430"}),(0,o.jsx)("input",{value:g,onChange:function(n){return w(n.target.value)},type:"password",placeholder:"\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043d\u0438\u0435 \u043f\u0430\u0440\u043e\u043b\u044f"}),(0,o.jsx)("button",{onClick:function(){return M.apply(this,arguments)},children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"})]})})}},5336:function(n){n.exports={modal:"Modal_modal__zjFUT",modal_main:"Modal_modal_main__4VlQO",modal_header:"Modal_modal_header__GD1Eb",modal_input:"Modal_modal_input__EzhUh",modal_button:"Modal_modal_button__RLQr6"}}},function(n){n.O(0,[669,774,888,179],(function(){return e=9340,n(n.s=e);var e}));var e=n.O();_N_E=e}]);