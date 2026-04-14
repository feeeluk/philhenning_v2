import Link from "next/link"
import Image from "next/image"

export default function NavBar(){
    return(

        <div className="NavBar">

            <div className="Logo">
                <Image src="/logo.png?v=1" alt="main logo" width="800" height="120" />
            </div>

            <nav class="Link">
                <Link href="/">Home</Link>
                &nbsp;|&nbsp;

                <Link href="/projects">Projects</Link>
                &nbsp;|&nbsp;

                <Link href="https://pdhtechnology.com">PDH Technology</Link>
                         
            </nav>
            
        </div>
    )
}