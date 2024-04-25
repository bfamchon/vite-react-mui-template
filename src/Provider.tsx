import { app } from '@/App';
import { DependenciesProvider } from '@/DependenciesProvider';
import { theme } from '@/theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { Provider as ReduxProvider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
export const Provider = () => (
  <>
    <CssBaseline />

    <ReduxProvider store={app.store}>
      <ThemeProvider theme={theme}>
        <DependenciesProvider dependencies={app.dependencies}>
          <RouterProvider router={app.router} />
        </DependenciesProvider>
      </ThemeProvider>
    </ReduxProvider>
  </>
);
