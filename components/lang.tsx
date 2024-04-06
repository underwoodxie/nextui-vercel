'use client'


import { Select,SelectItem } from "@nextui-org/select";
import { px } from "framer-motion";
import { Component } from "react";


export const Lang =() => {
    return(
            
            <Select size="md" radius="lg" className="w-40">
                {/** 用className = “w-40” 限定宽度 */}
                <SelectItem key={"11"} >11</SelectItem>
                <SelectItem key={"2"} >2</SelectItem>
                <SelectItem key={"3"} >44</SelectItem>
            </Select>
)
}