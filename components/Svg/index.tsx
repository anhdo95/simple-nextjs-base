import React, { forwardRef } from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  name: string;
}

const Svg = forwardRef(({ name, ...props }: Props, ref: any) => {
  return (
    <svg ref={ref} {...props}>
      <use xlinkHref={`/svg/symbol-defs.svg#icon-${name}`} />
    </svg>
  );
});

export default Svg;
