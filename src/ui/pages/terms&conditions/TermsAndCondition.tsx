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
              <br />
            </div>
            <div className='terms_content'>
              <h3>{t('delisting')}</h3>
              <p>{t('youHerebyAgreeThatFlitaa')}</p>
              <br />
            </div>
            <div className='terms_content'>
              <h3>{t('supportedDigitalCurrencies')}</h3>
              <p>{t('ourDigitalCurrencyServicesAreAvailable')}</p>
              <br />
            </div>
            <div className='terms_content'>
              <h3>{t('thirdPartyPayments')}</h3>
              <p>{t('weAreNotResponsibleForEnsuringThat')}</p>
              <br />
              <p>{t('flitaaHasNoControlOver')}</p>
              <br />
            </div>
            <div className='terms_content'>
              <h3>{t('advancedProtocols')}</h3>
              <p>{t('unlessSpecificallyAnnounced')}</p>
              <br />
            </div>
            <div className='terms_content'>
              <h3>{t('operationOfDigitalCurrency')}</h3>
              <p>{t('weDoNotOwnOrControlTheUnderlying')}</p>
              <br />
              <b>{t('inParticularTheUnderlyingProtocolsAre')}</b>
            </div>
            <div className='terms_content'>
              <h3>{t('transactionLimitsAndEnhancedDueDiligence')}</h3>
              <p>{t('theUseOfAllFlitaaServices')}</p>
              <br />
              <p>{t('weMayRequireYouToSubmit')}</p>
              <br />
            </div>
            {/*  */}
            {/* list */}
            <div className='terms_content'>
              <h3>{t('flitaaSavingServices')}</h3>
              <p>{t('flitaaOffersFlitaaSavings')}</p>
              <br />
              <p>{t('flitaaSavingsAssets')}</p>
              <br />
              {/* <ol type='i'> */}
              <div className='terms_bulletPoint-div'>
                <li>&#x2022; {t('whenYouUseFlitaaSavingsService')}</li>
                <li>&#x2022; {t('youShallAbideByRelevantLaws')}</li>
                <li>&#x2022; {t('whenYouUseFlitaaSavings')}</li>
                <li>&#x2022; {t('youAgreeThatAllTransactions')}</li>
                <li>&#x2022; {t('flitaaReservesTheRight')}</li>
                <li>&#x2022; {t('dueToNetworkDelay')}</li>
                <br />
              </div>
              {/* </ol> */}
            </div>
            <div className='terms_content'>
              <h3>{t('p2pTransactions')}</h3>
              <p>{t('flitaaOperatesAPeerToPeer')}</p>
              <br />
              <p>{t('aWithdrawalInvolvesAFlitaaUser')}</p>
              <br />
              <p>{t('aDepositInvolvesAFlitaaUser')}</p>
              <br />
              <p>{t('byUsingTheFlitaaPlatform')}</p>
              <br />
              <p>{t('thisProvisionIsLegallyBinding')}</p>
              <br />
              <p>{t('flitaaReservesTheRightTo')}</p>
              <br />
              <p>{t('dueToNetworkDelays')}</p>
              <br />
              <p>{t('flitaaReservesTheRightToUpdate')}</p>
            </div>
            <div className='terms_content'>
              <h2>{t('`suspensionTermination`')}</h2>
            </div>
            <div className='terms_content'>
              <h3>{t('`suspensionOfFlitaaAccount`')}</h3>
              <p>{t('youAgreeThatFlitaaShall')}</p>
              <br />
              <p>{t('youAgreeThatWhileYourAccount')}</p>
              <br />
              {/* list */}
              <div className='terms_bulletPoint-div'>
                <li>
                  &#x2022;{' '}
                  {t('theFlitaaAccountIsSubjectToAGovernmentalProceeding')}
                </li>
                <li>&#x2022; {t('weDetectUnusualActivities')}</li>
                <li>&#x2022; {t('weDetectGlitches')}</li>
                <li>&#x2022; {t('weDetectUnauthorisedAccess')}</li>
                <li>&#x2022; {t('weHaveConcernsThatATransaction')}</li>
                <li>&#x2022; {t('weSuspectMoneyLaundering')}</li>
                <li>&#x2022; {t('ifYourCreditOrDebitCard')}</li>
                <li>&#x2022; {t('useOfYourFlitaaAccount')}</li>
                <li>&#x2022; {t('wePerceiveAHeightenedRisk')}</li>
                <li>&#x2022; {t('youTakeAnyActionThatMay')}</li>
                <li>&#x2022; {t('ourServicePartnersAre')}</li>
                <li>&#x2022; {t('flitaaBelivesThatInThe')}</li>
                <li>&#x2022; {t('flitaaDiscoversThatInTheProcess')}</li>
                <li>&#x2022; {t('nonComplianceOfTheUser')}</li>
                <li>&#x2022; {t('weAreRequiredToDoSo')}</li>
                <br />
              </div>
              <p>{t('weMayAlsoRefuseToComplete')}</p>
              <br />
            </div>
            <div className='terms_content'>
              <p>{t('cancellationOfFlitaaAccount')}</p>
              <br />
              <p>{t('inCaseOfAnyOfTheFollowing')}</p>
              <br />
              <div className='terms_bulletPoint-div'>
                <li>&#x2022; {t('afterFlitaaTerminatesServices')}</li>
                <li>&#x2022; {t('theInformationThatYouHave')}</li>
                <li>&#x2022; {t('whenTheseTermsAreAmended')}</li>
                <li>&#x2022; {t('youRequestThatFlitaaServices')}</li>
                <li>&#x2022; {t('anyOtherCircumstancesWhere')}</li>
                <br />
              </div>
            </div>
            <div className='terms_content'>
              <h3>{t('administrativeAndSecurity')}</h3>
              <p>{t('youAcknowledgeThatOurDecision')}</p>
              <br />
              <p>{t('onTerminationOfTheseTerms')}</p>
              <br />
              <p>{t('inTheCaseOfAccountTermination')}</p>
              <br />
              <p>{t('flitaaMaintainsFullCustody')}</p>
              <br />
              <p>{t('shouldYourFlitaaAccountBeTerminated')}</p>
              <br />
              <p>{t('ifFlitaaisInformedThatAnyDigital')}</p>
              <br />
              <p>{t('flitaaIsNoObligationToallow')}</p>
              <br />
            </div>
            {/*  */}
            <div className='terms_content'>
              <h2>{t('`representationWarrantiesLiabilities`')}</h2>
            </div>
            <div className='terms_content'>
              <h3>{t('`ReleaseOfFlitaa`')}</h3>
              <p>{t('ifYouHaveADisputeWithOne')}</p>
              <br />
            </div>
            <div className='terms_content'>
              <h3>{t('`noFinancialAdvice`')}</h3>
              <p>{t('flitaaIsNotYourInvestmentManager')}</p>
              <br />
            </div>
            <div className='terms_content'>
              <h3>{t('`disclaimerOfWarranties`')}</h3>
              <p>{t('toTheMaximumExtentPermitted')}</p>
              <br />
              <p>{t('flitaaWillMakeReasonable')}</p>
              <br />
              <p>{t('theDisclaimerOfImplied')}</p>
              <br />
            </div>
            <div className='terms_content'>
              <h3>{t('DisclaimerOfWarrantiesAnd')}</h3>
              <p>{t('toTheMaximumExtent')}</p>
              <br />
              <p>{t('notwithstandingTheForegoing')}</p>
              <br />
            </div>
            <div className='terms_content'>
              <h3>{t('indemification')}</h3>
              <p>{t('youAgreeToIndemnify')}</p>
              <br />
            </div>
            <div className='terms_content'>
              <h3>{t('limitationOfLoss')}</h3>
              <br />
              <p>{t('inNoEventShallFlitaa')}</p>
              <br />
              {/* links */}
              <div className='terms_bulletPoint-div'>
                <li>&#x2022; {t('anyLossOfProfitsOrLoss')}</li>
                <li>&#x2022; {t('anyLossOfOrDamageTo')}</li>
                <li>&#x2022; {t('anyLossOfUseOfHardWare')}</li>
                <li>&#x2022; {t('anyLossOrDamageWhatsoeverWhich')}</li>
              </div>
            </div>
            <div className='terms_content'>
              <h3>{t('safetyAndSecurity')}</h3>
              <br />
              <p>{t('flitaaIsNotLiableForAny')}</p>
              <br />
            </div>
            {/*  */}
            <div className='terms_content'>
              <h3>{t('flitaaInfinityLoans')}</h3>
              <br />
              {/* links */}
              <div className='terms_bulletPoint-div'>
                <li>&#x2022; {t('youAgreeThatYourEligibility')}</li>
                <li>&#x2022; {t('youAgreeThatUponALoanApplication')}</li>
                <li>&#x2022; {t('youAgreeThatOnceYour')}</li>
                <li>&#x2022; {t('youAgreeThatYouShallNotBeEntitled')}</li>
                <li>&#x2022; {t('youAgreeThatTheLoanInterestRepayment')}</li>
                <li>&#x2022; {t('youAgreeThatUponYourLoanApproval')}</li>
                <li>&#x2022; {t('youPromiseToPayTheseLoanAmounts')}</li>
                <li>&#x2022; {t('youAgreeThatWhereYourStakedCollateral')}</li>
                <li>&#x2022; {t('flitaaReservesTheRightToPresume')}</li>
                <li>&#x2022; {t('flitaaReservesTheRightToAccept')}</li>
                <li>&#x2022; {t('youAgreeToPayAllInterest')}</li>
                <li>&#x2022; {t('youAgreeToPayAllCosts')}</li>
                <li>&#x2022; {t('youHerebyExpresslyConsent')}</li>
                <li>&#x2022; {t('youAuthoriseFlitaa')}</li>
                <li>&#x2022; {t('yourAcceptanceOfTheseTerms')}</li>
              </div>
            </div>
            <div className='terms_content'>
              <h3>{t('applicableLaws')}</h3>
              <br />
              <p>{t('itIsYourResponsibilityToAbide')}</p>
              <br />
            </div>
            <div className='terms_content'>
              <h3>{t('PrivacyPolicy')}</h3>
              <br />
              <p>{t('accessToFlitaaServicesWill')}</p>
              <br />
              <br />
              <h3>{t('customerFeedback')}</h3>
              <br />
              <p>{t('pleaseReadThisSection')}</p>
              <br />
            </div>
            <div className='terms_content'>
              <h3>{t('contactFlitaa')}</h3>
              <br />
              <p>{t('ifYouHaveAnyFeedback')}</p>
              <br />
            </div>
            <div className='terms_content'>
              <h3>{t('complaints')}</h3>
              <br />
              <p>{t('inTheEventOfAComplaint')}</p>
              <br />
              {/* links */}
              <div className='terms_bulletPoint'>
                <li>&#x2022; {t('offerToResolveYour')}</li>
                <li>&#x2022; {t('MakeADeterminationTo')}</li>
                <li>&#x2022; {t('offerToResolveYourComplaint')}</li>
              </div>
            </div>
            <div className='terms_content'>
              <h3>{t('noticeOfClaimAnd')}</h3>
              <br />
              <p>{t('inTheEventOfAnIssue')}</p>
              <br />
              <p>{t('inTheEventTheDisputeCannot')}</p>
              <br />
            </div>
            <div className='terms_content'>
              <h3>{t('arbitrationAndGoverning')}</h3>
              <p>{t('youAndFlitaaOperatorsAgree')}</p>
              <br />
              <p>{t('anyArbitrationAgainstFlitaaOperators')}</p>
              <br />
              <p>{t('ifWeRequestArbitrationAgainstYou')}</p>
              <br />
              <p>{t('theSeatOfTheArbitrationShall')}</p>
              <br />
            </div>
            <div className='terms_content'>
              <h3>{t('classActionWaiver')}</h3>
              <br />
              <p>{t('youAgreeThatAnyClaimsRelating')}</p>
              <br />
            </div>
            <div className='terms_content'>
              <h3>{t('modifications')}</h3>
              <br />
              <p>{t('flitaaReservesTheRightToUpdateModify')}</p>
              <br />
            </div>
            <div className='terms_content'>
              <h3>{t('severability')}</h3>
              <br />
              <p>{t('ifAnyPortionOfTheseTerms')}</p>
              <br />
            </div>
            <div className='terms_content'>
              <h3>{t('miscellaneous')}</h3>
              <br />
              <p>{t('forceMajeure')}</p>
              <br />
              <p>{t('historicalPriceData')}</p>
              <br />
              <p>{t('entireAgreement')}</p>
              <br />
              <p>{t('changeOfControl')}</p>
              <br />
              <p>{t('survival')}</p>
              <br />
              <p>{t('fraudManagement')}</p>
              <br />
              {/*  */}
              <div className='terms_bulletPoint-div'>
                <li>&#x2022; {t('youSendOutFundsToAMerchant')}</li>
                <li>&#x2022; {t('youTransferFundsIntoAMerchantAccount')}</li>
                <li>&#x2022; {t('youGainAccessToAnotherFlitaaUser')}</li>
                <li>&#x2022; {t('aLienIsPlacedOnTheMerchant')}</li>
              </div>
              <p>{t('consideringThatThePlatformIsAn')}</p>
              <br />
              <p>{t('uponCompletionOfTheInvestigation')}</p>
              <br />
              <p>{t('youAreAdvisedToReachOutToTheirFinancial')}</p>
              <br />
            </div>
          </div>
        </div>
      </LandingWrapper>
    </>
  );
};

export default Terms;
