import React from 'react';
import { render as rtlRender } from '@testing-library/react';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import { ThemeProvider } from '../components/ThemeContext';

function render(ui, { route = '/', ...renderOptions } = {}) {
  const router = createMemoryRouter([
    { path: '/', element: ui },
  ], {
    initialEntries: [route],
  });

  function Wrapper({ children }) {
    return (
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    );
  }

  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

// re-export everything
export * from '@testing-library/react';

// override render method
export { render };

// useful wrapper for testing components that use ThemeContext
export const renderWithTheme = (ui, options) => {
  return render(
    <ThemeProvider>
      {ui}
    </ThemeProvider>,
    options
  );
};
