import { BrowserRouter as Router, Routes, Route } from "react-router"
import DashboardLayout from "./components/layout/DashboardLayout"
import OverviewPage from "./pages/dashboard/OverviewPage"
import UsersPage from "./pages/dashboard/UsersPage"

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<DashboardLayout />}>
          <Route index element={<OverviewPage />} />
          <Route path="/users" element={<UsersPage />} />
          <Route path="/products" element={<h1>Products</h1>} />
          <Route path="/settings" element={<h1>Settings</h1>} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
