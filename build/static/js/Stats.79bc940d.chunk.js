(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{3450:function(e,a,t){"use strict";t.r(a);var c=t(2),s=t.n(c),l=t(1365),r=t.n(l),n=t(82),m=t.n(n),i=t(5),o=t(16),d=t(15),u=t(138),v=t(21),h=t(20),E=t(0),p=t.n(E),N=t(9),b=t.n(N),f=t(3),y=t(17),g=t(4),w=t(28),S=t(11),k=t(40),_=t(64),O=t(276),x=t(130),j=t.n(x),T=function(e){Object(v.a)(E,e);var a,c,l,n=Object(h.a)(E);function E(){var e;return Object(o.a)(this,E),(e=n.call(this)).getScrollsIds=function(){var a=e.state.tabs,t=[];a.forEach(function(e,a){var c=j()("#"+e.id);c&&t.push({key:e.id,offsetTop:c.offset().top})});var c=Object(u.a)(e);window.onscroll=function(){c.onScrollEvent(t)}},e.updateHash=function(a){window.location.hash="#/data/stats",e.setState({scrollsId:a})},e.scrollToAnchor=function(e){if(e||0===e){var a=document.getElementById(e);a&&a.scrollIntoView({block:"center",behavior:"smooth"})}},e.state={accounts:null,transactionStats:null,blockStats:null,transactionValueStats:null,txOverviewStats:null,addressesStats:null,blockSizeStats:null,blockchainSizeStats:null,priceStats:null,volume:null,pieChart:null,supplyTypesChart:null,tabs:[{name:"charts_transaction",id:"transfer"},{name:"charts_circulation",id:"currency"},{name:"contract_code_overview_account",id:"address"},{name:"charts_block",id:"block"},{name:"charts_contract",id:"contract"},{name:"charts_SR",id:"sr"},{name:"chart_network",id:"network"}],scrollsId:"",linkIds:[]},e}return Object(d.a)(E,[{key:"loadAccounts",value:(l=Object(i.a)(s.a.mark(function e(){var a,t;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.b.getAccounts({limit:35,sort:"-balance"});case 2:a=e.sent,t=a.accounts,this.setState({accounts:m()(t,function(e){return!r()(k.f,e.address)}).slice(0,10).map(function(e){return{name:e.address,value:e.balance/g.L}})});case 5:case"end":return e.stop()}},e,this)})),function(){return l.apply(this,arguments)})},{key:"loadStats",value:(c=Object(i.a)(s.a.mark(function e(){var a,t,c,l,r,n;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.props.intl,e.next=3,y.b.getTransferStats({groupby:"timestamp",interval:"hour"});case 3:return a=e.sent,t=a.stats,e.next=7,y.b.getBlockStats({info:"avg-block-size"});case 7:c=e.sent,l=c.stats,r=t.total.map(function(e){return{timestamp:e.timestamp,value:e.value}}),n=t.value.map(function(e){return{timestamp:e.timestamp,value:e.value/g.L}}),l=l.map(function(e){return{timestamp:e.timestamp,value:e.value}}),this.setState({transactionStats:r,transactionValueStats:n,blockStats:l});case 13:case"end":return e.stop()}},e,this)})),function(){return c.apply(this,arguments)})},{key:"loadTxOverviewStats",value:(a=Object(i.a)(s.a.mark(function e(){var a,t,c,l,r,n,m,i,o,d,u,v,h,E,p,N,f,w,S,k,_,O,x,j,T,z,C,B,A,D,I,R,H,M,V,F;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=this.props.intl,t=new Date,c=t.getTime(),l=new Date("2017/10/10"),r=l.getTime(),n=Math.floor((c-r)/1e3/3600/24),e.next=8,b.a.get("https://min-api.cryptocompare.com/data/histoday?fsym=TRX&tsym=USD&limit="+n);case 8:return m=e.sent,i=m.data,o=i.Data,e.next=13,b.a.get("https://server.tron.network/api/v2/node/market_data");case 13:return d=e.sent,u=d.data.market_cap_by_available_supply,v=u.map(function(e,t){return{time:e[0],volume_billion:e[1]/Math.pow(10,9),volume_usd:a.formatNumber(e[1])+" USD"}}),e.next=18,y.b.getStatisticData();case 18:return h=e.sent,E=h.statisticData,p=[],0<E.length&&E.map(function(e,t){p.push({key:t+1,name:e.name?e.name:e.url,volumeValue:a.formatNumber(e.blockProduced),volumePercentage:a.formatNumber(100*e.percentage,{maximumFractionDigits:2,minimumFractionDigits:2})+"%"})}),N=Math.random(),e.next=25,b.a.get("https://server.tron.network/api/v2/node/balance_info?random="+N);case 25:return f=e.sent,w=f.data.total,e.next=29,y.b.getBlocks({limit:1,sort:"-number"});case 29:return S=e.sent,k=S.blocks,_=k[0]?k[0].number:0,O=16*_,x=32*_,e.next=36,y.b.getAddress("TLsV52sRDL79HXGGm9yzwKibb6BeruhUzy");case 36:return j=e.sent,T=Math.abs(-9223372036854.775),z=(T-Math.abs(j.balance/g.L)).toFixed(2),C=(1e11+x+O-1e9-z-w).toFixed(2),B=[{value:w,name:"foundation_freeze",selected:!0},{value:C,name:"circulating_supply",selected:!0}],e.next=46,y.b.getTxOverviewStatsAll();case 46:for(V in A=e.sent,D=A.txOverviewStats,I=[],R=[],H=[],M=[],D)0===(F=parseInt(V))?(I.push(D[F]),R.push({date:D[F].date,total:D[F].newAddressSeen,increment:D[F].newAddressSeen})):(I.push({date:D[F].date,totalTransaction:D[F].totalTransaction-D[F-1].totalTransaction,avgBlockTime:D[F].avgBlockTime,avgBlockSize:D[F].avgBlockSize,totalBlockCount:D[F].totalBlockCount-D[F-1].totalBlockCount,newAddressSeen:D[F].newAddressSeen}),R.push({date:D[F].date,total:D[F].newAddressSeen+R[F-1].total,increment:D[F].newAddressSeen})),H.push({date:D[F].date,avgBlockSize:D[F].avgBlockSize}),M.push({date:D[F].date,blockchainSize:D[F].blockchainSize});this.setState({txOverviewStats:I,addressesStats:R,blockSizeStats:H,blockchainSizeStats:M,priceStats:o,volume:v,pieChart:p,supplyTypesChart:B});case 54:case"end":return e.stop()}},e,this)})),function(){return a.apply(this,arguments)})},{key:"componentDidMount",value:function(){var e=this;this.getScrollsIds(),this.props.location.hash&&setTimeout(function(){e.scrollToAnchor(e.props.location.hash.slice(1))})}},{key:"componentWillUnmount",value:function(){window.onscroll=null}},{key:"onScrollEvent",value:function(e){var a=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight;e.length&&e.forEach(function(t,c){var s=j()("#"+t.key).get(0);(s.getBoundingClientRect()&&s.getBoundingClientRect().top)<=a-400&&(j()("."+t.key).addClass("active"),e.forEach(function(e,a){t.key!==e.key&&j()("."+e.key).removeClass("active")}))})}},{key:"render",value:function(){var e=this,a=this.state,c=a.tabs;return a.scrollsId,a.txOverviewStats,a.addressesStats,a.transactionStats,a.transactionValueStats,a.blockStats,a.accounts,a.blockSizeStats,a.blockchainSizeStats,a.priceStats,a.volume,a.pieChart,a.supplyTypesChart,this.props.intl,p.a.createElement("main",{className:"container header-overlap"},p.a.createElement("div",{className:"card mt-3 list-style-body-scroll"},p.a.createElement("nav",{className:"card-header list-style-body-scroll__header navbar navbar-expand-sm fixed-top",style:{position:"sticky",zIndex:10,background:"#f3f3f3",borderBottom:"none"}},p.a.createElement("ul",{className:"nav nav-tabs card-header-tabs navbar-nav"},Object.values(c).map(function(a){return p.a.createElement("li",{className:"nav-item scroll-li",key:a.id},p.a.createElement("a",{href:"javascript:",className:"scroll-tab nav-link ".concat(a.id," ").concat("transfer"===a.id?"active":""),key:a.id,onClick:function(){return e.scrollToAnchor(a.id)}},Object(f.c)(a.name)))}))),p.a.createElement("div",{className:"card statistics-chart",style:z.card},p.a.createElement("div",{id:"transfer"},p.a.createElement("div",{className:"row mt-5 d-flex"},p.a.createElement("div",{className:"charts-title mr-3 ml-3"},p.a.createElement("span",null,p.a.createElement("i",{className:"fa fa-exchange-alt ml-5 mr-2 "}),Object(f.c)("charts_transaction"))),p.a.createElement("div",{className:"charts-line"})),p.a.createElement("div",{className:"row mb-4 mt-4"},p.a.createElement("div",{className:"col-md-4"},p.a.createElement("div",{className:"card-chart"},g.B?p.a.createElement(_.a,{className:"card-title",to:"/data/stats/txOverviewStatsType"},p.a.createElement("span",{className:"ml-5"},Object(f.c)("charts_daily_transactions")),p.a.createElement("img",{src:t(2268),style:{width:240,filter:"grayscale(100%)"},className:"ml-5 mt-2"})):p.a.createElement(_.a,{className:"card-title",to:"/data/stats/txOverviewStats"},p.a.createElement("span",{className:"ml-5"},Object(f.c)("charts_daily_transactions")),p.a.createElement("img",{src:t(2268),style:{width:240,filter:"grayscale(100%)"},className:"ml-5 mt-2"})))),p.a.createElement("div",{className:"col-md-4"},p.a.createElement("div",{className:"card-chart"},p.a.createElement(_.a,{className:"card-title",to:"/data/stats/totalTxns"},p.a.createElement("span",{className:"ml-5"},Object(f.c)("charts_total_transactions")),p.a.createElement("img",{src:t(2420),style:{width:240,filter:"grayscale(100%)"},className:"ml-5 mt-2"})))))),p.a.createElement("div",{id:"currency"},p.a.createElement("div",{className:"row mt-5 d-flex"},p.a.createElement("div",{className:"charts-title mr-3 ml-3"},p.a.createElement("span",null,p.a.createElement("i",{className:"fas fa-layer-group ml-5 mr-2"}),Object(f.c)("charts_circulation"))),p.a.createElement("div",{className:"charts-line"})),p.a.createElement("div",{className:"row mb-4 mt-4"},p.a.createElement("div",{className:"col-md-4"},p.a.createElement("div",{className:"card-chart"},p.a.createElement(_.a,{className:"card-title",to:"/data/stats/supply"},p.a.createElement("span",{className:"ml-5"},Object(f.c)("charts_total_TRX_supply")),p.a.createElement("img",{src:t(2421),style:{width:240,filter:"grayscale(100%)"},className:"ml-5 mt-2"})))),p.a.createElement("div",{className:"col-md-4"},p.a.createElement("div",{className:"card-chart"},p.a.createElement(_.a,{className:"card-title",to:"/data/charts/OverallFreezingRate"},p.a.createElement("span",{className:"ml-5"},Object(f.c)("charts_overall_freezing_rate")),p.a.createElement("img",{src:t(2422),style:{width:240,filter:"grayscale(100%)"},className:"ml-5 mt-2"})))),p.a.createElement("div",{className:"col-md-4"},p.a.createElement("div",{className:"card-chart"},p.a.createElement(_.a,{className:"card-title",to:"/data/charts/supply"},p.a.createElement("span",{className:"ml-5"},Object(f.c)("Supply_TRX_total_chart")),p.a.createElement("img",{src:t(2423),style:{width:240,filter:"grayscale(100%)"},className:"ml-5 mt-2"})))))),p.a.createElement("div",{id:"address"},p.a.createElement("div",{className:"row mt-5 d-flex"},p.a.createElement("div",{className:"charts-title mr-3 ml-3"},p.a.createElement("span",null,p.a.createElement("i",{className:"fa fa-users ml-5 mr-2"}),Object(f.c)("contract_code_overview_account"))),p.a.createElement("div",{className:"charts-line"})),p.a.createElement("div",{className:"row mb-4 mt-4"},p.a.createElement("div",{className:"col-md-4"},p.a.createElement("div",{className:"card-chart"},p.a.createElement(_.a,{className:"card-title",to:"/data/stats/addressesStats"},p.a.createElement("span",{className:"ml-5"},Object(f.c)("charts_new_addresses")),p.a.createElement("img",{src:t(2424),style:{width:240,filter:"grayscale(100%)"},className:"ml-5 mt-2"})))),p.a.createElement("div",{className:"col-md-4"},p.a.createElement("div",{className:"card-chart"},p.a.createElement(_.a,{className:"card-title",to:"/data/charts/HoldTrxAccount"},p.a.createElement("span",{className:"ml-5"},Object(f.c)("chart_hold_trx_account")),p.a.createElement("img",{src:t(2425),style:{width:240,filter:"grayscale(100%)"},className:"ml-5 mt-2"})))))),p.a.createElement("div",{id:"block"},p.a.createElement("div",{className:"row mt-5 d-flex"},p.a.createElement("div",{className:"charts-title mr-3 ml-3"},p.a.createElement("span",null,p.a.createElement("i",{className:"fas fa-cubes ml-5 mr-2"}),Object(f.c)("charts_block"))),p.a.createElement("div",{className:"charts-line"})),p.a.createElement("div",{className:"row mb-4 mt-4"},p.a.createElement("div",{className:"col-md-4"},p.a.createElement("div",{className:"card-chart"},p.a.createElement(_.a,{className:"card-title",to:"/data/stats/blockSizeStats"},p.a.createElement("span",{className:"ml-5"},Object(f.c)("charts_average_blocksize")),p.a.createElement("img",{src:t(2426),style:{width:240,filter:"grayscale(100%)"},className:"ml-5 mt-2"})))),p.a.createElement("div",{className:"col-md-4"},p.a.createElement("div",{className:"card-chart"},p.a.createElement(_.a,{className:"card-title",to:"/data/stats/blockchainSizeStats"},p.a.createElement("span",{className:"ml-5"},Object(f.c)("charts_total_average_blocksize")),p.a.createElement("img",{src:t(2427),style:{width:240,filter:"grayscale(100%)"},className:"ml-5 mt-2"})))))),p.a.createElement("div",{id:"contract"},p.a.createElement("div",{className:"row mt-5 d-flex"},p.a.createElement("div",{className:"charts-title mr-3 ml-3"},p.a.createElement("span",null,p.a.createElement("i",{className:"fa fa-file-contract ml-5 mr-2"}),Object(f.c)("charts_contract"))),p.a.createElement("div",{className:"charts-line"})),p.a.createElement("div",{className:"row mb-4 mt-4"},p.a.createElement("div",{className:"col-md-4"},p.a.createElement("div",{className:"card-chart"},p.a.createElement(_.a,{className:"card-title",to:"/data/stats/EnergyConsumeDistribution"},p.a.createElement("span",{className:"ml-5"},Object(f.c)("charts_daily_energy_contracts")),p.a.createElement("img",{src:t(2428),style:{width:240,filter:"grayscale(100%)"},className:"ml-5 mt-2"})))),p.a.createElement("div",{className:"col-md-4"},p.a.createElement("div",{className:"card-chart"},p.a.createElement(_.a,{className:"card-title",to:"/data/stats/ContractInvocation"},p.a.createElement("span",{className:"ml-5"},Object(f.c)("charts_contract_calling")),p.a.createElement("img",{src:t(2429),style:{width:240,filter:"grayscale(100%)"},className:"ml-5 mt-2"})))),p.a.createElement("div",{className:"col-md-4"},p.a.createElement("div",{className:"card-chart"},p.a.createElement(_.a,{className:"card-title",to:"/data/stats/ContractInvocationDistribution"},p.a.createElement("span",{className:"ml-5"},Object(f.c)("charts_daily_contract_calling_profile")),p.a.createElement("img",{src:t(2430),style:{width:240,filter:"grayscale(100%)"},className:"ml-5 mt-2"})))))),p.a.createElement("div",{id:"sr"},p.a.createElement("div",{className:"row mt-5 d-flex"},p.a.createElement("div",{className:"charts-title mr-3 ml-3"},p.a.createElement("span",null,p.a.createElement("i",{className:"fas fa-medal ml-5 mr-2"}),Object(f.c)("charts_SR"))),p.a.createElement("div",{className:"charts-line"})),p.a.createElement("div",{className:"row mb-4 mt-4"},p.a.createElement("div",{className:"col-md-4"},p.a.createElement("div",{className:"card-chart"},p.a.createElement(_.a,{className:"card-title",to:"/data/stats/pieChart"},p.a.createElement("span",{className:"ml-5"},Object(f.c)("produce_distribution")),p.a.createElement("img",{src:t(2431),style:{width:240,filter:"grayscale(100%)"},className:"ml-5 mt-2"})))))),p.a.createElement("div",{id:"network"},p.a.createElement("div",{className:"row mt-5 d-flex"},p.a.createElement("div",{className:"charts-title mr-3 ml-3"},p.a.createElement("span",null,p.a.createElement("i",{className:"fas fa-wifi ml-5 mr-2"}),Object(f.c)("chart_network"))),p.a.createElement("div",{className:"charts-line"})),p.a.createElement("div",{className:"row mb-4 mt-4"},p.a.createElement("div",{className:"col-md-4"},p.a.createElement("div",{className:"card-chart"},p.a.createElement(_.a,{className:"card-title",to:"/data/stats/EnergyConsume"},p.a.createElement("span",{className:"ml-5"},Object(f.c)("charts_daily_energy_consumption")),p.a.createElement("img",{src:t(2432),style:{width:240,filter:"grayscale(100%)"},className:"ml-5 mt-2"})))))))))}}]),E}(p.a.Component),z={list:{fontSize:18},card:{border:"none",borderRadius:0,width:"100%"}},C={loadPriceData:O.c};a.default=Object(w.connect)(function(e){return{priceGraph:e.markets.price}},C)(Object(S.h)(T))}}]);