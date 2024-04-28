export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "猫ミーム素材集 ダウンロード",
	description: "ここでは、最新かつオンラインで人気のあるネコの猫ミーム素材をダウンロードできます。60種類以上のネコの猫ミーム素材を提供しています。これらの素材は無料で入手でき、ダウンロード時にはウォーターマークが付きません。",
	navItems: [
		{ 
			label: "猫ミーム素材集",
			href: "/",
		},
		{ 
		label: "猫ミームの作り方",
		href: "/blog",
		},
		{ 
			label: "素材リスト",
			href: "/cat-meme-list",
		}
	],
	links: {
		github: "https://github.com/underwoodxie",
	},
	
};

export const lang = [{value:"it"}, {value:"zh-CN"},{value:"js"}]
