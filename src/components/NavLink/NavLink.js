export default function NavLink(props) {
  return (
    <div className="nav-link">
      <a href={props.link}>
        <div className="link">
          <p>{props.text}</p>
        </div>
      </a>
    </div>
  );
}
