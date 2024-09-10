import NavLink from "../NavLink/NavLink";
import "./Nav.css";

export default function Nav(props) {
  let links = [...props.links];
  return (
    <div className="nav">
      <div className="nav-text">
        <p className="name">Quinn Sweeney</p>
        <p className="subtext">
          Managment Information Systems & Computer Science Student
        </p>
      </div>
      <div className="nav-links">
        {links.map((e) => (
          <NavLink link={e.link} text={e.text} />
        ))}
      </div>
    </div>
  );
}
