let data = ["LetsUpgrade","JavaScript","Assignment","Attendance"];

let flag1 = 0;
for (let i = 0; i < data.length; i++) {
	if(data[i]=='JavaScript'){
		flag1= 1;
		break;
	}
}
if (flag1) {
	console.log("Element Found")
}
else{
	console.log("Element not found")
}