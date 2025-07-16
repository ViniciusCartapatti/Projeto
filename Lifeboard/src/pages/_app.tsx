import { AppProps } from 'next/app';
import { ClerkProvider } from '@clerk/nextjs';
import { ThemeProvider } from 'next-themes';
import { store } from '../store';
import '../styles/globals.css';

function LifeboardApp({ Component, pageProps }: AppProps) {
  return (
    <ClerkProvider>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </ClerkProvider>
  );
}

export default LifeboardApp;