import {
   BrowserRouter as Router,
   Route,
   Routes,
   Navigate,
 } from "react-router-dom";
 import Layout from "./layouts/Layout";
 import Register from "./Pages/Resgister";
 import SignIn from "./Pages/signin";
 import AddHotel from "./Pages/AddHotel";
 import { useAppContext } from "./contexts/AppContext";
 import MyHotels from "./Pages/MyHotels";
 import EditHotel from "./Pages/EditHotel";
 import Search from "./Pages/Search";
 import Detail from "./Pages/Detail";
 import Booking from "./Pages/Booking";
import MyBookings from "./Pages/MyBookings";
 //import MyBookings from "./Pages/MyBookings";
 import Home from "./Pages/Home";
 
 const App = () => {
   const { isLoggedIn } = useAppContext();
   return (
     <Router>
       <Routes>
         <Route
           path="/"
           element={
             <Layout>
               <Home />
             </Layout>
           }
         />
         <Route
           path="/search"
           element={
             <Layout>
               <Search />
             </Layout>
           }
         />
         <Route
           path="/detail/:hotelId"
           element={
             <Layout>
               <Detail />
             </Layout>
           }
         />
         <Route
           path="/register"
           element={
             <Layout>
               <Register />
             </Layout>
           }
         />
         <Route
           path="/sign-in"
           element={
             <Layout>
               <SignIn />
             </Layout>
           }
         />
 
         {isLoggedIn && (
           <>
             <Route
               path="/hotel/:hotelId/booking"
               element={
                 <Layout>
                   <Booking />
                 </Layout>
               }
             />
 
             <Route
               path="/add-hotel"
               element={
                 <Layout>
                   <AddHotel />
                 </Layout>
               }
             />
             <Route
               path="/edit-hotel/:hotelId"
               element={
                 <Layout>
                   <EditHotel />
                 </Layout>
               }
             />
             <Route
               path="/my-hotels"
               element={
                 <Layout>
                   <MyHotels />
                 </Layout>
               }
             />
             <Route
               path="/my-bookings"
               element={
                 <Layout>
                   <MyBookings />
                 </Layout>
               }
             />
           </>
         )}
         <Route path="*" element={<Navigate to="/" />} />
       </Routes>
     </Router>
   );
 };
 
 export default App;
