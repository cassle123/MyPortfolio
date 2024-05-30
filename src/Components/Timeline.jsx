import PropTypes from "prop-types";

Timeline.propTypes = {
  icon: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};

function Timeline({ icon, company, title, year, desc }) {
  return (
    <div className="timeline-item">
      <i className={icon}></i>
      <span className="timeline-date">{year}</span>
      <p className="timeline-company">{company}</p>
      <h3 className="timeline-title">{title}</h3>
      <p className="timeline-text">{desc}</p>
    </div>
  );
}

export default Timeline;
