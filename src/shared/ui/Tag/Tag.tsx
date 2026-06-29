import ss from './Tag.module.scss';
import TagsMark from '@/shared/ui/TagsMark';
import type { ReactNode } from 'react';
interface Props {
  color: string;
  children: ReactNode;
  size?: 'small' | 'medium' | 'large';
}

export const Tag = ({ color, children, size = 'medium' }: Props) => {
  return (
    <div className={ss.tag}>
      <TagsMark color={color} /> <span className={ss[size]}>{children}</span>
    </div>
  );
};
