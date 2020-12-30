import React from 'react';
import axios from 'axios';
import {Accordion, Card, Button} from 'react-bootstrap';


class Statedata extends React.Component
{
constructor(props)
{
        super(props);
        this.state ={
        stateData : {}
        }
}

componentDidMount()
{
    axios.get("https://api.covid19india.org/state_district_wise.json").then(response=>{
        this.setState({stateData:response.data})
    })
}


render()
{

    let keys = Object.keys(this.state.stateData); // convert keynames to array

    //for(x in )


    return(
        
    <div>
    
    <Accordion defaultActiveKey="0">
    {
        keys.map((itm, k)=>{

            let districts = this.state.stateData[itm].districtData;
            let dist_keys = Object.keys(districts); // convert keynames to array
            let total_active = 0;
            let total_confirmed = 0;
            let total_recovered = 0;
            let total_death = 0;
            let district_list = [];

            for(let x in districts)
            {
                total_active += districts[x].active;
                total_confirmed += districts[x].confirmed;
                total_recovered += districts[x].recovered;
                total_death += districts[x].deceased;

                let ob = districts[x];
                ob["district_name"] = x;

                 district_list.push(ob);

            }

            return(
                <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="primary" eventKey={k}>
                   {itm} - <span className="text-warning mr-2">Total cases {total_confirmed} </span>, <span className="text-warning mr-2">Total Active {total_active}</span>, 
                   <span className="text-warning mr-2">Total Recovered {total_recovered}</span>, <span className="text-warning mr-2"> Total Death {total_death}</span>
                  </Accordion.Toggle>
                </Card.Header> 
                <Accordion.Collapse eventKey={k}>
                  <Card.Body>
                  
                  <table className="table table-bordered table-stiped">
                  <thead>
                  <tr>
                  <th>District</th>
                  <th>Confirmed</th>
                  <th>Active</th>
                  <th>Recovered</th>
                  <th>Deaths</th>
                  </tr>
                  </thead>

                    <tbody>
                    {
                        district_list.map((itm, k)=>{

                            return(
                                <tr>
                                <td>{itm.district_name}</td>
                                <td>{itm.confirmed}</td>
                                <td>{itm.active}</td>
                                <td>{itm.recovered}</td>
                                <td>{itm.deceased}</td>
                                </tr>
                               
                            )

                        })
                    }
                    
                    </tbody>

                  </table>
                  
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            )


        })
    }
  
   
  </Accordion> 
    
    
    
    </div>

    )
}

}

export default Statedata;