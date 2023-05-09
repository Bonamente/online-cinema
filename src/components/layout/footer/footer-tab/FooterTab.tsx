import { FooterTabProps } from './types';

const FooterTab: React.FC<FooterTabProps> = ({
  isActive,
  handleClick,
  children,
  ...attributes
}) => {
  const text = isActive ? 'text-white' : 'text-white/[.48]';
  const opacity = isActive ? 'opacity-100' : ' opacity-0';

  return (
    <button
      className={`footer-tab ${text}`}
      type='button'
      onClick={handleClick ? handleClick : undefined}
      {...attributes}
    >
      <div
        className={`absolute top-0 left-[50%] -translate-x-[50%] w-16 h-12  bg-[url("/icons/tabBarGlow.svg")] bg-auto ${opacity}`}
      ></div>
      {children}
    </button>
  );
};

export default FooterTab;
