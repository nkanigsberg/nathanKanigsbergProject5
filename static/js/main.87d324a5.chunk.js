(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{37:function(e,t,a){e.exports=a(80)},42:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},65:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){},72:function(e,t,a){},73:function(e,t,a){},74:function(e,t,a){},75:function(e,t,a){},76:function(e,t,a){},77:function(e,t,a){},80:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(22),i=a.n(r),c=(a(42),a(8)),l=a(9),s=a(11),u=a(10),m=a(23),p=a.n(m);a(43),a(45);p.a.initializeApp({apiKey:"AIzaSyDGLQ0nTfj4mfoTHmafn5bUwAJLfz7bf_k",authDomain:"weather-app-db102.firebaseapp.com",databaseURL:"https://weather-app-db102.firebaseio.com",projectId:"weather-app-db102",storageBucket:"weather-app-db102.appspot.com",messagingSenderId:"43100392282",appId:"1:43100392282:web:a7de5bc1a8d3446cb18163"});var d=p.a,h=(a(47),a(48),a(14)),v=a.n(h);a(65);function f(e){var t=e.type,a=e.description;return o.a.createElement("img",{className:"weather-icon",src:"".concat("http://openweathermap.org/img/wn/").concat(t,"@2x.png"),alt:a})}var E=a(15),g=a(16);a(70);function y(e){return o.a.createElement("form",{action:"submit",className:"searchBar"},o.a.createElement("label",{htmlFor:e.id},"Search Location "),o.a.createElement("input",{onChange:e.change,type:"text",id:e.id,placeholder:e.placeholder}),o.a.createElement("button",{onClick:e.submit,type:"submit","aria-label":"Search Location",title:"Search Location"},o.a.createElement(E.a,{icon:g.b})),o.a.createElement("button",{onClick:e.getLocation,"aria-label":"Use Current Location",title:"Use Current Location"},o.a.createElement(E.a,{icon:g.a})))}var b=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this)).updateUnits=e.updateUnits,n}return Object(l.a)(a,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("button",{value:"metric",onClick:this.updateUnits},"metric")," / ",o.a.createElement("button",{value:"imperial",onClick:this.updateUnits},"imperial")," / ",o.a.createElement("button",{value:"kelvin",onClick:this.updateUnits},"kelvin"))}}]),a}(n.Component),L=(a(71),function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this)).getLocation=e.getLocation,n.submit=e.submit,n.change=e.change,n.updateUnits=e.updateUnits,console.log(n.updateUnits),n}return Object(l.a)(a,[{key:"render",value:function(){return o.a.createElement("header",null,o.a.createElement("div",{className:"wrapper"},o.a.createElement("div",{className:"header-container"},o.a.createElement("h1",null,"Weather App"),o.a.createElement("div",{className:"header-right"},o.a.createElement(b,{updateUnits:this.updateUnits}),o.a.createElement(y,{getLocation:this.getLocation,submit:this.submit,change:this.change,id:"search-location",placeholder:"Enter Location"})))))}}]),a}(n.Component));function w(e){var t=e.temp,a=e.units;return o.a.createElement("span",null,t.toFixed(1),a?"metric"===a?"\xb0C":"imperial"===a?"\xb0F":"K":"")}function k(e){var t=e.time.getHours(),a=t%12?(t%12).toString():"12";return a+=t/12>=1?"pm":"am",o.a.createElement("span",null,a)}function N(e){var t=e.time,a=t.lastIndexOf(" ");return t=t.substring(0,a),o.a.createElement("span",null,t)}function C(e){var t=e.city,a=e.province,n=e.country;return o.a.createElement("span",null,"".concat(t?"".concat(t,", "):"").concat(a?"".concat(a,", "):"").concat(n))}a(72);function S(e){var t=e.city,a=e.province,n=e.country,r=e.weather,i=e.units,c=new Date(1e3*r.current.dt);return o.a.createElement("div",{className:"currentWeather-container"},o.a.createElement("h2",null,o.a.createElement(C,{city:t,province:a,country:n})),o.a.createElement("p",null,c.toDateString()),o.a.createElement("div",{className:"currentWeather"},o.a.createElement("p",{className:"description"},r.current.weather[0].description),o.a.createElement(f,{type:r.current.weather[0].icon,description:r.current.weather[0].description}),o.a.createElement("div",{className:"currentWeather-right"},o.a.createElement("h3",null,o.a.createElement(w,{temp:r.current.temp,units:i})),o.a.createElement("p",null,"Feels like:"," ",o.a.createElement(w,{temp:r.current.feels_like,units:i})))))}a(73);function j(e){var t=e.daily,a=e.units;return o.a.createElement("div",{className:"forecast-week-container"},o.a.createElement("h2",null,"Weekly Forecast"),o.a.createElement("div",{className:"forecast-week"},t.map((function(e,t){if(t>0){var n=new Date(1e3*e.dt);return o.a.createElement("div",{className:"forecast-day"},o.a.createElement("p",null,o.a.createElement(N,{time:n.toDateString()})),o.a.createElement(f,{type:e.weather[0].icon,description:e.weather[0].description}),o.a.createElement("p",null,e.weather[0].description),o.a.createElement("p",null,o.a.createElement(w,{temp:e.temp.max,units:""})," / ",o.a.createElement(w,{temp:e.temp.min,units:a})))}}))))}a(74);function O(e){var t=e.hourly,a=e.units;return o.a.createElement("div",{className:"forecast-hourly-container"},o.a.createElement("h2",null,"Hourly Forecast"),o.a.createElement("div",{className:"forecast-hourly"},t.map((function(e,t){var n=new Date(1e3*e.dt);if(t<12)return o.a.createElement("div",{className:"forecast-hour"},o.a.createElement("p",null,o.a.createElement(k,{time:n})),o.a.createElement("p",null,o.a.createElement(w,{temp:e.temp,units:a})),o.a.createElement(f,{type:e.weather[0].icon,description:e.weather[0].description}))}))))}a(75);function U(e){var t=e.locations,a=e.onSelect,n=e.onRemove;return o.a.createElement("div",{className:"LocationList"},o.a.createElement("h3",null,"Saved Locations"),o.a.createElement("ul",null,t.length?t.map((function(e){var t=e.data,r=t.city,i=t.state,c=t.country;return o.a.createElement("div",{className:"LocationList-loc"},o.a.createElement("li",{key:e.key},o.a.createElement("button",{onClick:function(){return a(e.data)}},o.a.createElement(C,{city:r,province:i,country:c}))),o.a.createElement("button",{onClick:function(){return n(e.key)},className:"LocationList-remove","aria-label":"Remove",title:"Remove"},o.a.createElement(E.a,{icon:g.c})))})):o.a.createElement("li",null,o.a.createElement("p",null,"No locations in list"))))}a(76);var _=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return o.a.createElement("footer",null,o.a.createElement("div",{className:"wrapper"},o.a.createElement("div",{className:"footer-container"},o.a.createElement("p",null,"Made at Juno College"))))}}]),a}(n.Component),T=a(83),W=a(82);a(77);function D(e){var t=e.lat,a=e.lon,n=e.mapType,r=e.onChange,i=[t,a];return o.a.createElement("div",{className:"MapComponent"},o.a.createElement(T.a,{center:i,zoom:5},o.a.createElement(W.a,{attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.osm.org/{z}/{x}/{y}.png"}),o.a.createElement(W.a,{url:"https://tile.openweathermap.org/map/".concat(n,"/{z}/{x}/{y}.png?appid=4de58afe7c0aa78a01498b122c46d7e2")})),o.a.createElement("form",{onChange:function(e){r(e.target.value)},className:"mapLayer",action:"#"},o.a.createElement("div",{className:"mapLayer-control"},o.a.createElement("input",{type:"radio",name:"mapLayerControl",id:"clouds_new",value:"clouds_new",checked:"clouds_new"===n}),o.a.createElement("label",{htmlFor:"clouds_new"},"Clouds")),o.a.createElement("div",{className:"mapLayer-control"},o.a.createElement("input",{type:"radio",name:"mapLayerControl",id:"precipitation_new",value:"precipitation_new",checked:"precipitation_new"===n}),o.a.createElement("label",{htmlFor:"precipitation_new"},"Precipitation")),o.a.createElement("div",{className:"mapLayer-control"},o.a.createElement("input",{type:"radio",name:"mapLayerControl",id:"temp_new",value:"temp_new",checked:"temp_new"===n}),o.a.createElement("label",{htmlFor:"temp_new"},"Temperature"))))}var F=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).getLocation=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;t&&t.preventDefault(),"geolocation"in navigator?navigator.geolocation.getCurrentPosition((function(t){e.setState({lat:t.coords.latitude,lon:t.coords.longitude});var a=e.state,n=a.lat,o=a.lon,r=a.units;e.getCity(n,o),e.getWeather(n,o,r)})):console.log("No geolocation")},e.searchLocation=function(t){var a;t.preventDefault(),console.log("location search"),e.state.location&&(a=e.state.location,v()({method:"GET",url:"https://us1.locationiq.com/v1/search.php",dataResponse:"json",params:{format:"json",key:"a2f6bb0bb601e5",q:a}})).then((function(t){var a=t.data[0];e.setState({lat:a.lat,lon:a.lon});var n=e.state,o=n.lat,r=n.lon,i=n.units;e.getCity(o,r),e.getWeather(o,r,i)}))},e.updateLocationState=function(t){e.setState({location:t.target.value})},e.updateUnits=function(t){var a=e.state,n=a.lat,o=a.lon;a.units;e.getWeather(n,o,t.target.value)},e.selectLocation=function(t){console.log("select ",t),e.getWeather(t.lat,t.lon,e.state.units),e.setState({lat:t.lat,lon:t.lon,city:t.city,province:t.state,country:t.country,locationLoading:!1})},e.removeLocation=function(t){var a=d.database().ref();console.log("remove",t),a.child("users").child(e.state.uid).child(t).remove()},e.updateMapType=function(t){e.setState({mapType:t})},e.state={lat:43.6534,lon:-79.3839,location:"",weather:{},city:"",province:"",country:"",isLoading:!1,weatherLoading:!0,locationLoading:!0,firebaseLoading:!0,units:"metric",locationList:[],mapType:"clouds_new",uid:""},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.getLocation(),d.database().ref().on("value",(function(t){var a=[],n=t.val();if(n){var o=n.users[e.state.uid];for(var r in o)a.push({key:r,data:o[r]});e.setState({locationList:a,firebaseLoading:!1})}else e.setState({locationList:[],firebaseLoading:!1})})),d.auth().signInAnonymously().catch((function(e){console.log(e.code),console.log(e.message)})),d.auth().onAuthStateChanged((function(t){if(t){t.isAnonymous;var a=t.uid;console.log(a),e.setState({uid:a})}else console.log("signed out")}))}},{key:"getCity",value:function(e,t){var a,n,o=this;this.setState({isLoading:!0}),(a=e,n=t,v()({method:"GET",url:"https://us1.locationiq.com/v1/reverse.php",dataResponse:"json",params:{format:"json",key:"a2f6bb0bb601e5",lat:a,lon:n}})).then((function(e){var t=e.data.address,a=t.city,n=t.state,r=t.country;o.setState({city:a,province:n,country:r,locationLoading:!1},o.updateList)}))}},{key:"updateList",value:function(){if(console.log(this.state.firebaseLoading),!this.state.firebaseLoading){var e=d.database().ref(),t=!0;for(var a in this.state.locationList){var n=this.state.locationList;n[a].data.city===this.state.city&&n[a].data.state===this.state.province&&n[a].data.country===this.state.country&&(t=!1)}t&&this.state.locationList.length<6&&(console.log("pushing"),e.child("users").child(this.state.uid).push({city:this.state.city?this.state.city:"",state:this.state.province?this.state.province:"",country:this.state.country,lat:this.state.lat,lon:this.state.lon}))}}},{key:"getWeather",value:function(e,t,a){var n=this;(function(e,t,a){return v()({method:"GET",url:"https://api.openweathermap.org/data/2.5/onecall",dataResponse:"json",params:{appid:"4de58afe7c0aa78a01498b122c46d7e2",units:a,lat:e,lon:t}})})(e,t,a).then((function(e){n.setState({weather:e.data,weatherLoading:!1,units:a})}))}},{key:"render",value:function(){var e=this.state,t=e.weather,a=e.weatherLoading,n=e.locationLoading,r=e.isLoading,i=e.city,c=e.province,l=e.country,s=e.units,u=e.lat,m=e.lon,p=e.mapType;return o.a.createElement("div",{className:"App"},o.a.createElement(L,{getLocation:this.getLocation,submit:this.searchLocation,change:this.updateLocationState,updateUnits:this.updateUnits}),o.a.createElement("main",null,o.a.createElement("div",{className:"wrapper"},o.a.createElement("div",{class:"main-container"},o.a.createElement("div",{class:"main-left"},a||n?o.a.createElement("p",null,r?"Loading...":""):o.a.createElement(o.a.Fragment,null,o.a.createElement(S,{city:i,province:c,country:l,weather:t,units:s}),o.a.createElement(j,{daily:t.daily,units:s}),o.a.createElement(O,{hourly:t.hourly,units:s}))),o.a.createElement("div",{className:"main-right"},o.a.createElement(U,{onSelect:this.selectLocation,onRemove:this.removeLocation,locations:this.state.locationList}),o.a.createElement(D,{lat:u,lon:m,mapType:p,onChange:this.updateMapType}))))),o.a.createElement(_,null))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(F,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[37,1,2]]]);
//# sourceMappingURL=main.87d324a5.chunk.js.map