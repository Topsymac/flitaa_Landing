import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import LandingWrapper from '../../wrappers/landingWrapper/LandingWrapper';
import './Terms.css';
import Loading from '../../molecules/loading/Loading';

const Terms = () => {
   const [loading, setLoading] = useState(true);
  const { t } = useTranslation();
  const { pathname } = useLocation();
   useEffect(() => {
     const timeout = setTimeout(() => {
       setLoading(false);
     }, 2000);

     return () => clearTimeout(timeout);
   }, []); 
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <LandingWrapper>
          <div className="terms_wrapper">
            <div className="terms">
              <div className="terms_header">
                <h1 className="terms-content-head">{t("terms&Condition")}</h1>
                <p className="termsBlurRight"></p>
              </div>
              <div className="terms_content">
                <h3 className="terms_introduction terms-content-head">
                  <p className="termsBlurLeft"></p>
                  {t("introduction")}
                </h3>
                <p>{t("theseFlitaa")}</p>
                <br />
                <p>{t("pleaseReadTheTermsCarefully")}</p>
                <br />
                <p>{t("flitaaIsNotResponsibleFor")}</p>
                <br />
                <p>{t("byAccessingUsingOrAttempting")}</p>
                <br />
                {/*  */}
              </div>
              <div className="terms_content">
                <h3 className="terms-content-head">{t("definitions")}</h3>
                <h4 className="terms-content-head">{t("flitaa")}</h4>
                <p>{t("flitaaIsADiversePlatform")}</p>
                <br />
                {/*  */}
                <h3 className="terms-content-head">{t("flitaaOperators")}</h3>
                <p>{t("flitaaOperatorsReferToAllParties")}</p>
                <br />
                <h3 className="terms-content-head">{t("flitaaServices")}</h3>
                <p>{t("flitaaServicesReferToVariousServices")}</p>
                <br />
                <h3 className="terms-content-head">
                  {t("flitaaPlatformRules")}
                </h3>
                <p>{t("flitaaPlatformRulesReferToAllRules")}</p>
                <br />
                <h3 className="terms-content-head">{t("digitalCurrencies")}</h3>
                <p>{t("digitalCurrenciesReferToEncryptedOrDigitalTokens")}</p>
                <br />
                <h3 className="terms-content-head">{t("digitalAssets")}</h3>
                <p>{t("digitalAssetsReferToDigitalCurrencies")}</p>
                <br />
                <h3 className="terms-content-head">{t("flitaaAccounts")}</h3>
                <p>{t("flitaaAccountsReferToTheFoundationalVirtual")}</p>
                <br />
                <h3 className="terms-content-head">
                  {t("cryptoToCryptoTrading")}
                </h3>
                <p>{t("CryptoToCryptoTradingRefersToSpotTransactions")}</p>
                <br />
                <h3 className="terms-content-head">{t("fiatToFiatTrading")}</h3>
                <p>{t("FiatToFiatTradingRefersToSpotTransactions")}</p>
                <br />
              </div>
              <div className="terms_content">
                <h3 className="terms-content-head">
                  <b>1. {t("contractualRelationship")}</b>
                </h3>
                <p>{t("theseTermsConstituteALegalAgreement")}</p>
                <br />
                {/*  */}
                <h3 className="terms-content-head">
                  <b>2. {t("supplementaryProvisions")}</b>
                </h3>
                <p>{t("dueToTheRapidDevelopmentOfDigitalCurrencies")}</p>
                <br />
                {/*  */}
                <h3 className="terms-content-head">
                  <b>3. {t("changeOfTerms")}</b>
                </h3>
                <p>{t("flitaaReservesTheRightToChangeOrModify")}</p>
                <br />
                {/*  */}
                <h3 className="terms-content-head">
                  <b>4. {t("accountRegistration")}</b>
                </h3>
                <p>{t("allUsersMustApplyForAFlitaaAccount")}</p>
                <br />
                {/*  */}
                <h3 className="terms-content-head">
                  <b>5. {t("eligibility")}</b>
                </h3>
                <p>{t("byRegisteringToUseAFlitaaAccount")}</p>
                <br />
                <p>{t("IfAsAParentOrGuardian")}</p>
                <br />
                <p>{t("pleaseNoteThatSomeProductsAndServices")}</p>
                <br />
                {/*  */}
                <h3 className="terms-content-head">
                  <b>6. {t("identifyVerification")}</b>
                </h3>
                <p>{t("yourRegistrationOfAFlitaaAccountWillBeDeemed")}</p>
                <br />
                <p>{t("afterRegistrationYouMustEnsureThatTheInformation")}</p>
                <br />
                <p>{t("additionallyWeMayRequireYouToWait")}</p>
                <br />
                <p>{t("youHerebyAgreeToAbstainFromTransmitting")}</p>
                <br />
                <p>{t("duringTheSignUpProcess")}</p>
                <br />
                {/*  */}
                {/*  */}
                <h3 className="terms-content-head">
                  <b>7. {t("accessibility")}</b>
                </h3>
                <p>{t("toAccessTheFlitaaServicesYouMust")}</p>
                <br />
                {/*  */}
                {/*  */}
                <h3 className="terms-content-head">
                  <b>8. {t("accountUsage")}</b>
                </h3>
                <p>
                  {t("theFlitaaAccountCanOnlyBeUsedByTheAccountRegistrant")}
                </p>
                <br />
                {/*  */}
                {/*  */}
                <h3 className="terms-content-head">
                  <b>9. {t("accountSecurity")}</b>
                </h3>
                <p>{t("FlitaaHasBeenCommittedToMaintainingTheSecurity")}</p>
                <br />
                <p>{t("youShouldBeSolelyResponsibleForTheSafety")}</p>
                <br />
                {/*  */}
              </div>
              {/* list */}
              <div className="terms_content">
                <h3 className="terms-content-head">
                  10. {t("byCreatingAFlitaaAccountYouHerebyAgreeThat")}
                </h3>
                {/* <ol type='i'> */}
                <li>{t("youWillNotifyFlitaaImmediately")}</li>
                <br />
                <li>{t("youWillStrictlyAbideByAllMechanisms")}</li>
                <br />
                <li>{t("youWillTakeAppropriateSteps")}</li>
                <br />
                {/* </ol> */}
              </div>
              <div className="terms_content">
                <h3 className="terms-content-head">
                  11. {t("flitaaServices")}
                </h3>
                <p>{t("uponCompletionOfTheRegistration")}</p>
                <br />
                <li>{t("provideModifyOrTerminate")}</li>
                <br />
                <li>{t("allowOrProhibitSomeUsers")}</li>
                <br />
              </div>
              <div className="terms_content">
                <h3 className="terms-content-head">
                  12. {t("flitaaServiceGuidelines")}
                </h3>
                <li className="terms-content-head">{t("license")}</li>
                <br />
                <p>{t("providedThatYouConstantlyComply")}</p>
                <br />
                <p>{t("theseTermsOnlyGrantALimitedLicenceToAccess")}</p>
                <br />
                <p>{t("flitaaOwnsAnyFeedback")}</p>
                <br />
                <li className="terms-content-head">{t("restrictions")}</li>
                <br />
                <p>{t("whenYouUseFlitaaServices")}</p>
                <div className="terms_bulletPoint">
                  <span className="terms_bulletPoint-span">
                    &#x2022;<li> {t("duringTheUseOfFlitaaServices")}</li>
                  </span>
                  <span className="terms_bulletPoint-span">
                    &#x2022;<li> {t("yourUseOfFlitaaServices")}</li>
                  </span>
                  <span className="terms_bulletPoint-span">
                    &#x2022;<li> {t("withoutPriorWrittenConsent")}</li>
                  </span>
                  <span className="terms_bulletPoint-span">
                    &#x2022;{" "}
                    <li>
                      {t("withoutPriorWrittenConsentFromFlitaaYouMayNotModify")}
                    </li>
                  </span>
                </div>
                <p>{t("byAccessingFlitaaServices")}</p>
                <div className="terms_bulletPoint">
                  <span className="terms_bulletPoint-span">
                    &#x2022;<li> {t("blockingAndClosing")}</li>
                  </span>
                  <span className="terms_bulletPoint-span">
                    &#x2022;<li> {t("reversingOrRefusing")}</li>
                  </span>
                  <span className="terms_bulletPoint-span">
                    &#x2022;<li> {t("freezingAndRestricting")}</li>
                  </span>
                  <span className="terms_bulletPoint-span">
                    &#x2022;<li> {t("reportingTheIncident")}</li>
                  </span>
                  <span className="terms_bulletPoint-span">
                    &#x2022;<li> {t("publishingTheAlleged")}</li>
                  </span>
                  <span className="terms_bulletPoint-span">
                    &#x2022;<li> {t("deletingAnyInformation")}</li>
                  </span>
                </div>
              </div>
              <div className="terms_content">
                <h3 className="terms-content-head">
                  {t("digitalCurrencyServices")}
                </h3>
                <p>{t("yourDigitalCurrencyWallet")}</p>
                <br />
                <p>{t("allDigitalCurrencyTransactionsAreProcessed")}</p>
                <br />
                <p>{t("digitalCurrencyTransactionsCannotBeReversed")}</p>
                <br />
                <p>{t("weMayChargeNetworkFees")}</p>
                <br />
                <p>{t("weMayRefuseToProcess")}</p>
                <br />
              </div>
              <div className="terms_content">
                <h3 className="terms-content-head">{t("delisting")}</h3>
                <p>{t("youHerebyAgreeThatFlitaa")}</p>
                <br />
              </div>
              <div className="terms_content">
                <h3 className="terms-content-head">
                  {t("supportedDigitalCurrencies")}
                </h3>
                <p>{t("ourDigitalCurrencyServicesAreAvailable")}</p>
                <br />
              </div>
              <div className="terms_content">
                <h3 className="terms-content-head">
                  {t("thirdPartyPayments")}
                </h3>
                <p>{t("weAreNotResponsibleForEnsuringThat")}</p>
                <br />
                <p>{t("flitaaHasNoControlOver")}</p>
                <br />
              </div>
              <div className="terms_content">
                <h3 className="terms-content-head">{t("advancedProtocols")}</h3>
                <p>{t("unlessSpecificallyAnnounced")}</p>
                <br />
              </div>
              <div className="terms_content">
                <h3 className="terms-content-head">
                  {t("operationOfDigitalCurrency")}
                </h3>
                <p>{t("weDoNotOwnOrControlTheUnderlying")}</p>
                <br />
                <b>{t("inParticularTheUnderlyingProtocolsAre")}</b>
              </div>
              <div className="terms_content">
                <h3 className="terms-content-head">
                  {t("transactionLimitsAndEnhancedDueDiligence")}
                </h3>
                <p>{t("theUseOfAllFlitaaServices")}</p>
                <br />
                <p>{t("weMayRequireYouToSubmit")}</p>
                <br />
              </div>
              {/*  */}
              {/* list */}
              <div className="terms_content">
                <h3 className="terms-content-head">
                  {t("flitaaSavingServices")}
                </h3>
                <p>{t("flitaaOffersFlitaaSavings")}</p>
                <br />
                <p>{t("flitaaSavingsAssets")}</p>
                <br />
                {/* <ol type='i'> */}
                <div className="terms_bulletPoint-div">
                  <span className="terms_bulletPoint-span">
                    &#x2022;<li> {t("whenYouUseFlitaaSavingsService")}</li>
                  </span>
                  <span className="terms_bulletPoint-span">
                    &#x2022;<li> {t("youShallAbideByRelevantLaws")}</li>
                  </span>
                  <span className="terms_bulletPoint-span">
                    &#x2022;<li> {t("whenYouUseFlitaaSavings")}</li>
                  </span>
                  <span className="terms_bulletPoint-span">
                    &#x2022;<li> {t("youAgreeThatAllTransactions")}</li>
                  </span>
                  <span className="terms_bulletPoint-span">
                    &#x2022;<li> {t("flitaaReservesTheRight")}</li>
                  </span>
                  <span className="terms_bulletPoint-span">
                    &#x2022;<li> {t("dueToNetworkDelay")}</li>
                  </span>
                  <br />
                </div>
                {/* </ol> */}
              </div>
              <div className="terms_content">
                <h3 className="terms-content-head">{t("p2pTransactions")}</h3>
                <p>{t("flitaaOperatesAPeerToPeer")}</p>
                <br />
                <p>{t("aWithdrawalInvolvesAFlitaaUser")}</p>
                <br />
                <p>{t("aDepositInvolvesAFlitaaUser")}</p>
                <br />
                <p>{t("byUsingTheFlitaaPlatform")}</p>
                <br />
                <p>{t("thisProvisionIsLegallyBinding")}</p>
                <br />
                <p>{t("flitaaReservesTheRightTo")}</p>
                <br />
                <p>{t("dueToNetworkDelays")}</p>
                <br />
                <p>{t("flitaaReservesTheRightToUpdate")}</p>
              </div>
              <div className="terms_content">
                <h2 className="terms-content-head">
                  {t("suspensionTermination")}
                </h2>
              </div>
              <div className="terms_content">
                <h3 className="terms-content-head">
                  {t("suspensionOfFlitaaAccount")}
                </h3>
                <p>{t("youAgreeThatFlitaaShall")}</p>
                <br />
                <p>{t("youAgreeThatWhileYourAccount")}</p>
                <br />
                {/* list */}
                <div className="terms_bulletPoint-div">
                  <span className="terms_bulletPoint-span">
                    &#x2022;{" "}
                    <li>
                      {t("theFlitaaAccountIsSubjectToAGovernmentalProceeding")}
                    </li>
                  </span>
                  <span className="terms_bulletPoint-span">
                    &#x2022;<li> {t("weDetectUnusualActivities")}</li>
                  </span>
                  <span className="terms_bulletPoint-span">
                    &#x2022;<li> {t("weDetectGlitches")}</li>
                  </span>
                  <span className="terms_bulletPoint-span">
                    &#x2022;<li> {t("weDetectUnauthorisedAccess")}</li>
                  </span>
                  <span className="terms_bulletPoint-span">
                    &#x2022;<li> {t("weHaveConcernsThatATransaction")}</li>
                  </span>
                  <span className="terms_bulletPoint-span">
                    &#x2022;<li> {t("weSuspectMoneyLaundering")}</li>
                  </span>
                  <span className="terms_bulletPoint-span">
                    &#x2022;<li> {t("ifYourCreditOrDebitCard")}</li>
                  </span>
                  <span className="terms_bulletPoint-span">
                    &#x2022;<li> {t("useOfYourFlitaaAccount")}</li>
                  </span>
                  <span className="terms_bulletPoint-span">
                    &#x2022;<li> {t("wePerceiveAHeightenedRisk")}</li>
                  </span>
                  <span className="terms_bulletPoint-span">
                    &#x2022;<li> {t("youTakeAnyActionThatMay")}</li>
                  </span>
                  <span className="terms_bulletPoint-span">
                    &#x2022;<li> {t("ourServicePartnersAre")}</li>
                  </span>
                  <span className="terms_bulletPoint-span">
                    &#x2022;<li> {t("flitaaBelivesThatInThe")}</li>
                  </span>
                  <span className="terms_bulletPoint-span">
                    &#x2022;<li> {t("flitaaDiscoversThatInTheProcess")}</li>
                  </span>
                  <span className="terms_bulletPoint-span">
                    &#x2022;<li> {t("nonComplianceOfTheUser")}</li>
                  </span>
                  <span className="terms_bulletPoint-span">
                    &#x2022;<li> {t("weAreRequiredToDoSo")}</li>
                  </span>
                  <br />
                </div>
                <p>{t("weMayAlsoRefuseToComplete")}</p>
                <br />
              </div>
              <div className="terms_content">
                <p className="terms-content-head">
                  {t("cancellationOfFlitaaAccount")}
                </p>
                <br />
                <p>{t("inCaseOfAnyOfTheFollowing")}</p>
                <br />
                <div className="terms_bulletPoint-div">
                  <span className="terms_bulletPoint-span">
                    &#x2022;<li> {t("afterFlitaaTerminatesServices")}</li>
                  </span>
                  <span className="terms_bulletPoint-span">
                    &#x2022;<li> {t("theInformationThatYouHave")}</li>
                  </span>
                  <span className="terms_bulletPoint-span">
                    &#x2022;<li> {t("whenTheseTermsAreAmended")}</li>
                  </span>
                  <span className="terms_bulletPoint-span">
                    &#x2022;<li> {t("youRequestThatFlitaaServices")}</li>
                  </span>
                  <span className="terms_bulletPoint-span">
                    &#x2022;<li> {t("anyOtherCircumstancesWhere")}</li>
                  </span>
                  <br />
                </div>
              </div>
              <div className="terms_content">
                <h3 className="terms-content-head">
                  {t("administrativeAndSecurity")}
                </h3>
                <p>{t("youAcknowledgeThatOurDecision")}</p>
                <br />
                <p>{t("onTerminationOfTheseTerms")}</p>
                <br />
                <p>{t("inTheCaseOfAccountTermination")}</p>
                <br />
                <p>{t("flitaaMaintainsFullCustody")}</p>
                <br />
                <p>{t("shouldYourFlitaaAccountBeTerminated")}</p>
                <br />
                <p>{t("ifFlitaaisInformedThatAnyDigital")}</p>
                <br />
                <p>{t("flitaaIsNoObligationToallow")}</p>
                <br />
              </div>
              {/*  */}
              <div className="terms_content">
                <h2 className="terms-content-head">
                  {t("representationWarrantiesLiabilities")}
                </h2>
              </div>
              <div className="terms_content">
                <h3 className="terms-content-head">{t("ReleaseOfFlitaa")}</h3>
                <p>{t("ifYouHaveADisputeWithOne")}</p>
                <br />
              </div>
              <div className="terms_content">
                <h3 className="terms-content-head">{t("noFinancialAdvice")}</h3>
                <p>{t("flitaaIsNotYourInvestmentManager")}</p>
                <br />
              </div>
              <div className="terms_content">
                <h3 className="terms-content-head">
                  {t("disclaimerOfWarranties")}
                </h3>
                <p>{t("toTheMaximumExtentPermitted")}</p>
                <br />
                <p>{t("flitaaWillMakeReasonable")}</p>
                <br />
                <p>{t("theDisclaimerOfImplied")}</p>
                <br />
              </div>
              <div className="terms_content">
                <h3 className="terms-content-head">
                  {t("DisclaimerOfWarrantiesAnd")}
                </h3>
                <p>{t("toTheMaximumExtent")}</p>
                <br />
                <p>{t("notwithstandingTheForegoing")}</p>
                <br />
              </div>
              <div className="terms_content">
                <h3 className="terms-content-head">{t("indemification")}</h3>
                <p>{t("youAgreeToIndemnify")}</p>
                <br />
              </div>
              <div className="terms_content">
                <h3 className="terms-content-head">{t("limitationOfLoss")}</h3>
                <br />
                <p>{t("inNoEventShallFlitaa")}</p>
                <br />
                {/* links */}
                <div className="terms_bulletPoint-div">
                  <span className="terms_bulletPoint-span">
                    &#x2022; <li>{t("anyLossOfProfitsOrLoss")}</li>
                  </span>
                  <span className="terms_bulletPoint-span">
                    &#x2022; <li> {t("anyLossOfOrDamageTo")}</li>
                  </span>
                  <span className="terms_bulletPoint-span">
                    &#x2022;
                    <li> {t("anyLossOfUseOfHardWare")}</li>
                  </span>
                  <span className="terms_bulletPoint-span">
                    &#x2022;<li> {t("anyLossOrDamageWhatsoeverWhich")}</li>
                  </span>
                </div>
              </div>
              <div className="terms_content">
                <h3 className="terms-content-head">{t("safetyAndSecurity")}</h3>
                <br />
                <p>{t("flitaaIsNotLiableForAny")}</p>
                <br />
              </div>
              {/*  */}
              <div className="terms_content">
                <h3 className="terms-content-head">
                  {t("flitaaInfinityLoans")}
                </h3>
                <br />
                {/* links */}
                <div className="terms_bulletPoint-div">
                  <span className="terms_bulletPoint-span">
                    &#x2022; <li> {t("youAgreeThatYourEligibility")}</li>
                  </span>
                  <span className="terms_bulletPoint-span">
                    &#x2022; <li> {t("youAgreeThatUponALoanApplication")}</li>
                  </span>
                  <span className="terms_bulletPoint-span">
                    &#x2022; <li> {t("youAgreeThatOnceYour")}</li>
                  </span>
                  <span className="terms_bulletPoint-span">
                    &#x2022; <li> {t("youAgreeThatYouShallNotBeEntitled")}</li>
                  </span>
                  <span className="terms_bulletPoint-span">
                    &#x2022;{" "}
                    <li> {t("youAgreeThatTheLoanInterestRepayment")}</li>
                  </span>
                  <span className="terms_bulletPoint-span">
                    &#x2022; <li> {t("youAgreeThatUponYourLoanApproval")}</li>
                  </span>
                  <span className="terms_bulletPoint-span">
                    &#x2022; <li> {t("youPromiseToPayTheseLoanAmounts")}</li>
                  </span>
                  <span className="terms_bulletPoint-span">
                    &#x2022;{" "}
                    <li> {t("youAgreeThatWhereYourStakedCollateral")}</li>
                  </span>
                  <span className="terms_bulletPoint-span">
                    &#x2022; <li> {t("flitaaReservesTheRightToPresume")}</li>
                  </span>
                  <span className="terms_bulletPoint-span">
                    &#x2022; <li> {t("flitaaReservesTheRightToAccept")}</li>
                  </span>
                  <span className="terms_bulletPoint-span">
                    &#x2022; <li> {t("youAgreeToPayAllInterest")}</li>
                  </span>
                  <span className="terms_bulletPoint-span">
                    &#x2022; <li> {t("youAgreeToPayAllCosts")}</li>
                  </span>
                  <span className="terms_bulletPoint-span">
                    &#x2022; <li> {t("youHerebyExpresslyConsent")}</li>
                  </span>
                  <span className="terms_bulletPoint-span">
                    &#x2022; <li> {t("youAuthoriseFlitaa")}</li>
                  </span>
                  <span className="terms_bulletPoint-span">
                    &#x2022; <li> {t("yourAcceptanceOfTheseTerms")}</li>
                  </span>
                </div>
              </div>
              <div className="terms_content">
                <h3 className="terms-content-head">{t("applicableLaws")}</h3>
                <br />
                <p>{t("itIsYourResponsibilityToAbide")}</p>
                <br />
              </div>
              <div className="terms_content">
                <h3 className="terms-content-head">{t("PrivacyPolicy")}</h3>
                <br />
                <p>{t("accessToFlitaaServicesWill")}</p>
                <br />
                <br />
                <h3 className="terms-content-head">{t("customerFeedback")}</h3>
                <br />
                <p>{t("pleaseReadThisSection")}</p>
                <br />
              </div>
              <div className="terms_content">
                <h3 className="terms-content-head">{t("contactFlitaa")}</h3>
                <br />
                <p>{t("ifYouHaveAnyFeedback")}</p>
                <br />
              </div>
              <div className="terms_content">
                <h3 className="terms-content-head">{t("complaints")}</h3>
                <br />
                <p>{t("inTheEventOfAComplaint")}</p>
                <br />
                {/* links */}
                <div className="terms_bulletPoint">
                  <span className="terms_bulletPoint-span">
                    &#x2022;<li> {t("offerToResolveYour")}</li>
                  </span>
                  <span className="terms_bulletPoint-span">
                    &#x2022;<li> {t("MakeADeterminationTo")}</li>
                  </span>
                  <span className="terms_bulletPoint-span">
                    &#x2022;<li> {t("offerToResolveYourComplaint")}</li>
                  </span>
                </div>
              </div>
              <div className="terms_content">
                <h3 className="terms-content-head">{t("noticeOfClaimAnd")}</h3>
                <br />
                <p>{t("inTheEventOfAnIssue")}</p>
                <br />
                <p>{t("inTheEventTheDisputeCannot")}</p>
                <br />
              </div>
              <div className="terms_content">
                <h3 className="terms-content-head">
                  {t("arbitrationAndGoverning")}
                </h3>
                <p>{t("youAndFlitaaOperatorsAgree")}</p>
                <br />
                <p>{t("anyArbitrationAgainstFlitaaOperators")}</p>
                <br />
                <p>{t("ifWeRequestArbitrationAgainstYou")}</p>
                <br />
                <p>{t("theSeatOfTheArbitrationShall")}</p>
                <br />
              </div>
              <div className="terms_content">
                <h3 className="terms-content-head">{t("classActionWaiver")}</h3>
                <br />
                <p>{t("youAgreeThatAnyClaimsRelating")}</p>
                <br />
              </div>
              <div className="terms_content">
                <h3 className="terms-content-head">{t("modifications")}</h3>
                <br />
                <p>{t("flitaaReservesTheRightToUpdateModify")}</p>
                <br />
              </div>
              <div className="terms_content">
                <h3 className="terms-content-head">{t("severability")}</h3>
                <br />
                <p>{t("ifAnyPortionOfTheseTerms")}</p>
                <br />
              </div>
              <div className="terms_content">
                <h3 className="terms-content-head">{t("miscellaneous")}</h3>
                <br />
                <p>{t("forceMajeure")}</p>
                <br />
                <p>{t("historicalPriceData")}</p>
                <br />
                <p>{t("entireAgreement")}</p>
                <br />
                <p>{t("changeOfControl")}</p>
                <br />
                <p>{t("survival")}</p>
                <br />
                <p>{t("fraudManagement")}</p>
                <br />
                {/*  */}
                <div className="terms_bulletPoint-div">
                  <span className="terms_bulletPoint-span">
                    &#x2022;<li> {t("youSendOutFundsToAMerchant")}</li>
                  </span>
                  <span className="terms_bulletPoint-span">
                    &#x2022;
                    <li> {t("youTransferFundsIntoAMerchantAccount")}</li>
                  </span>
                  <span className="terms_bulletPoint-span">
                    &#x2022;<li> {t("youGainAccessToAnotherFlitaaUser")}</li>
                  </span>
                  <span className="terms_bulletPoint-span">
                    &#x2022;<li> {t("aLienIsPlacedOnTheMerchant")}</li>
                  </span>
                </div>
                <p>{t("consideringThatThePlatformIsAn")}</p>
                <br />
                <p>{t("uponCompletionOfTheInvestigation")}</p>
                <br />
                <p>{t("youAreAdvisedToReachOutToTheirFinancial")}</p>
                <br />
              </div>
            </div>
          </div>
        </LandingWrapper>
      )}
    </>
  );
};

export default Terms;
