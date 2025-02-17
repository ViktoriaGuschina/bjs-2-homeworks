"use strict";

function solveEquation(a, b, c) {
	let arr = [];
	let d = b ** 2 - 4 * a * c;

	if (d < 0) {
		return [];
	} else if (d === 0) {
		const root = -b / (2 * a);
		return [root];
	} else {
		const root1 = (-b + Math.sqrt(d)) / (2 * a);
		const root2 = (-b - Math.sqrt(d)) / (2 * a);
		return [root1, root2];
	}
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	percent = (percent / 100) / 12;
	const loanBody = amount - contribution;
	const paymentMethod = loanBody * (percent + (percent / (((1 + percent) ** countMonths) - 1)));
    const totalAmount = (Number(paymentMethod * countMonths));
	return totalAmount;
}
console.log(calculateTotalMortgage(12, 100000, 500000, 12));
console.log(calculateTotalMortgage(6, 20000, 300000, 24));