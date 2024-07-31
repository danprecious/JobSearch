"use client";

import { StateContext } from "@/app/stateManager/context";
import { useContext, useEffect, useState } from "react";
import { FaBell } from "react-icons/fa";

const PersonalizeModal = () => {
  const { state, dispatch } = useContext(StateContext);
  const { personalizeModal, toggleProfile } = state;

  // if(typeof document !== undefined){
  //   let cookie = document.cookie;

  //   if(cookie == null){
  //     dispatch({type: "PERSONALIZE_MODAL", payload: !personalizeModal})
  //   }
  // }

  const [preferences, setPreferences] = useState({
    jobRole: "",
    jobLocation: "",
  });
  const [inputError, setInputError] = useState("");

  let userPreferences;

  useEffect(() => {
    if (typeof document !== undefined) {
      console.log(document.cookie);

      const getCookie = (name) => {
        let nameEQ = name + "=";
        let ca = document.cookie.split(";");
        console.log(ca);
        let cookie = ca.find((c) => {
          c = c.trim();
          console.log(c);
          console.log(c.substring(0, nameEQ.length).trim());

          console.log(c.indexOf(nameEQ.slice(0)));
          return c.indexOf(nameEQ) == 0;
        });

        return cookie ? cookie.substring(nameEQ.length) : null;
      };

      const getPreferences = () => {
        const jsonString = getCookie("userPreferences");
        userPreferences = jsonString ? JSON.parse(jsonString) : null;
        const status = userPreferences !== null;
        console.log(status);
        if (!status) {
          dispatch({ type: "PERSONALIZE_MODAL", payload: true });
        }
        console.log(userPreferences);
        dispatch({ type: "USER_PREFERENCES", payload: userPreferences });
        return userPreferences;
      };

      getPreferences();
    }
  }, []);

  const setCookies = (name, value, days) => {
    if (value !== "") {
      let expires = "";
      if (days) {
        let date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        expires = "; expires)=" + date.toUTCString();
      }
      if (typeof document !== "undefined") {
        document.cookie = name + "=" + (value || "") + expires + ";path='/'";
      }
    }
  };

  const handleChange = (e) => {
    e.preventDefault();

    let target = e.target;
    setPreferences(() => {
      if (e.target.name === "jobRole") {
        return { ...preferences, jobRole: target.value };
      }
      if (e.target.name === "jobLocation") {
        return { ...preferences, jobLocation: target.value };
      }
    });
    setInputError("")
  };

  const handleSave = (e) => {
    e.preventDefault();

    console.log(preferences);
    const { jobRole, jobLocation } = preferences;
    const jsonString = JSON.stringify(preferences);
    if (jobLocation === "" && jobRole === "") {
        setInputError("Please fill in those details")
    } else {
      setCookies("userPreferences", jsonString, 365);
      dispatch({ type: "PERSONALIZE_MODAL", payload: !personalizeModal });
      
    }
  };
  
  const handleClose = () => {
    dispatch({ type: "PERSONALIZE_MODAL", payload: false });
    dispatch({ type: "TOGGLE_PROFILE", payload: false });
    // console.log(personalizeModal);
  };

  return (
    <>
      {personalizeModal && (
        <div className="fixed h-[100vh] w-[100vw] flex justify-center items-center z-50 bg-black/80">
          <div className="bg-primaryShade lg:h-[65vh] md:h-[75vh] h-[90vh] md:w-[50vw] w-[90vw] rounded-xl px-4 py-6 flex flex-col justify-around">
            <div className="text-center">
              <h3 className="text-[1.5rem] font-semibold">
                Personalize your Job Feed
              </h3>
            </div>
            <div className="text-center p-2">
              <p className="text-sm">
                Only see jobs that you're interested in and in your preferred
                location
              </p>
            </div>
            <div className="flex flex-col lg:flex-row items-center lg:justify-center ">
              <input
                type="text"
                name="jobRole"
                value={preferences.jobRole}
                placeholder="Job role"
                onChange={handleChange}
                className="personalize-input bg-primary border-primary"
              />
              <input
                type="text"
                name="jobLocation"
                value={preferences.jobLocation}
                placeholder="Preferred location"
                onChange={handleChange}
                className="personalize-input bg-primary border-primary"
              />
            </div>
              <div className="text-center">{inputError && <p className="text-red-600 text-sm">{inputError}</p>}</div>

            <div className="p-2 rounded-xl mt-8">
              <div className="flex justify-center">
                <FaBell />
              </div>
              <div className="lg:mx-20 my-4">
                <p className="text-center text-sm font-semibold">
                  We use cookies to make your experience with us better, save
                  your choices to see preferred jobs
                </p>
              </div>
              <div className="flex justify-around lg:mx-8 flex-co lg:flex-row my-4 mt-8">
                <button
                  onClick={handleClose}
                  className="text-xs  self-end bg-primary font-bold px-3 py-2 rounded-lg"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSave}
                  className="text-xs self-end bg-primary px-3 font-bold py-2 rounded-lg"
                >
                  Save choices
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PersonalizeModal;
