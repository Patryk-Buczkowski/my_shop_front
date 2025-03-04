import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
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
        >
          Log in
        </Button>
      </Link>

      <p className="mb-2">If not :</p>

      <Link to="/register">
        <Button
          sx={{ borderRadius: "100%", width: "100%" }}
          variant="contained"
          size="large"
        >
          Register
        </Button>
      </Link>
    </div>
  );
};

export default Home;
