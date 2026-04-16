import Link from "next/link"
import Image from "next/image"

export default function NavBar(){
    return(

        <div className="NavBar">

            <div style={{ position: "relative", width: "100%", height: "120px" }}>
                <Link href="/">
                <Image
                    src="/logo1.png?v=2"
                    alt="logo"
                    fill
                    style={{ objectFit: "contain" }}
                />
                </Link>
            </div>


            <nav className="Link">
                <Link href="/">Home</Link>
                &nbsp;|&nbsp;

                <Link href="/projects">Projects</Link>
                         
            </nav>
            
        </div>
    )
}