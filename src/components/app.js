import 'materialize-css/dist/css/materialize.min.css';
import React, {Component} from 'react';
import axios from 'axios';
import List from './list';
import AddItem from './add_item';
import dummyListData from '../dummy_data/list_data';

const BASE_URL = 'http://api.reactprototypes.com';
const API_KEY = '?key=george_trendafilov'; 

class App extends Component{
    state = {
        list: [],
        error: ''
    }

    componentDidMount(){
        this.getListData();
    }

    async getListData(){
        //Call server to get data
        // http://api.reactprototypes.com/todos?key=somekey;

        try{
            const resp = await axios.get(`${BASE_URL}/todos${API_KEY}`);

            this.setState({
                list: resp.data.todos
            });
        } catch(err){
            this.setState({
                error: 'Error retrieving list data'
            });
        }

        const resp = await axios.get(`${BASE_URL}/todos${API_KEY}`);

        this.setState({
            list: resp.data.todos
        });



        // const resp = axios.get(`${BASE_URL}/todos${API_KEY}`).then((resp)=>{

        //     this.setState({
        //         list:resp.data.todos
        //     })

        // }).catch((err)=>{
        //     console.log('Get List Data Error', err.message);
        //     this.setState({
        //         error: 'Error retreiving list data'
        //     });
        // });


    }

    addItem = async (item)=>{
        await axios.post(`${BASE_URL}/todos${API_KEY}`, item);
        
        this.getListData();

    }

    deleteItem = async id =>{
        console.log('Delete Item ID', id);

        await axios.delete(`${BASE_URL}/todos/${id + API_KEY}`);

        this.getListData();
    }

    render(){
        const {list, error} = this.state;
        console.log(list);

        return(
    <div className="container">
    <h1 className="center">To Do App</h1>
            <AddItem add={this.addItem}/>
            <p className="red-text">{error}</p>
            <List data={list} delete={this.deleteItem}/>
    </div>
        );
    }
}

export default App;
