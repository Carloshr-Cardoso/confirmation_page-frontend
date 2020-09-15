import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import SignIn from './screens/SignIn'
import SignUp from './screens/SignUp'
import Confirmados from './screens/manage/confirmados'
import Create from './screens/manage/confirmados/create'

const App = () =>{
    return (
        <BrowserRouter>
            <div>
                <nav>
                    <ul>
                        <li> <Link to="/sign-in"> Sign In </Link> </li>
                        <li> <Link to="/sign-up"> Sign Up </Link> </li>
                        <li> <Link to="/manage/confirmados/create"> Create Confirmado </Link> </li>
                        <li> <Link to="/manage/confirmados/edit"> Edit Confirmado </Link> </li>
                        <li> <Link to="/manage/confirmados"> Confirmados </Link> </li>
                    </ul>
                </nav>

                <Switch>
                    <Route path="/sign-in"> <SignIn/> </Route>
                    <Route path="/sign-up"> <SignUp/> </Route>
                    <Route path="/manage/confirmados/create"> <Create/> </Route>
                    <Route path="/manage/confirmados/edit"> <h1>Edit Confirmado</h1> </Route>
                    <Route path="/manage/confirmados"> <Confirmados/> </Route>
                    <Route path="/"> <h1>Home</h1> </Route>
                </Switch>
            </div>
        </BrowserRouter>
    )
}

export default App;