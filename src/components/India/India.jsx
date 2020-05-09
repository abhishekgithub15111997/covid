import React from 'react';
import { Card} from "react-bootstrap";
import Statedata from './Statedata';
import axios from 'axios';
import ind from '../../images/ind.png';
import Footer from '../Footer/Footer';


class India extends React.Component {
    constructor() {
        super();
        this.state = {
          data: {}
        }
      }
      async componentDidMount() {
        // const data= await fetchData();
        axios.get('https:/corona.lmao.ninja/v2/countries/india').then(response => {
    
          this.setState({ data: response.data });
        });
    
      }
    render() {
        return (
            <div>
                <div className="col-md-12 img">
                    {/* <h3 style={{ width: '18rem', marginLeft:'50px' }}>INDIA</h3> */}
                    <img  src={ind} alt="corona-update" style={{ width: '18rem' , marginLeft:80,marginBottom:10, height:200, width:200 }}/>
                    {/* <img  src={covid} alt="corona-update" style={{}}/> */}
                </div>
                <div className="col-md-12">
                    <div className="row">
                        <div className="col-md-3">
                            <Card className="badge badge-primary" style={{ width: '18rem', marginLeft:'50px' }}>
                                <Card.Body className="text-center">
                                    <Card.Title>Total Cases</Card.Title>
                                    <h3>{ this.state.data.cases}</h3>
                                    <Card.Text>
                                    
                                     </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                      
                        <div className="col-md-3">
                            <Card className="badge badge-warning" style={{ width: '18rem', marginLeft:'50px' }}>
                                <Card.Body className="text-center">
                                    <Card.Title>Active Cases</Card.Title>
                                    <h3>{this.state.data.active}</h3>
                                    <Card.Text>
                                      
                                     </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-md-3">
                            <Card className="badge badge-success" style={{ width: '18rem', marginLeft:'50px' }}>
                                <Card.Body className="text-center">
                                    <Card.Title>Recovered</Card.Title>
                                    <h3>{this.state.data.recovered}</h3>
                                    <Card.Text>
                                   
                                     </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-md-3">
                            <Card className="badge badge-danger" style={{ width: '18rem', marginLeft:'50px' }}>
                                <Card.Body className="text-center">
                                    <Card.Title>Deaths</Card.Title>
                                    <h3>{this.state.data.deaths}</h3>
                                    <Card.Text>
                                      
                                     </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
 
                    <div className="col-md-12">
                        <Statedata/>
                    </div>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default India;
