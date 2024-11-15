System.register(["./index-legacy-D3jG2YDR.js"],(function(t,e){"use strict";var r,s;return{setters:[t=>{r=t.i,s=t.c}],execute:function(){class e{constructor(t,e,r,s,i){this.id=e,this.name=r,this.disableScroll=i,this.priority=1e6*s+e,this.ctrl=t}canStart(){return!!this.ctrl&&this.ctrl.canStart(this.name)}start(){return!!this.ctrl&&this.ctrl.start(this.name,this.id,this.priority)}capture(){if(!this.ctrl)return!1;const t=this.ctrl.capture(this.name,this.id,this.priority);return t&&this.disableScroll&&this.ctrl.disableScroll(this.id),t}release(){this.ctrl&&(this.ctrl.release(this.id),this.disableScroll&&this.ctrl.enableScroll(this.id))}destroy(){this.release(),this.ctrl=void 0}}class i{constructor(t,e,r,s){this.id=e,this.disable=r,this.disableScroll=s,this.ctrl=t}block(){if(this.ctrl){if(this.disable)for(const t of this.disable)this.ctrl.disableGesture(t,this.id);this.disableScroll&&this.ctrl.disableScroll(this.id)}}unblock(){if(this.ctrl){if(this.disable)for(const t of this.disable)this.ctrl.enableGesture(t,this.id);this.disableScroll&&this.ctrl.enableScroll(this.id)}}destroy(){this.unblock(),this.ctrl=void 0}}const n="backdrop-no-scroll",l=new
/*!
             * (C) Ionic http://ionicframework.com - MIT License
             */
class{constructor(){this.gestureId=0,this.requestedStart=new Map,this.disabledGestures=new Map,this.disabledScroll=new Set}createGesture(t){var r;return new e(this,this.newID(),t.name,null!==(r=t.priority)&&void 0!==r?r:0,!!t.disableScroll)}createBlocker(t={}){return new i(this,this.newID(),t.disable,!!t.disableScroll)}start(t,e,r){return this.canStart(t)?(this.requestedStart.set(e,r),!0):(this.requestedStart.delete(e),!1)}capture(t,e,r){if(!this.start(t,e,r))return!1;const s=this.requestedStart;let i=-1e4;if(s.forEach((t=>{i=Math.max(i,t)})),i===r){this.capturedId=e,s.clear();const r=new CustomEvent("ionGestureCaptured",{detail:{gestureName:t}});return document.dispatchEvent(r),!0}return s.delete(e),!1}release(t){this.requestedStart.delete(t),this.capturedId===t&&(this.capturedId=void 0)}disableGesture(t,e){let r=this.disabledGestures.get(t);void 0===r&&(r=new Set,this.disabledGestures.set(t,r)),r.add(e)}enableGesture(t,e){const r=this.disabledGestures.get(t);void 0!==r&&r.delete(e)}disableScroll(t){this.disabledScroll.add(t),1===this.disabledScroll.size&&document.body.classList.add(n)}enableScroll(t){this.disabledScroll.delete(t),0===this.disabledScroll.size&&document.body.classList.remove(n)}canStart(t){return void 0===this.capturedId&&!this.isDisabled(t)}isCaptured(){return void 0!==this.capturedId}isScrollDisabled(){return this.disabledScroll.size>0}isDisabled(t){const e=this.disabledGestures.get(t);return!!(e&&e.size>0)}newID(){return this.gestureId++,this.gestureId}},a=(t,e,r,s)=>{const i=c(t)?{capture:!!s.capture,passive:!!s.passive}:!!s.capture;let n,l;return t.__zone_symbol__addEventListener?(n="__zone_symbol__addEventListener",l="__zone_symbol__removeEventListener"):(n="addEventListener",l="removeEventListener"),t[n](e,r,i),()=>{t[l](e,r,i)}},c=t=>{if(void 0===o)try{const e=Object.defineProperty({},"passive",{get:()=>{o=!0}});t.addEventListener("optsTest",(()=>{}),e)}catch(e){o=!1}return!!o};let o;const d=t=>t instanceof Document?t:t.ownerDocument,u=t=>{let e=!1,r=!1,s=!0,i=!1;const n=Object.assign({disableScroll:!1,direction:"x",gesturePriority:0,passive:!0,maxAngle:40,threshold:10},t),c=n.canStart,o=n.onWillStart,u=n.onStart,m=n.onEnd,p=n.notCaptured,S=n.onMove,y=n.threshold,f=n.passive,g=n.blurOnStart,X={type:"pan",startX:0,startY:0,startTime:0,currentX:0,currentY:0,velocityX:0,velocityY:0,deltaX:0,deltaY:0,currentTime:0,event:void 0,data:void 0},Y=((t,e,r)=>{const s=r*(Math.PI/180),i="x"===t,n=Math.cos(s),l=e*e;let a=0,c=0,o=!1,d=0;return{start(t,e){a=t,c=e,d=0,o=!0},detect(t,e){if(!o)return!1;const r=t-a,s=e-c,u=r*r+s*s;if(u<l)return!1;const h=Math.sqrt(u),b=(i?r:s)/h;return d=b>n?1:b<-n?-1:0,o=!1,!0},isGesture:()=>0!==d,getDirection:()=>d}})(n.direction,n.threshold,n.maxAngle),w=l.createGesture({name:t.gestureName,priority:t.gesturePriority,disableScroll:t.disableScroll}),G=()=>{e&&(i=!1,S&&S(X))},_=()=>!!w.capture()&&(e=!0,s=!1,X.startX=X.currentX,X.startY=X.currentY,X.startTime=X.currentTime,o?o(X).then(D):D(),!0),D=()=>{g&&(()=>{if("undefined"!=typeof document){const t=document.activeElement;(null==t?void 0:t.blur)&&t.blur()}})(),u&&u(X),s=!0},E=()=>{e=!1,r=!1,i=!1,s=!0,w.release()},I=t=>{const r=e,i=s;E(),i&&(h(X,t),r?m&&m(X):p&&p(X))},M=((t,e,r,s,i)=>{let n,l,c,o,u,h,b,v=0;const m=s=>{v=Date.now()+2e3,e(s)&&(!l&&r&&(l=a(t,"touchmove",r,i)),c||(c=a(s.target,"touchend",S,i)),o||(o=a(s.target,"touchcancel",S,i)))},p=s=>{v>Date.now()||e(s)&&(!h&&r&&(h=a(d(t),"mousemove",r,i)),b||(b=a(d(t),"mouseup",y,i)))},S=t=>{f(),s&&s(t)},y=t=>{g(),s&&s(t)},f=()=>{l&&l(),c&&c(),o&&o(),l=c=o=void 0},g=()=>{h&&h(),b&&b(),h=b=void 0},X=()=>{f(),g()},Y=(e=!0)=>{e?(n||(n=a(t,"touchstart",m,i)),u||(u=a(t,"mousedown",p,i))):(n&&n(),u&&u(),n=u=void 0,X())};return{enable:Y,stop:X,destroy:()=>{Y(!1),s=r=e=void 0}}})(n.el,(t=>{const e=v(t);return!(r||!s)&&(b(t,X),X.startX=X.currentX,X.startY=X.currentY,X.startTime=X.currentTime=e,X.velocityX=X.velocityY=X.deltaX=X.deltaY=0,X.event=t,(!c||!1!==c(X))&&(w.release(),!!w.start()&&(r=!0,0===y?_():(Y.start(X.startX,X.startY),!0))))}),(t=>{e?!i&&s&&(i=!0,h(X,t),requestAnimationFrame(G)):(h(X,t),Y.detect(X.currentX,X.currentY)&&(Y.isGesture()&&_()||T()))}),I,{capture:!1,passive:f}),T=()=>{E(),M.stop(),p&&p(X)};return{enable(t=!0){t||(e&&I(void 0),E()),M.enable(t)},destroy(){w.destroy(),M.destroy()}}},h=(t,e)=>{if(!e)return;const r=t.currentX,s=t.currentY,i=t.currentTime;b(e,t);const n=t.currentX,l=t.currentY,a=(t.currentTime=v(e))-i;if(a>0&&a<100){const e=(n-r)/a,i=(l-s)/a;t.velocityX=.7*e+.3*t.velocityX,t.velocityY=.7*i+.3*t.velocityY}t.deltaX=n-t.startX,t.deltaY=l-t.startY,t.event=e},b=(t,e)=>{let r=0,s=0;if(t){const e=t.changedTouches;if(e&&e.length>0){const t=e[0];r=t.clientX,s=t.clientY}else void 0!==t.pageX&&(r=t.pageX,s=t.pageY)}e.currentX=r,e.currentY=s},v=t=>t.timeStamp||Date.now();t("createSwipeBackGesture",((t,e,i,n,l)=>{const a=t.ownerDocument.defaultView;let c=r(t);const o=t=>c?-t.deltaX:t.deltaX;return u({el:t,gestureName:"goback-swipe",gesturePriority:101,threshold:10,canStart:s=>(c=r(t),(t=>{const{startX:e}=t;return c?e>=a.innerWidth-50:e<=50})(s)&&e()),onStart:i,onMove:t=>{const e=o(t)/a.innerWidth;n(e)},onEnd:t=>{const e=o(t),r=a.innerWidth,i=e/r,n=(t=>c?-t.velocityX:t.velocityX)(t),d=n>=0&&(n>.2||e>r/2),u=(d?1-i:i)*r;let h=0;if(u>5){const t=u/Math.abs(n);h=Math.min(t,540)}l(d,i<=0?.01:s(0,i,.9999),h)}})}))}}}));
