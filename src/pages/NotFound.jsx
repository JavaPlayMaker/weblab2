import { Link } from "react-router-dom";

export default function NotFound404() {
    return (
    <div style={{ textAlign: 'center', padding: '4rem' }}>
    <h1>404 - Page Not Found</h1>
      <p>Page doenst exist in our dimension</p>
      <Link to="/" style={{ color: '#0070f3', textDecoration: 'underline' }}>
        Go back home
      </Link>
    </div>
  );
}