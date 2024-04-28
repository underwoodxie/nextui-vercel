'use client';
import { Pagination } from "@nextui-org/pagination";
import { useEffect } from "react";
import React, { useState } from 'react';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';


export default function Videopagination({ totalPages, initialPage}: { totalPages: number,initialPage:number }) {
    
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const currentPage = Number(searchParams.get('page')) || 1;
    const { replace } = useRouter(); 

    const handleChangePage = (pageNumber: number) => {
        
        const params = new URLSearchParams(searchParams);
        params.set('page', pageNumber.toString());
        replace(`${pathname}?${params.toString()}`);
    
    }


    return (
        <Pagination total={totalPages} initialPage={currentPage} onChange={handleChangePage} />
    );
  }
  