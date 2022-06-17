export function fib(n: number) {
	const answer = [0, 1];

	for (let i = 2; i <= n; i++) {
		answer.push(answer[i - 2] + answer[i - 1]);
	}

	return answer.pop() as number;
}

export const fibHouse: { [key: number]: number } = {};
