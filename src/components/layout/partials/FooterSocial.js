import React from 'react';
import classNames from 'classnames';
import Image from '../../elements/Image';

const FooterSocial = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'footer-social',
    className
  );

  return (
    <div
      {...props}
      className={classes}
    >
      <ul className="list-reset">
        <li>
          <a href="https://weibo.com/u/5625988079">
          <Image
            src={require('./../../../assets/images/sina-weibo-1.svg')}
            alt="Open"
            width={40}
            height={40} />
          </a>
        </li>
        <li>
          <a href="https://v.douyin.com/dsr9jyj/">
          <Image
            src={require('./../../../assets/images/tiktok-1.svg')}
            alt="Open"
            width={40}
            height={40} />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default FooterSocial;