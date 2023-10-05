import React from 'react'
import { useTranslation } from 'react-i18next'
import './PrivacyPolicy.css'
import LandingWrapper from '../../wrappers/landingWrapper/LandingWrapper';

const PrivacyPolicy = () => {
  const { t } = useTranslation()
  return (
    <>
      <LandingWrapper>
        <div className='privacy_wrapper'>
          <div className='privacy_header'>
            <h1>{t('privacyPolicy')}</h1>
          </div>
          <div className='privacy_content'>
            <p>{t('privacyParagraphOne')}</p>
            <br />
            <p>{t('privacyParagraphTwo')}</p>
            <br />
            <p>{t('privacyParagraphThree')}</p>
            <br />
            <p>{t('privacyParagraphFour')}</p>
            <br />
            <p>{t('privacyParagraphFive')}</p>
          </div>
          <div className='privacy_content'>
            <h3>1. {t('privacyParagraphSix')}</h3>
            <p className='underline'>{t('privacyParagraphSeven')}</p>
            <br />
            <p>{t('privacyParagraphEight')}</p>
            <br />
            <p>{t('privacyParagraphNine')}</p>
            <br />
            <p>{t('privacyParagraphTen')}</p>
            <br />
            <p>{t('privacyParagraphEleven')}</p>
            <br />
            <p>{t('privacyParagraphTwelve')}</p>
            <br />
            <p>{t('privacyParagraphThirteen')}</p>
          </div>
          <div className='privacy_content'>
            <p className='underline'>{t('privacyParagraphFourteen')}</p>
            <br />
            <p>{t('privacyParagraphFifteen')}</p>
            <br />
            <p>{t('privacyParagraphSixteen')}</p>
            <br />
            <p>{t('privacyParagraphSeventeen')}</p>
            <br />
            <p>{t('privacyParagraphEighteen')}</p>
          </div>
          <div className='privacy_content'>
            <p className='underline'>{t('privacyParagraphNineteen')}</p>
            <br />
            <p>{t('privacyParagraphTwenty')}</p>
            <br />
            <p>{t('privacyParagraphTwentyOne')}</p>
            <br />
            <p>{t('privacyParagraphTwentyTwo')}</p>
          </div>
          <div className='privacy_content'>
            <p className='underline'>{t('privacyParagraphTwentyThree')} </p>
            <br />
            <p>{t('privacyParagraphTwentyFour')}</p>
            <br />
            <p>{t('privacyParagraphTwentyFive')}</p>
          </div>
          <div className='privacy_content'>
            <h3>{t('privacyParagraphTwentySix')}</h3>
            <p>{t('privacyParagraphTwentySeven')}</p>
            <br />
            <p>{t('privacyParagraphTwentyEight')}</p>
            <br />
            <p>{t('privacyParagraphTwentyNine')}</p>
            <br />
            <p>{t('privacyParagraphThirty')}</p>
            <br />
            <p>{t('privacyParagraphThirtyOne')}</p>
            <br />
            <p>{t('privacyParagraphThirtyTwo')}</p>
            <br />
            <p>{t('privacyParagraphThirtyThree')}</p>
            <br />
            <p>{t('privacyParagraphThirtyFour')}</p>
            <br />
            <p>{t('privacyParagraphThirtyFive')}</p>
            <br />
            <p>{t('privacyParagraphThirtySix')}</p>
            <br />
            <p>{t('privacyParagraphThirtySeven')}</p>
            <br />
            <p>{t('privacyParagraphThirtyEight')}</p>
            <br />
            <p>{t('privacyParagraphThirtyNine')}</p>
            <br />
            <p>{t('privacyParagraphForty')}</p>
            <br />
            <p>{t('privacyParagraphFortyOne')}</p>
            <br />
            <p>{t('privacyParagraphFortyTwo')}</p>
          </div>
          <div className='privacy_content'>
            <h3>{t('privacyParagraphFortyThree')}</h3>
            <p>{t('privacyParagraphFortyFour')}</p>
            <br />
            <p>{t('privacyParagraphFortyFive')}</p>
            <br />
            <p>{t('privacyParagraphFortySix')}</p>
            <br />
            <p>{t('privacyParagraphFortySeven')}</p>
            <br />
            <p>{t('privacyParagraphFortyEight')}</p>
            <br />
            <p>{t('privacyParagraphFortyNine')}</p>
            <br />
            <p>{t('privacyParagraphFifty')}</p>
            <br />
            <p>{t('privacyParagraphFiftyOne')}</p>
            <br />
            <p>{t('privacyParagraphFiftyTwo')}</p>
            <br />
            <p>{t('privacyParagraphFiftyThree')}</p>
            <br />
            <p>{t('privacyParagraphFiftyFour')}</p>
            <br />
            <p>{t('privacyParagraphFiftyFive')}</p>
          </div>
          <div className='privacy_content'>
            <h3>{t('privacyParagraphFiftySix')}</h3>
            <p>{t('privacyParagraphFiftySeven')}</p>
            <br />
            <p>{t('privacyParagraphFiftyEight')}</p>
            <br />
            <p>{t('privacyParagraphFiftyNine')}</p>
            <br />
            <p>{t('privacyParagraphSixty')}</p>
            <br />
            <p>{t('privacyParagraphSixtyOne')}</p>
            <br />
            <p>{t('privacyParagraphSixtyTwo')}</p>
            <br />
            <p>{t('privacyParagraphSixtyThree')}</p>
            <br />
            <p>{t('privacyParagraphSixtyFour')}</p>
            <br />
            <p>{t('privacyParagraphSixtyFive')}</p>
            <br />
            <p>{t('privacyParagraphSixtySix')}</p>
          </div>
          <div className='privacy_content'>
            <h3>{t('privacyParagraphSixtySeven')}</h3>
            <p>{t('privacyParagraphSixtyEight')}</p>
            <br />
            <p>{t('privacyParagraphSixtyNine')}</p>
            <br />
            <p>{t('privacyParagraphSeventy')}</p>
          </div>
          <div className='privacy_content'>
            <h3>{t('privacyParagraphSeventyOne')}</h3>
            <p>
              In Short: We keep your information for as long as necessary to
              fulfill the purposes outlined in this privacy notice unless
              otherwise required by law.
            </p>
            <br />
            <p>
              We will only keep your personal information for as long as it is
              necessary for the purposes set out in this privacy notice, unless
              a longer retention period is required or permitted by law (such as
              tax, accounting or other legal requirements). No purpose in this
              notice will require us keeping your personal information for
              longer than the period of time in which users have an account with
              us.
            </p>
            <br />
            <p>
              When we have no ongoing legitimate business need to process your
              personal information, we will either delete or anonymize such
              information, or, if this is not possible (for example, because
              your personal information has been stored in backup archives),
              then we will securely store your personal information and isolate
              it from any further processing until deletion is possible.
            </p>
          </div>
          <div className='privacy_content'>
            <h3>7. HOW DO WE KEEP YOUR INFORMATION SAFE?</h3>
            <p>
              In Short: We aim to protect your personal information through a
              system of organizational and technical security measures.
            </p>
            <br />
            <p>
              We have implemented appropriate technical and organizational
              security measures designed to protect the security of any personal
              information we process. However, despite our safeguards and
              efforts to secure your information, no electronic transmission
              over the Internet or information storage technology can be
              guaranteed to be 100% secure, so we cannot promise or guarantee
              that hackers, cybercriminals, or other unauthorized third parties
              will not be able to defeat our security, and improperly collect,
              access, steal, or modify your information. Although we will do our
              best to protect your personal information, transmission of
              personal information to and from our Services is at your own risk.
              You should only access the Services within a secure environment.
            </p>
          </div>
          <div className='privacy_content'>
            <h3>8. WHAT ARE YOUR PRIVACY RIGHTS?</h3>
            <p>
              In Short: You may review, change, or terminate your account at any
              time.
            </p>
            <br />
            <p>
              If you are a resident in the EEA or UK and you believe we are
              unlawfully processing your personal information, you also have the
              right to complain to your local data protection supervisory
              authority. You can find their contact details here.
            </p>
            <br />
            <p>
              If you are a resident in Switzerland, the contact details for the
              data protection authorities are available here.
            </p>
            <br />
            <p>
              If you have questions or comments about your privacy rights, you
              may email us at privacy@flitaa.com
            </p>
            <br />
            <p className='underline'>Account Information</p>
            <br />
            <p>
              If you would at any time like to review or change the information
              in your account or terminate your account, you can:
            </p>
            <p>
              Log in to your account settings and update your user account. Upon
              your request to terminate your account, we will deactivate or
              delete your account and information from our active databases.
              However, we may retain some information in our files to prevent
              fraud, troubleshoot problems, assist with any investigations,
              enforce our Terms of Use and/or comply with applicable legal
              requirements.
            </p>
            <br />
            <p>
              Opting out of email marketing: You can unsubscribe from our
              marketing email list at any time by clicking on the unsubscribe
              link in the emails that we send or by contacting us using the
              details provided below. You will then be removed from the
              marketing email list — however, we may still communicate with you,
              for example to send you service-related emails that are necessary
              for the administration and use of your account, to respond to
              service requests, or for other non-marketing purposes. To
              otherwise opt-out, you may: Contact us using the contact
              information provided.
            </p>
          </div>
          <div className='privacy_content'>
            <h3>9. CONTROLS FOR DO-NOT-TRACK FEATURES</h3>
            <p>
              Most web browsers and some mobile operating systems and mobile
              applications include a Do-Not-Track (“DNT”) feature or setting you
              can activate to signal your privacy preference not to have data
              about your online browsing activities monitored and collected. At
              this stage no uniform technology standard for recognizing and
              implementing DNT signals has been finalized. As such, we do not
              currently respond to DNT browser signals or any other mechanism
              that automatically communicates your choice not to be tracked
              online. If a standard for online tracking is adopted that we must
              follow in the future, we will inform you about that practice in a
              revised version of this privacy notice.
            </p>
          </div>
          <div className='privacy_content'>
            <h3>10. DO WE MAKE UPDATES TO THIS NOTICE?</h3>
            <p>
              In Short: Yes, we will update this notice as necessary to stay
              compliant with relevant laws.
            </p>
            <br />
            <p>
              We may update this privacy notice from time to time. The updated
              version will be indicated by an updated “Revised” date and the
              updated version will be effective as soon as it is accessible. If
              we make material changes to this privacy notice, we may notify you
              either by prominently posting a notice of such changes or by
              directly sending you a notification. We encourage you to review
              this privacy notice frequently to be informed of how we are
              protecting your information.
            </p>
          </div>
          <div className='privacy_content'>
            <h3>11. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</h3>
            <p>
              If you have questions or comments about this notice, you may email
              us at privacy@flitaa.com
            </p>
          </div>
          <div className='privacy_content'>
            <h3>
              12. HOW CAN YOU REVIEW. UPDATE. OR DELETE THE DATA WE COLLECT FROM
              YOU?
            </h3>
            <p>
              Based on the applicable laws of your country, you may have the
              right to request access to the personal information we collect
              from you, change that information, or delete it in some
              circumstances. To request to review, update, or delete your
              personal information, please contact: privacy@flitaa.com
            </p>
          </div>
        </div>
      </LandingWrapper>
    </>
  );
}

export default PrivacyPolicy