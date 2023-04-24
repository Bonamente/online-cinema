import dynamic from 'next/dynamic';
import Layout from '@/components/layout/Layout';
const DynamicMobileNavigationContent = dynamic(
  () => import('./mobile-nav-content/MobileNavigationContent'),
  {
    ssr: false,
  }
);

type MobileNavigationProps = {};

const MobileNavigation: React.FC<MobileNavigationProps> = () => {
  return (
    <Layout title='Страница навигации'>
      <div className='page-container'>
        <DynamicMobileNavigationContent />
      </div>
    </Layout>
  );
};

export default MobileNavigation;
