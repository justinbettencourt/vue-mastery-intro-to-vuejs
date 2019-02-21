var app = new Vue({
	el: '#app',
	data: {
		product: 'Socks',
		description: 'A pair of warm, fuzzy socks.',
		image: './assets/VueMasterySocks.jpg',
		link: 'http://www.google.ca',
		inStock: true,
		onSale: true,
		salePercentage: 30,
		details: ["80% cotton", "20% polyester", "Gender-neutral"],
		variants: [
			{
				variantId: 2234,
				variantColor: "green"
			},
			{
				variantId: 2235,
				variantColor: "blue"
			}
		],
		sizes: ["Small", "Medium", "Large", "Extra Large"]
	}, 
})