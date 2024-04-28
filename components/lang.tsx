'use client'


import { Select,SelectItem } from "@nextui-org/select";
// 导入配置组件，获取所有语言配置
import { lang } from "@/config/site";


export const Lang =() => {


    return(
            <div>
            <Select size="md" radius="lg" className="w-40" defaultSelectedKeys={ ["js"]}>
            {/** 用className = “w-40” 限定宽度 */}
            
            {lang.map((item) =>(
                <SelectItem key={item.value} value={item.value} > 
                   {item.value}
                </SelectItem>
            ))}
               
            </Select>
            </div>
)
}