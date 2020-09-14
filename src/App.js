import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

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
                        <li> <Link to="/manage/confirmados"> Confirmado </Link> </li>
                    </ul>
                </nav>

                <Switch>
                    <Route path="/sign-in"> <h1>Sign In</h1> </Route>
                    <Route path="/sign-up"> <h1>Sign Up</h1> </Route>
                    <Route path="/manage/confirmados/create"> <h1>Create Confirmado</h1> </Route>
                    <Route path="/manage/confirmados/edit"> <h1>Edit Confirmado</h1> </Route>
                    <Route path="/manage/confirmados"> <h1>Confirmado</h1> </Route>
                    <Route path="/"> <h1>Home</h1> </Route>
                </Switch>
            </div>
        </BrowserRouter>
    )
}

export default App;