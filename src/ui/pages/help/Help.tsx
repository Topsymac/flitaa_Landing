import React, { useEffect, useState } from 'react'
import "./Help.css"
import LandingWrapper from '../../wrappers/landingWrapper/LandingWrapper'
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import map from "../../../assets/mapGrey.svg"
import mapGreen from "../../../assets/map.svg"
import helpCard from "../../../assets/helpBackground.svg";
import chat from "../../../assets/chat.svg"
import inbox from "../../../assets/inbox.svg"
import messagingIcon from "../../../assets/messagingIcon.svg"
import facebook from "../../../assets/Facebook.svg"
import linkedIn from "../../../assets/LinkedIn.svg"
import twitter from "../../../assets/Twitter.png"
import instagram from "../../../assets/Instagram.svg"
import plus from "../../../assets/plus.svg"
import minus from "../../../assets/minus.svg"

const Help = () => {
    const { t } = useTranslation();
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

      const faqData = [
        {
          question: t("helpFaqQuestion1"),
          answer: t("helpFaqAnswer1"),
        },
        {
          question: t("helpFaqQuestion2"),
          answer: t("helpFaqAnswer2"),
        },
        {
          question: t("helpFaqQuestion3"),
          answer: t("helpFaqAnswer3"),
        },
        {
          question: t("helpFaqQuestion4"),
          answer: t("helpFaqAnswer4"),
        },
      ];

      const faqData1 = [
        {
          question: t("helpFaqQuestion5"),
          answer: t("helpFaqAnswer5"),
        },
        {
          question: t("helpFaqQuestion6"),
          answer: t("helpFaqAnswer6"),
        },
        {
          question: t("helpFaqQuestion7"),
          answer: t("helpFaqAnswer7"),
        },
        {
          question: t("helpFaqQuestion8"),
          answer: t("helpFaqAnswer8"),
        },
      ];

      const [openIndex, setOpenIndex] = useState<number | null>(null);
      const [openIndex2, setOpenIndex2] = useState<number | null>(null);

      const toggleDetails = (index: number) => {
        setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
      };
      const toggleDetails2 = (index: number) => {
        setOpenIndex2((prevIndex) => (prevIndex === index ? null : index));
      };

      const socials = [
        { icon: facebook, name: "filtaa Facebook", url: t("socials.facebook") },
        { icon: linkedIn, name: "flitaa LinkedIn", url: t("socials.linkedIn") },
        { icon: twitter, name: "flitaa Twitter", url: t("socials.twitter") },
        {
          icon: instagram,
          name: "flitaa Instagram",
          url: t("socials.instagram"),
        },
      ];
  return (
    <>
      <Helmet>
        <title>{t("PrivacyPageTitle")}</title>
        <meta name="description" content={t("PrivacyPageDescription")} />
      </Helmet>
      <LandingWrapper>
        <div className="help_wrapper">
          <div className="top_text">
            <p className="blurRight"></p>
            <p className="contact_us">{t("helpContactUs")}</p>
            <p className="get_in_touch">{t("helpGetInTouch")}</p>
            <p className="always_available">{t("helpOurTeamAvailable")}</p>
          </div>
          <div className="help_map">
            <img src={map} alt="flitaa map" className="map_grey" />
            <img src={mapGreen} alt="flitaa map green" className="map_green" />
          </div>
          <div className="help_card_wrapper">
            <p className="blurRight"></p>
            <div className="help_card">
              <img
                src={helpCard}
                alt="flitaa bg"
                className="help_card_background"
              />
              <div className="help_card_text">
                <img src={inbox} alt="nbox" />
                <div className="help_card_words">
                  <p className="help_card_words_bold">
                    {t("helpSendUsEmail")}{" "}
                  </p>
                  <p className="help_card_words_paragraph">
                    {t("helpHereToHelp")}
                  </p>
                  <button className="help_card_words_button">
                    <a href="mailto:hello@flitaa.com">hello@flitaa.com</a>
                  </button>
                </div>
              </div>
            </div>
            <div className="help_card">
              <img
                src={helpCard}
                alt="flitaa bg"
                className="help_card_background"
              />
              <div className="help_card_text">
                <img src={chat} alt="" />
                <div className="help_card_words">
                  <p className="help_card_words_bold">
                    {t("helpChatToSupport")}
                  </p>
                  <p className="help_card_words_paragraph">Mon-Fri 8am-5pm</p>
                  <button className="help_card_words_button">
                    {t("helpSendAChat")}
                  </button>
                </div>
              </div>
            </div>
            <div className="help_card">
              <img
                src={helpCard}
                alt="flita background"
                className="help_card_background"
              />
              <div className="help_card_text">
                <img src={messagingIcon} alt="" />
                <div className="help_card_words">
                  <p className="help_card_words_bold">{t("helpSocialMedia")}</p>
                  <p className="help_card_words_paragraph">
                    {t("helpSendOnSocialMedia")}
                  </p>
                  <div className="icons">
                    {socials.map(({ name, icon, url }) => (
                      <Link to={url} key={name} target="_blank">
                        <img src={icon} alt={name} />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="help_card_faqs">
            <p className="faq_header">{t("helpFrequentlyAskedQuestions")}</p>
            <div className="faq_wrapper">
              <div>
                {faqData.map((faq, index) => (
                  <div key={index} className="faq_item_container">
                    <div
                      className="faq_item"
                      onClick={() => toggleDetails(index)}
                    >
                      <div>
                        <p>{faq.question}</p>
                      </div>
                      <div>
                        <img
                          src={openIndex === index ? minus : plus}
                          alt={openIndex === index ? "minus" : "plus"}
                        />
                      </div>
                    </div>
                    {openIndex === index && (
                      <p className="faq_item_answer">{faq.answer}</p>
                    )}
                  </div>
                ))}
              </div>
              <div>
                {faqData1.map((faq, index) => (
                  <div key={index} className="faq_item_container">
                    <div
                      className="faq_item"
                      onClick={() => toggleDetails2(index)}
                    >
                      <div>
                        <p>{faq.question}</p>
                      </div>
                      <div>
                        <img
                          src={openIndex2 === index ? minus : plus}
                          alt={openIndex2 === index ? "minus" : "plus"}
                        />
                      </div>
                    </div>
                    {openIndex2 === index && (
                      <p className="faq_item_answer">{faq.answer}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </LandingWrapper>
    </>
  );
}

export default Help