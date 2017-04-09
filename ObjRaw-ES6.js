const call=callable=(function(e){const o=e.prototype;return o.bind.bind(o.call)})(Function)
//
const RawObject=call(Object.create,null,null);
//
const a=RawObject();
//
const b=RawObject({
	foo:{
		writable:true,
		configurable:true,
		value:'hello'
	}
});
//
const dir=call(console.dir,console);
dir(a);
dir(b);//created with descriptor
