import React from 'react';
import './Terms.css';
import LandingWrapper from '../../wrappers/landingWrapper/LandingWrapper';
import { useTranslation } from 'react-i18next';

const Terms = () => {
  const { t } = useTranslation();
  return (
    <>
      <LandingWrapper>
        <div className='terms_wrapper'>
          <div className='terms'>
            <div className='terms_header'>
              <h1>{t('terms&Condition')}</h1>
            </div>
            <div className='terms_content'>
              <h3>{t('introduction')}</h3>
              <p>{t('theseFlitaa')}</p>
              <br />
              <p>{t('pleaseReadTheTermsCarefully')}</p>
              <br />
              <p>{t('flitaaIsNotResponsibleFor')}</p>
              <br />
              <p>{t('byAccessingUsingOrAttempting')}</p>
              <br />
              {/*  */}
            </div>
            <div className='terms_content'>
              <h3>{t('definitions')}</h3>
              <h4>{t('flitaa')}</h4>
              <p>{t('flitaaIsADiversePlatform')}</p>
              <br />
              {/*  */}
              <h3>{t('flitaaOperators')}</h3>
              <p>{t('flitaaOperatorsReferToAllParties')}</p>
              <br />
              <h3>{t('flitaaServices')}</h3>
              <p>{t('flitaaServicesReferToVariousServices')}</p>
              <br />
              <h3>{t('flitaaPlatformRules')}</h3>
              <p>{t('flitaaPlatformRulesReferToAllRules')}</p>
              <br />
              <h3>{t('digitalCurrencies')}</h3>
              <p>{t('digitalCurrenciesReferToEncryptedOrDigitalTokens')}</p>
              <br />
              <h3>{t('digitalAssets')}</h3>
              <p>{t('digitalAssetsReferToDigitalCurrencies')}</p>
              <br />
              <h3>{t('flitaaAccounts')}</h3>
              <p>{t('flitaaAccountsReferToTheFoundationalVirtual')}</p>
              <br />
              <h3>{t('cryptoToCryptoTrading')}</h3>
              <p>{t('CryptoToCryptoTradingRefersToSpotTransactions')}</p>
              <br />
              <h3>{t('fiatToFiatTrading')}</h3>
              <p>{t('FiatToFiatTradingRefersToSpotTransactions')}</p>
              <br />
            </div>
            <div className='terms_content'>
              <h3>
                <b>1. {t('contractualRelationship')}</b>
              </h3>
              <p>{t('theseTermsConstituteALegalAgreement')}</p>
              <br />
              {/*  */}
              <h3>
                <b>2. {t('supplementaryProvisions')}</b>
              </h3>
              <p>{t('dueToTheRapidDevelopmentOfDigitalCurrencies')}</p>
              <br />
              {/*  */}
              <h3>
                <b>3. {t('changeOfTerms')}</b>
              </h3>
              <p>{t('flitaaReservesTheRightToChangeOrModify')}</p>
              <br />
              {/*  */}
              <h3>
                <b>4. {t('accountRegistration')}</b>
              </h3>
              <p>{t('allUsersMustApplyForAFlitaaAccount')}</p>
              <br />
              {/*  */}
              <h3>
                <b>5. {t('eligibility')}</b>
              </h3>
              <p>{t('byRegisteringToUseAFlitaaAccount')}</p>
              <br />
              <p>{t('IfAsAParentOrGuardian')}</p>
              <br />
              <p>{t('pleaseNoteThatSomeProductsAndServices')}</p>
              <br />
              {/*  */}
              <h3>
                <b>6. {t('identifyVerification')}</b>
              </h3>
              <p>{t('yourRegistrationOfAFlitaaAccountWillBeDeemed')}</p>
              <br />
              <p>{t('afterRegistrationYouMustEnsureThatTheInformation')}</p>
              <br />
              <p>{t('additionallyWeMayRequireYouToWait')}</p>
              <br />
              <p>{t('youHerebyAgreeToAbstainFromTransmitting')}</p>
              <br />
              <p>{t('duringTheSignUpProcess')}</p>
              <br />
              {/*  */}
              {/*  */}
              <h3>
                <b>7. {t('accessibility')}</b>
              </h3>
              <p>{t('toAccessTheFlitaaServicesYouMust')}</p>
              <br />
              {/*  */}
              {/*  */}
              <h3>
                <b>8. {t('accountUsage')}</b>
              </h3>
              <p>{t('theFlitaaAccountCanOnlyBeUsedByTheAccountRegistrant')}</p>
              <br />
              {/*  */}
              {/*  */}
              <h3>
                <b>9. {t('accountSecurity')}</b>
              </h3>
              <p>{t('FlitaaHasBeenCommittedToMaintainingTheSecurity')}</p>
              <br />
              <p>{t('youShouldBeSolelyResponsibleForTheSafety')}</p>
              <br />
              {/*  */}
            </div>
            {/* list */}
            <div className='terms_content'>
              <h3>10. {t('byCreatingAFlitaaAccountYouHerebyAgreeThat')}</h3>
              {/* <ol type='i'> */}
              <li>{t('youWillNotifyFlitaaImmediately')}</li>
              <br />
              <li>{t('youWillStrictlyAbideByAllMechanisms')}</li>
              <br />
              <li>{t('youWillTakeAppropriateSteps')}</li>
              <br />
              {/* </ol> */}
            </div>
            <div className='terms_content'>
              <h3>11. {t('flitaaServices')}</h3>
              <p>{t('uponCompletionOfTheRegistration')}</p>
              <br />
              <li>{t('provideModifyOrTerminate')}</li>
              <br />
              <li>{t('allowOrProhibitSomeUsers')}</li>
              <br />
            </div>
            <div className='terms_content'>
              <h3>12. {t('flitaaServiceGuidelines')}</h3>
              <li>{t('license')}</li>
              <br />
              <p>{t('providedThatYouConstantlyComply')}</p>
              <br />
              <p>{t('theseTermsOnlyGrantALimitedLicenceToAccess')}</p>
              <br />
              <p>{t('flitaaOwnsAnyFeedback')}</p>
              <br />
              <li>{t('restrictions')}</li>
              <br />
              <p>{t('whenYouUseFlitaaServices')}</p>
              <div className='terms_bulletPoint'>
                <li>&#x2022; {t('duringTheUseOfFlitaaServices')}</li>
                <li>&#x2022; {t('yourUseOfFlitaaServices')}</li>
                <li>&#x2022; {t('withoutPriorWrittenConsent')}</li>
                <li>
                  &#x2022;{' '}
                  {t('withoutPriorWrittenConsentFromFlitaaYouMayNotModify')}
                </li>
              </div>
              <p>{t('byAccessingFlitaaServices')}</p>
              <div className='terms_bulletPoint'>
                <li>&#x2022; {t('blockingAndClosing')}</li>
                <li>&#x2022; {t('reversingOrRefusing')}</li>
                <li>&#x2022; {t('freezingAndRestricting')}</li>
                <li>&#x2022; {t('reportingTheIncident')}</li>
                <li>&#x2022; {t('publishingTheAlleged')}</li>
                <li>&#x2022; {t('deletingAnyInformation')}</li>
              </div>
            </div>
            <div className='terms_content'>
              <h3>{t('digitalCurrencyServices')}</h3>
              <p>{t('yourDigitalCurrencyWallet')}</p>
              <br />
              <p>{t('allDigitalCurrencyTransactionsAreProcessed')}</p>
              <br />
              <p>{t('digitalCurrencyTransactionsCannotBeReversed')}</p>
              <br />
              <p>{t('weMayChargeNetworkFees')}</p>
              <br />
              <p>{t('weMayRefuseToProcess')}</p>
              {/* <br />
              <p>{t('holdFlitaaInnocent')}</p> */}
            </div>
            <div className='terms_content'>
              <h3>{t('delisting')}</h3>
              <p>{t('youHerebyAgreeThatFlitaa')}</p>
              <br />
              {/* <p>{t('followAllObligation')}</p>
              <br />
              <p>{t('credentialsNotExposed')}</p>
              <br />
              <p>{t('rationalMeasures')}</p> */}
            </div>
            <div className='terms_content'>
              <h3>{t('supportedDigitalCurrencies')}</h3>
              <p>{t('terminateUse')}</p>
              <br />
            </div>
            <div className='terms_content'>
              <h3>{t('disruptionOfService')}</h3>
              <p>{t('cannotGuarantee')}</p>
              <br />
              <p>{t('hardwareDowntime')}</p>
              <br />
              <p>{t('softwareDowntime')}</p>
              <br />
              <p>{t('overload')}</p>
              <br />
              <p>{t('severeWeather')}</p>
              <br />
              <p>{t('labourStrike')}</p>
              <br />
              <p>{t('governmentRegulation')}</p>
              <br />
              <p>{t('failureOfTelecomms')}</p>
              <br />
              <p>{t('anyOtherCause')}</p>
            </div>
            <div className='terms_content'>
              <h3>{t('exemptionOfLiability')}</h3>
              <p>{t('asIsBasis')}</p>
              <br />
              <p>{t('discontinueService')}</p>
              <br />
              <p>{t('notLiableForDelay')}</p>
              <br />
              <p>{t('serviceForPersonalUse')}</p>
              <br />
              <p>{t('notLiableForDamage')}</p>
              <br />
              <p>{t('unlawfulUse')}</p>
              <br />
              <p>{t('failureToComply')}</p>
              <br />
              <p>{t('notAccountable')}</p>
            </div>
            <div className='terms_content'>
              <h3>{t('communication')}</h3>
              <p>{t('accessingTheApp')}</p>
              <br />
              <b>{t('electronicSignature')}</b>
            </div>
            <div className='terms_content'>
              <h3>{t('correction')}</h3>
              <p>{t('rightToCorrect')}</p>
            </div>
            <div className='terms_content'>
              <h3>{t('general')}</h3>
              <p>{t('noFailure')}</p>
              <br />
              <p>{t('anyProvision')}</p>
              <br />
              <p>{t('doNotRely')}</p>
              <br />
              <p>{t('agreeToAssign')}</p>
            </div>
            <div className='terms_content'>
              <h3>{t('disputeResolution')}</h3>
              <p>{t('disputesFlitaa')}</p>
              <br />
              <p>{t('arbitration')}</p>
              <br />
              <p>{t('provisionToClause')}</p>
              <br />
              <p>{t('arbitralTribunal')}</p>
              <br />
              <p>{t('arbitrationInNigeria')}</p>
              <br />
              <p>{t('nothingInClause')}</p>
            </div>
            <div className='terms_content'>
              <h3>{t('governingLaw')}</h3>
              <p>{t('complyWithLaw')}</p>
            </div>
            <div className='terms_content'>
              <h3>{t('contactUs')}</h3>
              <p>{t('resolveComplaint')}</p>
            </div>
          </div>
        </div>
      </LandingWrapper>
    </>
  );
};

export default Terms;
