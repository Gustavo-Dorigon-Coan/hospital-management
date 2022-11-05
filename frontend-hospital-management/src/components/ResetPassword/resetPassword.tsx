import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";

const password = require("../../assets/password.png");
const theme = createTheme();

export default function ResetPassword() {
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <img src={password} width={60} />
          <Typography component="h1" variant="h5">
            Redefinir Senha!!
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              name="currentPassword"
              label="Senha Atual"
              type="password"
              id="currentPassword"
              autoComplete="current-password"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Nova Senha"
              type="password"
              autoComplete="current-password"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Confirmar Senha"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <div>
              <Link to='/inbox' style={{ color: 'inherit', textDecoration: 'none' }}>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Salvar
                </Button>
              </Link>
            </div>
          </Box>
        </Box>
      </Container>
    </ThemeProvider >
  );
}