const Experience = (props) => {
  return (
    <>
      <div className="flex space-between">
        <div>
          <h3 className="m-4">{props.role}</h3>
          <p className="m-4">{props.company}</p>
        </div>
        <div>
          <p className="m-4">{props.type}</p>
          <p className="m-4">{props.duration}</p>
        </div>
      </div>

      {props.descriptions.map((description) => (
        <p>{description}</p>
      ))}

      <div className="badge-container">
        {props.skills.map((skill) => (
          <span className="badge">{skill}</span>
        ))}
      </div>
    </>
  );
};

export default Experience;
