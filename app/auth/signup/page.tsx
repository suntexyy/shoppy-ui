import { Button, Stack, TextField } from "@mui/material";
import Link from "next/link";

const SignUp = () => {
  return (
    <div>
      <Stack spacing={2} className="w-full max-w-xs">
        <TextField label="Email" variant="outlined" type="email" />
        <TextField label="Password" variant="outlined" type="password" />
        <Button variant="contained">SignUp</Button>
        <Link href="/auth/login">Login</Link>
      </Stack>
    </div>
  );
};

export default SignUp;
