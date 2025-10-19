import EventBlock from "../eventBlock";
import Section from "../section"

const CeremoniesSection = () => {
    return (
        <Section>
            <div className="flex flex-col gap-14">
                <EventBlock
                    title="Asiste a la fiesta"
                    description={[
                        "Jardines Sual",
                        "Río Lacantún 409, Colonia Los Laguitos",
                    ]}
                    buttonLabel="Ubicación"
                    url="https://maps.app.goo.gl/C1ch45zwGx8YyBDB7"
                    icon="/images/icons/party.png"
                    iconDescription="2:00pm a 7:00pm"
                />
            </div>
        </Section>
    )
}

export default CeremoniesSection;
