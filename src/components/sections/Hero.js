import React, { useState } from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import ButtonGroup from '../elements/ButtonGroup';
import Button from '../elements/Button';
import Image from '../elements/Image';
import Modal from '../elements/Modal';
import { fetchDocument } from '../../utils/ApiUtils';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

const Hero = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {

  const [videoModalActive, setVideomodalactive] = useState(false);
  const [userModalActive, setUsermoalactive] = useState(false);
  const [homestayModalActive, setHomestaymodalactive] = useState(false);

  const openModal = (e) => {
    e.preventDefault();
    setVideomodalactive(true);
  }

  const closeModal = (e) => {
    e.preventDefault();
    setVideomodalactive(false);
  }

  const openUserModal = (e) => {
    e.preventDefault();
    setUsermoalactive(true);
  }

  const closeUserModal = (e) => {
    e.preventDefault();
    setUsermoalactive(false);
  }

  const openHomeStayModal = (e) => {
    e.preventDefault();
    setHomestaymodalactive(true);
  }

  const closeHomeStayModal = (e) => {
    e.preventDefault();
    setHomestaymodalactive(false);
  }

  const outerClasses = classNames(
    'hero section center-content',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'hero-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const handleClickedUser = (e) => {
    e.preventDefault();
    
    fetchDocument('guidedog_application_form.pdf')
        .catch(error => {
            if(error.status === 401) {
            } else {
                console.log({
                    message: 'APP',
                    description: 'Server Error. Please Try Again'
            });
        }
    });
  }

  const handleClickedHomeStay = (e) => {
    e.preventDefault();
    
    fetchDocument('homestay_application_form.pdf')
        .catch(error => {
            if(error.status === 401) {
            } else {
                console.log({
                    message: 'APP',
                    description: 'Server Error. Please Try Again'
            });
        }
    });
  }

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container-sm">
        <div className={innerClasses}>
          <div className="hero-content">
            <h1 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
              而行工作犬 <span className="text-color-primary">路上</span>
            </h1>
            <div className="container-xs">
              <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400">
                人生漫漫路，何憾昨日春光未看，挥手向朝歌，来日何几多。
                </p>
              <div className="reveal-from-bottom" data-reveal-delay="600">
                <ButtonGroup>
                  <Button tag="a" color="primary" wideMobile onClick={openUserModal}>使用申请</Button>
                  <Button tag="a" color="dark" wideMobile onClick={openHomeStayModal}>
                    寄养申请
                    </Button>
                </ButtonGroup>
              </div>
            </div>
          </div>
          <div className="hero-figure reveal-from-bottom illustration-element-01" data-reveal-value="20px" data-reveal-delay="800">
            <a
              data-video="https://obj.shine.cn/files/2019/03/01/135c2d0b-1827-4df6-9e1d-a5ea6343b67c_0.mp4"
              href="#0"
              aria-controls="video-modal"
              onClick={openModal}
            >
              <Image
                className="has-shadow"
                src={require('./../../assets/images/about_guid.png')}
                alt="Hero"
                width={896}
                height={504} />
            </a>
          </div>
          <Modal
            id="video-modal"
            show={videoModalActive}
            handleClose={closeModal}
            video="https://obj.shine.cn/files/2019/03/01/135c2d0b-1827-4df6-9e1d-a5ea6343b67c_0.mp4"
            videoTag="iframe" />
          <Modal 
            id="download-modal"
            show={userModalActive}
            handleClose={closeUserModal}>
            <h3>
              使用者申请
            </h3>
            <div className="" style={{"textAlign": "left", "margin":"auto", "width": "80%"}}>
              <ul className="m-0" style={{"textAlign": "left", "margin":"auto"}}>
                <li className="m-0">
                  请使用下方链接下载申请表格
                </li>
                <li>
                  提交后，工作人员会主动进行联系。
                </li>
                <li>
                  请确保您填写的信息真实、有效。
                </li>
                <li>
                  申请发送至邮箱: dogguides@163.com
                </li>
              </ul>
            </div>
            <br/>
            <Button tag="a" color="primary" wideMobile onClick={handleClickedUser}>下载</Button>
          </Modal>
          <Modal 
            id="download-modal"
            show={homestayModalActive}
            handleClose={closeHomeStayModal}>
            <h3>
              寄养家庭申请
            </h3>
            <div className="" style={{"textAlign": "left", "margin":"auto", "width": "80%"}}>
              <ul className="m-0" style={{"textAlign": "left", "margin":"auto"}}>
                <li className="m-0">
                  请使用下方链接下载申请表格
                </li>
                <li>
                  提交后，工作人员会主动进行联系。
                </li>
                <li>
                  请确保您填写的信息真实、有效。
                </li>
                <li>
                  申请发送至邮箱: dogguides@163.com
                </li>
              </ul>
            </div>
            <br/>
            <Button tag="a" color="primary" wideMobile onClick={handleClickedHomeStay}>下载</Button>
          </Modal>
        </div>
      </div>
    </section>
  );
}

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;