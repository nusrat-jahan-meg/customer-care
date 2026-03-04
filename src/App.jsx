
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
  const [services, setServices] = useState([]);

const handleAddToCart = (service)=> {
  if (cart.some(item => item.id === service.id)) {
      alert("This ticket is already in progress!");
      return;
    }
    if (resolved.some(item => item.id === service.id)) {
      alert("This ticket is already resolved!");
      return;
    }
  const newCart =[...cart,service]
  setCart(newCart);
  setServices(services.filter(s=>s.id !==service.id ))
}
const handleResolved  =(solve) => {
  const updateCart = cart.filter(
    item=> item.id !== solve.id
  )
  setCart(updateCart);
 const newResolve =[...resolved,solve];
 setResolved(newResolve);

}

  return (
    <>
     <div>
   
    <div>
        <Navbar></Navbar>
    </div>
    <div>
      <Banner cart ={cart.length} resolved ={resolved.length} ></Banner>
    </div>
      <div>
        {/* <TicketCard></TicketCard> */}
      </div>
      <div>
        <CustomerTickets   loadServiceData ={loadServiceData}  handleAddToCart ={ handleAddToCart} handleResolved  = {handleResolved } resolved ={resolved} cart={cart} />
      </div>
     </div>
    </>
  )
}

export default App
