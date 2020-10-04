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
import ListAllConfirmados from './screens/admin/listAllConfirmados'

const App = () =>{
    const TITLE = "HOME"
    return (
        <React.Fragment>
            <Helmet>
                <title>{ TITLE }</title>
            </Helmet>
            <BrowserRouter>
                <div>
                    <Switch>
                        <Route path="/admin/list"> <ListAllConfirmados/> </Route>
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