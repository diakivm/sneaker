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

  

  //#region get all products and products in cart  from back-end
  React.useEffect(() => {

     axios.get("https://61d3436eb4c10c001712b8b8.mockapi.io/products")
      .then((res) =>{
        setProducts(res.data)
      })

      axios.get("https://61d3436eb4c10c001712b8b8.mockapi.io/cart")
      .then((res) =>{
        setProductsInCart(res.data)
      })

      axios.get("https://61d3436eb4c10c001712b8b8.mockapi.io/favorites")
      .then((res) =>{
        setProductsInFavorite(res.data)
      })

  }, [])
  //#endregion

  //#region actions with cart
  async function removeIteamInCartFromHomeScreen(id){
     const i = productsInCart.find((iteam) => iteam.parentId === id)
     await axios.delete(`https://61d3436eb4c10c001712b8b8.mockapi.io/cart/${i.id}`)
     setProductsInCart(productsInCart.filter((iteam) => iteam.parentId !== id ))
  }

  async function removeIteamInCartFromCartScreen(id){
     await axios.delete(`https://61d3436eb4c10c001712b8b8.mockapi.io/cart/${id}`)
     setProductsInCart(productsInCart.filter((iteam) => iteam.id !== id ))
  }

  async function addIteamToCart(value){
     const {data} = await  axios.post("https://61d3436eb4c10c001712b8b8.mockapi.io/cart",value)
     setProductsInCart(productsInCart.concat([data]))
  }
  //#endregion

  //#region actions with favorites

  async function removeIteamFromFavorites(id){
    await axios.delete(`https://61d3436eb4c10c001712b8b8.mockapi.io/favorites/${id}`)
    setProductsInFavorite(productsInFavorite.filter((iteam) => iteam.id !== id ))
 }

  async function addIteamToFavorites(value){
    const {data} = await  axios.post("https://61d3436eb4c10c001712b8b8.mockapi.io/favorites",value)
    setProductsInFavorite(productsInFavorite.concat([data]))
  }
  //#endregion


  return (
      <AppContext.Provider value={{products,
                                   productsInCart, removeIteamInCartFromHomeScreen, removeIteamInCartFromCartScreen, addIteamToCart,
                                   productsInFavorite,removeIteamFromFavorites, addIteamToFavorites}}>
          <div className="wrapper _container">
            <Header />
            <Main />
            <Footer />
          </div>
      </AppContext.Provider>
  );
}

export default App;
