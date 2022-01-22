import React from "react";
import {Route, Switch, Redirect} from "react-router-dom";
import {HomePage} from "./pages/HomePage";
import {AuthPage} from "./pages/AuthPage";


export const useRoutes = isAuthenticated => {
    if(isAuthenticated){
        return(
            <Switch>
                <Route path = "/home" exact>
                    <HomePage />
                </Route>
                <Redirect to="/home/" />
            </Switch>
        )
    }
    return (
        <Switch>
            <Route path="/home" exact>
                <HomePage />
            </Route>
            <Route path="/auth" exact>
                <AuthPage />
            </Route>
            <Redirect to="/home" />
        </Switch>
    )
}