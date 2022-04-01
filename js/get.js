let get_data_btn = document.getElementById('get_data_btn');
let check_object_code_input = document.getElementById('check_object_code_input');
let check_object_code_btn = document.getElementById('check_object_code_btn');
let get_cancelled_days_input = document.getElementById('get_cancelled_days_input');
let get_cancelled_days_btn = document.getElementById('get_cancelled_days_btn');

let get_base_info = function () {

	const uri = "http://g2-api/api/constants/read.php";
	const xmlhttp = new XMLHttpRequest();
	const fd = new FormData();

	xmlhttp.open("POST", uri, true);

	xmlhttp.onreadystatechange = function () {

		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

			console.log(xmlhttp.responseText);

		}

	};

	fd.append("get_base_info", 1);
	
	xmlhttp.send(fd);

};
get_data_btn.addEventListener("click", get_base_info, false);


let check_object_code = function () {

	const uri = "http://g2-api/api/promo/read_single.php";
	const xmlhttp = new XMLHttpRequest();
	const fd = new FormData();

	xmlhttp.open("POST", uri, true);

	xmlhttp.onreadystatechange = function () {

		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

			console.log(xmlhttp.responseText);

		}

	};



	fd.append("check_object_code", check_object_code_input.value);

	xmlhttp.send(fd);

};

check_object_code_btn.addEventListener("click", check_object_code, false);

let get_cancelled_days = function () {

	const uri = "http://g2-api/api/canceled/read_single.php";
	const xmlhttp = new XMLHttpRequest();
	const fd = new FormData();

	xmlhttp.open("POST", uri, true);

	xmlhttp.onreadystatechange = function () {

		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

			console.log(xmlhttp.responseText);

		}

	};



	fd.append("get_cancelled_days", get_cancelled_days_input.value);

	xmlhttp.send(fd);

};

get_cancelled_days_btn.addEventListener("click", get_cancelled_days, false);