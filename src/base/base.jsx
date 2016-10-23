import React from 'react';
import './base.scss';
import JobList from './jobList.jsx';

function syncJobs(jobs) {
  localStorage.setItem('jobs', JSON.stringify(jobs));
}

export default React.createClass({
  getInitialState: () => {
    return {
      newJob: '',
      jobsFilter: '',
      jobs: JSON.parse(localStorage.getItem('jobs') || '[]')
    };
  },
  addJob: function(e) {
    e.preventDefault();
    const id = new Date().getTime();
    const jobs = this.state.jobs.concat({
      name: this.refs.addJob.value,
      time: 0,
      id: id,
      stamp: id, // only initialized to id
      click: this.selectJob(id)
    });
    this.setState({ jobs: jobs });
    syncJobs(jobs);
    return;
  },
  clearJobs: function() {
    this.setState({ jobs: []});
    syncJobs([]);
  },
  filterJobs: function(e) {
    this.setState({jobsFilter: e.target.value});
  },
  selectJob: (id) => () => {
    console.log(this, id);
  },
  render() {
    return (
      <div className="Base">
        <h1 className="Demo__header">Bye T:mesheets</h1>

        <form onSubmit={this.addJob}>
          <input type="text" name="newJob" placeholder="Add Job" ref="addJob"/>
        </form>

        <input type="text"
            placeholder="Filter Jobs"
            value={this.state.jobFilter}
            onChange={this.filterJobs}/>

        <button type="button"
            onClick={this.clearJobs}>
          Clear Jobs
        </button>

        <JobList jobs={this.state.jobs}
            filter={this.state.jobsFilter}></JobList>
      </div>

    );
  }
});
