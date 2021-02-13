
let pronoun = ['the', 'my', 'your'];
let adj = ['great', 'big', 'huge', 'skinny'];
let noun = ['cat', 'dog', 'bird', 'racoon'];
let end = ['.com', '.cr', '.cr', '.uk'];


const createUrls = (arr1, arr2, arr3, arr4) => {
	let urlArray = [];
	arr1.forEach((num1) => {
		arr2.forEach((num2) => {
			arr3.forEach((num3) => {
				arr4.forEach((num4) => {
					const str = (num1 + num2 + num3 + num4).toLowerCase()
					urlArray.push(str)
				})
			})
		})
	})
	return urlArray
}

const arrayOfURL = createUrls(pronoun, adj, noun, end)
console.log(arrayOfURL)