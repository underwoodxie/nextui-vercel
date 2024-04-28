import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import { title, subtitle } from "@/components/primitives";
import { contestConfig } from "@/config/contest";
import { Button } from "@nextui-org/button";
import { fetchHotvideo, fetchNothotvideo } from "@/app/lib/getvideodata";
import Link from "next/link";



export default async function Page() {
  const [hotvideo, nothotvideo] = await Promise.all([fetchHotvideo(), fetchNothotvideo()]);

  
  
  return (
    <>
      <div className="text-center justify-center m-12">
        <h1 className={title({ color: "violet" })} >
          猫ミーム素材 ダウンロード
        </h1>
        <br />
        <h2 className={subtitle({ class: "mt-4" })}>
          猫ミーム素材はココで取れるゾ
          収録50本以上、完全無料！
        </h2>

      </div>


      <div className="m-12">
        <h3 className="text-xl font-medium text-center">
          TikTok & Youtube でよく見かける有名な猫ミーム素材をご紹介します。
        </h3>
        <p className="text-center font-light">動画の下部の「もっと見る」ボタンをクリックして、猫のミーム素材をダウンロードしてください。</p>
        <section className="flex justify-center items-center flex-wrap ">
          {hotvideo.map((item) => {
            
            const url = String(item.downloadurl);

            return (
              <Card key={item.id} className="m-5 h-[460px] max-h-[450px] max-w-[380px] flex-shrink-0">
                <CardHeader>
                  <h3 className="text-xl text-center">{item.title}</h3>
                </CardHeader>
                <CardBody className="h-[320px]">
                  <video className="max-w-[450px] justify-center m-1" src={item.downloadurl} title={item.title} controls></video>
                  <div className="">
                    <p>{item.description}</p>
                  </div>
                </CardBody>
                <CardFooter className="text-small flex justify-between">
                  <p className="text-0.9xl font-thin">{item.like_number} 使用</p>
                  <Button className="text-tiny" color="primary" radius="full" size="sm">
                    <a href={`${item.downloadurl}?response-content-disposition=attachment`}>
                      ダウンロード
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </section>
      </div>


      <div>
        <h3 className="text-xl font-medium text-center ">さらに人気のある猫ミーム素材がお待ちしています。</h3>
        <p className="text-center font-light">以上に紹介した猫の表情動画以外にも、他にも人気のある動画がありますので、ご自由にダウンロードしてください。
        </p>
        <section className="flex justify-center items-center flex-wrap ">
          {nothotvideo?.map((video) => {
            return (
              <Card key={video.id} className="m-5 h-[360px] max-h-[450px] max-w-[380px] flex-shrink-0">
                <CardHeader>
                  <h3 className="text-xl ">{video.title}</h3>
                </CardHeader>
                <CardBody className="h-[320px]" >
                  <video className="max-w-[450px] justify-center m-1" src={video.downloadurl} title={video.title} controls >
                  </video>
                </CardBody>
                <CardFooter className="text-small flex justify-between">
                  <p className="text-0.9xl font-thin"> </p>
                  <Button className="text-tiny" color="primary" radius="full" size="sm">
                    <a href={`${video.downloadurl}?response-content-disposition=attachment`}>
                      ダウンロード
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            );
          })}


        </section>
        <div className="flex justify-center m-8">
          <Button color="secondary"><Link href="/cat-meme-list"><h3 className="text-xl">  もっと猫ミーム素材を見る </h3> </Link></Button>
        </div>
      </div>



      <section className="max-w-4xl mx-auto px-4 flex flex-col  gap-4 py-8 md:py-10">
        <h2 className="text-3xl font-bold text-center mb-4">猫ミーム動画を作る簡単な手順</h2>
        <p className="">猫ミームは、面白くて笑えるエピソードやあるあるネタを切り取った動画素材で作られた日常生活再現動画です。そんな猫ミームを自分でも作ってみたいと思ったことはありませんか？今回は、初心者でも簡単に猫ミーム動画を作る方法をご紹介します。</p>

        <h3 className="text-2xl font-bold mt-4">
          まず、ネコミームとは何でしょうか？
        </h3>
        <p className="">猫ミーム素材を使って作られた日常生活再現動画は、面白くてクスッと笑えるエピソードやありそうなネタを表現しています。喧嘩して一方的に責められている猫や、ダンスしている猫、そして舌を出しておしゃべりしているヤギや叫んでいる犬など、喜怒哀楽を表現するのにぴったりな素材が豊富に揃っています。自分の面白い経験を猫のミームに作りたい場合は、以下の手順を確認してください。</p>
      </section>



      <div className="w-full">
        <section className="flex justify-center items-center flex-wrap ">
          {contestConfig.youtube_showace.map((item, index) => (
            <Card key={index} className="m-5 max-h-[450px] max-w-[600px] flex-shrink-0">
              <CardBody className="">
                <iframe src={item.showcase_url} width="448" height="252" >
                </iframe>
              </CardBody>
              <CardFooter className="text-0.9xl font-thin">
                {item.play_num}
              </CardFooter>
            </Card>
          ))}
        </section>
      </div>

      <section className="max-w-4xl mx-auto px-4 flex flex-col  gap-4 py-8 md:py-10">

        <h3 className="text-2xl font-bold mt-4">
          <a className="text-blue-500 mb-4" href="https://apps.apple.com/jp/app/capcut-%E5%8B%95%E7%94%BB%E7%B7%A8%E9%9B%86%E3%82%A2%E3%83%97%E3%83%AA/id1500855883">1.Capcutアプリをダウンロード</a>
        </h3>
        <p className="">まずは、スマートフォンにCapcutアプリをダウンロードしましょう。Capcutは使いやすい動画編集アプリで、誰でも簡単に動画を作成することができます。</p>

        <h3 className="text-2xl font-bold mt-4">2. 新しいプロジェクトを開始</h3>
        <p className="">Capcutで新しいプロジェクトを開始し、背景画像を選択します。好きな画像を選んで、動画制作をスタートさせましょう。</p>


        <h3 className="text-2xl font-bold mt-4">3. 猫ミーム素材を集める</h3>
        <p className="">次に、猫ミームに使う素材を集めます。フリー素材を利用して、面白い <a className="text-blue-500" href="https://memesstyle.com/"> 猫の動画素材</a>を集めてください。</p>

        <h3 className="text-2xl font-bold mt-4">4. 動画を編集</h3>
        <p className="">Capcutの編集機能を使って、テキストや猫の素材を組み合わせて動画を編集します。シンプルな操作で、思い通りの動画を作ることができます。</p>

        <img src="https://plugins-media.makeupar.com/smb/blog/post/2024-02-02/9df65a10-2300-4113-a90e-71022a540831.jpg" width="800px" title="CapCutで猫ミームの背景を削除" alt="CapCutで猫ミームの背景を削除" loading="lazy" className="width: 100%; height: auto; display: block; margin-left: auto; margin-right: auto; border-radius: 16px; max-width: 800px; aspect-ratio: 1.23077 / 1;" />
        <ul className="text-center">
          <li>CapCutを開く 【新しいプロジェクト】を選択</li>
          <li>スマホのカメラロールから先ほどの猫ミーム素材をアップロードする </li>
        </ul>
        <br></br>


        <img src="https://plugins-media.makeupar.com/smb/blog/post/2024-02-02/729ed0d5-dace-40b1-bf1b-d70225983e46.jpg" width="800px" loading="lazy" className="width: 100%; height: auto; display: block; margin-left: auto; margin-right: auto; max-width: 800px; aspect-ratio: 1.23077 / 1;"></img>
        <ul className="text-center">
          <li>下のツールバーから【編集】を選択</li>
          <li>【背景の削除】を選択</li>
        </ul>
        <br></br>


        <img src="https://plugins-media.makeupar.com/smb/blog/post/2024-02-02/a0197a22-7da3-4e9b-9444-3323ad7d79ba.jpg" width="800px" title="CapCutで猫ミームの背景を削除3" alt="CapCutで猫ミームの背景を削除3" loading="lazy" className="border-radius: 16px; width: 100%; height: auto; display: block; margin-left: auto; margin-right: auto; max-width: 800px; aspect-ratio: 1.23077 / 1;"></img>
        <ul className="text-center">
          <li>【自動削除】をタップ</li>
          <li>背景が自動で削除される</li>
        </ul>
        <br></br>


        <img src="https://plugins-media.makeupar.com/smb/blog/post/2024-02-02/e4f31d48-2c21-4048-981e-969deb0b92c6.jpg" width="800px" title="猫ミームの背景を合成" alt="猫ミームの背景を合成" loading="lazy" className="border-radius: 16px; width: 100%; height: auto; display: block; margin-left: auto; margin-right: auto; max-width: 800px; aspect-ratio: 1.23077 / 1;"></img>
        <ul className="text-center">
          <li>先ほどの動画編集画面に戻り、【背景画像】をタップ</li>
          <li>家フリー素材をアップロードすると合成できる</li>
          <li>作成した猫ミームを保存して完成！</li>
        </ul>

        <h3 className="text-2xl font-bold mt-4">5. 動画を完成させる</h3>
        <p className="">最後に、テキストやエフェクトを追加して、猫ミーム動画を完成させます。完成した動画をSNSにシェアして、友達と楽しんでください！</p>
        <br></br>


        <p className="">以上が猫ミーム動画を作る簡単な手順です。Capcutを使えば、誰でも簡単に面白い動画を作ることができます。ぜひ挑戦してみてください！</p>

      </section>


      <div className="w-full">
        <section className="flex justify-center items-center flex-wrap ">
          <Card className="m-5 max-h-[450px] max-w-[600px] flex-shrink-0">
            <CardBody className="">
              <iframe src="https://www.youtube.com/embed/T8uREReVojY" width="448" height="252" >
              </iframe>
            </CardBody>
            <CardFooter className="text-0.9xl font-thin">
              【大流行】猫ミームの作り方を徹底解説
            </CardFooter>
          </Card>
          <Card className="m-5 max-h-[450px] max-w-[600px] flex-shrink-0">
            <CardBody className="">
              <iframe src="https://www.youtube.com/embed/EFF3dlUX-9Q" width="448" height="252" >
              </iframe>
            </CardBody>
            <CardFooter className="text-0.9xl font-thin">
              猫ミームの作り方
            </CardFooter>
          </Card>
        </section>
      </div>

    </>
  );

}