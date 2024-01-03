import '@/styles/globals.css'
import { Inter } from 'next/font/google'
// import * as sdkclaro from '@claro/sdkclaro'

const inter = Inter({ subsets: ['latin'] })

export default function App ({ Component, pageProps }) {
  return <div className={inter.className}>
    <Component {...pageProps} />
  </div>
}
