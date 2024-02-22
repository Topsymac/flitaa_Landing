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
          question: "What are the charges for sending and receiving crypto?",
          answer:
            "At Flitaa, sending coins comes with individual fees based on their networks, but we're proud to offer some of the industry's lowest rates. Plus, receiving any crypto asset on any network is completely free with Flitaa",
        },
        {
          question: "What are the fees for Deposits",
          answer:
            "At Flitaa, user convenience has always been our top priority. From the beginning, cash deposits on our app have remained consistently free, underscoring our dedication to providing a seamless financial experience",
        },
        {
          question: "What are the conversion fees?",
          answer:
            "At Flitaa, converting crypto through buying, selling, or swapping comes with a flat 2% fee, which supports our operations. We don't charge anything for currency conversions on our platform.",
        },
        {
          question: "What currency do I receive my withdrawals in?",
          answer:
            "You'll receive your cash in the currency you withdraw. If it's NGN, we'll transfer NGN to your designated bank account. The same principle applies to all other currencies",
        },
      ];

      const faqData1 = [
        {
          question: "What Banks can I withdraw money to?",
          answer:
            "Flitaa does not have any restrictions on banks for transactions. You can withdraw to any bank of your choice unless stated otherwise on the platform.",
        },
        {
          question: "How secure is my wallet on Flitaa?",
          answer:
            "Upon signing into your account, the initial step involves providing biometric information, after which access is granted to our robust 5-level security framework. This includes a secure Password, a personalised Pin (Passcode), Biometric Authentication, the innovative Shake to Hide Wallet Balance feature, and the added layer of protection through 2-factor authentication. This comprehensive security infrastructure is designed to safeguard your assets, ensuring exclusive access for you.",
        },
        {
          question: "How do I earn money on Flitaa?",
          answer:
            "Opportunities for earnings on our platform extend through two avenues: referral bonuses and crypto investments.",
        },
        {
          question: "What are the account verification levels/ tiers?",
          answer:
            "We offer two tiers of service: Tier 1 and Tier 2. For Tier 1, all you need is your email address and phone number to generate a 6-digit login passcode. To access Tier 2, you'll need to submit a copy of your driver’s licence, international passport, or permanent voter’s card.",
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
                  <p className="help_card_words_bold">Send us an email </p>
                  <p className="help_card_words_paragraph">
                    We’re here to help
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
                  <p className="help_card_words_bold">Chat to support </p>
                  <p className="help_card_words_paragraph">Mon-Fri 8am-5pm</p>
                  <button className="help_card_words_button">
                    Send a chat
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
                  <p className="help_card_words_bold">Social media </p>
                  <p className="help_card_words_paragraph">
                    Send a message on social media
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
            <p className="faq_header">Frequently asked questions</p>
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