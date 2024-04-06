import {Button} from '@nextui-org/button'; 
import {Card, CardBody} from "@nextui-org/react";


async function getData(path: RequestInfo | URL) {
	
	const res = await fetch(path,{cache: 'no-store'})
	//The return value is *not* serialized
	//You can return Date, Map, Set, etc.
	//cache: 'no-store' 动态渲染
  	return res.json()
}



export default  async function Page() {

  const posts = await getData("https://www.caloriecounter.cn/api")

  return (

    
    <div>
      <Card>
      <CardBody>
        <p>Make beautiful websites regardless of your design experience.</p>
      </CardBody>
      </Card>
      <Button>{posts.message}</Button>
    </div>
  )
}
