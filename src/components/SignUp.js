import axios from "axios";
import { useNavigate } from 'react-router-dom';


function SignUp(props) {
    const navigate = useNavigate();

    const {email, setEmail, username, setUsername, password, setPassword} = props;

    const handleSignup = async () => {
        try {
          const response = await axios.post(`${process.env.REACT_APP_BASE_API_URL}/api/signup`, { email, username, password });
          alert('User registered successfully');
          navigate("/login");
          console.log("🚀 ~ file: App.js:26 ~ handleSignup ~ response:", response)
        } catch (error) {
          alert('Error registering user');
        }
    };

    return (
        <div>
        <h2>Sign Up</h2>
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleSignup}>Sign Up</button>
      </div>
    );
  }
  
export default SignUp;
  