import axios from 'axios'

export function request(config) {
	const interface1 = axios.create({
		baseURL: '/api',
		timeout: 5000
	})

	// 请求拦截器
	interface1.interceptors.request.use(config => {
		let request_url = config.url.charAt(config.url.length - 1)
        if (request_url != "/") {
            config.url += "/"
        }
		return config;
	}, err => {
		return err
	})
	// 响应拦截器
	// interface1.interceptors.response.use(res => {
	// 	console.log(res);
	// 	return res.data
	// }, err => {
	// 	console.log(err);
	// 	return err
	// })

	return interface1(config)
}
