import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";
import Navbar from "./components/Navbar/Navbar";


function App() {

  let son = 9999;
  son=5555555;
  let ism = "kamron";
  const car = {
    model: "kaptiva",
  }
  const products = ["kola", "fanta"];

  return (
    <div className="app">
      <h2>Count: {son} </h2>
      <h2>mening ismim {ism}.menda {car.model} bor</h2>
      <h3>men {products[0]} va {products[1]} obkeldim</h3>

      <Navbar/>
      <Main/>
      <Footer/>
    </div>
  )
}
export default App;
// virtual DOM,JSX
// components;
// inline css
// css;
// state,
// eventlar in react;
// git 
