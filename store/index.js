export const state = () => ({
  products: [],
  categories: [],
  blogs: [],
  sliders: [],
  users: [],
  // id, quantity
  cart: [],
})

export const mutations = {
  setProducts(state, products) {
    state.products = products
  },
  setCategories(state, categories) {
    state.categories = categories
  },
  setBlogs(state, blogs) {
    state.blogs = blogs
  },
  setSliders(state, sliders) {
    state.sliders = sliders
  },
  setUsers(state, users) {
    state.users = users
  },
  addCategory(state, category) {
    state.categories.push(category)
  },
  pushProductToCart(state, productId) {
    state.cart.push({
      id: productId,
      quantity: 1,
    })
  },
  removeProductFromCart(state, productId) {
    const indexToRemove = state.cart.findIndex((item) => item.id === productId)
    state.cart.splice(indexToRemove, 1)
  },
  removeCart(state) {
    state.cart.length = 0
  },
  incrementItemQuantity(state, cartItem) {
    cartItem.quantity++
  },
  decrementProductInventory(state, product) {
    product.inventory--
  },
  changeItemQuantity(state, productId, quantity) {
    const cartItem = state.cart.findIndex((item) => item.id === productId)
    cartItem.quantity = quantity
  },
}

export const actions = {
  async nuxtServerInit(vuexContext, context) {
    const dataProduct = await this.$axios.$get(
      'http://127.0.0.1:8000/api/products'
    )
    // eslint-disable-next-line no-console
    // console.log(dataProduct)
    vuexContext.commit('setProducts', dataProduct)

    const dataCategory = await this.$axios.$get(
      'http://127.0.0.1:8000/api/categories'
    )
    vuexContext.commit('setCategories', dataCategory)

    const dataBlogs = await this.$axios.$get('http://127.0.0.1:8000/api/blogs')
    vuexContext.commit('setBlogs', dataBlogs)

    const dataSliders = await this.$axios.$get(
      'http://127.0.0.1:8000/api/sliders'
    )
    vuexContext.commit('setSliders', dataSliders)
  },
  async fetchCategories(vuexContext, context) {
    const datatCategories = await this.$axios.$get(
      'http://127.0.0.1:8000/api/categories'
    )
    vuexContext.commit('setCategories', datatCategories)
  },
  async fetchProducts(vuexContext, context) {
    const dataProducts = await this.$axios.$get(
      'http://127.0.0.1:8000/api/products'
    )
    vuexContext.commit('setProducts', dataProducts)
  },
  async fetchBlogs(vuexContext, context) {
    const dataBlogs = await this.$axios.$get('http://127.0.0.1:8000/api/blogs')
    vuexContext.commit('setBlogs', dataBlogs)
  },
  async fetchSliders(vuexContext, context) {
    const dataSliders = await this.$axios.$get(
      'http://127.0.0.1:8000/api/sliders'
    )
    vuexContext.commit('setSliders', dataSliders)
  },
  async fetchUsers(vuexContext, context) {
    const dataUsers = await this.$axios.$get('http://127.0.0.1:8000/api/users')
    vuexContext.commit('setUsers', dataUsers)
  },
  addProductToCart(vuexContext, product) {
    if (product.inventory > 0) {
      const cartItem = vuexContext.state.cart.find(
        (item) => item.id === product.id
      )
      if (!cartItem) {
        vuexContext.commit('pushProductToCart', product.id)
      } else {
        vuexContext.commit('changeItemQuantity', cartItem)
      }
      vuexContext.commit('decrementProductInventory', product)
    }
  },
  changeQuantityProductOnCart(vuexContext, product, quantity) {
    if (product.inventory > quantity) {
      const cartItem = vuexContext.state.cart.find(
        (item) => item.id === product.id
      )
      if (!cartItem) {
        vuexContext.commit('pushProductToCart', product.id)
      } else {
        vuexContext.commit('changeItemQuantity', cartItem, quantity)
      }
      // vuexContext.commit('decrementProductInventory', product)
    }
  },
  removeCart(vuexContext) {
    vuexContext.commit('removeCart')
  },
}

export const getters = {
  blogs(state) {
    return state.blogs
  },
  products(state) {
    return state.products
  },
  productsReverse(state) {
    return state.products.slice(0, 6)
  },
  categories(state) {
    return state.categories
  },
  sliders(state) {
    return state.sliders
  },
  users(state) {
    return state.users
  },
  category: (state) => (id) => {
    return state.categories.find((cate) => cate.id === id)
  },
  cart(state) {
    return state.cart
  },
  cartProducts(state) {
    return state.cart.map((cartItem) => {
      const product = state.products.find(
        (product) => product.id === cartItem.id
      )
      const categoryProduct = state.categories.find(
        (category) => category.id === product.category_id
      )
      return {
        id: product.id,
        name: product.name,
        price: product.current_price,
        old_price: product.old_price,
        quantity: cartItem.quantity,
        thumbnail: product.thumbnail,
        category: categoryProduct.name,
      }
    })
  },
  cartTotal(state, getters) {
    return getters.cartProducts.reduce(
      (total, product) => total + product.price * product.quantity,
      0
    )
  },
  cartQuantity(state, getters) {
    return getters.cartProducts.reduce(
      (quantity, product) => quantity + product.quantity,
      0
    )
  },
}
