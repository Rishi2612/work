/*!
 * jQuery Cookie Plugin v1.4.1
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2006, 2014 Klaus Hartl
 * Released under the MIT license
 */
(function(a){if(typeof define==="function"&&define.amd){define(["jquery"],a)
}else{if(typeof exports==="object"){module.exports=a(require("jquery"))
}else{a(jQuery)
}}}(function(f){var a=/\+/g;
function d(i){return b.raw?i:encodeURIComponent(i)
}function g(i){return b.raw?i:decodeURIComponent(i)
}function h(i){return d(b.json?JSON.stringify(i):String(i))
}function c(i){if(i.indexOf('"')===0){i=i.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\")
}try{i=decodeURIComponent(i.replace(a," "));
return b.json?JSON.parse(i):i
}catch(j){}}function e(j,i){var k=b.raw?j:c(j);
return f.isFunction(i)?i(k):k
}var b=f.cookie=function(r,p,w){if(arguments.length>1&&!f.isFunction(p)){w=f.extend({},b.defaults,w);
if(typeof w.expires==="number"){var s=w.expires,v=w.expires=new Date();
v.setMilliseconds(v.getMilliseconds()+s*86400000)
}return(document.cookie=[d(r),"=",h(p),w.expires?"; expires="+w.expires.toUTCString():"",w.path?"; path="+w.path:"",w.domain?"; domain="+w.domain:"",w.secure?"; secure":""].join(""))
}var x=r?undefined:{},u=document.cookie?document.cookie.split("; "):[],o=0,m=u.length;
for(;
o<m;
o++){var n=u[o].split("="),j=g(n.shift()),k=n.join("=");
if(r===j){x=e(k,p);
break
}if(!r&&(k=e(k))!==undefined){x[j]=k
}}return x
};
b.defaults={};
f.removeCookie=function(j,i){f.cookie(j,"",f.extend({},i,{expires:-1}));
return !f.cookie(j)
}
}));
(function(){window.lazySizesConfig=window.lazySizesConfig||{};
window.lazySizesConfig.customMedia={"--extrasmall":"(min-width: 320px)","--small":"(min-width: 640px)","--medium":"(min-width: 960px)","--large":"(min-width: 1280px)","--extralarge":"(min-width: 1440px)"}
});
/*! jQuery UI - v1.12.1 - 2016-09-14
* http://jqueryui.com
* Includes: widget.js, position.js, data.js, disable-selection.js, effect.js, effects/effect-blind.js, effects/effect-bounce.js, effects/effect-clip.js, effects/effect-drop.js, effects/effect-explode.js, effects/effect-fade.js, effects/effect-fold.js, effects/effect-highlight.js, effects/effect-puff.js, effects/effect-pulsate.js, effects/effect-scale.js, effects/effect-shake.js, effects/effect-size.js, effects/effect-slide.js, effects/effect-transfer.js, focusable.js, form-reset-mixin.js, jquery-1-7.js, keycode.js, labels.js, scroll-parent.js, tabbable.js, unique-id.js, widgets/accordion.js, widgets/autocomplete.js, widgets/button.js, widgets/checkboxradio.js, widgets/controlgroup.js, widgets/datepicker.js, widgets/dialog.js, widgets/draggable.js, widgets/droppable.js, widgets/menu.js, widgets/mouse.js, widgets/progressbar.js, widgets/resizable.js, widgets/selectable.js, widgets/selectmenu.js, widgets/slider.js, widgets/sortable.js, widgets/spinner.js, widgets/tabs.js, widgets/tooltip.js
* Copyright jQuery Foundation and other contributors; Licensed MIT */
(function(a){if(typeof define==="function"&&define.amd){define(["jquery"],a)
}else{a(jQuery)
}}(function(al){al.ui=al.ui||{};
var z=al.ui.version="1.12.1";
/*!
 * jQuery UI Widget 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
;
var J=0;
var am=Array.prototype.slice;
al.cleanData=(function(aw){return function(ax){var az,aA,ay;
for(ay=0;
(aA=ax[ay])!=null;
ay++){try{az=al._data(aA,"events");
if(az&&az.remove){al(aA).triggerHandler("remove")
}}catch(aB){}}aw(ax)
}
})(al.cleanData);
al.widget=function(aw,ax,aE){var aC,az,aD;
var ay={};
var aB=aw.split(".")[0];
aw=aw.split(".")[1];
var aA=aB+"-"+aw;
if(!aE){aE=ax;
ax=al.Widget
}if(al.isArray(aE)){aE=al.extend.apply(null,[{}].concat(aE))
}al.expr[":"][aA.toLowerCase()]=function(aF){return !!al.data(aF,aA)
};
al[aB]=al[aB]||{};
aC=al[aB][aw];
az=al[aB][aw]=function(aF,aG){if(!this._createWidget){return new az(aF,aG)
}if(arguments.length){this._createWidget(aF,aG)
}};
al.extend(az,aC,{version:aE.version,_proto:al.extend({},aE),_childConstructors:[]});
aD=new ax();
aD.options=al.widget.extend({},aD.options);
al.each(aE,function(aG,aF){if(!al.isFunction(aF)){ay[aG]=aF;
return
}ay[aG]=(function(){function aH(){return ax.prototype[aG].apply(this,arguments)
}function aI(aJ){return ax.prototype[aG].apply(this,aJ)
}return function(){var aL=this._super;
var aJ=this._superApply;
var aK;
this._super=aH;
this._superApply=aI;
aK=aF.apply(this,arguments);
this._super=aL;
this._superApply=aJ;
return aK
}
})()
});
az.prototype=al.widget.extend(aD,{widgetEventPrefix:aC?(aD.widgetEventPrefix||aw):aw},ay,{constructor:az,namespace:aB,widgetName:aw,widgetFullName:aA});
if(aC){al.each(aC._childConstructors,function(aG,aH){var aF=aH.prototype;
al.widget(aF.namespace+"."+aF.widgetName,az,aH._proto)
});
delete aC._childConstructors
}else{ax._childConstructors.push(az)
}al.widget.bridge(aw,az);
return az
};
al.widget.extend=function(aB){var ax=am.call(arguments,1);
var aA=0;
var aw=ax.length;
var ay;
var az;
for(;
aA<aw;
aA++){for(ay in ax[aA]){az=ax[aA][ay];
if(ax[aA].hasOwnProperty(ay)&&az!==undefined){if(al.isPlainObject(az)){aB[ay]=al.isPlainObject(aB[ay])?al.widget.extend({},aB[ay],az):al.widget.extend({},az)
}else{aB[ay]=az
}}}}return aB
};
al.widget.bridge=function(ax,aw){var ay=aw.prototype.widgetFullName||ax;
al.fn[ax]=function(aB){var az=typeof aB==="string";
var aA=am.call(arguments,1);
var aC=this;
if(az){if(!this.length&&aB==="instance"){aC=undefined
}else{this.each(function(){var aE;
var aD=al.data(this,ay);
if(aB==="instance"){aC=aD;
return false
}if(!aD){return al.error("cannot call methods on "+ax+" prior to initialization; attempted to call method '"+aB+"'")
}if(!al.isFunction(aD[aB])||aB.charAt(0)==="_"){return al.error("no such method '"+aB+"' for "+ax+" widget instance")
}aE=aD[aB].apply(aD,aA);
if(aE!==aD&&aE!==undefined){aC=aE&&aE.jquery?aC.pushStack(aE.get()):aE;
return false
}})
}}else{if(aA.length){aB=al.widget.extend.apply(null,[aB].concat(aA))
}this.each(function(){var aD=al.data(this,ay);
if(aD){aD.option(aB||{});
if(aD._init){aD._init()
}}else{al.data(this,ay,new aw(aB,this))
}})
}return aC
}
};
al.Widget=function(){};
al.Widget._childConstructors=[];
al.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{classes:{},disabled:false,create:null},_createWidget:function(aw,ax){ax=al(ax||this.defaultElement||this)[0];
this.element=al(ax);
this.uuid=J++;
this.eventNamespace="."+this.widgetName+this.uuid;
this.bindings=al();
this.hoverable=al();
this.focusable=al();
this.classesElementLookup={};
if(ax!==this){al.data(ax,this.widgetFullName,this);
this._on(true,this.element,{remove:function(ay){if(ay.target===ax){this.destroy()
}}});
this.document=al(ax.style?ax.ownerDocument:ax.document||ax);
this.window=al(this.document[0].defaultView||this.document[0].parentWindow)
}this.options=al.widget.extend({},this.options,this._getCreateOptions(),aw);
this._create();
if(this.options.disabled){this._setOptionDisabled(this.options.disabled)
}this._trigger("create",null,this._getCreateEventData());
this._init()
},_getCreateOptions:function(){return{}
},_getCreateEventData:al.noop,_create:al.noop,_init:al.noop,destroy:function(){var aw=this;
this._destroy();
al.each(this.classesElementLookup,function(ax,ay){aw._removeClass(ay,ax)
});
this.element.off(this.eventNamespace).removeData(this.widgetFullName);
this.widget().off(this.eventNamespace).removeAttr("aria-disabled");
this.bindings.off(this.eventNamespace)
},_destroy:al.noop,widget:function(){return this.element
},option:function(az,aA){var aw=az;
var aB;
var ay;
var ax;
if(arguments.length===0){return al.widget.extend({},this.options)
}if(typeof az==="string"){aw={};
aB=az.split(".");
az=aB.shift();
if(aB.length){ay=aw[az]=al.widget.extend({},this.options[az]);
for(ax=0;
ax<aB.length-1;
ax++){ay[aB[ax]]=ay[aB[ax]]||{};
ay=ay[aB[ax]]
}az=aB.pop();
if(arguments.length===1){return ay[az]===undefined?null:ay[az]
}ay[az]=aA
}else{if(arguments.length===1){return this.options[az]===undefined?null:this.options[az]
}aw[az]=aA
}}this._setOptions(aw);
return this
},_setOptions:function(aw){var ax;
for(ax in aw){this._setOption(ax,aw[ax])
}return this
},_setOption:function(aw,ax){if(aw==="classes"){this._setOptionClasses(ax)
}this.options[aw]=ax;
if(aw==="disabled"){this._setOptionDisabled(ax)
}return this
},_setOptionClasses:function(az){var aw,ay,ax;
for(aw in az){ax=this.classesElementLookup[aw];
if(az[aw]===this.options.classes[aw]||!ax||!ax.length){continue
}ay=al(ax.get());
this._removeClass(ax,aw);
ay.addClass(this._classes({element:ay,keys:aw,classes:az,add:true}))
}},_setOptionDisabled:function(aw){this._toggleClass(this.widget(),this.widgetFullName+"-disabled",null,!!aw);
if(aw){this._removeClass(this.hoverable,null,"ui-state-hover");
this._removeClass(this.focusable,null,"ui-state-focus")
}},enable:function(){return this._setOptions({disabled:false})
},disable:function(){return this._setOptions({disabled:true})
},_classes:function(aw){var ax=[];
var ay=this;
aw=al.extend({element:this.element,classes:this.options.classes||{}},aw);
function az(aB,aD){var aC,aA;
for(aA=0;
aA<aB.length;
aA++){aC=ay.classesElementLookup[aB[aA]]||al();
if(aw.add){aC=al(al.unique(aC.get().concat(aw.element.get())))
}else{aC=al(aC.not(aw.element).get())
}ay.classesElementLookup[aB[aA]]=aC;
ax.push(aB[aA]);
if(aD&&aw.classes[aB[aA]]){ax.push(aw.classes[aB[aA]])
}}}this._on(aw.element,{remove:"_untrackClassesElement"});
if(aw.keys){az(aw.keys.match(/\S+/g)||[],true)
}if(aw.extra){az(aw.extra.match(/\S+/g)||[])
}return ax.join(" ")
},_untrackClassesElement:function(ax){var aw=this;
al.each(aw.classesElementLookup,function(ay,az){if(al.inArray(ax.target,az)!==-1){aw.classesElementLookup[ay]=al(az.not(ax.target).get())
}})
},_removeClass:function(ax,ay,aw){return this._toggleClass(ax,ay,aw,false)
},_addClass:function(ax,ay,aw){return this._toggleClass(ax,ay,aw,true)
},_toggleClass:function(az,aA,aw,aB){aB=(typeof aB==="boolean")?aB:aw;
var ax=(typeof az==="string"||az===null),ay={extra:ax?aA:aw,keys:ax?az:aA,element:ax?this.element:az,add:aB};
ay.element.toggleClass(this._classes(ay),aB);
return this
},_on:function(az,ay,ax){var aA;
var aw=this;
if(typeof az!=="boolean"){ax=ay;
ay=az;
az=false
}if(!ax){ax=ay;
ay=this.element;
aA=this.widget()
}else{ay=aA=al(ay);
this.bindings=this.bindings.add(ay)
}al.each(ax,function(aG,aF){function aD(){if(!az&&(aw.options.disabled===true||al(this).hasClass("ui-state-disabled"))){return
}return(typeof aF==="string"?aw[aF]:aF).apply(aw,arguments)
}if(typeof aF!=="string"){aD.guid=aF.guid=aF.guid||aD.guid||al.guid++
}var aE=aG.match(/^([\w:-]*)\s*(.*)$/);
var aC=aE[1]+aw.eventNamespace;
var aB=aE[2];
if(aB){aA.on(aC,aB,aD)
}else{ay.on(aC,aD)
}})
},_off:function(ax,aw){aw=(aw||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace;
ax.off(aw).off(aw);
this.bindings=al(this.bindings.not(ax).get());
this.focusable=al(this.focusable.not(ax).get());
this.hoverable=al(this.hoverable.not(ax).get())
},_delay:function(az,ay){function ax(){return(typeof az==="string"?aw[az]:az).apply(aw,arguments)
}var aw=this;
return setTimeout(ax,ay||0)
},_hoverable:function(aw){this.hoverable=this.hoverable.add(aw);
this._on(aw,{mouseenter:function(ax){this._addClass(al(ax.currentTarget),null,"ui-state-hover")
},mouseleave:function(ax){this._removeClass(al(ax.currentTarget),null,"ui-state-hover")
}})
},_focusable:function(aw){this.focusable=this.focusable.add(aw);
this._on(aw,{focusin:function(ax){this._addClass(al(ax.currentTarget),null,"ui-state-focus")
},focusout:function(ax){this._removeClass(al(ax.currentTarget),null,"ui-state-focus")
}})
},_trigger:function(aw,ax,ay){var aB,aA;
var az=this.options[aw];
ay=ay||{};
ax=al.Event(ax);
ax.type=(aw===this.widgetEventPrefix?aw:this.widgetEventPrefix+aw).toLowerCase();
ax.target=this.element[0];
aA=ax.originalEvent;
if(aA){for(aB in aA){if(!(aB in ax)){ax[aB]=aA[aB]
}}}this.element.trigger(ax,ay);
return !(al.isFunction(az)&&az.apply(this.element[0],[ax].concat(ay))===false||ax.isDefaultPrevented())
}};
al.each({show:"fadeIn",hide:"fadeOut"},function(ax,aw){al.Widget.prototype["_"+ax]=function(aA,az,aC){if(typeof az==="string"){az={effect:az}
}var aB;
var ay=!az?ax:az===true||typeof az==="number"?aw:az.effect||aw;
az=az||{};
if(typeof az==="number"){az={duration:az}
}aB=!al.isEmptyObject(az);
az.complete=aC;
if(az.delay){aA.delay(az.delay)
}if(aB&&al.effects&&al.effects.effect[ay]){aA[ax](az)
}else{if(ay!==ax&&aA[ay]){aA[ay](az.duration,az.easing,aC)
}else{aA.queue(function(aD){al(this)[ax]();
if(aC){aC.call(aA[0])
}aD()
})
}}}
});
var l=al.widget;
/*!
 * jQuery UI Position 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/position/
 */
(function(){var aD,aE=Math.max,aH=Math.abs,ay=/left|center|right/,aB=/top|center|bottom/,aw=/[\+\-]\d+(\.[\d]+)?%?/,aF=/^\w+/,ax=/%$/,aA=al.fn.position;
function aG(aK,aJ,aI){return[parseFloat(aK[0])*(ax.test(aK[0])?aJ/100:1),parseFloat(aK[1])*(ax.test(aK[1])?aI/100:1)]
}function aC(aI,aJ){return parseInt(al.css(aI,aJ),10)||0
}function az(aJ){var aI=aJ[0];
if(aI.nodeType===9){return{width:aJ.width(),height:aJ.height(),offset:{top:0,left:0}}
}if(al.isWindow(aI)){return{width:aJ.width(),height:aJ.height(),offset:{top:aJ.scrollTop(),left:aJ.scrollLeft()}}
}if(aI.preventDefault){return{width:0,height:0,offset:{top:aI.pageY,left:aI.pageX}}
}return{width:aJ.outerWidth(),height:aJ.outerHeight(),offset:aJ.offset()}
}al.position={scrollbarWidth:function(){if(aD!==undefined){return aD
}var aJ,aI,aL=al("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),aK=aL.children()[0];
al("body").append(aL);
aJ=aK.offsetWidth;
aL.css("overflow","scroll");
aI=aK.offsetWidth;
if(aJ===aI){aI=aL[0].clientWidth
}aL.remove();
return(aD=aJ-aI)
},getScrollInfo:function(aM){var aL=aM.isWindow||aM.isDocument?"":aM.element.css("overflow-x"),aK=aM.isWindow||aM.isDocument?"":aM.element.css("overflow-y"),aJ=aL==="scroll"||(aL==="auto"&&aM.width<aM.element[0].scrollWidth),aI=aK==="scroll"||(aK==="auto"&&aM.height<aM.element[0].scrollHeight);
return{width:aI?al.position.scrollbarWidth():0,height:aJ?al.position.scrollbarWidth():0}
},getWithinInfo:function(aK){var aL=al(aK||window),aI=al.isWindow(aL[0]),aM=!!aL[0]&&aL[0].nodeType===9,aJ=!aI&&!aM;
return{element:aL,isWindow:aI,isDocument:aM,offset:aJ?al(aK).offset():{left:0,top:0},scrollLeft:aL.scrollLeft(),scrollTop:aL.scrollTop(),width:aL.outerWidth(),height:aL.outerHeight()}
}};
al.fn.position=function(aS){if(!aS||!aS.of){return aA.apply(this,arguments)
}aS=al.extend({},aS);
var aT,aP,aN,aR,aM,aI,aO=al(aS.of),aL=al.position.getWithinInfo(aS.within),aJ=al.position.getScrollInfo(aL),aQ=(aS.collision||"flip").split(" "),aK={};
aI=az(aO);
if(aO[0].preventDefault){aS.at="left top"
}aP=aI.width;
aN=aI.height;
aR=aI.offset;
aM=al.extend({},aR);
al.each(["my","at"],function(){var aW=(aS[this]||"").split(" "),aV,aU;
if(aW.length===1){aW=ay.test(aW[0])?aW.concat(["center"]):aB.test(aW[0])?["center"].concat(aW):["center","center"]
}aW[0]=ay.test(aW[0])?aW[0]:"center";
aW[1]=aB.test(aW[1])?aW[1]:"center";
aV=aw.exec(aW[0]);
aU=aw.exec(aW[1]);
aK[this]=[aV?aV[0]:0,aU?aU[0]:0];
aS[this]=[aF.exec(aW[0])[0],aF.exec(aW[1])[0]]
});
if(aQ.length===1){aQ[1]=aQ[0]
}if(aS.at[0]==="right"){aM.left+=aP
}else{if(aS.at[0]==="center"){aM.left+=aP/2
}}if(aS.at[1]==="bottom"){aM.top+=aN
}else{if(aS.at[1]==="center"){aM.top+=aN/2
}}aT=aG(aK.at,aP,aN);
aM.left+=aT[0];
aM.top+=aT[1];
return this.each(function(){var aV,a4,aX=al(this),aZ=aX.outerWidth(),aW=aX.outerHeight(),aY=aC(this,"marginLeft"),aU=aC(this,"marginTop"),a3=aZ+aY+aC(this,"marginRight")+aJ.width,a2=aW+aU+aC(this,"marginBottom")+aJ.height,a0=al.extend({},aM),a1=aG(aK.my,aX.outerWidth(),aX.outerHeight());
if(aS.my[0]==="right"){a0.left-=aZ
}else{if(aS.my[0]==="center"){a0.left-=aZ/2
}}if(aS.my[1]==="bottom"){a0.top-=aW
}else{if(aS.my[1]==="center"){a0.top-=aW/2
}}a0.left+=a1[0];
a0.top+=a1[1];
aV={marginLeft:aY,marginTop:aU};
al.each(["left","top"],function(a6,a5){if(al.ui.position[aQ[a6]]){al.ui.position[aQ[a6]][a5](a0,{targetWidth:aP,targetHeight:aN,elemWidth:aZ,elemHeight:aW,collisionPosition:aV,collisionWidth:a3,collisionHeight:a2,offset:[aT[0]+a1[0],aT[1]+a1[1]],my:aS.my,at:aS.at,within:aL,elem:aX})
}});
if(aS.using){a4=function(a8){var ba=aR.left-a0.left,a7=ba+aP-aZ,a9=aR.top-a0.top,a6=a9+aN-aW,a5={target:{element:aO,left:aR.left,top:aR.top,width:aP,height:aN},element:{element:aX,left:a0.left,top:a0.top,width:aZ,height:aW},horizontal:a7<0?"left":ba>0?"right":"center",vertical:a6<0?"top":a9>0?"bottom":"middle"};
if(aP<aZ&&aH(ba+a7)<aP){a5.horizontal="center"
}if(aN<aW&&aH(a9+a6)<aN){a5.vertical="middle"
}if(aE(aH(ba),aH(a7))>aE(aH(a9),aH(a6))){a5.important="horizontal"
}else{a5.important="vertical"
}aS.using.call(this,a8,a5)
}
}aX.offset(al.extend(a0,{using:a4}))
})
};
al.ui.position={fit:{left:function(aM,aL){var aK=aL.within,aO=aK.isWindow?aK.scrollLeft:aK.offset.left,aQ=aK.width,aN=aM.left-aL.collisionPosition.marginLeft,aP=aO-aN,aJ=aN+aL.collisionWidth-aQ-aO,aI;
if(aL.collisionWidth>aQ){if(aP>0&&aJ<=0){aI=aM.left+aP+aL.collisionWidth-aQ-aO;
aM.left+=aP-aI
}else{if(aJ>0&&aP<=0){aM.left=aO
}else{if(aP>aJ){aM.left=aO+aQ-aL.collisionWidth
}else{aM.left=aO
}}}}else{if(aP>0){aM.left+=aP
}else{if(aJ>0){aM.left-=aJ
}else{aM.left=aE(aM.left-aN,aM.left)
}}}},top:function(aL,aK){var aJ=aK.within,aP=aJ.isWindow?aJ.scrollTop:aJ.offset.top,aQ=aK.within.height,aN=aL.top-aK.collisionPosition.marginTop,aO=aP-aN,aM=aN+aK.collisionHeight-aQ-aP,aI;
if(aK.collisionHeight>aQ){if(aO>0&&aM<=0){aI=aL.top+aO+aK.collisionHeight-aQ-aP;
aL.top+=aO-aI
}else{if(aM>0&&aO<=0){aL.top=aP
}else{if(aO>aM){aL.top=aP+aQ-aK.collisionHeight
}else{aL.top=aP
}}}}else{if(aO>0){aL.top+=aO
}else{if(aM>0){aL.top-=aM
}else{aL.top=aE(aL.top-aN,aL.top)
}}}}},flip:{left:function(aO,aN){var aM=aN.within,aS=aM.offset.left+aM.scrollLeft,aV=aM.width,aK=aM.isWindow?aM.scrollLeft:aM.offset.left,aP=aO.left-aN.collisionPosition.marginLeft,aT=aP-aK,aJ=aP+aN.collisionWidth-aV-aK,aR=aN.my[0]==="left"?-aN.elemWidth:aN.my[0]==="right"?aN.elemWidth:0,aU=aN.at[0]==="left"?aN.targetWidth:aN.at[0]==="right"?-aN.targetWidth:0,aL=-2*aN.offset[0],aI,aQ;
if(aT<0){aI=aO.left+aR+aU+aL+aN.collisionWidth-aV-aS;
if(aI<0||aI<aH(aT)){aO.left+=aR+aU+aL
}}else{if(aJ>0){aQ=aO.left-aN.collisionPosition.marginLeft+aR+aU+aL-aK;
if(aQ>0||aH(aQ)<aJ){aO.left+=aR+aU+aL
}}}},top:function(aN,aM){var aL=aM.within,aU=aL.offset.top+aL.scrollTop,aV=aL.height,aI=aL.isWindow?aL.scrollTop:aL.offset.top,aP=aN.top-aM.collisionPosition.marginTop,aR=aP-aI,aO=aP+aM.collisionHeight-aV-aI,aS=aM.my[1]==="top",aQ=aS?-aM.elemHeight:aM.my[1]==="bottom"?aM.elemHeight:0,aW=aM.at[1]==="top"?aM.targetHeight:aM.at[1]==="bottom"?-aM.targetHeight:0,aK=-2*aM.offset[1],aT,aJ;
if(aR<0){aJ=aN.top+aQ+aW+aK+aM.collisionHeight-aV-aU;
if(aJ<0||aJ<aH(aR)){aN.top+=aQ+aW+aK
}}else{if(aO>0){aT=aN.top-aM.collisionPosition.marginTop+aQ+aW+aK-aI;
if(aT>0||aH(aT)<aO){aN.top+=aQ+aW+aK
}}}}},flipfit:{left:function(){al.ui.position.flip.left.apply(this,arguments);
al.ui.position.fit.left.apply(this,arguments)
},top:function(){al.ui.position.flip.top.apply(this,arguments);
al.ui.position.fit.top.apply(this,arguments)
}}}
})();
var ai=al.ui.position;
/*!
 * jQuery UI :data 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
;
var r=al.extend(al.expr[":"],{data:al.expr.createPseudo?al.expr.createPseudo(function(aw){return function(ax){return !!al.data(ax,aw)
}
}):function(ay,ax,aw){return !!al.data(ay,aw[3])
}});
/*!
 * jQuery UI Disable Selection 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
;
var m=al.fn.extend({disableSelection:(function(){var aw="onselectstart" in document.createElement("div")?"selectstart":"mousedown";
return function(){return this.on(aw+".ui-disableSelection",function(ax){ax.preventDefault()
})
}
})(),enableSelection:function(){return this.off(".ui-disableSelection")
}});
/*!
 * jQuery UI Effects 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
;
var u="ui-effects-",ae="ui-effects-style",aq="ui-effects-animated",b=al;
al.effects={effect:{}};
/*!
 * jQuery Color Animations v2.1.2
 * https://github.com/jquery/jquery-color
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * Date: Wed Jan 16 08:47:09 2013 -0600
 */
(function(aK,az){var aG="backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",aD=/^([\-+])=\s*(\d+\.?\d*)/,aC=[{re:/rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(aL){return[aL[1],aL[2],aL[3],aL[4]]
}},{re:/rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(aL){return[aL[1]*2.55,aL[2]*2.55,aL[3]*2.55,aL[4]]
}},{re:/#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,parse:function(aL){return[parseInt(aL[1],16),parseInt(aL[2],16),parseInt(aL[3],16)]
}},{re:/#([a-f0-9])([a-f0-9])([a-f0-9])/,parse:function(aL){return[parseInt(aL[1]+aL[1],16),parseInt(aL[2]+aL[2],16),parseInt(aL[3]+aL[3],16)]
}},{re:/hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,space:"hsla",parse:function(aL){return[aL[1],aL[2]/100,aL[3]/100,aL[4]]
}}],aA=aK.Color=function(aM,aN,aL,aO){return new aK.Color.fn.parse(aM,aN,aL,aO)
},aF={rgba:{props:{red:{idx:0,type:"byte"},green:{idx:1,type:"byte"},blue:{idx:2,type:"byte"}}},hsla:{props:{hue:{idx:0,type:"degrees"},saturation:{idx:1,type:"percent"},lightness:{idx:2,type:"percent"}}}},aJ={"byte":{floor:true,max:255},percent:{max:1},degrees:{mod:360,floor:true}},aI=aA.support={},ax=aK("<p>")[0],aw,aH=aK.each;
ax.style.cssText="background-color:rgba(1,1,1,.5)";
aI.rgba=ax.style.backgroundColor.indexOf("rgba")>-1;
aH(aF,function(aL,aM){aM.cache="_"+aL;
aM.props.alpha={idx:3,type:"percent",def:1}
});
function aE(aM,aO,aN){var aL=aJ[aO.type]||{};
if(aM==null){return(aN||!aO.def)?null:aO.def
}aM=aL.floor?~~aM:parseFloat(aM);
if(isNaN(aM)){return aO.def
}if(aL.mod){return(aM+aL.mod)%aL.mod
}return 0>aM?0:aL.max<aM?aL.max:aM
}function aB(aL){var aN=aA(),aM=aN._rgba=[];
aL=aL.toLowerCase();
aH(aC,function(aS,aT){var aQ,aR=aT.re.exec(aL),aP=aR&&aT.parse(aR),aO=aT.space||"rgba";
if(aP){aQ=aN[aO](aP);
aN[aF[aO].cache]=aQ[aF[aO].cache];
aM=aN._rgba=aQ._rgba;
return false
}});
if(aM.length){if(aM.join()==="0,0,0,0"){aK.extend(aM,aw.transparent)
}return aN
}return aw[aL]
}aA.fn=aK.extend(aA.prototype,{parse:function(aR,aP,aL,aQ){if(aR===az){this._rgba=[null,null,null,null];
return this
}if(aR.jquery||aR.nodeType){aR=aK(aR).css(aP);
aP=az
}var aO=this,aN=aK.type(aR),aM=this._rgba=[];
if(aP!==az){aR=[aR,aP,aL,aQ];
aN="array"
}if(aN==="string"){return this.parse(aB(aR)||aw._default)
}if(aN==="array"){aH(aF.rgba.props,function(aS,aT){aM[aT.idx]=aE(aR[aT.idx],aT)
});
return this
}if(aN==="object"){if(aR instanceof aA){aH(aF,function(aS,aT){if(aR[aT.cache]){aO[aT.cache]=aR[aT.cache].slice()
}})
}else{aH(aF,function(aT,aU){var aS=aU.cache;
aH(aU.props,function(aV,aW){if(!aO[aS]&&aU.to){if(aV==="alpha"||aR[aV]==null){return
}aO[aS]=aU.to(aO._rgba)
}aO[aS][aW.idx]=aE(aR[aV],aW,true)
});
if(aO[aS]&&aK.inArray(null,aO[aS].slice(0,3))<0){aO[aS][3]=1;
if(aU.from){aO._rgba=aU.from(aO[aS])
}}})
}return this
}},is:function(aN){var aL=aA(aN),aO=true,aM=this;
aH(aF,function(aP,aR){var aS,aQ=aL[aR.cache];
if(aQ){aS=aM[aR.cache]||aR.to&&aR.to(aM._rgba)||[];
aH(aR.props,function(aT,aU){if(aQ[aU.idx]!=null){aO=(aQ[aU.idx]===aS[aU.idx]);
return aO
}})
}return aO
});
return aO
},_space:function(){var aL=[],aM=this;
aH(aF,function(aN,aO){if(aM[aO.cache]){aL.push(aN)
}});
return aL.pop()
},transition:function(aM,aS){var aN=aA(aM),aO=aN._space(),aP=aF[aO],aQ=this.alpha()===0?aA("transparent"):this,aR=aQ[aP.cache]||aP.to(aQ._rgba),aL=aR.slice();
aN=aN[aP.cache];
aH(aP.props,function(aW,aY){var aV=aY.idx,aU=aR[aV],aT=aN[aV],aX=aJ[aY.type]||{};
if(aT===null){return
}if(aU===null){aL[aV]=aT
}else{if(aX.mod){if(aT-aU>aX.mod/2){aU+=aX.mod
}else{if(aU-aT>aX.mod/2){aU-=aX.mod
}}}aL[aV]=aE((aT-aU)*aS+aU,aY)
}});
return this[aO](aL)
},blend:function(aO){if(this._rgba[3]===1){return this
}var aN=this._rgba.slice(),aM=aN.pop(),aL=aA(aO)._rgba;
return aA(aK.map(aN,function(aP,aQ){return(1-aM)*aL[aQ]+aM*aP
}))
},toRgbaString:function(){var aM="rgba(",aL=aK.map(this._rgba,function(aN,aO){return aN==null?(aO>2?1:0):aN
});
if(aL[3]===1){aL.pop();
aM="rgb("
}return aM+aL.join()+")"
},toHslaString:function(){var aM="hsla(",aL=aK.map(this.hsla(),function(aN,aO){if(aN==null){aN=aO>2?1:0
}if(aO&&aO<3){aN=Math.round(aN*100)+"%"
}return aN
});
if(aL[3]===1){aL.pop();
aM="hsl("
}return aM+aL.join()+")"
},toHexString:function(aL){var aM=this._rgba.slice(),aN=aM.pop();
if(aL){aM.push(~~(aN*255))
}return"#"+aK.map(aM,function(aO){aO=(aO||0).toString(16);
return aO.length===1?"0"+aO:aO
}).join("")
},toString:function(){return this._rgba[3]===0?"transparent":this.toRgbaString()
}});
aA.fn.parse.prototype=aA.fn;
function ay(aN,aM,aL){aL=(aL+1)%1;
if(aL*6<1){return aN+(aM-aN)*aL*6
}if(aL*2<1){return aM
}if(aL*3<2){return aN+(aM-aN)*((2/3)-aL)*6
}return aN
}aF.hsla.to=function(aN){if(aN[0]==null||aN[1]==null||aN[2]==null){return[null,null,null,aN[3]]
}var aL=aN[0]/255,aQ=aN[1]/255,aR=aN[2]/255,aT=aN[3],aS=Math.max(aL,aQ,aR),aO=Math.min(aL,aQ,aR),aU=aS-aO,aV=aS+aO,aM=aV*0.5,aP,aW;
if(aO===aS){aP=0
}else{if(aL===aS){aP=(60*(aQ-aR)/aU)+360
}else{if(aQ===aS){aP=(60*(aR-aL)/aU)+120
}else{aP=(60*(aL-aQ)/aU)+240
}}}if(aU===0){aW=0
}else{if(aM<=0.5){aW=aU/aV
}else{aW=aU/(2-aV)
}}return[Math.round(aP)%360,aW,aM,aT==null?1:aT]
};
aF.hsla.from=function(aP){if(aP[0]==null||aP[1]==null||aP[2]==null){return[null,null,null,aP[3]]
}var aO=aP[0]/360,aN=aP[1],aM=aP[2],aL=aP[3],aQ=aM<=0.5?aM*(1+aN):aM+aN-aM*aN,aR=2*aM-aQ;
return[Math.round(ay(aR,aQ,aO+(1/3))*255),Math.round(ay(aR,aQ,aO)*255),Math.round(ay(aR,aQ,aO-(1/3))*255),aL]
};
aH(aF,function(aM,aO){var aN=aO.props,aL=aO.cache,aQ=aO.to,aP=aO.from;
aA.fn[aM]=function(aV){if(aQ&&!this[aL]){this[aL]=aQ(this._rgba)
}if(aV===az){return this[aL].slice()
}var aS,aU=aK.type(aV),aR=(aU==="array"||aU==="object")?aV:arguments,aT=this[aL].slice();
aH(aN,function(aW,aY){var aX=aR[aU==="object"?aW:aY.idx];
if(aX==null){aX=aT[aY.idx]
}aT[aY.idx]=aE(aX,aY)
});
if(aP){aS=aA(aP(aT));
aS[aL]=aT;
return aS
}else{return aA(aT)
}};
aH(aN,function(aR,aS){if(aA.fn[aR]){return
}aA.fn[aR]=function(aW){var aY=aK.type(aW),aV=(aR==="alpha"?(this._hsla?"hsla":"rgba"):aM),aU=this[aV](),aX=aU[aS.idx],aT;
if(aY==="undefined"){return aX
}if(aY==="function"){aW=aW.call(this,aX);
aY=aK.type(aW)
}if(aW==null&&aS.empty){return this
}if(aY==="string"){aT=aD.exec(aW);
if(aT){aW=aX+parseFloat(aT[2])*(aT[1]==="+"?1:-1)
}}aU[aS.idx]=aW;
return this[aV](aU)
}
})
});
aA.hook=function(aM){var aL=aM.split(" ");
aH(aL,function(aN,aO){aK.cssHooks[aO]={set:function(aS,aT){var aQ,aR,aP="";
if(aT!=="transparent"&&(aK.type(aT)!=="string"||(aQ=aB(aT)))){aT=aA(aQ||aT);
if(!aI.rgba&&aT._rgba[3]!==1){aR=aO==="backgroundColor"?aS.parentNode:aS;
while((aP===""||aP==="transparent")&&aR&&aR.style){try{aP=aK.css(aR,"backgroundColor");
aR=aR.parentNode
}catch(aU){}}aT=aT.blend(aP&&aP!=="transparent"?aP:"_default")
}aT=aT.toRgbaString()
}try{aS.style[aO]=aT
}catch(aU){}}};
aK.fx.step[aO]=function(aP){if(!aP.colorInit){aP.start=aA(aP.elem,aO);
aP.end=aA(aP.end);
aP.colorInit=true
}aK.cssHooks[aO].set(aP.elem,aP.start.transition(aP.end,aP.pos))
}
})
};
aA.hook(aG);
aK.cssHooks.borderColor={expand:function(aM){var aL={};
aH(["Top","Right","Bottom","Left"],function(aO,aN){aL["border"+aN+"Color"]=aM
});
return aL
}};
aw=aK.Color.names={aqua:"#00ffff",black:"#000000",blue:"#0000ff",fuchsia:"#ff00ff",gray:"#808080",green:"#008000",lime:"#00ff00",maroon:"#800000",navy:"#000080",olive:"#808000",purple:"#800080",red:"#ff0000",silver:"#c0c0c0",teal:"#008080",white:"#ffffff",yellow:"#ffff00",transparent:[null,null,null,0],_default:"#ffffff"}
})(b);
(function(){var ax=["add","remove","toggle"],ay={border:1,borderBottom:1,borderColor:1,borderLeft:1,borderRight:1,borderTop:1,borderWidth:1,margin:1,padding:1};
al.each(["borderLeftStyle","borderRightStyle","borderBottomStyle","borderTopStyle"],function(aA,aB){al.fx.step[aB]=function(aC){if(aC.end!=="none"&&!aC.setAttr||aC.pos===1&&!aC.setAttr){b.style(aC.elem,aB,aC.end);
aC.setAttr=true
}}
});
function az(aE){var aB,aA,aC=aE.ownerDocument.defaultView?aE.ownerDocument.defaultView.getComputedStyle(aE,null):aE.currentStyle,aD={};
if(aC&&aC.length&&aC[0]&&aC[aC[0]]){aA=aC.length;
while(aA--){aB=aC[aA];
if(typeof aC[aB]==="string"){aD[al.camelCase(aB)]=aC[aB]
}}}else{for(aB in aC){if(typeof aC[aB]==="string"){aD[aB]=aC[aB]
}}}return aD
}function aw(aA,aC){var aE={},aB,aD;
for(aB in aC){aD=aC[aB];
if(aA[aB]!==aD){if(!ay[aB]){if(al.fx.step[aB]||!isNaN(parseFloat(aD))){aE[aB]=aD
}}}}return aE
}if(!al.fn.addBack){al.fn.addBack=function(aA){return this.add(aA==null?this.prevObject:this.prevObject.filter(aA))
}
}al.effects.animateClass=function(aA,aB,aE,aD){var aC=al.speed(aB,aE,aD);
return this.queue(function(){var aH=al(this),aF=aH.attr("class")||"",aG,aI=aC.children?aH.find("*").addBack():aH;
aI=aI.map(function(){var aJ=al(this);
return{el:aJ,start:az(this)}
});
aG=function(){al.each(ax,function(aJ,aK){if(aA[aK]){aH[aK+"Class"](aA[aK])
}})
};
aG();
aI=aI.map(function(){this.end=az(this.el[0]);
this.diff=aw(this.start,this.end);
return this
});
aH.attr("class",aF);
aI=aI.map(function(){var aL=this,aJ=al.Deferred(),aK=al.extend({},aC,{queue:false,complete:function(){aJ.resolve(aL)
}});
this.el.animate(this.diff,aK);
return aJ.promise()
});
al.when.apply(al,aI.get()).done(function(){aG();
al.each(arguments,function(){var aJ=this.el;
al.each(this.diff,function(aK){aJ.css(aK,"")
})
});
aC.complete.call(aH[0])
})
})
};
al.fn.extend({addClass:(function(aA){return function(aC,aB,aE,aD){return aB?al.effects.animateClass.call(this,{add:aC},aB,aE,aD):aA.apply(this,arguments)
}
})(al.fn.addClass),removeClass:(function(aA){return function(aC,aB,aE,aD){return arguments.length>1?al.effects.animateClass.call(this,{remove:aC},aB,aE,aD):aA.apply(this,arguments)
}
})(al.fn.removeClass),toggleClass:(function(aA){return function(aD,aC,aB,aF,aE){if(typeof aC==="boolean"||aC===undefined){if(!aB){return aA.apply(this,arguments)
}else{return al.effects.animateClass.call(this,(aC?{add:aD}:{remove:aD}),aB,aF,aE)
}}else{return al.effects.animateClass.call(this,{toggle:aD},aC,aB,aF)
}}
})(al.fn.toggleClass),switchClass:function(aA,aC,aB,aE,aD){return al.effects.animateClass.call(this,{add:aC,remove:aA},aB,aE,aD)
}})
})();
(function(){if(al.expr&&al.expr.filters&&al.expr.filters.animated){al.expr.filters.animated=(function(az){return function(aA){return !!al(aA).data(aq)||az(aA)
}
})(al.expr.filters.animated)
}if(al.uiBackCompat!==false){al.extend(al.effects,{save:function(aA,aC){var az=0,aB=aC.length;
for(;
az<aB;
az++){if(aC[az]!==null){aA.data(u+aC[az],aA[0].style[aC[az]])
}}},restore:function(aA,aD){var aC,az=0,aB=aD.length;
for(;
az<aB;
az++){if(aD[az]!==null){aC=aA.data(u+aD[az]);
aA.css(aD[az],aC)
}}},setMode:function(az,aA){if(aA==="toggle"){aA=az.is(":hidden")?"show":"hide"
}return aA
},createWrapper:function(aA){if(aA.parent().is(".ui-effects-wrapper")){return aA.parent()
}var aB={width:aA.outerWidth(true),height:aA.outerHeight(true),"float":aA.css("float")},aE=al("<div></div>").addClass("ui-effects-wrapper").css({fontSize:"100%",background:"transparent",border:"none",margin:0,padding:0}),az={width:aA.width(),height:aA.height()},aD=document.activeElement;
try{aD.id
}catch(aC){aD=document.body
}aA.wrap(aE);
if(aA[0]===aD||al.contains(aA[0],aD)){al(aD).trigger("focus")
}aE=aA.parent();
if(aA.css("position")==="static"){aE.css({position:"relative"});
aA.css({position:"relative"})
}else{al.extend(aB,{position:aA.css("position"),zIndex:aA.css("z-index")});
al.each(["top","left","bottom","right"],function(aF,aG){aB[aG]=aA.css(aG);
if(isNaN(parseInt(aB[aG],10))){aB[aG]="auto"
}});
aA.css({position:"relative",top:0,left:0,right:"auto",bottom:"auto"})
}aA.css(az);
return aE.css(aB).show()
},removeWrapper:function(az){var aA=document.activeElement;
if(az.parent().is(".ui-effects-wrapper")){az.parent().replaceWith(az);
if(az[0]===aA||al.contains(az[0],aA)){al(aA).trigger("focus")
}}return az
}})
}al.extend(al.effects,{version:"1.12.1",define:function(az,aB,aA){if(!aA){aA=aB;
aB="effect"
}al.effects.effect[az]=aA;
al.effects.effect[az].mode=aB;
return aA
},scaledDimensions:function(aA,aB,aC){if(aB===0){return{height:0,width:0,outerHeight:0,outerWidth:0}
}var az=aC!=="horizontal"?((aB||100)/100):1,aD=aC!=="vertical"?((aB||100)/100):1;
return{height:aA.height()*aD,width:aA.width()*az,outerHeight:aA.outerHeight()*aD,outerWidth:aA.outerWidth()*az}
},clipToBox:function(az){return{width:az.clip.right-az.clip.left,height:az.clip.bottom-az.clip.top,left:az.clip.left,top:az.clip.top}
},unshift:function(aA,aC,aB){var az=aA.queue();
if(aC>1){az.splice.apply(az,[1,0].concat(az.splice(aC,aB)))
}aA.dequeue()
},saveStyle:function(az){az.data(ae,az[0].style.cssText)
},restoreStyle:function(az){az[0].style.cssText=az.data(ae)||"";
az.removeData(ae)
},mode:function(az,aB){var aA=az.is(":hidden");
if(aB==="toggle"){aB=aA?"show":"hide"
}if(aA?aB==="hide":aB==="show"){aB="none"
}return aB
},getBaseline:function(aA,aB){var aC,az;
switch(aA[0]){case"top":aC=0;
break;
case"middle":aC=0.5;
break;
case"bottom":aC=1;
break;
default:aC=aA[0]/aB.height
}switch(aA[1]){case"left":az=0;
break;
case"center":az=0.5;
break;
case"right":az=1;
break;
default:az=aA[1]/aB.width
}return{x:az,y:aC}
},createPlaceholder:function(aA){var aC,aB=aA.css("position"),az=aA.position();
aA.css({marginTop:aA.css("marginTop"),marginBottom:aA.css("marginBottom"),marginLeft:aA.css("marginLeft"),marginRight:aA.css("marginRight")}).outerWidth(aA.outerWidth()).outerHeight(aA.outerHeight());
if(/^(static|relative)/.test(aB)){aB="absolute";
aC=al("<"+aA[0].nodeName+">").insertAfter(aA).css({display:/^(inline|ruby)/.test(aA.css("display"))?"inline-block":"block",visibility:"hidden",marginTop:aA.css("marginTop"),marginBottom:aA.css("marginBottom"),marginLeft:aA.css("marginLeft"),marginRight:aA.css("marginRight"),"float":aA.css("float")}).outerWidth(aA.outerWidth()).outerHeight(aA.outerHeight()).addClass("ui-effects-placeholder");
aA.data(u+"placeholder",aC)
}aA.css({position:aB,left:az.left,top:az.top});
return aC
},removePlaceholder:function(az){var aB=u+"placeholder",aA=az.data(aB);
if(aA){aA.remove();
az.removeData(aB)
}},cleanUp:function(az){al.effects.restoreStyle(az);
al.effects.removePlaceholder(az)
},setTransition:function(aA,aC,az,aB){aB=aB||{};
al.each(aC,function(aE,aD){var aF=aA.cssUnit(aD);
if(aF[0]>0){aB[aD]=aF[0]*az+aF[1]
}});
return aB
}});
function ax(aA,az,aB,aC){if(al.isPlainObject(aA)){az=aA;
aA=aA.effect
}aA={effect:aA};
if(az==null){az={}
}if(al.isFunction(az)){aC=az;
aB=null;
az={}
}if(typeof az==="number"||al.fx.speeds[az]){aC=aB;
aB=az;
az={}
}if(al.isFunction(aB)){aC=aB;
aB=null
}if(az){al.extend(aA,az)
}aB=aB||az.duration;
aA.duration=al.fx.off?0:typeof aB==="number"?aB:aB in al.fx.speeds?al.fx.speeds[aB]:al.fx.speeds._default;
aA.complete=aC||az.complete;
return aA
}function ay(az){if(!az||typeof az==="number"||al.fx.speeds[az]){return true
}if(typeof az==="string"&&!al.effects.effect[az]){return true
}if(al.isFunction(az)){return true
}if(typeof az==="object"&&!az.effect){return true
}return false
}al.fn.extend({effect:function(){var aH=ax.apply(this,arguments),aG=al.effects.effect[aH.effect],aD=aG.mode,aF=aH.queue,aC=aF||"fx",az=aH.complete,aE=aH.mode,aA=[],aI=function(aL){var aK=al(this),aJ=al.effects.mode(aK,aE)||aD;
aK.data(aq,true);
aA.push(aJ);
if(aD&&(aJ==="show"||(aJ===aD&&aJ==="hide"))){aK.show()
}if(!aD||aJ!=="none"){al.effects.saveStyle(aK)
}if(al.isFunction(aL)){aL()
}};
if(al.fx.off||!aG){if(aE){return this[aE](aH.duration,az)
}else{return this.each(function(){if(az){az.call(this)
}})
}}function aB(aL){var aM=al(this);
function aK(){aM.removeData(aq);
al.effects.cleanUp(aM);
if(aH.mode==="hide"){aM.hide()
}aJ()
}function aJ(){if(al.isFunction(az)){az.call(aM[0])
}if(al.isFunction(aL)){aL()
}}aH.mode=aA.shift();
if(al.uiBackCompat!==false&&!aD){if(aM.is(":hidden")?aE==="hide":aE==="show"){aM[aE]();
aJ()
}else{aG.call(aM[0],aH,aJ)
}}else{if(aH.mode==="none"){aM[aE]();
aJ()
}else{aG.call(aM[0],aH,aK)
}}}return aF===false?this.each(aI).each(aB):this.queue(aC,aI).queue(aC,aB)
},show:(function(az){return function(aB){if(ay(aB)){return az.apply(this,arguments)
}else{var aA=ax.apply(this,arguments);
aA.mode="show";
return this.effect.call(this,aA)
}}
})(al.fn.show),hide:(function(az){return function(aB){if(ay(aB)){return az.apply(this,arguments)
}else{var aA=ax.apply(this,arguments);
aA.mode="hide";
return this.effect.call(this,aA)
}}
})(al.fn.hide),toggle:(function(az){return function(aB){if(ay(aB)||typeof aB==="boolean"){return az.apply(this,arguments)
}else{var aA=ax.apply(this,arguments);
aA.mode="toggle";
return this.effect.call(this,aA)
}}
})(al.fn.toggle),cssUnit:function(az){var aA=this.css(az),aB=[];
al.each(["em","px","%","pt"],function(aC,aD){if(aA.indexOf(aD)>0){aB=[parseFloat(aA),aD]
}});
return aB
},cssClip:function(az){if(az){return this.css("clip","rect("+az.top+"px "+az.right+"px "+az.bottom+"px "+az.left+"px)")
}return aw(this.css("clip"),this)
},transfer:function(aK,aC){var aE=al(this),aG=al(aK.to),aJ=aG.css("position")==="fixed",aF=al("body"),aH=aJ?aF.scrollTop():0,aI=aJ?aF.scrollLeft():0,az=aG.offset(),aB={top:az.top-aH,left:az.left-aI,height:aG.innerHeight(),width:aG.innerWidth()},aD=aE.offset(),aA=al("<div class='ui-effects-transfer'></div>").appendTo("body").addClass(aK.className).css({top:aD.top-aH,left:aD.left-aI,height:aE.innerHeight(),width:aE.innerWidth(),position:aJ?"fixed":"absolute"}).animate(aB,aK.duration,aK.easing,function(){aA.remove();
if(al.isFunction(aC)){aC()
}})
}});
function aw(aE,aB){var aD=aB.outerWidth(),aC=aB.outerHeight(),aA=/^rect\((-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto)\)$/,az=aA.exec(aE)||["",0,aD,aC,0];
return{top:parseFloat(az[1])||0,right:az[2]==="auto"?aD:parseFloat(az[2]),bottom:az[3]==="auto"?aC:parseFloat(az[3]),left:parseFloat(az[4])||0}
}al.fx.step.clip=function(az){if(!az.clipInit){az.start=al(az.elem).cssClip();
if(typeof az.end==="string"){az.end=aw(az.end,az.elem)
}az.clipInit=true
}al(az.elem).cssClip({top:az.pos*(az.end.top-az.start.top)+az.start.top,right:az.pos*(az.end.right-az.start.right)+az.start.right,bottom:az.pos*(az.end.bottom-az.start.bottom)+az.start.bottom,left:az.pos*(az.end.left-az.start.left)+az.start.left})
}
})();
(function(){var aw={};
al.each(["Quad","Cubic","Quart","Quint","Expo"],function(ay,ax){aw[ax]=function(az){return Math.pow(az,ay+2)
}
});
al.extend(aw,{Sine:function(ax){return 1-Math.cos(ax*Math.PI/2)
},Circ:function(ax){return 1-Math.sqrt(1-ax*ax)
},Elastic:function(ax){return ax===0||ax===1?ax:-Math.pow(2,8*(ax-1))*Math.sin(((ax-1)*80-7.5)*Math.PI/15)
},Back:function(ax){return ax*ax*(3*ax-2)
},Bounce:function(az){var ax,ay=4;
while(az<((ax=Math.pow(2,--ay))-1)/11){}return 1/Math.pow(4,3-ay)-7.5625*Math.pow((ax*3-2)/22-az,2)
}});
al.each(aw,function(ay,ax){al.easing["easeIn"+ay]=ax;
al.easing["easeOut"+ay]=function(az){return 1-ax(1-az)
};
al.easing["easeInOut"+ay]=function(az){return az<0.5?ax(az*2)/2:1-ax(az*-2+2)/2
}
})
})();
var I=al.effects;
/*!
 * jQuery UI Effects Blind 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
;
var F=al.effects.define("blind","hide",function(ay,aw){var aB={up:["bottom","top"],vertical:["bottom","top"],down:["top","bottom"],left:["right","left"],horizontal:["right","left"],right:["left","right"]},az=al(this),aA=ay.direction||"up",aD=az.cssClip(),ax={clip:al.extend({},aD)},aC=al.effects.createPlaceholder(az);
ax.clip[aB[aA][0]]=ax.clip[aB[aA][1]];
if(ay.mode==="show"){az.cssClip(ax.clip);
if(aC){aC.css(al.effects.clipToBox(ax))
}ax.clip=aD
}if(aC){aC.animate(al.effects.clipToBox(ax),ay.duration,ay.easing)
}az.animate(ax,{queue:false,duration:ay.duration,easing:ay.easing,complete:aw})
});
/*!
 * jQuery UI Effects Bounce 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
;
var A=al.effects.define("bounce",function(ax,aE){var aA,aI,aL,aw=al(this),aD=ax.mode,aC=aD==="hide",aM=aD==="show",aN=ax.direction||"up",ay=ax.distance,aB=ax.times||5,aO=aB*2+(aM||aC?1:0),aK=ax.duration/aO,aG=ax.easing,az=(aN==="up"||aN==="down")?"top":"left",aF=(aN==="up"||aN==="left"),aJ=0,aH=aw.queue().length;
al.effects.createPlaceholder(aw);
aL=aw.css(az);
if(!ay){ay=aw[az==="top"?"outerHeight":"outerWidth"]()/3
}if(aM){aI={opacity:1};
aI[az]=aL;
aw.css("opacity",0).css(az,aF?-ay*2:ay*2).animate(aI,aK,aG)
}if(aC){ay=ay/Math.pow(2,aB-1)
}aI={};
aI[az]=aL;
for(;
aJ<aB;
aJ++){aA={};
aA[az]=(aF?"-=":"+=")+ay;
aw.animate(aA,aK,aG).animate(aI,aK,aG);
ay=aC?ay*2:ay/2
}if(aC){aA={opacity:0};
aA[az]=(aF?"-=":"+=")+ay;
aw.animate(aA,aK,aG)
}aw.queue(aE);
al.effects.unshift(aw,aH,aO+1)
});
/*!
 * jQuery UI Effects Clip 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
;
var af=al.effects.define("clip","hide",function(aE,aA){var ax,ay={},aB=al(this),aD=aE.direction||"vertical",aC=aD==="both",aw=aC||aD==="horizontal",az=aC||aD==="vertical";
ax=aB.cssClip();
ay.clip={top:az?(ax.bottom-ax.top)/2:ax.top,right:aw?(ax.right-ax.left)/2:ax.right,bottom:az?(ax.bottom-ax.top)/2:ax.bottom,left:aw?(ax.right-ax.left)/2:ax.left};
al.effects.createPlaceholder(aB);
if(aE.mode==="show"){aB.cssClip(ay.clip);
ay.clip=ax
}aB.animate(ay,{queue:false,duration:aE.duration,easing:aE.easing,complete:aA})
});
/*!
 * jQuery UI Effects Drop 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
;
var W=al.effects.define("drop","hide",function(aG,az){var aw,aA=al(this),aC=aG.mode,aE=aC==="show",aD=aG.direction||"left",ax=(aD==="up"||aD==="down")?"top":"left",aF=(aD==="up"||aD==="left")?"-=":"+=",aB=(aF==="+=")?"-=":"+=",ay={opacity:0};
al.effects.createPlaceholder(aA);
aw=aG.distance||aA[ax==="top"?"outerHeight":"outerWidth"](true)/2;
ay[ax]=aF+aw;
if(aE){aA.css(ay);
ay[ax]=aB+aw;
ay.opacity=1
}aA.animate(ay,{queue:false,duration:aG.duration,easing:aG.easing,complete:az})
});
/*!
 * jQuery UI Effects Explode 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
;
var au=al.effects.define("explode","hide",function(ax,aJ){var aM,aL,az,aH,aG,aE,aD=ax.pieces?Math.round(Math.sqrt(ax.pieces)):3,ay=aD,aw=al(this),aF=ax.mode,aN=aF==="show",aB=aw.show().css("visibility","hidden").offset(),aK=Math.ceil(aw.outerWidth()/ay),aI=Math.ceil(aw.outerHeight()/aD),aC=[];
function aO(){aC.push(this);
if(aC.length===aD*ay){aA()
}}for(aM=0;
aM<aD;
aM++){aH=aB.top+aM*aI;
aE=aM-(aD-1)/2;
for(aL=0;
aL<ay;
aL++){az=aB.left+aL*aK;
aG=aL-(ay-1)/2;
aw.clone().appendTo("body").wrap("<div></div>").css({position:"absolute",visibility:"visible",left:-aL*aK,top:-aM*aI}).parent().addClass("ui-effects-explode").css({position:"absolute",overflow:"hidden",width:aK,height:aI,left:az+(aN?aG*aK:0),top:aH+(aN?aE*aI:0),opacity:aN?0:1}).animate({left:az+(aN?0:aG*aK),top:aH+(aN?0:aE*aI),opacity:aN?1:0},ax.duration||500,ax.easing,aO)
}}function aA(){aw.css({visibility:"visible"});
al(aC).remove();
aJ()
}});
/*!
 * jQuery UI Effects Fade 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
;
var av=al.effects.define("fade","toggle",function(ay,ax){var aw=ay.mode==="show";
al(this).css("opacity",aw?0:1).animate({opacity:aw?1:0},{queue:false,duration:ay.duration,easing:ay.easing,complete:ax})
});
/*!
 * jQuery UI Effects Fold 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
;
var v=al.effects.define("fold","hide",function(aM,aB){var aC=al(this),aD=aM.mode,aJ=aD==="show",aE=aD==="hide",aL=aM.size||15,aF=/([0-9]+)%/.exec(aL),aK=!!aM.horizFirst,az=aK?["right","bottom"]:["bottom","right"],aA=aM.duration/2,aI=al.effects.createPlaceholder(aC),ax=aC.cssClip(),aH={clip:al.extend({},ax)},aG={clip:al.extend({},ax)},aw=[ax[az[0]],ax[az[1]]],ay=aC.queue().length;
if(aF){aL=parseInt(aF[1],10)/100*aw[aE?0:1]
}aH.clip[az[0]]=aL;
aG.clip[az[0]]=aL;
aG.clip[az[1]]=0;
if(aJ){aC.cssClip(aG.clip);
if(aI){aI.css(al.effects.clipToBox(aG))
}aG.clip=ax
}aC.queue(function(aN){if(aI){aI.animate(al.effects.clipToBox(aH),aA,aM.easing).animate(al.effects.clipToBox(aG),aA,aM.easing)
}aN()
}).animate(aH,aA,aM.easing).animate(aG,aA,aM.easing).queue(aB);
al.effects.unshift(aC,ay,4)
});
/*!
 * jQuery UI Effects Highlight 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
;
var K=al.effects.define("highlight","show",function(ax,aw){var ay=al(this),az={backgroundColor:ay.css("backgroundColor")};
if(ax.mode==="hide"){az.opacity=0
}al.effects.saveStyle(ay);
ay.css({backgroundImage:"none",backgroundColor:ax.color||"#ffff99"}).animate(az,{queue:false,duration:ax.duration,easing:ax.easing,complete:aw})
});
/*!
 * jQuery UI Effects Size 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
;
var T=al.effects.define("size",function(az,aF){var aD,aE,aJ,aw=al(this),aB=["fontSize"],aK=["borderTopWidth","borderBottomWidth","paddingTop","paddingBottom"],ay=["borderLeftWidth","borderRightWidth","paddingLeft","paddingRight"],aC=az.mode,aI=aC!=="effect",aN=az.scale||"both",aL=az.origin||["middle","center"],aM=aw.css("position"),aA=aw.position(),aG=al.effects.scaledDimensions(aw),aH=az.from||aG,ax=az.to||al.effects.scaledDimensions(aw,0);
al.effects.createPlaceholder(aw);
if(aC==="show"){aJ=aH;
aH=ax;
ax=aJ
}aE={from:{y:aH.height/aG.height,x:aH.width/aG.width},to:{y:ax.height/aG.height,x:ax.width/aG.width}};
if(aN==="box"||aN==="both"){if(aE.from.y!==aE.to.y){aH=al.effects.setTransition(aw,aK,aE.from.y,aH);
ax=al.effects.setTransition(aw,aK,aE.to.y,ax)
}if(aE.from.x!==aE.to.x){aH=al.effects.setTransition(aw,ay,aE.from.x,aH);
ax=al.effects.setTransition(aw,ay,aE.to.x,ax)
}}if(aN==="content"||aN==="both"){if(aE.from.y!==aE.to.y){aH=al.effects.setTransition(aw,aB,aE.from.y,aH);
ax=al.effects.setTransition(aw,aB,aE.to.y,ax)
}}if(aL){aD=al.effects.getBaseline(aL,aG);
aH.top=(aG.outerHeight-aH.outerHeight)*aD.y+aA.top;
aH.left=(aG.outerWidth-aH.outerWidth)*aD.x+aA.left;
ax.top=(aG.outerHeight-ax.outerHeight)*aD.y+aA.top;
ax.left=(aG.outerWidth-ax.outerWidth)*aD.x+aA.left
}aw.css(aH);
if(aN==="content"||aN==="both"){aK=aK.concat(["marginTop","marginBottom"]).concat(aB);
ay=ay.concat(["marginLeft","marginRight"]);
aw.find("*[width]").each(function(){var aR=al(this),aO=al.effects.scaledDimensions(aR),aQ={height:aO.height*aE.from.y,width:aO.width*aE.from.x,outerHeight:aO.outerHeight*aE.from.y,outerWidth:aO.outerWidth*aE.from.x},aP={height:aO.height*aE.to.y,width:aO.width*aE.to.x,outerHeight:aO.height*aE.to.y,outerWidth:aO.width*aE.to.x};
if(aE.from.y!==aE.to.y){aQ=al.effects.setTransition(aR,aK,aE.from.y,aQ);
aP=al.effects.setTransition(aR,aK,aE.to.y,aP)
}if(aE.from.x!==aE.to.x){aQ=al.effects.setTransition(aR,ay,aE.from.x,aQ);
aP=al.effects.setTransition(aR,ay,aE.to.x,aP)
}if(aI){al.effects.saveStyle(aR)
}aR.css(aQ);
aR.animate(aP,az.duration,az.easing,function(){if(aI){al.effects.restoreStyle(aR)
}})
})
}aw.animate(ax,{queue:false,duration:az.duration,easing:az.easing,complete:function(){var aO=aw.offset();
if(ax.opacity===0){aw.css("opacity",aH.opacity)
}if(!aI){aw.css("position",aM==="static"?"relative":aM).offset(aO);
al.effects.saveStyle(aw)
}aF()
}})
});
/*!
 * jQuery UI Effects Scale 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
;
var P=al.effects.define("scale",function(ax,aw){var ay=al(this),aB=ax.mode,az=parseInt(ax.percent,10)||(parseInt(ax.percent,10)===0?0:(aB!=="effect"?0:100)),aA=al.extend(true,{from:al.effects.scaledDimensions(ay),to:al.effects.scaledDimensions(ay,az,ax.direction||"both"),origin:ax.origin||["middle","center"]},ax);
if(ax.fade){aA.from.opacity=1;
aA.to.opacity=0
}al.effects.effect.size.call(this,aA,aw)
});
/*!
 * jQuery UI Effects Puff 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
;
var B=al.effects.define("puff","hide",function(ax,aw){var ay=al.extend(true,{},ax,{fade:true,percent:parseInt(ax.percent,10)||150});
al.effects.effect.scale.call(this,ay,aw)
});
/*!
 * jQuery UI Effects Pulsate 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
;
var y=al.effects.define("pulsate","show",function(aH,ay){var aA=al(this),aB=aH.mode,aF=aB==="show",aC=aB==="hide",aG=aF||aC,aD=((aH.times||5)*2)+(aG?1:0),ax=aH.duration/aD,aE=0,az=1,aw=aA.queue().length;
if(aF||!aA.is(":visible")){aA.css("opacity",0).show();
aE=1
}for(;
az<aD;
az++){aA.animate({opacity:aE},ax,aH.easing);
aE=1-aE
}aA.animate({opacity:aE},ax,aH.easing);
aA.queue(ay);
al.effects.unshift(aA,aw,aD+1)
});
/*!
 * jQuery UI Effects Shake 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
;
var ak=al.effects.define("shake",function(aK,aD){var aE=1,aF=al(this),aH=aK.direction||"left",aw=aK.distance||20,ax=aK.times||3,aI=ax*2+1,aB=Math.round(aK.duration/aI),aA=(aH==="up"||aH==="down")?"top":"left",ay=(aH==="up"||aH==="left"),aC={},aJ={},aG={},az=aF.queue().length;
al.effects.createPlaceholder(aF);
aC[aA]=(ay?"-=":"+=")+aw;
aJ[aA]=(ay?"+=":"-=")+aw*2;
aG[aA]=(ay?"-=":"+=")+aw*2;
aF.animate(aC,aB,aK.easing);
for(;
aE<ax;
aE++){aF.animate(aJ,aB,aK.easing).animate(aG,aB,aK.easing)
}aF.animate(aJ,aB,aK.easing).animate(aC,aB/2,aK.easing).queue(aD);
al.effects.unshift(aF,az,aI+1)
});
/*!
 * jQuery UI Effects Slide 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
;
var aj=al.effects.define("slide","show",function(aH,aD){var aA,ax,aE=al(this),ay={up:["bottom","top"],down:["top","bottom"],left:["right","left"],right:["left","right"]},aF=aH.mode,aG=aH.direction||"left",aB=(aG==="up"||aG==="down")?"top":"left",az=(aG==="up"||aG==="left"),aw=aH.distance||aE[aB==="top"?"outerHeight":"outerWidth"](true),aC={};
al.effects.createPlaceholder(aE);
aA=aE.cssClip();
ax=aE.position()[aB];
aC[aB]=(az?-1:1)*aw+ax;
aC.clip=aE.cssClip();
aC.clip[ay[aG][1]]=aC.clip[ay[aG][0]];
if(aF==="show"){aE.cssClip(aC.clip);
aE.css(aB,aC[aB]);
aC.clip=aA;
aC[aB]=ax
}aE.animate(aC,{queue:false,duration:aH.duration,easing:aH.easing,complete:aD})
});
/*!
 * jQuery UI Effects Transfer 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
;
var I;
if(al.uiBackCompat!==false){I=al.effects.define("transfer",function(ax,aw){al(this).transfer(ax,aw)
})
}var N=I;
/*!
 * jQuery UI Focusable 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
;
al.ui.focusable=function(az,ax){var aC,aA,ay,aB,aw,aD=az.nodeName.toLowerCase();
if("area"===aD){aC=az.parentNode;
aA=aC.name;
if(!az.href||!aA||aC.nodeName.toLowerCase()!=="map"){return false
}ay=al("img[usemap='#"+aA+"']");
return ay.length>0&&ay.is(":visible")
}if(/^(input|select|textarea|button|object)$/.test(aD)){aB=!az.disabled;
if(aB){aw=al(az).closest("fieldset")[0];
if(aw){aB=!aw.disabled
}}}else{if("a"===aD){aB=az.href||ax
}else{aB=ax
}}return aB&&al(az).is(":visible")&&o(al(az))
};
function o(ax){var aw=ax.css("visibility");
while(aw==="inherit"){ax=ax.parent();
aw=ax.css("visibility")
}return aw!=="hidden"
}al.extend(al.expr[":"],{focusable:function(aw){return al.ui.focusable(aw,al.attr(aw,"tabindex")!=null)
}});
var at=al.ui.focusable;
var i=al.fn.form=function(){return typeof this[0].form==="string"?this.closest("form"):al(this[0].form)
};
/*!
 * jQuery UI Form Reset Mixin 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
;
var O=al.ui.formResetMixin={_formResetHandler:function(){var aw=al(this);
setTimeout(function(){var ax=aw.data("ui-form-reset-instances");
al.each(ax,function(){this.refresh()
})
})
},_bindFormResetHandler:function(){this.form=this.element.form();
if(!this.form.length){return
}var aw=this.form.data("ui-form-reset-instances")||[];
if(!aw.length){this.form.on("reset.ui-form-reset",this._formResetHandler)
}aw.push(this);
this.form.data("ui-form-reset-instances",aw)
},_unbindFormResetHandler:function(){if(!this.form.length){return
}var aw=this.form.data("ui-form-reset-instances");
aw.splice(al.inArray(this,aw),1);
if(aw.length){this.form.data("ui-form-reset-instances",aw)
}else{this.form.removeData("ui-form-reset-instances").off("reset.ui-form-reset")
}}};
/*!
 * jQuery UI Support for jQuery core 1.7.x 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 */
;
if(al.fn.jquery.substring(0,3)==="1.7"){al.each(["Width","Height"],function(ay,aw){var ax=aw==="Width"?["Left","Right"]:["Top","Bottom"],az=aw.toLowerCase(),aB={innerWidth:al.fn.innerWidth,innerHeight:al.fn.innerHeight,outerWidth:al.fn.outerWidth,outerHeight:al.fn.outerHeight};
function aA(aE,aD,aC,aF){al.each(ax,function(){aD-=parseFloat(al.css(aE,"padding"+this))||0;
if(aC){aD-=parseFloat(al.css(aE,"border"+this+"Width"))||0
}if(aF){aD-=parseFloat(al.css(aE,"margin"+this))||0
}});
return aD
}al.fn["inner"+aw]=function(aC){if(aC===undefined){return aB["inner"+aw].call(this)
}return this.each(function(){al(this).css(az,aA(this,aC)+"px")
})
};
al.fn["outer"+aw]=function(aC,aD){if(typeof aC!=="number"){return aB["outer"+aw].call(this,aC)
}return this.each(function(){al(this).css(az,aA(this,aC,true,aD)+"px")
})
}
});
al.fn.addBack=function(aw){return this.add(aw==null?this.prevObject:this.prevObject.filter(aw))
}
}
/*!
 * jQuery UI Keycode 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
;
var n=al.ui.keyCode={BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38};
var h=al.ui.escapeSelector=(function(){var aw=/([!"#$%&'()*+,./:;<=>?@[\]^`{|}~])/g;
return function(ax){return ax.replace(aw,"\\$1")
}
})();
/*!
 * jQuery UI Labels 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
;
var an=al.fn.labels=function(){var ax,aw,aA,az,ay;
if(this[0].labels&&this[0].labels.length){return this.pushStack(this[0].labels)
}az=this.eq(0).parents("label");
aA=this.attr("id");
if(aA){ax=this.eq(0).parents().last();
ay=ax.add(ax.length?ax.siblings():this.siblings());
aw="label[for='"+al.ui.escapeSelector(aA)+"']";
az=az.add(ay.find(aw).addBack(aw))
}return this.pushStack(az)
};
/*!
 * jQuery UI Scroll Parent 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
;
var aa=al.fn.scrollParent=function(ay){var ax=this.css("position"),aw=ax==="absolute",az=ay?/(auto|scroll|hidden)/:/(auto|scroll)/,aA=this.parents().filter(function(){var aB=al(this);
if(aw&&aB.css("position")==="static"){return false
}return az.test(aB.css("overflow")+aB.css("overflow-y")+aB.css("overflow-x"))
}).eq(0);
return ax==="fixed"||!aA.length?al(this[0].ownerDocument||document):aA
};
/*!
 * jQuery UI Tabbable 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
;
var f=al.extend(al.expr[":"],{tabbable:function(ay){var ax=al.attr(ay,"tabindex"),aw=ax!=null;
return(!aw||ax>=0)&&al.ui.focusable(ay,aw)
}});
/*!
 * jQuery UI Unique ID 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
;
var ab=al.fn.extend({uniqueId:(function(){var aw=0;
return function(){return this.each(function(){if(!this.id){this.id="ui-id-"+(++aw)
}})
}
})(),removeUniqueId:function(){return this.each(function(){if(/^ui-id-\d+$/.test(this.id)){al(this).removeAttr("id")
}})
}});
/*!
 * jQuery UI Accordion 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
;
var d=al.widget("ui.accordion",{version:"1.12.1",options:{active:0,animate:{},classes:{"ui-accordion-header":"ui-corner-top","ui-accordion-header-collapsed":"ui-corner-all","ui-accordion-content":"ui-corner-bottom"},collapsible:false,event:"click",header:"> li > :first-child, > :not(li):even",heightStyle:"auto",icons:{activeHeader:"ui-icon-triangle-1-s",header:"ui-icon-triangle-1-e"},activate:null,beforeActivate:null},hideProps:{borderTopWidth:"hide",borderBottomWidth:"hide",paddingTop:"hide",paddingBottom:"hide",height:"hide"},showProps:{borderTopWidth:"show",borderBottomWidth:"show",paddingTop:"show",paddingBottom:"show",height:"show"},_create:function(){var aw=this.options;
this.prevShow=this.prevHide=al();
this._addClass("ui-accordion","ui-widget ui-helper-reset");
this.element.attr("role","tablist");
if(!aw.collapsible&&(aw.active===false||aw.active==null)){aw.active=0
}this._processPanels();
if(aw.active<0){aw.active+=this.headers.length
}this._refresh()
},_getCreateEventData:function(){return{header:this.active,panel:!this.active.length?al():this.active.next()}
},_createIcons:function(){var ay,ax,aw=this.options.icons;
if(aw){ay=al("<span>");
this._addClass(ay,"ui-accordion-header-icon","ui-icon "+aw.header);
ay.prependTo(this.headers);
ax=this.active.children(".ui-accordion-header-icon");
this._removeClass(ax,aw.header)._addClass(ax,null,aw.activeHeader)._addClass(this.headers,"ui-accordion-icons")
}},_destroyIcons:function(){this._removeClass(this.headers,"ui-accordion-icons");
this.headers.children(".ui-accordion-header-icon").remove()
},_destroy:function(){var aw;
this.element.removeAttr("role");
this.headers.removeAttr("role aria-expanded aria-selected aria-controls tabIndex").removeUniqueId();
this._destroyIcons();
aw=this.headers.next().css("display","").removeAttr("role aria-hidden aria-labelledby").removeUniqueId();
if(this.options.heightStyle!=="content"){aw.css("height","")
}},_setOption:function(aw,ax){if(aw==="active"){this._activate(ax);
return
}if(aw==="event"){if(this.options.event){this._off(this.headers,this.options.event)
}this._setupEvents(ax)
}this._super(aw,ax);
if(aw==="collapsible"&&!ax&&this.options.active===false){this._activate(0)
}if(aw==="icons"){this._destroyIcons();
if(ax){this._createIcons()
}}},_setOptionDisabled:function(aw){this._super(aw);
this.element.attr("aria-disabled",aw);
this._toggleClass(null,"ui-state-disabled",!!aw);
this._toggleClass(this.headers.add(this.headers.next()),null,"ui-state-disabled",!!aw)
},_keydown:function(az){if(az.altKey||az.ctrlKey){return
}var aA=al.ui.keyCode,ay=this.headers.length,aw=this.headers.index(az.target),ax=false;
switch(az.keyCode){case aA.RIGHT:case aA.DOWN:ax=this.headers[(aw+1)%ay];
break;
case aA.LEFT:case aA.UP:ax=this.headers[(aw-1+ay)%ay];
break;
case aA.SPACE:case aA.ENTER:this._eventHandler(az);
break;
case aA.HOME:ax=this.headers[0];
break;
case aA.END:ax=this.headers[ay-1];
break
}if(ax){al(az.target).attr("tabIndex",-1);
al(ax).attr("tabIndex",0);
al(ax).trigger("focus");
az.preventDefault()
}},_panelKeyDown:function(aw){if(aw.keyCode===al.ui.keyCode.UP&&aw.ctrlKey){al(aw.currentTarget).prev().trigger("focus")
}},refresh:function(){var aw=this.options;
this._processPanels();
if((aw.active===false&&aw.collapsible===true)||!this.headers.length){aw.active=false;
this.active=al()
}else{if(aw.active===false){this._activate(0)
}else{if(this.active.length&&!al.contains(this.element[0],this.active[0])){if(this.headers.length===this.headers.find(".ui-state-disabled").length){aw.active=false;
this.active=al()
}else{this._activate(Math.max(0,aw.active-1))
}}else{aw.active=this.headers.index(this.active)
}}}this._destroyIcons();
this._refresh()
},_processPanels:function(){var ax=this.headers,aw=this.panels;
this.headers=this.element.find(this.options.header);
this._addClass(this.headers,"ui-accordion-header ui-accordion-header-collapsed","ui-state-default");
this.panels=this.headers.next().filter(":not(.ui-accordion-content-active)").hide();
this._addClass(this.panels,"ui-accordion-content","ui-helper-reset ui-widget-content");
if(aw){this._off(ax.not(this.headers));
this._off(aw.not(this.panels))
}},_refresh:function(){var az,ax=this.options,aw=ax.heightStyle,ay=this.element.parent();
this.active=this._findActive(ax.active);
this._addClass(this.active,"ui-accordion-header-active","ui-state-active")._removeClass(this.active,"ui-accordion-header-collapsed");
this._addClass(this.active.next(),"ui-accordion-content-active");
this.active.next().show();
this.headers.attr("role","tab").each(function(){var aD=al(this),aC=aD.uniqueId().attr("id"),aA=aD.next(),aB=aA.uniqueId().attr("id");
aD.attr("aria-controls",aB);
aA.attr("aria-labelledby",aC)
}).next().attr("role","tabpanel");
this.headers.not(this.active).attr({"aria-selected":"false","aria-expanded":"false",tabIndex:-1}).next().attr({"aria-hidden":"true"}).hide();
if(!this.active.length){this.headers.eq(0).attr("tabIndex",0)
}else{this.active.attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0}).next().attr({"aria-hidden":"false"})
}this._createIcons();
this._setupEvents(ax.event);
if(aw==="fill"){az=ay.height();
this.element.siblings(":visible").each(function(){var aB=al(this),aA=aB.css("position");
if(aA==="absolute"||aA==="fixed"){return
}az-=aB.outerHeight(true)
});
this.headers.each(function(){az-=al(this).outerHeight(true)
});
this.headers.next().each(function(){al(this).height(Math.max(0,az-al(this).innerHeight()+al(this).height()))
}).css("overflow","auto")
}else{if(aw==="auto"){az=0;
this.headers.next().each(function(){var aA=al(this).is(":visible");
if(!aA){al(this).show()
}az=Math.max(az,al(this).css("height","").height());
if(!aA){al(this).hide()
}}).height(az)
}}},_activate:function(aw){var ax=this._findActive(aw)[0];
if(ax===this.active[0]){return
}ax=ax||this.active[0];
this._eventHandler({target:ax,currentTarget:ax,preventDefault:al.noop})
},_findActive:function(aw){return typeof aw==="number"?this.headers.eq(aw):al()
},_setupEvents:function(ax){var aw={keydown:"_keydown"};
if(ax){al.each(ax.split(" "),function(az,ay){aw[ay]="_eventHandler"
})
}this._off(this.headers.add(this.headers.next()));
this._on(this.headers,aw);
this._on(this.headers.next(),{keydown:"_panelKeyDown"});
this._hoverable(this.headers);
this._focusable(this.headers)
},_eventHandler:function(ax){var ay,az,aG=this.options,aB=this.active,aC=al(ax.currentTarget),aE=aC[0]===aB[0],aA=aE&&aG.collapsible,aw=aA?al():aC.next(),aD=aB.next(),aF={oldHeader:aB,oldPanel:aD,newHeader:aA?al():aC,newPanel:aw};
ax.preventDefault();
if((aE&&!aG.collapsible)||(this._trigger("beforeActivate",ax,aF)===false)){return
}aG.active=aA?false:this.headers.index(aC);
this.active=aE?al():aC;
this._toggle(aF);
this._removeClass(aB,"ui-accordion-header-active","ui-state-active");
if(aG.icons){ay=aB.children(".ui-accordion-header-icon");
this._removeClass(ay,null,aG.icons.activeHeader)._addClass(ay,null,aG.icons.header)
}if(!aE){this._removeClass(aC,"ui-accordion-header-collapsed")._addClass(aC,"ui-accordion-header-active","ui-state-active");
if(aG.icons){az=aC.children(".ui-accordion-header-icon");
this._removeClass(az,null,aG.icons.header)._addClass(az,null,aG.icons.activeHeader)
}this._addClass(aC.next(),"ui-accordion-content-active")
}},_toggle:function(ay){var aw=ay.newPanel,ax=this.prevShow.length?this.prevShow:ay.oldPanel;
this.prevShow.add(this.prevHide).stop(true,true);
this.prevShow=aw;
this.prevHide=ax;
if(this.options.animate){this._animate(aw,ax,ay)
}else{ax.hide();
aw.show();
this._toggleComplete(ay)
}ax.attr({"aria-hidden":"true"});
ax.prev().attr({"aria-selected":"false","aria-expanded":"false"});
if(aw.length&&ax.length){ax.prev().attr({tabIndex:-1,"aria-expanded":"false"})
}else{if(aw.length){this.headers.filter(function(){return parseInt(al(this).attr("tabIndex"),10)===0
}).attr("tabIndex",-1)
}}aw.attr("aria-hidden","false").prev().attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0})
},_animate:function(aw,aF,aB){var aE,aD,aA,aC=this,aG=0,az=aw.css("box-sizing"),aH=aw.length&&(!aF.length||(aw.index()<aF.index())),ay=this.options.animate||{},aI=aH&&ay.down||ay,ax=function(){aC._toggleComplete(aB)
};
if(typeof aI==="number"){aA=aI
}if(typeof aI==="string"){aD=aI
}aD=aD||aI.easing||ay.easing;
aA=aA||aI.duration||ay.duration;
if(!aF.length){return aw.animate(this.showProps,aA,aD,ax)
}if(!aw.length){return aF.animate(this.hideProps,aA,aD,ax)
}aE=aw.show().outerHeight();
aF.animate(this.hideProps,{duration:aA,easing:aD,step:function(aJ,aK){aK.now=Math.round(aJ)
}});
aw.hide().animate(this.showProps,{duration:aA,easing:aD,complete:ax,step:function(aJ,aK){aK.now=Math.round(aJ);
if(aK.prop!=="height"){if(az==="content-box"){aG+=aK.now
}}else{if(aC.options.heightStyle!=="content"){aK.now=Math.round(aE-aF.outerHeight()-aG);
aG=0
}}}})
},_toggleComplete:function(ay){var aw=ay.oldPanel,ax=aw.prev();
this._removeClass(aw,"ui-accordion-content-active");
this._removeClass(ax,"ui-accordion-header-active")._addClass(ax,"ui-accordion-header-collapsed");
if(aw.length){aw.parent()[0].className=aw.parent()[0].className
}this._trigger("activate",null,ay)
}});
var j=al.ui.safeActiveElement=function(aw){var ay;
try{ay=aw.activeElement
}catch(ax){ay=aw.body
}if(!ay){ay=aw.body
}if(!ay.nodeName){ay=aw.body
}return ay
};
/*!
 * jQuery UI Menu 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
;
var p=al.widget("ui.menu",{version:"1.12.1",defaultElement:"<ul>",delay:300,options:{icons:{submenu:"ui-icon-caret-1-e"},items:"> *",menus:"ul",position:{my:"left top",at:"right top"},role:"menu",blur:null,focus:null,select:null},_create:function(){this.activeMenu=this.element;
this.mouseHandled=false;
this.element.uniqueId().attr({role:this.options.role,tabIndex:0});
this._addClass("ui-menu","ui-widget ui-widget-content");
this._on({"mousedown .ui-menu-item":function(aw){aw.preventDefault()
},"click .ui-menu-item":function(aw){var ay=al(aw.target);
var ax=al(al.ui.safeActiveElement(this.document[0]));
if(!this.mouseHandled&&ay.not(".ui-state-disabled").length){this.select(aw);
if(!aw.isPropagationStopped()){this.mouseHandled=true
}if(ay.has(".ui-menu").length){this.expand(aw)
}else{if(!this.element.is(":focus")&&ax.closest(".ui-menu").length){this.element.trigger("focus",[true]);
if(this.active&&this.active.parents(".ui-menu").length===1){clearTimeout(this.timer)
}}}}},"mouseenter .ui-menu-item":function(aw){if(this.previousFilter){return
}var ax=al(aw.target).closest(".ui-menu-item"),ay=al(aw.currentTarget);
if(ax[0]!==ay[0]){return
}this._removeClass(ay.siblings().children(".ui-state-active"),null,"ui-state-active");
this.focus(aw,ay)
},mouseleave:"collapseAll","mouseleave .ui-menu":"collapseAll",focus:function(ay,aw){var ax=this.active||this.element.find(this.options.items).eq(0);
if(!aw){this.focus(ay,ax)
}},blur:function(aw){this._delay(function(){var ax=!al.contains(this.element[0],al.ui.safeActiveElement(this.document[0]));
if(ax){this.collapseAll(aw)
}})
},keydown:"_keydown"});
this.refresh();
this._on(this.document,{click:function(aw){if(this._closeOnDocumentClick(aw)){this.collapseAll(aw)
}this.mouseHandled=false
}})
},_destroy:function(){var ax=this.element.find(".ui-menu-item").removeAttr("role aria-disabled"),aw=ax.children(".ui-menu-item-wrapper").removeUniqueId().removeAttr("tabIndex role aria-haspopup");
this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeAttr("role aria-labelledby aria-expanded aria-hidden aria-disabled tabIndex").removeUniqueId().show();
aw.children().each(function(){var ay=al(this);
if(ay.data("ui-menu-submenu-caret")){ay.remove()
}})
},_keydown:function(aA){var ax,az,aB,ay,aw=true;
switch(aA.keyCode){case al.ui.keyCode.PAGE_UP:this.previousPage(aA);
break;
case al.ui.keyCode.PAGE_DOWN:this.nextPage(aA);
break;
case al.ui.keyCode.HOME:this._move("first","first",aA);
break;
case al.ui.keyCode.END:this._move("last","last",aA);
break;
case al.ui.keyCode.UP:this.previous(aA);
break;
case al.ui.keyCode.DOWN:this.next(aA);
break;
case al.ui.keyCode.LEFT:this.collapse(aA);
break;
case al.ui.keyCode.RIGHT:if(this.active&&!this.active.is(".ui-state-disabled")){this.expand(aA)
}break;
case al.ui.keyCode.ENTER:case al.ui.keyCode.SPACE:this._activate(aA);
break;
case al.ui.keyCode.ESCAPE:this.collapse(aA);
break;
default:aw=false;
az=this.previousFilter||"";
ay=false;
aB=aA.keyCode>=96&&aA.keyCode<=105?(aA.keyCode-96).toString():String.fromCharCode(aA.keyCode);
clearTimeout(this.filterTimer);
if(aB===az){ay=true
}else{aB=az+aB
}ax=this._filterMenuItems(aB);
ax=ay&&ax.index(this.active.next())!==-1?this.active.nextAll(".ui-menu-item"):ax;
if(!ax.length){aB=String.fromCharCode(aA.keyCode);
ax=this._filterMenuItems(aB)
}if(ax.length){this.focus(aA,ax);
this.previousFilter=aB;
this.filterTimer=this._delay(function(){delete this.previousFilter
},1000)
}else{delete this.previousFilter
}}if(aw){aA.preventDefault()
}},_activate:function(aw){if(this.active&&!this.active.is(".ui-state-disabled")){if(this.active.children("[aria-haspopup='true']").length){this.expand(aw)
}else{this.select(aw)
}}},refresh:function(){var aD,ay,aB,az,aw,aC=this,aA=this.options.icons.submenu,ax=this.element.find(this.options.menus);
this._toggleClass("ui-menu-icons",null,!!this.element.find(".ui-icon").length);
aB=ax.filter(":not(.ui-menu)").hide().attr({role:this.options.role,"aria-hidden":"true","aria-expanded":"false"}).each(function(){var aG=al(this),aE=aG.prev(),aF=al("<span>").data("ui-menu-submenu-caret",true);
aC._addClass(aF,"ui-menu-icon","ui-icon "+aA);
aE.attr("aria-haspopup","true").prepend(aF);
aG.attr("aria-labelledby",aE.attr("id"))
});
this._addClass(aB,"ui-menu","ui-widget ui-widget-content ui-front");
aD=ax.add(this.element);
ay=aD.find(this.options.items);
ay.not(".ui-menu-item").each(function(){var aE=al(this);
if(aC._isDivider(aE)){aC._addClass(aE,"ui-menu-divider","ui-widget-content")
}});
az=ay.not(".ui-menu-item, .ui-menu-divider");
aw=az.children().not(".ui-menu").uniqueId().attr({tabIndex:-1,role:this._itemRole()});
this._addClass(az,"ui-menu-item")._addClass(aw,"ui-menu-item-wrapper");
ay.filter(".ui-state-disabled").attr("aria-disabled","true");
if(this.active&&!al.contains(this.element[0],this.active[0])){this.blur()
}},_itemRole:function(){return{menu:"menuitem",listbox:"option"}[this.options.role]
},_setOption:function(ax,ay){if(ax==="icons"){var aw=this.element.find(".ui-menu-icon");
this._removeClass(aw,null,this.options.icons.submenu)._addClass(aw,null,ay.submenu)
}this._super(ax,ay)
},_setOptionDisabled:function(aw){this._super(aw);
this.element.attr("aria-disabled",String(aw));
this._toggleClass(null,"ui-state-disabled",!!aw)
},focus:function(ay,ax){var aA,az,aw;
this.blur(ay,ay&&ay.type==="focus");
this._scrollIntoView(ax);
this.active=ax.first();
az=this.active.children(".ui-menu-item-wrapper");
this._addClass(az,null,"ui-state-active");
if(this.options.role){this.element.attr("aria-activedescendant",az.attr("id"))
}aw=this.active.parent().closest(".ui-menu-item").children(".ui-menu-item-wrapper");
this._addClass(aw,null,"ui-state-active");
if(ay&&ay.type==="keydown"){this._close()
}else{this.timer=this._delay(function(){this._close()
},this.delay)
}aA=ax.children(".ui-menu");
if(aA.length&&ay&&(/^mouse/.test(ay.type))){this._startOpening(aA)
}this.activeMenu=ax.parent();
this._trigger("focus",ay,{item:ax})
},_scrollIntoView:function(az){var aC,ay,aA,aw,ax,aB;
if(this._hasScroll()){aC=parseFloat(al.css(this.activeMenu[0],"borderTopWidth"))||0;
ay=parseFloat(al.css(this.activeMenu[0],"paddingTop"))||0;
aA=az.offset().top-this.activeMenu.offset().top-aC-ay;
aw=this.activeMenu.scrollTop();
ax=this.activeMenu.height();
aB=az.outerHeight();
if(aA<0){this.activeMenu.scrollTop(aw+aA)
}else{if(aA+aB>ax){this.activeMenu.scrollTop(aw+aA-ax+aB)
}}}},blur:function(ax,aw){if(!aw){clearTimeout(this.timer)
}if(!this.active){return
}this._removeClass(this.active.children(".ui-menu-item-wrapper"),null,"ui-state-active");
this._trigger("blur",ax,{item:this.active});
this.active=null
},_startOpening:function(aw){clearTimeout(this.timer);
if(aw.attr("aria-hidden")!=="true"){return
}this.timer=this._delay(function(){this._close();
this._open(aw)
},this.delay)
},_open:function(ax){var aw=al.extend({of:this.active},this.options.position);
clearTimeout(this.timer);
this.element.find(".ui-menu").not(ax.parents(".ui-menu")).hide().attr("aria-hidden","true");
ax.show().removeAttr("aria-hidden").attr("aria-expanded","true").position(aw)
},collapseAll:function(ax,aw){clearTimeout(this.timer);
this.timer=this._delay(function(){var ay=aw?this.element:al(ax&&ax.target).closest(this.element.find(".ui-menu"));
if(!ay.length){ay=this.element
}this._close(ay);
this.blur(ax);
this._removeClass(ay.find(".ui-state-active"),null,"ui-state-active");
this.activeMenu=ay
},this.delay)
},_close:function(aw){if(!aw){aw=this.active?this.active.parent():this.element
}aw.find(".ui-menu").hide().attr("aria-hidden","true").attr("aria-expanded","false")
},_closeOnDocumentClick:function(aw){return !al(aw.target).closest(".ui-menu").length
},_isDivider:function(aw){return !/[^\-\u2014\u2013\s]/.test(aw.text())
},collapse:function(ax){var aw=this.active&&this.active.parent().closest(".ui-menu-item",this.element);
if(aw&&aw.length){this._close();
this.focus(ax,aw)
}},expand:function(ax){var aw=this.active&&this.active.children(".ui-menu ").find(this.options.items).first();
if(aw&&aw.length){this._open(aw.parent());
this._delay(function(){this.focus(ax,aw)
})
}},next:function(aw){this._move("next","first",aw)
},previous:function(aw){this._move("prev","last",aw)
},isFirstItem:function(){return this.active&&!this.active.prevAll(".ui-menu-item").length
},isLastItem:function(){return this.active&&!this.active.nextAll(".ui-menu-item").length
},_move:function(az,ax,ay){var aw;
if(this.active){if(az==="first"||az==="last"){aw=this.active[az==="first"?"prevAll":"nextAll"](".ui-menu-item").eq(-1)
}else{aw=this.active[az+"All"](".ui-menu-item").eq(0)
}}if(!aw||!aw.length||!this.active){aw=this.activeMenu.find(this.options.items)[ax]()
}this.focus(ay,aw)
},nextPage:function(ay){var ax,az,aw;
if(!this.active){this.next(ay);
return
}if(this.isLastItem()){return
}if(this._hasScroll()){az=this.active.offset().top;
aw=this.element.height();
this.active.nextAll(".ui-menu-item").each(function(){ax=al(this);
return ax.offset().top-az-aw<0
});
this.focus(ay,ax)
}else{this.focus(ay,this.activeMenu.find(this.options.items)[!this.active?"first":"last"]())
}},previousPage:function(ay){var ax,az,aw;
if(!this.active){this.next(ay);
return
}if(this.isFirstItem()){return
}if(this._hasScroll()){az=this.active.offset().top;
aw=this.element.height();
this.active.prevAll(".ui-menu-item").each(function(){ax=al(this);
return ax.offset().top-az+aw>0
});
this.focus(ay,ax)
}else{this.focus(ay,this.activeMenu.find(this.options.items).first())
}},_hasScroll:function(){return this.element.outerHeight()<this.element.prop("scrollHeight")
},select:function(aw){this.active=this.active||al(aw.target).closest(".ui-menu-item");
var ax={item:this.active};
if(!this.active.has(".ui-menu").length){this.collapseAll(aw,true)
}this._trigger("select",aw,ax)
},_filterMenuItems:function(ay){var aw=ay.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&"),ax=new RegExp("^"+aw,"i");
return this.activeMenu.find(this.options.items).filter(".ui-menu-item").filter(function(){return ax.test(al.trim(al(this).children(".ui-menu-item-wrapper").text()))
})
}});
/*!
 * jQuery UI Autocomplete 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
;
al.widget("ui.autocomplete",{version:"1.12.1",defaultElement:"<input>",options:{appendTo:null,autoFocus:false,delay:300,minLength:1,position:{my:"left top",at:"left bottom",collision:"none"},source:null,change:null,close:null,focus:null,open:null,response:null,search:null,select:null},requestIndex:0,pending:0,_create:function(){var ay,aw,az,aB=this.element[0].nodeName.toLowerCase(),aA=aB==="textarea",ax=aB==="input";
this.isMultiLine=aA||!ax&&this._isContentEditable(this.element);
this.valueMethod=this.element[aA||ax?"val":"text"];
this.isNewMenu=true;
this._addClass("ui-autocomplete-input");
this.element.attr("autocomplete","off");
this._on(this.element,{keydown:function(aC){if(this.element.prop("readOnly")){ay=true;
az=true;
aw=true;
return
}ay=false;
az=false;
aw=false;
var aD=al.ui.keyCode;
switch(aC.keyCode){case aD.PAGE_UP:ay=true;
this._move("previousPage",aC);
break;
case aD.PAGE_DOWN:ay=true;
this._move("nextPage",aC);
break;
case aD.UP:ay=true;
this._keyEvent("previous",aC);
break;
case aD.DOWN:ay=true;
this._keyEvent("next",aC);
break;
case aD.ENTER:if(this.menu.active){ay=true;
aC.preventDefault();
this.menu.select(aC)
}break;
case aD.TAB:if(this.menu.active){this.menu.select(aC)
}break;
case aD.ESCAPE:if(this.menu.element.is(":visible")){if(!this.isMultiLine){this._value(this.term)
}this.close(aC);
aC.preventDefault()
}break;
default:aw=true;
this._searchTimeout(aC);
break
}},keypress:function(aC){if(ay){ay=false;
if(!this.isMultiLine||this.menu.element.is(":visible")){aC.preventDefault()
}return
}if(aw){return
}var aD=al.ui.keyCode;
switch(aC.keyCode){case aD.PAGE_UP:this._move("previousPage",aC);
break;
case aD.PAGE_DOWN:this._move("nextPage",aC);
break;
case aD.UP:this._keyEvent("previous",aC);
break;
case aD.DOWN:this._keyEvent("next",aC);
break
}},input:function(aC){if(az){az=false;
aC.preventDefault();
return
}this._searchTimeout(aC)
},focus:function(){this.selectedItem=null;
this.previous=this._value()
},blur:function(aC){if(this.cancelBlur){delete this.cancelBlur;
return
}clearTimeout(this.searching);
this.close(aC);
this._change(aC)
}});
this._initSource();
this.menu=al("<ul>").appendTo(this._appendTo()).menu({role:null}).hide().menu("instance");
this._addClass(this.menu.element,"ui-autocomplete","ui-front");
this._on(this.menu.element,{mousedown:function(aC){aC.preventDefault();
this.cancelBlur=true;
this._delay(function(){delete this.cancelBlur;
if(this.element[0]!==al.ui.safeActiveElement(this.document[0])){this.element.trigger("focus")
}})
},menufocus:function(aE,aF){var aC,aD;
if(this.isNewMenu){this.isNewMenu=false;
if(aE.originalEvent&&/^mouse/.test(aE.originalEvent.type)){this.menu.blur();
this.document.one("mousemove",function(){al(aE.target).trigger(aE.originalEvent)
});
return
}}aD=aF.item.data("ui-autocomplete-item");
if(false!==this._trigger("focus",aE,{item:aD})){if(aE.originalEvent&&/^key/.test(aE.originalEvent.type)){this._value(aD.value)
}}aC=aF.item.attr("aria-label")||aD.value;
if(aC&&al.trim(aC).length){this.liveRegion.children().hide();
al("<div>").text(aC).appendTo(this.liveRegion)
}},menuselect:function(aE,aF){var aD=aF.item.data("ui-autocomplete-item"),aC=this.previous;
if(this.element[0]!==al.ui.safeActiveElement(this.document[0])){this.element.trigger("focus");
this.previous=aC;
this._delay(function(){this.previous=aC;
this.selectedItem=aD
})
}if(false!==this._trigger("select",aE,{item:aD})){this._value(aD.value)
}this.term=this._value();
this.close(aE);
this.selectedItem=aD
}});
this.liveRegion=al("<div>",{role:"status","aria-live":"assertive","aria-relevant":"additions"}).appendTo(this.document[0].body);
this._addClass(this.liveRegion,null,"ui-helper-hidden-accessible");
this._on(this.window,{beforeunload:function(){this.element.removeAttr("autocomplete")
}})
},_destroy:function(){clearTimeout(this.searching);
this.element.removeAttr("autocomplete");
this.menu.element.remove();
this.liveRegion.remove()
},_setOption:function(aw,ax){this._super(aw,ax);
if(aw==="source"){this._initSource()
}if(aw==="appendTo"){this.menu.element.appendTo(this._appendTo())
}if(aw==="disabled"&&ax&&this.xhr){this.xhr.abort()
}},_isEventTargetInWidget:function(aw){var ax=this.menu.element[0];
return aw.target===this.element[0]||aw.target===ax||al.contains(ax,aw.target)
},_closeOnClickOutside:function(aw){if(!this._isEventTargetInWidget(aw)){this.close()
}},_appendTo:function(){var aw=this.options.appendTo;
if(aw){aw=aw.jquery||aw.nodeType?al(aw):this.document.find(aw).eq(0)
}if(!aw||!aw[0]){aw=this.element.closest(".ui-front, dialog")
}if(!aw.length){aw=this.document[0].body
}return aw
},_initSource:function(){var ay,aw,ax=this;
if(al.isArray(this.options.source)){ay=this.options.source;
this.source=function(aA,az){az(al.ui.autocomplete.filter(ay,aA.term))
}
}else{if(typeof this.options.source==="string"){aw=this.options.source;
this.source=function(aA,az){if(ax.xhr){ax.xhr.abort()
}ax.xhr=al.ajax({url:aw,data:aA,dataType:"json",success:function(aB){az(aB)
},error:function(){az([])
}})
}
}else{this.source=this.options.source
}}},_searchTimeout:function(aw){clearTimeout(this.searching);
this.searching=this._delay(function(){var ay=this.term===this._value(),ax=this.menu.element.is(":visible"),az=aw.altKey||aw.ctrlKey||aw.metaKey||aw.shiftKey;
if(!ay||(ay&&!ax&&!az)){this.selectedItem=null;
this.search(null,aw)
}},this.options.delay)
},search:function(ax,aw){ax=ax!=null?ax:this._value();
this.term=this._value();
if(ax.length<this.options.minLength){return this.close(aw)
}if(this._trigger("search",aw)===false){return
}return this._search(ax)
},_search:function(aw){this.pending++;
this._addClass("ui-autocomplete-loading");
this.cancelSearch=false;
this.source({term:aw},this._response())
},_response:function(){var aw=++this.requestIndex;
return al.proxy(function(ax){if(aw===this.requestIndex){this.__response(ax)
}this.pending--;
if(!this.pending){this._removeClass("ui-autocomplete-loading")
}},this)
},__response:function(aw){if(aw){aw=this._normalize(aw)
}this._trigger("response",null,{content:aw});
if(!this.options.disabled&&aw&&aw.length&&!this.cancelSearch){this._suggest(aw);
this._trigger("open")
}else{this._close()
}},close:function(aw){this.cancelSearch=true;
this._close(aw)
},_close:function(aw){this._off(this.document,"mousedown");
if(this.menu.element.is(":visible")){this.menu.element.hide();
this.menu.blur();
this.isNewMenu=true;
this._trigger("close",aw)
}},_change:function(aw){if(this.previous!==this._value()){this._trigger("change",aw,{item:this.selectedItem})
}},_normalize:function(aw){if(aw.length&&aw[0].label&&aw[0].value){return aw
}return al.map(aw,function(ax){if(typeof ax==="string"){return{label:ax,value:ax}
}return al.extend({},ax,{label:ax.label||ax.value,value:ax.value||ax.label})
})
},_suggest:function(aw){var ax=this.menu.element.empty();
this._renderMenu(ax,aw);
this.isNewMenu=true;
this.menu.refresh();
ax.show();
this._resizeMenu();
ax.position(al.extend({of:this.element},this.options.position));
if(this.options.autoFocus){this.menu.next()
}this._on(this.document,{mousedown:"_closeOnClickOutside"})
},_resizeMenu:function(){var aw=this.menu.element;
aw.outerWidth(Math.max(aw.width("").outerWidth()+1,this.element.outerWidth()))
},_renderMenu:function(ax,aw){var ay=this;
al.each(aw,function(az,aA){ay._renderItemData(ax,aA)
})
},_renderItemData:function(aw,ax){return this._renderItem(aw,ax).data("ui-autocomplete-item",ax)
},_renderItem:function(aw,ax){return al("<li>").append(al("<div>").text(ax.label)).appendTo(aw)
},_move:function(ax,aw){if(!this.menu.element.is(":visible")){this.search(null,aw);
return
}if(this.menu.isFirstItem()&&/^previous/.test(ax)||this.menu.isLastItem()&&/^next/.test(ax)){if(!this.isMultiLine){this._value(this.term)
}this.menu.blur();
return
}this.menu[ax](aw)
},widget:function(){return this.menu.element
},_value:function(){return this.valueMethod.apply(this.element,arguments)
},_keyEvent:function(ax,aw){if(!this.isMultiLine||this.menu.element.is(":visible")){this._move(ax,aw);
aw.preventDefault()
}},_isContentEditable:function(ax){if(!ax.length){return false
}var aw=ax.prop("contentEditable");
if(aw==="inherit"){return this._isContentEditable(ax.parent())
}return aw==="true"
}});
al.extend(al.ui.autocomplete,{escapeRegex:function(aw){return aw.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")
},filter:function(ay,aw){var ax=new RegExp(al.ui.autocomplete.escapeRegex(aw),"i");
return al.grep(ay,function(az){return ax.test(az.label||az.value||az)
})
}});
al.widget("ui.autocomplete",al.ui.autocomplete,{options:{messages:{noResults:"No search results.",results:function(aw){return aw+(aw>1?" results are":" result is")+" available, use up and down arrow keys to navigate."
}}},__response:function(ax){var aw;
this._superApply(arguments);
if(this.options.disabled||this.cancelSearch){return
}if(ax&&ax.length){aw=this.options.messages.results(ax.length)
}else{aw=this.options.messages.noResults
}this.liveRegion.children().hide();
al("<div>").text(aw).appendTo(this.liveRegion)
}});
var ao=al.ui.autocomplete;
/*!
 * jQuery UI Controlgroup 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
;
var g=/ui-corner-([a-z]){2,6}/g;
var w=al.widget("ui.controlgroup",{version:"1.12.1",defaultElement:"<div>",options:{direction:"horizontal",disabled:null,onlyVisible:true,items:{button:"input[type=button], input[type=submit], input[type=reset], button, a",controlgroupLabel:".ui-controlgroup-label",checkboxradio:"input[type='checkbox'], input[type='radio']",selectmenu:"select",spinner:".ui-spinner-input"}},_create:function(){this._enhance()
},_enhance:function(){this.element.attr("role","toolbar");
this.refresh()
},_destroy:function(){this._callChildMethod("destroy");
this.childWidgets.removeData("ui-controlgroup-data");
this.element.removeAttr("role");
if(this.options.items.controlgroupLabel){this.element.find(this.options.items.controlgroupLabel).find(".ui-controlgroup-label-contents").contents().unwrap()
}},_initWidgets:function(){var ax=this,aw=[];
al.each(this.options.items,function(aA,ay){var aB;
var az={};
if(!ay){return
}if(aA==="controlgroupLabel"){aB=ax.element.find(ay);
aB.each(function(){var aC=al(this);
if(aC.children(".ui-controlgroup-label-contents").length){return
}aC.contents().wrapAll("<span class='ui-controlgroup-label-contents'></span>")
});
ax._addClass(aB,null,"ui-widget ui-widget-content ui-state-default");
aw=aw.concat(aB.get());
return
}if(!al.fn[aA]){return
}if(ax["_"+aA+"Options"]){az=ax["_"+aA+"Options"]("middle")
}else{az={classes:{}}
}ax.element.find(ay).each(function(){var aD=al(this);
var aC=aD[aA]("instance");
var aE=al.widget.extend({},az);
if(aA==="button"&&aD.parent(".ui-spinner").length){return
}if(!aC){aC=aD[aA]()[aA]("instance")
}if(aC){aE.classes=ax._resolveClassesValues(aE.classes,aC)
}aD[aA](aE);
var aF=aD[aA]("widget");
al.data(aF[0],"ui-controlgroup-data",aC?aC:aD[aA]("instance"));
aw.push(aF[0])
})
});
this.childWidgets=al(al.unique(aw));
this._addClass(this.childWidgets,"ui-controlgroup-item")
},_callChildMethod:function(aw){this.childWidgets.each(function(){var ax=al(this),ay=ax.data("ui-controlgroup-data");
if(ay&&ay[aw]){ay[aw]()
}})
},_updateCornerClass:function(ay,ax){var aw="ui-corner-top ui-corner-bottom ui-corner-left ui-corner-right ui-corner-all";
var az=this._buildSimpleOptions(ax,"label").classes.label;
this._removeClass(ay,null,aw);
this._addClass(ay,null,az)
},_buildSimpleOptions:function(ax,ay){var az=this.options.direction==="vertical";
var aw={classes:{}};
aw.classes[ay]={middle:"",first:"ui-corner-"+(az?"top":"left"),last:"ui-corner-"+(az?"bottom":"right"),only:"ui-corner-all"}[ax];
return aw
},_spinnerOptions:function(aw){var ax=this._buildSimpleOptions(aw,"ui-spinner");
ax.classes["ui-spinner-up"]="";
ax.classes["ui-spinner-down"]="";
return ax
},_buttonOptions:function(aw){return this._buildSimpleOptions(aw,"ui-button")
},_checkboxradioOptions:function(aw){return this._buildSimpleOptions(aw,"ui-checkboxradio-label")
},_selectmenuOptions:function(aw){var ax=this.options.direction==="vertical";
return{width:ax?"auto":false,classes:{middle:{"ui-selectmenu-button-open":"","ui-selectmenu-button-closed":""},first:{"ui-selectmenu-button-open":"ui-corner-"+(ax?"top":"tl"),"ui-selectmenu-button-closed":"ui-corner-"+(ax?"top":"left")},last:{"ui-selectmenu-button-open":ax?"":"ui-corner-tr","ui-selectmenu-button-closed":"ui-corner-"+(ax?"bottom":"right")},only:{"ui-selectmenu-button-open":"ui-corner-top","ui-selectmenu-button-closed":"ui-corner-all"}}[aw]}
},_resolveClassesValues:function(ay,ax){var aw={};
al.each(ay,function(az){var aA=ax.options.classes[az]||"";
aA=al.trim(aA.replace(g,""));
aw[az]=(aA+" "+ay[az]).replace(/\s+/g," ")
});
return aw
},_setOption:function(aw,ax){if(aw==="direction"){this._removeClass("ui-controlgroup-"+this.options.direction)
}this._super(aw,ax);
if(aw==="disabled"){this._callChildMethod(ax?"disable":"enable");
return
}this.refresh()
},refresh:function(){var aw,ax=this;
this._addClass("ui-controlgroup ui-controlgroup-"+this.options.direction);
if(this.options.direction==="horizontal"){this._addClass(null,"ui-helper-clearfix")
}this._initWidgets();
aw=this.childWidgets;
if(this.options.onlyVisible){aw=aw.filter(":visible")
}if(aw.length){al.each(["first","last"],function(aA,aB){var ay=aw[aB]().data("ui-controlgroup-data");
if(ay&&ax["_"+ay.widgetName+"Options"]){var az=ax["_"+ay.widgetName+"Options"](aw.length===1?"only":aB);
az.classes=ax._resolveClassesValues(az.classes,ay);
ay.element[ay.widgetName](az)
}else{ax._updateCornerClass(aw[aB](),aB)
}});
this._callChildMethod("refresh")
}}});
/*!
 * jQuery UI Checkboxradio 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
;
al.widget("ui.checkboxradio",[al.ui.formResetMixin,{version:"1.12.1",options:{disabled:null,label:null,icon:true,classes:{"ui-checkboxradio-label":"ui-corner-all","ui-checkboxradio-icon":"ui-corner-all"}},_getCreateOptions:function(){var ax,az;
var ay=this;
var aw=this._super()||{};
this._readType();
az=this.element.labels();
this.label=al(az[az.length-1]);
if(!this.label.length){al.error("No label found for checkboxradio widget")
}this.originalLabel="";
this.label.contents().not(this.element[0]).each(function(){ay.originalLabel+=this.nodeType===3?al(this).text():this.outerHTML
});
if(this.originalLabel){aw.label=this.originalLabel
}ax=this.element[0].disabled;
if(ax!=null){aw.disabled=ax
}return aw
},_create:function(){var aw=this.element[0].checked;
this._bindFormResetHandler();
if(this.options.disabled==null){this.options.disabled=this.element[0].disabled
}this._setOption("disabled",this.options.disabled);
this._addClass("ui-checkboxradio","ui-helper-hidden-accessible");
this._addClass(this.label,"ui-checkboxradio-label","ui-button ui-widget");
if(this.type==="radio"){this._addClass(this.label,"ui-checkboxradio-radio-label")
}if(this.options.label&&this.options.label!==this.originalLabel){this._updateLabel()
}else{if(this.originalLabel){this.options.label=this.originalLabel
}}this._enhance();
if(aw){this._addClass(this.label,"ui-checkboxradio-checked","ui-state-active");
if(this.icon){this._addClass(this.icon,null,"ui-state-hover")
}}this._on({change:"_toggleClasses",focus:function(){this._addClass(this.label,null,"ui-state-focus ui-visual-focus")
},blur:function(){this._removeClass(this.label,null,"ui-state-focus ui-visual-focus")
}})
},_readType:function(){var aw=this.element[0].nodeName.toLowerCase();
this.type=this.element[0].type;
if(aw!=="input"||!/radio|checkbox/.test(this.type)){al.error("Can't create checkboxradio on element.nodeName="+aw+" and element.type="+this.type)
}},_enhance:function(){this._updateIcon(this.element[0].checked)
},widget:function(){return this.label
},_getRadioGroup:function(){var ay;
var aw=this.element[0].name;
var ax="input[name='"+al.ui.escapeSelector(aw)+"']";
if(!aw){return al([])
}if(this.form.length){ay=al(this.form[0].elements).filter(ax)
}else{ay=al(ax).filter(function(){return al(this).form().length===0
})
}return ay.not(this.element)
},_toggleClasses:function(){var aw=this.element[0].checked;
this._toggleClass(this.label,"ui-checkboxradio-checked","ui-state-active",aw);
if(this.options.icon&&this.type==="checkbox"){this._toggleClass(this.icon,null,"ui-icon-check ui-state-checked",aw)._toggleClass(this.icon,null,"ui-icon-blank",!aw)
}if(this.type==="radio"){this._getRadioGroup().each(function(){var ax=al(this).checkboxradio("instance");
if(ax){ax._removeClass(ax.label,"ui-checkboxradio-checked","ui-state-active")
}})
}},_destroy:function(){this._unbindFormResetHandler();
if(this.icon){this.icon.remove();
this.iconSpace.remove()
}},_setOption:function(aw,ax){if(aw==="label"&&!ax){return
}this._super(aw,ax);
if(aw==="disabled"){this._toggleClass(this.label,null,"ui-state-disabled",ax);
this.element[0].disabled=ax;
return
}this.refresh()
},_updateIcon:function(ax){var aw="ui-icon ui-icon-background ";
if(this.options.icon){if(!this.icon){this.icon=al("<span>");
this.iconSpace=al("<span> </span>");
this._addClass(this.iconSpace,"ui-checkboxradio-icon-space")
}if(this.type==="checkbox"){aw+=ax?"ui-icon-check ui-state-checked":"ui-icon-blank";
this._removeClass(this.icon,null,ax?"ui-icon-blank":"ui-icon-check")
}else{aw+="ui-icon-blank"
}this._addClass(this.icon,"ui-checkboxradio-icon",aw);
if(!ax){this._removeClass(this.icon,null,"ui-icon-check ui-state-checked")
}this.icon.prependTo(this.label).after(this.iconSpace)
}else{if(this.icon!==undefined){this.icon.remove();
this.iconSpace.remove();
delete this.icon
}}},_updateLabel:function(){var aw=this.label.contents().not(this.element[0]);
if(this.icon){aw=aw.not(this.icon[0])
}if(this.iconSpace){aw=aw.not(this.iconSpace[0])
}aw.remove();
this.label.append(this.options.label)
},refresh:function(){var ax=this.element[0].checked,aw=this.element[0].disabled;
this._updateIcon(ax);
this._toggleClass(this.label,"ui-checkboxradio-checked","ui-state-active",ax);
if(this.options.label!==null){this._updateLabel()
}if(aw!==this.options.disabled){this._setOptions({disabled:aw})
}}}]);
var ap=al.ui.checkboxradio;
/*!
 * jQuery UI Button 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
;
al.widget("ui.button",{version:"1.12.1",defaultElement:"<button>",options:{classes:{"ui-button":"ui-corner-all"},disabled:null,icon:null,iconPosition:"beginning",label:null,showLabel:true},_getCreateOptions:function(){var ax,aw=this._super()||{};
this.isInput=this.element.is("input");
ax=this.element[0].disabled;
if(ax!=null){aw.disabled=ax
}this.originalLabel=this.isInput?this.element.val():this.element.html();
if(this.originalLabel){aw.label=this.originalLabel
}return aw
},_create:function(){if(!this.option.showLabel&!this.options.icon){this.options.showLabel=true
}if(this.options.disabled==null){this.options.disabled=this.element[0].disabled||false
}this.hasTitle=!!this.element.attr("title");
if(this.options.label&&this.options.label!==this.originalLabel){if(this.isInput){this.element.val(this.options.label)
}else{this.element.html(this.options.label)
}}this._addClass("ui-button","ui-widget");
this._setOption("disabled",this.options.disabled);
this._enhance();
if(this.element.is("a")){this._on({keyup:function(aw){if(aw.keyCode===al.ui.keyCode.SPACE){aw.preventDefault();
if(this.element[0].click){this.element[0].click()
}else{this.element.trigger("click")
}}}})
}},_enhance:function(){if(!this.element.is("button")){this.element.attr("role","button")
}if(this.options.icon){this._updateIcon("icon",this.options.icon);
this._updateTooltip()
}},_updateTooltip:function(){this.title=this.element.attr("title");
if(!this.options.showLabel&&!this.title){this.element.attr("title",this.options.label)
}},_updateIcon:function(ay,aA){var ax=ay!=="iconPosition",aw=ax?this.options.iconPosition:aA,az=aw==="top"||aw==="bottom";
if(!this.icon){this.icon=al("<span>");
this._addClass(this.icon,"ui-button-icon","ui-icon");
if(!this.options.showLabel){this._addClass("ui-button-icon-only")
}}else{if(ax){this._removeClass(this.icon,null,this.options.icon)
}}if(ax){this._addClass(this.icon,null,aA)
}this._attachIcon(aw);
if(az){this._addClass(this.icon,null,"ui-widget-icon-block");
if(this.iconSpace){this.iconSpace.remove()
}}else{if(!this.iconSpace){this.iconSpace=al("<span> </span>");
this._addClass(this.iconSpace,"ui-button-icon-space")
}this._removeClass(this.icon,null,"ui-wiget-icon-block");
this._attachIconSpace(aw)
}},_destroy:function(){this.element.removeAttr("role");
if(this.icon){this.icon.remove()
}if(this.iconSpace){this.iconSpace.remove()
}if(!this.hasTitle){this.element.removeAttr("title")
}},_attachIconSpace:function(aw){this.icon[/^(?:end|bottom)/.test(aw)?"before":"after"](this.iconSpace)
},_attachIcon:function(aw){this.element[/^(?:end|bottom)/.test(aw)?"append":"prepend"](this.icon)
},_setOptions:function(ax){var ay=ax.showLabel===undefined?this.options.showLabel:ax.showLabel,aw=ax.icon===undefined?this.options.icon:ax.icon;
if(!ay&&!aw){ax.showLabel=true
}this._super(ax)
},_setOption:function(aw,ax){if(aw==="icon"){if(ax){this._updateIcon(aw,ax)
}else{if(this.icon){this.icon.remove();
if(this.iconSpace){this.iconSpace.remove()
}}}}if(aw==="iconPosition"){this._updateIcon(aw,ax)
}if(aw==="showLabel"){this._toggleClass("ui-button-icon-only",null,!ax);
this._updateTooltip()
}if(aw==="label"){if(this.isInput){this.element.val(ax)
}else{this.element.html(ax);
if(this.icon){this._attachIcon(this.options.iconPosition);
this._attachIconSpace(this.options.iconPosition)
}}}this._super(aw,ax);
if(aw==="disabled"){this._toggleClass(null,"ui-state-disabled",ax);
this.element[0].disabled=ax;
if(ax){this.element.blur()
}}},refresh:function(){var aw=this.element.is("input, button")?this.element[0].disabled:this.element.hasClass("ui-button-disabled");
if(aw!==this.options.disabled){this._setOptions({disabled:aw})
}this._updateTooltip()
}});
if(al.uiBackCompat!==false){al.widget("ui.button",al.ui.button,{options:{text:true,icons:{primary:null,secondary:null}},_create:function(){if(this.options.showLabel&&!this.options.text){this.options.showLabel=this.options.text
}if(!this.options.showLabel&&this.options.text){this.options.text=this.options.showLabel
}if(!this.options.icon&&(this.options.icons.primary||this.options.icons.secondary)){if(this.options.icons.primary){this.options.icon=this.options.icons.primary
}else{this.options.icon=this.options.icons.secondary;
this.options.iconPosition="end"
}}else{if(this.options.icon){this.options.icons.primary=this.options.icon
}}this._super()
},_setOption:function(aw,ax){if(aw==="text"){this._super("showLabel",ax);
return
}if(aw==="showLabel"){this.options.text=ax
}if(aw==="icon"){this.options.icons.primary=ax
}if(aw==="icons"){if(ax.primary){this._super("icon",ax.primary);
this._super("iconPosition","beginning")
}else{if(ax.secondary){this._super("icon",ax.secondary);
this._super("iconPosition","end")
}}}this._superApply(arguments)
}});
al.fn.button=(function(aw){return function(){if(!this.length||(this.length&&this[0].tagName!=="INPUT")||(this.length&&this[0].tagName==="INPUT"&&(this.attr("type")!=="checkbox"&&this.attr("type")!=="radio"))){return aw.apply(this,arguments)
}if(!al.ui.checkboxradio){al.error("Checkboxradio widget missing")
}if(arguments.length===0){return this.checkboxradio({icon:false})
}return this.checkboxradio.apply(this,arguments)
}
})(al.fn.button);
al.fn.buttonset=function(){if(!al.ui.controlgroup){al.error("Controlgroup widget missing")
}if(arguments[0]==="option"&&arguments[1]==="items"&&arguments[2]){return this.controlgroup.apply(this,[arguments[0],"items.button",arguments[2]])
}if(arguments[0]==="option"&&arguments[1]==="items"){return this.controlgroup.apply(this,[arguments[0],"items.button"])
}if(typeof arguments[0]==="object"&&arguments[0].items){arguments[0].items={button:arguments[0].items}
}return this.controlgroup.apply(this,arguments)
}
}var D=al.ui.button;
/*!
 * jQuery UI Datepicker 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
;
al.extend(al.ui,{datepicker:{version:"1.12.1"}});
var ar;
function ag(ax){var aw,ay;
while(ax.length&&ax[0]!==document){aw=ax.css("position");
if(aw==="absolute"||aw==="relative"||aw==="fixed"){ay=parseInt(ax.css("zIndex"),10);
if(!isNaN(ay)&&ay!==0){return ay
}}ax=ax.parent()
}return 0
}function Q(){this._curInst=null;
this._keyEvent=false;
this._disabledInputs=[];
this._datepickerShowing=false;
this._inDialog=false;
this._mainDivId="ui-datepicker-div";
this._inlineClass="ui-datepicker-inline";
this._appendClass="ui-datepicker-append";
this._triggerClass="ui-datepicker-trigger";
this._dialogClass="ui-datepicker-dialog";
this._disableClass="ui-datepicker-disabled";
this._unselectableClass="ui-datepicker-unselectable";
this._currentClass="ui-datepicker-current-day";
this._dayOverClass="ui-datepicker-days-cell-over";
this.regional=[];
this.regional[""]={closeText:"Done",prevText:"Prev",nextText:"Next",currentText:"Today",monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],weekHeader:"Wk",dateFormat:"mm/dd/yy",firstDay:0,isRTL:false,showMonthAfterYear:false,yearSuffix:""};
this._defaults={showOn:"focus",showAnim:"fadeIn",showOptions:{},defaultDate:null,appendText:"",buttonText:"...",buttonImage:"",buttonImageOnly:false,hideIfNoPrevNext:false,navigationAsDateFormat:false,gotoCurrent:false,changeMonth:false,changeYear:false,yearRange:"c-10:c+10",showOtherMonths:false,selectOtherMonths:false,showWeek:false,calculateWeek:this.iso8601Week,shortYearCutoff:"+10",minDate:null,maxDate:null,duration:"fast",beforeShowDay:null,beforeShow:null,onSelect:null,onChangeMonthYear:null,onClose:null,numberOfMonths:1,showCurrentAtPos:0,stepMonths:1,stepBigMonths:12,altField:"",altFormat:"",constrainInput:true,showButtonPanel:false,autoSize:false,disabled:false};
al.extend(this._defaults,this.regional[""]);
this.regional.en=al.extend(true,{},this.regional[""]);
this.regional["en-US"]=al.extend(true,{},this.regional.en);
this.dpDiv=Y(al("<div id='"+this._mainDivId+"' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))
}al.extend(Q.prototype,{markerClassName:"hasDatepicker",maxRows:4,_widgetDatepicker:function(){return this.dpDiv
},setDefaults:function(aw){G(this._defaults,aw||{});
return this
},_attachDatepicker:function(az,aw){var aA,ay,ax;
aA=az.nodeName.toLowerCase();
ay=(aA==="div"||aA==="span");
if(!az.id){this.uuid+=1;
az.id="dp"+this.uuid
}ax=this._newInst(al(az),ay);
ax.settings=al.extend({},aw||{});
if(aA==="input"){this._connectDatepicker(az,ax)
}else{if(ay){this._inlineDatepicker(az,ax)
}}},_newInst:function(ax,aw){var ay=ax[0].id.replace(/([^A-Za-z0-9_\-])/g,"\\\\$1");
return{id:ay,input:ax,selectedDay:0,selectedMonth:0,selectedYear:0,drawMonth:0,drawYear:0,inline:aw,dpDiv:(!aw?this.dpDiv:Y(al("<div class='"+this._inlineClass+" ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")))}
},_connectDatepicker:function(ay,ax){var aw=al(ay);
ax.append=al([]);
ax.trigger=al([]);
if(aw.hasClass(this.markerClassName)){return
}this._attachments(aw,ax);
aw.addClass(this.markerClassName).on("keydown",this._doKeyDown).on("keypress",this._doKeyPress).on("keyup",this._doKeyUp);
this._autoSize(ax);
al.data(ay,"datepicker",ax);
if(ax.settings.disabled){this._disableDatepicker(ay)
}},_attachments:function(ay,aB){var ax,aA,aw,aC=this._get(aB,"appendText"),az=this._get(aB,"isRTL");
if(aB.append){aB.append.remove()
}if(aC){aB.append=al("<span class='"+this._appendClass+"'>"+aC+"</span>");
ay[az?"before":"after"](aB.append)
}ay.off("focus",this._showDatepicker);
if(aB.trigger){aB.trigger.remove()
}ax=this._get(aB,"showOn");
if(ax==="focus"||ax==="both"){ay.on("focus",this._showDatepicker)
}if(ax==="button"||ax==="both"){aA=this._get(aB,"buttonText");
aw=this._get(aB,"buttonImage");
aB.trigger=al(this._get(aB,"buttonImageOnly")?al("<img/>").addClass(this._triggerClass).attr({src:aw,alt:aA,title:aA}):al("<button type='button'></button>").addClass(this._triggerClass).html(!aw?aA:al("<img/>").attr({src:aw,alt:aA,title:aA})));
ay[az?"before":"after"](aB.trigger);
aB.trigger.on("click",function(){if(al.datepicker._datepickerShowing&&al.datepicker._lastInput===ay[0]){al.datepicker._hideDatepicker()
}else{if(al.datepicker._datepickerShowing&&al.datepicker._lastInput!==ay[0]){al.datepicker._hideDatepicker();
al.datepicker._showDatepicker(ay[0])
}else{al.datepicker._showDatepicker(ay[0])
}}return false
})
}},_autoSize:function(aC){if(this._get(aC,"autoSize")&&!aC.inline){var az,ax,ay,aB,aA=new Date(2009,12-1,20),aw=this._get(aC,"dateFormat");
if(aw.match(/[DM]/)){az=function(aD){ax=0;
ay=0;
for(aB=0;
aB<aD.length;
aB++){if(aD[aB].length>ax){ax=aD[aB].length;
ay=aB
}}return ay
};
aA.setMonth(az(this._get(aC,(aw.match(/MM/)?"monthNames":"monthNamesShort"))));
aA.setDate(az(this._get(aC,(aw.match(/DD/)?"dayNames":"dayNamesShort")))+20-aA.getDay())
}aC.input.attr("size",this._formatDate(aC,aA).length)
}},_inlineDatepicker:function(ax,aw){var ay=al(ax);
if(ay.hasClass(this.markerClassName)){return
}ay.addClass(this.markerClassName).append(aw.dpDiv);
al.data(ax,"datepicker",aw);
this._setDate(aw,this._getDefaultDate(aw),true);
this._updateDatepicker(aw);
this._updateAlternate(aw);
if(aw.settings.disabled){this._disableDatepicker(ax)
}aw.dpDiv.css("display","block")
},_dialogDatepicker:function(aD,ax,aB,ay,aC){var aw,aG,aA,aF,aE,az=this._dialogInst;
if(!az){this.uuid+=1;
aw="dp"+this.uuid;
this._dialogInput=al("<input type='text' id='"+aw+"' style='position: absolute; top: -100px; width: 0px;'/>");
this._dialogInput.on("keydown",this._doKeyDown);
al("body").append(this._dialogInput);
az=this._dialogInst=this._newInst(this._dialogInput,false);
az.settings={};
al.data(this._dialogInput[0],"datepicker",az)
}G(az.settings,ay||{});
ax=(ax&&ax.constructor===Date?this._formatDate(az,ax):ax);
this._dialogInput.val(ax);
this._pos=(aC?(aC.length?aC:[aC.pageX,aC.pageY]):null);
if(!this._pos){aG=document.documentElement.clientWidth;
aA=document.documentElement.clientHeight;
aF=document.documentElement.scrollLeft||document.body.scrollLeft;
aE=document.documentElement.scrollTop||document.body.scrollTop;
this._pos=[(aG/2)-100+aF,(aA/2)-150+aE]
}this._dialogInput.css("left",(this._pos[0]+20)+"px").css("top",this._pos[1]+"px");
az.settings.onSelect=aB;
this._inDialog=true;
this.dpDiv.addClass(this._dialogClass);
this._showDatepicker(this._dialogInput[0]);
if(al.blockUI){al.blockUI(this.dpDiv)
}al.data(this._dialogInput[0],"datepicker",az);
return this
},_destroyDatepicker:function(ay){var az,aw=al(ay),ax=al.data(ay,"datepicker");
if(!aw.hasClass(this.markerClassName)){return
}az=ay.nodeName.toLowerCase();
al.removeData(ay,"datepicker");
if(az==="input"){ax.append.remove();
ax.trigger.remove();
aw.removeClass(this.markerClassName).off("focus",this._showDatepicker).off("keydown",this._doKeyDown).off("keypress",this._doKeyPress).off("keyup",this._doKeyUp)
}else{if(az==="div"||az==="span"){aw.removeClass(this.markerClassName).empty()
}}if(ar===ax){ar=null
}},_enableDatepicker:function(az){var aA,ay,aw=al(az),ax=al.data(az,"datepicker");
if(!aw.hasClass(this.markerClassName)){return
}aA=az.nodeName.toLowerCase();
if(aA==="input"){az.disabled=false;
ax.trigger.filter("button").each(function(){this.disabled=false
}).end().filter("img").css({opacity:"1.0",cursor:""})
}else{if(aA==="div"||aA==="span"){ay=aw.children("."+this._inlineClass);
ay.children().removeClass("ui-state-disabled");
ay.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",false)
}}this._disabledInputs=al.map(this._disabledInputs,function(aB){return(aB===az?null:aB)
})
},_disableDatepicker:function(az){var aA,ay,aw=al(az),ax=al.data(az,"datepicker");
if(!aw.hasClass(this.markerClassName)){return
}aA=az.nodeName.toLowerCase();
if(aA==="input"){az.disabled=true;
ax.trigger.filter("button").each(function(){this.disabled=true
}).end().filter("img").css({opacity:"0.5",cursor:"default"})
}else{if(aA==="div"||aA==="span"){ay=aw.children("."+this._inlineClass);
ay.children().addClass("ui-state-disabled");
ay.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",true)
}}this._disabledInputs=al.map(this._disabledInputs,function(aB){return(aB===az?null:aB)
});
this._disabledInputs[this._disabledInputs.length]=az
},_isDisabledDatepicker:function(ax){if(!ax){return false
}for(var aw=0;
aw<this._disabledInputs.length;
aw++){if(this._disabledInputs[aw]===ax){return true
}}return false
},_getInst:function(ax){try{return al.data(ax,"datepicker")
}catch(aw){throw"Missing instance data for this datepicker"
}},_optionDatepicker:function(aC,ax,aB){var ay,aw,aA,aD,az=this._getInst(aC);
if(arguments.length===2&&typeof ax==="string"){return(ax==="defaults"?al.extend({},al.datepicker._defaults):(az?(ax==="all"?al.extend({},az.settings):this._get(az,ax)):null))
}ay=ax||{};
if(typeof ax==="string"){ay={};
ay[ax]=aB
}if(az){if(this._curInst===az){this._hideDatepicker()
}aw=this._getDateDatepicker(aC,true);
aA=this._getMinMaxDate(az,"min");
aD=this._getMinMaxDate(az,"max");
G(az.settings,ay);
if(aA!==null&&ay.dateFormat!==undefined&&ay.minDate===undefined){az.settings.minDate=this._formatDate(az,aA)
}if(aD!==null&&ay.dateFormat!==undefined&&ay.maxDate===undefined){az.settings.maxDate=this._formatDate(az,aD)
}if("disabled" in ay){if(ay.disabled){this._disableDatepicker(aC)
}else{this._enableDatepicker(aC)
}}this._attachments(al(aC),az);
this._autoSize(az);
this._setDate(az,aw);
this._updateAlternate(az);
this._updateDatepicker(az)
}},_changeDatepicker:function(ay,aw,ax){this._optionDatepicker(ay,aw,ax)
},_refreshDatepicker:function(ax){var aw=this._getInst(ax);
if(aw){this._updateDatepicker(aw)
}},_setDateDatepicker:function(ay,aw){var ax=this._getInst(ay);
if(ax){this._setDate(ax,aw);
this._updateDatepicker(ax);
this._updateAlternate(ax)
}},_getDateDatepicker:function(ay,aw){var ax=this._getInst(ay);
if(ax&&!ax.inline){this._setDateFromField(ax,aw)
}return(ax?this._getDate(ax):null)
},_doKeyDown:function(az){var ax,aw,aB,aA=al.datepicker._getInst(az.target),aC=true,ay=aA.dpDiv.is(".ui-datepicker-rtl");
aA._keyEvent=true;
if(al.datepicker._datepickerShowing){switch(az.keyCode){case 9:al.datepicker._hideDatepicker();
aC=false;
break;
case 13:aB=al("td."+al.datepicker._dayOverClass+":not(."+al.datepicker._currentClass+")",aA.dpDiv);
if(aB[0]){al.datepicker._selectDay(az.target,aA.selectedMonth,aA.selectedYear,aB[0])
}ax=al.datepicker._get(aA,"onSelect");
if(ax){aw=al.datepicker._formatDate(aA);
ax.apply((aA.input?aA.input[0]:null),[aw,aA])
}else{al.datepicker._hideDatepicker()
}return false;
case 27:al.datepicker._hideDatepicker();
break;
case 33:al.datepicker._adjustDate(az.target,(az.ctrlKey?-al.datepicker._get(aA,"stepBigMonths"):-al.datepicker._get(aA,"stepMonths")),"M");
break;
case 34:al.datepicker._adjustDate(az.target,(az.ctrlKey?+al.datepicker._get(aA,"stepBigMonths"):+al.datepicker._get(aA,"stepMonths")),"M");
break;
case 35:if(az.ctrlKey||az.metaKey){al.datepicker._clearDate(az.target)
}aC=az.ctrlKey||az.metaKey;
break;
case 36:if(az.ctrlKey||az.metaKey){al.datepicker._gotoToday(az.target)
}aC=az.ctrlKey||az.metaKey;
break;
case 37:if(az.ctrlKey||az.metaKey){al.datepicker._adjustDate(az.target,(ay?+1:-1),"D")
}aC=az.ctrlKey||az.metaKey;
if(az.originalEvent.altKey){al.datepicker._adjustDate(az.target,(az.ctrlKey?-al.datepicker._get(aA,"stepBigMonths"):-al.datepicker._get(aA,"stepMonths")),"M")
}break;
case 38:if(az.ctrlKey||az.metaKey){al.datepicker._adjustDate(az.target,-7,"D")
}aC=az.ctrlKey||az.metaKey;
break;
case 39:if(az.ctrlKey||az.metaKey){al.datepicker._adjustDate(az.target,(ay?-1:+1),"D")
}aC=az.ctrlKey||az.metaKey;
if(az.originalEvent.altKey){al.datepicker._adjustDate(az.target,(az.ctrlKey?+al.datepicker._get(aA,"stepBigMonths"):+al.datepicker._get(aA,"stepMonths")),"M")
}break;
case 40:if(az.ctrlKey||az.metaKey){al.datepicker._adjustDate(az.target,+7,"D")
}aC=az.ctrlKey||az.metaKey;
break;
default:aC=false
}}else{if(az.keyCode===36&&az.ctrlKey){al.datepicker._showDatepicker(this)
}else{aC=false
}}if(aC){az.preventDefault();
az.stopPropagation()
}},_doKeyPress:function(ay){var ax,aw,az=al.datepicker._getInst(ay.target);
if(al.datepicker._get(az,"constrainInput")){ax=al.datepicker._possibleChars(al.datepicker._get(az,"dateFormat"));
aw=String.fromCharCode(ay.charCode==null?ay.keyCode:ay.charCode);
return ay.ctrlKey||ay.metaKey||(aw<" "||!ax||ax.indexOf(aw)>-1)
}},_doKeyUp:function(ay){var aw,az=al.datepicker._getInst(ay.target);
if(az.input.val()!==az.lastVal){try{aw=al.datepicker.parseDate(al.datepicker._get(az,"dateFormat"),(az.input?az.input.val():null),al.datepicker._getFormatConfig(az));
if(aw){al.datepicker._setDateFromField(az);
al.datepicker._updateAlternate(az);
al.datepicker._updateDatepicker(az)
}}catch(ax){}}return true
},_showDatepicker:function(ax){ax=ax.target||ax;
if(ax.nodeName.toLowerCase()!=="input"){ax=al("input",ax.parentNode)[0]
}if(al.datepicker._isDisabledDatepicker(ax)||al.datepicker._lastInput===ax){return
}var az,aD,ay,aB,aC,aw,aA;
az=al.datepicker._getInst(ax);
if(al.datepicker._curInst&&al.datepicker._curInst!==az){al.datepicker._curInst.dpDiv.stop(true,true);
if(az&&al.datepicker._datepickerShowing){al.datepicker._hideDatepicker(al.datepicker._curInst.input[0])
}}aD=al.datepicker._get(az,"beforeShow");
ay=aD?aD.apply(ax,[ax,az]):{};
if(ay===false){return
}G(az.settings,ay);
az.lastVal=null;
al.datepicker._lastInput=ax;
al.datepicker._setDateFromField(az);
if(al.datepicker._inDialog){ax.value=""
}if(!al.datepicker._pos){al.datepicker._pos=al.datepicker._findPos(ax);
al.datepicker._pos[1]+=ax.offsetHeight
}aB=false;
al(ax).parents().each(function(){aB|=al(this).css("position")==="fixed";
return !aB
});
aC={left:al.datepicker._pos[0],top:al.datepicker._pos[1]};
al.datepicker._pos=null;
az.dpDiv.empty();
az.dpDiv.css({position:"absolute",display:"block",top:"-1000px"});
al.datepicker._updateDatepicker(az);
aC=al.datepicker._checkOffset(az,aC,aB);
az.dpDiv.css({position:(al.datepicker._inDialog&&al.blockUI?"static":(aB?"fixed":"absolute")),display:"none",left:aC.left+"px",top:aC.top+"px"});
if(!az.inline){aw=al.datepicker._get(az,"showAnim");
aA=al.datepicker._get(az,"duration");
az.dpDiv.css("z-index",ag(al(ax))+1);
al.datepicker._datepickerShowing=true;
if(al.effects&&al.effects.effect[aw]){az.dpDiv.show(aw,al.datepicker._get(az,"showOptions"),aA)
}else{az.dpDiv[aw||"show"](aw?aA:null)
}if(al.datepicker._shouldFocusInput(az)){az.input.trigger("focus")
}al.datepicker._curInst=az
}},_updateDatepicker:function(az){this.maxRows=4;
ar=az;
az.dpDiv.empty().append(this._generateHTML(az));
this._attachHandlers(az);
var aB,aw=this._getNumberOfMonths(az),aA=aw[1],ay=17,ax=az.dpDiv.find("."+this._dayOverClass+" a");
if(ax.length>0){L.apply(ax.get(0))
}az.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width("");
if(aA>1){az.dpDiv.addClass("ui-datepicker-multi-"+aA).css("width",(ay*aA)+"em")
}az.dpDiv[(aw[0]!==1||aw[1]!==1?"add":"remove")+"Class"]("ui-datepicker-multi");
az.dpDiv[(this._get(az,"isRTL")?"add":"remove")+"Class"]("ui-datepicker-rtl");
if(az===al.datepicker._curInst&&al.datepicker._datepickerShowing&&al.datepicker._shouldFocusInput(az)){az.input.trigger("focus")
}if(az.yearshtml){aB=az.yearshtml;
setTimeout(function(){if(aB===az.yearshtml&&az.yearshtml){az.dpDiv.find("select.ui-datepicker-year:first").replaceWith(az.yearshtml)
}aB=az.yearshtml=null
},0)
}},_shouldFocusInput:function(aw){return aw.input&&aw.input.is(":visible")&&!aw.input.is(":disabled")&&!aw.input.is(":focus")
},_checkOffset:function(aB,az,ay){var aA=aB.dpDiv.outerWidth(),aE=aB.dpDiv.outerHeight(),aD=aB.input?aB.input.outerWidth():0,aw=aB.input?aB.input.outerHeight():0,aC=document.documentElement.clientWidth+(ay?0:al(document).scrollLeft()),ax=document.documentElement.clientHeight+(ay?0:al(document).scrollTop());
az.left-=(this._get(aB,"isRTL")?(aA-aD):0);
az.left-=(ay&&az.left===aB.input.offset().left)?al(document).scrollLeft():0;
az.top-=(ay&&az.top===(aB.input.offset().top+aw))?al(document).scrollTop():0;
az.left-=Math.min(az.left,(az.left+aA>aC&&aC>aA)?Math.abs(az.left+aA-aC):0);
az.top-=Math.min(az.top,(az.top+aE>ax&&ax>aE)?Math.abs(aE+aw):0);
return az
},_findPos:function(az){var aw,ay=this._getInst(az),ax=this._get(ay,"isRTL");
while(az&&(az.type==="hidden"||az.nodeType!==1||al.expr.filters.hidden(az))){az=az[ax?"previousSibling":"nextSibling"]
}aw=al(az).offset();
return[aw.left,aw.top]
},_hideDatepicker:function(ay){var ax,aB,aA,aw,az=this._curInst;
if(!az||(ay&&az!==al.data(ay,"datepicker"))){return
}if(this._datepickerShowing){ax=this._get(az,"showAnim");
aB=this._get(az,"duration");
aA=function(){al.datepicker._tidyDialog(az)
};
if(al.effects&&(al.effects.effect[ax]||al.effects[ax])){az.dpDiv.hide(ax,al.datepicker._get(az,"showOptions"),aB,aA)
}else{az.dpDiv[(ax==="slideDown"?"slideUp":(ax==="fadeIn"?"fadeOut":"hide"))]((ax?aB:null),aA)
}if(!ax){aA()
}this._datepickerShowing=false;
aw=this._get(az,"onClose");
if(aw){aw.apply((az.input?az.input[0]:null),[(az.input?az.input.val():""),az])
}this._lastInput=null;
if(this._inDialog){this._dialogInput.css({position:"absolute",left:"0",top:"-100px"});
if(al.blockUI){al.unblockUI();
al("body").append(this.dpDiv)
}}this._inDialog=false
}},_tidyDialog:function(aw){aw.dpDiv.removeClass(this._dialogClass).off(".ui-datepicker-calendar")
},_checkExternalClick:function(ax){if(!al.datepicker._curInst){return
}var aw=al(ax.target),ay=al.datepicker._getInst(aw[0]);
if(((aw[0].id!==al.datepicker._mainDivId&&aw.parents("#"+al.datepicker._mainDivId).length===0&&!aw.hasClass(al.datepicker.markerClassName)&&!aw.closest("."+al.datepicker._triggerClass).length&&al.datepicker._datepickerShowing&&!(al.datepicker._inDialog&&al.blockUI)))||(aw.hasClass(al.datepicker.markerClassName)&&al.datepicker._curInst!==ay)){al.datepicker._hideDatepicker()
}},_adjustDate:function(aA,az,ay){var ax=al(aA),aw=this._getInst(ax[0]);
if(this._isDisabledDatepicker(ax[0])){return
}this._adjustInstDate(aw,az+(ay==="M"?this._get(aw,"showCurrentAtPos"):0),ay);
this._updateDatepicker(aw)
},_gotoToday:function(az){var aw,ay=al(az),ax=this._getInst(ay[0]);
if(this._get(ax,"gotoCurrent")&&ax.currentDay){ax.selectedDay=ax.currentDay;
ax.drawMonth=ax.selectedMonth=ax.currentMonth;
ax.drawYear=ax.selectedYear=ax.currentYear
}else{aw=new Date();
ax.selectedDay=aw.getDate();
ax.drawMonth=ax.selectedMonth=aw.getMonth();
ax.drawYear=ax.selectedYear=aw.getFullYear()
}this._notifyChange(ax);
this._adjustDate(ay)
},_selectMonthYear:function(aA,aw,az){var ay=al(aA),ax=this._getInst(ay[0]);
ax["selected"+(az==="M"?"Month":"Year")]=ax["draw"+(az==="M"?"Month":"Year")]=parseInt(aw.options[aw.selectedIndex].value,10);
this._notifyChange(ax);
this._adjustDate(ay)
},_selectDay:function(aB,az,aw,aA){var ax,ay=al(aB);
if(al(aA).hasClass(this._unselectableClass)||this._isDisabledDatepicker(ay[0])){return
}ax=this._getInst(ay[0]);
ax.selectedDay=ax.currentDay=al("a",aA).html();
ax.selectedMonth=ax.currentMonth=az;
ax.selectedYear=ax.currentYear=aw;
this._selectDate(aB,this._formatDate(ax,ax.currentDay,ax.currentMonth,ax.currentYear))
},_clearDate:function(ax){var aw=al(ax);
this._selectDate(aw,"")
},_selectDate:function(aA,aw){var ax,az=al(aA),ay=this._getInst(az[0]);
aw=(aw!=null?aw:this._formatDate(ay));
if(ay.input){ay.input.val(aw)
}this._updateAlternate(ay);
ax=this._get(ay,"onSelect");
if(ax){ax.apply((ay.input?ay.input[0]:null),[aw,ay])
}else{if(ay.input){ay.input.trigger("change")
}}if(ay.inline){this._updateDatepicker(ay)
}else{this._hideDatepicker();
this._lastInput=ay.input[0];
if(typeof(ay.input[0])!=="object"){ay.input.trigger("focus")
}this._lastInput=null
}},_updateAlternate:function(aA){var az,ay,aw,ax=this._get(aA,"altField");
if(ax){az=this._get(aA,"altFormat")||this._get(aA,"dateFormat");
ay=this._getDate(aA);
aw=this.formatDate(az,ay,this._getFormatConfig(aA));
al(ax).val(aw)
}},noWeekends:function(ax){var aw=ax.getDay();
return[(aw>0&&aw<6),""]
},iso8601Week:function(aw){var ax,ay=new Date(aw.getTime());
ay.setDate(ay.getDate()+4-(ay.getDay()||7));
ax=ay.getTime();
ay.setMonth(0);
ay.setDate(1);
return Math.floor(Math.round((ax-ay)/86400000)/7)+1
},parseDate:function(aM,aH,aO){if(aM==null||aH==null){throw"Invalid arguments"
}aH=(typeof aH==="object"?aH.toString():aH+"");
if(aH===""){return null
}var az,aJ,ax,aN=0,aC=(aO?aO.shortYearCutoff:null)||this._defaults.shortYearCutoff,ay=(typeof aC!=="string"?aC:new Date().getFullYear()%100+parseInt(aC,10)),aF=(aO?aO.dayNamesShort:null)||this._defaults.dayNamesShort,aQ=(aO?aO.dayNames:null)||this._defaults.dayNames,aw=(aO?aO.monthNamesShort:null)||this._defaults.monthNamesShort,aA=(aO?aO.monthNames:null)||this._defaults.monthNames,aB=-1,aR=-1,aL=-1,aE=-1,aK=false,aP,aG=function(aT){var aU=(az+1<aM.length&&aM.charAt(az+1)===aT);
if(aU){az++
}return aU
},aS=function(aV){var aT=aG(aV),aW=(aV==="@"?14:(aV==="!"?20:(aV==="y"&&aT?4:(aV==="o"?3:2)))),aY=(aV==="y"?aW:1),aX=new RegExp("^\\d{"+aY+","+aW+"}"),aU=aH.substring(aN).match(aX);
if(!aU){throw"Missing number at position "+aN
}aN+=aU[0].length;
return parseInt(aU[0],10)
},aD=function(aU,aV,aX){var aT=-1,aW=al.map(aG(aU)?aX:aV,function(aZ,aY){return[[aY,aZ]]
}).sort(function(aZ,aY){return -(aZ[1].length-aY[1].length)
});
al.each(aW,function(aZ,a0){var aY=a0[1];
if(aH.substr(aN,aY.length).toLowerCase()===aY.toLowerCase()){aT=a0[0];
aN+=aY.length;
return false
}});
if(aT!==-1){return aT+1
}else{throw"Unknown name at position "+aN
}},aI=function(){if(aH.charAt(aN)!==aM.charAt(az)){throw"Unexpected literal at position "+aN
}aN++
};
for(az=0;
az<aM.length;
az++){if(aK){if(aM.charAt(az)==="'"&&!aG("'")){aK=false
}else{aI()
}}else{switch(aM.charAt(az)){case"d":aL=aS("d");
break;
case"D":aD("D",aF,aQ);
break;
case"o":aE=aS("o");
break;
case"m":aR=aS("m");
break;
case"M":aR=aD("M",aw,aA);
break;
case"y":aB=aS("y");
break;
case"@":aP=new Date(aS("@"));
aB=aP.getFullYear();
aR=aP.getMonth()+1;
aL=aP.getDate();
break;
case"!":aP=new Date((aS("!")-this._ticksTo1970)/10000);
aB=aP.getFullYear();
aR=aP.getMonth()+1;
aL=aP.getDate();
break;
case"'":if(aG("'")){aI()
}else{aK=true
}break;
default:aI()
}}}if(aN<aH.length){ax=aH.substr(aN);
if(!/^\s+/.test(ax)){throw"Extra/unparsed characters found in date: "+ax
}}if(aB===-1){aB=new Date().getFullYear()
}else{if(aB<100){aB+=new Date().getFullYear()-new Date().getFullYear()%100+(aB<=ay?0:-100)
}}if(aE>-1){aR=1;
aL=aE;
do{aJ=this._getDaysInMonth(aB,aR-1);
if(aL<=aJ){break
}aR++;
aL-=aJ
}while(true)
}aP=this._daylightSavingAdjust(new Date(aB,aR-1,aL));
if(aP.getFullYear()!==aB||aP.getMonth()+1!==aR||aP.getDate()!==aL){throw"Invalid date"
}return aP
},ATOM:"yy-mm-dd",COOKIE:"D, dd M yy",ISO_8601:"yy-mm-dd",RFC_822:"D, d M y",RFC_850:"DD, dd-M-y",RFC_1036:"D, d M y",RFC_1123:"D, d M yy",RFC_2822:"D, d M yy",RSS:"D, d M y",TICKS:"!",TIMESTAMP:"@",W3C:"yy-mm-dd",_ticksTo1970:(((1970-1)*365+Math.floor(1970/4)-Math.floor(1970/100)+Math.floor(1970/400))*24*60*60*10000000),formatDate:function(aF,az,aA){if(!az){return""
}var aH,aI=(aA?aA.dayNamesShort:null)||this._defaults.dayNamesShort,ax=(aA?aA.dayNames:null)||this._defaults.dayNames,aD=(aA?aA.monthNamesShort:null)||this._defaults.monthNamesShort,aB=(aA?aA.monthNames:null)||this._defaults.monthNames,aG=function(aJ){var aK=(aH+1<aF.length&&aF.charAt(aH+1)===aJ);
if(aK){aH++
}return aK
},aw=function(aL,aM,aJ){var aK=""+aM;
if(aG(aL)){while(aK.length<aJ){aK="0"+aK
}}return aK
},aC=function(aJ,aL,aK,aM){return(aG(aJ)?aM[aL]:aK[aL])
},ay="",aE=false;
if(az){for(aH=0;
aH<aF.length;
aH++){if(aE){if(aF.charAt(aH)==="'"&&!aG("'")){aE=false
}else{ay+=aF.charAt(aH)
}}else{switch(aF.charAt(aH)){case"d":ay+=aw("d",az.getDate(),2);
break;
case"D":ay+=aC("D",az.getDay(),aI,ax);
break;
case"o":ay+=aw("o",Math.round((new Date(az.getFullYear(),az.getMonth(),az.getDate()).getTime()-new Date(az.getFullYear(),0,0).getTime())/86400000),3);
break;
case"m":ay+=aw("m",az.getMonth()+1,2);
break;
case"M":ay+=aC("M",az.getMonth(),aD,aB);
break;
case"y":ay+=(aG("y")?az.getFullYear():(az.getFullYear()%100<10?"0":"")+az.getFullYear()%100);
break;
case"@":ay+=az.getTime();
break;
case"!":ay+=az.getTime()*10000+this._ticksTo1970;
break;
case"'":if(aG("'")){ay+="'"
}else{aE=true
}break;
default:ay+=aF.charAt(aH)
}}}}return ay
},_possibleChars:function(aA){var az,ay="",ax=false,aw=function(aB){var aC=(az+1<aA.length&&aA.charAt(az+1)===aB);
if(aC){az++
}return aC
};
for(az=0;
az<aA.length;
az++){if(ax){if(aA.charAt(az)==="'"&&!aw("'")){ax=false
}else{ay+=aA.charAt(az)
}}else{switch(aA.charAt(az)){case"d":case"m":case"y":case"@":ay+="0123456789";
break;
case"D":case"M":return null;
case"'":if(aw("'")){ay+="'"
}else{ax=true
}break;
default:ay+=aA.charAt(az)
}}}return ay
},_get:function(ax,aw){return ax.settings[aw]!==undefined?ax.settings[aw]:this._defaults[aw]
},_setDateFromField:function(aB,ay){if(aB.input.val()===aB.lastVal){return
}var aw=this._get(aB,"dateFormat"),aD=aB.lastVal=aB.input?aB.input.val():null,aC=this._getDefaultDate(aB),ax=aC,az=this._getFormatConfig(aB);
try{ax=this.parseDate(aw,aD,az)||aC
}catch(aA){aD=(ay?"":aD)
}aB.selectedDay=ax.getDate();
aB.drawMonth=aB.selectedMonth=ax.getMonth();
aB.drawYear=aB.selectedYear=ax.getFullYear();
aB.currentDay=(aD?ax.getDate():0);
aB.currentMonth=(aD?ax.getMonth():0);
aB.currentYear=(aD?ax.getFullYear():0);
this._adjustInstDate(aB)
},_getDefaultDate:function(aw){return this._restrictMinMax(aw,this._determineDate(aw,this._get(aw,"defaultDate"),new Date()))
},_determineDate:function(aA,ax,aB){var az=function(aD){var aC=new Date();
aC.setDate(aC.getDate()+aD);
return aC
},ay=function(aJ){try{return al.datepicker.parseDate(al.datepicker._get(aA,"dateFormat"),aJ,al.datepicker._getFormatConfig(aA))
}catch(aI){}var aD=(aJ.toLowerCase().match(/^c/)?al.datepicker._getDate(aA):null)||new Date(),aE=aD.getFullYear(),aH=aD.getMonth(),aC=aD.getDate(),aG=/([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,aF=aG.exec(aJ);
while(aF){switch(aF[2]||"d"){case"d":case"D":aC+=parseInt(aF[1],10);
break;
case"w":case"W":aC+=parseInt(aF[1],10)*7;
break;
case"m":case"M":aH+=parseInt(aF[1],10);
aC=Math.min(aC,al.datepicker._getDaysInMonth(aE,aH));
break;
case"y":case"Y":aE+=parseInt(aF[1],10);
aC=Math.min(aC,al.datepicker._getDaysInMonth(aE,aH));
break
}aF=aG.exec(aJ)
}return new Date(aE,aH,aC)
},aw=(ax==null||ax===""?aB:(typeof ax==="string"?ay(ax):(typeof ax==="number"?(isNaN(ax)?aB:az(ax)):new Date(ax.getTime()))));
aw=(aw&&aw.toString()==="Invalid Date"?aB:aw);
if(aw){aw.setHours(0);
aw.setMinutes(0);
aw.setSeconds(0);
aw.setMilliseconds(0)
}return this._daylightSavingAdjust(aw)
},_daylightSavingAdjust:function(aw){if(!aw){return null
}aw.setHours(aw.getHours()>12?aw.getHours()+2:0);
return aw
},_setDate:function(aC,az,aB){var aw=!az,ay=aC.selectedMonth,aA=aC.selectedYear,ax=this._restrictMinMax(aC,this._determineDate(aC,az,new Date()));
aC.selectedDay=aC.currentDay=ax.getDate();
aC.drawMonth=aC.selectedMonth=aC.currentMonth=ax.getMonth();
aC.drawYear=aC.selectedYear=aC.currentYear=ax.getFullYear();
if((ay!==aC.selectedMonth||aA!==aC.selectedYear)&&!aB){this._notifyChange(aC)
}this._adjustInstDate(aC);
if(aC.input){aC.input.val(aw?"":this._formatDate(aC))
}},_getDate:function(ax){var aw=(!ax.currentYear||(ax.input&&ax.input.val()==="")?null:this._daylightSavingAdjust(new Date(ax.currentYear,ax.currentMonth,ax.currentDay)));
return aw
},_attachHandlers:function(ax){var aw=this._get(ax,"stepMonths"),ay="#"+ax.id.replace(/\\\\/g,"\\");
ax.dpDiv.find("[data-handler]").map(function(){var az={prev:function(){al.datepicker._adjustDate(ay,-aw,"M")
},next:function(){al.datepicker._adjustDate(ay,+aw,"M")
},hide:function(){al.datepicker._hideDatepicker()
},today:function(){al.datepicker._gotoToday(ay)
},selectDay:function(){al.datepicker._selectDay(ay,+this.getAttribute("data-month"),+this.getAttribute("data-year"),this);
return false
},selectMonth:function(){al.datepicker._selectMonthYear(ay,this,"M");
return false
},selectYear:function(){al.datepicker._selectMonthYear(ay,this,"Y");
return false
}};
al(this).on(this.getAttribute("data-event"),az[this.getAttribute("data-handler")])
})
},_generateHTML:function(bc){var aP,aO,a7,aZ,aA,bg,ba,a3,bj,aX,bn,aH,aJ,aI,ax,bf,aF,aS,bi,a5,bo,aR,aW,aG,aB,a8,a1,a4,a2,aE,aU,aK,bb,be,az,bh,bl,a0,aL,bd=new Date(),aQ=this._daylightSavingAdjust(new Date(bd.getFullYear(),bd.getMonth(),bd.getDate())),bk=this._get(bc,"isRTL"),bm=this._get(bc,"showButtonPanel"),a6=this._get(bc,"hideIfNoPrevNext"),aV=this._get(bc,"navigationAsDateFormat"),aM=this._getNumberOfMonths(bc),aD=this._get(bc,"showCurrentAtPos"),aY=this._get(bc,"stepMonths"),aT=(aM[0]!==1||aM[1]!==1),ay=this._daylightSavingAdjust((!bc.currentDay?new Date(9999,9,9):new Date(bc.currentYear,bc.currentMonth,bc.currentDay))),aC=this._getMinMaxDate(bc,"min"),aN=this._getMinMaxDate(bc,"max"),aw=bc.drawMonth-aD,a9=bc.drawYear;
if(aw<0){aw+=12;
a9--
}if(aN){aP=this._daylightSavingAdjust(new Date(aN.getFullYear(),aN.getMonth()-(aM[0]*aM[1])+1,aN.getDate()));
aP=(aC&&aP<aC?aC:aP);
while(this._daylightSavingAdjust(new Date(a9,aw,1))>aP){aw--;
if(aw<0){aw=11;
a9--
}}}bc.drawMonth=aw;
bc.drawYear=a9;
aO=this._get(bc,"prevText");
aO=(!aV?aO:this.formatDate(aO,this._daylightSavingAdjust(new Date(a9,aw-aY,1)),this._getFormatConfig(bc)));
a7=(this._canAdjustMonth(bc,-1,a9,aw)?"<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='"+aO+"'><span class='ui-icon ui-icon-circle-triangle-"+(bk?"e":"w")+"'>"+aO+"</span></a>":(a6?"":"<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='"+aO+"'><span class='ui-icon ui-icon-circle-triangle-"+(bk?"e":"w")+"'>"+aO+"</span></a>"));
aZ=this._get(bc,"nextText");
aZ=(!aV?aZ:this.formatDate(aZ,this._daylightSavingAdjust(new Date(a9,aw+aY,1)),this._getFormatConfig(bc)));
aA=(this._canAdjustMonth(bc,+1,a9,aw)?"<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='"+aZ+"'><span class='ui-icon ui-icon-circle-triangle-"+(bk?"w":"e")+"'>"+aZ+"</span></a>":(a6?"":"<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='"+aZ+"'><span class='ui-icon ui-icon-circle-triangle-"+(bk?"w":"e")+"'>"+aZ+"</span></a>"));
bg=this._get(bc,"currentText");
ba=(this._get(bc,"gotoCurrent")&&bc.currentDay?ay:aQ);
bg=(!aV?bg:this.formatDate(bg,ba,this._getFormatConfig(bc)));
a3=(!bc.inline?"<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>"+this._get(bc,"closeText")+"</button>":"");
bj=(bm)?"<div class='ui-datepicker-buttonpane ui-widget-content'>"+(bk?a3:"")+(this._isInRange(bc,ba)?"<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>"+bg+"</button>":"")+(bk?"":a3)+"</div>":"";
aX=parseInt(this._get(bc,"firstDay"),10);
aX=(isNaN(aX)?0:aX);
bn=this._get(bc,"showWeek");
aH=this._get(bc,"dayNames");
aJ=this._get(bc,"dayNamesMin");
aI=this._get(bc,"monthNames");
ax=this._get(bc,"monthNamesShort");
bf=this._get(bc,"beforeShowDay");
aF=this._get(bc,"showOtherMonths");
aS=this._get(bc,"selectOtherMonths");
bi=this._getDefaultDate(bc);
a5="";
for(aR=0;
aR<aM[0];
aR++){aW="";
this.maxRows=4;
for(aG=0;
aG<aM[1];
aG++){aB=this._daylightSavingAdjust(new Date(a9,aw,bc.selectedDay));
a8=" ui-corner-all";
a1="";
if(aT){a1+="<div class='ui-datepicker-group";
if(aM[1]>1){switch(aG){case 0:a1+=" ui-datepicker-group-first";
a8=" ui-corner-"+(bk?"right":"left");
break;
case aM[1]-1:a1+=" ui-datepicker-group-last";
a8=" ui-corner-"+(bk?"left":"right");
break;
default:a1+=" ui-datepicker-group-middle";
a8="";
break
}}a1+="'>"
}a1+="<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix"+a8+"'>"+(/all|left/.test(a8)&&aR===0?(bk?aA:a7):"")+(/all|right/.test(a8)&&aR===0?(bk?a7:aA):"")+this._generateMonthYearHeader(bc,aw,a9,aC,aN,aR>0||aG>0,aI,ax)+"</div><table class='ui-datepicker-calendar'><thead><tr>";
a4=(bn?"<th class='ui-datepicker-week-col'>"+this._get(bc,"weekHeader")+"</th>":"");
for(bo=0;
bo<7;
bo++){a2=(bo+aX)%7;
a4+="<th scope='col'"+((bo+aX+6)%7>=5?" class='ui-datepicker-week-end'":"")+"><span title='"+aH[a2]+"'>"+aJ[a2]+"</span></th>"
}a1+=a4+"</tr></thead><tbody>";
aE=this._getDaysInMonth(a9,aw);
if(a9===bc.selectedYear&&aw===bc.selectedMonth){bc.selectedDay=Math.min(bc.selectedDay,aE)
}aU=(this._getFirstDayOfMonth(a9,aw)-aX+7)%7;
aK=Math.ceil((aU+aE)/7);
bb=(aT?this.maxRows>aK?this.maxRows:aK:aK);
this.maxRows=bb;
be=this._daylightSavingAdjust(new Date(a9,aw,1-aU));
for(az=0;
az<bb;
az++){a1+="<tr>";
bh=(!bn?"":"<td class='ui-datepicker-week-col'>"+this._get(bc,"calculateWeek")(be)+"</td>");
for(bo=0;
bo<7;
bo++){bl=(bf?bf.apply((bc.input?bc.input[0]:null),[be]):[true,""]);
a0=(be.getMonth()!==aw);
aL=(a0&&!aS)||!bl[0]||(aC&&be<aC)||(aN&&be>aN);
bh+="<td class='"+((bo+aX+6)%7>=5?" ui-datepicker-week-end":"")+(a0?" ui-datepicker-other-month":"")+((be.getTime()===aB.getTime()&&aw===bc.selectedMonth&&bc._keyEvent)||(bi.getTime()===be.getTime()&&bi.getTime()===aB.getTime())?" "+this._dayOverClass:"")+(aL?" "+this._unselectableClass+" ui-state-disabled":"")+(a0&&!aF?"":" "+bl[1]+(be.getTime()===ay.getTime()?" "+this._currentClass:"")+(be.getTime()===aQ.getTime()?" ui-datepicker-today":""))+"'"+((!a0||aF)&&bl[2]?" title='"+bl[2].replace(/'/g,"&#39;")+"'":"")+(aL?"":" data-handler='selectDay' data-event='click' data-month='"+be.getMonth()+"' data-year='"+be.getFullYear()+"'")+">"+(a0&&!aF?"&#xa0;":(aL?"<span class='ui-state-default'>"+be.getDate()+"</span>":"<a class='ui-state-default"+(be.getTime()===aQ.getTime()?" ui-state-highlight":"")+(be.getTime()===ay.getTime()?" ui-state-active":"")+(a0?" ui-priority-secondary":"")+"' href='#'>"+be.getDate()+"</a>"))+"</td>";
be.setDate(be.getDate()+1);
be=this._daylightSavingAdjust(be)
}a1+=bh+"</tr>"
}aw++;
if(aw>11){aw=0;
a9++
}a1+="</tbody></table>"+(aT?"</div>"+((aM[0]>0&&aG===aM[1]-1)?"<div class='ui-datepicker-row-break'></div>":""):"");
aW+=a1
}a5+=aW
}a5+=bj;
bc._keyEvent=false;
return a5
},_generateMonthYearHeader:function(aA,ay,aI,aC,aG,aJ,aE,aw){var aN,ax,aO,aL,aB,aK,aH,aD,az=this._get(aA,"changeMonth"),aP=this._get(aA,"changeYear"),aQ=this._get(aA,"showMonthAfterYear"),aF="<div class='ui-datepicker-title'>",aM="";
if(aJ||!az){aM+="<span class='ui-datepicker-month'>"+aE[ay]+"</span>"
}else{aN=(aC&&aC.getFullYear()===aI);
ax=(aG&&aG.getFullYear()===aI);
aM+="<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>";
for(aO=0;
aO<12;
aO++){if((!aN||aO>=aC.getMonth())&&(!ax||aO<=aG.getMonth())){aM+="<option value='"+aO+"'"+(aO===ay?" selected='selected'":"")+">"+aw[aO]+"</option>"
}}aM+="</select>"
}if(!aQ){aF+=aM+(aJ||!(az&&aP)?"&#xa0;":"")
}if(!aA.yearshtml){aA.yearshtml="";
if(aJ||!aP){aF+="<span class='ui-datepicker-year'>"+aI+"</span>"
}else{aL=this._get(aA,"yearRange").split(":");
aB=new Date().getFullYear();
aK=function(aS){var aR=(aS.match(/c[+\-].*/)?aI+parseInt(aS.substring(1),10):(aS.match(/[+\-].*/)?aB+parseInt(aS,10):parseInt(aS,10)));
return(isNaN(aR)?aB:aR)
};
aH=aK(aL[0]);
aD=Math.max(aH,aK(aL[1]||""));
aH=(aC?Math.max(aH,aC.getFullYear()):aH);
aD=(aG?Math.min(aD,aG.getFullYear()):aD);
aA.yearshtml+="<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>";
for(;
aH<=aD;
aH++){aA.yearshtml+="<option value='"+aH+"'"+(aH===aI?" selected='selected'":"")+">"+aH+"</option>"
}aA.yearshtml+="</select>";
aF+=aA.yearshtml;
aA.yearshtml=null
}}aF+=this._get(aA,"yearSuffix");
if(aQ){aF+=(aJ||!(az&&aP)?"&#xa0;":"")+aM
}aF+="</div>";
return aF
},_adjustInstDate:function(az,aC,aB){var ay=az.selectedYear+(aB==="Y"?aC:0),aA=az.selectedMonth+(aB==="M"?aC:0),aw=Math.min(az.selectedDay,this._getDaysInMonth(ay,aA))+(aB==="D"?aC:0),ax=this._restrictMinMax(az,this._daylightSavingAdjust(new Date(ay,aA,aw)));
az.selectedDay=ax.getDate();
az.drawMonth=az.selectedMonth=ax.getMonth();
az.drawYear=az.selectedYear=ax.getFullYear();
if(aB==="M"||aB==="Y"){this._notifyChange(az)
}},_restrictMinMax:function(az,ax){var ay=this._getMinMaxDate(az,"min"),aA=this._getMinMaxDate(az,"max"),aw=(ay&&ax<ay?ay:ax);
return(aA&&aw>aA?aA:aw)
},_notifyChange:function(ax){var aw=this._get(ax,"onChangeMonthYear");
if(aw){aw.apply((ax.input?ax.input[0]:null),[ax.selectedYear,ax.selectedMonth+1,ax])
}},_getNumberOfMonths:function(ax){var aw=this._get(ax,"numberOfMonths");
return(aw==null?[1,1]:(typeof aw==="number"?[1,aw]:aw))
},_getMinMaxDate:function(ax,aw){return this._determineDate(ax,this._get(ax,aw+"Date"),null)
},_getDaysInMonth:function(aw,ax){return 32-this._daylightSavingAdjust(new Date(aw,ax,32)).getDate()
},_getFirstDayOfMonth:function(aw,ax){return new Date(aw,ax,1).getDay()
},_canAdjustMonth:function(az,aB,ay,aA){var aw=this._getNumberOfMonths(az),ax=this._daylightSavingAdjust(new Date(ay,aA+(aB<0?aB:aw[0]*aw[1]),1));
if(aB<0){ax.setDate(this._getDaysInMonth(ax.getFullYear(),ax.getMonth()))
}return this._isInRange(az,ax)
},_isInRange:function(aA,ay){var ax,aD,az=this._getMinMaxDate(aA,"min"),aw=this._getMinMaxDate(aA,"max"),aE=null,aB=null,aC=this._get(aA,"yearRange");
if(aC){ax=aC.split(":");
aD=new Date().getFullYear();
aE=parseInt(ax[0],10);
aB=parseInt(ax[1],10);
if(ax[0].match(/[+\-].*/)){aE+=aD
}if(ax[1].match(/[+\-].*/)){aB+=aD
}}return((!az||ay.getTime()>=az.getTime())&&(!aw||ay.getTime()<=aw.getTime())&&(!aE||ay.getFullYear()>=aE)&&(!aB||ay.getFullYear()<=aB))
},_getFormatConfig:function(aw){var ax=this._get(aw,"shortYearCutoff");
ax=(typeof ax!=="string"?ax:new Date().getFullYear()%100+parseInt(ax,10));
return{shortYearCutoff:ax,dayNamesShort:this._get(aw,"dayNamesShort"),dayNames:this._get(aw,"dayNames"),monthNamesShort:this._get(aw,"monthNamesShort"),monthNames:this._get(aw,"monthNames")}
},_formatDate:function(az,aw,aA,ay){if(!aw){az.currentDay=az.selectedDay;
az.currentMonth=az.selectedMonth;
az.currentYear=az.selectedYear
}var ax=(aw?(typeof aw==="object"?aw:this._daylightSavingAdjust(new Date(ay,aA,aw))):this._daylightSavingAdjust(new Date(az.currentYear,az.currentMonth,az.currentDay)));
return this.formatDate(this._get(az,"dateFormat"),ax,this._getFormatConfig(az))
}});
function Y(ax){var aw="button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
return ax.on("mouseout",aw,function(){al(this).removeClass("ui-state-hover");
if(this.className.indexOf("ui-datepicker-prev")!==-1){al(this).removeClass("ui-datepicker-prev-hover")
}if(this.className.indexOf("ui-datepicker-next")!==-1){al(this).removeClass("ui-datepicker-next-hover")
}}).on("mouseover",aw,L)
}function L(){if(!al.datepicker._isDisabledDatepicker(ar.inline?ar.dpDiv.parent()[0]:ar.input[0])){al(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover");
al(this).addClass("ui-state-hover");
if(this.className.indexOf("ui-datepicker-prev")!==-1){al(this).addClass("ui-datepicker-prev-hover")
}if(this.className.indexOf("ui-datepicker-next")!==-1){al(this).addClass("ui-datepicker-next-hover")
}}}function G(ay,ax){al.extend(ay,ax);
for(var aw in ax){if(ax[aw]==null){ay[aw]=ax[aw]
}}return ay
}al.fn.datepicker=function(ax){if(!this.length){return this
}if(!al.datepicker.initialized){al(document).on("mousedown",al.datepicker._checkExternalClick);
al.datepicker.initialized=true
}if(al("#"+al.datepicker._mainDivId).length===0){al("body").append(al.datepicker.dpDiv)
}var aw=Array.prototype.slice.call(arguments,1);
if(typeof ax==="string"&&(ax==="isDisabled"||ax==="getDate"||ax==="widget")){return al.datepicker["_"+ax+"Datepicker"].apply(al.datepicker,[this[0]].concat(aw))
}if(ax==="option"&&arguments.length===2&&typeof arguments[1]==="string"){return al.datepicker["_"+ax+"Datepicker"].apply(al.datepicker,[this[0]].concat(aw))
}return this.each(function(){typeof ax==="string"?al.datepicker["_"+ax+"Datepicker"].apply(al.datepicker,[this].concat(aw)):al.datepicker._attachDatepicker(this,ax)
})
};
al.datepicker=new Q();
al.datepicker.initialized=false;
al.datepicker.uuid=new Date().getTime();
al.datepicker.version="1.12.1";
var k=al.datepicker;
var M=al.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase());
/*!
 * jQuery UI Mouse 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
;
var ac=false;
al(document).on("mouseup",function(){ac=false
});
var a=al.widget("ui.mouse",{version:"1.12.1",options:{cancel:"input, textarea, button, select, option",distance:1,delay:0},_mouseInit:function(){var aw=this;
this.element.on("mousedown."+this.widgetName,function(ax){return aw._mouseDown(ax)
}).on("click."+this.widgetName,function(ax){if(true===al.data(ax.target,aw.widgetName+".preventClickEvent")){al.removeData(ax.target,aw.widgetName+".preventClickEvent");
ax.stopImmediatePropagation();
return false
}});
this.started=false
},_mouseDestroy:function(){this.element.off("."+this.widgetName);
if(this._mouseMoveDelegate){this.document.off("mousemove."+this.widgetName,this._mouseMoveDelegate).off("mouseup."+this.widgetName,this._mouseUpDelegate)
}},_mouseDown:function(ay){if(ac){return
}this._mouseMoved=false;
(this._mouseStarted&&this._mouseUp(ay));
this._mouseDownEvent=ay;
var ax=this,az=(ay.which===1),aw=(typeof this.options.cancel==="string"&&ay.target.nodeName?al(ay.target).closest(this.options.cancel).length:false);
if(!az||aw||!this._mouseCapture(ay)){return true
}this.mouseDelayMet=!this.options.delay;
if(!this.mouseDelayMet){this._mouseDelayTimer=setTimeout(function(){ax.mouseDelayMet=true
},this.options.delay)
}if(this._mouseDistanceMet(ay)&&this._mouseDelayMet(ay)){this._mouseStarted=(this._mouseStart(ay)!==false);
if(!this._mouseStarted){ay.preventDefault();
return true
}}if(true===al.data(ay.target,this.widgetName+".preventClickEvent")){al.removeData(ay.target,this.widgetName+".preventClickEvent")
}this._mouseMoveDelegate=function(aA){return ax._mouseMove(aA)
};
this._mouseUpDelegate=function(aA){return ax._mouseUp(aA)
};
this.document.on("mousemove."+this.widgetName,this._mouseMoveDelegate).on("mouseup."+this.widgetName,this._mouseUpDelegate);
ay.preventDefault();
ac=true;
return true
},_mouseMove:function(aw){if(this._mouseMoved){if(al.ui.ie&&(!document.documentMode||document.documentMode<9)&&!aw.button){return this._mouseUp(aw)
}else{if(!aw.which){if(aw.originalEvent.altKey||aw.originalEvent.ctrlKey||aw.originalEvent.metaKey||aw.originalEvent.shiftKey){this.ignoreMissingWhich=true
}else{if(!this.ignoreMissingWhich){return this._mouseUp(aw)
}}}}}if(aw.which||aw.button){this._mouseMoved=true
}if(this._mouseStarted){this._mouseDrag(aw);
return aw.preventDefault()
}if(this._mouseDistanceMet(aw)&&this._mouseDelayMet(aw)){this._mouseStarted=(this._mouseStart(this._mouseDownEvent,aw)!==false);
(this._mouseStarted?this._mouseDrag(aw):this._mouseUp(aw))
}return !this._mouseStarted
},_mouseUp:function(aw){this.document.off("mousemove."+this.widgetName,this._mouseMoveDelegate).off("mouseup."+this.widgetName,this._mouseUpDelegate);
if(this._mouseStarted){this._mouseStarted=false;
if(aw.target===this._mouseDownEvent.target){al.data(aw.target,this.widgetName+".preventClickEvent",true)
}this._mouseStop(aw)
}if(this._mouseDelayTimer){clearTimeout(this._mouseDelayTimer);
delete this._mouseDelayTimer
}this.ignoreMissingWhich=false;
ac=false;
aw.preventDefault()
},_mouseDistanceMet:function(aw){return(Math.max(Math.abs(this._mouseDownEvent.pageX-aw.pageX),Math.abs(this._mouseDownEvent.pageY-aw.pageY))>=this.options.distance)
},_mouseDelayMet:function(){return this.mouseDelayMet
},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return true
}});
var H=al.ui.plugin={add:function(ax,ay,aA){var aw,az=al.ui[ax].prototype;
for(aw in aA){az.plugins[aw]=az.plugins[aw]||[];
az.plugins[aw].push([ay,aA[aw]])
}},call:function(aw,az,ay,ax){var aA,aB=aw.plugins[az];
if(!aB){return
}if(!ax&&(!aw.element[0].parentNode||aw.element[0].parentNode.nodeType===11)){return
}for(aA=0;
aA<aB.length;
aA++){if(aw.options[aB[aA][0]]){aB[aA][1].apply(aw.element,ay)
}}}};
var c=al.ui.safeBlur=function(aw){if(aw&&aw.nodeName.toLowerCase()!=="body"){al(aw).trigger("blur")
}};
/*!
 * jQuery UI Draggable 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
;
al.widget("ui.draggable",al.ui.mouse,{version:"1.12.1",widgetEventPrefix:"drag",options:{addClasses:true,appendTo:"parent",axis:false,connectToSortable:false,containment:false,cursor:"auto",cursorAt:false,grid:false,handle:false,helper:"original",iframeFix:false,opacity:false,refreshPositions:false,revert:false,revertDuration:500,scope:"default",scroll:true,scrollSensitivity:20,scrollSpeed:20,snap:false,snapMode:"both",snapTolerance:20,stack:false,zIndex:false,drag:null,start:null,stop:null},_create:function(){if(this.options.helper==="original"){this._setPositionRelative()
}if(this.options.addClasses){this._addClass("ui-draggable")
}this._setHandleClassName();
this._mouseInit()
},_setOption:function(aw,ax){this._super(aw,ax);
if(aw==="handle"){this._removeHandleClassName();
this._setHandleClassName()
}},_destroy:function(){if((this.helper||this.element).is(".ui-draggable-dragging")){this.destroyOnClear=true;
return
}this._removeHandleClassName();
this._mouseDestroy()
},_mouseCapture:function(aw){var ax=this.options;
if(this.helper||ax.disabled||al(aw.target).closest(".ui-resizable-handle").length>0){return false
}this.handle=this._getHandle(aw);
if(!this.handle){return false
}this._blurActiveElement(aw);
this._blockFrames(ax.iframeFix===true?"iframe":ax.iframeFix);
return true
},_blockFrames:function(aw){this.iframeBlocks=this.document.find(aw).map(function(){var ax=al(this);
return al("<div>").css("position","absolute").appendTo(ax.parent()).outerWidth(ax.outerWidth()).outerHeight(ax.outerHeight()).offset(ax.offset())[0]
})
},_unblockFrames:function(){if(this.iframeBlocks){this.iframeBlocks.remove();
delete this.iframeBlocks
}},_blurActiveElement:function(ax){var aw=al.ui.safeActiveElement(this.document[0]),ay=al(ax.target);
if(ay.closest(aw).length){return
}al.ui.safeBlur(aw)
},_mouseStart:function(aw){var ax=this.options;
this.helper=this._createHelper(aw);
this._addClass(this.helper,"ui-draggable-dragging");
this._cacheHelperProportions();
if(al.ui.ddmanager){al.ui.ddmanager.current=this
}this._cacheMargins();
this.cssPosition=this.helper.css("position");
this.scrollParent=this.helper.scrollParent(true);
this.offsetParent=this.helper.offsetParent();
this.hasFixedAncestor=this.helper.parents().filter(function(){return al(this).css("position")==="fixed"
}).length>0;
this.positionAbs=this.element.offset();
this._refreshOffsets(aw);
this.originalPosition=this.position=this._generatePosition(aw,false);
this.originalPageX=aw.pageX;
this.originalPageY=aw.pageY;
(ax.cursorAt&&this._adjustOffsetFromHelper(ax.cursorAt));
this._setContainment();
if(this._trigger("start",aw)===false){this._clear();
return false
}this._cacheHelperProportions();
if(al.ui.ddmanager&&!ax.dropBehaviour){al.ui.ddmanager.prepareOffsets(this,aw)
}this._mouseDrag(aw,true);
if(al.ui.ddmanager){al.ui.ddmanager.dragStart(this,aw)
}return true
},_refreshOffsets:function(aw){this.offset={top:this.positionAbs.top-this.margins.top,left:this.positionAbs.left-this.margins.left,scroll:false,parent:this._getParentOffset(),relative:this._getRelativeOffset()};
this.offset.click={left:aw.pageX-this.offset.left,top:aw.pageY-this.offset.top}
},_mouseDrag:function(aw,ay){if(this.hasFixedAncestor){this.offset.parent=this._getParentOffset()
}this.position=this._generatePosition(aw,true);
this.positionAbs=this._convertPositionTo("absolute");
if(!ay){var ax=this._uiHash();
if(this._trigger("drag",aw,ax)===false){this._mouseUp(new al.Event("mouseup",aw));
return false
}this.position=ax.position
}this.helper[0].style.left=this.position.left+"px";
this.helper[0].style.top=this.position.top+"px";
if(al.ui.ddmanager){al.ui.ddmanager.drag(this,aw)
}return false
},_mouseStop:function(ax){var aw=this,ay=false;
if(al.ui.ddmanager&&!this.options.dropBehaviour){ay=al.ui.ddmanager.drop(this,ax)
}if(this.dropped){ay=this.dropped;
this.dropped=false
}if((this.options.revert==="invalid"&&!ay)||(this.options.revert==="valid"&&ay)||this.options.revert===true||(al.isFunction(this.options.revert)&&this.options.revert.call(this.element,ay))){al(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){if(aw._trigger("stop",ax)!==false){aw._clear()
}})
}else{if(this._trigger("stop",ax)!==false){this._clear()
}}return false
},_mouseUp:function(aw){this._unblockFrames();
if(al.ui.ddmanager){al.ui.ddmanager.dragStop(this,aw)
}if(this.handleElement.is(aw.target)){this.element.trigger("focus")
}return al.ui.mouse.prototype._mouseUp.call(this,aw)
},cancel:function(){if(this.helper.is(".ui-draggable-dragging")){this._mouseUp(new al.Event("mouseup",{target:this.element[0]}))
}else{this._clear()
}return this
},_getHandle:function(aw){return this.options.handle?!!al(aw.target).closest(this.element.find(this.options.handle)).length:true
},_setHandleClassName:function(){this.handleElement=this.options.handle?this.element.find(this.options.handle):this.element;
this._addClass(this.handleElement,"ui-draggable-handle")
},_removeHandleClassName:function(){this._removeClass(this.handleElement,"ui-draggable-handle")
},_createHelper:function(ax){var az=this.options,ay=al.isFunction(az.helper),aw=ay?al(az.helper.apply(this.element[0],[ax])):(az.helper==="clone"?this.element.clone().removeAttr("id"):this.element);
if(!aw.parents("body").length){aw.appendTo((az.appendTo==="parent"?this.element[0].parentNode:az.appendTo))
}if(ay&&aw[0]===this.element[0]){this._setPositionRelative()
}if(aw[0]!==this.element[0]&&!(/(fixed|absolute)/).test(aw.css("position"))){aw.css("position","absolute")
}return aw
},_setPositionRelative:function(){if(!(/^(?:r|a|f)/).test(this.element.css("position"))){this.element[0].style.position="relative"
}},_adjustOffsetFromHelper:function(aw){if(typeof aw==="string"){aw=aw.split(" ")
}if(al.isArray(aw)){aw={left:+aw[0],top:+aw[1]||0}
}if("left" in aw){this.offset.click.left=aw.left+this.margins.left
}if("right" in aw){this.offset.click.left=this.helperProportions.width-aw.right+this.margins.left
}if("top" in aw){this.offset.click.top=aw.top+this.margins.top
}if("bottom" in aw){this.offset.click.top=this.helperProportions.height-aw.bottom+this.margins.top
}},_isRootNode:function(aw){return(/(html|body)/i).test(aw.tagName)||aw===this.document[0]
},_getParentOffset:function(){var ax=this.offsetParent.offset(),aw=this.document[0];
if(this.cssPosition==="absolute"&&this.scrollParent[0]!==aw&&al.contains(this.scrollParent[0],this.offsetParent[0])){ax.left+=this.scrollParent.scrollLeft();
ax.top+=this.scrollParent.scrollTop()
}if(this._isRootNode(this.offsetParent[0])){ax={top:0,left:0}
}return{top:ax.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:ax.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}
},_getRelativeOffset:function(){if(this.cssPosition!=="relative"){return{top:0,left:0}
}var aw=this.element.position(),ax=this._isRootNode(this.scrollParent[0]);
return{top:aw.top-(parseInt(this.helper.css("top"),10)||0)+(!ax?this.scrollParent.scrollTop():0),left:aw.left-(parseInt(this.helper.css("left"),10)||0)+(!ax?this.scrollParent.scrollLeft():0)}
},_cacheMargins:function(){this.margins={left:(parseInt(this.element.css("marginLeft"),10)||0),top:(parseInt(this.element.css("marginTop"),10)||0),right:(parseInt(this.element.css("marginRight"),10)||0),bottom:(parseInt(this.element.css("marginBottom"),10)||0)}
},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}
},_setContainment:function(){var ax,aA,ay,az=this.options,aw=this.document[0];
this.relativeContainer=null;
if(!az.containment){this.containment=null;
return
}if(az.containment==="window"){this.containment=[al(window).scrollLeft()-this.offset.relative.left-this.offset.parent.left,al(window).scrollTop()-this.offset.relative.top-this.offset.parent.top,al(window).scrollLeft()+al(window).width()-this.helperProportions.width-this.margins.left,al(window).scrollTop()+(al(window).height()||aw.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top];
return
}if(az.containment==="document"){this.containment=[0,0,al(aw).width()-this.helperProportions.width-this.margins.left,(al(aw).height()||aw.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top];
return
}if(az.containment.constructor===Array){this.containment=az.containment;
return
}if(az.containment==="parent"){az.containment=this.helper[0].parentNode
}aA=al(az.containment);
ay=aA[0];
if(!ay){return
}ax=/(scroll|auto)/.test(aA.css("overflow"));
this.containment=[(parseInt(aA.css("borderLeftWidth"),10)||0)+(parseInt(aA.css("paddingLeft"),10)||0),(parseInt(aA.css("borderTopWidth"),10)||0)+(parseInt(aA.css("paddingTop"),10)||0),(ax?Math.max(ay.scrollWidth,ay.offsetWidth):ay.offsetWidth)-(parseInt(aA.css("borderRightWidth"),10)||0)-(parseInt(aA.css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,(ax?Math.max(ay.scrollHeight,ay.offsetHeight):ay.offsetHeight)-(parseInt(aA.css("borderBottomWidth"),10)||0)-(parseInt(aA.css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom];
this.relativeContainer=aA
},_convertPositionTo:function(ax,az){if(!az){az=this.position
}var aw=ax==="absolute"?1:-1,ay=this._isRootNode(this.scrollParent[0]);
return{top:(az.top+this.offset.relative.top*aw+this.offset.parent.top*aw-((this.cssPosition==="fixed"?-this.offset.scroll.top:(ay?0:this.offset.scroll.top))*aw)),left:(az.left+this.offset.relative.left*aw+this.offset.parent.left*aw-((this.cssPosition==="fixed"?-this.offset.scroll.left:(ay?0:this.offset.scroll.left))*aw))}
},_generatePosition:function(ax,aD){var aw,aE,aF,az,ay=this.options,aC=this._isRootNode(this.scrollParent[0]),aB=ax.pageX,aA=ax.pageY;
if(!aC||!this.offset.scroll){this.offset.scroll={top:this.scrollParent.scrollTop(),left:this.scrollParent.scrollLeft()}
}if(aD){if(this.containment){if(this.relativeContainer){aE=this.relativeContainer.offset();
aw=[this.containment[0]+aE.left,this.containment[1]+aE.top,this.containment[2]+aE.left,this.containment[3]+aE.top]
}else{aw=this.containment
}if(ax.pageX-this.offset.click.left<aw[0]){aB=aw[0]+this.offset.click.left
}if(ax.pageY-this.offset.click.top<aw[1]){aA=aw[1]+this.offset.click.top
}if(ax.pageX-this.offset.click.left>aw[2]){aB=aw[2]+this.offset.click.left
}if(ax.pageY-this.offset.click.top>aw[3]){aA=aw[3]+this.offset.click.top
}}if(ay.grid){aF=ay.grid[1]?this.originalPageY+Math.round((aA-this.originalPageY)/ay.grid[1])*ay.grid[1]:this.originalPageY;
aA=aw?((aF-this.offset.click.top>=aw[1]||aF-this.offset.click.top>aw[3])?aF:((aF-this.offset.click.top>=aw[1])?aF-ay.grid[1]:aF+ay.grid[1])):aF;
az=ay.grid[0]?this.originalPageX+Math.round((aB-this.originalPageX)/ay.grid[0])*ay.grid[0]:this.originalPageX;
aB=aw?((az-this.offset.click.left>=aw[0]||az-this.offset.click.left>aw[2])?az:((az-this.offset.click.left>=aw[0])?az-ay.grid[0]:az+ay.grid[0])):az
}if(ay.axis==="y"){aB=this.originalPageX
}if(ay.axis==="x"){aA=this.originalPageY
}}return{top:(aA-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+(this.cssPosition==="fixed"?-this.offset.scroll.top:(aC?0:this.offset.scroll.top))),left:(aB-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+(this.cssPosition==="fixed"?-this.offset.scroll.left:(aC?0:this.offset.scroll.left)))}
},_clear:function(){this._removeClass(this.helper,"ui-draggable-dragging");
if(this.helper[0]!==this.element[0]&&!this.cancelHelperRemoval){this.helper.remove()
}this.helper=null;
this.cancelHelperRemoval=false;
if(this.destroyOnClear){this.destroy()
}},_trigger:function(aw,ax,ay){ay=ay||this._uiHash();
al.ui.plugin.call(this,aw,[ax,ay,this],true);
if(/^(drag|start|stop)/.test(aw)){this.positionAbs=this._convertPositionTo("absolute");
ay.offset=this.positionAbs
}return al.Widget.prototype._trigger.call(this,aw,ax,ay)
},plugins:{},_uiHash:function(){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,offset:this.positionAbs}
}});
al.ui.plugin.add("draggable","connectToSortable",{start:function(ay,az,aw){var ax=al.extend({},az,{item:aw.element});
aw.sortables=[];
al(aw.options.connectToSortable).each(function(){var aA=al(this).sortable("instance");
if(aA&&!aA.options.disabled){aw.sortables.push(aA);
aA.refreshPositions();
aA._trigger("activate",ay,ax)
}})
},stop:function(ay,az,aw){var ax=al.extend({},az,{item:aw.element});
aw.cancelHelperRemoval=false;
al.each(aw.sortables,function(){var aA=this;
if(aA.isOver){aA.isOver=0;
aw.cancelHelperRemoval=true;
aA.cancelHelperRemoval=false;
aA._storedCSS={position:aA.placeholder.css("position"),top:aA.placeholder.css("top"),left:aA.placeholder.css("left")};
aA._mouseStop(ay);
aA.options.helper=aA.options._helper
}else{aA.cancelHelperRemoval=true;
aA._trigger("deactivate",ay,ax)
}})
},drag:function(ax,ay,aw){al.each(aw.sortables,function(){var az=false,aA=this;
aA.positionAbs=aw.positionAbs;
aA.helperProportions=aw.helperProportions;
aA.offset.click=aw.offset.click;
if(aA._intersectsWith(aA.containerCache)){az=true;
al.each(aw.sortables,function(){this.positionAbs=aw.positionAbs;
this.helperProportions=aw.helperProportions;
this.offset.click=aw.offset.click;
if(this!==aA&&this._intersectsWith(this.containerCache)&&al.contains(aA.element[0],this.element[0])){az=false
}return az
})
}if(az){if(!aA.isOver){aA.isOver=1;
aw._parent=ay.helper.parent();
aA.currentItem=ay.helper.appendTo(aA.element).data("ui-sortable-item",true);
aA.options._helper=aA.options.helper;
aA.options.helper=function(){return ay.helper[0]
};
ax.target=aA.currentItem[0];
aA._mouseCapture(ax,true);
aA._mouseStart(ax,true,true);
aA.offset.click.top=aw.offset.click.top;
aA.offset.click.left=aw.offset.click.left;
aA.offset.parent.left-=aw.offset.parent.left-aA.offset.parent.left;
aA.offset.parent.top-=aw.offset.parent.top-aA.offset.parent.top;
aw._trigger("toSortable",ax);
aw.dropped=aA.element;
al.each(aw.sortables,function(){this.refreshPositions()
});
aw.currentItem=aw.element;
aA.fromOutside=aw
}if(aA.currentItem){aA._mouseDrag(ax);
ay.position=aA.position
}}else{if(aA.isOver){aA.isOver=0;
aA.cancelHelperRemoval=true;
aA.options._revert=aA.options.revert;
aA.options.revert=false;
aA._trigger("out",ax,aA._uiHash(aA));
aA._mouseStop(ax,true);
aA.options.revert=aA.options._revert;
aA.options.helper=aA.options._helper;
if(aA.placeholder){aA.placeholder.remove()
}ay.helper.appendTo(aw._parent);
aw._refreshOffsets(ax);
ay.position=aw._generatePosition(ax,true);
aw._trigger("fromSortable",ax);
aw.dropped=false;
al.each(aw.sortables,function(){this.refreshPositions()
})
}}})
}});
al.ui.plugin.add("draggable","cursor",{start:function(ay,az,aw){var ax=al("body"),aA=aw.options;
if(ax.css("cursor")){aA._cursor=ax.css("cursor")
}ax.css("cursor",aA.cursor)
},stop:function(ax,ay,aw){var az=aw.options;
if(az._cursor){al("body").css("cursor",az._cursor)
}}});
al.ui.plugin.add("draggable","opacity",{start:function(ay,az,aw){var ax=al(az.helper),aA=aw.options;
if(ax.css("opacity")){aA._opacity=ax.css("opacity")
}ax.css("opacity",aA.opacity)
},stop:function(ax,ay,aw){var az=aw.options;
if(az._opacity){al(ay.helper).css("opacity",az._opacity)
}}});
al.ui.plugin.add("draggable","scroll",{start:function(ax,ay,aw){if(!aw.scrollParentNotHidden){aw.scrollParentNotHidden=aw.helper.scrollParent(false)
}if(aw.scrollParentNotHidden[0]!==aw.document[0]&&aw.scrollParentNotHidden[0].tagName!=="HTML"){aw.overflowOffset=aw.scrollParentNotHidden.offset()
}},drag:function(az,aA,ay){var aB=ay.options,ax=false,aC=ay.scrollParentNotHidden[0],aw=ay.document[0];
if(aC!==aw&&aC.tagName!=="HTML"){if(!aB.axis||aB.axis!=="x"){if((ay.overflowOffset.top+aC.offsetHeight)-az.pageY<aB.scrollSensitivity){aC.scrollTop=ax=aC.scrollTop+aB.scrollSpeed
}else{if(az.pageY-ay.overflowOffset.top<aB.scrollSensitivity){aC.scrollTop=ax=aC.scrollTop-aB.scrollSpeed
}}}if(!aB.axis||aB.axis!=="y"){if((ay.overflowOffset.left+aC.offsetWidth)-az.pageX<aB.scrollSensitivity){aC.scrollLeft=ax=aC.scrollLeft+aB.scrollSpeed
}else{if(az.pageX-ay.overflowOffset.left<aB.scrollSensitivity){aC.scrollLeft=ax=aC.scrollLeft-aB.scrollSpeed
}}}}else{if(!aB.axis||aB.axis!=="x"){if(az.pageY-al(aw).scrollTop()<aB.scrollSensitivity){ax=al(aw).scrollTop(al(aw).scrollTop()-aB.scrollSpeed)
}else{if(al(window).height()-(az.pageY-al(aw).scrollTop())<aB.scrollSensitivity){ax=al(aw).scrollTop(al(aw).scrollTop()+aB.scrollSpeed)
}}}if(!aB.axis||aB.axis!=="y"){if(az.pageX-al(aw).scrollLeft()<aB.scrollSensitivity){ax=al(aw).scrollLeft(al(aw).scrollLeft()-aB.scrollSpeed)
}else{if(al(window).width()-(az.pageX-al(aw).scrollLeft())<aB.scrollSensitivity){ax=al(aw).scrollLeft(al(aw).scrollLeft()+aB.scrollSpeed)
}}}}if(ax!==false&&al.ui.ddmanager&&!aB.dropBehaviour){al.ui.ddmanager.prepareOffsets(ay,az)
}}});
al.ui.plugin.add("draggable","snap",{start:function(ax,ay,aw){var az=aw.options;
aw.snapElements=[];
al(az.snap.constructor!==String?(az.snap.items||":data(ui-draggable)"):az.snap).each(function(){var aB=al(this),aA=aB.offset();
if(this!==aw.element[0]){aw.snapElements.push({item:this,width:aB.outerWidth(),height:aB.outerHeight(),top:aA.top,left:aA.left})
}})
},drag:function(aI,aF,az){var aw,aN,aB,aC,aH,aE,aD,aO,aJ,aA,aG=az.options,aM=aG.snapTolerance,aL=aF.offset.left,aK=aL+az.helperProportions.width,ay=aF.offset.top,ax=ay+az.helperProportions.height;
for(aJ=az.snapElements.length-1;
aJ>=0;
aJ--){aH=az.snapElements[aJ].left-az.margins.left;
aE=aH+az.snapElements[aJ].width;
aD=az.snapElements[aJ].top-az.margins.top;
aO=aD+az.snapElements[aJ].height;
if(aK<aH-aM||aL>aE+aM||ax<aD-aM||ay>aO+aM||!al.contains(az.snapElements[aJ].item.ownerDocument,az.snapElements[aJ].item)){if(az.snapElements[aJ].snapping){(az.options.snap.release&&az.options.snap.release.call(az.element,aI,al.extend(az._uiHash(),{snapItem:az.snapElements[aJ].item})))
}az.snapElements[aJ].snapping=false;
continue
}if(aG.snapMode!=="inner"){aw=Math.abs(aD-ax)<=aM;
aN=Math.abs(aO-ay)<=aM;
aB=Math.abs(aH-aK)<=aM;
aC=Math.abs(aE-aL)<=aM;
if(aw){aF.position.top=az._convertPositionTo("relative",{top:aD-az.helperProportions.height,left:0}).top
}if(aN){aF.position.top=az._convertPositionTo("relative",{top:aO,left:0}).top
}if(aB){aF.position.left=az._convertPositionTo("relative",{top:0,left:aH-az.helperProportions.width}).left
}if(aC){aF.position.left=az._convertPositionTo("relative",{top:0,left:aE}).left
}}aA=(aw||aN||aB||aC);
if(aG.snapMode!=="outer"){aw=Math.abs(aD-ay)<=aM;
aN=Math.abs(aO-ax)<=aM;
aB=Math.abs(aH-aL)<=aM;
aC=Math.abs(aE-aK)<=aM;
if(aw){aF.position.top=az._convertPositionTo("relative",{top:aD,left:0}).top
}if(aN){aF.position.top=az._convertPositionTo("relative",{top:aO-az.helperProportions.height,left:0}).top
}if(aB){aF.position.left=az._convertPositionTo("relative",{top:0,left:aH}).left
}if(aC){aF.position.left=az._convertPositionTo("relative",{top:0,left:aE-az.helperProportions.width}).left
}}if(!az.snapElements[aJ].snapping&&(aw||aN||aB||aC||aA)){(az.options.snap.snap&&az.options.snap.snap.call(az.element,aI,al.extend(az._uiHash(),{snapItem:az.snapElements[aJ].item})))
}az.snapElements[aJ].snapping=(aw||aN||aB||aC||aA)
}}});
al.ui.plugin.add("draggable","stack",{start:function(ay,az,aw){var ax,aB=aw.options,aA=al.makeArray(al(aB.stack)).sort(function(aD,aC){return(parseInt(al(aD).css("zIndex"),10)||0)-(parseInt(al(aC).css("zIndex"),10)||0)
});
if(!aA.length){return
}ax=parseInt(al(aA[0]).css("zIndex"),10)||0;
al(aA).each(function(aC){al(this).css("zIndex",ax+aC)
});
this.css("zIndex",(ax+aA.length))
}});
al.ui.plugin.add("draggable","zIndex",{start:function(ay,az,aw){var ax=al(az.helper),aA=aw.options;
if(ax.css("zIndex")){aA._zIndex=ax.css("zIndex")
}ax.css("zIndex",aA.zIndex)
},stop:function(ax,ay,aw){var az=aw.options;
if(az._zIndex){al(ay.helper).css("zIndex",az._zIndex)
}}});
var x=al.ui.draggable;
/*!
 * jQuery UI Resizable 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
;
al.widget("ui.resizable",al.ui.mouse,{version:"1.12.1",widgetEventPrefix:"resize",options:{alsoResize:false,animate:false,animateDuration:"slow",animateEasing:"swing",aspectRatio:false,autoHide:false,classes:{"ui-resizable-se":"ui-icon ui-icon-gripsmall-diagonal-se"},containment:false,ghost:false,grid:false,handles:"e,s,se",helper:false,maxHeight:null,maxWidth:null,minHeight:10,minWidth:10,zIndex:90,resize:null,start:null,stop:null},_num:function(aw){return parseFloat(aw)||0
},_isNumber:function(aw){return !isNaN(parseFloat(aw))
},_hasScroll:function(az,ax){if(al(az).css("overflow")==="hidden"){return false
}var aw=(ax&&ax==="left")?"scrollLeft":"scrollTop",ay=false;
if(az[aw]>0){return true
}az[aw]=1;
ay=(az[aw]>0);
az[aw]=0;
return ay
},_create:function(){var ax,ay=this.options,aw=this;
this._addClass("ui-resizable");
al.extend(this,{_aspectRatio:!!(ay.aspectRatio),aspectRatio:ay.aspectRatio,originalElement:this.element,_proportionallyResizeElements:[],_helper:ay.helper||ay.ghost||ay.animate?ay.helper||"ui-resizable-helper":null});
if(this.element[0].nodeName.match(/^(canvas|textarea|input|select|button|img)$/i)){this.element.wrap(al("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({position:this.element.css("position"),width:this.element.outerWidth(),height:this.element.outerHeight(),top:this.element.css("top"),left:this.element.css("left")}));
this.element=this.element.parent().data("ui-resizable",this.element.resizable("instance"));
this.elementIsWrapper=true;
ax={marginTop:this.originalElement.css("marginTop"),marginRight:this.originalElement.css("marginRight"),marginBottom:this.originalElement.css("marginBottom"),marginLeft:this.originalElement.css("marginLeft")};
this.element.css(ax);
this.originalElement.css("margin",0);
this.originalResizeStyle=this.originalElement.css("resize");
this.originalElement.css("resize","none");
this._proportionallyResizeElements.push(this.originalElement.css({position:"static",zoom:1,display:"block"}));
this.originalElement.css(ax);
this._proportionallyResize()
}this._setupHandles();
if(ay.autoHide){al(this.element).on("mouseenter",function(){if(ay.disabled){return
}aw._removeClass("ui-resizable-autohide");
aw._handles.show()
}).on("mouseleave",function(){if(ay.disabled){return
}if(!aw.resizing){aw._addClass("ui-resizable-autohide");
aw._handles.hide()
}})
}this._mouseInit()
},_destroy:function(){this._mouseDestroy();
var ax,aw=function(ay){al(ay).removeData("resizable").removeData("ui-resizable").off(".resizable").find(".ui-resizable-handle").remove()
};
if(this.elementIsWrapper){aw(this.element);
ax=this.element;
this.originalElement.css({position:ax.css("position"),width:ax.outerWidth(),height:ax.outerHeight(),top:ax.css("top"),left:ax.css("left")}).insertAfter(ax);
ax.remove()
}this.originalElement.css("resize",this.originalResizeStyle);
aw(this.originalElement);
return this
},_setOption:function(aw,ax){this._super(aw,ax);
switch(aw){case"handles":this._removeHandles();
this._setupHandles();
break;
default:break
}},_setupHandles:function(){var aB=this.options,aA,ax,aC,aw,ay,az=this;
this.handles=aB.handles||(!al(".ui-resizable-handle",this.element).length?"e,s,se":{n:".ui-resizable-n",e:".ui-resizable-e",s:".ui-resizable-s",w:".ui-resizable-w",se:".ui-resizable-se",sw:".ui-resizable-sw",ne:".ui-resizable-ne",nw:".ui-resizable-nw"});
this._handles=al();
if(this.handles.constructor===String){if(this.handles==="all"){this.handles="n,e,s,w,se,sw,ne,nw"
}aC=this.handles.split(",");
this.handles={};
for(ax=0;
ax<aC.length;
ax++){aA=al.trim(aC[ax]);
aw="ui-resizable-"+aA;
ay=al("<div>");
this._addClass(ay,"ui-resizable-handle "+aw);
ay.css({zIndex:aB.zIndex});
this.handles[aA]=".ui-resizable-"+aA;
this.element.append(ay)
}}this._renderAxis=function(aH){var aE,aF,aD,aG;
aH=aH||this.element;
for(aE in this.handles){if(this.handles[aE].constructor===String){this.handles[aE]=this.element.children(this.handles[aE]).first().show()
}else{if(this.handles[aE].jquery||this.handles[aE].nodeType){this.handles[aE]=al(this.handles[aE]);
this._on(this.handles[aE],{mousedown:az._mouseDown})
}}if(this.elementIsWrapper&&this.originalElement[0].nodeName.match(/^(textarea|input|select|button)$/i)){aF=al(this.handles[aE],this.element);
aG=/sw|ne|nw|se|n|s/.test(aE)?aF.outerHeight():aF.outerWidth();
aD=["padding",/ne|nw|n/.test(aE)?"Top":/se|sw|s/.test(aE)?"Bottom":/^e$/.test(aE)?"Right":"Left"].join("");
aH.css(aD,aG);
this._proportionallyResize()
}this._handles=this._handles.add(this.handles[aE])
}};
this._renderAxis(this.element);
this._handles=this._handles.add(this.element.find(".ui-resizable-handle"));
this._handles.disableSelection();
this._handles.on("mouseover",function(){if(!az.resizing){if(this.className){ay=this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)
}az.axis=ay&&ay[1]?ay[1]:"se"
}});
if(aB.autoHide){this._handles.hide();
this._addClass("ui-resizable-autohide")
}},_removeHandles:function(){this._handles.remove()
},_mouseCapture:function(ay){var ax,az,aw=false;
for(ax in this.handles){az=al(this.handles[ax])[0];
if(az===ay.target||al.contains(az,ay.target)){aw=true
}}return !this.options.disabled&&aw
},_mouseStart:function(ax){var aB,ay,aA,az=this.options,aw=this.element;
this.resizing=true;
this._renderProxy();
aB=this._num(this.helper.css("left"));
ay=this._num(this.helper.css("top"));
if(az.containment){aB+=al(az.containment).scrollLeft()||0;
ay+=al(az.containment).scrollTop()||0
}this.offset=this.helper.offset();
this.position={left:aB,top:ay};
this.size=this._helper?{width:this.helper.width(),height:this.helper.height()}:{width:aw.width(),height:aw.height()};
this.originalSize=this._helper?{width:aw.outerWidth(),height:aw.outerHeight()}:{width:aw.width(),height:aw.height()};
this.sizeDiff={width:aw.outerWidth()-aw.width(),height:aw.outerHeight()-aw.height()};
this.originalPosition={left:aB,top:ay};
this.originalMousePosition={left:ax.pageX,top:ax.pageY};
this.aspectRatio=(typeof az.aspectRatio==="number")?az.aspectRatio:((this.originalSize.width/this.originalSize.height)||1);
aA=al(".ui-resizable-"+this.axis).css("cursor");
al("body").css("cursor",aA==="auto"?this.axis+"-resize":aA);
this._addClass("ui-resizable-resizing");
this._propagate("start",ax);
return true
},_mouseDrag:function(aB){var aC,aA,aD=this.originalMousePosition,ax=this.axis,ay=(aB.pageX-aD.left)||0,aw=(aB.pageY-aD.top)||0,az=this._change[ax];
this._updatePrevProperties();
if(!az){return false
}aC=az.apply(this,[aB,ay,aw]);
this._updateVirtualBoundaries(aB.shiftKey);
if(this._aspectRatio||aB.shiftKey){aC=this._updateRatio(aC,aB)
}aC=this._respectSize(aC,aB);
this._updateCache(aC);
this._propagate("resize",aB);
aA=this._applyChanges();
if(!this._helper&&this._proportionallyResizeElements.length){this._proportionallyResize()
}if(!al.isEmptyObject(aA)){this._updatePrevProperties();
this._trigger("resize",aB,this.ui());
this._applyChanges()
}return false
},_mouseStop:function(az){this.resizing=false;
var ay,aw,ax,aC,aF,aB,aE,aA=this.options,aD=this;
if(this._helper){ay=this._proportionallyResizeElements;
aw=ay.length&&(/textarea/i).test(ay[0].nodeName);
ax=aw&&this._hasScroll(ay[0],"left")?0:aD.sizeDiff.height;
aC=aw?0:aD.sizeDiff.width;
aF={width:(aD.helper.width()-aC),height:(aD.helper.height()-ax)};
aB=(parseFloat(aD.element.css("left"))+(aD.position.left-aD.originalPosition.left))||null;
aE=(parseFloat(aD.element.css("top"))+(aD.position.top-aD.originalPosition.top))||null;
if(!aA.animate){this.element.css(al.extend(aF,{top:aE,left:aB}))
}aD.helper.height(aD.size.height);
aD.helper.width(aD.size.width);
if(this._helper&&!aA.animate){this._proportionallyResize()
}}al("body").css("cursor","auto");
this._removeClass("ui-resizable-resizing");
this._propagate("stop",az);
if(this._helper){this.helper.remove()
}return false
},_updatePrevProperties:function(){this.prevPosition={top:this.position.top,left:this.position.left};
this.prevSize={width:this.size.width,height:this.size.height}
},_applyChanges:function(){var aw={};
if(this.position.top!==this.prevPosition.top){aw.top=this.position.top+"px"
}if(this.position.left!==this.prevPosition.left){aw.left=this.position.left+"px"
}if(this.size.width!==this.prevSize.width){aw.width=this.size.width+"px"
}if(this.size.height!==this.prevSize.height){aw.height=this.size.height+"px"
}this.helper.css(aw);
return aw
},_updateVirtualBoundaries:function(ay){var aA,az,ax,aC,aw,aB=this.options;
aw={minWidth:this._isNumber(aB.minWidth)?aB.minWidth:0,maxWidth:this._isNumber(aB.maxWidth)?aB.maxWidth:Infinity,minHeight:this._isNumber(aB.minHeight)?aB.minHeight:0,maxHeight:this._isNumber(aB.maxHeight)?aB.maxHeight:Infinity};
if(this._aspectRatio||ay){aA=aw.minHeight*this.aspectRatio;
ax=aw.minWidth/this.aspectRatio;
az=aw.maxHeight*this.aspectRatio;
aC=aw.maxWidth/this.aspectRatio;
if(aA>aw.minWidth){aw.minWidth=aA
}if(ax>aw.minHeight){aw.minHeight=ax
}if(az<aw.maxWidth){aw.maxWidth=az
}if(aC<aw.maxHeight){aw.maxHeight=aC
}}this._vBoundaries=aw
},_updateCache:function(aw){this.offset=this.helper.offset();
if(this._isNumber(aw.left)){this.position.left=aw.left
}if(this._isNumber(aw.top)){this.position.top=aw.top
}if(this._isNumber(aw.height)){this.size.height=aw.height
}if(this._isNumber(aw.width)){this.size.width=aw.width
}},_updateRatio:function(ay){var az=this.position,ax=this.size,aw=this.axis;
if(this._isNumber(ay.height)){ay.width=(ay.height*this.aspectRatio)
}else{if(this._isNumber(ay.width)){ay.height=(ay.width/this.aspectRatio)
}}if(aw==="sw"){ay.left=az.left+(ax.width-ay.width);
ay.top=null
}if(aw==="nw"){ay.top=az.top+(ax.height-ay.height);
ay.left=az.left+(ax.width-ay.width)
}return ay
},_respectSize:function(aB){var ay=this._vBoundaries,aE=this.axis,aG=this._isNumber(aB.width)&&ay.maxWidth&&(ay.maxWidth<aB.width),aC=this._isNumber(aB.height)&&ay.maxHeight&&(ay.maxHeight<aB.height),az=this._isNumber(aB.width)&&ay.minWidth&&(ay.minWidth>aB.width),aF=this._isNumber(aB.height)&&ay.minHeight&&(ay.minHeight>aB.height),ax=this.originalPosition.left+this.originalSize.width,aD=this.originalPosition.top+this.originalSize.height,aA=/sw|nw|w/.test(aE),aw=/nw|ne|n/.test(aE);
if(az){aB.width=ay.minWidth
}if(aF){aB.height=ay.minHeight
}if(aG){aB.width=ay.maxWidth
}if(aC){aB.height=ay.maxHeight
}if(az&&aA){aB.left=ax-ay.minWidth
}if(aG&&aA){aB.left=ax-ay.maxWidth
}if(aF&&aw){aB.top=aD-ay.minHeight
}if(aC&&aw){aB.top=aD-ay.maxHeight
}if(!aB.width&&!aB.height&&!aB.left&&aB.top){aB.top=null
}else{if(!aB.width&&!aB.height&&!aB.top&&aB.left){aB.left=null
}}return aB
},_getPaddingPlusBorderDimensions:function(ay){var ax=0,az=[],aA=[ay.css("borderTopWidth"),ay.css("borderRightWidth"),ay.css("borderBottomWidth"),ay.css("borderLeftWidth")],aw=[ay.css("paddingTop"),ay.css("paddingRight"),ay.css("paddingBottom"),ay.css("paddingLeft")];
for(;
ax<4;
ax++){az[ax]=(parseFloat(aA[ax])||0);
az[ax]+=(parseFloat(aw[ax])||0)
}return{height:az[0]+az[2],width:az[1]+az[3]}
},_proportionallyResize:function(){if(!this._proportionallyResizeElements.length){return
}var ay,ax=0,aw=this.helper||this.element;
for(;
ax<this._proportionallyResizeElements.length;
ax++){ay=this._proportionallyResizeElements[ax];
if(!this.outerDimensions){this.outerDimensions=this._getPaddingPlusBorderDimensions(ay)
}ay.css({height:(aw.height()-this.outerDimensions.height)||0,width:(aw.width()-this.outerDimensions.width)||0})
}},_renderProxy:function(){var aw=this.element,ax=this.options;
this.elementOffset=aw.offset();
if(this._helper){this.helper=this.helper||al("<div style='overflow:hidden;'></div>");
this._addClass(this.helper,this._helper);
this.helper.css({width:this.element.outerWidth(),height:this.element.outerHeight(),position:"absolute",left:this.elementOffset.left+"px",top:this.elementOffset.top+"px",zIndex:++ax.zIndex});
this.helper.appendTo("body").disableSelection()
}else{this.helper=this.element
}},_change:{e:function(ax,aw){return{width:this.originalSize.width+aw}
},w:function(ay,aw){var ax=this.originalSize,az=this.originalPosition;
return{left:az.left+aw,width:ax.width-aw}
},n:function(az,ax,aw){var ay=this.originalSize,aA=this.originalPosition;
return{top:aA.top+aw,height:ay.height-aw}
},s:function(ay,ax,aw){return{height:this.originalSize.height+aw}
},se:function(ay,ax,aw){return al.extend(this._change.s.apply(this,arguments),this._change.e.apply(this,[ay,ax,aw]))
},sw:function(ay,ax,aw){return al.extend(this._change.s.apply(this,arguments),this._change.w.apply(this,[ay,ax,aw]))
},ne:function(ay,ax,aw){return al.extend(this._change.n.apply(this,arguments),this._change.e.apply(this,[ay,ax,aw]))
},nw:function(ay,ax,aw){return al.extend(this._change.n.apply(this,arguments),this._change.w.apply(this,[ay,ax,aw]))
}},_propagate:function(ax,aw){al.ui.plugin.call(this,ax,[aw,this.ui()]);
(ax!=="resize"&&this._trigger(ax,aw,this.ui()))
},plugins:{},ui:function(){return{originalElement:this.originalElement,element:this.element,helper:this.helper,position:this.position,size:this.size,originalSize:this.originalSize,originalPosition:this.originalPosition}
}});
al.ui.plugin.add("resizable","animate",{stop:function(az){var aE=al(this).resizable("instance"),aB=aE.options,ay=aE._proportionallyResizeElements,aw=ay.length&&(/textarea/i).test(ay[0].nodeName),ax=aw&&aE._hasScroll(ay[0],"left")?0:aE.sizeDiff.height,aD=aw?0:aE.sizeDiff.width,aA={width:(aE.size.width-aD),height:(aE.size.height-ax)},aC=(parseFloat(aE.element.css("left"))+(aE.position.left-aE.originalPosition.left))||null,aF=(parseFloat(aE.element.css("top"))+(aE.position.top-aE.originalPosition.top))||null;
aE.element.animate(al.extend(aA,aF&&aC?{top:aF,left:aC}:{}),{duration:aB.animateDuration,easing:aB.animateEasing,step:function(){var aG={width:parseFloat(aE.element.css("width")),height:parseFloat(aE.element.css("height")),top:parseFloat(aE.element.css("top")),left:parseFloat(aE.element.css("left"))};
if(ay&&ay.length){al(ay[0]).css({width:aG.width,height:aG.height})
}aE._updateCache(aG);
aE._propagate("resize",az)
}})
}});
al.ui.plugin.add("resizable","containment",{start:function(){var aE,ay,aG,aw,aD,az,aH,aF=al(this).resizable("instance"),aC=aF.options,aB=aF.element,ax=aC.containment,aA=(ax instanceof al)?ax.get(0):(/parent/.test(ax))?aB.parent().get(0):ax;
if(!aA){return
}aF.containerElement=al(aA);
if(/document/.test(ax)||ax===document){aF.containerOffset={left:0,top:0};
aF.containerPosition={left:0,top:0};
aF.parentData={element:al(document),left:0,top:0,width:al(document).width(),height:al(document).height()||document.body.parentNode.scrollHeight}
}else{aE=al(aA);
ay=[];
al(["Top","Right","Left","Bottom"]).each(function(aJ,aI){ay[aJ]=aF._num(aE.css("padding"+aI))
});
aF.containerOffset=aE.offset();
aF.containerPosition=aE.position();
aF.containerSize={height:(aE.innerHeight()-ay[3]),width:(aE.innerWidth()-ay[1])};
aG=aF.containerOffset;
aw=aF.containerSize.height;
aD=aF.containerSize.width;
az=(aF._hasScroll(aA,"left")?aA.scrollWidth:aD);
aH=(aF._hasScroll(aA)?aA.scrollHeight:aw);
aF.parentData={element:aA,left:aG.left,top:aG.top,width:az,height:aH}
}},resize:function(ax){var aD,aI,aC,aA,aE=al(this).resizable("instance"),az=aE.options,aG=aE.containerOffset,aF=aE.position,aH=aE._aspectRatio||ax.shiftKey,aw={top:0,left:0},ay=aE.containerElement,aB=true;
if(ay[0]!==document&&(/static/).test(ay.css("position"))){aw=aG
}if(aF.left<(aE._helper?aG.left:0)){aE.size.width=aE.size.width+(aE._helper?(aE.position.left-aG.left):(aE.position.left-aw.left));
if(aH){aE.size.height=aE.size.width/aE.aspectRatio;
aB=false
}aE.position.left=az.helper?aG.left:0
}if(aF.top<(aE._helper?aG.top:0)){aE.size.height=aE.size.height+(aE._helper?(aE.position.top-aG.top):aE.position.top);
if(aH){aE.size.width=aE.size.height*aE.aspectRatio;
aB=false
}aE.position.top=aE._helper?aG.top:0
}aC=aE.containerElement.get(0)===aE.element.parent().get(0);
aA=/relative|absolute/.test(aE.containerElement.css("position"));
if(aC&&aA){aE.offset.left=aE.parentData.left+aE.position.left;
aE.offset.top=aE.parentData.top+aE.position.top
}else{aE.offset.left=aE.element.offset().left;
aE.offset.top=aE.element.offset().top
}aD=Math.abs(aE.sizeDiff.width+(aE._helper?aE.offset.left-aw.left:(aE.offset.left-aG.left)));
aI=Math.abs(aE.sizeDiff.height+(aE._helper?aE.offset.top-aw.top:(aE.offset.top-aG.top)));
if(aD+aE.size.width>=aE.parentData.width){aE.size.width=aE.parentData.width-aD;
if(aH){aE.size.height=aE.size.width/aE.aspectRatio;
aB=false
}}if(aI+aE.size.height>=aE.parentData.height){aE.size.height=aE.parentData.height-aI;
if(aH){aE.size.width=aE.size.height*aE.aspectRatio;
aB=false
}}if(!aB){aE.position.left=aE.prevPosition.left;
aE.position.top=aE.prevPosition.top;
aE.size.width=aE.prevSize.width;
aE.size.height=aE.prevSize.height
}},stop:function(){var aB=al(this).resizable("instance"),ax=aB.options,aC=aB.containerOffset,aw=aB.containerPosition,ay=aB.containerElement,az=al(aB.helper),aE=az.offset(),aD=az.outerWidth()-aB.sizeDiff.width,aA=az.outerHeight()-aB.sizeDiff.height;
if(aB._helper&&!ax.animate&&(/relative/).test(ay.css("position"))){al(this).css({left:aE.left-aw.left-aC.left,width:aD,height:aA})
}if(aB._helper&&!ax.animate&&(/static/).test(ay.css("position"))){al(this).css({left:aE.left-aw.left-aC.left,width:aD,height:aA})
}}});
al.ui.plugin.add("resizable","alsoResize",{start:function(){var aw=al(this).resizable("instance"),ax=aw.options;
al(ax.alsoResize).each(function(){var ay=al(this);
ay.data("ui-resizable-alsoresize",{width:parseFloat(ay.width()),height:parseFloat(ay.height()),left:parseFloat(ay.css("left")),top:parseFloat(ay.css("top"))})
})
},resize:function(ax,az){var aw=al(this).resizable("instance"),aA=aw.options,ay=aw.originalSize,aC=aw.originalPosition,aB={height:(aw.size.height-ay.height)||0,width:(aw.size.width-ay.width)||0,top:(aw.position.top-aC.top)||0,left:(aw.position.left-aC.left)||0};
al(aA.alsoResize).each(function(){var aF=al(this),aG=al(this).data("ui-resizable-alsoresize"),aE={},aD=aF.parents(az.originalElement[0]).length?["width","height"]:["width","height","top","left"];
al.each(aD,function(aH,aJ){var aI=(aG[aJ]||0)+(aB[aJ]||0);
if(aI&&aI>=0){aE[aJ]=aI||null
}});
aF.css(aE)
})
},stop:function(){al(this).removeData("ui-resizable-alsoresize")
}});
al.ui.plugin.add("resizable","ghost",{start:function(){var ax=al(this).resizable("instance"),aw=ax.size;
ax.ghost=ax.originalElement.clone();
ax.ghost.css({opacity:0.25,display:"block",position:"relative",height:aw.height,width:aw.width,margin:0,left:0,top:0});
ax._addClass(ax.ghost,"ui-resizable-ghost");
if(al.uiBackCompat!==false&&typeof ax.options.ghost==="string"){ax.ghost.addClass(this.options.ghost)
}ax.ghost.appendTo(ax.helper)
},resize:function(){var aw=al(this).resizable("instance");
if(aw.ghost){aw.ghost.css({position:"relative",height:aw.size.height,width:aw.size.width})
}},stop:function(){var aw=al(this).resizable("instance");
if(aw.ghost&&aw.helper){aw.helper.get(0).removeChild(aw.ghost.get(0))
}}});
al.ui.plugin.add("resizable","grid",{resize:function(){var az,aE=al(this).resizable("instance"),aI=aE.options,aC=aE.size,aD=aE.originalSize,aF=aE.originalPosition,aN=aE.axis,aw=typeof aI.grid==="number"?[aI.grid,aI.grid]:aI.grid,aL=(aw[0]||1),aK=(aw[1]||1),aB=Math.round((aC.width-aD.width)/aL)*aL,aA=Math.round((aC.height-aD.height)/aK)*aK,aG=aD.width+aB,aJ=aD.height+aA,ay=aI.maxWidth&&(aI.maxWidth<aG),aH=aI.maxHeight&&(aI.maxHeight<aJ),aM=aI.minWidth&&(aI.minWidth>aG),ax=aI.minHeight&&(aI.minHeight>aJ);
aI.grid=aw;
if(aM){aG+=aL
}if(ax){aJ+=aK
}if(ay){aG-=aL
}if(aH){aJ-=aK
}if(/^(se|s|e)$/.test(aN)){aE.size.width=aG;
aE.size.height=aJ
}else{if(/^(ne)$/.test(aN)){aE.size.width=aG;
aE.size.height=aJ;
aE.position.top=aF.top-aA
}else{if(/^(sw)$/.test(aN)){aE.size.width=aG;
aE.size.height=aJ;
aE.position.left=aF.left-aB
}else{if(aJ-aK<=0||aG-aL<=0){az=aE._getPaddingPlusBorderDimensions(this)
}if(aJ-aK>0){aE.size.height=aJ;
aE.position.top=aF.top-aA
}else{aJ=aK-az.height;
aE.size.height=aJ;
aE.position.top=aF.top+aD.height-aJ
}if(aG-aL>0){aE.size.width=aG;
aE.position.left=aF.left-aB
}else{aG=aL-az.width;
aE.size.width=aG;
aE.position.left=aF.left+aD.width-aG
}}}}}});
var C=al.ui.resizable;
/*!
 * jQuery UI Dialog 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
;
al.widget("ui.dialog",{version:"1.12.1",options:{appendTo:"body",autoOpen:true,buttons:[],classes:{"ui-dialog":"ui-corner-all","ui-dialog-titlebar":"ui-corner-all"},closeOnEscape:true,closeText:"Close",draggable:true,hide:null,height:"auto",maxHeight:null,maxWidth:null,minHeight:150,minWidth:150,modal:false,position:{my:"center",at:"center",of:window,collision:"fit",using:function(ax){var aw=al(this).css(ax).offset().top;
if(aw<0){al(this).css("top",ax.top-aw)
}}},resizable:true,show:null,title:null,width:300,beforeClose:null,close:null,drag:null,dragStart:null,dragStop:null,focus:null,open:null,resize:null,resizeStart:null,resizeStop:null},sizeRelatedOptions:{buttons:true,height:true,maxHeight:true,maxWidth:true,minHeight:true,minWidth:true,width:true},resizableRelatedOptions:{maxHeight:true,maxWidth:true,minHeight:true,minWidth:true},_create:function(){this.originalCss={display:this.element[0].style.display,width:this.element[0].style.width,minHeight:this.element[0].style.minHeight,maxHeight:this.element[0].style.maxHeight,height:this.element[0].style.height};
this.originalPosition={parent:this.element.parent(),index:this.element.parent().children().index(this.element)};
this.originalTitle=this.element.attr("title");
if(this.options.title==null&&this.originalTitle!=null){this.options.title=this.originalTitle
}if(this.options.disabled){this.options.disabled=false
}this._createWrapper();
this.element.show().removeAttr("title").appendTo(this.uiDialog);
this._addClass("ui-dialog-content","ui-widget-content");
this._createTitlebar();
this._createButtonPane();
if(this.options.draggable&&al.fn.draggable){this._makeDraggable()
}if(this.options.resizable&&al.fn.resizable){this._makeResizable()
}this._isOpen=false;
this._trackFocus()
},_init:function(){if(this.options.autoOpen){this.open()
}},_appendTo:function(){var aw=this.options.appendTo;
if(aw&&(aw.jquery||aw.nodeType)){return al(aw)
}return this.document.find(aw||"body").eq(0)
},_destroy:function(){var ax,aw=this.originalPosition;
this._untrackInstance();
this._destroyOverlay();
this.element.removeUniqueId().css(this.originalCss).detach();
this.uiDialog.remove();
if(this.originalTitle){this.element.attr("title",this.originalTitle)
}ax=aw.parent.children().eq(aw.index);
if(ax.length&&ax[0]!==this.element[0]){ax.before(this.element)
}else{aw.parent.append(this.element)
}},widget:function(){return this.uiDialog
},disable:al.noop,enable:al.noop,close:function(ax){var aw=this;
if(!this._isOpen||this._trigger("beforeClose",ax)===false){return
}this._isOpen=false;
this._focusedElement=null;
this._destroyOverlay();
this._untrackInstance();
if(!this.opener.filter(":focusable").trigger("focus").length){al.ui.safeBlur(al.ui.safeActiveElement(this.document[0]))
}this._hide(this.uiDialog,this.options.hide,function(){aw._trigger("close",ax)
})
},isOpen:function(){return this._isOpen
},moveToTop:function(){this._moveToTop()
},_moveToTop:function(aA,aw){var az=false,ay=this.uiDialog.siblings(".ui-front:visible").map(function(){return +al(this).css("z-index")
}).get(),ax=Math.max.apply(null,ay);
if(ax>=+this.uiDialog.css("z-index")){this.uiDialog.css("z-index",ax+1);
az=true
}if(az&&!aw){this._trigger("focus",aA)
}return az
},open:function(){var aw=this;
if(this._isOpen){if(this._moveToTop()){this._focusTabbable()
}return
}this._isOpen=true;
this.opener=al(al.ui.safeActiveElement(this.document[0]));
this._size();
this._position();
this._createOverlay();
this._moveToTop(null,true);
if(this.overlay){this.overlay.css("z-index",this.uiDialog.css("z-index")-1)
}this._show(this.uiDialog,this.options.show,function(){aw._focusTabbable();
aw._trigger("focus")
});
this._makeFocusTarget();
this._trigger("open")
},_focusTabbable:function(){var aw=this._focusedElement;
if(!aw){aw=this.element.find("[autofocus]")
}if(!aw.length){aw=this.element.find(":tabbable")
}if(!aw.length){aw=this.uiDialogButtonPane.find(":tabbable")
}if(!aw.length){aw=this.uiDialogTitlebarClose.filter(":tabbable")
}if(!aw.length){aw=this.uiDialog
}aw.eq(0).trigger("focus")
},_keepFocus:function(aw){function ax(){var az=al.ui.safeActiveElement(this.document[0]),ay=this.uiDialog[0]===az||al.contains(this.uiDialog[0],az);
if(!ay){this._focusTabbable()
}}aw.preventDefault();
ax.call(this);
this._delay(ax)
},_createWrapper:function(){this.uiDialog=al("<div>").hide().attr({tabIndex:-1,role:"dialog"}).appendTo(this._appendTo());
this._addClass(this.uiDialog,"ui-dialog","ui-widget ui-widget-content ui-front");
this._on(this.uiDialog,{keydown:function(ay){if(this.options.closeOnEscape&&!ay.isDefaultPrevented()&&ay.keyCode&&ay.keyCode===al.ui.keyCode.ESCAPE){ay.preventDefault();
this.close(ay);
return
}if(ay.keyCode!==al.ui.keyCode.TAB||ay.isDefaultPrevented()){return
}var ax=this.uiDialog.find(":tabbable"),az=ax.filter(":first"),aw=ax.filter(":last");
if((ay.target===aw[0]||ay.target===this.uiDialog[0])&&!ay.shiftKey){this._delay(function(){az.trigger("focus")
});
ay.preventDefault()
}else{if((ay.target===az[0]||ay.target===this.uiDialog[0])&&ay.shiftKey){this._delay(function(){aw.trigger("focus")
});
ay.preventDefault()
}}},mousedown:function(aw){if(this._moveToTop(aw)){this._focusTabbable()
}}});
if(!this.element.find("[aria-describedby]").length){this.uiDialog.attr({"aria-describedby":this.element.uniqueId().attr("id")})
}},_createTitlebar:function(){var aw;
this.uiDialogTitlebar=al("<div>");
this._addClass(this.uiDialogTitlebar,"ui-dialog-titlebar","ui-widget-header ui-helper-clearfix");
this._on(this.uiDialogTitlebar,{mousedown:function(ax){if(!al(ax.target).closest(".ui-dialog-titlebar-close")){this.uiDialog.trigger("focus")
}}});
this.uiDialogTitlebarClose=al("<button type='button'></button>").button({label:al("<a>").text(this.options.closeText).html(),icon:"ui-icon-closethick",showLabel:false}).appendTo(this.uiDialogTitlebar);
this._addClass(this.uiDialogTitlebarClose,"ui-dialog-titlebar-close");
this._on(this.uiDialogTitlebarClose,{click:function(ax){ax.preventDefault();
this.close(ax)
}});
aw=al("<span>").uniqueId().prependTo(this.uiDialogTitlebar);
this._addClass(aw,"ui-dialog-title");
this._title(aw);
this.uiDialogTitlebar.prependTo(this.uiDialog);
this.uiDialog.attr({"aria-labelledby":aw.attr("id")})
},_title:function(aw){if(this.options.title){aw.text(this.options.title)
}else{aw.html("&#160;")
}},_createButtonPane:function(){this.uiDialogButtonPane=al("<div>");
this._addClass(this.uiDialogButtonPane,"ui-dialog-buttonpane","ui-widget-content ui-helper-clearfix");
this.uiButtonSet=al("<div>").appendTo(this.uiDialogButtonPane);
this._addClass(this.uiButtonSet,"ui-dialog-buttonset");
this._createButtons()
},_createButtons:function(){var ax=this,aw=this.options.buttons;
this.uiDialogButtonPane.remove();
this.uiButtonSet.empty();
if(al.isEmptyObject(aw)||(al.isArray(aw)&&!aw.length)){this._removeClass(this.uiDialog,"ui-dialog-buttons");
return
}al.each(aw,function(ay,az){var aA,aB;
az=al.isFunction(az)?{click:az,text:ay}:az;
az=al.extend({type:"button"},az);
aA=az.click;
aB={icon:az.icon,iconPosition:az.iconPosition,showLabel:az.showLabel,icons:az.icons,text:az.text};
delete az.click;
delete az.icon;
delete az.iconPosition;
delete az.showLabel;
delete az.icons;
if(typeof az.text==="boolean"){delete az.text
}al("<button></button>",az).button(aB).appendTo(ax.uiButtonSet).on("click",function(){aA.apply(ax.element[0],arguments)
})
});
this._addClass(this.uiDialog,"ui-dialog-buttons");
this.uiDialogButtonPane.appendTo(this.uiDialog)
},_makeDraggable:function(){var ay=this,ax=this.options;
function aw(az){return{position:az.position,offset:az.offset}
}this.uiDialog.draggable({cancel:".ui-dialog-content, .ui-dialog-titlebar-close",handle:".ui-dialog-titlebar",containment:"document",start:function(az,aA){ay._addClass(al(this),"ui-dialog-dragging");
ay._blockFrames();
ay._trigger("dragStart",az,aw(aA))
},drag:function(az,aA){ay._trigger("drag",az,aw(aA))
},stop:function(az,aA){var aC=aA.offset.left-ay.document.scrollLeft(),aB=aA.offset.top-ay.document.scrollTop();
ax.position={my:"left top",at:"left"+(aC>=0?"+":"")+aC+" top"+(aB>=0?"+":"")+aB,of:ay.window};
ay._removeClass(al(this),"ui-dialog-dragging");
ay._unblockFrames();
ay._trigger("dragStop",az,aw(aA))
}})
},_makeResizable:function(){var aB=this,az=this.options,aA=az.resizable,aw=this.uiDialog.css("position"),ay=typeof aA==="string"?aA:"n,e,s,w,se,sw,ne,nw";
function ax(aC){return{originalPosition:aC.originalPosition,originalSize:aC.originalSize,position:aC.position,size:aC.size}
}this.uiDialog.resizable({cancel:".ui-dialog-content",containment:"document",alsoResize:this.element,maxWidth:az.maxWidth,maxHeight:az.maxHeight,minWidth:az.minWidth,minHeight:this._minHeight(),handles:ay,start:function(aC,aD){aB._addClass(al(this),"ui-dialog-resizing");
aB._blockFrames();
aB._trigger("resizeStart",aC,ax(aD))
},resize:function(aC,aD){aB._trigger("resize",aC,ax(aD))
},stop:function(aC,aD){var aG=aB.uiDialog.offset(),aF=aG.left-aB.document.scrollLeft(),aE=aG.top-aB.document.scrollTop();
az.height=aB.uiDialog.height();
az.width=aB.uiDialog.width();
az.position={my:"left top",at:"left"+(aF>=0?"+":"")+aF+" top"+(aE>=0?"+":"")+aE,of:aB.window};
aB._removeClass(al(this),"ui-dialog-resizing");
aB._unblockFrames();
aB._trigger("resizeStop",aC,ax(aD))
}}).css("position",aw)
},_trackFocus:function(){this._on(this.widget(),{focusin:function(aw){this._makeFocusTarget();
this._focusedElement=al(aw.target)
}})
},_makeFocusTarget:function(){this._untrackInstance();
this._trackingInstances().unshift(this)
},_untrackInstance:function(){var ax=this._trackingInstances(),aw=al.inArray(this,ax);
if(aw!==-1){ax.splice(aw,1)
}},_trackingInstances:function(){var aw=this.document.data("ui-dialog-instances");
if(!aw){aw=[];
this.document.data("ui-dialog-instances",aw)
}return aw
},_minHeight:function(){var aw=this.options;
return aw.height==="auto"?aw.minHeight:Math.min(aw.minHeight,aw.height)
},_position:function(){var aw=this.uiDialog.is(":visible");
if(!aw){this.uiDialog.show()
}this.uiDialog.position(this.options.position);
if(!aw){this.uiDialog.hide()
}},_setOptions:function(ay){var az=this,ax=false,aw={};
al.each(ay,function(aA,aB){az._setOption(aA,aB);
if(aA in az.sizeRelatedOptions){ax=true
}if(aA in az.resizableRelatedOptions){aw[aA]=aB
}});
if(ax){this._size();
this._position()
}if(this.uiDialog.is(":data(ui-resizable)")){this.uiDialog.resizable("option",aw)
}},_setOption:function(ay,az){var ax,aA,aw=this.uiDialog;
if(ay==="disabled"){return
}this._super(ay,az);
if(ay==="appendTo"){this.uiDialog.appendTo(this._appendTo())
}if(ay==="buttons"){this._createButtons()
}if(ay==="closeText"){this.uiDialogTitlebarClose.button({label:al("<a>").text(""+this.options.closeText).html()})
}if(ay==="draggable"){ax=aw.is(":data(ui-draggable)");
if(ax&&!az){aw.draggable("destroy")
}if(!ax&&az){this._makeDraggable()
}}if(ay==="position"){this._position()
}if(ay==="resizable"){aA=aw.is(":data(ui-resizable)");
if(aA&&!az){aw.resizable("destroy")
}if(aA&&typeof az==="string"){aw.resizable("option","handles",az)
}if(!aA&&az!==false){this._makeResizable()
}}if(ay==="title"){this._title(this.uiDialogTitlebar.find(".ui-dialog-title"))
}},_size:function(){var aw,ay,az,ax=this.options;
this.element.show().css({width:"auto",minHeight:0,maxHeight:"none",height:0});
if(ax.minWidth>ax.width){ax.width=ax.minWidth
}aw=this.uiDialog.css({height:"auto",width:ax.width}).outerHeight();
ay=Math.max(0,ax.minHeight-aw);
az=typeof ax.maxHeight==="number"?Math.max(0,ax.maxHeight-aw):"none";
if(ax.height==="auto"){this.element.css({minHeight:ay,maxHeight:az,height:"auto"})
}else{this.element.height(Math.max(0,ax.height-aw))
}if(this.uiDialog.is(":data(ui-resizable)")){this.uiDialog.resizable("option","minHeight",this._minHeight())
}},_blockFrames:function(){this.iframeBlocks=this.document.find("iframe").map(function(){var aw=al(this);
return al("<div>").css({position:"absolute",width:aw.outerWidth(),height:aw.outerHeight()}).appendTo(aw.parent()).offset(aw.offset())[0]
})
},_unblockFrames:function(){if(this.iframeBlocks){this.iframeBlocks.remove();
delete this.iframeBlocks
}},_allowInteraction:function(aw){if(al(aw.target).closest(".ui-dialog").length){return true
}return !!al(aw.target).closest(".ui-datepicker").length
},_createOverlay:function(){if(!this.options.modal){return
}var aw=true;
this._delay(function(){aw=false
});
if(!this.document.data("ui-dialog-overlays")){this._on(this.document,{focusin:function(ax){if(aw){return
}if(!this._allowInteraction(ax)){ax.preventDefault();
this._trackingInstances()[0]._focusTabbable()
}}})
}this.overlay=al("<div>").appendTo(this._appendTo());
this._addClass(this.overlay,null,"ui-widget-overlay ui-front");
this._on(this.overlay,{mousedown:"_keepFocus"});
this.document.data("ui-dialog-overlays",(this.document.data("ui-dialog-overlays")||0)+1)
},_destroyOverlay:function(){if(!this.options.modal){return
}if(this.overlay){var aw=this.document.data("ui-dialog-overlays")-1;
if(!aw){this._off(this.document,"focusin");
this.document.removeData("ui-dialog-overlays")
}else{this.document.data("ui-dialog-overlays",aw)
}this.overlay.remove();
this.overlay=null
}}});
if(al.uiBackCompat!==false){al.widget("ui.dialog",al.ui.dialog,{options:{dialogClass:""},_createWrapper:function(){this._super();
this.uiDialog.addClass(this.options.dialogClass)
},_setOption:function(aw,ax){if(aw==="dialogClass"){this.uiDialog.removeClass(this.options.dialogClass).addClass(ax)
}this._superApply(arguments)
}})
}var ad=al.ui.dialog;
/*!
 * jQuery UI Droppable 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
;
al.widget("ui.droppable",{version:"1.12.1",widgetEventPrefix:"drop",options:{accept:"*",addClasses:true,greedy:false,scope:"default",tolerance:"intersect",activate:null,deactivate:null,drop:null,out:null,over:null},_create:function(){var ax,ay=this.options,aw=ay.accept;
this.isover=false;
this.isout=true;
this.accept=al.isFunction(aw)?aw:function(az){return az.is(aw)
};
this.proportions=function(){if(arguments.length){ax=arguments[0]
}else{return ax?ax:ax={width:this.element[0].offsetWidth,height:this.element[0].offsetHeight}
}};
this._addToManager(ay.scope);
ay.addClasses&&this._addClass("ui-droppable")
},_addToManager:function(aw){al.ui.ddmanager.droppables[aw]=al.ui.ddmanager.droppables[aw]||[];
al.ui.ddmanager.droppables[aw].push(this)
},_splice:function(aw){var ax=0;
for(;
ax<aw.length;
ax++){if(aw[ax]===this){aw.splice(ax,1)
}}},_destroy:function(){var aw=al.ui.ddmanager.droppables[this.options.scope];
this._splice(aw)
},_setOption:function(ax,ay){if(ax==="accept"){this.accept=al.isFunction(ay)?ay:function(az){return az.is(ay)
}
}else{if(ax==="scope"){var aw=al.ui.ddmanager.droppables[this.options.scope];
this._splice(aw);
this._addToManager(ay)
}}this._super(ax,ay)
},_activate:function(ax){var aw=al.ui.ddmanager.current;
this._addActiveClass();
if(aw){this._trigger("activate",ax,this.ui(aw))
}},_deactivate:function(ax){var aw=al.ui.ddmanager.current;
this._removeActiveClass();
if(aw){this._trigger("deactivate",ax,this.ui(aw))
}},_over:function(ax){var aw=al.ui.ddmanager.current;
if(!aw||(aw.currentItem||aw.element)[0]===this.element[0]){return
}if(this.accept.call(this.element[0],(aw.currentItem||aw.element))){this._addHoverClass();
this._trigger("over",ax,this.ui(aw))
}},_out:function(ax){var aw=al.ui.ddmanager.current;
if(!aw||(aw.currentItem||aw.element)[0]===this.element[0]){return
}if(this.accept.call(this.element[0],(aw.currentItem||aw.element))){this._removeHoverClass();
this._trigger("out",ax,this.ui(aw))
}},_drop:function(ax,ay){var aw=ay||al.ui.ddmanager.current,az=false;
if(!aw||(aw.currentItem||aw.element)[0]===this.element[0]){return false
}this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function(){var aA=al(this).droppable("instance");
if(aA.options.greedy&&!aA.options.disabled&&aA.options.scope===aw.options.scope&&aA.accept.call(aA.element[0],(aw.currentItem||aw.element))&&t(aw,al.extend(aA,{offset:aA.element.offset()}),aA.options.tolerance,ax)){az=true;
return false
}});
if(az){return false
}if(this.accept.call(this.element[0],(aw.currentItem||aw.element))){this._removeActiveClass();
this._removeHoverClass();
this._trigger("drop",ax,this.ui(aw));
return this.element
}return false
},ui:function(aw){return{draggable:(aw.currentItem||aw.element),helper:aw.helper,position:aw.position,offset:aw.positionAbs}
},_addHoverClass:function(){this._addClass("ui-droppable-hover")
},_removeHoverClass:function(){this._removeClass("ui-droppable-hover")
},_addActiveClass:function(){this._addClass("ui-droppable-active")
},_removeActiveClass:function(){this._removeClass("ui-droppable-active")
}});
var t=al.ui.intersect=(function(){function aw(ay,ax,az){return(ay>=ax)&&(ay<(ax+az))
}return function(aI,aC,aG,ay){if(!aC.offset){return false
}var aA=(aI.positionAbs||aI.position.absolute).left+aI.margins.left,aF=(aI.positionAbs||aI.position.absolute).top+aI.margins.top,az=aA+aI.helperProportions.width,aE=aF+aI.helperProportions.height,aB=aC.offset.left,aH=aC.offset.top,ax=aB+aC.proportions().width,aD=aH+aC.proportions().height;
switch(aG){case"fit":return(aB<=aA&&az<=ax&&aH<=aF&&aE<=aD);
case"intersect":return(aB<aA+(aI.helperProportions.width/2)&&az-(aI.helperProportions.width/2)<ax&&aH<aF+(aI.helperProportions.height/2)&&aE-(aI.helperProportions.height/2)<aD);
case"pointer":return aw(ay.pageY,aH,aC.proportions().height)&&aw(ay.pageX,aB,aC.proportions().width);
case"touch":return((aF>=aH&&aF<=aD)||(aE>=aH&&aE<=aD)||(aF<aH&&aE>aD))&&((aA>=aB&&aA<=ax)||(az>=aB&&az<=ax)||(aA<aB&&az>ax));
default:return false
}}
})();
al.ui.ddmanager={current:null,droppables:{"default":[]},prepareOffsets:function(az,aB){var ay,ax,aw=al.ui.ddmanager.droppables[az.options.scope]||[],aA=aB?aB.type:null,aC=(az.currentItem||az.element).find(":data(ui-droppable)").addBack();
droppablesLoop:for(ay=0;
ay<aw.length;
ay++){if(aw[ay].options.disabled||(az&&!aw[ay].accept.call(aw[ay].element[0],(az.currentItem||az.element)))){continue
}for(ax=0;
ax<aC.length;
ax++){if(aC[ax]===aw[ay].element[0]){aw[ay].proportions().height=0;
continue droppablesLoop
}}aw[ay].visible=aw[ay].element.css("display")!=="none";
if(!aw[ay].visible){continue
}if(aA==="mousedown"){aw[ay]._activate.call(aw[ay],aB)
}aw[ay].offset=aw[ay].element.offset();
aw[ay].proportions({width:aw[ay].element[0].offsetWidth,height:aw[ay].element[0].offsetHeight})
}},drop:function(aw,ax){var ay=false;
al.each((al.ui.ddmanager.droppables[aw.options.scope]||[]).slice(),function(){if(!this.options){return
}if(!this.options.disabled&&this.visible&&t(aw,this,this.options.tolerance,ax)){ay=this._drop.call(this,ax)||ay
}if(!this.options.disabled&&this.visible&&this.accept.call(this.element[0],(aw.currentItem||aw.element))){this.isout=true;
this.isover=false;
this._deactivate.call(this,ax)
}});
return ay
},dragStart:function(aw,ax){aw.element.parentsUntil("body").on("scroll.droppable",function(){if(!aw.options.refreshPositions){al.ui.ddmanager.prepareOffsets(aw,ax)
}})
},drag:function(aw,ax){if(aw.options.refreshPositions){al.ui.ddmanager.prepareOffsets(aw,ax)
}al.each(al.ui.ddmanager.droppables[aw.options.scope]||[],function(){if(this.options.disabled||this.greedyChild||!this.visible){return
}var aB,az,ay,aA=t(aw,this,this.options.tolerance,ax),aC=!aA&&this.isover?"isout":(aA&&!this.isover?"isover":null);
if(!aC){return
}if(this.options.greedy){az=this.options.scope;
ay=this.element.parents(":data(ui-droppable)").filter(function(){return al(this).droppable("instance").options.scope===az
});
if(ay.length){aB=al(ay[0]).droppable("instance");
aB.greedyChild=(aC==="isover")
}}if(aB&&aC==="isover"){aB.isover=false;
aB.isout=true;
aB._out.call(aB,ax)
}this[aC]=true;
this[aC==="isout"?"isover":"isout"]=false;
this[aC==="isover"?"_over":"_out"].call(this,ax);
if(aB&&aC==="isout"){aB.isout=false;
aB.isover=true;
aB._over.call(aB,ax)
}})
},dragStop:function(aw,ax){aw.element.parentsUntil("body").off("scroll.droppable");
if(!aw.options.refreshPositions){al.ui.ddmanager.prepareOffsets(aw,ax)
}}};
if(al.uiBackCompat!==false){al.widget("ui.droppable",al.ui.droppable,{options:{hoverClass:false,activeClass:false},_addActiveClass:function(){this._super();
if(this.options.activeClass){this.element.addClass(this.options.activeClass)
}},_removeActiveClass:function(){this._super();
if(this.options.activeClass){this.element.removeClass(this.options.activeClass)
}},_addHoverClass:function(){this._super();
if(this.options.hoverClass){this.element.addClass(this.options.hoverClass)
}},_removeHoverClass:function(){this._super();
if(this.options.hoverClass){this.element.removeClass(this.options.hoverClass)
}}})
}var X=al.ui.droppable;
/*!
 * jQuery UI Progressbar 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
;
var Z=al.widget("ui.progressbar",{version:"1.12.1",options:{classes:{"ui-progressbar":"ui-corner-all","ui-progressbar-value":"ui-corner-left","ui-progressbar-complete":"ui-corner-right"},max:100,value:0,change:null,complete:null},min:0,_create:function(){this.oldValue=this.options.value=this._constrainedValue();
this.element.attr({role:"progressbar","aria-valuemin":this.min});
this._addClass("ui-progressbar","ui-widget ui-widget-content");
this.valueDiv=al("<div>").appendTo(this.element);
this._addClass(this.valueDiv,"ui-progressbar-value","ui-widget-header");
this._refreshValue()
},_destroy:function(){this.element.removeAttr("role aria-valuemin aria-valuemax aria-valuenow");
this.valueDiv.remove()
},value:function(aw){if(aw===undefined){return this.options.value
}this.options.value=this._constrainedValue(aw);
this._refreshValue()
},_constrainedValue:function(aw){if(aw===undefined){aw=this.options.value
}this.indeterminate=aw===false;
if(typeof aw!=="number"){aw=0
}return this.indeterminate?false:Math.min(this.options.max,Math.max(this.min,aw))
},_setOptions:function(aw){var ax=aw.value;
delete aw.value;
this._super(aw);
this.options.value=this._constrainedValue(ax);
this._refreshValue()
},_setOption:function(aw,ax){if(aw==="max"){ax=Math.max(this.min,ax)
}this._super(aw,ax)
},_setOptionDisabled:function(aw){this._super(aw);
this.element.attr("aria-disabled",aw);
this._toggleClass(null,"ui-state-disabled",!!aw)
},_percentage:function(){return this.indeterminate?100:100*(this.options.value-this.min)/(this.options.max-this.min)
},_refreshValue:function(){var ax=this.options.value,aw=this._percentage();
this.valueDiv.toggle(this.indeterminate||ax>this.min).width(aw.toFixed(0)+"%");
this._toggleClass(this.valueDiv,"ui-progressbar-complete",null,ax===this.options.max)._toggleClass("ui-progressbar-indeterminate",null,this.indeterminate);
if(this.indeterminate){this.element.removeAttr("aria-valuenow");
if(!this.overlayDiv){this.overlayDiv=al("<div>").appendTo(this.valueDiv);
this._addClass(this.overlayDiv,"ui-progressbar-overlay")
}}else{this.element.attr({"aria-valuemax":this.options.max,"aria-valuenow":ax});
if(this.overlayDiv){this.overlayDiv.remove();
this.overlayDiv=null
}}if(this.oldValue!==ax){this.oldValue=ax;
this._trigger("change")
}if(ax===this.options.max){this._trigger("complete")
}}});
/*!
 * jQuery UI Selectable 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
;
var s=al.widget("ui.selectable",al.ui.mouse,{version:"1.12.1",options:{appendTo:"body",autoRefresh:true,distance:0,filter:"*",tolerance:"touch",selected:null,selecting:null,start:null,stop:null,unselected:null,unselecting:null},_create:function(){var aw=this;
this._addClass("ui-selectable");
this.dragged=false;
this.refresh=function(){aw.elementPos=al(aw.element[0]).offset();
aw.selectees=al(aw.options.filter,aw.element[0]);
aw._addClass(aw.selectees,"ui-selectee");
aw.selectees.each(function(){var ay=al(this),ax=ay.offset(),az={left:ax.left-aw.elementPos.left,top:ax.top-aw.elementPos.top};
al.data(this,"selectable-item",{element:this,$element:ay,left:az.left,top:az.top,right:az.left+ay.outerWidth(),bottom:az.top+ay.outerHeight(),startselected:false,selected:ay.hasClass("ui-selected"),selecting:ay.hasClass("ui-selecting"),unselecting:ay.hasClass("ui-unselecting")})
})
};
this.refresh();
this._mouseInit();
this.helper=al("<div>");
this._addClass(this.helper,"ui-selectable-helper")
},_destroy:function(){this.selectees.removeData("selectable-item");
this._mouseDestroy()
},_mouseStart:function(ay){var ax=this,aw=this.options;
this.opos=[ay.pageX,ay.pageY];
this.elementPos=al(this.element[0]).offset();
if(this.options.disabled){return
}this.selectees=al(aw.filter,this.element[0]);
this._trigger("start",ay);
al(aw.appendTo).append(this.helper);
this.helper.css({left:ay.pageX,top:ay.pageY,width:0,height:0});
if(aw.autoRefresh){this.refresh()
}this.selectees.filter(".ui-selected").each(function(){var az=al.data(this,"selectable-item");
az.startselected=true;
if(!ay.metaKey&&!ay.ctrlKey){ax._removeClass(az.$element,"ui-selected");
az.selected=false;
ax._addClass(az.$element,"ui-unselecting");
az.unselecting=true;
ax._trigger("unselecting",ay,{unselecting:az.element})
}});
al(ay.target).parents().addBack().each(function(){var az,aA=al.data(this,"selectable-item");
if(aA){az=(!ay.metaKey&&!ay.ctrlKey)||!aA.$element.hasClass("ui-selected");
ax._removeClass(aA.$element,az?"ui-unselecting":"ui-selected")._addClass(aA.$element,az?"ui-selecting":"ui-unselecting");
aA.unselecting=!az;
aA.selecting=az;
aA.selected=az;
if(az){ax._trigger("selecting",ay,{selecting:aA.element})
}else{ax._trigger("unselecting",ay,{unselecting:aA.element})
}return false
}})
},_mouseDrag:function(aD){this.dragged=true;
if(this.options.disabled){return
}var aA,aC=this,ay=this.options,ax=this.opos[0],aB=this.opos[1],aw=aD.pageX,az=aD.pageY;
if(ax>aw){aA=aw;
aw=ax;
ax=aA
}if(aB>az){aA=az;
az=aB;
aB=aA
}this.helper.css({left:ax,top:aB,width:aw-ax,height:az-aB});
this.selectees.each(function(){var aE=al.data(this,"selectable-item"),aF=false,aG={};
if(!aE||aE.element===aC.element[0]){return
}aG.left=aE.left+aC.elementPos.left;
aG.right=aE.right+aC.elementPos.left;
aG.top=aE.top+aC.elementPos.top;
aG.bottom=aE.bottom+aC.elementPos.top;
if(ay.tolerance==="touch"){aF=(!(aG.left>aw||aG.right<ax||aG.top>az||aG.bottom<aB))
}else{if(ay.tolerance==="fit"){aF=(aG.left>ax&&aG.right<aw&&aG.top>aB&&aG.bottom<az)
}}if(aF){if(aE.selected){aC._removeClass(aE.$element,"ui-selected");
aE.selected=false
}if(aE.unselecting){aC._removeClass(aE.$element,"ui-unselecting");
aE.unselecting=false
}if(!aE.selecting){aC._addClass(aE.$element,"ui-selecting");
aE.selecting=true;
aC._trigger("selecting",aD,{selecting:aE.element})
}}else{if(aE.selecting){if((aD.metaKey||aD.ctrlKey)&&aE.startselected){aC._removeClass(aE.$element,"ui-selecting");
aE.selecting=false;
aC._addClass(aE.$element,"ui-selected");
aE.selected=true
}else{aC._removeClass(aE.$element,"ui-selecting");
aE.selecting=false;
if(aE.startselected){aC._addClass(aE.$element,"ui-unselecting");
aE.unselecting=true
}aC._trigger("unselecting",aD,{unselecting:aE.element})
}}if(aE.selected){if(!aD.metaKey&&!aD.ctrlKey&&!aE.startselected){aC._removeClass(aE.$element,"ui-selected");
aE.selected=false;
aC._addClass(aE.$element,"ui-unselecting");
aE.unselecting=true;
aC._trigger("unselecting",aD,{unselecting:aE.element})
}}}});
return false
},_mouseStop:function(ax){var aw=this;
this.dragged=false;
al(".ui-unselecting",this.element[0]).each(function(){var ay=al.data(this,"selectable-item");
aw._removeClass(ay.$element,"ui-unselecting");
ay.unselecting=false;
ay.startselected=false;
aw._trigger("unselected",ax,{unselected:ay.element})
});
al(".ui-selecting",this.element[0]).each(function(){var ay=al.data(this,"selectable-item");
aw._removeClass(ay.$element,"ui-selecting")._addClass(ay.$element,"ui-selected");
ay.selecting=false;
ay.selected=true;
ay.startselected=true;
aw._trigger("selected",ax,{selected:ay.element})
});
this._trigger("stop",ax);
this.helper.remove();
return false
}});
/*!
 * jQuery UI Selectmenu 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
;
var e=al.widget("ui.selectmenu",[al.ui.formResetMixin,{version:"1.12.1",defaultElement:"<select>",options:{appendTo:null,classes:{"ui-selectmenu-button-open":"ui-corner-top","ui-selectmenu-button-closed":"ui-corner-all"},disabled:null,icons:{button:"ui-icon-triangle-1-s"},position:{my:"left top",at:"left bottom",collision:"none"},width:false,change:null,close:null,focus:null,open:null,select:null},_create:function(){var aw=this.element.uniqueId().attr("id");
this.ids={element:aw,button:aw+"-button",menu:aw+"-menu"};
this._drawButton();
this._drawMenu();
this._bindFormResetHandler();
this._rendered=false;
this.menuItems=al()
},_drawButton:function(){var aw,ay=this,ax=this._parseOption(this.element.find("option:selected"),this.element[0].selectedIndex);
this.labels=this.element.labels().attr("for",this.ids.button);
this._on(this.labels,{click:function(az){this.button.focus();
az.preventDefault()
}});
this.element.hide();
this.button=al("<span>",{tabindex:this.options.disabled?-1:0,id:this.ids.button,role:"combobox","aria-expanded":"false","aria-autocomplete":"list","aria-owns":this.ids.menu,"aria-haspopup":"true",title:this.element.attr("title")}).insertAfter(this.element);
this._addClass(this.button,"ui-selectmenu-button ui-selectmenu-button-closed","ui-button ui-widget");
aw=al("<span>").appendTo(this.button);
this._addClass(aw,"ui-selectmenu-icon","ui-icon "+this.options.icons.button);
this.buttonItem=this._renderButtonItem(ax).appendTo(this.button);
if(this.options.width!==false){this._resizeButton()
}this._on(this.button,this._buttonEvents);
this.button.one("focusin",function(){if(!ay._rendered){ay._refreshMenu()
}})
},_drawMenu:function(){var aw=this;
this.menu=al("<ul>",{"aria-hidden":"true","aria-labelledby":this.ids.button,id:this.ids.menu});
this.menuWrap=al("<div>").append(this.menu);
this._addClass(this.menuWrap,"ui-selectmenu-menu","ui-front");
this.menuWrap.appendTo(this._appendTo());
this.menuInstance=this.menu.menu({classes:{"ui-menu":"ui-corner-bottom"},role:"listbox",select:function(ax,ay){ax.preventDefault();
aw._setSelection();
aw._select(ay.item.data("ui-selectmenu-item"),ax)
},focus:function(ay,az){var ax=az.item.data("ui-selectmenu-item");
if(aw.focusIndex!=null&&ax.index!==aw.focusIndex){aw._trigger("focus",ay,{item:ax});
if(!aw.isOpen){aw._select(ax,ay)
}}aw.focusIndex=ax.index;
aw.button.attr("aria-activedescendant",aw.menuItems.eq(ax.index).attr("id"))
}}).menu("instance");
this.menuInstance._off(this.menu,"mouseleave");
this.menuInstance._closeOnDocumentClick=function(){return false
};
this.menuInstance._isDivider=function(){return false
}
},refresh:function(){this._refreshMenu();
this.buttonItem.replaceWith(this.buttonItem=this._renderButtonItem(this._getSelectedItem().data("ui-selectmenu-item")||{}));
if(this.options.width===null){this._resizeButton()
}},_refreshMenu:function(){var ax,aw=this.element.find("option");
this.menu.empty();
this._parseOptions(aw);
this._renderMenu(this.menu,this.items);
this.menuInstance.refresh();
this.menuItems=this.menu.find("li").not(".ui-selectmenu-optgroup").find(".ui-menu-item-wrapper");
this._rendered=true;
if(!aw.length){return
}ax=this._getSelectedItem();
this.menuInstance.focus(null,ax);
this._setAria(ax.data("ui-selectmenu-item"));
this._setOption("disabled",this.element.prop("disabled"))
},open:function(aw){if(this.options.disabled){return
}if(!this._rendered){this._refreshMenu()
}else{this._removeClass(this.menu.find(".ui-state-active"),null,"ui-state-active");
this.menuInstance.focus(null,this._getSelectedItem())
}if(!this.menuItems.length){return
}this.isOpen=true;
this._toggleAttr();
this._resizeMenu();
this._position();
this._on(this.document,this._documentClick);
this._trigger("open",aw)
},_position:function(){this.menuWrap.position(al.extend({of:this.button},this.options.position))
},close:function(aw){if(!this.isOpen){return
}this.isOpen=false;
this._toggleAttr();
this.range=null;
this._off(this.document);
this._trigger("close",aw)
},widget:function(){return this.button
},menuWidget:function(){return this.menu
},_renderButtonItem:function(ax){var aw=al("<span>");
this._setText(aw,ax.label);
this._addClass(aw,"ui-selectmenu-text");
return aw
},_renderMenu:function(ay,ax){var az=this,aw="";
al.each(ax,function(aB,aC){var aA;
if(aC.optgroup!==aw){aA=al("<li>",{text:aC.optgroup});
az._addClass(aA,"ui-selectmenu-optgroup","ui-menu-divider"+(aC.element.parent("optgroup").prop("disabled")?" ui-state-disabled":""));
aA.appendTo(ay);
aw=aC.optgroup
}az._renderItemData(ay,aC)
})
},_renderItemData:function(aw,ax){return this._renderItem(aw,ax).data("ui-selectmenu-item",ax)
},_renderItem:function(ax,ay){var aw=al("<li>"),az=al("<div>",{title:ay.element.attr("title")});
if(ay.disabled){this._addClass(aw,null,"ui-state-disabled")
}this._setText(az,ay.label);
return aw.append(az).appendTo(ax)
},_setText:function(aw,ax){if(ax){aw.text(ax)
}else{aw.html("&#160;")
}},_move:function(aA,az){var ay,ax,aw=".ui-menu-item";
if(this.isOpen){ay=this.menuItems.eq(this.focusIndex).parent("li")
}else{ay=this.menuItems.eq(this.element[0].selectedIndex).parent("li");
aw+=":not(.ui-state-disabled)"
}if(aA==="first"||aA==="last"){ax=ay[aA==="first"?"prevAll":"nextAll"](aw).eq(-1)
}else{ax=ay[aA+"All"](aw).eq(0)
}if(ax.length){this.menuInstance.focus(az,ax)
}},_getSelectedItem:function(){return this.menuItems.eq(this.element[0].selectedIndex).parent("li")
},_toggle:function(aw){this[this.isOpen?"close":"open"](aw)
},_setSelection:function(){var aw;
if(!this.range){return
}if(window.getSelection){aw=window.getSelection();
aw.removeAllRanges();
aw.addRange(this.range)
}else{this.range.select()
}this.button.focus()
},_documentClick:{mousedown:function(aw){if(!this.isOpen){return
}if(!al(aw.target).closest(".ui-selectmenu-menu, #"+al.ui.escapeSelector(this.ids.button)).length){this.close(aw)
}}},_buttonEvents:{mousedown:function(){var aw;
if(window.getSelection){aw=window.getSelection();
if(aw.rangeCount){this.range=aw.getRangeAt(0)
}}else{this.range=document.selection.createRange()
}},click:function(aw){this._setSelection();
this._toggle(aw)
},keydown:function(ax){var aw=true;
switch(ax.keyCode){case al.ui.keyCode.TAB:case al.ui.keyCode.ESCAPE:this.close(ax);
aw=false;
break;
case al.ui.keyCode.ENTER:if(this.isOpen){this._selectFocusedItem(ax)
}break;
case al.ui.keyCode.UP:if(ax.altKey){this._toggle(ax)
}else{this._move("prev",ax)
}break;
case al.ui.keyCode.DOWN:if(ax.altKey){this._toggle(ax)
}else{this._move("next",ax)
}break;
case al.ui.keyCode.SPACE:if(this.isOpen){this._selectFocusedItem(ax)
}else{this._toggle(ax)
}break;
case al.ui.keyCode.LEFT:this._move("prev",ax);
break;
case al.ui.keyCode.RIGHT:this._move("next",ax);
break;
case al.ui.keyCode.HOME:case al.ui.keyCode.PAGE_UP:this._move("first",ax);
break;
case al.ui.keyCode.END:case al.ui.keyCode.PAGE_DOWN:this._move("last",ax);
break;
default:this.menu.trigger(ax);
aw=false
}if(aw){ax.preventDefault()
}}},_selectFocusedItem:function(ax){var aw=this.menuItems.eq(this.focusIndex).parent("li");
if(!aw.hasClass("ui-state-disabled")){this._select(aw.data("ui-selectmenu-item"),ax)
}},_select:function(ax,aw){var ay=this.element[0].selectedIndex;
this.element[0].selectedIndex=ax.index;
this.buttonItem.replaceWith(this.buttonItem=this._renderButtonItem(ax));
this._setAria(ax);
this._trigger("select",aw,{item:ax});
if(ax.index!==ay){this._trigger("change",aw,{item:ax})
}this.close(aw)
},_setAria:function(aw){var ax=this.menuItems.eq(aw.index).attr("id");
this.button.attr({"aria-labelledby":ax,"aria-activedescendant":ax});
this.menu.attr("aria-activedescendant",ax)
},_setOption:function(aw,ay){if(aw==="icons"){var ax=this.button.find("span.ui-icon");
this._removeClass(ax,null,this.options.icons.button)._addClass(ax,null,ay.button)
}this._super(aw,ay);
if(aw==="appendTo"){this.menuWrap.appendTo(this._appendTo())
}if(aw==="width"){this._resizeButton()
}},_setOptionDisabled:function(aw){this._super(aw);
this.menuInstance.option("disabled",aw);
this.button.attr("aria-disabled",aw);
this._toggleClass(this.button,null,"ui-state-disabled",aw);
this.element.prop("disabled",aw);
if(aw){this.button.attr("tabindex",-1);
this.close()
}else{this.button.attr("tabindex",0)
}},_appendTo:function(){var aw=this.options.appendTo;
if(aw){aw=aw.jquery||aw.nodeType?al(aw):this.document.find(aw).eq(0)
}if(!aw||!aw[0]){aw=this.element.closest(".ui-front, dialog")
}if(!aw.length){aw=this.document[0].body
}return aw
},_toggleAttr:function(){this.button.attr("aria-expanded",this.isOpen);
this._removeClass(this.button,"ui-selectmenu-button-"+(this.isOpen?"closed":"open"))._addClass(this.button,"ui-selectmenu-button-"+(this.isOpen?"open":"closed"))._toggleClass(this.menuWrap,"ui-selectmenu-open",null,this.isOpen);
this.menu.attr("aria-hidden",!this.isOpen)
},_resizeButton:function(){var aw=this.options.width;
if(aw===false){this.button.css("width","");
return
}if(aw===null){aw=this.element.show().outerWidth();
this.element.hide()
}this.button.outerWidth(aw)
},_resizeMenu:function(){this.menu.outerWidth(Math.max(this.button.outerWidth(),this.menu.width("").outerWidth()+1))
},_getCreateOptions:function(){var aw=this._super();
aw.disabled=this.element.prop("disabled");
return aw
},_parseOptions:function(aw){var ax=this,ay=[];
aw.each(function(az,aA){ay.push(ax._parseOption(al(aA),az))
});
this.items=ay
},_parseOption:function(ay,ax){var aw=ay.parent("optgroup");
return{element:ay,index:ax,value:ay.val(),label:ay.text(),optgroup:aw.attr("label")||"",disabled:aw.prop("disabled")||ay.prop("disabled")}
},_destroy:function(){this._unbindFormResetHandler();
this.menuWrap.remove();
this.button.remove();
this.element.show();
this.element.removeUniqueId();
this.labels.attr("for",this.ids.element)
}}]);
/*!
 * jQuery UI Slider 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
;
var R=al.widget("ui.slider",al.ui.mouse,{version:"1.12.1",widgetEventPrefix:"slide",options:{animate:false,classes:{"ui-slider":"ui-corner-all","ui-slider-handle":"ui-corner-all","ui-slider-range":"ui-corner-all ui-widget-header"},distance:0,max:100,min:0,orientation:"horizontal",range:false,step:1,value:0,values:null,change:null,slide:null,start:null,stop:null},numPages:5,_create:function(){this._keySliding=false;
this._mouseSliding=false;
this._animateOff=true;
this._handleIndex=null;
this._detectOrientation();
this._mouseInit();
this._calculateNewMax();
this._addClass("ui-slider ui-slider-"+this.orientation,"ui-widget ui-widget-content");
this._refresh();
this._animateOff=false
},_refresh:function(){this._createRange();
this._createHandles();
this._setupEvents();
this._refreshValue()
},_createHandles:function(){var az,aw,ax=this.options,aB=this.element.find(".ui-slider-handle"),aA="<span tabindex='0'></span>",ay=[];
aw=(ax.values&&ax.values.length)||1;
if(aB.length>aw){aB.slice(aw).remove();
aB=aB.slice(0,aw)
}for(az=aB.length;
az<aw;
az++){ay.push(aA)
}this.handles=aB.add(al(ay.join("")).appendTo(this.element));
this._addClass(this.handles,"ui-slider-handle","ui-state-default");
this.handle=this.handles.eq(0);
this.handles.each(function(aC){al(this).data("ui-slider-handle-index",aC).attr("tabIndex",0)
})
},_createRange:function(){var aw=this.options;
if(aw.range){if(aw.range===true){if(!aw.values){aw.values=[this._valueMin(),this._valueMin()]
}else{if(aw.values.length&&aw.values.length!==2){aw.values=[aw.values[0],aw.values[0]]
}else{if(al.isArray(aw.values)){aw.values=aw.values.slice(0)
}}}}if(!this.range||!this.range.length){this.range=al("<div>").appendTo(this.element);
this._addClass(this.range,"ui-slider-range")
}else{this._removeClass(this.range,"ui-slider-range-min ui-slider-range-max");
this.range.css({left:"",bottom:""})
}if(aw.range==="min"||aw.range==="max"){this._addClass(this.range,"ui-slider-range-"+aw.range)
}}else{if(this.range){this.range.remove()
}this.range=null
}},_setupEvents:function(){this._off(this.handles);
this._on(this.handles,this._handleEvents);
this._hoverable(this.handles);
this._focusable(this.handles)
},_destroy:function(){this.handles.remove();
if(this.range){this.range.remove()
}this._mouseDestroy()
},_mouseCapture:function(ay){var aC,aF,ax,aA,aE,aG,aB,aw,aD=this,az=this.options;
if(az.disabled){return false
}this.elementSize={width:this.element.outerWidth(),height:this.element.outerHeight()};
this.elementOffset=this.element.offset();
aC={x:ay.pageX,y:ay.pageY};
aF=this._normValueFromMouse(aC);
ax=this._valueMax()-this._valueMin()+1;
this.handles.each(function(aH){var aI=Math.abs(aF-aD.values(aH));
if((ax>aI)||(ax===aI&&(aH===aD._lastChangedValue||aD.values(aH)===az.min))){ax=aI;
aA=al(this);
aE=aH
}});
aG=this._start(ay,aE);
if(aG===false){return false
}this._mouseSliding=true;
this._handleIndex=aE;
this._addClass(aA,null,"ui-state-active");
aA.trigger("focus");
aB=aA.offset();
aw=!al(ay.target).parents().addBack().is(".ui-slider-handle");
this._clickOffset=aw?{left:0,top:0}:{left:ay.pageX-aB.left-(aA.width()/2),top:ay.pageY-aB.top-(aA.height()/2)-(parseInt(aA.css("borderTopWidth"),10)||0)-(parseInt(aA.css("borderBottomWidth"),10)||0)+(parseInt(aA.css("marginTop"),10)||0)};
if(!this.handles.hasClass("ui-state-hover")){this._slide(ay,aE,aF)
}this._animateOff=true;
return true
},_mouseStart:function(){return true
},_mouseDrag:function(ay){var aw={x:ay.pageX,y:ay.pageY},ax=this._normValueFromMouse(aw);
this._slide(ay,this._handleIndex,ax);
return false
},_mouseStop:function(aw){this._removeClass(this.handles,null,"ui-state-active");
this._mouseSliding=false;
this._stop(aw,this._handleIndex);
this._change(aw,this._handleIndex);
this._handleIndex=null;
this._clickOffset=null;
this._animateOff=false;
return false
},_detectOrientation:function(){this.orientation=(this.options.orientation==="vertical")?"vertical":"horizontal"
},_normValueFromMouse:function(ax){var aw,aA,az,ay,aB;
if(this.orientation==="horizontal"){aw=this.elementSize.width;
aA=ax.x-this.elementOffset.left-(this._clickOffset?this._clickOffset.left:0)
}else{aw=this.elementSize.height;
aA=ax.y-this.elementOffset.top-(this._clickOffset?this._clickOffset.top:0)
}az=(aA/aw);
if(az>1){az=1
}if(az<0){az=0
}if(this.orientation==="vertical"){az=1-az
}ay=this._valueMax()-this._valueMin();
aB=this._valueMin()+az*ay;
return this._trimAlignValue(aB)
},_uiHash:function(ay,az,aw){var ax={handle:this.handles[ay],handleIndex:ay,value:az!==undefined?az:this.value()};
if(this._hasMultipleValues()){ax.value=az!==undefined?az:this.values(ay);
ax.values=aw||this.values()
}return ax
},_hasMultipleValues:function(){return this.options.values&&this.options.values.length
},_start:function(ax,aw){return this._trigger("start",ax,this._uiHash(aw))
},_slide:function(aB,az,ay){var aC,aw,aA=this.value(),ax=this.values();
if(this._hasMultipleValues()){aw=this.values(az?0:1);
aA=this.values(az);
if(this.options.values.length===2&&this.options.range===true){ay=az===0?Math.min(aw,ay):Math.max(aw,ay)
}ax[az]=ay
}if(ay===aA){return
}aC=this._trigger("slide",aB,this._uiHash(az,ay,ax));
if(aC===false){return
}if(this._hasMultipleValues()){this.values(az,ay)
}else{this.value(ay)
}},_stop:function(ax,aw){this._trigger("stop",ax,this._uiHash(aw))
},_change:function(ax,aw){if(!this._keySliding&&!this._mouseSliding){this._lastChangedValue=aw;
this._trigger("change",ax,this._uiHash(aw))
}},value:function(aw){if(arguments.length){this.options.value=this._trimAlignValue(aw);
this._refreshValue();
this._change(null,0);
return
}return this._value()
},values:function(ax,aA){var az,aw,ay;
if(arguments.length>1){this.options.values[ax]=this._trimAlignValue(aA);
this._refreshValue();
this._change(null,ax);
return
}if(arguments.length){if(al.isArray(arguments[0])){az=this.options.values;
aw=arguments[0];
for(ay=0;
ay<az.length;
ay+=1){az[ay]=this._trimAlignValue(aw[ay]);
this._change(null,ay)
}this._refreshValue()
}else{if(this._hasMultipleValues()){return this._values(ax)
}else{return this.value()
}}}else{return this._values()
}},_setOption:function(ax,ay){var aw,az=0;
if(ax==="range"&&this.options.range===true){if(ay==="min"){this.options.value=this._values(0);
this.options.values=null
}else{if(ay==="max"){this.options.value=this._values(this.options.values.length-1);
this.options.values=null
}}}if(al.isArray(this.options.values)){az=this.options.values.length
}this._super(ax,ay);
switch(ax){case"orientation":this._detectOrientation();
this._removeClass("ui-slider-horizontal ui-slider-vertical")._addClass("ui-slider-"+this.orientation);
this._refreshValue();
if(this.options.range){this._refreshRange(ay)
}this.handles.css(ay==="horizontal"?"bottom":"left","");
break;
case"value":this._animateOff=true;
this._refreshValue();
this._change(null,0);
this._animateOff=false;
break;
case"values":this._animateOff=true;
this._refreshValue();
for(aw=az-1;
aw>=0;
aw--){this._change(null,aw)
}this._animateOff=false;
break;
case"step":case"min":case"max":this._animateOff=true;
this._calculateNewMax();
this._refreshValue();
this._animateOff=false;
break;
case"range":this._animateOff=true;
this._refresh();
this._animateOff=false;
break
}},_setOptionDisabled:function(aw){this._super(aw);
this._toggleClass(null,"ui-state-disabled",!!aw)
},_value:function(){var aw=this.options.value;
aw=this._trimAlignValue(aw);
return aw
},_values:function(aw){var az,ay,ax;
if(arguments.length){az=this.options.values[aw];
az=this._trimAlignValue(az);
return az
}else{if(this._hasMultipleValues()){ay=this.options.values.slice();
for(ax=0;
ax<ay.length;
ax+=1){ay[ax]=this._trimAlignValue(ay[ax])
}return ay
}else{return[]
}}},_trimAlignValue:function(az){if(az<=this._valueMin()){return this._valueMin()
}if(az>=this._valueMax()){return this._valueMax()
}var aw=(this.options.step>0)?this.options.step:1,ay=(az-this._valueMin())%aw,ax=az-ay;
if(Math.abs(ay)*2>=aw){ax+=(ay>0)?aw:(-aw)
}return parseFloat(ax.toFixed(5))
},_calculateNewMax:function(){var aw=this.options.max,ax=this._valueMin(),ay=this.options.step,az=Math.round((aw-ax)/ay)*ay;
aw=az+ax;
if(aw>this.options.max){aw-=ay
}this.max=parseFloat(aw.toFixed(this._precision()))
},_precision:function(){var aw=this._precisionOf(this.options.step);
if(this.options.min!==null){aw=Math.max(aw,this._precisionOf(this.options.min))
}return aw
},_precisionOf:function(ax){var ay=ax.toString(),aw=ay.indexOf(".");
return aw===-1?0:ay.length-aw-1
},_valueMin:function(){return this.options.min
},_valueMax:function(){return this.max
},_refreshRange:function(aw){if(aw==="vertical"){this.range.css({width:"",left:""})
}if(aw==="horizontal"){this.range.css({height:"",bottom:""})
}},_refreshValue:function(){var aB,aA,aE,aC,aF,az=this.options.range,ay=this.options,aD=this,ax=(!this._animateOff)?ay.animate:false,aw={};
if(this._hasMultipleValues()){this.handles.each(function(aG){aA=(aD.values(aG)-aD._valueMin())/(aD._valueMax()-aD._valueMin())*100;
aw[aD.orientation==="horizontal"?"left":"bottom"]=aA+"%";
al(this).stop(1,1)[ax?"animate":"css"](aw,ay.animate);
if(aD.options.range===true){if(aD.orientation==="horizontal"){if(aG===0){aD.range.stop(1,1)[ax?"animate":"css"]({left:aA+"%"},ay.animate)
}if(aG===1){aD.range[ax?"animate":"css"]({width:(aA-aB)+"%"},{queue:false,duration:ay.animate})
}}else{if(aG===0){aD.range.stop(1,1)[ax?"animate":"css"]({bottom:(aA)+"%"},ay.animate)
}if(aG===1){aD.range[ax?"animate":"css"]({height:(aA-aB)+"%"},{queue:false,duration:ay.animate})
}}}aB=aA
})
}else{aE=this.value();
aC=this._valueMin();
aF=this._valueMax();
aA=(aF!==aC)?(aE-aC)/(aF-aC)*100:0;
aw[this.orientation==="horizontal"?"left":"bottom"]=aA+"%";
this.handle.stop(1,1)[ax?"animate":"css"](aw,ay.animate);
if(az==="min"&&this.orientation==="horizontal"){this.range.stop(1,1)[ax?"animate":"css"]({width:aA+"%"},ay.animate)
}if(az==="max"&&this.orientation==="horizontal"){this.range.stop(1,1)[ax?"animate":"css"]({width:(100-aA)+"%"},ay.animate)
}if(az==="min"&&this.orientation==="vertical"){this.range.stop(1,1)[ax?"animate":"css"]({height:aA+"%"},ay.animate)
}if(az==="max"&&this.orientation==="vertical"){this.range.stop(1,1)[ax?"animate":"css"]({height:(100-aA)+"%"},ay.animate)
}}},_handleEvents:{keydown:function(aA){var aB,ay,ax,az,aw=al(aA.target).data("ui-slider-handle-index");
switch(aA.keyCode){case al.ui.keyCode.HOME:case al.ui.keyCode.END:case al.ui.keyCode.PAGE_UP:case al.ui.keyCode.PAGE_DOWN:case al.ui.keyCode.UP:case al.ui.keyCode.RIGHT:case al.ui.keyCode.DOWN:case al.ui.keyCode.LEFT:aA.preventDefault();
if(!this._keySliding){this._keySliding=true;
this._addClass(al(aA.target),null,"ui-state-active");
aB=this._start(aA,aw);
if(aB===false){return
}}break
}az=this.options.step;
if(this._hasMultipleValues()){ay=ax=this.values(aw)
}else{ay=ax=this.value()
}switch(aA.keyCode){case al.ui.keyCode.HOME:ax=this._valueMin();
break;
case al.ui.keyCode.END:ax=this._valueMax();
break;
case al.ui.keyCode.PAGE_UP:ax=this._trimAlignValue(ay+((this._valueMax()-this._valueMin())/this.numPages));
break;
case al.ui.keyCode.PAGE_DOWN:ax=this._trimAlignValue(ay-((this._valueMax()-this._valueMin())/this.numPages));
break;
case al.ui.keyCode.UP:case al.ui.keyCode.RIGHT:if(ay===this._valueMax()){return
}ax=this._trimAlignValue(ay+az);
break;
case al.ui.keyCode.DOWN:case al.ui.keyCode.LEFT:if(ay===this._valueMin()){return
}ax=this._trimAlignValue(ay-az);
break
}this._slide(aA,aw,ax)
},keyup:function(ax){var aw=al(ax.target).data("ui-slider-handle-index");
if(this._keySliding){this._keySliding=false;
this._stop(ax,aw);
this._change(ax,aw);
this._removeClass(al(ax.target),null,"ui-state-active")
}}}});
/*!
 * jQuery UI Sortable 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
;
var U=al.widget("ui.sortable",al.ui.mouse,{version:"1.12.1",widgetEventPrefix:"sort",ready:false,options:{appendTo:"parent",axis:false,connectWith:false,containment:false,cursor:"auto",cursorAt:false,dropOnEmpty:true,forcePlaceholderSize:false,forceHelperSize:false,grid:false,handle:false,helper:"original",items:"> *",opacity:false,placeholder:false,revert:false,scroll:true,scrollSensitivity:20,scrollSpeed:20,scope:"default",tolerance:"intersect",zIndex:1000,activate:null,beforeStop:null,change:null,deactivate:null,out:null,over:null,receive:null,remove:null,sort:null,start:null,stop:null,update:null},_isOverAxis:function(ax,aw,ay){return(ax>=aw)&&(ax<(aw+ay))
},_isFloating:function(aw){return(/left|right/).test(aw.css("float"))||(/inline|table-cell/).test(aw.css("display"))
},_create:function(){this.containerCache={};
this._addClass("ui-sortable");
this.refresh();
this.offset=this.element.offset();
this._mouseInit();
this._setHandleClassName();
this.ready=true
},_setOption:function(aw,ax){this._super(aw,ax);
if(aw==="handle"){this._setHandleClassName()
}},_setHandleClassName:function(){var aw=this;
this._removeClass(this.element.find(".ui-sortable-handle"),"ui-sortable-handle");
al.each(this.items,function(){aw._addClass(this.instance.options.handle?this.item.find(this.instance.options.handle):this.item,"ui-sortable-handle")
})
},_destroy:function(){this._mouseDestroy();
for(var aw=this.items.length-1;
aw>=0;
aw--){this.items[aw].item.removeData(this.widgetName+"-item")
}return this
},_mouseCapture:function(ay,az){var aw=null,aA=false,ax=this;
if(this.reverting){return false
}if(this.options.disabled||this.options.type==="static"){return false
}this._refreshItems(ay);
al(ay.target).parents().each(function(){if(al.data(this,ax.widgetName+"-item")===ax){aw=al(this);
return false
}});
if(al.data(ay.target,ax.widgetName+"-item")===ax){aw=al(ay.target)
}if(!aw){return false
}if(this.options.handle&&!az){al(this.options.handle,aw).find("*").addBack().each(function(){if(this===ay.target){aA=true
}});
if(!aA){return false
}}this.currentItem=aw;
this._removeCurrentsFromItems();
return true
},_mouseStart:function(az,aA,ax){var ay,aw,aB=this.options;
this.currentContainer=this;
this.refreshPositions();
this.helper=this._createHelper(az);
this._cacheHelperProportions();
this._cacheMargins();
this.scrollParent=this.helper.scrollParent();
this.offset=this.currentItem.offset();
this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left};
al.extend(this.offset,{click:{left:az.pageX-this.offset.left,top:az.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()});
this.helper.css("position","absolute");
this.cssPosition=this.helper.css("position");
this.originalPosition=this._generatePosition(az);
this.originalPageX=az.pageX;
this.originalPageY=az.pageY;
(aB.cursorAt&&this._adjustOffsetFromHelper(aB.cursorAt));
this.domPosition={prev:this.currentItem.prev()[0],parent:this.currentItem.parent()[0]};
if(this.helper[0]!==this.currentItem[0]){this.currentItem.hide()
}this._createPlaceholder();
if(aB.containment){this._setContainment()
}if(aB.cursor&&aB.cursor!=="auto"){aw=this.document.find("body");
this.storedCursor=aw.css("cursor");
aw.css("cursor",aB.cursor);
this.storedStylesheet=al("<style>*{ cursor: "+aB.cursor+" !important; }</style>").appendTo(aw)
}if(aB.opacity){if(this.helper.css("opacity")){this._storedOpacity=this.helper.css("opacity")
}this.helper.css("opacity",aB.opacity)
}if(aB.zIndex){if(this.helper.css("zIndex")){this._storedZIndex=this.helper.css("zIndex")
}this.helper.css("zIndex",aB.zIndex)
}if(this.scrollParent[0]!==this.document[0]&&this.scrollParent[0].tagName!=="HTML"){this.overflowOffset=this.scrollParent.offset()
}this._trigger("start",az,this._uiHash());
if(!this._preserveHelperProportions){this._cacheHelperProportions()
}if(!ax){for(ay=this.containers.length-1;
ay>=0;
ay--){this.containers[ay]._trigger("activate",az,this._uiHash(this))
}}if(al.ui.ddmanager){al.ui.ddmanager.current=this
}if(al.ui.ddmanager&&!aB.dropBehaviour){al.ui.ddmanager.prepareOffsets(this,az)
}this.dragging=true;
this._addClass(this.helper,"ui-sortable-helper");
this._mouseDrag(az);
return true
},_mouseDrag:function(aA){var ay,az,ax,aC,aB=this.options,aw=false;
this.position=this._generatePosition(aA);
this.positionAbs=this._convertPositionTo("absolute");
if(!this.lastPositionAbs){this.lastPositionAbs=this.positionAbs
}if(this.options.scroll){if(this.scrollParent[0]!==this.document[0]&&this.scrollParent[0].tagName!=="HTML"){if((this.overflowOffset.top+this.scrollParent[0].offsetHeight)-aA.pageY<aB.scrollSensitivity){this.scrollParent[0].scrollTop=aw=this.scrollParent[0].scrollTop+aB.scrollSpeed
}else{if(aA.pageY-this.overflowOffset.top<aB.scrollSensitivity){this.scrollParent[0].scrollTop=aw=this.scrollParent[0].scrollTop-aB.scrollSpeed
}}if((this.overflowOffset.left+this.scrollParent[0].offsetWidth)-aA.pageX<aB.scrollSensitivity){this.scrollParent[0].scrollLeft=aw=this.scrollParent[0].scrollLeft+aB.scrollSpeed
}else{if(aA.pageX-this.overflowOffset.left<aB.scrollSensitivity){this.scrollParent[0].scrollLeft=aw=this.scrollParent[0].scrollLeft-aB.scrollSpeed
}}}else{if(aA.pageY-this.document.scrollTop()<aB.scrollSensitivity){aw=this.document.scrollTop(this.document.scrollTop()-aB.scrollSpeed)
}else{if(this.window.height()-(aA.pageY-this.document.scrollTop())<aB.scrollSensitivity){aw=this.document.scrollTop(this.document.scrollTop()+aB.scrollSpeed)
}}if(aA.pageX-this.document.scrollLeft()<aB.scrollSensitivity){aw=this.document.scrollLeft(this.document.scrollLeft()-aB.scrollSpeed)
}else{if(this.window.width()-(aA.pageX-this.document.scrollLeft())<aB.scrollSensitivity){aw=this.document.scrollLeft(this.document.scrollLeft()+aB.scrollSpeed)
}}}if(aw!==false&&al.ui.ddmanager&&!aB.dropBehaviour){al.ui.ddmanager.prepareOffsets(this,aA)
}}this.positionAbs=this._convertPositionTo("absolute");
if(!this.options.axis||this.options.axis!=="y"){this.helper[0].style.left=this.position.left+"px"
}if(!this.options.axis||this.options.axis!=="x"){this.helper[0].style.top=this.position.top+"px"
}for(ay=this.items.length-1;
ay>=0;
ay--){az=this.items[ay];
ax=az.item[0];
aC=this._intersectsWithPointer(az);
if(!aC){continue
}if(az.instance!==this.currentContainer){continue
}if(ax!==this.currentItem[0]&&this.placeholder[aC===1?"next":"prev"]()[0]!==ax&&!al.contains(this.placeholder[0],ax)&&(this.options.type==="semi-dynamic"?!al.contains(this.element[0],ax):true)){this.direction=aC===1?"down":"up";
if(this.options.tolerance==="pointer"||this._intersectsWithSides(az)){this._rearrange(aA,az)
}else{break
}this._trigger("change",aA,this._uiHash());
break
}}this._contactContainers(aA);
if(al.ui.ddmanager){al.ui.ddmanager.drag(this,aA)
}this._trigger("sort",aA,this._uiHash());
this.lastPositionAbs=this.positionAbs;
return false
},_mouseStop:function(ay,aA){if(!ay){return
}if(al.ui.ddmanager&&!this.options.dropBehaviour){al.ui.ddmanager.drop(this,ay)
}if(this.options.revert){var ax=this,aB=this.placeholder.offset(),aw=this.options.axis,az={};
if(!aw||aw==="x"){az.left=aB.left-this.offset.parent.left-this.margins.left+(this.offsetParent[0]===this.document[0].body?0:this.offsetParent[0].scrollLeft)
}if(!aw||aw==="y"){az.top=aB.top-this.offset.parent.top-this.margins.top+(this.offsetParent[0]===this.document[0].body?0:this.offsetParent[0].scrollTop)
}this.reverting=true;
al(this.helper).animate(az,parseInt(this.options.revert,10)||500,function(){ax._clear(ay)
})
}else{this._clear(ay,aA)
}return false
},cancel:function(){if(this.dragging){this._mouseUp(new al.Event("mouseup",{target:null}));
if(this.options.helper==="original"){this.currentItem.css(this._storedCSS);
this._removeClass(this.currentItem,"ui-sortable-helper")
}else{this.currentItem.show()
}for(var aw=this.containers.length-1;
aw>=0;
aw--){this.containers[aw]._trigger("deactivate",null,this._uiHash(this));
if(this.containers[aw].containerCache.over){this.containers[aw]._trigger("out",null,this._uiHash(this));
this.containers[aw].containerCache.over=0
}}}if(this.placeholder){if(this.placeholder[0].parentNode){this.placeholder[0].parentNode.removeChild(this.placeholder[0])
}if(this.options.helper!=="original"&&this.helper&&this.helper[0].parentNode){this.helper.remove()
}al.extend(this,{helper:null,dragging:false,reverting:false,_noFinalSort:null});
if(this.domPosition.prev){al(this.domPosition.prev).after(this.currentItem)
}else{al(this.domPosition.parent).prepend(this.currentItem)
}}return this
},serialize:function(ay){var aw=this._getItemsAsjQuery(ay&&ay.connected),ax=[];
ay=ay||{};
al(aw).each(function(){var az=(al(ay.item||this).attr(ay.attribute||"id")||"").match(ay.expression||(/(.+)[\-=_](.+)/));
if(az){ax.push((ay.key||az[1]+"[]")+"="+(ay.key&&ay.expression?az[1]:az[2]))
}});
if(!ax.length&&ay.key){ax.push(ay.key+"=")
}return ax.join("&")
},toArray:function(ay){var aw=this._getItemsAsjQuery(ay&&ay.connected),ax=[];
ay=ay||{};
aw.each(function(){ax.push(al(ay.item||this).attr(ay.attribute||"id")||"")
});
return ax
},_intersectsWith:function(aH){var ay=this.positionAbs.left,ax=ay+this.helperProportions.width,aF=this.positionAbs.top,aE=aF+this.helperProportions.height,az=aH.left,aw=az+aH.width,aI=aH.top,aD=aI+aH.height,aJ=this.offset.click.top,aC=this.offset.click.left,aB=(this.options.axis==="x")||((aF+aJ)>aI&&(aF+aJ)<aD),aG=(this.options.axis==="y")||((ay+aC)>az&&(ay+aC)<aw),aA=aB&&aG;
if(this.options.tolerance==="pointer"||this.options.forcePointerForContainers||(this.options.tolerance!=="pointer"&&this.helperProportions[this.floating?"width":"height"]>aH[this.floating?"width":"height"])){return aA
}else{return(az<ay+(this.helperProportions.width/2)&&ax-(this.helperProportions.width/2)<aw&&aI<aF+(this.helperProportions.height/2)&&aE-(this.helperProportions.height/2)<aD)
}},_intersectsWithPointer:function(ay){var ax,aB,az=(this.options.axis==="x")||this._isOverAxis(this.positionAbs.top+this.offset.click.top,ay.top,ay.height),aw=(this.options.axis==="y")||this._isOverAxis(this.positionAbs.left+this.offset.click.left,ay.left,ay.width),aA=az&&aw;
if(!aA){return false
}ax=this._getDragVerticalDirection();
aB=this._getDragHorizontalDirection();
return this.floating?((aB==="right"||ax==="down")?2:1):(ax&&(ax==="down"?2:1))
},_intersectsWithSides:function(az){var ax=this._isOverAxis(this.positionAbs.top+this.offset.click.top,az.top+(az.height/2),az.height),ay=this._isOverAxis(this.positionAbs.left+this.offset.click.left,az.left+(az.width/2),az.width),aw=this._getDragVerticalDirection(),aA=this._getDragHorizontalDirection();
if(this.floating&&aA){return((aA==="right"&&ay)||(aA==="left"&&!ay))
}else{return aw&&((aw==="down"&&ax)||(aw==="up"&&!ax))
}},_getDragVerticalDirection:function(){var aw=this.positionAbs.top-this.lastPositionAbs.top;
return aw!==0&&(aw>0?"down":"up")
},_getDragHorizontalDirection:function(){var aw=this.positionAbs.left-this.lastPositionAbs.left;
return aw!==0&&(aw>0?"right":"left")
},refresh:function(aw){this._refreshItems(aw);
this._setHandleClassName();
this.refreshPositions();
return this
},_connectWith:function(){var aw=this.options;
return aw.connectWith.constructor===String?[aw.connectWith]:aw.connectWith
},_getItemsAsjQuery:function(aw){var ay,ax,aD,aA,aB=[],az=[],aC=this._connectWith();
if(aC&&aw){for(ay=aC.length-1;
ay>=0;
ay--){aD=al(aC[ay],this.document[0]);
for(ax=aD.length-1;
ax>=0;
ax--){aA=al.data(aD[ax],this.widgetFullName);
if(aA&&aA!==this&&!aA.options.disabled){az.push([al.isFunction(aA.options.items)?aA.options.items.call(aA.element):al(aA.options.items,aA.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),aA])
}}}}az.push([al.isFunction(this.options.items)?this.options.items.call(this.element,null,{options:this.options,item:this.currentItem}):al(this.options.items,this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),this]);
function aE(){aB.push(this)
}for(ay=az.length-1;
ay>=0;
ay--){az[ay][0].each(aE)
}return al(aB)
},_removeCurrentsFromItems:function(){var aw=this.currentItem.find(":data("+this.widgetName+"-item)");
this.items=al.grep(this.items,function(ay){for(var ax=0;
ax<aw.length;
ax++){if(aw[ax]===ay.item[0]){return false
}}return true
})
},_refreshItems:function(aw){this.items=[];
this.containers=[this];
var aA,ay,aF,aB,aE,ax,aH,aG,aC=this.items,az=[[al.isFunction(this.options.items)?this.options.items.call(this.element[0],aw,{item:this.currentItem}):al(this.options.items,this.element),this]],aD=this._connectWith();
if(aD&&this.ready){for(aA=aD.length-1;
aA>=0;
aA--){aF=al(aD[aA],this.document[0]);
for(ay=aF.length-1;
ay>=0;
ay--){aB=al.data(aF[ay],this.widgetFullName);
if(aB&&aB!==this&&!aB.options.disabled){az.push([al.isFunction(aB.options.items)?aB.options.items.call(aB.element[0],aw,{item:this.currentItem}):al(aB.options.items,aB.element),aB]);
this.containers.push(aB)
}}}}for(aA=az.length-1;
aA>=0;
aA--){aE=az[aA][1];
ax=az[aA][0];
for(ay=0,aG=ax.length;
ay<aG;
ay++){aH=al(ax[ay]);
aH.data(this.widgetName+"-item",aE);
aC.push({item:aH,instance:aE,width:0,height:0,left:0,top:0})
}}},refreshPositions:function(aw){this.floating=this.items.length?this.options.axis==="x"||this._isFloating(this.items[0].item):false;
if(this.offsetParent&&this.helper){this.offset.parent=this._getParentOffset()
}var ay,az,ax,aA;
for(ay=this.items.length-1;
ay>=0;
ay--){az=this.items[ay];
if(az.instance!==this.currentContainer&&this.currentContainer&&az.item[0]!==this.currentItem[0]){continue
}ax=this.options.toleranceElement?al(this.options.toleranceElement,az.item):az.item;
if(!aw){az.width=ax.outerWidth();
az.height=ax.outerHeight()
}aA=ax.offset();
az.left=aA.left;
az.top=aA.top
}if(this.options.custom&&this.options.custom.refreshContainers){this.options.custom.refreshContainers.call(this)
}else{for(ay=this.containers.length-1;
ay>=0;
ay--){aA=this.containers[ay].element.offset();
this.containers[ay].containerCache.left=aA.left;
this.containers[ay].containerCache.top=aA.top;
this.containers[ay].containerCache.width=this.containers[ay].element.outerWidth();
this.containers[ay].containerCache.height=this.containers[ay].element.outerHeight()
}}return this
},_createPlaceholder:function(ax){ax=ax||this;
var aw,ay=ax.options;
if(!ay.placeholder||ay.placeholder.constructor===String){aw=ay.placeholder;
ay.placeholder={element:function(){var aA=ax.currentItem[0].nodeName.toLowerCase(),az=al("<"+aA+">",ax.document[0]);
ax._addClass(az,"ui-sortable-placeholder",aw||ax.currentItem[0].className)._removeClass(az,"ui-sortable-helper");
if(aA==="tbody"){ax._createTrPlaceholder(ax.currentItem.find("tr").eq(0),al("<tr>",ax.document[0]).appendTo(az))
}else{if(aA==="tr"){ax._createTrPlaceholder(ax.currentItem,az)
}else{if(aA==="img"){az.attr("src",ax.currentItem.attr("src"))
}}}if(!aw){az.css("visibility","hidden")
}return az
},update:function(az,aA){if(aw&&!ay.forcePlaceholderSize){return
}if(!aA.height()){aA.height(ax.currentItem.innerHeight()-parseInt(ax.currentItem.css("paddingTop")||0,10)-parseInt(ax.currentItem.css("paddingBottom")||0,10))
}if(!aA.width()){aA.width(ax.currentItem.innerWidth()-parseInt(ax.currentItem.css("paddingLeft")||0,10)-parseInt(ax.currentItem.css("paddingRight")||0,10))
}}}
}ax.placeholder=al(ay.placeholder.element.call(ax.element,ax.currentItem));
ax.currentItem.after(ax.placeholder);
ay.placeholder.update(ax,ax.placeholder)
},_createTrPlaceholder:function(ax,aw){var ay=this;
ax.children().each(function(){al("<td>&#160;</td>",ay.document[0]).attr("colspan",al(this).attr("colspan")||1).appendTo(aw)
})
},_contactContainers:function(aw){var aB,az,aF,aC,aD,aH,aI,aA,aE,ay,ax=null,aG=null;
for(aB=this.containers.length-1;
aB>=0;
aB--){if(al.contains(this.currentItem[0],this.containers[aB].element[0])){continue
}if(this._intersectsWith(this.containers[aB].containerCache)){if(ax&&al.contains(this.containers[aB].element[0],ax.element[0])){continue
}ax=this.containers[aB];
aG=aB
}else{if(this.containers[aB].containerCache.over){this.containers[aB]._trigger("out",aw,this._uiHash(this));
this.containers[aB].containerCache.over=0
}}}if(!ax){return
}if(this.containers.length===1){if(!this.containers[aG].containerCache.over){this.containers[aG]._trigger("over",aw,this._uiHash(this));
this.containers[aG].containerCache.over=1
}}else{aF=10000;
aC=null;
aE=ax.floating||this._isFloating(this.currentItem);
aD=aE?"left":"top";
aH=aE?"width":"height";
ay=aE?"pageX":"pageY";
for(az=this.items.length-1;
az>=0;
az--){if(!al.contains(this.containers[aG].element[0],this.items[az].item[0])){continue
}if(this.items[az].item[0]===this.currentItem[0]){continue
}aI=this.items[az].item.offset()[aD];
aA=false;
if(aw[ay]-aI>this.items[az][aH]/2){aA=true
}if(Math.abs(aw[ay]-aI)<aF){aF=Math.abs(aw[ay]-aI);
aC=this.items[az];
this.direction=aA?"up":"down"
}}if(!aC&&!this.options.dropOnEmpty){return
}if(this.currentContainer===this.containers[aG]){if(!this.currentContainer.containerCache.over){this.containers[aG]._trigger("over",aw,this._uiHash());
this.currentContainer.containerCache.over=1
}return
}aC?this._rearrange(aw,aC,null,true):this._rearrange(aw,null,this.containers[aG].element,true);
this._trigger("change",aw,this._uiHash());
this.containers[aG]._trigger("change",aw,this._uiHash(this));
this.currentContainer=this.containers[aG];
this.options.placeholder.update(this.currentContainer,this.placeholder);
this.containers[aG]._trigger("over",aw,this._uiHash(this));
this.containers[aG].containerCache.over=1
}},_createHelper:function(ax){var ay=this.options,aw=al.isFunction(ay.helper)?al(ay.helper.apply(this.element[0],[ax,this.currentItem])):(ay.helper==="clone"?this.currentItem.clone():this.currentItem);
if(!aw.parents("body").length){al(ay.appendTo!=="parent"?ay.appendTo:this.currentItem[0].parentNode)[0].appendChild(aw[0])
}if(aw[0]===this.currentItem[0]){this._storedCSS={width:this.currentItem[0].style.width,height:this.currentItem[0].style.height,position:this.currentItem.css("position"),top:this.currentItem.css("top"),left:this.currentItem.css("left")}
}if(!aw[0].style.width||ay.forceHelperSize){aw.width(this.currentItem.width())
}if(!aw[0].style.height||ay.forceHelperSize){aw.height(this.currentItem.height())
}return aw
},_adjustOffsetFromHelper:function(aw){if(typeof aw==="string"){aw=aw.split(" ")
}if(al.isArray(aw)){aw={left:+aw[0],top:+aw[1]||0}
}if("left" in aw){this.offset.click.left=aw.left+this.margins.left
}if("right" in aw){this.offset.click.left=this.helperProportions.width-aw.right+this.margins.left
}if("top" in aw){this.offset.click.top=aw.top+this.margins.top
}if("bottom" in aw){this.offset.click.top=this.helperProportions.height-aw.bottom+this.margins.top
}},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();
var aw=this.offsetParent.offset();
if(this.cssPosition==="absolute"&&this.scrollParent[0]!==this.document[0]&&al.contains(this.scrollParent[0],this.offsetParent[0])){aw.left+=this.scrollParent.scrollLeft();
aw.top+=this.scrollParent.scrollTop()
}if(this.offsetParent[0]===this.document[0].body||(this.offsetParent[0].tagName&&this.offsetParent[0].tagName.toLowerCase()==="html"&&al.ui.ie)){aw={top:0,left:0}
}return{top:aw.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:aw.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}
},_getRelativeOffset:function(){if(this.cssPosition==="relative"){var aw=this.currentItem.position();
return{top:aw.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:aw.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}
}else{return{top:0,left:0}
}},_cacheMargins:function(){this.margins={left:(parseInt(this.currentItem.css("marginLeft"),10)||0),top:(parseInt(this.currentItem.css("marginTop"),10)||0)}
},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}
},_setContainment:function(){var ax,az,aw,ay=this.options;
if(ay.containment==="parent"){ay.containment=this.helper[0].parentNode
}if(ay.containment==="document"||ay.containment==="window"){this.containment=[0-this.offset.relative.left-this.offset.parent.left,0-this.offset.relative.top-this.offset.parent.top,ay.containment==="document"?this.document.width():this.window.width()-this.helperProportions.width-this.margins.left,(ay.containment==="document"?(this.document.height()||document.body.parentNode.scrollHeight):this.window.height()||this.document[0].body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]
}if(!(/^(document|window|parent)$/).test(ay.containment)){ax=al(ay.containment)[0];
az=al(ay.containment).offset();
aw=(al(ax).css("overflow")!=="hidden");
this.containment=[az.left+(parseInt(al(ax).css("borderLeftWidth"),10)||0)+(parseInt(al(ax).css("paddingLeft"),10)||0)-this.margins.left,az.top+(parseInt(al(ax).css("borderTopWidth"),10)||0)+(parseInt(al(ax).css("paddingTop"),10)||0)-this.margins.top,az.left+(aw?Math.max(ax.scrollWidth,ax.offsetWidth):ax.offsetWidth)-(parseInt(al(ax).css("borderLeftWidth"),10)||0)-(parseInt(al(ax).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left,az.top+(aw?Math.max(ax.scrollHeight,ax.offsetHeight):ax.offsetHeight)-(parseInt(al(ax).css("borderTopWidth"),10)||0)-(parseInt(al(ax).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top]
}},_convertPositionTo:function(ay,aA){if(!aA){aA=this.position
}var ax=ay==="absolute"?1:-1,aw=this.cssPosition==="absolute"&&!(this.scrollParent[0]!==this.document[0]&&al.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,az=(/(html|body)/i).test(aw[0].tagName);
return{top:(aA.top+this.offset.relative.top*ax+this.offset.parent.top*ax-((this.cssPosition==="fixed"?-this.scrollParent.scrollTop():(az?0:aw.scrollTop()))*ax)),left:(aA.left+this.offset.relative.left*ax+this.offset.parent.left*ax-((this.cssPosition==="fixed"?-this.scrollParent.scrollLeft():az?0:aw.scrollLeft())*ax))}
},_generatePosition:function(az){var aB,aA,aC=this.options,ay=az.pageX,ax=az.pageY,aw=this.cssPosition==="absolute"&&!(this.scrollParent[0]!==this.document[0]&&al.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,aD=(/(html|body)/i).test(aw[0].tagName);
if(this.cssPosition==="relative"&&!(this.scrollParent[0]!==this.document[0]&&this.scrollParent[0]!==this.offsetParent[0])){this.offset.relative=this._getRelativeOffset()
}if(this.originalPosition){if(this.containment){if(az.pageX-this.offset.click.left<this.containment[0]){ay=this.containment[0]+this.offset.click.left
}if(az.pageY-this.offset.click.top<this.containment[1]){ax=this.containment[1]+this.offset.click.top
}if(az.pageX-this.offset.click.left>this.containment[2]){ay=this.containment[2]+this.offset.click.left
}if(az.pageY-this.offset.click.top>this.containment[3]){ax=this.containment[3]+this.offset.click.top
}}if(aC.grid){aB=this.originalPageY+Math.round((ax-this.originalPageY)/aC.grid[1])*aC.grid[1];
ax=this.containment?((aB-this.offset.click.top>=this.containment[1]&&aB-this.offset.click.top<=this.containment[3])?aB:((aB-this.offset.click.top>=this.containment[1])?aB-aC.grid[1]:aB+aC.grid[1])):aB;
aA=this.originalPageX+Math.round((ay-this.originalPageX)/aC.grid[0])*aC.grid[0];
ay=this.containment?((aA-this.offset.click.left>=this.containment[0]&&aA-this.offset.click.left<=this.containment[2])?aA:((aA-this.offset.click.left>=this.containment[0])?aA-aC.grid[0]:aA+aC.grid[0])):aA
}}return{top:(ax-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+((this.cssPosition==="fixed"?-this.scrollParent.scrollTop():(aD?0:aw.scrollTop())))),left:(ay-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+((this.cssPosition==="fixed"?-this.scrollParent.scrollLeft():aD?0:aw.scrollLeft())))}
},_rearrange:function(aA,az,ax,ay){ax?ax[0].appendChild(this.placeholder[0]):az.item[0].parentNode.insertBefore(this.placeholder[0],(this.direction==="down"?az.item[0]:az.item[0].nextSibling));
this.counter=this.counter?++this.counter:1;
var aw=this.counter;
this._delay(function(){if(aw===this.counter){this.refreshPositions(!ay)
}})
},_clear:function(ax,az){this.reverting=false;
var aw,aA=[];
if(!this._noFinalSort&&this.currentItem.parent().length){this.placeholder.before(this.currentItem)
}this._noFinalSort=null;
if(this.helper[0]===this.currentItem[0]){for(aw in this._storedCSS){if(this._storedCSS[aw]==="auto"||this._storedCSS[aw]==="static"){this._storedCSS[aw]=""
}}this.currentItem.css(this._storedCSS);
this._removeClass(this.currentItem,"ui-sortable-helper")
}else{this.currentItem.show()
}if(this.fromOutside&&!az){aA.push(function(aB){this._trigger("receive",aB,this._uiHash(this.fromOutside))
})
}if((this.fromOutside||this.domPosition.prev!==this.currentItem.prev().not(".ui-sortable-helper")[0]||this.domPosition.parent!==this.currentItem.parent()[0])&&!az){aA.push(function(aB){this._trigger("update",aB,this._uiHash())
})
}if(this!==this.currentContainer){if(!az){aA.push(function(aB){this._trigger("remove",aB,this._uiHash())
});
aA.push((function(aB){return function(aC){aB._trigger("receive",aC,this._uiHash(this))
}
}).call(this,this.currentContainer));
aA.push((function(aB){return function(aC){aB._trigger("update",aC,this._uiHash(this))
}
}).call(this,this.currentContainer))
}}function ay(aD,aB,aC){return function(aE){aC._trigger(aD,aE,aB._uiHash(aB))
}
}for(aw=this.containers.length-1;
aw>=0;
aw--){if(!az){aA.push(ay("deactivate",this,this.containers[aw]))
}if(this.containers[aw].containerCache.over){aA.push(ay("out",this,this.containers[aw]));
this.containers[aw].containerCache.over=0
}}if(this.storedCursor){this.document.find("body").css("cursor",this.storedCursor);
this.storedStylesheet.remove()
}if(this._storedOpacity){this.helper.css("opacity",this._storedOpacity)
}if(this._storedZIndex){this.helper.css("zIndex",this._storedZIndex==="auto"?"":this._storedZIndex)
}this.dragging=false;
if(!az){this._trigger("beforeStop",ax,this._uiHash())
}this.placeholder[0].parentNode.removeChild(this.placeholder[0]);
if(!this.cancelHelperRemoval){if(this.helper[0]!==this.currentItem[0]){this.helper.remove()
}this.helper=null
}if(!az){for(aw=0;
aw<aA.length;
aw++){aA[aw].call(this,ax)
}this._trigger("stop",ax,this._uiHash())
}this.fromOutside=false;
return !this.cancelHelperRemoval
},_trigger:function(){if(al.Widget.prototype._trigger.apply(this,arguments)===false){this.cancel()
}},_uiHash:function(aw){var ax=aw||this;
return{helper:ax.helper,placeholder:ax.placeholder||al([]),position:ax.position,originalPosition:ax.originalPosition,offset:ax.positionAbs,item:ax.currentItem,sender:aw?aw.element:null}
}});
/*!
 * jQuery UI Spinner 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
;
function V(aw){return function(){var ax=this.element.val();
aw.apply(this,arguments);
this._refresh();
if(ax!==this.element.val()){this._trigger("change")
}}
}al.widget("ui.spinner",{version:"1.12.1",defaultElement:"<input>",widgetEventPrefix:"spin",options:{classes:{"ui-spinner":"ui-corner-all","ui-spinner-down":"ui-corner-br","ui-spinner-up":"ui-corner-tr"},culture:null,icons:{down:"ui-icon-triangle-1-s",up:"ui-icon-triangle-1-n"},incremental:true,max:null,min:null,numberFormat:null,page:10,step:1,change:null,spin:null,start:null,stop:null},_create:function(){this._setOption("max",this.options.max);
this._setOption("min",this.options.min);
this._setOption("step",this.options.step);
if(this.value()!==""){this._value(this.element.val(),true)
}this._draw();
this._on(this._events);
this._refresh();
this._on(this.window,{beforeunload:function(){this.element.removeAttr("autocomplete")
}})
},_getCreateOptions:function(){var aw=this._super();
var ax=this.element;
al.each(["min","max","step"],function(ay,az){var aA=ax.attr(az);
if(aA!=null&&aA.length){aw[az]=aA
}});
return aw
},_events:{keydown:function(aw){if(this._start(aw)&&this._keydown(aw)){aw.preventDefault()
}},keyup:"_stop",focus:function(){this.previous=this.element.val()
},blur:function(aw){if(this.cancelBlur){delete this.cancelBlur;
return
}this._stop();
this._refresh();
if(this.previous!==this.element.val()){this._trigger("change",aw)
}},mousewheel:function(aw,ax){if(!ax){return
}if(!this.spinning&&!this._start(aw)){return false
}this._spin((ax>0?1:-1)*this.options.step,aw);
clearTimeout(this.mousewheelTimer);
this.mousewheelTimer=this._delay(function(){if(this.spinning){this._stop(aw)
}},100);
aw.preventDefault()
},"mousedown .ui-spinner-button":function(ax){var aw;
aw=this.element[0]===al.ui.safeActiveElement(this.document[0])?this.previous:this.element.val();
function ay(){var az=this.element[0]===al.ui.safeActiveElement(this.document[0]);
if(!az){this.element.trigger("focus");
this.previous=aw;
this._delay(function(){this.previous=aw
})
}}ax.preventDefault();
ay.call(this);
this.cancelBlur=true;
this._delay(function(){delete this.cancelBlur;
ay.call(this)
});
if(this._start(ax)===false){return
}this._repeat(null,al(ax.currentTarget).hasClass("ui-spinner-up")?1:-1,ax)
},"mouseup .ui-spinner-button":"_stop","mouseenter .ui-spinner-button":function(aw){if(!al(aw.currentTarget).hasClass("ui-state-active")){return
}if(this._start(aw)===false){return false
}this._repeat(null,al(aw.currentTarget).hasClass("ui-spinner-up")?1:-1,aw)
},"mouseleave .ui-spinner-button":"_stop"},_enhance:function(){this.uiSpinner=this.element.attr("autocomplete","off").wrap("<span>").parent().append("<a></a><a></a>")
},_draw:function(){this._enhance();
this._addClass(this.uiSpinner,"ui-spinner","ui-widget ui-widget-content");
this._addClass("ui-spinner-input");
this.element.attr("role","spinbutton");
this.buttons=this.uiSpinner.children("a").attr("tabIndex",-1).attr("aria-hidden",true).button({classes:{"ui-button":""}});
this._removeClass(this.buttons,"ui-corner-all");
this._addClass(this.buttons.first(),"ui-spinner-button ui-spinner-up");
this._addClass(this.buttons.last(),"ui-spinner-button ui-spinner-down");
this.buttons.first().button({icon:this.options.icons.up,showLabel:false});
this.buttons.last().button({icon:this.options.icons.down,showLabel:false});
if(this.buttons.height()>Math.ceil(this.uiSpinner.height()*0.5)&&this.uiSpinner.height()>0){this.uiSpinner.height(this.uiSpinner.height())
}},_keydown:function(ax){var aw=this.options,ay=al.ui.keyCode;
switch(ax.keyCode){case ay.UP:this._repeat(null,1,ax);
return true;
case ay.DOWN:this._repeat(null,-1,ax);
return true;
case ay.PAGE_UP:this._repeat(null,aw.page,ax);
return true;
case ay.PAGE_DOWN:this._repeat(null,-aw.page,ax);
return true
}return false
},_start:function(aw){if(!this.spinning&&this._trigger("start",aw)===false){return false
}if(!this.counter){this.counter=1
}this.spinning=true;
return true
},_repeat:function(ax,aw,ay){ax=ax||500;
clearTimeout(this.timer);
this.timer=this._delay(function(){this._repeat(40,aw,ay)
},ax);
this._spin(aw*this.options.step,ay)
},_spin:function(ax,aw){var ay=this.value()||0;
if(!this.counter){this.counter=1
}ay=this._adjustValue(ay+ax*this._increment(this.counter));
if(!this.spinning||this._trigger("spin",aw,{value:ay})!==false){this._value(ay);
this.counter++
}},_increment:function(aw){var ax=this.options.incremental;
if(ax){return al.isFunction(ax)?ax(aw):Math.floor(aw*aw*aw/50000-aw*aw/500+17*aw/200+1)
}return 1
},_precision:function(){var aw=this._precisionOf(this.options.step);
if(this.options.min!==null){aw=Math.max(aw,this._precisionOf(this.options.min))
}return aw
},_precisionOf:function(ax){var ay=ax.toString(),aw=ay.indexOf(".");
return aw===-1?0:ay.length-aw-1
},_adjustValue:function(ay){var ax,az,aw=this.options;
ax=aw.min!==null?aw.min:0;
az=ay-ax;
az=Math.round(az/aw.step)*aw.step;
ay=ax+az;
ay=parseFloat(ay.toFixed(this._precision()));
if(aw.max!==null&&ay>aw.max){return aw.max
}if(aw.min!==null&&ay<aw.min){return aw.min
}return ay
},_stop:function(aw){if(!this.spinning){return
}clearTimeout(this.timer);
clearTimeout(this.mousewheelTimer);
this.counter=0;
this.spinning=false;
this._trigger("stop",aw)
},_setOption:function(aw,ay){var az,aA,ax;
if(aw==="culture"||aw==="numberFormat"){az=this._parse(this.element.val());
this.options[aw]=ay;
this.element.val(this._format(az));
return
}if(aw==="max"||aw==="min"||aw==="step"){if(typeof ay==="string"){ay=this._parse(ay)
}}if(aw==="icons"){aA=this.buttons.first().find(".ui-icon");
this._removeClass(aA,null,this.options.icons.up);
this._addClass(aA,null,ay.up);
ax=this.buttons.last().find(".ui-icon");
this._removeClass(ax,null,this.options.icons.down);
this._addClass(ax,null,ay.down)
}this._super(aw,ay)
},_setOptionDisabled:function(aw){this._super(aw);
this._toggleClass(this.uiSpinner,null,"ui-state-disabled",!!aw);
this.element.prop("disabled",!!aw);
this.buttons.button(aw?"disable":"enable")
},_setOptions:V(function(aw){this._super(aw)
}),_parse:function(aw){if(typeof aw==="string"&&aw!==""){aw=window.Globalize&&this.options.numberFormat?Globalize.parseFloat(aw,10,this.options.culture):+aw
}return aw===""||isNaN(aw)?null:aw
},_format:function(aw){if(aw===""){return""
}return window.Globalize&&this.options.numberFormat?Globalize.format(aw,this.options.numberFormat,this.options.culture):aw
},_refresh:function(){this.element.attr({"aria-valuemin":this.options.min,"aria-valuemax":this.options.max,"aria-valuenow":this._parse(this.element.val())})
},isValid:function(){var aw=this.value();
if(aw===null){return false
}return aw===this._adjustValue(aw)
},_value:function(ay,aw){var ax;
if(ay!==""){ax=this._parse(ay);
if(ax!==null){if(!aw){ax=this._adjustValue(ax)
}ay=this._format(ax)
}}this.element.val(ay);
this._refresh()
},_destroy:function(){this.element.prop("disabled",false).removeAttr("autocomplete role aria-valuemin aria-valuemax aria-valuenow");
this.uiSpinner.replaceWith(this.element)
},stepUp:V(function(aw){this._stepUp(aw)
}),_stepUp:function(aw){if(this._start()){this._spin((aw||1)*this.options.step);
this._stop()
}},stepDown:V(function(aw){this._stepDown(aw)
}),_stepDown:function(aw){if(this._start()){this._spin((aw||1)*-this.options.step);
this._stop()
}},pageUp:V(function(aw){this._stepUp((aw||1)*this.options.page)
}),pageDown:V(function(aw){this._stepDown((aw||1)*this.options.page)
}),value:function(aw){if(!arguments.length){return this._parse(this.element.val())
}V(this._value).call(this,aw)
},widget:function(){return this.uiSpinner
}});
if(al.uiBackCompat!==false){al.widget("ui.spinner",al.ui.spinner,{_enhance:function(){this.uiSpinner=this.element.attr("autocomplete","off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml())
},_uiSpinnerHtml:function(){return"<span>"
},_buttonHtml:function(){return"<a></a><a></a>"
}})
}var ah=al.ui.spinner;
/*!
 * jQuery UI Tabs 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
;
al.widget("ui.tabs",{version:"1.12.1",delay:300,options:{active:null,classes:{"ui-tabs":"ui-corner-all","ui-tabs-nav":"ui-corner-all","ui-tabs-panel":"ui-corner-bottom","ui-tabs-tab":"ui-corner-top"},collapsible:false,event:"click",heightStyle:"content",hide:null,show:null,activate:null,beforeActivate:null,beforeLoad:null,load:null},_isLocal:(function(){var aw=/#.*$/;
return function(ay){var aA,az;
aA=ay.href.replace(aw,"");
az=location.href.replace(aw,"");
try{aA=decodeURIComponent(aA)
}catch(ax){}try{az=decodeURIComponent(az)
}catch(ax){}return ay.hash.length>1&&aA===az
}
})(),_create:function(){var ax=this,aw=this.options;
this.running=false;
this._addClass("ui-tabs","ui-widget ui-widget-content");
this._toggleClass("ui-tabs-collapsible",null,aw.collapsible);
this._processTabs();
aw.active=this._initialActive();
if(al.isArray(aw.disabled)){aw.disabled=al.unique(aw.disabled.concat(al.map(this.tabs.filter(".ui-state-disabled"),function(ay){return ax.tabs.index(ay)
}))).sort()
}if(this.options.active!==false&&this.anchors.length){this.active=this._findActive(aw.active)
}else{this.active=al()
}this._refresh();
if(this.active.length){this.load(aw.active)
}},_initialActive:function(){var ax=this.options.active,aw=this.options.collapsible,ay=location.hash.substring(1);
if(ax===null){if(ay){this.tabs.each(function(az,aA){if(al(aA).attr("aria-controls")===ay){ax=az;
return false
}})
}if(ax===null){ax=this.tabs.index(this.tabs.filter(".ui-tabs-active"))
}if(ax===null||ax===-1){ax=this.tabs.length?0:false
}}if(ax!==false){ax=this.tabs.index(this.tabs.eq(ax));
if(ax===-1){ax=aw?false:0
}}if(!aw&&ax===false&&this.anchors.length){ax=0
}return ax
},_getCreateEventData:function(){return{tab:this.active,panel:!this.active.length?al():this._getPanelForTab(this.active)}
},_tabKeydown:function(ay){var ax=al(al.ui.safeActiveElement(this.document[0])).closest("li"),aw=this.tabs.index(ax),az=true;
if(this._handlePageNav(ay)){return
}switch(ay.keyCode){case al.ui.keyCode.RIGHT:case al.ui.keyCode.DOWN:aw++;
break;
case al.ui.keyCode.UP:case al.ui.keyCode.LEFT:az=false;
aw--;
break;
case al.ui.keyCode.END:aw=this.anchors.length-1;
break;
case al.ui.keyCode.HOME:aw=0;
break;
case al.ui.keyCode.SPACE:ay.preventDefault();
clearTimeout(this.activating);
this._activate(aw);
return;
case al.ui.keyCode.ENTER:ay.preventDefault();
clearTimeout(this.activating);
this._activate(aw===this.options.active?false:aw);
return;
default:return
}ay.preventDefault();
clearTimeout(this.activating);
aw=this._focusNextTab(aw,az);
if(!ay.ctrlKey&&!ay.metaKey){ax.attr("aria-selected","false");
this.tabs.eq(aw).attr("aria-selected","true");
this.activating=this._delay(function(){this.option("active",aw)
},this.delay)
}},_panelKeydown:function(aw){if(this._handlePageNav(aw)){return
}if(aw.ctrlKey&&aw.keyCode===al.ui.keyCode.UP){aw.preventDefault();
this.active.trigger("focus")
}},_handlePageNav:function(aw){if(aw.altKey&&aw.keyCode===al.ui.keyCode.PAGE_UP){this._activate(this._focusNextTab(this.options.active-1,false));
return true
}if(aw.altKey&&aw.keyCode===al.ui.keyCode.PAGE_DOWN){this._activate(this._focusNextTab(this.options.active+1,true));
return true
}},_findNextTab:function(ax,ay){var aw=this.tabs.length-1;
function az(){if(ax>aw){ax=0
}if(ax<0){ax=aw
}return ax
}while(al.inArray(az(),this.options.disabled)!==-1){ax=ay?ax+1:ax-1
}return ax
},_focusNextTab:function(aw,ax){aw=this._findNextTab(aw,ax);
this.tabs.eq(aw).trigger("focus");
return aw
},_setOption:function(aw,ax){if(aw==="active"){this._activate(ax);
return
}this._super(aw,ax);
if(aw==="collapsible"){this._toggleClass("ui-tabs-collapsible",null,ax);
if(!ax&&this.options.active===false){this._activate(0)
}}if(aw==="event"){this._setupEvents(ax)
}if(aw==="heightStyle"){this._setupHeightStyle(ax)
}},_sanitizeSelector:function(aw){return aw?aw.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g,"\\$&"):""
},refresh:function(){var ax=this.options,aw=this.tablist.children(":has(a[href])");
ax.disabled=al.map(aw.filter(".ui-state-disabled"),function(ay){return aw.index(ay)
});
this._processTabs();
if(ax.active===false||!this.anchors.length){ax.active=false;
this.active=al()
}else{if(this.active.length&&!al.contains(this.tablist[0],this.active[0])){if(this.tabs.length===ax.disabled.length){ax.active=false;
this.active=al()
}else{this._activate(this._findNextTab(Math.max(0,ax.active-1),false))
}}else{ax.active=this.tabs.index(this.active)
}}this._refresh()
},_refresh:function(){this._setOptionDisabled(this.options.disabled);
this._setupEvents(this.options.event);
this._setupHeightStyle(this.options.heightStyle);
this.tabs.not(this.active).attr({"aria-selected":"false","aria-expanded":"false",tabIndex:-1});
this.panels.not(this._getPanelForTab(this.active)).hide().attr({"aria-hidden":"true"});
if(!this.active.length){this.tabs.eq(0).attr("tabIndex",0)
}else{this.active.attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0});
this._addClass(this.active,"ui-tabs-active","ui-state-active");
this._getPanelForTab(this.active).show().attr({"aria-hidden":"false"})
}},_processTabs:function(){var ay=this,az=this.tabs,ax=this.anchors,aw=this.panels;
this.tablist=this._getList().attr("role","tablist");
this._addClass(this.tablist,"ui-tabs-nav","ui-helper-reset ui-helper-clearfix ui-widget-header");
this.tablist.on("mousedown"+this.eventNamespace,"> li",function(aA){if(al(this).is(".ui-state-disabled")){aA.preventDefault()
}}).on("focus"+this.eventNamespace,".ui-tabs-anchor",function(){if(al(this).closest("li").is(".ui-state-disabled")){this.blur()
}});
this.tabs=this.tablist.find("> li:has(a[href])").attr({role:"tab",tabIndex:-1});
this._addClass(this.tabs,"ui-tabs-tab","ui-state-default");
this.anchors=this.tabs.map(function(){return al("a",this)[0]
}).attr({role:"presentation",tabIndex:-1});
this._addClass(this.anchors,"ui-tabs-anchor");
this.panels=al();
this.anchors.each(function(aF,aD){var aA,aB,aE,aC=al(aD).uniqueId().attr("id"),aG=al(aD).closest("li"),aH=aG.attr("aria-controls");
if(ay._isLocal(aD)){aA=aD.hash;
aE=aA.substring(1);
aB=ay.element.find(ay._sanitizeSelector(aA))
}else{aE=aG.attr("aria-controls")||al({}).uniqueId()[0].id;
aA="#"+aE;
aB=ay.element.find(aA);
if(!aB.length){aB=ay._createPanel(aE);
aB.insertAfter(ay.panels[aF-1]||ay.tablist)
}aB.attr("aria-live","polite")
}if(aB.length){ay.panels=ay.panels.add(aB)
}if(aH){aG.data("ui-tabs-aria-controls",aH)
}aG.attr({"aria-controls":aE,"aria-labelledby":aC});
aB.attr("aria-labelledby",aC)
});
this.panels.attr("role","tabpanel");
this._addClass(this.panels,"ui-tabs-panel","ui-widget-content");
if(az){this._off(az.not(this.tabs));
this._off(ax.not(this.anchors));
this._off(aw.not(this.panels))
}},_getList:function(){return this.tablist||this.element.find("ol, ul").eq(0)
},_createPanel:function(aw){return al("<div>").attr("id",aw).data("ui-tabs-destroy",true)
},_setOptionDisabled:function(az){var ay,aw,ax;
if(al.isArray(az)){if(!az.length){az=false
}else{if(az.length===this.anchors.length){az=true
}}}for(ax=0;
(aw=this.tabs[ax]);
ax++){ay=al(aw);
if(az===true||al.inArray(ax,az)!==-1){ay.attr("aria-disabled","true");
this._addClass(ay,null,"ui-state-disabled")
}else{ay.removeAttr("aria-disabled");
this._removeClass(ay,null,"ui-state-disabled")
}}this.options.disabled=az;
this._toggleClass(this.widget(),this.widgetFullName+"-disabled",null,az===true)
},_setupEvents:function(ax){var aw={};
if(ax){al.each(ax.split(" "),function(az,ay){aw[ay]="_eventHandler"
})
}this._off(this.anchors.add(this.tabs).add(this.panels));
this._on(true,this.anchors,{click:function(ay){ay.preventDefault()
}});
this._on(this.anchors,aw);
this._on(this.tabs,{keydown:"_tabKeydown"});
this._on(this.panels,{keydown:"_panelKeydown"});
this._focusable(this.tabs);
this._hoverable(this.tabs)
},_setupHeightStyle:function(aw){var ay,ax=this.element.parent();
if(aw==="fill"){ay=ax.height();
ay-=this.element.outerHeight()-this.element.height();
this.element.siblings(":visible").each(function(){var aA=al(this),az=aA.css("position");
if(az==="absolute"||az==="fixed"){return
}ay-=aA.outerHeight(true)
});
this.element.children().not(this.panels).each(function(){ay-=al(this).outerHeight(true)
});
this.panels.each(function(){al(this).height(Math.max(0,ay-al(this).innerHeight()+al(this).height()))
}).css("overflow","auto")
}else{if(aw==="auto"){ay=0;
this.panels.each(function(){ay=Math.max(ay,al(this).height("").height())
}).height(ay)
}}},_eventHandler:function(aw){var aF=this.options,aA=this.active,aB=al(aw.currentTarget),az=aB.closest("li"),aD=az[0]===aA[0],ax=aD&&aF.collapsible,ay=ax?al():this._getPanelForTab(az),aC=!aA.length?al():this._getPanelForTab(aA),aE={oldTab:aA,oldPanel:aC,newTab:ax?al():az,newPanel:ay};
aw.preventDefault();
if(az.hasClass("ui-state-disabled")||az.hasClass("ui-tabs-loading")||this.running||(aD&&!aF.collapsible)||(this._trigger("beforeActivate",aw,aE)===false)){return
}aF.active=ax?false:this.tabs.index(az);
this.active=aD?al():az;
if(this.xhr){this.xhr.abort()
}if(!aC.length&&!ay.length){al.error("jQuery UI Tabs: Mismatching fragment identifier.")
}if(ay.length){this.load(this.tabs.index(az),aw)
}this._toggle(aw,aE)
},_toggle:function(aC,aB){var aA=this,aw=aB.newPanel,az=aB.oldPanel;
this.running=true;
function ay(){aA.running=false;
aA._trigger("activate",aC,aB)
}function ax(){aA._addClass(aB.newTab.closest("li"),"ui-tabs-active","ui-state-active");
if(aw.length&&aA.options.show){aA._show(aw,aA.options.show,ay)
}else{aw.show();
ay()
}}if(az.length&&this.options.hide){this._hide(az,this.options.hide,function(){aA._removeClass(aB.oldTab.closest("li"),"ui-tabs-active","ui-state-active");
ax()
})
}else{this._removeClass(aB.oldTab.closest("li"),"ui-tabs-active","ui-state-active");
az.hide();
ax()
}az.attr("aria-hidden","true");
aB.oldTab.attr({"aria-selected":"false","aria-expanded":"false"});
if(aw.length&&az.length){aB.oldTab.attr("tabIndex",-1)
}else{if(aw.length){this.tabs.filter(function(){return al(this).attr("tabIndex")===0
}).attr("tabIndex",-1)
}}aw.attr("aria-hidden","false");
aB.newTab.attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0})
},_activate:function(ax){var aw,ay=this._findActive(ax);
if(ay[0]===this.active[0]){return
}if(!ay.length){ay=this.active
}aw=ay.find(".ui-tabs-anchor")[0];
this._eventHandler({target:aw,currentTarget:aw,preventDefault:al.noop})
},_findActive:function(aw){return aw===false?al():this.tabs.eq(aw)
},_getIndex:function(aw){if(typeof aw==="string"){aw=this.anchors.index(this.anchors.filter("[href$='"+al.ui.escapeSelector(aw)+"']"))
}return aw
},_destroy:function(){if(this.xhr){this.xhr.abort()
}this.tablist.removeAttr("role").off(this.eventNamespace);
this.anchors.removeAttr("role tabIndex").removeUniqueId();
this.tabs.add(this.panels).each(function(){if(al.data(this,"ui-tabs-destroy")){al(this).remove()
}else{al(this).removeAttr("role tabIndex aria-live aria-busy aria-selected aria-labelledby aria-hidden aria-expanded")
}});
this.tabs.each(function(){var aw=al(this),ax=aw.data("ui-tabs-aria-controls");
if(ax){aw.attr("aria-controls",ax).removeData("ui-tabs-aria-controls")
}else{aw.removeAttr("aria-controls")
}});
this.panels.show();
if(this.options.heightStyle!=="content"){this.panels.css("height","")
}},enable:function(aw){var ax=this.options.disabled;
if(ax===false){return
}if(aw===undefined){ax=false
}else{aw=this._getIndex(aw);
if(al.isArray(ax)){ax=al.map(ax,function(ay){return ay!==aw?ay:null
})
}else{ax=al.map(this.tabs,function(ay,az){return az!==aw?az:null
})
}}this._setOptionDisabled(ax)
},disable:function(aw){var ax=this.options.disabled;
if(ax===true){return
}if(aw===undefined){ax=true
}else{aw=this._getIndex(aw);
if(al.inArray(aw,ax)!==-1){return
}if(al.isArray(ax)){ax=al.merge([aw],ax).sort()
}else{ax=[aw]
}}this._setOptionDisabled(ax)
},load:function(az,aD){az=this._getIndex(az);
var aC=this,aA=this.tabs.eq(az),ay=aA.find(".ui-tabs-anchor"),ax=this._getPanelForTab(aA),aB={tab:aA,panel:ax},aw=function(aF,aE){if(aE==="abort"){aC.panels.stop(false,true)
}aC._removeClass(aA,"ui-tabs-loading");
ax.removeAttr("aria-busy");
if(aF===aC.xhr){delete aC.xhr
}};
if(this._isLocal(ay[0])){return
}this.xhr=al.ajax(this._ajaxSettings(ay,aD,aB));
if(this.xhr&&this.xhr.statusText!=="canceled"){this._addClass(aA,"ui-tabs-loading");
ax.attr("aria-busy","true");
this.xhr.done(function(aF,aE,aG){setTimeout(function(){ax.html(aF);
aC._trigger("load",aD,aB);
aw(aG,aE)
},1)
}).fail(function(aF,aE){setTimeout(function(){aw(aF,aE)
},1)
})
}},_ajaxSettings:function(aw,az,ay){var ax=this;
return{url:aw.attr("href").replace(/#.*$/,""),beforeSend:function(aB,aA){return ax._trigger("beforeLoad",az,al.extend({jqXHR:aB,ajaxSettings:aA},ay))
}}
},_getPanelForTab:function(aw){var ax=al(aw).attr("aria-controls");
return this.element.find(this._sanitizeSelector("#"+ax))
}});
if(al.uiBackCompat!==false){al.widget("ui.tabs",al.ui.tabs,{_processTabs:function(){this._superApply(arguments);
this._addClass(this.tabs,"ui-tab")
}})
}var S=al.ui.tabs;
/*!
 * jQuery UI Tooltip 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
;
al.widget("ui.tooltip",{version:"1.12.1",options:{classes:{"ui-tooltip":"ui-corner-all ui-widget-shadow"},content:function(){var aw=al(this).attr("title")||"";
return al("<a>").text(aw).html()
},hide:true,items:"[title]:not([disabled])",position:{my:"left top+15",at:"left bottom",collision:"flipfit flip"},show:true,track:false,close:null,open:null},_addDescribedBy:function(ax,ay){var aw=(ax.attr("aria-describedby")||"").split(/\s+/);
aw.push(ay);
ax.data("ui-tooltip-id",ay).attr("aria-describedby",al.trim(aw.join(" ")))
},_removeDescribedBy:function(ay){var az=ay.data("ui-tooltip-id"),ax=(ay.attr("aria-describedby")||"").split(/\s+/),aw=al.inArray(az,ax);
if(aw!==-1){ax.splice(aw,1)
}ay.removeData("ui-tooltip-id");
ax=al.trim(ax.join(" "));
if(ax){ay.attr("aria-describedby",ax)
}else{ay.removeAttr("aria-describedby")
}},_create:function(){this._on({mouseover:"open",focusin:"open"});
this.tooltips={};
this.parents={};
this.liveRegion=al("<div>").attr({role:"log","aria-live":"assertive","aria-relevant":"additions"}).appendTo(this.document[0].body);
this._addClass(this.liveRegion,null,"ui-helper-hidden-accessible");
this.disabledTitles=al([])
},_setOption:function(aw,ay){var ax=this;
this._super(aw,ay);
if(aw==="content"){al.each(this.tooltips,function(aA,az){ax._updateContent(az.element)
})
}},_setOptionDisabled:function(aw){this[aw?"_disable":"_enable"]()
},_disable:function(){var aw=this;
al.each(this.tooltips,function(az,ay){var ax=al.Event("blur");
ax.target=ax.currentTarget=ay.element[0];
aw.close(ax,true)
});
this.disabledTitles=this.disabledTitles.add(this.element.find(this.options.items).addBack().filter(function(){var ax=al(this);
if(ax.is("[title]")){return ax.data("ui-tooltip-title",ax.attr("title")).removeAttr("title")
}}))
},_enable:function(){this.disabledTitles.each(function(){var aw=al(this);
if(aw.data("ui-tooltip-title")){aw.attr("title",aw.data("ui-tooltip-title"))
}});
this.disabledTitles=al([])
},open:function(ax){var aw=this,ay=al(ax?ax.target:this.element).closest(this.options.items);
if(!ay.length||ay.data("ui-tooltip-id")){return
}if(ay.attr("title")){ay.data("ui-tooltip-title",ay.attr("title"))
}ay.data("ui-tooltip-open",true);
if(ax&&ax.type==="mouseover"){ay.parents().each(function(){var aA=al(this),az;
if(aA.data("ui-tooltip-open")){az=al.Event("blur");
az.target=az.currentTarget=this;
aw.close(az,true)
}if(aA.attr("title")){aA.uniqueId();
aw.parents[this.id]={element:this,title:aA.attr("title")};
aA.attr("title","")
}})
}this._registerCloseHandlers(ax,ay);
this._updateContent(ay,ax)
},_updateContent:function(aB,aA){var az,aw=this.options.content,ay=this,ax=aA?aA.type:null;
if(typeof aw==="string"||aw.nodeType||aw.jquery){return this._open(aA,aB,aw)
}az=aw.call(aB[0],function(aC){ay._delay(function(){if(!aB.data("ui-tooltip-open")){return
}if(aA){aA.type=ax
}this._open(aA,aB,aC)
})
});
if(az){this._open(aA,aB,az)
}},_open:function(ax,aA,aB){var aw,aE,aD,ay,aC=al.extend({},this.options.position);
if(!aB){return
}aw=this._find(aA);
if(aw){aw.tooltip.find(".ui-tooltip-content").html(aB);
return
}if(aA.is("[title]")){if(ax&&ax.type==="mouseover"){aA.attr("title","")
}else{aA.removeAttr("title")
}}aw=this._tooltip(aA);
aE=aw.tooltip;
this._addDescribedBy(aA,aE.attr("id"));
aE.find(".ui-tooltip-content").html(aB);
this.liveRegion.children().hide();
ay=al("<div>").html(aE.find(".ui-tooltip-content").html());
ay.removeAttr("name").find("[name]").removeAttr("name");
ay.removeAttr("id").find("[id]").removeAttr("id");
ay.appendTo(this.liveRegion);
function az(aF){aC.of=aF;
if(aE.is(":hidden")){return
}aE.position(aC)
}if(this.options.track&&ax&&/^mouse/.test(ax.type)){this._on(this.document,{mousemove:az});
az(ax)
}else{aE.position(al.extend({of:aA},this.options.position))
}aE.hide();
this._show(aE,this.options.show);
if(this.options.track&&this.options.show&&this.options.show.delay){aD=this.delayedShow=setInterval(function(){if(aE.is(":visible")){az(aC.of);
clearInterval(aD)
}},al.fx.interval)
}this._trigger("open",ax,{tooltip:aE})
},_registerCloseHandlers:function(ax,ay){var aw={keyup:function(az){if(az.keyCode===al.ui.keyCode.ESCAPE){var aA=al.Event(az);
aA.currentTarget=ay[0];
this.close(aA,true)
}}};
if(ay[0]!==this.element[0]){aw.remove=function(){this._removeTooltip(this._find(ay).tooltip)
}
}if(!ax||ax.type==="mouseover"){aw.mouseleave="close"
}if(!ax||ax.type==="focusin"){aw.focusout="close"
}this._on(true,ay,aw)
},close:function(ax){var az,aw=this,aA=al(ax?ax.currentTarget:this.element),ay=this._find(aA);
if(!ay){aA.removeData("ui-tooltip-open");
return
}az=ay.tooltip;
if(ay.closing){return
}clearInterval(this.delayedShow);
if(aA.data("ui-tooltip-title")&&!aA.attr("title")){aA.attr("title",aA.data("ui-tooltip-title"))
}this._removeDescribedBy(aA);
ay.hiding=true;
az.stop(true);
this._hide(az,this.options.hide,function(){aw._removeTooltip(al(this))
});
aA.removeData("ui-tooltip-open");
this._off(aA,"mouseleave focusout keyup");
if(aA[0]!==this.element[0]){this._off(aA,"remove")
}this._off(this.document,"mousemove");
if(ax&&ax.type==="mouseleave"){al.each(this.parents,function(aC,aB){al(aB.element).attr("title",aB.title);
delete aw.parents[aC]
})
}ay.closing=true;
this._trigger("close",ax,{tooltip:az});
if(!ay.hiding){ay.closing=false
}},_tooltip:function(aw){var ay=al("<div>").attr("role","tooltip"),ax=al("<div>").appendTo(ay),az=ay.uniqueId().attr("id");
this._addClass(ax,"ui-tooltip-content");
this._addClass(ay,"ui-tooltip","ui-widget ui-widget-content");
ay.appendTo(this._appendTo(aw));
return this.tooltips[az]={element:aw,tooltip:ay}
},_find:function(aw){var ax=aw.data("ui-tooltip-id");
return ax?this.tooltips[ax]:null
},_removeTooltip:function(aw){aw.remove();
delete this.tooltips[aw.attr("id")]
},_appendTo:function(ax){var aw=ax.closest(".ui-front, dialog");
if(!aw.length){aw=this.document[0].body
}return aw
},_destroy:function(){var aw=this;
al.each(this.tooltips,function(aA,az){var ay=al.Event("blur"),ax=az.element;
ay.target=ay.currentTarget=ax[0];
aw.close(ay,true);
al("#"+aA).remove();
if(ax.data("ui-tooltip-title")){if(!ax.attr("title")){ax.attr("title",ax.data("ui-tooltip-title"))
}ax.removeData("ui-tooltip-title")
}});
this.liveRegion.remove()
}});
if(al.uiBackCompat!==false){al.widget("ui.tooltip",al.ui.tooltip,{options:{tooltipClass:null},_tooltip:function(){var aw=this._superApply(arguments);
if(this.options.tooltipClass){aw.tooltip.addClass(this.options.tooltipClass)
}return aw
}})
}var E=al.ui.tooltip
}));
/*! jQuery Validation Plugin - v1.10.0 - 9/7/2012
* https://github.com/jzaefferer/jquery-validation
* Copyright (c) 2012 Jörn Zaefferer; Licensed MIT, GPL */
(function(a){a.extend(a.fn,{validate:function(b){if(!this.length){if(b&&b.debug&&window.console){console.warn("nothing selected, can't validate, returning nothing")
}return
}var c=a.data(this[0],"validator");
if(c){return c
}this.attr("novalidate","novalidate");
c=new a.validator(b,this[0]);
a.data(this[0],"validator",c);
if(c.settings.onsubmit){this.validateDelegate(":submit","click",function(d){if(c.settings.submitHandler){c.submitButton=d.target
}if(a(d.target).hasClass("cancel")){c.cancelSubmit=true
}});
this.submit(function(d){if(c.settings.debug){d.preventDefault()
}function e(){var f;
if(c.settings.submitHandler){if(c.submitButton){f=a("<input type='hidden'/>").attr("name",c.submitButton.name).val(c.submitButton.value).appendTo(c.currentForm)
}c.settings.submitHandler.call(c,c.currentForm,d);
if(c.submitButton){f.remove()
}return false
}return true
}if(c.cancelSubmit){c.cancelSubmit=false;
return e()
}if(c.form()){if(c.pendingRequest){c.formSubmitted=true;
return false
}return e()
}else{c.focusInvalid();
return false
}})
}return c
},valid:function(){if(a(this[0]).is("form")){return this.validate().form()
}else{var c=true;
var b=a(this[0].form).validate();
this.each(function(){c&=b.element(this)
});
return c
}},removeAttrs:function(d){var b={},c=this;
a.each(d.split(/\s/),function(e,f){b[f]=c.attr(f);
c.removeAttr(f)
});
return b
},rules:function(e,b){var g=this[0];
if(e){var d=a.data(g.form,"validator").settings;
var i=d.rules;
var j=a.validator.staticRules(g);
switch(e){case"add":a.extend(j,a.validator.normalizeRule(b));
i[g.name]=j;
if(b.messages){d.messages[g.name]=a.extend(d.messages[g.name],b.messages)
}break;
case"remove":if(!b){delete i[g.name];
return j
}var h={};
a.each(b.split(/\s/),function(k,l){h[l]=j[l];
delete j[l]
});
return h
}}var f=a.validator.normalizeRules(a.extend({},a.validator.metadataRules(g),a.validator.classRules(g),a.validator.attributeRules(g),a.validator.staticRules(g)),g);
if(f.required){var c=f.required;
delete f.required;
f=a.extend({required:c},f)
}return f
}});
a.extend(a.expr[":"],{blank:function(b){return !a.trim(""+b.value)
},filled:function(b){return !!a.trim(""+b.value)
},unchecked:function(b){return !b.checked
}});
a.validator=function(b,c){this.settings=a.extend(true,{},a.validator.defaults,b);
this.currentForm=c;
this.init()
};
a.validator.format=function(b,c){if(arguments.length===1){return function(){var d=a.makeArray(arguments);
d.unshift(b);
return a.validator.format.apply(this,d)
}
}if(arguments.length>2&&c.constructor!==Array){c=a.makeArray(arguments).slice(1)
}if(c.constructor!==Array){c=[c]
}a.each(c,function(d,e){b=b.replace(new RegExp("\\{"+d+"\\}","g"),e)
});
return b
};
a.extend(a.validator,{defaults:{messages:{},groups:{},rules:{},errorClass:"error",validClass:"valid",errorElement:"label",focusInvalid:true,errorContainer:a([]),errorLabelContainer:a([]),onsubmit:true,ignore:":hidden",ignoreTitle:false,onfocusin:function(b,c){this.lastActive=b;
if(this.settings.focusCleanup&&!this.blockFocusCleanup){if(this.settings.unhighlight){this.settings.unhighlight.call(this,b,this.settings.errorClass,this.settings.validClass)
}this.addWrapper(this.errorsFor(b)).hide()
}},onfocusout:function(b,c){if(!this.checkable(b)&&(b.name in this.submitted||!this.optional(b))){this.element(b)
}},onkeyup:function(b,c){if(c.which===9&&this.elementValue(b)===""){return
}else{if(b.name in this.submitted||b===this.lastActive){this.element(b)
}}},onclick:function(b,c){if(b.name in this.submitted){this.element(b)
}else{if(b.parentNode.name in this.submitted){this.element(b.parentNode)
}}},highlight:function(d,b,c){if(d.type==="radio"){this.findByName(d.name).addClass(b).removeClass(c)
}else{a(d).addClass(b).removeClass(c)
}},unhighlight:function(d,b,c){if(d.type==="radio"){this.findByName(d.name).removeClass(b).addClass(c)
}else{a(d).removeClass(b).addClass(c)
}}},setDefaults:function(b){a.extend(a.validator.defaults,b)
},messages:{required:"This field is required.",remote:"Please fix this field.",email:"Please enter a valid email address.",url:"Please enter a valid URL.",date:"Please enter a valid date.",dateISO:"Please enter a valid date (ISO).",number:"Please enter a valid number.",digits:"Please enter only digits.",creditcard:"Please enter a valid credit card number.",equalTo:"Please enter the same value again.",maxlength:a.validator.format("Please enter no more than {0} characters."),minlength:a.validator.format("Please enter at least {0} characters."),rangelength:a.validator.format("Please enter a value between {0} and {1} characters long."),range:a.validator.format("Please enter a value between {0} and {1}."),max:a.validator.format("Please enter a value less than or equal to {0}."),min:a.validator.format("Please enter a value greater than or equal to {0}.")},autoCreateRanges:false,prototype:{init:function(){this.labelContainer=a(this.settings.errorLabelContainer);
this.errorContext=this.labelContainer.length&&this.labelContainer||a(this.currentForm);
this.containers=a(this.settings.errorContainer).add(this.settings.errorLabelContainer);
this.submitted={};
this.valueCache={};
this.pendingRequest=0;
this.pending={};
this.invalid={};
this.reset();
var b=(this.groups={});
a.each(this.settings.groups,function(e,f){a.each(f.split(/\s/),function(h,g){b[g]=e
})
});
var d=this.settings.rules;
a.each(d,function(e,f){d[e]=a.validator.normalizeRule(f)
});
function c(g){var f=a.data(this[0].form,"validator"),e="on"+g.type.replace(/^validate/,"");
if(f.settings[e]){f.settings[e].call(f,this[0],g)
}}a(this.currentForm).validateDelegate(":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'] ,[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'] ","focusin focusout keyup",c).validateDelegate("[type='radio'], [type='checkbox'], select, option","click",c);
if(this.settings.invalidHandler){a(this.currentForm).bind("invalid-form.validate",this.settings.invalidHandler)
}},form:function(){this.checkForm();
a.extend(this.submitted,this.errorMap);
this.invalid=a.extend({},this.errorMap);
if(!this.valid()){a(this.currentForm).triggerHandler("invalid-form",[this])
}this.showErrors();
return this.valid()
},checkForm:function(){this.prepareForm();
for(var b=0,c=(this.currentElements=this.elements());
c[b];
b++){this.check(c[b])
}return this.valid()
},element:function(c){c=this.validationTargetFor(this.clean(c));
this.lastElement=c;
this.prepareElement(c);
this.currentElements=a(c);
var b=this.check(c)!==false;
if(b){delete this.invalid[c.name]
}else{this.invalid[c.name]=true
}if(!this.numberOfInvalids()){this.toHide=this.toHide.add(this.containers)
}this.showErrors();
return b
},showErrors:function(c){if(c){a.extend(this.errorMap,c);
this.errorList=[];
for(var b in c){this.errorList.push({message:c[b],element:this.findByName(b)[0]})
}this.successList=a.grep(this.successList,function(d){return !(d.name in c)
})
}if(this.settings.showErrors){this.settings.showErrors.call(this,this.errorMap,this.errorList)
}else{this.defaultShowErrors()
}},resetForm:function(){if(a.fn.resetForm){a(this.currentForm).resetForm()
}this.submitted={};
this.lastElement=null;
this.prepareForm();
this.hideErrors();
this.elements().removeClass(this.settings.errorClass).removeData("previousValue")
},numberOfInvalids:function(){return this.objectLength(this.invalid)
},objectLength:function(d){var c=0;
for(var b in d){c++
}return c
},hideErrors:function(){this.addWrapper(this.toHide).hide()
},valid:function(){return this.size()===0
},size:function(){return this.errorList.length
},focusInvalid:function(){if(this.settings.focusInvalid){try{a(this.findLastActive()||this.errorList.length&&this.errorList[0].element||[]).filter(":visible").focus().trigger("focusin")
}catch(b){}}},findLastActive:function(){var b=this.lastActive;
return b&&a.grep(this.errorList,function(c){return c.element.name===b.name
}).length===1&&b
},elements:function(){var c=this,b={};
return a(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, [disabled]").not(this.settings.ignore).filter(function(){if(!this.name&&c.settings.debug&&window.console){console.error("%o has no name assigned",this)
}if(this.name in b||!c.objectLength(a(this).rules())){return false
}b[this.name]=true;
return true
})
},clean:function(b){return a(b)[0]
},errors:function(){var b=this.settings.errorClass.replace(" ",".");
return a(this.settings.errorElement+"."+b,this.errorContext)
},reset:function(){this.successList=[];
this.errorList=[];
this.errorMap={};
this.toShow=a([]);
this.toHide=a([]);
this.currentElements=a([])
},prepareForm:function(){this.reset();
this.toHide=this.errors().add(this.containers)
},prepareElement:function(b){this.reset();
this.toHide=this.errorsFor(b)
},elementValue:function(b){var c=a(b).attr("type"),d=a(b).val();
if(c==="radio"||c==="checkbox"){return a('input[name="'+a(b).attr("name")+'"]:checked').val()
}if(typeof d==="string"){return d.replace(/\r/g,"")
}return d
},check:function(c){c=this.validationTargetFor(this.clean(c));
var i=a(c).rules();
var d=false;
var h=this.elementValue(c);
var b;
for(var j in i){var g={method:j,parameters:i[j]};
try{b=a.validator.methods[j].call(this,h,c,g.parameters);
if(b==="dependency-mismatch"){d=true;
continue
}d=false;
if(b==="pending"){this.toHide=this.toHide.not(this.errorsFor(c));
return
}if(!b){this.formatAndAdd(c,g);
return false
}}catch(f){if(this.settings.debug&&window.console){console.log("exception occured when checking element "+c.id+", check the '"+g.method+"' method",f)
}throw f
}}if(d){return
}if(this.objectLength(i)){this.successList.push(c)
}return true
},customMetaMessage:function(b,d){if(!a.metadata){return
}var c=this.settings.meta?a(b).metadata()[this.settings.meta]:a(b).metadata();
return c&&c.messages&&c.messages[d]
},customDataMessage:function(b,c){return a(b).data("msg-"+c.toLowerCase())||(b.attributes&&a(b).attr("data-msg-"+c.toLowerCase()))
},customMessage:function(c,d){var b=this.settings.messages[c];
return b&&(b.constructor===String?b:b[d])
},findDefined:function(){for(var b=0;
b<arguments.length;
b++){if(arguments[b]!==undefined){return arguments[b]
}}return undefined
},defaultMessage:function(b,c){return this.findDefined(this.customMessage(b.name,c),this.customDataMessage(b,c),this.customMetaMessage(b,c),!this.settings.ignoreTitle&&b.title||undefined,a.validator.messages[c],"<strong>Warning: No message defined for "+b.name+"</strong>")
},formatAndAdd:function(c,e){var d=this.defaultMessage(c,e.method),b=/\$?\{(\d+)\}/g;
if(typeof d==="function"){d=d.call(this,e.parameters,c)
}else{if(b.test(d)){d=a.validator.format(d.replace(b,"{$1}"),e.parameters)
}}this.errorList.push({message:d,element:c});
this.errorMap[c.name]=d;
this.submitted[c.name]=d
},addWrapper:function(b){if(this.settings.wrapper){b=b.add(b.parent(this.settings.wrapper))
}return b
},defaultShowErrors:function(){var c,d;
for(c=0;
this.errorList[c];
c++){var b=this.errorList[c];
if(this.settings.highlight){this.settings.highlight.call(this,b.element,this.settings.errorClass,this.settings.validClass)
}this.showLabel(b.element,b.message)
}if(this.errorList.length){this.toShow=this.toShow.add(this.containers)
}if(this.settings.success){for(c=0;
this.successList[c];
c++){this.showLabel(this.successList[c])
}}if(this.settings.unhighlight){for(c=0,d=this.validElements();
d[c];
c++){this.settings.unhighlight.call(this,d[c],this.settings.errorClass,this.settings.validClass)
}}this.toHide=this.toHide.not(this.toShow);
this.hideErrors();
this.addWrapper(this.toShow).show()
},validElements:function(){return this.currentElements.not(this.invalidElements())
},invalidElements:function(){return a(this.errorList).map(function(){return this.element
})
},showLabel:function(c,d){var b=this.errorsFor(c);
if(b.length){b.removeClass(this.settings.validClass).addClass(this.settings.errorClass);
if(b.attr("generated")){b.html(d)
}}else{b=a("<"+this.settings.errorElement+"/>").attr({"for":this.idOrName(c),generated:true}).addClass(this.settings.errorClass).html(d||"");
if(this.settings.wrapper){b=b.hide().show().wrap("<"+this.settings.wrapper+"/>").parent()
}if(!this.labelContainer.append(b).length){if(this.settings.errorPlacement){this.settings.errorPlacement(b,a(c))
}else{b.insertAfter(c)
}}}if(!d&&this.settings.success){b.text("");
if(typeof this.settings.success==="string"){b.addClass(this.settings.success)
}else{this.settings.success(b,c)
}}this.toShow=this.toShow.add(b)
},errorsFor:function(c){var b=this.idOrName(c);
return this.errors().filter(function(){return a(this).attr("for")===b
})
},idOrName:function(b){return this.groups[b.name]||(this.checkable(b)?b.name:b.id||b.name)
},validationTargetFor:function(b){if(this.checkable(b)){b=this.findByName(b.name).not(this.settings.ignore)[0]
}return b
},checkable:function(b){return(/radio|checkbox/i).test(b.type)
},findByName:function(b){return a(this.currentForm).find('[name="'+b+'"]')
},getLength:function(c,b){switch(b.nodeName.toLowerCase()){case"select":return a("option:selected",b).length;
case"input":if(this.checkable(b)){return this.findByName(b.name).filter(":checked").length
}}return c.length
},depend:function(c,b){return this.dependTypes[typeof c]?this.dependTypes[typeof c](c,b):true
},dependTypes:{"boolean":function(c,b){return c
},string:function(c,b){return !!a(c,b.form).length
},"function":function(c,b){return c(b)
}},optional:function(b){var c=this.elementValue(b);
return !a.validator.methods.required.call(this,c,b)&&"dependency-mismatch"
},startRequest:function(b){if(!this.pending[b.name]){this.pendingRequest++;
this.pending[b.name]=true
}},stopRequest:function(b,c){this.pendingRequest--;
if(this.pendingRequest<0){this.pendingRequest=0
}delete this.pending[b.name];
if(c&&this.pendingRequest===0&&this.formSubmitted&&this.form()){a(this.currentForm).submit();
this.formSubmitted=false
}else{if(!c&&this.pendingRequest===0&&this.formSubmitted){a(this.currentForm).triggerHandler("invalid-form",[this]);
this.formSubmitted=false
}}},previousValue:function(b){return a.data(b,"previousValue")||a.data(b,"previousValue",{old:null,valid:true,message:this.defaultMessage(b,"remote")})
}},classRuleSettings:{required:{required:true},email:{email:true},url:{url:true},date:{date:true},dateISO:{dateISO:true},number:{number:true},digits:{digits:true},creditcard:{creditcard:true}},addClassRules:function(b,c){if(b.constructor===String){this.classRuleSettings[b]=c
}else{a.extend(this.classRuleSettings,b)
}},classRules:function(c){var d={};
var b=a(c).attr("class");
if(b){a.each(b.split(" "),function(){if(this in a.validator.classRuleSettings){a.extend(d,a.validator.classRuleSettings[this])
}})
}return d
},attributeRules:function(c){var e={};
var b=a(c);
for(var f in a.validator.methods){var d;
if(f==="required"){d=b.get(0).getAttribute(f);
if(d===""){d=true
}d=!!d
}else{d=b.attr(f)
}if(d){e[f]=d
}else{if(b[0].getAttribute("type")===f){e[f]=true
}}}if(e.maxlength&&/-1|2147483647|524288/.test(e.maxlength)){delete e.maxlength
}return e
},metadataRules:function(b){if(!a.metadata){return{}
}var c=a.data(b.form,"validator").settings.meta;
return c?a(b).metadata()[c]:a(b).metadata()
},staticRules:function(c){var d={};
var b=a.data(c.form,"validator");
if(b.settings.rules){d=a.validator.normalizeRule(b.settings.rules[c.name])||{}
}return d
},normalizeRules:function(c,b){a.each(c,function(f,e){if(e===false){delete c[f];
return
}if(e.param||e.depends){var d=true;
switch(typeof e.depends){case"string":d=!!a(e.depends,b.form).length;
break;
case"function":d=e.depends.call(b,b);
break
}if(d){c[f]=e.param!==undefined?e.param:true
}else{delete c[f]
}}});
a.each(c,function(d,e){c[d]=a.isFunction(e)?e(b):e
});
a.each(["minlength","maxlength","min","max"],function(){if(c[this]){c[this]=Number(c[this])
}});
a.each(["rangelength","range"],function(){if(c[this]){c[this]=[Number(c[this][0]),Number(c[this][1])]
}});
if(a.validator.autoCreateRanges){if(c.min&&c.max){c.range=[c.min,c.max];
delete c.min;
delete c.max
}if(c.minlength&&c.maxlength){c.rangelength=[c.minlength,c.maxlength];
delete c.minlength;
delete c.maxlength
}}if(c.messages){delete c.messages
}return c
},normalizeRule:function(c){if(typeof c==="string"){var b={};
a.each(c.split(/\s/),function(){b[this]=true
});
c=b
}return c
},addMethod:function(b,d,c){a.validator.methods[b]=d;
a.validator.messages[b]=c!==undefined?c:a.validator.messages[b];
if(d.length<3){a.validator.addClassRules(b,a.validator.normalizeRule(b))
}},methods:{required:function(c,b,e){if(!this.depend(e,b)){return"dependency-mismatch"
}if(b.nodeName.toLowerCase()==="select"){var d=a(b).val();
return d&&d.length>0
}if(this.checkable(b)){return this.getLength(c,b)>0
}return a.trim(c).length>0
},remote:function(f,c,g){if(this.optional(c)){return"dependency-mismatch"
}var d=this.previousValue(c);
if(!this.settings.messages[c.name]){this.settings.messages[c.name]={}
}d.originalMessage=this.settings.messages[c.name].remote;
this.settings.messages[c.name].remote=d.message;
g=typeof g==="string"&&{url:g}||g;
if(this.pending[c.name]){return"pending"
}if(d.old===f){return d.valid
}d.old=f;
var b=this;
this.startRequest(c);
var e={};
e[c.name]=f;
a.ajax(a.extend(true,{url:g,mode:"abort",port:"validate"+c.name,dataType:"json",data:e,success:function(i){b.settings.messages[c.name].remote=d.originalMessage;
var k=i===true||i==="true";
if(k){var h=b.formSubmitted;
b.prepareElement(c);
b.formSubmitted=h;
b.successList.push(c);
delete b.invalid[c.name];
b.showErrors()
}else{var l={};
var j=i||b.defaultMessage(c,"remote");
l[c.name]=d.message=a.isFunction(j)?j(f):j;
b.invalid[c.name]=true;
b.showErrors(l)
}d.valid=k;
b.stopRequest(c,k)
}},g));
return"pending"
},minlength:function(d,b,e){var c=a.isArray(d)?d.length:this.getLength(a.trim(d),b);
return this.optional(b)||c>=e
},maxlength:function(d,b,e){var c=a.isArray(d)?d.length:this.getLength(a.trim(d),b);
return this.optional(b)||c<=e
},rangelength:function(d,b,e){var c=a.isArray(d)?d.length:this.getLength(a.trim(d),b);
return this.optional(b)||(c>=e[0]&&c<=e[1])
},min:function(c,b,d){return this.optional(b)||c>=d
},max:function(c,b,d){return this.optional(b)||c<=d
},range:function(c,b,d){return this.optional(b)||(c>=d[0]&&c<=d[1])
},email:function(c,b){return this.optional(b)||/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@([a-z0-9-]+)((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(c)
},url:function(c,b){return this.optional(b)||/^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(c)
},date:function(c,b){c=c.split("/")[1]+"/"+c.split("/")[0]+"/"+c.split("/")[2];
return this.optional(b)||!/Invalid|NaN/.test(new Date(c))
},dateISO:function(c,b){return this.optional(b)||/^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/.test(c)
},number:function(c,b){return this.optional(b)||/^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(c)
},digits:function(c,b){return this.optional(b)||/^\d+$/.test(c)
},creditcard:function(f,c){if(this.optional(c)){return"dependency-mismatch"
}if(/[^0-9 \-]+/.test(f)){return false
}var g=0,e=0,b=false;
f=f.replace(/\D/g,"");
for(var h=f.length-1;
h>=0;
h--){var d=f.charAt(h);
e=parseInt(d,10);
if(b){if((e*=2)>9){e-=9
}}g+=e;
b=!b
}return(g%10)===0
},equalTo:function(c,b,e){var d=a(e);
if(this.settings.onfocusout){d.unbind(".validate-equalTo").bind("blur.validate-equalTo",function(){a(b).valid()
})
}return c===d.val()
}}});
a.format=a.validator.format
}(jQuery));
(function(c){var a={};
if(c.ajaxPrefilter){c.ajaxPrefilter(function(f,e,g){var d=f.port;
if(f.mode==="abort"){if(a[d]){a[d].abort()
}a[d]=g
}})
}else{var b=c.ajax;
c.ajax=function(e){var f=("mode" in e?e:c.ajaxSettings).mode,d=("port" in e?e:c.ajaxSettings).port;
if(f==="abort"){if(a[d]){a[d].abort()
}return(a[d]=b.apply(this,arguments))
}return b.apply(this,arguments)
}
}}(jQuery));
(function(a){if(!jQuery.event.special.focusin&&!jQuery.event.special.focusout&&document.addEventListener){a.each({focus:"focusin",blur:"focusout"},function(c,b){a.event.special[b]={setup:function(){this.addEventListener(c,d,true)
},teardown:function(){this.removeEventListener(c,d,true)
},handler:function(g){var f=arguments;
f[0]=a.event.fix(g);
f[0].type=b;
return a.event.handle.apply(this,f)
}};
function d(f){f=a.event.fix(f);
f.type=b;
return a.event.handle.call(this,f)
}})
}a.extend(a.fn,{validateDelegate:function(d,c,b){return this.bind(c,function(e){var f=a(e.target);
if(f.is(d)){return b.apply(f,arguments)
}})
}})
}(jQuery));
(function(b,a,c){b.rfi=(function(){function d(){var f=this,e=true;
this.checkConfigAvailable=function(g){if(g==c){return false
}else{return true
}};
this.associatedDropdown=function(i,g){if(g.items!=c){switch(i){case"country":var h=g.isdCode;
if(h.indexOf("+")===false||h.indexOf("+")===-1){h="+"+h
}a(".rfi_city_code").prop("placeholder",h).prop("value",h);
a("#city").empty();
a("#location").empty();
a(".smart-city").prop("value","");
a(".smart-location").prop("value","");
f.populateDropdown("city","smart-city",g.items);
break;
case"city":a(".smart-location").prop("value","");
a("#location").empty();
f.populateDropdown("location","smart-location",g.items);
break;
case"level":a(".smart-discipline").prop("value","");
a(".smart-program").prop("value","");
a("#program").empty();
a("#discipline").empty();
f.populateDropdown("discipline","smart-discipline",g.items);
break;
case"discipline":a(".smart-program").prop("value","");
a("#program").empty();
f.populateDropdown("program","smart-program",g.items);
break
}}else{if(i=="countryind"){var h=g.isdCode;
if(h.indexOf("+")===false||h.indexOf("+")===-1){h="+"+h
}a(".rfi_city_code").prop("placeholder",h).prop("value",h)
}}};
this.populateDropdown=function(k,j,i){a("#"+k).empty().append("<option value=''>Select "+k+"</option>");
if(i[0].singleValue=="true"){a(".request4info #"+k).siblings(".custom-combobox").find("input.custom-combobox-input").val(i[0].value);
a("#hid"+k).val(i[0].value);
if(k=="level"){a("#programLevelFieldId").hide()
}else{if(k=="discipline"){a("#disciplineFieldId").hide()
}else{if(k=="program"){a("#programFieldId").hide()
}}}f.associatedDropdown(k,i[0]);
return
}else{if(k=="level"){a("#programLevelFieldId").show()
}else{if(k=="discipline"){a("#disciplineFieldId").show()
}else{if(k=="program"){a("#programFieldId").show()
}}}}if(!f.checkConfigAvailable(i)){return null
}var h="";
for(var g=0;
g<i.length;
g++){h="<option value='"+i[g].value+"'>"+i[g].name+"</option>";
a("#"+k).append(h)
}a(".request4info #rfi-form").on("change","."+j,function(o){for(var m=0;
m<i.length;
m++){var n=a.trim(a(this).val().toLowerCase());
var l=a.trim(i[m].name.toLowerCase());
a("#hid"+k).val(a(this).siblings(".myData").val());
if(n==l){f.associatedDropdown(k,i[m])
}}})
};
this.initializeFieldPopulate=function(i,j,h){var g=b.rfiConfig;
if((a(".news-flash-banner").length>0)&&(!a(".news-flash-banner").hasClass("hide-news-flash"))){a(".request4info.manipal-web-view").addClass("newsflashShowing")
}if(a(".request4info #"+i).length>0){a(".request4info #"+i).combobox({name:i,eleCls:"smart-"+i});
a(".smart-"+i).prop("placeholder",g.placeholder[i]).addClass("rfi_"+i);
a("input.smart-"+i).attr("aria-label",i+" dropdown")
}if(a(".request4info #"+j).length>0){a(".request4info #"+j).combobox({name:j,eleCls:"smart-"+j});
a(".smart-"+j).prop("placeholder",g.placeholder[j]).addClass("rfi_"+j)
}if(a(".request4info #"+h).length>0){a(".request4info #"+h).combobox({name:h,eleCls:"smart-"+h});
a(".smart-"+h).prop("placeholder",g.placeholder[h]).addClass("rfi_"+h)
}if(g[i]!=c&&g[i].length>0){f.populateDropdown(i,"smart-"+i,g[i])
}else{if(g[j]!=c&&g[j].length>0){f.populateDropdown(j,"smart-"+j,g[j])
}else{if(g[h]!=c&&g[h].length>0){f.populateDropdown(h,"smart-"+h,g[h])
}}}};
this.emailValidate=function(){var g=a(".request4info #rfi-form .rfi-info, .request4info .ui-widget input, .request4info .phonewithcode input");
a(g).blur(function(L){var t=a(this),C=a(".request4info #rfi-form input[name='studentName']").val(),B=a(".request4info #rfi-form input[name='referralName']").val(),G=a(".request4info #rfi-form input[name='email']").val(),k=a(".request4info #rfi-form input[name='mobileNumber']").val(),E=a(".request4info #rfi-form input[name='referralEmailId']").val(),x=a(".request4info #rfi-form input[name='referralMobile']").val(),A=a(".request4info #rfi-form input[name='captcha']").val(),o=a(".request4info #rfi-form input[name='zipCode']").val(),n=a(".request4info #rfi-form input[name='eligibility']").val(),K=a(".request4info #rfi-form input[name='income']").val(),H=a(".request4info #rfi-form input[name='experience']").val(),s=a(".request4info #rfi-form input[name='company']").val(),v=a(".request4info #rfi-form input[name='nationality']").val(),I=a(".request4info #hidcountry").val(),J=a(".request4info #hidcity").val(),z=a(".request4info #hidlocation").val(),l=a(".request4info #hidcourse").val(),F=a(".request4info #rfi-form .phonewithcode .citycode").val(),D=a(".request4info #rfi-form .phonewithcode .altcitycode").val(),w=a(".request4info #rfi-form .phonewithcode .phone").val(),j=a(".request4info #rfi-form .phonewithcode .altphone").val(),i=a(".request4info #hidlevel").val(),y=a(".request4info #hiddiscipline").val(),h=a(".request4info #hidprogram").val(),u=a(".request4info #rfi-form input[name='query']").val(),r=a(".request4info #rfi-form input[name='custom1']").val(),p=a(".request4info #rfi-form input[name='custom2']").val(),m=a(".request4info #hidgenericDetails").val(),M="";
M={name:C,refname:B,email:G,mobileNumber:k,refemail:E,refmobile:x,zipCode:o,eligibility:n,income:K,experience:H,company:s,nationality:v,countryId:I,cityId:J,locationId:z,course:l,isdCode:F,alternateIsdCode:D,studentPhone:w,alternateMobileNumber:j,programLevelId:i,streamId:y,programId:h,query:u,custom1:r,genericTableId:m};
if(a.trim(t.val())==""){if(!t.hasClass("error")&&!t.hasClass("custom-error")){f.printErrorMsg(t)
}}else{t.removeClass("error").siblings("label.custom-error, label.error").remove()
}if(t.prop("name")=="studentName"){return
}if(a(".request4info #rfi-form input[name='email']").val()!=c&&a(".request4info #rfi-form input[name='email']").val()!=null){a.ajax({type:"POST",data:M,url:"/bin/manipal/lppartialsave",dataType:"jsonp"})
}});
return false
};
this.printErrorMsg=function(g){if(g.hasClass("rfi_student_name")){g.addClass("error").after('<label for="country" generated="true" class="custom-error">Please enter your name</label>')
}if(g.hasClass("rfi_ref_student_name")){g.addClass("error").after('<label for="country" generated="true" class="custom-error">Please enter your name</label>')
}if(g.hasClass("rfi_zip_code")){g.addClass("error").after('<label for="country" generated="true" class="custom-error">Please enter valid zipcode</label>')
}if(g.hasClass("rfi_eligibility")){g.addClass("error").after('<label for="country" generated="true" class="custom-error">Please enter valid data</label>')
}if(g.hasClass("rfi_income")){g.addClass("error").after('<label for="country" generated="true" class="custom-error">Please enter valid income</label>')
}if(g.hasClass("rfi_experience")){g.addClass("error").after('<label for="country" generated="true" class="custom-error">Please enter valid data</label>')
}if(g.hasClass("rfi_company")){g.addClass("error").after('<label for="country" generated="true" class="custom-error">Please enter valid data</label>')
}if(g.hasClass("rfi_nationality")){g.addClass("error").after('<label for="country" generated="true" class="custom-error">Please enter valid data</label>')
}if(g.hasClass("rfi_student_phone")){g.addClass("error").after('<label for="country" generated="true" class="custom-error">Please enter valid number</label>')
}if(g.hasClass("rfi_city_code")){g.addClass("error").after('<label for="country" generated="true" class="custom-error">Please enter correct data</label>')
}if(g.hasClass("rfi_mobile_number")){g.addClass("error").after('<label for="mobileNumber" generated="true" class="error">Please enter valid mobile number</label>')
}if(g.hasClass("rfi_alt_mobile_number")){g.addClass("error").after('<label for="country" generated="true" class="custom-error">Please enter valid alt number</label>')
}if(g.hasClass("rfi_query")){g.addClass("error").after('<label for="country" generated="true" class="custom-error">Please enter your query</label>')
}if(g.hasClass("rfi_ref_mobile")){g.addClass("error").after('<label for="country" generated="true" class="custom-error">Please enter correct data</label>')
}if(g.hasClass("rfi_country")){g.addClass("error").after('<label for="country" generated="true" class="custom-error">Please select a country</label>')
}if(g.hasClass("rfi_countryind")){g.addClass("error").after('<label for="country" generated="true" class="custom-error">Please select a country</label>')
}if(g.hasClass("rfi_city")){g.addClass("error").after('<label for="country" generated="true" class="custom-error">Please select a city</label>')
}if(g.hasClass("rfi_cityind")){g.addClass("error").after('<label for="country" generated="true" class="custom-error">Please select a city</label>')
}if(g.hasClass("rfi_level")){g.addClass("error").after('<label for="country" generated="true" class="custom-error">Please select a level</label>')
}if(g.hasClass("rfi_discipline")){g.addClass("error").after('<label for="country" generated="true" class="custom-error">Please select a discipline</label>')
}if(g.hasClass("rfi_program")){g.addClass("error").after('<label for="country" generated="true" class="custom-error">Please select a program</label>')
}if(g.hasClass("rfi_location")){g.addClass("error").after('<label for="country" generated="true" class="custom-error">Please select a location</label>')
}if(g.hasClass("rfi_course")){g.addClass("error").after('<label for="country" generated="true" class="custom-error">Please select a course</label>')
}if(g.hasClass("rfi_stateInd")){g.addClass("error").after('<label for="country" generated="true" class="custom-error">Please select a state</label>')
}};
this.mobileValidate=function(){var h=a(".request4info .phonewithcode .mobile, .request4info .phonewithcode .rfi_mobile_number");
var g=a(".request4info .phonewithcode .citycode, .request4info .phonewithcode .rfi_city_code");
a(h).blur(function(){if(a.trim(a(this).val()).length<=0){return false
}if((g.val()=="+91"&&a.trim(a(this).val()).length!=10)||!/^\d*$/.test(a(this).val())){if(a(this).hasClass("error")){a(this).next("label.error").remove();
a(this).next("label.custom-error").remove();
a(this).after('<label for="email" generated="true" class="error">Please enter 10 digits</label>')
}else{a(this).after('<label for="email" generated="true" class="error">Please enter 10 digits</label>');
a(this).addClass("error")
}}else{if((a.trim(a(this).val()).length<7||a.trim(a(this).val()).length>11)||!/^\d*$/.test(a(this).val())){if(a(this).hasClass("error")){a(this).next("label.error").remove();
a(this).next("label.custom-error").remove();
a(this).after('<label for="email" generated="true" class="error">Please enter valid number</label>')
}else{a(this).after('<label for="email" generated="true" class="error">Please enter valid number</label>');
a(this).addClass("error")
}}}})
};
this.formValidation=function(){var h=a(".request4info #rfi-form .phonewithcode .citycode").val();
if(h!=c){if(h.indexOf("+")===false||h.indexOf("+")===-1){a(".request4info #rfi-form .phonewithcode .citycode").val("+"+h)
}}a(".request4info #rfi-form .dropdown-options").off().on("click",function(){var i=a(this);
i.parent().siblings(".default-state").removeClass("error");
i.parent().siblings(".default-state").addClass("selected")
});
a(".request4info #rfi-form .rfi-submit").off().on("click",function(r){r.preventDefault();
var o=a(".request4info #country").siblings(".custom-combobox").find("input.custom-combobox-input"),t=a(".request4info #countryind").siblings(".custom-combobox").find("input.custom-combobox-input"),w=a(".request4info #city").siblings(".custom-combobox").find("input.custom-combobox-input"),n=a(".request4info #cityind").siblings(".custom-combobox").find("input.custom-combobox-input"),j=a(".request4info #stateInd").siblings(".custom-combobox").find("input.custom-combobox-input"),v=a(".request4info #level").siblings(".custom-combobox").find("input.custom-combobox-input"),p=a(".request4info #discipline").siblings(".custom-combobox").find("input.custom-combobox-input"),i=a(".request4info #program").siblings(".custom-combobox").find("input.custom-combobox-input"),l=a(".request4info #location").siblings(".custom-combobox").find("input.custom-combobox-input"),s=a(".request4info #course").siblings(".custom-combobox").find("input.custom-combobox-input");
if(a(o).parent().parent().is(":visible")){if(a(o).val()==""&&!a(o).hasClass("error")){a(o).after('<label for="country" generated="true" class="custom-error">Please select a country</label>');
a(o).addClass("error")
}}if(a(t).parent().parent().is(":visible")){if(a(t).val()==""&&!a(t).hasClass("error")){a(t).after('<label for="country" generated="true" class="custom-error">Please select a country</label>');
a(t).addClass("error")
}}if(a(w).parent().parent().is(":visible")){if(a(w).val()==""&&!a(w).hasClass("error")){a(w).after('<label for="city" generated="true" class="custom-error">Please select a city</label>');
a(w).addClass("error")
}}if(a(n).parent().parent().is(":visible")){if(a(n).val()==""&&!a(n).hasClass("error")){a(n).after('<label for="city" generated="true" class="custom-error">Please select a city</label>');
a(n).addClass("error")
}}if(a(v).parent().parent().is(":visible")){if(a(v).val()==""&&!a(v).hasClass("error")){a(v).after('<label for="level" generated="true" class="custom-error">Please select a level</label>');
a(v).addClass("error")
}}if(a(j).parent().parent().is(":visible")){if(a(j).val()==""&&!a(j).hasClass("error")){a(j).after('<label for="city" generated="true" class="custom-error">Please select a state</label>');
a(j).addClass("error")
}}if(a(p).parent().parent().is(":visible")){if(a(p).val()==""&&!a(p).hasClass("error")){a(p).after('<label for="discipline" generated="true" class="custom-error">Please select a discipline</label>');
a(p).addClass("error")
}}if(a(i).parent().parent().is(":visible")){if(a(i).val()==""&&!a(i).hasClass("error")){a(i).after('<label for="program" generated="true" class="custom-error">Please select a program</label>');
a(i).addClass("error")
}}if(a(l).parent().parent().is(":visible")){if(a(l).val()==""&&!a(l).hasClass("error")){a(l).after('<label for="location" generated="true" class="custom-error">Please select a location</label>');
a(l).addClass("error")
}}if(a(s).parent().parent().is(":visible")){if(a(s).val()==""&&!a(s).hasClass("error")){a(s).after('<label for="location" generated="true" class="custom-error">Please select a course</label>');
a(s).addClass("error")
}}f.emailValidateSureVerify();
var m=a(".request4info .terms-container .terms-checkbox");
var k=true;
if(a(".terms-checkbox")!=null){if(a(m).length>0){if(!a(m).is(":checked")){if(!a(m).hasClass("error")){a(m).addClass("error");
a(m).parent().append('<label generated="true" class="custom-error">This field is mandatory</label>')
}k=false
}else{a(m).removeClass("error");
a(".request4info .terms-container").find(".custom-error").remove();
k=true
}}}if(a(".request4info #rfi-form").valid()&&!a(".custom-combobox-input").hasClass("error")&&k){a("#rfi-form .rfi-submit").prop("disabled","disabled");
if(e){a(".request4info #rfi-form").submit();
e=false
}}else{if(a("#rfi-form label.error,#rfi-form label.custom-error").length>0){a("#request4info .submit-error-msg").remove();
a("#request4info h4").after('<label class="submit-error-msg btn-sr-only" aria-label="Please fill the complete form" role="button">Please fill the complete form</label>');
var u=a("label.error, label.custom-error");
a.each(u,function(y,x){a(x).attr("aria-label",a(x).html())
});
setTimeout(function(){a("#request4info").focus()
})
}}});
jQuery.validator.addMethod("exactlength",function(j,i,k){return this.optional(i)||j.length==k
},jQuery.format("Please enter {0} digits"));
jQuery.validator.addMethod("alpha",function(j,i){return this.optional(i)||j==j.match(/^[a-zA-Z .]*$/)
},jQuery.format("Please enter alphabets only"));
var g=0;
jQuery.validator.addMethod("checklength",function(k,j,l){var i=a(".request4info .phonewithcode .citycode, .request4info .phonewithcode .rfi_city_code");
var m=true;
if(i.val()=="+91"&&a.trim(k).length!=10){m=false;
g=1
}else{if((a.trim(k).length<7||a.trim(k).length>11)){m=false;
g=2
}}return m
},function(j,i,l){console.log(g);
var k="Please enter valid number";
if(g==1){k="Please enter 10 digits"
}else{if(g==2){k="Please enter valid number"
}}return k
});
a(".request4info #rfi-form").validate({onfocusout:false,onkeyup:false,rules:{email:{required:true},referralEmailId:{required:true},studentName:{required:true,digits:false,alpha:a(".rfi_student_name").val()},refstudentname:{required:true,digits:false,alpha:a(".referral_student_name").val()},zipCode:{required:true,digits:false},eligibility:{required:true,digits:false},income:{required:true,digits:false},experience:{required:true,digits:false},company:{required:true,digits:false},nationality:{required:true,digits:false},isdCode:{required:true},studentPhone:{required:true,maxlength:12,digits:true},alternateIsdCode:{required:true,maxlength:12},alternateMobileNumber:{required:true,maxlength:12,digits:true},query:{required:true,maxlength:100},ipa:{required:true},cityCode:{required:true},mobileNumber:{required:true,checklength:true,digits:true},referralName:{required:true},referralMobile:{required:true,checklength:true},captcha:{required:true}},messages:{studentName:{required:"Please enter your name"},email:{required:"Please enter a valid email address"},referralEmailId:{required:"Please enter a valid email address"},refstudentname:{required:"Please enter your name"},zipCode:{required:"Please enter valid zipcode"},eligibility:{required:"Please enter valid data",eligibility:"Please enter valid data"},income:{required:"Please enter valid income",income:"Please enter valid income"},experience:{required:"Please enter valid data",experience:"Please enter valid data"},company:{required:"Please enter valid data",company:"Please enter valid data"},nationality:{required:"Please enter valid data",nationality:"Please enter valid data"},studentPhone:{required:"Please enter valid number",studentPhone:"Please enter valid number"},ipa:{required:"Please enter correct data"},cityCode:{required:"Please enter correct data"},mobileNumber:{required:"Please enter valid mobile number"},alternateMobileNumber:{required:"Please enter valid alt number"},query:{required:"Please enter your query"},referralName:{required:"Please enter correct data"},referralMobile:{required:"Please enter correct data"},captcha:{required:"Please enter verification code"}}})
};
this.emailValidateSureVerify=function(){a(".request4info .email_field_rfi , .request4info .referral_email_field").blur(function(i){var j=(a(i.target).length==0)?"":a(i.target),g=a(this);
var h=/^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
a(g).next(".error").remove();
a(g).removeClass("error");
if(!h.test(j.val())){a(g).after('<label for="email" generated="true" class="error">Please enter a valid email address</label>');
a(g).addClass("error")
}});
return false
};
this.smartComboCheck=function(j){var i="#"+j,g=a(i).siblings(".custom-combobox").find("input");
var h=a(g).val();
a(i).find("option").filter(function(l,k){if((a.trim(a(k).text())).toLowerCase()==a.trim(h).toLowerCase()){a(i).siblings().find(".myData").val(a(k).val());
a("#hid"+j).val(a(k).val())
}})
};
this.init=function(){if(b.rfiConfig==c){return null
}a(document).ready(function(){a(".request4info .rfi-radio-link").hide();
a(a(".request4info .nav-tabs li")[1]).hide();
a(".request4info").addClass("show_rfi_dialogue");
f.initializeFieldPopulate("country","city","location");
f.initializeFieldPopulate("level","discipline","program");
f.initializeFieldPopulate("course");
f.initializeFieldPopulate("cityind");
f.initializeFieldPopulate("genericDetails");
f.initializeFieldPopulate("countryind");
f.initializeFieldPopulate("stateInd");
f.formValidation();
f.emailValidate();
f.emailValidateSureVerify();
f.mobileValidate();
a("input.custom-combobox-input").blur(function(){if(a(this).siblings(".myData").val()!=null){var g=a(this).parent().siblings("select").prop("id");
f.smartComboCheck(g)
}})
});
return this
}
}return new d()
}())
}(window.manipal=window.manipal||{},jQuery));
$(document).ready(function(){if($("#request4info").html()!=undefined){var a="MU";
$.ajax({type:"GET",dataType:"JSON",cache:true,contentType:"application/json",url:"/bin/manipal/components/rfi/MU/GET.servlet",success:function(b){window.manipal=window.manipal||{};
window.manipal.rfiConfig={};
window.manipal.rfiConfig=$.parseJSON(JSON.stringify(b));
if(window.manipal.rfi!=undefined){window.manipal.rfi.init()
}}})
}if($("table")){$("table").wrap("<div class='table-responsive'></div>")
}if($("#myCarousel").html()!=""&&$("#request4info").html()!=""){$("#myCarousel").append($("#request4info"));
$("#myCarousel #request4info").show()
}if($("#listing_type").val()=="research-list"){$("#research-listing-wrapper").show();
if($("#researchListFilterContainer").val()!=undefined){window.manipal=window.manipal||{};
window.manipal.researchListFilterConfig={};
window.manipal.researchListFilterConfig=$.parseJSON($("#researchListFilterContainer").val());
window.manipal.researchListing.init()
}if($("#researchListContainer").val()!=undefined){window.manipal.researchListConfig={};
window.manipal.researchListConfig=$.parseJSON($("#researchListContainer").val());
window.manipal.researchListComponent.init()
}}else{if($("#listing_type").val()=="publication-list"){$("#publication-listing-wrapper").show();
window.manipal=window.manipal||{};
window.manipal.c29_a_5_config={};
window.manipal.c29_a_5_config=$.parseJSON($("#researchListFilterContainer").val());
window.manipal.publicationListConfig={};
window.manipal.publicationListConfig=$.parseJSON($("#researchListContainer").val());
if(window.manipal.c29_a_5_config!=undefined){window.manipal.c129a5.init()
}if(window.manipal.publicationListConfig!=undefined){window.manipal.publicationListComponent.init()
}}else{if($("#listing_type").val()=="student-project-list"){$("#studentProject-listing-wrapper").show();
window.manipal=window.manipal||{};
window.manipal.c29_a_5_config={};
window.manipal.c29_a_5_config=$.parseJSON($("#researchListFilterContainer").val());
window.manipal.studentProjectListConfig={};
window.manipal.studentProjectListConfig=$.parseJSON($("#researchListContainer").val());
if(window.manipal.c29_a_5_config!=undefined){window.manipal.c129a5.init()
}if(window.manipal.studentProjectListConfig!=undefined){window.manipal.studentProjectListComponent.init()
}}}}if($(".content-panel-left-nav-wrapper").html()!=""){$(".content-panel-left-nav-wrapper .left-nav li:first-child").addClass("content-panel-select");
$(".content-panel-left-nav-wrapper .side-tab-content .content-panel-content-placeholder:first-child").addClass("content-panel-select");
$(".content-panel-left-nav-wrapper .btn-default span").html($(".content-panel-left-nav-wrapper .content-panel-select span").html())
}if($("#dapartmentDetails").html()!=""){$("#dapartmentDetails .js-tab-selection li:first-child a").click();
if($("#dapartmentDetails .js-tab-selection li").length==1){$("#dapartmentDetails").addClass("single-tab")
}}truncate=function(b,c){return b.split("").slice(0,b.lastIndexOf(" ",c)).join("")+"..."
};
$(".news-events-wp .content-title").html(truncate($(".news-events-wp .content-title").text(),100));
$(".news-events-wp .content-decription").html(truncate($(".news-events-wp .content-decription").text(),200))
});
$(function(){$(".js-search-button").click(function(){$("#search-overlay").addClass("visible");
$("#search-form .typeahead.tt-input").val("")
});
$(".js-search-button").keypress(function(b){var a=b.which;
if(a==13){$("#search-overlay").addClass("visible");
$("#search-form .typeahead.tt-input").val("");
return false
}});
$(".mobile-magnifier button").click(function(){$("#search-overlay-mobile").addClass("visible");
$("#search-form .typeahead.tt-input").val("")
});
$(".mobile-magnifier button").keypress(function(b){var a=b.which;
if(a==13){$("#search-overlay-mobile").addClass("visible");
$("#search-form .typeahead.tt-input").val("");
return false
}});
$(".search-close").click(function(){$("#search-overlay").removeClass("visible");
$("#search-overlay-mobile").removeClass("visible")
});
$(".search-close").keypress(function(b){var a=b.which;
if(a==13){$(this).click();
return false
}})
});
$(function(){document.addEventListener("keydown",function(a){if(a.keyCode===9){$("body").addClass("show-focus-outlines")
}});
document.addEventListener("click",function(a){$("body").removeClass("show-focus-outlines")
})
});
$(function(){function a(){$("span.search-error-wp").html("");
var b=true;
$("#search-form input").each(function(){if($(this).val()==" "){$(this).next().html("Error: Empty Search Field. Please enter a text");
b=false
}});
return b
}});
$(document).ready(function(){function a(){$(".study-dropdown-ul .study-dropdown-menu,.footer-dropdown-submenu").each(function(){$(this).removeClass("dropdown-menu")
});
$(".faculty-dropdown").removeClass("dropdown-menu");
$(".faculty-dropdown-link").addClass("desktop-faculty-link");
$(".study-dropdown-menu").show();
$(".dropdown-submenu a.study-dropdown-link, .study-container2 a.study-dropdown-link,.accordion,a.desktop-faculty-link,a.program-dropdown-link,a.footer-menu-dropdown").on("click",function(d){$(this).next("ul").toggle();
d.stopPropagation();
d.preventDefault()
});
$(".study-dropdown-container").on("click",function(d){if(!(d.target.tagName.toLowerCase()==="a")){$(this).next("ul").toggle();
d.stopPropagation();
d.preventDefault()
}});
$(".accordion").on("click",function(f){var d=$(this).attr("data-target");
if($(d).css("display")!="block"){$(".accordion-content").each(function(){if($(this).css("display")=="block"){$(this).toggle();
$(this).prev().children(".top-nav-menu-wp").find(".accordion").toggleClass("plus");
$(this).prev().parent().find("ul li:first").toggleClass("highlightSelectedLink");
if(!$(this).prev().children(".accordion").hasClass("plus")){$(this).prev().children(".accordion").parent().find("ul li").toggleClass("highlightSelectedLink")
}else{$(this).prev().children(".accordion").parent().find("ul li").removeClass("highlightSelectedLink")
}}$(this).css("display","none")
})
}$(d).toggle();
$(f.target).toggleClass("plus");
if(!$(f.target).hasClass("plus")){$(this).parent().find("ul li:first").toggleClass("highlightSelectedLink");
firstOpen=$(this).parent().find("ul li:first a").attr("data-target");
if($(firstOpen).css("display")=="none"){$(".accordion-content .collapse").css("display","none");
$(firstOpen).css("display","block")
}}else{$(this).parent().find("ul li").removeClass("highlightSelectedLink")
}});
$(".desktop-faculty-link").click(function(){if($(this).closest(".faculty-dropdown").next(".accordion.hidden-sm.hidden-xs").length>0){$(this).closest(".faculty-dropdown").next(".accordion").trigger("click")
}});
$("a.desktop-faculty-link,a.program-dropdown-link").on("click",function(f){var d=$(this).attr("data-target");
if($(this).parent().hasClass("highlightSelectedLink active")){$(d).closest(".accordion").removeClass("plus");
$(d).closest(".accordion-content").hide();
$(d).hide()
}else{$(d).show();
$(d).closest(".accordion-content").show();
$(d).closest(".accordion").addClass("plus")
}$("a.desktop-faculty-link,a.program-dropdown-link").parent().removeClass("highlightSelectedLink active");
$(this).parent().addClass("highlightSelectedLink active");
$(d).parent().children().not(d).hide();
$(".top-navigation-wp").animate({scrollTop:$(".top-navigation-wp .js-top-nav-links").height()},500,"linear");
f.stopImmediatePropagation()
});
$("button.close-dropdown").on("click",function(d){$(this).closest(".secondaryNavLi.open").children(".secondaryNavLink[data-toggle='dropdown']").click()
})
}function c(){$(".dropdown-submenu a.study-dropdown-link,.study-container2 a.study-dropdown-link,.accordion,a.desktop-faculty-link,a.program-dropdown-link,a.footer-menu-dropdown").unbind("click");
$(".study-dropdown-container").unbind("click");
$(".accordion").unbind("click");
$("a.desktop-faculty-link,a.program-dropdown-link").unbind("click");
$(".study-dropdown-menu").show();
$(".dropdown-submenu a.study-dropdown-link,.study-container2 a.study-dropdown-link,a.footer-menu-dropdown").on("click",function(d){$(this).closest("ul").find(".study-dropdown-link").siblings().slideUp();
$(this).next("ul").toggle();
d.stopPropagation();
d.preventDefault()
});
$(".study-dropdown-ul .study-dropdown-menu").each(function(){$(this).addClass("dropdown-menu");
$(this).toggle()
});
$(".footer-dropdown-submenu").each(function(){$(this).addClass("dropdown-menu")
});
$(".faculty-dropdown").addClass("dropdown-menu");
$("a.desktop-faculty-link,a.program-dropdown-link").on("click",function(f){var d=$(this).attr("data-target");
if($(this).parent().hasClass("highlightSelectedLink active")){$(d).closest(".accordion").removeClass("plus");
$(d).closest(".accordion-content").hide();
$(d).hide()
}else{$(d).show();
$(d).closest(".accordion-content").show();
$(d).closest(".accordion").addClass("plus")
}$("a.desktop-faculty-link,a.program-dropdown-link").parent().removeClass("highlightSelectedLink active");
$(this).parent().addClass("highlightSelectedLink active");
$(d).parent().children().not(d).hide();
$(".top-navigation-wp").animate({scrollTop:$(".top-navigation-wp .js-top-nav-links").height()},500,"linear");
f.stopImmediatePropagation()
})
}if(screen.width>1300){a()
}else{c();
$.each($(".faculty-dropdown-link"),function(e,d){if($(d).attr("data-target")){$.each($(".faculty-collapsible-content"),function(f,g){if($(g).attr("id")==$(d).attr("data-target").replace("#","")){$(d).parent().append($(g));
$(g).removeClass("in")
}})
}})
}$(".primary-links").on("click",function(){var d=$(this).attr("href");
window.open(d)
});
$(".js-menu-buton").click(function(){$(".dropup-content").toggle();
$(".js-menu-buton i").toggleClass("up footer-down")
});
$(".js-secondaryNavLi-wp").on("show.bs.dropdown",function(){$(this).closest(".secondary-navigation").addClass("nav-menu-active");
$(this).closest(".secondary-navigation-wp").addClass("logoscroll");
$(".js-overlay-wp").addClass("is-active");
$("body").addClass("overlay-active")
});
$(".js-secondaryNavLi-wp").on("hidden.bs.dropdown",function(){$(this).closest(".secondary-navigation").removeClass("nav-menu-active");
$(this).closest(".secondary-navigation-wp").removeClass("logoscroll");
$(".js-overlay-wp").removeClass("is-active");
$("body").removeClass("overlay-active");
console.log("ssdsdfdsfer")
});
var b;
window.onresize=function(){clearTimeout(b);
b=setTimeout(function(){if(screen.width>1300){a();
$.each($(".faculty-collapsible-content"),function(e,d){$(".accordion.plus").append(d)
})
}else{c();
$.each($(".faculty-dropdown-link"),function(e,d){if($(d).attr("data-target")){$.each($(".faculty-collapsible-content"),function(f,g){if($(g).attr("id")==$(d).attr("data-target").replace("#","")){$(d).parent().append($(g));
$(g).removeClass("in")
}})
}})
}},200)
};
$("#subscribeForm .subscribe-submit").on("click",function(f){f.preventDefault();
$(".subscribe-input").removeClass("emailNotValid");
$(".subscribe-input").parent().removeClass("error");
$(".subscribe-input").parent().find("p.subscribe-error").remove();
var d=/^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
if($(".subscribe-input").val()){if(d.test($(".subscribe-input").val())){$.ajax({type:"POST",url:"/bin/servlet/emailSubscribe",data:{emailSubscribe:$(".subscribe-input").val(),cPath:$(".curr-path").val()},success:function(e){if(e.error.rStatus=="Success"){$(".subscribe-sMsg").show();
$(".subscribe-fMsg").hide()
}else{$(".subscribe-sMsg").hide();
$(".subscribe-fMsg").show()
}},error:function(e){console.log(e);
$(".subscribe-sMsg").hide();
$(".subscribe-fMsg").show()
}})
}else{$(".subscribe-input").addClass("emailNotValid");
$(".subscribe-input").parent().addClass("error");
$(".subscribe-input").parent().find("input").after('<p class="subscribe-error">Please enter a valid email address</p>')
}}else{$(".subscribe-input").addClass("emailNotValid");
$(".subscribe-input").parent().addClass("error");
$(".subscribe-input").parent().find("input").after('<p class="subscribe-error">Please enter a valid email address</p>')
}})
});
$(function(){function a(){var b=$(window).width();
if(b<=768&&b<1024){$(".banner-caption-image").each(function(){var c=$(this).find("picture");
if($(this).find("picture").length>0){$(this).siblings(".banner-title").hide()
}})
}}a();
$(window).resize(a)
});
$(document).ready(function(){$(".study-dropdown-ul .desktop-link-header").each(function(a){if($(this).text().trim()==""){$(this).append("<br>")
}});
$(".showNav").click(function(a){a.preventDefault();
if($(this).hasClass("more")){$(this).closest(".study-dropdown-menu").find(".extraNav").removeClass("navHide");
$(this).removeClass("more");
$(this).text("Show Less");
$(this).closest(".dropdown-submenu").addClass("scrollOverflow")
}else{$(this).closest(".study-dropdown-menu").find(".extraNav").addClass("navHide");
$(this).addClass("more");
$(this).text("Show More");
$(this).closest(".dropdown-submenu").removeClass("scrollOverflow")
}})
});
$(function(){$("#search-overlay").on("keydown",function(b){var a=b.keyCode||b.which;
if(a==9){b.preventDefault();
$(".js-search-focus").focus()
}})
});
$(function(){$(".accordion-header-wp .collapse-btn").on("keydown",function(b){var a=b.keyCode||b.which;
if(a==9){b.preventDefault();
$(".accordion-header-wp .collapse-btn").focus()
}})
});
$(function(){$("#request4info .form-control").on("keydown",function(b){var a=b.keyCode||b.which;
if(a==13){b.preventDefault();
if($(this).hasClass("ui-widget")){$(this).click()
}}})
});
$(document).ready(function(){var f=$(".orange-square-button a");
var a=$(".solid-white-button a");
var i=$(".solid-orange-button a");
var b=$(".outline-orange-button a");
var d=$(".outline-white-button a");
var h=$(".flat-orange-button a");
var e=$(".custom-generic-tile .list-wrapper li a");
var g=$(".social-share-wp a");
var c=$(".announce-bar-main .owl-item .item a");
if(f.attr("target")=="_self"){$(".orange-square-button a").each(function(){$(this).append('<span class="btn-sr-only">Opens in Same Tab</span>')
})
}else{if(f.attr("target")=="_blank"){$(".orange-square-button a").each(function(){$(this).append('<span class="btn-sr-only">Opens in New Tab</span>')
})
}}if(a.attr("target")=="_self"){$(".solid-white-button a").each(function(){$(this).append('<span class="btn-sr-only">Opens in Same Tab</span>')
})
}else{if(a.attr("target")=="_blank"){$(".solid-white-button a").each(function(){$(this).append('<span class="btn-sr-only">Opens in New Tab</span>')
})
}}if(i.attr("target")=="_self"){$(".solid-orange-button a").each(function(){$(this).append('<span class="btn-sr-only">Opens in Same Tab</span>')
})
}else{if(i.attr("target")=="_blank"){$(".solid-orange-button a").each(function(){$(this).append('<span class="btn-sr-only">Opens in New Tab</span>')
})
}}if(b.attr("target")=="_self"){$(".outline-orange-button a").each(function(){$(this).append('<span class="btn-sr-only">Opens in Same Tab</span>')
})
}else{if(b.attr("target")=="_blank"){$(".outline-orange-button a").each(function(){$(this).append('<span class="btn-sr-only">Opens in New Tab</span>')
})
}}if(d.attr("target")=="_self"){$(".outline-white-button a").each(function(){$(this).append('<span class="btn-sr-only">Opens in Same Tab</span>')
})
}else{if(d.attr("target")=="_blank"){$(".outline-white-button a").each(function(){$(this).append('<span class="btn-sr-only">Opens in New Tab</span>')
})
}}if(h.attr("target")=="_self"){$(".flat-orange-button a").each(function(){$(this).append('<span class="btn-sr-only">Opens in Same Tab</span>')
})
}else{if(h.attr("target")=="_blank"){$(".flat-orange-button a").each(function(){$(this).append('<span class="btn-sr-only">Opens in New Tab</span>')
})
}}if(e.attr("target")=="_self"){$(".custom-generic-tile .list-wrapper li a").each(function(){$(this).append('<span class="btn-sr-only">Opens in Same Tab</span>')
})
}else{if(e.attr("target")=="_blank"){$(".custom-generic-tile .list-wrapper li a").each(function(){$(this).append('<span class="btn-sr-only">Opens in New Tab</span>')
})
}}if(g.attr("target")=="_self"){$(".social-share-wp a").each(function(){$(this).append('<span class="btn-sr-only">Opens in Same Tab</span>')
})
}else{if(g.attr("target")=="_blank"){$(".social-share-wp a").each(function(){$(this).append('<span class="btn-sr-only">Opens in New Tab</span>')
})
}}if(c.attr("target")=="_self"){$(".announce-bar-main .owl-item .item a").each(function(){$(this).append('<span class="btn-sr-only">Opens in Same Tab</span>')
})
}else{if(c.attr("target")=="_blank"){$(".announce-bar-main .owl-item .item a").each(function(){$(this).append('<span class="btn-sr-only">Opens in New Tab</span>')
})
}}});
$(function(){window.onload=function(){$(".loader").fadeOut()
}
});
$(function(){var a=$(".js-banner-carousel");
a.owlCarousel({loop:false,items:1,nav:true,autoHeight:true,navText:['<i class="fa fa-arrow-left"></i>','<i class="fa fa-arrow-right"></i>'],navSpeed:700,dots:false,dotsSpeed:700,animateOut:"fadeOut",animateIn:"fadeIn",responsiveRefreshRate:50,mouseDrag:false,touchDrag:false,pullDrag:false,rewind:false,responsive:{0:{items:1,nav:false,dots:true,mouseDrag:true,touchDrag:true,autoHeight:false},320:{items:1,dots:true,nav:false,mouseDrag:true,touchDrag:true,pullDrag:true,autoHeight:false},768:{items:1,nav:false,dots:true,mouseDrag:true,touchDrag:true,pullDrag:true,autoHeight:false},991:{items:1,nav:false,dots:true,mouseDrag:true,touchDrag:true,pullDrag:true,autoHeight:false},1024:{items:1,nav:false,dots:true,mouseDrag:true,touchDrag:true,pullDrag:true,autoHeight:false},1100:{items:1,nav:true,dots:false,mouseDrag:true,touchDrag:true,pullDrag:true,autoHeight:true},1200:{items:1,dots:false,nav:true,autoHeight:true},1440:{items:1,dots:false,nav:true,autoHeight:true}}});
$(".js-banner-carousel").find(".owl-item").attr("aria-selected","false");
$(".js-banner-carousel").find(".owl-item.active").attr("aria-selected","true");
$(".js-banner-carousel").find(".owl-prev").attr("role","button").attr("aria-label","Banner button to move to previous slide").attr("title","Previous Slide");
$(".js-banner-carousel").find(".owl-next").attr("role","button").attr("aria-label","Banner button to move to next slide").attr("title","Next Slide");
$(document).keydown(function(b){if(b.which==37){$(".owl-prev").click()
}else{if(b.which==39){$(".owl-next").click()
}}})
});
var $program=$(".program-item-carousel");
var carouselValue=$("#loopPropertyPrograms").val();
if(carouselValue){if(carouselValue=="true"){carouselValue=true
}else{carouselValue=false
}}$program.owlCarousel({loop:false,margin:30,autoplay:carouselValue,nav:false,dots:false,mouseDrag:false,touchDrag:false,pullDrag:false,rewind:true,responsive:{0:{items:1,stagePadding:50,nav:false,center:true,margin:10,mouseDrag:true,touchDrag:true,pullDrag:true,loop:false,autoplay:false},320:{items:1,stagePadding:50,nav:false,center:true,margin:10,mouseDrag:true,touchDrag:true,pullDrag:true,loop:false,autoplay:false},768:{items:3,nav:false,mouseDrag:true,touchDrag:true,pullDrag:true,loop:false,autoplay:false},991:{items:3,nav:false,mouseDrag:true,touchDrag:true,pullDrag:true,loop:false,autoplay:false},1024:{items:3,nav:false,mouseDrag:true,touchDrag:true,pullDrag:true,loop:false,autoplay:false},1200:{items:3,nav:false},1440:{items:3,nav:false}}});
$(".collaboration-item-carousel").owlCarousel({loop:false,margin:30,autoplay:$("#loopPropertyCollabrations").val(),nav:false,dots:false,rewind:true,autoWidth:true,autoHeight:true,mouseDrag:false,touchDrag:false,pullDrag:false,responsive:{0:{items:2,stagePadding:50,nav:false,margin:16,touchDrag:true,pullDrag:true,autoplay:false,rewind:false},320:{items:2,stagePadding:30,nav:false,margin:16,touchDrag:true,pullDrag:true,autoWidth:false,autoHeight:false,autoplay:false,rewind:false},360:{items:2,stagePadding:30,margin:16,touchDrag:true,pullDrag:true,autoWidth:true,autoHeight:true,autoplay:false,rewind:false},768:{items:4,stagePadding:50,margin:16,touchDrag:true,pullDrag:true,mouseDrag:true,autoplay:false,rewind:false},1024:{items:5,stagePadding:50,margin:16,touchDrag:true,pullDrag:true,mouseDrag:true,autoplay:false,rewind:false},1200:{items:4,mouseDrag:false,touchDrag:false,pullDrag:false},1400:{items:5,mouseDrag:false,touchDrag:false,pullDrag:false}}});
$(document).ready(function(){if($(".carouselHide").children().length==0){$(".homeCarousel").hide()
}else{$(".homeCarousel").show()
}$(".featured-researchers div:nth-child(2)").addClass("show");
$(".featured-researchers-thumbnail").on("click",function(a){$(".featured-researchers-thumbnail").removeClass("image-opaque featured-researchers-border");
$(this).addClass("image-opaque featured-researchers-border");
var b=$(this).attr("id");
$(this).closest(".featured-researchers").find(".g-slider-thumbnail-wp").removeClass("show");
$(".g-slider-thumbnail-wp."+b).addClass("show")
});
$(".student-experience-background div:nth-child(2)").addClass("show");
$(".featured-researchers-thumbnail").on("click",function(a){$(".featured-researchers-thumbnail").removeClass("image-opaque featured-researchers-border");
$(this).addClass("image-opaque featured-researchers-border");
var b=$(this).attr("id");
$(this).closest(".student-experience-background").find(".g-slider-thumbnail-wp").removeClass("show");
$(".g-slider-thumbnail-wp."+b).addClass("show")
});
$(".news-events-image-container div:nth-child(1)").addClass("show");
$(".news-events-image-container").find(".news-image-carousel").append("<p>"+$(".news-events-image-container div:nth-child(2)").html()+"</p>");
$(".news-image-thumbnail").on("click",function(a){$(".news-image-thumbnail").removeClass("image-opaque featured-researchers-border");
$(this).addClass("image-opaque featured-researchers-border");
var b=$(this).attr("id");
$(this).closest(".news-events-image-container").find(".image-main").removeClass("show");
$(".image-main."+b).addClass("show");
$(".news-events-image-container").find(".news-image-carousel").find(".richText").empty();
$(".news-events-image-container").find(".news-image-carousel").append("<p>"+$("."+b+".slidetext").html()+"</p>")
})
});
var $featuredimage=$(".js-featured-slider-thumbnail");
$featuredimage.owlCarousel({margin:10,loop:false,rewind:true,autoplay:true,nav:false,dots:false,responsive:{0:{items:2,stagePadding:20,nav:false,rewind:false,autoplay:false},320:{items:2,stagePadding:20,nav:false,rewind:false,autoplay:false},440:{items:2,stagePadding:20,nav:false,rewind:false,autoplay:false},600:{items:4,stagePadding:20,nav:false,rewind:false,autoplay:false},768:{items:4,nav:false,rewind:false,autoplay:false},991:{items:4,nav:false,rewind:false,autoplay:false},1024:{items:4,stagePadding:20,nav:false,rewind:false,autoplay:false},1200:{items:4,nav:false,pullDrag:false},1440:{items:4,nav:false,pullDrag:false}}});
$(".flexbox").owlCarousel({margin:15,items:2,loop:false,nav:true,dots:false,navText:['<img src="/etc/designs/manipal-edu/clientlib-master/images/banner-arrow-prev.png" alt="Previous Icon" title="Icon">','<img src="/etc/designs/manipal-edu/clientlib-master/images/banner-arrow-next.png" alt="Next Icon" title="Icon">'],mouseDrag:false,touchDrag:false,pullDrag:false,freeDrag:false,responsive:{0:{items:1,touchDrag:true,pullDrag:true,freeDrag:true},320:{items:1,touchDrag:true,pullDrag:true,freeDrag:true},768:{items:2,touchDrag:true,pullDrag:true,freeDrag:true},991:{items:2,touchDrag:true,pullDrag:true,freeDrag:true},1024:{items:2,touchDrag:true,pullDrag:true,freeDrag:true},1200:{items:2,mouseDrag:false,touchDrag:false,pullDrag:false,freeDrag:false},1440:{items:2,mouseDrag:false,touchDrag:false,pullDrag:false,freeDrag:false}}});
(function(f){var d=function(a,b){this.init(a,b)
},e=null;
d.prototype={init:function(b,c){this.$element=f(b);
var h=(c&&c.bootstrapMajorVersion)?c.bootstrapMajorVersion:f.fn.bootstrapPaginator.defaults.bootstrapMajorVersion,a=this.$element.attr("id");
if(h===2&&!this.$element.is("div")){throw"in Bootstrap version 2 the pagination must be a div element. Or if you are using Bootstrap pagination 3. Please specify it in bootstrapMajorVersion in the option"
}else{if(h>2&&!this.$element.is("ul")){throw"in Bootstrap version 3 the pagination root item must be an ul element."
}}this.currentPage=1;
this.lastPage=1;
this.setOptions(c);
this.initialized=true
},setOptions:function(a){this.options=f.extend({},(this.options||f.fn.bootstrapPaginator.defaults),a);
this.totalPages=parseInt(this.options.totalPages,10);
this.numberOfPages=parseInt(this.options.numberOfPages,10);
if(a&&typeof(a.currentPage)!=="undefined"){this.setCurrentPage(a.currentPage)
}this.listen();
this.render();
if(!this.initialized&&this.lastPage!==this.currentPage){this.$element.trigger("page-changed",[this.lastPage,this.currentPage])
}},listen:function(){this.$element.off("page-clicked");
this.$element.off("page-changed");
if(typeof(this.options.onPageClicked)==="function"){this.$element.bind("page-clicked",this.options.onPageClicked)
}if(typeof(this.options.onPageChanged)==="function"){this.$element.on("page-changed",this.options.onPageChanged)
}this.$element.bind("page-clicked",this.onPageClicked)
},destroy:function(){this.$element.off("page-clicked");
this.$element.off("page-changed");
this.$element.removeData("bootstrapPaginator");
this.$element.empty()
},show:function(a){this.setCurrentPage(a);
this.render();
if(this.lastPage!==this.currentPage){this.$element.trigger("page-changed",[this.lastPage,this.currentPage])
}},showNext:function(){var a=this.getPages();
if(a.next){this.show(a.next)
}},showPrevious:function(){var a=this.getPages();
if(a.prev){this.show(a.prev)
}},showFirst:function(){var a=this.getPages();
if(a.first){this.show(a.first)
}},showLast:function(){var a=this.getPages();
if(a.last){this.show(a.last)
}},onPageItemClicked:function(b){var c=b.data.type,a=b.data.page;
this.$element.trigger("page-clicked",[b,c,a])
},onPageClicked:function(c,j,i,b){var a=f("."+c.currentTarget.className.split(" ")[0]);
switch(i){case"first":a.bootstrapPaginator("showFirst");
break;
case"prev":a.bootstrapPaginator("showPrevious");
break;
case"next":a.bootstrapPaginator("showNext");
break;
case"last":a.bootstrapPaginator("showLast");
break;
case"page":a.bootstrapPaginator("show",b);
break
}},render:function(){var b=this.getValueFromOption(this.options.containerClass,this.$element),a=this.options.size||"normal",p=this.options.alignment||"left",w=this.getPages(),r=this.options.bootstrapMajorVersion===2?f("<ul></ul>"):this.$element,i=this.options.bootstrapMajorVersion===2?this.getValueFromOption(this.options.listContainerClass,r):null,s=null,v=null,t=null,c=null,x=null,u=0;
this.$element.addClass("pagination");
switch(a.toLowerCase()){case"large":case"small":case"mini":this.$element.addClass(f.fn.bootstrapPaginator.sizeArray[this.options.bootstrapMajorVersion][a.toLowerCase()]);
break;
default:break
}if(this.options.bootstrapMajorVersion===2){switch(p.toLowerCase()){case"center":this.$element.addClass("pagination-centered");
break;
case"right":this.$element.addClass("pagination-right");
break;
default:break
}}this.$element.addClass(b);
this.$element.empty();
if(this.options.bootstrapMajorVersion===2){this.$element.append(r);
r.addClass(i)
}this.pageRef=[];
if(w.first){s=this.buildPageItem("first",w.first);
if(s){r.append(s)
}}if(w.prev){v=this.buildPageItem("prev",w.prev);
if(v){r.append(v);
r.find("li:first-child").addClass("first")
}}for(u=0;
u<w.length;
u=u+1){x=this.buildPageItem("page",w[u]);
if(x){r.append(x)
}}if(w.next){t=this.buildPageItem("next",w.next);
if(t){r.append(t);
r.find("li:last-child").addClass("last")
}}if(w.last){c=this.buildPageItem("last",w.last);
if(c){r.append(c)
}}},buildPageItem:function(m,o){var c=f("<li></li>"),r=f("<a></a>"),a="",b="",s=this.options.itemContainerClass(m,o,this.currentPage),p=this.getValueFromOption(this.options.itemContentClass,m,o,this.currentPage),n=null;
switch(m){case"first":if(!this.getValueFromOption(this.options.shouldShowPage,m,o,this.currentPage)){return
}a=this.options.itemTexts(m,o,this.currentPage);
b=this.options.tooltipTitles(m,o,this.currentPage);
break;
case"last":if(!this.getValueFromOption(this.options.shouldShowPage,m,o,this.currentPage)){return
}a=this.options.itemTexts(m,o,this.currentPage);
b=this.options.tooltipTitles(m,o,this.currentPage);
break;
case"prev":if(!this.getValueFromOption(this.options.shouldShowPage,m,o,this.currentPage)){return
}a=this.options.itemTexts(m,o,this.currentPage);
b=this.options.tooltipTitles(m,o,this.currentPage);
break;
case"next":if(!this.getValueFromOption(this.options.shouldShowPage,m,o,this.currentPage)){return
}a=this.options.itemTexts(m,o,this.currentPage);
b=this.options.tooltipTitles(m,o,this.currentPage);
break;
case"page":if(!this.getValueFromOption(this.options.shouldShowPage,m,o,this.currentPage)){return
}a=this.options.itemTexts(m,o,this.currentPage);
b=this.options.tooltipTitles(m,o,this.currentPage);
break
}c.addClass(s).append(r);
r.addClass(p).html(a).on("click",null,{type:m,page:o},f.proxy(this.onPageItemClicked,this));
if(this.options.pageUrl){r.attr("href",this.getValueFromOption(this.options.pageUrl,m,o,this.currentPage))
}if(this.options.useBootstrapTooltip){n=f.extend({},this.options.bootstrapTooltipOptions,{title:b});
r.tooltip(n)
}else{r.attr("title",b)
}return c
},setCurrentPage:function(a){if(a>this.totalPages||a<1){throw"Page out of range"
}this.lastPage=this.currentPage;
this.currentPage=parseInt(a,10)
},getPages:function(){var b=this.totalPages,a=(this.currentPage%this.numberOfPages===0)?(parseInt(this.currentPage/this.numberOfPages,10)-1)*this.numberOfPages+1:parseInt(this.currentPage/this.numberOfPages,10)*this.numberOfPages+1,i=[],c=0,j=0;
a=a<1?1:a;
for(c=a,j=0;
j<this.numberOfPages&&c<=b;
c=c+1,j=j+1){i.push(c)
}i.first=1;
if(this.currentPage>1){i.prev=this.currentPage-1
}else{i.prev=1
}if(this.currentPage<b){i.next=this.currentPage+1
}else{i.next=b
}i.last=b;
i.current=this.currentPage;
i.total=b;
i.numberOfPages=this.options.numberOfPages;
return i
},getValueFromOption:function(a){var c=null,b=Array.prototype.slice.call(arguments,1);
if(typeof a==="function"){c=a.apply(this,b)
}else{c=a
}return c
}};
e=f.fn.bootstrapPaginator;
f.fn.bootstrapPaginator=function(a){var b=arguments,c=null;
f(this).each(function(o,n){var l=f(n),m=l.data("bootstrapPaginator"),p=(typeof a!=="object")?null:a;
if(!m){m=new d(this,p);
l=f(m.$element);
l.data("bootstrapPaginator",m);
return
}if(typeof a==="string"){if(m[a]){c=m[a].apply(m,Array.prototype.slice.call(b,1))
}else{throw"Method "+a+" does not exist"
}}else{c=m.setOptions(a)
}});
return c
};
f.fn.bootstrapPaginator.sizeArray={"2":{large:"pagination-large",small:"pagination-small",mini:"pagination-mini"},"3":{large:"pagination-lg",small:"pagination-sm",mini:""}};
f.fn.bootstrapPaginator.defaults={containerClass:"",size:"normal",alignment:"left",bootstrapMajorVersion:2,listContainerClass:"",itemContainerClass:function(c,b,a){return(b===a)?"active":""
},itemContentClass:function(c,b,a){return""
},currentPage:1,numberOfPages:10,totalPages:1,pageUrl:function(c,b,a){return null
},onPageClicked:null,onPageChanged:null,useBootstrapTooltip:false,shouldShowPage:function(c,b,a){var h=true;
switch(c){case"first":h=(false);
break;
case"prev":h=(a!==1);
break;
case"next":h=(a!==this.totalPages);
break;
case"last":h=(false);
break;
case"page":h=true;
break
}return h
},itemTexts:function(c,b,a){switch(c){case"first":return"&lt;&lt;";
case"prev":return"&nbsp;";
case"next":return"&nbsp;";
case"last":return"&gt;&gt;";
case"page":return b
}},tooltipTitles:function(c,b,a){switch(c){case"first":return"Go to first page";
case"prev":return"Go to previous page";
case"next":return"Go to next page";
case"last":return"Go to last page";
case"page":return(b===a)?"Current page is "+b:"Go to page "+b
}},bootstrapTooltipOptions:{animation:true,html:true,placement:"top",selector:false,title:"",container:false}};
f.fn.bootstrapPaginator.Constructor=d
}(window.jQuery));
$(document).ready(function(){$(".responsivegrid .footer-i-parsys").hide();
$(".leftarrow").addClass("disabledclass");
$("#myCarousel").carousel({}).on("slid.bs.carousel",function(){var a=$(this);
a.children(".carousel-control").show();
if($(".carousel-inner .item:first").hasClass("active")){a.children(".left.carousel-control").addClass("carousel-disable")
}else{if($(".carousel-inner .item:last").hasClass("active")){a.children(".right.carousel-control").addClass("carousel-disable")
}else{a.children(".left.carousel-control").removeClass("carousel-disable");
a.children(".right.carousel-control").removeClass("carousel-disable")
}}});
setTimeout(function(){$(".principle_research_discription").owlCarousel({margin:30,nav:true,dots:false,navText:['<i class="fa fa-arrow-left"></i>','<i class="fa fa-arrow-right"></i>'],mouseDrag:false,touchDrag:false,pullDrag:false,freeDrag:false,responsive:{0:{items:1},320:{items:1},768:{items:2},991:{items:2},1024:{items:2},1200:{items:3},1440:{items:3}}})
},800)
});
$(document).ready(function(){$(this).scrollTop(0);
var a=0;
$(document).scroll(function(){a=$(this).scrollTop();
if(a>100){$(".secondary-navigation-container").fadeIn();
$(".secondary-navigation-container").addClass("logoscroll")
}else{$(".secondary-navigation-container").removeClass("logoscroll")
}})
});
$(document).ready(function(){$(document).on("keydown",function(a){if(a.keyCode===27){$("#search-overlay").removeClass("visible");
$("#search-overlay-mobile").removeClass("visible")
}});
$("#search-overlay").click(function(a){if($(a.target).hasClass("visible")){$("body").find("#search-overlay").removeClass("visible")
}});
$("#search-overlay-mobile").click(function(a){if($(a.target).hasClass("visible")){$("body").find("#search-overlay-mobile").removeClass("visible")
}})
});
$(document).ready(function(){var b=$(".background-images");
if(b.length==0){return
}else{$.each(b,function(c,d){new a(d)
})
}function a(d){var c=function(){var h=$(d);
var j=$(window),k=j.width();
var g=h.attr("data-bgset");
var e=g.split("|")[0];
var f=g.split("|")[1];
var i=g.split("|")[2];
if(k<=480){if(i!==undefined&&i!==null){h.css("background-image","url('"+i+"')")
}else{if(e!==undefined&&e!==null){h.css("background-image","url('"+e+"')")
}}}else{if((k>480)&&(k<=768)){if(f!==undefined&&f!==null){h.css("background-image","url('"+f+"')")
}else{if(e!==undefined&&e!==null){h.css("background-image","url('"+e+"')")
}}}else{if(e!==undefined&&e!==null){h.css("background-image","url('"+e+"')")
}}}};
c();
$(window).on("resize",function(){c()
})
}});
(function(){var b;
a();
function a(){var c=$(".get-started-carousel");
c.trigger("destroy.owl.carousel");
if($(window).width()<992){c.owlCarousel({loop:false,nav:false,dots:false,autoWidth:true,responsive:{0:{items:1.5},320:{items:1.5},728:{items:1.5},991:{items:3},1024:{items:4},1200:{items:4},1440:{items:4}}})
}}window.onresize=function(){clearTimeout(b);
b=setTimeout(function(){a()
},100)
};
setTimeout(function(){$(".student-testimonials-carousel").owlCarousel({margin:30,loop:true,nav:true,navText:['<i class="fa fa-arrow-left"></i>','<i class="fa fa-arrow-right"></i>'],dots:false,autoplay:true,autoplayTimeout:3000,autoplayHoverPause:true,responsive:{0:{items:1,stagePadding:25,margin:15,nav:false},320:{items:1,stagePadding:25,margin:15,nav:false},768:{items:3,margin:15,nav:false},991:{items:3},1024:{items:4},1200:{items:4,mouseDrag:false,touchDrag:false,pullDrag:false},1440:{items:4,mouseDrag:false,touchDrag:false,pullDrag:false}}})
},1000)
}());
var $studentexp=$(".js-student-slider-thumbnail");
$studentexp.owlCarousel({margin:32,nav:false,rewind:true,autoplay:true,mouseDrag:false,touchDrag:true,dots:false,autoWidth:true,responsive:{0:{items:2,stagePadding:20,nav:false,rewind:false,autoplay:false},320:{items:2,stagePadding:20,nav:false,rewind:false,autoplay:false},440:{items:2,stagePadding:20,nav:false,rewind:false,autoplay:false},600:{items:4,stagePadding:20,nav:false,rewind:false,autoplay:false},768:{items:4,stagePadding:20,nav:false,rewind:false,autoplay:false},991:{items:4,stagePadding:25,margin:10,rewind:false,touchDrag:true,autoplay:false},1024:{items:3,touchDrag:true,autoplay:true},1200:{items:3,touchDrag:false},1440:{items:3,touchDrag:false}}});
$(".featured-researchers-thumbnail").on("click",function(){var a=$(this).children("img").attr("src");
$(".featured-researchers-image-box").children("img").attr("src",a)
});
$(".giving-back-carousel").owlCarousel({margin:0,nav:true,dots:false,mouseDrag:false,touchDrag:false,pullDrag:false,autoHeight:true,navText:['<img src="/etc/designs/manipal-edu/clientlib-master/images/banner-arrow-prev.png">','<img src="/etc/designs/manipal-edu/clientlib-master/images/banner-arrow-next.png">'],responsive:{0:{items:1,autoHeight:false},320:{items:1,autoHeight:false},728:{items:1,autoHeight:false},991:{items:1,autoHeight:false},1024:{items:1,autHeight:false},1200:{items:1,autoHeight:true},1440:{items:1,autoHeight:true}}});
(function(a){a.widget("custom.combobox",{options:{placeholder:"",eleCls:"",name:""},_create:function(){this.wrapper=a("<span>").addClass("custom-combobox").insertAfter(this.element);
this.element.hide();
this._createAutocomplete();
this._createShowAllButton();
if(typeof(this.options.callback)==="function"){this.options.callback.call(this)
}},_createAutocomplete:function(){var b=this.element.children(":selected"),c=b.val()?b.text():"";
this.input=a("<input>").appendTo(this.wrapper).val(c).attr("title","").attr("placeholder",this.options.placeholder).attr("name",this.options.name).addClass("custom-combobox-input ui-widget ui-widget-content ui-state-default ui-corner-left form-control").addClass(this.options.eleCls).autocomplete({delay:0,minLength:0,source:a.proxy(this,"_source")}).tooltip({tooltipClass:"ui-state-highlight"}).click(function(){a(this).focus();
a(this).autocomplete("search","")
});
a("<input type='hidden'>").appendTo(this.wrapper).addClass("myData");
this._on(this.input,{autocompleteselect:function(d,e){e.item.option.selected=true;
this._trigger("select",d,{item:e.item.option});
this.wrapper.find(".myData").val(e.item.mydata);
this.input.val(e.item.value);
this.input.trigger("change")
},autocompletechange:"_removeIfInvalid"})
},_createShowAllButton:function(){var b=this.input,c=false;
a("<a>").attr("tabIndex",-1).tooltip().appendTo(this.wrapper).button({icons:{primary:"ui-icon-triangle-1-s"},text:false}).removeClass("ui-corner-all").addClass(this.options.eleCls+" custom-combobox-toggle ui-corner-right").mousedown(function(){c=b.autocomplete("widget").is(":visible")
}).click(function(){b.focus();
if(c){return
}b.autocomplete("search","")
})
},_source:function(d,b){var f=new RegExp(a.ui.autocomplete.escapeRegex(d.term),"i");
var c=0;
var e=this.element.children("option").map(function(){var h=a(this).text(),g=a(this).val();
if(this.value&&(!d.term||f.test(h))){c++;
return{label:h,value:h,mydata:g,option:this}
}});
if(c==0){e={};
e=a.makeArray(e);
e=e.map(function(){return{label:"No Results Found",value:"",mydata:"",option:this}
})
}b(e)
},_removeIfInvalid:function(d,f){if(f.item){return
}var e=this.input.val(),b=e.toLowerCase(),c=false;
this.element.children("option").each(function(){if(a(this).text().toLowerCase()===b){this.selected=c=true;
return false
}});
if(c){return
}this.input.val("").tooltip("open");
this.element.val("");
this._delay(function(){this.input.tooltip("close").attr("title","")
},2500);
this.input.autocomplete("instance").term=""
},_destroy:function(){this.wrapper.remove();
this.element.show()
}})
})(jQuery);
$(document).ready(function(){$(window).scroll(function(){if($(this).scrollTop()>0){$(".breadcrumb-banner-variant").fadeOut();
$(".breadcrumb-banner .breadcrumb-dropdown-list").removeClass("open");
$('.breadcrumb-banner .breadcrumb-dropdown-list a[aria-expanded="false"]')
}else{$(".breadcrumb-banner-variant").fadeIn()
}});
$(window).scroll(function(){if($(this).scrollTop()>0){$(".breadcrumb-banner").fadeOut();
$(".breadcrumb-banner .breadcrumb-dropdown-list").removeClass("open");
$('.breadcrumb-banner .breadcrumb-dropdown-list a[aria-expanded="false"]')
}else{$(".breadcrumb-banner").fadeIn()
}})
});
$(".js-leadership-team-members-wp .js-leadership-members").on("click",function(){$(this).closest(".js-leadership-team-members-wp").toggleClass("open")
});
$(".faculty-landing .researcher-tile").each(function(a){if(a>=1){$(this).css("padding","20px 72px 0px");
$(this).find(".leadership-image").addClass("last-leadership-image")
}});
(function(){var d=$(".js-carousel-variant2");
b();
var a;
function b(){d.owlCarousel("destroy");
if($(window).width()<992){d.owlCarousel({loop:false,nav:false,items:1,pullDrag:false,touchDrag:true,mouseDrag:true,autoWidth:false,dots:false,autoHeight:false,margin:5,onInitialized:c,onTranslated:c})
}else{d.owlCarousel({loop:false,nav:false,items:1,pullDrag:false,touchDrag:false,mouseDrag:false,autoWidth:true,dots:false,autoHeight:false,margin:5,onInitialized:c,onTranslated:c})
}}function c(e){if(e!==undefined){if(e.item.index>=e.item.count-1){$(".js-next-slide").addClass("disabled")
}else{if(e.item.index==0){$(".js-next-slide").removeClass("disabled");
$(".js-prev-slide").addClass("disabled")
}else{$(".js-prev-slide").removeClass("disabled");
$(".js-next-slide").removeClass("disabled")
}}}}window.onresize=function(){clearTimeout(a);
a=setTimeout(function(){b()
},100)
};
$(".js-prev-slide").on("click",function(f){d.trigger("prev.owl.carousel");
d.trigger("refresh.owl.carousel")
});
$(".js-next-slide").on("click",function(f){d.trigger("next.owl.carousel");
d.trigger("refresh.owl.carousel")
})
}());
$(".news-image-thumbnail").on("click",function(){var a=$(this).children("img").attr("src");
$(".image-main").children("img").attr("src",a)
});
$(".news-image-carousel").owlCarousel({margin:15,nav:true,navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],dots:false,slideSpeed:0,responsive:{0:{items:2,stagePadding:30,nav:false},320:{items:2,stagePadding:30,nav:false,touchDrag:true,mouseDrag:true},768:{items:3,nav:false},991:{items:3,nav:false},1024:{items:3},1200:{items:4,nav:true,pullDrag:true,touchDrag:false,mouseDrag:false},1440:{items:4,nav:true,pullDrag:true,touchDrag:false,mouseDrag:false}}});
$(document).ready(function(){$(document).on("click",".fa-facebook",function(a){var b=$(this).closest(".em").find(".em-img").attr("src");
if(b!=undefined){a.preventDefault();
if(b.startsWith("/")){execute="http://www.facebook.com/share.php?u="+window.location.origin+""+b
}else{execute="http://www.facebook.com/share.php?u="+b
}window.open(execute,"_blank")
}});
$(document).on("click",".fa-twitter",function(a){var b=$(this).closest(".em").find(".em-img").attr("src");
if(b!=undefined){a.preventDefault();
if(b.startsWith("/")){execute="http://twitter.com/share?url="+window.location.protocol+"//"+window.location.host+""+b
}else{execute="http://twitter.com/share?url="+encodeURI(b)
}window.open(execute,"_blank")
}});
$(document).on("click",".fa-envelope",function(b){var c=$(this).closest(".em").find(".em-img").attr("src");
var a=$(this).closest(".em").find(".share-comp-title").text();
if(!a){a=$(this).closest(".em").find(".em-title").html()
}a=encodeURIComponent(a);
if(c!=undefined){b.preventDefault();
if(c.startsWith("/")){execute="mailto:?subject="+a+"&body=link: "+window.location.protocol+"//"+window.location.host+""+c
}else{execute="mailto:?subject="+a+"&body=link: "+encodeURI(c)
}window.open(execute,"_self")
}})
});
(function(){if($(window).width()<768){$(".js-tab-selection").hide();
$(".js-tab-dropdown-btn").on("click",function(){$(".js-tab-selection").toggle()
});
$(".js-tab-selection > li > a").on("click",function(){var a=$(this).text().trim();
$(".js-selected-val").empty().text(a);
$(".js-tab-selection").hide()
})
}else{$(".js-tab-selection").show()
}$(window).resize(function(){if($(window).width()<768){$(".js-tab-selection").hide();
$(".js-tab-dropdown-btn").on("click",function(){$(".js-tab-selection").toggle()
});
$(".js-tab-selection > li > a").on("click",function(){var a=$(this).text().trim();
$(".js-selected-val").empty().text(a);
$(".js-tab-selection").hide()
})
}else{$(".js-tab-selection").show()
}});
$(".faculty-profile-wrap").find(".tab-list-container").find("li").each(function(){if($(this).text()==""){$(this).hide()
}});
if($(".faculty-profile-text-section .mobile").text().trim().length<6){$(".faculty-profile-text-section .mobile").hide()
}}());
(function(){var a={customCarousel:this,getDomElement:function(c){this.$thumbnailCarouselWp=$(c);
this.$thumbnailCarousel=$(c).find(".js-thumbnail-carousel");
this.$imageElement=$(c).find(".js-carousel-image-ele");
this.$itemContentWp=$(c).find(".js-item-content")
},initializeCarousel:function(){var c={margin:10,nav:false,dots:false,items:4,mouseDrag:false,autoWidth:false,autoplay:true,rewind:true,responsive:{320:{items:1,nav:false,stagePadding:15,autoplay:false,rewind:false},768:{items:3,nav:false,stagePadding:0,lazyLoad:true,autoplay:false,rewind:false},1024:{items:4,autoplay:false,rewind:false},1200:{items:4}}};
a.$thumbnailCarousel.owlCarousel(c)
},updateActiveItem:function(d){var c=d.data("item");
$(".js-item-thumbnail-wp").removeClass("item-active");
d.addClass("item-active");
$(".js-item-content").hide();
$('.js-item-content[data-item="'+c+'"]').show()
},bindEvents:function(){if($(window).width()>=768){a.$thumbnailCarouselWp.on("click",".js-item-thumbnail-wp",function(){a.updateActiveItem($(this))
})
}},resetCarouselState:function(){var c=a.$thumbnailCarousel.find(".owl-item:first-child .js-item-thumbnail-wp");
a.$thumbnailCarousel.trigger("destroy.owl.carousel");
a.initializeCarousel();
a.updateActiveItem(c)
},init:function(c){a.getDomElement(c);
a.bindEvents();
a.initializeCarousel();
a.resetCarouselState()
}};
if($(".js-thumbnail-carousel-wp").length>0){a.init($(".js-thumbnail-carousel-wp"))
}var b;
window.onresize=function(){clearTimeout(b);
b=setTimeout(function(){a.init($(".js-thumbnail-carousel-wp"))
},100)
};
$(".js-carousel-component").owlCarousel({loop:false,margin:30,nav:true,navText:['<div class="left carousel-control"><img src="/etc/designs/manipal-edu/clientlib-master/images/soc-left-icon.png"></div>','<div class="right carousel-control"><img src="/etc/designs/manipal-edu/clientlib-master/images/soc-right-icon.png"></div>'],dots:false,lazyLoad:true,autoHeight:true,responsive:{320:{items:1,nav:true,margin:0,pullDrag:true,touchDrag:true,mouseDrag:true},768:{items:2,nav:true,margin:30,pullDrag:true,touchDrag:true,mouseDrag:true},992:{items:3,pullDrag:false,touchDrag:true,mouseDrag:true},1200:{items:3,margin:50,pullDrag:false,touchDrag:false,mouseDrag:false}}});
$(".js-book-shelf-carousel-component").owlCarousel({loop:false,margin:30,nav:true,navText:['<div class="left carousel-control"><span class="glyphicon glyphicon-arrow-left"></span><span class="sr-only">Next</span></div>','<div class="right carousel-control"><span class="glyphicon glyphicon-arrow-right"></span><span class="sr-only">Next</span></div>'],dots:false,lazyLoad:true,autoHeight:true,mouseDrag:false,touchDrag:false,pullDrag:false,responsive:{320:{items:1,nav:true,margin:0},768:{items:3,nav:true,margin:25},992:{items:4},1200:{items:4,margin:70}}})
}());
var carouselWidth=$(window).width();
var $icas=$(".js-icas-carousel");
var carouselValue=$("#loopPropertyPrograms").val();
if(carouselValue){if(carouselValue=="true"){carouselValue=true
}else{carouselValue=false
}}if(carouselWidth>=768){$icas.owlCarousel({loop:true,margin:30,autoplay:carouselValue,nav:false,dots:false,mouseDrag:false,touchDrag:false,smartSpeed:600,pullDrag:false})
}else{if(carouselWidth<=767){$icas.trigger("destroy.owl.carousel").removeClass("owl-carousel owl-loaded")
}}(function(){var b={departmentsFaculty:this,getDomElement:function(c){this.$departmentsFacultyWp=$(c);
this.$depAccEle=$(c).find(".js-dep-accordion-wp");
this.$depAccHeaderEle=$(c).find(".js-dep-accordion-header");
this.$depAccBodyEle=$(c).find(".js-dep-accordion-body");
this.$accCollapsibleBtn=$(c).find(".js-collapsible-btn");
this.$facultyItemEle=$(c).find(".js-faculty-item-wp");
this.$loadMorebtnWp=$(c).find(".js-load-more-wp");
this.$loadMorebtn=$(c).find(".js-load-more-btn");
this.defaultItemsToShow=3;
this.temsToShow=3
},bindEvents:function(){b.$accCollapsibleBtn.on("click",function(){if($(window).width()<=768){$(this).toggleClass("is-active");
b.$accCollapsibleBtn.not($(this)).removeClass("is-active");
b.defaultShowMoreFacultyItems($(this))
}b.accordionAction($(this))
});
b.$loadMorebtn.on("click",function(){if($(window).width()<=767){b.showMoreFacultyItems($(this))
}})
},showHideLoadMoreBtn:function(f){var c=f.closest(b.$depAccEle);
var d=c.find(b.$facultyItemEle);
var e=d.not(".hidden").length;
if((d.length<=e)){c.find(b.$loadMorebtnWp).hide()
}else{c.find(b.$loadMorebtnWp).show()
}},defaultShowMoreFacultyItems:function(d){var c=d.closest(b.$depAccEle);
jQuery.each(c,function(f){var e=$(c[f]).find(b.$facultyItemEle);
e.each(function(g,h){if(g<b.defaultItemsToShow){$(h).removeClass("hidden")
}else{$(h).addClass("hidden")
}});
b.showHideLoadMoreBtn($(c[f]))
})
},showMoreFacultyItems:function(d){var c=d.closest(b.$depAccEle);
jQuery.each(c,function(g){var f=$(c[g]).find(b.$facultyItemEle);
var h=f.not(".hidden").length;
var e=h+b.temsToShow;
console.log("visibleActiveItemEle: ",h);
f.each(function(i,j){if(i<e){$(j).removeClass("hidden")
}else{$(j).addClass("hidden")
}});
b.showHideLoadMoreBtn($(c[g]))
})
},resetToDefaultView:function(e){if($(window).width()>=768){var c=e.closest(b.$depAccEle);
var d=c.find(b.$facultyItemEle);
d.removeClass("hidden")
}},accordionAction:function(d){var c=d.closest(b.$depAccEle);
if($(window).width()<=768){b.$depAccEle.removeClass("accordion-open");
if(d.hasClass("is-active")){c.toggleClass("accordion-open")
}}else{c.toggleClass("accordion-open")
}},init:function(c){b.getDomElement(c);
b.bindEvents()
}};
if($(".js-departments-faculty-comp").length>0){b.init($(".js-departments-faculty-comp"))
}var a;
window.onresize=function(){clearTimeout(a);
a=setTimeout(function(){b.resetToDefaultView($(".js-dep-accordion-wp"))
},100)
}
}());
$(function(){var a=$(window).width();
if(a<=768){$(".banner-areadetail .banner-caption-container-left .banner-content p").each(function(){len=$(this).text().length;
str=$(this).text().substr(0,70);
lastIndexOf=str.lastIndexOf(" ");
if(len>70){$(this).text(str.substr(0,lastIndexOf)+"...")
}})
}});
$(function(){$(".news-events-right-wrap .news-right-content p").each(function(){len=$(this).text().length;
str=$(this).text().substr(0,90);
lastIndexOf=str.lastIndexOf(" ");
if(len>90){$(this).text(str.substr(0,lastIndexOf)+"...")
}})
});
$(function(){$(".short-desc .two-lines").each(function(){len=$(this).text().length;
str=$(this).text().substr(0,55);
lastIndexOf=str.lastIndexOf(" ");
if(len>55){$(this).text(str.substr(0,lastIndexOf)+"...")
}})
});
$(function(){$(".news-events-list .news-column-content p").each(function(){len=$(this).text().length;
str=$(this).text().substr(0,60);
lastIndexOf=str.lastIndexOf(" ");
if(len>60){$(this).text(str.substr(0,lastIndexOf)+"...")
}})
});
$(function(){$(".listing-tile-wp .grid-item .tile-content h3").each(function(){len=$(this).text().length;
str=$(this).text().substr(0,40);
lastIndexOf=str.lastIndexOf(" ");
if(len>40){$(this).text(str.substr(0,lastIndexOf)+"...")
}})
});
$(function(){$(".listing-tile-wp .grid-item .tile-content p").each(function(){len=$(this).text().length;
str=$(this).text().substr(0,200);
lastIndexOf=str.lastIndexOf(" ");
if(len>200){$(this).text(str.substr(0,lastIndexOf)+"...")
}})
});
$(function(){$(".global-program-box h3").each(function(){len=$(this).text().length;
str=$(this).text().substr(0,40);
lastIndexOf=str.lastIndexOf(" ");
if(len>40){$(this).text(str.substr(0,lastIndexOf)+"...")
}})
});
$(function(){$(".global-program-box p").each(function(){len=$(this).text().length;
str=$(this).text().substr(0,130);
lastIndexOf=str.lastIndexOf(" ");
if(len>130){$(this).text(str.substr(0,lastIndexOf)+"...")
}})
});
$(function(){$(".faculty-tile-container .custom-generic-tile .card-body-content h5").each(function(){len=$(this).text().length;
str=$(this).text().substr(0,40);
lastIndexOf=str.lastIndexOf(" ");
if(len>40){$(this).text(str.substr(0,lastIndexOf)+"...")
}})
});
$(function(){$(".faculty-tile-container .custom-generic-tile .card-body-content p").each(function(){len=$(this).text().length;
str=$(this).text().substr(0,145);
lastIndexOf=str.lastIndexOf(" ");
if(len>145){$(this).text(str.substr(0,lastIndexOf)+"...")
}})
});
var resource;
var rootPath;
var listType;
var hideRedirection;
var hideFilter;
var startPage;
var baseLimit;
var queryPram;
$(document).ready(function(){if($(".list-page-js").length>=1){$(".search-cont-wp").hide();
$(".tab-content").hide();
$(".program-landing-tile").hide();
resource=$(".resourcePath").data("path");
rootPath=$(".js-parentpath").data("parentpath");
listType=$(".js-type").data("type");
hideRedirection=$(".js-hide-redirection").data("hideredirection");
startPage=0;
baseLimit=-1;
if(listType!="undefined"){a(resource,startPage,baseLimit,null);
$(".js-global-dpdown li a").on("click",function(c){var d=$(this).text();
var b=$(this).parent().data("id").split(":")[1].split("/").join("$$");
$(this).parents(".global-dpdown").find(".dropdown-toggle").html(d+' <span class="down"></span>');
$(".row").empty();
$(".tab-pane").empty();
$(".didyoumean-wp").empty();
startPage=0;
a(resource,startPage,baseLimit,b)
})
}function a(d,b,e,c){$.ajax({type:"GET",url:d+"."+b+"."+e+"."+c+".json",contentType:"application/json; charset=utf-8",dataType:"json",success:function(g){if(g!=null){if(g.length>0){if(listType==="facultyList"){$(".program-landing-tile").show();
var f=$(".row");
$.each(g,function(h,i){f.append($("<div></div>").attr("class","col-lg-3 col-md-3 col-sm-3 col-xs-12").html('<div class="tile-box"><div class="title-wrap-left"><div class="yellow-line"></div><h2><a href='+i.path+">"+i.name+"</a></h2></div><p>"+i.designation+"</p><p>"+i.emailID+"</p></div>"))
})
}else{if(listType==="otherPageList"&&hideRedirection==true){$(".search-cont-wp").show();
var f=$(".tab-pane");
$.each(g,function(h,i){f.append($("<div></div>").attr("class","search-section-comp-variant").html('<h6 class="srch-title"><a>'+i.title+'</a></h6><p class="srch-rte">'+i.description+"</p>"))
})
}else{if(listType==="rpsPageList"){$(".search-cont-wp").hide();
$(".tab-content").show();
var f=$("#publications");
$.each(g,function(i,m){var o="<div><h4>"+m.title+"</h4></div>";
var k="<div><p>"+m.description+"</p></div>";
var l="<h6></h6>";
if(m.stream!=""){var n="<span>"+m.stream+"</span>"
}else{var n=""
}if(m.publicationDate!=""){var h="<span>"+m.publicationDate+"</span>"
}else{var h=""
}if(m.facultyList!=""){var j="";
$.each(m.facultyList,function(r,p){if(p.subMenuLink!=undefined){j=j+"<span><a href="+p.subMenuLink+">"+p.subMenuName+"</a></span>"
}else{j=j+"<span>"+p.subMenuName+"</span>"
}})
}else{var j=""
}f.append($("<div></div>").attr("class","cont").html(o+"<h6>"+n+h+j+"</h6>"+k))
})
}else{$(".search-cont-wp").show();
var f=$(".tab-pane");
$.each(g,function(h,i){f.append($("<div></div>").attr("class","search-section-comp-variant").html('<h6 class="srch-title"><a href='+i.path+">"+i.title+'</a></h6><p class="srch-rte">'+i.description+"</p>"))
})
}}}}else{$(".search-cont-wp").show();
var f=$(".didyoumean-wp");
f.append($("<h3></h3>").attr("class","featured-sec").html("Sorry, we couldn't find any results"))
}}},error:function(f,h,g){alert("error"+g)
}})
}}});
if($(".social-share-cont").length>=1){$("#chat-widget-container").hide();
window.__lc=window.__lc||{};
window.__lc.license=$("#livechatLicenseId").val();
window.__lc.group=$("#livechatGroupId").val();
var live_chatId=$("#livechatId").val();
(function(){var b=document.createElement("script");
b.type="text/javascript";
b.async=true;
b.src=("https:"==document.location.protocol?"https://":"http://")+live_chatId;
var a=document.getElementsByTagName("script")[0];
a.parentNode.insertBefore(b,a)
})();
$(".js-live_chat").on("click",function(a){LC_API.open_chat_window();
$("#livechat-full").show()
});
var LC_API=LC_API||{};
LC_API.on_before_load=function(){if(LC_API.visitor_engaged()===false){LC_API.hide_chat_window()
}};
LC_API.on_chat_window_minimized=function(){LC_API.hide_chat_window()
}
}$(document).ready(function(){$(window).scroll(function(){if($(this).scrollTop()>10){if($.cookie("close_news_flash")==null){$(".announcebar-wp").hide()
}}else{if($.cookie("close_news_flash")==null){$(".announcebar-wp").show()
}}});
if($.cookie("close_news_flash")!=null){$(".announcebar-wp").hide();
$("body").removeClass("announcebarVisible")
}else{$(".announcebar-wp").show()
}$(".js-announce-close").click(function(){$.cookie("close_news_flash","true",{expires:1,path:"/"});
$("body").removeClass("announcebarVisible");
$(".announcebar-wp").hide()
});
$(".announcebar-wp").on("change",function(a){if($(".announcebar-wp").is(":visible")){$("body").addClass("announcebarVisible")
}});
if($(".announcebar-wp").is(":visible")){$("body").addClass("announcebarVisible")
}});
$(".js-announce-carousel").owlCarousel({loop:true,items:1,autoplay:true,autoplaySpeed:700,autoplayTimeout:10000,nav:false,dots:false,pullDrag:false,mouseDrag:false,responsive:{0:{items:1},320:{items:1},728:{items:1},991:{items:1},1024:{items:1},1200:{items:1},1440:{items:1}}});
$(document).ready(function(){$(window).scroll(function(){if($(this).scrollTop()>300){$(".social-share-cont").fadeIn()
}else{$(".social-share-cont").fadeOut()
}})
});
var matched,browser;
jQuery.uaMatch=function(b){b=b.toLowerCase();
var a=/(chrome)[ \/]([\w.]+)/.exec(b)||/(webkit)[ \/]([\w.]+)/.exec(b)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(b)||/(msie) ([\w.]+)/.exec(b)||b.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(b)||[];
return{browser:a[1]||"",version:a[2]||"0"}
};
matched=jQuery.uaMatch(navigator.userAgent);
browser={};
if(matched.browser){browser[matched.browser]=true;
browser.version=matched.version
}if(browser.chrome){browser.webkit=true
}else{if(browser.webkit){browser.safari=true
}}jQuery.browser=browser;
function CreateBookmarkLink(b){var c=b.closest(".global-txt-wp").find(".bookmarkmeurl h3").text(),a=b.closest(".global-txt-wp").find(".bookmarkmeurl").attr("href");
if($.browser.mozilla||$.browser.opera){if(window.sidebar.addPanel){window.sidebar.addPanel(c,a,"")
}else{$(".bookmarkme").attr("href",a);
$(".bookmarkme").attr("title",c);
$(".bookmarkme").attr("rel","sidebar")
}}else{if($.browser.msie){window.external.AddFavorite(a,c)
}else{alert("Press "+(navigator.userAgent.toLowerCase().indexOf("mac")!=-1?"Command/Cmd":"CTRL")+" + D to bookmark this page.")
}}}if($(".left_nav").html()!=""){$(".left_nav .nav-link").first().click()
}if($(".faqContainer").hasClass("view")){$("#collapse0").first().addClass("in");
$("#collapse0").parent().addClass("active")
}else{$(".faqContainer .collapse").addClass("in")
}(function(){$(".panel").on("show.bs.collapse hide.bs.collapse",function(a){if(a.type=="show"){$(this).addClass("active")
}else{$(this).removeClass("active")
}})
}).call(this);
(function(b,a,c){a.log=function(d){if(MODULE.config.debug&&(typeof window.console!=="undefined"&&typeof window.console.log!=="undefined")&&console.debug){console.debug(d)
}};
b.researchListing=(function(){function d(){var f,g,e,j,h;
this.manipulateMenu=function(){a(".component-rl-filter .interestAreaMenu > li").on("click",function(l){l.preventDefault();
a(".component-rl-filter .dept_list").addClass("disable");
var k=a(".component-rl-filter .departmentMenu > li")[0];
a(k).siblings("li").removeClass("active").end().addClass("active");
a(".component-rl-filter #departmentMenu").html("All");
k=a(".component-rl-filter .institutionMenu > li")[0];
a(k).siblings("li").removeClass("active").end().addClass("active");
a(".component-rl-filter #institutionMenu").html("All");
var m=a(this).find("a").html();
a(".component-rl-filter #interestAreaMenu").html(m);
a(this).siblings("li").removeClass("active").end().addClass("active")
});
a(".component-rl-filter .institutionMenu > li").on("click",function(m){m.preventDefault();
setTimeout(function(){if(a(".component-rl-filter .institutionMenu li.active a").data("ivalue").toLowerCase()==="all"){a(".component-rl-filter .dept_list").addClass("disable")
}},500);
a(".component-rl-filter .dept_list").removeClass("disable");
var k=a(".component-rl-filter .interestAreaMenu > li")[0];
a(k).siblings("li").removeClass("active").end().addClass("active");
a(".component-rl-filter #interestAreaMenu").html("All");
var n=a(this).find("a").html();
a(".component-rl-filter #institutionMenu").html(n);
a(".component-rl-filter #departmentMenu").html("All");
a(this).siblings("li").removeClass("active").end().addClass("active");
var l=a(this).find("a").data("ivalue");
i.printDept(l)
});
a(".component-rl-filter .dept_list li").on("click",function(k){k.preventDefault();
if(a(this).hasClass("disable")){return false
}else{var l=a(k.target).html();
a(".component-rl-filter #departmentMenu").html(l);
a(k.target).parents(".deptList").siblings("li").removeClass("active").end().addClass("active")
}});
a(".component-rl-filter .monthMenu > li").on("click",function(k){k.preventDefault();
var l=a(this).find("a").html();
a(".component-rl-filter #monthMenu").html(l);
a(this).siblings("li").removeClass("active").end().addClass("active")
});
a(".component-rl-filter .yearMenu > li").on("click",function(k){k.preventDefault();
var l=a(this).find("a").html();
a(".component-rl-filter #yearMenu").html(l);
a(this).siblings("li").removeClass("active").end().addClass("active")
})
};
this.paintDom=function(){var p=b.researchListFilterConfig;
f=p.hideInterestArea,g=p.hideInstitute,e=p.hideDepartment,j=p.hideMonth,h=p.hideYear;
var o=[],m=[],l=[],n=[],k=[];
if(!f){i.printIArea()
}if(!g){i.printInstitute()
}else{a(".component-rl-filter .dept_list").removeClass("disable");
a(".component-rl-filter .iarea_list").addClass("hidden");
a(".component-rl-filter .or-seperator").parents(".seperator").addClass("hidden");
a(".component-rl-filter .inst_list").addClass("hidden")
}if(!e){i.printDept()
}else{a(".component-rl-filter .iarea_list").addClass("hidden");
a(".component-rl-filter .seperator").addClass("hidden");
a(".component-rl-filter .inst_list").addClass("hidden");
a(".component-rl-filter .dept_list").addClass("hidden");
a(".component-rl-filter .month_list").addClass("hide_seperator")
}if(!j){i.printMonth()
}if(!h){i.printYear()
}};
this.printIArea=function(){var p=b.researchListFilterConfig.interestAreaInfo,o=a(".component-rl-filter .interestAreaMenu");
var l=[],k=[];
p.sort(function(s,r){s=s.interestAreaText.toLowerCase();
r=r.interestAreaText.toLowerCase();
return s<r?-1:s>r?1:0
});
a.each(p,function(r,s){if(jQuery.inArray(s.interestArea,k)<0){k.push(s.interestArea);
l.push(s.interestAreaText)
}});
o.html('<li role="presentation" class="active"><a role="menuitem" tabindex="-1" href="#" data-iValue="all">All</a></li>');
for(var n=0;
n<k.length;
n++){var m='<li role="presentation"><a role="menuitem" tabindex="-1" href="#" data-iValue="'+k[n]+'">'+l[n]+"</a></li>";
o.append(m)
}};
this.printInstitute=function(){var p=b.researchListFilterConfig.institutionInfo,o=a(".component-rl-filter .institutionMenu");
var k=[],m=[];
p.sort(function(s,r){s=s.institutionText.toLowerCase();
r=r.institutionText.toLowerCase();
return s<r?-1:s>r?1:0
});
a.each(p,function(r,s){if(jQuery.inArray(s.institution,m)<0){m.push(s.institution);
k.push(s.institutionText)
}});
o.html('<li role="presentation" class="active"><a role="menuitem" tabindex="-1" href="#" data-iValue="all">All</a></li>');
for(var n=0;
n<m.length;
n++){var l='<li role="presentation"><a role="menuitem" tabindex="-1" href="#" data-iValue="'+m[n]+'">'+k[n]+"</a></li>";
o.append(l)
}};
this.printDept=function(o){var s=b.researchListFilterConfig.institutionInfo,l=o||"*",n=a(".component-rl-filter .departmentMenu");
var r=[],p=[];
s.sort(function(u,t){u=u.departmentText.toLowerCase();
t=t.departmentText.toLowerCase();
return u<t?-1:u>t?1:0
});
a.each(s,function(t,u){if(l===u.institution||l==="*"){if(jQuery.inArray(u.department,p)<0){p.push(u.department);
r.push(u.departmentText)
}}});
n.html('<li role="presentation" class="active deptList"><a role="menuitem" tabindex="-1" href="#" data-iValue="all">All</a></li>');
for(var m=0;
m<p.length;
m++){var k='<li role="presentation" class="deptList"><a role="menuitem" tabindex="-1" href="#" data-iValue="'+p[m]+'">'+r[m]+"</a></li>";
n.append(k)
}};
this.printMonth=function(){var o=b.researchListFilterConfig.month,l=a(".component-rl-filter .monthMenu");
var n=[];
a.each(o,function(p,r){if(jQuery.inArray(r,n)<0){n.push(r)
}});
l.html('<li role="presentation" class="active"><a role="menuitem" tabindex="-1" href="#" data-iValue="all">All</a></li>');
for(var m=0;
m<n.length;
m++){var k='<li role="presentation"><a role="menuitem" tabindex="-1" href="#" data-iValue="'+n[m]+'">'+n[m]+"</a></li>";
l.append(k)
}};
this.printYear=function(){var o=b.researchListFilterConfig.year,n=a(".component-rl-filter .yearMenu");
var l=[];
a.each(o,function(p,r){if(jQuery.inArray(r,l)<0){l.push(r)
}});
n.html('<li role="presentation" class="active"><a role="menuitem" tabindex="-1" href="#" data-iValue="all">All</a></li>');
for(var m=0;
m<l.length;
m++){var k='<li role="presentation"><a role="menuitem" tabindex="-1" href="#" data-iValue="'+l[m]+'">'+l[m]+"</a></li>";
n.append(k)
}};
var i=this;
this.init=function(){if(b.researchListFilterConfig!=c){a(".component-rl-filter .dept_list").addClass("disable");
i.paintDom();
a(document).ready(function(){i.manipulateMenu()
})
}return this
}
}return new d()
}())
}(window.manipal=window.manipal||{},jQuery));
(function(b,a,c){a.log=function(d){if(MODULE.config.debug&&(typeof window.console!=="undefined"&&typeof window.console.log!=="undefined")&&console.debug){console.debug(d)
}};
b.researchListComponent=(function(){function d(){var m,l,o=a(".component-research-list .research-list-container-1"),n=a(".component-research-list .research-list-container-2"),p=a(".component-research-list .research-list-pagination"),g=a(".component-rl-filter .dept_list button"),j=1,f=10,i=1,h=5,e={};
this.filterData=function(){a(".component-rl-filter .dropdown-menu > li, .component-rl-filter .dept_list").on("click",function(r){r.preventDefault();
setTimeout(function(){if(!a(r.target).hasClass("dropdown-toggle")){var A=b.researchListConfig,u=[],w=false,B=false,z=false,C=false,t=false;
var D="",x="",s="",y="",v="";
if(a("#research-listing-wrapper .component-rl-filter .interestAreaMenu > .active").find("a").data("ivalue")){D=a("#research-listing-wrapper .component-rl-filter .interestAreaMenu > .active").find("a").data("ivalue").toLowerCase()
}else{D="all"
}if(a("#research-listing-wrapper .component-rl-filter .institutionMenu > .active").find("a").data("ivalue")){x=a("#research-listing-wrapper .component-rl-filter .institutionMenu > .active").find("a").data("ivalue").toLowerCase()
}else{x="all"
}if(a("#research-listing-wrapper .component-rl-filter .departmentMenu > .active").find("a").data("ivalue")){s=a("#research-listing-wrapper .component-rl-filter .departmentMenu > .active").find("a").data("ivalue").toLowerCase()
}else{s="all"
}if(a("#research-listing-wrapper .component-rl-filter .monthMenu > .active").find("a").data("ivalue")){y=a("#research-listing-wrapper .component-rl-filter .monthMenu > .active").find("a").data("ivalue").toLowerCase()
}else{y="all"
}if(a("#research-listing-wrapper .component-rl-filter .yearMenu > .active").find("a").data("ivalue")){v=a("#research-listing-wrapper .component-rl-filter .yearMenu > .active").find("a").data("ivalue")+"".toLowerCase()
}else{v="all"
}a.each(A,function(E,F){w=false;
B=false;
z=false;
C=false;
t=false;
if((F.filterInterestArea.toLowerCase()===D)||(D==="all")){w=true
}if((F.filterInstitution.toLowerCase()===x)||(x==="all")){B=true
}if((F.filterDepartment.toLowerCase()===s)||(s==="all")){z=true
}if((F.filterMonth.toLowerCase()===y)||(y==="all")){C=true
}if((F.filterYear.toLowerCase()===v)||(v==="all")){t=true
}if(w&&B&&z&&C&&t){w=false;
B=false;
z=false;
C=false;
t=false;
u.push(F)
}});
o.empty();
n.empty();
if(u.length==0){return
}else{j=1;
k.deptFilter(u)
}}},500)
})
};
this.initPagination=function(s){var u=Object.keys(s).length,t=Math.ceil(u/10);
var r={currentPage:j,totalPages:t,onPageClicked:function(y,v,x,z){j=z;
var w=0,A=(j*f)-f;
o.empty();
n.empty();
a.each(s,function(B,C){if(B>=A){(w<f)?k.paintDom(C):"";
if(w==4&&j==1){o.append(a(".advantage-container").html())
}w++
}})
}};
p.bootstrapPaginator(r)
};
this.paintDom=function(u){var s;
var t=(u.startDate===u.endDate)?u.startDate:u.startDate+" to "+u.endDate;
var r="";
for(var v=0;
v<u.researcherName.length;
v++){r+='<span><a href="'+u.researcherName[v].url+'">'+u.researcherName[v].name+"</a></span>"
}s='<li class="separator clearfix">';
if(u.hasImage){s+='<div class="image-part"><img src="'+u.imagePath+'" /></div>';
s+='<div class="content-part"><H3>'+u.researchTitle+'</H3><p class="subline pull-left"><span class="subline-date">'+u.datePublished+'</span><span class="subline-interestarea">'+u.interestArea+"</span> "+r+'</p></div><div><p class="patent-content clearfix"><span class="border-left-formobile-image"></span>'+u.description+'</p><p class="patent-readmore clearfix"></p></div></li>'
}else{s+='<div class="content-part-without-image"><H3>'+u.researchTitle+'</H3><p class="subline pull-left"><span class="subline-date">'+u.datePublished+'</span><span class="subline-interestarea">'+u.interestArea+"</span> "+r+'</p><p class="patent-content clearfix"><span class="border-left-formobile-image"></span>'+u.description+'</p><p class="patent-readmore clearfix"></p></div></li>'
}o.append(s);
(i==10)?i=0:i+=1
};
this.researchleftNav=function(){a(".research-list-pagination").on("click",function(){a("html, body").animate({scrollTop:a(".research-list-container").eq(0).offset().top-200},"1000")
})
};
this.deptFilter=function(s){var r=0;
i=0;
a.each(s,function(t,u){(r<f)?k.paintDom(u):"";
if(r==4){o.append(a(".advantage-container").html())
}r++
});
k.initPagination(s)
};
this.loadDepartmentResearchList=function(){var u="all",s="all",t="all",w="all",v="all";
if(e.filterDepartment!=""&&e.filterDepartment!=c){for(var r=0;
r<b.researchListFilterConfig.institutionInfo.length;
r++){if(b.researchListFilterConfig.institutionInfo[r].department.toLowerCase()==e.filterDepartment.toLowerCase()){g.text(b.researchListFilterConfig.institutionInfo[r].departmentText);
t=b.researchListFilterConfig.institutionInfo[r].department
}}}else{g.text("All");
t=""
}var x=(typeof e.filterDepartment==="string")?e.filterDepartment:"";
if(x=="all"){x=""
}t=x.toLowerCase();
k.loadData(u,s,t,w,v)
};
this.loadData=function(t,r,s,v,u){setTimeout(function(){var x=b.researchListConfig,z=[],A=false,w=false,C=false,y=false,B=false;
a.each(x,function(D,E){A=false;
w=false;
C=false;
y=false;
B=false;
if((E.filterInterestArea.toLowerCase()===t)||(t==="all")){A=true
}if((E.filterInstitution.toLowerCase()===r)||(r==="all")){w=true
}if((E.filterDepartment.toLowerCase()===s)||(s==="all")){C=true
}if((E.filterMonth.toLowerCase()===v)||(v==="all")){y=true
}if((E.filterYear.toLowerCase()===u)||(u==="all")){B=true
}if(A&&w&&C&&y&&B){A=false;
w=false;
C=false;
y=false;
B=false;
z.push(E)
}});
o.empty();
n.empty();
if(z.length==0){return
}else{j=1;
k.deptFilter(z)
}},500)
};
var k=this;
this.init=function(){if(b.researchListConfig!=c){var s,u=/\+/g,t=/([^&=]+)=?([^&]*)/g,v=function(w){return decodeURIComponent(w.replace(u," "))
};
var r=window.location.search.substring(1);
while(s=t.exec(r)){e[v(s[1])]=v(s[2])
}o.empty();
n.empty();
k.deptFilter(b.researchListConfig);
if(typeof e.filterDepartment==="string"&&a.trim(e.filterDepartment)){k.loadDepartmentResearchList()
}a(document).ready(function(){k.filterData()
})
}k.researchleftNav();
return this
}
}return new d()
}())
}(window.manipal=window.manipal||{},jQuery));
(function(b,a,c){a.log=function(d){if(MODULE.config.debug&&(typeof window.console!=="undefined"&&typeof window.console.log!=="undefined")&&console.debug){console.debug(d)
}};
b.studentProjectListComponent=(function(){function d(){var o,n,m=a(".student-project-list-container1"),i=a(".student-project-list-container2"),j=a("#studentProject-listing-wrapper .dept_list button"),p=a(".student-project-list-pagination"),k=1,f=10,h=1,g=5,e={};
this.filterData=function(){a("#studentProject-listing-wrapper .dropdown-menu > li, #studentProject-listing-wrapper .dept_list").on("click",function(r){r.preventDefault();
setTimeout(function(){if(!a(r.target).hasClass("dropdown-toggle")){var A=b.studentProjectListConfig,u=[],w=false,B=false,z=false,C=false,t=false;
var D="",x="",s="",y="",v="";
if(a("#studentProject-listing-wrapper .interestAreaMenu > .active").find("a").data("ivalue")){D=a("#studentProject-listing-wrapper .interestAreaMenu > .active").find("a").data("ivalue").toLowerCase()
}else{D="all"
}if(a("#studentProject-listing-wrapper .institutionMenu > .active").find("a").data("ivalue")){x=a("#studentProject-listing-wrapper .institutionMenu > .active").find("a").data("ivalue").toLowerCase()
}else{x="all"
}if(a("#studentProject-listing-wrapper .departmentMenu > .active").find("a").data("ivalue")){s=a("#studentProject-listing-wrapper .departmentMenu > .active").find("a").data("ivalue").toLowerCase()
}else{s="all"
}if(a("#studentProject-listing-wrapper .monthMenu > .active").find("a").data("ivalue")){y=a("#studentProject-listing-wrapper .monthMenu > .active").find("a").data("ivalue").toLowerCase()
}else{y="all"
}if(a("#studentProject-listing-wrapper .yearMenu > .active").find("a").data("ivalue")){v=a("#studentProject-listing-wrapper .yearMenu > .active").find("a").data("ivalue")+"".toLowerCase()
}else{v="all"
}a.each(A,function(E,F){w=false;
B=false;
z=false;
C=false;
t=false;
if((F.filterInterestArea.toLowerCase()===D)||(D==="all")){w=true
}if((F.filterInstitution.toLowerCase()===x)||(x==="all")){B=true
}if((F.filterDepartment.toLowerCase()===s)||(s==="all")){z=true
}if((F.filterMonth.toLowerCase()===y)||(y==="all")){C=true
}if((F.filterYear.toLowerCase()===v)||(v==="all")){t=true
}if(w&&B&&z&&C&&t){w=false;
B=false;
z=false;
C=false;
t=false;
u.push(F)
}});
m.empty();
i.empty();
p.empty();
if(u.length==0){return
}else{l.deptFilter(u)
}}},500)
})
};
this.initPagination=function(s){var u=Object.keys(s).length,t=Math.ceil(u/10);
var r={currentPage:k,totalPages:t,onPageClicked:function(y,v,x,z){k=z;
var w=0,A=(k*f)-f;
m.empty();
i.empty();
a.each(s,function(B,C){if(B>=A){(w<f)?l.paintDom(C):"";
if(w==4&&k==1){m.append(a(".advantage-container").html())
}w++
}})
}};
p.bootstrapPaginator(r)
};
this.paintDom=function(u){var y="",w=u.participantInfo,v=w.length,s="";
for(var x=0;
x<v;
x++){y+="<dt class='category_info list_header_data'><a class='participant_name' href='"+w[x].url+"'>"+w[x].name+"</a></dt>"
}if(u.hasImage){var t="<li class='separator clearfix student-project-list-item-image-available'><img src='"+u.imageLink+"' class='student-project-list-item-image' /><div class='student-project-list-item-header clearfix'><h3 class='student-project-list-item-title'>"+u.studentProjectListTitle+"</h3><p class='clearfix regular_info'><span class='date_info list_header_data first'><span class='info'>"+u.date+"</span></span><span class='venue_info list_header_data'><span class='info'>"+u.interestAreaValue+"</span></span></p><p class='clearfix participant-name-list'>";
var r="</p></div><p class='patent-content clearfix'><span class='border-left-formobile'></span>"+u.itemContent+"</p><div class='bottom-panel'><div></li>";
s=t+y+r
}else{var t="<li class='separator clearfix'><div class='student-project-list-item-header clearfix'><h3 class='student-project-list-item-title'>"+u.studentProjectListTitle+"</h3><p class='subline pull-left'><span class='data'>"+u.date+"</span><span class='data'>"+u.interestAreaValue+"</span></p><p class='clearfix participant-name-list'>";
var r="</p></div><p class='patent-content clearfix'><span class='border-left-formobile'></span>"+u.itemContent+"</p><div class='bottom-panel'><div></li>";
s=t+y+r
}(h<=5)?m.append(s):i.append(s);
(h==10)?h=0:h+=0
};
this.deptFilter=function(s){var r=0;
a.each(s,function(t,u){(r<f)?l.paintDom(u):"";
if(r==4){m.append(a(".advantage-container").html())
}r++
});
l.initPagination(s)
};
this.loadDepartmentStudentProjectList=function(){var u="all",s="all",t="all",w="all",v="all";
if(e.filterDepartment!=""&&e.filterDepartment!=c){for(var r=0;
r<b.c29_a_5_config.institutionInfo.length;
r++){if(b.c29_a_5_config.institutionInfo[r].department.toLowerCase()==e.filterDepartment.toLowerCase()){j.text(b.c29_a_5_config.institutionInfo[r].departmentText);
t=b.c29_a_5_config.institutionInfo[r].department
}}}else{j.text("All");
t=""
}var x=(typeof e.filterDepartment==="string")?e.filterDepartment:"";
if(x=="all"){x=""
}t=x.toLowerCase();
l.loadData(u,s,t,w,v)
};
this.loadData=function(t,r,s,v,u){setTimeout(function(){var x=b.studentProjectListConfig,z=[],A=false,w=false,C=false,y=false,B=false;
a.each(x,function(D,E){A=false;
w=false;
C=false;
y=false;
B=false;
if((E.filterInterestArea.toLowerCase()===t)||(t==="all")){A=true
}if((E.filterInstitution.toLowerCase()===r)||(r==="all")){w=true
}if((E.filterDepartment.toLowerCase()===s)||(s==="all")){C=true
}if((E.filterMonth.toLowerCase()===v)||(v==="all")){y=true
}if((E.filterYear.toLowerCase()===u)||(u==="all")){B=true
}if(A&&w&&C&&y&&B){A=false;
w=false;
C=false;
y=false;
B=false;
z.push(E)
}});
m.empty();
i.empty();
p.empty();
if(z.length==0){return
}else{l.deptFilter(z)
}},500)
};
var l=this;
this.init=function(){if(b.studentProjectListConfig!=c){var s,u=/\+/g,t=/([^&=]+)=?([^&]*)/g,v=function(w){return decodeURIComponent(w.replace(u," "))
};
var r=window.location.search.substring(1);
while(s=t.exec(r)){e[v(s[1])]=v(s[2])
}m.empty();
i.empty();
l.deptFilter(b.studentProjectListConfig);
if(typeof e.filterDepartment==="string"&&a.trim(e.filterDepartment)){l.loadDepartmentStudentProjectList()
}}a(document).ready(function(){l.filterData()
});
return this
}
}return new d()
}())
}(window.manipal=window.manipal||{},jQuery));
(function(b,a,c){a.log=function(d){if(MODULE.config.debug&&(typeof window.console!=="undefined"&&typeof window.console.log!=="undefined")&&console.debug){console.debug(d)
}};
b.publicationListComponent=(function(){function d(){var m,k,e=a(".publication-list-container"),n=a(".publication-list-pagination"),h=a("#publication-listing-wrapper .dept_list button"),i=1,g=10,l=0,f={};
this.filterData=function(){a(".dropdown-menu > li, .dept_list").on("click",function(o){o.preventDefault();
setTimeout(function(){var y=b.publicationListConfig,s=[],u=false,z=false,x=false,A=false,r=false;
var B="",v="",p="",w="",t="";
if(a("#publication-listing-wrapper .interestAreaMenu > .active").find("a").data("ivalue")){B=a("#publication-listing-wrapper .interestAreaMenu > .active").find("a").data("ivalue").toLowerCase()
}else{B="all"
}if(a("#publication-listing-wrapper .institutionMenu > .active").find("a").data("ivalue")){v=a("#publication-listing-wrapper .institutionMenu > .active").find("a").data("ivalue").toLowerCase()
}else{v="all"
}if(a("#publication-listing-wrapper .departmentMenu > .active").find("a").data("ivalue")){p=a("#publication-listing-wrapper .departmentMenu > .active").find("a").data("ivalue").toLowerCase()
}else{p="all"
}if(a("#publication-listing-wrapper .monthMenu > .active").find("a").data("ivalue")){w=a("#publication-listing-wrapper .monthMenu > .active").find("a").data("ivalue").toLowerCase()
}else{w="all"
}if(a("#publication-listing-wrapper .yearMenu > .active").find("a").data("ivalue")){t=a("#publication-listing-wrapper .yearMenu > .active").find("a").data("ivalue")+"".toLowerCase()
}else{t="all"
}a.each(y,function(C,D){u=false;
z=false;
x=false;
A=false;
r=false;
if((D.filterInterestArea.toLowerCase()===B)||(B==="all")){u=true
}if((D.filterInstitution.toLowerCase()===v)||(v==="all")){z=true
}if((D.filterDepartment.toLowerCase()===p)||(p==="all")){x=true
}if((D.filterMonth.toLowerCase()===w)||(w==="all")){A=true
}if((D.filterYear.toLowerCase()===t)||(t==="all")){r=true
}if(u&&z&&x&&A&&r){u=false;
z=false;
x=false;
A=false;
r=false;
s.push(D)
}});
e.empty();
if(s.length==0){return
}else{i=1;
j.deptFilter(s)
}},500)
})
};
this.initPagination=function(p){var s=Object.keys(p).length,r=Math.ceil(s/10);
var o={currentPage:i,totalPages:r,shouldShowPage:function(t,u,v){switch(t){case"first":case"last":return false;
default:return true
}},onPageClicked:function(w,t,v,x){l=0;
i=x;
var u=0,y=(i*g)-g;
e.empty();
a.each(p,function(z,A){if(z>=y){(u<g)?j.paintDom(A):"";
++u
}})
}};
n.bootstrapPaginator(o)
};
this.paintDom=function(s){l++;
var r="";
for(var o=0;
o<s.authorNameAndLink.length;
o++){r+='<a href="'+s.authorNameAndLink[o].linkUrl+'" class="publication-author-name" title="'+s.authorNameAndLink[o].name+'">'+s.authorNameAndLink[o].name+"</a>"
}var p='<li class="separator clearfix"><div class="publication-list-item"><h3 class="publication-title">'+s.publicationTitle+'</h3><p class="subline pull-left"><span class="subline-date noborder">'+s.dated+'</span><span class="subline-interestarea">'+s.interestAreaText+'</span></p><div class="isMobileCheck"><span class="subline-patentowner">'+r+'</span></div><p class="publication-desc clearfix"><span class="border-left-formobile"></span>'+s.itemContent+'</p><p class="publication-export-event"></p></div></li>';
e.append(p)
};
this.deptFilter=function(p){var o=0;
a.each(p,function(r,s){(o<g)?j.paintDom(s):"";
++o
});
j.initPagination(p)
};
this.loadDepartmentPublicationList=function(){var s="all",p="all",r="all",u="all",t="all";
if(f.filterDepartment!=""&&f.filterDepartment!=c){for(var o=0;
o<b.c29_a_5_config.institutionInfo.length;
o++){if(b.c29_a_5_config.institutionInfo[o].department.toLowerCase()==f.filterDepartment.toLowerCase()){h.text(b.c29_a_5_config.institutionInfo[o].departmentText);
r=b.c29_a_5_config.institutionInfo[o].department
}}}else{h.text("All");
r=""
}var v=(typeof f.filterDepartment==="string")?f.filterDepartment:"";
if(v=="all"){v=""
}r=v.toLowerCase();
j.loadData(s,p,r,u,t)
};
this.loadData=function(r,o,p,t,s){setTimeout(function(){var v=b.publicationListConfig,x=[],y=false,u=false,A=false,w=false,z=false;
a.each(v,function(B,C){y=false;
u=false;
A=false;
w=false;
z=false;
if((C.filterInterestArea.toLowerCase()===r)||(r)){y=true
}if((C.filterInstitution.toLowerCase()===o)||(o==="all")){u=true
}if((C.filterDepartment.toLowerCase()===p)||(p==="all")){A=true
}if((C.filterMonth.toLowerCase()===t)||(t==="all")){w=true
}if((C.filterYear.toLowerCase()===s)||(s==="all")){z=true
}if(y&&u&&A&&w&&z){y=false;
u=false;
A=false;
w=false;
z=false;
x.push(C)
}});
e.empty();
if(x.length==0){return
}else{i=1;
j.deptFilter(x)
}},500)
};
var j=this;
this.init=function(){if(b.publicationListConfig!=c){var p,s=/\+/g,r=/([^&=]+)=?([^&]*)/g,t=function(u){return decodeURIComponent(u.replace(s," "))
};
var o=window.location.search.substring(1);
while(p=r.exec(o)){f[t(p[1])]=t(p[2])
}e.empty();
j.deptFilter(b.publicationListConfig);
a(document).ready(function(){j.filterData()
});
if(typeof f.filterDepartment==="string"&&a.trim(f.filterDepartment)){j.loadDepartmentPublicationList()
}}return this
}
}return new d()
}())
}(window.manipal=window.manipal||{},jQuery));
(function(b,a,c){a.log=function(d){if(MODULE.config.debug&&(typeof window.console!=="undefined"&&typeof window.console.log!=="undefined")&&console.debug){console.debug(d)
}};
b.c129a5=(function(){function d(){var f,g,e,i,k,h;
this.manipulateMenu=function(){a(".interestAreaMenu > li").on("click",function(m){m.preventDefault();
a(".dept_list").addClass("disable");
var l=a(".departmentMenu > li")[0];
a(l).siblings("li").removeClass("active").end().addClass("active");
a("#departmentMenu").html("All");
l=a(".institutionMenu > li")[0];
a(l).siblings("li").removeClass("active").end().addClass("active");
a("#institutionMenu").html("All");
if(b.c29_a_5_config.hideSubDepartment!=c){if(!a(".sub_dept_list").hasClass("disable")){a(".sub_dept_list").addClass("disable")
}a("#subDepartmentMenu").html("All")
}var n=a(this).find("a").html();
a("#interestAreaMenu").html(n);
a(this).siblings("li").removeClass("active").end().addClass("active")
});
a(".institutionMenu > li").on("click",function(n){n.preventDefault();
a(".dept_list").removeClass("disable");
var l=a(".interestAreaMenu > li")[0];
a(l).siblings("li").removeClass("active").end().addClass("active");
a("#interestAreaMenu").html("All");
var o=a(this).find("a").html();
a("#institutionMenu").html(o);
a("#departmentMenu").html("All");
if(b.c29_a_5_config.hideSubDepartment!=c){if(!a(".sub_dept_list").hasClass("disable")){a(".sub_dept_list").addClass("disable")
}a("#subDepartmentMenu").html("All")
}a(this).siblings("li").removeClass("active").end().addClass("active");
var m=a(this).find("a").data("ivalue");
j.printDept(m)
});
a(".institutionMenu > li:first").on("click",function(l){l.preventDefault();
a(".dept_list").addClass("disable")
});
a(".dept_list").on("click",function(m){m.preventDefault();
if(!a(m.target).hasClass("dropdown-toggle")){var n=a(m.target).html();
var l=a(m.target).data("ivalue");
a("#departmentMenu").html(n);
a(m.target).parents(".deptList").siblings("li").removeClass("active").end().addClass("active");
if(b.c29_a_5_config.hideSubDepartment!=c){a(".sub_dept_list").removeClass("disable");
a("#subDepartmentMenu").html("All");
j.printSubDept(l);
if(n.toLowerCase()=="all"){m.preventDefault();
a(".sub_dept_list").addClass("disable")
}}}});
a(".sub_dept_list").on("click",function(m){m.preventDefault();
if(!a(m.target).hasClass("dropdown-toggle")){var n=a(m.target).html();
var l=a(m.target).data("ivalue");
a("#subDepartmentMenu").html(n);
a(m.target).parents(".deptList").siblings("li").removeClass("active").end().addClass("active")
}});
a(".monthMenu > li").on("click",function(l){l.preventDefault();
var m=a(this).find("a").html();
a("#monthMenu").html(m);
a(this).siblings("li").removeClass("active").end().addClass("active")
});
a(".yearMenu > li").on("click",function(l){l.preventDefault();
var m=a(this).find("a").html();
a("#yearMenu").html(m);
a(this).siblings("li").removeClass("active").end().addClass("active")
})
};
this.paintDom=function(){var t=b.c29_a_5_config;
f=t.hideInterestArea,g=t.hideInstitute,e=t.hideDepartment,k=t.hideMonth,h=t.hideYear;
var p=[],n=[],m=[],o=[],l=[];
if(b.c29_a_5_config.hideSubDepartment!=c){var r=t.hideSubDepartment,s=[]
}if(!f){j.printIArea()
}if(!g){j.printInstitute()
}else{a(".dept_list").removeClass("disable");
a(".iarea_list").addClass("hidden");
a(".or-seperator").parents(".seperator").addClass("hidden");
a(".inst_list").addClass("hidden")
}if(!e){j.printDept()
}else{a(".iarea_list").addClass("hidden");
a(".seperator").addClass("hidden");
a(".inst_list").addClass("hidden");
a(".dept_list").addClass("hidden");
a(".month_list").addClass("hide_seperator")
}if(b.c29_a_5_config.hideSubDepartment!=c){if(!r){j.printSubDept()
}}if(!k){j.printMonth()
}else{a(".month_list").addClass("hidden")
}if(!h){j.printYear()
}a(".month_list").addClass("hide_seperator");
a(".year_list").addClass("hidden")
};
this.printIArea=function(){var r=b.c29_a_5_config.interestAreaInfo,p=a(".component-c129-a-5 .interestAreaMenu");
var m=[],l=[];
r.sort(function(t,s){t=t.interestAreaText.toLowerCase();
s=s.interestAreaText.toLowerCase();
return t<s?-1:t>s?1:0
});
a.each(r,function(s,t){if(jQuery.inArray(t.interestArea,l)<0){l.push(t.interestArea);
m.push(t.interestAreaText)
}});
p.html('<li role="presentation" class="active"><a role="menuitem" tabindex="-1" href="#" data-iValue="all">All</a></li>');
for(var o=0;
o<l.length;
o++){var n='<li role="presentation"><a role="menuitem" tabindex="-1" href="#" data-iValue="'+l[o]+'">'+m[o]+"</a></li>";
p.append(n)
}};
this.printInstitute=function(){var r=b.c29_a_5_config.institutionInfo,p=a(".component-c129-a-5 .institutionMenu");
var l=[],n=[];
r.sort(function(t,s){t=t.institutionText.toLowerCase();
s=s.institutionText.toLowerCase();
return t<s?-1:t>s?1:0
});
a.each(r,function(s,t){if(jQuery.inArray(t.institution,n)<0){n.push(t.institution);
l.push(t.institutionText)
}});
p.html('<li role="presentation" class="active"><a role="menuitem" tabindex="-1" href="#" data-iValue="all">All</a></li>');
for(var o=0;
o<n.length;
o++){var m='<li role="presentation"><a role="menuitem" tabindex="-1" href="#" data-iValue="'+n[o]+'">'+l[o]+"</a></li>";
p.append(m)
}};
this.printDept=function(p){var t=b.c29_a_5_config.institutionInfo,m=p||"*",o=a(".component-c129-a-5 .departmentMenu");
var s=[],r=[];
t.sort(function(v,u){v=v.departmentText.toLowerCase();
u=u.departmentText.toLowerCase();
return v<u?-1:v>u?1:0
});
a.each(t,function(u,v){if(m===v.institution||m==="*"){if(jQuery.inArray(v.department,r)<0){r.push(v.department);
s.push(v.departmentText)
}}});
o.html('<li role="presentation" class="active deptList"><a role="menuitem" tabindex="-1" href="#" data-iValue="all">All</a></li>');
for(var n=0;
n<r.length;
n++){var l='<li role="presentation" class="deptList"><a role="menuitem" tabindex="-1" href="#" data-iValue="'+r[n]+'">'+s[n]+"</a></li>";
o.append(l)
}};
this.printSubDept=function(r){var t=b.c29_a_5_config.institutionInfo,p=r||"*",s=a(".component-c129-a-5 .subDepartmentMenu");
var n=[],m=[];
t.sort(function(v,u){v=v.subDepartmentText.toLowerCase();
u=u.subDepartmentText.toLowerCase();
return v<u?-1:v>u?1:0
});
a.each(t,function(u,v){if(p===v.department||p==="*"){if(jQuery.inArray(v.subDepartment,m)<0){m.push(v.subDepartment);
n.push(v.subDepartmentText)
}}});
s.html('<li role="presentation" class="active"><a role="menuitem" tabindex="-1" href="#" data-iValue="all">All</a></li>');
for(var o=0;
o<m.length;
o++){var l='<li role="presentation"><a role="menuitem" tabindex="-1" href="#" data-iValue="'+m[o]+'">'+n[o]+"</a></li>";
s.append(l)
}};
this.printMonth=function(){var p=b.c29_a_5_config.month,m=a(".component-c129-a-5 .monthMenu");
var o=[];
a.each(p,function(r,s){if(jQuery.inArray(s,o)<0){o.push(s)
}});
m.html('<li role="presentation" class="active"><a role="menuitem" tabindex="-1" href="#" data-iValue="all">All</a></li>');
for(var n=0;
n<o.length;
n++){var l='<li role="presentation"><a role="menuitem" tabindex="-1" href="#" data-iValue="'+o[n]+'">'+o[n]+"</a></li>";
m.append(l)
}};
this.printYear=function(){var p=b.c29_a_5_config.year,o=a(".component-c129-a-5 .yearMenu");
var m=[];
a.each(p,function(r,s){if(jQuery.inArray(s,m)<0){m.push(s)
}});
o.html('<li role="presentation" class="active"><a role="menuitem" tabindex="-1" href="#" data-iValue="all">All</a></li>');
for(var n=0;
n<m.length;
n++){var l='<li role="presentation"><a role="menuitem" tabindex="-1" href="#" data-iValue="'+m[n]+'">'+m[n]+"</a></li>";
o.append(l)
}};
var j=this;
this.init=function(){if(b.c29_a_5_config!=c){a(".dept_list").addClass("disable");
if(b.c29_a_5_config.hideSubDepartment==c){a(".sub_dept_list").hide()
}else{a(".sub_dept_list").addClass("disable")
}j.paintDom();
a(document).ready(function(){j.manipulateMenu()
})
}return this
}
}return new d()
}())
}(window.manipal=window.manipal||{},jQuery));
(function(c,b,d){b.log=function(e){if(c.config.debug&&(typeof window.console!=="undefined"&&typeof window.console.log!=="undefined")&&console.debug){console.debug(e)
}};
b.toType=(function a(e){return function(f){if(f===e){return"global"
}return({}).toString.call(f).match(/\s([a-z|A-Z]+)/)[1].toLowerCase()
}
}(this));
c.contentPanelLeftNav=(function(){function e(){var f=this;
this.leftNavClick=function(){b(".content-panel-left-nav-wrapper .left-nav li").click(function(h){h.preventDefault();
if(!b(this).hasClass("content-panel-select")){var g=b(this).attr("class")
}else{return
}b(this).parents(".content-panel-left-nav-wrapper").find(".left-nav li").removeClass("content-panel-select");
b(".left-nav-category").removeClass("content-panel-select-prev");
var i=b(this).index();
if(i>0){b(".content-panel-left-nav-wrapper .left-nav li").eq(i-1).find("span.left-nav-category").addClass("content-panel-select-prev")
}b(this).parents(".content-panel-left-nav-wrapper").find(".content-panel-content-placeholder").hide();
b(this).parents(".content-panel-left-nav-wrapper").find("."+g+"-content").show();
b(this).addClass("content-panel-select")
});
b(".stream-nav-category a").click(function(j){event.preventDefault();
var i=b(this).text();
var k=b(this).attr("class");
var h=b(".stream-nav-default-text").text();
var g=b(".stream-nav-default-text").attr("data-class");
b(".stream-nav-default-text").text(i);
b(".stream-nav-default-text").attr("data-class",k);
b(".stream-nav-category").show();
b(".content-panel-content-placeholder").hide();
b("."+k+"-content").show()
})
};
this.init=function(){f.leftNavClick();
return this
};
return this.init()
}return new e()
}())
}(window.manipal=window.manipal||{},jQuery));
(function(b,a,c){b.leftNav=(function(){function d(){var f=this;
this.classic_menu=function(){var l=new Array(),n=new Array(),h=new Array();
var k=a.parseJSON(a("#classicNavigation").val());
var j=a(".menu_list");
if(k!=null){a.each(k,function(o,p){a.each(p,function(s,r){if(r.items!=""){a.each(r.items,function(w,u){var v=a("<li/>").addClass("").appendTo(j);
var z=a("<a/>").addClass("parent").text(u.name).attr("href",u.link).appendTo(v);
var y=u.link;
var t=y.split("/");
l.push(t[t.length-1]);
if(u.items!=""){a(v).addClass("has-sub");
var x=a("<ul/>").addClass("").appendTo(v);
a.each(u.items,function(C,F){var G=a("<li/>").addClass("").appendTo(x);
var D=a("<a/>").addClass("child").text(F.name).attr("href",F.link).appendTo(G);
var E=F.link;
var A=E.split("/");
n.push(A[A.length-1]);
if(F.items!=""){a(G).addClass("has-sub");
var B=a("<ul/>").addClass("grandChild").appendTo(G);
a.each(F.items,function(I,K){var L=a("<li/>").addClass("").appendTo(B);
var J=a("<a/>").addClass("").text(K.name).attr("href",K.link).appendTo(L);
var M=K.link;
var H=M.split("/");
h.push(H[H.length-1])
})
}})
}})
}})
})
}var m=location.pathname;
var i=m.split("/");
var g=i[i.length-1];
if(k!=null){a.each(k,function(o,p){a.each(p,function(t,r){var u=r.link;
var s=u.split("/");
var w=s[s.length-1];
if(g==w){var v=a("<li/>").appendTo(a(".classicMob_menu"));
a("<a/>").text(r.name).attr("href",r.link).appendTo(v);
console.log(r);
a.each(r,function(y,x){if(typeof(x)==="object"){e(x)
}})
}else{var v=a("<li/>").appendTo(a(".classicMob_menu"));
a("<a/>").text(r.name).attr("href",r.link).appendTo(v);
a.each(r.items,function(A,z){var y=z.link;
var x=y.split("/");
var C=x[x.length-1];
if(g==C){var B=a("<li/>").appendTo(a(".classicMob_menu"));
a("<a/>").text(z.name).attr("href",z.link).appendTo(B);
if(z.items!=""){a.each(z,function(D,E){if(typeof(E)==="object"){e(E)
}})
}else{if(typeof(r.items)==="object"){e(r.items)
}}}else{a.each(z.items,function(F,H){var D=H.link;
var E=D.split("/");
var I=E[E.length-1];
if(g==I){if(H.items!=""){a.each(H,function(J,K){if(typeof(K)==="object"){e(K)
}})
}else{var G=a("<li/>").appendTo(a(".classicMob_menu"));
a("<a/>").text(z.name).attr("href",z.link).appendTo(G);
if(typeof(z.items)==="object"){e(z.items)
}}}})
}})
}})
})
}};
function e(g){a.each(g,function(j,k){var h=a("<li/>").appendTo(a(".classicMob_menu"));
a("<a/>").text(k.name).attr("href",k.link).appendTo(h)
})
}this.init=function(){a(document).ready(function(){if(a("#classicNavigation").val()!=""&&a("#classicNavigation").val()!=c){f.classic_menu()
}a(".classicMob_menu").on("click",".init",function(){a(this).closest(".classicMob_menu").children("li:not(.init)").toggle()
});
a(".current_page").text(document.title);
var g=a(".classicMob_menu").children("li:not(.init)");
a(".classicMob_menu").on("click","li:not(.init)",function(){g.removeClass("selected");
a(this).addClass("selected");
a(".classicMob_menu").children(".init").html(a(this).html());
g.toggle()
});
a("#classic_menu_ul li a").each(function(h,i){if(a(i).text()==a("#pageTitle").val()){a(i).parent().addClass("active")
}})
})
};
return this.init()
}return new d()
}())
}(window.manipal=window.manipal||{},jQuery));
/*!
 * typeahead.js 0.11.1
 * https://github.com/twitter/typeahead.js
 * Copyright 2013-2015 Twitter, Inc. and other contributors; Licensed MIT
 */
(function(a,b){if(typeof define==="function"&&define.amd){define("bloodhound",["jquery"],function(c){return a.Bloodhound=b(c)
})
}else{if(typeof exports==="object"){module.exports=b(require("jquery"))
}else{a.Bloodhound=b(jQuery)
}}})(this,function(d){var j=function(){return{isMsie:function(){return/(msie|trident)/i.test(navigator.userAgent)?navigator.userAgent.match(/(msie |rv:)(\d+(.\d+)?)/i)[2]:false
},isBlankString:function(o){return !o||/^\s*$/.test(o)
},escapeRegExChars:function(o){return o.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")
},isString:function(o){return typeof o==="string"
},isNumber:function(o){return typeof o==="number"
},isArray:d.isArray,isFunction:d.isFunction,isObject:d.isPlainObject,isUndefined:function(o){return typeof o==="undefined"
},isElement:function(o){return !!(o&&o.nodeType===1)
},isJQuery:function(o){return o instanceof d
},toStr:function n(o){return j.isUndefined(o)||o===null?"":o+""
},bind:d.proxy,each:function(r,o){d.each(r,p);
function p(s,t){return o(t,s)
}},map:d.map,filter:d.grep,every:function(p,r){var o=true;
if(!p){return o
}d.each(p,function(s,t){if(!(o=r.call(null,t,s,p))){return false
}});
return !!o
},some:function(p,r){var o=false;
if(!p){return o
}d.each(p,function(s,t){if(o=r.call(null,t,s,p)){return false
}});
return !!o
},mixin:d.extend,identity:function(o){return o
},clone:function(o){return d.extend(true,{},o)
},getIdGenerator:function(){var o=0;
return function(){return o++
}
},templatify:function m(p){return d.isFunction(p)?p:o;
function o(){return String(p)
}},defer:function(o){setTimeout(o,0)
},debounce:function(r,t,p){var s,o;
return function(){var x=this,w=arguments,v,u;
v=function(){s=null;
if(!p){o=r.apply(x,w)
}};
u=p&&!s;
clearTimeout(s);
s=setTimeout(v,t);
if(u){o=r.apply(x,w)
}return o
}
},throttle:function(u,w){var s,r,v,o,t,p;
t=0;
p=function(){t=new Date();
v=null;
o=u.apply(s,r)
};
return function(){var x=new Date(),y=w-(x-t);
s=this;
r=arguments;
if(y<=0){clearTimeout(v);
v=null;
t=x;
o=u.apply(s,r)
}else{if(!v){v=setTimeout(p,y)
}}return o
}
},stringify:function(o){return j.isString(o)?o:JSON.stringify(o)
},noop:function(){}}
}();
var l="0.11.1";
var f=function(){return{nonword:m,whitespace:n,obj:{nonword:o(m),whitespace:o(n)}};
function n(p){p=j.toStr(p);
return p?p.split(/\s+/):[]
}function m(p){p=j.toStr(p);
return p?p.split(/\W+/):[]
}function o(r){return function p(s){s=j.isArray(s)?s:[].slice.call(arguments,0);
return function t(v){var u=[];
j.each(s,function(w){u=u.concat(r(j.toStr(v[w])))
});
return u
}
}
}}();
var k=function(){function n(v){this.maxSize=j.isNumber(v)?v:100;
this.reset();
if(this.maxSize<=0){this.set=this.get=d.noop
}}j.mixin(n.prototype,{set:function u(v,y){var x=this.list.tail,w;
if(this.size>=this.maxSize){this.list.remove(x);
delete this.hash[x.key];
this.size--
}if(w=this.hash[v]){w.val=y;
this.list.moveToFront(w)
}else{w=new o(v,y);
this.list.add(w);
this.hash[v]=w;
this.size++
}},get:function p(v){var w=this.hash[v];
if(w){this.list.moveToFront(w);
return w.val
}},reset:function s(){this.size=0;
this.hash={};
this.list=new r()
}});
function r(){this.head=this.tail=null
}j.mixin(r.prototype,{add:function t(v){if(this.head){v.next=this.head;
this.head.prev=v
}this.head=v;
this.tail=this.tail||v
},remove:function m(v){v.prev?v.prev.next=v.next:this.head=v.next;
v.next?v.next.prev=v.prev:this.tail=v.prev
},moveToFront:function(v){this.remove(v);
this.add(v)
}});
function o(v,w){this.key=v;
this.val=w;
this.prev=this.next=null
}return n
}();
var h=function(){var s;
try{s=window.localStorage;
s.setItem("~~~","!");
s.removeItem("~~~")
}catch(r){s=null
}function o(v,u){this.prefix=["__",v,"__"].join("");
this.ttlKey="__ttl__";
this.keyMatcher=new RegExp("^"+j.escapeRegExChars(this.prefix));
this.ls=u||s;
!this.ls&&this._noop()
}j.mixin(o.prototype,{_prefix:function(u){return this.prefix+u
},_ttlKey:function(u){return this._prefix(u)+this.ttlKey
},_noop:function(){this.get=this.set=this.remove=this.clear=this.isExpired=j.noop
},_safeSet:function(u,w){try{this.ls.setItem(u,w)
}catch(v){if(v.name==="QuotaExceededError"){this.clear();
this._noop()
}}},get:function(u){if(this.isExpired(u)){this.remove(u)
}return t(this.ls.getItem(this._prefix(u)))
},set:function(v,w,u){if(j.isNumber(u)){this._safeSet(this._ttlKey(v),p(n()+u))
}else{this.ls.removeItem(this._ttlKey(v))
}return this._safeSet(this._prefix(v),p(w))
},remove:function(u){this.ls.removeItem(this._ttlKey(u));
this.ls.removeItem(this._prefix(u));
return this
},clear:function(){var u,v=m(this.keyMatcher);
for(u=v.length;
u--;
){this.remove(v[u])
}return this
},isExpired:function(v){var u=t(this.ls.getItem(this._ttlKey(v)));
return j.isNumber(u)&&n()>u?true:false
}});
return o;
function n(){return new Date().getTime()
}function p(u){return JSON.stringify(j.isUndefined(u)?null:u)
}function t(u){return d.parseJSON(u)
}function m(v){var x,w,y=[],u=s.length;
for(x=0;
x<u;
x++){if((w=s.key(x)).match(v)){y.push(w.replace(v,""))
}}return y
}}();
var e=function(){var o=0,s={},m=6,r=new k(10);
function u(v){v=v||{};
this.cancelled=false;
this.lastReq=null;
this._send=v.transport;
this._get=v.limiter?v.limiter(this._get):this._get;
this._cache=v.cache===false?new k(0):r
}u.setMaxPendingRequests=function n(v){m=v
};
u.resetCache=function t(){r.reset()
};
j.mixin(u.prototype,{_fingerprint:function p(v){v=v||{};
return v.url+v.type+d.param(v.data||{})
},_get:function(C,w){var B=this,z,A;
z=this._fingerprint(C);
if(this.cancelled||z!==this.lastReq){return
}if(A=s[z]){A.done(y).fail(x)
}else{if(o<m){o++;
s[z]=this._send(C).done(y).fail(x).always(v)
}else{this.onDeckRequestArgs=[].slice.call(arguments,0)
}}function y(D){w(null,D);
B._cache.set(z,D)
}function x(){w(true)
}function v(){o--;
delete s[z];
if(B.onDeckRequestArgs){B._get.apply(B,B.onDeckRequestArgs);
B.onDeckRequestArgs=null
}}},get:function(y,v){var x,w;
v=v||d.noop;
y=j.isString(y)?{url:y}:y||{};
w=this._fingerprint(y);
this.cancelled=false;
this.lastReq=w;
if(x=this._cache.get(w)){v(null,x)
}else{this._get(y,v)
}},cancel:function(){this.cancelled=true
}});
return u
}();
var a=window.SearchIndex=function(){var u="c",v="i";
function m(A){A=A||{};
if(!A.datumTokenizer||!A.queryTokenizer){d.error("datumTokenizer and queryTokenizer are both required")
}this.identify=A.identify||j.stringify;
this.datumTokenizer=A.datumTokenizer;
this.queryTokenizer=A.queryTokenizer;
this.reset()
}j.mixin(m.prototype,{bootstrap:function o(A){this.datums=A.datums;
this.trie=A.trie
},add:function(B){var A=this;
B=j.isArray(B)?B:[B];
j.each(B,function(C){var E,D;
A.datums[E=A.identify(C)]=C;
D=r(A.datumTokenizer(C));
j.each(D,function(F){var I,H,G;
I=A.trie;
H=F.split("");
while(G=H.shift()){I=I[u][G]||(I[u][G]=w());
I[v].push(E)
}})
})
},get:function n(A){var B=this;
return j.map(A,function(C){return B.datums[C]
})
},search:function z(C){var A=this,D,B;
D=r(this.queryTokenizer(C));
j.each(D,function(E){var I,H,G,F;
if(B&&B.length===0){return false
}I=A.trie;
H=E.split("");
while(I&&(G=H.shift())){I=I[u][G]
}if(I&&H.length===0){F=I[v].slice(0);
B=B?s(B,F):F
}else{B=[];
return false
}});
return B?j.map(p(B),function(E){return A.datums[E]
}):[]
},all:function x(){var A=[];
for(var B in this.datums){A.push(this.datums[B])
}return A
},reset:function t(){this.datums={};
this.trie=w()
},serialize:function y(){return{datums:this.datums,trie:this.trie}
}});
return m;
function r(A){A=j.filter(A,function(B){return !!B
});
A=j.map(A,function(B){return B.toLowerCase()
});
return A
}function w(){var A={};
A[v]=[];
A[u]={};
return A
}function p(E){var B={},D=[];
for(var C=0,A=E.length;
C<A;
C++){if(!B[E[C]]){B[E[C]]=true;
D.push(E[C])
}}return D
}function s(F,D){var B=0,E=0,G=[];
F=F.sort();
D=D.sort();
var C=F.length,A=D.length;
while(B<C&&E<A){if(F[B]<D[E]){B++
}else{if(F[B]>D[E]){E++
}else{G.push(F[B]);
B++;
E++
}}}return G
}}();
var g=function(){var r;
r={data:"data",protocol:"protocol",thumbprint:"thumbprint"};
function s(t){this.url=t.url;
this.ttl=t.ttl;
this.cache=t.cache;
this.prepare=t.prepare;
this.transform=t.transform;
this.transport=t.transport;
this.thumbprint=t.thumbprint;
this.storage=new h(t.cacheKey)
}j.mixin(s.prototype,{_settings:function p(){return{url:this.url,type:"GET",dataType:"json"}
},store:function n(t){if(!this.cache){return
}this.storage.set(r.data,t,this.ttl);
this.storage.set(r.protocol,location.protocol,this.ttl);
this.storage.set(r.thumbprint,this.thumbprint,this.ttl)
},fromCache:function o(){var t={},u;
if(!this.cache){return null
}t.data=this.storage.get(r.data);
t.protocol=this.storage.get(r.protocol);
t.thumbprint=this.storage.get(r.thumbprint);
u=t.thumbprint!==this.thumbprint||t.protocol!==location.protocol;
return t.data&&!u?t.data:null
},fromNetwork:function(t){var w=this,u;
if(!t){return
}u=this.prepare(this._settings());
this.transport(u).fail(v).done(x);
function v(){t(true)
}function x(y){t(null,w.transform(y))
}},clear:function m(){this.storage.clear();
return this
}});
return s
}();
var c=function(){function o(r){this.url=r.url;
this.prepare=r.prepare;
this.transform=r.transform;
this.transport=new e({cache:r.cache,limiter:r.limiter,transport:r.transport})
}j.mixin(o.prototype,{_settings:function n(){return{url:this.url,type:"GET",dataType:"json"}
},get:function m(u,r){var t=this,s;
if(!r){return
}u=u||"";
s=this.prepare(u,this._settings());
return this.transport.get(s,v);
function v(w,x){w?r([]):r(t.transform(x))
}},cancelLastRequest:function p(){this.transport.cancel()
}});
return o
}();
var b=function(){return function r(u){var t,v;
t={initialize:true,identify:j.stringify,datumTokenizer:null,queryTokenizer:null,sufficient:5,sorter:null,local:[],prefetch:null,remote:null};
u=j.mixin(t,u||{});
!u.datumTokenizer&&d.error("datumTokenizer is required");
!u.queryTokenizer&&d.error("queryTokenizer is required");
v=u.sorter;
u.sorter=v?function(w){return w.sort(v)
}:j.identity;
u.local=j.isFunction(u.local)?u.local():u.local;
u.prefetch=n(u.prefetch);
u.remote=m(u.remote);
return u
};
function n(u){var t;
if(!u){return null
}t={url:null,ttl:24*60*60*1000,cache:true,cacheKey:null,thumbprint:"",prepare:j.identity,transform:j.identity,transport:null};
u=j.isString(u)?{url:u}:u;
u=j.mixin(t,u);
!u.url&&d.error("prefetch requires url to be set");
u.transform=u.filter||u.transform;
u.cacheKey=u.cacheKey||u.url;
u.thumbprint=l+u.thumbprint;
u.transport=u.transport?o(u.transport):d.ajax;
return u
}function m(u){var t;
if(!u){return
}t={url:null,cache:true,prepare:null,replace:null,wildcard:null,limiter:null,rateLimitBy:"debounce",rateLimitWait:300,transform:j.identity,transport:null};
u=j.isString(u)?{url:u}:u;
u=j.mixin(t,u);
!u.url&&d.error("remote requires url to be set");
u.transform=u.filter||u.transform;
u.prepare=s(u);
u.limiter=p(u);
u.transport=u.transport?o(u.transport):d.ajax;
delete u.replace;
delete u.wildcard;
delete u.rateLimitBy;
delete u.rateLimitWait;
return u
}function s(z){var w,y,u;
w=z.prepare;
y=z.replace;
u=z.wildcard;
if(w){return w
}if(y){w=t
}else{if(z.wildcard){w=v
}else{w=x
}}return w;
function t(B,A){A.url=y(A.url,B);
return A
}function v(B,A){A.url=A.url.replace(u,encodeURIComponent(B));
return A
}function x(B,A){return A
}}function p(x){var t,y,w;
t=x.limiter;
y=x.rateLimitBy;
w=x.rateLimitWait;
if(!t){t=/^throttle$/i.test(y)?v(w):u(w)
}return t;
function u(A){return function z(B){return j.debounce(B,A)
}
}function v(A){return function z(B){return j.throttle(B,A)
}
}}function o(t){return function u(y){var v=d.Deferred();
t(y,x,w);
return v;
function x(z){j.defer(function(){v.resolve(z)
})
}function w(z){j.defer(function(){v.reject(z)
})
}}
}}();
var i=function(){var o;
o=window&&window.Bloodhound;
function t(A){A=b(A);
this.sorter=A.sorter;
this.identify=A.identify;
this.sufficient=A.sufficient;
this.local=A.local;
this.remote=A.remote?new c(A.remote):null;
this.prefetch=A.prefetch?new g(A.prefetch):null;
this.index=new a({identify:this.identify,datumTokenizer:A.datumTokenizer,queryTokenizer:A.queryTokenizer});
A.initialize!==false&&this.initialize()
}t.noConflict=function s(){window&&(window.Bloodhound=o);
return t
};
t.tokenizers=f;
j.mixin(t.prototype,{__ttAdapter:function u(){var C=this;
return this.remote?B:A;
function B(F,E,D){return C.search(F,E,D)
}function A(E,D){return C.search(E,D)
}},_loadPrefetch:function m(){var C=this,B,D;
B=d.Deferred();
if(!this.prefetch){B.resolve()
}else{if(D=this.prefetch.fromCache()){this.index.bootstrap(D);
B.resolve()
}else{this.prefetch.fromNetwork(A)
}}return B.promise();
function A(E,F){if(E){return B.reject()
}C.add(F);
C.prefetch.store(C.index.serialize());
B.resolve()
}},_initialize:function p(){var C=this,A;
this.clear();
(this.initPromise=this._loadPrefetch()).done(B);
return this.initPromise;
function B(){C.add(C.local)
}},initialize:function p(A){return !this.initPromise||A?this._initialize():this.initPromise
},add:function y(A){this.index.add(A);
return this
},get:function n(A){A=j.isArray(A)?A:[].slice.call(arguments);
return this.index.get(A)
},search:function z(E,D,B){var C=this,A;
A=this.sorter(this.index.search(E));
D(this.remote?A.slice():A);
if(this.remote&&A.length<this.sufficient){this.remote.get(E,F)
}else{if(this.remote){this.remote.cancelLastRequest()
}}return this;
function F(H){var G=[];
j.each(H,function(I){!j.some(A,function(J){return C.identify(I)===C.identify(J)
})&&G.push(I)
});
B&&B(G)
}},all:function v(){return this.index.all()
},clear:function r(){this.index.reset();
return this
},clearPrefetchCache:function x(){this.prefetch&&this.prefetch.clear();
return this
},clearRemoteCache:function w(){e.resetCache();
return this
},ttAdapter:function u(){return this.__ttAdapter()
}});
return t
}();
return i
});
(function(a,b){if(typeof define==="function"&&define.amd){define("typeahead.js",["jquery"],function(c){return b(c)
})
}else{if(typeof exports==="object"){module.exports=b(require("jquery"))
}else{b(jQuery)
}}})(this,function(d){var i=function(){return{isMsie:function(){return/(msie|trident)/i.test(navigator.userAgent)?navigator.userAgent.match(/(msie |rv:)(\d+(.\d+)?)/i)[2]:false
},isBlankString:function(n){return !n||/^\s*$/.test(n)
},escapeRegExChars:function(n){return n.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")
},isString:function(n){return typeof n==="string"
},isNumber:function(n){return typeof n==="number"
},isArray:d.isArray,isFunction:d.isFunction,isObject:d.isPlainObject,isUndefined:function(n){return typeof n==="undefined"
},isElement:function(n){return !!(n&&n.nodeType===1)
},isJQuery:function(n){return n instanceof d
},toStr:function m(n){return i.isUndefined(n)||n===null?"":n+""
},bind:d.proxy,each:function(p,n){d.each(p,o);
function o(r,s){return n(s,r)
}},map:d.map,filter:d.grep,every:function(o,p){var n=true;
if(!o){return n
}d.each(o,function(r,s){if(!(n=p.call(null,s,r,o))){return false
}});
return !!n
},some:function(o,p){var n=false;
if(!o){return n
}d.each(o,function(r,s){if(n=p.call(null,s,r,o)){return false
}});
return !!n
},mixin:d.extend,identity:function(n){return n
},clone:function(n){return d.extend(true,{},n)
},getIdGenerator:function(){var n=0;
return function(){return n++
}
},templatify:function l(o){return d.isFunction(o)?o:n;
function n(){return String(o)
}},defer:function(n){setTimeout(n,0)
},debounce:function(p,s,o){var r,n;
return function(){var w=this,v=arguments,u,t;
u=function(){r=null;
if(!o){n=p.apply(w,v)
}};
t=o&&!r;
clearTimeout(r);
r=setTimeout(u,s);
if(t){n=p.apply(w,v)
}return n
}
},throttle:function(t,v){var r,p,u,n,s,o;
s=0;
o=function(){s=new Date();
u=null;
n=t.apply(r,p)
};
return function(){var w=new Date(),x=v-(w-s);
r=this;
p=arguments;
if(x<=0){clearTimeout(u);
u=null;
s=w;
n=t.apply(r,p)
}else{if(!u){u=setTimeout(o,x)
}}return n
}
},stringify:function(n){return i.isString(n)?n:JSON.stringify(n)
},noop:function(){}}
}();
var j=function(){var o={wrapper:"twitter-typeahead",input:"tt-input",hint:"tt-hint",menu:"tt-menu",dataset:"tt-dataset",suggestion:"tt-suggestion",selectable:"tt-selectable",empty:"tt-empty",open:"tt-open",cursor:"tt-cursor",highlight:"tt-highlight"};
return n;
function n(t){var s,r;
r=i.mixin({},o,t);
s={css:l(),classes:r,html:p(r),selectors:m(r)};
return{css:s.css,html:s.html,classes:s.classes,selectors:s.selectors,mixin:function(u){i.mixin(u,s)
}}
}function p(r){return{wrapper:'<span class="'+r.wrapper+'"></span>',menu:'<div class="'+r.menu+'"></div>'}
}function m(s){var r={};
i.each(s,function(u,t){r[t]="."+u
});
return r
}function l(){var r={wrapper:{position:"relative",display:"inline-block"},hint:{position:"absolute",top:"0",left:"0",borderColor:"transparent",boxShadow:"none",opacity:"1"},input:{position:"relative",verticalAlign:"top",backgroundColor:"transparent"},inputWithNoHint:{position:"relative",verticalAlign:"top"},menu:{position:"absolute",top:"100%",left:"0",zIndex:"100",display:"none"},ltr:{left:"0",right:"auto"},rtl:{left:"auto",right:" 0"}};
if(i.isMsie()){i.mixin(r.input,{backgroundImage:"url(data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)"})
}return r
}}();
var f=function(){var n,m;
n="typeahead:";
m={render:"rendered",cursorchange:"cursorchanged",select:"selected",autocomplete:"autocompleted"};
function l(p){if(!p||!p.el){d.error("EventBus initialized without el")
}this.$el=d(p.el)
}i.mixin(l.prototype,{_trigger:function(r,p){var o;
o=d.Event(n+r);
(p=p||[]).unshift(o);
this.$el.trigger.apply(this.$el,p);
return o
},before:function(r){var p,o;
p=[].slice.call(arguments,1);
o=this._trigger("before"+r,p);
return o.isDefaultPrevented()
},trigger:function(p){var o;
this._trigger(p,[].slice.call(arguments,1));
if(o=m[p]){this._trigger(o,[].slice.call(arguments,1))
}}});
return l
}();
var k=function(){var n=/\s+/,s=l();
return{onSync:t,onAsync:m,off:o,trigger:p};
function u(A,y,w,x){var z;
if(!w){return this
}y=y.split(n);
w=x?v(w,x):w;
this._callbacks=this._callbacks||{};
while(z=y.shift()){this._callbacks[z]=this._callbacks[z]||{sync:[],async:[]};
this._callbacks[z][A].push(w)
}return this
}function m(y,w,x){return u.call(this,"async",y,w,x)
}function t(y,w,x){return u.call(this,"sync",y,w,x)
}function o(w){var x;
if(!this._callbacks){return this
}w=w.split(n);
while(x=w.shift()){delete this._callbacks[x]
}return this
}function p(x){var y,z,w,A,B;
if(!this._callbacks){return this
}x=x.split(n);
w=[].slice.call(arguments,1);
while((y=x.shift())&&(z=this._callbacks[y])){A=r(z.sync,this,[y].concat(w));
B=r(z.async,this,[y].concat(w));
A()&&s(B)
}return this
}function r(z,y,x){return w;
function w(){var C;
for(var B=0,A=z.length;
!C&&B<A;
B+=1){C=z[B].apply(y,x)===false
}return !C
}}function l(){var x;
if(window.setImmediate){x=function y(z){setImmediate(function(){z()
})
}
}else{x=function w(z){setTimeout(function(){z()
},0)
}
}return x
}function v(x,w){return x.bind?x.bind(w):function(){x.apply(w,[].slice.call(arguments,0))
}
}}();
var b=function(o){var n={node:null,pattern:null,tagName:"strong",className:null,wordsOnly:false,caseSensitive:false};
return function m(t){var p;
t=i.mixin({},n,t);
if(!t.node||!t.pattern){return
}t.pattern=i.isArray(t.pattern)?t.pattern:[t.pattern];
p=l(t.pattern,t.caseSensitive,t.wordsOnly);
r(t.node,s);
function s(x){var v,u,w;
if(v=p.exec(x.data)){w=o.createElement(t.tagName);
t.className&&(w.className=t.className);
u=x.splitText(v.index);
u.splitText(v[0].length);
w.appendChild(u.cloneNode(true));
x.parentNode.replaceChild(w,u)
}return !!v
}function r(x,y){var v,w=3;
for(var u=0;
u<x.childNodes.length;
u++){v=x.childNodes[u];
if(v.nodeType===w){u+=y(v)?1:0
}else{r(v,y)
}}}};
function l(t,r,w){var v=[],u;
for(var s=0,p=t.length;
s<p;
s++){v.push(i.escapeRegExChars(t[s]))
}u=w?"\\b("+v.join("|")+")\\b":"("+v.join("|")+")";
return r?new RegExp(u):new RegExp(u,"i")
}}(window.document);
var g=function(){var K;
K={9:"tab",27:"esc",37:"left",39:"right",13:"enter",38:"up",40:"down"};
function G(P,O){P=P||{};
if(!P.input){d.error("input is missing")
}O.mixin(this);
this.$hint=d(P.hint);
this.$input=d(P.input);
this.query=this.$input.val();
this.queryWhenFocused=this.hasFocus()?this.query:null;
this.$overflowHelper=z(this.$input);
this._checkLanguageDirection();
if(this.$hint.length===0){this.setHint=this.getHint=this.clearHint=this.clearHintIfInvalid=i.noop
}}G.normalizeQuery=function(O){return i.toStr(O).replace(/^\s*/g,"").replace(/\s{2,}/g," ")
};
i.mixin(G.prototype,k,{_onBlur:function x(){this.resetInputValue();
this.trigger("blurred")
},_onFocus:function s(){this.queryWhenFocused=this.query;
this.trigger("focused")
},_onKeydown:function M(O){var P=K[O.which||O.keyCode];
this._managePreventDefault(P,O);
if(P&&this._shouldTrigger(P,O)){this.trigger(P+"Keyed",O)
}},_onInput:function n(){this._setQuery(this.getInputValue());
this.clearHintIfInvalid();
this._checkLanguageDirection()
},_managePreventDefault:function u(Q,P){var O;
switch(Q){case"up":case"down":O=!A(P);
break;
default:O=false
}O&&P.preventDefault()
},_shouldTrigger:function N(Q,P){var O;
switch(Q){case"tab":O=!A(P);
break;
default:O=true
}return O
},_checkLanguageDirection:function m(){var O=(this.$input.css("direction")||"ltr").toLowerCase();
if(this.dir!==O){this.dir=O;
this.$hint.attr("dir",O);
this.trigger("langDirChanged",O)
}},_setQuery:function C(R,P){var O,Q;
O=w(R,this.query);
Q=O?this.query.length!==R.length:false;
this.query=R;
if(!P&&!O){this.trigger("queryChanged",this.query)
}else{if(!P&&Q){this.trigger("whitespaceChanged",this.query)
}}},bind:function(){var R=this,S,O,Q,P;
S=i.bind(this._onBlur,this);
O=i.bind(this._onFocus,this);
Q=i.bind(this._onKeydown,this);
P=i.bind(this._onInput,this);
this.$input.on("blur.tt",S).on("focus.tt",O).on("keydown.tt",Q);
if(!i.isMsie()||i.isMsie()>9){this.$input.on("input.tt",P)
}else{this.$input.on("keydown.tt keypress.tt cut.tt paste.tt",function(T){if(K[T.which||T.keyCode]){return
}i.defer(i.bind(R._onInput,R,T))
})
}return this
},focus:function B(){this.$input.focus()
},blur:function H(){this.$input.blur()
},getLangDir:function F(){return this.dir
},getQuery:function D(){return this.query||""
},setQuery:function C(P,O){this.setInputValue(P);
this._setQuery(P,O)
},hasQueryChangedSinceLastFocus:function I(){return this.query!==this.queryWhenFocused
},getInputValue:function t(){return this.$input.val()
},setInputValue:function v(O){this.$input.val(O);
this.clearHintIfInvalid();
this._checkLanguageDirection()
},resetInputValue:function r(){this.setInputValue(this.query)
},getHint:function o(){return this.$hint.val()
},setHint:function J(O){this.$hint.val(O)
},clearHint:function y(){this.setHint("")
},clearHintIfInvalid:function l(){var R,Q,O,P;
R=this.getInputValue();
Q=this.getHint();
O=R!==Q&&Q.indexOf(R)===0;
P=R!==""&&O&&!this.hasOverflow();
!P&&this.clearHint()
},hasFocus:function p(){return this.$input.is(":focus")
},hasOverflow:function E(){var O=this.$input.width()-2;
this.$overflowHelper.text(this.getInputValue());
return this.$overflowHelper.width()>=O
},isCursorAtEnd:function(){var P,Q,O;
P=this.$input.val().length;
Q=this.$input[0].selectionStart;
if(i.isNumber(Q)){return Q===P
}else{if(document.selection){O=document.selection.createRange();
O.moveStart("character",-P);
return P===O.text.length
}}return true
},destroy:function L(){this.$hint.off(".tt");
this.$input.off(".tt");
this.$overflowHelper.remove();
this.$hint=this.$input=this.$overflowHelper=d("<div>")
}});
return G;
function z(O){return d('<pre aria-hidden="true"></pre>').css({position:"absolute",visibility:"hidden",whiteSpace:"pre",fontFamily:O.css("font-family"),fontSize:O.css("font-size"),fontStyle:O.css("font-style"),fontVariant:O.css("font-variant"),fontWeight:O.css("font-weight"),wordSpacing:O.css("word-spacing"),letterSpacing:O.css("letter-spacing"),textIndent:O.css("text-indent"),textRendering:O.css("text-rendering"),textTransform:O.css("text-transform")}).insertAfter(O)
}function w(P,O){return G.normalizeQuery(P)===G.normalizeQuery(O)
}function A(O){return O.altKey||O.ctrlKey||O.metaKey||O.shiftKey
}}();
var a=function(){var x,A;
x={val:"tt-selectable-display",obj:"tt-selectable-object"};
A=i.getIdGenerator();
function I(K,J){K=K||{};
K.templates=K.templates||{};
K.templates.notFound=K.templates.notFound||K.templates.empty;
if(!K.source){d.error("missing source")
}if(!K.node){d.error("missing node")
}if(K.name&&!o(K.name)){d.error("invalid dataset name: "+K.name)
}J.mixin(this);
this.highlight=!!K.highlight;
this.name=K.name||A();
this.limit=K.limit||5;
this.displayFn=z(K.display||K.displayKey);
this.templates=p(K.templates,this.displayFn);
this.source=K.source.__ttAdapter?K.source.__ttAdapter():K.source;
this.async=i.isUndefined(K.async)?this.source.length>2:!!K.async;
this._resetLastSuggestion();
this.$el=d(K.node).addClass(this.classes.dataset).addClass(this.classes.dataset+"-"+this.name)
}I.extractData=function G(K){var J=d(K);
if(J.data(x.obj)){return{val:J.data(x.val)||"",obj:J.data(x.obj)||null}
}return null
};
i.mixin(I.prototype,k,{_overwrite:function m(K,J){J=J||[];
if(J.length){this._renderSuggestions(K,J)
}else{if(this.async&&this.templates.pending){this._renderPending(K)
}else{if(!this.async&&this.templates.notFound){this._renderNotFound(K)
}else{this._empty()
}}}this.trigger("rendered",this.name,J,false)
},_append:function E(K,J){J=J||[];
if(J.length&&this.$lastSuggestion.length){this._appendSuggestions(K,J)
}else{if(J.length){this._renderSuggestions(K,J)
}else{if(!this.$lastSuggestion.length&&this.templates.notFound){this._renderNotFound(K)
}}}this.trigger("rendered",this.name,J,true)
},_renderSuggestions:function y(K,J){var L;
L=this._getSuggestionsFragment(K,J);
this.$lastSuggestion=L.children().last();
this.$el.html(L).prepend(this._getHeader(K,J)).append(this._getFooter(K,J))
},_appendSuggestions:function n(K,J){var M,L;
M=this._getSuggestionsFragment(K,J);
L=M.children().last();
this.$lastSuggestion.after(M);
this.$lastSuggestion=L
},_renderPending:function s(K){var J=this.templates.pending;
this._resetLastSuggestion();
J&&this.$el.html(J({query:K,dataset:this.name}))
},_renderNotFound:function D(K){var J=this.templates.notFound;
this._resetLastSuggestion();
J&&this.$el.html(J({query:K,dataset:this.name}))
},_empty:function t(){this.$el.empty();
this._resetLastSuggestion()
},_getSuggestionsFragment:function l(N,J){var L=this,K;
K=document.createDocumentFragment();
i.each(J,function M(O){var Q,P;
P=L._injectQuery(N,O);
Q=d(L.templates.suggestion(P)).data(x.obj,O).data(x.val,L.displayFn(O)).addClass(L.classes.suggestion+" "+L.classes.selectable);
K.appendChild(Q[0])
});
this.highlight&&b({className:this.classes.highlight,node:K,pattern:N});
return d(K)
},_getFooter:function v(K,J){return this.templates.footer?this.templates.footer({query:K,suggestions:J,dataset:this.name}):null
},_getHeader:function C(K,J){return this.templates.header?this.templates.header({query:K,suggestions:J,dataset:this.name}):null
},_resetLastSuggestion:function u(){this.$lastSuggestion=d()
},_injectQuery:function H(J,K){return i.isObject(K)?i.mixin({_query:J},K):K
},update:function r(P){var O=this,K=false,J=false,Q=0;
this.cancel();
this.cancel=function N(){K=true;
O.cancel=d.noop;
O.async&&O.trigger("asyncCanceled",P)
};
this.source(P,M,L);
!J&&M([]);
function M(R){if(J){return
}J=true;
R=(R||[]).slice(0,O.limit);
Q=R.length;
O._overwrite(P,R);
if(Q<O.limit&&O.async){O.trigger("asyncRequested",P)
}}function L(R){R=R||[];
if(!K&&Q<O.limit){O.cancel=d.noop;
Q+=R.length;
O._append(P,R.slice(0,O.limit-Q));
O.async&&O.trigger("asyncReceived",P)
}}},cancel:d.noop,clear:function B(){this._empty();
this.cancel();
this.trigger("cleared")
},isEmpty:function w(){return this.$el.is(":empty")
},destroy:function F(){this.$el=d("<div>")
}});
return I;
function z(J){J=J||i.stringify;
return i.isFunction(J)?J:K;
function K(L){return L[J]
}}function p(K,L){return{notFound:K.notFound&&i.templatify(K.notFound),pending:K.pending&&i.templatify(K.pending),header:K.header&&i.templatify(K.header),footer:K.footer&&i.templatify(K.footer),suggestion:K.suggestion||J};
function J(M){return d("<div>").text(L(M))
}}function o(J){return/^[_a-zA-Z0-9-]+$/.test(J)
}}();
var e=function(){function n(K,H){var I=this;
K=K||{};
if(!K.node){d.error("node is required")
}H.mixin(this);
this.$node=d(K.node);
this.query=null;
this.datasets=i.map(K.datasets,J);
function J(M){var L=I.$node.find(M.node).first();
M.node=L.length?L:d("<div>").appendTo(I.$node);
return new a(M,H)
}}i.mixin(n.prototype,k,{_onSelectableClick:function A(H){this.trigger("selectableClicked",d(H.currentTarget))
},_onRendered:function m(J,K,H,I){this.$node.toggleClass(this.classes.empty,this._allDatasetsEmpty());
this.trigger("datasetRendered",K,H,I)
},_onCleared:function C(){this.$node.toggleClass(this.classes.empty,this._allDatasetsEmpty());
this.trigger("datasetCleared")
},_propagate:function y(){this.trigger.apply(this,arguments)
},_allDatasetsEmpty:function o(){return i.every(this.datasets,H);
function H(I){return I.isEmpty()
}},_getSelectables:function D(){return this.$node.find(this.selectors.selectable)
},_removeCursor:function v(){var H=this.getActiveSelectable();
H&&H.removeClass(this.classes.cursor)
},_ensureVisible:function B(K){var H,J,I,L;
H=K.position().top;
J=H+K.outerHeight(true);
I=this.$node.scrollTop();
L=this.$node.height()+parseInt(this.$node.css("paddingTop"),10)+parseInt(this.$node.css("paddingBottom"),10);
if(H<0){this.$node.scrollTop(I+H)
}else{if(L<J){this.$node.scrollTop(I+(J-L))
}}},bind:function(){var I=this,H;
H=i.bind(this._onSelectableClick,this);
this.$node.on("click.tt",this.selectors.selectable,H);
i.each(this.datasets,function(J){J.onSync("asyncRequested",I._propagate,I).onSync("asyncCanceled",I._propagate,I).onSync("asyncReceived",I._propagate,I).onSync("rendered",I._onRendered,I).onSync("cleared",I._onCleared,I)
});
return this
},isOpen:function z(){return this.$node.hasClass(this.classes.open)
},open:function w(){this.$node.addClass(this.classes.open)
},close:function x(){this.$node.removeClass(this.classes.open);
this._removeCursor()
},setLanguageDirection:function G(H){this.$node.attr("dir",H)
},selectableRelativeToCursor:function l(L){var J,I,K,H;
I=this.getActiveSelectable();
J=this._getSelectables();
K=I?J.index(I):-1;
H=K+L;
H=(H+1)%(J.length+1)-1;
H=H<-1?J.length-1:H;
return H===-1?null:J.eq(H)
},setCursor:function F(H){this._removeCursor();
if(H=H&&H.first()){H.addClass(this.classes.cursor);
this._ensureVisible(H)
}},getSelectableData:function s(H){return H&&H.length?a.extractData(H):null
},getActiveSelectable:function r(){var H=this._getSelectables().filter(this.selectors.cursor).first();
return H.length?H:null
},getTopSelectable:function u(){var H=this._getSelectables().first();
return H.length?H:null
},update:function p(I){var H=I!==this.query;
if(H){this.query=I;
i.each(this.datasets,J)
}return H;
function J(K){K.update(I)
}},empty:function t(){i.each(this.datasets,H);
this.query=null;
this.$node.addClass(this.classes.empty);
function H(I){I.clear()
}},destroy:function E(){this.$node.off(".tt");
this.$node=d("<div>");
i.each(this.datasets,H);
function H(I){I.destroy()
}}});
return n
}();
var c=function(){var v=e.prototype;
function o(){e.apply(this,[].slice.call(arguments,0))
}i.mixin(o.prototype,e.prototype,{open:function p(){!this._allDatasetsEmpty()&&this._show();
return v.open.apply(this,[].slice.call(arguments,0))
},close:function u(){this._hide();
return v.close.apply(this,[].slice.call(arguments,0))
},_onRendered:function n(){if(this._allDatasetsEmpty()){this._hide()
}else{this.isOpen()&&this._show()
}return v._onRendered.apply(this,[].slice.call(arguments,0))
},_onCleared:function l(){if(this._allDatasetsEmpty()){this._hide()
}else{this.isOpen()&&this._show()
}return v._onCleared.apply(this,[].slice.call(arguments,0))
},setLanguageDirection:function m(s){this.$node.css(s==="ltr"?this.css.ltr:this.css.rtl);
return v.setLanguageDirection.apply(this,[].slice.call(arguments,0))
},_hide:function r(){this.$node.hide()
},_show:function t(){this.$node.css("display","block")
}});
return o
}();
var h=function(){function D(Z,aa){var ai,ad,ac,af,ae,ah,ak,ag,al,aj,ab;
Z=Z||{};
if(!Z.input){d.error("missing input")
}if(!Z.menu){d.error("missing menu")
}if(!Z.eventBus){d.error("missing event bus")
}aa.mixin(this);
this.eventBus=Z.eventBus;
this.minLength=i.isNumber(Z.minLength)?Z.minLength:1;
this.input=Z.input;
this.menu=Z.menu;
this.enabled=true;
this.active=false;
this.input.hasFocus()&&this.activate();
this.dir=this.input.getLangDir();
this._hacks();
this.menu.bind().onSync("selectableClicked",this._onSelectableClicked,this).onSync("asyncRequested",this._onAsyncRequested,this).onSync("asyncCanceled",this._onAsyncCanceled,this).onSync("asyncReceived",this._onAsyncReceived,this).onSync("datasetRendered",this._onDatasetRendered,this).onSync("datasetCleared",this._onDatasetCleared,this);
ai=U(this,"activate","open","_onFocused");
ad=U(this,"deactivate","_onBlurred");
ac=U(this,"isActive","isOpen","_onEnterKeyed");
af=U(this,"isActive","isOpen","_onTabKeyed");
ae=U(this,"isActive","_onEscKeyed");
ah=U(this,"isActive","open","_onUpKeyed");
ak=U(this,"isActive","open","_onDownKeyed");
ag=U(this,"isActive","isOpen","_onLeftKeyed");
al=U(this,"isActive","isOpen","_onRightKeyed");
aj=U(this,"_openIfActive","_onQueryChanged");
ab=U(this,"_openIfActive","_onWhitespaceChanged");
this.input.bind().onSync("focused",ai,this).onSync("blurred",ad,this).onSync("enterKeyed",ac,this).onSync("tabKeyed",af,this).onSync("escKeyed",ae,this).onSync("upKeyed",ah,this).onSync("downKeyed",ak,this).onSync("leftKeyed",ag,this).onSync("rightKeyed",al,this).onSync("queryChanged",aj,this).onSync("whitespaceChanged",ab,this).onSync("langDirChanged",this._onLangDirChanged,this)
}i.mixin(D.prototype,{_hacks:function L(){var aa,Z;
aa=this.input.$input||d("<div>");
Z=this.menu.$node||d("<div>");
aa.on("blur.tt",function(ac){var ae,ad,ab;
ae=document.activeElement;
ad=Z.is(ae);
ab=Z.has(ae).length>0;
if(i.isMsie()&&(ad||ab)){ac.preventDefault();
ac.stopImmediatePropagation();
i.defer(function(){aa.focus()
})
}});
Z.on("mousedown.tt",function(ab){ab.preventDefault()
})
},_onSelectableClicked:function A(aa,Z){this.select(Z)
},_onDatasetCleared:function w(){this._updateHint()
},_onDatasetRendered:function m(ab,ac,Z,aa){this._updateHint();
this.eventBus.trigger("render",Z,aa,ac)
},_onAsyncRequested:function C(Z,ab,aa){this.eventBus.trigger("asyncrequest",aa,ab)
},_onAsyncCanceled:function H(Z,ab,aa){this.eventBus.trigger("asynccancel",aa,ab)
},_onAsyncReceived:function o(Z,ab,aa){this.eventBus.trigger("asyncreceive",aa,ab)
},_onFocused:function W(){this._minLengthMet()&&this.menu.update(this.input.getQuery())
},_onBlurred:function z(){if(this.input.hasQueryChangedSinceLastFocus()){this.eventBus.trigger("change",this.input.getQuery())
}},_onEnterKeyed:function s(ab,aa){var Z;
if(Z=this.menu.getActiveSelectable()){this.select(Z)&&aa.preventDefault()
}},_onTabKeyed:function v(ab,aa){var Z;
if(Z=this.menu.getActiveSelectable()){this.select(Z)&&aa.preventDefault()
}else{if(Z=this.menu.getTopSelectable()){this.autocomplete(Z)&&aa.preventDefault()
}}},_onEscKeyed:function I(){this.close()
},_onUpKeyed:function Q(){this.moveCursor(-1)
},_onDownKeyed:function V(){this.moveCursor(+1)
},_onLeftKeyed:function J(){if(this.dir==="rtl"&&this.input.isCursorAtEnd()){this.autocomplete(this.menu.getTopSelectable())
}},_onRightKeyed:function K(){if(this.dir==="ltr"&&this.input.isCursorAtEnd()){this.autocomplete(this.menu.getTopSelectable())
}},_onQueryChanged:function y(aa,Z){this._minLengthMet(Z)?this.menu.update(Z):this.menu.empty()
},_onWhitespaceChanged:function Y(){this._updateHint()
},_onLangDirChanged:function T(aa,Z){if(this.dir!==Z){this.dir=Z;
this.menu.setLanguageDirection(Z)
}},_openIfActive:function S(){this.isActive()&&this.open()
},_minLengthMet:function X(Z){Z=i.isString(Z)?Z:this.input.getQuery()||"";
return Z.length>=this.minLength
},_updateHint:function F(){var aa,ae,af,ad,ac,Z,ab;
aa=this.menu.getTopSelectable();
ae=this.menu.getSelectableData(aa);
af=this.input.getInputValue();
if(ae&&!i.isBlankString(af)&&!this.input.hasOverflow()){ad=g.normalizeQuery(af);
ac=i.escapeRegExChars(ad);
Z=new RegExp("^(?:"+ac+")(.+$)","i");
ab=Z.exec(ae.val);
ab&&this.input.setHint(af+ab[1])
}else{this.input.clearHint()
}},isEnabled:function P(){return this.enabled
},enable:function u(){this.enabled=true
},disable:function t(){this.enabled=false
},isActive:function R(){return this.active
},activate:function x(){if(this.isActive()){return true
}else{if(!this.isEnabled()||this.eventBus.before("active")){return false
}else{this.active=true;
this.eventBus.trigger("active");
return true
}}},deactivate:function p(){if(!this.isActive()){return true
}else{if(this.eventBus.before("idle")){return false
}else{this.active=false;
this.close();
this.eventBus.trigger("idle");
return true
}}},isOpen:function n(){return this.menu.isOpen()
},open:function E(){if(!this.isOpen()&&!this.eventBus.before("open")){this.menu.open();
this._updateHint();
this.eventBus.trigger("open")
}return this.isOpen()
},close:function M(){if(this.isOpen()&&!this.eventBus.before("close")){this.menu.close();
this.input.clearHint();
this.input.resetInputValue();
this.eventBus.trigger("close")
}return !this.isOpen()
},setVal:function G(Z){this.input.setQuery(i.toStr(Z))
},getVal:function B(){return this.input.getQuery()
},select:function O(Z){var aa=this.menu.getSelectableData(Z);
if(aa&&!this.eventBus.before("select",aa.obj)){this.input.setQuery(aa.val,true);
this.eventBus.trigger("select",aa.obj);
this.close();
return true
}return false
},autocomplete:function r(Z){var ab,aa,ac;
ab=this.input.getQuery();
aa=this.menu.getSelectableData(Z);
ac=aa&&ab!==aa.val;
if(ac&&!this.eventBus.before("autocomplete",aa.obj)){this.input.setQuery(aa.val);
this.eventBus.trigger("autocomplete",aa.obj);
return true
}return false
},moveCursor:function l(ae){var ac,Z,ab,ad,aa;
ac=this.input.getQuery();
Z=this.menu.selectableRelativeToCursor(ae);
ab=this.menu.getSelectableData(Z);
ad=ab?ab.obj:null;
aa=this._minLengthMet()&&this.menu.update(ac);
if(!aa&&!this.eventBus.before("cursorchange",ad)){this.menu.setCursor(Z);
if(ab){this.input.setInputValue(ab.val)
}else{this.input.resetInputValue();
this._updateHint()
}this.eventBus.trigger("cursorchange",ad);
return true
}return false
},destroy:function N(){this.input.destroy();
this.menu.destroy()
}});
return D;
function U(Z){var aa=[].slice.call(arguments,1);
return function(){var ab=[].slice.call(arguments);
i.each(aa,function(ac){return Z[ac].apply(Z,ab)
})
}
}}();
(function(){var l,y,E;
l=d.fn.typeahead;
y={www:"tt-www",attrs:"tt-attrs",typeahead:"tt-typeahead"};
E={initialize:function m(O,N){var M;
N=i.isArray(N)?N:[].slice.call(arguments,1);
O=O||{};
M=j(O.classNames);
return this.each(L);
function L(){var W,V,T,P,S,Z,Y,X,Q,U,R;
i.each(N,function(aa){aa.highlight=!!O.highlight
});
W=d(this);
V=d(M.html.wrapper);
T=H(O.hint);
P=H(O.menu);
S=O.hint!==false&&!T;
Z=O.menu!==false&&!P;
S&&(T=s(W,M));
Z&&(P=d(M.html.menu).css(M.css.menu));
T&&T.val("");
W=C(W,M);
if(S||Z){V.css(M.css.wrapper);
W.css(S?M.css.input:M.css.inputWithNoHint);
W.wrap(V).parent().prepend(S?T:null).append(Z?P:null)
}R=Z?c:e;
Y=new f({el:W});
X=new g({hint:T,input:W},M);
Q=new R({node:P,datasets:N},M);
U=new h({input:X,menu:Q,eventBus:Y,minLength:O.minLength},M);
W.data(y.www,M);
W.data(y.typeahead,U)
}},isEnabled:function G(){var L;
t(this.first(),function(M){L=M.isEnabled()
});
return L
},enable:function w(){t(this,function(L){L.enable()
});
return this
},disable:function p(){t(this,function(L){L.disable()
});
return this
},isActive:function D(){var L;
t(this.first(),function(M){L=M.isActive()
});
return L
},activate:function r(){t(this,function(L){L.activate()
});
return this
},deactivate:function o(){t(this,function(L){L.deactivate()
});
return this
},isOpen:function A(){var L;
t(this.first(),function(M){L=M.isOpen()
});
return L
},open:function x(){t(this,function(L){L.open()
});
return this
},close:function z(){t(this,function(L){L.close()
});
return this
},select:function B(M){var N=false,L=d(M);
t(this.first(),function(O){N=O.select(L)
});
return N
},autocomplete:function I(M){var N=false,L=d(M);
t(this.first(),function(O){N=O.autocomplete(L)
});
return N
},moveCursor:function u(M){var L=false;
t(this.first(),function(N){L=N.moveCursor(M)
});
return L
},val:function K(L){var M;
if(!arguments.length){t(this.first(),function(N){M=N.getVal()
});
return M
}else{t(this,function(N){N.setVal(L)
});
return this
}},destroy:function F(){t(this,function(L,M){n(M);
L.destroy()
});
return this
}};
d.fn.typeahead=function(L){if(E[L]){return E[L].apply(this,[].slice.call(arguments,1))
}else{return E.initialize.apply(this,arguments)
}};
d.fn.typeahead.noConflict=function J(){d.fn.typeahead=l;
return this
};
function t(M,L){M.each(function(){var O=d(this),N;
(N=O.data(y.typeahead))&&L(N,O)
})
}function s(M,L){return M.clone().addClass(L.classes.hint).removeData().css(L.css.hint).css(v(M)).prop("readonly",true).removeAttr("id name placeholder required").attr({autocomplete:"off",spellcheck:"false",tabindex:-1})
}function C(N,L){N.data(y.attrs,{dir:N.attr("dir"),autocomplete:N.attr("autocomplete"),spellcheck:N.attr("spellcheck"),style:N.attr("style")});
N.addClass(L.classes.input).attr({autocomplete:"off",spellcheck:false});
try{!N.attr("dir")&&N.attr("dir","auto")
}catch(M){}return N
}function v(L){return{backgroundAttachment:L.css("background-attachment"),backgroundClip:L.css("background-clip"),backgroundColor:L.css("background-color"),backgroundImage:L.css("background-image"),backgroundOrigin:L.css("background-origin"),backgroundPosition:L.css("background-position"),backgroundRepeat:L.css("background-repeat"),backgroundSize:L.css("background-size")}
}function n(N){var L,M;
L=N.data(y.www);
M=N.parent().filter(L.selectors.wrapper);
i.each(N.data(y.attrs),function(P,O){i.isUndefined(P)?N.removeAttr(O):N.attr(O,P)
});
N.removeData(y.typeahead).removeData(y.www).removeData(y.attr).removeClass(L.classes.input);
if(M.length){N.detach().insertAfter(M);
M.remove()
}}function H(N){var M,L;
M=i.isJQuery(N)||i.isElement(N);
L=M?d(N).first():[];
return L.length?L:null
}})()
});
var globalSearchText;
var mostRecentSearch=localStorage.getItem("mostRecentSearch");
window.resourcePath=$("#primaryNavResourcePath").attr("value");
var primaryselector="primarynavsearch";
var q;
var instituteIdentifier,siteIdentifier;
var searchUrl;
var urlParam;
$(document).ready(function(){globalSearchText=$("#global-search-text").attr("value");
$("#global-search-text").on("keypress",function(f){if($("#search-nav .tt-menu .recent-wp").length<=0){mostRecentSearch=localStorage.getItem("mostRecentSearch");
if(mostRecentSearch!=undefined){var a=mostRecentSearch.split(",");
var d=$("#search-nav .tt-menu");
var c=$('<div class="recent-wp"><h6>Your Recent Search</h6></div>').appendTo(d);
var b=0;
$.each(a,function(g,h){if(h!=""&&b<=1){var e=$("#searchRedirectionURL").attr("value")+".html?q="+globalSearchText;
c.append($('<p><a href="'+e+'">'+h+"</a></p>"));
b++
}})
}}})
});
function globalSearchAutoSuggestionnnList(){$.ajax({type:"GET",url:resourcePath+"."+primaryselector+"."+globalSearchText+".json",contentType:"application/json; charset=utf-8",dataType:"json",success:function(a){if(a!=null){var b=a.primaryNavSearchModel;
jQuery(function(){var c=new Bloodhound({datumTokenizer:Bloodhound.tokenizers.obj.whitespace("title"),queryTokenizer:Bloodhound.tokenizers.whitespace,local:b});
c.initialize();
$("#search-form .typeahead").typeahead("destroy");
jQuery("#search-form .typeahead").typeahead({minLength:3,limit:5,highlight:true},{name:"title",displayKey:"title",display:"title",source:c.ttAdapter(),templates:{suggestion:function(d){return'<div class="tt-suggestion tt-selectable"><a href="'+d.pagePath+'.html"><p><strong>'+d.title+"</strong></p></a></div>"
}}})
})
}}})
}function globalSearchAutoSuggestionList(){console.log("dbhhd");
console.log(globalSearchText);
var a=$("#global-search-text").val();
console.log(a);
$(function(){var b=3;
$("#global-search-text").on("input",function(){var c=this,d=$(this).val();
console.log("d222bhhd");
console.log(d);
if(d.length>=b){instituteIdentifier=$("#manipalContentWrapper").attr("data-instituteId");
siteIdentifier=$("#manipalContentWrapper").attr("data-siteId");
urlparam="/bin/servlet/autoSuggestfetchSolr?count=10&param="+d+"&siteIdentifier="+siteIdentifier;
if(instituteIdentifier){urlparam=urlparam+"&type=institute&instituteIdentifier="+instituteIdentifier
}else{urlparam=urlparam+"&type=global"
}$.ajax({type:"GET",url:urlparam,success:function(e){var f=e;
jQuery(function(){var g=new Bloodhound({datumTokenizer:Bloodhound.tokenizers.obj.whitespace("title"),queryTokenizer:Bloodhound.tokenizers.whitespace,local:f});
g.initialize();
$("#search-form .typeahead").typeahead("destroy");
jQuery("#search-form .typeahead").typeahead({minLength:3,limit:5,highlight:true},{name:"title",displayKey:"title",display:"title",source:g.ttAdapter(),templates:{suggestion:function(h){return'<div class="tt-suggestion tt-selectable"><a href="'+h.url+'.html"><p><strong>'+h.title+"</strong></p></a></div>"
}}});
$("#global-search-text").focus();
$("#global-search-text").trigger("click")
})
}})
}})
})
}function primarySearchBoxVal(a){globalSearchText=a;
$("#global-search-text").attr("value",a);
searchResultPage()
}function searchResultPage(){if(globalSearchText!=""){$("#iconQueryString").bind("click",function(){globalSearchText=globalSearchText.replace(/\./g," ");
instituteIdentifier=$("#manipalContentWrapper").attr("data-instituteId");
console.log(instituteIdentifier);
if(instituteIdentifier){searchUrl=$("#searchRedirectionURL").attr("value")+".html?q="+globalSearchText+"&instituteId="+instituteIdentifier
}else{searchUrl=$("#searchRedirectionURL").attr("value")+".html?q="+globalSearchText
}console.log(searchUrl);
window.location.href=searchUrl
});
$("#global-search-text").keydown(function(a){searchTerm=$(this).val();
if($(".js-search-desktop .tt-cursor").length>=1){$(this).attr("data-path",$(".js-search-desktop .tt-cursor a").attr("href"))
}if(a.keyCode!==13&&a.keyCode!==37&&a.keyCode!==38&&a.keyCode!==39&&a.keyCode!==40&&a.keyCode!==46&&a.keyCode!==16&&a.keyCode!==18){searchTerm=$(this).val()
}if(searchTerm&&$.trim(searchTerm)){searchTerm=searchTerm.trim();
searchTerm=searchTerm.replace(/\-/g," ");
if(a.keyCode===13&&!(a.metaKey||a.ctrlKey)){a.preventDefault();
if($(this).attr("data-path")!=undefined){window.location.href=$(this).attr("data-path")
}else{$("#iconQueryString").trigger("click")
}}}});
$("#iconQueryStringMob").bind("click",function(){globalSearchText=globalSearchText.replace(/\./g," ");
var a=$("#searchRedirectionURL").attr("value")+".html?q="+globalSearchText;
window.location.href=a
});
$("#global-search-text-mob").keydown(function(a){searchTerm=$(this).val();
if($(".js-search-mobile .tt-cursor").length>=1){$(this).attr("data-path",$(".js-search-mobile .tt-cursor a").attr("href"))
}if(a.keyCode!==13&&a.keyCode!==37&&a.keyCode!==38&&a.keyCode!==39&&a.keyCode!==40&&a.keyCode!==46&&a.keyCode!==16&&a.keyCode!==18){searchTerm=$(this).val()
}if(searchTerm&&$.trim(searchTerm)){searchTerm=searchTerm.trim();
searchTerm=searchTerm.replace(/\-/g," ");
if(a.keyCode===13&&!(a.metaKey||a.ctrlKey)){if($(this).attr("data-path")!=undefined){window.location.href=$(this).attr("data-path")
}else{$("#iconQueryStringMob").trigger("click")
}}}})
}}function recentSearch(a){if(mostRecentSearch!==null){let splitValues=mostRecentSearch.split(",");
let currentValueSearched="";
let mostRecentSearchArray=[];
let isSearchValNotPresent=true;
$.each(splitValues,function(b){mostRecentSearchArray.push(splitValues[b]);
if(splitValues[b]==a){currentValueSearched=splitValues[b];
mostRecentSearchArray.splice(b,1);
isSearchValNotPresent=false
}});
if(!mostRecentSearchArray.includes(a)&&isSearchValNotPresent){mostRecentSearchArray.unshift(a)
}if(currentValueSearched!==""){mostRecentSearchArray.splice(0,0,currentValueSearched)
}if(mostRecentSearchArray.length>10){mostRecentSearchArray.splice(-1,1)
}localStorage.setItem("mostRecentSearch",mostRecentSearchArray)
}else{localStorage.setItem("mostRecentSearch",a)
}}function handlebar(d){var b=$(".tt-suggestion").html();
var c=Handlebars.compile(b);
var a=c(d);
$(".tt-dataset").append(a)
}$(document).ready(function(){$("#myCarousel").carousel({wrap:false});
$(".banner #myCarousel").each(function(){if($(this).find(".carousel-inner").children(".item").length==1){$(this).find(".right").hide();
$(this).find(".left").hide()
}});
var a=function(){var b;
b=$(".carousel");
if($(".carousel .carousel-inner .item:first").hasClass("active")){b.children(".left").addClass("disabled");
b.children(".right").removeClass("disabled")
}else{if($(".carousel .carousel-inner .item:last").hasClass("active")){b.children(".right").addClass("disabled");
b.children(".left").removeClass("disabled")
}else{b.children(".carousel-control").show()
}}};
a();
$(".carousel").on("slid.bs.carousel","",a);
$(".banner-caption-image").each(function(){if($(this).children().length<=0){$(this).hide()
}})
});
$(document).ready(function(){var a={"$leftNav":".leftnav-custom","$hiddenHref":".hidden-href","$href":"href","$submneu":"leftnav-submenu-custom","$menu":".leftnav-menu-custom","$currentPage":".reserach_areamenu_container"};
var b=$(a.$currentPage).attr("current-page");
$(a.$leftNav).each(function(c){if(b!==undefined){b=b.replace(/ +?/g,"");
if($($(a.$leftNav)[c]).attr("data-name").replace(/ +?/g,"")===b){$(".list-group-item").removeClass("activeLink");
$($(a.$leftNav)[c]).addClass("activeLink");
$($(a.$leftNav)[c]).parent().prev(a.$menu).click();
$($(a.$leftNav)[c]).closest(".submenulist").prev(".list-group-item").find(".arrowicon_style").removeClass("fa-angle-down").addClass("fa-angle-up")
}}});
$(a.$leftNav).on("click",function(){var c=($(this).next(a.$hiddenHref).attr(a.$href)==undefined?"":$(this).next(a.$hiddenHref).attr(a.$href));
if(c!=""){window.location.href=c
}})
});
$(document).ready(function(){$("#myBtn").click(function(){$(".button_style").toggleClass("button_position");
$(".button_style").find(".arrowicon_style").toggleClass("fa-angle-double-right fa-angle-double-left");
$(".my_container").toggle()
});
$("#left-menu .dropdownleftnavlist").click(function(){$(this).find(".arrowicon_style").toggleClass("fa-angle-up fa-angle-down")
});
$(".leftarrow").addClass("disabledclass")
});
$(document).ready(function(){$(".research-overview-container .column-control").first().addClass("research-area-padding");
if($(window).width()>=768){$(".col-sm-3.col-3-3-3-3-4 .call-to-action.section").first().addClass("button-colm-top")
}if($(window).width()<=768){if($(".secondary-navigation.transparent").length>0){$(".primary-nav-container .loginLinks").css("color","white")
}}$(window).resize(function(){if($(window).width()<=768){if($(".secondary-navigation.transparent").length>0){$(".primary-nav-container .loginLinks").css("color","white")
}$(".col-sm-3.col-3-3-3-3-4 .call-to-action.section").first().removeClass("button-colm-top")
}else{$(".col-sm-3.col-3-3-3-3-4 .call-to-action.section").first().addClass("button-colm-top")
}});
$(".secondaryNavUl").click(function(a){if($(".hamburger-button").find(".collapsed").length<=0){$(".primaryNavUl").slideUp()
}});
$(".hamburger-button").click(function(a){$(".primaryNavUl").slideDown()
});
$(".footer-menu-dropdown").on("click",function(a){$(this).parents("li").siblings().find("ul").slideUp()
})
});
$(window).bind("load",function(){setTimeout(function(){$(".social-post-wrapper .fb-page.fb_iframe_widget").addClass("custom-fb-page")
},1000)
});
var resource=$(".resourcePath").data("path");
var $firstli=$(".campus-360-list li:first");
$firstli.addClass("campus-list-li");
$firstli.find("a").addClass("campus-list-a");
$firstli.find("i").addClass("campus-list-icon ");
setTimeout(function(){$(".campus-360-list li:nth-child(1)").click()
},0);
setTimeout(function(){$("#js-accordion li div").click()
},0);
$(".campus-360-list li").on("click",function(b){$(".campus-360-list li").removeClass("campus-list-li ");
$(".campus-360-list a").removeClass("campus-list-a ");
$(".campus-360-list .arrowicon_style").removeClass("campus-list-icon ");
$(this).addClass("campus-list-li ");
$(this).find("a").addClass("campus-list-a ");
$(this).find("i").addClass("campus-list-icon ");
var a=$(this).data("id");
showAdress(a,resource)
});
$(".submenu  li").on("click",function(c){var a=$(this).data("id");
var b=$(this).data("mapname");
$("#js-accordion .js-selected-item").text("");
$("#js-accordion .js-selected-item").text(b);
showAdress(a,resource);
$(this).closest("#js-accordion").children("li:first-child").removeClass("open");
$(this).closest(".js-map-list-wp").slideUp()
});
$("#js-accordion li div").on("click",function(b){var a=$(this).data("id");
showAdress(a,resource)
});
function showAdress(a,b){deleteMarkers(map);
$.ajax({type:"GET",url:b+"."+a+".json",contentType:"application/json; charset=utf-8",dataType:"json",success:function(d){var c=1;
$.each(d,function(e,g){var h=parseFloat(g.latitude);
var i=parseFloat(g.longitude);
addMarker(g);
var f=new google.maps.InfoWindow({content:g.address});
(function(j,k){j.addListener("click",function(l){map.panTo(j.getPosition());
f.open(map,j);
window.open("https://www.google.com/maps/search/?api=1&query="+h+","+i,"_blank")
})
})(marker,c);
map.setCenter({lat:h,lng:i});
c++
})
},error:function(c,e,d){alert("error")
}})
}var map;
var markers=[];
function initMap(){map=new google.maps.Map(document.getElementById("map"),{zoom:13,center:new google.maps.LatLng(30.2734235,77.9976334),mapTypeId:google.maps.MapTypeId.ROADMAP})
}function addMarker(a){var b=parseFloat(a.latitude);
var c=parseFloat(a.longitude);
marker=new google.maps.Marker({position:new google.maps.LatLng(b,c),title:a.address,map:map});
markers.push(marker)
}function deleteMarkers(b){if(markers.length>0){for(var a=0;
a<markers.length;
a++){markers[a].setMap(null)
}}}$(function(){var b=function(e,c){this.el=e||{};
this.multiple=c||false;
var d=this.el.find(".link");
d.on("click",{el:this.el,multiple:this.multiple},this.dropdown)
};
b.prototype.dropdown=function(d){var c=d.data.el;
$this=$(this),$next=$this.next();
$next.slideToggle();
$this.parent().toggleClass("open");
if(!d.data.multiple){c.find(".submenu").not($next).slideUp().parent().removeClass("open")
}};
var a=new b($("#js-accordion"),false)
});
$(document).ready(function(){var a=new Date().toDateString();
var b=$(".lastDateToApply").text();
if(new Date(a).getTime()>new Date(b).getTime()){$(".showApplyNowLink").hide();
$(".disableApplyNowLink").show()
}else{$(".showApplyNowLink").show();
$(".disableApplyNowLink").hide()
}var c=$(".internationallastDateToApply").text();
if(new Date(a).getTime()>new Date(c).getTime()){$(".intShowApplyNowLink").hide();
$(".intDisableApplyNowLink").show()
}else{$(".intShowApplyNowLink").show();
$(".intDisableApplyNowLink").hide()
}});
$(document).ready(function(){var b=$(".back-top-pagn");
$(window).scroll(function(){var c=$(this).scrollTop();
if(c>400){$(b).css("opacity","1")
}else{$(b).css("opacity","0")
}});
var a=$(".arrow-box");
$(a).click(function(){$("html, body").animate({scrollTop:0},800);
return false
});
$(".js-dep-accordion-wp").change(function(){if($(".js-dep-accordion-wp").hasClass("accordion-open")){$(window).scrollTop($(".js-dep-accordion-wp.accordion-open").offset().top-100)
}})
});
var levelCFTagPath;
var streamCFTagPath;
$(function(){$("#coursefinderQueryString").bind("click",function(){var a=$("#searchCFResPagePath").attr("value")+"."+levelCFTagPath+"."+streamCFTagPath+".html";
window.location.href=a
})
});
function levelClickCF(b){var c=b.text();
var a=b.find("input");
$(".courseLevInput").text(c);
levelCFTagPath=a.attr("value")
}function streamClickCF(b){var a=b.text();
var c=b.find("input");
$(".courseStreamInput").text(a);
streamCFTagPath=c.attr("value")
}$(document).ready(function(){if($(".main .header-i-parsys").length>=0){$(".main .header-i-parsys").remove()
}if($(".main .footer-i-parsys").length>=0){$(".main .footer-i-parsys").remove()
}$(".js-scroll-logo").hide();
$(".js-desktop-logo").hide();
$(".primaryTransLogo").append($(".manipal_logo").find(".js-desktop-logo"));
$(".primaryTransLogo .js-desktop-logo").show();
$(".primaryColoredLogo").append($(".manipal_logo").find(".js-scroll-logo"));
$(".primaryColoredLogo .js-scroll-logo").show();
$(".header .primaryTransLogo .js-desktop-logo").each(function(a){if(a>=1){$(this).hide()
}});
$(".header_parsys .primaryColoredLogo .js-scroll-logo").each(function(a){if(a>=1){$(this).hide()
}});
$(".main .primaryColoredLogo .js-scroll-logo").each(function(a){if(a>=1){$(this).hide()
}});
if($(".js-departments-faculty-comp").html()!=undefined){setTimeout(function(){if(document.referrer){var e=document.referrer.split("/");
var f=e[e.length-1];
var a=$(".title-link");
for(var b=0;
b<a.length;
b++){var c=$(a[b]).prop("href").split("/"),d=c[c.length-1];
if(d==f){$(a[b]).closest(".js-dep-accordion-wp").addClass("accordion-open");
$(window).scrollTop($(".js-dep-accordion-wp.accordion-open").offset().top-100)
}}}},1000)
}});