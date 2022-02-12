function btnPress(inputId) {
	document.getElementById("calc-flow").innerText +=
		document.getElementById(inputId).innerText;
}

function addButton(inputId) {
	document.getElementById("calc-output").innerText =
		document.getElementById("calc-flow").innerText;
	return parseFloat(document.getElementById("calc-flow").innerText);
}

document.getElementById("ac-btn").addEventListener("click", function () {
	document.getElementById("calc-output").innerText = "";
	document.getElementById("calc-flow").innerText = "";
});
document.getElementById("btn-0").addEventListener("click", function () {
	btnPress("btn-0");
});
document.getElementById("btn-1").addEventListener("click", function () {
	btnPress("btn-1");
});
document.getElementById("btn-2").addEventListener("click", function () {
	btnPress("btn-2");
});
document.getElementById("btn-3").addEventListener("click", function () {
	btnPress("btn-3");
});
document.getElementById("btn-4").addEventListener("click", function () {
	btnPress("btn-4");
});
document.getElementById("btn-5").addEventListener("click", function () {
	btnPress("btn-5");
});
document.getElementById("btn-6").addEventListener("click", function () {
	btnPress("btn-6");
});
document.getElementById("btn-7").addEventListener("click", function () {
	btnPress("btn-7");
});
document.getElementById("btn-8").addEventListener("click", function () {
	btnPress("btn-8");
});
document.getElementById("btn-9").addEventListener("click", function () {
	btnPress("btn-9");
});
document.getElementById("btn-fraction").addEventListener("click", function () {
	let flow = document.getElementById("calc-flow").innerText;
	if (flow[flow.length - 1] != ".") {
		btnPress("btn-fraction");
	}
	if (flow[flow.length - 1] == ".") {
	}
});

//add button
document.getElementById("btn-add").addEventListener("click", function () {
	let flow = document.getElementById("calc-flow").innerText;
	if (
		flow[flow.length - 1] != "+" &&
		flow[flow.length - 1] != "-" &&
		flow[flow.length - 1] != "/" &&
		flow[flow.length - 1] != "%" &&
		flow[flow.length - 1] != "*"
	) {
		addButton("btn-add");
		btnPress("btn-add");
	}
	if (
		flow[flow.length - 1] == "+" &&
		flow[flow.length - 1] == "-" &&
		flow[flow.length - 1] == "/" &&
		flow[flow.length - 1] == "%" &&
		flow[flow.length - 1] == "*"
	) {
	}
});

document.getElementById("btn-minus").addEventListener("click", function () {
	let flow = document.getElementById("calc-flow").innerText;
	if (
		flow[flow.length - 1] != "+" &&
		flow[flow.length - 1] != "-" &&
		flow[flow.length - 1] != "/" &&
		flow[flow.length - 1] != "%" &&
		flow[flow.length - 1] != "*"
	) {
		addButton("btn-minus");
		btnPress("btn-minus");
	}
	if (
		flow[flow.length - 1] == "+" &&
		flow[flow.length - 1] == "-" &&
		flow[flow.length - 1] == "/" &&
		flow[flow.length - 1] == "%" &&
		flow[flow.length - 1] == "*"
	) {
	}
});
document.getElementById("btn-divide").addEventListener("click", function () {
	let flow = document.getElementById("calc-flow").innerText;
	if (
		flow[flow.length - 1] != "+" &&
		flow[flow.length - 1] != "-" &&
		flow[flow.length - 1] != "/" &&
		flow[flow.length - 1] != "%" &&
		flow[flow.length - 1] != "*"
	) {
		addButton("btn-divide");
		btnPress("btn-divide");
	}
	if (
		flow[flow.length - 1] == "+" &&
		flow[flow.length - 1] == "-" &&
		flow[flow.length - 1] == "/" &&
		flow[flow.length - 1] == "%" &&
		flow[flow.length - 1] == "*"
	) {
	}
});
document.getElementById("btn-multiply").addEventListener("click", function () {
	let flow = document.getElementById("calc-flow").innerText;
	if (
		flow[flow.length - 1] != "+" &&
		flow[flow.length - 1] != "-" &&
		flow[flow.length - 1] != "/" &&
		flow[flow.length - 1] != "%" &&
		flow[flow.length - 1] != "*"
	) {
		addButton("btn-multiply");
		btnPress("btn-multiply");
	}
	if (
		flow[flow.length - 1] == "+" &&
		flow[flow.length - 1] == "-" &&
		flow[flow.length - 1] == "/" &&
		flow[flow.length - 1] == "%" &&
		flow[flow.length - 1] == "*"
	) {
	}
});

