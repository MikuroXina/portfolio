import type { AppProps } from 'next/app';
import './root.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
