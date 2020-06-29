(function(c,d){c.Granite=c.Granite||{};
c.Granite.HTTP=c.Granite.HTTP||{};
var b=null;
function a(){var j=/^(?:http|https):\/\/[^\/]+(\/.*)\/(?:etc\.clientlibs|etc(\/.*)*\/clientlibs|libs(\/.*)*\/clientlibs|apps(\/.*)*\/clientlibs|etc\/designs).*\.js(\?.*)?$/;
try{if(c.CQURLInfo){b=CQURLInfo.contextPath||""
}else{var g=document.getElementsByTagName("script");
for(var h=0;
h<g.length;
h++){var f=j.exec(g[h].src);
if(f){b=f[1];
return
}}b=""
}}catch(k){}}c.Granite.HTTP.externalize=c.Granite.HTTP.externalize||function(f){if(b===null){a()
}try{if(f.indexOf("/")===0&&b&&f.indexOf(b+"/")!==0){f=b+f
}}catch(g){}return f
}
})(this);
(function(d){d.Granite=d.Granite||{};
if(d.Granite.csrf){return
}d.Granite.csrf={initialised:false,refreshToken:n,_clearToken:m};
function b(){this._handler=[]
}b.prototype={then:function(t,s){this._handler.push({resolve:t,reject:s})
},resolve:function(){this._execute("resolve",arguments)
},reject:function(){this._execute("reject",arguments)
},_execute:function(s,t){if(this._handler===null){throw new Error("Promise already completed.")
}for(var u=0,v=this._handler.length;
u<v;
u++){this._handler[u][s].apply(d,t)
}this.then=function(x,w){(s==="resolve"?x:w).apply(d,t)
};
this._handler=null
}};
function f(t){var u=document.location.host;
var w=document.location.protocol;
var v="//"+u;
var s=w+v;
return(t===s||t.slice(0,s.length+1)===s+"/")||(t===v||t.slice(0,v.length+1)===v+"/")||!(/^(\/\/|http:|https:).*/.test(t))
}var p=":cq_csrf_token",h="CSRF-Token",l=Granite.HTTP.externalize("/libs/granite/csrf/token.json");
var k;
var r;
function o(s){if(d.console){console.warn("CSRF data not available;The data may be unavailable by design, such as during non-authenticated requests: "+s)
}}function n(){var s=new b();
k=s;
var t=new XMLHttpRequest();
t.onreadystatechange=function(){if(t.readyState===4){try{var v=JSON.parse(t.responseText);
r=v.token;
s.resolve(r)
}catch(u){o(u);
s.reject(t.responseText)
}}};
t.open("GET",l,true);
t.send();
return s
}function e(){var t=new XMLHttpRequest();
t.open("GET",l,false);
t.send();
try{return r=JSON.parse(t.responseText).token
}catch(s){o(s)
}}function m(){r=undefined;
n()
}function a(t){var u=t.getAttribute("action");
if(t.method.toUpperCase()==="GET"||(u&&!f(u))){return
}if(!r){e()
}if(!r){return
}var s=t.querySelector('input[name="'+p+'"]');
if(!s){s=document.createElement("input");
s.setAttribute("type","hidden");
s.setAttribute("name",p);
t.appendChild(s)
}s.setAttribute("value",r)
}function j(s){var t=function(v){var u=v.target;
if(u.nodeName==="FORM"){a(u)
}};
if(s.addEventListener){s.addEventListener("submit",t,true)
}else{if(s.attachEvent){s.attachEvent("submit",t)
}}}n();
j(document);
var i=XMLHttpRequest.prototype.open;
XMLHttpRequest.prototype.open=function(u,s,t){if(f(s)&&u.toLowerCase()!=="get"){this._csrf=true;
this._async=t
}return i.apply(this,arguments)
};
var c=XMLHttpRequest.prototype.send;
XMLHttpRequest.prototype.send=function(){if(!this._csrf){c.apply(this,arguments);
return
}if(r){this.setRequestHeader(h,r);
c.apply(this,arguments);
return
}if(this._async===false){e();
if(r){this.setRequestHeader(h,r)
}c.apply(this,arguments);
return
}var s=this;
var t=Array.prototype.slice.call(arguments);
k.then(function(u){s.setRequestHeader(h,u);
c.apply(s,t)
},function(){c.apply(s,t)
})
};
var g=HTMLFormElement.prototype.submit;
HTMLFormElement.prototype.submit=function(){a(this);
return g.apply(this,arguments)
};
if(d.Node){var q=Node.prototype.appendChild;
Node.prototype.appendChild=function(){var s=q.apply(this,arguments);
if(s.nodeName==="IFRAME"){try{if(s.contentWindow&&!s._csrf){s._csrf=true;
j(s.contentWindow.document)
}}catch(t){if(s.src&&s.src.length&&f(s.src)){if(d.console){console.error("Unable to attach CSRF token to an iframe element on the same origin")
}}}}return s
}
}setInterval(function(){n()
},300000)
})(window);