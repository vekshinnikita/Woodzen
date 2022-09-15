import React from 'react';
import ReactDOM from 'react-dom/client';
import { RecoilRoot } from 'recoil'
import { QueryClient, QueryClientProvider } from 'react-query'

import App from './App';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './styles/style.scss'


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    },
  }
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <QueryClientProvider client={queryClient}>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </QueryClientProvider>
);


