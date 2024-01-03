"use client";

import { CustomButtonProps } from "@/Types"
import Image from "next/image"

const CustomButton = ({ title, btnType, isDisabled, textStyles, rightIcon, containerStyles, handleClick }: CustomButtonProps) => {
    return (
        <button
            disabled={false}
            type={btnType}
            className={`${containerStyles} flex flex-row relative justify-center items-center py-3 px-6 outline-none`}
            onClick={handleClick}
        >
            <span className={`${textStyles} flex-1`}>
                {title}
            </span>
        </button>
    )
}

export default CustomButton