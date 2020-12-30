import React from 'react';
import axios from 'axios';

class World extends React.Component
{
constructor(props)
{
    super(props);
this.state ={
    data : []

}

}

componentDidMount()
{
axios.get("https://corona.lmao.ninja/v2/countries").then(response=>{

this.setState({data:response.data});

})
}

render()
{
    return(
<div className="row">
<div className="col-md-12">
<table className="table table-bordered table-striped table-primary">
<thead>
<tr>
<td>Country Name</td>
<td>Total cases</td>
<td>Active Cases</td>
<td>Recovered Cases</td>
<td>Total Deaths</td>
</tr>
</thead>
<tbody>
{
    this.state.data.map((itm, k)=>{
        return(
            <tr>
            <td>{itm.country}
            <img alt="country logo" style={{height:'50px', marginLeft:'10px'}} src={itm.countryInfo.flag} />
            </td>
            <td>{itm.cases}</td>
            <td>{itm.active}</td>
            <td>{itm.recovered}</td>
            <td>{itm.deaths}</td>
            </tr>
        )
    })
}
</tbody>
</table>
</div>
</div>

    )
}

}

export default World;