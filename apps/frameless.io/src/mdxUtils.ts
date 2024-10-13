import {
  Code,
  Emphasis,
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Heading6,
  Image,
  Link,
  OrderedList,
  Paragraph,
  UnorderedList,
} from '@utrecht/component-library-react/dist/css-module';

export const customComponents = {
  code: Code,
  a: Link,
  em: Emphasis,
  ul: UnorderedList,
  ol: OrderedList,
  img: Image,
  h1: Heading1,
  h2: Heading2,
  h3: Heading3,
  h4: Heading4,
  h5: Heading5,
  h6: Heading6,
  p: Paragraph,
};

export const mapHeadings = (level: 1 | 2 | 3 | 4 | 5 | 6, components: { [key: string]: unknown }) => {
  const headingMap = {
    1: { h1: Heading1, h2: Heading2, h3: Heading3, h4: Heading4, h5: Heading5 },
    2: { h1: Heading2, h2: Heading3, h3: Heading4, h4: Heading5, h5: Heading6 },
    3: { h1: Heading3, h2: Heading4, h3: Heading5, h4: Heading6, h5: Heading6 },
    4: { h1: Heading4, h2: Heading5, h3: Heading6, h4: Heading6, h5: Heading6 },
    5: { h1: Heading5, h2: Heading6, h3: Heading6, h4: Heading6, h5: Heading6 },
    6: { h1: Heading6, h2: Heading6, h3: Heading6, h4: Heading6, h5: Heading6 },
  };

  return { ...components, ...headingMap[level] };
};

export const omitHeading1 = (components: { [key: string]: unknown }) => ({
  ...components,
  h1: () => null,
});
