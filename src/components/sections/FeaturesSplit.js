import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}

const FeaturesSplit = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {

  const outerClasses = classNames(
    'features-split section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-split-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const splitClasses = classNames(
    'split-wrap',
    invertMobile && 'invert-mobile',
    invertDesktop && 'invert-desktop',
    alignTop && 'align-top'
  );

  const sectionHeader = {
    title: '辅助犬的使命',
    paragraph: '辅助犬是帮助残疾人走出家门、融入社会的最佳助手和亲密伙伴。辅助犬作为残疾人辅具的重要组成部分，随着社会的发展也越来越得到了社会各界的普遍关注。'
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={splitClasses}>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  </div>
                <h3 className="mt-0 mb-12">
                  历史与未来
                  </h3>
                <p className="m-0">
                  人类使用辅助犬已有2000多年的历史，早在公元前100年左右，德国盲人国王就利用犬引导自己出行。1819年，维也纳人约翰训练培养了第一只真正意义上的导盲犬，创建了全球第一家导盲犬训练机构，并出版了导盲犬教科书，至此，人类历史开启了辅助犬服务的新纪元。
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/guide_dog_4.png')}
                  alt="Features split 03"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  
                  </div>
                <h3 className="mt-0 mb-12">
                  严格的筛选和训练
                  </h3>
                <p className="m-0">
                  辅助犬需要经过严格的筛选。在所有的犬类品种中，适合作为辅助犬的品种寥寥无几。辅助犬需要具有较高的执行力以及对口令的接受能力，筛选过程中，淘汰率较高；其次，经过训练后，真正能够上岗工作的辅助犬也不足40%，过高的淘汰率限制了辅助犬数量发展。在获取上岗资格后还要与使用的残障人士进行磨合。辅助犬训练从筛选到正式上岗需要大约2年时间。
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/guide_dog_2.png')}
                  alt="Features split 01"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-right" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  </div>
                <h3 className="mt-0 mb-12">
                  广泛的需要
                  </h3>
                <p className="m-0">
                  我国残疾人目前总人数超过8500万人。其中视力残疾1780万人，听力残疾2054万人，言语残疾130万人，肢体残疾2472万人，智力残疾568万人，精神残疾629万人，多重残疾1386万人。按目前国际标准，辅助犬使用数量应占相关残疾类别人数的1%左右。就导盲犬而言，国内需要超过17万只合格导盲犬。中国大陆地区从2006年起开展了导盲犬训练工作，目前，现役导盲犬数量严重不足，其他辅助犬培育训练工作均尚未起步。
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/guide_dog_3.png')}
                  alt="Features split 02"
                  width={528}
                  height={396} />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;