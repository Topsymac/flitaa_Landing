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
          question: "How do I change my account email?",
          answer:
            "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur ma",
        },
        {
          question: "How much fee does Flitaa charge for transactions?",
          answer:
            "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur ma",
        },
        {
          question: "How much fee does Flitaa charge for transactions?",
          answer:
            "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur ma",
        },
        {
          question: "How do I change my account email?",
          answer:
            "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur ma",
        },
        {
          question: "How much fee does Flitaa charge for transactions?",
          answer:
            "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur ma",
        },
        {
          question: "How much fee does Flitaa charge for transactions?",
          answer:
            "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur ma",
        },
      ];

      const [openIndex, setOpenIndex] = useState<number | null>(null);

      const toggleDetails = (index: number) => {
        setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
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
            <p className="contact_us">Contact us</p>
            <p className="get_in_touch">Get in touch with our team</p>
            <p className="always_available">
              Our team is always available to be of help
            </p>
          </div>
          <div className="help_map">
            <img src={map} alt="flitaa map" className="map_grey" />
            <img src={mapGreen} alt="flitaa map green" className="map_green" />
          </div>
          <div className="help_card_wrapper">
            <div className="help_card">
              <img src={helpCard} alt="flitaa bg" className="help_card_background" />
              <div className="help_card_text">
                <img src={inbox} alt="nbox" />
                <div className="help_card_words">
                  <p className="help_card_words_bold">Send us an email </p>
                  <p>We’re here to help</p>
                  <button className="help_card_words_button">
                    <a href="mailto:hello@flitaa.com">hello@flitaa.com</a>
                  </button>
                </div>
              </div>
            </div>
            <div className="help_card">
              <img src={helpCard} alt="flitaa bg" className="help_card_background" />
              <div className="help_card_text">
                <img src={chat} alt="" />
                <div className="help_card_words">
                  <p className="help_card_words_bold">Chat to support </p>
                  <p>Mon-Fri 8am-5pm</p>
                  <button className="help_card_words_button">
                    Send a chat
                  </button>
                </div>
              </div>
            </div>
            <div className="help_card">
              <img src={helpCard} alt="flita background" className="help_card_background" />
              <div className="help_card_text">
                <img src={messagingIcon} alt="" />
                <div className="help_card_words">
                  <p className="help_card_words_bold">Social media </p>
                  <p>Send a message on social media</p>
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
            <p className="faq_header">Frequently asked questions</p>
            <div className="faq_wrapper">
              {faqData.map((faq, index) => (
                <div
                  key={index}
                  className="faq_item_container "
                  onClick={() => toggleDetails(index)}
                >
                  <div className="faq_item ">
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
                  <div>
                    {openIndex === index && (
                      <p className="faq_item_answer ">{faq.answer}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </LandingWrapper>
    </>
  );
}

export default Help