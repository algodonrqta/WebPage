module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{html,svg,JPG,jpg,png,json,js,css}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};