import { Button } from "@mui/material";

export const Home: React.FC = () => {
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

      <Button
        sx={{ borderRadius: "100%", width: "100%" }}
        variant="contained"
        size="large"
      >
        Log in
      </Button>

      <p className="mb-2">If not :</p>

      <Button
        sx={{ borderRadius: "100%", width: "100%" }}
        variant="contained"
        size="large"
      >
        Register
      </Button>
    </div>
  );
};
