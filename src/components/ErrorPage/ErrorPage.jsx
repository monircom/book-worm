import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            <p>Error Found</p>
            <Link to='/'><button>Home</button></Link>
        </div>
    );
};

export default ErrorPage;