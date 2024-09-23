import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import DownloadPage from './components/DownloadPage';
import ProgressPage from './components/ProgressPage';
import { Provider } from 'react-redux';
import store from './redux/store'; // Use default import
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" sx={{ flexGrow: 1 }}>
                Project Management
              </Typography>
              <Button component={Link} to="/" color="inherit">
                Download Page
              </Button>
              <Button component={Link} to="/progress" color="inherit">
                Progress Page
              </Button>
            </Toolbar>
          </AppBar>
          <Routes>
            <Route path="/" element={<DownloadPage />} />
            <Route path="/progress" element={<ProgressPage />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
