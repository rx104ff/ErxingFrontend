import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import Input from '../elements/Input';
import Button from '../elements/Button';
import { subscribe } from '../../utils/ApiUtils';
import { useAlert } from 'react-alert';

const propTypes = {
  ...SectionProps.types,
  split: PropTypes.bool
}

const defaultProps = {
  ...SectionProps.defaults,
  split: false
}

const Cta = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  split,
  ...props
}) => {

  const [email, setEmail] = useState('');

  //const alert = useAlert();

  const outerClasses = classNames(
    'cta section center-content-mobile reveal-from-bottom',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'cta-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider',
    split && 'cta-split'
  ); 

  const handleClick = (e) => {
    const subscribeRequest = {email: email};
    subscribe(subscribeRequest)
    .then(response => {
    }).catch(error => {
    })
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div
          className={innerClasses}
        >
          <div className="cta-slogan">
            <h3 className="m-0">
              加入辅助犬社区接收相关推送
              </h3>
          </div>
          <div className="cta-action">
            <Input id="newsletter" type="email" label="Subscribe" labelHidden placeholder="邮箱地址" onChange = {(e) => setEmail(e.target.value)} value = {email}>
            </Input>
            <Button tag="a" color="dark" wideMobile onClick={handleClick}>
                    加入
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

Cta.propTypes = propTypes;
Cta.defaultProps = defaultProps;

export default Cta;