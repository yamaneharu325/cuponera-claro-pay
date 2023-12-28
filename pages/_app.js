import '@/styles/globals.css'
import dynamic from 'next/dynamic';

const sdkclaro = dynamic(
  () => import('@claro/sdkclaro'),
  { ssr: false }
);

export default function App ({ Component, pageProps }) {
  return <Component {...pageProps} />
}
