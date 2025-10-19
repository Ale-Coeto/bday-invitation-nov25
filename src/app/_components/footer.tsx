import Link from "next/link";
import Section from "./section"

const Footer = () => {
    return (
        // <Section imageSection>
        <div className="bg-white text-text-light text-sm w-full flex flex-col items-center pt-2 pb-6">
            <div>
                Creado con cariño por
            </div>
            <Link href="https://www.linkedin.com/in/alecoeto/" target="_blank" className="underline">
                AleCoeto
            </Link>
        </div>
        // </Section>
    )
}

export default Footer;
