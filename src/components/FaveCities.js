import React, {Component} from 'react';
import axios from "axios";

export default class FaveCities extends Component{

constructor(){
    super()
    this.state = {
        city: ""
    }
       this.handleSaveCity = this.handleSaveCity.bind(this); 
      
}
handleSaveCity(){

axios.post('/api/fave',{city: this.state.city}).then(
    results => {console.log(results);}
)
}

render(){
    console.log(this.state.city)
    return(
        <div>
       
        </div>
    )
}
  
}