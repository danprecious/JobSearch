"use client"

import { useContext } from "react"
import { StateContext } from "@/app/stateManager/context"
import { FaBookmark } from "react-icons/fa"

export const Toast = () => {
    const { state } = useContext(StateContext)
    const { toggleToast } = state;
    // console.log(state);

    return (
        <div className={`bg-stone-900 ${toggleToast ? "flex animate-toast-in justify-center items-center" : "hidden animate-toast-out justify-center items-center"} dark:bg-darkBg fixed bottom-5 z-50 toast-border border-stone-300 text-center rounded-xl p-4 text-stone-200 dark:text-stone-400 right-20 w-[18em] h-[4em]`}>
            <FaBookmark /> <p className="mx-2">Successfully bookmarked job!</p>
        </div>
    )
}


