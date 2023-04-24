import { FooterButtonProps } from './types';

const FooterButton: React.FC<FooterButtonProps> = ({
  size,
  refObj,
  handleClick,
  isWrappedByLink,
  children,
  ...attributes
}) => {
  const hoverFocusStyle = isWrappedByLink
    ? 'group-hover:bg-[#2e2844] group-focus:bg-[#2e2844] group-active:bg-[#0e0c14]'
    : '';
  let sizeStyle;

  switch (size) {
    case 'small':
      sizeStyle = `w-10 h-10`;
      break;
    case 'middle':
      sizeStyle = `w-full h-10 py-[9px] px-[15px] leading-[18px]`;
      break;
    case 'large':
      sizeStyle = `justify-start h-12 w-full leading-5`;
      break;
    default:
      sizeStyle = '';
  }

  return (
    <button
      type='button'
      className={`footer-button ${sizeStyle} ${hoverFocusStyle}`}
      onClick={handleClick ? handleClick : undefined}
      ref={refObj ? refObj : undefined}
      {...attributes}
    >
      {children}
    </button>
  );
};

export default FooterButton;
