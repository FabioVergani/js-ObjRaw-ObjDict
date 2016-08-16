const w=window,O=w.Object, Create=O.create, Seal=O.seal;//, Freeze=O.freeze;
var e=w.Function.prototype;
const BindCall=e.bind.bind(e.call);
const aRawObj=BindCall(Create,null,null);
//
const aRawObjProps=(function(u){
 const r=aRawObj,c=Create;
 var e=r(),p=true,o={value:p,writable:p,enumerable:p,configurable:false};
 for(p in o){e[p]=c(o);};
 e.value.value=u;//undefined
 const k=BindCall(c,null,null,Seal(e));
 e=p=o=null;
 return function(a){
	var e,p,o=a,f=r,b=f();
	for(p in o){e=o[p];x=b[p]=k();for(p in x){if(p in e){x[p]=e[p];};};};
	return f(b);
 };
})();

console.dir(aRawObjProps({a:{value:123,writable:false},b:{value:666}}));
