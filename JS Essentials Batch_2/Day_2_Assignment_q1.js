let str = "string";
let flag = 0;
for (let i = 0; i < str.length; i++) {
	if(str[i]=='i'){
		flag= 1;
		break;
	}
}
if (flag) {
	console.log("Character Found")
}
else{
	console.log("Character not Found")
}
