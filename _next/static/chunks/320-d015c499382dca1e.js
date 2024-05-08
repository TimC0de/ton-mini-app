"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[320],{8320:function(e,t,r){r.d(t,{UQ:function(){return e1},u3:function(){return eT},I9:function(){return eU},z8:function(){return ez}});var s=r(2265),i=Object.defineProperty,n=(e,t,r)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,o=(e,t,r)=>(n(e,"symbol"!=typeof t?t+"":t,r),r);class a{constructor(e,t){this.prefix=e,this.enabled=t}print(e,...t){if(!this.enabled)return;let r=new Date,s=Intl.DateTimeFormat("en-GB",{hour:"2-digit",minute:"2-digit",second:"2-digit",fractionalSecondDigits:3,timeZone:"UTC"}).format(r);console[e](`[${s}]`,this.prefix,...t)}disable(){this.enabled=!1}error(...e){this.print("error",...e)}enable(){this.enabled=!0}log(...e){this.print("log",...e)}warn(...e){this.print("warn",...e)}}let p=new a("[SDK]",!1);function h(){try{return window.self!==window.top}catch{return!0}}function c(e){return"object"==typeof e&&null!==e&&!Array.isArray(e)}function l(e,t,r){var s,i;let n={},o;void 0===t&&void 0===r?n={}:void 0!==t&&void 0!==r?(n=r,o=t):void 0!==t&&("targetOrigin"in t?n=t:o=t);let{targetOrigin:a="https://web.telegram.org"}=n;if(p.log(`Calling method "${e}"`,o),h()){window.parent.postMessage(JSON.stringify({eventType:e,eventData:o}),a);return}if("external"in(s=window)&&c(s.external)&&"notify"in s.external&&"function"==typeof s.external.notify){window.external.notify(JSON.stringify({eventType:e,eventData:o}));return}if("TelegramWebviewProxy"in(i=window)&&c(i.TelegramWebviewProxy)&&"postEvent"in i.TelegramWebviewProxy&&"function"==typeof i.TelegramWebviewProxy.postEvent){window.TelegramWebviewProxy.postEvent(e,JSON.stringify(o));return}throw Error("Unable to determine current environment and possible way to send event.")}function u(e,t){return 0>=function(e,t){let r=e.split("."),s=t.split("."),i=Math.max(r.length,s.length);for(let e=0;e<i;e+=1){let t=parseInt(r[e]||"0",10),i=parseInt(s[e]||"0",10);if(t!==i)return t>i?1:-1}return 0}(e,t)}function d(e,t,r){if("string"==typeof r){if("web_app_open_link"===e&&"try_instant_view"===t)return u("6.4",r);if("web_app_set_header_color"===e&&"color"===t)return u("6.9",r)}switch(e){case"web_app_open_tg_link":case"web_app_open_invoice":case"web_app_setup_back_button":case"web_app_set_background_color":case"web_app_set_header_color":case"web_app_trigger_haptic_feedback":return u("6.1",t);case"web_app_open_popup":return u("6.2",t);case"web_app_close_scan_qr_popup":case"web_app_open_scan_qr_popup":case"web_app_read_text_from_clipboard":return u("6.4",t);case"web_app_switch_inline_query":return u("6.7",t);case"web_app_invoke_custom_method":case"web_app_request_write_access":case"web_app_request_phone":return u("6.9",t);case"web_app_setup_settings_button":return u("6.10",t);default:return!0}}class g extends Error{constructor(e,t){super(`Method "${e}" is unsupported in the Mini Apps version ${t}.`),Object.setPrototypeOf(this,g.prototype)}}class _ extends Error{constructor(e,t,r){super(`Parameter "${t}" in method "${e}" is unsupported in the Mini Apps version ${r}.`),Object.setPrototypeOf(this,_.prototype)}}function b(e){return({req_id:t})=>t===e}class f extends Error{constructor(e,{cause:t,type:r}={}){super(`Unable to parse value${r?` as ${r}`:""}`,{cause:t}),o(this,"type"),this.value=e,Object.setPrototypeOf(this,f.prototype),this.type=r}}class w extends Error{constructor(e,{cause:t,type:r}={}){super(`Unable to parse field "${e}"${r?` as ${r}`:""}`,{cause:t}),Object.setPrototypeOf(this,w.prototype)}}function m(e,t){let r={};for(let s in e){let i,n,o;let a=e[s];if(!a)continue;if("function"==typeof a||"parse"in a)i=s,n="function"==typeof a?a:a.parse.bind(a);else{let{type:e}=a;i=a.from||s,n="function"==typeof e?e:e.parse.bind(e)}let p=t(i);try{o=n(p)}catch(e){throw e instanceof f?new w(i,{type:e.type,cause:e}):new w(i,{cause:e})}void 0!==o&&(r[s]=o)}return r}function y(){return TypeError("Value has unexpected type")}function v(e){let t=e;if("string"==typeof t&&(t=JSON.parse(t)),"object"!=typeof t||null===t||Array.isArray(t))throw y();return t}class E{constructor(e,t,r){this.parser=e,this.isOptional=t,this.type=r}parse(e){if(!(this.isOptional&&void 0===e))try{return this.parser(e)}catch(t){throw new f(e,{type:this.type,cause:t})}}optional(){return this.isOptional=!0,this}}function C(e,t){return new E(t=>{let r=v(t);return m(e,e=>r[e])},!1,t)}function k(e,t){return()=>new E(e,!1,t)}let x=k(e=>{if("string"==typeof e||"number"==typeof e)return e.toString();throw y()},"string");function P(e,t){window.dispatchEvent(new MessageEvent("message",{data:JSON.stringify({eventType:e,eventData:t}),source:window.parent}))}function q(e){return/^#[\da-f]{6}$/i.test(e)}function A(e){let t=e.replace(/\s/g,"").toLowerCase();if(q(t))return t;if(/^#[\da-f]{3}$/i.test(t)){let e="#";for(let r=0;r<3;r+=1)e+=t[1+r].repeat(2);return e}let r=t.match(/^rgb\((\d{1,3}),(\d{1,3}),(\d{1,3})\)$/)||t.match(/^rgba\((\d{1,3}),(\d{1,3}),(\d{1,3}),\d{1,3}\)$/);if(null===r)throw Error(`Value "${e}" does not satisfy any of known RGB formats.`);return r.slice(1).reduce((e,t)=>{let r=parseInt(t,10).toString(16);return e+(1===r.length?"0":"")+r},"#")}let S=k(e=>A(x().parse(e)),"rgb"),O=k(e=>{if("boolean"==typeof e)return e;let t=String(e);if("1"===t||"true"===t)return!0;if("0"===t||"false"===t)return!1;throw y()},"boolean"),V=k(e=>{if("number"==typeof e)return e;if("string"==typeof e){let t=Number(e);if(!Number.isNaN(t))return t}throw y()},"number");class D{constructor(){o(this,"listeners",new Map),o(this,"subscribeListeners",[])}addListener(e,t,r){let s=this.listeners.get(e);return s||(s=[],this.listeners.set(e,s)),s.push([t,r]),()=>this.off(e,t)}emit(e,...t){this.subscribeListeners.forEach(r=>r(e,...t));let r=this.listeners.get(e);r&&r.forEach(([e,s],i)=>{e(...t),s&&r.splice(i,1)})}on(e,t){return this.addListener(e,t,!1)}once(e,t){return this.addListener(e,t,!0)}off(e,t){let r=this.listeners.get(e);if(r){for(let e=0;e<r.length;e+=1)if(t===r[e][0]){r.splice(e,1);return}}}subscribe(e){return this.subscribeListeners.push(e),()=>this.unsubscribe(e)}unsubscribe(e){for(let t=0;t<this.subscribeListeners.length;t+=1)if(this.subscribeListeners[t]===e){this.subscribeListeners.splice(t,1);return}}}let I="telegram-mini-apps-cached-emitter";function T(){let e=window;return void 0===e[I]&&(e[I]=function(){var e;let t=new D,r=(e,...r)=>{p.log("Emitting processed event:",e,...r),t.emit(e,...r)};return window.addEventListener("resize",()=>{r("viewport_changed",{width:window.innerWidth,height:window.innerHeight,is_state_stable:!0,is_expanded:!0})}),e=(e,t)=>{p.log("Received raw event:",e,t);try{switch(e){case"viewport_changed":return r(e,C({height:V(),width:e=>null==e?window.innerWidth:V().parse(e),is_state_stable:O(),is_expanded:O()}).parse(t));case"theme_changed":return r(e,C({theme_params:e=>{let t=S().optional();return Object.entries(v(e)).reduce((e,[r,s])=>(e[r]=t.parse(s),e),{})}}).parse(t));case"popup_closed":return null==t?r(e,{}):r(e,C({button_id:e=>null==e?void 0:x().parse(e)}).parse(t));case"set_custom_style":return r(e,x().parse(t));case"qr_text_received":return r(e,C({data:x().optional()}).parse(t));case"clipboard_text_received":return r(e,C({req_id:x(),data:e=>null===e?e:x().optional().parse(e)}).parse(t));case"invoice_closed":return r(e,C({slug:x(),status:x()}).parse(t));case"phone_requested":return r("phone_requested",C({status:x()}).parse(t));case"custom_method_invoked":return r("custom_method_invoked",C({req_id:x(),result:e=>e,error:x().optional()}).parse(t));case"write_access_requested":return r("write_access_requested",C({status:x()}).parse(t));case"main_button_pressed":case"back_button_pressed":case"settings_button_pressed":case"scan_qr_popup_closed":case"reload_iframe":return r(e);default:return r(e,t)}}catch(e){p.error("Error processing event:",e)}},function(){let e=window;"TelegramGameProxy_receiveEvent"in e||[["TelegramGameProxy_receiveEvent"],["TelegramGameProxy","receiveEvent"],["Telegram","WebView","receiveEvent"]].forEach(t=>{let r=e;t.forEach((e,t,s)=>{if(t===s.length-1){r[e]=P;return}e in r||(r[e]={}),r=r[e]})})}(),window.addEventListener("message",t=>{if(t.source===window.parent)try{var r;let{eventType:s,eventData:i}=(r=t.data,C({eventType:x(),eventData:e=>e}).parse(r));e(s,i)}catch{}}),t}()),e[I]}function $(e,t){T().off(e,t)}function L(e,t){return T().on(e,t),()=>$(e,t)}class R extends Error{constructor(e){super(`Async call timeout exceeded. Timeout: ${e}`),Object.setPrototypeOf(this,R.prototype)}}function W(e,t){return Promise.race(["function"==typeof e?e():e,new Promise((e,r)=>{setTimeout(r,t,new R(t))})])}async function B(e,t,r){let s;let i=new Promise(e=>{s=e}),n=t?{...r,event:t,method:e}:e,{method:o,event:a,capture:p,postEvent:h=l,timeout:c}=n,u=(Array.isArray(a)?a:[a]).map(e=>L(e,e=>(!p||p(e))&&s(e)));try{return h(o,n.params),await (c?W(i,c):i)}finally{u.forEach(e=>e())}}async function N(e,t,r,s={}){let{result:i,error:n}=await B("web_app_invoke_custom_method","custom_method_invoked",{...s,params:{method:e,params:t,req_id:r},capture:b(r)});if(n)throw Error(n);return i}function H(e){let t=A(e);return 120>Math.sqrt([.299,.587,.114].reduce((e,r,s)=>{let i=parseInt(t.slice(1+2*s,1+(s+1)*2),16);return e+i*i*r},0))}class U{constructor(e,t){this.state=e,this.ee=t}internalSet(e,t){return this.state[e]!==t&&void 0!==t&&(this.state[e]=t,this.ee.emit(`change:${e}`,t),!0)}clone(){return{...this.state}}set(e,t){let r=!1;if("string"==typeof e)r=this.internalSet(e,t);else for(let t in e)this.internalSet(t,e[t])&&(r=!0);r&&this.ee.emit("change")}get(e){return this.state[e]}}function j(e,t){return r=>d(t[r],e)}class M{constructor(e,t,r=l){o(this,"ee",new D),o(this,"state"),o(this,"on",(e,t)=>"click"===e?L("back_button_pressed",t):this.ee.on(e,t)),o(this,"off",(e,t)=>"click"===e?$("back_button_pressed",t):this.ee.off(e,t)),o(this,"supports"),this.postEvent=r,this.state=new U({isVisible:e},this.ee),this.supports=j(t,{show:"web_app_setup_back_button",hide:"web_app_setup_back_button"})}set isVisible(e){this.state.set("isVisible",e),this.postEvent("web_app_setup_back_button",{is_visible:e})}get isVisible(){return this.state.get("isVisible")}hide(){this.isVisible=!1}show(){this.isVisible=!0}}class z{constructor(e,t=l){o(this,"ee",new D),o(this,"state"),o(this,"on",this.ee.on.bind(this.ee)),o(this,"off",this.ee.off.bind(this.ee)),this.postEvent=t,this.state=new U({isConfirmationNeeded:e},this.ee)}set isConfirmationNeeded(e){this.state.set("isConfirmationNeeded",e),this.postEvent("web_app_setup_closing_behavior",{need_confirmation:e})}get isConfirmationNeeded(){return this.state.get("isConfirmationNeeded")}disableConfirmation(){this.isConfirmationNeeded=!1}enableConfirmation(){this.isConfirmationNeeded=!0}}function J(e){if(Array.isArray(e))return e;if("string"==typeof e)try{let t=JSON.parse(e);if(Array.isArray(t))return t}catch{}throw y()}class F extends E{constructor(e,t,r){super(J,t,r),o(this,"itemParser"),this.itemParser="function"==typeof e?e:e.parse.bind(e)}parse(e){let t=super.parse(e);return void 0===t?t:t.map(this.itemParser)}of(e){return this.itemParser="function"==typeof e?e:e.parse.bind(e),this}}function K(e,t){return e.reduce((e,r)=>(e[r]=t,e),{})}class Q{constructor(e,t,r=l){o(this,"supports"),this.createRequestId=t,this.postEvent=r,this.supports=j(e,{delete:"web_app_invoke_custom_method",get:"web_app_invoke_custom_method",getKeys:"web_app_invoke_custom_method",set:"web_app_invoke_custom_method"})}async delete(e,t={}){let r=Array.isArray(e)?e:[e];0!==r.length&&await N("deleteStorageValues",{keys:r},this.createRequestId(),{...t,postEvent:this.postEvent})}async getKeys(e={}){let t=await N("getStorageKeys",{},this.createRequestId(),{...e,postEvent:this.postEvent});return new F(e=>e,!1,void 0).of(x()).parse(t)}async get(e,t={}){let r=Array.isArray(e)?e:[e];if(0===r.length)return K(r,"");let s=C(K(r,x())),i=await N("getStorageValues",{keys:r},this.createRequestId(),{...t,postEvent:this.postEvent}).then(e=>s.parse(e));return Array.isArray(e)?i:i[e]}async set(e,t,r={}){await N("saveStorageValue",{key:e,value:t},this.createRequestId(),{...r,postEvent:this.postEvent})}}class G{constructor(e,t=l){o(this,"supports"),this.postEvent=t,this.supports=j(e,{impactOccurred:"web_app_trigger_haptic_feedback",notificationOccurred:"web_app_trigger_haptic_feedback",selectionChanged:"web_app_trigger_haptic_feedback"})}impactOccurred(e){this.postEvent("web_app_trigger_haptic_feedback",{type:"impact",impact_style:e})}notificationOccurred(e){this.postEvent("web_app_trigger_haptic_feedback",{type:"notification",notification_type:e})}selectionChanged(){this.postEvent("web_app_trigger_haptic_feedback",{type:"selection_change"})}}class Z{constructor(e){this.initData=e}get authDate(){return this.initData.authDate}get canSendAfter(){return this.initData.canSendAfter}get canSendAfterDate(){let{canSendAfter:e}=this;return void 0===e?void 0:new Date(this.authDate.getTime()+1e3*e)}get chat(){return this.initData.chat}get chatType(){return this.initData.chatType}get chatInstance(){return this.initData.chatInstance}get hash(){return this.initData.hash}get queryId(){return this.initData.queryId}get receiver(){return this.initData.receiver}get startParam(){return this.initData.startParam}get user(){return this.initData.user}}function X(){return C({addedToAttachmentMenu:{type:O().optional(),from:"added_to_attachment_menu"},allowsWriteToPm:{type:O().optional(),from:"allows_write_to_pm"},firstName:{type:x(),from:"first_name"},id:V(),isBot:{type:O().optional(),from:"is_bot"},isPremium:{type:O().optional(),from:"is_premium"},languageCode:{type:x().optional(),from:"language_code"},lastName:{type:x().optional(),from:"last_name"},photoUrl:{type:x().optional(),from:"photo_url"},username:x().optional()},"User")}let Y=k(e=>e instanceof Date?e:new Date(1e3*V().parse(e)),"Date");function ee(e,t){return new E(t=>{if("string"!=typeof t&&!(t instanceof URLSearchParams))throw y();let r="string"==typeof t?new URLSearchParams(t):t;return m(e,e=>{let t=r.get(e);return null===t?void 0:t})},!1,t)}class et{constructor(e,t=l){o(this,"ee",new D),o(this,"state"),o(this,"on",this.ee.on.bind(this.ee)),o(this,"off",this.ee.off.bind(this.ee)),o(this,"supports"),this.postEvent=t,this.state=new U({isOpened:!1},this.ee),this.supports=j(e,{open:"web_app_open_invoice"})}set isOpened(e){this.state.set("isOpened",e)}get isOpened(){return this.state.get("isOpened")}async open(e,t){if(this.isOpened)throw Error("Invoice is already opened");let r=t?function(e){let{hostname:t,pathname:r}=new URL(e,window.location.href);if("t.me"!==t)throw Error(`Incorrect hostname: ${t}`);let s=r.match(/^\/(\$|invoice\/)([A-Za-z0-9\-_=]+)$/);if(null===s)throw Error('Link pathname has incorrect format. Expected to receive "/invoice/{slug}" or "/${slug}"');return s[2]}(e):e;this.isOpened=!0;try{return(await B("web_app_open_invoice","invoice_closed",{params:{slug:r},postEvent:this.postEvent,capture:e=>r===e.slug})).status}finally{this.isOpened=!1}}}class er{constructor(e){o(this,"ee",new D),o(this,"state"),o(this,"postEvent"),o(this,"on",(e,t)=>"click"===e?L("main_button_pressed",t):this.ee.on(e,t)),o(this,"off",(e,t)=>"click"===e?$("main_button_pressed",t):this.ee.off(e,t));let{postEvent:t=l,text:r,textColor:s,backgroundColor:i,isEnabled:n,isVisible:a,isLoaderVisible:p}=e;this.postEvent=t,this.state=new U({backgroundColor:i,isEnabled:n,isVisible:a,isLoaderVisible:p,text:r,textColor:s},this.ee)}commit(){""!==this.text&&this.postEvent("web_app_setup_main_button",{is_visible:this.isVisible,is_active:this.isEnabled,is_progress_visible:this.isLoaderVisible,text:this.text,color:this.backgroundColor,text_color:this.textColor})}set isEnabled(e){this.setParams({isEnabled:e})}get isEnabled(){return this.state.get("isEnabled")}set isLoaderVisible(e){this.setParams({isLoaderVisible:e})}get isLoaderVisible(){return this.state.get("isLoaderVisible")}set isVisible(e){this.setParams({isVisible:e})}get isVisible(){return this.state.get("isVisible")}get backgroundColor(){return this.state.get("backgroundColor")}get text(){return this.state.get("text")}get textColor(){return this.state.get("textColor")}disable(){return this.isEnabled=!1,this}enable(){return this.isEnabled=!0,this}hide(){return this.isVisible=!1,this}hideLoader(){return this.isLoaderVisible=!1,this}show(){return this.isVisible=!0,this}showLoader(){return this.isLoaderVisible=!0,this}setText(e){return this.setParams({text:e})}setTextColor(e){return this.setParams({textColor:e})}setBackgroundColor(e){return this.setParams({backgroundColor:e})}setParams(e){return this.state.set(e),this.commit(),this}}let es=ee({contact:C({userId:{type:V(),from:"user_id"},phoneNumber:{type:x(),from:"phone_number"},firstName:{type:x(),from:"first_name"},lastName:{type:x().optional(),from:"last_name"}}),authDate:{type:Y(),from:"auth_date"},hash:x()});function ei(e,t){return r=>{let[s,i]=t[r];return d(s,i,e)}}class en{constructor(e){o(this,"ee",new D),o(this,"state"),o(this,"botInline"),o(this,"postEvent"),o(this,"createRequestId"),o(this,"requestingPhoneAccess",!1),o(this,"requestingWriteAccess",!1),o(this,"on",this.ee.on.bind(this.ee)),o(this,"off",this.ee.off.bind(this.ee)),o(this,"supports"),o(this,"supportsParam");let{postEvent:t=l,headerColor:r,backgroundColor:s,version:i,botInline:n,createRequestId:a}=e,p=j(i,{requestPhoneAccess:"web_app_request_phone",requestWriteAccess:"web_app_request_write_access",switchInlineQuery:"web_app_switch_inline_query",setHeaderColor:"web_app_set_header_color",setBackgroundColor:"web_app_set_background_color"});this.postEvent=t,this.botInline=n,this.createRequestId=a,this.supports=e=>!(!p(e)||"switchInlineQuery"===e&&!n),this.state=new U({backgroundColor:s,headerColor:r},this.ee),this.supportsParam=ei(i,{"setHeaderColor.color":["web_app_set_header_color","color"]})}async getRequestedContact(){return N("getRequestedContact",{},this.createRequestId(),{postEvent:this.postEvent,timeout:1e4}).then(e=>es.parse(e))}get backgroundColor(){return this.state.get("backgroundColor")}close(){this.postEvent("web_app_close")}get headerColor(){return this.state.get("headerColor")}get isBotInline(){return this.botInline}get isDark(){return H(this.backgroundColor)}get isRequestingPhoneAccess(){return this.requestingPhoneAccess}get isRequestingWriteAccess(){return this.requestingWriteAccess}ready(){this.postEvent("web_app_ready")}async requestContact({timeout:e=5e3}={}){try{return await this.getRequestedContact()}catch{}if(await this.requestPhoneAccess()!=="sent")throw Error("Access denied.");let t=Date.now()+e,r=50;return W(async()=>{for(;Date.now()<t;){try{return await this.getRequestedContact()}catch{}await function(e){return new Promise(t=>{setTimeout(t,e)})}(r),r+=50}throw Error("Unable to retrieve requested contact.")},e)}requestPhoneAccess(e={}){if(this.requestingPhoneAccess)throw Error("Phone access is already being requested.");return this.requestingPhoneAccess=!0,B("web_app_request_phone","phone_requested",{...e,postEvent:this.postEvent}).then(e=>e.status).finally(()=>{this.requestingPhoneAccess=!1})}requestWriteAccess(e={}){if(this.requestingWriteAccess)throw Error("Write access is already being requested.");return this.requestingWriteAccess=!0,B("web_app_request_write_access","write_access_requested",{...e,postEvent:this.postEvent}).then(e=>e.status).finally(()=>{this.requestingWriteAccess=!1})}sendData(e){let{size:t}=new Blob([e]);if(0===t||t>4096)throw Error(`Passed data has incorrect size: ${t}`);this.postEvent("web_app_data_send",{data:e})}setHeaderColor(e){this.postEvent("web_app_set_header_color",q(e)?{color:e}:{color_key:e}),this.state.set("headerColor",e)}setBackgroundColor(e){this.postEvent("web_app_set_background_color",{color:e}),this.state.set("backgroundColor",e)}switchInlineQuery(e,t=[]){if(!this.supports("switchInlineQuery")&&!this.isBotInline)throw Error("Method is unsupported because Mini App should be launched in inline mode.");this.postEvent("web_app_switch_inline_query",{query:e,chat_types:t})}}class eo{constructor(e,t=l){o(this,"ee",new D),o(this,"state"),o(this,"on",this.ee.on.bind(this.ee)),o(this,"off",this.ee.off.bind(this.ee)),o(this,"supports"),this.postEvent=t,this.state=new U({isOpened:!1},this.ee),this.supports=j(e,{open:"web_app_open_popup"})}set isOpened(e){this.state.set("isOpened",e)}get isOpened(){return this.state.get("isOpened")}open(e){if(this.isOpened)throw Error("Popup is already opened.");return this.isOpened=!0,B("web_app_open_popup","popup_closed",{postEvent:this.postEvent,params:function(e){let t=e.message.trim(),r=(e.title||"").trim(),s=e.buttons||[];if(r.length>64)throw Error(`Title has incorrect size: ${r.length}`);if(0===t.length||t.length>256)throw Error(`Message has incorrect size: ${t.length}`);if(s.length>3)throw Error(`Buttons have incorrect size: ${s.length}`);return{title:r,message:t,buttons:0===s.length?[{type:"close",id:""}]:s.map(e=>{let{id:t=""}=e;if(t.length>64)throw Error(`Button ID has incorrect size: ${t}`);if(void 0===e.type||"default"===e.type||"destructive"===e.type){let r=e.text.trim();if(0===r.length||r.length>64){let t=e.type||"default";throw Error(`Button text with type "${t}" has incorrect size: ${e.text.length}`)}return{...e,text:r,id:t}}return{...e,id:t}})}}(e)}).then(({button_id:e=null})=>e).finally(()=>{this.isOpened=!1})}}class ea{constructor(e,t=l){o(this,"ee",new D),o(this,"state"),o(this,"on",this.ee.on.bind(this.ee)),o(this,"off",this.ee.off.bind(this.ee)),o(this,"supports"),this.postEvent=t,this.state=new U({isOpened:!1},this.ee),this.supports=j(e,{close:"web_app_close_scan_qr_popup",open:"web_app_open_scan_qr_popup"})}close(){this.postEvent("web_app_close_scan_qr_popup"),this.isOpened=!1}set isOpened(e){this.state.set("isOpened",e)}get isOpened(){return this.state.get("isOpened")}async open(e){if(this.isOpened)throw Error("QR scanner is already opened.");this.isOpened=!0;try{let t=await B("web_app_open_scan_qr_popup",["qr_text_received","scan_qr_popup_closed"],{postEvent:this.postEvent,params:{text:e}});return"object"==typeof t&&"string"==typeof t.data?t.data:null}finally{this.isOpened=!1}}}class ep{constructor(e,t,r=l){o(this,"ee",new D),o(this,"state"),o(this,"on",(e,t)=>"click"===e?L("settings_button_pressed",t):this.ee.on(e,t)),o(this,"off",(e,t)=>"click"===e?$("settings_button_pressed",t):this.ee.off(e,t)),o(this,"supports"),this.postEvent=r,this.state=new U({isVisible:e},this.ee),this.supports=j(t,{show:"web_app_setup_settings_button",hide:"web_app_setup_settings_button"})}set isVisible(e){this.state.set("isVisible",e),this.postEvent("web_app_setup_settings_button",{is_visible:e})}get isVisible(){return this.state.get("isVisible")}hide(){this.isVisible=!1}show(){this.isVisible=!0}}let eh=k(e=>{let t=S().optional();return Object.entries(v(e)).reduce((e,[r,s])=>(e[r.replace(/(^|_)bg/,(e,t)=>`${t}background`).replace(/_([a-z])/g,(e,t)=>t.toUpperCase())]=t.parse(s),e),{})},"ThemeParams");class ec{constructor(e){o(this,"ee",new D),o(this,"state"),o(this,"on",this.ee.on.bind(this.ee)),o(this,"off",this.ee.off.bind(this.ee)),this.state=new U(e,this.ee)}get accentTextColor(){return this.get("accentTextColor")}get backgroundColor(){return this.get("backgroundColor")}get buttonColor(){return this.get("buttonColor")}get buttonTextColor(){return this.get("buttonTextColor")}get destructiveTextColor(){return this.get("destructiveTextColor")}get(e){return this.state.get(e)}getState(){return this.state.clone()}get headerBackgroundColor(){return this.get("headerBackgroundColor")}get hintColor(){return this.get("hintColor")}get isDark(){return!this.backgroundColor||H(this.backgroundColor)}get linkColor(){return this.get("linkColor")}get secondaryBackgroundColor(){return this.get("secondaryBackgroundColor")}get sectionBackgroundColor(){return this.get("sectionBackgroundColor")}get sectionHeaderTextColor(){return this.get("sectionHeaderTextColor")}listen(){return L("theme_changed",e=>{var t;this.state.set((t=e.theme_params,eh().parse(t)))})}get subtitleTextColor(){return this.get("subtitleTextColor")}get textColor(){return this.get("textColor")}}class el{constructor(e,t,r=l){o(this,"supports"),o(this,"supportsParam"),this.version=e,this.createRequestId=t,this.postEvent=r,this.supports=j(e,{readTextFromClipboard:"web_app_read_text_from_clipboard"}),this.supportsParam=ei(e,{"openLink.tryInstantView":["web_app_open_link","try_instant_view"]})}openLink(e,t){let r=new URL(e,window.location.href).toString();if(!d("web_app_open_link",this.version)){window.open(r,"_blank");return}this.postEvent("web_app_open_link",{url:r,..."boolean"==typeof t?{try_instant_view:t}:{}})}openTelegramLink(e){let{hostname:t,pathname:r,search:s}=new URL(e,window.location.href);if("t.me"!==t)throw Error(`URL has not allowed hostname: ${t}. Only "t.me" is allowed`);if(!d("web_app_open_tg_link",this.version)){window.location.href=e;return}this.postEvent("web_app_open_tg_link",{path_full:r+s})}async readTextFromClipboard(){let e=this.createRequestId(),{data:t=null}=await B("web_app_read_text_from_clipboard","clipboard_text_received",{postEvent:this.postEvent,params:{req_id:e},capture:b(e)});return t}}async function eu(e){let t=await B("web_app_request_viewport","viewport_changed",e);return{height:t.height,width:t.width,isExpanded:t.is_expanded,isStateStable:t.is_state_stable}}function ed(e){return e<0?0:e}class eg{constructor(e){o(this,"ee",new D),o(this,"state"),o(this,"postEvent"),o(this,"on",this.ee.on.bind(this.ee)),o(this,"off",this.ee.off.bind(this.ee));let{height:t,isExpanded:r,width:s,stableHeight:i,postEvent:n=l}=e;this.postEvent=n,this.state=new U({height:ed(t),isExpanded:r,stableHeight:ed(i),width:ed(s)},this.ee)}sync(e){return eu(e).then(({height:e,isExpanded:t,width:r,isStateStable:s})=>{this.state.set({height:e,width:r,isExpanded:t,stableHeight:s?e:this.state.get("stableHeight")})})}get height(){return this.state.get("height")}get stableHeight(){return this.state.get("stableHeight")}listen(){return L("viewport_changed",e=>{let{height:t,width:r,is_expanded:s,is_state_stable:i}=e,n={height:ed(t),isExpanded:s,width:ed(r)};i&&(n.stableHeight=n.height),this.state.set(n)})}get isExpanded(){return this.state.get("isExpanded")}get width(){return this.state.get("width")}expand(){this.postEvent("web_app_expand"),this.state.set("isExpanded",!0)}get isStable(){return this.stableHeight===this.height}}function e_(e,t){document.documentElement.style.setProperty(e,t)}function eb(e){let t=()=>e_("--tg-viewport-height",`${e.height}px`),r=()=>e_("--tg-viewport-width",`${e.width}px`),s=()=>e_("--tg-viewport-stable-height",`${e.stableHeight}px`);e.on("change:height",t),e.on("change:width",r),e.on("change:stableHeight",s),t(),r(),s()}function ef(e){return`telegram-mini-apps-${e}`}function ew(e,t){sessionStorage.setItem(ef(e),JSON.stringify(t))}function em(e){let t=sessionStorage.getItem(ef(e));return t?JSON.parse(t):null}function ey(e){let t=new eg(e);return t.on("change",()=>ew("viewport",{height:t.height,isExpanded:t.isExpanded,stableHeight:t.stableHeight,width:t.width})),t.listen(),t}function ev(e,t,r,s){let i="object"==typeof e?e:e?{themeParams:!0,viewport:!0,miniApp:!0}:{};i.miniApp&&function(e,t){let r=()=>{e_("--tg-background-color",e.backgroundColor)},s=()=>{let{backgroundColor:r,secondaryBackgroundColor:s}=t;if(q(e.headerColor)){e_("--tg-header-color",e.headerColor);return}if("bg_color"===e.headerColor&&r){e_("--tg-header-color",r);return}"secondary_bg_color"===e.headerColor&&s&&e_("--tg-header-color",s)};t.on("change",s),e.on("change:backgroundColor",r),e.on("change:headerColor",s),r(),s()}(t,r),i.themeParams&&function(e){let t=()=>{Object.entries(e.getState()).forEach(([e,t])=>{if(t){let r=e.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`);e_(`--tg-theme-${r}`,t)}})};e.on("change",t),t()}(r),i.viewport&&(s instanceof Promise?s.then(eb):eb(s))}function eE(e){return ee({botInline:{type:O().optional(),from:"tgWebAppBotInline"},initData:{type:ee({authDate:{type:Y(),from:"auth_date"},canSendAfter:{type:V().optional(),from:"can_send_after"},chat:C({id:V(),type:x(),title:x(),photoUrl:{type:x().optional(),from:"photo_url"},username:x().optional()},"Chat").optional(),chatInstance:{type:x().optional(),from:"chat_instance"},chatType:{type:x().optional(),from:"chat_type"},hash:x(),queryId:{type:x().optional(),from:"query_id"},receiver:X().optional(),startParam:{type:x().optional(),from:"start_param"},user:X().optional()},"InitData").optional(),from:"tgWebAppData"},initDataRaw:{type:x().optional(),from:"tgWebAppData"},platform:{type:x(),from:"tgWebAppPlatform"},showSettings:{type:O().optional(),from:"tgWebAppShowSettings"},startParam:{type:x().optional(),from:"tgWebAppStartParam"},themeParams:{type:eh(),from:"tgWebAppThemeParams"},version:{type:x(),from:"tgWebAppVersion"}},"LaunchParams").parse(e)}function eC(e){return eE(e.replace(/^[^?#]*[?#]/,"").replace(/[?#]/g,"&"))}function ek(){return eC(window.location.href)}function ex(){return performance.getEntriesByType("navigation")[0]}function eP(){let e=ex();if(!e)throw Error("Unable to get first navigation entry.");return eC(e.name)}let eq="telegram-mini-apps-launch-params";function eA(){return eE(sessionStorage.getItem(eq)||"")}function eS(e={}){let{async:t=!1,complete:r=t,cssVars:s=!1,acceptCustomStyles:i=!1}=e;try{var n;let e;let{initData:t,initDataRaw:o,version:a,platform:u,themeParams:b,botInline:f=!1}=function(){let e=[];for(let t of[ek,eP,eA])try{let e=t();return sessionStorage.setItem(eq,function(e){let{initDataRaw:t,themeParams:r,platform:s,version:i,showSettings:n,startParam:o,botInline:a}=e,p=new URLSearchParams;return t&&p.set("tgWebAppData",t),p.set("tgWebAppPlatform",s),p.set("tgWebAppThemeParams",JSON.stringify(Object.entries(r).reduce((e,[t,r])=>(r&&(e[t.replace(/[A-Z]/g,e=>`_${e.toLowerCase()}`).replace(/(^|_)background/,(e,t)=>`${t}bg`)]=r),e),{}))),p.set("tgWebAppVersion",i),o&&p.set("tgWebAppStartParam",o),"boolean"==typeof n&&p.set("tgWebAppShowSettings",n?"1":"0"),"boolean"==typeof a&&p.set("tgWebAppBotInline",a?"1":"0"),p.toString()}(e)),e}catch(t){e.push(t)}throw p.error("Unable to extract launch parameters. Received errors:",e),Error("Unable to retrieve launch parameters from any known source.")}(),w=(null==(n=ex())?void 0:n.type)==="reload",m=(e=0,()=>(e+=1).toString()),y=(e,t)=>{if(!d(e,a))throw new g(e,a);if(c(t)){let r;if("web_app_open_link"===e&&"try_instant_view"in t?r="try_instant_view":"web_app_set_header_color"===e&&"color"in t&&(r="color"),r&&!d(e,r,a))throw new _(e,r,a)}return l(e,t)};h()&&(i&&function(){let e=document.createElement("style");e.id="telegram-custom-styles",document.head.appendChild(e),L("set_custom_style",t=>{e.innerHTML=t})}(),y("iframe_ready",{reload_supported:!0}),L("reload_iframe",()=>{y("iframe_will_reload"),window.location.reload()}));let v={backButton:function(e,t,r){let{isVisible:s=!1}=e&&em("back-button")||{},i=new M(s,t,r);return i.on("change",()=>{ew("back-button",{isVisible:i.isVisible})}),i}(w,a,y),closingBehavior:function(e,t){let{isConfirmationNeeded:r=!1}=e&&em("closing-behavior")||{},s=new z(r,t);return s.on("change",()=>ew("closing-behavior",{isConfirmationNeeded:s.isConfirmationNeeded})),s}(w,y),cloudStorage:new Q(a,m,y),createRequestId:m,hapticFeedback:new G(a,y),invoice:new et(a,y),mainButton:function(e,t,r,s){let{backgroundColor:i=t,isEnabled:n=!1,isVisible:o=!1,isLoaderVisible:a=!1,textColor:p=r,text:h=""}=e&&em("main-button")||{},c=new er({backgroundColor:i,isEnabled:n,isLoaderVisible:a,isVisible:o,postEvent:s,text:h,textColor:p});return c.on("change",()=>ew("main-button",{backgroundColor:c.backgroundColor,isEnabled:c.isEnabled,isLoaderVisible:c.isLoaderVisible,isVisible:c.isVisible,text:c.text,textColor:c.textColor})),c}(w,b.buttonColor||"#000000",b.buttonTextColor||"#ffffff",y),miniApp:function(e,t,r,s,i,n){let{backgroundColor:o=t,headerColor:a="bg_color"}=e&&em("mini-app")||{},p=new en({headerColor:a,backgroundColor:o,version:r,botInline:s,createRequestId:i,postEvent:n});return p.on("change",()=>ew("mini-app",{backgroundColor:p.backgroundColor,headerColor:p.headerColor})),p}(w,b.backgroundColor||"#ffffff",a,f,m,y),popup:new eo(a,y),postEvent:y,qrScanner:new ea(a,y),settingsButton:function(e,t,r){let{isVisible:s=!1}=e&&em("settings-button")||{},i=new ep(s,t,r);return i.on("change",()=>{ew("settings-button",{isVisible:i.isVisible})}),i}(w,a,y),themeParams:function(e){let t=new ec(e);return t.listen(),t}(b),utils:new el(a,m,y),...t?{initData:new Z(t),initDataRaw:o}:{}},E=function(e,t,r,s){let i=e?em("viewport"):null;if(i)return ey({...i,postEvent:r});if(["macos","tdesktop","unigram","web","weba"].includes(t))return ey({height:window.innerHeight,isExpanded:!0,postEvent:r,stableHeight:window.innerHeight,width:window.innerWidth});if(s)return eu({postEvent:r,timeout:5e3}).then(({height:e,isStateStable:t,...r})=>ey({...r,height:e,stableHeight:t?e:0}));let n=ey({width:0,height:0,isExpanded:!1,postEvent:r,stableHeight:0});return n.sync({postEvent:r,timeout:5e3}).catch(e=>{console.error("Unable to actualize viewport state",e)}),n}(w,u,y,r);return E instanceof Promise||r?Promise.resolve(E).then(e=>(ev(s,v.miniApp,v.themeParams,e),{...v,viewport:e})):(ev(s,v.miniApp,v.themeParams,E),{...v,viewport:E})}catch(e){if(r)return Promise.reject(e);throw e}}function eO(e,t){return r=>{function i(i){let n={...i,[e]:t()};return s.createElement(r,{...n})}return Object.defineProperty(i,"name",{value:`With${e[0].toUpperCase()}${e.slice(1)}`}),i}}let eV=(0,s.createContext)({loading:!1});function eD({options:e,children:t}){let[r,i]=(0,s.useState)(!1),[n,o]=(0,s.useState)(),[a,p]=(0,s.useState)();(0,s.useEffect)(()=>{i(!0),eS({...e,complete:!0}).then(p).catch(o).finally(()=>i(!1))},[]);let h=(0,s.useMemo)(()=>{let e={loading:r};return n&&(e.error=n),a&&(e.initResult=a),e},[r,a,n]);return s.createElement(eV.Provider,{value:h},t)}function eI({options:e={},children:t}){let r=(0,s.useMemo)(()=>{let t={loading:!1};try{t.initResult=eS({...e,complete:!1})}catch(e){t.error=e}return t},[]);return s.createElement(eV.Provider,{value:r},t)}function eT(e){let{options:t={},async:r}=e;return t.async||t.complete||r?s.createElement(eD,{...e}):s.createElement(eI,{...e})}function e$(){return(0,s.useContext)(eV)}function eL(e){let{initResult:t}=e$();if(!t)throw Error(`Unable to get init result key "${e}" as long as SDK is not initialized`);return t[e]}function eR(e){return Object.create(Object.getPrototypeOf(e),Object.getOwnPropertyDescriptors(e))}function eW(e,t){return t?()=>(function(e){let t=eL(e),[r,i]=(0,s.useState)(eR(t));return(0,s.useEffect)(()=>t.on("change",()=>{i(eR(t))}),[t]),r})(e):()=>eL(e)}eV.displayName="SDKContext";let eB=(eO("backButton",eW("backButton",!0)),eW("closingBehavior",!0)),eN=(eO("closingBehavior",eB),eW("cloudStorage")),eH=(eO("cloudStorage",eN),eW("hapticFeedback")),eU=(eO("hapticFeedback",eH),eW("initData")),ej=(eO("initData",eU),eW("initDataRaw")),eM=(eO("initDataRaw",ej),eW("invoice",!0));eO("invoice",eM);let ez=eW("mainButton",!0),eJ=(eO("mainButton",ez),eW("miniApp",!0)),eF=(eO("miniApp",eJ),eW("popup",!0)),eK=(eO("popup",eF),eW("postEvent")),eQ=(eO("postEvent",eK),eW("settingsButton",!0)),eG=(eO("settingsButton",eQ),eW("qrScanner",!0)),eZ=(eO("qrScanner",eG),eW("themeParams",!0)),eX=(eO("themeParams",eZ),eW("utils")),eY=(eO("utils",eX),eW("viewport",!0));function e0(e,t={}){return"function"==typeof e?s.createElement(e,{...t}):e}function e1(e){let{loading:t,initResult:r,error:s}=e$();return r?e.children:s?e0(e.error,{error:s}):e0(t?e.loading:e.initial)}eO("viewport",eY)}}]);