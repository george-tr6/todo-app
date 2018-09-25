import 'materialize-css/dist/css/materialize.min.css'
import {Route, Switch} from 'react-router-dom';
import React, {Component} from 'react';
import axios from 'axios';
import AddItem from './add_item';
import List from './list';
import Details from './details';
import NotFound from './not_found';


const BASE_URL = 'http://api.reactprototypes.com';
const API_KEY = '?key=msalvatikey';

class App extends Component {

    deleteItem = async id => {
        console.log('Delete Item ID: ', id);

        await axios.delete(`${BASE_URL}/todos/${id + API_KEY}`);

        this.getListData();

    }

    render() {
        return (
            <div className="container">
            <Switch>
                <Route exact path="/" component={List} />
                <Route path="/add-item" component={AddItem} />
                <Route path='/item/:itemId' component={Details} />
                <Route component={NotFound}/>
            </Switch>   
            </div>
        );
    }
}

export default App;
