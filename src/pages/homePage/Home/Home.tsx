import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLoggedStore } from "../../../zustand/useLogged";

const Home: React.FC = () => {
  const [isLogged, setIsLogged] = useState(false);
  const { logged } = useLoggedStore();

  useEffect(() => {
    setIsLogged(logged.name !== "" ? true : false);
  }, [logged.name]);

  return (
    <div className="w-full">
      <h1 className="mb-2 text-center">Welcome to</h1>

      <img
        className="h-45 m-auto mb-3 rounded-full
    "
        src="./logo/Shop_logo14.jpg"
        alt="logo"
      />

      <p className="mb-2">If You are registered :</p>

      <Link to={"/login"}>
        <Button
          sx={{ borderRadius: "100%", width: "100%" }}
          variant="contained"
          size="large"
          disabled={isLogged}
        >
          {isLogged ? "You are logged" : "Log in"}
        </Button>
      </Link>

      <p className="mb-2">If not :</p>

      <Link to="/register">
        <Button
          sx={{ borderRadius: "100%", width: "100%" }}
          variant="contained"
          size="large"
          disabled={isLogged}
        >
          Register
        </Button>
      </Link>
    </div>
  );
};

export default Home;
