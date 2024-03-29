import type {
  AnchorHTMLAttributes,
  FunctionComponent,
  PropsWithChildren,
} from 'react';

type AnchorType = AnchorHTMLAttributes<HTMLAnchorElement>;
type Props = Required<Pick<AnchorType, 'href'>> &
  Pick<AnchorType, 'onClick' | 'target'> & {
    underline?: boolean;
  };
export const Link: FunctionComponent<PropsWithChildren<Props>> = ({
  children,
  href,
  onClick,
  target,
  underline = true,
}) => (
  <a
    className={`font-medium text-gray-700 ${underline ? 'underline' : ''}`}
    href={href}
    onClick={onClick}
    target={target}
  >
    {children}
  </a>
);
