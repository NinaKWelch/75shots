import React, { useEffect, useState } from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { Auth, Hub } from "aws-amplify"
import "./App.scss"
import Row from "react-bootstrap/Row"
import Header from "./components/Header"
import AdminDashboard from "./components/AdminDashboard"
import Donate from "./components/Donate"
import Productions from "./components/Productions"
import SignUp from "./components/SignUp"
import SignIn from "./components/SignIn"
import Home from "./components/Home"
import Footer from "./components/Footer"

const App = () => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const setAuthListener = async () => {
      Hub.listen("auth", (data) => {
        switch (data.payload.event) {
          case "signIn":
            console.log("user signed in")
            setUser(data.payload.data)
            break
          case "signOut":
            console.log("user signed out")
            setUser(null)
            break
          default:
            break
        }
      })
    }

    const checkUser = async () => {
      try {
        const currentUser = await Auth.currentAuthenticatedUser()
        currentUser ? setUser(currentUser) : setUser(null)
        console.log("CURRENT USER", currentUser)
      } catch (err) {
        console.log("fetch error:", err.message)
      }
    }

    setAuthListener()
    checkUser()
  }, [])

  return (
    <Router>
      <Row className="vh-100">
        <Header user={user} />

        <Switch>
          <Route path="/admin">
            <AdminDashboard />
          </Route>
          <Route path="/donate">
            <Donate />
          </Route>
          <Route path="/productions">
            <Productions />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/signin">
            <SignIn />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>

        <Footer />
      </Row>
    </Router>
  )
}

export default App
