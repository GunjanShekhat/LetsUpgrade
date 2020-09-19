window.onload=function(){
	let obj1 = [
		{
			name : "Neeta",
			source : "Pune",
			dest : "Rajkot",
			nmbr : 9999,
			p_cap : 36,
		},
		{
			name : "Eagle",
			source : "Ahmedabad",
			dest : "Mumbai",
			nmbr : 1234,
			p_cap : 56,
		},
		{
			name : "Patel",
			source : "Junagadh",
			dest : "Surat",
			nmbr : 4466,
			p_cap : 72,
		},
	];

	if (localStorage.getItem("obj1")==null) {
		let str_obj1 = JSON.stringify(obj1);
		localStorage.setItem("obj1",str_obj1);
	}
	disp(JSON.parse(localStorage.getItem("obj1")));
};

function disp(obj_array){
	let tabledata = "";
	obj_array.forEach(function (obj,index) {
		 
		let currrow = `<tr><td>${obj.name}</td>
		<td>${obj.source}</td>
		<td>${obj.dest}</td>
		<td>${obj.nmbr}</td>
		<td>${obj.p_cap}</td>`;
		
		tabledata += currrow;
	});

	document.getElementById("table_body").innerHTML = tabledata;
};



function srch(){
	let s_value = document.getElementById("search_in").value;

	let obj2=JSON.parse(localStorage.getItem("obj1"));


	let data=obj2.filter(function(obj){
		return ((obj.source.toUpperCase().indexOf(s_value.toUpperCase())!=-1) || (obj.dest.toUpperCase().indexOf(s_value.toUpperCase())!=-1));
	});

	disp(data);

};


function add_bus(e){
	e.preventDefault();
	let new_bus = {};
	new_bus.name = document.getElementById("nm").value;
	new_bus.source = document.getElementById("srce").value;
	new_bus.dest = document.getElementById("dest").value;
	new_bus.nmbr = document.getElementById("nmbr").value;
	new_bus.p_cap = document.getElementById("p_cap").value;

	// obj1.push(new_bus);

	let obj2=JSON.parse(localStorage.getItem("obj1"));
	obj2.push(new_bus);
	localStorage.setItem("obj1", JSON.stringify(obj2));

	disp(obj2);

	document.getElementById("frm1").reset();
};