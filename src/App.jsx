import { useState } from "react";
import { AppRoutes } from "./routes";
import { NavBar } from "./components/nav-bar";


function App() {

  const [user, setUser] = useState(null);

  const handleLogin = () => setUser({login: "token"});

  const handleLogout = () => setUser(null);

    return (
      <>
      <div className="App">

        <AppRoutes user={user} />
  
      </div>
      </>
    );
  }
  

export default App;
