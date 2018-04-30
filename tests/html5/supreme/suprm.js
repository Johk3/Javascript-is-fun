const supreme = require("supreme-api");
let fs = require("fs");

supreme.getItems('all', (items, err)=>{
	if(err){
		console.log(err);
		return err;
	}
	console.log(items)
});