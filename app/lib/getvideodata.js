import { sql } from '@vercel/postgres';

import { unstable_noStore as noStore } from 'next/cache';


//找到高热视频并按下载量排名
export async function fetchHotvideo() {
    noStore();

    try {
        const hotvideo = await sql`SELECT * FROM video WHERE is_hot = 'yes' ORDER BY like_number DESC `;
        return hotvideo.rows;
      } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch hotvideo data.');
      }

}

//找到不是高热但是是最新的视频信息
export async function fetchNothotvideo() {
  noStore();

  try {
    const video = await sql`SELECT * FROM video WHERE is_hot = 'not' ORDER BY upload_time DESC LIMIT 6`;
    return video.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch hotvideo data.');
  }
}










const videosPerPage = 15;
//找到符合搜索要求的视频
export async function fetchallvideo(query) {
  noStore();
  try {
    let video;
    if (query) {
      video = await sql`SELECT * FROM video WHERE title LIKE ${`%${query}%`} ORDER BY upload_time DESC`;
    } else {
      video = await sql`SELECT * FROM video ORDER BY upload_time DESC`;
    }
    return video.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch hotvideo data.');
  }
}

//计算符合搜索要求的视频数量，并计算需要多少页数
export async function fetchallvideolistpagesNum(query) {
  const videoList= await fetchallvideo(query);
  let pageNumber = 0;
  if (videoList && videoList.length > 0) {
      pageNumber = Math.ceil(videoList.length / videosPerPage); // 向上取整计算页数
  }
  return pageNumber
}

//根据用户当前所在的页面，返回当前页面所需要展示的video
export async function filterevideobypage(query,page){
  const videoList= await fetchallvideo(query);
  const startIndex = (page - 1) * videosPerPage;
  const endIndex = startIndex + videosPerPage;
  const resVideos =  videoList?.slice(startIndex, endIndex);
  return resVideos;
}




/**
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
 */