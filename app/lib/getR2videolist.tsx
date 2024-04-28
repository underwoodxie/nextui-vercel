import { S3Client } from '@aws-sdk/client-s3'
import { ListObjectsCommand } from '@aws-sdk/client-s3'
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();
const accessKey = publicRuntimeConfig.ACCESSKEYID;
const secretKey = publicRuntimeConfig.SECRETACCESSKEY;

const r2 = new S3Client({
  region: 'auto',
  endpoint: "https://05154976162af58540aba71a43673c31.r2.cloudflarestorage.com",
  credentials: {
    accessKeyId: accessKey,
    secretAccessKey: secretKey,
  },
});

export async function getTop6R2videolist() {
    try {
      const response = await r2.send(new ListObjectsCommand({
        Bucket: "meme-viedo",
        MaxKeys: 6,
      }));
      return response.Contents;
    } catch (error) {
      console.error('Error listing objects:', error);
      return [];
    }
  }



export async function getR2videolist(maxkeys:number| undefined,marker:string|undefined) {
    if (maxkeys !== undefined) {
            const response = await r2.send(new ListObjectsCommand({
                Bucket: "meme-viedo",
                MaxKeys: maxkeys,
                Marker:marker,
            }));
            return response.Contents;
    }
    else {
            const response = await r2.send(new ListObjectsCommand({
                Bucket: "meme-viedo",
            }));
        return response.Contents;
    }
}

export async function filtereR2totalvideolist(query: string) {
    const videoList = await getR2videolist(undefined,undefined)
    const filteredVideos = videoList?.filter(video => {
        // 判断 Key 中是否包含特定字符
        return video.Key?.includes(query);
        });
    return filteredVideos;
  }



export async function filtereR2videolistbypage(query: string,page: number) {

    const videoList = await getR2videolist(undefined,undefined)
    const filteredVideos = videoList?.filter(video => {
        // 判断 Key 中是否包含特定字符
        return video.Key?.includes( query);
        });

    const startIndex = (page - 1) * videosPerPage;
    const endIndex = startIndex + videosPerPage;

    const resVideos =  filteredVideos?.slice(startIndex, endIndex);
    
    return resVideos;

  }



 

const videosPerPage = 15; // 每页视频数量

export async function fetchR2videolistpagesNum(query: string) {

    const videoList= await filtereR2totalvideolist(query);
    let pageNumber = 0;
    if (videoList && videoList.length > 0) {
        pageNumber = Math.ceil(videoList.length / videosPerPage); // 向上取整计算页数
    }
    return pageNumber
  }


