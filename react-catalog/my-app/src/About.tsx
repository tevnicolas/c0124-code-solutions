import { Link } from 'react-router-dom';

export function About() {
  return (
    <Link to="/" className="link">
      <div>
        <p style={{ color: 'black' }}>
          The about page. Click here to return home.
        </p>
      </div>
    </Link>
  );
}
