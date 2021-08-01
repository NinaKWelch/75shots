import React, { useEffect, useState } from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { Auth /*, Hub*/ } from "aws-amplify"
import "./App.scss"
import Header from "./components/Header"
import SignUp from "./components/SignUp"
import SignIn from "./components/SignIn"
import Productions from "./components/Productions"
import Home from "./components/Home"
//const initialFormState = { username: "", email: "", password: "", authCode: "", formType: "signUp" }

const App = () => {
  //const [formState, setFormState] = useState(initialFormState)
  const [user, setUser] = useState(null)
  //const { formType } = formState
  
  useEffect(() => {
    /*const setAuthListener = async () => {
      Hub.listen("auth", (data) => {
        switch(data.payload.event) {
          case "signIn":
            console.log("user signed in")
            break;
          case "signOut":
            // setFormState(() => ({ ...formState, formType: "signUp" }))
            console.log("user signed out")
            break;
          default: 
            break;
        }
      })
    }
    */

    const checkUser = async () => {
      try {
        const currentUser = await Auth.currentAuthenticatedUser()
        console.log("CURRENT USER", currentUser)
        setUser(currentUser)
        // setFormState(() => ({ ...formState, formType: "signedIn" }))
      } catch (err) {
        // setUser(null)
      }
    }

    //setAuthListener()
    checkUser()
  }, [])

 /*const onChange = e => {
    e.persist()
    setFormState(() => ({ ...formState, [e.target.name]: e.target.value }))
  }

  const signUp = async () => {
    const { username, email, password } = formState
    await Auth.signUp({ username, password, attributes: { email }})
    setFormState(() => ({ ...formState, formType: "confirmSignUp" }))
  }

  const confirmSignUp = async () => {
    const { username, authCode } = formState
    await Auth.confirmSignUp({ username, authCode })
    setFormState(() => ({ ...formState, formType: "signIn" }))
  }

  const signIn = async () => {
    const { username, password } = formState
    await Auth.signIn({ username, password })
    setFormState(() => ({ ...formState, formType: "signedIn" }))
  }
  */

  return (
    <Router>
      <Header user={user} />
      
      
      <Switch>
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
          {/*<div>
            {formType === "signUp" && (
              <div>
                <input name="username" onChange={onChange} placeholder="username" />
                <input name="password" type="password" onChange={onChange} placeholder="password" />
                <input name="email" onChange={onChange} placeholder="email" />
                <button onClick={signUp}>Sign Up</button>
                <button onClick={() => setFormState(() => (
                  { ...formState, formType: "signIn" }
                ))}>
                Sign In
                </button>
              </div>
            )}
            {formType === "confirmSignUp" && (
              <div styles={{ paddingTop: 100 }}>
                <input name="authCode" onChange={onChange} placeholder="confirmation code" />
                <input name="password" type="password" onChange={onChange} placeholder="password" />
                <button onClick={confirmSignUp}>Confirm Sign Up</button>
              </div>
            )}
            {formType === "signIn" && (
              <div styles={{ paddingTop: 100 }}>
                <input name="username" onChange={onChange} placeholder="username" />
                <input name="password" type="password" onChange={onChange} placeholder="password" />
                <button onClick={signIn}>Sign In</button>
                <button onClick={() => setFormState(() => (
                  { ...formState, formType: "signUp" }
                ))}>
                Sign Up
                </button>
              </div>
            )}
            {formType === "signedIn" && (
              <div styles={{ paddingTop: 100 }}>
                <h1>Hello</h1>
                <button onClick={() => Auth.signOut()}>Sign Out</button>
              </div>
            )}
          </div>*/}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
