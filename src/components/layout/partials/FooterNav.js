import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

const FooterNav = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'footer-nav',
    className
  );

  return (
    <nav
      {...props}
      className={classes}
    >
      <ul className="list-reset">
        <li>
          <Link to="/contact">联系我们</Link>
        </li>
        <li>
          <Link>电话: 021-65025199 </Link>
        </li>
        <li>
          <Link>邮箱: erxingdogguides@163.com</Link>
        </li>
      </ul>
    </nav>
  );
}

export default FooterNav;