import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Logon from './pages/Logon'
import Register from './pages/Register'
import Profile from './pages/Profile'
import NewIncidents from './pages/NewIncidents'
import Uploader from './pages/Uploader'

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Logon}/>
                <Route  path="/register" component={Register}/>

                {/* <Route exact path="/profile" component={Profile}/> */}
                <Route   path="/profile/img/new" component={Uploader}/>

                <Route  exact path="/incidents/all" component={Profile}/>
                <Route   exact path="/incidents/my" component={Profile}/>
                <Route  path="/incidents/new" component={NewIncidents}/>

            </Switch>
        </BrowserRouter>
    )
}