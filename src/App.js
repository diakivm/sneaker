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
  const [sumOfOrder, setSumOfOrder] = React.useState(0)
  const [currency, setCurrency] = React.useState('руб.')


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
  async function removeIteamInCart(id){
    const i = productsInCart.find((iteam) => iteam.parentId === id)
   if(i){
      await axios.delete(`https://61d3436eb4c10c001712b8b8.mockapi.io/cart/${i.id}`)
      setProductsInCart(productsInCart.filter((iteam) => iteam.parentId !== id ))
   } else {
      await axios.delete(`https://61d3436eb4c10c001712b8b8.mockapi.io/cart/${id}`)
      setProductsInCart(productsInCart.filter((iteam) => iteam.id !== id ))
   }
 }

  async function addIteamToCart(value){
     const {data} = await  axios.post("https://61d3436eb4c10c001712b8b8.mockapi.io/cart",value)
     setProductsInCart(productsInCart.concat([data]))
  }
  //#endregion

  //#region actions with favorites

  async function removeIteamFromFavorites(id){
    const i = productsInFavorite.find((iteam) => iteam.parentId === id)
    if(i){
        await axios.delete(`https://61d3436eb4c10c001712b8b8.mockapi.io/favorites/${i.id}`)
        setProductsInFavorite(productsInFavorite.filter((iteam) => iteam.parentId !== id ))
    } else {
      await axios.delete(`https://61d3436eb4c10c001712b8b8.mockapi.io/favorites/${id}`)
      setProductsInFavorite(productsInFavorite.filter((iteam) => iteam.id !== id ))  
    }
 }

  async function addIteamToFavorites(value){
    const {data} = await  axios.post("https://61d3436eb4c10c001712b8b8.mockapi.io/favorites",value)
    setProductsInFavorite(productsInFavorite.concat([data]))
  }
  //#endregion


  return (
      <AppContext.Provider value={{products,
                                   productsInCart, removeIteamInCart, addIteamToCart,
                                   productsInFavorite,removeIteamFromFavorites, addIteamToFavorites,
                                   sumOfOrder, setSumOfOrder,
                                   currency}}>
          <div className="wrapper _container">
            <Header />
            <Main />
            <Footer />
          </div>
      </AppContext.Provider>
  );
}

export default App;
