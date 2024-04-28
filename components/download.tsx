'use client'

import { Button } from "@nextui-org/button"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function DownLoadBtn ({ url }: { url: string }) {

    const handleLinkClick =()=>  {
        console.log({url});
    
    };

    return (

        <Button className="text-tiny" color="primary" radius="full" size="sm" onClick={handleLinkClick}>
        </Button>
  );
  }
