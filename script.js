let result = document.getElementById('result');

		function addToResult(value) {
			result.value += value;
		}

		function clearResult() {
			result.value = '';
		}

		function calculate(operator) {
			if (operator === '=') {
				result.value = eval(result.value);
			} else {
				result.value += operator;
			}
		}