(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{1426:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAAAolBMVEUAAAD9/f3///////////////////////////////////////////////////////////////////////////////////////////////////////////////+1tbW9vb35+fn29vbz8/Pu7u7U1NTw8PDj4+PQ0NDCwsK/v7/IyMjX19fn5+fd3d3Gxsa6urrh4eHZ2dnKysrExMTp6enMzMwjnaLvAAAAHXRSTlMA/QjdudlbT0oQzu7mtYxy4JchHBflm4tx8bTLntSLMkcAAAH3SURBVEjHxZbZeoIwEEYbC2LdcN/aMSAgICri8v6v1khiGCSCeuN/443nOzMTsnx9Kj9GV9NbhLR0rWv8VP+/Vu8QQCFavVYOmGMoZGyWQI1vUOa78UjRh4fpK0WjXyhJc1QkBllR6uIG98SwBxXpDe/6aEJlmvl+JvBEJrnpwlNpoLLuWveiwHVUI8hKmwGKtd4sr9kfrAIzk5IxErh0eQvFKg9Y2jdNHQtksMranQK4pi4QjQOOFODEruP49LTjVWpifxCOxMsHob4skPD9Y4BAAiWwX+MxGCkyBR668iJRWnECXsJ/uymykMj9ADZCYK331Ic0nRTRJSLWMeSCyJNzD3Y28OgpMs8QHsJUUnBgArQ8rRQBhIhY1OZz95mAs2KspAxhgpMUrNwTRuZFxKa26EAUSo9nXJiusgSZIAqDhLG4/YUCiZNMcOECPOSuqjCLj1cKyBkvpaFEmGDPBLI40b6R+yypjZAt6n7Lut8S+Vmijz/2vayXWAqSMIykX8tvMedCb5vXoo4QHKUgt8Vq7Vs9u4C6Dl+XtAMsEBu5eFw4/lVFqCU7wDGLh5LY5/QS+2GY2MpDCR99WBUet6qj7+UD9u+NY/z1y+LdKwln1Cy/+N69Xt+/xLHIbBeBtlmreJBoigdJ9bNn2uHPns6UPXs+lH/GLsFEEcCdEQAAAABJRU5ErkJggg=="},3508:function(e,t,a){"use strict";a.r(t);var n=a(16),c=a(15),r=a(21),l=a(20),s=a(28),o=a(0),i=a.n(o),d=a(3),m=a(1369),u=a(369),p=a(563),b=a(2),E=a.n(b),v=a(5),y=a(1370);function f(e){var t=e.address,n=e.privateKey,c=e.addressQRCode,r=e.privateKeyQRCode,l=a(408);return i.a.createElement("div",{className:"card d-inline-block"},i.a.createElement("div",{className:"card-body d-flex"},i.a.createElement("div",{className:"col text-center"},i.a.createElement("div",{className:"font-weight-bold"},"Address"),i.a.createElement("img",{src:c,style:h.qr})),i.a.createElement("div",{className:"col"},i.a.createElement("img",{src:l,style:h.logo})),i.a.createElement("div",{className:"col text-center"},i.a.createElement("div",{className:"font-weight-bold"},"Private Key"),i.a.createElement("img",{src:r,style:h.qr}),i.a.createElement("br",null))),i.a.createElement("div",{className:"card-body p-0 text-center"},i.a.createElement("table",{className:"table m-0"},i.a.createElement("tr",null,i.a.createElement("th",null,"Address"),i.a.createElement("td",null,t)),i.a.createElement("tr",null,i.a.createElement("th",{style:h.th},"Private Key"),i.a.createElement("td",null,n)))))}var h={logo:{height:150,marginTop:50},qr:{height:200},th:{width:200}},g=a(2697),_=a.n(g);function j(e,t){var a=1<arguments.length&&void 0!==t?t:260;return _.a.toDataURL(e,{width:a})}var w=function(e){return'<link rel="stylesheet" href="'.concat(e,'" type="text/css" />')};function N(){return(N=Object(v.a)(E.a.mark(function e(t,n){var c,r,l,s,o,d;return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j(t);case 2:return c=e.sent,e.next=5,j(n);case 5:r=e.sent,l=Object(y.renderToString)(i.a.createElement(f,{addressQRCode:c,privateKeyQRCode:r,address:t,privateKey:n})),s=[a(2718)],o=s.map(function(e){return w(e)}).join(""),d="\n    <html>\n      <head>\n        ".concat(o,'\n      </head>\n      <body style="background-color: white;">\n        <div id="app">').concat(l,"</div>\n          <style>").concat("",'</style>\n            \n          <script type="text/javascript">\n            setTimeout(function () { window.print(); }, 2000);\n          <\/script>\n      </body>\n    </html>\n  '),window.open("about:blank","_blank").document.write(d);case 13:case"end":return e.stop()}},e)}))).apply(this,arguments)}var O=a(64),k=a(19),A=a(170),x=a(2696),C=a.n(x),K=a(63),S=a(76),M=a(459),P=a(420);function Q(e){var t=e.icon,a=e.completed,n=void 0!==a&&a,c=e.first,r=void 0!==c&&c;return i.a.createElement("div",{className:"col step d-flex justify-content-center "+(n?"completed":"")},r&&i.a.createElement("div",{className:"progress first-progress"},i.a.createElement("div",{className:"progress-bar bg-danger"})),i.a.createElement("div",{className:"step-icon"},i.a.createElement("i",{className:t+" icon-waiting"}),i.a.createElement("i",{className:"fa fa-check icon-complete"})),i.a.createElement("div",{className:"progress"},i.a.createElement("div",{className:"progress-bar bg-danger"})))}function R(e){var t=e.children;return i.a.createElement("div",null,t)}var B=function(e){Object(r.a)(s,e);var t=Object(l.a)(s);function s(e){var a;return e.isOpen,Object(n.a)(this,s),(a=t.call(this)).generateAccount=function(){var e=Object(m.generateAccount)();a.setState({address:e.address,privateKey:e.privateKey,salt:M()})},a.hideModal=function(){var e=a.props.onClose;e&&e()},a.onPasswordChanged=function(e){var t=e.password,n=e.isValid;a.setState({fieldPassword:t,passwordValid:n})},a.printPaperWallet=function(){var e=a.state;!function(e,t){N.apply(this,arguments)}(e.address,e.privateKey)},a.nextStep=function(){var e=a.state,t=e.step,n=e.privateKey,c=t<3?t+1:3;switch(c){case 1:var r=a.encryptData();a.setState({encryptedKey:r.hex});break;case 3:a.props.login(n)}a.setState({step:c})},a.previousStep=function(){a.setState(function(e){var t=e.step;return{step:0<t?t-1:0}})},a.downloadEncryptedKeyFile=function(){var e=a.state.address;Object(p.a)(a.buildEncryptedKeyStore(),e+".txt")},a.isStepValid=function(){var e=a.state,t=e.step,n=e.passwordValid;switch(t){case 0:return n}return!0},a.state={step:0,fieldPassword:"",fieldEncryptedKey:"",passwordValid:!1},a}return Object(c.a)(s,[{key:"componentDidMount",value:function(){this.generateAccount()}},{key:"encryptData",value:function(){var e=this.state,t=e.fieldPassword,a=e.privateKey,n=e.salt,c=Object(u.b)(t,n),r=Object(u.c)(c,a);return{encryptedKey:c,hex:r.hex,bytes:r.bytes}}},{key:"buildEncryptedKeyStore",value:function(){var e=this.state,t={version:1,key:e.encryptedKey,address:e.address,salt:e.salt};return Object(K.byteArray2hexStr)(Object(S.stringToBytes)(JSON.stringify(t)))}},{key:"componentWillReceiveProps",value:function(e){var t=e.isOpen;this.setState({isOpen:t})}},{key:"renderPage",value:function(){var e=this.state,t=e.step,a=e.privateKey;switch(t){case 0:return i.a.createElement(R,null,i.a.createElement("div",{className:"d-flex justify-content-center text-center"},i.a.createElement("div",{className:"col-md-12"},i.a.createElement("h5",null,Object(d.c)("new_wallet")),i.a.createElement("p",null,Object(d.c)("password_encr_key_message_0")),i.a.createElement("p",null,Object(d.c)("password_encr_key_message_1")))),i.a.createElement("div",{className:"d-flex justify-content-center"},i.a.createElement("div",{className:"col-md-5"},i.a.createElement("div",{className:"text-center"},i.a.createElement("label",null,Object(d.c)("password")),i.a.createElement(C.a,{minLength:8,tooShortWord:Object(d.b)("too_short"),changeCallback:this.onPasswordChanged,minScore:2,scoreWords:[Object(d.b)("weak"),Object(d.b)("okay"),Object(d.b)("good"),Object(d.b)("strong"),Object(d.b)("secure")],inputProps:{name:"password_input",autoComplete:"off",className:""}}),i.a.createElement("div",{className:"text-muted"},Object(d.c)("strong_password_info"))))));case 1:return i.a.createElement(R,null,i.a.createElement("div",{className:"d-flex justify-content-center text-center"},i.a.createElement("div",{className:"col-md-6"},i.a.createElement("h5",null,Object(d.c)("save_keystore_file")),i.a.createElement("p",null,i.a.createElement("button",{className:"btn btn-lg btn-block",onClick:this.downloadEncryptedKeyFile},i.a.createElement("i",{className:"fa fa-download mr-2"}),Object(d.c)("download_keystore_file"))))),i.a.createElement("p",{className:"text-center"},i.a.createElement("b",null,Object(d.c)("do_not_lose_it"))," ",Object(d.c)("do_not_lose_it_message_0")," ",i.a.createElement("br",null),i.a.createElement("b",null,Object(d.c)("do_not_share_it"))," ",Object(d.c)("do_not_share_it_message_0")," ",i.a.createElement("br",null),i.a.createElement("b",null,Object(d.c)("make_a_backup"))," ",Object(d.c)("make_a_backup_message_0")," ",i.a.createElement("br",null)));case 2:return i.a.createElement(R,null,i.a.createElement("div",{className:"d-flex justify-content-center text-center"},i.a.createElement("div",{className:"col-md-6"},i.a.createElement("h5",null,Object(d.c)("save_private_key")),i.a.createElement("p",null,i.a.createElement("div",{className:"input-group mb-3"},i.a.createElement("input",{type:"text",readOnly:!0,className:"form-control",value:a}),i.a.createElement("div",{className:"input-group-append"},i.a.createElement(A.CopyToClipboard,{text:a},i.a.createElement("button",{className:"btn btn-outline-secondary",type:"button"},i.a.createElement("i",{className:"fa fa-paste"})))))),i.a.createElement("p",null,i.a.createElement("button",{className:"btn btn-lg btn-block",onClick:this.printPaperWallet},i.a.createElement("i",{className:"fa fa-print mr-2"}),Object(d.c)("print_paper_wallet"))))),i.a.createElement("p",{className:"text-center"},i.a.createElement("b",null,Object(d.c)("do_not_lose_it"))," ",Object(d.c)("do_not_lose_it_message_0")," ",i.a.createElement("br",null),i.a.createElement("b",null,Object(d.c)("do_not_share_it"))," ",Object(d.c)("do_not_share_it_message_0")," ",i.a.createElement("br",null),i.a.createElement("b",null,Object(d.c)("make_a_backup"))," ",Object(d.c)("make_a_backup_message_0")," ",i.a.createElement("br",null)));case 3:return i.a.createElement(R,null,i.a.createElement("div",{className:"text-center"},i.a.createElement("p",{className:"font-weight-bold"},Object(d.c)("new_wallet_ready_message")),i.a.createElement(O.a,{className:"btn btn-success",to:"/account"},Object(d.c)("go_to_account_page"))))}}},{key:"render",value:function(){var e=this.state.step,t=a(1426);return i.a.createElement("main",{className:"container wallet-wizard header-overlap"},i.a.createElement("div",{className:"card"},i.a.createElement("div",{className:"text-center p-5 bg-dark"},i.a.createElement("img",{className:"wallet-wizard-logo",src:P,onError:function(e){e.target.onerror=null,e.target.src=t}})),i.a.createElement("div",{className:"card-body d-flex wizard-steps"},i.a.createElement(Q,{completed:0<e,first:!0,icon:"fa fa-key"}),i.a.createElement(Q,{completed:1<e,icon:"fa fa-save"}),i.a.createElement(Q,{completed:2<e,icon:"fa fa-lock"})),i.a.createElement("div",{className:"card-body"},this.renderPage()),i.a.createElement("div",{className:"card-body"},i.a.createElement("div",{className:"row d-flex px-3"},e<3&&i.a.createElement("button",{disabled:!this.isStepValid(),className:"btn btn-dark btn-lg ml-auto",onClick:this.nextStep},Object(d.c)("next"))))))}}]),s}(i.a.PureComponent),D={login:k.v};t.default=Object(s.connect)(function(e){return{account:e.app.account}},D)(B)}}]);