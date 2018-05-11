import React from 'react';

export default class App extends React.Component {
  // your Javascript goes here
  constructor(props) {
    super(props);
    this.state={
      balance: '',
      rate: '',
      term: '15',
      output: null
    }
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleOnChange(event) { //manages the change of input and name, sets new state
    this.setState({[event.target.name]: event.target.value})
  }
  
  handleSubmit (event) {
    event.preventDefault();
    const P = parseFloat(this.state.balance);
    const r = parseFloat(this.state.rate)/100/12;
    const n = parseInt(this.state.term)*12;
    const M = P * (r * ((1 + r) ** n)) / (((1 + r) ** n) - 1);
    this.setState({
      output: Math.ceil(M * 100) / 100
    })
  }
   
  render() {
    return (
      <div className='container'>
        <h3 className='title'>Mortgage Calculator</h3>
        <form className="form-horizontal" onSubmit={this.handleSubmit}>

          <div className="form-group">
            <label className="col-sm-2 control-label">Loan Balance</label>
            <div className="col-sm-10">
              <input name='balance' type='number' className='form-control' 
              placeholder='Loan Balance' value={this.state.balance} onChange={this.handleOnChange} />
            </div>
          </div>

          <div className="form-group">
            <label className="col-sm-2 control-label">Interest Rate (%)</label>
            <div className="col-sm-10">
              <input name='rate' type='number' step='0.01' className='form-control' 
              placeholder='APR %' value={this.state.rate} onChange={this.handleOnChange} />
            </div>
          </div>

          <div className="form-group">
            <label className="col-sm-2 control-label">Loan Term (years)</label>
            <div className="col-sm-10">
              <select name='term' className='form-control' 
              value={this.state.term} onChange={this.handleOnChange}>
                <option value='15'>15 Years</option>
                <option value='30'>30 Years</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <div className="col-sm-offset-2 col-sm-10">
              <button name="submit" className="btn btn-primary">CALCO PUNCH!!!</button>
            </div>
          </div>

          <div className="form-group">
            <div className="col-sm-offset-2 col-sm-10">
              <div id='output' value={this.state.output}>
                <h3>Monthly Payment: ${this.state.output}</h3> 
              </div>
            </div>
          </div>

        </form>
      </div>
    );
  }
}
