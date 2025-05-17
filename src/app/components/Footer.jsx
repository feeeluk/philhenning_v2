import Link from "next/link"
import Image from "next/image"

export default function Footer(){
    return(
        <div className="Footer">
            
                <Link href="https://github.com/feeeluk" target="_blank">
                    <Image src="/ToolLogos/GitHub.png" alt="GitHub logo" width="30" height="30" />
                </Link>
                &nbsp; 
                
                <Link href="https://www.linkedin.com/in/phil-henning1982" target="_blank">
                    <Image src="/ToolLogos/LinkedIn.png" alt="LinkedIn logo" width="30" height="30" />
                </Link>
                &nbsp;

                <Link href="https://stackoverflow.com/users/23801067/phil" target="_blank">
                    <Image src="/ToolLogos/StackOverflow.png" alt="StackOverflow logo" height="30" width="30" />
                </Link>
                &nbsp;

                <Link href="https://1drv.ms/o/s!Ag9ZukAL9sZOog6eqf_5CXVrdJhz?e=QhPtT8" target="_blank">
                    <Image src="/ToolLogos/OneNote.png" alt="OneNote logo" height="30" width="30" />
                </Link>
                &nbsp;

                <Link href="https://miro.com/app/board/uXjVI0IaFmg=/?share_link_id=167370584887" target="_blank">
                    <Image src="/ToolLogos/Miro.png" alt="Miro logo" height="30" width="30" />
                </Link>
                &nbsp;

                <Link href="https://trello.com/invite/b/6827251f15590048ad20ae29/ATTIbd7db5c489cbc1fd2ba5e22ac59f2c2cB927CD4D/philhenning" target="_blank">
                    <Image src="/ToolLogos/Trello.png" alt="Trello logo" height="30" width="30" />
                </Link>


        </div>
    )
}