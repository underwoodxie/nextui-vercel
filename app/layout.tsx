import { Providers } from "./providers";
import "@/styles/globals.css";
import { Navbar } from "@/components/navbar";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import Link from "next/link";


//根据配置信息传递title和描述信息
export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s`,
  },
  description: siteConfig.description,
};



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head >
        <meta name="google-site-verification" content="QxYjfwdDcv4OE0uuqCMf7qBcq07hz6r17zjh0s4Et9Q" />
        <link rel="icon" href="https://memesstyle.com/mylogo.png" type="image/png" />
        <meta name="trustpilot-one-time-domain-verification-id" content="a9572969-de71-4ab0-ab45-62825e60ef7c" />
      </head>

      {/* Google Analytics */}
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-ZVXD2B0YZM"></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-ZVXD2B0YZM');
          `,
        }}
      />
      <body >
        {/**导入顶部导航栏 */}
        <Navbar />

        {/** 导入Providers模块*/}
        <Providers >
          <main>
            {children}
          </main>
        </Providers>

        <footer className="w-full  items-center justify-center py-3  bg-white">
          <section className="w-full flex justify-center ">

            <p className="text-center font-light slate-200 text-gray-400 test-xs">
              もし私たちのウェブサイトが気に入ったら、友達に共有していただければ幸いです。
              それは私たちにとって非常に役立ちます。
            </p>
          </section>
          <section className="w-full flex justify-center ">
            <Link
              className="items-center gap-1 text-current text-primary"
              href="https://www.youtube.com/playlist?list=PLto5TlVLJZxLzkVCjTXsP4a-fLSGqRmz5">Youtube</Link>
            &nbsp;｜&nbsp;
            <Link className="flex items-center gap-1 text-current text-primary"
              href="https://dic.pixiv.net/a/%E7%8C%AB%E3%83%9F%E3%83%BC%E3%83%A0">ピクシブ百科事典</Link>
            &nbsp;｜&nbsp;
            <Link className="flex items-center gap-1 text-current text-primary"
              href="https://ja.wikipedia.org/wiki/%E7%8C%AB%E3%83%9F%E3%83%BC%E3%83%A0">猫ミームWiki</Link>
            &nbsp;｜&nbsp;
            <Link className="flex items-center gap-1 text-current text-primary"
              href="https://www.capcut.com/">Capcut</Link>
          </section>
        </footer>

      </body>
    </html>
  );
}