// components/ModularUnitCard.tsx
import Button from "@/components/common/custom-button";
import { CustomLayout, Delivery, Fiance } from "@/svgs";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

type Spec = {
    title: string;
    details: string[];
};

type ModularUnit = {
    title: string;
    size: string;
    idealFor: string;
    images: string[];
    specImages: string[];
    specs: Spec[];
};

type Props = {
    unit: ModularUnit;
    imagePosition?: "left" | "right";
};

export default function ModularUnitCard({
    unit,
    imagePosition = "right",
}: Props) {
    const isImageLeft = imagePosition === "left";

    return (
        <section className={`
        lg:px-20 lg:pt-20 px-6 py-8 bg-white`}>
            {/* Top Section - Main Images + Content */}
            {/* ${imagePosition === "left" ? "bg-white" : "bg-[#F3F6F5]"} */}
            <div
                className={`max-w-[1600px] mx-auto flex flex-col justify-between gap-8 items-center ${isImageLeft ? "md:flex-row-reverse" : "md:flex-row"
                    }`}
            >
                {/* Images */}
                <div
                    className={`lg:w-1/2 w-full grid gap-4 ${unit.images.length === 1
                        ? "grid-cols-1"
                        : "grid-cols-1 sm:grid-cols-2"
                        }`}
                >
                    {unit.images.map((img, idx) => (
                        <div
                            key={idx}
                            className="relative w-full rounded-lg overflow-hidden "
                        >
                            <Image
                                src={img}
                                alt={`${unit.title} image ${idx + 1}`}
                                width={20}
                                unoptimized
                                height={20}
                                className="object-contain w-full h-full bg-white"
                            />
                        </div>
                    ))}
                </div>

                {/* Text Content */}
                <div className=" lg:w-2/5 w-full flex flex-col justify- gap-2 lg:gap-5">
                    <p className="text-xs tracking-[0.2em] text-gray-700 font-medium uppercase mb-2">
                        Modular
                    </p>
                    <h2 className="text-2xl lg:text-3xl font-bold text-primary mb-2">
                        {unit.title}
                    </h2>
                  <div className="">
                        <p className="text-gray-900 mb-2 font-bold lg:text-xl text-lg">
                            The {unit.title} range consists of{" "}
                            <span className="font-semibold">{unit.size}</span> non-stackable
                            modular units.
                        </p>
                        <p className="text-gray-700 mb-6">
                            <span className="font-bold lg:text-lg">Ideal for:</span>{" "}
                            {unit.idealFor}
                        </p>
                  </div>
                </div>
            </div>

            {/* Bottom Section - Spec Images + Specifications */}
            <div
                className={`max-w-[1600px] mx-auto  justify-between flex flex-col gap-8 items-center ${isImageLeft ? "md:flex-row-reverse" : "md:flex-row"
                    }`}
            >

                <div className="lg:w-1/2 w-full">
                    <div
                        className={` w-full grid gap-4 ${unit.images.length === 1
                            ? "grid-cols-1"
                            : "grid-cols-1 sm:grid-cols-2"
                            }`}
                    >
                        {unit.specImages.map((img, idx) => (
                            <div
                                key={idx}
                                className="relative w-full rounded-lg overflow-hidden "
                            >
                                <Image
                                    src={img}
                                    alt={`${unit.title} image ${idx + 1}`}
                                    width={20}
                                    unoptimized
                                    height={20}
                                    className="object-contain w-full h-full bg-white"
                                />
                            </div>
                        ))}
                    </div>
                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 justify-between text-xs">
                        <div className="space-y-2 flex flex-col items-center">
                            <CustomLayout/>
                            <p className="bg-gray-100 text-300">Custom layout available</p>
                        </div>
                        <div className="space-y-2 flex flex-col items-center">
                            <Fiance />
                            <p className="bg-gray-100 text-300">Financing solutions available</p>
                        </div>
                        <div className="space-y-2 flex flex-col items-center">
                            <Delivery />
                            <p className="bg-gray-100 text-300">Fast delivery</p>
                        </div>
                    </div>
                </div>

                {/* Specifications */}
                <div className="  lg:w-2/5 w-full  flex flex-col justify">
                    <h3 className="text-lg lg:text-2xl font-semibold text-gray-900 py-5 mb-4">
                        Specifications:
                    </h3>
                    <div className="grid grid-cols-1 py-2  lg:grid-cols-2 gap-6 border-t border-b border-primary pt-4">
                        {unit.specs.map((spec, idx) => (
                            <div key={idx}>
                                <h4 className="flex items-center font-bold text-gray-900 mb-2">
                                    <span className="text-primary bg-gray-200 rounded-full w-6 h-6 flex justify-center items-center mr-2">✔</span> {spec.title}:
                                </h4>
                                <ul className="text-gray-700 space-y-1 px-7">
                                    {spec.details.map((detail, i) => (
                                        <li key={i}>{detail}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="mx-auto w-full py-5 mt-10 flex justify-center">
                <Button label={`Request Your Free Quote`} icon={<ArrowRight/>} className="rounded-br-lg py-5 px-5" />
            </div>
        </section>
    );
}
