import React, { Component } from 'react'
import axios from 'axios'
// import {Link} from 'react-router-dom'
 

class Artists extends Component {

    state = {
      artists: []
    }

    getArtist=()=>{
        axios.get("/api/tunr_app/artists").then((res)=>{
          this.setState({artists: res.data})
        })
      }
    
      componentDidMount=()=> {
        this.getArtist()
      }

    render() {
        return (
            <div>
                <h1>Artists</h1>
                {
                    this.state.artists.map(artist => {
                        return(
                        <div key={artist._id}>
                    
                        {artist.name}
                        </div>
                        )
                        
                }

        )
            }
        </div>
        )
}
}

export default Artists;