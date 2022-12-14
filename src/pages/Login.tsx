import { useNavigate } from "react-router-dom";

export default () => {
    const navigate = useNavigate();

    const click = () => {
        navigate("/");
    };

    return (
        <div>
            <h1>Login</h1>
            <button onClick={click}>Login</button>
        </div>
    );
};
