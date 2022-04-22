import '../styles/globals.css';
import type { AppProps } from 'next/app';
import DarkModeProvider from '../hooks/useDarkMode/DarkModeProvider';
import Link from 'next/link';
import { PrismicProvider } from '@prismicio/react';
import { PrismicPreview } from '@prismicio/next';
import { linkResolver, repositoryName } from '../prismicio';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <PrismicProvider
      linkResolver={linkResolver}
      internalLinkComponent={({ href, children, ...props }) => (
        <Link href={href}>
          <a {...props}>{children}</a>
        </Link>
      )}
    >
      <PrismicPreview repositoryName={repositoryName}>
        <DarkModeProvider>
          <Component {...pageProps} />
        </DarkModeProvider>
      </PrismicPreview>
    </PrismicProvider>
  );
}

export default MyApp;
