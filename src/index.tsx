import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import 'semantic-ui-css/semantic.min.css';
import MovieDetail from './pages/MovieDetail';
import MoviesList from './pages/MoviesList';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';

const router = createBrowserRouter(
  [
    {
      path: '/',
      children: [
        {
          path: '/movies',
          element: <MoviesList />,
        },
        {
          path: '/movies/:id',
          element: <MovieDetail />,
        },
      ],
    },
  ],
  { basename: '/movies' }
);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
