"use client";

import { StateContext } from "@/app/stateManager/context";
import { useContext, useEffect, useState } from "react";
import { FaBell } from "react-icons/fa";

const PersonalizeModal = () => {
  const { state, dispatch } = useContext(StateContext);
  const { personalizeModal } = state;

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
          console.log(c)
          console.log(c.substring(0, nameEQ.length - 1).trim())

          console.log(c.indexOf(nameEQ.slice(0, -1)));
          return c.indexOf(nameEQ) == 0;
        });
      

        return cookie ? cookie.substring(nameEQ.length) : null;
      };

      const getPreferences = () => {
        const jsonString = getCookie("userPreferences");
        userPreferences = jsonString ? JSON.parse(jsonString) : null;
        console.log(userPreferences);
        return userPreferences;
      };

      getPreferences();

      const checkCookieStatus = (name) => {
        const status = getCookie(name) !== null;
        console.log(status)
        return status;
      };
      checkCookieStatus(userPreferences);
    }
  }, []);

 
  const setCookies = (name, value, days) => {
    let expires = "";
    if (days) {
      let date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      expires = "; expires)=" + date.toUTCString();
    }
    if (typeof document !== "undefined") {
      document.cookie = name + "=" + (value || "") + expires + ";path='/'";
    }
  };
 
 
  const [preferences, setPreferences] = useState({
    jobRole: "",
    jobLocation: "",
  });

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
  };

 

  const handleSave = (e) => {
    e.preventDefault();

    const { jobRole, jobLocation } = preferences;
    const jsonString = JSON.stringify(preferences);
    setCookies("userPreferences", jsonString, 365);
    console.log(userPreferences);
  };

  const handleClose = () => {
    dispatch({ type: "PERSONALIZE_MODAL", payload: false });
  };

  return (
    <>
      {personalizeModal && (
        <div className="fixed h-[100vh] w-[100vw] flex justify-center items-center z-50 bg-black/80">
          <div className="bg-primary lg:h-[65vh] md:h-[75vh] h-[90vh] md:w-[50vw] w-[90vw] rounded-xl px-4 py-6 flex flex-col justify-around">
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
                className="personalize-input"
              />
              <input
                type="text"
                name="jobLocation"
                value={preferences.jobLocation}
                placeholder="Preferred location"
                onChange={handleChange}
                className="personalize-input"
              />
            </div>

            <div className="p-2 rounded-xl mt-8">
              <div className="flex justify-center">
                <FaBell />
              </div>
              <div className="lg:mx-20 my-4">
                <p className="text-center text-sm font-black">
                  We use cookies to make your experience with us better, save
                  your choices to see preferred jobs
                </p>
              </div>
              <div className="flex justify-around lg:mx-8 flex-co lg:flex-row my-4 mt-8">
                <button
                  onClick={handleClose}
                  className="text-xs  self-end bg-secondary text-primary px-3 py-2 rounded-lg"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSave}
                  className="text-xs self-end bg-secondary text-primary px-3 py-2 rounded-lg"
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
