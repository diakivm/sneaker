import React from 'react'
import axios from 'axios'
import Main from './screens/home/main/Main'
import Header from './screens/home/header/Header'
import Footer from './screens/home/footer/Footer'
import AppContext from './AppContext'
import './blanks/svgfonts/iconfonts.scss'
import './blanks/styles/style.scss'



function App() {


  const [products, setProducts] = React.useState([])
  const [productsInCart, setProductsInCart] = React.useState([])
  const [productsInFavorite, setProductsInFavorite] = React.useState([])
  const [productsInOrders, setProductsInOrders] = React.useState([])
  const [sumOfOrder, setSumOfOrder] = React.useState(0)
  const [currency, setCurrency] = React.useState('руб.')
  const [isProductsLoaded, setIsProductLoaded] = React.useState(false)


  //#region get all products and products in cart  from back-end
  React.useEffect(() => {

    async function getProudctFromBack(){

      try {
          setIsProductLoaded(false)

           const receivedProducts = await axios.get("https://61d3436eb4c10c001712b8b8.mockapi.io/products")
           const receivedCartProducts = await axios.get("https://61d3436eb4c10c001712b8b8.mockapi.io/cart")
           const receivedFacoritesProducts = await axios.get("https://61d3436eb4c10c001712b8b8.mockapi.io/favorites")
           const receivedOrders = await axios.get("https://61d3436eb4c10c001712b8b8.mockapi.io/orders")

           setIsProductLoaded(true)

           setProductsInCart(receivedCartProducts.data)
           setProductsInFavorite(receivedFacoritesProducts.data)
           setProductsInOrders(receivedOrders.data)
           setProducts(receivedProducts.data)

      } catch (error) {
        console.log(error);
      }

    }

    getProudctFromBack()
  }, [])
  //#endregion

  //#region actions with cart
  async function removeIteamInCart(id){

    try {
      const i = productsInCart.find((iteam) => iteam.parentId === id)

      if(i){
         await axios.delete(`https://61d3436eb4c10c001712b8b8.mockapi.io/cart/${i.id}`)
         setProductsInCart(productsInCart.filter((iteam) => iteam.parentId !== id ))
      } else {
         await axios.delete(`https://61d3436eb4c10c001712b8b8.mockapi.io/cart/${id}`)
         setProductsInCart(productsInCart.filter((iteam) => iteam.id !== id ))
        }

    } catch (error) {
      console.log(error);
    }

 }

  async function addIteamToCart(value){

    try {
     const {data} = await  axios.post("https://61d3436eb4c10c001712b8b8.mockapi.io/cart",value)
     setProductsInCart(productsInCart.concat([data]))

    } catch (error) {
       console.log(error);
    }

  }
  //#endregion

  //#region actions with favorites

  async function removeIteamFromFavorites(id){

   try {
    const i = productsInFavorite.find((iteam) => iteam.parentId === id)

    if(i){
        await axios.delete(`https://61d3436eb4c10c001712b8b8.mockapi.io/favorites/${i.id}`)
        setProductsInFavorite(productsInFavorite.filter((iteam) => iteam.parentId !== id ))
    } else {
      await axios.delete(`https://61d3436eb4c10c001712b8b8.mockapi.io/favorites/${id}`)
      setProductsInFavorite(productsInFavorite.filter((iteam) => iteam.id !== id ))  
    }
   } catch (error) {
     console.log(error);
   }
 }

  async function addIteamToFavorites(value){

    try {
      const {data} = await  axios.post("https://61d3436eb4c10c001712b8b8.mockapi.io/favorites",value)
      setProductsInFavorite(productsInFavorite.concat([data]))

    } catch (error) {
      console.log(error);
    }

  }
  //#endregion

  async function doOrder(){
    try {
      await axios.post("https://61d3436eb4c10c001712b8b8.mockapi.io/orders",{products: productsInCart})
      productsInCart.forEach(iteam => {
         removeIteamFromCart(iteam.id)
      })
      setProductsInCart([])
    } catch (error) {
      console.log(error);
    }
  }

  async function removeIteamFromCart(id){
    try {
      await axios.delete(`https://61d3436eb4c10c001712b8b8.mockapi.io/cart/${id}`)
    } catch (error) {
      console.log(error);
    }
  }


  return (
      <AppContext.Provider value={{products,
                                   productsInCart, removeIteamInCart, addIteamToCart,
                                   productsInFavorite,removeIteamFromFavorites, addIteamToFavorites,
                                   sumOfOrder, setSumOfOrder,
                                   currency,
                                   isProductsLoaded,
                                   productsInOrders, doOrder}}>

          <div className="wrapper _container">
            <Header />
            <Main />
            <Footer />
          </div>
      </AppContext.Provider>
  );
}

export default App;
