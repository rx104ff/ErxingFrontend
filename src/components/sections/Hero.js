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
              ??????????????? <span className="text-color-primary">??????</span>
            </h1>
            <div className="container-xs">
              <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400">
                ?????????????????????????????????????????????????????????????????????????????????
                </p>
              <div className="reveal-from-bottom" data-reveal-delay="600">
                <ButtonGroup>
                  <Button tag="a" color="primary" wideMobile onClick={openUserModal}>????????????</Button>
                  <Button tag="a" color="dark" wideMobile onClick={openHomeStayModal}>
                    ????????????
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
              ???????????????
            </h3>
            <div className="" style={{"textAlign": "left", "margin":"auto", "width": "80%"}}>
              <ul className="m-0" style={{"textAlign": "left", "margin":"auto"}}>
                <li className="m-0">
                  ???????????????????????????????????????
                </li>
                <li>
                  ????????????????????????????????????????????????
                </li>
                <li>
                  ?????????????????????????????????????????????
                </li>
                <li>
                  ?????????????????????: dogguides@163.com
                </li>
              </ul>
            </div>
            <br/>
            <Button tag="a" color="primary" wideMobile onClick={handleClickedUser}>??????</Button>
          </Modal>
          <Modal 
            id="download-modal"
            show={homestayModalActive}
            handleClose={closeHomeStayModal}>
            <h3>
              ??????????????????
            </h3>
            <div className="" style={{"textAlign": "left", "margin":"auto", "width": "80%"}}>
              <ul className="m-0" style={{"textAlign": "left", "margin":"auto"}}>
                <li className="m-0">
                  ???????????????????????????????????????
                </li>
                <li>
                  ????????????????????????????????????????????????
                </li>
                <li>
                  ?????????????????????????????????????????????
                </li>
                <li>
                  ?????????????????????: dogguides@163.com
                </li>
              </ul>
            </div>
            <br/>
            <Button tag="a" color="primary" wideMobile onClick={handleClickedHomeStay}>??????</Button>
          </Modal>
        </div>
      </div>
    </section>
  );
}

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;