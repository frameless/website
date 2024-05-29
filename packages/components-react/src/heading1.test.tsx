import { render, screen } from '@testing-library/react';
import { Heading1 } from '@utrecht/component-library-react';
import '@testing-library/jest-dom';

describe('Heading1', () => {
  it('renders a heading role element', () => {
    render(<Heading1>Hello World</Heading1>);

    const heading1 = screen.getByRole('heading', {
      name: 'Hello World',
    });

    expect(heading1).toBeInTheDocument();
    expect(heading1).toBeVisible();
  });

  it('renders an HTML h1 element', () => {
    const { container } = render(<Heading1>Hello World</Heading1>);

    const heading1 = container.querySelector('h1:only-child');

    expect(heading1).toBeInTheDocument();
  });

  it('renders labels that contain HTML rich text content', () => {
    const { container } = render(
      <Heading1>
        Hello <strong>World</strong>
      </Heading1>,
    );

    const heading1 = container.querySelector(':only-child');

    const richText = heading1?.querySelector('strong');

    expect(richText).toBeInTheDocument();
  });
});
