import type { ReactNode } from "react";

const Section = ({ children, imageSection }: { children: ReactNode, imageSection?: boolean }) => {
    return (
        <div className="w-full p-5 lg:w-2/3 xl:w-2/5">
            <div className="bg-white p-5">
                <div className="border-2 border-gold">
                    {/* <div className="flex flex-row">
                        <div className="bg-gradient-to-r w-full from-gold-dark to-gold-light h-1" />
                    </div> */}
                    <div className={`${imageSection ? "py-10" : "py-16"} px-5 md:px-10 w-full`}>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section;