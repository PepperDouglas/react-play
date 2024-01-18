
import { Link, useNavigate } from 'react-router-dom';

const Routing = () => {

    const navigate = useNavigate();

    return(
        <div>
            <Link to="/">Built in link</Link>
            <button onClick={() => navigate('/')}>Another link</button>
        </div>
    )
}

export default Routing;