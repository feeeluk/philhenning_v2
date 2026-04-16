import Link from "next/link"
import Image from "next/image"

export default function NavBar(){
    return(

        <div className="NavBar">

            <div style={{ position: "relative", width: "100%", height: "120px" }}>
                <Image
                    src="/logo.png?v=2"
                    alt="logo"
                    fill
                    style={{ objectFit: "contain" }}
                />
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