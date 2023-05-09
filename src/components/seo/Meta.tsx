import Head from 'next/head';

export type MetaProps = {
  title: string;
  description?: string;
  children: React.ReactElement;
};

const Meta: React.FC<MetaProps> = ({ title, description, children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        {description ? (
          <>
            <meta name='description' content={description} />
            <meta property='og:description' content={description} />
          </>
        ) : (
          <>
            <meta name='robots' content='noindex, nofollow'></meta>
          </>
        )}
      </Head>
      {children}
    </>
  );
};

export default Meta;
