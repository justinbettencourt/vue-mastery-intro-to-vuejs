var app = new Vue({
	el: '#app',
	data: {
		brand: 'Vue Mastery',
		product: 'Socks',
		description: 'A pair of warm, fuzzy socks.',
		selectedVariant: 0,
		link: 'http://www.google.ca',
		details: ["80% cotton", "20% polyester", "Gender-neutral"],
		variants: [
			{
				variantId: 2234,
				variantColor: 'green',
				variantImage: './assets/VueMasterySocksGreen.jpg',
				varientQuanitity: 5,
				onSale: true,
				salePercentage: 30,
			},
			{
				variantId: 2235,
				variantColor: 'blue',
				variantImage: './assets/VueMasterySocksBlue.jpg',
				varientQuanitity: 0,
				onSale: false,
				salePercentage: 20
			}
		],
		sizes: ["Small", "Medium", "Large", "Extra Large"],
		cart: 0
	}, 
	methods: {
		addToCart: function () {
			this.cart += 1;
		},
		updateProduct: function (index) {
			this.selectedVariant = index;
			console.log(index);
		}
	},
	// Computed: Results are cached until dependencies change.
	computed: {
		title() {
			return this.brand + ' ' + this.product;
		},
		image() {
			return this.variants[this.selectedVariant].variantImage
		},
		inStock() {
			return this.variants[this.selectedVariant].varientQuanitity
		},
		salePercentage() {
			if (this.variants[this.selectedVariant].onSale)
			return 'On Sale: ' + this.variants[this.selectedVariant].salePercentage + '% OFF'
		}
	}
})

Vue.config.devtools = true;