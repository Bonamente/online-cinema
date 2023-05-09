import Layout from '@/components/layout/Layout';

type AdminProps = {};

const Admin: React.FC<AdminProps> = () => {
  return (
    <Layout title='Страница администратора'>
      <div className='page-container'>
        <h1>Admin Page</h1>
      </div>
    </Layout>
  );
};

export default Admin;
