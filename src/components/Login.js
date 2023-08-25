import axios from "axios";
import { useNavigate } from 'react-router-dom';

function Login(props) {
    const navigate = useNavigate();
    const {email, password,setEmail, setPassword, setIsSignedIn, setToken} = props;

    const handleLogin = async () => {
        try {
          const response = await axios.post(`${process.env.REACT_APP_BASE_API_URL}/api/login`, { email, password });
          setToken(response.data.token);
          if (response.status === 200) {
            alert('Login Successful');

            setIsSignedIn(true);
            navigate("/");
          }
          console.log("🚀 ~ file: App.js:37 ~ handleLogin ~ response:", response)
        } catch (error) {
          alert('Invalid credentials');
        }
      };

    return (
        <div>
            <h2>Login</h2>
              <input
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            <button onClick={handleLogin}>Login</button>
        </div>
    );
  }
  
export default Login;
  