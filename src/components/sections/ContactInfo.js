import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import SectionHeader from './partials/SectionHeader';
import { SectionProps } from '../../utils/SectionProps';
import { BaiduMap } from 'react-baidu-maps';

const propTypes = {
  children: PropTypes.node,
  ...SectionProps.types
}

const defaultProps = {
  children: null,
  ...SectionProps.defaults
}

const ContactInfo = ({
  className,
  children,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {

  const outerClasses = classNames(
    'section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap center-content',
    pushLeft && 'push-left'
  );

  const splitClasses = classNames(
    'split-wrap',
    invertMobile && 'invert-mobile',
    invertDesktop && 'invert-desktop',
    alignTop && 'align-top'
  );

  const sectionHeader = {
    title: '联系我们',
    paragraph: ''
  };

  const MAP_KEY = "hOl1Pg3Lrqxyh7qdnBuoxlk6hA0Mw8z1";;

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
      <SectionHeader data={sectionHeader} className="center-content" />
        <div className={innerClasses}>
          <div className={tilesClasses}>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-content">
                  <p className="m-0 text-sm">
                    <span className="text-color-primary">电话</span> 021-65025199
                  </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-content">
                  <p className="m-0 text-sm">
                    <span className="text-color-primary">邮件</span> erxingdogguides@163.com
                  </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="400">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-content">
                  <p className="m-0 text-sm">
                    <span className="text-color-primary">地址</span> 上海市浦东新区书院镇外灶村1219号
                  </p>
                </div>
              </div>
            </div>

            <div style={{height: '500px', width: '70%'}}>
              <BaiduMap
                  center={{ lng: 121.890533, lat: 30.951418}}
                  zoom={17}
                  mapUrl={`http://api.map.baidu.com/api?v=3.0&ak=${MAP_KEY}`}
                  loadingElement={<div>Loading.....</div>}
                  mapContainer={<div style={{ height: '100%' }} />} >
               </BaiduMap>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}

ContactInfo.propTypes = propTypes;
ContactInfo.defaultProps = defaultProps;

export default ContactInfo;