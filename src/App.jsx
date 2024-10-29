import { Route, Routes } from "react-router-dom"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Shop from "./components/Shop"
import Card from "./components/Card"
import { Provider } from "react-redux"
import appStore from "./Redux/appStore"

function App() {
  return (
    <>
    <Provider store={appStore}>
      <div className="max-w-[850px] mx-auto">
        <Header />
        <Routes>
          <Route path="/" element={<Hero/>} />
          <Route path="/shop" element={<Shop/>} />
          <Route path="/cart" element={<Card/>} />
        </Routes>
      </div>
      <Footer/>
    </Provider>
    </>
  )
}

export default App
