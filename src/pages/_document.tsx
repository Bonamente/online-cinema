import { Head, Html, Main, NextScript } from 'next/document';

const Document = () => {
  return (
    <Html lang='ru'>
      <Head />
      <body className='page-bg-color'>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
