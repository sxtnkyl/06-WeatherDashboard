(this["webpackJsonp06-weather-dashboard"]=this["webpackJsonp06-weather-dashboard"]||[]).push([[0],{54:function(e,n,t){"use strict";t.r(n);var r,c,a,i,o,d,s,u,l,p,h,b,j,x,f=t(1),m=t.n(f),g=t(26),O=t.n(g),v=t(8),w=t(5),y=t(12),C=t(6),k=t.n(C),S=t(7),F=t(3),T=t(2),D=T.c.button(r||(r=Object(F.a)(["\n  background: ",";\n  margin: 0px 10px;\n  cursor: pointer;\n  &:hover {\n    background: #ffd580;\n  }\n"])),(function(e){return e.theme.bg})),L=T.c.h2(c||(c=Object(F.a)(["\n  padding: 0px 10px;\n"]))),E=T.c.input(a||(a=Object(F.a)(["\n  margin-right: 10px;\n  background: ",";\n  &:focus {\n    outline: none;\n    border-color: #ffd580;\n  }\n"])),(function(e){return e.theme.bg})),I=T.c.div(i||(i=Object(F.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  margin: 10px;\n  background: ",";\n  border: 2px solid lightgray;\n  border-radius: 5px;\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),\n    0 2px 4px -1px rgba(0, 0, 0, 0.06);\n"])),(function(e){return e.theme.bg})),J=T.c.img(o||(o=Object(F.a)(["\n  height: inherit;\n  width: auto;\n  padding: 10px;\n"]))),N=T.c.nav(d||(d=Object(F.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.06);\n  height: fit-content;\n  padding: 20px 0px;\n"]))),z=T.c.section(s||(s=Object(F.a)(["\n  margin: 10px;\n"]))),H=T.c.div(u||(u=Object(F.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n"]))),U=T.c.div(l||(l=Object(F.a)(["\n  height: 40vh;\n"]))),G=Object(T.c)(I)(p||(p=Object(F.a)(["\n  height: 100%;\n  width: auto;\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: row;\n  justify-content: space-around;\n  align-items: center;\n  div {\n    padding: 5px;\n  }\n"]))),M=Object(T.c)(H)(h||(h=Object(F.a)(["\n  min-height: 30vh;\n  padding: 10px;\n  justify-content: space-evenly;\n"]))),V=Object(T.c)(I)(b||(b=Object(F.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding: 10px;\n  div {\n    padding: 5px;\n  }\n"]))),W=Object(T.c)(I)(j||(j=Object(F.a)(["\n  display: flex;\n  align-items: center;\n  height: ",";\n  width: ",";\n  border: 1px solid ",";\n"])),(function(e){return e.height}),(function(e){return e.width}),(function(e){return e.border})),_={light:{bg:"none"},dark:{bg:"#c7ffddff"}},q=Object(f.createContext)(null),B=t(15),P=t.n(B),A=function(){var e=Object(S.a)(k.a.mark((function e(n){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",P()({url:"https://".concat("api.openweathermap.org/data/2.5/","weather?q=").concat(n,"&appid=").concat("79ab7da9722f1ab320fcf725388d7613"),type:"GET"}).then((function(e){return e})).catch((function(e){return console.log(e),e})));case 1:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),K=function(){var e=Object(S.a)(k.a.mark((function e(n,t){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",P()({url:"https://api.openweathermap.org/data/2.5/onecall?lat=".concat(n,"&lon=").concat(t,"&units=imperial&exclude=minutely,hourly,alerts&appid=").concat("79ab7da9722f1ab320fcf725388d7613"),type:"GET"}).then((function(e){return e})).catch((function(e){return console.log(e),e})));case 1:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),Q=function(e,n){var t={current:null,forecast:null},r=[],c={name:e,date:"get moment",icon:null,temp:null,maxTemp:null,minTemp:null,windSpd:null,humidity:null,uv:null},a=Object(w.a)({},c);a.date=R(n.current.dt),a.icon=n.current.weather[0].icon,a.temp=n.current.temp,a.windSpd=n.current.wind_speed,a.humidity=n.current.humidity,a.uv=n.current.uvi,t.current=a;for(var i=1;i<6;i++){var o=n.daily[i],d=Object(w.a)({},c);d.date=R(o.dt),d.icon=o.weather[0].icon,d.maxTemp=o.temp.max,d.minTemp=o.temp.min,d.windSpd=o.wind_speed,d.humidity=o.humidity,d.uv=o.uvi,r.push(d)}return t.forecast=r,t},R=function(e){return new Date(1e3*e).toLocaleDateString("en-US")},X=function(e){return["50d","13d","10d","11d"].includes(e)?"red":["09d"].includes(e)?"yellow":"green"},Y=t(0),Z=function(){var e=Object(f.useContext)(q),n=e.local,t=e.setLocal,r=Object(f.useState)(""),c=Object(y.a)(r,2),a=c[0],i=c[1],o=function(e){var t=Object(v.a)(n.searchedCities);return n.searchedCities.includes(e)||t.push(e),t},d=function(){var e=Object(S.a)(k.a.mark((function e(){var r,c,i,d;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A(a);case 2:return r=e.sent,c=r.data,e.next=6,K(c.coord.lat,c.coord.lon);case 6:i=e.sent,d=Q(c.name,i.data),t(Object(w.a)(Object(w.a)({},n),{},{searchedCities:o(c.name),currentCity:c.name,currentCityData:d.current,currentCityForecast:d.forecast}));case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(Y.jsxs)("div",{children:[Object(Y.jsx)(E,{type:"text",onChange:function(e){return i(e.target.value)},value:a,placeholder:"Search for a City",list:"hist"}),Object(Y.jsx)(D,{onClick:a.length>0&&d,children:"Search City"})]})},$=t.p+"static/media/weatherLogo.4595304d.png",ee=function(){var e=Object(f.useContext)(q),n=e.local,t=e.setLocal,r=function(){var e=Object(S.a)(k.a.mark((function e(r){var a,i,o,d;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A(r);case 2:return a=e.sent,i=a.data,e.next=6,K(i.coord.lat,i.coord.lon);case 6:o=e.sent,d=Q(i.name,o.data),t(Object(w.a)(Object(w.a)({},n),{},{searchedCities:c(i.name),currentCity:i.name,currentCityData:d.current,currentCityForecast:d.forecast}));case 9:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),c=function(e){var t=Object(v.a)(n.searchedCities);return n.searchedCities.includes(e)||t.push(e),t},a=n.searchedCities.length?Object(Y.jsx)(H,{style:{flex:"0 0 100%"},children:n.searchedCities.map((function(e){return Object(Y.jsx)(D,{value:e,onClick:function(){return r(e)},children:e},e)}))}):null;return Object(Y.jsxs)(N,{className:"nav-container",children:[Object(Y.jsx)(W,{height:"50px",width:"auto",children:null==n.currentCityData?Object(Y.jsx)(J,{src:$}):Object(Y.jsx)(L,{children:n.currentCityData.name})}),Object(Y.jsx)(Z,{}),a]})},ne=function(){var e=Object(f.useContext)(q).local.currentCityData,n=e.date,t=e.icon,r=e.temp,c=e.windSpd,a=e.humidity,i=e.uv,o="http://openweathermap.org/img/wn/".concat(t,"@2x.png"),d=X(t);return Object(Y.jsx)(U,{children:Object(Y.jsxs)(G,{children:[Object(Y.jsxs)("div",{children:[Object(Y.jsx)("div",{children:n}),Object(Y.jsx)(W,{width:"auto",border:d,children:Object(Y.jsx)(J,{src:o,alt:"weather icon"})})]}),Object(Y.jsxs)("div",{children:[Object(Y.jsxs)("div",{children:["Current Temp: ",r,"\xb0F"]}),Object(Y.jsxs)("div",{children:["Wind Speed: ",c,"mph"]}),Object(Y.jsxs)("div",{children:["Humidity: ",a,"%"]}),Object(Y.jsxs)("div",{children:["UV Index: ",i]})]})]})})},te=function(e){var n=e.data,t=n.date,r=n.icon,c=n.maxTemp,a=n.minTemp,i=n.windSpd,o=n.humidity,d=n.uv,s="http://openweathermap.org/img/wn/".concat(r,"@2x.png"),u=X(r);return Object(Y.jsxs)(V,{children:[Object(Y.jsx)("div",{children:t}),Object(Y.jsx)(W,{width:"auto",border:u,children:Object(Y.jsx)(J,{src:s,alt:"weather icon"})}),Object(Y.jsxs)("div",{children:["Hi: ",c,"\xb0F"]}),Object(Y.jsxs)("div",{children:["Low: ",a,"\xb0F"]}),Object(Y.jsxs)("div",{children:["Wind Speed: ",i,"mph"]}),Object(Y.jsxs)("div",{children:["Humidity: ",o,"%"]}),Object(Y.jsxs)("div",{children:["UV Index: ",d]})]})},re=function(){var e=Object(f.useContext)(q).local;return Object(Y.jsx)(M,{children:e.currentCityForecast?e.currentCityForecast.map((function(e,n){return Object(Y.jsx)(te,{data:e},n)})):"loading forecast data"})},ce=function(){return Object(Y.jsxs)(Y.Fragment,{children:[Object(Y.jsx)(z,{className:"display-body-container",children:Object(Y.jsx)(ne,{})}),Object(Y.jsx)(z,{children:Object(Y.jsx)(re,{})})]})},ae=function(){var e=Object(f.useState)({searchedCities:[],currentCity:null,currentCityData:null,currentCityForecast:null}),n=Object(y.a)(e,2),t=n[0],r=n[1];Object(f.useEffect)((function(){var e=JSON.parse(localStorage.getItem("prevCities"));null!==e&&r(Object(w.a)(Object(w.a)({},t),{},{searchedCities:Object(v.a)(e)}))}),[]),Object(f.useEffect)((function(){localStorage.setItem("prevCities",JSON.stringify(t.searchedCities))}),[t.searchedCities]);var c=Object(f.useMemo)((function(){return{local:t,setLocal:r}}),[t,r]);return Object(Y.jsx)(q.Provider,{value:c,children:Object(Y.jsxs)(T.a,{theme:_.light,children:[Object(Y.jsx)(ee,{}),t.currentCity&&Object(Y.jsx)(ce,{})]})})},ie=Object(T.b)(x||(x=Object(F.a)(["\n*,\n*:before,\n*:after {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nhtml {\n  background: linear-gradient(129.07deg, #ffd7b3ff 0%, #c7ffddff 100%);\n  background-size: cover;\n  min-height: 100vh;\n}\n\nbody {\n  height: 100%;\n  line-height: 1;\n  font-family: sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-overflow-scrolling: auto;\n  margin: 0;\n}\n\nbutton, input {\n  padding: 10px;\n  border: 2px solid lightgray;\n  border-radius: 5px;\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),\n    0 2px 4px -1px rgba(0, 0, 0, 0.06);\n}\n\noption {\n  background: red;\n}\n\n#root {\n  min-height: 100%;\n  margin: 0px 10vw;\n}\n\n@media screen and (max-width: 1200px) {\n  #root {\n    margin: 0px 7vw;\n  }\n}\n\n@media screen and (max-width: 992px) {\n  #root {\n    margin: 0px 4vw;\n  }\n}\n"])));O.a.render(Object(Y.jsxs)(m.a.StrictMode,{children:[Object(Y.jsx)(ie,{}),Object(Y.jsx)(ae,{})]}),document.getElementById("root"))}},[[54,1,2]]]);
//# sourceMappingURL=main.35b5278a.chunk.js.map