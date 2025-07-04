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

                <Link href="/self_employment.pptx">Self employment</Link>
                         
            </nav>
            
        </div>
    )
}