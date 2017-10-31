let fi = (function() {
	return {
		libraryMethod: function() {
			return "Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0";
		},
		//collections: objects or arrays
		each: function(collection, iterateeFunction) {
			for (const element in collection) {
				iterateeFunction(collection[element]);
			}
			return collection;
		},

		map: function(collection, iterateeFunction) {
			const result = [];
			for (const element in collection) {
				result.push(iterateeFunction(collection[element]));
			}
			return result;
		},

		reduce: function(collection, iterateeFunction, acc) {
			let result = acc;
			for (const element in collection) {
				result = iterateeFunction(result, collection[element], collection);
			}
			return result;
		},
		find: function(collection, predicateFunction) {
			for (const element in collection) {
				if (predicateFunction(collection[element])) {
					return collection[element];
				}
			}
		},
		filter: function(collection, predicateFunction) {
			let result = [];
			for (const element in collection) {
				if (predicateFunction(collection[element])) {
					result.push(collection[element]);
				}
			}
			return result;
		},
		size: function(collection) {
			let counter = 0;
			for (const element in collection) {
				counter += 1;
			}
			return counter;
		},
		//arrays
		first: function(arr, n) {
			n = typeof n !== "undefined" ? n : 1;
			return arr.slice(0, n);
		},
		last: function(arr, n) {
			n = typeof n !== "undefined" ? 0 - n : -1;
			return arr.slice(n, arr.length);
		},
		compact: function(arr) {
			let result = [];
			for (const el of arr) {
				if (el) {
					result.push(el);
				}
			}
			return result;
		},
		sortBy: function(arr, sortFunction) {
			let results = arr.slice();
			results.sort(function(a, b) {
				if (typeof sortFunction(a) === "string") {
					return sortFunction(a).localeCompare(sortFunction(b));
				} else {
					return sortFunction(a) - sortFunction(b);
				}
			});
			return results;
		},
		//flatten: function(){},
		uniq: function(arr, isSorted, iteree) {
			let results = [];
			let iterateeresults = [];
			iteree =
				typeof iteree !== "undefined"
					? iteree
					: (iteree = function(arg) {
							return arg;
						});

			if (isSorted) {
			} else {
				for (const el of arr) {
					if (!results.includes(el) && !iterateeresults.includes(iteree(el))) {
						results.push(el);
						iterateeresults.push(iteree(el));
					}
				}
			}
			return results;
		},
		//object functions
		keys: function(object) {
			let results = [];
			for (const key in object) {
				results.push(key);
			}
			return results;
		},
		values: function(object) {
			let results = [];
			for (const key in object) {
				results.push(object[key]);
			}
			return results;
		},
		functions: function(obj) {
			let results = [];

			for (const key in obj) {
				if (typeof obj[key] === "function") {
					results.push(key);
				}
			}
			return results;
		}
	};
})();
