import Button from "../button";
import Section from "../section";
import Title from "../title";
import Padres from "./padres";

const DetailsSection = () => {
    return (
        <div className="relative w-full flex flex-col items-center overflow-hidden pb-6">
            <Section>
                <div className="w-full flex flex-col items-center justify-center text-center">
                    <div className="text-lg pb-5 italic">
                        La juventud es bellísima pero complicada, la adultez es fuerte pero esforzada,
                        la vejez es fruto de todo lo vivido...
                    </div>

                    <div className="text-lg pb-5 italic">
                        A mis 80 años, puedo mirar hacia atrás y agradecer el recorrido, lleno de aciertos,
                        errores, tristezas, frustraciones, pero también de regalos colmados de alegrías y satisfacciones...
                    </div>

                    <div className="text-lg pb-5">
                        ¡Hoy, con la bendición de Dios y en compañía de mi familia, quiero celebrar contigo este gran día!
                    </div>

                    <div className="flex flex-col items-center justify-end px-3">
                        <Title label="80" className="text-4xl pt-5" />
                        <div className="text-rosa ">
                            Cumpleaños!
                        </div>
                    </div>


                </div>
            </Section>

            <Section>
                <div className="w-full flex flex-col items-center justify-center text-center">

                    <div className="font-semibold">
                        Sábado 22 de Noviembre de 2025
                    </div>

                    <div className="flex flex-col items-center  text-text-light">
                        <div className="">
                            Lugar: Jardines Sual
                        </div>
                        <div className="">
                            Río Lacantún 409, Colonia Los Laguitos
                        </div>
                        <div className="">
                            2pm - 7pm
                        </div>

                    </div>

                    <Button label="Ubicación" url="" className="mt-5" />


                </div>
            </Section>

        </div>
    )
}

export default DetailsSection;