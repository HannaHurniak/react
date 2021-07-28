import React from 'react';
import {Route, Switch} from 'react-router-dom';
import ROUTES from './RouteNames';
import CounterContainers from './../pages/CounterPage/containers/CounterContainers';
import CounterOfCounter from './../pages/CounterOfCounter/containers/CounterOfCounter'
import ToDoListContainer from './../pages/ToDoList/container/ToDoListContainer'

const Routes = () => {
    return (
        <Switch>
            <Route path={ROUTES.COUNTER_PAGE} component={CounterContainers}/>
            <Route path={ROUTES.FUNCTIONAL_PAGE} component={CounterOfCounter}/>
            <Route path={ROUTES.TODO_LIST_PAGE} component={ToDoListContainer}/>
        </Switch>
    );
};

export default Routes;