import React from 'react';
import './base.scss';

export default React.createClass({
  getInitialState: () => {
    return {
      newJob: '',
      jobs: []
    };
  },
  addJob: function(e) {
    e.preventDefault();
    this.setState(
      {
        jobs: this.state.jobs.concat({
          name: this.state.newJob,
          time: 0,
          stamp: 0
        })
      }
    );
    return;
  },
  handleNewJobChange: function(e) {
    this.setState({newJob: e.target.value});
  },
  render() {
    return (
      <div className="Base">
        <h1 className="Demo__header">Bye T:mesheets</h1>

        <form onSubmit={this.addJob}>
          <input type="text" name="newJob" placeholder="Add Job"
            value={this.state.newJob}
            onChange={this.handleNewJobChange}/>
        </form>
      </div>
    );
  }
});
