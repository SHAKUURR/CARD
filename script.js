"use strict";

const input = document.querySelector(".input");
const alert = document.querySelector(".alert");
const submit = document.querySelector(".submit");

const cardNumber = function () {
	let value = input.value;
	const str = String(value);
	const creditNumber = str.slice(-4);
	const mainNumber = creditNumber.padStart(str.length, "*");
	alert.textContent = mainNumber;

	// return mainNumber;
};

// cardNumber(484894894894894894);

submit.addEventListener("click", cardNumber);

input.value = "";
