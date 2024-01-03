import { FilterProps } from '@/Types'
import React from 'react'

const CustomFilter = ({ title }: FilterProps) => {
    return (
        <div>{title}</div>
    )
}

export default CustomFilter