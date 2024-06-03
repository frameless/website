import { Heading3, Paragraph } from '@utrecht/component-library-react';
import clsx from 'clsx';
import { HTMLAttributes, PropsWithChildren } from 'react';
import '@frameless/components-css/card/index.scss';

// ensures that this component is flexible, can accept standard HTML attributes, and conditionally applies styles based on the background prop.
interface CardProps extends HTMLAttributes<HTMLElement> {
  background?: boolean;
}

export const Card = ({ background, children, className, ...restProps }: PropsWithChildren<CardProps>) => (
  <div {...restProps} className={clsx(['frameless-card-test'], background, ['card-background'], className)}>
    {children}
    <Heading3></Heading3>
    <Paragraph></Paragraph>
  </div>
);

export const CardContent = (props: PropsWithChildren<HTMLAttributes<HTMLElement>>) => (
  <div className={clsx(['frameless-card-content'])} {...props}></div>
);
