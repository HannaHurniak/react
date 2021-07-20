import React from 'react';
import {Route, Switch} from 'react-router-dom';
import ROUTES from './RouteNames';
import CounterContainers from './../pages/CounterPage/containers/CounterContainers';
import HomePageContainer from './../pages/CounterPage/HomePage/containers/HomePageContainer';
// import FunctionalCounterContainers from './../pages/FunctionalCounter/container/FunctionalCounterContainer';
import CounterOfCounter from './../pages/CounterOfCounter/containers/CounterOfCounter'

const Routes = () => {
    return (
        <Switch>
            <Route exact path={ROUTES.HOME_PAGE} component={HomePageContainer}/>
            <Route path={ROUTES.COUNTER_PAGE} component={CounterContainers}/>
            {/* <Route path={ROUTES.FUNCTIONAL_PAGE} component={FunctionalCounterContainers}/> */}
            <Route path={ROUTES.FUNCTIONAL_PAGE} component={CounterOfCounter}/>
        </Switch>
    );
};

export default Routes;