let obj1 = [
	{
		name : "ABC",
		age : 13,
		city : "Rajkot",
		salary : 10000,
	},
	{
		name : "DEF",
		age : 18,
		city : "Ahmedabad",
		salary : 14000,
	},
	{
		name : "MNO",
		age : 26,
		city : "Chennai",
		salary : 22000,
	},
	{
		name : "XYZ",
		age : 33,
		city : "Pune",
		salary : 39000,
	},
	{
		name : "PQR",
		age : 23,
		city : "Indore",
		salary : 19000,
	},
];

function disp(obj_array){
	let tabledata = "";
	obj_array.forEach(function (obj,index) {
		
		let currrow = `<tr><td>${obj.name}</td>
		<td>${obj.age}</td>
		<td>${obj.city}</td>
		<td>${obj.salary}</td>
		<td><center><button type='submit' onclick='dlt(${index})'>X</button></center></td></tr>`;
		
		tabledata += currrow;
	});

	document.getElementById("table_body").innerHTML = tabledata;
};

disp(obj1);

function srch(){
	let s_value = document.getElementById("search_in").value;

	let data=obj1.filter(function(obj){
		return ((obj.name.indexOf(s_value)!=-1) || (obj.city.indexOf(s_value)!=-1));
	});

	disp(data);

};

function dlt(index){
	obj1.splice(index,1);
	disp(obj1);
};