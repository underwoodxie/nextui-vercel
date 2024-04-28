'use client';
import { usePathname } from 'next/navigation';
import {Button} from "@nextui-org/button";


// 自定义导航栏组件
import {
    Navbar as NextUINavbar, 
    NavbarBrand, 
    NavbarContent, 
    NavbarItem, 
  } from "@nextui-org/navbar";

// 导入icon
import {
	GithubIcon,
    MyLogo,
    TwitterIcon,
    HeartIcon,
} from "@/components/icons";

// 导入语言组件
import { Lang } from "./lang";

// 导入配置组件，获取左侧导航栏的所有页面路径
import { siteConfig } from "@/config/site";


import Link from "next/link";
import NextLink from "next/link";
import React from "react";
import clsx from "clsx";
import { link as linkStyles } from "@nextui-org/theme";
import { Divider } from '@nextui-org/react';


export const Navbar = () => {
   
    const pathname = usePathname();

  return (

    <NextUINavbar maxWidth="xl" position="sticky">
     
        {/** 顶部左侧导航栏 */}
        <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
            <MyLogo></MyLogo>
            {/** 遍历配置中的路由，并作为导航栏的块呈现出来 */}
            <ul className="lg:flex gap-4 justify-start ml-2">
					{siteConfig.navItems.map((item) => (
						<NavbarItem key={item.href}>
							<NextLink
								className={clsx(
									{
                                        'font-bold': pathname === item.href,
                                    }
								)}	
								href={item.href}
							>
								{item.label}
							</NextLink>
						</NavbarItem>
					))}
				</ul>
        </NavbarContent>

        

        {/** 顶部右侧导航栏 */}
        <NavbarContent 
        className="hidden sm:flex basis-1/6 sm:basis-full"
        justify="end" >
            {/**展示隐藏多语言功能  <Lang /> */}
            <NavbarItem className="hidden sm:flex gap-2">
                <Link href="https://github.com/underwoodxie/nextui-vercel" aria-label="Github">
                        <GithubIcon className="text-default-500" />
                </Link>
            </NavbarItem>
            <NavbarItem className="hidden sm:flex gap-2">
                <Link href="https://twitter.com/underwoodxie96" aria-label="Github">
                        <TwitterIcon className="text-default-500" ></TwitterIcon>
                </Link>
            </NavbarItem>
            <NavbarItem>
                <Button  className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg" radius="full" > 
                <HeartIcon />
                <Link href='https://ko-fi.com/S6S1WWCAR'> 
                <p>私達をサポート</p>
                <p className='text-xs'>120円を寄付する</p>
                </Link >
                </Button>
            </NavbarItem>
        </NavbarContent>
        

    </NextUINavbar>

);
}
