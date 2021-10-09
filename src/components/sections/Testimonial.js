import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}

const Testimonial = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {

  const outerClasses = classNames(
    'testimonial section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'testimonial-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap',
    pushLeft && 'push-left'
  );

  const sectionHeader = {
    title: '使用者的评价',
    paragraph: '我们关注每一位使用者的生活体验与身心健康，定期的家访与检测构建起了一座沟通的桥梁。'
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={tilesClasses}>

            <div className="tiles-item reveal-from-right" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="testimonial-item-content">
                  <p className="text-sm mb-0">
                    视力一级盲，于2018年申请了云南而行工作犬训练有限公司的导盲犬，到现在已经两年多，有了导盲犬出行安全又了极大的改善，出行也方便了。训导员对我们盲人使用导盲犬的情况非常关心，工作认真、负责。
                      </p>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high">朱婉秋</span>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="testimonial-item-content">
                  <p className="text-sm mb-0">
                    因为盲杖可探知的范围有限，在平时外出时难免会有磕碰，严重的时候也会跌倒受伤。在贝尔来到我家之后，“而行”的工作人员会定期的进行回访，保证贝尔的工作状态以及我的使用情况。正因为有了如此专业的导盲犬和训练机构，才能让盲人们更放心更安全的外出，也给我们的生活带来了更多的色彩。
                      </p>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high">祝培华</span>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-left" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="testimonial-item-content">
                  <p className="text-sm mb-0">
                    本人陆明强，系视力一级盲，于2018年申请了云南而行工作犬有限公司的导盲犬，现使用已经两年半，出行得到了极大的改善。云南而行工作犬有限公司的训导员对我们盲人使用导盲犬的情况及时回访，工作认真、负责，极大地促进了公益事业的发展。
                      </p>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high">陆明强</span>
                  <span className="testimonial-item-link">
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

Testimonial.propTypes = propTypes;
Testimonial.defaultProps = defaultProps;

export default Testimonial;