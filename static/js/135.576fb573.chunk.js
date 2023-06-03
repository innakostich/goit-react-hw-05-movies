"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[135],{68:function(e,n,t){t.r(n),t.d(n,{default:function(){return j}});var r=t(861),a=t(439),i=t(757),s=t.n(i),c=t(791),o=t(689),u=t(87),l=t(619),v=t(639),p="MovieDetails_movieContainer__ilr3m",d="MovieDetails_movieImg__5UJtY",f="MovieDetails_link__U+v+7",h="MovieDetails_active__uPNdW",m="MovieDetails_notFound__+OqD2",x=t(184),_=(0,c.lazy)((function(){return t.e(186).then(t.bind(t,186))})),g=(0,c.lazy)((function(){return t.e(76).then(t.bind(t,76))}));function j(){var e=(0,c.useState)(null),n=(0,a.Z)(e,2),t=n[0],i=n[1],j=(0,o.UO)().movieId,w=(0,o.s0)(),k=(0,o.TH)();(0,c.useEffect)((function(){var e=function(){var e=(0,r.Z)(s().mark((function e(){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,l.TP)(j);case 2:n=e.sent,i(n);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[j]);return(0,x.jsxs)(x.Fragment,{children:[t?(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)("button",{type:"button",onClick:function(){var e,n,t;w.push(null!==(e=null===k||void 0===k||null===(n=k.state)||void 0===n||null===(t=n.from)||void 0===t?void 0:t.location)&&void 0!==e?e:"/movies")},children:"Go back"}),(0,x.jsxs)("div",{className:p,children:[(0,x.jsx)("div",{className:d,children:(0,x.jsx)("img",{src:t.poster_path?l.yA+t.poster_path:"https://bitsofco.de/content/images/2018/12/broken-1.png",alt:t.title,width:"",height:""})}),(0,x.jsxs)("div",{children:[(0,x.jsx)("h2",{children:t.title}),(0,x.jsxs)("p",{children:["User Score: ","".concat(10*t.vote_average),"%"]}),(0,x.jsx)("h3",{children:"Overview"}),(0,x.jsx)("p",{children:"".concat(t.overview)}),(0,x.jsx)("h3",{children:"Genres"}),(0,x.jsx)("p",{children:"".concat(t.genres.map((function(e){return e.name})).join(" / "))})]})]})]}):(0,x.jsx)("div",{className:m,children:"This movie is not found"}),(0,x.jsx)("hr",{}),(0,x.jsx)("p",{children:"Additional information"}),(0,x.jsxs)("nav",{children:[(0,x.jsx)(u.OL,{to:{pathname:"/movies/".concat(j,"/cast"),state:{from:k}},className:f,activeClassName:h,children:"Cast"}),(0,x.jsx)(u.OL,{to:{pathname:"/movies/".concat(j,"/reviews"),state:{from:k}},className:f,activeClassName:h,children:"Reviews"})]}),(0,x.jsx)(c.Suspense,{fallback:(0,x.jsx)(v.Z,{}),children:(0,x.jsxs)(o.Z5,{children:[(0,x.jsx)(o.AW,{path:"/movies/:movieId/cast",element:(0,x.jsx)(g,{movieId:j})}),(0,x.jsx)(o.AW,{path:"/movies/:movieId/reviews",element:(0,x.jsx)(_,{movieId:j})})]})})]})}},619:function(e,n,t){t.d(n,{Jh:function(){return d},M1:function(){return p},TP:function(){return l},wr:function(){return v},yA:function(){return o},z1:function(){return u}});var r=t(861),a=t(757),i=t.n(a),s=t(243);s.Z.defaults.baseURL="https://api.themoviedb.org/3/";var c="81a8869c255f2e2cdd160d2494e708bd",o="https://image.tmdb.org/t/p/w500",u=function(){var e=(0,r.Z)(i().mark((function e(n){var t,r,a;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="search/movie?api_key=".concat(c,"&language=en-US&page=1&include_adult=false&query=").concat(n),e.next=3,s.Z.get(t);case 3:return r=e.sent,a=r.data,e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(i().mark((function e(n){var t,r,a;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="movie/".concat(n,"$?api_key=").concat(c,"&language=en-US"),e.next=3,s.Z.get(t);case 3:return r=e.sent,a=r.data,e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),v=function(){var e=(0,r.Z)(i().mark((function e(){var n,t,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="trending/movie/day?api_key=".concat(c),e.next=3,s.Z.get(n);case 3:return t=e.sent,r=t.data,e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(i().mark((function e(n){var t,r,a;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="movie/".concat(n,"/credits$?api_key={apiKey}&language=en-US"),e.next=3,s.Z.get(t);case 3:return r=e.sent,a=r.data,e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)(i().mark((function e(n){var t,r,a;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="movie/".concat(n,"/reviews$?api_key={apiKey}&language=en-US"),e.next=3,s.Z.get(t);case 3:return r=e.sent,a=r.data,e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=135.576fb573.chunk.js.map