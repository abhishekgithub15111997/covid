import React, { Component } from 'react';
import { Accordion, Card, Button, Table } from "react-bootstrap";
import Axios from 'axios';
class Statedata extends Component {
  constructor() {
    super();
    this.state = {
      stateData: {}
    }
  }
  async componentDidMount() {
    // const data= await fetchData();
    Axios.get('https://api.covid19india.org/state_district_wise.json').then(response => {

      console.log(response.data);
      this.setState({ stateData: response.data });
    });

  }
  render() {
    let keys = Object.keys(this.state.stateData);
    return (
      <div>
      <div className="row">
        <div className="col-md-12" style={{ width: '18rem', margin: '50px' }}>
          <Accordion >
            {
              keys.map((itm, ky) => {
                let districts = this.state.stateData[itm].districtData;
                let district_keys = Object.keys(districts);
                let total_active = 0;
                let total_confirmed = 0;
                let total_deaths = 0;
                let total_recover = 0;

                let district_list = [];
                for (let x in districts) {
                  total_active += districts[x].active;
                  total_confirmed += districts[x].confirmed;
                  total_deaths += districts[x].deceased;
                  total_recover += districts[x].recovered ;
                  let ob = districts[x];
                  ob["districts_name"] = x;
                  district_list.push(ob);
                }
                console.log(district_list);
                return (
                  <div className="container">
                  <Card>
                    <Card.Header>
                      <Accordion.Toggle as={Button} variant="dark" eventKey={ky}>
                        {itm} -<span className="btn-primary p-1 mr-2"> Total Cases - {total_confirmed}</span>
                        <span className="btn-warning p-1 mr-2"> Active {total_active}</span>
                        <span className="btn-success p-1 mr-2"> Recovered {total_recover}</span>
                        <span className="btn-danger p-1 mr-2"> Deaths {total_deaths}</span>
                      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey={ky} >
                      <Card.Body >
                        
                        <Table striped bordered hover >
                          <thead>
                          <tr>
                        <td>District</td>
                        <td>Confirmed</td>
                        <td>Active</td>
                        <td>Recovered</td>
                        <td>Deaths</td>
                      </tr>
                          </thead>
                          <tbody>
                          {
                            district_list.map((itm,ky)=>{
                              return(
                                  <tr>
                                    <td>{itm.districts_name}</td>
                                    <td>{itm.confirmed}</td>
                                    <td>{itm.active}</td>
                                    <td>{itm.recovered}</td>
                                    <td>{itm.deceased}</td>
                                  </tr>
                              )
                            })
                          }
                          </tbody>
                        </Table>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                  </div>

                )
              })

            }
          </Accordion>
        </div>
      </div>
      </div>
    );
  }
}

export default Statedata;
