export default class BookstoreService {
	data = [
		{
			id: 1,
			title: 'ababababa',
			author: 'Mykola'
		},
		{
			id: 2,
			title: 'bccbcbcbcbcb',
			author: 'Misha'
		}
	];

	getBooks () {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				if (Math.random() > 0.75) {
					reject(new Error('Something bad happened'));
				} else {
					resolve(this.data);
				}
			}, 700);
		});
	}
}