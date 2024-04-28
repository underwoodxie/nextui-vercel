// app/providers.tsx
// Providers 组件的作用是提供一个统一的地方来管理应用程序的全局上下文，例如路由、主题等，并将这些全局配置传递给应用程序的所有子组件，使得子组件能够共享这些配置信息。

"use client";

import * as React from "react";
import { NextUIProvider } from "@nextui-org/system";
import { useRouter } from 'next/navigation'


export function Providers({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  return (

    <NextUIProvider navigate={router.push}>
      {children}
    </NextUIProvider>
  )
}
