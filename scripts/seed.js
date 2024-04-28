//给数据库插入数据使用
const { sql } = require('@vercel/postgres');


const video = [

  {

    title: "ワップ 猫",
    downloadurl: "https://pub-d81332ee385741718118505c735e2f46.r2.dev/downloads/Cat Dancing to Wop 猫ミーム素材.mp4",
    description: "「Wop」という曲を踊る猫。",
    like_number: 999,
    is_hot: "not",
    upload_time: 1712852108582,

  },
  {
    title: "車を運転するドライブ猫",
    downloadurl: "https://pub-d81332ee385741718118505c735e2f46.r2.dev/downloads/Cat Driving  Green Screen Template猫ミーム素材.mp4",
    description: "猫ミーム劇場の動画では車での通勤時やドライブ、外出や移動のシーンでよく使用されるミームです。",
    like_number: 999,
    is_hot: "not",
    upload_time: 1712852142408,
  },

  {

    title: "Cat Screaming",
    downloadurl: "https://pub-d81332ee385741718118505c735e2f46.r2.dev/downloads/Cat Screaming 猫ミーム素材.mp4",
    description: "",
    like_number: 999,
    is_hot: "not",
    upload_time: 1712852171795,

  },

  {
    title: "Cat Wants You To Open Door",
    downloadurl: "https://pub-d81332ee385741718118505c735e2f46.r2.dev/downloads/Cat Wants You To Open Door Meme Green Screen Template 猫ミーム素材 .mp4",
    description: "",
    like_number: 999,
    is_hot: "not",
    upload_time: 1712852116895,
  },

  {
    title: "Cat and trending",
    downloadurl: "https://pub-d81332ee385741718118505c735e2f46.r2.dev/downloads/Cat and trending 猫ミーム素材 .mp4",
    description: "",
    like_number: 999,
    is_hot: "not",
    upload_time: 1712852158752,
  },

  {
    title: "Cat dancing",
    downloadurl: "https://pub-d81332ee385741718118505c735e2f46.r2.dev/downloads/Cat dancing green screen 猫ミーム素材.mp4",
    description: "",
    like_number: 999,
    is_hot: "not",
    upload_time: 1712852158707,
  },
  {
    title: "Cat eating chips",
    downloadurl: "https://pub-d81332ee385741718118505c735e2f46.r2.dev/downloads/Cat eating chips on a green screen 猫ミーム素材.mp4",
    description: "",
    like_number: 999,
    is_hot: "not",
    upload_time: 1712852111297,
  },
  {
    title: "Cat files nails",
    downloadurl: "https://pub-d81332ee385741718118505c735e2f46.r2.dev/downloads/Cat files nails green screen猫ミーム素材.mp4",
    description: "",
    like_number: 999,
    is_hot: "not",
    upload_time: 1712852135831,
  },
  {

    title: "家を出てバッグを背負った猫",
    downloadurl: "https://pub-d81332ee385741718118505c735e2f46.r2.dev/downloads/Cat leave home 猫ミーム素材.mp4",
    description: "",
    like_number: 999,
    is_hot: "not",
    upload_time: 1712852171153,

  },
  {

    title: "とうもろこしを食べている猫",
    downloadurl: "https://pub-d81332ee385741718118505c735e2f46.r2.dev/downloads/Cat mukbang corn green screen 猫ミーム素材mp4.mp4",
    description: "",
    like_number: 999,
    is_hot: "not",
    upload_time: 1712852150372,

  },

  {

    title: "パソコンの前でタイプしている猫",
    downloadurl: "https://pub-d81332ee385741718118505c735e2f46.r2.dev/downloads/Cat typing green screen cat memes_kKy7VvTkTE8.mp4",
    description: "",
    like_number: 999,
    is_hot: "not",
    upload_time: 1712852144821,

  },

  {

    title: "大きな瞳孔を持つかわいい猫",
    downloadurl: "https://pub-d81332ee385741718118505c735e2f46.r2.dev/downloads/Cute Cat With Big Dilated Pupils Meme Green Screen Chroma Key Template 猫ミーム素材.mp4",
    description: "",
    like_number: 999,
    is_hot: "not",
    upload_time: 1712852175249,

  },


  {

    title: "花をくわえて歩くかわいい犬",
    downloadurl: "https://pub-d81332ee385741718118505c735e2f46.r2.dev/downloads/Cute dog dance green screen.mp4",
    description: "",
    like_number: 999,
    is_hot: "not",
    upload_time: 1714128477140,

  },

  {

    title: "果物を欲しがっている猿",
    downloadurl: "https://pub-d81332ee385741718118505c735e2f46.r2.dev/downloads/Demanding Monkey Meme (HD GREEN SCREEN) 猫ミーム素材.mp4",
    description: "",
    like_number: 999,
    is_hot: "not",
    upload_time: 1712852150161,

  },


  {

    title: "エモな猫の髪のひっくり返し",
    downloadurl: "https://pub-d81332ee385741718118505c735e2f46.r2.dev/downloads/Emo Cat Hair Flip _ Green Screen 猫ミーム素材.mp4",
    description: "",
    like_number: 999,
    is_hot: "not",
    upload_time: 1712852149781,

  },
  {

    title: "Ahmad Mohsen",
    downloadurl: "https://pub-d81332ee385741718118505c735e2f46.r2.dev/downloads/Green Screen Ahmad Mohsen Meme 猫ミーム素材.mp4",
    description: "",
    like_number: 999,
    is_hot: "not",
    upload_time: 1712852136426,

  },
  {

    title: "踊っている白猫",
    downloadurl: "https://pub-d81332ee385741718118505c735e2f46.r2.dev/downloads/Green Screen Beat the Koto Nai Cat Meme 猫ミーム素材.mp4",
    description: "",
    like_number: 999,
    is_hot: "not",
    upload_time: 1712852158376,

  },
  {

    title: "ビートのリズムに合わせて踊っている犬",

    downloadurl: "https://pub-d81332ee385741718118505c735e2f46.r2.dev/downloads/Green Screen Beat the Koto Nai Dog Meme 猫ミーム素材 .mp4",

    description: "",

    like_number: 999,

    is_hot: "not",

    upload_time: 1712852122315,

  },


  {

    title: "うつろな表情の黒猫",

    downloadurl: "https://pub-d81332ee385741718118505c735e2f46.r2.dev/downloads/Green Screen Black Cat Zoning Out Meme 猫ミーム素材mp4.mp4",

    description: "",

    like_number: 999,

    is_hot: "not",

    upload_time: 1712852177918,

  },


  {

    title: "喧嘩している猫二匹",

    downloadurl: "https://pub-d81332ee385741718118505c735e2f46.r2.dev/downloads/Green Screen Cat Fight Meme 猫ミーム素材.mp4",

    description: "",

    like_number: 999,

    is_hot: "not",

    upload_time: 1712852179243,

  },


  {

    title: "戦っている二匹のオレンジ色の猫",

    downloadurl: "https://pub-d81332ee385741718118505c735e2f46.r2.dev/downloads/Green Screen Cat Hits Another Cat Meme 猫ミーム素材.mp4",

    description: "",

    like_number: 999,

    is_hot: "not",

    upload_time: 1712852177309,

  },


  {

    title: "音楽に夢中の猫の表情",

    downloadurl: "https://pub-d81332ee385741718118505c735e2f46.r2.dev/downloads/Green Screen Cat Rizz Meme 猫ミーム素材.mp4",

    description: "",

    like_number: 999,

    is_hot: "not",

    upload_time: 1712852130309,

  },


  {

    title: "恐れる表情の犬と戦いたがっている猫",

    downloadurl: "https://pub-d81332ee385741718118505c735e2f46.r2.dev/downloads/Green Screen Cat and Dog Meme 猫ミーム素材.mp4",

    description: "",

    like_number: 999,

    is_hot: "not",

    upload_time: 1712852141515,

  },


  {

    title: "物をかむ猫",

    downloadurl: "https://pub-d81332ee385741718118505c735e2f46.r2.dev/downloads/Green Screen Crunchy Cat Luna Meme 猫ミーム素材 .mp4",

    description: "",

    like_number: 999,

    is_hot: "not",

    upload_time: 1712852115333,

  },


  {

    title: "リズムに合わせて頷く犬",

    downloadurl: "https://pub-d81332ee385741718118505c735e2f46.r2.dev/downloads/Green Screen Dancing Dog Meme 猫ミーム素材.mp4",

    description: "",

    like_number: 999,

    is_hot: "not",

    upload_time: 1712852132336,

  },


  {

    title: "ピアノを弾くダックスフンド",
    downloadurl: "https://pub-d81332ee385741718118505c735e2f46.r2.dev/downloads/Green Screen Dog Plays Keyboard Meme 猫ミーム素材.mp4",
    description: "",
    like_number: 999,
    is_hot: "not",
    upload_time: 1712852166737,

  },


  {

    title: "眼鏡をかけて画面を見つめる犬",

    downloadurl: "https://pub-d81332ee385741718118505c735e2f46.r2.dev/downloads/Green Screen Dog Staring at Computer Meme 猫ミーム素材.mp4",

    description: "",

    like_number: 999,

    is_hot: "not",

    upload_time: 1712852137629,

  },


  {

    title: "泣き叫ぶ子猫",

    downloadurl: "https://pub-d81332ee385741718118505c735e2f46.r2.dev/downloads/Green Screen Dramatic Kitten Meme 猫ミーム素材 .mp4",

    description: "頭を抱えているようなポーズで甲高い声で鳴く子猫のミーム、通称「頭を抱える猫」。嫌なことがあった時や辛すぎる現実に直面した時によく使われ、動画の途中で飼い主と思われる女性の笑い声が入るのが余計に悲壮感を引き立てる。",

    like_number: 999,

    is_hot: "not",

    upload_time: 1712852134842,

  },


  {
    title: "huhcat",
    downloadurl: "https://pub-d81332ee385741718118505c735e2f46.r2.dev/downloads/Green Screen Goat Talking to Clueless Huh Cat Meme 猫ミーム素材.mp4",
    description: "ヤギが早口でまくし立てる様に何かを喋り、全く聞き取れなかったもしくは意味がわからなかった猫が「は？」と真顔で返すまでの流れのワンセットが丸ごとミーム化している。「理解不能な発言に困惑する」というシチュエーションが日常でも起こりやすいことから動画化しやすく、TikTokでは「huhcat」で丸ごと一ジャンルを形成している。",
    like_number: 999,
    is_hot: "not",
    upload_time: 1712852107561,
  },


  {

    title: "大笑いしている犬",

    downloadurl: "https://pub-d81332ee385741718118505c735e2f46.r2.dev/downloads/Green Screen Laughing Dog Meme 猫ミーム素材 cat meme .mp4",

    description: "",

    like_number: 999,

    is_hot: "not",

    upload_time: 1712852173963,

  },


  {

    title: "鳴き声をする猫",

    downloadurl: "https://pub-d81332ee385741718118505c735e2f46.r2.dev/downloads/Green Screen Meowing Cat Meme 猫ミーム素材 cat meme .mp4",

    description: "",

    like_number: 999,

    is_hot: "not",

    upload_time: 1712852151194,

  },


  {

    title: "悲しい表情の黒い犬",

    downloadurl: "https://pub-d81332ee385741718118505c735e2f46.r2.dev/downloads/Green Screen Sad Black Dog Meme 猫ミーム素材 cat meme.mp4",

    description: "",

    like_number: 999,

    is_hot: "not",

    upload_time: 1712852110885,

  },


  {

    title: "クーシングをして眠る猫",

    downloadurl: "https://pub-d81332ee385741718118505c735e2f46.r2.dev/downloads/Green Screen Sleeping Cat Meme_猫ミーム素材 cat meme.mp4",

    description: "",

    like_number: 999,

    is_hot: "not",

    upload_time: 1712852165688,

  },


  {

    title: "回転する猫",

    downloadurl: "https://pub-d81332ee385741718118505c735e2f46.r2.dev/downloads/Green Screen Spinning Cat Meme _ 猫ミーム素材 cat meme.mp4",

    description: "",

    like_number: 999,

    is_hot: "not",

    upload_time: 1712852180872,

  },


  {

    title: "話す猫",

    downloadurl: "https://pub-d81332ee385741718118505c735e2f46.r2.dev/downloads/Green Screen Talking Cat Meme_猫ミーム素材 cat meme .mp4",

    description: "",

    like_number: 999,

    is_hot: "not",

    upload_time: 1712852172031,

  },

  {

    title: "周囲を見渡す黒山羊",

    downloadurl: "https://pub-d81332ee385741718118505c735e2f46.r2.dev/downloads/Green Screen black face sheep (ovelha ) 猫ミーム素材.mp4",

    description: "",

    like_number: 999,

    is_hot: "not",

    upload_time: 1712852158891,

  },


  {

    title: "飛び跳ねる小猫",

    downloadurl: "https://pub-d81332ee385741718118505c735e2f46.r2.dev/downloads/Happy Happy Happy Cat Meme Green Screen 猫ミーム素材 cat meme.mp4",

    description: "",

    like_number: 999,

    is_hot: "not",

    upload_time: 1712852108334,

  },


  {

    title: "huh? と鳴く猫",

    downloadurl: "https://pub-d81332ee385741718118505c735e2f46.r2.dev/downloads/Huh Cat Meme Green Screen 猫ミーム素材 cat meme.mp4",

    description: "",

    like_number: 999,

    is_hot: "not",

    upload_time: 1712852131018,

  },


  {

    title: "お腹を空かせてボウルを叩く猫",

    downloadurl: "https://pub-d81332ee385741718118505c735e2f46.r2.dev/downloads/Hungry Cat Green Screen 猫ミーム素材 cat meme .mp4",

    description: "",

    like_number: 999,

    is_hot: "not",

    upload_time: 1712852137917,

  },


  {

    title: "困惑する猫",

    downloadurl: "https://pub-d81332ee385741718118505c735e2f46.r2.dev/downloads/I don't know anything 猫ミーム素材 cat meme .mp4",

    description: "目も口も大きく開けて塞がらないままただただキョロキョロと周りを見回すしかない猫のミーム。使われ方はhuhcatと似ているが、あちらは理不尽な要求をされたり相手の話が理解できなかった際に使われるのに対し、こちらは阿鼻叫喚な状況そのものを目の当たりにした時に使われる。",

    like_number: 999,

    is_hot: "not",

    upload_time: 1712852175289,

  },


  {

    title: "小さなバイクに乗っている猫",

    downloadurl: "https://pub-d81332ee385741718118505c735e2f46.r2.dev/downloads/Kitten Riding A Bike Cat Memes Green Screen Chroma Key Template 猫ミーム素材 cat meme .mp4",

    description: "",

    like_number: 999,

    is_hot: "not",

    upload_time: 1712852165708,

  },


  {

    title: "マックスウェルザキャット(Maxwell the Cat)",
    downloadurl: "https://pub-d81332ee385741718118505c735e2f46.r2.dev/downloads/Maxwell The Cat Dancing Green Screen 猫ミーム素材 cat meme .mp4",
    description: "音楽に合わせて置物の如く動く座った黒猫のミーム。元ネタは「Weebls Stockmarket」というBGMからで、何かを待ち望んでいる時や移動シーンなどに使用される。",
    like_number: 999,
    is_hot: "not",
    upload_time: 1712852151525,

  },


  {

    title: "運転するゴリラ",

    downloadurl: "https://pub-d81332ee385741718118505c735e2f46.r2.dev/downloads/Monkey Driving Golf Cart Meme (GREEN SCREEN) 猫ミーム素材 cat meme .mp4",

    description: "",

    like_number: 999,

    is_hot: "not",

    upload_time: 1712852141511,

  },


  {

    title: "草を食べている白い羊",

    downloadurl: "https://pub-d81332ee385741718118505c735e2f46.r2.dev/downloads/REAL SHEEP GREEN SCREEN PART 2 -CHROMA KEY 猫ミーム素材 cat meme .mp4",

    description: "",

    like_number: 999,

    is_hot: "not",

    upload_time: 1712852125385,

  },


  {

    title: "眠そうな猫",

    downloadurl: "https://pub-d81332ee385741718118505c735e2f46.r2.dev/downloads/Remembering old memories green screen 猫ミーム素材 cat meme .mp4",

    description: "",

    like_number: 999,

    is_hot: "not",

    upload_time: 1712852128109,

  },


  {

    title: "震えている犬",

    downloadurl: "https://pub-d81332ee385741718118505c735e2f46.r2.dev/downloads/SHIVERING dog meme - Green Screen 猫ミーム素材 cat meme .mp4",

    description: "",

    like_number: 999,

    is_hot: "not",

    upload_time: 1712852167448,

  },


  {

    title: "銃を撃つ怒っている猫",

    downloadurl: "https://pub-d81332ee385741718118505c735e2f46.r2.dev/downloads/Shooting Cat (Greenscreen) 猫ミーム素材 cat meme .mp4",

    description: "",

    like_number: 999,

    is_hot: "not",

    upload_time: 1712852152015,

  },


  {

    title: "いびきをかく猫",

    downloadurl: "https://pub-d81332ee385741718118505c735e2f46.r2.dev/downloads/Sleeping Cat Meme 猫ミーム素材 cat meme .mp4",

    description: "読んで字の如く、いびきをかきながら寝ている猫のミーム。自身が寝ている時に使われる。",

    like_number: 999,

    is_hot: "not",

    upload_time: 1712852132043,

  },


  {

    title: "眠そうなかわいい子猫",

    downloadurl: "https://pub-d81332ee385741718118505c735e2f46.r2.dev/downloads/Sleepy Cat Green Screen 猫ミーム素材 cat meme .mp4",

    description: "",

    like_number: 999,

    is_hot: "not",

    upload_time: 1712852142768,

  },


  {

    title: "いびきをかく犬",

    downloadurl: "https://pub-d81332ee385741718118505c735e2f46.r2.dev/downloads/Snoring Dog Meme Green Screen Chroma Key Template 猫ミーム素材 cat meme.mp4",

    description: "",

    like_number: 999,

    is_hot: "not",

    upload_time: 1712852142902,

  },


  {

    title: "舌を出すヤギ",

    downloadurl: "https://pub-d81332ee385741718118505c735e2f46.r2.dev/downloads/Talking Goat 2.0 Meme Green Screen Template 猫ミーム素材 cat meme .mp4",

    description: "",

    like_number: 999,

    is_hot: "not",

    upload_time: 1712852107737,

  },


  {

    title: "この料理は私の好みではありません",

    downloadurl: "https://pub-d81332ee385741718118505c735e2f46.r2.dev/downloads/This dish is not to my taste cat green screen 猫ミーム素材 cat meme .mp4",

    description: "",

    like_number: 999,

    is_hot: "not",

    upload_time: 1712852109772,

  },


  {

    title: "すぐに戦うつもりの猫二匹",

    downloadurl: "https://pub-d81332ee385741718118505c735e2f46.r2.dev/downloads/Two cats come face to face 猫ミーム素材 cat meme .mp4",

    description: "",

    like_number: 999,

    is_hot: "not",

    upload_time: 1712852124526,

  },


  {

    title: "好奇心で立ち上がる猫",

    downloadurl: "https://pub-d81332ee385741718118505c735e2f46.r2.dev/downloads/What happen cat green screen 猫ミーム素材 cat meme.mp4",

    description: "",

    like_number: 999,

    is_hot: "not",

    upload_time: 1712852175092,

  },


  {

    title: "好奇心を持って頭を出す黒猫",

    downloadurl: "https://pub-d81332ee385741718118505c735e2f46.r2.dev/downloads/cat meme _greenscreen 猫ミーム素材.mp4",

    description: "",

    like_number: 999,

    is_hot: "not",

    upload_time: 1712852115143,

  },


  {

    title: "踊る犬",

    downloadurl: "https://pub-d81332ee385741718118505c735e2f46.r2.dev/downloads/dancing dog green screen 猫ミーム素材 .mp4",

    description: "",

    like_number: 999,

    is_hot: "not",

    upload_time: 1712852111361,

  },


  {

    title: "寝ている小さな猫",

    downloadurl: "https://pub-d81332ee385741718118505c735e2f46.r2.dev/downloads/sleepy cat meme (green screen) 猫ミーム素材 cat meme .mp4",

    description: "",

    like_number: 999,

    is_hot: "not",

    upload_time: 1712852180518,

  },


  {

    title: "鳴き声が美しい小さな猫",

    downloadurl: "https://pub-d81332ee385741718118505c735e2f46.r2.dev/downloads/thurston waffles green screen 猫ミーム素材 cat meme .mp4",

    description: "",

    like_number: 999,

    is_hot: "not",

    upload_time: 1712852164499,

  },


  {

    title: "カメラを見つめる濡れた猫",

    downloadurl: "https://pub-d81332ee385741718118505c735e2f46.r2.dev/downloads/wet cat staring at the camera meme 猫ミーム素材 cat meme .mp4",

    description: "",

    like_number: 999,

    is_hot: "not",

    upload_time: 1712852126839,

  },


  {

    title: "踊る子猫",

    downloadurl: "https://pub-d81332ee385741718118505c735e2f46.r2.dev/downloads/【猫ミーム 素材集① 40選】 (Cat meme green screen)_JgX4UofTWuc.mp4",

    description: "",

    like_number: 999,

    is_hot: "not",

    upload_time: 1712852168110,

  },

  {

    title: "悲鳴を上げるモルモット",

    downloadurl: "https://pub-d81332ee385741718118505c735e2f46.r2.dev/downloads/猫ミーム素材　叫ぶマーモット (Cat meme green screen).mp4",

    description: "",

    like_number: 999,

    is_hot: "not",

    upload_time: 1713609746932,

  },
]

async function seedVideo() {
  try {
    await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    const createTable = await sql`
        CREATE TABLE IF NOT EXISTS video (
          id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
          title TEXT NOT NULL,
          downloadurl TEXT NOT NULL,
          description TEXT NOT NULL,
          like_number INT NOT NULL,
          is_hot TEXT NOT NULL
        );
      `;

    console.log(`Created "video" table`);

    const insertedVideo = await Promise.all(
      video.map(async (video) => {
        const uploadTime = new Date(video.upload_time).toISOString();

        return sql`
          INSERT INTO video (title, downloadurl, description,like_number,is_hot,upload_time)
          VALUES (${video.title}, ${video.downloadurl}, ${video.description}, ${video.like_number}, ${video.is_hot},${uploadTime})
          ON CONFLICT (id) DO NOTHING;
        `;
      }),
    );

    console.log(`Seeded ${insertedVideo.length} videos`);

    return {
      createTable,
      video: insertedVideo,
    };
  } catch (error) {
    console.error('Error seeding video:', error);
    throw error;
  }
}

(async () => {
  await seedVideo();
})();