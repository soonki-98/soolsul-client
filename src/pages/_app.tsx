import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';
import useResize from '@hooks/common/useResize';

function MyApp({ Component, pageProps }: AppProps) {
  useResize();

  return (
    <RecoilRoot>
      <Component {...pageProps} />
    </RecoilRoot>
  );
}

export default MyApp;
