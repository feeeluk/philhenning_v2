import Link from "next/link"
import Image from "next/image"

export default function NavBar(){
    return(

        <div className="NavBar">

            <div style={{ position: "relative", width: "100%", height: "120px" }}>
                <Link href="/">
                <Image
                    src="/logo.webp"
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
                &nbsp;|&nbsp;

                <Link href="/cv_philip_henning_junior_full_stack_software_developer.pdf" target="_blank">CV (Developer)</Link>
                &nbsp;|&nbsp;

                <Link href="/cv_philip_henning_business_analyst.pdf" target="_blank">CV (Business Analyst)</Link>
                         
            </nav>
            
        </div>
    )
}