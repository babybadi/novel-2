!function(b,a,d){function c(i,h){this.wrapper="string"==typeof i?a.querySelector(i):i,this.scroller=this.wrapper.children[0],this.scrollerStyle=this.scroller.style,this.options={disablePointer:!f.hasPointer,disableTouch:f.hasPointer||!f.hasTouch,disableMouse:f.hasPointer||f.hasTouch,startX:0,startY:0,scrollY:!0,directionLockThreshold:5,momentum:!0,bounce:!0,bounceTime:600,bounceEasing:"",preventDefault:!0,preventDefaultException:{tagName:/^(INPUT|TEXTAREA|BUTTON|SELECT)$/},HWCompositing:!0,useTransition:!0,useTransform:!0,bindToWrapper:"undefined"==typeof b.onmousedown};for(var j in h){this.options[j]=h[j]}this.translateZ=this.options.HWCompositing&&f.hasPerspective?" translateZ(0)":"",this.options.useTransition=f.hasTransition&&this.options.useTransition,this.options.useTransform=f.hasTransform&&this.options.useTransform,this.options.eventPassthrough=this.options.eventPassthrough===!0?"vertical":this.options.eventPassthrough,this.options.preventDefault=!this.options.eventPassthrough&&this.options.preventDefault,this.options.scrollY="vertical"!=this.options.eventPassthrough&&this.options.scrollY,this.options.scrollX="horizontal"!=this.options.eventPassthrough&&this.options.scrollX,this.options.freeScroll=this.options.freeScroll&&!this.options.eventPassthrough,this.options.directionLockThreshold=this.options.eventPassthrough?0:this.options.directionLockThreshold,this.options.bounceEasing="string"==typeof this.options.bounceEasing?f.ease[this.options.bounceEasing]||f.ease.circular:this.options.bounceEasing,this.options.resizePolling=void 0===this.options.resizePolling?60:this.options.resizePolling,this.options.tap===!0&&(this.options.tap="tap"),this.options.useTransition||this.options.useTransform||/relative|absolute/i.test(this.scrollerStyle.position)||(this.scrollerStyle.position="relative"),this.x=0,this.y=0,this.directionX=0,this.directionY=0,this._events={},this._init(),this.refresh(),this.scrollTo(this.options.startX,this.options.startY),this.enable()}var g=b.requestAnimationFrame||b.webkitRequestAnimationFrame||b.mozRequestAnimationFrame||b.oRequestAnimationFrame||b.msRequestAnimationFrame||function(e){b.setTimeout(e,1000/60)},f=function(){function i(h){return j!==!1&&(""===j?h:j+h.charAt(0).toUpperCase()+h.substr(1))}var l={},k=a.createElement("div").style,j=function(){for(var m,h=["t","webkitT","MozT","msT","OT"],o=0,n=h.length;o<n;o++){if(m=h[o]+"ransform",m in k){return h[o].substr(0,h[o].length-1)}}return !1}();l.getTime=Date.now||function(){return(new Date).getTime()},l.extend=function(m,h){for(var n in h){m[n]=h[n]}},l.addEvent=function(m,h,o,n){m.addEventListener(h,o,!!n)},l.removeEvent=function(m,h,o,n){m.removeEventListener(h,o,!!n)},l.prefixPointerEvent=function(h){return b.MSPointerEvent?"MSPointer"+h.charAt(7).toUpperCase()+h.substr(8):h},l.momentum=function(z,v,A,q,p,m){var w,y,x=z-v,u=d.abs(x)/A;return m=void 0===m?0.0006:m,w=z+u*u/(2*m)*(x<0?-1:1),y=u/m,w<q?(w=p?q-p/2.5*(u/8):q,x=d.abs(w-z),y=x/u):w>0&&(w=p?p/2.5*(u/8):0,x=d.abs(z)+w,y=x/u),{destination:d.round(w),duration:y}};var e=i("transform");return l.extend(l,{hasTransform:e!==!1,hasPerspective:i("perspective") in k,hasTouch:"ontouchstart" in b,hasPointer:!(!b.PointerEvent&&!b.MSPointerEvent),hasTransition:i("transition") in k}),l.isBadAndroid=function(){var h=b.navigator.appVersion;if(/Android/.test(h)&&!/Chrome\/\d/.test(h)){var m=h.match(/Safari\/(\d+.\d)/);return !(m&&"object"==typeof m&&m.length>=2)||parseFloat(m[1])<535.19}return !1}(),l.extend(l.style={},{transform:e,transitionTimingFunction:i("transitionTimingFunction"),transitionDuration:i("transitionDuration"),transitionDelay:i("transitionDelay"),transformOrigin:i("transformOrigin"),touchAction:i("touchAction")}),l.hasClass=function(m,h){var n=new RegExp("(^|\\s)"+h+"(\\s|$)");return n.test(m.className)},l.addClass=function(m,h){if(!l.hasClass(m,h)){var n=m.className.split(" ");n.push(h),m.className=n.join(" ")}},l.removeClass=function(m,h){if(l.hasClass(m,h)){var n=new RegExp("(^|\\s)"+h+"(\\s|$)","g");m.className=m.className.replace(n," ")}},l.offset=function(m){for(var h=-m.offsetLeft,n=-m.offsetTop;m=m.offsetParent;){h-=m.offsetLeft,n-=m.offsetTop}return{left:h,top:n}},l.preventDefaultException=function(m,h){for(var n in h){if(h[n].test(m[n])){return !0}}return !1},l.extend(l.eventType={},{touchstart:1,touchmove:1,touchend:1,mousedown:2,mousemove:2,mouseup:2,pointerdown:3,pointermove:3,pointerup:3,MSPointerDown:3,MSPointerMove:3,MSPointerUp:3}),l.extend(l.ease={},{quadratic:{style:"cubic-bezier(0.25, 0.46, 0.45, 0.94)",fn:function(h){return h*(2-h)}},circular:{style:"cubic-bezier(0.1, 0.57, 0.1, 1)",fn:function(h){return d.sqrt(1- --h*h)}},back:{style:"cubic-bezier(0.175, 0.885, 0.32, 1.275)",fn:function(m){var h=4;return(m-=1)*m*((h+1)*m+h)+1}},bounce:{style:"",fn:function(h){return(h/=1)<1/2.75?7.5625*h*h:h<2/2.75?7.5625*(h-=1.5/2.75)*h+0.75:h<2.5/2.75?7.5625*(h-=2.25/2.75)*h+0.9375:7.5625*(h-=2.625/2.75)*h+0.984375}},elastic:{style:"",fn:function(m){var h=0.22,n=0.4;return 0===m?0:1==m?1:n*d.pow(2,-10*m)*d.sin((m-h/4)*(2*d.PI)/h)+1}}}),l.tap=function(h,n){var m=a.createEvent("Event");m.initEvent(n,!0,!0),m.pageX=h.pageX,m.pageY=h.pageY,h.target.dispatchEvent(m)},l.click=function(m){var h,o=m.target;/(SELECT|INPUT|TEXTAREA)/i.test(o.tagName)||(h=a.createEvent(b.MouseEvent?"MouseEvents":"Event"),h.initEvent("click",!0,!0),h.view=m.view||b,h.detail=1,h.screenX=o.screenX||0,h.screenY=o.screenY||0,h.clientX=o.clientX||0,h.clientY=o.clientY||0,h.ctrlKey=!!m.ctrlKey,h.altKey=!!m.altKey,h.shiftKey=!!m.shiftKey,h.metaKey=!!m.metaKey,h.button=0,h.relatedTarget=null,h._constructed=!0,o.dispatchEvent(h))},l.getTouchAction=function(m,h){var n="none";return"vertical"===m?n="pan-y":"horizontal"===m&&(n="pan-x"),h&&"none"!=n&&(n+=" pinch-zoom"),n},l.getRect=function(m){if(m instanceof SVGElement){var h=m.getBoundingClientRect();return{top:h.top,left:h.left,width:h.width,height:h.height}}return{top:m.offsetTop,left:m.offsetLeft,width:m.offsetWidth,height:m.offsetHeight}},l}();c.prototype={version:"5.2.0-snapshot",_init:function(){this._initEvents()},destroy:function(){this._initEvents(!0),clearTimeout(this.resizeTimeout),this.resizeTimeout=null,this._execEvent("destroy")},_transitionEnd:function(e){e.target==this.scroller&&this.isInTransition&&(this._transitionTime(),this.resetPosition(this.options.bounceTime)||(this.isInTransition=!1,this._execEvent("scrollEnd")))},_start:function(h){if(1!=f.eventType[h.type]){var e;if(e=h.which?h.button:h.button<2?0:4==h.button?1:2,0!==e){return}}if(this.enabled&&(!this.initiated||f.eventType[h.type]===this.initiated)){!this.options.preventDefault||f.isBadAndroid||f.preventDefaultException(h.target,this.options.preventDefaultException)||h.preventDefault();var j,k=h.touches?h.touches[0]:h;this.initiated=f.eventType[h.type],this.moved=!1,this.distX=0,this.distY=0,this.directionX=0,this.directionY=0,this.directionLocked=0,this.startTime=f.getTime(),this.options.useTransition&&this.isInTransition?(this._transitionTime(),this.isInTransition=!1,j=this.getComputedPosition(),this._translate(d.round(j.x),d.round(j.y)),this._execEvent("scrollEnd")):!this.options.useTransition&&this.isAnimating&&(this.isAnimating=!1,this._execEvent("scrollEnd")),this.startX=this.x,this.startY=this.y,this.absStartX=this.x,this.absStartY=this.y,this.pointX=k.pageX,this.pointY=k.pageY,this._execEvent("beforeScrollStart")}},_move:function(u){if(this.enabled&&f.eventType[u.type]===this.initiated){this.options.preventDefault&&u.preventDefault();var m,v,j,e,o=u.touches?u.touches[0]:u,q=o.pageX-this.pointX,p=o.pageY-this.pointY,k=f.getTime();if(this.pointX=o.pageX,this.pointY=o.pageY,this.distX+=q,this.distY+=p,j=d.abs(this.distX),e=d.abs(this.distY),!(k-this.endTime>300&&j<10&&e<10)){if(this.directionLocked||this.options.freeScroll||(j>e+this.options.directionLockThreshold?this.directionLocked="h":e>=j+this.options.directionLockThreshold?this.directionLocked="v":this.directionLocked="n"),"h"==this.directionLocked){if("vertical"==this.options.eventPassthrough){u.preventDefault()}else{if("horizontal"==this.options.eventPassthrough){return void (this.initiated=!1)}}p=0}else{if("v"==this.directionLocked){if("horizontal"==this.options.eventPassthrough){u.preventDefault()}else{if("vertical"==this.options.eventPassthrough){return void (this.initiated=!1)}}q=0}}q=this.hasHorizontalScroll?q:0,p=this.hasVerticalScroll?p:0,m=this.x+q,v=this.y+p,(m>0||m<this.maxScrollX)&&(m=this.options.bounce?this.x+q/3:m>0?0:this.maxScrollX),(v>0||v<this.maxScrollY)&&(v=this.options.bounce?this.y+p/3:v>0?0:this.maxScrollY),this.directionX=q>0?-1:q<0?1:0,this.directionY=p>0?-1:p<0?1:0,this.moved||this._execEvent("scrollStart"),this.moved=!0,this._translate(m,v),k-this.startTime>300&&(this.startTime=k,this.startX=this.x,this.startY=this.y)}}},_end:function(w){if(this.enabled&&f.eventType[w.type]===this.initiated){this.options.preventDefault&&!f.preventDefaultException(w.target,this.options.preventDefaultException)&&w.preventDefault();var o,x,k=(w.changedTouches?w.changedTouches[0]:w,f.getTime()-this.startTime),e=d.round(this.x),q=d.round(this.y),v=d.abs(e-this.startX),u=d.abs(q-this.startY),m=0,j="";if(this.isInTransition=0,this.initiated=0,this.endTime=f.getTime(),!this.resetPosition(this.options.bounceTime)){return this.scrollTo(e,q),this.moved?this._events.flick&&k<200&&v<100&&u<100?void this._execEvent("flick"):(this.options.momentum&&k<300&&(o=this.hasHorizontalScroll?f.momentum(this.x,this.startX,k,this.maxScrollX,this.options.bounce?this.wrapperWidth:0,this.options.deceleration):{destination:e,duration:0},x=this.hasVerticalScroll?f.momentum(this.y,this.startY,k,this.maxScrollY,this.options.bounce?this.wrapperHeight:0,this.options.deceleration):{destination:q,duration:0},e=o.destination,q=x.destination,m=d.max(o.duration,x.duration),this.isInTransition=1),e!=this.x||q!=this.y?((e>0||e<this.maxScrollX||q>0||q<this.maxScrollY)&&(j=f.ease.quadratic),void this.scrollTo(e,q,m,j)):void this._execEvent("scrollEnd")):(this.options.tap&&f.tap(w,this.options.tap),this.options.click&&f.click(w),void this._execEvent("scrollCancel"))}}},_resize:function(){var e=this;clearTimeout(this.resizeTimeout),this.resizeTimeout=setTimeout(function(){e.refresh()},this.options.resizePolling)},resetPosition:function(j){var h=this.x,k=this.y;return j=j||0,!this.hasHorizontalScroll||this.x>0?h=0:this.x<this.maxScrollX&&(h=this.maxScrollX),!this.hasVerticalScroll||this.y>0?k=0:this.y<this.maxScrollY&&(k=this.maxScrollY),(h!=this.x||k!=this.y)&&(this.scrollTo(h,k,j,this.options.bounceEasing),!0)},disable:function(){this.enabled=!1},enable:function(){this.enabled=!0},refresh:function(){f.getRect(this.wrapper),this.wrapperWidth=this.wrapper.clientWidth,this.wrapperHeight=this.wrapper.clientHeight;var e=f.getRect(this.scroller);this.scrollerWidth=e.width,this.scrollerHeight=e.height,this.maxScrollX=this.wrapperWidth-this.scrollerWidth,this.maxScrollY=this.wrapperHeight-this.scrollerHeight,this.hasHorizontalScroll=this.options.scrollX&&this.maxScrollX<0,this.hasVerticalScroll=this.options.scrollY&&this.maxScrollY<0,this.hasHorizontalScroll||(this.maxScrollX=0,this.scrollerWidth=this.wrapperWidth),this.hasVerticalScroll||(this.maxScrollY=0,this.scrollerHeight=this.wrapperHeight),this.endTime=0,this.directionX=0,this.directionY=0,f.hasPointer&&!this.options.disablePointer&&(this.wrapper.style[f.style.touchAction]=f.getTouchAction(this.options.eventPassthrough,!0),this.wrapper.style[f.style.touchAction]||(this.wrapper.style[f.style.touchAction]=f.getTouchAction(this.options.eventPassthrough,!1))),this.wrapperOffset=f.offset(this.wrapper),this._execEvent("refresh"),this.resetPosition()},on:function(h,e){this._events[h]||(this._events[h]=[]),this._events[h].push(e)},off:function(j,h){if(this._events[j]){var k=this._events[j].indexOf(h);k>-1&&this._events[j].splice(k,1)}},_execEvent:function(j){if(this._events[j]){var h=0,k=this._events[j].length;if(k){for(;h<k;h++){this._events[j][h].apply(this,[].slice.call(arguments,1))}}}},scrollBy:function(j,h,l,k){j=this.x+j,h=this.y+h,l=l||0,this.scrollTo(j,h,l,k)},scrollTo:function(j,h,l,k){k=k||f.ease.circular,this.isInTransition=this.options.useTransition&&l>0;var m=this.options.useTransition&&k.style;!l||m?(m&&(this._transitionTimingFunction(k.style),this._transitionTime(l)),this._translate(j,h)):this._animate(j,h,l,k.fn)},scrollToElement:function(k,j,m,q,o){if(k=k.nodeType?k:this.scroller.querySelector(k)){var l=f.offset(k);l.left-=this.wrapperOffset.left,l.top-=this.wrapperOffset.top;var e=f.getRect(k),p=f.getRect(this.wrapper);m===!0&&(m=d.round(e.width/2-p.width/2)),q===!0&&(q=d.round(e.height/2-p.height/2)),l.left-=m||0,l.top-=q||0,l.left=l.left>0?0:l.left<this.maxScrollX?this.maxScrollX:l.left,l.top=l.top>0?0:l.top<this.maxScrollY?this.maxScrollY:l.top,j=void 0===j||null===j||"auto"===j?d.max(d.abs(this.x-l.left),d.abs(this.y-l.top)):j,this.scrollTo(l.left,l.top,j,o)}},_transitionTime:function(j){if(this.options.useTransition){j=j||0;var h=f.style.transitionDuration;if(h&&(this.scrollerStyle[h]=j+"ms",!j&&f.isBadAndroid)){this.scrollerStyle[h]="0.0001ms";var k=this;g(function(){"0.0001ms"===k.scrollerStyle[h]&&(k.scrollerStyle[h]="0s")})}}},_transitionTimingFunction:function(e){this.scrollerStyle[f.style.transitionTimingFunction]=e},_translate:function(h,e){this.options.useTransform?this.scrollerStyle[f.style.transform]="translate("+h+"px,"+e+"px)"+this.translateZ:(h=d.round(h),e=d.round(e),this.scrollerStyle.left=h+"px",this.scrollerStyle.top=e+"px"),this.x=h,this.y=e},_initEvents:function(h){var k=h?f.removeEvent:f.addEvent,j=this.options.bindToWrapper?this.wrapper:b;k(b,"orientationchange",this),k(b,"resize",this),this.options.click&&k(this.wrapper,"click",this,!0),this.options.disableMouse||(k(this.wrapper,"mousedown",this),k(j,"mousemove",this),k(j,"mousecancel",this),k(j,"mouseup",this)),f.hasPointer&&!this.options.disablePointer&&(k(this.wrapper,f.prefixPointerEvent("pointerdown"),this),k(j,f.prefixPointerEvent("pointermove"),this),k(j,f.prefixPointerEvent("pointercancel"),this),k(j,f.prefixPointerEvent("pointerup"),this)),f.hasTouch&&!this.options.disableTouch&&(k(this.wrapper,"touchstart",this),k(j,"touchmove",this),k(j,"touchcancel",this),k(j,"touchend",this)),k(this.scroller,"transitionend",this),k(this.scroller,"webkitTransitionEnd",this),k(this.scroller,"oTransitionEnd",this),k(this.scroller,"MSTransitionEnd",this)},getComputedPosition:function(){var h,k,j=b.getComputedStyle(this.scroller,null);return this.options.useTransform?(j=j[f.style.transform].split(")")[0].split(", "),h=+(j[12]||j[4]),k=+(j[13]||j[5])):(h=+j.left.replace(/[^-\d.]/g,""),k=+j.top.replace(/[^-\d.]/g,"")),{x:h,y:k}},_animate:function(w,n,q,x){function j(){var h,l,i,e=f.getTime();return e>=k?(o.isAnimating=!1,o._translate(w,n),void (o.resetPosition(o.options.bounceTime)||o._execEvent("scrollEnd"))):(e=(e-m)/q,i=x(e),h=(w-v)*i+v,l=(n-u)*i+u,o._translate(h,l),void (o.isAnimating&&g(j)))}var o=this,v=this.x,u=this.y,m=f.getTime(),k=m+q;this.isAnimating=!0,j()},handleEvent:function(e){switch(e.type){case"touchstart":case"pointerdown":case"MSPointerDown":case"mousedown":this._start(e);break;case"touchmove":case"pointermove":case"MSPointerMove":case"mousemove":this._move(e);break;case"touchend":case"pointerup":case"MSPointerUp":case"mouseup":case"touchcancel":case"pointercancel":case"MSPointerCancel":case"mousecancel":this._end(e);break;case"orientationchange":case"resize":this._resize();break;case"transitionend":case"webkitTransitionEnd":case"oTransitionEnd":case"MSTransitionEnd":this._transitionEnd(e);break;case"wheel":case"DOMMouseScroll":case"mousewheel":this._wheel(e);break;case"keydown":this._key(e);break;case"click":this.enabled&&!e._constructed&&(e.preventDefault(),e.stopPropagation())}}},c.utils=f,"undefined"!=typeof module&&module.exports?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):b.IScroll=c}(window,document,Math);