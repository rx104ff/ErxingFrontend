import React from 'react';
import classNames from 'classnames';
import Image from '../../elements/Image';

const IGDF = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'brand',
    className
  );

  return (
    <div
      {...props}
      className={classes}
    >
      <h1 className="m-0">
        <a href="https://www.igdf.org.uk/">
          <Image
            src={require('./../../../assets/images/igdf.png')}
            alt="Open"
            width={65}
            height={65} />
        </a>
      </h1>
    </div>
  );
}

export default IGDF;