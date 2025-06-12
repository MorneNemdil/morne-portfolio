import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./pages/home/home-page"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "sonner"
import 'aos/dist/aos.css';

// Appwrite imports:
// import { UserProvider } from "./lib/context/user"
// import Login from "./pages/auth/login/login"

function App() {
  // GET THIS WORKING:
  // useEffect(() => {
  //   AOS.init()
  // }, []);

  return (
    // ============ IF USING APPWRITE: ============
    // <ThemeProvider>
    //   <UserProvider>
    //     {/* Add Collection Context here if needed */}
    //     <BrowserRouter>
    //       <Toaster />
    //       <Routes>
    //         <Route path="/" element={<HomePage />}></Route>
    //         <Route path="/login" element={<Login />}></Route>
    //       </Routes>
    //     </BrowserRouter>
    //   </UserProvider>
    // </ThemeProvider>

    <ThemeProvider>
      <BrowserRouter>
        <Toaster />
        <Routes>
          <Route path="/" element={<HomePage />}>
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
