import React, { Component } from 'react';
import Axios from 'axios';
import {Map, CircleMarker, TileLayer} from 'react-leaflet';

class MapExample extends Component{
    state={
        incidents:[]
      }
    
      componentDidMount(){
        this.getData();
      }
      async getData(){
      const res=await Axios.get("https://covid19.mathdro.id/api/deaths");
      this.setState({
        incidents:res.data.filter(row=> row.lat !== null)
      })
      
      }
    render(){
        return(
            <div className="App-map">
                <Map 
                style={{height:"300px",width:"100%"}}
                zoom={1}
                center={[-0.09,51.505]}
                >
                <TileLayer url="http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                
                {
                this.state.incidents.map((city,i) => {
                    return (
                    <CircleMarker 
                    key={i} 
                    center={[city.lat, city.long]} 
                    readius={20 * Math.log(city.deaths / this.state.total)}
                    fillOpacity={0.5}
                    fillColor={"red"}
                    stroke={false}
                    />
                    )
                })
                }
                </Map>
            </div>
        )
    }
}
export default MapExample;