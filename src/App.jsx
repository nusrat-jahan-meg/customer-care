
import {  useState } from 'react'
import './App.css'
import Banner from './Components/Banner'
import CustomerTickets from './Components/CustomerTickets'
import Navbar from './Components/Navbar'
import TicketCard from './Components/TicketCard'
const loadServiceData =fetch("./ticket.json")
.then(res=> res.json())
function App() {
const [progress ,setProgress]= useState([]);
const [resolved,setResolved] =useState([]);
const [cart,setCart] =useState([]);

const handleAddToCart = (service)=> {
  alert("add this")
  const newCart =[...cart,service]
  setCart(newCart);
}
// const handleCart  =() => {

// }

  return (
    <>
     <div>
   
    <div>
        <Navbar></Navbar>
    </div>
    <div>
      <Banner cart ={cart.length} ></Banner>
    </div>
      <div>
        {/* <TicketCard></TicketCard> */}
      </div>
      <div>
        <CustomerTickets loadServiceData ={loadServiceData}  handleAddToCart ={ handleAddToCart} />
      </div>
     </div>
    </>
  )
}

export default App
