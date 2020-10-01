(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{37:function(e,t,a){e.exports=a(83)},42:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){},71:function(e,t,a){},72:function(e,t,a){},73:function(e,t,a){},74:function(e,t,a){},75:function(e,t,a){},76:function(e,t,a){},77:function(e,t,a){},78:function(e,t,a){},79:function(e,t,a){},82:function(e,t,a){},83:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(35),o=a.n(c),i=(a(42),a(14)),l=a(15),s=a(18),u=a(17),m=a(22),p=a.n(m);a(43),a(45);p.a.initializeApp({apiKey:"AIzaSyDGLQ0nTfj4mfoTHmafn5bUwAJLfz7bf_k",authDomain:"weather-app-db102.firebaseapp.com",databaseURL:"https://weather-app-db102.firebaseio.com",projectId:"weather-app-db102",storageBucket:"weather-app-db102.appspot.com",messagingSenderId:"43100392282",appId:"1:43100392282:web:a7de5bc1a8d3446cb18163"});var d=p.a,h=(a(47),a(48),a(49),a(50),a(12)),E=a.n(h);var v=a(8),f=a(9);a(71);function y(e){return r.a.createElement("form",{action:"submit",className:"searchBar"},r.a.createElement("label",{className:"sr-only",htmlFor:e.id},"Search Location"),r.a.createElement("input",{onChange:e.change,type:"text",id:e.id,placeholder:e.placeholder}),r.a.createElement("button",{onClick:e.submit,type:"submit","aria-label":"Search Location",title:"Search Location"},r.a.createElement(v.a,{icon:f.d})),r.a.createElement("button",{onClick:e.getLocation,"aria-label":"Use Current Location",title:"Use Current Location"},r.a.createElement(v.a,{icon:f.c})))}a(72);function g(e){var t=e.updateUnits,a=e.units;return r.a.createElement("div",{className:"Units"},r.a.createElement("button",{className:"metric"===a?"selected":"",value:"metric",onClick:t},"metric"),r.a.createElement("span",null,"/"),r.a.createElement("button",{className:"imperial"===a?"selected":"",value:"imperial",onClick:t},"imperial"),r.a.createElement("span",null,"/"),r.a.createElement("button",{className:"kelvin"===a?"selected":"",value:"kelvin",onClick:t},"kelvin"))}a(73);function b(e){var t=e.type,a=e.description;return r.a.createElement("img",{className:"weather-icon",src:"".concat("http://openweathermap.org/img/wn/").concat(t,"@2x.png"),alt:a})}a(74);function L(e){var t=e.getLocation,a=e.submit,n=e.change,c=e.updateUnits,o=e.units;return r.a.createElement("header",null,r.a.createElement("div",{className:"wrapper"},r.a.createElement("div",{className:"header-container"},r.a.createElement("h1",null,r.a.createElement("a",{href:"#"},r.a.createElement(b,{type:"02d",description:"TheWeather Logo"}),r.a.createElement("span",null,"The"),"Weather")),r.a.createElement("div",{className:"header-right"},r.a.createElement(g,{updateUnits:c,units:o}),r.a.createElement(y,{getLocation:t,submit:a,change:n,id:"search-location",placeholder:"Enter Location"})))))}function w(e){var t=e.temp,a=e.units;return r.a.createElement("span",null,t.toFixed(1),a?"metric"===a?"\xb0C":"imperial"===a?"\xb0F":"K":"")}function N(e){var t=e.time,a=t.getHours(),n=t.getMinutes().toString().padStart(2,"0"),c=a%12?"".concat((a%12).toString(),":").concat(n):"12:".concat(n);return c+=a/12>=1?"pm":"am",r.a.createElement("span",null,c)}function k(e){var t=e.city,a=e.province,n=e.country;return r.a.createElement("span",null,"".concat(t?"".concat(t,", "):"").concat(a?"".concat(a,", "):"").concat(n))}a(75);function S(e){var t=e.city,a=e.province,n=e.country,c=e.weather,o=e.units,i=new Date(1e3*c.current.dt);return r.a.createElement("div",{className:"currentWeather-container"},r.a.createElement("h2",null,r.a.createElement(k,{city:t,province:a,country:n})),r.a.createElement("p",null,i.toDateString()),r.a.createElement("div",{className:"currentWeather"},r.a.createElement("div",{class:"currentWeather-left"},r.a.createElement("p",null,"Humidity: ",c.current.humidity,"%"),r.a.createElement("p",null,"Sunrise:"," ",r.a.createElement(N,{time:new Date(1e3*c.current.sunrise)})),r.a.createElement("p",null,"Sunset:"," ",r.a.createElement(N,{time:new Date(1e3*c.current.sunset)}))),r.a.createElement("div",{className:"currentWeather-middle"},r.a.createElement("p",{className:"description"},c.current.weather[0].description),r.a.createElement(b,{type:c.current.weather[0].icon,description:c.current.weather[0].description})),r.a.createElement("div",{className:"currentWeather-right"},r.a.createElement("p",{className:"currentWeather-temp"},r.a.createElement(w,{temp:c.current.temp,units:o})),r.a.createElement("p",null,"Feels like:"," ",r.a.createElement(w,{temp:c.current.feels_like,units:o})))))}function C(e){var t=e.time,a=t.lastIndexOf(" ");return t=t.substring(0,a),r.a.createElement("span",null,t)}a(76);function j(e){var t=e.daily,a=e.units;return r.a.createElement("div",{className:"forecast-week-container"},r.a.createElement("h2",null,"Weekly Forecast"),r.a.createElement("div",{className:"forecast-week"},t.map((function(e,t){if(t>0){var n=new Date(1e3*e.dt);return r.a.createElement("div",{className:"forecast-day"},r.a.createElement("p",{className:"forecast-date"},r.a.createElement(C,{time:n.toDateString()})),r.a.createElement(b,{type:e.weather[0].icon,description:e.weather[0].description}),r.a.createElement("p",{className:"description"},e.weather[0].description),r.a.createElement("p",null,r.a.createElement(w,{temp:e.temp.max,units:""})," / ",r.a.createElement(w,{temp:e.temp.min,units:a})))}}))))}function W(e){var t=e.time.getHours(),a=t%12?(t%12).toString():"12";return a+=t/12>=1?"pm":"am",r.a.createElement("span",null,a)}a(77);function T(e){var t=e.hourly,a=e.units,n=e.page,c=e.scroll;return r.a.createElement("div",{className:"forecast-hourly-container"},r.a.createElement("h2",null,"Hourly Forecast"),r.a.createElement("div",{className:"forecast-hourly"},r.a.createElement("button",{className:0===n?"disabled":"",onClick:function(){return c(n-1)},"aria-label":"Scroll Left"},r.a.createElement(v.a,{icon:f.a})),t.map((function(e,t){var c=new Date(1e3*e.dt);if(t>=12*n&&t<12*(n+1))return r.a.createElement("div",{className:"forecast-hour"},r.a.createElement("p",null,r.a.createElement(W,{time:c})),r.a.createElement("p",null,r.a.createElement(w,{temp:e.temp,units:a})),r.a.createElement(b,{type:e.weather[0].icon,description:e.weather[0].description}))})),r.a.createElement("button",{className:1===n?"disabled":"",onClick:function(){return c(n+1)},"aria-label":"Scroll Right"},r.a.createElement(v.a,{icon:f.b}))))}a(78);function _(e){var t=e.locations,a=e.onSelect,n=e.onRemove,c=e.city,o=e.state,i=e.country,l=function(e){return e.data.city===c&&e.data.state===o&&e.data.country===i};return r.a.createElement("div",{className:"LocationList"},r.a.createElement("h3",null,"Saved Locations"),r.a.createElement("ul",null,t.length?t.map((function(e){var t=e.data,c=t.city,o=t.state,i=t.country;return r.a.createElement("div",{className:"LocationList-loc ".concat(l(e)?"selected":"")},r.a.createElement("li",{key:e.key},r.a.createElement("button",{className:"LocationList-select",onClick:function(){return a(e.data)}},r.a.createElement(k,{city:c,province:o,country:i}))),r.a.createElement("button",{onClick:function(){return n(e.key)},className:"LocationList-remove","aria-label":"Remove",title:"Remove"},r.a.createElement(v.a,{icon:f.e})))})):r.a.createElement("li",null,r.a.createElement("p",null,"No locations in list"))))}var D=a(86),U=a(85);a(79);function F(e){var t=e.lat,a=e.lon,n=e.mapType,c=e.onChange,o=[t,a];return r.a.createElement("div",{className:"MapComponent"},r.a.createElement("form",{onChange:function(e){c(e.target.value)},className:"mapLayer",action:"#"},r.a.createElement("div",{className:"mapLayer-control"},r.a.createElement("input",{type:"radio",name:"mapLayerControl",id:"clouds_new",value:"clouds_new",checked:"clouds_new"===n}),r.a.createElement("label",{htmlFor:"clouds_new"},"Clouds")),r.a.createElement("div",{className:"mapLayer-control"},r.a.createElement("input",{type:"radio",name:"mapLayerControl",id:"precipitation_new",value:"precipitation_new",checked:"precipitation_new"===n}),r.a.createElement("label",{htmlFor:"precipitation_new"},"Precipitation")),r.a.createElement("div",{className:"mapLayer-control"},r.a.createElement("input",{type:"radio",name:"mapLayerControl",id:"temp_new",value:"temp_new",checked:"temp_new"===n}),r.a.createElement("label",{htmlFor:"temp_new"},"Temperature"))),r.a.createElement(D.a,{center:o,zoom:5},r.a.createElement(U.a,{attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.osm.org/{z}/{x}/{y}.png"}),r.a.createElement(U.a,{url:"https://tile.openweathermap.org/map/".concat(n,"/{z}/{x}/{y}.png?appid=4de58afe7c0aa78a01498b122c46d7e2")})))}a(82);var O=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("footer",null,r.a.createElement("div",{className:"wrapper"},r.a.createElement("div",{className:"footer-container"},r.a.createElement("p",null,"Made at ",r.a.createElement("a",{href:"https://junocollege.com/",rel:"noreferrer"},"Juno College")," by"," ",r.a.createElement("a",{href:"https://github.com/nkanigsberg",rel:"noreferrer"},"Nathan Kanigsberg")),r.a.createElement("p",null,"\xa9 Copyright 2020"))))}}]),a}(n.Component),R=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).getLocation=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;t&&t.preventDefault(),"geolocation"in navigator?navigator.geolocation.getCurrentPosition((function(t){e.setState({lat:t.coords.latitude,lon:t.coords.longitude});var a=e.state,n=a.lat,r=a.lon,c=a.units;e.getCity(n,r),e.getWeather(n,r,c)})):console.log("No geolocation")},e.searchLocation=function(t){var a;t.preventDefault(),e.state.location&&(a=e.state.location,E()({method:"GET",url:"https://us1.locationiq.com/v1/search.php",dataResponse:"json",params:{format:"json",key:"a2f6bb0bb601e5",q:a}})).then((function(t){var a=t.data[0];e.setState({lat:a.lat,lon:a.lon});var n=e.state,r=n.lat,c=n.lon,o=n.units;e.getCity(r,c),e.getWeather(r,c,o)}))},e.updateLocationState=function(t){e.setState({location:t.target.value})},e.updateUnits=function(t){var a=e.state,n=a.lat,r=a.lon;a.units;e.getWeather(n,r,t.target.value)},e.selectLocation=function(t){e.getWeather(t.lat,t.lon,e.state.units),e.setState({lat:t.lat,lon:t.lon,city:t.city,province:t.state,country:t.country,locationLoading:!1})},e.removeLocation=function(t){d.database().ref().child("users").child(e.state.uid).child(t).remove()},e.updateMapType=function(t){e.setState({mapType:t})},e.hourlyScroll=function(t){t>=0&&t<=1&&e.setState({hourlyPage:t})},e.state={lat:43.6534,lon:-79.3839,location:"",weather:{},city:"",province:"",country:"",isLoading:!1,weatherLoading:!0,locationLoading:!0,firebaseLoading:!0,units:"metric",locationList:[],mapType:"clouds_new",uid:"",hourlyPage:0},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.getLocation(),d.database().ref().on("value",(function(t){var a=[],n=t.val();if(n){var r=n.users[e.state.uid];for(var c in r)a.push({key:c,data:r[c]});e.setState({locationList:a,firebaseLoading:!1})}else e.setState({locationList:[],firebaseLoading:!1})})),d.auth().signInAnonymously().catch((function(e){console.log(e.code),console.log(e.message)})),d.auth().onAuthStateChanged((function(t){if(t){var a=t.uid;e.setState({uid:a})}else console.log("signed out")}))}},{key:"getCity",value:function(e,t){var a,n,r=this;this.setState({isLoading:!0}),(a=e,n=t,E()({method:"GET",url:"https://us1.locationiq.com/v1/reverse.php",dataResponse:"json",params:{format:"json",key:"a2f6bb0bb601e5",lat:a,lon:n}})).then((function(e){var t=e.data.address,a=t.city,n=t.state,c=t.country;r.setState({city:a,province:n,country:c,locationLoading:!1},r.updateList)}))}},{key:"updateList",value:function(){if(!this.state.firebaseLoading){var e=d.database().ref(),t=!0;for(var a in this.state.locationList){var n=this.state.locationList;n[a].data.city===this.state.city&&n[a].data.state===this.state.province&&n[a].data.country===this.state.country&&(t=!1)}t&&this.state.locationList.length<6&&e.child("users").child(this.state.uid).push({city:this.state.city?this.state.city:"",state:this.state.province?this.state.province:"",country:this.state.country,lat:this.state.lat,lon:this.state.lon})}}},{key:"getWeather",value:function(e,t,a){var n=this;(function(e,t,a){return E()({method:"GET",url:"https://api.openweathermap.org/data/2.5/onecall",dataResponse:"json",params:{appid:"4de58afe7c0aa78a01498b122c46d7e2",units:a,lat:e,lon:t}})})(e,t,a).then((function(e){n.setState({weather:e.data,weatherLoading:!1,units:a})}))}},{key:"render",value:function(){var e=this.state,t=e.weather,a=e.weatherLoading,n=e.locationLoading,c=e.isLoading,o=e.city,i=e.province,l=e.country,s=e.units,u=e.lat,m=e.lon,p=e.mapType,d=e.hourlyPage;return r.a.createElement("div",{className:"App"},r.a.createElement(L,{getLocation:this.getLocation,submit:this.searchLocation,change:this.updateLocationState,updateUnits:this.updateUnits,units:s}),r.a.createElement("main",null,r.a.createElement("div",{className:"wrapper"},r.a.createElement("div",{class:"main-container"},r.a.createElement("div",{class:"main-left"},a||n?r.a.createElement("p",null,c?"Loading...":""):r.a.createElement(r.a.Fragment,null,r.a.createElement(S,{city:o,province:i,country:l,weather:t,units:s}),r.a.createElement(j,{daily:t.daily,units:s}),r.a.createElement(T,{hourly:t.hourly,units:s,page:d,scroll:this.hourlyScroll}))),r.a.createElement("div",{className:"main-right"},r.a.createElement(_,{onSelect:this.selectLocation,onRemove:this.removeLocation,locations:this.state.locationList,city:o,state:i,country:l}),r.a.createElement(F,{lat:u,lon:m,mapType:p,onChange:this.updateMapType}))))),r.a.createElement(O,null))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(R,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[37,1,2]]]);
//# sourceMappingURL=main.9004fc7f.chunk.js.map