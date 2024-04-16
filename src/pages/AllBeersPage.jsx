import { useEffect,useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";




function AllBeersPage() {
    const [beers, setBeers] = useState([])
    useEffect((beer) => {
        axios.get("https://ih-beers-api2.herokuapp.com/beers")
        .then(res => {
            setBeers(res.data)
        })

    }, [])
    if(beers.length === 0){
        return(
            <div>Loading......</div>
        )
    } else {
        return(
            <div className="container">
    {beers.map((beer) => (
        <div key={beer._id} className="row align-items-center mb-3 ">
        
            <div className="col-md-3 ">
                <img style={{maxWidth:"100px", height:"auto"}} className="img-fluid img-thumbnail beer-image" src={beer.image_url} alt={beer.name} />
            </div>
            <div className="col-md-9">
                <div className="beer-info ">
                    <h3 style={{color:"BLACK"}}>{beer.name}</h3>
                    <h5 style={{color:"grey"}}>{beer.tagline}</h5>
                    <p>  <strong>Created by :</strong> {beer.contributed_by}</p>
                    <Link to={`/beers/${beer._id}`} ><i classNma="fa fa-info-circle fa-2x" aria-hidden="true"></i></Link>
                </div>
            </div>
            <hr/>
            
        </div>
        
    ))}
</div>
    
        )
    }
    

}

export default AllBeersPage;
