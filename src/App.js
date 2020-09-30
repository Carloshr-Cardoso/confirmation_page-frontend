import React from 'react';
import { Helmet } from 'react-helmet'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import SignIn from './screens/SignIn';
import SignUp from './screens/SignUp';
import Confirmados from './screens/manage/confirmados';
import Crud from './screens/manage/confirmados/crud';
import List from './screens/manage/confirmados/list';
import Home from './screens/home';
import ConfirmeConvidado from './screens/confirmeConvidado';

const App = () =>{
    const TITLE = "HOME"
    return (
        <React.Fragment>
            <Helmet>
                <title>{ TITLE }</title>
            </Helmet>
            <BrowserRouter>
                <div>
                    {/* <nav>
                        <ul className="list-group list-group-horizontal">
                            <li className="list-group-item"> <Link to="/sign-in"> Sign In </Link> </li>
                            <li className="list-group-item"> <Link to="/sign-up"> Sign Up </Link> </li>
                            <li className="list-group-item"> <Link to="/manage/confirmados/create"> Create Confirmado </Link> </li>
                            <li className="list-group-item"> <Link to="/manage/confirmados/edit"> Edit Confirmado </Link> </li>
                            <li className="list-group-item"> <Link to="/manage/confirmados"> Confirmados </Link> </li>
                        </ul>
                    </nav> */}

                    <Switch>
                        <Route path="/sign-in"> <SignIn/> </Route>
                        <Route path="/sign-up"> <SignUp/> </Route>
                        <Route path="/manage/confirmados/create"> <Crud/> </Route>
                        <Route path="/manage/confirmados/list"> <List/> </Route>
                        <Route path="/manage/confirmados"> <Confirmados/> </Route>
                        <Route path="/manage"> <ConfirmeConvidado/> </Route>
                        <Route path="/"> <Home/> </Route>
                    </Switch>
                </div>
            </BrowserRouter>
        </React.Fragment>
    )
}

export default App;