import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next'
import './PrivacyPolicy.css'
import LandingWrapper from '../../wrappers/landingWrapper/LandingWrapper';
import { useLocation } from 'react-router-dom';

const PrivacyPolicy = () => {
  const { t } = useTranslation();
    const { pathname } = useLocation();
    console.log(pathname, 'me');
    useEffect(() => {
      console.log(pathname, 'me');
      window.scrollTo(0, 0);
    }, [pathname]);
  return (
    <>
      <LandingWrapper>
        <div className="privacy_wrapper">
          <div className="policy">
            <div className="privacy_header">
              <h1>{t("privacyPolicy")}</h1>
            </div>
            <div className="privacy_content">
              <p>{t("privacyParagraphOne")}</p>
              <br />
              <p>{t("privacyParagraphTwo")}</p>
              <br />
              <h3>{t("privacyAcceptance")}</h3>
              <p>{t("privacyParagraphThree")}</p>
              <br />
              <h3>{t("privacyChanges")}</h3>
              <p>{t("privacyParagraphFour")}</p>
              <br />
              <h3>{t("privacyRelationship")}</h3>
              <p>{t("privacyParagraphFive")}</p>
              <br />
              <h3>{t("privacyPersonal")}</h3>
              <p>{t("privacyPersonalText")}</p>
            </div>
            <div className="privacy_content">
              <h3>{t("privacyParagraphSix")}</h3>
              <p className="underline">{t("privacyParagraphSeven")}</p>
              <br />
              <p>{t("privacyParagraphEight")}</p>
              <br />
              <p>{t("privacyParagraphNine")}</p>
              <br />
              <p>{t("privacyParagraphTen")}</p>
              <br />
              <p>{t("privacyParagraphEleven")}</p>
              <br />
              <p>{t("privacyParagraphTwelve")}</p>
              <br />
              <p>{t("privacyParagraphThirteen")}</p>
            </div>
            <div className="privacy_content">
              <p className="underline">{t("privacyParagraphFourteen")}</p>
              <br />
              <p>{t("privacyParagraphFifteen")}</p>
              <br />
              <p>{t("privacyParagraphSixteen")}</p>
              <br />
              <p>{t("privacyParagraphSeventeen")}</p>
              {/* <br /> */}
              {/* <p>{t("privacyParagraphEighteen")}</p> */}
            </div>
            <div className="privacy_content">
              <h3>{t("privacyParagraphNineteen")}</h3>
              <br />
              <p>{t("privacyParagraphTwenty")}</p>
              <br />
              <p>{t("privacyParagraphTwentyOne")}</p>
              <br />
              <p>{t("privacyParagraphTwentyTwo")}</p>
            </div>
            <div className="privacy_content">
              <p className="underline">{t("privacyParagraphTwentyThree")} </p>
              <br />
              <p>{t("privacyParagraphTwentyFour")}</p>
              <br />
              <p>{t("privacyParagraphTwentyFive")}</p>
              <br />
              <p>{t("privacyParagraphTwentyFive1")}</p>
              <br />
              <p>{t("privacyParagraphTwentyFive2")}</p>
              <br />
              <p>{t("privacyParagraphTwentyFive3")}</p>
            </div>
            <div className="privacy_content">
              <h3>{t("privacyParagraphTwentySix")}</h3>
              <p>{t("privacyParagraphTwentySeven")}</p>
              <br />
              <h3>{t("privacyParagraphTwentyEight")}</h3>
              <br />
              <p>{t("privacyParagraphTwentyNine")}</p>
              <br />
              <p>{t("privacyParagraphThirty")}</p>
              <br />
              <p>{t("privacyParagraphThirtyOne")}</p>
              <br />
              <p>{t("privacyParagraphThirtyTwo")}</p>
              <br />
              <p>{t("privacyParagraphThirtyThree")}</p>
              <br />
              <p>{t("privacyParagraphThirtyFour")}</p>
              <br />
              <p>{t("privacyParagraphThirtyFive")}</p>
              <br />
              <p>{t("privacyParagraphThirtySix")}</p>
              <br />
              <p>{t("privacyParagraphThirtySeven")}</p>
              <br />
              <p>{t("privacyParagraphThirtyEight")}</p>
            </div>
            <div className="privacy_content">
              <h3>{t("privacyParagraphThirtyNine")}</h3>
              <br />
              <p>{t("privacyParagraphForty")}</p>
              <br />
              <p>{t("privacyParagraphFortyOne")}</p>
              <br />
              <p>{t("privacyParagraphFortyTwo")}</p>
              <br />
              <p>{t("privacyParagraphFortyThree")}</p>
              <br />
              <p>{t("privacyParagraphFortyFour")}</p>
              <div className="privacy_content">
                <h3>{t("privacyParagraphFortyFive")}</h3>
                <br />
                <p>{t("privacyParagraphFortySix")}</p>
                <br />
                <p>{t("privacyParagraphFortySeven")}</p>
              </div>
              <div className="privacy_content">
                <h3>{t("privacyParagraphFortyEight")}</h3>
                <br />
                <p>{t("privacyParagraphFortyNine")}</p>
              </div>
              <div className="privacy_content">
                <h3>{t("privacyParagraphFifty")}</h3>
                <br />
                <p>{t("privacyParagraphFiftyOne")}</p>
                <br />
                <p>{t("privacyParagraphFiftyTwo")}</p>
                <br />
                <p>{t("privacyParagraphFiftyThree")}</p>
                <br />
                <p>{t("privacyParagraphFiftyFour")}</p>
              </div>
            </div>
            <div className="privacy_content">
              <h3>{t("privacyParagraphFiftyFive")}</h3>
              <br />
              <p>{t("privacyParagraphFiftySix")}</p>
            </div>
            <div className="privacy_content">
              <h3>{t("privacyParagraphFiftySeven")}</h3>
              <br />
              <p>{t("privacyParagraphFiftyEight")}</p>
              <br />
              <p>{t("privacyParagraphFiftyNine")}</p>
              <br />
              <p>{t("privacyParagraphSixty")}</p>
            </div>
          </div>
        </div>
      </LandingWrapper>
    </>
  );
}

export default PrivacyPolicy