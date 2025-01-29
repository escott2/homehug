import { Header } from "../../components";
import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <>
      <Header />
      <h1>Oops! Something went wrong.</h1>
      <p>
        We're sorry, but the page you're looking for doesn't exist or is
        currently unavailable.
      </p>
      <p>
        Please try refreshing the page or returning to the{" "}
        <Link to="/">Home Page</Link>
      </p>
    </>
  );
}

export default ErrorPage;
