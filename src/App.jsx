import { ThemeProvider, createTheme } from "@mui/material/styles";
<<<<<<< Updated upstream
=======
import Login from "./Pages/Login";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignUp from "./Pages/SignUp";
import HomePage from "./Pages/HomePage";
import Desktop4 from "./Pages/ExistingSession";
import CreateSession from "./Pages/CreateSession";
import Profile from "./Pages/Profile";
import AccountProvider from "./context/AccountProvider";

>>>>>>> Stashed changes

const theme = createTheme({
  palette: {
    bg: {
      main: "#C8D8F0",
    },
    pri: {
      main: "#2D8CFF",
    },
    sec: {
      main: "#EEAF8B",
    },
    gray: {
      main: "#747487",
    },
  },

  typography: {
    header1: {
      fontFamily: "Roboto",
      fontWeight: "700",
      fontSize: "36px",
      lineHeight: "20px",
      letterSpacing: "1.8px",
    },
    header2: {
      fontFamily: "Roboto",
      fontWeight: "700",
      fontSize: "30px",
      lineHeight: "18px",
      letterSpacing: "1.5px",
    },
    regular: {
      fontFamily: "Montserrat",
      fontWeight: "400",
      fontSize: "18px",
      lineHeight: "30px",
      letterSpacing: "0.5px",
    },
    medium: {
      fontFamily: "Montserrat",
      fontWeight: "400",
      fontSize: "16px",
      lineHeight: "10px",
      letterSpacing: "1.2px",
    },
    small: {
      fontFamily: "Montserrat",
      fontWeight: "300",
      fontSize: "12px",
      lineHeight: "8px",
      letterSpacing: "1px",
    },
  },
});

<<<<<<< Updated upstream
=======
const router = createBrowserRouter([
  {
    path: "/",
    element: (

      <AccountProvider>
           <GoogleOAuthProvider clientId='857188781995-491222ua63co3flcgn8k8uacj2fc44ot.apps.googleusercontent.com'>
              <Login />
           </GoogleOAuthProvider>
      </AccountProvider>

     
    ),
  },
  {
    path: "/signup",
    element: (
      <AccountProvider>
           <GoogleOAuthProvider clientId='857188781995-491222ua63co3flcgn8k8uacj2fc44ot.apps.googleusercontent.com'>
               <SignUp />
            </GoogleOAuthProvider>
      </AccountProvider>
   
    ),
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/home",
    element: <HomePage />,
  },
  {
    path: "/existsession",
    element: <Desktop4 />,
  },
  {
    path: "/createsession",
    element: <CreateSession />,
  },
]);

>>>>>>> Stashed changes
function App() {
  return <ThemeProvider theme={theme}></ThemeProvider>;
}

export default App;
