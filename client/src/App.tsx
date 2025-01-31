
import AllRoutes from "./AllRoutes"
import Header from "./components/Header"
import { ThemeProvider } from "./components/theme-provider"

function App() {


  return (
    <div>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Header />
        <AllRoutes />
      </ThemeProvider>
    </div>
  )
}

export default App
