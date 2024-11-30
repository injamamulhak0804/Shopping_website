import { Route, Routes } from "react-router-dom"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Shop from "./components/Shop"
import Card from "./components/Card"
import { Provider } from "react-redux"
import appStore from "./Redux/appStore"
import { Toaster } from 'react-hot-toast'
import Login from "./components/Login"
import SignUp from "./components/SignUp"

function App() {
  return (
    <>
    <Provider store={appStore}>
    <Toaster
			position="bottot-center"
			reverseOrder={false}
			gutter={30}
			containerClassName="toaster-container"
			toastOptions={{
				className: "toaster-toast",
				duration: 1500,
			}}
		/>
      <div className="max-w-[850px] mx-auto">
        <Header />
        <Routes>
          <Route path="/" element={<Hero/>} />
          <Route path="/shop" element={<Shop/>} />
          <Route path="/cart" element={<Card/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<SignUp/>} />
        </Routes>
      </div>
      <Footer/>
    </Provider>
    </>
  )
}

export default App
