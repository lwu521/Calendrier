import React, {Component} from 'react';


class SeancesF extends Component {

    constructor(props){
      super(props);
      this.state = {
        item: {},
        isLoaded: false,
      }
    }

    componentDidMount() {
      fetch(`https://back.staging.bsport.io/api/v1/offer/?date=${this.props.date}&company=6&page_size=30`)
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
          <div>
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
  
export default SeancesF;