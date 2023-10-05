import React from "react";
import "./Terms.css";
import LandingWrapper from "../../wrappers/landingWrapper/LandingWrapper";
import { useTranslation } from "react-i18next";

const Terms = () => {
  const { t } = useTranslation();
  return (
    <>
      <LandingWrapper>
        <div className="terms_wrapper">
          <div className="terms_header">
            <h1>{t("terms&Condition")}</h1>
          </div>
          <div className="terms_content">
            <h3>{t("lastUpdated")}</h3>
            <p>{t("carefullyUnderstand")}</p>
            <br />
            <p>{t("consent")}</p>
            <br />
            <p>{t("useOfFlitaa")}</p>
            <br />
            <p>{t("subjectToModification")}</p>
            <br />
            <p>{t("effectOnDateOfPublication")}</p>
            <br />
            <p>{t("AppMayBeMonitored")}</p>
            <br />
            <p>{t("doNotConsent")}</p>
            <br />
            <p>{t("giveConsent")}</p>
          </div>
          <div className="terms_content">
            <h3>{t("herebyAgreed")}</h3>
            <h3>{t("definitions")}</h3>
            <p>{t("purposeOfTerms")}</p>
            <br />
            <p>{t("tradeMarkedAndOwned")}</p>
            <br />
            <p>{t("credentialsMean")}</p>
            <br />
            <p>{t("privacyPolicyMean")}</p>
            <br />
            <p>{t("servicesMean")}</p>
            <br />
            <p>{t("smsMean")}</p>
            <br />
            <p>{t("transactionFeesMean")}</p>
            <br />
            <p>{t("flitaaMeanFlitbase")}</p>
            <br />
            <p>{t("youMeanPerson")}</p>
          </div>
          <div className="terms_content">
            <h3>{t("useOfLicence")}</h3>
            <p>{t("ownedByFlitbase")}</p>
            <br />
            <p>{t("consentToAbide")}</p>
            <br />
            <p>{t("doNotGrant")}</p>
            <br />
            <p>{t("ensureAllDocument")}</p>
          </div>
          <div className="terms_content">
            <h3>{t("limitationsOfUse")}</h3>
            <li>{t("notMoreThanOne")}</li>
            <br />
            <li>{t("contraryToLaw")}</li>
            <br />
            <li>{t("establishReasonableConnection")}</li>
            <br />
            <li>{t("notUseInconsistentManner")}</li>
            <br />
            <li>{t("notInfringeIntellectual")}</li>
            <br />
            <li>{t("notCommunicate")}</li>
            <br />
            <li>{t("notEngageAutomated")}</li>
            <br />
            <li>{t("notInterfere")}</li>
            <br />
            <li>{t("attemptToImpersonate")}</li>
            <br />
            <li>{t("notTrick")}</li>
            <br />
            <li>{t("submitFalse")}</li>
            <br />
            <li>{t("useUsername")}</li>
            <br />
            <li>{t("notUseInformation")}</li>
            <br />
            <li>{t("notHarassEmployee")}</li>
          </div>
          <div className="terms_content">
            <h3>{t("useOfFlitaaService")}</h3>
            <p>{t("ageOfUse")}</p>
            <br />
            <p>{t("mayBePrinted")}</p>
            <br />
            <p>{t("notIntendedForDistribution")}</p>
            <br />
            <p>{t("releaseFrom")}</p>
          </div>
          <div className="terms_content">
            <h3>{t("transactionFees")}</h3>
            <p>{t("setCharge")}</p>
          </div>
          <div className="terms_content">
            <h3>{t("personalInformation")}</h3>
            <p>{t("backgroundCheck")}</p>
            <br />
            <p>{t("informationToVerify")}</p>
            <br />
            <p>{t("accessDevice")}</p>
            <br />
            <p>{t("verifyServiceProvider")}</p>
            <br />
            <p>{t("procurePersonalInformation")}</p>
            <br />
            <p>{t("holdFlitaaInnocent")}</p>
          </div>
          <div className="terms_content">
            <h3>{t("usersObligation")}</h3>
            <p>{t("responsibleForObligation")}</p>
            <br />
            <p>{t("followAllObligation")}</p>
            <br />
            <p>{t("credentialsNotExposed")}</p>
            <br />
            <p>{t("rationalMeasures")}</p>
          </div>
          <div className="terms_content">
            <h3>{t("termination")}</h3>
            <p>{t("terminateUse")}</p>
            <br />
            <p>{t("suspendUse")}</p>
            <br />
            <p>{t("unlawfulPractice")}</p>
            <br />
            <p>{t("complyWithCourtOrder")}</p>
            <p>{t("suspectsBreach")}</p>
            <br />
            <p>{t("suspensionNeccessary")}</p>
            <br />
            <p>{t("decidesToSuspend")}</p>
            <br />
            <p>{t("notAffect")}</p>
          </div>
          <div className="terms_content">
            <h3>{t("disruptionOfService")}</h3>
            <p>{t("cannotGuarantee")}</p>
            <br />
            <p>{t("hardwareDowntime")}</p>
            <br />
            <p>{t("softwareDowntime")}</p>
            <br />
            <p>{t("overload")}</p>
            <br />
            <p>{t("severeWeather")}</p>
            <br />
            <p>{t("labourStrike")}</p>
            <br />
            <p>{t("governmentRegulation")}</p>
            <br />
            <p>{t("failureOfTelecomms")}</p>
            <br />
            <p>{t("anyOtherCause")}</p>
          </div>
          <div className="terms_content">
            <h3>{t("exemptionOfLiability")}</h3>
            <p>{t("asIsBasis")}</p>
            <br />
            <p>{t("discontinueService")}</p>
            <br />
            <p>{t("notLiableForDelay")}</p>
            <br />
            <p>{t("serviceForPersonalUse")}</p>
            <br />
            <p>{t("notLiableForDamage")}</p>
            <br />
            <p>{t("unlawfulUse")}</p>
            <br />
            <p>{t("failureToComply")}</p>
            <br />
            <p>{t("notAccountable")}</p>
          </div>
          <div className="terms_content">
            <h3>{t("communication")}</h3>
            <p>{t("accessingTheApp")}</p>
            <br />
            <b>{t("electronicSignature")}</b>
          </div>
          <div className="terms_content">
            <h3>{t("correction")}</h3>
            <p>{t("rightToCorrect")}</p>
          </div>
          <div className="terms_content">
            <h3>{t("general")}</h3>
            <p>{t("noFailure")}</p>
            <br />
            <p>{t("anyProvision")}</p>
            <br />
            <p>{t("doNotRely")}</p>
            <br />
            <p>{t("agreeToAssign")}</p>
          </div>
          <div className="terms_content">
            <h3>{t("disputeResolution")}</h3>
            <p>{t("disputesFlitaa")}</p>
            <br />
            <p>{t("arbitration")}</p>
            <br />
            <p>{t("provisionToClause")}</p>
            <br />
            <p>{t("arbitralTribunal")}</p>
            <br />
            <p>{t("arbitrationInNigeria")}</p>
            <br />
            <p>{t("nothingInClause")}</p>
          </div>
          <div className="terms_content">
            <h3>{t("governingLaw")}</h3>
            <p>{t("complyWithLaw")}</p>
          </div>
          <div className="terms_content">
            <h3>{t("contactUs")}</h3>
            <p>{t("resolveComplaint")}</p>
          </div>
        </div>
      </LandingWrapper>
    </>
  );
};

export default Terms;
