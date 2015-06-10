obj=(Function.prototype.call).bind(Object.create,null,null);

console.dir(obj());
console.dir(obj({
	foo:{
		writable:true,
		configurable:true,
		value:'hello'
	}
}));
