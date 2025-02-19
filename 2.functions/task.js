function getArrayParams(...arr) {
	if (arr.length === 0) {
		return {
			min: null,
			max: null,
			avg: null
		};
	}
	let min = Infinity;
	let max = -Infinity;
	let sum = 0;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] < min) {
			min = arr[i];
		}
		if (arr[i] > max) {
			max = arr[i];
		}
		sum += arr[i];
	}

	let avg = (sum / arr.length).toFixed(2);

	return {
		min: min,
		max: max,
		avg: Number(avg)
	};
}

function summElementsWorker(...arr) {
	const initialElement = 0;
	let sum = arr.reduce((accumulate, currentElement) => accumulate + currentElement, initialElement);
	return sum;
}

function differenceMaxMinWorker(...arr) {
	if (arr.length === 0) {
		return 0;
	}
	const max = Math.max(...arr);
	const min = Math.min(...arr);
	return max - min;
}

function differenceEvenOddWorker(...arr) {
	if (arr.length === 0) {
		return 0;
	}

	let sumEvenElement = 0;
	let sumOddElement = 0;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 === 0) {
			sumEvenElement += arr[i];
		} else {
			sumOddElement += arr[i];
		}
	}
	return (sumEvenElement - sumOddElement);
}

function averageEvenElementsWorker(...arr) {
	if (arr.length === 0) {
		return 0;
	}

	let sumEvenElement = 0;
	let countEvenElement = 0;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 === 0) {
			sumEvenElement += arr[i];
			countEvenElement++;
		} else {}
	}
	return (sumEvenElement / countEvenElement);
}

function makeWork(arrOfArr, func) {
	let maxWorkerResult = -Infinity;

	for (let arr of arrOfArr) {
		const result = func(...arr);
		if (result > maxWorkerResult) {
			maxWorkerResult = result;
		}
	}
	return maxWorkerResult;
}

function testCase() {
  // Тестирование функции getArrayParams
  console.log(getArrayParams(-99, 99, 10)); // Ожидаемый результат: { min: -99, max: 99, avg: 0 }
  console.log(getArrayParams(1, 2, 3, -100, 10)); // Ожидаемый результат: { min: -100, max: 10, avg: 1.2 }
  console.log(getArrayParams(5)); // Ожидаемый результат: { min: 5, max: 5, avg: 5 }

  // Тестирование функции summElementsWorker
  console.log(summElementsWorker()); // Ожидаемый результат: 0
  console.log(summElementsWorker(10, 10, 11, 20, 10)); // Ожидаемый результат: 61

  // Тестирование функции differenceMaxMinWorker
  console.log(differenceMaxMinWorker()); // Ожидаемый результат: 0
  console.log(differenceMaxMinWorker(10, 10, 11, 20, 10)); // Ожидаемый результат: 10

  // Тестирование функции differenceEvenOddWorker
  console.log(differenceEvenOddWorker(94, 51, 57, 41, 47, 66, 58, 10, 38, 17)); // Ожидаемый результат: 53
  console.log(differenceEvenOddWorker(15, 97, 85, 64, 67, 10, 69, 40, 15, 35)); // Ожидаемый результат: -269

  // Тестирование функции averageEvenElementsWorker
  console.log(averageEvenElementsWorker(1, 2, 3, 4, 5, 6, 7, 8, 9)); // Ожидаемый результат: 5
  console.log(averageEvenElementsWorker(15, 97, 85, 64, 67, 10, 69, 40, 15, 35)); // Ожидаемый результат: 38

  // Тестирование функции makeWork
  const arr = [
      [10, 20, 30],
      [5, 15, 25],
      [1, 2, 3, 4, 5]
  ];
  console.log(makeWork(arr, summElementsWorker)); // Ожидаемый результат: 60
  console.log(makeWork(arr, differenceMaxMinWorker)); // Ожидаемый результат: 25
  console.log(makeWork(arr, differenceEvenOddWorker)); // Ожидаемый результат: 20
  console.log(makeWork(arr, averageEvenElementsWorker)); // Ожидаемый результат: 20
}

testCase();
