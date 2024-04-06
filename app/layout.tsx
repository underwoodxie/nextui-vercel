import {Providers} from "./providers";
import "@/styles/globals.css";
import { Navbar } from "@/components/navbar";



export default function RootLayout({children}: { children: React.ReactNode }) {
  return (
    <html lang="en" className='dark'>
      <body>
        {/**导入顶部导航栏 */}
        <Navbar />
        
        {/** 导入Providers模块*/}
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}