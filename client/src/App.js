import React, { Component } from 'react';
import axios from 'axios';
import { saveAs } from 'file-saver';

import './App.css';

class App extends Component {
  state = {
    name: '',
    planName:'',
    ratePerDay:0,
    totalAplliances:0,
    total:0,
    tax:0,
    discount:0, 
    planDuration: '',
    securityDeposite:0,
    installionCharges:0,
    planRate:0,
    paymentLink:""
  }

  handleChange = ({ target: { value, name }}) => this.setState({ [name]: value })

  createAndDownloadPdf = () => {
    axios.post('/create-pdf', this.state)
      .then(() => axios.get('fetch-pdf', { responseType: 'blob' }))
      .then((res) => {
        const pdfBlob = new Blob([res.data], { type: 'application/pdf' });
        saveAs(pdfBlob, `${this.state.name}.pdf`);
      })
  }

  render() {
    return (
      <div className="App">
        <input type="text" placeholder="Name" name="name" onChange={this.handleChange}/>
        <input type="text" placeholder="planName" name="planName" onChange={this.handleChange} />
        <input type="number" placeholder="ratePerDay" name="ratePerDay" onChange={this.handleChange} />
        <input type="number" placeholder="totalAplliances" name="totalAplliances" onChange={this.handleChange} />
        <input type="text" placeholder="planDuration" name="planDuration" onChange={this.handleChange} />
        <input type="number" placeholder="planRate" name="planRate" onChange={this.handleChange} />
        <input type="number" placeholder="securityDeposite" name="securityDeposite" onChange={this.handleChange} />
        <input type="number" placeholder="installionCharges" name="installionCharges" onChange={this.handleChange} />
        <input type="number" placeholder="discount" name="discount" onChange={this.handleChange} />
        <input type="number" placeholder="tax" name="tax" onChange={this.handleChange} />
        <input type="number" placeholder="total" name="total" onChange={this.handleChange} /> 
        <input type="text" placeholder="paymentLink" name="paymentLink" onChange={this.handleChange} />
        
        <button onClick={this.createAndDownloadPdf}>Download PDF</button>
      </div>
    );
  }
}

export default App;
