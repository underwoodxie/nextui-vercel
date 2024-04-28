import { Card, CardBody, CardFooter,CardHeader } from "@nextui-org/card";
import {Button} from "@nextui-org/button";
import Search from"@/app/cat-meme-list/search";
import {fetchallvideolistpagesNum,filterevideobypage} from "@/app/lib/getvideodata"
import Videopagination  from "@/app/cat-meme-list/pagination";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '【最新】猫ミーム素材',
  description:"ダウンロードするだけですぐ使える！"
};

export default async function Page( {
	searchParams,
  }: {
	searchParams?: {
	  query?: string;
    page?: string;
	};
  } ) {
  
  
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;

  const totalPages = await fetchallvideolistpagesNum(query);

  const filteredVideos = await filterevideobypage(query,currentPage);


  return (
    <>
      <div className="m-8">
      <h1 className="text-xl font-medium text-center "> 猫ミーム素材 </h1>
      <h3 className="text-xl font-medium text-center ">さらに人気のある猫ミーム素材がお待ちしています。</h3>
      <Search placeholder="猫ミーム素材を検索する" />
      <section className="flex justify-center  flex-wrap ">
        {filteredVideos?.map((video) => {
          return (
            
            <Card key={video.id} className="m-5 h-[360px] max-h-[450px] max-w-[380px] flex-shrink-0">
			      <CardHeader>
            <h3 className="text-xl ">{video.title} </h3>
            </CardHeader>
              <CardBody className="h-[320px]" >
                <video  className="max-w-[450px] justify-center m-1" src={video.downloadurl} title={video.title}  controls >
                </video>
              </CardBody>
			  <CardFooter className="text-small flex justify-between">
            <p></p>
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
      <section className="flex justify-center  flex-wrap m-12">
        <Videopagination totalPages={totalPages} initialPage={currentPage} />
      </section>
      </div>


    </>
  );

}

