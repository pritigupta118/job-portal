
import AllRoutes from "./AllRoutes"
import Footer from "./components/Footer"
import Header from "./components/Header"
import { ThemeProvider } from "./components/theme-provider"

function App() {


  return (
    <div>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Header />
        <AllRoutes />
        <Footer/>
      </ThemeProvider>
    </div>
  )
}

export default App
