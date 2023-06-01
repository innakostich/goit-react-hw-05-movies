"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[135],{135:function(e,n,t){t.r(n),t.d(n,{default:function(){return m}});var r=t(861),a=t(439),i=t(757),c=t.n(i),s=t(639),o=t(791),u=t(689),l=t(87),v=t(619),d={movieContainer:"MovieDetails_movieContainer__ilr3m",movieImg:"MovieDetails_movieImg__5UJtY",active:"MovieDetails_active__uPNdW"},p=t(184),h=(0,o.lazy)((function(){return t.e(186).then(t.bind(t,186))})),f=(0,o.lazy)((function(){return t.e(76).then(t.bind(t,76))}));function m(){var e=(0,o.useState)(null),n=(0,a.Z)(e,2),t=n[0],i=n[1],m=(0,u.UO)().movieId,x=(0,u.s0)(),g=(0,u.TH)(),j=(0,u.bS)();(0,o.useEffect)((function(){var e=function(){var e=(0,r.Z)(c().mark((function e(){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,v.TP)(m);case 2:n=e.sent,i(n);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[m]);return(0,p.jsxs)(p.Fragment,{children:[t?(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("button",{type:"button",onClick:function(){var e,n,t;x.push(null!==(e=null===g||void 0===g||null===(n=g.state)||void 0===n||null===(t=n.from)||void 0===t?void 0:t.location)&&void 0!==e?e:"/movies")},children:"Go back"}),(0,p.jsxs)("div",{className:d.movieContainer,children:[(0,p.jsx)("div",{className:d.movieImg,children:(0,p.jsx)("img",{src:t.poster_path?v.yA+t.poster_path:"https://bitsofco.de/content/images/2018/12/broken-1.png",alt:t.title,width:"",height:""})}),(0,p.jsxs)("div",{children:[(0,p.jsx)("h2",{children:t.title}),(0,p.jsxs)("p",{children:["User Score: ","".concat(10*t.vote_average),"%"]}),(0,p.jsx)("h3",{children:"Overview"}),(0,p.jsx)("p",{children:"".concat(t.overview)}),(0,p.jsx)("h3",{children:"Genres"}),(0,p.jsx)("p",{children:"".concat(t.genres.map((function(e){return e.name})).join(" / "))})]})]})]}):(0,p.jsx)("div",{className:d.notFound,children:"This movie is not found"}),(0,p.jsx)("hr",{}),(0,p.jsx)("p",{children:"Additional information"}),(0,p.jsxs)("nav",{children:[(0,p.jsx)(l.OL,{to:{pathname:"".concat(null===j||void 0===j?void 0:j.url,"/cast"),state:g.state},className:d.link,activeClassName:d.active,children:"Cast"}),(0,p.jsx)(l.OL,{to:{pathname:"".concat(null===j||void 0===j?void 0:j.url,"/reviews"),state:g.state},className:d.link,activeClassName:d.active,children:"Reviews"})]}),(0,p.jsx)(o.Suspense,{fallback:(0,p.jsx)(s.Z,{}),children:(0,p.jsxs)(u.Z5,{children:[(0,p.jsx)(u.AW,{path:"".concat(null===j||void 0===j?void 0:j.path,"/cast"),children:(0,p.jsx)(f,{movieId:m})}),(0,p.jsx)(u.AW,{path:"".concat(null===j||void 0===j?void 0:j.path,"/reviews"),children:(0,p.jsx)(h,{movieId:m})})]})})]})}},619:function(e,n,t){t.d(n,{Jh:function(){return p},M1:function(){return d},TP:function(){return l},wr:function(){return v},yA:function(){return o},z1:function(){return u}});var r=t(861),a=t(757),i=t.n(a),c=t(243);c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var s="81a8869c255f2e2cdd160d2494e708bd",o="https://image.tmdb.org/t/p/w500",u=function(){var e=(0,r.Z)(i().mark((function e(n){var t,r,a;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="search/movie?api_key=".concat(s,"&language=en-US&page=1&include_adult=false&query=").concat(n),e.next=3,c.Z.get(t);case 3:return r=e.sent,a=r.data,e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(i().mark((function e(n){var t,r,a;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="movie/".concat(n,"$?api_key=").concat(s,"&language=en-US"),e.next=3,c.Z.get(t);case 3:return r=e.sent,a=r.data,e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),v=function(){var e=(0,r.Z)(i().mark((function e(){var n,t,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="trending/movie/day?api_key=".concat(s),e.next=3,c.Z.get(n);case 3:return t=e.sent,r=t.data,e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)(i().mark((function e(n){var t,r,a;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="movie/".concat(n,"/credits$?api_key={apiKey}&language=en-US"),e.next=3,c.Z.get(t);case 3:return r=e.sent,a=r.data,e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(i().mark((function e(n){var t,r,a;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="movie/".concat(n,"/reviews$?api_key={apiKey}&language=en-US"),e.next=3,c.Z.get(t);case 3:return r=e.sent,a=r.data,e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=135.b1f49b9e.chunk.js.map