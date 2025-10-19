import React from "react";
import CountdownSection from "../../_components/countdown/countdownSection";
import DetailsSection from "../../_components/details/detailsSection";
import CeremoniesSection from "../../_components/ceremonies/ceremoniesSection";
import HousingSection from "../../_components/housing/housingSection";
import GallerySection from "../../_components/gallery/gallerySection";
import Footer from "../../_components/footer";
import ConfirmationSection from "../../_components/confirmation/confirmationSection";
import NotesSection from "../../_components/notes/notesSection";
import BackgroundMusic from "~/app/_components/music";

const WeekPage = ({ params }: { params: Promise<{ id: string }> }) => {
    const { id } = React.use(params);

    return (
        <div className="flex flex-col items-center">
            <CountdownSection />
            <DetailsSection />
            <ConfirmationSection id={id} />
            <Footer />
            <BackgroundMusic />
        </div>
    );
};

export default WeekPage;