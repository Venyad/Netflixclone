import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/HomePage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import SignUpPage from "./pages/SignUpPage.jsx";
import Footer from "./components/Footer.jsx";
import { Toaster } from "react-hot-toast";
import { useAuthStore } from "./store/authUser.js";
import { useEffect } from "react";
function App() {
   const {user,isCheckingAuth,authCheck} = useAuthStore();
   useEffect(() => {
		authCheck();
	}, []);
   console.log("auth user is here",user);
   return (
      <><Routes>
         <Route path="/" element={<HomePage />} />
         <Route path="/signup" element={<SignUpPage />} />
         <Route path="/login" element={<LoginPage />} />
      </Routes><Footer /><Toaster /></>
   );
}

export default App;
