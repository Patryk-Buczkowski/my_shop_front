import { useNavigate, useSearchParams } from "react-router-dom";
import Button from "@mui/material/Button/Button";

const RegisterResult: React.FC = () => {
  const [URLSearchParams] = useSearchParams();
  const isSuccess = URLSearchParams.get("success");
  const navigate = useNavigate();

  return (
    <>
      {isSuccess === "true" ? (
        <p className="m-auto text-center font-extrabold text-[var(--color-primary)]">
          User created successfully
        </p>
      ) : (
        <p className="m-auto text-center font-extrabold text-[var(--color-error)]">
          Error in creating user
        </p>
      )}

      <Button
        onClick={() => navigate("/home", { replace: true })}
        sx={{ borderRadius: "100%", width: "100%" }}
        variant="contained"
        size="large"
      >
        Back 🏡
      </Button>
    </>
  );
};

export default RegisterResult;
