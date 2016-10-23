function JobList(props) {
  const jobItems = props.jobs
    .filter(job => {
      return !props.filter || 
        job.selected ||
        job.name.indexOf(props.filter) !== -1;
    })
    .map(job =>
      <Job job={job}></Job>
    );
  return (
    <ul className="Jobs">{jobItems}</ul>
  );
}

function Job(props) {
  const job = props.job;
  return (
    <li key={job.stamp}
        className="Job {job.selected ? 'selected' : ''}"
        onClick={job.click}>
      <div className="circle">
        <p>{job.name}</p>
        <p>
          <span>{ Math.floor(job.time / 60 / 60) } h </span>
          <span>{ Math.floor(job.time / 60 % 60) } m </span>
          <span>{ Math.floor(job.time % 60 % 60) } s </span>
        </p>
      </div>
    </li>
  );
}

export default JobList;