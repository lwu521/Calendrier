import React, {Component} from 'react';
import moment from 'moment';


class Seances extends Component {

    constructor(props){
        super(props);
        this.state = {
          item: {},
          isLoaded: false,
        }
    }

    componentDidMount() {
        fetch('https://back.staging.bsport.io/api/v1/offer/?min_date='+moment().subtract(6,'days').format('YYYY-MM-DD')+'&max_date='+moment().format('YYYY-MM-DD')+'&company=6&page_size=30')
        .then(res => res.json()
            .then(json=> {
                this.setState({
                    isLoaded:true,
                    items:json,
                })
            })
        )
    }
    
    render(){
        var{isLoaded, items} = this.state;
        if (!isLoaded){
            return <div>Loading...</div>
        } 
        else { 
            return (
                <div style={{margin:'4%'}}>
                    <h2 style={{color:'#000080'}}>Les séances des 7 derniers jours</h2>
                    {items.results.map(item=>(
                        <li>
                            Début de la séance : {item.date_start}
                            <br/>
                            Durée de la séance (min) : {item.duration_minute} 
                            <br/>
                            Effectif : {item.effectif}
                        </li>
                    ))}
                </div>
            );
        }
    }

}
  
export default Seances;