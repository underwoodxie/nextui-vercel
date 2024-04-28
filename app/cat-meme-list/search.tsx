'use client';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';


export default function Search({ placeholder }: { placeholder: string }) {
    const searchParams = useSearchParams();//可以使用它获取参数字符串，例如 ?page=1&query=a。
    const pathname = usePathname(); //当前url
    const { replace } = useRouter(); //搜索之后的url

    const handleSearch = useDebouncedCallback((term)=>  {
        const params = new URLSearchParams(searchParams);
        params.set('page', '1');
        if (term) {
            params.set('query', term);
          } else {
            params.delete('query');
          }
          replace(`${pathname}?${params.toString()}`);
          //当用户在搜索栏中键入时，params.toString() 将此输入转换为友好的 URL 格式
          //replace(${pathname}?${params.toString()}) 更新 URL
      },500);

  return (
    <div className="relative flex justify-center m-12">
      <label htmlFor="search" className="sr-only">
        猫ミーム素材を検索する
      </label>
      <input
        className="peer block w-[80vw] rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
        placeholder={placeholder}
        onChange={(e) => {
            handleSearch(e.target.value);
          }}
        defaultValue={searchParams.get('query')?.toString()}
      />
    </div>
  );
}