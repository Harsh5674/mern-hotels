import { Link } from "react-router-dom";
import { useAppContext } from "../contexts/AppContext";
import SignOutButton from "./SignOutButton";

function Header(){
    const {isloggedin} = useAppContext();

    return (
       <div className="bg-blue-800 py-6">
        <div className="container mx-auto flex sm:justify-between flex-col sm:flex-row">
            <span className="text-3xl text-white mx-auto sm:mx-0 font-bold tracking-tight">
                <Link to="/">MernHolidays.com</Link>
            </span>
            <span className="flex space-x-2 mx-auto sm:mx-0">
               {isloggedin ? (
                <>
                <Link className="flex items-center text-white px-3 font-bold hover:bg-blue-600" to="/my-bookings">My Bookings</Link>
                <Link className="flex items-center text-white px-3 font-bold hover:bg-blue-600" to="/my-hotels">My Hotels</Link>
                <SignOutButton />
                </> ): (
                <Link to="/sign-in" className="flex bg-white items-center text-blue-600 px-3 font-bold hover:bg-gray-100">
                Sign In
                </Link>
               ) } 
                
            </span>
        </div>
       </div>
    );
}

export default Header;