import React from "react"
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom"

import MainNavigation from "./shared/components/Navigation/MainNavigation"
import Users from "./user/pages/Users"
import NewPlace from "./places/pages/NewPlace.jsx"
import UserPlaces from "./places/pages/UserPlaces"

function App() {
  return (
    <Router>
      <MainNavigation />
      <main>
        <Routes>
          <Route path="/" element={<Users />} />
          <Route path="/:userId/places" element={<UserPlaces />} />
          <Route path="/places/new" element={<NewPlace />} />
        </Routes>
      </main>
    </Router>
  )
}

export default App
