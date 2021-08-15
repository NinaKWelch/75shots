import React, { useEffect, useState } from "react"
import { BrowserRouter as Router } from "react-router-dom"
import { Auth, Hub } from "aws-amplify"
import "./App.scss"
import Row from "react-bootstrap/Row"
import Header from "./components/Header"
import Routes from "./components/Routes"
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
      <Row className="vh-100 align-items-start">
        <Header user={user} />
        <Routes user={user} />
        <Footer />
      </Row>
    </Router>
  )
}

export default App
