/* import the required React hooks and components */
"use client";
import { useState } from "react";
import useMediaQuery from "./libraries/useMediaQuery";
import MobileDesignStep1 from "./components/MobileDesignStep1";
import MobileDesignStep2 from "./components/MobileDesignStep2";
import MobileDesignStep3 from "./components/MobileDesignStep3";
import MobileDesignStep4 from "./components/MobileDesignStep4";
import MobileDesignStep5 from "./components/MobileDesignStep5";
import DesktopDesignStep1 from "./components/DesktopDesignStep1";
import DesktopDesignStep2 from "./components/DesktopDesignStep2";
import DesktopDesignStep3 from "./components/DesktopDesignStep3";
import DesktopDesignStep4 from "./components/DesktopDesignStep4";
import DesktopDesignStep5 from "./components/DesktopDesignStep5";

export default function Home() {
  /* sets up important state variables that control behavior and appearance */
  const isMobile = useMediaQuery("(max-width: 699px)");
  const [currentStep, setCurrentStep] = useState(1);
  const [totalArray, setTotalArray] = useState([]);
/* This formData object acts as a central hub to store and manage the user's input and selections throughout the multi-step form process */
  const [formData, setFormData] = useState({
    sec1Name: "",
    sec1Email: "",
    sec1Phone: "",
    selectedPlan: "Arcade",
    selectedAddons: [],
    planTerm: "monthly",
    plans: {
      yearly: [
        {
          type: "Arcade",
          rate: "$90/yr",
          free: "2 months free",
        },
        {
          type: "Advanced",
          rate: "$120/yr",
          free: "2 months free",
        },
        {
          type: "Pro",
          rate: "$150/yr",
          free: "2 months free",
        },
      ],
      monthly: [
        {
          type: "Arcade",
          rate: "$9/mo",
        },
        {
          type: "Advanced",
          rate: "$12/mo",
        },
        {
          type: "Pro",
          rate: "$15/mo",
        },
      ],
    },
    addons: {
      yearly: [
        {
          type: "Online service",
          description: "Access to multiplayer games",
          cost: "+$10/yr",
        },
        {
          type: "Larger storage",
          description: "Extra 1TB of cloud save",
          cost: "+$20/yr",
        },
        {
          type: "Customizable Profile",
          description: "Custom theme on your profile",
          cost: "+$20/yr",
        },
      ],
      monthly: [
        {
          type: "Online service",
          description: "Access to multiplayer games",
          cost: "+$1/mo",
        },
        {
          type: "Larger storage",
          description: "Extra 1TB of cloud save",
          cost: "+$2/mo",
        },
        {
          type: "Customizable Profile",
          description: "Custom theme on your profile",
          cost: "+$2/mo",
        },
      ],
    },
  });
  /* track and display validation errors associated with user input fields in the first step of the multi-step form */
  const [formErrors, setFormErrors] = useState({
    sec1Name: "",
    sec1Email: "",
    sec1Phone: "",
  });

  console.log(formData, totalArray);

  /* provides a way to dynamically choose the appropriate step component to render based on the user's device type */
  const stepsComponents = [
    isMobile ? MobileDesignStep1 : DesktopDesignStep1,
    isMobile ? MobileDesignStep2 : DesktopDesignStep2,
    isMobile ? MobileDesignStep3 : DesktopDesignStep3,
    isMobile ? MobileDesignStep4 : DesktopDesignStep4,
    isMobile ? MobileDesignStep5 : DesktopDesignStep5,
  ];

  /* ensures that the correct step component is assigned to CurrentStepComponent based on the user's progress through the form */
  const CurrentStepComponent =
    stepsComponents[currentStep - 1] || stepsComponents[0];

  /* provides essential functionality for navigating backward through the steps of the multi-step form */
  function handleBack() {
    setCurrentStep((prevStep) => prevStep - 1);
  }

 /* provides essential functionality for advancing to the next step in the multi-step form */
  function handleNext() {
    setCurrentStep((prevStep) => prevStep + 1);
  }

 /* ensures that users can only proceed to the next step of the multi-step form if the data entered in the current step (Step 1) is valid */
  function handleNextStep1() {
    if (validateStep1()) {
      setCurrentStep((prevStep) => prevStep + 1);
    }
  }

/* facilitates the progression of the user through the final step of the multi-step form, typically for confirming and submitting the form data */
  function handleConfirm() {
    setCurrentStep((prevStep) => prevStep + 1);
  }

/* ensures that the data provided by users in Step 1 is accurate, complete, and meets the required criteria */
  function validateStep1() {
    let hasErrors = false;

    if (!formData.sec1Name) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        sec1Name: "Name is required",
      }));
      hasErrors = true;
    }

    if (!formData.sec1Email) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        sec1Email: "Email Address is required",
      }));
      hasErrors = true;
    } else if (formData.sec1Email.indexOf("@") === -1) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        sec1Email: "Email Address is invalid",
      }));
      hasErrors = true;
    }

    if (!formData.sec1Phone) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        sec1Phone: "Phone Number is required",
      }));
      hasErrors = true;
    } else if (!/^\d+$/.test(formData.sec1Phone)) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        sec1Phone: "Phone Number is invalid",
      }));
      hasErrors = true;
    }

    return !hasErrors;
  }

