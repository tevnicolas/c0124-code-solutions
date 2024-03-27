import './NotFound.css';
import { Link } from 'react-router-dom';

export function NotFound() {
  return (
    <div className="Header-content">
      <div className="row">
        <Link to="/">
          <div className="col text-center text-muted mb-5">
            <h3>Uh oh, we could not find the page you were looking for!</h3>
            Return to the Dashboard
          </div>
        </Link>
      </div>
    </div>
  );
}
