module.exports = {
	//检索json数组
	index(arr, val, key){
		for(let x in arr){
			if(arr[x][key] == val){
				return x;
			}
		}
	}
};