/* enables dynamic updates to the form's state, real-time feedback to users, and efficient data binding */
  function handleStep1Change(event) {
    const { id, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: value,
    }));
  }

/* clears or resets error messages associated with specific form fields in Step 1 of the multi-step form */
  function clearFormError(field) {
    setFormErrors((prevErrors) => ({
      ...prevErrors,
      [field]: "",
    }));
  }

/* manage and respond to the user's selection of a subscription plan within the multi-step form. */
  function handlePlanClick(plan) {
    setFormData((prevFormData) => ({
      ...prevFormData,
      selectedPlan: plan,
    }));
    calculateTotal(plan, formData.planTerm, formData.selectedAddons);
  }

/* allow users to switch between different billing terms (monthly and yearly) for the selected subscription plan in the multi-step form */
  function handlePlanTermToggle() {
    setFormData((prevFormData) => ({
      ...prevFormData,
      planTerm: prevFormData.planTerm === "monthly" ? "yearly" : "monthly",
    }));
    calculateTotal(
      formData.selectedPlan,
      formData.planTerm === "monthly" ? "yearly" : "monthly",
      formData.selectedAddons
    );
  }

/* allow users to select or deselect addons for their chosen subscription plan in the multi-step form */
  function handleAddonPick(addonType) {
    setFormData((prevFormData) => {
      const newSelectedAddons = prevFormData.selectedAddons.includes(addonType)
        ? prevFormData.selectedAddons.filter((addon) => addon !== addonType)
        : [...prevFormData.selectedAddons, addonType];

      return {
        ...prevFormData,
        selectedAddons: newSelectedAddons,
      };
    });
    calculateTotal(
      formData.selectedPlan,
      formData.planTerm,
      formData.selectedAddons.includes(addonType)
        ? formData.selectedAddons.filter((addon) => addon !== addonType)
        : [...formData.selectedAddons, addonType]
    );
  }

/* compute and update the total cost associated with the user's chosen subscription plan and selected addons. */
  function calculateTotal(plan, term, addons) {
    const planData = formData.plans[term].find((item) => item.type === plan);
    const addonData = formData.addons[term].filter((item) =>
      addons.includes(item.type)
    );

    const amounts = [
      ...addonData.map((addon) =>
        parseFloat(addon.cost.replace(/[^\d.-]/g, ""))
      ),
      parseFloat(planData.rate.replace(/[^\d.-]/g, "")),
    ];

    setTotalArray(amounts);
  }

  return (
    <>
      <CurrentStepComponent
        formData={formData}
        formErrors={formErrors}
        clearFormError={clearFormError}
        handleBack={handleBack}
        handleNext={handleNext}
        handleStep1Change={handleStep1Change}
        handleNextStep1={handleNextStep1}
        handleConfirm={handleConfirm}
        handlePlanClick={handlePlanClick}
        handlePlanTermToggle={handlePlanTermToggle}
        handleAddonPick={handleAddonPick}
        totalArray={totalArray}
        setCurrentStep={setCurrentStep}
      />
    </>
  );
}
