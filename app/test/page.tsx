
import {getR2videolist,} from "@/app/lib/getR2videolist";
import { Metadata } from 'next';
import { fetchNothotvideo} from "@/app/lib/getvideodata"
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import { Button } from "@nextui-org/button";

export const metadata: Metadata = {
  title: '【最新】猫ミーム素材',
  description:"ダウンロードするだけですぐ使える！"
};

export default async function Page( ) {
  
    const filteredVideos = await getR2videolist(undefined,undefined)
    const testVideos = await fetchNothotvideo()
    console.log(filteredVideos)


  return (
    <></>
   /* <>
      <div className="m-8">
        <p>[</p>

      <section className="flex justify-center  flex-wrap ">
        {filteredVideos?.map((video,index) => {

          const videoName = video?.Key;
          const videoUrl = `https://pub-d81332ee385741718118505c735e2f46.r2.dev/${videoName}`;
          const keyPrefix = (videoName || "").split("/")[1]?.split("_")[0]?.replace(/\.mp4$/, "");
          const time = video.LastModified?.getTime().toString();
          return (
            <div key={index}>
            <p>{"{"}</p>
            <p>title:"undefined",</p>
            <p>downloadurl:"{videoUrl}",</p>
            <p>description:"",</p>
            <p>like_number:999,</p>
            <p>is_hot:"not",</p>
            <p>upload_time:{time},</p>
            <p>{"}"},</p><br></br>
            </div>
          );
        })}
      </section>

        <p>]</p>
      </div>

      <div>
        数组:{filteredVideos?.length}
      </div>
      <section className="flex justify-center items-center flex-wrap ">
          {testVideos.map((item) => (
            <Card key={item.id} className="m-5 h-[460px] max-h-[450px] max-w-[380px] flex-shrink-0">
              <CardHeader>
                <h3 className="text-xl text-center">{item.title}</h3>
              </CardHeader>
              <CardBody className="h-[320px]">
                <video className="max-w-[450px] justify-center m-1" src={item.downloadurl}
                  title={item.title} controls >
                </video>
                <div className="">
                  <p >{item.description}</p>
                </div>
              </CardBody>
              <CardFooter className="text-small flex justify-between">
                <p className="text-0.9xl font-thin"> {item.like_number} 使用</p>
                <Button className="text-tiny" color="primary" radius="full" size="sm">
                  <a href={`${item.downloadurl}?response-content-disposition=attachment`}>
                    ダウンロード
                  </a>
                </Button>
              </CardFooter>
            </Card>

          ))}
        </section>

    </>
    */
  )

}

