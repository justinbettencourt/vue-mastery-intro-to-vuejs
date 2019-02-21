var app = new Vue({
	el: '#app',
	data: {
		product: 'Socks',
		description: 'A pair of warm, fuzzy socks.',
		image: './assets/VueMasterySocksGreen.jpg',
		link: 'http://www.google.ca',
		inStock: true,
		inventory: 5,
		onSale: true,
		salePercentage: 30,
		details: ["80% cotton", "20% polyester", "Gender-neutral"],
		variants: [
			{
				variantId: 2234,
				variantColor: 'green',
				variantImage: './assets/VueMasterySocksGreen.jpg'
			},
			{
				variantId: 2235,
				variantColor: 'blue',
				variantImage: './assets/VueMasterySocksBlue.jpg'
			}
		],
		sizes: ["Small", "Medium", "Large", "Extra Large"],
		cart: 0
	}, 
	methods: {
		addToCart: function () {
			this.cart += 1;
			this.inventory -= 1;
			this.updateButton();
		},
		removeFromCart: function () {
			if (this.cart > 0) {
				this.cart -= 1;
				this.inventory += 1;
			}
			this.updateButton();
		},
		updateProduct: function (variantImage) {
			this.image = variantImage;
		},
		updateButton: function () {
			if (this.inventory <= 0) {
				console.log("Stock False");
				this.inStock = false;
			} else {
				console.log("Stock True");
				this.inStock = true;
			}
		}
	}
})

Vue.config.devtools = true;