function rowSetter(arr){ //formats the CSV into rows
	var arrArr=[];
	for (var i=0; i<arr.length;i++){
		if(arr[i].length!=0){	//ignore an emtpy array
		arrArr.push(arr[i].split(",")) 
		}
	}
	return arrArr
}
function objMkr(values,keys){ //generates an array of objects from a set of keys and values
	var objArr=[]
	for(var i=0;i<values.length;i++){
		var obj={}
		for(var j=0;j<values[i].length;j++){
			obj[keys[j]]=values[i][j];
		}
		objArr.push(obj);


	}
	return objArr
}function csvParse(csFile){ //puts it all together
	var values=rowSetter(csFile.split('\n'));//sets all keys and values into individual arrays
	var keys=values.shift() //shits the keys to the keys variable and removes the keys from the values array

 return objMkr(values,keys);//arranges the keys and values into an array of objects
}
module.exports.csvParse=csvParse;