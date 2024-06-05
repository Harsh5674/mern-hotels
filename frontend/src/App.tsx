
//import './App.css'

import {
         BrowserRouter as Router,
         Route,
         Routes,
         Navigate, } from "react-router-dom";
import Layout from "./layouts/Layout.tsx";
import Register from "./Pages/Resgister.tsx";
import SignIn from "./Pages/signin.tsx";
import { useAppContext } from "./contexts/AppContext.tsx";
import AddHotel from "./Pages/AddHotel.tsx";
import MyHotels from "./Pages/MyHotels.tsx";
import EditHotel from "./Pages/EditHotel.tsx";
import Search from "./Pages/Search.tsx";
import Detail from "./Pages/Detail.tsx";


function App() {
   const { isloggedin } = useAppContext();
     return(
        <Router>
          <Routes>
             <Route path="/" element={<Layout>
              <p>Home Page</p>
             </Layout>} />
             <Route path="/Search" 
             element={
                  <Layout>
                     <Search />
                  </Layout>
            } 
            />
            <Route path="/detail/:hotelId" 
             element={
                  <Layout>
                     <Detail />
                  </Layout>
            } 
            />
             <Route path="/register" element={<Layout><Register /></Layout>} />
             <Route path="/sign-in" element={
                <Layout>
                  <SignIn />
                </Layout>
             } 
             />

             {isloggedin && (<>
               <Route path="/add-hotel" 
               element={
                  <Layout>
                     <AddHotel />
                  </Layout>
               }
               />
               <Route path="/edit-hotel/:hotelId" 
               element={
                  <Layout>
                     <EditHotel />
                  </Layout>
               }
               />
               <Route path="/my-hotels" 
               element={
                  <Layout>
                     <MyHotels />
                  </Layout>
               }
               />
             </>
             )};
             <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Router>
     );
}

export default App
