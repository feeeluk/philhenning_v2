import Link from "next/link"
import Image from "next/image"

export default function NavBar(){
    return(

        <div className="NavBar">

            <div className="Logo">
                <Image src="/main_logo.png" alt="main logo" width="800" height="120" />
            </div>

            <nav class="Link">
                <Link href="/">Home</Link>
                &nbsp;|&nbsp;

                <Link href="/projects">Projects</Link>
                &nbsp;|&nbsp;

                <Link href="https://1drv.ms/p/c/4ec6f60b40ba590f/EVNcQ_TB3J1Np8386CsHat0BOFotVATx8AmYI0cSPWEV6A?e=Whdjbl">Self-Employment</Link>
                &nbsp;|&nbsp;

                <Link href="http://phd.philhenning.online">PHD Technology</Link>
                         
            </nav>
            
        </div>
    )
}