<<<<<<< HEAD:build/static/js/NodeMap.f0d3f338.chunk.js
(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{3181:function(a,t,e){},3241:function(a,t,e){"use strict";e.r(t),e.d(t,"default",function(){return m});var r=e(14),n=e(15),i=e(21),o=e(20),s=e(22),p=e(0),l=e.n(p),c=e(2393),d=e.n(c),u=(e(3179),e(3180),e(3181),e(3182),e(3183),e(3184),e(1247)),m=function(a){function t(){return Object(r.a)(this,t),Object(i.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(s.a)(t,a),Object(n.a)(t,[{key:"componentDidMount",value:function(){var a=this.props.nodes,t=[],e={},r=[];if(u.a.mapChart.series[0].geoCoord={},u.a.mapChart.series[1].markPoint.data=[],a.length){var n=!0,i=!1,o=void 0;try{for(var s,p=a[Symbol.iterator]();!(n=(s=p.next()).done);n=!0){var l=s.value;t.push([l.lat,l.lng,l.ip]),e[l.ip]=[l.lng,l.lat],r.push({name:l.ip,ip:l.ip})}}catch(j){i=!0,o=j}finally{try{n||null==p.return||p.return()}finally{if(i)throw o}}var c=t,m=d.a.map(this.$ref,{maxZoom:18,minZoom:2,maxBounds:[[-90,-180],[90,180]]}),h=d.a.latLng(-90,-120),v=d.a.latLng(90,120);d.a.latLngBounds(h,v),d.a.tileLayer("https://api.mapbox.com/styles/v1/mapbox/dark-v9/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoidHJvbm5ldHdvcmsiLCJhIjoiY2prODN1cms2MDEwbzNxcHE3bzJkdTZ6ayJ9.QyBCtvwwMp8RK7V3kTbr_Q").addTo(m);m.setView(d.a.latLng(0,13.114129),1);for(var f=d.a.markerClusterGroup(),y=0;y<c.length;y++){var b=c[y],w=b[2],g=d.a.marker(new d.a.LatLng(b[0],b[1]),{title:w});g.bindPopup(w),f.addLayer(g)}m.addLayer(f);var k=new d.a.echartsLayer(m,echarts),C=k.getEchartsContainer(),L=k.initECharts(C);window.onresize=L.onresize,u.a.mapChart.series[0].geoCoord=e,u.a.mapChart.series[1].markPoint.data=r,k.setOption(u.a.mapChart)}}},{key:"render",value:function(){var a=this,t=this.props.className;return l.a.createElement("div",{style:{height:600},className:t+" map-2d",ref:function(t){return a.$ref=t}})}}]),t}(p.Component)}}]);
=======
(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{3432:function(a,t,e){},3494:function(a,t,e){"use strict";e.r(t),e.d(t,"default",function(){return m});var r=e(15),n=e(14),i=e(21),o=e(20),s=e(22),p=e(0),l=e.n(p),c=e(2425),d=e.n(c),u=(e(3430),e(3431),e(3432),e(3433),e(3434),e(3435),e(1503)),m=function(a){function t(){return Object(r.a)(this,t),Object(i.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(s.a)(t,a),Object(n.a)(t,[{key:"componentDidMount",value:function(){var a=this.props.nodes,t=[],e={},r=[];if(u.a.mapChart.series[0].geoCoord={},u.a.mapChart.series[1].markPoint.data=[],a.length){var n=!0,i=!1,o=void 0;try{for(var s,p=a[Symbol.iterator]();!(n=(s=p.next()).done);n=!0){var l=s.value;t.push([l.lat,l.lng,l.ip]),e[l.ip]=[l.lng,l.lat],r.push({name:l.ip,ip:l.ip})}}catch(a){i=!0,o=a}finally{try{n||null==p.return||p.return()}finally{if(i)throw o}}var c=t,m=d.a.map(this.$ref,{maxZoom:18,minZoom:2,maxBounds:[[-90,-180],[90,180]]}),h=d.a.latLng(-90,-120),v=d.a.latLng(90,120);d.a.latLngBounds(h,v),d.a.tileLayer("https://api.mapbox.com/styles/v1/mapbox/dark-v9/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoidHJvbm5ldHdvcmsiLCJhIjoiY2prODN1cms2MDEwbzNxcHE3bzJkdTZ6ayJ9.QyBCtvwwMp8RK7V3kTbr_Q").addTo(m),m.setView(d.a.latLng(0,13.114129),1);for(var f=d.a.markerClusterGroup(),y=0;y<c.length;y++){var b=c[y],w=b[2],g=d.a.marker(new d.a.LatLng(b[0],b[1]),{title:w});g.bindPopup(w),f.addLayer(g)}m.addLayer(f);var k=new d.a.echartsLayer(m,echarts),C=k.getEchartsContainer(),L=k.initECharts(C);window.onresize=L.onresize,u.a.mapChart.series[0].geoCoord=e,u.a.mapChart.series[1].markPoint.data=r,k.setOption(u.a.mapChart)}}},{key:"render",value:function(){var a=this,t=this.props.className;return l.a.createElement("div",{style:{height:600},className:t+" map-2d",ref:function(t){return a.$ref=t}})}}]),t}(p.Component)}}]);
>>>>>>> master:build/static/js/NodeMap.d622e0c8.chunk.js
