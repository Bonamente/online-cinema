import Layout from '@/components/layout/Layout';

type ProfileProps = {};

const Profile: React.FC<ProfileProps> = () => {
  return (
    <Layout title='Страница регистрации'>
      <div className='page-container' title='123'>
        <h1>Login Page</h1>
      </div>
    </Layout>
  );
};

export default Profile;
