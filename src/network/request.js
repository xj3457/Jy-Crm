import axios from 'axios'

export function request(config) {
	const interface1 = axios.create({
		baseURL: '/api',
		timeout: 5000
	})

	// interface1.interceptors.request.use(config => {
	// 	console.log(config);
	// 	return config
	// }, err => {
	// 	console.log(err);
	// 	return err
	// })
	// interface1.interceptors.response.use(res => {
	// 	console.log(res);
	// 	return res.data
	// }, err => {
	// 	console.log(err);
	// 	return err
	// })

	return interface1(config)
}

// export function request(config) {
// 	return new Promise((resolve, reject) => {
// 		const interface1 = axios.create({
// 			baseURL: 'http://httpbin.org',
// 			timeout: 5000
// 		})
//
// 		interface1(config).then(res => {
// 			resolve(res)
// 		}).catch(err => {
// 			reject(err)
// 		})
// 	})
// }

// export function request(config, success, failure) {
// 	const interface1 = axios.create({
// 		baseURL: 'http://httpbin.org',
// 		timeout: 5000
// 	})
//
// 	interface1(config).then(res => {
// 		success(res)
// 	}).catch(err => {
// 		failure(err)
// 	})
// }