// 自定义导航栏组件
import {
    Navbar as NextUINavbar, 
    NavbarBrand, 
    NavbarContent, 
    NavbarItem, 
    NavbarMenuToggle,
    NavbarMenu,
    NavbarMenuItem
  } from "@nextui-org/navbar";

import NextLink from "next/link";

import React from "react";

import {
	GithubIcon,
    Mylogo
} from "@/components/icons";

import { Lang } from "./lang";
import Link from "next/link";
import { Button } from "@nextui-org/react";



export const Navbar = () => {
  return (

    <NextUINavbar maxWidth="xl" position="sticky">
     
        {/** 顶部左侧导航栏 */}
        <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
            <NavbarBrand as="li" className="gap-3 max-w-fit">
                        <NextLink className="flex justify-start items-center gap-1" href="/">
                            <Mylogo/>
                            <p className="font-bold text-inherit">ACME</p>
                        </NextLink>
            </NavbarBrand>
        </NavbarContent>

        <NavbarContent 
        className="hidden sm:flex sm:basis-full"
        justify="end" >

           
        </NavbarContent>
        

         {/** 顶部右侧导航栏 */}
        <NavbarContent 
        className="hidden sm:flex basis-1/6 sm:basis-full"
        justify="end" >
             <Lang />
            <NavbarItem className="hidden sm:flex gap-2">
                <Link href="https://github.com/underwoodxie" aria-label="Github">
                        <GithubIcon className="text-default-500" />
                </Link>
            </NavbarItem>
            <Button color="primary">
            Button
            </Button>
        </NavbarContent>
        

    </NextUINavbar>

);
}