document.getElementById("btn-multiply").addEventListener("click", function () {
	let flow = document.getElementById("calc-flow").innerText;
	if (
		flow[flow.length - 1] != "+" &&
		flow[flow.length - 1] != "-" &&
		flow[flow.length - 1] != "/" &&
		flow[flow.length - 1] != "%" &&
		flow[flow.length - 1] != "*"
	) {
		addButton("btn-multiply");
		btnPress("btn-multiply");
	}
	if (
		flow[flow.length - 1] == "+" &&
		flow[flow.length - 1] == "-" &&
		flow[flow.length - 1] == "/" &&
		flow[flow.length - 1] == "%" &&
		flow[flow.length - 1] == "*"
	) {
	}
});

document
	.getElementById("btn-percentage")
	.addEventListener("click", function () {
		let flow = document.getElementById("calc-flow").innerText;
		if (
			flow[flow.length - 1] != "+" &&
			flow[flow.length - 1] != "-" &&
			flow[flow.length - 1] != "/" &&
			flow[flow.length - 1] != "%" &&
			flow[flow.length - 1] != "*"
		) {
			addButton("btn-percentage");
			btnPress("btn-percentage");
		}
		if (
			flow[flow.length - 1] == "+" &&
			flow[flow.length - 1] == "-" &&
			flow[flow.length - 1] == "/" &&
			flow[flow.length - 1] == "%" &&
			flow[flow.length - 1] == "*"
		) {
		}
	});

document.getElementById("btn-eraseOne").addEventListener("click", function () {
	let flow = document.getElementById("calc-flow").innerText;
	console.log("tracking flow to remove", flow);
	let newFlow = flow.slice(0, -1);
	console.log("tracking flow to remove", newFlow);
	document.getElementById("calc-flow").innerText = newFlow;
});

// Result Button
document.getElementById("btn-result").addEventListener("click", function () {
	let calcFlow = document.getElementById("calc-flow").innerText;
	console.log("primary calcflow", calcFlow);
	console.log(eval(calcFlow));

	let num1 = [];
	let operator = [];
	let num2 = [];
	let operator2 = [];

	for (let calc of calcFlow) {
		if (
			calc != "+" &&
			calc != "-" &&
			calc != "/" &&
			calc != "%" &&
			calc != "*"
		) {
			num1.push(calc);
		}
		if (
			calc == "+" ||
			calc == "-" ||
			calc == "/" ||
			calc == "%" ||
			calc == "*"
		) {
			operator.push(calc);
			break;
		}
	}

	console.log("NUM1", num1);
	let a = calcFlow.indexOf(operator[0]);

	for (let i = a + 1; i < calcFlow.length; i++) {
		if (
			calcFlow[i] != "+" &&
			calcFlow[i] != "-" &&
			calcFlow[i] != "/" &&
			calcFlow[i] != "%" &&
			calcFlow[i] != "*"
		) {
			num2.push(calcFlow[i]);
		}

		if (calcFlow[i] == "%") {
			operator2.push(calcFlow[i]);
		}

		if (
			calcFlow[i] == "+" ||
			calcFlow[i] == "-" ||
			calcFlow[i] == "/" ||
			calcFlow[i] == "*"
		) {
			console.log("OPERATOR", operator);
			console.log("NUM2", num2);
			operator2.push(calcFlow[i]);
			return (document.getElementById("calc-output").innerText =
				"Not Supported");
		}
	}

	console.log("NUM1", num1);
	console.log("OPERATOR", operator);
	console.log("NUM2", num2);

	let num1Converted = "";
	for (let element of num1) {
		num1Converted = num1Converted + element;
	}
	console.log("NUM1CONVERTED", num1Converted);

	let num2Converted = "";
	for (let element of num2) {
		num2Converted = num2Converted + element;
	}
	console.log("NUM2CONVERTED", num2Converted);

	if (operator[0] == "+") {
		document.getElementById("calc-output").innerHTML =
			parseFloat(num1Converted) + parseFloat(num2Converted);
	}
	if (operator[0] == "-") {
		document.getElementById("calc-output").innerHTML =
			parseFloat(num1Converted) - parseFloat(num2Converted);
	}
	if (operator[0] == "/") {
		document.getElementById("calc-output").innerHTML =
			parseFloat(num1Converted) / parseFloat(num2Converted);
	}
	if (operator[0] == "*") {
		document.getElementById("calc-output").innerHTML =
			parseFloat(num1Converted) * parseFloat(num2Converted);
	}
	if (operator[0] == "%") {
		document.getElementById("calc-output").innerHTML =
			parseFloat(num1Converted) / 100;
	}
	if (operator2[0] == "%") {
		document.getElementById("calc-output").innerHTML =
			parseFloat(document.getElementById("calc-output").innerHTML) / 100;
	}

	console.log(document.getElementById("calc-output").innerText);
});
