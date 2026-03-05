
import {  useState } from 'react'
import './App.css'
import Banner from './Components/Banner'
import CustomerTickets from './Components/CustomerTickets'
import Navbar from './Components/Navbar'
import TicketCard from './Components/TicketCard'
import Footer from './Components/Footer'
import { toast, ToastContainer } from 'react-toastify'
const loadServiceData =fetch("./ticket.json")
.then(res=> res.json())
function App() {
const [progress ,setProgress]= useState([]);
const [resolved,setResolved] =useState([]);
const [cart,setCart] =useState([]);
  const [services, setServices] = useState([]);

const handleAddToCart = (service)=> {
  if (cart.some(item => item.id === service.id)) {
    toast.warning("This ticket is already in progress!")
     
      return;
    }
    if (resolved.some(item => item.id === service.id)) {
      toast.info("This ticket is already resolved!")
     
      return;
    }
  const newCart =[...cart,service]
  setCart(newCart);
  setServices(services.filter(s=>s.id !==service.id ))
  toast.success("Ticket added to Progress")
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
     
      </div>
      <div>
        <CustomerTickets   loadServiceData ={loadServiceData}  handleAddToCart ={ handleAddToCart} handleResolved  = {handleResolved } resolved ={resolved} cart={cart} />
      </div>
      <div>
        <Footer/>
      </div>
     </div>
     <ToastContainer
     position='top-right'
        autoClose={3000}      
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
     ></ToastContainer>
    </>
  )
}

export default App
